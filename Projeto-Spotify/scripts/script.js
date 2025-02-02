const artistas = [
    henriqueJuliano = {
        nome: "Henrique e Juliano",
        url: "url('./assets/channels4_profile.jpg')",
        cargo: "Grupo Musical",
    },
    virginGod = {
        nome: "VirginGod",
        url: "url('assets/874886726f3a54c8125a79d4d90e3c65.jpg')",
        cargo: "Cantor",
    },
    
    marina = {
        nome: "MariVomito",
        url: "url('assets/Marina.png')",
        cargo: "Pedagoga",
    },

    enzoFinotti = {
        nome: "Nautinha",
        url: "url('assets/ENzo.png')",
        cargo: "Eu",
    },
    babagogosasa = {
        nome: "BABAGOGOSASA",
        url: "url('assets/BABAGOGOSASA.png')",
        cargo: "Grupo Musical",
    },
    galoPower = {
        nome: "GaloPower",
        url: "url('./assets/GaloPower.png')",
        cargo: "Banda de Rock",
    }
]

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

listaNomeArtista = document.querySelectorAll(".container-direita-artistas-artista h2");
listaIconArtista = document.querySelectorAll(".container-direita-artistas-artista a div");
listaCargoArtista = document.querySelectorAll(".container-direita-artistas-artista p")

listaIconAlbum = document.querySelectorAll("#container-direito-albuns il div")
listaNomeAlbum = document.querySelectorAll("#container-direito-albuns il h2");
listaArtistasAlbum = document.querySelectorAll("#container-direito-albuns il p");


for(let i = 0; i < artistas.length; i++){
    listaNomeArtista[i].innerHTML = artistas[i].nome;
    listaIconArtista[i].style.backgroundImage = artistas[i].url;
    listaCargoArtista[i].innerHTML = artistas[i].cargo;
}

for(let i = 0; i < albuns.length; i++){
    listaIconAlbum[i].style.backgroundImage = albuns[i].url;
    listaNomeAlbum[i].innerHTML = albuns[i].nome;
    listaArtistasAlbum[i].innerHTML = albuns[i].artistas;
}

console.log(listaIconArtista)

const sumButton = document.querySelector('#sum-button');

sumButton.addEventListener(type="click",() => {
    alert('msg');
    return;
});