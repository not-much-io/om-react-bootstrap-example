// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_next_mini_app.parser');
goog.require('cljs.core');
goog.require('om.next');
if(typeof om_next_mini_app.parser.read !== 'undefined'){
} else {
om_next_mini_app.parser.read = (function (){var method_table__17684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17685__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17686__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17687__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17688__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-next-mini-app.parser","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17688__auto__,method_table__17684__auto__,prefer_table__17685__auto__,method_cache__17686__auto__,cached_hierarchy__17687__auto__));
})();
}
cljs.core._add_method.call(null,om_next_mini_app.parser.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__18004,key,_){
var map__18005 = p__18004;
var map__18005__$1 = ((((!((map__18005 == null)))?((((map__18005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18005):map__18005);
var state = cljs.core.get.call(null,map__18005__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),key.call(null,cljs.core.deref.call(null,state))], null);
}));
if(typeof om_next_mini_app.parser.mutate !== 'undefined'){
} else {
om_next_mini_app.parser.mutate = (function (){var method_table__17684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17685__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17686__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17687__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17688__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-next-mini-app.parser","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17688__auto__,method_table__17684__auto__,prefer_table__17685__auto__,method_cache__17686__auto__,cached_hierarchy__17687__auto__));
})();
}
cljs.core._add_method.call(null,om_next_mini_app.parser.mutate,new cljs.core.Symbol("todos","add","todos/add",379968113,null),(function (p__18007,_,p__18008){
var map__18009 = p__18007;
var map__18009__$1 = ((((!((map__18009 == null)))?((((map__18009.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18009.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18009):map__18009);
var state = cljs.core.get.call(null,map__18009__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__18010 = p__18008;
var map__18010__$1 = ((((!((map__18010 == null)))?((((map__18010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18010):map__18010);
var title = cljs.core.get.call(null,map__18010__$1,new cljs.core.Keyword(null,"title","title",636505583));
var priority = cljs.core.get.call(null,map__18010__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__18009,map__18009__$1,state,map__18010,map__18010__$1,title,priority){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868)], null),((function (map__18009,map__18009__$1,state,map__18010,map__18010__$1,title,priority){
return (function (curr_todos){
return cljs.core.conj.call(null,curr_todos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"priority","priority",1431093715),priority], null));
});})(map__18009,map__18009__$1,state,map__18010,map__18010__$1,title,priority))
);
});})(map__18009,map__18009__$1,state,map__18010,map__18010__$1,title,priority))
], null);
}));
cljs.core._add_method.call(null,om_next_mini_app.parser.mutate,new cljs.core.Symbol("todos","remove","todos/remove",1348122428,null),(function (p__18014,_,p__18015){
var map__18016 = p__18014;
var map__18016__$1 = ((((!((map__18016 == null)))?((((map__18016.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18016.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18016):map__18016);
var state = cljs.core.get.call(null,map__18016__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__18017 = p__18015;
var map__18017__$1 = ((((!((map__18017 == null)))?((((map__18017.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18017.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18017):map__18017);
var title = cljs.core.get.call(null,map__18017__$1,new cljs.core.Keyword(null,"title","title",636505583));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__18016,map__18016__$1,state,map__18017,map__18017__$1,title){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868)], null),((function (map__18016,map__18016__$1,state,map__18017,map__18017__$1,title){
return (function (curr_todos){
return cljs.core.filter.call(null,((function (map__18016,map__18016__$1,state,map__18017,map__18017__$1,title){
return (function (p1__18013_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__18013_SHARP_),title);
});})(map__18016,map__18016__$1,state,map__18017,map__18017__$1,title))
,curr_todos);
});})(map__18016,map__18016__$1,state,map__18017,map__18017__$1,title))
);
});})(map__18016,map__18016__$1,state,map__18017,map__18017__$1,title))
], null);
}));
om_next_mini_app.parser.parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),om_next_mini_app.parser.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),om_next_mini_app.parser.mutate], null));

//# sourceMappingURL=parser.js.map