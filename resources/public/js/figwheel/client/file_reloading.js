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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26723_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26723_SHARP_));
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
var seq__26728 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26729 = null;
var count__26730 = (0);
var i__26731 = (0);
while(true){
if((i__26731 < count__26730)){
var n = cljs.core._nth.call(null,chunk__26729,i__26731);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26732 = seq__26728;
var G__26733 = chunk__26729;
var G__26734 = count__26730;
var G__26735 = (i__26731 + (1));
seq__26728 = G__26732;
chunk__26729 = G__26733;
count__26730 = G__26734;
i__26731 = G__26735;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26728);
if(temp__4425__auto__){
var seq__26728__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26728__$1)){
var c__17575__auto__ = cljs.core.chunk_first.call(null,seq__26728__$1);
var G__26736 = cljs.core.chunk_rest.call(null,seq__26728__$1);
var G__26737 = c__17575__auto__;
var G__26738 = cljs.core.count.call(null,c__17575__auto__);
var G__26739 = (0);
seq__26728 = G__26736;
chunk__26729 = G__26737;
count__26730 = G__26738;
i__26731 = G__26739;
continue;
} else {
var n = cljs.core.first.call(null,seq__26728__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26740 = cljs.core.next.call(null,seq__26728__$1);
var G__26741 = null;
var G__26742 = (0);
var G__26743 = (0);
seq__26728 = G__26740;
chunk__26729 = G__26741;
count__26730 = G__26742;
i__26731 = G__26743;
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

var seq__26782_26789 = cljs.core.seq.call(null,deps);
var chunk__26783_26790 = null;
var count__26784_26791 = (0);
var i__26785_26792 = (0);
while(true){
if((i__26785_26792 < count__26784_26791)){
var dep_26793 = cljs.core._nth.call(null,chunk__26783_26790,i__26785_26792);
topo_sort_helper_STAR_.call(null,dep_26793,(depth + (1)),state);

var G__26794 = seq__26782_26789;
var G__26795 = chunk__26783_26790;
var G__26796 = count__26784_26791;
var G__26797 = (i__26785_26792 + (1));
seq__26782_26789 = G__26794;
chunk__26783_26790 = G__26795;
count__26784_26791 = G__26796;
i__26785_26792 = G__26797;
continue;
} else {
var temp__4425__auto___26798 = cljs.core.seq.call(null,seq__26782_26789);
if(temp__4425__auto___26798){
var seq__26782_26799__$1 = temp__4425__auto___26798;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26782_26799__$1)){
var c__17575__auto___26800 = cljs.core.chunk_first.call(null,seq__26782_26799__$1);
var G__26801 = cljs.core.chunk_rest.call(null,seq__26782_26799__$1);
var G__26802 = c__17575__auto___26800;
var G__26803 = cljs.core.count.call(null,c__17575__auto___26800);
var G__26804 = (0);
seq__26782_26789 = G__26801;
chunk__26783_26790 = G__26802;
count__26784_26791 = G__26803;
i__26785_26792 = G__26804;
continue;
} else {
var dep_26805 = cljs.core.first.call(null,seq__26782_26799__$1);
topo_sort_helper_STAR_.call(null,dep_26805,(depth + (1)),state);

var G__26806 = cljs.core.next.call(null,seq__26782_26799__$1);
var G__26807 = null;
var G__26808 = (0);
var G__26809 = (0);
seq__26782_26789 = G__26806;
chunk__26783_26790 = G__26807;
count__26784_26791 = G__26808;
i__26785_26792 = G__26809;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26786){
var vec__26788 = p__26786;
var x = cljs.core.nth.call(null,vec__26788,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26788,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26788,x,xs,get_deps__$1){
return (function (p1__26744_SHARP_){
return clojure.set.difference.call(null,p1__26744_SHARP_,x);
});})(vec__26788,x,xs,get_deps__$1))
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
var seq__26822 = cljs.core.seq.call(null,provides);
var chunk__26823 = null;
var count__26824 = (0);
var i__26825 = (0);
while(true){
if((i__26825 < count__26824)){
var prov = cljs.core._nth.call(null,chunk__26823,i__26825);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26826_26834 = cljs.core.seq.call(null,requires);
var chunk__26827_26835 = null;
var count__26828_26836 = (0);
var i__26829_26837 = (0);
while(true){
if((i__26829_26837 < count__26828_26836)){
var req_26838 = cljs.core._nth.call(null,chunk__26827_26835,i__26829_26837);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26838,prov);

var G__26839 = seq__26826_26834;
var G__26840 = chunk__26827_26835;
var G__26841 = count__26828_26836;
var G__26842 = (i__26829_26837 + (1));
seq__26826_26834 = G__26839;
chunk__26827_26835 = G__26840;
count__26828_26836 = G__26841;
i__26829_26837 = G__26842;
continue;
} else {
var temp__4425__auto___26843 = cljs.core.seq.call(null,seq__26826_26834);
if(temp__4425__auto___26843){
var seq__26826_26844__$1 = temp__4425__auto___26843;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26826_26844__$1)){
var c__17575__auto___26845 = cljs.core.chunk_first.call(null,seq__26826_26844__$1);
var G__26846 = cljs.core.chunk_rest.call(null,seq__26826_26844__$1);
var G__26847 = c__17575__auto___26845;
var G__26848 = cljs.core.count.call(null,c__17575__auto___26845);
var G__26849 = (0);
seq__26826_26834 = G__26846;
chunk__26827_26835 = G__26847;
count__26828_26836 = G__26848;
i__26829_26837 = G__26849;
continue;
} else {
var req_26850 = cljs.core.first.call(null,seq__26826_26844__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26850,prov);

var G__26851 = cljs.core.next.call(null,seq__26826_26844__$1);
var G__26852 = null;
var G__26853 = (0);
var G__26854 = (0);
seq__26826_26834 = G__26851;
chunk__26827_26835 = G__26852;
count__26828_26836 = G__26853;
i__26829_26837 = G__26854;
continue;
}
} else {
}
}
break;
}

var G__26855 = seq__26822;
var G__26856 = chunk__26823;
var G__26857 = count__26824;
var G__26858 = (i__26825 + (1));
seq__26822 = G__26855;
chunk__26823 = G__26856;
count__26824 = G__26857;
i__26825 = G__26858;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26822);
if(temp__4425__auto__){
var seq__26822__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26822__$1)){
var c__17575__auto__ = cljs.core.chunk_first.call(null,seq__26822__$1);
var G__26859 = cljs.core.chunk_rest.call(null,seq__26822__$1);
var G__26860 = c__17575__auto__;
var G__26861 = cljs.core.count.call(null,c__17575__auto__);
var G__26862 = (0);
seq__26822 = G__26859;
chunk__26823 = G__26860;
count__26824 = G__26861;
i__26825 = G__26862;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26822__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26830_26863 = cljs.core.seq.call(null,requires);
var chunk__26831_26864 = null;
var count__26832_26865 = (0);
var i__26833_26866 = (0);
while(true){
if((i__26833_26866 < count__26832_26865)){
var req_26867 = cljs.core._nth.call(null,chunk__26831_26864,i__26833_26866);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26867,prov);

var G__26868 = seq__26830_26863;
var G__26869 = chunk__26831_26864;
var G__26870 = count__26832_26865;
var G__26871 = (i__26833_26866 + (1));
seq__26830_26863 = G__26868;
chunk__26831_26864 = G__26869;
count__26832_26865 = G__26870;
i__26833_26866 = G__26871;
continue;
} else {
var temp__4425__auto___26872__$1 = cljs.core.seq.call(null,seq__26830_26863);
if(temp__4425__auto___26872__$1){
var seq__26830_26873__$1 = temp__4425__auto___26872__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26830_26873__$1)){
var c__17575__auto___26874 = cljs.core.chunk_first.call(null,seq__26830_26873__$1);
var G__26875 = cljs.core.chunk_rest.call(null,seq__26830_26873__$1);
var G__26876 = c__17575__auto___26874;
var G__26877 = cljs.core.count.call(null,c__17575__auto___26874);
var G__26878 = (0);
seq__26830_26863 = G__26875;
chunk__26831_26864 = G__26876;
count__26832_26865 = G__26877;
i__26833_26866 = G__26878;
continue;
} else {
var req_26879 = cljs.core.first.call(null,seq__26830_26873__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26879,prov);

var G__26880 = cljs.core.next.call(null,seq__26830_26873__$1);
var G__26881 = null;
var G__26882 = (0);
var G__26883 = (0);
seq__26830_26863 = G__26880;
chunk__26831_26864 = G__26881;
count__26832_26865 = G__26882;
i__26833_26866 = G__26883;
continue;
}
} else {
}
}
break;
}

