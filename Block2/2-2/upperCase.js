function upperString(str) {
  return new Promise((resolve, reject) => {
    if(str == '') {
      reject('Empty string')
    } else {
      let upperStr = str.toUpperCase();
      resolve(upperStr);
    }
  })
}

upperString('')
.then(result => console.log(result))
.catch(error => console.log(error));