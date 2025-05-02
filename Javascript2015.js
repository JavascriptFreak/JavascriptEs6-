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
    console.log(x) // ReferenceError, because it doesn't exist yet (no hoisting)
    const x = 20

    if(true)
    {
        x = 30 
        console.log(x) // Error: Assignment to constant variable
    }
 console.log(x)
}
constExample()