var G__26884 = cljs.core.next.call(null,seq__26822__$1);
var G__26885 = null;
var G__26886 = (0);
var G__26887 = (0);
seq__26822 = G__26884;
chunk__26823 = G__26885;
count__26824 = G__26886;
i__26825 = G__26887;
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
var seq__26892_26896 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26893_26897 = null;
var count__26894_26898 = (0);
var i__26895_26899 = (0);
while(true){
if((i__26895_26899 < count__26894_26898)){
var ns_26900 = cljs.core._nth.call(null,chunk__26893_26897,i__26895_26899);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26900);

var G__26901 = seq__26892_26896;
var G__26902 = chunk__26893_26897;
var G__26903 = count__26894_26898;
var G__26904 = (i__26895_26899 + (1));
seq__26892_26896 = G__26901;
chunk__26893_26897 = G__26902;
count__26894_26898 = G__26903;
i__26895_26899 = G__26904;
continue;
} else {
var temp__4425__auto___26905 = cljs.core.seq.call(null,seq__26892_26896);
if(temp__4425__auto___26905){
var seq__26892_26906__$1 = temp__4425__auto___26905;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26892_26906__$1)){
var c__17575__auto___26907 = cljs.core.chunk_first.call(null,seq__26892_26906__$1);
var G__26908 = cljs.core.chunk_rest.call(null,seq__26892_26906__$1);
var G__26909 = c__17575__auto___26907;
var G__26910 = cljs.core.count.call(null,c__17575__auto___26907);
var G__26911 = (0);
seq__26892_26896 = G__26908;
chunk__26893_26897 = G__26909;
count__26894_26898 = G__26910;
i__26895_26899 = G__26911;
continue;
} else {
var ns_26912 = cljs.core.first.call(null,seq__26892_26906__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26912);

var G__26913 = cljs.core.next.call(null,seq__26892_26906__$1);
var G__26914 = null;
var G__26915 = (0);
var G__26916 = (0);
seq__26892_26896 = G__26913;
chunk__26893_26897 = G__26914;
count__26894_26898 = G__26915;
i__26895_26899 = G__26916;
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
var G__26917__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26917 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26918__i = 0, G__26918__a = new Array(arguments.length -  0);
while (G__26918__i < G__26918__a.length) {G__26918__a[G__26918__i] = arguments[G__26918__i + 0]; ++G__26918__i;}
  args = new cljs.core.IndexedSeq(G__26918__a,0);
} 
return G__26917__delegate.call(this,args);};
G__26917.cljs$lang$maxFixedArity = 0;
G__26917.cljs$lang$applyTo = (function (arglist__26919){
var args = cljs.core.seq(arglist__26919);
return G__26917__delegate(args);
});
G__26917.cljs$core$IFn$_invoke$arity$variadic = G__26917__delegate;
return G__26917;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26921 = cljs.core._EQ_;
var expr__26922 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26921.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26922))){
var path_parts = ((function (pred__26921,expr__26922){
return (function (p1__26920_SHARP_){
return clojure.string.split.call(null,p1__26920_SHARP_,/[\/\\]/);
});})(pred__26921,expr__26922))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26921,expr__26922){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26924){if((e26924 instanceof Error)){
var e = e26924;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26924;

}
}})());
});
;})(path_parts,sep,root,pred__26921,expr__26922))
} else {
if(cljs.core.truth_(pred__26921.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26922))){
return ((function (pred__26921,expr__26922){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__26921,expr__26922){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26921,expr__26922))
);

return deferred.addErrback(((function (deferred,pred__26921,expr__26922){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26921,expr__26922))
);
});
;})(pred__26921,expr__26922))
} else {
return ((function (pred__26921,expr__26922){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26921,expr__26922))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26925,callback){
var map__26928 = p__26925;
var map__26928__$1 = ((((!((map__26928 == null)))?((((map__26928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26928):map__26928);
var file_msg = map__26928__$1;
var request_url = cljs.core.get.call(null,map__26928__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26928,map__26928__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26928,map__26928__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__18797__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18797__auto__){
return (function (){
var f__18798__auto__ = (function (){var switch__18776__auto__ = ((function (c__18797__auto__){
return (function (state_26952){
var state_val_26953 = (state_26952[(1)]);
if((state_val_26953 === (7))){
var inst_26948 = (state_26952[(2)]);
var state_26952__$1 = state_26952;
var statearr_26954_26974 = state_26952__$1;
(statearr_26954_26974[(2)] = inst_26948);

(statearr_26954_26974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (1))){
var state_26952__$1 = state_26952;
var statearr_26955_26975 = state_26952__$1;
(statearr_26955_26975[(2)] = null);

(statearr_26955_26975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (4))){
var inst_26932 = (state_26952[(7)]);
var inst_26932__$1 = (state_26952[(2)]);
var state_26952__$1 = (function (){var statearr_26956 = state_26952;
(statearr_26956[(7)] = inst_26932__$1);

return statearr_26956;
})();
if(cljs.core.truth_(inst_26932__$1)){
var statearr_26957_26976 = state_26952__$1;
(statearr_26957_26976[(1)] = (5));

} else {
var statearr_26958_26977 = state_26952__$1;
(statearr_26958_26977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (6))){
var state_26952__$1 = state_26952;
var statearr_26959_26978 = state_26952__$1;
(statearr_26959_26978[(2)] = null);

(statearr_26959_26978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (3))){
var inst_26950 = (state_26952[(2)]);
var state_26952__$1 = state_26952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26952__$1,inst_26950);
} else {
if((state_val_26953 === (2))){
var state_26952__$1 = state_26952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26952__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26953 === (11))){
var inst_26944 = (state_26952[(2)]);
var state_26952__$1 = (function (){var statearr_26960 = state_26952;
(statearr_26960[(8)] = inst_26944);

return statearr_26960;
})();
var statearr_26961_26979 = state_26952__$1;
(statearr_26961_26979[(2)] = null);

(statearr_26961_26979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (9))){
var inst_26938 = (state_26952[(9)]);
var inst_26936 = (state_26952[(10)]);
var inst_26940 = inst_26938.call(null,inst_26936);
var state_26952__$1 = state_26952;
var statearr_26962_26980 = state_26952__$1;
(statearr_26962_26980[(2)] = inst_26940);

(statearr_26962_26980[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (5))){
var inst_26932 = (state_26952[(7)]);
var inst_26934 = figwheel.client.file_reloading.blocking_load.call(null,inst_26932);
var state_26952__$1 = state_26952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26952__$1,(8),inst_26934);
} else {
if((state_val_26953 === (10))){
var inst_26936 = (state_26952[(10)]);
var inst_26942 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26936);
var state_26952__$1 = state_26952;
var statearr_26963_26981 = state_26952__$1;
(statearr_26963_26981[(2)] = inst_26942);

(statearr_26963_26981[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26953 === (8))){
var inst_26938 = (state_26952[(9)]);
var inst_26932 = (state_26952[(7)]);
var inst_26936 = (state_26952[(2)]);
var inst_26937 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26938__$1 = cljs.core.get.call(null,inst_26937,inst_26932);
var state_26952__$1 = (function (){var statearr_26964 = state_26952;
(statearr_26964[(9)] = inst_26938__$1);

(statearr_26964[(10)] = inst_26936);

return statearr_26964;
})();
if(cljs.core.truth_(inst_26938__$1)){
var statearr_26965_26982 = state_26952__$1;
(statearr_26965_26982[(1)] = (9));

} else {
var statearr_26966_26983 = state_26952__$1;
(statearr_26966_26983[(1)] = (10));

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
});})(c__18797__auto__))
;
return ((function (switch__18776__auto__,c__18797__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__18777__auto__ = null;
var figwheel$client$file_reloading$state_machine__18777__auto____0 = (function (){
var statearr_26970 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26970[(0)] = figwheel$client$file_reloading$state_machine__18777__auto__);

(statearr_26970[(1)] = (1));

return statearr_26970;
});
var figwheel$client$file_reloading$state_machine__18777__auto____1 = (function (state_26952){
while(true){
var ret_value__18778__auto__ = (function (){try{while(true){
var result__18779__auto__ = switch__18776__auto__.call(null,state_26952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18779__auto__;
}
break;
}
}catch (e26971){if((e26971 instanceof Object)){
var ex__18780__auto__ = e26971;
var statearr_26972_26984 = state_26952;
(statearr_26972_26984[(5)] = ex__18780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26985 = state_26952;
state_26952 = G__26985;
continue;
} else {
return ret_value__18778__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18777__auto__ = function(state_26952){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18777__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18777__auto____1.call(this,state_26952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18777__auto____0;
figwheel$client$file_reloading$state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18777__auto____1;
return figwheel$client$file_reloading$state_machine__18777__auto__;
})()
;})(switch__18776__auto__,c__18797__auto__))
})();
var state__18799__auto__ = (function (){var statearr_26973 = f__18798__auto__.call(null);
(statearr_26973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18797__auto__);

return statearr_26973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18799__auto__);
});})(c__18797__auto__))
);

return c__18797__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26986,callback){
var map__26989 = p__26986;
var map__26989__$1 = ((((!((map__26989 == null)))?((((map__26989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26989):map__26989);
var file_msg = map__26989__$1;
var namespace = cljs.core.get.call(null,map__26989__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26989,map__26989__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26989,map__26989__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26991){
var map__26994 = p__26991;
var map__26994__$1 = ((((!((map__26994 == null)))?((((map__26994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26994):map__26994);
var file_msg = map__26994__$1;
var namespace = cljs.core.get.call(null,map__26994__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26996,callback){
var map__26999 = p__26996;
var map__26999__$1 = ((((!((map__26999 == null)))?((((map__26999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26999):map__26999);
var file_msg = map__26999__$1;
var request_url = cljs.core.get.call(null,map__26999__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26999__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__18797__auto___27087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18797__auto___27087,out){
return (function (){
var f__18798__auto__ = (function (){var switch__18776__auto__ = ((function (c__18797__auto___27087,out){
return (function (state_27069){
var state_val_27070 = (state_27069[(1)]);
if((state_val_27070 === (1))){
var inst_27047 = cljs.core.nth.call(null,files,(0),null);
var inst_27048 = cljs.core.nthnext.call(null,files,(1));
var inst_27049 = files;
var state_27069__$1 = (function (){var statearr_27071 = state_27069;
(statearr_27071[(7)] = inst_27048);

(statearr_27071[(8)] = inst_27047);

(statearr_27071[(9)] = inst_27049);

return statearr_27071;
})();
var statearr_27072_27088 = state_27069__$1;
(statearr_27072_27088[(2)] = null);

(statearr_27072_27088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27070 === (2))){
var inst_27052 = (state_27069[(10)]);
var inst_27049 = (state_27069[(9)]);
var inst_27052__$1 = cljs.core.nth.call(null,inst_27049,(0),null);
var inst_27053 = cljs.core.nthnext.call(null,inst_27049,(1));
var inst_27054 = (inst_27052__$1 == null);
var inst_27055 = cljs.core.not.call(null,inst_27054);
var state_27069__$1 = (function (){var statearr_27073 = state_27069;
(statearr_27073[(10)] = inst_27052__$1);

(statearr_27073[(11)] = inst_27053);

return statearr_27073;
})();
if(inst_27055){
var statearr_27074_27089 = state_27069__$1;
(statearr_27074_27089[(1)] = (4));

} else {
var statearr_27075_27090 = state_27069__$1;
(statearr_27075_27090[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27070 === (3))){
var inst_27067 = (state_27069[(2)]);
var state_27069__$1 = state_27069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27069__$1,inst_27067);
} else {
if((state_val_27070 === (4))){
var inst_27052 = (state_27069[(10)]);
var inst_27057 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27052);
var state_27069__$1 = state_27069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27069__$1,(7),inst_27057);
} else {
if((state_val_27070 === (5))){
var inst_27063 = cljs.core.async.close_BANG_.call(null,out);
var state_27069__$1 = state_27069;
var statearr_27076_27091 = state_27069__$1;
(statearr_27076_27091[(2)] = inst_27063);

(statearr_27076_27091[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27070 === (6))){
var inst_27065 = (state_27069[(2)]);
var state_27069__$1 = state_27069;
var statearr_27077_27092 = state_27069__$1;
(statearr_27077_27092[(2)] = inst_27065);

(statearr_27077_27092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27070 === (7))){
var inst_27053 = (state_27069[(11)]);
var inst_27059 = (state_27069[(2)]);
var inst_27060 = cljs.core.async.put_BANG_.call(null,out,inst_27059);
var inst_27049 = inst_27053;
var state_27069__$1 = (function (){var statearr_27078 = state_27069;
(statearr_27078[(12)] = inst_27060);

(statearr_27078[(9)] = inst_27049);

return statearr_27078;
})();
var statearr_27079_27093 = state_27069__$1;
(statearr_27079_27093[(2)] = null);

(statearr_27079_27093[(1)] = (2));


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
});})(c__18797__auto___27087,out))
;
return ((function (switch__18776__auto__,c__18797__auto___27087,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18777__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18777__auto____0 = (function (){
var statearr_27083 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27083[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18777__auto__);

(statearr_27083[(1)] = (1));

return statearr_27083;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18777__auto____1 = (function (state_27069){
while(true){
var ret_value__18778__auto__ = (function (){try{while(true){
var result__18779__auto__ = switch__18776__auto__.call(null,state_27069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18779__auto__;
}
break;
}
}catch (e27084){if((e27084 instanceof Object)){
var ex__18780__auto__ = e27084;
var statearr_27085_27094 = state_27069;
(statearr_27085_27094[(5)] = ex__18780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27095 = state_27069;
state_27069 = G__27095;
continue;
} else {
return ret_value__18778__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18777__auto__ = function(state_27069){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18777__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18777__auto____1.call(this,state_27069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18777__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18777__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18777__auto__;
})()
;})(switch__18776__auto__,c__18797__auto___27087,out))
})();
var state__18799__auto__ = (function (){var statearr_27086 = f__18798__auto__.call(null);
(statearr_27086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18797__auto___27087);

return statearr_27086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18799__auto__);
});})(c__18797__auto___27087,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27096,opts){
var map__27100 = p__27096;
var map__27100__$1 = ((((!((map__27100 == null)))?((((map__27100.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27100.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27100):map__27100);
var eval_body__$1 = cljs.core.get.call(null,map__27100__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27100__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e27102){var e = e27102;
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
return (function (p1__27103_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27103_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__27108){
var vec__27109 = p__27108;
var k = cljs.core.nth.call(null,vec__27109,(0),null);
var v = cljs.core.nth.call(null,vec__27109,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27110){
var vec__27111 = p__27110;
var k = cljs.core.nth.call(null,vec__27111,(0),null);
var v = cljs.core.nth.call(null,vec__27111,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27115,p__27116){
var map__27363 = p__27115;
var map__27363__$1 = ((((!((map__27363 == null)))?((((map__27363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27363):map__27363);
var opts = map__27363__$1;
var before_jsload = cljs.core.get.call(null,map__27363__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27363__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27363__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27364 = p__27116;
var map__27364__$1 = ((((!((map__27364 == null)))?((((map__27364.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27364.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27364):map__27364);
var msg = map__27364__$1;
var files = cljs.core.get.call(null,map__27364__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27364__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27364__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__18797__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18797__auto__,map__27363,map__27363__$1,opts,before_jsload,on_jsload,reload_dependents,map__27364,map__27364__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__18798__auto__ = (function (){var switch__18776__auto__ = ((function (c__18797__auto__,map__27363,map__27363__$1,opts,before_jsload,on_jsload,reload_dependents,map__27364,map__27364__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27517){
var state_val_27518 = (state_27517[(1)]);
if((state_val_27518 === (7))){
var inst_27381 = (state_27517[(7)]);
var inst_27379 = (state_27517[(8)]);
var inst_27380 = (state_27517[(9)]);
var inst_27378 = (state_27517[(10)]);
var inst_27386 = cljs.core._nth.call(null,inst_27379,inst_27381);
var inst_27387 = figwheel.client.file_reloading.eval_body.call(null,inst_27386,opts);
var inst_27388 = (inst_27381 + (1));
var tmp27519 = inst_27379;
var tmp27520 = inst_27380;
var tmp27521 = inst_27378;
var inst_27378__$1 = tmp27521;
var inst_27379__$1 = tmp27519;
var inst_27380__$1 = tmp27520;
var inst_27381__$1 = inst_27388;
var state_27517__$1 = (function (){var statearr_27522 = state_27517;
(statearr_27522[(7)] = inst_27381__$1);

(statearr_27522[(11)] = inst_27387);

(statearr_27522[(8)] = inst_27379__$1);

(statearr_27522[(9)] = inst_27380__$1);

(statearr_27522[(10)] = inst_27378__$1);

return statearr_27522;
})();
var statearr_27523_27609 = state_27517__$1;
(statearr_27523_27609[(2)] = null);

(statearr_27523_27609[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (20))){
var inst_27421 = (state_27517[(12)]);
var inst_27429 = figwheel.client.file_reloading.sort_files.call(null,inst_27421);
var state_27517__$1 = state_27517;
var statearr_27524_27610 = state_27517__$1;
(statearr_27524_27610[(2)] = inst_27429);

(statearr_27524_27610[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (27))){
var state_27517__$1 = state_27517;
var statearr_27525_27611 = state_27517__$1;
(statearr_27525_27611[(2)] = null);

(statearr_27525_27611[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (1))){
var inst_27370 = (state_27517[(13)]);
var inst_27367 = before_jsload.call(null,files);
var inst_27368 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27369 = (function (){return ((function (inst_27370,inst_27367,inst_27368,state_val_27518,c__18797__auto__,map__27363,map__27363__$1,opts,before_jsload,on_jsload,reload_dependents,map__27364,map__27364__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27112_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27112_SHARP_);
});
;})(inst_27370,inst_27367,inst_27368,state_val_27518,c__18797__auto__,map__27363,map__27363__$1,opts,before_jsload,on_jsload,reload_dependents,map__27364,map__27364__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27370__$1 = cljs.core.filter.call(null,inst_27369,files);
var inst_27371 = cljs.core.not_empty.call(null,inst_27370__$1);
var state_27517__$1 = (function (){var statearr_27526 = state_27517;
(statearr_27526[(14)] = inst_27367);

(statearr_27526[(15)] = inst_27368);

(statearr_27526[(13)] = inst_27370__$1);

return statearr_27526;
})();
if(cljs.core.truth_(inst_27371)){
var statearr_27527_27612 = state_27517__$1;
(statearr_27527_27612[(1)] = (2));

} else {
var statearr_27528_27613 = state_27517__$1;
(statearr_27528_27613[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (24))){
var state_27517__$1 = state_27517;
var statearr_27529_27614 = state_27517__$1;
(statearr_27529_27614[(2)] = null);

(statearr_27529_27614[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (39))){
var inst_27471 = (state_27517[(16)]);
var state_27517__$1 = state_27517;
var statearr_27530_27615 = state_27517__$1;
(statearr_27530_27615[(2)] = inst_27471);

(statearr_27530_27615[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (46))){
var inst_27512 = (state_27517[(2)]);
var state_27517__$1 = state_27517;
var statearr_27531_27616 = state_27517__$1;
(statearr_27531_27616[(2)] = inst_27512);

(statearr_27531_27616[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (4))){
var inst_27415 = (state_27517[(2)]);
var inst_27416 = cljs.core.List.EMPTY;
var inst_27417 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27416);
var inst_27418 = (function (){return ((function (inst_27415,inst_27416,inst_27417,state_val_27518,c__18797__auto__,map__27363,map__27363__$1,opts,before_jsload,on_jsload,reload_dependents,map__27364,map__27364__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27113_SHARP_){
var and__16759__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27113_SHARP_);
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27113_SHARP_));
} else {
return and__16759__auto__;
}
});
;})(inst_27415,inst_27416,inst_27417,state_val_27518,c__18797__auto__,map__27363,map__27363__$1,opts,before_jsload,on_jsload,reload_dependents,map__27364,map__27364__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27419 = cljs.core.filter.call(null,inst_27418,files);
var inst_27420 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27421 = cljs.core.concat.call(null,inst_27419,inst_27420);
var state_27517__$1 = (function (){var statearr_27532 = state_27517;
(statearr_27532[(17)] = inst_27415);

(statearr_27532[(12)] = inst_27421);

(statearr_27532[(18)] = inst_27417);

return statearr_27532;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27533_27617 = state_27517__$1;
(statearr_27533_27617[(1)] = (16));

} else {
var statearr_27534_27618 = state_27517__$1;
(statearr_27534_27618[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (15))){
var inst_27405 = (state_27517[(2)]);
var state_27517__$1 = state_27517;
var statearr_27535_27619 = state_27517__$1;
(statearr_27535_27619[(2)] = inst_27405);

(statearr_27535_27619[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (21))){
var inst_27431 = (state_27517[(19)]);
var inst_27431__$1 = (state_27517[(2)]);
var inst_27432 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27431__$1);
var state_27517__$1 = (function (){var statearr_27536 = state_27517;
(statearr_27536[(19)] = inst_27431__$1);

return statearr_27536;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27517__$1,(22),inst_27432);
} else {
if((state_val_27518 === (31))){
var inst_27515 = (state_27517[(2)]);
var state_27517__$1 = state_27517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27517__$1,inst_27515);
} else {
if((state_val_27518 === (32))){
var inst_27471 = (state_27517[(16)]);
var inst_27476 = inst_27471.cljs$lang$protocol_mask$partition0$;
var inst_27477 = (inst_27476 & (64));
var inst_27478 = inst_27471.cljs$core$ISeq$;
var inst_27479 = (inst_27477) || (inst_27478);
var state_27517__$1 = state_27517;
if(cljs.core.truth_(inst_27479)){
var statearr_27537_27620 = state_27517__$1;
(statearr_27537_27620[(1)] = (35));

} else {
var statearr_27538_27621 = state_27517__$1;
(statearr_27538_27621[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (40))){
var inst_27492 = (state_27517[(20)]);
var inst_27491 = (state_27517[(2)]);
var inst_27492__$1 = cljs.core.get.call(null,inst_27491,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27493 = cljs.core.get.call(null,inst_27491,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27494 = cljs.core.not_empty.call(null,inst_27492__$1);
var state_27517__$1 = (function (){var statearr_27539 = state_27517;
(statearr_27539[(20)] = inst_27492__$1);

(statearr_27539[(21)] = inst_27493);

return statearr_27539;
})();
if(cljs.core.truth_(inst_27494)){
var statearr_27540_27622 = state_27517__$1;
(statearr_27540_27622[(1)] = (41));

} else {
var statearr_27541_27623 = state_27517__$1;
(statearr_27541_27623[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (33))){
var state_27517__$1 = state_27517;
var statearr_27542_27624 = state_27517__$1;
(statearr_27542_27624[(2)] = false);

(statearr_27542_27624[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (13))){
var inst_27391 = (state_27517[(22)]);
var inst_27395 = cljs.core.chunk_first.call(null,inst_27391);
var inst_27396 = cljs.core.chunk_rest.call(null,inst_27391);
var inst_27397 = cljs.core.count.call(null,inst_27395);
var inst_27378 = inst_27396;
var inst_27379 = inst_27395;
var inst_27380 = inst_27397;
var inst_27381 = (0);
var state_27517__$1 = (function (){var statearr_27543 = state_27517;
(statearr_27543[(7)] = inst_27381);

(statearr_27543[(8)] = inst_27379);

(statearr_27543[(9)] = inst_27380);

(statearr_27543[(10)] = inst_27378);

return statearr_27543;
})();
var statearr_27544_27625 = state_27517__$1;
(statearr_27544_27625[(2)] = null);

(statearr_27544_27625[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (22))){
var inst_27434 = (state_27517[(23)]);
var inst_27431 = (state_27517[(19)]);
var inst_27435 = (state_27517[(24)]);
var inst_27439 = (state_27517[(25)]);
var inst_27434__$1 = (state_27517[(2)]);
var inst_27435__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27434__$1);
var inst_27436 = (function (){var all_files = inst_27431;
var res_SINGLEQUOTE_ = inst_27434__$1;
var res = inst_27435__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27434,inst_27431,inst_27435,inst_27439,inst_27434__$1,inst_27435__$1,state_val_27518,c__18797__auto__,map__27363,map__27363__$1,opts,before_jsload,on_jsload,reload_dependents,map__27364,map__27364__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27114_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27114_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27434,inst_27431,inst_27435,inst_27439,inst_27434__$1,inst_27435__$1,state_val_27518,c__18797__auto__,map__27363,map__27363__$1,opts,before_jsload,on_jsload,reload_dependents,map__27364,map__27364__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27437 = cljs.core.filter.call(null,inst_27436,inst_27434__$1);
var inst_27438 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27439__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27438);
var inst_27440 = cljs.core.not_empty.call(null,inst_27439__$1);
var state_27517__$1 = (function (){var statearr_27545 = state_27517;
(statearr_27545[(26)] = inst_27437);

(statearr_27545[(23)] = inst_27434__$1);

(statearr_27545[(24)] = inst_27435__$1);

(statearr_27545[(25)] = inst_27439__$1);

return statearr_27545;
})();
if(cljs.core.truth_(inst_27440)){
var statearr_27546_27626 = state_27517__$1;
(statearr_27546_27626[(1)] = (23));

} else {
var statearr_27547_27627 = state_27517__$1;
(statearr_27547_27627[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (36))){
var state_27517__$1 = state_27517;
var statearr_27548_27628 = state_27517__$1;
(statearr_27548_27628[(2)] = false);

(statearr_27548_27628[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (41))){
var inst_27492 = (state_27517[(20)]);
var inst_27496 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27497 = cljs.core.map.call(null,inst_27496,inst_27492);
var inst_27498 = cljs.core.pr_str.call(null,inst_27497);
var inst_27499 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27498)].join('');
var inst_27500 = figwheel.client.utils.log.call(null,inst_27499);
var state_27517__$1 = state_27517;
var statearr_27549_27629 = state_27517__$1;
(statearr_27549_27629[(2)] = inst_27500);

(statearr_27549_27629[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (43))){
var inst_27493 = (state_27517[(21)]);
var inst_27503 = (state_27517[(2)]);
var inst_27504 = cljs.core.not_empty.call(null,inst_27493);
var state_27517__$1 = (function (){var statearr_27550 = state_27517;
(statearr_27550[(27)] = inst_27503);

return statearr_27550;
})();
if(cljs.core.truth_(inst_27504)){
var statearr_27551_27630 = state_27517__$1;
(statearr_27551_27630[(1)] = (44));

} else {
var statearr_27552_27631 = state_27517__$1;
(statearr_27552_27631[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (29))){
var inst_27437 = (state_27517[(26)]);
var inst_27471 = (state_27517[(16)]);
var inst_27434 = (state_27517[(23)]);
var inst_27431 = (state_27517[(19)]);
var inst_27435 = (state_27517[(24)]);
var inst_27439 = (state_27517[(25)]);
var inst_27467 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27470 = (function (){var all_files = inst_27431;
var res_SINGLEQUOTE_ = inst_27434;
var res = inst_27435;
var files_not_loaded = inst_27437;
var dependencies_that_loaded = inst_27439;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27437,inst_27471,inst_27434,inst_27431,inst_27435,inst_27439,inst_27467,state_val_27518,c__18797__auto__,map__27363,map__27363__$1,opts,before_jsload,on_jsload,reload_dependents,map__27364,map__27364__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27469){
var map__27553 = p__27469;
var map__27553__$1 = ((((!((map__27553 == null)))?((((map__27553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27553):map__27553);
var namespace = cljs.core.get.call(null,map__27553__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27437,inst_27471,inst_27434,inst_27431,inst_27435,inst_27439,inst_27467,state_val_27518,c__18797__auto__,map__27363,map__27363__$1,opts,before_jsload,on_jsload,reload_dependents,map__27364,map__27364__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27471__$1 = cljs.core.group_by.call(null,inst_27470,inst_27437);
var inst_27473 = (inst_27471__$1 == null);
var inst_27474 = cljs.core.not.call(null,inst_27473);
var state_27517__$1 = (function (){var statearr_27555 = state_27517;
(statearr_27555[(28)] = inst_27467);

(statearr_27555[(16)] = inst_27471__$1);

return statearr_27555;
})();
if(inst_27474){
var statearr_27556_27632 = state_27517__$1;
(statearr_27556_27632[(1)] = (32));

} else {
var statearr_27557_27633 = state_27517__$1;
(statearr_27557_27633[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (44))){
var inst_27493 = (state_27517[(21)]);
var inst_27506 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27493);
var inst_27507 = cljs.core.pr_str.call(null,inst_27506);
var inst_27508 = [cljs.core.str("not required: "),cljs.core.str(inst_27507)].join('');
var inst_27509 = figwheel.client.utils.log.call(null,inst_27508);
var state_27517__$1 = state_27517;
var statearr_27558_27634 = state_27517__$1;
(statearr_27558_27634[(2)] = inst_27509);

(statearr_27558_27634[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (6))){
var inst_27412 = (state_27517[(2)]);
var state_27517__$1 = state_27517;
var statearr_27559_27635 = state_27517__$1;
(statearr_27559_27635[(2)] = inst_27412);

(statearr_27559_27635[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (28))){
var inst_27437 = (state_27517[(26)]);
var inst_27464 = (state_27517[(2)]);
var inst_27465 = cljs.core.not_empty.call(null,inst_27437);
var state_27517__$1 = (function (){var statearr_27560 = state_27517;
(statearr_27560[(29)] = inst_27464);

return statearr_27560;
})();
if(cljs.core.truth_(inst_27465)){
var statearr_27561_27636 = state_27517__$1;
(statearr_27561_27636[(1)] = (29));

} else {
var statearr_27562_27637 = state_27517__$1;
(statearr_27562_27637[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (25))){
var inst_27435 = (state_27517[(24)]);
var inst_27451 = (state_27517[(2)]);
var inst_27452 = cljs.core.not_empty.call(null,inst_27435);
var state_27517__$1 = (function (){var statearr_27563 = state_27517;
(statearr_27563[(30)] = inst_27451);

return statearr_27563;
})();
if(cljs.core.truth_(inst_27452)){
var statearr_27564_27638 = state_27517__$1;
(statearr_27564_27638[(1)] = (26));

} else {
var statearr_27565_27639 = state_27517__$1;
(statearr_27565_27639[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (34))){
var inst_27486 = (state_27517[(2)]);
var state_27517__$1 = state_27517;
if(cljs.core.truth_(inst_27486)){
var statearr_27566_27640 = state_27517__$1;
(statearr_27566_27640[(1)] = (38));

} else {
var statearr_27567_27641 = state_27517__$1;
(statearr_27567_27641[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (17))){
var state_27517__$1 = state_27517;
var statearr_27568_27642 = state_27517__$1;
(statearr_27568_27642[(2)] = recompile_dependents);

(statearr_27568_27642[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (3))){
var state_27517__$1 = state_27517;
var statearr_27569_27643 = state_27517__$1;
(statearr_27569_27643[(2)] = null);

(statearr_27569_27643[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (12))){
var inst_27408 = (state_27517[(2)]);
var state_27517__$1 = state_27517;
var statearr_27570_27644 = state_27517__$1;
(statearr_27570_27644[(2)] = inst_27408);

(statearr_27570_27644[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (2))){
var inst_27370 = (state_27517[(13)]);
var inst_27377 = cljs.core.seq.call(null,inst_27370);
var inst_27378 = inst_27377;
var inst_27379 = null;
var inst_27380 = (0);
var inst_27381 = (0);
var state_27517__$1 = (function (){var statearr_27571 = state_27517;
(statearr_27571[(7)] = inst_27381);

(statearr_27571[(8)] = inst_27379);

(statearr_27571[(9)] = inst_27380);

(statearr_27571[(10)] = inst_27378);

return statearr_27571;
})();
var statearr_27572_27645 = state_27517__$1;
(statearr_27572_27645[(2)] = null);

(statearr_27572_27645[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (23))){
var inst_27437 = (state_27517[(26)]);
var inst_27434 = (state_27517[(23)]);
var inst_27431 = (state_27517[(19)]);
var inst_27435 = (state_27517[(24)]);
var inst_27439 = (state_27517[(25)]);
var inst_27442 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27444 = (function (){var all_files = inst_27431;
var res_SINGLEQUOTE_ = inst_27434;
var res = inst_27435;
var files_not_loaded = inst_27437;
var dependencies_that_loaded = inst_27439;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27437,inst_27434,inst_27431,inst_27435,inst_27439,inst_27442,state_val_27518,c__18797__auto__,map__27363,map__27363__$1,opts,before_jsload,on_jsload,reload_dependents,map__27364,map__27364__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27443){
var map__27573 = p__27443;
var map__27573__$1 = ((((!((map__27573 == null)))?((((map__27573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27573):map__27573);
var request_url = cljs.core.get.call(null,map__27573__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27437,inst_27434,inst_27431,inst_27435,inst_27439,inst_27442,state_val_27518,c__18797__auto__,map__27363,map__27363__$1,opts,before_jsload,on_jsload,reload_dependents,map__27364,map__27364__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27445 = cljs.core.reverse.call(null,inst_27439);
var inst_27446 = cljs.core.map.call(null,inst_27444,inst_27445);
var inst_27447 = cljs.core.pr_str.call(null,inst_27446);
var inst_27448 = figwheel.client.utils.log.call(null,inst_27447);
var state_27517__$1 = (function (){var statearr_27575 = state_27517;
(statearr_27575[(31)] = inst_27442);

return statearr_27575;
})();
var statearr_27576_27646 = state_27517__$1;
(statearr_27576_27646[(2)] = inst_27448);

(statearr_27576_27646[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (35))){
var state_27517__$1 = state_27517;
var statearr_27577_27647 = state_27517__$1;
(statearr_27577_27647[(2)] = true);

(statearr_27577_27647[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (19))){
var inst_27421 = (state_27517[(12)]);
var inst_27427 = figwheel.client.file_reloading.expand_files.call(null,inst_27421);
var state_27517__$1 = state_27517;
var statearr_27578_27648 = state_27517__$1;
(statearr_27578_27648[(2)] = inst_27427);

(statearr_27578_27648[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (11))){
var state_27517__$1 = state_27517;
var statearr_27579_27649 = state_27517__$1;
(statearr_27579_27649[(2)] = null);

(statearr_27579_27649[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (9))){
var inst_27410 = (state_27517[(2)]);
var state_27517__$1 = state_27517;
var statearr_27580_27650 = state_27517__$1;
(statearr_27580_27650[(2)] = inst_27410);

(statearr_27580_27650[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (5))){
var inst_27381 = (state_27517[(7)]);
var inst_27380 = (state_27517[(9)]);
var inst_27383 = (inst_27381 < inst_27380);
var inst_27384 = inst_27383;
var state_27517__$1 = state_27517;
if(cljs.core.truth_(inst_27384)){
var statearr_27581_27651 = state_27517__$1;
(statearr_27581_27651[(1)] = (7));

} else {
var statearr_27582_27652 = state_27517__$1;
(statearr_27582_27652[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (14))){
var inst_27391 = (state_27517[(22)]);
var inst_27400 = cljs.core.first.call(null,inst_27391);
var inst_27401 = figwheel.client.file_reloading.eval_body.call(null,inst_27400,opts);
var inst_27402 = cljs.core.next.call(null,inst_27391);
var inst_27378 = inst_27402;
var inst_27379 = null;
var inst_27380 = (0);
var inst_27381 = (0);
var state_27517__$1 = (function (){var statearr_27583 = state_27517;
(statearr_27583[(7)] = inst_27381);

(statearr_27583[(8)] = inst_27379);

(statearr_27583[(9)] = inst_27380);

(statearr_27583[(10)] = inst_27378);

(statearr_27583[(32)] = inst_27401);

return statearr_27583;
})();
var statearr_27584_27653 = state_27517__$1;
(statearr_27584_27653[(2)] = null);

(statearr_27584_27653[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (45))){
var state_27517__$1 = state_27517;
var statearr_27585_27654 = state_27517__$1;
(statearr_27585_27654[(2)] = null);

(statearr_27585_27654[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (26))){
var inst_27437 = (state_27517[(26)]);
var inst_27434 = (state_27517[(23)]);
var inst_27431 = (state_27517[(19)]);
var inst_27435 = (state_27517[(24)]);
var inst_27439 = (state_27517[(25)]);
var inst_27454 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27456 = (function (){var all_files = inst_27431;
var res_SINGLEQUOTE_ = inst_27434;
var res = inst_27435;
var files_not_loaded = inst_27437;
var dependencies_that_loaded = inst_27439;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27437,inst_27434,inst_27431,inst_27435,inst_27439,inst_27454,state_val_27518,c__18797__auto__,map__27363,map__27363__$1,opts,before_jsload,on_jsload,reload_dependents,map__27364,map__27364__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27455){
var map__27586 = p__27455;
var map__27586__$1 = ((((!((map__27586 == null)))?((((map__27586.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27586.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27586):map__27586);
var namespace = cljs.core.get.call(null,map__27586__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27586__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27437,inst_27434,inst_27431,inst_27435,inst_27439,inst_27454,state_val_27518,c__18797__auto__,map__27363,map__27363__$1,opts,before_jsload,on_jsload,reload_dependents,map__27364,map__27364__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27457 = cljs.core.map.call(null,inst_27456,inst_27435);
var inst_27458 = cljs.core.pr_str.call(null,inst_27457);
var inst_27459 = figwheel.client.utils.log.call(null,inst_27458);
var inst_27460 = (function (){var all_files = inst_27431;
var res_SINGLEQUOTE_ = inst_27434;
var res = inst_27435;
var files_not_loaded = inst_27437;
var dependencies_that_loaded = inst_27439;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27437,inst_27434,inst_27431,inst_27435,inst_27439,inst_27454,inst_27456,inst_27457,inst_27458,inst_27459,state_val_27518,c__18797__auto__,map__27363,map__27363__$1,opts,before_jsload,on_jsload,reload_dependents,map__27364,map__27364__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27437,inst_27434,inst_27431,inst_27435,inst_27439,inst_27454,inst_27456,inst_27457,inst_27458,inst_27459,state_val_27518,c__18797__auto__,map__27363,map__27363__$1,opts,before_jsload,on_jsload,reload_dependents,map__27364,map__27364__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27461 = setTimeout(inst_27460,(10));
var state_27517__$1 = (function (){var statearr_27588 = state_27517;
(statearr_27588[(33)] = inst_27459);

(statearr_27588[(34)] = inst_27454);

return statearr_27588;
})();
var statearr_27589_27655 = state_27517__$1;
(statearr_27589_27655[(2)] = inst_27461);

(statearr_27589_27655[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (16))){
var state_27517__$1 = state_27517;
var statearr_27590_27656 = state_27517__$1;
(statearr_27590_27656[(2)] = reload_dependents);

(statearr_27590_27656[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (38))){
var inst_27471 = (state_27517[(16)]);
var inst_27488 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27471);
var state_27517__$1 = state_27517;
var statearr_27591_27657 = state_27517__$1;
(statearr_27591_27657[(2)] = inst_27488);

(statearr_27591_27657[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (30))){
var state_27517__$1 = state_27517;
var statearr_27592_27658 = state_27517__$1;
(statearr_27592_27658[(2)] = null);

(statearr_27592_27658[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (10))){
var inst_27391 = (state_27517[(22)]);
var inst_27393 = cljs.core.chunked_seq_QMARK_.call(null,inst_27391);
var state_27517__$1 = state_27517;
if(inst_27393){
var statearr_27593_27659 = state_27517__$1;
(statearr_27593_27659[(1)] = (13));

} else {
var statearr_27594_27660 = state_27517__$1;
(statearr_27594_27660[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (18))){
var inst_27425 = (state_27517[(2)]);
var state_27517__$1 = state_27517;
if(cljs.core.truth_(inst_27425)){
var statearr_27595_27661 = state_27517__$1;
(statearr_27595_27661[(1)] = (19));

} else {
var statearr_27596_27662 = state_27517__$1;
(statearr_27596_27662[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (42))){
var state_27517__$1 = state_27517;
var statearr_27597_27663 = state_27517__$1;
(statearr_27597_27663[(2)] = null);

(statearr_27597_27663[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (37))){
var inst_27483 = (state_27517[(2)]);
var state_27517__$1 = state_27517;
var statearr_27598_27664 = state_27517__$1;
(statearr_27598_27664[(2)] = inst_27483);

(statearr_27598_27664[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27518 === (8))){
var inst_27391 = (state_27517[(22)]);
var inst_27378 = (state_27517[(10)]);
var inst_27391__$1 = cljs.core.seq.call(null,inst_27378);
var state_27517__$1 = (function (){var statearr_27599 = state_27517;
(statearr_27599[(22)] = inst_27391__$1);

return statearr_27599;
})();
if(inst_27391__$1){
var statearr_27600_27665 = state_27517__$1;
(statearr_27600_27665[(1)] = (10));

} else {
var statearr_27601_27666 = state_27517__$1;
(statearr_27601_27666[(1)] = (11));

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
});})(c__18797__auto__,map__27363,map__27363__$1,opts,before_jsload,on_jsload,reload_dependents,map__27364,map__27364__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18776__auto__,c__18797__auto__,map__27363,map__27363__$1,opts,before_jsload,on_jsload,reload_dependents,map__27364,map__27364__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18777__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18777__auto____0 = (function (){
var statearr_27605 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27605[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18777__auto__);

(statearr_27605[(1)] = (1));

return statearr_27605;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18777__auto____1 = (function (state_27517){
while(true){
var ret_value__18778__auto__ = (function (){try{while(true){
var result__18779__auto__ = switch__18776__auto__.call(null,state_27517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18779__auto__;
}
break;
}
}catch (e27606){if((e27606 instanceof Object)){
var ex__18780__auto__ = e27606;
var statearr_27607_27667 = state_27517;
(statearr_27607_27667[(5)] = ex__18780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27668 = state_27517;
state_27517 = G__27668;
continue;
} else {
return ret_value__18778__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18777__auto__ = function(state_27517){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18777__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18777__auto____1.call(this,state_27517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18777__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18777__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18777__auto__;
})()
;})(switch__18776__auto__,c__18797__auto__,map__27363,map__27363__$1,opts,before_jsload,on_jsload,reload_dependents,map__27364,map__27364__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__18799__auto__ = (function (){var statearr_27608 = f__18798__auto__.call(null);
(statearr_27608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18797__auto__);

return statearr_27608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18799__auto__);
});})(c__18797__auto__,map__27363,map__27363__$1,opts,before_jsload,on_jsload,reload_dependents,map__27364,map__27364__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__18797__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27671,link){
var map__27674 = p__27671;
var map__27674__$1 = ((((!((map__27674 == null)))?((((map__27674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27674):map__27674);
var file = cljs.core.get.call(null,map__27674__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__27674,map__27674__$1,file){
return (function (p1__27669_SHARP_,p2__27670_SHARP_){
if(cljs.core._EQ_.call(null,p1__27669_SHARP_,p2__27670_SHARP_)){
return p1__27669_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__27674,map__27674__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27680){
var map__27681 = p__27680;
var map__27681__$1 = ((((!((map__27681 == null)))?((((map__27681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27681):map__27681);
var match_length = cljs.core.get.call(null,map__27681__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27681__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27676_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27676_SHARP_);
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
var args27683 = [];
var len__17830__auto___27686 = arguments.length;
var i__17831__auto___27687 = (0);
while(true){
if((i__17831__auto___27687 < len__17830__auto___27686)){
args27683.push((arguments[i__17831__auto___27687]));

var G__27688 = (i__17831__auto___27687 + (1));
i__17831__auto___27687 = G__27688;
continue;
} else {
}
break;
}

var G__27685 = args27683.length;
switch (G__27685) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27683.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27690_SHARP_,p2__27691_SHARP_){
return cljs.core.assoc.call(null,p1__27690_SHARP_,cljs.core.get.call(null,p2__27691_SHARP_,key),p2__27691_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27692){
var map__27695 = p__27692;
var map__27695__$1 = ((((!((map__27695 == null)))?((((map__27695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27695):map__27695);
var f_data = map__27695__$1;
var file = cljs.core.get.call(null,map__27695__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27697,files_msg){
var map__27704 = p__27697;
var map__27704__$1 = ((((!((map__27704 == null)))?((((map__27704.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27704.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27704):map__27704);
var opts = map__27704__$1;
var on_cssload = cljs.core.get.call(null,map__27704__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27706_27710 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27707_27711 = null;
var count__27708_27712 = (0);
var i__27709_27713 = (0);
while(true){
if((i__27709_27713 < count__27708_27712)){
var f_27714 = cljs.core._nth.call(null,chunk__27707_27711,i__27709_27713);
figwheel.client.file_reloading.reload_css_file.call(null,f_27714);

var G__27715 = seq__27706_27710;
var G__27716 = chunk__27707_27711;
var G__27717 = count__27708_27712;
var G__27718 = (i__27709_27713 + (1));
seq__27706_27710 = G__27715;
chunk__27707_27711 = G__27716;
count__27708_27712 = G__27717;
i__27709_27713 = G__27718;
continue;
} else {
var temp__4425__auto___27719 = cljs.core.seq.call(null,seq__27706_27710);
if(temp__4425__auto___27719){
var seq__27706_27720__$1 = temp__4425__auto___27719;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27706_27720__$1)){
var c__17575__auto___27721 = cljs.core.chunk_first.call(null,seq__27706_27720__$1);
var G__27722 = cljs.core.chunk_rest.call(null,seq__27706_27720__$1);
var G__27723 = c__17575__auto___27721;
var G__27724 = cljs.core.count.call(null,c__17575__auto___27721);
var G__27725 = (0);
seq__27706_27710 = G__27722;
chunk__27707_27711 = G__27723;
count__27708_27712 = G__27724;
i__27709_27713 = G__27725;
continue;
} else {
var f_27726 = cljs.core.first.call(null,seq__27706_27720__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27726);

var G__27727 = cljs.core.next.call(null,seq__27706_27720__$1);
var G__27728 = null;
var G__27729 = (0);
var G__27730 = (0);
seq__27706_27710 = G__27727;
chunk__27707_27711 = G__27728;
count__27708_27712 = G__27729;
i__27709_27713 = G__27730;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27704,map__27704__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27704,map__27704__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map