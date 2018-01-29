dojo.declare("TyroiClient", wm.Application, {
	"disableDirtyEditorTracking": false, 
	"eventDelay": 0, 
	"hintDelay": 1500, 
	"i18n": false, 
	"isSecurityEnabled": false, 
	"main": "Main", 
	"manageHistory": true, 
	"manageURL": false, 
	"name": "", 
	"phoneGapLoginPage": "Login", 
	"phoneMain": "", 
	"projectSubVersion": "Alpha", 
	"projectVersion": 1, 
	"sessionExpirationHandler": "navigateToLogin", 
	"studioVersion": "6.7.0.RELEASE", 
	"tabletMain": "", 
	"theme": "wm.base.widget.themes.wm_default", 
	"toastPosition": "br", 
	"touchToClickDelay": 500, 
	"touchToRightClickDelay": 1500,
	"widgets": {
		silkIconList: ["wm.ImageList", {"colCount":39,"height":16,"iconCount":90,"url":"lib/images/silkIcons/silk.png","width":16}, {}], 
		CONFIG_URL: ["wm.Variable", {"dataValue":"https://iclientsimulator.test.tyro.com/configuration.html"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"https://iclientsimulator.test.tyro.com/configuration.html\"","targetProperty":"dataSet.dataValue"}, {}]
			}]
		}], 
		apikey: ["wm.Variable", {"dataValue":"abc123","json":"{\"dataValue\":\"abc123\"}","type":"StringData"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"abc123\"","targetProperty":"dataSet.dataValue"}, {}]
			}]
		}], 
		iclient: ["wm.Variable", {"dataValue":""}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"new TYRO.IClient(${app.apikey.dataValue},JSON.parse(${app.productInfo.dataValue}));","targetProperty":"dataSet.dataValue"}, {}]
			}]
		}], 
		iclientObj: ["wm.Variable", {"type":"AnyData"}, {}], 
		productInfo: ["wm.Variable", {"dataValue":"{\"posProductVendor\": \"Tyro Payments\", \"posProductName\": \"Mini Cloud POS\", \"posProductVersion\": \"1.0.0\"}","json":"{posProductVendor: \"Tyro Payments\", posProductName: \"Mini Cloud POS\", posProductVersion: \"1.0.0\"}","type":"AnyData"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"{\\\"posProductVendor\\\": \\\"Tyro Payments\\\", \\\"posProductName\\\": \\\"Mini Cloud POS\\\", \\\"posProductVersion\\\": \\\"1.0.0\\\"}\"","targetProperty":"dataSet.dataValue"}, {}]
			}]
		}]
	},
	_end: 0
});

TyroiClient.extend({
   
	_end: 0
});