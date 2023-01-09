const axios = require('axios')
const fs = require('fs')
const argv = process.argv

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

const cat = async (path) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err){
            console.log('Error', err);
            process.exit(1);
        }
        else {
            if (argv[2] == path) {
                console.log(data)
                process.exit(0)
            }
            else {
                console.log('No such file or directory')
                process.exit(1)
            }
        }
    })
}

const getFileOrUrl = (arg) => {
    if (arg.includes('http')){
        webCat(arg)
    }
    else {
        cat(arg)
    }
}

// getFileOrUrl(argv[2])