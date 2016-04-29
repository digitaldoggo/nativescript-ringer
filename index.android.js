var application = require("application");

var packageManager = application.android.currentContext.getPackageManager();
var audioManager = new android.media.AudioManager(application.android.currentContext);
var AudioManager = android.media.AudioManager;

var ringerTypes= {
    "silent": AudioManager.RINGER_MODE_SILENT,
    "vibrate": AudioManager.RINGER_MODE_VIBRATE,
    "normal": AudioManager.RINGER_MODE_NORMAL
}

var lastVolume = (audioManager.getStreamVolume(AudioManager.STREAM_RING) === 0 ? audioManager.getStreamMaxVolume(AudioManager.STREAM_RING) : audioManager.getStreamVolume(AudioManager.STREAM_RING));

var ringer = {
    increaseVolume: function () {
        audioManager.adjustStreamVolume(AudioManager.STREAM_RING, AudioManager.ADJUST_RAISE, AudioManager.FLAG_SHOW_UI + AudioManager.FLAG_PLAY_SOUND);
    },
    
    decreaseVolume: function () {
		audioManager.adjustStreamVolume(AudioManager.STREAM_RING, AudioManager.ADJUST_LOWER, AudioManager.FLAG_SHOW_UI + AudioManager.FLAG_PLAY_SOUND);
    },
    
    setVolume: function (volume) {
        if(typeof volume != "undefined") {
            audioManager.setStreamVolume(AudioManager.STREAM_RING, volume, AudioManager.FLAG_SHOW_UI + AudioManager.FLAG_PLAY_SOUND);
        }
        else {
            console.error("Invalid ringer volume value. (e.g. 0-5)");
        }
    },
    
    mute: function () {
        if (audioManager.getStreamVolume(AudioManager.STREAM_RING) > 0) {
            lastVolume = audioManager.getStreamVolume(AudioManager.STREAM_RING);
        }
        audioManager.setStreamVolume(AudioManager.STREAM_RING, 0, AudioManager.FLAG_SHOW_UI);
    },
    
    unmute: function () {
        audioManager.setStreamVolume(AudioManager.STREAM_RING, lastVolume, AudioManager.FLAG_SHOW_UI + AudioManager.FLAG_PLAY_SOUND);
    },
    
    toggleMute: function () {       
        if (audioManager.getStreamVolume(AudioManager.STREAM_RING) > 0) {
            this.mute();
        }
        else {
            this.unmute();
        }
    },
    
    setMode: function (setting) {
        var ringerType = ringerTypes[setting];
        if(typeof ringerType != "undefined") {
            audioManager.setRingerMode(ringerType);
        }
        else {
            console.error("Invalid ringer type.");
        }
    }
};

module.exports = ringer;