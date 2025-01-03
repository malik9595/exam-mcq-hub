const mcqs = [
    // check completed
  {
    question:
      "If it is true that 'all cats are animals', and 'some animals are mammals', what can be inferred about cats?",
    options: [
      "All cats are mammals",
      "Some cats are mammals",
      "No cats are mammals",
      "Cats are not animals",
    ],
    correctIndex: 1,
    region:
      "From the given statements, it can be inferred that some cats are mammals.",
  },
  {
    id: 2,
    question: "Complete the analogy: Dog : Bark :: Cat : ?",
    options: ["Meow", "Purr", "Growl", "Hiss"],
    correctIndex: 0,
    region:
      "The analogy is based on sounds made by animals: dogs bark, and cats meow.",
  },
  {
    id: 3,
    question: "Which word does not belong to the group?",
    options: ["Chair", "Table", "Desk", "Orange"],
    correctIndex: 3,
    region: "The first three are furniture, while 'Orange' is a fruit.",
  },
  {
    id: 4,
    question: "Find the odd one out: 121, 144, 169, 190",
    options: ["121", "144", "169", "190"],
    correctIndex: 3,
    region:
      "The first three numbers are perfect squares: 11², 12², 13². 190 is not a perfect square.",
  },
  {
    id: 5,
    question:
      "Which of the following words can be formed using the letters of the word 'listen'?",
    options: ["Silent", "Enlist", "Tinsel", "Inlets"],
    correctIndex: 0,
    region:
      "The letters of the word 'listen' can be rearranged to form the word 'silent'.",
  },
  {
    id: 6,
    question: "Complete the analogy: Book : Read :: Pen : ?",
    options: ["Write", "Draw", "Sketch", "Paint"],
    correctIndex: 0,
    region:
      "The analogy is based on the function: books are for reading, and pens are for writing.",
  },
  {
    id: 7,
    question: "Which number completes the analogy: 2 : 8 :: 3 : ?",
    options: ["9", "15", "25", "12"],
    correctIndex: 3,
    region:
      "The second number is obtained by multiplying the first number by 4: 2 × 4 = 8, 3 × 4 = 12.",
  },
  {
    id: 8,
    question: "Find the odd one out: Apple, Mango, Banana, Chair",
    options: ["Apple", "Mango", "Banana", "Chair"],
    correctIndex: 3,
    region: "The first three are fruits, while 'Chair' is furniture.",
  },
  {
    id: 9,
    question: "Which word comes next in the series: Cat, Bat, Rat, ?",
    options: ["Hat", "Mat", "Pat", "Sat"],
    correctIndex: 1,
    region:
      "The series consists of words where the first letter changes alphabetically: C (Cat), B (Bat), R (Rat). The next letter in the alphabet after 'R' is 'M', forming 'Mat'.",
  },
  {
    id: 10,
    question: "Which number is the odd one out: 3, 5, 7, 9, 11?",
    options: ["3", "7", "9", "11"],
    correctIndex: 2,
    region:
      "The series consists of prime numbers except for 9, which is not prime.",
  },
  {
    id: 11,
    question: "Complete the analogy: Earth : Orbit :: Moon : ?",
    options: ["Revolve", "Spin", "Orbit", "Rotate"],
    correctIndex: 2,
    region: "Earth orbits the Sun, and the Moon orbits the Earth.",
  },
  {
    id: 12,
    question: "Find the odd one out: Circle, Sphere, Rectangle, Cube",
    options: ["Circle", "Sphere", "Rectangle", "Cube"],
    correctIndex: 1,
    region: "The rest are 2D shapes, while 'Sphere' is a 3D object.",
  },
  {
    id: 13,
    question:
      "Which of the following words comes next in the series: rose, lily, sunflower, daisy, ?",
    options: ["Tulip", "Violet", "Poppy", "Orchid"],
    correctIndex: 0,
    region: "The series consists of names of flowers.",
  },
  {
    id: 14,
    question:
      "If 'A' is coded as '1', 'B' is coded as '2', and so on, what is the code for 'HELLO'?",
    options: ["8 5 12 12 15", "7 5 12 12 15", "8 5 11 11 14", "7 4 11 11 14"],
    correctIndex: 0,
    region: "Each letter is coded as its corresponding numerical value.",
  },
  {
    id: 15,
    question: "Which of the following shapes can be formed using two cubes?",
    options: ["Rectangle", "Square", "Triangle", "Circle"],
    correctIndex: 0,
    region: "Two cubes can be arranged to form a rectangle.",
  },
  // Continue with a similar structure for all 100 questions

  {
    id: 16,
    question:
      "In a Venn diagram, which of the following represents the intersection of two sets?",
    options: ["Union", "Intersection", "Difference", "Complement"],
    correctIndex: 1,
    region:
      "The intersection of two sets represents the elements common to both sets.",
  },
  {
    id: 17,
    question: "Complete the analogy: Water : Liquid :: Ice : ?",
    options: ["Solid", "Gas", "Vapor", "Liquid"],
    correctIndex: 0,
    region: "Water is in a liquid state, and ice is in a solid state.",
  },
  {
    id: 18,
    question: "Which number is the odd one out: 4, 9, 16, 25, 40?",
    options: ["4", "16", "25", "40"],
    correctIndex: 3,
    region: "The first four are perfect squares, while 40 is not.",
  },
  {
    id: 19,
    question: "Find the missing term: AB, CD, EF, ?",
    options: ["GH", "HI", "IJ", "KL"],
    correctIndex: 0,
    region:
      "The series consists of consecutive pairs of letters from the alphabet: A-B, C-D, E-F, and G-H.",
  },
  {
    id: 20,
    question: "Which number completes the analogy: 6 : 36 :: 7 : ?",
    options: ["42", "49", "56", "63"],
    correctIndex: 1,
    region: "The analogy is based on squares: 6² = 36, 7² = 49.",
  },
  {
    id: 21,
    question: "Which word is the odd one out: Apple, Banana, Carrot, Mango?",
    options: ["Apple", "Banana", "Carrot", "Mango"],
    correctIndex: 2,
    region: "The first three are fruits, while 'Carrot' is a vegetable.",
  },
  {
    id: 22,
    question:
      "A bakery sells 250 loaves of bread per day. If each loaf costs $2, how much money does the bakery make per day?",
    options: ["$450", "$500", "$550", "$600"],
    correctIndex: 1,
    region: "The bakery makes 250 x $2 = $500 per day.",
  },
  {
    id: 23,
    question: "Complete the analogy: Pen : Write :: Knife : ?",
    options: ["Cut", "Draw", "Paint", "Slice"],
    correctIndex: 0,
    region:
      "The analogy is based on function: pens are for writing, knives are for cutting.",
  },
  {
    id: 24,
    question: "Which figure does not belong to the group?",
    options: ["Circle", "Triangle", "Square", "Hexagon"],
    correctIndex: 0,
    region: "The rest are polygons, while 'Circle' is not.",
  },
  {
    id: 25,
    question: "Which number is missing: 11, 22, 33, ?, 55?",
    options: ["40", "44", "45", "50"],
    correctIndex: 1,
    region:
      "The series adds 11 to each term: 11+11=22, 22+11=33, so the next is 33+11=44.",
  },
  {
    id: 26,
    question: "Which number comes next: 100, 90, 80, 70, ?",
    options: ["50", "60", "65", "75"],
    correctIndex: 1,
    region:
      "The series decreases by 10 each time: 100-10=90, 90-10=80, etc. The next is 70-10=60.",
  },
  {
    id: 27,
    question: "Which number completes the analogy: 5 : 25 :: 8 : ?",
    options: ["40", "50", "64", "72"],
    correctIndex: 2,
    region: "The analogy is based on squares: 5² = 25, 8² = 64.",
  },
  {
    id: 28,
    question: "Complete the series: A, C, E, G, ?",
    options: ["H", "I", "J", "K"],
    correctIndex: 1,
    region: "The series skips one letter: A, C, E, G, so the next is I.",
  },
  {
    id: 29,
    question: "Find the odd one out: 2, 3, 5, 9, 11?",
    options: ["2", "3", "5", "9"],
    correctIndex: 3,
    region: "The rest are prime numbers, while '9' is not.",
  },
  {
    id: 30,
    question: "Complete the analogy: Light : Brightness :: Sound : ?",
    options: ["Noise", "Volume", "Echo", "Tone"],
    correctIndex: 1,
    region:
      "The analogy is based on properties: light relates to brightness, sound relates to volume.",
  },
  {
    id: 31,
    question: "Which figure does not belong to the group?",
    options: ["Square", "Triangle", "Hexagon", "Sphere"],
    correctIndex: 3,
    region:
      "The first three are polygons (2D shapes), while 'Sphere' is a 3D object.",
  },
  {
    id: 32,
    question: "Find the missing term: 3, 5, 9, 17, ?",
    options: ["29", "33", "27", "31"],
    correctIndex: 2,
    region:
      "The series follows the rule of doubling the difference: (3+2=5), (5+4=9), (9+8=17), so the next is 17+16=33.",
  },
  {
    id: 33,
    question: "Which word is the odd one out: Table, Chair, Bed, Spoon?",
    options: ["Table", "Chair", "Bed", "Spoon"],
    correctIndex: 3,
    region: "The first three are furniture, while 'Spoon' is a utensil.",
  },
  {
    id: 34,
    question:
      "What is the next step in solving a problem after identifying the root cause?",
    options: [
      "Implementing a solution",
      "Analyzing the data",
      "Brainstorming ideas",
      "Defining the problem",
    ],
    correctIndex: 0,
    region:
      "After identifying the root cause, the next step is to implement a solution.",
  },
  {
    id: 35,
    question: "Find the odd one out: Monday, Tuesday, Sunday, January",
    options: ["Monday", "Tuesday", "Sunday", "January"],
    correctIndex: 3,
    region: "The first three are days of the week, while 'January' is a month.",
  },
  {
    id: 36,
    question: "Complete the series: 10, 20, 40, 80, ?",
    options: ["100", "120", "160", "200"],
    correctIndex: 2,
    region:
      "The series doubles each term: 10 × 2 = 20, 20 × 2 = 40, etc. The next is 80 × 2 = 160.",
  },
  {
    id: 37,
    question: "Which number is the odd one out: 121, 144, 169, 185?",
    options: ["121", "144", "169", "185"],
    correctIndex: 3,
    region: "The first three are perfect squares, while 185 is not.",
  },
  {
    id: 38,
    question: "Complete the analogy: River : Water :: Road : ?",
    options: ["Vehicles", "Traffic", "People", "Path"],
    correctIndex: 0,
    region:
      "The analogy is based on what each carries: rivers carry water, roads carry vehicles.",
  },
  {
    id: 39,
    question:
      "A snail is at the bottom of a 20-foot well. Each day, it climbs up 3 feet, but at night, it slips back 2 feet. How many days will it take for the snail to reach the top of the well?",
    options: ["18", "20", "22", "25"],
    correctIndex: 1,
    region:
      "The snail climbs 3 feet and slips back 2 feet, so it effectively climbs 1 foot per day.",
  },
  {
    id: 40,
    question: "Find the odd one out: Apple, Orange, Carrot, Grape",
    options: ["Apple", "Orange", "Carrot", "Grape"],
    correctIndex: 2,
    region: "The first three are fruits, while 'Carrot' is a vegetable.",
  },
  {
    id: 41,
    question: "Which number comes next: 3, 6, 12, 24, ?",
    options: ["30", "48", "60", "72"],
    correctIndex: 1,
    region:
      "Each term doubles the previous one: 3 × 2 = 6, 6 × 2 = 12, etc. The next is 24 × 2 = 48.",
  },
  {
    id: 42,
    question: "Complete the analogy: Clock : Time :: Thermometer : ?",
    options: ["Weather", "Temperature", "Heat", "Pressure"],
    correctIndex: 1,
    region:
      "The analogy is based on measurement: clocks measure time, thermometers measure temperature.",
  },
  {
    id: 43,
    question: "Which word does not belong to the group?",
    options: ["Circle", "Square", "Triangle", "River"],
    correctIndex: 3,
    region: "The first three are shapes, while 'River' is not.",
  },
  {
    id: 44,
    question: "Which number completes the analogy: 7 : 49 :: 8 : ?",
    options: ["56", "64", "72", "80"],
    correctIndex: 1,
    region: "The analogy is based on squares: 7² = 49, 8² = 64.",
  },
  {
    id: 45,
    question: "Find the odd one out: Book, Pen, Pencil, Chair",
    options: ["Book", "Pen", "Pencil", "Chair"],
    correctIndex: 3,
    region: "The first three are stationery items, while 'Chair' is furniture.",
  },
  {
    id: 46,
    question: "Complete the series: Z, X, V, T, ?",
    options: ["S", "R", "Q", "P"],
    correctIndex: 1,
    region:
      "The series skips one letter going backward: Z, X, V, T, so the next is R.",
  },
  {
    id: 47,
    question: "Which word completes the analogy: Hand : Fingers :: Foot : ?",
    options: ["Toes", "Heel", "Shoe", "Sole"],
    correctIndex: 0,
    region:
      "The analogy is based on parts: hands have fingers, feet have toes.",
  },
  {
    id: 48,
    question: "Which number comes next: 2, 5, 10, 17, ?",
    options: ["24", "25", "26", "28"],
    correctIndex: 0,
    region:
      "The difference increases by 2 each time: (5-2=3), (10-5=5), (17-10=7), so next is 17+9=24.",
  },
  {
    id: 49,
    question: "Find the odd one out: Table, Spoon, Plate, Bowl",
    options: ["Table", "Spoon", "Plate", "Bowl"],
    correctIndex: 0,
    region: "The first three are utensils, while 'Table' is furniture.",
  },
  {
    id: 50,
    question: "Complete the analogy: Teacher : School :: Doctor : ?",
    options: ["Hospital", "Clinic", "Patient", "Medicine"],
    correctIndex: 0,
    region:
      "The analogy is based on workplace: teachers work in schools, doctors work in hospitals.",
  },
  // checked
  {
    id: 51,
    question: "Which number completes the analogy: 3 : 9 :: 4 : ?",
    options: ["10", "12", "14", "16"],
    correctIndex: 3,
    region: "The analogy is based on squares: 3² = 9, 4² = 16.",
  },
  {
    id: 52,
    question: "Which number completes the analogy: 2 : 12 :: 3 : ?",
    options: ["15", "18", "20", "24"],
    correctIndex: 1,
    region:
      "The second number is obtained by multiplying the first number by 6: 2 × 6 = 12, 3 × 6 = 18.",
  },
  {
    id: 53,
    question: "Which word is the odd one out: Pen, Pencil, Eraser, Chair?",
    options: ["Pen", "Pencil", "Eraser", "Chair"],
    correctIndex: 3,
    region: "The first three are stationery items, while 'Chair' is furniture.",
  },
  {
    id: 54,
    question: "Which number completes the analogy: 2 : 5 :: 3 : ?",
    options: ["7", "8", "9", "11"],
    correctIndex: 0,
    region:
      "The second number is the result of multiplying the first number by 2 and adding 1: (2 × 2) + 1 = 5, (3 × 2) + 1 = 7.",
  },
  {
    id: 55,
    question: "Which figure does not belong to the group?",
    options: ["Square", "Rectangle", "Circle", "Triangle"],
    correctIndex: 2,
    region: "The first three are polygons, while 'Circle' is a round shape.",
  },
  {
    id: 56,
    question: "Find the odd one out: 4, 16, 25, 36, 44?",
    options: ["4", "16", "25", "44"],
    correctIndex: 3,
    region: "The first three are perfect squares, while 44 is not.",
  },
  {
    id: 57,
    question: "What is the primary characteristic of emotional intelligence?",
    options: ["Self-awareness", "Empathy", "Motivation", "Self-regulation"],
    correctIndex: 0,
    region:
      "Self-awareness is the primary characteristic of emotional intelligence.",
  },
  {
    id: 58,
    question: "Complete the analogy: Bird : Fly :: Fish : ?",
    options: ["Swim", "Jump", "Dive", "Crawl"],
    correctIndex: 0,
    region: "Birds fly and fish swim.",
  },
  {
    id: 59,
    question: "Which number completes the analogy: 6 : 36 :: 9 : ?",
    options: ["72", "81", "90", "96"],
    correctIndex: 1,
    region: "The analogy is based on squares: 6² = 36, 9² = 81.",
  },
  {
    id: 60,
    question: "Find the odd one out: Rectangle, Square, Circle, Triangle",
    options: ["Rectangle", "Square", "Circle", "Triangle"],
    correctIndex: 2,
    region: "The first three are polygons (2D shapes), while 'Circle' is not.",
  },
  {
    id: 61,
    question: "Which number comes next: 2, 6, 12, 20, ?",
    options: ["25", "28", "30", "36"],
    correctIndex: 1,
    region:
      "The difference between consecutive terms increases by 2: (6-2=4), (12-6=6), (20-12=8), so the next is 20+8=28.",
  },
  {
    id: 62,
    question: "Which number completes the analogy: 3 : 12 :: 4 : ?",
    options: ["14", "16", "18", "20"],
    correctIndex: 1,
    region:
      "The second number is obtained by multiplying the first number by 4: 3 × 4 = 12, 4 × 4 = 16.",
  },
  {
    id: 63,
    question: "Complete the analogy: Mountain : Peak :: River : ?",
    options: ["Source", "Stream", "Mouth", "Valley"],
    correctIndex: 2,
    region: "A mountain has a peak, and a river has a mouth.",
  },
  {
    id: 64,
    question: "Which number is the odd one out: 3, 5, 7, 9, 11?",
    options: ["3", "5", "7", "9"],
    correctIndex: 3,
    region: "The first three are prime numbers, while 9 is not.",
  },
  {
    id: 65,
    question: "Find the odd one out: Apple, Banana, Grape, Carrot",
    options: ["Apple", "Banana", "Grape", "Carrot"],
    correctIndex: 3,
    region: "The first three are fruits, while 'Carrot' is a vegetable.",
  },
  {
    id: 66,
    question: "Complete the series: 1, 4, 9, 16, ?",
    options: ["20", "24", "25", "30"],
    correctIndex: 2,
    region:
      "The series consists of squares of natural numbers: 1², 2², 3², etc. The next is 5² = 25.",
  },
  {
    id: 67,
    question: "Which number comes next: 2, 4, 6, 8, ?",
    options: ["10", "12", "14", "16"],
    correctIndex: 0,
    region:
      "The series adds 2 to each term: 2 + 2 = 4, 4 + 2 = 6, etc. The next is 8 + 2 = 10.",
  },
  {
    id: 68,
    question: "Complete the analogy: Finger : Hand :: Toe : ?",
    options: ["Foot", "Leg", "Shoe", "Sock"],
    correctIndex: 0,
    region: "Fingers are part of a hand, and toes are part of a foot.",
  },
  {
    id: 69,
    question: "Which number completes the analogy: 5 : 25 :: 6 : ?",
    options: ["30", "36", "40", "42"],
    correctIndex: 1,
    region: "The analogy is based on squares: 5² = 25, 6² = 36.",
  },
  {
    id: 70,
    question: "Which word does not belong to the group?",
    options: ["Apple", "Banana", "Carrot", "Grape"],
    correctIndex: 2,
    region: "The first three are fruits, while 'Carrot' is a vegetable.",
  },
  {
    id: 71,
    question: "Which number is the odd one out: 1, 2, 3, 4, 6, 7?",
    options: ["1", "2", "3", "4"],
    correctIndex: 3,
    region:
      "The series consists of prime numbers except for 4, which is not prime.",
  },
  {
    id: 72,
    question: "Complete the analogy: Day : Night :: Summer : ?",
    options: ["Winter", "Autumn", "Spring", "Rain"],
    correctIndex: 0,
    region: "Day contrasts with Night, and Summer contrasts with Winter.",
  },
  {
    id: 73,
    question: "Which number completes the analogy: 3 : 6 :: 7 : ?",
    options: ["12", "14", "16", "20"],
    correctIndex: 1,
    region:
      "The second number is twice the first number: 3 × 2 = 6, 7 × 2 = 14.",
  },
  {
    id: 74,
    question: "Which number completes the analogy: 8 : 64 :: 9 : ?",
    options: ["72", "81", "90", "100"],
    correctIndex: 1,
    region: "The analogy is based on squares: 8² = 64, 9² = 81.",
  },
  {
    id: 75,
    question: "Which word is the odd one out: Fish, Shark, Dolphin, Whale?",
    options: ["Fish", "Shark", "Dolphin", "Whale"],
    correctIndex: 0,
    region: "The rest are sea mammals, while 'Fish' is a different category.",
  },
  {
    id: 76,
    question: "Which figure completes the analogy: Square : 4 :: Triangle : ?",
    options: ["3", "4", "5", "6"],
    correctIndex: 0,
    region: "A square has 4 sides, and a triangle has 3 sides.",
  },
  {
    id: 77,
    question: "Find the odd one out: Circle, Rectangle, Square, Sphere",
    options: ["Circle", "Rectangle", "Square", "Sphere"],
    correctIndex: 0,
    region: "The first three are 2D shapes, while 'Sphere' is a 3D shape.",
  },
  {
    id: 78,
    question: "Which number comes next in the series: 1, 2, 6, 24, ?",
    options: ["30", "48", "120", "150"],
    correctIndex: 2,
    region:
      "The series is based on factorials: 1! = 1, 2! = 2, 3! = 6, 4! = 24, so 5! = 120.",
  },
  {
    id: 79,
    question: "Which number completes the analogy: 2 : 4 :: 3 : ?",
    options: ["6", "8", "10", "12"],
    correctIndex: 0,
    region:
      "The second number is obtained by multiplying the first number by 2: 2 × 2 = 4, 3 × 2 = 6.",
  },
  {
    id: 80,
    question: "Which figure does not belong to the group?",
    options: ["Circle", "Square", "Rectangle", "Triangle"],
    correctIndex: 0,
    region: "The first is a round shape, while the rest are polygons.",
  },
  {
    id: 81,
    question: "Find the odd one out: Apple, Banana, Cherry, Carrot",
    options: ["Apple", "Banana", "Cherry", "Carrot"],
    correctIndex: 3,
    region: "The first three are fruits, while 'Carrot' is a vegetable.",
  },
  {
    id: 82,
    question: "Which number comes next: 1, 5, 9, 13, ?",
    options: ["14", "15", "16", "17"],
    correctIndex: 3,
    region:
      "The difference between consecutive terms is 4: 1+4 = 5, 5+4 = 9, etc. The next is 13 + 4 = 17.",
  },
  {
    id: 83,
    question: "Complete the analogy: Brain : Head :: Heart : ?",
    options: ["Chest", "Stomach", "Lungs", "Leg"],
    correctIndex: 0,
    region: "The brain is in the head, and the heart is in the chest.",
  },
  {
    id: 84,
    question: "Which number completes the analogy: 12 : 144 :: 6 : ?",
    options: ["18", "30", "36", "72"],
    correctIndex: 2,
    region: "The analogy is based on squares: 12² = 144, 6² = 36.",
  },
  {
    id: 85,
    question:
      "Which word does not belong to the group: Dog, Cat, Tiger, Elephant?",
    options: ["Dog", "Cat", "Tiger", "Elephant"],
    correctIndex: 3,
    region:
      "The first three are felines, while 'Elephant' is a mammal of a different family.",
  },
  {
    id: 86,
    question: "Find the odd one out: Sun, Moon, Earth, Mars",
    options: ["Sun", "Moon", "Earth", "Mars"],
    correctIndex: 1,
    region:
      "The first, third, and fourth are planets, while 'Moon' is a satellite.",
  },
  {
    id: 87,
    question: "Which number completes the analogy: 10 : 100 :: 5 : ?",
    options: ["15", "20", "25", "30"],
    correctIndex: 2,
    region: "The analogy is based on squares: 10² = 100, 5² = 25.",
  },
  {
    id: 88,
    question: "Which word completes the analogy: Dog : Bark :: Cat : ?",
    options: ["Meow", "Roar", "Chirp", "Growl"],
    correctIndex: 0,
    region: "Dogs bark, and cats meow.",
  },
  {
    id: 89,
    question: "Which number completes the analogy: 6 : 36 :: 8 : ?",
    options: ["56", "60", "64", "72"],
    correctIndex: 2,
    region: "The analogy is based on squares: 6² = 36, 8² = 64.",
  },
  {
    id: 90,
    question: "Which number completes the analogy: 3 : 81 :: 4 : ?",
    options: ["16", "36", "64", "81"],
    correctIndex: 2,
    region: "The analogy is based on cubes: 3³ = 81, 4³ = 64.",
  },
  {
    id: 91,
    question:
      "Which figure completes the analogy: Circle : Round :: Square : ?",
    options: ["Cornered", "Straight", "Sharp", "Square"],
    correctIndex: 1,
    region:
      "The analogy is based on shape properties: a circle is round, and a square has straight sides.",
  },
  {
    id: 92,
    question: "Find the odd one out: Egg, Apple, Pear, Banana",
    options: ["Egg", "Apple", "Pear", "Banana"],
    correctIndex: 0,
    region: "The first one is not a fruit, while the others are.",
  },
  {
    id: 93,
    question: "Which number completes the analogy: 5 : 25 :: 7 : ?",
    options: ["35", "42", "49", "56"],
    correctIndex: 2,
    region: "The analogy is based on squares: 5² = 25, 7² = 49.",
  },
  {
    id: 94,
    question: "Which word is the odd one out: Snake, Lizard, Dog, Crocodile",
    options: ["Snake", "Lizard", "Dog", "Crocodile"],
    correctIndex: 2,
    region: "The first three are reptiles, while 'Dog' is a mammal.",
  },
  {
    id: 95,
    question: "Complete the analogy: Pen : Ink :: Brush : ?",
    options: ["Paint", "Water", "Color", "Pigment"],
    correctIndex: 0,
    region: "Pens use ink, and brushes use paint.",
  },
  {
    id: 96,
    question: "Which number comes next in the series: 1, 1, 2, 3, 5, ?",
    options: ["6", "7", "8", "13"],
    correctIndex: 2,
    region:
      "This is a Fibonacci series where the next number is the sum of the previous two numbers: 3 + 5 = 8.",
  },
  {
    id: 97,
    question: "Which number completes the analogy: 6 : 36 :: 7 : ?",
    options: ["43", "49", "51", "56"],
    correctIndex: 1,
    region: "The analogy is based on squares: 6² = 36, 7² = 49.",
  },
  {
    id: 98,
    question: "Which number completes the analogy: 4 : 16 :: 5 : ?",
    options: ["24", "25", "30", "32"],
    correctIndex: 1,
    region: "The analogy is based on squares: 4² = 16, 5² = 25.",
  },
  {
    id: 99,
    question: "Which number completes the analogy: 3 : 9 :: 4 : ?",
    options: ["12", "16", "18", "20"],
    correctIndex: 1,
    region: "The analogy is based on squares: 3² = 9, 4² = 16.",
  },
  {
    id: 100,
    question: "Which word completes the analogy: Car : Drive :: Boat : ?",
    options: ["Row", "Float", "Sail", "Travel"],
    correctIndex: 2,
    region: "Cars are driven, and boats are sailed.",
  },
];
