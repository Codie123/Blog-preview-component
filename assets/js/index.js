document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");
  const svgContainer = document.querySelector(".svg-container");
  const tag = document.querySelector(".tag");
  const wrapperCont = document.querySelector(".animate-wrapper");
  const profile = document.querySelector(".anime-profile");
  const profileName = document.querySelector(".profile-name");
  gsap.fromTo(
    card,
    { opacity: 0, scale: 0.1 },
    { duration: 1, scale: 1, opacity: 1 }
  );

  gsap.to(svgContainer, {
    height: "auto",

    delay: 0.4,
    ease: "power1.inOut",
  });

  gsap.from(tag, {
    opacity: 0,
    scale: 0,
    delay: 0.4,
  });
  gsap.from(wrapperCont, {
    opacity: 0,
    delay: 0.5,
    ease: "power1.inOut",
  });
  gsap.from(profile, {
    x: "-200%",
    scale: 0,
    delay: 0.9,
    ease: "power4.out",
  });

  gsap.from(profileName, {
    delay: 0.9,
    scale: 0,
    ease: "expo.out",
  });
});

// const codePath = document.querySelector(".code-path");
// const rec2 = document.querySelector(".rec-2");
// const rec3 = document.querySelector(".rec-3");

// window.addEventListener("load", () => {
//   setTimeout(() => {
//     animate();
//   }, 600);
// });
// function animate() {
//   rec2.classList.remove("place-rec-2");
//   rec3.classList.remove("place-rec-3");
// }
