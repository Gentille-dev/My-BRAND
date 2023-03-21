let form = document.getElementById("messageTable")
console.log("message")
//add event listener to the form

// form.addEventListener("submit", (event) => {
//     event.preventDefault();


// interacting with our getblogs endpoint

fetch('https://stormy-wig-moth.cyclic.app/api/v1/message')
    .then((response) => response.json())
    .then((message) => {

        console.log(message)
        message.data.forEach(msg => {

            const row = document.createElement("tr")
            const fullnameCell = document.createElement("td")
            const emailCell = document.createElement("td")
            const messageCell = document.createElement("td")
            const actionsCell = document.createElement("td")

            const deleteButton = document.createElement("button")

            // assign values to the cells

            fullnameCell.textContent = msg.fullname;
            emailCell.textContent = msg.email;
            messageCell.textContent = msg.message;
            deleteButton.textContent = "Remove"


            actionsCell.appendChild(deleteButton)

            //append rows

            row.appendChild(fullnameCell)
            row.appendChild(emailCell)
            row.appendChild(messageCell)

            row.appendChild(actionsCell)

            // append table body

            form.querySelector("tbody").appendChild(row)

            deleteButton.addEventListener("click", () => {
                deteleMessages(msg._id)
            })

        })
    })
    .catch(err => alert(err))

async function deteleMessages(messageId) {
    await fetch(`https://stormy-wig-moth.cyclic.app/api/v1/message/${messageId}`,
        {
            method: "DELETE"
        })

    const message = messageId

    Promise.all(message)
        .then(() => {
            alert("comment deleted successfully")
        })

        .catch((error) => alert(error))
    window.location.reload();

}
