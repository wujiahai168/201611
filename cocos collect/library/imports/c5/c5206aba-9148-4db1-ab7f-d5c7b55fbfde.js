"use strict";
cc._RF.push(module, 'c5206q6kUhNsat/1ce1X7/e', 'ColorRectAssembler');
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