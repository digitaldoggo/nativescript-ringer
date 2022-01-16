# NativeScript Ringer Plugin

A plugin for controlling the ringer volume and mode in NativeScript Android apps.

## Installation

Run the following command from the root of your project:

```
$ tns plugin add nativescript-ringer
```

## Usage

To use the ringer module you must first `require()` it:

```js
var ringer = require("nativescript-ringer");
```

After you have a reference to the module you can make calls to its methods like in the examples below.

Increase Volume:

```js
ringer.increaseVolume();
```

Decrease Volume:

```js
ringer.decreaseVolume();
```

Set Volume to a specific value (0-6):

```js
ringer.setVolume(6);
```

Mute Volume:

```js
ringer.mute();
```

UnMute Volume:

```js
ringer.unmute();
```

Toggle Mute:

```js
ringer.toggleMute();
```

Set Ringer Mode to ("silent", "vibrate", or "normal"):

```js
ringer.setMode("vibrate");
```

Get Current Ringer Mode. (returns "silent", "vibrate", or "normal"):

```js
ringer.getMode();
```
