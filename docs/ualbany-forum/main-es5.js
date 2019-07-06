(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-home></app-home>\n<!-- <router-outlet></router-outlet> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/forum-section/forum-section.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/forum-section/forum-section.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel [expanded]=\"true\" class=\"forum-section\">\n    <mat-expansion-panel-header class=\"header-panel\">\n      <mat-panel-title>\n        {{forumSection.title}}\n      </mat-panel-title>\n      <mat-panel-description align=\"end\">\n        {{forumSection.categoryDescription}}\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <mat-card *ngFor=\"let categories of forumSection.forumSubcategories\" class=\"cat-card mt-xl-2\">\n      <mat-card-header>\n        <mat-card-title>{{categories.title}}</mat-card-title>\n        <mat-card-subtitle>{{categories.topicDescription}}</mat-card-subtitle>\n      </mat-card-header>\n    </mat-card>\n</mat-expansion-panel>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/forum/forum.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/forum/forum.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-forum-section *ngFor=\"let cats of categories\" [forumSection]=\"cats\"></app-forum-section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\r\n  <mat-tab-group mat-align-tabs=\"center\" backgroundColor=\"primary\" dynamicHeight >\r\n    <mat-tab label=\"Home\">\r\n      <div class=\"home\">\r\n        <mat-card class=\"my-card\">\r\n          <mat-card-header>\r\n            <mat-card-title>Dane Express</mat-card-title>\r\n            <mat-card-subtitle>A place to socialize, hangout, and meet new people.</mat-card-subtitle>\r\n            <img mat-card-avatar src=\"assets/dane.png\">\r\n          </mat-card-header>\r\n          <mat-card-content>\r\n            <p class=\"lead\">Dane Express brings together students all across the University to keep people updated with news, events, social-gathers, and more! Sign up and start networking with other students!</p>\r\n          </mat-card-content>\r\n          <mat-card-actions align=\"center\">\r\n            <button mat-raised-button color=\"primary\" (click)=\"register()\">Register</button>\r\n            <button mat-raised-button color=\"primary\" (click)=\"login()\">Login</button>\r\n          </mat-card-actions>\r\n        </mat-card>\r\n        <app-register-form *ngIf=\"showRegister\"></app-register-form>\r\n        <app-login-form *ngIf=\"showLogin\"></app-login-form>\r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"News\">\r\n      <app-news-feed></app-news-feed>\r\n    </mat-tab>\r\n    <mat-tab label=\"Forum\">\r\n      <app-forum></app-forum>\r\n    </mat-tab>\r\n    <mat-tab label=\"Courses\">\r\n\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</main>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login-form/login-form.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login-form/login-form.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title>Login</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <form>\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Username</mat-label>\n        <input matNativeControl type=\"text\">\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\">\n          <mat-label>Password</mat-label>\n        <input matNativeControl type=\"password\">\n      </mat-form-field>\n      <button mat-button>Login <mat-icon>send</mat-icon></button>\n    </form>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/news-article/news-article.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/news-article/news-article.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"news-article\">\n  <mat-card-header>\n    <mat-card-title>{{article.title}}</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    {{article.description}}\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-raised-button (click)=\"react(article, $event)\" matBadge={{article.likes}} matBadgeSize=\"small\" id=\"like\">\n      <mat-icon color=\"primary\">thumb_up</mat-icon>\n    </button>\n    <button mat-raised-button (click)=\"react(article, $event)\" matBadge={{article.dislikes}} matBadgeSize=\"small\" id=\"dislike\">\n      <mat-icon color=\"warn\">thumb_down</mat-icon>\n    </button>\n  </mat-card-actions>\n  <mat-card-footer>\n    <mat-card-subtitle class=\"ml-md-3\">{{article.date}}</mat-card-subtitle>\n  </mat-card-footer>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/news-feed/news-feed.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/news-feed/news-feed.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-news-article *ngFor=\"let article of news\" [article]=\"article\"></app-news-article>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/register-form/register-form.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/register-form/register-form.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title>Register</mat-card-title>\n    <mat-card-subtitle>Sign up now to start connecting!</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <mat-vertical-stepper [linear]=\"isLinear\" #stepper>\n      <mat-step [stepControl]=\"firstFormGroup\">\n        <form [formGroup]=\"firstFormGroup\">\n          <ng-template matStepLabel>What do you want us to call you?</ng-template>\n          <mat-form-field>\n            <input matInput [(ngModel)]=\"username\" placeholder=\"Username\" formControlName=\"firstCtrl\" required>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperNext>Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"secondFormGroup\">\n        <form [formGroup]=\"secondFormGroup\">\n          <ng-template matStepLabel>What is your e-mail?</ng-template>\n          <mat-form-field>\n            <input matInput [(ngModel)]=\"email\" placeholder=\"E-Mail Address\" formControlName=\"secondCtrl\" [type]=\"email\" required>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext>Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"passwordGroup\">\n        <form [formGroup]=\"passwordGroup\">\n          <ng-template matStepLabel>Enter a password</ng-template>\n          <mat-form-field>\n            <input matInput [(ngModel)]=\"password\" placeholder=\"Password\" formControlName=\"thirdCtrl\" type=\"password\" required>\n          </mat-form-field>\n          <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button matStepperNext>Next</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step>\n        <ng-template matStepLabel>Confirm</ng-template>\n        \n        <mat-list *ngIf=\"!loading\">\n          <mat-list-item>Your Username: {{username}}</mat-list-item>\n          <mat-list-item>Your E-Mail: {{email}}</mat-list-item>\n        </mat-list>\n        <mat-spinner *ngIf=\"loading\"></mat-spinner>\n        <div>\n          <button mat-button matStepperPrevious>Back</button>\n          <button mat-button (click)=\"register()\">Confirm</button>\n        </div>\n      </mat-step>\n    </mat-vertical-stepper>\n  </mat-card-content>\n  \n  \n</mat-card>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_forum_forum_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/forum/forum.component */ "./src/app/components/forum/forum.component.ts");




var routes = [
    { path: 'forum', component: _components_forum_forum_component__WEBPACK_IMPORTED_MODULE_3__["ForumComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ualbany-forum';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _components_news_feed_news_feed_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/news-feed/news-feed.component */ "./src/app/components/news-feed/news-feed.component.ts");
/* harmony import */ var _components_news_article_news_article_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/news-article/news-article.component */ "./src/app/components/news-article/news-article.component.ts");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/register-form/register-form.component */ "./src/app/components/register-form/register-form.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/login-form/login-form.component */ "./src/app/components/login-form/login-form.component.ts");
/* harmony import */ var _components_forum_forum_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/forum/forum.component */ "./src/app/components/forum/forum.component.ts");
/* harmony import */ var _components_forum_section_forum_section_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/forum-section/forum-section.component */ "./src/app/components/forum-section/forum-section.component.ts");

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _components_news_feed_news_feed_component__WEBPACK_IMPORTED_MODULE_17__["NewsFeedComponent"],
                _components_news_article_news_article_component__WEBPACK_IMPORTED_MODULE_18__["NewsArticleComponent"],
                _components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_20__["RegisterFormComponent"],
                _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_22__["LoginFormComponent"],
                _components_forum_forum_component__WEBPACK_IMPORTED_MODULE_23__["ForumComponent"],
                _components_forum_section_forum_section_component__WEBPACK_IMPORTED_MODULE_24__["ForumSectionComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/forum-section/forum-section.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/forum-section/forum-section.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forum-section {\r\n  background-color: #F0DFAD;\r\n  \r\n}\r\n.mat-expansion-panel-header {\r\n  font-size: 24px;\r\n  font-family: Calibri;\r\n}\r\n.cat-card {\r\n  background-color: #896279;\r\n}\r\n@media only screen  and (min-width: 1920px)\r\n{\r\n  .forum-section {\r\n    width: 1920px;\r\n    margin: 0 auto;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3J1bS1zZWN0aW9uL2ZvcnVtLXNlY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5Qjs7QUFFM0I7QUFDQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBOztFQUVFO0lBQ0UsYUFBYTtJQUNiLGNBQWM7RUFDaEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ydW0tc2VjdGlvbi9mb3J1bS1zZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ydW0tc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwREZBRDtcclxuICBcclxufVxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LWZhbWlseTogQ2FsaWJyaTtcclxufVxyXG4uY2F0LWNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4OTYyNzk7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogMTkyMHB4KVxyXG57XHJcbiAgLmZvcnVtLXNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDE5MjBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/forum-section/forum-section.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/forum-section/forum-section.component.ts ***!
  \*********************************************************************/
/*! exports provided: ForumSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumSectionComponent", function() { return ForumSectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ForumSectionComponent = /** @class */ (function () {
    function ForumSectionComponent() {
    }
    ForumSectionComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ForumSectionComponent.prototype, "forumSection", void 0);
    ForumSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forum-section',
            template: __webpack_require__(/*! raw-loader!./forum-section.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/forum-section/forum-section.component.html"),
            styles: [__webpack_require__(/*! ./forum-section.component.css */ "./src/app/components/forum-section/forum-section.component.css")]
        })
    ], ForumSectionComponent);
    return ForumSectionComponent;
}());



