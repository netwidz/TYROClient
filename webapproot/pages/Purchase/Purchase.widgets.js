Purchase.widgets = {
	svGetNewTransaction: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"getNewTransaction","service":"tyro"}, {"onSuccess":"svGetNewTransactionSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getNewTransactionInputs"}, {}]
	}],
	svUpdateTransaction: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"updateTransactionData","service":"UpdateTransactions"}, {"onError":"svUpdateTransactionError","onSuccess":"svUpdateTransactionSuccess"}, {
		input: ["wm.ServiceInput", {"type":"updateTransactionDataInputs"}, {}],
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"svInputUpdateTrans.dataOutput","targetProperty":"input"}, {}]
		}]
	}],
	nvConfigureClick: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Configure\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	responseData: ["wm.Variable", {"type":"AnyData"}, {}],
	svGetConfigs: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"getAllConfigurations","service":"getConfigurations"}, {"onError":"svGetConfigsError","onSuccess":"svGetConfigsSuccess"}, {
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
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top"}, {}, {
		menuMain: ["wm.DojoMenu", {"borderColor":"#312525","fullStructure":[
{"label":"Transactions","separator":undefined,"defaultLabel":"Transactions","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[
{"label":"Purchase","separator":undefined,"defaultLabel":"Purchase","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"purchaseNavigation","children":[]}
]},
{"label":"Configuration","separator":undefined,"defaultLabel":"Configuration","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[
{"label":"Terminal Info","separator":undefined,"defaultLabel":"Terminal Info","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"nvCallTerminalnfo","children":[]},
{"label":"Configure","separator":undefined,"defaultLabel":"Configure","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"nvConfigureClick","children":[]}
]}
],"localizationStructure":{},"styles":{"backgroundColor":"#ffffff","backgroundGradient":{"direction":"vertical","startColor":"#6060b9","endColor":"#c4d0f0","colorStop":47}}}, {}],
		panel1: ["wm.Panel", {"height":"50%","horizontalAlign":"center","styles":{},"verticalAlign":"middle","width":"100%"}, {}, {
			textAmount: ["wm.Text", {"caption":"Amount (cents)","captionAlign":"center","dataValue":undefined,"disabled":true,"displayValue":""}, {}],
			txtMessage: ["wm.LargeTextArea", {"caption":"Message : ","captionAlign":"center","captionPosition":"left","captionSize":"100px","changeOnKey":true,"dataValue":undefined,"disabled":true,"displayValue":"","readonly":true,"styles":{}}, {}]
		}]
	}]
}