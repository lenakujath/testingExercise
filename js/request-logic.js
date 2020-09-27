// We at Content Creators know this code is useful for getting the
// extension off of the supplied filename, but we can't figure out the rest of
// the function to use it! We hope this is useful to you!


function getContentType(filename) {
  const extension = filename.match(/.*\.([^\.]*)$/)[1];
 return extension === 'html' ?  'text/html' :  extension === 'css' ? 'text/css' : extension === 'jpeg' ? 'image/jpeg' 
 : extension === 'jpg' ? 'image/jpeg' : 'text/plain';
 
};

console.log(getContentType('lena.jpg'));

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

 