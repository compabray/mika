function cantidadTransform(inputString) {
    
  // Replace "k" with "kg" if it's not already there
    const checkKg = inputString.toLowerCase().includes("kg");
      let stringWithKg;
  
      if (!checkKg) {
      stringWithKg = inputString.replace(/k/g, "kg");
      } else {
      stringWithKg = inputString;
          }
    // Capitalize the first letter and lowercase the rest of the string
    const words = stringWithKg.split(' ');
    const transformedWords = words.map((word, index) => {
      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      return word;
    });
  
    // Join the words back together into a single string
    const result = transformedWords.join(' ');
  
    return result;
  }

    export default cantidadTransform;