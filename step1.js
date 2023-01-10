const fs = require('fs')
const argv = process.argv

const cat = (path) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err){
            console.log('Error', err);
            process.exit(2);
        }
        else {
            console.log(data)
        }
    })
}

cat(argv[2])