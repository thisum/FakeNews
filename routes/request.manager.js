/**
 * Created by thisum_kankanamge on 1/6/17.
 */

var express = require('express');
var Constants = require('./constants');
var constants = require('../util/constants.json');
var requestRecord = require('../models/request');
var tokenGenerator = require('jsonwebtoken');
var router = express.Router();


router.post('/save', function (req, res, next) {

    try{

        var isWeb = req.query.is_web;
        var webUrl = req.query.web_url;
        var text_content = req.query.content;

        var newRecord = new requestRecord({
            web: isWeb,
            webUrl: webUrl,
            content: text_content,
            recordTime: Date.now()
        });


        newRecord.save(function (err, res) {
            if (err) {
                console.error(err);
                res.json(constants.error.msg_save_error);
            } else {
                res.json(constants.success.msg_save_success);

            }
        });
    }
    catch (e){
        console.error(e);
        res.json(constants.error.msg_save_error);
    }
});


router.get('/search', function (req, res, next) {

    try{
        requestRecord.find({})
            .exec(function (err, docs) {
                if (err) {
                    return res.status(500).json({status: Constants.RESPONSE_CODE_FAIL, message: err});
                }
                else if (!docs) {
                    return res.status(500).json({status: Constants.RESPONSE_CODE_FAIL, message: "No records Found"});
                }
                else {
                    return res.status(200).json({status: Constants.RESPONSE_CODE_SUCCESS, result: docs});
                }
            });
    }
    catch (e){
        console.error(e);
        res.json(constants.error.msg_find_failure);
    }
});


router.patch('/answer', function (req, res, next) {

    var requestId = req.body.requestId;
    var response = req.body.response;
    var respondedBy = req.body.user.email;

    requestRecord.findOne({_id: requestId})
        .exec(function (err, frReq) {
            if (err) {
                console.error(err);
                res.json(constants.error.msg_find_failure);
            }
            else if (frReq) {

                frReq.response = response;
                frReq.respondedBy = respondedBy;

                frReq.save(function (err, updatedReq) {
                    if (err) {
                        console.error(err);
                        res.json(constants.error.msg_find_failure);
                    }
                    else if(!updatedReq){
                        res.json(constants.error.msg_find_failure);
                    }
                    else {
                        res.json(constants.success.msg_save_success);
                    }
                });
            }
            else {
                callback(0);
            }
        });

});


module.exports = router;