/***/ }),

/***/ "./src/app/components/forum/forum.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/forum/forum.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ydW0vZm9ydW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/forum/forum.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/forum/forum.component.ts ***!
  \*****************************************************/
/*! exports provided: ForumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumComponent", function() { return ForumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Forum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Forum */ "./src/app/models/Forum.ts");



var ForumComponent = /** @class */ (function () {
    function ForumComponent() {
        this.categories = new Array();
        var categories = [
            {
                title: 'Welcome',
                categoryDescription: 'DaneExpress offers a rich, customized Forum for users to discuss about various topics.',
                forumSubcategories: [
                    new _models_Forum__WEBPACK_IMPORTED_MODULE_2__["ForumSubCategory"]('General Discussion', 'A place to discuss about all topics relevant to UAlbany.'),
                    new _models_Forum__WEBPACK_IMPORTED_MODULE_2__["ForumSubCategory"]('Rules & Announcements', 'All new members must read and enforce our policy across this platform')
                ]
            },
            {
                title: 'Off-Topic',
                categoryDescription: 'Off-Topic Discussions that do not pertain to UAlbany.',
                forumSubcategories: [
                    new _models_Forum__WEBPACK_IMPORTED_MODULE_2__["ForumSubCategory"]('Off-Topic Discussion', 'A place to discuss about all off-topic interests.'),
                    new _models_Forum__WEBPACK_IMPORTED_MODULE_2__["ForumSubCategory"]('Memes', 'Post all of your memes here.'),
                    new _models_Forum__WEBPACK_IMPORTED_MODULE_2__["ForumSubCategory"]('Buying & Selling', 'A place to post listings or make offers for items.')
                ]
            },
            {
                title: 'Support',
                categoryDescription: 'Troubleshoot any errors or report any public issues.',
                forumSubcategories: [
                    new _models_Forum__WEBPACK_IMPORTED_MODULE_2__["ForumSubCategory"]('Bugs & Issues', 'Report all website bugs and issues here'),
                    new _models_Forum__WEBPACK_IMPORTED_MODULE_2__["ForumSubCategory"]('Memes', 'Post all of your memes here.')
                ]
            },
        ];
        for (var i in categories)
            this.categories.push(Object.assign(new _models_Forum__WEBPACK_IMPORTED_MODULE_2__["ForumCategory"](), categories[i]));
    }
    ForumComponent.prototype.ngOnInit = function () {
    };
    ForumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forum',
            template: __webpack_require__(/*! raw-loader!./forum.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/forum/forum.component.html"),
            styles: [__webpack_require__(/*! ./forum.component.css */ "./src/app/components/forum/forum.component.css")]
        })
    ], ForumComponent);
    return ForumComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.home {\r\n  width: 50%;\r\n  margin: 0 auto;\r\n  margin-top: 10px;\r\n}\r\n.my-card {\r\n  background-color: #E8C400;\r\n  border: 1px solid purple;\r\n}\r\n@media only screen and (max-width: 1400px)\r\n{\r\n  .home {\r\n    width: 100%;\r\n    margin-top: 0;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHdCQUF3QjtBQUMxQjtBQUVBOztFQUVFO0lBQ0UsV0FBVztJQUNYLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaG9tZSB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5teS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThDNDAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHB1cnBsZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpXHJcbntcclxuICAuaG9tZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.showRegister = false;
        this.showLogin = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.register = function () {
        this.showRegister = !this.showRegister;
        this.showLogin = false;
    };
    HomeComponent.prototype.login = function () {
        this.showLogin = !this.showLogin;
        this.showRegister = false;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login-form/login-form.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/login-form/login-form.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/login-form/login-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/login-form/login-form.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent() {
    }
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! raw-loader!./login-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.css */ "./src/app/components/login-form/login-form.component.css")]
        })
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/components/news-article/news-article.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/news-article/news-article.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".news-article {\r\n  width: 50%;\r\n  margin:0 auto;\r\n  margin-top: 5px;\r\n}\r\n\r\n@media only screen and (max-width: 1400px)\r\n{\r\n  .news-article {\r\n    width: 100%;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXdzLWFydGljbGUvbmV3cy1hcnRpY2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7O0VBRUU7SUFDRSxXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3cy1hcnRpY2xlL25ld3MtYXJ0aWNsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ld3MtYXJ0aWNsZSB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW46MCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpXHJcbntcclxuICAubmV3cy1hcnRpY2xlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/news-article/news-article.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/news-article/news-article.component.ts ***!
  \*******************************************************************/
