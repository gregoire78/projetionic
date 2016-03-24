import {Component} from 'angular2/core'
import {Hello} from './hello'
import {Greeter} from  './greeter'
import {Todo} from './todo'

@Component({
    selector: 'app',
    template: `
        <input #name (keyup)="0">
        <hello [name]=name.value></hello>
        <greeter></greeter>
        <todo></todo>
   `,
    directives: [Hello, Greeter, Todo]
})
export class App {
}