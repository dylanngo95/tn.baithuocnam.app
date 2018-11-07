let aesjs = require('aes-js');

export class AESUtil {
  public static key_new_512 = [ 22, 33, 33, 44, 15, 16, 17, 18, 99, 10, 11, 12, 13, 14, 15, 16 ];
  public static iv = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  public static encryption(plainText: string) {
    const textBytes = aesjs.utils.utf8.toBytes(plainText);
    const aesOfb = new aesjs.ModeOfOperation.ofb(this.key_new_512, this.iv);
    const encryptedBytes = aesOfb.encrypt(textBytes);
    return aesjs.utils.hex.fromBytes(encryptedBytes);
  }

  public static decryption(encryptedText: string) {
    const encryptedBytes = aesjs.utils.hex.toBytes(encryptedText);
    const aesOfb = new aesjs.ModeOfOperation.ofb(this.key_new_512, this.iv);
    const decryptedBytes = aesOfb.decrypt(encryptedBytes);
    return aesjs.utils.utf8.fromBytes(decryptedBytes);
  }

}
