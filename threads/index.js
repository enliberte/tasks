function calculate() {
    const threads = [[], [], [], []];

    const sum = arr => arr.length > 0 ? arr.reduce((sum, current) => sum + current) : 0;

    const getThreadWithMinSum = () => {
        let thread = threads[0];
        let threadSum = sum(threads[0]);
        for (let threadIdx = 1; threadIdx < threads.length; threadIdx++) {
            const currentThreadSum = sum(threads[threadIdx]);
            if (currentThreadSum < threadSum) {
                threadSum = currentThreadSum;
                thread = threads[threadIdx];
            }
        }
        return thread;
    };

    const suits = document.querySelector('input').value.split(' ').map(suit => +suit).sort((a, b) => b - a);

    while(suits.length > 0) {
        const suit = suits.pop();
        getThreadWithMinSum().push(suit);
    }
    for (let threadIdx = 0; threadIdx < threads.length; threadIdx++) {
        const threadSuits = threads[threadIdx].join(' ');
        const threadSum = sum(threads[threadIdx]);
        document.querySelector(`#t${threadIdx + 1}`).innerHTML = `Suits: ${threadSuits}, Sum: ${threadSum}`;
    }
}


document.querySelector('button').addEventListener('click', calculate);