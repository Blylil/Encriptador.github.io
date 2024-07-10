function encryptText() {
    var textInput = document.getElementById('textAreaInput').value;
    var encryptedText = encrypt(textInput);
    document.getElementById('result').innerText = encryptedText;
    updateUI();
}

function decryptText() {
    var textInput = document.getElementById('textAreaInput').value;
    var decryptedText = decrypt(textInput);
    document.getElementById('result').innerText = decryptedText;
    updateUI();
}

function limpiarCaja(){
    document.getElementById('caja-muestra-mensajes').style.display = 'none';
}

function limpiarTextoInicial() {
    document.getElementById('textAreaInput').value = '';
    document.getElementById('caja-muestra-mensajes').style.display = 'block';
    document.getElementById('mensajes').style.display = 'none';
    document.getElementById('copyButton').style.display = 'none';
}

function copyToClipboard() {
    var resultText = document.getElementById('result');
    var textArea = document.createElement('textarea');
    textArea.value = resultText.innerText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    document.getElementById('copyMessage').innerText = 'Texto copiado al portapapeles: ' + resultText.innerText;
}

function encrypt(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function decrypt(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

function updateUI() {
    limpiarCaja();
    document.getElementById('mensajes').style.display = 'block';
    document.getElementById('copyButton').style.display = 'block';
}

document.getElementById('textAreaInput').addEventListener('input', function() {
    const value = this.value;
    if (/[A-Z]/.test(value)) {
        alert("Solo letras minúsculas y sin acentos");
        this.value = value.toLowerCase();
    }
});
