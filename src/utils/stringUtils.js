// Utility function to capitalize the first letter of each word in a string
export const capitalizeFirstLetterOfEachWord = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };
  