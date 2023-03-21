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

    fetch('https://stormy-wig-moth.cyclic.app/api/v1/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            
        },
        body: JSON.stringify(data)
    } )

    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        if(data.message === "logged in successfully") {
           // console.log(data)

            //set items in local storage

           localStorage.setItem("token", data.token)
         location.href ="./createBlog.html"
           
        }else{ 
           alert("ok") 
        }
    })
    .catch(err => alert(err))
}); 