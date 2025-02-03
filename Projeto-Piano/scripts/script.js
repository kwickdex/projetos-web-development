pianoNotes = document.querySelectorAll(".piano-keys");

function handleMouseDown(key) {
    if (key.className.includes('black-note')){
        key.style.background = '#C8D9E0';
    } else {
        key.style.background = '#ddd';
    }
}

function handleMouseUp(key){
    if (key.className.includes('black-note')){
        key.style.background = '#000000';
    } else {
        key.style.background = '#FFFFFF';
    }
}

 async function playNote(key){
    const audio = await new Audio(`../notes/${key}.wav`);
    audio.play();
}

pianoNotes.forEach(element => {
    element.addEventListener("click", () => {
        promise = new Promise((resolve, reject) =>{
            resolve(playNote(element.getAttribute('data-key')));
            reject('Tá errado!');

        })
        
    })
    element.addEventListener("mousedown", () => {
        handleMouseDown(element)
    })
    element.addEventListener("mouseup", () => {
        handleMouseUp(element);
    })
});
