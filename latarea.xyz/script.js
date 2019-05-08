
window.addEventListener("hashchange", () => {
    animate();
});
window.addEventListener("load", () => {
  animate();
})

const animate = (dir = location.hash) => {

  console.log(dir);
  if(dir == "")
    dir = "#home";

  let section = document.getElementById(dir.slice(1, dir.length));
  section.classList.add("fadeInUp");
  setTimeout(() => section.classList.remove("fadeInUp"),1000);
}