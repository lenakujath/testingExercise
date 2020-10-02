

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

console.log(findLongestWordLength("asdfasdfasdf dfdf dfs sfdfd"))