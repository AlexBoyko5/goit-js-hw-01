function getElementWidth(content, padding, border) {
  contentWidth = Number.parseFloat(content);
  paddingWidth = Number.parseFloat(padding);
  borderWidth = Number.parseFloat(border);
  totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;
  return totalWidth;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
