import { NgModule, bootstrap } from '../../';
import { NewApp, MyDirective, MyService, StringReverse } from './component'

@NgModule({
  name: 'ng-redux',
  components: [NewApp],
  directives: [MyDirective],
  pipes: [StringReverse],
  providers: [MyService]
})

export default class App { }

bootstrap(App.name);
