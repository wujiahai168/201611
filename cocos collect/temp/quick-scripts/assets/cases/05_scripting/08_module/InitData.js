(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/05_scripting/08_module/InitData.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '3ae4cUsGcBIE4q7Ksp4ZX/H', 'InitData', __filename);
// cases/05_scripting/08_module/InitData.js

"use strict";

var _monsterInfo = {
    name: "Slime",
    hp: 100,
    lv: 1,
    atk: 10,
    defense: 5,
    imageUrl: "test_assets/PurpleMonster"
};

module.exports = {
    monsterInfo: _monsterInfo
};

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
        //# sourceMappingURL=InitData.js.map
        