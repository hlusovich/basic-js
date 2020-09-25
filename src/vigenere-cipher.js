const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(revers) {
    this.alphavit = [
      'a', 'b', 'c', 'd', 'e', 'f',
      'g', 'h', 'i', 'j', 'k', 'l',
      'm', 'n', 'o', 'p', 'q', 'r',
      's', 't', 'u', 'v', 'w', 'x',
      'y', 'z'
    ]
    this.revers = revers
  }

  encrypt(word, key) {
    key=key.toLowerCase()
    function makeKey(f, s) {

      while (s.length < f.length) {
        s = s.repeat(2)
      }
      return s.slice(0, f.length)
    }
    word = word.toLowerCase()

    let fullKey = makeKey(word, key)
    let encryptWord = '';
    let popravka = 0
    for (let i = 0; i < word.length; i++) {
      if (this.alphavit.find(item => word[i] === item)) {
        let charCode = (word[i].charCodeAt() + fullKey[i - popravka].charCodeAt() - 97 - 97) % 26 + 97;
        if (this.revers || this.revers === undefined) {
          encryptWord = encryptWord + String.fromCharCode(charCode)
        } else {
          encryptWord = String.fromCharCode(charCode) + encryptWord
        }

      } else {
        if (this.revers || this.revers === undefined) {
          encryptWord = encryptWord + word[i]
        } else {
          encryptWord = word[i] + encryptWord
        }

        popravka++

      }

    }
    return encryptWord.toUpperCase()

  }

  decrypt(code, key) {
    key=key.toLowerCase()
    function makeKey(f, s) {
      while (s.length < f.length) {
        s = s.repeat(2)
      }
      return s.slice(0, f.length)
    }

    let fullKey = makeKey(code, key)
    let decryptWord = '';
    let popravka = 0;
    for (let i = 0; i < code.length; i++) {
      debugger
      if (this.alphavit.find(item => code[i].toLowerCase() === item)) {
        let charCode = (code[i].toLowerCase().charCodeAt() - fullKey[i - popravka].charCodeAt() + 26) % 26 + 97;
        if (this.revers === true || this.revers === undefined) {
          decryptWord = decryptWord + String.fromCharCode(charCode)
        } else {
          decryptWord = String.fromCharCode(charCode) + decryptWord
        }

      } else {
        if (this.revers === true || this.revers === undefined) {
          decryptWord = decryptWord + code[i]
        } else {
          decryptWord = code[i] + decryptWord
        }
        popravka++
      }

    }


    return decryptWord.toUpperCase()
  }
}
module.exports = VigenereCipheringMachine;
