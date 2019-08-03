import { SOURCE } from '../src/interfaces/mod.ts';
import {
  getUserInput,
  printOptions,
  printSuccess,
} from '../src/helpers/mod.ts';
import { generateBasicTriviaTemplate } from './templates.ts';

const formatFileName = (sourceName: string): string =>
  sourceName
    .split(/[- _,:'—]+/)
    .join('_')
    .toLowerCase() + '.ts';

const getProjectRootPath = (): string =>
  import.meta.url.slice(
    8, // file:///
    import.meta.url.lastIndexOf('/', import.meta.url.lastIndexOf('/') - 1),
  );

function createSourceFile(source: SOURCE): void {
  const { name, mediaType } = source;

  const targetDir = `${getProjectRootPath()}/src/trivia/${mediaType.toLowerCase()}s`;
  const fileName = formatFileName(name);
  const encodedTemplate = new TextEncoder().encode(
    generateBasicTriviaTemplate(source),
  );

  try {
    Deno.chdir(targetDir);
    Deno.writeFileSync(fileName, encodedTemplate);
    printSuccess(
      `Success! Don't forget to import ${name} in ${targetDir}/mod.ts`,
    );
  } catch (err) {
    console.error(err);
  }
}

async function getNewSourceDetails(): Promise<SOURCE> {
  const supportedMediaTypes = ['Book', 'Film', 'Game'];

  printOptions(
    'What type of source would you like to create?',
    ...supportedMediaTypes,
  );

  const selectedMediaIndex = +(await getUserInput()) - 1;

  const mediaType = supportedMediaTypes[selectedMediaIndex];

  if (mediaType) {
    const name = await getUserInput('What is the name of the source?');
    return { name, mediaType };
  } else {
    console.log('Please selected a valid option');
    getNewSourceDetails();
  }
}

window.addEventListener('load', async () => {
  const newSource = await getNewSourceDetails();
  createSourceFile(newSource);
});
