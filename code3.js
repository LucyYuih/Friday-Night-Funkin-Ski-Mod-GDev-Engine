gdjs.CreditsCode = {};
gdjs.CreditsCode.localVariables = [];
gdjs.CreditsCode.idToCallbackMap = new Map();
gdjs.CreditsCode.GDfps2Objects1= [];
gdjs.CreditsCode.GDfps2Objects2= [];
gdjs.CreditsCode.GDPauseButton3Objects1= [];
gdjs.CreditsCode.GDPauseButton3Objects2= [];
gdjs.CreditsCode.GDSquareWhiteSliderObjects1= [];
gdjs.CreditsCode.GDSquareWhiteSliderObjects2= [];
gdjs.CreditsCode.GDbackObjects1= [];
gdjs.CreditsCode.GDbackObjects2= [];
gdjs.CreditsCode.GDStatisticsObjects1= [];
gdjs.CreditsCode.GDStatisticsObjects2= [];
gdjs.CreditsCode.GDComboNumbersObjects1= [];
gdjs.CreditsCode.GDComboNumbersObjects2= [];
gdjs.CreditsCode.GDNotesSplashObjects1= [];
gdjs.CreditsCode.GDNotesSplashObjects2= [];
gdjs.CreditsCode.GDfpsObjects1= [];
gdjs.CreditsCode.GDfpsObjects2= [];
gdjs.CreditsCode.GDEngineTextObjects1= [];
gdjs.CreditsCode.GDEngineTextObjects2= [];
gdjs.CreditsCode.GDLongUpscrollBFObjects1= [];
gdjs.CreditsCode.GDLongUpscrollBFObjects2= [];
gdjs.CreditsCode.GDLongUpscrollOPPObjects1= [];
gdjs.CreditsCode.GDLongUpscrollOPPObjects2= [];
gdjs.CreditsCode.GDHitboxLeftObjects1= [];
gdjs.CreditsCode.GDHitboxLeftObjects2= [];
gdjs.CreditsCode.GDHitboxDownObjects1= [];
gdjs.CreditsCode.GDHitboxDownObjects2= [];
gdjs.CreditsCode.GDHitboxUpObjects1= [];
gdjs.CreditsCode.GDHitboxUpObjects2= [];
gdjs.CreditsCode.GDhitrightObjects1= [];
gdjs.CreditsCode.GDhitrightObjects2= [];
gdjs.CreditsCode.GDBFIconObjects1= [];
gdjs.CreditsCode.GDBFIconObjects2= [];
gdjs.CreditsCode.GDPauseButtonObjects1= [];
gdjs.CreditsCode.GDPauseButtonObjects2= [];
gdjs.CreditsCode.GDPauseButton2Objects1= [];
gdjs.CreditsCode.GDPauseButton2Objects2= [];
gdjs.CreditsCode.GDBlackScreenObjects1= [];
gdjs.CreditsCode.GDBlackScreenObjects2= [];
gdjs.CreditsCode.GDPauseTextObjects1= [];
gdjs.CreditsCode.GDPauseTextObjects2= [];
gdjs.CreditsCode.GDExitTextObjects1= [];
gdjs.CreditsCode.GDExitTextObjects2= [];
gdjs.CreditsCode.GDRestartTextObjects1= [];
gdjs.CreditsCode.GDRestartTextObjects2= [];
gdjs.CreditsCode.GDmisses_9595challenge_9595textObjects1= [];
gdjs.CreditsCode.GDmisses_9595challenge_9595textObjects2= [];
gdjs.CreditsCode.GDBfUpNoteObjects1= [];
gdjs.CreditsCode.GDBfUpNoteObjects2= [];
gdjs.CreditsCode.GDBfDownNoteObjects1= [];
gdjs.CreditsCode.GDBfDownNoteObjects2= [];
gdjs.CreditsCode.GDBfLeftNoteObjects1= [];
gdjs.CreditsCode.GDBfLeftNoteObjects2= [];
gdjs.CreditsCode.GDBfLeftNote4Objects1= [];
gdjs.CreditsCode.GDBfLeftNote4Objects2= [];
gdjs.CreditsCode.GDBfDownNote5Objects1= [];
gdjs.CreditsCode.GDBfDownNote5Objects2= [];
gdjs.CreditsCode.GDBfUpNote6Objects1= [];
gdjs.CreditsCode.GDBfUpNote6Objects2= [];
gdjs.CreditsCode.GDBfRightNoteObjects1= [];
gdjs.CreditsCode.GDBfRightNoteObjects2= [];
gdjs.CreditsCode.GDBfRightNote7Objects1= [];
gdjs.CreditsCode.GDBfRightNote7Objects2= [];
gdjs.CreditsCode.GDOppIconObjects1= [];
gdjs.CreditsCode.GDOppIconObjects2= [];
gdjs.CreditsCode.GDtimerBarObjects1= [];
gdjs.CreditsCode.GDtimerBarObjects2= [];
gdjs.CreditsCode.GDtimeObjects1= [];
gdjs.CreditsCode.GDtimeObjects2= [];
gdjs.CreditsCode.GDtimerBar2Objects1= [];
gdjs.CreditsCode.GDtimerBar2Objects2= [];
gdjs.CreditsCode.GDRatinsPopUpObjects1= [];
gdjs.CreditsCode.GDRatinsPopUpObjects2= [];


