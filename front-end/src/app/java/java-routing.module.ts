import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {JavaComponent} from './java.component';
import {JVMArchitectureComponent} from './jvmarchitecture/jvmarchitecture.component';
import {JavaCoreComponent} from './java-core/java-core.component';
import {JavaObjectComponent} from './java-object/java-object.component';
import {JavaClassComponent} from './java-class/java-class.component';

const routes: Routes = [{
  path: '',
  component: JavaComponent,
  children: [
    { path: '', component: JavaComponent},
    { path: 'jvm-architecture', component: JVMArchitectureComponent},
    {
      path: 'java-core', children: [
        {path: '', component: JavaCoreComponent},
        {path: 'object', component: JavaObjectComponent},
        {path: 'class', component: JavaClassComponent}
        ],
    },
    {
      path: 'java-advance', component: JavaComponent
    }, {
      path: 'concurrency',
      children: [
        {path: '', component: JavaComponent},
      ]
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavaRoutingModule { }
