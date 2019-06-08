const groupAdultsByAgeRange = (grouping) => {

    //returning empty object with empty array
    
    if(grouping.length === 0){ return {}}

    //filtering out individuals younger than 18 years

    const young = function filterYoung (){grouping.filter(people => people.age < 18)
    return young}
    
    //setting-up the needed age-range categories

    const ageRange = {'20 and younger': [],
                  '21-30': [],
                  '31-40': [],
                  '41-50': [],
                  '51 and older' : []
                    }

    //allocating each age to its respective age-range category

    return grouping.reduce((categories, currentindividual) => {

    if (currentindividual.age <= 20){
        categories['20 and younger'].push(currentindividual)
        return categories
    }
    if (currentindividual.age > 20 && currentindividual.age <= 30){
        categories['21-30'].push(currentindividual)
        return categories
    }
    if (currentindividual.age > 30 && currentindividual.age <= 40){
        categories['31-40'].push(currentindividual)
        return categories
    }
    if (currentindividual.age > 40 && currentindividual.age <= 50){
        categories['41-50'].push(currentindividual)
        return categories
    }
    if (currentindividual.age >= 51 ){
        categories['51 and older'].push(currentindividual)
        return categories
    }
        return categories

    },  ageRange) 
    
    } 

    




//exporting the necessary function

module.exports = {groupAdultsByAgeRange}