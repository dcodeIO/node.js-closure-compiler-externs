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
 * @fileoverfiew Definitions for node's crypto module.
 * @see http://nodejs.org/api/crypto.html
 * @see https://github.com/joyent/node/blob/master/lib/crypto.js
 * @externs
 * @author Daniel Wirtz <dcode@dcode.io>
 */

/**
 BEGIN_NODE_INCLUDE
 var crypto = require('crypto');
 END_NODE_INCLUDE
 */

/**
 * @type {Object.<string,*>}
 */
var crypto = {};

/**
 * @typedef {{pfx: string|buffer.Buffer, key: string|buffer.Buffer, passphrase: string, cert: string|buffer.Buffer, ca: Array.<string|buffer.Buffer>, crl: string|Array.<string>, ciphers: string}}
 */
crypto.Credentials;

/**
 * @param {Object.<string,string>=} details
 * @return {crypto.Credentials}
 */
crypto.createCredentials = function(details) {};

/**
 * @param {string} algorithm
 * @return {crypto.Hash}
 */
crypto.createHash = function(algorithm) {};

/**
 * @param {string} algorithm
 * @param {Object} options
 * @constructor
 */
crypto.Hash = function(algorithm, options) {};

/**
 * @param {string|buffer.Buffer} data
 * @param {string=} input_encoding
 */
crypto.Hash.prototype.update = function(data, input_encoding) {};

/**
 * @param {string=} encoding
 * @return {string}
 */
crypto.Hash.prototype.digest = function(encoding) {};

/**
 * @param {string} algorithm
 * @param {string|buffer.Buffer} key
 * @return {crypto.Hmac}
 */
crypto.createHmac = function(algorithm, key) {};

/**
 * @param {string} hmac
 * @param {string|buffer.Buffer} key
 * @param {Object} options
 * @constructor
 */
crypto.Hmac = function(hmac, key, options) {};

/**
 * @param {string|buffer.Buffer} data
 */
crypto.Hmac.prototype.update = function(data) {};

/**
 * @param {string} encoding
 */
crypto.Hmac.prototype.digest = function(encoding) {};

// TODO: Finish...
