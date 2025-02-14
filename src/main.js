document.addEventListener("DOMContentLoaded", () => {
  // pegando os buttons com o data pre-definido
  const buttons = document.querySelectorAll("[data-tab-button]");
  const questions = document.querySelectorAll("[data-faq-question]");

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

  // evento de clique nas questions da faq
  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", abreOuFecharesposta);
  }
});

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
