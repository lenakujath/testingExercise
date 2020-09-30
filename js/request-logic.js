// We at Content Creators know this code is useful for getting the
// extension off of the supplied filename, but we can't figure out the rest of
// the function to use it! We hope this is useful to you!


function getContentType(filename) {
  const extension = filename.match(/.*\.([^\.]*)$/)[1];
 return extension === 'html' ?  'text/html' :  extension === 'css' ? 'text/css' : extension === 'jpeg' ? 'image/jpeg' 
 : extension === 'jpg' ? 'image/jpeg' : 'text/plain';
 
};

console.log(getContentType('lena.jpg'));

