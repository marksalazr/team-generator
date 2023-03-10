const createTeam =(team) => {
 const addEmployee =(employee) => {
    return `
    <div class="card-body">
    <h5 class="card-title">${employee.getName()}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${employee.getID()}</li>
    <li class="list-group-item">${employee.getType()}</li>
    <li class="list-group-item">${employee.getEmail()}</li>
  </ul>

</div>
    `;
 };
const html = [];
html.push(team);

};

module.exports = (team) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"/>
    <link rel="stylesheet" href="./styles/reset.css">
    <link rel="stylesheet" href="https://kit.fontawesome.com/ed6f9253d5.css" crossorigin="anonymous">
    <link rel="stylesheet" href="./styles/style.css">
   
    <title>The Team</title>
</head>
<body>
    <H1>THE TEAM</H1>
    <div class="card1" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
      ${createTeam(team)}
        
      </div>
    
</body>
</html>
    ` ;
}