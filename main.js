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
    wrapperStyle.border = 'solid';
    wrapperStyle.margin = 'auto';
};

function createButton() {
    const buttonText = ['Change size', 'Random color'];

    buttonText.forEach( (text, i) => {
        const bottun = document.createElement('button');
        bottun.id = 'button'+i;
        bottun.className = 'bClick'
        const  t = document.createTextNode(text);
        bottun.appendChild(t);
        document.getElementById('body').appendChild(bottun);
    });
};

function mouseUpp() {
    let pNumber = Number(window.prompt('Type the number of squares you want in a row. Please be kind to chrome and keep it under 200', ' '))
    console.log(pNumber);
    document.getElementById('wrap').innerHTML = null;
    createDiv(pNumber);
}

function mouseOvver(e, color = 'RGB'+'(0, 0, 0)') {
    const div = e.target;
    if (div.className === 'numOne') {
        div.style.backgroundColor = color
    }
};

function changeColor() {
    let rColor = 'RGB' + '('+(Math.floor(Math.random()*250) + ',' + Math.floor(Math.random()*250) + ',' + Math.floor(Math.random()*250)) + ')';
    console.log(rColor);
    document.getElementById('wrap').onmouseover = function(e) {
        mouseOvver(e, rColor)
    }
};

document.getElementById('wrap').onmouseover = function(e) {
    mouseOvver(e)
}

document.getElementById('button0').onmouseup = function() {
    mouseUpp()
}

document.getElementById('button1').onmouseup = function() {
    changeColor()
}
