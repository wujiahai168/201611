"use strict";
cc._RF.push(module, 'cb585k+cxFKjohloTN1+FuU', 'ComeBackToAssetLoad');
// cases/05_scripting/07_asset_loading/AssetLoading/ComeBackToAssetLoad.js

"use strict";

cc.Class({
    extends: cc.Component,

    onComeBlack: function onComeBlack() {
        cc.director.loadScene("AssetLoading.fire");
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RF.pop();