let togglerBtn = document.querySelector(".toggler");
let sideBar = document.querySelector(".sidebar");
let links = document.querySelectorAll("#sectionLLink");

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

if (mediaQuery.matches) {
  for (let link of links) {
    link.addEventListener("click", () => {
      sideBar.style.display = "none";
    });
  }
}

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

function sendMessage() {
  let params = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    message: document.querySelector("#message").value,
  };

  const SERVICE_ID = "service_7ey5ff9";
  const TEMPLATE_ID = "template_3czl3h9";

  emailjs
    .send(SERVICE_ID, TEMPLATE_ID, params)
    .then((response) => {
      document.querySelector("#name").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#message").value = "";
      alert("Message delivered successfully.");
    })
    .catch((error) => {
      alert("Something is wrong, Message didn't deliver.");
    });
}
