// JavaScript Document
const menus = document.querySelectorAll('.mume')
// 遍历每个菜单项，添加点击事件处理程序
menus.forEach((menu) => {
  menu.addEventListener('click', (event) => {
    // 查找当前菜单项下的子菜单
    const submenu = event.currentTarget.querySelector('.sumer');
    if (!submenu.contains(event.target)) {
      // 切换子菜单的可见性
      submenu.style.display = (submenu.style.display === 'none') ? 'block' : 'none';
    }
  });
});
function changeColor(column) {
    const columns = document.querySelectorAll('.column');
    columns.forEach(col => col.style.backgroundColor = '');
    column.style.backgroundColor = 'lightblue';
}

function showDiv(divId, className) {
    const divs = document.getElementsByClassName(className);

    // Hide all divs
    Array.from(divs).forEach(div => div.style.display = 'none');

    // Show the selected div
    const selectedDiv = document.getElementById(divId);
    selectedDiv.style.display = 'block';
}