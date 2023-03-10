// get all values
let sendBtn = document.getElementById('send');
let resetBtn = document.getElementById('reset');
let form = document.getElementById('form');

// refresh form state
form.addEventListener('submit', (e) => {
    e.preventDefault();
});

//reset button work
resetBtn.addEventListener('click', (e) => {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');


// INTEGRATION PART
 // have value in one object

const data = {name, email, message} ;

fetch('http://localhost:9999/api/v1/message', 
{
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(data)
})
.then((Response) => {
    return Response.JSON()
})

.then((data) => {
    if(data.ok) {
        alert(data.message)
    } else {
        alert(data.errors.name)
    }
})

.catch(error => alert(error))

    // set values
    name.value = '';
    email.value = '';
    message.value = '';

});

// send button work
sendBtn.addEventListener('click', (e) => {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    //setting values in local storage 
    name = name.value;
    localStorage.setItem('name', name);

    email = email.value;
    localStorage.setItem('email', email);

    message = message.value;
    localStorage.setItem('message', message);
});
