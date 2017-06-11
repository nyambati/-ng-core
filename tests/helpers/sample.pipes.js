import { Pipe } from '../../';
@Pipe({ name: 'my-pipe1' })
export class Filter1 {
  transform() { }
}

@Pipe({ name: 'my-pipe2' })
export class Filter2 {
  transform() { }
}

@Pipe({ name: 'my-pipe3' })
export class Filter3 {
  transform() { }
}
