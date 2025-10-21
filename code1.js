gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.idToCallbackMap = new Map();
gdjs.MenuCode.forEachIndex2 = 0;

gdjs.MenuCode.forEachIndex3 = 0;

gdjs.MenuCode.forEachIndex4 = 0;

gdjs.MenuCode.forEachIndex5 = 0;

gdjs.MenuCode.forEachIndex6 = 0;

gdjs.MenuCode.forEachObjects2 = [];

gdjs.MenuCode.forEachObjects3 = [];

gdjs.MenuCode.forEachObjects4 = [];

gdjs.MenuCode.forEachObjects5 = [];

gdjs.MenuCode.forEachObjects6 = [];

gdjs.MenuCode.forEachTemporary2 = null;

gdjs.MenuCode.forEachTemporary3 = null;

gdjs.MenuCode.forEachTemporary4 = null;

gdjs.MenuCode.forEachTemporary5 = null;

gdjs.MenuCode.forEachTemporary6 = null;

gdjs.MenuCode.forEachTotalCount2 = 0;

gdjs.MenuCode.forEachTotalCount3 = 0;

gdjs.MenuCode.forEachTotalCount4 = 0;

gdjs.MenuCode.forEachTotalCount5 = 0;

gdjs.MenuCode.forEachTotalCount6 = 0;

gdjs.MenuCode.GDlogobumpinObjects1= [];
gdjs.MenuCode.GDlogobumpinObjects2= [];
gdjs.MenuCode.GDlogobumpinObjects3= [];
gdjs.MenuCode.GDlogobumpinObjects4= [];
gdjs.MenuCode.GDlogobumpinObjects5= [];
gdjs.MenuCode.GDlogobumpinObjects6= [];
gdjs.MenuCode.GDBlackObjects1= [];
gdjs.MenuCode.GDBlackObjects2= [];
gdjs.MenuCode.GDBlackObjects3= [];
gdjs.MenuCode.GDBlackObjects4= [];
gdjs.MenuCode.GDBlackObjects5= [];
gdjs.MenuCode.GDBlackObjects6= [];
gdjs.MenuCode.GDbegfontObjects1= [];
gdjs.MenuCode.GDbegfontObjects2= [];
gdjs.MenuCode.GDbegfontObjects3= [];
gdjs.MenuCode.GDbegfontObjects4= [];
gdjs.MenuCode.GDbegfontObjects5= [];
gdjs.MenuCode.GDbegfontObjects6= [];
gdjs.MenuCode.GDgfDancinTitleObjects1= [];
gdjs.MenuCode.GDgfDancinTitleObjects2= [];
gdjs.MenuCode.GDgfDancinTitleObjects3= [];
gdjs.MenuCode.GDgfDancinTitleObjects4= [];
gdjs.MenuCode.GDgfDancinTitleObjects5= [];
gdjs.MenuCode.GDgfDancinTitleObjects6= [];
gdjs.MenuCode.GDBGObjects1= [];
gdjs.MenuCode.GDBGObjects2= [];
gdjs.MenuCode.GDBGObjects3= [];
gdjs.MenuCode.GDBGObjects4= [];
gdjs.MenuCode.GDBGObjects5= [];
gdjs.MenuCode.GDBGObjects6= [];
gdjs.MenuCode.GDTitleEnterObjects1= [];
gdjs.MenuCode.GDTitleEnterObjects2= [];
gdjs.MenuCode.GDTitleEnterObjects3= [];
gdjs.MenuCode.GDTitleEnterObjects4= [];
gdjs.MenuCode.GDTitleEnterObjects5= [];
gdjs.MenuCode.GDTitleEnterObjects6= [];
gdjs.MenuCode.GDFreeplayObjects1= [];
gdjs.MenuCode.GDFreeplayObjects2= [];
gdjs.MenuCode.GDFreeplayObjects3= [];
gdjs.MenuCode.GDFreeplayObjects4= [];
gdjs.MenuCode.GDFreeplayObjects5= [];
gdjs.MenuCode.GDFreeplayObjects6= [];
gdjs.MenuCode.GDNewBBTextObjects1= [];
gdjs.MenuCode.GDNewBBTextObjects2= [];
gdjs.MenuCode.GDNewBBTextObjects3= [];
gdjs.MenuCode.GDNewBBTextObjects4= [];
gdjs.MenuCode.GDNewBBTextObjects5= [];
gdjs.MenuCode.GDNewBBTextObjects6= [];
gdjs.MenuCode.GDNoObjects1= [];
gdjs.MenuCode.GDNoObjects2= [];
gdjs.MenuCode.GDNoObjects3= [];
gdjs.MenuCode.GDNoObjects4= [];
gdjs.MenuCode.GDNoObjects5= [];
gdjs.MenuCode.GDNoObjects6= [];
gdjs.MenuCode.GDYesObjects1= [];
gdjs.MenuCode.GDYesObjects2= [];
gdjs.MenuCode.GDYesObjects3= [];
gdjs.MenuCode.GDYesObjects4= [];
gdjs.MenuCode.GDYesObjects5= [];
gdjs.MenuCode.GDYesObjects6= [];
gdjs.MenuCode.GDOptionsObjects1= [];
gdjs.MenuCode.GDOptionsObjects2= [];
gdjs.MenuCode.GDOptionsObjects3= [];
gdjs.MenuCode.GDOptionsObjects4= [];
gdjs.MenuCode.GDOptionsObjects5= [];
gdjs.MenuCode.GDOptionsObjects6= [];
gdjs.MenuCode.GDOptionsTextObjects1= [];
gdjs.MenuCode.GDOptionsTextObjects2= [];
gdjs.MenuCode.GDOptionsTextObjects3= [];
gdjs.MenuCode.GDOptionsTextObjects4= [];
gdjs.MenuCode.GDOptionsTextObjects5= [];
gdjs.MenuCode.GDOptionsTextObjects6= [];
gdjs.MenuCode.GDOptionsbuttonsObjects1= [];
gdjs.MenuCode.GDOptionsbuttonsObjects2= [];
gdjs.MenuCode.GDOptionsbuttonsObjects3= [];
gdjs.MenuCode.GDOptionsbuttonsObjects4= [];
gdjs.MenuCode.GDOptionsbuttonsObjects5= [];
gdjs.MenuCode.GDOptionsbuttonsObjects6= [];
gdjs.MenuCode.GDOptPotionsTextObjects1= [];
gdjs.MenuCode.GDOptPotionsTextObjects2= [];
gdjs.MenuCode.GDOptPotionsTextObjects3= [];
gdjs.MenuCode.GDOptPotionsTextObjects4= [];
gdjs.MenuCode.GDOptPotionsTextObjects5= [];
gdjs.MenuCode.GDOptPotionsTextObjects6= [];
gdjs.MenuCode.GDCheckBoxesObjects1= [];
gdjs.MenuCode.GDCheckBoxesObjects2= [];
gdjs.MenuCode.GDCheckBoxesObjects3= [];
gdjs.MenuCode.GDCheckBoxesObjects4= [];
gdjs.MenuCode.GDCheckBoxesObjects5= [];
gdjs.MenuCode.GDCheckBoxesObjects6= [];
gdjs.MenuCode.GDBackButtonObjects1= [];
gdjs.MenuCode.GDBackButtonObjects2= [];
gdjs.MenuCode.GDBackButtonObjects3= [];
gdjs.MenuCode.GDBackButtonObjects4= [];
gdjs.MenuCode.GDBackButtonObjects5= [];
gdjs.MenuCode.GDBackButtonObjects6= [];
gdjs.MenuCode.GDSquareWhiteSliderObjects1= [];
gdjs.MenuCode.GDSquareWhiteSliderObjects2= [];
gdjs.MenuCode.GDSquareWhiteSliderObjects3= [];
gdjs.MenuCode.GDSquareWhiteSliderObjects4= [];
gdjs.MenuCode.GDSquareWhiteSliderObjects5= [];
gdjs.MenuCode.GDSquareWhiteSliderObjects6= [];
gdjs.MenuCode.GDFullscreenTextObjects1= [];
gdjs.MenuCode.GDFullscreenTextObjects2= [];
gdjs.MenuCode.GDFullscreenTextObjects3= [];
gdjs.MenuCode.GDFullscreenTextObjects4= [];
gdjs.MenuCode.GDFullscreenTextObjects5= [];
gdjs.MenuCode.GDFullscreenTextObjects6= [];
gdjs.MenuCode.GDcreditstextObjects1= [];
gdjs.MenuCode.GDcreditstextObjects2= [];
gdjs.MenuCode.GDcreditstextObjects3= [];
gdjs.MenuCode.GDcreditstextObjects4= [];
gdjs.MenuCode.GDcreditstextObjects5= [];
gdjs.MenuCode.GDcreditstextObjects6= [];
gdjs.MenuCode.GDHItsoundVolumeSliderObjects1= [];
gdjs.MenuCode.GDHItsoundVolumeSliderObjects2= [];
gdjs.MenuCode.GDHItsoundVolumeSliderObjects3= [];
gdjs.MenuCode.GDHItsoundVolumeSliderObjects4= [];
gdjs.MenuCode.GDHItsoundVolumeSliderObjects5= [];
gdjs.MenuCode.GDHItsoundVolumeSliderObjects6= [];
gdjs.MenuCode.GDHitsoundTextObjects1= [];
gdjs.MenuCode.GDHitsoundTextObjects2= [];
gdjs.MenuCode.GDHitsoundTextObjects3= [];
gdjs.MenuCode.GDHitsoundTextObjects4= [];
gdjs.MenuCode.GDHitsoundTextObjects5= [];
gdjs.MenuCode.GDHitsoundTextObjects6= [];
gdjs.MenuCode.GDNewTextObjects1= [];
gdjs.MenuCode.GDNewTextObjects2= [];
gdjs.MenuCode.GDNewTextObjects3= [];
gdjs.MenuCode.GDNewTextObjects4= [];
gdjs.MenuCode.GDNewTextObjects5= [];
gdjs.MenuCode.GDNewTextObjects6= [];
gdjs.MenuCode.GDOptPotionsText2Objects1= [];
gdjs.MenuCode.GDOptPotionsText2Objects2= [];
gdjs.MenuCode.GDOptPotionsText2Objects3= [];
gdjs.MenuCode.GDOptPotionsText2Objects4= [];
gdjs.MenuCode.GDOptPotionsText2Objects5= [];
gdjs.MenuCode.GDOptPotionsText2Objects6= [];
gdjs.MenuCode.GDkeybins_9595textObjects1= [];
gdjs.MenuCode.GDkeybins_9595textObjects2= [];
gdjs.MenuCode.GDkeybins_9595textObjects3= [];
gdjs.MenuCode.GDkeybins_9595textObjects4= [];
gdjs.MenuCode.GDkeybins_9595textObjects5= [];
gdjs.MenuCode.GDkeybins_9595textObjects6= [];
gdjs.MenuCode.GDSquareWhiteToggleObjects1= [];
gdjs.MenuCode.GDSquareWhiteToggleObjects2= [];
gdjs.MenuCode.GDSquareWhiteToggleObjects3= [];
gdjs.MenuCode.GDSquareWhiteToggleObjects4= [];
gdjs.MenuCode.GDSquareWhiteToggleObjects5= [];
gdjs.MenuCode.GDSquareWhiteToggleObjects6= [];
gdjs.MenuCode.GDbegfont2Objects1= [];
gdjs.MenuCode.GDbegfont2Objects2= [];
gdjs.MenuCode.GDbegfont2Objects3= [];
gdjs.MenuCode.GDbegfont2Objects4= [];
gdjs.MenuCode.GDbegfont2Objects5= [];
gdjs.MenuCode.GDbegfont2Objects6= [];
gdjs.MenuCode.GDStatisticsObjects1= [];
gdjs.MenuCode.GDStatisticsObjects2= [];
gdjs.MenuCode.GDStatisticsObjects3= [];
gdjs.MenuCode.GDStatisticsObjects4= [];
gdjs.MenuCode.GDStatisticsObjects5= [];
gdjs.MenuCode.GDStatisticsObjects6= [];
gdjs.MenuCode.GDComboNumbersObjects1= [];
gdjs.MenuCode.GDComboNumbersObjects2= [];
gdjs.MenuCode.GDComboNumbersObjects3= [];
gdjs.MenuCode.GDComboNumbersObjects4= [];
gdjs.MenuCode.GDComboNumbersObjects5= [];
gdjs.MenuCode.GDComboNumbersObjects6= [];
gdjs.MenuCode.GDNotesSplashObjects1= [];
gdjs.MenuCode.GDNotesSplashObjects2= [];
gdjs.MenuCode.GDNotesSplashObjects3= [];
gdjs.MenuCode.GDNotesSplashObjects4= [];
gdjs.MenuCode.GDNotesSplashObjects5= [];
gdjs.MenuCode.GDNotesSplashObjects6= [];
gdjs.MenuCode.GDfpsObjects1= [];
gdjs.MenuCode.GDfpsObjects2= [];
gdjs.MenuCode.GDfpsObjects3= [];
gdjs.MenuCode.GDfpsObjects4= [];
gdjs.MenuCode.GDfpsObjects5= [];
gdjs.MenuCode.GDfpsObjects6= [];
gdjs.MenuCode.GDEngineTextObjects1= [];
gdjs.MenuCode.GDEngineTextObjects2= [];
gdjs.MenuCode.GDEngineTextObjects3= [];
gdjs.MenuCode.GDEngineTextObjects4= [];
gdjs.MenuCode.GDEngineTextObjects5= [];
gdjs.MenuCode.GDEngineTextObjects6= [];
gdjs.MenuCode.GDLongUpscrollBFObjects1= [];
gdjs.MenuCode.GDLongUpscrollBFObjects2= [];
gdjs.MenuCode.GDLongUpscrollBFObjects3= [];
gdjs.MenuCode.GDLongUpscrollBFObjects4= [];
gdjs.MenuCode.GDLongUpscrollBFObjects5= [];
gdjs.MenuCode.GDLongUpscrollBFObjects6= [];
gdjs.MenuCode.GDLongUpscrollOPPObjects1= [];
gdjs.MenuCode.GDLongUpscrollOPPObjects2= [];
gdjs.MenuCode.GDLongUpscrollOPPObjects3= [];
gdjs.MenuCode.GDLongUpscrollOPPObjects4= [];
gdjs.MenuCode.GDLongUpscrollOPPObjects5= [];
gdjs.MenuCode.GDLongUpscrollOPPObjects6= [];
gdjs.MenuCode.GDHitboxLeftObjects1= [];
gdjs.MenuCode.GDHitboxLeftObjects2= [];
gdjs.MenuCode.GDHitboxLeftObjects3= [];
gdjs.MenuCode.GDHitboxLeftObjects4= [];
gdjs.MenuCode.GDHitboxLeftObjects5= [];
gdjs.MenuCode.GDHitboxLeftObjects6= [];
gdjs.MenuCode.GDHitboxDownObjects1= [];
gdjs.MenuCode.GDHitboxDownObjects2= [];
gdjs.MenuCode.GDHitboxDownObjects3= [];
gdjs.MenuCode.GDHitboxDownObjects4= [];
gdjs.MenuCode.GDHitboxDownObjects5= [];
gdjs.MenuCode.GDHitboxDownObjects6= [];
gdjs.MenuCode.GDHitboxUpObjects1= [];
gdjs.MenuCode.GDHitboxUpObjects2= [];
gdjs.MenuCode.GDHitboxUpObjects3= [];
gdjs.MenuCode.GDHitboxUpObjects4= [];
gdjs.MenuCode.GDHitboxUpObjects5= [];
gdjs.MenuCode.GDHitboxUpObjects6= [];
gdjs.MenuCode.GDhitrightObjects1= [];
gdjs.MenuCode.GDhitrightObjects2= [];
gdjs.MenuCode.GDhitrightObjects3= [];
gdjs.MenuCode.GDhitrightObjects4= [];
gdjs.MenuCode.GDhitrightObjects5= [];
gdjs.MenuCode.GDhitrightObjects6= [];
gdjs.MenuCode.GDBFIconObjects1= [];
gdjs.MenuCode.GDBFIconObjects2= [];
gdjs.MenuCode.GDBFIconObjects3= [];
gdjs.MenuCode.GDBFIconObjects4= [];
gdjs.MenuCode.GDBFIconObjects5= [];
gdjs.MenuCode.GDBFIconObjects6= [];
gdjs.MenuCode.GDPauseButtonObjects1= [];
gdjs.MenuCode.GDPauseButtonObjects2= [];
gdjs.MenuCode.GDPauseButtonObjects3= [];
gdjs.MenuCode.GDPauseButtonObjects4= [];
gdjs.MenuCode.GDPauseButtonObjects5= [];
gdjs.MenuCode.GDPauseButtonObjects6= [];
gdjs.MenuCode.GDPauseButton2Objects1= [];
gdjs.MenuCode.GDPauseButton2Objects2= [];
gdjs.MenuCode.GDPauseButton2Objects3= [];
gdjs.MenuCode.GDPauseButton2Objects4= [];
gdjs.MenuCode.GDPauseButton2Objects5= [];
gdjs.MenuCode.GDPauseButton2Objects6= [];
gdjs.MenuCode.GDBlackScreenObjects1= [];
gdjs.MenuCode.GDBlackScreenObjects2= [];
gdjs.MenuCode.GDBlackScreenObjects3= [];
gdjs.MenuCode.GDBlackScreenObjects4= [];
gdjs.MenuCode.GDBlackScreenObjects5= [];
gdjs.MenuCode.GDBlackScreenObjects6= [];
gdjs.MenuCode.GDPauseTextObjects1= [];
gdjs.MenuCode.GDPauseTextObjects2= [];
gdjs.MenuCode.GDPauseTextObjects3= [];
gdjs.MenuCode.GDPauseTextObjects4= [];
gdjs.MenuCode.GDPauseTextObjects5= [];
gdjs.MenuCode.GDPauseTextObjects6= [];
gdjs.MenuCode.GDExitTextObjects1= [];
gdjs.MenuCode.GDExitTextObjects2= [];
gdjs.MenuCode.GDExitTextObjects3= [];
gdjs.MenuCode.GDExitTextObjects4= [];
gdjs.MenuCode.GDExitTextObjects5= [];
gdjs.MenuCode.GDExitTextObjects6= [];
gdjs.MenuCode.GDRestartTextObjects1= [];
gdjs.MenuCode.GDRestartTextObjects2= [];
gdjs.MenuCode.GDRestartTextObjects3= [];
gdjs.MenuCode.GDRestartTextObjects4= [];
gdjs.MenuCode.GDRestartTextObjects5= [];
gdjs.MenuCode.GDRestartTextObjects6= [];
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects1= [];
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects2= [];
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects3= [];
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects4= [];
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects5= [];
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects6= [];
gdjs.MenuCode.GDBfUpNoteObjects1= [];
gdjs.MenuCode.GDBfUpNoteObjects2= [];
gdjs.MenuCode.GDBfUpNoteObjects3= [];
gdjs.MenuCode.GDBfUpNoteObjects4= [];
gdjs.MenuCode.GDBfUpNoteObjects5= [];
gdjs.MenuCode.GDBfUpNoteObjects6= [];
gdjs.MenuCode.GDBfDownNoteObjects1= [];
gdjs.MenuCode.GDBfDownNoteObjects2= [];
gdjs.MenuCode.GDBfDownNoteObjects3= [];
gdjs.MenuCode.GDBfDownNoteObjects4= [];
gdjs.MenuCode.GDBfDownNoteObjects5= [];
gdjs.MenuCode.GDBfDownNoteObjects6= [];
gdjs.MenuCode.GDBfLeftNoteObjects1= [];
gdjs.MenuCode.GDBfLeftNoteObjects2= [];
gdjs.MenuCode.GDBfLeftNoteObjects3= [];
gdjs.MenuCode.GDBfLeftNoteObjects4= [];
gdjs.MenuCode.GDBfLeftNoteObjects5= [];
gdjs.MenuCode.GDBfLeftNoteObjects6= [];
gdjs.MenuCode.GDBfLeftNote4Objects1= [];
gdjs.MenuCode.GDBfLeftNote4Objects2= [];
gdjs.MenuCode.GDBfLeftNote4Objects3= [];
gdjs.MenuCode.GDBfLeftNote4Objects4= [];
gdjs.MenuCode.GDBfLeftNote4Objects5= [];
gdjs.MenuCode.GDBfLeftNote4Objects6= [];
gdjs.MenuCode.GDBfDownNote5Objects1= [];
gdjs.MenuCode.GDBfDownNote5Objects2= [];
gdjs.MenuCode.GDBfDownNote5Objects3= [];
gdjs.MenuCode.GDBfDownNote5Objects4= [];
gdjs.MenuCode.GDBfDownNote5Objects5= [];
gdjs.MenuCode.GDBfDownNote5Objects6= [];
gdjs.MenuCode.GDBfUpNote6Objects1= [];
gdjs.MenuCode.GDBfUpNote6Objects2= [];
gdjs.MenuCode.GDBfUpNote6Objects3= [];
gdjs.MenuCode.GDBfUpNote6Objects4= [];
gdjs.MenuCode.GDBfUpNote6Objects5= [];
gdjs.MenuCode.GDBfUpNote6Objects6= [];
gdjs.MenuCode.GDBfRightNoteObjects1= [];
gdjs.MenuCode.GDBfRightNoteObjects2= [];
gdjs.MenuCode.GDBfRightNoteObjects3= [];
gdjs.MenuCode.GDBfRightNoteObjects4= [];
gdjs.MenuCode.GDBfRightNoteObjects5= [];
gdjs.MenuCode.GDBfRightNoteObjects6= [];
gdjs.MenuCode.GDBfRightNote7Objects1= [];
gdjs.MenuCode.GDBfRightNote7Objects2= [];
gdjs.MenuCode.GDBfRightNote7Objects3= [];
gdjs.MenuCode.GDBfRightNote7Objects4= [];
gdjs.MenuCode.GDBfRightNote7Objects5= [];
gdjs.MenuCode.GDBfRightNote7Objects6= [];
gdjs.MenuCode.GDOppIconObjects1= [];
gdjs.MenuCode.GDOppIconObjects2= [];
gdjs.MenuCode.GDOppIconObjects3= [];
gdjs.MenuCode.GDOppIconObjects4= [];
gdjs.MenuCode.GDOppIconObjects5= [];
gdjs.MenuCode.GDOppIconObjects6= [];
gdjs.MenuCode.GDtimerBarObjects1= [];
gdjs.MenuCode.GDtimerBarObjects2= [];
gdjs.MenuCode.GDtimerBarObjects3= [];
gdjs.MenuCode.GDtimerBarObjects4= [];
gdjs.MenuCode.GDtimerBarObjects5= [];
gdjs.MenuCode.GDtimerBarObjects6= [];
gdjs.MenuCode.GDtimeObjects1= [];
gdjs.MenuCode.GDtimeObjects2= [];
gdjs.MenuCode.GDtimeObjects3= [];
gdjs.MenuCode.GDtimeObjects4= [];
gdjs.MenuCode.GDtimeObjects5= [];
gdjs.MenuCode.GDtimeObjects6= [];
gdjs.MenuCode.GDtimerBar2Objects1= [];
gdjs.MenuCode.GDtimerBar2Objects2= [];
gdjs.MenuCode.GDtimerBar2Objects3= [];
gdjs.MenuCode.GDtimerBar2Objects4= [];
gdjs.MenuCode.GDtimerBar2Objects5= [];
gdjs.MenuCode.GDtimerBar2Objects6= [];
gdjs.MenuCode.GDRatinsPopUpObjects1= [];
gdjs.MenuCode.GDRatinsPopUpObjects2= [];
gdjs.MenuCode.GDRatinsPopUpObjects3= [];
gdjs.MenuCode.GDRatinsPopUpObjects4= [];
gdjs.MenuCode.GDRatinsPopUpObjects5= [];
gdjs.MenuCode.GDRatinsPopUpObjects6= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


