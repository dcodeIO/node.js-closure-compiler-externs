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
 * @fileoverview Definitions for node's global process object.
 * @see http://nodejs.org/api/process.html
 * @externs
 * @author Daniel Wirtz <dcode@dcode.io>
 */

/**
 * @type {object.<string,*>}
 */
var process = {
    /**
     * @type {stream.ReadableStream}
     */
    stdin: {},

    /**
     * @type {stream.WritableStream}
     */
    stdout: {},

    /**
     * @type {stream.WritableStream}
     */
    stderr: {},

    /**
     * @type {array,<string>}
     */
    argv: {},

    /**
     * @type {string}
     */
    execPath: "",

    /**
     */
    abort: function() {},

    /**
     * @param {string} directory
     */
    chdir: function(directory) {},

    /**
     * @return {string}
     */
    cwd: function() {},

    /**
     * @type {object.<string,string>}
     */
    env: {},

    /**
     * @param {number=} code
     */
    exit: function(code) {},

    /**
     * @return {number}
     */
    getgid: function() {},

    /**
     * @param {number} id
     */
    setgid: function(id) {},

    /**
     * @return {number}
     */
    getuid: function() {},

    /**
     * @param {number} id
     */
    setuid: function(id) {},

    /**
     * @type {!string}
     */
    version: "",

    /**
     * @type {object.<string,string>}
     */
    versions: {},

    /**
     * @type {object.<string,*>}
     */
    config: {},

    /**
     * @param {number} pid
     * @param {string=} signal
     */
    kill: function(pid, signal) {},

    /**
     * @type {number}
     */
    pid: 0,

    /**
     * @type {string}
     */
    title: "",

    /**
     * @type {string}
     */
    arch: "",

    /**
     * @type {string}
     */
    platform: "",

    /**
     * @return {object.<string,number}
     */
    memoryUsage: function() {},

    /**
     * @param {!function} callback
     */
    nextTick: function(callback) {},

    /**
     * @param {number=} mask
     */
    umask: function(mask) {},

    /**
     * @return {number}
     */
    uptime: function() {},

    /**
     * @return {number}
     */
    hrtime: function() {},

    /**
     * @param {string} event
     * @param {!function(...)} callback
     */
    on: function(event, callback) {}
};
