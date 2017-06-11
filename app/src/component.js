import { Component, Directive, Injectable, Pipe } from '../../';

@Component({
  selector: 'new-app',
  template: `<h1> {{$ctrl.greeting | reverse }}, Some app is going down</h1>`
})

export class NewApp {
  constructor(MyService) {
    this.greeting = MyService.sayHello('Thomas')
  }
}


@Directive({ selector: 'my-directive' })
export class MyDirective {
  render() {
    return {
      template: 'I am a directive'
    }
  }
}

@Injectable()
export class MyService {
  sayHello(name) {
    return `Hello, ${name}`
  }
}


@Pipe({ name: 'reverse' })
export class StringReverse {
  transform() {
    return (input, uppercase) => {
      const string = input || '';
      let reversedString = '';
      for (let i = 0; i < string.length; i++) {
        reversedString = input.charAt(i) + reversedString;
      }
      // conditional based on optional argument
      if (uppercase) {
        reversedString = reversedString.toUpperCase();
      }
      return reversedString;
    }
  }
}
