function decodeHTMLString(str) {
  const element = document.createElement("div");
  element.innerHTML = str;
  return element.textContent;
}

export default decodeHTMLString;
