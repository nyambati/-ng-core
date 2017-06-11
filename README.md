## ng-core
This project contains AngularJs 1.5.x Decorators that enables you to build your AngularJs application with ES2015+ features.

The decorators have been designed to mirror Angular2+, therefore makes it compatible and easly migrated to Angular2.

API

The following project exposes the following APIs for usage
 - bootstrap
 - NgModule
 - Directive
 - Component
 - Injectable (services)
 - Pipe (Filters)


 Usage:

 bootstrap : This method is used to dynamically bootstrap AngularJs app. It is a wrapper of angular.bootstrap method

 syntax:
 ```js
bootstrap(<app name>)
```

 ```js

import {bootstrap} from 'ng-core'



bootstrap('app')

 ```

 NgModule: This method is a wrapper to angular.module(), it enables you to defined modules, this method can be used alongside bootstrap method.

syntax:
```js
@NgModule(<config>)
```
example

```js
import {NgModule, bootstrap} from 'ng-core;

@NgModule({
  name:'app'
})

export class App {}

bootstrap(App.name)

```
NgModule takes the following properties as config
  - modules
  - components
  - directives
  - providers aka services
  - pipes aka filters

```js

import {NgModule, bootstrap} from 'ng-core';
import UiRouter from '@angularjs/router';
import AppComponent from './components/AppComponent';
import UserService from './services/UserService';
import Reverse from './pipes/Reverse';
import UserDirective from './UserDirective';

@NgModule({
  name:'app',
  modules:[UiRouter],
  components:[AppComponent],
  directives:[UserDirective],
  pipes:[Reverse],
  providers:[UserService]
})

export class App {}

bootstrap(App.name)

```

Component: this is a wrapper of angular.component() method, the confuration object is the same as angular.component with exclusion of controller and introduction of selector property.

syntax
```js
@Component(<config>)
```

```js
import {Component} from 'ng-core'

@Component({
  selector:'my-app',
  bindings:{}
})

export class MyApp {}

```

Directive: this is wrapper of the angular.directive()


syntax
```js
@Directive(<config>)
```

```js
import {Directive} from 'ng-core'

@Directive({
  selector:'my-directive'
})

export class MyDirective {
  render() {
    
  }
}

```

Pipe: this a wrapper of angular.filter() method

syntax
```js
@Pipe(<config>)
```

```js
import {Pipe} from 'ng-core'

@Pipe({
  name:'filter'
})

export class MyFilter {}

```