/*! exports provided: NewsArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsArticleComponent", function() { return NewsArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewsArticleComponent = /** @class */ (function () {
    function NewsArticleComponent() {
    }
    NewsArticleComponent.prototype.ngOnInit = function () {
    };
    NewsArticleComponent.prototype.react = function (article, event) {
        if (event.target.id === "like") {
            console.log("Liking.");
            article.likes++;
        }
        else if (event.target.id === "dislike") {
            console.log("Disliking.");
            article.dislikes++;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NewsArticleComponent.prototype, "article", void 0);
    NewsArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-article',
            template: __webpack_require__(/*! raw-loader!./news-article.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/news-article/news-article.component.html"),
            styles: [__webpack_require__(/*! ./news-article.component.css */ "./src/app/components/news-article/news-article.component.css")]
        })
    ], NewsArticleComponent);
    return NewsArticleComponent;
}());



/***/ }),

/***/ "./src/app/components/news-feed/news-feed.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/news-feed/news-feed.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3cy1mZWVkL25ld3MtZmVlZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/news-feed/news-feed.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/news-feed/news-feed.component.ts ***!
  \*************************************************************/
/*! exports provided: NewsFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsFeedComponent", function() { return NewsFeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_NewsArticle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/NewsArticle */ "./src/app/models/NewsArticle.ts");



