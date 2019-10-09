function stringProcessor () {
    const anti = {
        '(': ')',
        ')': '('
    };

    function iter() {
        for (let i = 0; i < initialArr.length; i++) {
            if (anti[initialArr[i]] === initialArr[i + 1]) {
                initialArr.splice(i, 2);
                return true;
            }
        }
        return false;
    }

    const initialArr = document.querySelector('input').value.split('');
    let lastIterationSuccess = true;

    while (lastIterationSuccess && initialArr.length > 0) {
        lastIterationSuccess = iter();
    }
    const resString = initialArr.join('');

    document.querySelector('p').innerText = resString ? resString : 'Пустая строка';
}

document.querySelector('button').addEventListener('click', stringProcessor);