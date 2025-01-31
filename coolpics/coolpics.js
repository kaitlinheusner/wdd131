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

function viewerTemplate(pic,alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`
}

function viewHandler(event){
   const figure = event.target

   const src = img.getAttribute("src");
   const srcParts = src.spplits("-");

   const newSrc = `${srcParts[0]-CSSFontFeatureValuesRule,jpeg}`;
   const viewerHtml = viewerTemplate(newSrc);
  document.body.insertAdjacentHTML("afterbegin", viewerHtml)

  const closeButton = document.querySelector("close-viewer");
  closeButton.addEventListener("click", closseViewer)
}

function closeButton(){
    const viewer = document.querySelector(".viewer")
    viewer.remove()
}

handleResize();
window.addEventListener("resize", handleResize);
gallery = document.getElementById(".gallery")
gallery.addEventListener("click", viewHandler)
