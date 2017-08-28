# AngularExamples

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.0-beta.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## How to use Angular translations with aot/prod
* Define atrribute i18n for html tags that you want translate
* Run command *npm run i18n*. It will produce file messages.xlf
* Next go to some tool like http://xliff.brightec.co.uk/ to provide tranlations and generate the output file
* Copy this file to folder .local, use convetion for naming like this messages.pl.xliff
* Next run the build with command *ng build -aot --i18nFile=./locale/messages.pl.xliff --locale=es --i18nFormat=xliff* or for prod run *ng build -prod --i18nFile=./locale/messages.pl.xliff --locale=es --i18nFormat=xliff*

