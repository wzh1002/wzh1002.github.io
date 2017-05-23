<template>
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?" v-model="newTodo" @keyup.enter="addTodo">
      </header>
      <section class="main" v-show="todos.length">
        <input class="toggle-all" type="checkbox" v-model="allDone">
        <ul class="todo-list">
          <li is="todo-item" v-for="todo in filteredTodos" :todo="todo" :key="todo.key" :editing="editing"></li>
        </ul>
      </section>
      <todo-footer :todos="todos" :remaining="remaining" :visibility="visibility"></todo-footer>
    </section>
</template>

<script type="text/ecmascript-6">
  import todoItem from './Item.vue';
  import todoFooter from './Footer.vue';
  import bus from '../bus';
  import utils from '../utils';

  let uuid = utils.uuid, filters = utils.filters, save = utils.save, fetch = utils.fetch;


  export default {
    name: 'app',
    data: function() {
      return {
        todos: fetch(),
        newTodo: '',
        editing: null,
        visibility: 'all'
      }
    },
    watch: {
      todos: {
        deep: true,
        handler: save
      }
    },
    computed: {
      filteredTodos: function () {
        return filters[this.visibility](this.todos);
      },
      remaining: function () {
        return filters.active(this.todos).length;
      },
      allDone: {
        get: function () {
          return this.remaining === 0;
        },
        set: function (value) {
          this.todos.forEach((todo) => todo.completed = value);
        }
      }
    },
    created: function() {
      bus.$on('editTodo', this.editTodo);
      bus.$on('doneEdit', this.doneEdit);
      bus.$on('cancelEdit', this.cancelEdit);
      bus.$on('removeTodo', this.removeTodo);
      bus.$on('removeCompleted', this.removeCompleted);
      bus.$on('router', this.setVisibility);
    },
    methods: {
      addTodo: function() {
        this.todos.push({
          id: uuid(),
          title: this.newTodo && this.newTodo.trim(),
          completed: false
        });
        this.newTodo = '';
      },
      removeTodo: function(todo) {
        let index = this.todos.indexOf(todo);
        if (index > -1) {
          this.todos.splice(this.todos.indexOf(todo), 1);
        }
      },
      editTodo: function(todo) {
        this.beforeEditCache = todo.title;
        this.editing = todo;
      },
      doneEdit: function(todo) {
        this.editing = null;
        if (!todo.title.trim()) {
          this.removeTodo(todo);
        }
      },
      cancelEdit: function(todo) {
        this.editing = null;
        todo.title = this.beforeEditCache;
      },
      removeCompleted: function() {
        this.todos = filters.active(this.todos);
      },
      setVisibility: function(visibility) {
        this.visibility = visibility;
      }
    },
    components: {
      todoItem,
      todoFooter
    }
  }
</script>
