export default class Item {
  constructor(text) {
    this.text = text;
  }

  drawUI() {
    const listItem = document.createElement('li');
    listItem.className = 'list__item';
    const itemContainer = document.createElement('div');
    itemContainer.className = 'item__container';
    const leftSide = document.createElement('div');
    leftSide.className = 'leftside';
    const rightSide = document.createElement('div');
    rightSide.className = 'rightside';
    const checkButton = document.createElement('div');
    checkButton.classList.add('item__button', 'check-button');
    const todoText = document.createElement('div');
    todoText.classList.add('item__todo');
    todoText.innerText = this.text;
    const changeButton = document.createElement('div');
    changeButton.classList.add('item__button', 'change-button');
    const removeButton = document.createElement('div');
    removeButton.classList.add('item__button', 'remove-button');
    leftSide.appendChild(checkButton);
    leftSide.appendChild(todoText);
    rightSide.appendChild(changeButton);
    rightSide.appendChild(removeButton);
    itemContainer.appendChild(leftSide);
    itemContainer.appendChild(rightSide);
    listItem.appendChild(itemContainer);

    return listItem;
  }
}
