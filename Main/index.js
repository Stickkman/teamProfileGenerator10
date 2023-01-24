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

if (!fs.existsSync(DIST_DIR)) {
     // if 'dist' directory does not exist create it
    fs.mkdirSync(DIST_DIR) 
}
    //write file
fs.writeFileSync(distPath, generatePage(teamMembers), 'utf-8');

