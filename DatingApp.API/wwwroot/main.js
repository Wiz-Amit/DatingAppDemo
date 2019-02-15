(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-nav></app-nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'DatingApp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm5/time-ago-pipe.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _services_error_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/error.interceptor */ "./src/app/services/error.interceptor.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./members/member-list/member-list.component */ "./src/app/members/member-list/member-list.component.ts");
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lists/lists.component */ "./src/app/lists/lists.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./members/member-card/member-card.component */ "./src/app/members/member-card/member-card.component.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./members/member-detail/member-detail.component */ "./src/app/members/member-detail/member-detail.component.ts");
/* harmony import */ var _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./members/member-edit/member-edit.component */ "./src/app/members/member-edit/member-edit.component.ts");
/* harmony import */ var _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./guards/prevent-unsaved-changes.guard */ "./src/app/guards/prevent-unsaved-changes.guard.ts");
/* harmony import */ var _members_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./members/photo-editor/photo-editor.component */ "./src/app/members/photo-editor/photo-editor.component.ts");
/* harmony import */ var _members_member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./members/member-messages/member-messages.component */ "./src/app/members/member-messages/member-messages.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























function tokenGetter() {
    return localStorage.getItem("token");
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_11__["NavComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_17__["MemberListComponent"],
                _lists_lists_component__WEBPACK_IMPORTED_MODULE_18__["ListsComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_19__["MessagesComponent"],
                _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_22__["MemberCardComponent"],
                _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_24__["MemberDetailComponent"],
                _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_25__["MemberEditComponent"],
                _members_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_27__["PhotoEditorComponent"],
                _members_member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_28__["MemberMessagesComponent"],
                time_ago_pipe__WEBPACK_IMPORTED_MODULE_9__["TimeAgoPipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_gallery__WEBPACK_IMPORTED_MODULE_6__["NgxGalleryModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ButtonsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["PaginationModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_20__["appRoutes"]),
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot(),
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_23__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost:5000'],
                        blacklistedRoutes: ["localhost:5000/api/auth"]
                    }
                })
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"],
                _services_alertify_service__WEBPACK_IMPORTED_MODULE_16__["AlertifyService"],
                _services_error_interceptor__WEBPACK_IMPORTED_MODULE_15__["ErrorInterceptorProvider"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"],
                _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_26__["PreventUnsavedChanges"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alertify.service */ "./src/app/services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router, alertify) {
        this.authService = authService;
        this.router = router;
        this.alertify = alertify;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn())
            return true;
        else {
            this.alertify.error("Access denied!");
            this.router.navigate(["/home"]);
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/prevent-unsaved-changes.guard.ts":
/*!*********************************************************!*\
  !*** ./src/app/guards/prevent-unsaved-changes.guard.ts ***!
  \*********************************************************/
/*! exports provided: PreventUnsavedChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreventUnsavedChanges", function() { return PreventUnsavedChanges; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PreventUnsavedChanges = /** @class */ (function () {
    function PreventUnsavedChanges() {
    }
    PreventUnsavedChanges.prototype.canDeactivate = function (component) {
        if (component.editForm.dirty) {
            return confirm("Do you want to proceed? Any unsaved changes will be deleted.");
        }
        return true;
    };
    PreventUnsavedChanges = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], PreventUnsavedChanges);
    return PreventUnsavedChanges;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n  <div *ngIf=\"!registerMode;else registerForm\"\n    style=\"text-align:center\">\n    <h1>Find your match</h1>\n    <p class=\"lead\">Come on in to view you matches... All you need to do is sign up!</p>\n    <div class=\"text-center\">\n      <button class=\"btn btn-primary btn-lg mr-2\" (click)=\"registerToggle()\">Register</button>\n      <button class=\"btn btn-info btn-lg\">Learn more</button>\n    </div>\n  </div>\n\n  <ng-template #registerForm>\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-4\">\n          <app-register (cancelRegister)=\"cancelRegisterMode($event)\"></app-register>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(http) {
        this.http = http;
        this.registerMode = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.registerToggle = function () {
        this.registerMode = !this.registerMode;
    };
    HomeComponent.prototype.cancelRegisterMode = function (registerMode) {
        this.registerMode = registerMode;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/lists/lists.component.css":
/*!*******************************************!*\
  !*** ./src/app/lists/lists.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lists/lists.component.html":
/*!********************************************!*\
  !*** ./src/app/lists/lists.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center mt-3\">\n  <h2>{{likesParam === 'Likers' ? 'Members who like me' : 'Members who I\\'ve Liked'}} : {{pagination?.totalItems}}</h2>\n</div>\n\n<div class=\"container mt-3\">\n\n<div class=\"row\">\n  <div class=\"btn-group\">\n    <button class=\"btn btn-primary\" [(ngModel)]=\"likesParam\" btnRadio=\"Likers\" (click)=\"loadUsers()\">Members who like me</button>\n    <button class=\"btn btn-primary\" [(ngModel)]=\"likesParam\" btnRadio=\"Likees\" (click)=\"loadUsers()\">Members who I like</button>\n  </div>\n</div>\n\n<br>\n\n<div class=\"row\" *ngIf=\"likesParam == 'Likers' || likesParam == 'Likees'\">\n  <div *ngFor=\"let user of users\" class=\"col-sm-6 col-md-4 col-lg-4 col-xl-2\">\n    <app-member-card [user]=\"user\"></app-member-card>\n  </div>\n</div>\n\n\n\n</div>\n\n<div class=\"d-flex justify-content-center\" *ngIf=\"pagination\">\n<pagination [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\" [itemsPerPage]=\"pagination.itemsPerPage\" [(ngModel)]=\"pagination.currentPage\"\n  (pageChanged)=\"pageChanged($event)\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"\n  >\n\n</pagination>\n</div>"

/***/ }),

/***/ "./src/app/lists/lists.component.ts":
/*!******************************************!*\
  !*** ./src/app/lists/lists.component.ts ***!
  \******************************************/
/*! exports provided: ListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsComponent", function() { return ListsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alertify.service */ "./src/app/services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListsComponent = /** @class */ (function () {
    function ListsComponent(userService, alertify) {
        this.userService = userService;
        this.alertify = alertify;
        this.pageNumber = 1;
        this.pageSize = 5;
        this.user = JSON.parse(localStorage.getItem("user"));
        this.likesParam = "Likers";
    }
    ListsComponent.prototype.ngOnInit = function () {
        this.loadUsers();
    };
    ListsComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.getUsers(this.pageNumber, this.pageSize, null, this.likesParam)
            .subscribe(function (res) {
            _this.users = res.result;
            _this.pagination = res.pagination;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ListsComponent.prototype.pageChanged = function (event) {
        this.pageNumber = event.page;
        this.loadUsers();
    };
    ListsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lists',
            template: __webpack_require__(/*! ./lists.component.html */ "./src/app/lists/lists.component.html"),
            styles: [__webpack_require__(/*! ./lists.component.css */ "./src/app/lists/lists.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]])
    ], ListsComponent);
    return ListsComponent;
}());



/***/ }),

/***/ "./src/app/members/member-card/member-card.component.css":
/*!***************************************************************!*\
  !*** ./src/app/members/member-card/member-card.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card:hover img {\r\n    -webkit-transform: scale(1.2, 1.2);\r\n            transform: scale(1.2, 1.2);\r\n    opacity: 0.8;\r\n}\r\n\r\n.card img {\r\n    transition-duration: 500ms;\r\n    transition-timing-function: ease-out;\r\n}\r\n\r\n.card-img-wrapper {\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n.member-icons {\r\n    position: absolute;\r\n    bottom: -30%;\r\n    left: 0;\r\n    right: 0;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    opacity: 0;\r\n}\r\n\r\n.card-img-wrapper:hover .member-icons {\r\n    bottom: 0;\r\n    opacity: 1;\r\n}\r\n\r\n.animate {\r\n    transition: all 0.3s ease-in-out;\r\n}"

/***/ }),

