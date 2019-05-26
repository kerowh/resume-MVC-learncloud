!function(){
    var view = document.querySelector('section.message')

    var model = {
        initAV: function () {
            var APP_ID = 'YHRYNXumFCQUTukhjJ7U8cRL-gzGzoHsz';
            var APP_KEY = 'LAtLqqlwFjlBnnsRGnEEGtQa';

            AV.init({ appId: APP_ID, appKey: APP_KEY });
        },
        fetch:function(){
            var query = new AV.Query('Messsage');
            return query.find()
        },
        save:function(name,content){
            var Messsage = AV.Object.extend('Messsage');
            var messsage = new Messsage();
            return messsage.save({
                'name': name,
                'content': content
            })
        }
    }

    var controller = {
        view: null,
        messageList:null,
        model:null,
        form:null,
        model:null,
        init: function (view,model) {
            this.view = view
            this.model = model

            this.messageList = document.querySelector('#messageList')
            this.form = document.querySelector('#postMessageForm')
            this.model.initAV()
            this.loadMessages()
            this.bindEvents()
        },
        loadMessages:function(){
            this.model.fetch().then( (messsage) =>{
                let array = messsage.map(item => item.attributes)
                //map函数的使用map(item => item的操作)
                array.forEach(element => {
                    let li = document.createElement('li')
                    li.innerText = `${element.name}:${element.content}`
                    this.messageList.appendChild(li)
                })

            }, function (error) {

            })
                .then(() => { }, (error) => {
                    console.log(error)
                })
        },
        bindEvents:function(){ 
            this.form.addEventListener('submit', (e)=>{
                e.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage:function(){
            let myform = this.form
            let name = myform.querySelector('input[name=name]').value
            let content = myform.querySelector('input[name=content]').value
            this.model.save(name,content).then(function (object) {
                alert('留言成功')
                let li = document.createElement('li')
                li.innerText = `${object.attributes.name}:${object.attributes.content}`
                this.messageList.appendChild(li)
            
                myform.querySelector('input[name=name]').value = ' '
                
                myform.querySelector('input[name=content]').value = ' '
            })
        }
    }
    controller.init(view,model)
}.call()