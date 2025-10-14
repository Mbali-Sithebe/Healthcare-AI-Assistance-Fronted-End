//.1 JavaScript Navigation Bar

// Array of all the menu items (single-page navigation)
const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Consultations", href: "#consultations" },
  { name: "Features", href: "#features" },
];

// Function for the nav menu
function initialiseMenu(currentPage) {
  const container = document.querySelector("#menu-container"); // use aside for accessibility
  const ul = document.createElement("ul");
  ul.classList.add("menu");

  // Loop through menu items
  for (let menuItem of menuItems) {
    const li = document.createElement("li");
    li.classList.add("menu-item");

    // Highlight current page, others are links
    if (currentPage !== menuItem.name) {
      const a = document.createElement("a");
      a.innerText = menuItem.name;
      a.setAttribute("href", menuItem.href);
      li.appendChild(a);
    } else {
      li.innerText = menuItem.name;
      li.classList.add("active");
    }

    ul.appendChild(li);
  }

  // Append menu to container
  container.appendChild(ul);
}

// Call the function
initialiseMenu("Home");

//2. Animating the warning header.

gsap.from("#health-disclaimer p", { opacity: 0, duration: 5 });
gsap.to("#health-disclaimer p", {
  color: "#91C6CC",
  duration: 0.95,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});
