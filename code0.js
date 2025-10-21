gdjs.WarningCode = {};
gdjs.WarningCode.localVariables = [];
gdjs.WarningCode.idToCallbackMap = new Map();
gdjs.WarningCode.GDStatistics2Objects1= [];
gdjs.WarningCode.GDStatistics2Objects2= [];
gdjs.WarningCode.GDGithubObjects1= [];
gdjs.WarningCode.GDGithubObjects2= [];
gdjs.WarningCode.GDgd_9595gamesObjects1= [];
gdjs.WarningCode.GDgd_9595gamesObjects2= [];
gdjs.WarningCode.GDStatisticsObjects1= [];
gdjs.WarningCode.GDStatisticsObjects2= [];
gdjs.WarningCode.GDComboNumbersObjects1= [];
gdjs.WarningCode.GDComboNumbersObjects2= [];
gdjs.WarningCode.GDNotesSplashObjects1= [];
gdjs.WarningCode.GDNotesSplashObjects2= [];
gdjs.WarningCode.GDfpsObjects1= [];
gdjs.WarningCode.GDfpsObjects2= [];
gdjs.WarningCode.GDEngineTextObjects1= [];
gdjs.WarningCode.GDEngineTextObjects2= [];
gdjs.WarningCode.GDLongUpscrollBFObjects1= [];
gdjs.WarningCode.GDLongUpscrollBFObjects2= [];
gdjs.WarningCode.GDLongUpscrollOPPObjects1= [];
gdjs.WarningCode.GDLongUpscrollOPPObjects2= [];
gdjs.WarningCode.GDHitboxLeftObjects1= [];
gdjs.WarningCode.GDHitboxLeftObjects2= [];
gdjs.WarningCode.GDHitboxDownObjects1= [];
gdjs.WarningCode.GDHitboxDownObjects2= [];
gdjs.WarningCode.GDHitboxUpObjects1= [];
gdjs.WarningCode.GDHitboxUpObjects2= [];
gdjs.WarningCode.GDhitrightObjects1= [];
gdjs.WarningCode.GDhitrightObjects2= [];
gdjs.WarningCode.GDBFIconObjects1= [];
gdjs.WarningCode.GDBFIconObjects2= [];
gdjs.WarningCode.GDPauseButtonObjects1= [];
gdjs.WarningCode.GDPauseButtonObjects2= [];
gdjs.WarningCode.GDPauseButton2Objects1= [];
gdjs.WarningCode.GDPauseButton2Objects2= [];
gdjs.WarningCode.GDBlackScreenObjects1= [];
gdjs.WarningCode.GDBlackScreenObjects2= [];
gdjs.WarningCode.GDPauseTextObjects1= [];
gdjs.WarningCode.GDPauseTextObjects2= [];
gdjs.WarningCode.GDExitTextObjects1= [];
gdjs.WarningCode.GDExitTextObjects2= [];
gdjs.WarningCode.GDRestartTextObjects1= [];
gdjs.WarningCode.GDRestartTextObjects2= [];
gdjs.WarningCode.GDmisses_9595challenge_9595textObjects1= [];
gdjs.WarningCode.GDmisses_9595challenge_9595textObjects2= [];
gdjs.WarningCode.GDBfUpNoteObjects1= [];
gdjs.WarningCode.GDBfUpNoteObjects2= [];
gdjs.WarningCode.GDBfDownNoteObjects1= [];
gdjs.WarningCode.GDBfDownNoteObjects2= [];
gdjs.WarningCode.GDBfLeftNoteObjects1= [];
gdjs.WarningCode.GDBfLeftNoteObjects2= [];
gdjs.WarningCode.GDBfLeftNote4Objects1= [];
gdjs.WarningCode.GDBfLeftNote4Objects2= [];
gdjs.WarningCode.GDBfDownNote5Objects1= [];
gdjs.WarningCode.GDBfDownNote5Objects2= [];
gdjs.WarningCode.GDBfUpNote6Objects1= [];
gdjs.WarningCode.GDBfUpNote6Objects2= [];
gdjs.WarningCode.GDBfRightNoteObjects1= [];
gdjs.WarningCode.GDBfRightNoteObjects2= [];
gdjs.WarningCode.GDBfRightNote7Objects1= [];
gdjs.WarningCode.GDBfRightNote7Objects2= [];
gdjs.WarningCode.GDOppIconObjects1= [];
gdjs.WarningCode.GDOppIconObjects2= [];
gdjs.WarningCode.GDtimerBarObjects1= [];
gdjs.WarningCode.GDtimerBarObjects2= [];
gdjs.WarningCode.GDtimeObjects1= [];
gdjs.WarningCode.GDtimeObjects2= [];
gdjs.WarningCode.GDtimerBar2Objects1= [];
gdjs.WarningCode.GDtimerBar2Objects2= [];
gdjs.WarningCode.GDRatinsPopUpObjects1= [];
gdjs.WarningCode.GDRatinsPopUpObjects2= [];


