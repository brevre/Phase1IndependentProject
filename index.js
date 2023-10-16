const btnEl = document.getElementById("btn")
 const jokeEl =document.getElementById("joke")
 // Get the like button element
const likeBtn = document.getElementById('likeBtn');


// Initialize the like count
let likeCount = 0;

// Function to handle the like button click
likeBtn.addEventListener('click', function () {
    // Increment the like count
    likeCount++;
    
    // Update the like button text to show the number of likes
    likeBtn.textContent = `Like (${likeCount})`;
});


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
