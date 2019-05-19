import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavaRoutingModule } from './java-routing.module';
import { JVMArchitectureComponent } from './jvmarchitecture/jvmarchitecture.component';
import { JavaCoreComponent } from './java-core/java-core.component';
import { JavaObjectComponent } from './java-object/java-object.component';
import { JavaClassComponent } from './java-class/java-class.component';
import {JavaComponent} from './java.component';

@NgModule({
  declarations: [
    JavaComponent,
    JVMArchitectureComponent,
    JavaCoreComponent,
    JavaObjectComponent,
    JavaClassComponent
  ], imports: [
    CommonModule,
    JavaRoutingModule
  ]
})
export class JavaModule {
}
