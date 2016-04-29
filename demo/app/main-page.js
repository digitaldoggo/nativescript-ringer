var ringer = require("nativescript-ringer");

function onNavigatingTo(args) {
    var page = args.object;
    
}
exports.onNavigatingTo = onNavigatingTo;

exports.volumeUp = function (args) {
    ringer.increaseVolume();
};

exports.volumeDown = function (args) {
    ringer.decreaseVolume();
};

exports.mute = function (args) {
    ringer.mute(true);
};

exports.unmute = function (args) {
    ringer.unmute(false);
};

exports.toggleMute = function (args) {
    ringer.toggleMute();
};

exports.setSilent = function (args) {
    ringer.setMode("silent");
};

exports.setVibrate = function (args) {
    ringer.setMode("vibrate");
};

exports.setNormal = function (args) {
    ringer.setMode("normal");
};