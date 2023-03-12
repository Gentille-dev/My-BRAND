const messageTable = document.getElementById("messageTable")

// interacting with our getblogs endpoint

fetch('http://127.0.0.1:4000/api/v1/message')
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

       messageTable.querySelector("tbody"). 
       appendChild(row)

       deleteButton.addEventListener("click"), ()=> {
        deteleMessage(msg._id)
       }
    
    })
})
.catch(err => alert(err))

function deteleMessage(messageId){
    fetch('http://127.0.0.1:4000/api/v1/message', 
    {
        method: "DELETE"
    })
    .then ((response) => response.json())
    .then((data) => {

        //fuctionalities of deleting

    })
}