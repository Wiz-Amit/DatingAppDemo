import { CanDeactivate } from "@angular/router";
import { MemberEditComponent } from "../members/member-edit/member-edit.component";
import { Injectable } from "@angular/core";

@Injectable()

export class PreventUnsavedChanges implements CanDeactivate<MemberEditComponent> {
    canDeactivate(component: MemberEditComponent) {
        if(component.editForm.dirty) {
            return confirm("Do you want to proceed? Any unsaved changes will be deleted.");
        }
        return true;
    }
}