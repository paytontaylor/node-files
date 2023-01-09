const fs = require('fs')
const argv = process.argv

const cat = async (path) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err){
            console.log('Error', err);
            process.exit(2);
        }
        else {
            if (argv[2] == path) {
                return data
            }
            else {
                console.log('No such file or directory')
                process.exit(2)
            }
        }
    })
}

// cat(argv[2])
