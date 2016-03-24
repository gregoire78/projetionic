/**
 * Created by gregoire on 24/03/2016.
 */
import {Component} from 'angular2/core'

@Component({
    selector: 'todo',
    template: `
        New Todo : <input #todoInput>
        <button (click)="addTodo(todoInput)">
            Add Todo
        </button>
        <h2>Todos</h2>
        <ul>
          <li *ngFor="#todo of todos">{{todo}}</li>
        </ul>
    `
})
export class Todo {
    addTodo(todoInput) {
        this.todos.push(todoInput.value)
        todoInput.value = ''
    }

    constructor() {
        this.todos = [
            'Me promener',
            'Rester au lit',
            'Coder'
        ]
    }
}