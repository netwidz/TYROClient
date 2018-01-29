dojo.declare("Configure", wm.Page, {
    start: function() {



    },
    "preferredDevice": "desktop",


    isValidate: function(key) {
        if (key.getDisplayValue().trim() === "") {
            msg.setCaption("Please enter the value for " + key.caption);
            msg.setShowing(true);
            setTimeout(function() {
                msg.setShowing(false);
            }, 4000);


            return false;
        }
        return true;

    },

    buttonUpdateClick: function(inSender) {

        this.buttonUpdate.setDisabled(true);


        if (this.isValidate(apiKey) && this.isValidate(mid) && this.isValidate(tid) && this.isValidate(posProductVendor) && this.isValidate(posProductVersion) && this.isValidate(posProductName)) {

            var config = {
                "apiKey": apiKey.getDisplayValue(),
                "mid": mid.getDisplayValue(),
                "tid": tid.getDisplayValue(),
                "posProductVendor": posProductVendor.getDisplayValue(),
                "posProductVersion": posProductVersion.getDisplayValue(),
                "posProductName": posProductName.getDisplayValue()
            };


            scope.updateConfigValue.input.setValue("data", JSON.stringify(config));
            scope.updateConfigValue.update();

        }






    },
    svGetConfigurationsSuccess: function(inSender, inDeprecated) {



        var data = JSON.parse(inSender.getData().dataValue);



        apiKey.setDisplayValue(data.apiKey);
        mid.setDisplayValue(data.mid);
        tid.setDisplayValue(data.tid);
        posProductVendor.setDisplayValue(data.posProductVendor);
        posProductVersion.setDisplayValue(data.posProductVersion);
        posProductName.setDisplayValue(data.posProductName);
        scope.layoutBox1.disabled = false;
        scope.buttonUpdate.setDisabled(false);




    },
    updateConfigValueSuccess: function(inSender, inDeprecated) {
        scope.buttonUpdate.setDisabled(false);
        if (inSender.getData().dataValue == 'success') {

            msgSuccess.setCaption("Your Configuration Successfully Saved!");
            msgSuccess.setShowing(true);
            setTimeout(function() {
                msgSuccess.setShowing(false);
            }, 4000);



        } else {

            msg.setCaption("Somethig went wrong... Please try again!!!");
            msg.setShowing(true);
            setTimeout(function() {
                msg.setShowing(false);
            }, 4000);


        }



    },
    onShow: function() {

    },
    onStart: function(inPage) {
        this.layoutBox1.disabled = true;
        this.svGetConfigurations.update();

        dojo.setObject("apiKey", this.textApiKey);
        dojo.setObject("mid", this.textMerchantId);
        dojo.setObject("tid", this.textTerminalId);
        dojo.setObject("posProductVendor", this.txtPosProductVendor);
        dojo.setObject("posProductVersion", this.txtProductVersion);
        dojo.setObject("posProductName", this.textProductName);
        dojo.setObject("msg", this.msg);
        dojo.setObject("msgSuccess", this.msgSuccess);
        dojo.setObject("scope", this);
    },
    updateConfigValueError: function(inSender, inError) {

        msg.setCaption("Somethig went wrong... Please try again!!!");
        msg.setShowing(true);
        setTimeout(function() {
            msg.setShowing(false);
        }, 4000);

        scope.buttonUpdate.setDisabled(false);
    },
    _end: 0
});