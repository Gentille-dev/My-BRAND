
// INTEGRATION PART 
// have value in one object


const form = document.getElementById("create-message")

//add event listener to the form

form.addEventListener("submit", (event) => {
    event.preventDefault();


    // grab input values

    const fullname = document.getElementById("fullname").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value
    const sendBtn = document.getElementById('send');
    const resetBtn = document.getElementById('reset');


    console.log({
        fullname,
        email,
        message
    })


    const data = { fullname, email, message };

    //reset button work
    resetBtn.addEventListener('click', (e) => {
        let fullname = document.getElementById('fullname');
        let email = document.getElementById('email');
        let message = document.getElementById('message');
    })

    // send button work
    sendBtn.addEventListener('click', (e) => {
        let name = document.getElementById('name');
        let email = document.getElementById('email');
        let message = document.getElementById('message');


        fetch('http://localhost:4000/api/v1/message',
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
                if (data.ok) {
                    alert(data.message)
                } else {
                    alert(data.error.fullname)
                }
            })
            .catch(error => alert(error))
    });
});