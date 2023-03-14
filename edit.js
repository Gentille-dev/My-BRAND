
//function getBlogs(blogs) {

let form = document.getElementById("blog-table")
console.log("blog")



const title = document.getElementById("title")
const description = document.getElementById("description")
const author = document.getElementById("author")
const imageUrl= document.getElementById("imageUrl")
let button = document.get

let paramsId = new URLSearchParams(window.location.search);
let _id = paramsId.get("id");

console.log(_id)
fetch(`http://127.0.0.1:4000/api/v1/blogs/${_id}`)

   .then(response => response.json())
   .then((resp) =>{
        console.log(resp)
        title.value = resp.data.title
        description.value = resp.data.description
        author.value = resp.data.author
        imageUrl.value = ""
   }
    )
        .catch((error) => alert(error))


        async function updateBlog(blogId, data) {
            const response = await fetch(`http://127.0.0.1:4000/api/v1/blogs/${blogId}`, {
                method: "PUT", // or "PATCH"
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })




// fetch('http://127.0.0.1:4000/api/v1/blogs')
//     .then((response) => response.json())
//     .then((blogs) => {

//         console.log(blogs)
//         blogs.data.forEach(blog => {

//             const row = document.createElement("tr")
//             const titleCell = document.createElement("td")
//             const descriptionCell = document.createElement("td")
//             const authorCell = document.createElement("td")
//             const imageUrlCell = document.createElement("td")
//             const actionsCell = document.createElement("td")

//             const updateButton = document.createElement("button")

//             // assign values to the cells

//             titleCell.textContent = blog.title;
//             descriptionCell.textContent = blog.description;
//             authorCell.textContent = blog.author;
//             imageUrlCell.textContent = blog.imageUrl;
//             updateButton.textContent = "update"


//             actionsCell.appendChild(updateButton)

//             //append rows

//             row.appendChild(titleCell)
//             row.appendChild(descriptionCell)
//             row.appendChild(authorCell)
//             row.appendChild(imageUrlCell)
//             row.appendChild(actionsCell)

//             // append table body

//             form.querySelector("tbody").appendChild(row)

//             updateButton.addEventListener("click", () => {
//                 updateBlog(blog._id)
//             })

//         })
//     })
//     .catch(err => alert(err))

// async function updateBlog(blogId) 


 








