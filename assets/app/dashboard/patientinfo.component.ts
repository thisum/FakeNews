import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PatientInfoService} from "../services/request.service";
import {PatientInfoSearchCriteria} from "../obj/PatientInfoSearchCriteria";
import {IMyOptions} from "../../../public/js/vendor/mydatepicker/dist/interfaces/my-options.interface";
import {IMyDateModel} from "../../../public/js/vendor/mydatepicker/dist/interfaces/my-date-model.interface";
import {PatientRecord} from "../obj/PatientRecord";
import {AnalyseResult} from "../obj/AnalyseResult";
import {Constants} from "../util/constants";
import {RequestRecord} from "../obj/Requests";


@Component({
    moduleId: module.id,
    selector: 'fs-patient_records',
    templateUrl: 'html/patientinfo.component.html'
})
export class PatientInfoComponent{

    requestRecords: RequestRecord[] = [];


    constructor(private patientInfoService: PatientInfoService){}

    onSearch():void {
        this.patientInfoService.searchPatientRecords().then(
            records =>{
                this.requestRecords = records;
            },
            error => {
                console.error(error);
            }
        )
    }

    onSubmitAns(status)
    {
        var ans = {response: status};
        this.patientInfoService.submitAnswer(ans)
            .then(requests => {

                },
                error => console.error(error)
            )
    }

}