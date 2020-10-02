

const findLongestWordLength = (str) => {
let words = [];

for (let i = 0; i < str.length; i++) {
    if (str[i] === ' '){
        words.push(',');
    };
    words.push(str[i]);   
};
let joined = words.join('').split();
let joinedAndPartedWordsArr = joined[0].split(', ');
let stringLength = joinedAndPartedWordsArr.map(word => word.length);
let sortedLength = stringLength.sort((a, b) => a -b );

return sortedLength[sortedLength.length -1];
};

//optimized solution 

function findLongestWordLength(s) {
    return s.split(' ')
      .reduce(function(x, y) {
        return Math.max(x, y.length)
      }, 0);
  }

  //shorter solution

  function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map(word => word.length));
  }

  //solution with explanation

  function findLongestWordLength(str) {
    //split the string into individual words
    //(important!!, you'll see why later)
    str = str.split(" ");
  
    //str only has 1 element left that is the longest element,
    //return the length of that element
    if (str.length == 1) {
      return str[0].length;
    }
  
    //if the first element's length is greater than the second element's (or equal)
    //remove the second element and recursively call the function)
    if (str[0].length >= str[1].length) {
      str.splice(1, 1);
      return findLongestWordLength(str.join(" "));
    }
  
    //if the second element's length is greater thant the first element's start
    //call the function past the first element
    if (str[0].length <= str[1].length) {
      // from the first element to the last element inclusive.
      return findLongestWordLength(str.slice(1, str.length).join(" "));
    }
  }