const repeatCount2 = 20;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.copyArray(runtimeScene.getObjects("HItsoundVolumeSlider"), gdjs.MenuCode.GDHItsoundVolumeSliderObjects2);
gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs.MenuCode.GDSquareWhiteSliderObjects2);

let isConditionTrue_0 = false;
if (true)
{
{for(var i = 0, len = gdjs.MenuCode.GDSquareWhiteSliderObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDSquareWhiteSliderObjects2[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(43).getChild(7).getAsNumber(), null);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDHItsoundVolumeSliderObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDHItsoundVolumeSliderObjects2[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(43).getChild(15).getAsNumber(), null);
}
}
}
}

}


};gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "freakyMenu.aac", 1, true, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("First", "First", 1);
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Splash", "Splash");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Cover", "Cover");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Strums", "Strums");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "LowQuality", "NoLowQuality");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "UltraLowQuality", "NoUltraLowQuality");
}
{gdjs.evtTools.storage.writeStringInJSONFile("Basic", "Settings", runtimeScene.getGame().getVariables().getFromIndex(7).getAsString());
}
{gdjs.evtTools.storage.writeStringInJSONFile("Basic", "Middle", runtimeScene.getGame().getVariables().getFromIndex(41).getAsString());
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "OppNotes", "OppNotes");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "InstantRespawn", "NoInstantRespawn");
}
{gdjs.evtTools.storage.writeNumberInJSONFile("OPT", "LifeOpacity", 255);
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Hud", "Hud");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Combo", "Combo");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "StatBounce", "StatBounce");
}
{gdjs.evtTools.storage.writeStringInJSONFile("Modifiers", "Instakill", "NoInstakill");
}
{gdjs.evtTools.storage.writeStringInJSONFile("Modifiers", "Practice", "NoPractice");
}
{gdjs.evtTools.storage.writeStringInJSONFile("Modifiers", "Botplay", "NoBotplay");
}
{gdjs.evtTools.storage.writeStringInJSONFile("Modifiers", "MissChallenge", "NoMissChallenge");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "MissSound", "NoMissSound");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "HitSound", "NoHitSound");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "HitSoundSelect", "camellia");
}
{gdjs.evtTools.storage.writeNumberInJSONFile("OPT", "HitsoundVolume", 100);
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "TwoFrames", "NoTwoFrames");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "OneFrame", "NoOneFrame");
}
{gdjs.evtTools.storage.writeStringInJSONFile("Left", "Keybinds", "a");
}
{gdjs.evtTools.storage.writeStringInJSONFile("Down", "Keybinds", "s");
}
{gdjs.evtTools.storage.writeStringInJSONFile("Up", "Keybinds", "w");
}
{gdjs.evtTools.storage.writeStringInJSONFile("Right", "Keybinds", "d");
}
{gdjs.evtTools.storage.writeStringInJSONFile("Left2", "Keybinds", "Left");
}
{gdjs.evtTools.storage.writeStringInJSONFile("Down2", "Keybinds", "Down");
}
{gdjs.evtTools.storage.writeStringInJSONFile("Up2", "Keybinds", "Up");
}
{gdjs.evtTools.storage.writeStringInJSONFile("Right2", "Keybinds", "Right");
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.storage.readStringFromJSONFile("Left", "Keybinds", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(9));
}
{gdjs.evtTools.storage.readStringFromJSONFile("Left2", "Keybinds", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(10));
}
{gdjs.evtTools.storage.readStringFromJSONFile("Down", "Keybinds", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(11));
}
{gdjs.evtTools.storage.readStringFromJSONFile("Down2", "Keybinds", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(12));
}
{gdjs.evtTools.storage.readStringFromJSONFile("Up", "Keybinds", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(13));
}
{gdjs.evtTools.storage.readStringFromJSONFile("Up2", "Keybinds", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(14));
}
{gdjs.evtTools.storage.readStringFromJSONFile("Right", "Keybinds", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(15));
}
{gdjs.evtTools.storage.readStringFromJSONFile("Right2", "Keybinds", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(16));
}
{gdjs.evtTools.storage.readStringFromJSONFile("Modifiers", "Instakill", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(44).getChild(0));
}
{gdjs.evtTools.storage.readStringFromJSONFile("Modifiers", "Botplay", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(44).getChild(2));
}
{gdjs.evtTools.storage.readStringFromJSONFile("Modifiers", "Practice", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(44).getChild(1));
}
{gdjs.evtTools.storage.readStringFromJSONFile("OPT", "Splash", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(43).getChild(0));
}
{gdjs.evtTools.storage.readStringFromJSONFile("OPT", "Cover", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(43).getChild(1));
}
{gdjs.evtTools.storage.readStringFromJSONFile("OPT", "Strums", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(43).getChild(2));
}
{gdjs.evtTools.storage.readStringFromJSONFile("OPT", "LowQuality", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(43).getChild(3));
}
{gdjs.evtTools.storage.readStringFromJSONFile("OPT", "UltraLowQuality", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(43).getChild(4));
}
{gdjs.evtTools.storage.readStringFromJSONFile("Basic", "Settings", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(7));
}
{gdjs.evtTools.storage.readStringFromJSONFile("Basic", "Middle", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(41));
}
{gdjs.evtTools.storage.readStringFromJSONFile("OPT", "OppNotes", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(43).getChild(5));
}
{gdjs.evtTools.storage.readStringFromJSONFile("OPT", "InstantRespawn", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(43).getChild(6));
}
{gdjs.evtTools.storage.readNumberFromJSONFile("OPT", "LifeOpacity", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(43).getChild(7));
}
{gdjs.evtTools.storage.readStringFromJSONFile("OPT", "Icons", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(43).getChild(8));
}
{gdjs.evtTools.storage.readStringFromJSONFile("OPT", "Hud", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(43).getChild(9));
}
{gdjs.evtTools.storage.readStringFromJSONFile("OPT", "Combo", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(43).getChild(10));
}
{gdjs.evtTools.storage.readStringFromJSONFile("OPT", "StatBounce", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(43).getChild(11));
}
{gdjs.evtTools.storage.readStringFromJSONFile("Modifiers", "MissChallenge", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(44).getChild(3));
}
{gdjs.evtTools.storage.readStringFromJSONFile("OPT", "MissSound", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(43).getChild(12));
}
{gdjs.evtTools.storage.readStringFromJSONFile("OPT", "HitSound", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(43).getChild(13));
}
{gdjs.evtTools.storage.readStringFromJSONFile("OPT", "HitSoundSelect", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(43).getChild(14));
}
{gdjs.evtTools.storage.readNumberFromJSONFile("OPT", "HitsoundVolume", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(43).getChild(15));
}
{gdjs.evtTools.storage.readStringFromJSONFile("OPT", "TwoFrames", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(43).getChild(16));
}
{gdjs.evtTools.storage.readStringFromJSONFile("OPT", "OneFrame", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(43).getChild(17));
}
{gdjs.evtTools.storage.readNumberFromJSONFile("OPT", "Cover", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(42));
}

{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("keybins_text"), gdjs.MenuCode.GDkeybins_9595textObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDkeybins_9595textObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDkeybins_9595textObjects2[i].getVariableString(gdjs.MenuCode.GDkeybins_9595textObjects2[i].getVariables().getFromIndex(0)) == "L" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDkeybins_9595textObjects2[k] = gdjs.MenuCode.GDkeybins_9595textObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDkeybins_9595textObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDkeybins_9595textObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDkeybins_9595textObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDkeybins_9595textObjects2[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(9).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("keybins_text"), gdjs.MenuCode.GDkeybins_9595textObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDkeybins_9595textObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDkeybins_9595textObjects2[i].getVariableString(gdjs.MenuCode.GDkeybins_9595textObjects2[i].getVariables().getFromIndex(0)) == "L2" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDkeybins_9595textObjects2[k] = gdjs.MenuCode.GDkeybins_9595textObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDkeybins_9595textObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDkeybins_9595textObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDkeybins_9595textObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDkeybins_9595textObjects2[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(10).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("keybins_text"), gdjs.MenuCode.GDkeybins_9595textObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDkeybins_9595textObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDkeybins_9595textObjects2[i].getVariableString(gdjs.MenuCode.GDkeybins_9595textObjects2[i].getVariables().getFromIndex(0)) == "D" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDkeybins_9595textObjects2[k] = gdjs.MenuCode.GDkeybins_9595textObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDkeybins_9595textObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDkeybins_9595textObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDkeybins_9595textObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDkeybins_9595textObjects2[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(11).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("keybins_text"), gdjs.MenuCode.GDkeybins_9595textObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDkeybins_9595textObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDkeybins_9595textObjects2[i].getVariableString(gdjs.MenuCode.GDkeybins_9595textObjects2[i].getVariables().getFromIndex(0)) == "D2" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDkeybins_9595textObjects2[k] = gdjs.MenuCode.GDkeybins_9595textObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDkeybins_9595textObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDkeybins_9595textObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDkeybins_9595textObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDkeybins_9595textObjects2[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(12).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("keybins_text"), gdjs.MenuCode.GDkeybins_9595textObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDkeybins_9595textObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDkeybins_9595textObjects2[i].getVariableString(gdjs.MenuCode.GDkeybins_9595textObjects2[i].getVariables().getFromIndex(0)) == "U" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDkeybins_9595textObjects2[k] = gdjs.MenuCode.GDkeybins_9595textObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDkeybins_9595textObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDkeybins_9595textObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDkeybins_9595textObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDkeybins_9595textObjects2[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(13).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("keybins_text"), gdjs.MenuCode.GDkeybins_9595textObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDkeybins_9595textObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDkeybins_9595textObjects2[i].getVariableString(gdjs.MenuCode.GDkeybins_9595textObjects2[i].getVariables().getFromIndex(0)) == "U2" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDkeybins_9595textObjects2[k] = gdjs.MenuCode.GDkeybins_9595textObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDkeybins_9595textObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDkeybins_9595textObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDkeybins_9595textObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDkeybins_9595textObjects2[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(14).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("keybins_text"), gdjs.MenuCode.GDkeybins_9595textObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDkeybins_9595textObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDkeybins_9595textObjects2[i].getVariableString(gdjs.MenuCode.GDkeybins_9595textObjects2[i].getVariables().getFromIndex(0)) == "R" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDkeybins_9595textObjects2[k] = gdjs.MenuCode.GDkeybins_9595textObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDkeybins_9595textObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDkeybins_9595textObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDkeybins_9595textObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDkeybins_9595textObjects2[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(15).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("keybins_text"), gdjs.MenuCode.GDkeybins_9595textObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDkeybins_9595textObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDkeybins_9595textObjects1[i].getVariableString(gdjs.MenuCode.GDkeybins_9595textObjects1[i].getVariables().getFromIndex(0)) == "R2" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDkeybins_9595textObjects1[k] = gdjs.MenuCode.GDkeybins_9595textObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDkeybins_9595textObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDkeybins_9595textObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDkeybins_9595textObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDkeybins_9595textObjects1[i].setBBText(runtimeScene.getGame().getVariables().getFromIndex(16).getAsString());
}
}
}

}


};gdjs.MenuCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDkeybins_9595textObjects1, gdjs.MenuCode.GDkeybins_9595textObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDkeybins_9595textObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDkeybins_9595textObjects2[i].getVariableString(gdjs.MenuCode.GDkeybins_9595textObjects2[i].getVariables().getFromIndex(0)) == "L" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDkeybins_9595textObjects2[k] = gdjs.MenuCode.GDkeybins_9595textObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDkeybins_9595textObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("L");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDkeybins_9595textObjects1, gdjs.MenuCode.GDkeybins_9595textObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDkeybins_9595textObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDkeybins_9595textObjects2[i].getVariableString(gdjs.MenuCode.GDkeybins_9595textObjects2[i].getVariables().getFromIndex(0)) == "L2" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDkeybins_9595textObjects2[k] = gdjs.MenuCode.GDkeybins_9595textObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDkeybins_9595textObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("L2");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDkeybins_9595textObjects1, gdjs.MenuCode.GDkeybins_9595textObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDkeybins_9595textObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDkeybins_9595textObjects2[i].getVariableString(gdjs.MenuCode.GDkeybins_9595textObjects2[i].getVariables().getFromIndex(0)) == "D" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDkeybins_9595textObjects2[k] = gdjs.MenuCode.GDkeybins_9595textObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDkeybins_9595textObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("D");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDkeybins_9595textObjects1, gdjs.MenuCode.GDkeybins_9595textObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDkeybins_9595textObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDkeybins_9595textObjects2[i].getVariableString(gdjs.MenuCode.GDkeybins_9595textObjects2[i].getVariables().getFromIndex(0)) == "D2" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDkeybins_9595textObjects2[k] = gdjs.MenuCode.GDkeybins_9595textObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDkeybins_9595textObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("D2");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDkeybins_9595textObjects1, gdjs.MenuCode.GDkeybins_9595textObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDkeybins_9595textObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDkeybins_9595textObjects2[i].getVariableString(gdjs.MenuCode.GDkeybins_9595textObjects2[i].getVariables().getFromIndex(0)) == "U" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDkeybins_9595textObjects2[k] = gdjs.MenuCode.GDkeybins_9595textObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDkeybins_9595textObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("U");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDkeybins_9595textObjects1, gdjs.MenuCode.GDkeybins_9595textObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDkeybins_9595textObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDkeybins_9595textObjects2[i].getVariableString(gdjs.MenuCode.GDkeybins_9595textObjects2[i].getVariables().getFromIndex(0)) == "U2" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDkeybins_9595textObjects2[k] = gdjs.MenuCode.GDkeybins_9595textObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDkeybins_9595textObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("U2");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDkeybins_9595textObjects1, gdjs.MenuCode.GDkeybins_9595textObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDkeybins_9595textObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDkeybins_9595textObjects2[i].getVariableString(gdjs.MenuCode.GDkeybins_9595textObjects2[i].getVariables().getFromIndex(0)) == "R" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDkeybins_9595textObjects2[k] = gdjs.MenuCode.GDkeybins_9595textObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDkeybins_9595textObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("R");
}
}

}


