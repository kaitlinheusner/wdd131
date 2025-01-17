const themeSelector = document.querySelector("#theme")

function changeTheme() {

    const currentValue = themeSelector.value;

    if (currentValue == "dark"){
        document.body.classList.add("dark");
        document.querySelector(".logo_img").src = "byui-logo_white.png"
    }else{
        document.body.classList.remove("dark");
        document.querySelector(".logo_img").src = "byui-logo_blue.webp"
    }
}

themeSelector.addEventListener("change", changeTheme)