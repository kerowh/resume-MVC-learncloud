// <!-- 加下拉菜单，点击的时候会出现下拉菜单
//     经验告诉我，要监听的外部的li菜单 -->


!function(){
  let liTags = document.querySelectorAll('nav.menu > ul > li')
      for (var i = 0; i <liTags.length; i++) {
        //我想获取到我点的是哪一个，这是一个mouse事件
        liTags[i].onmouseenter = function(x){
          x.currentTarget.classList.add('active')
        }
        liTags[i].onmouseleave = function(x){
          x.currentTarget.classList.remove('active')
        }
      }
}.call()
      