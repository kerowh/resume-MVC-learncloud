//跳转事件
      //第一步，加上锚点
      //自定义一个跳转事件，首先先要去除已有的事件。
      //先要获取到的是我点的是哪个a
      //获取到他的href值
      //根据id来获取这个div
      //获取我当前的位置
      !function(){
        var view = document.querySelector('.topNavBar nav')
        var controller = {
          view:null,
          aTags:null,
          init:function(){
            this.view = view
            this.initAnimate()
            this.bindEvents()
          },

          initAnimate:function(){
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
              }
              requestAnimationFrame(animate);
          },

          scrollToElement: function(element){
              let Top = element.offsetTop
              let currentTop  = window.scrollY
              console.log("currentTop")
              console.log(currentTop)
              let targetTop = Top-80
              console.log("targetTop")
              console.log(targetTop)
              var coords = { y: currentTop };
              let s = targetTop - currentTop//路程
              let t = Math.abs((s/100)*300)
              if (t>500) {t=500}
              //window.scrollTo(0, top -60)
              //跳转的速度太快了，要进行处理
              //1.导入要使用的script
              //2.查到缓动的案例，并修改
               // Start at (0, 0)
              var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
                .to({y: targetTop }, t) // Move to (300, 200) in 1 second.
                .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
                .onUpdate(function() { // Called after tween.js updates 'coords'.
                    window.scrollTo(0, coords.y)
                })
                .start(); // Start the tween immediately.
              },

          bindEvents:function(){
             let aTags = this.view.querySelectorAll('.topNavBar nav>ul>li>a')
             //遍历这个集合并加上点击事件
             for (let i = 0; i<aTags.length; i++) {
                  aTags[i].onclick = (x)=>{
                    console.log("onclick")
                    x.preventDefault()
                    let a = x.currentTarget
                    console.log(a)
                    let href =a.getAttribute('href')             
                    let element = document.querySelector(href)
                    this.scrollToElement(element)
                    
                  }
                }
          },
        }
        controller.init(view)
       
      }.call()
      
      