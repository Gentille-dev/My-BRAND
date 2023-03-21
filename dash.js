
//function getBlogs(blogs) {

let form = document.getElementById("blog-table")

// blogTable.addEventListener("submit", (event) => {
//     event.preventDefault();

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
            const editButton = document.createElement("button")

            // assign values to the cells

            titleCell.textContent = blog.title;
            descriptionCell.textContent = blog.description;
            authorCell.textContent = blog.author;
            imageUrlCell.textContent = blog.imageUrl;
            deleteButton.textContent = "Remove";
            editButton.textContent = "Edit"


            actionsCell.appendChild(deleteButton)
            actionsCell.appendChild(editButton)

            //append rows

            row.appendChild(titleCell)
            row.appendChild(descriptionCell)
            row.appendChild(authorCell)
            row.appendChild(imageUrlCell)
            row.appendChild(actionsCell)

            // append table body

            form.querySelector("tbody").appendChild(row)

                 deleteButton.addEventListener("click", () => {
                    deteleBlog(blog._id)
                 })

    editButton.addEventListener("click",()=>{
    //   editBlog(blog._id);
      var blogId = blog._id;
      sessionStorage.setItem("blogIdKey", blogId);

       window.location = './edit.html'
   });

        })
    })
    .catch(err => alert(err))

 async function deteleBlog(blogId) {
   await fetch(`http://127.0.0.1:4000/api/v1/blogs/${blogId}`,
        {
            method: "DELETE"
        })
    // console.log(blogId)
    const blog = blogId
        //.then((response) => response.json())
        // .then((response) => {
        //     return response.json
        // })
        // .then((data) => {

        //     //fuctionalities of deleting

        //     alert(data.message)

        // })

        Promise.all(blog)
        .then(() => {
            alert("blog deleted successfully")
        })

        .catch((error) => alert(error))
        window.location.reload();
}

