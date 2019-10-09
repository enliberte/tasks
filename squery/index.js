//FIRST IMPLEMENTATION
class Elem {
    constructor(elemId) {
        this.elem = document.getElementById(elemId);
    }
    className(className) {
        this.elem.classList.add(className);
        return this;
    }
    html(html) {
        this.elem.innerHTML = html;
        return this;
    }
}

function S1(elemId) {
    return new Elem(elemId);
}

//SECOND IMPLEMENTATION
function S2(elemId) {
    return {
        elem: document.getElementById(elemId),
        className(className) {
            this.elem.classList.add(className);
            return this;
        },
        html(html) {
            this.elem.innerHTML = html;
            return this;
        }
    }
}

document.getElementById('button1').addEventListener('click', () => S1("elemId1").className("myClass").html("hello world"));
document.getElementById('button2').addEventListener('click', () => S2("elemId2").className("myClass").html("hello world"));