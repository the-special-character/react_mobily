const firstName = 'Yagnesh';

const lastName = 'Modh';

// const fullName = firstName + '\n' + lastName;

const fullName = `${firstName}
${lastName}`

// Yagnesh's car

// const pos = firstName + '\'s car';

const pos = `${firstName}'s car`

console.log(pos);

console.log(fullName);

const title = "Portfolio"

const html = '<!DOCTYPE html>' +
'\n<html lang="en">' +
'\n<head>' +
    '\n\t<meta charset="UTF-8">' +
    '\n\t<meta http-equiv="X-UA-Compatible" content="IE=edge">' +
    '\n\t<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    '\n\t<title>' + title + '</title>' +
'\n</head>' +
'\n<body>' +
    '\n' +
'\n</body>' +
'\n</html>';

const html5 = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body>
    
</body>
</html>`

console.log(html);

console.log(html5);






