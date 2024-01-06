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
  selectedProduct = product;

  const productInfoButton = document.createElement('button');
  productInfoButton.classList.add('btn', 'btn-info', 'mb-2');
  productInfoButton.textContent = `${product.name} - ${product.price}`;

  const descriptionLabel = document.createElement('p');
  descriptionLabel.textContent = `${product.description}`;

  const buyButton = document.createElement('button');
  buyButton.classList.add('btn', 'btn-primary', 'ml-2', 'mb-2');
  buyButton.textContent = 'Buy';
  buyButton.addEventListener('click', () =>
    buyProduct(product),
    clearElement(productsListInfo));

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
        orderListForm();
      });
  resetView();
  clearElement(productsList);
}

const orderForm = document.createElement('form');
orderForm.classList.add('order-form', 'd-flex', 'flex-column', 'p-5', 'm-5');

function orderListForm(product) {
  clearElement(orderForm);

  const nameLabel = document.createElement('label');
  nameLabel.classList.add('label', 'mb-2');
  nameLabel.textContent = 'Name:';
  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('required', 'true');
  nameLabel.appendChild(nameInput);

  nameLabel.appendChild(nameInput);

  const surNameLabel = document.createElement('label');
  surNameLabel.classList.add('label', 'mb-2');
  surNameLabel.textContent = 'Surname:';
  const surNameInput = document.createElement('input');
  surNameInput.setAttribute('type', 'text');
  surNameInput.setAttribute('required', 'true');

  surNameLabel.appendChild(surNameInput);

  orderForm.appendChild(nameLabel);
  orderForm.appendChild(surNameLabel);

  const cityLabel = document.createElement('label');
  cityLabel.classList.add('label', 'mb-2');
  cityLabel.textContent = 'Choose city:';

  const citySelect = document.createElement('select');
  const cities = ['Odessa', 'Kyiv', 'Kharkiv', 'Lviv'];

  cities.forEach(city => {
    const option = document.createElement('option');
    option.textContent = city;
    citySelect.appendChild(option);
  });
  cityLabel.appendChild(citySelect);
  orderForm.appendChild(cityLabel);

  const postalService = document.createElement('label');
  postalService.classList.add('label', 'mb-2');
  postalService.textContent = 'Choose postal service:';

  const postalSelect = document.createElement('select');
  const postals = ['Nova poshta', 'Ukrposhta'];

  postals.forEach(postal => {
    const option = document.createElement('option');
    option.textContent = postal;
    postalSelect.appendChild(option);
  });
  postalService.appendChild(postalSelect);
  orderForm.appendChild(postalService);

  const postalWarehouse = document.createElement('label');
  postalWarehouse.classList.add('label', 'mb-2');
  postalWarehouse.textContent = 'Choose post office:';

  const warehouse = document.createElement('select');
  const postOffice = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];

  postOffice.forEach(office => {
    const option = document.createElement('option');
    option.textContent = office;

    if (office === '') {
      alert('Enter post office!')
    }

    warehouse.appendChild(option);
  });

  postalWarehouse.appendChild(warehouse);
  orderForm.appendChild(postalWarehouse);

  const paymentLabel = document.createElement('label');
  paymentLabel.classList.add('label', 'mb-2');
  paymentLabel.textContent = 'Payment Method:';
  const paymentSelect = document.createElement('select');
  const paymentMethods = ['Cash on Delivery', 'Credit Card Payment'];

  paymentMethods.forEach(paymentMethod => {
    const option = document.createElement('option');
    option.textContent = paymentMethod;
    paymentSelect.appendChild(option);
  });
  paymentLabel.appendChild(paymentSelect);
  orderForm.appendChild(paymentLabel);

  const quantityLabel = document.createElement('label');
  quantityLabel.classList.add('label', 'mb-2');
  quantityLabel.textContent = 'Quantity:';
  const quantityInput = document.createElement('input');
  quantityInput.setAttribute('type', 'number');
  quantityInput.setAttribute('min', '0');

  quantityLabel.appendChild(quantityInput);
  orderForm.appendChild(quantityLabel);

  const commentLabel = document.createElement('label');
  commentLabel.classList.add('label', 'mb-2');
  commentLabel.textContent = 'Comment:';
  const commentInput = document.createElement('textarea');
  commentLabel.appendChild(commentInput);
  orderForm.appendChild(commentLabel);

  const submitButton = document.createElement('button');
  submitButton.classList.add('btn', 'btn-success', 'mt-2');
  submitButton.textContent = 'Make a purchase';
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const isFormValid = orderForm.checkValidity();

    const quantityInput = document.querySelector('.order-form input[type="number"]');
    const quantityValue = parseInt(quantityInput.value, 10);
    const isQuantityValid = quantityValue > 0;

    if (isFormValid && isQuantityValid) {
      displayOrderDetails();
    } else {
      alert('Please fill in all required fields.');
    }
  });

  function displayOrderDetails() {
    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('order-details', 'd-flex', 'flex-column', 'p-4', 'm-4');
    detailsContainer.textContent = 
    `Product: ${selectedProduct.name}\n` +
    `Price: $${selectedProduct.price}` +
    `Name: ${nameInput.value}\n` +
    `Surname: ${surNameInput.value}\n` +
    `City: ${citySelect.value}\n` +
    `Post Office: ${warehouse.value}\n` +
    `Payment Method: ${paymentSelect.value}\n` +
    `Quantity: ${quantityInput.value}\n` +
    `Comment: ${commentInput.value}`;

  productsListInfo.appendChild(detailsContainer);
  }

  orderForm.appendChild(submitButton);

  clearElement(productsListInfo);

  productsListInfo.appendChild(orderForm);
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