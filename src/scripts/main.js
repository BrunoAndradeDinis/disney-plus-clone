document.addEventListener("DOMContentLoaded", () => {
  // pegando os buttons com o data pre-definido
  const buttons = document.querySelectorAll("[data-tab-button]");
  const questions = document.querySelectorAll("[data-faq-question]");
  const heroSection = document.querySelector(".hero");
  const alturaHero = heroSection.clientHeight; // pegando a altura, o posicionamento do hero

  window.addEventListener('scroll', ()=>{
    const posicaoAtual = window.scrollY


    if(posicaoAtual < alturaHero){
      ocultaElementosDoHeader()
    }
    else{
      exibeElementosDoHeader()
    }
  })

  // seção de atrações, lógica das abas
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (button) => {
      const tabTarget = button.target.dataset.tabButton; // pegando o valor do atributo tabButton
      const tab = document.querySelector(`[data-tab-id=${tabTarget}]`);
      hideAllTabs();
      hideAllButtonsActive();
      tab.classList.add("shows__list--is-active");
      button.target.classList.add("shows__tabs__button--is-active");
    });
  }

  // seção faq accordion, evento de clique nas questions da faq
  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", abreOuFecharesposta);
  }
});

function ocultaElementosDoHeader(){
  const header = document.querySelector('header')

  header.classList.add('header--is-hidden')
}

function exibeElementosDoHeader(){
  const header = document.querySelector('header')

  header.classList.remove('header--is-hidden')
}

function abreOuFecharesposta(e) {
  const classe = "faq__questions__item--is-open";
  const elementoPai = e.target.parentElement;

  elementoPai.classList.toggle("faq__questions__item--is-open");
}

function hideAllTabs() {
  // pegando as uls com o data pre-definido
  const tabsContainer = document.querySelectorAll("[data-tab-id]");

  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove("shows__list--is-active");
  }
}

function hideAllButtonsActive() {
  // pegando os botoes com o data pre-definido
  const tabsButtons = document.querySelectorAll("[data-tab-button]");

  for (let i = 0; i < tabsButtons.length; i++) {
    tabsButtons[i].classList.remove("shows__tabs__button--is-active");
  }
}
