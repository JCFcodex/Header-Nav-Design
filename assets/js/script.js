const menuBtn = document.getElementById("menuBtn");
const menuContainer = document.getElementById("menuContainer");
const navContainer = document.getElementById("navContainer");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

function toggleMenu() {
  menuContainer.style.visibility = "visible";
  navContainer.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  menuContainer.style.visibility = "hidden";
  navContainer.classList.remove("active");
  document.body.style.overflow = "auto";
}

const account = document.getElementById("account");
const accountContent = document.getElementById("accountContent");
const accountDropdownMenuBtn = document.getElementById(
  "accountDropdownMenuBtn"
);

account.addEventListener("click", () => {
  accountContent.classList.add("active");
  accountDropdownMenuBtn.classList.add("active");
});

const searchBtn = document.getElementById("searchBtn");
const searchInputBox = document.getElementById("searchInputBox");

const searchBtnActive = document.getElementById("searchBtnActive");
const searchBoxActive = document.getElementById("searchBoxActive");

searchBtn.addEventListener("click", toggleSearch);
searchBoxActive.addEventListener("blur", closeSearch);

function toggleSearch() {
  if (searchBtn.classList.contains("active")) {
    searchInputBox.classList.add("active");
    searchBoxActive.focus();
  } else {
    searchInputBox.classList.remove("active");
  }
}

function closeSearch() {
  searchInputBox.classList.remove("active");
}

const menuItems = document.querySelectorAll("#menuItem");

menuItems.forEach((item) =>
  item.addEventListener("click", toggleActiveMenuItem)
);

function toggleActiveMenuItem(event) {
  menuItems.forEach((otherItem) => otherItem.classList.remove("active"));
  accountMenuItem.forEach((item) => item.classList.remove("active"));
  event.target.classList.add("active");

  accountContent.classList.remove("active");
  accountDropdownMenuBtn.classList.remove("active");
}

const accountMenuItem = document.querySelectorAll("#accountMenuItem");
const accountMenu = document.querySelector(".account");

accountMenuItem.forEach((item) =>
  item.addEventListener("click", toggleActiveAccountMenuItem)
);

function toggleActiveAccountMenuItem(event) {
  if (accountMenu.classList.contains("active")) {
    accountMenuItem.forEach((otherItem) =>
      otherItem.classList.remove("active")
    );
    menuItems.forEach((item) => item.classList.remove("active"));
    accountMenu.classList.add("active");
    event.target.classList.add("active");
  } else {
    accountMenuItem.forEach((otherItem) =>
      otherItem.classList.remove("active")
    );
    menuItems.forEach((item) => item.classList.remove("active"));
    accountMenu.classList.add("active");
    event.target.classList.add("active");
  }
}

/* JCFcodex */
