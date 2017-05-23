<template>
    <footer class="footer" v-show="todos.length">
        <span class="todo-count">
            <strong v-text="remaining"></strong> {{ remaining === 1 ? 'item' : 'items' }} left
        </span>
        <ul class="filters">
            <li><a href="#/all" :class="{selected: visibility == 'all'}">All</a></li>
            <li><a href="#/active" :class="{selected: visibility == 'active'}">Active</a></li>
            <li><a href="#/completed" :class="{selected: visibility == 'completed'}">Completed</a></li>
        </ul>
        <button class="clear-completed" @click="removeCompleted" v-show="todos.length > remaining">
            Clear completed
        </button>
    </footer>
</template>

<script type="text/ecmascript-6">
    import bus from '../bus';

    export default {
        props: ['todos', 'remaining', 'visibility'],
        methods: {
            removeCompleted: function() {
                bus.$emit('removeCompleted');
            }
        }
    }
</script>