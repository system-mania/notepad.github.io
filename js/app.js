// SAVE TXT
const txtName = document.querySelector('#txtName');
const txtContent = document.querySelector('#txtContent');
const saveBtn = document.querySelector('#saveBtn');
const exportBtn = document.querySelector('#txtExportBtn');
const saveMsgArea = document.querySelector('#saveMsgArea');

const TXTNAME_KEY = 'txtName';
const TXTCONTENT_KEY = 'txtContent';

function saveNameContent(event) {
  localStorage.setItem(TXTNAME_KEY, txtName.value);
  localStorage.setItem(TXTCONTENT_KEY, txtContent.value);
  saveMsgArea.classList.remove('hidden');
  setTimeout(() => {
    saveMsgArea.classList.add('hidden');
  }, 1000);
}

setInterval(saveNameContent, 1000 * 60 * 10);

saveBtn.addEventListener('click', saveNameContent);
exportBtn.addEventListener('click', saveNameContent);

document.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.keyCode === 83) {
    event.preventDefault();
    saveNameContent();
  }
});

//RELOAD TXT
$(document).ready(function () {
  if ($.localStorage.isSet('txtName') || $.localStorage.isSet('txtContent')) {
    $('#txtName').val($.localStorage.get('txtName'));
    $('#txtContent').val($.localStorage.get('txtContent'));
  }
});

// EXPROT TXT
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

//CLEAR TXT
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