gdjs.WarningCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Github"), gdjs.WarningCode.GDGithubObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WarningCode.GDGithubObjects1.length;i<l;++i) {
    if ( gdjs.WarningCode.GDGithubObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.WarningCode.GDGithubObjects1[k] = gdjs.WarningCode.GDGithubObjects1[i];
        ++k;
    }
}
gdjs.WarningCode.GDGithubObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://lucyyuih.github.io/GDev-engine/", runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("gd_games"), gdjs.WarningCode.GDgd_9595gamesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WarningCode.GDgd_9595gamesObjects1.length;i<l;++i) {
    if ( gdjs.WarningCode.GDgd_9595gamesObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.WarningCode.GDgd_9595gamesObjects1[k] = gdjs.WarningCode.GDgd_9595gamesObjects1[i];
        ++k;
    }
}
gdjs.WarningCode.GDgd_9595gamesObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}
}

}


};

gdjs.WarningCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WarningCode.GDStatistics2Objects1.length = 0;
gdjs.WarningCode.GDStatistics2Objects2.length = 0;
gdjs.WarningCode.GDGithubObjects1.length = 0;
gdjs.WarningCode.GDGithubObjects2.length = 0;
gdjs.WarningCode.GDgd_9595gamesObjects1.length = 0;
gdjs.WarningCode.GDgd_9595gamesObjects2.length = 0;
gdjs.WarningCode.GDStatisticsObjects1.length = 0;
gdjs.WarningCode.GDStatisticsObjects2.length = 0;
gdjs.WarningCode.GDComboNumbersObjects1.length = 0;
gdjs.WarningCode.GDComboNumbersObjects2.length = 0;
gdjs.WarningCode.GDNotesSplashObjects1.length = 0;
gdjs.WarningCode.GDNotesSplashObjects2.length = 0;
gdjs.WarningCode.GDfpsObjects1.length = 0;
gdjs.WarningCode.GDfpsObjects2.length = 0;
gdjs.WarningCode.GDEngineTextObjects1.length = 0;
gdjs.WarningCode.GDEngineTextObjects2.length = 0;
gdjs.WarningCode.GDLongUpscrollBFObjects1.length = 0;
gdjs.WarningCode.GDLongUpscrollBFObjects2.length = 0;
gdjs.WarningCode.GDLongUpscrollOPPObjects1.length = 0;
gdjs.WarningCode.GDLongUpscrollOPPObjects2.length = 0;
gdjs.WarningCode.GDHitboxLeftObjects1.length = 0;
gdjs.WarningCode.GDHitboxLeftObjects2.length = 0;
gdjs.WarningCode.GDHitboxDownObjects1.length = 0;
gdjs.WarningCode.GDHitboxDownObjects2.length = 0;
gdjs.WarningCode.GDHitboxUpObjects1.length = 0;
gdjs.WarningCode.GDHitboxUpObjects2.length = 0;
gdjs.WarningCode.GDhitrightObjects1.length = 0;
gdjs.WarningCode.GDhitrightObjects2.length = 0;
gdjs.WarningCode.GDBFIconObjects1.length = 0;
gdjs.WarningCode.GDBFIconObjects2.length = 0;
gdjs.WarningCode.GDPauseButtonObjects1.length = 0;
gdjs.WarningCode.GDPauseButtonObjects2.length = 0;
gdjs.WarningCode.GDPauseButton2Objects1.length = 0;
gdjs.WarningCode.GDPauseButton2Objects2.length = 0;
gdjs.WarningCode.GDBlackScreenObjects1.length = 0;
gdjs.WarningCode.GDBlackScreenObjects2.length = 0;
gdjs.WarningCode.GDPauseTextObjects1.length = 0;
gdjs.WarningCode.GDPauseTextObjects2.length = 0;
gdjs.WarningCode.GDExitTextObjects1.length = 0;
gdjs.WarningCode.GDExitTextObjects2.length = 0;
gdjs.WarningCode.GDRestartTextObjects1.length = 0;
gdjs.WarningCode.GDRestartTextObjects2.length = 0;
gdjs.WarningCode.GDmisses_9595challenge_9595textObjects1.length = 0;
gdjs.WarningCode.GDmisses_9595challenge_9595textObjects2.length = 0;
gdjs.WarningCode.GDBfUpNoteObjects1.length = 0;
gdjs.WarningCode.GDBfUpNoteObjects2.length = 0;
gdjs.WarningCode.GDBfDownNoteObjects1.length = 0;
gdjs.WarningCode.GDBfDownNoteObjects2.length = 0;
gdjs.WarningCode.GDBfLeftNoteObjects1.length = 0;
gdjs.WarningCode.GDBfLeftNoteObjects2.length = 0;
gdjs.WarningCode.GDBfLeftNote4Objects1.length = 0;
gdjs.WarningCode.GDBfLeftNote4Objects2.length = 0;
gdjs.WarningCode.GDBfDownNote5Objects1.length = 0;
gdjs.WarningCode.GDBfDownNote5Objects2.length = 0;
gdjs.WarningCode.GDBfUpNote6Objects1.length = 0;
gdjs.WarningCode.GDBfUpNote6Objects2.length = 0;
gdjs.WarningCode.GDBfRightNoteObjects1.length = 0;
gdjs.WarningCode.GDBfRightNoteObjects2.length = 0;
gdjs.WarningCode.GDBfRightNote7Objects1.length = 0;
gdjs.WarningCode.GDBfRightNote7Objects2.length = 0;
gdjs.WarningCode.GDOppIconObjects1.length = 0;
gdjs.WarningCode.GDOppIconObjects2.length = 0;
gdjs.WarningCode.GDtimerBarObjects1.length = 0;
gdjs.WarningCode.GDtimerBarObjects2.length = 0;
gdjs.WarningCode.GDtimeObjects1.length = 0;
gdjs.WarningCode.GDtimeObjects2.length = 0;
gdjs.WarningCode.GDtimerBar2Objects1.length = 0;
gdjs.WarningCode.GDtimerBar2Objects2.length = 0;
gdjs.WarningCode.GDRatinsPopUpObjects1.length = 0;
gdjs.WarningCode.GDRatinsPopUpObjects2.length = 0;

