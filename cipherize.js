const {
    hashData,
    generateKey,
    encryptData,
    decryptData,
    compareHash
  } = require('cipherize'); 


  async function exampleUsage() {
    try {
      const hashedData = await hashData('my secret data');
      console.log('Hashed data:', hashedData);
      
      const key = await generateKey();
      console.log('Generated key:', key);
  
      const iv = '0123456789ABCDEF0123456789ABCDEF';
      const encryptedData = await encryptData('my secret data', key, iv);
      console.log('Encrypted data:', encryptedData);
  
      const decryptedData = await decryptData(encryptedData.encryptedData, key, iv);
      console.log('Decrypted data:', decryptedData);
  
      const value = 'my secret data';
      const isMatch = await compareHash(value, hashedData);
      console.log('Is value matching the hash?', isMatch);
    } catch (error) {
      console.error('Error:', error);
    }
  }

exampleUsage();
  
