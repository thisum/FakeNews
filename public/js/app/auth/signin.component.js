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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("../services/auth.service");
var User_1 = require("../obj/User");
/**
 * Created by Thisum on 8/1/2016.
 */
var SignInComponent = (function () {
    function SignInComponent(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
        this.model = new User_1.User("", "");
    }
    SignInComponent.prototype.onSubmit = function () {
        var _this = this;
        this._authService.signin(this.model)
            .then(function (result) { _this._router.navigateByUrl('/dashboard'); })
            .catch(function (error) { return console.log(error); });
    };
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.hasLogin = function () {
        var signedIn = this._authService.hasLoggedIn();
        if (signedIn) {
            this._router.navigateByUrl('/dashboard');
        }
        return signedIn;
    };
    SignInComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "fr-signin",
            templateUrl: 'html/signin.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
    ], SignInComponent);
    return SignInComponent;
}());
exports.SignInComponent = SignInComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbmluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBQ2hELHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLDZCQUEwQiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3JELHFCQUFtQixhQUFhLENBQUMsQ0FBQTtBQUNqQzs7R0FFRztBQU9IO0lBRUkseUJBQXFCLE9BQWUsRUFBVSxZQUF5QjtRQUFsRCxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFFdkUsVUFBSyxHQUFHLElBQUksV0FBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUZpRCxDQUFDO0lBSTNFLGtDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUpHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDL0IsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFLLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFBLENBQUEsQ0FBQyxDQUFDO2FBQzFELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztJQUU1QyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtJQUVBLENBQUM7SUFHRCxrQ0FBUSxHQUFSO1FBQ0ksSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqRCxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDO1lBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDNUMsQ0FBQztRQUNELE1BQU0sQ0FBQyxRQUFRLENBQUE7SUFDbkIsQ0FBQztJQTlCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLDRCQUE0QjtTQUM1QyxDQUFDOzt1QkFBQTtJQTZCRixzQkFBQztBQUFELENBNUJBLEFBNEJDLElBQUE7QUE1QlksdUJBQWUsa0JBNEIzQixDQUFBIiwiZmlsZSI6ImF1dGgvc2lnbmluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T25Jbml0LCBDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vb2JqL1VzZXJcIjtcclxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgVGhpc3VtIG9uIDgvMS8yMDE2LlxyXG4gKi9cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiBcImZyLXNpZ25pblwiLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdodG1sL3NpZ25pbi5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ25JbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSApe31cclxuXHJcbiAgICBtb2RlbCA9IG5ldyBVc2VyKFwiXCIsIFwiXCIpO1xyXG4gICAgXHJcbiAgICBvblN1Ym1pdCgpe1xyXG5cclxuICAgICAgICB0aGlzLl9hdXRoU2VydmljZS5zaWduaW4odGhpcy5tb2RlbClcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHt0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2Rhc2hib2FyZCcpfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoYXNMb2dpbigpe1xyXG4gICAgICAgIGNvbnN0IHNpZ25lZEluID0gdGhpcy5fYXV0aFNlcnZpY2UuaGFzTG9nZ2VkSW4oKTtcclxuICAgICAgICBpZihzaWduZWRJbil7XHJcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvZGFzaGJvYXJkJylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNpZ25lZEluXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbn0iXX0=
