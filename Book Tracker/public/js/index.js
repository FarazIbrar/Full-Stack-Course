function showUpdateForm(id) {
    console.log(`showUpdateForm called with id: ${id}`);
    const form = document.getElementById(`update-form-${id}`);
    if (form) {
        form.style.display = 'block';
    } else {
        console.error(`Form with id update-form-${id} not found.`);
    }
}
function hideUpdateForm(id) {
    console.log(`showUpdateForm called with id: ${id}`);
    const form = document.getElementById(`update-form-${id}`);
    if (form) {
        form.style.display = 'none';
    } else {
        console.error(`Form with id update-form-${id} not found.`);
    }
}




  function deleteBook(id) {
    // Add your delete logic here, possibly using fetch or AJAX
  }
  
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
  