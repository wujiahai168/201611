/**
 * @fileoverview 工具类
 */

let RPS_TYPE = require('Constants').RPS_TYPE;

let Utils = {
    /**
     * @description 根据剪刀石头布的类型，获取对应图片路径
     * @param {*} type 
     */
    getImagePathByType: function (type) {
        var imagePath = "paper";
        switch (type) {
            case RPS_TYPE.ROCK:
                imagePath = "rock";
                break;
            case RPS_TYPE.PAPER:
                imagePath = "paper";
                break;
            case RPS_TYPE.SCISSOR:
                imagePath = "scissor";
                break
        }
        return imagePath;
    }
}

module.exports = Utils;