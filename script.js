let togglerBtn = document.querySelector(".toggler");
let sideBar = document.querySelector(".sidebar");

togglerBtn.addEventListener("click", () => {
  sideBar.style.display = sideBar.style.display == "none" ? "block" : "none";
});

function handleMediaChange(event) {
  if (event.matches) {
    sideBar.addEventListener("click", () => {
      sideBar.style.display = "none";
    });
  }
}
const mediaQuery = window.matchMedia("(max-width: 1023px)");
mediaQuery.addEventListener("change", handleMediaChange);

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("#sectionLLink");

  function changeActiveLink() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[index].classList.add("active");
  }

  changeActiveLink();
  window.addEventListener("scroll", changeActiveLink);
});
