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
om_next_mini_app.core.bsPageHeader = React.createFactory(ReactBootstrap.PageHeader);
om_next_mini_app.core.bsButtonToolbar = React.createFactory(ReactBootstrap.ButtonToolbar);
om_next_mini_app.core.bsButton = React.createFactory(ReactBootstrap.Button);
om_next_mini_app.core.bsPanel = React.createFactory(ReactBootstrap.Panel);
om_next_mini_app.core.bsAccordion = React.createFactory(ReactBootstrap.Accordion);
om_next_mini_app.core.bsProgressBar = React.createFactory(ReactBootstrap.ProgressBar);
/**
 * @constructor
 */
om_next_mini_app.core.Root = (function om_next_mini_app$core$Root(){
var this__17979__auto__ = this;
React.Component.apply(this__17979__auto__,arguments);

if(!((this__17979__auto__.initLocalState == null))){
this__17979__auto__.state = this__17979__auto__.initLocalState();
} else {
this__17979__auto__.state = {};
}

return this__17979__auto__;
});

om_next_mini_app.core.Root.prototype = goog.object.clone(React.Component.prototype);

var x22558_22566 = om_next_mini_app.core.Root.prototype;
x22558_22566.componentWillUpdate = ((function (x22558_22566){
return (function (next_props__17920__auto__,next_state__17921__auto__){
var this__17919__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__17919__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__17919__auto__);
});})(x22558_22566))
;

x22558_22566.shouldComponentUpdate = ((function (x22558_22566){
return (function (next_props__17920__auto__,next_state__17921__auto__){
var this__17919__auto__ = this;
var or__16771__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__17919__auto__),goog.object.get(next_props__17920__auto__,"omcljs$value"));
if(or__16771__auto__){
return or__16771__auto__;
} else {
var and__16759__auto__ = this__17919__auto__.state;
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__17919__auto__.state,"omcljs$state"),goog.object.get(next_state__17921__auto__,"omcljs$state"));
} else {
return and__16759__auto__;
}
}
});})(x22558_22566))
;

x22558_22566.componentWillUnmount = ((function (x22558_22566){
return (function (){
var this__17919__auto__ = this;
var r__17925__auto__ = om.next.get_reconciler.call(null,this__17919__auto__);
var cfg__17926__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__17925__auto__);
var st__17927__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__17926__auto__);
var indexer__17924__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__17926__auto__);
if((st__17927__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__17927__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__17919__auto__);
}

if((indexer__17924__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__17924__auto__,this__17919__auto__);
}
});})(x22558_22566))
;

x22558_22566.componentDidUpdate = ((function (x22558_22566){
return (function (prev_props__17922__auto__,prev_state__17923__auto__){
var this__17919__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__17919__auto__);
});})(x22558_22566))
;

x22558_22566.isMounted = ((function (x22558_22566){
return (function (){
var this__17919__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__17919__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22558_22566))
;

x22558_22566.componentWillMount = ((function (x22558_22566){
return (function (){
var this__17919__auto__ = this;
var indexer__17924__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__17919__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__17924__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__17924__auto__,this__17919__auto__);
}
});})(x22558_22566))
;

x22558_22566.render = ((function (x22558_22566){
return (function (){
var this__17918__auto__ = this;
var this$ = this__17918__auto__;
var _STAR_reconciler_STAR_22559 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_22560 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_22561 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_22562 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_22563 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__17918__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__17918__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__17918__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__17918__auto__);

om.next._STAR_parent_STAR_ = this__17918__auto__;

try{return React.DOM.div(null,om.util.force_children.call(null,om_next_mini_app.core.bsPageHeader.call(null,null,"Example page header")),om.util.force_children.call(null,om_next_mini_app.core.bsAccordion.call(null,null,om_next_mini_app.core.bsPanel.call(null,{"header": "Header1", "eventKey": "1"},"Text1"),om_next_mini_app.core.bsPanel.call(null,{"header": "Header2", "eventKey": "2"},"Text2"),om_next_mini_app.core.bsPanel.call(null,{"header": "Header3", "eventKey": "3"},"Text3"))),om.util.force_children.call(null,om_next_mini_app.core.bsProgressBar.call(null,{"now": (45)})),om.util.force_children.call(null,om_next_mini_app.core.bsButtonToolbar.call(null,null,cljs.core.map.call(null,((function (_STAR_reconciler_STAR_22559,_STAR_depth_STAR_22560,_STAR_shared_STAR_22561,_STAR_instrument_STAR_22562,_STAR_parent_STAR_22563,this$,this__17918__auto__,x22558_22566){
return (function (p1__22553_SHARP_){
return om_next_mini_app.core.bsButton.call(null,{"bsStyle": p1__22553_SHARP_, "onClick": ((function (_STAR_reconciler_STAR_22559,_STAR_depth_STAR_22560,_STAR_shared_STAR_22561,_STAR_instrument_STAR_22562,_STAR_parent_STAR_22563,this$,this__17918__auto__,x22558_22566){
return (function (){
return cljs.core.println.call(null,p1__22553_SHARP_);
});})(_STAR_reconciler_STAR_22559,_STAR_depth_STAR_22560,_STAR_shared_STAR_22561,_STAR_instrument_STAR_22562,_STAR_parent_STAR_22563,this$,this__17918__auto__,x22558_22566))
, "key": p1__22553_SHARP_},p1__22553_SHARP_);
});})(_STAR_reconciler_STAR_22559,_STAR_depth_STAR_22560,_STAR_shared_STAR_22561,_STAR_instrument_STAR_22562,_STAR_parent_STAR_22563,this$,this__17918__auto__,x22558_22566))
,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["default","primary","success","info","warning","danger"], null)))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_22563;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_22562;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_22561;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_22560;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_22559;
}});})(x22558_22566))
;


om_next_mini_app.core.Root.prototype.constructor = om_next_mini_app.core.Root;

om_next_mini_app.core.Root.prototype.om$isComponent = true;

var x22564_22567 = om_next_mini_app.core.Root;


var x22565_22568 = om_next_mini_app.core.Root.prototype;


om_next_mini_app.core.Root.cljs$lang$type = true;

om_next_mini_app.core.Root.cljs$lang$ctorStr = "om-next-mini-app.core/Root";

om_next_mini_app.core.Root.cljs$lang$ctorPrWriter = (function (this__17981__auto__,writer__17982__auto__,opt__17983__auto__){
return cljs.core._write.call(null,writer__17982__auto__,"om-next-mini-app.core/Root");
});
om.next.add_root_BANG_.call(null,om_next_mini_app.core.reconciler,om_next_mini_app.core.Root,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map