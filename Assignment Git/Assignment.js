//Given a string variable, perform the following operations
//1)Concatenate it with another string

let String1 = "Hello,Namo!";
let String2 ="How are you?";
let ConcatenateString = String1+String2;
console.log("Concatenate String",ConcatenateString);

//2)Extract a substring from a specific index to another.

let Index1 = 6;
let Index2 = 12;
let Extractsubstring = String1.substring(Index1,Index2);
console.log("Extract String",Extractsubstring);

//3)Convert to uppercase

let upperCaseString = String1.toUpperCase();
console.log("Uppercase String:", upperCaseString);