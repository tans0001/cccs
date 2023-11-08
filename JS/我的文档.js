function showDiv(divId) {
      var divs = document.getElementsByClassName('content');
      // 遍历所有div，隐藏它们
      for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';
      }
      // 显示选定的div
      var selectedDiv = document.getElementById(divId);
        selectedDiv.style.display = 'block';
    }
function showDivT(divId) {
      var divs = document.getElementsByClassName('wenben');
      // 遍历所有div，隐藏它们
      for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';
      }
      // 显示选定的div
      var selectedDiv = document.getElementById(divId);
        selectedDiv.style.display = 'block';
    }

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