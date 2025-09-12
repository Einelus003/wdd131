const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function () {
  if (input.value.trim() !== '') {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = input.value;
    deleteButton.textContent = '❌';

    // Add class to delete button to detect it in event delegation
    deleteButton.classList.add('delete');

    li.append(deleteButton);
    list.append(li);

    input.value = '';     // Clear input
  }

  input.focus();          // Always return focus to input
});

// Use event delegation for delete button
list.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete')) {
    const li = e.target.parentElement;
    list.removeChild(li);
    input.focus();
  }
});


