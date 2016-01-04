// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25791_25805 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25792_25806 = null;
var count__25793_25807 = (0);
var i__25794_25808 = (0);
while(true){
if((i__25794_25808 < count__25793_25807)){
var f_25809 = cljs.core._nth.call(null,chunk__25792_25806,i__25794_25808);
cljs.core.println.call(null,"  ",f_25809);

var G__25810 = seq__25791_25805;
var G__25811 = chunk__25792_25806;
var G__25812 = count__25793_25807;
var G__25813 = (i__25794_25808 + (1));
seq__25791_25805 = G__25810;
chunk__25792_25806 = G__25811;
count__25793_25807 = G__25812;
i__25794_25808 = G__25813;
continue;
} else {
var temp__4425__auto___25814 = cljs.core.seq.call(null,seq__25791_25805);
if(temp__4425__auto___25814){
var seq__25791_25815__$1 = temp__4425__auto___25814;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25791_25815__$1)){
var c__17574__auto___25816 = cljs.core.chunk_first.call(null,seq__25791_25815__$1);
var G__25817 = cljs.core.chunk_rest.call(null,seq__25791_25815__$1);
var G__25818 = c__17574__auto___25816;
var G__25819 = cljs.core.count.call(null,c__17574__auto___25816);
var G__25820 = (0);
seq__25791_25805 = G__25817;
chunk__25792_25806 = G__25818;
count__25793_25807 = G__25819;
i__25794_25808 = G__25820;
continue;
} else {
var f_25821 = cljs.core.first.call(null,seq__25791_25815__$1);
cljs.core.println.call(null,"  ",f_25821);

var G__25822 = cljs.core.next.call(null,seq__25791_25815__$1);
var G__25823 = null;
var G__25824 = (0);
var G__25825 = (0);
seq__25791_25805 = G__25822;
chunk__25792_25806 = G__25823;
count__25793_25807 = G__25824;
i__25794_25808 = G__25825;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25826 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16771__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25826);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25826)))?cljs.core.second.call(null,arglists_25826):arglists_25826));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25795 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25796 = null;
var count__25797 = (0);
var i__25798 = (0);
while(true){
if((i__25798 < count__25797)){
var vec__25799 = cljs.core._nth.call(null,chunk__25796,i__25798);
var name = cljs.core.nth.call(null,vec__25799,(0),null);
var map__25800 = cljs.core.nth.call(null,vec__25799,(1),null);
var map__25800__$1 = ((((!((map__25800 == null)))?((((map__25800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25800):map__25800);
var doc = cljs.core.get.call(null,map__25800__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25800__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25827 = seq__25795;
var G__25828 = chunk__25796;
var G__25829 = count__25797;
var G__25830 = (i__25798 + (1));
seq__25795 = G__25827;
chunk__25796 = G__25828;
count__25797 = G__25829;
i__25798 = G__25830;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25795);
if(temp__4425__auto__){
var seq__25795__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25795__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__25795__$1);
var G__25831 = cljs.core.chunk_rest.call(null,seq__25795__$1);
var G__25832 = c__17574__auto__;
var G__25833 = cljs.core.count.call(null,c__17574__auto__);
var G__25834 = (0);
seq__25795 = G__25831;
chunk__25796 = G__25832;
count__25797 = G__25833;
i__25798 = G__25834;
continue;
} else {
var vec__25802 = cljs.core.first.call(null,seq__25795__$1);
var name = cljs.core.nth.call(null,vec__25802,(0),null);
var map__25803 = cljs.core.nth.call(null,vec__25802,(1),null);
var map__25803__$1 = ((((!((map__25803 == null)))?((((map__25803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25803):map__25803);
var doc = cljs.core.get.call(null,map__25803__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25803__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25835 = cljs.core.next.call(null,seq__25795__$1);
var G__25836 = null;
var G__25837 = (0);
var G__25838 = (0);
seq__25795 = G__25835;
chunk__25796 = G__25836;
count__25797 = G__25837;
i__25798 = G__25838;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map