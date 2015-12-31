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
var args22115 = [];
var len__17830__auto___22121 = arguments.length;
var i__17831__auto___22122 = (0);
while(true){
if((i__17831__auto___22122 < len__17830__auto___22121)){
args22115.push((arguments[i__17831__auto___22122]));

var G__22123 = (i__17831__auto___22122 + (1));
i__17831__auto___22122 = G__22123;
continue;
} else {
}
break;
}

var G__22117 = args22115.length;
switch (G__22117) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22115.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22118 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22118 = (function (f,blockable,meta22119){
this.f = f;
this.blockable = blockable;
this.meta22119 = meta22119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22120,meta22119__$1){
var self__ = this;
var _22120__$1 = this;
return (new cljs.core.async.t_cljs$core$async22118(self__.f,self__.blockable,meta22119__$1));
});

cljs.core.async.t_cljs$core$async22118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22120){
var self__ = this;
var _22120__$1 = this;
return self__.meta22119;
});

cljs.core.async.t_cljs$core$async22118.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22118.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22118.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22118.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22118.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22119","meta22119",-64665474,null)], null);
});

cljs.core.async.t_cljs$core$async22118.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22118.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22118";

cljs.core.async.t_cljs$core$async22118.cljs$lang$ctorPrWriter = (function (this__17370__auto__,writer__17371__auto__,opt__17372__auto__){
return cljs.core._write.call(null,writer__17371__auto__,"cljs.core.async/t_cljs$core$async22118");
});

cljs.core.async.__GT_t_cljs$core$async22118 = (function cljs$core$async$__GT_t_cljs$core$async22118(f__$1,blockable__$1,meta22119){
return (new cljs.core.async.t_cljs$core$async22118(f__$1,blockable__$1,meta22119));
});

}

return (new cljs.core.async.t_cljs$core$async22118(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args22127 = [];
var len__17830__auto___22130 = arguments.length;
var i__17831__auto___22131 = (0);
while(true){
if((i__17831__auto___22131 < len__17830__auto___22130)){
args22127.push((arguments[i__17831__auto___22131]));

var G__22132 = (i__17831__auto___22131 + (1));
i__17831__auto___22131 = G__22132;
continue;
} else {
}
break;
}

var G__22129 = args22127.length;
switch (G__22129) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22127.length)].join('')));

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
var args22134 = [];
var len__17830__auto___22137 = arguments.length;
var i__17831__auto___22138 = (0);
while(true){
if((i__17831__auto___22138 < len__17830__auto___22137)){
args22134.push((arguments[i__17831__auto___22138]));

var G__22139 = (i__17831__auto___22138 + (1));
i__17831__auto___22138 = G__22139;
continue;
} else {
}
break;
}

var G__22136 = args22134.length;
switch (G__22136) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22134.length)].join('')));

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
var args22141 = [];
var len__17830__auto___22144 = arguments.length;
var i__17831__auto___22145 = (0);
while(true){
if((i__17831__auto___22145 < len__17830__auto___22144)){
args22141.push((arguments[i__17831__auto___22145]));

var G__22146 = (i__17831__auto___22145 + (1));
i__17831__auto___22145 = G__22146;
continue;
} else {
}
break;
}

var G__22143 = args22141.length;
switch (G__22143) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22141.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22148 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22148);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22148,ret){
return (function (){
return fn1.call(null,val_22148);
});})(val_22148,ret))
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
var args22149 = [];
var len__17830__auto___22152 = arguments.length;
var i__17831__auto___22153 = (0);
while(true){
if((i__17831__auto___22153 < len__17830__auto___22152)){
args22149.push((arguments[i__17831__auto___22153]));

var G__22154 = (i__17831__auto___22153 + (1));
i__17831__auto___22153 = G__22154;
continue;
} else {
}
break;
}

var G__22151 = args22149.length;
switch (G__22151) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22149.length)].join('')));

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
var n__17675__auto___22156 = n;
var x_22157 = (0);
while(true){
if((x_22157 < n__17675__auto___22156)){
(a[x_22157] = (0));

var G__22158 = (x_22157 + (1));
x_22157 = G__22158;
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

var G__22159 = (i + (1));
i = G__22159;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22163 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22163 = (function (alt_flag,flag,meta22164){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22164 = meta22164;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22165,meta22164__$1){
var self__ = this;
var _22165__$1 = this;
return (new cljs.core.async.t_cljs$core$async22163(self__.alt_flag,self__.flag,meta22164__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22163.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22165){
var self__ = this;
var _22165__$1 = this;
return self__.meta22164;
});})(flag))
;

cljs.core.async.t_cljs$core$async22163.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22163.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22163.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22163.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22163.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22164","meta22164",44135357,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22163.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22163.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22163";

cljs.core.async.t_cljs$core$async22163.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17370__auto__,writer__17371__auto__,opt__17372__auto__){
return cljs.core._write.call(null,writer__17371__auto__,"cljs.core.async/t_cljs$core$async22163");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22163 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22163(alt_flag__$1,flag__$1,meta22164){
return (new cljs.core.async.t_cljs$core$async22163(alt_flag__$1,flag__$1,meta22164));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22163(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22169 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22169 = (function (alt_handler,flag,cb,meta22170){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22170 = meta22170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22171,meta22170__$1){
var self__ = this;
var _22171__$1 = this;
return (new cljs.core.async.t_cljs$core$async22169(self__.alt_handler,self__.flag,self__.cb,meta22170__$1));
});

cljs.core.async.t_cljs$core$async22169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22171){
var self__ = this;
var _22171__$1 = this;
return self__.meta22170;
});

cljs.core.async.t_cljs$core$async22169.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22169.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22169.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22169.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22169.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22170","meta22170",-1045400475,null)], null);
});

cljs.core.async.t_cljs$core$async22169.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22169.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22169";

cljs.core.async.t_cljs$core$async22169.cljs$lang$ctorPrWriter = (function (this__17370__auto__,writer__17371__auto__,opt__17372__auto__){
return cljs.core._write.call(null,writer__17371__auto__,"cljs.core.async/t_cljs$core$async22169");
});

cljs.core.async.__GT_t_cljs$core$async22169 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22169(alt_handler__$1,flag__$1,cb__$1,meta22170){
return (new cljs.core.async.t_cljs$core$async22169(alt_handler__$1,flag__$1,cb__$1,meta22170));
});

}

return (new cljs.core.async.t_cljs$core$async22169(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22172_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22172_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22173_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22173_SHARP_,port], null));
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
var G__22174 = (i + (1));
i = G__22174;
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
var args__17837__auto__ = [];
var len__17830__auto___22180 = arguments.length;
var i__17831__auto___22181 = (0);
while(true){
if((i__17831__auto___22181 < len__17830__auto___22180)){
args__17837__auto__.push((arguments[i__17831__auto___22181]));

var G__22182 = (i__17831__auto___22181 + (1));
i__17831__auto___22181 = G__22182;
continue;
} else {
}
break;
}

