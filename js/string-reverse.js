const reverse = (str) => {
    return str.split('').reverse().join('');
};

const reverseSecond = (str) => {
    let reverse = "";
    for (let i = str.length -1; i >= 0; i--) {
        reverse += str[i];        
    }
    return reverse;
}

console.log(reverseSecond('hello'))