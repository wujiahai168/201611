(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/05_scripting/07_asset_loading/AssetLoading/ComeBackToAssetLoad.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'cb585k+cxFKjohloTN1+FuU', 'ComeBackToAssetLoad', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=ComeBackToAssetLoad.js.map
        