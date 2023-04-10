// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = headerTop;

  if (window.pageYOffset > fixedNav) {
    header.classsList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
