import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDialog]'
})
export class DialogDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
