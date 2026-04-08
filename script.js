function generatePassword() {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    let chars = "";
    if (document.getElementById("lower").checked) chars += lower;
    if (document.getElementById("upper").checked) chars += upper;
    if (document.getElementById("numbers").checked) chars += numbers;
    if (document.getElementById("symbols").checked) chars += symbols;

    const len = parseInt(document.getElementById("length").value);
    if (!chars) return alert("Select at least one option!");

    let password = "";
    const array = new Uint32Array(len);
    window.crypto.getRandomValues(array);
    for (let i = 0; i < len; i++) {
        password += chars[array[i] % chars.length];
    }
    document.getElementById("password").value = password;
}

function copyPassword() {
    const input = document.getElementById("password");
    input.select();
    document.execCommand("copy");
    alert("Copied to clipboard!");
}

// Auto-Generate Every 10 Seconds
generatePassword();
setInterval(generatePassword, 10000);
