import { Injectable } from '../../';

@Injectable()

export default class MyService {
  sayHello(name) {
    return `Hello, ${name}`
  }
}
