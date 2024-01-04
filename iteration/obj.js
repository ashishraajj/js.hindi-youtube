//WE WILL USE FORIN LOOP FOR ITERATION OF THE OBJECTS
const obj={
    js: "javascrip",
    cpp:"cplusplus",
    py:"python"
}

for (const key in obj) {
   console.log(`${key} shortcut is ${obj[key]}`);
}
