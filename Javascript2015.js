// varibale declaration

function varExample ()
{
    console.log(x);   //undefined because of hoisting var needs hoisting
    var x = 10;
    console.log (x); // output is 10

    if(true)
    {
        var x = 20 // Same variable, even though it's in a different block
        console.log(x)
    }

    console.log(x) // Output: 20, because var does not have block scope
}

varExample()


function letExample()
{
    // console.log(x); // ReferenceError, because it doesn't exist yet (no hoisting)
    let x = 20;

    if(true)
    {
        let x = 10  // Different variable because it's in a different block
        let y = "you are right in the block scope of if"
        console.log(x,y)
    }
    console.log(x)
    // console.log(y) // ReferenceError, because y is block-scoped
}
letExample()

function constExample()
{
    // console.log(x) // ReferenceError, because it doesn't exist yet (no hoisting)
    const x = 20

    if(true)
    {
        // x = 30 
        console.log(x) // Error: Assignment to constant variable
    }
 console.log(x)
}
constExample()


//Arrow function

function multiplication(number)  //normal function defination
{
    return number*10
}


let multiplicationArrow = number => console.log(number * 10 )//arrrow function no need return statement and one line function


multiplication(50)
multiplicationArrow(50)

//convert the function myJob from ES5 syntax to arrow function syntax.
// function myJob (name, profession) {
//   return `Hi, my name is ${name} and I'm a ${profession}.`
// }

const myJob=(name,profession) => `Hi, my name is ${name} and I'm a ${profession}`
console.log(myJob('aishwarya','developer'))

//object destruction
const person = { name: "Aishwarya", age: 25 };

let firstname =person.name //normal way
console.log(firstname)
const { name,age } = person //destruction
console.log(name)

const {name: firstName } = person //change the name of parameters
const { college = 'HTW'} = person // default value assignment

console.log(person)

const user = {
    id: 1,
    profile: {
      username: "akadam",
      email: "aishwarya@example.com"
    }
  };

const {
     profile: { username ,email } //nested destruction
} = user ;

console.log(username)

let userDetails=({profile:{ username,email} })=>console.log(`my email id is ${email} and username is ${username}`)

userDetails(user)

const {id, ...others} = user //rest operator
console.log(others)