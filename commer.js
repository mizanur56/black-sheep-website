const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});
sr.reveal(".text-details", { delay: 200, origin: "top" });
sr.reveal(".image", { delay: 200, origin: "bottom" });
sr.reveal(".cart", { delay: 200, origin: "right" });
sr.reveal(".detailsTitle", { delay: 200, origin: "top" });
sr.reveal(".collection-info", { delay: 500, origin: "left" });
sr.reveal(".navbar", { delay: 500, origin: "left" });
sr.reveal(".name", { delay: 500, origin: "right" });

// const cart = document.querySelector("#cart");
const information = document.querySelector(".information");

const addToCartButtons = document.querySelectorAll(".addtocart");

// cart.addEventListener("click", () => {});

const cart = [];

// Add event listeners to all buttons
addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the product price from the data-price attribute
    const productPrice = button.getAttribute("data-price");
    const productName = button.getAttribute("data-name");

    const product = {
      name: productName,
      price: Number(productPrice),
    };

    cart.push(product);

    console.log(cart);
  });
});
