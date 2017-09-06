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
This is bigger chapter that covers:
1. Example with reactive forms
2. Example with template driven forms
3. Simple custom control and usage in reactive and template driven forms
4. Complex custom control including custom validation and usage in reactive and template driven forms

### My simple control
Example with a control that works fine for both forms: template driven and reactive forms.  
As input value it takes string. Example of usage is available in *Reactive forms examples* and *Template driven forms*.

The *registerOnChange* accepts a callback function which you can call when changes happen so that you can notify the  
outside world that the data model has changed. Note that you call it with the changed data model value.  
The callback function can be set as __declaration__  
  
```typescript
private onChangeCallback: (_: any) => {
};
```
    
in such case we cannot define body of this function (errors in transpile process), or by __definition__  
  
```typescript
private onChangeCallback = (_: any) => {
  console.log("I will never be executed!!!");
};
```  

The *writeValue* is called when we pass something to the control via [(ngModel)] in case of template driven forms
or when we call setValue/patchValue/reset in case of reactive forms.
```typescript
  writeValue(obj: any): void {
    console.log("CVA: writeValue");
    this.viewModel = obj;
  }
```
but in both cases these are __dummy__ functions that are never executed.
In both cases these functions are later provided by Angular itself. It is needed only to be able execute typescript transpile.  

The *registerOnTouched* function accepts a callback function which you can call when you want to set your control to touched.   
This is then managed by Angular by adding the correct touched state and classes to the actual element tag in the DOM. 
Usually we should call this registered function in *onBlur* handler but it is up to specific control implementation.   
```typescript
  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }
  
  onBlur() {
      this.onTouchedCallback();
    };
```
Good example is in *MySuperControlComponent* where we handle control with 2 inputs. In reactive forms example 
we can observe how changes value *untouched* true/false in HeroDetailComponent view.


### My super control
Example with a control that works fine for both forms: template driven and reactive forms.
As input value it takes instance of class.

Here we can distinguish two situations:  
  
Situation A - control uses the same instance of object (view model) that is used in the form.  
In such case there is no need to register fn in *registerOnChange* and *registerOnTouched* because we use the same reference
as in the form (outside world) so the changes are automatically propagated up. This is not the best approach because model in the control
should be encapsulated from the outside (form). 

Situation B - control internally creates deep copy of passed object.
In such case functions *registerOnChange* and *registerOnTouched* must register call back functions.
It is also mandatory to create set/get for every single field to call in set the call back function for change.  
NOTE: the call back function should be called with instance of the whole deep copy object and not with value of single field.  
If we run this with single field value there is no exception but the view model in the outside world change type!!!

To switch between situation A and B use setting __useDeepCopy__ from the MySuperControlComponent.    

__Validation__  
This custom control contains also example with custom validator. First step is to implement interface *Validator*.  
Next step is to create custom validator *MySuperConrolRangeValidator* that is dedicated only for this control but  
it uses shared validator logic *numberRangeValidator*.
If we want support only reactive forms function *validate(c: AbstractControl)* from *Validator* interface can be empty
but it has to exist to not get exception in run time. Usage in reactive forms:  

```typescript
  createForm() {
    this.heroForm = this.fb.group({
      heroName: ['', Validators.required ], // <--- the FormControl called "heroName"
      address: this.fb.group(new Address()),
      secretLairs: this.fb.array([]), // <-- secretLairs as an empty FormArray
      power: '',
      sidekick: '',
      genderAndNumber: [new MySuperControlValue(), MySuperConrolRangeValidator(200, 0)],
      heroNameSimpleCustomControl: ''
    });
  }
```


Links:  

https://netbasal.com/angular-custom-form-controls-made-easy-4f963341c8e2  
https://www.domstamand.com/custom-control-validation-in-angular    
https://blog.thoughtram.io/angular/2016/07/27/custom-form-controls-in-angular-2.html    
https://medium.com/@tarik.nzl/angular-2-custom-form-control-with-validation-json-input-2b4cf9bc2d73  
https://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html  
http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel  
https://www.codeproject.com/Articles/1121101/Angular-custom-component-with-validation-for-ban  
http://blog.rangle.io/angular-2-ngmodel-and-custom-form-components  

### Reactive forms examples
Example with reactive forms including usage of own controls.  
https://angular.io/guide/reactive-forms  
Important classes: FormBuilder, FormGroup, FormControl, FormArray
FormGroup functions:  
1. With *setValue*, you assign every form control value at once
2. With *patchValue*, you can assign values to specific controls in a FormGroup
3. *reset* method has an optional state value so you can reset the flags and the control values at the same time
Includes also example with ControlValueAccessor.  

### Template driven forms 
Example with template driven forms including usage of own controls.  
https://angular.io/guide/forms  

## Date examples

