
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


    console.log({fullname,email,message})

    const data = { fullname, email, message };


        fetch('https://stormy-wig-moth.cyclic.app/message',
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
