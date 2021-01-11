["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/result/dependentresult.js"],"~:js","goog.provide(\"goog.result.DependentResult\");\ngoog.require(\"goog.result.Result\");\ngoog.result.DependentResult = function() {\n};\ngoog.result.DependentResult.prototype.getParentResults = function() {\n};\n","~:source","// Copyright 2012 The Closure Library Authors. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\n/**\n * @fileoverview An interface for Results whose eventual value depends on the\n *     value of one or more other Results.\n */\n\ngoog.provide('goog.result.DependentResult');\n\ngoog.require('goog.result.Result');\n\n\n\n/**\n * A DependentResult represents a Result whose eventual value depends on the\n * value of one or more other Results. For example, the Result returned by\n * @see goog.result.chain or @see goog.result.combine is dependent on the\n * Results given as arguments.\n * @interface\n * @extends {goog.result.Result}\n * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration\n */\ngoog.result.DependentResult = function() {};\n\n\n/**\n *\n * @return {!Array<!goog.result.Result>} A list of Results which will affect\n *     the eventual value of this Result. The returned Results may themselves\n *     have parent results, which would be grandparents of this Result;\n *     grandparents (and any other ancestors) are not included in this list.\n */\ngoog.result.DependentResult.prototype.getParentResults = function() {};\n","~:compiled-at",1610337120028,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.result.dependentresult.js\",\n\"lineCount\":7,\n\"mappings\":\"AAmBAA,IAAA,CAAKC,OAAL,CAAa,6BAAb,CAAA;AAEAD,IAAA,CAAKE,OAAL,CAAa,oBAAb,CAAA;AAaAF,IAAA,CAAKG,MAAL,CAAYC,eAAZ,GAA8BC,QAAQ,EAAG;CAAzC;AAUAL,IAAA,CAAKG,MAAL,CAAYC,eAAZ,CAA4BE,SAA5B,CAAsCC,gBAAtC,GAAyDC,QAAQ,EAAG;CAApE;;\",\n\"sources\":[\"goog/result/dependentresult.js\"],\n\"sourcesContent\":[\"// Copyright 2012 The Closure Library Authors. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\n/**\\n * @fileoverview An interface for Results whose eventual value depends on the\\n *     value of one or more other Results.\\n */\\n\\ngoog.provide('goog.result.DependentResult');\\n\\ngoog.require('goog.result.Result');\\n\\n\\n\\n/**\\n * A DependentResult represents a Result whose eventual value depends on the\\n * value of one or more other Results. For example, the Result returned by\\n * @see goog.result.chain or @see goog.result.combine is dependent on the\\n * Results given as arguments.\\n * @interface\\n * @extends {goog.result.Result}\\n * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration\\n */\\ngoog.result.DependentResult = function() {};\\n\\n\\n/**\\n *\\n * @return {!Array<!goog.result.Result>} A list of Results which will affect\\n *     the eventual value of this Result. The returned Results may themselves\\n *     have parent results, which would be grandparents of this Result;\\n *     grandparents (and any other ancestors) are not included in this list.\\n */\\ngoog.result.DependentResult.prototype.getParentResults = function() {};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"result\",\"DependentResult\",\"goog.result.DependentResult\",\"prototype\",\"getParentResults\",\"goog.result.DependentResult.prototype.getParentResults\"]\n}\n"]