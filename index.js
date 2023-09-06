// Import stylesheets
import './style.css';
import salt from './env/secret';

function encryptString(str) {
  let encryptedStr = '';
  for (let i = 0; i <= str.length; i++) {
    encryptedStr += String.fromCharCode(str.charCodeAt(i) + 2);
  }
  return encryptedStr;
}

function decryptString(str) {
  let decryptedStr = '';
  for (let i = 0; i < str.length; i++) {
    decryptedStr += String.fromCharCode(
      str.charCodeAt(i) + 2 // <-- TODO: The bug is here, can you find it?
    );
  }
  return decryptedStr;
}

let encryptedUrl = `jvvru<11tcy0ikvjwdwugteqpvgpv0eqo1kcoitcycn1fgxhguv/fgnjk/42451ockp1TGCFOG0of`;
let decryptedUrl = decryptString(encryptedUrl + salt);

// Showing the output to the browser document as well
let formLinkElement = document.getElementById('decryptedUrl');

formLinkElement.href = decryptedUrl;
formLinkElement.innerText = decryptedUrl;
