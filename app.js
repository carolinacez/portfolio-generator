const inquirer = require('inquirer');

inquirer
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username'
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:'
        }
    ]);
};


const promptProject = portfolioData => {
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    console.log(`
  =================
  Add a New Project
  =================
  `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)'
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ])
        .then(projectData => {
            portfolioData.projects.push(projectData);
            if (projectData.confirmAddProject) {
                return promptProject(portfolioData);
            } else {
                return portfolioData;
            }
        });

};
promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });

// promptUser()
//     .then(answers => console.log(answers))
//     .then(promptProject)
//     .then(projectAnswers => console.log(projectAnswers));






// promptUser().then(answers => console.log(answers));
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name?'
//     }
//   ])
//   .then(answers => console.log(answers));










// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

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
// const [name, github] = profileDataArgs;

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

// fs.writeFile('index.html', generatePage(name, github), err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
//   });