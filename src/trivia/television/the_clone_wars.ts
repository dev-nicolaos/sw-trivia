import { Trivia } from "types";
import { generateTVSource } from "../generate_source.ts";

const genSource = (episode: string) =>
  generateTVSource("The Clone Wars", episode);

const trivia: Trivia[] = [
  {
    question: "Who commanded the Sepatist blockade of Christophsis?",
    correctAnswer: "Admiral Trench",
    wrongAnswers: ["General Grievous", "Asajj Ventress", "General Loathsom"],
    source: genSource("Cat and Mouse"),
  },
  {
    question:
      "Which clone trooper was feeding intelligence to the Separtists on Christophsis?",
    correctAnswer: "Slick",
    wrongAnswers: ["Chopper", "Rex", "Fives"],
    source: genSource("The Hidden Enemy"),
  },
  {
    question: "Who gave the clone trooper Heavy his nickname?",
    correctAnswer: "99",
    wrongAnswers: ["Shaak Ti", "Bric", "Fives"],
    source: genSource("Clone Cadets"),
  },
  {
    question:
      "How many clones fought with Yoda after being ambushed on Toydaria?",
    correctAnswer: "3",
    wrongAnswers: ["6", "50", "100"],
    source: genSource("Ambush"),
  },
  {
    question: "What type of ship did Ahsoka Tano travel to Christophsis in?",
    correctAnswer: "Republic Attack Shuttle",
    wrongAnswers: [
      "Republic Attack Cruiser",
      "Neimoidian Escort Shuttle",
      "Republic Cruiser",
    ],
    source: genSource("Theatrical Release"),
  },
  {
    question: "Who kidnapped Jabba the Hutt's son Rotta?",
    correctAnswer: "Asajj Ventress",
    wrongAnswers: ["Aurra Sing", "Bossk", "General Grievous"],
    source: genSource("Theatrical Release"),
  },
  {
    question: "Where did Anakin and Ahsoka find the Twighlight?",
    correctAnswer: "Teth",
    wrongAnswers: ["Tatooine", "Mustafar", "Mandalore"],
    source: genSource("Theatrical Release"),
  },
  {
    question: "Which Hutt conspired to help the Separtists kidnap Jabba's son?",
    correctAnswer: "Ziro",
    wrongAnswers: ["Nashi", "Marlo", "Toborro"],
    source: genSource("Theatrical Release"),
  },
  {
    question: "What was the Malevolence's secret weapon?",
    correctAnswer: "An ion Canon",
    wrongAnswers: [
      "An orbital autocannon",
      "An axial superlaser",
      "A gravity well projector",
    ],
    source: genSource("Rising Malevolence"),
  },
  {
    question:
      "Which bomber squadron was tasked with destroying the Malevolence",
    correctAnswer: "Shadow",
    wrongAnswers: ["Gold", "Blade", ""],
    source: genSource("Shadow of Malevolence"),
  },
  {
    question:
      "What shortcut did Anakin and Shadow squadron take to cut off the Malevolence?",
    correctAnswer: "The Balmorra Run",
    wrongAnswers: [
      "The Kessel Run",
      "The Nexus Route",
      "The Perlemian Trade Route",
    ],
    source: genSource("Shadow of Malevolence"),
  },
  {
    question: "Whose ship was captured by the Malevolence?",
    correctAnswer: "Padmé Amidala",
    wrongAnswers: ["Luke Skywalker", "Ahsoka Tano", "Boba Fett"],
    source: genSource("Destroy Malevolence"),
  },
  {
    question:
      "What substance was used as fuel to heat the Republic outpost on Rishi's moon?",
    correctAnswer: "Liquid Tabana",
    wrongAnswers: ["Clouzon-36", "Isotope-5", "Stygium crystals"],
    source: genSource("Rookies"),
  },
  {
    question:
      "Which clone survived the droid infiltration of the Republic outpost outpost on Rishi's moon?",
    correctAnswer: "Echo",
    wrongAnswers: ["Hevy", "Droidbait", "Cutup"],
    source: genSource("Rookies"),
  },
  {
    question:
      "Which droid temporarily replaced R2-D2 when he was lost during the Battle of Bothawui",
    correctAnswer: "R3-S6",
    wrongAnswers: ["4-A7", "R3-A3", "C1-10P"],
    source: genSource("Downfall of a Droid"),
  },
  {
    question: "Who did Viceroy Gunray mistake for a Jedi on Rodia?",
    correctAnswer: "Jar Jar Binks",
    wrongAnswers: ["Senator Amidala", "C-3PO", "Onaconda Farr"],
    source: genSource("Bombad Jedi"),
  },
  {
    question: "Where was General Grievous' Lair?",
    correctAnswer: "The Vassek system",
    wrongAnswers: ["The Zeffo system", "The Bith system", "The Llanic system"],
    source: genSource("Lair of Grevious"),
  },
  {
    question: "Which species was only found on Vanqor?",
    correctAnswer: "Gundark",
    wrongAnswers: ["Loth Wolf", "Krayt Dragon", "Terentatek"],
    source: genSource("Dooku Captured"),
  },
  {
    question: "How far apart were Vanqor and Florrum?",
    correctAnswer: "6 parsecs",
    wrongAnswers: ["12 parsecs", "10 parsecs", "14 parsecs"],
    source: genSource("Dooku Captured"),
  },
  {
    question:
      'Finish the quote: "If one hostage is good, then two are better. And three, _____',
    correctAnswer: "well, that's just good business!",
    wrongAnswers: [
      "well, that's a retirement plan!",
      "well, that's just a gift from above!",
      "well, nobody ever gets three.",
    ],
    source: genSource("The Gungan General"),
  },
  {
    question: "Where was the Separtist lab on Naboo located?",
    correctAnswer: "Eastern Swamps",
    wrongAnswers: ["Theed", "Lake Paonga", "Western Great Grass Plains"],
    source: genSource("Blue Shadow Virus"),
  },
  {
    question: "What disease did Dr. Nuvo Vindi want to release on the galaxy?",
    correctAnswer: "Blue Shadow virus",
    wrongAnswers: ["Rakghoul plague", "Sand fever", "Hypoxia"],
    source: genSource("Blue Shadow Virus"),
  },
  {
    question: 'hat planet was known as "the world of a thousand moons"?',
    correctAnswer: "Iego",
    wrongAnswers: ["Hoth", "Yavin", "Jakku"],
    source: genSource("Mystery of a Thousand Moons"),
  },
  {
    question: "What species inhabited Orto Plutonia?",
    correctAnswer: "Talz",
    wrongAnswers: ["Pantorans", "Veermoks", "Humans"],
    source: genSource("Trespass"),
  },
  {
    question: "What unit did Obi-Wan lead during the Battle of Ryloth?",
    correctAnswer: "Ghost Company",
    wrongAnswers: ["Twilight Company", "Tango Company", "Torrent Company"],
    source: genSource("Innocents of Ryloth"),
  },
  {
    question:
      "What creatures did the Separtists release against Ghost Company at Nabat?",
    correctAnswer: "Gutkurrs",
    wrongAnswers: ["Wampas", "Lyleks", "Acklays"],
    source: genSource("Innocents of Ryloth"),
  },
  {
    question: "Who convinced Cham Syndulla to help the Republic free Lessu?",
    correctAnswer: "Mace Windu",
    wrongAnswers: ["Anakin Skywalker", "Ahsoka Tano", "Isval"],
    source: genSource("Liberty on Ryloth"),
  },
  {
    question:
      "Who did Darth Sideous hire to steal a holocron from the Jedi Temple",
    correctAnswer: "Cad Bane",
    wrongAnswers: ["Boba Fett", "Zam Wessel", "Han Solo"],
    source: genSource("Holocron Heist"),
  },
  {
    question: "How did Cad Bane get Anakin to unlock a holocron?",
    correctAnswer: "Held Ahsoka hostage",
    wrongAnswers: ["Held Padmé hostage", "Impersonated a Jedi", "Drugged him"],
    source: genSource("Cargo of Doom"),
  },
  {
    question:
      "Where did Darth Sideous hold the kidnapped force sensitive children?",
    correctAnswer: "Mustafar",
    wrongAnswers: ["Rodia", "Coruscant", "Exegol"],
    source: genSource("Children of the Force"),
  },
  {
    question:
      "Which bounty hunter was NOT present to help the Jedi defend a Felucian village from pirates?",
    correctAnswer: "Jas Emari",
    wrongAnswers: ["Sugi", "Embo", "Seripas"],
    source: genSource("Bounty Hunters"),
  },
  {
    question: "Which planet was home to the Zillo Beast?",
    correctAnswer: "Malastare",
    wrongAnswers: ["Eriadu", "Geonosis", "Kamino"],
    source: genSource("The Zillo Beast"),
  },
  {
    question: "How was the Zillo Beast killed?",
    correctAnswer: "Toxic gas",
    wrongAnswers: ["Blaster fire", "Lightsaber strike", "Explosive bombs"],
    source: genSource("The Zillo Beast Strikes Back"),
  },
  {
    question: "Which senator represented Scipio during the Clone Wars?",
    correctAnswer: "Rush Clovis",
    wrongAnswers: ["Lott Dodd", "Mon Mothma", "Bail Organa"],
    source: genSource("Senate Spy"),
  },
  {
    question:
      "Who did Ahsoka work with to destroy the Separtist weapons factory on Geonosis?",
    correctAnswer: "Barriss Offee",
    wrongAnswers: ["Asajj Ventress", "Captain Rex", "Anakin Skywalker"],
    source: genSource("Weapons Factory"),
  },
  {
    question: "How did Ahsoka combat the Geonosian brain worms?",
    correctAnswer: "Extreme cold",
    wrongAnswers: ["Extreme heat", "Loud noise", "Lack of gravity"],
    source: genSource("Brain Invaders"),
  },
  {
    question: "Where did the deserter Cut Lawquane raise his family?",
    correctAnswer: "Saleucami",
    wrongAnswers: ["Tatooine", "Naboo", "Onderon"],
    source: genSource("The Deserter"),
  },
  {
    question: "How many systems were a part of The Council of Neutral Systems?",
    correctAnswer: "1500",
    wrongAnswers: ["500", "750", "1000"],
    source: genSource("The Mandalore Plot"),
  },
  {
    question:
      "Who was mentoring Boba Fett when he attempted to assasinate Mace Windu?",
    correctAnswer: "Aurra Sing",
    wrongAnswers: ["Count Dooku", "Jango Fett", "Cad Bane"],
    source: genSource("Death Trap"),
  },
  {
    question:
      "What diluting agent resulted in the poisoning of Mandalorian children?",
    correctAnswer: "Slabin",
    wrongAnswers: ["Barium", "Synox", "Mycotoxin"],
    source: genSource("Corruption"),
  },
  {
    question:
      "Who controlled the black market on Mandalore during the Clone Wars?",
    correctAnswer: "Prime Minister Almec",
    wrongAnswers: ["Dutchess Satine", "Pre Vizsla", "Moff Gideon"],
    source: genSource("The Academy"),
  },
  {
    question:
      "At what event did Aurra Sing attempt to assassinate Senator Amidala?",
    correctAnswer: "A refuge conference on Alderaan",
    wrongAnswers: [
      "A parade on Naboo",
      "A senate meeting on Coruscant",
      "Peace negotiations on Cato Neimoidia",
    ],
    source: genSource("Assassin"),
  },
  {
    question: "Who rescued Aurra Sing from the crash of Slave I on Florrum?",
    correctAnswer: "Hondo Ohnaka",
    wrongAnswers: ["Boba Fett", "Obi-Wan Kenobi", "General Grievous"],
    source: genSource("Assassin"),
  },
  {
    question: "Who was NOT present at the Battle of Kamino?",
    correctAnswer: "Count Dooku",
    wrongAnswers: ["Asajj Ventress", "General Grievous", "Anakin Skywalker"],
    source: genSource("Arc Troopers"),
  },
  {
    question: "When did Fives and Echo recieve the rank of Arc Trooper?",
    correctAnswer: "Following the Battle of Kamino",
    wrongAnswers: [
      "Following the Battle of Ryloth",
      "Following the Battle of Coruscant",
      "Following the Battle of Naboo",
    ],
    source: genSource("Arc Troopers"),
  },
  {
    question:
      "Which bounty hunter was involved in kidnapping Chairman Papanoida's daughter?",
    correctAnswer: "Greedo",
    wrongAnswers: ["Jango Fett", "Hulas", "Calo Nord"],
    source: genSource("Sphere of Influence"),
  },
  {
    question:
      "What were C-3P0 and R2-D2 shopping for when they were abducted by Cad Bane?",
    correctAnswer: "Jogan fruit",
    wrongAnswers: ["Brula fruit", "Chando pepper", "Muja fruit"],
    source: genSource("Evil Plans"),
  },
  {
    question:
      "Which Jedi was inside the Senate building while Cad Bane held it hostage?",
    correctAnswer: "Anakin Skywalker",
    wrongAnswers: ["Ahsoka Tano", "Caleb Dume", "Mace Windu"],
    source: genSource("Hostage Crisis"),
  },
  {
    question: "Who killed Ziro the Hutt?",
    correctAnswer: "Sy Snootles",
    wrongAnswers: ["Cad Bane", "Quinlan Vos", "Gardulla the Hutt"],
    source: genSource("Hunt for Ziro"),
  },
  {
    question:
      "What world was the capital of the Confederacy of Independent Systems?",
    correctAnswer: "Raxus",
    wrongAnswers: ["Serenno", "Bespin", "Malastare"],
    source: genSource("Heroes on Both Sides"),
  },
  {
    question:
      'Which senator\'s warmongering did Senator Amidala call "unpatriotic"?',
    correctAnswer: "Mee Deechi",
    wrongAnswers: ["Riyo Chuchi", "Mon Mothma", "Lux Bonteri"],
    source: genSource("Senate Murders"),
  },
  {
    question: "During which battle Count Dooku betray Asajj Ventress?",
    correctAnswer: "Battle of Sullust?",
    wrongAnswers: [
      "Battle of Kamino",
      "Second Battle of Geonosis",
      "Battle of Coruscant",
    ],
    source: genSource("Nightsisters"),
  },
  {
    question: "What was Asajj Ventress home planet?",
    correctAnswer: "Dathomir",
    wrongAnswers: ["Serenno", "Pantora", "Rattatak"],
    source: genSource("Nightsisters"),
  },
  {
    question:
      "How many Nightsisters accompanied Asajj Ventress during her first attempt to assasinate Dooku?",
    correctAnswer: "2",
    wrongAnswers: ["3", "4", "5"],
    source: genSource("Nightsisters"),
  },
  {
    question: "What species was Savage Opress?",
    correctAnswer: "Zabrak",
    wrongAnswers: ["Rodian", "Bothan", "Trandoshan"],
    source: genSource("Monster"),
  },
  {
    question:
      'According to Obi-Wan, "everyone in the galaxy knows" who/what are dominant on Dathomir?',
    correctAnswer: "Females",
    wrongAnswers: ["Males", "Nydaks", "Rancors"],
    source: genSource("Witches of the Mist"),
  },
  {
    question: "Who killed King Katuunko of Toydaria?",
    correctAnswer: "Savage Opress",
    wrongAnswers: ["Darth Maul", "General Grievous", "Asajj Ventress"],
    source: genSource("Witches of the Mist"),
  },
  {
    question: "How did Obi-Wan learn about the nature of Mortis?",
    correctAnswer: "The Force spirit of Qui-Gon Jinn told him",
    wrongAnswers: [
      "Yoda told him",
      "The Daughter told him",
      "He read about it in an ancient holocron",
    ],
    source: genSource("Overlords"),
  },
  {
    question:
      "Which type was the weapon capable of killing a Mortis force Wielder",
    correctAnswer: "A dagger",
    wrongAnswers: ["A cannon", "A lightsaber", "An axe"],
    source: genSource("Altar of Mortis"),
  },
  {
    question: "Where did Anakin see a vision of his future as Darth Vader?",
    correctAnswer: "Mortis",
    wrongAnswers: ["Korriban", "Coruscant", "Tython"],
    source: genSource("Ghosts of Mortis"),
  },
  {
    question:
      "What information did Captain Tarkin and Master Piell have when they were captured by the Separtists?",
    correctAnswer: "Coordinates for the Nexus Route",
    wrongAnswers: [
      "Coordinates for the Hydian Way",
      "Blueprints for the Death Star",
      "Blueprints for the Malevolence",
    ],
    source: genSource("The Citadel"),
  },
  {
    question:
      "Why did Captain Tarkin think the Jedi should not be leading the Clone Wars?",
    correctAnswer:
      "He thought the Jedi Code prevented them from going far enough to achieve victory",
    wrongAnswers: [
      "He thought the Jedi lacked the necessary miltary experience",
      "He thought the Jedi were becoming too power hungry",
      "He thought that lightsabers were ill-suited weapons for large scale battles",
    ],
    source: genSource("Counter Attack"),
  },
  {
    question: "What killed Jedi Master Even Piell?",
    correctAnswer: "An anooba",
    wrongAnswers: ["A rathar", "A blaster bolt", "An explosion"],
    source: genSource("Citadel Rescue"),
  },
  {
    question:
      "Where was Ahsoka taken to after being captured by the Trandoshans on Felucia?",
    correctAnswer: "Wasskah",
    wrongAnswers: ["Utapau", "Nal Hutta", "Tatooine"],
    source: genSource("Padawan Lost"),
  },
  {
    question:
      "Who was NOT part of the team that rescued Ahsoka and the younglings from the Trandoshans?",
    correctAnswer: "Hondo",
    wrongAnswers: ["Sugi", "Tarfull", "Chewbacca"],
    source: genSource("Wookie Hunt"),
  },
  {
    question: "What species was the Separtist commandeer Riff Tamson?",
    correctAnswer: "Karkarodon",
    wrongAnswers: ["Mon Calamari", "Quarren", "Nautolan"],
    source: genSource("Water War"),
  },
  {
    question:
      "Who led the Republic's clone SCUBA trooper reniforcements into battle on Mon Cala?",
    correctAnswer: "Kit Fisto",
    wrongAnswers: ["Mace Windu", "Obi-Wan Kenobi", "Quinlan Vos"],
    source: genSource("Water War"),
  },
  {
    question:
      "Which type of weapon was NOT used by the Separtists during the Battle of Mon Cala?",
    correctAnswer: "Defoliator",
    wrongAnswers: ["Aqua Droid", "Trident assault ship", "Hydroid Medusa"],
    source: genSource("Gungan Attack"),
  },
  {
    question: "Who killed Riff Tamson?",
    correctAnswer: "Prince Lee-Char",
    wrongAnswers: ["Anakin Skywalker", "Captain Ackbar", "Nossor Ri"],
    source: genSource("Prisoners"),
  },
  {
    question: "How did the Gungan General Tarpals die?",
    correctAnswer: "Sacrificing himself to help capture General Grievous",
    wrongAnswers: [
      "Cut down by Darth Maul during the Battle of Naboo",
      "As a New Republic Senator in the Napkin Bombing",
      "Killed by one of Operation Cinder's satellites on Naboo",
    ],
    source: genSource("Shadow Warrior"),
  },
  {
    question:
      "What type of droids used a hologram illusion to rule over Balnab?",
    correctAnswer: "Pit droids",
    wrongAnswers: ["Astromech droids", "Battle droids", "Protocol droids"],
    source: genSource("Nomad Droids"),
  },
  {
    question:
      "Who took command of the 501st Legion on Umbara after Anakin was recalled to Coruscant?",
    correctAnswer: "General Krell",
    wrongAnswers: ["General Tiin", "General Kenobi", "General Organa"],
    source: genSource("Darkness on Umbara"),
  },
  {
    question: "How did the 501st destroy the Umbaran mobile heavy canons?",
    correctAnswer: "Using stolen Umbaran starfighters",
    wrongAnswers: [
      "Using anti-armor infantry rockets",
      "Using buried thermal detonaters",
      "The Jedi Generals sliced it apart with lightsabers",
    ],
    source: genSource("The General"),
  },
  {
    question:
      "Which clone was NOT part of the unsanctioned attack on a supply ship above Umbara?",
    correctAnswer: "Dogma",
    wrongAnswers: ["Fives", "Hardcase", "Jesse"],
    source: genSource("Plan of Dissent"),
  },
  {
    question:
      "What action of General Krell prompted his clone troopers to arrest him?",
    correctAnswer: "Manipulating clone units into battle against one another",
    wrongAnswers: [
      "Ordering the execution of Fives and Jesse",
      "Ordering a full frontal assult on the Umbaran capital",
      "Taking over command of the 501st Legion from General Skywalker",
    ],
    source: genSource("Carnage of Krell"),
  },
  {
    question: "What species did the Zygerrians kidnap from the planet Kiros?",
    correctAnswer: "Togrutas",
    wrongAnswers: ["Rodians", "Humans", "Twi'leks"],
    source: genSource("Kidnapped"),
  },
  {
    question:
      "What material did the Wookie youngling Gungi choose for his lightsaber?",
    correctAnswer: "Brylark wood",
    wrongAnswers: ["Electrum", "Doonium", "Cerakote"],
    source: genSource("A Test of Strength"),
  },
  {
    question:
      "What did the Jedi younglings pose as in order to get into Hondo's compound?",
    correctAnswer: "Acrobats",
    wrongAnswers: ["Food vendors", "Traders", "Slaves"],
    source: genSource("Bound for Rescue"),
  },
  {
    question:
      'Finish the quote: "The thanklessness, what an accusation! I am gone, _____"',
    correctAnswer: "I will send you my bill!",
    wrongAnswers: [
      "I will never return!",
      "you will regret this!",
      "you have failed for the last time!",
    ],
    source: genSource("A Necessary Bond"),
  },
  {
    question:
      "What unit was sent to steal an encryption module from a Separtist dreadnaught?",
    correctAnswer: "D-Sqaud",
    wrongAnswers: ["Coruscant Honor Guard", "Aegis Company", ""],
    source: genSource("Secret Weapons"),
  },
  {
    question:
      "What planet did D-Squad crash land on after escaping the Separtist dreadnaught?",
    correctAnswer: "Abafar",
    wrongAnswers: ["Mandalore", "Arkanis", "Vallt"],
    source: genSource("A Sunny Day in the Void"),
  },
  {
    question: "What type of clone was Captain Gregor?",
    correctAnswer: "A commando",
    wrongAnswers: ["An ARC trooper", "A jetpack trooper", "A medic"],
    source: genSource("Missing in Action"),
  },
  {
    question:
      "What was the target of the sabotaged Venator loaded with rhydonium?",
    correctAnswer: "A Republic strategy conference",
    wrongAnswers: ["The Republic Senate", "The Jedi Temple", "The Death Star"],
    source: genSource("Point of No Return"),
  },
  {
    question:
      "What group rescued Maul and Savage when they were stranded in space?",
    correctAnswer: "Death Watch",
    wrongAnswers: [
      "Crimson Dawn",
      "Protectors of Concord Dawn",
      "The Pyke Syndicate",
    ],
    source: genSource("Eminence"),
  },
  {
    question:
      "Who did Maul select to be Prime Minister of Mandalore after Pre Vizla betrayed him?",
    correctAnswer: "Almec",
    wrongAnswers: ["Satine", "Bo-Katan", "Gar Saxon"],
    source: genSource("Shades of Reason"),
  },
  {
    question:
      "Where were Anakin and Ahsoka when they were recalled due to the Jedi Temple bombing?",
    correctAnswer: "Cato Neimoidia",
    wrongAnswers: ["Christophsis", "Geonosis", "Felucia"],
    source: genSource("Sabotage"),
  },
  {
    question:
      "What rank did Wilhuff Tarkin hold during the investigation of Letta Turmond?",
    correctAnswer: "Admiral",
    wrongAnswers: ["Captain", "Moff", "General"],
    source: genSource("The Jedi Who Knew Too Much"),
  },
  {
    question:
      "What level of Coruscant was the abandoned warehouse Barriss directed Ahsoka to?",
    correctAnswer: "1315",
    wrongAnswers: ["1313", "1312", "5127"],
    source: genSource("To Catch a Jedi"),
  },
  {
    question:
      "Who perpetrated the crimes against the Republic Ahsoka was accused of?",
    correctAnswer: "Barriss Offee",
    wrongAnswers: ["Asajj Ventress", "Cad Bane", "Pong Krell"],
    source: genSource("The Wrong Jedi"),
  },
  {
    question: "Why did the clone trooper Tup execute Jedi General Tiplar?",
    correctAnswer: "The programming Palpatine had implated within the clones",
    wrongAnswers: [
      "He wanted to collect a bounty",
      "He felt the clones had been enslaved",
      "He was being manipulated with the Force",
    ],
    source: genSource("The Unknown"),
  },
  {
    question:
      "Who provided the inhibtor chips placed inside the minds of the clone troopers?",
    correctAnswer: "Count Dooku",
    wrongAnswers: ["Sifo-Dyas", "Lama Su", "Jango Fett"],
    source: genSource("Conspiracy"),
  },
  {
    question:
      "At what developmental stage were inhibitor chips placed inside clone trooper embryos?",
    correctAnswer: "3",
    wrongAnswers: ["1", "2", "4"],
    source: genSource("Fugitive"),
  },
  {
    question:
      "Where did Fives go after escaping the Grand Republic Medical Center?",
    correctAnswer: "79's",
    wrongAnswers: ["The Jedi Temple", "Coruscant Spaceport", "B'ankor Refuge"],
    source: genSource("Orders"),
  },
  {
    question: "Where was the InterGalactic Banking Clan's vault located?",
    correctAnswer: "Scipio",
    wrongAnswers: ["Skako Minor", "Cato Neimoidia", "Coruscant"],
    source: genSource("An Old Friend"),
  },
  {
    question:
      "Anakin kept a model of what type of craft in his quarters at the Jedi Temple?",
    correctAnswer: "Starfighter",
    wrongAnswers: ["Star Destroyer", "Speeder", "Tank"],
    source: genSource("The Rise of Clovis"),
  },
  {
    question:
      "Which Separtist senator was present when Rush Clovis was given control of the banks?",
    correctAnswer: "Bec Lawise",
    wrongAnswers: ["Mina Bonteri", "Voe Atell", "Amita Fonti"],
    source: genSource("Crisis at the Heart"),
  },
  {
    question: "Who accompanied Jar Jar Binks to Bardotta?",
    correctAnswer: "Mace Windu",
    wrongAnswers: ["Yoda", "Senator Kharrus", "Captain Rex"],
    source: genSource("The Disappeared: Part 1"),
  },
  {
    question: "Who did the Frangawl cultists serve?",
    correctAnswer: "Mother Talzin",
    wrongAnswers: ["Count Dooku", "Darth Sideous", "Moff Gideon"],
    source: genSource("The Disappeared: Part 2"),
  },
  {
    question:
      "What type of ship was the crash where Plo Koon found Sifo-Dyas' lightsaber?",
    correctAnswer: "T-6 shuttle",
    wrongAnswers: [
      "Lambda-class shuttle",
      "Eta-class shuttle",
      "Delta-class shuttle",
    ],
    source: genSource("The Lost One"),
  },
  {
    question: "What planet was the homeworld of the Pyke Syndicate?",
    correctAnswer: "Oba Diah",
    wrongAnswers: ["Mustafar", "Felucia", "Kessel"],
    source: genSource("The Lost One"),
  },
  {
    question:
      "Where did the spirit of Qui-Gon Jinn tell Yoda to go during the deprivation ritual?",
    correctAnswer: "Dagobah",
    wrongAnswers: ["Kashyyyk", "Moraband", "Polis Massa"],
    source: genSource("Voices"),
  },
  {
    question: "What did Yoda say set Anakin apart from other Jedi?",
    correctAnswer: "His spontaneity",
    wrongAnswers: ["His power", "His focus", "His compassion"],
    source: genSource("Voices"),
  },
  {
    question:
      "Which was NOT an emotion represented by the priestesses Yoda met at the Wellspring of Life?",
    correctAnswer: "Fear",
    wrongAnswers: ["Confusion", "Joy", "Serenity"],
    source: genSource("Destiny"),
  },
  {
    question: 'Who created the Sith\'s "Rule of Two"',
    correctAnswer: "Darth Bane",
    wrongAnswers: ["Darth Sideous", "Dath Plagueis", "Darth Malak"],
    source: genSource("Sacrifice"),
  },
  {
    question: "What did Trace Martez name her ship?",
    correctAnswer: "Silver Angel",
    wrongAnswers: ["Twilight", "Invictus", "Broken Horn"],
    source: genSource("Deal No Deal"),
  },
  {
    question: "Trace and Rafa Martez parents were killed during which event?",
    correctAnswer: "Ziro the Hutt's escape from prison",
    wrongAnswers: [
      "Onderonian Civil War",
      "Bombing of the Coruscant's power grid",
      "Maul's takeover of Mandalore",
    ],
    source: genSource("Dangerous Debt"),
  },
  {
    question: "What was the nickname of Clone Force 99?",
    correctAnswer: "The Bad Batch",
    wrongAnswers: ["Havoc Squad", "Safecrackers", "Pathfinders"],
    source: genSource("The Bad Batch"),
  },
  {
    question:
      "Who helped Anakin discretely communicate with Padmé during the Outer Rim Seiges?",
    correctAnswer: "Captain Rex",
    wrongAnswers: ["Obi-Wan", "Fives", "Bo-Katan Kryze"],
    source: genSource("A Distant Echo"),
  },
  {
    question:
      "What piece of technology replaced Echo's right arm after he was turned into a cyborg?",
    correctAnswer: "Scomp link",
    wrongAnswers: ["Buzz saw", "Holocam", "Electro-shock prod"],
    source: genSource("A Distant Echo"),
  },
  {
    question:
      "How many B1 battle droids had Mace Windu destroyed by the Battle of Anaxes?",
    correctAnswer: "One hundred thousand",
    wrongAnswers: ["Ten thousand", "One million", "Five hundred thousand"],
    source: genSource("Unfinished Business"),
  },
  {
    question:
      "Clone Captain Rex was promoted to Commander ahead of which operation?",
    correctAnswer: "The Siege of Mandalore",
    wrongAnswers: [
      "The Second Battle of Geonosis",
      "The Onderonian Civil War",
      "The Battle of Kadavo",
    ],
    source: genSource("Old Friends Not Forgotten"),
  },
  {
    question: "Which clone did Maul interrogate to find out about Ahsoka Tano?",
    correctAnswer: "Jesse",
    wrongAnswers: ["Rex", "Cody", "Fives"],
    source: genSource("The Phantom Apprentice"),
  },
  {
    question: "Where was Maul captured by Ahsoka, Bo Katan, and the clones?",
    correctAnswer: "The support beams of Sundari's dome",
    wrongAnswers: [
      "The Mandalore Royal Academy of Government",
      "The Sundari Royal Palace",
      "The Death Watch base on Concordia",
    ],
    source: genSource("The Phantom Apprentice"),
  },
];

export default trivia;
