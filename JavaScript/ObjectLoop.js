const myObject={
    js:"javascript",
    cpp: "C++",
    php:"PHP"
}
for (const key in myObject) {
    console.log(`${key} shortcut is  for ${myObject[key]}`);
}