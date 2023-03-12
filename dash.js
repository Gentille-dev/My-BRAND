const blogTable = document.getElementById("blog-table")

// interacting with our getblogs endpoint

fetch('http://127.0.0.1:4000/api/v1/blogs')
.then((response) => response.json())
.then((blogs) => {
    console.log(blogs)
    blogs.data.forEach(blog => {

        const row = document.createElement("tr")
        const titleCell = document.createElement("td")
        const descriptionCell = document.createElement("td")
        const authorCell = document.createElement("td")
        const imageUrlCell = document.createElement("td")
        const actionsCell = document.createElement("td")



        const deleteButton = document.createElement("button")

        // assign values to the cells

        titleCell.textContent = blog.title;
        descriptionCell.textContent = blog.description;
        authorCell.textContent = blog.author;
        imageUrlCell.textContent = blog.imageUrl;
        deleteButton.textContent = "Remove"


        actionsCell.appendChild(deleteButton)

        //append rows

       row.appendChild(titleCell) 
       row.appendChild(descriptionCell)
       row.appendChild(authorCell)
       row.appendChild(imageUrlCell)
       row.appendChild(actionsCell)

       // append table body

       blogTable.querySelector("tbody"). 
       appendChild(row)

       deleteButton.addEventListener("click"), ()=> {
        deteleBlog(blog._id)
       }
    
    })
})
.catch(err => alert(err))

function deteleBlog(blogId){
    fetch('http://127.0.0.1:4000/api/v1/blogs', 
    {
        method: "DELETE"
    })
    .then ((response) => response.json())
    .then((data) => {

        //fuctionalities of deleting

    })
}