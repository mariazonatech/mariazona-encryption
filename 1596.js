var isUnlocked = false;function login() {
        var enteredCode = document.getElementById("loginCode").value;
        if (enteredCode !== token) {
          return;
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
      var encryptionKey = "your-random-encryption-key";var decryptedText = CryptoJS.AES.decrypt(encryptedText, encryptionKey).toString(CryptoJS.enc.Utf8);outputElement.value = decryptedText;
          }
      function clearInput() {
        document.getElementById("input").value = "";
      }
      function toggleDarkMode() {
      var bodyElement = document.body;
      bodyElement.classList.toggle("dark-mode");

      var isDarkMode = bodyElement.classList.contains("dark-mode");

      localStorage.setItem('darkMode', isDarkMode);

      var toggleSwitch = document.querySelector(".toggle-switch");
      var toggleTextLight = document.querySelector(".toggle-text.light");
      var toggleTextDark = document.querySelector(".toggle-text.dark");

      toggleSwitch.classList.toggle("on");
      toggleTextLight.classList.toggle("hidden");
      toggleTextDark.classList.toggle("hidden");
  }

    // Check user preference on page load
    document.addEventListener('DOMContentLoaded', (event) => {
        var bodyElement = document.body;
        var isDarkMode = localStorage.getItem('darkMode') === 'true';

        if (isDarkMode) {
            bodyElement.classList.add('dark-mode');
        }
    });

      var token = "darachan007";
