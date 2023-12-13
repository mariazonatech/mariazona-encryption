const logInBox = document.getElementById("loginCode");
      document.addEventListener ("keydown", e => {
        if (e.ctrlKey && e.key.toLowerCase() === "k" || e.key.toLowerCase() === "k" && e.metaKey) {
          e.preventDefault();
          logInBox.focus();
        }
      });
      document.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
          document.getElementById('loginBtn').click();
        }
      });
      const clear = document.getElementById("clearBtn");
      document.addEventListener ("keydown", e => {
        if (e.ctrlKey && e.key.toLowerCase() === "x" || e.key.toLowerCase() === "x" && e.metaKey) {
          e.preventDefault();
          clear.click();
        }
      });
      // const encrypt = document.getElementById("encryptBtn");
      // document.addEventListener ("keydown", e => {
      //   if (e.ctrlKey && e.key.toLowerCase() === "e" || e.key.toLowerCase() === "e" && e.metaKey) {
      //     e.preventDefault();
      //     encrypt.click();
      //   }
      // });
      // const decrypt = document.getElementById("decryptBtn");
      // document.addEventListener ("keydown", e => {
      //   if (e.ctrlKey && e.key.toLowerCase() === "d" || e.key.toLowerCase() === "d" && e.metaKey) {
      //     e.preventDefault();
      //     decrypt.click();
      //   }
      // });
      const textBox = document.getElementById("input");
      document.addEventListener ("keydown", e => {
        if (e.key.toLowerCase() === "/") {
          e.preventDefault();
          textBox.focus();
        }
      });

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

      var token ="johnyjohnyyespapa";
