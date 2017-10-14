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
/**
 * Created by Thisum on 8/17/2016.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var constants_1 = require("../util/constants");
var request_builder_util_1 = require("../util/request-builder.util");
var PatientRecord_1 = require("../obj/PatientRecord");
var PatientInfoService = (function () {
    function PatientInfoService(_http) {
        this._http = _http;
        this.baseUrl = constants_1.BASE_URL + '/request';
        this.timeOptions = {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };
    }
    PatientInfoService.prototype.searchPatientRecords = function () {
        var _this = this;
        var headers = request_builder_util_1.getHeader();
        var url = this.baseUrl + '/search';
        return this._http.get(url, { headers: headers, body: {} }).toPromise()
            .then(function (response) {
            var status = response.json().status;
            if (status == constants_1.SERVER_RESPONSE_STATUS.SUCCESS) {
                var data = response.json().result;
                var patientRecords = [];
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var obj = data_1[_i];
                    var reqTime = new Date(obj.recordTime).toLocaleString('en-GB', _this.timeOptions);
                    patientRecords.push(new PatientRecord_1.PatientRecord(obj._id, obj.leftLeg, obj.rightLeg, reqTime, obj.patientName));
                }
                return patientRecords;
            }
            else if (status == constants_1.SERVER_RESPONSE_STATUS.FAILED) {
                throw new Error(response.json().message);
            }
        })
            .catch(this.handleError);
    };
    PatientInfoService.prototype.submitAnswer = function (answer) {
        var headers = request_builder_util_1.getHeader();
        var url = this.baseUrl + '/answer';
        return this._http.patch(url, JSON.stringify(answer), { headers: headers }).toPromise()
            .then(function (response) {
            var obj = response.json();
            if (obj.status == constants_1.SERVER_RESPONSE_STATUS.SUCCESS) {
                return obj.status;
            }
            else if (obj.status == constants_1.SERVER_RESPONSE_STATUS.FAILED) {
                throw new Error(response.json().message);
            }
            else if (obj.status == constants_1.SERVER_RESPONSE_STATUS.WARNING) {
                throw new Error(response.json().message);
            }
        })
            .catch(this.handleError);
    };
    PatientInfoService.prototype.handleError = function (error) {
        console.error('Error occurred : ' + error);
        return Promise.reject(error.message || error);
    };
    PatientInfoService.prototype.reArrangeArray = function (temps) {
        var result = "";
        for (var _i = 0, temps_1 = temps; _i < temps_1.length; _i++) {
            var ele = temps_1[_i];
            result = result + " " + ele + ",";
        }
        return result;
    };
    PatientInfoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PatientInfoService);
    return PatientInfoService;
}());
exports.PatientInfoService = PatientInfoService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3JlcXVlc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDSCxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMscUJBQTZDLGVBQWUsQ0FBQyxDQUFBO0FBRTdELDBCQUErQyxtQkFBbUIsQ0FBQyxDQUFBO0FBQ25FLHFDQUF3Qiw4QkFBOEIsQ0FBQyxDQUFBO0FBRXZELDhCQUE0QixzQkFBc0IsQ0FBQyxDQUFBO0FBS25EO0lBWUksNEJBQXFCLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBVnhCLFlBQU8sR0FBRyxvQkFBUSxHQUFHLFVBQVUsQ0FBQztRQUNoQyxnQkFBVyxHQUFHO1lBQ2xCLEdBQUcsRUFBRyxTQUFTO1lBQ2YsS0FBSyxFQUFHLE9BQU87WUFDZixJQUFJLEVBQUcsU0FBUztZQUNoQixJQUFJLEVBQUUsU0FBUztZQUNmLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLE1BQU0sRUFBRSxTQUFTO1NBQ3BCLENBQUM7SUFFaUMsQ0FBQztJQUU3QixpREFBb0IsR0FBM0I7UUFBQSxpQkF5QkM7UUF2QkcsSUFBTSxPQUFPLEdBQUcsZ0NBQVMsRUFBRSxDQUFDO1FBQzVCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBRW5DLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBRSxHQUFHLEVBQUcsRUFBQyxPQUFPLEVBQUcsT0FBTyxFQUFFLElBQUksRUFBRyxFQUFFLEVBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRTthQUNuRSxJQUFJLENBQUMsVUFBQSxRQUFRO1lBQ1YsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUN0QyxFQUFFLENBQUEsQ0FBQyxNQUFNLElBQUksa0NBQXNCLENBQUMsT0FBTyxDQUFDLENBQzVDLENBQUM7Z0JBQ0csSUFBTSxJQUFJLEdBQUcsUUFB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QU0sR0FBRyxNQUFNLEdBQUcsR0FBRyxHQUFJLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDdEM7UUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUEvRUw7UUFBQyxpQkFBVSxFQUFFOzswQkFBQTtJQWlGYix5QkFBQztBQUFELENBaEZBLEFBZ0ZDLElBQUE7QUFoRlksMEJBQWtCLHFCQWdGOUIsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9yZXF1ZXN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgVGhpc3VtIG9uIDgvMTcvMjAxNi5cbiAqL1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtIdHRwLCBIZWFkZXJzLCBVUkxTZWFyY2hQYXJhbXN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5cbmltcG9ydCB7U0VSVkVSX1JFU1BPTlNFX1NUQVRVUywgQkFTRV9VUkx9IGZyb20gXCIuLi91dGlsL2NvbnN0YW50c1wiO1xuaW1wb3J0IHtnZXRIZWFkZXJ9IGZyb20gXCIuLi91dGlsL3JlcXVlc3QtYnVpbGRlci51dGlsXCI7XG5pbXBvcnQge1BhdGllbnRJbmZvU2VhcmNoQ3JpdGVyaWF9IGZyb20gXCIuLi9vYmovUGF0aWVudEluZm9TZWFyY2hDcml0ZXJpYVwiO1xuaW1wb3J0IHtQYXRpZW50UmVjb3JkfSBmcm9tIFwiLi4vb2JqL1BhdGllbnRSZWNvcmRcIjtcbmltcG9ydCB7UmVxdWVzdFJlY29yZH0gZnJvbSBcIi4uL29iai9SZXF1ZXN0c1wiO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYXRpZW50SW5mb1NlcnZpY2V7XG5cbiAgICBwcml2YXRlIGJhc2VVcmwgPSBCQVNFX1VSTCArICcvcmVxdWVzdCc7XG4gICAgcHJpdmF0ZSB0aW1lT3B0aW9ucyA9IHtcbiAgICAgICAgZGF5IDogJ251bWVyaWMnLFxuICAgICAgICBtb250aCA6ICdzaG9ydCcsXG4gICAgICAgIHllYXIgOiAnbnVtZXJpYycsXG4gICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgbWludXRlOiAnbnVtZXJpYycsXG4gICAgICAgIHNlY29uZDogJ251bWVyaWMnXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9odHRwOiBIdHRwKSB7fVxuXG4gICAgcHVibGljIHNlYXJjaFBhdGllbnRSZWNvcmRzKCk6IFByb21pc2U8UmVxdWVzdFJlY29yZFtdPntcblxuICAgICAgICBjb25zdCBoZWFkZXJzID0gZ2V0SGVhZGVyKCk7XG4gICAgICAgIHZhciB1cmwgPSB0aGlzLmJhc2VVcmwgKyAnL3NlYXJjaCc7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCB1cmwgLCB7aGVhZGVycyA6IGhlYWRlcnMsIGJvZHkgOiB7fX0pLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gcmVzcG9uc2UuanNvbigpLnN0YXR1cztcbiAgICAgICAgICAgICAgICBpZihzdGF0dXMgPT0gU0VSVkVSX1JFU1BPTlNFX1NUQVRVUy5TVUNDRVNTKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXRpZW50UmVjb3JkczogYW55W10gPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IG9iaiBvZiBkYXRhKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXFUaW1lID0gbmV3IERhdGUob2JqLnJlY29yZFRpbWUpLnRvTG9jYWxlU3RyaW5nKCdlbi1HQicsIHRoaXMudGltZU9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aWVudFJlY29yZHMucHVzaCggbmV3IFBhdGllbnRSZWNvcmQob2JqLl9pZCwgb2JqLmxlZnRMZWcsIG9iai5yaWdodExlZywgcmVxVGltZSwgb2JqLnBhdGllbnROYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhdGllbnRSZWNvcmRzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKCBzdGF0dXMgPT0gU0VSVkVSX1JFU1BPTlNFX1NUQVRVUy5GQUlMRUQpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2UuanNvbigpLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcik7XG4gICAgfVxuXG4gICAgcHVibGljIHN1Ym1pdEFuc3dlcihhbnN3ZXI6IGFueSk6IFByb21pc2U8c3RyaW5nPntcblxuICAgICAgICBjb25zdCBoZWFkZXJzID0gZ2V0SGVhZGVyKCk7XG4gICAgICAgIHZhciB1cmwgPSB0aGlzLmJhc2VVcmwgKyAnL2Fuc3dlcic7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucGF0Y2goIHVybCwgSlNPTi5zdHJpbmdpZnkoYW5zd2VyKSwge2hlYWRlcnMgOiBoZWFkZXJzfSkudG9Qcm9taXNlKClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvYmogPSByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgaWYob2JqLnN0YXR1cyA9PSBTRVJWRVJfUkVTUE9OU0VfU1RBVFVTLlNVQ0NFU1MpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqLnN0YXR1cztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiggb2JqLnN0YXR1cyA9PSBTRVJWRVJfUkVTUE9OU0VfU1RBVFVTLkZBSUxFRClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5qc29uKCkubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoIG9iai5zdGF0dXMgPT0gU0VSVkVSX1JFU1BPTlNFX1NUQVRVUy5XQVJOSU5HKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLmpzb24oKS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KXtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igb2NjdXJyZWQgOiAnICtlcnJvciApO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IubWVzc2FnZSB8fCBlcnJvcik7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIHJlQXJyYW5nZUFycmF5KCB0ZW1wczogbnVtYmVyW10pOiBzdHJpbmd7XG4gICAgICAgIGxldCByZXN1bHQ6c3RyaW5nID0gXCJcIjtcbiAgICAgICAgZm9yKGxldCBlbGUgb2YgdGVtcHMgKXtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCArIFwiIFwiICArIGVsZSArIFwiLFwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG59Il19
