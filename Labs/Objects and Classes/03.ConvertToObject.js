function convertToJSON(jsonString){
    const jsonObj = JSON.parse(jsonString);
    for (const [key,value] of Object.entries(jsonObj)) {
        console.log(`${key}: ${value}`);
    }
}
convertToJSON('{"name": "George", "age": 40, "town": "Sofia"}');