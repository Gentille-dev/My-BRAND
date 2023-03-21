/* const signUp = e => {
    let fullname = document.getElementById('fullname').value,
       
        email = document.getElementById('email').value,
        pwd = document.getElementById('pwd').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data =>
            data.fname.toLowerCase() == fname.toLowerCase() &&
            data.lname.toLowerCase() == lname.toLowerCase()
        );

    if (!exist) {
        formData.push({ fname, lname, email, pwd });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('fname').focus();
        alert("Account successfully created! Please Sign In");
    }
    else {
        alert("Account exists");
    }
    e.preventDefault();
}

function signIn(e) {
    let email = document.getElementById('email').value, pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    if (!exist) {
        alert("incorrect login credentials");
    }
    else {
        location.href = "/";
    }
    e.preventDefault();
}
*/

//CHANGES



///INTEGRATION PART
const form = document.getElementById("login-form");

// add event listener to the form

form.addEventListener("submit", (e) => {

    e.preventDefault();

    // grab input valuea

    const fullname = document.getElementById("fullname").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    

    const data = { fullname, email, password }
    console.log(data)


// use fetch ethod to interact with signup API endpoint


    fetch('https://stormy-wig-moth.cyclic.app/signup',
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            if (data.ok) {
           console.log(data)

            //set items in local storage

            localStorage.setItem("authToken", data.token)

            location.href = "/signin.html"
            }
            else {
                alert(data.message)
            }
        })
        .catch(error => 
            console.log(error))

        });




