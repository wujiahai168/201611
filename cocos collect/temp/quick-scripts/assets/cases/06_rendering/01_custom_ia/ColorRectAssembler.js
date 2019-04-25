(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/cases/06_rendering/01_custom_ia/ColorRectAssembler.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c5206q6kUhNsat/1ce1X7/e', 'ColorRectAssembler', __filename);
// cases/06_rendering/01_custom_ia/ColorRectAssembler.js

"use strict";

module.exports = {
    useModel: false,
    updateRenderData: function updateRenderData(comp) {
        if (!comp._renderData) {
            var IARenderData = cc.renderer.renderEngine.IARenderData;
            comp._renderData = new IARenderData();
            comp._renderData.material = comp.getMaterial();
            comp._renderData.ia = comp._ia;
        }
    },
    renderIA: function renderIA(comp, renderer) {
        renderer._flushIA(comp._renderData);
    }
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
        //# sourceMappingURL=ColorRectAssembler.js.map
        