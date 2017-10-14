/**
 * Created by thisum on 5/28/2017.
 */
"use strict";
var PatientRecord = (function () {
    function PatientRecord(recordId, leftLeg, rightLeg, recordTime, patientName) {
        this.recordId = recordId;
        this.leftLeg = leftLeg;
        this.rightLeg = rightLeg;
        this.recordTime = recordTime;
        this.patientName = patientName;
    }
    PatientRecord.prototype.getLeftLeg = function () {
        return this.getIntArray(this.leftLeg);
    };
    PatientRecord.prototype.getRightLeg = function () {
        return this.getIntArray(this.rightLeg);
    };
    PatientRecord.prototype.getIntArray = function (str) {
        var objs = [];
        var s = str.split(",");
        var num = 0;
        for (num = 0; num < s.length; num++) {
            objs.push(+s[num]);
        }
        return objs;
    };
    return PatientRecord;
}());
exports.PatientRecord = PatientRecord;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9iai9QYXRpZW50UmVjb3JkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOztBQUVIO0lBRUksdUJBQ1csUUFBZ0IsRUFDaEIsT0FBZSxFQUNmLFFBQWdCLEVBQ2hCLFVBQWtCLEVBQ2xCLFdBQW1CO1FBSm5CLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNsQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtJQUMzQixDQUFDO0lBRUcsa0NBQVUsR0FBakI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVNLG1DQUFXLEdBQWxCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTyxtQ0FBVyxHQUFuQixVQUFvQixHQUFXO1FBQzNCLElBQUksSUFBSSxHQUFhLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksR0FBRyxHQUFVLENBQUMsQ0FBQTtRQUVsQixHQUFHLENBQUEsQ0FBRSxHQUFHLEdBQUMsQ0FBQyxFQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFHLENBQUM7WUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCxvQkFBQztBQUFELENBNUJBLEFBNEJDLElBQUE7QUE1QlkscUJBQWEsZ0JBNEJ6QixDQUFBIiwiZmlsZSI6Im9iai9QYXRpZW50UmVjb3JkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHRoaXN1bSBvbiA1LzI4LzIwMTcuXG4gKi9cblxuZXhwb3J0IGNsYXNzIFBhdGllbnRSZWNvcmR7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHJlY29yZElkOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBsZWZ0TGVnOiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyByaWdodExlZzogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgcmVjb3JkVGltZTogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgcGF0aWVudE5hbWU6IHN0cmluZ1xuICAgICkge31cblxuICAgIHB1YmxpYyBnZXRMZWZ0TGVnKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEludEFycmF5KHRoaXMubGVmdExlZyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFJpZ2h0TGVnKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEludEFycmF5KHRoaXMucmlnaHRMZWcpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0SW50QXJyYXkoc3RyOiBzdHJpbmcpOiBudW1iZXJbXXtcbiAgICAgICAgbGV0IG9ianM6IG51bWJlcltdID0gW107XG4gICAgICAgIGxldCBzID0gc3RyLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgdmFyIG51bTpudW1iZXIgPSAwXG5cbiAgICAgICAgZm9yKCBudW09MDtudW0gPCBzLmxlbmd0aDsgbnVtKysgKSB7XG4gICAgICAgICAgICBvYmpzLnB1c2goK3NbbnVtXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9ianM7XG4gICAgfVxufSJdfQ==