var NewsFeedComponent = /** @class */ (function () {
    function NewsFeedComponent() {
        this.news = new Array();
        var news = [
            {
                'id': '1',
                'title': 'Dane Mascot for UAlbany replaced!',
                'description': "UAlbany's Mascot, the Great Dane, for the past four years was played by John Smith. Today UAlbany announced that a new student part of the Student Association would take the role for the upcoming academic year from 2019 to 2020.",
                'date': new Date().toLocaleString(),
                'likes': 0,
                'dislikes': 0
            },
            {
                'id': 2,
                'title': 'UAlbany Campus Brings new room for Green Dining',
                'description': "We're finally seeing more room for healthier, organic, and rich options for dining. No more needing to worry about counting your calories, everything offered at our new Green Life store is under 200 calories!",
                'date': new Date().toLocaleString(),
                'likes': 0,
                'dislikes': 0
            },
            {
                'id': 3,
                'title': "SUNY Albany's class of 2020 will be the largest class to graduate since the class of 2000.",
                'description': "This upcoming class of 2020 will make records in all of SUNY history - They will be the largest graduating class since the class of 2000 at Stony Brook. We are proud and excited for the class of 2020, and we can't wait to celebrate this achievement.",
                'date': new Date().toLocaleString(),
                'likes': 0,
                'dislikes': 0
            }
        ];
        for (var newsarticle in news) {
            var article = new _models_NewsArticle__WEBPACK_IMPORTED_MODULE_2__["NewsArticle"]();
            Object.assign(article, news[newsarticle]);
            this.news.push(article);
        }
    }
    NewsFeedComponent.prototype.ngOnInit = function () {
    };
    NewsFeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-feed',
            template: __webpack_require__(/*! raw-loader!./news-feed.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/news-feed/news-feed.component.html"),
            styles: [__webpack_require__(/*! ./news-feed.component.css */ "./src/app/components/news-feed/news-feed.component.css")]
        })
    ], NewsFeedComponent);
    return NewsFeedComponent;
}());



