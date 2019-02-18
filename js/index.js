new Vue({
    el: "#app",
    data: {
        todos: [{
                id: 1,
                content: '今天学了什么？',
                f: true
            },
            {
                id: 2,
                content: '我不知道啊',
                f: true
            },
            {
                id: 3,
                content: '你知道吗？',
                f: true
            }
        ],
        inputContent: '',
        modelShow: false,
        wraning: false,
        itemIndex: -1,
        navBars: [{
                id: 1,
                nav: 'A',
                style: 'all'
            },
            {
                id: 2,
                nav: 'F',
                style: 'finish'
            },
            {
                id: 3,
                nav: 'U',
                style: 'unfinish'
            }
        ],
        type: 'A',
        // allFlag:true
    },
    methods: {
        changeF(index) {
            return this.todos[index].f = !this.todos[index].f;
        },
        addItem() {
            this.modelShow = !this.modelShow;
            return this.todos.push({
                id: this.todos.length + 1,
                content: this.inputContent,
                f: true
            });
            // this.inputContent = ''; //return只能一个返回值
        },
        clearContent() {
            return this.inputContent = '';
        },
        checkItem(index) {
            if (this.todos[index].f) {
                this.itemIndex = index;
                return this.remove(this.itemIndex);
            } else {
                return this.wraning = true;
            }
        },
        remove(index) {
            // this.itemIndex = index;
            return this.todos.splice(this.itemIndex, 1);
        },
        // allFlagCheck(){
        //     this.allFlag=!this.allFlag;
        // }
    },
    computed: {
        finished() {
            return this.todos.filter(function(item) {
                return item.f ? item : false
            })
        },
        unFinished() {
            return this.todos.filter(function(item) {
                return !item.f ? item : false
            })
        },
        newTodos() {
            switch (this.type) {
                case "A":
                    return this.todos
                    break;
                case "F":
                    return this.finished
                    break;
                case "U":
                    return this.unFinished
                    break;
            }
        }
    }
})