/***/ "./src/app/members/member-card/member-card.component.html":
/*!****************************************************************!*\
  !*** ./src/app/members/member-card/member-card.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\n  <div class=\"card-img-wrapper\">\n    <img class=\"card-img-top\" src=\"{{user.photoUrl || '../../../assets/user.png'}}\" alt=\"{{user.knownAs}}\">\n    <ul class=\"list-inline member-icons animate text-center\">\n      <li class=\"list-inline-item\">\n        <button class=\"btn btn-primary\" [routerLink]=\"['/members/', user.id]\">\n          <i class=\"fa fa-user\"></i>\n        </button>\n      </li>\n      <li class=\"list-inline-item\">\n        <button class=\"btn btn-primary\" (click)=\"sendLike()\">\n          <i class=\"fa fa-heart\"></i>\n        </button>\n      </li>\n      <li class=\"list-inline-item\">\n        <button class=\"btn btn-primary\" [routerLink]=\"['/members/', user.id]\" [queryParams]=\"{tab: 3}\">\n          <i class=\"fa fa-envelope\"></i>\n        </button>\n      </li>\n    </ul>\n  </div>\n  <div class=\"card-body p-1\">\n    <h6 class=\"card-title text-center mb-1\"><i class=\"fa fa-user\"></i>\n      {{user.knownAs}}, {{user.age}}\n    </h6>\n    <p class=\"card-text text-muted text-center\">\n      {{user.city}}\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/members/member-card/member-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/members/member-card/member-card.component.ts ***!
  \**************************************************************/
/*! exports provided: MemberCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberCardComponent", function() { return MemberCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alertify.service */ "./src/app/services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MemberCardComponent = /** @class */ (function () {
    function MemberCardComponent(authService, userService, alertify) {
        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
    }
    MemberCardComponent.prototype.ngOnInit = function () {
    };
    MemberCardComponent.prototype.sendLike = function () {
        var _this = this;
        this.userService.sendLike(this.authService.getId(), this.user.id)
            .subscribe(function () {
            _this.alertify.success("You have liked " + _this.user.knownAs);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MemberCardComponent.prototype, "user", void 0);
    MemberCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-card',
            template: __webpack_require__(/*! ./member-card.component.html */ "./src/app/members/member-card/member-card.component.html"),
            styles: [__webpack_require__(/*! ./member-card.component.css */ "./src/app/members/member-card/member-card.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], MemberCardComponent);
    return MemberCardComponent;
}());



/***/ }),

/***/ "./src/app/members/member-detail/member-detail.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/members/member-detail/member-detail.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-thumbnail {\r\n    margin: 25px;\r\n    width: 85%;\r\n    height: 85%;\r\n}\r\n\r\n.card-body {\r\n    padding: 0 25px;\r\n}\r\n\r\n.card-footer {\r\n    padding: 10px 15px;\r\n    background-color: #fff;\r\n    border-top: none;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/members/member-detail/member-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/members/member-detail/member-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"card\" *ngIf=\"user\">\n        <img src=\"{{user.photoUrl || '../../../assets/user.png'}}\" alt=\"{{user?.knowAs}}\" class=\"card-img-top img-thumbnail\">\n        <div class=\"card-body\">\n            <h4>{{user?.knownAs}}</h4>\n          <div>\n            <strong>Location:</strong> {{user.city}}\n          </div>\n          <div>\n            <strong>Age:</strong> {{user.age}}\n          </div>\n          <div>\n            <strong>Last Active:</strong> {{user.lastActive | timeAgo}}\n          </div>\n          <div>\n            <strong>Member Since:</strong> {{user.created | date}}\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <div class=\"btn-group d-flex\">\n            <button class=\"btn btn-primary w-100\">Like</button>\n            <button class=\"btn btn-success w-100\" (click)=\"selectTab(3)\">Message</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"tab-panel\">\n        <tabset class=\"member-tabset\" id=\"memberTabs\" #memberTabs>\n          <tab heading=\"About {{user?.knownAs}}\">\n            <h4>Description</h4>\n            <p>{{user?.introduction}}</p>\n            <h4>Looking For</h4>\n            <p>{{user?.lokingFor}}</p>\n          </tab>\n          <tab heading=\"Interests\">\n            <h4>Interests</h4>\n            <p>{{user?.interests}}</p>\n          </tab>\n          <tab heading=\"Photos\">\n            <h4>Photos</h4>\n            <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\" *ngIf=\"user\"></ngx-gallery>\n          </tab>\n          <tab heading=\"Messages\">\n            <h4>Messages</h4>\n            <app-member-messages [user]=\"user\" *ngIf=\"user\"></app-member-messages>\n          </tab>\n        </tabset>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/members/member-detail/member-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/members/member-detail/member-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: MemberDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDetailComponent", function() { return MemberDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MemberDetailComponent = /** @class */ (function () {
    function MemberDetailComponent(userService, alertify, activeRoute) {
        this.userService = userService;
        this.alertify = alertify;
        this.activeRoute = activeRoute;
    }
    MemberDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadUser();
        this.galleryOptions = [{
                width: "500px",
                height: "500px",
                imagePercent: 100,
                thumbnailsColumns: 4,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_4__["NgxGalleryAnimation"].Slide,
                preview: false
            }];
        this.activeRoute.queryParams.subscribe(function (params) {
            var selectedTab = params["tab"];
            selectedTab > 0 ? _this.selectTab(selectedTab) : 0;
        });
    };
    MemberDetailComponent.prototype.getImages = function () {
        var imageUrl = [];
        this.user.photos.forEach(function (photo) {
            imageUrl.push({
                small: photo.url,
                medium: photo.url,
                big: photo.url,
                description: photo.description
            });
        });
        return imageUrl;
    };
    MemberDetailComponent.prototype.loadUser = function () {
        var _this = this;
        this.userService.getUser(+this.activeRoute.snapshot.params["id"])
            .subscribe(function (user) {
            _this.user = user;
        }, function (error) {
            _this.alertify.error(error);
        }, function () {
            _this.galleryImages = _this.getImages();
        });
    };
    MemberDetailComponent.prototype.selectTab = function (tabId) {
        this.memberTabs.tabs[tabId].active = true;
        document.querySelector("#memberTabs")
            .scrollIntoView({ behavior: "smooth", block: "start" });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("memberTabs"),
        __metadata("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["TabsetComponent"])
    ], MemberDetailComponent.prototype, "memberTabs", void 0);
    MemberDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-detail',
            template: __webpack_require__(/*! ./member-detail.component.html */ "./src/app/members/member-detail/member-detail.component.html"),
            styles: [__webpack_require__(/*! ./member-detail.component.css */ "./src/app/members/member-detail/member-detail.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MemberDetailComponent);
    return MemberDetailComponent;
}());



/***/ }),

