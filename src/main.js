// How to write a file using NodeJS?
// this is a internal module.
import { readFileSync, writeFileSync } from "node:fs";

let filePath = "/Users/research/Desktop/output.txt";
let data = `Similar to the above fs.readSync function, 
            this version takes an optional options object. 
            If no options object is specified, it will 
            default with the above values.`;
writeFileSync(filePath, data);
console.log("Write Success!!");
