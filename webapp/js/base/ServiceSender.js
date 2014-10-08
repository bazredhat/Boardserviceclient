"use strict";
var Poker = Poker || {};
Poker.ServiceSender = Class.extend({
    init : function() {
    },
    sendServiceTransportPacket :function(tableId,playerId,classId) {
        var connector = Poker.AppCtx.getConnector();
        
        var comHandler = Poker.AppCtx.getCommunicationManager();
        comHandler.getAvatar(tableId,playerId,classId);
        console.log(classId);
    },    
    sendAvatarRequest : function(tableId,playerId) {
    console.log("****************************************************************sendAvatarRequest*");
        console.log("sending sendAvatarRequest pid = " + Poker.MyPlayer.id);   
        var classId = com.cubeia.games.poker.io.protocol.PlayerPokerStatus.CLASSID;
        this.sendServiceTransportPacket(tableId,playerId,classId);
    }
});


