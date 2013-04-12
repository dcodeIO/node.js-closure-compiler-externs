/*
 * Copyright 2012 The Closure Compiler Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Definitions for the ws module. Depends on the events module.
 * @see https://github.com/einaros/ws/blob/master/doc/ws.md
 * @externs
 * @author Daniel Wirtz <dcode@code.io>
 */

/**
 BEGIN_NODE_INCLUDE
 var ws = require('ws');
 END_NODE_INCLUDE
 */

/**
 * @param {string} path
 * @return {ws.WebSocket}
 */
var ws = function(path) {};

/**
 * @param {Object.<string,*>=} options
 * @param {function(...)=} callback
 * @constructor
 * @extends events.EventEmitter
 */
ws.Server = function(options, callback) {};

/**
 * @param {number=} code
 * @param {*=} data
 */
ws.Server.prototype.close = function(code, data) {};

/**
 * @param {http.ServerRequest} request
 * @param {net.Socket} socket
 * @param {string} upgradeHead
 * @param {function(...)} callback
 */
ws.Server.prototype.handleUpgrade = function(request, socket, upgradeHead, callback) {};

/**
 * @param {string} address
 * @param {object.<string,*>=} options
 * @constructor
 * @extends events.EventEmitter
 */
ws.WebSocket = function(address, options) {}

/**
 * @type {number}
 */
ws.WebSocket.prototype.bytesReceived;

/**
 * @type {*}
 */
ws.WebSocket.prototype.readyState;

/**
 * @type {string}
 */
ws.WebSocket.prototype.protocolVersion;

/**
 * @type {string}
 */
ws.WebSocket.prototype.url;

/**
 * @type {object.<string,*>}
 */
ws.WebSocket.prototype.supports;

/**
 * @param {number} code
 * @param {*} data
 */
ws.WebSocket.prototype.close = function(code, data) {};

/**
 */
ws.WebSocket.prototype.pause = function() {};

/**
 * @param {*=} data
 * @param {object.<string,*>=} options
 * @param {boolean=} dontFailWhenClosed
 */
ws.WebSocket.prototype.ping = function(data, options, dontFailWhenClosed) {};

/**
 * @param {*=}data
 * @param {object.<string,*>=} options
 * @param {boolean=} dontFailWhenClosed
 */
ws.WebSocket.prototype.pong = function(data, options, dontFailWhenClosed) {};

/**
 */
ws.WebSocket.prototype.resume = function() {};

/**
 * @param {*} data
 * @param {object.<string,*>=} options
 * @param {function=} callback
 */
ws.WebSocket.prototype.send = function(data, options, callback) {};

/**
 * @param {object.<string,*>|function(string, boolean)} options
 * @param {function(string, boolean)=} callback
 */
ws.WebSocket.prototype.stream = function(options, callback) {};

/**
 */
ws.WebSocket.prototype.terminate = function() {};

/**
 * @type {?function}
 */
ws.WebSocket.prototype.onopen = function() {};

/**
 * @type {?function(*)}
 * @param {*} error
 */
ws.WebSocket.prototype.onerror = function(error) {};

/**
 * @type {?function(number, string)}
 * @param {number} code
 * @param {string} message
 */
ws.WebSocket.prototype.onclose = function(code, message) {};

/**
 * @type {?function(*, object.<string,*>)}
 * @param {*} data
 * @param {object.<string,*>} flags
 */
ws.WebSocket.prototype.onmessage = function(data, flags) {};
