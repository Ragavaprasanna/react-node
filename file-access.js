const fs = require("fs");
fs.readFile("./cool.txt", "utf-8", function (err, content) {
    console.log(content);
});
const quote = "i am ragavaprasanna";

//fs.writeFile("./ragav.txt", quote, function (err) {
    //console.log("completing writting");
//});

const  quote2 ="\n peaky blinders";

fs.appendFile("./ragav.txt", quote2, function (err) {
    console.log("append the file");
});

fs.unlink("./backups/text1.js", function (err) {
    console.log("remove the file");
});

const htmlData = "hii";

for(let i=0; i<10; i++){
    fs.writeFile(`./backups/text-${i}.txt`, htmlData, function (err) {
    console.log("completing writting",i);
});

}

fs.readdir("./backups", function (err, files) {
    console.log(files);
});
