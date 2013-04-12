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
 * @fileoverview Definitions for node's util module. Depends on the stream module.
 * @see http://nodejs.org/api/util.html
 * @see https://github.com/joyent/node/blob/master/lib/util.js
 * @externs
 * @author Daniel Wirtz <dcode@dcode.io>
 */

/**
 BEGIN_NODE_INCLUDE
 var util = require('util');
 END_NODE_INCLUDE
 */

/**
 * @type {Object.<string,*>}
 */
var util = {};

/**
 * @param {string} format
 * @param {...*} var_args
 * @return {string}
 * @nosideeffects
 */
util.format = function(format, var_args) {};

/**
 * @param {string} string
 */
util.debug = function(string) {};

/**
 * @param {...*} var_args
 */
util.error = function(var_args) {};

/**
 * @param {...*} var_args
 */
util.puts = function(var_args) {};

/**
 * @param {...*} var_args
 */
util.print = function(var_args) {};

/**
 * @param {string} string
 */
util.log = function(string) {};

/**
 * @param {*} object
 * @param {boolean=} showHidden
 * @param {number=} depth
 * @param {boolean=} colors
 * @return {string}
 * @nosideeffects
 */
util.inspect = function(object, showHidden, depth, colors) {};

/**
 * @param {*} object
 * @return {boolean}
 * @nosideeffects
 */
util.isArray = function(object) {};

/**
 * @param {*} object
 * @return {boolean}
 * @nosideeffects
 */
util.isRegExp = function(object) {};

/**
 * @param {*} object
 * @return {boolean}
 * @nosideeffects
 */
util.isDate = function(object) {};

/**
 * @param {*} object
 * @return {boolean}
 * @nosideeffects
 */
util.isError = function(object) {};

/**
 * @param {stream.ReadableStream} readableStream
 * @param {stream.WritableStream} writableStream
 * @param {function(...)=} callback
 * @deprecated
 */
util.pump = function(readableStream, writableStream, callback) {};

/**
 * @param {Function} constructor
 * @param {Function} superConstructor
 */
util.inherits = function(constructor, superConstructor) {};
