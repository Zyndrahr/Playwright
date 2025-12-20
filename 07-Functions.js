
//Named Function
function userProfile (name)

{
 console.log ('Hello,' + name + '!');
}

userProfile ("Lakshmanakumar")


//Arrow Function
let double = (number) => 
    {
      return 2*number
       
    }   
console.log(double(10))

let double2 = (number2) =>  2*number2
console.log(double2(20))


//Anonymous Function
setTimeout (()=>
{
    console.log("This message is delayed by 2 seconds")
},2000)


//Callback Function
function getUserData (callback)
{

    setTimeout (
        ()=> {
          user (callback)
        },3000
    )
}

function user (callback)
{

    console.log ("The User Name is lakshmanakumar")
    console.log ("The User Age is 28")
}

getUserData(user)