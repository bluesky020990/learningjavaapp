import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eng-vocabulary-workshop',
  templateUrl: './eng-vocabulary-workshop.component.html',
  styleUrls: ['./eng-vocabulary-workshop.component.scss']
})
export class EngVocabularyWorkshopComponent implements OnInit {
  clothePassage = `
    My sister is asking me what clothes she should wear to go a friend’s party tonight.

        First, she should show off her small watch. It even has a touch screen!

        Should she wear a long dress ? No, it only suits important events.

        What about a formal shirt ? Absolutely not, it will look weird at a party.

        Instead, she should wear a casual T-shirt . She will feel relaxed in it.

        Should she wear tight jeans? Maybe not, they will make her feel uncomfortable.

        A short skirt is better. She can dance freely in it.

        She can’t wear her old shoes, it has badly worn out.

        That’s right! She should wear high heels. They will make her look tall and stylish.

        For accessories, what about a big hat? It can block sunlight, but she can’t wear it to a... night party, can she?

        The pair of new glasses is what she should wear instead.`.replace('\t', '').replace(/ +(?= )/g, '');
  constructor() { }

  ngOnInit() {
  }
}
