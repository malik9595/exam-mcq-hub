const questions = [
  // 50 checked
  {
    id: 1,
    question: "What is the average of the numbers 5, 10, 15, 10?",
    options: ["10", "12", "15", "20"],
    correctIndex: 0,
  },
  {
    id: 2,
    question: "What is the result of 25 × 15?",
    options: ["375", "350", "300", "400"],
    correctIndex: 0,
  },
  {
    id: 3,
    question: "Which of the following is a fraction?",
    options: ["3", "4/5", "7", "9"],
    correctIndex: 1,
  },
  {
    id: 4,
    question:
      "The area of a rectangle is 60 square meters, and its length is 12 meters. What is its width?",
    options: ["5", "6", "7", "8"],
    correctIndex: 0,
  },
  {
    id: 5,
    question: "What is the sum of 3/4 and 5/8?",
    options: ["7/8", "5/4", "11/8", "9/8"],
    correctIndex: 2,
  },
  {
    id: 6,
    question:
      "A discount of 20% is offered on a shirt costing Rs. 500. What is the discount amount?",
    options: ["Rs. 50", "Rs. 60", "Rs. 100", "Rs. 200"],
    correctIndex: 2,
  },
  {
    id: 7,
    question:
      "What is the simple interest on Rs. 1000 for 2 years at 5% per annum?",
    options: ["Rs. 100", "Rs. 50", "Rs. 200", "Rs. 150"],
    correctIndex: 0,
  },
  {
    id: 8,
    question: "If 0.25 is multiplied by 100, what is the result?",
    options: ["2.5", "25", "250", "25.0"],
    correctIndex: 1,
  },
  {
    id: 9,
    question:
      "Which of the following is the correct conversion of 3/5 into a decimal?",
    options: ["0.6", "0.75", "1.2", "0.3"],
    correctIndex: 0,
  },
  {
    id: 10,
    question: "Find the LCM of 6 and 8.",
    options: ["12", "24", "48", "16"],
    correctIndex: 1,
  },
  {
    id: 11,
    question:
      "If a number is divided by 8 and the remainder is 3, what will be the remainder when the same number is divided by 4?",
    options: ["1", "2", "3", "4"],
    correctIndex: 2,
  },
  {
    id: 12,
    question:
      "What is the compound interest on Rs. 2000 for 2 years at 10% per annum, compounded annually?",
    options: ["Rs. 400", "Rs. 500", "Rs. 420", "Rs. 600"],
    correctIndex: 2,
  },
  {
    id: 13,
    question:
      "The average of 10 numbers is 12. What is the sum of these 10 numbers?",
    options: ["120", "110", "115", "130"],
    correctIndex: 0,
  },
  {
    id: 14,
    question:
      "A man purchased a book for Rs. 120 and sold it for Rs. 150. What is his profit percentage?",
    options: ["20%", "25%", "30%", "40%"],
    correctIndex: 1,
  },
  {
    id: 15,
    question: "What is the perimeter of a square with side 5 cm?",
    options: ["20 cm", "25 cm", "15 cm", "30 cm"],
    correctIndex: 0,
  },
  {
    id: 16,
    question: "What is the product of 0.8 and 0.5?",
    options: ["0.4", "0.8", "0.5", "0.3"],
    correctIndex: 0,
  },
  {
    id: 17,
    question: "What is the mean of the following numbers: 8, 12, 16, 20?",
    options: ["14", "15", "16", "18"],
    correctIndex: 0,
  },
  {
    id: 18,
    question:
      "The area of a triangle is 60 square meters, and its base is 12 meters. What is its height?",
    options: ["5", "6", "7", "8"],
    correctIndex: 1,
  },
  {
    id: 19,
    question: "Which of the following is a prime number?",
    options: ["9", "12", "13", "14"],
    correctIndex: 2,
  },
  {
    id: 20,
    question: "What is the square of 15?",
    options: ["225", "250", "200", "300"],
    correctIndex: 0,
  },
  {
    id: 21,
    question:
      "What is the difference between the largest and smallest numbers in the series 10, 15, 20, 25, 30?",
    options: ["10", "15", "20", "30"],
    correctIndex: 0,
  },
  {
    id: 22,
    question:
      "If a person sells an article for Rs. 500 at a profit of 25%, what is the cost price?",
    options: ["Rs. 400", "Rs. 420", "Rs. 450", "Rs. 475"],
    correctIndex: 0,
  },
  {
    id: 23,
    question: "What is the sum of the first 10 prime numbers?",
    options: ["100", "150", "130", "140"],
    correctIndex: 2,
  },
  {
    id: 24,
    question: "The simple interest on Rs. 500 for 3 years at 4% per annum is?",
    options: ["Rs. 60", "Rs. 70", "Rs. 80", "Rs. 90"],
    correctIndex: 0,
  },
  {
    id: 25,
    question: "What is the total surface area of a cube with side length 4 cm?",
    options: ["96 cm²", "100 cm²", "120 cm²", "80 cm²"],
    correctIndex: 0,
  },
  {
    id: 26,
    question: "Which number comes next in the series: 3, 9, 27, 81, ?",
    options: ["243", "256", "200", "300"],
    correctIndex: 0,
  },
  {
    id: 27,
    question:
      "If a number is divided by 4 and the remainder is 2, what will be the remainder when the same number is divided by 2?",
    options: ["1", "0", "2", "4"],
    correctIndex: 1,
  },
  {
    id: 28,
    question: "What is 0.45 expressed as a fraction?",
    options: ["9/20", "45/100", "9/5", "4/9"],
    correctIndex: 1,
  },
  {
    id: 29,
    question:
      "Find the total area of a rectangle with length 10 meters and breadth 5 meters.",
    options: ["50 m²", "60 m²", "30 m²", "40 m²"],
    correctIndex: 0,
  },
  {
    id: 30,
    question: "What is the decimal equivalent of 7/8?",
    options: ["0.75", "0.875", "0.8", "1.5"],
    correctIndex: 1,
  },
  {
    id: 31,
    question: "What is the average of the numbers 1, 2, 3, 4, 5?",
    options: ["2", "3", "3.5", "2.5"],
    correctIndex: 1,
  },
  {
    id: 32,
    question:
      "The cost of a pencil is Rs. 15. What is the total cost of 7 pencils?",
    options: ["Rs. 100", "Rs. 120", "Rs. 105", "Rs. 110"],
    correctIndex: 2,
  },
  {
    id: 33,
    question:
      "What is the simple interest on Rs. 2000 for 4 years at 6% per annum?",
    options: ["Rs. 480", "Rs. 500", "Rs. 600", "Rs. 640"],
    correctIndex: 0,
  },
  {
    id: 34,
    question:
      "The area of a circle is 154 cm². What is the radius of the circle?",
    options: ["7 cm", "10 cm", "14 cm", "12 cm"],
    correctIndex: 0,
  },
  {
    id: 35,
    question: "Which number is divisible by both 3 and 5?",
    options: ["10", "15", "20", "25"],
    correctIndex: 1,
  },
  {
    id: 36,
    question:
      "A man bought a shirt for Rs. 500 and sold it at a loss of 10%. What is the selling price?",
    options: ["Rs. 450", "Rs. 475", "Rs. 400", "Rs. 420"],
    correctIndex: 0,
  },
  {
    id: 37,
    question: "What is the value of 5 × 6 ÷ 3?",
    options: ["10", "12", "15", "18"],
    correctIndex: 0,
  },
  {
    id: 38,
    question: "What is the least common multiple (LCM) of 12 and 18?",
    options: ["36", "24", "72", "30"],
    correctIndex: 0,
  },
  {
    id: 39,
    question:
      "What is the profit percentage if a person buys an article for Rs. 250 and sells it for Rs. 300?",
    options: ["15%", "20%", "25%", "30%"],
    correctIndex: 1,
  },
  {
    id: 40,
    question: "What is the cube of 5?",
    options: ["125", "100", "150", "200"],
    correctIndex: 0,
  },
  {
    id: 41,
    question: "If 3/7 is subtracted from 1, what is the result?",
    options: ["2/7", "3/7", "4/7", "5/7", ],
    correctIndex: 2,
  },
  {
    id: 42,
    question: "Find the average of 12, 14, 16, 18, 20.",
    options: ["16", "17", "18", "19"],
    correctIndex: 0,
  },
  {
    id: 43,
    question:
      "What is the discount percentage if an item originally priced at Rs. 500 is sold for Rs. 400?",
    options: ["10%", "15%", "20%", "25%"],
    correctIndex: 2,
  },
  {
    id: 44,
    question:
      "What is the perimeter of a rectangle with length 8 cm and breadth 6 cm?",
    options: ["28 cm", "24 cm", "22 cm", "26 cm"],
    correctIndex: 0,
  },
  {
    id: 45,
    question: "Find the area of a square whose side is 8 cm.",
    options: [ "48 cm²", "36 cm²","64 cm²", "80 cm²"],
    correctIndex: 2,
  },
  {
    id: 46,
    question: "What is the next number in the series: 2, 4, 8, 16, ?",
    options: ["32", "64", "20", "24"],
    correctIndex: 0,
  },
  {
    id: 47,
    question:
      "The sum of the squares of two consecutive integers is 85. What are the integers?",
    options: ["6 and 7", "7 and 8", "8 and 9", "9 and 10"],
    correctIndex: 0,
  },
  {
    id: 48,
    question: "Find the value of (12 × 5) ÷ (6 + 3).",
    options: ["10", "12", "15", "18"],
    correctIndex: 0,
  },
  {
    id: 49,
    question: "What is the largest number divisible by 2, 3, and 4?",
    options: ["12", "18", "24", "30"],
    correctIndex: 2,
  },
  {
    id: 50,
    question: "What is the greatest common divisor (GCD) of 36 and 48?",
    options: ["6", "12", "18", "24"],
    correctIndex: 1,
  },
// 5o checked
  // {
  //   id: 51,
  //   question: "What is 25% of 200?",
  //   options: ["50", "40", "60", "70"],
  //   correctIndex: 0,
  // },
  // {
  //   id: 52,
  //   question:
  //     "A shopkeeper buys an item for Rs. 150 and sells it for Rs. 200. What is his profit percentage?",
  //   options: ["25%", "30%", "35%", "40%"],
  //   correctIndex: 0,
  // },
  // {
  //   id: 53,
  //   question: "What is the ratio of 20 minutes to 1 hour?",
  //   options: ["1:3", "1:4", "1:5", "1:6"],
  //   correctIndex: 1,
  // },
  // {
  //   id: 54,
  //   question:
  //     "The ratio of boys to girls in a class is 3:4. If there are 36 boys, how many girls are there?",
  //   options: ["40", "48", "45", "42"],
  //   correctIndex: 1,
  // },
  // {
  //   id: 55,
  //   question: "If 3/4 of a number is 36, what is the number?",
  //   options: ["48", "45", "50", "40"],
  //   correctIndex: 0,
  // },
  // {
  //   id: 56,
  //   question:
  //     "A car travels 60 km in 1 hour. What is its speed in meters per second?",
  //   options: ["16.67 m/s", "18.67 m/s", "20.67 m/s", "22.67 m/s"],
  //   correctIndex: 0,
  // },
  // {
  //   id: 57,
  //   question:
  //     "A train runs at a speed of 72 km/h. How much time will it take to cover a distance of 360 km?",
  //   options: ["4 hours", "5 hours", "6 hours", "7 hours"],
  //   correctIndex: 2,
  // },
  // {
  //   id: 58,
  //   question:
  //     "A person can do a work in 6 days. How much time will he take to do the same work if he works at double the speed?",
  //   options: ["2 days", "3 days", "4 days", "5 days"],
  //   correctIndex: 1,
  // },
  // {
  //   id: 59,
  //   question: "What is the relationship between 1 km and 1000 meters?",
  //   options: [
  //     "1 km = 1000 cm",
  //     "1 km = 1000 meters",
  //     "1 km = 100 meters",
  //     "1 km = 1000 mm",
  //   ],
  //   correctIndex: 1,
  // },
  // {
  //   id: 60,
  //   question:
  //     "A person buys a machine for Rs. 4000 and sells it for Rs. 5000. What is the profit percentage?",
  //   options: ["25%", "20%", "15%", "10%"],
  //   correctIndex: 0,
  // },
  // {
  //   id: 61,
  //   question:
  //     "What is the selling price of an item if the cost price is Rs. 800 and the profit percentage is 20%?",
  //   options: ["Rs. 880", "Rs. 1000", "Rs. 960", "Rs. 1200"],
  //   correctIndex: 0,
  // },
  // {
  //   id: 62,
  //   question: "If 12% of a number is 24, what is the number?",
  //   options: ["200", "220", "240", "250"],
  //   correctIndex: 0,
  // },
  // {
  //   id: 63,
  //   question:
  //     "A person sold a product at a profit of 15%. If the cost price is Rs. 300, what is the selling price?",
  //   options: ["Rs. 345", "Rs. 350", "Rs. 355", "Rs. 360"],
  //   correctIndex: 0,
  // },
  // {
  //   id: 64,
  //   question:
  //     "What is the profit percentage if a person buys an item for Rs. 500 and sells it for Rs. 600?",
  //   options: ["20%", "25%", "30%", "35%"],
  //   correctIndex: 0,
  // },
  // {
  //   id: 65,
  //   question:
  //     "What is the percentage increase if the cost price of an article increases from Rs. 150 to Rs. 180?",
  //   options: ["15%", "20%", "25%", "30%"],
  //   correctIndex: 1,
  // },
  // {
  //   id: 66,
  //   question:
  //     "The ratio of the ages of A and B is 5:3. If A's age is 25 years, what is B's age?",
  //   options: ["15", "16", "18", "20"],
  //   correctIndex: 0,
  // },
  // {
  //   id: 67,
  //   question:
  //     "A car covers a distance of 180 km in 3 hours. What is the speed of the car?",
  //   options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
  //   correctIndex: 1,
  // },
  // {
  //   id: 68,
  //   question: "The ratio of 6 hours to 2 hours is?",
  //   options: ["1:3", "2:3", "3:2", "3:1"],
  //   correctIndex: 2,
  // },
  // {
  //   id: 69,
  //   question:
  //     "A person takes 4 hours to finish a task. If the task is divided into two equal parts, how much time will it take to complete each part?",
  //   options: ["1 hour", "2 hours", "3 hours", "4 hours"],
  //   correctIndex: 1,
  // },
  // {
  //   id: 70,
  //   question:
  //     "If the selling price of an article is Rs. 1200 and the cost price is Rs. 1000, what is the profit percentage?",
  //   options: ["10%", "15%", "20%", "25%"],
  //   correctIndex: 2,
  // },
  // {
  //   id: 71,
  //   question:
  //     "A person sells a book at Rs. 90 and gains 20%. What is the cost price of the book?",
  //   options: ["Rs. 70", "Rs. 75", "Rs. 80", "Rs. 85"],
  //   correctIndex: 0,
  // },
  // {
  //   id: 72,
  //   question:
  //     "If the speed of a train is 60 km/h, how much time will it take to cover a distance of 120 km?",
  //   options: ["1 hour", "2 hours", "3 hours", "4 hours"],
  //   correctIndex: 1,
  // },
  // {
  //   id: 73,
  //   question:
  //     "If a person completes a task in 8 hours, how much time will he take to complete it at 50% faster rate?",
  //   options: ["4 hours", "6 hours", "7 hours", "9 hours"],
  //   correctIndex: 0,
  // },
  // {
  //   id: 74,
  //   question:
  //     "A machine works 5 hours a day. How many hours will it take to complete the work if it works 2.5 times faster?",
  //   options: ["2 hours", "3 hours", "4 hours", "5 hours"],
  //   correctIndex: 1,
  // },
  // {
  //   id: 75,
  //   question:
  //     "The ratio of the length of a rectangle to its width is 5:2. If the length is 15 cm, what is the width?",
  //   options: ["5 cm", "6 cm", "7 cm", "8 cm"],
  //   correctIndex: 1,
  // },
  // {
  //   id: 76,
  //   question:
  //     "A profit of Rs. 400 is earned on the sale of an article. If the cost price is Rs. 1200, what is the profit percentage?",
  //   options: ["25%", "30%", "35%", "40%"],
  //   correctIndex: 0,
  // },
  // {
  //   id: 77,
  //   question: "A person walks 20 km in 4 hours. What is his speed?",
  //   options: ["4 km/h", "5 km/h", "6 km/h", "7 km/h"],
  //   correctIndex: 1,
  // },
  // {
  //   id: 78,
  //   question:
  //     "The ratio of the salaries of A and B is 4:5. If A’s salary is Rs. 32000, what is B’s salary?",
  //   options: ["Rs. 40000", "Rs. 40000", "Rs. 42000", "Rs. 44000"],
  //   correctIndex: 0,
  // },
  // {
  //   id: 79,
  //   question: "A train travels 180 km in 4 hours. What is its average speed?",
  //   options: ["45 km/h", "40 km/h", "35 km/h", "50 km/h"],
  //   correctIndex: 0,
  // },
  // {
  //   id: 80,
  //   question:
  //     "If a person does 1/4th of work in 10 days, how long will he take to complete the whole work?",
  //   options: ["40 days", "30 days", "20 days", "50 days"],
  //   correctIndex: 0,
  // },
  // {
  //   id: 81,
  //   question:
  //     "A person earns Rs. 1200 per day and works 6 days a week. What is his weekly income?",
  //   options: ["Rs. 7200", "Rs. 7400", "Rs. 7600", "Rs. 8000"],
  //   correctIndex: 0,
  // },
  // {
  //   id: 82,
  //   question: "What is the ratio of 30 minutes to 2 hours?",
  //   options: ["1:5", "1:4", "1:6", "1:2"],
  //   correctIndex: 0,
  // },
  // {
  //   id: 83,
  //   question:
  //     "A person buys a mobile phone for Rs. 15000 and sells it at a profit of 20%. What is the selling price?",
  //   options: ["Rs. 18000", "Rs. 17000", "Rs. 16000", "Rs. 15000"],
  //   correctIndex: 0,
  // },
  // {
  //   id: 84,
  //   question:
  //     "If the cost price of an item is Rs. 800 and the selling price is Rs. 960, what is the profit percentage?",
  //   options: ["15%", "20%", "25%", "30%"],
  //   correctIndex: 1,
  // },
  // {
  //   id: 85,
  //   question:
  //     "A train runs at a speed of 75 km/h. How much time will it take to cover a distance of 150 km?",
  //   options: ["1 hour", "2 hours", "3 hours", "4 hours"],
  //   correctIndex: 2,
  // },
  // {
  //   id: 86,
  //   question:
  //     "If a work is done in 20 days by 5 men, how many days will 10 men take to complete the same work?",
  //   options: ["5 days", "10 days", "15 days", "20 days"],
  //   correctIndex: 1,
  // },
  // {
  //   id: 87,
  //   question:
  //     "The selling price of an article is Rs. 5000. If the cost price is Rs. 4000, what is the profit percentage?",
  //   options: ["25%", "20%", "15%", "10%"],
  //   correctIndex: 0,
  // },
  // {
  //   id: 88,
  //   question:
  //     "A person spends Rs. 600 on groceries and earns Rs. 1200. What is his profit percentage?",
  //   options: ["50%", "75%", "100%", "150%"],
  //   correctIndex: 1,
  // },
  // {
  //   id: 89,
  //   question: "If a train travels 240 km in 6 hours, what is its speed?",
  //   options: ["40 km/h", "45 km/h", "50 km/h", "60 km/h"],
  //   correctIndex: 2,
  // },
  // {
  //   id: 90,
  //   question:
  //     "A factory produces 1000 units of a product in 8 hours. How many units will be produced in 5 hours?",
  //   options: ["500", "600", "800", "900"],
  //   correctIndex: 1,
  // },
  // {
  //   id: 91,
  //   question:
  //     "The ratio of the ages of A and B is 5:7. If A's age is 25, what is B's age?",
  //   options: ["35", "30", "45", "40"],
  //   correctIndex: 0,
  // },
  // {
  //   id: 92,
  //   question:
  //     "What is the time taken by a person to cover a distance of 150 km at a speed of 60 km/h?",
  //   options: ["2 hours", "3 hours", "4 hours", "5 hours"],
  //   correctIndex: 2,
  // },
  // {
  //   id: 93,
  //   question:
  //     "A person can complete a task in 15 days. How long will it take to complete 3/4 of the task?",
  //   options: ["11 days", "10 days", "12 days", "15 days"],
  //   correctIndex: 0,
  // },
  // {
  //   id: 94,
  //   question: "A car travels 240 km in 5 hours. What is its average speed?",
  //   options: ["48 km/h", "50 km/h", "60 km/h", "70 km/h"],
  //   correctIndex: 1,
  // },
  // {
  //   id: 95,
  //   question:
  //     "If a machine produces 400 units in 8 hours, how many units will it produce in 12 hours?",
  //   options: ["500", "600", "800", "1000"],
  //   correctIndex: 2,
  // },
  // {
  //   id: 96,
  //   question:
  //     "The cost price of a chair is Rs. 500, and it is sold at a profit of 25%. What is the selling price?",
  //   options: ["Rs. 625", "Rs. 600", "Rs. 700", "Rs. 550"],
  //   correctIndex: 0,
  // },
  // {
  //   id: 97,
  //   question:
  //     "If a product is sold for Rs. 8000 at a profit of 40%, what is the cost price?",
  //   options: ["Rs. 5600", "Rs. 6000", "Rs. 7000", "Rs. 8000"],
  //   correctIndex: 0,
  // },
  // {
  //   id: 98,
  //   question:
  //     "A person works for 10 days and completes 2/5 of the task. How much time will he take to complete the remaining work?",
  //   options: ["4 days", "5 days", "6 days", "7 days"],
  //   correctIndex: 1,
  // },
  // {
  //   id: 99,
  //   question:
  //     "A person buys 3 kg of apples for Rs. 240. What is the cost of 1 kg of apples?",
  //   options: ["Rs. 60", "Rs. 70", "Rs. 80", "Rs. 90"],
  //   correctIndex: 0,
  // },
  // {
  //   id: 100,
  //   question: "What is the ratio of 5 hours to 2 days?",
  //   options: ["1:4", "1:3", "1:2", "5:24"],
  //   correctIndex: 3,
  // },
];
