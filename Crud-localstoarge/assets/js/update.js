let fromId = document.getElementById("userForm");

let fname = document.getElementById("name");
let femail = document.getElementById("email");
let fmobile = document.getElementById("mobile");

   // read ref id from url query
   const query = new Proxy(new URLSearchParams(window.location.search), {
    get : (searchParam,prop) => searchParam.get(prop)
});

console.log('query params =', query.id);


// submit handler
fromId.addEventListener("sunmit", async(event) => {
    event.preventDefault();
    let data = {
        id: Number(query.id),
        name:fname.value,
        email: femail.value,
        mobile: fmobile.value
    };
    console.log('updated user =', data);
    updateData(data);
});

// update logic
const updateData = async (data) => {
    const index = users.findIndex(item => item.id == data.id);
    console.log('index =', index);
    users.splice(index,1,data);
    localStorage.setItem("usersData",JSON.stringify(data));
    alert("User info updated successfullly");
    window.location.href = "/";
};


( function () {

// find single user info
let single = users.find((item) => item.id == query.id);
console.log('single =', single);

fname.value = single.name;
femail.value = single.email;
fmobile.value = single.mobile;

})()
