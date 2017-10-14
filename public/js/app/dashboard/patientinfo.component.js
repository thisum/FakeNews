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
var request_service_1 = require("../services/request.service");
var PatientInfoComponent = (function () {
    function PatientInfoComponent(patientInfoService) {
        this.patientInfoService = patientInfoService;
        this.requestRecords = [];
    }
    PatientInfoComponent.prototype.onSearch = function () {
        var _this = this;
        this.patientInfoService.searchPatientRecords().then(function (records) {
            _this.requestRecords = records;
        }, function (error) {
            console.error(error);
        });
    };
    PatientInfoComponent.prototype.onSubmitAns = function (status) {
        var ans = { response: status };
        this.patientInfoService.submitAnswer(ans)
            .then(function (requests) {
        }, function (error) { return console.error(error); });
    };
    PatientInfoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fs-patient_records',
            templateUrl: 'html/patientinfo.component.html'
        }), 
        __metadata('design:paramtypes', [request_service_1.PatientInfoService])
    ], PatientInfoComponent);
    return PatientInfoComponent;
}());
exports.PatientInfoComponent = PatientInfoComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9wYXRpZW50aW5mby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUVsRCxnQ0FBaUMsNkJBQTZCLENBQUMsQ0FBQTtBQWUvRDtJQUtJLDhCQUFvQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUgxRCxtQkFBYyxHQUFvQixFQUFFLENBQUM7SUFHdUIsQ0FBQztJQUU3RCx1Q0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxJQUFJLENBQy9DLFVBQUEsT0FBTztZQUNILEtBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO1FBQ2xDLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FDSixDQUFBO0lBQ0wsQ0FBQztJQUVELDBDQUFXLEdBQVgsVUFBWSxNQUFNO1FBRWQsSUFBSSxHQUFHLEdBQUcsRUFBQyxRQUFRLEVBQUUsTUFBTSxFQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7YUFDcEMsSUFBSSxDQUFDLFVBQUEsUUFBUTtRQUVWLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLENBQ2hDLENBQUE7SUFDVCxDQUFDO0lBaENMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFdBQVcsRUFBRSxpQ0FBaUM7U0FDakQsQ0FBQzs7NEJBQUE7SUE4QkYsMkJBQUM7QUFBRCxDQTdCQSxBQTZCQyxJQUFBO0FBN0JZLDRCQUFvQix1QkE2QmhDLENBQUEiLCJmaWxlIjoiZGFzaGJvYXJkL3BhdGllbnRpbmZvLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtQYXRpZW50SW5mb1NlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9yZXF1ZXN0LnNlcnZpY2VcIjtcbmltcG9ydCB7UGF0aWVudEluZm9TZWFyY2hDcml0ZXJpYX0gZnJvbSBcIi4uL29iai9QYXRpZW50SW5mb1NlYXJjaENyaXRlcmlhXCI7XG5pbXBvcnQge0lNeU9wdGlvbnN9IGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvanMvdmVuZG9yL215ZGF0ZXBpY2tlci9kaXN0L2ludGVyZmFjZXMvbXktb3B0aW9ucy5pbnRlcmZhY2VcIjtcbmltcG9ydCB7SU15RGF0ZU1vZGVsfSBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2pzL3ZlbmRvci9teWRhdGVwaWNrZXIvZGlzdC9pbnRlcmZhY2VzL215LWRhdGUtbW9kZWwuaW50ZXJmYWNlXCI7XG5pbXBvcnQge1BhdGllbnRSZWNvcmR9IGZyb20gXCIuLi9vYmovUGF0aWVudFJlY29yZFwiO1xuaW1wb3J0IHtBbmFseXNlUmVzdWx0fSBmcm9tIFwiLi4vb2JqL0FuYWx5c2VSZXN1bHRcIjtcbmltcG9ydCB7Q29uc3RhbnRzfSBmcm9tIFwiLi4vdXRpbC9jb25zdGFudHNcIjtcbmltcG9ydCB7UmVxdWVzdFJlY29yZH0gZnJvbSBcIi4uL29iai9SZXF1ZXN0c1wiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdmcy1wYXRpZW50X3JlY29yZHMnLFxuICAgIHRlbXBsYXRlVXJsOiAnaHRtbC9wYXRpZW50aW5mby5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgUGF0aWVudEluZm9Db21wb25lbnR7XG5cbiAgICByZXF1ZXN0UmVjb3JkczogUmVxdWVzdFJlY29yZFtdID0gW107XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGF0aWVudEluZm9TZXJ2aWNlOiBQYXRpZW50SW5mb1NlcnZpY2Upe31cblxuICAgIG9uU2VhcmNoKCk6dm9pZCB7XG4gICAgICAgIHRoaXMucGF0aWVudEluZm9TZXJ2aWNlLnNlYXJjaFBhdGllbnRSZWNvcmRzKCkudGhlbihcbiAgICAgICAgICAgIHJlY29yZHMgPT57XG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0UmVjb3JkcyA9IHJlY29yZHM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuXG4gICAgb25TdWJtaXRBbnMoc3RhdHVzKVxuICAgIHtcbiAgICAgICAgdmFyIGFucyA9IHtyZXNwb25zZTogc3RhdHVzfTtcbiAgICAgICAgdGhpcy5wYXRpZW50SW5mb1NlcnZpY2Uuc3VibWl0QW5zd2VyKGFucylcbiAgICAgICAgICAgIC50aGVuKHJlcXVlc3RzID0+IHtcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgIClcbiAgICB9XG5cbn0iXX0=
