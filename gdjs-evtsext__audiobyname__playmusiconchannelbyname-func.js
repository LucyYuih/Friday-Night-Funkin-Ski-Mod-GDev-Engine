
if (typeof gdjs.evtsExt__AudioByName__PlayMusicOnChannelByName !== "undefined") {
  gdjs.evtsExt__AudioByName__PlayMusicOnChannelByName.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__AudioByName__PlayMusicOnChannelByName = {};
gdjs.evtsExt__AudioByName__PlayMusicOnChannelByName.idToCallbackMap = new Map();


gdjs.evtsExt__AudioByName__PlayMusicOnChannelByName.userFunc0x1ed4220 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const soundManager = runtimeScene.getGame().getSoundManager();
soundManager.playMusicOnChannel(
    eventsFunctionContext.getArgument("Music"),
    eventsFunctionContext.getArgument("Channel"),
    eventsFunctionContext.getArgument("Loop"),
    eventsFunctionContext.getArgument("Volume"),
    eventsFunctionContext.getArgument("Pitch"));

};
gdjs.evtsExt__AudioByName__PlayMusicOnChannelByName.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__AudioByName__PlayMusicOnChannelByName.userFunc0x1ed4220(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__AudioByName__PlayMusicOnChannelByName.func = function(runtimeScene, Music, Channel, Loop, Volume, Pitch, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AudioByName"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AudioByName"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Music") return Music;
if (argName === "Channel") return Channel;
if (argName === "Loop") return Loop;
if (argName === "Volume") return Volume;
if (argName === "Pitch") return Pitch;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__AudioByName__PlayMusicOnChannelByName.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__AudioByName__PlayMusicOnChannelByName.registeredGdjsCallbacks = [];