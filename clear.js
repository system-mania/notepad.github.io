const clearBtn = document.querySelector('#clearBtn');
function clearAll() {
  const message = 'All content will be deleted\nAre you sure to delete all?';
  let result = confirm(message);
  if (result) {
    txtName.value = '';
    txtContent.value = '';
    localStorage.setItem(TXTNAME_KEY, txtName.value);
    localStorage.setItem(TXTCONTENT_KEY, txtContent.value);
  }
}

clearBtn.addEventListener('click', clearAll);
