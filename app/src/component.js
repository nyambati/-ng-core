import { Component, Directive, Injectable, Pipe } from '../../';

@Component({
  selector: 'new-app',
  template: `<h1> {{$ctrl.greeting | reverse }}, Some app is going down</h1>`
})

export default class NewApp {
  constructor(MyService) {
    this.greeting = MyService.sayHello('Thomas')
  }
}

