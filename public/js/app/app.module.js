"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var mydatepicker_1 = require('mydatepicker');
var app_component_1 = require('./app.component');
var app_routing_1 = require('./app.routing');
var patientinfo_component_1 = require('./dashboard/patientinfo.component');
var auth_service_1 = require("./services/auth.service");
var signin_component_1 = require("./auth/signin.component");
var signup_component_1 = require("./auth/signup.component");
var page_not_found_component_1 = require("./error/page-not-found.component");
var http_1 = require("@angular/http");
var request_service_1 = require("./services/request.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.routing,
                http_1.HttpModule,
                mydatepicker_1.MyDatePickerModule
            ],
            declarations: [
                app_component_1.AppComponent,
                signin_component_1.SignInComponent,
                signup_component_1.SignUpComponent,
                patientinfo_component_1.PatientInfoComponent,
                page_not_found_component_1.PageNotFoundComponent
            ],
            providers: [
                auth_service_1.AuthService,
                request_service_1.PatientInfoService,
                app_routing_1.appRoutingProviders
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE2QyxlQUFlLENBQUMsQ0FBQTtBQUM3RCxpQ0FBK0IsMkJBQTJCLENBQUMsQ0FBQTtBQUMzRCxzQkFBK0IsZ0JBQWdCLENBQUMsQ0FBQTtBQUNoRCw2QkFBbUMsY0FBYyxDQUFDLENBQUE7QUFFbEQsOEJBQStCLGlCQUFpQixDQUFDLENBQUE7QUFDakQsNEJBQWtELGVBQWUsQ0FBQyxDQUFBO0FBRWxFLHNDQUF1QyxtQ0FBbUMsQ0FBQyxDQUFBO0FBRTNFLDZCQUEwQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3BELGlDQUE4Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3hELGlDQUE4Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3hELHlDQUFvQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3ZFLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxnQ0FBaUMsNEJBQTRCLENBQUMsQ0FBQTtBQXdCOUQ7SUFBQTtJQUNBLENBQUM7SUF2QkQ7UUFBQyxlQUFRLENBQXVCO1lBQzVCLE9BQU8sRUFBRTtnQkFDTCxnQ0FBYTtnQkFDYixtQkFBVztnQkFDWCxxQkFBTztnQkFDUCxpQkFBVTtnQkFDVixpQ0FBa0I7YUFDckI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osa0NBQWU7Z0JBQ2Ysa0NBQWU7Z0JBQ2YsNENBQW9CO2dCQUNwQixnREFBcUI7YUFDeEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsMEJBQVc7Z0JBQ1gsb0NBQWtCO2dCQUNsQixpQ0FBbUI7YUFDdEI7WUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBQzVCLENBQUM7O2lCQUFBO0lBRUYsZ0JBQUM7QUFBRCxDQURBLEFBQ0MsSUFBQTtBQURZLGlCQUFTLFlBQ3JCLENBQUEiLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIE5nTW9kdWxlTWV0YWRhdGFUeXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9ICBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSAgICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE15RGF0ZVBpY2tlck1vZHVsZSB9IGZyb20gJ215ZGF0ZXBpY2tlcic7XHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSAgIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7cm91dGluZywgYXBwUm91dGluZ1Byb3ZpZGVyc30gICAgICAgIGZyb20gJy4vYXBwLnJvdXRpbmcnO1xyXG5cclxuaW1wb3J0IHsgUGF0aWVudEluZm9Db21wb25lbnQgfSAgIGZyb20gJy4vZGFzaGJvYXJkL3BhdGllbnRpbmZvLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTaWduSW5Db21wb25lbnR9IGZyb20gXCIuL2F1dGgvc2lnbmluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1NpZ25VcENvbXBvbmVudH0gZnJvbSBcIi4vYXV0aC9zaWdudXAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7UGFnZU5vdEZvdW5kQ29tcG9uZW50fSBmcm9tIFwiLi9lcnJvci9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtIdHRwTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge1BhdGllbnRJbmZvU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvcmVxdWVzdC5zZXJ2aWNlXCI7XHJcblxyXG5ATmdNb2R1bGUoPE5nTW9kdWxlTWV0YWRhdGFUeXBlPntcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIHJvdXRpbmcsXHJcbiAgICAgICAgSHR0cE1vZHVsZSxcclxuICAgICAgICBNeURhdGVQaWNrZXJNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnQsXHJcbiAgICAgICAgU2lnbkluQ29tcG9uZW50LFxyXG4gICAgICAgIFNpZ25VcENvbXBvbmVudCxcclxuICAgICAgICBQYXRpZW50SW5mb0NvbXBvbmVudCxcclxuICAgICAgICBQYWdlTm90Rm91bmRDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBBdXRoU2VydmljZSxcclxuICAgICAgICBQYXRpZW50SW5mb1NlcnZpY2UsXHJcbiAgICAgICAgYXBwUm91dGluZ1Byb3ZpZGVyc1xyXG4gICAgXSxcclxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XHJcbn0iXX0=
