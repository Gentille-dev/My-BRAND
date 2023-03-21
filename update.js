//function getBlogs(blogs) {

let form = document.getElementById("blog-table")
console.log("blog")
// blogTable.addEventListener("submit", (event) => {
//     event.preventDefault();

// interacting with our getblogs endpoint

fetch('https://stormy-wig-moth.cyclic.app/api/v1/blogs')
    .then((response) => response.json())
    .then((blogs) => {

     
        blogs.data.forEach((blog, index) => {
            console.log(index)
            console.log(blogs.data[index])

            const row = document.createElement("tr")
            const titleCell = document.createElement("td")
            const descriptionCell = document.createElement("td")
            const authorCell = document.createElement("td")
            const imageUrlCell = document.createElement("td")
            const actionsCell = document.createElement("td")

            const updateButton = document.createElement("button")

            const saveButton = document.createElement("button")
            const cancelButton = document.createElement("button")

            // set the initial values of the inputs
            titleCell.value = blog.title
            descriptionCell.value = blog.description
            authorCell.value = blog.author
            imageUrlCell.value = blog.imageUrl

            //form.textContent = "Edit"
            updateButton.setAttribute("id", blogs.data[index]._id)
            updateButton.textContent = "Edit"
            titleCell.textContent =blogs.data[index].title
            descriptionCell.textContent = blogs.data[index].description
            authorCell.textContent= blogs.data[index].author
            imageUrlCell.textContent= blogs.data[index].imageUrl


            actionsCell.appendChild(updateButton)

            


            // add the form elements to the form
            row.appendChild(titleCell)
            row.appendChild(descriptionCell)
            row.appendChild(authorCell)
            row.appendChild(imageUrlCell)
            row.appendChild(actionsCell)

            //form.appendChild(saveButton)
            //form.appendChild(cancelButton)

            // append table body

            form.querySelector("tbody").appendChild(row)

            
            updateButton.addEventListener("click", () => {
               
               let id = updateButton.getAttribute("id") 
               location.href = `https://stormy-wig-moth.cyclic.app/edit.html?id=${id}`
                updateBlog(blog._id)
                
            })

            // add event listeners to the buttons
            saveButton.textContent = "Save"
            saveButton.addEventListener("click", (event) => {
                event.preventDefault()
                updateBlog(blog._id, {
                    title: titleCell.value,
                    description: descriptionCell.value,
                    author: authorCell.value,
                    imageUrl: imageUrlCell.value,
                })
            })
        })
        // .catch(err => alert(err))

        // send a PUT or PATCH request to the server to update the blog post
        async function updateBlog(blogId, data) {
            const response = await fetch(`https://stormy-wig-moth.cyclic.app/api/v1/blogs/${blogId}`, {
                method: "PUT", // or "PATCH"
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            if (!response.ok) {
                throw new Error(`Failed to update the blog: ${response.status}`)
            }
            else{
                // .then(() => {
                    Promise.all(b)
                    alert("Blog updated successfully")
                    console.log(data)
                    // close the modal or navigate back to the blog post list page
                // })
                .catch((error) => {
                    alert(`Failed to update the blog: ${error.message}`)
                })
            }
            return response.json()
        }
      
        })

        // cancelButton.textContent = "Cancel"
        // cancelButton.addEventListener("click", (event) => {
        //     event.preventDefault()
        //     // close the modal or navigate back to the blog post list page
        // })

        // display the form in a modal window or a new page
        // ..
    
  
