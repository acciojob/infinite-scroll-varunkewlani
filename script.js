// Get the list element
const list = document.getElementById('infi-list');

// Counter for list items
let itemCount = 0;

// Function to add a new list item
function addListItem() {
    const li = document.createElement('li');
    li.textContent = `Item ${++itemCount}`;
    list.appendChild(li);
}

// Function to check if scrolled to bottom
function isScrolledToBottom() {
    return list.scrollHeight - list.clientHeight <= list.scrollTop + 1;
}

// Function to add more items if scrolled to bottom
function addMoreItems() {
    if (isScrolledToBottom()) {
        addListItem();
        addListItem();
    }
}

// Add initial 10 items
for (let i = 0; i < 10; i++) {
    addListItem();
}

// Add scroll event listener
list.addEventListener('scroll', addMoreItems);