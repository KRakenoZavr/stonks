import { navigateTo, router } from "./router/index.js";

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#back-to-top").addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});

document.addEventListener("scroll", () => {
  let height = window.scrollY;
  let scroller = document.querySelector("#back-to-top");
  if (height > 100 && !scroller.classList.contains("show")) {
    scroller.classList.add("show");
  } else if (height < 100 && scroller.classList.contains("show")) {
    scroller.classList.remove("show");
  }
});
