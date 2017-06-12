import { NgModule, bootstrap } from '../../';
import NewApp from './component'
import MyDirective from './directive'
import MyService from './services'
import StringReverse from './pipe'

@NgModule({
  name: 'ng-redux',
  components: [NewApp],
  directives: [MyDirective],
  pipes: [StringReverse],
  providers: [MyService]
})

export default class App { }

bootstrap(App.name);
