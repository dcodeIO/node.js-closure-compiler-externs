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
 * @fileoverview Definitions for node's dns module.
 * @see http://nodejs.org/api/dns.html
 * @externs
 * @author Daniel Wirtz <dcode@dcode.io>
 */

/**
 BEGIN_NODE_INCLUDE
 var dns = require('dns');
 END_NODE_INCLUDE
 */

/**
 * @type {Object.<string,*>}
 */
var dns = {};

/**
 * @param {string} domain
 * @param {string|function(Error,string,string)} family
 * @param {function(?Error,string,string)=} callback
 */
dns.lookup = function(domain, family, callback) {};

/**
 * @param {string} domain
 * @param {string|function(?Error,Array)} rrtype
 * @param {function(?Error,Array)=}callback
 */
dns.resolve = function(domain, rrtype, callback) {};

/**
 * @param {string} domain
 * @param {function(?Error,Array)}callback
 */
dns.resolve4 = function(domain, callback) {};

/**
 * @param {string} domain
 * @param {function(?Error,Array)}callback
 */
dns.resolve6 = function(domain, callback) {};

/**
 * @param {string} domain
 * @param {function(?Error,Array)}callback
 */
dns.resolveMx = function(domain, callback) {};

/**
 * @param {string} domain
 * @param {function(?Error,Array)}callback
 */
dns.resolveTxt = function(domain, callback) {};

/**
 * @param {string} domain
 * @param {function(?Error,Array)}callback
 */
dns.resolveSrv = function(domain, callback) {};

/**
 * @param {string} domain
 * @param {function(?Error,Array)}callback
 */
dns.resolveNs = function(domain, callback) {};

/**
 * @param {string} domain
 * @param {function(?Error,Array)}callback
 */
dns.resolveCname = function(domain, callback) {};

/**
 * @param {string} ip
 * @param {function(?Error,Array)}callback
 */
dns.reverse = function(ip, callback) {};

/**
 * @type {string}
 * @const
 */
dns.NODATA;

/**
 * @type {string}
 * @const
 */
dns.FORMERR;

/**
 * @type {string}
 * @const
 */
dns.SERVFAIL;

/**
 * @type {string}
 * @const
 */
dns.NOTFOUND;

/**
 * @type {string}
 * @const
 */
dns.NOTIMP;

/**
 * @type {string}
 * @const
 */
dns.REFUSED;

/**
 * @type {string}
 * @const
 */
dns.BADQUERY;

/**
 * @type {string}
 * @const
 */
dns.BADNAME;

/**
 * @type {string}
 * @const
 */
dns.BADFAMILY;

/**
 * @type {string}
 * @const
 */
dns.BADRESP;

/**
 * @type {string}
 * @const
 */
dns.CONNREFUSED;

/**
 * @type {string}
 * @const
 */
dns.TIMEOUT;

/**
 * @type {string}
 * @const
 */
dns.EOF;

/**
 * @type {string}
 * @const
 */
dns.FILE;

/**
 * @type {string}
 * @const
 */
dns.NOMEM;

/**
 * @type {string}
 * @const
 */
dns.DESTRUCTION;

/**
 * @type {string}
 * @const
 */
dns.BADSTR;

/**
 * @type {string}
 * @const
 */
dns.BADFLAGS;

/**
 * @type {string}
 * @const
 */
dns.NONAME;

/**
 * @type {string}
 * @const
 */
dns.BADHINTS;

/**
 * @type {string}
 * @const
 */
dns.NOTINITIALIZED;

/**
 * @type {string}
 * @const
 */
dns.LOADIPHLPAPI;

/**
 * @type {string}
 * @const
 */
dns.ADDRGETNETWORKPARAMS;

/**
 * @type {string}
 * @const
 */
dns.CANCELLED;
