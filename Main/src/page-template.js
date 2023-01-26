// page-template.js for generating html from a template

const makeTeam = (team)=> {
    const html = []; // array to hold html code
    const genManager = manager => {
        let managerHtml = `
        <div class = "card">
            <div class = "card-header"> ${manager.name} 
            <i class="fas fa-mug-hot"></i>Manager
            </div>
            <ul class="list-group">
                <li class="list-group-item">Id Number: ${manager.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
        `; html.push(managerHtml); // push html related to manager
    }
    const genEngineer = engineer => {
        let engineerHtml = `
        <div class="card">
            <div class="card-header"> ${engineer.name} 
           <i class="fas fa-glasses"></i>Engineer
           </div>
           <ul class="list-group>
                <li class="list-group-item">Id Number: ${engineer.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
                <li class="list-group-item">GitHub Username: <a target="_blank" href="https://github.com/${engineer.githubUsername}">${engineer.githubUsername}</a></li>
            </ul>
        </div>
        `;
        html.push(engineerHtml); //push html related to engineer
    }
    const genIntern = intern => {
        let internHtml = `
        <div class="card">
            <div class="card-header"> ${intern.name} 
            <i class="fas fa-user-graduate"></i>Intern
            </div>
            <ul class="list-group">
                <li class="list-group-item">Id Number: ${intern.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
        `;
    html.push(internHtml); //push html related to intern   
    }
     // loop to cycle thru team by roles to generate appropriate html for each
     for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            generateEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            generateIntern(team[i]);
        }
    }

            // joins above html code
            return html.join('');
}
module.exports = team=> {
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
    <script src="https://kit.fontawesome.com/ffcd14686b.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../dist/style.css" />
    <title>Team Profile Generator</title>
</head>
<body>
    <header>
    <h1> My Team </h1>
    </header>
    <main> ${generateTeam(team)} </main>
</body>
</html>
    `;
}
