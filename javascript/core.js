// API URL -> https://api.adviceslip.com/advice"
// 
async function fetchAdvice() 
{
    fetch("https://api.adviceslip.com/advice")
        .then((response) => 
        {
            if (response.ok) 
            {
                console.log("Response is ok");
                return response.json();
            } 
            else 
            {
                console.log("Something else went wrong...", response);
                showAdvice({id: "E",advice: "Sometimes some things just go wrong..."});
            }
        })

        .then((data) => 
        {
            showAdvice(data["slip"]);
        })

        .catch((error) => 
        {
            console.log("Something went wrong!", error);
            showAdvice({id: "E",advice: "Sometimes some things just go wrong..."});
        })
}

function showAdvice(data) 
{
    // console.log(data);

    let adviceIdElement =       document.getElementById("advice-id");
    let adviceContentElement =  document.getElementById("advice-content");
    let adviceDiceIcon=         document.getElementById("dice-icon");

    adviceIdElement.innerHTML =         data["id"];
    adviceContentElement.innerHTML =    data["advice"];

    let dotCount = (parseInt(data["id"]) % 6) +1;
    adviceDiceIcon.src = "./images/icon-dice-"+dotCount.toString()+".svg"


}