'use strict';

const categories = [
  { name: 'Fruits', products: ['Apple', 'Pineapple', 'Banana'] },
  { name: 'Vegetables', products: ['Potato', 'Tomato', 'Cucumber'] },
  { name: 'Berries', products: ['Strawberry', 'Grape', 'Blueberry'] }
];

const productsInfo = {
  'Apple': { name: 'Apple', price: 10, description: 'Sweet and delicious' },
  'Pineapple': { name: 'Pineapple', price: 20, description: 'Tropical delight' },
  'Banana': { name: 'Banana', price: 30, description: 'Rich in potassium' },
  'Potato': { name: 'Potato', price: 40, description: 'Versatile and nutritious' },
  'Tomato': { name: 'Tomato', price: 50, description: 'Juicy and flavorful' },
  'Cucumber': { name: 'Cucumber', price: 60, description: 'Cool and refreshing' },
  'Strawberry': { name: 'Strawberry', price: 70, description: 'Sweet and juicy' },
  'Grape': { name: 'Grape', price: 80, description: 'Perfect snack' },
  'Blueberry': { name: 'Blueberry', price: 90, description: 'Packed with antioxidants' }
};

const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

const categoriesList = document.createElement('ul');
categoriesList.classList.add('categories-list', 'd-flex', 'flex-column', 'p-2', 'rounded');
categoriesList.style.position = 'absolute';
categoriesList.style.top = '0';
categoriesList.style.left = '0';
categoriesList.style.width = ('300px');
container.appendChild(categoriesList);

const productsList = document.createElement('ul');
productsList.classList.add('products-list', 'd-flex', 'flex-column', 'p-2', 'rounded');
productsList.style.position = 'relative';
productsList.style.top = '0';
productsList.style.left = '30%';
productsList .style.width = ('300px');
container.appendChild(productsList);

const productsListInfo = document.createElement('ul');
productsListInfo.classList.add('products-list-info', 'd-flex', 'flex-column', 'p-2', 'rounded');
productsListInfo.style.alignItems = ('center');
productsListInfo.style.position = 'absolute';
productsListInfo.style.top = '0';
productsListInfo.style.left = '70%';
productsListInfo .style.width = ('300px');
container.appendChild(productsListInfo);

let selectedProduct;

function createCategoryList() {
  categories.forEach(category => {
    const listItem = document.createElement('li');
    listItem.classList.add('btn', 'btn-primary', 'mb-2');
    listItem.textContent = category.name;
    listItem.addEventListener('click', () => showProducts(category.products));
    categoriesList.appendChild(listItem);
  });
}

function showProducts(productArray) {
  clearElement(productsList);

  productArray.forEach(productName => {
    const product = productsInfo[productName];
    const listItem = document.createElement('li');
    listItem.classList.add('btn', 'btn-primary', 'mb-2');
    listItem.textContent = `${product.name}`;
    listItem.addEventListener('click', () => showProductInfo(product));
    productsList.appendChild(listItem);
  });
}

function showProductInfo(product) {
  clearElement(productsListInfo);

  selectedProduct = product;

  const productInfoButton = document.createElement('button');
  productInfoButton.classList.add('btn', 'btn-info', 'mb-2');
  productInfoButton.textContent = `${product.name} - $${product.price}`;

  const descriptionLabel = document.createElement('p');
  descriptionLabel.textContent = `${product.description}`;

  const buyButton = document.createElement('button');
  buyButton.classList.add('btn', 'btn-primary', 'ml-2', 'mb-2');
  buyButton.textContent = 'Buy';
  buyButton.addEventListener('click', () => buyProduct(selectedProduct));

  productsListInfo.appendChild(productInfoButton);
  productsListInfo.appendChild(descriptionLabel);
  productsListInfo.appendChild(buyButton);
}

function buyProduct(product) {
  Swal.fire({
        title: `Do you want to buy?\n ${product.name},\n Price:$${product.price}`,
        showDenyButton: true,
        confirmButtonText: "Add to cart",
        denyButtonText: `Delete`
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Add to cart!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
  resetView();
  clearElement(productsList);
}

function resetView() {
  clearElement(productsListInfo);
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

createCategoryList();