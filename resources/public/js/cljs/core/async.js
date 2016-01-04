// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args20159 = [];
var len__17829__auto___20165 = arguments.length;
var i__17830__auto___20166 = (0);
while(true){
if((i__17830__auto___20166 < len__17829__auto___20165)){
args20159.push((arguments[i__17830__auto___20166]));

var G__20167 = (i__17830__auto___20166 + (1));
i__17830__auto___20166 = G__20167;
continue;
} else {
}
break;
}

var G__20161 = args20159.length;
switch (G__20161) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20159.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20162 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20162 = (function (f,blockable,meta20163){
this.f = f;
this.blockable = blockable;
this.meta20163 = meta20163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20164,meta20163__$1){
var self__ = this;
var _20164__$1 = this;
return (new cljs.core.async.t_cljs$core$async20162(self__.f,self__.blockable,meta20163__$1));
});

cljs.core.async.t_cljs$core$async20162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20164){
var self__ = this;
var _20164__$1 = this;
return self__.meta20163;
});

cljs.core.async.t_cljs$core$async20162.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20162.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20162.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20162.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20162.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20163","meta20163",1645068607,null)], null);
});

cljs.core.async.t_cljs$core$async20162.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20162";

cljs.core.async.t_cljs$core$async20162.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async20162");
});

cljs.core.async.__GT_t_cljs$core$async20162 = (function cljs$core$async$__GT_t_cljs$core$async20162(f__$1,blockable__$1,meta20163){
return (new cljs.core.async.t_cljs$core$async20162(f__$1,blockable__$1,meta20163));
});

}

return (new cljs.core.async.t_cljs$core$async20162(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args20171 = [];
var len__17829__auto___20174 = arguments.length;
var i__17830__auto___20175 = (0);
while(true){
if((i__17830__auto___20175 < len__17829__auto___20174)){
args20171.push((arguments[i__17830__auto___20175]));

var G__20176 = (i__17830__auto___20175 + (1));
i__17830__auto___20175 = G__20176;
continue;
} else {
}
break;
}

var G__20173 = args20171.length;
switch (G__20173) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20171.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args20178 = [];
var len__17829__auto___20181 = arguments.length;
var i__17830__auto___20182 = (0);
while(true){
if((i__17830__auto___20182 < len__17829__auto___20181)){
args20178.push((arguments[i__17830__auto___20182]));

var G__20183 = (i__17830__auto___20182 + (1));
i__17830__auto___20182 = G__20183;
continue;
} else {
}
break;
}

var G__20180 = args20178.length;
switch (G__20180) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20178.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args20185 = [];
var len__17829__auto___20188 = arguments.length;
var i__17830__auto___20189 = (0);
while(true){
if((i__17830__auto___20189 < len__17829__auto___20188)){
args20185.push((arguments[i__17830__auto___20189]));

var G__20190 = (i__17830__auto___20189 + (1));
i__17830__auto___20189 = G__20190;
continue;
} else {
}
break;
}

var G__20187 = args20185.length;
switch (G__20187) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20185.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20192 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20192);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20192,ret){
return (function (){
return fn1.call(null,val_20192);
});})(val_20192,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args20193 = [];
var len__17829__auto___20196 = arguments.length;
var i__17830__auto___20197 = (0);
while(true){
if((i__17830__auto___20197 < len__17829__auto___20196)){
args20193.push((arguments[i__17830__auto___20197]));

var G__20198 = (i__17830__auto___20197 + (1));
i__17830__auto___20197 = G__20198;
continue;
} else {
}
break;
}

var G__20195 = args20193.length;
switch (G__20195) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20193.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17674__auto___20200 = n;
var x_20201 = (0);
while(true){
if((x_20201 < n__17674__auto___20200)){
(a[x_20201] = (0));

var G__20202 = (x_20201 + (1));
x_20201 = G__20202;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__20203 = (i + (1));
i = G__20203;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20207 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20207 = (function (alt_flag,flag,meta20208){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20208 = meta20208;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20209,meta20208__$1){
var self__ = this;
var _20209__$1 = this;
return (new cljs.core.async.t_cljs$core$async20207(self__.alt_flag,self__.flag,meta20208__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20207.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20209){
var self__ = this;
var _20209__$1 = this;
return self__.meta20208;
});})(flag))
;

cljs.core.async.t_cljs$core$async20207.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20207.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20207.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20207.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20207.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20208","meta20208",-1665093456,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20207.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20207.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20207";

cljs.core.async.t_cljs$core$async20207.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async20207");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20207 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20207(alt_flag__$1,flag__$1,meta20208){
return (new cljs.core.async.t_cljs$core$async20207(alt_flag__$1,flag__$1,meta20208));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20207(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20213 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20213 = (function (alt_handler,flag,cb,meta20214){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20214 = meta20214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20215,meta20214__$1){
var self__ = this;
var _20215__$1 = this;
return (new cljs.core.async.t_cljs$core$async20213(self__.alt_handler,self__.flag,self__.cb,meta20214__$1));
});

cljs.core.async.t_cljs$core$async20213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20215){
var self__ = this;
var _20215__$1 = this;
return self__.meta20214;
});

cljs.core.async.t_cljs$core$async20213.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20213.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20213.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20213.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20213.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20214","meta20214",1325449380,null)], null);
});

cljs.core.async.t_cljs$core$async20213.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20213.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20213";

cljs.core.async.t_cljs$core$async20213.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async20213");
});

cljs.core.async.__GT_t_cljs$core$async20213 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20213(alt_handler__$1,flag__$1,cb__$1,meta20214){
return (new cljs.core.async.t_cljs$core$async20213(alt_handler__$1,flag__$1,cb__$1,meta20214));
});

}

