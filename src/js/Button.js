export default class Button {
  constructor() {

  }

  drawUI() {
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    const buttonItem = document.createElement('button');
    buttonItem.classList.add('add-ticket-button');
    buttonItem.innerText = 'Добавить тикет';
    buttonContainer.appendChild(buttonItem);

    return buttonContainer;
  }

}
