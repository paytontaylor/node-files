const { cat } = require('./step1')
const axios = require('axios')
const argv = process.argv

const webCat = async (url) => {
    res = await axios(url)
    for(let i = 0; i < argv.length; i++){
        if (argv[2].includes('https')){
            console.log(res)
            process.exit(0)
        }
        else {
            cat(argv[2])
        }
    }
}

webCat()