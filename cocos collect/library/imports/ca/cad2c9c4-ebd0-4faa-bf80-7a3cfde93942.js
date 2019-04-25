"use strict";
cc._RF.push(module, 'cad2cnE69BPqr+Aejz96TlC', 'dynamic-tiledmap');
// cases/tiledmap/dynamic-tiledmap.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        map_root: cc.Node
    },

    onLoadTileMap: function onLoadTileMap(url) {
        var _this = this;

        cc.loader.loadRes(url, cc.TiledMapAsset, function (err, tmxAsset) {
            if (err) {
                cc.error(err);
                return;
            }
            _this.onCreateTileMap(tmxAsset);
        });
    },
    onCreateTileMap: function onCreateTileMap(tmxAsset) {
        this.map_root.destroyAllChildren();
        var node = new cc.Node();
        this.map_root.addChild(node);
        var tileMap = node.addComponent(cc.TiledMap);
        tileMap.tmxAsset = tmxAsset;
    },
    onBtnCreateTileMap: function onBtnCreateTileMap() {
        var url = 'tilemap/tile_iso_offset';
        this.onLoadTileMap(url);
    },
    onBtnCreateTileMapWithTsx: function onBtnCreateTileMapWithTsx() {
        var url = 'tilemap/tile_iso_offset_with_tsx';
        this.onLoadTileMap(url);
    }
});

cc._RF.pop();