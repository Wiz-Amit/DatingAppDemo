import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { PreventUnsavedChanges } from './guards/prevent-unsaved-changes.guard';

export const appRoutes: Routes = [
    {path:"", component: HomeComponent},
    {
        path:"",
        runGuardsAndResolvers:"always",
        canActivate: [AuthGuard],
        children: [
            {path:"lists", component: ListsComponent},
            {path:"members/:id", component: MemberDetailComponent},
            {path:"member/edit", component: MemberEditComponent, canDeactivate: [PreventUnsavedChanges]},
            {path:"members", component: MemberListComponent},
            {path:"messages", component: MessagesComponent},
        ]
    },
    {path:"**", redirectTo: "", pathMatch: "full"}
];