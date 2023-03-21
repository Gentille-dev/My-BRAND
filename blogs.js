//about show new all blog
const blogPlace=document.querySelector('.grid');
let output='';

fetch('http://127.0.0.1:4000/api/v1/blogs')
 
.then((response) => response.json())
.then((blogs)=>{
    blogs.data.forEach(allblog => {
      
       output +=`
       <div class="card">
       <div class="card-img">
           <img src="../../../images/code.jpg" alt="">
       </div>
       <div class="card-body">
           <h2 class="card-title"> ${allblog.title}</h2>
           <p>${allblog.description}</p>
           <p class="card-author">${allblog.author}</p>
           
           <a href="https://en.wikipedia.org/wiki/Psycho_(novel)" class="read-more">Read article</a>
       </div>

       
   </div>

       
       `;
    });
    blogPlace.innerHTML=output;


});




