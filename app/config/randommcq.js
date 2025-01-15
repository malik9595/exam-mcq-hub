export const getRandomItems = (arr, count) =>
    arr
      .map((item) => ({ item, sort: Math.random() })) // Add a random sort key
      .sort((a, b) => a.sort - b.sort) // Sort by the random key
      .slice(0, count) // Take the first 'count' items
      .map((obj) => obj.item); // Extract the original items
  
//   export const sscCglData = getRandomItems(allData, 30);
  