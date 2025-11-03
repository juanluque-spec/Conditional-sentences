import { Difficulty, DifficultySetting, Question } from './types';

export const DIFFICULTY_SETTINGS: Record<Difficulty, DifficultySetting> = {
  Easy: {
    level: 'Easy',
    timePerQuestion: 25,
    description: "Longer timer, simpler sentences. Great for getting started.",
  },
  Medium: {
    level: 'Medium',
    timePerQuestion: 20,
    description: "Standard timer, a mix of sentence structures.",
  },
  Hard: {
    level: 'Hard',
    timePerQuestion: 15,
    description: "Shorter timer, complex sentences. A true challenge!",
  },
};

export const QUIZ_QUESTIONS: Question[] = [
  // Easy Questions (25)
  {
    id: 1,
    sentencePart1: "You can watch TV",
    sentencePart2: "you finish all your homework first.",
    options: ["unless", "as long as", "in case", "if only"],
    answer: "as long as",
    explanation: "'As long as' is used to express a condition that must be met for something to happen. It's similar to 'on the condition that'.",
    difficulty: 'Easy'
  },
  {
    id: 2,
    sentencePart1: "We won't be able to go to the concert",
    sentencePart2: "we find a babysitter for the kids.",
    options: ["I wish", "provided that", "unless", "in case"],
    answer: "unless",
    explanation: "'Unless' means 'except if'. The concert is not possible, except if we find a babysitter.",
    difficulty: 'Easy'
  },
  {
    id: 3,
    sentencePart1: "Take your keys with you",
    sentencePart2: "I'm not home when you get back.",
    options: ["as long as", "unless", "if only", "in case"],
    answer: "in case",
    explanation: "'In case' is used to talk about precautions – things we do to be ready for a future situation.",
    difficulty: 'Easy'
  },
  {
    id: 4,
    sentencePart1: "",
    sentencePart2: "I could speak French fluently. My trip to Paris would be so much easier.",
    options: ["In case", "I wish", "Unless", "As long as"],
    answer: "I wish",
    explanation: "'I wish' is used to express a desire for a present situation to be different.",
    difficulty: 'Easy'
  },
  {
    id: 5,
    sentencePart1: "Do not open the attachment",
    sentencePart2: "you are sure it's from a trusted source.",
    options: ["unless", "providing that", "if only", "in case"],
    answer: "unless",
    explanation: "'Unless' introduces the only situation in which the main clause (don't open the attachment) is not true.",
    difficulty: 'Easy'
  },
  {
    id: 6,
    sentencePart1: "He set two alarms",
    sentencePart2: "he overslept.",
    options: ["if only", "in case", "unless", "provided that"],
    answer: "in case",
    explanation: "He took the precaution of setting two alarms to prevent the possibility of oversleeping.",
    difficulty: 'Easy'
  },
  {
    id: 7,
    sentencePart1: "You can borrow my car,",
    sentencePart2: "you promise to drive carefully.",
    options: ["unless", "provided that", "in case", "I wish"],
    answer: "provided that",
    explanation: "'Provided that' sets a specific condition (promising to drive carefully) for borrowing the car.",
    difficulty: 'Easy'
  },
  {
    id: 8,
    sentencePart1: "",
    sentencePart2: "I hadn't eaten so much! I feel sick.",
    options: ["As long as", "Unless", "If only", "In case"],
    answer: "If only",
    explanation: "'If only' is used to express strong regret about a past action.",
    difficulty: 'Easy'
  },
  {
    id: 9,
    sentencePart1: "I'm not going to the party",
    sentencePart2: "you come with me.",
    options: ["unless", "as long as", "I wish", "in case"],
    answer: "unless",
    explanation: "'Unless' means 'except if'. The speaker will only go to the party on the condition that you come too.",
    difficulty: 'Easy'
  },
  {
    id: 10,
    sentencePart1: "I'll write down the address for you",
    sentencePart2: "you forget it.",
    options: ["as long as", "in case", "if only", "unless"],
    answer: "in case",
    explanation: "This is a precaution. Writing down the address is done to prepare for the possibility of forgetting it.",
    difficulty: 'Easy'
  },
  {
    id: 11,
    sentencePart1: "We can play outside",
    sentencePart2: "it doesn't rain.",
    options: ["if only", "I wish", "unless", "as long as"],
    answer: "as long as",
    explanation: "'As long as' specifies the condition (no rain) under which we can play outside.",
    difficulty: 'Easy'
  },
  {
    id: 12,
    sentencePart1: "",
    sentencePart2: "we could stay on vacation forever!",
    options: ["Unless", "As long as", "If only", "In case"],
    answer: "If only",
    explanation: "'If only' expresses a strong wish about a present or future situation that is unlikely or impossible.",
    difficulty: 'Easy'
  },
  {
    id: 13,
    sentencePart1: "The plants will die",
    sentencePart2: "you water them regularly.",
    options: ["I wish", "unless", "as long as", "in case"],
    answer: "unless",
    explanation: "The plants will die, except for in the situation where you water them.",
    difficulty: 'Easy'
  },
  {
    id: 14,
    sentencePart1: "You can use my laptop,",
    sentencePart2: "you don't install any new software.",
    options: ["unless", "as long as", "if only", "in case"],
    answer: "as long as",
    explanation: "'As long as' sets the condition (not installing software) for being able to use the laptop.",
    difficulty: 'Easy'
  },
  {
    id: 15,
    sentencePart1: "I'll bring an umbrella,",
    sentencePart2: "it rains later.",
    options: ["I wish", "providing that", "unless", "in case"],
    answer: "in case",
    explanation: "Bringing an umbrella is a precaution taken for the possibility of rain.",
    difficulty: 'Easy'
  },
  {
    id: 16,
    sentencePart1: "",
    sentencePart2: "I knew the answer to this question.",
    options: ["If only", "As long as", "Unless", "In case"],
    answer: "If only",
    explanation: "'If only' is used to express a strong wish or regret that a present situation was different.",
    difficulty: 'Easy'
  },
  {
    id: 17,
    sentencePart1: "Keep a bottle of water with you",
    sentencePart2: "you get thirsty during the walk.",
    options: ["unless", "in case", "as long as", "if only"],
    answer: "in case",
    explanation: "'In case' is used for taking precautions. Keeping water is a precaution against getting thirsty.",
    difficulty: 'Easy'
  },
  {
    id: 18,
    sentencePart1: "",
    sentencePart2: "I could play the guitar like you do.",
    options: ["Unless", "Provided that", "I wish", "In case"],
    answer: "I wish",
    explanation: "'I wish I could...' is used to express a desire for an ability you don't currently have.",
    difficulty: 'Easy'
  },
  {
    id: 19,
    sentencePart1: "You can't get into the club",
    sentencePart2: "you're over 18.",
    options: ["unless", "as long as", "I wish", "in case"],
    answer: "unless",
    explanation: "'Unless' means 'except if'. The rule is that you cannot get in; the only exception is if you are over 18.",
    difficulty: 'Easy'
  },
  {
    id: 20,
    sentencePart1: "The food will stay fresh",
    sentencePart2: "you keep it in the refrigerator.",
    options: ["if only", "unless", "as long as", "in case"],
    answer: "as long as",
    explanation: "'As long as' specifies the condition (keeping it in the fridge) that will ensure the food stays fresh.",
    difficulty: 'Easy'
  },
  {
    id: 21,
    sentencePart1: "Don't call me",
    sentencePart2: "it's a real emergency.",
    options: ["unless", "as long as", "if only", "in case"],
    answer: "unless",
    explanation: "'Unless' introduces the only exception to the command. The only time to call is for an emergency.",
    difficulty: 'Easy'
  },
  {
    id: 22,
    sentencePart1: "",
    sentencePart2: "this rain would stop! I want to go for a walk.",
    options: ["If only", "As long as", "Unless", "In case"],
    answer: "If only",
    explanation: "'If only' is used here to express a strong wish for a current situation (the rain) to change.",
    difficulty: 'Easy'
  },
  {
    id: 23,
    sentencePart1: "I packed some snacks",
    sentencePart2: "we get hungry on the journey.",
    options: ["if only", "unless", "providing that", "in case"],
    answer: "in case",
    explanation: "Packing snacks is a precaution for the possible future situation of being hungry.",
    difficulty: 'Easy'
  },
  {
    id: 24,
    sentencePart1: "I will help you,",
    sentencePart2: "you tell me the truth.",
    options: ["I wish", "unless", "as long as", "in case"],
    answer: "as long as",
    explanation: "'As long as' makes the help conditional on being told the truth.",
    difficulty: 'Easy'
  },
  {
    id: 25,
    sentencePart1: "Charge your phone now",
    sentencePart2: "the battery dies later.",
    options: ["unless", "if only", "as long as", "in case"],
    answer: "in case",
    explanation: "Charging the phone is a precaution to prevent the future problem of the battery dying.",
    difficulty: 'Easy'
  },
  // Medium Questions (25)
  {
    id: 26,
    sentencePart1: "",
    sentencePart2: "I had known you were coming! I would have baked a cake.",
    options: ["If only", "As long as", "Unless", "In case"],
    answer: "If only",
    explanation: "'If only' (like 'I wish') is used to express a strong regret about something in the past that cannot be changed.",
    difficulty: 'Medium'
  },
  {
    id: 27,
    sentencePart1: "The company will hire you,",
    sentencePart2: "you have relevant experience.",
    options: ["unless", "I wish", "providing that", "in case"],
    answer: "providing that",
    explanation: "'Providing that' (or 'provided that') is a more formal way of saying 'if' or 'on the condition that'.",
    difficulty: 'Medium'
  },
  {
    id: 28,
    sentencePart1: "You're welcome to stay with us",
    sentencePart2: "you like.",
    options: ["in case", "I wish", "as long as", "unless"],
    answer: "as long as",
    explanation: "'As long as' can also mean 'for the entire time that'. Here, it means you can stay for the duration you want.",
    difficulty: 'Medium'
  },
  {
    id: 29,
    sentencePart1: "",
    sentencePart2: "the bus wasn't late today! I'm going to miss my appointment.",
    options: ["As long as", "If only", "Unless", "In case"],
    answer: "If only",
    explanation: "'If only' expresses a strong wish that a current reality was different.",
    difficulty: 'Medium'
  },
  {
    id: 30,
    sentencePart1: "",
    sentencePart2: "I were taller. I could reach the top shelf.",
    options: ["In case", "Provided that", "I wish", "Unless"],
    answer: "I wish",
    explanation: "'I wish' is used with the past subjunctive ('were') to express a desire for a present situation to be different.",
    difficulty: 'Medium'
  },
  {
    id: 31,
    sentencePart1: "The bank will lend you the money,",
    sentencePart2: "you have a good credit score.",
    options: ["providing that", "unless", "in case", "if only"],
    answer: "providing that",
    explanation: "'Providing that' introduces a formal condition for the bank lending you money.",
    difficulty: 'Medium'
  },
  {
    id: 32,
    sentencePart1: "",
    sentencePart2: "I hadn't spent all my money. Now I can't go to the cinema.",
    options: ["Provided that", "In case", "I wish", "As long as"],
    answer: "I wish",
    explanation: "'I wish' is used to express regret about a past action that has a negative consequence in the present.",
    difficulty: 'Medium'
  },
  {
    id: 33,
    sentencePart1: "",
    sentencePart2: "I had studied harder for the exam. I might have passed.",
    options: ["I wish", "As long as", "Unless", "In case"],
    answer: "I wish",
    explanation: "'I wish' followed by the past perfect ('had studied') is used to express regret about a past event.",
    difficulty: 'Medium'
  },
  {
    id: 34,
    sentencePart1: "We will go for a hike on Saturday",
    sentencePart2: "the weather is terrible.",
    options: ["unless", "as long as", "if only", "in case"],
    answer: "unless",
    explanation: "'Unless' introduces the only condition that will prevent the action from happening. We will go hiking, except if the weather is terrible.",
    difficulty: 'Medium'
  },
  {
    id: 35,
    sentencePart1: "You can keep the book",
    sentencePart2: "you need it.",
    options: ["unless", "as long as", "if only", "in case"],
    answer: "as long as",
    explanation: "'As long as' here means 'for the entire period' that you need the book.",
    difficulty: 'Medium'
  },
  {
    id: 36,
    sentencePart1: "I'll be there at 6 PM",
    sentencePart2: "the traffic is really bad.",
    options: ["as long as", "unless", "I wish", "in case"],
    answer: "unless",
    explanation: "The speaker will be there at 6 PM, with the only exception being the possibility of very bad traffic.",
    difficulty: 'Medium'
  },
  {
    id: 37,
    sentencePart1: "",
    sentencePart2: "I had bought the tickets yesterday! Now they're sold out.",
    options: ["As long as", "If only", "Unless", "In case"],
    answer: "If only",
    explanation: "'If only' expresses a strong regret about not performing an action in the past.",
    difficulty: 'Medium'
  },
  {
    id: 38,
    sentencePart1: "The project will be a success,",
    sentencePart2: "we all work together as a team.",
    options: ["unless", "provided that", "I wish", "in case"],
    answer: "provided that",
    explanation: "'Provided that' sets the essential condition (teamwork) for the project's success.",
    difficulty: 'Medium'
  },
  {
    id: 39,
    sentencePart1: "You won't understand the movie",
    sentencePart2: "you've read the book.",
    options: ["as long as", "if only", "unless", "in case"],
    answer: "unless",
    explanation: "The only way to understand the movie is if you have read the book. 'Unless' introduces this exception.",
    difficulty: 'Medium'
  },
  {
    id: 40,
    sentencePart1: "The alarm will not go off",
    sentencePart2: "it detects motion.",
    options: ["unless", "as long as", "if only", "in case"],
    answer: "unless",
    explanation: "The alarm stays off, except for one specific condition: it will go off if it detects motion.",
    difficulty: 'Medium'
  },
  {
    id: 41,
    sentencePart1: "",
    sentencePart2: "it would be sunny tomorrow for the party!",
    options: ["As long as", "If only", "Unless", "In case"],
    answer: "If only",
    explanation: "'If only' can be used to express a strong wish for a future event.",
    difficulty: 'Medium'
  },
  {
    id: 42,
    sentencePart1: "The negotiations are likely to fail",
    sentencePart2: "both parties show more flexibility.",
    options: ["in case", "unless", "as long as", "if only"],
    answer: "unless",
    explanation: "'Unless' introduces the only condition that would prevent the failure of the negotiations.",
    difficulty: 'Medium'
  },
  {
    id: 43,
    sentencePart1: "I'm soaked!",
    sentencePart2: "I had remembered to bring my umbrella.",
    options: ["Unless", "I wish", "Provided that", "In case"],
    answer: "I wish",
    explanation: "'I wish' with the past perfect tense is used to express regret about a past inaction with a present consequence.",
    difficulty: 'Medium'
  },
  {
    id: 44,
    sentencePart1: "The system is secure,",
    sentencePart2: "users follow the two-factor authentication protocol.",
    options: ["unless", "in case", "provided that", "I wish"],
    answer: "provided that",
    explanation: "'Provided that' sets a formal condition (following the protocol) for the system's security to be true.",
    difficulty: 'Medium'
  },
  {
    id: 45,
    sentencePart1: "It's a good idea to have a backup generator",
    sentencePart2: "the main power supply is interrupted.",
    options: ["if only", "unless", "in case", "as long as"],
    answer: "in case",
    explanation: "Having a backup generator is a precaution taken against the possibility of a power interruption.",
    difficulty: 'Medium'
  },
  {
    id: 46,
    sentencePart1: "You can manage the project however you see fit,",
    sentencePart2: "you stay within the budget.",
    options: ["unless", "as long as", "in case", "if only"],
    answer: "as long as",
    explanation: "'As long as' sets the key condition (staying within budget) that must be followed.",
    difficulty: 'Medium'
  },
  {
    id: 47,
    sentencePart1: "",
    sentencePart2: "I could have been there to see her graduate. I heard it was a beautiful ceremony.",
    options: ["If only", "As long as", "Unless", "In case"],
    answer: "If only",
    explanation: "'If only' expresses strong regret about not being able to be present at a past event.",
    difficulty: 'Medium'
  },
  {
    id: 48,
    sentencePart1: "He will not get the security clearance",
    sentencePart2: "he passes a thorough background check.",
    options: ["in case", "unless", "as long as", "I wish"],
    answer: "unless",
    explanation: "Passing the background check is the only exception that will allow him to get the clearance.",
    difficulty: 'Medium'
  },
  {
    id: 49,
    sentencePart1: "",
    sentencePart2: "I were able to attend the meeting, but I have a prior commitment.",
    options: ["Unless", "I wish", "Provided that", "In case"],
    answer: "I wish",
    explanation: "'I wish' with the subjunctive 'were' expresses a desire for a present situation to be different.",
    difficulty: 'Medium'
  },
  {
    id: 50,
    sentencePart1: "Admission to the advanced course is possible,",
    sentencePart2: "the prerequisite classes have been completed.",
    options: ["unless", "if only", "providing that", "in case"],
    answer: "providing that",
    explanation: "'Providing that' introduces the formal requirement (completing prerequisites) for admission.",
    difficulty: 'Medium'
  },
  // Hard Questions (25)
  {
    id: 51,
    sentencePart1: "You will get a promotion,",
    sentencePart2: "you meet your sales targets.",
    options: ["I wish", "unless", "providing that", "in case"],
    answer: "providing that",
    explanation: "'Providing that' is a formal way to state the condition (meeting sales targets) required for getting a promotion.",
    difficulty: 'Hard'
  },
  {
    id: 52,
    sentencePart1: "",
    sentencePart2: "I had listened to your advice. I wouldn't be in this mess.",
    options: ["As long as", "I wish", "Unless", "In case"],
    answer: "I wish",
    explanation: "This expresses a strong regret about a past inaction (not listening to advice).",
    difficulty: 'Hard'
  },
  {
    id: 53,
    sentencePart1: "The contract is ready to be signed,",
    sentencePart2: "all parties agree to the terms.",
    options: ["unless", "providing that", "if only", "in case"],
    answer: "providing that",
    explanation: "'Providing that' formally states the condition that must be met before the contract can be signed.",
    difficulty: 'Hard'
  },
  {
    id: 54,
    sentencePart1: "The agreement is valid",
    sentencePart2: "both sides adhere to the terms.",
    options: ["unless", "as long as", "I wish", "if only"],
    answer: "as long as",
    explanation: "The condition for the agreement's validity is that both sides must continue to follow the terms.",
    difficulty: 'Hard'
  },
  {
    id: 55,
    sentencePart1: "",
    sentencePart2: "I hadn't said that. I really hurt her feelings.",
    options: ["As long as", "I wish", "Unless", "In case"],
    answer: "I wish",
    explanation: "'I wish' with the past perfect tense ('hadn't said') is used to express regret for something said in the past.",
    difficulty: 'Hard'
  },
  {
    id: 56,
    sentencePart1: "You may enter the competition,",
    sentencePart2: "you are over the age of 18.",
    options: ["unless", "if only", "in case", "providing that"],
    answer: "providing that",
    explanation: "'Providing that' formally states the age requirement as a condition for entering the competition.",
    difficulty: 'Hard'
  },
  {
    id: 57,
    sentencePart1: "The merger will proceed,",
    sentencePart2: "there are no objections from the shareholders during the vote.",
    options: ["as long as", "providing that", "unless", "if only"],
    answer: "providing that",
    explanation: "'Providing that' sets a formal and critical condition for the merger to continue.",
    difficulty: 'Hard'
  },
  {
    id: 58,
    sentencePart1: "The manuscript will not be considered for publication",
    sentencePart2: "it is formatted according to the journal's guidelines.",
    options: ["unless", "in case", "as long as", "I wish"],
    answer: "unless",
    explanation: "Formatting is presented as the single condition that would change the outcome of the manuscript not being considered.",
    difficulty: 'Hard'
  },
  {
    id: 59,
    sentencePart1: "Freedom of speech is guaranteed",
    sentencePart2: "it does not incite violence or hatred.",
    options: ["as long as", "if only", "unless", "in case"],
    answer: "as long as",
    explanation: "'As long as' defines the boundary or limit of the guarantee.",
    difficulty: 'Hard'
  },
  {
    id: 60,
    sentencePart1: "",
    sentencePart2: "I had been more forthright about my concerns; we might have avoided this entire situation.",
    options: ["As long as", "I wish", "Unless", "In case"],
    answer: "I wish",
    explanation: "'I wish' followed by the past perfect expresses deep regret about a past behavior that led to negative consequences.",
    difficulty: 'Hard'
  },
  {
    id: 61,
    sentencePart1: "",
    sentencePart2: "one could simply turn back time and undo past mistakes.",
    options: ["If only", "As long as", "Unless", "Provided that"],
    answer: "If only",
    explanation: "'If only' is used here to express a strong, hypothetical wish about an impossible action.",
    difficulty: 'Hard'
  },
  {
    id: 62,
    sentencePart1: "A contingency fund was established",
    sentencePart2: "unforeseen expenses arose during the project's lifecycle.",
    options: ["unless", "in case", "as long as", "I wish"],
    answer: "in case",
    explanation: "The fund is a formal precaution against the possibility of unexpected costs.",
    difficulty: 'Hard'
  },
  {
    id: 63,
    sentencePart1: "The defendant was to be considered innocent",
    sentencePart2: "proven guilty beyond a reasonable doubt.",
    options: ["unless", "as long as", "provided that", "in case"],
    answer: "unless",
    explanation: "This is a fundamental legal principle where 'unless' introduces the only exception to the presumption of innocence.",
    difficulty: 'Hard'
  },
  {
    id: 64,
    sentencePart1: "You are at liberty to use the research materials,",
    sentencePart2: "you properly cite the original sources.",
    options: ["providing that", "unless", "in case", "if only"],
    answer: "providing that",
    explanation: "'Providing that' formally states the non-negotiable condition for using the materials.",
    difficulty: 'Hard'
  },
  {
    id: 65,
    sentencePart1: "",
    sentencePart2: "my command of the language was stronger; I feel I cannot fully express my thoughts.",
    options: ["In case", "I wish", "Unless", "As long as"],
    answer: "I wish",
    explanation: "'I wish' expresses a desire for a different present reality regarding a personal skill.",
    difficulty: 'Hard'
  },
  {
    id: 66,
    sentencePart1: "The ceasefire will hold",
    sentencePart2: "neither side engages in provocative actions.",
    options: ["as long as", "unless", "if only", "in case"],
    answer: "as long as",
    explanation: "'As long as' specifies the ongoing condition required to maintain the ceasefire.",
    difficulty: 'Hard'
  },
  {
    id: 67,
    sentencePart1: "",
    sentencePart2: "he had taken the doctor's warnings more seriously; he might be in better health now.",
    options: ["Unless", "As long as", "If only", "In case"],
    answer: "If only",
    explanation: "'If only' expresses a strong regret about a past inaction that has ongoing health consequences.",
    difficulty: 'Hard'
  },
  {
    id: 68,
    sentencePart1: "Emergency contact information is posted on the bulletin board",
    sentencePart2: "it is needed in a hurry.",
    options: ["if only", "in case", "unless", "provided that"],
    answer: "in case",
    explanation: "The information is posted as a precaution for a potential emergency situation.",
    difficulty: 'Hard'
  },
  {
    id: 69,
    sentencePart1: "The complex experiment cannot be replicated with any accuracy",
    sentencePart2: "the exact same atmospheric conditions are met.",
    options: ["unless", "as long as", "if only", "in case"],
    answer: "unless",
    explanation: "'Unless' highlights the one, critical condition necessary for replication.",
    difficulty: 'Hard'
  },
  {
    id: 70,
    sentencePart1: "The software is licensed for educational use,",
    sentencePart2: "it is not used for any commercial purposes.",
    options: ["providing that", "unless", "I wish", "in case"],
    answer: "providing that",
    explanation: "'Providing that' formally states a strict limitation on the license agreement.",
    difficulty: 'Hard'
  },
  {
    id: 71,
    sentencePart1: "",
    sentencePart2: "the circumstances of our initial meeting had been less awkward.",
    options: ["As long as", "I wish", "Unless", "In case"],
    answer: "I wish",
    explanation: "'I wish' is used to express regret about the nature of a specific past event.",
    difficulty: 'Hard'
  },
  {
    id: 72,
    sentencePart1: "From a purely utilitarian perspective, any strategy is viable",
    sentencePart2: "it aligns with our core ethical principles of not causing harm.",
    options: ["as long as", "if only", "unless", "in case"],
    answer: "as long as",
    explanation: "'As long as' defines the crucial ethical boundary for any viable strategy.",
    difficulty: 'Hard'
  },
  {
    id: 73,
    sentencePart1: "",
    sentencePart2: "we had anticipated the market's volatile reaction more accurately.",
    options: ["If only", "As long as", "Unless", "Provided that"],
    answer: "If only",
    explanation: "'If only' expresses a strong regret about a past failure of judgment or foresight.",
    difficulty: 'Hard'
  },
  {
    id: 74,
    sentencePart1: "The priceless artifacts are not to be removed from the museum",
    sentencePart2: "express written permission is granted by the board of curators.",
    options: ["unless", "in case", "as long as", "I wish"],
    answer: "unless",
    explanation: "'Unless' introduces the highly restrictive and formal exception to the rule.",
    difficulty: 'Hard'
  },
  {
    id: 75,
    sentencePart1: "The proposed policy change will be implemented next quarter,",
    sentencePart2: "it receives final, unanimous approval from the board.",
    options: ["unless", "if only", "in case", "providing that"],
    answer: "providing that",
    explanation: "'Providing that' states the final, formal condition that must be met for implementation.",
    difficulty: 'Hard'
  },
  {
    id: 76,
    sentencePart1: "The research grant will be approved,",
    sentencePart2: "the preliminary data is submitted by the deadline.",
    options: ["unless", "if only", "providing that", "in case"],
    answer: "providing that",
    explanation: "In this formal context, 'providing that' is the best choice to set a strict, non-negotiable condition for the grant's approval.",
    difficulty: 'Hard'
  },
  {
    id: 77,
    sentencePart1: "He spoke to his lawyer before the interrogation,",
    sentencePart2: "he might incriminate himself.",
    options: ["unless", "in case", "as long as", "I wish"],
    answer: "in case",
    explanation: "'In case' is used here to explain the reason for a precaution. He spoke to his lawyer to prepare for the possibility of incriminating himself.",
    difficulty: 'Hard'
  },
  {
    id: 78,
    sentencePart1: "",
    sentencePart2: "I had possessed the foresight to buy that stock; I'd be retired by now.",
    options: ["I wish", "If only", "As long as", "Unless"],
    answer: "If only",
    explanation: "'If only' followed by the past perfect ('had possessed') expresses a powerful regret about a missed opportunity in the past with significant consequences for the present.",
    difficulty: 'Hard'
  },
  {
    id: 79,
    sentencePart1: "The delicate ecosystem will remain in balance",
    sentencePart2: "human intervention is kept to a minimum.",
    options: ["unless", "as long as", "in case", "providing that"],
    answer: "as long as",
    explanation: "'As long as' is used to specify a continuous condition that must be maintained for the main clause to be true. The balance depends on the ongoing state of minimal intervention.",
    difficulty: 'Hard'
  },
  {
    id: 80,
    sentencePart1: "No further action will be taken on your application",
    sentencePart2: "we receive the required supporting documents.",
    options: ["unless", "as long as", "if only", "in case"],
    answer: "unless",
    explanation: "'Unless' introduces the only circumstance that will change the situation. Action will be taken only if the documents are received.",
    difficulty: 'Hard'
  },
  {
    id: 81,
    sentencePart1: "",
    sentencePart2: "I could articulate my thoughts as eloquently as she does.",
    options: ["If only", "I wish", "As long as", "Provided that"],
    answer: "I wish",
    explanation: "'I wish' is used to express a personal desire or longing for a different ability or situation in the present.",
    difficulty: 'Hard'
  },
  {
    id: 82,
    sentencePart1: "A patient's medical records cannot be shared with third parties",
    sentencePart2: "explicit consent is provided in writing.",
    options: ["unless", "as long as", "in case", "I wish"],
    answer: "unless",
    explanation: "In a legal or formal context, 'unless' is used to state the single exception to a strict rule.",
    difficulty: 'Hard'
  },
  {
    id: 83,
    sentencePart1: "The team is permitted to work flexible hours,",
    sentencePart2: "all project deadlines are met without exception.",
    options: ["if only", "providing that", "unless", "in case"],
    answer: "providing that",
    explanation: "'Providing that' introduces a formal, strict condition that must be fulfilled for the main clause to be true. It emphasizes the importance of meeting deadlines.",
    difficulty: 'Hard'
  },
  {
    id: 84,
    sentencePart1: "He keeps a hard copy of all his important documents",
    sentencePart2: "his computer fails.",
    options: ["unless", "in case", "as long as", "if only"],
    answer: "in case",
    explanation: "Keeping a hard copy is a precautionary measure taken against the possibility of computer failure. 'In case' is used for such precautions.",
    difficulty: 'Hard'
  },
  {
    id: 85,
    sentencePart1: "",
    sentencePart2: "the initial investment had been larger, the project would have been sustainable.",
    options: ["If only", "As long as", "Unless", "In case"],
    answer: "If only",
    explanation: "'If only' is used to express a strong regret about a past condition that, if different, would have led to a more positive outcome.",
    difficulty: 'Hard'
  },
  {
    id: 86,
    sentencePart1: "An employee is eligible for the bonus program,",
    sentencePart2: "they have completed at least one year of service with the company.",
    options: ["unless", "providing that", "in case", "I wish"],
    answer: "providing that",
    explanation: "'Providing that' formally states the necessary prerequisite or condition for eligibility in the bonus program.",
    difficulty: 'Hard'
  },
  {
    id: 87,
    sentencePart1: "The evacuation protocol is not to be initiated",
    sentencePart2: "there is a direct and confirmed threat to public safety.",
    options: ["unless", "as long as", "if only", "in case"],
    answer: "unless",
    explanation: "'Unless' introduces the single, critical exception that would trigger the evacuation protocol.",
    difficulty: 'Hard'
  },
  {
    id: 88,
    sentencePart1: "You can continue to use the trial version of the software",
    sentencePart2: "you don't require access to the premium features.",
    options: ["in case", "as long as", "I wish", "unless"],
    answer: "as long as",
    explanation: "'As long as' sets the condition or limitation for using the trial version. The usage is permitted under the condition that premium features are not needed.",
    difficulty: 'Hard'
  },
  {
    id: 89,
    sentencePart1: "A secondary power line was installed",
    sentencePart2: "the primary one was damaged during the storm.",
    options: ["unless", "in case", "providing that", "if only"],
    answer: "in case",
    explanation: "The installation of a secondary power line is a precaution taken to prepare for the potential problem of the primary line being damaged.",
    difficulty: 'Hard'
  },
  {
    id: 90,
    sentencePart1: "",
    sentencePart2: "I hadn't been so dismissive of their concerns earlier.",
    options: ["I wish", "As long as", "Unless", "In case"],
    answer: "I wish",
    explanation: "'I wish' followed by the past perfect ('hadn't been') expresses a personal regret about a past action or attitude.",
    difficulty: 'Hard'
  },
  // 15 New Easy Questions
  {
    id: 91,
    sentencePart1: "You can play video games",
    sentencePart2: "you clean your room.",
    options: ["unless", "as long as", "in case", "if only"],
    answer: "as long as",
    explanation: "'As long as' sets the condition (cleaning your room) that must be met before you can play video games.",
    difficulty: 'Easy'
  },
  {
    id: 92,
    sentencePart1: "I'll take a map",
    sentencePart2: "I get lost.",
    options: ["unless", "if only", "in case", "as long as"],
    answer: "in case",
    explanation: "Taking a map is a precaution for the possibility of getting lost.",
    difficulty: 'Easy'
  },
  {
    id: 93,
    sentencePart1: "We will miss the train",
    sentencePart2: "we hurry.",
    options: ["unless", "as long as", "in case", "I wish"],
    answer: "unless",
    explanation: "'Unless' means 'except if'. We will miss the train, and the only exception is if we hurry.",
    difficulty: 'Easy'
  },
  {
    id: 94,
    sentencePart1: "",
    sentencePart2: "I were a bit taller!",
    options: ["Unless", "As long as", "If only", "In case"],
    answer: "If only",
    explanation: "'If only' is used with 'were' to express a strong wish about a present situation you'd like to change.",
    difficulty: 'Easy'
  },
  {
    id: 95,
    sentencePart1: "She won't talk to you",
    sentencePart2: "you apologize.",
    options: ["as long as", "in case", "unless", "I wish"],
    answer: "unless",
    explanation: "The only condition under which she will talk to you is if you apologize. 'Unless' introduces this exception.",
    difficulty: 'Easy'
  },
  {
    id: 96,
    sentencePart1: "",
    sentencePart2: "I had a bigger garden.",
    options: ["Unless", "I wish", "In case", "As long as"],
    answer: "I wish",
    explanation: "'I wish' is used to express a desire for something you don't currently have.",
    difficulty: 'Easy'
  },
  {
    id: 97,
    sentencePart1: "We can have a picnic",
    sentencePart2: "it stays sunny.",
    options: ["unless", "as long as", "if only", "in case"],
    answer: "as long as",
    explanation: "'As long as' sets the condition (sunny weather) for having the picnic.",
    difficulty: 'Easy'
  },
  {
    id: 98,
    sentencePart1: "Write down his number",
    sentencePart2: "you forget it.",
    options: ["if only", "unless", "in case", "as long as"],
    answer: "in case",
    explanation: "This is a precaution. Writing the number down prepares you for the possibility of forgetting.",
    difficulty: 'Easy'
  },
  {
    id: 99,
    sentencePart1: "He can't go to the concert",
    sentencePart2: "he has a ticket.",
    options: ["unless", "as long as", "in case", "if only"],
    answer: "unless",
    explanation: "The only exception that would allow him to go is having a ticket. 'Unless' means 'except if'.",
    difficulty: 'Easy'
  },
  {
    id: 100,
    sentencePart1: "",
    sentencePart2: "I knew how to fix this.",
    options: ["As long as", "Unless", "I wish", "In case"],
    answer: "I wish",
    explanation: "'I wish' is used to express a desire for knowledge or an ability you don't have right now.",
    difficulty: 'Easy'
  },
  {
    id: 101,
    sentencePart1: "You can have dessert",
    sentencePart2: "you eat your vegetables.",
    options: ["unless", "if only", "provided that", "in case"],
    answer: "provided that",
    explanation: "'Provided that' sets a specific condition (eating vegetables) for getting dessert.",
    difficulty: 'Easy'
  },
  {
    id: 102,
    sentencePart1: "The dog won't bark",
    sentencePart2: "you are quiet.",
    options: ["unless", "if only", "as long as", "in case"],
    answer: "as long as",
    explanation: "The dog will remain quiet under the condition that you are also quiet.",
    difficulty: 'Easy'
  },
  {
    id: 103,
    sentencePart1: "I'll keep my phone on",
    sentencePart2: "you need to call me.",
    options: ["unless", "as long as", "in case", "if only"],
    answer: "in case",
    explanation: "Keeping the phone on is a precaution for the potential situation of you needing to call.",
    difficulty: 'Easy'
  },
  {
    id: 104,
    sentencePart1: "You will fail the test",
    sentencePart2: "you study.",
    options: ["if only", "unless", "as long as", "in case"],
    answer: "unless",
    explanation: "The only way to avoid failing is to study. 'Unless' introduces this single exception.",
    difficulty: 'Easy'
  },
  {
    id: 105,
    sentencePart1: "",
    sentencePart2: "the weekend was longer!",
    options: ["As long as", "Unless", "If only", "In case"],
    answer: "If only",
    explanation: "'If only' expresses a strong wish for a situation to be different from reality.",
    difficulty: 'Easy'
  },
  // 15 New Medium Questions
  {
    id: 106,
    sentencePart1: "He agreed to help,",
    sentencePart2: "he was paid for his time.",
    options: ["unless", "providing that", "in case", "if only"],
    answer: "providing that",
    explanation: "'Providing that' sets a formal condition. His help is conditional on him being paid.",
    difficulty: 'Medium'
  },
  {
    id: 107,
    sentencePart1: "The cat will scratch",
    sentencePart2: "you try to pick it up.",
    options: ["unless", "as long as", "in case", "I wish"],
    answer: "unless",
    explanation: "This is a tricky one! 'Unless' is often used in warnings. The cat won't scratch, except if you try to pick it up.",
    difficulty: 'Medium'
  },
  {
    id: 108,
    sentencePart1: "",
    sentencePart2: "I had paid more attention during the lecture, I would understand this.",
    options: ["If only", "As long as", "Unless", "In case"],
    answer: "If only",
    explanation: "'If only' with the past perfect ('had paid') expresses a regret about the past that has a consequence in the present.",
    difficulty: 'Medium'
  },
  {
    id: 109,
    sentencePart1: "She keeps an extra set of keys in her bag",
    sentencePart2: "she gets locked out.",
    options: ["unless", "if only", "in case", "as long as"],
    answer: "in case",
    explanation: "Keeping extra keys is a precaution taken to prepare for the possibility of getting locked out.",
    difficulty: 'Medium'
  },
  {
    id: 110,
    sentencePart1: "The insurance policy will not be valid",
    sentencePart2: "all payments are made on time.",
    options: ["as long as", "unless", "in case", "if only"],
    answer: "unless",
    explanation: "The policy is invalid, with one exception: it becomes valid if payments are made on time.",
    difficulty: 'Medium'
  },
  {
    id: 111,
    sentencePart1: "",
    sentencePart2: "I hadn't eaten that last piece of cake. I feel so full.",
    options: ["I wish", "As long as", "Unless", "In case"],
    answer: "I wish",
    explanation: "'I wish' followed by the past perfect expresses regret about a past action with a present result.",
    difficulty: 'Medium'
  },
  {
    id: 112,
    sentencePart1: "You are welcome to join the club",
    sentencePart2: "you respect the rules.",
    options: ["unless", "in case", "as long as", "I wish"],
    answer: "as long as",
    explanation: "'As long as' sets the continuous condition required for membership.",
    difficulty: 'Medium'
  },
  {
    id: 113,
    sentencePart1: "They installed a security system",
    sentencePart2: "there was a break-in.",
    options: ["if only", "in case", "unless", "as long as"],
    answer: "in case",
    explanation: "Installing the system was a precaution against the potential event of a break-in.",
    difficulty: 'Medium'
  },
  {
    id: 114,
    sentencePart1: "The application will be rejected",
    sentencePart2: "it is submitted with all the required paperwork.",
    options: ["unless", "as long as", "if only", "in case"],
    answer: "unless",
    explanation: "'Unless' introduces the only way to prevent the application from being rejected.",
    difficulty: 'Medium'
  },
  {
    id: 115,
    sentencePart1: "He can stay out late,",
    sentencePart2: "he calls to check in.",
    options: ["unless", "providing that", "in case", "I wish"],
    answer: "providing that",
    explanation: "'Providing that' sets a specific, required condition for him being allowed to stay out late.",
    difficulty: 'Medium'
  },
  {
    id: 116,
    sentencePart1: "",
    sentencePart2: "I could remember where I put my glasses.",
    options: ["If only", "As long as", "Unless", "In case"],
    answer: "If only",
    explanation: "'If only' (or 'I wish') expresses a strong desire for a present situation to be different.",
    difficulty: 'Medium'
  },
  {
    id: 117,
    sentencePart1: "The event will go ahead",
    sentencePart2: "the weather is exceptionally bad.",
    options: ["unless", "as long as", "in case", "if only"],
    answer: "unless",
    explanation: "The event will happen in all situations except for one: exceptionally bad weather.",
    difficulty: 'Medium'
  },
  {
    id: 118,
    sentencePart1: "I always carry a portable charger with me",
    sentencePart2: "my phone battery dies.",
    options: ["as long as", "unless", "in case", "I wish"],
    answer: "in case",
    explanation: "Carrying a charger is a precaution taken to handle the potential problem of a dead battery.",
    difficulty: 'Medium'
  },
  {
    id: 119,
    sentencePart1: "",
    sentencePart2: "they had arrived a few minutes earlier, they would have seen the parade.",
    options: ["If only", "As long as", "Unless", "In case"],
    answer: "If only",
    explanation: "'If only' is used to express regret about a past situation that, if different, would have changed an outcome.",
    difficulty: 'Medium'
  },
  {
    id: 120,
    sentencePart1: "The offer stands",
    sentencePart2: "you make a decision by Friday.",
    options: ["unless", "if only", "as long as", "in case"],
    answer: "as long as",
    explanation: "'As long as' sets a condition with a time limit. The offer is valid under the condition you decide by Friday.",
    difficulty: 'Medium'
  },
  // 15 New Hard Questions
  {
    id: 121,
    sentencePart1: "Access to the archives is granted,",
    sentencePart2: "the researcher signs a non-disclosure agreement.",
    options: ["unless", "providing that", "in case", "if only"],
    answer: "providing that",
    explanation: "In a formal or legal context, 'providing that' is used to state a mandatory condition.",
    difficulty: 'Hard'
  },
  {
    id: 122,
    sentencePart1: "The entire digital infrastructure is considered secure,",
    sentencePart2: "a successful phishing attack occurs.",
    options: ["unless", "as long as", "in case", "I wish"],
    answer: "unless",
    explanation: "'Unless' introduces the single exception that would invalidate the main clause's statement of security.",
    difficulty: 'Hard'
  },
  {
    id: 123,
    sentencePart1: "",
    sentencePart2: "he had been more prudent with his investments, he wouldn't be facing bankruptcy now.",
    options: ["If only", "As long as", "Unless", "In case"],
    answer: "If only",
    explanation: "'If only' introduces a third conditional structure expressing regret about a past action with a present consequence.",
    difficulty: 'Hard'
  },
  {
    id: 124,
    sentencePart1: "The company will cover your travel expenses,",
    sentencePart2: "they are pre-approved by the finance department.",
    options: ["if only", "unless", "providing that", "in case"],
    answer: "providing that",
    explanation: "'Providing that' is used to state a formal prerequisite in a business or official context.",
    difficulty: 'Hard'
  },
  {
    id: 125,
    sentencePart1: "He was a brilliant strategist;",
    sentencePart2: "I had his tactical mind!",
    options: ["if only", "I wish", "as long as", "unless"],
    answer: "I wish",
    explanation: "'I wish' is used here to express a strong personal desire for an ability someone else possesses.",
    difficulty: 'Hard'
  },
  {
    id: 126,
    sentencePart1: "The system has multiple redundancies",
    sentencePart2: "a critical component should fail.",
    options: ["as long as", "unless", "in case", "I wish"],
    answer: "in case",
    explanation: "In a technical context, 'in case' is used to explain the reason for a contingency plan or feature.",
    difficulty: 'Hard'
  },
  {
    id: 127,
    sentencePart1: "No one is permitted to leave the premises",
    sentencePart2: "authorized to do so by the security chief.",
    options: ["unless", "as long as", "if only", "in case"],
    answer: "unless",
    explanation: "'Unless' is used in formal rules to state the only exception. The passive voice 'unless authorized' is common.",
    difficulty: 'Hard'
  },
  {
    id: 128,
    sentencePart1: "",
    sentencePart2: "I had the opportunity to study abroad when I was younger.",
    options: ["If only", "I wish", "As long as", "Unless"],
    answer: "I wish",
    explanation: "'I wish' followed by the past perfect ('had had' is implied) expresses regret about a missed opportunity in the past.",
    difficulty: 'Hard'
  },
  {
    id: 129,
    sentencePart1: "The legislation is set to pass",
    sentencePart2: "a last-minute amendment dramatically alters its scope.",
    options: ["unless", "as long as", "in case", "if only"],
    answer: "unless",
    explanation: "'Unless' introduces a condition that would be the sole reason for preventing the expected outcome.",
    difficulty: 'Hard'
  },
  {
    id: 130,
    sentencePart1: "The treaty remains in effect",
    sentencePart2: "both nations continue to uphold their commitments.",
    options: ["if only", "unless", "in case", "as long as"],
    answer: "as long as",
    explanation: "'As long as' specifies the ongoing, continuous condition necessary for the treaty to remain valid.",
    difficulty: 'Hard'
  },
  {
    id: 131,
    sentencePart1: "",
    sentencePart2: "we had foreseen the logistical challenges before launching the campaign.",
    options: ["If only", "As long as", "Unless", "In case"],
    answer: "If only",
    explanation: "'If only' is used to express a strong, collective regret about a past lack of foresight.",
    difficulty: 'Hard'
  },
  {
    id: 132,
    sentencePart1: "Data is encrypted during transmission",
    sentencePart2: "it is intercepted by unauthorized parties.",
    options: ["if only", "unless", "in case", "as long as"],
    answer: "in case",
    explanation: "Encryption is a security precaution taken to protect data against the possibility of interception.",
    difficulty: 'Hard'
  },
  {
    id: 133,
    sentencePart1: "The experiment is deemed a failure",
    sentencePart2: "the results can be replicated under controlled conditions.",
    options: ["unless", "as long as", "in case", "I wish"],
    answer: "unless",
    explanation: "The only way for the experiment to not be a failure is for the results to be replicable. 'Unless' introduces this exception.",
    difficulty: 'Hard'
  },
  {
    id: 134,
    sentencePart1: "You may proceed with the plan,",
    sentencePart2: "all stakeholders are kept informed of your progress.",
    options: ["unless", "providing that", "if only", "in case"],
    answer: "providing that",
    explanation: "'Providing that' sets a formal, non-negotiable condition on the permission being granted.",
    difficulty: 'Hard'
  },
  {
    id: 135,
    sentencePart1: "",
    sentencePart2: "I were not bound by this confidentiality agreement, I could tell you everything.",
    options: ["If only", "I wish", "As long as", "Unless"],
    answer: "I wish",
    explanation: "'I wish' with the subjunctive 'were' is used to express a desire for a present reality (a contractual obligation) to be different.",
    difficulty: 'Hard'
  },
  // 15 New Easy Questions (Set 2)
  {
    id: 136,
    sentencePart1: "You can get a cookie",
    sentencePart2: "you finish your dinner.",
    options: ["unless", "as long as", "in case", "if only"],
    answer: "as long as",
    explanation: "'As long as' sets a condition that must be met. You can have a cookie on the condition that you finish your dinner.",
    difficulty: 'Easy'
  },
  {
    id: 137,
    sentencePart1: "I'll pack a sweater",
    sentencePart2: "it gets cold tonight.",
    options: ["unless", "if only", "in case", "as long as"],
    answer: "in case",
    explanation: "Packing a sweater is a precaution for the possibility that it might get cold later.",
    difficulty: 'Easy'
  },
  {
    id: 138,
    sentencePart1: "The game is cancelled",
    sentencePart2: "it stops raining.",
    options: ["unless", "as long as", "in case", "I wish"],
    answer: "unless",
    explanation: "'Unless' means 'except if'. The game is cancelled, and the only exception to this is if the rain stops.",
    difficulty: 'Easy'
  },
  {
    id: 139,
    sentencePart1: "",
    sentencePart2: "I had a dog. I feel lonely.",
    options: ["Unless", "As long as", "I wish", "In case"],
    answer: "I wish",
    explanation: "'I wish' is used to express a desire for a present situation to be different.",
    difficulty: 'Easy'
  },
  {
    id: 140,
    sentencePart1: "You can't go outside",
    sentencePart2: "you put on your coat.",
    options: ["as long as", "in case", "unless", "if only"],
    answer: "unless",
    explanation: "You are not allowed to go outside, with one exception: if you put on your coat.",
    difficulty: 'Easy'
  },
  {
    id: 141,
    sentencePart1: "Let's buy extra pizza",
    sentencePart2: "more people show up.",
    options: ["if only", "unless", "in case", "as long as"],
    answer: "in case",
    explanation: "Buying extra pizza is a precaution taken to prepare for the possibility of more guests.",
    difficulty: 'Easy'
  },
  {
    id: 142,
    sentencePart1: "The team will win,",
    sentencePart2: "they play their best.",
    options: ["unless", "provided that", "in case", "I wish"],
    answer: "provided that",
    explanation: "'Provided that' sets a specific condition. The team will win on the condition that they play their best.",
    difficulty: 'Easy'
  },
  {
    id: 143,
    sentencePart1: "",
    sentencePart2: "I didn't have to go to school today!",
    options: ["If only", "As long as", "Unless", "In case"],
    answer: "If only",
    explanation: "'If only' expresses a strong wish for a current situation to be different.",
    difficulty: 'Easy'
  },
  {
    id: 144,
    sentencePart1: "The baby will keep sleeping",
    sentencePart2: "we are very quiet.",
    options: ["unless", "as long as", "in case", "if only"],
    answer: "as long as",
    explanation: "The baby's sleep is conditional on the ongoing quietness.",
    difficulty: 'Easy'
  },
  {
    id: 145,
    sentencePart1: "He won't pass the exam",
    sentencePart2: "he studies hard.",
    options: ["unless", "as long as", "in case", "I wish"],
    answer: "unless",
    explanation: "He will fail, except for one possibility: if he studies hard.",
    difficulty: 'Easy'
  },
  {
    id: 146,
    sentencePart1: "I'll save you a seat",
    sentencePart2: "you are late.",
    options: ["unless", "in case", "as long as", "if only"],
    answer: "in case",
    explanation: "Saving a seat is a precaution for the possibility that you might be late.",
    difficulty: 'Easy'
  },
  {
    id: 147,
    sentencePart1: "You can stay here",
    sentencePart2: "you help with the chores.",
    options: ["as long as", "unless", "if only", "in case"],
    answer: "as long as",
    explanation: "Your stay is conditional on your help with chores.",
    difficulty: 'Easy'
  },
  {
    id: 148,
    sentencePart1: "",
    sentencePart2: "I could fly like a bird.",
    options: ["Unless", "I wish", "In case", "As long as"],
    answer: "I wish",
    explanation: "'I wish' is used to express a desire for an impossible or unlikely ability.",
    difficulty: 'Easy'
  },
  {
    id: 149,
    sentencePart1: "Don't touch that wire",
    sentencePart2: "you want to get a shock.",
    options: ["unless", "as long as", "in case", "if only"],
    answer: "unless",
    explanation: "'Unless' is used here in a warning, meaning 'don't touch it, except if you want a shock'.",
    difficulty: 'Easy'
  },
  {
    id: 150,
    sentencePart1: "Bring a snack,",
    sentencePart2: "the meeting runs long.",
    options: ["if only", "unless", "in case", "as long as"],
    answer: "in case",
    explanation: "Bringing a snack is a precaution for the possibility of a long meeting.",
    difficulty: 'Easy'
  },
  // 15 New Medium Questions (Set 2)
  {
    id: 151,
    sentencePart1: "",
    sentencePart2: "I hadn't procrastinated so much; I wouldn't be so stressed now.",
    options: ["If only", "As long as", "Unless", "In case"],
    answer: "If only",
    explanation: "'If only' with the past perfect expresses regret about a past action that has a present consequence.",
    difficulty: 'Medium'
  },
  {
    id: 152,
    sentencePart1: "The bank will approve the loan,",
    sentencePart2: "the applicant can provide proof of income.",
    options: ["unless", "providing that", "in case", "I wish"],
    answer: "providing that",
    explanation: "'Providing that' sets a formal condition for the loan's approval.",
    difficulty: 'Medium'
  },
  {
    id: 153,
    sentencePart1: "I'll continue to support the project",
    sentencePart2: "it remains true to its original goals.",
    options: ["in case", "I wish", "as long as", "unless"],
    answer: "as long as",
    explanation: "'As long as' specifies an ongoing condition for the support to continue.",
    difficulty: 'Medium'
  },
  {
    id: 154,
    sentencePart1: "Data recovery will be impossible",
    sentencePart2: "a backup was made recently.",
    options: ["as long as", "unless", "in case", "if only"],
    answer: "unless",
    explanation: "The only exception that would make recovery possible is a recent backup.",
    difficulty: 'Medium'
  },
  {
    id: 155,
    sentencePart1: "",
    sentencePart2: "I had taken that job offer when I had the chance.",
    options: ["I wish", "As long as", "Unless", "In case"],
    answer: "I wish",
    explanation: "'I wish' with the past perfect expresses regret about a past missed opportunity.",
    difficulty: 'Medium'
  },
  {
    id: 156,
    sentencePart1: "We should double-check the figures",
    sentencePart2: "there's an error in the report.",
    options: ["if only", "unless", "in case", "as long as"],
    answer: "in case",
    explanation: "Double-checking is a precaution against the possibility of an error.",
    difficulty: 'Medium'
  },
  {
    id: 157,
    sentencePart1: "You won't gain their trust",
    sentencePart2: "you are honest with them.",
    options: ["unless", "as long as", "in case", "if only"],
    answer: "unless",
    explanation: "The only way to gain their trust is by being honest.",
    difficulty: 'Medium'
  },
  {
    id: 158,
    sentencePart1: "The festival is free to enter,",
    sentencePart2: "you purchase tickets for the main stage performances.",
    options: ["unless", "providing that", "in case", "I wish"],
    answer: "providing that",
    explanation: "'Providing that' sets a formal condition. While entry is free, seeing main performances has a condition.",
    difficulty: 'Medium'
  },
  {
    id: 159,
    sentencePart1: "",
    sentencePart2: "I were a bit more confident in public speaking.",
    options: ["If only", "As long as", "Unless", "In case"],
    answer: "If only",
    explanation: "'If only' with the subjunctive 'were' expresses a strong wish about a current personal trait.",
    difficulty: 'Medium'
  },
  {
    id: 160,
    sentencePart1: "It is not a problem",
    sentencePart2: "you clean up after yourself.",
    options: ["unless", "as long as", "in case", "if only"],
    answer: "as long as",
    explanation: "'As long as' sets the condition that makes something 'not a problem'.",
    difficulty: 'Medium'
  },
  {
    id: 161,
    sentencePart1: "The plant will not survive the winter",
    sentencePart2: "it's brought indoors.",
    options: ["as long as", "unless", "in case", "if only"],
    answer: "unless",
    explanation: "The only way for the plant to survive is if it's brought indoors.",
    difficulty: 'Medium'
  },
  {
    id: 162,
    sentencePart1: "The subscription can be cancelled at any time,",
    sentencePart2: "a 30-day notice is given.",
    options: ["unless", "providing that", "in case", "I wish"],
    answer: "providing that",
    explanation: "'Providing that' introduces a formal requirement for cancelling the subscription.",
    difficulty: 'Medium'
  },
  {
    id: 163,
    sentencePart1: "",
    sentencePart2: "I'd remembered it was your birthday! I feel terrible.",
    options: ["If only", "As long as", "Unless", "In case"],
    answer: "If only",
    explanation: "'If only' with the past perfect expresses strong regret about forgetting something.",
    difficulty: 'Medium'
  },
  {
    id: 164,
    sentencePart1: "Leave the emergency exit clear",
    sentencePart2: "it needs to be used.",
    options: ["if only", "unless", "in case", "as long as"],
    answer: "in case",
    explanation: "Leaving the exit clear is a precaution for a potential emergency.",
    difficulty: 'Medium'
  },
  {
    id: 165,
    sentencePart1: "She felt like a failure.",
    sentencePart2: "she could have done more to help them.",
    options: ["Unless", "I wish", "As long as", "If only"],
    answer: "If only",
    explanation: "'If only' can introduce a thought of regret, implying a strong wish that things were different.",
    difficulty: 'Medium'
  },
  // 15 New Hard Questions (Set 2)
  {
    id: 166,
    sentencePart1: "The quantum experiment will remain theoretically sound",
    sentencePart2: "new evidence emerges to contradict its foundational principles.",
    options: ["unless", "as long as", "in case", "providing that"],
    answer: "unless",
    explanation: "'Unless' introduces the single, game-changing condition that would invalidate the theory.",
    difficulty: 'Hard'
  },
  {
    id: 167,
    sentencePart1: "Full diplomatic immunity is granted to the envoy,",
    sentencePart2: "they do not engage in activities outside their official capacity.",
    options: ["if only", "providing that", "unless", "in case"],
    answer: "providing that",
    explanation: "'Providing that' states a formal, legal condition on the immunity granted.",
    difficulty: 'Hard'
  },
  {
    id: 168,
    sentencePart1: "",
    sentencePart2: "I had possessed the temperament to navigate such a politically charged environment.",
    options: ["If only", "I wish", "As long as", "Unless"],
    answer: "I wish",
    explanation: "'I wish' expresses a personal regret about a lack of a certain quality in a past situation.",
    difficulty: 'Hard'
  },
  {
    id: 169,
    sentencePart1: "The server maintains multiple data backups",
    sentencePart2: "a catastrophic system failure occurs.",
    options: ["unless", "in case", "as long as", "if only"],
    answer: "in case",
    explanation: "Multiple backups are a standard precaution against the possibility of a catastrophic failure.",
    difficulty: 'Hard'
  },
  {
    id: 170,
    sentencePart1: "A species is not considered endangered",
    sentencePart2: "its population declines below a critical threshold.",
    options: ["unless", "as long as", "in case", "if only"],
    answer: "unless",
    explanation: "'Unless' defines the specific scientific benchmark that changes the classification.",
    difficulty: 'Hard'
  },
  {
    id: 171,
    sentencePart1: "The intellectual property is yours to use,",
    sentencePart2: "it is not monetized without express written consent.",
    options: ["unless", "providing that", "in case", "I wish"],
    answer: "providing that",
    explanation: "'Providing that' formally outlines a key restriction in a licensing agreement.",
    difficulty: 'Hard'
  },
  {
    id: 172,
    sentencePart1: "The peace accord will be fragile at best",
    sentencePart2: "both sides are willing to make significant concessions.",
    options: ["as long as", "unless", "in case", "if only"],
    answer: "unless",
    explanation: "The fragility of the accord will only be overcome if the condition of making concessions is met.",
    difficulty: 'Hard'
  },
  {
    id: 173,
    sentencePart1: "One is free to pursue any course of study,",
    sentencePart2: "one meets the academic prerequisites.",
    options: ["unless", "as long as", "providing that", "I wish"],
    answer: "as long as",
    explanation: "'As long as' is often used in general statements of rules or principles, similar to 'provided that'.",
    difficulty: 'Hard'
  },
  {
    id: 174,
    sentencePart1: "",
    sentencePart2: "the committee had been privy to this information before the vote was cast.",
    options: ["If only", "As long as", "Unless", "In case"],
    answer: "If only",
    explanation: "'If only' expresses a strong regret about a lack of information that would have changed a past decision.",
    difficulty: 'Hard'
  },
  {
    id: 175,
    sentencePart1: "The algorithm can operate indefinitely",
    sentencePart2: "its input parameters remain within the specified tolerances.",
    options: ["unless", "as long as", "if only", "in case"],
    answer: "as long as",
    explanation: "'As long as' describes a continuous condition required for the algorithm's stable operation.",
    difficulty: 'Hard'
  },
  {
    id: 176,
    sentencePart1: "The ceasefire is not to be broken",
    sentencePart2: "a direct act of aggression is confirmed by neutral observers.",
    options: ["as long as", "unless", "in case", "if only"],
    answer: "unless",
    explanation: "'Unless' introduces the very specific, formally defined exception to the rule of the ceasefire.",
    difficulty: 'Hard'
  },
  {
    id: 177,
    sentencePart1: "",
    sentencePart2: "I had been more judicious in my allocation of resources at the project's outset.",
    options: ["I wish", "As long as", "Unless", "In case"],
    answer: "I wish",
    explanation: "'I wish' expresses a personal regret about a past strategic error.",
    difficulty: 'Hard'
  },
  {
    id: 178,
    sentencePart1: "A fail-safe mechanism was built into the reactor",
    sentencePart2: "a core temperature anomaly occurred.",
    options: ["unless", "if only", "in case", "as long as"],
    answer: "in case",
    explanation: "The fail-safe is a technical precaution against the potential of a specific type of emergency.",
    difficulty: 'Hard'
  },
  {
    id: 179,
    sentencePart1: "The manuscript is not fit for publication",
    sentencePart2: "it undergoes a substantial and thorough revision.",
    options: ["unless", "as long as", "if only", "in case"],
    answer: "unless",
    explanation: "The only action that can change the manuscript's status is a significant revision.",
    difficulty: 'Hard'
  },
  {
    id: 180,
    sentencePart1: "This legal precedent will stand,",
    sentencePart2: "it is overturned by a higher court.",
    options: ["unless", "providing that", "in case", "if only"],
    answer: "unless",
    explanation: "'Unless' is the perfect word to describe how legal precedents work; they are valid until a specific action (being overturned) happens.",
    difficulty: 'Hard'
  },
  // 45 NEW QUESTIONS START HERE
  // 15 New Easy
  {
    id: 181,
    sentencePart1: "You can eat the last slice of pizza,",
    sentencePart2: "you save a piece for me.",
    options: ["unless", "as long as", "in case", "if only"],
    answer: "as long as",
    explanation: "'As long as' sets a condition. You can eat the pizza on the condition that you save some for me.",
    difficulty: 'Easy'
  },
  {
    id: 182,
    sentencePart1: "I'll put my umbrella in my bag",
    sentencePart2: "it rains.",
    options: ["if only", "unless", "in case", "as long as"],
    answer: "in case",
    explanation: "This is a precaution. I'm taking the umbrella to be prepared for the possibility of rain.",
    difficulty: 'Easy'
  },
  {
    id: 183,
    sentencePart1: "He won't forgive you",
    sentencePart2: "you say you're sorry.",
    options: ["unless", "as long as", "in case", "I wish"],
    answer: "unless",
    explanation: "'Unless' means 'except if'. The only way he will forgive you is if you apologize.",
    difficulty: 'Easy'
  },
  {
    id: 184,
    sentencePart1: "",
    sentencePart2: "I could see my friends this weekend.",
    options: ["Unless", "As long as", "I wish", "In case"],
    answer: "I wish",
    explanation: "'I wish' is used to express a desire for something to happen that is not certain.",
    difficulty: 'Easy'
  },
  {
    id: 185,
    sentencePart1: "We can go to the park",
    sentencePart2: "you finish your chores.",
    options: ["as long as", "in case", "unless", "if only"],
    answer: "as long as",
    explanation: "Going to the park is conditional on you finishing your chores first.",
    difficulty: 'Easy'
  },
  {
    id: 186,
    sentencePart1: "The door won't open",
    sentencePart2: "you have the key.",
    options: ["unless", "I wish", "In case", "As long as"],
    answer: "unless",
    explanation: "The door remains closed, with one exception: if you have the key.",
    difficulty: 'Easy'
  },
  {
    id: 187,
    sentencePart1: "Take a jacket",
    sentencePart2: "it gets chilly.",
    options: ["unless", "as long as", "if only", "in case"],
    answer: "in case",
    explanation: "Taking a jacket is a precaution for the possibility that the weather might get cold.",
    difficulty: 'Easy'
  },
  {
    id: 188,
    sentencePart1: "",
    sentencePart2: "I had more free time!",
    options: ["if only", "unless", "in case", "as long as"],
    answer: "if only",
    explanation: "'If only' expresses a strong wish for a situation to be different from reality.",
    difficulty: 'Easy'
  },
  {
    id: 189,
    sentencePart1: "You'll be late for school",
    sentencePart2: "you leave now.",
    options: ["unless", "as long as", "in case", "if only"],
    answer: "unless",
    explanation: "You are going to be late, except for one condition: if you leave right now.",
    difficulty: 'Easy'
  },
  {
    id: 190,
    sentencePart1: "You can use my pen",
    sentencePart2: "you give it back.",
    options: ["As long as", "Unless", "I wish", "In case"],
    answer: "As long as",
    explanation: "'As long as' sets the condition that you must return the pen to be allowed to use it.",
    difficulty: 'Easy'
  },
  {
    id: 191,
    sentencePart1: "I'll call you before I leave",
    sentencePart2: "you're not ready.",
    options: ["unless", "if only", "provided that", "in case"],
    answer: "in case",
    explanation: "Calling is a precaution to prepare for the possibility that you might not be ready.",
    difficulty: 'Easy'
  },
  {
    id: 192,
    sentencePart1: "",
    sentencePart2: "I knew the answer.",
    options: ["unless", "if only", "as long as", "in case"],
    answer: "if only",
    explanation: "'If only' (or 'I wish') is used to express regret about not knowing something in the present.",
    difficulty: 'Easy'
  },
  {
    id: 193,
    sentencePart1: "The cat is friendly",
    sentencePart2: "you don't pull its tail.",
    options: ["unless", "as long as", "in case", "if only"],
    answer: "as long as",
    explanation: "The cat's friendliness is conditional on you not pulling its tail.",
    difficulty: 'Easy'
  },
  {
    id: 194,
    sentencePart1: "Don't go in the water",
    sentencePart2: "a lifeguard is present.",
    options: ["if only", "unless", "as long as", "in case"],
    answer: "unless",
    explanation: "This is a rule. The only exception that allows you to go in the water is the presence of a lifeguard.",
    difficulty: 'Easy'
  },
  {
    id: 195,
    sentencePart1: "",
    sentencePart2: "this movie was more interesting.",
    options: ["As long as", "Unless", "I wish", "In case"],
    answer: "I wish",
    explanation: "'I wish' is used to express a desire for a current situation (a boring movie) to be different.",
    difficulty: 'Easy'
  },
  // 15 New Medium
  {
    id: 196,
    sentencePart1: "The fire alarm will remain silent",
    sentencePart2: "smoke is detected.",
    options: ["unless", "as long as", "in case", "I wish"],
    answer: "unless",
    explanation: "The alarm stays silent, with one exception: it will make noise if smoke is detected.",
    difficulty: 'Medium'
  },
  {
    id: 197,
    sentencePart1: "",
    sentencePart2: "I had checked the weather forecast before leaving the house. I'm soaked!",
    options: ["If only", "As long as", "Unless", "In case"],
    answer: "If only",
    explanation: "'If only' with the past perfect expresses a strong regret about a past inaction with a present result.",
    difficulty: 'Medium'
  },
  {
    id: 198,
    sentencePart1: "He's allowed to drive the car",
    sentencePart2: "he pays for his own gas.",
    options: ["unless", "providing that", "in case", "if only"],
    answer: "providing that",
    explanation: "'Providing that' sets a specific, required condition for him being allowed to drive the car.",
    difficulty: 'Medium'
  },
  {
    id: 199,
    sentencePart1: "You won't improve your skills",
    sentencePart2: "you practice consistently.",
    options: ["as long as", "unless", "in case", "if only"],
    answer: "unless",
    explanation: "The only way you will improve is if you practice consistently. 'Unless' introduces this single exception.",
    difficulty: 'Medium'
  },
  {
    id: 200,
    sentencePart1: "We took down the address",
    sentencePart2: "we couldn't find the house using GPS.",
    options: ["if only", "I wish", "in case", "as long as"],
    answer: "in case",
    explanation: "Taking down the address was a backup plan, a precaution against the possibility of the GPS failing.",
    difficulty: 'Medium'
  },
  {
    id: 201,
    sentencePart1: "",
    sentencePart2: "I could have been there for your graduation ceremony.",
    options: ["I wish", "As long as", "Unless", "In case"],
    answer: "I wish",
    explanation: "'I wish' with 'could have been' expresses regret about not being able to attend a past event.",
    difficulty: 'Medium'
  },
  {
    id: 202,
    sentencePart1: "The website will remain online",
    sentencePart2: "the server fees are paid.",
    options: ["unless", "in case", "as long as", "I wish"],
    answer: "as long as",
    explanation: "'As long as' specifies the continuous condition required for the website to stay online.",
    difficulty: 'Medium'
  },
  {
    id: 203,
    sentencePart1: "The deal will fall through",
    sentencePart2: "both parties sign the contract by tomorrow.",
    options: ["if only", "in case", "unless", "as long as"],
    answer: "unless",
    explanation: "The deal is going to fail, with one exception: if the contract is signed by the deadline.",
    difficulty: 'Medium'
  },
  {
    id: 204,
    sentencePart1: "",
    sentencePart2: "I had been more patient with them.",
    options: ["If only", "As long as", "Unless", "In case"],
    answer: "If only",
    explanation: "'If only' is used to express a strong regret about a personal behavior in the past.",
    difficulty: 'Medium'
  },
  {
    id: 205,
    sentencePart1: "He keeps a first-aid kit in his car",
    sentencePart2: "of an emergency.",
    options: ["unless", "providing that", "in case", "I wish"],
    answer: "in case",
    explanation: "He keeps the kit as a precaution for a potential emergency. The phrase is 'in case of'.",
    difficulty: 'Medium'
  },
  {
    id: 206,
    sentencePart1: "The discount is applicable",
    sentencePart2: "you have a valid student ID.",
    options: ["unless", "as long as", "providing that", "if only"],
    answer: "providing that",
    explanation: "'Providing that' formally states the condition needed to receive the discount.",
    difficulty: 'Medium'
  },
  {
    id: 207,
    sentencePart1: "",
    sentencePart2: "I had known you were in town! We could have met up.",
    options: ["If only", "As long as", "Unless", "In case"],
    answer: "If only",
    explanation: "'If only' with the past perfect expresses regret about not knowing information that would have changed past actions.",
    difficulty: 'Medium'
  },
  {
    id: 208,
    sentencePart1: "The garden will flourish",
    sentencePart2: "it gets enough sunlight and water.",
    options: ["unless", "as long as", "in case", "I wish"],
    answer: "as long as",
    explanation: "The garden's flourishing is conditional on the ongoing presence of sunlight and water.",
    difficulty: 'Medium'
  },
  {
    id: 209,
    sentencePart1: "The files will be deleted permanently",
    sentencePart2: "you restore them from the trash within 30 days.",
    options: ["as long as", "unless", "in case", "if only"],
    answer: "unless",
    explanation: "The files are going to be deleted. The only action that can prevent this is restoring them.",
    difficulty: 'Medium'
  },
  {
    id: 210,
    sentencePart1: "They packed extra food and water",
    sentencePart2: "their flight was delayed.",
    options: ["if only", "unless", "in case", "as long as"],
    answer: "in case",
    explanation: "Packing extra supplies was a precaution taken to prepare for the potential problem of a flight delay.",
    difficulty: 'Medium'
  },
  // 15 New Hard
  {
    id: 211,
    sentencePart1: "The experiment's results are considered valid",
    sentencePart2: "they can be independently replicated.",
    options: ["unless", "providing that", "in case", "if only"],
    answer: "providing that",
    explanation: "'Providing that' sets a formal, scientific condition for the validity of the results.",
    difficulty: 'Hard'
  },
  {
    id: 212,
    sentencePart1: "The historic building is not to be altered in any way",
    sentencePart2: "express permission is granted by the preservation society.",
    options: ["unless", "as long as", "in case", "I wish"],
    answer: "unless",
    explanation: "This is a strict rule. 'Unless' introduces the single, formal exception to this rule.",
    difficulty: 'Hard'
  },
  {
    id: 213,
    sentencePart1: "",
    sentencePart2: "I had possessed the acumen to see the long-term implications of that decision.",
    options: ["If only", "I wish", "As long as", "Unless"],
    answer: "I wish",
    explanation: "'I wish' is used to express a personal regret about lacking a certain skill or quality in a past situation.",
    difficulty: 'Hard'
  },
  {
    id: 214,
    sentencePart1: "The sensitive data is stored on an air-gapped computer",
    sentencePart2: "a network breach should occur.",
    options: ["unless", "in case", "as long as", "if only"],
    answer: "in case",
    explanation: "Using an air-gapped computer is a technical precaution against the possibility of a network breach.",
    difficulty: 'Hard'
  },
  {
    id: 215,
    sentencePart1: "The treaty will remain in force",
    sentencePart2: "no signatory nation violates its core tenets.",
    options: ["unless", "as long as", "in case", "if only"],
    answer: "as long as",
    explanation: "'As long as' specifies the continuous condition that must be maintained for the treaty to be valid.",
    difficulty: 'Hard'
  },
  {
    id: 216,
    sentencePart1: "The candidate will be disqualified from the election",
    sentencePart2: "it is proven they knowingly violated campaign finance laws.",
    options: ["unless", "providing that", "in case", "I wish"],
    answer: "unless",
    explanation: "The candidate will not be disqualified, with one exception: if proof of a violation emerges.",
    difficulty: 'Hard'
  },
  {
    id: 217,
    sentencePart1: "",
    sentencePart2: "we had been more transparent about the potential risks from the beginning.",
    options: ["If only", "As long as", "Unless", "In case"],
    answer: "If only",
    explanation: "'If only' expresses a strong, collective regret about a past failure in communication.",
    difficulty: 'Hard'
  },
  {
    id: 218,
    sentencePart1: "The code is open source,",
    sentencePart2: "any derivative works also remain open source.",
    options: ["unless", "as long as", "providing that", "if only"],
    answer: "providing that",
    explanation: "'Providing that' sets a formal, legal condition often found in software licenses (a 'copyleft' provision).",
    difficulty: 'Hard'
  },
  {
    id: 219,
    sentencePart1: "The organism can survive in a dormant state indefinitely,",
    sentencePart2: "it is not exposed to extreme temperatures.",
    options: ["unless", "as long as", "if only", "in case"],
    answer: "as long as",
    explanation: "'As long as' defines the continuous condition under which the organism's survival is possible.",
    difficulty: 'Hard'
  },
  {
    id: 220,
    sentencePart1: "The system is designed to be fail-operational, with triple redundancy",
    sentencePart2: "of a primary or even secondary system failure.",
    options: ["if only", "unless", "in case", "as long as"],
    answer: "in case",
    explanation: "The redundancies are a technical precaution for the potential event of system failures. 'In case of' is the correct phrase.",
    difficulty: 'Hard'
  },
  {
    id: 221,
    sentencePart1: "",
    sentencePart2: "I were not constrained by my current obligations, I would pursue that venture.",
    options: ["If only", "I wish", "As long as", "Unless"],
    answer: "I wish",
    explanation: "'I wish' with the subjunctive 'were' is used to express a desire for a present reality to be different, allowing a different action.",
    difficulty: 'Hard'
  },
  {
    id: 222,
    sentencePart1: "No charges will be filed against the witness",
    sentencePart2: "they provide false testimony under oath.",
    options: ["unless", "as long as", "in case", "if only"],
    answer: "unless",
    explanation: "In this legal context, 'unless' introduces the single exception that would cause charges to be filed.",
    difficulty: 'Hard'
  },
  {
    id: 223,
    sentencePart1: "The grant funding will continue for another year,",
    sentencePart2: "the research team submits a satisfactory progress report.",
    options: ["unless", "providing that", "in case", "I wish"],
    answer: "providing that",
    explanation: "'Providing that' sets the formal, non-negotiable condition for the continuation of the funding.",
    difficulty: 'Hard'
  },
  {
    id: 224,
    sentencePart1: "The ceasefire will hold",
    sentencePart2: "no provocative military exercises are conducted near the border.",
    options: ["as long as", "unless", "if only", "in case"],
    answer: "as long as",
    explanation: "'As long as' specifies the ongoing condition required to maintain the fragile peace of the ceasefire.",
    difficulty: 'Hard'
  },
  {
    id: 225,
    sentencePart1: "",
    sentencePart2: "the board had heeded the early warnings from the engineering team.",
    options: ["If only", "As long as", "Unless", "In case"],
    answer: "If only",
    explanation: "'If only' expresses a strong regret about a past inaction by a group, which led to negative consequences.",
    difficulty: 'Hard'
  }
];