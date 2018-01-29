dojo.require("project.resources.javascript.iclient-v1");
dojo.declare("Refund", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

Refund.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top"}, {}, {
menuMain: ["wm.DojoMenu", {"borderColor":"#312525","fullStructure":[
{"label":"Transactions","separator":undefined,"defaultLabel":"Transactions","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[
{"label":"Purchase","separator":undefined,"defaultLabel":"Purchase","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"purchaseNavigation","children":[]},
{"label":"Refund","separator":undefined,"defaultLabel":"Refund","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"refundNavigation","children":[]}
]},
{"label":"Reports & Settlements","separator":undefined,"defaultLabel":"Reports & Settlements","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[
{"label":"Reports","separator":undefined,"defaultLabel":"Reports","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},
{"label":"Settlement","separator":undefined,"defaultLabel":"Settlement","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},
{"label":"Menu Item 2","separator":undefined,"defaultLabel":undefined,"iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":undefined,"onClick":undefined,"children":[]}
]},
{"label":"Configuration","separator":undefined,"defaultLabel":"Configuration","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[
{"label":"Paring","separator":undefined,"defaultLabel":"Paring","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},
{"label":"Terminal Info","separator":undefined,"defaultLabel":"Terminal Info","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]},
{"label":"Browser Check","separator":undefined,"defaultLabel":"Browser Check","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":undefined,"children":[]}
]}
],"localizationStructure":{},"styles":{"backgroundColor":"#ffffff","backgroundGradient":{"direction":"vertical","startColor":"#6060b9","endColor":"#c4d0f0","colorStop":47}}}, {}]
}]
};

Refund.prototype._cssText = '';
Refund.prototype._htmlText = '';