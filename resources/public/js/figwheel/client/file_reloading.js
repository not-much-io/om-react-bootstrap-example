// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16771__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16771__auto__){
return or__16771__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16771__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24767_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24767_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__24772 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24773 = null;
var count__24774 = (0);
var i__24775 = (0);
while(true){
if((i__24775 < count__24774)){
var n = cljs.core._nth.call(null,chunk__24773,i__24775);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24776 = seq__24772;
var G__24777 = chunk__24773;
var G__24778 = count__24774;
var G__24779 = (i__24775 + (1));
seq__24772 = G__24776;
chunk__24773 = G__24777;
count__24774 = G__24778;
i__24775 = G__24779;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24772);
if(temp__4425__auto__){
var seq__24772__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24772__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__24772__$1);
var G__24780 = cljs.core.chunk_rest.call(null,seq__24772__$1);
var G__24781 = c__17574__auto__;
var G__24782 = cljs.core.count.call(null,c__17574__auto__);
var G__24783 = (0);
seq__24772 = G__24780;
chunk__24773 = G__24781;
count__24774 = G__24782;
i__24775 = G__24783;
continue;
} else {
var n = cljs.core.first.call(null,seq__24772__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24784 = cljs.core.next.call(null,seq__24772__$1);
var G__24785 = null;
var G__24786 = (0);
var G__24787 = (0);
seq__24772 = G__24784;
chunk__24773 = G__24785;
count__24774 = G__24786;
i__24775 = G__24787;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__24826_24833 = cljs.core.seq.call(null,deps);
var chunk__24827_24834 = null;
var count__24828_24835 = (0);
var i__24829_24836 = (0);
while(true){
if((i__24829_24836 < count__24828_24835)){
var dep_24837 = cljs.core._nth.call(null,chunk__24827_24834,i__24829_24836);
topo_sort_helper_STAR_.call(null,dep_24837,(depth + (1)),state);

var G__24838 = seq__24826_24833;
var G__24839 = chunk__24827_24834;
var G__24840 = count__24828_24835;
var G__24841 = (i__24829_24836 + (1));
seq__24826_24833 = G__24838;
chunk__24827_24834 = G__24839;
count__24828_24835 = G__24840;
i__24829_24836 = G__24841;
continue;
} else {
var temp__4425__auto___24842 = cljs.core.seq.call(null,seq__24826_24833);
if(temp__4425__auto___24842){
var seq__24826_24843__$1 = temp__4425__auto___24842;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24826_24843__$1)){
var c__17574__auto___24844 = cljs.core.chunk_first.call(null,seq__24826_24843__$1);
var G__24845 = cljs.core.chunk_rest.call(null,seq__24826_24843__$1);
var G__24846 = c__17574__auto___24844;
var G__24847 = cljs.core.count.call(null,c__17574__auto___24844);
var G__24848 = (0);
seq__24826_24833 = G__24845;
chunk__24827_24834 = G__24846;
count__24828_24835 = G__24847;
i__24829_24836 = G__24848;
continue;
} else {
var dep_24849 = cljs.core.first.call(null,seq__24826_24843__$1);
topo_sort_helper_STAR_.call(null,dep_24849,(depth + (1)),state);

var G__24850 = cljs.core.next.call(null,seq__24826_24843__$1);
var G__24851 = null;
var G__24852 = (0);
var G__24853 = (0);
seq__24826_24833 = G__24850;
chunk__24827_24834 = G__24851;
count__24828_24835 = G__24852;
i__24829_24836 = G__24853;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24830){
var vec__24832 = p__24830;
var x = cljs.core.nth.call(null,vec__24832,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24832,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24832,x,xs,get_deps__$1){
return (function (p1__24788_SHARP_){
return clojure.set.difference.call(null,p1__24788_SHARP_,x);
});})(vec__24832,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__24866 = cljs.core.seq.call(null,provides);
var chunk__24867 = null;
var count__24868 = (0);
var i__24869 = (0);
while(true){
if((i__24869 < count__24868)){
var prov = cljs.core._nth.call(null,chunk__24867,i__24869);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24870_24878 = cljs.core.seq.call(null,requires);
var chunk__24871_24879 = null;
var count__24872_24880 = (0);
var i__24873_24881 = (0);
while(true){
if((i__24873_24881 < count__24872_24880)){
var req_24882 = cljs.core._nth.call(null,chunk__24871_24879,i__24873_24881);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24882,prov);

var G__24883 = seq__24870_24878;
var G__24884 = chunk__24871_24879;
var G__24885 = count__24872_24880;
var G__24886 = (i__24873_24881 + (1));
seq__24870_24878 = G__24883;
chunk__24871_24879 = G__24884;
count__24872_24880 = G__24885;
i__24873_24881 = G__24886;
continue;
} else {
var temp__4425__auto___24887 = cljs.core.seq.call(null,seq__24870_24878);
if(temp__4425__auto___24887){
var seq__24870_24888__$1 = temp__4425__auto___24887;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24870_24888__$1)){
var c__17574__auto___24889 = cljs.core.chunk_first.call(null,seq__24870_24888__$1);
var G__24890 = cljs.core.chunk_rest.call(null,seq__24870_24888__$1);
var G__24891 = c__17574__auto___24889;
var G__24892 = cljs.core.count.call(null,c__17574__auto___24889);
var G__24893 = (0);
seq__24870_24878 = G__24890;
chunk__24871_24879 = G__24891;
count__24872_24880 = G__24892;
i__24873_24881 = G__24893;
continue;
} else {
var req_24894 = cljs.core.first.call(null,seq__24870_24888__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24894,prov);

var G__24895 = cljs.core.next.call(null,seq__24870_24888__$1);
var G__24896 = null;
var G__24897 = (0);
var G__24898 = (0);
seq__24870_24878 = G__24895;
chunk__24871_24879 = G__24896;
count__24872_24880 = G__24897;
i__24873_24881 = G__24898;
continue;
}
} else {
}
}
break;
}

var G__24899 = seq__24866;
var G__24900 = chunk__24867;
var G__24901 = count__24868;
var G__24902 = (i__24869 + (1));
seq__24866 = G__24899;
chunk__24867 = G__24900;
count__24868 = G__24901;
i__24869 = G__24902;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24866);
if(temp__4425__auto__){
var seq__24866__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24866__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__24866__$1);
var G__24903 = cljs.core.chunk_rest.call(null,seq__24866__$1);
var G__24904 = c__17574__auto__;
var G__24905 = cljs.core.count.call(null,c__17574__auto__);
var G__24906 = (0);
seq__24866 = G__24903;
chunk__24867 = G__24904;
count__24868 = G__24905;
i__24869 = G__24906;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24866__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24874_24907 = cljs.core.seq.call(null,requires);
var chunk__24875_24908 = null;
var count__24876_24909 = (0);
var i__24877_24910 = (0);
while(true){
if((i__24877_24910 < count__24876_24909)){
var req_24911 = cljs.core._nth.call(null,chunk__24875_24908,i__24877_24910);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24911,prov);

var G__24912 = seq__24874_24907;
var G__24913 = chunk__24875_24908;
var G__24914 = count__24876_24909;
var G__24915 = (i__24877_24910 + (1));
seq__24874_24907 = G__24912;
chunk__24875_24908 = G__24913;
count__24876_24909 = G__24914;
i__24877_24910 = G__24915;
continue;
} else {
var temp__4425__auto___24916__$1 = cljs.core.seq.call(null,seq__24874_24907);
if(temp__4425__auto___24916__$1){
var seq__24874_24917__$1 = temp__4425__auto___24916__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24874_24917__$1)){
var c__17574__auto___24918 = cljs.core.chunk_first.call(null,seq__24874_24917__$1);
var G__24919 = cljs.core.chunk_rest.call(null,seq__24874_24917__$1);
var G__24920 = c__17574__auto___24918;
var G__24921 = cljs.core.count.call(null,c__17574__auto___24918);
var G__24922 = (0);
seq__24874_24907 = G__24919;
chunk__24875_24908 = G__24920;
count__24876_24909 = G__24921;
i__24877_24910 = G__24922;
continue;
} else {
var req_24923 = cljs.core.first.call(null,seq__24874_24917__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24923,prov);

var G__24924 = cljs.core.next.call(null,seq__24874_24917__$1);
var G__24925 = null;
var G__24926 = (0);
var G__24927 = (0);
seq__24874_24907 = G__24924;
chunk__24875_24908 = G__24925;
count__24876_24909 = G__24926;
i__24877_24910 = G__24927;
continue;
}
} else {
}
}
break;
}

