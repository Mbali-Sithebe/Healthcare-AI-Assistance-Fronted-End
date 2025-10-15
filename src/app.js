//1. Generating JS Navigation Bar //

// Array of all menu items
const menuItems = [
  { name: "Home", href: "#home" },
  { name: "Consultations", href: "#consultations" },
  { name: "Features", href: "#features" },
];

// Function to initialise the menu and highlight the current page
function initialiseMenu(currentPage) {
  const container = document.querySelector("#menu-container");
  container.innerHTML = "";

  const ul = document.createElement("ul");
  ul.classList.add("menu");

  menuItems.forEach((menuItem) => {
    const li = document.createElement("li");
    li.classList.add("menu-item");

    if (menuItem.name.toLowerCase() === currentPage.toLowerCase()) {
      // Active page
      li.innerText = menuItem.name;
      li.classList.add("active");
    } else {
      // Normal menu link
      const a = document.createElement("a");
      a.innerText = menuItem.name;
      a.setAttribute("href", menuItem.href);
      li.appendChild(a);
    }

    ul.appendChild(li);
  });

  container.appendChild(ul);
}

// Call the function with the current page
initialiseMenu("Home");

//2. Animating The Warning Header. //

gsap.from("#health-disclaimer p", { opacity: 0, duration: 5 });
gsap.to("#health-disclaimer p", {
  color: "#70c5ce",
  duration: 0.95,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});

//3. Buttons Functionality

/// Get the button
let topBtn = document.querySelector(".back-to-home");

// Show button on scroll
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

// Scroll smoothly to top when clicked
topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