gdjs.CreditsCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 1920, 1080);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PauseButton3"), gdjs.CreditsCode.GDPauseButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreditsCode.GDPauseButton3Objects1.length;i<l;++i) {
    if ( gdjs.CreditsCode.GDPauseButton3Objects1[i].getBehavior("MultitouchButton").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.CreditsCode.GDPauseButton3Objects1[k] = gdjs.CreditsCode.GDPauseButton3Objects1[i];
        ++k;
    }
}
gdjs.CreditsCode.GDPauseButton3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15464548);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs.CreditsCode.GDSquareWhiteSliderObjects1);
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.CreditsCode.GDSquareWhiteSliderObjects1.length === 0 ) ? 0 :gdjs.CreditsCode.GDSquareWhiteSliderObjects1[0].Value(null)), "", 0);
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, 960, "", 0);
}
}

}


};

gdjs.CreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditsCode.GDfps2Objects1.length = 0;
gdjs.CreditsCode.GDfps2Objects2.length = 0;
gdjs.CreditsCode.GDPauseButton3Objects1.length = 0;
gdjs.CreditsCode.GDPauseButton3Objects2.length = 0;
gdjs.CreditsCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.CreditsCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.CreditsCode.GDbackObjects1.length = 0;
gdjs.CreditsCode.GDbackObjects2.length = 0;
gdjs.CreditsCode.GDStatisticsObjects1.length = 0;
gdjs.CreditsCode.GDStatisticsObjects2.length = 0;
gdjs.CreditsCode.GDComboNumbersObjects1.length = 0;
gdjs.CreditsCode.GDComboNumbersObjects2.length = 0;
gdjs.CreditsCode.GDNotesSplashObjects1.length = 0;
gdjs.CreditsCode.GDNotesSplashObjects2.length = 0;
gdjs.CreditsCode.GDfpsObjects1.length = 0;
gdjs.CreditsCode.GDfpsObjects2.length = 0;
gdjs.CreditsCode.GDEngineTextObjects1.length = 0;
gdjs.CreditsCode.GDEngineTextObjects2.length = 0;
gdjs.CreditsCode.GDLongUpscrollBFObjects1.length = 0;
gdjs.CreditsCode.GDLongUpscrollBFObjects2.length = 0;
gdjs.CreditsCode.GDLongUpscrollOPPObjects1.length = 0;
gdjs.CreditsCode.GDLongUpscrollOPPObjects2.length = 0;
gdjs.CreditsCode.GDHitboxLeftObjects1.length = 0;
gdjs.CreditsCode.GDHitboxLeftObjects2.length = 0;
gdjs.CreditsCode.GDHitboxDownObjects1.length = 0;
gdjs.CreditsCode.GDHitboxDownObjects2.length = 0;
gdjs.CreditsCode.GDHitboxUpObjects1.length = 0;
gdjs.CreditsCode.GDHitboxUpObjects2.length = 0;
gdjs.CreditsCode.GDhitrightObjects1.length = 0;
gdjs.CreditsCode.GDhitrightObjects2.length = 0;
gdjs.CreditsCode.GDBFIconObjects1.length = 0;
gdjs.CreditsCode.GDBFIconObjects2.length = 0;
gdjs.CreditsCode.GDPauseButtonObjects1.length = 0;
gdjs.CreditsCode.GDPauseButtonObjects2.length = 0;
gdjs.CreditsCode.GDPauseButton2Objects1.length = 0;
gdjs.CreditsCode.GDPauseButton2Objects2.length = 0;
gdjs.CreditsCode.GDBlackScreenObjects1.length = 0;
gdjs.CreditsCode.GDBlackScreenObjects2.length = 0;
gdjs.CreditsCode.GDPauseTextObjects1.length = 0;
gdjs.CreditsCode.GDPauseTextObjects2.length = 0;
gdjs.CreditsCode.GDExitTextObjects1.length = 0;
gdjs.CreditsCode.GDExitTextObjects2.length = 0;
gdjs.CreditsCode.GDRestartTextObjects1.length = 0;
gdjs.CreditsCode.GDRestartTextObjects2.length = 0;
gdjs.CreditsCode.GDmisses_9595challenge_9595textObjects1.length = 0;
gdjs.CreditsCode.GDmisses_9595challenge_9595textObjects2.length = 0;
gdjs.CreditsCode.GDBfUpNoteObjects1.length = 0;
gdjs.CreditsCode.GDBfUpNoteObjects2.length = 0;
gdjs.CreditsCode.GDBfDownNoteObjects1.length = 0;
gdjs.CreditsCode.GDBfDownNoteObjects2.length = 0;
gdjs.CreditsCode.GDBfLeftNoteObjects1.length = 0;
gdjs.CreditsCode.GDBfLeftNoteObjects2.length = 0;
gdjs.CreditsCode.GDBfLeftNote4Objects1.length = 0;
gdjs.CreditsCode.GDBfLeftNote4Objects2.length = 0;
gdjs.CreditsCode.GDBfDownNote5Objects1.length = 0;
gdjs.CreditsCode.GDBfDownNote5Objects2.length = 0;
gdjs.CreditsCode.GDBfUpNote6Objects1.length = 0;
gdjs.CreditsCode.GDBfUpNote6Objects2.length = 0;
gdjs.CreditsCode.GDBfRightNoteObjects1.length = 0;
gdjs.CreditsCode.GDBfRightNoteObjects2.length = 0;
gdjs.CreditsCode.GDBfRightNote7Objects1.length = 0;
gdjs.CreditsCode.GDBfRightNote7Objects2.length = 0;
gdjs.CreditsCode.GDOppIconObjects1.length = 0;
gdjs.CreditsCode.GDOppIconObjects2.length = 0;
gdjs.CreditsCode.GDtimerBarObjects1.length = 0;
gdjs.CreditsCode.GDtimerBarObjects2.length = 0;
gdjs.CreditsCode.GDtimeObjects1.length = 0;
gdjs.CreditsCode.GDtimeObjects2.length = 0;
gdjs.CreditsCode.GDtimerBar2Objects1.length = 0;
gdjs.CreditsCode.GDtimerBar2Objects2.length = 0;
gdjs.CreditsCode.GDRatinsPopUpObjects1.length = 0;
gdjs.CreditsCode.GDRatinsPopUpObjects2.length = 0;

