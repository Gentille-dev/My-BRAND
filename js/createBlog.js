
const form = document.getElementById("create-blog")

//add event listener to the form

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // grab input values

    const title = document.getElementById("title").value
    const description = document.getElementById("description").value
    const author = document.getElementById("author").value
    const imageUrl = document.getElementById("imageUrl").value

    console.log({
        title,
        description,
        author,
        imageUrl
    })

    // have our value4s in one object

    const data = {title,description,author,imageUrl};


    //interaction with API enndpoint
    fetch('http://127.0.0.1:4000/api/v1/blogs', {

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
    if(data.ok) {
        alert(data.message)
    } else{
        alert(data.error.title)
    } 
    })
    .catch(error => alert(error))
});

 