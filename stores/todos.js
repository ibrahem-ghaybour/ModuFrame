import { defineStore } from "pinia";

export const useTodosStore = defineStore("todos", {
  state: () => ({
    todos: [],
  }),

  actions: {
    // addTodo(text) {
    //   if (!text.trim()) return;

    //   this.todos.push({
    //     id: Date.now(),
    //     text: text,
    //     isEditing: false,
    //   });
    // },

    // toggleEdit(todo) {
    //   // If there's another todo being edited, save it first
    //   const currentlyEditing = this.todos.find(t => t.isEditing && t.id !== todo.id);
    //   if (currentlyEditing) {
    //     if (currentlyEditing.text.trim()) {
    //       currentlyEditing.isEditing = false;
    //     }
    //   }

    //   // If currently editing this todo, save changes
    //   if (todo.isEditing) {
    //     if (!todo.text.trim()) return; // Don't save empty text
    //   }
      
    //   // Toggle edit mode for this todo
    //   todo.isEditing = !todo.isEditing;
    // },

    // deleteTodo(id) {
    //   this.todos = this.todos.filter((todo) => todo.id !== id);
    // },

    // reorderTodos(oldIndex, newIndex) {
    //   // Remove the item from the old position
    //   const [movedItem] = this.todos.splice(oldIndex, 1);
    //   // Insert it at the new position
    //   this.todos.splice(newIndex, 0, movedItem);
    // },
  },
});
