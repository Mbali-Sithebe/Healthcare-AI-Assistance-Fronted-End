//.1 JavaScript Navigation Bar

// Array of all the menu items (single-page navigation)
const menuItems = [
  { name: "Home", href: "#homepage" },
  { name: "About", href: "#about" },
  { name: "Consultations", href: "#consultations" },
  { name: "Features", href: "#features" },
];

//Function for the nav menu
export function initialiseMenu(currentPage) {
  const nav = document.querySelector("#navigation-bar nav");
  const ul = document.createElement("ul");
  ul.classList.add("menu");

  // Creates the navigation bar and highlights the current page.
  for (let menuItem of menuItems) {
    const li = document.createElement("li");
    li.classList.add("menu-item");

    // If this item is not the current page, make it a clickable link
    if (currentPage !== menuItem.name) {
      const a = document.createElement("a");
      a.innerText = menuItem.name;
      a.setAttribute("href", menuItem.href);
      li.appendChild(a);
    }
    // If this is the current page, highlight it without making it a link
    else {
      li.innerText = menuItem.name;
      li.classList.add("active");
    }

    // Add the list item to the unordered list
    ul.appendChild(li);
  }

  // Add the completed menu list to the navigation element
  nav.appendChild(ul);
}
