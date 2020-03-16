(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{3480:
/*!*************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/language/typescript/tsMode.js + 2 modules ***!
  \*************************************************************************************/
/*! exports provided: setupTypeScript, setupJavaScript, getJavaScriptWorker, getTypeScriptWorker */
/*! all exports used */function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var extendStatics,IndentStyle,__awaiter=function(thisArg,_arguments,P,generator){return new(P||(P=Promise))(function(resolve,reject){function fulfilled(value){try{step(generator.next(value))}catch(e){reject(e)}}function rejected(value){try{step(generator.throw(value))}catch(e){reject(e)}}function step(result){result.done?resolve(result.value):new P(function(resolve){resolve(result.value)}).then(fulfilled,rejected)}step((generator=generator.apply(thisArg,_arguments||[])).next())})},__generator=function(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=(t=_.trys).length>0&&t[t.length-1])&&(6===op[0]||2===op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}},WorkerManager=function(){function WorkerManager(modeId,defaults){var _this=this;this._modeId=modeId,this._defaults=defaults,this._worker=null,this._idleCheckInterval=setInterval(function(){return _this._checkIfIdle()},3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(function(){return _this._stopWorker()}),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange(function(){return _this._updateExtraLibs()})}return WorkerManager.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},WorkerManager.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()},WorkerManager.prototype._updateExtraLibs=function(){return __awaiter(this,void 0,void 0,function(){var myToken,proxy;return __generator(this,function(_a){switch(_a.label){case 0:return this._worker?(myToken=++this._updateExtraLibsToken,[4,this._worker.getProxy()]):[2];case 1:return proxy=_a.sent(),this._updateExtraLibsToken!==myToken?[2]:(proxy.updateExtraLibs(this._defaults.getExtraLibs()),[2])}})})},WorkerManager.prototype._checkIfIdle=function(){if(this._worker){var maxIdleTime=this._defaults.getWorkerMaxIdleTime(),timePassedSinceLastUsed=Date.now()-this._lastUsedTime;maxIdleTime>0&&timePassedSinceLastUsed>maxIdleTime&&this._stopWorker()}},WorkerManager.prototype._getClient=function(){var _this=this;if(this._lastUsedTime=Date.now(),!this._client){this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs()}});var p=this._worker.getProxy();this._defaults.getEagerModelSync()&&(p=p.then(function(worker){return _this._worker.withSyncedResources(monaco.editor.getModels().filter(function(model){return model.getModeId()===_this._modeId}).map(function(model){return model.uri}))})),this._client=p}return this._client},WorkerManager.prototype.getLanguageServiceWorker=function(){for(var _client,_this=this,resources=[],_i=0;_i<arguments.length;_i++)resources[_i]=arguments[_i];return this._getClient().then(function(client){_client=client}).then(function(_){return _this._worker.withSyncedResources(resources)}).then(function(_){return _client})},WorkerManager}(),__extends=(extendStatics=function(d,b){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])})(d,b)},function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}),Uri=monaco.Uri,Range=monaco.Range;function flattenDiagnosticMessageText(messageText,newLine){if("string"==typeof messageText)return messageText;for(var diagnosticChain=messageText,result="",indent=0;diagnosticChain;){if(indent){result+=newLine;for(var i=0;i<indent;i++)result+="  "}result+=diagnosticChain.messageText,indent++,diagnosticChain=diagnosticChain.next}return result}function displayPartsToString(displayParts){return displayParts?displayParts.map(function(displayPart){return displayPart.text}).join(""):""}!function(IndentStyle){IndentStyle[IndentStyle.None=0]="None",IndentStyle[IndentStyle.Block=1]="Block",IndentStyle[IndentStyle.Smart=2]="Smart"}(IndentStyle||(IndentStyle={}));var Adapter=function(){function Adapter(_worker){this._worker=_worker}return Adapter.prototype._positionToOffset=function(uri,position){return monaco.editor.getModel(uri).getOffsetAt(position)},Adapter.prototype._offsetToPosition=function(uri,offset){return monaco.editor.getModel(uri).getPositionAt(offset)},Adapter.prototype._textSpanToRange=function(uri,span){var p1=this._offsetToPosition(uri,span.start),p2=this._offsetToPosition(uri,span.start+span.length);return{startLineNumber:p1.lineNumber,startColumn:p1.column,endLineNumber:p2.lineNumber,endColumn:p2.column}},Adapter}(),DiagnostcsAdapter=function(_super){function DiagnostcsAdapter(_defaults,_selector,worker){var _this=_super.call(this,worker)||this;_this._defaults=_defaults,_this._selector=_selector,_this._disposables=[],_this._listener=Object.create(null);var onModelAdd=function(model){if(model.getModeId()===_selector){var handle,changeSubscription=model.onDidChangeContent(function(){clearTimeout(handle),handle=setTimeout(function(){return _this._doValidate(model.uri)},500)});_this._listener[model.uri.toString()]={dispose:function(){changeSubscription.dispose(),clearTimeout(handle)}},_this._doValidate(model.uri)}},onModelRemoved=function(model){monaco.editor.setModelMarkers(model,_this._selector,[]);var key=model.uri.toString();_this._listener[key]&&(_this._listener[key].dispose(),delete _this._listener[key])};_this._disposables.push(monaco.editor.onDidCreateModel(onModelAdd)),_this._disposables.push(monaco.editor.onWillDisposeModel(onModelRemoved)),_this._disposables.push(monaco.editor.onDidChangeModelLanguage(function(event){onModelRemoved(event.model),onModelAdd(event.model)})),_this._disposables.push({dispose:function(){for(var _i=0,_a=monaco.editor.getModels();_i<_a.length;_i++){var model=_a[_i];onModelRemoved(model)}}});var recomputeDiagostics=function(){for(var _i=0,_a=monaco.editor.getModels();_i<_a.length;_i++){var model=_a[_i];onModelRemoved(model),onModelAdd(model)}};return _this._disposables.push(_this._defaults.onDidChange(recomputeDiagostics)),_this._disposables.push(_this._defaults.onDidExtraLibsChange(recomputeDiagostics)),monaco.editor.getModels().forEach(onModelAdd),_this}return __extends(DiagnostcsAdapter,_super),DiagnostcsAdapter.prototype.dispose=function(){this._disposables.forEach(function(d){return d&&d.dispose()}),this._disposables=[]},DiagnostcsAdapter.prototype._doValidate=function(resource){var _this=this;this._worker(resource).then(function(worker){if(!monaco.editor.getModel(resource))return null;var promises=[],_a=_this._defaults.getDiagnosticsOptions(),noSyntaxValidation=_a.noSyntaxValidation,noSemanticValidation=_a.noSemanticValidation;return noSyntaxValidation||promises.push(worker.getSyntacticDiagnostics(resource.toString())),noSemanticValidation||promises.push(worker.getSemanticDiagnostics(resource.toString())),Promise.all(promises)}).then(function(diagnostics){if(!diagnostics||!monaco.editor.getModel(resource))return null;var markers=diagnostics.reduce(function(p,c){return c.concat(p)},[]).map(function(d){return _this._convertDiagnostics(resource,d)});monaco.editor.setModelMarkers(monaco.editor.getModel(resource),_this._selector,markers)}).then(void 0,function(err){console.error(err)})},DiagnostcsAdapter.prototype._convertDiagnostics=function(resource,diag){var _a=this._offsetToPosition(resource,diag.start),startLineNumber=_a.lineNumber,startColumn=_a.column,_b=this._offsetToPosition(resource,diag.start+diag.length),endLineNumber=_b.lineNumber,endColumn=_b.column;return{severity:monaco.MarkerSeverity.Error,startLineNumber:startLineNumber,startColumn:startColumn,endLineNumber:endLineNumber,endColumn:endColumn,message:flattenDiagnosticMessageText(diag.messageText,"\n")}},DiagnostcsAdapter}(Adapter),SuggestAdapter=function(_super){function SuggestAdapter(){return null!==_super&&_super.apply(this,arguments)||this}return __extends(SuggestAdapter,_super),Object.defineProperty(SuggestAdapter.prototype,"triggerCharacters",{get:function(){return["."]},enumerable:!0,configurable:!0}),SuggestAdapter.prototype.provideCompletionItems=function(model,position,_context,token){var wordInfo=model.getWordUntilPosition(position),wordRange=new Range(position.lineNumber,wordInfo.startColumn,position.lineNumber,wordInfo.endColumn),resource=model.uri,offset=this._positionToOffset(resource,position);return this._worker(resource).then(function(worker){return worker.getCompletionsAtPosition(resource.toString(),offset)}).then(function(info){if(info)return{suggestions:info.entries.map(function(entry){var range=wordRange;if(entry.replacementSpan){var p1=model.getPositionAt(entry.replacementSpan.start),p2=model.getPositionAt(entry.replacementSpan.start+entry.replacementSpan.length);range=new Range(p1.lineNumber,p1.column,p2.lineNumber,p2.column)}return{uri:resource,position:position,range:range,label:entry.name,insertText:entry.name,sortText:entry.sortText,kind:SuggestAdapter.convertKind(entry.kind)}})}})},SuggestAdapter.prototype.resolveCompletionItem=function(_model,_position,item,token){var _this=this,myItem=item,resource=myItem.uri,position=myItem.position;return this._worker(resource).then(function(worker){return worker.getCompletionEntryDetails(resource.toString(),_this._positionToOffset(resource,position),myItem.label)}).then(function(details){return details?{uri:resource,position:position,label:details.name,kind:SuggestAdapter.convertKind(details.kind),detail:displayPartsToString(details.displayParts),documentation:{value:displayPartsToString(details.documentation)}}:myItem})},SuggestAdapter.convertKind=function(kind){switch(kind){case Kind.primitiveType:case Kind.keyword:return monaco.languages.CompletionItemKind.Keyword;case Kind.variable:case Kind.localVariable:return monaco.languages.CompletionItemKind.Variable;case Kind.memberVariable:case Kind.memberGetAccessor:case Kind.memberSetAccessor:return monaco.languages.CompletionItemKind.Field;case Kind.function:case Kind.memberFunction:case Kind.constructSignature:case Kind.callSignature:case Kind.indexSignature:return monaco.languages.CompletionItemKind.Function;case Kind.enum:return monaco.languages.CompletionItemKind.Enum;case Kind.module:return monaco.languages.CompletionItemKind.Module;case Kind.class:return monaco.languages.CompletionItemKind.Class;case Kind.interface:return monaco.languages.CompletionItemKind.Interface;case Kind.warning:return monaco.languages.CompletionItemKind.File}return monaco.languages.CompletionItemKind.Property},SuggestAdapter}(Adapter),SignatureHelpAdapter=function(_super){function SignatureHelpAdapter(){var _this=null!==_super&&_super.apply(this,arguments)||this;return _this.signatureHelpTriggerCharacters=["(",","],_this}return __extends(SignatureHelpAdapter,_super),SignatureHelpAdapter.prototype.provideSignatureHelp=function(model,position,token){var _this=this,resource=model.uri;return this._worker(resource).then(function(worker){return worker.getSignatureHelpItems(resource.toString(),_this._positionToOffset(resource,position))}).then(function(info){if(info){var ret={activeSignature:info.selectedItemIndex,activeParameter:info.argumentIndex,signatures:[]};return info.items.forEach(function(item){var signature={label:"",documentation:null,parameters:[]};signature.label+=displayPartsToString(item.prefixDisplayParts),item.parameters.forEach(function(p,i,a){var label=displayPartsToString(p.displayParts),parameter={label:label,documentation:displayPartsToString(p.documentation)};signature.label+=label,signature.parameters.push(parameter),i<a.length-1&&(signature.label+=displayPartsToString(item.separatorDisplayParts))}),signature.label+=displayPartsToString(item.suffixDisplayParts),ret.signatures.push(signature)}),ret}})},SignatureHelpAdapter}(Adapter),QuickInfoAdapter=function(_super){function QuickInfoAdapter(){return null!==_super&&_super.apply(this,arguments)||this}return __extends(QuickInfoAdapter,_super),QuickInfoAdapter.prototype.provideHover=function(model,position,token){var _this=this,resource=model.uri;return this._worker(resource).then(function(worker){return worker.getQuickInfoAtPosition(resource.toString(),_this._positionToOffset(resource,position))}).then(function(info){if(info){var documentation=displayPartsToString(info.documentation),tags=info.tags?info.tags.map(function(tag){var label="*@"+tag.name+"*";return tag.text?label+(tag.text.match(/\r\n|\n/g)?" \n"+tag.text:" - "+tag.text):label}).join("  \n\n"):"",contents=displayPartsToString(info.displayParts);return{range:_this._textSpanToRange(resource,info.textSpan),contents:[{value:"```js\n"+contents+"\n```\n"},{value:documentation+(tags?"\n\n"+tags:"")}]}}})},QuickInfoAdapter}(Adapter),OccurrencesAdapter=function(_super){function OccurrencesAdapter(){return null!==_super&&_super.apply(this,arguments)||this}return __extends(OccurrencesAdapter,_super),OccurrencesAdapter.prototype.provideDocumentHighlights=function(model,position,token){var _this=this,resource=model.uri;return this._worker(resource).then(function(worker){return worker.getOccurrencesAtPosition(resource.toString(),_this._positionToOffset(resource,position))}).then(function(entries){if(entries)return entries.map(function(entry){return{range:_this._textSpanToRange(resource,entry.textSpan),kind:entry.isWriteAccess?monaco.languages.DocumentHighlightKind.Write:monaco.languages.DocumentHighlightKind.Text}})})},OccurrencesAdapter}(Adapter),DefinitionAdapter=function(_super){function DefinitionAdapter(){return null!==_super&&_super.apply(this,arguments)||this}return __extends(DefinitionAdapter,_super),DefinitionAdapter.prototype.provideDefinition=function(model,position,token){var _this=this,resource=model.uri;return this._worker(resource).then(function(worker){return worker.getDefinitionAtPosition(resource.toString(),_this._positionToOffset(resource,position))}).then(function(entries){if(entries){for(var result=[],_i=0,entries_1=entries;_i<entries_1.length;_i++){var entry=entries_1[_i],uri=Uri.parse(entry.fileName);monaco.editor.getModel(uri)&&result.push({uri:uri,range:_this._textSpanToRange(uri,entry.textSpan)})}return result}})},DefinitionAdapter}(Adapter),ReferenceAdapter=function(_super){function ReferenceAdapter(){return null!==_super&&_super.apply(this,arguments)||this}return __extends(ReferenceAdapter,_super),ReferenceAdapter.prototype.provideReferences=function(model,position,context,token){var _this=this,resource=model.uri;return this._worker(resource).then(function(worker){return worker.getReferencesAtPosition(resource.toString(),_this._positionToOffset(resource,position))}).then(function(entries){if(entries){for(var result=[],_i=0,entries_2=entries;_i<entries_2.length;_i++){var entry=entries_2[_i],uri=Uri.parse(entry.fileName);monaco.editor.getModel(uri)&&result.push({uri:uri,range:_this._textSpanToRange(uri,entry.textSpan)})}return result}})},ReferenceAdapter}(Adapter),OutlineAdapter=function(_super){function OutlineAdapter(){return null!==_super&&_super.apply(this,arguments)||this}return __extends(OutlineAdapter,_super),OutlineAdapter.prototype.provideDocumentSymbols=function(model,token){var _this=this,resource=model.uri;return this._worker(resource).then(function(worker){return worker.getNavigationBarItems(resource.toString())}).then(function(items){if(items){var convert=function(bucket,item,containerLabel){var result={name:item.text,detail:"",kind:outlineTypeTable[item.kind]||monaco.languages.SymbolKind.Variable,range:_this._textSpanToRange(resource,item.spans[0]),selectionRange:_this._textSpanToRange(resource,item.spans[0]),containerName:containerLabel};if(item.childItems&&item.childItems.length>0)for(var _i=0,_a=item.childItems;_i<_a.length;_i++){var child=_a[_i];convert(bucket,child,result.name)}bucket.push(result)},result=[];return items.forEach(function(item){return convert(result,item)}),result}})},OutlineAdapter}(Adapter),Kind=function(){function Kind(){}return Kind.unknown="",Kind.keyword="keyword",Kind.script="script",Kind.module="module",Kind.class="class",Kind.interface="interface",Kind.type="type",Kind.enum="enum",Kind.variable="var",Kind.localVariable="local var",Kind.function="function",Kind.localFunction="local function",Kind.memberFunction="method",Kind.memberGetAccessor="getter",Kind.memberSetAccessor="setter",Kind.memberVariable="property",Kind.constructorImplementation="constructor",Kind.callSignature="call",Kind.indexSignature="index",Kind.constructSignature="construct",Kind.parameter="parameter",Kind.typeParameter="type parameter",Kind.primitiveType="primitive type",Kind.label="label",Kind.alias="alias",Kind.const="const",Kind.let="let",Kind.warning="warning",Kind}(),outlineTypeTable=Object.create(null);outlineTypeTable[Kind.module]=monaco.languages.SymbolKind.Module,outlineTypeTable[Kind.class]=monaco.languages.SymbolKind.Class,outlineTypeTable[Kind.enum]=monaco.languages.SymbolKind.Enum,outlineTypeTable[Kind.interface]=monaco.languages.SymbolKind.Interface,outlineTypeTable[Kind.memberFunction]=monaco.languages.SymbolKind.Method,outlineTypeTable[Kind.memberVariable]=monaco.languages.SymbolKind.Property,outlineTypeTable[Kind.memberGetAccessor]=monaco.languages.SymbolKind.Property,outlineTypeTable[Kind.memberSetAccessor]=monaco.languages.SymbolKind.Property,outlineTypeTable[Kind.variable]=monaco.languages.SymbolKind.Variable,outlineTypeTable[Kind.const]=monaco.languages.SymbolKind.Variable,outlineTypeTable[Kind.localVariable]=monaco.languages.SymbolKind.Variable,outlineTypeTable[Kind.variable]=monaco.languages.SymbolKind.Variable,outlineTypeTable[Kind.function]=monaco.languages.SymbolKind.Function,outlineTypeTable[Kind.localFunction]=monaco.languages.SymbolKind.Function;var javaScriptWorker,typeScriptWorker,FormatHelper=function(_super){function FormatHelper(){return null!==_super&&_super.apply(this,arguments)||this}return __extends(FormatHelper,_super),FormatHelper._convertOptions=function(options){return{ConvertTabsToSpaces:options.insertSpaces,TabSize:options.tabSize,IndentSize:options.tabSize,IndentStyle:IndentStyle.Smart,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}},FormatHelper.prototype._convertTextChanges=function(uri,change){return{text:change.newText,range:this._textSpanToRange(uri,change.span)}},FormatHelper}(Adapter),FormatAdapter=function(_super){function FormatAdapter(){return null!==_super&&_super.apply(this,arguments)||this}return __extends(FormatAdapter,_super),FormatAdapter.prototype.provideDocumentRangeFormattingEdits=function(model,range,options,token){var _this=this,resource=model.uri;return this._worker(resource).then(function(worker){return worker.getFormattingEditsForRange(resource.toString(),_this._positionToOffset(resource,{lineNumber:range.startLineNumber,column:range.startColumn}),_this._positionToOffset(resource,{lineNumber:range.endLineNumber,column:range.endColumn}),FormatHelper._convertOptions(options))}).then(function(edits){if(edits)return edits.map(function(edit){return _this._convertTextChanges(resource,edit)})})},FormatAdapter}(FormatHelper),FormatOnTypeAdapter=function(_super){function FormatOnTypeAdapter(){return null!==_super&&_super.apply(this,arguments)||this}return __extends(FormatOnTypeAdapter,_super),Object.defineProperty(FormatOnTypeAdapter.prototype,"autoFormatTriggerCharacters",{get:function(){return[";","}","\n"]},enumerable:!0,configurable:!0}),FormatOnTypeAdapter.prototype.provideOnTypeFormattingEdits=function(model,position,ch,options,token){var _this=this,resource=model.uri;return this._worker(resource).then(function(worker){return worker.getFormattingEditsAfterKeystroke(resource.toString(),_this._positionToOffset(resource,position),ch,FormatHelper._convertOptions(options))}).then(function(edits){if(edits)return edits.map(function(edit){return _this._convertTextChanges(resource,edit)})})},FormatOnTypeAdapter}(FormatHelper);function setupTypeScript(defaults){typeScriptWorker=setupMode(defaults,"typescript")}function setupJavaScript(defaults){javaScriptWorker=setupMode(defaults,"javascript")}function getJavaScriptWorker(){return new Promise(function(resolve,reject){if(!javaScriptWorker)return reject("JavaScript not registered!");resolve(javaScriptWorker)})}function getTypeScriptWorker(){return new Promise(function(resolve,reject){if(!typeScriptWorker)return reject("TypeScript not registered!");resolve(typeScriptWorker)})}function setupMode(defaults,modeId){var client=new WorkerManager(modeId,defaults),worker=function(first){for(var more=[],_i=1;_i<arguments.length;_i++)more[_i-1]=arguments[_i];return client.getLanguageServiceWorker.apply(client,[first].concat(more))};return monaco.languages.registerCompletionItemProvider(modeId,new SuggestAdapter(worker)),monaco.languages.registerSignatureHelpProvider(modeId,new SignatureHelpAdapter(worker)),monaco.languages.registerHoverProvider(modeId,new QuickInfoAdapter(worker)),monaco.languages.registerDocumentHighlightProvider(modeId,new OccurrencesAdapter(worker)),monaco.languages.registerDefinitionProvider(modeId,new DefinitionAdapter(worker)),monaco.languages.registerReferenceProvider(modeId,new ReferenceAdapter(worker)),monaco.languages.registerDocumentSymbolProvider(modeId,new OutlineAdapter(worker)),monaco.languages.registerDocumentRangeFormattingEditProvider(modeId,new FormatAdapter(worker)),monaco.languages.registerOnTypeFormattingEditProvider(modeId,new FormatOnTypeAdapter(worker)),new DiagnostcsAdapter(defaults,modeId,worker),worker}__webpack_require__.d(__webpack_exports__,"setupTypeScript",function(){return setupTypeScript}),__webpack_require__.d(__webpack_exports__,"setupJavaScript",function(){return setupJavaScript}),__webpack_require__.d(__webpack_exports__,"getJavaScriptWorker",function(){return getJavaScriptWorker}),__webpack_require__.d(__webpack_exports__,"getTypeScriptWorker",function(){return getTypeScriptWorker})}}]);