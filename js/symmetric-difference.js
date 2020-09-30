//freecodeCamp Algorithms

// 1.Symmetric Difference

function checkForSameVal(first, second) {

    let arrFinal = [];
  
      for (let i = 0; i < first.length; i++){
          if (second.includes(first[i]) == false){
              arrFinal.push(first[i])       
          }  
      };
      for (let j = 0; j < second.length; j++){
          if (first.includes(second[j]) == false){
              arrFinal.push(second[j])       
          }  
      }; 
      return getUniqueValues(arrFinal);
  }
  
  const getUniqueValues = (arr) => {
    let unique = [...new Set(arr)]
    return unique;
  }
  
  function sym(...args) {   
  
       let count = 0;
       let resultArr = [];
     
       for (let i = 0; i < args.length - 1; i++){
        resultArr = checkForSameVal(args[0], args[1 + count]);
        args[0] = resultArr;      
        count ++;
       };
  
       
       return resultArr;
    }
  
   // console.log(sym([2, 3, 3, 5, 5, 8], [2, 3,  6, 7], [3, 3, 5, 7]));
  
   // advanced/ cleaner solution:
  
   const diff = (arr1, arr2) => [
    ...arr1.filter(e => !arr2.includes(e)),
    ...arr2.filter(e => !arr1.includes(e))
  ];
  
  const sym = (...args) => [...new Set(args.reduce(diff))];
  
  // test here
  sym([1, 2, 3], [5, 2, 1, 4]);
  
  //explanation: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-find-the-symmetric-difference/301611/2
  
  function sym(...args){
    return [...args.reduce(reducer, new Set())]
  }
  
  function reducer(result, arr){
    const compare = new Set(arr);
    for(let val of compare){
      if(result.has(val)){
        result.delete(val);
      }else{
        result.add(val)
      }
    }
    return result;
  }