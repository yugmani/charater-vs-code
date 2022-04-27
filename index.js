//Function to return the character of the given code
function characterCode(num) {
  let str = String.fromCharCode(num);
  return str;
}

console.log(characterCode(71)); //G

//function to return the name of key pressed in the input area.
const keyCode = document.getElementById('keyCode');

keyCode.addEventListener('keydown', (e) => {
  if (!e.repeat) {
    console.log(`${e.key}`);
  }
});
