import userData from "./data.js";


function transformData(data){
    let result = []
    data.forEach((element) => {
        let userDate = new Date(element.dob.date).toDateString()
        
        let user = {
            fullName: `${element.name.first}  ${element.name.last}`,
            birthday: userDate
        }
        result.push(user)
    })
    
    return result
}

console.log(transformData(userData));

/* Totally Private Data Farm 

Good news, renown advertising firm Evil Corp. wants to purchase our 
private user data! 

We'd never do this in real life of course, but just for practice 
let's pretend we're unethical web hackers and transform the data 
in the way Evil Corp. has requested. They're quite particular and
just want an array of users with a fullname and human readable
birthday.   

Write a function that maps through the current data and returns
a new an array of objects with only two properties: 
fullName and birthday. Each result in your 
array should look like this when you're done: 

{
    fullName: "Levent Busser", 
    birthday: "Fri Aug 20 1971"
}

Read about toDateString() for info on formatting a readable date. 

*/

https://scrimba.com/scrim/co9c5489b85dac794867b8b5a