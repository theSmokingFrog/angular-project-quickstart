import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MissingTranslationHandler, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { assetsTranslationLoader, configureTranslations, MissingTranslations } from './app-translation.bootstrap';
import { AppRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports:      [
    BrowserModule,
    AppRouting,
    CoreModule,
    TranslateModule.forRoot({
      loader:                    {
        provide:    TranslateLoader,
        useFactory: assetsTranslationLoader,
        deps:       [HttpClient]
      },
      missingTranslationHandler: {
        provide:  MissingTranslationHandler,
        useClass: MissingTranslations
      },
      useDefaultLang:            false
    })
  ],
  providers:    [],
  bootstrap:    [AppComponent]
})
export class AppModule {
  constructor(private translator: TranslateService) {
    configureTranslations(translator);
  }
}
