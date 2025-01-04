const questions = [
  {
    id: 1,
    question: "Which number comes next in the series: 2, 6, 12, 20, ?",
    options: ["30", "36", "40", "42"],
    correctIndex: 0,
    region:
      "The differences between consecutive terms are increasing by 2: 6 - 2 = 4, 12 - 6 = 6, 20 - 12 = 8. So, the next term is 20 + 10 = 30.",
  },
  {
    id: 2,
    question: "Find the next term in the series: A, C, F, J, ?",
    options: ["M", "N", "O", "P"],
    correctIndex: 1,
    region:
      "Each letter is obtained by adding 1, 2, 3, and 4 to the previous letter.",
  },
  {
    id: 3,
    question: "Which number comes next in the series: 1, 4, 9, 16, 25, ?",
    options: ["36", "49", "64", "81"],
    correctIndex: 0,
    region:
      "The series consists of squares of natural numbers: 1², 2², 3², 4², 5². So, the next term is 6² = 36.",
  },
  {
    id: 4,
    question:
      "If P + Q means P is greater than Q, and P - Q means P is smaller than Q, what is the relation between A and B in A + B - C?",
    options: ["A > B", "B > A", "A < B", "None of these"],
    correctIndex: 0,
    region: "The equation implies that A is greater than B.",
  },
  {
    id: 5,
    question: "Which number is not part of the series: 3, 6, 9, 12, 15, 19?",
    options: ["3", "6", "9", "19"],
    correctIndex: 3,
    region:
      "The series consists of consecutive multiples of 3, and 19 is not a multiple of 3.",
  },
  {
    id: 6,
    question:
      "In a certain code language, if 'CAT' is written as 'DBU', how is 'MOUSE' written?",
    options: ["NPTVF", "NPUGF", "NPUTF", "NPTUF"],
    correctIndex: 0,
    region: "The letters are shifted by +1: C->D, A->B, T->U.",
  },
  {
    id: 7,
    question:
      "If 'M' is the brother of 'N' and 'N' is the son of 'O', what is the relation of 'O' to 'M'?",
    options: ["Father", "Mother", "Brother", "Uncle"],
    correctIndex: 0,
    region:
      "Since 'N' is the son of 'O' and 'M' is 'N's brother, 'O' must be the father of 'M'.",
  },
  {
    id: 8,
    question:
      "In a row of people, A is 8th from the left and B is 6th from the right. If there are 15 people in total, what is B's position from the left?",
    options: ["7th", "8th", "9th", "10th"],
    correctIndex: 3,
    region:
      "There are 15 people in total. The position of B from the left is calculated as 15 - 6 + 1 = 10.",
  },
  {
    id: 9,
    question: "Find the odd one out: 12, 18, 24, 28, 36",
    options: ["12", "18", "24", "28"],
    correctIndex: 3,
    region: "All numbers except 28 are divisible by 6.",
  },
  {
    id: 10,
    question:
      "If the first day of a year is Monday, what will be the day of the week on the last day of the same year?",
    options: ["Sunday", "Monday", "Tuesday", "Wednesday"],
    correctIndex: 2,
    region:
      "A non-leap year has 365 days, which leaves a remainder of 1 when divided by 7. Therefore, the last day is 1 day ahead of Monday, which is Tuesday.",
  },
  {
    id: 11,
    question:
      "Which of the following is not a valid logical conclusion: A > B, B > C?",
    options: ["A > C", "A < C", "A = C", "None of these"],
    correctIndex: 1,
    region: "From A > B and B > C, it logically follows that A > C, not A < C.",
  },
  {
    id: 12,
    question: "If 'DOG' is written as 'CPF', how would 'CAT' be written?",
    options: ["BZU", "BXS", "BUV", "BWT"],
    correctIndex: 1,
    region:
      "Each letter in 'DOG' is shifted alternatively by 1 step: D -> C (backward), O -> P (forward), G -> F (backward). So, 'CAT' would follow the same pattern: C -> B (backward), A -> B (forward), T -> S (backward).",
  },
  {
    id: 13,
    question:
      "A person travels 5 km north, 3 km east, 5 km south, and 3 km west. How far is the person from the starting point?",
    options: ["2 km", "1 km", "0 km", "8 km"],
    correctIndex: 2,
    region:
      "The net distance traveled is zero as the person returns to the starting point.",
  },
  {
    id: 14,
    question: "Which of the following numbers is the smallest prime number?",
    options: ["1", "2", "3", "5"],
    correctIndex: 1,
    region: "2 is the smallest prime number.",
  },
  {
    id: 15,
    question: "Which number completes the pattern: 4, 16, 36, 64, ?",
    options: ["80", "81", "100", "121"],
    correctIndex: 2,
    region:
      "These are consecutive squares of even numbers: 2², 4², 6², 8². The next is 10² = 100.",
  },
  {
    id: 16,
    question:
      "In a family of 6 members, A is the daughter of B. C is the mother of D, and D is the brother of E. What is the relation of B to D?",
    options: ["Father", "Mother", "Grandfather", "Uncle"],
    correctIndex: 0,
    region:
      "B must be the father of D, as B is the father of A and C is the mother of D.",
  },
  {
    id: 17,
    question:
      "If 'YELLOW' is written as 'ZMFMPX', what is the code for 'PURPLE'?",
    options: ["QVSQMF", "QVSQNG", "QXTPMF", "QXTMNG"],
    correctIndex: 0,
    region: "Each letter is shifted forward by one position.",
  },
  {
    id: 18,
    question:
      "If a train starts from station A at 10:00 AM and reaches station B at 2:00 PM, how long is the journey?",
    options: ["2 hours", "3 hours", "4 hours", "5 hours"],
    correctIndex: 2,
    region: "The journey lasts for 4 hours.",
  },
  {
    id: 19,
    question: "Which of the following figures is different from the rest?",
    options: ["Circle", "Square", "Rectangle", "Triangle"],
    correctIndex: 0,
    region: "The circle is the only figure with no straight lines.",
  },
  {
    id: 20,
    question: "Which of the following numbers is divisible by 3 but not by 9?",
    options: ["12", "18", "24", "27"],
    correctIndex: 0,
    region: "12 is divisible by 3 but not by 9.",
  },
  {
    id: 21,
    question:
      "A person stands 12 meters east of point P and then turns left and walks 5 meters. What is the total distance from point P?",
    options: ["15 meters", "17 meters", "18 meters", "13 meters"],
    correctIndex: 3,
    region:
      "The person walks 12 meters east and 5 meters north. Using the Pythagorean theorem, the total distance from point P is √(12² + 5²) = √169 = 13 meters.",
  },
  {
    id: 22,
    question: "If the code for 'WORK' is 'XPSL', what is the code for 'BOOK'?",
    options: ["CPPL", "CPLL", "BPLM", "BPLK"],
    correctIndex: 0,
    region: "Each letter is shifted forward by 1.",
  },
  {
    id: 23,
    question:
      "Which of the following does not belong to the group: 1, 4, 9, 16, 25, 36, 49, 52?",
    options: ["49", "36", "52", "25"],
    correctIndex: 2,
    region: "All other numbers are perfect squares, but 52 is not.",
  },
  {
    id: 24,
    question:
      "If the first day of the year is Friday, what will be the day of the week on the 100th day?",
    options: ["Friday", "Saturday", "Sunday", "Thursday"],
    correctIndex: 3,
    region: "The 100th day falls on Thursday.",
  },
  {
    id: 25,
    question: "Which of the following is the odd one out?",
    options: ["8", "16", "24", "32"],
    correctIndex: 2,
    region: "24 is not a power of 2.",
  },
  {
    id: 26,
    question: "How many squares are there in the following diagram?",
    options: ["12", "14", "16", "18"],
    correctIndex: 1,
    region: "By counting the smaller and larger squares, the total is 14.",
  },
  {
    id: 27,
    question:
      "In a class, if A is ranked 7th from the top and B is ranked 9th from the bottom, what is the total number of students?",
    options: ["14", "15", "16", "17"],
    correctIndex: 1,
    region: "Total number of students = 7 (A's rank) + 9 (B's rank) - 1 = 15.",
  },
  {
    id: 28,
    question: "What is the odd one out in the series: 4, 8, 12, 16, 18?",
    options: ["4", "8", "12", "18"],
    correctIndex: 3,
    region: "All numbers except 18 are multiples of 4.",
  },
  {
    id: 29,
    question: "Which number completes the pattern: 3, 7, 11, 15, ?",
    options: ["18", "19", "20", "21"],
    correctIndex: 1,
    region: "The series increases by 4 at each step. The next number is 19.",
  },
  {
    id: 30,
    question:
      "In a clock, what is the angle between the hour hand and minute hand when the time is 8:40?",
    options: ["120 degrees", "130 degrees", "140 degrees", "150 degrees"],
    correctIndex: 1,
    region:
      "At 8:40, the minute hand is at 240 degrees and the hour hand is at 260 degrees. The difference between them is 20 degrees.",
  },
  {
    id: 31,
    question:
      "Which of the following options completes the analogy: 5:25 :: 6: ?",
    options: ["36", "30", "32", "24"],
    correctIndex: 0,
    region:
      "The pattern is that the square of 5 (25) corresponds to 5:25. So, the answer is 36 for 6:36.",
  },
  {
    id: 32,
    question: "If 'DARE' is written as 'EBSF', how is 'FATE' written?",
    options: ["GBUF", "GATE", "GXTU", "GZUF"],
    correctIndex: 0,
    region: "Each letter is shifted forward by 1.",
  },
  {
    id: 33,
    question: "What is the missing number in the series: 5, 10, 20, 40, ?",
    options: ["50", "60", "70", "80"],
    correctIndex: 3,
    region: "The series is doubling each time, so 40*2 = 80.",
  },
  {
    id: 34,
    question:
      "If 'A' is coded as 1, 'B' as 2, and so on, what will 'Z' be coded as?",
    options: ["25", "26", "27", "28"],
    correctIndex: 1,
    region: "The code for 'Z' is 26 as 'Z' is the 26th letter of the alphabet.",
  },
  {
    id: 35,
    question:
      "If A is taller than B, and B is taller than C, who is the shortest?",
    options: ["A", "B", "C", "None of these"],
    correctIndex: 2,
    region:
      "Since A is taller than B, and B is taller than C, C is the shortest.",
  },
  {
    id: 36,
    question:
      "If the number of red balls in a box is 6 and the number of blue balls is 9, what is the ratio of red balls to blue balls?",
    options: ["3:2", "2:3", "1:2", "2:5"],
    correctIndex: 1,
    region: "The ratio of red to blue balls is 6:9 = 2:3.",
  },
  {
    id: 37,
    question:
      "If the code for 'MORNING' is 'NPSOHJH', what is the code for 'EVENING'?",
    options: ["FWFOHF", "FWOHF", "FWPHF", "FWOFH"],
    correctIndex: 0,
    region: "The code follows a pattern of shifting each letter forward by 1.",
  },
  {
    id: 38,
    question: "What is the value of x in the equation 3x + 5 = 20?",
    options: ["4", "5", "3", "6"],
    correctIndex: 1,
    region: "Solving for x: 3x = 15, so x = 5.",
  },
  {
    id: 39,
    question: "If 3A = 18, what is the value of A?",
    options: ["4", "5", "6", "7"],
    correctIndex: 2,
    region: "Solving for A: 3A = 18, so A = 18/3 = 6.",
  },
  {
    id: 40,
    question: "Which of the following numbers is divisible by both 4 and 6?",
    options: ["12", "24", "36", "48"],
    correctIndex: 0,
    region: "12 is divisible by both 4 and 6.",
  },
  {
    id: 41,
    question:
      "Which of the following is the smallest number that is divisible by 2, 3, and 5?",
    options: ["10", "12", "15", "30"],
    correctIndex: 3,
    region: "30 is the smallest number divisible by 2, 3, and 5.",
  },
  {
    id: 42,
    question:
      "In a certain code, '123' is written as '231'. What is the code for '456'?",
    options: ["654", "465", "546", "645"],
    correctIndex: 1,
    region: "The code reverses the order of the digits.",
  },
  {
    id: 43,
    question:
      "Which of the following options completes the analogy: 7:49 :: 8: ?",
    options: ["64", "56", "72", "70"],
    correctIndex: 0,
    region: "The pattern is that 7 squared equals 49, so 8 squared equals 64.",
  },
  {
    id: 44,
    question: "If 'APPLE' is written as 'BQQMF', how would 'MANGO' be written?",
    options: ["NBOHP", "NBQPH", "MBNPH", "MBOPH"],
    correctIndex: 0,
    region: "Each letter is shifted forward by 1 position.",
  },
  {
    id: 45,
    question:
      "If the sum of three consecutive odd numbers is 45, what are the numbers?",
    options: ["13, 15, 17", "11, 13, 15", "9, 11, 13", "7, 9, 11"],
    correctIndex: 0,
    region: "The consecutive odd numbers 11, 13, and 15 add up to 45.",
  },
  {
    id: 46,
    question: "What is the sum of the first 10 even numbers?",
    options: ["50", "110", "70", "80"],
    correctIndex: 1,
    region: "The sum of the first 10 even numbers is 110.",
  },
  {
    id: 47,
    question:
      "If a person is facing north, and turns 90 degrees clockwise, which direction is he now facing?",
    options: ["East", "South", "West", "North-East"],
    correctIndex: 0,
    region:
      "A 90-degree clockwise turn from north will make the person face east.",
  },
  {
    id: 48,
    question: "Which number completes the pattern: 2, 4, 8, 16, ?",
    options: ["30", "32", "34", "36"],
    correctIndex: 1,
    region: "The series doubles each time, so the next number is 32.",
  },
  {
    id: 49,
    question:
      "Which of the following does not belong to the group: Apple, Banana, Potato, Grapes?",
    options: ["Apple", "Banana", "Potato", "Grapes"],
    correctIndex: 2,
    region: "Potato is a vegetable, while the others are fruits.",
  },
  {
    id: 50,
    question: "How many letters are there in the word 'PHYSICS'?",
    options: ["6", "7", "8", "9"],
    correctIndex: 1,
    region: "The word 'PHYSICS' contains 7 letters.",
  },
  // above 50 is checked
  {
    id: 51,
    question:
      "In a table of 6 rows and 6 columns, what is the position of the element in the 4th row and 5th column?",
    options: ["18", "19", "20", "21"],
    correctIndex: 2,
    region:
      "The position can be calculated as (Row number - 1) * number of columns + column number. (4-1)*6 + 5 = 19.",
  },
  {
    id: 52,
    question:
      "In a syllogism, 'All dogs are animals' and 'Some animals are cats'. What can be concluded?",
    options: [
      "All dogs are cats",
      "Some dogs are cats",
      "No dogs are cats",
      "Some dogs are animals",
    ],
    correctIndex: 3,
    region:
      "From the premises, we can conclude that some dogs are animals, but not necessarily cats.",
  },
  {
    id: 53,
    question:
      "If a person walks 4 meters east, 3 meters south, 4 meters west, and 3 meters north, what is their final position from the starting point?",
    options: ["4 meters", "5 meters", "6 meters", "0 meters"],
    correctIndex: 3,
    region:
      "The person returns to the starting point after moving in all four directions, so the final position is 0 meters away.",
  },
  {
    id: 54,
    question:
      "Which of the following is the odd one out: Apple, Banana, Orange, Carrot?",
    options: ["Apple", "Banana", "Orange", "Carrot"],
    correctIndex: 3,
    region: "Carrot is a vegetable, while the others are fruits.",
  },
  {
    id: 55,
    question: "What comes next in the series: 1, 1, 2, 6, 24, ?",
    options: ["120", "144", "100", "180"],
    correctIndex: 0,
    region:
      "The series is a factorial series: 1!, 2!, 3!, 4!, 5!. The next term is 5! = 120.",
  },
  {
    id: 56,
    question:
      "Which code corresponds to 'HELLO' in a pattern where each letter is shifted by +2?",
    options: ["JGNNQ", "IFMMP", "KNNQR", "JGMMP"],
    correctIndex: 1,
    region:
      "Each letter in 'HELLO' is shifted by +2: H -> I, E -> F, L -> M, L -> M, O -> P.",
  },
  {
    id: 57,
    question:
      "In a certain code, 'BOOK' is written as 'CPLL'. How is 'PEN' written?",
    options: ["QFM", "QGM", "QHM", "RFM"],
    correctIndex: 0,
    region: "Each letter is shifted forward by 1. B -> C, O -> P, O -> L.",
  },
  {
    id: 58,
    question: "Which of the following figures is the odd one out?",
    options: ["Square", "Rectangle", "Circle", "Triangle"],
    correctIndex: 2,
    region: "Circle is the only shape without straight edges.",
  },
  {
    id: 59,
    question:
      "If the first day of a month is Monday, what will be the 15th day of the month?",
    options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    correctIndex: 0,
    region:
      "The 15th day will also be Monday, as 15 is a multiple of 7 plus 1.",
  },
  {
    id: 60,
    question:
      "Which of the following is a valid conclusion based on the premises: 'All roses are flowers' and 'Some flowers are yellow'?",
    options: [
      "All roses are yellow",
      "Some roses are yellow",
      "All roses are yellow",
      "Some flowers are not yellow",
    ],
    correctIndex: 3,
    region:
      "The premises do not guarantee the color of roses, so some flowers could be yellow and others not.",
  },
  {
    id: 61,
    question:
      "In a code language, 'HOUSE' is written as 'IPVTF'. How is 'SCHOOL' written?",
    options: ["TPIPMP", "TPIPNP", "TPJNPM", "UPMJQN"],
    correctIndex: 0,
    region: "Each letter is shifted forward by 1: H -> I, O -> P, U -> V, etc.",
  },
  {
    id: 62,
    question: "What will come next in the series: 2, 6, 12, 20, 30, ?",
    options: ["32", "40", "42", "48"],
    correctIndex: 2,
    region:
      "The series consists of consecutive numbers each increasing by 2, 4, 6, 8, 10. So, the next term is 30 + 12 = 42.",
  },
  {
    id: 63,
    question:
      "If A is taller than B, B is taller than C, and C is taller than D, who is the shortest?",
    options: ["A", "B", "C", "D"],
    correctIndex: 3,
    region: "Since A > B > C > D, D is the shortest.",
  },
  {
    id: 64,
    question:
      "Which of the following letters completes the pattern: A, D, G, J, ?",
    options: ["M", "L", "K", "N"],
    correctIndex: 1,
    region: "The letters are separated by 3 positions: A -> D -> G -> J -> L.",
  },
  {
    id: 65,
    question:
      "Which of the following is the odd one out: Dog, Cat, Elephant, Tiger?",
    options: ["Dog", "Cat", "Elephant", "Tiger"],
    correctIndex: 2,
    region: "Elephant is the only animal not a cat or a dog.",
  },
  {
    id: 66,
    question: "Which number comes next in the series: 1, 4, 9, 16, 25, ?",
    options: ["30", "36", "40", "49"],
    correctIndex: 1,
    region:
      "The series consists of squares of natural numbers: 1², 2², 3², 4², 5². So, the next term is 6² = 36.",
  },
  {
    id: 67,
    question:
      "In a certain code language, 'SUN' is written as 'TVP'. What is the code for 'MOON'?",
    options: ["MPPO", "NPPQ", "MPQQ", "NPRP"],
    correctIndex: 1,
    region: "Each letter is shifted forward by 1: S -> T, U -> V, N -> P.",
  },
  {
    id: 68,
    question: "Which number completes the sequence: 2, 3, 5, 8, 12, ?",
    options: ["16", "17", "18", "19"],
    correctIndex: 1,
    region:
      "The differences between the numbers are increasing by 1: 1, 2, 3, 4, so the next number is 12 + 5 = 17.",
  },
  {
    id: 69,
    question: "What is the missing number in the series: 1, 1, 2, 3, 5, 8, ?",
    options: ["12", "13", "15", "21"],
    correctIndex: 3,
    region: "The series is the Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, 21.",
  },
  {
    id: 70,
    question:
      "In a certain code, 'APPLE' is written as 'BQQMF'. How is 'ORANGE' written?",
    options: ["PSBHF", "PSBHG", "PTHHF", "UJQMF"],
    correctIndex: 3,
    region: "Each letter is shifted forward by 1.",
  },
  {
    id: 71,
    question: "Which number is missing in the series: 3, 9, 27, 81, ?",
    options: ["243", "256", "512", "729"],
    correctIndex: 0,
    region:
      "The series multiplies by 3 each time: 3, 9, 27, 81, so the next number is 81 * 3 = 243.",
  },
  {
    id: 72,
    question: "Which number completes the series: 7, 14, 28, 56, ?",
    options: ["64", "112", "120", "126"],
    correctIndex: 1,
    region:
      "The series doubles each time: 7, 14, 28, 56, so the next number is 56 * 2 = 112.",
  },
  {
    id: 73,
    question:
      "Which of the following completes the analogy: 10 : 100 :: 20 : ?",
    options: ["200", "300", "400", "500"],
    correctIndex: 2,
    region:
      "The pattern is multiplying by 10: 10 * 10 = 100, so 20 * 20 = 400.",
  },
  {
    id: 74,
    question: "What comes next in the series: 1, 3, 6, 10, 15, ?",
    options: ["18", "20", "21", "22"],
    correctIndex: 2,
    region:
      "The numbers increase by consecutive integers: 1 + 2 = 3, 3 + 3 = 6, so the next term is 15 + 6 = 21.",
  },
  {
    id: 75,
    question:
      "Which of the following is the odd one out: Apple, Banana, Orange, Carrot?",
    options: ["Apple", "Banana", "Orange", "Carrot"],
    correctIndex: 3,
    region: "Carrot is a vegetable, while the others are fruits.",
  },

  {
    id: 76,
    question: "Which of the following completes the analogy: 3 : 9 :: 5 : ?",
    options: ["15", "20", "25", "30"],
    correctIndex: 2,
    region:
      "The pattern is multiplying by the number itself: 3 * 3 = 9, so 5 * 5 = 25.",
  },
  {
    id: 77,
    question: "What is the next term in the series: 1, 4, 9, 16, 25, ?",
    options: ["30", "36", "40", "49"],
    correctIndex: 1,
    region:
      "The series consists of squares of natural numbers: 1², 2², 3², 4², 5². So, the next term is 6² = 36.",
  },
  {
    id: 78,
    question: "If 'CAT' is written as 'DBU', how is 'DOG' written?",
    options: ["EPH", "EPG", "EPI", "EQH"],
    correctIndex: 0,
    region:
      "Each letter is shifted forward by 1: C -> D, A -> B, T -> U, so DOG -> EPH.",
  },
  {
    id: 79,
    question:
      "Which of the following is the odd one out: 16, 25, 36, 49, 64, 100?",
    options: ["16", "25", "36", "49", "64", "100"],
    correctIndex: 5,
    region:
      "All the numbers except 100 are perfect squares of integers. 100 is a perfect square but does not follow the same series of squares like the others.",
  },
  {
    id: 80,
    question: "What is the missing number in the series: 4, 12, 36, 108, ?",
    options: ["216", "252", "288", "324"],
    correctIndex: 0,
    region:
      "The series multiplies by 3 each time: 4 * 3 = 12, 12 * 3 = 36, 36 * 3 = 108, so the next term is 108 * 3 = 216.",
  },
  {
    id: 81,
    question: "What comes next in the sequence: 1, 1, 2, 6, 24, ?",
    options: ["120", "144", "100", "180"],
    correctIndex: 0,
    region:
      "The series is the factorial sequence: 1!, 2!, 3!, 4!, 5!. The next term is 5! = 120.",
  },
  {
    id: 82,
    question:
      "Which of the following is the odd one out: Elephant, Tiger, Dog, Cat?",
    options: ["Elephant", "Tiger", "Dog", "Cat"],
    correctIndex: 0,
    region: "Elephant is the only animal that is not a carnivore.",
  },
  {
    id: 83,
    question:
      "If all roses are flowers and some flowers are red, which of the following is true?",
    options: [
      "All roses are red",
      "Some roses are red",
      "No roses are red",
      "Some flowers are not red",
    ],
    correctIndex: 1,
    region:
      "It is possible that some roses are red, but not guaranteed by the premises.",
  },
  {
    id: 84,
    question:
      "Which of the following is the next number in the series: 5, 10, 20, 40, ?",
    options: ["60", "80", "100", "120"],
    correctIndex: 1,
    region:
      "The series doubles each time: 5 * 2 = 10, 10 * 2 = 20, 20 * 2 = 40, so the next term is 40 * 2 = 80.",
  },
  {
    id: 85,
    question: "Which number comes next in the series: 1, 1, 2, 6, 24, ?",
    options: ["120", "144", "100", "180"],
    correctIndex: 0,
    region:
      "This is the factorial series: 1!, 2!, 3!, 4!, 5!. The next term is 5! = 120.",
  },
  {
    id: 86,
    question: "What will be the next term in the series: 2, 6, 12, 20, 30, ?",
    options: ["35", "42", "45", "50"],
    correctIndex: 1,
    region:
      "The difference between each number increases by 2: 4, 6, 8, 10. So the next difference is 12, and the next number is 30 + 12 = 42.",
  },
  {
    id: 87,
    question:
      "Which of the following is the odd one out: Square, Rectangle, Circle, Triangle?",
    options: ["Square", "Rectangle", "Circle", "Triangle"],
    correctIndex: 2,
    region: "Circle is the only figure with no straight lines.",
  },
  {
    id: 88,
    question: "If 5 + 2 = 18, 6 + 3 = 30, then 7 + 4 = ?",
    options: ["35", "42", "45", "49"],
    correctIndex: 1,
    region:
      "The pattern is: 5 + 2 = 5 * 2 + 8 = 18. Similarly, 7 + 4 = 7 * 4 + 7 = 42.",
  },
  {
    id: 89,
    question:
      "Which of the following is the odd one out: Dog, Cat, Rabbit, Chair?",
    options: ["Dog", "Cat", "Rabbit", "Chair"],
    correctIndex: 3,
    region: "Chair is an inanimate object, while the others are animals.",
  },
  {
    id: 90,
    question:
      "In a certain code, 'A' is written as 'D', 'B' is written as 'E', and so on. How is 'HELLO' written?",
    options: ["KHOOR", "JGNOS", "JFLLO", "ILLOQ"],
    correctIndex: 0,
    region:
      "Each letter is shifted forward by 3 positions: H -> K, E -> H, L -> O, etc.",
  },
  {
    id: 91,
    question:
      "Which of the following completes the analogy: 10 : 100 :: 20 : ?",
    options: ["200", "300", "400", "500"],
    correctIndex: 2,
    region:
      "The pattern is multiplying by 10: 10 * 10 = 100, so 20 * 20 = 400.",
  },
  {
    id: 92,
    question: "What is the missing number in the series: 2, 6, 12, 20, ?",
    options: ["30", "36", "40", "42"],
    correctIndex: 3,
    region:
      "The difference between the numbers is increasing by 2: 4, 6, 8. So, the next number is 20 + 12 = 42.",
  },
  {
    id: 93,
    question: "If 'TRIANGLE' is written as 'USJMBHF', how is 'SQUARE' written?",
    options: ["TVRUSB", "TWRVQB", "TVSWRB", "TWRSVC"],
    correctIndex: 1,
    region: "Each letter is shifted forward by 1: T -> U, R -> S, I -> J, etc.",
  },
  {
    id: 94,
    question:
      "Which of the following is the odd one out: 12, 36, 72, 108, 144?",
    options: ["12", "36", "72", "108", "144"],
    correctIndex: 0,
    region: "All numbers except 12 are divisible by 18.",
  },
  {
    id: 95,
    question: "Which number completes the series: 3, 9, 27, 81, ?",
    options: ["243", "256", "512", "729"],
    correctIndex: 0,
    region:
      "The series multiplies by 3 each time: 3, 9, 27, 81, so the next number is 81 * 3 = 243.",
  },
  {
    id: 96,
    question: "Which of the following completes the analogy: 2 : 8 :: 3 : ?",
    options: ["12", "16", "18", "24"],
    correctIndex: 1,
    region: "The pattern is the cube of the number: 2³ = 8, so 3³ = 27.",
  },
  {
    id: 97,
    question: "What is the missing number in the sequence: 1, 4, 9, 16, ?",
    options: ["25", "36", "49", "64"],
    correctIndex: 0,
    region:
      "The series consists of squares of natural numbers: 1², 2², 3², 4², so the next term is 5² = 25.",
  },
  {
    id: 98,
    question:
      "Which of the following is the odd one out: Apple, Banana, Orange, Carrot?",
    options: ["Apple", "Banana", "Orange", "Carrot"],
    correctIndex: 3,
    region: "Carrot is a vegetable, while the others are fruits.",
  },
  {
    id: 99,
    question:
      "In a certain code, 'BOY' is written as 'CPZ'. What is the code for 'GIRL'?",
    options: ["HJSM", "HJTN", "HJSN", "HIQN"],
    correctIndex: 0,
    region: "Each letter is shifted forward by 1: B -> C, O -> P, Y -> Z.",
  },
  {
    id: 100,
    question: "Which number comes next in the series: 5, 10, 20, 40, ?",
    options: ["50", "60", "70", "80"],
    correctIndex: 3,
    region:
      "The series doubles each time: 5 * 2 = 10, 10 * 2 = 20, 20 * 2 = 40, so the next term is 40 * 2 = 80.",
  },
];
