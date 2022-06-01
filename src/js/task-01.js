const categoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesEl.length}`);

for (const item of categoriesEl) {
    console.log(`Category ${item.firstElementChild.textContent}`);
    const countItemsEl = item.querySelectorAll('li');
    console.log(`Elements: ${countItemsEl.length}`);
}