{

/* Reuse gdjs.MenuCode.GDkeybins_9595textObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDkeybins_9595textObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDkeybins_9595textObjects1[i].getVariableString(gdjs.MenuCode.GDkeybins_9595textObjects1[i].getVariables().getFromIndex(0)) == "R2" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDkeybins_9595textObjects1[k] = gdjs.MenuCode.GDkeybins_9595textObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDkeybins_9595textObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("R2");
}
}

}


};gdjs.MenuCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "L");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(9).setString(gdjs.evtTools.input.lastPressedKey(runtimeScene));
}
{gdjs.evtTools.storage.writeStringInJSONFile("Left", "Keybinds", runtimeScene.getGame().getVariables().getFromIndex(9).getAsString());
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("0");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "L2");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setString(gdjs.evtTools.input.lastPressedKey(runtimeScene));
}
{gdjs.evtTools.storage.writeStringInJSONFile("Left2", "Keybinds", runtimeScene.getGame().getVariables().getFromIndex(10).getAsString());
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("0");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "D");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(11).setString(gdjs.evtTools.input.lastPressedKey(runtimeScene));
}
{gdjs.evtTools.storage.writeStringInJSONFile("Down", "Keybinds", runtimeScene.getGame().getVariables().getFromIndex(11).getAsString());
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("0");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "D2");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(12).setString(gdjs.evtTools.input.lastPressedKey(runtimeScene));
}
{gdjs.evtTools.storage.writeStringInJSONFile("Down2", "Keybinds", runtimeScene.getGame().getVariables().getFromIndex(12).getAsString());
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("0");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "U");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(13).setString(gdjs.evtTools.input.lastPressedKey(runtimeScene));
}
{gdjs.evtTools.storage.writeStringInJSONFile("Up", "Keybinds", runtimeScene.getGame().getVariables().getFromIndex(13).getAsString());
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("0");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "U2");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(14).setString(gdjs.evtTools.input.lastPressedKey(runtimeScene));
}
{gdjs.evtTools.storage.writeStringInJSONFile("Up2", "Keybinds", runtimeScene.getGame().getVariables().getFromIndex(14).getAsString());
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("0");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "R");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(15).setString(gdjs.evtTools.input.lastPressedKey(runtimeScene));
}
{gdjs.evtTools.storage.writeStringInJSONFile("Right", "Keybinds", runtimeScene.getGame().getVariables().getFromIndex(15).getAsString());
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("0");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "R2");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setString(gdjs.evtTools.input.lastPressedKey(runtimeScene));
}
{gdjs.evtTools.storage.writeStringInJSONFile("Right2", "Keybinds", runtimeScene.getGame().getVariables().getFromIndex(16).getAsString());
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("0");
}
}

}


};gdjs.MenuCode.asyncCallback45179452 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.MenuCode.GDBGObjects2);
gdjs.copyArray(runtimeScene.getObjects("gfDancinTitle"), gdjs.MenuCode.GDgfDancinTitleObjects2);
gdjs.copyArray(runtimeScene.getObjects("logobumpin"), gdjs.MenuCode.GDlogobumpinObjects2);
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 1286, 730);
}
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.MenuCode.GDBGObjects2.length !== 0 ? gdjs.MenuCode.GDBGObjects2[0] : null), true, "", 0);
}
{for(var i = 0, len = gdjs.MenuCode.GDgfDancinTitleObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDgfDancinTitleObjects2[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDlogobumpinObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDlogobumpinObjects2[i].deleteFromScene(runtimeScene);
}
}
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(45179452, gdjs.MenuCode.asyncCallback45179452);
gdjs.MenuCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MenuCode.asyncCallback45179452(runtimeScene, asyncObjectsList)), 45179452, asyncObjectsList);
}
}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDFreeplayObjects2Objects = Hashtable.newFrom({"Freeplay": gdjs.MenuCode.GDFreeplayObjects2});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDFreeplayObjects2Objects = Hashtable.newFrom({"Freeplay": gdjs.MenuCode.GDFreeplayObjects2});
gdjs.MenuCode.asyncCallback45179916 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("NewBBText"), gdjs.MenuCode.GDNewBBTextObjects3);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.MenuCode.GDNewBBTextObjects3.length !== 0 ? gdjs.MenuCode.GDNewBBTextObjects3[0] : null), true, "", 0);
}
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(45179916, gdjs.MenuCode.asyncCallback45179916);
gdjs.MenuCode.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MenuCode.asyncCallback45179916(runtimeScene, asyncObjectsList)), 45179916, asyncObjectsList);
}
}

}


};gdjs.MenuCode.asyncCallback45176388 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Black"), gdjs.MenuCode.GDBlackObjects2);

{for(var i = 0, len = gdjs.MenuCode.GDBlackObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDBlackObjects2[i].getBehavior("Tween").addObjectPositionYTween2("black", 1200, "linear", 2, false);
}
}

{ //Subevents
gdjs.MenuCode.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(45176388, gdjs.MenuCode.asyncCallback45176388);
gdjs.MenuCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDBlackObjects1) asyncObjectsList.addObject("Black", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.MenuCode.asyncCallback45176388(runtimeScene, asyncObjectsList)), 45176388, asyncObjectsList);
}
}

}


};gdjs.MenuCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Freeplay"), gdjs.MenuCode.GDFreeplayObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDFreeplayObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDFreeplayObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDFreeplayObjects2[i].getBehavior("Animation").getAnimationName() == "idle" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDFreeplayObjects2[k] = gdjs.MenuCode.GDFreeplayObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDFreeplayObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDFreeplayObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDFreeplayObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDFreeplayObjects2[i].getBehavior("Animation").setAnimationName("pressed");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Freeplay"), gdjs.MenuCode.GDFreeplayObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDFreeplayObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDFreeplayObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDFreeplayObjects2[i].getBehavior("Animation").getAnimationName() == "pressed" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDFreeplayObjects2[k] = gdjs.MenuCode.GDFreeplayObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDFreeplayObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDFreeplayObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDFreeplayObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDFreeplayObjects2[i].getBehavior("Animation").setAnimationName("idle");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.MenuCode.GDBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("Freeplay"), gdjs.MenuCode.GDFreeplayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDFreeplayObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDFreeplayObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDFreeplayObjects1[k] = gdjs.MenuCode.GDFreeplayObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDFreeplayObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDFreeplayObjects1.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDFreeplayObjects1[i].getBehavior("Animation").getAnimationName() == "Clicked") ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDFreeplayObjects1[k] = gdjs.MenuCode.GDFreeplayObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDFreeplayObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBGObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBGObjects1[i].getY() == 1089 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBGObjects1[k] = gdjs.MenuCode.GDBGObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBGObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.MenuCode.GDBlackObjects1);
/* Reuse gdjs.MenuCode.GDFreeplayObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmMenu.ogg", false, 100, 1);
}
{for(var i = 0, len = gdjs.MenuCode.GDFreeplayObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDFreeplayObjects1[i].getBehavior("Animation").setAnimationName("Clicked");
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBlackObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBlackObjects1[i].setY(-(1200));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}

{ //Subevents
gdjs.MenuCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDOptionsObjects2Objects = Hashtable.newFrom({"Options": gdjs.MenuCode.GDOptionsObjects2});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDOptionsObjects2Objects = Hashtable.newFrom({"Options": gdjs.MenuCode.GDOptionsObjects2});
gdjs.MenuCode.asyncCallback15338540 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("BG"), gdjs.MenuCode.GDBGObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("Options"), gdjs.MenuCode.GDOptionsObjects3);

{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.MenuCode.GDBGObjects3.length !== 0 ? gdjs.MenuCode.GDBGObjects3[0] : null), true, "", 0);
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "ui");
}
{for(var i = 0, len = gdjs.MenuCode.GDOptionsObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDOptionsObjects3[i].getBehavior("Animation").setAnimationName("idle");
}
}
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(15338540, gdjs.MenuCode.asyncCallback15338540);
gdjs.MenuCode.eventsList10 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
/* Don't save BG as it will be provided by the parent asyncObjectsList. */
/* Don't save Options as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.MenuCode.asyncCallback15338540(runtimeScene, asyncObjectsList)), 15338540, asyncObjectsList);
}
}

}


};gdjs.MenuCode.asyncCallback15337612 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Black"), gdjs.MenuCode.GDBlackObjects2);

{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}
{for(var i = 0, len = gdjs.MenuCode.GDBlackObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDBlackObjects2[i].getBehavior("Tween").addObjectPositionYTween2("black", 1200, "linear", 2, false);
}
}

{ //Subevents
gdjs.MenuCode.eventsList10(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(15337612, gdjs.MenuCode.asyncCallback15337612);
gdjs.MenuCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDBGObjects1) asyncObjectsList.addObject("BG", obj);
for (const obj of gdjs.MenuCode.GDBlackObjects1) asyncObjectsList.addObject("Black", obj);
for (const obj of gdjs.MenuCode.GDOptionsObjects1) asyncObjectsList.addObject("Options", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.MenuCode.asyncCallback15337612(runtimeScene, asyncObjectsList)), 15337612, asyncObjectsList);
}
}

}


};gdjs.MenuCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.MenuCode.GDOptionsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDOptionsObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDOptionsObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDOptionsObjects2[i].getBehavior("Animation").getAnimationName() == "idle" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDOptionsObjects2[k] = gdjs.MenuCode.GDOptionsObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDOptionsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDOptionsObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDOptionsObjects2[i].getBehavior("Animation").setAnimationName("pressed");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.MenuCode.GDOptionsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDOptionsObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDOptionsObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDOptionsObjects2[i].getBehavior("Animation").getAnimationName() == "pressed" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDOptionsObjects2[k] = gdjs.MenuCode.GDOptionsObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDOptionsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDOptionsObjects2 */
{for(var i = 0, len = gdjs.MenuCode.GDOptionsObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDOptionsObjects2[i].getBehavior("Animation").setAnimationName("idle");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.MenuCode.GDBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("Options"), gdjs.MenuCode.GDOptionsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDOptionsObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDOptionsObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDOptionsObjects1[k] = gdjs.MenuCode.GDOptionsObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDOptionsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDOptionsObjects1.length;i<l;++i) {
    if ( !(gdjs.MenuCode.GDOptionsObjects1[i].getBehavior("Animation").getAnimationName() == "Clicked") ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDOptionsObjects1[k] = gdjs.MenuCode.GDOptionsObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDOptionsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBGObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBGObjects1[i].getY() == 1973 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBGObjects1[k] = gdjs.MenuCode.GDBGObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBGObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.MenuCode.GDBlackObjects1);
/* Reuse gdjs.MenuCode.GDOptionsObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmMenu.ogg", false, 100, 1);
}
{for(var i = 0, len = gdjs.MenuCode.GDOptionsObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDOptionsObjects1[i].getBehavior("Animation").setAnimationName("Clicked");
}
}
{for(var i = 0, len = gdjs.MenuCode.GDBlackObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBlackObjects1[i].setY(-(1200));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(false);
}

{ //Subevents
gdjs.MenuCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.MenuCode.GDBGObjects2);
gdjs.copyArray(runtimeScene.getObjects("Optionsbuttons"), gdjs.MenuCode.GDOptionsbuttonsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDOptionsbuttonsObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDOptionsbuttonsObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDOptionsbuttonsObjects2[k] = gdjs.MenuCode.GDOptionsbuttonsObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDOptionsbuttonsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDOptionsbuttonsObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDOptionsbuttonsObjects2[i].getY() == 1988 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDOptionsbuttonsObjects2[k] = gdjs.MenuCode.GDOptionsbuttonsObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDOptionsbuttonsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBGObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBGObjects2[i].getY() == 2793 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBGObjects2[k] = gdjs.MenuCode.GDBGObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDBGObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15340908);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDBGObjects2 */
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.MenuCode.GDBGObjects2.length !== 0 ? gdjs.MenuCode.GDBGObjects2[0] : null), true, "", 0);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(2);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.MenuCode.GDBGObjects2);
gdjs.copyArray(runtimeScene.getObjects("Optionsbuttons"), gdjs.MenuCode.GDOptionsbuttonsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDOptionsbuttonsObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDOptionsbuttonsObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDOptionsbuttonsObjects2[k] = gdjs.MenuCode.GDOptionsbuttonsObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDOptionsbuttonsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDOptionsbuttonsObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDOptionsbuttonsObjects2[i].getY() == 2192 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDOptionsbuttonsObjects2[k] = gdjs.MenuCode.GDOptionsbuttonsObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDOptionsbuttonsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBGObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBGObjects2[i].getY() == 3680 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBGObjects2[k] = gdjs.MenuCode.GDBGObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDBGObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15342844);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDBGObjects2 */
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.MenuCode.GDBGObjects2.length !== 0 ? gdjs.MenuCode.GDBGObjects2[0] : null), true, "", 0);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(2);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.MenuCode.GDBGObjects2);
gdjs.copyArray(runtimeScene.getObjects("Optionsbuttons"), gdjs.MenuCode.GDOptionsbuttonsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDOptionsbuttonsObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDOptionsbuttonsObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDOptionsbuttonsObjects2[k] = gdjs.MenuCode.GDOptionsbuttonsObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDOptionsbuttonsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDOptionsbuttonsObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDOptionsbuttonsObjects2[i].getY() == 2385 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDOptionsbuttonsObjects2[k] = gdjs.MenuCode.GDOptionsbuttonsObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDOptionsbuttonsObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBGObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBGObjects2[i].getY() == 4510 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBGObjects2[k] = gdjs.MenuCode.GDBGObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDBGObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15344804);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDBGObjects2 */
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.MenuCode.GDBGObjects2.length !== 0 ? gdjs.MenuCode.GDBGObjects2[0] : null), true, "", 0);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(2);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.MenuCode.GDBGObjects1);
gdjs.copyArray(runtimeScene.getObjects("Optionsbuttons"), gdjs.MenuCode.GDOptionsbuttonsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDOptionsbuttonsObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDOptionsbuttonsObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDOptionsbuttonsObjects1[k] = gdjs.MenuCode.GDOptionsbuttonsObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDOptionsbuttonsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDOptionsbuttonsObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDOptionsbuttonsObjects1[i].getY() == 2589 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDOptionsbuttonsObjects1[k] = gdjs.MenuCode.GDOptionsbuttonsObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDOptionsbuttonsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBGObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBGObjects1[i].getY() == 2422 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBGObjects1[k] = gdjs.MenuCode.GDBGObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBGObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15346756);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDBGObjects1 */
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.MenuCode.GDBGObjects1.length !== 0 ? gdjs.MenuCode.GDBGObjects1[0] : null), true, "", 0);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(2);
}
}

}


};gdjs.MenuCode.eventsList14 = function(runtimeScene) {

};gdjs.MenuCode.eventsList15 = function(runtimeScene) {

};gdjs.MenuCode.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects5);

for (gdjs.MenuCode.forEachIndex6 = 0;gdjs.MenuCode.forEachIndex6 < gdjs.MenuCode.GDCheckBoxesObjects5.length;++gdjs.MenuCode.forEachIndex6) {
gdjs.MenuCode.GDCheckBoxesObjects6.length = 0;


gdjs.MenuCode.forEachTemporary6 = gdjs.MenuCode.GDCheckBoxesObjects5[gdjs.MenuCode.forEachIndex6];
gdjs.MenuCode.GDCheckBoxesObjects6.push(gdjs.MenuCode.forEachTemporary6);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").getAnimationName() != "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariables().getFromIndex(0)) == "Splash" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(0).getAsString() == "Splash");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15349820);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects6.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").setAnimationName("finished");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects4);

for (gdjs.MenuCode.forEachIndex5 = 0;gdjs.MenuCode.forEachIndex5 < gdjs.MenuCode.GDCheckBoxesObjects4.length;++gdjs.MenuCode.forEachIndex5) {
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;


gdjs.MenuCode.forEachTemporary5 = gdjs.MenuCode.GDCheckBoxesObjects4[gdjs.MenuCode.forEachIndex5];
gdjs.MenuCode.GDCheckBoxesObjects5.push(gdjs.MenuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").getAnimationName() != "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariables().getFromIndex(0)) == "Splash" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(0).getAsString() == "NoSplash");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15351452);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
}
}

}


};gdjs.MenuCode.eventsList17 = function(runtimeScene) {

};gdjs.MenuCode.eventsList18 = function(runtimeScene) {

};gdjs.MenuCode.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects5);

for (gdjs.MenuCode.forEachIndex6 = 0;gdjs.MenuCode.forEachIndex6 < gdjs.MenuCode.GDCheckBoxesObjects5.length;++gdjs.MenuCode.forEachIndex6) {
gdjs.MenuCode.GDCheckBoxesObjects6.length = 0;


gdjs.MenuCode.forEachTemporary6 = gdjs.MenuCode.GDCheckBoxesObjects5[gdjs.MenuCode.forEachIndex6];
gdjs.MenuCode.GDCheckBoxesObjects6.push(gdjs.MenuCode.forEachTemporary6);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").getAnimationName() != "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariables().getFromIndex(0)) == "Cover" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(1).getAsString() == "Cover");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15353348);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects6.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").setAnimationName("finished");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects4);

for (gdjs.MenuCode.forEachIndex5 = 0;gdjs.MenuCode.forEachIndex5 < gdjs.MenuCode.GDCheckBoxesObjects4.length;++gdjs.MenuCode.forEachIndex5) {
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;


gdjs.MenuCode.forEachTemporary5 = gdjs.MenuCode.GDCheckBoxesObjects4[gdjs.MenuCode.forEachIndex5];
gdjs.MenuCode.GDCheckBoxesObjects5.push(gdjs.MenuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").getAnimationName() != "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariables().getFromIndex(0)) == "Cover" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(1).getAsString() == "NoCover");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15355020);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
}
}

}


};gdjs.MenuCode.eventsList20 = function(runtimeScene) {

};gdjs.MenuCode.eventsList21 = function(runtimeScene) {

};gdjs.MenuCode.eventsList22 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects5);

for (gdjs.MenuCode.forEachIndex6 = 0;gdjs.MenuCode.forEachIndex6 < gdjs.MenuCode.GDCheckBoxesObjects5.length;++gdjs.MenuCode.forEachIndex6) {
gdjs.MenuCode.GDCheckBoxesObjects6.length = 0;


gdjs.MenuCode.forEachTemporary6 = gdjs.MenuCode.GDCheckBoxesObjects5[gdjs.MenuCode.forEachIndex6];
gdjs.MenuCode.GDCheckBoxesObjects6.push(gdjs.MenuCode.forEachTemporary6);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").getAnimationName() != "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariables().getFromIndex(0)) == "Strums" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(2).getAsString() == "Strums");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15356956);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects6.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").setAnimationName("finished");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects4);

for (gdjs.MenuCode.forEachIndex5 = 0;gdjs.MenuCode.forEachIndex5 < gdjs.MenuCode.GDCheckBoxesObjects4.length;++gdjs.MenuCode.forEachIndex5) {
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;


gdjs.MenuCode.forEachTemporary5 = gdjs.MenuCode.GDCheckBoxesObjects4[gdjs.MenuCode.forEachIndex5];
gdjs.MenuCode.GDCheckBoxesObjects5.push(gdjs.MenuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").getAnimationName() != "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariables().getFromIndex(0)) == "Strums" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(2).getAsString() == "NoStrums");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15358588);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
}
}

}


};gdjs.MenuCode.eventsList23 = function(runtimeScene) {

};gdjs.MenuCode.eventsList24 = function(runtimeScene) {

};gdjs.MenuCode.eventsList25 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects5);

for (gdjs.MenuCode.forEachIndex6 = 0;gdjs.MenuCode.forEachIndex6 < gdjs.MenuCode.GDCheckBoxesObjects5.length;++gdjs.MenuCode.forEachIndex6) {
gdjs.MenuCode.GDCheckBoxesObjects6.length = 0;


gdjs.MenuCode.forEachTemporary6 = gdjs.MenuCode.GDCheckBoxesObjects5[gdjs.MenuCode.forEachIndex6];
gdjs.MenuCode.GDCheckBoxesObjects6.push(gdjs.MenuCode.forEachTemporary6);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").getAnimationName() != "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariables().getFromIndex(0)) == "LowQuality" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(3).getAsString() == "LowQuality");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15360612);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects6.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").setAnimationName("finished");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects4);

