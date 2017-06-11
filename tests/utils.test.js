import { expect } from 'chai';
import { App } from './helpers/test.utils';
import {
  MyComponent1,
  MyComponent2,
  MyComponent3,
} from './helpers/sample.components';
import {
  MyDirective1,
  MyDirective2,
  MyDirective3,
} from './helpers/sample.directives';
import {
  Filter1,
  Filter2,
  Filter3,
} from './helpers/sample.pipes';

import {
  MyInjectableService1,
  MyInjectableService2,
  MyInjectableService3,
} from './helpers/sample.service';
import {
  mapComponentsToModule,
  mapDirectivesToModule,
  mapPipesToModule,
  mapServicesToModule,
} from '../lib/utils';

const app = new App();

describe('mapComponentsToModule', () => {
  const components = mapComponentsToModule(app, [MyComponent1, MyComponent2, MyComponent3])
    .components;

  it('Should register all the components passed to it', () => {
    expect(Array.isArray(components)).to.equal(true);
    expect(components.length).to.eq(3);
  });

  it('should have 3 components of names  myComponent1 myComponent2 and myComponent3', () => {
    components.forEach((component, index) => {
      expect(component.name).to.eq(`myComponent${index + 1}`);
      expect(component.config).to.exist;
      expect(component.config).to.be.an('object');
    });
  });
});

describe('mapDirectivesToModule', () => {
  const directives = mapDirectivesToModule(app, [MyDirective1, MyDirective2, MyDirective3])
    .directives;

  it('Should register all the directives passed to it', () => {
    expect(Array.isArray(directives)).to.equal(true);
    expect(directives.length).to.eq(3);
  });

  it('should have 3 directives of names  myDirective1 myDirective2 and myDirective3', () => {
    directives.forEach((directive, index) => {
      expect(directive.selector).to.eq(`myDirective${index + 1}`);
      expect(directive.classFn).to.exist;
      expect(directive.classFn).to.be.an('function');
    });
  });
});


describe('mapPipesToModule', () => {
  const pipes = mapPipesToModule(app, [Filter1, Filter2, Filter3])
    .pipes;

  it('Should register all the pipes passed to it', () => {
    expect(Array.isArray(pipes)).to.equal(true);
    expect(pipes.length).to.eq(3);
  });

  it('should have 3 pipes of names  my-pipe-1 my-pipe-2 and my-pipe-3', () => {
    pipes.forEach((pipe, index) => {
      expect(pipe.name).to.eq(`my-pipe${index + 1}`);
      expect(pipe.transform).to.exist;
      expect(pipe.transform).to.be.an('function');
    });
  });
});


describe('mapServicesToModule', () => {
  const providers = mapServicesToModule(app, [MyInjectableService1, MyInjectableService2, MyInjectableService3])
    .providers;

  it('Should register all the providers passed to it', () => {
    expect(Array.isArray(providers)).to.equal(true);
    expect(providers.length).to.eq(3);
  });

  it('should have 3 providers of names  MyInjectableService1 MyInjectableService2 and MyInjectableService3', () => {
    providers.forEach((provider, index) => {
      expect(provider.name).to.eq(`MyInjectableService${index + 1}`);
      expect(provider.classFn).to.exist;
      expect(provider.classFn).to.be.an('function');
    });
  });
});
