import { TranslateLoader, TranslationObject } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import * as TranslationsPL from '../public/i18n/pl.json';
import * as TranslationsEN from '../public/i18n/en.json';

// interface Translation {
//     [key: string]: string | Translation;
// }

const TRANSLATIONS: TranslationObject = {
    en: TranslationsEN,
    pl: TranslationsPL
};

export class StaticTranslationLoader implements TranslateLoader {

    public getTranslation(lang: string): Observable<TranslationObject> {
        const translation = TRANSLATIONS[lang];
        if (translation) {
            return of(translation);
        } else {
            console.error(`Unknown language: ${lang}`);

            return of({});
        }
    }
}