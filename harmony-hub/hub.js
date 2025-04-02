import songs from './songs.mjs'

function getRandomSongs(songList, count = 6) {
    const shuffled = [...songList].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count); 
}

function songTemplate (song){
    return ` <div class="song-gallery">
            <article class="song-card">
                <img class="song-image" src="images/charlesdeluvio-6k4HkET8dPM-unsplash.jpg" alt="Song Player">
                <p>Photo by <a href="https://unsplash.com/@charlesdeluvio?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">charlesdeluvio</a> on <a href="https://unsplash.com/photos/black-remote-control-on-white-textile-6k4HkET8dPM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></p> 
                <div class="song-content">
                    <div class="tag-container">
                       ${tagsTemplate(song.genres)}
                    </div>
                    <div class = "main-text">
                        <p>Song: ${song.name} </p>
                        <p>Artist: ${song.artist}</p>
                        <p>Genre(s): ${song.genres}</p>
                    </div>
                </div>
            </article>
        </div>`
}


function tagsTemplate(genres){
    return genres.map(genre => `<span class="tag">${genre}</span>`).join("");
}


function renderSongs(songList){
    const output = document.querySelector(".song-gallery");
    
    let songsHTML = "";
    for (let i = 0; i < songList.length; i++) {
        songsHTML += songTemplate(songList[i])
    }

    output.innerHTML = songList.map(songTemplate).join(""); 
}

function init() {
    const randomSongs = getRandomSongs(songs, 6);
    renderSongs(randomSongs);
}

init();


function sortFunction (a, b){
    return a.name.localeCompare(b.name);
}

function filter(query) {
    query = query.toLowerCase()
    const filtered = songs.filter(song => 
        song.name.toLowerCase().includes(query) ||
        song.artist.join(' ').toLowerCase().includes(query) || 
        (Array.isArray(song.genres) && song.genres.some(genre => genre.toLowerCase().includes(query)))
    );

    return filtered.sort(sortFunction);
}

function searchHandler(event){
    event.preventDefault();

    let query = document.getElementById("searchform").value.trim().toLowerCase();
    console.log("Search query:", query);
    const filteredSongs = filter(query);
    renderSongs(filteredSongs);
}

document.getElementById("search-button").addEventListener("click", searchHandler);

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
