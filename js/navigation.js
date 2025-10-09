const openMenuIcon = document.getElementById("open-menu");
const menuContainer = document.getElementById("menu-container");
const closeMenuIcon = document.getElementById("close-menu");
const navigationMenu = document.getElementById("menu-wrapper");

const allMenuItems = document.querySelectorAll('[role = "menu-item"');

const OpenMenu = () => {
  openMenuIcon.setAttribute("aria-expanded", "true");
  openMenuIcon.classList.add("hide");
  menuContainer.classList.remove("hide");
  closeMenuIcon.focus();
  closeMenuIcon.setAttribute("aria-expanded", "true");

  menuContainer.addEventListener("keyup", HandleEscapeKeyPress);

  allMenuItems.forEach((menuItem, menuItemIndex) => {
    menuItem.addEventListener("keyup", (e) => {
      ArrowKeyPress(e, menuItemIndex);
    });
  });
};

const HandleEscapeKeyPress = (e) => {
  if (e.key === "Escape") {
    CloseMenu();
  }
};

const ArrowKeyPress = (e, menuItemIndex) => {
  const isFirstMenuItem = menuItemIndex === 0;
  const isLastMenuItem = menuItemIndex === allMenuItems.length - 1;
  const nextMenuItem = allMenuItems.item(menuItemIndex + 1);
  const previousMenuItem = allMenuItems.item(menuItemIndex - 1);

  if (e.key === "ArrowRight" || e.key === "ArrowDown") {
    if (isLastMenuItem) {
      allMenuItems.item(0).focus();
      return;
    }
    nextMenuItem.focus();
  }

  if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
    if (isFirstMenuItem) {
      allMenuItems.item(allMenuItems.length - 1).focus();
      return;
    }
    previousMenuItem.focus();
  }
};

const CloseMenu = () => {
  openMenuIcon.setAttribute("aria-expanded", "false");
  openMenuIcon.classList.remove("hide");
  openMenuIcon.focus();
  menuContainer.classList.add("hide");
  menuContainer.setAttribute("aria-hidden", "true");
  openMenuIcon.setAttribute("aria-expanded", "false");
};

const OpenAndCloseMenu = () => {
  openMenuIcon.addEventListener("click", OpenMenu);
  closeMenuIcon.addEventListener("click", CloseMenu);
};

OpenAndCloseMenu();
