// validate form input before adding data
function validateForm() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var address = document.getElementById('address').value;
    var topic = document.getElementById('topic').value;

    if (name == "") {
        alert("Title is required");
        return false;
    }
    if (age == "") {
        alert("Description is required");
        return false;
    }

    if (address == "") {
        alert("Image is required");
        return false;
    }
    if (topic == "") {
        alert("Topic is required");
        return false;
    }

    return true; 
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
        html += "<td>" + element.topic + "</td>";
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
        var topic = document.getElementById("topic").value;

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
            topic: topic,
        });

        localStorage.setItem("peopleList", JSON.stringify
            (peopleList));
        showData();
        document.getElementById("name").value + "";
        document.getElementById("age").value + "";
        document.getElementById("address").value + "";
        document.getElementById("topic").value + "";
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
    document.getElementById("topic").value = peopleList[index].topic;

    document.querySelector("#Update").onclick = function () {
        if (validateForm() == true) {
            peopleList[index].name = document.getElementById("name").value;
            peopleList[index].age = document.getElementById("age").value;
            peopleList[index].address = document.getElementById("address").value;
            peopleList[index].topic = document.getElementById("topic").value;

            localStorage.setItem("peopleList", JSON.stringify
                (peopleList));
            showData();
            document.getElementById("name").value = "";
            document.getElementById("age").value = "";
            document.getElementById("address").value = "";
            document.getElementById("topic").value = "";

            //hide update to show submit data in local storage
            document.getElementById("Submit").style.display = "block";
            document.getElementById("Update").style.display = "none";
        }
    }
}


