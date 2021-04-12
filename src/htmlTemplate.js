const teamMembers = team => {
    const managerHtml = manager => {
        return `
        <div class="row">
            <div class="col sm-3">
                <div class="card"">
                    <div class="card-body">
                        <h5 class="card-title">"${manager.name}"</h5>
                        <h6 class="card-subtitle mb-2 text-muted">"${manager.title}"</h6>
                        <p class="card-text">Employee Id Number: "${manager.id}"</p>
                        <br><p>Manager's Office Number: "${manager.office}"</p>
                        <a target="_blank" href="#${manager.email}" class="card-link">"${manager.email}"</a>
                    </div>
                </div>
            </div>
        </div>`
    };
    const engineerHtml = engineer => {
        return `
        <div class="row">
            <div class="col sm-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">"${engineer.name}"</h5>
                        <h6 class="card-subtitle mb-2 text-muted">"${engineer.title}"</h6>
                        <p class="card-text">Employee Id Number: "${engineer.id}"</p>
                        <a target="_blank" href="#${engineer.email}" class="card-link">"${engineer.email}"</a>
                        <a target="_blank" href="#${engineer.github}" class="card-link">"${engineer.github}"</a>
                    </div>
                </div>
            </div>
        </div>`
    };
    const internHtml = intern => {
        return `
        <div class="row">
            <div class="col sm-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">"${intern.name}"</h5>
                        <h6 class="card-subtitle mb-2 text-muted">"${intern.title}"</h6>
                        <p class="card-text">Employee Id Number: "${intern.id}"</p>
                        <br><p>Intern's School: "${intern.school}"</p>
                        <a target="_blank" href="#${intern.email}" class="card-link">"${intern.email}"</a>
                    </div>
                </div>
            </div>
        </div>`
    }
}

module.exports = team => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="./dist/style.css" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
            <title>My Staff</title>
        </head>
        <body>
        <h1>My Team</h1>

        ${teamMembers(team)}

            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
            <script src="./index.js"></script>
        </body>
        </html>
    `;
};