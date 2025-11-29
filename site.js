function copyToClipboard(element) {
    const temp = document.createElement('textarea');
    temp.value = document.querySelector(element).textContent;

    document.body.appendChild(temp);

    temp.select();

    document.execCommand('copy');
    document.body.removeChild(temp);

    alert('Installer Command Copied To Clipboard!\r\n\r\nNext Paste It In Your Command Prompt/Terminal...');
}