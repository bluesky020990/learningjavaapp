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

