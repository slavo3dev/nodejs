let userName = {
    firstName: "slavo",
    lastName: "popovic",
    addresses: {
        mainAddress: {
            city: "Miami",
            zipCode: 33132,
            coordinates: {
                latitude: "25.7617 N",
                longitude: "80.1918 W",
                detail: {
                    mapZoomLevel: 10,
                    nearby: {
                        landmark: "Freedom Tower",
                        distance: "1km",
                        additionalInfo: {
                            visitHours: "9am - 5pm",
                            ticketPrice: "$10",
                            history: {
                                established: "1925",
                                architect: "Schultze and Weaver",
                                significance: "Miami's historical landmark"
                            }
                        }
                    }
                }
            }
        },
        secAddress: {
            city: "NYC",
            zipCode: 11000,
            coordinates: {
                latitude: "40.7128 N",
                longitude: "74.0060 W",
                detail: {
                    mapZoomLevel: 12,
                    nearby: {
                        landmark: "Central Park",
                        distance: "2km",
                        additionalInfo: {
                            visitHours: "6am - 1am",
                            ticketPrice: "Free",
                            history: {
                                established: "1857",
                                designer: "Frederick Law Olmsted and Calvert Vaux",
                                significance: "Most visited urban park in the USA"
                            }
                        }
                    }
                }
            }
        }
    },
    age: 42, 
    hobbies: ["soccer","basketball"], 
    flag: true
};

// Iterating over the userName object
for (let key in userName) {
    // Check if the property is an array
    if (Array.isArray(userName[key])) {
        console.log(key, " : ", "array");
    } else if (typeof userName[key] !== "object") {
        // Non-object and non-array properties
        console.log(key, " : ", false);
    } else {
        // Properties that are objects
        console.log(key, " : ", true);
        for (let innerKey in userName[key]) {
            if (typeof userName[key][innerKey] !== "object" || Array.isArray(userName[key][innerKey])) {
                // Directly checking for arrays at the second level, to print "array"
                console.log(innerKey, " : ", Array.isArray(userName[key][innerKey]) ? "array" : false);
            } else {
                // Nested objects
                console.log(innerKey, " : ", true);
                for (let deeperKey in userName[key][innerKey]) {
                    if (typeof userName[key][innerKey][deeperKey] !== "object" || Array.isArray(userName[key][innerKey][deeperKey])) {
                        console.log(deeperKey, " : ", Array.isArray(userName[key][innerKey][deeperKey]) ? "array" : false);
                    } else {
                        console.log(deeperKey, " : ", true);
                        for (let deepestKey in userName[key][innerKey][deeperKey]) {
                            if (typeof userName[key][innerKey][deeperKey][deepestKey] !== "object" || Array.isArray(userName[key][innerKey][deeperKey][deepestKey])) {
                                console.log(deepestKey, " : ", Array.isArray(userName[key][innerKey][deeperKey][deepestKey]) ? "array" : false);
                            } else {
                                console.log(deepestKey, " : ", true);
                                // If there were more depths, you'd continue nesting loops here.
                            }
                        }
                    }
                }
            }
        }
    }
}



for (let i = 1; i <= 10; i++) {
    let row = ""; // Start with an empty string for each row
    for (let j = 1; j <= 10; j++) {
        row += i * j + "\t"; // Concatenate each product to the row string, separated by a tab
    }
    console.log(row); // Print the row to the console
}