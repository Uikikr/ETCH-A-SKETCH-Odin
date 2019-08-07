const body = document.querySelector('body');

document.getElementById('wrap').onload = createDiv(), createButton()

function createDiv(width = 16) {
    console.log(width, 50)
    for (i = 0; i < width*width; i++) {
        const div = document.createElement('div');
        div.id = i;
        div.className = 'numOne';
        const divStyle = div.style;
        divStyle.backgroundColor = 'white';
        divStyle.height = 400 / width + 'px';
        divStyle.width = 400 / width + 'px';
        divStyle.border = '1px, "solid", "black"';
        document.getElementById('wrap').appendChild(div);
    }
    let wrapperStyle = wrap.style;
    wrapperStyle.height = '400px';
    wrapperStyle.width = '400px';
    wrapperStyle.display = 'flex';
    wrapperStyle.flexDirection = 'row';
    wrapperStyle.flexWrap = 'wrap';
};

let divH = document.getElementsByClassName('numOne');

function createButton() {
    const bottun = document.createElement('button');
    let t = document.createTextNode('Change');
    bottun.id = 'button1';
    document.getElementById('body').appendChild(bottun);
    document.getElementById('button1').appendChild(t);
}

function mouseUpp() {
    let pNumber = Number(window.prompt('Type a number', ' '))
    console.log(pNumber);
    document.getElementById('wrap').innerHTML = null;
    createDiv(pNumber);
}

function mouseOvver(e, color = 'RGB(0, 0, 0)') {
    const div = e.target;
    if (div.className === 'numOne') {
        div.style.backgroundColor = color
    }
};

document.getElementById('wrap').onmouseover = function(e) {
    mouseOvver(e)
}

document.getElementById('button1').onmouseup = function() {
    mouseUpp()
}
