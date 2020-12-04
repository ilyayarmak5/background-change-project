const btn = document.querySelector(".btn");
const bg = document.querySelector("body");
const h1 = document.querySelector("h1");

const getRandNum = () => {
  let num = Math.floor(Math.random() * 256);
  return num;
};

const getColor = () => {
  const a = getRandNum();
  const b = getRandNum();
  const c = getRandNum();
  const color = `rgb(${a}, ${b}, ${c})`;
  h1.innerHTML = color;
  return color;
};

btn.addEventListener("click", () => {
  bg.style.backgroundColor = getColor();
});
