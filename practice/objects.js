let userName = {
    firtsName: "slavo",
    lastName: "popovic",
    addresses: {
        mainAddress: {
             city: "Miami",
            zipCode: 33132
        },
        secAddress: {
            city: "NYC",
            zipCode: 11000
        }
    },
    age: 42, 
    hobbies: ["soccer","basketball"], 
    flag: true
};


// firstName: - 
// lastName: -
// addresses: contain object 

console.log(userName.addresses.mainAddress)
console.log(userName["addresses"]["mainAddress"]["zipCode"])
// console.log(userName["address"]['zipCode'])

userName.firtsName = "Pera";

console.log(userName.firtsName);

// Object