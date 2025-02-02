
const albuns = [
    weAreNotYourKind = {
        nome: "We are not your Kind",
        url: "url('./assets/albuns/wnyk-slipknot.jpg')",
        artistas: "Slipknot",
    },
    allHopeIsGone = {
        nome: "All Hope is Gone",
        url: "url('./assets/albuns/ahig-slipknot.jpg",
        artistas: "Slipknot",
    },
    slipknot = {
        nome: "Slipknot",
        url: "url('./assets/albuns/slipknot-slipknot.jpg')",
        artistas: "Slipknot",
    },
    iowa = {
        nome: "Iowa",
        url: "url('./assets/albuns/iowa-slipknot.jpg')",
        artistas: "Slipknot",
    },
    grayChapter = {
        nome: "The Gray Chapter",
        url: "url('./assets/albuns/tgc-slipknot.jpg')",
        artistas: "Slipknot",
    },
    subliminalVerses = {
        nome: "Subliminal Verses",
        url: "url('./assets/albuns/subliminal-verses-slipknot.jpg')",
        artistas: "Slipknot",
    },
    mateFeed = {
        nome: "Mate. Feed. [...]",
        url: "url('./assets/albuns/mfkr-slipknot.jpg')",
        artistas: "Slipknot",
    },

]

listaIconAlbum = document.querySelectorAll("#container-direito-albuns il div")
listaNomeAlbum = document.querySelectorAll("#container-direito-albuns il h2");
listaArtistasAlbum = document.querySelectorAll("#container-direito-albuns il p");

for(let i = 0; i < albuns.length; i++){
    listaIconAlbum[i].style.backgroundImage = albuns[i].url;
    listaNomeAlbum[i].innerHTML = albuns[i].nome;
    listaArtistasAlbum[i].innerHTML = albuns[i].artistas;
}
