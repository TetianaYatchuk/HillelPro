'use strict';

const containerDiv = document.createElement('div');
containerDiv.classList.add('container');
const ul = document.createElement('ul');
ul.classList.add('list');

const categories = [
  { name: 'Fruits', values: ['Apple', 'Pineapple', 'Banana'] },
  { name: 'Vegetables', values: ['Potato', 'Tomato', 'Cucumber'] },
  { name: 'Berries', values: ['Strawberry', 'Grape', 'Blueberry'] }
];

const productsInfo = {
  'Apple': { name: 'Apple', price: 10 },
  'Pineapple': { name: 'Pineapple', price: 20 },
  'Banana': { name: 'Banana', price: 30 },
  'Potato': { name: 'Potato', price: 40 },
  'Tomato': { name: 'Tomato', price: 50 },
  'Cucumber': { name: 'Cucumber', price: 60 },
  'Strawberry': { name: 'Strawberry', price: 70 },
  'Grape': { name: 'Grape', price: 80 },
  'Blueberry': { name: 'Blueberry', price: 90 }
};

for (let i = 0; i < categories.length; i++) {
  const category = categories[i];

  const li = document.createElement('li');
  li.classList.add('item');
  li.style.listStyle = 'none';

  const button = document.createElement('button');
  button.classList.add(`button`);
  button.style.width = '200px';
  button.style.fontWeight = '600';
  button.style.fontSize = '25px';
  button.textContent = category.name;

  li.appendChild(button);

  const subUl = document.createElement('ul');
  subUl.classList.add('subul');
  subUl.style.display = 'none';
  subUl.style.position = 'absolute';
  subUl.style.left = '25%';
  subUl.style.top = '0';

  for (let j = 0; j < category.values.length; j++) {
    const subLi = document.createElement('li');
    subLi.classList.add('subitem');
    subLi.style.listStyle = 'none';
    const subButton = document.createElement('button');
    subButton.classList.add(`button-inner`);
    subButton.style.width = '200px';
    subButton.style.fontWeight = '600';
    subButton.style.fontSize = '25px';
    subButton.textContent = category.values[j];
    subLi.appendChild(subButton);

    const productInfo = productsInfo[category.values[j]];
    const liItem = document.createElement('li');
    liItem.classList.add('item');
    liItem.style.listStyle = 'none';
    liItem.style.position = 'absolute';
    liItem.style.left = '100%';
    liItem.style.top = '0';
    liItem.style.border = '1px solid black';
    liItem.style.display = 'flex';
    liItem.style.flexDirection = 'column';
    liItem.style.alignItems = 'center';
    liItem.style.width = '200px';
    liItem.style.height= '100px';
    liItem.textContent = `Name: ${productInfo.name}, Price: $${productInfo.price}`;
    subLi.appendChild(liItem);

    const buyButton = document.createElement('button');
      buyButton.style.background = 'blue';
      buyButton.style.color = 'white';

      buyButton.textContent = 'Buy';
      buyButton.addEventListener('click', () => {
        alert(`Congratulation!\nYou buy:\n  ${productInfo.name},\n Price: $${productInfo.price}`);
        return ul;
      })

    liItem.appendChild(buyButton)

    subUl.appendChild(subLi);
    subButton.addEventListener('click', function () {
      liItem.style.display = liItem.style.display === 'none' ? 'flex' : 'none';
    });
  }

  button.addEventListener('click', function () {
    subUl.style.display = subUl.style.display === 'none' ? 'block' : 'none';
  });

  li.appendChild(subUl);
  ul.appendChild(li);
}

containerDiv.appendChild(ul);
document.body.append(containerDiv);