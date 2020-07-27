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
// const profileDataArgs = process.argv.slice(2, process.argv.length);
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


console.log('================');

// profileDataArr.forEach(function (profileItem) {
//     console.log(profileItem);
// });

profileDataArr.forEach(profileItem => console.log(profileItem));

printProfileData(profileDataArr);