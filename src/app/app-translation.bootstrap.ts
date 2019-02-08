import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MissingTranslationHandler, MissingTranslationHandlerParams, TranslateService } from '@ngx-translate/core';

const availableLanguages: string[] = [
  'en',
  'de'
];

export function assetsTranslationLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

export function configureTranslations(translator: TranslateService): void {
  translator.addLangs(availableLanguages);
  // Workaround? reloading the translation works... Would it be more efficient to reload the translations initially?
  //  like with foreach.availableLanguage...
  availableLanguages.forEach(lang => translator.getTranslation(lang).subscribe());

  translator.setDefaultLang(availableLanguages[0]);
  translator.use(translator.getDefaultLang());
}

export class MissingTranslations implements MissingTranslationHandler {
  public handle(params: MissingTranslationHandlerParams): string {
    return `_!${params.key}!_`;
  }
}
