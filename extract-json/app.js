const fs = require('fs');
const messagesJson = require('./messages-export.json');

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

function arrOfKeys(obj) {
    return Object.keys(obj).filter(( element ) => {
       if (element != 'null' && element !== 'undefined' && element !== "") {
          return element;
        }
    })
}


function filterDataToUnreadMessages(arr,obj) {
    let arrEl = [];
    arr.map(key => {
        if (obj.hasOwnProperty(key)) {
            if (obj[key].users) {
               let newArr = arrOfKeys(obj[key].users) 
               newArr.forEach((element) => {
                if (obj[key].users[element].hasUnread === true) {
                     arrEl.push(obj[key]);
                }
            }) 
            }
        }
    });
    return arrEl;
}
// './messages-export.json'
// './sempl.json'
fs.readFile('./messages-export.json', "utf8", (err, jsonString) => {
  if (err) {
    console.log("Error reading file from disk:", err);
    return;
  }
  try {
    const messagesObj = JSON.parse(jsonString); 
    const arrMessageObjKeys = arrOfKeys(messagesObj)
      
    console.log("test: ", filterDataToUnreadMessages(arrMessageObjKeys,messagesObj))
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});
