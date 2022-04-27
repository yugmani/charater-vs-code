import './style.css';

//Function to return the character of the given code
function characterCode(num) {
  let str = String.fromCharCode(num);
  return str;
}

console.log(characterCode(71)); //G
console.log(characterCode(103)); //g
console.log(characterCode(112)); //p

function codeOfCharacter(char) {
  let value = char.charCodeAt(char);
  return value;
}

console.log(codeOfCharacter('p')); //112
console.log(codeOfCharacter('g')); //103
console.log(codeOfCharacter('G')); //71



//function to return the name of key pressed in the input area.
const keyCode = document.getElementById('keyCode');
const myKey = document.getElementById('myKey');

keyCode.addEventListener('keydown', (e) => {
  if (!e.repeat) {
    console.log(`${e.key}`);
    myKey.innerHTML = `You just pressed the key: <span id="ekey">${e.key}</span>`;
  }
});

// Enter -->when return key is pressed
// a --> when 'a' key is pressed
// NumLock -->when 'Num Lock' key pressed
