Configure.widgets = {
	svGetConfigurations: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"getAllConfigurations","service":"getConfigurations"}, {"onSuccess":"svGetConfigurationsSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getAllConfigurationsInputs"}, {}]
	}],
	updateConfigValue: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"updateConfigs","service":"getConfigurations"}, {"onError":"updateConfigValueError","onSuccess":"updateConfigValueSuccess"}, {
		input: ["wm.ServiceInput", {"type":"updateConfigsInputs"}, {}]
	}],
	navigationCall1: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Configure\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	nvCallTerminalnfo: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"TerminalInfo\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	purchaseNavigation: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Purchase\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	refundNavigation: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Refund\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"disabled":true,"horizontalAlign":"left","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top"}, {}, {
		menuMain1: ["wm.DojoMenu", {"borderColor":"#312525","fullStructure":[
{"label":"Transactions","separator":undefined,"defaultLabel":"Transactions","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[
{"label":"Purchase","separator":undefined,"defaultLabel":"Purchase","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"purchaseNavigation","children":[]}
]},
{"label":"Configuration","separator":undefined,"defaultLabel":"Configuration","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[
{"label":"Terminal Info","separator":undefined,"defaultLabel":"Terminal Info","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"nvCallTerminalnfo","children":[]},
{"label":"Configure","separator":undefined,"defaultLabel":"Configure","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navigationCall1","children":[]}
]}
],"localizationStructure":{},"styles":{"backgroundColor":"#ffffff","backgroundGradient":{"direction":"vertical","startColor":"#6060b9","endColor":"#c4d0f0","colorStop":47}}}, {}],
		liveForm1: ["wm.LiveForm", {"height":"257px","horizontalAlign":"center","verticalAlign":"middle"}, {}, {
			textApiKey: ["wm.Text", {"caption":"Tyro API Key","captionSize":"140px","dataValue":"","desktopHeight":"26px","displayValue":"","emptyValue":"emptyString","height":"26px","required":true,"width":"75%"}, {}],
			textMerchantId: ["wm.Text", {"caption":"Merchant ID","captionSize":"140px","dataValue":"","desktopHeight":"26px","displayValue":"","emptyValue":"emptyString","height":"26px","required":true,"width":"75%"}, {}],
			textTerminalId: ["wm.Text", {"caption":"Terminal ID","captionSize":"140px","dataValue":"","desktopHeight":"26px","displayValue":"","emptyValue":"emptyString","height":"26px","required":true,"width":"75%"}, {}],
			txtPosProductVendor: ["wm.Text", {"caption":"Company Name","captionSize":"140px","dataValue":"","desktopHeight":"26px","displayValue":"","emptyValue":"emptyString","height":"26px","required":true,"width":"75%"}, {}],
			textProductName: ["wm.Text", {"caption":"POS Product Name","captionSize":"140px","dataValue":"","desktopHeight":"26px","displayValue":"","emptyValue":"emptyString","height":"26px","required":true,"width":"75%"}, {}],
			txtProductVersion: ["wm.Text", {"caption":"POS Product Version","captionSize":"140px","dataValue":"","desktopHeight":"26px","displayValue":"","emptyValue":"emptyString","height":"26px","required":true,"width":"75%"}, {}],
			msg: ["wm.Label", {"autoSizeWidth":true,"padding":"4","showing":false,"styles":{"color":"#e60202","fontSize":"12px"}}, {}],
			msgSuccess: ["wm.Label", {"autoSizeWidth":true,"padding":"4","showing":false,"styles":{"fontSize":"12px","color":"#2ad32f"}}, {}],
			buttonUpdate: ["wm.Button", {"caption":"Update","disabled":true,"margin":"4","styles":{}}, {"onclick":"buttonUpdateClick"}]
		}]
	}]
}