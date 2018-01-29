TerminalInfo.widgets = {
	svGetConfiguration: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getAllConfigurations","service":"getConfigurations"}, {"onSuccess":"svGetConfigurationSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getAllConfigurationsInputs"}, {}]
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
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{"backgroundColor":"#ffffff","textDecoration":"underline"},"verticalAlign":"top"}, {}, {
		menuMain: ["wm.DojoMenu", {"borderColor":"#312525","fullStructure":[
{"label":"Transactions","separator":undefined,"defaultLabel":"Transactions","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[
{"label":"Purchase","separator":undefined,"defaultLabel":"Purchase","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"purchaseNavigation","children":[]}
]},
{"label":"Configuration","separator":undefined,"defaultLabel":"Configuration","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[
{"label":"Terminal Info","separator":undefined,"defaultLabel":"Terminal Info","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"nvCallTerminalnfo","children":[]},
{"label":"Configure","separator":undefined,"defaultLabel":"Configure","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"navigationCall1","children":[]}
]}
],"localizationStructure":{},"styles":{"backgroundColor":"#ffffff","backgroundGradient":{"direction":"vertical","startColor":"#6060b9","endColor":"#c4d0f0","colorStop":47}}}, {}],
		label1: ["wm.Label", {"align":"center","caption":"Terminal Information","height":"40px","padding":"4","styles":{"fontWeight":"bolder","fontSize":"15px","textDecoration":"underline"},"width":"100%"}, {}],
		panel1: ["wm.Panel", {"height":"180px","horizontalAlign":"center","showing":false,"styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
			lblName: ["wm.Label", {"align":"center","caption":"Terminal Name : ","display":undefined,"padding":"4","styles":{"fontSize":"11px"},"width":"50%"}, {}],
			lblVersion: ["wm.Label", {"align":"center","caption":"Terminal Version : ","padding":"4","singleLine":false,"width":"50%"}, {}],
			lblAvailable: ["wm.Label", {"align":"center","caption":"Terminal Availability : ","padding":"4","styles":{},"width":"50%"}, {}],
			lblCurrRept: ["wm.Label", {"align":"center","caption":"Current Reporting Day : ","padding":"4","width":"50%"}, {}],
			lblAutoSettle: ["wm.Label", {"align":"center","caption":"Auto Settlement Time : ","padding":"4","width":"50%"}, {}]
		}],
		panel2: ["wm.Panel", {"height":"48px","horizontalAlign":"center","layoutKind":"left-to-right","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
			label2: ["wm.Label", {"align":"center","autoSizeWidth":true,"caption":"Retrieving the terminal informations. ","padding":"4","styles":{"fontSize":"12px"}}, {}]
		}]
	}]
}