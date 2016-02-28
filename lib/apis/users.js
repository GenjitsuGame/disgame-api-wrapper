'use strict';

module.exports = function() {
    this.getMyUsers = (params) => {
        return this._checkScope('data_api')
            .then(() => {
                return this.request({
                    url: this.url + '/@me/users',
                    method: 'GET',
                    qs: params
                });
            });
    };
    this.getUser = (discordId) => {
        return this._checkScope('data_api')
            .then(() => {
                return this.request({
                    url: this.url + '/users/' + discordId,
                    method: 'GET'
                });
            });
    };
    this.getUsers = (params) => {
        return this._checkScope('data_api')
            .then(() => {
                return this.request({
                    url: this.url + '/users',
                    method: 'GET',
                    qs: params
                });
            });
    };
    this.registerUser = (discordId) => {
        return this._checkScope('game_client')
            .then(() => this._sign(params))
            .then((sig) => {
                return this.request({
                    url: this.url + '/@me/users/',
                    method: 'POST',
                    body: {discord_id: discordId},
                    headers: {'X-signature': sig}
                });
            });
    };
    this.unregisterUser = (discordId) => {
        return this._checkScope('game_client')
            .then(() => this._sign(params))
            .then((sig) => {
                return this.request({
                    url: this.url + '/@me/users/',
                    method: 'DELETE',
                    body: {discord_id: discordId},
                    headers: {'X-signature': sig}
                });
            });
    };
};