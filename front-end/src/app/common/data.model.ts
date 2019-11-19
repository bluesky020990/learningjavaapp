export interface LessonMappingI{
  path: string;
  name: string;
  displayOrder;
  children;
}

export class LessonMapping implements LessonMappingI{
  path: string;
  name: string;
  displayOrder;
  children: LessonMapping[];

  constructor(path: string, name: string, displayOrder, children: LessonMapping[]) {
    this.path = path;
    this.name = name;
    this.displayOrder = displayOrder;
    this.children = children;
  }

}

export class LessonCategory extends LessonMapping{
  category: string;

  constructor(path: string, name: string, displayOrder, category: string, children: LessonMapping[]) {
    super(path, name, displayOrder, children);
    this.category = category;
  }
}
