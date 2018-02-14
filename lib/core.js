import init from "./utils";

/**
 * NgModules : angular.module wrapper
 *  Usage:
 *  @NgModule({
 *    name:'app',
 *    modules:'[],
 *    directives:[],
 *    components:[],
 *    providers:[]
 * })
 *
 *export  class App {}
 * @param {Object} config
 */

export function NgModule(config) {
  const modules = config.modules || [];
  const app = angular.module(config.name, modules);
  return function() {
    return init(app, config);
  };
}

/**
 * Component : Angular 1.5 component decorator
 * Usage:
 *  @Component({
 *     template: `<h1>something cool here</h1>`,
 *     bindings: {},
 *    selector:'my-selector'
 * })
 * @param {*Object} config
 */

export function Component(config) {
  return function(target) {
    const selector = config.selector || target.name;
    return Object.assign({}, config, { selector, controller: target });
  };
}

/**
 * Directive
 *
 *  Usage:
 *  @Directive({selector:'my-directive'})
 *  export class Directive{
 *    render() {
 *    return {}
 * }
 * }
 * @param {Object} config
 */

export function Directive(config) {
  return function(Target) {
    const selector = config ? config.selector : Target.name;
    return Object.assign({}, config, { selector, render: new Target().render });
  };
}

/**
 * bootstrap: Bootstraos the Angular application
 * Usage:
 *  bootstrap('AngularAppName')
 *
 * @param {String} name
 */

export function bootstrap(name) {
  return angular.element(document).ready(function() {
    return angular.bootstrap(document, [name]);
  });
}

/**
 * Pipe  also Known as filters
 * Usage:
 * @Pipe({name:'filter'})
 * export default class Filter {
 *    transform() {}
 * }
 *
 * @param {Object} config
 */

export function Pipe(config) {
  return function(Target) {
    return Object.assign({}, config, { transform: new Target().transform });
  };
}

/**
 * Injectable
 * Usage
 * @injectable()
 * export class Service {}
 * @param {String} indentifier
 */

export function Injectable(indentifier) {
  return function(classFn) {
    const name = indentifier || classFn.name;
    return Object.assign({}, { name, classFn });
  };
}
