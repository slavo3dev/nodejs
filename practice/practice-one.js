const records = [
    { id: 1, name: "John", age: 25, occupation: "Developer" },
    { id: 2, name: "Jane", age: 28, occupation: "Designer" },
    { id: 1, name: "John", age: 25, occupation: "Manager" }
];

let merged = {};
for (let i = 0; i < records.length; i++) {
    const record = records[i];
    if (!merged[record.id]) {
        merged[record.id] = { ...record, occupation: [record.occupation] };
    } else {
        merged[record.id].occupation.push(record.occupation);
    }
}

let result = Object.values(merged);
console.log(result);