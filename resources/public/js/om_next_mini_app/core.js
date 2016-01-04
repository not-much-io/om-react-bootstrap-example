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
om_next_mini_app.core.bsNavBar = React.createFactory(ReactBootstrap.Navbar);
om_next_mini_app.core.bsPageHeader = React.createFactory(ReactBootstrap.PageHeader);
om_next_mini_app.core.bsButtonToolbar = React.createFactory(ReactBootstrap.ButtonToolbar);
om_next_mini_app.core.bsButton = React.createFactory(ReactBootstrap.Button);
om_next_mini_app.core.bsPanel = React.createFactory(ReactBootstrap.Panel);
om_next_mini_app.core.bsAccordion = React.createFactory(ReactBootstrap.Accordion);
om_next_mini_app.core.bsProgressBar = React.createFactory(ReactBootstrap.ProgressBar);
om_next_mini_app.core.bsInput = React.createFactory(ReactBootstrap.Input);
/**
 * @constructor
 */
om_next_mini_app.core.Root = (function om_next_mini_app$core$Root(){
var this__18971__auto__ = this;
React.Component.apply(this__18971__auto__,arguments);

if(!((this__18971__auto__.initLocalState == null))){
this__18971__auto__.state = this__18971__auto__.initLocalState();
} else {
this__18971__auto__.state = {};
}

return this__18971__auto__;
});

om_next_mini_app.core.Root.prototype = goog.object.clone(React.Component.prototype);

var x26985_26993 = om_next_mini_app.core.Root.prototype;
x26985_26993.componentWillUpdate = ((function (x26985_26993){
return (function (next_props__18912__auto__,next_state__18913__auto__){
var this__18911__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__18911__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18911__auto__);
});})(x26985_26993))
;

x26985_26993.shouldComponentUpdate = ((function (x26985_26993){
return (function (next_props__18912__auto__,next_state__18913__auto__){
var this__18911__auto__ = this;
var or__16771__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18911__auto__),goog.object.get(next_props__18912__auto__,"omcljs$value"));
if(or__16771__auto__){
return or__16771__auto__;
} else {
var and__16759__auto__ = this__18911__auto__.state;
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18911__auto__.state,"omcljs$state"),goog.object.get(next_state__18913__auto__,"omcljs$state"));
} else {
return and__16759__auto__;
}
}
});})(x26985_26993))
;

x26985_26993.componentWillUnmount = ((function (x26985_26993){
return (function (){
var this__18911__auto__ = this;
var r__18917__auto__ = om.next.get_reconciler.call(null,this__18911__auto__);
var cfg__18918__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18917__auto__);
var st__18919__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18918__auto__);
var indexer__18916__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18918__auto__);
if((st__18919__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__18919__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18911__auto__);
}

if((indexer__18916__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18916__auto__,this__18911__auto__);
}
});})(x26985_26993))
;

x26985_26993.componentDidUpdate = ((function (x26985_26993){
return (function (prev_props__18914__auto__,prev_state__18915__auto__){
var this__18911__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18911__auto__);
});})(x26985_26993))
;

x26985_26993.isMounted = ((function (x26985_26993){
return (function (){
var this__18911__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18911__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x26985_26993))
;

x26985_26993.componentWillMount = ((function (x26985_26993){
return (function (){
var this__18911__auto__ = this;
var indexer__18916__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18911__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18916__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18916__auto__,this__18911__auto__);
}
});})(x26985_26993))
;

x26985_26993.render = ((function (x26985_26993){
return (function (){
var this__18910__auto__ = this;
var this$ = this__18910__auto__;
var _STAR_reconciler_STAR_26986 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_26987 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_26988 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_26989 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_26990 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18910__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18910__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18910__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18910__auto__);

om.next._STAR_parent_STAR_ = this__18910__auto__;

try{return React.DOM.div(null,om.util.force_children.call(null,om_next_mini_app.core.bsNavBar.call(null,null,"")),om.util.force_children.call(null,om_next_mini_app.core.bsPageHeader.call(null,null,"Example page header")),om.util.force_children.call(null,om_next_mini_app.core.bsInput.call(null,{"type": "text", "label": "Label", "placeholder": "Placeholder"})),om.util.force_children.call(null,om_next_mini_app.core.bsAccordion.call(null,null,om_next_mini_app.core.bsPanel.call(null,{"header": "Header1", "eventKey": "1"},"Text1"),om_next_mini_app.core.bsPanel.call(null,{"header": "Header2", "eventKey": "2"},"Text2"),om_next_mini_app.core.bsPanel.call(null,{"header": "Header3", "eventKey": "3"},"Text3"))),om.util.force_children.call(null,om_next_mini_app.core.bsProgressBar.call(null,{"now": (45)})),om.util.force_children.call(null,om_next_mini_app.core.bsButtonToolbar.call(null,null,cljs.core.map.call(null,((function (_STAR_reconciler_STAR_26986,_STAR_depth_STAR_26987,_STAR_shared_STAR_26988,_STAR_instrument_STAR_26989,_STAR_parent_STAR_26990,this$,this__18910__auto__,x26985_26993){
return (function (p1__26980_SHARP_){
return om_next_mini_app.core.bsButton.call(null,{"bsStyle": p1__26980_SHARP_, "onClick": ((function (_STAR_reconciler_STAR_26986,_STAR_depth_STAR_26987,_STAR_shared_STAR_26988,_STAR_instrument_STAR_26989,_STAR_parent_STAR_26990,this$,this__18910__auto__,x26985_26993){
return (function (){
return cljs.core.println.call(null,p1__26980_SHARP_);
});})(_STAR_reconciler_STAR_26986,_STAR_depth_STAR_26987,_STAR_shared_STAR_26988,_STAR_instrument_STAR_26989,_STAR_parent_STAR_26990,this$,this__18910__auto__,x26985_26993))
, "key": p1__26980_SHARP_},p1__26980_SHARP_);
});})(_STAR_reconciler_STAR_26986,_STAR_depth_STAR_26987,_STAR_shared_STAR_26988,_STAR_instrument_STAR_26989,_STAR_parent_STAR_26990,this$,this__18910__auto__,x26985_26993))
,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["default","primary","success","info","warning","danger"], null)))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_26990;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_26989;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_26988;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_26987;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_26986;
}});})(x26985_26993))
;


om_next_mini_app.core.Root.prototype.constructor = om_next_mini_app.core.Root;

om_next_mini_app.core.Root.prototype.om$isComponent = true;

var x26991_26994 = om_next_mini_app.core.Root;


var x26992_26995 = om_next_mini_app.core.Root.prototype;


om_next_mini_app.core.Root.cljs$lang$type = true;

om_next_mini_app.core.Root.cljs$lang$ctorStr = "om-next-mini-app.core/Root";

om_next_mini_app.core.Root.cljs$lang$ctorPrWriter = (function (this__18973__auto__,writer__18974__auto__,opt__18975__auto__){
return cljs.core._write.call(null,writer__18974__auto__,"om-next-mini-app.core/Root");
});
om.next.add_root_BANG_.call(null,om_next_mini_app.core.reconciler,om_next_mini_app.core.Root,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map