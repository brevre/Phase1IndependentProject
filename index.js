const btnEl = document.getElementById("btn")
 const jokeEl =document.getElementById("joke")

const apikey = "zLjzJgOl6YDECLvq6+PNlQ==E5JA2L8ErKCHjT75";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key":apikey
    },
}
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getjoke(){
    try{
        jokeEl.innerText = "Updating....";
        btnEl.disabled = true;
        btnEl.innerText = "loading...";
        const response =  await fetch(apiURL,options)
        const data =await response.json()
    
        btnEl.disabled = false;
        btnEl.innerText = "TELL ME A JOKE";
    
        jokeEl.innerText = data[0].joke;

    }catch (error) {
        jokeEl.innerText = "An error happened, try again later"
        btnEl.disabled = false;
        btnEl.innerText = "TELL ME A JOKE";

        console.log(error)

    }

   
}

btnEl.addEventListener("click",getjoke);
