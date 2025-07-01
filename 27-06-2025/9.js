function singleSpaces(str) {
  return str.replace(/\s+/g, ' ').trim();
}
console.log(singleSpaces("              Hello     World!       "));