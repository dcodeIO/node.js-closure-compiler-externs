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
 * @fileoverview Definitions for the mime module. 
 * @see https://www.npmjs.com/package/mime
 * @see https://github.com/broofa/node-mime
 * @externs
 * @author Jay Shepherd <zysennz@gmail.com>
 */

/**
 BEGIN_NODE_INCLUDE
 var mime = require('mime');
 END_NODE_INCLUDE
 */


var mime = {R_OK: {}};

/**
 * Define mimetype -> xtension mappings.  Each key is a mime-type that maps
 * to an array of extensions associated with the type.  The first extension is
 * used as the default extension for the type.
 *
 * e.g. mime.define({'audio/ogg', ['oga', 'ogg', 'spx']});
 *
 * If a type declares an extension that has already been defined, an error will
 * be thrown.  To suppress this error and force the extension to be associated
 * with the new type, pass `force`=true.  Alternatively, you may prefix the
 * extension with "*" to map the type to extension, without mapping the
 * extension to the type.
 *
 * e.g. mime.define({'audio/wav', ['wav']}, {'audio/x-wav', ['*wav']});
 *
 *
 * @param typeMap (Object) type definitions
 * @param force (Boolean) if true, force overriding of existing definitions
 */
mime.define = function(typeMap, force) {};

/**
 * Lookup a mime type based on extension
 */
mime.getType = function(path) {};

/**
 * Return file extension associated with a mime type
 */
mime.getExtension = function(type) {};