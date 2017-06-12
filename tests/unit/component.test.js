import { expect } from 'chai';
import { Component } from '../../';


describe('@Component Decorator', () => {
  context('When the @Component decorator is used', () => {
    @Component({
      selector: 'my-component',
      bindings: {
        user: '<'
      }
    })

    class MyComponent { }

    it('Should execute successfully', () => {
      expect(MyComponent).to.exist;
    });

    it('Should transform MyComponent class into an Object', () => {
      expect(MyComponent).to.be.an('object');
    });

    it('Should tranform into angular.component() required object', () => {
      expect(MyComponent.selector).to.eq('my-component');
      expect(MyComponent.bindings).to.deep.equal({ user: '<' });
      expect(MyComponent.controller).to.exist;
      expect(MyComponent.controller).to.be.a('function');
    });
  });

  context('When @Compent is used without selector property', () => {
    @Component({
      bindings: {
        user: '<'
      }
    })

    class MyComponent { }
    it('Should use controller name as default selector', () => {
      expect(MyComponent.selector).to.eq('MyComponent');
    })
  })
});
