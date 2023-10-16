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
    saveNameContent();
    event.preventDefault();
  }
});
