
function launchBrowser (browserName)
{

    if (browserName == "chrome")
    {
        console.log("It is Chrome Browser")
    }
    else {

        console.log("It is Other Browser")
    }
}

launchBrowser ("IE")

function runTests (testType)
{
 
    switch(testType) 

    {

    case "smoke" : 
    console.log("Smoke Test");
    break;

    case "sanity" : 
    console.log("sanity Test");
    break;

    case "regression" : 
    console.log("regression Test");
    break;

    default :
    console.log("Smoke Test");

    }

}

runTests("FT")

