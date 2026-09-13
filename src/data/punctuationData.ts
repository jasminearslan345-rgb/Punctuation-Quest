import { PunctuationMarkInfo, PunctuationExample } from '../types';

export const PUNCTUATION_MARKS: PunctuationMarkInfo[] = [
  {
    id: 'period',
    name: 'Full Stop (Period)',
    symbol: '.',
    category: 'terminal',
    uses: 'Used at the end of a declarative sentence or statement.',
    example: 'She is a good girl.',
    examplesList: generateExamplesFor('period', '.', 'Full Stop (Period)')
  },
  {
    id: 'question-mark',
    name: 'Question Mark',
    symbol: '?',
    category: 'terminal',
    uses: 'Used at the end of an interrogative sentence when asking a question.',
    example: 'Where are you going?',
    examplesList: generateExamplesFor('question-mark', '?', 'Question Mark')
  },
  {
    id: 'exclamation-mark',
    name: 'Exclamation Mark',
    symbol: '!',
    category: 'terminal',
    uses: 'Used at the end of a sentence showing strong feeling, excitement, or surprise.',
    example: 'What a beautiful view!',
    examplesList: generateExamplesFor('exclamation-mark', '!', 'Exclamation Mark')
  },
  {
    id: 'comma',
    name: 'Comma',
    symbol: ',',
    category: 'pause',
    uses: 'Used to separate words, phrases, or clauses in a list, and after introductory clauses.',
    example: 'Ali, Ahmed and Asad are brothers.',
    examplesList: generateExamplesFor('comma', ',', 'Comma')
  },
  {
    id: 'semicolon',
    name: 'Semicolon',
    symbol: ';',
    category: 'pause',
    uses: 'Used to join two related independent clauses without a conjunction.',
    example: 'I was tired; I went to bed.',
    examplesList: generateExamplesFor('semicolon', ';', 'Semicolon')
  },
  {
    id: 'colon',
    name: 'Colon',
    symbol: ':',
    category: 'pause',
    uses: 'Used before a list, explanation, or direct quotation.',
    example: 'I have three things: pen, book and copy.',
    examplesList: generateExamplesFor('colon', ':', 'Colon')
  },
  {
    id: 'dash',
    name: 'Dash',
    symbol: '-',
    category: 'special',
    uses: 'Used to show a sudden break in thought or an emphatic explanation.',
    example: 'He worked hard — but failed.',
    examplesList: generateExamplesFor('dash', '-', 'Dash')
  },
  {
    id: 'brackets',
    name: 'Brackets (Parentheses)',
    symbol: '( )',
    category: 'special',
    uses: 'Used to add extra information or clarification in a sentence.',
    example: 'Fatima (my sister) lives in Lahore.',
    examplesList: generateExamplesFor('brackets', '( )', 'Brackets (Parentheses)')
  },
  {
    id: 'quotation-marks',
    name: 'Quotation Marks',
    symbol: '" "',
    category: 'quotation',
    uses: 'Used to show exact direct speech or a spoken quotation.',
    example: 'He said, "I will come tomorrow."',
    examplesList: generateExamplesFor('quotation-marks', '" "', 'Quotation Marks')
  },
  {
    id: 'apostrophe',
    name: 'Apostrophe',
    symbol: "'",
    category: 'special',
    uses: 'Used for possession (Ali\'s book) or to show missing letters in contractions (can\'t).',
    example: "Ali's book can't be found.",
    examplesList: generateExamplesFor('apostrophe', "'", 'Apostrophe')
  },
  {
    id: 'hyphen',
    name: 'Hyphen',
    symbol: '-',
    category: 'special',
    uses: 'Used to join words together to form compound words or avoid confusion.',
    example: 'She is a well-known writer.',
    examplesList: generateExamplesFor('hyphen', '-', 'Hyphen')
  },
  {
    id: 'ellipsis',
    name: 'Ellipsis',
    symbol: '...',
    category: 'pause',
    uses: 'Used to show a pause, an incomplete thought, or trailing off.',
    example: 'I wanted to say, but...',
    examplesList: generateExamplesFor('ellipsis', '...', 'Ellipsis')
  },
  {
    id: 'single-quotes',
    name: 'Single Quotation Marks',
    symbol: "' '",
    category: 'quotation',
    uses: 'Used inside quotation marks for a quote within a quote or special emphasis.',
    example: "She said, 'I am fine.'",
    examplesList: generateExamplesFor('single-quotes', "' '", 'Single Quotation Marks')
  },
  {
    id: 'slash',
    name: 'Slash',
    symbol: '/',
    category: 'special',
    uses: 'Used to show a choice, alternatives, or fractions.',
    example: 'Choose Yes / No for your answer.',
    examplesList: generateExamplesFor('slash', '/', 'Slash')
  },
  {
    id: 'dots',
    name: 'Dots (Leader)',
    symbol: '....',
    category: 'pause',
    uses: 'Used in stories or dialogues to show a long suspenseful pause.',
    example: 'He looked at me and said.....',
    examplesList: generateExamplesFor('dots', '....', 'Dots')
  }
];

