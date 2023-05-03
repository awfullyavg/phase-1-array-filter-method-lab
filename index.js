// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

const drivers1 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(drivers, string) {
    return drivers.filter(driver => {
        return driver.toLowerCase() === string.toLowerCase()
    })
}


function fuzzyMatch(drivers, string){
    return drivers.filter(char =>{
        return char.charAt() === string.charAt()
    })
}


function matchName(drivers, string){
    return drivers.filter(obj => {
        return obj.name === string
    })
}