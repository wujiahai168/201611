"use strict";
cc._RF.push(module, 'e4f88adp3hERoJ48DZ2PSAl', 'LabelLocalized');
// i18n/LabelLocalized.js

'use strict';

var i18n = require('i18n');
cc.Class({
    extends: cc.Label,

    properties: {
        textKey: {
            default: 'TEXT_KEY',
            multiline: true,
            tooltip: 'Enter i18n key here',
            notify: function notify() {
                this.string = this.localizedString;
            }
        },
        localizedString: {
            override: true,
            tooltip: 'Here shows the localized string of Text Key',
            get: function get() {
                return i18n.t(this.textKey);
            },
            set: function set(value) {
                this.textKey = value;
                if (CC_EDITOR) {
                    cc.warn('Please set label text key in Text Key property.');
                }
            }
        }
    },

    onLoad: function onLoad() {
        if (this.localizedString) {
            this.string = this.localizedString;
        }
    }
});

cc._RF.pop();