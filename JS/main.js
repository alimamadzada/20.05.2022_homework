let nameIn = document.querySelector(".name");
let middnameIn = document.querySelector(".midname");
let surnameIn = document.querySelector(".surname");
let birthdayIn = document.querySelector(".birthday");
let submitIn = document.querySelector(".submit");
let formContent = document.querySelector(".form-content");
let userInfo = document.querySelector(".userInfo");

document.addEventListener("click", function(e) {
    e.preventDefault();
    if (e.target.hasAttribute("class") && e.target.getAttribute("class").includes("submit")) {
        formContent.classList.add("d-none");
    }
})
document.addEventListener("change", function(e) {
        let getUserInfo = e.target.value;

    })
    // let getUserInfo = userInfo.innerHTML + formContent.value;
    // console.log(userInfo)