gdjs.WarningCode.eventsList0(runtimeScene);
gdjs.WarningCode.GDStatistics2Objects1.length = 0;
gdjs.WarningCode.GDStatistics2Objects2.length = 0;
gdjs.WarningCode.GDGithubObjects1.length = 0;
gdjs.WarningCode.GDGithubObjects2.length = 0;
gdjs.WarningCode.GDgd_9595gamesObjects1.length = 0;
gdjs.WarningCode.GDgd_9595gamesObjects2.length = 0;
gdjs.WarningCode.GDStatisticsObjects1.length = 0;
gdjs.WarningCode.GDStatisticsObjects2.length = 0;
gdjs.WarningCode.GDComboNumbersObjects1.length = 0;
gdjs.WarningCode.GDComboNumbersObjects2.length = 0;
gdjs.WarningCode.GDNotesSplashObjects1.length = 0;
gdjs.WarningCode.GDNotesSplashObjects2.length = 0;
gdjs.WarningCode.GDfpsObjects1.length = 0;
gdjs.WarningCode.GDfpsObjects2.length = 0;
gdjs.WarningCode.GDEngineTextObjects1.length = 0;
gdjs.WarningCode.GDEngineTextObjects2.length = 0;
gdjs.WarningCode.GDLongUpscrollBFObjects1.length = 0;
gdjs.WarningCode.GDLongUpscrollBFObjects2.length = 0;
gdjs.WarningCode.GDLongUpscrollOPPObjects1.length = 0;
gdjs.WarningCode.GDLongUpscrollOPPObjects2.length = 0;
gdjs.WarningCode.GDHitboxLeftObjects1.length = 0;
gdjs.WarningCode.GDHitboxLeftObjects2.length = 0;
gdjs.WarningCode.GDHitboxDownObjects1.length = 0;
gdjs.WarningCode.GDHitboxDownObjects2.length = 0;
gdjs.WarningCode.GDHitboxUpObjects1.length = 0;
gdjs.WarningCode.GDHitboxUpObjects2.length = 0;
gdjs.WarningCode.GDhitrightObjects1.length = 0;
gdjs.WarningCode.GDhitrightObjects2.length = 0;
gdjs.WarningCode.GDBFIconObjects1.length = 0;
gdjs.WarningCode.GDBFIconObjects2.length = 0;
gdjs.WarningCode.GDPauseButtonObjects1.length = 0;
gdjs.WarningCode.GDPauseButtonObjects2.length = 0;
gdjs.WarningCode.GDPauseButton2Objects1.length = 0;
gdjs.WarningCode.GDPauseButton2Objects2.length = 0;
gdjs.WarningCode.GDBlackScreenObjects1.length = 0;
gdjs.WarningCode.GDBlackScreenObjects2.length = 0;
gdjs.WarningCode.GDPauseTextObjects1.length = 0;
gdjs.WarningCode.GDPauseTextObjects2.length = 0;
gdjs.WarningCode.GDExitTextObjects1.length = 0;
gdjs.WarningCode.GDExitTextObjects2.length = 0;
gdjs.WarningCode.GDRestartTextObjects1.length = 0;
gdjs.WarningCode.GDRestartTextObjects2.length = 0;
gdjs.WarningCode.GDmisses_9595challenge_9595textObjects1.length = 0;
gdjs.WarningCode.GDmisses_9595challenge_9595textObjects2.length = 0;
gdjs.WarningCode.GDBfUpNoteObjects1.length = 0;
gdjs.WarningCode.GDBfUpNoteObjects2.length = 0;
gdjs.WarningCode.GDBfDownNoteObjects1.length = 0;
gdjs.WarningCode.GDBfDownNoteObjects2.length = 0;
gdjs.WarningCode.GDBfLeftNoteObjects1.length = 0;
gdjs.WarningCode.GDBfLeftNoteObjects2.length = 0;
gdjs.WarningCode.GDBfLeftNote4Objects1.length = 0;
gdjs.WarningCode.GDBfLeftNote4Objects2.length = 0;
gdjs.WarningCode.GDBfDownNote5Objects1.length = 0;
gdjs.WarningCode.GDBfDownNote5Objects2.length = 0;
gdjs.WarningCode.GDBfUpNote6Objects1.length = 0;
gdjs.WarningCode.GDBfUpNote6Objects2.length = 0;
gdjs.WarningCode.GDBfRightNoteObjects1.length = 0;
gdjs.WarningCode.GDBfRightNoteObjects2.length = 0;
gdjs.WarningCode.GDBfRightNote7Objects1.length = 0;
gdjs.WarningCode.GDBfRightNote7Objects2.length = 0;
gdjs.WarningCode.GDOppIconObjects1.length = 0;
gdjs.WarningCode.GDOppIconObjects2.length = 0;
gdjs.WarningCode.GDtimerBarObjects1.length = 0;
gdjs.WarningCode.GDtimerBarObjects2.length = 0;
gdjs.WarningCode.GDtimeObjects1.length = 0;
gdjs.WarningCode.GDtimeObjects2.length = 0;
gdjs.WarningCode.GDtimerBar2Objects1.length = 0;
gdjs.WarningCode.GDtimerBar2Objects2.length = 0;
gdjs.WarningCode.GDRatinsPopUpObjects1.length = 0;
gdjs.WarningCode.GDRatinsPopUpObjects2.length = 0;


return;

}

gdjs['WarningCode'] = gdjs.WarningCode;