/***/ }),

/***/ "./src/app/components/register-form/register-form.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/register-form/register-form.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\r\n  width: 100%;\r\n  background-color: white;\r\n}\r\n.form > * {\r\n  width: 80%;\r\n  display: block;\r\n  margin: 0 auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci1mb3JtL3JlZ2lzdGVyLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXItZm9ybS9yZWdpc3Rlci1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmZvcm0gPiAqIHtcclxuICB3aWR0aDogODAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/register-form/register-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/register-form/register-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFormComponent", function() { return RegisterFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var RegisterFormComponent = /** @class */ (function () {
    function RegisterFormComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = true;
        this.loading = false;
        this.isOpen = false;
    }
    RegisterFormComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.passwordGroup = this._formBuilder.group({
            thirdCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    RegisterFormComponent.prototype.register = function () {
        alert("Signing up.");
        this.loading = true;
    };
    RegisterFormComponent.prototype.toggle = function () {
        this.isOpen = !this.isOpen;
    };
    RegisterFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    RegisterFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-form',
            template: __webpack_require__(/*! raw-loader!./register-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/register-form/register-form.component.html"),
            styles: [__webpack_require__(/*! ./register-form.component.css */ "./src/app/components/register-form/register-form.component.css")]
        })
    ], RegisterFormComponent);
    return RegisterFormComponent;
}());



/***/ }),

/***/ "./src/app/models/Forum.ts":
/*!*********************************!*\
  !*** ./src/app/models/Forum.ts ***!
  \*********************************/
/*! exports provided: ForumCategory, ForumSubCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumCategory", function() { return ForumCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumSubCategory", function() { return ForumSubCategory; });
var ForumCategory = /** @class */ (function () {
    function ForumCategory() {
    }
    return ForumCategory;
}());
var ForumSubCategory = /** @class */ (function () {
    function ForumSubCategory(title, desc) {
        this.title = title;
        this.topicDescription = desc;
    }
    ForumSubCategory.ctorParameters = function () { return [
        { type: String },
        { type: String }
    ]; };
    return ForumSubCategory;
}());



/***/ }),

/***/ "./src/app/models/NewsArticle.ts":
/*!***************************************!*\
  !*** ./src/app/models/NewsArticle.ts ***!
  \***************************************/
/*! exports provided: NewsArticle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsArticle", function() { return NewsArticle; });
var NewsArticle = /** @class */ (function () {
    function NewsArticle() {
    }
    Object.defineProperty(NewsArticle.prototype, "title", {
        get: function () { return this._title; },
        set: function (title) { this._title = title; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsArticle.prototype, "id", {
        get: function () { return this._id; },
        set: function (id) { this._id = id; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsArticle.prototype, "description", {
        get: function () { return this._description; },
        set: function (description) { this._description = description; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsArticle.prototype, "date", {
        get: function () { return this._date; },
        set: function (date) { this._date = date; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsArticle.prototype, "likes", {
        get: function () { return this._likes; },
        set: function (likes) { this._likes = likes; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NewsArticle.prototype, "dislikes", {
        get: function () { return this._dislikes; },
        set: function (dislikes) { this._dislikes = dislikes; },
        enumerable: true,
        configurable: true
    });
    return NewsArticle;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Anson\Documents\DaneExpress\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map