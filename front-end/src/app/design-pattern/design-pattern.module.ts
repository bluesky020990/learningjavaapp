import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DesignPatternComponent} from './design-pattern.component';
import { DesignPatternOverviewComponent } from './design-pattern-overview/design-pattern-overview.component';
import { FactoryPatternComponent } from './creational/factory-pattern/factory-pattern.component';
import { AbstractFactoryPatternComponent } from './creational/abstract-factory-pattern/abstract-factory-pattern.component';
import { SingletonPatternComponent } from './creational/singleton-pattern/singleton-pattern.component';
import { BuilderPatternComponent } from './creational/builder-pattern/builder-pattern.component';
import { PrototypePatternComponent } from './creational/prototype-pattern/prototype-pattern.component';

import { AdapterPatternComponent } from './structural/adapter-pattern/adapter-pattern.component';
import { BridgePatternComponent } from './structural/bridge-pattern/bridge-pattern.component';
import { CompositePatternComponent } from './structural/composite-pattern/composite-pattern.component';
import { DecoratePatternComponent } from './structural/decorate-pattern/decorate-pattern.component';
import { FacadePatternComponent } from './structural/facade-pattern/facade-pattern.component';
import { FlyweightPatternComponent } from './structural/flyweight-pattern/flyweight-pattern.component';
import { ProxyPatternComponent } from './structural/proxy-pattern/proxy-pattern.component';

import { CoRPatternComponent } from './behavioral/co-rpattern/co-rpattern.component';
import { CommandPatternComponent } from './behavioral/command-pattern/command-pattern.component';
import { InterpreterPatternComponent } from './behavioral/interpreter-pattern/interpreter-pattern.component';
import { MediatorPatternComponent } from './behavioral/mediator-pattern/mediator-pattern.component';
import { MementoPatternComponent } from './behavioral/memento-pattern/memento-pattern.component';
import { ObserverPatternComponent } from './behavioral/observer-pattern/observer-pattern.component';
import { StatePatternComponent } from './behavioral/state-pattern/state-pattern.component';
import { TemplatePatternComponent } from './behavioral/template-pattern/template-pattern.component';
import { StrategiesPatternComponent } from './behavioral/strategies-pattern/strategies-pattern.component';
import { VisitorPatternComponent } from './behavioral/visitor-pattern/visitor-pattern.component';

import { DependencyInjectionPatternComponent } from './advance/dependency-injection-pattern/dependency-injection-pattern.component';
import { ModelAndViewPatternComponent } from './advance/model-and-view-pattern/model-and-view-pattern.component';
import { ObjectPoolPatternComponent } from './creational/object-pool-pattern/object-pool-pattern.component';
import { FilterPatternComponent } from './structural/filter-pattern/filter-pattern.component';
import {IteratorPatternComponent} from "./behavioral/iterator-pattern/iterator-pattern.component";

const routing: Routes = [{
  path: '',
  component: DesignPatternComponent,
  children: [
    { path: 'overview', component: DesignPatternOverviewComponent},

    { path: 'factory', component: FactoryPatternComponent},
    { path: 'abstract-factory', component: AbstractFactoryPatternComponent},
    { path: 'singleton', component: SingletonPatternComponent},
    { path: 'builder', component: BuilderPatternComponent},
    { path: 'prototype', component: PrototypePatternComponent},
    { path: 'object-pool', component: ObjectPoolPatternComponent},

    { path: 'adapter', component: AdapterPatternComponent},
    { path: 'bridge', component: BridgePatternComponent},
    { path: 'composite', component: CompositePatternComponent},
    { path: 'decorate', component: DecoratePatternComponent},
    { path: 'facade', component: FacadePatternComponent},
    { path: 'filter', component: FilterPatternComponent},
    
    { path: 'flyweight', component: FlyweightPatternComponent},
    { path: 'proxy', component: ProxyPatternComponent},

    { path: 'chain-of-responsibility', component: CoRPatternComponent},
    { path: 'command', component: CommandPatternComponent},
    { path: 'interpreter', component: InterpreterPatternComponent},
    { path: 'iterator', component: IteratorPatternComponent},
    { path: 'mediator', component: MediatorPatternComponent},
    { path: 'memento', component: MementoPatternComponent},
    { path: 'observer', component: ObserverPatternComponent},
    { path: 'state', component: StatePatternComponent},
    { path: 'template', component: TemplatePatternComponent},
    { path: 'strategies', component: StrategiesPatternComponent},
    { path: 'visitor', component: VisitorPatternComponent},

    { path: 'dependence-injection', component: DependencyInjectionPatternComponent},
    { path: 'mvc', component: ModelAndViewPatternComponent},
    ]
}];

const Routing: ModuleWithProviders = RouterModule.forChild(routing);

@NgModule({
  declarations: [
    DesignPatternComponent,
    DesignPatternOverviewComponent,
    FactoryPatternComponent,
    AbstractFactoryPatternComponent,
    SingletonPatternComponent,
    BuilderPatternComponent,
    PrototypePatternComponent,
    AdapterPatternComponent,
    BridgePatternComponent,
    CompositePatternComponent,
    DecoratePatternComponent,
    FacadePatternComponent,
    FlyweightPatternComponent,
    ProxyPatternComponent,
    CoRPatternComponent,
    CommandPatternComponent,
    InterpreterPatternComponent,
    IteratorPatternComponent,
    MediatorPatternComponent,
    MementoPatternComponent,
    ObserverPatternComponent,
    StatePatternComponent,
    TemplatePatternComponent,
    StrategiesPatternComponent,
    VisitorPatternComponent,
    DependencyInjectionPatternComponent,
    ModelAndViewPatternComponent,
    ObjectPoolPatternComponent,
    FilterPatternComponent
  ],
  imports: [
    CommonModule,
    Routing
  ]
})
export class DesignPatternModule { }
