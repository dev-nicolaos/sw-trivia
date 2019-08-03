import { getUserInput, printOptions, printSuccess } from '../src/helpers/mod.ts';
import template from './new_source_template.ts';

const formatFileName = (sourceName: string): string =>
  sourceName
    .split(/[- _,:'—]+/)
    .join('_')
    .toLowerCase() + '.ts';

function createSourceFile(mediaType: string, name: string) {
  const { url } = import.meta;
  const projRootURL = url.slice(
    8, // file:///
    url.lastIndexOf('/', url.lastIndexOf('/') - 1),
  );
  const targetDir = `${projRootURL}/src/trivia/${mediaType.toLowerCase()}s`;

  const fileName = formatFileName(name);

  const encoder = new TextEncoder();
  const encodedTemplate = encoder.encode(template(mediaType, name));

  try {
    Deno.chdir(targetDir);
    Deno.writeFileSync(fileName, encodedTemplate);
    printSuccess(`Success! Don't forget to import ${name} in ${targetDir}/mod.ts`);
  } catch (err) {
    console.error(err);
  }
}

async function getNewSourceDetails() {
  const supportedMediaTypes = ['Book', 'Film', 'Game'];

  printOptions(
    'What type of source would you like to create?',
    ...supportedMediaTypes,
  );

  const selectedMediaIndex = +(await getUserInput()) - 1;

  const selectedMediaType = supportedMediaTypes[selectedMediaIndex];

  if (selectedMediaType) {
    const sourceName = await getUserInput('What is the name of the source?');
    createSourceFile(selectedMediaType, sourceName);
  } else {
    console.log('Please selected a valid option');
    getNewSourceDetails();
  }
}

window.addEventListener('load', getNewSourceDetails);