for (gdjs.MenuCode.forEachIndex5 = 0;gdjs.MenuCode.forEachIndex5 < gdjs.MenuCode.GDCheckBoxesObjects4.length;++gdjs.MenuCode.forEachIndex5) {
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;


gdjs.MenuCode.forEachTemporary5 = gdjs.MenuCode.GDCheckBoxesObjects4[gdjs.MenuCode.forEachIndex5];
gdjs.MenuCode.GDCheckBoxesObjects5.push(gdjs.MenuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").getAnimationName() != "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariables().getFromIndex(0)) == "LowQuality" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(3).getAsString() == "NoLowQuality");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15361924);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
}
}

}


};gdjs.MenuCode.eventsList26 = function(runtimeScene) {

};gdjs.MenuCode.eventsList27 = function(runtimeScene) {

};gdjs.MenuCode.eventsList28 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects5);

for (gdjs.MenuCode.forEachIndex6 = 0;gdjs.MenuCode.forEachIndex6 < gdjs.MenuCode.GDCheckBoxesObjects5.length;++gdjs.MenuCode.forEachIndex6) {
gdjs.MenuCode.GDCheckBoxesObjects6.length = 0;


gdjs.MenuCode.forEachTemporary6 = gdjs.MenuCode.GDCheckBoxesObjects5[gdjs.MenuCode.forEachIndex6];
gdjs.MenuCode.GDCheckBoxesObjects6.push(gdjs.MenuCode.forEachTemporary6);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").getAnimationName() != "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariables().getFromIndex(0)) == "UltraLowQuality" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(4).getAsString() == "UltraLowQuality");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15364516);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects6.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").setAnimationName("finished");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects4);

for (gdjs.MenuCode.forEachIndex5 = 0;gdjs.MenuCode.forEachIndex5 < gdjs.MenuCode.GDCheckBoxesObjects4.length;++gdjs.MenuCode.forEachIndex5) {
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;


gdjs.MenuCode.forEachTemporary5 = gdjs.MenuCode.GDCheckBoxesObjects4[gdjs.MenuCode.forEachIndex5];
gdjs.MenuCode.GDCheckBoxesObjects5.push(gdjs.MenuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").getAnimationName() != "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariables().getFromIndex(0)) == "UltraLowQuality" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(4).getAsString() == "NoUltraLowQuality");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15366748);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
}
}

}


};gdjs.MenuCode.eventsList29 = function(runtimeScene) {

};gdjs.MenuCode.eventsList30 = function(runtimeScene) {

};gdjs.MenuCode.eventsList31 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects5);

for (gdjs.MenuCode.forEachIndex6 = 0;gdjs.MenuCode.forEachIndex6 < gdjs.MenuCode.GDCheckBoxesObjects5.length;++gdjs.MenuCode.forEachIndex6) {
gdjs.MenuCode.GDCheckBoxesObjects6.length = 0;


gdjs.MenuCode.forEachTemporary6 = gdjs.MenuCode.GDCheckBoxesObjects5[gdjs.MenuCode.forEachIndex6];
gdjs.MenuCode.GDCheckBoxesObjects6.push(gdjs.MenuCode.forEachTemporary6);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").getAnimationName() != "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariables().getFromIndex(0)) == "TwoFrames" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(16).getAsString() == "TwoFrames");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15369188);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects6.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").setAnimationName("finished");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects4);

for (gdjs.MenuCode.forEachIndex5 = 0;gdjs.MenuCode.forEachIndex5 < gdjs.MenuCode.GDCheckBoxesObjects4.length;++gdjs.MenuCode.forEachIndex5) {
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;


gdjs.MenuCode.forEachTemporary5 = gdjs.MenuCode.GDCheckBoxesObjects4[gdjs.MenuCode.forEachIndex5];
gdjs.MenuCode.GDCheckBoxesObjects5.push(gdjs.MenuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").getAnimationName() != "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariables().getFromIndex(0)) == "TwoFrames" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(16).getAsString() == "NoTwoFrames");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15370548);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
}
}

}


};gdjs.MenuCode.eventsList32 = function(runtimeScene) {

};gdjs.MenuCode.eventsList33 = function(runtimeScene) {

};gdjs.MenuCode.eventsList34 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects4);

for (gdjs.MenuCode.forEachIndex5 = 0;gdjs.MenuCode.forEachIndex5 < gdjs.MenuCode.GDCheckBoxesObjects4.length;++gdjs.MenuCode.forEachIndex5) {
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;


gdjs.MenuCode.forEachTemporary5 = gdjs.MenuCode.GDCheckBoxesObjects4[gdjs.MenuCode.forEachIndex5];
gdjs.MenuCode.GDCheckBoxesObjects5.push(gdjs.MenuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").getAnimationName() != "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariables().getFromIndex(0)) == "OneFrame" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(17).getAsString() == "OneFrame");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15372892);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finished");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects3);

for (gdjs.MenuCode.forEachIndex4 = 0;gdjs.MenuCode.forEachIndex4 < gdjs.MenuCode.GDCheckBoxesObjects3.length;++gdjs.MenuCode.forEachIndex4) {
gdjs.MenuCode.GDCheckBoxesObjects4.length = 0;


gdjs.MenuCode.forEachTemporary4 = gdjs.MenuCode.GDCheckBoxesObjects3[gdjs.MenuCode.forEachIndex4];
gdjs.MenuCode.GDCheckBoxesObjects4.push(gdjs.MenuCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects4[i].getBehavior("Animation").getAnimationName() != "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects4[k] = gdjs.MenuCode.GDCheckBoxesObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects4[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects4[i].getVariables().getFromIndex(0)) == "OneFrame" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects4[k] = gdjs.MenuCode.GDCheckBoxesObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(17).getAsString() == "NoOneFrame");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15374684);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects4.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects4[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
}
}

}


};gdjs.MenuCode.eventsList35 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList16(runtimeScene);
}


{


gdjs.MenuCode.eventsList19(runtimeScene);
}


{


gdjs.MenuCode.eventsList22(runtimeScene);
}


{


gdjs.MenuCode.eventsList25(runtimeScene);
}


{


gdjs.MenuCode.eventsList28(runtimeScene);
}


{


gdjs.MenuCode.eventsList31(runtimeScene);
}


{


gdjs.MenuCode.eventsList34(runtimeScene);
}


};gdjs.MenuCode.eventsList36 = function(runtimeScene) {

};gdjs.MenuCode.eventsList37 = function(runtimeScene) {

};gdjs.MenuCode.eventsList38 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects5);

for (gdjs.MenuCode.forEachIndex6 = 0;gdjs.MenuCode.forEachIndex6 < gdjs.MenuCode.GDCheckBoxesObjects5.length;++gdjs.MenuCode.forEachIndex6) {
gdjs.MenuCode.GDCheckBoxesObjects6.length = 0;


gdjs.MenuCode.forEachTemporary6 = gdjs.MenuCode.GDCheckBoxesObjects5[gdjs.MenuCode.forEachIndex6];
gdjs.MenuCode.GDCheckBoxesObjects6.push(gdjs.MenuCode.forEachTemporary6);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").getAnimationName() != "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariables().getFromIndex(0)) == "DownScroll" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(7).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15376708);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects6.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").setAnimationName("finished");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects4);

for (gdjs.MenuCode.forEachIndex5 = 0;gdjs.MenuCode.forEachIndex5 < gdjs.MenuCode.GDCheckBoxesObjects4.length;++gdjs.MenuCode.forEachIndex5) {
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;


gdjs.MenuCode.forEachTemporary5 = gdjs.MenuCode.GDCheckBoxesObjects4[gdjs.MenuCode.forEachIndex5];
gdjs.MenuCode.GDCheckBoxesObjects5.push(gdjs.MenuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").getAnimationName() != "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariables().getFromIndex(0)) == "DownScroll" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(7).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15378500);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
}
}

}


};gdjs.MenuCode.eventsList39 = function(runtimeScene) {

};gdjs.MenuCode.eventsList40 = function(runtimeScene) {

};gdjs.MenuCode.eventsList41 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects5);

for (gdjs.MenuCode.forEachIndex6 = 0;gdjs.MenuCode.forEachIndex6 < gdjs.MenuCode.GDCheckBoxesObjects5.length;++gdjs.MenuCode.forEachIndex6) {
gdjs.MenuCode.GDCheckBoxesObjects6.length = 0;


gdjs.MenuCode.forEachTemporary6 = gdjs.MenuCode.GDCheckBoxesObjects5[gdjs.MenuCode.forEachIndex6];
gdjs.MenuCode.GDCheckBoxesObjects6.push(gdjs.MenuCode.forEachTemporary6);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").getAnimationName() != "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariables().getFromIndex(0)) == "MiddleScroll" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(41).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15380764);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects6.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").setAnimationName("finished");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects4);

for (gdjs.MenuCode.forEachIndex5 = 0;gdjs.MenuCode.forEachIndex5 < gdjs.MenuCode.GDCheckBoxesObjects4.length;++gdjs.MenuCode.forEachIndex5) {
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;


gdjs.MenuCode.forEachTemporary5 = gdjs.MenuCode.GDCheckBoxesObjects4[gdjs.MenuCode.forEachIndex5];
gdjs.MenuCode.GDCheckBoxesObjects5.push(gdjs.MenuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").getAnimationName() != "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariables().getFromIndex(0)) == "MiddleScroll" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(41).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15382780);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
}
}

}


};gdjs.MenuCode.eventsList42 = function(runtimeScene) {

};gdjs.MenuCode.eventsList43 = function(runtimeScene) {

};gdjs.MenuCode.eventsList44 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects5);

for (gdjs.MenuCode.forEachIndex6 = 0;gdjs.MenuCode.forEachIndex6 < gdjs.MenuCode.GDCheckBoxesObjects5.length;++gdjs.MenuCode.forEachIndex6) {
gdjs.MenuCode.GDCheckBoxesObjects6.length = 0;


gdjs.MenuCode.forEachTemporary6 = gdjs.MenuCode.GDCheckBoxesObjects5[gdjs.MenuCode.forEachIndex6];
gdjs.MenuCode.GDCheckBoxesObjects6.push(gdjs.MenuCode.forEachTemporary6);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").getAnimationName() != "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariables().getFromIndex(0)) == "OppNotes" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(5).getAsString() == "OppNotes");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15385028);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects6.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").setAnimationName("finished");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects4);

for (gdjs.MenuCode.forEachIndex5 = 0;gdjs.MenuCode.forEachIndex5 < gdjs.MenuCode.GDCheckBoxesObjects4.length;++gdjs.MenuCode.forEachIndex5) {
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;


gdjs.MenuCode.forEachTemporary5 = gdjs.MenuCode.GDCheckBoxesObjects4[gdjs.MenuCode.forEachIndex5];
gdjs.MenuCode.GDCheckBoxesObjects5.push(gdjs.MenuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").getAnimationName() != "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariables().getFromIndex(0)) == "OppNotes" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(5).getAsString() == "NoOppNotes");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15386804);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
}
}

}


};gdjs.MenuCode.eventsList45 = function(runtimeScene) {

};gdjs.MenuCode.eventsList46 = function(runtimeScene) {

};gdjs.MenuCode.eventsList47 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects5);

for (gdjs.MenuCode.forEachIndex6 = 0;gdjs.MenuCode.forEachIndex6 < gdjs.MenuCode.GDCheckBoxesObjects5.length;++gdjs.MenuCode.forEachIndex6) {
gdjs.MenuCode.GDCheckBoxesObjects6.length = 0;


gdjs.MenuCode.forEachTemporary6 = gdjs.MenuCode.GDCheckBoxesObjects5[gdjs.MenuCode.forEachIndex6];
gdjs.MenuCode.GDCheckBoxesObjects6.push(gdjs.MenuCode.forEachTemporary6);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").getAnimationName() != "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariables().getFromIndex(0)) == "InstantRespawn" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(6).getAsString() == "InstantRespawn");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15388972);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects6.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").setAnimationName("finished");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects4);

for (gdjs.MenuCode.forEachIndex5 = 0;gdjs.MenuCode.forEachIndex5 < gdjs.MenuCode.GDCheckBoxesObjects4.length;++gdjs.MenuCode.forEachIndex5) {
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;


gdjs.MenuCode.forEachTemporary5 = gdjs.MenuCode.GDCheckBoxesObjects4[gdjs.MenuCode.forEachIndex5];
gdjs.MenuCode.GDCheckBoxesObjects5.push(gdjs.MenuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").getAnimationName() != "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariables().getFromIndex(0)) == "InstantRespawn" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(6).getAsString() == "NoInstantRespawn");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15391188);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
}
}

}


};gdjs.MenuCode.eventsList48 = function(runtimeScene) {

};gdjs.MenuCode.eventsList49 = function(runtimeScene) {

};gdjs.MenuCode.eventsList50 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects5);

for (gdjs.MenuCode.forEachIndex6 = 0;gdjs.MenuCode.forEachIndex6 < gdjs.MenuCode.GDCheckBoxesObjects5.length;++gdjs.MenuCode.forEachIndex6) {
gdjs.MenuCode.GDCheckBoxesObjects6.length = 0;


gdjs.MenuCode.forEachTemporary6 = gdjs.MenuCode.GDCheckBoxesObjects5[gdjs.MenuCode.forEachIndex6];
gdjs.MenuCode.GDCheckBoxesObjects6.push(gdjs.MenuCode.forEachTemporary6);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").getAnimationName() != "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariables().getFromIndex(0)) == "MissSound" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(12).getAsString() == "MissSound");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15393092);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects6.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").setAnimationName("finished");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects4);

for (gdjs.MenuCode.forEachIndex5 = 0;gdjs.MenuCode.forEachIndex5 < gdjs.MenuCode.GDCheckBoxesObjects4.length;++gdjs.MenuCode.forEachIndex5) {
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;


gdjs.MenuCode.forEachTemporary5 = gdjs.MenuCode.GDCheckBoxesObjects4[gdjs.MenuCode.forEachIndex5];
gdjs.MenuCode.GDCheckBoxesObjects5.push(gdjs.MenuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").getAnimationName() != "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariables().getFromIndex(0)) == "MissSound" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(12).getAsString() == "NoMissSound");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15394884);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
}
}

}


};gdjs.MenuCode.eventsList51 = function(runtimeScene) {

};gdjs.MenuCode.eventsList52 = function(runtimeScene) {

};gdjs.MenuCode.eventsList53 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects4);

for (gdjs.MenuCode.forEachIndex5 = 0;gdjs.MenuCode.forEachIndex5 < gdjs.MenuCode.GDCheckBoxesObjects4.length;++gdjs.MenuCode.forEachIndex5) {
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;


gdjs.MenuCode.forEachTemporary5 = gdjs.MenuCode.GDCheckBoxesObjects4[gdjs.MenuCode.forEachIndex5];
gdjs.MenuCode.GDCheckBoxesObjects5.push(gdjs.MenuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").getAnimationName() != "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariables().getFromIndex(0)) == "HitSound" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(13).getAsString() == "HitSound");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15397276);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finished");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects3);

for (gdjs.MenuCode.forEachIndex4 = 0;gdjs.MenuCode.forEachIndex4 < gdjs.MenuCode.GDCheckBoxesObjects3.length;++gdjs.MenuCode.forEachIndex4) {
gdjs.MenuCode.GDCheckBoxesObjects4.length = 0;


gdjs.MenuCode.forEachTemporary4 = gdjs.MenuCode.GDCheckBoxesObjects3[gdjs.MenuCode.forEachIndex4];
gdjs.MenuCode.GDCheckBoxesObjects4.push(gdjs.MenuCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects4[i].getBehavior("Animation").getAnimationName() != "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects4[k] = gdjs.MenuCode.GDCheckBoxesObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects4[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects4[i].getVariables().getFromIndex(0)) == "HitSound" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects4[k] = gdjs.MenuCode.GDCheckBoxesObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(13).getAsString() == "NoHitSound");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15399076);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects4.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects4[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
}
}

}


};gdjs.MenuCode.eventsList54 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList38(runtimeScene);
}


{


gdjs.MenuCode.eventsList41(runtimeScene);
}


{


gdjs.MenuCode.eventsList44(runtimeScene);
}


{


gdjs.MenuCode.eventsList47(runtimeScene);
}


{


gdjs.MenuCode.eventsList50(runtimeScene);
}


{


gdjs.MenuCode.eventsList53(runtimeScene);
}


};gdjs.MenuCode.eventsList55 = function(runtimeScene) {

};gdjs.MenuCode.eventsList56 = function(runtimeScene) {

};gdjs.MenuCode.eventsList57 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects5);

for (gdjs.MenuCode.forEachIndex6 = 0;gdjs.MenuCode.forEachIndex6 < gdjs.MenuCode.GDCheckBoxesObjects5.length;++gdjs.MenuCode.forEachIndex6) {
gdjs.MenuCode.GDCheckBoxesObjects6.length = 0;


gdjs.MenuCode.forEachTemporary6 = gdjs.MenuCode.GDCheckBoxesObjects5[gdjs.MenuCode.forEachIndex6];
gdjs.MenuCode.GDCheckBoxesObjects6.push(gdjs.MenuCode.forEachTemporary6);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").getAnimationName() != "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariables().getFromIndex(0)) == "Icons" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(8).getAsString() == "NoIcons");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15401228);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects6.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").setAnimationName("finished");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects4);

for (gdjs.MenuCode.forEachIndex5 = 0;gdjs.MenuCode.forEachIndex5 < gdjs.MenuCode.GDCheckBoxesObjects4.length;++gdjs.MenuCode.forEachIndex5) {
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;


gdjs.MenuCode.forEachTemporary5 = gdjs.MenuCode.GDCheckBoxesObjects4[gdjs.MenuCode.forEachIndex5];
gdjs.MenuCode.GDCheckBoxesObjects5.push(gdjs.MenuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").getAnimationName() != "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariables().getFromIndex(0)) == "Icons" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(8).getAsString() == "Icons");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15402884);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
}
}

}


};gdjs.MenuCode.eventsList58 = function(runtimeScene) {

};gdjs.MenuCode.eventsList59 = function(runtimeScene) {

};gdjs.MenuCode.eventsList60 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects5);

for (gdjs.MenuCode.forEachIndex6 = 0;gdjs.MenuCode.forEachIndex6 < gdjs.MenuCode.GDCheckBoxesObjects5.length;++gdjs.MenuCode.forEachIndex6) {
gdjs.MenuCode.GDCheckBoxesObjects6.length = 0;


gdjs.MenuCode.forEachTemporary6 = gdjs.MenuCode.GDCheckBoxesObjects5[gdjs.MenuCode.forEachIndex6];
gdjs.MenuCode.GDCheckBoxesObjects6.push(gdjs.MenuCode.forEachTemporary6);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").getAnimationName() != "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariables().getFromIndex(0)) == "Hud" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(9).getAsString() == "NoHud");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15404796);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects6.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").setAnimationName("finished");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects4);

for (gdjs.MenuCode.forEachIndex5 = 0;gdjs.MenuCode.forEachIndex5 < gdjs.MenuCode.GDCheckBoxesObjects4.length;++gdjs.MenuCode.forEachIndex5) {
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;


gdjs.MenuCode.forEachTemporary5 = gdjs.MenuCode.GDCheckBoxesObjects4[gdjs.MenuCode.forEachIndex5];
gdjs.MenuCode.GDCheckBoxesObjects5.push(gdjs.MenuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").getAnimationName() != "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariables().getFromIndex(0)) == "Hud" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(9).getAsString() == "Hud");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15406468);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
}
}

}


};gdjs.MenuCode.eventsList61 = function(runtimeScene) {

};gdjs.MenuCode.eventsList62 = function(runtimeScene) {

};gdjs.MenuCode.eventsList63 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects5);

for (gdjs.MenuCode.forEachIndex6 = 0;gdjs.MenuCode.forEachIndex6 < gdjs.MenuCode.GDCheckBoxesObjects5.length;++gdjs.MenuCode.forEachIndex6) {
gdjs.MenuCode.GDCheckBoxesObjects6.length = 0;


gdjs.MenuCode.forEachTemporary6 = gdjs.MenuCode.GDCheckBoxesObjects5[gdjs.MenuCode.forEachIndex6];
gdjs.MenuCode.GDCheckBoxesObjects6.push(gdjs.MenuCode.forEachTemporary6);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").getAnimationName() != "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects6.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects6[i].getVariables().getFromIndex(0)) == "Combo" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects6[k] = gdjs.MenuCode.GDCheckBoxesObjects6[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects6.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(10).getAsString() == "Combo");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15408380);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects6.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").setAnimationName("finished");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects4);

for (gdjs.MenuCode.forEachIndex5 = 0;gdjs.MenuCode.forEachIndex5 < gdjs.MenuCode.GDCheckBoxesObjects4.length;++gdjs.MenuCode.forEachIndex5) {
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;


gdjs.MenuCode.forEachTemporary5 = gdjs.MenuCode.GDCheckBoxesObjects4[gdjs.MenuCode.forEachIndex5];
gdjs.MenuCode.GDCheckBoxesObjects5.push(gdjs.MenuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").getAnimationName() != "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariables().getFromIndex(0)) == "Combo" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(10).getAsString() == "NoCombo");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15410036);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
}
}

}


};gdjs.MenuCode.eventsList64 = function(runtimeScene) {

};gdjs.MenuCode.eventsList65 = function(runtimeScene) {

};gdjs.MenuCode.eventsList66 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects4);

for (gdjs.MenuCode.forEachIndex5 = 0;gdjs.MenuCode.forEachIndex5 < gdjs.MenuCode.GDCheckBoxesObjects4.length;++gdjs.MenuCode.forEachIndex5) {
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;


gdjs.MenuCode.forEachTemporary5 = gdjs.MenuCode.GDCheckBoxesObjects4[gdjs.MenuCode.forEachIndex5];
gdjs.MenuCode.GDCheckBoxesObjects5.push(gdjs.MenuCode.forEachTemporary5);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").getAnimationName() != "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects5.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects5[i].getVariables().getFromIndex(0)) == "StatBounce" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects5[k] = gdjs.MenuCode.GDCheckBoxesObjects5[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects5.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(11).getAsString() == "StatBounce");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15411620);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finished");
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects3);

for (gdjs.MenuCode.forEachIndex4 = 0;gdjs.MenuCode.forEachIndex4 < gdjs.MenuCode.GDCheckBoxesObjects3.length;++gdjs.MenuCode.forEachIndex4) {
gdjs.MenuCode.GDCheckBoxesObjects4.length = 0;


gdjs.MenuCode.forEachTemporary4 = gdjs.MenuCode.GDCheckBoxesObjects3[gdjs.MenuCode.forEachIndex4];
gdjs.MenuCode.GDCheckBoxesObjects4.push(gdjs.MenuCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects4[i].getBehavior("Animation").getAnimationName() != "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects4[k] = gdjs.MenuCode.GDCheckBoxesObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects4[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects4[i].getVariables().getFromIndex(0)) == "StatBounce" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects4[k] = gdjs.MenuCode.GDCheckBoxesObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(11).getAsString() == "NoStatBounce");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15413412);
}
}
}
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects4.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects4[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
}
}

}


};gdjs.MenuCode.eventsList67 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList57(runtimeScene);
}


{


gdjs.MenuCode.eventsList60(runtimeScene);
}


{


gdjs.MenuCode.eventsList63(runtimeScene);
}


{


gdjs.MenuCode.eventsList66(runtimeScene);
}


};gdjs.MenuCode.asyncCallback15414852 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects6);

{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects6.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects6[i].getBehavior("Animation").setAnimationName("finishedEmpty");
}
}
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(15414852, gdjs.MenuCode.asyncCallback15414852);
gdjs.MenuCode.eventsList68 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDCheckBoxesObjects4) asyncObjectsList.addObject("CheckBoxes", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.MenuCode.asyncCallback15414852(runtimeScene, asyncObjectsList)), 15414852, asyncObjectsList);
}
}

}


};gdjs.MenuCode.asyncCallback15416284 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects5);

{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects5.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects5[i].getBehavior("Animation").setAnimationName("finished");
}
}
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(15416284, gdjs.MenuCode.asyncCallback15416284);
gdjs.MenuCode.eventsList69 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDCheckBoxesObjects3) asyncObjectsList.addObject("CheckBoxes", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.MenuCode.asyncCallback15416284(runtimeScene, asyncObjectsList)), 15416284, asyncObjectsList);
}
}

}


};gdjs.MenuCode.eventsList70 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList35(runtimeScene);
}


{


gdjs.MenuCode.eventsList54(runtimeScene);
}


{


gdjs.MenuCode.eventsList67(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects3);

for (gdjs.MenuCode.forEachIndex4 = 0;gdjs.MenuCode.forEachIndex4 < gdjs.MenuCode.GDCheckBoxesObjects3.length;++gdjs.MenuCode.forEachIndex4) {
gdjs.MenuCode.GDCheckBoxesObjects4.length = 0;


gdjs.MenuCode.forEachTemporary4 = gdjs.MenuCode.GDCheckBoxesObjects3[gdjs.MenuCode.forEachIndex4];
gdjs.MenuCode.GDCheckBoxesObjects4.push(gdjs.MenuCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects4.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects4[i].getBehavior("Animation").getAnimationName() == "empty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects4[k] = gdjs.MenuCode.GDCheckBoxesObjects4[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15414668);
}
}
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.MenuCode.eventsList68(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects2);

for (gdjs.MenuCode.forEachIndex3 = 0;gdjs.MenuCode.forEachIndex3 < gdjs.MenuCode.GDCheckBoxesObjects2.length;++gdjs.MenuCode.forEachIndex3) {
gdjs.MenuCode.GDCheckBoxesObjects3.length = 0;


gdjs.MenuCode.forEachTemporary3 = gdjs.MenuCode.GDCheckBoxesObjects2[gdjs.MenuCode.forEachIndex3];
gdjs.MenuCode.GDCheckBoxesObjects3.push(gdjs.MenuCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "check" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15416100);
}
}
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.MenuCode.eventsList69(runtimeScene);} //Subevents end.
}
}

}


};gdjs.MenuCode.eventsList71 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(17).setString("NoOneFrame");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "OneFrame", "NoOneFrame");
}
}

}


};gdjs.MenuCode.eventsList72 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(16).setString("NoTwoFrames");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "TwoFrames", "NoTwoFrames");
}
}

}


};gdjs.MenuCode.eventsList73 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "Splash" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(0).getAsString() == "Splash");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finished" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(0).setString("NoSplash");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Splash", "NoSplash");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "Splash" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(0).getAsString() == "NoSplash");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finishedEmpty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("check");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(0).setString("Splash");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Splash", "Splash");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "Cover" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(1).getAsString() == "Cover");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finished" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(1).setString("NoCover");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Cover", "NoCover");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "Cover" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(1).getAsString() == "NoCover");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finishedEmpty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("check");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(1).setString("Cover");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Cover", "Cover");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "Strums" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(2).getAsString() == "Strums");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finished" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(2).setString("NoStrums");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Strums", "NoStrums");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "Strums" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(2).getAsString() == "NoStrums");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finishedEmpty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("check");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(2).setString("Strums");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Strums", "Strums");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "LowQuality" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(3).getAsString() == "LowQuality");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finished" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(3).setString("NoLowQuality");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "LowQuality", "NoLowQuality");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "LowQuality" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(3).getAsString() == "NoLowQuality");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finishedEmpty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("check");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(3).setString("LowQuality");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "LowQuality", "LowQuality");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "UltraLowQuality" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(4).getAsString() == "UltraLowQuality");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finished" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(4).setString("NoUltraLowQuality");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "UltraLowQuality", "NoUltraLowQuality");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "UltraLowQuality" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(4).getAsString() == "NoUltraLowQuality");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finishedEmpty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("check");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(4).setString("UltraLowQuality");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "UltraLowQuality", "UltraLowQuality");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "DownScroll" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(7).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finished" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(7).setBoolean(true);
}
{gdjs.evtTools.storage.writeStringInJSONFile("Basic", "Settings", runtimeScene.getGame().getVariables().getFromIndex(7).getAsString());
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "DownScroll" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(7).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finishedEmpty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("check");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(7).setBoolean(false);
}
{gdjs.evtTools.storage.writeStringInJSONFile("Basic", "Settings", runtimeScene.getGame().getVariables().getFromIndex(7).getAsString());
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "MiddleScroll" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(41).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finished" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(41).setBoolean(false);
}
{gdjs.evtTools.storage.writeStringInJSONFile("Basic", "Middle", runtimeScene.getGame().getVariables().getFromIndex(41).getAsString());
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "MiddleScroll" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(41).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finishedEmpty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("check");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(41).setBoolean(true);
}
{gdjs.evtTools.storage.writeStringInJSONFile("Basic", "Middle", runtimeScene.getGame().getVariables().getFromIndex(41).getAsString());
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "OppNotes" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(5).getAsString() == "OppNotes");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finished" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(5).setString("NoOppNotes");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "OppNotes", "NoOppNotes");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "OppNotes" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(5).getAsString() == "NoOppNotes");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finishedEmpty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("check");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(5).setString("OppNotes");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "OppNotes", "OppNotes");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "InstantRespawn" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(6).getAsString() == "InstantRespawn");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finished" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(6).setString("NoInstantRespawn");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "InstantRespawn", "NoInstantRespawn");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "InstantRespawn" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(6).getAsString() == "NoInstantRespawn");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finishedEmpty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("check");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(6).setString("InstantRespawn");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "InstantRespawn", "InstantRespawn");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "Icons" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(8).getAsString() == "NoIcons");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finished" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(8).setString("Icons");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Icons", "Icons");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "Icons" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(8).getAsString() == "Icons");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finishedEmpty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("check");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(8).setString("NoIcons");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Icons", "NoIcons");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "Hud" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(9).getAsString() == "NoHud");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finished" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(9).setString("Hud");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Hud", "Hud");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "Hud" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(9).getAsString() == "Hud");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finishedEmpty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("check");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(9).setString("NoHud");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Hud", "NoHud");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "Combo" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(10).getAsString() == "Combo");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finished" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(10).setString("NoCombo");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Combo", "NoCombo");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "Combo" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(10).getAsString() == "NoCombo");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finishedEmpty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("check");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(10).setString("Combo");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "Combo", "Combo");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "StatBounce" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(11).getAsString() == "StatBounce");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finished" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(11).setString("NoStatBounce");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "StatBounce", "NoStatBounce");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "StatBounce" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(11).getAsString() == "NoStatBounce");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finishedEmpty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("check");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(11).setString("StatBounce");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "StatBounce", "StatBounce");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "MissSound" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(12).getAsString() == "MissSound");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finished" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(12).setString("NoMissSound");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "MissSound", "NoMissSound");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "MissSound" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(12).getAsString() == "NoMissSound");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finishedEmpty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("check");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(12).setString("MissSound");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "MissSound", "MissSound");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "HitSound" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(13).getAsString() == "NoHitSound");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finishedEmpty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("check");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(13).setString("HitSound");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "HitSound", "HitSound");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "HitSound" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(13).getAsString() == "HitSound");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finished" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(13).setString("NoHitSound");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "HitSound", "NoHitSound");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "TwoFrames" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(16).getAsString() == "NoTwoFrames");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finishedEmpty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("check");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(16).setString("TwoFrames");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "TwoFrames", "TwoFrames");
}

{ //Subevents
gdjs.MenuCode.eventsList71(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "TwoFrames" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(16).getAsString() == "TwoFrames");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finished" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(16).setString("NoTwoFrames");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "TwoFrames", "NoTwoFrames");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "OneFrame" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(17).getAsString() == "NoOneFrame");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finishedEmpty" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("check");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(17).setString("OneFrame");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "OneFrame", "OneFrame");
}

{ //Subevents
gdjs.MenuCode.eventsList72(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDCheckBoxesObjects2, gdjs.MenuCode.GDCheckBoxesObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariableString(gdjs.MenuCode.GDCheckBoxesObjects3[i].getVariables().getFromIndex(0)) == "OneFrame" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(43).getChild(17).getAsString() == "OneFrame");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects3.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").getAnimationName() == "finished" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects3[k] = gdjs.MenuCode.GDCheckBoxesObjects3[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDCheckBoxesObjects3 */
{for(var i = 0, len = gdjs.MenuCode.GDCheckBoxesObjects3.length ;i < len;++i) {
    gdjs.MenuCode.GDCheckBoxesObjects3[i].getBehavior("Animation").setAnimationName("empty");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(17).setString("NoOneFrame");
}
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "OneFrame", "NoOneFrame");
}
}

}


};gdjs.MenuCode.eventsList74 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList70(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("CheckBoxes"), gdjs.MenuCode.GDCheckBoxesObjects1);

for (gdjs.MenuCode.forEachIndex2 = 0;gdjs.MenuCode.forEachIndex2 < gdjs.MenuCode.GDCheckBoxesObjects1.length;++gdjs.MenuCode.forEachIndex2) {
gdjs.MenuCode.GDCheckBoxesObjects2.length = 0;


gdjs.MenuCode.forEachTemporary2 = gdjs.MenuCode.GDCheckBoxesObjects1[gdjs.MenuCode.forEachIndex2];
gdjs.MenuCode.GDCheckBoxesObjects2.push(gdjs.MenuCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCheckBoxesObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCheckBoxesObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCheckBoxesObjects2[k] = gdjs.MenuCode.GDCheckBoxesObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDCheckBoxesObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15417468);
}
}
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.MenuCode.eventsList73(runtimeScene);} //Subevents end.
}
}

}


};gdjs.MenuCode.eventsList75 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.MenuCode.GDHitsoundTextObjects1, gdjs.MenuCode.GDHitsoundTextObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDHitsoundTextObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDHitsoundTextObjects2[i].getBehavior("Text").getText() == "camellia" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDHitsoundTextObjects2[k] = gdjs.MenuCode.GDHitsoundTextObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDHitsoundTextObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(14).setString("clap");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDHitsoundTextObjects1, gdjs.MenuCode.GDHitsoundTextObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDHitsoundTextObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDHitsoundTextObjects2[i].getBehavior("Text").getText() == "clap" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDHitsoundTextObjects2[k] = gdjs.MenuCode.GDHitsoundTextObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDHitsoundTextObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(14).setString("osu");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDHitsoundTextObjects1, gdjs.MenuCode.GDHitsoundTextObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDHitsoundTextObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDHitsoundTextObjects2[i].getBehavior("Text").getText() == "osu" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDHitsoundTextObjects2[k] = gdjs.MenuCode.GDHitsoundTextObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDHitsoundTextObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(14).setString("quaver");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDHitsoundTextObjects1, gdjs.MenuCode.GDHitsoundTextObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDHitsoundTextObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDHitsoundTextObjects2[i].getBehavior("Text").getText() == "quaver" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDHitsoundTextObjects2[k] = gdjs.MenuCode.GDHitsoundTextObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDHitsoundTextObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(14).setString("stepmania");
}
}

}


{

gdjs.copyArray(gdjs.MenuCode.GDHitsoundTextObjects1, gdjs.MenuCode.GDHitsoundTextObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDHitsoundTextObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDHitsoundTextObjects2[i].getBehavior("Text").getText() == "stepmania" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDHitsoundTextObjects2[k] = gdjs.MenuCode.GDHitsoundTextObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDHitsoundTextObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(14).setString("camellia");
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.storage.writeStringInJSONFile("OPT", "HitSoundSelect", runtimeScene.getGame().getVariables().getFromIndex(43).getChild(14).getAsString());
}
}

}


};gdjs.MenuCode.asyncCallback15520812 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(42).setBoolean(false);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("OPT", "Cover", runtimeScene.getGame().getVariables().getFromIndex(42).getAsNumber());
}
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(15520812, gdjs.MenuCode.asyncCallback15520812);
gdjs.MenuCode.eventsList76 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.MenuCode.asyncCallback15520812(runtimeScene, asyncObjectsList)), 15520812, asyncObjectsList);
}
}

}


};gdjs.MenuCode.eventsList77 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(42).getAsBoolean();
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDSquareWhiteToggleObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDSquareWhiteToggleObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSquareWhiteToggleObjects1[i].SetChecked(false, null);
}
}
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}

{ //Subevents
gdjs.MenuCode.eventsList76(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.asyncCallback15524092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(42).setBoolean(true);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("OPT", "Cover", runtimeScene.getGame().getVariables().getFromIndex(42).getAsNumber());
}
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(15524092, gdjs.MenuCode.asyncCallback15524092);
gdjs.MenuCode.eventsList78 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.MenuCode.asyncCallback15524092(runtimeScene, asyncObjectsList)), 15524092, asyncObjectsList);
}
}

}


};gdjs.MenuCode.eventsList79 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(42).getAsBoolean();
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDSquareWhiteToggleObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDSquareWhiteToggleObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSquareWhiteToggleObjects1[i].SetChecked(true, null);
}
}
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}

{ //Subevents
gdjs.MenuCode.eventsList78(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList80 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.MenuCode.GDBGObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBGObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBGObjects2[i].getY() == 1089 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBGObjects2[k] = gdjs.MenuCode.GDBGObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDBGObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "ui");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDBGObjects2 */
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.MenuCode.GDBGObjects2.length !== 0 ? gdjs.MenuCode.GDBGObjects2[0] : null), true, "", 0);
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "ui");
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setBoolean(true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.MenuCode.GDBGObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() > 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBGObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBGObjects1[i].getY() == 1973 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBGObjects1[k] = gdjs.MenuCode.GDBGObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBGObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "ui");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDBGObjects1 */
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.MenuCode.GDBGObjects1.length !== 0 ? gdjs.MenuCode.GDBGObjects1[0] : null), true, "", 0);
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}
}

}


};gdjs.MenuCode.asyncCallback15542996 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("FullscreenText"), gdjs.MenuCode.GDFullscreenTextObjects2);

{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}
{for(var i = 0, len = gdjs.MenuCode.GDFullscreenTextObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDFullscreenTextObjects2[i].getBehavior("Text").setText("FULLSCREEN");
}
}
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(15542996, gdjs.MenuCode.asyncCallback15542996);
gdjs.MenuCode.eventsList81 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDFullscreenTextObjects1) asyncObjectsList.addObject("FullscreenText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.MenuCode.asyncCallback15542996(runtimeScene, asyncObjectsList)), 15542996, asyncObjectsList);
}
}

}


};gdjs.MenuCode.asyncCallback15546036 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("FullscreenText"), gdjs.MenuCode.GDFullscreenTextObjects2);

{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}
{for(var i = 0, len = gdjs.MenuCode.GDFullscreenTextObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDFullscreenTextObjects2[i].getBehavior("Text").setText("WIDE FULLSCREEN");
}
}
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(15546036, gdjs.MenuCode.asyncCallback15546036);
gdjs.MenuCode.eventsList82 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDFullscreenTextObjects1) asyncObjectsList.addObject("FullscreenText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.MenuCode.asyncCallback15546036(runtimeScene, asyncObjectsList)), 15546036, asyncObjectsList);
}
}

}


};gdjs.MenuCode.asyncCallback15548508 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("FullscreenText"), gdjs.MenuCode.GDFullscreenTextObjects2);

