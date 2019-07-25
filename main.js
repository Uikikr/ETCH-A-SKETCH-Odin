const body = document.querySelector('body');


document.getElementById('wrap').onload = createDiv()

function createDiv() {
    for (i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.id = 'dive';
        div.className = 'numOne';
        const divStyle = div.style;
        divStyle.backgroundColor = 'white';
        divStyle.height = '50px';
        divStyle.width = '50px';
        divStyle.border = '1px';
        document.getElementById('wrap').appendChild(div);
    }
};

const wrapperStyle = wrap.style;
wrapperStyle.height = '800px';
wrapperStyle.width = '800px';
wrapperStyle.display = 'flex';
wrapperStyle.flexDirection = 'row';
wrapperStyle.flexWrap = 'wrap';

let divH = document.getElementById('dive').innerHTML;

divH.addEventListener('click', function (e) {
    console.log(this.className)           // logs the className of my_element
    console.log(e.currentTarget === this) // logs `true`
  });
