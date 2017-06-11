export class App {
  constructor() {
    this.components = [];
    this.directives = [];
    this.providers = [];
    this.pipes = [];
    this.modules = [];
  }

  module(module) {
    this.modules.push(module);
  }

  component(name, config) {
    this.components.push({ name, config });
  }

  directive(selector, classFn) {
    this.directives.push({ selector, classFn });
  }

  filter(name, transform) {
    this.pipes.push({ name, transform });
  }

  service(name, classFn) {
    this.providers.push({ name, classFn });
  }


}