function generateExamplesFor(id: string, symbol: string, name: string): PunctuationExample[] {
  const allSymbols = ['.', '?', '!', ',', ';', ':', '-', '" "', "'", '...'];
  const otherSymbols = allSymbols.filter(s => s !== symbol);

  const rawTemplates: PunctuationExample[] = [];

  for (let i = 1; i <= 30; i++) {
    let sentenceWithBlank = '';
    let sentenceComplete = '';
    let explanation = '';
    let diff: 'Easy' | 'Medium' | 'Hard' = i <= 10 ? 'Easy' : i <= 20 ? 'Medium' : 'Hard';

    switch (id) {
      case 'period':
        sentenceComplete = [
          'The cat sat on the mat.',
          'Birds fly high in the blue sky.',
          'My mother bakes delicious cookies.',
          'The sun shines brightly today.',
          'We love playing soccer after school.',
          'He read an interesting book.',
          'The train arrived at the station.',
          'Water is essential for all living things.',
          'She painted a lovely picture.',
          'The star twinkled in the night sky.',
          'A gentle breeze blew through the trees.',
          'The little dog barked at the mailman.',
          'Grandfather planted roses in the garden.',
          'Winter brings cold and snowy weather.',
          'The children laughed at the funny clown.',
          'Apples and bananas are healthy snacks.',
          'The river flows steadily into the ocean.',
          'Music filled the air during the festival.',
          'The student solved the math problem.',
          'A small bird built a cozy nest.',
          'The teacher wrote on the whiteboard.',
          'Soft rain fell on the green grass.',
          'The clock struck twelve at noon.',
          'A friendly neighbor waved hello.',
          'The blue car parked in the driveway.',
          'Golden leaves fell in autumn.',
          'The baby smiled happily at her toy.',
          'A bright rainbow appeared after the storm.',
          'The library is quiet and peaceful.',
          'We finished our science project.'
        ][i - 1];
        sentenceWithBlank = sentenceComplete.slice(0, -1) + '___';
        explanation = `A full stop (period) is used at the end of a complete declarative statement ("${sentenceComplete}").`;
        break;

      case 'question-mark':
        sentenceComplete = [
          'Where did you put my red backpack?',
          'What time does the library close today?',
          'Why is the sky blue during the day?',
          'Can we bake chocolate chip cookies?',
          'Who is your favorite teacher at school?',
          'How many planets are in our solar system?',
          'Are you ready for the spelling test?',
          'Did you see the shooting star last night?',
          'What is your favorite book to read?',
          'When is your birthday party scheduled?',
          'Would you like some fresh apple juice?',
          'How do plants make their own food?',
          'Which animal runs the fastest on land?',
          'Is it going to rain this afternoon?',
          'Whose jacket is hanging on the chair?',
          'What games do you like to play outside?',
          'Could you help me carry these books?',
          'Have you ever visited the science museum?',
          'Where do penguins live in the wild?',
          'Why do leaves change color in autumn?',
          'How does a caterpillar turn into a butterfly?',
          'What are you wishing for on your birthday?',
          'Shall we go to the park this weekend?',
          'Do you know the answer to this puzzle?',
          'When will the school bell ring?',
          'Who invented the electric light bulb?',
          'Why should we brush our teeth daily?',
          'How far away is the Moon from Earth?',
          'Can birds fly backward?',
          'What is the capital city of France?'
        ][i - 1];
        sentenceWithBlank = sentenceComplete.slice(0, -1) + '___';
        explanation = `A question mark is used at the end of an interrogative sentence asking a direct question ("${sentenceComplete}").`;
        break;

      case 'exclamation-mark':
        sentenceComplete = [
          'Watch out for that falling branch!',
          'What an amazing magic trick that was!',
          'Hooray, our team won the championship!',
          'Look at that huge shooting star!',
          'Ouch, that scraped my knee!',
          'Happy birthday to my best friend!',
          'That roller coaster was so thrilling!',
          'Quick, grab the umbrella before it rains!',
          'I cannot believe we won first prize!',
          'What a delicious slice of cake!',
          'Stop right there!',
          'Congratulations on your graduation!',
          'Brilliant job solving that puzzle!',
          'Look at the adorable little puppy!',
          'Danger, keep away from the cliff edge!',
          'What a pleasant surprise to see you!',
          'Yikes, that spider is huge!',
          'Happy New Year to everyone!',
          'What a breathtaking sunset!',
          'Hurray, summer vacation is finally here!',
          'Awesome kick into the goal!',
          'Help, I need assistance over here!',
          'Oh no, I dropped my ice cream cone!',
          'What a magnificent castle!',
          'Fantastic performance on stage!',
          'Listen to that thunder roar!',
          'Bravo, that song was wonderful!',
          'Surprise, welcome to your party!',
          'Run as fast as you can!',
          'What a roaring success!'
        ][i - 1];
        sentenceWithBlank = sentenceComplete.slice(0, -1) + '___';
        explanation = `An exclamation mark is used at the end of a sentence expressing strong emotion, surprise, or excitement ("${sentenceComplete}").`;
        break;

      case 'comma':
        sentenceComplete = [
          'Please buy apples, oranges, and bananas.',
          'Although it was raining, we played outside.',
          'Hello, how are you doing today?',
          'On Sunday morning, we went hiking.',
          'The fluffy, white cat slept in the sun.',
          'Sarah, please hand me that blue folder.',
          'We need pencils, notebooks, and erasers.',
          'When the bell rang, the students stood up.',
          'Yes, I would love some water.',
          'Running down the hill, he tripped.',
          'My favorite colors are blue, green, and red.',
          'Well, I am not sure about that.',
          'Before going to bed, I brushed my teeth.',
          'The old, spooky house stood on the hill.',
          'No, thank you for the offer.',
          'After dinner, we watched a movie.',
          'Paris, the capital of France, is beautiful.',
          'Quietly and carefully, she painted the canvas.',
          'Whenever it snows, school is delayed.',
          'Mom, can I have a snack please?',
          'Tall, green trees lined the pathway.',
          'First, we need to gather our supplies.',
          'Suddenly, a loud thunderclap echoed.',
          'To succeed, you must practice daily.',
          'Lions, tigers, and bears live in the wild.',
          'Dear Grandma, thank you for the gift.',
          'While cooking dinner, Dad listened to music.',
          'Bright, twinkling stars filled the sky.',
          'Excuse me, could you help me find this book?',
          'Slowly and steadily, the turtle won.'
        ][i - 1];
        // Insert a comma somewhere appropriate for the blank representation
        const commaIdx = sentenceComplete.indexOf(',');
        if (commaIdx !== -1) {
          sentenceWithBlank = sentenceComplete.substring(0, commaIdx) + '___' + sentenceComplete.substring(commaIdx + 1);
        } else {
          sentenceWithBlank = sentenceComplete.replace(' and ', ', and ');
          sentenceWithBlank = sentenceWithBlank.replace(', and ', '___and ');
        }
        explanation = `A comma is used to separate items in a list or pause clauses ("${sentenceComplete}").`;
        break;

      case 'semicolon':
        sentenceComplete = [
          'I was extremely tired; I went to bed early.',
          'Maria loves reading mysteries; her brother prefers comics.',
          'The sun is shining; however, the wind is cold.',
          'Tom studied hard for the test; he earned an A.',
          'Some students prefer science; others enjoy history.',
          'The cake was delicious; everyone asked for seconds.',
          'We missed our morning bus; we had to walk.',
          'Dogs make loyal pets; cats are very independent.',
          'Summer is warm and sunny; winter is cold and snowy.',
          'She brought the snacks; he brought the drinks.',
          'The museum was fascinating; we stayed for hours.',
          'Lightning flashed across the sky; thunder roared.',
          'My shoes are muddy; I should clean them.',
          'He wanted to play soccer; his friends wanted basketball.',
          'The library is quiet; it is a great place to study.',
          'Apples are crunchy and sweet; lemons are sour.',
          'Dad cooked dinner; Mom washed the dishes.',
          'The puppy chased its tail; we laughed aloud.',
          'Stars twinkle at night; the sun shines by day.',
          'Clean water is vital; we must conserve it.',
          'The puzzle was challenging; we solved it together.',
          'Winter arrived quickly; the lake froze over.',
          'Art class is creative; math class is logical.',
          'The bird sang a melody; the forest listened.',
          'Grandpa told a story; we listened closely.',
          'The car needed fuel; we stopped at a station.',
          'Night fell across the town; lights turned on.',
          'She wore a warm coat; the wind was biting.',
          'The river flowed swiftly; fish swam upstream.',
          'Our team practiced hard; we won the match.'
        ][i - 1];
        sentenceWithBlank = sentenceComplete.replace(';', '___');
        explanation = `A semicolon connects two closely related independent clauses without a conjunction ("${sentenceComplete}").`;
        break;

      case 'colon':
        sentenceComplete = [
          'I need three items: pen, book, and copy.',
          'The recipe calls for: flour, sugar, and eggs.',
          'Remember this rule: safety comes first.',
          'We visited three cities: London, Paris, and Rome.',
          'She had one goal: winning the championship.',
          'The store sells fruit: apples, bananas, and pears.',
          'Please bring these supplies: ruler, glue, scissors.',
          'There are four seasons: spring, summer, autumn, winter.',
          'He made a choice: to study computer science.',
          'My schedule for today is: reading, math, art.',
          'The zoo has many animals: lions, zebras, monkeys.',
          'Note the following advice: never give up.',
          'Three colors are primary: red, blue, yellow.',
          'The test covered three chapters: algebra, geometry, logic.',
          'Consider this proverb: practice makes perfect.',
          'We packed our bags: clothes, shoes, toothbrush.',
          'The classroom contained: desks, chairs, whiteboard.',
          'Her hobbies include: painting, reading, cycling.',
          'Famous inventors include: Edison, Tesla, Einstein.',
          'The toolbox held: hammer, nails, screwdriver.',
          'Continents of the world: Asia, Africa, Europe.',
          'Essential nutrients: proteins, vitamins, minerals.',
          'Solar system planets: Mercury, Venus, Earth, Mars.',
          'Musical instruments: piano, violin, guitar, flute.',
          'Sports equipment: basketball, bat, net, helmet.',
          'Tree types: oak, pine, maple, birch.',
          'Flower varieties: rose, tulip, daisy, orchid.',
          'Ocean life: whales, dolphins, sharks, turtles.',
          'Weather types: sunny, rainy, snowy, windy.',
          'Math operations: addition, subtraction, multiplication.'
        ][i - 1];
        sentenceWithBlank = sentenceComplete.replace(':', '___');
        explanation = `A colon is used before a list, explanation, or quotation introduction ("${sentenceComplete}").`;
        break;

      case 'dash':
        sentenceComplete = [
          'He worked hard — but ultimately failed.',
          'She had one passion — painting beautiful landscapes.',
          'The answer was obvious — honesty is best.',
          'Three traits defined him — kindness, courage, wisdom.',
          'The storm caused damage — fallen trees and power cuts.',
          'We lost our way — a frustrating experience.',
          'Her dream came true — she met her hero.',
          'The test was difficult — harder than expected.',
          'One thing remained — finishing the final report.',
          'His hobby is unique — collecting antique coins.',
          'The journey was long — over five hundred miles.',
          'She heard a sound — a soft whisper in the dark.',
          'The verdict is final — we must try again.',
          'Their victory was historic — an undefeated season.',
          'The secret was out — everyone knew the truth.',
          'His invention was revolutionary — flying cars.',
          'The morning started cold — freezing temperatures.',
          'Her voice trembled — a sign of nervousness.',
          'The book was incredible — a true masterpiece.',
          'Our plan worked — exactly as we hoped.',
          'The meal was delicious — homemade lasagna.',
          'His jacket was torn — ruined during the game.',
          'The sculpture was stunning — made of pure glass.',
          'Her smile radiated joy — contagious happiness.',
          'The puzzle was solved — after hours of thinking.',
          'His bicycle had a flat tire — bad luck.',
          'The concert was loud — rock music at its best.',
          'Their cabin was cozy — nestled in the woods.',
          'The river was frozen — thick winter ice.',
          'Our victory was sweet — winning the cup.'
        ][i - 1];
        sentenceWithBlank = sentenceComplete.replace('—', '___');
        explanation = `A dash is used to create a strong pause or sudden break in a sentence ("${sentenceComplete}").`;
        break;

      case 'brackets':
        sentenceComplete = [
          'Fatima (my sister) lives in Lahore.',
          'The concert (held in the park) was amazing.',
          'Ali (the captain) scored the winning goal.',
          'Our school (built in 1995) is very large.',
          'The puppy (a golden retriever) is so playful.',
          'Science class (my favorite subject) is fun.',
          'The blue car (parked outside) belongs to Dad.',
          'Mr. Khan (our math teacher) explained the lesson.',
          'The old oak tree (planted by granddad) provides shade.',
          'London (the capital of England) is busy.',
          'My cousin (who lives in Canada) is visiting.',
          'The red book (on the top shelf) is mine.',
          'Winter (the coldest season) brings snow.',
          'The bakery (famous for cupcakes) is downtown.',
          'Astronomy (the study of stars) is fascinating.',
          'Basketball (a fast-paced sport) requires stamina.',
          'The museum (closed on Mondays) exhibits fossils.',
          'My puppy (named Buster) loves chasing balls.',
          'Geography (studying maps) helps us travel.',
          'The library (quiet and warm) is my sanctuary.',
          'Summer vacation (two months long) is relaxing.',
          'The bicycle (with silver handlebars) is fast.',
          'Algebra (a branch of math) teaches equations.',
          'The orchestra (playing classical tunes) sounded grand.',
          'My jacket (with the fluffy hood) is warm.',
          'History (lessons from the past) teaches wisdom.',
          'The meadow (full of wild daisies) looked gorgeous.',
          'Chemistry (mixing colorful liquids) is exciting.',
          'The kitten (wearing a red collar) meowed.',
          'Poetry (rhyming verses) expresses deep emotion.'
        ][i - 1];
        sentenceWithBlank = sentenceComplete.replace('(', '___').replace(')', '___');
        explanation = `Brackets (parentheses) enclose supplementary or explanatory information ("${sentenceComplete}").`;
        break;

      case 'quotation-marks':
        sentenceComplete = [
          'He said, "I will come tomorrow."',
          'The teacher announced, "School is dismissed."',
          'Mom whispered, "Time for bed, sweetie."',
          'Ali shouted, "Look at that home run!"',
          'Sara asked, "Can I borrow your pencil?"',
          'The captain yelled, "Hold the line!"',
          'Grandpa smiled and said, "Practice makes perfect."',
          'The sign read, "Please keep off the grass."',
          'Lila whispered, "I found a secret path."',
          'The zookeeper called, "Feeding time is now."',
          'Mark cheered, "We won the science fair!"',
          'The author wrote, "Adventure awaits those who try."',
          'Dad reminded us, "Always look both ways."',
          'The coach advised, "Never give up."',
          'Emma replied, "I love reading mystery books."',
          'The guide instructed, "Stay close to the group."',
          'Jack declared, "I want to be an astronaut."',
          'Maya whispered, "Look at the shooting star."',
          'The ranger warned, "Beware of slippery rocks."',
          'Chloe exclaimed, "What a wonderful surprise!"',
          'The pilot announced, "We are ready for takeoff."',
          'Noah stated, "Math is my favorite subject."',
          'Zoe asked, "Would you like to share my lunch?"',
          'The king commanded, "Bring me the golden crown."',
          'Sam answered, "I finished my homework already."',
          'The librarian requested, "Please keep your voices down."',
          'Penny smiled, "Today is going to be a great day."',
          'Ben shouted, "Pass the soccer ball over here!"',
          'Ruby noted, "Every cloud has a silver lining."',
          'Leo promised, "I will clean my room later."'
        ][i - 1];
        sentenceWithBlank = sentenceComplete.replace('"', '___').replace('"', '___');
        explanation = `Quotation marks enclose direct spoken dialogue or exact words quoted from someone ("${sentenceComplete}").`;
        break;

      case 'apostrophe':
        sentenceComplete = [
          "Ali's book can't be found anywhere.",
          "Sara's pencil doesn't write properly.",
          "The cat's toy was lost in the garden.",
          "We couldn't finish our homework on time.",
          "The children's playground was newly painted.",
          "It's a wonderful day for a picnic.",
          "The teacher's desk was neat and organized.",
          "Don't touch the wet paint on the wall.",
          "Birds' feathers keep them warm in winter.",
          "I won't be able to attend the party.",
          "The dog's tail wagged happily.",
          "You're going to love this new game.",
          "The farmer's tractor plowed the field.",
          "They're visiting their grandparents today.",
          "The student's essay received an A grade.",
          "Let's go to the park this afternoon.",
          "The baby's laughter filled the room.",
          "He isn't coming to school today.",
          "The princess's crown sparkled brightly.",
          "She hasn't finished her science project.",
          "The eagle's wingspan was enormous.",
          "We aren't allowed to run in the hallway.",
          "The fox's den was hidden in the bushes.",
          "Who's responsible for this mess?",
          "The artist's painting won first prize.",
          "I've never seen such a beautiful rainbow.",
          "The knight's armor gleamed in the sun.",
          "She'll arrive in ten minutes.",
          "The turtle's shell protected it from danger.",
          "They've already completed the puzzle."
        ][i - 1];
        sentenceWithBlank = sentenceComplete.replace("'", "___");
        explanation = `An apostrophe indicates possession or shows omitted letters in contractions ("${sentenceComplete}").`;
        break;

      case 'hyphen':
        sentenceComplete = [
          'She is a well-known writer.',
          'He has twenty-five marbles in his jar.',
          'We saw a beautiful red-rose garden.',
          'The teacher gave us a step-by-step guide.',
          'That was a game-changing play.',
          'My mother-in-law is visiting us.',
          'The fast-moving car zoomed past.',
          'We built a brand-new treehouse.',
          'She bought a light-blue sweater.',
          'He is a high-ranking officer.',
          'The ice-cream truck arrived.',
          'We enjoyed a well-deserved rest.',
          'That is a state-of-the-art computer.',
          'She wore a short-sleeved shirt.',
          'The open-air market was busy.',
          'He wrote a thought-provoking essay.',
          'The second-place runner won a medal.',
          'They live in a brick-built house.',
          'She is a clear-thinking student.',
          'The low-flying helicopter buzzed overhead.',
          'We completed a multi-step project.',
          'He gave a heartwarming speech.',
          'The grass-covered hill was green.',
          'She earned a part-time job.',
          'That was an all-important decision.',
          'We heard a bird-like whistle.',
          'The sun-dried tomatoes tasted great.',
          'He wore a sun-protection hat.',
          'The stress-free weekend was relaxing.',
          'They built a long-distance bridge.'
        ][i - 1];
        sentenceWithBlank = sentenceComplete.replace('-', '___');
        explanation = `A hyphen joins two or more words together to form a compound word or avoid ambiguity ("${sentenceComplete}").`;
        break;

      case 'ellipsis':
        sentenceComplete = [
          'I wanted to say, but...',
          'She hesitated and whispered, "I think..."',
          'To be continued...',
          'And then the lights went out...',
          'He looked into the distance and murmured...',
          'If only I had known...',
          'The treasure map led to...',
          'Time flies when you are...',
          'Little by little, the secret was revealed...',
          'Walking through the misty forest, I heard...',
          'She opened the mysterious box and saw...',
          'The stars twinkled as if they were...',
          'Once upon a time, in a faraway land...',
          'As the clock ticked toward midnight...',
          'He took a deep breath and began...',
          'The wind whispered through the pines...',
          'What if we could fly like...',
          'Raindrops tapped gently on the window, and...',
          'Looking up at the night sky, she wondered...',
          'The old key unlocked...',
          'Step by step, the explorer ventured into...',
          'Waves crashed against the shore, leaving...',
          'With a flick of the wand, the room...',
          'Deep inside the cave, a faint glow...',
          'Before you make a final decision, consider...',
          'The story ended with a twist that...',
          'In the quiet library, pages rustled as...',
          'Every journey begins with a single...',
          'Through the telescope, Jupiter appeared...',
          'When the music started playing, everyone...'
        ][i - 1];
        sentenceWithBlank = sentenceComplete.replace('...', '___');
        explanation = `An ellipsis shows a pause, suspense, or an unfinished thought ("${sentenceComplete}").`;
        break;

      case 'single-quotes':
        sentenceComplete = [
          "She said, 'I am fine.'",
          "The teacher asked, 'Did you read \"The Hobbit\"?'",
          "He remarked, 'Knowledge is power.'",
          "She sang, 'Twinkle, twinkle, little star.'",
          "The detective noted, 'The clue is here.'",
          "Grandpa smiled and quoted, 'Haste makes waste.'",
          "The poet wrote, 'Nature is our greatest teacher.'",
          "Ali whispered, 'Keep this secret safe.'",
          "Sara exclaimed, 'What a wonderful surprise!'",
          "The sign posted 'Quiet Please' on the door.",
          "He stated, 'Honesty is the best policy.'",
          "She recited, 'A thing of beauty is a joy.'",
          "The principal announced, 'Good job, everyone.'",
          "The author penned, 'Dreams can come true.'",
          "Tom muttered, 'I will try harder next time.'",
          "Maya chanted, 'Practice makes perfect.'",
          "The coach shouted, 'Play fair and hard.'",
          "Zoe wrote, 'Art speaks where words fail.'",
          "The actor delivered his line: 'To be or not.'",
          "Leo smiled, 'Failure is stepping stone.'",
          "The student replied, 'I understand the rule.'",
          "The philosopher said, 'Know thyself.'",
          "Mom reminded me, 'Look before you leap.'",
          "The captain ordered, 'Full speed ahead.'",
          "The wise mentor noted, 'Time heals all wounds.'",
          "She cheered, 'Hip, hip, hooray!'",
          "The book chapter was titled 'Beginnings'.",
          "He chuckled, 'All is well that ends well.'",
          "The sign warned 'Caution: Slippery Floor'.",
          "She whispered, 'Sweet dreams to you.'"
        ][i - 1];
        sentenceWithBlank = sentenceComplete.replace("'", "___").replace("'", "___");
        explanation = `Single quotation marks are used for quotes within quotes or special emphasis ("${sentenceComplete}").`;
        break;

      case 'slash':
        sentenceComplete = [
          'Choose Yes / No for your answer.',
          'Please indicate your Male / Female status.',
          'The pass / fail results are posted.',
          'Enter your true / false response.',
          'Contact us via email / phone.',
          'Select your primary color: Red / Blue / Green.',
          'Complete the online / offline registration.',
          'The speed limit is 45 mph / kmh.',
          'Check the front / back of the paper.',
          'Submit your hard / soft copy by Friday.',
          'Choose a morning / afternoon session.',
          'Read chapters 4 / 5 for homework.',
          'Indicate your sponsor / guardian name.',
          'The cat / dog rescue shelter is open.',
          'Bring your gym / swim gear tomorrow.',
          'Access the local / cloud server.',
          'Review the pros / cons of the plan.',
          'Check the input / output values.',
          'Summer / winter weather comparison.',
          'Find the maximum / minimum number.',
          'Select your audio / video settings.',
          'The north / south pathway is blocked.',
          'Open the left / right locker door.',
          'Complete the sign-in / sign-out sheet.',
          'Choose your preferred start / end date.',
          'Teacher / student conference today.',
          'View the before / after pictures.',
          'Pass / fail grading system.',
          'Hot / cold water dispenser.',
          'On / off power switch.'
        ][i - 1];
        sentenceWithBlank = sentenceComplete.replace('/', '___');
        explanation = `A slash indicates alternatives, choices, or division ("${sentenceComplete}").`;
        break;

      case 'dots':
        sentenceComplete = [
          'He looked at me and said.....',
          'And then the mystery deepened.....',
          'She opened the vault slowly.....',
          'The clock ticked on into the night.....',
          'As the shadows lengthened.....',
          'He whispered into the quiet room.....',
          'Looking out across the ocean.....',
          'The secret remained hidden for years.....',
          'With a final gasp of wind.....',
          'She turned the key in the lock.....',
          'Rain poured down the windowpane.....',
          'He wondered what would happen next.....',
          'Stars shone brightly overhead.....',
          'The old book smelled of dust and time.....',
          'Slowly, the heavy door creaked open.....',
          'A gentle breeze stirred the autumn leaves.....',
          'She smiled and whispered softly.....',
          'Time stood still for a moment.....',
          'He stared at the glowing screen.....',
          'The campfire crackled in the dark.....',
          'Footsteps echoed down the empty hallway.....',
          'Waves lapped peacefully at the shore.....',
          'She held her breath in anticipation.....',
          'The puzzle pieces clicked into place.....',
          'Birds fluttered up into the canopy.....',
          'He paused to reflect on the journey.....',
          'A single tear rolled down her cheek.....',
          'The train whistled in the distance.....',
          'Shadows danced across the bedroom wall.....',
          'She whispered the magic words.....'
        ][i - 1];
        sentenceWithBlank = sentenceComplete.replace('.....', '___');
        explanation = `Dots are used in stories to show a long, suspenseful pause or trailing narrative ("${sentenceComplete}").`;
        break;
    }

    // Generate options: correct symbol + 3 random incorrect symbols
    const incorrects = otherSymbols.sort(() => 0.5 - Math.random()).slice(0, 3);
    const options = [symbol, ...incorrects].sort(() => 0.5 - Math.random());

    rawTemplates.push({
      id: `${id}-ex-${i}`,
      sentenceWithBlank,
      sentenceComplete,
      correctSymbol: symbol,
      options,
      explanation,
      difficulty: diff
    });
  }

  return rawTemplates;
}
