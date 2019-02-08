import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translation-showcase',
  styleUrls: ['./translation-showcase.component.scss'],
  template: `
                <section class="section">
                    <div class="container">
                        <div class="columns has-text-centered">
                            <div class="column">
                                <div class="select">
                                    <select (change)="onLanguageSelect($event)"
                                            [value]="translator.currentLang">
                                        <option *ngFor="let lang of translator.getLangs()"
                                                [value]="lang">{{'lang.' + lang | translate}}</option>
                                    </select>
                                </div>
                                <hr>
                                <h1 class="title">{{'overview.title' | translate}}</h1>
                                <h4 class="subtitle">{{'overview.subtitle' | translate}}</h4>
                            </div>
                        </div>
                    </div>
                </section>`
})
export class TranslationShowcaseComponent implements OnInit {

  constructor(public translator: TranslateService) {
  }

  ngOnInit() {
  }

  public onLanguageSelect($event) {
    const newLang = $event.target.value;
    console.log('ttans', this.translator);
    this.translator.use(newLang);
    console.log(this.translator.instant('header.welcome'));
  }
}
