import init from './utils';

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

export const NgModule = (config) => {
  const app = angular.module(config.name, config.modules = []);
  return () => init(app, config);
};

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

export const Component = config => (target) => {
  const selector = config.selector || target.name;
  return Object.assign({}, config, { selector, controller: target });
};

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

export const Directive = config => (Target) => {
  const selector = config ? config.selector : Target.name;
  return Object.assign({}, config, { selector, render: new Target().render });
};

/**
 * bootstrap: Bootstraos the Angular application
 * Usage:
 *  bootstrap('AngularAppName')
 *
 * @param {String} name
 */

export const bootstrap = name => angular.element(document)
  .ready(() => angular.bootstrap(document, [name]));

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

export const Pipe = config => Target => Object
  .assign({}, config, { transform: new Target().transform });

/**
 * Injectable
 * Usage
 * @injectable()
 * export class Service {}
 * @param {String} indentifier
 */

export const Injectable = indentifier => (classFn) => {
  const name = indentifier || classFn.name;
  return Object.assign({}, { name, classFn });
};
