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
 * @fileoverfiew Definitions for node's "stream" module.
 * @see http://nodejs.org/api/stream.html
 * @externs
 * @author Daniel Wirtz <dcode@dcode.io>
 */

/**
 BEGIN_NODE_INCLUDE
 var stream = require('stream');
 END_NODE_INCLUDE
 */

/**
 * @constructor
 */
stream.ReadableStream = function() {};

/**
 * @param {string} event
 * @param {function(...)} callback
 */
stream.ReadableStream.prototype.on = function(event, callback) {};

/**
 * @type {boolean}
 */
stream.ReadableStream.prototype.readable = true;

/**
 * @param {string=} encoding
 */
stream.ReadableStream.prototype.setEncoding = function(encoding) {};

/**
 */
stream.ReadableStream.prototype.pause = function() {};

/**
 */
stream.ReadableStream.prototype.resume = function() {};

/**
 * @param {WriteStream} destination
 * @param {{end: boolean}=} options
 */
stream.ReadableStream.prototype.pipe = function(destination, options) {};

/**
 * @constructor
 */
stream.WritableStream = function() {};

/**
 */
stream.WritableStream.prototype.drain = function() {};

/**
 * @param {string} event
 * @param {function(...)} callback
 */
stream.WritableStream.prototype.on = function(event, callback) {};

/**
 * @type {boolean}
 */
stream.WritableStream.prototype.writable = true;

/**
 * @param {string|buffer} buffer
 * @param {string=} encoding
 */
stream.WritableStream.prototype.write = function(buffer, encoding) {};

/**
 * @param {string|buffer} buffer
 * @param {string=} encoding
 */
stream.WritableStream.prototype.end = function(buffer, encoding) {};

/**
 */
stream.WritableStream.prototype.destroy = function() {};

/**
 */
stream.WritableStream.prototype.destroySoon = function() {};