return (new cljs.core.async.t_cljs$core$async20213(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20216_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20216_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20217_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20217_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16771__auto__ = wport;
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20218 = (i + (1));
i = G__20218;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16771__auto__ = ret;
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16759__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16759__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17836__auto__ = [];
var len__17829__auto___20224 = arguments.length;
var i__17830__auto___20225 = (0);
while(true){
if((i__17830__auto___20225 < len__17829__auto___20224)){
args__17836__auto__.push((arguments[i__17830__auto___20225]));

var G__20226 = (i__17830__auto___20225 + (1));
i__17830__auto___20225 = G__20226;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((1) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17837__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20221){
var map__20222 = p__20221;
var map__20222__$1 = ((((!((map__20222 == null)))?((((map__20222.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20222.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20222):map__20222);
var opts = map__20222__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20219){
var G__20220 = cljs.core.first.call(null,seq20219);
var seq20219__$1 = cljs.core.next.call(null,seq20219);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20220,seq20219__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args20227 = [];
var len__17829__auto___20277 = arguments.length;
var i__17830__auto___20278 = (0);
while(true){
if((i__17830__auto___20278 < len__17829__auto___20277)){
args20227.push((arguments[i__17830__auto___20278]));

var G__20279 = (i__17830__auto___20278 + (1));
i__17830__auto___20278 = G__20279;
continue;
} else {
}
break;
}

var G__20229 = args20227.length;
switch (G__20229) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20227.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18796__auto___20281 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___20281){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___20281){
return (function (state_20253){
var state_val_20254 = (state_20253[(1)]);
if((state_val_20254 === (7))){
var inst_20249 = (state_20253[(2)]);
var state_20253__$1 = state_20253;
var statearr_20255_20282 = state_20253__$1;
(statearr_20255_20282[(2)] = inst_20249);

(statearr_20255_20282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20254 === (1))){
var state_20253__$1 = state_20253;
var statearr_20256_20283 = state_20253__$1;
(statearr_20256_20283[(2)] = null);

(statearr_20256_20283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20254 === (4))){
var inst_20232 = (state_20253[(7)]);
var inst_20232__$1 = (state_20253[(2)]);
var inst_20233 = (inst_20232__$1 == null);
var state_20253__$1 = (function (){var statearr_20257 = state_20253;
(statearr_20257[(7)] = inst_20232__$1);

return statearr_20257;
})();
if(cljs.core.truth_(inst_20233)){
var statearr_20258_20284 = state_20253__$1;
(statearr_20258_20284[(1)] = (5));

} else {
var statearr_20259_20285 = state_20253__$1;
(statearr_20259_20285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20254 === (13))){
var state_20253__$1 = state_20253;
var statearr_20260_20286 = state_20253__$1;
(statearr_20260_20286[(2)] = null);

(statearr_20260_20286[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20254 === (6))){
var inst_20232 = (state_20253[(7)]);
var state_20253__$1 = state_20253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20253__$1,(11),to,inst_20232);
} else {
if((state_val_20254 === (3))){
var inst_20251 = (state_20253[(2)]);
var state_20253__$1 = state_20253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20253__$1,inst_20251);
} else {
if((state_val_20254 === (12))){
var state_20253__$1 = state_20253;
var statearr_20261_20287 = state_20253__$1;
(statearr_20261_20287[(2)] = null);

(statearr_20261_20287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20254 === (2))){
var state_20253__$1 = state_20253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20253__$1,(4),from);
} else {
if((state_val_20254 === (11))){
var inst_20242 = (state_20253[(2)]);
var state_20253__$1 = state_20253;
if(cljs.core.truth_(inst_20242)){
var statearr_20262_20288 = state_20253__$1;
(statearr_20262_20288[(1)] = (12));

} else {
var statearr_20263_20289 = state_20253__$1;
(statearr_20263_20289[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20254 === (9))){
var state_20253__$1 = state_20253;
var statearr_20264_20290 = state_20253__$1;
(statearr_20264_20290[(2)] = null);

(statearr_20264_20290[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20254 === (5))){
var state_20253__$1 = state_20253;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20265_20291 = state_20253__$1;
(statearr_20265_20291[(1)] = (8));

} else {
var statearr_20266_20292 = state_20253__$1;
(statearr_20266_20292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20254 === (14))){
var inst_20247 = (state_20253[(2)]);
var state_20253__$1 = state_20253;
var statearr_20267_20293 = state_20253__$1;
(statearr_20267_20293[(2)] = inst_20247);

(statearr_20267_20293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20254 === (10))){
var inst_20239 = (state_20253[(2)]);
var state_20253__$1 = state_20253;
var statearr_20268_20294 = state_20253__$1;
(statearr_20268_20294[(2)] = inst_20239);

(statearr_20268_20294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20254 === (8))){
var inst_20236 = cljs.core.async.close_BANG_.call(null,to);
var state_20253__$1 = state_20253;
var statearr_20269_20295 = state_20253__$1;
(statearr_20269_20295[(2)] = inst_20236);

(statearr_20269_20295[(1)] = (10));


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
});})(c__18796__auto___20281))
;
return ((function (switch__18775__auto__,c__18796__auto___20281){
return (function() {
var cljs$core$async$state_machine__18776__auto__ = null;
var cljs$core$async$state_machine__18776__auto____0 = (function (){
var statearr_20273 = [null,null,null,null,null,null,null,null];
(statearr_20273[(0)] = cljs$core$async$state_machine__18776__auto__);

(statearr_20273[(1)] = (1));

return statearr_20273;
});
var cljs$core$async$state_machine__18776__auto____1 = (function (state_20253){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_20253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e20274){if((e20274 instanceof Object)){
var ex__18779__auto__ = e20274;
var statearr_20275_20296 = state_20253;
(statearr_20275_20296[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20297 = state_20253;
state_20253 = G__20297;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$state_machine__18776__auto__ = function(state_20253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18776__auto____1.call(this,state_20253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18776__auto____0;
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18776__auto____1;
return cljs$core$async$state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___20281))
})();
var state__18798__auto__ = (function (){var statearr_20276 = f__18797__auto__.call(null);
(statearr_20276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___20281);

return statearr_20276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___20281))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__20481){
var vec__20482 = p__20481;
var v = cljs.core.nth.call(null,vec__20482,(0),null);
var p = cljs.core.nth.call(null,vec__20482,(1),null);
var job = vec__20482;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18796__auto___20664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___20664,res,vec__20482,v,p,job,jobs,results){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___20664,res,vec__20482,v,p,job,jobs,results){
return (function (state_20487){
var state_val_20488 = (state_20487[(1)]);
if((state_val_20488 === (1))){
var state_20487__$1 = state_20487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20487__$1,(2),res,v);
} else {
if((state_val_20488 === (2))){
var inst_20484 = (state_20487[(2)]);
var inst_20485 = cljs.core.async.close_BANG_.call(null,res);
var state_20487__$1 = (function (){var statearr_20489 = state_20487;
(statearr_20489[(7)] = inst_20484);

return statearr_20489;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20487__$1,inst_20485);
} else {
return null;
}
}
});})(c__18796__auto___20664,res,vec__20482,v,p,job,jobs,results))
;
return ((function (switch__18775__auto__,c__18796__auto___20664,res,vec__20482,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____0 = (function (){
var statearr_20493 = [null,null,null,null,null,null,null,null];
(statearr_20493[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__);

(statearr_20493[(1)] = (1));

return statearr_20493;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____1 = (function (state_20487){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_20487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e20494){if((e20494 instanceof Object)){
var ex__18779__auto__ = e20494;
var statearr_20495_20665 = state_20487;
(statearr_20495_20665[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20666 = state_20487;
state_20487 = G__20666;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__ = function(state_20487){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____1.call(this,state_20487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___20664,res,vec__20482,v,p,job,jobs,results))
})();
var state__18798__auto__ = (function (){var statearr_20496 = f__18797__auto__.call(null);
(statearr_20496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___20664);

return statearr_20496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___20664,res,vec__20482,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20497){
var vec__20498 = p__20497;
var v = cljs.core.nth.call(null,vec__20498,(0),null);
var p = cljs.core.nth.call(null,vec__20498,(1),null);
var job = vec__20498;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17674__auto___20667 = n;
var __20668 = (0);
while(true){
if((__20668 < n__17674__auto___20667)){
var G__20499_20669 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20499_20669) {
case "compute":
var c__18796__auto___20671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20668,c__18796__auto___20671,G__20499_20669,n__17674__auto___20667,jobs,results,process,async){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (__20668,c__18796__auto___20671,G__20499_20669,n__17674__auto___20667,jobs,results,process,async){
return (function (state_20512){
var state_val_20513 = (state_20512[(1)]);
if((state_val_20513 === (1))){
var state_20512__$1 = state_20512;
var statearr_20514_20672 = state_20512__$1;
(statearr_20514_20672[(2)] = null);

(statearr_20514_20672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20513 === (2))){
var state_20512__$1 = state_20512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20512__$1,(4),jobs);
} else {
if((state_val_20513 === (3))){
var inst_20510 = (state_20512[(2)]);
var state_20512__$1 = state_20512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20512__$1,inst_20510);
} else {
if((state_val_20513 === (4))){
var inst_20502 = (state_20512[(2)]);
var inst_20503 = process.call(null,inst_20502);
var state_20512__$1 = state_20512;
if(cljs.core.truth_(inst_20503)){
var statearr_20515_20673 = state_20512__$1;
(statearr_20515_20673[(1)] = (5));

} else {
var statearr_20516_20674 = state_20512__$1;
(statearr_20516_20674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20513 === (5))){
var state_20512__$1 = state_20512;
var statearr_20517_20675 = state_20512__$1;
(statearr_20517_20675[(2)] = null);

(statearr_20517_20675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20513 === (6))){
var state_20512__$1 = state_20512;
var statearr_20518_20676 = state_20512__$1;
(statearr_20518_20676[(2)] = null);

(statearr_20518_20676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20513 === (7))){
var inst_20508 = (state_20512[(2)]);
var state_20512__$1 = state_20512;
var statearr_20519_20677 = state_20512__$1;
(statearr_20519_20677[(2)] = inst_20508);

(statearr_20519_20677[(1)] = (3));


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
});})(__20668,c__18796__auto___20671,G__20499_20669,n__17674__auto___20667,jobs,results,process,async))
;
return ((function (__20668,switch__18775__auto__,c__18796__auto___20671,G__20499_20669,n__17674__auto___20667,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____0 = (function (){
var statearr_20523 = [null,null,null,null,null,null,null];
(statearr_20523[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__);

(statearr_20523[(1)] = (1));

return statearr_20523;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____1 = (function (state_20512){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_20512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e20524){if((e20524 instanceof Object)){
var ex__18779__auto__ = e20524;
var statearr_20525_20678 = state_20512;
(statearr_20525_20678[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20679 = state_20512;
state_20512 = G__20679;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__ = function(state_20512){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____1.call(this,state_20512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__;
})()
;})(__20668,switch__18775__auto__,c__18796__auto___20671,G__20499_20669,n__17674__auto___20667,jobs,results,process,async))
})();
var state__18798__auto__ = (function (){var statearr_20526 = f__18797__auto__.call(null);
(statearr_20526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___20671);

return statearr_20526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(__20668,c__18796__auto___20671,G__20499_20669,n__17674__auto___20667,jobs,results,process,async))
);


break;
case "async":
var c__18796__auto___20680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20668,c__18796__auto___20680,G__20499_20669,n__17674__auto___20667,jobs,results,process,async){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (__20668,c__18796__auto___20680,G__20499_20669,n__17674__auto___20667,jobs,results,process,async){
return (function (state_20539){
var state_val_20540 = (state_20539[(1)]);
if((state_val_20540 === (1))){
var state_20539__$1 = state_20539;
var statearr_20541_20681 = state_20539__$1;
(statearr_20541_20681[(2)] = null);

(statearr_20541_20681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20540 === (2))){
var state_20539__$1 = state_20539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20539__$1,(4),jobs);
} else {
if((state_val_20540 === (3))){
var inst_20537 = (state_20539[(2)]);
var state_20539__$1 = state_20539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20539__$1,inst_20537);
} else {
if((state_val_20540 === (4))){
var inst_20529 = (state_20539[(2)]);
var inst_20530 = async.call(null,inst_20529);
var state_20539__$1 = state_20539;
if(cljs.core.truth_(inst_20530)){
var statearr_20542_20682 = state_20539__$1;
(statearr_20542_20682[(1)] = (5));

} else {
var statearr_20543_20683 = state_20539__$1;
(statearr_20543_20683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20540 === (5))){
var state_20539__$1 = state_20539;
var statearr_20544_20684 = state_20539__$1;
(statearr_20544_20684[(2)] = null);

(statearr_20544_20684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20540 === (6))){
var state_20539__$1 = state_20539;
var statearr_20545_20685 = state_20539__$1;
(statearr_20545_20685[(2)] = null);

(statearr_20545_20685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20540 === (7))){
var inst_20535 = (state_20539[(2)]);
var state_20539__$1 = state_20539;
var statearr_20546_20686 = state_20539__$1;
(statearr_20546_20686[(2)] = inst_20535);

(statearr_20546_20686[(1)] = (3));


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
});})(__20668,c__18796__auto___20680,G__20499_20669,n__17674__auto___20667,jobs,results,process,async))
;
return ((function (__20668,switch__18775__auto__,c__18796__auto___20680,G__20499_20669,n__17674__auto___20667,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____0 = (function (){
var statearr_20550 = [null,null,null,null,null,null,null];
(statearr_20550[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__);

(statearr_20550[(1)] = (1));

return statearr_20550;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____1 = (function (state_20539){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_20539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e20551){if((e20551 instanceof Object)){
var ex__18779__auto__ = e20551;
var statearr_20552_20687 = state_20539;
(statearr_20552_20687[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20688 = state_20539;
state_20539 = G__20688;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__ = function(state_20539){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____1.call(this,state_20539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__;
})()
;})(__20668,switch__18775__auto__,c__18796__auto___20680,G__20499_20669,n__17674__auto___20667,jobs,results,process,async))
})();
var state__18798__auto__ = (function (){var statearr_20553 = f__18797__auto__.call(null);
(statearr_20553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___20680);

return statearr_20553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(__20668,c__18796__auto___20680,G__20499_20669,n__17674__auto___20667,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20689 = (__20668 + (1));
__20668 = G__20689;
continue;
} else {
}
break;
}

var c__18796__auto___20690 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___20690,jobs,results,process,async){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___20690,jobs,results,process,async){
return (function (state_20575){
var state_val_20576 = (state_20575[(1)]);
if((state_val_20576 === (1))){
var state_20575__$1 = state_20575;
var statearr_20577_20691 = state_20575__$1;
(statearr_20577_20691[(2)] = null);

(statearr_20577_20691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20576 === (2))){
var state_20575__$1 = state_20575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20575__$1,(4),from);
} else {
if((state_val_20576 === (3))){
var inst_20573 = (state_20575[(2)]);
var state_20575__$1 = state_20575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20575__$1,inst_20573);
} else {
if((state_val_20576 === (4))){
var inst_20556 = (state_20575[(7)]);
var inst_20556__$1 = (state_20575[(2)]);
var inst_20557 = (inst_20556__$1 == null);
var state_20575__$1 = (function (){var statearr_20578 = state_20575;
(statearr_20578[(7)] = inst_20556__$1);

return statearr_20578;
})();
if(cljs.core.truth_(inst_20557)){
var statearr_20579_20692 = state_20575__$1;
(statearr_20579_20692[(1)] = (5));

} else {
var statearr_20580_20693 = state_20575__$1;
(statearr_20580_20693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20576 === (5))){
var inst_20559 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20575__$1 = state_20575;
var statearr_20581_20694 = state_20575__$1;
(statearr_20581_20694[(2)] = inst_20559);

(statearr_20581_20694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20576 === (6))){
var inst_20561 = (state_20575[(8)]);
var inst_20556 = (state_20575[(7)]);
var inst_20561__$1 = cljs.core.async.chan.call(null,(1));
var inst_20562 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20563 = [inst_20556,inst_20561__$1];
var inst_20564 = (new cljs.core.PersistentVector(null,2,(5),inst_20562,inst_20563,null));
var state_20575__$1 = (function (){var statearr_20582 = state_20575;
(statearr_20582[(8)] = inst_20561__$1);

return statearr_20582;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20575__$1,(8),jobs,inst_20564);
} else {
if((state_val_20576 === (7))){
var inst_20571 = (state_20575[(2)]);
var state_20575__$1 = state_20575;
var statearr_20583_20695 = state_20575__$1;
(statearr_20583_20695[(2)] = inst_20571);

(statearr_20583_20695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20576 === (8))){
var inst_20561 = (state_20575[(8)]);
var inst_20566 = (state_20575[(2)]);
var state_20575__$1 = (function (){var statearr_20584 = state_20575;
(statearr_20584[(9)] = inst_20566);

return statearr_20584;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20575__$1,(9),results,inst_20561);
} else {
if((state_val_20576 === (9))){
var inst_20568 = (state_20575[(2)]);
var state_20575__$1 = (function (){var statearr_20585 = state_20575;
(statearr_20585[(10)] = inst_20568);

return statearr_20585;
})();
var statearr_20586_20696 = state_20575__$1;
(statearr_20586_20696[(2)] = null);

(statearr_20586_20696[(1)] = (2));


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
});})(c__18796__auto___20690,jobs,results,process,async))
;
return ((function (switch__18775__auto__,c__18796__auto___20690,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____0 = (function (){
var statearr_20590 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20590[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__);

(statearr_20590[(1)] = (1));

return statearr_20590;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____1 = (function (state_20575){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_20575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e20591){if((e20591 instanceof Object)){
var ex__18779__auto__ = e20591;
var statearr_20592_20697 = state_20575;
(statearr_20592_20697[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20698 = state_20575;
state_20575 = G__20698;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__ = function(state_20575){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____1.call(this,state_20575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___20690,jobs,results,process,async))
})();
var state__18798__auto__ = (function (){var statearr_20593 = f__18797__auto__.call(null);
(statearr_20593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___20690);

return statearr_20593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___20690,jobs,results,process,async))
);


var c__18796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto__,jobs,results,process,async){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto__,jobs,results,process,async){
return (function (state_20631){
var state_val_20632 = (state_20631[(1)]);
if((state_val_20632 === (7))){
var inst_20627 = (state_20631[(2)]);
var state_20631__$1 = state_20631;
var statearr_20633_20699 = state_20631__$1;
(statearr_20633_20699[(2)] = inst_20627);

(statearr_20633_20699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (20))){
var state_20631__$1 = state_20631;
var statearr_20634_20700 = state_20631__$1;
(statearr_20634_20700[(2)] = null);

(statearr_20634_20700[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (1))){
var state_20631__$1 = state_20631;
var statearr_20635_20701 = state_20631__$1;
(statearr_20635_20701[(2)] = null);

(statearr_20635_20701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (4))){
var inst_20596 = (state_20631[(7)]);
var inst_20596__$1 = (state_20631[(2)]);
var inst_20597 = (inst_20596__$1 == null);
var state_20631__$1 = (function (){var statearr_20636 = state_20631;
(statearr_20636[(7)] = inst_20596__$1);

return statearr_20636;
})();
if(cljs.core.truth_(inst_20597)){
var statearr_20637_20702 = state_20631__$1;
(statearr_20637_20702[(1)] = (5));

} else {
var statearr_20638_20703 = state_20631__$1;
(statearr_20638_20703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (15))){
var inst_20609 = (state_20631[(8)]);
var state_20631__$1 = state_20631;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20631__$1,(18),to,inst_20609);
} else {
if((state_val_20632 === (21))){
var inst_20622 = (state_20631[(2)]);
var state_20631__$1 = state_20631;
var statearr_20639_20704 = state_20631__$1;
(statearr_20639_20704[(2)] = inst_20622);

(statearr_20639_20704[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (13))){
var inst_20624 = (state_20631[(2)]);
var state_20631__$1 = (function (){var statearr_20640 = state_20631;
(statearr_20640[(9)] = inst_20624);

return statearr_20640;
})();
var statearr_20641_20705 = state_20631__$1;
(statearr_20641_20705[(2)] = null);

(statearr_20641_20705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (6))){
var inst_20596 = (state_20631[(7)]);
var state_20631__$1 = state_20631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20631__$1,(11),inst_20596);
} else {
if((state_val_20632 === (17))){
var inst_20617 = (state_20631[(2)]);
var state_20631__$1 = state_20631;
if(cljs.core.truth_(inst_20617)){
var statearr_20642_20706 = state_20631__$1;
(statearr_20642_20706[(1)] = (19));

} else {
var statearr_20643_20707 = state_20631__$1;
(statearr_20643_20707[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (3))){
var inst_20629 = (state_20631[(2)]);
var state_20631__$1 = state_20631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20631__$1,inst_20629);
} else {
if((state_val_20632 === (12))){
var inst_20606 = (state_20631[(10)]);
var state_20631__$1 = state_20631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20631__$1,(14),inst_20606);
} else {
if((state_val_20632 === (2))){
var state_20631__$1 = state_20631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20631__$1,(4),results);
} else {
if((state_val_20632 === (19))){
var state_20631__$1 = state_20631;
var statearr_20644_20708 = state_20631__$1;
(statearr_20644_20708[(2)] = null);

(statearr_20644_20708[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (11))){
var inst_20606 = (state_20631[(2)]);
var state_20631__$1 = (function (){var statearr_20645 = state_20631;
(statearr_20645[(10)] = inst_20606);

return statearr_20645;
})();
var statearr_20646_20709 = state_20631__$1;
(statearr_20646_20709[(2)] = null);

(statearr_20646_20709[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (9))){
var state_20631__$1 = state_20631;
var statearr_20647_20710 = state_20631__$1;
(statearr_20647_20710[(2)] = null);

(statearr_20647_20710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (5))){
var state_20631__$1 = state_20631;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20648_20711 = state_20631__$1;
(statearr_20648_20711[(1)] = (8));

} else {
var statearr_20649_20712 = state_20631__$1;
(statearr_20649_20712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (14))){
var inst_20609 = (state_20631[(8)]);
var inst_20611 = (state_20631[(11)]);
var inst_20609__$1 = (state_20631[(2)]);
var inst_20610 = (inst_20609__$1 == null);
var inst_20611__$1 = cljs.core.not.call(null,inst_20610);
var state_20631__$1 = (function (){var statearr_20650 = state_20631;
(statearr_20650[(8)] = inst_20609__$1);

(statearr_20650[(11)] = inst_20611__$1);

return statearr_20650;
})();
if(inst_20611__$1){
var statearr_20651_20713 = state_20631__$1;
(statearr_20651_20713[(1)] = (15));

} else {
var statearr_20652_20714 = state_20631__$1;
(statearr_20652_20714[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (16))){
var inst_20611 = (state_20631[(11)]);
var state_20631__$1 = state_20631;
var statearr_20653_20715 = state_20631__$1;
(statearr_20653_20715[(2)] = inst_20611);

(statearr_20653_20715[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (10))){
var inst_20603 = (state_20631[(2)]);
var state_20631__$1 = state_20631;
var statearr_20654_20716 = state_20631__$1;
(statearr_20654_20716[(2)] = inst_20603);

(statearr_20654_20716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (18))){
var inst_20614 = (state_20631[(2)]);
var state_20631__$1 = state_20631;
var statearr_20655_20717 = state_20631__$1;
(statearr_20655_20717[(2)] = inst_20614);

(statearr_20655_20717[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20632 === (8))){
var inst_20600 = cljs.core.async.close_BANG_.call(null,to);
var state_20631__$1 = state_20631;
var statearr_20656_20718 = state_20631__$1;
(statearr_20656_20718[(2)] = inst_20600);

(statearr_20656_20718[(1)] = (10));


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
});})(c__18796__auto__,jobs,results,process,async))
;
return ((function (switch__18775__auto__,c__18796__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____0 = (function (){
var statearr_20660 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20660[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__);

(statearr_20660[(1)] = (1));

return statearr_20660;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____1 = (function (state_20631){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_20631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e20661){if((e20661 instanceof Object)){
var ex__18779__auto__ = e20661;
var statearr_20662_20719 = state_20631;
(statearr_20662_20719[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20720 = state_20631;
state_20631 = G__20720;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__ = function(state_20631){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____1.call(this,state_20631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18776__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto__,jobs,results,process,async))
})();
var state__18798__auto__ = (function (){var statearr_20663 = f__18797__auto__.call(null);
(statearr_20663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto__);

return statearr_20663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto__,jobs,results,process,async))
);

return c__18796__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args20721 = [];
var len__17829__auto___20724 = arguments.length;
var i__17830__auto___20725 = (0);
while(true){
if((i__17830__auto___20725 < len__17829__auto___20724)){
args20721.push((arguments[i__17830__auto___20725]));

var G__20726 = (i__17830__auto___20725 + (1));
i__17830__auto___20725 = G__20726;
continue;
} else {
}
break;
}

var G__20723 = args20721.length;
switch (G__20723) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20721.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args20728 = [];
var len__17829__auto___20731 = arguments.length;
var i__17830__auto___20732 = (0);
while(true){
if((i__17830__auto___20732 < len__17829__auto___20731)){
args20728.push((arguments[i__17830__auto___20732]));

var G__20733 = (i__17830__auto___20732 + (1));
i__17830__auto___20732 = G__20733;
continue;
} else {
}
break;
}

var G__20730 = args20728.length;
switch (G__20730) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20728.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args20735 = [];
var len__17829__auto___20788 = arguments.length;
var i__17830__auto___20789 = (0);
while(true){
if((i__17830__auto___20789 < len__17829__auto___20788)){
args20735.push((arguments[i__17830__auto___20789]));

var G__20790 = (i__17830__auto___20789 + (1));
i__17830__auto___20789 = G__20790;
continue;
} else {
}
break;
}

var G__20737 = args20735.length;
switch (G__20737) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20735.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18796__auto___20792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___20792,tc,fc){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___20792,tc,fc){
return (function (state_20763){
var state_val_20764 = (state_20763[(1)]);
if((state_val_20764 === (7))){
var inst_20759 = (state_20763[(2)]);
var state_20763__$1 = state_20763;
var statearr_20765_20793 = state_20763__$1;
(statearr_20765_20793[(2)] = inst_20759);

(statearr_20765_20793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20764 === (1))){
var state_20763__$1 = state_20763;
var statearr_20766_20794 = state_20763__$1;
(statearr_20766_20794[(2)] = null);

(statearr_20766_20794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20764 === (4))){
var inst_20740 = (state_20763[(7)]);
var inst_20740__$1 = (state_20763[(2)]);
var inst_20741 = (inst_20740__$1 == null);
var state_20763__$1 = (function (){var statearr_20767 = state_20763;
(statearr_20767[(7)] = inst_20740__$1);

return statearr_20767;
})();
if(cljs.core.truth_(inst_20741)){
var statearr_20768_20795 = state_20763__$1;
(statearr_20768_20795[(1)] = (5));

} else {
var statearr_20769_20796 = state_20763__$1;
(statearr_20769_20796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20764 === (13))){
var state_20763__$1 = state_20763;
var statearr_20770_20797 = state_20763__$1;
(statearr_20770_20797[(2)] = null);

(statearr_20770_20797[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20764 === (6))){
var inst_20740 = (state_20763[(7)]);
var inst_20746 = p.call(null,inst_20740);
var state_20763__$1 = state_20763;
if(cljs.core.truth_(inst_20746)){
var statearr_20771_20798 = state_20763__$1;
(statearr_20771_20798[(1)] = (9));

} else {
var statearr_20772_20799 = state_20763__$1;
(statearr_20772_20799[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20764 === (3))){
var inst_20761 = (state_20763[(2)]);
var state_20763__$1 = state_20763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20763__$1,inst_20761);
} else {
if((state_val_20764 === (12))){
var state_20763__$1 = state_20763;
var statearr_20773_20800 = state_20763__$1;
(statearr_20773_20800[(2)] = null);

(statearr_20773_20800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20764 === (2))){
var state_20763__$1 = state_20763;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20763__$1,(4),ch);
} else {
if((state_val_20764 === (11))){
var inst_20740 = (state_20763[(7)]);
var inst_20750 = (state_20763[(2)]);
var state_20763__$1 = state_20763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20763__$1,(8),inst_20750,inst_20740);
} else {
if((state_val_20764 === (9))){
var state_20763__$1 = state_20763;
var statearr_20774_20801 = state_20763__$1;
(statearr_20774_20801[(2)] = tc);

(statearr_20774_20801[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20764 === (5))){
var inst_20743 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20744 = cljs.core.async.close_BANG_.call(null,fc);
var state_20763__$1 = (function (){var statearr_20775 = state_20763;
(statearr_20775[(8)] = inst_20743);

return statearr_20775;
})();
var statearr_20776_20802 = state_20763__$1;
(statearr_20776_20802[(2)] = inst_20744);

(statearr_20776_20802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20764 === (14))){
var inst_20757 = (state_20763[(2)]);
var state_20763__$1 = state_20763;
var statearr_20777_20803 = state_20763__$1;
(statearr_20777_20803[(2)] = inst_20757);

(statearr_20777_20803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20764 === (10))){
var state_20763__$1 = state_20763;
var statearr_20778_20804 = state_20763__$1;
(statearr_20778_20804[(2)] = fc);

(statearr_20778_20804[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20764 === (8))){
var inst_20752 = (state_20763[(2)]);
var state_20763__$1 = state_20763;
if(cljs.core.truth_(inst_20752)){
var statearr_20779_20805 = state_20763__$1;
(statearr_20779_20805[(1)] = (12));

} else {
var statearr_20780_20806 = state_20763__$1;
(statearr_20780_20806[(1)] = (13));

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
});})(c__18796__auto___20792,tc,fc))
;
return ((function (switch__18775__auto__,c__18796__auto___20792,tc,fc){
return (function() {
var cljs$core$async$state_machine__18776__auto__ = null;
var cljs$core$async$state_machine__18776__auto____0 = (function (){
var statearr_20784 = [null,null,null,null,null,null,null,null,null];
(statearr_20784[(0)] = cljs$core$async$state_machine__18776__auto__);

(statearr_20784[(1)] = (1));

return statearr_20784;
});
var cljs$core$async$state_machine__18776__auto____1 = (function (state_20763){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_20763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e20785){if((e20785 instanceof Object)){
var ex__18779__auto__ = e20785;
var statearr_20786_20807 = state_20763;
(statearr_20786_20807[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20808 = state_20763;
state_20763 = G__20808;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$state_machine__18776__auto__ = function(state_20763){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18776__auto____1.call(this,state_20763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18776__auto____0;
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18776__auto____1;
return cljs$core$async$state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___20792,tc,fc))
})();
var state__18798__auto__ = (function (){var statearr_20787 = f__18797__auto__.call(null);
(statearr_20787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___20792);

return statearr_20787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___20792,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto__){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto__){
return (function (state_20872){
var state_val_20873 = (state_20872[(1)]);
if((state_val_20873 === (7))){
var inst_20868 = (state_20872[(2)]);
var state_20872__$1 = state_20872;
var statearr_20874_20895 = state_20872__$1;
(statearr_20874_20895[(2)] = inst_20868);

(statearr_20874_20895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20873 === (1))){
var inst_20852 = init;
var state_20872__$1 = (function (){var statearr_20875 = state_20872;
(statearr_20875[(7)] = inst_20852);

return statearr_20875;
})();
var statearr_20876_20896 = state_20872__$1;
(statearr_20876_20896[(2)] = null);

(statearr_20876_20896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20873 === (4))){
var inst_20855 = (state_20872[(8)]);
var inst_20855__$1 = (state_20872[(2)]);
var inst_20856 = (inst_20855__$1 == null);
var state_20872__$1 = (function (){var statearr_20877 = state_20872;
(statearr_20877[(8)] = inst_20855__$1);

return statearr_20877;
})();
if(cljs.core.truth_(inst_20856)){
var statearr_20878_20897 = state_20872__$1;
(statearr_20878_20897[(1)] = (5));

} else {
var statearr_20879_20898 = state_20872__$1;
(statearr_20879_20898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20873 === (6))){
var inst_20859 = (state_20872[(9)]);
var inst_20855 = (state_20872[(8)]);
var inst_20852 = (state_20872[(7)]);
var inst_20859__$1 = f.call(null,inst_20852,inst_20855);
var inst_20860 = cljs.core.reduced_QMARK_.call(null,inst_20859__$1);
var state_20872__$1 = (function (){var statearr_20880 = state_20872;
(statearr_20880[(9)] = inst_20859__$1);

return statearr_20880;
})();
if(inst_20860){
var statearr_20881_20899 = state_20872__$1;
(statearr_20881_20899[(1)] = (8));

} else {
var statearr_20882_20900 = state_20872__$1;
(statearr_20882_20900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20873 === (3))){
var inst_20870 = (state_20872[(2)]);
var state_20872__$1 = state_20872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20872__$1,inst_20870);
} else {
if((state_val_20873 === (2))){
var state_20872__$1 = state_20872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20872__$1,(4),ch);
} else {
if((state_val_20873 === (9))){
var inst_20859 = (state_20872[(9)]);
var inst_20852 = inst_20859;
var state_20872__$1 = (function (){var statearr_20883 = state_20872;
(statearr_20883[(7)] = inst_20852);

return statearr_20883;
})();
var statearr_20884_20901 = state_20872__$1;
(statearr_20884_20901[(2)] = null);

(statearr_20884_20901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20873 === (5))){
var inst_20852 = (state_20872[(7)]);
var state_20872__$1 = state_20872;
var statearr_20885_20902 = state_20872__$1;
(statearr_20885_20902[(2)] = inst_20852);

(statearr_20885_20902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20873 === (10))){
var inst_20866 = (state_20872[(2)]);
var state_20872__$1 = state_20872;
var statearr_20886_20903 = state_20872__$1;
(statearr_20886_20903[(2)] = inst_20866);

(statearr_20886_20903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20873 === (8))){
var inst_20859 = (state_20872[(9)]);
var inst_20862 = cljs.core.deref.call(null,inst_20859);
var state_20872__$1 = state_20872;
var statearr_20887_20904 = state_20872__$1;
(statearr_20887_20904[(2)] = inst_20862);

(statearr_20887_20904[(1)] = (10));


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
});})(c__18796__auto__))
;
return ((function (switch__18775__auto__,c__18796__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18776__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18776__auto____0 = (function (){
var statearr_20891 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20891[(0)] = cljs$core$async$reduce_$_state_machine__18776__auto__);

(statearr_20891[(1)] = (1));

return statearr_20891;
});
var cljs$core$async$reduce_$_state_machine__18776__auto____1 = (function (state_20872){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_20872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e20892){if((e20892 instanceof Object)){
var ex__18779__auto__ = e20892;
var statearr_20893_20905 = state_20872;
(statearr_20893_20905[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20906 = state_20872;
state_20872 = G__20906;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18776__auto__ = function(state_20872){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18776__auto____1.call(this,state_20872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18776__auto____0;
cljs$core$async$reduce_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18776__auto____1;
return cljs$core$async$reduce_$_state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto__))
})();
var state__18798__auto__ = (function (){var statearr_20894 = f__18797__auto__.call(null);
(statearr_20894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto__);

return statearr_20894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto__))
);

return c__18796__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args20907 = [];
var len__17829__auto___20959 = arguments.length;
var i__17830__auto___20960 = (0);
while(true){
if((i__17830__auto___20960 < len__17829__auto___20959)){
args20907.push((arguments[i__17830__auto___20960]));

var G__20961 = (i__17830__auto___20960 + (1));
i__17830__auto___20960 = G__20961;
continue;
} else {
}
break;
}

var G__20909 = args20907.length;
switch (G__20909) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20907.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto__){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto__){
return (function (state_20934){
var state_val_20935 = (state_20934[(1)]);
if((state_val_20935 === (7))){
var inst_20916 = (state_20934[(2)]);
var state_20934__$1 = state_20934;
var statearr_20936_20963 = state_20934__$1;
(statearr_20936_20963[(2)] = inst_20916);

(statearr_20936_20963[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20935 === (1))){
var inst_20910 = cljs.core.seq.call(null,coll);
var inst_20911 = inst_20910;
var state_20934__$1 = (function (){var statearr_20937 = state_20934;
(statearr_20937[(7)] = inst_20911);

return statearr_20937;
})();
var statearr_20938_20964 = state_20934__$1;
(statearr_20938_20964[(2)] = null);

(statearr_20938_20964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20935 === (4))){
var inst_20911 = (state_20934[(7)]);
var inst_20914 = cljs.core.first.call(null,inst_20911);
var state_20934__$1 = state_20934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20934__$1,(7),ch,inst_20914);
} else {
if((state_val_20935 === (13))){
var inst_20928 = (state_20934[(2)]);
var state_20934__$1 = state_20934;
var statearr_20939_20965 = state_20934__$1;
(statearr_20939_20965[(2)] = inst_20928);

(statearr_20939_20965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20935 === (6))){
var inst_20919 = (state_20934[(2)]);
var state_20934__$1 = state_20934;
if(cljs.core.truth_(inst_20919)){
var statearr_20940_20966 = state_20934__$1;
(statearr_20940_20966[(1)] = (8));

} else {
var statearr_20941_20967 = state_20934__$1;
(statearr_20941_20967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20935 === (3))){
var inst_20932 = (state_20934[(2)]);
var state_20934__$1 = state_20934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20934__$1,inst_20932);
} else {
if((state_val_20935 === (12))){
var state_20934__$1 = state_20934;
var statearr_20942_20968 = state_20934__$1;
(statearr_20942_20968[(2)] = null);

(statearr_20942_20968[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20935 === (2))){
var inst_20911 = (state_20934[(7)]);
var state_20934__$1 = state_20934;
if(cljs.core.truth_(inst_20911)){
var statearr_20943_20969 = state_20934__$1;
(statearr_20943_20969[(1)] = (4));

} else {
var statearr_20944_20970 = state_20934__$1;
(statearr_20944_20970[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20935 === (11))){
var inst_20925 = cljs.core.async.close_BANG_.call(null,ch);
var state_20934__$1 = state_20934;
var statearr_20945_20971 = state_20934__$1;
(statearr_20945_20971[(2)] = inst_20925);

(statearr_20945_20971[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20935 === (9))){
var state_20934__$1 = state_20934;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20946_20972 = state_20934__$1;
(statearr_20946_20972[(1)] = (11));

} else {
var statearr_20947_20973 = state_20934__$1;
(statearr_20947_20973[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20935 === (5))){
var inst_20911 = (state_20934[(7)]);
var state_20934__$1 = state_20934;
var statearr_20948_20974 = state_20934__$1;
(statearr_20948_20974[(2)] = inst_20911);

(statearr_20948_20974[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20935 === (10))){
var inst_20930 = (state_20934[(2)]);
var state_20934__$1 = state_20934;
var statearr_20949_20975 = state_20934__$1;
(statearr_20949_20975[(2)] = inst_20930);

(statearr_20949_20975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20935 === (8))){
var inst_20911 = (state_20934[(7)]);
var inst_20921 = cljs.core.next.call(null,inst_20911);
var inst_20911__$1 = inst_20921;
var state_20934__$1 = (function (){var statearr_20950 = state_20934;
(statearr_20950[(7)] = inst_20911__$1);

return statearr_20950;
})();
var statearr_20951_20976 = state_20934__$1;
(statearr_20951_20976[(2)] = null);

(statearr_20951_20976[(1)] = (2));


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
});})(c__18796__auto__))
;
return ((function (switch__18775__auto__,c__18796__auto__){
return (function() {
var cljs$core$async$state_machine__18776__auto__ = null;
var cljs$core$async$state_machine__18776__auto____0 = (function (){
var statearr_20955 = [null,null,null,null,null,null,null,null];
(statearr_20955[(0)] = cljs$core$async$state_machine__18776__auto__);

(statearr_20955[(1)] = (1));

return statearr_20955;
});
var cljs$core$async$state_machine__18776__auto____1 = (function (state_20934){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_20934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e20956){if((e20956 instanceof Object)){
var ex__18779__auto__ = e20956;
var statearr_20957_20977 = state_20934;
(statearr_20957_20977[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20978 = state_20934;
state_20934 = G__20978;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$state_machine__18776__auto__ = function(state_20934){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18776__auto____1.call(this,state_20934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18776__auto____0;
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18776__auto____1;
return cljs$core$async$state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto__))
})();
var state__18798__auto__ = (function (){var statearr_20958 = f__18797__auto__.call(null);
(statearr_20958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto__);

return statearr_20958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto__))
);

return c__18796__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17426__auto__ = (((_ == null))?null:_);
var m__17427__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,_);
} else {
var m__17427__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17427__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m);
} else {
var m__17427__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21200 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21200 = (function (mult,ch,cs,meta21201){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21201 = meta21201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21202,meta21201__$1){
var self__ = this;
var _21202__$1 = this;
return (new cljs.core.async.t_cljs$core$async21200(self__.mult,self__.ch,self__.cs,meta21201__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21200.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21202){
var self__ = this;
var _21202__$1 = this;
return self__.meta21201;
});})(cs))
;

cljs.core.async.t_cljs$core$async21200.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21200.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21200.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21200.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21200.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21200.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21200.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21201","meta21201",1055083067,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21200.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21200.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21200";

cljs.core.async.t_cljs$core$async21200.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async21200");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21200 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21200(mult__$1,ch__$1,cs__$1,meta21201){
return (new cljs.core.async.t_cljs$core$async21200(mult__$1,ch__$1,cs__$1,meta21201));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21200(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18796__auto___21421 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___21421,cs,m,dchan,dctr,done){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___21421,cs,m,dchan,dctr,done){
return (function (state_21333){
var state_val_21334 = (state_21333[(1)]);
if((state_val_21334 === (7))){
var inst_21329 = (state_21333[(2)]);
var state_21333__$1 = state_21333;
var statearr_21335_21422 = state_21333__$1;
(statearr_21335_21422[(2)] = inst_21329);

(statearr_21335_21422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (20))){
var inst_21234 = (state_21333[(7)]);
var inst_21244 = cljs.core.first.call(null,inst_21234);
var inst_21245 = cljs.core.nth.call(null,inst_21244,(0),null);
var inst_21246 = cljs.core.nth.call(null,inst_21244,(1),null);
var state_21333__$1 = (function (){var statearr_21336 = state_21333;
(statearr_21336[(8)] = inst_21245);

return statearr_21336;
})();
if(cljs.core.truth_(inst_21246)){
var statearr_21337_21423 = state_21333__$1;
(statearr_21337_21423[(1)] = (22));

} else {
var statearr_21338_21424 = state_21333__$1;
(statearr_21338_21424[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (27))){
var inst_21205 = (state_21333[(9)]);
var inst_21276 = (state_21333[(10)]);
var inst_21281 = (state_21333[(11)]);
var inst_21274 = (state_21333[(12)]);
var inst_21281__$1 = cljs.core._nth.call(null,inst_21274,inst_21276);
var inst_21282 = cljs.core.async.put_BANG_.call(null,inst_21281__$1,inst_21205,done);
var state_21333__$1 = (function (){var statearr_21339 = state_21333;
(statearr_21339[(11)] = inst_21281__$1);

return statearr_21339;
})();
if(cljs.core.truth_(inst_21282)){
var statearr_21340_21425 = state_21333__$1;
(statearr_21340_21425[(1)] = (30));

} else {
var statearr_21341_21426 = state_21333__$1;
(statearr_21341_21426[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (1))){
var state_21333__$1 = state_21333;
var statearr_21342_21427 = state_21333__$1;
(statearr_21342_21427[(2)] = null);

(statearr_21342_21427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (24))){
var inst_21234 = (state_21333[(7)]);
var inst_21251 = (state_21333[(2)]);
var inst_21252 = cljs.core.next.call(null,inst_21234);
var inst_21214 = inst_21252;
var inst_21215 = null;
var inst_21216 = (0);
var inst_21217 = (0);
var state_21333__$1 = (function (){var statearr_21343 = state_21333;
(statearr_21343[(13)] = inst_21214);

(statearr_21343[(14)] = inst_21251);

(statearr_21343[(15)] = inst_21216);

(statearr_21343[(16)] = inst_21215);

(statearr_21343[(17)] = inst_21217);

return statearr_21343;
})();
var statearr_21344_21428 = state_21333__$1;
(statearr_21344_21428[(2)] = null);

(statearr_21344_21428[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (39))){
var state_21333__$1 = state_21333;
var statearr_21348_21429 = state_21333__$1;
(statearr_21348_21429[(2)] = null);

(statearr_21348_21429[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (4))){
var inst_21205 = (state_21333[(9)]);
var inst_21205__$1 = (state_21333[(2)]);
var inst_21206 = (inst_21205__$1 == null);
var state_21333__$1 = (function (){var statearr_21349 = state_21333;
(statearr_21349[(9)] = inst_21205__$1);

return statearr_21349;
})();
if(cljs.core.truth_(inst_21206)){
var statearr_21350_21430 = state_21333__$1;
(statearr_21350_21430[(1)] = (5));

} else {
var statearr_21351_21431 = state_21333__$1;
(statearr_21351_21431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (15))){
var inst_21214 = (state_21333[(13)]);
var inst_21216 = (state_21333[(15)]);
var inst_21215 = (state_21333[(16)]);
var inst_21217 = (state_21333[(17)]);
var inst_21230 = (state_21333[(2)]);
var inst_21231 = (inst_21217 + (1));
var tmp21345 = inst_21214;
var tmp21346 = inst_21216;
var tmp21347 = inst_21215;
var inst_21214__$1 = tmp21345;
var inst_21215__$1 = tmp21347;
var inst_21216__$1 = tmp21346;
var inst_21217__$1 = inst_21231;
var state_21333__$1 = (function (){var statearr_21352 = state_21333;
(statearr_21352[(13)] = inst_21214__$1);

(statearr_21352[(15)] = inst_21216__$1);

(statearr_21352[(16)] = inst_21215__$1);

(statearr_21352[(17)] = inst_21217__$1);

(statearr_21352[(18)] = inst_21230);

return statearr_21352;
})();
var statearr_21353_21432 = state_21333__$1;
(statearr_21353_21432[(2)] = null);

(statearr_21353_21432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (21))){
var inst_21255 = (state_21333[(2)]);
var state_21333__$1 = state_21333;
var statearr_21357_21433 = state_21333__$1;
(statearr_21357_21433[(2)] = inst_21255);

(statearr_21357_21433[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (31))){
var inst_21281 = (state_21333[(11)]);
var inst_21285 = done.call(null,null);
var inst_21286 = cljs.core.async.untap_STAR_.call(null,m,inst_21281);
var state_21333__$1 = (function (){var statearr_21358 = state_21333;
(statearr_21358[(19)] = inst_21285);

return statearr_21358;
})();
var statearr_21359_21434 = state_21333__$1;
(statearr_21359_21434[(2)] = inst_21286);

(statearr_21359_21434[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (32))){
var inst_21273 = (state_21333[(20)]);
var inst_21276 = (state_21333[(10)]);
var inst_21275 = (state_21333[(21)]);
var inst_21274 = (state_21333[(12)]);
var inst_21288 = (state_21333[(2)]);
var inst_21289 = (inst_21276 + (1));
var tmp21354 = inst_21273;
var tmp21355 = inst_21275;
var tmp21356 = inst_21274;
var inst_21273__$1 = tmp21354;
var inst_21274__$1 = tmp21356;
var inst_21275__$1 = tmp21355;
var inst_21276__$1 = inst_21289;
var state_21333__$1 = (function (){var statearr_21360 = state_21333;
(statearr_21360[(20)] = inst_21273__$1);

(statearr_21360[(10)] = inst_21276__$1);

(statearr_21360[(21)] = inst_21275__$1);

(statearr_21360[(22)] = inst_21288);

(statearr_21360[(12)] = inst_21274__$1);

return statearr_21360;
})();
var statearr_21361_21435 = state_21333__$1;
(statearr_21361_21435[(2)] = null);

(statearr_21361_21435[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (40))){
var inst_21301 = (state_21333[(23)]);
var inst_21305 = done.call(null,null);
var inst_21306 = cljs.core.async.untap_STAR_.call(null,m,inst_21301);
var state_21333__$1 = (function (){var statearr_21362 = state_21333;
(statearr_21362[(24)] = inst_21305);

return statearr_21362;
})();
var statearr_21363_21436 = state_21333__$1;
(statearr_21363_21436[(2)] = inst_21306);

(statearr_21363_21436[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (33))){
var inst_21292 = (state_21333[(25)]);
var inst_21294 = cljs.core.chunked_seq_QMARK_.call(null,inst_21292);
var state_21333__$1 = state_21333;
if(inst_21294){
var statearr_21364_21437 = state_21333__$1;
(statearr_21364_21437[(1)] = (36));

} else {
var statearr_21365_21438 = state_21333__$1;
(statearr_21365_21438[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (13))){
var inst_21224 = (state_21333[(26)]);
var inst_21227 = cljs.core.async.close_BANG_.call(null,inst_21224);
var state_21333__$1 = state_21333;
var statearr_21366_21439 = state_21333__$1;
(statearr_21366_21439[(2)] = inst_21227);

(statearr_21366_21439[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (22))){
var inst_21245 = (state_21333[(8)]);
var inst_21248 = cljs.core.async.close_BANG_.call(null,inst_21245);
var state_21333__$1 = state_21333;
var statearr_21367_21440 = state_21333__$1;
(statearr_21367_21440[(2)] = inst_21248);

(statearr_21367_21440[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (36))){
var inst_21292 = (state_21333[(25)]);
var inst_21296 = cljs.core.chunk_first.call(null,inst_21292);
var inst_21297 = cljs.core.chunk_rest.call(null,inst_21292);
var inst_21298 = cljs.core.count.call(null,inst_21296);
var inst_21273 = inst_21297;
var inst_21274 = inst_21296;
var inst_21275 = inst_21298;
var inst_21276 = (0);
var state_21333__$1 = (function (){var statearr_21368 = state_21333;
(statearr_21368[(20)] = inst_21273);

(statearr_21368[(10)] = inst_21276);

(statearr_21368[(21)] = inst_21275);

(statearr_21368[(12)] = inst_21274);

return statearr_21368;
})();
var statearr_21369_21441 = state_21333__$1;
(statearr_21369_21441[(2)] = null);

(statearr_21369_21441[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (41))){
var inst_21292 = (state_21333[(25)]);
var inst_21308 = (state_21333[(2)]);
var inst_21309 = cljs.core.next.call(null,inst_21292);
var inst_21273 = inst_21309;
var inst_21274 = null;
var inst_21275 = (0);
var inst_21276 = (0);
var state_21333__$1 = (function (){var statearr_21370 = state_21333;
(statearr_21370[(20)] = inst_21273);

(statearr_21370[(10)] = inst_21276);

(statearr_21370[(21)] = inst_21275);

(statearr_21370[(12)] = inst_21274);

(statearr_21370[(27)] = inst_21308);

return statearr_21370;
})();
var statearr_21371_21442 = state_21333__$1;
(statearr_21371_21442[(2)] = null);

(statearr_21371_21442[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (43))){
var state_21333__$1 = state_21333;
var statearr_21372_21443 = state_21333__$1;
(statearr_21372_21443[(2)] = null);

(statearr_21372_21443[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (29))){
var inst_21317 = (state_21333[(2)]);
var state_21333__$1 = state_21333;
var statearr_21373_21444 = state_21333__$1;
(statearr_21373_21444[(2)] = inst_21317);

(statearr_21373_21444[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (44))){
var inst_21326 = (state_21333[(2)]);
var state_21333__$1 = (function (){var statearr_21374 = state_21333;
(statearr_21374[(28)] = inst_21326);

return statearr_21374;
})();
var statearr_21375_21445 = state_21333__$1;
(statearr_21375_21445[(2)] = null);

(statearr_21375_21445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (6))){
var inst_21265 = (state_21333[(29)]);
var inst_21264 = cljs.core.deref.call(null,cs);
var inst_21265__$1 = cljs.core.keys.call(null,inst_21264);
var inst_21266 = cljs.core.count.call(null,inst_21265__$1);
var inst_21267 = cljs.core.reset_BANG_.call(null,dctr,inst_21266);
var inst_21272 = cljs.core.seq.call(null,inst_21265__$1);
var inst_21273 = inst_21272;
var inst_21274 = null;
var inst_21275 = (0);
var inst_21276 = (0);
var state_21333__$1 = (function (){var statearr_21376 = state_21333;
(statearr_21376[(20)] = inst_21273);

(statearr_21376[(29)] = inst_21265__$1);

(statearr_21376[(10)] = inst_21276);

(statearr_21376[(21)] = inst_21275);

(statearr_21376[(30)] = inst_21267);

(statearr_21376[(12)] = inst_21274);

return statearr_21376;
})();
var statearr_21377_21446 = state_21333__$1;
(statearr_21377_21446[(2)] = null);

(statearr_21377_21446[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (28))){
var inst_21273 = (state_21333[(20)]);
var inst_21292 = (state_21333[(25)]);
var inst_21292__$1 = cljs.core.seq.call(null,inst_21273);
var state_21333__$1 = (function (){var statearr_21378 = state_21333;
(statearr_21378[(25)] = inst_21292__$1);

return statearr_21378;
})();
if(inst_21292__$1){
var statearr_21379_21447 = state_21333__$1;
(statearr_21379_21447[(1)] = (33));

} else {
var statearr_21380_21448 = state_21333__$1;
(statearr_21380_21448[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (25))){
var inst_21276 = (state_21333[(10)]);
var inst_21275 = (state_21333[(21)]);
var inst_21278 = (inst_21276 < inst_21275);
var inst_21279 = inst_21278;
var state_21333__$1 = state_21333;
if(cljs.core.truth_(inst_21279)){
var statearr_21381_21449 = state_21333__$1;
(statearr_21381_21449[(1)] = (27));

} else {
var statearr_21382_21450 = state_21333__$1;
(statearr_21382_21450[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (34))){
var state_21333__$1 = state_21333;
var statearr_21383_21451 = state_21333__$1;
(statearr_21383_21451[(2)] = null);

(statearr_21383_21451[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (17))){
var state_21333__$1 = state_21333;
var statearr_21384_21452 = state_21333__$1;
(statearr_21384_21452[(2)] = null);

(statearr_21384_21452[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (3))){
var inst_21331 = (state_21333[(2)]);
var state_21333__$1 = state_21333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21333__$1,inst_21331);
} else {
if((state_val_21334 === (12))){
var inst_21260 = (state_21333[(2)]);
var state_21333__$1 = state_21333;
var statearr_21385_21453 = state_21333__$1;
(statearr_21385_21453[(2)] = inst_21260);

(statearr_21385_21453[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (2))){
var state_21333__$1 = state_21333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21333__$1,(4),ch);
} else {
if((state_val_21334 === (23))){
var state_21333__$1 = state_21333;
var statearr_21386_21454 = state_21333__$1;
(statearr_21386_21454[(2)] = null);

(statearr_21386_21454[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (35))){
var inst_21315 = (state_21333[(2)]);
var state_21333__$1 = state_21333;
var statearr_21387_21455 = state_21333__$1;
(statearr_21387_21455[(2)] = inst_21315);

(statearr_21387_21455[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (19))){
var inst_21234 = (state_21333[(7)]);
var inst_21238 = cljs.core.chunk_first.call(null,inst_21234);
var inst_21239 = cljs.core.chunk_rest.call(null,inst_21234);
var inst_21240 = cljs.core.count.call(null,inst_21238);
var inst_21214 = inst_21239;
var inst_21215 = inst_21238;
var inst_21216 = inst_21240;
var inst_21217 = (0);
var state_21333__$1 = (function (){var statearr_21388 = state_21333;
(statearr_21388[(13)] = inst_21214);

(statearr_21388[(15)] = inst_21216);

(statearr_21388[(16)] = inst_21215);

(statearr_21388[(17)] = inst_21217);

return statearr_21388;
})();
var statearr_21389_21456 = state_21333__$1;
(statearr_21389_21456[(2)] = null);

(statearr_21389_21456[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (11))){
var inst_21214 = (state_21333[(13)]);
var inst_21234 = (state_21333[(7)]);
var inst_21234__$1 = cljs.core.seq.call(null,inst_21214);
var state_21333__$1 = (function (){var statearr_21390 = state_21333;
(statearr_21390[(7)] = inst_21234__$1);

return statearr_21390;
})();
if(inst_21234__$1){
var statearr_21391_21457 = state_21333__$1;
(statearr_21391_21457[(1)] = (16));

} else {
var statearr_21392_21458 = state_21333__$1;
(statearr_21392_21458[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (9))){
var inst_21262 = (state_21333[(2)]);
var state_21333__$1 = state_21333;
var statearr_21393_21459 = state_21333__$1;
(statearr_21393_21459[(2)] = inst_21262);

(statearr_21393_21459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (5))){
var inst_21212 = cljs.core.deref.call(null,cs);
var inst_21213 = cljs.core.seq.call(null,inst_21212);
var inst_21214 = inst_21213;
var inst_21215 = null;
var inst_21216 = (0);
var inst_21217 = (0);
var state_21333__$1 = (function (){var statearr_21394 = state_21333;
(statearr_21394[(13)] = inst_21214);

(statearr_21394[(15)] = inst_21216);

(statearr_21394[(16)] = inst_21215);

(statearr_21394[(17)] = inst_21217);

return statearr_21394;
})();
var statearr_21395_21460 = state_21333__$1;
(statearr_21395_21460[(2)] = null);

(statearr_21395_21460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (14))){
var state_21333__$1 = state_21333;
var statearr_21396_21461 = state_21333__$1;
(statearr_21396_21461[(2)] = null);

(statearr_21396_21461[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (45))){
var inst_21323 = (state_21333[(2)]);
var state_21333__$1 = state_21333;
var statearr_21397_21462 = state_21333__$1;
(statearr_21397_21462[(2)] = inst_21323);

(statearr_21397_21462[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (26))){
var inst_21265 = (state_21333[(29)]);
var inst_21319 = (state_21333[(2)]);
var inst_21320 = cljs.core.seq.call(null,inst_21265);
var state_21333__$1 = (function (){var statearr_21398 = state_21333;
(statearr_21398[(31)] = inst_21319);

return statearr_21398;
})();
if(inst_21320){
var statearr_21399_21463 = state_21333__$1;
(statearr_21399_21463[(1)] = (42));

} else {
var statearr_21400_21464 = state_21333__$1;
(statearr_21400_21464[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (16))){
var inst_21234 = (state_21333[(7)]);
var inst_21236 = cljs.core.chunked_seq_QMARK_.call(null,inst_21234);
var state_21333__$1 = state_21333;
if(inst_21236){
var statearr_21401_21465 = state_21333__$1;
(statearr_21401_21465[(1)] = (19));

} else {
var statearr_21402_21466 = state_21333__$1;
(statearr_21402_21466[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (38))){
var inst_21312 = (state_21333[(2)]);
var state_21333__$1 = state_21333;
var statearr_21403_21467 = state_21333__$1;
(statearr_21403_21467[(2)] = inst_21312);

(statearr_21403_21467[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (30))){
var state_21333__$1 = state_21333;
var statearr_21404_21468 = state_21333__$1;
(statearr_21404_21468[(2)] = null);

(statearr_21404_21468[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (10))){
var inst_21215 = (state_21333[(16)]);
var inst_21217 = (state_21333[(17)]);
var inst_21223 = cljs.core._nth.call(null,inst_21215,inst_21217);
var inst_21224 = cljs.core.nth.call(null,inst_21223,(0),null);
var inst_21225 = cljs.core.nth.call(null,inst_21223,(1),null);
var state_21333__$1 = (function (){var statearr_21405 = state_21333;
(statearr_21405[(26)] = inst_21224);

return statearr_21405;
})();
if(cljs.core.truth_(inst_21225)){
var statearr_21406_21469 = state_21333__$1;
(statearr_21406_21469[(1)] = (13));

} else {
var statearr_21407_21470 = state_21333__$1;
(statearr_21407_21470[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (18))){
var inst_21258 = (state_21333[(2)]);
var state_21333__$1 = state_21333;
var statearr_21408_21471 = state_21333__$1;
(statearr_21408_21471[(2)] = inst_21258);

(statearr_21408_21471[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (42))){
var state_21333__$1 = state_21333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21333__$1,(45),dchan);
} else {
if((state_val_21334 === (37))){
var inst_21205 = (state_21333[(9)]);
var inst_21301 = (state_21333[(23)]);
var inst_21292 = (state_21333[(25)]);
var inst_21301__$1 = cljs.core.first.call(null,inst_21292);
var inst_21302 = cljs.core.async.put_BANG_.call(null,inst_21301__$1,inst_21205,done);
var state_21333__$1 = (function (){var statearr_21409 = state_21333;
(statearr_21409[(23)] = inst_21301__$1);

return statearr_21409;
})();
if(cljs.core.truth_(inst_21302)){
var statearr_21410_21472 = state_21333__$1;
(statearr_21410_21472[(1)] = (39));

} else {
var statearr_21411_21473 = state_21333__$1;
(statearr_21411_21473[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21334 === (8))){
var inst_21216 = (state_21333[(15)]);
var inst_21217 = (state_21333[(17)]);
var inst_21219 = (inst_21217 < inst_21216);
var inst_21220 = inst_21219;
var state_21333__$1 = state_21333;
if(cljs.core.truth_(inst_21220)){
var statearr_21412_21474 = state_21333__$1;
(statearr_21412_21474[(1)] = (10));

} else {
var statearr_21413_21475 = state_21333__$1;
(statearr_21413_21475[(1)] = (11));

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
});})(c__18796__auto___21421,cs,m,dchan,dctr,done))
;
return ((function (switch__18775__auto__,c__18796__auto___21421,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18776__auto__ = null;
var cljs$core$async$mult_$_state_machine__18776__auto____0 = (function (){
var statearr_21417 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21417[(0)] = cljs$core$async$mult_$_state_machine__18776__auto__);

(statearr_21417[(1)] = (1));

return statearr_21417;
});
var cljs$core$async$mult_$_state_machine__18776__auto____1 = (function (state_21333){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_21333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e21418){if((e21418 instanceof Object)){
var ex__18779__auto__ = e21418;
var statearr_21419_21476 = state_21333;
(statearr_21419_21476[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21477 = state_21333;
state_21333 = G__21477;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18776__auto__ = function(state_21333){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18776__auto____1.call(this,state_21333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18776__auto____0;
cljs$core$async$mult_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18776__auto____1;
return cljs$core$async$mult_$_state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___21421,cs,m,dchan,dctr,done))
})();
var state__18798__auto__ = (function (){var statearr_21420 = f__18797__auto__.call(null);
(statearr_21420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___21421);

return statearr_21420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___21421,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args21478 = [];
var len__17829__auto___21481 = arguments.length;
var i__17830__auto___21482 = (0);
while(true){
if((i__17830__auto___21482 < len__17829__auto___21481)){
args21478.push((arguments[i__17830__auto___21482]));

var G__21483 = (i__17830__auto___21482 + (1));
i__17830__auto___21482 = G__21483;
continue;
} else {
}
break;
}

var G__21480 = args21478.length;
switch (G__21480) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21478.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m);
} else {
var m__17427__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,state_map);
} else {
var m__17427__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,mode);
} else {
var m__17427__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17836__auto__ = [];
var len__17829__auto___21495 = arguments.length;
var i__17830__auto___21496 = (0);
while(true){
if((i__17830__auto___21496 < len__17829__auto___21495)){
args__17836__auto__.push((arguments[i__17830__auto___21496]));

var G__21497 = (i__17830__auto___21496 + (1));
i__17830__auto___21496 = G__21497;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((3) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17837__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21489){
var map__21490 = p__21489;
var map__21490__$1 = ((((!((map__21490 == null)))?((((map__21490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21490):map__21490);
var opts = map__21490__$1;
var statearr_21492_21498 = state;
(statearr_21492_21498[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__21490,map__21490__$1,opts){
return (function (val){
var statearr_21493_21499 = state;
(statearr_21493_21499[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21490,map__21490__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_21494_21500 = state;
(statearr_21494_21500[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21485){
var G__21486 = cljs.core.first.call(null,seq21485);
var seq21485__$1 = cljs.core.next.call(null,seq21485);
var G__21487 = cljs.core.first.call(null,seq21485__$1);
var seq21485__$2 = cljs.core.next.call(null,seq21485__$1);
var G__21488 = cljs.core.first.call(null,seq21485__$2);
var seq21485__$3 = cljs.core.next.call(null,seq21485__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21486,G__21487,G__21488,seq21485__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21664 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21664 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21665){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta21665 = meta21665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21666,meta21665__$1){
var self__ = this;
var _21666__$1 = this;
return (new cljs.core.async.t_cljs$core$async21664(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21665__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21664.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21666){
var self__ = this;
var _21666__$1 = this;
return self__.meta21665;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21664.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21664.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21664.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async21664.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21664.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21664.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21664.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21664.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21664.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21665","meta21665",-2143355308,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21664.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21664.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21664";

cljs.core.async.t_cljs$core$async21664.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async21664");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async21664 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21664(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21665){
return (new cljs.core.async.t_cljs$core$async21664(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21665));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21664(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18796__auto___21827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___21827,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___21827,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21764){
var state_val_21765 = (state_21764[(1)]);
if((state_val_21765 === (7))){
var inst_21682 = (state_21764[(2)]);
var state_21764__$1 = state_21764;
var statearr_21766_21828 = state_21764__$1;
(statearr_21766_21828[(2)] = inst_21682);

(statearr_21766_21828[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (20))){
var inst_21694 = (state_21764[(7)]);
var state_21764__$1 = state_21764;
var statearr_21767_21829 = state_21764__$1;
(statearr_21767_21829[(2)] = inst_21694);

(statearr_21767_21829[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (27))){
var state_21764__$1 = state_21764;
var statearr_21768_21830 = state_21764__$1;
(statearr_21768_21830[(2)] = null);

(statearr_21768_21830[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (1))){
var inst_21670 = (state_21764[(8)]);
var inst_21670__$1 = calc_state.call(null);
var inst_21672 = (inst_21670__$1 == null);
var inst_21673 = cljs.core.not.call(null,inst_21672);
var state_21764__$1 = (function (){var statearr_21769 = state_21764;
(statearr_21769[(8)] = inst_21670__$1);

return statearr_21769;
})();
if(inst_21673){
var statearr_21770_21831 = state_21764__$1;
(statearr_21770_21831[(1)] = (2));

} else {
var statearr_21771_21832 = state_21764__$1;
(statearr_21771_21832[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (24))){
var inst_21717 = (state_21764[(9)]);
var inst_21724 = (state_21764[(10)]);
var inst_21738 = (state_21764[(11)]);
var inst_21738__$1 = inst_21717.call(null,inst_21724);
var state_21764__$1 = (function (){var statearr_21772 = state_21764;
(statearr_21772[(11)] = inst_21738__$1);

return statearr_21772;
})();
if(cljs.core.truth_(inst_21738__$1)){
var statearr_21773_21833 = state_21764__$1;
(statearr_21773_21833[(1)] = (29));

} else {
var statearr_21774_21834 = state_21764__$1;
(statearr_21774_21834[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (4))){
var inst_21685 = (state_21764[(2)]);
var state_21764__$1 = state_21764;
if(cljs.core.truth_(inst_21685)){
var statearr_21775_21835 = state_21764__$1;
(statearr_21775_21835[(1)] = (8));

} else {
var statearr_21776_21836 = state_21764__$1;
(statearr_21776_21836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (15))){
var inst_21711 = (state_21764[(2)]);
var state_21764__$1 = state_21764;
if(cljs.core.truth_(inst_21711)){
var statearr_21777_21837 = state_21764__$1;
(statearr_21777_21837[(1)] = (19));

} else {
var statearr_21778_21838 = state_21764__$1;
(statearr_21778_21838[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (21))){
var inst_21716 = (state_21764[(12)]);
var inst_21716__$1 = (state_21764[(2)]);
var inst_21717 = cljs.core.get.call(null,inst_21716__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21718 = cljs.core.get.call(null,inst_21716__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21719 = cljs.core.get.call(null,inst_21716__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21764__$1 = (function (){var statearr_21779 = state_21764;
(statearr_21779[(9)] = inst_21717);

(statearr_21779[(12)] = inst_21716__$1);

(statearr_21779[(13)] = inst_21718);

return statearr_21779;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21764__$1,(22),inst_21719);
} else {
if((state_val_21765 === (31))){
var inst_21746 = (state_21764[(2)]);
var state_21764__$1 = state_21764;
if(cljs.core.truth_(inst_21746)){
var statearr_21780_21839 = state_21764__$1;
(statearr_21780_21839[(1)] = (32));

} else {
var statearr_21781_21840 = state_21764__$1;
(statearr_21781_21840[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (32))){
var inst_21723 = (state_21764[(14)]);
var state_21764__$1 = state_21764;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21764__$1,(35),out,inst_21723);
} else {
if((state_val_21765 === (33))){
var inst_21716 = (state_21764[(12)]);
var inst_21694 = inst_21716;
var state_21764__$1 = (function (){var statearr_21782 = state_21764;
(statearr_21782[(7)] = inst_21694);

return statearr_21782;
})();
var statearr_21783_21841 = state_21764__$1;
(statearr_21783_21841[(2)] = null);

(statearr_21783_21841[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (13))){
var inst_21694 = (state_21764[(7)]);
var inst_21701 = inst_21694.cljs$lang$protocol_mask$partition0$;
var inst_21702 = (inst_21701 & (64));
var inst_21703 = inst_21694.cljs$core$ISeq$;
var inst_21704 = (inst_21702) || (inst_21703);
var state_21764__$1 = state_21764;
if(cljs.core.truth_(inst_21704)){
var statearr_21784_21842 = state_21764__$1;
(statearr_21784_21842[(1)] = (16));

} else {
var statearr_21785_21843 = state_21764__$1;
(statearr_21785_21843[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (22))){
var inst_21724 = (state_21764[(10)]);
var inst_21723 = (state_21764[(14)]);
var inst_21722 = (state_21764[(2)]);
var inst_21723__$1 = cljs.core.nth.call(null,inst_21722,(0),null);
var inst_21724__$1 = cljs.core.nth.call(null,inst_21722,(1),null);
var inst_21725 = (inst_21723__$1 == null);
var inst_21726 = cljs.core._EQ_.call(null,inst_21724__$1,change);
var inst_21727 = (inst_21725) || (inst_21726);
var state_21764__$1 = (function (){var statearr_21786 = state_21764;
(statearr_21786[(10)] = inst_21724__$1);

(statearr_21786[(14)] = inst_21723__$1);

return statearr_21786;
})();
if(cljs.core.truth_(inst_21727)){
var statearr_21787_21844 = state_21764__$1;
(statearr_21787_21844[(1)] = (23));

} else {
var statearr_21788_21845 = state_21764__$1;
(statearr_21788_21845[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (36))){
var inst_21716 = (state_21764[(12)]);
var inst_21694 = inst_21716;
var state_21764__$1 = (function (){var statearr_21789 = state_21764;
(statearr_21789[(7)] = inst_21694);

return statearr_21789;
})();
var statearr_21790_21846 = state_21764__$1;
(statearr_21790_21846[(2)] = null);

(statearr_21790_21846[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (29))){
var inst_21738 = (state_21764[(11)]);
var state_21764__$1 = state_21764;
var statearr_21791_21847 = state_21764__$1;
(statearr_21791_21847[(2)] = inst_21738);

(statearr_21791_21847[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (6))){
var state_21764__$1 = state_21764;
var statearr_21792_21848 = state_21764__$1;
(statearr_21792_21848[(2)] = false);

(statearr_21792_21848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (28))){
var inst_21734 = (state_21764[(2)]);
var inst_21735 = calc_state.call(null);
var inst_21694 = inst_21735;
var state_21764__$1 = (function (){var statearr_21793 = state_21764;
(statearr_21793[(7)] = inst_21694);

(statearr_21793[(15)] = inst_21734);

return statearr_21793;
})();
var statearr_21794_21849 = state_21764__$1;
(statearr_21794_21849[(2)] = null);

(statearr_21794_21849[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (25))){
var inst_21760 = (state_21764[(2)]);
var state_21764__$1 = state_21764;
var statearr_21795_21850 = state_21764__$1;
(statearr_21795_21850[(2)] = inst_21760);

(statearr_21795_21850[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (34))){
var inst_21758 = (state_21764[(2)]);
var state_21764__$1 = state_21764;
var statearr_21796_21851 = state_21764__$1;
(statearr_21796_21851[(2)] = inst_21758);

(statearr_21796_21851[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (17))){
var state_21764__$1 = state_21764;
var statearr_21797_21852 = state_21764__$1;
(statearr_21797_21852[(2)] = false);

(statearr_21797_21852[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (3))){
var state_21764__$1 = state_21764;
var statearr_21798_21853 = state_21764__$1;
(statearr_21798_21853[(2)] = false);

(statearr_21798_21853[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (12))){
var inst_21762 = (state_21764[(2)]);
var state_21764__$1 = state_21764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21764__$1,inst_21762);
} else {
if((state_val_21765 === (2))){
var inst_21670 = (state_21764[(8)]);
var inst_21675 = inst_21670.cljs$lang$protocol_mask$partition0$;
var inst_21676 = (inst_21675 & (64));
var inst_21677 = inst_21670.cljs$core$ISeq$;
var inst_21678 = (inst_21676) || (inst_21677);
var state_21764__$1 = state_21764;
if(cljs.core.truth_(inst_21678)){
var statearr_21799_21854 = state_21764__$1;
(statearr_21799_21854[(1)] = (5));

} else {
var statearr_21800_21855 = state_21764__$1;
(statearr_21800_21855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (23))){
var inst_21723 = (state_21764[(14)]);
var inst_21729 = (inst_21723 == null);
var state_21764__$1 = state_21764;
if(cljs.core.truth_(inst_21729)){
var statearr_21801_21856 = state_21764__$1;
(statearr_21801_21856[(1)] = (26));

} else {
var statearr_21802_21857 = state_21764__$1;
(statearr_21802_21857[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (35))){
var inst_21749 = (state_21764[(2)]);
var state_21764__$1 = state_21764;
if(cljs.core.truth_(inst_21749)){
var statearr_21803_21858 = state_21764__$1;
(statearr_21803_21858[(1)] = (36));

} else {
var statearr_21804_21859 = state_21764__$1;
(statearr_21804_21859[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (19))){
var inst_21694 = (state_21764[(7)]);
var inst_21713 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21694);
var state_21764__$1 = state_21764;
var statearr_21805_21860 = state_21764__$1;
(statearr_21805_21860[(2)] = inst_21713);

(statearr_21805_21860[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (11))){
var inst_21694 = (state_21764[(7)]);
var inst_21698 = (inst_21694 == null);
var inst_21699 = cljs.core.not.call(null,inst_21698);
var state_21764__$1 = state_21764;
if(inst_21699){
var statearr_21806_21861 = state_21764__$1;
(statearr_21806_21861[(1)] = (13));

} else {
var statearr_21807_21862 = state_21764__$1;
(statearr_21807_21862[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (9))){
var inst_21670 = (state_21764[(8)]);
var state_21764__$1 = state_21764;
var statearr_21808_21863 = state_21764__$1;
(statearr_21808_21863[(2)] = inst_21670);

(statearr_21808_21863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (5))){
var state_21764__$1 = state_21764;
var statearr_21809_21864 = state_21764__$1;
(statearr_21809_21864[(2)] = true);

(statearr_21809_21864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (14))){
var state_21764__$1 = state_21764;
var statearr_21810_21865 = state_21764__$1;
(statearr_21810_21865[(2)] = false);

(statearr_21810_21865[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (26))){
var inst_21724 = (state_21764[(10)]);
var inst_21731 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21724);
var state_21764__$1 = state_21764;
var statearr_21811_21866 = state_21764__$1;
(statearr_21811_21866[(2)] = inst_21731);

(statearr_21811_21866[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (16))){
var state_21764__$1 = state_21764;
var statearr_21812_21867 = state_21764__$1;
(statearr_21812_21867[(2)] = true);

(statearr_21812_21867[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (38))){
var inst_21754 = (state_21764[(2)]);
var state_21764__$1 = state_21764;
var statearr_21813_21868 = state_21764__$1;
(statearr_21813_21868[(2)] = inst_21754);

(statearr_21813_21868[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (30))){
var inst_21717 = (state_21764[(9)]);
var inst_21724 = (state_21764[(10)]);
var inst_21718 = (state_21764[(13)]);
var inst_21741 = cljs.core.empty_QMARK_.call(null,inst_21717);
var inst_21742 = inst_21718.call(null,inst_21724);
var inst_21743 = cljs.core.not.call(null,inst_21742);
var inst_21744 = (inst_21741) && (inst_21743);
var state_21764__$1 = state_21764;
var statearr_21814_21869 = state_21764__$1;
(statearr_21814_21869[(2)] = inst_21744);

(statearr_21814_21869[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (10))){
var inst_21670 = (state_21764[(8)]);
var inst_21690 = (state_21764[(2)]);
var inst_21691 = cljs.core.get.call(null,inst_21690,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21692 = cljs.core.get.call(null,inst_21690,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21693 = cljs.core.get.call(null,inst_21690,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21694 = inst_21670;
var state_21764__$1 = (function (){var statearr_21815 = state_21764;
(statearr_21815[(7)] = inst_21694);

(statearr_21815[(16)] = inst_21693);

(statearr_21815[(17)] = inst_21691);

(statearr_21815[(18)] = inst_21692);

return statearr_21815;
})();
var statearr_21816_21870 = state_21764__$1;
(statearr_21816_21870[(2)] = null);

(statearr_21816_21870[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (18))){
var inst_21708 = (state_21764[(2)]);
var state_21764__$1 = state_21764;
var statearr_21817_21871 = state_21764__$1;
(statearr_21817_21871[(2)] = inst_21708);

(statearr_21817_21871[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (37))){
var state_21764__$1 = state_21764;
var statearr_21818_21872 = state_21764__$1;
(statearr_21818_21872[(2)] = null);

(statearr_21818_21872[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21765 === (8))){
var inst_21670 = (state_21764[(8)]);
var inst_21687 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21670);
var state_21764__$1 = state_21764;
var statearr_21819_21873 = state_21764__$1;
(statearr_21819_21873[(2)] = inst_21687);

(statearr_21819_21873[(1)] = (10));


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
});})(c__18796__auto___21827,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18775__auto__,c__18796__auto___21827,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18776__auto__ = null;
var cljs$core$async$mix_$_state_machine__18776__auto____0 = (function (){
var statearr_21823 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21823[(0)] = cljs$core$async$mix_$_state_machine__18776__auto__);

(statearr_21823[(1)] = (1));

return statearr_21823;
});
var cljs$core$async$mix_$_state_machine__18776__auto____1 = (function (state_21764){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_21764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e21824){if((e21824 instanceof Object)){
var ex__18779__auto__ = e21824;
var statearr_21825_21874 = state_21764;
(statearr_21825_21874[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21875 = state_21764;
state_21764 = G__21875;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18776__auto__ = function(state_21764){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18776__auto____1.call(this,state_21764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18776__auto____0;
cljs$core$async$mix_$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18776__auto____1;
return cljs$core$async$mix_$_state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___21827,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18798__auto__ = (function (){var statearr_21826 = f__18797__auto__.call(null);
(statearr_21826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___21827);

return statearr_21826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___21827,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17427__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p,v,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args21876 = [];
var len__17829__auto___21879 = arguments.length;
var i__17830__auto___21880 = (0);
while(true){
if((i__17830__auto___21880 < len__17829__auto___21879)){
args21876.push((arguments[i__17830__auto___21880]));

var G__21881 = (i__17830__auto___21880 + (1));
i__17830__auto___21880 = G__21881;
continue;
} else {
}
break;
}

var G__21878 = args21876.length;
switch (G__21878) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21876.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p);
} else {
var m__17427__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p,v);
} else {
var m__17427__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args21884 = [];
var len__17829__auto___22009 = arguments.length;
var i__17830__auto___22010 = (0);
while(true){
if((i__17830__auto___22010 < len__17829__auto___22009)){
args21884.push((arguments[i__17830__auto___22010]));

var G__22011 = (i__17830__auto___22010 + (1));
i__17830__auto___22010 = G__22011;
continue;
} else {
}
break;
}

var G__21886 = args21884.length;
switch (G__21886) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21884.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16771__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16771__auto__,mults){
return (function (p1__21883_SHARP_){
if(cljs.core.truth_(p1__21883_SHARP_.call(null,topic))){
return p1__21883_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21883_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16771__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async21887 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21887 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21888){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21888 = meta21888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21889,meta21888__$1){
var self__ = this;
var _21889__$1 = this;
return (new cljs.core.async.t_cljs$core$async21887(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21888__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21887.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21889){
var self__ = this;
var _21889__$1 = this;
return self__.meta21888;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21887.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21887.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21887.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async21887.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21887.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21887.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21887.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21887.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21888","meta21888",1413363638,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21887.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21887.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21887";

cljs.core.async.t_cljs$core$async21887.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async21887");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async21887 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async21887(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21888){
return (new cljs.core.async.t_cljs$core$async21887(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21888));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async21887(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18796__auto___22013 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___22013,mults,ensure_mult,p){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___22013,mults,ensure_mult,p){
return (function (state_21961){
var state_val_21962 = (state_21961[(1)]);
if((state_val_21962 === (7))){
var inst_21957 = (state_21961[(2)]);
var state_21961__$1 = state_21961;
var statearr_21963_22014 = state_21961__$1;
(statearr_21963_22014[(2)] = inst_21957);

(statearr_21963_22014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (20))){
var state_21961__$1 = state_21961;
var statearr_21964_22015 = state_21961__$1;
(statearr_21964_22015[(2)] = null);

(statearr_21964_22015[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (1))){
var state_21961__$1 = state_21961;
var statearr_21965_22016 = state_21961__$1;
(statearr_21965_22016[(2)] = null);

(statearr_21965_22016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (24))){
var inst_21940 = (state_21961[(7)]);
var inst_21949 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21940);
var state_21961__$1 = state_21961;
var statearr_21966_22017 = state_21961__$1;
(statearr_21966_22017[(2)] = inst_21949);

(statearr_21966_22017[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (4))){
var inst_21892 = (state_21961[(8)]);
var inst_21892__$1 = (state_21961[(2)]);
var inst_21893 = (inst_21892__$1 == null);
var state_21961__$1 = (function (){var statearr_21967 = state_21961;
(statearr_21967[(8)] = inst_21892__$1);

return statearr_21967;
})();
if(cljs.core.truth_(inst_21893)){
var statearr_21968_22018 = state_21961__$1;
(statearr_21968_22018[(1)] = (5));

} else {
var statearr_21969_22019 = state_21961__$1;
(statearr_21969_22019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (15))){
var inst_21934 = (state_21961[(2)]);
var state_21961__$1 = state_21961;
var statearr_21970_22020 = state_21961__$1;
(statearr_21970_22020[(2)] = inst_21934);

(statearr_21970_22020[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (21))){
var inst_21954 = (state_21961[(2)]);
var state_21961__$1 = (function (){var statearr_21971 = state_21961;
(statearr_21971[(9)] = inst_21954);

return statearr_21971;
})();
var statearr_21972_22021 = state_21961__$1;
(statearr_21972_22021[(2)] = null);

(statearr_21972_22021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (13))){
var inst_21916 = (state_21961[(10)]);
var inst_21918 = cljs.core.chunked_seq_QMARK_.call(null,inst_21916);
var state_21961__$1 = state_21961;
if(inst_21918){
var statearr_21973_22022 = state_21961__$1;
(statearr_21973_22022[(1)] = (16));

} else {
var statearr_21974_22023 = state_21961__$1;
(statearr_21974_22023[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (22))){
var inst_21946 = (state_21961[(2)]);
var state_21961__$1 = state_21961;
if(cljs.core.truth_(inst_21946)){
var statearr_21975_22024 = state_21961__$1;
(statearr_21975_22024[(1)] = (23));

} else {
var statearr_21976_22025 = state_21961__$1;
(statearr_21976_22025[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (6))){
var inst_21940 = (state_21961[(7)]);
var inst_21942 = (state_21961[(11)]);
var inst_21892 = (state_21961[(8)]);
var inst_21940__$1 = topic_fn.call(null,inst_21892);
var inst_21941 = cljs.core.deref.call(null,mults);
var inst_21942__$1 = cljs.core.get.call(null,inst_21941,inst_21940__$1);
var state_21961__$1 = (function (){var statearr_21977 = state_21961;
(statearr_21977[(7)] = inst_21940__$1);

(statearr_21977[(11)] = inst_21942__$1);

return statearr_21977;
})();
if(cljs.core.truth_(inst_21942__$1)){
var statearr_21978_22026 = state_21961__$1;
(statearr_21978_22026[(1)] = (19));

} else {
var statearr_21979_22027 = state_21961__$1;
(statearr_21979_22027[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (25))){
var inst_21951 = (state_21961[(2)]);
var state_21961__$1 = state_21961;
var statearr_21980_22028 = state_21961__$1;
(statearr_21980_22028[(2)] = inst_21951);

(statearr_21980_22028[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (17))){
var inst_21916 = (state_21961[(10)]);
var inst_21925 = cljs.core.first.call(null,inst_21916);
var inst_21926 = cljs.core.async.muxch_STAR_.call(null,inst_21925);
var inst_21927 = cljs.core.async.close_BANG_.call(null,inst_21926);
var inst_21928 = cljs.core.next.call(null,inst_21916);
var inst_21902 = inst_21928;
var inst_21903 = null;
var inst_21904 = (0);
var inst_21905 = (0);
var state_21961__$1 = (function (){var statearr_21981 = state_21961;
(statearr_21981[(12)] = inst_21904);

(statearr_21981[(13)] = inst_21902);

(statearr_21981[(14)] = inst_21927);

(statearr_21981[(15)] = inst_21903);

(statearr_21981[(16)] = inst_21905);

return statearr_21981;
})();
var statearr_21982_22029 = state_21961__$1;
(statearr_21982_22029[(2)] = null);

(statearr_21982_22029[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (3))){
var inst_21959 = (state_21961[(2)]);
var state_21961__$1 = state_21961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21961__$1,inst_21959);
} else {
if((state_val_21962 === (12))){
var inst_21936 = (state_21961[(2)]);
var state_21961__$1 = state_21961;
var statearr_21983_22030 = state_21961__$1;
(statearr_21983_22030[(2)] = inst_21936);

(statearr_21983_22030[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (2))){
var state_21961__$1 = state_21961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21961__$1,(4),ch);
} else {
if((state_val_21962 === (23))){
var state_21961__$1 = state_21961;
var statearr_21984_22031 = state_21961__$1;
(statearr_21984_22031[(2)] = null);

(statearr_21984_22031[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (19))){
var inst_21942 = (state_21961[(11)]);
var inst_21892 = (state_21961[(8)]);
var inst_21944 = cljs.core.async.muxch_STAR_.call(null,inst_21942);
var state_21961__$1 = state_21961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21961__$1,(22),inst_21944,inst_21892);
} else {
if((state_val_21962 === (11))){
var inst_21902 = (state_21961[(13)]);
var inst_21916 = (state_21961[(10)]);
var inst_21916__$1 = cljs.core.seq.call(null,inst_21902);
var state_21961__$1 = (function (){var statearr_21985 = state_21961;
(statearr_21985[(10)] = inst_21916__$1);

return statearr_21985;
})();
if(inst_21916__$1){
var statearr_21986_22032 = state_21961__$1;
(statearr_21986_22032[(1)] = (13));

} else {
var statearr_21987_22033 = state_21961__$1;
(statearr_21987_22033[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (9))){
var inst_21938 = (state_21961[(2)]);
var state_21961__$1 = state_21961;
var statearr_21988_22034 = state_21961__$1;
(statearr_21988_22034[(2)] = inst_21938);

(statearr_21988_22034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (5))){
var inst_21899 = cljs.core.deref.call(null,mults);
var inst_21900 = cljs.core.vals.call(null,inst_21899);
var inst_21901 = cljs.core.seq.call(null,inst_21900);
var inst_21902 = inst_21901;
var inst_21903 = null;
var inst_21904 = (0);
var inst_21905 = (0);
var state_21961__$1 = (function (){var statearr_21989 = state_21961;
(statearr_21989[(12)] = inst_21904);

(statearr_21989[(13)] = inst_21902);

(statearr_21989[(15)] = inst_21903);

(statearr_21989[(16)] = inst_21905);

return statearr_21989;
})();
var statearr_21990_22035 = state_21961__$1;
(statearr_21990_22035[(2)] = null);

(statearr_21990_22035[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (14))){
var state_21961__$1 = state_21961;
var statearr_21994_22036 = state_21961__$1;
(statearr_21994_22036[(2)] = null);

(statearr_21994_22036[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (16))){
var inst_21916 = (state_21961[(10)]);
var inst_21920 = cljs.core.chunk_first.call(null,inst_21916);
var inst_21921 = cljs.core.chunk_rest.call(null,inst_21916);
var inst_21922 = cljs.core.count.call(null,inst_21920);
var inst_21902 = inst_21921;
var inst_21903 = inst_21920;
var inst_21904 = inst_21922;
var inst_21905 = (0);
var state_21961__$1 = (function (){var statearr_21995 = state_21961;
(statearr_21995[(12)] = inst_21904);

(statearr_21995[(13)] = inst_21902);

(statearr_21995[(15)] = inst_21903);

(statearr_21995[(16)] = inst_21905);

return statearr_21995;
})();
var statearr_21996_22037 = state_21961__$1;
(statearr_21996_22037[(2)] = null);

(statearr_21996_22037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (10))){
var inst_21904 = (state_21961[(12)]);
var inst_21902 = (state_21961[(13)]);
var inst_21903 = (state_21961[(15)]);
var inst_21905 = (state_21961[(16)]);
var inst_21910 = cljs.core._nth.call(null,inst_21903,inst_21905);
var inst_21911 = cljs.core.async.muxch_STAR_.call(null,inst_21910);
var inst_21912 = cljs.core.async.close_BANG_.call(null,inst_21911);
var inst_21913 = (inst_21905 + (1));
var tmp21991 = inst_21904;
var tmp21992 = inst_21902;
var tmp21993 = inst_21903;
var inst_21902__$1 = tmp21992;
var inst_21903__$1 = tmp21993;
var inst_21904__$1 = tmp21991;
var inst_21905__$1 = inst_21913;
var state_21961__$1 = (function (){var statearr_21997 = state_21961;
(statearr_21997[(12)] = inst_21904__$1);

(statearr_21997[(17)] = inst_21912);

(statearr_21997[(13)] = inst_21902__$1);

(statearr_21997[(15)] = inst_21903__$1);

(statearr_21997[(16)] = inst_21905__$1);

return statearr_21997;
})();
var statearr_21998_22038 = state_21961__$1;
(statearr_21998_22038[(2)] = null);

(statearr_21998_22038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (18))){
var inst_21931 = (state_21961[(2)]);
var state_21961__$1 = state_21961;
var statearr_21999_22039 = state_21961__$1;
(statearr_21999_22039[(2)] = inst_21931);

(statearr_21999_22039[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21962 === (8))){
var inst_21904 = (state_21961[(12)]);
var inst_21905 = (state_21961[(16)]);
var inst_21907 = (inst_21905 < inst_21904);
var inst_21908 = inst_21907;
var state_21961__$1 = state_21961;
if(cljs.core.truth_(inst_21908)){
var statearr_22000_22040 = state_21961__$1;
(statearr_22000_22040[(1)] = (10));

} else {
var statearr_22001_22041 = state_21961__$1;
(statearr_22001_22041[(1)] = (11));

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
});})(c__18796__auto___22013,mults,ensure_mult,p))
;
return ((function (switch__18775__auto__,c__18796__auto___22013,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18776__auto__ = null;
var cljs$core$async$state_machine__18776__auto____0 = (function (){
var statearr_22005 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22005[(0)] = cljs$core$async$state_machine__18776__auto__);

(statearr_22005[(1)] = (1));

return statearr_22005;
});
var cljs$core$async$state_machine__18776__auto____1 = (function (state_21961){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_21961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e22006){if((e22006 instanceof Object)){
var ex__18779__auto__ = e22006;
var statearr_22007_22042 = state_21961;
(statearr_22007_22042[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22043 = state_21961;
state_21961 = G__22043;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$state_machine__18776__auto__ = function(state_21961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18776__auto____1.call(this,state_21961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18776__auto____0;
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18776__auto____1;
return cljs$core$async$state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___22013,mults,ensure_mult,p))
})();
var state__18798__auto__ = (function (){var statearr_22008 = f__18797__auto__.call(null);
(statearr_22008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___22013);

return statearr_22008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___22013,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args22044 = [];
var len__17829__auto___22047 = arguments.length;
var i__17830__auto___22048 = (0);
while(true){
if((i__17830__auto___22048 < len__17829__auto___22047)){
args22044.push((arguments[i__17830__auto___22048]));

var G__22049 = (i__17830__auto___22048 + (1));
i__17830__auto___22048 = G__22049;
continue;
} else {
}
break;
}

var G__22046 = args22044.length;
switch (G__22046) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22044.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args22051 = [];
var len__17829__auto___22054 = arguments.length;
var i__17830__auto___22055 = (0);
while(true){
if((i__17830__auto___22055 < len__17829__auto___22054)){
args22051.push((arguments[i__17830__auto___22055]));

var G__22056 = (i__17830__auto___22055 + (1));
i__17830__auto___22055 = G__22056;
continue;
} else {
}
break;
}

var G__22053 = args22051.length;
switch (G__22053) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22051.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args22058 = [];
var len__17829__auto___22129 = arguments.length;
var i__17830__auto___22130 = (0);
while(true){
if((i__17830__auto___22130 < len__17829__auto___22129)){
args22058.push((arguments[i__17830__auto___22130]));

var G__22131 = (i__17830__auto___22130 + (1));
i__17830__auto___22130 = G__22131;
continue;
} else {
}
break;
}

var G__22060 = args22058.length;
switch (G__22060) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22058.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__18796__auto___22133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___22133,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___22133,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22099){
var state_val_22100 = (state_22099[(1)]);
if((state_val_22100 === (7))){
var state_22099__$1 = state_22099;
var statearr_22101_22134 = state_22099__$1;
(statearr_22101_22134[(2)] = null);

(statearr_22101_22134[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (1))){
var state_22099__$1 = state_22099;
var statearr_22102_22135 = state_22099__$1;
(statearr_22102_22135[(2)] = null);

(statearr_22102_22135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (4))){
var inst_22063 = (state_22099[(7)]);
var inst_22065 = (inst_22063 < cnt);
var state_22099__$1 = state_22099;
if(cljs.core.truth_(inst_22065)){
var statearr_22103_22136 = state_22099__$1;
(statearr_22103_22136[(1)] = (6));

} else {
var statearr_22104_22137 = state_22099__$1;
(statearr_22104_22137[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (15))){
var inst_22095 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
var statearr_22105_22138 = state_22099__$1;
(statearr_22105_22138[(2)] = inst_22095);

(statearr_22105_22138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (13))){
var inst_22088 = cljs.core.async.close_BANG_.call(null,out);
var state_22099__$1 = state_22099;
var statearr_22106_22139 = state_22099__$1;
(statearr_22106_22139[(2)] = inst_22088);

(statearr_22106_22139[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (6))){
var state_22099__$1 = state_22099;
var statearr_22107_22140 = state_22099__$1;
(statearr_22107_22140[(2)] = null);

(statearr_22107_22140[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (3))){
var inst_22097 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22099__$1,inst_22097);
} else {
if((state_val_22100 === (12))){
var inst_22085 = (state_22099[(8)]);
var inst_22085__$1 = (state_22099[(2)]);
var inst_22086 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22085__$1);
var state_22099__$1 = (function (){var statearr_22108 = state_22099;
(statearr_22108[(8)] = inst_22085__$1);

return statearr_22108;
})();
if(cljs.core.truth_(inst_22086)){
var statearr_22109_22141 = state_22099__$1;
(statearr_22109_22141[(1)] = (13));

} else {
var statearr_22110_22142 = state_22099__$1;
(statearr_22110_22142[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (2))){
var inst_22062 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22063 = (0);
var state_22099__$1 = (function (){var statearr_22111 = state_22099;
(statearr_22111[(7)] = inst_22063);

(statearr_22111[(9)] = inst_22062);

return statearr_22111;
})();
var statearr_22112_22143 = state_22099__$1;
(statearr_22112_22143[(2)] = null);

(statearr_22112_22143[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (11))){
var inst_22063 = (state_22099[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22099,(10),Object,null,(9));
var inst_22072 = chs__$1.call(null,inst_22063);
var inst_22073 = done.call(null,inst_22063);
var inst_22074 = cljs.core.async.take_BANG_.call(null,inst_22072,inst_22073);
var state_22099__$1 = state_22099;
var statearr_22113_22144 = state_22099__$1;
(statearr_22113_22144[(2)] = inst_22074);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22099__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (9))){
var inst_22063 = (state_22099[(7)]);
var inst_22076 = (state_22099[(2)]);
var inst_22077 = (inst_22063 + (1));
var inst_22063__$1 = inst_22077;
var state_22099__$1 = (function (){var statearr_22114 = state_22099;
(statearr_22114[(10)] = inst_22076);

(statearr_22114[(7)] = inst_22063__$1);

return statearr_22114;
})();
var statearr_22115_22145 = state_22099__$1;
(statearr_22115_22145[(2)] = null);

(statearr_22115_22145[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (5))){
var inst_22083 = (state_22099[(2)]);
var state_22099__$1 = (function (){var statearr_22116 = state_22099;
(statearr_22116[(11)] = inst_22083);

return statearr_22116;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22099__$1,(12),dchan);
} else {
if((state_val_22100 === (14))){
var inst_22085 = (state_22099[(8)]);
var inst_22090 = cljs.core.apply.call(null,f,inst_22085);
var state_22099__$1 = state_22099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22099__$1,(16),out,inst_22090);
} else {
if((state_val_22100 === (16))){
var inst_22092 = (state_22099[(2)]);
var state_22099__$1 = (function (){var statearr_22117 = state_22099;
(statearr_22117[(12)] = inst_22092);

return statearr_22117;
})();
var statearr_22118_22146 = state_22099__$1;
(statearr_22118_22146[(2)] = null);

(statearr_22118_22146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (10))){
var inst_22067 = (state_22099[(2)]);
var inst_22068 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22099__$1 = (function (){var statearr_22119 = state_22099;
(statearr_22119[(13)] = inst_22067);

return statearr_22119;
})();
var statearr_22120_22147 = state_22099__$1;
(statearr_22120_22147[(2)] = inst_22068);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22099__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (8))){
var inst_22081 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
var statearr_22121_22148 = state_22099__$1;
(statearr_22121_22148[(2)] = inst_22081);

(statearr_22121_22148[(1)] = (5));


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
});})(c__18796__auto___22133,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18775__auto__,c__18796__auto___22133,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18776__auto__ = null;
var cljs$core$async$state_machine__18776__auto____0 = (function (){
var statearr_22125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22125[(0)] = cljs$core$async$state_machine__18776__auto__);

(statearr_22125[(1)] = (1));

return statearr_22125;
});
var cljs$core$async$state_machine__18776__auto____1 = (function (state_22099){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_22099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e22126){if((e22126 instanceof Object)){
var ex__18779__auto__ = e22126;
var statearr_22127_22149 = state_22099;
(statearr_22127_22149[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22150 = state_22099;
state_22099 = G__22150;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$state_machine__18776__auto__ = function(state_22099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18776__auto____1.call(this,state_22099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18776__auto____0;
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18776__auto____1;
return cljs$core$async$state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___22133,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18798__auto__ = (function (){var statearr_22128 = f__18797__auto__.call(null);
(statearr_22128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___22133);

return statearr_22128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___22133,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args22152 = [];
var len__17829__auto___22208 = arguments.length;
var i__17830__auto___22209 = (0);
while(true){
if((i__17830__auto___22209 < len__17829__auto___22208)){
args22152.push((arguments[i__17830__auto___22209]));

var G__22210 = (i__17830__auto___22209 + (1));
i__17830__auto___22209 = G__22210;
continue;
} else {
}
break;
}

var G__22154 = args22152.length;
switch (G__22154) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22152.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18796__auto___22212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___22212,out){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___22212,out){
return (function (state_22184){
var state_val_22185 = (state_22184[(1)]);
if((state_val_22185 === (7))){
var inst_22164 = (state_22184[(7)]);
var inst_22163 = (state_22184[(8)]);
var inst_22163__$1 = (state_22184[(2)]);
var inst_22164__$1 = cljs.core.nth.call(null,inst_22163__$1,(0),null);
var inst_22165 = cljs.core.nth.call(null,inst_22163__$1,(1),null);
var inst_22166 = (inst_22164__$1 == null);
var state_22184__$1 = (function (){var statearr_22186 = state_22184;
(statearr_22186[(7)] = inst_22164__$1);

(statearr_22186[(8)] = inst_22163__$1);

(statearr_22186[(9)] = inst_22165);

return statearr_22186;
})();
if(cljs.core.truth_(inst_22166)){
var statearr_22187_22213 = state_22184__$1;
(statearr_22187_22213[(1)] = (8));

} else {
var statearr_22188_22214 = state_22184__$1;
(statearr_22188_22214[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22185 === (1))){
var inst_22155 = cljs.core.vec.call(null,chs);
var inst_22156 = inst_22155;
var state_22184__$1 = (function (){var statearr_22189 = state_22184;
(statearr_22189[(10)] = inst_22156);

return statearr_22189;
})();
var statearr_22190_22215 = state_22184__$1;
(statearr_22190_22215[(2)] = null);

(statearr_22190_22215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22185 === (4))){
var inst_22156 = (state_22184[(10)]);
var state_22184__$1 = state_22184;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22184__$1,(7),inst_22156);
} else {
if((state_val_22185 === (6))){
var inst_22180 = (state_22184[(2)]);
var state_22184__$1 = state_22184;
var statearr_22191_22216 = state_22184__$1;
(statearr_22191_22216[(2)] = inst_22180);

(statearr_22191_22216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22185 === (3))){
var inst_22182 = (state_22184[(2)]);
var state_22184__$1 = state_22184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22184__$1,inst_22182);
} else {
if((state_val_22185 === (2))){
var inst_22156 = (state_22184[(10)]);
var inst_22158 = cljs.core.count.call(null,inst_22156);
var inst_22159 = (inst_22158 > (0));
var state_22184__$1 = state_22184;
if(cljs.core.truth_(inst_22159)){
var statearr_22193_22217 = state_22184__$1;
(statearr_22193_22217[(1)] = (4));

} else {
var statearr_22194_22218 = state_22184__$1;
(statearr_22194_22218[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22185 === (11))){
var inst_22156 = (state_22184[(10)]);
var inst_22173 = (state_22184[(2)]);
var tmp22192 = inst_22156;
var inst_22156__$1 = tmp22192;
var state_22184__$1 = (function (){var statearr_22195 = state_22184;
(statearr_22195[(10)] = inst_22156__$1);

(statearr_22195[(11)] = inst_22173);

return statearr_22195;
})();
var statearr_22196_22219 = state_22184__$1;
(statearr_22196_22219[(2)] = null);

(statearr_22196_22219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22185 === (9))){
var inst_22164 = (state_22184[(7)]);
var state_22184__$1 = state_22184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22184__$1,(11),out,inst_22164);
} else {
if((state_val_22185 === (5))){
var inst_22178 = cljs.core.async.close_BANG_.call(null,out);
var state_22184__$1 = state_22184;
var statearr_22197_22220 = state_22184__$1;
(statearr_22197_22220[(2)] = inst_22178);

(statearr_22197_22220[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22185 === (10))){
var inst_22176 = (state_22184[(2)]);
var state_22184__$1 = state_22184;
var statearr_22198_22221 = state_22184__$1;
(statearr_22198_22221[(2)] = inst_22176);

(statearr_22198_22221[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22185 === (8))){
var inst_22156 = (state_22184[(10)]);
var inst_22164 = (state_22184[(7)]);
var inst_22163 = (state_22184[(8)]);
var inst_22165 = (state_22184[(9)]);
var inst_22168 = (function (){var cs = inst_22156;
var vec__22161 = inst_22163;
var v = inst_22164;
var c = inst_22165;
return ((function (cs,vec__22161,v,c,inst_22156,inst_22164,inst_22163,inst_22165,state_val_22185,c__18796__auto___22212,out){
return (function (p1__22151_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22151_SHARP_);
});
;})(cs,vec__22161,v,c,inst_22156,inst_22164,inst_22163,inst_22165,state_val_22185,c__18796__auto___22212,out))
})();
var inst_22169 = cljs.core.filterv.call(null,inst_22168,inst_22156);
var inst_22156__$1 = inst_22169;
var state_22184__$1 = (function (){var statearr_22199 = state_22184;
(statearr_22199[(10)] = inst_22156__$1);

return statearr_22199;
})();
var statearr_22200_22222 = state_22184__$1;
(statearr_22200_22222[(2)] = null);

(statearr_22200_22222[(1)] = (2));


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
});})(c__18796__auto___22212,out))
;
return ((function (switch__18775__auto__,c__18796__auto___22212,out){
return (function() {
var cljs$core$async$state_machine__18776__auto__ = null;
var cljs$core$async$state_machine__18776__auto____0 = (function (){
var statearr_22204 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22204[(0)] = cljs$core$async$state_machine__18776__auto__);

(statearr_22204[(1)] = (1));

return statearr_22204;
});
var cljs$core$async$state_machine__18776__auto____1 = (function (state_22184){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_22184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e22205){if((e22205 instanceof Object)){
var ex__18779__auto__ = e22205;
var statearr_22206_22223 = state_22184;
(statearr_22206_22223[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22224 = state_22184;
state_22184 = G__22224;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$state_machine__18776__auto__ = function(state_22184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18776__auto____1.call(this,state_22184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18776__auto____0;
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18776__auto____1;
return cljs$core$async$state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___22212,out))
})();
var state__18798__auto__ = (function (){var statearr_22207 = f__18797__auto__.call(null);
(statearr_22207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___22212);

return statearr_22207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___22212,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args22225 = [];
var len__17829__auto___22274 = arguments.length;
var i__17830__auto___22275 = (0);
while(true){
if((i__17830__auto___22275 < len__17829__auto___22274)){
args22225.push((arguments[i__17830__auto___22275]));

var G__22276 = (i__17830__auto___22275 + (1));
i__17830__auto___22275 = G__22276;
continue;
} else {
}
break;
}

var G__22227 = args22225.length;
switch (G__22227) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22225.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18796__auto___22278 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___22278,out){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___22278,out){
return (function (state_22251){
var state_val_22252 = (state_22251[(1)]);
if((state_val_22252 === (7))){
var inst_22233 = (state_22251[(7)]);
var inst_22233__$1 = (state_22251[(2)]);
var inst_22234 = (inst_22233__$1 == null);
var inst_22235 = cljs.core.not.call(null,inst_22234);
var state_22251__$1 = (function (){var statearr_22253 = state_22251;
(statearr_22253[(7)] = inst_22233__$1);

return statearr_22253;
})();
if(inst_22235){
var statearr_22254_22279 = state_22251__$1;
(statearr_22254_22279[(1)] = (8));

} else {
var statearr_22255_22280 = state_22251__$1;
(statearr_22255_22280[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (1))){
var inst_22228 = (0);
var state_22251__$1 = (function (){var statearr_22256 = state_22251;
(statearr_22256[(8)] = inst_22228);

return statearr_22256;
})();
var statearr_22257_22281 = state_22251__$1;
(statearr_22257_22281[(2)] = null);

(statearr_22257_22281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (4))){
var state_22251__$1 = state_22251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22251__$1,(7),ch);
} else {
if((state_val_22252 === (6))){
var inst_22246 = (state_22251[(2)]);
var state_22251__$1 = state_22251;
var statearr_22258_22282 = state_22251__$1;
(statearr_22258_22282[(2)] = inst_22246);

(statearr_22258_22282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (3))){
var inst_22248 = (state_22251[(2)]);
var inst_22249 = cljs.core.async.close_BANG_.call(null,out);
var state_22251__$1 = (function (){var statearr_22259 = state_22251;
(statearr_22259[(9)] = inst_22248);

return statearr_22259;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22251__$1,inst_22249);
} else {
if((state_val_22252 === (2))){
var inst_22228 = (state_22251[(8)]);
var inst_22230 = (inst_22228 < n);
var state_22251__$1 = state_22251;
if(cljs.core.truth_(inst_22230)){
var statearr_22260_22283 = state_22251__$1;
(statearr_22260_22283[(1)] = (4));

} else {
var statearr_22261_22284 = state_22251__$1;
(statearr_22261_22284[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (11))){
var inst_22228 = (state_22251[(8)]);
var inst_22238 = (state_22251[(2)]);
var inst_22239 = (inst_22228 + (1));
var inst_22228__$1 = inst_22239;
var state_22251__$1 = (function (){var statearr_22262 = state_22251;
(statearr_22262[(10)] = inst_22238);

(statearr_22262[(8)] = inst_22228__$1);

return statearr_22262;
})();
var statearr_22263_22285 = state_22251__$1;
(statearr_22263_22285[(2)] = null);

(statearr_22263_22285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (9))){
var state_22251__$1 = state_22251;
var statearr_22264_22286 = state_22251__$1;
(statearr_22264_22286[(2)] = null);

(statearr_22264_22286[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (5))){
var state_22251__$1 = state_22251;
var statearr_22265_22287 = state_22251__$1;
(statearr_22265_22287[(2)] = null);

(statearr_22265_22287[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (10))){
var inst_22243 = (state_22251[(2)]);
var state_22251__$1 = state_22251;
var statearr_22266_22288 = state_22251__$1;
(statearr_22266_22288[(2)] = inst_22243);

(statearr_22266_22288[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22252 === (8))){
var inst_22233 = (state_22251[(7)]);
var state_22251__$1 = state_22251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22251__$1,(11),out,inst_22233);
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
});})(c__18796__auto___22278,out))
;
return ((function (switch__18775__auto__,c__18796__auto___22278,out){
return (function() {
var cljs$core$async$state_machine__18776__auto__ = null;
var cljs$core$async$state_machine__18776__auto____0 = (function (){
var statearr_22270 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22270[(0)] = cljs$core$async$state_machine__18776__auto__);

(statearr_22270[(1)] = (1));

return statearr_22270;
});
var cljs$core$async$state_machine__18776__auto____1 = (function (state_22251){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_22251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e22271){if((e22271 instanceof Object)){
var ex__18779__auto__ = e22271;
var statearr_22272_22289 = state_22251;
(statearr_22272_22289[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22290 = state_22251;
state_22251 = G__22290;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$state_machine__18776__auto__ = function(state_22251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18776__auto____1.call(this,state_22251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18776__auto____0;
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18776__auto____1;
return cljs$core$async$state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___22278,out))
})();
var state__18798__auto__ = (function (){var statearr_22273 = f__18797__auto__.call(null);
(statearr_22273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___22278);

return statearr_22273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___22278,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22298 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22298 = (function (map_LT_,f,ch,meta22299){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22299 = meta22299;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22300,meta22299__$1){
var self__ = this;
var _22300__$1 = this;
return (new cljs.core.async.t_cljs$core$async22298(self__.map_LT_,self__.f,self__.ch,meta22299__$1));
});

cljs.core.async.t_cljs$core$async22298.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22300){
var self__ = this;
var _22300__$1 = this;
return self__.meta22299;
});

cljs.core.async.t_cljs$core$async22298.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22298.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22298.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22298.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22298.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22301 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22301 = (function (map_LT_,f,ch,meta22299,_,fn1,meta22302){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22299 = meta22299;
this._ = _;
this.fn1 = fn1;
this.meta22302 = meta22302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22303,meta22302__$1){
var self__ = this;
var _22303__$1 = this;
return (new cljs.core.async.t_cljs$core$async22301(self__.map_LT_,self__.f,self__.ch,self__.meta22299,self__._,self__.fn1,meta22302__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22301.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22303){
var self__ = this;
var _22303__$1 = this;
return self__.meta22302;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22301.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22301.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22301.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22301.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22291_SHARP_){
return f1.call(null,(((p1__22291_SHARP_ == null))?null:self__.f.call(null,p1__22291_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22301.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22299","meta22299",1283863201,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22298","cljs.core.async/t_cljs$core$async22298",-803508517,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22302","meta22302",-1720204903,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22301.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22301.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22301";

cljs.core.async.t_cljs$core$async22301.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async22301");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22301 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22301(map_LT___$1,f__$1,ch__$1,meta22299__$1,___$2,fn1__$1,meta22302){
return (new cljs.core.async.t_cljs$core$async22301(map_LT___$1,f__$1,ch__$1,meta22299__$1,___$2,fn1__$1,meta22302));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22301(self__.map_LT_,self__.f,self__.ch,self__.meta22299,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16759__auto__ = ret;
if(cljs.core.truth_(and__16759__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16759__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22298.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22298.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22298.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22299","meta22299",1283863201,null)], null);
});

cljs.core.async.t_cljs$core$async22298.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22298.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22298";

cljs.core.async.t_cljs$core$async22298.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async22298");
});

cljs.core.async.__GT_t_cljs$core$async22298 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22298(map_LT___$1,f__$1,ch__$1,meta22299){
return (new cljs.core.async.t_cljs$core$async22298(map_LT___$1,f__$1,ch__$1,meta22299));
});

}

return (new cljs.core.async.t_cljs$core$async22298(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22307 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22307 = (function (map_GT_,f,ch,meta22308){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22308 = meta22308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22309,meta22308__$1){
var self__ = this;
var _22309__$1 = this;
return (new cljs.core.async.t_cljs$core$async22307(self__.map_GT_,self__.f,self__.ch,meta22308__$1));
});

cljs.core.async.t_cljs$core$async22307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22309){
var self__ = this;
var _22309__$1 = this;
return self__.meta22308;
});

cljs.core.async.t_cljs$core$async22307.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22307.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22307.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22307.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22307.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22307.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22307.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22308","meta22308",-795495144,null)], null);
});

cljs.core.async.t_cljs$core$async22307.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22307.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22307";

cljs.core.async.t_cljs$core$async22307.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async22307");
});

cljs.core.async.__GT_t_cljs$core$async22307 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22307(map_GT___$1,f__$1,ch__$1,meta22308){
return (new cljs.core.async.t_cljs$core$async22307(map_GT___$1,f__$1,ch__$1,meta22308));
});

}

return (new cljs.core.async.t_cljs$core$async22307(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22313 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22313 = (function (filter_GT_,p,ch,meta22314){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22314 = meta22314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22315,meta22314__$1){
var self__ = this;
var _22315__$1 = this;
return (new cljs.core.async.t_cljs$core$async22313(self__.filter_GT_,self__.p,self__.ch,meta22314__$1));
});

cljs.core.async.t_cljs$core$async22313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22315){
var self__ = this;
var _22315__$1 = this;
return self__.meta22314;
});

cljs.core.async.t_cljs$core$async22313.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22313.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22313.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22313.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22313.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22313.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22313.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22314","meta22314",-1623087774,null)], null);
});

cljs.core.async.t_cljs$core$async22313.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22313";

cljs.core.async.t_cljs$core$async22313.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async22313");
});

cljs.core.async.__GT_t_cljs$core$async22313 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22313(filter_GT___$1,p__$1,ch__$1,meta22314){
return (new cljs.core.async.t_cljs$core$async22313(filter_GT___$1,p__$1,ch__$1,meta22314));
});

}

return (new cljs.core.async.t_cljs$core$async22313(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args22316 = [];
var len__17829__auto___22360 = arguments.length;
var i__17830__auto___22361 = (0);
while(true){
if((i__17830__auto___22361 < len__17829__auto___22360)){
args22316.push((arguments[i__17830__auto___22361]));

var G__22362 = (i__17830__auto___22361 + (1));
i__17830__auto___22361 = G__22362;
continue;
} else {
}
break;
}

var G__22318 = args22316.length;
switch (G__22318) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22316.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18796__auto___22364 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___22364,out){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___22364,out){
return (function (state_22339){
var state_val_22340 = (state_22339[(1)]);
if((state_val_22340 === (7))){
var inst_22335 = (state_22339[(2)]);
var state_22339__$1 = state_22339;
var statearr_22341_22365 = state_22339__$1;
(statearr_22341_22365[(2)] = inst_22335);

(statearr_22341_22365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22340 === (1))){
var state_22339__$1 = state_22339;
var statearr_22342_22366 = state_22339__$1;
(statearr_22342_22366[(2)] = null);

(statearr_22342_22366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22340 === (4))){
var inst_22321 = (state_22339[(7)]);
var inst_22321__$1 = (state_22339[(2)]);
var inst_22322 = (inst_22321__$1 == null);
var state_22339__$1 = (function (){var statearr_22343 = state_22339;
(statearr_22343[(7)] = inst_22321__$1);

return statearr_22343;
})();
if(cljs.core.truth_(inst_22322)){
var statearr_22344_22367 = state_22339__$1;
(statearr_22344_22367[(1)] = (5));

} else {
var statearr_22345_22368 = state_22339__$1;
(statearr_22345_22368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22340 === (6))){
var inst_22321 = (state_22339[(7)]);
var inst_22326 = p.call(null,inst_22321);
var state_22339__$1 = state_22339;
if(cljs.core.truth_(inst_22326)){
var statearr_22346_22369 = state_22339__$1;
(statearr_22346_22369[(1)] = (8));

} else {
var statearr_22347_22370 = state_22339__$1;
(statearr_22347_22370[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22340 === (3))){
var inst_22337 = (state_22339[(2)]);
var state_22339__$1 = state_22339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22339__$1,inst_22337);
} else {
if((state_val_22340 === (2))){
var state_22339__$1 = state_22339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22339__$1,(4),ch);
} else {
if((state_val_22340 === (11))){
var inst_22329 = (state_22339[(2)]);
var state_22339__$1 = state_22339;
var statearr_22348_22371 = state_22339__$1;
(statearr_22348_22371[(2)] = inst_22329);

(statearr_22348_22371[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22340 === (9))){
var state_22339__$1 = state_22339;
var statearr_22349_22372 = state_22339__$1;
(statearr_22349_22372[(2)] = null);

(statearr_22349_22372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22340 === (5))){
var inst_22324 = cljs.core.async.close_BANG_.call(null,out);
var state_22339__$1 = state_22339;
var statearr_22350_22373 = state_22339__$1;
(statearr_22350_22373[(2)] = inst_22324);

(statearr_22350_22373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22340 === (10))){
var inst_22332 = (state_22339[(2)]);
var state_22339__$1 = (function (){var statearr_22351 = state_22339;
(statearr_22351[(8)] = inst_22332);

return statearr_22351;
})();
var statearr_22352_22374 = state_22339__$1;
(statearr_22352_22374[(2)] = null);

(statearr_22352_22374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22340 === (8))){
var inst_22321 = (state_22339[(7)]);
var state_22339__$1 = state_22339;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22339__$1,(11),out,inst_22321);
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
});})(c__18796__auto___22364,out))
;
return ((function (switch__18775__auto__,c__18796__auto___22364,out){
return (function() {
var cljs$core$async$state_machine__18776__auto__ = null;
var cljs$core$async$state_machine__18776__auto____0 = (function (){
var statearr_22356 = [null,null,null,null,null,null,null,null,null];
(statearr_22356[(0)] = cljs$core$async$state_machine__18776__auto__);

(statearr_22356[(1)] = (1));

return statearr_22356;
});
var cljs$core$async$state_machine__18776__auto____1 = (function (state_22339){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_22339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e22357){if((e22357 instanceof Object)){
var ex__18779__auto__ = e22357;
var statearr_22358_22375 = state_22339;
(statearr_22358_22375[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22376 = state_22339;
state_22339 = G__22376;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$state_machine__18776__auto__ = function(state_22339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18776__auto____1.call(this,state_22339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18776__auto____0;
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18776__auto____1;
return cljs$core$async$state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___22364,out))
})();
var state__18798__auto__ = (function (){var statearr_22359 = f__18797__auto__.call(null);
(statearr_22359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___22364);

return statearr_22359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___22364,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22377 = [];
var len__17829__auto___22380 = arguments.length;
var i__17830__auto___22381 = (0);
while(true){
if((i__17830__auto___22381 < len__17829__auto___22380)){
args22377.push((arguments[i__17830__auto___22381]));

var G__22382 = (i__17830__auto___22381 + (1));
i__17830__auto___22381 = G__22382;
continue;
} else {
}
break;
}

var G__22379 = args22377.length;
switch (G__22379) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22377.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto__){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto__){
return (function (state_22549){
var state_val_22550 = (state_22549[(1)]);
if((state_val_22550 === (7))){
var inst_22545 = (state_22549[(2)]);
var state_22549__$1 = state_22549;
var statearr_22551_22592 = state_22549__$1;
(statearr_22551_22592[(2)] = inst_22545);

(statearr_22551_22592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22550 === (20))){
var inst_22515 = (state_22549[(7)]);
var inst_22526 = (state_22549[(2)]);
var inst_22527 = cljs.core.next.call(null,inst_22515);
var inst_22501 = inst_22527;
var inst_22502 = null;
var inst_22503 = (0);
var inst_22504 = (0);
var state_22549__$1 = (function (){var statearr_22552 = state_22549;
(statearr_22552[(8)] = inst_22526);

(statearr_22552[(9)] = inst_22504);

(statearr_22552[(10)] = inst_22502);

(statearr_22552[(11)] = inst_22501);

(statearr_22552[(12)] = inst_22503);

return statearr_22552;
})();
var statearr_22553_22593 = state_22549__$1;
(statearr_22553_22593[(2)] = null);

(statearr_22553_22593[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22550 === (1))){
var state_22549__$1 = state_22549;
var statearr_22554_22594 = state_22549__$1;
(statearr_22554_22594[(2)] = null);

(statearr_22554_22594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22550 === (4))){
var inst_22490 = (state_22549[(13)]);
var inst_22490__$1 = (state_22549[(2)]);
var inst_22491 = (inst_22490__$1 == null);
var state_22549__$1 = (function (){var statearr_22555 = state_22549;
(statearr_22555[(13)] = inst_22490__$1);

return statearr_22555;
})();
if(cljs.core.truth_(inst_22491)){
var statearr_22556_22595 = state_22549__$1;
(statearr_22556_22595[(1)] = (5));

} else {
var statearr_22557_22596 = state_22549__$1;
(statearr_22557_22596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22550 === (15))){
var state_22549__$1 = state_22549;
var statearr_22561_22597 = state_22549__$1;
(statearr_22561_22597[(2)] = null);

(statearr_22561_22597[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22550 === (21))){
var state_22549__$1 = state_22549;
var statearr_22562_22598 = state_22549__$1;
(statearr_22562_22598[(2)] = null);

(statearr_22562_22598[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22550 === (13))){
var inst_22504 = (state_22549[(9)]);
var inst_22502 = (state_22549[(10)]);
var inst_22501 = (state_22549[(11)]);
var inst_22503 = (state_22549[(12)]);
var inst_22511 = (state_22549[(2)]);
var inst_22512 = (inst_22504 + (1));
var tmp22558 = inst_22502;
var tmp22559 = inst_22501;
var tmp22560 = inst_22503;
var inst_22501__$1 = tmp22559;
var inst_22502__$1 = tmp22558;
var inst_22503__$1 = tmp22560;
var inst_22504__$1 = inst_22512;
var state_22549__$1 = (function (){var statearr_22563 = state_22549;
(statearr_22563[(14)] = inst_22511);

(statearr_22563[(9)] = inst_22504__$1);

(statearr_22563[(10)] = inst_22502__$1);

(statearr_22563[(11)] = inst_22501__$1);

(statearr_22563[(12)] = inst_22503__$1);

return statearr_22563;
})();
var statearr_22564_22599 = state_22549__$1;
(statearr_22564_22599[(2)] = null);

(statearr_22564_22599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22550 === (22))){
var state_22549__$1 = state_22549;
var statearr_22565_22600 = state_22549__$1;
(statearr_22565_22600[(2)] = null);

(statearr_22565_22600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22550 === (6))){
var inst_22490 = (state_22549[(13)]);
var inst_22499 = f.call(null,inst_22490);
var inst_22500 = cljs.core.seq.call(null,inst_22499);
var inst_22501 = inst_22500;
var inst_22502 = null;
var inst_22503 = (0);
var inst_22504 = (0);
var state_22549__$1 = (function (){var statearr_22566 = state_22549;
(statearr_22566[(9)] = inst_22504);

(statearr_22566[(10)] = inst_22502);

(statearr_22566[(11)] = inst_22501);

(statearr_22566[(12)] = inst_22503);

return statearr_22566;
})();
var statearr_22567_22601 = state_22549__$1;
(statearr_22567_22601[(2)] = null);

(statearr_22567_22601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22550 === (17))){
var inst_22515 = (state_22549[(7)]);
var inst_22519 = cljs.core.chunk_first.call(null,inst_22515);
var inst_22520 = cljs.core.chunk_rest.call(null,inst_22515);
var inst_22521 = cljs.core.count.call(null,inst_22519);
var inst_22501 = inst_22520;
var inst_22502 = inst_22519;
var inst_22503 = inst_22521;
var inst_22504 = (0);
var state_22549__$1 = (function (){var statearr_22568 = state_22549;
(statearr_22568[(9)] = inst_22504);

(statearr_22568[(10)] = inst_22502);

(statearr_22568[(11)] = inst_22501);

(statearr_22568[(12)] = inst_22503);

return statearr_22568;
})();
var statearr_22569_22602 = state_22549__$1;
(statearr_22569_22602[(2)] = null);

(statearr_22569_22602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22550 === (3))){
var inst_22547 = (state_22549[(2)]);
var state_22549__$1 = state_22549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22549__$1,inst_22547);
} else {
if((state_val_22550 === (12))){
var inst_22535 = (state_22549[(2)]);
var state_22549__$1 = state_22549;
var statearr_22570_22603 = state_22549__$1;
(statearr_22570_22603[(2)] = inst_22535);

(statearr_22570_22603[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22550 === (2))){
var state_22549__$1 = state_22549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22549__$1,(4),in$);
} else {
if((state_val_22550 === (23))){
var inst_22543 = (state_22549[(2)]);
var state_22549__$1 = state_22549;
var statearr_22571_22604 = state_22549__$1;
(statearr_22571_22604[(2)] = inst_22543);

(statearr_22571_22604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22550 === (19))){
var inst_22530 = (state_22549[(2)]);
var state_22549__$1 = state_22549;
var statearr_22572_22605 = state_22549__$1;
(statearr_22572_22605[(2)] = inst_22530);

(statearr_22572_22605[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22550 === (11))){
var inst_22515 = (state_22549[(7)]);
var inst_22501 = (state_22549[(11)]);
var inst_22515__$1 = cljs.core.seq.call(null,inst_22501);
var state_22549__$1 = (function (){var statearr_22573 = state_22549;
(statearr_22573[(7)] = inst_22515__$1);

return statearr_22573;
})();
if(inst_22515__$1){
var statearr_22574_22606 = state_22549__$1;
(statearr_22574_22606[(1)] = (14));

} else {
var statearr_22575_22607 = state_22549__$1;
(statearr_22575_22607[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22550 === (9))){
var inst_22537 = (state_22549[(2)]);
var inst_22538 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22549__$1 = (function (){var statearr_22576 = state_22549;
(statearr_22576[(15)] = inst_22537);

return statearr_22576;
})();
if(cljs.core.truth_(inst_22538)){
var statearr_22577_22608 = state_22549__$1;
(statearr_22577_22608[(1)] = (21));

} else {
var statearr_22578_22609 = state_22549__$1;
(statearr_22578_22609[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22550 === (5))){
var inst_22493 = cljs.core.async.close_BANG_.call(null,out);
var state_22549__$1 = state_22549;
var statearr_22579_22610 = state_22549__$1;
(statearr_22579_22610[(2)] = inst_22493);

(statearr_22579_22610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22550 === (14))){
var inst_22515 = (state_22549[(7)]);
var inst_22517 = cljs.core.chunked_seq_QMARK_.call(null,inst_22515);
var state_22549__$1 = state_22549;
if(inst_22517){
var statearr_22580_22611 = state_22549__$1;
(statearr_22580_22611[(1)] = (17));

} else {
var statearr_22581_22612 = state_22549__$1;
(statearr_22581_22612[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22550 === (16))){
var inst_22533 = (state_22549[(2)]);
var state_22549__$1 = state_22549;
var statearr_22582_22613 = state_22549__$1;
(statearr_22582_22613[(2)] = inst_22533);

(statearr_22582_22613[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22550 === (10))){
var inst_22504 = (state_22549[(9)]);
var inst_22502 = (state_22549[(10)]);
var inst_22509 = cljs.core._nth.call(null,inst_22502,inst_22504);
var state_22549__$1 = state_22549;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22549__$1,(13),out,inst_22509);
} else {
if((state_val_22550 === (18))){
var inst_22515 = (state_22549[(7)]);
var inst_22524 = cljs.core.first.call(null,inst_22515);
var state_22549__$1 = state_22549;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22549__$1,(20),out,inst_22524);
} else {
if((state_val_22550 === (8))){
var inst_22504 = (state_22549[(9)]);
var inst_22503 = (state_22549[(12)]);
var inst_22506 = (inst_22504 < inst_22503);
var inst_22507 = inst_22506;
var state_22549__$1 = state_22549;
if(cljs.core.truth_(inst_22507)){
var statearr_22583_22614 = state_22549__$1;
(statearr_22583_22614[(1)] = (10));

} else {
var statearr_22584_22615 = state_22549__$1;
(statearr_22584_22615[(1)] = (11));

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
});})(c__18796__auto__))
;
return ((function (switch__18775__auto__,c__18796__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18776__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18776__auto____0 = (function (){
var statearr_22588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22588[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18776__auto__);

(statearr_22588[(1)] = (1));

return statearr_22588;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18776__auto____1 = (function (state_22549){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_22549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e22589){if((e22589 instanceof Object)){
var ex__18779__auto__ = e22589;
var statearr_22590_22616 = state_22549;
(statearr_22590_22616[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22617 = state_22549;
state_22549 = G__22617;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18776__auto__ = function(state_22549){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18776__auto____1.call(this,state_22549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18776__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18776__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto__))
})();
var state__18798__auto__ = (function (){var statearr_22591 = f__18797__auto__.call(null);
(statearr_22591[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto__);

return statearr_22591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto__))
);

return c__18796__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args22618 = [];
var len__17829__auto___22621 = arguments.length;
var i__17830__auto___22622 = (0);
while(true){
if((i__17830__auto___22622 < len__17829__auto___22621)){
args22618.push((arguments[i__17830__auto___22622]));

var G__22623 = (i__17830__auto___22622 + (1));
i__17830__auto___22622 = G__22623;
continue;
} else {
}
break;
}

var G__22620 = args22618.length;
switch (G__22620) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22618.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args22625 = [];
var len__17829__auto___22628 = arguments.length;
var i__17830__auto___22629 = (0);
while(true){
if((i__17830__auto___22629 < len__17829__auto___22628)){
args22625.push((arguments[i__17830__auto___22629]));

var G__22630 = (i__17830__auto___22629 + (1));
i__17830__auto___22629 = G__22630;
continue;
} else {
}
break;
}

var G__22627 = args22625.length;
switch (G__22627) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22625.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args22632 = [];
var len__17829__auto___22683 = arguments.length;
var i__17830__auto___22684 = (0);
while(true){
if((i__17830__auto___22684 < len__17829__auto___22683)){
args22632.push((arguments[i__17830__auto___22684]));

var G__22685 = (i__17830__auto___22684 + (1));
i__17830__auto___22684 = G__22685;
continue;
} else {
}
break;
}

var G__22634 = args22632.length;
switch (G__22634) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22632.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18796__auto___22687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___22687,out){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___22687,out){
return (function (state_22658){
var state_val_22659 = (state_22658[(1)]);
if((state_val_22659 === (7))){
var inst_22653 = (state_22658[(2)]);
var state_22658__$1 = state_22658;
var statearr_22660_22688 = state_22658__$1;
(statearr_22660_22688[(2)] = inst_22653);

(statearr_22660_22688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22659 === (1))){
var inst_22635 = null;
var state_22658__$1 = (function (){var statearr_22661 = state_22658;
(statearr_22661[(7)] = inst_22635);

return statearr_22661;
})();
var statearr_22662_22689 = state_22658__$1;
(statearr_22662_22689[(2)] = null);

(statearr_22662_22689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22659 === (4))){
var inst_22638 = (state_22658[(8)]);
var inst_22638__$1 = (state_22658[(2)]);
var inst_22639 = (inst_22638__$1 == null);
var inst_22640 = cljs.core.not.call(null,inst_22639);
var state_22658__$1 = (function (){var statearr_22663 = state_22658;
(statearr_22663[(8)] = inst_22638__$1);

return statearr_22663;
})();
if(inst_22640){
var statearr_22664_22690 = state_22658__$1;
(statearr_22664_22690[(1)] = (5));

} else {
var statearr_22665_22691 = state_22658__$1;
(statearr_22665_22691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22659 === (6))){
var state_22658__$1 = state_22658;
var statearr_22666_22692 = state_22658__$1;
(statearr_22666_22692[(2)] = null);

(statearr_22666_22692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22659 === (3))){
var inst_22655 = (state_22658[(2)]);
var inst_22656 = cljs.core.async.close_BANG_.call(null,out);
var state_22658__$1 = (function (){var statearr_22667 = state_22658;
(statearr_22667[(9)] = inst_22655);

return statearr_22667;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22658__$1,inst_22656);
} else {
if((state_val_22659 === (2))){
var state_22658__$1 = state_22658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22658__$1,(4),ch);
} else {
if((state_val_22659 === (11))){
var inst_22638 = (state_22658[(8)]);
var inst_22647 = (state_22658[(2)]);
var inst_22635 = inst_22638;
var state_22658__$1 = (function (){var statearr_22668 = state_22658;
(statearr_22668[(10)] = inst_22647);

(statearr_22668[(7)] = inst_22635);

return statearr_22668;
})();
var statearr_22669_22693 = state_22658__$1;
(statearr_22669_22693[(2)] = null);

(statearr_22669_22693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22659 === (9))){
var inst_22638 = (state_22658[(8)]);
var state_22658__$1 = state_22658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22658__$1,(11),out,inst_22638);
} else {
if((state_val_22659 === (5))){
var inst_22638 = (state_22658[(8)]);
var inst_22635 = (state_22658[(7)]);
var inst_22642 = cljs.core._EQ_.call(null,inst_22638,inst_22635);
var state_22658__$1 = state_22658;
if(inst_22642){
var statearr_22671_22694 = state_22658__$1;
(statearr_22671_22694[(1)] = (8));

} else {
var statearr_22672_22695 = state_22658__$1;
(statearr_22672_22695[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22659 === (10))){
var inst_22650 = (state_22658[(2)]);
var state_22658__$1 = state_22658;
var statearr_22673_22696 = state_22658__$1;
(statearr_22673_22696[(2)] = inst_22650);

(statearr_22673_22696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22659 === (8))){
var inst_22635 = (state_22658[(7)]);
var tmp22670 = inst_22635;
var inst_22635__$1 = tmp22670;
var state_22658__$1 = (function (){var statearr_22674 = state_22658;
(statearr_22674[(7)] = inst_22635__$1);

return statearr_22674;
})();
var statearr_22675_22697 = state_22658__$1;
(statearr_22675_22697[(2)] = null);

(statearr_22675_22697[(1)] = (2));


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
});})(c__18796__auto___22687,out))
;
return ((function (switch__18775__auto__,c__18796__auto___22687,out){
return (function() {
var cljs$core$async$state_machine__18776__auto__ = null;
var cljs$core$async$state_machine__18776__auto____0 = (function (){
var statearr_22679 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22679[(0)] = cljs$core$async$state_machine__18776__auto__);

(statearr_22679[(1)] = (1));

return statearr_22679;
});
var cljs$core$async$state_machine__18776__auto____1 = (function (state_22658){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_22658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e22680){if((e22680 instanceof Object)){
var ex__18779__auto__ = e22680;
var statearr_22681_22698 = state_22658;
(statearr_22681_22698[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22699 = state_22658;
state_22658 = G__22699;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$state_machine__18776__auto__ = function(state_22658){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18776__auto____1.call(this,state_22658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18776__auto____0;
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18776__auto____1;
return cljs$core$async$state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___22687,out))
})();
var state__18798__auto__ = (function (){var statearr_22682 = f__18797__auto__.call(null);
(statearr_22682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___22687);

return statearr_22682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___22687,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args22700 = [];
var len__17829__auto___22770 = arguments.length;
var i__17830__auto___22771 = (0);
while(true){
if((i__17830__auto___22771 < len__17829__auto___22770)){
args22700.push((arguments[i__17830__auto___22771]));

var G__22772 = (i__17830__auto___22771 + (1));
i__17830__auto___22771 = G__22772;
continue;
} else {
}
break;
}

var G__22702 = args22700.length;
switch (G__22702) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22700.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18796__auto___22774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___22774,out){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___22774,out){
return (function (state_22740){
var state_val_22741 = (state_22740[(1)]);
if((state_val_22741 === (7))){
var inst_22736 = (state_22740[(2)]);
var state_22740__$1 = state_22740;
var statearr_22742_22775 = state_22740__$1;
(statearr_22742_22775[(2)] = inst_22736);

(statearr_22742_22775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22741 === (1))){
var inst_22703 = (new Array(n));
var inst_22704 = inst_22703;
var inst_22705 = (0);
var state_22740__$1 = (function (){var statearr_22743 = state_22740;
(statearr_22743[(7)] = inst_22704);

(statearr_22743[(8)] = inst_22705);

return statearr_22743;
})();
var statearr_22744_22776 = state_22740__$1;
(statearr_22744_22776[(2)] = null);

(statearr_22744_22776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22741 === (4))){
var inst_22708 = (state_22740[(9)]);
var inst_22708__$1 = (state_22740[(2)]);
var inst_22709 = (inst_22708__$1 == null);
var inst_22710 = cljs.core.not.call(null,inst_22709);
var state_22740__$1 = (function (){var statearr_22745 = state_22740;
(statearr_22745[(9)] = inst_22708__$1);

return statearr_22745;
})();
if(inst_22710){
var statearr_22746_22777 = state_22740__$1;
(statearr_22746_22777[(1)] = (5));

} else {
var statearr_22747_22778 = state_22740__$1;
(statearr_22747_22778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22741 === (15))){
var inst_22730 = (state_22740[(2)]);
var state_22740__$1 = state_22740;
var statearr_22748_22779 = state_22740__$1;
(statearr_22748_22779[(2)] = inst_22730);

(statearr_22748_22779[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22741 === (13))){
var state_22740__$1 = state_22740;
var statearr_22749_22780 = state_22740__$1;
(statearr_22749_22780[(2)] = null);

(statearr_22749_22780[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22741 === (6))){
var inst_22705 = (state_22740[(8)]);
var inst_22726 = (inst_22705 > (0));
var state_22740__$1 = state_22740;
if(cljs.core.truth_(inst_22726)){
var statearr_22750_22781 = state_22740__$1;
(statearr_22750_22781[(1)] = (12));

} else {
var statearr_22751_22782 = state_22740__$1;
(statearr_22751_22782[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22741 === (3))){
var inst_22738 = (state_22740[(2)]);
var state_22740__$1 = state_22740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22740__$1,inst_22738);
} else {
if((state_val_22741 === (12))){
var inst_22704 = (state_22740[(7)]);
var inst_22728 = cljs.core.vec.call(null,inst_22704);
var state_22740__$1 = state_22740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22740__$1,(15),out,inst_22728);
} else {
if((state_val_22741 === (2))){
var state_22740__$1 = state_22740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22740__$1,(4),ch);
} else {
if((state_val_22741 === (11))){
var inst_22720 = (state_22740[(2)]);
var inst_22721 = (new Array(n));
var inst_22704 = inst_22721;
var inst_22705 = (0);
var state_22740__$1 = (function (){var statearr_22752 = state_22740;
(statearr_22752[(7)] = inst_22704);

(statearr_22752[(10)] = inst_22720);

(statearr_22752[(8)] = inst_22705);

return statearr_22752;
})();
var statearr_22753_22783 = state_22740__$1;
(statearr_22753_22783[(2)] = null);

(statearr_22753_22783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22741 === (9))){
var inst_22704 = (state_22740[(7)]);
var inst_22718 = cljs.core.vec.call(null,inst_22704);
var state_22740__$1 = state_22740;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22740__$1,(11),out,inst_22718);
} else {
if((state_val_22741 === (5))){
var inst_22704 = (state_22740[(7)]);
var inst_22713 = (state_22740[(11)]);
var inst_22705 = (state_22740[(8)]);
var inst_22708 = (state_22740[(9)]);
var inst_22712 = (inst_22704[inst_22705] = inst_22708);
var inst_22713__$1 = (inst_22705 + (1));
var inst_22714 = (inst_22713__$1 < n);
var state_22740__$1 = (function (){var statearr_22754 = state_22740;
(statearr_22754[(11)] = inst_22713__$1);

(statearr_22754[(12)] = inst_22712);

return statearr_22754;
})();
if(cljs.core.truth_(inst_22714)){
var statearr_22755_22784 = state_22740__$1;
(statearr_22755_22784[(1)] = (8));

} else {
var statearr_22756_22785 = state_22740__$1;
(statearr_22756_22785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22741 === (14))){
var inst_22733 = (state_22740[(2)]);
var inst_22734 = cljs.core.async.close_BANG_.call(null,out);
var state_22740__$1 = (function (){var statearr_22758 = state_22740;
(statearr_22758[(13)] = inst_22733);

return statearr_22758;
})();
var statearr_22759_22786 = state_22740__$1;
(statearr_22759_22786[(2)] = inst_22734);

(statearr_22759_22786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22741 === (10))){
var inst_22724 = (state_22740[(2)]);
var state_22740__$1 = state_22740;
var statearr_22760_22787 = state_22740__$1;
(statearr_22760_22787[(2)] = inst_22724);

(statearr_22760_22787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22741 === (8))){
var inst_22704 = (state_22740[(7)]);
var inst_22713 = (state_22740[(11)]);
var tmp22757 = inst_22704;
var inst_22704__$1 = tmp22757;
var inst_22705 = inst_22713;
var state_22740__$1 = (function (){var statearr_22761 = state_22740;
(statearr_22761[(7)] = inst_22704__$1);

(statearr_22761[(8)] = inst_22705);

return statearr_22761;
})();
var statearr_22762_22788 = state_22740__$1;
(statearr_22762_22788[(2)] = null);

(statearr_22762_22788[(1)] = (2));


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
});})(c__18796__auto___22774,out))
;
return ((function (switch__18775__auto__,c__18796__auto___22774,out){
return (function() {
var cljs$core$async$state_machine__18776__auto__ = null;
var cljs$core$async$state_machine__18776__auto____0 = (function (){
var statearr_22766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22766[(0)] = cljs$core$async$state_machine__18776__auto__);

(statearr_22766[(1)] = (1));

return statearr_22766;
});
var cljs$core$async$state_machine__18776__auto____1 = (function (state_22740){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_22740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e22767){if((e22767 instanceof Object)){
var ex__18779__auto__ = e22767;
var statearr_22768_22789 = state_22740;
(statearr_22768_22789[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22790 = state_22740;
state_22740 = G__22790;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$state_machine__18776__auto__ = function(state_22740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18776__auto____1.call(this,state_22740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18776__auto____0;
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18776__auto____1;
return cljs$core$async$state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___22774,out))
})();
var state__18798__auto__ = (function (){var statearr_22769 = f__18797__auto__.call(null);
(statearr_22769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___22774);

return statearr_22769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___22774,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args22791 = [];
var len__17829__auto___22865 = arguments.length;
var i__17830__auto___22866 = (0);
while(true){
if((i__17830__auto___22866 < len__17829__auto___22865)){
args22791.push((arguments[i__17830__auto___22866]));

var G__22867 = (i__17830__auto___22866 + (1));
i__17830__auto___22866 = G__22867;
continue;
} else {
}
break;
}

var G__22793 = args22791.length;
switch (G__22793) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22791.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18796__auto___22869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18796__auto___22869,out){
return (function (){
var f__18797__auto__ = (function (){var switch__18775__auto__ = ((function (c__18796__auto___22869,out){
return (function (state_22835){
var state_val_22836 = (state_22835[(1)]);
if((state_val_22836 === (7))){
var inst_22831 = (state_22835[(2)]);
var state_22835__$1 = state_22835;
var statearr_22837_22870 = state_22835__$1;
(statearr_22837_22870[(2)] = inst_22831);

(statearr_22837_22870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22836 === (1))){
var inst_22794 = [];
var inst_22795 = inst_22794;
var inst_22796 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22835__$1 = (function (){var statearr_22838 = state_22835;
(statearr_22838[(7)] = inst_22795);

(statearr_22838[(8)] = inst_22796);

return statearr_22838;
})();
var statearr_22839_22871 = state_22835__$1;
(statearr_22839_22871[(2)] = null);

(statearr_22839_22871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22836 === (4))){
var inst_22799 = (state_22835[(9)]);
var inst_22799__$1 = (state_22835[(2)]);
var inst_22800 = (inst_22799__$1 == null);
var inst_22801 = cljs.core.not.call(null,inst_22800);
var state_22835__$1 = (function (){var statearr_22840 = state_22835;
(statearr_22840[(9)] = inst_22799__$1);

return statearr_22840;
})();
if(inst_22801){
var statearr_22841_22872 = state_22835__$1;
(statearr_22841_22872[(1)] = (5));

} else {
var statearr_22842_22873 = state_22835__$1;
(statearr_22842_22873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22836 === (15))){
var inst_22825 = (state_22835[(2)]);
var state_22835__$1 = state_22835;
var statearr_22843_22874 = state_22835__$1;
(statearr_22843_22874[(2)] = inst_22825);

(statearr_22843_22874[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22836 === (13))){
var state_22835__$1 = state_22835;
var statearr_22844_22875 = state_22835__$1;
(statearr_22844_22875[(2)] = null);

(statearr_22844_22875[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22836 === (6))){
var inst_22795 = (state_22835[(7)]);
var inst_22820 = inst_22795.length;
var inst_22821 = (inst_22820 > (0));
var state_22835__$1 = state_22835;
if(cljs.core.truth_(inst_22821)){
var statearr_22845_22876 = state_22835__$1;
(statearr_22845_22876[(1)] = (12));

} else {
var statearr_22846_22877 = state_22835__$1;
(statearr_22846_22877[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22836 === (3))){
var inst_22833 = (state_22835[(2)]);
var state_22835__$1 = state_22835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22835__$1,inst_22833);
} else {
if((state_val_22836 === (12))){
var inst_22795 = (state_22835[(7)]);
var inst_22823 = cljs.core.vec.call(null,inst_22795);
var state_22835__$1 = state_22835;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22835__$1,(15),out,inst_22823);
} else {
if((state_val_22836 === (2))){
var state_22835__$1 = state_22835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22835__$1,(4),ch);
} else {
if((state_val_22836 === (11))){
var inst_22799 = (state_22835[(9)]);
var inst_22803 = (state_22835[(10)]);
var inst_22813 = (state_22835[(2)]);
var inst_22814 = [];
var inst_22815 = inst_22814.push(inst_22799);
var inst_22795 = inst_22814;
var inst_22796 = inst_22803;
var state_22835__$1 = (function (){var statearr_22847 = state_22835;
(statearr_22847[(11)] = inst_22813);

(statearr_22847[(7)] = inst_22795);

(statearr_22847[(12)] = inst_22815);

(statearr_22847[(8)] = inst_22796);

return statearr_22847;
})();
var statearr_22848_22878 = state_22835__$1;
(statearr_22848_22878[(2)] = null);

(statearr_22848_22878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22836 === (9))){
var inst_22795 = (state_22835[(7)]);
var inst_22811 = cljs.core.vec.call(null,inst_22795);
var state_22835__$1 = state_22835;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22835__$1,(11),out,inst_22811);
} else {
if((state_val_22836 === (5))){
var inst_22799 = (state_22835[(9)]);
var inst_22803 = (state_22835[(10)]);
var inst_22796 = (state_22835[(8)]);
var inst_22803__$1 = f.call(null,inst_22799);
var inst_22804 = cljs.core._EQ_.call(null,inst_22803__$1,inst_22796);
var inst_22805 = cljs.core.keyword_identical_QMARK_.call(null,inst_22796,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22806 = (inst_22804) || (inst_22805);
var state_22835__$1 = (function (){var statearr_22849 = state_22835;
(statearr_22849[(10)] = inst_22803__$1);

return statearr_22849;
})();
if(cljs.core.truth_(inst_22806)){
var statearr_22850_22879 = state_22835__$1;
(statearr_22850_22879[(1)] = (8));

} else {
var statearr_22851_22880 = state_22835__$1;
(statearr_22851_22880[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22836 === (14))){
var inst_22828 = (state_22835[(2)]);
var inst_22829 = cljs.core.async.close_BANG_.call(null,out);
var state_22835__$1 = (function (){var statearr_22853 = state_22835;
(statearr_22853[(13)] = inst_22828);

return statearr_22853;
})();
var statearr_22854_22881 = state_22835__$1;
(statearr_22854_22881[(2)] = inst_22829);

(statearr_22854_22881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22836 === (10))){
var inst_22818 = (state_22835[(2)]);
var state_22835__$1 = state_22835;
var statearr_22855_22882 = state_22835__$1;
(statearr_22855_22882[(2)] = inst_22818);

(statearr_22855_22882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22836 === (8))){
var inst_22799 = (state_22835[(9)]);
var inst_22795 = (state_22835[(7)]);
var inst_22803 = (state_22835[(10)]);
var inst_22808 = inst_22795.push(inst_22799);
var tmp22852 = inst_22795;
var inst_22795__$1 = tmp22852;
var inst_22796 = inst_22803;
var state_22835__$1 = (function (){var statearr_22856 = state_22835;
(statearr_22856[(14)] = inst_22808);

(statearr_22856[(7)] = inst_22795__$1);

(statearr_22856[(8)] = inst_22796);

return statearr_22856;
})();
var statearr_22857_22883 = state_22835__$1;
(statearr_22857_22883[(2)] = null);

(statearr_22857_22883[(1)] = (2));


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
});})(c__18796__auto___22869,out))
;
return ((function (switch__18775__auto__,c__18796__auto___22869,out){
return (function() {
var cljs$core$async$state_machine__18776__auto__ = null;
var cljs$core$async$state_machine__18776__auto____0 = (function (){
var statearr_22861 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22861[(0)] = cljs$core$async$state_machine__18776__auto__);

(statearr_22861[(1)] = (1));

return statearr_22861;
});
var cljs$core$async$state_machine__18776__auto____1 = (function (state_22835){
while(true){
var ret_value__18777__auto__ = (function (){try{while(true){
var result__18778__auto__ = switch__18775__auto__.call(null,state_22835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18778__auto__;
}
break;
}
}catch (e22862){if((e22862 instanceof Object)){
var ex__18779__auto__ = e22862;
var statearr_22863_22884 = state_22835;
(statearr_22863_22884[(5)] = ex__18779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22885 = state_22835;
state_22835 = G__22885;
continue;
} else {
return ret_value__18777__auto__;
}
break;
}
});
cljs$core$async$state_machine__18776__auto__ = function(state_22835){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18776__auto____1.call(this,state_22835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18776__auto____0;
cljs$core$async$state_machine__18776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18776__auto____1;
return cljs$core$async$state_machine__18776__auto__;
})()
;})(switch__18775__auto__,c__18796__auto___22869,out))
})();
var state__18798__auto__ = (function (){var statearr_22864 = f__18797__auto__.call(null);
(statearr_22864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18796__auto___22869);

return statearr_22864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18798__auto__);
});})(c__18796__auto___22869,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map