import {LessonCategory, LessonMapping, LessonMappingI} from "../common/data.model";
import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
import {LessonMenuService} from "../common/lesson-menu.service";

// <dl>
//   <dt></dt>
// <dd>Quản lý việc tạo ra các đối tượng.</dd>
//
// <dt>Structural Patterns</dt>
// <dd>Tạo ra 1 Class/1 method dựa trên Class đã có</dd>
//
// <dt>Structural Patterns</dt>
// <dd>Giao tiếp giữa các đối tượng</dd>
// </dl>

const MAP_LESSON_DATA = [
  new LessonMapping('overview', "Overview",  1, null),
  new LessonCategory('Factory Pattern', "Factory Pattern",  1,  'Creational Patterns', null),
  new LessonMapping('factory', "Factory Method Pattern",  2, null),
  new LessonMapping('abstract-factory', "Abstract Factory",  3, null),
  new LessonMapping('singleton', "Singleton",  4, [new LessonMapping('singleton', "Singleton",  4, null)]),
  new LessonMapping('builder', "Builder",  5, null),
  new LessonMapping('prototype', "Prototype",  6, null),
  new LessonMapping('object-pool', "Object Pools",  7, null),

  new LessonCategory('', "Factory Pattern",  1, 'Structural Patterns', null),
  new LessonMapping('adapter', "Adapter",  8, null),
  new LessonMapping('bridge', "Bridge",  9, null),
  new LessonMapping('composite', "Composite",  10, null),
  new LessonMapping('decorate', "Decorate",  11, null),
  new LessonMapping('facade', "Facade",  12, null),
  new LessonMapping('filter', "Filter",  13, null),
  new LessonMapping('flyweight', "Flyweight",  14, null),
  new LessonMapping('proxy', "Proxy",  15, null),

  new LessonCategory('', "Structural Patterns",  1, 'Structural Patterns', null),
  new LessonMapping('chain-of-responsibility', "Chain Of Responsibility",  16, null),
  new LessonMapping('command', "Command",  17, null),
  new LessonMapping('interpreter', "Interpreter",  18, null),
  new LessonMapping('iterator', "Iterator",  19, null),
  new LessonMapping('mediator', "Mediator",  21, null),
  new LessonMapping('memento', "Memento",  21, null),
  new LessonMapping('null-object', "Null Object",  22, null),
  new LessonMapping('observer', "Observer",  23, null),
  new LessonMapping('state', "State",  24, null),
  new LessonMapping('strategies', "Strategies",  25, null),
  new LessonMapping('template', "Template",  26, null),
  new LessonMapping('visitor', "Visitor",  27, null),
  new LessonMapping('dependence-injection', "Dependence Injection",  28, null),
  new LessonMapping('mvc', "Modal and View",  29, null)
];

@Injectable({
  providedIn: 'root'
})

export class DesignPatternService extends LessonMenuService{
  currentLesson: LessonMappingI = null;

  constructor() {
    super();
  }

  getListLesson(): Observable<LessonMappingI[]> {
    return of(MAP_LESSON_DATA);
  }
}
