- [AngularExamples](#angularexamples)
  * [Development server](#development-server)
  * [Code scaffolding](#code-scaffolding)
  * [Build](#build)
  * [Running unit tests](#running-unit-tests)
  * [Running end-to-end tests](#running-end-to-end-tests)
  * [Further help](#further-help)
  * [Translations](#translations)
    + [How to use Angular translations build in Angular CLI with aot/prod](#how-to-use-angular-translations-build-in-angular-cli-with-aot-prod)
    + [How to use ngx-translate](#how-to-use-ngx-translate)
  * [Resolve examples](#resolve-examples)
  * [Http examples](#http-examples)
  * [Forms examples](#forms-examples)
    + [My simple control](#my-simple-control)
    + [My super control](#my-super-control)
    + [Reactive forms examples](#reactive-forms-examples)
    + [Template driven forms](#template-driven-forms)
  * [Date examples](#date-examples)
  * [forwardRef examples](#forwardref-examples)
    + [forwardRef in useClass (ClassProvider)](#forwardref-in-useclass--classprovider-)
    + [forwardRef in useExisting (ExistingProvider)](#forwardref-in-useexisting--existingprovider-)
    + [forwardRef in @Inject](#forwardref-in--inject)
  * [Dependency Injection](#dependency-injection)
    + [ExistingProvider - BYPASSING PROVIDERS IN ANGULAR](#existingprovider---bypassing-providers-in-angular)
    + [Multi providers](#multi-providers)
  * [Observables](#observables)
    + [Observable vs Promise](#observable-vs-promise)
    + [unsubscribe(), takeWhile(), takeUntil(), also promise example](#unsubscribe----takewhile----takeuntil----also-promise-example)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

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
1. Simple custom control including multiple custom validators and usage in reactive and template driven forms
2. Complex custom control including multiple custom validators and usage in reactive and template driven forms
2. Example with reactive forms 
4. Example with template driven forms  

### My simple control
Example with a control that works fine for both forms: template driven and reactive forms.  
As input value it takes string. Example of usage is available in *Reactive forms examples* and *Template driven forms*.

__Every custom control must implement interface *ControlValueAccessor*.__

The *registerOnChange* accepts a callback function which you can call when changes happen so that you can notify the  
outside world that the data model has changed. It triggers also validation mechanism. Note that you call it with the changed data model value.  
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

but in both cases they are __dummy__ functions which are only reference to function defined in Angular code.  
Using declaration instead of definition is more intuitive because it better describes fact that this is only reference  
to function defined in Angular code.

The *writeValue* is called when we pass something to the control via [(ngModel)] in case of template driven forms
or when we call *setValue/patchValue/reset* in case of reactive forms.
```typescript
  writeValue(obj: any): void {
    console.log("CVA: writeValue");
    this.viewModel = obj;
  }
```
 

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
Example that shows how to change value *untouched* is available in reactive form *hero-detail.component.html*
```html
<p>Name (simple custom control) untouched: {{ heroForm.get('heroNameSimpleCustomControl').untouched }}</p>
```   
Another example is for control *MySuperControlComponent* also in reactive form *hero-detail.component.html*.

__Validation__    
Example with existing validator is available in template-driven forms (required validator).
*ForbiddenValidatorDirective* is validator that works fine for standard input but also for any custom control that returns string,  
so we can use this validator in *MySimpleControlComponent*.   
__NOTE: it is important to use *useExisting* and not *useClass* in providers.__ With *useClass* we end up with multiple instances of *MySimpleControlComponent* and this would not work because we want validate the same instance that is used in DOM.         
Use *useClass* to see that the constructor is called more than one time!!!   
NOTE1:  The forwardRef breaks the circular reference by having the *MySimpleControlComponent* refer to itself and also we cannot reference to types before their type initialization.   

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
NOTE: If we do not create deep copy __setters from component are not executed, it means that to have working well validation we have to create deep copy always!!!__

__Validation__  
This custom control contains also example with custom validator.  
One option is to implement interface *Validator* directly by this control.  
If we want support only reactive forms function *validate(c: AbstractControl)* from *Validator* interface can be empty
but it has to exists to not get exception in run time. Function *validate(c: AbstractControl)* is executed after execution
MySuperConrolRangeValidator so here we can add some additional control validation if needed.  
Another option is to create custom validator like e.g. *MySuperConrolRangeValidator* that is dedicated only for this control but  
it uses shared validator logic *numberRangeValidator*.  
NOTE: remember that validation is executed also during control initialization so it has to work correctly with default values (like undefined or some default defined values).


Usage in reactive forms. Usage:

```typescript
  createForm() {
    this.heroForm = this.fb.group({
      heroName: ['', Validators.required ], // <--- the FormControl called "heroName"
      address: this.fb.group(new Address()),
      secretLairs: this.fb.array([]), // <-- secretLairs as an empty FormArray
      power: '',
      sidekick: '',
      genderAndNumber: [new MySuperControlValue(),
        [MySuperConrolRangeValidator(200, 0), superforbiddenValueValidator(123)] //synchronous validators
      ],
      heroNameSimpleCustomControl: ['', [Validators.required, forbiddenValueValidator(new RegExp('common-data', 'i'))], [forbiddenValueAsyncValidator(new RegExp('ole', 'i'))]]
    });
  }
```
In case of *MySuperControlValue* are used 2 sync validators so you can see that second validator *MySuperControlValue* is called even previous *MySuperConrolRangeValidator* returned validation error. 

If we want support template-driven forms in function *validate(c: AbstractControl)* we have to return not null value if validation failed.

I am not sure when we should use *registerOnValidatorChange*. This function has very limited documentation
but here I found answer https://stackoverflow.com/questions/42891017/angular2-custom-template-validator-has-stale-values  
but I am not sure if it is correct because if I do not use it this example is also working fine. 

This control has also another dedicated directive *MySuperControlForbiddenValueValidatorDirective* that implements *Validator* interface.
In case we want use this validator in reactive forms we pass *superforbiddenValueValidator* as array element when we create form.
In case we want use this validator in template-driven forms we pass is as attribute
```html
<my-super-control name="nameSuperControl" #mySuperControl="ngModel" [(ngModel)]="customer" [useDeepCopy]=true [rangeMin]="50" [rangeMax]="250" superForbiddenValue=123></my-super-control>
```
It also shows that validation can be embedded directly in the custom control (*MySuperConrolRangeValidator*) or can be handled outside of this control (*MySuperControlForbiddenValueValidatorDirective*).
First is called function *validate* and next other validators.

Example with custom __async validation__ is presented in *ForbiddenValidatorAsyncDirective*. It implements the interface *AsyncValidator*.
There is example for the simple custom control for both template driven and reactive forms.   
  
Template driven:   
```html
  <my-simple-control required name="nameSimpleControl" [(ngModel)]="customer.value1" #mySimpleControl="ngModel"
                     forbiddenValue="dupa" forbiddenValueAsync="ole">Name:</my-simple-control>
```

Reactive forms:   
```typescript
heroNameSimpleCustomControl: ['', [Validators.required, forbiddenValueValidator(new RegExp('common-data', 'i'))], [forbiddenValueAsyncValidator(new RegExp('ole', 'i'))]]
```

NOTE: when async validation is pending status of the control is always INVALID but status of the form is __PENDING__.      
NOTE1: for performance reasons, Angular only runs async validators if all sync validators pass.

TODO: example with multiple async validators (if all start at the same time or they are sequential, next start if previous async is finished) 
TODO: how to get validation errors
TODO: forwardRef, multi: true

Links:  

https://netbasal.com/angular-custom-form-controls-made-easy-4f963341c8e2  
https://www.domstamand.com/custom-control-validation-in-angular    
https://blog.thoughtram.io/angular/2016/07/27/custom-form-controls-in-angular-2.html    
https://medium.com/@tarik.nzl/angular-2-custom-form-control-with-validation-json-input-2b4cf9bc2d73  
https://blog.thoughtram.io/angular/2016/03/14/custom-validators-in-angular-2.html  
http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel  
https://www.codeproject.com/Articles/1121101/Angular-custom-component-with-validation-for-ban  
http://blog.rangle.io/angular-2-ngmodel-and-custom-form-components 
http://www.talkinghightech.com/en/angular-2-building-custom-validator  
https://stackoverflow.com/questions/42891017/angular2-custom-template-validator-has-stale-values   
https://alligator.io/angular/async-validators/  
https://plnkr.co/edit/Vo1Kf3uGPjHD1RuDrzrk?p=preview (async validator)

### Reactive forms examples
Example with reactive forms including usage of own controls.  
https://angular.io/guide/reactive-forms  
Important classes: FormBuilder, FormGroup, FormControl, FormArray
FormGroup functions:  
1. With *setValue*, you assign every form control value at once
2. With *patchValue*, you can assign values to specific controls in a FormGroup
3. *reset* method has an optional state value so you can reset the flags and the control values at the same time
Includes also example with ControlValueAccessor.  

### Reactive forms nested components examples
http://brophy.org/post/nested-reactive-forms-in-angular2/   
https://scotch.io/tutorials/how-to-build-nested-model-driven-forms-in-angular-2   
https://medium.com/spektrakel-blog/angular2-building-nested-reactive-forms-7978ecd145e4   

### Template driven forms 
Example with template driven forms including usage of own controls.  
https://angular.io/guide/forms  

## Date examples

## forwardRef examples
To understand forwardRef please read first about hoisting in javascript https://github.com/kicaj29/javascript-examples   
What forwardRef does is, it takes a function as a parameter that returns a class. And because this function isn’t immediately called      
but instead is called after the class is declared it is safe to return the class from it.   

https://blog.thoughtram.io/angular/2015/09/03/forward-references-in-angular-2.html   
https://blog.angularindepth.com/what-is-forwardref-in-angular-and-why-we-need-it-6ecefb417d48

### forwardRef in useClass (ClassProvider)
it does not work and I do not know why!

### forwardRef in useExisting (ExistingProvider)

### forwardRef in @Inject
If the class is defined after component in which we want inject this class (service) we have to use forwardRef!.   
NOTE: this service must be provided in a module.
TODO: check how it works if this service is provided in a component!!!

## Dependency Injection

### ExistingProvider - BYPASSING PROVIDERS IN ANGULAR
https://blog.thoughtram.io/angular/2016/09/14/bypassing-providers-in-angular-2.html   
https://angular.io/guide/dependency-injection-in-action#find-a-parent-by-its-class-interface   

### Multi providers
Using multi: true tells Angular that the provider is a multi provider. With multi providers, we can provide multiple values for a single token in DI for example multiple implementation of the same interface.   
NOTE: it looks that multi providers __Do Not Aggregate Value Across Hierarchical Injectors In Angular__.   
It means that *ControlValueAccessor* token *NG_VALUE_ACCESSOR* is managed by Angular in some another way that allows somehow access to   
all implementations of this interface in an app and call methods *registerOnChange*, *registerOnTouched*.
https://blog.thoughtram.io/angular2/2015/11/23/multi-providers-in-angular-2.html      
https://www.eduonix.com/blog/web-programming-tutorials/learn-multi-providers-feature-angular2   
https://www.bennadel.com/blog/3080-multi-providers-do-not-aggregate-value-across-hierarchical-injectors-in-angular-2-beta-14.htm      


## Observables

### Observable vs Promise

https://netbasal.com/angular-stop-using-observable-when-you-should-use-a-promise-8da0788a8d2

* First, Promises are eager and are executed immediately. Observables are not eager and are only executed when subscribed to.
* Second, Promises are asynchronous. Observables can be either synchronous or asynchronous.
* Third, Promises are expected to return only a single value (like a function). Observables can return zero, one or more (infinitely) values.

Promise:
* Promise is executed together with his constructor. There is no need to call 'then' to start execution of promise (eager loading).
* There is no possibility to cancel promise.   NOTE: because of this we have to check if then is executed for still valid component (e.g.check if the component is already destroy).
* If we call multiple times ‘then’ on the same instance of promise the promise only return value, content of promise is executed only one time!

Observable:
* Observable by default is executed only when we call subscribe at least one time
* There is possibility to cancel observable but from unknow reasones it does not work in my example
* If we call observale multple times it is executed every time from scratch



### unsubscribe(), takeWhile(), takeUntil(), also promise example

https://netbasal.com/when-to-unsubscribe-in-angular-d61c6b21bad3
http://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

This example shows that even parent component is destroyed (*UnsubscribeUseComponent_*) the callback function is still executed.
This will happen if the parent component is referenced by some singleton or function that exists for the whole life of application,
in this case it was *setInterval*.   To avoid this problem call *clearInterval* and *unsubscribe* in *ngOnDestroy*.
