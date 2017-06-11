import { expect } from 'chai';
import { Pipe } from '../';


describe('@Pipe Decorator', () => {
  context('When the @Pipe decorator is used', () => {
    @Pipe({ name: 'my-pipe' })
    class Filter {
      transform() { }
    }

    it('Should execute successfully', () => {
      expect(Filter).to.exist;
    });

    it('Should transform Filter class into an Object', () => {
      expect(Filter).to.be.an('object');
    });

    it('Should tranform into required object properties', () => {
      expect(Filter.name).to.eq('my-pipe');
      expect(Filter.transform).to.exist;
      expect(Filter.transform).to.be.a('function');
    });
  });
});
