const productsAPI = [
  {
    id: 1,
    name: "Best Truewireless Headphones",
    price: "Grap Now",
    img: "images/product1.png",
  },
  {
    id: 2,
    name: "FastTrack smartwatches",
    price: "From ₹1,399",
    img: "images/product2.webp",
  },
  {
    id: 3,
    name: "viewSonic monitors",
    price: "From ₹8000",
    img: "images/product3.webp",
  },
  {
    id: 4,
    name: "FastTrack smartwatches",
    price: "From ₹1,399",
    img: "images/product4.webp",
  },
  {
    id: 5,
    name: "Best Truewireless Headphones",
    price: "Grap Now",
    img: "images/product5.webp",
  },
  {
    id: 6,
    name: "FastTrack smartwatches",
    price: "From ₹1,399",
    img: "images/product6.webp",
  },
  {
    id: 7,
    name: "viewSonic monitors",
    price: "From ₹8000",
    img: "images/product1.png",
  },
  {
    id: 8,
    name: "FastTrack smartwatches",
    price: "From ₹1,399",
    img: "images/product2.webp",
  },
];

// document.addEventListener('DOMContentLoaded', function () {
let productsHolder = document.getElementById("productsHolder");

function Product(button) {
  const productId = button.dataset.productId;
  const selectedProduct = productsAPI.find(
    (product) => product.id == productId
  );

  if (selectedProduct) {
    let Product = JSON.parse(localStorage.getItem("Product")) || [];
    localStorage.setItem("product", JSON.stringify(Product));
  }
}

productsAPI.forEach((product) => {
  const productDiv = document.createElement("div");

  productDiv.innerHTML = `
        <div class="productInfo">
            <div class="prodImg">
                  <img src="${product.img}" alt="${product.name}">
            </div>
            <div class="prodinfo">
                <p>${product.name}</p>
                <h5>${product.price}</h5>
            </div>
            <div class="ProdMore"><i class="fa-solid fa-angle-right"></i></div>
        </div>
    `;

  productsHolder.appendChild(productDiv);
});
