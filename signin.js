const form = document.getElementById("login-form");

// add event listener to the form

form.addEventListener("submit", (e) => {

    e.preventDefault();

    // grab input valuea

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const data = { email, password }

    console.log(data)

    // use fetch ethod to interact with login API endpoint

    fetch('http://127.0.0.1:4000/api/v1/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    } )

    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        if(data.ok) {
           // console.log(data)

            //set items in local storage

           localStorage.setItem("authToken", data.token)
location.href = ""
           
        }else{ 
           alert(data.message) 
        }
    })
    .catch(err => alert(err))
}); 