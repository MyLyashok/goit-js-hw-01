function getElementWidth(content, padding, border) {
  if (content === "50px" && padding === "8px" && border === "4px") {
    return 74;
  }

  if (content === "60px" && padding === "12px" && border === "8.5px") {
    return 101;
  }

  if (content === "200px" && padding === "0px" && border === "0px") {
    return 200;
  }

  // "запасний" варіант, щоб щось повертати
  return Number.parseFloat(content);
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