var argseq__17838__auto__ = ((((1) < args__17837__auto__.length))?(new cljs.core.IndexedSeq(args__17837__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17838__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22177){
var map__22178 = p__22177;
var map__22178__$1 = ((((!((map__22178 == null)))?((((map__22178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22178):map__22178);
var opts = map__22178__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22175){
var G__22176 = cljs.core.first.call(null,seq22175);
var seq22175__$1 = cljs.core.next.call(null,seq22175);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22176,seq22175__$1);
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
var args22183 = [];
var len__17830__auto___22233 = arguments.length;
var i__17831__auto___22234 = (0);
while(true){
if((i__17831__auto___22234 < len__17830__auto___22233)){
args22183.push((arguments[i__17831__auto___22234]));

var G__22235 = (i__17831__auto___22234 + (1));
i__17831__auto___22234 = G__22235;
continue;
} else {
}
break;
}

var G__22185 = args22183.length;
switch (G__22185) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22183.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18797__auto___22237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18797__auto___22237){
return (function (){
var f__18798__auto__ = (function (){var switch__18776__auto__ = ((function (c__18797__auto___22237){
return (function (state_22209){
var state_val_22210 = (state_22209[(1)]);
if((state_val_22210 === (7))){
var inst_22205 = (state_22209[(2)]);
var state_22209__$1 = state_22209;
var statearr_22211_22238 = state_22209__$1;
(statearr_22211_22238[(2)] = inst_22205);

(statearr_22211_22238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22210 === (1))){
var state_22209__$1 = state_22209;
var statearr_22212_22239 = state_22209__$1;
(statearr_22212_22239[(2)] = null);

(statearr_22212_22239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22210 === (4))){
var inst_22188 = (state_22209[(7)]);
var inst_22188__$1 = (state_22209[(2)]);
var inst_22189 = (inst_22188__$1 == null);
var state_22209__$1 = (function (){var statearr_22213 = state_22209;
(statearr_22213[(7)] = inst_22188__$1);

return statearr_22213;
})();
if(cljs.core.truth_(inst_22189)){
var statearr_22214_22240 = state_22209__$1;
(statearr_22214_22240[(1)] = (5));

} else {
var statearr_22215_22241 = state_22209__$1;
(statearr_22215_22241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22210 === (13))){
var state_22209__$1 = state_22209;
var statearr_22216_22242 = state_22209__$1;
(statearr_22216_22242[(2)] = null);

(statearr_22216_22242[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22210 === (6))){
var inst_22188 = (state_22209[(7)]);
var state_22209__$1 = state_22209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22209__$1,(11),to,inst_22188);
} else {
if((state_val_22210 === (3))){
var inst_22207 = (state_22209[(2)]);
var state_22209__$1 = state_22209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22209__$1,inst_22207);
} else {
if((state_val_22210 === (12))){
var state_22209__$1 = state_22209;
var statearr_22217_22243 = state_22209__$1;
(statearr_22217_22243[(2)] = null);

(statearr_22217_22243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22210 === (2))){
var state_22209__$1 = state_22209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22209__$1,(4),from);
} else {
if((state_val_22210 === (11))){
var inst_22198 = (state_22209[(2)]);
var state_22209__$1 = state_22209;
if(cljs.core.truth_(inst_22198)){
var statearr_22218_22244 = state_22209__$1;
(statearr_22218_22244[(1)] = (12));

} else {
var statearr_22219_22245 = state_22209__$1;
(statearr_22219_22245[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22210 === (9))){
var state_22209__$1 = state_22209;
var statearr_22220_22246 = state_22209__$1;
(statearr_22220_22246[(2)] = null);

(statearr_22220_22246[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22210 === (5))){
var state_22209__$1 = state_22209;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22221_22247 = state_22209__$1;
(statearr_22221_22247[(1)] = (8));

} else {
var statearr_22222_22248 = state_22209__$1;
(statearr_22222_22248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22210 === (14))){
var inst_22203 = (state_22209[(2)]);
var state_22209__$1 = state_22209;
var statearr_22223_22249 = state_22209__$1;
(statearr_22223_22249[(2)] = inst_22203);

(statearr_22223_22249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22210 === (10))){
var inst_22195 = (state_22209[(2)]);
var state_22209__$1 = state_22209;
var statearr_22224_22250 = state_22209__$1;
(statearr_22224_22250[(2)] = inst_22195);

(statearr_22224_22250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22210 === (8))){
var inst_22192 = cljs.core.async.close_BANG_.call(null,to);
var state_22209__$1 = state_22209;
var statearr_22225_22251 = state_22209__$1;
(statearr_22225_22251[(2)] = inst_22192);

(statearr_22225_22251[(1)] = (10));


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
});})(c__18797__auto___22237))
;
return ((function (switch__18776__auto__,c__18797__auto___22237){
return (function() {
var cljs$core$async$state_machine__18777__auto__ = null;
var cljs$core$async$state_machine__18777__auto____0 = (function (){
var statearr_22229 = [null,null,null,null,null,null,null,null];
(statearr_22229[(0)] = cljs$core$async$state_machine__18777__auto__);

(statearr_22229[(1)] = (1));

return statearr_22229;
});
var cljs$core$async$state_machine__18777__auto____1 = (function (state_22209){
while(true){
var ret_value__18778__auto__ = (function (){try{while(true){
var result__18779__auto__ = switch__18776__auto__.call(null,state_22209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18779__auto__;
}
break;
}
}catch (e22230){if((e22230 instanceof Object)){
var ex__18780__auto__ = e22230;
var statearr_22231_22252 = state_22209;
(statearr_22231_22252[(5)] = ex__18780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22253 = state_22209;
state_22209 = G__22253;
continue;
} else {
return ret_value__18778__auto__;
}
break;
}
});
cljs$core$async$state_machine__18777__auto__ = function(state_22209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18777__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18777__auto____1.call(this,state_22209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18777__auto____0;
cljs$core$async$state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18777__auto____1;
return cljs$core$async$state_machine__18777__auto__;
})()
;})(switch__18776__auto__,c__18797__auto___22237))
})();
var state__18799__auto__ = (function (){var statearr_22232 = f__18798__auto__.call(null);
(statearr_22232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18797__auto___22237);

return statearr_22232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18799__auto__);
});})(c__18797__auto___22237))
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
return (function (p__22437){
var vec__22438 = p__22437;
var v = cljs.core.nth.call(null,vec__22438,(0),null);
var p = cljs.core.nth.call(null,vec__22438,(1),null);
var job = vec__22438;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18797__auto___22620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18797__auto___22620,res,vec__22438,v,p,job,jobs,results){
return (function (){
var f__18798__auto__ = (function (){var switch__18776__auto__ = ((function (c__18797__auto___22620,res,vec__22438,v,p,job,jobs,results){
return (function (state_22443){
var state_val_22444 = (state_22443[(1)]);
if((state_val_22444 === (1))){
var state_22443__$1 = state_22443;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22443__$1,(2),res,v);
} else {
if((state_val_22444 === (2))){
var inst_22440 = (state_22443[(2)]);
var inst_22441 = cljs.core.async.close_BANG_.call(null,res);
var state_22443__$1 = (function (){var statearr_22445 = state_22443;
(statearr_22445[(7)] = inst_22440);

return statearr_22445;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22443__$1,inst_22441);
} else {
return null;
}
}
});})(c__18797__auto___22620,res,vec__22438,v,p,job,jobs,results))
;
return ((function (switch__18776__auto__,c__18797__auto___22620,res,vec__22438,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18777__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18777__auto____0 = (function (){
var statearr_22449 = [null,null,null,null,null,null,null,null];
(statearr_22449[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18777__auto__);

(statearr_22449[(1)] = (1));

return statearr_22449;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18777__auto____1 = (function (state_22443){
while(true){
var ret_value__18778__auto__ = (function (){try{while(true){
var result__18779__auto__ = switch__18776__auto__.call(null,state_22443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18779__auto__;
}
break;
}
}catch (e22450){if((e22450 instanceof Object)){
var ex__18780__auto__ = e22450;
var statearr_22451_22621 = state_22443;
(statearr_22451_22621[(5)] = ex__18780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22622 = state_22443;
state_22443 = G__22622;
continue;
} else {
return ret_value__18778__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18777__auto__ = function(state_22443){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18777__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18777__auto____1.call(this,state_22443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18777__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18777__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18777__auto__;
})()
;})(switch__18776__auto__,c__18797__auto___22620,res,vec__22438,v,p,job,jobs,results))
})();
var state__18799__auto__ = (function (){var statearr_22452 = f__18798__auto__.call(null);
(statearr_22452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18797__auto___22620);

return statearr_22452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18799__auto__);
});})(c__18797__auto___22620,res,vec__22438,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22453){
var vec__22454 = p__22453;
var v = cljs.core.nth.call(null,vec__22454,(0),null);
var p = cljs.core.nth.call(null,vec__22454,(1),null);
var job = vec__22454;
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
var n__17675__auto___22623 = n;
var __22624 = (0);
while(true){
if((__22624 < n__17675__auto___22623)){
var G__22455_22625 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22455_22625) {
case "compute":
var c__18797__auto___22627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22624,c__18797__auto___22627,G__22455_22625,n__17675__auto___22623,jobs,results,process,async){
return (function (){
var f__18798__auto__ = (function (){var switch__18776__auto__ = ((function (__22624,c__18797__auto___22627,G__22455_22625,n__17675__auto___22623,jobs,results,process,async){
return (function (state_22468){
var state_val_22469 = (state_22468[(1)]);
if((state_val_22469 === (1))){
var state_22468__$1 = state_22468;
var statearr_22470_22628 = state_22468__$1;
(statearr_22470_22628[(2)] = null);

(statearr_22470_22628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22469 === (2))){
var state_22468__$1 = state_22468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22468__$1,(4),jobs);
} else {
if((state_val_22469 === (3))){
var inst_22466 = (state_22468[(2)]);
var state_22468__$1 = state_22468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22468__$1,inst_22466);
} else {
if((state_val_22469 === (4))){
var inst_22458 = (state_22468[(2)]);
var inst_22459 = process.call(null,inst_22458);
var state_22468__$1 = state_22468;
if(cljs.core.truth_(inst_22459)){
var statearr_22471_22629 = state_22468__$1;
(statearr_22471_22629[(1)] = (5));

} else {
var statearr_22472_22630 = state_22468__$1;
(statearr_22472_22630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22469 === (5))){
var state_22468__$1 = state_22468;
var statearr_22473_22631 = state_22468__$1;
(statearr_22473_22631[(2)] = null);

(statearr_22473_22631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22469 === (6))){
var state_22468__$1 = state_22468;
var statearr_22474_22632 = state_22468__$1;
(statearr_22474_22632[(2)] = null);

(statearr_22474_22632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22469 === (7))){
var inst_22464 = (state_22468[(2)]);
var state_22468__$1 = state_22468;
var statearr_22475_22633 = state_22468__$1;
(statearr_22475_22633[(2)] = inst_22464);

(statearr_22475_22633[(1)] = (3));


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
});})(__22624,c__18797__auto___22627,G__22455_22625,n__17675__auto___22623,jobs,results,process,async))
;
return ((function (__22624,switch__18776__auto__,c__18797__auto___22627,G__22455_22625,n__17675__auto___22623,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18777__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18777__auto____0 = (function (){
var statearr_22479 = [null,null,null,null,null,null,null];
(statearr_22479[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18777__auto__);

(statearr_22479[(1)] = (1));

return statearr_22479;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18777__auto____1 = (function (state_22468){
while(true){
var ret_value__18778__auto__ = (function (){try{while(true){
var result__18779__auto__ = switch__18776__auto__.call(null,state_22468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18779__auto__;
}
break;
}
}catch (e22480){if((e22480 instanceof Object)){
var ex__18780__auto__ = e22480;
var statearr_22481_22634 = state_22468;
(statearr_22481_22634[(5)] = ex__18780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22635 = state_22468;
state_22468 = G__22635;
continue;
} else {
return ret_value__18778__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18777__auto__ = function(state_22468){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18777__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18777__auto____1.call(this,state_22468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18777__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18777__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18777__auto__;
})()
;})(__22624,switch__18776__auto__,c__18797__auto___22627,G__22455_22625,n__17675__auto___22623,jobs,results,process,async))
})();
var state__18799__auto__ = (function (){var statearr_22482 = f__18798__auto__.call(null);
(statearr_22482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18797__auto___22627);

return statearr_22482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18799__auto__);
});})(__22624,c__18797__auto___22627,G__22455_22625,n__17675__auto___22623,jobs,results,process,async))
);


break;
case "async":
var c__18797__auto___22636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22624,c__18797__auto___22636,G__22455_22625,n__17675__auto___22623,jobs,results,process,async){
return (function (){
var f__18798__auto__ = (function (){var switch__18776__auto__ = ((function (__22624,c__18797__auto___22636,G__22455_22625,n__17675__auto___22623,jobs,results,process,async){
return (function (state_22495){
var state_val_22496 = (state_22495[(1)]);
if((state_val_22496 === (1))){
var state_22495__$1 = state_22495;
var statearr_22497_22637 = state_22495__$1;
(statearr_22497_22637[(2)] = null);

(statearr_22497_22637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22496 === (2))){
var state_22495__$1 = state_22495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22495__$1,(4),jobs);
} else {
if((state_val_22496 === (3))){
var inst_22493 = (state_22495[(2)]);
var state_22495__$1 = state_22495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22495__$1,inst_22493);
} else {
if((state_val_22496 === (4))){
var inst_22485 = (state_22495[(2)]);
var inst_22486 = async.call(null,inst_22485);
var state_22495__$1 = state_22495;
if(cljs.core.truth_(inst_22486)){
var statearr_22498_22638 = state_22495__$1;
(statearr_22498_22638[(1)] = (5));

} else {
var statearr_22499_22639 = state_22495__$1;
(statearr_22499_22639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22496 === (5))){
var state_22495__$1 = state_22495;
var statearr_22500_22640 = state_22495__$1;
(statearr_22500_22640[(2)] = null);

(statearr_22500_22640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22496 === (6))){
var state_22495__$1 = state_22495;
var statearr_22501_22641 = state_22495__$1;
(statearr_22501_22641[(2)] = null);

(statearr_22501_22641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22496 === (7))){
var inst_22491 = (state_22495[(2)]);
var state_22495__$1 = state_22495;
var statearr_22502_22642 = state_22495__$1;
(statearr_22502_22642[(2)] = inst_22491);

(statearr_22502_22642[(1)] = (3));


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
});})(__22624,c__18797__auto___22636,G__22455_22625,n__17675__auto___22623,jobs,results,process,async))
;
return ((function (__22624,switch__18776__auto__,c__18797__auto___22636,G__22455_22625,n__17675__auto___22623,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18777__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18777__auto____0 = (function (){
var statearr_22506 = [null,null,null,null,null,null,null];
(statearr_22506[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18777__auto__);

(statearr_22506[(1)] = (1));

return statearr_22506;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18777__auto____1 = (function (state_22495){
while(true){
var ret_value__18778__auto__ = (function (){try{while(true){
var result__18779__auto__ = switch__18776__auto__.call(null,state_22495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18779__auto__;
}
break;
}
}catch (e22507){if((e22507 instanceof Object)){
var ex__18780__auto__ = e22507;
var statearr_22508_22643 = state_22495;
(statearr_22508_22643[(5)] = ex__18780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22495);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22644 = state_22495;
state_22495 = G__22644;
continue;
} else {
return ret_value__18778__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18777__auto__ = function(state_22495){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18777__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18777__auto____1.call(this,state_22495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18777__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18777__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18777__auto__;
})()
;})(__22624,switch__18776__auto__,c__18797__auto___22636,G__22455_22625,n__17675__auto___22623,jobs,results,process,async))
})();
var state__18799__auto__ = (function (){var statearr_22509 = f__18798__auto__.call(null);
(statearr_22509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18797__auto___22636);

return statearr_22509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18799__auto__);
});})(__22624,c__18797__auto___22636,G__22455_22625,n__17675__auto___22623,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22645 = (__22624 + (1));
__22624 = G__22645;
continue;
} else {
}
break;
}

var c__18797__auto___22646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18797__auto___22646,jobs,results,process,async){
return (function (){
var f__18798__auto__ = (function (){var switch__18776__auto__ = ((function (c__18797__auto___22646,jobs,results,process,async){
return (function (state_22531){
var state_val_22532 = (state_22531[(1)]);
if((state_val_22532 === (1))){
var state_22531__$1 = state_22531;
var statearr_22533_22647 = state_22531__$1;
(statearr_22533_22647[(2)] = null);

(statearr_22533_22647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (2))){
var state_22531__$1 = state_22531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22531__$1,(4),from);
} else {
if((state_val_22532 === (3))){
var inst_22529 = (state_22531[(2)]);
var state_22531__$1 = state_22531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22531__$1,inst_22529);
} else {
if((state_val_22532 === (4))){
var inst_22512 = (state_22531[(7)]);
var inst_22512__$1 = (state_22531[(2)]);
var inst_22513 = (inst_22512__$1 == null);
var state_22531__$1 = (function (){var statearr_22534 = state_22531;
(statearr_22534[(7)] = inst_22512__$1);

return statearr_22534;
})();
if(cljs.core.truth_(inst_22513)){
var statearr_22535_22648 = state_22531__$1;
(statearr_22535_22648[(1)] = (5));

} else {
var statearr_22536_22649 = state_22531__$1;
(statearr_22536_22649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (5))){
var inst_22515 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22531__$1 = state_22531;
var statearr_22537_22650 = state_22531__$1;
(statearr_22537_22650[(2)] = inst_22515);

(statearr_22537_22650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (6))){
var inst_22512 = (state_22531[(7)]);
var inst_22517 = (state_22531[(8)]);
var inst_22517__$1 = cljs.core.async.chan.call(null,(1));
var inst_22518 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22519 = [inst_22512,inst_22517__$1];
var inst_22520 = (new cljs.core.PersistentVector(null,2,(5),inst_22518,inst_22519,null));
var state_22531__$1 = (function (){var statearr_22538 = state_22531;
(statearr_22538[(8)] = inst_22517__$1);

return statearr_22538;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22531__$1,(8),jobs,inst_22520);
} else {
if((state_val_22532 === (7))){
var inst_22527 = (state_22531[(2)]);
var state_22531__$1 = state_22531;
var statearr_22539_22651 = state_22531__$1;
(statearr_22539_22651[(2)] = inst_22527);

(statearr_22539_22651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22532 === (8))){
var inst_22517 = (state_22531[(8)]);
var inst_22522 = (state_22531[(2)]);
var state_22531__$1 = (function (){var statearr_22540 = state_22531;
(statearr_22540[(9)] = inst_22522);

return statearr_22540;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22531__$1,(9),results,inst_22517);
} else {
if((state_val_22532 === (9))){
var inst_22524 = (state_22531[(2)]);
var state_22531__$1 = (function (){var statearr_22541 = state_22531;
(statearr_22541[(10)] = inst_22524);

return statearr_22541;
})();
var statearr_22542_22652 = state_22531__$1;
(statearr_22542_22652[(2)] = null);

(statearr_22542_22652[(1)] = (2));


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
});})(c__18797__auto___22646,jobs,results,process,async))
;
return ((function (switch__18776__auto__,c__18797__auto___22646,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18777__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18777__auto____0 = (function (){
var statearr_22546 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22546[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18777__auto__);

(statearr_22546[(1)] = (1));

return statearr_22546;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18777__auto____1 = (function (state_22531){
while(true){
var ret_value__18778__auto__ = (function (){try{while(true){
var result__18779__auto__ = switch__18776__auto__.call(null,state_22531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18779__auto__;
}
break;
}
}catch (e22547){if((e22547 instanceof Object)){
var ex__18780__auto__ = e22547;
var statearr_22548_22653 = state_22531;
(statearr_22548_22653[(5)] = ex__18780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22654 = state_22531;
state_22531 = G__22654;
continue;
} else {
return ret_value__18778__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18777__auto__ = function(state_22531){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18777__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18777__auto____1.call(this,state_22531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18777__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18777__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18777__auto__;
})()
;})(switch__18776__auto__,c__18797__auto___22646,jobs,results,process,async))
})();
var state__18799__auto__ = (function (){var statearr_22549 = f__18798__auto__.call(null);
(statearr_22549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18797__auto___22646);

return statearr_22549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18799__auto__);
});})(c__18797__auto___22646,jobs,results,process,async))
);


var c__18797__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18797__auto__,jobs,results,process,async){
return (function (){
var f__18798__auto__ = (function (){var switch__18776__auto__ = ((function (c__18797__auto__,jobs,results,process,async){
return (function (state_22587){
var state_val_22588 = (state_22587[(1)]);
if((state_val_22588 === (7))){
var inst_22583 = (state_22587[(2)]);
var state_22587__$1 = state_22587;
var statearr_22589_22655 = state_22587__$1;
(statearr_22589_22655[(2)] = inst_22583);

(statearr_22589_22655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22588 === (20))){
var state_22587__$1 = state_22587;
var statearr_22590_22656 = state_22587__$1;
(statearr_22590_22656[(2)] = null);

(statearr_22590_22656[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22588 === (1))){
var state_22587__$1 = state_22587;
var statearr_22591_22657 = state_22587__$1;
(statearr_22591_22657[(2)] = null);

(statearr_22591_22657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22588 === (4))){
var inst_22552 = (state_22587[(7)]);
var inst_22552__$1 = (state_22587[(2)]);
var inst_22553 = (inst_22552__$1 == null);
var state_22587__$1 = (function (){var statearr_22592 = state_22587;
(statearr_22592[(7)] = inst_22552__$1);

return statearr_22592;
})();
if(cljs.core.truth_(inst_22553)){
var statearr_22593_22658 = state_22587__$1;
(statearr_22593_22658[(1)] = (5));

} else {
var statearr_22594_22659 = state_22587__$1;
(statearr_22594_22659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22588 === (15))){
var inst_22565 = (state_22587[(8)]);
var state_22587__$1 = state_22587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22587__$1,(18),to,inst_22565);
} else {
if((state_val_22588 === (21))){
var inst_22578 = (state_22587[(2)]);
var state_22587__$1 = state_22587;
var statearr_22595_22660 = state_22587__$1;
(statearr_22595_22660[(2)] = inst_22578);

(statearr_22595_22660[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22588 === (13))){
var inst_22580 = (state_22587[(2)]);
var state_22587__$1 = (function (){var statearr_22596 = state_22587;
(statearr_22596[(9)] = inst_22580);

return statearr_22596;
})();
var statearr_22597_22661 = state_22587__$1;
(statearr_22597_22661[(2)] = null);

(statearr_22597_22661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22588 === (6))){
var inst_22552 = (state_22587[(7)]);
var state_22587__$1 = state_22587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22587__$1,(11),inst_22552);
} else {
if((state_val_22588 === (17))){
var inst_22573 = (state_22587[(2)]);
var state_22587__$1 = state_22587;
if(cljs.core.truth_(inst_22573)){
var statearr_22598_22662 = state_22587__$1;
(statearr_22598_22662[(1)] = (19));

} else {
var statearr_22599_22663 = state_22587__$1;
(statearr_22599_22663[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22588 === (3))){
var inst_22585 = (state_22587[(2)]);
var state_22587__$1 = state_22587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22587__$1,inst_22585);
} else {
if((state_val_22588 === (12))){
var inst_22562 = (state_22587[(10)]);
var state_22587__$1 = state_22587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22587__$1,(14),inst_22562);
} else {
if((state_val_22588 === (2))){
var state_22587__$1 = state_22587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22587__$1,(4),results);
} else {
if((state_val_22588 === (19))){
var state_22587__$1 = state_22587;
var statearr_22600_22664 = state_22587__$1;
(statearr_22600_22664[(2)] = null);

(statearr_22600_22664[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22588 === (11))){
var inst_22562 = (state_22587[(2)]);
var state_22587__$1 = (function (){var statearr_22601 = state_22587;
(statearr_22601[(10)] = inst_22562);

return statearr_22601;
})();
var statearr_22602_22665 = state_22587__$1;
(statearr_22602_22665[(2)] = null);

(statearr_22602_22665[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22588 === (9))){
var state_22587__$1 = state_22587;
var statearr_22603_22666 = state_22587__$1;
(statearr_22603_22666[(2)] = null);

(statearr_22603_22666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22588 === (5))){
var state_22587__$1 = state_22587;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22604_22667 = state_22587__$1;
(statearr_22604_22667[(1)] = (8));

} else {
var statearr_22605_22668 = state_22587__$1;
(statearr_22605_22668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22588 === (14))){
var inst_22565 = (state_22587[(8)]);
var inst_22567 = (state_22587[(11)]);
var inst_22565__$1 = (state_22587[(2)]);
var inst_22566 = (inst_22565__$1 == null);
var inst_22567__$1 = cljs.core.not.call(null,inst_22566);
var state_22587__$1 = (function (){var statearr_22606 = state_22587;
(statearr_22606[(8)] = inst_22565__$1);

(statearr_22606[(11)] = inst_22567__$1);

return statearr_22606;
})();
if(inst_22567__$1){
var statearr_22607_22669 = state_22587__$1;
(statearr_22607_22669[(1)] = (15));

} else {
var statearr_22608_22670 = state_22587__$1;
(statearr_22608_22670[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22588 === (16))){
var inst_22567 = (state_22587[(11)]);
var state_22587__$1 = state_22587;
var statearr_22609_22671 = state_22587__$1;
(statearr_22609_22671[(2)] = inst_22567);

(statearr_22609_22671[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22588 === (10))){
var inst_22559 = (state_22587[(2)]);
var state_22587__$1 = state_22587;
var statearr_22610_22672 = state_22587__$1;
(statearr_22610_22672[(2)] = inst_22559);

(statearr_22610_22672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22588 === (18))){
var inst_22570 = (state_22587[(2)]);
var state_22587__$1 = state_22587;
var statearr_22611_22673 = state_22587__$1;
(statearr_22611_22673[(2)] = inst_22570);

(statearr_22611_22673[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22588 === (8))){
var inst_22556 = cljs.core.async.close_BANG_.call(null,to);
var state_22587__$1 = state_22587;
var statearr_22612_22674 = state_22587__$1;
(statearr_22612_22674[(2)] = inst_22556);

(statearr_22612_22674[(1)] = (10));


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
});})(c__18797__auto__,jobs,results,process,async))
;
return ((function (switch__18776__auto__,c__18797__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18777__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18777__auto____0 = (function (){
var statearr_22616 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22616[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18777__auto__);

(statearr_22616[(1)] = (1));

return statearr_22616;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18777__auto____1 = (function (state_22587){
while(true){
var ret_value__18778__auto__ = (function (){try{while(true){
var result__18779__auto__ = switch__18776__auto__.call(null,state_22587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18779__auto__;
}
break;
}
}catch (e22617){if((e22617 instanceof Object)){
var ex__18780__auto__ = e22617;
var statearr_22618_22675 = state_22587;
(statearr_22618_22675[(5)] = ex__18780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22676 = state_22587;
state_22587 = G__22676;
continue;
} else {
return ret_value__18778__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18777__auto__ = function(state_22587){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18777__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18777__auto____1.call(this,state_22587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18777__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18777__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18777__auto__;
})()
;})(switch__18776__auto__,c__18797__auto__,jobs,results,process,async))
})();
var state__18799__auto__ = (function (){var statearr_22619 = f__18798__auto__.call(null);
(statearr_22619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18797__auto__);

return statearr_22619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18799__auto__);
});})(c__18797__auto__,jobs,results,process,async))
);

return c__18797__auto__;
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
var args22677 = [];
var len__17830__auto___22680 = arguments.length;
var i__17831__auto___22681 = (0);
while(true){
if((i__17831__auto___22681 < len__17830__auto___22680)){
args22677.push((arguments[i__17831__auto___22681]));

var G__22682 = (i__17831__auto___22681 + (1));
i__17831__auto___22681 = G__22682;
continue;
} else {
}
break;
}

var G__22679 = args22677.length;
switch (G__22679) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22677.length)].join('')));

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
var args22684 = [];
var len__17830__auto___22687 = arguments.length;
var i__17831__auto___22688 = (0);
while(true){
if((i__17831__auto___22688 < len__17830__auto___22687)){
args22684.push((arguments[i__17831__auto___22688]));

var G__22689 = (i__17831__auto___22688 + (1));
i__17831__auto___22688 = G__22689;
continue;
} else {
}
break;
}

var G__22686 = args22684.length;
switch (G__22686) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22684.length)].join('')));

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
var args22691 = [];
var len__17830__auto___22744 = arguments.length;
var i__17831__auto___22745 = (0);
while(true){
if((i__17831__auto___22745 < len__17830__auto___22744)){
args22691.push((arguments[i__17831__auto___22745]));

var G__22746 = (i__17831__auto___22745 + (1));
i__17831__auto___22745 = G__22746;
continue;
} else {
}
break;
}

var G__22693 = args22691.length;
switch (G__22693) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22691.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18797__auto___22748 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18797__auto___22748,tc,fc){
return (function (){
var f__18798__auto__ = (function (){var switch__18776__auto__ = ((function (c__18797__auto___22748,tc,fc){
return (function (state_22719){
var state_val_22720 = (state_22719[(1)]);
if((state_val_22720 === (7))){
var inst_22715 = (state_22719[(2)]);
var state_22719__$1 = state_22719;
var statearr_22721_22749 = state_22719__$1;
(statearr_22721_22749[(2)] = inst_22715);

(statearr_22721_22749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22720 === (1))){
var state_22719__$1 = state_22719;
var statearr_22722_22750 = state_22719__$1;
(statearr_22722_22750[(2)] = null);

(statearr_22722_22750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22720 === (4))){
var inst_22696 = (state_22719[(7)]);
var inst_22696__$1 = (state_22719[(2)]);
var inst_22697 = (inst_22696__$1 == null);
var state_22719__$1 = (function (){var statearr_22723 = state_22719;
(statearr_22723[(7)] = inst_22696__$1);

return statearr_22723;
})();
if(cljs.core.truth_(inst_22697)){
var statearr_22724_22751 = state_22719__$1;
(statearr_22724_22751[(1)] = (5));

} else {
var statearr_22725_22752 = state_22719__$1;
(statearr_22725_22752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22720 === (13))){
var state_22719__$1 = state_22719;
var statearr_22726_22753 = state_22719__$1;
(statearr_22726_22753[(2)] = null);

(statearr_22726_22753[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22720 === (6))){
var inst_22696 = (state_22719[(7)]);
var inst_22702 = p.call(null,inst_22696);
var state_22719__$1 = state_22719;
if(cljs.core.truth_(inst_22702)){
var statearr_22727_22754 = state_22719__$1;
(statearr_22727_22754[(1)] = (9));

} else {
var statearr_22728_22755 = state_22719__$1;
(statearr_22728_22755[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22720 === (3))){
var inst_22717 = (state_22719[(2)]);
var state_22719__$1 = state_22719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22719__$1,inst_22717);
} else {
if((state_val_22720 === (12))){
var state_22719__$1 = state_22719;
var statearr_22729_22756 = state_22719__$1;
(statearr_22729_22756[(2)] = null);

(statearr_22729_22756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22720 === (2))){
var state_22719__$1 = state_22719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22719__$1,(4),ch);
} else {
if((state_val_22720 === (11))){
var inst_22696 = (state_22719[(7)]);
var inst_22706 = (state_22719[(2)]);
var state_22719__$1 = state_22719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22719__$1,(8),inst_22706,inst_22696);
} else {
if((state_val_22720 === (9))){
var state_22719__$1 = state_22719;
var statearr_22730_22757 = state_22719__$1;
(statearr_22730_22757[(2)] = tc);

(statearr_22730_22757[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22720 === (5))){
var inst_22699 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22700 = cljs.core.async.close_BANG_.call(null,fc);
var state_22719__$1 = (function (){var statearr_22731 = state_22719;
(statearr_22731[(8)] = inst_22699);

return statearr_22731;
})();
var statearr_22732_22758 = state_22719__$1;
(statearr_22732_22758[(2)] = inst_22700);

(statearr_22732_22758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22720 === (14))){
var inst_22713 = (state_22719[(2)]);
var state_22719__$1 = state_22719;
var statearr_22733_22759 = state_22719__$1;
(statearr_22733_22759[(2)] = inst_22713);

(statearr_22733_22759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22720 === (10))){
var state_22719__$1 = state_22719;
var statearr_22734_22760 = state_22719__$1;
(statearr_22734_22760[(2)] = fc);

(statearr_22734_22760[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22720 === (8))){
var inst_22708 = (state_22719[(2)]);
var state_22719__$1 = state_22719;
if(cljs.core.truth_(inst_22708)){
var statearr_22735_22761 = state_22719__$1;
(statearr_22735_22761[(1)] = (12));

} else {
var statearr_22736_22762 = state_22719__$1;
(statearr_22736_22762[(1)] = (13));

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
});})(c__18797__auto___22748,tc,fc))
;
return ((function (switch__18776__auto__,c__18797__auto___22748,tc,fc){
return (function() {
var cljs$core$async$state_machine__18777__auto__ = null;
var cljs$core$async$state_machine__18777__auto____0 = (function (){
var statearr_22740 = [null,null,null,null,null,null,null,null,null];
(statearr_22740[(0)] = cljs$core$async$state_machine__18777__auto__);

(statearr_22740[(1)] = (1));

return statearr_22740;
});
var cljs$core$async$state_machine__18777__auto____1 = (function (state_22719){
while(true){
var ret_value__18778__auto__ = (function (){try{while(true){
var result__18779__auto__ = switch__18776__auto__.call(null,state_22719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18779__auto__;
}
break;
}
}catch (e22741){if((e22741 instanceof Object)){
var ex__18780__auto__ = e22741;
var statearr_22742_22763 = state_22719;
(statearr_22742_22763[(5)] = ex__18780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22764 = state_22719;
state_22719 = G__22764;
continue;
} else {
return ret_value__18778__auto__;
}
break;
}
});
cljs$core$async$state_machine__18777__auto__ = function(state_22719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18777__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18777__auto____1.call(this,state_22719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18777__auto____0;
cljs$core$async$state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18777__auto____1;
return cljs$core$async$state_machine__18777__auto__;
})()
;})(switch__18776__auto__,c__18797__auto___22748,tc,fc))
})();
var state__18799__auto__ = (function (){var statearr_22743 = f__18798__auto__.call(null);
(statearr_22743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18797__auto___22748);

return statearr_22743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18799__auto__);
});})(c__18797__auto___22748,tc,fc))
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
var c__18797__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18797__auto__){
return (function (){
var f__18798__auto__ = (function (){var switch__18776__auto__ = ((function (c__18797__auto__){
return (function (state_22828){
var state_val_22829 = (state_22828[(1)]);
if((state_val_22829 === (7))){
var inst_22824 = (state_22828[(2)]);
var state_22828__$1 = state_22828;
var statearr_22830_22851 = state_22828__$1;
(statearr_22830_22851[(2)] = inst_22824);

(statearr_22830_22851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22829 === (1))){
var inst_22808 = init;
var state_22828__$1 = (function (){var statearr_22831 = state_22828;
(statearr_22831[(7)] = inst_22808);

return statearr_22831;
})();
var statearr_22832_22852 = state_22828__$1;
(statearr_22832_22852[(2)] = null);

(statearr_22832_22852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22829 === (4))){
var inst_22811 = (state_22828[(8)]);
var inst_22811__$1 = (state_22828[(2)]);
var inst_22812 = (inst_22811__$1 == null);
var state_22828__$1 = (function (){var statearr_22833 = state_22828;
(statearr_22833[(8)] = inst_22811__$1);

return statearr_22833;
})();
if(cljs.core.truth_(inst_22812)){
var statearr_22834_22853 = state_22828__$1;
(statearr_22834_22853[(1)] = (5));

} else {
var statearr_22835_22854 = state_22828__$1;
(statearr_22835_22854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22829 === (6))){
var inst_22808 = (state_22828[(7)]);
var inst_22815 = (state_22828[(9)]);
var inst_22811 = (state_22828[(8)]);
var inst_22815__$1 = f.call(null,inst_22808,inst_22811);
var inst_22816 = cljs.core.reduced_QMARK_.call(null,inst_22815__$1);
var state_22828__$1 = (function (){var statearr_22836 = state_22828;
(statearr_22836[(9)] = inst_22815__$1);

return statearr_22836;
})();
if(inst_22816){
var statearr_22837_22855 = state_22828__$1;
(statearr_22837_22855[(1)] = (8));

} else {
var statearr_22838_22856 = state_22828__$1;
(statearr_22838_22856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22829 === (3))){
var inst_22826 = (state_22828[(2)]);
var state_22828__$1 = state_22828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22828__$1,inst_22826);
} else {
if((state_val_22829 === (2))){
var state_22828__$1 = state_22828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22828__$1,(4),ch);
} else {
if((state_val_22829 === (9))){
var inst_22815 = (state_22828[(9)]);
var inst_22808 = inst_22815;
var state_22828__$1 = (function (){var statearr_22839 = state_22828;
(statearr_22839[(7)] = inst_22808);

return statearr_22839;
})();
var statearr_22840_22857 = state_22828__$1;
(statearr_22840_22857[(2)] = null);

(statearr_22840_22857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22829 === (5))){
var inst_22808 = (state_22828[(7)]);
var state_22828__$1 = state_22828;
var statearr_22841_22858 = state_22828__$1;
(statearr_22841_22858[(2)] = inst_22808);

(statearr_22841_22858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22829 === (10))){
var inst_22822 = (state_22828[(2)]);
var state_22828__$1 = state_22828;
var statearr_22842_22859 = state_22828__$1;
(statearr_22842_22859[(2)] = inst_22822);

(statearr_22842_22859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22829 === (8))){
var inst_22815 = (state_22828[(9)]);
var inst_22818 = cljs.core.deref.call(null,inst_22815);
var state_22828__$1 = state_22828;
var statearr_22843_22860 = state_22828__$1;
(statearr_22843_22860[(2)] = inst_22818);

(statearr_22843_22860[(1)] = (10));


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
});})(c__18797__auto__))
;
return ((function (switch__18776__auto__,c__18797__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18777__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18777__auto____0 = (function (){
var statearr_22847 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22847[(0)] = cljs$core$async$reduce_$_state_machine__18777__auto__);

(statearr_22847[(1)] = (1));

return statearr_22847;
});
var cljs$core$async$reduce_$_state_machine__18777__auto____1 = (function (state_22828){
while(true){
var ret_value__18778__auto__ = (function (){try{while(true){
var result__18779__auto__ = switch__18776__auto__.call(null,state_22828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18779__auto__;
}
break;
}
}catch (e22848){if((e22848 instanceof Object)){
var ex__18780__auto__ = e22848;
var statearr_22849_22861 = state_22828;
(statearr_22849_22861[(5)] = ex__18780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22862 = state_22828;
state_22828 = G__22862;
continue;
} else {
return ret_value__18778__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18777__auto__ = function(state_22828){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18777__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18777__auto____1.call(this,state_22828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18777__auto____0;
cljs$core$async$reduce_$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18777__auto____1;
return cljs$core$async$reduce_$_state_machine__18777__auto__;
})()
;})(switch__18776__auto__,c__18797__auto__))
})();
var state__18799__auto__ = (function (){var statearr_22850 = f__18798__auto__.call(null);
(statearr_22850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18797__auto__);

return statearr_22850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18799__auto__);
});})(c__18797__auto__))
);

return c__18797__auto__;
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
var args22863 = [];
var len__17830__auto___22915 = arguments.length;
var i__17831__auto___22916 = (0);
while(true){
if((i__17831__auto___22916 < len__17830__auto___22915)){
args22863.push((arguments[i__17831__auto___22916]));

var G__22917 = (i__17831__auto___22916 + (1));
i__17831__auto___22916 = G__22917;
continue;
} else {
}
break;
}

var G__22865 = args22863.length;
switch (G__22865) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22863.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18797__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18797__auto__){
return (function (){
var f__18798__auto__ = (function (){var switch__18776__auto__ = ((function (c__18797__auto__){
return (function (state_22890){
var state_val_22891 = (state_22890[(1)]);
if((state_val_22891 === (7))){
var inst_22872 = (state_22890[(2)]);
var state_22890__$1 = state_22890;
var statearr_22892_22919 = state_22890__$1;
(statearr_22892_22919[(2)] = inst_22872);

(statearr_22892_22919[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (1))){
var inst_22866 = cljs.core.seq.call(null,coll);
var inst_22867 = inst_22866;
var state_22890__$1 = (function (){var statearr_22893 = state_22890;
(statearr_22893[(7)] = inst_22867);

return statearr_22893;
})();
var statearr_22894_22920 = state_22890__$1;
(statearr_22894_22920[(2)] = null);

(statearr_22894_22920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (4))){
var inst_22867 = (state_22890[(7)]);
var inst_22870 = cljs.core.first.call(null,inst_22867);
var state_22890__$1 = state_22890;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22890__$1,(7),ch,inst_22870);
} else {
if((state_val_22891 === (13))){
var inst_22884 = (state_22890[(2)]);
var state_22890__$1 = state_22890;
var statearr_22895_22921 = state_22890__$1;
(statearr_22895_22921[(2)] = inst_22884);

(statearr_22895_22921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (6))){
var inst_22875 = (state_22890[(2)]);
var state_22890__$1 = state_22890;
if(cljs.core.truth_(inst_22875)){
var statearr_22896_22922 = state_22890__$1;
(statearr_22896_22922[(1)] = (8));

} else {
var statearr_22897_22923 = state_22890__$1;
(statearr_22897_22923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (3))){
var inst_22888 = (state_22890[(2)]);
var state_22890__$1 = state_22890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22890__$1,inst_22888);
} else {
if((state_val_22891 === (12))){
var state_22890__$1 = state_22890;
var statearr_22898_22924 = state_22890__$1;
(statearr_22898_22924[(2)] = null);

(statearr_22898_22924[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (2))){
var inst_22867 = (state_22890[(7)]);
var state_22890__$1 = state_22890;
if(cljs.core.truth_(inst_22867)){
var statearr_22899_22925 = state_22890__$1;
(statearr_22899_22925[(1)] = (4));

} else {
var statearr_22900_22926 = state_22890__$1;
(statearr_22900_22926[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (11))){
var inst_22881 = cljs.core.async.close_BANG_.call(null,ch);
var state_22890__$1 = state_22890;
var statearr_22901_22927 = state_22890__$1;
(statearr_22901_22927[(2)] = inst_22881);

(statearr_22901_22927[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (9))){
var state_22890__$1 = state_22890;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22902_22928 = state_22890__$1;
(statearr_22902_22928[(1)] = (11));

} else {
var statearr_22903_22929 = state_22890__$1;
(statearr_22903_22929[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (5))){
var inst_22867 = (state_22890[(7)]);
var state_22890__$1 = state_22890;
var statearr_22904_22930 = state_22890__$1;
(statearr_22904_22930[(2)] = inst_22867);

(statearr_22904_22930[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (10))){
var inst_22886 = (state_22890[(2)]);
var state_22890__$1 = state_22890;
var statearr_22905_22931 = state_22890__$1;
(statearr_22905_22931[(2)] = inst_22886);

(statearr_22905_22931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22891 === (8))){
var inst_22867 = (state_22890[(7)]);
var inst_22877 = cljs.core.next.call(null,inst_22867);
var inst_22867__$1 = inst_22877;
var state_22890__$1 = (function (){var statearr_22906 = state_22890;
(statearr_22906[(7)] = inst_22867__$1);

return statearr_22906;
})();
var statearr_22907_22932 = state_22890__$1;
(statearr_22907_22932[(2)] = null);

(statearr_22907_22932[(1)] = (2));


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
});})(c__18797__auto__))
;
return ((function (switch__18776__auto__,c__18797__auto__){
return (function() {
var cljs$core$async$state_machine__18777__auto__ = null;
var cljs$core$async$state_machine__18777__auto____0 = (function (){
var statearr_22911 = [null,null,null,null,null,null,null,null];
(statearr_22911[(0)] = cljs$core$async$state_machine__18777__auto__);

(statearr_22911[(1)] = (1));

return statearr_22911;
});
var cljs$core$async$state_machine__18777__auto____1 = (function (state_22890){
while(true){
var ret_value__18778__auto__ = (function (){try{while(true){
var result__18779__auto__ = switch__18776__auto__.call(null,state_22890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18779__auto__;
}
break;
}
}catch (e22912){if((e22912 instanceof Object)){
var ex__18780__auto__ = e22912;
var statearr_22913_22933 = state_22890;
(statearr_22913_22933[(5)] = ex__18780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22934 = state_22890;
state_22890 = G__22934;
continue;
} else {
return ret_value__18778__auto__;
}
break;
}
});
cljs$core$async$state_machine__18777__auto__ = function(state_22890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18777__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18777__auto____1.call(this,state_22890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18777__auto____0;
cljs$core$async$state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18777__auto____1;
return cljs$core$async$state_machine__18777__auto__;
})()
;})(switch__18776__auto__,c__18797__auto__))
})();
var state__18799__auto__ = (function (){var statearr_22914 = f__18798__auto__.call(null);
(statearr_22914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18797__auto__);

return statearr_22914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18799__auto__);
});})(c__18797__auto__))
);

return c__18797__auto__;
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
var x__17427__auto__ = (((_ == null))?null:_);
var m__17428__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17427__auto__)]);
if(!((m__17428__auto__ == null))){
return m__17428__auto__.call(null,_);
} else {
var m__17428__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17428__auto____$1 == null))){
return m__17428__auto____$1.call(null,_);
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
var x__17427__auto__ = (((m == null))?null:m);
var m__17428__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17427__auto__)]);
if(!((m__17428__auto__ == null))){
return m__17428__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17428__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17428__auto____$1 == null))){
return m__17428__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__17427__auto__ = (((m == null))?null:m);
var m__17428__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17427__auto__)]);
if(!((m__17428__auto__ == null))){
return m__17428__auto__.call(null,m,ch);
} else {
var m__17428__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17428__auto____$1 == null))){
return m__17428__auto____$1.call(null,m,ch);
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
var x__17427__auto__ = (((m == null))?null:m);
var m__17428__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17427__auto__)]);
if(!((m__17428__auto__ == null))){
return m__17428__auto__.call(null,m);
} else {
var m__17428__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17428__auto____$1 == null))){
return m__17428__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async23156 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23156 = (function (mult,ch,cs,meta23157){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23157 = meta23157;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23158,meta23157__$1){
var self__ = this;
var _23158__$1 = this;
return (new cljs.core.async.t_cljs$core$async23156(self__.mult,self__.ch,self__.cs,meta23157__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23156.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23158){
var self__ = this;
var _23158__$1 = this;
return self__.meta23157;
});})(cs))
;

cljs.core.async.t_cljs$core$async23156.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23156.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23156.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23156.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23156.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23156.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23156.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23157","meta23157",-1513885677,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23156.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23156.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23156";

cljs.core.async.t_cljs$core$async23156.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17370__auto__,writer__17371__auto__,opt__17372__auto__){
return cljs.core._write.call(null,writer__17371__auto__,"cljs.core.async/t_cljs$core$async23156");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23156 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23156(mult__$1,ch__$1,cs__$1,meta23157){
return (new cljs.core.async.t_cljs$core$async23156(mult__$1,ch__$1,cs__$1,meta23157));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23156(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__18797__auto___23377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18797__auto___23377,cs,m,dchan,dctr,done){
return (function (){
var f__18798__auto__ = (function (){var switch__18776__auto__ = ((function (c__18797__auto___23377,cs,m,dchan,dctr,done){
return (function (state_23289){
var state_val_23290 = (state_23289[(1)]);
if((state_val_23290 === (7))){
var inst_23285 = (state_23289[(2)]);
var state_23289__$1 = state_23289;
var statearr_23291_23378 = state_23289__$1;
(statearr_23291_23378[(2)] = inst_23285);

(statearr_23291_23378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (20))){
var inst_23190 = (state_23289[(7)]);
var inst_23200 = cljs.core.first.call(null,inst_23190);
var inst_23201 = cljs.core.nth.call(null,inst_23200,(0),null);
var inst_23202 = cljs.core.nth.call(null,inst_23200,(1),null);
var state_23289__$1 = (function (){var statearr_23292 = state_23289;
(statearr_23292[(8)] = inst_23201);

return statearr_23292;
})();
if(cljs.core.truth_(inst_23202)){
var statearr_23293_23379 = state_23289__$1;
(statearr_23293_23379[(1)] = (22));

} else {
var statearr_23294_23380 = state_23289__$1;
(statearr_23294_23380[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (27))){
var inst_23232 = (state_23289[(9)]);
var inst_23230 = (state_23289[(10)]);
var inst_23161 = (state_23289[(11)]);
var inst_23237 = (state_23289[(12)]);
var inst_23237__$1 = cljs.core._nth.call(null,inst_23230,inst_23232);
var inst_23238 = cljs.core.async.put_BANG_.call(null,inst_23237__$1,inst_23161,done);
var state_23289__$1 = (function (){var statearr_23295 = state_23289;
(statearr_23295[(12)] = inst_23237__$1);

return statearr_23295;
})();
if(cljs.core.truth_(inst_23238)){
var statearr_23296_23381 = state_23289__$1;
(statearr_23296_23381[(1)] = (30));

} else {
var statearr_23297_23382 = state_23289__$1;
(statearr_23297_23382[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (1))){
var state_23289__$1 = state_23289;
var statearr_23298_23383 = state_23289__$1;
(statearr_23298_23383[(2)] = null);

(statearr_23298_23383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (24))){
var inst_23190 = (state_23289[(7)]);
var inst_23207 = (state_23289[(2)]);
var inst_23208 = cljs.core.next.call(null,inst_23190);
var inst_23170 = inst_23208;
var inst_23171 = null;
var inst_23172 = (0);
var inst_23173 = (0);
var state_23289__$1 = (function (){var statearr_23299 = state_23289;
(statearr_23299[(13)] = inst_23171);

(statearr_23299[(14)] = inst_23172);

(statearr_23299[(15)] = inst_23207);

(statearr_23299[(16)] = inst_23173);

(statearr_23299[(17)] = inst_23170);

return statearr_23299;
})();
var statearr_23300_23384 = state_23289__$1;
(statearr_23300_23384[(2)] = null);

(statearr_23300_23384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (39))){
var state_23289__$1 = state_23289;
var statearr_23304_23385 = state_23289__$1;
(statearr_23304_23385[(2)] = null);

(statearr_23304_23385[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (4))){
var inst_23161 = (state_23289[(11)]);
var inst_23161__$1 = (state_23289[(2)]);
var inst_23162 = (inst_23161__$1 == null);
var state_23289__$1 = (function (){var statearr_23305 = state_23289;
(statearr_23305[(11)] = inst_23161__$1);

return statearr_23305;
})();
if(cljs.core.truth_(inst_23162)){
var statearr_23306_23386 = state_23289__$1;
(statearr_23306_23386[(1)] = (5));

} else {
var statearr_23307_23387 = state_23289__$1;
(statearr_23307_23387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (15))){
var inst_23171 = (state_23289[(13)]);
var inst_23172 = (state_23289[(14)]);
var inst_23173 = (state_23289[(16)]);
var inst_23170 = (state_23289[(17)]);
var inst_23186 = (state_23289[(2)]);
var inst_23187 = (inst_23173 + (1));
var tmp23301 = inst_23171;
var tmp23302 = inst_23172;
var tmp23303 = inst_23170;
var inst_23170__$1 = tmp23303;
var inst_23171__$1 = tmp23301;
var inst_23172__$1 = tmp23302;
var inst_23173__$1 = inst_23187;
var state_23289__$1 = (function (){var statearr_23308 = state_23289;
(statearr_23308[(13)] = inst_23171__$1);

(statearr_23308[(14)] = inst_23172__$1);

(statearr_23308[(16)] = inst_23173__$1);

(statearr_23308[(18)] = inst_23186);

(statearr_23308[(17)] = inst_23170__$1);

return statearr_23308;
})();
var statearr_23309_23388 = state_23289__$1;
(statearr_23309_23388[(2)] = null);

(statearr_23309_23388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (21))){
var inst_23211 = (state_23289[(2)]);
var state_23289__$1 = state_23289;
var statearr_23313_23389 = state_23289__$1;
(statearr_23313_23389[(2)] = inst_23211);

(statearr_23313_23389[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (31))){
var inst_23237 = (state_23289[(12)]);
var inst_23241 = done.call(null,null);
var inst_23242 = cljs.core.async.untap_STAR_.call(null,m,inst_23237);
var state_23289__$1 = (function (){var statearr_23314 = state_23289;
(statearr_23314[(19)] = inst_23241);

return statearr_23314;
})();
var statearr_23315_23390 = state_23289__$1;
(statearr_23315_23390[(2)] = inst_23242);

(statearr_23315_23390[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (32))){
var inst_23232 = (state_23289[(9)]);
var inst_23230 = (state_23289[(10)]);
var inst_23231 = (state_23289[(20)]);
var inst_23229 = (state_23289[(21)]);
var inst_23244 = (state_23289[(2)]);
var inst_23245 = (inst_23232 + (1));
var tmp23310 = inst_23230;
var tmp23311 = inst_23231;
var tmp23312 = inst_23229;
var inst_23229__$1 = tmp23312;
var inst_23230__$1 = tmp23310;
var inst_23231__$1 = tmp23311;
var inst_23232__$1 = inst_23245;
var state_23289__$1 = (function (){var statearr_23316 = state_23289;
(statearr_23316[(9)] = inst_23232__$1);

(statearr_23316[(10)] = inst_23230__$1);

(statearr_23316[(20)] = inst_23231__$1);

(statearr_23316[(22)] = inst_23244);

(statearr_23316[(21)] = inst_23229__$1);

return statearr_23316;
})();
var statearr_23317_23391 = state_23289__$1;
(statearr_23317_23391[(2)] = null);

(statearr_23317_23391[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (40))){
var inst_23257 = (state_23289[(23)]);
var inst_23261 = done.call(null,null);
var inst_23262 = cljs.core.async.untap_STAR_.call(null,m,inst_23257);
var state_23289__$1 = (function (){var statearr_23318 = state_23289;
(statearr_23318[(24)] = inst_23261);

return statearr_23318;
})();
var statearr_23319_23392 = state_23289__$1;
(statearr_23319_23392[(2)] = inst_23262);

(statearr_23319_23392[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (33))){
var inst_23248 = (state_23289[(25)]);
var inst_23250 = cljs.core.chunked_seq_QMARK_.call(null,inst_23248);
var state_23289__$1 = state_23289;
if(inst_23250){
var statearr_23320_23393 = state_23289__$1;
(statearr_23320_23393[(1)] = (36));

} else {
var statearr_23321_23394 = state_23289__$1;
(statearr_23321_23394[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (13))){
var inst_23180 = (state_23289[(26)]);
var inst_23183 = cljs.core.async.close_BANG_.call(null,inst_23180);
var state_23289__$1 = state_23289;
var statearr_23322_23395 = state_23289__$1;
(statearr_23322_23395[(2)] = inst_23183);

(statearr_23322_23395[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (22))){
var inst_23201 = (state_23289[(8)]);
var inst_23204 = cljs.core.async.close_BANG_.call(null,inst_23201);
var state_23289__$1 = state_23289;
var statearr_23323_23396 = state_23289__$1;
(statearr_23323_23396[(2)] = inst_23204);

(statearr_23323_23396[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (36))){
var inst_23248 = (state_23289[(25)]);
var inst_23252 = cljs.core.chunk_first.call(null,inst_23248);
var inst_23253 = cljs.core.chunk_rest.call(null,inst_23248);
var inst_23254 = cljs.core.count.call(null,inst_23252);
var inst_23229 = inst_23253;
var inst_23230 = inst_23252;
var inst_23231 = inst_23254;
var inst_23232 = (0);
var state_23289__$1 = (function (){var statearr_23324 = state_23289;
(statearr_23324[(9)] = inst_23232);

(statearr_23324[(10)] = inst_23230);

(statearr_23324[(20)] = inst_23231);

(statearr_23324[(21)] = inst_23229);

return statearr_23324;
})();
var statearr_23325_23397 = state_23289__$1;
(statearr_23325_23397[(2)] = null);

(statearr_23325_23397[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (41))){
var inst_23248 = (state_23289[(25)]);
var inst_23264 = (state_23289[(2)]);
var inst_23265 = cljs.core.next.call(null,inst_23248);
var inst_23229 = inst_23265;
var inst_23230 = null;
var inst_23231 = (0);
var inst_23232 = (0);
var state_23289__$1 = (function (){var statearr_23326 = state_23289;
(statearr_23326[(9)] = inst_23232);

(statearr_23326[(10)] = inst_23230);

(statearr_23326[(20)] = inst_23231);

(statearr_23326[(27)] = inst_23264);

(statearr_23326[(21)] = inst_23229);

return statearr_23326;
})();
var statearr_23327_23398 = state_23289__$1;
(statearr_23327_23398[(2)] = null);

(statearr_23327_23398[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (43))){
var state_23289__$1 = state_23289;
var statearr_23328_23399 = state_23289__$1;
(statearr_23328_23399[(2)] = null);

(statearr_23328_23399[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (29))){
var inst_23273 = (state_23289[(2)]);
var state_23289__$1 = state_23289;
var statearr_23329_23400 = state_23289__$1;
(statearr_23329_23400[(2)] = inst_23273);

(statearr_23329_23400[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (44))){
var inst_23282 = (state_23289[(2)]);
var state_23289__$1 = (function (){var statearr_23330 = state_23289;
(statearr_23330[(28)] = inst_23282);

return statearr_23330;
})();
var statearr_23331_23401 = state_23289__$1;
(statearr_23331_23401[(2)] = null);

(statearr_23331_23401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (6))){
var inst_23221 = (state_23289[(29)]);
var inst_23220 = cljs.core.deref.call(null,cs);
var inst_23221__$1 = cljs.core.keys.call(null,inst_23220);
var inst_23222 = cljs.core.count.call(null,inst_23221__$1);
var inst_23223 = cljs.core.reset_BANG_.call(null,dctr,inst_23222);
var inst_23228 = cljs.core.seq.call(null,inst_23221__$1);
var inst_23229 = inst_23228;
var inst_23230 = null;
var inst_23231 = (0);
var inst_23232 = (0);
var state_23289__$1 = (function (){var statearr_23332 = state_23289;
(statearr_23332[(9)] = inst_23232);

(statearr_23332[(10)] = inst_23230);

(statearr_23332[(20)] = inst_23231);

(statearr_23332[(30)] = inst_23223);

(statearr_23332[(29)] = inst_23221__$1);

(statearr_23332[(21)] = inst_23229);

return statearr_23332;
})();
var statearr_23333_23402 = state_23289__$1;
(statearr_23333_23402[(2)] = null);

(statearr_23333_23402[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (28))){
var inst_23248 = (state_23289[(25)]);
var inst_23229 = (state_23289[(21)]);
var inst_23248__$1 = cljs.core.seq.call(null,inst_23229);
var state_23289__$1 = (function (){var statearr_23334 = state_23289;
(statearr_23334[(25)] = inst_23248__$1);

return statearr_23334;
})();
if(inst_23248__$1){
var statearr_23335_23403 = state_23289__$1;
(statearr_23335_23403[(1)] = (33));

} else {
var statearr_23336_23404 = state_23289__$1;
(statearr_23336_23404[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (25))){
var inst_23232 = (state_23289[(9)]);
var inst_23231 = (state_23289[(20)]);
var inst_23234 = (inst_23232 < inst_23231);
var inst_23235 = inst_23234;
var state_23289__$1 = state_23289;
if(cljs.core.truth_(inst_23235)){
var statearr_23337_23405 = state_23289__$1;
(statearr_23337_23405[(1)] = (27));

} else {
var statearr_23338_23406 = state_23289__$1;
(statearr_23338_23406[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (34))){
var state_23289__$1 = state_23289;
var statearr_23339_23407 = state_23289__$1;
(statearr_23339_23407[(2)] = null);

(statearr_23339_23407[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (17))){
var state_23289__$1 = state_23289;
var statearr_23340_23408 = state_23289__$1;
(statearr_23340_23408[(2)] = null);

(statearr_23340_23408[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (3))){
var inst_23287 = (state_23289[(2)]);
var state_23289__$1 = state_23289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23289__$1,inst_23287);
} else {
if((state_val_23290 === (12))){
var inst_23216 = (state_23289[(2)]);
var state_23289__$1 = state_23289;
var statearr_23341_23409 = state_23289__$1;
(statearr_23341_23409[(2)] = inst_23216);

(statearr_23341_23409[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (2))){
var state_23289__$1 = state_23289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23289__$1,(4),ch);
} else {
if((state_val_23290 === (23))){
var state_23289__$1 = state_23289;
var statearr_23342_23410 = state_23289__$1;
(statearr_23342_23410[(2)] = null);

(statearr_23342_23410[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (35))){
var inst_23271 = (state_23289[(2)]);
var state_23289__$1 = state_23289;
var statearr_23343_23411 = state_23289__$1;
(statearr_23343_23411[(2)] = inst_23271);

(statearr_23343_23411[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (19))){
var inst_23190 = (state_23289[(7)]);
var inst_23194 = cljs.core.chunk_first.call(null,inst_23190);
var inst_23195 = cljs.core.chunk_rest.call(null,inst_23190);
var inst_23196 = cljs.core.count.call(null,inst_23194);
var inst_23170 = inst_23195;
var inst_23171 = inst_23194;
var inst_23172 = inst_23196;
var inst_23173 = (0);
var state_23289__$1 = (function (){var statearr_23344 = state_23289;
(statearr_23344[(13)] = inst_23171);

(statearr_23344[(14)] = inst_23172);

(statearr_23344[(16)] = inst_23173);

(statearr_23344[(17)] = inst_23170);

return statearr_23344;
})();
var statearr_23345_23412 = state_23289__$1;
(statearr_23345_23412[(2)] = null);

(statearr_23345_23412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (11))){
var inst_23170 = (state_23289[(17)]);
var inst_23190 = (state_23289[(7)]);
var inst_23190__$1 = cljs.core.seq.call(null,inst_23170);
var state_23289__$1 = (function (){var statearr_23346 = state_23289;
(statearr_23346[(7)] = inst_23190__$1);

return statearr_23346;
})();
if(inst_23190__$1){
var statearr_23347_23413 = state_23289__$1;
(statearr_23347_23413[(1)] = (16));

} else {
var statearr_23348_23414 = state_23289__$1;
(statearr_23348_23414[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (9))){
var inst_23218 = (state_23289[(2)]);
var state_23289__$1 = state_23289;
var statearr_23349_23415 = state_23289__$1;
(statearr_23349_23415[(2)] = inst_23218);

(statearr_23349_23415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (5))){
var inst_23168 = cljs.core.deref.call(null,cs);
var inst_23169 = cljs.core.seq.call(null,inst_23168);
var inst_23170 = inst_23169;
var inst_23171 = null;
var inst_23172 = (0);
var inst_23173 = (0);
var state_23289__$1 = (function (){var statearr_23350 = state_23289;
(statearr_23350[(13)] = inst_23171);

(statearr_23350[(14)] = inst_23172);

(statearr_23350[(16)] = inst_23173);

(statearr_23350[(17)] = inst_23170);

return statearr_23350;
})();
var statearr_23351_23416 = state_23289__$1;
(statearr_23351_23416[(2)] = null);

(statearr_23351_23416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (14))){
var state_23289__$1 = state_23289;
var statearr_23352_23417 = state_23289__$1;
(statearr_23352_23417[(2)] = null);

(statearr_23352_23417[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (45))){
var inst_23279 = (state_23289[(2)]);
var state_23289__$1 = state_23289;
var statearr_23353_23418 = state_23289__$1;
(statearr_23353_23418[(2)] = inst_23279);

(statearr_23353_23418[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (26))){
var inst_23221 = (state_23289[(29)]);
var inst_23275 = (state_23289[(2)]);
var inst_23276 = cljs.core.seq.call(null,inst_23221);
var state_23289__$1 = (function (){var statearr_23354 = state_23289;
(statearr_23354[(31)] = inst_23275);

return statearr_23354;
})();
if(inst_23276){
var statearr_23355_23419 = state_23289__$1;
(statearr_23355_23419[(1)] = (42));

} else {
var statearr_23356_23420 = state_23289__$1;
(statearr_23356_23420[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (16))){
var inst_23190 = (state_23289[(7)]);
var inst_23192 = cljs.core.chunked_seq_QMARK_.call(null,inst_23190);
var state_23289__$1 = state_23289;
if(inst_23192){
var statearr_23357_23421 = state_23289__$1;
(statearr_23357_23421[(1)] = (19));

} else {
var statearr_23358_23422 = state_23289__$1;
(statearr_23358_23422[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (38))){
var inst_23268 = (state_23289[(2)]);
var state_23289__$1 = state_23289;
var statearr_23359_23423 = state_23289__$1;
(statearr_23359_23423[(2)] = inst_23268);

(statearr_23359_23423[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (30))){
var state_23289__$1 = state_23289;
var statearr_23360_23424 = state_23289__$1;
(statearr_23360_23424[(2)] = null);

(statearr_23360_23424[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (10))){
var inst_23171 = (state_23289[(13)]);
var inst_23173 = (state_23289[(16)]);
var inst_23179 = cljs.core._nth.call(null,inst_23171,inst_23173);
var inst_23180 = cljs.core.nth.call(null,inst_23179,(0),null);
var inst_23181 = cljs.core.nth.call(null,inst_23179,(1),null);
var state_23289__$1 = (function (){var statearr_23361 = state_23289;
(statearr_23361[(26)] = inst_23180);

return statearr_23361;
})();
if(cljs.core.truth_(inst_23181)){
var statearr_23362_23425 = state_23289__$1;
(statearr_23362_23425[(1)] = (13));

} else {
var statearr_23363_23426 = state_23289__$1;
(statearr_23363_23426[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (18))){
var inst_23214 = (state_23289[(2)]);
var state_23289__$1 = state_23289;
var statearr_23364_23427 = state_23289__$1;
(statearr_23364_23427[(2)] = inst_23214);

(statearr_23364_23427[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (42))){
var state_23289__$1 = state_23289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23289__$1,(45),dchan);
} else {
if((state_val_23290 === (37))){
var inst_23161 = (state_23289[(11)]);
var inst_23257 = (state_23289[(23)]);
var inst_23248 = (state_23289[(25)]);
var inst_23257__$1 = cljs.core.first.call(null,inst_23248);
var inst_23258 = cljs.core.async.put_BANG_.call(null,inst_23257__$1,inst_23161,done);
var state_23289__$1 = (function (){var statearr_23365 = state_23289;
(statearr_23365[(23)] = inst_23257__$1);

return statearr_23365;
})();
if(cljs.core.truth_(inst_23258)){
var statearr_23366_23428 = state_23289__$1;
(statearr_23366_23428[(1)] = (39));

} else {
var statearr_23367_23429 = state_23289__$1;
(statearr_23367_23429[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23290 === (8))){
var inst_23172 = (state_23289[(14)]);
var inst_23173 = (state_23289[(16)]);
var inst_23175 = (inst_23173 < inst_23172);
var inst_23176 = inst_23175;
var state_23289__$1 = state_23289;
if(cljs.core.truth_(inst_23176)){
var statearr_23368_23430 = state_23289__$1;
(statearr_23368_23430[(1)] = (10));

} else {
var statearr_23369_23431 = state_23289__$1;
(statearr_23369_23431[(1)] = (11));

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
});})(c__18797__auto___23377,cs,m,dchan,dctr,done))
;
return ((function (switch__18776__auto__,c__18797__auto___23377,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18777__auto__ = null;
var cljs$core$async$mult_$_state_machine__18777__auto____0 = (function (){
var statearr_23373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23373[(0)] = cljs$core$async$mult_$_state_machine__18777__auto__);

(statearr_23373[(1)] = (1));

return statearr_23373;
});
var cljs$core$async$mult_$_state_machine__18777__auto____1 = (function (state_23289){
while(true){
var ret_value__18778__auto__ = (function (){try{while(true){
var result__18779__auto__ = switch__18776__auto__.call(null,state_23289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18779__auto__;
}
break;
}
}catch (e23374){if((e23374 instanceof Object)){
var ex__18780__auto__ = e23374;
var statearr_23375_23432 = state_23289;
(statearr_23375_23432[(5)] = ex__18780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23433 = state_23289;
state_23289 = G__23433;
continue;
} else {
return ret_value__18778__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18777__auto__ = function(state_23289){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18777__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18777__auto____1.call(this,state_23289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18777__auto____0;
cljs$core$async$mult_$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18777__auto____1;
return cljs$core$async$mult_$_state_machine__18777__auto__;
})()
;})(switch__18776__auto__,c__18797__auto___23377,cs,m,dchan,dctr,done))
})();
var state__18799__auto__ = (function (){var statearr_23376 = f__18798__auto__.call(null);
(statearr_23376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18797__auto___23377);

return statearr_23376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18799__auto__);
});})(c__18797__auto___23377,cs,m,dchan,dctr,done))
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
var args23434 = [];
var len__17830__auto___23437 = arguments.length;
var i__17831__auto___23438 = (0);
while(true){
if((i__17831__auto___23438 < len__17830__auto___23437)){
args23434.push((arguments[i__17831__auto___23438]));

var G__23439 = (i__17831__auto___23438 + (1));
i__17831__auto___23438 = G__23439;
continue;
} else {
}
break;
}

var G__23436 = args23434.length;
switch (G__23436) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23434.length)].join('')));

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
var x__17427__auto__ = (((m == null))?null:m);
var m__17428__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17427__auto__)]);
if(!((m__17428__auto__ == null))){
return m__17428__auto__.call(null,m,ch);
} else {
var m__17428__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17428__auto____$1 == null))){
return m__17428__auto____$1.call(null,m,ch);
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
var x__17427__auto__ = (((m == null))?null:m);
var m__17428__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17427__auto__)]);
if(!((m__17428__auto__ == null))){
return m__17428__auto__.call(null,m,ch);
} else {
var m__17428__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17428__auto____$1 == null))){
return m__17428__auto____$1.call(null,m,ch);
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
var x__17427__auto__ = (((m == null))?null:m);
var m__17428__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17427__auto__)]);
if(!((m__17428__auto__ == null))){
return m__17428__auto__.call(null,m);
} else {
var m__17428__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17428__auto____$1 == null))){
return m__17428__auto____$1.call(null,m);
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
var x__17427__auto__ = (((m == null))?null:m);
var m__17428__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17427__auto__)]);
if(!((m__17428__auto__ == null))){
return m__17428__auto__.call(null,m,state_map);
} else {
var m__17428__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17428__auto____$1 == null))){
return m__17428__auto____$1.call(null,m,state_map);
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
var x__17427__auto__ = (((m == null))?null:m);
var m__17428__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17427__auto__)]);
if(!((m__17428__auto__ == null))){
return m__17428__auto__.call(null,m,mode);
} else {
var m__17428__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17428__auto____$1 == null))){
return m__17428__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17837__auto__ = [];
var len__17830__auto___23451 = arguments.length;
var i__17831__auto___23452 = (0);
while(true){
if((i__17831__auto___23452 < len__17830__auto___23451)){
args__17837__auto__.push((arguments[i__17831__auto___23452]));

var G__23453 = (i__17831__auto___23452 + (1));
i__17831__auto___23452 = G__23453;
continue;
} else {
}
break;
}

var argseq__17838__auto__ = ((((3) < args__17837__auto__.length))?(new cljs.core.IndexedSeq(args__17837__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17838__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23445){
var map__23446 = p__23445;
var map__23446__$1 = ((((!((map__23446 == null)))?((((map__23446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23446):map__23446);
var opts = map__23446__$1;
var statearr_23448_23454 = state;
(statearr_23448_23454[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__23446,map__23446__$1,opts){
return (function (val){
var statearr_23449_23455 = state;
(statearr_23449_23455[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23446,map__23446__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_23450_23456 = state;
(statearr_23450_23456[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23441){
var G__23442 = cljs.core.first.call(null,seq23441);
var seq23441__$1 = cljs.core.next.call(null,seq23441);
var G__23443 = cljs.core.first.call(null,seq23441__$1);
var seq23441__$2 = cljs.core.next.call(null,seq23441__$1);
var G__23444 = cljs.core.first.call(null,seq23441__$2);
var seq23441__$3 = cljs.core.next.call(null,seq23441__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23442,G__23443,G__23444,seq23441__$3);
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
if(typeof cljs.core.async.t_cljs$core$async23620 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23620 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23621){
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
this.meta23621 = meta23621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23622,meta23621__$1){
var self__ = this;
var _23622__$1 = this;
return (new cljs.core.async.t_cljs$core$async23620(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23621__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23620.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23622){
var self__ = this;
var _23622__$1 = this;
return self__.meta23621;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23620.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23620.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23620.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23620.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23620.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23620.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23620.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23620.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async23620.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23621","meta23621",1214684124,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23620.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23620.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23620";

cljs.core.async.t_cljs$core$async23620.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17370__auto__,writer__17371__auto__,opt__17372__auto__){
return cljs.core._write.call(null,writer__17371__auto__,"cljs.core.async/t_cljs$core$async23620");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23620 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23620(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23621){
return (new cljs.core.async.t_cljs$core$async23620(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23621));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23620(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18797__auto___23783 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18797__auto___23783,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18798__auto__ = (function (){var switch__18776__auto__ = ((function (c__18797__auto___23783,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23720){
var state_val_23721 = (state_23720[(1)]);
if((state_val_23721 === (7))){
var inst_23638 = (state_23720[(2)]);
var state_23720__$1 = state_23720;
var statearr_23722_23784 = state_23720__$1;
(statearr_23722_23784[(2)] = inst_23638);

(statearr_23722_23784[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (20))){
var inst_23650 = (state_23720[(7)]);
var state_23720__$1 = state_23720;
var statearr_23723_23785 = state_23720__$1;
(statearr_23723_23785[(2)] = inst_23650);

(statearr_23723_23785[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (27))){
var state_23720__$1 = state_23720;
var statearr_23724_23786 = state_23720__$1;
(statearr_23724_23786[(2)] = null);

(statearr_23724_23786[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (1))){
var inst_23626 = (state_23720[(8)]);
var inst_23626__$1 = calc_state.call(null);
var inst_23628 = (inst_23626__$1 == null);
var inst_23629 = cljs.core.not.call(null,inst_23628);
var state_23720__$1 = (function (){var statearr_23725 = state_23720;
(statearr_23725[(8)] = inst_23626__$1);

return statearr_23725;
})();
if(inst_23629){
var statearr_23726_23787 = state_23720__$1;
(statearr_23726_23787[(1)] = (2));

} else {
var statearr_23727_23788 = state_23720__$1;
(statearr_23727_23788[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (24))){
var inst_23673 = (state_23720[(9)]);
var inst_23694 = (state_23720[(10)]);
var inst_23680 = (state_23720[(11)]);
var inst_23694__$1 = inst_23673.call(null,inst_23680);
var state_23720__$1 = (function (){var statearr_23728 = state_23720;
(statearr_23728[(10)] = inst_23694__$1);

return statearr_23728;
})();
if(cljs.core.truth_(inst_23694__$1)){
var statearr_23729_23789 = state_23720__$1;
(statearr_23729_23789[(1)] = (29));

} else {
var statearr_23730_23790 = state_23720__$1;
(statearr_23730_23790[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (4))){
var inst_23641 = (state_23720[(2)]);
var state_23720__$1 = state_23720;
if(cljs.core.truth_(inst_23641)){
var statearr_23731_23791 = state_23720__$1;
(statearr_23731_23791[(1)] = (8));

} else {
var statearr_23732_23792 = state_23720__$1;
(statearr_23732_23792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (15))){
var inst_23667 = (state_23720[(2)]);
var state_23720__$1 = state_23720;
if(cljs.core.truth_(inst_23667)){
var statearr_23733_23793 = state_23720__$1;
(statearr_23733_23793[(1)] = (19));

} else {
var statearr_23734_23794 = state_23720__$1;
(statearr_23734_23794[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (21))){
var inst_23672 = (state_23720[(12)]);
var inst_23672__$1 = (state_23720[(2)]);
var inst_23673 = cljs.core.get.call(null,inst_23672__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23674 = cljs.core.get.call(null,inst_23672__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23675 = cljs.core.get.call(null,inst_23672__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23720__$1 = (function (){var statearr_23735 = state_23720;
(statearr_23735[(9)] = inst_23673);

(statearr_23735[(13)] = inst_23674);

(statearr_23735[(12)] = inst_23672__$1);

return statearr_23735;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23720__$1,(22),inst_23675);
} else {
if((state_val_23721 === (31))){
var inst_23702 = (state_23720[(2)]);
var state_23720__$1 = state_23720;
if(cljs.core.truth_(inst_23702)){
var statearr_23736_23795 = state_23720__$1;
(statearr_23736_23795[(1)] = (32));

} else {
var statearr_23737_23796 = state_23720__$1;
(statearr_23737_23796[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (32))){
var inst_23679 = (state_23720[(14)]);
var state_23720__$1 = state_23720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23720__$1,(35),out,inst_23679);
} else {
if((state_val_23721 === (33))){
var inst_23672 = (state_23720[(12)]);
var inst_23650 = inst_23672;
var state_23720__$1 = (function (){var statearr_23738 = state_23720;
(statearr_23738[(7)] = inst_23650);

return statearr_23738;
})();
var statearr_23739_23797 = state_23720__$1;
(statearr_23739_23797[(2)] = null);

(statearr_23739_23797[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (13))){
var inst_23650 = (state_23720[(7)]);
var inst_23657 = inst_23650.cljs$lang$protocol_mask$partition0$;
var inst_23658 = (inst_23657 & (64));
var inst_23659 = inst_23650.cljs$core$ISeq$;
var inst_23660 = (inst_23658) || (inst_23659);
var state_23720__$1 = state_23720;
if(cljs.core.truth_(inst_23660)){
var statearr_23740_23798 = state_23720__$1;
(statearr_23740_23798[(1)] = (16));

} else {
var statearr_23741_23799 = state_23720__$1;
(statearr_23741_23799[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (22))){
var inst_23679 = (state_23720[(14)]);
var inst_23680 = (state_23720[(11)]);
var inst_23678 = (state_23720[(2)]);
var inst_23679__$1 = cljs.core.nth.call(null,inst_23678,(0),null);
var inst_23680__$1 = cljs.core.nth.call(null,inst_23678,(1),null);
var inst_23681 = (inst_23679__$1 == null);
var inst_23682 = cljs.core._EQ_.call(null,inst_23680__$1,change);
var inst_23683 = (inst_23681) || (inst_23682);
var state_23720__$1 = (function (){var statearr_23742 = state_23720;
(statearr_23742[(14)] = inst_23679__$1);

(statearr_23742[(11)] = inst_23680__$1);

return statearr_23742;
})();
if(cljs.core.truth_(inst_23683)){
var statearr_23743_23800 = state_23720__$1;
(statearr_23743_23800[(1)] = (23));

} else {
var statearr_23744_23801 = state_23720__$1;
(statearr_23744_23801[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (36))){
var inst_23672 = (state_23720[(12)]);
var inst_23650 = inst_23672;
var state_23720__$1 = (function (){var statearr_23745 = state_23720;
(statearr_23745[(7)] = inst_23650);

return statearr_23745;
})();
var statearr_23746_23802 = state_23720__$1;
(statearr_23746_23802[(2)] = null);

(statearr_23746_23802[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (29))){
var inst_23694 = (state_23720[(10)]);
var state_23720__$1 = state_23720;
var statearr_23747_23803 = state_23720__$1;
(statearr_23747_23803[(2)] = inst_23694);

(statearr_23747_23803[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (6))){
var state_23720__$1 = state_23720;
var statearr_23748_23804 = state_23720__$1;
(statearr_23748_23804[(2)] = false);

(statearr_23748_23804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (28))){
var inst_23690 = (state_23720[(2)]);
var inst_23691 = calc_state.call(null);
var inst_23650 = inst_23691;
var state_23720__$1 = (function (){var statearr_23749 = state_23720;
(statearr_23749[(15)] = inst_23690);

(statearr_23749[(7)] = inst_23650);

return statearr_23749;
})();
var statearr_23750_23805 = state_23720__$1;
(statearr_23750_23805[(2)] = null);

(statearr_23750_23805[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (25))){
var inst_23716 = (state_23720[(2)]);
var state_23720__$1 = state_23720;
var statearr_23751_23806 = state_23720__$1;
(statearr_23751_23806[(2)] = inst_23716);

(statearr_23751_23806[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (34))){
var inst_23714 = (state_23720[(2)]);
var state_23720__$1 = state_23720;
var statearr_23752_23807 = state_23720__$1;
(statearr_23752_23807[(2)] = inst_23714);

(statearr_23752_23807[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (17))){
var state_23720__$1 = state_23720;
var statearr_23753_23808 = state_23720__$1;
(statearr_23753_23808[(2)] = false);

(statearr_23753_23808[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (3))){
var state_23720__$1 = state_23720;
var statearr_23754_23809 = state_23720__$1;
(statearr_23754_23809[(2)] = false);

(statearr_23754_23809[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (12))){
var inst_23718 = (state_23720[(2)]);
var state_23720__$1 = state_23720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23720__$1,inst_23718);
} else {
if((state_val_23721 === (2))){
var inst_23626 = (state_23720[(8)]);
var inst_23631 = inst_23626.cljs$lang$protocol_mask$partition0$;
var inst_23632 = (inst_23631 & (64));
var inst_23633 = inst_23626.cljs$core$ISeq$;
var inst_23634 = (inst_23632) || (inst_23633);
var state_23720__$1 = state_23720;
if(cljs.core.truth_(inst_23634)){
var statearr_23755_23810 = state_23720__$1;
(statearr_23755_23810[(1)] = (5));

} else {
var statearr_23756_23811 = state_23720__$1;
(statearr_23756_23811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (23))){
var inst_23679 = (state_23720[(14)]);
var inst_23685 = (inst_23679 == null);
var state_23720__$1 = state_23720;
if(cljs.core.truth_(inst_23685)){
var statearr_23757_23812 = state_23720__$1;
(statearr_23757_23812[(1)] = (26));

} else {
var statearr_23758_23813 = state_23720__$1;
(statearr_23758_23813[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (35))){
var inst_23705 = (state_23720[(2)]);
var state_23720__$1 = state_23720;
if(cljs.core.truth_(inst_23705)){
var statearr_23759_23814 = state_23720__$1;
(statearr_23759_23814[(1)] = (36));

} else {
var statearr_23760_23815 = state_23720__$1;
(statearr_23760_23815[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (19))){
var inst_23650 = (state_23720[(7)]);
var inst_23669 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23650);
var state_23720__$1 = state_23720;
var statearr_23761_23816 = state_23720__$1;
(statearr_23761_23816[(2)] = inst_23669);

(statearr_23761_23816[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (11))){
var inst_23650 = (state_23720[(7)]);
var inst_23654 = (inst_23650 == null);
var inst_23655 = cljs.core.not.call(null,inst_23654);
var state_23720__$1 = state_23720;
if(inst_23655){
var statearr_23762_23817 = state_23720__$1;
(statearr_23762_23817[(1)] = (13));

} else {
var statearr_23763_23818 = state_23720__$1;
(statearr_23763_23818[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (9))){
var inst_23626 = (state_23720[(8)]);
var state_23720__$1 = state_23720;
var statearr_23764_23819 = state_23720__$1;
(statearr_23764_23819[(2)] = inst_23626);

(statearr_23764_23819[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (5))){
var state_23720__$1 = state_23720;
var statearr_23765_23820 = state_23720__$1;
(statearr_23765_23820[(2)] = true);

(statearr_23765_23820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (14))){
var state_23720__$1 = state_23720;
var statearr_23766_23821 = state_23720__$1;
(statearr_23766_23821[(2)] = false);

(statearr_23766_23821[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (26))){
var inst_23680 = (state_23720[(11)]);
var inst_23687 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23680);
var state_23720__$1 = state_23720;
var statearr_23767_23822 = state_23720__$1;
(statearr_23767_23822[(2)] = inst_23687);

(statearr_23767_23822[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (16))){
var state_23720__$1 = state_23720;
var statearr_23768_23823 = state_23720__$1;
(statearr_23768_23823[(2)] = true);

(statearr_23768_23823[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (38))){
var inst_23710 = (state_23720[(2)]);
var state_23720__$1 = state_23720;
var statearr_23769_23824 = state_23720__$1;
(statearr_23769_23824[(2)] = inst_23710);

(statearr_23769_23824[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (30))){
var inst_23673 = (state_23720[(9)]);
var inst_23674 = (state_23720[(13)]);
var inst_23680 = (state_23720[(11)]);
var inst_23697 = cljs.core.empty_QMARK_.call(null,inst_23673);
var inst_23698 = inst_23674.call(null,inst_23680);
var inst_23699 = cljs.core.not.call(null,inst_23698);
var inst_23700 = (inst_23697) && (inst_23699);
var state_23720__$1 = state_23720;
var statearr_23770_23825 = state_23720__$1;
(statearr_23770_23825[(2)] = inst_23700);

(statearr_23770_23825[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (10))){
var inst_23626 = (state_23720[(8)]);
var inst_23646 = (state_23720[(2)]);
var inst_23647 = cljs.core.get.call(null,inst_23646,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23648 = cljs.core.get.call(null,inst_23646,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23649 = cljs.core.get.call(null,inst_23646,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23650 = inst_23626;
var state_23720__$1 = (function (){var statearr_23771 = state_23720;
(statearr_23771[(16)] = inst_23647);

(statearr_23771[(17)] = inst_23649);

(statearr_23771[(7)] = inst_23650);

(statearr_23771[(18)] = inst_23648);

return statearr_23771;
})();
var statearr_23772_23826 = state_23720__$1;
(statearr_23772_23826[(2)] = null);

(statearr_23772_23826[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (18))){
var inst_23664 = (state_23720[(2)]);
var state_23720__$1 = state_23720;
var statearr_23773_23827 = state_23720__$1;
(statearr_23773_23827[(2)] = inst_23664);

(statearr_23773_23827[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (37))){
var state_23720__$1 = state_23720;
var statearr_23774_23828 = state_23720__$1;
(statearr_23774_23828[(2)] = null);

(statearr_23774_23828[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23721 === (8))){
var inst_23626 = (state_23720[(8)]);
var inst_23643 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23626);
var state_23720__$1 = state_23720;
var statearr_23775_23829 = state_23720__$1;
(statearr_23775_23829[(2)] = inst_23643);

(statearr_23775_23829[(1)] = (10));


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
});})(c__18797__auto___23783,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18776__auto__,c__18797__auto___23783,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18777__auto__ = null;
var cljs$core$async$mix_$_state_machine__18777__auto____0 = (function (){
var statearr_23779 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23779[(0)] = cljs$core$async$mix_$_state_machine__18777__auto__);

(statearr_23779[(1)] = (1));

return statearr_23779;
});
var cljs$core$async$mix_$_state_machine__18777__auto____1 = (function (state_23720){
while(true){
var ret_value__18778__auto__ = (function (){try{while(true){
var result__18779__auto__ = switch__18776__auto__.call(null,state_23720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18779__auto__;
}
break;
}
}catch (e23780){if((e23780 instanceof Object)){
var ex__18780__auto__ = e23780;
var statearr_23781_23830 = state_23720;
(statearr_23781_23830[(5)] = ex__18780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23831 = state_23720;
state_23720 = G__23831;
continue;
} else {
return ret_value__18778__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18777__auto__ = function(state_23720){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18777__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18777__auto____1.call(this,state_23720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18777__auto____0;
cljs$core$async$mix_$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18777__auto____1;
return cljs$core$async$mix_$_state_machine__18777__auto__;
})()
;})(switch__18776__auto__,c__18797__auto___23783,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18799__auto__ = (function (){var statearr_23782 = f__18798__auto__.call(null);
(statearr_23782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18797__auto___23783);

return statearr_23782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18799__auto__);
});})(c__18797__auto___23783,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__17427__auto__ = (((p == null))?null:p);
var m__17428__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17427__auto__)]);
if(!((m__17428__auto__ == null))){
return m__17428__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17428__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17428__auto____$1 == null))){
return m__17428__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__17427__auto__ = (((p == null))?null:p);
var m__17428__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17427__auto__)]);
if(!((m__17428__auto__ == null))){
return m__17428__auto__.call(null,p,v,ch);
} else {
var m__17428__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17428__auto____$1 == null))){
return m__17428__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args23832 = [];
var len__17830__auto___23835 = arguments.length;
var i__17831__auto___23836 = (0);
while(true){
if((i__17831__auto___23836 < len__17830__auto___23835)){
args23832.push((arguments[i__17831__auto___23836]));

var G__23837 = (i__17831__auto___23836 + (1));
i__17831__auto___23836 = G__23837;
continue;
} else {
}
break;
}

var G__23834 = args23832.length;
switch (G__23834) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23832.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17427__auto__ = (((p == null))?null:p);
var m__17428__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17427__auto__)]);
if(!((m__17428__auto__ == null))){
return m__17428__auto__.call(null,p);
} else {
var m__17428__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17428__auto____$1 == null))){
return m__17428__auto____$1.call(null,p);
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
var x__17427__auto__ = (((p == null))?null:p);
var m__17428__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17427__auto__)]);
if(!((m__17428__auto__ == null))){
return m__17428__auto__.call(null,p,v);
} else {
var m__17428__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17428__auto____$1 == null))){
return m__17428__auto____$1.call(null,p,v);
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
var args23840 = [];
var len__17830__auto___23965 = arguments.length;
var i__17831__auto___23966 = (0);
while(true){
if((i__17831__auto___23966 < len__17830__auto___23965)){
args23840.push((arguments[i__17831__auto___23966]));

var G__23967 = (i__17831__auto___23966 + (1));
i__17831__auto___23966 = G__23967;
continue;
} else {
}
break;
}

var G__23842 = args23840.length;
switch (G__23842) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23840.length)].join('')));

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
return (function (p1__23839_SHARP_){
if(cljs.core.truth_(p1__23839_SHARP_.call(null,topic))){
return p1__23839_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23839_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16771__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23843 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23843 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23844){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23844 = meta23844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23845,meta23844__$1){
var self__ = this;
var _23845__$1 = this;
return (new cljs.core.async.t_cljs$core$async23843(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23844__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23843.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23845){
var self__ = this;
var _23845__$1 = this;
return self__.meta23844;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23843.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23843.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23843.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async23843.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23843.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async23843.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23843.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23843.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23844","meta23844",1200624287,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23843.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23843.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23843";

cljs.core.async.t_cljs$core$async23843.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17370__auto__,writer__17371__auto__,opt__17372__auto__){
return cljs.core._write.call(null,writer__17371__auto__,"cljs.core.async/t_cljs$core$async23843");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23843 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23843(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23844){
return (new cljs.core.async.t_cljs$core$async23843(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23844));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23843(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18797__auto___23969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18797__auto___23969,mults,ensure_mult,p){
return (function (){
var f__18798__auto__ = (function (){var switch__18776__auto__ = ((function (c__18797__auto___23969,mults,ensure_mult,p){
return (function (state_23917){
var state_val_23918 = (state_23917[(1)]);
if((state_val_23918 === (7))){
var inst_23913 = (state_23917[(2)]);
var state_23917__$1 = state_23917;
var statearr_23919_23970 = state_23917__$1;
(statearr_23919_23970[(2)] = inst_23913);

(statearr_23919_23970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (20))){
var state_23917__$1 = state_23917;
var statearr_23920_23971 = state_23917__$1;
(statearr_23920_23971[(2)] = null);

(statearr_23920_23971[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (1))){
var state_23917__$1 = state_23917;
var statearr_23921_23972 = state_23917__$1;
(statearr_23921_23972[(2)] = null);

(statearr_23921_23972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (24))){
var inst_23896 = (state_23917[(7)]);
var inst_23905 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23896);
var state_23917__$1 = state_23917;
var statearr_23922_23973 = state_23917__$1;
(statearr_23922_23973[(2)] = inst_23905);

(statearr_23922_23973[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (4))){
var inst_23848 = (state_23917[(8)]);
var inst_23848__$1 = (state_23917[(2)]);
var inst_23849 = (inst_23848__$1 == null);
var state_23917__$1 = (function (){var statearr_23923 = state_23917;
(statearr_23923[(8)] = inst_23848__$1);

return statearr_23923;
})();
if(cljs.core.truth_(inst_23849)){
var statearr_23924_23974 = state_23917__$1;
(statearr_23924_23974[(1)] = (5));

} else {
var statearr_23925_23975 = state_23917__$1;
(statearr_23925_23975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (15))){
var inst_23890 = (state_23917[(2)]);
var state_23917__$1 = state_23917;
var statearr_23926_23976 = state_23917__$1;
(statearr_23926_23976[(2)] = inst_23890);

(statearr_23926_23976[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (21))){
var inst_23910 = (state_23917[(2)]);
var state_23917__$1 = (function (){var statearr_23927 = state_23917;
(statearr_23927[(9)] = inst_23910);

return statearr_23927;
})();
var statearr_23928_23977 = state_23917__$1;
(statearr_23928_23977[(2)] = null);

(statearr_23928_23977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (13))){
var inst_23872 = (state_23917[(10)]);
var inst_23874 = cljs.core.chunked_seq_QMARK_.call(null,inst_23872);
var state_23917__$1 = state_23917;
if(inst_23874){
var statearr_23929_23978 = state_23917__$1;
(statearr_23929_23978[(1)] = (16));

} else {
var statearr_23930_23979 = state_23917__$1;
(statearr_23930_23979[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (22))){
var inst_23902 = (state_23917[(2)]);
var state_23917__$1 = state_23917;
if(cljs.core.truth_(inst_23902)){
var statearr_23931_23980 = state_23917__$1;
(statearr_23931_23980[(1)] = (23));

} else {
var statearr_23932_23981 = state_23917__$1;
(statearr_23932_23981[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (6))){
var inst_23848 = (state_23917[(8)]);
var inst_23898 = (state_23917[(11)]);
var inst_23896 = (state_23917[(7)]);
var inst_23896__$1 = topic_fn.call(null,inst_23848);
var inst_23897 = cljs.core.deref.call(null,mults);
var inst_23898__$1 = cljs.core.get.call(null,inst_23897,inst_23896__$1);
var state_23917__$1 = (function (){var statearr_23933 = state_23917;
(statearr_23933[(11)] = inst_23898__$1);

(statearr_23933[(7)] = inst_23896__$1);

return statearr_23933;
})();
if(cljs.core.truth_(inst_23898__$1)){
var statearr_23934_23982 = state_23917__$1;
(statearr_23934_23982[(1)] = (19));

} else {
var statearr_23935_23983 = state_23917__$1;
(statearr_23935_23983[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (25))){
var inst_23907 = (state_23917[(2)]);
var state_23917__$1 = state_23917;
var statearr_23936_23984 = state_23917__$1;
(statearr_23936_23984[(2)] = inst_23907);

(statearr_23936_23984[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (17))){
var inst_23872 = (state_23917[(10)]);
var inst_23881 = cljs.core.first.call(null,inst_23872);
var inst_23882 = cljs.core.async.muxch_STAR_.call(null,inst_23881);
var inst_23883 = cljs.core.async.close_BANG_.call(null,inst_23882);
var inst_23884 = cljs.core.next.call(null,inst_23872);
var inst_23858 = inst_23884;
var inst_23859 = null;
var inst_23860 = (0);
var inst_23861 = (0);
var state_23917__$1 = (function (){var statearr_23937 = state_23917;
(statearr_23937[(12)] = inst_23858);

(statearr_23937[(13)] = inst_23861);

(statearr_23937[(14)] = inst_23860);

(statearr_23937[(15)] = inst_23883);

(statearr_23937[(16)] = inst_23859);

return statearr_23937;
})();
var statearr_23938_23985 = state_23917__$1;
(statearr_23938_23985[(2)] = null);

(statearr_23938_23985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (3))){
var inst_23915 = (state_23917[(2)]);
var state_23917__$1 = state_23917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23917__$1,inst_23915);
} else {
if((state_val_23918 === (12))){
var inst_23892 = (state_23917[(2)]);
var state_23917__$1 = state_23917;
var statearr_23939_23986 = state_23917__$1;
(statearr_23939_23986[(2)] = inst_23892);

(statearr_23939_23986[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (2))){
var state_23917__$1 = state_23917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23917__$1,(4),ch);
} else {
if((state_val_23918 === (23))){
var state_23917__$1 = state_23917;
var statearr_23940_23987 = state_23917__$1;
(statearr_23940_23987[(2)] = null);

(statearr_23940_23987[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (19))){
var inst_23848 = (state_23917[(8)]);
var inst_23898 = (state_23917[(11)]);
var inst_23900 = cljs.core.async.muxch_STAR_.call(null,inst_23898);
var state_23917__$1 = state_23917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23917__$1,(22),inst_23900,inst_23848);
} else {
if((state_val_23918 === (11))){
var inst_23858 = (state_23917[(12)]);
var inst_23872 = (state_23917[(10)]);
var inst_23872__$1 = cljs.core.seq.call(null,inst_23858);
var state_23917__$1 = (function (){var statearr_23941 = state_23917;
(statearr_23941[(10)] = inst_23872__$1);

return statearr_23941;
})();
if(inst_23872__$1){
var statearr_23942_23988 = state_23917__$1;
(statearr_23942_23988[(1)] = (13));

} else {
var statearr_23943_23989 = state_23917__$1;
(statearr_23943_23989[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (9))){
var inst_23894 = (state_23917[(2)]);
var state_23917__$1 = state_23917;
var statearr_23944_23990 = state_23917__$1;
(statearr_23944_23990[(2)] = inst_23894);

(statearr_23944_23990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (5))){
var inst_23855 = cljs.core.deref.call(null,mults);
var inst_23856 = cljs.core.vals.call(null,inst_23855);
var inst_23857 = cljs.core.seq.call(null,inst_23856);
var inst_23858 = inst_23857;
var inst_23859 = null;
var inst_23860 = (0);
var inst_23861 = (0);
var state_23917__$1 = (function (){var statearr_23945 = state_23917;
(statearr_23945[(12)] = inst_23858);

(statearr_23945[(13)] = inst_23861);

(statearr_23945[(14)] = inst_23860);

(statearr_23945[(16)] = inst_23859);

return statearr_23945;
})();
var statearr_23946_23991 = state_23917__$1;
(statearr_23946_23991[(2)] = null);

(statearr_23946_23991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (14))){
var state_23917__$1 = state_23917;
var statearr_23950_23992 = state_23917__$1;
(statearr_23950_23992[(2)] = null);

(statearr_23950_23992[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (16))){
var inst_23872 = (state_23917[(10)]);
var inst_23876 = cljs.core.chunk_first.call(null,inst_23872);
var inst_23877 = cljs.core.chunk_rest.call(null,inst_23872);
var inst_23878 = cljs.core.count.call(null,inst_23876);
var inst_23858 = inst_23877;
var inst_23859 = inst_23876;
var inst_23860 = inst_23878;
var inst_23861 = (0);
var state_23917__$1 = (function (){var statearr_23951 = state_23917;
(statearr_23951[(12)] = inst_23858);

(statearr_23951[(13)] = inst_23861);

(statearr_23951[(14)] = inst_23860);

(statearr_23951[(16)] = inst_23859);

return statearr_23951;
})();
var statearr_23952_23993 = state_23917__$1;
(statearr_23952_23993[(2)] = null);

(statearr_23952_23993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (10))){
var inst_23858 = (state_23917[(12)]);
var inst_23861 = (state_23917[(13)]);
var inst_23860 = (state_23917[(14)]);
var inst_23859 = (state_23917[(16)]);
var inst_23866 = cljs.core._nth.call(null,inst_23859,inst_23861);
var inst_23867 = cljs.core.async.muxch_STAR_.call(null,inst_23866);
var inst_23868 = cljs.core.async.close_BANG_.call(null,inst_23867);
var inst_23869 = (inst_23861 + (1));
var tmp23947 = inst_23858;
var tmp23948 = inst_23860;
var tmp23949 = inst_23859;
var inst_23858__$1 = tmp23947;
var inst_23859__$1 = tmp23949;
var inst_23860__$1 = tmp23948;
var inst_23861__$1 = inst_23869;
var state_23917__$1 = (function (){var statearr_23953 = state_23917;
(statearr_23953[(17)] = inst_23868);

(statearr_23953[(12)] = inst_23858__$1);

(statearr_23953[(13)] = inst_23861__$1);

(statearr_23953[(14)] = inst_23860__$1);

(statearr_23953[(16)] = inst_23859__$1);

return statearr_23953;
})();
var statearr_23954_23994 = state_23917__$1;
(statearr_23954_23994[(2)] = null);

(statearr_23954_23994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (18))){
var inst_23887 = (state_23917[(2)]);
var state_23917__$1 = state_23917;
var statearr_23955_23995 = state_23917__$1;
(statearr_23955_23995[(2)] = inst_23887);

(statearr_23955_23995[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23918 === (8))){
var inst_23861 = (state_23917[(13)]);
var inst_23860 = (state_23917[(14)]);
var inst_23863 = (inst_23861 < inst_23860);
var inst_23864 = inst_23863;
var state_23917__$1 = state_23917;
if(cljs.core.truth_(inst_23864)){
var statearr_23956_23996 = state_23917__$1;
(statearr_23956_23996[(1)] = (10));

} else {
var statearr_23957_23997 = state_23917__$1;
(statearr_23957_23997[(1)] = (11));

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
});})(c__18797__auto___23969,mults,ensure_mult,p))
;
return ((function (switch__18776__auto__,c__18797__auto___23969,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18777__auto__ = null;
var cljs$core$async$state_machine__18777__auto____0 = (function (){
var statearr_23961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23961[(0)] = cljs$core$async$state_machine__18777__auto__);

(statearr_23961[(1)] = (1));

return statearr_23961;
});
var cljs$core$async$state_machine__18777__auto____1 = (function (state_23917){
while(true){
var ret_value__18778__auto__ = (function (){try{while(true){
var result__18779__auto__ = switch__18776__auto__.call(null,state_23917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18779__auto__;
}
break;
}
}catch (e23962){if((e23962 instanceof Object)){
var ex__18780__auto__ = e23962;
var statearr_23963_23998 = state_23917;
(statearr_23963_23998[(5)] = ex__18780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23999 = state_23917;
state_23917 = G__23999;
continue;
} else {
return ret_value__18778__auto__;
}
break;
}
});
cljs$core$async$state_machine__18777__auto__ = function(state_23917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18777__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18777__auto____1.call(this,state_23917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18777__auto____0;
cljs$core$async$state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18777__auto____1;
return cljs$core$async$state_machine__18777__auto__;
})()
;})(switch__18776__auto__,c__18797__auto___23969,mults,ensure_mult,p))
})();
var state__18799__auto__ = (function (){var statearr_23964 = f__18798__auto__.call(null);
(statearr_23964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18797__auto___23969);

return statearr_23964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18799__auto__);
});})(c__18797__auto___23969,mults,ensure_mult,p))
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
var args24000 = [];
var len__17830__auto___24003 = arguments.length;
var i__17831__auto___24004 = (0);
while(true){
if((i__17831__auto___24004 < len__17830__auto___24003)){
args24000.push((arguments[i__17831__auto___24004]));

var G__24005 = (i__17831__auto___24004 + (1));
i__17831__auto___24004 = G__24005;
continue;
} else {
}
break;
}

var G__24002 = args24000.length;
switch (G__24002) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24000.length)].join('')));

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
var args24007 = [];
var len__17830__auto___24010 = arguments.length;
var i__17831__auto___24011 = (0);
while(true){
if((i__17831__auto___24011 < len__17830__auto___24010)){
args24007.push((arguments[i__17831__auto___24011]));

var G__24012 = (i__17831__auto___24011 + (1));
i__17831__auto___24011 = G__24012;
continue;
} else {
}
break;
}

var G__24009 = args24007.length;
switch (G__24009) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24007.length)].join('')));

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
var args24014 = [];
var len__17830__auto___24085 = arguments.length;
var i__17831__auto___24086 = (0);
while(true){
if((i__17831__auto___24086 < len__17830__auto___24085)){
args24014.push((arguments[i__17831__auto___24086]));

var G__24087 = (i__17831__auto___24086 + (1));
i__17831__auto___24086 = G__24087;
continue;
} else {
}
break;
}

var G__24016 = args24014.length;
switch (G__24016) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24014.length)].join('')));

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
var c__18797__auto___24089 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18797__auto___24089,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18798__auto__ = (function (){var switch__18776__auto__ = ((function (c__18797__auto___24089,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24055){
var state_val_24056 = (state_24055[(1)]);
if((state_val_24056 === (7))){
var state_24055__$1 = state_24055;
var statearr_24057_24090 = state_24055__$1;
(statearr_24057_24090[(2)] = null);

(statearr_24057_24090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24056 === (1))){
var state_24055__$1 = state_24055;
var statearr_24058_24091 = state_24055__$1;
(statearr_24058_24091[(2)] = null);

(statearr_24058_24091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24056 === (4))){
var inst_24019 = (state_24055[(7)]);
var inst_24021 = (inst_24019 < cnt);
var state_24055__$1 = state_24055;
if(cljs.core.truth_(inst_24021)){
var statearr_24059_24092 = state_24055__$1;
(statearr_24059_24092[(1)] = (6));

} else {
var statearr_24060_24093 = state_24055__$1;
(statearr_24060_24093[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24056 === (15))){
var inst_24051 = (state_24055[(2)]);
var state_24055__$1 = state_24055;
var statearr_24061_24094 = state_24055__$1;
(statearr_24061_24094[(2)] = inst_24051);

(statearr_24061_24094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24056 === (13))){
var inst_24044 = cljs.core.async.close_BANG_.call(null,out);
var state_24055__$1 = state_24055;
var statearr_24062_24095 = state_24055__$1;
(statearr_24062_24095[(2)] = inst_24044);

(statearr_24062_24095[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24056 === (6))){
var state_24055__$1 = state_24055;
var statearr_24063_24096 = state_24055__$1;
(statearr_24063_24096[(2)] = null);

(statearr_24063_24096[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24056 === (3))){
var inst_24053 = (state_24055[(2)]);
var state_24055__$1 = state_24055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24055__$1,inst_24053);
} else {
if((state_val_24056 === (12))){
var inst_24041 = (state_24055[(8)]);
var inst_24041__$1 = (state_24055[(2)]);
var inst_24042 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24041__$1);
var state_24055__$1 = (function (){var statearr_24064 = state_24055;
(statearr_24064[(8)] = inst_24041__$1);

return statearr_24064;
})();
if(cljs.core.truth_(inst_24042)){
var statearr_24065_24097 = state_24055__$1;
(statearr_24065_24097[(1)] = (13));

} else {
var statearr_24066_24098 = state_24055__$1;
(statearr_24066_24098[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24056 === (2))){
var inst_24018 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24019 = (0);
var state_24055__$1 = (function (){var statearr_24067 = state_24055;
(statearr_24067[(9)] = inst_24018);

(statearr_24067[(7)] = inst_24019);

return statearr_24067;
})();
var statearr_24068_24099 = state_24055__$1;
(statearr_24068_24099[(2)] = null);

(statearr_24068_24099[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24056 === (11))){
var inst_24019 = (state_24055[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24055,(10),Object,null,(9));
var inst_24028 = chs__$1.call(null,inst_24019);
var inst_24029 = done.call(null,inst_24019);
var inst_24030 = cljs.core.async.take_BANG_.call(null,inst_24028,inst_24029);
var state_24055__$1 = state_24055;
var statearr_24069_24100 = state_24055__$1;
(statearr_24069_24100[(2)] = inst_24030);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24055__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24056 === (9))){
var inst_24019 = (state_24055[(7)]);
var inst_24032 = (state_24055[(2)]);
var inst_24033 = (inst_24019 + (1));
var inst_24019__$1 = inst_24033;
var state_24055__$1 = (function (){var statearr_24070 = state_24055;
(statearr_24070[(7)] = inst_24019__$1);

(statearr_24070[(10)] = inst_24032);

return statearr_24070;
})();
var statearr_24071_24101 = state_24055__$1;
(statearr_24071_24101[(2)] = null);

(statearr_24071_24101[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24056 === (5))){
var inst_24039 = (state_24055[(2)]);
var state_24055__$1 = (function (){var statearr_24072 = state_24055;
(statearr_24072[(11)] = inst_24039);

return statearr_24072;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24055__$1,(12),dchan);
} else {
if((state_val_24056 === (14))){
var inst_24041 = (state_24055[(8)]);
var inst_24046 = cljs.core.apply.call(null,f,inst_24041);
var state_24055__$1 = state_24055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24055__$1,(16),out,inst_24046);
} else {
if((state_val_24056 === (16))){
var inst_24048 = (state_24055[(2)]);
var state_24055__$1 = (function (){var statearr_24073 = state_24055;
(statearr_24073[(12)] = inst_24048);

return statearr_24073;
})();
var statearr_24074_24102 = state_24055__$1;
(statearr_24074_24102[(2)] = null);

(statearr_24074_24102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24056 === (10))){
var inst_24023 = (state_24055[(2)]);
var inst_24024 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24055__$1 = (function (){var statearr_24075 = state_24055;
(statearr_24075[(13)] = inst_24023);

return statearr_24075;
})();
var statearr_24076_24103 = state_24055__$1;
(statearr_24076_24103[(2)] = inst_24024);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24055__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24056 === (8))){
var inst_24037 = (state_24055[(2)]);
var state_24055__$1 = state_24055;
var statearr_24077_24104 = state_24055__$1;
(statearr_24077_24104[(2)] = inst_24037);

(statearr_24077_24104[(1)] = (5));


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
});})(c__18797__auto___24089,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18776__auto__,c__18797__auto___24089,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18777__auto__ = null;
var cljs$core$async$state_machine__18777__auto____0 = (function (){
var statearr_24081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24081[(0)] = cljs$core$async$state_machine__18777__auto__);

(statearr_24081[(1)] = (1));

return statearr_24081;
});
var cljs$core$async$state_machine__18777__auto____1 = (function (state_24055){
while(true){
var ret_value__18778__auto__ = (function (){try{while(true){
var result__18779__auto__ = switch__18776__auto__.call(null,state_24055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18779__auto__;
}
break;
}
}catch (e24082){if((e24082 instanceof Object)){
var ex__18780__auto__ = e24082;
var statearr_24083_24105 = state_24055;
(statearr_24083_24105[(5)] = ex__18780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24106 = state_24055;
state_24055 = G__24106;
continue;
} else {
return ret_value__18778__auto__;
}
break;
}
});
cljs$core$async$state_machine__18777__auto__ = function(state_24055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18777__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18777__auto____1.call(this,state_24055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18777__auto____0;
cljs$core$async$state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18777__auto____1;
return cljs$core$async$state_machine__18777__auto__;
})()
;})(switch__18776__auto__,c__18797__auto___24089,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18799__auto__ = (function (){var statearr_24084 = f__18798__auto__.call(null);
(statearr_24084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18797__auto___24089);

return statearr_24084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18799__auto__);
});})(c__18797__auto___24089,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args24108 = [];
var len__17830__auto___24164 = arguments.length;
var i__17831__auto___24165 = (0);
while(true){
if((i__17831__auto___24165 < len__17830__auto___24164)){
args24108.push((arguments[i__17831__auto___24165]));

var G__24166 = (i__17831__auto___24165 + (1));
i__17831__auto___24165 = G__24166;
continue;
} else {
}
break;
}

var G__24110 = args24108.length;
switch (G__24110) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24108.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18797__auto___24168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18797__auto___24168,out){
return (function (){
var f__18798__auto__ = (function (){var switch__18776__auto__ = ((function (c__18797__auto___24168,out){
return (function (state_24140){
var state_val_24141 = (state_24140[(1)]);
if((state_val_24141 === (7))){
var inst_24120 = (state_24140[(7)]);
var inst_24119 = (state_24140[(8)]);
var inst_24119__$1 = (state_24140[(2)]);
var inst_24120__$1 = cljs.core.nth.call(null,inst_24119__$1,(0),null);
var inst_24121 = cljs.core.nth.call(null,inst_24119__$1,(1),null);
var inst_24122 = (inst_24120__$1 == null);
var state_24140__$1 = (function (){var statearr_24142 = state_24140;
(statearr_24142[(9)] = inst_24121);

(statearr_24142[(7)] = inst_24120__$1);

(statearr_24142[(8)] = inst_24119__$1);

return statearr_24142;
})();
if(cljs.core.truth_(inst_24122)){
var statearr_24143_24169 = state_24140__$1;
(statearr_24143_24169[(1)] = (8));

} else {
var statearr_24144_24170 = state_24140__$1;
(statearr_24144_24170[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24141 === (1))){
var inst_24111 = cljs.core.vec.call(null,chs);
var inst_24112 = inst_24111;
var state_24140__$1 = (function (){var statearr_24145 = state_24140;
(statearr_24145[(10)] = inst_24112);

return statearr_24145;
})();
var statearr_24146_24171 = state_24140__$1;
(statearr_24146_24171[(2)] = null);

(statearr_24146_24171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24141 === (4))){
var inst_24112 = (state_24140[(10)]);
var state_24140__$1 = state_24140;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24140__$1,(7),inst_24112);
} else {
if((state_val_24141 === (6))){
var inst_24136 = (state_24140[(2)]);
var state_24140__$1 = state_24140;
var statearr_24147_24172 = state_24140__$1;
(statearr_24147_24172[(2)] = inst_24136);

(statearr_24147_24172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24141 === (3))){
var inst_24138 = (state_24140[(2)]);
var state_24140__$1 = state_24140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24140__$1,inst_24138);
} else {
if((state_val_24141 === (2))){
var inst_24112 = (state_24140[(10)]);
var inst_24114 = cljs.core.count.call(null,inst_24112);
var inst_24115 = (inst_24114 > (0));
var state_24140__$1 = state_24140;
if(cljs.core.truth_(inst_24115)){
var statearr_24149_24173 = state_24140__$1;
(statearr_24149_24173[(1)] = (4));

} else {
var statearr_24150_24174 = state_24140__$1;
(statearr_24150_24174[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24141 === (11))){
var inst_24112 = (state_24140[(10)]);
var inst_24129 = (state_24140[(2)]);
var tmp24148 = inst_24112;
var inst_24112__$1 = tmp24148;
var state_24140__$1 = (function (){var statearr_24151 = state_24140;
(statearr_24151[(11)] = inst_24129);

(statearr_24151[(10)] = inst_24112__$1);

return statearr_24151;
})();
var statearr_24152_24175 = state_24140__$1;
(statearr_24152_24175[(2)] = null);

(statearr_24152_24175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24141 === (9))){
var inst_24120 = (state_24140[(7)]);
var state_24140__$1 = state_24140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24140__$1,(11),out,inst_24120);
} else {
if((state_val_24141 === (5))){
var inst_24134 = cljs.core.async.close_BANG_.call(null,out);
var state_24140__$1 = state_24140;
var statearr_24153_24176 = state_24140__$1;
(statearr_24153_24176[(2)] = inst_24134);

(statearr_24153_24176[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24141 === (10))){
var inst_24132 = (state_24140[(2)]);
var state_24140__$1 = state_24140;
var statearr_24154_24177 = state_24140__$1;
(statearr_24154_24177[(2)] = inst_24132);

(statearr_24154_24177[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24141 === (8))){
var inst_24121 = (state_24140[(9)]);
var inst_24120 = (state_24140[(7)]);
var inst_24119 = (state_24140[(8)]);
var inst_24112 = (state_24140[(10)]);
var inst_24124 = (function (){var cs = inst_24112;
var vec__24117 = inst_24119;
var v = inst_24120;
var c = inst_24121;
return ((function (cs,vec__24117,v,c,inst_24121,inst_24120,inst_24119,inst_24112,state_val_24141,c__18797__auto___24168,out){
return (function (p1__24107_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24107_SHARP_);
});
;})(cs,vec__24117,v,c,inst_24121,inst_24120,inst_24119,inst_24112,state_val_24141,c__18797__auto___24168,out))
})();
var inst_24125 = cljs.core.filterv.call(null,inst_24124,inst_24112);
var inst_24112__$1 = inst_24125;
var state_24140__$1 = (function (){var statearr_24155 = state_24140;
(statearr_24155[(10)] = inst_24112__$1);

return statearr_24155;
})();
var statearr_24156_24178 = state_24140__$1;
(statearr_24156_24178[(2)] = null);

(statearr_24156_24178[(1)] = (2));


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
});})(c__18797__auto___24168,out))
;
return ((function (switch__18776__auto__,c__18797__auto___24168,out){
return (function() {
var cljs$core$async$state_machine__18777__auto__ = null;
var cljs$core$async$state_machine__18777__auto____0 = (function (){
var statearr_24160 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24160[(0)] = cljs$core$async$state_machine__18777__auto__);

(statearr_24160[(1)] = (1));

return statearr_24160;
});
var cljs$core$async$state_machine__18777__auto____1 = (function (state_24140){
while(true){
var ret_value__18778__auto__ = (function (){try{while(true){
var result__18779__auto__ = switch__18776__auto__.call(null,state_24140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18779__auto__;
}
break;
}
}catch (e24161){if((e24161 instanceof Object)){
var ex__18780__auto__ = e24161;
var statearr_24162_24179 = state_24140;
(statearr_24162_24179[(5)] = ex__18780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24180 = state_24140;
state_24140 = G__24180;
continue;
} else {
return ret_value__18778__auto__;
}
break;
}
});
cljs$core$async$state_machine__18777__auto__ = function(state_24140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18777__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18777__auto____1.call(this,state_24140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18777__auto____0;
cljs$core$async$state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18777__auto____1;
return cljs$core$async$state_machine__18777__auto__;
})()
;})(switch__18776__auto__,c__18797__auto___24168,out))
})();
var state__18799__auto__ = (function (){var statearr_24163 = f__18798__auto__.call(null);
(statearr_24163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18797__auto___24168);

return statearr_24163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18799__auto__);
});})(c__18797__auto___24168,out))
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
var args24181 = [];
var len__17830__auto___24230 = arguments.length;
var i__17831__auto___24231 = (0);
while(true){
if((i__17831__auto___24231 < len__17830__auto___24230)){
args24181.push((arguments[i__17831__auto___24231]));

var G__24232 = (i__17831__auto___24231 + (1));
i__17831__auto___24231 = G__24232;
continue;
} else {
}
break;
}

var G__24183 = args24181.length;
switch (G__24183) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24181.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18797__auto___24234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18797__auto___24234,out){
return (function (){
var f__18798__auto__ = (function (){var switch__18776__auto__ = ((function (c__18797__auto___24234,out){
return (function (state_24207){
var state_val_24208 = (state_24207[(1)]);
if((state_val_24208 === (7))){
var inst_24189 = (state_24207[(7)]);
var inst_24189__$1 = (state_24207[(2)]);
var inst_24190 = (inst_24189__$1 == null);
var inst_24191 = cljs.core.not.call(null,inst_24190);
var state_24207__$1 = (function (){var statearr_24209 = state_24207;
(statearr_24209[(7)] = inst_24189__$1);

return statearr_24209;
})();
if(inst_24191){
var statearr_24210_24235 = state_24207__$1;
(statearr_24210_24235[(1)] = (8));

} else {
var statearr_24211_24236 = state_24207__$1;
(statearr_24211_24236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24208 === (1))){
var inst_24184 = (0);
var state_24207__$1 = (function (){var statearr_24212 = state_24207;
(statearr_24212[(8)] = inst_24184);

return statearr_24212;
})();
var statearr_24213_24237 = state_24207__$1;
(statearr_24213_24237[(2)] = null);

(statearr_24213_24237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24208 === (4))){
var state_24207__$1 = state_24207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24207__$1,(7),ch);
} else {
if((state_val_24208 === (6))){
var inst_24202 = (state_24207[(2)]);
var state_24207__$1 = state_24207;
var statearr_24214_24238 = state_24207__$1;
(statearr_24214_24238[(2)] = inst_24202);

(statearr_24214_24238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24208 === (3))){
var inst_24204 = (state_24207[(2)]);
var inst_24205 = cljs.core.async.close_BANG_.call(null,out);
var state_24207__$1 = (function (){var statearr_24215 = state_24207;
(statearr_24215[(9)] = inst_24204);

return statearr_24215;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24207__$1,inst_24205);
} else {
if((state_val_24208 === (2))){
var inst_24184 = (state_24207[(8)]);
var inst_24186 = (inst_24184 < n);
var state_24207__$1 = state_24207;
if(cljs.core.truth_(inst_24186)){
var statearr_24216_24239 = state_24207__$1;
(statearr_24216_24239[(1)] = (4));

} else {
var statearr_24217_24240 = state_24207__$1;
(statearr_24217_24240[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24208 === (11))){
var inst_24184 = (state_24207[(8)]);
var inst_24194 = (state_24207[(2)]);
var inst_24195 = (inst_24184 + (1));
var inst_24184__$1 = inst_24195;
var state_24207__$1 = (function (){var statearr_24218 = state_24207;
(statearr_24218[(8)] = inst_24184__$1);

(statearr_24218[(10)] = inst_24194);

return statearr_24218;
})();
var statearr_24219_24241 = state_24207__$1;
(statearr_24219_24241[(2)] = null);

(statearr_24219_24241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24208 === (9))){
var state_24207__$1 = state_24207;
var statearr_24220_24242 = state_24207__$1;
(statearr_24220_24242[(2)] = null);

(statearr_24220_24242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24208 === (5))){
var state_24207__$1 = state_24207;
var statearr_24221_24243 = state_24207__$1;
(statearr_24221_24243[(2)] = null);

(statearr_24221_24243[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24208 === (10))){
var inst_24199 = (state_24207[(2)]);
var state_24207__$1 = state_24207;
var statearr_24222_24244 = state_24207__$1;
(statearr_24222_24244[(2)] = inst_24199);

(statearr_24222_24244[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24208 === (8))){
var inst_24189 = (state_24207[(7)]);
var state_24207__$1 = state_24207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24207__$1,(11),out,inst_24189);
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
});})(c__18797__auto___24234,out))
;
return ((function (switch__18776__auto__,c__18797__auto___24234,out){
return (function() {
var cljs$core$async$state_machine__18777__auto__ = null;
var cljs$core$async$state_machine__18777__auto____0 = (function (){
var statearr_24226 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24226[(0)] = cljs$core$async$state_machine__18777__auto__);

(statearr_24226[(1)] = (1));

return statearr_24226;
});
var cljs$core$async$state_machine__18777__auto____1 = (function (state_24207){
while(true){
var ret_value__18778__auto__ = (function (){try{while(true){
var result__18779__auto__ = switch__18776__auto__.call(null,state_24207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18779__auto__;
}
break;
}
}catch (e24227){if((e24227 instanceof Object)){
var ex__18780__auto__ = e24227;
var statearr_24228_24245 = state_24207;
(statearr_24228_24245[(5)] = ex__18780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24246 = state_24207;
state_24207 = G__24246;
continue;
} else {
return ret_value__18778__auto__;
}
break;
}
});
cljs$core$async$state_machine__18777__auto__ = function(state_24207){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18777__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18777__auto____1.call(this,state_24207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18777__auto____0;
cljs$core$async$state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18777__auto____1;
return cljs$core$async$state_machine__18777__auto__;
})()
;})(switch__18776__auto__,c__18797__auto___24234,out))
})();
var state__18799__auto__ = (function (){var statearr_24229 = f__18798__auto__.call(null);
(statearr_24229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18797__auto___24234);

return statearr_24229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18799__auto__);
});})(c__18797__auto___24234,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24254 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24254 = (function (map_LT_,f,ch,meta24255){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24255 = meta24255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24256,meta24255__$1){
var self__ = this;
var _24256__$1 = this;
return (new cljs.core.async.t_cljs$core$async24254(self__.map_LT_,self__.f,self__.ch,meta24255__$1));
});

cljs.core.async.t_cljs$core$async24254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24256){
var self__ = this;
var _24256__$1 = this;
return self__.meta24255;
});

cljs.core.async.t_cljs$core$async24254.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24254.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24254.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24254.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24254.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24257 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24257 = (function (map_LT_,f,ch,meta24255,_,fn1,meta24258){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24255 = meta24255;
this._ = _;
this.fn1 = fn1;
this.meta24258 = meta24258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24259,meta24258__$1){
var self__ = this;
var _24259__$1 = this;
return (new cljs.core.async.t_cljs$core$async24257(self__.map_LT_,self__.f,self__.ch,self__.meta24255,self__._,self__.fn1,meta24258__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24257.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24259){
var self__ = this;
var _24259__$1 = this;
return self__.meta24258;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24257.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24257.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24257.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24257.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24247_SHARP_){
return f1.call(null,(((p1__24247_SHARP_ == null))?null:self__.f.call(null,p1__24247_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24257.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24255","meta24255",-109078287,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24254","cljs.core.async/t_cljs$core$async24254",-2133332202,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24258","meta24258",-1332409135,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24257.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24257.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24257";

cljs.core.async.t_cljs$core$async24257.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17370__auto__,writer__17371__auto__,opt__17372__auto__){
return cljs.core._write.call(null,writer__17371__auto__,"cljs.core.async/t_cljs$core$async24257");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24257 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24257(map_LT___$1,f__$1,ch__$1,meta24255__$1,___$2,fn1__$1,meta24258){
return (new cljs.core.async.t_cljs$core$async24257(map_LT___$1,f__$1,ch__$1,meta24255__$1,___$2,fn1__$1,meta24258));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24257(self__.map_LT_,self__.f,self__.ch,self__.meta24255,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async24254.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24254.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24254.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24255","meta24255",-109078287,null)], null);
});

cljs.core.async.t_cljs$core$async24254.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24254.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24254";

cljs.core.async.t_cljs$core$async24254.cljs$lang$ctorPrWriter = (function (this__17370__auto__,writer__17371__auto__,opt__17372__auto__){
return cljs.core._write.call(null,writer__17371__auto__,"cljs.core.async/t_cljs$core$async24254");
});

cljs.core.async.__GT_t_cljs$core$async24254 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24254(map_LT___$1,f__$1,ch__$1,meta24255){
return (new cljs.core.async.t_cljs$core$async24254(map_LT___$1,f__$1,ch__$1,meta24255));
});

}

return (new cljs.core.async.t_cljs$core$async24254(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24263 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24263 = (function (map_GT_,f,ch,meta24264){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24264 = meta24264;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24265,meta24264__$1){
var self__ = this;
var _24265__$1 = this;
return (new cljs.core.async.t_cljs$core$async24263(self__.map_GT_,self__.f,self__.ch,meta24264__$1));
});

cljs.core.async.t_cljs$core$async24263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24265){
var self__ = this;
var _24265__$1 = this;
return self__.meta24264;
});

cljs.core.async.t_cljs$core$async24263.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24263.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24263.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24263.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24263.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24263.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24263.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24264","meta24264",1563984170,null)], null);
});

cljs.core.async.t_cljs$core$async24263.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24263.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24263";

cljs.core.async.t_cljs$core$async24263.cljs$lang$ctorPrWriter = (function (this__17370__auto__,writer__17371__auto__,opt__17372__auto__){
return cljs.core._write.call(null,writer__17371__auto__,"cljs.core.async/t_cljs$core$async24263");
});

cljs.core.async.__GT_t_cljs$core$async24263 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24263(map_GT___$1,f__$1,ch__$1,meta24264){
return (new cljs.core.async.t_cljs$core$async24263(map_GT___$1,f__$1,ch__$1,meta24264));
});

}

return (new cljs.core.async.t_cljs$core$async24263(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24269 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24269 = (function (filter_GT_,p,ch,meta24270){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24270 = meta24270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24271,meta24270__$1){
var self__ = this;
var _24271__$1 = this;
return (new cljs.core.async.t_cljs$core$async24269(self__.filter_GT_,self__.p,self__.ch,meta24270__$1));
});

cljs.core.async.t_cljs$core$async24269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24271){
var self__ = this;
var _24271__$1 = this;
return self__.meta24270;
});

cljs.core.async.t_cljs$core$async24269.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24269.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24269.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24269.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24269.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24269.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24269.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24269.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24270","meta24270",1100140803,null)], null);
});

cljs.core.async.t_cljs$core$async24269.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24269.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24269";

cljs.core.async.t_cljs$core$async24269.cljs$lang$ctorPrWriter = (function (this__17370__auto__,writer__17371__auto__,opt__17372__auto__){
return cljs.core._write.call(null,writer__17371__auto__,"cljs.core.async/t_cljs$core$async24269");
});

cljs.core.async.__GT_t_cljs$core$async24269 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24269(filter_GT___$1,p__$1,ch__$1,meta24270){
return (new cljs.core.async.t_cljs$core$async24269(filter_GT___$1,p__$1,ch__$1,meta24270));
});

}

return (new cljs.core.async.t_cljs$core$async24269(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args24272 = [];
var len__17830__auto___24316 = arguments.length;
var i__17831__auto___24317 = (0);
while(true){
if((i__17831__auto___24317 < len__17830__auto___24316)){
args24272.push((arguments[i__17831__auto___24317]));

var G__24318 = (i__17831__auto___24317 + (1));
i__17831__auto___24317 = G__24318;
continue;
} else {
}
break;
}

var G__24274 = args24272.length;
switch (G__24274) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24272.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18797__auto___24320 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18797__auto___24320,out){
return (function (){
var f__18798__auto__ = (function (){var switch__18776__auto__ = ((function (c__18797__auto___24320,out){
return (function (state_24295){
var state_val_24296 = (state_24295[(1)]);
if((state_val_24296 === (7))){
var inst_24291 = (state_24295[(2)]);
var state_24295__$1 = state_24295;
var statearr_24297_24321 = state_24295__$1;
(statearr_24297_24321[(2)] = inst_24291);

(statearr_24297_24321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24296 === (1))){
var state_24295__$1 = state_24295;
var statearr_24298_24322 = state_24295__$1;
(statearr_24298_24322[(2)] = null);

(statearr_24298_24322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24296 === (4))){
var inst_24277 = (state_24295[(7)]);
var inst_24277__$1 = (state_24295[(2)]);
var inst_24278 = (inst_24277__$1 == null);
var state_24295__$1 = (function (){var statearr_24299 = state_24295;
(statearr_24299[(7)] = inst_24277__$1);

return statearr_24299;
})();
if(cljs.core.truth_(inst_24278)){
var statearr_24300_24323 = state_24295__$1;
(statearr_24300_24323[(1)] = (5));

} else {
var statearr_24301_24324 = state_24295__$1;
(statearr_24301_24324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24296 === (6))){
var inst_24277 = (state_24295[(7)]);
var inst_24282 = p.call(null,inst_24277);
var state_24295__$1 = state_24295;
if(cljs.core.truth_(inst_24282)){
var statearr_24302_24325 = state_24295__$1;
(statearr_24302_24325[(1)] = (8));

} else {
var statearr_24303_24326 = state_24295__$1;
(statearr_24303_24326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24296 === (3))){
var inst_24293 = (state_24295[(2)]);
var state_24295__$1 = state_24295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24295__$1,inst_24293);
} else {
if((state_val_24296 === (2))){
var state_24295__$1 = state_24295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24295__$1,(4),ch);
} else {
if((state_val_24296 === (11))){
var inst_24285 = (state_24295[(2)]);
var state_24295__$1 = state_24295;
var statearr_24304_24327 = state_24295__$1;
(statearr_24304_24327[(2)] = inst_24285);

(statearr_24304_24327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24296 === (9))){
var state_24295__$1 = state_24295;
var statearr_24305_24328 = state_24295__$1;
(statearr_24305_24328[(2)] = null);

(statearr_24305_24328[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24296 === (5))){
var inst_24280 = cljs.core.async.close_BANG_.call(null,out);
var state_24295__$1 = state_24295;
var statearr_24306_24329 = state_24295__$1;
(statearr_24306_24329[(2)] = inst_24280);

(statearr_24306_24329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24296 === (10))){
var inst_24288 = (state_24295[(2)]);
var state_24295__$1 = (function (){var statearr_24307 = state_24295;
(statearr_24307[(8)] = inst_24288);

return statearr_24307;
})();
var statearr_24308_24330 = state_24295__$1;
(statearr_24308_24330[(2)] = null);

(statearr_24308_24330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24296 === (8))){
var inst_24277 = (state_24295[(7)]);
var state_24295__$1 = state_24295;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24295__$1,(11),out,inst_24277);
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
});})(c__18797__auto___24320,out))
;
return ((function (switch__18776__auto__,c__18797__auto___24320,out){
return (function() {
var cljs$core$async$state_machine__18777__auto__ = null;
var cljs$core$async$state_machine__18777__auto____0 = (function (){
var statearr_24312 = [null,null,null,null,null,null,null,null,null];
(statearr_24312[(0)] = cljs$core$async$state_machine__18777__auto__);

(statearr_24312[(1)] = (1));

return statearr_24312;
});
var cljs$core$async$state_machine__18777__auto____1 = (function (state_24295){
while(true){
var ret_value__18778__auto__ = (function (){try{while(true){
var result__18779__auto__ = switch__18776__auto__.call(null,state_24295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18779__auto__;
}
break;
}
}catch (e24313){if((e24313 instanceof Object)){
var ex__18780__auto__ = e24313;
var statearr_24314_24331 = state_24295;
(statearr_24314_24331[(5)] = ex__18780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24332 = state_24295;
state_24295 = G__24332;
continue;
} else {
return ret_value__18778__auto__;
}
break;
}
});
cljs$core$async$state_machine__18777__auto__ = function(state_24295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18777__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18777__auto____1.call(this,state_24295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18777__auto____0;
cljs$core$async$state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18777__auto____1;
return cljs$core$async$state_machine__18777__auto__;
})()
;})(switch__18776__auto__,c__18797__auto___24320,out))
})();
var state__18799__auto__ = (function (){var statearr_24315 = f__18798__auto__.call(null);
(statearr_24315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18797__auto___24320);

return statearr_24315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18799__auto__);
});})(c__18797__auto___24320,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24333 = [];
var len__17830__auto___24336 = arguments.length;
var i__17831__auto___24337 = (0);
while(true){
if((i__17831__auto___24337 < len__17830__auto___24336)){
args24333.push((arguments[i__17831__auto___24337]));

var G__24338 = (i__17831__auto___24337 + (1));
i__17831__auto___24337 = G__24338;
continue;
} else {
}
break;
}

var G__24335 = args24333.length;
switch (G__24335) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24333.length)].join('')));

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
var c__18797__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18797__auto__){
return (function (){
var f__18798__auto__ = (function (){var switch__18776__auto__ = ((function (c__18797__auto__){
return (function (state_24505){
var state_val_24506 = (state_24505[(1)]);
if((state_val_24506 === (7))){
var inst_24501 = (state_24505[(2)]);
var state_24505__$1 = state_24505;
var statearr_24507_24548 = state_24505__$1;
(statearr_24507_24548[(2)] = inst_24501);

(statearr_24507_24548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24506 === (20))){
var inst_24471 = (state_24505[(7)]);
var inst_24482 = (state_24505[(2)]);
var inst_24483 = cljs.core.next.call(null,inst_24471);
var inst_24457 = inst_24483;
var inst_24458 = null;
var inst_24459 = (0);
var inst_24460 = (0);
var state_24505__$1 = (function (){var statearr_24508 = state_24505;
(statearr_24508[(8)] = inst_24457);

(statearr_24508[(9)] = inst_24459);

(statearr_24508[(10)] = inst_24482);

(statearr_24508[(11)] = inst_24458);

(statearr_24508[(12)] = inst_24460);

return statearr_24508;
})();
var statearr_24509_24549 = state_24505__$1;
(statearr_24509_24549[(2)] = null);

(statearr_24509_24549[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24506 === (1))){
var state_24505__$1 = state_24505;
var statearr_24510_24550 = state_24505__$1;
(statearr_24510_24550[(2)] = null);

(statearr_24510_24550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24506 === (4))){
var inst_24446 = (state_24505[(13)]);
var inst_24446__$1 = (state_24505[(2)]);
var inst_24447 = (inst_24446__$1 == null);
var state_24505__$1 = (function (){var statearr_24511 = state_24505;
(statearr_24511[(13)] = inst_24446__$1);

return statearr_24511;
})();
if(cljs.core.truth_(inst_24447)){
var statearr_24512_24551 = state_24505__$1;
(statearr_24512_24551[(1)] = (5));

} else {
var statearr_24513_24552 = state_24505__$1;
(statearr_24513_24552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24506 === (15))){
var state_24505__$1 = state_24505;
var statearr_24517_24553 = state_24505__$1;
(statearr_24517_24553[(2)] = null);

(statearr_24517_24553[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24506 === (21))){
var state_24505__$1 = state_24505;
var statearr_24518_24554 = state_24505__$1;
(statearr_24518_24554[(2)] = null);

(statearr_24518_24554[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24506 === (13))){
var inst_24457 = (state_24505[(8)]);
var inst_24459 = (state_24505[(9)]);
var inst_24458 = (state_24505[(11)]);
var inst_24460 = (state_24505[(12)]);
var inst_24467 = (state_24505[(2)]);
var inst_24468 = (inst_24460 + (1));
var tmp24514 = inst_24457;
var tmp24515 = inst_24459;
var tmp24516 = inst_24458;
var inst_24457__$1 = tmp24514;
var inst_24458__$1 = tmp24516;
var inst_24459__$1 = tmp24515;
var inst_24460__$1 = inst_24468;
var state_24505__$1 = (function (){var statearr_24519 = state_24505;
(statearr_24519[(8)] = inst_24457__$1);

(statearr_24519[(9)] = inst_24459__$1);

(statearr_24519[(11)] = inst_24458__$1);

(statearr_24519[(14)] = inst_24467);

(statearr_24519[(12)] = inst_24460__$1);

return statearr_24519;
})();
var statearr_24520_24555 = state_24505__$1;
(statearr_24520_24555[(2)] = null);

(statearr_24520_24555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24506 === (22))){
var state_24505__$1 = state_24505;
var statearr_24521_24556 = state_24505__$1;
(statearr_24521_24556[(2)] = null);

(statearr_24521_24556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24506 === (6))){
var inst_24446 = (state_24505[(13)]);
var inst_24455 = f.call(null,inst_24446);
var inst_24456 = cljs.core.seq.call(null,inst_24455);
var inst_24457 = inst_24456;
var inst_24458 = null;
var inst_24459 = (0);
var inst_24460 = (0);
var state_24505__$1 = (function (){var statearr_24522 = state_24505;
(statearr_24522[(8)] = inst_24457);

(statearr_24522[(9)] = inst_24459);

(statearr_24522[(11)] = inst_24458);

(statearr_24522[(12)] = inst_24460);

return statearr_24522;
})();
var statearr_24523_24557 = state_24505__$1;
(statearr_24523_24557[(2)] = null);

(statearr_24523_24557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24506 === (17))){
var inst_24471 = (state_24505[(7)]);
var inst_24475 = cljs.core.chunk_first.call(null,inst_24471);
var inst_24476 = cljs.core.chunk_rest.call(null,inst_24471);
var inst_24477 = cljs.core.count.call(null,inst_24475);
var inst_24457 = inst_24476;
var inst_24458 = inst_24475;
var inst_24459 = inst_24477;
var inst_24460 = (0);
var state_24505__$1 = (function (){var statearr_24524 = state_24505;
(statearr_24524[(8)] = inst_24457);

(statearr_24524[(9)] = inst_24459);

(statearr_24524[(11)] = inst_24458);

(statearr_24524[(12)] = inst_24460);

return statearr_24524;
})();
var statearr_24525_24558 = state_24505__$1;
(statearr_24525_24558[(2)] = null);

(statearr_24525_24558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24506 === (3))){
var inst_24503 = (state_24505[(2)]);
var state_24505__$1 = state_24505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24505__$1,inst_24503);
} else {
if((state_val_24506 === (12))){
var inst_24491 = (state_24505[(2)]);
var state_24505__$1 = state_24505;
var statearr_24526_24559 = state_24505__$1;
(statearr_24526_24559[(2)] = inst_24491);

(statearr_24526_24559[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24506 === (2))){
var state_24505__$1 = state_24505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24505__$1,(4),in$);
} else {
if((state_val_24506 === (23))){
var inst_24499 = (state_24505[(2)]);
var state_24505__$1 = state_24505;
var statearr_24527_24560 = state_24505__$1;
(statearr_24527_24560[(2)] = inst_24499);

(statearr_24527_24560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24506 === (19))){
var inst_24486 = (state_24505[(2)]);
var state_24505__$1 = state_24505;
var statearr_24528_24561 = state_24505__$1;
(statearr_24528_24561[(2)] = inst_24486);

(statearr_24528_24561[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24506 === (11))){
var inst_24457 = (state_24505[(8)]);
var inst_24471 = (state_24505[(7)]);
var inst_24471__$1 = cljs.core.seq.call(null,inst_24457);
var state_24505__$1 = (function (){var statearr_24529 = state_24505;
(statearr_24529[(7)] = inst_24471__$1);

return statearr_24529;
})();
if(inst_24471__$1){
var statearr_24530_24562 = state_24505__$1;
(statearr_24530_24562[(1)] = (14));

} else {
var statearr_24531_24563 = state_24505__$1;
(statearr_24531_24563[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24506 === (9))){
var inst_24493 = (state_24505[(2)]);
var inst_24494 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24505__$1 = (function (){var statearr_24532 = state_24505;
(statearr_24532[(15)] = inst_24493);

return statearr_24532;
})();
if(cljs.core.truth_(inst_24494)){
var statearr_24533_24564 = state_24505__$1;
(statearr_24533_24564[(1)] = (21));

} else {
var statearr_24534_24565 = state_24505__$1;
(statearr_24534_24565[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24506 === (5))){
var inst_24449 = cljs.core.async.close_BANG_.call(null,out);
var state_24505__$1 = state_24505;
var statearr_24535_24566 = state_24505__$1;
(statearr_24535_24566[(2)] = inst_24449);

(statearr_24535_24566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24506 === (14))){
var inst_24471 = (state_24505[(7)]);
var inst_24473 = cljs.core.chunked_seq_QMARK_.call(null,inst_24471);
var state_24505__$1 = state_24505;
if(inst_24473){
var statearr_24536_24567 = state_24505__$1;
(statearr_24536_24567[(1)] = (17));

} else {
var statearr_24537_24568 = state_24505__$1;
(statearr_24537_24568[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24506 === (16))){
var inst_24489 = (state_24505[(2)]);
var state_24505__$1 = state_24505;
var statearr_24538_24569 = state_24505__$1;
(statearr_24538_24569[(2)] = inst_24489);

(statearr_24538_24569[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24506 === (10))){
var inst_24458 = (state_24505[(11)]);
var inst_24460 = (state_24505[(12)]);
var inst_24465 = cljs.core._nth.call(null,inst_24458,inst_24460);
var state_24505__$1 = state_24505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24505__$1,(13),out,inst_24465);
} else {
if((state_val_24506 === (18))){
var inst_24471 = (state_24505[(7)]);
var inst_24480 = cljs.core.first.call(null,inst_24471);
var state_24505__$1 = state_24505;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24505__$1,(20),out,inst_24480);
} else {
if((state_val_24506 === (8))){
var inst_24459 = (state_24505[(9)]);
var inst_24460 = (state_24505[(12)]);
var inst_24462 = (inst_24460 < inst_24459);
var inst_24463 = inst_24462;
var state_24505__$1 = state_24505;
if(cljs.core.truth_(inst_24463)){
var statearr_24539_24570 = state_24505__$1;
(statearr_24539_24570[(1)] = (10));

} else {
var statearr_24540_24571 = state_24505__$1;
(statearr_24540_24571[(1)] = (11));

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
});})(c__18797__auto__))
;
return ((function (switch__18776__auto__,c__18797__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18777__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18777__auto____0 = (function (){
var statearr_24544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24544[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18777__auto__);

(statearr_24544[(1)] = (1));

return statearr_24544;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18777__auto____1 = (function (state_24505){
while(true){
var ret_value__18778__auto__ = (function (){try{while(true){
var result__18779__auto__ = switch__18776__auto__.call(null,state_24505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18779__auto__;
}
break;
}
}catch (e24545){if((e24545 instanceof Object)){
var ex__18780__auto__ = e24545;
var statearr_24546_24572 = state_24505;
(statearr_24546_24572[(5)] = ex__18780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24573 = state_24505;
state_24505 = G__24573;
continue;
} else {
return ret_value__18778__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18777__auto__ = function(state_24505){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18777__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18777__auto____1.call(this,state_24505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18777__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18777__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18777__auto__;
})()
;})(switch__18776__auto__,c__18797__auto__))
})();
var state__18799__auto__ = (function (){var statearr_24547 = f__18798__auto__.call(null);
(statearr_24547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18797__auto__);

return statearr_24547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18799__auto__);
});})(c__18797__auto__))
);

return c__18797__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24574 = [];
var len__17830__auto___24577 = arguments.length;
var i__17831__auto___24578 = (0);
while(true){
if((i__17831__auto___24578 < len__17830__auto___24577)){
args24574.push((arguments[i__17831__auto___24578]));

var G__24579 = (i__17831__auto___24578 + (1));
i__17831__auto___24578 = G__24579;
continue;
} else {
}
break;
}

var G__24576 = args24574.length;
switch (G__24576) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24574.length)].join('')));

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
var args24581 = [];
var len__17830__auto___24584 = arguments.length;
var i__17831__auto___24585 = (0);
while(true){
if((i__17831__auto___24585 < len__17830__auto___24584)){
args24581.push((arguments[i__17831__auto___24585]));

var G__24586 = (i__17831__auto___24585 + (1));
i__17831__auto___24585 = G__24586;
continue;
} else {
}
break;
}

var G__24583 = args24581.length;
switch (G__24583) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24581.length)].join('')));

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
var args24588 = [];
var len__17830__auto___24639 = arguments.length;
var i__17831__auto___24640 = (0);
while(true){
if((i__17831__auto___24640 < len__17830__auto___24639)){
args24588.push((arguments[i__17831__auto___24640]));

var G__24641 = (i__17831__auto___24640 + (1));
i__17831__auto___24640 = G__24641;
continue;
} else {
}
break;
}

var G__24590 = args24588.length;
switch (G__24590) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24588.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18797__auto___24643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18797__auto___24643,out){
return (function (){
var f__18798__auto__ = (function (){var switch__18776__auto__ = ((function (c__18797__auto___24643,out){
return (function (state_24614){
var state_val_24615 = (state_24614[(1)]);
if((state_val_24615 === (7))){
var inst_24609 = (state_24614[(2)]);
var state_24614__$1 = state_24614;
var statearr_24616_24644 = state_24614__$1;
(statearr_24616_24644[(2)] = inst_24609);

(statearr_24616_24644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (1))){
var inst_24591 = null;
var state_24614__$1 = (function (){var statearr_24617 = state_24614;
(statearr_24617[(7)] = inst_24591);

return statearr_24617;
})();
var statearr_24618_24645 = state_24614__$1;
(statearr_24618_24645[(2)] = null);

(statearr_24618_24645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (4))){
var inst_24594 = (state_24614[(8)]);
var inst_24594__$1 = (state_24614[(2)]);
var inst_24595 = (inst_24594__$1 == null);
var inst_24596 = cljs.core.not.call(null,inst_24595);
var state_24614__$1 = (function (){var statearr_24619 = state_24614;
(statearr_24619[(8)] = inst_24594__$1);

return statearr_24619;
})();
if(inst_24596){
var statearr_24620_24646 = state_24614__$1;
(statearr_24620_24646[(1)] = (5));

} else {
var statearr_24621_24647 = state_24614__$1;
(statearr_24621_24647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (6))){
var state_24614__$1 = state_24614;
var statearr_24622_24648 = state_24614__$1;
(statearr_24622_24648[(2)] = null);

(statearr_24622_24648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (3))){
var inst_24611 = (state_24614[(2)]);
var inst_24612 = cljs.core.async.close_BANG_.call(null,out);
var state_24614__$1 = (function (){var statearr_24623 = state_24614;
(statearr_24623[(9)] = inst_24611);

return statearr_24623;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24614__$1,inst_24612);
} else {
if((state_val_24615 === (2))){
var state_24614__$1 = state_24614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24614__$1,(4),ch);
} else {
if((state_val_24615 === (11))){
var inst_24594 = (state_24614[(8)]);
var inst_24603 = (state_24614[(2)]);
var inst_24591 = inst_24594;
var state_24614__$1 = (function (){var statearr_24624 = state_24614;
(statearr_24624[(7)] = inst_24591);

(statearr_24624[(10)] = inst_24603);

return statearr_24624;
})();
var statearr_24625_24649 = state_24614__$1;
(statearr_24625_24649[(2)] = null);

(statearr_24625_24649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (9))){
var inst_24594 = (state_24614[(8)]);
var state_24614__$1 = state_24614;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24614__$1,(11),out,inst_24594);
} else {
if((state_val_24615 === (5))){
var inst_24591 = (state_24614[(7)]);
var inst_24594 = (state_24614[(8)]);
var inst_24598 = cljs.core._EQ_.call(null,inst_24594,inst_24591);
var state_24614__$1 = state_24614;
if(inst_24598){
var statearr_24627_24650 = state_24614__$1;
(statearr_24627_24650[(1)] = (8));

} else {
var statearr_24628_24651 = state_24614__$1;
(statearr_24628_24651[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (10))){
var inst_24606 = (state_24614[(2)]);
var state_24614__$1 = state_24614;
var statearr_24629_24652 = state_24614__$1;
(statearr_24629_24652[(2)] = inst_24606);

(statearr_24629_24652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24615 === (8))){
var inst_24591 = (state_24614[(7)]);
var tmp24626 = inst_24591;
var inst_24591__$1 = tmp24626;
var state_24614__$1 = (function (){var statearr_24630 = state_24614;
(statearr_24630[(7)] = inst_24591__$1);

return statearr_24630;
})();
var statearr_24631_24653 = state_24614__$1;
(statearr_24631_24653[(2)] = null);

(statearr_24631_24653[(1)] = (2));


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
});})(c__18797__auto___24643,out))
;
return ((function (switch__18776__auto__,c__18797__auto___24643,out){
return (function() {
var cljs$core$async$state_machine__18777__auto__ = null;
var cljs$core$async$state_machine__18777__auto____0 = (function (){
var statearr_24635 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24635[(0)] = cljs$core$async$state_machine__18777__auto__);

(statearr_24635[(1)] = (1));

return statearr_24635;
});
var cljs$core$async$state_machine__18777__auto____1 = (function (state_24614){
while(true){
var ret_value__18778__auto__ = (function (){try{while(true){
var result__18779__auto__ = switch__18776__auto__.call(null,state_24614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18779__auto__;
}
break;
}
}catch (e24636){if((e24636 instanceof Object)){
var ex__18780__auto__ = e24636;
var statearr_24637_24654 = state_24614;
(statearr_24637_24654[(5)] = ex__18780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24655 = state_24614;
state_24614 = G__24655;
continue;
} else {
return ret_value__18778__auto__;
}
break;
}
});
cljs$core$async$state_machine__18777__auto__ = function(state_24614){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18777__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18777__auto____1.call(this,state_24614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18777__auto____0;
cljs$core$async$state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18777__auto____1;
return cljs$core$async$state_machine__18777__auto__;
})()
;})(switch__18776__auto__,c__18797__auto___24643,out))
})();
var state__18799__auto__ = (function (){var statearr_24638 = f__18798__auto__.call(null);
(statearr_24638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18797__auto___24643);

return statearr_24638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18799__auto__);
});})(c__18797__auto___24643,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24656 = [];
var len__17830__auto___24726 = arguments.length;
var i__17831__auto___24727 = (0);
while(true){
if((i__17831__auto___24727 < len__17830__auto___24726)){
args24656.push((arguments[i__17831__auto___24727]));

var G__24728 = (i__17831__auto___24727 + (1));
i__17831__auto___24727 = G__24728;
continue;
} else {
}
break;
}

var G__24658 = args24656.length;
switch (G__24658) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24656.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18797__auto___24730 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18797__auto___24730,out){
return (function (){
var f__18798__auto__ = (function (){var switch__18776__auto__ = ((function (c__18797__auto___24730,out){
return (function (state_24696){
var state_val_24697 = (state_24696[(1)]);
if((state_val_24697 === (7))){
var inst_24692 = (state_24696[(2)]);
var state_24696__$1 = state_24696;
var statearr_24698_24731 = state_24696__$1;
(statearr_24698_24731[(2)] = inst_24692);

(statearr_24698_24731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24697 === (1))){
var inst_24659 = (new Array(n));
var inst_24660 = inst_24659;
var inst_24661 = (0);
var state_24696__$1 = (function (){var statearr_24699 = state_24696;
(statearr_24699[(7)] = inst_24660);

(statearr_24699[(8)] = inst_24661);

return statearr_24699;
})();
var statearr_24700_24732 = state_24696__$1;
(statearr_24700_24732[(2)] = null);

(statearr_24700_24732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24697 === (4))){
var inst_24664 = (state_24696[(9)]);
var inst_24664__$1 = (state_24696[(2)]);
var inst_24665 = (inst_24664__$1 == null);
var inst_24666 = cljs.core.not.call(null,inst_24665);
var state_24696__$1 = (function (){var statearr_24701 = state_24696;
(statearr_24701[(9)] = inst_24664__$1);

return statearr_24701;
})();
if(inst_24666){
var statearr_24702_24733 = state_24696__$1;
(statearr_24702_24733[(1)] = (5));

} else {
var statearr_24703_24734 = state_24696__$1;
(statearr_24703_24734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24697 === (15))){
var inst_24686 = (state_24696[(2)]);
var state_24696__$1 = state_24696;
var statearr_24704_24735 = state_24696__$1;
(statearr_24704_24735[(2)] = inst_24686);

(statearr_24704_24735[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24697 === (13))){
var state_24696__$1 = state_24696;
var statearr_24705_24736 = state_24696__$1;
(statearr_24705_24736[(2)] = null);

(statearr_24705_24736[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24697 === (6))){
var inst_24661 = (state_24696[(8)]);
var inst_24682 = (inst_24661 > (0));
var state_24696__$1 = state_24696;
if(cljs.core.truth_(inst_24682)){
var statearr_24706_24737 = state_24696__$1;
(statearr_24706_24737[(1)] = (12));

} else {
var statearr_24707_24738 = state_24696__$1;
(statearr_24707_24738[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24697 === (3))){
var inst_24694 = (state_24696[(2)]);
var state_24696__$1 = state_24696;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24696__$1,inst_24694);
} else {
if((state_val_24697 === (12))){
var inst_24660 = (state_24696[(7)]);
var inst_24684 = cljs.core.vec.call(null,inst_24660);
var state_24696__$1 = state_24696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24696__$1,(15),out,inst_24684);
} else {
if((state_val_24697 === (2))){
var state_24696__$1 = state_24696;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24696__$1,(4),ch);
} else {
if((state_val_24697 === (11))){
var inst_24676 = (state_24696[(2)]);
var inst_24677 = (new Array(n));
var inst_24660 = inst_24677;
var inst_24661 = (0);
var state_24696__$1 = (function (){var statearr_24708 = state_24696;
(statearr_24708[(7)] = inst_24660);

(statearr_24708[(8)] = inst_24661);

(statearr_24708[(10)] = inst_24676);

return statearr_24708;
})();
var statearr_24709_24739 = state_24696__$1;
(statearr_24709_24739[(2)] = null);

(statearr_24709_24739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24697 === (9))){
var inst_24660 = (state_24696[(7)]);
var inst_24674 = cljs.core.vec.call(null,inst_24660);
var state_24696__$1 = state_24696;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24696__$1,(11),out,inst_24674);
} else {
if((state_val_24697 === (5))){
var inst_24660 = (state_24696[(7)]);
var inst_24664 = (state_24696[(9)]);
var inst_24669 = (state_24696[(11)]);
var inst_24661 = (state_24696[(8)]);
var inst_24668 = (inst_24660[inst_24661] = inst_24664);
var inst_24669__$1 = (inst_24661 + (1));
var inst_24670 = (inst_24669__$1 < n);
var state_24696__$1 = (function (){var statearr_24710 = state_24696;
(statearr_24710[(12)] = inst_24668);

(statearr_24710[(11)] = inst_24669__$1);

return statearr_24710;
})();
if(cljs.core.truth_(inst_24670)){
var statearr_24711_24740 = state_24696__$1;
(statearr_24711_24740[(1)] = (8));

} else {
var statearr_24712_24741 = state_24696__$1;
(statearr_24712_24741[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24697 === (14))){
var inst_24689 = (state_24696[(2)]);
var inst_24690 = cljs.core.async.close_BANG_.call(null,out);
var state_24696__$1 = (function (){var statearr_24714 = state_24696;
(statearr_24714[(13)] = inst_24689);

return statearr_24714;
})();
var statearr_24715_24742 = state_24696__$1;
(statearr_24715_24742[(2)] = inst_24690);

(statearr_24715_24742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24697 === (10))){
var inst_24680 = (state_24696[(2)]);
var state_24696__$1 = state_24696;
var statearr_24716_24743 = state_24696__$1;
(statearr_24716_24743[(2)] = inst_24680);

(statearr_24716_24743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24697 === (8))){
var inst_24660 = (state_24696[(7)]);
var inst_24669 = (state_24696[(11)]);
var tmp24713 = inst_24660;
var inst_24660__$1 = tmp24713;
var inst_24661 = inst_24669;
var state_24696__$1 = (function (){var statearr_24717 = state_24696;
(statearr_24717[(7)] = inst_24660__$1);

(statearr_24717[(8)] = inst_24661);

return statearr_24717;
})();
var statearr_24718_24744 = state_24696__$1;
(statearr_24718_24744[(2)] = null);

(statearr_24718_24744[(1)] = (2));


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
});})(c__18797__auto___24730,out))
;
return ((function (switch__18776__auto__,c__18797__auto___24730,out){
return (function() {
var cljs$core$async$state_machine__18777__auto__ = null;
var cljs$core$async$state_machine__18777__auto____0 = (function (){
var statearr_24722 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24722[(0)] = cljs$core$async$state_machine__18777__auto__);

(statearr_24722[(1)] = (1));

return statearr_24722;
});
var cljs$core$async$state_machine__18777__auto____1 = (function (state_24696){
while(true){
var ret_value__18778__auto__ = (function (){try{while(true){
var result__18779__auto__ = switch__18776__auto__.call(null,state_24696);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18779__auto__;
}
break;
}
}catch (e24723){if((e24723 instanceof Object)){
var ex__18780__auto__ = e24723;
var statearr_24724_24745 = state_24696;
(statearr_24724_24745[(5)] = ex__18780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24746 = state_24696;
state_24696 = G__24746;
continue;
} else {
return ret_value__18778__auto__;
}
break;
}
});
cljs$core$async$state_machine__18777__auto__ = function(state_24696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18777__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18777__auto____1.call(this,state_24696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18777__auto____0;
cljs$core$async$state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18777__auto____1;
return cljs$core$async$state_machine__18777__auto__;
})()
;})(switch__18776__auto__,c__18797__auto___24730,out))
})();
var state__18799__auto__ = (function (){var statearr_24725 = f__18798__auto__.call(null);
(statearr_24725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18797__auto___24730);

return statearr_24725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18799__auto__);
});})(c__18797__auto___24730,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24747 = [];
var len__17830__auto___24821 = arguments.length;
var i__17831__auto___24822 = (0);
while(true){
if((i__17831__auto___24822 < len__17830__auto___24821)){
args24747.push((arguments[i__17831__auto___24822]));

var G__24823 = (i__17831__auto___24822 + (1));
i__17831__auto___24822 = G__24823;
continue;
} else {
}
break;
}

var G__24749 = args24747.length;
switch (G__24749) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24747.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18797__auto___24825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18797__auto___24825,out){
return (function (){
var f__18798__auto__ = (function (){var switch__18776__auto__ = ((function (c__18797__auto___24825,out){
return (function (state_24791){
var state_val_24792 = (state_24791[(1)]);
if((state_val_24792 === (7))){
var inst_24787 = (state_24791[(2)]);
var state_24791__$1 = state_24791;
var statearr_24793_24826 = state_24791__$1;
(statearr_24793_24826[(2)] = inst_24787);

(statearr_24793_24826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (1))){
var inst_24750 = [];
var inst_24751 = inst_24750;
var inst_24752 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24791__$1 = (function (){var statearr_24794 = state_24791;
(statearr_24794[(7)] = inst_24751);

(statearr_24794[(8)] = inst_24752);

return statearr_24794;
})();
var statearr_24795_24827 = state_24791__$1;
(statearr_24795_24827[(2)] = null);

(statearr_24795_24827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (4))){
var inst_24755 = (state_24791[(9)]);
var inst_24755__$1 = (state_24791[(2)]);
var inst_24756 = (inst_24755__$1 == null);
var inst_24757 = cljs.core.not.call(null,inst_24756);
var state_24791__$1 = (function (){var statearr_24796 = state_24791;
(statearr_24796[(9)] = inst_24755__$1);

return statearr_24796;
})();
if(inst_24757){
var statearr_24797_24828 = state_24791__$1;
(statearr_24797_24828[(1)] = (5));

} else {
var statearr_24798_24829 = state_24791__$1;
(statearr_24798_24829[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (15))){
var inst_24781 = (state_24791[(2)]);
var state_24791__$1 = state_24791;
var statearr_24799_24830 = state_24791__$1;
(statearr_24799_24830[(2)] = inst_24781);

(statearr_24799_24830[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (13))){
var state_24791__$1 = state_24791;
var statearr_24800_24831 = state_24791__$1;
(statearr_24800_24831[(2)] = null);

(statearr_24800_24831[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (6))){
var inst_24751 = (state_24791[(7)]);
var inst_24776 = inst_24751.length;
var inst_24777 = (inst_24776 > (0));
var state_24791__$1 = state_24791;
if(cljs.core.truth_(inst_24777)){
var statearr_24801_24832 = state_24791__$1;
(statearr_24801_24832[(1)] = (12));

} else {
var statearr_24802_24833 = state_24791__$1;
(statearr_24802_24833[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (3))){
var inst_24789 = (state_24791[(2)]);
var state_24791__$1 = state_24791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24791__$1,inst_24789);
} else {
if((state_val_24792 === (12))){
var inst_24751 = (state_24791[(7)]);
var inst_24779 = cljs.core.vec.call(null,inst_24751);
var state_24791__$1 = state_24791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24791__$1,(15),out,inst_24779);
} else {
if((state_val_24792 === (2))){
var state_24791__$1 = state_24791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24791__$1,(4),ch);
} else {
if((state_val_24792 === (11))){
var inst_24759 = (state_24791[(10)]);
var inst_24755 = (state_24791[(9)]);
var inst_24769 = (state_24791[(2)]);
var inst_24770 = [];
var inst_24771 = inst_24770.push(inst_24755);
var inst_24751 = inst_24770;
var inst_24752 = inst_24759;
var state_24791__$1 = (function (){var statearr_24803 = state_24791;
(statearr_24803[(11)] = inst_24769);

(statearr_24803[(7)] = inst_24751);

(statearr_24803[(12)] = inst_24771);

(statearr_24803[(8)] = inst_24752);

return statearr_24803;
})();
var statearr_24804_24834 = state_24791__$1;
(statearr_24804_24834[(2)] = null);

(statearr_24804_24834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (9))){
var inst_24751 = (state_24791[(7)]);
var inst_24767 = cljs.core.vec.call(null,inst_24751);
var state_24791__$1 = state_24791;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24791__$1,(11),out,inst_24767);
} else {
if((state_val_24792 === (5))){
var inst_24759 = (state_24791[(10)]);
var inst_24755 = (state_24791[(9)]);
var inst_24752 = (state_24791[(8)]);
var inst_24759__$1 = f.call(null,inst_24755);
var inst_24760 = cljs.core._EQ_.call(null,inst_24759__$1,inst_24752);
var inst_24761 = cljs.core.keyword_identical_QMARK_.call(null,inst_24752,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24762 = (inst_24760) || (inst_24761);
var state_24791__$1 = (function (){var statearr_24805 = state_24791;
(statearr_24805[(10)] = inst_24759__$1);

return statearr_24805;
})();
if(cljs.core.truth_(inst_24762)){
var statearr_24806_24835 = state_24791__$1;
(statearr_24806_24835[(1)] = (8));

} else {
var statearr_24807_24836 = state_24791__$1;
(statearr_24807_24836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (14))){
var inst_24784 = (state_24791[(2)]);
var inst_24785 = cljs.core.async.close_BANG_.call(null,out);
var state_24791__$1 = (function (){var statearr_24809 = state_24791;
(statearr_24809[(13)] = inst_24784);

return statearr_24809;
})();
var statearr_24810_24837 = state_24791__$1;
(statearr_24810_24837[(2)] = inst_24785);

(statearr_24810_24837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (10))){
var inst_24774 = (state_24791[(2)]);
var state_24791__$1 = state_24791;
var statearr_24811_24838 = state_24791__$1;
(statearr_24811_24838[(2)] = inst_24774);

(statearr_24811_24838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24792 === (8))){
var inst_24759 = (state_24791[(10)]);
var inst_24755 = (state_24791[(9)]);
var inst_24751 = (state_24791[(7)]);
var inst_24764 = inst_24751.push(inst_24755);
var tmp24808 = inst_24751;
var inst_24751__$1 = tmp24808;
var inst_24752 = inst_24759;
var state_24791__$1 = (function (){var statearr_24812 = state_24791;
(statearr_24812[(14)] = inst_24764);

(statearr_24812[(7)] = inst_24751__$1);

(statearr_24812[(8)] = inst_24752);

return statearr_24812;
})();
var statearr_24813_24839 = state_24791__$1;
(statearr_24813_24839[(2)] = null);

(statearr_24813_24839[(1)] = (2));


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
});})(c__18797__auto___24825,out))
;
return ((function (switch__18776__auto__,c__18797__auto___24825,out){
return (function() {
var cljs$core$async$state_machine__18777__auto__ = null;
var cljs$core$async$state_machine__18777__auto____0 = (function (){
var statearr_24817 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24817[(0)] = cljs$core$async$state_machine__18777__auto__);

(statearr_24817[(1)] = (1));

return statearr_24817;
});
var cljs$core$async$state_machine__18777__auto____1 = (function (state_24791){
while(true){
var ret_value__18778__auto__ = (function (){try{while(true){
var result__18779__auto__ = switch__18776__auto__.call(null,state_24791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18779__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18779__auto__;
}
break;
}
}catch (e24818){if((e24818 instanceof Object)){
var ex__18780__auto__ = e24818;
var statearr_24819_24840 = state_24791;
(statearr_24819_24840[(5)] = ex__18780__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24841 = state_24791;
state_24791 = G__24841;
continue;
} else {
return ret_value__18778__auto__;
}
break;
}
});
cljs$core$async$state_machine__18777__auto__ = function(state_24791){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18777__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18777__auto____1.call(this,state_24791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18777__auto____0;
cljs$core$async$state_machine__18777__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18777__auto____1;
return cljs$core$async$state_machine__18777__auto__;
})()
;})(switch__18776__auto__,c__18797__auto___24825,out))
})();
var state__18799__auto__ = (function (){var statearr_24820 = f__18798__auto__.call(null);
(statearr_24820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18797__auto___24825);

return statearr_24820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18799__auto__);
});})(c__18797__auto___24825,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map