/***/ "./src/app/members/member-edit/member-edit.component.css":
/*!***************************************************************!*\
  !*** ./src/app/members/member-edit/member-edit.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-thumbnail {\r\n    margin: 25px;\r\n    width: 85%;\r\n    height: 85%;\r\n}\r\n\r\n.card-body {\r\n    padding: 0 25px;\r\n}\r\n\r\n.card-footer {\r\n    padding: 10px 15px;\r\n    background-color: #fff;\r\n    border-top: none;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/members/member-edit/member-edit.component.html":
/*!****************************************************************!*\
  !*** ./src/app/members/member-edit/member-edit.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\" *ngIf=\"user\">\n  <div class=\"row ml-2\">\n    <div class=\"col-sm-4\">\n      <h1>{{user.knownAs}}</h1>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"alert alert-info\" *ngIf=\"editForm.dirty\">\n        <strong>Information:</strong> You have made changes. Any unsaved changes will be lost.\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <img [src]=\"getMainPhoto() || '../../../assets/user.png'\" [alt]=\"user.knowAs\"\n          class=\"card-img-top img-thumbnail\">\n        <div class=\"card-body\">\n          <div>\n            <strong>Location:</strong>\n            <p>{{user.city}}</p>\n          </div>\n          <div>\n            <strong>Age:</strong>\n            <p>{{user.age}}</p>\n          </div>\n          <div>\n            <strong>Last Active:</strong>\n            <p>{{user.lastActive | timeAgo}}</p>\n          </div>\n          <div>\n            <strong>Member Since:</strong>\n            <p>{{user.created | date}}</p>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <button [disabled]=\"!editForm.dirty\" form=\"editForm\" class=\"btn btn-success btn-block\">Save Changes</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-8\">\n      <div class=\"tab-panel\">\n        <tabset class=\"member-tabset\">\n          <tab heading=\"Edit Profile\">\n            <form id=\"editForm\" #editForm=\"ngForm\" (ngSubmit)=\"updateUser(editForm)\">\n              <h4>Description</h4>\n              <textarea name=\"introduction\" rows=\"6\" class=\"form-control\" [(ngModel)]=\"user.introduction\">\n              </textarea>\n              <h4 class=\"mt-2\">Looking For</h4>\n              <textarea name=\"lookingFor\" rows=\"6\" class=\"form-control\" [(ngModel)]=\"user.lookingFor\">\n              </textarea>\n              <h4 class=\"mt-2\">Interests</h4>\n              <textarea name=\"interests\" rows=\"6\" class=\"form-control\" [(ngModel)]=\"user.interests\">\n              </textarea>\n              <h4 class=\"mt-2\">Location Details:</h4>\n              <div class=\"form-inline\">\n                <label for=\"city\">City</label>\n                <input class=\"form-control ml-2 mr-3\" type=\"text\" name=\"city\" [(ngModel)]=\"user.city\">\n                <label for=\"country\">Country</label>\n                <input class=\"form-control ml-2 mr-3\" type=\"text\" name=\"country\" [(ngModel)]=\"user.country\">\n              </div>\n            </form>\n          </tab>\n          <tab heading=\"Photos\">\n            <h4>Photos</h4>\n            <app-photo-editor [photos]=\"user.photos\"></app-photo-editor>\n          </tab>\n        </tabset>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/members/member-edit/member-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/members/member-edit/member-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: MemberEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberEditComponent", function() { return MemberEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MemberEditComponent = /** @class */ (function () {
    function MemberEditComponent(authService, alertify, userService) {
        this.authService = authService;
        this.alertify = alertify;
        this.userService = userService;
    }
    MemberEditComponent.prototype.unloadNotification = function ($event) {
        if (this.editForm.dirty) {
            $event.returnValue = true;
        }
    };
    MemberEditComponent.prototype.ngOnInit = function () {
        this.loadUser();
    };
    MemberEditComponent.prototype.loadUser = function () {
        var _this = this;
        this.userService.getUser(this.authService.getId())
            .subscribe(function (user) {
            _this.user = user;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MemberEditComponent.prototype.updateUser = function () {
        var _this = this;
        this.userService.updateUser(this.authService.getId(), this.user)
            .subscribe(function (next) {
            _this.editForm.reset(_this.user);
            _this.alertify.success("Profile Updated Successfully");
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MemberEditComponent.prototype.getMainPhoto = function () {
        this.user.photoUrl = this.authService.getCurrentUser().photoUrl;
        return this.user.photoUrl;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("editForm"),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], MemberEditComponent.prototype, "editForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:beforeunload", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], MemberEditComponent.prototype, "unloadNotification", null);
    MemberEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-edit',
            template: __webpack_require__(/*! ./member-edit.component.html */ "./src/app/members/member-edit/member-edit.component.html"),
            styles: [__webpack_require__(/*! ./member-edit.component.css */ "./src/app/members/member-edit/member-edit.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], MemberEditComponent);
    return MemberEditComponent;
}());



/***/ }),

/***/ "./src/app/members/member-list/member-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/members/member-list/member-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/members/member-list/member-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/members/member-list/member-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center mt-3\" *ngIf=\"pagination\">\n  <h2>Your matches: {{pagination.totalItems}} found</h2>\n</div>\n\n<div class=\"container mt-5\">\n  <form class=\"form-inline\" #filters=\"ngForm\" (ngSubmit)=\"loadUsers()\" \n    (change)=\"loadUsers()\" novalidate>\n    <div class=\"form-group\">\n      <label for=\"minAge\">Age From</label>\n      <input type=\"number\" class=\"form-control ml-1\" style=\"width: 70px\"\n        id=\"minAge\" name=\"minAge\" [(ngModel)]=\"userParams.minAge\">\n    </div>\n  \n    <div class=\"form-group px-2\">\n      <label for=\"maxAge\">Age To</label>\n      <input type=\"number\" class=\"form-control ml-1\" style=\"width: 70px\"\n        id=\"maxAge\" name=\"maxAge\"  [(ngModel)]=\"userParams.maxAge\">\n    </div>\n  \n    <div class=\"form-group px-2\">\n      <label for=\"gender\">Show: </label>\n      <select class=\"form-control ml-1\" style=\"width: 130px\"\n        id=\"gender\" name=\"gender\"  [(ngModel)]=\"userParams.gender\">\n        <option *ngFor=\"let gender of genderList\" value={{gender.value}}>\n          {{gender.display}}\n        </option>\n      </select>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" style=\"margin-left:10px\">Apply Filters</button>\n    <button type=\"button\" class=\"btn btn-info\" style=\"margin-left:10px\"\n      (click)=\"resetFilters()\">Reset Filter</button>\n    <div class=\"col\">\n      <div class=\"btn-group float-right\">\n        <button type=\"button\" name=\"orderBy\" class=\"btn btn-primary\"\n          [(ngModel)]=\"userParams.orderBy\" (click)=\"loadUsers()\" btnRadio=\"lastActive\"\n        >Last Active</button>\n        <button type=\"button\" name=\"orderBy\" class=\"btn btn-primary\"\n          [(ngModel)]=\"userParams.orderBy\" (click)=\"loadUsers()\" btnRadio=\"created\"\n        >Newest Members</button>\n      </div>\n    </div>\n  </form>\n  <br>\n\n  <div class=\"row\">\n    <div *ngFor=\"let user of users\" class=\"col-lg-2 col-md-3 col-sm-6\">\n      <app-member-card [user]=\"user\"></app-member-card>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"pagination\" class=\"d-flex justify-content-center\">\n  <pagination [boundaryLinks]=\"true\"\n    [totalItems]=\"pagination.totalItems\"\n    [itemsPerPage]=\"pagination.itemsPerPage\"\n    [(ngModel)]=\"pagination.currentPage\"\n    (pageChanged)=\"pageChanged($event)\"\n    previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\n  </pagination>\n</div>"

/***/ }),

/***/ "./src/app/members/member-list/member-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/members/member-list/member-list.component.ts ***!
  \**************************************************************/
/*! exports provided: MemberListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberListComponent", function() { return MemberListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/alertify.service */ "./src/app/services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MemberListComponent = /** @class */ (function () {
    function MemberListComponent(userService, alertify) {
        this.userService = userService;
        this.alertify = alertify;
        this.pageNumber = 1;
        this.pageSize = 5;
        this.user = JSON.parse(localStorage.getItem("user"));
        this.genderList = [{ display: "Male", value: "male" }, { display: "Female", value: "female" }];
        this.userParams = {};
    }
    MemberListComponent.prototype.ngOnInit = function () {
        this.resetFilters();
    };
    MemberListComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.getUsers(this.pageNumber, this.pageSize, this.userParams).subscribe(function (res) {
            _this.users = res.result;
            _this.pagination = res.pagination;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MemberListComponent.prototype.resetFilters = function () {
        this.userParams.gender = this.user.gender == "male" ? "female" : "male";
        this.userParams.minAge = 18;
        this.userParams.maxAge = 99;
        this.userParams.orderBy = "lastActive";
        this.loadUsers();
    };
    MemberListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-list',
            template: __webpack_require__(/*! ./member-list.component.html */ "./src/app/members/member-list/member-list.component.html"),
            styles: [__webpack_require__(/*! ./member-list.component.css */ "./src/app/members/member-list/member-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]])
    ], MemberListComponent);
    return MemberListComponent;
}());



/***/ }),

