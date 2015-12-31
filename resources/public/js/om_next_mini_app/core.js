// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_next_mini_app.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
goog.require('om_next_mini_app.parser');
goog.require('cljsjs.react_bootstrap');
cljs.core.enable_console_print_BANG_.call(null);
om_next_mini_app.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"app-title","app-title",1908483663),"Minimal Om Todo",new cljs.core.Keyword(null,"todos","todos",630308868),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Keep an eye on bunny",new cljs.core.Keyword(null,"priority","priority",1431093715),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Get something to eat",new cljs.core.Keyword(null,"priority","priority",1431093715),(3)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Read books",new cljs.core.Keyword(null,"priority","priority",1431093715),(4)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Write code",new cljs.core.Keyword(null,"priority","priority",1431093715),(2)], null)], null)], null));
om_next_mini_app.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_next_mini_app.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om_next_mini_app.parser.parser], null));
om_next_mini_app.core.rbootButton = React.createFactory(ReactBootstrap.Button);
/**
 * @constructor
 */
om_next_mini_app.core.Root = (function om_next_mini_app$core$Root(){
var this__21088__auto__ = this;
React.Component.apply(this__21088__auto__,arguments);

if(!((this__21088__auto__.initLocalState == null))){
this__21088__auto__.state = this__21088__auto__.initLocalState();
} else {
this__21088__auto__.state = {};
}

return this__21088__auto__;
});

om_next_mini_app.core.Root.prototype = goog.object.clone(React.Component.prototype);

var x30503_30511 = om_next_mini_app.core.Root.prototype;
x30503_30511.componentWillUpdate = ((function (x30503_30511){
return (function (next_props__21029__auto__,next_state__21030__auto__){
var this__21028__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__21028__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21028__auto__);
});})(x30503_30511))
;

x30503_30511.shouldComponentUpdate = ((function (x30503_30511){
return (function (next_props__21029__auto__,next_state__21030__auto__){
var this__21028__auto__ = this;
var or__16771__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__21028__auto__),goog.object.get(next_props__21029__auto__,"omcljs$value"));
if(or__16771__auto__){
return or__16771__auto__;
} else {
var and__16759__auto__ = this__21028__auto__.state;
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__21028__auto__.state,"omcljs$state"),goog.object.get(next_state__21030__auto__,"omcljs$state"));
} else {
return and__16759__auto__;
}
}
});})(x30503_30511))
;

x30503_30511.componentWillUnmount = ((function (x30503_30511){
return (function (){
var this__21028__auto__ = this;
var r__21034__auto__ = om.next.get_reconciler.call(null,this__21028__auto__);
var cfg__21035__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__21034__auto__);
var st__21036__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__21035__auto__);
var indexer__21033__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__21035__auto__);
if((st__21036__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__21036__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__21028__auto__);
}

if((indexer__21033__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__21033__auto__,this__21028__auto__);
}
});})(x30503_30511))
;

x30503_30511.componentDidUpdate = ((function (x30503_30511){
return (function (prev_props__21031__auto__,prev_state__21032__auto__){
var this__21028__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21028__auto__);
});})(x30503_30511))
;

x30503_30511.isMounted = ((function (x30503_30511){
return (function (){
var this__21028__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21028__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x30503_30511))
;

x30503_30511.componentWillMount = ((function (x30503_30511){
return (function (){
var this__21028__auto__ = this;
var indexer__21033__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21028__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21033__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21033__auto__,this__21028__auto__);
}
});})(x30503_30511))
;

x30503_30511.render = ((function (x30503_30511){
return (function (){
var this__21027__auto__ = this;
var this$ = this__21027__auto__;
var _STAR_reconciler_STAR_30504 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_30505 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_30506 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_30507 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_30508 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21027__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21027__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21027__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21027__auto__);

om.next._STAR_parent_STAR_ = this__21027__auto__;

try{return React.DOM.div(null,om.util.force_children.call(null,cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (_STAR_reconciler_STAR_30504,_STAR_depth_STAR_30505,_STAR_shared_STAR_30506,_STAR_instrument_STAR_30507,_STAR_parent_STAR_30508,this$,this__21027__auto__,x30503_30511){
return (function (p1__30498_SHARP_){
return om_next_mini_app.core.rbootButton.call(null,{"bsStyle": p1__30498_SHARP_},"Test");
});})(_STAR_reconciler_STAR_30504,_STAR_depth_STAR_30505,_STAR_shared_STAR_30506,_STAR_instrument_STAR_30507,_STAR_parent_STAR_30508,this$,this__21027__auto__,x30503_30511))
,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["default","primary","success","info","warning","danger"], null)))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_30508;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_30507;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_30506;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_30505;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_30504;
}});})(x30503_30511))
;


om_next_mini_app.core.Root.prototype.constructor = om_next_mini_app.core.Root;

om_next_mini_app.core.Root.prototype.om$isComponent = true;

var x30509_30512 = om_next_mini_app.core.Root;


var x30510_30513 = om_next_mini_app.core.Root.prototype;


om_next_mini_app.core.Root.cljs$lang$type = true;

om_next_mini_app.core.Root.cljs$lang$ctorStr = "om-next-mini-app.core/Root";

om_next_mini_app.core.Root.cljs$lang$ctorPrWriter = (function (this__21090__auto__,writer__21091__auto__,opt__21092__auto__){
return cljs.core._write.call(null,writer__21091__auto__,"om-next-mini-app.core/Root");
});
om.next.add_root_BANG_.call(null,om_next_mini_app.core.reconciler,om_next_mini_app.core.Root,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map