!function(){
  window.addEventListener('scroll',function(x){
        let specialTags =document.querySelectorAll('[data-x]')
        var minIndex = 0
        for (var i = 1; i <specialTags.length; i++) {
          if (Math.abs(specialTags[i].offsetTop-window.scrollY)<
            Math.abs(specialTags[minIndex].offsetTop-window.scrollY)){
            minIndex = i
          }
        }
        let id = specialTags[minIndex].id
        let a = document.querySelector('a[href="#'+id+'"]')
        let li = a.parentNode
        //找到所有li标签和它本身
        let brotherAndMe = li.parentNode.children
        //去除高亮元素
        for (var i = 0; i < brotherAndMe.length; i++) {
          brotherAndMe[i].classList.remove('heightlight')
        }
        li.classList.add('heightlight')
      }) 
}.call()