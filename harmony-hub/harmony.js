import { successTemplate } from "./harmony_message.js";

const menuButton = document.querySelector(".menu-button")

function toggleMenu(){
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize(){
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000){
        menu.classList.remove("hide");
    } else{
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);


function submitForm(event) {
    event.preventDefault();
    let userName = document.querySelector("input[name='name']").value;
    let songName = document.querySelector("input[name='song']").value;
    let artistInputs = document.querySelectorAll("input[name= 'artist']");
    let artistName = Array.from(artistInputs).map(input => input.value).join(", ");

    let info = {
      name: userName,
      song: songName,
      artist: artistName,
    };

    let message = successTemplate(info)

    document.getElementById("song-rec").classList.add("hide");
    let summary = document.getElementById("summary");
    summary.classList.remove("hide");
    summary.innerHTML = message;
  }

  document.getElementById("song-rec").addEventListener("submit", submitForm);