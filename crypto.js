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
 * @fileoverfiew Definitions for node's crypto module. Depends on the buffer module.
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
 * @extends stream.Transform
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
 * @extends stream.Transform
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

/**
 * @param {string} algorithm
 * @param {string|buffer.Buffer} password
 * @return {crypto.Cipher}
 */
crypto.createCipher = function(algorithm, password) {};

/**
 * @param {string} algorithm
 * @param {string|buffer.Buffer} key
 * @param {string|buffer.Buffer} iv
 * @return {crypto.Cipher}
 */
crypto.createCipheriv = function(algorithm, key, iv) {};

/**
 * @param {string|buffer.Buffer} cipher
 * @param {string} password
 * @param {Object} options
 * @constructor
 * @extends stream.Transform
 */
crypto.Cipher = function(cipher, password, options) {};

/**
 * @param {string|buffer.Buffer} data
 * @param {string=} input_encoding
 * @param {string=} output_encoding
 * @return {string|buffer.Buffer}
 */
crypto.Cipher.prototype.update = function(data, input_encoding, output_encoding) {};

/**
 * @name crypto.Cipher.prototype.final
 * @function
 * @param {string} output_encoding
 * @return {string|buffer.Buffer}
 */
// crypto.Cipher.prototype.final = function(output_encoding) {};

/**
 * @param {boolean=} auto_padding
 */
crypto.Cipher.prototype.setAutoPadding = function(auto_padding) {};

/**
 * @param {string|crypto.Cipheriv} cipher
 * @param {string|buffer.Buffer} key
 * @param {string|buffer.Buffer} iv
 * @constructor
 * @extends crypto.Cipher
 */
crypto.Cipheriv = function(cipher, key, iv) {};

/**
 * @param {string} algorithm
 * @param {string|buffer.Buffer} password
 * @return {crypto.Decipher}
 */
crypto.createDecipher = function(algorithm, password) {};

/**
 * @param {string} algorithm
 * @param {string|buffer.Buffer} key
 * @param {string|buffer.Buffer} iv
 * @return {crypto.Decipher}
 */
crypto.createDecipheriv = function(algorithm, key, iv) {};

/**
 * @param {string|buffer.Buffer|crypto.Decipher} cipher
 * @param {string|buffer.Buffer} password
 * @param {Object} options
 * @constructor
 * @extends stream.Transform
 */
crypto.Decipher = function(cipher, password, options) {}

/**
 * @param {string|buffer.Buffer} data
 * @param {string=} input_encoding
 * @param {string=} output_encoding
 * @return {string|buffer.Buffer}
 */
crypto.Decipher.prototype.update = function(data, input_encoding, output_encoding) {};

/**
 * @name crypto.Decipher.prototype.final
 * @function
 * @param {string} output_encoding
 * @return {string|buffer.Buffer}
 */
// crypto.Decipher.prototype.final = function(output_encoding) {};

/**
 * @param {boolean=} auto_padding
 */
crypto.Decipher.prototype.setAutoPadding = function(auto_padding) {};

/**
 * @param {string|buffer.Buffer|crypto.Decipheriv} cipher
 * @param {string|buffer.Buffer} key
 * @param {string|buffer.Buffer} iv
 * @param {Object} options
 * @constructor
 * @extends crypto.Cipher
 */
crypto.Decipheriv = function(cipher, key, iv, options) {};

/**
 * @type {crypto.Cipher.prototype.final}
 */
crypto.Decipheriv.prototype.finaltol;

/**
 * @param {string} algorithm
 * @return {crypto.Signer}
 */
crypto.createSign = function(algorithm) {};

/**
 * @param {string} algorithm
 * @param {Object} options
 * @constructor
 * @extends stream.Writable
 */
crypto.Sign = function(algorithm, options) {};

/**
 * @param {string|buffer.Buffer} data
 */
crypto.Sign.prototype.update = function(data) {};

/**
 * @param {string} private_key
 * @param {string=} output_format
 * @return {string|buffer.Buffer}
 */
crypto.Sign.prototype.sign = function(private_key, output_format) {};

/**
 * @type {crypto.Sign}
 */
crypto.Signer; // Not sure about API docs / source diff

// TODO: Finish...
