const htmlInput = document.getElementById('html-input');
const output = document.getElementById('output');

htmlInput.addEventListener('input', () => {
    output.innerHTML = '';
    let htmlCode = htmlInput.value;
    console.log(htmlCode);
    console.log('change');
    output.insertAdjacentHTML('afterbegin', htmlCode)
});