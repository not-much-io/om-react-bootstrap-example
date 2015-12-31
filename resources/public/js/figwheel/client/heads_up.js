// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17837__auto__ = [];
var len__17830__auto___27932 = arguments.length;
var i__17831__auto___27933 = (0);
while(true){
if((i__17831__auto___27933 < len__17830__auto___27932)){
args__17837__auto__.push((arguments[i__17831__auto___27933]));

var G__27934 = (i__17831__auto___27933 + (1));
i__17831__auto___27933 = G__27934;
continue;
} else {
}
break;
}

var argseq__17838__auto__ = ((((2) < args__17837__auto__.length))?(new cljs.core.IndexedSeq(args__17837__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17838__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__27924_27935 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__27925_27936 = null;
var count__27926_27937 = (0);
var i__27927_27938 = (0);
while(true){
if((i__27927_27938 < count__27926_27937)){
var k_27939 = cljs.core._nth.call(null,chunk__27925_27936,i__27927_27938);
e.setAttribute(cljs.core.name.call(null,k_27939),cljs.core.get.call(null,attrs,k_27939));

var G__27940 = seq__27924_27935;
var G__27941 = chunk__27925_27936;
var G__27942 = count__27926_27937;
var G__27943 = (i__27927_27938 + (1));
seq__27924_27935 = G__27940;
chunk__27925_27936 = G__27941;
count__27926_27937 = G__27942;
i__27927_27938 = G__27943;
continue;
} else {
var temp__4425__auto___27944 = cljs.core.seq.call(null,seq__27924_27935);
if(temp__4425__auto___27944){
var seq__27924_27945__$1 = temp__4425__auto___27944;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27924_27945__$1)){
var c__17575__auto___27946 = cljs.core.chunk_first.call(null,seq__27924_27945__$1);
var G__27947 = cljs.core.chunk_rest.call(null,seq__27924_27945__$1);
var G__27948 = c__17575__auto___27946;
var G__27949 = cljs.core.count.call(null,c__17575__auto___27946);
var G__27950 = (0);
seq__27924_27935 = G__27947;
chunk__27925_27936 = G__27948;
count__27926_27937 = G__27949;
i__27927_27938 = G__27950;
continue;
} else {
var k_27951 = cljs.core.first.call(null,seq__27924_27945__$1);
e.setAttribute(cljs.core.name.call(null,k_27951),cljs.core.get.call(null,attrs,k_27951));

var G__27952 = cljs.core.next.call(null,seq__27924_27945__$1);
var G__27953 = null;
var G__27954 = (0);
var G__27955 = (0);
seq__27924_27935 = G__27952;
chunk__27925_27936 = G__27953;
count__27926_27937 = G__27954;
i__27927_27938 = G__27955;
continue;
}
} else {
}
}
break;
}

var seq__27928_27956 = cljs.core.seq.call(null,children);
var chunk__27929_27957 = null;
var count__27930_27958 = (0);
var i__27931_27959 = (0);
while(true){
if((i__27931_27959 < count__27930_27958)){
var ch_27960 = cljs.core._nth.call(null,chunk__27929_27957,i__27931_27959);
e.appendChild(ch_27960);

var G__27961 = seq__27928_27956;
var G__27962 = chunk__27929_27957;
var G__27963 = count__27930_27958;
var G__27964 = (i__27931_27959 + (1));
seq__27928_27956 = G__27961;
chunk__27929_27957 = G__27962;
count__27930_27958 = G__27963;
i__27931_27959 = G__27964;
continue;
} else {
var temp__4425__auto___27965 = cljs.core.seq.call(null,seq__27928_27956);
if(temp__4425__auto___27965){
var seq__27928_27966__$1 = temp__4425__auto___27965;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27928_27966__$1)){
var c__17575__auto___27967 = cljs.core.chunk_first.call(null,seq__27928_27966__$1);
var G__27968 = cljs.core.chunk_rest.call(null,seq__27928_27966__$1);
var G__27969 = c__17575__auto___27967;
var G__27970 = cljs.core.count.call(null,c__17575__auto___27967);
var G__27971 = (0);
seq__27928_27956 = G__27968;
chunk__27929_27957 = G__27969;
count__27930_27958 = G__27970;
i__27931_27959 = G__27971;
continue;
} else {
var ch_27972 = cljs.core.first.call(null,seq__27928_27966__$1);
e.appendChild(ch_27972);

var G__27973 = cljs.core.next.call(null,seq__27928_27966__$1);
var G__27974 = null;
var G__27975 = (0);
var G__27976 = (0);
seq__27928_27956 = G__27973;
chunk__27929_27957 = G__27974;
count__27930_27958 = G__27975;
i__27931_27959 = G__27976;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq27921){
var G__27922 = cljs.core.first.call(null,seq27921);
var seq27921__$1 = cljs.core.next.call(null,seq27921);
var G__27923 = cljs.core.first.call(null,seq27921__$1);
var seq27921__$2 = cljs.core.next.call(null,seq27921__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__27922,G__27923,seq27921__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17685__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17686__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17687__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17688__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17689__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17685__auto__,prefer_table__17686__auto__,method_cache__17687__auto__,cached_hierarchy__17688__auto__,hierarchy__17689__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17685__auto__,prefer_table__17686__auto__,method_cache__17687__auto__,cached_hierarchy__17688__auto__,hierarchy__17689__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17689__auto__,method_table__17685__auto__,prefer_table__17686__auto__,method_cache__17687__auto__,cached_hierarchy__17688__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_27977 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_27977.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_27977.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_27977.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_27977);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__27978,st_map){
var map__27983 = p__27978;
var map__27983__$1 = ((((!((map__27983 == null)))?((((map__27983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27983):map__27983);
var container_el = cljs.core.get.call(null,map__27983__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__27983,map__27983__$1,container_el){
return (function (p__27985){
var vec__27986 = p__27985;
var k = cljs.core.nth.call(null,vec__27986,(0),null);
var v = cljs.core.nth.call(null,vec__27986,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__27983,map__27983__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__27987,dom_str){
var map__27990 = p__27987;
var map__27990__$1 = ((((!((map__27990 == null)))?((((map__27990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27990):map__27990);
var c = map__27990__$1;
var content_area_el = cljs.core.get.call(null,map__27990__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__27992){
var map__27995 = p__27992;
var map__27995__$1 = ((((!((map__27995 == null)))?((((map__27995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27995):map__27995);
var content_area_el = cljs.core.get.call(null,map__27995__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__18797__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18797__auto__){
return (function (){
var f__18798__auto__ = (function (){var switch__18776__auto__ = ((function (c__18797__auto__){
return (function (state_28038){
var state_val_28039 = (state_28038[(1)]);
if((state_val_28039 === (1))){
var inst_28023 = (state_28038[(7)]);
var inst_28023__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28024 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28025 = ["10px","10px","100%","68px","1.0"];
var inst_28026 = cljs.core.PersistentHashMap.fromArrays(inst_28024,inst_28025);
var inst_28027 = cljs.core.merge.call(null,inst_28026,style);
var inst_28028 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28023__$1,inst_28027);
var inst_28029 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28023__$1,msg);
var inst_28030 = cljs.core.async.timeout.call(null,(300));
var state_28038__$1 = (function (){var statearr_28040 = state_28038;
(statearr_28040[(8)] = inst_28028);

(statearr_28040[(7)] = inst_28023__$1);

(statearr_28040[(9)] = inst_28029);

return statearr_28040;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28038__$1,(2),inst_28030);
} else {
if((state_val_28039 === (2))){
var inst_28023 = (state_28038[(7)]);
var inst_28032 = (state_28038[(2)]);
var inst_28033 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28034 = ["auto"];
var inst_28035 = cljs.core.PersistentHashMap.fromArrays(inst_28033,inst_28034);
var inst_28036 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28023,inst_28035);
var state_28038__$1 = (function (){var statearr_28041 = state_28038;
(statearr_28041[(10)] = inst_28032);

return statearr_28041;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28038__$1,inst_28036);
} else {
return null;
}
}
});})(c__18797__auto__))
;
return ((function (switch__18776__auto__,c__18797__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__18777__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__18777__auto____0 = (function (){
var statearr_28045 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28045[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__18777__auto__);

(statearr_28045[(1)] = (1));

return statearr_28045;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__18777__auto____1 = (function (state_28038){
while(true){
var ret_value__18778__auto__ = (function (){try{while(true){
var result__18779__auto__ = switch__18776__auto__.call(null,state_28038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18779__auto__;
}
break;
}
}catch (e28046){if((e28046 instanceof Object)){
var ex__18780__auto__ = e28046;
var statearr_28047_28049 = state_28038;
(statearr_28047_28049[(5)] = ex__18780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28050 = state_28038;
state_28038 = G__28050;
continue;
} else {
return ret_value__18778__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__18777__auto__ = function(state_28038){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18777__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18777__auto____1.call(this,state_28038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__18777__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__18777__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__18777__auto__;
})()
;})(switch__18776__auto__,c__18797__auto__))
})();
var state__18799__auto__ = (function (){var statearr_28048 = f__18798__auto__.call(null);
(statearr_28048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18797__auto__);

return statearr_28048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18799__auto__);
});})(c__18797__auto__))
);

return c__18797__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__28052 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__28052,(0),null);
var ln = cljs.core.nth.call(null,vec__28052,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__28055 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__28055,(0),null);
var file_line = cljs.core.nth.call(null,vec__28055,(1),null);
var file_column = cljs.core.nth.call(null,vec__28055,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__28055,file_name,file_line,file_column){
return (function (p1__28053_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__28053_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__28055,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16771__auto__ = file_line;
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
var and__16759__auto__ = cause;
if(cljs.core.truth_(and__16759__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16759__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__28058 = figwheel.client.heads_up.ensure_container.call(null);
var map__28058__$1 = ((((!((map__28058 == null)))?((((map__28058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28058):map__28058);
var content_area_el = cljs.core.get.call(null,map__28058__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__18797__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18797__auto__){
return (function (){
var f__18798__auto__ = (function (){var switch__18776__auto__ = ((function (c__18797__auto__){
return (function (state_28106){
var state_val_28107 = (state_28106[(1)]);
if((state_val_28107 === (1))){
var inst_28089 = (state_28106[(7)]);
var inst_28089__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28090 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28091 = ["0.0"];
var inst_28092 = cljs.core.PersistentHashMap.fromArrays(inst_28090,inst_28091);
var inst_28093 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28089__$1,inst_28092);
var inst_28094 = cljs.core.async.timeout.call(null,(300));
var state_28106__$1 = (function (){var statearr_28108 = state_28106;
(statearr_28108[(7)] = inst_28089__$1);

(statearr_28108[(8)] = inst_28093);

return statearr_28108;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28106__$1,(2),inst_28094);
} else {
if((state_val_28107 === (2))){
var inst_28089 = (state_28106[(7)]);
var inst_28096 = (state_28106[(2)]);
var inst_28097 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_28098 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_28099 = cljs.core.PersistentHashMap.fromArrays(inst_28097,inst_28098);
var inst_28100 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28089,inst_28099);
var inst_28101 = cljs.core.async.timeout.call(null,(200));
var state_28106__$1 = (function (){var statearr_28109 = state_28106;
(statearr_28109[(9)] = inst_28100);

(statearr_28109[(10)] = inst_28096);

return statearr_28109;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28106__$1,(3),inst_28101);
} else {
if((state_val_28107 === (3))){
var inst_28089 = (state_28106[(7)]);
var inst_28103 = (state_28106[(2)]);
var inst_28104 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28089,"");
var state_28106__$1 = (function (){var statearr_28110 = state_28106;
(statearr_28110[(11)] = inst_28103);

return statearr_28110;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28106__$1,inst_28104);
} else {
return null;
}
}
}
});})(c__18797__auto__))
;
return ((function (switch__18776__auto__,c__18797__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__18777__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__18777__auto____0 = (function (){
var statearr_28114 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28114[(0)] = figwheel$client$heads_up$clear_$_state_machine__18777__auto__);

(statearr_28114[(1)] = (1));

return statearr_28114;
});
var figwheel$client$heads_up$clear_$_state_machine__18777__auto____1 = (function (state_28106){
while(true){
var ret_value__18778__auto__ = (function (){try{while(true){
var result__18779__auto__ = switch__18776__auto__.call(null,state_28106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18779__auto__;
}
break;
}
}catch (e28115){if((e28115 instanceof Object)){
var ex__18780__auto__ = e28115;
var statearr_28116_28118 = state_28106;
(statearr_28116_28118[(5)] = ex__18780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28119 = state_28106;
state_28106 = G__28119;
continue;
} else {
return ret_value__18778__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__18777__auto__ = function(state_28106){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__18777__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__18777__auto____1.call(this,state_28106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__18777__auto____0;
figwheel$client$heads_up$clear_$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__18777__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__18777__auto__;
})()
;})(switch__18776__auto__,c__18797__auto__))
})();
var state__18799__auto__ = (function (){var statearr_28117 = f__18798__auto__.call(null);
(statearr_28117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18797__auto__);

return statearr_28117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18799__auto__);
});})(c__18797__auto__))
);

return c__18797__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__18797__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18797__auto__){
return (function (){
var f__18798__auto__ = (function (){var switch__18776__auto__ = ((function (c__18797__auto__){
return (function (state_28151){
var state_val_28152 = (state_28151[(1)]);
if((state_val_28152 === (1))){
var inst_28141 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_28151__$1 = state_28151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28151__$1,(2),inst_28141);
} else {
if((state_val_28152 === (2))){
var inst_28143 = (state_28151[(2)]);
var inst_28144 = cljs.core.async.timeout.call(null,(400));
var state_28151__$1 = (function (){var statearr_28153 = state_28151;
(statearr_28153[(7)] = inst_28143);

return statearr_28153;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28151__$1,(3),inst_28144);
} else {
if((state_val_28152 === (3))){
var inst_28146 = (state_28151[(2)]);
var inst_28147 = figwheel.client.heads_up.clear.call(null);
var state_28151__$1 = (function (){var statearr_28154 = state_28151;
(statearr_28154[(8)] = inst_28146);

return statearr_28154;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28151__$1,(4),inst_28147);
} else {
if((state_val_28152 === (4))){
var inst_28149 = (state_28151[(2)]);
var state_28151__$1 = state_28151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28151__$1,inst_28149);
} else {
return null;
}
}
}
}
});})(c__18797__auto__))
;
return ((function (switch__18776__auto__,c__18797__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__18777__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__18777__auto____0 = (function (){
var statearr_28158 = [null,null,null,null,null,null,null,null,null];
(statearr_28158[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__18777__auto__);

(statearr_28158[(1)] = (1));

return statearr_28158;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__18777__auto____1 = (function (state_28151){
while(true){
var ret_value__18778__auto__ = (function (){try{while(true){
var result__18779__auto__ = switch__18776__auto__.call(null,state_28151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18779__auto__;
}
break;
}
}catch (e28159){if((e28159 instanceof Object)){
var ex__18780__auto__ = e28159;
var statearr_28160_28162 = state_28151;
(statearr_28160_28162[(5)] = ex__18780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28163 = state_28151;
state_28151 = G__28163;
continue;
} else {
return ret_value__18778__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__18777__auto__ = function(state_28151){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18777__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18777__auto____1.call(this,state_28151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__18777__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__18777__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__18777__auto__;
})()
;})(switch__18776__auto__,c__18797__auto__))
})();
var state__18799__auto__ = (function (){var statearr_28161 = f__18798__auto__.call(null);
(statearr_28161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18797__auto__);

return statearr_28161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18799__auto__);
});})(c__18797__auto__))
);

return c__18797__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map