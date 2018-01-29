dojo.declare("TerminalInfo", wm.Page, {
    start: function() {
        
    },
    "preferredDevice": "desktop",

    svGetConfigurationSuccess: function(inSender, inDeprecated) {

        var data = JSON.parse(inSender.getData().dataValue);




        var iclient = new TYRO.IClient(data.apiKey, {
            "posProductVendor": data.posProductVendor,
            "posProductName": data.posProductName,
            "posProductVersion": data.posProductVersion
        });

        iclient.terminalInfo(function(response) {

            if (response.status == "success") {
             
                scope.lblName.setCaption(scope.lblName.caption + response.terminalInfo.name);
                scope.lblVersion.setCaption(scope.lblVersion.caption + response.terminalInfo.version);
                scope.lblAvailable.setCaption(scope.lblAvailable.caption + response.terminalInfo.available);
                scope.lblCurrRept.setCaption(scope.lblCurrRept.caption + response.terminalInfo.currentTerminalBusinessDay);
                scope.lblAutoSettle.setCaption(scope.lblAutoSettle.caption + response.terminalInfo.nextAutoSettlementTime);

                scope.panel2.setShowing(false);
                scope.panel1.setShowing(true);

            } 
            
            
            
            if (response.status == "failure") {

                scope.label2.setCaption("Unable to retrieve the terminal information. " + response.message);

            } 

        });





    },
    onShow: function() {
        dojo.setObject("scope", this);
        scope.label2.setCaption("Retrieving the terminal informations. ");

        scope.svGetConfiguration.update();
    },
    _end: 0
});