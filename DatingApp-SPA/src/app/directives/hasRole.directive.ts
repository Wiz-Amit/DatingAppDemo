import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective implements OnInit {
  @Input() appHasRole: string[];
  isVisible = false;

  constructor(
    private authService: AuthService,
    private templateRef: TemplateRef<any>,
    private viewConterRef: ViewContainerRef) { }

  
  ngOnInit(): void {
    const userRoles = this.authService.decodedToken().role as Array<string>;
    //if there no roles, clear the viewContainerRef
    if(!userRoles) {
      this.viewConterRef.clear();
    }

    //if user has role required then render the element
    if(this.authService.checkRole(this.appHasRole)) {
      if(!this.isVisible) {
        this.isVisible = true;
        this.viewConterRef.createEmbeddedView(this.templateRef);
      } else {
        this.isVisible = false;
        this.viewConterRef.clear();
      }
    }
  }
}
