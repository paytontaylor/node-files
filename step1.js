const fs = require('fs')
const argv = process.argv

const cat = (path) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err){
            console.log('ERROR', err);
            process.exit(2);
        }
        else {
            for(let i = 0; i < argv.length; i++){
                if (argv[2] == path) {
                    console.log(data);
                    process.exit(0)
                }
                else {
                    console.log('No such file or directory')
                    process.exit(2)
                }
            }
        }
    })
}

module.exports = {
    cat: cat
}