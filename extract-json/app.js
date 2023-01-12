const fs = require('fs');
const messagesJson = require('./messages-export.json');

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

function arrOfKeys(obj) {
    return Object.keys(obj)
}

function filterArrOfObj(arr, obj) {
    return arr.map(key => {
        if (obj.hasOwnProperty(key)) {
            let newArr = arrOfKeys(obj[key].users) 
            return newArr
        }
    });
}

fs.readFile('./sempl.json', "utf8", (err, jsonString) => {
  if (err) {
    console.log("Error reading file from disk:", err);
    return;
  }
  try {
    const messagesObj = JSON.parse(jsonString); 
    const arrMessageObjKeys = arrOfKeys(messagesObj)
      
    console.log("Messages:", arrMessageObjKeys);
      console.log(arrMessageObjKeys.map(key => messagesObj.hasOwnProperty(key) ? messagesObj[key].users : "none")) 
      console.log("test: ", flatten(filterArrOfObj(arrMessageObjKeys,messagesObj)))
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});



// fs.readFile('./messages-export.json', "utf8", (err, jsonString) => {
//   if (err) {
//     console.log("Error reading file from disk:", err);
//     return;
//   }
//   try {
//     const message = JSON.parse(jsonString); 
//     console.log("BigMessages:", Object.keys(message));
      
//   } catch (err) {
//     console.log("Error parsing JSON string:", err);
//   }
// });

