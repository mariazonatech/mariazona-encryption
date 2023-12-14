var isUnlocked = false;
      function login() {
        var enteredCode = document.getElementById("loginCode").value;
        if (enteredCode !== token) {
          return swal("Authentication Failed", "😂😂😂😂😂");
        }
        document.getElementById("loginCode").value = "";
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("encryptionSection").style.display = "block";
      }
      function copyToClipboard() {
        var outputElement = document.getElementById("output");
        outputElement.select();document.execCommand("copy");
        swal("Encrypted/Decrypted text copied to clipboard!");
      }
      function encrypt() {
        if (!isUnlocked) {
          isUnlocked = true;
      }
        var inputElement = document.getElementById("input");
        var outputElement = document.getElementById("output");
        var inputText = inputElement.value;
        var encryptionKey = "your-random-encryption-key";
        var encryptedText = CryptoJS.AES.encrypt(inputText, encryptionKey).toString();
        outputElement.value = encryptedText;
      }
      function decrypt() {
        if (!isUnlocked) {
          isUnlocked = true;
        }
        var inputElement = document.getElementById("input");
        var outputElement = document.getElementById("output");
        var encryptedText = inputElement.value;
        var encryptionKey = "your-random-encryption-key";
        var decryptedText = CryptoJS.AES.decrypt(encryptedText, encryptionKey).toString(CryptoJS.enc.Utf8);
        outputElement.value = decryptedText;
      }
      function clearInput() {
        document.getElementById("input").value = "";
      }

      var token ="nidexingg159619";
