function calculate() {
    const sum = arr => arr.length > 0 ? arr.reduce((sum, current) => sum + current) : 0;

    const suits = document.querySelector('input').value.split(' ').map(suit => +suit).sort((a, b) => a - b);
    const threads = [[], [], [], []];
    while(suits.length > 0) {
        const suit = suits.pop();
        let thread = threads[0];
        let threadSum = sum(threads[0]);
        for (let threadIdx = 1; threadIdx < threads.length; threadIdx++) {
            const currentThreadSum = sum(threads[threadIdx]);
            if (currentThreadSum < threadSum) {
                threadSum = currentThreadSum;
                thread = threads[threadIdx];
            }
        }
        thread.push(suit);
    }
    for (let threadIdx = 0; threadIdx < threads.length; threadIdx++) {
        const threadSuits = threads[threadIdx].join(' ');
        const threadSum = sum(threads[threadIdx]);
        document.querySelector(`#t${threadIdx + 1}`).innerHTML = `Suits: ${threadSuits}, Sum: ${threadSum}`;
    }
}


document.querySelector('button').addEventListener('click', calculate);