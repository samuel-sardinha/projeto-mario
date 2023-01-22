const botaoTrailer = document.querySelector('.botao-trailer');
const fechaModal = document.querySelector(".fechar-modal");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;
const video = document.getElementById("video");

function alternarmodal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarmodal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click",() => {
    alternarmodal();
    video.setAttribute("src", "");
});