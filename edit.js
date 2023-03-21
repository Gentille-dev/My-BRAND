
//function getBlogs(blogs) {

var blogKeyId = sessionStorage.getItem("blogIdKey");
showData(blogKeyId);

function showData(blogKey){
    fetch(`https://stormy-wig-moth.cyclic.app/api/v1/blogs/${blogKey}`)
    .then((response) => response.json())
    .then((blogs)=>{
      

        let titleData=blogs.data.title;
         let descriptionData = blogs.data.description;
        let authorData = blogs.data.author;
        let imageUrlData = blogs.data.imageUrl;
        
    
        title.value=titleData;
        description.value = descriptionData;
        author.value=authorData;
        imageUrl.value = imageUrlData;


        // console.log(titleData);
    });
}

let forms = document.getElementById("create-blog")
console.log("blog")


const title = document.getElementById("title")
const description = document.getElementById("description")
const author = document.getElementById("author")
const imageUrl = document.getElementById("imageUrl")
let button = document.getElementById("create-blog")

forms.addEventListener('submit', e =>{
     e.preventDefault();
   
     makeBlogUpdate();

    //   validateInputs();
    //  //  saveBlogData();
   });

   const makeBlogUpdate = ()=>{
    const titleValue=title.value.trim();
    const descriptionValue=description.value.trim();
    const authorValue= author.value.trim();
    const imageUrlValue=  imageUrl.value.trim();
    
    const data={title:titleValue,description:descriptionValue,author:authorValue,imageUrl:imageUrlValue};
       console.log(data);

       fetch(`https://stormy-wig-moth.cyclic.app/api/v1/blogs/${blogKeyId}`,{

       method:"PUT",
       headers:{
        "Content-Type":"application/json"
       },
       body:JSON.stringify(data)

       })
       .then((response)=>{
         return response.json();
       })
       .then((data)=>{
          alert(data.message);
          window.location = 'dash.html'
       })
       .catch(error =>alert(error))
   }





// let paramsId = new URLSearchParams(window.location.search);
// let _id = paramsId.get("id");

// console.log(_id)
// fetch(`https://stormy-wig-moth.cyclic.app/api/v1/blogs/${_id}`)

//     .then(response => response.json())
//     .then((resp) => {
//         console.log(resp)
//         title.value = resp.data.title
//         description.value = resp.data.description
//         author.value = resp.data.author
//         imageUrl.value = ""
//     }
//     )
//     .catch((error) => alert(error))


// async function updateBlog(blogId, data) {
//     const response = await fetch(`https://stormy-wig-moth.cyclic.app/api/v1/blogs/${blogId}`, {
//         method: "PUT", // or "PATCH"
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//     })


// }

// fetch('https://stormy-wig-moth.cyclic.app/api/v1/blogs')
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






