const mcqs = [
  {
    id: 1,
    question: "Choose the synonym of 'Eloquent'.",
    options: ["Silent", "Clear", "Dull", "Verbose"],
    correctIndex: 3,
  },
  {
    id: 2,
    question: "Choose the antonym of 'Vivid'.",
    options: ["Bright", "Clear", "Dull", "Lively"],
    correctIndex: 2,
  },
  {
    id: 3,
    question:
      "What is the one-word substitution for 'A person who loves books'?",
    options: ["Bibliophile", "Philologist", "Antiquarian", "Librarian"],
    correctIndex: 0,
  },
  {
    id: 4,
    question:
      "Identify the grammatical error in the sentence: 'He don't like ice cream.'",
    options: ["He", "don't", "like", "ice cream"],
    correctIndex: 1,
  },
  {
    id: 5,
    question: "Choose the word with the correct spelling.",
    options: ["Occurance", "Occurence", "Occurrence", "Ocurrance"],
    correctIndex: 2,
  },
  {
    id: 6,
    question: "Choose the correct synonym for 'Abscond'.",
    options: ["Escape", "Surrender", "Adhere", "Consult"],
    correctIndex: 0,
  },
  {
    id: 7,
    question: "Which of the following is the antonym of 'Fortitude'?",
    options: ["Courage", "Fear", "Patience", "Strength"],
    correctIndex: 1,
  },
  {
    id: 8,
    question:
      "What is the one-word substitution for 'A person who studies weather'?",
    options: ["Meteorologist", "Physicist", "Geographer", "Astronomer"],
    correctIndex: 0,
  },
  {
    id: 9,
    question: "Identify the error in the sentence: 'She can sings well.'",
    options: ["She", "can", "sings", "well"],
    correctIndex: 2,
  },
  {
    id: 10,
    question: "Choose the word with the correct spelling.",
    options: ["Rythm", "Rithm", "Rhythm", "Rithym"],
    correctIndex: 2,
  },
  {
    id: 11,
    question: "Choose the synonym of 'Oblivious'.",
    options: ["Aware", "Unaware", "Ignorant", "Cautious"],
    correctIndex: 1,
  },
  {
    id: 12,
    question: "Which word is the antonym of 'Comprehend'?",
    options: ["Understand", "Misunderstand", "Perceive", "Know"],
    correctIndex: 1,
  },
  {
    id: 13,
    question:
      "What is the one-word substitution for 'A person who does not believe in God'?",
    options: ["Atheist", "Theist", "Agonist", "Nihilist"],
    correctIndex: 0,
  },
  {
    id: 14,
    question:
      "Identify the error in the sentence: 'He has been working since five hours.'",
    options: ["He", "has", "been", "since"],
    correctIndex: 3,
  },
  {
    id: 15,
    question: "Choose the word with the correct spelling.",
    options: ["Accommodate", "Acommodate", "Accomadate", "Accomodat"],
    correctIndex: 0,
  },
  {
    id: 16,
    question: "Choose the synonym of 'Turbulent'.",
    options: ["Calm", "Violent", "Serene", "Stable"],
    correctIndex: 1,
  },
  {
    id: 17,
    question: "Which of the following is the antonym of 'Miserly'?",
    options: ["Generous", "Greedy", "Selfish", "Stingy"],
    correctIndex: 0,
  },
  {
    id: 18,
    question:
      "What is the one-word substitution for 'A person who can speak many languages'?",
    options: ["Polyglot", "Linguist", "Bilingual", "Translator"],
    correctIndex: 0,
  },
  {
    id: 19,
    question:
      "Identify the error in the sentence: 'They was happy about the news.'",
    options: ["They", "was", "happy", "about"],
    correctIndex: 1,
  },
  {
    id: 20,
    question: "Choose the word with the correct spelling.",
    options: ["Dilema", "Dilemna", "Dilemma", "Dileme"],
    correctIndex: 2,
  },
  {
    id: 21,
    question: "Choose the synonym of 'Benevolent'.",
    options: ["Kind", "Cruel", "Selfish", "Mean"],
    correctIndex: 0,
  },
  {
    id: 22,
    question: "Which word is the antonym of 'Impulsive'?",
    options: ["Rash", "Deliberate", "Spontaneous", "Hasty"],
    correctIndex: 1,
  },
  {
    id: 23,
    question:
      "What is the one-word substitution for 'A person who loves to eat and drink excessively'?",
    options: ["Glutton", "Gourmet", "Epicure", "Vegetarian"],
    correctIndex: 0,
  },
  {
    id: 24,
    question:
      "Identify the error in the sentence: 'The teacher gave us a useful advice.'",
    options: ["The", "gave", "us", "advice"],
    correctIndex: 3,
  },
  {
    id: 25,
    question: "Choose the word with the correct spelling.",
    options: ["Embarassment", "Embarrassment", "Embarrasment", "Embarasment"],
    correctIndex: 1,
  },
  {
    id: 26,
    question: "Choose the synonym of 'Diligent'.",
    options: ["Lazy", "Hardworking", "Careless", "Indifferent"],
    correctIndex: 1,
  },
  {
    id: 27,
    question: "Which of the following is the antonym of 'Rude'?",
    options: ["Polite", "Friendly", "Kind", "Courteous"],
    correctIndex: 0,
  },
  {
    id: 28,
    question:
      "What is the one-word substitution for 'A person who can never be satisfied'?",
    options: ["Insatiable", "Satiable", "Gratified", "Content"],
    correctIndex: 0,
  },
  {
    id: 29,
    question:
      "Identify the error in the sentence: 'She is more clever than me.'",
    options: ["She", "is", "more", "me"],
    correctIndex: 3,
  },
  {
    id: 30,
    question: "Choose the word with the correct spelling.",
    options: ["Supersede", "Supercede", "Superseede", "Superced"],
    correctIndex: 0,
  },
  {
    id: 31,
    question: "Choose the synonym of 'Serene'.",
    options: ["Calm", "Agitated", "Chaotic", "Noisy"],
    correctIndex: 0,
  },
  {
    id: 32,
    question: "Which word is the antonym of 'Cautious'?",
    options: ["Careful", "Reckless", "Thoughtful", "Mindful"],
    correctIndex: 1,
  },
  {
    id: 33,
    question:
      "What is the one-word substitution for 'A person who is fond of good food and drink'?",
    options: ["Gourmet", "Glutton", "Epicure", "Vegetarian"],
    correctIndex: 0,
  },
  {
    id: 34,
    question:
      "Identify the error in the sentence: 'He is more stronger than his brother.'",
    options: ["He", "is", "more", "stronger"],
    correctIndex: 2,
  },
  {
    id: 35,
    question: "Choose the word with the correct spelling.",
    options: ["Harassment", "Harrasment", "Harrasment", "Harasment"],
    correctIndex: 0,
  },
  {
    id: 36,
    question: "Choose the synonym of 'Enervate'.",
    options: ["Energize", "Exhaust", "Strengthen", "Empower"],
    correctIndex: 1,
  },
  {
    id: 37,
    question: "Which of the following is the antonym of 'Gracious'?",
    options: ["Unkind", "Generous", "Polite", "Thoughtful"],
    correctIndex: 0,
  },
  {
    id: 38,
    question:
      "What is the one-word substitution for 'A person who studies fossils'?",
    options: ["Geologist", "Paleontologist", "Anthropologist", "Historian"],
    correctIndex: 1,
  },
  {
    id: 39,
    question:
      "Identify the error in the sentence: 'They did not completed the assignment.'",
    options: ["They", "did", "not", "completed"],
    correctIndex: 3,
  },
  {
    id: 40,
    question: "Choose the word with the correct spelling.",
    options: ["Conscious", "Concious", "Consious", "Conciious"],
    correctIndex: 0,
  },
  {
    id: 41,
    question: "Choose the synonym of 'Mitigate'.",
    options: ["Increase", "Exacerbate", "Alleviate", "Intensify"],
    correctIndex: 2,
  },
  {
    id: 42,
    question: "Which word is the antonym of 'Trivial'?",
    options: ["Insignificant", "Important", "Meaningless", "Irrelevant"],
    correctIndex: 1,
  },
  {
    id: 43,
    question:
      "What is the one-word substitution for 'A person who studies human society'?",
    options: ["Sociologist", "Psychologist", "Biologist", "Geographer"],
    correctIndex: 0,
  },
  {
    id: 44,
    question: "Identify the error in the sentence: 'He do not like to swim.'",
    options: ["He", "do", "not", "like"],
    correctIndex: 1,
  },
  {
    id: 45,
    question: "Choose the word with the correct spelling.",
    options: [
      "Occasionally",
      "Occassionally",
      "Occasionnally",
      "Occaisionally",
    ],
    correctIndex: 0,
  },
  {
    id: 46,
    question: "Choose the synonym of 'Exonerate'.",
    options: ["Convict", "Blame", "Free", "Charge"],
    correctIndex: 2,
  },
  {
    id: 47,
    question: "Which of the following is the antonym of 'Evasive'?",
    options: ["Clear", "Ambiguous", "Definite", "Vague"],
    correctIndex: 2,
  },
  {
    id: 48,
    question:
      "What is the one-word substitution for 'A person who loves nature'?",
    options: ["Naturalist", "Environmentalist", "Biologist", "Conservationist"],
    correctIndex: 0,
  },
  {
    id: 49,
    question:
      "Identify the error in the sentence: 'She has more better skills than me.'",
    options: ["She", "has", "more", "better"],
    correctIndex: 3,
  },
  {
    id: 50,
    question: "Choose the word with the correct spelling.",
    options: ["Aquisition", "Acquisition", "Aqquisition", "Acquisation"],
    correctIndex: 1,
  },

  {
    id: 51,
    question: "Choose the synonym of 'Recalcitrant'.",
    options: ["Obedient", "Defiant", "Compliant", "Submissive"],
    correctIndex: 1,
  },
  {
    id: 52,
    question: "Which word is the antonym of 'Pessimistic'?",
    options: ["Optimistic", "Negative", "Hopeless", "Gloomy"],
    correctIndex: 0,
  },
  {
    id: 53,
    question:
      "What is the one-word substitution for 'A person who does not believe in the existence of God'?",
    options: ["Atheist", "Agnostic", "Believer", "Theist"],
    correctIndex: 0,
  },
  {
    id: 54,
    question:
      "Identify the error in the sentence: 'She was more cleverer than her brother.'",
    options: ["She", "was", "more", "cleverer"],
    correctIndex: 3,
  },
  {
    id: 55,
    question: "Choose the word with the correct spelling.",
    options: ["Suspicious", "Suspecious", "Suspisious", "Susespicious"],
    correctIndex: 0,
  },
  {
    id: 56,
    question: "Choose the synonym of 'Flabbergasted'.",
    options: ["Astonished", "Bored", "Indifferent", "Curious"],
    correctIndex: 0,
  },
  {
    id: 57,
    question: "Which of the following is the antonym of 'Transparent'?",
    options: ["Clear", "Opaque", "Visible", "Obscure"],
    correctIndex: 1,
  },
  {
    id: 58,
    question:
      "What is the one-word substitution for 'A place where books are kept'?",
    options: ["Library", "Store", "Warehouse", "Archive"],
    correctIndex: 0,
  },
  {
    id: 59,
    question:
      "Identify the error in the sentence: 'The book are on the table.'",
    options: ["The", "book", "are", "on"],
    correctIndex: 2,
  },
  {
    id: 60,
    question: "Choose the word with the correct spelling.",
    options: [
      "Pronounciation",
      "Pronunciation",
      "Pronounciashun",
      "Pronouncation",
    ],
    correctIndex: 1,
  },
  {
    id: 61,
    question: "Choose the synonym of 'Noxious'.",
    options: ["Beneficial", "Harmful", "Innocuous", "Innocent"],
    correctIndex: 1,
  },
  {
    id: 62,
    question: "Which word is the antonym of 'Timid'?",
    options: ["Shy", "Bold", "Afraid", "Fearful"],
    correctIndex: 1,
  },
  {
    id: 63,
    question:
      "What is the one-word substitution for 'A person who does not believe in any religion'?",
    options: ["Atheist", "Agnostic", "Secular", "Non-believer"],
    correctIndex: 2,
  },
  {
    id: 64,
    question:
      "Identify the error in the sentence: 'She can runs faster than me.'",
    options: ["She", "can", "runs", "faster"],
    correctIndex: 2,
  },
  {
    id: 65,
    question: "Choose the word with the correct spelling.",
    options: ["Acknowledge", "Aknowlege", "Acknowlegde", "Acknoledge"],
    correctIndex: 0,
  },
  {
    id: 66,
    question: "Choose the synonym of 'Melancholy'.",
    options: ["Joyous", "Happy", "Sorrowful", "Excited"],
    correctIndex: 2,
  },
  {
    id: 67,
    question: "Which of the following is the antonym of 'Hostile'?",
    options: ["Friendly", "Angry", "Furious", "Bitter"],
    correctIndex: 0,
  },
  {
    id: 68,
    question:
      "What is the one-word substitution for 'A person who writes for newspapers'?",
    options: ["Journalist", "Reporter", "Columnist", "Writer"],
    correctIndex: 0,
  },
  {
    id: 69,
    question:
      "Identify the error in the sentence: 'She could of come to the party.'",
    options: ["She", "could", "of", "come"],
    correctIndex: 2,
    region: `The correct sentence would be: "She could have come to the party."
The error is the incorrect usage of "of" instead of "have".`,
  },
  {
    id: 70,
    question: "Choose the word with the correct spelling.",
    options: ["Embarrassment", "Embarassment", "Emberassment", "Emarrassment"],
    correctIndex: 0,
  },
  {
    id: 71,
    question: "Choose the synonym of 'Evasive'.",
    options: ["Clear", "Direct", "Vague", "Honest"],
    correctIndex: 2,
  },
  {
    id: 72,
    question: "Which of the following is the antonym of 'Righteous'?",
    options: ["Unethical", "Virtuous", "Pure", "Honorable"],
    correctIndex: 0,
  },
  {
    id: 73,
    question:
      "What is the one-word substitution for 'A person who studies stars and planets'?",
    options: ["Astronomer", "Physicist", "Geologist", "Chemist"],
    correctIndex: 0,
  },
  {
    id: 74,
    question:
      "Identify the error in the sentence: 'He has made a decision to go tomorrow.'",
    options: ["He", "has", "made", "tomorrow"],
    correctIndex: 3,
  },
  {
    id: 75,
    question: "Choose the word with the correct spelling.",
    options: ["Embarrasing", "Embarrassing", "Embarassing", "Embarresing"],
    correctIndex: 1,
  },
  {
    id: 76,
    question: "Choose the synonym of 'Ameliorate'.",
    options: ["Worsen", "Enhance", "Deteriorate", "Damage"],
    correctIndex: 1,
  },
  {
    id: 77,
    question: "Which word is the antonym of 'Grim'?",
    options: ["Cheerful", "Solemn", "Serious", "Frightful"],
    correctIndex: 0,
  },
  {
    id: 78,
    question:
      "What is the one-word substitution for 'A person who is obsessed with cleanliness'?",
    options: ["Germaphobe", "Fastidious", "Neatnik", "Clean freak"],
    correctIndex: 0,
  },
  {
    id: 79,
    question:
      "Identify the error in the sentence: 'There are too much people in the room.'",
    options: ["There", "are", "too", "much"],
    correctIndex: 3,
  },
  {
    id: 80,
    question: "Choose the word with the correct spelling.",
    options: ["Consequence", "Consquence", "Consicquence", "Consiquence"],
    correctIndex: 0,
  },
  {
    id: 81,
    question: "Choose the synonym of 'Revere'.",
    options: ["Admire", "Despise", "Ignore", "Hate"],
    correctIndex: 0,
  },
  {
    id: 82,
    question: "Which of the following is the antonym of 'Benevolent'?",
    options: ["Selfish", "Generous", "Kind", "Compassionate"],
    correctIndex: 0,
  },
  {
    id: 83,
    question:
      "What is the one-word substitution for 'A person who does not drink alcohol'?",
    options: ["Teetotaler", "Alcoholic", "Drunkard", "Sober"],
    correctIndex: 0,
  },
  {
    id: 84,
    question:
      "Identify the error in the sentence: 'I will meet you in the evening.'",
    options: ["I", "will", "meet", "No Incorrect"],
    correctIndex: 3,
  },
  {
    id: 85,
    question: "Choose the word with the correct spelling.",
    options: ["Suspicion", "Susspicion", "Suspection", "Suspeccion"],
    correctIndex: 0,
  },
  {
    id: 86,
    question: "Choose the synonym of 'Effulgent'.",
    options: ["Dull", "Radiant", "Dark", "Gloomy"],
    correctIndex: 1,
  },
  {
    id: 87,
    question: "Which word is the antonym of 'Incognito'?",
    options: ["Exposed", "Hidden", "Secret", "Invisible"],
    correctIndex: 0,
  },
  {
    id: 88,
    question:
      "What is the one-word substitution for 'A person who studies insects'?",
    options: ["Entomologist", "Zoologist", "Botanist", "Biologist"],
    correctIndex: 0,
  },
  {
    id: 89,
    question:
      "Identify the error in the sentence: 'There is too many cars on the road.'",
    options: ["There", "is", "too", "many"],
    correctIndex: 3,
  },
  {
    id: 90,
    question: "Choose the word with the correct spelling.",
    options: ["Mischievous", "Mischevious", "Mischeivous", "Mischevious"],
    correctIndex: 0,
  },
  {
    id: 91,
    question: "Choose the synonym of 'Precarious'.",
    options: ["Stable", "Dangerous", "Safe", "Secure"],
    correctIndex: 1,
  },
  {
    id: 92,
    question: "Which of the following is the antonym of 'Taciturn'?",
    options: ["Talkative", "Silent", "Reserved", "Reticent"],
    correctIndex: 0,
  },
  {
    id: 93,
    question:
      "What is the one-word substitution for 'A person who compiles dictionaries'?",
    options: ["Lexicographer", "Linguist", "Writer", "Editor"],
    correctIndex: 0,
  },
  {
    id: 94,
    question:
      "Identify the error in the sentence: 'She did not went to the party.'",
    options: ["She", "did", "not", "went"],
    correctIndex: 3,
  },
  {
    id: 95,
    question: "Choose the word with the correct spelling.",
    options: ["Accidentally", "Accidantally", "Accidentaly", "Accidntally"],
    correctIndex: 0,
  },
  {
    id: 96,
    question: "Choose the synonym of 'Perplexed'.",
    options: ["Confused", "Clear", "Easy", "Understanding"],
    correctIndex: 0,
  },
  {
    id: 97,
    question: "Which of the following is the antonym of 'Magnanimous'?",
    options: ["Selfish", "Generous", "Benevolent", "Charitable"],
    correctIndex: 0,
  },
  {
    id: 98,
    question:
      "What is the one-word substitution for 'A place where ships are repaired'?",
    options: ["Shipyard", "Harbor", "Dock", "Port"],
    correctIndex: 0,
  },
  {
    id: 99,
    question:
      "Identify the error in the sentence: 'I can’t hardly wait for the event.'",
    options: ["I", "can’t", "hardly", "wait"],
    correctIndex: 2,
  },
  {
    id: 100,
    question: "Choose the word with the correct spelling.",
    options: ["Separate", "Seperate", "Seperat", "Separat"],
    correctIndex: 0,
  },
];
// Check by one by one
