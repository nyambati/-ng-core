import benv from 'benv';
import { expect } from 'chai';

before(done => {
  benv.setup(() => {
    benv.expose({
      angular: benv.require('../../node_modules/angular/angular.js', 'angular')
    });
    done();
  })
});

import { NgModule } from '../../';
describe('@NgModule', () => {

  it('Should create an Angular module', function () {
    @NgModule({
      name: 'ng-test'
    })

    class App { }

    expect(App.name).to.eq('ng-test');
    expect(App.config).to.be.a('function');
    expect(App.component).to.be.a('function');
    expect(App.directive).to.be.a('function');
    expect(App.service).to.be.a('function');
    expect(App.run).to.be.a('function');
    expect(App.controller).to.be.a('function');
  });
});
