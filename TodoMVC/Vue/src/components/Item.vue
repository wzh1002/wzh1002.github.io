<template>
    <li :class="{ completed: todo.completed, editing: editing === todo}">
        <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed">
            <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
            <button class="destroy" @click="removeTodo(todo)"></button>
        </div>
        <input class="edit" type="text" v-model="todo.title" ref="input" @blur="doneEdit(todo)" @keyup.enter="doneEdit(todo)" @keyup.esc="cancelEdit(todo)">
    </li>
</template>
<script type="text/ecmascript-6">
    import bus from '../bus';

    export default {
        props: ['todo', 'editing'],
        methods: {
            editTodo: function(todo) {
                bus.$emit('editTodo', todo);

                let input = this.$refs.input;
                setTimeout(function() {
                    input.focus();
                    input.setSelectionRange(input.value.length, input.value.length);
                }, 0);
            },
            doneEdit: function(todo) {
                bus.$emit('doneEdit', todo);
            },
            cancelEdit: function(todo) {
                bus.$emit('cancelEdit', todo);
            },
            removeTodo: function(todo) {
                bus.$emit('removeTodo', todo)
            }
        }
    }
</script>