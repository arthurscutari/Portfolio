const divImgProjetos = document.querySelectorAll(".div-img-card");
const divDescricaoProjetos = document.querySelectorAll(".div-descricao-projeto");
const divHabilidadeProjetos = document.querySelectorAll(".div-icones-habilidades-card");
const divProjetos = document.querySelectorAll(".div-projeto-1");
const sectionProjetos = document.querySelector(".section-projetos");



divImgProjetos.forEach((divImgProjeto, index) => {
  divImgProjeto.addEventListener('click', () => {
    sectionProjetos.classList.add("aumentarSectionProjetos");
    divDescricaoProjetos[index].classList.toggle("aumentarDivDescricao");
    divHabilidadeProjetos[index].classList.toggle("aumentarDivHabilidade");
    divProjetos[index].classList.toggle("aumentarDivProjeto");

  });
});
