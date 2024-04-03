(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"backgroundColorRatios":[0],"definitions": [{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"class":"PanoramaCamera","initialSequence":"this.sequence_AB904EB6_A4D5_637E_41E2_A6DADF832D87","automaticZoomSpeed":10,"hoverFactor":0,"id":"panorama_B479F1AF_A4D5_616E_41E2_0C57AEB48CD2_camera"},{"playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadShadowOpacity":0.7,"subtitlesVerticalAlign":"bottom","toolTipFontFamily":"Arial","playbackBarHeadBorderSize":0,"displayTooltipInSurfaceSelection":true,"vrPointerColor":"#FFFFFF","toolTipBorderRadius":3,"width":"100%","toolTipShadowOpacity":1,"data":{"name":"Main Viewer"},"playbackBarProgressBackgroundColorRatios":[0],"id":"MainViewer","playbackBarProgressBackgroundColorDirection":"vertical","shadow":false,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarBorderColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","toolTipBackgroundColor":"#F6F6F6","progressBackgroundColorRatios":[0],"playbackBarBorderSize":0,"toolTipFontSize":"1.11vmin","subtitlesFontWeight":"normal","playbackBarOpacity":1,"toolTipTextShadowColor":"#000000","progressRight":0,"subtitlesFontFamily":"Arial","toolTipBorderColor":"#767676","transitionMode":"blending","playbackBarHeadShadow":true,"progressOpacity":1,"progressBarBorderColor":"#000000","paddingLeft":0,"progressBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0],"subtitlesTop":0,"paddingRight":0,"progressBackgroundColorDirection":"vertical","toolTipHorizontalAlign":"center","playbackBarBackgroundColorDirection":"vertical","subtitlesGap":0,"playbackBarRight":0,"subtitlesTextShadowColor":"#000000","playbackBarHeadBackgroundColorDirection":"vertical","subtitlesFontSize":"3vmin","toolTipShadowVerticalLength":0,"playbackBarBorderRadius":0,"translationTransitionDuration":1000,"playbackBarHeadBackgroundColor":["#111111","#666666"],"displayTooltipInTouchScreens":true,"progressBackgroundOpacity":1,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeight":10,"subtitlesTextShadowVerticalLength":1,"borderSize":0,"doubleClickAction":"toggle_fullscreen","subtitlesFontColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"subtitlesPaddingLeft":5,"progressBackgroundColor":["#FFFFFF"],"toolTipPaddingLeft":6,"progressBarOpacity":1,"playbackBarProgressBorderColor":"#000000","progressBottom":0,"progressBorderColor":"#000000","subtitlesTextShadowBlurRadius":0,"subtitlesBorderColor":"#FFFFFF","subtitlesTextDecoration":"none","toolTipPaddingRight":6,"progressHeight":10,"paddingTop":0,"paddingBottom":0,"subtitlesPaddingBottom":5,"toolTipTextShadowBlurRadius":3,"subtitlesTextShadowHorizontalLength":1,"playbackBarBackgroundOpacity":1,"playbackBarHeadOpacity":1,"subtitlesHorizontalAlign":"center","toolTipTextShadowOpacity":0,"minHeight":50,"height":"100%","toolTipFontStyle":"normal","minWidth":100,"playbackBarProgressBorderRadius":0,"subtitlesOpacity":1,"progressBarBorderRadius":0,"transitionDuration":500,"surfaceReticleColor":"#FFFFFF","propagateClick":false,"toolTipFontColor":"#606060","toolTipPaddingBottom":4,"progressBorderRadius":0,"class":"ViewerArea","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarLeft":0,"playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipFontWeight":"normal","firstTransitionDuration":0,"progressBarBorderSize":0,"subtitlesBorderSize":0,"toolTipShadowSpread":0,"playbackBarHeadShadowColor":"#000000","progressLeft":0,"toolTipShadowColor":"#333333","vrPointerSelectionTime":2000,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesBottom":50,"progressBorderSize":0,"subtitlesPaddingRight":5,"playbackBarHeadBorderRadius":0,"subtitlesShadow":false,"toolTipPaddingTop":4,"vrPointerSelectionColor":"#FF6600","toolTipBorderSize":1,"toolTipDisplayTime":600,"surfaceReticleSelectionOpacity":1,"subtitlesTextShadowOpacity":1,"surfaceReticleOpacity":0.6,"toolTipOpacity":1,"playbackBarHeadShadowBlurRadius":3,"subtitlesBackgroundColor":"#000000","playbackBarHeadShadowVerticalLength":0,"borderRadius":0,"toolTipShadowHorizontalLength":0,"toolTipShadowBlurRadius":3,"subtitlesPaddingTop":5,"playbackBarProgressOpacity":1,"playbackBarBottom":5,"subtitlesEnabled":true,"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0},{"viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","displayPlaybackBar":true,"zoomEnabled":true,"touchControlMode":"drag_rotation","arrowKeysAction":"translate","gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","aaEnabled":true,"buttonZoomIn":"this.IconButton_A8240BDA_A4D4_A136_41D8_86A8AE3DE0DA","surfaceSelectionEnabled":false,"id":"MainViewerPanoramaPlayer"},{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","camera":"this.panorama_B479F1AF_A4D5_616E_41E2_0C57AEB48CD2_camera","media":"this.panorama_B479F1AF_A4D5_616E_41E2_0C57AEB48CD2","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"thumbnailUrl":"media/panorama_B479F1AF_A4D5_616E_41E2_0C57AEB48CD2_t.jpg","vfov":180,"hfovMax":130,"label":trans('panorama_B479F1AF_A4D5_616E_41E2_0C57AEB48CD2.label'),"hfov":360,"class":"Panorama","frames":[{"cube":{"levels":[{"width":24576,"class":"TiledImageResourceLevel","url":"media/panorama_B479F1AF_A4D5_616E_41E2_0C57AEB48CD2_0/{face}/0/{row}_{column}.jpg","height":4096,"tags":"ondemand","rowCount":4,"colCount":24},{"width":12288,"class":"TiledImageResourceLevel","url":"media/panorama_B479F1AF_A4D5_616E_41E2_0C57AEB48CD2_0/{face}/1/{row}_{column}.jpg","height":2048,"tags":"ondemand","rowCount":2,"colCount":12},{"width":6144,"class":"TiledImageResourceLevel","url":"media/panorama_B479F1AF_A4D5_616E_41E2_0C57AEB48CD2_0/{face}/2/{row}_{column}.jpg","height":1024,"tags":["ondemand","preload"],"rowCount":1,"colCount":6},{"width":12288,"class":"TiledImageResourceLevel","url":"media/panorama_B479F1AF_A4D5_616E_41E2_0C57AEB48CD2_0/{face}/vr2gen/0.jpg","height":2048,"tags":"mobilevr2gen","rowCount":1,"colCount":6}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_B479F1AF_A4D5_616E_41E2_0C57AEB48CD2_t.jpg"}],"partial":false,"pitch":0,"data":{"label":"vg"},"id":"panorama_B479F1AF_A4D5_616E_41E2_0C57AEB48CD2"},{"paddingTop":0,"data":{"name":"Button1172"},"width":117,"verticalAlign":"middle","minHeight":0,"backgroundOpacity":0,"cursor":"hand","id":"IconButton_A8240BDA_A4D4_A136_41D8_86A8AE3DE0DA","minWidth":0,"class":"IconButton","shadow":false,"propagateClick":false,"pressedIconURL":"skin/IconButton_A8240BDA_A4D4_A136_41D8_86A8AE3DE0DA_pressed.png","transparencyActive":true,"iconURL":"skin/IconButton_A8240BDA_A4D4_A136_41D8_86A8AE3DE0DA.png","top":"14.55%","height":80,"paddingLeft":0,"paddingRight":0,"toolTipHorizontalAlign":"center","rollOverIconURL":"skin/IconButton_A8240BDA_A4D4_A136_41D8_86A8AE3DE0DA_rollover.png","click":"this.openLink(this.translate('LinkBehaviour_AAAF299C_A4D4_E132_41D5_691745E5B0F2.source'), '_self')","borderSize":0,"borderRadius":0,"left":"46.31%","mode":"push","horizontalAlign":"center","paddingBottom":0},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96}],"restartMovementOnUserInteraction":false,"id":"sequence_AB904EB6_A4D5_637E_41E2_A6DADF832D87"}],"backgroundColorDirection":"vertical","data":{"name":"Player2329","defaultLocale":"pt","textToSpeechConfig":{"stopBackgroundAudio":false,"volume":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"speechOnQuizQuestion":false,"pitch":1,"rate":1},"locales":{"pt":"locale/pt.txt"}},"mediaActivationMode":"window","minHeight":20,"backgroundOpacity":1,"minWidth":20,"width":"100%","id":"rootPlayer","mouseWheelEnabled":true,"overflow":"hidden","verticalAlign":"top","shadow":false,"propagateClick":false,"vrPolyfillScale":0.75,"defaultVRPointer":"laser","desktopMipmappingEnabled":false,"scrollBarMargin":2,"class":"Player","mobileMipmappingEnabled":false,"contentOpaque":false,"scrollBarOpacity":0.5,"paddingLeft":0,"height":"100%","paddingRight":0,"children":["this.MainViewer","this.IconButton_A8240BDA_A4D4_A136_41D8_86A8AE3DE0DA"],"toolTipHorizontalAlign":"center","backgroundColor":["#FFFFFF"],"gap":10,"scrollBarVisible":"rollOver","borderSize":0,"backgroundPreloadEnabled":true,"scrollBarWidth":10,"borderRadius":0,"scrollBarColor":"#000000","scripts":{"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getKey":TDV.Tour.Script.getKey,"isPanorama":TDV.Tour.Script.isPanorama,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"translate":TDV.Tour.Script.translate,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"initAnalytics":TDV.Tour.Script.initAnalytics,"existsKey":TDV.Tour.Script.existsKey,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"shareSocial":TDV.Tour.Script.shareSocial,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getOverlays":TDV.Tour.Script.getOverlays,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"historyGoForward":TDV.Tour.Script.historyGoForward,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizShowScore":TDV.Tour.Script.quizShowScore,"quizStart":TDV.Tour.Script.quizStart,"openLink":TDV.Tour.Script.openLink,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"init":TDV.Tour.Script.init,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"showPopupImage":TDV.Tour.Script.showPopupImage,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"registerKey":TDV.Tour.Script.registerKey,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"clone":TDV.Tour.Script.clone,"historyGoBack":TDV.Tour.Script.historyGoBack,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setMapLocation":TDV.Tour.Script.setMapLocation,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getMainViewer":TDV.Tour.Script.getMainViewer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"unregisterKey":TDV.Tour.Script.unregisterKey,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"cloneCamera":TDV.Tour.Script.cloneCamera,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getPixels":TDV.Tour.Script.getPixels,"textToSpeech":TDV.Tour.Script.textToSpeech,"getMediaByName":TDV.Tour.Script.getMediaByName,"playAudioList":TDV.Tour.Script.playAudioList,"setLocale":TDV.Tour.Script.setLocale,"downloadFile":TDV.Tour.Script.downloadFile,"getComponentByName":TDV.Tour.Script.getComponentByName,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"resumePlayers":TDV.Tour.Script.resumePlayers,"initQuiz":TDV.Tour.Script.initQuiz,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"mixObject":TDV.Tour.Script.mixObject,"setValue":TDV.Tour.Script.setValue,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"showWindow":TDV.Tour.Script.showWindow,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"quizFinish":TDV.Tour.Script.quizFinish,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot},"start":"this.init()","downloadEnabled":false,"paddingTop":0,"layout":"absolute","horizontalAlign":"left","paddingBottom":0};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Wed Apr 3 2024