gdjs.CreditsCode.eventsList0(runtimeScene);
gdjs.CreditsCode.GDfps2Objects1.length = 0;
gdjs.CreditsCode.GDfps2Objects2.length = 0;
gdjs.CreditsCode.GDPauseButton3Objects1.length = 0;
gdjs.CreditsCode.GDPauseButton3Objects2.length = 0;
gdjs.CreditsCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.CreditsCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.CreditsCode.GDbackObjects1.length = 0;
gdjs.CreditsCode.GDbackObjects2.length = 0;
gdjs.CreditsCode.GDStatisticsObjects1.length = 0;
gdjs.CreditsCode.GDStatisticsObjects2.length = 0;
gdjs.CreditsCode.GDComboNumbersObjects1.length = 0;
gdjs.CreditsCode.GDComboNumbersObjects2.length = 0;
gdjs.CreditsCode.GDNotesSplashObjects1.length = 0;
gdjs.CreditsCode.GDNotesSplashObjects2.length = 0;
gdjs.CreditsCode.GDfpsObjects1.length = 0;
gdjs.CreditsCode.GDfpsObjects2.length = 0;
gdjs.CreditsCode.GDEngineTextObjects1.length = 0;
gdjs.CreditsCode.GDEngineTextObjects2.length = 0;
gdjs.CreditsCode.GDLongUpscrollBFObjects1.length = 0;
gdjs.CreditsCode.GDLongUpscrollBFObjects2.length = 0;
gdjs.CreditsCode.GDLongUpscrollOPPObjects1.length = 0;
gdjs.CreditsCode.GDLongUpscrollOPPObjects2.length = 0;
gdjs.CreditsCode.GDHitboxLeftObjects1.length = 0;
gdjs.CreditsCode.GDHitboxLeftObjects2.length = 0;
gdjs.CreditsCode.GDHitboxDownObjects1.length = 0;
gdjs.CreditsCode.GDHitboxDownObjects2.length = 0;
gdjs.CreditsCode.GDHitboxUpObjects1.length = 0;
gdjs.CreditsCode.GDHitboxUpObjects2.length = 0;
gdjs.CreditsCode.GDhitrightObjects1.length = 0;
gdjs.CreditsCode.GDhitrightObjects2.length = 0;
gdjs.CreditsCode.GDBFIconObjects1.length = 0;
gdjs.CreditsCode.GDBFIconObjects2.length = 0;
gdjs.CreditsCode.GDPauseButtonObjects1.length = 0;
gdjs.CreditsCode.GDPauseButtonObjects2.length = 0;
gdjs.CreditsCode.GDPauseButton2Objects1.length = 0;
gdjs.CreditsCode.GDPauseButton2Objects2.length = 0;
gdjs.CreditsCode.GDBlackScreenObjects1.length = 0;
gdjs.CreditsCode.GDBlackScreenObjects2.length = 0;
gdjs.CreditsCode.GDPauseTextObjects1.length = 0;
gdjs.CreditsCode.GDPauseTextObjects2.length = 0;
gdjs.CreditsCode.GDExitTextObjects1.length = 0;
gdjs.CreditsCode.GDExitTextObjects2.length = 0;
gdjs.CreditsCode.GDRestartTextObjects1.length = 0;
gdjs.CreditsCode.GDRestartTextObjects2.length = 0;
gdjs.CreditsCode.GDmisses_9595challenge_9595textObjects1.length = 0;
gdjs.CreditsCode.GDmisses_9595challenge_9595textObjects2.length = 0;
gdjs.CreditsCode.GDBfUpNoteObjects1.length = 0;
gdjs.CreditsCode.GDBfUpNoteObjects2.length = 0;
gdjs.CreditsCode.GDBfDownNoteObjects1.length = 0;
gdjs.CreditsCode.GDBfDownNoteObjects2.length = 0;
gdjs.CreditsCode.GDBfLeftNoteObjects1.length = 0;
gdjs.CreditsCode.GDBfLeftNoteObjects2.length = 0;
gdjs.CreditsCode.GDBfLeftNote4Objects1.length = 0;
gdjs.CreditsCode.GDBfLeftNote4Objects2.length = 0;
gdjs.CreditsCode.GDBfDownNote5Objects1.length = 0;
gdjs.CreditsCode.GDBfDownNote5Objects2.length = 0;
gdjs.CreditsCode.GDBfUpNote6Objects1.length = 0;
gdjs.CreditsCode.GDBfUpNote6Objects2.length = 0;
gdjs.CreditsCode.GDBfRightNoteObjects1.length = 0;
gdjs.CreditsCode.GDBfRightNoteObjects2.length = 0;
gdjs.CreditsCode.GDBfRightNote7Objects1.length = 0;
gdjs.CreditsCode.GDBfRightNote7Objects2.length = 0;
gdjs.CreditsCode.GDOppIconObjects1.length = 0;
gdjs.CreditsCode.GDOppIconObjects2.length = 0;
gdjs.CreditsCode.GDtimerBarObjects1.length = 0;
gdjs.CreditsCode.GDtimerBarObjects2.length = 0;
gdjs.CreditsCode.GDtimeObjects1.length = 0;
gdjs.CreditsCode.GDtimeObjects2.length = 0;
gdjs.CreditsCode.GDtimerBar2Objects1.length = 0;
gdjs.CreditsCode.GDtimerBar2Objects2.length = 0;
gdjs.CreditsCode.GDRatinsPopUpObjects1.length = 0;
gdjs.CreditsCode.GDRatinsPopUpObjects2.length = 0;


return;

}

gdjs['CreditsCode'] = gdjs.CreditsCode;
