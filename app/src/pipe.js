import { Pipe } from '../../';

@Pipe({ name: 'reverse' })

export default class StringReverse {
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
