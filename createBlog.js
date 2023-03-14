
const form = document.getElementById("create-blog")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    //const tokenValue =localStorage.getItem('token')
    // const token = JSON.parse(tokenValue)
    //console.log()
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
        "Content-Type": "application/json",
       // "Authorization": token
    },
    body: JSON.stringify(data)
    
    })
    .then((response) => {
        return response.json() 
    })

    .then((data) => {
        console.log(data)
        alert("blog created successfully")
    if(data.ok) {
        alert(data.message)
    } else{
        alert(data.error)
    } 
    })
    .catch(error => alert(error))
});

 