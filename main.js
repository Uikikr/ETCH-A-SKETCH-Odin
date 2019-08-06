const body = document.querySelector('body');


document.getElementById('wrap').onload = createDiv()

function createDiv() {
    for (i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.id = i;
        div.className = 'numOne';
        const divStyle = div.style;
        divStyle.backgroundColor = 'white';
        divStyle.height = '25px';
        divStyle.width = '25px';
        divStyle.border = '1px, "solid", "black"';
        document.getElementById('wrap').appendChild(div);
    }
};

const wrapperStyle = wrap.style;
wrapperStyle.height = '432px';
wrapperStyle.width = '432px';
wrapperStyle.display = 'flex';
wrapperStyle.flexDirection = 'row';
wrapperStyle.flexWrap = 'wrap';

let divH = document.getElementsByClassName('numOne');

document.addEventListener('mouseover', function (e) {
    const div = e.target;
    if (div.className === 'numOne') {
        div.style.backgroundColor = 'black'
    }
  });
