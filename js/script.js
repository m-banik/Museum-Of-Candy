window.addEventListener("scroll", () => {
  const navbar = document.querySelector("#navbar");
  if (window.scrollY > navbar.offsetHeight) {
    navbar.classList.add("purple");
  } else navbar.classList.remove("purple");
});
