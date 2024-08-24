// Statement is piece of code which expresses an action to be carried out.

// Variable
// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number eg: 1name
// Cannot contain a space or hyphen
// variables are case-sensitive

let name = 'Sohan';
console.log(name);

const interestRate = 0.3;
// interestRate = 1;
console.log(interestRate)

// 'let' is used when the variable may be reassigned
// 'const' is used when the variable value is fixed.

let firstName = 'Sohan'; //String literal
let age = 30; //number literal
let isApproved = true; //boolean literal



const fs = require('fs')

fs.readFile("./example-write.txt","utf8",(err,data) =>{
    if (err){
        throw err;
    }
    console.log(data);
});

fs.writeFile("./example-write.txt","Hello!! This is a tutorial from Airtribe regarding writing to a file using filsesystem module.", (err) => {
    if (err) {
        throw err;
    }
    console.log("file written successfully!")
});

//path module

const path = require("path");

console.log(path.extname("index.html"));

const filepath = path.join("data","text","example.txt");
console.log(filepath)
console.log("end")