import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MissingTranslationHandler, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { assetsTranslationLoader, configureTranslations, MissingTranslations } from './app-translation.bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports:      [
    BrowserModule,
    AppRoutingModule,
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