var G__24928 = cljs.core.next.call(null,seq__24866__$1);
var G__24929 = null;
var G__24930 = (0);
var G__24931 = (0);
seq__24866 = G__24928;
chunk__24867 = G__24929;
count__24868 = G__24930;
i__24869 = G__24931;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__24936_24940 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__24937_24941 = null;
var count__24938_24942 = (0);
var i__24939_24943 = (0);
while(true){
if((i__24939_24943 < count__24938_24942)){
var ns_24944 = cljs.core._nth.call(null,chunk__24937_24941,i__24939_24943);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24944);

var G__24945 = seq__24936_24940;
var G__24946 = chunk__24937_24941;
var G__24947 = count__24938_24942;
var G__24948 = (i__24939_24943 + (1));
seq__24936_24940 = G__24945;
chunk__24937_24941 = G__24946;
count__24938_24942 = G__24947;
i__24939_24943 = G__24948;
continue;
} else {
var temp__4425__auto___24949 = cljs.core.seq.call(null,seq__24936_24940);
if(temp__4425__auto___24949){
var seq__24936_24950__$1 = temp__4425__auto___24949;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24936_24950__$1)){
var c__17574__auto___24951 = cljs.core.chunk_first.call(null,seq__24936_24950__$1);
var G__24952 = cljs.core.chunk_rest.call(null,seq__24936_24950__$1);
var G__24953 = c__17574__auto___24951;
var G__24954 = cljs.core.count.call(null,c__17574__auto___24951);
var G__24955 = (0);
seq__24936_24940 = G__24952;
chunk__24937_24941 = G__24953;
count__24938_24942 = G__24954;
i__24939_24943 = G__24955;
continue;
} else {
var ns_24956 = cljs.core.first.call(null,seq__24936_24950__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24956);

var G__24957 = cljs.core.next.call(null,seq__24936_24950__$1);
var G__24958 = null;
var G__24959 = (0);
var G__24960 = (0);
seq__24936_24940 = G__24957;
chunk__24937_24941 = G__24958;
count__24938_24942 = G__24959;
i__24939_24943 = G__24960;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16771__auto__ = goog.require__;
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__24961__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__24961 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24962__i = 0, G__24962__a = new Array(arguments.length -  0);
while (G__24962__i < G__24962__a.length) {G__24962__a[G__24962__i] = arguments[G__24962__i + 0]; ++G__24962__i;}
  args = new cljs.core.IndexedSeq(G__24962__a,0);
} 
return G__24961__delegate.call(this,args);};
G__24961.cljs$lang$maxFixedArity = 0;
G__24961.cljs$lang$applyTo = (function (arglist__24963){
var args = cljs.core.seq(arglist__24963);
return G__24961__delegate(args);
});
G__24961.cljs$core$IFn$_invoke$arity$variadic = G__24961__delegate;
return G__24961;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__24965 = cljs.core._EQ_;
var expr__24966 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__24965.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__24966))){
var path_parts = ((function (pred__24965,expr__24966){
return (function (p1__24964_SHARP_){
return clojure.string.split.call(null,p1__24964_SHARP_,/[\/\\]/);
});})(pred__24965,expr__24966))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__24965,expr__24966){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e24968){if((e24968 instanceof Error)){
var e = e24968;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24968;

}
}})());
});
;})(path_parts,sep,root,pred__24965,expr__24966))
} else {
if(cljs.core.truth_(pred__24965.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__24966))){
return ((function (pred__24965,expr__24966){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__24965,expr__24966){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__24965,expr__24966))
);

return deferred.addErrback(((function (deferred,pred__24965,expr__24966){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__24965,expr__24966))
);
});
;})(pred__24965,expr__24966))
} else {
return ((function (pred__24965,expr__24966){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__24965,expr__24966))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24969,callback){
var map__24972 = p__24969;
var map__24972__$1 = ((((!((map__24972 == null)))?((((map__24972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24972):map__24972);
var file_msg = map__24972__$1;
var request_url = cljs.core.get.call(null,map__24972__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24972,map__24972__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24972,map__24972__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__18796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto__){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto__){
return (function (state_24996){
var state_val_24997 = (state_24996[(1)]);
if((state_val_24997 === (7))){
var inst_24992 = (state_24996[(2)]);
var state_24996__$1 = state_24996;
var statearr_24998_25018 = state_24996__$1;
(statearr_24998_25018[(2)] = inst_24992);

(statearr_24998_25018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24997 === (1))){
var state_24996__$1 = state_24996;
var statearr_24999_25019 = state_24996__$1;
(statearr_24999_25019[(2)] = null);

(statearr_24999_25019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24997 === (4))){
var inst_24976 = (state_24996[(7)]);
var inst_24976__$1 = (state_24996[(2)]);
var state_24996__$1 = (function (){var statearr_25000 = state_24996;
(statearr_25000[(7)] = inst_24976__$1);

return statearr_25000;
})();
if(cljs.core.truth_(inst_24976__$1)){
var statearr_25001_25020 = state_24996__$1;
(statearr_25001_25020[(1)] = (5));

} else {
var statearr_25002_25021 = state_24996__$1;
(statearr_25002_25021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24997 === (6))){
var state_24996__$1 = state_24996;
var statearr_25003_25022 = state_24996__$1;
(statearr_25003_25022[(2)] = null);

(statearr_25003_25022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24997 === (3))){
var inst_24994 = (state_24996[(2)]);
var state_24996__$1 = state_24996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24996__$1,inst_24994);
} else {
if((state_val_24997 === (2))){
var state_24996__$1 = state_24996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24996__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_24997 === (11))){
var inst_24988 = (state_24996[(2)]);
var state_24996__$1 = (function (){var statearr_25004 = state_24996;
(statearr_25004[(8)] = inst_24988);

return statearr_25004;
})();
var statearr_25005_25023 = state_24996__$1;
(statearr_25005_25023[(2)] = null);

(statearr_25005_25023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24997 === (9))){
var inst_24982 = (state_24996[(9)]);
var inst_24980 = (state_24996[(10)]);
var inst_24984 = inst_24982.call(null,inst_24980);
var state_24996__$1 = state_24996;
var statearr_25006_25024 = state_24996__$1;
(statearr_25006_25024[(2)] = inst_24984);

(statearr_25006_25024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24997 === (5))){
var inst_24976 = (state_24996[(7)]);
var inst_24978 = figwheel.client.file_reloading.blocking_load.call(null,inst_24976);
var state_24996__$1 = state_24996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24996__$1,(8),inst_24978);
} else {
if((state_val_24997 === (10))){
var inst_24980 = (state_24996[(10)]);
var inst_24986 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_24980);
var state_24996__$1 = state_24996;
var statearr_25007_25025 = state_24996__$1;
(statearr_25007_25025[(2)] = inst_24986);

(statearr_25007_25025[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24997 === (8))){
var inst_24976 = (state_24996[(7)]);
var inst_24982 = (state_24996[(9)]);
var inst_24980 = (state_24996[(2)]);
var inst_24981 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_24982__$1 = cljs.core.get.call(null,inst_24981,inst_24976);
var state_24996__$1 = (function (){var statearr_25008 = state_24996;
(statearr_25008[(9)] = inst_24982__$1);

(statearr_25008[(10)] = inst_24980);

return statearr_25008;
})();
if(cljs.core.truth_(inst_24982__$1)){
var statearr_25009_25026 = state_24996__$1;
(statearr_25009_25026[(1)] = (9));

} else {
var statearr_25010_25027 = state_24996__$1;
(statearr_25010_25027[(1)] = (10));

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
});})(c__18796__auto__))
;
return ((function (switch__18775__auto__,c__18796__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__18776__auto__ = null;
var figwheel$client$file_reloading$state_machine__18776__auto____0 = (function (){
var statearr_25014 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25014[(0)] = figwheel$client$file_reloading$state_machine__18776__auto__);

(statearr_25014[(1)] = (1));

return statearr_25014;
});
var figwheel$client$file_reloading$state_machine__18776__auto____1 = (function (state_24996){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_24996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e25015){if((e25015 instanceof Object)){
var ex__18779__auto__ = e25015;
var statearr_25016_25028 = state_24996;
(statearr_25016_25028[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25029 = state_24996;
state_24996 = G__25029;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18776__auto__ = function(state_24996){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18776__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18776__auto____1.call(this,state_24996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18776__auto____0;
figwheel$client$file_reloading$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18776__auto____1;
return figwheel$client$file_reloading$state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto__))
})();
var state__18798__auto__ = (function (){var statearr_25017 = f__18797__auto__.call(null);
(statearr_25017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto__);

return statearr_25017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto__))
);

return c__18796__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25030,callback){
var map__25033 = p__25030;
var map__25033__$1 = ((((!((map__25033 == null)))?((((map__25033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25033):map__25033);
var file_msg = map__25033__$1;
var namespace = cljs.core.get.call(null,map__25033__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25033,map__25033__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25033,map__25033__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25035){
var map__25038 = p__25035;
var map__25038__$1 = ((((!((map__25038 == null)))?((((map__25038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25038):map__25038);
var file_msg = map__25038__$1;
var namespace = cljs.core.get.call(null,map__25038__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16759__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16759__auto__){
var or__16771__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
var or__16771__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16771__auto____$1)){
return or__16771__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16759__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25040,callback){
var map__25043 = p__25040;
var map__25043__$1 = ((((!((map__25043 == null)))?((((map__25043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25043):map__25043);
var file_msg = map__25043__$1;
var request_url = cljs.core.get.call(null,map__25043__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25043__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__18796__auto___25131 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___25131,out){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___25131,out){
return (function (state_25113){
var state_val_25114 = (state_25113[(1)]);
if((state_val_25114 === (1))){
var inst_25091 = cljs.core.nth.call(null,files,(0),null);
var inst_25092 = cljs.core.nthnext.call(null,files,(1));
var inst_25093 = files;
var state_25113__$1 = (function (){var statearr_25115 = state_25113;
(statearr_25115[(7)] = inst_25092);

(statearr_25115[(8)] = inst_25091);

(statearr_25115[(9)] = inst_25093);

return statearr_25115;
})();
var statearr_25116_25132 = state_25113__$1;
(statearr_25116_25132[(2)] = null);

(statearr_25116_25132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25114 === (2))){
var inst_25093 = (state_25113[(9)]);
var inst_25096 = (state_25113[(10)]);
var inst_25096__$1 = cljs.core.nth.call(null,inst_25093,(0),null);
var inst_25097 = cljs.core.nthnext.call(null,inst_25093,(1));
var inst_25098 = (inst_25096__$1 == null);
var inst_25099 = cljs.core.not.call(null,inst_25098);
var state_25113__$1 = (function (){var statearr_25117 = state_25113;
(statearr_25117[(11)] = inst_25097);

(statearr_25117[(10)] = inst_25096__$1);

return statearr_25117;
})();
if(inst_25099){
var statearr_25118_25133 = state_25113__$1;
(statearr_25118_25133[(1)] = (4));

} else {
var statearr_25119_25134 = state_25113__$1;
(statearr_25119_25134[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25114 === (3))){
var inst_25111 = (state_25113[(2)]);
var state_25113__$1 = state_25113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25113__$1,inst_25111);
} else {
if((state_val_25114 === (4))){
var inst_25096 = (state_25113[(10)]);
var inst_25101 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25096);
var state_25113__$1 = state_25113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25113__$1,(7),inst_25101);
} else {
if((state_val_25114 === (5))){
var inst_25107 = cljs.core.async.close_BANG_.call(null,out);
var state_25113__$1 = state_25113;
var statearr_25120_25135 = state_25113__$1;
(statearr_25120_25135[(2)] = inst_25107);

(statearr_25120_25135[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25114 === (6))){
var inst_25109 = (state_25113[(2)]);
var state_25113__$1 = state_25113;
var statearr_25121_25136 = state_25113__$1;
(statearr_25121_25136[(2)] = inst_25109);

(statearr_25121_25136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25114 === (7))){
var inst_25097 = (state_25113[(11)]);
var inst_25103 = (state_25113[(2)]);
var inst_25104 = cljs.core.async.put_BANG_.call(null,out,inst_25103);
var inst_25093 = inst_25097;
var state_25113__$1 = (function (){var statearr_25122 = state_25113;
(statearr_25122[(12)] = inst_25104);

(statearr_25122[(9)] = inst_25093);

return statearr_25122;
})();
var statearr_25123_25137 = state_25113__$1;
(statearr_25123_25137[(2)] = null);

(statearr_25123_25137[(1)] = (2));


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
});})(c__18796__auto___25131,out))
;
return ((function (switch__18775__auto__,c__18796__auto___25131,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18776__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18776__auto____0 = (function (){
var statearr_25127 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25127[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18776__auto__);

(statearr_25127[(1)] = (1));

return statearr_25127;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18776__auto____1 = (function (state_25113){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_25113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e25128){if((e25128 instanceof Object)){
var ex__18779__auto__ = e25128;
var statearr_25129_25138 = state_25113;
(statearr_25129_25138[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25139 = state_25113;
state_25113 = G__25139;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18776__auto__ = function(state_25113){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18776__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18776__auto____1.call(this,state_25113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18776__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18776__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___25131,out))
})();
var state__18798__auto__ = (function (){var statearr_25130 = f__18797__auto__.call(null);
(statearr_25130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___25131);

return statearr_25130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___25131,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25140,opts){
var map__25144 = p__25140;
var map__25144__$1 = ((((!((map__25144 == null)))?((((map__25144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25144):map__25144);
var eval_body__$1 = cljs.core.get.call(null,map__25144__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25144__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16759__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16759__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16759__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25146){var e = e25146;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25147_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25147_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__25152){
var vec__25153 = p__25152;
var k = cljs.core.nth.call(null,vec__25153,(0),null);
var v = cljs.core.nth.call(null,vec__25153,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25154){
var vec__25155 = p__25154;
var k = cljs.core.nth.call(null,vec__25155,(0),null);
var v = cljs.core.nth.call(null,vec__25155,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25159,p__25160){
var map__25407 = p__25159;
var map__25407__$1 = ((((!((map__25407 == null)))?((((map__25407.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25407.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25407):map__25407);
var opts = map__25407__$1;
var before_jsload = cljs.core.get.call(null,map__25407__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25407__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25407__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25408 = p__25160;
var map__25408__$1 = ((((!((map__25408 == null)))?((((map__25408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25408):map__25408);
var msg = map__25408__$1;
var files = cljs.core.get.call(null,map__25408__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25408__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25408__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__18796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto__,map__25407,map__25407__$1,opts,before_jsload,on_jsload,reload_dependents,map__25408,map__25408__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto__,map__25407,map__25407__$1,opts,before_jsload,on_jsload,reload_dependents,map__25408,map__25408__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25561){
var state_val_25562 = (state_25561[(1)]);
if((state_val_25562 === (7))){
var inst_25423 = (state_25561[(7)]);
var inst_25422 = (state_25561[(8)]);
var inst_25425 = (state_25561[(9)]);
var inst_25424 = (state_25561[(10)]);
var inst_25430 = cljs.core._nth.call(null,inst_25423,inst_25425);
var inst_25431 = figwheel.client.file_reloading.eval_body.call(null,inst_25430,opts);
var inst_25432 = (inst_25425 + (1));
var tmp25563 = inst_25423;
var tmp25564 = inst_25422;
var tmp25565 = inst_25424;
var inst_25422__$1 = tmp25564;
var inst_25423__$1 = tmp25563;
var inst_25424__$1 = tmp25565;
var inst_25425__$1 = inst_25432;
var state_25561__$1 = (function (){var statearr_25566 = state_25561;
(statearr_25566[(7)] = inst_25423__$1);

(statearr_25566[(8)] = inst_25422__$1);

(statearr_25566[(9)] = inst_25425__$1);

(statearr_25566[(11)] = inst_25431);

(statearr_25566[(10)] = inst_25424__$1);

return statearr_25566;
})();
var statearr_25567_25653 = state_25561__$1;
(statearr_25567_25653[(2)] = null);

(statearr_25567_25653[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (20))){
var inst_25465 = (state_25561[(12)]);
var inst_25473 = figwheel.client.file_reloading.sort_files.call(null,inst_25465);
var state_25561__$1 = state_25561;
var statearr_25568_25654 = state_25561__$1;
(statearr_25568_25654[(2)] = inst_25473);

(statearr_25568_25654[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (27))){
var state_25561__$1 = state_25561;
var statearr_25569_25655 = state_25561__$1;
(statearr_25569_25655[(2)] = null);

(statearr_25569_25655[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (1))){
var inst_25414 = (state_25561[(13)]);
var inst_25411 = before_jsload.call(null,files);
var inst_25412 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25413 = (function (){return ((function (inst_25414,inst_25411,inst_25412,state_val_25562,c__18796__auto__,map__25407,map__25407__$1,opts,before_jsload,on_jsload,reload_dependents,map__25408,map__25408__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25156_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25156_SHARP_);
});
;})(inst_25414,inst_25411,inst_25412,state_val_25562,c__18796__auto__,map__25407,map__25407__$1,opts,before_jsload,on_jsload,reload_dependents,map__25408,map__25408__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25414__$1 = cljs.core.filter.call(null,inst_25413,files);
var inst_25415 = cljs.core.not_empty.call(null,inst_25414__$1);
var state_25561__$1 = (function (){var statearr_25570 = state_25561;
(statearr_25570[(14)] = inst_25411);

(statearr_25570[(13)] = inst_25414__$1);

(statearr_25570[(15)] = inst_25412);

return statearr_25570;
})();
if(cljs.core.truth_(inst_25415)){
var statearr_25571_25656 = state_25561__$1;
(statearr_25571_25656[(1)] = (2));

} else {
var statearr_25572_25657 = state_25561__$1;
(statearr_25572_25657[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (24))){
var state_25561__$1 = state_25561;
var statearr_25573_25658 = state_25561__$1;
(statearr_25573_25658[(2)] = null);

(statearr_25573_25658[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (39))){
var inst_25515 = (state_25561[(16)]);
var state_25561__$1 = state_25561;
var statearr_25574_25659 = state_25561__$1;
(statearr_25574_25659[(2)] = inst_25515);

(statearr_25574_25659[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (46))){
var inst_25556 = (state_25561[(2)]);
var state_25561__$1 = state_25561;
var statearr_25575_25660 = state_25561__$1;
(statearr_25575_25660[(2)] = inst_25556);

(statearr_25575_25660[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (4))){
var inst_25459 = (state_25561[(2)]);
var inst_25460 = cljs.core.List.EMPTY;
var inst_25461 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25460);
var inst_25462 = (function (){return ((function (inst_25459,inst_25460,inst_25461,state_val_25562,c__18796__auto__,map__25407,map__25407__$1,opts,before_jsload,on_jsload,reload_dependents,map__25408,map__25408__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25157_SHARP_){
var and__16759__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25157_SHARP_);
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25157_SHARP_));
} else {
return and__16759__auto__;
}
});
;})(inst_25459,inst_25460,inst_25461,state_val_25562,c__18796__auto__,map__25407,map__25407__$1,opts,before_jsload,on_jsload,reload_dependents,map__25408,map__25408__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25463 = cljs.core.filter.call(null,inst_25462,files);
var inst_25464 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25465 = cljs.core.concat.call(null,inst_25463,inst_25464);
var state_25561__$1 = (function (){var statearr_25576 = state_25561;
(statearr_25576[(17)] = inst_25461);

(statearr_25576[(18)] = inst_25459);

(statearr_25576[(12)] = inst_25465);

return statearr_25576;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25577_25661 = state_25561__$1;
(statearr_25577_25661[(1)] = (16));

} else {
var statearr_25578_25662 = state_25561__$1;
(statearr_25578_25662[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (15))){
var inst_25449 = (state_25561[(2)]);
var state_25561__$1 = state_25561;
var statearr_25579_25663 = state_25561__$1;
(statearr_25579_25663[(2)] = inst_25449);

(statearr_25579_25663[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (21))){
var inst_25475 = (state_25561[(19)]);
var inst_25475__$1 = (state_25561[(2)]);
var inst_25476 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25475__$1);
var state_25561__$1 = (function (){var statearr_25580 = state_25561;
(statearr_25580[(19)] = inst_25475__$1);

return statearr_25580;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25561__$1,(22),inst_25476);
} else {
if((state_val_25562 === (31))){
var inst_25559 = (state_25561[(2)]);
var state_25561__$1 = state_25561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25561__$1,inst_25559);
} else {
if((state_val_25562 === (32))){
var inst_25515 = (state_25561[(16)]);
var inst_25520 = inst_25515.cljs$lang$protocol_mask$partition0$;
var inst_25521 = (inst_25520 & (64));
var inst_25522 = inst_25515.cljs$core$ISeq$;
var inst_25523 = (inst_25521) || (inst_25522);
var state_25561__$1 = state_25561;
if(cljs.core.truth_(inst_25523)){
var statearr_25581_25664 = state_25561__$1;
(statearr_25581_25664[(1)] = (35));

} else {
var statearr_25582_25665 = state_25561__$1;
(statearr_25582_25665[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (40))){
var inst_25536 = (state_25561[(20)]);
var inst_25535 = (state_25561[(2)]);
var inst_25536__$1 = cljs.core.get.call(null,inst_25535,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25537 = cljs.core.get.call(null,inst_25535,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25538 = cljs.core.not_empty.call(null,inst_25536__$1);
var state_25561__$1 = (function (){var statearr_25583 = state_25561;
(statearr_25583[(21)] = inst_25537);

(statearr_25583[(20)] = inst_25536__$1);

return statearr_25583;
})();
if(cljs.core.truth_(inst_25538)){
var statearr_25584_25666 = state_25561__$1;
(statearr_25584_25666[(1)] = (41));

} else {
var statearr_25585_25667 = state_25561__$1;
(statearr_25585_25667[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (33))){
var state_25561__$1 = state_25561;
var statearr_25586_25668 = state_25561__$1;
(statearr_25586_25668[(2)] = false);

(statearr_25586_25668[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (13))){
var inst_25435 = (state_25561[(22)]);
var inst_25439 = cljs.core.chunk_first.call(null,inst_25435);
var inst_25440 = cljs.core.chunk_rest.call(null,inst_25435);
var inst_25441 = cljs.core.count.call(null,inst_25439);
var inst_25422 = inst_25440;
var inst_25423 = inst_25439;
var inst_25424 = inst_25441;
var inst_25425 = (0);
var state_25561__$1 = (function (){var statearr_25587 = state_25561;
(statearr_25587[(7)] = inst_25423);

(statearr_25587[(8)] = inst_25422);

(statearr_25587[(9)] = inst_25425);

(statearr_25587[(10)] = inst_25424);

return statearr_25587;
})();
var statearr_25588_25669 = state_25561__$1;
(statearr_25588_25669[(2)] = null);

(statearr_25588_25669[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (22))){
var inst_25478 = (state_25561[(23)]);
var inst_25475 = (state_25561[(19)]);
var inst_25479 = (state_25561[(24)]);
var inst_25483 = (state_25561[(25)]);
var inst_25478__$1 = (state_25561[(2)]);
var inst_25479__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25478__$1);
var inst_25480 = (function (){var all_files = inst_25475;
var res_SINGLEQUOTE_ = inst_25478__$1;
var res = inst_25479__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25478,inst_25475,inst_25479,inst_25483,inst_25478__$1,inst_25479__$1,state_val_25562,c__18796__auto__,map__25407,map__25407__$1,opts,before_jsload,on_jsload,reload_dependents,map__25408,map__25408__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25158_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25158_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25478,inst_25475,inst_25479,inst_25483,inst_25478__$1,inst_25479__$1,state_val_25562,c__18796__auto__,map__25407,map__25407__$1,opts,before_jsload,on_jsload,reload_dependents,map__25408,map__25408__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25481 = cljs.core.filter.call(null,inst_25480,inst_25478__$1);
var inst_25482 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25483__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25482);
var inst_25484 = cljs.core.not_empty.call(null,inst_25483__$1);
var state_25561__$1 = (function (){var statearr_25589 = state_25561;
(statearr_25589[(23)] = inst_25478__$1);

(statearr_25589[(24)] = inst_25479__$1);

(statearr_25589[(25)] = inst_25483__$1);

(statearr_25589[(26)] = inst_25481);

return statearr_25589;
})();
if(cljs.core.truth_(inst_25484)){
var statearr_25590_25670 = state_25561__$1;
(statearr_25590_25670[(1)] = (23));

} else {
var statearr_25591_25671 = state_25561__$1;
(statearr_25591_25671[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (36))){
var state_25561__$1 = state_25561;
var statearr_25592_25672 = state_25561__$1;
(statearr_25592_25672[(2)] = false);

(statearr_25592_25672[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (41))){
var inst_25536 = (state_25561[(20)]);
var inst_25540 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25541 = cljs.core.map.call(null,inst_25540,inst_25536);
var inst_25542 = cljs.core.pr_str.call(null,inst_25541);
var inst_25543 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25542)].join('');
var inst_25544 = figwheel.client.utils.log.call(null,inst_25543);
var state_25561__$1 = state_25561;
var statearr_25593_25673 = state_25561__$1;
(statearr_25593_25673[(2)] = inst_25544);

(statearr_25593_25673[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (43))){
var inst_25537 = (state_25561[(21)]);
var inst_25547 = (state_25561[(2)]);
var inst_25548 = cljs.core.not_empty.call(null,inst_25537);
var state_25561__$1 = (function (){var statearr_25594 = state_25561;
(statearr_25594[(27)] = inst_25547);

return statearr_25594;
})();
if(cljs.core.truth_(inst_25548)){
var statearr_25595_25674 = state_25561__$1;
(statearr_25595_25674[(1)] = (44));

} else {
var statearr_25596_25675 = state_25561__$1;
(statearr_25596_25675[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (29))){
var inst_25478 = (state_25561[(23)]);
var inst_25475 = (state_25561[(19)]);
var inst_25479 = (state_25561[(24)]);
var inst_25483 = (state_25561[(25)]);
var inst_25515 = (state_25561[(16)]);
var inst_25481 = (state_25561[(26)]);
var inst_25511 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25514 = (function (){var all_files = inst_25475;
var res_SINGLEQUOTE_ = inst_25478;
var res = inst_25479;
var files_not_loaded = inst_25481;
var dependencies_that_loaded = inst_25483;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25478,inst_25475,inst_25479,inst_25483,inst_25515,inst_25481,inst_25511,state_val_25562,c__18796__auto__,map__25407,map__25407__$1,opts,before_jsload,on_jsload,reload_dependents,map__25408,map__25408__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25513){
var map__25597 = p__25513;
var map__25597__$1 = ((((!((map__25597 == null)))?((((map__25597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25597):map__25597);
var namespace = cljs.core.get.call(null,map__25597__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25478,inst_25475,inst_25479,inst_25483,inst_25515,inst_25481,inst_25511,state_val_25562,c__18796__auto__,map__25407,map__25407__$1,opts,before_jsload,on_jsload,reload_dependents,map__25408,map__25408__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25515__$1 = cljs.core.group_by.call(null,inst_25514,inst_25481);
var inst_25517 = (inst_25515__$1 == null);
var inst_25518 = cljs.core.not.call(null,inst_25517);
var state_25561__$1 = (function (){var statearr_25599 = state_25561;
(statearr_25599[(16)] = inst_25515__$1);

(statearr_25599[(28)] = inst_25511);

return statearr_25599;
})();
if(inst_25518){
var statearr_25600_25676 = state_25561__$1;
(statearr_25600_25676[(1)] = (32));

} else {
var statearr_25601_25677 = state_25561__$1;
(statearr_25601_25677[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (44))){
var inst_25537 = (state_25561[(21)]);
var inst_25550 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25537);
var inst_25551 = cljs.core.pr_str.call(null,inst_25550);
var inst_25552 = [cljs.core.str("not required: "),cljs.core.str(inst_25551)].join('');
var inst_25553 = figwheel.client.utils.log.call(null,inst_25552);
var state_25561__$1 = state_25561;
var statearr_25602_25678 = state_25561__$1;
(statearr_25602_25678[(2)] = inst_25553);

(statearr_25602_25678[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (6))){
var inst_25456 = (state_25561[(2)]);
var state_25561__$1 = state_25561;
var statearr_25603_25679 = state_25561__$1;
(statearr_25603_25679[(2)] = inst_25456);

(statearr_25603_25679[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (28))){
var inst_25481 = (state_25561[(26)]);
var inst_25508 = (state_25561[(2)]);
var inst_25509 = cljs.core.not_empty.call(null,inst_25481);
var state_25561__$1 = (function (){var statearr_25604 = state_25561;
(statearr_25604[(29)] = inst_25508);

return statearr_25604;
})();
if(cljs.core.truth_(inst_25509)){
var statearr_25605_25680 = state_25561__$1;
(statearr_25605_25680[(1)] = (29));

} else {
var statearr_25606_25681 = state_25561__$1;
(statearr_25606_25681[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (25))){
var inst_25479 = (state_25561[(24)]);
var inst_25495 = (state_25561[(2)]);
var inst_25496 = cljs.core.not_empty.call(null,inst_25479);
var state_25561__$1 = (function (){var statearr_25607 = state_25561;
(statearr_25607[(30)] = inst_25495);

return statearr_25607;
})();
if(cljs.core.truth_(inst_25496)){
var statearr_25608_25682 = state_25561__$1;
(statearr_25608_25682[(1)] = (26));

} else {
var statearr_25609_25683 = state_25561__$1;
(statearr_25609_25683[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (34))){
var inst_25530 = (state_25561[(2)]);
var state_25561__$1 = state_25561;
if(cljs.core.truth_(inst_25530)){
var statearr_25610_25684 = state_25561__$1;
(statearr_25610_25684[(1)] = (38));

} else {
var statearr_25611_25685 = state_25561__$1;
(statearr_25611_25685[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (17))){
var state_25561__$1 = state_25561;
var statearr_25612_25686 = state_25561__$1;
(statearr_25612_25686[(2)] = recompile_dependents);

(statearr_25612_25686[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (3))){
var state_25561__$1 = state_25561;
var statearr_25613_25687 = state_25561__$1;
(statearr_25613_25687[(2)] = null);

(statearr_25613_25687[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (12))){
var inst_25452 = (state_25561[(2)]);
var state_25561__$1 = state_25561;
var statearr_25614_25688 = state_25561__$1;
(statearr_25614_25688[(2)] = inst_25452);

(statearr_25614_25688[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (2))){
var inst_25414 = (state_25561[(13)]);
var inst_25421 = cljs.core.seq.call(null,inst_25414);
var inst_25422 = inst_25421;
var inst_25423 = null;
var inst_25424 = (0);
var inst_25425 = (0);
var state_25561__$1 = (function (){var statearr_25615 = state_25561;
(statearr_25615[(7)] = inst_25423);

(statearr_25615[(8)] = inst_25422);

(statearr_25615[(9)] = inst_25425);

(statearr_25615[(10)] = inst_25424);

return statearr_25615;
})();
var statearr_25616_25689 = state_25561__$1;
(statearr_25616_25689[(2)] = null);

(statearr_25616_25689[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (23))){
var inst_25478 = (state_25561[(23)]);
var inst_25475 = (state_25561[(19)]);
var inst_25479 = (state_25561[(24)]);
var inst_25483 = (state_25561[(25)]);
var inst_25481 = (state_25561[(26)]);
var inst_25486 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25488 = (function (){var all_files = inst_25475;
var res_SINGLEQUOTE_ = inst_25478;
var res = inst_25479;
var files_not_loaded = inst_25481;
var dependencies_that_loaded = inst_25483;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25478,inst_25475,inst_25479,inst_25483,inst_25481,inst_25486,state_val_25562,c__18796__auto__,map__25407,map__25407__$1,opts,before_jsload,on_jsload,reload_dependents,map__25408,map__25408__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25487){
var map__25617 = p__25487;
var map__25617__$1 = ((((!((map__25617 == null)))?((((map__25617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25617):map__25617);
var request_url = cljs.core.get.call(null,map__25617__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25478,inst_25475,inst_25479,inst_25483,inst_25481,inst_25486,state_val_25562,c__18796__auto__,map__25407,map__25407__$1,opts,before_jsload,on_jsload,reload_dependents,map__25408,map__25408__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25489 = cljs.core.reverse.call(null,inst_25483);
var inst_25490 = cljs.core.map.call(null,inst_25488,inst_25489);
var inst_25491 = cljs.core.pr_str.call(null,inst_25490);
var inst_25492 = figwheel.client.utils.log.call(null,inst_25491);
var state_25561__$1 = (function (){var statearr_25619 = state_25561;
(statearr_25619[(31)] = inst_25486);

return statearr_25619;
})();
var statearr_25620_25690 = state_25561__$1;
(statearr_25620_25690[(2)] = inst_25492);

(statearr_25620_25690[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (35))){
var state_25561__$1 = state_25561;
var statearr_25621_25691 = state_25561__$1;
(statearr_25621_25691[(2)] = true);

(statearr_25621_25691[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (19))){
var inst_25465 = (state_25561[(12)]);
var inst_25471 = figwheel.client.file_reloading.expand_files.call(null,inst_25465);
var state_25561__$1 = state_25561;
var statearr_25622_25692 = state_25561__$1;
(statearr_25622_25692[(2)] = inst_25471);

(statearr_25622_25692[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (11))){
var state_25561__$1 = state_25561;
var statearr_25623_25693 = state_25561__$1;
(statearr_25623_25693[(2)] = null);

(statearr_25623_25693[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (9))){
var inst_25454 = (state_25561[(2)]);
var state_25561__$1 = state_25561;
var statearr_25624_25694 = state_25561__$1;
(statearr_25624_25694[(2)] = inst_25454);

(statearr_25624_25694[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (5))){
var inst_25425 = (state_25561[(9)]);
var inst_25424 = (state_25561[(10)]);
var inst_25427 = (inst_25425 < inst_25424);
var inst_25428 = inst_25427;
var state_25561__$1 = state_25561;
if(cljs.core.truth_(inst_25428)){
var statearr_25625_25695 = state_25561__$1;
(statearr_25625_25695[(1)] = (7));

} else {
var statearr_25626_25696 = state_25561__$1;
(statearr_25626_25696[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (14))){
var inst_25435 = (state_25561[(22)]);
var inst_25444 = cljs.core.first.call(null,inst_25435);
var inst_25445 = figwheel.client.file_reloading.eval_body.call(null,inst_25444,opts);
var inst_25446 = cljs.core.next.call(null,inst_25435);
var inst_25422 = inst_25446;
var inst_25423 = null;
var inst_25424 = (0);
var inst_25425 = (0);
var state_25561__$1 = (function (){var statearr_25627 = state_25561;
(statearr_25627[(7)] = inst_25423);

(statearr_25627[(8)] = inst_25422);

(statearr_25627[(9)] = inst_25425);

(statearr_25627[(32)] = inst_25445);

(statearr_25627[(10)] = inst_25424);

return statearr_25627;
})();
var statearr_25628_25697 = state_25561__$1;
(statearr_25628_25697[(2)] = null);

(statearr_25628_25697[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (45))){
var state_25561__$1 = state_25561;
var statearr_25629_25698 = state_25561__$1;
(statearr_25629_25698[(2)] = null);

(statearr_25629_25698[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (26))){
var inst_25478 = (state_25561[(23)]);
var inst_25475 = (state_25561[(19)]);
var inst_25479 = (state_25561[(24)]);
var inst_25483 = (state_25561[(25)]);
var inst_25481 = (state_25561[(26)]);
var inst_25498 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25500 = (function (){var all_files = inst_25475;
var res_SINGLEQUOTE_ = inst_25478;
var res = inst_25479;
var files_not_loaded = inst_25481;
var dependencies_that_loaded = inst_25483;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25478,inst_25475,inst_25479,inst_25483,inst_25481,inst_25498,state_val_25562,c__18796__auto__,map__25407,map__25407__$1,opts,before_jsload,on_jsload,reload_dependents,map__25408,map__25408__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25499){
var map__25630 = p__25499;
var map__25630__$1 = ((((!((map__25630 == null)))?((((map__25630.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25630.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25630):map__25630);
var namespace = cljs.core.get.call(null,map__25630__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25630__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25478,inst_25475,inst_25479,inst_25483,inst_25481,inst_25498,state_val_25562,c__18796__auto__,map__25407,map__25407__$1,opts,before_jsload,on_jsload,reload_dependents,map__25408,map__25408__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25501 = cljs.core.map.call(null,inst_25500,inst_25479);
var inst_25502 = cljs.core.pr_str.call(null,inst_25501);
var inst_25503 = figwheel.client.utils.log.call(null,inst_25502);
var inst_25504 = (function (){var all_files = inst_25475;
var res_SINGLEQUOTE_ = inst_25478;
var res = inst_25479;
var files_not_loaded = inst_25481;
var dependencies_that_loaded = inst_25483;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25478,inst_25475,inst_25479,inst_25483,inst_25481,inst_25498,inst_25500,inst_25501,inst_25502,inst_25503,state_val_25562,c__18796__auto__,map__25407,map__25407__$1,opts,before_jsload,on_jsload,reload_dependents,map__25408,map__25408__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25478,inst_25475,inst_25479,inst_25483,inst_25481,inst_25498,inst_25500,inst_25501,inst_25502,inst_25503,state_val_25562,c__18796__auto__,map__25407,map__25407__$1,opts,before_jsload,on_jsload,reload_dependents,map__25408,map__25408__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25505 = setTimeout(inst_25504,(10));
var state_25561__$1 = (function (){var statearr_25632 = state_25561;
(statearr_25632[(33)] = inst_25503);

(statearr_25632[(34)] = inst_25498);

return statearr_25632;
})();
var statearr_25633_25699 = state_25561__$1;
(statearr_25633_25699[(2)] = inst_25505);

(statearr_25633_25699[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (16))){
var state_25561__$1 = state_25561;
var statearr_25634_25700 = state_25561__$1;
(statearr_25634_25700[(2)] = reload_dependents);

(statearr_25634_25700[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (38))){
var inst_25515 = (state_25561[(16)]);
var inst_25532 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25515);
var state_25561__$1 = state_25561;
var statearr_25635_25701 = state_25561__$1;
(statearr_25635_25701[(2)] = inst_25532);

(statearr_25635_25701[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (30))){
var state_25561__$1 = state_25561;
var statearr_25636_25702 = state_25561__$1;
(statearr_25636_25702[(2)] = null);

(statearr_25636_25702[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (10))){
var inst_25435 = (state_25561[(22)]);
var inst_25437 = cljs.core.chunked_seq_QMARK_.call(null,inst_25435);
var state_25561__$1 = state_25561;
if(inst_25437){
var statearr_25637_25703 = state_25561__$1;
(statearr_25637_25703[(1)] = (13));

} else {
var statearr_25638_25704 = state_25561__$1;
(statearr_25638_25704[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (18))){
var inst_25469 = (state_25561[(2)]);
var state_25561__$1 = state_25561;
if(cljs.core.truth_(inst_25469)){
var statearr_25639_25705 = state_25561__$1;
(statearr_25639_25705[(1)] = (19));

} else {
var statearr_25640_25706 = state_25561__$1;
(statearr_25640_25706[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (42))){
var state_25561__$1 = state_25561;
var statearr_25641_25707 = state_25561__$1;
(statearr_25641_25707[(2)] = null);

(statearr_25641_25707[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (37))){
var inst_25527 = (state_25561[(2)]);
var state_25561__$1 = state_25561;
var statearr_25642_25708 = state_25561__$1;
(statearr_25642_25708[(2)] = inst_25527);

(statearr_25642_25708[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25562 === (8))){
var inst_25422 = (state_25561[(8)]);
var inst_25435 = (state_25561[(22)]);
var inst_25435__$1 = cljs.core.seq.call(null,inst_25422);
var state_25561__$1 = (function (){var statearr_25643 = state_25561;
(statearr_25643[(22)] = inst_25435__$1);

return statearr_25643;
})();
if(inst_25435__$1){
var statearr_25644_25709 = state_25561__$1;
(statearr_25644_25709[(1)] = (10));

} else {
var statearr_25645_25710 = state_25561__$1;
(statearr_25645_25710[(1)] = (11));

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
});})(c__18796__auto__,map__25407,map__25407__$1,opts,before_jsload,on_jsload,reload_dependents,map__25408,map__25408__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18775__auto__,c__18796__auto__,map__25407,map__25407__$1,opts,before_jsload,on_jsload,reload_dependents,map__25408,map__25408__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18776__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18776__auto____0 = (function (){
var statearr_25649 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25649[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18776__auto__);

(statearr_25649[(1)] = (1));

return statearr_25649;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18776__auto____1 = (function (state_25561){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_25561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e25650){if((e25650 instanceof Object)){
var ex__18779__auto__ = e25650;
var statearr_25651_25711 = state_25561;
(statearr_25651_25711[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25712 = state_25561;
state_25561 = G__25712;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18776__auto__ = function(state_25561){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18776__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18776__auto____1.call(this,state_25561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18776__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18776__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto__,map__25407,map__25407__$1,opts,before_jsload,on_jsload,reload_dependents,map__25408,map__25408__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__18798__auto__ = (function (){var statearr_25652 = f__18797__auto__.call(null);
(statearr_25652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto__);

return statearr_25652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto__,map__25407,map__25407__$1,opts,before_jsload,on_jsload,reload_dependents,map__25408,map__25408__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__18796__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25715,link){
var map__25718 = p__25715;
var map__25718__$1 = ((((!((map__25718 == null)))?((((map__25718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25718):map__25718);
var file = cljs.core.get.call(null,map__25718__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__25718,map__25718__$1,file){
return (function (p1__25713_SHARP_,p2__25714_SHARP_){
if(cljs.core._EQ_.call(null,p1__25713_SHARP_,p2__25714_SHARP_)){
return p1__25713_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__25718,map__25718__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25724){
var map__25725 = p__25724;
var map__25725__$1 = ((((!((map__25725 == null)))?((((map__25725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25725):map__25725);
var match_length = cljs.core.get.call(null,map__25725__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25725__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25720_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25720_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args25727 = [];
var len__17829__auto___25730 = arguments.length;
var i__17830__auto___25731 = (0);
while(true){
if((i__17830__auto___25731 < len__17829__auto___25730)){
args25727.push((arguments[i__17830__auto___25731]));

var G__25732 = (i__17830__auto___25731 + (1));
i__17830__auto___25731 = G__25732;
continue;
} else {
}
break;
}

var G__25729 = args25727.length;
switch (G__25729) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25727.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25734_SHARP_,p2__25735_SHARP_){
return cljs.core.assoc.call(null,p1__25734_SHARP_,cljs.core.get.call(null,p2__25735_SHARP_,key),p2__25735_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25736){
var map__25739 = p__25736;
var map__25739__$1 = ((((!((map__25739 == null)))?((((map__25739.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25739.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25739):map__25739);
var f_data = map__25739__$1;
var file = cljs.core.get.call(null,map__25739__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25741,files_msg){
var map__25748 = p__25741;
var map__25748__$1 = ((((!((map__25748 == null)))?((((map__25748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25748):map__25748);
var opts = map__25748__$1;
var on_cssload = cljs.core.get.call(null,map__25748__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25750_25754 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25751_25755 = null;
var count__25752_25756 = (0);
var i__25753_25757 = (0);
while(true){
if((i__25753_25757 < count__25752_25756)){
var f_25758 = cljs.core._nth.call(null,chunk__25751_25755,i__25753_25757);
figwheel.client.file_reloading.reload_css_file.call(null,f_25758);

var G__25759 = seq__25750_25754;
var G__25760 = chunk__25751_25755;
var G__25761 = count__25752_25756;
var G__25762 = (i__25753_25757 + (1));
seq__25750_25754 = G__25759;
chunk__25751_25755 = G__25760;
count__25752_25756 = G__25761;
i__25753_25757 = G__25762;
continue;
} else {
var temp__4425__auto___25763 = cljs.core.seq.call(null,seq__25750_25754);
if(temp__4425__auto___25763){
var seq__25750_25764__$1 = temp__4425__auto___25763;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25750_25764__$1)){
var c__17574__auto___25765 = cljs.core.chunk_first.call(null,seq__25750_25764__$1);
var G__25766 = cljs.core.chunk_rest.call(null,seq__25750_25764__$1);
var G__25767 = c__17574__auto___25765;
var G__25768 = cljs.core.count.call(null,c__17574__auto___25765);
var G__25769 = (0);
seq__25750_25754 = G__25766;
chunk__25751_25755 = G__25767;
count__25752_25756 = G__25768;
i__25753_25757 = G__25769;
continue;
} else {
var f_25770 = cljs.core.first.call(null,seq__25750_25764__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25770);

var G__25771 = cljs.core.next.call(null,seq__25750_25764__$1);
var G__25772 = null;
var G__25773 = (0);
var G__25774 = (0);
seq__25750_25754 = G__25771;
chunk__25751_25755 = G__25772;
count__25752_25756 = G__25773;
i__25753_25757 = G__25774;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25748,map__25748__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25748,map__25748__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map