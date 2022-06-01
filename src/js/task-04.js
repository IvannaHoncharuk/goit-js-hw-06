const counterValue = {
    value: 0,
    decrement() {
        console.log('decrement -> this', this);
        this.value -= 1;
    },
    increment() {
        console.log('increment -> this', this);
        this.value += 1;
    },
};

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', function () {
    console.log('Клікнути на декремент');

    counterValue.decrement();
    console.log(counterValue);
    valueEl.textContent = counterValue.value;
});

incrementBtn.addEventListener('click', function () {
    console.log('Клікнути на інкремент');

    counterValue.increment();
    console.log(counterValue);
    valueEl.textContent = counterValue.value;
});