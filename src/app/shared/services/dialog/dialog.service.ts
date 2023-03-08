import { ComponentFactoryResolver, Injectable, Type } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  public isLeavePage = new Subject<boolean>();
  public isCloseDialog = new Subject<boolean>();
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  loadComponent(component: Type<any>, data: any, hostElem: any) {
    // console.log('component => ', component);
    // console.log('data => ', data);
    // console.log('hostElem => ', hostElem);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const viewContainerRef = hostElem.viewContainerRef;
    viewContainerRef.clear();    
    const componentRef = viewContainerRef.createComponent(componentFactory);  
    componentRef.instance.data = data;
  }

  removeComponent(hostElem: any) {
    const viewContainerRef = hostElem.viewContainerRef;
    viewContainerRef.clear();
  }
}
