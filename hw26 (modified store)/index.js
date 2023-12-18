// 'use strict';

// const container = document.createElement('div');
// container.classList.add('container');

// const inner = document.createElement('div');
// inner.classList.add('inner');

// const list = document.createElement('ul');
// list.classList.add('list');

// const item = document.createElement('li');
// item.classList.add('item');

// const button = document.createElement('button');
// button.classList.add(`button`);

// const subUl = document.createElement('ul');
// subUl.classList.add('subul');
// subUl.style.display = 'none';

// const subLi = document.createElement('li');
// subLi.classList.add('subitem');

// const subButton = document.createElement('button');
// subButton.classList.add(`button-inner`);

// const liItem = document.createElement('li');
// liItem.classList.add('item-inner');

// const buyButton = document.createElement('button');
// buyButton.classList.add(`subbutton-inner`);

// liItem.appendChild(buyButton);
// subLi.appendChild(liItem);
// subLi.appendChild(subButton);
// subUl.appendChild(subLi);
// item.appendChild(subUl);
// item.appendChild(button);
// list.appendChild(item);
// inner.appendChild(list);
// container.appendChild(inner);
// document.body.append(container);

// const categories = [
//   { name: 'Fruits', values: ['Apple', 'Pineapple', 'Banana'] },
//   { name: 'Vegetables', values: ['Potato', 'Tomato', 'Cucumber'] },
//   { name: 'Berries', values: ['Strawberry', 'Grape', 'Blueberry'] }
// ];

// const productsInfo = {
//   'Apple': { name: 'Apple', price: 10 },
//   'Pineapple': { name: 'Pineapple', price: 20 },
//   'Banana': { name: 'Banana', price: 30 },
//   'Potato': { name: 'Potato', price: 40 },
//   'Tomato': { name: 'Tomato', price: 50 },
//   'Cucumber': { name: 'Cucumber', price: 60 },
//   'Strawberry': { name: 'Strawberry', price: 70 },
//   'Grape': { name: 'Grape', price: 80 },
//   'Blueberry': { name: 'Blueberry', price: 90 }
// };

// for(let i = 0;i < categories.length;i++) {
//   const category = categories[i];
//   button.textContent = category.name;

//   for(let j = 0; j < category.values.length; j++) {
//     subButton.textContent = category.values[j];

//     const productInfo = productsInfo[category.values[j]];
//     liItem.textContent = `Name: ${productInfo.name}, Price: $${productInfo.price}`;
//     liItem.style.display = 'none';

//     buyButton.textContent = 'Buy';

//     buyButton.addEventListener('click', () => {
//       alert(`Congratulation!\nYou buy:\n  ${productInfo.name},\n Price: $${productInfo.price}`);
//     })
//     button.addEventListener('click', function () {
//       subUl.style.display = subUl.style.display === 'none' ? 'block' : 'none';
//     })
//   }
// }

// 'use strict';

// const container = document.createElement('div');
// container.classList.add('container');

// const inner = document.createElement('div');
// inner.classList.add('inner');

// const list = document.createElement('ul');
// list.classList.add('list');
// list.style.listStyle = 'none';

// const item = document.createElement('li');
// item.classList.add('item');

// const button = document.createElement('button');
// button.classList.add('button');
// button.textContent = 'Choose Category';

// const subUl = document.createElement('ul');
// subUl.classList.add('subul');
// subUl.style.display = 'none';

// const subLi = document.createElement('li');
// subLi.classList.add('subitem');
// // subLi.style.display = 'none';

// const subButton = document.createElement('button');
// subButton.classList.add('button-inner');
// subButton.textContent = 'Choose Product';

// const liItem = document.createElement('li');
// liItem.classList.add('item-inner');
// liItem.style.display = 'none';

// const buyButton = document.createElement('button');
// buyButton.classList.add('subbutton-inner');
// buyButton.textContent = 'Buy';

// liItem.appendChild(buyButton);
// subLi.appendChild(liItem);
// subLi.appendChild(subButton);
// subUl.appendChild(subLi);
// item.appendChild(subUl);
// item.appendChild(button);
// list.appendChild(item);
// inner.appendChild(list);
// container.appendChild(inner);
// document.body.append(container);

// const categories = [
//   { name: 'Fruits', values: ['Apple', 'Pineapple', 'Banana'] },
//   { name: 'Vegetables', values: ['Potato', 'Tomato', 'Cucumber'] },
//   { name: 'Berries', values: ['Strawberry', 'Grape', 'Blueberry'] }
// ];

// const productsInfo = {
//   'Apple': { name: 'Apple', price: 10 },
//   'Pineapple': { name: 'Pineapple', price: 20 },
//   'Banana': { name: 'Banana', price: 30 },
//   'Potato': { name: 'Potato', price: 40 },
//   'Tomato': { name: 'Tomato', price: 50 },
//   'Cucumber': { name: 'Cucumber', price: 60 },
//   'Strawberry': { name: 'Strawberry', price: 70 },
//   'Grape': { name: 'Grape', price: 80 },
//   'Blueberry': { name: 'Blueberry', price: 90 }
// };

// function createCategoryButtons(category) {
//   const buttonsContainer = document.createElement('div');
//   buttonsContainer.classList.add('category-buttons');

//   category.values.forEach(product => {
//     const productButton = document.createElement('button');
//     productButton.classList.add('product-button');
//     productButton.textContent = product;
    
//     productButton.addEventListener('click', () => {
//       const productInfo = productsInfo[product];
//       liItem.textContent = `Name: ${productInfo.name}, Price: $${productInfo.price}`;
//     });

//     button.addEventListener('click', () => {
//       liItem.style.display = liItem.style.display === 'none' ? 'block' : 'none';
//     })
//     buttonsContainer.appendChild(productButton);
//   });

//   return buttonsContainer;
// }

// categories.forEach(category => {
//   const categoryButtons = createCategoryButtons(category);
//   subUl.appendChild(categoryButtons);
// });

// button.addEventListener('click', () => {
//   subUl.style.display = subUl.style.display === 'none' ? 'block' : 'none';
// });