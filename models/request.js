/**
 * Created by Thisum on 14/11/2016.
 */
var mongoose = require('mongoose');

var requestSchema = mongoose.Schema({

    web      :   Boolean,
    webUrl        :   String,
    content  :   String,
    categories     :   String,
    otherInfo:  String,
    recordTime: Date,
    decision: Boolean,
    answerBy: String
});

module.exports = mongoose.model('request', requestSchema);