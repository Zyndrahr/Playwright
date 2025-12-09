
const browserVersion = "chrome"


//Using var inside the conditional statement
function getBrowserVersionUsingVar()
{
    
    if (browserVersion == "chrome")
    {
        var browserVersion
    }
    console.log ("Browser Version: : "+ browserVersion)
}
//Using let inside the conditional statement
function getBrowserVersionUsingLet()
{
    
    if (browserVersion == "chrome")
    {
        let browserVersion
    }
    console.log ("Browser Version: : "+ browserVersion)
}

getBrowserVersionUsingVar();
getBrowserVersionUsingLet();
