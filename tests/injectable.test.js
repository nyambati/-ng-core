import { expect } from 'chai';
import { Injectable } from '../';


describe('@Injectable Decorator', () => {
  context('When the @Injectable decorator is used', () => {
    @Injectable()
    class MyInjectableService {
      sayHello() {
        return 'Hello Iam an injectable'
      }
    }

    it('Should execute successfully', () => {
      expect(MyInjectableService).to.exist;
    });

    it('Should transform MyInjectableService class into an Object', () => {
      expect(MyInjectableService).to.be.an('object');
    });

    it('Should tranform contain required object propeties', () => {
      expect(MyInjectableService.name).to.eq('MyInjectableService');
      expect(MyInjectableService.classFn).to.exist;
      expect(MyInjectableService.classFn).to.be.a('function');
      expect(new MyInjectableService.classFn().sayHello()).to.deep.eql('Hello Iam an injectable')
    });
  });
});
