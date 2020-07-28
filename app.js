const fs = require('fs');
const generatePage = require('./src/page-template.js');
// console.log('Hello Node!');
// console.log(document); //this displays error because document is not defined 

// var message = 'Hello Node!';

// var sum = 5 + 3;

// console.log(message);
// console.log(sum);

// var commandLineArgs = process.argv;
// console.log(commandLineArgs);
// var profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);
const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;
// const name = profileDataArgs[0]; 
// const github = profileDataArgs[1];
// console.log(profileDataArgs);
// const printProfileData = (profileDataArr) => {
//     console.log(profileDataArr);
//   };



// Notice the lack of parentheses around the `profileDataArr` parameter?
// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }
// };


// console.log('================');

// // profileDataArr.forEach(function (profileItem) {
// //     console.log(profileItem);
// // });

// profileDataArr.forEach(profileItem => console.log(profileItem));

// printProfileData(profileDataArr);
// const generatePage = () => 'Name: Carolina, Github: carolinacez';


// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;



// console.log(name, github);
// console.log(generatePage(name, github));
fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });