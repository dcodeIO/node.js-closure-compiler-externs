node.js Closure Compiler externs
================================
A collection of node.js externs for use with [Closure Compiler](https://developers.google.com/closure/compiler/docs/overview).

See: [Advanced Compilation and Externs](https://developers.google.com/closure/compiler/docs/api-tutorial3) for details

If you are sitting on (a bunch of) externs which are not yet included, please drop me a note or a pull request.

#### Naming convention ####

* Externs for core components are all lower case
* Externs for [non-core components](https://github.com/dcodeIO/node.js-closure-compiler-externs/tree/master/contrib) begin with an upper case character

#### Node.js specific annotation ####

If an extern file refers to a module that's usually loaded through `var modulename = require("modulename")`, a comment
is added on top of the file. For example for the fs module:

````javascript
/**
 BEGIN_NODE_INCLUDE
 var fs = require('fs');
 END_NODE_INCLUDE
 */
````

**NOTE:** This comment on its own does nothing. But if you stick to the template, that is including the fs module exactly
the same way naming it also "fs", the compiler will know how to handle the module and its subcomponents. For example:

```javascript
// This is bad:
var EventEmitter = require("events").EventEmitter;

// This is good:
var events = require("events");
var EventEmitter = events.EventEmitter;
```

If a file requires a dependency, it is named in the `@fileoverview` declaration. You should then include the dependency
in your compile step, too.

License
-------
Apache License, Version 2.0 - http://www.apache.org/licenses/LICENSE-2.0.html
