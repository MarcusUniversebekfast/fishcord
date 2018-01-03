'use strict';

const WebSocket = require('ws');
const fs = require('fs');
const EventEmitter = require('events').EventEmitter;
const Zlib = require('zlib');
const URL = require('url');
const got = require('got');

/*
 * @param {Object} settings - obj
 * @param {String} settings.token - tok
 * @param {Object} [settings.game] - game
 * @param {Object} [settings.status] - status
 * @example
 * new Client{token: 'token', cacheOfflineUsers: true, autorun: true}
 */
 
 // CLIENT //
 class client extends EventEmitter {
	constructor(settings) {
		super();
		if(!settings.token) proccess.exit(1);
		
		this.status = settings.status === undefined ? null : settings.status;
		this.internals = {};
		this.internals.token = settings.token;
		this._messageCacheLimit = 50;
		this.servers = {};
		this.channels = {};
		this.users = {};
		this.directMessages = {};
		this.presenceStatus = "";
		this.connected = false;
		this.bot = false;
		this.ping = 0;
		this.setEndpoints();
		
		setEndpoints() {
			let DiscordAPI = "https://discordapp.com/api";
			let DiscordCDN = "https://cdn.discordapp.com";
			let ME = DiscordAPI + "/users/@me"
			
			this.Endpoints = {
				API: DiscordAPI,
				CDN: DiscordCDN,
				
				ME: ME,
				ME_CHANNELS: ME + '/channels',
				ME_GUILD: (guildid) => {return ME + '/guilds/' + guildid}
				
				LOGIN:    DiscordAPI + '/auth/login',
				OAUTH:    DiscordAPI + '/oauth/applications/@me',
				GATEWAY:  DiscordAPI + '/gateway',
				SETTINGS: ME + '/settings',
				
				CHANNEL:                     (channelid) => {return DiscordAPI + '/channels/' + channelid},
				CHANNEL_INVITES:             (channelid) => {return DiscordAPI + '/channels/' + channelid + '/invites'},
				CHANNEL_MESSAGE:  (channelid, messageid) => {return DiscordAPI + '/channels/' + channelid + '/messages/' + messageid},
				CHANNEL_MESSAGES:            (channelid) => {return DiscordAPI + '/channels/' + channelid + '/messages'},
				CHANNEL_PIN:      (channelid, messageid) => {return DiscordAPI + '/channels/' + channelid + '/pins/' + messageid},
				CHANNEL_PINS:                (channelid) => {return DiscordAPI + '/channels/' + channelid + '/pins'},
				CHANNEL_PERMISSION:  (channelid, overid) => {return DiscordAPI + '/channels/' + channelid + '/permissions/' + overid},
				CHANNEL_PERMISSIONS:         (channelid) => {return DiscordAPI + '/channels/' + channelid + '/permissions'},
				CHANNEL_TYPING:              (channelid) => {return DiscordAPI + '/channels/' + channelid + '/typing'},
				CHANNELS:                                   {return '/channels'},
				
				GATEWAY:                                    {return DiscordAPI + '/gateway'},
				
				GUILD:                         (guildid) => {return DiscordAPI + '/guilds/' + guildid},
				GUILD_BAN:             (guildid, userid) => {return DiscordAPI + '/guilds/' + guildid + '/bans/' + userid},
				GUILD_CHANNELS:                (guildid) => {return DiscordAPI + '/guilds/' + guildid + '/channels'},
				GUILD_EMBED:                   (guildid) => {return DiscordAPI + '/guilds/' + guildid + '/embed'},
				GUILD_INTEGRATIONS:            (guildid) => {return DiscordAPI + '/guilds/' + guildid + '/integrations'},
				GUILD_INTEGRATION:      (guildid, intid) => {return DiscordAPI + '/guilds/' + guildid + '/integrations/' + intid},
				GUILD_INTEGRATION_SYNC: (guildid, intid) => {return DiscordAPI + '/guilds/' + guildid + '/integrations/' + intid + '/sync'},
				GUILD_INVITES:                 (guildid) => {return DiscordAPI + '/guilds/' + guildid + '/invites'},
				GUILD_MEMBER:          (guildid, userid) => {return DiscordAPI + '/guilds/' + guildid + '/members/' + userid},
				GUILD_ME_NICK:                 (guildid) => {return DiscordAPI + '/guilds/' + guildid + '/members/@me/nick'},
				GUILD_PRUNE:                   (guildid) => {return DiscordAPI + '/guilds/' + guildid + '/prune'},
				GUILD_ROLES:                   (guildid) => {return DiscordAPI + '/guilds/' + guildid + '/roles'},
				GUILD_ROLE:            (guildid, roleid) => {return DiscordAPI + '/guilds/' + guildid + '/roles/' + roleid},
				GUILD_VOICE_REGIONS:           (guildid) => {return DiscordAPI + '/guilds/' + guildid + '/regions'},
				
				GUILDS:                                     {return '/guilds'},
				
				INVITE:                       (inviteid) => {return DiscordAPI + '/invite/' + inviteid},
				
				USER:                           (userid) => {return DiscordAPI + '/users/' + userid},
				USERS:                                      {return '/users'}
			};
		};
	}	
 }