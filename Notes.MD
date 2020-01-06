# Angular Introduction

### Member Decorator
Decotator is a function which accepts *** somefunction(target, name, descriptor) *** and store original function in a variable as 
```js 
const original = descriptor.value
```
and use to do som mainuplation on the descriptor.value
```js 
 descriptor.value = ()=>{
    console.log('Hackaed')
  }
```
the will return descriptor
```js
return descriptor
```
full function below
```js
function log(target, name, descriptor){
  console.log(target, name, descriptor)
  // store the original function in a variable
  const original = descriptor.value
  //do some mainupaltion with descriptor .value
  descriptor.value = ()=>{
    console.log('Hackaed')
  }
  // call original() and see difference
  // return descriptor
  return descriptor
}

// can be written like this as well 
function log(target, name, descriptor){
  console.log(target, name, descriptor)
  const original = descriptor.value = ()=>{
    console.log('Hackaed')
  }
  // call original() and see difference
  return descriptor
}
```

usage 
```js
//decorator function
function log(target, name, descriptor){
	const original = descriptor.value = (...args)=>{
		console.log('Arguments passed' , args)
		const result = original.apply(this, args)
		console.log('The Result of the function is' , result)
	}
	return descriptor
}

// original function
@log
aSimpleMethod(a, b){
	return a*b
}

// call function 
aSimpleMethod(5,2)

```
### Class Decorator

```js
//decorator function
function log(className){
	console.log(className)
	return (...args) => {
		console.log('Arguments passsed', args)
		return new className(...args)
	}
}

// decorator call
@log
class myExampleClass {
	constructor(arg1, arg2){
		console.log('Constructor fired!')
	}
}
// class call
const myClass = new myExampleClass(5,10)

// run above code and see log
```

### Angular lifecycle hooks
Angular calls hook methods for directives as well as components.
A spy directive can provide insight into a DOM object that you cannot change directly. Obviously you can't touch the implementation of a native <div>. You can't modify a third party component either. But you can watch both with a directive.
 ```js
 ngOninit()
 //Called only once when component initialized.
// To perform complex initializations shortly after construction.
// To set up the component after Angular sets the input properties.

 ngOnChange()
 // every time fired when any change happened.
// The ngOnChanges() method takes an object that maps each changed 
// property name to a SimpleChange object holding the current and 
// previous property values. This hook iterates over the changed
// properties and logs them.

 ngDoCheck()
 // Fired when angular thinks there is change. it detects itself.
 //This code inspects certain values of interest, 
 // capturing and comparing their current state against previous values. 

 ngAfterContentInit()
 ngAfterContentChecked()
 // the AfterContentInit() and AfterContentChecked() hooks that Angular calls after Angular projects external content into the component

 // The AfterView hooks concern ViewChildren, the child components whose element tags appear within the component's template.
// The AfterContent hooks concern ContentChildren, the child components that Angular projected into the component.
 
 ngAfterViewInit()
 ngAfterViewChecked()
 //Angular frequently calls AfterViewChecked(), often when there are no changes of interest. Write lean hook methods to avoid performance problems
 ngOnDestory()
 // Put cleanup logic in ngOnDestroy(), the logic that must run before Angular destroys the directive.
 ```
### Components
<ul>
	<li>What is component?</li>
	<li>Creating component using ***ng generate*** component</li>
	<li>Declaring a component</li>
	<li>Basic component usage</li>
</ul>

Component is a piece of code represent somthing on screen and it is reusabel without writing code again and again.

```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Introduction 2 Angular';
}
```
create component using cli
***Syntax: [ng generate component < component-name >]***
```shell
# creates at root directory [app]
$ ng create component Hello
# to create in component directory 
$ ng create component components/Hello
 ```

Will genetate following files

```js
//hello.component.ts
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  constructor() { }
  ngOnInit() {}
}
```

Others files showed in ***hello.component.ts***
```javascript
templateUrl	: './hello.component.html',
styleUrls	: ['./hello.component.scss'],
```
Cli result
```shell
ng generate component components/Hello
CREATE src/app/components/hello/hello.component.scss (0 bytes)
CREATE src/app/components/hello/hello.component.html (20 bytes)
CREATE src/app/components/hello/hello.component.spec.ts (621 bytes)
CREATE src/app/components/hello/hello.component.ts (266 bytes)
UPDATE src/app/app.module.ts (482 bytes)
```

### Bindings/interpolation
Interpolation allows to incorporate calculated strings into the textbetween HTML element tags and within attribute assignments.
#### Interpolation {{...}}
Interpolation refers to embedding expressions into marked up text. By default, interpolation uses as its delimiter the double curly braces, {{ and }}.
```html
<h3>Current customer: {{ currentCustomer }}</h3>
```
The text between the braces is often the name of a component property. Angular replaces that name with the string value of the corresponding component property.

more details
See [Interpolation](https://angular.io/guide/template-syntax#interpolation)