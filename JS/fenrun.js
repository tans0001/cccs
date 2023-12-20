// JavaScript Document
function validatePassword() {
      var password = document.getElementById("password").value;

      // 在这里进行密码验证逻辑，例如与预设密码进行比较
      if (password === "1234") {
        document.getElementById("passwordPrompt").style.display = "none"; // 隐藏密码输入框和按钮
        document.querySelector(".quanju").style.display = "block"; // 显示内容
      } else {
        alert("密码错误，请重新输入"); // 密码验证失败，显示错误提示
      }
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
function addBackground(event) {
    var columns = document.getElementsByClassName('column');
    // 移除所有列的选中状态
    for (var i = 0; i < columns.length; i++) {
      columns[i].classList.remove('selected');
    }
    // 添加选中样式到当前点击的列
    var clickedColumn = event.target;
    clickedColumn.classList.add('selected');
  }

function showDiv(divId, className) {
  var divs = document.getElementsByClassName(className);
  // 遍历所有div，隐藏它们
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.display = 'none';
  }
  // 显示选定的div
  var selectedDiv = document.getElementById(divId);
  selectedDiv.style.display = 'block';
}
