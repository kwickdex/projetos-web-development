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

listaNomeArtista = document.querySelectorAll(".container-direita-artistas-artista h2");
listaIconArtista = document.querySelectorAll(".container-direita-artistas-artista a div");
listaCargoArtista = document.querySelectorAll(".container-direita-artistas-artista p")


for(let i = 0; i < artistas.length; i++){
    listaNomeArtista[i].innerHTML = artistas[i].nome;
    listaIconArtista[i].style.backgroundImage = artistas[i].url;
    listaCargoArtista[i].innerHTML = artistas[i].cargo;
}

console.log(listaIconArtista)