const request = require('postman-request')

const baseURL = 'https://puerto-paraiso-api-v-1.herokuapp.com/'


const getAllPosadas = (callback) => {
    request(`${baseURL}/posadas`, (err,res) => {
        if(err) return callback(err, undefined)
        const allPosadas = JSON.parse(res.body)
        return callback(undefined, allPosadas)
    })
}

const getSiglePosada = (callback) => {
    request(`${baseURL}/posada/id`, (err,res) => {
        if(err) return callback(err, undefined)
        const singlePosada = JSON.parse(res.body)
        return callback(undefined, singlePosada)
    })
}

module.exports = { getAllPosadas, getSiglePosada}
