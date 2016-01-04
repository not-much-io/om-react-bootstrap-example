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
var pred__26210 = cljs.core._EQ_;
var expr__26211 = (function (){var or__16771__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26210.call(null,"true",expr__26211))){
return true;
} else {
if(cljs.core.truth_(pred__26210.call(null,"false",expr__26211))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26211)].join('')));
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
var G__26213__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26213 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26214__i = 0, G__26214__a = new Array(arguments.length -  0);
while (G__26214__i < G__26214__a.length) {G__26214__a[G__26214__i] = arguments[G__26214__i + 0]; ++G__26214__i;}
  args = new cljs.core.IndexedSeq(G__26214__a,0);
} 
return G__26213__delegate.call(this,args);};
G__26213.cljs$lang$maxFixedArity = 0;
G__26213.cljs$lang$applyTo = (function (arglist__26215){
var args = cljs.core.seq(arglist__26215);
return G__26213__delegate(args);
});
G__26213.cljs$core$IFn$_invoke$arity$variadic = G__26213__delegate;
return G__26213;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26216){
var map__26219 = p__26216;
var map__26219__$1 = ((((!((map__26219 == null)))?((((map__26219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26219):map__26219);
var message = cljs.core.get.call(null,map__26219__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26219__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__18796__auto___26381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___26381,ch){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___26381,ch){
return (function (state_26350){
var state_val_26351 = (state_26350[(1)]);
if((state_val_26351 === (7))){
var inst_26346 = (state_26350[(2)]);
var state_26350__$1 = state_26350;
var statearr_26352_26382 = state_26350__$1;
(statearr_26352_26382[(2)] = inst_26346);

(statearr_26352_26382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26351 === (1))){
var state_26350__$1 = state_26350;
var statearr_26353_26383 = state_26350__$1;
(statearr_26353_26383[(2)] = null);

(statearr_26353_26383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26351 === (4))){
var inst_26303 = (state_26350[(7)]);
var inst_26303__$1 = (state_26350[(2)]);
var state_26350__$1 = (function (){var statearr_26354 = state_26350;
(statearr_26354[(7)] = inst_26303__$1);

return statearr_26354;
})();
if(cljs.core.truth_(inst_26303__$1)){
var statearr_26355_26384 = state_26350__$1;
(statearr_26355_26384[(1)] = (5));

} else {
var statearr_26356_26385 = state_26350__$1;
(statearr_26356_26385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26351 === (15))){
var inst_26310 = (state_26350[(8)]);
var inst_26325 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26310);
var inst_26326 = cljs.core.first.call(null,inst_26325);
var inst_26327 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26326);
var inst_26328 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26327)].join('');
var inst_26329 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26328);
var state_26350__$1 = state_26350;
var statearr_26357_26386 = state_26350__$1;
(statearr_26357_26386[(2)] = inst_26329);

(statearr_26357_26386[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26351 === (13))){
var inst_26334 = (state_26350[(2)]);
var state_26350__$1 = state_26350;
var statearr_26358_26387 = state_26350__$1;
(statearr_26358_26387[(2)] = inst_26334);

(statearr_26358_26387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26351 === (6))){
var state_26350__$1 = state_26350;
var statearr_26359_26388 = state_26350__$1;
(statearr_26359_26388[(2)] = null);

(statearr_26359_26388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26351 === (17))){
var inst_26332 = (state_26350[(2)]);
var state_26350__$1 = state_26350;
var statearr_26360_26389 = state_26350__$1;
(statearr_26360_26389[(2)] = inst_26332);

(statearr_26360_26389[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26351 === (3))){
var inst_26348 = (state_26350[(2)]);
var state_26350__$1 = state_26350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26350__$1,inst_26348);
} else {
if((state_val_26351 === (12))){
var inst_26309 = (state_26350[(9)]);
var inst_26323 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26309,opts);
var state_26350__$1 = state_26350;
if(cljs.core.truth_(inst_26323)){
var statearr_26361_26390 = state_26350__$1;
(statearr_26361_26390[(1)] = (15));

} else {
var statearr_26362_26391 = state_26350__$1;
(statearr_26362_26391[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26351 === (2))){
var state_26350__$1 = state_26350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26350__$1,(4),ch);
} else {
if((state_val_26351 === (11))){
var inst_26310 = (state_26350[(8)]);
var inst_26315 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26316 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26310);
var inst_26317 = cljs.core.async.timeout.call(null,(1000));
var inst_26318 = [inst_26316,inst_26317];
var inst_26319 = (new cljs.core.PersistentVector(null,2,(5),inst_26315,inst_26318,null));
var state_26350__$1 = state_26350;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26350__$1,(14),inst_26319);
} else {
if((state_val_26351 === (9))){
var inst_26310 = (state_26350[(8)]);
var inst_26336 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26337 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26310);
var inst_26338 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26337);
var inst_26339 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26338)].join('');
var inst_26340 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26339);
var state_26350__$1 = (function (){var statearr_26363 = state_26350;
(statearr_26363[(10)] = inst_26336);

return statearr_26363;
})();
var statearr_26364_26392 = state_26350__$1;
(statearr_26364_26392[(2)] = inst_26340);

(statearr_26364_26392[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26351 === (5))){
var inst_26303 = (state_26350[(7)]);
var inst_26305 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26306 = (new cljs.core.PersistentArrayMap(null,2,inst_26305,null));
var inst_26307 = (new cljs.core.PersistentHashSet(null,inst_26306,null));
var inst_26308 = figwheel.client.focus_msgs.call(null,inst_26307,inst_26303);
var inst_26309 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26308);
var inst_26310 = cljs.core.first.call(null,inst_26308);
var inst_26311 = figwheel.client.autoload_QMARK_.call(null);
var state_26350__$1 = (function (){var statearr_26365 = state_26350;
(statearr_26365[(8)] = inst_26310);

(statearr_26365[(9)] = inst_26309);

return statearr_26365;
})();
if(cljs.core.truth_(inst_26311)){
var statearr_26366_26393 = state_26350__$1;
(statearr_26366_26393[(1)] = (8));

} else {
var statearr_26367_26394 = state_26350__$1;
(statearr_26367_26394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26351 === (14))){
var inst_26321 = (state_26350[(2)]);
var state_26350__$1 = state_26350;
var statearr_26368_26395 = state_26350__$1;
(statearr_26368_26395[(2)] = inst_26321);

(statearr_26368_26395[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26351 === (16))){
var state_26350__$1 = state_26350;
var statearr_26369_26396 = state_26350__$1;
(statearr_26369_26396[(2)] = null);

(statearr_26369_26396[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26351 === (10))){
var inst_26342 = (state_26350[(2)]);
var state_26350__$1 = (function (){var statearr_26370 = state_26350;
(statearr_26370[(11)] = inst_26342);

return statearr_26370;
})();
var statearr_26371_26397 = state_26350__$1;
(statearr_26371_26397[(2)] = null);

(statearr_26371_26397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26351 === (8))){
var inst_26309 = (state_26350[(9)]);
var inst_26313 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26309,opts);
var state_26350__$1 = state_26350;
if(cljs.core.truth_(inst_26313)){
var statearr_26372_26398 = state_26350__$1;
(statearr_26372_26398[(1)] = (11));

} else {
var statearr_26373_26399 = state_26350__$1;
(statearr_26373_26399[(1)] = (12));

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
});})(c__18796__auto___26381,ch))
;
return ((function (switch__18775__auto__,c__18796__auto___26381,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18776__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18776__auto____0 = (function (){
var statearr_26377 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26377[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18776__auto__);

(statearr_26377[(1)] = (1));

return statearr_26377;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18776__auto____1 = (function (state_26350){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_26350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e26378){if((e26378 instanceof Object)){
var ex__18779__auto__ = e26378;
var statearr_26379_26400 = state_26350;
(statearr_26379_26400[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26401 = state_26350;
state_26350 = G__26401;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18776__auto__ = function(state_26350){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18776__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18776__auto____1.call(this,state_26350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18776__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18776__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___26381,ch))
})();
var state__18798__auto__ = (function (){var statearr_26380 = f__18797__auto__.call(null);
(statearr_26380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___26381);

return statearr_26380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___26381,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26402_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26402_SHARP_));
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
var base_path_26409 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26409){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26407 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26408 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26407,_STAR_print_newline_STAR_26408,base_path_26409){
return (function() { 
var G__26410__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26410 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26411__i = 0, G__26411__a = new Array(arguments.length -  0);
while (G__26411__i < G__26411__a.length) {G__26411__a[G__26411__i] = arguments[G__26411__i + 0]; ++G__26411__i;}
  args = new cljs.core.IndexedSeq(G__26411__a,0);
} 
return G__26410__delegate.call(this,args);};
G__26410.cljs$lang$maxFixedArity = 0;
G__26410.cljs$lang$applyTo = (function (arglist__26412){
var args = cljs.core.seq(arglist__26412);
return G__26410__delegate(args);
});
G__26410.cljs$core$IFn$_invoke$arity$variadic = G__26410__delegate;
return G__26410;
})()
;})(_STAR_print_fn_STAR_26407,_STAR_print_newline_STAR_26408,base_path_26409))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26408;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26407;
}}catch (e26406){if((e26406 instanceof Error)){
var e = e26406;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26409], null));
} else {
var e = e26406;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26409))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26413){
var map__26420 = p__26413;
var map__26420__$1 = ((((!((map__26420 == null)))?((((map__26420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26420):map__26420);
var opts = map__26420__$1;
var build_id = cljs.core.get.call(null,map__26420__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26420,map__26420__$1,opts,build_id){
return (function (p__26422){
var vec__26423 = p__26422;
var map__26424 = cljs.core.nth.call(null,vec__26423,(0),null);
var map__26424__$1 = ((((!((map__26424 == null)))?((((map__26424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26424):map__26424);
var msg = map__26424__$1;
var msg_name = cljs.core.get.call(null,map__26424__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26423,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26423,map__26424,map__26424__$1,msg,msg_name,_,map__26420,map__26420__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26423,map__26424,map__26424__$1,msg,msg_name,_,map__26420,map__26420__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26420,map__26420__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26430){
var vec__26431 = p__26430;
var map__26432 = cljs.core.nth.call(null,vec__26431,(0),null);
var map__26432__$1 = ((((!((map__26432 == null)))?((((map__26432.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26432.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26432):map__26432);
var msg = map__26432__$1;
var msg_name = cljs.core.get.call(null,map__26432__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26431,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26434){
var map__26444 = p__26434;
var map__26444__$1 = ((((!((map__26444 == null)))?((((map__26444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26444):map__26444);
var on_compile_warning = cljs.core.get.call(null,map__26444__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26444__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26444,map__26444__$1,on_compile_warning,on_compile_fail){
return (function (p__26446){
var vec__26447 = p__26446;
var map__26448 = cljs.core.nth.call(null,vec__26447,(0),null);
var map__26448__$1 = ((((!((map__26448 == null)))?((((map__26448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26448):map__26448);
var msg = map__26448__$1;
var msg_name = cljs.core.get.call(null,map__26448__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26447,(1));
var pred__26450 = cljs.core._EQ_;
var expr__26451 = msg_name;
if(cljs.core.truth_(pred__26450.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26451))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26450.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26451))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26444,map__26444__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto__,msg_hist,msg_names,msg){
return (function (state_26667){
var state_val_26668 = (state_26667[(1)]);
if((state_val_26668 === (7))){
var inst_26591 = (state_26667[(2)]);
var state_26667__$1 = state_26667;
if(cljs.core.truth_(inst_26591)){
var statearr_26669_26715 = state_26667__$1;
(statearr_26669_26715[(1)] = (8));

} else {
var statearr_26670_26716 = state_26667__$1;
(statearr_26670_26716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (20))){
var inst_26661 = (state_26667[(2)]);
var state_26667__$1 = state_26667;
var statearr_26671_26717 = state_26667__$1;
(statearr_26671_26717[(2)] = inst_26661);

(statearr_26671_26717[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (27))){
var inst_26657 = (state_26667[(2)]);
var state_26667__$1 = state_26667;
var statearr_26672_26718 = state_26667__$1;
(statearr_26672_26718[(2)] = inst_26657);

(statearr_26672_26718[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (1))){
var inst_26584 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26667__$1 = state_26667;
if(cljs.core.truth_(inst_26584)){
var statearr_26673_26719 = state_26667__$1;
(statearr_26673_26719[(1)] = (2));

} else {
var statearr_26674_26720 = state_26667__$1;
(statearr_26674_26720[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (24))){
var inst_26659 = (state_26667[(2)]);
var state_26667__$1 = state_26667;
var statearr_26675_26721 = state_26667__$1;
(statearr_26675_26721[(2)] = inst_26659);

(statearr_26675_26721[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (4))){
var inst_26665 = (state_26667[(2)]);
var state_26667__$1 = state_26667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26667__$1,inst_26665);
} else {
if((state_val_26668 === (15))){
var inst_26663 = (state_26667[(2)]);
var state_26667__$1 = state_26667;
var statearr_26676_26722 = state_26667__$1;
(statearr_26676_26722[(2)] = inst_26663);

(statearr_26676_26722[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (21))){
var inst_26622 = (state_26667[(2)]);
var state_26667__$1 = state_26667;
var statearr_26677_26723 = state_26667__$1;
(statearr_26677_26723[(2)] = inst_26622);

(statearr_26677_26723[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (31))){
var inst_26646 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26667__$1 = state_26667;
if(cljs.core.truth_(inst_26646)){
var statearr_26678_26724 = state_26667__$1;
(statearr_26678_26724[(1)] = (34));

} else {
var statearr_26679_26725 = state_26667__$1;
(statearr_26679_26725[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (32))){
var inst_26655 = (state_26667[(2)]);
var state_26667__$1 = state_26667;
var statearr_26680_26726 = state_26667__$1;
(statearr_26680_26726[(2)] = inst_26655);

(statearr_26680_26726[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (33))){
var inst_26644 = (state_26667[(2)]);
var state_26667__$1 = state_26667;
var statearr_26681_26727 = state_26667__$1;
(statearr_26681_26727[(2)] = inst_26644);

(statearr_26681_26727[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (13))){
var inst_26605 = figwheel.client.heads_up.clear.call(null);
var state_26667__$1 = state_26667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26667__$1,(16),inst_26605);
} else {
if((state_val_26668 === (22))){
var inst_26626 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26627 = figwheel.client.heads_up.append_message.call(null,inst_26626);
var state_26667__$1 = state_26667;
var statearr_26682_26728 = state_26667__$1;
(statearr_26682_26728[(2)] = inst_26627);

(statearr_26682_26728[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (36))){
var inst_26653 = (state_26667[(2)]);
var state_26667__$1 = state_26667;
var statearr_26683_26729 = state_26667__$1;
(statearr_26683_26729[(2)] = inst_26653);

(statearr_26683_26729[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (29))){
var inst_26637 = (state_26667[(2)]);
var state_26667__$1 = state_26667;
var statearr_26684_26730 = state_26667__$1;
(statearr_26684_26730[(2)] = inst_26637);

(statearr_26684_26730[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (6))){
var inst_26586 = (state_26667[(7)]);
var state_26667__$1 = state_26667;
var statearr_26685_26731 = state_26667__$1;
(statearr_26685_26731[(2)] = inst_26586);

(statearr_26685_26731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (28))){
var inst_26633 = (state_26667[(2)]);
var inst_26634 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26635 = figwheel.client.heads_up.display_warning.call(null,inst_26634);
var state_26667__$1 = (function (){var statearr_26686 = state_26667;
(statearr_26686[(8)] = inst_26633);

return statearr_26686;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26667__$1,(29),inst_26635);
} else {
if((state_val_26668 === (25))){
var inst_26631 = figwheel.client.heads_up.clear.call(null);
var state_26667__$1 = state_26667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26667__$1,(28),inst_26631);
} else {
if((state_val_26668 === (34))){
var inst_26648 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26667__$1 = state_26667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26667__$1,(37),inst_26648);
} else {
if((state_val_26668 === (17))){
var inst_26613 = (state_26667[(2)]);
var state_26667__$1 = state_26667;
var statearr_26687_26732 = state_26667__$1;
(statearr_26687_26732[(2)] = inst_26613);

(statearr_26687_26732[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (3))){
var inst_26603 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26667__$1 = state_26667;
if(cljs.core.truth_(inst_26603)){
var statearr_26688_26733 = state_26667__$1;
(statearr_26688_26733[(1)] = (13));

} else {
var statearr_26689_26734 = state_26667__$1;
(statearr_26689_26734[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (12))){
var inst_26599 = (state_26667[(2)]);
var state_26667__$1 = state_26667;
var statearr_26690_26735 = state_26667__$1;
(statearr_26690_26735[(2)] = inst_26599);

(statearr_26690_26735[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (2))){
var inst_26586 = (state_26667[(7)]);
var inst_26586__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26667__$1 = (function (){var statearr_26691 = state_26667;
(statearr_26691[(7)] = inst_26586__$1);

return statearr_26691;
})();
if(cljs.core.truth_(inst_26586__$1)){
var statearr_26692_26736 = state_26667__$1;
(statearr_26692_26736[(1)] = (5));

} else {
var statearr_26693_26737 = state_26667__$1;
(statearr_26693_26737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (23))){
var inst_26629 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26667__$1 = state_26667;
if(cljs.core.truth_(inst_26629)){
var statearr_26694_26738 = state_26667__$1;
(statearr_26694_26738[(1)] = (25));

} else {
var statearr_26695_26739 = state_26667__$1;
(statearr_26695_26739[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (35))){
var state_26667__$1 = state_26667;
var statearr_26696_26740 = state_26667__$1;
(statearr_26696_26740[(2)] = null);

(statearr_26696_26740[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (19))){
var inst_26624 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26667__$1 = state_26667;
if(cljs.core.truth_(inst_26624)){
var statearr_26697_26741 = state_26667__$1;
(statearr_26697_26741[(1)] = (22));

} else {
var statearr_26698_26742 = state_26667__$1;
(statearr_26698_26742[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (11))){
var inst_26595 = (state_26667[(2)]);
var state_26667__$1 = state_26667;
var statearr_26699_26743 = state_26667__$1;
(statearr_26699_26743[(2)] = inst_26595);

(statearr_26699_26743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (9))){
var inst_26597 = figwheel.client.heads_up.clear.call(null);
var state_26667__$1 = state_26667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26667__$1,(12),inst_26597);
} else {
if((state_val_26668 === (5))){
var inst_26588 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26667__$1 = state_26667;
var statearr_26700_26744 = state_26667__$1;
(statearr_26700_26744[(2)] = inst_26588);

(statearr_26700_26744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (14))){
var inst_26615 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26667__$1 = state_26667;
if(cljs.core.truth_(inst_26615)){
var statearr_26701_26745 = state_26667__$1;
(statearr_26701_26745[(1)] = (18));

} else {
var statearr_26702_26746 = state_26667__$1;
(statearr_26702_26746[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (26))){
var inst_26639 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26667__$1 = state_26667;
if(cljs.core.truth_(inst_26639)){
var statearr_26703_26747 = state_26667__$1;
(statearr_26703_26747[(1)] = (30));

} else {
var statearr_26704_26748 = state_26667__$1;
(statearr_26704_26748[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (16))){
var inst_26607 = (state_26667[(2)]);
var inst_26608 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26609 = figwheel.client.format_messages.call(null,inst_26608);
var inst_26610 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26611 = figwheel.client.heads_up.display_error.call(null,inst_26609,inst_26610);
var state_26667__$1 = (function (){var statearr_26705 = state_26667;
(statearr_26705[(9)] = inst_26607);

return statearr_26705;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26667__$1,(17),inst_26611);
} else {
if((state_val_26668 === (30))){
var inst_26641 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26642 = figwheel.client.heads_up.display_warning.call(null,inst_26641);
var state_26667__$1 = state_26667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26667__$1,(33),inst_26642);
} else {
if((state_val_26668 === (10))){
var inst_26601 = (state_26667[(2)]);
var state_26667__$1 = state_26667;
var statearr_26706_26749 = state_26667__$1;
(statearr_26706_26749[(2)] = inst_26601);

(statearr_26706_26749[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (18))){
var inst_26617 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26618 = figwheel.client.format_messages.call(null,inst_26617);
var inst_26619 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26620 = figwheel.client.heads_up.display_error.call(null,inst_26618,inst_26619);
var state_26667__$1 = state_26667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26667__$1,(21),inst_26620);
} else {
if((state_val_26668 === (37))){
var inst_26650 = (state_26667[(2)]);
var state_26667__$1 = state_26667;
var statearr_26707_26750 = state_26667__$1;
(statearr_26707_26750[(2)] = inst_26650);

(statearr_26707_26750[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26668 === (8))){
var inst_26593 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26667__$1 = state_26667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26667__$1,(11),inst_26593);
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
});})(c__18796__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18775__auto__,c__18796__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18776__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18776__auto____0 = (function (){
var statearr_26711 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26711[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18776__auto__);

(statearr_26711[(1)] = (1));

return statearr_26711;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18776__auto____1 = (function (state_26667){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_26667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e26712){if((e26712 instanceof Object)){
var ex__18779__auto__ = e26712;
var statearr_26713_26751 = state_26667;
(statearr_26713_26751[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26752 = state_26667;
state_26667 = G__26752;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18776__auto__ = function(state_26667){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18776__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18776__auto____1.call(this,state_26667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18776__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18776__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto__,msg_hist,msg_names,msg))
})();
var state__18798__auto__ = (function (){var statearr_26714 = f__18797__auto__.call(null);
(statearr_26714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto__);

return statearr_26714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto__,msg_hist,msg_names,msg))
);

return c__18796__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18796__auto___26815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___26815,ch){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___26815,ch){
return (function (state_26798){
var state_val_26799 = (state_26798[(1)]);
if((state_val_26799 === (1))){
var state_26798__$1 = state_26798;
var statearr_26800_26816 = state_26798__$1;
(statearr_26800_26816[(2)] = null);

(statearr_26800_26816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26799 === (2))){
var state_26798__$1 = state_26798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26798__$1,(4),ch);
} else {
if((state_val_26799 === (3))){
var inst_26796 = (state_26798[(2)]);
var state_26798__$1 = state_26798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26798__$1,inst_26796);
} else {
if((state_val_26799 === (4))){
var inst_26786 = (state_26798[(7)]);
var inst_26786__$1 = (state_26798[(2)]);
var state_26798__$1 = (function (){var statearr_26801 = state_26798;
(statearr_26801[(7)] = inst_26786__$1);

return statearr_26801;
})();
if(cljs.core.truth_(inst_26786__$1)){
var statearr_26802_26817 = state_26798__$1;
(statearr_26802_26817[(1)] = (5));

} else {
var statearr_26803_26818 = state_26798__$1;
(statearr_26803_26818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26799 === (5))){
var inst_26786 = (state_26798[(7)]);
var inst_26788 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26786);
var state_26798__$1 = state_26798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26798__$1,(8),inst_26788);
} else {
if((state_val_26799 === (6))){
var state_26798__$1 = state_26798;
var statearr_26804_26819 = state_26798__$1;
(statearr_26804_26819[(2)] = null);

(statearr_26804_26819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26799 === (7))){
var inst_26794 = (state_26798[(2)]);
var state_26798__$1 = state_26798;
var statearr_26805_26820 = state_26798__$1;
(statearr_26805_26820[(2)] = inst_26794);

(statearr_26805_26820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26799 === (8))){
var inst_26790 = (state_26798[(2)]);
var state_26798__$1 = (function (){var statearr_26806 = state_26798;
(statearr_26806[(8)] = inst_26790);

return statearr_26806;
})();
var statearr_26807_26821 = state_26798__$1;
(statearr_26807_26821[(2)] = null);

(statearr_26807_26821[(1)] = (2));


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
});})(c__18796__auto___26815,ch))
;
return ((function (switch__18775__auto__,c__18796__auto___26815,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18776__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18776__auto____0 = (function (){
var statearr_26811 = [null,null,null,null,null,null,null,null,null];
(statearr_26811[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18776__auto__);

(statearr_26811[(1)] = (1));

return statearr_26811;
});
var figwheel$client$heads_up_plugin_$_state_machine__18776__auto____1 = (function (state_26798){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_26798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e26812){if((e26812 instanceof Object)){
var ex__18779__auto__ = e26812;
var statearr_26813_26822 = state_26798;
(statearr_26813_26822[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26823 = state_26798;
state_26798 = G__26823;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18776__auto__ = function(state_26798){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18776__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18776__auto____1.call(this,state_26798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18776__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18776__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___26815,ch))
})();
var state__18798__auto__ = (function (){var statearr_26814 = f__18797__auto__.call(null);
(statearr_26814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___26815);

return statearr_26814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___26815,ch))
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
var c__18796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto__){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto__){
return (function (state_26844){
var state_val_26845 = (state_26844[(1)]);
if((state_val_26845 === (1))){
var inst_26839 = cljs.core.async.timeout.call(null,(3000));
var state_26844__$1 = state_26844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26844__$1,(2),inst_26839);
} else {
if((state_val_26845 === (2))){
var inst_26841 = (state_26844[(2)]);
var inst_26842 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26844__$1 = (function (){var statearr_26846 = state_26844;
(statearr_26846[(7)] = inst_26841);

return statearr_26846;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26844__$1,inst_26842);
} else {
return null;
}
}
});})(c__18796__auto__))
;
return ((function (switch__18775__auto__,c__18796__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18776__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18776__auto____0 = (function (){
var statearr_26850 = [null,null,null,null,null,null,null,null];
(statearr_26850[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18776__auto__);

(statearr_26850[(1)] = (1));

return statearr_26850;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18776__auto____1 = (function (state_26844){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_26844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e26851){if((e26851 instanceof Object)){
var ex__18779__auto__ = e26851;
var statearr_26852_26854 = state_26844;
(statearr_26852_26854[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26855 = state_26844;
state_26844 = G__26855;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18776__auto__ = function(state_26844){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18776__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18776__auto____1.call(this,state_26844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18776__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18776__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto__))
})();
var state__18798__auto__ = (function (){var statearr_26853 = f__18797__auto__.call(null);
(statearr_26853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto__);

return statearr_26853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto__))
);

return c__18796__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26856){
var map__26863 = p__26856;
var map__26863__$1 = ((((!((map__26863 == null)))?((((map__26863.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26863.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26863):map__26863);
var ed = map__26863__$1;
var formatted_exception = cljs.core.get.call(null,map__26863__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26863__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26863__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26865_26869 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26866_26870 = null;
var count__26867_26871 = (0);
var i__26868_26872 = (0);
while(true){
if((i__26868_26872 < count__26867_26871)){
var msg_26873 = cljs.core._nth.call(null,chunk__26866_26870,i__26868_26872);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26873);

var G__26874 = seq__26865_26869;
var G__26875 = chunk__26866_26870;
var G__26876 = count__26867_26871;
var G__26877 = (i__26868_26872 + (1));
seq__26865_26869 = G__26874;
chunk__26866_26870 = G__26875;
count__26867_26871 = G__26876;
i__26868_26872 = G__26877;
continue;
} else {
var temp__4425__auto___26878 = cljs.core.seq.call(null,seq__26865_26869);
if(temp__4425__auto___26878){
var seq__26865_26879__$1 = temp__4425__auto___26878;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26865_26879__$1)){
var c__17574__auto___26880 = cljs.core.chunk_first.call(null,seq__26865_26879__$1);
var G__26881 = cljs.core.chunk_rest.call(null,seq__26865_26879__$1);
var G__26882 = c__17574__auto___26880;
var G__26883 = cljs.core.count.call(null,c__17574__auto___26880);
var G__26884 = (0);
seq__26865_26869 = G__26881;
chunk__26866_26870 = G__26882;
count__26867_26871 = G__26883;
i__26868_26872 = G__26884;
continue;
} else {
var msg_26885 = cljs.core.first.call(null,seq__26865_26879__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26885);

var G__26886 = cljs.core.next.call(null,seq__26865_26879__$1);
var G__26887 = null;
var G__26888 = (0);
var G__26889 = (0);
seq__26865_26869 = G__26886;
chunk__26866_26870 = G__26887;
count__26867_26871 = G__26888;
i__26868_26872 = G__26889;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26890){
var map__26893 = p__26890;
var map__26893__$1 = ((((!((map__26893 == null)))?((((map__26893.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26893.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26893):map__26893);
var w = map__26893__$1;
var message = cljs.core.get.call(null,map__26893__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__26901 = cljs.core.seq.call(null,plugins);
var chunk__26902 = null;
var count__26903 = (0);
var i__26904 = (0);
while(true){
if((i__26904 < count__26903)){
var vec__26905 = cljs.core._nth.call(null,chunk__26902,i__26904);
var k = cljs.core.nth.call(null,vec__26905,(0),null);
var plugin = cljs.core.nth.call(null,vec__26905,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26907 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26901,chunk__26902,count__26903,i__26904,pl_26907,vec__26905,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26907.call(null,msg_hist);
});})(seq__26901,chunk__26902,count__26903,i__26904,pl_26907,vec__26905,k,plugin))
);
} else {
}

var G__26908 = seq__26901;
var G__26909 = chunk__26902;
var G__26910 = count__26903;
var G__26911 = (i__26904 + (1));
seq__26901 = G__26908;
chunk__26902 = G__26909;
count__26903 = G__26910;
i__26904 = G__26911;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26901);
if(temp__4425__auto__){
var seq__26901__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26901__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__26901__$1);
var G__26912 = cljs.core.chunk_rest.call(null,seq__26901__$1);
var G__26913 = c__17574__auto__;
var G__26914 = cljs.core.count.call(null,c__17574__auto__);
var G__26915 = (0);
seq__26901 = G__26912;
chunk__26902 = G__26913;
count__26903 = G__26914;
i__26904 = G__26915;
continue;
} else {
var vec__26906 = cljs.core.first.call(null,seq__26901__$1);
var k = cljs.core.nth.call(null,vec__26906,(0),null);
var plugin = cljs.core.nth.call(null,vec__26906,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26916 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26901,chunk__26902,count__26903,i__26904,pl_26916,vec__26906,k,plugin,seq__26901__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26916.call(null,msg_hist);
});})(seq__26901,chunk__26902,count__26903,i__26904,pl_26916,vec__26906,k,plugin,seq__26901__$1,temp__4425__auto__))
);
} else {
}

var G__26917 = cljs.core.next.call(null,seq__26901__$1);
var G__26918 = null;
var G__26919 = (0);
var G__26920 = (0);
seq__26901 = G__26917;
chunk__26902 = G__26918;
count__26903 = G__26919;
i__26904 = G__26920;
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
var args26921 = [];
var len__17829__auto___26924 = arguments.length;
var i__17830__auto___26925 = (0);
while(true){
if((i__17830__auto___26925 < len__17829__auto___26924)){
args26921.push((arguments[i__17830__auto___26925]));

var G__26926 = (i__17830__auto___26925 + (1));
i__17830__auto___26925 = G__26926;
continue;
} else {
}
break;
}

var G__26923 = args26921.length;
switch (G__26923) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26921.length)].join('')));

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
var args__17836__auto__ = [];
var len__17829__auto___26932 = arguments.length;
var i__17830__auto___26933 = (0);
while(true){
if((i__17830__auto___26933 < len__17829__auto___26932)){
args__17836__auto__.push((arguments[i__17830__auto___26933]));

var G__26934 = (i__17830__auto___26933 + (1));
i__17830__auto___26933 = G__26934;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((0) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17837__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26929){
var map__26930 = p__26929;
var map__26930__$1 = ((((!((map__26930 == null)))?((((map__26930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26930):map__26930);
var opts = map__26930__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26928){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26928));
});

//# sourceMappingURL=client.js.map