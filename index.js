const divImgProjetos = document.querySelectorAll(".div-img-card");
const divDescricaoProjetos = document.querySelectorAll(".div-descricao-projeto");
const divHabilidadeProjetos = document.querySelectorAll(".div-icones-habilidades-card");
const divProjetos = document.querySelectorAll(".div-projeto-1");


divImgProjetos.forEach((divImgProjeto, index) => {
  divImgProjeto.addEventListener('click', () => {
    divDescricaoProjetos[index].classList.toggle("aumentarDivDescricao");
    divHabilidadeProjetos[index].classList.toggle("aumentarDivHabilidade");
    divProjetos[index].classList.toggle("aumentarDivProjeto");
  });
});
