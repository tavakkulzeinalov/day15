'use strict';

const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

    this.newMethod = function () {
        let div = document.createElement('div');
        div.innerHTML = `${this.selector} ${this.height} ${this.width} ${this.bg} ${this.fontSize}`;
        div.innerText = 'БЛОК!';
        div.height = '100px';
        div.width = '100px';
        div.backgroundColor = bg = 'red';
        div.fontSize = '12px';
    };
};

const kv = new DomElement('div', '100px', '100px', 'red', '12px');
kv.newMethod();
console.log(kv);