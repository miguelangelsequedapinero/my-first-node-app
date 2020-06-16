const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'products.sql');

const textFileContent = fs.readFileSync(filePath, 'utf8');

const textAsArray = textFileContent.split('\n');


const printF = textAsArray.forEach((line) => {

                const see = line.replace('insert into products (id, price, name, date) values (', '')
                const seeMore  = see.replace(');','')

                const  textAsArrayValues = seeMore.split(', ')
                console.log(textAsArrayValues[2])
              });