/***/ "./src/app/members/member-messages/member-messages.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/members/member-messages/member-messages.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    border: none;\r\n}\r\n\r\n.chat {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.chat li {\r\n    margin-bottom: 10px;\r\n    padding-bottom: 20px;\r\n    border-bottom: 1px dotted #B3A9A9;\r\n}\r\n\r\n.rounded-circle {\r\n    height: 5-px;\r\n    width: 50px;\r\n    margin-left: 3vmin;\r\n    margin-right: 3vmin;\r\n}\r\n\r\n.card-body {\r\n    overflow-y: scroll;\r\n    height: 52vh;\r\n}\r\n\r\n.senderMessage .chat-body p {\r\n    text-align: right;\r\n    margin: 3vmin;\r\n}"

/***/ }),

/***/ "./src/app/members/member-messages/member-messages.component.html":
/*!************************************************************************!*\
  !*** ./src/app/members/member-messages/member-messages.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-body\" *ngIf=\"messages\">\r\n        <div *ngIf=\"messages?.length === 0\">\r\n            <p>No messages yet.... say hi using the messaeg box below</p>\r\n        </div>\r\n\r\n        <ul class=\"chat\">\r\n            <li *ngFor=\"let message of messages\">\r\n                <!-- by them -->\r\n                <div (loaded)=\"scrollToBottom()\" *ngIf=\"message.senderId == user.id\">\r\n                    <span class=\"chat-img float-left\">\r\n                        <img [src]=\"message.senderPhotoUrl\" [alt]=\"message.senderKnownAs\" class=\"rounded-circle\">\r\n                    </span>\r\n                    <div class=\"chat-body \">\r\n                        <p>{{message.content}}</p>\r\n                        <div class=\"header\">\r\n                            <!-- <strong class=\"primary-font\">\r\n                                {{message.senderKnownAs}}\r\n                            </strong> -->\r\n                            <small class=\"text-muted float-right\">\r\n                                <span class=\"fa fa-clock-o\"> {{message.messageSent | timeAgo}} </span>\r\n                            </small>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- by me -->\r\n                <div *ngIf=\"message.senderId != user.id\" class=\"senderMessage\">\r\n                    <span class=\"chat-img float-right\">\r\n                        <img [src]=\"message.senderPhotoUrl\" [alt]=\"message.senderKnownAs\" class=\"rounded-circle\">\r\n                    </span>\r\n                    <div class=\"chat-body \">\r\n                        <p>{{message.content}}</p>\r\n                        <div class=\"header\">\r\n                            <small class=\"text-muted float-left\">\r\n                                <span class=\"fa fa-clock-o\"> {{message.messageSent | timeAgo}} </span>\r\n                                <span *ngIf=\"!message.isRead\" class=\"text-danger\"> (Sent) </span>\r\n                                <span *ngIf=\"message.isRead\" class=\"text-success\"> (Read {{message.dateRead | timeAgo}}) </span>\r\n                            </small>\r\n                            <!-- <strong class=\"primary-font float-right\">\r\n                                {{message.senderKnownAs}}\r\n                            </strong> -->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n        <div id=\"chatBottom\"></div>\r\n    </div>\r\n\r\n    <div class=\"card-footer\">\r\n        <form #messageForm=\"ngForm\" (ngSubmit)=\"sendMessage()\">\r\n            <div class=\"input-group\">\r\n                <input type=\"text\" class=\"form-control input-sm\" name=\"content\" required\r\n                    placeholder=\"send a private message\" [(ngModel)]=\"message.content\">\r\n                <div class=\"input-group-append\">\r\n                    <button class=\"btn btn-primary\" [disabled]=\"!message.content\">Send</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/members/member-messages/member-messages.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/members/member-messages/member-messages.component.ts ***!
  \**********************************************************************/
