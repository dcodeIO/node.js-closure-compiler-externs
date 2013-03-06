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
 * @fileoverview Definitions for node's "https" module. Depends on "events".
 * @see http://nodejs.org/api/https.html
 * @externs
 */

/**
BEGIN_NODE_INCLUDE
var https = require('https');
END_NODE_INCLUDE
 */

var https = {};

/**
 * @constructor
 * @extends {EventEmitter}
 */
https.Server = function() {};

/**
 * @param {...*} var_args
 */
https.Server.prototype.listen = function(var_args) {};

/**
 * @param {function} callback
 */
https.Server.prototype.close = function(callback) {};

/**
 * @param {Object.<string,*>} options
 * @param {function(https.Request, https.Response)=} requestListener
 */
https.createServer = function(options, requestListener) {};

/**
 * @param {Object.<string,*>} options
 * @param {function(http.ClientResponse)} callback
 * @return {http.ClientRequest}
 */
https.request = function(options, callback) {};

/**
 * @param {Object.<string,*>} options
 * @param {function(http.ClientResponse)} callback
 * @return {http.ClientRequest}
 */
https.get = function(options, callback) {};

/**
 * @constructor
 */
https.Agent = function() {};

/**
 * @type {https.Agent}
 */
https.globalAgent;

// TODO: Finish...