{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}
{for(var i = 0, len = gdjs.MenuCode.GDFullscreenTextObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDFullscreenTextObjects2[i].getBehavior("Text").setText("NO FULLSCREEN");
}
}
gdjs.MenuCode.localVariables.length = 0;
}
gdjs.MenuCode.idToCallbackMap.set(15548508, gdjs.MenuCode.asyncCallback15548508);
gdjs.MenuCode.eventsList83 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MenuCode.localVariables);
for (const obj of gdjs.MenuCode.GDFullscreenTextObjects1) asyncObjectsList.addObject("FullscreenText", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.MenuCode.asyncCallback15548508(runtimeScene, asyncObjectsList)), 15548508, asyncObjectsList);
}
}

}


};gdjs.MenuCode.eventsList84 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.MenuCode.GDBackButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Optionsbuttons"), gdjs.MenuCode.GDOptionsbuttonsObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "freakyMenu.aac");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "logo");
}
{for(var i = 0, len = gdjs.MenuCode.GDOptionsbuttonsObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDOptionsbuttonsObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{gdjs.evtTools.storage.readNumberFromJSONFile("First", "First", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1));
}
{for(var i = 0, len = gdjs.MenuCode.GDBackButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBackButtonObjects1[i].getBehavior("Opacity").setOpacity(155);
}
}

{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() > 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("keybins_text"), gdjs.MenuCode.GDkeybins_9595textObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDkeybins_9595textObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDkeybins_9595textObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDkeybins_9595textObjects1[k] = gdjs.MenuCode.GDkeybins_9595textObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDkeybins_9595textObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() != "0");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.MenuCode.GDBlackObjects1);
gdjs.copyArray(runtimeScene.getObjects("TitleEnter"), gdjs.MenuCode.GDTitleEnterObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
{for(var i = 0, len = gdjs.MenuCode.GDTitleEnterObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDTitleEnterObjects1[i].getBehavior("Animation").setAnimationName("pressed");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmMenu.ogg", false, 100, 1);
}
{for(var i = 0, len = gdjs.MenuCode.GDBlackObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDBlackObjects1[i].getBehavior("Tween").addObjectPositionYTween2("black", 1200, "linear", 2, false);
}
}

{ //Subevents
gdjs.MenuCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("creditstext"), gdjs.MenuCode.GDcreditstextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDcreditstextObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDcreditstextObjects1[i].getBehavior("MultitouchButton").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDcreditstextObjects1[k] = gdjs.MenuCode.GDcreditstextObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDcreditstextObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Credits", false);
}
}

}


{


gdjs.MenuCode.eventsList9(runtimeScene);
}


{


gdjs.MenuCode.eventsList12(runtimeScene);
}


{


gdjs.MenuCode.eventsList13(runtimeScene);
}


