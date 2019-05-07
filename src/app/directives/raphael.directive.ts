import {Directive, ElementRef, Input, OnInit} from '@angular/core';

export interface IColorPart {
  color: string;
  value: number;
}

@Directive({
  selector: '[appRaphael]'
})

export class RaphaelDirective implements OnInit {
  @Input() customData: IColorPart[];
  nativeElement = null;

  constructor(private  el: ElementRef) {
    console.log(el);
    this.nativeElement = el.nativeElement;
  }

  ngOnInit(): void {
    // @ts-ignore
    const paper = new Raphael(this.nativeElement, 300, 300);
    // paper.circle(100, 100, 120).attr('fill', 'red');

    console.log(this.customData);
    let x = 0;
    const barW = 300 / this.customData.length - 10;
    const barH = 280;

    for (const data of this.customData) {
      const height = data.value * (280 / 10);
      const bar = paper.rect(x, barH - height, barW, height).attr('fill', data.color);

      bar.click(() => {
        data.value += 2;
        const newHeight = data.value * (280 / 10);
        bar.attr('y', barH - newHeight);
        bar.attr('height', newHeight);
      });

      x += barW + 10;
    }
  }



}
