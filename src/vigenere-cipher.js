const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    let result = "";
    let k = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0; i < message.length; i++) {
      const currentLetter = message[i];
      const currentLetterCode = currentLetter.charCodeAt(0);
      if (currentLetterCode > 64 && currentLetterCode < 91) {
        let newCharCode = key[k++ % key.length].charCodeAt(0) - 65 + currentLetterCode;
        if (newCharCode > 90) {
          newCharCode -= 26;
        }
        result += String.fromCharCode(newCharCode);
      } else {
        result += currentLetter;
      }
    }
    return this.mode ? result : result.split("").reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    let result = "";
    let k = 0;
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < encryptedMessage.length; i++) {
      const currentLetter = encryptedMessage[i];
      const currentLetterCode = currentLetter.charCodeAt(0);
      if (currentLetterCode > 64 && currentLetterCode < 91) {
        let newCharCode = currentLetterCode - (key[k++ % key.length].charCodeAt(0) - 65);
        if (newCharCode < 65) {
          newCharCode += 26;
        }
        result += String.fromCharCode(newCharCode);
      } else {
        result += currentLetter;
      }
    }
    return this.mode ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
