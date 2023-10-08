function exportTXT() {
  let txtName = localStorage.getItem('txtName');
  let txtContent = localStorage.getItem('txtContent');

  let c = document.createElement('a');
  c.download = txtName + '.txt';

  let t = new Blob([txtContent], {
    type: 'text/plain',
  });

  c.href = window.URL.createObjectURL(t);
  c.click();
}

exportBtn.addEventListener('click', exportTXT);
