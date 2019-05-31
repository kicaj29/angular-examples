# Tree Shakeable Providers
https://coryrylan.com/blog/tree-shakeable-providers-and-services-in-angular   
https://angular.io/guide/providers#provider-scope

# resizeable col in data table

# RXJS: subject vs observable
https://coryrylan.com/blog/rxjs-observables-versus-subjects
## Observable
- Observables by default are “Cold” meaning they are lazy and won’t run any code until there is a subscriber.
- Cannot access the observer and call .next() outside of the internal implementation of the Observable. 
- if we subscribe three times then three times will be called setTimeout
## Subject
- Subjects, unlike regular Observables, are what we would call “Hot”. A hot Observable is an Observable that can start emitting events before you subscribe. This means you can miss previous events that have already emitted.
- With the Subject instance, we can immediately trigger events outside of the constructor by calling next().
- Subject shares work with all subscribers, it means adding more subscribers will not trigger subject execution.

# RXJS: pipeable and “lettable”, operators
https://blog.hackages.io/rxjs-5-5-piping-all-the-things-9d469d1b3f44
https://blog.angularindepth.com/rxjs-understanding-lettable-operators-fe74dda186d3
https://github.com/ReactiveX/rxjs/blob/master/doc/pipeable-operators.md

