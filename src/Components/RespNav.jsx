import React from "react";

export default function RespNav() {
  let nav = document.querySelector(".resp-nav");
  document.querySelector(".ri-menu-fill").addEventListener("click", () => {
    nav.style.left = "0%";
    nav.style.position = "fixed";
  });
  document
    .querySelector(".ri-close-large-fill")
    .addEventListener("click", () => {
      nav.style.left = "-100%";
    });

  var anim = gsap.timeline();

  anim.from("nav", {
    y: -300,
    opacity: 0,
    duration: 1,
  });

  anim.from(
    ".lft h1",
    {
      y: 100,
      opacity: 0,
      duration: 0.9,
    },
    "a"
  );
  anim.from(".lft p", {
    y: 50,
    opacity: 0,
    duration: 0.5,
  });
  anim.from(".lft .search", {
    y: 50,
    opacity: 0,
    duration: 0.5,
  });
  anim.from(".lft button", {
    y: 50,
    opacity: 0,
    duration: 0.5,
  });
  anim.from(
    ".rght img",
    {
      y: -100,
      x: -20,
      opacity: 0,
      duration: 0.9,
    },
    "a"
  );
  return (
    <div>
      <div class="resp-nav">
        <i class="ri-close-large-fill"></i>
        <a href="#">Menu</a>
        <a href="#">Categories</a>
        <a href="#">About</a>
        <a href="#">Reviews</a>
        <a href="#">Resutrants</a>
      </div>
    </div>
  );
}
