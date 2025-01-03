const mcqArray = [
    {
      id: 1,
      question: "Which country recently launched the world's most powerful rocket, the Starship?",
      options: ['Russia', 'China', 'United States', 'Japan'],
      correctIndex: 2
    },
    {
      id: 2,
      question: "Which Indian state recently launched the 'Yuva Vikas Abhiyan' to empower youth?",
      options: ['Uttar Pradesh', 'Madhya Pradesh', 'Rajasthan', 'Gujarat'],
      correctIndex: 0
    },
    {
      id: 3,
      question: "The G20 Summit 2023 was held in which city?",
      options: ['New Delhi, India', 'Bali, Indonesia', 'Rome, Italy', 'Washington D.C., USA'],
      correctIndex: 0
    },
    {
      id: 4,
      question: "Which country recently hosted the FIFA Women's World Cup 2023?",
      options: ['Australia and New Zealand', 'United States', 'France', 'Canada'],
      correctIndex: 0
    },
    {
      id: 5,
      question: "Which Indian city recently hosted the G20 Culture Ministers' Meeting?",
      options: ['Varanasi', 'Khajuraho', 'Hampi', 'Ajanta-Ellora Caves'],
      correctIndex: 1
    },
    {
      id: 6,
      question: "Which country recently experienced a devastating earthquake?",
      options: ['Turkey', 'Japan', 'Indonesia', 'Mexico'],
      correctIndex: 0
    },
    {
      id: 7,
      question: "Which Indian state recently launched the 'Mukhyamantri Kisan Samman Nidhi'?",
      options: ['Uttar Pradesh', 'Madhya Pradesh', 'Rajasthan', 'Bihar'],
      correctIndex: 1
    },
    {
      id: 8,
      question: "The BRICS Summit 2023 was held in which country?",
      options: ['India', 'China', 'South Africa', 'Brazil'],
      correctIndex: 2
    },
    {
      id: 9,
      question: "Which Indian state recently launched the 'Mission Shakti' initiative for women's safety?",
      options: ['Uttar Pradesh', 'Madhya Pradesh', 'Rajasthan', 'Bihar'],
      correctIndex: 0
    },
    {
      id: 10,
      question: "Which country recently won the FIFA Men's World Cup 2022?",
      options: ['Argentina', 'France', 'Brazil', 'Germany'],
      correctIndex: 0
    },
    {
      id: 11,
      question: "Which Indian state recently launched the 'Jal Jeevan Mission' to provide safe drinking water to all households?",
      options: ['Uttar Pradesh', 'Madhya Pradesh', 'Rajasthan', 'Bihar'],
      correctIndex: 0
    },
    {
      id: 12,
      question: "Which country recently hosted the COP28 Climate Change Conference?",
      options: ['United Arab Emirates', 'Egypt', 'United Kingdom', 'Poland'],
      correctIndex: 0
    },
    {
      id: 13,
      question: "Which Indian state recently launched the 'Mukhyamantri Teerth Yatra Yojana' for senior citizens?",
      options: ['Uttar Pradesh', 'Madhya Pradesh', 'Rajasthan', 'Gujarat'],
      correctIndex: 0
    },
    {
      id: 14,
      question: "Which country recently experienced a severe heatwave?",
      options: ['India', 'Pakistan', 'Australia', 'All of the above'],
      correctIndex: 3
    },
    {
      id: 15,
      question: "Which Indian state recently launched the 'One District One Product' scheme to promote local industries?",
      options: ['Uttar Pradesh', 'Madhya Pradesh', 'Rajasthan', 'Gujarat'],
      correctIndex: 0
    },
    {
      id: 16,
      question: "Which country recently launched the 'Belt and Road Initiative'?",
      options: ['United States', 'China', 'Russia', 'India'],
      correctIndex: 1
    },
    {
      id: 17,
      question: "Which Indian state recently launched the 'Kanya Sumangala Yojana' for the welfare of girls?",
      options: ['Uttar Pradesh', 'Madhya Pradesh', 'Rajasthan', 'Bihar'],
      correctIndex: 0
    },
    {
      id: 18,
      question: "Which country recently hosted the Olympic Games?",
      options: ['Japan', 'China', 'France', 'United States'],
      correctIndex: 0
    },
    {
      id: 19,
      question: "Which Indian state recently launched the 'Mukhyamantri Gramodaya Yojana' for rural development?",
      options: ['Uttar Pradesh', 'Madhya Pradesh', 'Rajasthan', 'Bihar'],
      correctIndex: 0
    },
    {
      id: 20,
      question: "Which country recently experienced a volcanic eruption?",
      options: ['Iceland', 'Italy', 'Indonesia', 'All of the above'],
      correctIndex: 3
    },
    // Adding the next 20 questions
    {
      id: 21,
      question: "Which planet is known as the 'Red Planet'?",
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctIndex: 1
    },
    {
      id: 22,
      question: "Which famous scientist developed the theory of relativity?",
      options: ['Isaac Newton', 'Galileo Galilei', 'Albert Einstein', 'Nikola Tesla'],
      correctIndex: 2
    },
    {
      id: 23,
      question: "What is the longest river in the world?",
      options: ['Amazon River', 'Nile River', 'Yangtze River', 'Mississippi River'],
      correctIndex: 1
    },
    {
      id: 24,
      question: "Which city is known as the 'City of Love'?",
      options: ['Rome', 'Paris', 'Venice', 'New York'],
      correctIndex: 1
    },
    {
      id: 25,
      question: "Who painted the 'Mona Lisa'?",
      options: ['Pablo Picasso', 'Vincent van Gogh', 'Leonardo da Vinci', 'Claude Monet'],
      correctIndex: 2
    },
    {
      id: 26,
      question: "What is the hardest natural substance on Earth?",
      options: ['Gold', 'Diamond', 'Platinum', 'Iron'],
      correctIndex: 1
    },
    {
      id: 27,
      question: "What is the capital city of Japan?",
      options: ['Kyoto', 'Osaka', 'Tokyo', 'Hiroshima'],
      correctIndex: 2
    },
    {
      id: 28,
      question: "Which element has the chemical symbol 'O'?",
      options: ['Oxygen', 'Osmium', 'Ozone', 'Oganesson'],
      correctIndex: 0
    },
    {
      id: 29,
      question: "In which country is the Eiffel Tower located?",
      options: ['United Kingdom', 'Italy', 'France', 'Germany'],
      correctIndex: 2
    },
    {
      id: 30,
      question: "Who is known as the 'Father of Modern Physics'?",
      options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Nikola Tesla'],
      correctIndex: 1
    },
    {
      id: 31,
      question: "What is the main ingredient in traditional Japanese sushi?",
      options: ['Rice', 'Fish', 'Seaweed', 'Noodles'],
      correctIndex: 0
    },
    {
      id: 32,
      question: "What is the largest ocean on Earth?",
      options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      correctIndex: 3
    },
    {
      id: 33,
      question: "Which country is famous for inventing the first automobile?",
      options: ['France', 'Germany', 'Italy', 'United States'],
      correctIndex: 1
    },
    {
      id: 34,
      question: "Which is the smallest continent by area?",
      options: ['Asia', 'Australia', 'Europe', 'Africa'],
      correctIndex: 1
    },
    {
      id: 35,
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: ['Charles Dickens', 'Jane Austen', 'William Shakespeare', 'George Orwell'],
      correctIndex: 2
    },
    {
      id: 36,
      question: "What is the chemical symbol for water?",
      options: ['HO', 'H2O', 'O2', 'H2'],
      correctIndex: 1
    },
    {
      id: 37,
      question: "Which gas do plants absorb from the atmosphere for photosynthesis?",
      options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
      correctIndex: 1
    },
    {
      id: 38,
      question: "Which element has the atomic number 1?",
      options: ['Oxygen', 'Helium', 'Hydrogen', 'Carbon'],
      correctIndex: 2
    },
    {
      id: 39,
      question: "Who discovered the theory of evolution?",
      options: ['Charles Darwin', 'Isaac Newton', 'Albert Einstein', 'Louis Pasteur'],
      correctIndex: 0
    },
    {
      id: 40,
      question: "Which is the tallest mountain in the world?",
      options: ['Mount Everest', 'Mount Kilimanjaro', 'Mount Fuji', 'K2'],
      correctIndex: 0
    },
        
        {
          id: 41,
          question: "Which planet is closest to the Sun?",
          options: ['Mercury', 'Venus', 'Earth', 'Mars'],
          correctIndex: 0
        },
        {
          id: 42,
          question: "Which ocean is the largest in the world?",
          options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
          correctIndex: 3
        },
        {
          id: 43,
          question: "Who invented the light bulb?",
          options: ['Nikola Tesla', 'Alexander Graham Bell', 'Thomas Edison', 'Albert Einstein'],
          correctIndex: 2
        },
        {
          id: 44,
          question: "Which of the following is the longest river in the United States?",
          options: ['Missouri River', 'Mississippi River', 'Ohio River', 'Colorado River'],
          correctIndex: 1
        },
        {
          id: 45,
          question: "In which year did India gain independence from British rule?",
          options: ['1942', '1947', '1950', '1952'],
          correctIndex: 1
        },
        {
          id: 46,
          question: "Which language has the most native speakers in the world?",
          options: ['Mandarin', 'Spanish', 'English', 'Hindi'],
          correctIndex: 0
        },
        {
          id: 47,
          question: "Which famous scientist discovered the law of gravity?",
          options: ['Isaac Newton', 'Albert Einstein', 'Marie Curie', 'Nikola Tesla'],
          correctIndex: 0
        },
        {
          id: 48,
          question: "Which country is the largest producer of coffee in the world?",
          options: ['Colombia', 'Brazil', 'Vietnam', 'Ethiopia'],
          correctIndex: 1
        },
        {
          id: 49,
          question: "Which country is known as the Land of the Rising Sun?",
          options: ['China', 'South Korea', 'India', 'Japan'],
          correctIndex: 3
        },
        {
          id: 50,
          question: "Who is the author of the Harry Potter book series?",
          options: ['J.R.R. Tolkien', 'J.K. Rowling', 'George R.R. Martin', 'Suzanne Collins'],
          correctIndex: 1
        },
        {
          id: 51,
          question: "Which city is known as the 'Big Apple'?",
          options: ['Los Angeles', 'Chicago', 'New York City', 'San Francisco'],
          correctIndex: 2
        },
        {
          id: 52,
          question: "What is the largest desert in the world?",
          options: ['Sahara Desert', 'Gobi Desert', 'Kalahari Desert', 'Antarctic Desert'],
          correctIndex: 3
        },
        {
          id: 53,
          question: "Which continent is known as the 'Dark Continent'?",
          options: ['Asia', 'Africa', 'Europe', 'Australia'],
          correctIndex: 1
        },
        {
          id: 54,
          question: "Which country was the first to land a human on the Moon?",
          options: ['Soviet Union', 'United States', 'China', 'India'],
          correctIndex: 1
        },
        {
          id: 55,
          question: "Which animal is known as the King of the Jungle?",
          options: ['Elephant', 'Tiger', 'Lion', 'Bear'],
          correctIndex: 2
        },
        {
          id: 56,
          question: "Who painted the famous 'Starry Night'?",
          options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'],
          correctIndex: 0
        },
        {
          id: 57,
          question: "Which city is the capital of Canada?",
          options: ['Toronto', 'Ottawa', 'Vancouver', 'Montreal'],
          correctIndex: 1
        },
        {
          id: 58,
          question: "What is the largest species of shark?",
          options: ['Whale Shark', 'Great White Shark', 'Hammerhead Shark', 'Tiger Shark'],
          correctIndex: 0
        },
        {
          id: 59,
          question: "Which continent is the least populated?",
          options: ['Asia', 'Africa', 'Australia', 'Antarctica'],
          correctIndex: 3
        },
        {
          id: 60,
          question: "What is the currency of Japan?",
          options: ['Yuan', 'Yen', 'Won', 'Ringgit'],
          correctIndex: 1
        },
        {
          id: 61,
          question: "Which human organ is responsible for pumping blood throughout the body?",
          options: ['Lungs', 'Heart', 'Kidneys', 'Liver'],
          correctIndex: 1
        },
        {
          id: 62,
          question: "What is the smallest country in the world?",
          options: ['Monaco', 'Vatican City', 'San Marino', 'Liechtenstein'],
          correctIndex: 1
        },
        {
          id: 63,
          question: "Which country is known as the Land of the Thunder Dragon?",
          options: ['Nepal', 'Bhutan', 'Tibet', 'Sri Lanka'],
          correctIndex: 1
        },
        {
          id: 64,
          question: "Which planet is known as the 'Morning Star'?",
          options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
          correctIndex: 0
        },
        {
          id: 65,
          question: "What is the official language of Brazil?",
          options: ['Spanish', 'French', 'Portuguese', 'Italian'],
          correctIndex: 2
        },
        {
          id: 66,
          question: "What is the chemical symbol for Gold?",
          options: ['Ag', 'Au', 'Pb', 'Hg'],
          correctIndex: 1
        },
        {
          id: 67,
          question: "Which country invented pizza?",
          options: ['United States', 'France', 'Italy', 'Greece'],
          correctIndex: 2
        },
        {
          id: 68,
          question: "Who was the first president of the United States?",
          options: ['George Washington', 'Abraham Lincoln', 'Thomas Jefferson', 'John Adams'],
          correctIndex: 0
        },
        {
          id: 69,
          question: "Which planet has the most moons?",
          options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
          correctIndex: 3
        },
        {
          id: 70,
          question: "Which continent has the most countries?",
          options: ['Africa', 'Asia', 'Europe', 'South America'],
          correctIndex: 0
        },
        {
          id: 71,
          question: "Which country is the largest in the world by area?",
          options: ['United States', 'Canada', 'China', 'Russia'],
          correctIndex: 3
        },
        {
          id: 72,
          question: "Which element has the atomic number 6?",
          options: ['Oxygen', 'Nitrogen', 'Carbon', 'Helium'],
          correctIndex: 2
        },
        {
          id: 73,
          question: "Which movie won the Oscar for Best Picture in 2022?",
          options: ['The Power of the Dog', 'CODA', 'Dune', 'West Side Story'],
          correctIndex: 1
        },
        {
          id: 74,
          question: "Which company is the largest social media platform by user count?",
          options: ['Twitter', 'Facebook', 'Instagram', 'TikTok'],
          correctIndex: 1
        },
        {
          id: 75,
          question: "Which country is known for the Great Barrier Reef?",
          options: ['New Zealand', 'Australia', 'South Africa', 'India'],
          correctIndex: 1
        },
        {
          id: 76,
          question: "Which of these is the largest island in the world?",
          options: ['Greenland', 'Australia', 'New Guinea', 'Borneo'],
          correctIndex: 0
        },
        {
          id: 77,
          question: "Which bird is known for its ability to mimic human speech?",
          options: ['Parrot', 'Sparrow', 'Eagle', 'Owl'],
          correctIndex: 0
        },
        {
          id: 78,
          question: "Who is the author of 'Pride and Prejudice'?",
          options: ['Charlotte Brontë', 'Jane Austen', 'Charles Dickens', 'Emily Dickinson'],
          correctIndex: 1
        },
        {
          id: 79,
          question: "What is the speed of light in a vacuum?",
          options: ['3 × 10^8 m/s', '1 × 10^6 m/s', '2 × 10^6 m/s', '5 × 10^9 m/s'],
          correctIndex: 0
        },
        {
          id: 80,
          question: "Which country is the largest producer of tea?",
          options: ['India', 'China', 'Sri Lanka', 'Japan'],
          correctIndex: 1
        },
        {
          id: 81,
          question: "Which animal is known for its long neck?",
          options: ['Elephant', 'Giraffe', 'Kangaroo', 'Horse'],
          correctIndex: 1
        },
        {
          id: 82,
          question: "Which movie franchise features a character named Darth Vader?",
          options: ['Star Trek', 'Star Wars', 'Harry Potter', 'The Matrix'],
          correctIndex: 1
        },
        {
          id: 83,
          question: "Which natural disaster is measured by the Richter scale?",
          options: ['Tornadoes', 'Earthquakes', 'Floods', 'Hurricanes'],
          correctIndex: 1
        },
        {
          id: 84,
          question: "Which river flows through Egypt?",
          options: ['Amazon River', 'Nile River', 'Yangtze River', 'Ganges River'],
          correctIndex: 1
        },
        {
          id: 85,
          question: "What is the symbol for the chemical element oxygen?",
          options: ['O', 'O2', 'Ox', 'Og'],
          correctIndex: 0
        },
        {
          id: 86,
          question: "Which country is famous for the Eiffel Tower?",
          options: ['Germany', 'Italy', 'France', 'Spain'],
          correctIndex: 2
        },
        {
          id: 87,
          question: "Which is the longest-running animated TV show?",
          options: ['SpongeBob SquarePants', 'Simpsons', 'Family Guy', 'Looney Tunes'],
          correctIndex: 1
        },
        {
          id: 88,
          question: "Which of these is the capital of Australia?",
          options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
          correctIndex: 2
        },
        {
          id: 89,
          question: "Who was the first person to walk on the Moon?",
          options: ['Buzz Aldrin', 'Yuri Gagarin', 'Neil Armstrong', 'John Glenn'],
          correctIndex: 2
        },
        {
          id: 90,
          question: "Which planet is the hottest in the solar system?",
          options: ['Venus', 'Mercury', 'Mars', 'Saturn'],
          correctIndex: 0
        },
        {
          id: 91,
          question: "Which element is the lightest gas?",
          options: ['Hydrogen', 'Oxygen', 'Helium', 'Nitrogen'],
          correctIndex: 0
        },
        {
          id: 92,
          question: "Which famous historical figure was known as the 'Maid of Orléans'?",
          options: ['Catherine the Great', 'Joan of Arc', 'Cleopatra', 'Queen Victoria'],
          correctIndex: 1
        },
        {
          id: 93,
          question: "Which is the largest island country in the world?",
          options: ['Australia', 'Indonesia', 'Madagascar', 'Sri Lanka'],
          correctIndex: 2
        },
        {
          id: 94,
          question: "Which country is home to the Great Wall?",
          options: ['Japan', 'China', 'India', 'South Korea'],
          correctIndex: 1
        },
        {
          id: 95,
          question: "What is the capital of the United Kingdom?",
          options: ['London', 'Edinburgh', 'Cardiff', 'Belfast'],
          correctIndex: 0
        },
        {
          id: 96,
          question: "Who invented the telephone?",
          options: ['Nikola Tesla', 'Thomas Edison', 'Alexander Graham Bell', 'Michael Faraday'],
          correctIndex: 2
        },
        {
          id: 97,
          question: "Which is the largest continent by population?",
          options: ['Europe', 'Asia', 'Africa', 'North America'],
          correctIndex: 1
        },
        {
          id: 98,
          question: "Who developed the first successful polio vaccine?",
          options: ['Albert Einstein', 'Louis Pasteur', 'Jonas Salk', 'Edward Jenner'],
          correctIndex: 2
        },
        {
          id: 99,
          question: "Which bird is known for its distinctive red breast?",
          options: ['Robin', 'Sparrow', 'Eagle', 'Pigeon'],
          correctIndex: 0
        },
        {
          id: 100,
          question: "Which is the smallest planet in our solar system?",
          options: ['Mercury', 'Mars', 'Venus', 'Earth'],
          correctIndex: 0
        }
      ];
      
  