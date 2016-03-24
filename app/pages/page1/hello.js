/**
 * Created by gregoire on 24/03/2016.
 */
import {Component, Input} from 'angular2/core'

@Component({
    selector: 'hello', // Element HTML qui permettra d'utiliser le composant
    template: `<h2>{{message}} {{name}} !</h2>`,
    inputs: ['name']
})
export class Hello {
    constructor(){
        this.message = 'Hello'
    }
}