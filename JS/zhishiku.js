// JavaScript Document
const menus = document.querySelectorAll('.mume');
const columns = document.querySelectorAll('.column');
menus.forEach((menu) => {
menu.addEventListener('click', (event) => {
const submenu = event.currentTarget.querySelector('.sumer');
if (!submenu.contains(event.target)) {
submenu.style.display = (submenu.style.display === 'none') ? 'block' : 'none';
}
});
});
function changeColor(column) {
columns.forEach(col => col.style.backgroundColor = '');
column.style.backgroundColor = 'lightblue';
}
function showDiv(divId, className) {
const divs = document.getElementsByClassName(className);
Array.from(divs).forEach(div => div.style.display = 'none');
const selectedDiv = document.getElementById(divId);
selectedDiv.style.display = 'block';
}
function showpriv(imageUrl) {
	var prive=document.getElementById('prive');
	prive.src=imageUrl;
	prive.style.display='block';
}