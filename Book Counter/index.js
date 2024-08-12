function showUpdateForm() {
  document.getElementById('book-info').style.display = 'none';
  document.getElementById('update-form').style.display = 'flex';

  
  // Populate form with current values
  document.getElementById('book-title').value = document.querySelector('.book-title').textContent.split(' - by ')[0];
  document.getElementById('author').value = document.querySelector('.book-title').textContent.split(' - by ')[1];
  document.getElementById('date-read').value = document.querySelector('.date-read').textContent.split(': ')[1].split('.')[0];
  document.getElementById('recommendation').value = document.querySelector('.date-read').textContent.split(': ')[2].split('/')[0];
  document.getElementById('summary').value = document.querySelector('.book-summary').textContent;
  document.getElementById('notes-url').value = document.querySelector('.read-notes').href;
  document.getElementById('amazon-url').value = document.querySelector('.amazon-link').href;
}

function hideUpdateForm() {
  document.getElementById('book-info').style.display = 'block';
  document.getElementById('update-form').style.display = 'none';
}

document.getElementById('update-form').addEventListener('submit', function(e) {
  e.preventDefault();
  // Here you would typically send the form data to your server
  // For now, we'll just update the visible content
  document.querySelector('.book-title').textContent = document.getElementById('book-title').value + ' - by ' + document.getElementById('author').value;
  document.querySelector('.date-read').textContent = 'Date read: ' + document.getElementById('date-read').value + '. How strongly I recommend it: ' + document.getElementById('recommendation').value + '/10';
  document.querySelector('.book-summary').textContent = document.getElementById('summary').value;
  document.querySelector('.read-notes').href = document.getElementById('notes-url').value;
  document.querySelector('.amazon-link').href = document.getElementById('amazon-url').value;
  
  hideUpdateForm();
});

function showAddForm() {
  console.log('showAddForm called');
  document.getElementById('add-form').style.display = 'flex';
  document.getElementById('plus-icon').style.display = 'none';
  
}

function hideAddForm() {
  console.log('hideAddForm called');
  document.getElementById('add-form').style.display = 'none';
  document.getElementById('plus-icon').style.display = 'block';
}
