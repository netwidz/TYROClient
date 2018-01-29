dojo.declare("Purchase", wm.Page, {

    purchaseCall: function(amount, cashout) {

        scope.showMsg("Initiating the purchase from TYRO with amount of " + amount + "(cents) .......");
        var isIntegratedReceipt = false;


        if (data.integratedReceipt == "1") {
            isIntegratedReceipt = true;
        }
        var requestObj = {
            amount: data.amount,
            cashout: data.cashout,
            integratedReceipt: isIntegratedReceipt
        };


        if (data.isHealthPointClaim == "1") {
            requestObj = {
                amount: amount,
                cashout: cashout,
                integratedReceipt: isIntegratedReceipt,
                healthpointTransactionId: data.healthPointClaimId
            };
        }



        iclient.initiatePurchase(requestObj, {
            statusMessageCallback: function(message) {

                scope.txtMessage.setDisplayValue(message);


            },
            questionCallback: function(question, answerCallback) {
               /* var buttons = question.options.reverse().map(function(option) {
                    return {
                        label: option,
                        callback: function() {
                            answerCallback(option);
                        }
                    };
                });

                bootbox.dialog(question.text, buttons);*/
                
                return true;
                
            },
            transactionCompleteCallback: function(response) {

                scope.txtMessage.setDisplayValue("Your transaction through TYRO is " + response.result);

                scope.svUpdateTransaction.input.setValue("data", JSON.stringify(response));
                scope.svUpdateTransaction.input.setValue("id", data.id);
                scope.svUpdateTransaction.input.setValue("status", "");
                scope.txtMessage.setDisplayValue("Updating the database");
                scope.svUpdateTransaction.update();


            }
        });


    },



    showMsg: function(msg, timeOut) {
        timeOut = typeof timeOut !== 'undefined' ? timeOut : 4000;

        setTimeout(function() {
            scope.txtMessage.setDisplayValue(msg);
        }, timeOut);

    },

    pairTerminal: function() {
        iclient.pairTerminal(data.mid, data.tid, function(response) {
            inProgress = true;
            scope.showMsg(response.message);


            if (response.status == "failure") {
                scope.showMsg(response.message + ". Please check your configuration and try again!", 4000);


            }

            if (response.status == "success") {
                scope.showMsg(response.message);


                scope.svGetNewTransaction.update();
            }

        });

    },


    start: function() {



    },
    "preferredDevice": "desktop",



    svGetNewTransactionSuccess: function(inSender, inDeprecated) {



        if (inSender.getCount() > 0) {
            inProgress = true;
            // scope.txtMessage.setDisplayValue("Initiating " + inSender.getCount());
            var data = inSender.getData()[0];
            dojo.setObject("data", data);
            scope.textAmount.setDisplayValue(data.amount);
            scope.purchaseCall(data.amount, data.cashout);

        }
        if (inSender.getCount() === 0) {
            scope.textAmount.setDisplayValue("");
            scope.showMsg("No new transaction to process. Waiting for new transaction");
            
            setTimeout(function(){
                scope.showMsg("Checking for new transactions......");
                scope.svGetNewTransaction.update();
                
                
                },4000);
            
            

        }



    },
    svGetConfigsSuccess: function(inSender, inDeprecated) {


        var data = JSON.parse(inSender.getData().dataValue);


        var prodInfo = {
            "posProductVendor": data.posProductVendor,
            "posProductName": data.posProductName,
            "posProductVersion": data.posProductVersion
        };


        var iclient = new TYRO.IClient(data.apiKey, prodInfo);
        dojo.setObject("iclient", iclient);

        if (!inProgress) {

            iclient.terminalInfo(function(response) {
                inProgress = true;
                scope.showMsg(response.message);
                if (response.status == "failure") {
                    inProgress = true;
                    scope.showMsg(response.message);
                    scope.pairTerminal();

                }

                if (response.status == "success") {
                    inProgress = false;
                    //    setInterval(function() {
                    scope.svGetNewTransaction.update();



                    //  }, 3000);
                }


            });
        }



    },
    svUpdateTransactionSuccess: function(inSender, inDeprecated) {
        scope.txtMessage.setDisplayValue("Updating the database is successful");
        inProgress = false;
        scope.svGetNewTransaction.update();
    },
    onStart: function(inPage) {
        dojo.setObject("scope", this);
        dojo.setObject("retry", 0);

        dojo.setObject("inProgress", false);

        scope.svGetConfigs.update();
    },
    svUpdateTransactionError: function(inSender, inError) {
        scope.txtMessage.setDisplayValue("Updating to database failed. Trying again.....");
        if (retry < 3) {
            retry = retry + 1;
            scope.svUpdateTransaction.update();

        } else {
            retry = 0;
            scope.svGetNewTransaction.update();

        }


    },
    svGetConfigsError: function(inSender, inError) {
        scope.txtMessage.setDisplayValue("Retrieving configuration failed! Trying again....");
        setTimeout(function(){
             scope.svGetConfigs.update();
            
            },4000);
    },
    _end: 0
});