/*! exports provided: MemberMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberMessagesComponent", function() { return MemberMessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MemberMessagesComponent = /** @class */ (function () {
    function MemberMessagesComponent(authService, userService, alertify) {
        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
        this.message = {};
    }
    MemberMessagesComponent.prototype.ngOnInit = function () {
        this.loadMessageThread();
    };
    MemberMessagesComponent.prototype.loadMessageThread = function () {
        var _this = this;
        this.userService.getMessageThread(this.authService.getId(), this.user.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (messages) {
            var userId = +_this.authService.getId();
            messages.forEach(function (message) {
                if (message.recipientId === userId)
                    _this.userService.markMessageAsRead(userId, message.id);
            });
        }))
            .subscribe(function (messages) {
            _this.messages = messages.slice().reverse();
        }, function (error) {
            _this.alertify.error(error);
        }, function () {
            _this.scrollToBottom();
        });
    };
    MemberMessagesComponent.prototype.sendMessage = function () {
        var _this = this;
        this.message.recipientId = this.user.id;
        this.userService.sendMessage(this.authService.getId(), this.message)
            .subscribe(function (message) {
            _this.messages.push(message);
            _this.message.content = "";
        }, function (error) {
            _this.alertify.error(error);
        }, function () {
            _this.scrollToBottom();
        });
    };
    MemberMessagesComponent.prototype.scrollToBottom = function () {
        setTimeout(function () {
            document.querySelector("#chatBottom")
                .scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MemberMessagesComponent.prototype, "user", void 0);
    MemberMessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-member-messages',
            template: __webpack_require__(/*! ./member-messages.component.html */ "./src/app/members/member-messages/member-messages.component.html"),
            styles: [__webpack_require__(/*! ./member-messages.component.css */ "./src/app/members/member-messages/member-messages.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], MemberMessagesComponent);
    return MemberMessagesComponent;
}());



/***/ }),

/***/ "./src/app/members/photo-editor/photo-editor.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/members/photo-editor/photo-editor.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img.img-thumbnail {\r\n    height: 100px;\r\n    min-width: 100px !important;\r\n    margin-bottom: 2px;\r\n}\r\n\r\n.nv-file-over {\r\n    border: dotted 3px lightseagreen;\r\n}\r\n\r\ninput[type=file] {\r\n    color: transparent;\r\n}"

/***/ }),

/***/ "./src/app/members/photo-editor/photo-editor.component.html":
/*!******************************************************************!*\
  !*** ./src/app/members/photo-editor/photo-editor.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-2\" *ngFor=\"let photo of photos\">\n    <img src=\"{{photo.url}}\" class=\"img-thumbnail p-1 mt-2\">\n    <div class=\"text-center\">\n      <button class=\"btn btn-sm mr-1\"\n        [ngClass]=\"photo.isMain ? 'btn-success active' : 'btn-secondary'\"\n        (click)=\"setMainPhoto(photo)\"\n        [disabled]=\"photo.isMain\"\n      >Main</button>\n      <button class=\"btn btn-sm btn-danger\"\n        (click)=\"deletePhoto(photo.id)\"\n        [disabled]=\"photo.isMain\">\n        <i class=\"fa fa-trash-o\"></i>\n      </button>\n    </div>\n  </div>\n</div>\n<div class=\"row mt-3\">\n\n  <div class=\"col-md-3\">\n    <h3>Add Photos</h3>\n\n    <div ng2FileDrop\n      [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\n      (fileOver)=\"fileOverBase($event)\"\n      [uploader]=\"uploader\"\n      class=\"card bg-faded p-3 text-center mb-3 my-drop-zone\">\n      <i class=\"fa fa-upload fa-3x\"></i>\n      Drop Photos Here\n    </div>\n\n    Multiple\n    <input type=\"file\" ng2FileSelect\n      [uploader]=\"uploader\" multiple /><br />\n\n    Single\n    <input type=\"file\" ng2FileSelect\n      [uploader]=\"uploader\" />\n  </div>\n\n  <div class=\"col-md-9\" style=\"margin-bottom: 40px\" *ngIf=\"uploader?.queue?.length\">\n\n    <h3>Upload queue</h3>\n    <p>Queue length: {{ uploader?.queue?.length }}</p>\n\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th width=\"50%\">Name</th>\n          <th>Size</th>\n          <!-- <th>Progress</th>\n          <th>Status</th>\n          <th>Actions</th> -->\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of uploader.queue\">\n          <td><strong>{{ item?.file?.name }}</strong></td>\n          <td *ngIf=\"uploader.options.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n          <!-- <td *ngIf=\"uploader.options.isHTML5\">\n            <div class=\"progress\" style=\"margin-bottom: 0;\">\n              <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n            </div>\n          </td>\n          <td class=\"text-center\">\n            <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\n            <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n            <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n          </td>\n          <td nowrap>\n            <button type=\"button\" class=\"btn btn-success btn-xs\" (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n              <span class=\"glyphicon glyphicon-upload\"></span> Upload\n            </button>\n            <button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n              <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n            </button>\n            <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"item.remove()\">\n              <span class=\"glyphicon glyphicon-trash\"></span> Remove\n            </button>\n          </td> -->\n        </tr>\n      </tbody>\n    </table>\n\n    <div>\n      <div>\n        Queue progress:\n        <div class=\"progress mb-4\">\n          <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n        </div>\n      </div>\n      <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n        <span class=\"fa fa-upload\"></span> Upload\n      </button>\n      <button type=\"button\" class=\"btn btn-warning btn-s\" (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n        <span class=\"fa fa-ban\"></span> Cancel\n      </button>\n      <button type=\"button\" class=\"btn btn-danger btn-s\" (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n        <span class=\"fa fa-trash\"></span> Remove\n      </button>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/members/photo-editor/photo-editor.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/members/photo-editor/photo-editor.component.ts ***!
  \****************************************************************/
