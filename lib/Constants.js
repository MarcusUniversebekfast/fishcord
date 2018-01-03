"use strict";

module.exports = {
  Endpoints: {
	  BASE_URL:				"https://discordapp.com/api",
	  CHANNEL:						(channelid) => "/channels/" + channelid,
	  CHANNEL_INVITES:				(channelid) => "/channels/" + channelid + "/invites",
	  CHANNEL_MESSAGE:	  (channelid,messageid) => "/channels/" + channelid + "/messages/" + messageid,
	  CHANNEL_MESSAGES:	 (channelid, messageid) => "/channels/" + channelid + "/messages"
	  CHANNEL_PIN:		 (channelid, messageid) => "/channels/" + channelid + "/pins/" + msgID,
	  CHANNEL_PINS:					(channelid) => "/channels/" + channelid + "/pins",
	  CHANNEL_PERMISSIONS:	(channelid, overid) => "/channels/" + channelid + "/permission/" + overid,
	  CHANNEL_PERMISSIONS:			(channelid) => "/channels/" + channelid + "/permissions"
	  CHANNEL_TYPING:			   (channnelid) => "/channels/" + channelid + "/typing",
	  CHANNELS:									   "/channels",
	  GATEWAY:								       "/gateway"
	  GUILD:                          (guildid) => "/guilds/" + guildid,
	  GUILD_BAN:		      (guildid, userid) => "/guilds/" + guildid + "/bans/" + userid
	  GUILD_CHANNELS:                 (guildid) => "/guilds/" + guildid + "/channels",
	  GUILD_EMBED:                    (guildid) => "/guilds/" + guildid + "/embed",
	  GUILD_INTEGRATIONS:             (guildid) => "/guilds/" + guildid + "/integrations",
	  GUILD_INTEGRATION:       (guildid, intid) => "/guilds/" + guildid + "/integrations/" + intid,
	  GUILD_INTEGRATION_SYNC:  (guildid, intid) => "/guilds/" + guildid + "/integrations/" + intid + "/sync",
	  GUILD_INVITES:                  (guildid) => "/guilds/" + guildid + "/invites",
	  GUILD_MEMBER:           (guildid, userid) => "/guilds/" + guildid + "/members/" + userid,
	  GUILD_ME_NICK:                  (guildid) => "/guilds/" + guildid + "/members/@me/nick",
	  GUILD_PRUNE:                    (guildid) => "/guilds/" + guildid + "/prune",
	  GUILD_ROLES:                    (guildid) => "/guilds/" + guildid + "/roles",
	  GUILD_ROLE:             (guildid, roleid) => "/guilds/" + guildid + "/roles/" + roleid,
	  GUILD_VOICE_REGIONS:            (guildid) => "/guilds/" + guildid + "/regions",
	  GUILDS:                                      "/guilds",
	  INVITE:						 (inviteid) => "/invite/" + inviteid,
	  ME:										   "/users/@me",
	  ME_CHANNELS: 								   "/users/@me/channels",
	  ME_GUILD:						  (guildid) => "/users/@me/guilds" + guildid,
	  USER:							   (userid) => "/users/" + userid,
	  USERS:									   "/users"
	},
  GatewayOPCodes: {
	  EVENT: 0,
	  HEARTBEAT: 1,
	  IDENTIFY: 2,
	  STATUS_UPDATE: 3,
	  VOICE_STATE_UPDATE: 4,
	  VOICE_SERVER_PING: 5,
	  RESUME: 6,
	  RECONNECT: 7,
	  GET_GUILD_MEMBERS: 8,
	  INVALID_SESSION: 9,
	  HELLO: 10,
	  HEARTBEAD_ACK: 11,
	  SYNC_GUILD: 12
  },
  Permissions: {
	  createInstantInvite: 1,
	  kickMembers: 1 << 1,
      banMembers: 1 << 2,
      administrator: 1 << 3,
      manageChannels: 1 << 4,
      manageGuild: 1 << 5,
      readMessages: 1 << 10,
      sendMessages: 1 << 11,
      sendTTSMessages: 1 << 12,
      manageMessages: 1 << 13,
      embedLinks: 1 << 14,
      attachFiles: 1 << 15,
      readMessageHistory: 1 << 16,
      mentionEveryone: 1 << 17,
      voiceConnect: 1 << 20,
      voiceSpeak: 1 << 21,
      voiceMuteMembers: 1 << 22,
      voiceDeafenMembers: 1 << 23,
      voiceMoveMembers: 1 << 24,
      voiceUseVAD: 1 << 25,
      changeNickname: 1 << 26,
      manageNicknames: 1 << 27,
      manageRoles: 1 << 28,
      all: 0b11111111100111111110000111111
  },
  StatusTypes: {
	  ONLINE: "online",
	  OFFLINE: "offline",
	  IDLE: "idle"
  },
  ChannelTypes: {
	  TEXT: "text",
	  VOICE: "voice"
  },
  Events: {
	  CONNECTED: 0,
	  DISCONNECTED: 0,
	  GATEWAY_OPEN: 0,
	  GATEWAY_DISPATCH: 0,
	  GATEWAY_DISCONNECT: 0,
	  GATEWAY_UNHANDLED_MESSAGE: 0,
	  VOICESOCKET_OPEN: 0,
	  VOICESOCKET_DISCONNECT: 0,
	  VOICESOCKET_UNHANDLED_MESSAGE: 0,
	  VOICE_READY: 0,
	  REQUEST_AUTH_LOGIN_ERROR: 0, 
	  REQUEST_AUTH_LOGIN_SUCCESS: 0,
	  REQUEST_GATEWAY_ERROR: 0, 
	  REQUEST_GATEWAY_SUCCESS: 0
	  
	  //ADD MORE//
  }
}
