let name=document.getElementById("name");
let email=document.getElementById("email");
let mobile=document.getElementById("mobile");
let image=document.getElementById("image");
let about=document.getElementById("about");
function insertData(event)
{
    event.preventDefault();
    const nameKey="User Name";
    const nameValue=name.value;

    const emailKey="User Email";
    const emailValue=email.value;

    const mobileKey="User Mobile";
    const mobileValue=mobile.value;

    const imageKey="User Image";
    const imageValue=image.value;

    const aboutKey="User About";
    const aboutValue=about.value;

    if(nameKey && nameValue)
    {
        localStorage.setItem(nameKey,nameValue);
        localStorage.setItem(emailKey,emailValue);
        localStorage.setItem(mobileKey,mobileValue);
        localStorage.setItem(imageKey,imageValue);
        localStorage.setItem(aboutKey,aboutValue);
        window.location.assign("index1.html");
    }
    else
    {
        alert("Enter the user details");
    }
}
for(let index=0; index<localStorage.length; index++)
{
    const nameValue=localStorage.getItem("User Name");
    const emailValue=localStorage.getItem("User Email");
    const mobileValue=localStorage.getItem("User Mobile");
    const imageValue=localStorage.getItem("User Image");
    const aboutValue=localStorage.getItem("User About");
    console.log(nameValue, emailValue, mobileValue, imageValue, aboutValue);
}