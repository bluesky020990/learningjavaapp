import {NgModule} from '@angular/core';
import {BsDropdownModule, PopoverModule} from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PopoverModule.forRoot()
  ],
  exports: [
    BsDropdownModule,
    ModalModule,
    PopoverModule
  ]
})

export class BootstrapModule { }
