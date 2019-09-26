export interface LessonMappingI{
  path: string;
  name: string;
  displayOrder;
}

export class LessonMapping implements LessonMappingI{
  path: string;
  name: string;
  displayOrder;


  constructor(path: string, name: string, displayOrder) {
    this.path = path;
    this.name = name;
    this.displayOrder = displayOrder;
  }
}

export class LessonCategory extends LessonMapping{
  category: string;


  constructor(path: string, name: string, displayOrder, category: string) {
    super(path, name, displayOrder);
    this.category = category;
  }
}
