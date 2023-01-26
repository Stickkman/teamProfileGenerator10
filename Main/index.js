// import needed resources
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
// import classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//variables for directory paths 
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');
const generatePage = require('./src/page-template.js'); 

const teamMembers =[]; //array to hold team member data

// start of inquirer prompts, specifically manager type prompts
const promptManager = ()=> { 
    return inquirer.prompt([  
    {
        type: 'input',                                  // type of input
        message: "Please enter Team Manager's name? ",  // prompt message
        name: 'name',                                   // prompt variable name
        validate: (name)=> {                            // validate input
            if (name !=='') { 
                return true;
            } else {
                console.log('Please enter at least one character..'); // catch for wrong input type
                return false; 
            }
        }
    },
    {
        type: 'input',
        message: "Team Manager Employee Id Number? ",
        name: 'idNumber',
        validate: (idNumber)=> { 
            if(idNumber !=='') {
                return true;
            } else { 
                console.log('Please enter at least one NUMBER..');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "Team Manager Email? ",
        name: 'email',
        validate: (email)=> { 
            if(email !=='') {
                return true;
            } else { 
                console.log('No input entered, please try again..');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "Team Manager Office Number? ",
        name: 'officeNumber',
        validate: (officeNumber)=> { 
            if(officeNumber !=='') {
                return true;
            } else { 
                console.log('Please enter at least one NUMBER..');
                return false;
            }
        }
    },
    ]).then(answers => {
        console.log("Testing answers" + answers); //REMOVE THIS LATER
        //instantiate new manager object with required properties from input answers
        const manager = new Manager(answers.name, answers.idNumber, answers.email, answers.officeNumber);
        teamMembers.push(manager);  // push new manager object into teamMembers array
            promptMenu();           // calls promptMenu function to add additional employees or build team now.
    })
    
};
// function for prompts related to additional employees or team build.
const promptMenu = ()=> {
    return inquirer.prompt([
    {
        type: 'list',                                  // list type for selecting from choices array
        message: "What would you like to do next? (use arrow keys)",
        choices: ['Add an Engineer..', 'Add an Intern..', 'Finish building team..'], // array for choices
        name: 'menuChoice',
    }    
        ]).then(whatNext=> {
             switch(whatNext.menuChoice) {      //switch cases for list choices
                case 'Add an Engineer..':
                    promptEngineer();           // call Engineer prompts
                    break;
                case 'Add an Intern..':
                    promptIntern();             // call Intern prompts
                    break;
                default:                        
                    buildTeam();                // default to building team, no case because only option left
             }        
        });
    }; 
// function for adding Engineer to team
const promptEngineer = ()=> {
    return inquirer.prompt([
        {
            type: 'input',                                 
            message: "Please enter Engineer's name? ",  
            name: 'name',                                   
            validate: (name)=> {                            
                if (name !=='') { 
                    return true;
                } else {
                    console.log('Please enter at least one character..'); // catch for wrong input type
                    return false; 
                }
            }
        },
        {
            type: 'input',
            message: "Engineer Employee Id Number? ",
            name: 'idNumber',
            validate: (idNumber)=> { 
                if(idNumber !=='') {
                    return true;
                } else { 
                    console.log('Please enter at least one NUMBER..');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "Engineer Email? ",
            name: 'email',
            validate: (email)=> { 
                if(email !=='') {
                    return true;
                } else { 
                    console.log('No input entered, please try again..');
                    return false;
                }
            }
        },    
        {
            type: 'input',
            message: "Engineer GitHub Username? ",
            name: 'githubUsername',
            validate: (githubUsername)=> { 
                if(githubUsername !=='') {
                    return true;
                } else { 
                    console.log('No input entered, please try again..');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log("Testing answers" + answers); //REMOVE THIS LATER
        //instantiate new engineer object with required properties from input answers
        const engineer = new Engineer(answers.name, answers.idNumber, answers.email, answers.githubUsername);
        teamMembers.push(engineer);  // push new engineer object into teamMembers array
            promptMenu();           // go back to menu
    })
};
// function for adding Intern to team
const promptIntern = ()=> { 
    return inquirer.prompt([  
    {
        type: 'input',                            
        message: "Please enter Intern's name? ",  
        name: 'name',                             
        validate: (name)=> {                      
            if (name !=='') { 
                return true;
            } else {
                console.log('Please enter at least one character..'); // catch for wrong input type
                return false; 
            }
        }
    },
    {
        type: 'input',
        message: "Intern Employee Id Number? ",
        name: 'idNumber',
        validate: (idNumber)=> { 
            if(idNumber !=='') {
                return true;
            } else { 
                console.log('Please enter at least one NUMBER..');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "Intern Email? ",
        name: 'email',
        validate: (email)=> { 
            if(email !=='') {
                return true;
            } else { 
                console.log('No input entered, please try again..');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "Intern School? ",
        name: 'school',
        validate: (school)=> { 
            if(school !=='') {
                return true;
            } else { 
                console.log('No school has been entered, please try again..');
                return false;
            }
        }
    },
]).then(answers => {
    console.log("Testing answers" + answers); //REMOVE THIS LATER
    //instantiate new intern object with required properties from input answers
    const intern = new Intern(answers.name, answers.idNumber, answers.email, answers.school);
    teamMembers.push(engineer);  // push new intern object into teamMembers array
        promptMenu();           // go back to menu
})
};
// function to build team
const buildTeam = ()=> {
    if (!fs.existsSync(DIST_DIR)) { 
     // if 'dist' directory does not exist create it
        fs.mkdirSync(DIST_DIR) 
    }
    //write file instantly to designated path by calling generatePage function and passing teamMembers array of objects
    // fs.writeFileSync(distPath, generatePage(teamMembers), 'utf-8');
}

promptManager(); // call to start prompts, beginning with manager prompts