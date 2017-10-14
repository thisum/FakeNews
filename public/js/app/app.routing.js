"use strict";
/**
 * Created by Thisum on 8/12/2016.
 */
var router_1 = require('@angular/router');
var signin_component_1 = require("./auth/signin.component");
var signup_component_1 = require("./auth/signup.component");
var patientinfo_component_1 = require("./dashboard/patientinfo.component");
var page_not_found_component_1 = require("./error/page-not-found.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/signin',
        pathMatch: 'full'
    },
    {
        path: 'signin',
        component: signin_component_1.SignInComponent
    },
    {
        path: 'signup',
        component: signup_component_1.SignUpComponent
    },
    {
        path: 'dashboard',
        component: patientinfo_component_1.PatientInfoComponent
    },
    {
        path: '**',
        component: page_not_found_component_1.PageNotFoundComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
exports.appRoutingProviders = [];

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNILHVCQUFxQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZELGlDQUE4Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3hELGlDQUE4Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3hELHNDQUFtQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3ZFLHlDQUFvQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBRXZFLElBQU0sU0FBUyxHQUFXO0lBQ3RCO1FBQ0ksSUFBSSxFQUFFLEVBQUU7UUFDUixVQUFVLEVBQUUsU0FBUztRQUNyQixTQUFTLEVBQUUsTUFBTTtLQUNwQjtJQUNEO1FBQ0ksSUFBSSxFQUFFLFFBQVE7UUFDZCxTQUFTLEVBQUUsa0NBQWU7S0FDN0I7SUFDRDtRQUNJLElBQUksRUFBRSxRQUFRO1FBQ2QsU0FBUyxFQUFFLGtDQUFlO0tBQzdCO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsV0FBVztRQUNqQixTQUFTLEVBQUUsNENBQW9CO0tBQ2xDO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsSUFBSTtRQUNWLFNBQVMsRUFBRSxnREFBcUI7S0FDbkM7Q0FDSixDQUFDO0FBRVcsZUFBTyxHQUFHLHFCQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRTFDLDJCQUFtQixHQUFVLEVBRXpDLENBQUMiLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBUaGlzdW0gb24gOC8xMi8yMDE2LlxyXG4gKi9cclxuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1NpZ25JbkNvbXBvbmVudH0gZnJvbSBcIi4vYXV0aC9zaWduaW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U2lnblVwQ29tcG9uZW50fSBmcm9tIFwiLi9hdXRoL3NpZ251cC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtQYXRpZW50SW5mb0NvbXBvbmVudH0gZnJvbSBcIi4vZGFzaGJvYXJkL3BhdGllbnRpbmZvLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1BhZ2VOb3RGb3VuZENvbXBvbmVudH0gZnJvbSBcIi4vZXJyb3IvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50XCI7XHJcblxyXG5jb25zdCBhcHBSb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnJyxcclxuICAgICAgICByZWRpcmVjdFRvOiAnL3NpZ25pbicsXHJcbiAgICAgICAgcGF0aE1hdGNoOiAnZnVsbCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJ3NpZ25pbicsXHJcbiAgICAgICAgY29tcG9uZW50OiBTaWduSW5Db21wb25lbnRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJ3NpZ251cCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBTaWduVXBDb21wb25lbnRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJ2Rhc2hib2FyZCcsXHJcbiAgICAgICAgY29tcG9uZW50OiBQYXRpZW50SW5mb0NvbXBvbmVudFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnKionLFxyXG4gICAgICAgIGNvbXBvbmVudDogUGFnZU5vdEZvdW5kQ29tcG9uZW50XHJcbiAgICB9XHJcbl07XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGluZyA9IFJvdXRlck1vZHVsZS5mb3JSb290KGFwcFJvdXRlcyk7XHJcblxyXG5leHBvcnQgY29uc3QgYXBwUm91dGluZ1Byb3ZpZGVyczogYW55W10gPSBbXHJcblxyXG5dOyJdfQ==
