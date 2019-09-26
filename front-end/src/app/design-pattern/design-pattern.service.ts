import {LessonCategory, LessonMapping, LessonMappingI} from "../common/data.model";
import {of} from "rxjs";
import {Injectable} from "@angular/core";

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
  new LessonCategory('Factory Pattern', "Factory Pattern",  1,  'Creational Patterns'),

  new LessonMapping('overview', "Overview",  1),
  new LessonMapping('factory', "Factory Pattern",  2),
  new LessonMapping('abstract-factory', "Abstract Factory",  3),
  new LessonMapping('singleton', "Singleton",  4),
  new LessonMapping('builder', "Builder",  5),
  new LessonMapping('prototype', "Prototype",  6),
  new LessonMapping('object-pool', "Object Pools",  7),

  new LessonCategory('', "Factory Pattern",  1, 'Structural Patterns'),
  new LessonMapping('adapter', "Adapter",  8),
  new LessonMapping('bridge', "Bridge",  9),
  new LessonMapping('composite', "Composite",  10),
  new LessonMapping('decorate', "Decorate",  11),
  new LessonMapping('facade', "Facade",  12),
  new LessonMapping('filter', "Filter",  13),
  new LessonMapping('flyweight', "Flyweight",  14),
  new LessonMapping('proxy', "Proxy",  15),

  new LessonCategory('', "Structural Patterns",  1, 'Structural Patterns'),
  new LessonMapping('chain-of-responsibility', "Chain Of Responsibility",  16),
  new LessonMapping('command', "Command",  17),
  new LessonMapping('interpreter', "Interpreter",  18),
  new LessonMapping('iterator', "Iterator",  19),
  new LessonMapping('mediator', "Mediator",  21),
  new LessonMapping('memento', "Memento",  21),
  new LessonMapping('null-object', "Null Object",  22),
  new LessonMapping('observer', "Observer",  23),
  new LessonMapping('state', "State",  24),
  new LessonMapping('template', "Template",  25),
  new LessonMapping('strategies', "Strategies",  26),
  new LessonMapping('visitor', "Visitor",  27),
  new LessonMapping('dependence-injection', "Dependence Injection",  28),
  new LessonMapping('mvc', "Modal and View",  29)
];

@Injectable({
  providedIn: 'root'
})

export class DesignPatternService {

  currentLesson: LessonMappingI = null;
  constructor() { }

  getListLesson (){
    return of(MAP_LESSON_DATA);
  }

  getCurrentLesson(): LessonMappingI{
    return this.currentLesson;
  }

  setCurrentLesson(currentLesson: LessonMappingI){
    this.currentLesson = currentLesson;
  }
}
