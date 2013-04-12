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
 * @fileoverview Definitions for node's timers module.
 * @see http://nodejs.org/api/timers.html
 * @see https://github.com/joyent/node/blob/master/lib/timers.js
 * @externs
 * @author Daniel Wirtz <dcode@dcode.io>
 */

/**
 * @param {function(...[*])} callback
 * @param {number} delay
 * @param {...*} var_args
 * @return {*}
 */
function setTimeout(callback, delay, var_args) {};

/**
 * @param {*} timeoutId
 */
function clearTimeout(timeoutId) {};

/**
 * @param {function(...[*])} callback
 * @param {number} delay
 * @param {...*} var_args
 * @return {*}
 */
function setInterval(callback, delay, var_args) {};

/**
 * @param {*} intervalId
 */
function clearInterval(intervalId) {};
