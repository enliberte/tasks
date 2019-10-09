function colorize(event) {
    const rootElem = this;
    const targetElem = event.target;
    processNode(rootElem);

    function addColor(node) {
        if (node !== rootElem) {
            node.classList.add('active');
            const parentElem = node.parentElement;
            if (parentElem) {
                addColor(parentElem);
            }
        }
    }

    function processNode(node) {
        node.classList.remove('active');
        for (let child of node.children) {
            processNode(child);
            if (child === targetElem) {
                addColor(child);
            }
        }
    }
}

document.getElementById('ul1').addEventListener('click', colorize);