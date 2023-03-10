// validate form input before adding data
function validateForm() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;

    if (name == "") {
        alert("Name is required");
        return false;
    }
    if (age == "") {
        alert("Role is required");
        return false;
    }
    else if (age < 1) {
        alert("age must be a greater than 1");
    }

    if (address == "") {
        alert("address is required");
        return false;
    }
    if (email == "") {
        alert("email is required");
        return false;
    }
    else if (!email.includes("@")) {
        alert("invalid email");
        return false;
    }
    return true;
}

//INTEGRATION PART
fetch('http://localhost:9999/api/v1/blogs')
.then((response) => response.json())
.then((blogs) => {
    console.log(blogs)
    blogs.data.forEach(blog =>{
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        const ageCell = document.createElement("td");
        const addressCell = document.createElement("td");
        const emailCell = document.createElement("td");
        const deleteButton =document. createElement("button")


        //assign values to the cells

        nameCell.textContent =blog.name;
        ageCell.textContent = blog.age;
        addressCell.textContent = blog.address;
        emailCell.textContent = blog.email;
        deleteButton.textContent =  "Remove"

        actionsCell.appendChild(deleteButton)

//append rows
        row.appendChild(nameCell)
        row.appendChild(ageCell)
        row.appendChild(addressCell)
        row.appendChild(emailCell)


        // append table body
blogTable.querySelector("tbody").appendChild(row)

deleteButton.addEventListener("click", () =>{
    deleteBlog(blog._id)
})
    })
})
.catch(err => alert(err))

function deleteBlog(blogId) {
    fetch('http://localhost:9999/api/v1/blogs', 
    {
        method: "DELETE"
    })

    .then((response) => response.json())
    .then((data) => {

    })

}





// function to show data
function showData() {
    var peopleList;
    if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
    }
    else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    var html = "";
    peopleList.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.age + "</td>";
        html += "<td>" + element.address + "</td>";
        html += "<td>" + element.email + "</td>";
        html +=
            '<td><button onclick="deleteData(' +
            index +
            ')" class="bt btn-danger">Delete</button><button onclick = "updateData(' + index + ')" class = "btn btn-warning">Edit</button></td>';
        html += "</tr>";
    });
    document.querySelector("#crudTable tbody").innerHTML =
        html;
}

//loads all data from local storage when page is loaded
document.onload = showData();

//function to add data to local storage
function addData() {
    //if form is validated
    if (validateForm() == true) {
        var name = document.getElementById("name").value;
        var age = document.getElementById("age").value;
        var address = document.getElementById("address").value;
        var email = document.getElementById("email").value;

        var peopleList;
        if (localStorage.getItem("peopleList") == null) {
            peopleList = [];
        }
        else {
            peopleList = JSON.parse(localStorage.getItem("peopleList"));
        }
        peopleList.push({
            name: name,
            age: age,
            address: address,
            email: email,
        });

        localStorage.setItem("peopleList", JSON.stringify
            (peopleList));
        showData();
        document.getElementById("name").value + "";
        document.getElementById("age").value + "";
        document.getElementById("address").value + "";
        document.getElementById("email").value + "";
    }
}

//function to delete data from local storage
function deleteData(index) {
    var peopleList;
    if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
    }
    else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    peopleList.splice(index, 1);
    localStorage.setItem("peopleList", JSON.stringify
        (peopleList));
    showData();
}

//function to edit/update data from local storage
function updateData(index) {
    //hide submit to show update data in local storage
    document.getElementById("Submit").style.display = "none";
    document.getElementById("Update").style.display = "block";
    var peopleList;
    if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
    }
    else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    document.getElementById("name").value = peopleList[index].name;
    document.getElementById("age").value = peopleList[index].age;
    document.getElementById("address").value = peopleList[index].address;
    document.getElementById("email").value = peopleList[index].email;

    document.querySelector("#Update").onclick = function () {
        if (validateForm() == true) {
            peopleList[index].name = document.getElementById("name").value;
            peopleList[index].age = document.getElementById("age").value;
            peopleList[index].address = document.getElementById("address").value;
            peopleList[index].email = document.getElementById("email").value;

            localStorage.setItem("peopleList", JSON.stringify
                (peopleList));
            showData();
            document.getElementById("name").value = "";
            document.getElementById("age").value = "";
            document.getElementById("address").value = "";
            document.getElementById("email").value = "";

            //hide update to show submit data in local storage
            document.getElementById("Submit").style.display = "block";
            document.getElementById("Update").style.display = "none";
        }
    }
}


