/**
 * Created by gregoire on 24/03/2016.
 */
import {Component} from 'angular2/core'

@Component({
    selector: 'greeter',
    template: `
        Name <input #name [value]="v" (keyup)="true">
        <button (click)="showName(name.value)">Click me</button>
        <div>Welcome, {{name.value}}</div>
    `
})
export class Greeter {
    constructor() {
        this.v = 'Mouhahahaha'
    }
    showName(name) {
        alert(`Welcome, ${name}`)
        this.v = ''
    }
}