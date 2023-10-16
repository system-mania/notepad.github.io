const hideBtn = document.querySelector('#hideBtn');
const gnb = document.querySelector('#gnb');
const showBtn = document.querySelector('#showBtn');
function hideGnb() {
  gnb.classList.add('hidden');
  showBtn.classList.remove('hidden');
}
function showGnb() {
  gnb.classList.remove('hidden');
  showBtn.classList.add('hidden');
}
hideBtn.addEventListener('click', hideGnb);
showBtn.addEventListener('click', showGnb);
