import { expect } from 'chai';
import { Directive } from '../';


describe('@Directive Decorator', () => {
  context('When the @Directive decorator is used', () => {
    @Directive({
      selector: 'my-directive'
    })

    class MyDirective {
      render() {
        return {
          template: 'some info'
        }
      }
    }

    it('Should execute successfully', () => {
      expect(MyDirective).to.exist;
    });

    it('Should transform MyDirective class into an Object', () => {
      expect(MyDirective).to.be.an('object');
    });

    it('Should tranform contain required object propeties', () => {
      expect(MyDirective.selector).to.eq('my-directive');
      expect(MyDirective.render).to.exist;
      expect(MyDirective.render).to.be.a('function');
      expect(MyDirective.render()).to.deep.eql({ template: 'some info' })
    });
  });

  context('When @Directive is used without selector property', () => {
    @Directive()

    class MyDirective { }
    it('Should use controller name as default selector', () => {
      expect(MyDirective.selector).to.eq('MyDirective');
    })
  })
});
