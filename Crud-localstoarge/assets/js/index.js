let userInfo = document.getElementById("userInfo");

const printData = (users) => {
    users.forEach(item => {
        userInfo.innerHTML += `<tr class ="center">
                                <td> ${item.id} </td>
                                <td> ${item.name} </td>
                                <td> ${item.email} </td>
                                <td> ${item.mobile} </td>
                                <td class="btn-group">
            <a href="update.html?id=${item.id}" class="btn btn-info">Edit</a> 
            <button class="btn btn-danger">Delete</button>
            </td>
        </tr>`;
    });
}

(function () {

    let users = localStorage.getItem("usersData") ? JSON.parse(localStorage.getItem("usersData")) : [];

// let users = JSON.parse(localStorage.getItem("usersData")) || [];

console.log('users =', users);
printData(users);
})()