{


gdjs.MenuCode.eventsList74(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("HitsoundText"), gdjs.MenuCode.GDHitsoundTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDHitsoundTextObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDHitsoundTextObjects1[i].getBehavior("MultitouchButton").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDHitsoundTextObjects1[k] = gdjs.MenuCode.GDHitsoundTextObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDHitsoundTextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15510084);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList75(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteToggle"), gdjs.MenuCode.GDSquareWhiteToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDSquareWhiteToggleObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDSquareWhiteToggleObjects1[i].HasJustBeenToggled(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDSquareWhiteToggleObjects1[k] = gdjs.MenuCode.GDSquareWhiteToggleObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDSquareWhiteToggleObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15519044);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList77(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteToggle"), gdjs.MenuCode.GDSquareWhiteToggleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDSquareWhiteToggleObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDSquareWhiteToggleObjects1[i].HasJustBeenToggled(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDSquareWhiteToggleObjects1[k] = gdjs.MenuCode.GDSquareWhiteToggleObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDSquareWhiteToggleObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15522316);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList79(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(42).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15525316);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SquareWhiteToggle"), gdjs.MenuCode.GDSquareWhiteToggleObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDSquareWhiteToggleObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSquareWhiteToggleObjects1[i].SetChecked(false, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(42).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15526828);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SquareWhiteToggle"), gdjs.MenuCode.GDSquareWhiteToggleObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDSquareWhiteToggleObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDSquareWhiteToggleObjects1[i].SetChecked(true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HitsoundText"), gdjs.MenuCode.GDHitsoundTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDHitsoundTextObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDHitsoundTextObjects1[i].getBehavior("Text").getText() != runtimeScene.getGame().getVariables().getFromIndex(43).getChild(14).getAsString() ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDHitsoundTextObjects1[k] = gdjs.MenuCode.GDHitsoundTextObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDHitsoundTextObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDHitsoundTextObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDHitsoundTextObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDHitsoundTextObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(43).getChild(14).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("No"), gdjs.MenuCode.GDNoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDNoObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDNoObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDNoObjects1[k] = gdjs.MenuCode.GDNoObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDNoObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), false);
}
{gdjs.evtTools.storage.writeStringInJSONFile("Keyboard", "Keyboard", "false");
}
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 1920, 1080);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Inicio", true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Yes"), gdjs.MenuCode.GDYesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDYesObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDYesObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDYesObjects1[k] = gdjs.MenuCode.GDYesObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDYesObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(2), true);
}
{gdjs.evtTools.storage.writeStringInJSONFile("Keyboard", "Keyboard", "true");
}
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 1920, 1080);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Inicio", true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs.MenuCode.GDSquareWhiteSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDSquareWhiteSliderObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDSquareWhiteSliderObjects1[i].Value(null) != runtimeScene.getGame().getVariables().getFromIndex(43).getChild(7).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDSquareWhiteSliderObjects1[k] = gdjs.MenuCode.GDSquareWhiteSliderObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDSquareWhiteSliderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDSquareWhiteSliderObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(7).setNumber((( gdjs.MenuCode.GDSquareWhiteSliderObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDSquareWhiteSliderObjects1[0].Value(null)));
}
{gdjs.evtTools.storage.writeNumberInJSONFile("OPT", "LifeOpacity", (( gdjs.MenuCode.GDSquareWhiteSliderObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDSquareWhiteSliderObjects1[0].Value(null)));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HItsoundVolumeSlider"), gdjs.MenuCode.GDHItsoundVolumeSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDHItsoundVolumeSliderObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDHItsoundVolumeSliderObjects1[i].Value(null) != runtimeScene.getGame().getVariables().getFromIndex(43).getChild(15).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDHItsoundVolumeSliderObjects1[k] = gdjs.MenuCode.GDHItsoundVolumeSliderObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDHItsoundVolumeSliderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDHItsoundVolumeSliderObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(43).getChild(15).setNumber((( gdjs.MenuCode.GDHItsoundVolumeSliderObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDHItsoundVolumeSliderObjects1[0].Value(null)));
}
{gdjs.evtTools.storage.writeNumberInJSONFile("OPT", "HitsoundVolume", (( gdjs.MenuCode.GDHItsoundVolumeSliderObjects1.length === 0 ) ? 0 :gdjs.MenuCode.GDHItsoundVolumeSliderObjects1[0].Value(null)));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.MenuCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBackButtonObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBackButtonObjects1[i].getBehavior("MultitouchButton").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBackButtonObjects1[k] = gdjs.MenuCode.GDBackButtonObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBackButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15537804);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList80(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FullscreenText"), gdjs.MenuCode.GDFullscreenTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDFullscreenTextObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDFullscreenTextObjects1[i].getBehavior("MultitouchButton").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDFullscreenTextObjects1[k] = gdjs.MenuCode.GDFullscreenTextObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDFullscreenTextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDFullscreenTextObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDFullscreenTextObjects1[i].getBehavior("Text").getText() == "NO FULLSCREEN" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDFullscreenTextObjects1[k] = gdjs.MenuCode.GDFullscreenTextObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDFullscreenTextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15542796);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList81(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FullscreenText"), gdjs.MenuCode.GDFullscreenTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDFullscreenTextObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDFullscreenTextObjects1[i].getBehavior("MultitouchButton").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDFullscreenTextObjects1[k] = gdjs.MenuCode.GDFullscreenTextObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDFullscreenTextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDFullscreenTextObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDFullscreenTextObjects1[i].getBehavior("Text").getText() == "FULLSCREEN" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDFullscreenTextObjects1[k] = gdjs.MenuCode.GDFullscreenTextObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDFullscreenTextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15545836);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList82(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FullscreenText"), gdjs.MenuCode.GDFullscreenTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDFullscreenTextObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDFullscreenTextObjects1[i].getBehavior("MultitouchButton").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDFullscreenTextObjects1[k] = gdjs.MenuCode.GDFullscreenTextObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDFullscreenTextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDFullscreenTextObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDFullscreenTextObjects1[i].getBehavior("Text").getText() == "WIDE FULLSCREEN" ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDFullscreenTextObjects1[k] = gdjs.MenuCode.GDFullscreenTextObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDFullscreenTextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15548836);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MenuCode.eventsList83(runtimeScene);} //End of subevents
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDlogobumpinObjects1.length = 0;
gdjs.MenuCode.GDlogobumpinObjects2.length = 0;
gdjs.MenuCode.GDlogobumpinObjects3.length = 0;
gdjs.MenuCode.GDlogobumpinObjects4.length = 0;
gdjs.MenuCode.GDlogobumpinObjects5.length = 0;
gdjs.MenuCode.GDlogobumpinObjects6.length = 0;
gdjs.MenuCode.GDBlackObjects1.length = 0;
gdjs.MenuCode.GDBlackObjects2.length = 0;
gdjs.MenuCode.GDBlackObjects3.length = 0;
gdjs.MenuCode.GDBlackObjects4.length = 0;
gdjs.MenuCode.GDBlackObjects5.length = 0;
gdjs.MenuCode.GDBlackObjects6.length = 0;
gdjs.MenuCode.GDbegfontObjects1.length = 0;
gdjs.MenuCode.GDbegfontObjects2.length = 0;
gdjs.MenuCode.GDbegfontObjects3.length = 0;
gdjs.MenuCode.GDbegfontObjects4.length = 0;
gdjs.MenuCode.GDbegfontObjects5.length = 0;
gdjs.MenuCode.GDbegfontObjects6.length = 0;
gdjs.MenuCode.GDgfDancinTitleObjects1.length = 0;
gdjs.MenuCode.GDgfDancinTitleObjects2.length = 0;
gdjs.MenuCode.GDgfDancinTitleObjects3.length = 0;
gdjs.MenuCode.GDgfDancinTitleObjects4.length = 0;
gdjs.MenuCode.GDgfDancinTitleObjects5.length = 0;
gdjs.MenuCode.GDgfDancinTitleObjects6.length = 0;
gdjs.MenuCode.GDBGObjects1.length = 0;
gdjs.MenuCode.GDBGObjects2.length = 0;
gdjs.MenuCode.GDBGObjects3.length = 0;
gdjs.MenuCode.GDBGObjects4.length = 0;
gdjs.MenuCode.GDBGObjects5.length = 0;
gdjs.MenuCode.GDBGObjects6.length = 0;
gdjs.MenuCode.GDTitleEnterObjects1.length = 0;
gdjs.MenuCode.GDTitleEnterObjects2.length = 0;
gdjs.MenuCode.GDTitleEnterObjects3.length = 0;
gdjs.MenuCode.GDTitleEnterObjects4.length = 0;
gdjs.MenuCode.GDTitleEnterObjects5.length = 0;
gdjs.MenuCode.GDTitleEnterObjects6.length = 0;
gdjs.MenuCode.GDFreeplayObjects1.length = 0;
gdjs.MenuCode.GDFreeplayObjects2.length = 0;
gdjs.MenuCode.GDFreeplayObjects3.length = 0;
gdjs.MenuCode.GDFreeplayObjects4.length = 0;
gdjs.MenuCode.GDFreeplayObjects5.length = 0;
gdjs.MenuCode.GDFreeplayObjects6.length = 0;
gdjs.MenuCode.GDNewBBTextObjects1.length = 0;
gdjs.MenuCode.GDNewBBTextObjects2.length = 0;
gdjs.MenuCode.GDNewBBTextObjects3.length = 0;
gdjs.MenuCode.GDNewBBTextObjects4.length = 0;
gdjs.MenuCode.GDNewBBTextObjects5.length = 0;
gdjs.MenuCode.GDNewBBTextObjects6.length = 0;
gdjs.MenuCode.GDNoObjects1.length = 0;
gdjs.MenuCode.GDNoObjects2.length = 0;
gdjs.MenuCode.GDNoObjects3.length = 0;
gdjs.MenuCode.GDNoObjects4.length = 0;
gdjs.MenuCode.GDNoObjects5.length = 0;
gdjs.MenuCode.GDNoObjects6.length = 0;
gdjs.MenuCode.GDYesObjects1.length = 0;
gdjs.MenuCode.GDYesObjects2.length = 0;
gdjs.MenuCode.GDYesObjects3.length = 0;
gdjs.MenuCode.GDYesObjects4.length = 0;
gdjs.MenuCode.GDYesObjects5.length = 0;
gdjs.MenuCode.GDYesObjects6.length = 0;
gdjs.MenuCode.GDOptionsObjects1.length = 0;
gdjs.MenuCode.GDOptionsObjects2.length = 0;
gdjs.MenuCode.GDOptionsObjects3.length = 0;
gdjs.MenuCode.GDOptionsObjects4.length = 0;
gdjs.MenuCode.GDOptionsObjects5.length = 0;
gdjs.MenuCode.GDOptionsObjects6.length = 0;
gdjs.MenuCode.GDOptionsTextObjects1.length = 0;
gdjs.MenuCode.GDOptionsTextObjects2.length = 0;
gdjs.MenuCode.GDOptionsTextObjects3.length = 0;
gdjs.MenuCode.GDOptionsTextObjects4.length = 0;
gdjs.MenuCode.GDOptionsTextObjects5.length = 0;
gdjs.MenuCode.GDOptionsTextObjects6.length = 0;
gdjs.MenuCode.GDOptionsbuttonsObjects1.length = 0;
gdjs.MenuCode.GDOptionsbuttonsObjects2.length = 0;
gdjs.MenuCode.GDOptionsbuttonsObjects3.length = 0;
gdjs.MenuCode.GDOptionsbuttonsObjects4.length = 0;
gdjs.MenuCode.GDOptionsbuttonsObjects5.length = 0;
gdjs.MenuCode.GDOptionsbuttonsObjects6.length = 0;
gdjs.MenuCode.GDOptPotionsTextObjects1.length = 0;
gdjs.MenuCode.GDOptPotionsTextObjects2.length = 0;
gdjs.MenuCode.GDOptPotionsTextObjects3.length = 0;
gdjs.MenuCode.GDOptPotionsTextObjects4.length = 0;
gdjs.MenuCode.GDOptPotionsTextObjects5.length = 0;
gdjs.MenuCode.GDOptPotionsTextObjects6.length = 0;
gdjs.MenuCode.GDCheckBoxesObjects1.length = 0;
gdjs.MenuCode.GDCheckBoxesObjects2.length = 0;
gdjs.MenuCode.GDCheckBoxesObjects3.length = 0;
gdjs.MenuCode.GDCheckBoxesObjects4.length = 0;
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;
gdjs.MenuCode.GDCheckBoxesObjects6.length = 0;
gdjs.MenuCode.GDBackButtonObjects1.length = 0;
gdjs.MenuCode.GDBackButtonObjects2.length = 0;
gdjs.MenuCode.GDBackButtonObjects3.length = 0;
gdjs.MenuCode.GDBackButtonObjects4.length = 0;
gdjs.MenuCode.GDBackButtonObjects5.length = 0;
gdjs.MenuCode.GDBackButtonObjects6.length = 0;
gdjs.MenuCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.MenuCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.MenuCode.GDSquareWhiteSliderObjects3.length = 0;
gdjs.MenuCode.GDSquareWhiteSliderObjects4.length = 0;
gdjs.MenuCode.GDSquareWhiteSliderObjects5.length = 0;
gdjs.MenuCode.GDSquareWhiteSliderObjects6.length = 0;
gdjs.MenuCode.GDFullscreenTextObjects1.length = 0;
gdjs.MenuCode.GDFullscreenTextObjects2.length = 0;
gdjs.MenuCode.GDFullscreenTextObjects3.length = 0;
gdjs.MenuCode.GDFullscreenTextObjects4.length = 0;
gdjs.MenuCode.GDFullscreenTextObjects5.length = 0;
gdjs.MenuCode.GDFullscreenTextObjects6.length = 0;
gdjs.MenuCode.GDcreditstextObjects1.length = 0;
gdjs.MenuCode.GDcreditstextObjects2.length = 0;
gdjs.MenuCode.GDcreditstextObjects3.length = 0;
gdjs.MenuCode.GDcreditstextObjects4.length = 0;
gdjs.MenuCode.GDcreditstextObjects5.length = 0;
gdjs.MenuCode.GDcreditstextObjects6.length = 0;
gdjs.MenuCode.GDHItsoundVolumeSliderObjects1.length = 0;
gdjs.MenuCode.GDHItsoundVolumeSliderObjects2.length = 0;
gdjs.MenuCode.GDHItsoundVolumeSliderObjects3.length = 0;
gdjs.MenuCode.GDHItsoundVolumeSliderObjects4.length = 0;
gdjs.MenuCode.GDHItsoundVolumeSliderObjects5.length = 0;
gdjs.MenuCode.GDHItsoundVolumeSliderObjects6.length = 0;
gdjs.MenuCode.GDHitsoundTextObjects1.length = 0;
gdjs.MenuCode.GDHitsoundTextObjects2.length = 0;
gdjs.MenuCode.GDHitsoundTextObjects3.length = 0;
gdjs.MenuCode.GDHitsoundTextObjects4.length = 0;
gdjs.MenuCode.GDHitsoundTextObjects5.length = 0;
gdjs.MenuCode.GDHitsoundTextObjects6.length = 0;
gdjs.MenuCode.GDNewTextObjects1.length = 0;
gdjs.MenuCode.GDNewTextObjects2.length = 0;
gdjs.MenuCode.GDNewTextObjects3.length = 0;
gdjs.MenuCode.GDNewTextObjects4.length = 0;
gdjs.MenuCode.GDNewTextObjects5.length = 0;
gdjs.MenuCode.GDNewTextObjects6.length = 0;
gdjs.MenuCode.GDOptPotionsText2Objects1.length = 0;
gdjs.MenuCode.GDOptPotionsText2Objects2.length = 0;
gdjs.MenuCode.GDOptPotionsText2Objects3.length = 0;
gdjs.MenuCode.GDOptPotionsText2Objects4.length = 0;
gdjs.MenuCode.GDOptPotionsText2Objects5.length = 0;
gdjs.MenuCode.GDOptPotionsText2Objects6.length = 0;
gdjs.MenuCode.GDkeybins_9595textObjects1.length = 0;
gdjs.MenuCode.GDkeybins_9595textObjects2.length = 0;
gdjs.MenuCode.GDkeybins_9595textObjects3.length = 0;
gdjs.MenuCode.GDkeybins_9595textObjects4.length = 0;
gdjs.MenuCode.GDkeybins_9595textObjects5.length = 0;
gdjs.MenuCode.GDkeybins_9595textObjects6.length = 0;
gdjs.MenuCode.GDSquareWhiteToggleObjects1.length = 0;
gdjs.MenuCode.GDSquareWhiteToggleObjects2.length = 0;
gdjs.MenuCode.GDSquareWhiteToggleObjects3.length = 0;
gdjs.MenuCode.GDSquareWhiteToggleObjects4.length = 0;
gdjs.MenuCode.GDSquareWhiteToggleObjects5.length = 0;
gdjs.MenuCode.GDSquareWhiteToggleObjects6.length = 0;
gdjs.MenuCode.GDbegfont2Objects1.length = 0;
gdjs.MenuCode.GDbegfont2Objects2.length = 0;
gdjs.MenuCode.GDbegfont2Objects3.length = 0;
gdjs.MenuCode.GDbegfont2Objects4.length = 0;
gdjs.MenuCode.GDbegfont2Objects5.length = 0;
gdjs.MenuCode.GDbegfont2Objects6.length = 0;
gdjs.MenuCode.GDStatisticsObjects1.length = 0;
gdjs.MenuCode.GDStatisticsObjects2.length = 0;
gdjs.MenuCode.GDStatisticsObjects3.length = 0;
gdjs.MenuCode.GDStatisticsObjects4.length = 0;
gdjs.MenuCode.GDStatisticsObjects5.length = 0;
gdjs.MenuCode.GDStatisticsObjects6.length = 0;
gdjs.MenuCode.GDComboNumbersObjects1.length = 0;
gdjs.MenuCode.GDComboNumbersObjects2.length = 0;
gdjs.MenuCode.GDComboNumbersObjects3.length = 0;
gdjs.MenuCode.GDComboNumbersObjects4.length = 0;
gdjs.MenuCode.GDComboNumbersObjects5.length = 0;
gdjs.MenuCode.GDComboNumbersObjects6.length = 0;
gdjs.MenuCode.GDNotesSplashObjects1.length = 0;
gdjs.MenuCode.GDNotesSplashObjects2.length = 0;
gdjs.MenuCode.GDNotesSplashObjects3.length = 0;
gdjs.MenuCode.GDNotesSplashObjects4.length = 0;
gdjs.MenuCode.GDNotesSplashObjects5.length = 0;
gdjs.MenuCode.GDNotesSplashObjects6.length = 0;
gdjs.MenuCode.GDfpsObjects1.length = 0;
gdjs.MenuCode.GDfpsObjects2.length = 0;
gdjs.MenuCode.GDfpsObjects3.length = 0;
gdjs.MenuCode.GDfpsObjects4.length = 0;
gdjs.MenuCode.GDfpsObjects5.length = 0;
gdjs.MenuCode.GDfpsObjects6.length = 0;
gdjs.MenuCode.GDEngineTextObjects1.length = 0;
gdjs.MenuCode.GDEngineTextObjects2.length = 0;
gdjs.MenuCode.GDEngineTextObjects3.length = 0;
gdjs.MenuCode.GDEngineTextObjects4.length = 0;
gdjs.MenuCode.GDEngineTextObjects5.length = 0;
gdjs.MenuCode.GDEngineTextObjects6.length = 0;
gdjs.MenuCode.GDLongUpscrollBFObjects1.length = 0;
gdjs.MenuCode.GDLongUpscrollBFObjects2.length = 0;
gdjs.MenuCode.GDLongUpscrollBFObjects3.length = 0;
gdjs.MenuCode.GDLongUpscrollBFObjects4.length = 0;
gdjs.MenuCode.GDLongUpscrollBFObjects5.length = 0;
gdjs.MenuCode.GDLongUpscrollBFObjects6.length = 0;
gdjs.MenuCode.GDLongUpscrollOPPObjects1.length = 0;
gdjs.MenuCode.GDLongUpscrollOPPObjects2.length = 0;
gdjs.MenuCode.GDLongUpscrollOPPObjects3.length = 0;
gdjs.MenuCode.GDLongUpscrollOPPObjects4.length = 0;
gdjs.MenuCode.GDLongUpscrollOPPObjects5.length = 0;
gdjs.MenuCode.GDLongUpscrollOPPObjects6.length = 0;
gdjs.MenuCode.GDHitboxLeftObjects1.length = 0;
gdjs.MenuCode.GDHitboxLeftObjects2.length = 0;
gdjs.MenuCode.GDHitboxLeftObjects3.length = 0;
gdjs.MenuCode.GDHitboxLeftObjects4.length = 0;
gdjs.MenuCode.GDHitboxLeftObjects5.length = 0;
gdjs.MenuCode.GDHitboxLeftObjects6.length = 0;
gdjs.MenuCode.GDHitboxDownObjects1.length = 0;
gdjs.MenuCode.GDHitboxDownObjects2.length = 0;
gdjs.MenuCode.GDHitboxDownObjects3.length = 0;
gdjs.MenuCode.GDHitboxDownObjects4.length = 0;
gdjs.MenuCode.GDHitboxDownObjects5.length = 0;
gdjs.MenuCode.GDHitboxDownObjects6.length = 0;
gdjs.MenuCode.GDHitboxUpObjects1.length = 0;
gdjs.MenuCode.GDHitboxUpObjects2.length = 0;
gdjs.MenuCode.GDHitboxUpObjects3.length = 0;
gdjs.MenuCode.GDHitboxUpObjects4.length = 0;
gdjs.MenuCode.GDHitboxUpObjects5.length = 0;
gdjs.MenuCode.GDHitboxUpObjects6.length = 0;
gdjs.MenuCode.GDhitrightObjects1.length = 0;
gdjs.MenuCode.GDhitrightObjects2.length = 0;
gdjs.MenuCode.GDhitrightObjects3.length = 0;
gdjs.MenuCode.GDhitrightObjects4.length = 0;
gdjs.MenuCode.GDhitrightObjects5.length = 0;
gdjs.MenuCode.GDhitrightObjects6.length = 0;
gdjs.MenuCode.GDBFIconObjects1.length = 0;
gdjs.MenuCode.GDBFIconObjects2.length = 0;
gdjs.MenuCode.GDBFIconObjects3.length = 0;
gdjs.MenuCode.GDBFIconObjects4.length = 0;
gdjs.MenuCode.GDBFIconObjects5.length = 0;
gdjs.MenuCode.GDBFIconObjects6.length = 0;
gdjs.MenuCode.GDPauseButtonObjects1.length = 0;
gdjs.MenuCode.GDPauseButtonObjects2.length = 0;
gdjs.MenuCode.GDPauseButtonObjects3.length = 0;
gdjs.MenuCode.GDPauseButtonObjects4.length = 0;
gdjs.MenuCode.GDPauseButtonObjects5.length = 0;
gdjs.MenuCode.GDPauseButtonObjects6.length = 0;
gdjs.MenuCode.GDPauseButton2Objects1.length = 0;
gdjs.MenuCode.GDPauseButton2Objects2.length = 0;
gdjs.MenuCode.GDPauseButton2Objects3.length = 0;
gdjs.MenuCode.GDPauseButton2Objects4.length = 0;
gdjs.MenuCode.GDPauseButton2Objects5.length = 0;
gdjs.MenuCode.GDPauseButton2Objects6.length = 0;
gdjs.MenuCode.GDBlackScreenObjects1.length = 0;
gdjs.MenuCode.GDBlackScreenObjects2.length = 0;
gdjs.MenuCode.GDBlackScreenObjects3.length = 0;
gdjs.MenuCode.GDBlackScreenObjects4.length = 0;
gdjs.MenuCode.GDBlackScreenObjects5.length = 0;
gdjs.MenuCode.GDBlackScreenObjects6.length = 0;
gdjs.MenuCode.GDPauseTextObjects1.length = 0;
gdjs.MenuCode.GDPauseTextObjects2.length = 0;
gdjs.MenuCode.GDPauseTextObjects3.length = 0;
gdjs.MenuCode.GDPauseTextObjects4.length = 0;
gdjs.MenuCode.GDPauseTextObjects5.length = 0;
gdjs.MenuCode.GDPauseTextObjects6.length = 0;
gdjs.MenuCode.GDExitTextObjects1.length = 0;
gdjs.MenuCode.GDExitTextObjects2.length = 0;
gdjs.MenuCode.GDExitTextObjects3.length = 0;
gdjs.MenuCode.GDExitTextObjects4.length = 0;
gdjs.MenuCode.GDExitTextObjects5.length = 0;
gdjs.MenuCode.GDExitTextObjects6.length = 0;
gdjs.MenuCode.GDRestartTextObjects1.length = 0;
gdjs.MenuCode.GDRestartTextObjects2.length = 0;
gdjs.MenuCode.GDRestartTextObjects3.length = 0;
gdjs.MenuCode.GDRestartTextObjects4.length = 0;
gdjs.MenuCode.GDRestartTextObjects5.length = 0;
gdjs.MenuCode.GDRestartTextObjects6.length = 0;
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects1.length = 0;
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects2.length = 0;
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects3.length = 0;
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects4.length = 0;
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects5.length = 0;
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects6.length = 0;
gdjs.MenuCode.GDBfUpNoteObjects1.length = 0;
gdjs.MenuCode.GDBfUpNoteObjects2.length = 0;
gdjs.MenuCode.GDBfUpNoteObjects3.length = 0;
gdjs.MenuCode.GDBfUpNoteObjects4.length = 0;
gdjs.MenuCode.GDBfUpNoteObjects5.length = 0;
gdjs.MenuCode.GDBfUpNoteObjects6.length = 0;
gdjs.MenuCode.GDBfDownNoteObjects1.length = 0;
gdjs.MenuCode.GDBfDownNoteObjects2.length = 0;
gdjs.MenuCode.GDBfDownNoteObjects3.length = 0;
gdjs.MenuCode.GDBfDownNoteObjects4.length = 0;
gdjs.MenuCode.GDBfDownNoteObjects5.length = 0;
gdjs.MenuCode.GDBfDownNoteObjects6.length = 0;
gdjs.MenuCode.GDBfLeftNoteObjects1.length = 0;
gdjs.MenuCode.GDBfLeftNoteObjects2.length = 0;
gdjs.MenuCode.GDBfLeftNoteObjects3.length = 0;
gdjs.MenuCode.GDBfLeftNoteObjects4.length = 0;
gdjs.MenuCode.GDBfLeftNoteObjects5.length = 0;
gdjs.MenuCode.GDBfLeftNoteObjects6.length = 0;
gdjs.MenuCode.GDBfLeftNote4Objects1.length = 0;
gdjs.MenuCode.GDBfLeftNote4Objects2.length = 0;
gdjs.MenuCode.GDBfLeftNote4Objects3.length = 0;
gdjs.MenuCode.GDBfLeftNote4Objects4.length = 0;
gdjs.MenuCode.GDBfLeftNote4Objects5.length = 0;
gdjs.MenuCode.GDBfLeftNote4Objects6.length = 0;
gdjs.MenuCode.GDBfDownNote5Objects1.length = 0;
gdjs.MenuCode.GDBfDownNote5Objects2.length = 0;
gdjs.MenuCode.GDBfDownNote5Objects3.length = 0;
gdjs.MenuCode.GDBfDownNote5Objects4.length = 0;
gdjs.MenuCode.GDBfDownNote5Objects5.length = 0;
gdjs.MenuCode.GDBfDownNote5Objects6.length = 0;
gdjs.MenuCode.GDBfUpNote6Objects1.length = 0;
gdjs.MenuCode.GDBfUpNote6Objects2.length = 0;
gdjs.MenuCode.GDBfUpNote6Objects3.length = 0;
gdjs.MenuCode.GDBfUpNote6Objects4.length = 0;
gdjs.MenuCode.GDBfUpNote6Objects5.length = 0;
gdjs.MenuCode.GDBfUpNote6Objects6.length = 0;
gdjs.MenuCode.GDBfRightNoteObjects1.length = 0;
gdjs.MenuCode.GDBfRightNoteObjects2.length = 0;
gdjs.MenuCode.GDBfRightNoteObjects3.length = 0;
gdjs.MenuCode.GDBfRightNoteObjects4.length = 0;
gdjs.MenuCode.GDBfRightNoteObjects5.length = 0;
gdjs.MenuCode.GDBfRightNoteObjects6.length = 0;
gdjs.MenuCode.GDBfRightNote7Objects1.length = 0;
gdjs.MenuCode.GDBfRightNote7Objects2.length = 0;
gdjs.MenuCode.GDBfRightNote7Objects3.length = 0;
gdjs.MenuCode.GDBfRightNote7Objects4.length = 0;
gdjs.MenuCode.GDBfRightNote7Objects5.length = 0;
gdjs.MenuCode.GDBfRightNote7Objects6.length = 0;
gdjs.MenuCode.GDOppIconObjects1.length = 0;
gdjs.MenuCode.GDOppIconObjects2.length = 0;
gdjs.MenuCode.GDOppIconObjects3.length = 0;
gdjs.MenuCode.GDOppIconObjects4.length = 0;
gdjs.MenuCode.GDOppIconObjects5.length = 0;
gdjs.MenuCode.GDOppIconObjects6.length = 0;
gdjs.MenuCode.GDtimerBarObjects1.length = 0;
gdjs.MenuCode.GDtimerBarObjects2.length = 0;
gdjs.MenuCode.GDtimerBarObjects3.length = 0;
gdjs.MenuCode.GDtimerBarObjects4.length = 0;
gdjs.MenuCode.GDtimerBarObjects5.length = 0;
gdjs.MenuCode.GDtimerBarObjects6.length = 0;
gdjs.MenuCode.GDtimeObjects1.length = 0;
gdjs.MenuCode.GDtimeObjects2.length = 0;
gdjs.MenuCode.GDtimeObjects3.length = 0;
gdjs.MenuCode.GDtimeObjects4.length = 0;
gdjs.MenuCode.GDtimeObjects5.length = 0;
gdjs.MenuCode.GDtimeObjects6.length = 0;
gdjs.MenuCode.GDtimerBar2Objects1.length = 0;
gdjs.MenuCode.GDtimerBar2Objects2.length = 0;
gdjs.MenuCode.GDtimerBar2Objects3.length = 0;
gdjs.MenuCode.GDtimerBar2Objects4.length = 0;
gdjs.MenuCode.GDtimerBar2Objects5.length = 0;
gdjs.MenuCode.GDtimerBar2Objects6.length = 0;
gdjs.MenuCode.GDRatinsPopUpObjects1.length = 0;
gdjs.MenuCode.GDRatinsPopUpObjects2.length = 0;
gdjs.MenuCode.GDRatinsPopUpObjects3.length = 0;
gdjs.MenuCode.GDRatinsPopUpObjects4.length = 0;
gdjs.MenuCode.GDRatinsPopUpObjects5.length = 0;
gdjs.MenuCode.GDRatinsPopUpObjects6.length = 0;

gdjs.MenuCode.eventsList84(runtimeScene);
gdjs.MenuCode.GDlogobumpinObjects1.length = 0;
gdjs.MenuCode.GDlogobumpinObjects2.length = 0;
gdjs.MenuCode.GDlogobumpinObjects3.length = 0;
gdjs.MenuCode.GDlogobumpinObjects4.length = 0;
gdjs.MenuCode.GDlogobumpinObjects5.length = 0;
gdjs.MenuCode.GDlogobumpinObjects6.length = 0;
gdjs.MenuCode.GDBlackObjects1.length = 0;
gdjs.MenuCode.GDBlackObjects2.length = 0;
gdjs.MenuCode.GDBlackObjects3.length = 0;
gdjs.MenuCode.GDBlackObjects4.length = 0;
gdjs.MenuCode.GDBlackObjects5.length = 0;
gdjs.MenuCode.GDBlackObjects6.length = 0;
gdjs.MenuCode.GDbegfontObjects1.length = 0;
gdjs.MenuCode.GDbegfontObjects2.length = 0;
gdjs.MenuCode.GDbegfontObjects3.length = 0;
gdjs.MenuCode.GDbegfontObjects4.length = 0;
gdjs.MenuCode.GDbegfontObjects5.length = 0;
gdjs.MenuCode.GDbegfontObjects6.length = 0;
gdjs.MenuCode.GDgfDancinTitleObjects1.length = 0;
gdjs.MenuCode.GDgfDancinTitleObjects2.length = 0;
gdjs.MenuCode.GDgfDancinTitleObjects3.length = 0;
gdjs.MenuCode.GDgfDancinTitleObjects4.length = 0;
gdjs.MenuCode.GDgfDancinTitleObjects5.length = 0;
gdjs.MenuCode.GDgfDancinTitleObjects6.length = 0;
gdjs.MenuCode.GDBGObjects1.length = 0;
gdjs.MenuCode.GDBGObjects2.length = 0;
gdjs.MenuCode.GDBGObjects3.length = 0;
gdjs.MenuCode.GDBGObjects4.length = 0;
gdjs.MenuCode.GDBGObjects5.length = 0;
gdjs.MenuCode.GDBGObjects6.length = 0;
gdjs.MenuCode.GDTitleEnterObjects1.length = 0;
gdjs.MenuCode.GDTitleEnterObjects2.length = 0;
gdjs.MenuCode.GDTitleEnterObjects3.length = 0;
gdjs.MenuCode.GDTitleEnterObjects4.length = 0;
gdjs.MenuCode.GDTitleEnterObjects5.length = 0;
gdjs.MenuCode.GDTitleEnterObjects6.length = 0;
gdjs.MenuCode.GDFreeplayObjects1.length = 0;
gdjs.MenuCode.GDFreeplayObjects2.length = 0;
gdjs.MenuCode.GDFreeplayObjects3.length = 0;
gdjs.MenuCode.GDFreeplayObjects4.length = 0;
gdjs.MenuCode.GDFreeplayObjects5.length = 0;
gdjs.MenuCode.GDFreeplayObjects6.length = 0;
gdjs.MenuCode.GDNewBBTextObjects1.length = 0;
gdjs.MenuCode.GDNewBBTextObjects2.length = 0;
gdjs.MenuCode.GDNewBBTextObjects3.length = 0;
gdjs.MenuCode.GDNewBBTextObjects4.length = 0;
gdjs.MenuCode.GDNewBBTextObjects5.length = 0;
gdjs.MenuCode.GDNewBBTextObjects6.length = 0;
gdjs.MenuCode.GDNoObjects1.length = 0;
gdjs.MenuCode.GDNoObjects2.length = 0;
gdjs.MenuCode.GDNoObjects3.length = 0;
gdjs.MenuCode.GDNoObjects4.length = 0;
gdjs.MenuCode.GDNoObjects5.length = 0;
gdjs.MenuCode.GDNoObjects6.length = 0;
gdjs.MenuCode.GDYesObjects1.length = 0;
gdjs.MenuCode.GDYesObjects2.length = 0;
gdjs.MenuCode.GDYesObjects3.length = 0;
gdjs.MenuCode.GDYesObjects4.length = 0;
gdjs.MenuCode.GDYesObjects5.length = 0;
gdjs.MenuCode.GDYesObjects6.length = 0;
gdjs.MenuCode.GDOptionsObjects1.length = 0;
gdjs.MenuCode.GDOptionsObjects2.length = 0;
gdjs.MenuCode.GDOptionsObjects3.length = 0;
gdjs.MenuCode.GDOptionsObjects4.length = 0;
gdjs.MenuCode.GDOptionsObjects5.length = 0;
gdjs.MenuCode.GDOptionsObjects6.length = 0;
gdjs.MenuCode.GDOptionsTextObjects1.length = 0;
gdjs.MenuCode.GDOptionsTextObjects2.length = 0;
gdjs.MenuCode.GDOptionsTextObjects3.length = 0;
gdjs.MenuCode.GDOptionsTextObjects4.length = 0;
gdjs.MenuCode.GDOptionsTextObjects5.length = 0;
gdjs.MenuCode.GDOptionsTextObjects6.length = 0;
gdjs.MenuCode.GDOptionsbuttonsObjects1.length = 0;
gdjs.MenuCode.GDOptionsbuttonsObjects2.length = 0;
gdjs.MenuCode.GDOptionsbuttonsObjects3.length = 0;
gdjs.MenuCode.GDOptionsbuttonsObjects4.length = 0;
gdjs.MenuCode.GDOptionsbuttonsObjects5.length = 0;
gdjs.MenuCode.GDOptionsbuttonsObjects6.length = 0;
gdjs.MenuCode.GDOptPotionsTextObjects1.length = 0;
gdjs.MenuCode.GDOptPotionsTextObjects2.length = 0;
gdjs.MenuCode.GDOptPotionsTextObjects3.length = 0;
gdjs.MenuCode.GDOptPotionsTextObjects4.length = 0;
gdjs.MenuCode.GDOptPotionsTextObjects5.length = 0;
gdjs.MenuCode.GDOptPotionsTextObjects6.length = 0;
gdjs.MenuCode.GDCheckBoxesObjects1.length = 0;
gdjs.MenuCode.GDCheckBoxesObjects2.length = 0;
gdjs.MenuCode.GDCheckBoxesObjects3.length = 0;
gdjs.MenuCode.GDCheckBoxesObjects4.length = 0;
gdjs.MenuCode.GDCheckBoxesObjects5.length = 0;
gdjs.MenuCode.GDCheckBoxesObjects6.length = 0;
gdjs.MenuCode.GDBackButtonObjects1.length = 0;
gdjs.MenuCode.GDBackButtonObjects2.length = 0;
gdjs.MenuCode.GDBackButtonObjects3.length = 0;
gdjs.MenuCode.GDBackButtonObjects4.length = 0;
gdjs.MenuCode.GDBackButtonObjects5.length = 0;
gdjs.MenuCode.GDBackButtonObjects6.length = 0;
gdjs.MenuCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.MenuCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.MenuCode.GDSquareWhiteSliderObjects3.length = 0;
gdjs.MenuCode.GDSquareWhiteSliderObjects4.length = 0;
gdjs.MenuCode.GDSquareWhiteSliderObjects5.length = 0;
gdjs.MenuCode.GDSquareWhiteSliderObjects6.length = 0;
gdjs.MenuCode.GDFullscreenTextObjects1.length = 0;
gdjs.MenuCode.GDFullscreenTextObjects2.length = 0;
gdjs.MenuCode.GDFullscreenTextObjects3.length = 0;
gdjs.MenuCode.GDFullscreenTextObjects4.length = 0;
gdjs.MenuCode.GDFullscreenTextObjects5.length = 0;
gdjs.MenuCode.GDFullscreenTextObjects6.length = 0;
gdjs.MenuCode.GDcreditstextObjects1.length = 0;
gdjs.MenuCode.GDcreditstextObjects2.length = 0;
gdjs.MenuCode.GDcreditstextObjects3.length = 0;
gdjs.MenuCode.GDcreditstextObjects4.length = 0;
gdjs.MenuCode.GDcreditstextObjects5.length = 0;
gdjs.MenuCode.GDcreditstextObjects6.length = 0;
gdjs.MenuCode.GDHItsoundVolumeSliderObjects1.length = 0;
gdjs.MenuCode.GDHItsoundVolumeSliderObjects2.length = 0;
gdjs.MenuCode.GDHItsoundVolumeSliderObjects3.length = 0;
gdjs.MenuCode.GDHItsoundVolumeSliderObjects4.length = 0;
gdjs.MenuCode.GDHItsoundVolumeSliderObjects5.length = 0;
gdjs.MenuCode.GDHItsoundVolumeSliderObjects6.length = 0;
gdjs.MenuCode.GDHitsoundTextObjects1.length = 0;
gdjs.MenuCode.GDHitsoundTextObjects2.length = 0;
gdjs.MenuCode.GDHitsoundTextObjects3.length = 0;
gdjs.MenuCode.GDHitsoundTextObjects4.length = 0;
gdjs.MenuCode.GDHitsoundTextObjects5.length = 0;
gdjs.MenuCode.GDHitsoundTextObjects6.length = 0;
gdjs.MenuCode.GDNewTextObjects1.length = 0;
gdjs.MenuCode.GDNewTextObjects2.length = 0;
gdjs.MenuCode.GDNewTextObjects3.length = 0;
gdjs.MenuCode.GDNewTextObjects4.length = 0;
gdjs.MenuCode.GDNewTextObjects5.length = 0;
gdjs.MenuCode.GDNewTextObjects6.length = 0;
gdjs.MenuCode.GDOptPotionsText2Objects1.length = 0;
gdjs.MenuCode.GDOptPotionsText2Objects2.length = 0;
gdjs.MenuCode.GDOptPotionsText2Objects3.length = 0;
gdjs.MenuCode.GDOptPotionsText2Objects4.length = 0;
gdjs.MenuCode.GDOptPotionsText2Objects5.length = 0;
gdjs.MenuCode.GDOptPotionsText2Objects6.length = 0;
gdjs.MenuCode.GDkeybins_9595textObjects1.length = 0;
gdjs.MenuCode.GDkeybins_9595textObjects2.length = 0;
gdjs.MenuCode.GDkeybins_9595textObjects3.length = 0;
gdjs.MenuCode.GDkeybins_9595textObjects4.length = 0;
gdjs.MenuCode.GDkeybins_9595textObjects5.length = 0;
gdjs.MenuCode.GDkeybins_9595textObjects6.length = 0;
gdjs.MenuCode.GDSquareWhiteToggleObjects1.length = 0;
gdjs.MenuCode.GDSquareWhiteToggleObjects2.length = 0;
gdjs.MenuCode.GDSquareWhiteToggleObjects3.length = 0;
gdjs.MenuCode.GDSquareWhiteToggleObjects4.length = 0;
gdjs.MenuCode.GDSquareWhiteToggleObjects5.length = 0;
gdjs.MenuCode.GDSquareWhiteToggleObjects6.length = 0;
gdjs.MenuCode.GDbegfont2Objects1.length = 0;
gdjs.MenuCode.GDbegfont2Objects2.length = 0;
gdjs.MenuCode.GDbegfont2Objects3.length = 0;
gdjs.MenuCode.GDbegfont2Objects4.length = 0;
gdjs.MenuCode.GDbegfont2Objects5.length = 0;
gdjs.MenuCode.GDbegfont2Objects6.length = 0;
gdjs.MenuCode.GDStatisticsObjects1.length = 0;
gdjs.MenuCode.GDStatisticsObjects2.length = 0;
gdjs.MenuCode.GDStatisticsObjects3.length = 0;
gdjs.MenuCode.GDStatisticsObjects4.length = 0;
gdjs.MenuCode.GDStatisticsObjects5.length = 0;
gdjs.MenuCode.GDStatisticsObjects6.length = 0;
gdjs.MenuCode.GDComboNumbersObjects1.length = 0;
gdjs.MenuCode.GDComboNumbersObjects2.length = 0;
gdjs.MenuCode.GDComboNumbersObjects3.length = 0;
gdjs.MenuCode.GDComboNumbersObjects4.length = 0;
gdjs.MenuCode.GDComboNumbersObjects5.length = 0;
gdjs.MenuCode.GDComboNumbersObjects6.length = 0;
gdjs.MenuCode.GDNotesSplashObjects1.length = 0;
gdjs.MenuCode.GDNotesSplashObjects2.length = 0;
gdjs.MenuCode.GDNotesSplashObjects3.length = 0;
gdjs.MenuCode.GDNotesSplashObjects4.length = 0;
gdjs.MenuCode.GDNotesSplashObjects5.length = 0;
gdjs.MenuCode.GDNotesSplashObjects6.length = 0;
gdjs.MenuCode.GDfpsObjects1.length = 0;
gdjs.MenuCode.GDfpsObjects2.length = 0;
gdjs.MenuCode.GDfpsObjects3.length = 0;
gdjs.MenuCode.GDfpsObjects4.length = 0;
gdjs.MenuCode.GDfpsObjects5.length = 0;
gdjs.MenuCode.GDfpsObjects6.length = 0;
gdjs.MenuCode.GDEngineTextObjects1.length = 0;
gdjs.MenuCode.GDEngineTextObjects2.length = 0;
gdjs.MenuCode.GDEngineTextObjects3.length = 0;
gdjs.MenuCode.GDEngineTextObjects4.length = 0;
gdjs.MenuCode.GDEngineTextObjects5.length = 0;
gdjs.MenuCode.GDEngineTextObjects6.length = 0;
gdjs.MenuCode.GDLongUpscrollBFObjects1.length = 0;
gdjs.MenuCode.GDLongUpscrollBFObjects2.length = 0;
gdjs.MenuCode.GDLongUpscrollBFObjects3.length = 0;
gdjs.MenuCode.GDLongUpscrollBFObjects4.length = 0;
gdjs.MenuCode.GDLongUpscrollBFObjects5.length = 0;
gdjs.MenuCode.GDLongUpscrollBFObjects6.length = 0;
gdjs.MenuCode.GDLongUpscrollOPPObjects1.length = 0;
gdjs.MenuCode.GDLongUpscrollOPPObjects2.length = 0;
gdjs.MenuCode.GDLongUpscrollOPPObjects3.length = 0;
gdjs.MenuCode.GDLongUpscrollOPPObjects4.length = 0;
gdjs.MenuCode.GDLongUpscrollOPPObjects5.length = 0;
gdjs.MenuCode.GDLongUpscrollOPPObjects6.length = 0;
gdjs.MenuCode.GDHitboxLeftObjects1.length = 0;
gdjs.MenuCode.GDHitboxLeftObjects2.length = 0;
gdjs.MenuCode.GDHitboxLeftObjects3.length = 0;
gdjs.MenuCode.GDHitboxLeftObjects4.length = 0;
gdjs.MenuCode.GDHitboxLeftObjects5.length = 0;
gdjs.MenuCode.GDHitboxLeftObjects6.length = 0;
gdjs.MenuCode.GDHitboxDownObjects1.length = 0;
gdjs.MenuCode.GDHitboxDownObjects2.length = 0;
gdjs.MenuCode.GDHitboxDownObjects3.length = 0;
gdjs.MenuCode.GDHitboxDownObjects4.length = 0;
gdjs.MenuCode.GDHitboxDownObjects5.length = 0;
gdjs.MenuCode.GDHitboxDownObjects6.length = 0;
gdjs.MenuCode.GDHitboxUpObjects1.length = 0;
gdjs.MenuCode.GDHitboxUpObjects2.length = 0;
gdjs.MenuCode.GDHitboxUpObjects3.length = 0;
gdjs.MenuCode.GDHitboxUpObjects4.length = 0;
gdjs.MenuCode.GDHitboxUpObjects5.length = 0;
gdjs.MenuCode.GDHitboxUpObjects6.length = 0;
gdjs.MenuCode.GDhitrightObjects1.length = 0;
gdjs.MenuCode.GDhitrightObjects2.length = 0;
gdjs.MenuCode.GDhitrightObjects3.length = 0;
gdjs.MenuCode.GDhitrightObjects4.length = 0;
gdjs.MenuCode.GDhitrightObjects5.length = 0;
gdjs.MenuCode.GDhitrightObjects6.length = 0;
gdjs.MenuCode.GDBFIconObjects1.length = 0;
gdjs.MenuCode.GDBFIconObjects2.length = 0;
gdjs.MenuCode.GDBFIconObjects3.length = 0;
gdjs.MenuCode.GDBFIconObjects4.length = 0;
gdjs.MenuCode.GDBFIconObjects5.length = 0;
gdjs.MenuCode.GDBFIconObjects6.length = 0;
gdjs.MenuCode.GDPauseButtonObjects1.length = 0;
gdjs.MenuCode.GDPauseButtonObjects2.length = 0;
gdjs.MenuCode.GDPauseButtonObjects3.length = 0;
gdjs.MenuCode.GDPauseButtonObjects4.length = 0;
gdjs.MenuCode.GDPauseButtonObjects5.length = 0;
gdjs.MenuCode.GDPauseButtonObjects6.length = 0;
gdjs.MenuCode.GDPauseButton2Objects1.length = 0;
gdjs.MenuCode.GDPauseButton2Objects2.length = 0;
gdjs.MenuCode.GDPauseButton2Objects3.length = 0;
gdjs.MenuCode.GDPauseButton2Objects4.length = 0;
gdjs.MenuCode.GDPauseButton2Objects5.length = 0;
gdjs.MenuCode.GDPauseButton2Objects6.length = 0;
gdjs.MenuCode.GDBlackScreenObjects1.length = 0;
gdjs.MenuCode.GDBlackScreenObjects2.length = 0;
gdjs.MenuCode.GDBlackScreenObjects3.length = 0;
gdjs.MenuCode.GDBlackScreenObjects4.length = 0;
gdjs.MenuCode.GDBlackScreenObjects5.length = 0;
gdjs.MenuCode.GDBlackScreenObjects6.length = 0;
gdjs.MenuCode.GDPauseTextObjects1.length = 0;
gdjs.MenuCode.GDPauseTextObjects2.length = 0;
gdjs.MenuCode.GDPauseTextObjects3.length = 0;
gdjs.MenuCode.GDPauseTextObjects4.length = 0;
gdjs.MenuCode.GDPauseTextObjects5.length = 0;
gdjs.MenuCode.GDPauseTextObjects6.length = 0;
gdjs.MenuCode.GDExitTextObjects1.length = 0;
gdjs.MenuCode.GDExitTextObjects2.length = 0;
gdjs.MenuCode.GDExitTextObjects3.length = 0;
gdjs.MenuCode.GDExitTextObjects4.length = 0;
gdjs.MenuCode.GDExitTextObjects5.length = 0;
gdjs.MenuCode.GDExitTextObjects6.length = 0;
gdjs.MenuCode.GDRestartTextObjects1.length = 0;
gdjs.MenuCode.GDRestartTextObjects2.length = 0;
gdjs.MenuCode.GDRestartTextObjects3.length = 0;
gdjs.MenuCode.GDRestartTextObjects4.length = 0;
gdjs.MenuCode.GDRestartTextObjects5.length = 0;
gdjs.MenuCode.GDRestartTextObjects6.length = 0;
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects1.length = 0;
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects2.length = 0;
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects3.length = 0;
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects4.length = 0;
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects5.length = 0;
gdjs.MenuCode.GDmisses_9595challenge_9595textObjects6.length = 0;
gdjs.MenuCode.GDBfUpNoteObjects1.length = 0;
gdjs.MenuCode.GDBfUpNoteObjects2.length = 0;
gdjs.MenuCode.GDBfUpNoteObjects3.length = 0;
gdjs.MenuCode.GDBfUpNoteObjects4.length = 0;
gdjs.MenuCode.GDBfUpNoteObjects5.length = 0;
gdjs.MenuCode.GDBfUpNoteObjects6.length = 0;
gdjs.MenuCode.GDBfDownNoteObjects1.length = 0;
gdjs.MenuCode.GDBfDownNoteObjects2.length = 0;
gdjs.MenuCode.GDBfDownNoteObjects3.length = 0;
gdjs.MenuCode.GDBfDownNoteObjects4.length = 0;
gdjs.MenuCode.GDBfDownNoteObjects5.length = 0;
gdjs.MenuCode.GDBfDownNoteObjects6.length = 0;
gdjs.MenuCode.GDBfLeftNoteObjects1.length = 0;
gdjs.MenuCode.GDBfLeftNoteObjects2.length = 0;
gdjs.MenuCode.GDBfLeftNoteObjects3.length = 0;
gdjs.MenuCode.GDBfLeftNoteObjects4.length = 0;
gdjs.MenuCode.GDBfLeftNoteObjects5.length = 0;
gdjs.MenuCode.GDBfLeftNoteObjects6.length = 0;
gdjs.MenuCode.GDBfLeftNote4Objects1.length = 0;
gdjs.MenuCode.GDBfLeftNote4Objects2.length = 0;
gdjs.MenuCode.GDBfLeftNote4Objects3.length = 0;
gdjs.MenuCode.GDBfLeftNote4Objects4.length = 0;
gdjs.MenuCode.GDBfLeftNote4Objects5.length = 0;
gdjs.MenuCode.GDBfLeftNote4Objects6.length = 0;
gdjs.MenuCode.GDBfDownNote5Objects1.length = 0;
gdjs.MenuCode.GDBfDownNote5Objects2.length = 0;
gdjs.MenuCode.GDBfDownNote5Objects3.length = 0;
gdjs.MenuCode.GDBfDownNote5Objects4.length = 0;
gdjs.MenuCode.GDBfDownNote5Objects5.length = 0;
gdjs.MenuCode.GDBfDownNote5Objects6.length = 0;
gdjs.MenuCode.GDBfUpNote6Objects1.length = 0;
gdjs.MenuCode.GDBfUpNote6Objects2.length = 0;
gdjs.MenuCode.GDBfUpNote6Objects3.length = 0;
gdjs.MenuCode.GDBfUpNote6Objects4.length = 0;
gdjs.MenuCode.GDBfUpNote6Objects5.length = 0;
gdjs.MenuCode.GDBfUpNote6Objects6.length = 0;
gdjs.MenuCode.GDBfRightNoteObjects1.length = 0;
gdjs.MenuCode.GDBfRightNoteObjects2.length = 0;
gdjs.MenuCode.GDBfRightNoteObjects3.length = 0;
gdjs.MenuCode.GDBfRightNoteObjects4.length = 0;
gdjs.MenuCode.GDBfRightNoteObjects5.length = 0;
gdjs.MenuCode.GDBfRightNoteObjects6.length = 0;
gdjs.MenuCode.GDBfRightNote7Objects1.length = 0;
gdjs.MenuCode.GDBfRightNote7Objects2.length = 0;
gdjs.MenuCode.GDBfRightNote7Objects3.length = 0;
gdjs.MenuCode.GDBfRightNote7Objects4.length = 0;
gdjs.MenuCode.GDBfRightNote7Objects5.length = 0;
gdjs.MenuCode.GDBfRightNote7Objects6.length = 0;
gdjs.MenuCode.GDOppIconObjects1.length = 0;
gdjs.MenuCode.GDOppIconObjects2.length = 0;
gdjs.MenuCode.GDOppIconObjects3.length = 0;
gdjs.MenuCode.GDOppIconObjects4.length = 0;
gdjs.MenuCode.GDOppIconObjects5.length = 0;
gdjs.MenuCode.GDOppIconObjects6.length = 0;
gdjs.MenuCode.GDtimerBarObjects1.length = 0;
gdjs.MenuCode.GDtimerBarObjects2.length = 0;
gdjs.MenuCode.GDtimerBarObjects3.length = 0;
gdjs.MenuCode.GDtimerBarObjects4.length = 0;
gdjs.MenuCode.GDtimerBarObjects5.length = 0;
gdjs.MenuCode.GDtimerBarObjects6.length = 0;
gdjs.MenuCode.GDtimeObjects1.length = 0;
gdjs.MenuCode.GDtimeObjects2.length = 0;
gdjs.MenuCode.GDtimeObjects3.length = 0;
gdjs.MenuCode.GDtimeObjects4.length = 0;
gdjs.MenuCode.GDtimeObjects5.length = 0;
gdjs.MenuCode.GDtimeObjects6.length = 0;
gdjs.MenuCode.GDtimerBar2Objects1.length = 0;
gdjs.MenuCode.GDtimerBar2Objects2.length = 0;
gdjs.MenuCode.GDtimerBar2Objects3.length = 0;
gdjs.MenuCode.GDtimerBar2Objects4.length = 0;
gdjs.MenuCode.GDtimerBar2Objects5.length = 0;
gdjs.MenuCode.GDtimerBar2Objects6.length = 0;
gdjs.MenuCode.GDRatinsPopUpObjects1.length = 0;
gdjs.MenuCode.GDRatinsPopUpObjects2.length = 0;
gdjs.MenuCode.GDRatinsPopUpObjects3.length = 0;
gdjs.MenuCode.GDRatinsPopUpObjects4.length = 0;
gdjs.MenuCode.GDRatinsPopUpObjects5.length = 0;
gdjs.MenuCode.GDRatinsPopUpObjects6.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
