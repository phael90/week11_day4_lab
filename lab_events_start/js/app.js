document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleSubmitForm);

  const clearAllButton = document.querySelector('#clear-list');
  clearAllButton.addEventListener('click', handleClearAllButton)
})

const handleSubmitForm = function (event) {
  event.preventDefault();
  const formTitle = event.target.title.value;
  const formAuthor = event.target.author.value;
  const formCategory = event.target.category.value;

  const list = document.querySelector('.reading-list');
  const newReadingListItem = document.createElement('li');
  newReadingListItem.textContent = `${formTitle}, ${formAuthor}, ${formCategory}`;
  list.appendChild(newReadingListItem);

  console.log(`${formTitle}, ${formAuthor}, ${formCategory}`);
  this.reset();
}

const handleClearAllButton = function (event) {
  event.preventDefault();
  const list = document.querySelector('.reading-list');
  // list.innerHTML = "";

  console.log(list);

  while(list.firstChild) {
      list.removeChild(list.firstChild);
  }
}
