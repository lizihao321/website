/* 轮播图 */

/**
 * 启动轮播图
 * @function
 */
function autoPalyCarousel() {
  let wrap = document.getElementById("wrap"),
    pic = document.getElementById("pic").getElementsByTagName("li"),
    list = document.getElementById("list").getElementsByTagName("li"),
    index = 0,
    timer = null;
  autoPlay();
  // 定义并调用自动播放函数
  timer = setInterval(autoPlay, 3000);

  // 鼠标划过整个容器时停止自动播放
  wrap.onmouseover = function () {
    clearInterval(timer);
  };

  // 鼠标离开整个容器时继续播放至下一张
  wrap.onmouseout = function () {
    timer = setInterval(autoPlay, 3000);
  };
  // 遍历所有数字导航实现划过切换至对应的图片
  for (let i = 0; i < list.length; i++) {
    list[i].onmouseover = function (e) {
      clearInterval(timer);
      index = e.target.value - 1;
      changePic(index);
    };
  }

  function autoPlay() {
    if (++index >= pic.length) index = 0;
    changePic(index);
  }

  // 定义图片切换函数
  function changePic(curIndex) {
    for (let i = 0; i < pic.length; ++i) {
      pic[i].style.display = "none";
      list[i].className = "";
    }
    pic[curIndex].style.display = "block";
    list[curIndex].className = "on";
  }
}
