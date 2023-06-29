import Button from "./Button";
import Item from "./Item";
import NewItem from "./NewItem";

export default class Container {
  constructor () {
  };

  createContainer() {
    const container = document.createElement('div');
    container.classList.add('container');
    const widget = document.createElement('div');
    widget.className = 'wrapper';
    const ButtonButton = new Button();
    const newButton = ButtonButton.drawUI();

    const ItemItem = new Item('Поменять краску в принтере, ком. 404');
    const newItem = ItemItem.drawUI();
    widget.appendChild(newButton);
    const listContainer = document.createElement('div');
    listContainer.classList.add('list__container');
    const list = document.createElement('ul');
    list.classList.add('list');
    list.appendChild(newItem);
    listContainer.appendChild(list);
    widget.appendChild(listContainer);
    container.appendChild(widget);

    return container;
  }

  createNewTicket() {
    const newItem = new NewItem();
    newItem.drawUI();
  }
  
//   widget.innerHTML = `
//   <div class="button-container">
//   <button class="add-ticket-button">Добавить тикет</button>
// </div>
// <div class="list__container">
//   <ul class="list">
//     <li class="list__item">
//       <div class="item__container">
//         <div class="leftside">
//           <div class="item__button check-button"></div>
//           <div class="item__todo">Поменять краску в принтере, ком. 404</div>
//         </div>
//         <div class="rightside">
//           <div class="item__date">10.03.19 08:40</div>
//           <div class="item__button change-button"></div>
//           <div class="item__button remove-button"></div>
//         </div>
//       </div>
//     </li>
//     <li class="list__item">
//       <div class="item__container">
//         <div class="leftside">
//           <div class="item__button check-button"></div>
//           <div class="item__todo">Переустановить Windows, ПК-Hall24</div>
//         </div>
//         <div class="rightside">
//           <div class="item__date">15.03.19 12:35</div>
//           <div class="item__button change-button"></div>
//           <div class="item__button remove-button"></div>
//         </div>
//       </div>
//     </li>
//     <li class="list__item">
//       <div class="item__container">
//         <div class="leftside">
//           <div class="item__button check-button checked"></div>
//           <div class="item__todo">Установить обновление KB-XXX</div>
//         </div>
//         <div class="rightside">
//           <div class="item__date">15.03.19 12:40</div>
//           <div class="item__button change-button"></div>
//           <div class="item__button remove-button"></div>
//         </div>
//       </div>
//     </li>
//   </ul>
// </div>
//   `;

  
}
