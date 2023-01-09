const axios = require('axios')
const argv = process.argv
const fs = require('fs')

const cat = async (path, arg) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err){
            console.log('Error', err);
            process.exit(2);
        }
        else {
            if (arg == path) {
                console.log(data)
                process.exit(0)
            }
            else {
                console.log('No such file or directory')
                process.exit(2)
            }
        }
    })
}

const webCat = async (url) => {
    res = await axios(url)
        fs.readFile(res.data, 'utf-8', (err,data)=>{
            if (err){
                console.log('Error', err)
                process.exit(1)
            }
            else {
                console.log(data)
                process.exit(0)
            }
        })
}

const webCatWrite = async (path, filename) => {
    data = await cat(filename, argv[4])
    fs.writeFile(path, data, 'utf8', (err) => {
        if (err) {
            console.log('Error', err)
            process.exit(1)
        }
        else {
            console.log('Successfully wrote to file!')
            process.exit(0)
        }
    })
}

const readOrWrite = (arg) => {
    if (arg === '--out') {
        webCatWrite(argv[3], argv[4])
    }
    else if (arg.includes('http')){
        webCat(arg)
    }
    else {
        cat(arg, arg)
    }
}

readOrWrite(argv[2])