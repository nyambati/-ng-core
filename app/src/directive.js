import { Directive } from '../../';

@Directive({ selector: 'my-directive' })

export default class MyDirective {
  render() {
    return {
      template: 'I am a directive'
    }
  }
}
