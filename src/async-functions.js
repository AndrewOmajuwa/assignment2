//importing superagent module
const superagent = require("superagent")

const getTatooineResidents = () => {
    superagent
    .get('https://swapi.co/api/planets/1/')
    .then(res => res)
    .catch(err => err)

}

const promiseMeAString = () => {

}

module.exports = {getTatooineResidents,
                  promiseMeAString              
                }