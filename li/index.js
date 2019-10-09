function colorize(event) {
    const rootElem = this;

    function addColor(node) {
        node.classList.add('active');
    }

    function addColorToParent(node) {
        if (node === rootElem) return;
        addColor(node);
        const siblings = node.parentElement.children;
        for (let sibling of siblings) {
            if (sibling !== node) {
                removeColor(sibling);
                removeColorOfChildren(sibling);
            }
        }
        addColorToParent(node.parentElement);
    }

    function removeColor(node) {
        node.classList.remove('active');
    }

    function removeColorOfChildren(node) {
        for (let child of node.children) {
            removeColor(child);
            removeColorOfChildren(child);
        }
    }

    removeColorOfChildren(event.target);
    addColorToParent(event.target);
}

document.getElementById('ul1').addEventListener('click', colorize);