/*! exports provided: PhotoEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoEditorComponent", function() { return PhotoEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alertify.service */ "./src/app/services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PhotoEditorComponent = /** @class */ (function () {
    function PhotoEditorComponent(authService, userService, alertify) {
        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
        this.hasBaseDropZoneOver = false;
    }
    PhotoEditorComponent.prototype.ngOnInit = function () {
        this.initializeUploader();
    };
    PhotoEditorComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    PhotoEditorComponent.prototype.initializeUploader = function () {
        var _this = this;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({
            url: this.baseUrl + "users/" + this.authService.getId() + "/photos",
            authToken: "Bearer " + localStorage.getItem("token"),
            isHTML5: true,
            allowedFileType: ["image"],
            removeAfterUpload: true,
            autoUpload: false,
            maxFileSize: 10 * 1024 * 1024
        });
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            if (response) {
                var res = JSON.parse(response);
                var photo = {
                    id: res.id,
                    url: res.url,
                    dateAdded: res.dateAdded,
                    description: res.description,
                    isMain: res.isMain
                };
                _this.photos.push(photo);
                if (photo.isMain) {
                    var user = JSON.parse(localStorage.getItem("user"));
                    user.photoUrl = photo.url;
                    localStorage.setItem("user", JSON.stringify(user));
                }
            }
        };
    };
    PhotoEditorComponent.prototype.setMainPhoto = function (photo) {
        var _this = this;
        this.userService.setMainPhoto(this.authService.getId(), photo.id)
            .subscribe(function () {
            _this.currentMainPhoto = _this.photos.filter(function (p) { return p.isMain === true; })[0];
            _this.currentMainPhoto.isMain = false;
            photo.isMain = true;
            var user = JSON.parse(localStorage.getItem("user"));
            user.photoUrl = photo.url;
            localStorage.setItem("user", JSON.stringify(user));
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    PhotoEditorComponent.prototype.deletePhoto = function (photoId) {
        var _this = this;
        this.alertify.confirm("Are you sure you want to delete this photo?", function () {
            _this.userService.deletePhoto(_this.authService.getId(), photoId).subscribe(function () {
                _this.photos.splice(_this.photos.findIndex(function (p) { return p.id == photoId; }), 1);
                _this.alertify.success("Photo has been deleted");
            }, function (error) {
                _this.alertify.error("Failed to delete the photo");
            });
            return 0;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PhotoEditorComponent.prototype, "photos", void 0);
    PhotoEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photo-editor',
            template: __webpack_require__(/*! ./photo-editor.component.html */ "./src/app/members/photo-editor/photo-editor.component.html"),
            styles: [__webpack_require__(/*! ./photo-editor.component.css */ "./src/app/members/photo-editor/photo-editor.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]])
    ], PhotoEditorComponent);
    return PhotoEditorComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-circle {\r\n    max-height: 50px;\r\n}\r\n\r\ntd {\r\n    vertical-align: middle;\r\n}"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n  <div class=\"row\">\n    <div class=\"btn-group\">\n      <button class=\"btn btn-primary\" [(ngModel)]=\"messageContainer\" btnRadio=\"Unread\" (click)=\"loadMessages()\">\n        <i class=\"fa fa-envelope\"></i> Unread\n      </button>\n      <button class=\"btn btn-primary\" [(ngModel)]=\"messageContainer\" btnRadio=\"Inbox\" (click)=\"loadMessages()\">\n        <i class=\"fa fa-envelope-open\"></i> Inbox\n      </button>\n      <button class=\"btn btn-primary\" [(ngModel)]=\"messageContainer\" btnRadio=\"Outbox\" (click)=\"loadMessages()\">\n        <i class=\"fa fa-paper-plane\"></i> Outbox\n      </button>\n    </div>\n  </div>\n\n  <div class=\"row\" *ngIf=\"messages?.length == 0\">\n    <h3>No messages</h3>\n  </div>\n\n  <div class=\"row\" *ngIf=\"messages?.length > 0\">\n    <table class=\"table table-hover mt-3\" style=\"cursor: pointer\" *ngIf=\"messages\">\n      <tr>\n        <th style=\"width: 40%\">Message</th>\n        <th style=\"width: 20%\">From / To</th>\n        <th style=\"width: 20%\">Sent / Received</th>\n        <th style=\"width: 20%\"></th>\n      </tr>\n      <tr *ngFor=\"let message of messages\" [routerLink]=\"['/members', \n        messageContainer == 'Outbox' ? message.recipientId : message.senderId]\" [queryParams]=\"{tab: 3}\">\n        <td>{{message.content}}</td>\n        <td>\n          <div *ngIf=\"messageContainer != 'Outbox'\">\n                <img src={{message?.senderPhotoUrl}} class=\"img-circle rounded-circle mr-2\">\n                <strong>{{message.senderKnownAs}}</strong>\n          </div>\n          <div *ngIf=\"messageContainer == 'Outbox'\">\n                <img src={{message?.recipientPhotoUrl}} class=\"img-circle rounded-circle mr-2\">\n                <strong>{{message.recipientKnownAs}}</strong>\n          </div>\n        </td>\n        <td>{{message.messageSent | timeAgo}}</td>\n        <td>\n          <button class=\"btn btn-danger\" (click)=\"$event.stopPropagation()\" (click)=\"deleteMessageConfirm(message.id)\">Delete</button>\n        </td>\n      </tr>\n    </table>\n\n  </div>\n\n</div>\n\n<div class=\"d-flex justify-content-center\" *ngIf=\"pagination\">\n    <pagination [boundaryLinks]=\"true\" \n                [totalItems]=\"pagination.totalItems\"\n                [itemsPerPage]=\"pagination.itemsPerPage\"\n                [(ngModel)]=\"pagination.currentPage\"\n                (pageChanged)=\"pageChanged($event)\"\n              previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\n  </pagination>\n  </div>"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(authService, userService, alertify) {
        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
        this.pageNumber = 1;
        this.pageSize = 5;
        this.messageContainer = "Unread";
        this.messageParams = {};
    }
    MessagesComponent.prototype.ngOnInit = function () {
        this.loadMessages();
    };
    MessagesComponent.prototype.loadMessages = function () {
        var _this = this;
        this.userService.getMessages(this.authService.getId(), this.pageNumber, this.pageSize, this.messageContainer)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (messages) {
            var userId = +_this.authService.getId();
            messages.result.forEach(function (message) {
                if (message.recipientId === userId)
                    _this.userService.markMessageAsRead(userId, message.id);
            });
        }))
            .subscribe(function (response) {
            _this.messages = response.result;
            _this.pagination = response.pagination;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MessagesComponent.prototype.deleteMessageConfirm = function (id) {
        var _this = this;
        this.alertify.confirm("Are you sure you want to delete this message?", function () {
            _this.deleteMessage(id);
            return 0;
        });
    };
    MessagesComponent.prototype.deleteMessage = function (id) {
        var _this = this;
        this.userService.deleteMessage(this.authService.getId(), id).subscribe(function () {
            _this.alertify.success("Message has been deleted");
            _this.messages.splice(_this.messages.findIndex(function (m) { return m.id === id; }), 1);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MessagesComponent.prototype.pageChanged = function (event) {
        this.pageNumber = event.page;
        this.loadMessages();
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/models/pagination.ts":
/*!**************************************!*\
  !*** ./src/app/models/pagination.ts ***!
  \**************************************/
/*! exports provided: PaginatedResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatedResult", function() { return PaginatedResult; });
var PaginatedResult = /** @class */ (function () {
    function PaginatedResult() {
    }
    return PaginatedResult;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link:focus {\r\n    outline: 1px dotted whitesmoke;\r\n}\r\n\r\n.user-image {\r\n    max-height: 50px;\r\n    border: 2px solid white;\r\n    display: inline;\r\n    border-radius: 50%;\r\n}"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" [routerLink]=\"[ '/home' ]\">Dating App</a>\n\n    <ul class=\"navbar-nav mr-auto\" *ngIf=\"loggedIn()\">\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" [routerLink]=\"[ '/members' ]\">Matches</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" [routerLink]=\"[ '/lists' ]\">Lists</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" [routerLink]=\"[ '/messages' ]\">Messages</a>\n      </li>\n    </ul>\n\n    <form #loginForm=\"ngForm\" *ngIf=\"!loggedIn();else welcome\" (ngSubmit)=\"login(loginForm.value)\" class=\"form-inline my-2 my-lg-0\">\n      <input name=\"username\" ngModel required\n        class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Username\">\n      <input name=\"password\" ngModel required\n        class=\"form-control mr-sm-2\" type=\"password\" placeholder=\"Password\">\n      <button [disabled]=\"loginForm.invalid\"\n        class=\"btn btn-success my-2 my-sm-0\" type=\"submit\"\n      >Login</button>\n    </form>\n\n    <ng-template #welcome>\n      <span class=\"mr-2\">\n        <img class=\"user-image\" [src]=\"getCurrentUser().photoUrl || '../../assets/user.png'\">\n      </span>\n      <div dropdown class=\"dropdown\">\n        <a dropdownToggle (click)=\"false\"\n          class=\"dropdown-toggle text-light\"\n          style=\"cursor: pointer;\"\n          >Welcome {{getCurrentUser().knownAs | titlecase}}\n        </a>\n        \n        <div *dropdownMenu class=\"dropdown-menu\">\n          <a href=\"#\" class=\"dropdown-item\"\n            style=\"cursor: pointer;\" [routerLink]=\"['/member/edit']\">\n            <i class=\"fa fa-user\"></i> Edit Profile\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" style=\"cursor: pointer;\"\n            (click)=\"logout()\">\n            <i class=\"fa fa-sign-out\"></i> Logout\n          </a>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = /** @class */ (function () {
    function NavComponent(authService, alertify, router) {
        var _this = this;
        this.authService = authService;
        this.alertify = alertify;
        this.router = router;
        //forwards the user to home when logged out
        window.addEventListener("storage", function () {
            if (localStorage.getItem("token") == null)
                _this.router.navigate(["/home"]);
        });
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.login = function (form) {
        var _this = this;
        this.authService.login(form).subscribe(function (next) {
            _this.alertify.success("Successfully Logged in");
        }, function (error) {
            _this.alertify.error(error);
        }, function () {
            _this.router.navigate(["/members"]);
        });
    };
    NavComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    NavComponent.prototype.getCurrentUser = function () {
        return this.authService.getCurrentUser();
    };
    NavComponent.prototype.logout = function () {
        this.authService.logout();
        this.alertify.message("Successfully logged out");
        this.router.navigate(["/home"]);
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n  <h2 name=\"signUp\" class=\"text-center text-primary\">Sign Up</h2>\n  <hr>\n\n  <div class=\"form-group\">\n    <label class=\"control-label\" style=\"margin-right:10px\">I am a: </label>\n    <label class=\"radio-inline\">\n      <input class=\"mr-3\" type=\"radio\" value=\"male\" formControlName=\"gender\">Male\n    </label>\n    <label class=\"radio-inline ml-3\">\n      <input class=\"mr-3\" type=\"radio\" value=\"female\" formControlName=\"gender\">Female\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <input formControlName=\"username\"\n      [ngClass]=\"{'is-invalid': registerForm.get('username').errors\n        && registerForm.get('username').touched}\"\n      type=\"text\" class=\"form-control\" placeholder=\"Username\">\n    <div *ngIf=\"registerForm.get('username').hasError('required')\"\n    class=\"invalid-feedback\">Username is required</div>\n  </div>\n\n  <div class=\"form-group\">\n    <input [ngClass]=\"{'is-invalid': registerForm.get('knownAs').errors && registerForm.get('knownAs').touched}\"\n      class=\"form-control\" placeholder=\"Known as\" formControlName=\"knownAs\">\n    <div class=\"invalid-feedback\"\n      *ngIf=\"registerForm.get('knownAs').touched && registerForm.get('knownAs').hasError('required')\">\n      Known as is required\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <input [ngClass]=\"{'is-invalid': registerForm.get('dateOfBirth').errors\n      && registerForm.get('dateOfBirth').touched}\"\n      class=\"form-control\" bsDatepicker [bsConfig]=\"bsConfig\"\n      placeholder=\"Date of Birth\" formControlName=\"dateOfBirth\" type=\"string\" >\n    <div class=\"invalid-feedback\"\n      *ngIf=\"registerForm.get('dateOfBirth').touched && registerForm.get('dateOfBirth').hasError('required')\">\n      Date of Birth is required\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <input [ngClass]=\"{'is-invalid': registerForm.get('city').errors && registerForm.get('city').touched}\"\n      class=\"form-control\" placeholder=\"City\" formControlName=\"city\">\n    <div class=\"invalid-feedback\"\n      *ngIf=\"registerForm.get('city').touched && registerForm.get('city').hasError('required')\">\n      City is required\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <input [ngClass]=\"{'is-invalid': registerForm.get('country').errors && registerForm.get('country').touched}\"\n      class=\"form-control\" placeholder=\"Country\" formControlName=\"country\">\n    <div class=\"invalid-feedback\"\n      *ngIf=\"registerForm.get('country').touched && registerForm.get('country').hasError('required')\">\n      Country is required\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <input formControlName=\"password\"\n      [ngClass]=\"{'is-invalid': registerForm.get('password').errors\n      && registerForm.get('password').touched}\"\n      type=\"password\" class=\"form-control\" placeholder=\"Password\">\n    <div *ngIf=\"registerForm.get('password').hasError('required')\"\n      class=\"invalid-feedback\">Password is required</div>\n    <div *ngIf=\"registerForm.get('password').hasError('minlength')\"\n      class=\"invalid-feedback\">\n      Password must be more than {{ registerForm.get('password').errors.minlength.requiredLength }} characters\n    </div>\n    <div *ngIf=\"registerForm.get('password').hasError('maxlength')\"\n      class=\"invalid-feedback\">\n      Password must be less than {{ registerForm.get('password').errors.maxlength.requiredLength }} characters\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <input formControlName=\"confirmPassword\"\n      [ngClass]=\"{'is-invalid': registerForm.get('confirmPassword').errors\n        && registerForm.get('confirmPassword').touched\n        || registerForm.hasError('mismatch')\n          && registerForm.get('confirmPassword').touched}\"\n      type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\">\n    <div *ngIf=\"registerForm.get('confirmPassword').hasError('required')\"\n      class=\"invalid-feedback\">Confirm your Password</div>\n    <div *ngIf=\"registerForm.hasError('mismatch')\"\n    class=\"invalid-feedback\">Passwords doesn't match</div>\n  </div>\n    \n  <div class=\"form-group text-center\">\n    <button [disabled]=\"registerForm.invalid\" class=\"btn btn-success mr-2\" type=\"submit\">Register</button>\n    <button class=\"btn btn-default\" type=\"button\" (click)=\"cancel()\">Cancel</button>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, alertify, fb, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.fb = fb;
        this.router = router;
        this.cancelRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.bsConfig = { containerClass: "theme-red" };
        this.createRegisterForm();
    };
    RegisterComponent.prototype.createRegisterForm = function () {
        this.registerForm = this.fb.group({
            gender: ['male'],
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            knownAs: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            dateOfBirth: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            city: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            country: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(8)]],
            confirmPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        }, {
            validator: this.passwordMatchValidator
        });
    };
    RegisterComponent.prototype.passwordMatchValidator = function (g) {
        return g.get("password").value === g.get("confirmPassword").value
            ? null : { "mismatch": true };
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.registerForm.valid) {
            this.user = Object.assign({}, this.registerForm.value);
            this.authService.register(this.user).subscribe(function (next) {
                _this.alertify.success("Successfully registerd");
            }, function (error) {
                _this.alertify.error(error);
            }, function () {
                _this.authService.login(_this.user).subscribe(function () {
                    _this.router.navigate(["/members"]);
                });
            });
            this.alertify.error(this.registerForm.value);
        }
    };
    RegisterComponent.prototype.cancel = function () {
        this.cancelRegister.emit(false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "cancelRegister", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lists/lists.component */ "./src/app/lists/lists.component.ts");
/* harmony import */ var _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./members/member-list/member-list.component */ "./src/app/members/member-list/member-list.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./members/member-detail/member-detail.component */ "./src/app/members/member-detail/member-detail.component.ts");
/* harmony import */ var _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./members/member-edit/member-edit.component */ "./src/app/members/member-edit/member-edit.component.ts");
/* harmony import */ var _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/prevent-unsaved-changes.guard */ "./src/app/guards/prevent-unsaved-changes.guard.ts");








var appRoutes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    {
        path: "",
        runGuardsAndResolvers: "always",
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            { path: "lists", component: _lists_lists_component__WEBPACK_IMPORTED_MODULE_1__["ListsComponent"] },
            { path: "members/:id", component: _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_5__["MemberDetailComponent"] },
            { path: "member/edit", component: _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_6__["MemberEditComponent"], canDeactivate: [_guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_7__["PreventUnsavedChanges"]] },
            { path: "members", component: _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_2__["MemberListComponent"] },
            { path: "messages", component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_3__["MessagesComponent"] },
        ]
    },
    { path: "**", redirectTo: "", pathMatch: "full" }
];


/***/ }),

/***/ "./src/app/services/alertify.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/alertify.service.ts ***!
  \**********************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.confirm = function (message, okCallback) {
        alertify.confirm(message, function (e) {
            if (e)
                okCallback();
            else { }
        });
    };
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.message(message);
    };
    AlertifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "auth/";
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"];
    }
    AuthService.prototype.login = function (model) {
        return this.http.post(this.baseUrl + "login", model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            if (response) {
                localStorage.setItem("token", response.token);
                localStorage.setItem("user", JSON.stringify(response.user));
            }
        }));
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    };
    AuthService.prototype.register = function (user) {
        return this.http.post(this.baseUrl + "register", user);
    };
    AuthService.prototype.loggedIn = function () {
        var token = localStorage.getItem("token");
        this.decodedToken();
        return !!token;
    };
    AuthService.prototype.decodedToken = function () {
        return this.jwtHelper.decodeToken(localStorage.getItem("token"));
    };
    AuthService.prototype.getCurrentUser = function () {
        return JSON.parse(localStorage.getItem("user"));
    };
    AuthService.prototype.getUsername = function () {
        return this.decodedToken().unique_name || "";
    };
    AuthService.prototype.getId = function () {
        return this.decodedToken().nameid;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/services/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor, ErrorInterceptorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptorProvider", function() { return ErrorInterceptorProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor() {
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                if (error.status === 401)
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.statusText);
                var applicationError = error.headers.get("Application-Error");
                if (applicationError) {
                    console.error(applicationError);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(applicationError);
                }
                var serverError = error.error;
                var modelStateError = '';
                if (serverError && typeof serverError === 'object') {
                    for (var key in serverError) {
                        if (serverError[key]) {
                            modelStateError += serverError[key] + '\n';
                        }
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(modelStateError || serverError || 'Server Error');
            }
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());

var ErrorInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: ErrorInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/pagination */ "./src/app/models/pagination.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// const httpOptions = {
//   headers: new HttpHeaders({
//     "Authorization": "Bearer " + localStorage.getItem("token")
//   })
// };
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    UserService.prototype.getUsers = function (page, itemsPerPage, userParams, likesParams) {
        var paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginatedResult"]();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (page != null && itemsPerPage != null) {
            params = params.append("pageNumber", page);
            params = params.append("pageSize", itemsPerPage);
        }
        if (userParams != null) {
            params = params.append("minAge", userParams.minAge);
            params = params.append("maxAge", userParams.maxAge);
            params = params.append("gender", userParams.gender);
            params = params.append("orderBy", userParams.orderBy);
        }
        if (likesParams === "Likers") {
            params = params.append("likers", "true");
            params = params.append("likees", "false");
        }
        if (likesParams === "Likees") {
            params = params.append("likers", "false");
            params = params.append("likees", "true");
        }
        return this.http.get(this.baseUrl + "users", { observe: 'response', params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            paginatedResult.result = response.body;
            if (response.headers.get("Pagination") != null) {
                paginatedResult.pagination = JSON.parse(response.headers.get("Pagination"));
            }
            return paginatedResult;
        }));
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.baseUrl + "users/" + id);
    };
    UserService.prototype.updateUser = function (id, user) {
        return this.http.put(this.baseUrl + "users/" + id, user);
    };
    UserService.prototype.setMainPhoto = function (userId, photoId) {
        return this.http.post(this.baseUrl + "users/" + userId + "/photos/" + photoId + "/setMain", {});
    };
    UserService.prototype.deletePhoto = function (userId, photoId) {
        return this.http.delete(this.baseUrl + "users/" + userId + "/photos/" + photoId);
    };
    UserService.prototype.sendLike = function (userId, recipientId) {
        return this.http.post(this.baseUrl + "users/" + userId + "/like/" + recipientId, {});
    };
    UserService.prototype.getMessages = function (userId, page, itemsPerPage, messageContainer) {
        var paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginatedResult"]();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if (page != null && itemsPerPage != null) {
            params = params.append("pageNumber", page);
            params = params.append("pageSize", itemsPerPage);
            params = params.append("messageContainer", messageContainer);
        }
        return this.http.get(this.baseUrl + "users/" + userId + "/messages", { observe: "response", params: params }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            paginatedResult.result = response.body;
            if (response.headers.get("Pagination") !== null)
                paginatedResult.pagination = JSON.parse(response.headers.get("Pagination"));
            return paginatedResult;
        }));
    };
    UserService.prototype.getMessageThread = function (senderId, recipientId) {
        return this.http.get(this.baseUrl + "users/" + senderId + "/messages/thread/" + recipientId);
    };
    UserService.prototype.sendMessage = function (recipientId, message) {
        return this.http.post(this.baseUrl + "users/" + recipientId + "/messages", message);
    };
    UserService.prototype.deleteMessage = function (userId, messageId) {
        return this.http.post(this.baseUrl + "users/" + userId + "/messages/" + messageId, {});
    };
    UserService.prototype.markMessageAsRead = function (userId, messageId) {
        this.http.post(this.baseUrl + "users/" + userId + "/messages/" + messageId + "/read", {})
            .subscribe();
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: "http://localhost:5000/api/"
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\web\websites\DatingApp\DatingApp-SPA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map