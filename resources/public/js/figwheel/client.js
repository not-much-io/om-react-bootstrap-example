// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__28166 = cljs.core._EQ_;
var expr__28167 = (function (){var or__16771__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28166.call(null,"true",expr__28167))){
return true;
} else {
if(cljs.core.truth_(pred__28166.call(null,"false",expr__28167))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28167)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28169__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28169 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28170__i = 0, G__28170__a = new Array(arguments.length -  0);
while (G__28170__i < G__28170__a.length) {G__28170__a[G__28170__i] = arguments[G__28170__i + 0]; ++G__28170__i;}
  args = new cljs.core.IndexedSeq(G__28170__a,0);
} 
return G__28169__delegate.call(this,args);};
G__28169.cljs$lang$maxFixedArity = 0;
G__28169.cljs$lang$applyTo = (function (arglist__28171){
var args = cljs.core.seq(arglist__28171);
return G__28169__delegate(args);
});
G__28169.cljs$core$IFn$_invoke$arity$variadic = G__28169__delegate;
return G__28169;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28172){
var map__28175 = p__28172;
var map__28175__$1 = ((((!((map__28175 == null)))?((((map__28175.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28175.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28175):map__28175);
var message = cljs.core.get.call(null,map__28175__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28175__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16771__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16759__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16759__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16759__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__18797__auto___28337 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18797__auto___28337,ch){
return (function (){
var f__18798__auto__ = (function (){var switch__18776__auto__ = ((function (c__18797__auto___28337,ch){
return (function (state_28306){
var state_val_28307 = (state_28306[(1)]);
if((state_val_28307 === (7))){
var inst_28302 = (state_28306[(2)]);
var state_28306__$1 = state_28306;
var statearr_28308_28338 = state_28306__$1;
(statearr_28308_28338[(2)] = inst_28302);

(statearr_28308_28338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (1))){
var state_28306__$1 = state_28306;
var statearr_28309_28339 = state_28306__$1;
(statearr_28309_28339[(2)] = null);

(statearr_28309_28339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (4))){
var inst_28259 = (state_28306[(7)]);
var inst_28259__$1 = (state_28306[(2)]);
var state_28306__$1 = (function (){var statearr_28310 = state_28306;
(statearr_28310[(7)] = inst_28259__$1);

return statearr_28310;
})();
if(cljs.core.truth_(inst_28259__$1)){
var statearr_28311_28340 = state_28306__$1;
(statearr_28311_28340[(1)] = (5));

} else {
var statearr_28312_28341 = state_28306__$1;
(statearr_28312_28341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (15))){
var inst_28266 = (state_28306[(8)]);
var inst_28281 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28266);
var inst_28282 = cljs.core.first.call(null,inst_28281);
var inst_28283 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28282);
var inst_28284 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_28283)].join('');
var inst_28285 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28284);
var state_28306__$1 = state_28306;
var statearr_28313_28342 = state_28306__$1;
(statearr_28313_28342[(2)] = inst_28285);

(statearr_28313_28342[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (13))){
var inst_28290 = (state_28306[(2)]);
var state_28306__$1 = state_28306;
var statearr_28314_28343 = state_28306__$1;
(statearr_28314_28343[(2)] = inst_28290);

(statearr_28314_28343[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (6))){
var state_28306__$1 = state_28306;
var statearr_28315_28344 = state_28306__$1;
(statearr_28315_28344[(2)] = null);

(statearr_28315_28344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (17))){
var inst_28288 = (state_28306[(2)]);
var state_28306__$1 = state_28306;
var statearr_28316_28345 = state_28306__$1;
(statearr_28316_28345[(2)] = inst_28288);

(statearr_28316_28345[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (3))){
var inst_28304 = (state_28306[(2)]);
var state_28306__$1 = state_28306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28306__$1,inst_28304);
} else {
if((state_val_28307 === (12))){
var inst_28265 = (state_28306[(9)]);
var inst_28279 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28265,opts);
var state_28306__$1 = state_28306;
if(cljs.core.truth_(inst_28279)){
var statearr_28317_28346 = state_28306__$1;
(statearr_28317_28346[(1)] = (15));

} else {
var statearr_28318_28347 = state_28306__$1;
(statearr_28318_28347[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (2))){
var state_28306__$1 = state_28306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28306__$1,(4),ch);
} else {
if((state_val_28307 === (11))){
var inst_28266 = (state_28306[(8)]);
var inst_28271 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28272 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28266);
var inst_28273 = cljs.core.async.timeout.call(null,(1000));
var inst_28274 = [inst_28272,inst_28273];
var inst_28275 = (new cljs.core.PersistentVector(null,2,(5),inst_28271,inst_28274,null));
var state_28306__$1 = state_28306;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28306__$1,(14),inst_28275);
} else {
if((state_val_28307 === (9))){
var inst_28266 = (state_28306[(8)]);
var inst_28292 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28293 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28266);
var inst_28294 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28293);
var inst_28295 = [cljs.core.str("Not loading: "),cljs.core.str(inst_28294)].join('');
var inst_28296 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28295);
var state_28306__$1 = (function (){var statearr_28319 = state_28306;
(statearr_28319[(10)] = inst_28292);

return statearr_28319;
})();
var statearr_28320_28348 = state_28306__$1;
(statearr_28320_28348[(2)] = inst_28296);

(statearr_28320_28348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (5))){
var inst_28259 = (state_28306[(7)]);
var inst_28261 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28262 = (new cljs.core.PersistentArrayMap(null,2,inst_28261,null));
var inst_28263 = (new cljs.core.PersistentHashSet(null,inst_28262,null));
var inst_28264 = figwheel.client.focus_msgs.call(null,inst_28263,inst_28259);
var inst_28265 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28264);
var inst_28266 = cljs.core.first.call(null,inst_28264);
var inst_28267 = figwheel.client.autoload_QMARK_.call(null);
var state_28306__$1 = (function (){var statearr_28321 = state_28306;
(statearr_28321[(9)] = inst_28265);

(statearr_28321[(8)] = inst_28266);

return statearr_28321;
})();
if(cljs.core.truth_(inst_28267)){
var statearr_28322_28349 = state_28306__$1;
(statearr_28322_28349[(1)] = (8));

} else {
var statearr_28323_28350 = state_28306__$1;
(statearr_28323_28350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (14))){
var inst_28277 = (state_28306[(2)]);
var state_28306__$1 = state_28306;
var statearr_28324_28351 = state_28306__$1;
(statearr_28324_28351[(2)] = inst_28277);

(statearr_28324_28351[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (16))){
var state_28306__$1 = state_28306;
var statearr_28325_28352 = state_28306__$1;
(statearr_28325_28352[(2)] = null);

(statearr_28325_28352[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (10))){
var inst_28298 = (state_28306[(2)]);
var state_28306__$1 = (function (){var statearr_28326 = state_28306;
(statearr_28326[(11)] = inst_28298);

return statearr_28326;
})();
var statearr_28327_28353 = state_28306__$1;
(statearr_28327_28353[(2)] = null);

(statearr_28327_28353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (8))){
var inst_28265 = (state_28306[(9)]);
var inst_28269 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28265,opts);
var state_28306__$1 = state_28306;
if(cljs.core.truth_(inst_28269)){
var statearr_28328_28354 = state_28306__$1;
(statearr_28328_28354[(1)] = (11));

} else {
var statearr_28329_28355 = state_28306__$1;
(statearr_28329_28355[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18797__auto___28337,ch))
;
return ((function (switch__18776__auto__,c__18797__auto___28337,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18777__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18777__auto____0 = (function (){
var statearr_28333 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28333[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18777__auto__);

(statearr_28333[(1)] = (1));

return statearr_28333;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18777__auto____1 = (function (state_28306){
while(true){
var ret_value__18778__auto__ = (function (){try{while(true){
var result__18779__auto__ = switch__18776__auto__.call(null,state_28306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18779__auto__;
}
break;
}
}catch (e28334){if((e28334 instanceof Object)){
var ex__18780__auto__ = e28334;
var statearr_28335_28356 = state_28306;
(statearr_28335_28356[(5)] = ex__18780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28357 = state_28306;
state_28306 = G__28357;
continue;
} else {
return ret_value__18778__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18777__auto__ = function(state_28306){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18777__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18777__auto____1.call(this,state_28306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18777__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18777__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18777__auto__;
})()
;})(switch__18776__auto__,c__18797__auto___28337,ch))
})();
var state__18799__auto__ = (function (){var statearr_28336 = f__18798__auto__.call(null);
(statearr_28336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18797__auto___28337);

return statearr_28336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18799__auto__);
});})(c__18797__auto___28337,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28358_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28358_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_28365 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28365){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28363 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28364 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28363,_STAR_print_newline_STAR_28364,base_path_28365){
return (function() { 
var G__28366__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28366 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28367__i = 0, G__28367__a = new Array(arguments.length -  0);
while (G__28367__i < G__28367__a.length) {G__28367__a[G__28367__i] = arguments[G__28367__i + 0]; ++G__28367__i;}
  args = new cljs.core.IndexedSeq(G__28367__a,0);
} 
return G__28366__delegate.call(this,args);};
G__28366.cljs$lang$maxFixedArity = 0;
G__28366.cljs$lang$applyTo = (function (arglist__28368){
var args = cljs.core.seq(arglist__28368);
return G__28366__delegate(args);
});
G__28366.cljs$core$IFn$_invoke$arity$variadic = G__28366__delegate;
return G__28366;
})()
;})(_STAR_print_fn_STAR_28363,_STAR_print_newline_STAR_28364,base_path_28365))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28364;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28363;
}}catch (e28362){if((e28362 instanceof Error)){
var e = e28362;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28365], null));
} else {
var e = e28362;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28365))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28369){
var map__28376 = p__28369;
var map__28376__$1 = ((((!((map__28376 == null)))?((((map__28376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28376):map__28376);
var opts = map__28376__$1;
var build_id = cljs.core.get.call(null,map__28376__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28376,map__28376__$1,opts,build_id){
return (function (p__28378){
var vec__28379 = p__28378;
var map__28380 = cljs.core.nth.call(null,vec__28379,(0),null);
var map__28380__$1 = ((((!((map__28380 == null)))?((((map__28380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28380):map__28380);
var msg = map__28380__$1;
var msg_name = cljs.core.get.call(null,map__28380__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28379,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28379,map__28380,map__28380__$1,msg,msg_name,_,map__28376,map__28376__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28379,map__28380,map__28380__$1,msg,msg_name,_,map__28376,map__28376__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28376,map__28376__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28386){
var vec__28387 = p__28386;
var map__28388 = cljs.core.nth.call(null,vec__28387,(0),null);
var map__28388__$1 = ((((!((map__28388 == null)))?((((map__28388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28388):map__28388);
var msg = map__28388__$1;
var msg_name = cljs.core.get.call(null,map__28388__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28387,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28390){
var map__28400 = p__28390;
var map__28400__$1 = ((((!((map__28400 == null)))?((((map__28400.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28400.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28400):map__28400);
var on_compile_warning = cljs.core.get.call(null,map__28400__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28400__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28400,map__28400__$1,on_compile_warning,on_compile_fail){
return (function (p__28402){
var vec__28403 = p__28402;
var map__28404 = cljs.core.nth.call(null,vec__28403,(0),null);
var map__28404__$1 = ((((!((map__28404 == null)))?((((map__28404.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28404.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28404):map__28404);
var msg = map__28404__$1;
var msg_name = cljs.core.get.call(null,map__28404__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28403,(1));
var pred__28406 = cljs.core._EQ_;
var expr__28407 = msg_name;
if(cljs.core.truth_(pred__28406.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28407))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28406.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28407))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28400,map__28400__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18797__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18797__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18798__auto__ = (function (){var switch__18776__auto__ = ((function (c__18797__auto__,msg_hist,msg_names,msg){
return (function (state_28623){
var state_val_28624 = (state_28623[(1)]);
if((state_val_28624 === (7))){
var inst_28547 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
if(cljs.core.truth_(inst_28547)){
var statearr_28625_28671 = state_28623__$1;
(statearr_28625_28671[(1)] = (8));

} else {
var statearr_28626_28672 = state_28623__$1;
(statearr_28626_28672[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (20))){
var inst_28617 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
var statearr_28627_28673 = state_28623__$1;
(statearr_28627_28673[(2)] = inst_28617);

(statearr_28627_28673[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (27))){
var inst_28613 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
var statearr_28628_28674 = state_28623__$1;
(statearr_28628_28674[(2)] = inst_28613);

(statearr_28628_28674[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (1))){
var inst_28540 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28623__$1 = state_28623;
if(cljs.core.truth_(inst_28540)){
var statearr_28629_28675 = state_28623__$1;
(statearr_28629_28675[(1)] = (2));

} else {
var statearr_28630_28676 = state_28623__$1;
(statearr_28630_28676[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (24))){
var inst_28615 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
var statearr_28631_28677 = state_28623__$1;
(statearr_28631_28677[(2)] = inst_28615);

(statearr_28631_28677[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (4))){
var inst_28621 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28623__$1,inst_28621);
} else {
if((state_val_28624 === (15))){
var inst_28619 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
var statearr_28632_28678 = state_28623__$1;
(statearr_28632_28678[(2)] = inst_28619);

(statearr_28632_28678[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (21))){
var inst_28578 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
var statearr_28633_28679 = state_28623__$1;
(statearr_28633_28679[(2)] = inst_28578);

(statearr_28633_28679[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (31))){
var inst_28602 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28623__$1 = state_28623;
if(cljs.core.truth_(inst_28602)){
var statearr_28634_28680 = state_28623__$1;
(statearr_28634_28680[(1)] = (34));

} else {
var statearr_28635_28681 = state_28623__$1;
(statearr_28635_28681[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (32))){
var inst_28611 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
var statearr_28636_28682 = state_28623__$1;
(statearr_28636_28682[(2)] = inst_28611);

(statearr_28636_28682[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (33))){
var inst_28600 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
var statearr_28637_28683 = state_28623__$1;
(statearr_28637_28683[(2)] = inst_28600);

(statearr_28637_28683[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (13))){
var inst_28561 = figwheel.client.heads_up.clear.call(null);
var state_28623__$1 = state_28623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28623__$1,(16),inst_28561);
} else {
if((state_val_28624 === (22))){
var inst_28582 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28583 = figwheel.client.heads_up.append_message.call(null,inst_28582);
var state_28623__$1 = state_28623;
var statearr_28638_28684 = state_28623__$1;
(statearr_28638_28684[(2)] = inst_28583);

(statearr_28638_28684[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (36))){
var inst_28609 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
var statearr_28639_28685 = state_28623__$1;
(statearr_28639_28685[(2)] = inst_28609);

(statearr_28639_28685[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (29))){
var inst_28593 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
var statearr_28640_28686 = state_28623__$1;
(statearr_28640_28686[(2)] = inst_28593);

(statearr_28640_28686[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (6))){
var inst_28542 = (state_28623[(7)]);
var state_28623__$1 = state_28623;
var statearr_28641_28687 = state_28623__$1;
(statearr_28641_28687[(2)] = inst_28542);

(statearr_28641_28687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (28))){
var inst_28589 = (state_28623[(2)]);
var inst_28590 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28591 = figwheel.client.heads_up.display_warning.call(null,inst_28590);
var state_28623__$1 = (function (){var statearr_28642 = state_28623;
(statearr_28642[(8)] = inst_28589);

return statearr_28642;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28623__$1,(29),inst_28591);
} else {
if((state_val_28624 === (25))){
var inst_28587 = figwheel.client.heads_up.clear.call(null);
var state_28623__$1 = state_28623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28623__$1,(28),inst_28587);
} else {
if((state_val_28624 === (34))){
var inst_28604 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28623__$1 = state_28623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28623__$1,(37),inst_28604);
} else {
if((state_val_28624 === (17))){
var inst_28569 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
var statearr_28643_28688 = state_28623__$1;
(statearr_28643_28688[(2)] = inst_28569);

(statearr_28643_28688[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (3))){
var inst_28559 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28623__$1 = state_28623;
if(cljs.core.truth_(inst_28559)){
var statearr_28644_28689 = state_28623__$1;
(statearr_28644_28689[(1)] = (13));

} else {
var statearr_28645_28690 = state_28623__$1;
(statearr_28645_28690[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (12))){
var inst_28555 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
var statearr_28646_28691 = state_28623__$1;
(statearr_28646_28691[(2)] = inst_28555);

(statearr_28646_28691[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (2))){
var inst_28542 = (state_28623[(7)]);
var inst_28542__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28623__$1 = (function (){var statearr_28647 = state_28623;
(statearr_28647[(7)] = inst_28542__$1);

return statearr_28647;
})();
if(cljs.core.truth_(inst_28542__$1)){
var statearr_28648_28692 = state_28623__$1;
(statearr_28648_28692[(1)] = (5));

} else {
var statearr_28649_28693 = state_28623__$1;
(statearr_28649_28693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (23))){
var inst_28585 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28623__$1 = state_28623;
if(cljs.core.truth_(inst_28585)){
var statearr_28650_28694 = state_28623__$1;
(statearr_28650_28694[(1)] = (25));

} else {
var statearr_28651_28695 = state_28623__$1;
(statearr_28651_28695[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (35))){
var state_28623__$1 = state_28623;
var statearr_28652_28696 = state_28623__$1;
(statearr_28652_28696[(2)] = null);

(statearr_28652_28696[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (19))){
var inst_28580 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28623__$1 = state_28623;
if(cljs.core.truth_(inst_28580)){
var statearr_28653_28697 = state_28623__$1;
(statearr_28653_28697[(1)] = (22));

} else {
var statearr_28654_28698 = state_28623__$1;
(statearr_28654_28698[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (11))){
var inst_28551 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
var statearr_28655_28699 = state_28623__$1;
(statearr_28655_28699[(2)] = inst_28551);

(statearr_28655_28699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (9))){
var inst_28553 = figwheel.client.heads_up.clear.call(null);
var state_28623__$1 = state_28623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28623__$1,(12),inst_28553);
} else {
if((state_val_28624 === (5))){
var inst_28544 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28623__$1 = state_28623;
var statearr_28656_28700 = state_28623__$1;
(statearr_28656_28700[(2)] = inst_28544);

(statearr_28656_28700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (14))){
var inst_28571 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28623__$1 = state_28623;
if(cljs.core.truth_(inst_28571)){
var statearr_28657_28701 = state_28623__$1;
(statearr_28657_28701[(1)] = (18));

} else {
var statearr_28658_28702 = state_28623__$1;
(statearr_28658_28702[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (26))){
var inst_28595 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28623__$1 = state_28623;
if(cljs.core.truth_(inst_28595)){
var statearr_28659_28703 = state_28623__$1;
(statearr_28659_28703[(1)] = (30));

} else {
var statearr_28660_28704 = state_28623__$1;
(statearr_28660_28704[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (16))){
var inst_28563 = (state_28623[(2)]);
var inst_28564 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28565 = figwheel.client.format_messages.call(null,inst_28564);
var inst_28566 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28567 = figwheel.client.heads_up.display_error.call(null,inst_28565,inst_28566);
var state_28623__$1 = (function (){var statearr_28661 = state_28623;
(statearr_28661[(9)] = inst_28563);

return statearr_28661;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28623__$1,(17),inst_28567);
} else {
if((state_val_28624 === (30))){
var inst_28597 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28598 = figwheel.client.heads_up.display_warning.call(null,inst_28597);
var state_28623__$1 = state_28623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28623__$1,(33),inst_28598);
} else {
if((state_val_28624 === (10))){
var inst_28557 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
var statearr_28662_28705 = state_28623__$1;
(statearr_28662_28705[(2)] = inst_28557);

(statearr_28662_28705[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (18))){
var inst_28573 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28574 = figwheel.client.format_messages.call(null,inst_28573);
var inst_28575 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28576 = figwheel.client.heads_up.display_error.call(null,inst_28574,inst_28575);
var state_28623__$1 = state_28623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28623__$1,(21),inst_28576);
} else {
if((state_val_28624 === (37))){
var inst_28606 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
var statearr_28663_28706 = state_28623__$1;
(statearr_28663_28706[(2)] = inst_28606);

(statearr_28663_28706[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (8))){
var inst_28549 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28623__$1 = state_28623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28623__$1,(11),inst_28549);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18797__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18776__auto__,c__18797__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18777__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18777__auto____0 = (function (){
var statearr_28667 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28667[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18777__auto__);

(statearr_28667[(1)] = (1));

return statearr_28667;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18777__auto____1 = (function (state_28623){
while(true){
var ret_value__18778__auto__ = (function (){try{while(true){
var result__18779__auto__ = switch__18776__auto__.call(null,state_28623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18779__auto__;
}
break;
}
}catch (e28668){if((e28668 instanceof Object)){
var ex__18780__auto__ = e28668;
var statearr_28669_28707 = state_28623;
(statearr_28669_28707[(5)] = ex__18780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28708 = state_28623;
state_28623 = G__28708;
continue;
} else {
return ret_value__18778__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18777__auto__ = function(state_28623){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18777__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18777__auto____1.call(this,state_28623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18777__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18777__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18777__auto__;
})()
;})(switch__18776__auto__,c__18797__auto__,msg_hist,msg_names,msg))
})();
var state__18799__auto__ = (function (){var statearr_28670 = f__18798__auto__.call(null);
(statearr_28670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18797__auto__);

return statearr_28670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18799__auto__);
});})(c__18797__auto__,msg_hist,msg_names,msg))
);

return c__18797__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18797__auto___28771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18797__auto___28771,ch){
return (function (){
var f__18798__auto__ = (function (){var switch__18776__auto__ = ((function (c__18797__auto___28771,ch){
return (function (state_28754){
var state_val_28755 = (state_28754[(1)]);
if((state_val_28755 === (1))){
var state_28754__$1 = state_28754;
var statearr_28756_28772 = state_28754__$1;
(statearr_28756_28772[(2)] = null);

(statearr_28756_28772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28755 === (2))){
var state_28754__$1 = state_28754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28754__$1,(4),ch);
} else {
if((state_val_28755 === (3))){
var inst_28752 = (state_28754[(2)]);
var state_28754__$1 = state_28754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28754__$1,inst_28752);
} else {
if((state_val_28755 === (4))){
var inst_28742 = (state_28754[(7)]);
var inst_28742__$1 = (state_28754[(2)]);
var state_28754__$1 = (function (){var statearr_28757 = state_28754;
(statearr_28757[(7)] = inst_28742__$1);

return statearr_28757;
})();
if(cljs.core.truth_(inst_28742__$1)){
var statearr_28758_28773 = state_28754__$1;
(statearr_28758_28773[(1)] = (5));

} else {
var statearr_28759_28774 = state_28754__$1;
(statearr_28759_28774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28755 === (5))){
var inst_28742 = (state_28754[(7)]);
var inst_28744 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28742);
var state_28754__$1 = state_28754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28754__$1,(8),inst_28744);
} else {
if((state_val_28755 === (6))){
var state_28754__$1 = state_28754;
var statearr_28760_28775 = state_28754__$1;
(statearr_28760_28775[(2)] = null);

(statearr_28760_28775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28755 === (7))){
var inst_28750 = (state_28754[(2)]);
var state_28754__$1 = state_28754;
var statearr_28761_28776 = state_28754__$1;
(statearr_28761_28776[(2)] = inst_28750);

(statearr_28761_28776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28755 === (8))){
var inst_28746 = (state_28754[(2)]);
var state_28754__$1 = (function (){var statearr_28762 = state_28754;
(statearr_28762[(8)] = inst_28746);

return statearr_28762;
})();
var statearr_28763_28777 = state_28754__$1;
(statearr_28763_28777[(2)] = null);

(statearr_28763_28777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__18797__auto___28771,ch))
;
return ((function (switch__18776__auto__,c__18797__auto___28771,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18777__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18777__auto____0 = (function (){
var statearr_28767 = [null,null,null,null,null,null,null,null,null];
(statearr_28767[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18777__auto__);

(statearr_28767[(1)] = (1));

return statearr_28767;
});
var figwheel$client$heads_up_plugin_$_state_machine__18777__auto____1 = (function (state_28754){
while(true){
var ret_value__18778__auto__ = (function (){try{while(true){
var result__18779__auto__ = switch__18776__auto__.call(null,state_28754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18779__auto__;
}
break;
}
}catch (e28768){if((e28768 instanceof Object)){
var ex__18780__auto__ = e28768;
var statearr_28769_28778 = state_28754;
(statearr_28769_28778[(5)] = ex__18780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28779 = state_28754;
state_28754 = G__28779;
continue;
} else {
return ret_value__18778__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18777__auto__ = function(state_28754){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18777__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18777__auto____1.call(this,state_28754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18777__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18777__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18777__auto__;
})()
;})(switch__18776__auto__,c__18797__auto___28771,ch))
})();
var state__18799__auto__ = (function (){var statearr_28770 = f__18798__auto__.call(null);
(statearr_28770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18797__auto___28771);

return statearr_28770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18799__auto__);
});})(c__18797__auto___28771,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__18797__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18797__auto__){
return (function (){
var f__18798__auto__ = (function (){var switch__18776__auto__ = ((function (c__18797__auto__){
return (function (state_28800){
var state_val_28801 = (state_28800[(1)]);
if((state_val_28801 === (1))){
var inst_28795 = cljs.core.async.timeout.call(null,(3000));
var state_28800__$1 = state_28800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28800__$1,(2),inst_28795);
} else {
if((state_val_28801 === (2))){
var inst_28797 = (state_28800[(2)]);
var inst_28798 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28800__$1 = (function (){var statearr_28802 = state_28800;
(statearr_28802[(7)] = inst_28797);

return statearr_28802;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28800__$1,inst_28798);
} else {
return null;
}
}
});})(c__18797__auto__))
;
return ((function (switch__18776__auto__,c__18797__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18777__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18777__auto____0 = (function (){
var statearr_28806 = [null,null,null,null,null,null,null,null];
(statearr_28806[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18777__auto__);

(statearr_28806[(1)] = (1));

return statearr_28806;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18777__auto____1 = (function (state_28800){
while(true){
var ret_value__18778__auto__ = (function (){try{while(true){
var result__18779__auto__ = switch__18776__auto__.call(null,state_28800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18779__auto__;
}
break;
}
}catch (e28807){if((e28807 instanceof Object)){
var ex__18780__auto__ = e28807;
var statearr_28808_28810 = state_28800;
(statearr_28808_28810[(5)] = ex__18780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28811 = state_28800;
state_28800 = G__28811;
continue;
} else {
return ret_value__18778__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18777__auto__ = function(state_28800){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18777__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18777__auto____1.call(this,state_28800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18777__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18777__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18777__auto__;
})()
;})(switch__18776__auto__,c__18797__auto__))
})();
var state__18799__auto__ = (function (){var statearr_28809 = f__18798__auto__.call(null);
(statearr_28809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18797__auto__);

return statearr_28809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18799__auto__);
});})(c__18797__auto__))
);

return c__18797__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28812){
var map__28819 = p__28812;
var map__28819__$1 = ((((!((map__28819 == null)))?((((map__28819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28819):map__28819);
var ed = map__28819__$1;
var formatted_exception = cljs.core.get.call(null,map__28819__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28819__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28819__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28821_28825 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28822_28826 = null;
var count__28823_28827 = (0);
var i__28824_28828 = (0);
while(true){
if((i__28824_28828 < count__28823_28827)){
var msg_28829 = cljs.core._nth.call(null,chunk__28822_28826,i__28824_28828);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28829);

var G__28830 = seq__28821_28825;
var G__28831 = chunk__28822_28826;
var G__28832 = count__28823_28827;
var G__28833 = (i__28824_28828 + (1));
seq__28821_28825 = G__28830;
chunk__28822_28826 = G__28831;
count__28823_28827 = G__28832;
i__28824_28828 = G__28833;
continue;
} else {
var temp__4425__auto___28834 = cljs.core.seq.call(null,seq__28821_28825);
if(temp__4425__auto___28834){
var seq__28821_28835__$1 = temp__4425__auto___28834;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28821_28835__$1)){
var c__17575__auto___28836 = cljs.core.chunk_first.call(null,seq__28821_28835__$1);
var G__28837 = cljs.core.chunk_rest.call(null,seq__28821_28835__$1);
var G__28838 = c__17575__auto___28836;
var G__28839 = cljs.core.count.call(null,c__17575__auto___28836);
var G__28840 = (0);
seq__28821_28825 = G__28837;
chunk__28822_28826 = G__28838;
count__28823_28827 = G__28839;
i__28824_28828 = G__28840;
continue;
} else {
var msg_28841 = cljs.core.first.call(null,seq__28821_28835__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28841);

var G__28842 = cljs.core.next.call(null,seq__28821_28835__$1);
var G__28843 = null;
var G__28844 = (0);
var G__28845 = (0);
seq__28821_28825 = G__28842;
chunk__28822_28826 = G__28843;
count__28823_28827 = G__28844;
i__28824_28828 = G__28845;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28846){
var map__28849 = p__28846;
var map__28849__$1 = ((((!((map__28849 == null)))?((((map__28849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28849):map__28849);
var w = map__28849__$1;
var message = cljs.core.get.call(null,map__28849__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16759__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16759__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16759__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28857 = cljs.core.seq.call(null,plugins);
var chunk__28858 = null;
var count__28859 = (0);
var i__28860 = (0);
while(true){
if((i__28860 < count__28859)){
var vec__28861 = cljs.core._nth.call(null,chunk__28858,i__28860);
var k = cljs.core.nth.call(null,vec__28861,(0),null);
var plugin = cljs.core.nth.call(null,vec__28861,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28863 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28857,chunk__28858,count__28859,i__28860,pl_28863,vec__28861,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28863.call(null,msg_hist);
});})(seq__28857,chunk__28858,count__28859,i__28860,pl_28863,vec__28861,k,plugin))
);
} else {
}

var G__28864 = seq__28857;
var G__28865 = chunk__28858;
var G__28866 = count__28859;
var G__28867 = (i__28860 + (1));
seq__28857 = G__28864;
chunk__28858 = G__28865;
count__28859 = G__28866;
i__28860 = G__28867;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28857);
if(temp__4425__auto__){
var seq__28857__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28857__$1)){
var c__17575__auto__ = cljs.core.chunk_first.call(null,seq__28857__$1);
var G__28868 = cljs.core.chunk_rest.call(null,seq__28857__$1);
var G__28869 = c__17575__auto__;
var G__28870 = cljs.core.count.call(null,c__17575__auto__);
var G__28871 = (0);
seq__28857 = G__28868;
chunk__28858 = G__28869;
count__28859 = G__28870;
i__28860 = G__28871;
continue;
} else {
var vec__28862 = cljs.core.first.call(null,seq__28857__$1);
var k = cljs.core.nth.call(null,vec__28862,(0),null);
var plugin = cljs.core.nth.call(null,vec__28862,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28872 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28857,chunk__28858,count__28859,i__28860,pl_28872,vec__28862,k,plugin,seq__28857__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28872.call(null,msg_hist);
});})(seq__28857,chunk__28858,count__28859,i__28860,pl_28872,vec__28862,k,plugin,seq__28857__$1,temp__4425__auto__))
);
} else {
}

var G__28873 = cljs.core.next.call(null,seq__28857__$1);
var G__28874 = null;
var G__28875 = (0);
var G__28876 = (0);
seq__28857 = G__28873;
chunk__28858 = G__28874;
count__28859 = G__28875;
i__28860 = G__28876;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args28877 = [];
var len__17830__auto___28880 = arguments.length;
var i__17831__auto___28881 = (0);
while(true){
if((i__17831__auto___28881 < len__17830__auto___28880)){
args28877.push((arguments[i__17831__auto___28881]));

var G__28882 = (i__17831__auto___28881 + (1));
i__17831__auto___28881 = G__28882;
continue;
} else {
}
break;
}

var G__28879 = args28877.length;
switch (G__28879) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28877.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17837__auto__ = [];
var len__17830__auto___28888 = arguments.length;
var i__17831__auto___28889 = (0);
while(true){
if((i__17831__auto___28889 < len__17830__auto___28888)){
args__17837__auto__.push((arguments[i__17831__auto___28889]));

var G__28890 = (i__17831__auto___28889 + (1));
i__17831__auto___28889 = G__28890;
continue;
} else {
}
break;
}

var argseq__17838__auto__ = ((((0) < args__17837__auto__.length))?(new cljs.core.IndexedSeq(args__17837__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17838__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28885){
var map__28886 = p__28885;
var map__28886__$1 = ((((!((map__28886 == null)))?((((map__28886.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28886.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28886):map__28886);
var opts = map__28886__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28884){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28884));
});

//# sourceMappingURL=client.js.map