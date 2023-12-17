'use strict';

function copyStyles(styles) {
  const copiedStyles = Object.assign({}, styles);
  copiedStyles.container = Object.assign({}, styles.container);
  copiedStyles.list = Object.assign({}, styles.list);
  copiedStyles.button = Object.assign({}, styles.button);
  copiedStyles.subul = Object.assign({}, styles.subul);
  copiedStyles.subitemButton = Object.assign({}, styles.subitemButton);
  copiedStyles.productInfo = Object.assign({}, styles.productInfo);
  copiedStyles.buyButton = Object.assign({}, styles.buyButton);
  return copiedStyles;
}

const styles = {
  container: {
    height: '100vh',
  },
  list: {
    listStyle: 'none',
    padding: '0',
  },
  button: {
    width: '200px',
    fontWeight: '600',
    fontSize: '25px',
  },
  subul: {
    display: 'none',
    position: 'absolute',
    left: '25%',
    top: '0',
  },
  subitemButton: {
    width: '200px',
    fontWeight: '600',
    fontSize: '25px',
  },
  productInfo: {
    display: 'none',
    position: 'absolute',
    left: '100%',
    top: '0',
    border: '1px solid black',
    width: '200px',
    height: '100px',
  },
  liitem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buyButton: {
    background: 'blue',
    color: 'white',
  },
};

const copiedStyles = copyStyles(styles);

let currentView = 'categories';

const containerDiv = document.createElement('div');
containerDiv.classList.add('container');
Object.assign(containerDiv.style, copiedStyles.container);
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

function updateView() {
  if (currentView === 'categories') {
    ul.style.display = 'block';
  } else if (currentView === 'productInfo') {
    ul.style.display = 'none';
  }
}

for (let i = 0; i < categories.length; i++) {
  const category = categories[i];

  const li = document.createElement('li');
  li.classList.add('item');
  Object.assign(li.style, copiedStyles.list);

  const button = document.createElement('button');
  button.classList.add(`button`);
  Object.assign(button.style, copiedStyles.button);
  button.textContent = category.name;

  li.appendChild(button);

  const subUl = document.createElement('ul');
  subUl.classList.add('subul');
  Object.assign(subUl.style, copiedStyles.subul);

  for (let j = 0; j < category.values.length; j++) {
    const subLi = document.createElement('li');
    subLi.classList.add('subitem');
    subLi.style.listStyle = 'none';
    subUl.style.display = 'none';
    const subButton = document.createElement('button');
    subButton.classList.add(`button-inner`);
    Object.assign(subButton.style, copiedStyles.subitemButton);
    subButton.textContent = category.values[j];
    subLi.appendChild(subButton);

    const productInfo = productsInfo[category.values[j]];
    const liItem = document.createElement('li');
    liItem.classList.add('item');
    liItem.style.listStyle = 'none';
    Object.assign(liItem.style, copiedStyles.productInfo);
    Object.assign(liItem.style, copiedStyles.list);
    liItem.textContent = `Name: ${productInfo.name}, Price: $${productInfo.price}`;
    subLi.appendChild(liItem);

    const buyButton = document.createElement('button');
    Object.assign(buyButton.style, copiedStyles.buyButton);

      buyButton.textContent = 'Buy';
      buyButton.addEventListener('click', () => {
        alert(`Congratulation!\nYou buy:\n  ${productInfo.name},\n Price: $${productInfo.price}`);
        updateView();
      })

    liItem.appendChild(buyButton)

    subUl.appendChild(subLi);
    subButton.addEventListener('click', function () {
      liItem.style.display = liItem.style.display === 'none' ? Object.assign(liItem.style, copiedStyles.liitem) : 'none';
      if (currentView === 'categories') {
        updateView();
      }
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