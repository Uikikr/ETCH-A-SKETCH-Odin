const body = document.querySelector('body');


document.getElementById('wrap').onload = createDiv()

function createDiv() {
    for (i = 0; i < 16; i++) {
        const div = document.createElement('div');
        document.getElementById('wrap').appendChild(div);
    }
};


const divStyle = document.querySelector('div').style;
divStyle.backgroundColor = 'black';
divStyle.height = '100px';
divStyle.width = '100px';
