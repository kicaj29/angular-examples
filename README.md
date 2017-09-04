# AngularExamples

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.0-beta.0.
In this repository you can find variety small angular examples.

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

## Translations
### How to use Angular translations build in Angular CLI with aot/prod
* Define attribute i18n for html tags that you want translate (example is in file app.component.html)
* Run command *npm run i18n*. It will produce file messages.xlf
* Next go to some tool like http://xliff.brightec.co.uk/ to provide translations and generate the output file.
  Like you can see the output file is very similar to input file so it is also easy to provide translations
  without any file.
* Copy this file to folder /locale, use convection for naming like this messages.pl.xliff
* Next run the build with command *ng build -aot --i18nFile=./locale/messages.pl.xliff --locale=es --i18nFormat=xliff* or for prod run *ng build -prod --i18nFile=./locale/messages.pl.xliff --locale=es --i18nFormat=xliff*
* More you can find here https://angular.io/guide/i18n
### How to use ngx-translate
* Import TranslateModule in AppModule. You have to do it also for every lazy loaded module.
* In app.component.html find example where is used pipe *translate*. This is example with ngx translation.
* Provide translations in json file in *locale* folder.
* In AppComponent you can find way of setting default language and changing it.
* More you can find here https://github.com/ngx-translate

## Resolve examples
https://angular.io/api/router/Resolve
https://blog.thoughtram.io/angular/2016/10/10/resolving-route-data-in-angular-2.html

## Http examples
https://keyholesoftware.com/2017/01/09/setting-up-angular-2-mockbackend/
https://angular.io/api/http/testing/MockBackend
http://jasonwatmore.com/post/2016/11/24/angular-2-mockbackend-example-for-backendless-development

## Forms examples
### My super control
Example with a control that works fine for both forms: template driven and reactive forms  
https://netbasal.com/angular-custom-form-controls-made-easy-4f963341c8e2  
https://blog.thoughtram.io/angular/2016/07/27/custom-form-controls-in-angular-2.html    
https://medium.com/@tarik.nzl/angular-2-custom-form-control-with-validation-json-input-2b4cf9bc2d73    
http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel  
### Reactive forms examples
https://angular.io/guide/reactive-forms
Important classes: FormBuilder, FormGroup, FormControl, FormArray
FormGroup functions:
1. With *setValue*, you assign every form control value at once
2. With *patchValue*, you can assign values to specific controls in a FormGroup
3. *reset* method has an optional state value so you can reset the flags and the control values at the same time
Includes also example with ControlValueAccessor.
### Template driven forms 
https://angular.io/guide/forms
## Date examples

