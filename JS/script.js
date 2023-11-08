function showImage(imageName) {
            var imageContainer = document.getElementById('imageContainer');
            imageContainer.innerHTML = '<img src="img/信息化平台/' + imageName + '" alt="点击链接显示的图片" />';
	       var imageContainer = document.getElementById('imageContainer1');
	        imageContainer1.innerHTML = '<img src="img/星驿秘书/' + imageName + '" alt="点击链接显示的图片" />';
	function toggleDiv() {
      var div = document.getElementById("changjian");
      div.style.display = (div.style.display === "none") ? "block" : "none";
    }
}

function showDiv(divId) {
  var divs = document.getElementsByClassName('divs');
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.display = 'none';
  }
  document.getElementById(divId).style.display = 'block';
}


const menus = document.querySelectorAll('.menu');
// 遍历每个菜单项，添加点击事件处理程序
menus.forEach((menu) => {
  menu.addEventListener('click', (event) => {
    // 查找当前菜单项下的子菜单
    const submenu = event.currentTarget.querySelector('.submenu');

    if (!submenu.contains(event.target)) {
      // 切换子菜单的可见性
      submenu.style.display = (submenu.style.display === 'none') ? 'block' : 'none';
    }
  });
});

