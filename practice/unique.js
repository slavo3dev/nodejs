// Write a function removeDuplicates(arr) that removes duplicate values from the array arr.


function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i]; 
        let isDuplicate = false;
        
        for (let j = 0; j < uniqueArr.length; j++) {
            if (element === uniqueArr[j]) {
                isDuplicate = true;
                break;
            }
        }
    
        if(!isDuplicate) {
           uniqueArr.push(element);
        }
    }
    // code here
    return uniqueArr;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Outputs [1, 2, 3, 4, 5]