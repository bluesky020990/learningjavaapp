import {Directive, ElementRef, Input, NgZone, OnInit} from '@angular/core';

declare const Raphael: any;


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

  constructor(private  el: ElementRef, private zone: NgZone) {
    this.nativeElement = el.nativeElement;
  }

  ngOnInit(): void {
    const nativeElement = this.nativeElement;
    const customData = this.customData;

    const paper = new Raphael(nativeElement, 300, 300);
    // paper.circle(100, 100, 120).attr('fill', 'red');

    let x = 0;
    const barW = 300 / customData.length - 10;
    const barH = 280;

    for (const data of customData) {
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



