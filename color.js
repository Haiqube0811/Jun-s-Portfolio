function changeColor(getColorText) {
  let bg = document.querySelector(".bg");
  let color = getColorText.value;
  let text = getColorText.options[getColorText.selectedIndex].text;
  bg.style.background = color;
  bg.innerHTML = text;
}
