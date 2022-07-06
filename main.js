const products = getAvailableProducts();
const productsUl = document.querySelector("section.products ul");
let filteredProducts = products;
//to set defaultvalues
const defaultFilter = {
  initialLetter: "",
  maxPrice: 200000000,
  maxRating: 100,
};

let filter = {
  initialLetter: "",
  maxPrice: 200000000,
  maxRating: 100,
};

function getFilteredProducts(filter, products) {
  const filteredProd = products.filter(
    (product) =>
      product.name.toLowerCase().startsWith(filter.initialLetter) &&
      product.price <= filter.maxPrice &&
      product.rating < filter.maxRating
  );
  console.log(JSON.stringify(filteredProd));
  return filteredProd;
}

function renderProducts(products) {
  products.forEach((product) => {
    const li = document.createElement("li");
    let shipsToHTML = "";
    // product.shipsTo.forEach(
    //   (country) => (shipsToHTML += `<li>${country}</li>`)
    // );
    li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
    productsUl.appendChild(li);
  });
}
//To render products with initial
window.addEventListener("load", (event) => {
  renderProducts(filteredProducts);
});

//To filter product based on product name
document
  .getElementById("productSelectionInputId")
  .addEventListener("input", myFunctionForProductName);

function myFunctionForProductName() {
  let inputValue = document.getElementById("productSelectionInputId").value;
  if (inputValue.length > 0) {
    productsUl.innerHTML = "";
    filter.initialLetter = inputValue.toLowerCase();
    const filteredProducts = getFilteredProducts(filter, products);
    renderProducts(filteredProducts);
  } else {
    filter.initialLetter = defaultFilter.initialLetter;
    productsUl.innerHTML = "";
    const filteredProducts = getFilteredProducts(filter, products);
    renderProducts(filteredProducts);
  }
}

// To filter products by setting a maximum price limit
document
  .getElementById("maximumPriceLimitId")
  .addEventListener("input", myFunctionForPriceLimit);

function myFunctionForPriceLimit() {
  let inputPriceValue = document.getElementById("maximumPriceLimitId").value;
  if (inputPriceValue > 0) {
    productsUl.innerHTML = "";
    filter.maxPrice = inputPriceValue;
    const filteredProducts = getFilteredProducts(filter, products);
    renderProducts(filteredProducts);
  } else {
    filter.maxPrice = defaultFilter.maxPrice;
    productsUl.innerHTML = "";
    const filteredProducts = getFilteredProducts(filter, products);
    renderProducts(filteredProducts);
  }
}
//To filter product based on maximum rating
document
  .getElementById("start")
  .addEventListener("input", myFunctionForProductRating);

function myFunctionForProductRating() {
  let inputRatingValue = document.getElementById("start").value;
  if (inputRatingValue > 0) {
    productsUl.innerHTML = "";
    filter.maxRating = inputRatingValue;
    const filteredProducts = getFilteredProducts(filter, products);
    renderProducts(filteredProducts);
  } else {
    filter.maxRating = defaultFilter.maxRating;
    productsUl.innerHTML = "";
    const filteredProducts = getFilteredProducts(filter, products);
    renderProducts(filteredProducts);
  }
}
