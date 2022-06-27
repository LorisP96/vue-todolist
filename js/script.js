var app = new Vue({
    el: '#app',
    data: {
        newItem: '',
        todoList : [
            {
                text: 'Fare i compiti',
                done: false
            },
            {
                text: 'Fare la spesa',
                done: true
            },
            {
                text: 'Fare il bucato',
                done: false
            },
        ],
    },
    methods: {
        removeItem(index) {
            this.todoList.splice(index, 1)
        },
        addItem() {
            if (this.newItem.length > 0) {
                this.todoList.push(
                {
                    text: this.newItem,
                    done: false
                });
                this.newItem = '';
            }
        },
        listItemDone(element) {
            // if (element.done === false) {
            //     element.done = true;
            // } else {
            //     element.done = false
            // }
            element.done = element.done === false ? element.done = true : element.done = false;
        }
    }
})