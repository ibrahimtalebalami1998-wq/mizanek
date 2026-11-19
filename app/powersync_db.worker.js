(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.EQ(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.u(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.w4(b)
return new s(c,this)}:function(){if(s===null)s=A.w4(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.w4(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
wd(a,b,c,d){return{i:a,p:b,e:c,x:d}},
uz(a){var s,r,q,p,o,n="_$dart_js",m=a[v.dispatchPropertyName]
if(m==null)if($.wb==null){A.En()
m=a[v.dispatchPropertyName]}if(m!=null){s=m.p
if(!1===s)return m.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return m.i
if(m.e===r)throw A.a(A.vy("Return interceptor for "+A.q(s(a,m))))}q=a.constructor
if(q==null)p=null
else{o=$.rQ
if(o==null)o=$.rQ=A.uy(n)
p=q[o]}if(p!=null)return p
p=A.Ex(a)
if(p!=null)return p
if(typeof a=="function")return B.bl
s=Object.getPrototypeOf(a)
if(s==null)return B.ah
if(s===Object.prototype)return B.ah
if(typeof q=="function"){o=$.rQ
if(o==null)o=$.rQ=A.uy(n)
Object.defineProperty(q,o,{value:B.a_,enumerable:false,writable:true,configurable:true})
return B.a_}return B.a_},
vi(a,b){if(a<0||a>4294967295)throw A.a(A.ac(a,0,4294967295,"length",null))
return J.Ay(new Array(a),b)},
Ax(a,b){if(a<0)throw A.a(A.I("Length must be a non-negative integer: "+a,null))
return A.u(new Array(a),b.h("w<0>"))},
Ay(a,b){var s=A.u(a,b.h("w<0>"))
s.$flags=1
return s},
Az(a,b){return J.wn(a,b)},
dz(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.fk.prototype
return J.iz.prototype}if(typeof a=="string")return J.cl.prototype
if(a==null)return J.dP.prototype
if(typeof a=="boolean")return J.iy.prototype
if(Array.isArray(a))return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b_.prototype
if(typeof a=="symbol")return J.dR.prototype
if(typeof a=="bigint")return J.aQ.prototype
return a}if(a instanceof A.k)return a
return J.uz(a)},
ab(a){if(typeof a=="string")return J.cl.prototype
if(a==null)return a
if(Array.isArray(a))return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b_.prototype
if(typeof a=="symbol")return J.dR.prototype
if(typeof a=="bigint")return J.aQ.prototype
return a}if(a instanceof A.k)return a
return J.uz(a)},
bn(a){if(a==null)return a
if(Array.isArray(a))return J.w.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b_.prototype
if(typeof a=="symbol")return J.dR.prototype
if(typeof a=="bigint")return J.aQ.prototype
return a}if(a instanceof A.k)return a
return J.uz(a)},
Eh(a){if(typeof a=="number")return J.dQ.prototype
if(typeof a=="string")return J.cl.prototype
if(a==null)return a
if(!(a instanceof A.k))return J.dd.prototype
return a},
w9(a){if(typeof a=="string")return J.cl.prototype
if(a==null)return a
if(!(a instanceof A.k))return J.dd.prototype
return a},
ux(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b_.prototype
if(typeof a=="symbol")return J.dR.prototype
if(typeof a=="bigint")return J.aQ.prototype
return a}if(a instanceof A.k)return a
return J.uz(a)},
z(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.dz(a).D(a,b)},
eU(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.yO(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ab(a).i(a,b)},
kY(a,b,c){if(typeof b==="number")if((Array.isArray(a)||A.yO(a,a[v.dispatchPropertyName]))&&!(a.$flags&2)&&b>>>0===b&&b<a.length)return a[b]=c
return J.bn(a).l(a,b,c)},
hO(a,b){return J.bn(a).q(a,b)},
zF(a,b){return J.bn(a).aa(a,b)},
zG(a,b){return J.w9(a).e5(a,b)},
zH(a){return J.ux(a).iY(a)},
cL(a,b,c){return J.ux(a).e6(a,b,c)},
zI(a,b){return J.bn(a).e8(a,b)},
wn(a,b){return J.Eh(a).a_(a,b)},
wo(a,b){return J.ab(a).V(a,b)},
kZ(a,b){return J.bn(a).W(a,b)},
zJ(a){return J.ux(a).gar(a)},
V(a){return J.dz(a).gv(a)},
l_(a){return J.ab(a).gF(a)},
zK(a){return J.ab(a).gaP(a)},
Z(a){return J.bn(a).gA(a)},
aM(a){return J.ab(a).gk(a)},
zL(a){return J.ux(a).gjx(a)},
wp(a){return J.dz(a).ga4(a)},
dC(a,b,c){return J.bn(a).b9(a,b,c)},
zM(a,b,c){return J.w9(a).cD(a,b,c)},
zN(a,b){return J.ab(a).sk(a,b)},
zO(a,b,c,d,e){return J.bn(a).R(a,b,c,d,e)},
l0(a,b){return J.bn(a).aU(a,b)},
wq(a,b){return J.bn(a).cO(a,b)},
zP(a,b){return J.w9(a).dK(a,b)},
wr(a,b){return J.bn(a).bP(a,b)},
zQ(a){return J.bn(a).jO(a)},
be(a){return J.dz(a).j(a)},
iw:function iw(){},
iy:function iy(){},
dP:function dP(){},
ai:function ai(){},
cm:function cm(){},
iX:function iX(){},
dd:function dd(){},
b_:function b_(){},
aQ:function aQ(){},
dR:function dR(){},
w:function w(a){this.$ti=a},
ix:function ix(){},
nx:function nx(a){this.$ti=a},
dD:function dD(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dQ:function dQ(){},
fk:function fk(){},
iz:function iz(){},
cl:function cl(){}},A={vl:function vl(){},
i5(a,b,c){if(t.O.b(a))return new A.h8(a,b.h("@<0>").I(c).h("h8<1,2>"))
return new A.cP(a,b.h("@<0>").I(c).h("cP<1,2>"))},
wQ(a){return new A.cZ("Field '"+a+"' has been assigned during initialization.")},
wR(a){return new A.cZ("Field '"+a+"' has not been initialized.")},
AD(a){return new A.cZ("Field '"+a+"' has already been initialized.")},
uC(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
av(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
fM(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
xj(a,b,c){return A.fM(A.av(A.av(c,a),b))},
bd(a,b,c){return a},
wc(a){var s,r
for(s=$.dw.length,r=0;r<s;++r)if(a===$.dw[r])return!0
return!1},
bK(a,b,c,d){A.aI(b,"start")
if(c!=null){A.aI(c,"end")
if(b>c)A.r(A.ac(b,0,c,"start",null))}return new A.da(a,b,c,d.h("da<0>"))},
nJ(a,b,c,d){if(t.O.b(a))return new A.bU(a,b,c.h("@<0>").I(d).h("bU<1,2>"))
return new A.bY(a,b,c.h("@<0>").I(d).h("bY<1,2>"))},
xk(a,b,c){var s="takeCount"
A.hR(b,s)
A.aI(b,s)
if(t.O.b(a))return new A.f9(a,b,c.h("f9<0>"))
return new A.dc(a,b,c.h("dc<0>"))},
xd(a,b,c){var s="count"
if(t.O.b(a)){A.hR(b,s)
A.aI(b,s)
return new A.dK(a,b,c.h("dK<0>"))}A.hR(b,s)
A.aI(b,s)
return new A.c1(a,b,c.h("c1<0>"))},
bW(){return new A.aV("No element")},
wM(){return new A.aV("Too few elements")},
j9(a,b,c,d){if(c-b<=32)A.Bb(a,b,c,d)
else A.Ba(a,b,c,d)},
Bb(a,b,c,d){var s,r,q,p,o
for(s=b+1,r=J.ab(a);s<=c;++s){q=r.i(a,s)
p=s
for(;;){if(!(p>b&&d.$2(r.i(a,p-1),q)>0))break
o=p-1
r.l(a,p,r.i(a,o))
p=o}r.l(a,p,q)}},
Ba(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i=B.b.Y(a5-a4+1,6),h=a4+i,g=a5-i,f=B.b.Y(a4+a5,2),e=f-i,d=f+i,c=J.ab(a3),b=c.i(a3,h),a=c.i(a3,e),a0=c.i(a3,f),a1=c.i(a3,d),a2=c.i(a3,g)
if(a6.$2(b,a)>0){s=a
a=b
b=s}if(a6.$2(a1,a2)>0){s=a2
a2=a1
a1=s}if(a6.$2(b,a0)>0){s=a0
a0=b
b=s}if(a6.$2(a,a0)>0){s=a0
a0=a
a=s}if(a6.$2(b,a1)>0){s=a1
a1=b
b=s}if(a6.$2(a0,a1)>0){s=a1
a1=a0
a0=s}if(a6.$2(a,a2)>0){s=a2
a2=a
a=s}if(a6.$2(a,a0)>0){s=a0
a0=a
a=s}if(a6.$2(a1,a2)>0){s=a2
a2=a1
a1=s}c.l(a3,h,b)
c.l(a3,f,a0)
c.l(a3,g,a2)
c.l(a3,e,c.i(a3,a4))
c.l(a3,d,c.i(a3,a5))
r=a4+1
q=a5-1
p=J.z(a6.$2(a,a1),0)
if(p)for(o=r;o<=q;++o){n=c.i(a3,o)
m=a6.$2(n,a)
if(m===0)continue
if(m<0){if(o!==r){c.l(a3,o,c.i(a3,r))
c.l(a3,r,n)}++r}else for(;;){m=a6.$2(c.i(a3,q),a)
if(m>0){--q
continue}else{l=q-1
if(m<0){c.l(a3,o,c.i(a3,r))
k=r+1
c.l(a3,r,c.i(a3,q))
c.l(a3,q,n)
q=l
r=k
break}else{c.l(a3,o,c.i(a3,q))
c.l(a3,q,n)
q=l
break}}}}else for(o=r;o<=q;++o){n=c.i(a3,o)
if(a6.$2(n,a)<0){if(o!==r){c.l(a3,o,c.i(a3,r))
c.l(a3,r,n)}++r}else if(a6.$2(n,a1)>0)for(;;)if(a6.$2(c.i(a3,q),a1)>0){--q
if(q<o)break
continue}else{l=q-1
if(a6.$2(c.i(a3,q),a)<0){c.l(a3,o,c.i(a3,r))
k=r+1
c.l(a3,r,c.i(a3,q))
c.l(a3,q,n)
r=k}else{c.l(a3,o,c.i(a3,q))
c.l(a3,q,n)}q=l
break}}j=r-1
c.l(a3,a4,c.i(a3,j))
c.l(a3,j,a)
j=q+1
c.l(a3,a5,c.i(a3,j))
c.l(a3,j,a1)
A.j9(a3,a4,r-2,a6)
A.j9(a3,q+2,a5,a6)
if(p)return
if(r<h&&q>g){while(J.z(a6.$2(c.i(a3,r),a),0))++r
while(J.z(a6.$2(c.i(a3,q),a1),0))--q
for(o=r;o<=q;++o){n=c.i(a3,o)
if(a6.$2(n,a)===0){if(o!==r){c.l(a3,o,c.i(a3,r))
c.l(a3,r,n)}++r}else if(a6.$2(n,a1)===0)for(;;)if(a6.$2(c.i(a3,q),a1)===0){--q
if(q<o)break
continue}else{l=q-1
if(a6.$2(c.i(a3,q),a)<0){c.l(a3,o,c.i(a3,r))
k=r+1
c.l(a3,r,c.i(a3,q))
c.l(a3,q,n)
r=k}else{c.l(a3,o,c.i(a3,q))
c.l(a3,q,n)}q=l
break}}A.j9(a3,r,q,a6)}else A.j9(a3,r,q,a6)},
cR:function cR(a,b){this.a=a
this.$ti=b},
dE:function dE(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
cy:function cy(){},
i6:function i6(a,b){this.a=a
this.$ti=b},
cP:function cP(a,b){this.a=a
this.$ti=b},
h8:function h8(a,b){this.a=a
this.$ti=b},
h2:function h2(){},
qO:function qO(a,b){this.a=a
this.b=b},
ag:function ag(a,b){this.a=a
this.$ti=b},
cQ:function cQ(a,b){this.a=a
this.$ti=b},
lE:function lE(a,b){this.a=a
this.b=b},
lD:function lD(a){this.a=a},
cZ:function cZ(a){this.a=a},
br:function br(a){this.a=a},
uT:function uT(){},
om:function om(){},
x:function x(){},
X:function X(){},
da:function da(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
at:function at(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bY:function bY(a,b,c){this.a=a
this.b=b
this.$ti=c},
bU:function bU(a,b,c){this.a=a
this.b=b
this.$ti=c},
co:function co(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
a8:function a8(a,b,c){this.a=a
this.b=b
this.$ti=c},
c7:function c7(a,b,c){this.a=a
this.b=b
this.$ti=c},
ee:function ee(a,b){this.a=a
this.b=b},
fb:function fb(a,b,c){this.a=a
this.b=b
this.$ti=c},
il:function il(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dc:function dc(a,b,c){this.a=a
this.b=b
this.$ti=c},
f9:function f9(a,b,c){this.a=a
this.b=b
this.$ti=c},
jn:function jn(a,b,c){this.a=a
this.b=b
this.$ti=c},
c1:function c1(a,b,c){this.a=a
this.b=b
this.$ti=c},
dK:function dK(a,b,c){this.a=a
this.b=b
this.$ti=c},
j8:function j8(a,b){this.a=a
this.b=b},
cW:function cW(a){this.$ti=a},
ih:function ih(){},
fW:function fW(a,b){this.a=a
this.$ti=b},
jA:function jA(a,b){this.a=a
this.$ti=b},
fy:function fy(a,b){this.a=a
this.$ti=b},
iR:function iR(a){this.a=a
this.b=null},
fe:function fe(){},
jq:function jq(){},
e9:function e9(){},
d7:function d7(a,b){this.a=a
this.$ti=b},
fK:function fK(a){this.a=a},
hF:function hF(){},
A6(){throw A.a(A.P("Cannot modify unmodifiable Map"))},
A7(){throw A.a(A.P("Cannot modify constant Set"))},
z3(a){var s=A.z2(a)
if(s!=null)return s
return"minified:"+a},
yO(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
q(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.be(a)
return s},
dZ(a){var s,r=$.x_
if(r==null)r=$.x_=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
vq(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
iZ(a){var s,r,q,p
if(a instanceof A.k)return A.bb(A.bo(a),null)
s=J.dz(a)
if(s===B.bk||s===B.bm||t.cx.b(a)){r=B.a3(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bb(A.bo(a),null)},
x6(a){var s,r,q
if(a==null||typeof a=="number"||A.kM(a))return J.be(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.cS)return a.j(0)
if(a instanceof A.hm)return a.iM(!0)
s=$.zz()
for(r=0;r<1;++r){q=s[r].oZ(a)
if(q!=null)return q}return"Instance of '"+A.iZ(a)+"'"},
AS(){if(!!self.location)return self.location.href
return null},
wZ(a){var s,r,q,p,o=a.length
if(o<=500)return String.fromCharCode.apply(null,a)
for(s="",r=0;r<o;r=q){q=r+500
p=q<o?q:o
s+=String.fromCharCode.apply(null,a.slice(r,p))}return s},
AW(a){var s,r,q,p=A.u([],t.t)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a6)(a),++r){q=a[r]
if(!A.hG(q))throw A.a(A.dx(q))
if(q<=65535)p.push(q)
else if(q<=1114111){p.push(55296+(B.b.a2(q-65536,10)&1023))
p.push(56320+(q&1023))}else throw A.a(A.dx(q))}return A.wZ(p)},
x7(a){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(!A.hG(q))throw A.a(A.dx(q))
if(q<0)throw A.a(A.dx(q))
if(q>65535)return A.AW(a)}return A.wZ(a)},
AX(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aR(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.b.a2(s,10)|55296)>>>0,s&1023|56320)}}throw A.a(A.ac(a,0,1114111,null,null))},
d4(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
x5(a){var s=A.d4(a).getFullYear()+0
return s},
x3(a){var s=A.d4(a).getMonth()+1
return s},
x0(a){var s=A.d4(a).getDate()+0
return s},
x1(a){var s=A.d4(a).getHours()+0
return s},
x2(a){var s=A.d4(a).getMinutes()+0
return s},
x4(a){var s=A.d4(a).getSeconds()+0
return s},
AU(a){var s=A.d4(a).getMilliseconds()+0
return s},
AV(a){var s=A.d4(a).getDay()+0
return B.b.aT(s+6,7)+1},
AT(a){var s=a.$thrownJsError
if(s==null)return null
return A.K(s)},
j_(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.an(a,s)
a.$thrownJsError=s
s.stack=b.j(0)}},
kR(a,b){var s,r="index"
if(!A.hG(b))return new A.a3(!0,b,r,null)
s=J.aM(a)
if(b<0||b>=s)return A.it(b,s,a,null,r)
return A.o4(b,r)},
Ea(a,b,c){if(a<0||a>c)return A.ac(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.ac(b,a,c,"end",null)
return new A.a3(!0,b,"end",null)},
dx(a){return new A.a3(!0,a,null,null)},
a(a){return A.an(a,new Error())},
an(a,b){var s
if(a==null)a=new A.c4()
b.dartException=a
s=A.ER
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
ER(){return J.be(this.dartException)},
r(a,b){throw A.an(a,b==null?new Error():b)},
B(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.r(A.CT(a,b,c),s)},
CT(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.j.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.fQ("'"+s+"': Cannot "+o+" "+l+k+n)},
a6(a){throw A.a(A.ao(a))},
c5(a){var s,r,q,p,o,n
a=A.yV(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.u([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.pq(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
pr(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
xn(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
vm(a,b){var s=b==null,r=s?null:b.method
return new A.iA(a,r,s?null:b.receiver)},
F(a){if(a==null)return new A.iT(a)
if(a instanceof A.fa)return A.cI(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.cI(a,a.dartException)
return A.DI(a)},
cI(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
DI(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.b.a2(r,16)&8191)===10)switch(q){case 438:return A.cI(a,A.vm(A.q(s)+" (Error "+q+")",null))
case 445:case 5007:A.q(s)
return A.cI(a,new A.fz())}}if(a instanceof TypeError){p=$.za()
o=$.zb()
n=$.zc()
m=$.zd()
l=$.zg()
k=$.zh()
j=$.zf()
$.ze()
i=$.zj()
h=$.zi()
g=p.ba(s)
if(g!=null)return A.cI(a,A.vm(s,g))
else{g=o.ba(s)
if(g!=null){g.method="call"
return A.cI(a,A.vm(s,g))}else if(n.ba(s)!=null||m.ba(s)!=null||l.ba(s)!=null||k.ba(s)!=null||j.ba(s)!=null||m.ba(s)!=null||i.ba(s)!=null||h.ba(s)!=null)return A.cI(a,new A.fz())}return A.cI(a,new A.jp(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.fF()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.cI(a,new A.a3(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.fF()
return a},
K(a){var s
if(a instanceof A.fa)return a.b
if(a==null)return new A.ht(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.ht(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
kS(a){if(a==null)return J.V(a)
if(typeof a=="object")return A.dZ(a)
return J.V(a)},
Ef(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.l(0,a[s],a[r])}return b},
D3(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.a(A.wF("Unsupported number of arguments for wrapped closure"))},
cH(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=A.E4(a,b)
a.$identity=s
return s},
E4(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.D3)},
A0(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.ox().constructor.prototype):Object.create(new A.eW(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.wB(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.zX(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.wB(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
zX(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.a("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.zT)}throw A.a("Error in functionType of tearoff")},
zY(a,b,c,d){var s=A.wy
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
wB(a,b,c,d){if(c)return A.A_(a,b,d)
return A.zY(b.length,d,a,b)},
zZ(a,b,c,d){var s=A.wy,r=A.zU
switch(b?-1:a){case 0:throw A.a(new A.j5("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
A_(a,b,c){var s,r
if($.ww==null)$.ww=A.wv("interceptor")
if($.wx==null)$.wx=A.wv("receiver")
s=b.length
r=A.zZ(s,c,a,b)
return r},
w4(a){return A.A0(a)},
zT(a,b){return A.hA(v.typeUniverse,A.bo(a.a),b)},
wy(a){return a.a},
zU(a){return a.b},
wv(a){var s,r,q,p=new A.eW("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.a(A.I("Field name "+a+" not found.",null))},
uy(a){return v.getIsolateTag(a)},
EV(a,b){var s=$.m
if(s===B.d)return a
return s.fH(a,b)},
yX(){return v.G},
FV(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
Ex(a){var s,r,q,p,o,n=$.yK.$1(a),m=$.uu[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.uG[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.yD.$2(a,n)
if(q!=null){m=$.uu[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.uG[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.uL(s)
$.uu[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.uG[n]=s
return s}if(p==="-"){o=A.uL(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.yS(a,s)
if(p==="*")throw A.a(A.vy(n))
if(v.leafTags[n]===true){o=A.uL(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.yS(a,s)},
yS(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.wd(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
uL(a){return J.wd(a,!1,null,!!a.$ib0)},
Ez(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.uL(s)
else return J.wd(s,c,null,null)},
En(){if(!0===$.wb)return
$.wb=!0
A.Eo()},
Eo(){var s,r,q,p,o,n,m,l
$.uu=Object.create(null)
$.uG=Object.create(null)
A.Em()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.yU.$1(o)
if(n!=null){m=A.Ez(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
Em(){var s,r,q,p,o,n,m=B.aS()
m=A.eO(B.aT,A.eO(B.aU,A.eO(B.a4,A.eO(B.a4,A.eO(B.aV,A.eO(B.aW,A.eO(B.aX(B.a3),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.yK=new A.uD(p)
$.yD=new A.uE(o)
$.yU=new A.uF(n)},
eO(a,b){return a(b)||b},
Ce(a,b){var s
for(s=0;s<a.length;++s)if(!J.z(a[s],b[s]))return!1
return!0},
E9(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
vk(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.a(A.ak("Illegal RegExp pattern ("+String(o)+")",a,null))},
EN(a,b,c){var s
if(typeof b=="string")return a.indexOf(b,c)>=0
else if(b instanceof A.fl){s=B.a.a0(a,c)
return b.b.test(s)}else return!J.zG(b,B.a.a0(a,c)).gF(0)},
Ec(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
yV(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
hL(a,b,c){var s=A.EO(a,b,c)
return s},
EO(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.yV(b),"g"),A.Ec(c))},
yz(a){return a},
yY(a,b,c,d){var s,r,q,p,o,n,m
for(s=b.e5(0,a),s=new A.jF(s.a,s.b,s.c),r=t.lu,q=0,p="";s.m();){o=s.d
if(o==null)o=r.a(o)
n=o.b
m=n.index
p=p+A.q(A.yz(B.a.t(a,q,m)))+A.q(c.$1(o))
q=m+n[0].length}s=p+A.q(A.yz(B.a.a0(a,q)))
return s.charCodeAt(0)==0?s:s},
EP(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.yZ(a,s,s+b.length,c)},
yZ(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
hn:function hn(a){this.a=a},
Q:function Q(a,b){this.a=a
this.b=b},
ho:function ho(a,b){this.a=a
this.b=b},
hp:function hp(a,b){this.a=a
this.b=b},
kb:function kb(a,b){this.a=a
this.b=b},
ey:function ey(a,b){this.a=a
this.b=b},
kc:function kc(a,b){this.a=a
this.b=b},
kd:function kd(a,b){this.a=a
this.b=b},
hq:function hq(a,b,c){this.a=a
this.b=b
this.c=c},
ke:function ke(a,b,c){this.a=a
this.b=b
this.c=c},
kf:function kf(a,b,c){this.a=a
this.b=b
this.c=c},
kg:function kg(a,b,c){this.a=a
this.b=b
this.c=c},
kh:function kh(a){this.a=a},
f1:function f1(){},
lZ:function lZ(a,b,c){this.a=a
this.b=b
this.c=c},
aY:function aY(a,b,c){this.a=a
this.b=b
this.$ti=c},
he:function he(a,b){this.a=a
this.$ti=b},
es:function es(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
f2:function f2(){},
f3:function f3(a,b,c){this.a=a
this.b=b
this.$ti=c},
nq:function nq(){},
fj:function fj(a,b){this.a=a
this.$ti=b},
fA:function fA(){},
pq:function pq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fz:function fz(){},
iA:function iA(a,b,c){this.a=a
this.b=b
this.c=c},
jp:function jp(a){this.a=a},
iT:function iT(a){this.a=a},
fa:function fa(a,b){this.a=a
this.b=b},
ht:function ht(a){this.a=a
this.b=null},
cS:function cS(){},
lK:function lK(){},
lL:function lL(){},
pe:function pe(){},
ox:function ox(){},
eW:function eW(a,b){this.a=a
this.b=b},
j5:function j5(a){this.a=a},
b1:function b1(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ny:function ny(a){this.a=a},
nB:function nB(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
b2:function b2(a,b){this.a=a
this.$ti=b},
d_:function d_(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
bX:function bX(a,b){this.a=a
this.$ti=b},
b3:function b3(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
aG:function aG(a,b){this.a=a
this.$ti=b},
iH:function iH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fm:function fm(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
uD:function uD(a){this.a=a},
uE:function uE(a){this.a=a},
uF:function uF(a){this.a=a},
hm:function hm(){},
k8:function k8(){},
k7:function k7(){},
k9:function k9(){},
ka:function ka(){},
fl:function fl(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ew:function ew(a){this.b=a},
jE:function jE(a,b,c){this.a=a
this.b=b
this.c=c},
jF:function jF(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
fJ:function fJ(a,b){this.a=a
this.c=b},
ks:function ks(a,b,c){this.a=a
this.b=b
this.c=c},
tl:function tl(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
EQ(a){throw A.an(A.wQ(a),new Error())},
L(){throw A.an(A.wR(""),new Error())},
z_(){throw A.an(A.AD(""),new Error())},
wf(){throw A.an(A.wQ(""),new Error())},
xA(){var s=new A.jO("")
return s.b=s},
qP(a){var s=new A.jO(a)
return s.b=s},
jO:function jO(a){this.a=a
this.b=null},
kK(a,b,c){},
vY(a){var s,r,q
if(t.iy.b(a))return a
s=J.ab(a)
r=A.b4(s.gk(a),null,!1,t.z)
for(q=0;q<s.gk(a);++q)r[q]=s.i(a,q)
return r},
AL(a){return new DataView(new ArrayBuffer(a))},
AM(a,b,c){var s
A.kK(a,b,c)
s=new DataView(a,b)
return s},
c_(a,b,c){A.kK(a,b,c)
c=B.b.Y(a.byteLength-b,4)
return new Int32Array(a,b,c)},
AN(a){return new Int8Array(a)},
AO(a,b,c){A.kK(a,b,c)
return new Uint32Array(a,b,c)},
AP(a){return new Uint8Array(a)},
b6(a,b,c){A.kK(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
cf(a,b,c){if(a>>>0!==a||a>=c)throw A.a(A.kR(b,a))},
yc(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.a(A.Ea(a,b,c))
return b},
dV:function dV(){},
bF:function bF(){},
fv:function fv(){},
kA:function kA(a){this.a=a},
fu:function fu(){},
dW:function dW(){},
cp:function cp(){},
b5:function b5(){},
iK:function iK(){},
iL:function iL(){},
iM:function iM(){},
iN:function iN(){},
iO:function iO(){},
iP:function iP(){},
fw:function fw(){},
fx:function fx(){},
d2:function d2(){},
hh:function hh(){},
hi:function hi(){},
hj:function hj(){},
hk:function hk(){},
vs(a,b){var s=b.c
return s==null?b.c=A.hy(a,"o",[b.x]):s},
x9(a){var s=a.w
if(s===6||s===7)return A.x9(a.x)
return s===11||s===12},
B6(a){return a.as},
EB(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
am(a){return A.tu(v.typeUniverse,a,!1)},
Eq(a,b){var s,r,q,p,o
if(a==null)return null
s=b.y
r=a.Q
if(r==null)r=a.Q=new Map()
q=b.as
p=r.get(q)
if(p!=null)return p
o=A.cF(v.typeUniverse,a.x,s,0)
r.set(q,o)
return o},
cF(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.cF(a1,s,a3,a4)
if(r===s)return a2
return A.xQ(a1,r,!0)
case 7:s=a2.x
r=A.cF(a1,s,a3,a4)
if(r===s)return a2
return A.xP(a1,r,!0)
case 8:q=a2.y
p=A.eN(a1,q,a3,a4)
if(p===q)return a2
return A.hy(a1,a2.x,p)
case 9:o=a2.x
n=A.cF(a1,o,a3,a4)
m=a2.y
l=A.eN(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.vM(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.eN(a1,j,a3,a4)
if(i===j)return a2
return A.xR(a1,k,i)
case 11:h=a2.x
g=A.cF(a1,h,a3,a4)
f=a2.y
e=A.DC(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.xO(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.eN(a1,d,a3,a4)
o=a2.x
n=A.cF(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.vN(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.a(A.hW("Attempted to substitute unexpected RTI kind "+a0))}},
eN(a,b,c,d){var s,r,q,p,o=b.length,n=A.tD(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.cF(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
DD(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.tD(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.cF(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
DC(a,b,c,d){var s,r=b.a,q=A.eN(a,r,c,d),p=b.b,o=A.eN(a,p,c,d),n=b.c,m=A.DD(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.jX()
s.a=q
s.b=o
s.c=m
return s},
u(a,b){a[v.arrayRti]=b
return a},
kQ(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.Ei(s)
return a.$S()}return null},
Ep(a,b){var s
if(A.x9(b))if(a instanceof A.cS){s=A.kQ(a)
if(s!=null)return s}return A.bo(a)},
bo(a){if(a instanceof A.k)return A.p(a)
if(Array.isArray(a))return A.a5(a)
return A.w0(J.dz(a))},
a5(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
p(a){var s=a.$ti
return s!=null?s:A.w0(a)},
w0(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.D1(a,s)},
D1(a,b){var s=a instanceof A.cS?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.Cq(v.typeUniverse,s.name)
b.$ccache=r
return r},
Ei(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.tu(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
uB(a){return A.bm(A.p(a))},
wa(a){var s=A.kQ(a)
return A.bm(s==null?A.bo(a):s)},
w3(a){var s
if(a instanceof A.hm)return a.i7()
s=a instanceof A.cS?A.kQ(a):null
if(s!=null)return s
if(t.aJ.b(a))return J.wp(a).a
if(Array.isArray(a))return A.a5(a)
return A.bo(a)},
bm(a){var s=a.r
return s==null?a.r=new A.ts(a):s},
Ed(a,b){var s,r,q=b,p=q.length
if(p===0)return t.aK
s=A.hA(v.typeUniverse,A.w3(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.xT(v.typeUniverse,s,A.w3(q[r]))
return A.hA(v.typeUniverse,s,a)},
bp(a){return A.bm(A.tu(v.typeUniverse,a,!1))},
D0(a){var s=this
s.b=A.Dz(s)
return s.b(a)},
Dz(a){var s,r,q,p
if(a===t.K)return A.D9
if(A.dA(a))return A.Dd
s=a.w
if(s===6)return A.CZ
if(s===1)return A.yk
if(s===7)return A.D4
r=A.Dy(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.dA)){a.f="$i"+q
if(q==="t")return A.D7
if(a===t.m)return A.D6
return A.Dc}}else if(s===10){p=A.E9(a.x,a.y)
return p==null?A.yk:p}return A.CX},
Dy(a){if(a.w===8){if(a===t.S)return A.hG
if(a===t.i||a===t.q)return A.D8
if(a===t.N)return A.Db
if(a===t.y)return A.kM}return null},
D_(a){var s=this,r=A.CW
if(A.dA(s))r=A.CE
else if(s===t.K)r=A.CD
else if(A.eQ(s)){r=A.CY
if(s===t.I)r=A.vU
else if(s===t.T)r=A.kI
else if(s===t.o9)r=A.vT
else if(s===t.jh)r=A.CC
else if(s===t.jX)r=A.y9
else if(s===t.mU)r=A.vV}else if(s===t.S)r=A.R
else if(s===t.N)r=A.al
else if(s===t.y)r=A.aW
else if(s===t.q)r=A.CB
else if(s===t.i)r=A.bA
else if(s===t.m)r=A.S
s.a=r
return s.a(a)},
CX(a){var s=this
if(a==null)return A.eQ(s)
return A.Ev(v.typeUniverse,A.Ep(a,s),s)},
CZ(a){if(a==null)return!0
return this.x.b(a)},
Dc(a){var s,r=this
if(a==null)return A.eQ(r)
s=r.f
if(a instanceof A.k)return!!a[s]
return!!J.dz(a)[s]},
D7(a){var s,r=this
if(a==null)return A.eQ(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.k)return!!a[s]
return!!J.dz(a)[s]},
D6(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.k)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
yj(a){if(typeof a=="object"){if(a instanceof A.k)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
CW(a){var s=this
if(a==null){if(A.eQ(s))return a}else if(s.b(a))return a
throw A.an(A.yf(a,s),new Error())},
CY(a){var s=this
if(a==null||s.b(a))return a
throw A.an(A.yf(a,s),new Error())},
yf(a,b){return new A.hw("TypeError: "+A.xD(a,A.bb(b,null)))},
xD(a,b){return A.ij(a)+": type '"+A.bb(A.w3(a),null)+"' is not a subtype of type '"+b+"'"},
bl(a,b){return new A.hw("TypeError: "+A.xD(a,b))},
D4(a){var s=this
return s.x.b(a)||A.vs(v.typeUniverse,s).b(a)},
D9(a){return a!=null},
CD(a){if(a!=null)return a
throw A.an(A.bl(a,"Object"),new Error())},
Dd(a){return!0},
CE(a){return a},
yk(a){return!1},
kM(a){return!0===a||!1===a},
aW(a){if(!0===a)return!0
if(!1===a)return!1
throw A.an(A.bl(a,"bool"),new Error())},
vT(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.an(A.bl(a,"bool?"),new Error())},
bA(a){if(typeof a=="number")return a
throw A.an(A.bl(a,"double"),new Error())},
y9(a){if(typeof a=="number")return a
if(a==null)return a
throw A.an(A.bl(a,"double?"),new Error())},
hG(a){return typeof a=="number"&&Math.floor(a)===a},
R(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.an(A.bl(a,"int"),new Error())},
vU(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.an(A.bl(a,"int?"),new Error())},
D8(a){return typeof a=="number"},
CB(a){if(typeof a=="number")return a
throw A.an(A.bl(a,"num"),new Error())},
CC(a){if(typeof a=="number")return a
if(a==null)return a
throw A.an(A.bl(a,"num?"),new Error())},
Db(a){return typeof a=="string"},
al(a){if(typeof a=="string")return a
throw A.an(A.bl(a,"String"),new Error())},
kI(a){if(typeof a=="string")return a
if(a==null)return a
throw A.an(A.bl(a,"String?"),new Error())},
S(a){if(A.yj(a))return a
throw A.an(A.bl(a,"JSObject"),new Error())},
vV(a){if(a==null)return a
if(A.yj(a))return a
throw A.an(A.bl(a,"JSObject?"),new Error())},
yv(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bb(a[q],b)
return s},
Dp(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.yv(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bb(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
yh(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=", ",a0=null
if(a3!=null){s=a3.length
if(a2==null)a2=A.u([],t.s)
else a0=a2.length
r=a2.length
for(q=s;q>0;--q)a2.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a){o=o+n+a2[a2.length-1-q]
m=a3[q]
l=m.w
if(!(l===2||l===3||l===4||l===5||m===p))o+=" extends "+A.bb(m,a2)}o+=">"}else o=""
p=a1.x
k=a1.y
j=k.a
i=j.length
h=k.b
g=h.length
f=k.c
e=f.length
d=A.bb(p,a2)
for(c="",b="",q=0;q<i;++q,b=a)c+=b+A.bb(j[q],a2)
if(g>0){c+=b+"["
for(b="",q=0;q<g;++q,b=a)c+=b+A.bb(h[q],a2)
c+="]"}if(e>0){c+=b+"{"
for(b="",q=0;q<e;q+=3,b=a){c+=b
if(f[q+1])c+="required "
c+=A.bb(f[q+2],a2)+" "+f[q]}c+="}"}if(a0!=null){a2.toString
a2.length=a0}return o+"("+c+") => "+d},
bb(a,b){var s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){s=a.x
r=A.bb(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(m===7)return"FutureOr<"+A.bb(a.x,b)+">"
if(m===8){p=A.DH(a.x)
o=a.y
return o.length>0?p+("<"+A.yv(o,b)+">"):p}if(m===10)return A.Dp(a,b)
if(m===11)return A.yh(a,b,null)
if(m===12)return A.yh(a.x,b,a.y)
if(m===13){n=a.x
return b[b.length-1-n]}return"?"},
DH(a){var s=A.z2(a)
if(s!=null)return s
return"minified:"+a},
Cr(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
Cq(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.tu(a,b,!1)
else if(typeof m=="number"){s=m
r=A.hz(a,5,"#")
q=A.tD(s)
for(p=0;p<s;++p)q[p]=r
o=A.hy(a,b,q)
n[b]=o
return o}else return m},
Cp(a,b){return A.y6(a.tR,b)},
Co(a,b){return A.y6(a.eT,b)},
tu(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.xS(a,null,b,!1)
r.set(b,s)
return s},
hA(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.xS(a,b,c,!0)
q.set(c,r)
return r},
xT(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.vM(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
xS(a,b,c,d){return A.Cc(A.C6(a,b,c,d))},
cD(a,b){b.a=A.D_
b.b=A.D0
return b},
hz(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.bt(null,null)
s.w=b
s.as=c
r=A.cD(a,s)
a.eC.set(c,r)
return r},
xQ(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.Cm(a,b,r,c)
a.eC.set(r,s)
return s},
Cm(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.dA(b))if(!(b===t.P||b===t.v))if(s!==6)r=s===7&&A.eQ(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.bt(null,null)
q.w=6
q.x=b
q.as=c
return A.cD(a,q)},
xP(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.Ck(a,b,r,c)
a.eC.set(r,s)
return s},
Ck(a,b,c,d){var s,r
if(d){s=b.w
if(A.dA(b)||b===t.K)return b
else if(s===1)return A.hy(a,"o",[b])
else if(b===t.P||b===t.v)return t.gK}r=new A.bt(null,null)
r.w=7
r.x=b
r.as=c
return A.cD(a,r)},
Cn(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.bt(null,null)
s.w=13
s.x=b
s.as=q
r=A.cD(a,s)
a.eC.set(q,r)
return r},
hx(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
Cj(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
hy(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.hx(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.bt(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.cD(a,r)
a.eC.set(p,q)
return q},
vM(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.hx(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.bt(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.cD(a,o)
a.eC.set(q,n)
return n},
xR(a,b,c){var s,r,q="+"+(b+"("+A.hx(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.bt(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.cD(a,s)
a.eC.set(q,r)
return r},
xO(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.hx(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.hx(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.Cj(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.bt(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.cD(a,p)
a.eC.set(r,o)
return o},
vN(a,b,c,d){var s,r=b.as+("<"+A.hx(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.Cl(a,b,c,r,d)
a.eC.set(r,s)
return s},
Cl(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.tD(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.cF(a,b,r,0)
m=A.eN(a,c,r,0)
return A.vN(a,n,m,c!==m)}}l=new A.bt(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.cD(a,l)},
C6(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
Cc(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.C8(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.xK(a,r,l,k,!1)
else if(q===46)r=A.xK(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.dq(a.u,a.e,k.pop()))
break
case 94:k.push(A.Cn(a.u,k.pop()))
break
case 35:k.push(A.hz(a.u,5,"#"))
break
case 64:k.push(A.hz(a.u,2,"@"))
break
case 126:k.push(A.hz(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.Ca(a,k)
break
case 38:A.C9(a,k)
break
case 63:p=a.u
k.push(A.xQ(p,A.dq(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.xP(p,A.dq(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.C7(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.xL(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.Cd(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.dq(a.u,a.e,m)},
C8(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
xK(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.Cr(s,o.x)[p]
if(n==null)A.r('No "'+p+'" in "'+A.B6(o)+'"')
d.push(A.hA(s,o,n))}else d.push(p)
return m},
Ca(a,b){var s,r=a.u,q=A.xJ(a,b),p=b.pop()
if(typeof p=="string")b.push(A.hy(r,p,q))
else{s=A.dq(r,a.e,p)
switch(s.w){case 11:b.push(A.vN(r,s,q,a.n))
break
default:b.push(A.vM(r,s,q))
break}}},
C7(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.xJ(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.dq(p,a.e,o)
q=new A.jX()
q.a=s
q.b=n
q.c=m
b.push(A.xO(p,r,q))
return
case-4:b.push(A.xR(p,b.pop(),s))
return
default:throw A.a(A.hW("Unexpected state under `()`: "+A.q(o)))}},
C9(a,b){var s=b.pop()
if(0===s){b.push(A.hz(a.u,1,"0&"))
return}if(1===s){b.push(A.hz(a.u,4,"1&"))
return}throw A.a(A.hW("Unexpected extended operation "+A.q(s)))},
xJ(a,b){var s=b.splice(a.p)
A.xL(a.u,a.e,s)
a.p=b.pop()
return s},
dq(a,b,c){if(typeof c=="string")return A.hy(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.Cb(a,b,c)}else return c},
xL(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.dq(a,b,c[s])},
Cd(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.dq(a,b,c[s])},
Cb(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.a(A.hW("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.a(A.hW("Bad index "+c+" for "+b.j(0)))},
Ev(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.ay(a,b,null,c,null)
r.set(c,s)}return s},
ay(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.dA(d))return!0
s=b.w
if(s===4)return!0
if(A.dA(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.ay(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.v){if(q===7)return A.ay(a,b,c,d.x,e)
return d===p||d===t.v||q===6}if(d===t.K){if(s===7)return A.ay(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.ay(a,b.x,c,d,e))return!1
return A.ay(a,A.vs(a,b),c,d,e)}if(s===6)return A.ay(a,p,c,d,e)&&A.ay(a,b.x,c,d,e)
if(q===7){if(A.ay(a,b,c,d.x,e))return!0
return A.ay(a,b,c,A.vs(a,d),e)}if(q===6)return A.ay(a,b,c,p,e)||A.ay(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.gY)return!0
o=s===10
if(o&&d===t.lZ)return!0
if(q===12){if(b===t.g)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.ay(a,j,c,i,e)||!A.ay(a,i,e,j,c))return!1}return A.yi(a,b.x,c,d.x,e)}if(q===11){if(b===t.g)return!0
if(p)return!1
return A.yi(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.D5(a,b,c,d,e)}if(o&&q===10)return A.Da(a,b,c,d,e)
return!1},
yi(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.ay(a3,a4.x,a5,a6.x,a7))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.ay(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.ay(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.ay(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.ay(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
D5(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.hA(a,b,r[o])
return A.y8(a,p,null,c,d.y,e)}return A.y8(a,b.y,null,c,d.y,e)},
y8(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.ay(a,b[s],d,e[s],f))return!1
return!0},
Da(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.ay(a,r[s],c,q[s],e))return!1
return!0},
eQ(a){var s=a.w,r=!0
if(!(a===t.P||a===t.v))if(!A.dA(a))if(s!==6)r=s===7&&A.eQ(a.x)
return r},
dA(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
y6(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
tD(a){return a>0?new Array(a):v.typeUniverse.sEA},
bt:function bt(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
jX:function jX(){this.c=this.b=this.a=null},
ts:function ts(a){this.a=a},
jT:function jT(){},
hw:function hw(a){this.a=a},
BA(){var s,r,q
if(self.scheduleImmediate!=null)return A.DJ()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.cH(new A.qv(s),1)).observe(r,{childList:true})
return new A.qu(s,r,q)}else if(self.setImmediate!=null)return A.DK()
return A.DL()},
BB(a){self.scheduleImmediate(A.cH(new A.qw(a),0))},
BC(a){self.setImmediate(A.cH(new A.qx(a),0))},
BD(a){A.vw(B.a7,a)},
vw(a,b){var s=B.b.Y(a.a,1000)
return A.Ch(s<0?0:s,b)},
Ch(a,b){var s=new A.kw(!0)
s.l5(a,b)
return s},
Ci(a,b){var s=new A.kw(!1)
s.l6(a,b)
return s},
i(a){return new A.h_(new A.l($.m,a.h("l<0>")),a.h("h_<0>"))},
h(a,b){a.$2(0,null)
b.b=!0
return b.a},
b(a,b){A.ya(a,b)},
f(a,b){b.U(a)},
e(a,b){b.b7(A.F(a),A.K(a))},
ya(a,b){var s,r,q=new A.tS(b),p=new A.tT(b)
if(a instanceof A.l)a.iK(q,p,t.z)
else{s=t.z
if(a instanceof A.l)a.bb(q,p,s)
else{r=new A.l($.m,t._)
r.a=8
r.c=a
r.iK(q,p,s)}}},
d(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.m.cF(new A.uo(s),t.H,t.S,t.z)},
kJ(a,b,c){var s,r,q,p
if(b===0){s=c.c
if(s!=null)s.bW(null)
else{s=c.a
s===$&&A.L()
s.n()}return}else if(b===1){s=c.c
if(s!=null){r=A.F(a)
q=A.K(a)
s.ac(new A.a2(r,q))}else{s=A.F(a)
r=A.K(a)
q=c.a
q===$&&A.L()
q.af(s,r)
c.a.n()}return}if(a instanceof A.hd){if(c.c!=null){b.$2(2,null)
return}s=a.b
if(s===0){s=a.a
r=c.a
r===$&&A.L()
r.q(0,s)
A.eS(new A.tQ(c,b))
return}else if(s===1){p=a.a
s=c.a
s===$&&A.L()
s.e4(p,!1).aK(new A.tR(c,b),t.P)
return}}A.ya(a,b)},
DB(a){var s=a.a
s===$&&A.L()
return new A.a4(s,A.p(s).h("a4<1>"))},
BE(a,b){var s=new A.jH(b.h("jH<0>"))
s.l0(a,b)
return s},
Df(a,b){return A.BE(a,b)},
BZ(a){return new A.hd(a,1)},
xH(a){return new A.hd(a,0)},
xN(a,b,c){return 0},
cM(a){var s
if(t.C.b(a)){s=a.gbA()
if(s!=null)return s}return B.t},
An(a,b){var s=new A.l($.m,b.h("l<0>"))
A.pp(B.a7,new A.mW(a,s))
return s},
dN(a,b){var s,r,q,p,o,n,m,l=null
try{l=a.$0()}catch(q){s=A.F(q)
r=A.K(q)
p=new A.l($.m,b.h("l<0>"))
o=s
n=r
m=A.dv(o,n)
if(m==null)o=new A.a2(o,n==null?A.cM(o):n)
else o=m
p.T(o)
return p}return b.h("o<0>").b(l)?l:A.bM(l,b)},
mV(a,b){var s=a==null?b.a(a):a,r=new A.l($.m,b.h("l<0>"))
r.aE(s)
return r},
mX(a,b){var s,r,q,p,o,n,m,l,k,j,i={},h=null,g=!1,f=new A.l($.m,b.h("l<t<0>>"))
i.a=null
i.b=0
i.c=i.d=null
s=new A.mZ(i,h,g,f)
try{for(n=J.Z(a),m=t.P;n.m();){r=n.gp()
q=i.b
r.bb(new A.mY(i,q,f,b,h,g),s,m);++i.b}n=i.b
if(n===0){n=f
n.bW(A.u([],b.h("w<0>")))
return n}i.a=A.b4(n,null,!1,b.h("0?"))}catch(l){p=A.F(l)
o=A.K(l)
if(i.b===0||g){n=f
m=p
k=o
j=A.dv(m,k)
if(j==null)m=new A.a2(m,k==null?A.cM(m):k)
else m=j
n.T(m)
return n}else{i.d=p
i.c=o}}return f},
ir(a,b,c,d){var s=new A.mP(d,null,b,c),r=$.m,q=new A.l(r,c.h("l<0>"))
if(r!==B.d)s=r.cF(s,c.h("0/"),t.K,t.l)
a.ck(new A.bj(q,2,null,s,a.$ti.h("@<1>").I(c).h("bj<1,2>")))
return q},
vf(a,b){var s,r,q,p=A.u([],b.h("w<bN<0>>"))
for(s=a.length,r=b.h("bN<0>"),q=0;q<a.length;a.length===s||(0,A.a6)(a),++q)p.push(new A.bN(a[q],r))
if(p.length===0)return A.mV(A.u([],b.h("w<0>")),b.h("t<0>"))
s=new A.l($.m,b.h("l<t<0>>"))
A.xE(p,new A.mQ(new A.N(s,b.h("N<t<0>>")),p,b))
return s},
Di(a){return a!=null},
Am(a,b,c){var s=b.h("@<0>").I(c),r=new A.l($.m,s.h("l<+(1,2)>")),q=new A.bN(a.a,b.h("bN<0>")),p=new A.bN(a.b,c.h("bN<0>"))
A.xE(A.u([q,p],t.dB),new A.mU(new A.N(r,s.h("N<+(1,2)>")),q,p))
return r},
xE(a,b){var s,r={},q=r.a=r.b=0,p=new A.ro(r,a,b)
for(s=a.length;q<a.length;a.length===s||(0,A.a6)(a),++q)a[q].mI(p)},
dv(a,b){var s,r,q,p=$.m
if(p===B.d)return null
s=p.jd(a,b)
if(s==null)return null
r=s.a
q=s.b
if(t.C.b(r))A.j_(r,q)
return s},
ax(a,b){var s
if($.m!==B.d){s=A.dv(a,b)
if(s!=null)return s}if(b==null)if(t.C.b(a)){b=a.gbA()
if(b==null){A.j_(a,B.t)
b=B.t}}else b=B.t
else if(t.C.b(a))A.j_(a,b)
return new A.a2(a,b)},
BT(a,b,c){var s=new A.l(b,c.h("l<0>"))
s.a=8
s.c=a
return s},
bM(a,b){var s=new A.l($.m,b.h("l<0>"))
s.a=8
s.c=a
return s},
ru(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.fG()
b.T(new A.a2(new A.a3(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.im(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.d_()
b.dN(p.a)
A.dn(b,q)
return}b.a^=2
b.b.bR(new A.rv(p,b))},
dn(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){r=f.c
f.b.cw(r.a,r.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.dn(g.a,f)
s.a=o
n=o.a}r=g.a
m=r.c
s.b=p
s.c=m
if(q){l=f.c
l=(l&1)!==0||(l&15)===8}else l=!0
if(l){k=f.b.b
if(p){f=r.b
f=!(f===k||f.gbm()===k.gbm())}else f=!1
if(f){f=g.a
r=f.c
f.b.cw(r.a,r.b)
return}j=$.m
if(j!==k)$.m=k
else j=null
f=s.a.c
if((f&15)===8)new A.rz(s,g,p).$0()
else if(q){if((f&1)!==0)new A.ry(s,m).$0()}else if((f&2)!==0)new A.rx(g,s).$0()
if(j!=null)$.m=j
f=s.c
if(f instanceof A.l){r=s.a.$ti
r=r.h("o<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.dV(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.ru(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.dV(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
yp(a,b){if(t.ng.b(a))return b.cF(a,t.z,t.K,t.l)
if(t.mq.b(a))return b.bN(a,t.z,t.K)
throw A.a(A.aX(a,"onError",u.w))},
Dh(){var s,r
for(s=$.eL;s!=null;s=$.eL){$.hI=null
r=s.b
$.eL=r
if(r==null)$.hH=null
s.a.$0()}},
DA(){$.w1=!0
try{A.Dh()}finally{$.hI=null
$.w1=!1
if($.eL!=null)$.wi().$1(A.yE())}},
yx(a){var s=new A.jG(a),r=$.hH
if(r==null){$.eL=$.hH=s
if(!$.w1)$.wi().$1(A.yE())}else $.hH=r.b=s},
Dx(a){var s,r,q,p=$.eL
if(p==null){A.yx(a)
$.hI=$.hH
return}s=new A.jG(a)
r=$.hI
if(r==null){s.b=p
$.eL=$.hI=s}else{q=r.b
s.b=q
$.hI=r.b=s
if(q==null)$.hH=s}},
eS(a){var s,r=null,q=$.m
if(B.d===q){A.ub(r,r,B.d,a)
return}if(B.d===q.gfs().a)s=B.d.gbm()===q.gbm()
else s=!1
if(s){A.ub(r,r,q,q.b_(a,t.H))
return}s=$.m
s.bR(s.d7(a))},
xe(a,b){var s=null,r=b.h("bL<0>"),q=new A.bL(s,s,s,s,r)
q.N(a)
q.hI()
return new A.a4(q,r.h("a4<1>"))},
Fa(a){return new A.bP(A.bd(a,"stream",t.K))},
bI(a,b,c,d,e,f){return e?new A.cC(b,c,d,a,f.h("cC<0>")):new A.bL(b,c,d,a,f.h("bL<0>"))},
c3(a,b){var s=null
return a?new A.ds(s,s,b.h("ds<0>")):new A.h0(s,s,b.h("h0<0>"))},
kN(a){var s,r,q
if(a==null)return
try{a.$0()}catch(q){s=A.F(q)
r=A.K(q)
$.m.cw(s,r)}},
BR(a,b,c,d,e,f){var s=$.m,r=e?1:0,q=c!=null?32:0,p=A.jK(s,b,f),o=A.jL(s,c),n=d==null?A.up():d
return new A.cz(a,p,o,s.b_(n,t.H),s,r|q,f.h("cz<0>"))},
By(a,b,c){var s=$.m,r=a.geR(),q=a.gdM()
return new A.fZ(new A.l(s,t._),b.B(r,!1,a.geX(),q))},
Bz(a){return new A.qs(a)},
jK(a,b,c){var s=b==null?A.DN():b
return a.bN(s,t.H,c)},
jL(a,b){if(b==null)b=A.DO()
if(t.r.b(b))return a.cF(b,t.z,t.K,t.l)
if(t.i6.b(b))return a.bN(b,t.z,t.K)
throw A.a(A.I(u.y,null))},
Dj(a){},
Dl(a,b){$.m.cw(a,b)},
Dk(){},
xC(a,b){var s=$.m,r=new A.en(s,b.h("en<0>"))
A.eS(r.gij())
if(a!=null)r.c=s.b_(a,t.H)
return r},
Dv(a,b,c){var s,r,q,p
try{b.$1(a.$0())}catch(p){s=A.F(p)
r=A.K(p)
q=A.dv(s,r)
if(q!=null)c.$2(q.a,q.b)
else c.$2(s,r)}},
CM(a,b,c){var s=a.u()
if(s!==$.cJ())s.J(new A.tW(b,c))
else b.ac(c)},
CN(a,b){return new A.tV(a,b)},
CO(a,b,c){var s=a.u()
if(s!==$.cJ())s.J(new A.tX(b,c))
else b.be(c)},
y7(a,b,c){var s=A.dv(b,c)
if(s!=null){b=s.a
c=s.b}a.a9(b,c)},
pp(a,b){var s=$.m
if(s===B.d)return s.fL(a,b)
return s.fL(a,s.d7(b))},
EJ(a,b,c){return A.Dw(a,null,b,c)},
Dw(a,b,c,d){return $.m.ef(c,b).bv(a,d)},
Dt(a,b,c,d,e){A.hJ(d,e)},
hJ(a,b){A.Dx(new A.u8(a,b))},
u9(a,b,c,d){var s,r=$.m
if(r===c)return d.$0()
$.m=c
s=r
try{r=d.$0()
return r}finally{$.m=s}},
ua(a,b,c,d,e){var s,r=$.m
if(r===c)return d.$1(e)
$.m=c
s=r
try{r=d.$1(e)
return r}finally{$.m=s}},
w2(a,b,c,d,e,f){var s,r=$.m
if(r===c)return d.$2(e,f)
$.m=c
s=r
try{r=d.$2(e,f)
return r}finally{$.m=s}},
yt(a,b,c,d){return d},
yu(a,b,c,d){return d},
ys(a,b,c,d){return d},
Ds(a,b,c,d,e){return null},
ub(a,b,c,d){var s,r
if(B.d!==c){s=B.d.gbm()
r=c.gbm()
d=s!==r?c.d7(d):c.fG(d,t.H)}A.yx(d)},
Dr(a,b,c,d,e){e=c.fG(e,t.H)
return A.vw(d,e)},
Dq(a,b,c,d,e){var s
e=c.pT(e,t.H,t.hU)
s=d.gq_()
return A.Ci(s.pQ(0,0)?0:s,e)},
Du(a,b,c,d){A.yT(d)},
yr(a,b,c,d,e){var s,r,q,p,o=null
if(e!=null){s=t.X
r=A.vg(o,o,o,s,s)
r.aa(0,e)}else r=o
s=new A.jQ(c.giA(),c.giC(),c.giB(),c.giu(),c.giv(),c.git(),c.ghY(),c.gfs(),c.ghS(),c.ghR(),c.gio(),c.gi2(),c.gfi(),c.gfC(),c)
if(d!=null){q=d.x
if(q!=null)s.w=new A.kF(s,q)
p=d.a
if(p!=null)s.as=new A.kE(s,p)}if(r!=null)s.at=new A.kG(s,r)
return s},
qv:function qv(a){this.a=a},
qu:function qu(a,b,c){this.a=a
this.b=b
this.c=c},
qw:function qw(a){this.a=a},
qx:function qx(a){this.a=a},
kw:function kw(a){this.a=a
this.b=null
this.c=0},
tr:function tr(a,b){this.a=a
this.b=b},
tq:function tq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h_:function h_(a,b){this.a=a
this.b=!1
this.$ti=b},
tS:function tS(a){this.a=a},
tT:function tT(a){this.a=a},
uo:function uo(a){this.a=a},
tQ:function tQ(a,b){this.a=a
this.b=b},
tR:function tR(a,b){this.a=a
this.b=b},
jH:function jH(a){var _=this
_.a=$
_.b=!1
_.c=null
_.$ti=a},
qz:function qz(a){this.a=a},
qA:function qA(a){this.a=a},
qC:function qC(a){this.a=a},
qD:function qD(a,b){this.a=a
this.b=b},
qB:function qB(a,b){this.a=a
this.b=b},
qy:function qy(a){this.a=a},
hd:function hd(a,b){this.a=a
this.b=b},
ku:function ku(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
eC:function eC(a,b){this.a=a
this.$ti=b},
a2:function a2(a,b){this.a=a
this.b=b},
aq:function aq(a,b){this.a=a
this.$ti=b},
di:function di(a,b,c,d,e,f,g){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
c9:function c9(){},
ds:function ds(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
tn:function tn(a,b){this.a=a
this.b=b},
tp:function tp(a,b,c){this.a=a
this.b=b
this.c=c},
to:function to(a){this.a=a},
h0:function h0(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
mW:function mW(a,b){this.a=a
this.b=b},
mZ:function mZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mY:function mY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
mP:function mP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mQ:function mQ(a,b,c){this.a=a
this.b=b
this.c=c},
mU:function mU(a,b,c){this.a=a
this.b=b
this.c=c},
dX:function dX(a,b){this.c=a
this.d=b},
bN:function bN(a,b){var _=this
_.a=a
_.c=_.b=null
_.$ti=b},
rp:function rp(a,b){this.a=a
this.b=b},
rq:function rq(a,b){this.a=a
this.b=b},
ro:function ro(a,b,c){this.a=a
this.b=b
this.c=c},
dj:function dj(){},
aa:function aa(a,b){this.a=a
this.$ti=b},
N:function N(a,b){this.a=a
this.$ti=b},
bj:function bj(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
l:function l(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
rr:function rr(a,b){this.a=a
this.b=b},
rw:function rw(a,b){this.a=a
this.b=b},
rv:function rv(a,b){this.a=a
this.b=b},
rt:function rt(a,b){this.a=a
this.b=b},
rs:function rs(a,b){this.a=a
this.b=b},
rz:function rz(a,b,c){this.a=a
this.b=b
this.c=c},
rA:function rA(a,b){this.a=a
this.b=b},
rB:function rB(a){this.a=a},
ry:function ry(a,b){this.a=a
this.b=b},
rx:function rx(a,b){this.a=a
this.b=b},
rC:function rC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
rD:function rD(a,b,c){this.a=a
this.b=b
this.c=c},
rE:function rE(a,b){this.a=a
this.b=b},
jG:function jG(a){this.a=a
this.b=null},
C:function C(){},
oE:function oE(a,b,c){this.a=a
this.b=b
this.c=c},
oD:function oD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oJ:function oJ(a,b){this.a=a
this.b=b},
oK:function oK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
oH:function oH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oI:function oI(a,b){this.a=a
this.b=b},
oL:function oL(a,b){this.a=a
this.b=b},
oM:function oM(a,b){this.a=a
this.b=b},
oF:function oF(a){this.a=a},
oG:function oG(a,b,c){this.a=a
this.b=b
this.c=c},
fI:function fI(){},
jj:function jj(){},
cA:function cA(){},
th:function th(a){this.a=a},
tg:function tg(a){this.a=a},
kv:function kv(){},
jI:function jI(){},
bL:function bL(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
cC:function cC(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
a4:function a4(a,b){this.a=a
this.$ti=b},
cz:function cz(a,b,c,d,e,f,g){var _=this
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
fZ:function fZ(a,b){this.a=a
this.b=b},
qs:function qs(a){this.a=a},
qr:function qr(a){this.a=a},
kr:function kr(a,b,c){this.c=a
this.a=b
this.b=c},
aw:function aw(){},
qN:function qN(a,b,c){this.a=a
this.b=b
this.c=c},
qM:function qM(a){this.a=a},
eB:function eB(){},
jS:function jS(){},
bx:function bx(a){this.b=a
this.a=null},
em:function em(a,b){this.b=a
this.c=b
this.a=null},
rg:function rg(){},
ex:function ex(){this.a=0
this.c=this.b=null},
t1:function t1(a,b){this.a=a
this.b=b},
en:function en(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
bP:function bP(a){this.a=null
this.b=a
this.c=!1},
dm:function dm(a){this.$ti=a},
bz:function bz(a,b,c){this.a=a
this.b=b
this.$ti=c},
t_:function t_(a,b){this.a=a
this.b=b},
hg:function hg(a,b,c,d,e){var _=this
_.a=null
_.b=0
_.c=null
_.d=a
_.e=b
_.f=c
_.r=d
_.$ti=e},
tW:function tW(a,b){this.a=a
this.b=b},
tV:function tV(a,b){this.a=a
this.b=b},
tX:function tX(a,b){this.a=a
this.b=b},
b9:function b9(){},
er:function er(a,b,c,d,e,f,g){var _=this
_.w=a
_.x=null
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
ce:function ce(a,b,c){this.b=a
this.a=b
this.$ti=c},
aL:function aL(a,b,c){this.b=a
this.a=b
this.$ti=c},
h9:function h9(a){this.a=a},
ez:function ez(a,b,c,d,e,f){var _=this
_.w=$
_.x=null
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=_.f=null
_.$ti=f},
c8:function c8(a,b,c){this.a=a
this.b=b
this.$ti=c},
kq:function kq(a){this.a=a},
tN:function tN(a,b){this.a=a
this.b=b},
tP:function tP(a,b){this.a=a
this.b=b},
tO:function tO(a,b){this.a=a
this.b=b},
tL:function tL(a,b){this.a=a
this.b=b},
tM:function tM(a,b){this.a=a
this.b=b},
tK:function tK(a,b){this.a=a
this.b=b},
tH:function tH(a,b){this.a=a
this.b=b},
kF:function kF(a,b){this.a=a
this.b=b},
tG:function tG(a,b){this.a=a
this.b=b},
tF:function tF(){},
tJ:function tJ(a,b){this.a=a
this.b=b},
tI:function tI(a,b){this.a=a
this.b=b},
kE:function kE(a,b){this.a=a
this.b=b},
kG:function kG(a,b){this.a=a
this.b=b},
kD:function kD(){},
jQ:function jQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=null
_.ay=o},
rb:function rb(a,b,c){this.a=a
this.b=b
this.c=c},
ra:function ra(a,b){this.a=a
this.b=b},
rc:function rc(a,b,c){this.a=a
this.b=b
this.c=c},
km:function km(){},
t6:function t6(a,b,c){this.a=a
this.b=b
this.c=c},
t5:function t5(a,b){this.a=a
this.b=b},
t7:function t7(a,b,c){this.a=a
this.b=b
this.c=c},
eG:function eG(a){this.a=a},
u8:function u8(a,b){this.a=a
this.b=b},
fX:function fX(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m},
vg(a,b,c,d,e){if(c==null)if(b==null){if(a==null)return new A.cb(d.h("@<0>").I(e).h("cb<1,2>"))
b=A.w6()}else{if(A.yH()===b&&A.yG()===a)return new A.dp(d.h("@<0>").I(e).h("dp<1,2>"))
if(a==null)a=A.w5()}else{if(b==null)b=A.w6()
if(a==null)a=A.w5()}return A.BS(a,b,c,d,e)},
xF(a,b){var s=a[b]
return s===a?null:s},
vJ(a,b,c){if(c==null)a[b]=a
else a[b]=c},
vI(){var s=Object.create(null)
A.vJ(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
BS(a,b,c,d,e){var s=c!=null?c:new A.r9(d)
return new A.h4(a,b,s,d.h("@<0>").I(e).h("h4<1,2>"))},
vn(a,b,c,d){if(b==null){if(a==null)return new A.b1(c.h("@<0>").I(d).h("b1<1,2>"))
b=A.w6()}else{if(A.yH()===b&&A.yG()===a)return new A.fm(c.h("@<0>").I(d).h("fm<1,2>"))
if(a==null)a=A.w5()}return A.C4(a,b,null,c,d)},
bE(a,b,c){return A.Ef(a,new A.b1(b.h("@<0>").I(c).h("b1<1,2>")))},
T(a,b){return new A.b1(a.h("@<0>").I(b).h("b1<1,2>"))},
C4(a,b,c,d,e){return new A.hf(a,b,new A.rY(d),d.h("@<0>").I(e).h("hf<1,2>"))},
vo(a){return new A.cc(a.h("cc<0>"))},
bs(a){return new A.cc(a.h("cc<0>"))},
vL(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
C5(a,b,c){var s=new A.eu(a,b,c.h("eu<0>"))
s.c=a.e
return s},
CQ(a,b){return J.z(a,b)},
CR(a){return J.V(a)},
Av(a){var s=new A.kj(a)
if(s.m())return s.gp()
return null},
wS(a,b,c){var s=A.vn(null,null,b,c)
a.ad(0,new A.nC(s,b,c))
return s},
AE(a,b){var s,r,q=A.vo(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a6)(a),++r)q.q(0,b.a(a[r]))
return q},
AF(a,b){var s=A.vo(b)
s.aa(0,a)
return s},
AG(a,b){var s=t.bP
return J.wn(s.a(a),s.a(b))},
nH(a){var s,r
if(A.wc(a))return"{...}"
s=new A.a0("")
try{r={}
$.dw.push(a)
s.a+="{"
r.a=!0
a.ad(0,new A.nI(r,s))
s.a+="}"}finally{$.dw.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
nD(a){return new A.fp(A.b4(A.AH(null),null,!1,a.h("0?")),a.h("fp<0>"))},
AH(a){return 8},
cb:function cb(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
rF:function rF(a){this.a=a},
dp:function dp(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
h4:function h4(a,b,c,d){var _=this
_.f=a
_.r=b
_.w=c
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=d},
r9:function r9(a){this.a=a},
hb:function hb(a,b){this.a=a
this.$ti=b},
jY:function jY(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hf:function hf(a,b,c,d){var _=this
_.w=a
_.x=b
_.y=c
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=d},
rY:function rY(a){this.a=a},
cc:function cc(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
rZ:function rZ(a){this.a=a
this.c=this.b=null},
eu:function eu(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
nC:function nC(a,b,c){this.a=a
this.b=b
this.c=c},
d0:function d0(a){var _=this
_.b=_.a=0
_.c=null
_.$ti=a},
k4:function k4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=null
_.d=c
_.e=!1
_.$ti=d},
aH:function aH(){},
y:function y(){},
G:function G(){},
nG:function nG(a){this.a=a},
nI:function nI(a,b){this.a=a
this.b=b},
kz:function kz(){},
fr:function fr(){},
de:function de(a,b){this.a=a
this.$ti=b},
fp:function fp(a,b){var _=this
_.a=a
_.d=_.c=_.b=0
_.$ti=b},
k5:function k5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.$ti=e},
ct:function ct(){},
hs:function hs(){},
hB:function hB(){},
ym(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.F(r)
q=A.ak(String(s),null,null)
throw A.a(q)}q=A.tY(p)
return q},
tY(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.k1(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.tY(a[s])
return a},
CA(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.zp()
else s=new Uint8Array(o)
for(r=J.ab(a),q=0;q<o;++q){p=r.i(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
Cz(a,b,c,d){var s=a?$.zo():$.zn()
if(s==null)return null
if(0===c&&d===b.length)return A.y4(s,b)
return A.y4(s,b.subarray(c,d))},
y4(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
ws(a,b,c,d,e,f){if(B.b.aT(f,4)!==0)throw A.a(A.ak("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.a(A.ak("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.a(A.ak("Invalid base64 padding, more than two '=' characters",a,b))},
BF(a,b,c,d,e,f,g,h){var s,r,q,p,o,n,m,l=h>>>2,k=3-(h&3)
for(s=J.ab(b),r=f.$flags|0,q=c,p=0;q<d;++q){o=s.i(b,q)
p=(p|o)>>>0
l=(l<<8|o)&16777215;--k
if(k===0){n=g+1
r&2&&A.B(f)
f[g]=a.charCodeAt(l>>>18&63)
g=n+1
f[n]=a.charCodeAt(l>>>12&63)
n=g+1
f[g]=a.charCodeAt(l>>>6&63)
g=n+1
f[n]=a.charCodeAt(l&63)
l=0
k=3}}if(p>=0&&p<=255){if(e&&k<3){n=g+1
m=n+1
if(3-k===1){r&2&&A.B(f)
f[g]=a.charCodeAt(l>>>2&63)
f[n]=a.charCodeAt(l<<4&63)
f[m]=61
f[m+1]=61}else{r&2&&A.B(f)
f[g]=a.charCodeAt(l>>>10&63)
f[n]=a.charCodeAt(l>>>4&63)
f[m]=a.charCodeAt(l<<2&63)
f[m+1]=61}return 0}return(l<<2|3-k)>>>0}for(q=c;q<d;){o=s.i(b,q)
if(o<0||o>255)break;++q}throw A.a(A.aX(b,"Not a byte value at index "+q+": 0x"+B.b.oX(s.i(b,q),16),null))},
wE(a){return B.bz.i(0,a.toLowerCase())},
wP(a,b,c){return new A.fn(a,b)},
CS(a){return a.ex()},
C_(a,b){return new A.rT(a,[],A.E6())},
C0(a,b,c){var s,r=new A.a0("")
A.xI(a,r,b,c)
s=r.a
return s.charCodeAt(0)==0?s:s},
xI(a,b,c,d){var s=A.C_(b,c)
s.eC(a)},
C1(a,b,c){var s,r,q
for(s=J.ab(a),r=b,q=0;r<c;++r)q=(q|s.i(a,r))>>>0
if(q>=0&&q<=255)return
A.C2(a,b,c)},
C2(a,b,c){var s,r,q
for(s=J.ab(a),r=b;r<c;++r){q=s.i(a,r)
if(q<0||q>255)throw A.a(A.ak("Source contains non-Latin-1 characters.",a,r))}},
C3(a){return new A.et(a,new A.dr(a))},
y5(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
k1:function k1(a,b){this.a=a
this.b=b
this.c=null},
k2:function k2(a){this.a=a},
rR:function rR(a,b,c){this.b=a
this.c=b
this.a=c},
tB:function tB(){},
tA:function tA(){},
hS:function hS(){},
ky:function ky(){},
hU:function hU(a){this.a=a},
tt:function tt(a,b){this.a=a
this.b=b},
kx:function kx(){},
hT:function hT(a,b){this.a=a
this.b=b},
rj:function rj(a){this.a=a},
t8:function t8(a){this.a=a},
lf:function lf(){},
hY:function hY(){},
qE:function qE(){},
qL:function qL(a){this.c=null
this.a=0
this.b=a},
qF:function qF(){},
qt:function qt(a,b){this.a=a
this.b=b},
lw:function lw(){},
jM:function jM(a){this.a=a},
jN:function jN(a,b){this.a=a
this.b=b
this.c=0},
i8:function i8(){},
dk:function dk(a,b){this.a=a
this.b=b},
i9:function i9(){},
ah:function ah(){},
m2:function m2(a){this.a=a},
cX:function cX(){},
mI:function mI(){},
mJ:function mJ(){},
fn:function fn(a,b){this.a=a
this.b=b},
iB:function iB(a,b){this.a=a
this.b=b},
nz:function nz(){},
iD:function iD(a){this.b=a},
rS:function rS(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
iC:function iC(a){this.a=a},
rU:function rU(){},
rV:function rV(a,b){this.a=a
this.b=b},
rT:function rT(a,b,c){this.c=a
this.a=b
this.b=c},
iE:function iE(){},
iG:function iG(a){this.a=a},
iF:function iF(a,b){this.a=a
this.b=b},
k3:function k3(a){this.a=a},
rW:function rW(a){this.a=a},
nA:function nA(){},
rX:function rX(){},
et:function et(a,b){var _=this
_.e=a
_.a=b
_.c=_.b=null
_.d=!1},
jl:function jl(){},
tm:function tm(a,b){this.a=a
this.b=b},
hv:function hv(){},
dr:function dr(a){this.a=a},
kB:function kB(a,b,c){this.a=a
this.b=b
this.c=c},
jw:function jw(){},
jy:function jy(){},
kC:function kC(a){this.b=this.a=0
this.c=a},
tC:function tC(a,b){var _=this
_.d=a
_.b=_.a=0
_.c=b},
jx:function jx(a){this.a=a},
cE:function cE(a){this.a=a
this.b=16
this.c=0},
kH:function kH(){},
BJ(a,b){var s,r,q=$.cg(),p=a.length,o=4-p%4
if(o===4)o=0
for(s=0,r=0;r<p;++r){s=s*10+a.charCodeAt(r)-48;++o
if(o===4){q=q.aL(0,$.wj()).dE(0,A.qG(s))
s=0
o=0}}if(b)return q.bz(0)
return q},
xt(a){if(48<=a&&a<=57)return a-48
return(a|32)-97+10},
BK(a,b,c){var s,r,q,p,o,n,m,l=a.length,k=l-b,j=B.ac.n1(k/4),i=new Uint16Array(j),h=j-1,g=k-h*4
for(s=b,r=0,q=0;q<g;++q,s=p){p=s+1
o=A.xt(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}n=h-1
i[h]=r
for(;s<l;n=m){for(r=0,q=0;q<4;++q,s=p){p=s+1
o=A.xt(a.charCodeAt(s))
if(o>=16)return null
r=r*16+o}m=n-1
i[n]=r}if(j===1&&i[0]===0)return $.cg()
l=A.bi(j,i)
return new A.aA(l===0?!1:c,i,l)},
BM(a,b){var s,r,q,p,o
if(a==="")return null
s=$.zl().ji(a)
if(s==null)return null
r=s.b
q=r[1]==="-"
p=r[4]
o=r[3]
if(p!=null)return A.BJ(p,q)
if(o!=null)return A.BK(o,2,q)
return null},
bi(a,b){for(;;){if(!(a>0&&b[a-1]===0))break;--a}return a},
vG(a,b,c,d){var s,r=new Uint16Array(d),q=c-b
for(s=0;s<q;++s)r[s]=a[b+s]
return r},
qG(a){var s,r,q,p,o=a<0
if(o){if(a===-9223372036854776e3){s=new Uint16Array(4)
s[3]=32768
r=A.bi(4,s)
return new A.aA(r!==0,s,r)}a=-a}if(a<65536){s=new Uint16Array(1)
s[0]=a
r=A.bi(1,s)
return new A.aA(r===0?!1:o,s,r)}if(a<=4294967295){s=new Uint16Array(2)
s[0]=a&65535
s[1]=B.b.a2(a,16)
r=A.bi(2,s)
return new A.aA(r===0?!1:o,s,r)}r=B.b.Y(B.b.gj1(a)-1,16)+1
s=new Uint16Array(r)
for(q=0;a!==0;q=p){p=q+1
s[q]=a&65535
a=B.b.Y(a,65536)}r=A.bi(r,s)
return new A.aA(r===0?!1:o,s,r)},
vH(a,b,c,d){var s,r,q
if(b===0)return 0
if(c===0&&d===a)return b
for(s=b-1,r=d.$flags|0;s>=0;--s){q=a[s]
r&2&&A.B(d)
d[s+c]=q}for(s=c-1;s>=0;--s){r&2&&A.B(d)
d[s]=0}return b+c},
BI(a,b,c,d){var s,r,q,p,o,n=B.b.Y(c,16),m=B.b.aT(c,16),l=16-m,k=B.b.cM(1,l)-1
for(s=b-1,r=d.$flags|0,q=0;s>=0;--s){p=a[s]
o=B.b.cN(p,l)
r&2&&A.B(d)
d[s+n+1]=(o|q)>>>0
q=B.b.cM((p&k)>>>0,m)}r&2&&A.B(d)
d[n]=q},
xu(a,b,c,d){var s,r,q,p,o=B.b.Y(c,16)
if(B.b.aT(c,16)===0)return A.vH(a,b,o,d)
s=b+o+1
A.BI(a,b,c,d)
for(r=d.$flags|0,q=o;--q,q>=0;){r&2&&A.B(d)
d[q]=0}p=s-1
return d[p]===0?p:s},
BL(a,b,c,d){var s,r,q,p,o=B.b.Y(c,16),n=B.b.aT(c,16),m=16-n,l=B.b.cM(1,n)-1,k=B.b.cN(a[o],n),j=b-o-1
for(s=d.$flags|0,r=0;r<j;++r){q=a[r+o+1]
p=B.b.cM((q&l)>>>0,m)
s&2&&A.B(d)
d[r]=(p|k)>>>0
k=B.b.cN(q,n)}s&2&&A.B(d)
d[j]=k},
qH(a,b,c,d){var s,r=b-d
if(r===0)for(s=b-1;s>=0;--s){r=a[s]-c[s]
if(r!==0)return r}return r},
BG(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]+c[q]
s&2&&A.B(e)
e[q]=r&65535
r=B.b.a2(r,16)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.B(e)
e[q]=r&65535
r=B.b.a2(r,16)}s&2&&A.B(e)
e[b]=r},
jJ(a,b,c,d,e){var s,r,q
for(s=e.$flags|0,r=0,q=0;q<d;++q){r+=a[q]-c[q]
s&2&&A.B(e)
e[q]=r&65535
r=0-(B.b.a2(r,16)&1)}for(q=d;q<b;++q){r+=a[q]
s&2&&A.B(e)
e[q]=r&65535
r=0-(B.b.a2(r,16)&1)}},
xz(a,b,c,d,e,f){var s,r,q,p,o,n
if(a===0)return
for(s=d.$flags|0,r=0;--f,f>=0;e=o,c=q){q=c+1
p=a*b[c]+d[e]+r
o=e+1
s&2&&A.B(d)
d[e]=p&65535
r=B.b.Y(p,65536)}for(;r!==0;e=o){n=d[e]+r
o=e+1
s&2&&A.B(d)
d[e]=n&65535
r=B.b.Y(n,65536)}},
BH(a,b,c){var s,r=b[c]
if(r===a)return 65535
s=B.b.hy((r<<16|b[c-1])>>>0,a)
if(s>65535)return 65535
return s},
El(a){return A.kS(a)},
Aj(a){var s=!0
s=typeof a=="string"
if(s)A.wG(a)},
wG(a){throw A.a(A.aX(a,"object","Expandos are not allowed on strings, numbers, bools, records or null"))},
jW(a,b){var s=$.zm()
s=s==null?null:new s(A.cH(A.EV(a,b),1))
return new A.jV(s,b.h("jV<0>"))},
yM(a){var s=A.vq(a,null)
if(s!=null)return s
throw A.a(A.ak(a,null,null))},
Ah(a,b){a=A.an(a,new Error())
a.stack=b.j(0)
throw a},
b4(a,b,c,d){var s,r=c?J.Ax(a,d):J.vi(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
AJ(a,b,c){var s,r=A.u([],c.h("w<0>"))
for(s=J.Z(a);s.m();)r.push(s.gp())
r.$flags=1
return r},
ap(a,b){var s,r
if(Array.isArray(a))return A.u(a.slice(0),b.h("w<0>"))
s=A.u([],b.h("w<0>"))
for(r=J.Z(a);r.m();)s.push(r.gp())
return s},
nE(a,b){var s=A.AJ(a,!1,b)
s.$flags=3
return s},
bJ(a,b,c){var s,r,q,p,o
A.aI(b,"start")
s=c==null
r=!s
if(r){q=c-b
if(q<0)throw A.a(A.ac(c,b,null,"end",null))
if(q===0)return""}if(Array.isArray(a)){p=a
o=p.length
if(s)c=o
return A.x7(b>0||c<o?p.slice(b,c):p)}if(t.Z.b(a))return A.Bf(a,b,c)
if(r)a=J.wr(a,c)
if(b>0)a=J.l0(a,b)
s=A.ap(a,t.S)
return A.x7(s)},
Bf(a,b,c){var s=a.length
if(b>=s)return""
return A.AX(a,b,c==null||c>s?s:c)},
au(a,b){return new A.fl(a,A.vk(a,!1,b,!1,!1,""))},
Ek(a,b){return a==null?b==null:a===b},
vu(a,b,c){var s=J.Z(b)
if(!s.m())return a
if(c.length===0){do a+=A.q(s.gp())
while(s.m())}else{a+=A.q(s.gp())
while(s.m())a=a+c+A.q(s.gp())}return a},
vz(){var s,r,q=A.AS()
if(q==null)throw A.a(A.P("'Uri.base' is not supported"))
s=$.xr
if(s!=null&&q===$.xq)return s
r=A.df(q)
$.xr=r
$.xq=q
return r},
fG(){return A.K(new Error())},
mE(a){var s=B.b.aT(a,1000),r=B.b.Y(a-s,1000)
if(r<-864e13||r>864e13)A.r(A.ac(r,-864e13,864e13,"millisecondsSinceEpoch",null))
if(r===864e13&&s!==0)A.r(A.aX(s,"microsecond","Time including microseconds is outside valid range"))
A.bd(!1,"isUtc",t.y)
return new A.bT(r,s,!1)},
Ac(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
wD(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ig(a){if(a>=10)return""+a
return"0"+a},
mH(a,b){return new A.aZ(a+1000*b)},
mK(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(q.b===b)return q}throw A.a(A.aX(b,"name","No enum value with that name"))},
ij(a){if(typeof a=="number"||A.kM(a)||a==null)return J.be(a)
if(typeof a=="string")return JSON.stringify(a)
return A.x6(a)},
ik(a,b){A.bd(a,"error",t.K)
A.bd(b,"stackTrace",t.l)
A.Ah(a,b)},
hW(a){return new A.hV(a)},
I(a,b){return new A.a3(!1,null,b,a)},
aX(a,b,c){return new A.a3(!0,a,b,c)},
hR(a,b){return a},
az(a){var s=null
return new A.e_(s,s,!1,s,s,a)},
o4(a,b){return new A.e_(null,null,!0,a,b,"Value not in range")},
ac(a,b,c,d,e){return new A.e_(b,c,!0,a,d,"Invalid value")},
x8(a,b,c,d){if(a<b||a>c)throw A.a(A.ac(a,b,c,d,null))
return a},
aN(a,b,c){if(0>a||a>c)throw A.a(A.ac(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.a(A.ac(b,a,c,"end",null))
return b}return c},
aI(a,b){if(a<0)throw A.a(A.ac(a,0,null,b,null))
return a},
wL(a,b){var s=b.b
return new A.fi(s,!0,a,null,"Index out of range")},
it(a,b,c,d,e){return new A.fi(b,!0,a,e,"Index out of range")},
As(a,b,c,d,e){if(0>a||a>=b)throw A.a(A.it(a,b,c,d,e==null?"index":e))
return a},
P(a){return new A.fQ(a)},
vy(a){return new A.jo(a)},
D(a){return new A.aV(a)},
ao(a){return new A.ia(a)},
wF(a){return new A.jU(a)},
ak(a,b,c){return new A.aT(a,b,c)},
Aw(a,b,c){var s,r
if(A.wc(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.u([],t.s)
$.dw.push(a)
try{A.De(a,s)}finally{$.dw.pop()}r=A.vu(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
nw(a,b,c){var s,r
if(A.wc(a))return b+"..."+c
s=new A.a0(b)
$.dw.push(a)
try{r=s
r.a=A.vu(r.a,a,", ")}finally{$.dw.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
De(a,b){var s,r,q,p,o,n,m,l=a.gA(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.q(l.gp())
b.push(s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
r=b.pop()
q=b.pop()}else{p=l.gp();++j
if(!l.m()){if(j<=4){b.push(A.q(p))
return}r=A.q(p)
q=b.pop()
k+=r.length+2}else{o=l.gp();++j
for(;l.m();p=o,o=n){n=l.gp();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
k-=b.pop().length+2;--j}b.push("...")
return}}q=A.q(p)
r=A.q(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
wV(a,b,c,d,e){return new A.cQ(a,b.h("@<0>").I(c).I(d).I(e).h("cQ<1,2,3,4>"))},
c0(a,b,c,d,e,f){var s
if(B.e===c)return A.xj(J.V(a),J.V(b),$.eT())
if(B.e===d){s=J.V(a)
b=J.V(b)
c=J.V(c)
return A.fM(A.av(A.av(A.av($.eT(),s),b),c))}if(B.e===e){s=J.V(a)
b=J.V(b)
c=J.V(c)
d=J.V(d)
return A.fM(A.av(A.av(A.av(A.av($.eT(),s),b),c),d))}if(B.e===f){s=J.V(a)
b=J.V(b)
c=J.V(c)
d=J.V(d)
e=J.V(e)
return A.fM(A.av(A.av(A.av(A.av(A.av($.eT(),s),b),c),d),e))}s=J.V(a)
b=J.V(b)
c=J.V(c)
d=J.V(d)
e=J.V(e)
f=J.V(f)
f=A.fM(A.av(A.av(A.av(A.av(A.av(A.av($.eT(),s),b),c),d),e),f))
return f},
AQ(a){var s,r,q=$.eT()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a6)(a),++r)q=A.av(q,J.V(a[r]))
return A.fM(q)},
AR(a){var s,r,q,p,o
for(s=a.gA(a),r=0,q=0;s.m();){p=J.V(s.gp())
o=((p^p>>>16)>>>0)*569420461>>>0
o=((o^o>>>15)>>>0)*3545902487>>>0
r=r+((o^o>>>15)>>>0)&1073741823;++q}return A.xj(r,q,0)},
uX(a){var s=A.q(a),r=$.Dm
if(r==null)A.yT(s)
else r.$1(s)},
df(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.xp(a4<a4?B.a.t(a5,0,a4):a5,5,a3).gjP()
else if(s===32)return A.xp(B.a.t(a5,5,a4),0,a3).gjP()}r=A.b4(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(A.yw(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(A.yw(a5,0,q,20,r)===20)r[7]=q
p=r[2]+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(l<m)m=l
if(n<p)n=m
else if(n<=q)n=q+1
if(o<p)o=n
k=r[7]<0
j=a3
if(k){k=!1
if(!(p>q+3)){i=o>0
if(!(i&&o+1===n)){if(!B.a.S(a5,"\\",n))if(p>0)h=B.a.S(a5,"\\",p-1)||B.a.S(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.a.S(a5,"..",n)))h=m>n+2&&B.a.S(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.a.S(a5,"file",0)){if(p<=0){if(!B.a.S(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.a.t(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.a.c8(a5,n,m,"/");++a4
m=f}j="file"}else if(B.a.S(a5,"http",0)){if(i&&o+3===n&&B.a.S(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.a.c8(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.a.S(a5,"https",0)){if(i&&o+4===n&&B.a.S(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.a.c8(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.bk(a4<a5.length?B.a.t(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.vP(a5,0,q)
else{if(q===0)A.eE(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.y0(a5,c,p-1):""
a=A.xY(a5,p,o,!1)
i=o+1
if(i<n){a0=A.vq(B.a.t(a5,i,n),a3)
d=A.tz(a0==null?A.r(A.ak("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.xZ(a5,n,m,a3,j,a!=null)
a2=m<l?A.y_(a5,m+1,l,a3):a3
return A.hD(j,b,a,d,a1,a2,l<a4?A.xX(a5,l+1,a4):a3)},
Bt(a){return A.vS(a,0,a.length,B.l,!1)},
jv(a,b,c){throw A.a(A.ak("Illegal IPv4 address, "+a,b,c))},
Bq(a,b,c,d,e){var s,r,q,p,o,n,m,l,k="invalid character"
for(s=d.$flags|0,r=b,q=r,p=0,o=0;;){n=q>=c?0:a.charCodeAt(q)
m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.jv("each part must be in the range 0..255",a,r)}A.jv("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.jv(k,a,q)}l=p+1
s&2&&A.B(d)
d[e+p]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.jv(k,a,q)
p=l}A.jv("IPv4 address should contain exactly 4 parts",a,q)},
Br(a,b,c){var s
if(b===c)throw A.a(A.ak("Empty IP address",a,b))
if(a.charCodeAt(b)===118){s=A.Bs(a,b,c)
if(s!=null)throw A.a(s)
return!1}A.xs(a,b,c)
return!0},
Bs(a,b,c){var s,r,q,p,o="Missing hex-digit in IPvFuture address";++b
for(s=b;;s=r){if(s<c){r=s+1
q=a.charCodeAt(s)
if((q^48)<=9)continue
p=q|32
if(p>=97&&p<=102)continue
if(q===46){if(r-1===b)return new A.aT(o,a,r)
s=r
break}return new A.aT("Unexpected character",a,r-1)}if(s-1===b)return new A.aT(o,a,s)
return new A.aT("Missing '.' in IPvFuture address",a,s)}if(s===c)return new A.aT("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if((u.S.charCodeAt(a.charCodeAt(s))&16)!==0){++s
if(s<c)continue
return null}return new A.aT("Invalid IPvFuture address character",a,s)}},
xs(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="an address must contain at most 8 parts",a0=new A.pD(a1)
if(a3-a2<2)a0.$2("address is too short",null)
s=new Uint8Array(16)
r=-1
q=0
if(a1.charCodeAt(a2)===58)if(a1.charCodeAt(a2+1)===58){p=a2+2
o=p
r=0
q=1}else{a0.$2("invalid start colon",a2)
p=a2
o=p}else{p=a2
o=p}for(n=0,m=!0;;){l=p>=a3?0:a1.charCodeAt(p)
A:{k=l^48
j=!1
if(k<=9)i=k
else{h=l|32
if(h>=97&&h<=102)i=h-87
else break A
m=j}if(p<o+4){n=n*16+i;++p
continue}a0.$2("an IPv6 part can contain a maximum of 4 hex digits",o)}if(p>o){if(l===46){if(m){if(q<=6){A.Bq(a1,o,a3,s,q*2)
q+=2
p=a3
break}a0.$2(a,o)}break}g=q*2
s[g]=B.b.a2(n,8)
s[g+1]=n&255;++q
if(l===58){if(q<8){++p
o=p
n=0
m=!0
continue}a0.$2(a,p)}break}if(l===58){if(r<0){f=q+1;++p
r=q
q=f
o=p
continue}a0.$2("only one wildcard `::` is allowed",p)}if(r!==q-1)a0.$2("missing part",p)
break}if(p<a3)a0.$2("invalid character",p)
if(q<8){if(r<0)a0.$2("an address without a wildcard must contain exactly 8 parts",a3)
e=r+1
d=q-e
if(d>0){c=e*2
b=16-d*2
B.f.R(s,b,16,s,c)
B.f.fQ(s,c,b,0)}}return s},
hD(a,b,c,d,e,f,g){return new A.hC(a,b,c,d,e,f,g)},
xU(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
eE(a,b,c){throw A.a(A.ak(c,a,b))},
Ct(a,b){var s,r,q
for(s=a.length,r=0;r<s;++r){q=a[r]
if(B.a.V(q,"/")){s=A.P("Illegal path character "+q)
throw A.a(s)}}},
tz(a,b){if(a!=null&&a===A.xU(b))return null
return a},
xY(a,b,c,d){var s,r,q,p,o,n,m,l
if(a==null)return null
if(b===c)return""
if(a.charCodeAt(b)===91){s=c-1
if(a.charCodeAt(s)!==93)A.eE(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=""
if(a.charCodeAt(r)!==118){p=A.Cu(a,r,s)
if(p<s){o=p+1
q=A.y3(a,B.a.S(a,"25",o)?p+3:o,s,"%25")}s=p}n=A.Br(a,r,s)
m=B.a.t(a,r,s)
return"["+(n?m.toLowerCase():m)+q+"]"}for(l=b;l<c;++l)if(a.charCodeAt(l)===58){s=B.a.bn(a,"%",b)
s=s>=b&&s<c?s:c
if(s<c){o=s+1
q=A.y3(a,B.a.S(a,"25",o)?s+3:o,c,"%25")}else q=""
A.xs(a,b,s)
return"["+B.a.t(a,b,s)+q+"]"}return A.Cx(a,b,c)},
Cu(a,b,c){var s=B.a.bn(a,"%",b)
return s>=b&&s<c?s:c},
y3(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new A.a0(d):null
for(s=b,r=s,q=!0;s<c;){p=a.charCodeAt(s)
if(p===37){o=A.vQ(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new A.a0("")
m=i.a+=B.a.t(a,r,s)
if(n)o=B.a.t(a,s,s+3)
else if(o==="%")A.eE(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else if(p<127&&(u.S.charCodeAt(p)&1)!==0){if(q&&65<=p&&90>=p){if(i==null)i=new A.a0("")
if(r<s){i.a+=B.a.t(a,r,s)
r=s}q=!1}++s}else{l=1
if((p&64512)===55296&&s+1<c){k=a.charCodeAt(s+1)
if((k&64512)===56320){p=65536+((p&1023)<<10)+(k&1023)
l=2}}j=B.a.t(a,r,s)
if(i==null){i=new A.a0("")
n=i}else n=i
n.a+=j
m=A.vO(p)
n.a+=m
s+=l
r=s}}if(i==null)return B.a.t(a,b,c)
if(r<c){j=B.a.t(a,r,c)
i.a+=j}n=i.a
return n.charCodeAt(0)==0?n:n},
Cx(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=u.S
for(s=b,r=s,q=null,p=!0;s<c;){o=a.charCodeAt(s)
if(o===37){n=A.vQ(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new A.a0("")
l=B.a.t(a,r,s)
if(!p)l=l.toLowerCase()
k=q.a+=l
j=3
if(m)n=B.a.t(a,s,s+3)
else if(n==="%"){n="%25"
j=1}q.a=k+n
s+=j
r=s
p=!0}else if(o<127&&(h.charCodeAt(o)&32)!==0){if(p&&65<=o&&90>=o){if(q==null)q=new A.a0("")
if(r<s){q.a+=B.a.t(a,r,s)
r=s}p=!1}++s}else if(o<=93&&(h.charCodeAt(o)&1024)!==0)A.eE(a,s,"Invalid character")
else{j=1
if((o&64512)===55296&&s+1<c){i=a.charCodeAt(s+1)
if((i&64512)===56320){o=65536+((o&1023)<<10)+(i&1023)
j=2}}l=B.a.t(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new A.a0("")
m=q}else m=q
m.a+=l
k=A.vO(o)
m.a+=k
s+=j
r=s}}if(q==null)return B.a.t(a,b,c)
if(r<c){l=B.a.t(a,r,c)
if(!p)l=l.toLowerCase()
q.a+=l}m=q.a
return m.charCodeAt(0)==0?m:m},
vP(a,b,c){var s,r,q
if(b===c)return""
if(!A.xW(a.charCodeAt(b)))A.eE(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=a.charCodeAt(s)
if(!(q<128&&(u.S.charCodeAt(q)&8)!==0))A.eE(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=B.a.t(a,b,c)
return A.Cs(r?a.toLowerCase():a)},
Cs(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
y0(a,b,c){if(a==null)return""
return A.hE(a,b,c,16,!1,!1)},
xZ(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.hE(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.a.K(s,"/"))s="/"+s
return A.Cw(s,e,f)},
Cw(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.K(a,"/")&&!B.a.K(a,"\\"))return A.vR(a,!s||c)
return A.du(a)},
y_(a,b,c,d){if(a!=null)return A.hE(a,b,c,256,!0,!1)
return null},
xX(a,b,c){if(a==null)return null
return A.hE(a,b,c,256,!0,!1)},
vQ(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=a.charCodeAt(b+1)
r=a.charCodeAt(n)
q=A.uC(s)
p=A.uC(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127&&(u.S.charCodeAt(o)&1)!==0)return A.aR(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return B.a.t(a,b,b+3).toUpperCase()
return null},
vO(a){var s,r,q,p,o,n="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
s[1]=n.charCodeAt(a>>>4)
s[2]=n.charCodeAt(a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}s=new Uint8Array(3*q)
for(p=0;--q,q>=0;r=128){o=B.b.mw(a,6*q)&63|r
s[p]=37
s[p+1]=n.charCodeAt(o>>>4)
s[p+2]=n.charCodeAt(o&15)
p+=3}}return A.bJ(s,0,null)},
hE(a,b,c,d,e,f){var s=A.y2(a,b,c,d,e,f)
return s==null?B.a.t(a,b,c):s},
y2(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j=null,i=u.S
for(s=!e,r=b,q=r,p=j;r<c;){o=a.charCodeAt(r)
if(o<127&&(i.charCodeAt(o)&d)!==0)++r
else{n=1
if(o===37){m=A.vQ(a,r,!1)
if(m==null){r+=3
continue}if("%"===m)m="%25"
else n=3}else if(o===92&&f)m="/"
else if(s&&o<=93&&(i.charCodeAt(o)&1024)!==0){A.eE(a,r,"Invalid character")
n=j
m=n}else{if((o&64512)===55296){l=r+1
if(l<c){k=a.charCodeAt(l)
if((k&64512)===56320){o=65536+((o&1023)<<10)+(k&1023)
n=2}}}m=A.vO(o)}if(p==null){p=new A.a0("")
l=p}else l=p
l.a=(l.a+=B.a.t(a,q,r))+m
r+=n
q=r}}if(p==null)return j
if(q<c){s=B.a.t(a,q,c)
p.a+=s}s=p.a
return s.charCodeAt(0)==0?s:s},
y1(a){if(B.a.K(a,"."))return!0
return B.a.cz(a,"/.")!==-1},
du(a){var s,r,q,p,o,n
if(!A.y1(a))return a
s=A.u([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){if(s.length!==0){s.pop()
if(s.length===0)s.push("")}p=!0}else{p="."===n
if(!p)s.push(n)}}if(p)s.push("")
return B.c.bp(s,"/")},
vR(a,b){var s,r,q,p,o,n
if(!A.y1(a))return!b?A.xV(a):a
s=A.u([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.c.gaQ(s)!=="..")s.pop()
else s.push("..")
p=!0}else{p="."===n
if(!p)s.push(n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)s.push("")
if(!b)s[0]=A.xV(s[0])
return B.c.bp(s,"/")},
xV(a){var s,r,q=a.length
if(q>=2&&A.xW(a.charCodeAt(0)))for(s=1;s<q;++s){r=a.charCodeAt(s)
if(r===58)return B.a.t(a,0,s)+"%3A"+B.a.a0(a,s+1)
if(r>127||(u.S.charCodeAt(r)&8)===0)break}return a},
Cy(a,b){if(a.ej("package")&&a.c==null)return A.yy(b,0,b.length)
return-1},
Cv(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=a.charCodeAt(b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw A.a(A.I("Invalid URL encoding",null))}}return s},
vS(a,b,c,d,e){var s,r,q,p,o=b
for(;;){if(!(o<c)){s=!0
break}r=a.charCodeAt(o)
if(r<=127)q=r===37
else q=!0
if(q){s=!1
break}++o}if(s)if(B.l===d)return B.a.t(a,b,c)
else p=new A.br(B.a.t(a,b,c))
else{p=A.u([],t.t)
for(q=a.length,o=b;o<c;++o){r=a.charCodeAt(o)
if(r>127)throw A.a(A.I("Illegal percent encoding in URI",null))
if(r===37){if(o+3>q)throw A.a(A.I("Truncated URI",null))
p.push(A.Cv(a,o+1))
o+=2}else p.push(r)}}return d.aI(p)},
xW(a){var s=a|32
return 97<=s&&s<=122},
xp(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.u([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.a(A.ak(k,a,r))}}if(q<0&&r>b)throw A.a(A.ak(k,a,r))
while(p!==44){j.push(r);++r
for(o=-1;r<s;++r){p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=B.c.gaQ(j)
if(p!==44||r!==n+7||!B.a.S(a,"base64",n+1))throw A.a(A.ak("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=B.aN.oA(a,m,s)
else{l=A.y2(a,m,s,256,!0,!1)
if(l!=null)a=B.a.c8(a,m,s,l)}return new A.pC(a,j,c)},
yw(a,b,c,d,e){var s,r,q
for(s=b;s<c;++s){r=a.charCodeAt(s)^96
if(r>95)r=31
q='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'.charCodeAt(d*96+r)
d=q&31
e[q>>>5]=s}return d},
xM(a){if(a.b===7&&B.a.K(a.a,"package")&&a.c<=0)return A.yy(a.a,a.e,a.f)
return-1},
yy(a,b,c){var s,r,q
for(s=b,r=0;s<c;++s){q=a.charCodeAt(s)
if(q===47)return r!==0?s:-1
if(q===37||q===58)return-1
r|=q^46}return-1},
yb(a,b,c){var s,r,q,p,o,n
for(s=a.length,r=0,q=0;q<s;++q){p=b.charCodeAt(c+q)
o=a.charCodeAt(q)^p
if(o!==0){if(o===32){n=p|o
if(97<=n&&n<=122){r=32
continue}}return-1}}return r},
aA:function aA(a,b,c){this.a=a
this.b=b
this.c=c},
qI:function qI(){},
qJ:function qJ(){},
jV:function jV(a,b){this.a=a
this.$ti=b},
bT:function bT(a,b,c){this.a=a
this.b=b
this.c=c},
aZ:function aZ(a){this.a=a},
rh:function rh(){},
W:function W(){},
hV:function hV(a){this.a=a},
c4:function c4(){},
a3:function a3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e_:function e_(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fi:function fi(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fQ:function fQ(a){this.a=a},
jo:function jo(a){this.a=a},
aV:function aV(a){this.a=a},
ia:function ia(a){this.a=a},
iU:function iU(){},
fF:function fF(){},
jU:function jU(a){this.a=a},
aT:function aT(a,b,c){this.a=a
this.b=b
this.c=c},
iv:function iv(){},
n:function n(){},
M:function M(a,b,c){this.a=a
this.b=b
this.$ti=c},
E:function E(){},
k:function k(){},
kt:function kt(){},
a0:function a0(a){this.a=a},
pD:function pD(a){this.a=a},
hC:function hC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
pC:function pC(a,b,c){this.a=a
this.b=b
this.c=c},
bk:function bk(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
jR:function jR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=_.w=$},
im:function im(a){this.a=a},
yd(a,b,c,d){if(a)return""+d+"-"+c+"-begin"
if(b)return""+d+"-"+c+"-end"
return c},
yo(a){var s=$.eH.i(0,a)
if(s==null)return a
return a+"-"+A.q(s)},
CP(a){var s,r
if(!$.eH.E(a))return
s=$.eH.i(0,a)
s.toString
r=s-1
s=$.eH
if(r<=0)s.H(0,a)
else s.l(0,a,r)},
FP(a,b,c,d,e){var s,r,q,p,o,n
if(c===9||c===11||c===10)return
if($.eK>1e4&&$.eH.a===0){$.kX().clearMarks()
$.kX().clearMeasures()
$.eK=0}s=c===1||c===5
r=c===2||c===7
q=A.yd(s,r,d,a)
if(s){p=$.eH.i(0,q)
if(p==null)p=0
$.eH.l(0,q,p+1)
q=A.yo(q)}o=$.kX()
o.toString
o.mark(q,$.zu().parse(e))
$.eK=$.eK+1
if(r){n=A.yd(!0,!1,d,a)
o=$.kX()
o.toString
o.measure(d,A.yo(n),q)
$.eK=$.eK+1
A.CP(n)}B.b.n2($.eK,0,10001)},
FC(a){if(a==null||a.a===0)return"{}"
return B.h.b8(a)},
u5:function u5(){},
u3:function u3(){},
vC:function vC(a,b){this.a=a
this.b=b},
yL(){return v.G},
AI(a){return a},
AA(a){return a},
AC(a){return a},
vv(a){return a},
wJ(a){return new v.G.Promise(A.ba(new A.mT(a)))},
iS:function iS(a){this.a=a},
mT:function mT(a){this.a=a},
mR:function mR(a){this.a=a},
mS:function mS(a){this.a=a},
u2(a){var s
if(typeof a=="function")throw A.a(A.I("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(){return b(c)}}(A.CG,a)
s[$.dB()]=a
return s},
bB(a){var s
if(typeof a=="function")throw A.a(A.I("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.CH,a)
s[$.dB()]=a
return s},
ba(a){var s
if(typeof a=="function")throw A.a(A.I("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e){return b(c,d,e,arguments.length)}}(A.CI,a)
s[$.dB()]=a
return s},
kL(a){var s
if(typeof a=="function")throw A.a(A.I("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f){return b(c,d,e,f,arguments.length)}}(A.CJ,a)
s[$.dB()]=a
return s},
eJ(a){var s
if(typeof a=="function")throw A.a(A.I("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g){return b(c,d,e,f,g,arguments.length)}}(A.CK,a)
s[$.dB()]=a
return s},
w_(a){var s
if(typeof a=="function")throw A.a(A.I("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d,e,f,g,h){return b(c,d,e,f,g,h,arguments.length)}}(A.CL,a)
s[$.dB()]=a
return s},
CG(a){return a.$0()},
CH(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
CI(a,b,c,d){if(d>=2)return a.$2(b,c)
if(d===1)return a.$1(b)
return a.$0()},
CJ(a,b,c,d,e){if(e>=3)return a.$3(b,c,d)
if(e===2)return a.$2(b,c)
if(e===1)return a.$1(b)
return a.$0()},
CK(a,b,c,d,e,f){if(f>=4)return a.$4(b,c,d,e)
if(f===3)return a.$3(b,c,d)
if(f===2)return a.$2(b,c)
if(f===1)return a.$1(b)
return a.$0()},
CL(a,b,c,d,e,f,g){if(g>=5)return a.$5(b,c,d,e,f)
if(g===4)return a.$4(b,c,d,e)
if(g===3)return a.$3(b,c,d)
if(g===2)return a.$2(b,c)
if(g===1)return a.$1(b)
return a.$0()},
yl(a){return a==null||A.kM(a)||typeof a=="number"||typeof a=="string"||t.jx.b(a)||t.p.b(a)||t.nn.b(a)||t.m6.b(a)||t.i7.b(a)||t.bW.b(a)||t.mC.b(a)||t.pk.b(a)||t.kI.b(a)||t.lo.b(a)||t.fW.b(a)},
Ew(a){if(A.yl(a))return a
return new A.uH(new A.dp(t.mp)).$1(a)},
uA(a,b){return a[b]},
yF(a,b,c){return a[b].apply(a,c)},
E0(a,b){var s,r
if(b==null)return new a()
if(b instanceof Array)switch(b.length){case 0:return new a()
case 1:return new a(b[0])
case 2:return new a(b[0],b[1])
case 3:return new a(b[0],b[1],b[2])
case 4:return new a(b[0],b[1],b[2],b[3])}s=[null]
B.c.aa(s,b)
r=a.bind.apply(a,s)
String(r)
return new r()},
ar(a,b){var s=new A.l($.m,b.h("l<0>")),r=new A.aa(s,b.h("aa<0>"))
a.then(A.cH(new A.uY(r),1),A.cH(new A.uZ(r),1))
return s},
uH:function uH(a){this.a=a},
uY:function uY(a){this.a=a},
uZ:function uZ(a){this.a=a},
yP(a,b){return Math.max(a,b)},
AY(){return B.b4},
rO:function rO(){},
rP:function rP(a){this.a=a},
ii:function ii(a,b){this.a=a
this.b=b},
fU:function fU(a){this.a=a},
fH:function fH(a,b,c){var _=this
_.a=$
_.b=!1
_.c=a
_.e=b
_.$ti=c},
oB:function oB(){},
oC:function oC(a,b){this.a=a
this.b=b},
oA:function oA(){},
oz:function oz(a){this.a=a},
oy:function oy(a,b){this.a=a
this.b=b},
eA:function eA(a){this.a=a},
U:function U(){},
ly:function ly(a){this.a=a},
lz:function lz(a){this.a=a},
lA:function lA(a,b){this.a=a
this.b=b},
lB:function lB(a){this.a=a},
lC:function lC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f7:function f7(){},
eD:function eD(){},
d8:function d8(a){this.$ti=a},
ev:function ev(a,b,c){this.a=a
this.b=b
this.c=c},
iJ:function iJ(a){this.$ti=a},
wX(){throw A.a(A.P(u.O))},
Bl(){throw A.a(A.P("Cannot modify an unmodifiable Map"))},
iQ:function iQ(){},
jr:function jr(){},
F9(a){return new A.cs("Request aborted by `abortTrigger`",a)},
l3:function l3(){},
cs:function cs(a,b){this.a=a
this.b=b},
hZ:function hZ(){},
i_:function i_(){},
lg:function lg(){},
lh:function lh(){},
li:function li(){},
yA(a,b){var s
if(t.m.b(a)&&"AbortError"===a.name)return new A.cs("Request aborted by `abortTrigger`",b.b)
if(!(a instanceof A.bR)){s=J.be(a)
if(B.a.K(s,"TypeError: "))s=B.a.a0(s,11)
a=new A.bR(s,b.b)}return a},
yq(a,b,c){A.ik(A.yA(a,c),b)},
CF(a,b){return new A.bz(!1,new A.tU(a,b),t.fb)},
eM(a,b,c){return A.Do(a,b,c)},
Do(a,a0,a1){var s=0,r=A.i(t.H),q,p=2,o=[],n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$eM=A.d(function(a2,a3){if(a2===1){o.push(a3)
s=p}for(;;)switch(s){case 0:e={}
d=a0.body
c=d==null?null:d.getReader()
s=c==null?3:4
break
case 3:s=5
return A.b(a1.n(),$async$eM)
case 5:s=1
break
case 4:e.a=null
e.b=e.c=!1
a1.f=new A.u6(e)
a1.r=new A.u7(e,c,a)
d=t.Z,k=t.m,j=t.D,i=t.h
case 6:n=null
p=9
s=12
return A.b(A.ar(c.read(),k),$async$eM)
case 12:n=a3
p=2
s=11
break
case 9:p=8
b=o.pop()
m=A.F(b)
l=A.K(b)
s=!e.c?13:14
break
case 13:e.b=!0
d=A.yA(m,a)
k=l
j=a1.b
if(j>=4)A.r(a1.ap())
if((j&1)!==0){j=a1.ga6()
j.a9(d,k==null?B.t:k)}s=15
return A.b(a1.n(),$async$eM)
case 15:case 14:s=7
break
s=11
break
case 8:s=2
break
case 11:if(n.done){a1.j5()
s=7
break}else{g=n.value
g.toString
d.a(g)
f=a1.b
if(f>=4)A.r(a1.ap())
if((f&1)!==0)a1.ga6().N(g)}g=a1.b
s=((g&1)!==0?(a1.ga6().e&4)!==0:(g&2)===0)?16:17
break
case 16:g=e.a
s=18
return A.b((g==null?e.a=new A.aa(new A.l($.m,j),i):g).a,$async$eM)
case 18:case 17:if((a1.b&1)===0){s=7
break}s=6
break
case 7:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$eM,r)},
i3:function i3(a){this.b=!1
this.c=a},
lm:function lm(a){this.a=a},
ln:function ln(a){this.a=a},
tU:function tU(a,b){this.a=a
this.b=b},
u6:function u6(a){this.a=a},
u7:function u7(a,b,c){this.a=a
this.b=b
this.c=c},
cO:function cO(a){this.a=a},
lx:function lx(a){this.a=a},
wA(a,b){return new A.bR(a,b)},
bR:function bR(a,b){this.a=a
this.b=b},
v8(a,b,c){var s=new Uint8Array(0),r=$.z5()
if(!r.b.test(a))A.r(A.aX(a,"method","Not a valid method"))
r=t.N
return new A.hQ(c,s,a,b,A.vn(new A.lg(),new A.lh(),r,r))},
oh:function oh(){},
hQ:function hQ(a,b,c,d,e){var _=this
_.cx=a
_.y=b
_.a=c
_.b=d
_.r=e
_.w=!1},
jD:function jD(){},
j4(a){var s=0,r=A.i(t.b),q,p,o,n,m,l,k,j
var $async$j4=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=3
return A.b(a.w.he(),$async$j4)
case 3:p=c
o=a.b
n=a.a
m=a.e
l=a.c
k=A.z1(p)
j=p.length
k=new A.e1(k,n,o,l,j,m,!1,!0)
k.eP(o,j,m,!1,!0,l,n)
q=k
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$j4,r)},
vW(a){var s=a.i(0,"content-type")
if(s!=null)return A.wW(s)
return A.nK("application","octet-stream",null)},
e1:function e1(a,b,c,d,e,f,g,h){var _=this
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h},
Be(a,b,c,d,e,f,g,h){var s=new A.cv(A.z0(a),h,b,g,c,d,!1,!0)
s.eP(b,c,d,!1,!0,g,h)
return s},
cv:function cv(a,b,c,d,e,f,g,h){var _=this
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h},
jk:function jk(a,b,c,d,e,f,g,h){var _=this
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h},
zV(a){return a.toLowerCase()},
eY:function eY(a,b,c){this.a=a
this.c=b
this.$ti=c},
wW(a){return A.ET("media type",a,new A.nL(a))},
nK(a,b,c){var s=t.N
if(c==null)s=A.T(s,s)
else{s=new A.eY(A.E1(),A.T(s,t.gc),t.kj)
s.aa(0,c)}return new A.fs(a.toLowerCase(),b.toLowerCase(),new A.de(s,t.ph))},
fs:function fs(a,b,c){this.a=a
this.b=b
this.c=c},
nL:function nL(a){this.a=a},
nN:function nN(a){this.a=a},
nM:function nM(){},
Ee(a){var s
a.jg($.zx(),"quoted string")
s=a.gh1().i(0,0)
return A.yY(B.a.t(s,1,s.length-1),$.zw(),new A.uv(),null)},
uv:function uv(){},
cn:function cn(a,b){this.a=a
this.b=b},
dS:function dS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.r=e
_.w=f},
vp(a){return $.AK.cE(a,new A.nF(a))},
wU(a,b,c){var s=new A.dT(a,b,c)
if(b==null)s.c=B.m
else b.d.l(0,a,s)
return s},
dT:function dT(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.d=c
_.f=null},
nF:function nF(a){this.a=a},
yn(a){return a},
yB(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=1;r<s;++r){if(b[r]==null||b[r-1]!=null)continue
for(;s>=1;s=q){q=s-1
if(b[q]!=null)break}p=new A.a0("")
o=a+"("
p.a=o
n=A.a5(b)
m=n.h("da<1>")
l=new A.da(b,0,s,m)
l.kX(b,0,s,n.c)
m=o+new A.a8(l,new A.un(),m.h("a8<X.E,j>")).bp(0,", ")
p.a=m
p.a=m+("): part "+(r-1)+" was null, but part "+r+" was not.")
throw A.a(A.I(p.j(0),null))}},
m_:function m_(a){this.a=a},
m0:function m0(){},
m1:function m1(){},
un:function un(){},
nv:function nv(){},
iV(a,b){var s,r,q,p,o,n=b.ks(a)
b.bJ(a)
if(n!=null)a=B.a.a0(a,n.length)
s=t.s
r=A.u([],s)
q=A.u([],s)
s=a.length
if(s!==0&&b.bo(a.charCodeAt(0))){q.push(a[0])
p=1}else{q.push("")
p=0}for(o=p;o<s;++o)if(b.bo(a.charCodeAt(o))){r.push(B.a.t(a,p,o))
q.push(a[o])
p=o+1}if(p<s){r.push(B.a.a0(a,p))
q.push("")}return new A.nS(b,n,r,q)},
nS:function nS(a,b,c,d){var _=this
_.a=a
_.b=b
_.d=c
_.e=d},
wY(a){return new A.iW(a)},
iW:function iW(a){this.a=a},
Bg(){var s,r,q,p,o,n,m,l,k=null
if(A.vz().gaD()!=="file")return $.hM()
if(!B.a.bG(A.vz().gaR(),"/"))return $.hM()
s=A.y0(k,0,0)
r=A.xY(k,0,0,!1)
q=A.y_(k,0,0,k)
p=A.xX(k,0,0)
o=A.tz(k,"")
if(r==null)if(s.length===0)n=o!=null
else n=!0
else n=!1
if(n)r=""
n=r==null
m=!n
l=A.xZ("a/b",0,3,k,"",m)
if(n&&!B.a.K(l,"/"))l=A.vR(l,m)
else l=A.du(l)
if(A.hD("",s,n&&B.a.K(l,"//")?"":r,o,l,q,p).hf()==="a\\b")return $.kV()
return $.z9()},
p2:function p2(){},
nT:function nT(a,b,c){this.d=a
this.e=b
this.f=c},
pE:function pE(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
q7:function q7(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.r=d},
zR(){var s=$.m,r=t.D,q=t.h,p=new A.aa(new A.l(s,r),q),o=A.bs(t.A)
o.q(0,p)
return new A.hP(p,o,new A.aa(new A.l(s,r),q))},
hP:function hP(a,b,c){this.a=a
this.b=b
this.c=c},
l1:function l1(a,b,c){this.a=a
this.b=b
this.c=c},
l2:function l2(a,b){this.a=a
this.b=b},
cq:function cq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Bp(a){switch(a){case"PUT":return B.bX
case"PATCH":return B.bW
case"DELETE":return B.bV
default:return null}},
f5:function f5(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
fS:function fS(a,b,c){this.c=a
this.a=b
this.b=c},
EE(a){var s=a.$ti.h("aL<C.T,bf>"),r=s.h("ce<C.T>")
return new A.cR(new A.ce(new A.uV(),new A.aL(new A.uW(),a,s),r),r.h("cR<C.T,J>"))},
uW:function uW(){},
uV:function uV(){},
vb(a){return new A.f4(a)},
p4(a){return A.Bi(a)},
Bi(a){var s=0,r=A.i(t.jM),q,p=2,o=[],n,m,l,k
var $async$p4=A.d(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.b(B.l.nb(a.w),$async$p4)
case 7:n=c
m=A.xf(a,n)
q=m
s=1
break
p=2
s=6
break
case 4:p=3
k=o.pop()
if(t.L.b(A.F(k))){q=A.xg(a)
s=1
break}else throw k
s=6
break
case 3:s=2
break
case 6:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$p4,r)},
xh(a){var s,r,q
try{s=A.w8(A.vW(a.e)).aI(a.w)
r=A.xf(a,s)
return r}catch(q){if(t.L.b(A.F(q)))return A.xg(a)
else throw q}},
xf(a,b){var s,r,q=J.eU(B.h.c5(b,null),"error")
A:{if(t.f.b(q)){s=A.Bh(q)
break A}s=null
break A}r=s==null?b:s
s=a.c
if(s==null)s="Request failed"
return new A.db(a.b,s+": "+r)},
xg(a){var s=a.c
if(s==null)s="Request failed"
return new A.db(a.b,s)},
Bh(a){var s,r=a.i(0,"code"),q=a.i(0,"description"),p=a.i(0,"name"),o=a.i(0,"details")
if(typeof r!="string"||typeof q!="string")return null
s=(typeof p=="string"?r+("("+p+")"):r)+": "+q
if(typeof o=="string")s=s+", "+o
return s.charCodeAt(0)==0?s:s},
f4:function f4(a){this.a=a},
dY:function dY(a){this.a=a},
db:function db(a,b){this.a=a
this.b=b},
Dg(){var s=A.wU("PowerSync",null,A.T(t.N,t.W))
if(s.b!=null)A.r(A.P('Please set "hierarchicalLoggingEnabled" to true if you want to change the level on a non-root logger.'))
J.z(s.c,B.p)
s.c=B.p
s.f9().O(new A.u4())
return s},
u4:function u4(){},
cY:function cY(a){this.a=a},
vZ(a){var s,r,q,p=A.bs(t.N)
for(s=a.gA(a);s.m();){r=s.gp()
q=A.Eg(r)
if(q!=null)p.q(0,q)
else if(!B.a.K(r,"ps_"))p.q(0,r)}return p},
bf:function bf(a){this.a=a},
i4(a,b){var s=0,r=A.i(t.G),q
var $async$i4=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:s=3
return A.b(a.aC(b,B.n),$async$i4)
case 3:q=d
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$i4,r)},
lq(a){var s=0,r=A.i(t.N),q,p
var $async$lq=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=3
return A.b(A.i4(a,"SELECT powersync_client_id() as client_id"),$async$lq)
case 3:p=c
q=A.al(p.gah(p).i(0,"client_id"))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$lq,r)},
v9(a,b,c,d){return a.mR(new A.lv(b,d),c,d)},
eX(a,b){var s=0,r=A.i(t.y),q,p,o,n,m
var $async$eX=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:s=3
return A.b(a.oM(new A.lt(),t.I),$async$eX)
case 3:p=d
if(p==null){q=!1
s=1
break}o=a
n=A
m=p
s=5
return A.b(b.$0(),$async$eX)
case 5:s=4
return A.b(o.b0(new n.lu(m,d),t.y),$async$eX)
case 4:q=d
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$eX,r)},
ls(a){var s=0,r=A.i(t.d_),q,p,o,n,m,l,k,j,i,h,g
var $async$ls=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=3
return A.b(a.dG("SELECT * FROM ps_crud ORDER BY id ASC LIMIT 1"),$async$ls)
case 3:g=c
if(g==null)p=null
else{o=B.h.c5(A.al(g.i(0,"data")),null)
p=A.R(g.i(0,"id"))
n=J.ab(o)
m=A.Bp(A.al(n.i(o,"op")))
m.toString
l=A.al(n.i(o,"type"))
k=A.al(n.i(o,"id"))
j=A.R(g.i(0,"tx_id"))
i=t.h9
h=i.a(n.i(o,"data"))
i=i.a(n.i(o,"old"))
i=new A.f5(p,j,m,l,k,A.kI(n.i(o,"metadata")),h,i)
p=i}q=p
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$ls,r)},
lr(a){var s=0,r=A.i(t.y),q,p
var $async$lr=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=3
return A.b(A.i4(a,"SELECT 1 FROM ps_crud LIMIT 1"),$async$lr)
case 3:p=c
q=!p.gF(p)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$lr,r)},
lo(a,b,c){var s=0,r=A.i(t.N),q
var $async$lo=A.d(function(d,e){if(d===1)return A.e(e,r)
for(;;)switch(s){case 0:s=3
return A.b(a.b0(new A.lp(b,c),t.N),$async$lo)
case 3:q=e
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$lo,r)},
iY(a,b,c){var s=0,r=A.i(t.T),q,p
var $async$iY=A.d(function(d,e){if(d===1)return A.e(e,r)
for(;;)switch(s){case 0:p=A
s=3
return A.b(a.bx("SELECT CAST(powersync_control(?, ?) AS TEXT)",[b,c]),$async$iY)
case 3:q=p.kI(e.b[0])
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$iY,r)},
d3(a,b,c){var s=0,r=A.i(t.T),q
var $async$d3=A.d(function(d,e){if(d===1)return A.e(e,r)
for(;;)switch(s){case 0:s=3
return A.b(A.iY(a,b+"_checkpoint_request_id",c),$async$d3)
case 3:q=e
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$d3,r)},
nV(a){var s=0,r=A.i(t.N),q,p
var $async$nV=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=3
return A.b(A.d3(a,"next",null),$async$nV)
case 3:p=c
p.toString
q=p
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$nV,r)},
lv:function lv(a,b){this.a=a
this.b=b},
lt:function lt(){},
lu:function lu(a,b){this.a=a
this.b=b},
lp:function lp(a,b){this.a=a
this.b=b},
dF:function dF(a){this.a=a},
lH:function lH(a,b,c){this.a=a
this.b=b
this.c=c},
lI:function lI(a,b){this.a=a
this.b=b},
ca:function ca(){},
hl:function hl(){},
eh:function eh(a){this.a=a},
h7:function h7(){},
Au(a){return A.At(a)},
At(a){var s,r,q,p,o,n,m,l,k,j="UpdateSyncStatus",i="EstablishSyncStream",h="FetchCredentials",g="CloseSyncStream",f="DidCompleteSync",e="CheckpointDelayedDueToLocalData",d="HandleDiagnostics"
A:{s=a.i(0,"LogLine")
if(s==null)r=a.E("LogLine")
else r=!0
if(r){t.f.a(s)
r=new A.fq(A.al(s.i(0,"severity")),A.al(s.i(0,"line")))
break A}q=a.i(0,j)
if(q==null)r=a.E(j)
else r=!0
if(r){r=t.f
r=new A.fR(A.A9(r.a(r.a(q).i(0,"status"))))
break A}p=a.i(0,i)
if(p==null)r=a.E(i)
else r=!0
if(r){r=A.Ai(t.f.a(p))
break A}o=a.i(0,h)
if(o==null)r=a.E(h)
else r=!0
if(r){r=new A.fc(A.aW(t.f.a(o).i(0,"did_expire")))
break A}n=a.i(0,g)
if(n==null)r=a.E(g)
else r=!0
if(r){t.f.a(n)
r=new A.dG(A.aW(n.i(0,"hide_disconnect")))
break A}m=a.i(0,f)
if(m==null)r=a.E(f)
else r=!0
if(r){r=B.aQ
break A}l=a.i(0,e)
if(l==null)r=a.E(e)
else r=!0
if(r){r=B.aP
break A}k=a.i(0,d)
if(k==null)r=a.E(d)
else r=!0
if(r){r=new A.fg(t.f.a(k))
break A}r=new A.fP(a)
break A}return r},
Ai(a){var s=t.f,r=s.a(a.i(0,"request")),q=a.i(0,"checkpoint_request")
A:{if(q==null){s=null
break A}s.a(q)
s=new A.lG(A.al(q.i(0,"client_id")),A.al(q.i(0,"checkpoint_request_id")))
break A}return new A.dL(r,s)},
A9(a){var s,r,q,p,o,n=A.aW(a.i(0,"connected"))
A.aW(a.i(0,"connecting"))
s=A.u([],t.cH)
for(r=J.Z(t.j.a(a.i(0,"priority_status"))),q=t.f;r.m();)s.push(A.Aa(q.a(r.gp())))
p=a.i(0,"downloading")
A:{if(p==null)break A
A.Ad(q.a(p))
break A}s=J.dC(t.ia.a(a.i(0,"streams")),new A.m4(),t.em)
A.ap(s,s.$ti.h("X.E"))
o=A.kI(a.i(0,"internal_last_applied_checkpoint_request_id"))
B:{if(o==null){s=null
break B}s=new A.cY(v.G.BigInt(o))
break B}return new A.m3(a,n,s)},
Aa(a){var s,r=A.R(a.i(0,"priority")),q=A.vT(a.i(0,"has_synced")),p=a.i(0,"last_synced_at")
A:{if(p==null){s=null
break A}s=A.mE(A.R(p))
break A}return new A.kg(q,s,r)},
Ad(a){return new A.mF(t.f.a(a.i(0,"buckets")).cC(0,new A.mG(),t.N,t.cV))},
fq:function fq(a,b){this.a=a
this.b=b},
dL:function dL(a,b){this.a=a
this.b=b},
lG:function lG(a,b){this.a=a
this.b=b},
fR:function fR(a){this.a=a},
m3:function m3(a,b,c){this.a=a
this.b=b
this.r=c},
m4:function m4(){},
mF:function mF(a){this.a=a},
mG:function mG(){},
fc:function fc(a){this.a=a},
dG:function dG(a){this.a=a},
f8:function f8(){},
f_:function f_(){},
fg:function fg(a){this.a=a},
fP:function fP(a){this.a=a},
nu:function nu(a,b){this.a=a
this.b=b},
B1(a){var s=a.a
return s==null?B.L:s},
B2(a){var s=a.b
return s==null?B.K:s},
fL:function fL(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
lF:function lF(){},
fo:function fo(){},
d6:function d6(a){this.a=a},
p3:function p3(a,b){this.a=a
this.b=b},
xi(a,b){if(B.w.D(0,b))return null
else return b==null?a:b},
aK:function aK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pb:function pb(){},
A8(a){var s,r,q,p,o,n,m,l,k,j,i=A.al(a.i(0,"name")),h=t.h9.a(a.i(0,"parameters")),g=A.vU(a.i(0,"priority"))
A:{if(g!=null){s=g
break A}s=2147483647
break A}r=t.f.a(a.i(0,"progress"))
q=A.R(r.i(0,"total"))
r=A.R(r.i(0,"downloaded"))
p=A.aW(a.i(0,"active"))
o=A.aW(a.i(0,"is_default"))
n=A.aW(a.i(0,"has_explicit_subscription"))
m=a.i(0,"expires_at")
B:{if(m==null){l=null
break B}l=A.mE(A.R(m))
break B}k=a.i(0,"last_synced_at")
C:{if(k==null){j=null
break C}j=A.mE(A.R(k))
break C}return new A.dJ(i,h,s,new A.kb(r,q),p,o,n,l,j)},
dJ:function dJ(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
yQ(a,b){var s=null,r={},q=A.bI(s,s,s,s,!0,b)
r.a=null
r.b=!1
q.d=new A.uP(r,a,q,b)
q.r=new A.uQ(r)
q.e=new A.uR(r)
q.f=new A.uS(r)
return new A.a4(q,A.p(q).h("a4<1>"))},
ED(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a6)(a),++r)a[r].ai()},
EH(a){var s,r
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.a6)(a),++r)a[r].am()},
kO(a){var s=0,r=A.i(t.H)
var $async$kO=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=2
return A.b(A.mX(new A.a8(a,new A.uq(),A.a5(a).h("a8<1,o<~>>")),t.H),$async$kO)
case 2:return A.f(null,r)}})
return A.h($async$kO,r)},
EK(a,b){var s=null,r={},q=A.bI(s,s,s,s,!0,b)
r.a=!1
q.r=new A.v3(r,a.bb(new A.v4(q,b),new A.v5(r,q),t.P))
return new A.a4(q,A.p(q).h("a4<1>"))},
Bu(a,b,c,d,e,f){var s=new A.l($.m,t.D),r=new A.aa(s,t.h),q=a.O(null),p=new A.pF(e,r,q,f)
q.bt(p)
p.$1(c)
b.J(new A.pG(r,d,q))
return s},
BO(a){return new A.eg(a,new DataView(new ArrayBuffer(4)))},
uP:function uP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
uO:function uO(a,b,c){this.a=a
this.b=b
this.c=c},
uM:function uM(a,b){this.a=a
this.b=b},
uN:function uN(a,b){this.a=a
this.b=b},
uQ:function uQ(a){this.a=a},
uR:function uR(a){this.a=a},
uS:function uS(a){this.a=a},
uq:function uq(){},
v4:function v4(a,b){this.a=a
this.b=b},
v5:function v5(a,b){this.a=a
this.b=b},
v3:function v3(a,b){this.a=a
this.b=b},
pF:function pF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pG:function pG(a,b,c){this.a=a
this.b=b
this.c=c},
eg:function eg(a,b){var _=this
_.a=a
_.b=b
_.c=4
_.d=null},
vX(a){var s,r={},q=new A.l($.m,t.D)
r.a=null
s=new A.u_(r,new A.N(q,t.F))
r.a=A.pp(a,s)
return new A.Q(q,s)},
DE(a){var s="Sync service error"
if(a instanceof A.bR)return s
else if(a instanceof A.db)if(a.a===401)return"Authorization error"
else return s
else if(a instanceof A.a3||t.lW.b(a))return"Configuration error"
else if(a instanceof A.f4)return"Credentials error"
else if(a instanceof A.dY)return"Protocol error"
else return J.wp(a).j(0)+": "+A.q(a)},
B_(a){return new A.cr(a)},
eI(a,b){if((a.a.a.a&30)===0)return!1
return b instanceof A.bR||b instanceof A.bC},
oN:function oN(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=null
_.Q=k
_.as=l
_.at=null
_.ax=m
_.ay=n
_.ch=o
_.CW=p
_.cx=null},
p0:function p0(a,b){this.a=a
this.b=b},
oQ:function oQ(a,b,c){this.a=a
this.b=b
this.c=c},
oR:function oR(a){this.a=a},
oO:function oO(a,b,c){this.a=a
this.b=b
this.c=c},
p_:function p_(a,b,c){this.a=a
this.b=b
this.c=c},
oZ:function oZ(a,b){this.a=a
this.b=b},
oY:function oY(){},
oS:function oS(a){this.a=a},
oT:function oT(a,b,c){this.a=a
this.b=b
this.c=c},
oU:function oU(a){this.a=a},
oX:function oX(a,b,c){this.a=a
this.b=b
this.c=c},
oV:function oV(a,b){this.a=a
this.b=b},
oW:function oW(){},
oP:function oP(a,b){this.a=a
this.b=b},
u_:function u_(a,b){this.a=a
this.b=b},
qj:function qj(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
qk:function qk(){},
qq:function qq(a){this.a=a},
qp:function qp(a){this.a=a},
qo:function qo(){},
ql:function ql(a,b){this.a=a
this.b=b},
qm:function qm(a){this.a=a},
qn:function qn(a){this.a=a},
dI:function dI(a,b){this.a=a
this.b=b},
cr:function cr(a){this.a=a},
fT:function fT(){},
fO:function fO(){},
ff:function ff(a){this.a=a},
f0:function f0(a,b){this.a=a
this.b=b},
Cf(a,b){var s=null,r=new A.ki(a,b,A.bI(s,s,s,s,!0,t.p))
r.l4(a,b)
return r},
e0:function e0(a){this.a=a
this.b=0},
og:function og(a,b){this.a=a
this.b=b},
ki:function ki(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
t3:function t3(a){this.a=a},
F8(a){var s
if(t.p.b(a)){s=B.f.gar(a)
if(a.byteOffset===0&&J.zL(s)===a.length)return t.a.a(s)}return t.a.a(B.f.gar(new Uint8Array(A.vY(a))))},
vr:function vr(a){this.a=a},
vK:function vK(a){this.a=!1
this.b=a
this.c=null},
A5(a,b){var s=new A.ch(b)
s.kT(a,b)
return s},
Bj(a){var s=null,r=new A.fH(B.aH,A.T(t.ir,t.mQ),t.a9),q=t.pp
r.a=A.bI(r.gmA(),r.gm2(),r.gmB(),r.gmD(),!0,q)
q=new A.e7(a,new A.fL(s,s,s,s,B.ap,s,s,s,!0),r,A.bI(s,s,s,s,!1,q),{},A.T(t.hM,t.eL),A.u([],t.bN))
q.kY(a)
return q},
pc:function pc(a){this.a=a},
pd:function pd(a){this.a=a},
ch:function ch(a){var _=this
_.a=$
_.b=a
_.f=_.e=_.d=_.c=null},
lX:function lX(a){this.a=a},
lW:function lW(a){this.a=a},
lY:function lY(a){this.a=a},
e7:function e7(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c="{}"
_.d=c
_.e=d
_.f=null
_.r=e
_.w=null
_.x=f
_.y=g},
pa:function pa(a){this.a=a},
p5:function p5(a,b,c){this.a=a
this.b=b
this.c=c},
p6:function p6(a,b,c){this.a=a
this.b=b
this.c=c},
p7:function p7(a){this.a=a},
p8:function p8(a){this.a=a},
p9:function p9(a){this.a=a},
fY:function fY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hr:function hr(a){this.a=a},
h6:function h6(a){this.a=a},
h3:function h3(a,b){this.a=a
this.b=b},
xo(a){var s=a.content
s=B.c.b9(s,new A.pB(),t.E)
s=A.ap(s,s.$ti.h("X.E"))
return s},
xa(a){var s,r,q=a.endpoint,p=a.token,o=a.userId
if(o==null)o=null
if(a.expiresAt==null)s=null
else{s=a.expiresAt
s.toString
s=A.mE(A.R(s))}r=A.df(q)
if(!r.ej("http")&&!r.ej("https")||r.gbI().length===0)A.r(A.aX(q,"PowerSync endpoint must be a valid URL",null))
return new A.cq(q,p,o,s)},
xb(a){var s,r
A:{if(a==null){s=null
break A}if(B.w.D(0,a)){s=-1
break A}r=J.be(a)
s=r
break A}return s},
Bw(a,b){var s=null,r=t.S,q=$.m,p=A.bI(s,s,s,s,!1,t.l4),o=$.wl()
r=new A.jB(A.T(r,t.kn),A.T(r,t.A),new A.aa(new A.l(q,t.D),t.h),a,b,p,o,s)
r.l_(s,s,s,a,b)
return r},
af:function af(a,b){this.a=a
this.b=b},
pB:function pB(){},
jB:function jB(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=0
_.f=_.e=!1
_.w=_.r=null
_.y=d
_.z=e
_.Q=f
_.as=g
_.at=h},
qd:function qd(a){this.a=a},
q8:function q8(){},
q9:function q9(a,b){this.a=a
this.b=b},
qa:function qa(a,b){this.a=a
this.b=b},
qb:function qb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qc:function qc(a,b){this.a=a
this.b=b},
o6:function o6(a){this.a=a},
j3:function j3(a){this.a=a},
i7:function i7(){},
Ey(){var s=null,r=v.G,q=r.location.href,p=t.m,o=A.bI(s,s,s,s,!0,p),n=t.cj
new A.qe(new A.ri(new A.nW(new A.rf(q)),new A.a4(o,A.p(o).h("a4<1>"))),new A.nU(),A.u([],t.az),A.T(t.S,t.lp),new A.dU(A.nD(n)),new A.dU(A.nD(n))).cv()
if($.zs())A.aD(r,"connect",new A.uI(new A.uK(new A.uJ(new A.pc(A.T(t.N,t.mO)),o))),!1,p)
else A.aD(r,"message",o.gc4(o),!1,p)},
uJ:function uJ(a,b){this.a=a
this.b=b},
uK:function uK(a){this.a=a},
uI:function uI(a){this.a=a},
ri:function ri(a,b){this.a=a
this.b=b},
nU:function nU(){},
nW:function nW(a){this.a=a},
ve(a,b){if(b<0)A.r(A.az("Offset may not be negative, was "+b+"."))
else if(b>a.c.length)A.r(A.az("Offset "+b+u.D+a.gk(0)+"."))
return new A.iq(a,b)},
oq:function oq(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
iq:function iq(a,b){this.a=a
this.b=b},
eq:function eq(a,b,c){this.a=a
this.b=b
this.c=c},
Ao(a,b){var s=A.Ap(A.u([A.BU(a,!0)],t.g7)),r=new A.nk(b).$0(),q=B.b.j(B.c.gaQ(s).b+1),p=A.Aq(s)?0:3,o=A.a5(s)
return new A.n0(s,r,null,1+Math.max(q.length,p),new A.a8(s,new A.n2(),o.h("a8<1,c>")).oN(0,B.aM),!A.Et(new A.a8(s,new A.n3(),o.h("a8<1,k?>"))),new A.a0(""))},
Aq(a){var s,r,q
for(s=0;s<a.length-1;){r=a[s];++s
q=a[s]
if(r.b+1!==q.b&&J.z(r.c,q.c))return!1}return!0},
Ap(a){var s,r,q=A.Ej(a,new A.n5(),t.nf,t.K)
for(s=new A.b3(q,q.r,q.e);s.m();)J.wq(s.d,new A.n6())
s=A.p(q).h("aG<1,2>")
r=s.h("fb<n.E,by>")
s=A.ap(new A.fb(new A.aG(q,s),new A.n7(),r),r.h("n.E"))
return s},
BU(a,b){var s=new A.rG(a).$0()
return new A.aP(s,!0,null)},
BW(a){var s,r,q,p,o,n,m=a.gag()
if(!B.a.V(m,"\r\n"))return a
s=a.gC().ga8()
for(r=m.length-1,q=0;q<r;++q)if(m.charCodeAt(q)===13&&m.charCodeAt(q+1)===10)--s
r=a.gG()
p=a.gM()
o=a.gC().gX()
p=A.ja(s,a.gC().ga7(),o,p)
o=A.hL(m,"\r\n","\n")
n=a.gaH()
return A.or(r,p,o,A.hL(n,"\r\n","\n"))},
BX(a){var s,r,q,p,o,n,m
if(!B.a.bG(a.gaH(),"\n"))return a
if(B.a.bG(a.gag(),"\n\n"))return a
s=B.a.t(a.gaH(),0,a.gaH().length-1)
r=a.gag()
q=a.gG()
p=a.gC()
if(B.a.bG(a.gag(),"\n")){o=A.uw(a.gaH(),a.gag(),a.gG().ga7())
o.toString
o=o+a.gG().ga7()+a.gk(a)===a.gaH().length}else o=!1
if(o){r=B.a.t(a.gag(),0,a.gag().length-1)
if(r.length===0)p=q
else{o=a.gC().ga8()
n=a.gM()
m=a.gC().gX()
p=A.ja(o-1,A.xG(s),m-1,n)
q=a.gG().ga8()===a.gC().ga8()?p:a.gG()}}return A.or(q,p,r,s)},
BV(a){var s,r,q,p,o
if(a.gC().ga7()!==0)return a
if(a.gC().gX()===a.gG().gX())return a
s=B.a.t(a.gag(),0,a.gag().length-1)
r=a.gG()
q=a.gC().ga8()
p=a.gM()
o=a.gC().gX()
p=A.ja(q-1,s.length-B.a.cB(s,"\n")-1,o-1,p)
return A.or(r,p,s,B.a.bG(a.gaH(),"\n")?B.a.t(a.gaH(),0,a.gaH().length-1):a.gaH())},
xG(a){var s=a.length
if(s===0)return 0
else if(a.charCodeAt(s-1)===10)return s===1?0:s-B.a.ek(a,"\n",s-2)-1
else return s-B.a.cB(a,"\n")-1},
n0:function n0(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nk:function nk(a){this.a=a},
n2:function n2(){},
n1:function n1(){},
n3:function n3(){},
n5:function n5(){},
n6:function n6(){},
n7:function n7(){},
n4:function n4(a){this.a=a},
nl:function nl(){},
n8:function n8(a){this.a=a},
nf:function nf(a,b,c){this.a=a
this.b=b
this.c=c},
ng:function ng(a,b){this.a=a
this.b=b},
nh:function nh(a){this.a=a},
ni:function ni(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
nd:function nd(a,b){this.a=a
this.b=b},
ne:function ne(a,b){this.a=a
this.b=b},
n9:function n9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
na:function na(a,b,c){this.a=a
this.b=b
this.c=c},
nb:function nb(a,b,c){this.a=a
this.b=b
this.c=c},
nc:function nc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
nj:function nj(a,b,c){this.a=a
this.b=b
this.c=c},
aP:function aP(a,b,c){this.a=a
this.b=b
this.c=c},
rG:function rG(a){this.a=a},
by:function by(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ja(a,b,c,d){if(a<0)A.r(A.az("Offset may not be negative, was "+a+"."))
else if(c<0)A.r(A.az("Line may not be negative, was "+c+"."))
else if(b<0)A.r(A.az("Column may not be negative, was "+b+"."))
return new A.bv(d,a,c,b)},
bv:function bv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jb:function jb(){},
jd:function jd(){},
Bc(a,b,c){return new A.e3(c,a,b)},
je:function je(){},
e3:function e3(a,b,c){this.c=a
this.a=b
this.b=c},
e4:function e4(){},
or(a,b,c,d){var s=new A.c2(d,a,b,c)
s.kW(a,b,c)
if(!B.a.V(d,c))A.r(A.I('The context line "'+d+'" must contain "'+c+'".',null))
if(A.uw(d,c,a.ga7())==null)A.r(A.I('The span text "'+c+'" must start at column '+(a.ga7()+1)+' in a line within "'+d+'".',null))
return s},
c2:function c2(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
Bd(a){var s
A:{if(18===a){s=B.ak
break A}if(23===a){s=B.al
break A}if(9===a){s=B.am
break A}s=null
break A}return s},
e5:function e5(a,b){this.a=a
this.b=b},
b8:function b8(a,b,c){this.a=a
this.b=b
this.c=c},
ji(a,b,c,d,e,f,g){return new A.d9(d,b,c,e,f,a,g)},
d9:function d9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ow:function ow(){},
mn:function mn(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=null
_.r=!1},
mw:function mw(a){this.a=a},
mv:function mv(a){this.a=a},
mx:function mx(a){this.a=a},
mt:function mt(a){this.a=a},
ms:function ms(a){this.a=a},
mu:function mu(a){this.a=a},
mp:function mp(a){this.a=a},
mo:function mo(a){this.a=a},
mq:function mq(a){this.a=a},
mr:function mr(a,b){this.a=a
this.b=b},
cB:function cB(a,b,c,d,e){var _=this
_.a=a
_.b=!1
_.c=b
_.d=null
_.e=c
_.f=d
_.w=_.r=null
_.$ti=e},
ti:function ti(a,b){this.a=a
this.b=b},
tj:function tj(a,b,c){this.a=a
this.b=b
this.c=c},
tk:function tk(a,b,c){this.a=a
this.b=b
this.c=c},
os:function os(){},
e6:function e6(a,b,c){var _=this
_.a=a
_.b=b
_.d=c
_.e=null
_.f=!0
_.r=!1},
vh(a,b){var s=$.kU()
return new A.is(A.T(t.N,t.a_),s,a)},
is:function is(a,b,c){this.d=a
this.b=b
this.a=c},
jZ:function jZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
EC(a){var s=J.zP(new v.G.URL(a,"file:///").pathname,"/")
return new A.c7(s,new A.uU(),A.a5(s).h("c7<1>"))},
uU:function uU(){},
m5:function m5(){},
bG:function bG(a,b,c){this.d=a
this.a=b
this.c=c},
aU:function aU(a,b){this.a=a
this.b=b},
kj:function kj(a){this.a=a
this.b=-1},
kk:function kk(){},
kl:function kl(){},
kn:function kn(){},
ko:function ko(){},
nR:function nR(a,b){this.a=a
this.b=b},
AZ(a){var s=a.f=!1,r=a.a
r=r.c.d.sqlite3_step(r.b)
A:{if(100===r){s=!0
break A}if(101===r||0===r)break A
s=a.bw(r,"step")}return s},
cT:function cT(){},
np:function np(){},
f6:function f6(a){this.a=a},
ea(a){return new A.c6(a)},
wt(a,b){var s,r,q,p
if(b==null)b=$.kU()
for(s=a.length,r=a.$flags|0,q=0;q<s;++q){p=b.eo(256)
r&2&&A.B(a)
a[q]=p}},
c6:function c6(a){this.a=a},
fE:function fE(a){this.a=a},
aC:function aC(){},
i1:function i1(){},
i0:function i0(){},
EI(a,b){var s=null,r=new A.d0(t.kk)
return A.EJ(a,new A.fX(s,s,s,s,s,s,s,s,new A.v0(new A.v_(r,A.u2(new A.v1(r)))),s,s,s,s),b)},
dh:function dh(a){var _=this
_.d=a
_.c=_.b=_.a=null},
v1:function v1(a){this.a=a},
v_:function v_(a,b){this.a=a
this.b=b},
v0:function v0(a){this.a=a},
pR:function pR(a){this.a=a},
pM:function pM(a,b,c){this.a=a
this.b=b
this.c=c},
pT:function pT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pS:function pS(a,b,c){this.b=a
this.c=b
this.d=c},
dg:function dg(){},
cw:function cw(){},
ec:function ec(a,b,c){this.a=a
this.b=b
this.c=c},
bc(a){var s,r,q
try{a.$0()
return 0}catch(r){q=A.F(r)
if(q instanceof A.c6){s=q
return s.a}else return 1}},
ic:function ic(a){this.b=this.a=$
this.d=a},
ma:function ma(a,b,c){this.a=a
this.b=b
this.c=c},
m7:function m7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mc:function mc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
me:function me(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
mg:function mg(a,b){this.a=a
this.b=b},
m9:function m9(a){this.a=a},
mf:function mf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mk:function mk(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
mi:function mi(a,b){this.a=a
this.b=b},
mh:function mh(a,b){this.a=a
this.b=b},
mb:function mb(a,b,c){this.a=a
this.b=b
this.c=c},
md:function md(a,b){this.a=a
this.b=b},
mj:function mj(a,b){this.a=a
this.b=b},
m8:function m8(a,b,c){this.a=a
this.b=b
this.c=c},
eV:function eV(a,b){this.a=a
this.$ti=b},
l4:function l4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l6:function l6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l5:function l5(a,b,c){this.a=a
this.b=b
this.c=c},
bD(a,b){var s=new A.l($.m,b.h("l<0>")),r=new A.N(s,b.h("N<0>")),q=t.m
A.aD(a,"success",new A.lO(r,a,b),!1,q)
A.aD(a,"error",new A.lP(r,a),!1,q)
return s},
A4(a,b){var s=new A.l($.m,b.h("l<0>")),r=new A.N(s,b.h("N<0>")),q=t.m
A.aD(a,"success",new A.lT(r,a,b),!1,q)
A.aD(a,"error",new A.lU(r,a),!1,q)
A.aD(a,"blocked",new A.lV(r),!1,q)
return s},
dl:function dl(a,b){var _=this
_.c=_.b=_.a=null
_.d=a
_.$ti=b},
r7:function r7(a,b){this.a=a
this.b=b},
r8:function r8(a,b){this.a=a
this.b=b},
lO:function lO(a,b,c){this.a=a
this.b=b
this.c=c},
lP:function lP(a,b){this.a=a
this.b=b},
lT:function lT(a,b,c){this.a=a
this.b=b
this.c=c},
lU:function lU(a,b){this.a=a
this.b=b},
lV:function lV(a){this.a=a},
v2(){var s=v.G.navigator
if("storage" in s)return s.storage
return null},
wH(a,b,c){var s=a.read(b,c)
return s},
wI(a,b,c){var s=a.write(b,c)
return s},
Ak(a){var s=t.om
if(!(v.G.Symbol.asyncIterator in a))A.r(A.I("Target object does not implement the async iterable interface",null))
return new A.aL(new A.mM(),new A.eV(a,s),s.h("aL<C.T,v>"))},
mM:function mM(){},
pN:function pN(a){this.a=a},
pO:function pO(a){this.a=a},
pQ(a,b){var s=0,r=A.i(t.w),q,p,o
var $async$pQ=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:p=v.G
o=A
s=3
return A.b(A.ar(p.fetch(new p.URL(a,A.S(p.location).href),null),t.m),$async$pQ)
case 3:q=o.pP(d,null)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$pQ,r)},
pP(a,b){var s=0,r=A.i(t.w),q,p,o,n,m
var $async$pP=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:p=new A.ic(A.T(t.S,t.ie))
o=A
n=A
m=A
s=3
return A.b(new A.pN(p).em(a),$async$pP)
case 3:q=new o.eb(new n.pR(m.Bv(d,p)))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$pP,r)},
eb:function eb(a){this.a=a},
BY(a){var s=new A.hc(a,new A.N(new A.l($.m,t.D),t.F),a.objectStore("files"),a.objectStore("blocks"))
s.l2(a)
return s},
iu(a,b,c){var s=0,r=A.i(t.cF),q,p,o,n,m,l
var $async$iu=A.d(function(d,e){if(d===1)return A.e(e,r)
for(;;)switch(s){case 0:p=t.N
o=new A.lb(a)
n=A.vh("dart-memory",null)
m=$.kU()
l=new A.ck(o,n,new A.d0(t.p3),A.bs(p),A.T(p,t.S),m,b)
l.r=!1
s=3
return A.b(o.ep(),$async$iu)
case 3:s=4
return A.b(l.cZ(),$async$iu)
case 4:q=l
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$iu,r)},
lb:function lb(a){this.a=null
this.b=a},
le:function le(a){this.a=a},
ld:function ld(a,b,c){this.a=a
this.b=b
this.c=c},
lc:function lc(a){this.a=a},
hc:function hc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=!1
_.d=c
_.e=d},
rJ:function rJ(a){this.a=a},
rK:function rK(a){this.a=a},
rI:function rI(a){this.a=a},
rL:function rL(a,b,c){this.a=a
this.b=b
this.c=c},
rN:function rN(a,b){this.a=a
this.b=b},
rM:function rM(a,b){this.a=a
this.b=b},
rm:function rm(a,b,c){this.a=a
this.b=b
this.c=c},
rn:function rn(a,b){this.a=a
this.b=b},
k6:function k6(a,b){this.a=a
this.b=b},
ck:function ck(a,b,c,d,e,f,g){var _=this
_.d=a
_.f=_.e=!1
_.r=!0
_.w=b
_.x=c
_.y=d
_.z=e
_.b=f
_.a=g},
nn:function nn(a,b,c){this.a=a
this.b=b
this.c=c},
no:function no(){},
nm:function nm(a,b){this.a=a
this.b=b},
k_:function k_(a,b,c){this.a=a
this.b=b
this.c=c},
rH:function rH(a,b){this.a=a
this.b=b},
aE:function aE(){},
ha:function ha(a,b){var _=this
_.w=a
_.d=b
_.c=_.b=_.a=null},
h5:function h5(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
el:function el(a,b,c){var _=this
_.w=a
_.x=b
_.d=c
_.c=_.b=_.a=null},
eF:function eF(a,b,c,d,e){var _=this
_.w=a
_.x=b
_.y=c
_.z=d
_.d=e
_.c=_.b=_.a=null},
xc(a){var s=A.vh("dart-memory",null),r=$.kU()
return new A.e2(s,r,a)},
j6(a,b){var s=0,r=A.i(t.mt),q,p,o,n,m,l,k,j
var $async$j6=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:j=A.v2()
if(j==null)throw A.a(A.ea(1))
p=t.m
s=3
return A.b(A.ar(j.getDirectory(),p),$async$j6)
case 3:o=d
n=A.EC(a),m=J.Z(n.a),n=new A.ee(m,n.b),l=null
case 4:if(!n.m()){s=6
break}s=7
return A.b(A.ar(o.getDirectoryHandle(m.gp(),{create:!0}),p),$async$j6)
case 7:k=d
case 5:l=o,o=k
s=4
break
case 6:q=new A.Q(l,o)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$j6,r)},
j7(a){var s=0,r=A.i(t.m),q
var $async$j7=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=3
return A.b(A.j6(a,!0),$async$j7)
case 3:q=c.b
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$j7,r)},
oo(a,b){var s=0,r=A.i(t.g_),q,p
var $async$oo=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:if(A.v2()==null)throw A.a(A.ea(1))
p=A
s=3
return A.b(A.j7(a),$async$oo)
case 3:q=p.on(d,!1,b)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$oo,r)},
on(a,b,c){var s=0,r=A.i(t.g_),q,p
var $async$on=A.d(function(d,e){if(d===1)return A.e(e,r)
for(;;)switch(s){case 0:p=A.xc(c)
s=3
return A.b(p.bM(a,!1),$async$on)
case 3:q=p
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$on,r)},
dM:function dM(a,b,c){this.c=a
this.a=b
this.b=c},
e2:function e2(a,b,c){var _=this
_.d=null
_.e=a
_.b=b
_.a=c},
op:function op(a,b){this.a=a
this.b=b},
kp:function kp(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
t0:function t0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Bv(a,b){var s=A.S(a.exports.memory)
b.b!==$&&A.z_()
b.b=s
s=new A.pH(s,b,a.exports)
s.kZ(a,b)
return s},
qi(a,b){var s,r=A.b6(a.buffer,b,null)
for(s=0;r[s]!==0;)++s
return s},
ef(a,b){var s=a.buffer,r=A.qi(a,b)
return B.l.aI(A.b6(s,b,r))},
vB(a,b,c){var s
if(b===0)return null
s=a.buffer
return B.l.aI(A.b6(s,b,c==null?A.qi(a,b):c))},
pH:function pH(a,b,c){var _=this
_.b=a
_.c=b
_.d=c
_.w=_.r=null},
pI:function pI(a){this.a=a},
pJ:function pJ(a){this.a=a},
pK:function pK(a){this.a=a},
pL:function pL(a){this.a=a},
ut(){var s=0,r=A.i(t.ja),q,p,o,n,m,l
var $async$ut=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:m=new v.G.MessageChannel()
l=$.hN()
s=l!=null?3:5
break
case 3:p=A.Dn()
s=6
return A.b(A.ed(l,p,null,null,!1),$async$ut)
case 6:o=b
s=4
break
case 5:o=null
p=null
case 4:n=m.port2
q=new A.Q({port:m.port1,lockName:p},new A.dH(n,p,o))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$ut,r)},
Dn(){var s,r
for(s=0,r="channel-close-";s<16;++s)r+=A.aR(97+$.zy().eo(26))
return r.charCodeAt(0)==0?r:r},
zW(a){return new A.eZ(a)},
dH:function dH(a,b,c){this.a=a
this.b=b
this.c=c},
nY:function nY(){},
o1:function o1(a){this.a=a},
o2:function o2(a){this.a=a},
o0:function o0(a){this.a=a},
o_:function o_(a){this.a=a},
nZ:function nZ(a){this.a=a},
o3:function o3(a,b,c){this.a=a
this.b=b
this.c=c},
eZ:function eZ(a){this.a=a},
B0(a,b){var s=t.H
s=new A.j2(a,b,new A.aa(new A.l($.m,t.ny),t.mE),A.c3(!1,t.e1),new A.jP(A.c3(!1,s)),new A.jP(A.c3(!1,s)))
s.kU(a,b)
return s},
Bx(a,b){var s=t.m,r=A.c3(!1,s),q=new A.l($.m,t.D),p=t.S
s=new A.jC(r,b,a.a,new A.aa(q,t.h),A.T(p,t.br),A.T(p,s))
s.hz(a)
q.J(r.gaG())
return s},
Ab(a,b,c,d){var s=A.nD(t.cj)
return new A.ml(d,new A.dU(s),A.bs(t.jC))},
jP:function jP(a){this.a=null
this.b=a},
j2:function j2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.e=d
_.f=e
_.r=f},
ob:function ob(a){this.a=a},
oc:function oc(a){this.a=a},
o7:function o7(a){this.a=a},
od:function od(a){this.a=a},
oe:function oe(a){this.a=a},
of:function of(a){this.a=a},
o9:function o9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
o8:function o8(a,b,c){this.a=a
this.b=b
this.c=c},
oa:function oa(a,b,c){this.a=a
this.b=b
this.c=c},
jC:function jC(a,b,c,d,e,f){var _=this
_.w=a
_.x=b
_.a=c
_.b=d
_.d=_.c=null
_.e=0
_.f=e
_.r=f},
ml:function ml(a,b,c){this.d=a
this.e=b
this.z=c},
mm:function mm(){},
ib:function ib(a){this.a=a},
m6:function m6(a,b){this.c=a
this.a=b},
cx:function cx(){},
re:function re(){},
ip(a,b,c){var s=0,r=A.i(t.eZ),q,p,o
var $async$ip=A.d(function(d,e){if(d===1)return A.e(e,r)
for(;;)switch(s){case 0:s=3
return A.b(A.j7(a),$async$ip)
case 3:p=e
o=A.xc(c)
s=b?4:5
break
case 4:s=6
return A.b(o.bM(p,!0),$async$ip)
case 6:case 5:q=new A.io(o,p,b)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$ip,r)},
io:function io(a,b,c){this.a=a
this.b=b
this.c=c},
n_:function n_(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=0},
ed(a,b,c,d,e){var s,r,q={},p=new A.l($.m,t.fV),o=new A.N(p,t.l6)
q.a=null
s={steal:e}
if(c!=null)s.signal=c
r=t.X
A.ir(A.ar(a.request(b,s,A.bB(new A.q_(q,o))),r),new A.q0(q,d,o),r,t.K)
return p},
q_:function q_(a,b){this.a=a
this.b=b},
q0:function q0(a,b,c){this.a=a
this.b=b
this.c=c},
bV:function bV(a){this.a=a},
id:function id(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=_.f=null},
mz:function mz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
my:function my(a,b){this.a=a
this.b=b},
mA:function mA(a){this.a=a},
dU:function dU(a){this.a=!1
this.b=a},
nQ:function nQ(a,b){this.a=a
this.b=b},
nP:function nP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
nO:function nO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
A1(a){var s,r,q,p,o=A.u([],t.kC),n=t.c.a(a.a),m=t.k.b(n)?n:new A.ag(n,A.a5(n).h("ag<1,j>"))
for(s=J.ab(m),r=0;r<s.gk(m)/2;++r){q=r*2
o.push(new A.Q(A.mK(B.by,s.i(m,q)),s.i(m,q+1)))}s=A.aW(a.b)
q=A.aW(a.c)
p=A.aW(a.d)
return new A.cU(o,s,q,A.aW(a.g),p)},
cU:function cU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
B3(a){var s
if(J.z(a.t,"errorResponse")){s=A.Ae(a)
if(s!=null&&s instanceof A.bq)return s
else return new A.d5(a.e,s)}else return new A.d5("Did not respond with expected type, got "+A.q(a),null)},
Ae(a){var s=a.s,r=s==null?null:A.R(s)
A:{if(0===r){s=A.Af(t.c.a(a.r))
break A}if(1===r){s=B.B
break A}s=null
break A}return s},
Af(a){var s,r,q,p,o=null,n=a.length>=8,m=o,l=o,k=o,j=o,i=o,h=o,g=o
if(n){s=a[0]
m=a[1]
l=a[2]
k=a[3]
j=a[4]
i=a[5]
h=a[6]
g=a[7]}else s=o
if(!n)throw A.a(A.D("Pattern matching error"))
n=new A.mL()
l=A.R(A.bA(l))
A.al(s)
r=n.$1(m)
q=n.$1(j)
if(i!=null&&h!=null){t.c.a(i)
t.a.a(h)
p=new A.ci(i,h,A.b6(h,0,o))}else p=o
n=n.$1(k)
A.y9(g)
return new A.d9(s,r,l,g==null?o:A.R(g),n,q,p)},
Ag(a){var s,r,q,p,o,n,m=null,l=a.r
A:{if(l==null){s=m
break A}s=A.vx(l)
break A}r=a.b
if(r==null)r=m
q=a.e
if(q==null)q=m
p=a.f
if(p==null)p=m
o=s==null
n=o?m:s.a
s=o?m:s.b
o=a.d
if(o==null)o=m
return[a.a,r,a.c,q,p,n,s,o]},
B4(a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=null,a0=v.G,a1=new a0.Array(),a2=new a0.ArrayBuffer(512),a3=new A.n_(a2,512,"transfer" in a2)
a5.j0(a4)
for(s=a4.a,r=s.c,s=s.b,q=r.d,r=r.b,p=0,o=!0;A.AZ(a4);){if(o){p=q.sqlite3_column_count(s)
o=!1}n=a3.d
m=a3.d=n+p
if(m>a3.b)a3.lP(m)
m=new a0.DataView(a3.a,n,p)
l=new a0.Array(p)
for(k=0;k<p;++k){switch(q.sqlite3_column_type(s,k)){case 1:j=q.sqlite3_column_int64(s,k)
i=a0.Number(j)
if(a0.Number.isSafeInteger(i)){j=i
h=B.U}else h=B.V
break
case 2:j=q.sqlite3_column_double(s,k)
h=B.W
break
case 3:g=q.sqlite3_column_text(s,k)
f=r.buffer
e=A.qi(r,g)
g=new Uint8Array(f,g,e)
d=new A.cE(!1).cT(g,0,a,!0)
j=d
h=B.X
break
case 4:g=q.sqlite3_column_bytes(s,k)
f=q.sqlite3_column_blob(s,k)
c=new Uint8Array(g)
e=r.buffer
g=new Uint8Array(e,f,g)
B.f.cg(c,0,g)
j=c
h=B.Y
break
case 5:default:j=a
h=B.Z}l[k]=j
m.setUint8(k,h.a)}a1.push(l)}b=new a0.Array(p)
for(k=0;k<p;++k){a0=q.sqlite3_column_name(s,k)
m=r.buffer
g=A.qi(r,a0)
a0=new Uint8Array(m,a0,g)
b[k]=new A.cE(!1).cT(a0,0,a,!0)}return A.yR(!1,b,0,0,a1,a,a3.oV(0))},
B5(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.c
if(h!=null){s=t.k.b(h)?h:new A.ag(h,A.a5(h).h("ag<1,j>"))
s=J.dC(s,new A.oj(),t.N)
r=A.ap(s,s.$ti.h("X.E"))
s=a.n
if(s!=null){s=t.fi.b(s)?s:new A.ag(s,A.a5(s).h("ag<1,j?>"))
s=J.dC(s,new A.ok(),t.T)
A.ap(s,s.$ti.h("X.E"))}s=a.v
q=s==null?null:A.b6(s,0,null)
p=A.u([],t.dO)
s=a.r
s.toString
if(!t.mu.b(s))s=new A.ag(s,A.a5(s).h("ag<1,w<k?>>"))
s=J.Z(s)
o=q!=null
n=0
while(s.m()){m=s.gp()
l=[]
m=B.c.gA(m)
while(m.m()){k=m.gp()
if(o){j=q[n]
i=j>=8?B.x:B.I[j]}else i=B.x
l.push(i.jb(k));++n}p.push(l)}s=new A.bG(p,r,B.bA)
s.le()
return s}else return null},
Eu(a){if(a==="sharedCompatibilityCheck"||a==="dedicatedCompatibilityCheck"||a==="dedicatedInSharedCompatibilityCheck")return!0
else return!1},
mL:function mL(){},
oj:function oj(){},
ok:function ok(){},
yR(a,b,c,d,e,f,g){return{c:b,n:f,v:g,r:e,x:a,y:c,i:d,t:"rowsResponse"}},
dy(a){var s,r,q,p,o=v.G,n=new o.Array()
switch(a.t){case"connect":n.push(a.r.port)
break
case"fileSystemAccess":s=a.b
if(s!=null)n.push(s)
break
case"runQuery":n.push(a.v)
break
case"simpleSuccessResponse":r=a.r
if(r!=null){o=o.ArrayBuffer
o=r instanceof o
q=r}else{q=null
o=!1}if(o)n.push(q)
break
case"endpointResponse":n.push(a.r.port)
break
case"rowsResponse":p=a.v
if(p!=null)n.push(p)
break}return n},
Eb(a,b,c,d,e){switch(a.t){case"abort":return b.$1(a)
case"notifyUpdate":case"notifyCommit":case"notifyRollback":return c.$1(a)
case"simpleSuccessResponse":case"endpointResponse":case"rowsResponse":case"errorResponse":return e.$1(a)
default:return d.$1(a)}},
ft:function ft(a,b){this.a=a
this.b=b},
oi:function oi(){},
Al(a){var s,r
for(s=0;s<5;++s){r=B.bt[s]
if(r.c===a)return r}throw A.a(A.I("Unknown FS implementation: "+a,null))},
Bk(a){var s,r,q,p,o,n,m,l,k,j=null
A:{if(a==null){s=j
r=B.Z
break A}q=A.hG(a)
p=q?a:j
if(q){s=p
r=B.U
break A}q=a instanceof A.aA
if(q)o=a
else o=j
if(q){s=v.G.BigInt(o.j(0))
r=B.V
break A}q=typeof a=="number"
n=q?a:j
if(q){s=n
r=B.W
break A}q=typeof a=="string"
m=q?a:j
if(q){s=m
r=B.X
break A}q=t.p.b(a)
l=q?a:j
if(q){s=l
r=B.Y
break A}q=A.kM(a)
k=q?a:j
if(q){s=k
r=B.aE
break A}throw A.a(A.I("Unsupported value: "+A.q(a),j))}return new A.Q(r,s)},
vx(a){var s,r,q,p,o,n
if(a instanceof A.ci)return new A.Q(a.a,a.b)
s=[]
r=J.ab(a)
q=r.gk(a)
p=new Uint8Array(q)
for(o=0;o<r.gk(a);++o){n=A.Bk(r.i(a,o))
p[o]=n.a.a
s.push(n.b)}return new A.Q(s,t.a.a(B.f.gar(p)))},
cj:function cj(a,b,c){this.c=a
this.a=b
this.b=c},
bw:function bw(a,b){this.a=a
this.b=b},
ci:function ci(a,b,c){this.a=a
this.b=b
this.c=c},
kP(){var s=0,r=A.i(t.y),q,p=2,o=[],n=[],m,l,k,j,i,h
var $async$kP=A.d(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:i=v.G
if(!("indexedDB" in i)||!("FileReader" in i)){q=!1
s=1
break}m=A.S(i.indexedDB)
i=$.hN()
i=i==null?null:A.ed(i,"drift_mock_db",null,null,!1)
s=3
return A.b(t.fP.b(i)?i:A.bM(i,t.b3),$async$kP)
case 3:l=b
p=5
s=8
return A.b(A.A3(m.open("drift_mock_db"),t.m),$async$kP)
case 8:k=b
k.close()
m.deleteDatabase("drift_mock_db")
n.push(7)
s=6
break
case 5:p=4
h=o.pop()
q=!1
n=[1]
s=6
break
n.push(7)
s=6
break
case 4:n=[2]
case 6:p=2
i=l
if(i!=null)i.a.L()
s=n.pop()
break
case 7:q=!0
s=1
break
case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$kP,r)},
ur(a){return A.E2(a)},
E2(a){var s=0,r=A.i(t.y),q,p=2,o=[],n,m,l,k,j,i
var $async$ur=A.d(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j={}
j.a=null
p=4
n=A.S(v.G.indexedDB)
m=n.open(a,1)
m.onupgradeneeded=A.bB(new A.us(j,m))
s=7
return A.b(A.A2(m,t.m),$async$ur)
case 7:l=c
if(j.a==null)j.a=!0
l.close()
p=2
s=6
break
case 4:p=3
i=o.pop()
s=6
break
case 3:s=2
break
case 6:j=j.a
q=j===!0
s=1
break
case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$ur,r)},
eR(){var s=0,r=A.i(t.k),q,p=2,o=[],n=[],m,l,k,j,i,h,g
var $async$eR=A.d(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=A.v2()
if(h==null){q=B.J
s=1
break}j=t.m
s=3
return A.b(A.ar(h.getDirectory(),j),$async$eR)
case 3:m=b
p=5
s=8
return A.b(A.ar(m.getDirectoryHandle("drift_db",{create:!1}),j),$async$eR)
case 8:m=b
p=2
s=7
break
case 5:p=4
g=o.pop()
q=B.J
s=1
break
s=7
break
case 4:s=2
break
case 7:l=A.u([],t.s)
j=new A.bP(A.bd(A.Ak(m),"stream",t.K))
p=9
case 12:s=14
return A.b(j.m(),$async$eR)
case 14:if(!b){s=13
break}k=j.gp()
if(J.z(k.kind,"directory"))J.hO(l,k.name)
s=12
break
case 13:n.push(11)
s=10
break
case 9:n=[2]
case 10:p=2
s=15
return A.b(j.u(),$async$eR)
case 15:s=n.pop()
break
case 11:q=l
s=1
break
case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$eR,r)},
A2(a,b){var s=new A.l($.m,b.h("l<0>")),r=new A.N(s,b.h("N<0>")),q=t.m
A.aD(a,"success",new A.lM(r,a,b),!1,q)
A.aD(a,"error",new A.lN(r,a),!1,q)
return s},
A3(a,b){var s=new A.l($.m,b.h("l<0>")),r=new A.N(s,b.h("N<0>")),q=t.m
A.aD(a,"success",new A.lQ(r,a,b),!1,q)
A.aD(a,"error",new A.lR(r,a),!1,q)
A.aD(a,"blocked",new A.lS(r,a),!1,q)
return s},
us:function us(a,b){this.a=a
this.b=b},
lM:function lM(a,b,c){this.a=a
this.b=b
this.c=c},
lN:function lN(a,b){this.a=a
this.b=b},
lQ:function lQ(a,b,c){this.a=a
this.b=b
this.c=c},
lR:function lR(a,b){this.a=a
this.b=b},
lS:function lS(a,b){this.a=a
this.b=b},
nX:function nX(a,b){this.a=a
this.b=b},
fd:function fd(a,b){this.a=a
this.b=b},
cu:function cu(a,b){this.a=a
this.b=b},
d5:function d5(a,b){this.a=a
this.b=b},
bq:function bq(a,b){this.a=a
this.b=b},
rf:function rf(a){this.a=a},
tE:function tE(){},
rd:function rd(a){this.a=a},
CU(a){var s=a.goe()
return new A.aL(new A.u0(),s,A.p(s).h("aL<C.T,v>"))},
xB(a,b){var s=A.u([],t.kG),r=b==null?a.b:b
return new A.ej(a,r,new A.hu(),new A.hu(),new A.hu(),s)},
BP(a,b,c){var s=t.S
s=new A.ei(c,A.u([],t.ba),a.a,new A.aa(new A.l($.m,t.D),t.h),A.T(s,t.br),A.T(s,t.m))
s.hz(a)
s.l1(a,b,c)
return s},
yg(a){var s
switch(a.a){case 0:s="/database"
break
case 1:s="/database-journal"
break
default:s=null}return s},
u0:function u0(){},
hu:function hu(){this.a=null},
ej:function ej(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=null
_.r=1
_.w=f},
r2:function r2(a){this.a=a},
r6:function r6(a,b){this.a=a
this.b=b},
r3:function r3(a,b){this.a=a
this.b=b},
r4:function r4(a){this.a=a},
r5:function r5(a,b){this.a=a
this.b=b},
ei:function ei(a,b,c,d,e,f){var _=this
_.w=a
_.x=b
_.a=c
_.b=d
_.d=_.c=null
_.e=0
_.f=e
_.r=f},
qR:function qR(a){this.a=a},
qU:function qU(a,b,c){this.a=a
this.b=b
this.c=c},
qX:function qX(a,b){this.a=a
this.b=b},
r_:function r_(a,b,c){this.a=a
this.b=b
this.c=c},
qT:function qT(a,b){this.a=a
this.b=b},
qS:function qS(a,b){this.a=a
this.b=b},
qZ:function qZ(a,b){this.a=a
this.b=b},
qY:function qY(a,b){this.a=a
this.b=b},
r1:function r1(a,b){this.a=a
this.b=b},
r0:function r0(a,b){this.a=a
this.b=b},
qV:function qV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
qW:function qW(a,b){this.a=a
this.b=b},
qQ:function qQ(a){this.a=a},
ie:function ie(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=1
_.Q=_.z=_.y=_.x=null},
mD:function mD(a){this.a=a},
mC:function mC(a){this.a=a},
mB:function mB(a,b){this.a=a
this.b=b},
qe:function qe(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=0
_.e=d
_.f=0
_.w=_.r=null
_.x=e
_.y=f
_.Q=$},
qf:function qf(a,b){this.a=a
this.b=b},
qg:function qg(a,b){this.a=a
this.b=b},
qh:function qh(a){this.a=a},
Cg(){return new A.t9(A.jW(new A.ta(),t.z))},
iI:function iI(a){this.a=a},
t9:function t9(a){this.a=null
this.b=a},
ta:function ta(){},
te:function te(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
tb:function tb(a,b){this.a=a
this.b=b},
tc:function tc(a){this.a=a},
tf:function tf(a,b){this.a=a
this.b=b},
td:function td(a){this.a=a},
jg:function jg(){},
jh:function jh(){},
ov:function ov(a,b,c){this.a=a
this.b=b
this.c=c},
bC:function bC(a){this.a=a},
ol(a,b,c){return A.B7(a,b,c,c)},
B7(a,b,c,d){var s=0,r=A.i(d),q,p=2,o=[],n=[],m,l
var $async$ol=A.d(function(e,f){if(e===1){o.push(f)
s=p}for(;;)switch(s){case 0:l=new A.fB(a)
p=3
s=6
return A.b(b.$1(l),$async$ol)
case 6:m=f
q=m
n=[1]
s=4
break
n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
l.c=!0
s=n.pop()
break
case 5:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$ol,r)},
B8(a){var s
A:{if(0===a){s=B.bE
break A}s=""+a
s=new A.hq("SAVEPOINT s"+s,"RELEASE s"+s,"ROLLBACK TO s"+s)
break A}return s},
fD(a,b,c){return A.B9(a,b,c,c)},
B9(a,b,c,d){var s=0,r=A.i(d),q,p=2,o=[],n=[],m,l
var $async$fD=A.d(function(e,f){if(e===1){o.push(f)
s=p}for(;;)switch(s){case 0:l=new A.fC(0,a)
p=3
s=6
return A.b(b.$1(l),$async$fD)
case 6:m=f
s=7
return A.b(a.e9(),$async$fD)
case 7:q=m
n=[1]
s=4
break
n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
l.c=!0
s=n.pop()
break
case 5:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$fD,r)},
js:function js(){},
fB:function fB(a){this.a=a
this.c=this.b=!1},
fC:function fC(a,b){var _=this
_.d=a
_.a=b
_.c=_.b=!1},
jf:function jf(){},
ot:function ot(a,b){this.a=a
this.b=b},
ou:function ou(a,b){this.a=a
this.b=b},
Bm(a){return new A.J(a)},
Bo(a,b,c){return A.DF(new A.pA(),c,a,!0,b,t.d)},
Bn(a){var s,r=A.bs(t.N)
for(s=0;s<1;++s)r.q(0,a[s].toLowerCase())
return new A.kq(new A.pz(r))},
DF(a,b,c,d,e,f){return new A.bz(!1,new A.uh(e,a,c,b,!0,f),f.h("bz<0>"))},
J:function J(a){this.a=a},
pA:function pA(){},
pz:function pz(a){this.a=a},
py:function py(a){this.a=a},
uh:function uh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ui:function ui(a,b){this.a=a
this.b=b},
uj:function uj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ud:function ud(a,b,c){this.a=a
this.b=b
this.c=c},
uc:function uc(a,b){this.a=a
this.b=b},
uk:function uk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
um:function um(a,b){this.a=a
this.b=b},
ul:function ul(a,b){this.a=a
this.b=b},
ue:function ue(a){this.a=a},
uf:function uf(a,b,c){this.a=a
this.b=b
this.c=c},
ug:function ug(a,b){this.a=a
this.b=b},
xm(a,b,c,d,e,f){var s
if(a==null)return c.$0()
s=A.EF(b,d,e)
a.pR(s.a,s.b)
return A.dN(c,f).J(new A.po(a))},
EF(a,b,c){var s,r,q,p,o,n,m=t.z
m=A.T(m,m)
m.l(0,"sql",c)
s=[]
for(r=b.length,q=t.j,p=0;p<b.length;b.length===r||(0,A.a6)(b),++p){o=b[p]
A:{if(q.b(o)){n="<blob>"
break A}if(o instanceof A.aA){n=o.j(0)
break A}n=o
break A}s.push(n)}m.l(0,"parameters",s)
return new A.Q("sqlite_async:"+a+" "+c,m)},
po:function po(a){this.a=a},
eP(a,b,c,d){return A.Es(a,b,c,d,d)},
Es(a,b,c,d,e){var s=0,r=A.i(e),q,p=2,o=[],n,m,l,k,j
var $async$eP=A.d(function(f,g){if(f===1){o.push(g)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.b(a.eJ(c?"BEGIN IMMEDIATE":"BEGIN"),$async$eP)
case 7:s=8
return A.b(b.$1(a),$async$eP)
case 8:n=g
s=9
return A.b(a.eJ("END TRANSACTION"),$async$eP)
case 9:q=n
s=1
break
p=2
s=6
break
case 4:p=3
k=o.pop()
p=11
s=14
return A.b(a.eJ("ROLLBACK"),$async$eP)
case 14:p=3
s=13
break
case 11:p=10
j=o.pop()
s=13
break
case 10:s=3
break
case 13:throw k
s=6
break
case 3:s=2
break
case 6:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$eP,r)},
xl(a){var s={},r=A.u([],t.jI),q=A.bs(t.N)
s.a=A.u([],t.bO)
return new A.bz(!0,new A.pl(new A.pg(s,r,a,new A.pm(q),new A.pj(r,q),new A.pk(q)),new A.pn(s,r)),t.cn)},
pm:function pm(a){this.a=a},
pj:function pj(a,b){this.a=a
this.b=b},
pk:function pk(a){this.a=a},
pg:function pg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ph:function ph(a){this.a=a},
pi:function pi(a){this.a=a},
pn:function pn(a,b){this.a=a
this.b=b},
pl:function pl(a,b){this.a=a
this.b=b},
pf:function pf(a,b){this.a=a
this.b=b},
dt:function dt(a,b){this.a=a
this.b=b},
kT(a,b){return A.EU(a,b,b)},
EU(a,b,c){var s=0,r=A.i(c),q,p=2,o=[],n,m,l,k,j,i,h
var $async$kT=A.d(function(d,e){if(d===1){o.push(e)
s=p}for(;;)switch(s){case 0:p=4
s=7
return A.b(a.$0(),$async$kT)
case 7:j=e
q=j
s=1
break
p=2
s=6
break
case 4:p=3
h=o.pop()
j=A.F(h)
if(j instanceof A.d5){n=j
m=n.b
l=null
if(m!=null){l=m
throw A.a(l)}if(B.a.V(n.a,"Database is not in a transaction"))throw A.a(A.ji(null,null,0,"Transaction rolled back by earlier statement. Cannot execute.",null,null,null))
if(B.a.V("Remote error: "+n.a,"SqliteException")){k=A.au("SqliteException\\((\\d+)\\)",!0)
j=k.ji(n.a)
j=j==null?null:j.i(0,1)
throw A.a(A.ji(null,null,A.yM(j==null?"0":j),n.a,null,null,null))}throw h}else throw h
s=6
break
case 3:s=2
break
case 6:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$kT,r)},
CV(a,b,c){return A.ir(a,new A.u1(b),c,t.fN)},
jz:function jz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pW:function pW(a,b){this.a=a
this.b=b},
pZ:function pZ(a,b){this.a=a
this.b=b},
pY:function pY(a,b){this.a=a
this.b=b},
pX:function pX(a,b){this.a=a
this.b=b},
pU:function pU(a,b,c){this.a=a
this.b=b
this.c=c},
pV:function pV(a,b,c){this.a=a
this.b=b
this.c=c},
cd:function cd(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=!1},
ty:function ty(a,b,c){this.a=a
this.b=b
this.c=c},
tx:function tx(a,b,c){this.a=a
this.b=b
this.c=c},
tw:function tw(a,b,c){this.a=a
this.b=b
this.c=c},
tv:function tv(a,b,c){this.a=a
this.b=b
this.c=c},
u1:function u1(a){this.a=a},
BN(a){var s=a.a,r=A.p(s).h("bU<1,j>")
s=A.ap(new A.bU(s,new A.qK(),r),r.h("n.E"))
return{a:0,b:s}},
i2:function i2(a){this.b=a},
ll:function ll(){},
lj:function lj(){},
lk:function lk(){},
qK:function qK(){},
vc(a,b,c){var s=A.vx(c)
return{rawKind:a.b,rawSql:b,rawParameters:s.a,typeInfo:s.b}},
bS:function bS(a,b){this.a=a
this.b=b},
jt:function jt(a){this.a=0
this.b=a},
pv:function pv(){},
pw:function pw(a,b){this.a=a
this.b=b},
px:function px(a,b,c){this.a=a
this.b=b
this.c=c},
q2(a){var s=A.Cg()
return new A.q1(s,a)},
q1:function q1(a,b){this.a=a
this.b=b},
q3:function q3(a,b,c){this.a=a
this.b=b
this.c=c},
q5:function q5(a){this.a=a},
q4:function q4(){},
fh:function fh(a){this.a=a},
BQ(){return new A.ek()},
l7:function l7(){},
hX:function hX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.e=d},
l8:function l8(a){this.a=a},
l9:function l9(a,b){this.a=a
this.b=b},
la:function la(a,b,c){this.a=a
this.b=b
this.c=c},
ek:function ek(){this.a=!1
this.b=null},
jm:function jm(a,b,c){this.c=a
this.a=b
this.b=c},
p1:function p1(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null},
e8:function e8(){},
k0:function k0(){},
bg:function bg(a,b){this.a=a
this.b=b},
aD(a,b,c,d,e){var s
if(c==null)s=null
else{s=A.yC(new A.rk(c),t.m)
s=s==null?null:A.bB(s)}s=new A.ep(a,b,s,!1,e.h("ep<0>"))
s.fv()
return s},
yC(a,b){var s=$.m
if(s===B.d)return a
return s.fH(a,b)},
vd:function vd(a,b){this.a=a
this.$ti=b},
eo:function eo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ep:function ep(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
rk:function rk(a){this.a=a},
rl:function rl(a){this.a=a},
q6(a){var s=0,r=A.i(t.m1),q,p,o,n,m
var $async$q6=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:o=new A.jt(A.T(t.N,t.ao))
s=3
return A.b(A.Ab(B.b5,v.G.location.href,B.b2,o.go7()).fI(new A.Q(a.b,a.a)),$async$q6)
case 3:n=c
m=a.c
A:{p=null
if(m!=null){p=A.q2(m)
break A}break A}q=new A.jz(n,p,!1,o.p0(n))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$q6,r)},
z2(a){return v.mangledGlobalNames[a]},
yT(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
AB(a,b){return b in a},
vj(a,b,c,d,e,f){var s
if(c==null)return a[b]()
else if(d==null)return a[b](c)
else if(e==null)return a[b](c,d)
else{s=a[b](c,d,e)
return s}},
wO(a,b){return b in a},
Ej(a,b,c,d){var s,r,q,p,o,n=A.T(d,c.h("t<0>"))
for(s=c.h("w<0>"),r=0;r<1;++r){q=a[r]
p=b.$1(q)
o=n.i(0,p)
if(o==null){o=A.u([],s)
n.l(0,p,o)
p=o}else p=o
J.hO(p,q)}return n},
wN(a,b){var s,r,q=A.bs(b)
for(s=a.a,s=new A.b3(s,s.r,s.e);s.m();)for(r=J.Z(s.d);r.m();)q.q(0,r.gp())
return q},
w8(a){var s,r=a.c.a.i(0,"charset")
if(a.a==="application"&&a.b==="json"&&r==null)return B.l
if(r!=null){s=A.wE(r)
if(s==null)s=B.k}else s=B.k
return s},
z1(a){return a},
z0(a){return new A.cO(a)},
ET(a,b,c){var s,r,q,p
try{q=c.$0()
return q}catch(p){q=A.F(p)
if(q instanceof A.e3){s=q
throw A.a(A.Bc("Invalid "+a+": "+s.a,s.b,s.gdJ()))}else if(t.lW.b(q)){r=q
throw A.a(A.ak("Invalid "+a+' "'+b+'": '+r.gjy(),r.gdJ(),r.ga8()))}else throw p}},
yI(){var s,r,q,p,o=null
try{o=A.vz()}catch(s){if(t.L.b(A.F(s))){r=$.tZ
if(r!=null)return r
throw s}else throw s}if(J.z(o,$.ye)){r=$.tZ
r.toString
return r}$.ye=o
if($.wg()===$.hM())r=$.tZ=o.dv(".").j(0)
else{q=o.hf()
p=q.length-1
r=$.tZ=p===0?q:B.a.t(q,0,p)}return r},
yN(a){var s
if(!(a>=65&&a<=90))s=a>=97&&a<=122
else s=!0
return s},
yJ(a,b){var s,r,q=null,p=a.length,o=b+2
if(p<o)return q
if(!A.yN(a.charCodeAt(b)))return q
s=b+1
if(a.charCodeAt(s)!==58){r=b+4
if(p<r)return q
if(B.a.t(a,s,r).toLowerCase()!=="%3a")return q
b=o}s=b+2
if(p===s)return s
if(a.charCodeAt(s)!==47)return q
return b+3},
Eg(a){if(B.a.K(a,"ps_data_local__"))return B.a.a0(a,15)
else if(B.a.K(a,"ps_data__"))return B.a.a0(a,9)
else return null},
Ar(a){var s=t.N
return t.f.a(B.h.aI(a.h)).bk(0,s,s)},
Et(a){var s,r,q,p
if(a.gk(0)===0)return!0
s=a.gah(0)
for(r=A.bK(a,1,null,a.$ti.h("X.E")),q=r.$ti,r=new A.at(r,r.gk(0),q.h("at<X.E>")),q=q.h("X.E");r.m();){p=r.d
if(!J.z(p==null?q.a(p):p,s))return!1}return!0},
EG(a,b){var s=B.c.cz(a,null)
if(s<0)throw A.a(A.I(A.q(a)+" contains no null elements.",null))
a[s]=b},
yW(a,b){var s=B.c.cz(a,b)
if(s<0)throw A.a(A.I(A.q(a)+" contains no elements matching "+b.j(0)+".",null))
a[s]=null},
E8(a,b){var s,r,q,p
for(s=new A.br(a),r=t.V,s=new A.at(s,s.gk(0),r.h("at<y.E>")),r=r.h("y.E"),q=0;s.m();){p=s.d
if((p==null?r.a(p):p)===b)++q}return q},
uw(a,b,c){var s,r,q
if(b.length===0)for(s=0;;){r=B.a.bn(a,"\n",s)
if(r===-1)return a.length-s>=c?s:null
if(r-s>=c)return s
s=r+1}r=B.a.cz(a,b)
while(r!==-1){q=r===0?0:B.a.ek(a,"\n",r-1)+1
if(c===r-q)return q
r=B.a.bn(a,b,r+1)}return null},
w7(a,b,c,d,e,f){var s,r=b.a,q=b.b,p=r.d,o=p.sqlite3_extended_errcode(q),n=p.sqlite3_error_offset(q)
A:{if(n<0){n=null
break A}break A}s=a.a
return new A.d9(A.ef(r.b,p.sqlite3_errmsg(q)),A.ef(s.b,s.d.sqlite3_errstr(o))+" (code "+A.q(o)+")",c,n,d,e,f)},
we(a,b,c,d,e){throw A.a(A.w7(a.a,a.b,b,c,d,e))},
wK(a,b){var s,r
for(s=b,r=0;r<16;++r)s+=A.aR("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012346789".charCodeAt(a.eo(61)))
return s.charCodeAt(0)==0?s:s},
o5(a){var s=0,r=A.i(t.lo),q
var $async$o5=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=3
return A.b(A.ar(a.arrayBuffer(),t.a),$async$o5)
case 3:q=c
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$o5,r)},
cG(){var s=0,r=A.i(t.kO),q,p=2,o=[],n=[],m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$cG=A.d(function(a0,a1){if(a0===1){o.push(a1)
s=p}for(;;)switch(s){case 0:b=A.v2()
if(b==null){q=B.N
s=1
break}m=null
l=null
k=null
j=null
i=!1
p=4
d=$.hN()
d=d==null?null:A.ed(d,"_drift_feature_detection",null,null,!1)
s=7
return A.b(t.fP.b(d)?d:A.bM(d,t.b3),$async$cG)
case 7:j=a1
d=t.m
s=8
return A.b(A.ar(b.getDirectory(),d),$async$cG)
case 8:m=a1
s=9
return A.b(A.ar(m.getFileHandle("_drift_feature_detection",{create:!0}),d),$async$cG)
case 9:l=a1
s=10
return A.b(A.hK(l),$async$cG)
case 10:h=a1
g=null
f=null
g=h.a
f=h.b
i=g
k=f
e=A.vj(k,"getSize",null,null,null,null)
s=typeof e==="object"?11:12
break
case 11:s=13
return A.b(A.ar(A.S(e),t.X),$async$cG)
case 13:q=B.N
n=[1]
s=5
break
case 12:g=i
q=new A.ho(!0,g)
n=[1]
s=5
break
n.push(6)
s=5
break
case 4:p=3
a=o.pop()
q=B.N
n=[1]
s=5
break
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
g=j
if(g!=null)g.a.L()
if(k!=null)k.close()
s=m!=null&&l!=null?14:15
break
case 14:s=16
return A.b(A.ar(m.removeEntry("_drift_feature_detection",{recursive:!1}),t.X),$async$cG)
case 16:case 15:s=n.pop()
break
case 6:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$cG,r)},
hK(a){return A.DG(a)},
DG(a){var s=0,r=A.i(t.mk),q,p=2,o=[],n,m,l,k,j,i
var $async$hK=A.d(function(b,c){if(b===1){o.push(c)
s=p}for(;;)switch(s){case 0:j=null
p=4
l=t.m
s=7
return A.b(A.ar(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$hK)
case 7:j=c
s=8
return A.b(A.ar(a.createSyncAccessHandle({mode:"readwrite-unsafe"}),l),$async$hK)
case 8:n=c
n.close()
l=j
q=new A.Q(!0,l)
s=1
break
p=2
s=6
break
case 4:p=3
i=o.pop()
l=j
if(l!=null)l.close()
s=9
return A.b(A.ar(a.createSyncAccessHandle(),t.m),$async$hK)
case 9:m=c
q=new A.Q(!1,m)
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$hK,r)}},B={}
var w=[A,J,B]
var $={}
A.vl.prototype={}
J.iw.prototype={
D(a,b){return a===b},
gv(a){return A.dZ(a)},
j(a){return"Instance of '"+A.iZ(a)+"'"},
ga4(a){return A.bm(A.w0(this))}}
J.iy.prototype={
j(a){return String(a)},
gv(a){return a?519018:218159},
ga4(a){return A.bm(t.y)},
$ia1:1,
$iH:1}
J.dP.prototype={
D(a,b){return null==b},
j(a){return"null"},
gv(a){return 0},
$ia1:1,
$iE:1}
J.ai.prototype={$iv:1}
J.cm.prototype={
gv(a){return 0},
ga4(a){return B.bP},
j(a){return String(a)}}
J.iX.prototype={}
J.dd.prototype={}
J.b_.prototype={
j(a){var s=a[$.z6()]
if(s==null)s=a[$.dB()]
if(s==null)return this.kI(a)
return"JavaScript function for "+J.be(s)}}
J.aQ.prototype={
gv(a){return 0},
j(a){return String(a)}}
J.dR.prototype={
gv(a){return 0},
j(a){return String(a)}}
J.w.prototype={
e8(a,b){return new A.ag(a,A.a5(a).h("@<1>").I(b).h("ag<1,2>"))},
q(a,b){a.$flags&1&&A.B(a,29)
a.push(b)},
eu(a,b){var s
a.$flags&1&&A.B(a,"removeAt",1)
s=a.length
if(b>=s)throw A.a(A.o4(b,null))
return a.splice(b,1)[0]},
og(a,b,c){var s
a.$flags&1&&A.B(a,"insert",2)
s=a.length
if(b>s)throw A.a(A.o4(b,null))
a.splice(b,0,c)},
fY(a,b,c){var s,r
a.$flags&1&&A.B(a,"insertAll",2)
A.x8(b,0,a.length,"index")
if(!t.O.b(c))c=J.zQ(c)
s=J.aM(c)
a.length=a.length+s
r=b+s
this.R(a,r,a.length,a,b)
this.aj(a,b,r,c)},
jK(a){a.$flags&1&&A.B(a,"removeLast",1)
if(a.length===0)throw A.a(A.kR(a,-1))
return a.pop()},
H(a,b){var s
a.$flags&1&&A.B(a,"remove",1)
for(s=0;s<a.length;++s)if(J.z(a[s],b)){a.splice(s,1)
return!0}return!1},
mh(a,b,c){var s,r,q,p=[],o=a.length
for(s=0;s<o;++s){r=a[s]
if(!b.$1(r))p.push(r)
if(a.length!==o)throw A.a(A.ao(a))}q=p.length
if(q===o)return
this.sk(a,q)
for(s=0;s<p.length;++s)a[s]=p[s]},
aa(a,b){var s
a.$flags&1&&A.B(a,"addAll",2)
if(Array.isArray(b)){this.la(a,b)
return}for(s=J.Z(b);s.m();)a.push(s.gp())},
la(a,b){var s,r=b.length
if(r===0)return
if(a===b)throw A.a(A.ao(a))
for(s=0;s<r;++s)a.push(b[s])},
au(a){a.$flags&1&&A.B(a,"clear","clear")
a.length=0},
b9(a,b,c){return new A.a8(a,b,A.a5(a).h("@<1>").I(c).h("a8<1,2>"))},
bp(a,b){var s,r=A.b4(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)r[s]=A.q(a[s])
return r.join(b)},
bP(a,b){return A.bK(a,0,A.bd(b,"count",t.S),A.a5(a).c)},
aU(a,b){return A.bK(a,b,null,A.a5(a).c)},
jj(a,b){var s,r,q=a.length
for(s=0;s<q;++s){r=a[s]
if(b.$1(r))return r
if(a.length!==q)throw A.a(A.ao(a))}throw A.a(A.bW())},
W(a,b){return a[b]},
gah(a){if(a.length>0)return a[0]
throw A.a(A.bW())},
gaQ(a){var s=a.length
if(s>0)return a[s-1]
throw A.a(A.bW())},
R(a,b,c,d,e){var s,r,q,p,o
a.$flags&2&&A.B(a,5)
A.aN(b,c,a.length)
s=c-b
if(s===0)return
A.aI(e,"skipCount")
if(t.j.b(d)){r=d
q=e}else{r=J.l0(d,e).ca(0,!1)
q=0}p=J.ab(r)
if(q+s>p.gk(r))throw A.a(A.wM())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.i(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.i(r,q+o)},
aj(a,b,c,d){return this.R(a,b,c,d,0)},
cO(a,b){var s,r,q,p,o
a.$flags&2&&A.B(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.D2()
if(s===2){r=a[0]
q=a[1]
if(b.$2(r,q)>0){a[0]=q
a[1]=r}return}p=0
if(A.a5(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.cH(b,2))
if(p>0)this.mi(a,p)},
kB(a){return this.cO(a,null)},
mi(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
cz(a,b){var s,r=a.length
if(0>=r)return-1
for(s=0;s<r;++s)if(J.z(a[s],b))return s
return-1},
cB(a,b){var s,r=a.length,q=r-1
if(q<0)return-1
q<r
for(s=q;s>=0;--s)if(J.z(a[s],b))return s
return-1},
V(a,b){var s
for(s=0;s<a.length;++s)if(J.z(a[s],b))return!0
return!1},
gF(a){return a.length===0},
gaP(a){return a.length!==0},
j(a){return A.nw(a,"[","]")},
ca(a,b){var s=A.u(a.slice(0),A.a5(a))
return s},
jO(a){return this.ca(a,!0)},
gA(a){return new J.dD(a,a.length,A.a5(a).h("dD<1>"))},
gv(a){return A.dZ(a)},
gk(a){return a.length},
sk(a,b){a.$flags&1&&A.B(a,"set length","change the length of")
if(b<0)throw A.a(A.ac(b,0,null,"newLength",null))
if(b>a.length)A.a5(a).c.a(null)
a.length=b},
i(a,b){if(!(b>=0&&b<a.length))throw A.a(A.kR(a,b))
return a[b]},
l(a,b,c){a.$flags&2&&A.B(a)
if(!(b>=0&&b<a.length))throw A.a(A.kR(a,b))
a[b]=c},
of(a,b){var s
if(0>=a.length)return-1
for(s=0;s<a.length;++s)if(b.$1(a[s]))return s
return-1},
ga4(a){return A.bm(A.a5(a))},
$iaF:1,
$ix:1,
$in:1,
$it:1}
J.ix.prototype={
oZ(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.iZ(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.nx.prototype={}
J.dD.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.a(A.a6(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.dQ.prototype={
a_(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gh0(b)
if(this.gh0(a)===s)return 0
if(this.gh0(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gh0(a){return a===0?1/a<0:a<0},
n1(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.a(A.P(""+a+".ceil()"))},
n2(a,b,c){if(B.b.a_(b,c)>0)throw A.a(A.dx(b))
if(this.a_(a,b)<0)return b
if(this.a_(a,c)>0)return c
return a},
oX(a,b){var s,r,q,p
if(b<2||b>36)throw A.a(A.ac(b,2,36,"radix",null))
s=a.toString(b)
if(s.charCodeAt(s.length-1)!==41)return s
r=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(r==null)A.r(A.P("Unexpected toString result: "+s))
s=r[1]
q=+r[3]
p=r[2]
if(p!=null){s+=p
q-=p.length}return s+B.a.aL("0",q)},
j(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
dE(a,b){return a+b},
aT(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
hy(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.iI(a,b)},
Y(a,b){return(a|0)===a?a/b|0:this.iI(a,b)},
iI(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.a(A.P("Result of truncating division is "+A.q(s)+": "+A.q(a)+" ~/ "+b))},
cM(a,b){if(b<0)throw A.a(A.dx(b))
return b>31?0:a<<b>>>0},
cN(a,b){var s
if(b<0)throw A.a(A.dx(b))
if(a>0)s=this.ft(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
a2(a,b){var s
if(a>0)s=this.ft(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
mw(a,b){if(0>b)throw A.a(A.dx(b))
return this.ft(a,b)},
ft(a,b){return b>31?0:a>>>b},
kt(a,b){return a>b},
ga4(a){return A.bm(t.q)},
$ia7:1,
$iY:1}
J.fk.prototype={
gj1(a){var s,r=a<0?-a-1:a,q=r
for(s=32;q>=4294967296;){q=this.Y(q,4294967296)
s+=32}return s-Math.clz32(q)},
ga4(a){return A.bm(t.S)},
$ia1:1,
$ic:1}
J.iz.prototype={
ga4(a){return A.bm(t.i)},
$ia1:1}
J.cl.prototype={
fE(a,b,c){var s=b.length
if(c>s)throw A.a(A.ac(c,0,s,null,null))
return new A.ks(b,a,c)},
e5(a,b){return this.fE(a,b,0)},
cD(a,b,c){var s,r,q=null
if(c<0||c>b.length)throw A.a(A.ac(c,0,b.length,q,q))
s=a.length
if(c+s>b.length)return q
for(r=0;r<s;++r)if(b.charCodeAt(c+r)!==a.charCodeAt(r))return q
return new A.fJ(c,a)},
bG(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.a0(a,r-s)},
dK(a,b){var s=A.u(a.split(b),t.s)
return s},
c8(a,b,c,d){var s=A.aN(b,c,a.length)
return A.yZ(a,b,s,d)},
S(a,b,c){var s
if(c<0||c>a.length)throw A.a(A.ac(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
K(a,b){return this.S(a,b,0)},
t(a,b,c){return a.substring(b,A.aN(b,c,a.length))},
a0(a,b){return this.t(a,b,null)},
aL(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.a(B.aZ)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
oG(a,b,c){var s=b-a.length
if(s<=0)return a
return this.aL(c,s)+a},
oH(a,b){var s=b-a.length
if(s<=0)return a
return a+this.aL(" ",s)},
bn(a,b,c){var s
if(c<0||c>a.length)throw A.a(A.ac(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
cz(a,b){return this.bn(a,b,0)},
ek(a,b,c){var s,r
if(c==null)c=a.length
else if(c<0||c>a.length)throw A.a(A.ac(c,0,a.length,null,null))
s=b.length
r=a.length
if(c+s>r)c=r-s
return a.lastIndexOf(b,c)},
cB(a,b){return this.ek(a,b,null)},
V(a,b){return A.EN(a,b,0)},
a_(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
j(a){return a},
gv(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
ga4(a){return A.bm(t.N)},
gk(a){return a.length},
i(a,b){if(!(b>=0&&b<a.length))throw A.a(A.kR(a,b))
return a[b]},
$iaF:1,
$ia1:1,
$ia7:1,
$ij:1}
A.cR.prototype={
gaw(){return this.a.gaw()},
B(a,b,c,d){var s=this.a.bq(null,b,c),r=new A.dE(s,$.m,this.$ti.h("dE<1,2>"))
s.bt(r.gl7())
r.bt(a)
r.dq(d)
return r},
O(a){return this.B(a,null,null,null)},
az(a,b,c){return this.B(a,null,b,c)},
bq(a,b,c){return this.B(a,b,c,null)}}
A.dE.prototype={
u(){return this.a.u()},
bt(a){this.c=a==null?null:this.b.bN(a,t.z,this.$ti.y[1])},
dq(a){var s=this
s.a.dq(a)
if(a==null)s.d=null
else if(t.r.b(a))s.d=s.b.cF(a,t.z,t.K,t.l)
else if(t.i6.b(a))s.d=s.b.bN(a,t.z,t.K)
else throw A.a(A.I(u.y,null))},
l8(a){var s,r,q,p,o,n,m=this,l=m.c
if(l==null)return
s=null
try{s=m.$ti.y[1].a(a)}catch(o){r=A.F(o)
q=A.K(o)
p=m.d
if(p==null)m.b.cw(r,q)
else{l=t.K
n=m.b
if(t.r.b(p))n.hd(p,r,q,l,t.l)
else n.c9(t.i6.a(p),r,l)}return}m.b.c9(l,s,m.$ti.y[1])},
aJ(a){this.a.aJ(a)},
ai(){return this.aJ(null)},
am(){this.a.am()},
$iae:1}
A.cy.prototype={
gA(a){return new A.i6(J.Z(this.gb6()),A.p(this).h("i6<1,2>"))},
gk(a){return J.aM(this.gb6())},
gF(a){return J.l_(this.gb6())},
gaP(a){return J.zK(this.gb6())},
aU(a,b){var s=A.p(this)
return A.i5(J.l0(this.gb6(),b),s.c,s.y[1])},
bP(a,b){var s=A.p(this)
return A.i5(J.wr(this.gb6(),b),s.c,s.y[1])},
W(a,b){return A.p(this).y[1].a(J.kZ(this.gb6(),b))},
V(a,b){return J.wo(this.gb6(),b)},
j(a){return J.be(this.gb6())}}
A.i6.prototype={
m(){return this.a.m()},
gp(){return this.$ti.y[1].a(this.a.gp())}}
A.cP.prototype={
gb6(){return this.a}}
A.h8.prototype={$ix:1}
A.h2.prototype={
i(a,b){return this.$ti.y[1].a(J.eU(this.a,b))},
l(a,b,c){J.kY(this.a,b,this.$ti.c.a(c))},
sk(a,b){J.zN(this.a,b)},
q(a,b){J.hO(this.a,this.$ti.c.a(b))},
cO(a,b){var s=b==null?null:new A.qO(this,b)
J.wq(this.a,s)},
R(a,b,c,d,e){var s=this.$ti
J.zO(this.a,b,c,A.i5(d,s.y[1],s.c),e)},
aj(a,b,c,d){return this.R(0,b,c,d,0)},
$ix:1,
$it:1}
A.qO.prototype={
$2(a,b){var s=this.a.$ti.y[1]
return this.b.$2(s.a(a),s.a(b))},
$S(){return this.a.$ti.h("c(1,1)")}}
A.ag.prototype={
e8(a,b){return new A.ag(this.a,this.$ti.h("@<1>").I(b).h("ag<1,2>"))},
gb6(){return this.a}}
A.cQ.prototype={
bk(a,b,c){return new A.cQ(this.a,this.$ti.h("@<1,2>").I(b).I(c).h("cQ<1,2,3,4>"))},
E(a){return this.a.E(a)},
i(a,b){return this.$ti.h("4?").a(this.a.i(0,b))},
l(a,b,c){var s=this.$ti
this.a.l(0,s.c.a(b),s.y[1].a(c))},
ad(a,b){this.a.ad(0,new A.lE(this,b))},
ga3(){var s=this.$ti
return A.i5(this.a.ga3(),s.c,s.y[2])},
gk(a){var s=this.a
return s.gk(s)},
gF(a){var s=this.a
return s.gF(s)},
gbl(){var s=this.a.gbl()
return s.b9(s,new A.lD(this),this.$ti.h("M<3,4>"))}}
A.lE.prototype={
$2(a,b){var s=this.a.$ti
this.b.$2(s.y[2].a(a),s.y[3].a(b))},
$S(){return this.a.$ti.h("~(1,2)")}}
A.lD.prototype={
$1(a){var s=this.a.$ti
return new A.M(s.y[2].a(a.a),s.y[3].a(a.b),s.h("M<3,4>"))},
$S(){return this.a.$ti.h("M<3,4>(M<1,2>)")}}
A.cZ.prototype={
j(a){return"LateInitializationError: "+this.a}}
A.br.prototype={
gk(a){return this.a.length},
i(a,b){return this.a.charCodeAt(b)}}
A.uT.prototype={
$0(){return A.mV(null,t.H)},
$S:3}
A.om.prototype={}
A.x.prototype={}
A.X.prototype={
gA(a){var s=this
return new A.at(s,s.gk(s),A.p(s).h("at<X.E>"))},
gF(a){return this.gk(this)===0},
gah(a){if(this.gk(this)===0)throw A.a(A.bW())
return this.W(0,0)},
V(a,b){var s,r=this,q=r.gk(r)
for(s=0;s<q;++s){if(J.z(r.W(0,s),b))return!0
if(q!==r.gk(r))throw A.a(A.ao(r))}return!1},
bp(a,b){var s,r,q,p=this,o=p.gk(p)
if(b.length!==0){if(o===0)return""
s=A.q(p.W(0,0))
if(o!==p.gk(p))throw A.a(A.ao(p))
for(r=s,q=1;q<o;++q){r=r+b+A.q(p.W(0,q))
if(o!==p.gk(p))throw A.a(A.ao(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.q(p.W(0,q))
if(o!==p.gk(p))throw A.a(A.ao(p))}return r.charCodeAt(0)==0?r:r}},
oj(a){return this.bp(0,"")},
b9(a,b,c){return new A.a8(this,b,A.p(this).h("@<X.E>").I(c).h("a8<1,2>"))},
oN(a,b){var s,r,q=this,p=q.gk(q)
if(p===0)throw A.a(A.bW())
s=q.W(0,0)
for(r=1;r<p;++r){s=b.$2(s,q.W(0,r))
if(p!==q.gk(q))throw A.a(A.ao(q))}return s},
aU(a,b){return A.bK(this,b,null,A.p(this).h("X.E"))},
bP(a,b){return A.bK(this,0,A.bd(b,"count",t.S),A.p(this).h("X.E"))},
dB(a){var s,r=this,q=A.vo(A.p(r).h("X.E"))
for(s=0;s<r.gk(r);++s)q.q(0,r.W(0,s))
return q}}
A.da.prototype={
kX(a,b,c,d){var s,r=this.b
A.aI(r,"start")
s=this.c
if(s!=null){A.aI(s,"end")
if(r>s)throw A.a(A.ac(r,0,s,"start",null))}},
glu(){var s=J.aM(this.a),r=this.c
if(r==null||r>s)return s
return r},
gmy(){var s=J.aM(this.a),r=this.b
if(r>s)return s
return r},
gk(a){var s,r=J.aM(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
W(a,b){var s=this,r=s.gmy()+b
if(b<0||r>=s.glu())throw A.a(A.it(b,s.gk(0),s,null,"index"))
return J.kZ(s.a,r)},
aU(a,b){var s,r,q=this
A.aI(b,"count")
s=q.b+b
r=q.c
if(r!=null&&s>=r)return new A.cW(q.$ti.h("cW<1>"))
return A.bK(q.a,s,r,q.$ti.c)},
bP(a,b){var s,r,q,p=this
A.aI(b,"count")
s=p.c
r=p.b
if(s==null)return A.bK(p.a,r,B.b.dE(r,b),p.$ti.c)
else{q=B.b.dE(r,b)
if(s<q)return p
return A.bK(p.a,r,q,p.$ti.c)}},
ca(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.ab(n),l=m.gk(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=J.vi(0,p.$ti.c)
return n}r=A.b4(s,m.W(n,o),!1,p.$ti.c)
for(q=1;q<s;++q){r[q]=m.W(n,o+q)
if(m.gk(n)<l)throw A.a(A.ao(p))}return r}}
A.at.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.ab(q),o=p.gk(q)
if(r.b!==o)throw A.a(A.ao(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.W(q,s);++r.c
return!0}}
A.bY.prototype={
gA(a){return new A.co(J.Z(this.a),this.b,A.p(this).h("co<1,2>"))},
gk(a){return J.aM(this.a)},
gF(a){return J.l_(this.a)},
W(a,b){return this.b.$1(J.kZ(this.a,b))}}
A.bU.prototype={$ix:1}
A.co.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gp())
return!0}s.a=null
return!1},
gp(){var s=this.a
return s==null?this.$ti.y[1].a(s):s}}
A.a8.prototype={
gk(a){return J.aM(this.a)},
W(a,b){return this.b.$1(J.kZ(this.a,b))}}
A.c7.prototype={
gA(a){return new A.ee(J.Z(this.a),this.b)},
b9(a,b,c){return new A.bY(this,b,this.$ti.h("@<1>").I(c).h("bY<1,2>"))}}
A.ee.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gp()))return!0
return!1},
gp(){return this.a.gp()}}
A.fb.prototype={
gA(a){return new A.il(J.Z(this.a),this.b,B.a2,this.$ti.h("il<1,2>"))}}
A.il.prototype={
gp(){var s=this.d
return s==null?this.$ti.y[1].a(s):s},
m(){var s,r,q=this,p=q.c
if(p==null)return!1
for(s=q.a,r=q.b;!p.m();){q.d=null
if(s.m()){q.c=null
p=J.Z(r.$1(s.gp()))
q.c=p}else return!1}q.d=q.c.gp()
return!0}}
A.dc.prototype={
gA(a){var s=this.a
return new A.jn(s.gA(s),this.b,A.p(this).h("jn<1>"))}}
A.f9.prototype={
gk(a){var s=this.a,r=s.gk(s)
s=this.b
if(B.b.kt(r,s))return s
return r},
$ix:1}
A.jn.prototype={
m(){if(--this.b>=0)return this.a.m()
this.b=-1
return!1},
gp(){if(this.b<0){this.$ti.c.a(null)
return null}return this.a.gp()}}
A.c1.prototype={
aU(a,b){A.hR(b,"count")
A.aI(b,"count")
return new A.c1(this.a,this.b+b,A.p(this).h("c1<1>"))},
gA(a){var s=this.a
return new A.j8(s.gA(s),this.b)}}
A.dK.prototype={
gk(a){var s=this.a,r=s.gk(s)-this.b
if(r>=0)return r
return 0},
aU(a,b){A.hR(b,"count")
A.aI(b,"count")
return new A.dK(this.a,this.b+b,this.$ti)},
$ix:1}
A.j8.prototype={
m(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.m()
this.b=0
return s.m()},
gp(){return this.a.gp()}}
A.cW.prototype={
gA(a){return B.a2},
gF(a){return!0},
gk(a){return 0},
W(a,b){throw A.a(A.ac(b,0,0,"index",null))},
V(a,b){return!1},
b9(a,b,c){return new A.cW(c.h("cW<0>"))},
aU(a,b){A.aI(b,"count")
return this},
bP(a,b){A.aI(b,"count")
return this},
ca(a,b){var s=J.vi(0,this.$ti.c)
return s}}
A.ih.prototype={
m(){return!1},
gp(){throw A.a(A.bW())}}
A.fW.prototype={
gA(a){return new A.jA(J.Z(this.a),this.$ti.h("jA<1>"))}}
A.jA.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gp()))return!0
return!1},
gp(){return this.$ti.c.a(this.a.gp())}}
A.fy.prototype={
gi1(){var s,r,q
for(s=this.a,r=A.p(s),s=new A.co(J.Z(s.a),s.b,r.h("co<1,2>")),r=r.y[1];s.m();){q=s.a
if(q==null)q=r.a(q)
if(q!=null)return q}return null},
gF(a){return this.gi1()==null},
gaP(a){return this.gi1()!=null},
gA(a){var s=this.a
return new A.iR(new A.co(J.Z(s.a),s.b,A.p(s).h("co<1,2>")))}}
A.iR.prototype={
m(){var s,r,q
this.b=null
for(s=this.a,r=s.$ti.y[1];s.m();){q=s.a
if(q==null)q=r.a(q)
if(q!=null){this.b=q
return!0}}return!1},
gp(){var s=this.b
return s==null?A.r(A.bW()):s}}
A.fe.prototype={
sk(a,b){throw A.a(A.P(u.O))},
q(a,b){throw A.a(A.P("Cannot add to a fixed-length list"))}}
A.jq.prototype={
l(a,b,c){throw A.a(A.P("Cannot modify an unmodifiable list"))},
sk(a,b){throw A.a(A.P("Cannot change the length of an unmodifiable list"))},
q(a,b){throw A.a(A.P("Cannot add to an unmodifiable list"))},
cO(a,b){throw A.a(A.P("Cannot modify an unmodifiable list"))},
R(a,b,c,d,e){throw A.a(A.P("Cannot modify an unmodifiable list"))},
aj(a,b,c,d){return this.R(0,b,c,d,0)}}
A.e9.prototype={}
A.d7.prototype={
gk(a){return J.aM(this.a)},
W(a,b){var s=this.a,r=J.ab(s)
return r.W(s,r.gk(s)-1-b)}}
A.fK.prototype={
gv(a){var s=this._hashCode
if(s!=null)return s
s=664597*B.a.gv(this.a)&536870911
this._hashCode=s
return s},
j(a){return'Symbol("'+this.a+'")'},
D(a,b){if(b==null)return!1
return b instanceof A.fK&&this.a===b.a}}
A.hF.prototype={}
A.hn.prototype={$r:"+immediateRestart(1)",$s:1}
A.Q.prototype={$r:"+(1,2)",$s:2}
A.ho.prototype={$r:"+basicSupport,supportsReadWriteUnsafe(1,2)",$s:3}
A.hp.prototype={$r:"+controller,sync(1,2)",$s:4}
A.kb.prototype={$r:"+downloaded,total(1,2)",$s:5}
A.ey.prototype={$r:"+file,outFlags(1,2)",$s:6}
A.kc.prototype={$r:"+name,parameters(1,2)",$s:7}
A.kd.prototype={$r:"+result,resultCode(1,2)",$s:8}
A.hq.prototype={$r:"+(1,2,3)",$s:9}
A.ke.prototype={$r:"+autocommit,lastInsertRowid,result(1,2,3)",$s:10}
A.kf.prototype={$r:"+connectName,connectPort,lockName(1,2,3)",$s:11}
A.kg.prototype={$r:"+hasSynced,lastSyncedAt,priority(1,2,3)",$s:12}
A.kh.prototype={$r:"+atLast,priority,sinceLast,targetCount(1,2,3,4)",$s:13}
A.f1.prototype={
bk(a,b,c){var s=A.p(this)
return A.wV(this,s.c,s.y[1],b,c)},
gF(a){return this.gk(this)===0},
j(a){return A.nH(this)},
l(a,b,c){A.A6()},
gbl(){return new A.eC(this.nF(),A.p(this).h("eC<M<1,2>>"))},
nF(){var s=this
return function(){var r=0,q=1,p=[],o,n,m
return function $async$gbl(a,b,c){if(b===1){p.push(c)
r=q}for(;;)switch(r){case 0:o=s.ga3(),o=o.gA(o),n=A.p(s).h("M<1,2>")
case 2:if(!o.m()){r=3
break}m=o.gp()
r=4
return a.b=new A.M(m,s.i(0,m),n),1
case 4:r=2
break
case 3:return 0
case 1:return a.c=p.at(-1),3}}}},
cC(a,b,c,d){var s=A.T(c,d)
this.ad(0,new A.lZ(this,b,s))
return s},
$ia_:1}
A.lZ.prototype={
$2(a,b){var s=this.b.$2(a,b)
this.c.l(0,s.a,s.b)},
$S(){return A.p(this.a).h("~(1,2)")}}
A.aY.prototype={
gk(a){return this.b.length},
gic(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
E(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
i(a,b){if(!this.E(b))return null
return this.b[this.a[b]]},
ad(a,b){var s,r,q=this.gic(),p=this.b
for(s=q.length,r=0;r<s;++r)b.$2(q[r],p[r])},
ga3(){return new A.he(this.gic(),this.$ti.h("he<1>"))}}
A.he.prototype={
gk(a){return this.a.length},
gF(a){return 0===this.a.length},
gaP(a){return 0!==this.a.length},
gA(a){var s=this.a
return new A.es(s,s.length,this.$ti.h("es<1>"))}}
A.es.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0}}
A.f2.prototype={
q(a,b){A.A7()}}
A.f3.prototype={
gk(a){return this.b},
gF(a){return this.b===0},
gaP(a){return this.b!==0},
gA(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.es(s,s.length,r.$ti.h("es<1>"))},
V(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
dB(a){return A.AF(this,this.$ti.c)}}
A.nq.prototype={
D(a,b){if(b==null)return!1
return b instanceof A.fj&&this.a.D(0,b.a)&&A.wa(this)===A.wa(b)},
gv(a){return A.c0(this.a,A.wa(this),B.e,B.e,B.e,B.e)},
j(a){var s=B.c.bp([A.bm(this.$ti.c)],", ")
return this.a.j(0)+" with "+("<"+s+">")}}
A.fj.prototype={
$1(a){return this.a.$1$1(a,this.$ti.y[0])},
$2(a,b){return this.a.$1$2(a,b,this.$ti.y[0])},
$4(a,b,c,d){return this.a.$1$4(a,b,c,d,this.$ti.y[0])},
$S(){return A.Eq(A.kQ(this.a),this.$ti)}}
A.fA.prototype={}
A.pq.prototype={
ba(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.fz.prototype={
j(a){return"Null check operator used on a null value"}}
A.iA.prototype={
j(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.jp.prototype={
j(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.iT.prototype={
j(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$iO:1}
A.fa.prototype={}
A.ht.prototype={
j(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iad:1}
A.cS.prototype={
j(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.z3(r==null?"unknown":r)+"'"},
ga4(a){var s=A.kQ(this)
return A.bm(s==null?A.bo(this):s)},
gpP(){return this},
$C:"$1",
$R:1,
$D:null}
A.lK.prototype={$C:"$0",$R:0}
A.lL.prototype={$C:"$2",$R:2}
A.pe.prototype={}
A.ox.prototype={
j(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.z3(s)+"'"}}
A.eW.prototype={
D(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.eW))return!1
return this.$_target===b.$_target&&this.a===b.a},
gv(a){return(A.kS(this.a)^A.dZ(this.$_target))>>>0},
j(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.iZ(this.a)+"'")}}
A.j5.prototype={
j(a){return"RuntimeError: "+this.a}}
A.b1.prototype={
gk(a){return this.a},
gF(a){return this.a===0},
ga3(){return new A.b2(this,A.p(this).h("b2<1>"))},
gbl(){return new A.aG(this,A.p(this).h("aG<1,2>"))},
E(a){var s,r
if(typeof a=="string"){s=this.b
if(s==null)return!1
return s[a]!=null}else if(typeof a=="number"&&(a&0x3fffffff)===a){r=this.c
if(r==null)return!1
return r[a]!=null}else return this.jt(a)},
jt(a){var s=this.d
if(s==null)return!1
return this.cA(this.i6(s,a),a)>=0},
aa(a,b){b.ad(0,new A.ny(this))},
i(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.ju(b)},
ju(a){var s,r,q=this.d
if(q==null)return null
s=this.i6(q,a)
r=this.cA(s,a)
if(r<0)return null
return s[r].b},
l(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.hC(s==null?q.b=q.fm():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.hC(r==null?q.c=q.fm():r,b,c)}else q.jw(b,c)},
jw(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.fm()
s=p.dl(a)
r=o[s]
if(r==null)o[s]=[p.fn(a,b)]
else{q=p.cA(r,a)
if(q>=0)r[q].b=b
else r.push(p.fn(a,b))}},
cE(a,b){var s,r,q=this
if(q.E(a)){s=q.i(0,a)
return s==null?A.p(q).y[1].a(s):s}r=b.$0()
q.l(0,a,r)
return r},
H(a,b){var s=this
if(typeof b=="string")return s.iw(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.iw(s.c,b)
else return s.jv(b)},
jv(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.dl(a)
r=n[s]
q=o.cA(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.iN(p)
if(r.length===0)delete n[s]
return p.b},
au(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.fl()}},
ad(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.a(A.ao(s))
r=r.c}},
hC(a,b,c){var s=a[b]
if(s==null)a[b]=this.fn(b,c)
else s.b=c},
iw(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.iN(s)
delete a[b]
return s.b},
fl(){this.r=this.r+1&1073741823},
fn(a,b){var s,r=this,q=new A.nB(a,b)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.d=s
r.f=s.c=q}++r.a
r.fl()
return q},
iN(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.fl()},
dl(a){return J.V(a)&1073741823},
i6(a,b){return a[this.dl(b)]},
cA(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.z(a[r].a,b))return r
return-1},
j(a){return A.nH(this)},
fm(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.ny.prototype={
$2(a,b){this.a.l(0,a,b)},
$S(){return A.p(this.a).h("~(1,2)")}}
A.nB.prototype={}
A.b2.prototype={
gk(a){return this.a.a},
gF(a){return this.a.a===0},
gA(a){var s=this.a
return new A.d_(s,s.r,s.e)},
V(a,b){return this.a.E(b)}}
A.d_.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.ao(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.bX.prototype={
gk(a){return this.a.a},
gF(a){return this.a.a===0},
gA(a){var s=this.a
return new A.b3(s,s.r,s.e)}}
A.b3.prototype={
gp(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.ao(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}}}
A.aG.prototype={
gk(a){return this.a.a},
gF(a){return this.a.a===0},
gA(a){var s=this.a
return new A.iH(s,s.r,s.e,this.$ti.h("iH<1,2>"))}}
A.iH.prototype={
gp(){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.ao(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.M(s.a,s.b,r.$ti.h("M<1,2>"))
r.c=s.c
return!0}}}
A.fm.prototype={
dl(a){return A.kS(a)&1073741823},
cA(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;++r){q=a[r].a
if(q==null?b==null:q===b)return r}return-1}}
A.uD.prototype={
$1(a){return this.a(a)},
$S:31}
A.uE.prototype={
$2(a,b){return this.a(a,b)},
$S:90}
A.uF.prototype={
$1(a){return this.a(a)},
$S:147}
A.hm.prototype={
ga4(a){return A.bm(this.i7())},
i7(){return A.Ed(this.$r,this.cV())},
j(a){return this.iM(!1)},
iM(a){var s,r,q,p,o,n=this.ly(),m=this.cV(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.x6(o):l+A.q(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
ly(){var s,r=this.$s
while($.t2.length<=r)$.t2.push(null)
s=$.t2[r]
if(s==null){s=this.ll()
$.t2[r]=s}return s},
ll(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=A.u(new Array(l),t.hf)
for(s=0;s<l;++s)k[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
k[q]=r[s]}}return A.nE(k,t.K)}}
A.k8.prototype={
cV(){return[this.a,this.b]},
D(a,b){if(b==null)return!1
return b instanceof A.k8&&this.$s===b.$s&&J.z(this.a,b.a)&&J.z(this.b,b.b)},
gv(a){return A.c0(this.$s,this.a,this.b,B.e,B.e,B.e)}}
A.k7.prototype={
cV(){return[this.a]},
D(a,b){if(b==null)return!1
return b instanceof A.k7&&this.$s===b.$s&&J.z(this.a,b.a)},
gv(a){return A.c0(this.$s,this.a,B.e,B.e,B.e,B.e)}}
A.k9.prototype={
cV(){return[this.a,this.b,this.c]},
D(a,b){var s=this
if(b==null)return!1
return b instanceof A.k9&&s.$s===b.$s&&J.z(s.a,b.a)&&J.z(s.b,b.b)&&J.z(s.c,b.c)},
gv(a){var s=this
return A.c0(s.$s,s.a,s.b,s.c,B.e,B.e)}}
A.ka.prototype={
cV(){return this.a},
D(a,b){if(b==null)return!1
return b instanceof A.ka&&this.$s===b.$s&&A.Ce(this.a,b.a)},
gv(a){return A.c0(this.$s,A.AQ(this.a),B.e,B.e,B.e,B.e)}}
A.fl.prototype={
j(a){return"RegExp/"+this.a+"/"+this.b.flags},
glU(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.vk(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
glT(){var s=this,r=s.d
if(r!=null)return r
r=s.b
return s.d=A.vk(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"y")},
ji(a){var s=this.b.exec(a)
if(s==null)return null
return new A.ew(s)},
fE(a,b,c){var s=b.length
if(c>s)throw A.a(A.ac(c,0,s,null,null))
return new A.jE(this,b,c)},
e5(a,b){return this.fE(0,b,0)},
lx(a,b){var s,r=this.glU()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.ew(s)},
lw(a,b){var s,r=this.glT()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.ew(s)},
cD(a,b,c){if(c<0||c>b.length)throw A.a(A.ac(c,0,b.length,null,null))
return this.lw(b,c)}}
A.ew.prototype={
gC(){var s=this.b
return s.index+s[0].length},
i(a,b){return this.b[b]},
$id1:1,
$ij0:1}
A.jE.prototype={
gA(a){return new A.jF(this.a,this.b,this.c)}}
A.jF.prototype={
gp(){var s=this.d
return s==null?t.lu.a(s):s},
m(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.lx(l,s)
if(p!=null){m.d=p
o=p.gC()
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){r=l.charCodeAt(q)
if(r>=55296&&r<=56319){s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1}}
A.fJ.prototype={
gC(){return this.a+this.c.length},
i(a,b){if(b!==0)throw A.a(A.o4(b,null))
return this.c},
$id1:1}
A.ks.prototype={
gA(a){return new A.tl(this.a,this.b,this.c)}}
A.tl.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.fJ(s,o)
q.c=r===q.c?r+1:r
return!0},
gp(){var s=this.d
s.toString
return s}}
A.jO.prototype={
dU(){var s=this.b
if(s===this)throw A.a(new A.cZ("Local '"+this.a+"' has not been initialized."))
return s},
aV(){var s=this.b
if(s===this)throw A.a(A.wR(this.a))
return s}}
A.dV.prototype={
gjx(a){return a.byteLength},
ga4(a){return B.bI},
e6(a,b,c){A.kK(a,b,c)
return c==null?new Uint8Array(a,b):new Uint8Array(a,b,c)},
iY(a){return this.e6(a,0,null)},
$ia1:1,
$icN:1}
A.bF.prototype={$ibF:1}
A.fv.prototype={
gar(a){if(((a.$flags|0)&2)!==0)return new A.kA(a.buffer)
else return a.buffer},
lL(a,b,c,d){var s=A.ac(b,0,c,d,null)
throw A.a(s)},
hH(a,b,c,d){if(b>>>0!==b||b>c)this.lL(a,b,c,d)}}
A.kA.prototype={
gjx(a){return this.a.byteLength},
e6(a,b,c){var s=A.b6(this.a,b,c)
s.$flags=3
return s},
iY(a){return this.e6(0,0,null)},
$icN:1}
A.fu.prototype={
ga4(a){return B.bJ},
$ia1:1,
$iva:1}
A.dW.prototype={
gk(a){return a.length},
iE(a,b,c,d,e){var s,r,q=a.length
this.hH(a,b,q,"start")
this.hH(a,c,q,"end")
if(b>c)throw A.a(A.ac(b,0,c,null,null))
s=c-b
if(e<0)throw A.a(A.I(e,null))
r=d.length
if(r-e<s)throw A.a(A.D("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$iaF:1,
$ib0:1}
A.cp.prototype={
i(a,b){A.cf(b,a,a.length)
return a[b]},
l(a,b,c){a.$flags&2&&A.B(a)
A.cf(b,a,a.length)
a[b]=c},
R(a,b,c,d,e){a.$flags&2&&A.B(a,5)
if(t.dQ.b(d)){this.iE(a,b,c,d,e)
return}this.hw(a,b,c,d,e)},
aj(a,b,c,d){return this.R(a,b,c,d,0)},
$ix:1,
$in:1,
$it:1}
A.b5.prototype={
l(a,b,c){a.$flags&2&&A.B(a)
A.cf(b,a,a.length)
a[b]=c},
R(a,b,c,d,e){a.$flags&2&&A.B(a,5)
if(t.aj.b(d)){this.iE(a,b,c,d,e)
return}this.hw(a,b,c,d,e)},
aj(a,b,c,d){return this.R(a,b,c,d,0)},
$ix:1,
$in:1,
$it:1}
A.iK.prototype={
ga4(a){return B.bK},
$ia1:1,
$imN:1}
A.iL.prototype={
ga4(a){return B.bL},
$ia1:1,
$imO:1}
A.iM.prototype={
ga4(a){return B.bM},
i(a,b){A.cf(b,a,a.length)
return a[b]},
$ia1:1,
$inr:1}
A.iN.prototype={
ga4(a){return B.bN},
i(a,b){A.cf(b,a,a.length)
return a[b]},
$ia1:1,
$ins:1}
A.iO.prototype={
ga4(a){return B.bO},
i(a,b){A.cf(b,a,a.length)
return a[b]},
$ia1:1,
$int:1}
A.iP.prototype={
ga4(a){return B.bR},
i(a,b){A.cf(b,a,a.length)
return a[b]},
$ia1:1,
$ips:1}
A.fw.prototype={
ga4(a){return B.bS},
i(a,b){A.cf(b,a,a.length)
return a[b]},
bT(a,b,c){return new Uint32Array(a.subarray(b,A.yc(b,c,a.length)))},
$ia1:1,
$ipt:1}
A.fx.prototype={
ga4(a){return B.bT},
gk(a){return a.length},
i(a,b){A.cf(b,a,a.length)
return a[b]},
$ia1:1,
$ipu:1}
A.d2.prototype={
ga4(a){return B.bU},
gk(a){return a.length},
i(a,b){A.cf(b,a,a.length)
return a[b]},
bT(a,b,c){return new Uint8Array(a.subarray(b,A.yc(b,c,a.length)))},
$ia1:1,
$id2:1,
$ibh:1}
A.hh.prototype={}
A.hi.prototype={}
A.hj.prototype={}
A.hk.prototype={}
A.bt.prototype={
h(a){return A.hA(v.typeUniverse,this,a)},
I(a){return A.xT(v.typeUniverse,this,a)}}
A.jX.prototype={}
A.ts.prototype={
j(a){return A.bb(this.a,null)}}
A.jT.prototype={
j(a){return this.a}}
A.hw.prototype={$ic4:1}
A.qv.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:10}
A.qu.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:141}
A.qw.prototype={
$0(){this.a.$0()},
$S:1}
A.qx.prototype={
$0(){this.a.$0()},
$S:1}
A.kw.prototype={
l5(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.cH(new A.tr(this,b),0),a)
else throw A.a(A.P("`setTimeout()` not found."))},
l6(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.cH(new A.tq(this,a,Date.now(),b),0),a)
else throw A.a(A.P("Periodic timer."))},
u(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.a(A.P("Canceling a timer."))}}
A.tr.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.tq.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.b.hy(s,o)}q.c=p
r.d.$1(q)},
$S:1}
A.h_.prototype={
U(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.aE(a)
else{s=r.a
if(r.$ti.h("o<1>").b(a))s.hG(a)
else s.bW(a)}},
L(){return this.U(null)},
b7(a,b){var s
if(b==null)b=A.cM(a)
s=this.a
if(this.b)s.ac(new A.a2(a,b))
else s.T(new A.a2(a,b))},
ab(a){return this.b7(a,null)},
$icV:1}
A.tS.prototype={
$1(a){return this.a.$2(0,a)},
$S:11}
A.tT.prototype={
$2(a,b){this.a.$2(1,new A.fa(a,b))},
$S:104}
A.uo.prototype={
$2(a,b){this.a(a,b)},
$S:106}
A.tQ.prototype={
$0(){var s,r=this.a,q=r.a
q===$&&A.L()
s=q.b
if((s&1)!==0?(q.ga6().e&4)!==0:(s&2)===0){r.b=!0
return}r=r.c!=null?2:0
this.b.$2(r,null)},
$S:0}
A.tR.prototype={
$1(a){var s=this.a.c!=null?2:0
this.b.$2(s,null)},
$S:10}
A.jH.prototype={
l0(a,b){var s=new A.qz(a)
this.a=A.bI(new A.qB(this,a),new A.qC(s),null,new A.qD(this,s),!1,b)}}
A.qz.prototype={
$0(){A.eS(new A.qA(this.a))},
$S:1}
A.qA.prototype={
$0(){this.a.$2(0,null)},
$S:0}
A.qC.prototype={
$0(){this.a.$0()},
$S:0}
A.qD.prototype={
$0(){var s=this.a
if(s.b){s.b=!1
this.b.$0()}},
$S:0}
A.qB.prototype={
$0(){var s=this.a,r=s.a
r===$&&A.L()
if((r.b&4)===0){s.c=new A.l($.m,t._)
if(s.b){s.b=!1
A.eS(new A.qy(this.b))}return s.c}},
$S:131}
A.qy.prototype={
$0(){this.a.$2(2,null)},
$S:0}
A.hd.prototype={
j(a){return"IterationMarker("+this.b+", "+A.q(this.a)+")"}}
A.ku.prototype={
gp(){return this.b},
mp(a,b){var s,r,q
a=a
b=b
s=this.a
for(;;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
m(){var s,r,q,p,o=this,n=null,m=0
for(;;){s=o.d
if(s!=null)try{if(s.m()){o.b=s.gp()
return!0}else o.d=null}catch(r){n=r
m=1
o.d=null}q=o.mp(m,n)
if(1===q)return!0
if(0===q){o.b=null
p=o.e
if(p==null||p.length===0){o.a=A.xN
return!1}o.a=p.pop()
m=0
n=null
continue}if(2===q){m=0
n=null
continue}if(3===q){n=o.c
o.c=null
p=o.e
if(p==null||p.length===0){o.b=null
o.a=A.xN
throw n
return!1}o.a=p.pop()
m=1
continue}throw A.a(A.D("sync*"))}return!1},
pS(a){var s,r,q=this
if(a instanceof A.eC){s=a.a()
r=q.e
if(r==null)r=q.e=[]
r.push(q.a)
q.a=s
return 2}else{q.d=J.Z(a)
return 2}}}
A.eC.prototype={
gA(a){return new A.ku(this.a())}}
A.a2.prototype={
j(a){return A.q(this.a)},
$iW:1,
gbA(){return this.b}}
A.aq.prototype={
gaw(){return!0}}
A.di.prototype={
b2(){},
b3(){}}
A.c9.prototype={
sjB(a){throw A.a(A.P(u.t))},
sjC(a){throw A.a(A.P(u.t))},
gbB(){return new A.aq(this,A.p(this).h("aq<1>"))},
gal(){return this.c<4},
dP(){var s=this.r
return s==null?this.r=new A.l($.m,t.D):s},
ix(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
fu(a,b,c,d){var s,r,q,p,o,n,m,l,k,j=this
if((j.c&4)!==0)return A.xC(c,A.p(j).c)
s=A.p(j)
r=$.m
q=d?1:0
p=b!=null?32:0
o=A.jK(r,a,s.c)
n=A.jL(r,b)
m=c==null?A.up():c
l=new A.di(j,o,n,r.b_(m,t.H),r,q|p,s.h("di<1>"))
l.CW=l
l.ch=l
l.ay=j.c&1
k=j.e
j.e=l
l.ch=null
l.CW=k
if(k==null)j.d=l
else k.ch=l
if(j.d===l)A.kN(j.a)
return l},
iq(a){var s,r=this
A.p(r).h("di<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.ix(a)
if((r.c&2)===0&&r.d==null)r.eT()}return null},
ir(a){},
is(a){},
ak(){if((this.c&4)!==0)return new A.aV("Cannot add new events after calling close")
return new A.aV("Cannot add new events while doing an addStream")},
q(a,b){if(!this.gal())throw A.a(this.ak())
this.a1(b)},
af(a,b){var s
if(!this.gal())throw A.a(this.ak())
s=A.ax(a,b)
this.bi(s.a,s.b)},
n(){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.gal())throw A.a(q.ak())
q.c|=4
r=q.dP()
q.bE()
return r},
e4(a,b){var s,r=this
if(!r.gal())throw A.a(r.ak())
r.c|=8
s=A.By(r,a,!1)
r.f=s
return s.a},
iW(a){return this.e4(a,null)},
N(a){this.a1(a)},
a9(a,b){this.bi(a,b)},
Z(){var s=this.f
s.toString
this.f=null
this.c&=4294967287
s.a.aE(null)},
f8(a){var s,r,q,p=this,o=p.c
if((o&2)!==0)throw A.a(A.D(u.c))
s=p.d
if(s==null)return
r=o&1
p.c=o^3
while(s!=null){o=s.ay
if((o&1)===r){s.ay=o|2
a.$1(s)
o=s.ay^=1
q=s.ch
if((o&4)!==0)p.ix(s)
s.ay&=4294967293
s=q}else s=s.ch}p.c&=4294967293
if(p.d==null)p.eT()},
eT(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.aE(null)}A.kN(this.b)},
$iaj:1,
$ibH:1,
sjA(a){return this.a=a},
sjz(a){return this.b=a}}
A.ds.prototype={
gal(){return A.c9.prototype.gal.call(this)&&(this.c&2)===0},
ak(){if((this.c&2)!==0)return new A.aV(u.c)
return this.kN()},
a1(a){var s=this,r=s.d
if(r==null)return
if(r===s.e){s.c|=2
r.N(a)
s.c&=4294967293
if(s.d==null)s.eT()
return}s.f8(new A.tn(s,a))},
bi(a,b){if(this.d==null)return
this.f8(new A.tp(this,a,b))},
bE(){var s=this
if(s.d!=null)s.f8(new A.to(s))
else s.r.aE(null)}}
A.tn.prototype={
$1(a){a.N(this.b)},
$S(){return this.a.$ti.h("~(aw<1>)")}}
A.tp.prototype={
$1(a){a.a9(this.b,this.c)},
$S(){return this.a.$ti.h("~(aw<1>)")}}
A.to.prototype={
$1(a){a.Z()},
$S(){return this.a.$ti.h("~(aw<1>)")}}
A.h0.prototype={
a1(a){var s
for(s=this.d;s!=null;s=s.ch)s.bd(new A.bx(a))},
bi(a,b){var s
for(s=this.d;s!=null;s=s.ch)s.bd(new A.em(a,b))},
bE(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.bd(B.z)
else this.r.aE(null)}}
A.mW.prototype={
$0(){var s,r,q,p,o,n,m=null
try{m=this.a.$0()}catch(q){s=A.F(q)
r=A.K(q)
p=s
o=r
n=A.dv(p,o)
if(n==null)p=new A.a2(p,o)
else p=n
this.b.ac(p)
return}this.b.be(m)},
$S:0}
A.mZ.prototype={
$2(a,b){var s=this,r=s.a,q=--r.b
if(r.a!=null){r.a=null
r.d=a
r.c=b
if(q===0||s.c)s.d.ac(new A.a2(a,b))}else if(q===0&&!s.c){q=r.d
q.toString
r=r.c
r.toString
s.d.ac(new A.a2(q,r))}},
$S:5}
A.mY.prototype={
$1(a){var s,r,q,p,o,n,m=this,l=m.a,k=--l.b,j=l.a
if(j!=null){J.kY(j,m.b,a)
if(J.z(k,0)){l=m.d
s=A.u([],l.h("w<0>"))
for(q=j,p=q.length,o=0;o<q.length;q.length===p||(0,A.a6)(q),++o){r=q[o]
n=r
if(n==null)n=l.a(n)
J.hO(s,n)}m.c.bW(s)}}else if(J.z(k,0)&&!m.f){s=l.d
s.toString
l=l.c
l.toString
m.c.ac(new A.a2(s,l))}},
$S(){return this.d.h("E(0)")}}
A.mP.prototype={
$2(a,b){if(!this.a.b(a))throw A.a(a)
return this.c.$2(a,b)},
$S(){return this.d.h("0/(k,ad)")}}
A.mQ.prototype={
$1(a){var s,r,q,p,o,n,m=this
if(a===0){s=A.u([],m.c.h("w<0>"))
for(r=m.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.a6)(r),++p){o=r[p]
n=o.b
if(n==null)o.$ti.c.a(n)
s.push(n)}m.a.U(s)}else{s=A.u([],t.b9)
for(r=m.b,q=r.length,p=0;p<r.length;r.length===q||(0,A.a6)(r),++p)s.push(r[p].c)
q=A.u([],m.c.h("w<0?>"))
for(n=r.length,p=0;p<r.length;r.length===n||(0,A.a6)(r),++p)q.push(r[p].b)
m.a.ab(new A.dX(B.c.jj(s,A.DM()),a))}},
$S:7}
A.mU.prototype={
$1(a){var s=this,r=s.a,q=s.b
if(a===0)r.U(new A.Q(q.gjQ(),s.c.gjQ()))
else{q=q.c
r.ab(new A.dX(q==null?s.c.c:q,a))}},
$S:7}
A.dX.prototype={
j(a){var s,r,q="ParallelWaitError",p=this.c
if(p==null){p=this.d
s=p<=1
if(s)return q
return"ParallelWaitError("+p+" errors)"}s=this.d
r=s>1
if(r)s="("+s+" errors)"
else s=""
return q+s+": "+A.q(p.a)},
gbA(){var s=this.c
s=s==null?null:s.b
return s==null?A.W.prototype.gbA.call(this):s}}
A.bN.prototype={
gjQ(){var s=this.b
if(s==null)this.$ti.c.a(s)
return s},
mI(a){this.a.bb(new A.rp(this,a),new A.rq(this,a),t.P)}}
A.rp.prototype={
$1(a){this.a.b=a
this.b.$1(0)},
$S(){return this.a.$ti.h("E(1)")}}
A.rq.prototype={
$2(a,b){this.a.c=new A.a2(a,b)
this.b.$1(1)},
$S:6}
A.ro.prototype={
$1(a){var s=this.a,r=s.a+=a
if(++s.b===this.b.length)this.c.$1(r)},
$S:7}
A.dj.prototype={
b7(a,b){if((this.a.a&30)!==0)throw A.a(A.D("Future already completed"))
this.ac(A.ax(a,b))},
ab(a){return this.b7(a,null)},
$icV:1}
A.aa.prototype={
U(a){var s=this.a
if((s.a&30)!==0)throw A.a(A.D("Future already completed"))
s.aE(a)},
L(){return this.U(null)},
ac(a){this.a.T(a)}}
A.N.prototype={
U(a){var s=this.a
if((s.a&30)!==0)throw A.a(A.D("Future already completed"))
s.be(a)},
L(){return this.U(null)},
ac(a){this.a.ac(a)}}
A.bj.prototype={
oz(a){if((this.c&15)!==6)return!0
return this.b.b.dA(this.d,a.a,t.y,t.K)},
o0(a){var s,r=this.e,q=null,p=t.z,o=t.K,n=a.a,m=this.b.b
if(t.ng.b(r))q=m.hc(r,n,a.b,p,o,t.l)
else q=m.dA(r,n,p,o)
try{p=q
return p}catch(s){if(t.do.b(A.F(s))){if((this.c&1)!==0)throw A.a(A.I("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.a(A.I("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.l.prototype={
bb(a,b,c){var s,r,q=$.m
if(q===B.d){if(b!=null&&!t.ng.b(b)&&!t.mq.b(b))throw A.a(A.aX(b,"onError",u.w))}else{a=q.bN(a,c.h("0/"),this.$ti.c)
if(b!=null)b=A.yp(b,q)}s=new A.l($.m,c.h("l<0>"))
r=b==null?1:3
this.ck(new A.bj(s,r,a,b,this.$ti.h("@<1>").I(c).h("bj<1,2>")))
return s},
aK(a,b){return this.bb(a,null,b)},
iK(a,b,c){var s=new A.l($.m,c.h("l<0>"))
this.ck(new A.bj(s,19,a,b,this.$ti.h("@<1>").I(c).h("bj<1,2>")))
return s},
lI(){var s,r
if(((this.a|=1)&4)!==0){s=this
do s=s.c
while(r=s.a,(r&4)!==0)
s.a=r|1}},
j3(a){var s=this.$ti,r=$.m,q=new A.l(r,s)
if(r!==B.d)a=A.yp(a,r)
this.ck(new A.bj(q,2,null,a,s.h("bj<1,1>")))
return q},
J(a){var s=this.$ti,r=$.m,q=new A.l(r,s)
if(r!==B.d)a=r.b_(a,t.z)
this.ck(new A.bj(q,8,a,null,s.h("bj<1,1>")))
return q},
mu(a){this.a=this.a&1|16
this.c=a},
dN(a){this.a=a.a&30|this.a&1
this.c=a.c},
ck(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.ck(a)
return}s.dN(r)}s.b.bR(new A.rr(s,a))}},
im(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.im(a)
return}n.dN(s)}m.a=n.dV(a)
n.b.bR(new A.rw(m,n))}},
d_(){var s=this.c
this.c=null
return this.dV(s)},
dV(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
be(a){var s,r=this
if(r.$ti.h("o<1>").b(a))A.ru(a,r,!0)
else{s=r.d_()
r.a=8
r.c=a
A.dn(r,s)}},
bW(a){var s=this,r=s.d_()
s.a=8
s.c=a
A.dn(s,r)},
lk(a){var s,r,q,p=this
if((a.a&16)!==0){s=p.b
r=a.b
s=!(s===r||s.gbm()===r.gbm())}else s=!1
if(s)return
q=p.d_()
p.dN(a)
A.dn(p,q)},
ac(a){var s=this.d_()
this.mu(a)
A.dn(this,s)},
lj(a,b){this.ac(new A.a2(a,b))},
aE(a){if(this.$ti.h("o<1>").b(a)){this.hG(a)
return}this.hE(a)},
hE(a){this.a^=2
this.b.bR(new A.rt(this,a))},
hG(a){A.ru(a,this,!1)
return},
T(a){this.a^=2
this.b.bR(new A.rs(this,a))},
oW(a,b){var s,r,q,p=this,o={}
if((p.a&24)!==0){o=new A.l($.m,p.$ti)
o.aE(p)
return o}s=p.$ti
r=$.m
q=new A.l(r,s)
o.a=null
o.a=A.pp(a,new A.rC(p,q,r,r.b_(b,s.h("1/"))))
p.bb(new A.rD(o,p,q),new A.rE(o,q),t.P)
return q},
$io:1}
A.rr.prototype={
$0(){A.dn(this.a,this.b)},
$S:0}
A.rw.prototype={
$0(){A.dn(this.b,this.a.a)},
$S:0}
A.rv.prototype={
$0(){A.ru(this.a.a,this.b,!0)},
$S:0}
A.rt.prototype={
$0(){this.a.bW(this.b)},
$S:0}
A.rs.prototype={
$0(){this.a.ac(this.b)},
$S:0}
A.rz.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.bv(q.d,t.z)}catch(p){s=A.F(p)
r=A.K(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.cM(q)
n=k.a
n.c=new A.a2(q,o)
q=n}q.b=!0
return}if(j instanceof A.l&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.l){m=k.b.a
l=new A.l(m.b,m.$ti)
j.bb(new A.rA(l,m),new A.rB(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.rA.prototype={
$1(a){this.a.lk(this.b)},
$S:10}
A.rB.prototype={
$2(a,b){this.a.ac(new A.a2(a,b))},
$S:6}
A.ry.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
o=p.$ti
q.c=p.b.b.dA(p.d,this.b,o.h("2/"),o.c)}catch(n){s=A.F(n)
r=A.K(n)
q=s
p=r
if(p==null)p=A.cM(q)
o=this.a
o.c=new A.a2(q,p)
o.b=!0}},
$S:0}
A.rx.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.oz(s)&&p.a.e!=null){p.c=p.a.o0(s)
p.b=!1}}catch(o){r=A.F(o)
q=A.K(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.cM(p)
m=l.b
m.c=new A.a2(p,n)
p=m}p.b=!0}},
$S:0}
A.rC.prototype={
$0(){var s,r,q,p,o,n=this
try{n.b.be(n.c.bv(n.d,n.a.$ti.h("1/")))}catch(q){s=A.F(q)
r=A.K(q)
p=s
o=r
if(o==null)o=A.cM(p)
n.b.ac(new A.a2(p,o))}},
$S:0}
A.rD.prototype={
$1(a){var s=this.a.a
if(s.b!=null){s.u()
this.c.bW(a)}},
$S(){return this.b.$ti.h("E(1)")}}
A.rE.prototype={
$2(a,b){var s=this.a.a
if(s.b!=null){s.u()
this.b.ac(new A.a2(a,b))}},
$S:6}
A.jG.prototype={}
A.C.prototype={
gaw(){return!1},
n_(a,b){var s,r=null,q={}
q.a=null
s=this.gaw()?q.a=new A.ds(r,r,b.h("ds<0>")):q.a=new A.cC(r,r,r,r,b.h("cC<0>"))
s.sjA(new A.oE(q,this,a))
return q.a.gbB()},
nT(a,b,c,d){var s,r={},q=new A.l($.m,d.h("l<0>"))
r.a=b
s=this.B(null,!0,new A.oJ(r,q),q.gf1())
s.bt(new A.oK(r,this,c,s,q,d))
return q},
gk(a){var s={},r=new A.l($.m,t.hy)
s.a=0
this.B(new A.oL(s,this),!0,new A.oM(s,r),r.gf1())
return r},
gah(a){var s=new A.l($.m,A.p(this).h("l<C.T>")),r=this.B(null,!0,new A.oF(s),s.gf1())
r.bt(new A.oG(this,r,s))
return s}}
A.oE.prototype={
$0(){var s=this.b,r=this.a,q=r.a.gdM(),p=s.az(null,r.a.gaG(),q)
p.bt(new A.oD(r,s,this.c,p))
r.a.sjz(p.ge7())
if(!s.gaw()){s=r.a
s.sjB(p.geq())
s.sjC(p.gbO())}},
$S:0}
A.oD.prototype={
$1(a){var s,r,q,p,o,n,m,l=this,k=null
try{k=l.c.$1(a)}catch(p){s=A.F(p)
r=A.K(p)
o=s
n=r
m=A.dv(o,n)
if(m==null)m=new A.a2(o,n==null?A.cM(o):n)
q=m
l.a.a.af(q.a,q.b)
return}if(k!=null){o=l.d
o.ai()
l.a.a.iW(k).J(o.gbO())}},
$S(){return A.p(this.b).h("~(C.T)")}}
A.oJ.prototype={
$0(){this.b.be(this.a.a)},
$S:0}
A.oK.prototype={
$1(a){var s=this,r=s.a,q=s.f
A.Dv(new A.oH(r,s.c,a,q),new A.oI(r,q),A.CN(s.d,s.e))},
$S(){return A.p(this.b).h("~(C.T)")}}
A.oH.prototype={
$0(){return this.b.$2(this.a.a,this.c)},
$S(){return this.d.h("0()")}}
A.oI.prototype={
$1(a){this.a.a=a},
$S(){return this.b.h("E(0)")}}
A.oL.prototype={
$1(a){++this.a.a},
$S(){return A.p(this.b).h("~(C.T)")}}
A.oM.prototype={
$0(){this.b.be(this.a.a)},
$S:0}
A.oF.prototype={
$0(){var s,r=A.fG(),q=new A.aV("No element")
A.j_(q,r)
s=A.dv(q,r)
if(s==null)s=new A.a2(q,r)
this.a.ac(s)},
$S:0}
A.oG.prototype={
$1(a){A.CO(this.b,this.c,a)},
$S(){return A.p(this.a).h("~(C.T)")}}
A.fI.prototype={
gaw(){return this.a.gaw()},
B(a,b,c,d){return this.a.B(a,b,c,d)},
O(a){return this.B(a,null,null,null)},
az(a,b,c){return this.B(a,null,b,c)},
bq(a,b,c){return this.B(a,b,c,null)}}
A.jj.prototype={}
A.cA.prototype={
gbB(){return new A.a4(this,A.p(this).h("a4<1>"))},
gm5(){if((this.b&8)===0)return this.a
return this.a.c},
bY(){var s,r,q=this
if((q.b&8)===0){s=q.a
return s==null?q.a=new A.ex():s}r=q.a
s=r.c
return s==null?r.c=new A.ex():s},
ga6(){var s=this.a
return(this.b&8)!==0?s.c:s},
ap(){if((this.b&4)!==0)return new A.aV("Cannot add event after closing")
return new A.aV("Cannot add event while adding a stream")},
e4(a,b){var s,r,q,p=this,o=p.b
if(o>=4)throw A.a(p.ap())
if((o&2)!==0){o=new A.l($.m,t._)
o.aE(null)
return o}o=p.a
s=b===!0
r=new A.l($.m,t._)
q=s?A.Bz(p):p.gdM()
q=a.B(p.geR(),s,p.geX(),q)
s=p.b
if((s&1)!==0?(p.ga6().e&4)!==0:(s&2)===0)q.ai()
p.a=new A.kr(o,r,q)
p.b|=8
return r},
iW(a){return this.e4(a,null)},
dP(){var s=this.c
if(s==null)s=this.c=(this.b&2)!==0?$.cJ():new A.l($.m,t.D)
return s},
q(a,b){if(this.b>=4)throw A.a(this.ap())
this.N(b)},
af(a,b){var s
if(this.b>=4)throw A.a(this.ap())
s=A.ax(a,b)
this.a9(s.a,s.b)},
mU(a){return this.af(a,null)},
n(){var s=this,r=s.b
if((r&4)!==0)return s.dP()
if(r>=4)throw A.a(s.ap())
s.hI()
return s.dP()},
hI(){var s=this.b|=4
if((s&1)!==0)this.bE()
else if((s&3)===0)this.bY().q(0,B.z)},
N(a){var s=this.b
if((s&1)!==0)this.a1(a)
else if((s&3)===0)this.bY().q(0,new A.bx(a))},
a9(a,b){var s=this.b
if((s&1)!==0)this.bi(a,b)
else if((s&3)===0)this.bY().q(0,new A.em(a,b))},
Z(){var s=this.a
this.a=s.c
this.b&=4294967287
s.a.aE(null)},
fu(a,b,c,d){var s,r,q,p=this
if((p.b&3)!==0)throw A.a(A.D("Stream has already been listened to."))
s=A.BR(p,a,b,c,d,A.p(p).c)
r=p.gm5()
if(((p.b|=1)&8)!==0){q=p.a
q.c=s
q.b.am()}else p.a=s
s.mv(r)
s.fa(new A.th(p))
return s},
iq(a){var s,r,q,p,o,n,m,l=this,k=null
if((l.b&8)!==0)k=l.a.u()
l.a=null
l.b=l.b&4294967286|2
s=l.r
if(s!=null)if(k==null)try{r=s.$0()
if(r instanceof A.l)k=r}catch(o){q=A.F(o)
p=A.K(o)
n=new A.l($.m,t.D)
n.T(new A.a2(q,p))
k=n}else k=k.J(s)
m=new A.tg(l)
if(k!=null)k=k.J(m)
else m.$0()
return k},
ir(a){if((this.b&8)!==0)this.a.b.ai()
A.kN(this.e)},
is(a){if((this.b&8)!==0)this.a.b.am()
A.kN(this.f)},
$iaj:1,
$ibH:1,
sjA(a){return this.d=a},
sjB(a){return this.e=a},
sjC(a){return this.f=a},
sjz(a){return this.r=a}}
A.th.prototype={
$0(){A.kN(this.a.d)},
$S:0}
A.tg.prototype={
$0(){var s=this.a.c
if(s!=null&&(s.a&30)===0)s.aE(null)},
$S:0}
A.kv.prototype={
a1(a){this.ga6().N(a)},
bi(a,b){this.ga6().a9(a,b)},
bE(){this.ga6().Z()}}
A.jI.prototype={
a1(a){this.ga6().bd(new A.bx(a))},
bi(a,b){this.ga6().bd(new A.em(a,b))},
bE(){this.ga6().bd(B.z)}}
A.bL.prototype={}
A.cC.prototype={}
A.a4.prototype={
gv(a){return(A.dZ(this.a)^892482866)>>>0},
D(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.a4&&b.a===this.a}}
A.cz.prototype={
dT(){return this.w.iq(this)},
b2(){this.w.ir(this)},
b3(){this.w.is(this)}}
A.fZ.prototype={
u(){var s=this.b.u()
return s.J(new A.qr(this))}}
A.qs.prototype={
$2(a,b){var s=this.a
s.a9(a,b)
s.Z()},
$S:6}
A.qr.prototype={
$0(){this.a.a.aE(null)},
$S:1}
A.kr.prototype={}
A.aw.prototype={
mv(a){var s=this
if(a==null)return
s.r=a
if(a.c!=null){s.e=(s.e|128)>>>0
a.dH(s)}},
bt(a){this.a=A.jK(this.d,a,A.p(this).h("aw.T"))},
dq(a){var s=this,r=s.e
if(a==null)s.e=(r&4294967263)>>>0
else s.e=(r|32)>>>0
s.b=A.jL(s.d,a)},
aJ(a){var s,r=this,q=r.e
if((q&8)!==0)return
r.e=(q+256|4)>>>0
if(a!=null)a.J(r.gbO())
if(q<256){s=r.r
if(s!=null)if(s.a===1)s.a=3}if((q&4)===0&&(r.e&64)===0)r.fa(r.gcW())},
ai(){return this.aJ(null)},
am(){var s=this,r=s.e
if((r&8)!==0)return
if(r>=256){r=s.e=r-256
if(r<256)if((r&128)!==0&&s.r.c!=null)s.r.dH(s)
else{r=(r&4294967291)>>>0
s.e=r
if((r&64)===0)s.fa(s.gcX())}}},
u(){var s=this,r=(s.e&4294967279)>>>0
s.e=r
if((r&8)===0)s.eU()
r=s.f
return r==null?$.cJ():r},
eU(){var s,r=this,q=r.e=(r.e|8)>>>0
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.dT()},
N(a){var s=this.e
if((s&8)!==0)return
if(s<64)this.a1(a)
else this.bd(new A.bx(a))},
a9(a,b){var s
if(t.C.b(a))A.j_(a,b)
s=this.e
if((s&8)!==0)return
if(s<64)this.bi(a,b)
else this.bd(new A.em(a,b))},
Z(){var s=this,r=s.e
if((r&8)!==0)return
r=(r|2)>>>0
s.e=r
if(r<64)s.bE()
else s.bd(B.z)},
b2(){},
b3(){},
dT(){return null},
bd(a){var s,r=this,q=r.r
if(q==null)q=r.r=new A.ex()
q.q(0,a)
s=r.e
if((s&128)===0){s=(s|128)>>>0
r.e=s
if(s<256)q.dH(r)}},
a1(a){var s=this,r=s.e
s.e=(r|64)>>>0
s.d.c9(s.a,a,A.p(s).h("aw.T"))
s.e=(s.e&4294967231)>>>0
s.eW((r&4)!==0)},
bi(a,b){var s,r=this,q=r.e,p=new A.qN(r,a,b)
if((q&1)!==0){r.e=(q|16)>>>0
r.eU()
s=r.f
if(s!=null&&s!==$.cJ())s.J(p)
else p.$0()}else{p.$0()
r.eW((q&4)!==0)}},
bE(){var s,r=this,q=new A.qM(r)
r.eU()
r.e=(r.e|16)>>>0
s=r.f
if(s!=null&&s!==$.cJ())s.J(q)
else q.$0()},
fa(a){var s=this,r=s.e
s.e=(r|64)>>>0
a.$0()
s.e=(s.e&4294967231)>>>0
s.eW((r&4)!==0)},
eW(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=(p&4294967167)>>>0
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p=(p&4294967291)>>>0
q.e=p}}for(;;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=(p^64)>>>0
if(r)q.b2()
else q.b3()
p=(q.e&4294967231)>>>0
q.e=p}if((p&128)!==0&&p<256)q.r.dH(q)},
$iae:1}
A.qN.prototype={
$0(){var s,r,q,p=this.a,o=p.e
if((o&8)!==0&&(o&16)===0)return
p.e=(o|64)>>>0
s=p.b
o=this.b
r=t.K
q=p.d
if(t.r.b(s))q.hd(s,o,this.c,r,t.l)
else q.c9(s,o,r)
p.e=(p.e&4294967231)>>>0},
$S:0}
A.qM.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=(r|74)>>>0
s.d.dz(s.c)
s.e=(s.e&4294967231)>>>0},
$S:0}
A.eB.prototype={
B(a,b,c,d){return this.a.fu(a,d,c,b===!0)},
O(a){return this.B(a,null,null,null)},
az(a,b,c){return this.B(a,null,b,c)},
bq(a,b,c){return this.B(a,b,c,null)}}
A.jS.prototype={
gbs(){return this.a},
sbs(a){return this.a=a}}
A.bx.prototype={
ha(a){a.a1(this.b)}}
A.em.prototype={
ha(a){a.bi(this.b,this.c)}}
A.rg.prototype={
ha(a){a.bE()},
gbs(){return null},
sbs(a){throw A.a(A.D("No events after a done."))}}
A.ex.prototype={
dH(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.eS(new A.t1(s,a))
s.a=1},
q(a,b){var s=this,r=s.c
if(r==null)s.b=s.c=b
else{r.sbs(b)
s.c=b}}}
A.t1.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.gbs()
q.b=r
if(r==null)q.c=null
s.ha(this.b)},
$S:0}
A.en.prototype={
bt(a){},
dq(a){},
aJ(a){var s=this.a
if(s>=0){this.a=s+2
if(a!=null)a.J(this.gbO())}},
ai(){return this.aJ(null)},
am(){var s=this,r=s.a-2
if(r<0)return
if(r===0){s.a=1
A.eS(s.gij())}else s.a=r},
u(){this.a=-1
this.c=null
return $.cJ()},
m4(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.dz(s)}}else r.a=q},
$iae:1}
A.bP.prototype={
gp(){if(this.c)return this.b
return null},
m(){var s,r=this,q=r.a
if(q!=null){if(r.c){s=new A.l($.m,t.B)
r.b=s
r.c=!1
q.am()
return s}throw A.a(A.D("Already waiting for next."))}return r.lJ()},
lJ(){var s,r,q=this,p=q.b
if(p!=null){s=new A.l($.m,t.B)
q.b=s
r=p.B(q.glX(),!0,q.glZ(),q.gm0())
if(q.b!=null)q.a=r
return s}return $.z7()},
u(){var s=this,r=s.a,q=s.b
s.b=null
if(r!=null){s.a=null
if(!s.c)q.aE(!1)
else s.c=!1
return r.u()}return $.cJ()},
lY(a){var s,r,q=this
if(q.a==null)return
s=q.b
q.b=a
q.c=!0
s.be(!0)
if(q.c){r=q.a
if(r!=null)r.ai()}},
m1(a,b){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.ac(new A.a2(a,b))
else q.T(new A.a2(a,b))},
m_(){var s=this,r=s.a,q=s.b
s.b=s.a=null
if(r!=null)q.bW(!1)
else q.hE(!1)}}
A.dm.prototype={
B(a,b,c,d){return A.xC(c,this.$ti.c)},
O(a){return this.B(a,null,null,null)},
az(a,b,c){return this.B(a,null,b,c)},
bq(a,b,c){return this.B(a,b,c,null)},
gaw(){return!0}}
A.bz.prototype={
B(a,b,c,d){var s=null,r=new A.hg(s,s,s,s,this.$ti.h("hg<1>"))
r.d=new A.t_(this,r)
return r.fu(a,d,c,b===!0)},
O(a){return this.B(a,null,null,null)},
az(a,b,c){return this.B(a,null,b,c)},
bq(a,b,c){return this.B(a,b,c,null)},
gaw(){return this.a}}
A.t_.prototype={
$0(){this.a.b.$1(this.b)},
$S:0}
A.hg.prototype={
mY(a){var s=this.b
if(s>=4)throw A.a(this.ap())
if((s&1)!==0)this.ga6().N(a)},
mV(a,b){var s=this.b
if(s>=4)throw A.a(this.ap())
if((s&1)!==0){s=this.ga6()
s.a9(a,b==null?B.t:b)}},
j5(){var s=this,r=s.b
if((r&4)!==0)return
if(r>=4)throw A.a(s.ap())
r|=4
s.b=r
if((r&1)!==0)s.ga6().Z()},
$ibZ:1}
A.tW.prototype={
$0(){return this.a.ac(this.b)},
$S:0}
A.tV.prototype={
$2(a,b){A.CM(this.a,this.b,new A.a2(a,b))},
$S:5}
A.tX.prototype={
$0(){return this.a.be(this.b)},
$S:0}
A.b9.prototype={
gaw(){return this.a.gaw()},
B(a,b,c,d){var s=A.p(this),r=$.m,q=b===!0?1:0,p=d!=null?32:0,o=A.jK(r,a,s.h("b9.T")),n=A.jL(r,d),m=c==null?A.up():c
s=new A.er(this,o,n,r.b_(m,t.H),r,q|p,s.h("er<b9.S,b9.T>"))
s.x=this.a.az(s.gfb(),s.gfd(),s.gff())
return s},
O(a){return this.B(a,null,null,null)},
az(a,b,c){return this.B(a,null,b,c)},
bq(a,b,c){return this.B(a,b,c,null)}}
A.er.prototype={
N(a){if((this.e&2)!==0)return
this.bU(a)},
a9(a,b){if((this.e&2)!==0)return
this.eO(a,b)},
b2(){var s=this.x
if(s!=null)s.ai()},
b3(){var s=this.x
if(s!=null)s.am()},
dT(){var s=this.x
if(s!=null){this.x=null
return s.u()}return null},
fc(a){this.w.i9(a,this)},
fg(a,b){this.a9(a,b)},
fe(){this.Z()}}
A.ce.prototype={
i9(a,b){var s,r,q,p=null
try{p=this.b.$1(a)}catch(q){s=A.F(q)
r=A.K(q)
A.y7(b,s,r)
return}if(p)b.N(a)}}
A.aL.prototype={
i9(a,b){var s,r,q,p=null
try{p=this.b.$1(a)}catch(q){s=A.F(q)
r=A.K(q)
A.y7(b,s,r)
return}b.N(p)}}
A.h9.prototype={
q(a,b){var s=this.a
if((s.e&2)!==0)A.r(A.D("Stream is already closed"))
s.bU(b)},
af(a,b){this.a.a9(a,b)},
n(){var s=this.a
if((s.e&2)!==0)A.r(A.D("Stream is already closed"))
s.hx()},
$iaj:1}
A.ez.prototype={
N(a){if((this.e&2)!==0)throw A.a(A.D("Stream is already closed"))
this.bU(a)},
a9(a,b){if((this.e&2)!==0)throw A.a(A.D("Stream is already closed"))
this.eO(a,b)},
Z(){if((this.e&2)!==0)throw A.a(A.D("Stream is already closed"))
this.hx()},
b2(){var s=this.x
if(s!=null)s.ai()},
b3(){var s=this.x
if(s!=null)s.am()},
dT(){var s=this.x
if(s!=null){this.x=null
return s.u()}return null},
fc(a){var s,r,q,p
try{q=this.w
q===$&&A.L()
q.q(0,a)}catch(p){s=A.F(p)
r=A.K(p)
this.a9(s,r)}},
fg(a,b){var s,r,q,p
try{q=this.w
q===$&&A.L()
q.af(a,b)}catch(p){s=A.F(p)
r=A.K(p)
if(s===a)this.a9(a,b)
else this.a9(s,r)}},
fe(){var s,r,q,p
try{this.x=null
q=this.w
q===$&&A.L()
q.n()}catch(p){s=A.F(p)
r=A.K(p)
this.a9(s,r)}}}
A.c8.prototype={
gaw(){return this.b.gaw()},
B(a,b,c,d){var s=this.$ti,r=$.m,q=b===!0?1:0,p=d!=null?32:0,o=A.jK(r,a,s.y[1]),n=A.jL(r,d),m=c==null?A.up():c,l=new A.ez(o,n,r.b_(m,t.H),r,q|p,s.h("ez<1,2>"))
l.w=this.a.$1(new A.h9(l))
l.x=this.b.az(l.gfb(),l.gfd(),l.gff())
return l},
O(a){return this.B(a,null,null,null)},
az(a,b,c){return this.B(a,null,b,c)},
bq(a,b,c){return this.B(a,b,c,null)}}
A.kq.prototype={
bj(a){return this.a.$1(a)}}
A.tN.prototype={}
A.tP.prototype={}
A.tO.prototype={}
A.tL.prototype={}
A.tM.prototype={}
A.tK.prototype={}
A.tH.prototype={}
A.kF.prototype={}
A.tG.prototype={}
A.tF.prototype={}
A.tJ.prototype={}
A.tI.prototype={}
A.kE.prototype={
nU(a,b,c,d,e){return this.b.$5(a,b,c,d,e)}}
A.kG.prototype={}
A.kD.prototype={
cY(a,b,c){var s,r,q,p,o,n,m=this.gfi(),l=m.a
if(l===B.d){A.hJ(b,c)
return}o=l.gh7()
o.toString
s=o
r=$.m
try{$.m=s
m.nU(l,l.gaO(),a,b,c)
$.m=r}catch(n){q=A.F(n)
p=A.K(n)
$.m=r
o=b===q?c:p
s.cY(l,q,o)}},
$iA:1}
A.jQ.prototype={
ghV(){var s=this.ax
return s==null?this.ax=new A.eG(this):s},
gaO(){return this.ay.ghV()},
gbm(){return this.as.a},
dz(a){var s,r,q
try{this.bv(a,t.H)}catch(q){s=A.F(q)
r=A.K(q)
this.cY(this,s,r)}},
c9(a,b,c){var s,r,q
try{this.dA(a,b,t.H,c)}catch(q){s=A.F(q)
r=A.K(q)
this.cY(this,s,r)}},
hd(a,b,c,d,e){var s,r,q
try{this.hc(a,b,c,t.H,d,e)}catch(q){s=A.F(q)
r=A.K(q)
this.cY(this,s,r)}},
fG(a,b){return new A.rb(this,this.b_(a,b),b)},
d7(a){return new A.ra(this,this.b_(a,t.H))},
fH(a,b){return new A.rc(this,this.bN(a,t.H,b),b)},
i(a,b){var s,r,q=this.at
if(q===B.a0)return null
s=q.b
r=s.i(0,b)
return r!=null||s.E(b)?r:this.md(q,b)},
md(a,b){var s,r,q
for(s=a,r=null;;){s=s.a.gh7().gfC()
if(s===B.a0)break
q=s.b
r=q.i(0,b)
if(r!=null||q.E(b)){a.b.l(0,b,r)
break}}return r},
cw(a,b){this.cY(this,a,b)},
ef(a,b){var s=this.Q,r=s.a
return s.b.$5(r,r.gaO(),this,a,b)},
jk(a){return this.ef(null,a)},
bv(a,b){var s=this.a,r=s.a
return s.b.$1$4(r,r.gaO(),this,a,b)},
dA(a,b,c,d){var s=this.b,r=s.a
return s.b.$2$5(r,r.gaO(),this,a,b,c,d)},
hc(a,b,c,d,e,f){var s=this.c,r=s.a
return s.b.$3$6(r,r.gaO(),this,a,b,c,d,e,f)},
b_(a,b){var s=this.d,r=s.a
return s.b.$1$4(r,r.gaO(),this,a,b)},
bN(a,b,c){var s=this.e,r=s.a
return s.b.$2$4(r,r.gaO(),this,a,b,c)},
cF(a,b,c,d){var s=this.f,r=s.a
return s.b.$3$4(r,r.gaO(),this,a,b,c,d)},
jd(a,b){var s=this.r,r=s.a
if(r===B.d)return null
return s.b.$5(r,r.gaO(),this,a,b)},
bR(a){var s=this.w,r=s.a
return s.b.$4(r,r.gaO(),this,a)},
fL(a,b){var s=this.x,r=s.a
return s.b.$5(r,r.gaO(),this,a,b)},
giA(){return this.a},
giC(){return this.b},
giB(){return this.c},
giu(){return this.d},
giv(){return this.e},
git(){return this.f},
ghY(){return this.r},
gfs(){return this.w},
ghS(){return this.x},
ghR(){return this.y},
gio(){return this.z},
gi2(){return this.Q},
gfi(){return this.as},
gfC(){return this.at},
gh7(){return this.ay}}
A.rb.prototype={
$0(){return this.a.bv(this.b,this.c)},
$S(){return this.c.h("0()")}}
A.ra.prototype={
$0(){return this.a.dz(this.b)},
$S:0}
A.rc.prototype={
$1(a){return this.a.c9(this.b,a,this.c)},
$S(){return this.c.h("~(0)")}}
A.km.prototype={
giA(){return B.ca},
giC(){return B.c9},
giB(){return B.c8},
giu(){return B.c6},
giv(){return B.c7},
git(){return B.c5},
ghY(){return B.c1},
gfs(){return B.cb},
ghS(){return B.c0},
ghR(){return B.b6},
gio(){return B.c4},
gi2(){return B.c2},
gfi(){return B.c3},
gfC(){return B.a0},
gh7(){return null},
ghV(){var s=$.t4
return s==null?$.t4=new A.eG(this):s},
gaO(){var s=$.t4
return s==null?$.t4=new A.eG(this):s},
gbm(){return this},
dz(a){var s,r,q
try{if(B.d===$.m){a.$0()
return}A.u9(null,null,this,a)}catch(q){s=A.F(q)
r=A.K(q)
A.hJ(s,r)}},
c9(a,b){var s,r,q
try{if(B.d===$.m){a.$1(b)
return}A.ua(null,null,this,a,b)}catch(q){s=A.F(q)
r=A.K(q)
A.hJ(s,r)}},
hd(a,b,c){var s,r,q
try{if(B.d===$.m){a.$2(b,c)
return}A.w2(null,null,this,a,b,c)}catch(q){s=A.F(q)
r=A.K(q)
A.hJ(s,r)}},
fG(a,b){return new A.t6(this,a,b)},
d7(a){return new A.t5(this,a)},
fH(a,b){return new A.t7(this,a,b)},
i(a,b){return null},
cw(a,b){A.hJ(a,b)},
ef(a,b){return A.yr(null,null,this,a,b)},
jk(a){return this.ef(null,a)},
bv(a){if($.m===B.d)return a.$0()
return A.u9(null,null,this,a)},
dA(a,b){if($.m===B.d)return a.$1(b)
return A.ua(null,null,this,a,b)},
hc(a,b,c){if($.m===B.d)return a.$2(b,c)
return A.w2(null,null,this,a,b,c)},
b_(a){return a},
bN(a){return a},
cF(a){return a},
jd(a,b){return null},
bR(a){A.ub(null,null,this,a)},
fL(a,b){return A.vw(a,b)}}
A.t6.prototype={
$0(){return this.a.bv(this.b,this.c)},
$S(){return this.c.h("0()")}}
A.t5.prototype={
$0(){return this.a.dz(this.b)},
$S:0}
A.t7.prototype={
$1(a){return this.a.c9(this.b,a,this.c)},
$S(){return this.c.h("~(0)")}}
A.eG.prototype={$ia9:1}
A.u8.prototype={
$0(){A.ik(this.a,this.b)},
$S:0}
A.fX.prototype={}
A.cb.prototype={
gk(a){return this.a},
gF(a){return this.a===0},
ga3(){return new A.hb(this,A.p(this).h("hb<1>"))},
E(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.hP(a)},
hP(a){var s=this.d
if(s==null)return!1
return this.bf(this.hM(s,a),a)>=0},
aa(a,b){b.ad(0,new A.rF(this))},
i(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.xF(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.xF(q,b)
return r}else return this.i5(b)},
i5(a){var s,r,q=this.d
if(q==null)return null
s=this.hM(q,a)
r=this.bf(s,a)
return r<0?null:s[r+1]},
l(a,b,c){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
q.hK(s==null?q.b=A.vI():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
q.hK(r==null?q.c=A.vI():r,b,c)}else q.iD(b,c)},
iD(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=A.vI()
s=p.bC(a)
r=o[s]
if(r==null){A.vJ(o,s,[a,b]);++p.a
p.e=null}else{q=p.bf(r,a)
if(q>=0)r[q+1]=b
else{r.push(a,b);++p.a
p.e=null}}},
ad(a,b){var s,r,q,p,o,n=this,m=n.hL()
for(s=m.length,r=A.p(n).y[1],q=0;q<s;++q){p=m[q]
o=n.i(0,p)
b.$2(p,o==null?r.a(o):o)
if(m!==n.e)throw A.a(A.ao(n))}},
hL(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.b4(i.a,null,!1,t.z)
s=i.b
r=0
if(s!=null){q=Object.getOwnPropertyNames(s)
p=q.length
for(o=0;o<p;++o){h[r]=q[o];++r}}n=i.c
if(n!=null){q=Object.getOwnPropertyNames(n)
p=q.length
for(o=0;o<p;++o){h[r]=+q[o];++r}}m=i.d
if(m!=null){q=Object.getOwnPropertyNames(m)
p=q.length
for(o=0;o<p;++o){l=m[q[o]]
k=l.length
for(j=0;j<k;j+=2){h[r]=l[j];++r}}}return i.e=h},
hK(a,b,c){if(a[b]==null){++this.a
this.e=null}A.vJ(a,b,c)},
bC(a){return J.V(a)&1073741823},
hM(a,b){return a[this.bC(b)]},
bf(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2)if(J.z(a[r],b))return r
return-1}}
A.rF.prototype={
$2(a,b){this.a.l(0,a,b)},
$S(){return A.p(this.a).h("~(1,2)")}}
A.dp.prototype={
bC(a){return A.kS(a)&1073741823},
bf(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.h4.prototype={
i(a,b){if(!this.w.$1(b))return null
return this.kP(b)},
l(a,b,c){this.kQ(b,c)},
E(a){if(!this.w.$1(a))return!1
return this.kO(a)},
bC(a){return this.r.$1(a)&1073741823},
bf(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.f,q=0;q<s;q+=2)if(r.$2(a[q],b))return q
return-1}}
A.r9.prototype={
$1(a){return this.a.b(a)},
$S:20}
A.hb.prototype={
gk(a){return this.a.a},
gF(a){return this.a.a===0},
gaP(a){return this.a.a!==0},
gA(a){var s=this.a
return new A.jY(s,s.hL(),this.$ti.h("jY<1>"))},
V(a,b){return this.a.E(b)}}
A.jY.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.a(A.ao(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}}}
A.hf.prototype={
i(a,b){if(!this.y.$1(b))return null
return this.kF(b)},
l(a,b,c){this.kH(b,c)},
E(a){if(!this.y.$1(a))return!1
return this.kE(a)},
H(a,b){if(!this.y.$1(b))return null
return this.kG(b)},
dl(a){return this.x.$1(a)&1073741823},
cA(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=this.w,q=0;q<s;++q)if(r.$2(a[q].a,b))return q
return-1}}
A.rY.prototype={
$1(a){return this.a.b(a)},
$S:20}
A.cc.prototype={
lW(){return new A.cc(A.p(this).h("cc<1>"))},
gA(a){var s=this,r=new A.eu(s,s.r,A.p(s).h("eu<1>"))
r.c=s.e
return r},
gk(a){return this.a},
gF(a){return this.a===0},
gaP(a){return this.a!==0},
V(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return s[b]!=null}else{r=this.ln(b)
return r}},
ln(a){var s=this.d
if(s==null)return!1
return this.bf(s[this.bC(a)],a)>=0},
q(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.hJ(s==null?q.b=A.vL():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.hJ(r==null?q.c=A.vL():r,b)}else return q.lh(b)},
lh(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.vL()
s=q.bC(a)
r=p[s]
if(r==null)p[s]=[q.f_(a)]
else{if(q.bf(r,a)>=0)return!1
r.push(q.f_(a))}return!0},
H(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.hN(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.hN(s.c,b)
else return s.fq(b)},
fq(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bC(a)
r=n[s]
q=o.bf(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.hO(p)
return!0},
au(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.eZ()}},
hJ(a,b){if(a[b]!=null)return!1
a[b]=this.f_(b)
return!0},
hN(a,b){var s
if(a==null)return!1
s=a[b]
if(s==null)return!1
this.hO(s)
delete a[b]
return!0},
eZ(){this.r=this.r+1&1073741823},
f_(a){var s,r=this,q=new A.rZ(a)
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.eZ()
return q},
hO(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.eZ()},
bC(a){return J.V(a)&1073741823},
bf(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.z(a[r].a,b))return r
return-1}}
A.rZ.prototype={}
A.eu.prototype={
gp(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.a(A.ao(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.nC.prototype={
$2(a,b){this.a.l(0,this.b.a(a),this.c.a(b))},
$S:132}
A.d0.prototype={
V(a,b){return!1},
gA(a){var s=this
return new A.k4(s,s.a,s.c,s.$ti.h("k4<1>"))},
gk(a){return this.b},
au(a){var s,r,q,p=this;++p.a
if(p.b===0)return
s=p.c
s.toString
r=s
do{q=r.b
q.toString
r.b=r.c=r.a=null
if(q!==s){r=q
continue}else break}while(!0)
p.c=null
p.b=0},
gah(a){var s
if(this.b===0)throw A.a(A.D("No such element"))
s=this.c
s.toString
return s},
gaQ(a){var s
if(this.b===0)throw A.a(A.D("No such element"))
s=this.c.c
s.toString
return s},
gF(a){return this.b===0},
dQ(a,b,c){var s,r,q=this
if(b.a!=null)throw A.a(A.D("LinkedListEntry is already in a LinkedList"));++q.a
b.a=q
s=q.b
if(s===0){b.b=b
q.c=b.c=b
q.b=s+1
return}r=a.c
r.toString
b.c=r
b.b=a
a.c=r.b=b
q.b=s+1},
fw(a){var s,r,q=this;++q.a
s=a.b
s.c=a.c
a.c.b=s
r=--q.b
a.a=a.b=a.c=null
if(r===0)q.c=null
else if(a===q.c)q.c=s}}
A.k4.prototype={
gp(){var s=this.c
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.a
if(s.b!==r.a)throw A.a(A.ao(s))
if(r.b!==0)r=s.e&&s.d===r.gah(0)
else r=!0
if(r){s.c=null
return!1}s.e=!0
r=s.d
s.c=r
s.d=r.b
return!0}}
A.aH.prototype={
gds(){var s=this.a
if(s==null||this===s.gah(0))return null
return this.c}}
A.y.prototype={
gA(a){return new A.at(a,this.gk(a),A.bo(a).h("at<y.E>"))},
W(a,b){return this.i(a,b)},
gF(a){return this.gk(a)===0},
gaP(a){return!this.gF(a)},
gah(a){if(this.gk(a)===0)throw A.a(A.bW())
return this.i(a,0)},
V(a,b){var s,r=this.gk(a)
for(s=0;s<r;++s){if(J.z(this.i(a,s),b))return!0
if(r!==this.gk(a))throw A.a(A.ao(a))}return!1},
b9(a,b,c){return new A.a8(a,b,A.bo(a).h("@<y.E>").I(c).h("a8<1,2>"))},
aU(a,b){return A.bK(a,b,null,A.bo(a).h("y.E"))},
bP(a,b){return A.bK(a,0,A.bd(b,"count",t.S),A.bo(a).h("y.E"))},
q(a,b){var s=this.gk(a)
this.sk(a,s+1)
this.l(a,s,b)},
e8(a,b){return new A.ag(a,A.bo(a).h("@<y.E>").I(b).h("ag<1,2>"))},
cO(a,b){var s=b==null?A.E3():b
A.j9(a,0,this.gk(a)-1,s)},
kr(a,b,c){A.aN(b,c,this.gk(a))
return A.bK(a,b,c,A.bo(a).h("y.E"))},
fQ(a,b,c,d){var s
A.aN(b,c,this.gk(a))
for(s=b;s<c;++s)this.l(a,s,d)},
R(a,b,c,d,e){var s,r,q,p,o
A.aN(b,c,this.gk(a))
s=c-b
if(s===0)return
A.aI(e,"skipCount")
if(t.j.b(d)){r=e
q=d}else{q=J.l0(d,e).ca(0,!1)
r=0}p=J.ab(q)
if(r+s>p.gk(q))throw A.a(A.wM())
if(r<b)for(o=s-1;o>=0;--o)this.l(a,b+o,p.i(q,r+o))
else for(o=0;o<s;++o)this.l(a,b+o,p.i(q,r+o))},
aj(a,b,c,d){return this.R(a,b,c,d,0)},
cg(a,b,c){var s,r
if(t.j.b(c))this.aj(a,b,b+c.length,c)
else for(s=J.Z(c);s.m();b=r){r=b+1
this.l(a,b,s.gp())}},
j(a){return A.nw(a,"[","]")},
$ix:1,
$in:1,
$it:1}
A.G.prototype={
bk(a,b,c){var s=A.p(this)
return A.wV(this,s.h("G.K"),s.h("G.V"),b,c)},
ad(a,b){var s,r,q,p
for(s=J.Z(this.ga3()),r=A.p(this).h("G.V");s.m();){q=s.gp()
p=this.i(0,q)
b.$2(q,p==null?r.a(p):p)}},
gbl(){return J.dC(this.ga3(),new A.nG(this),A.p(this).h("M<G.K,G.V>"))},
cC(a,b,c,d){var s,r,q,p,o,n=A.T(c,d)
for(s=J.Z(this.ga3()),r=A.p(this).h("G.V");s.m();){q=s.gp()
p=this.i(0,q)
o=b.$2(q,p==null?r.a(p):p)
n.l(0,o.a,o.b)}return n},
E(a){return J.wo(this.ga3(),a)},
gk(a){return J.aM(this.ga3())},
gF(a){return J.l_(this.ga3())},
j(a){return A.nH(this)},
$ia_:1}
A.nG.prototype={
$1(a){var s=this.a,r=s.i(0,a)
if(r==null)r=A.p(s).h("G.V").a(r)
return new A.M(a,r,A.p(s).h("M<G.K,G.V>"))},
$S(){return A.p(this.a).h("M<G.K,G.V>(G.K)")}}
A.nI.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.q(a)
r.a=(r.a+=s)+": "
s=A.q(b)
r.a+=s},
$S:47}
A.kz.prototype={
l(a,b,c){throw A.a(A.P("Cannot modify unmodifiable map"))}}
A.fr.prototype={
bk(a,b,c){return this.a.bk(0,b,c)},
i(a,b){return this.a.i(0,b)},
l(a,b,c){this.a.l(0,b,c)},
E(a){return this.a.E(a)},
ad(a,b){this.a.ad(0,b)},
gF(a){var s=this.a
return s.gF(s)},
gk(a){var s=this.a
return s.gk(s)},
ga3(){return this.a.ga3()},
j(a){return this.a.j(0)},
gbl(){return this.a.gbl()},
cC(a,b,c,d){return this.a.cC(0,b,c,d)},
$ia_:1}
A.de.prototype={
bk(a,b,c){return new A.de(this.a.bk(0,b,c),b.h("@<0>").I(c).h("de<1,2>"))}}
A.fp.prototype={
gA(a){var s=this
return new A.k5(s,s.c,s.d,s.b,s.$ti.h("k5<1>"))},
gF(a){return this.b===this.c},
gk(a){return(this.c-this.b&this.a.length-1)>>>0},
W(a,b){var s,r=this
A.As(b,r.gk(0),r,null,null)
s=r.a
s=s[(r.b+b&s.length-1)>>>0]
return s==null?r.$ti.c.a(s):s},
H(a,b){var s,r=this
for(s=r.b;s!==r.c;s=(s+1&r.a.length-1)>>>0)if(J.z(r.a[s],b)){r.fq(s);++r.d
return!0}return!1},
j(a){return A.nw(this,"{","}")},
fq(a){var s,r,q,p=this,o=p.a,n=o.length-1,m=p.b,l=p.c
if((a-m&n)>>>0<(l-a&n)>>>0){for(s=a;s!==m;s=r){r=(s-1&n)>>>0
o[s]=o[r]}o[m]=null
p.b=(m+1&n)>>>0
return(a+1&n)>>>0}else{m=p.c=(l-1&n)>>>0
for(s=a;s!==m;s=q){q=(s+1&n)>>>0
o[s]=o[q]}o[m]=null
return a}}}
A.k5.prototype={
gp(){var s=this.e
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a
if(r.c!==q.d)A.r(A.ao(q))
s=r.d
if(s===r.b){r.e=null
return!1}q=q.a
r.e=q[s]
r.d=(s+1&q.length-1)>>>0
return!0}}
A.ct.prototype={
gF(a){return this.gk(this)===0},
gaP(a){return this.gk(this)!==0},
aa(a,b){var s
for(s=J.Z(b);s.m();)this.q(0,s.gp())},
cI(a){var s=this.dB(0)
s.aa(0,a)
return s},
b9(a,b,c){return new A.bU(this,b,A.p(this).h("@<1>").I(c).h("bU<1,2>"))},
j(a){return A.nw(this,"{","}")},
bP(a,b){return A.xk(this,b,A.p(this).c)},
aU(a,b){return A.xd(this,b,A.p(this).c)},
W(a,b){var s,r
A.aI(b,"index")
s=this.gA(this)
for(r=b;s.m();){if(r===0)return s.gp();--r}throw A.a(A.it(b,b-r,this,null,"index"))},
$ix:1,
$in:1,
$ibu:1}
A.hs.prototype={
dB(a){var s=this.lW()
s.aa(0,this)
return s}}
A.hB.prototype={}
A.k1.prototype={
i(a,b){var s,r=this.b
if(r==null)return this.c.i(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.m9(b):s}},
gk(a){return this.b==null?this.c.a:this.cS().length},
gF(a){return this.gk(0)===0},
ga3(){if(this.b==null){var s=this.c
return new A.b2(s,A.p(s).h("b2<1>"))}return new A.k2(this)},
l(a,b,c){var s,r,q=this
if(q.b==null)q.c.l(0,b,c)
else if(q.E(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.mH().l(0,b,c)},
E(a){if(this.b==null)return this.c.E(a)
if(typeof a!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
ad(a,b){var s,r,q,p,o=this
if(o.b==null)return o.c.ad(0,b)
s=o.cS()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.tY(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.a(A.ao(o))}},
cS(){var s=this.c
if(s==null)s=this.c=A.u(Object.keys(this.a),t.s)
return s},
mH(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.T(t.N,t.z)
r=n.cS()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.l(0,o,n.i(0,o))}if(p===0)r.push("")
else B.c.au(r)
n.a=n.b=null
return n.c=s},
m9(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.tY(this.a[a])
return this.b[a]=s}}
A.k2.prototype={
gk(a){return this.a.gk(0)},
W(a,b){var s=this.a
return s.b==null?s.ga3().W(0,b):s.cS()[b]},
gA(a){var s=this.a
if(s.b==null){s=s.ga3()
s=s.gA(s)}else{s=s.cS()
s=new J.dD(s,s.length,A.a5(s).h("dD<1>"))}return s},
V(a,b){return this.a.E(b)}}
A.rR.prototype={
n(){var s,r,q=this
q.kR()
s=q.a
r=s.a
s.a=""
s=q.c.a
s.N(A.ym(r.charCodeAt(0)==0?r:r,q.b))
s.Z()}}
A.tB.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:44}
A.tA.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:44}
A.hS.prototype={
gbL(){return"us-ascii"},
b8(a){return B.aK.av(a)},
aI(a){var s=B.a1.av(a)
return s},
gd9(){return B.a1}}
A.ky.prototype={
av(a){var s,r,q,p=A.aN(0,null,a.length),o=new Uint8Array(p)
for(s=~this.a,r=0;r<p;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.a(A.aX(a,"string","Contains invalid characters."))
o[r]=q}return o},
bc(a){return new A.tt(new A.jM(a),this.a)}}
A.hU.prototype={}
A.tt.prototype={
n(){this.a.a.a.Z()},
ae(a,b,c,d){var s,r,q,p,o
A.aN(b,c,a.length)
for(s=~this.b,r=b;r<c;++r){q=a.charCodeAt(r)
if((q&s)!==0)throw A.a(A.I("Source contains invalid character with code point: "+q+".",null))}s=new A.br(a)
p=s.gk(0)
A.aN(b,c,p)
s=A.ap(s.kr(s,b,c),t.V.h("y.E"))
o=this.a.a.a
o.N(s)
if(d)o.Z()}}
A.kx.prototype={
av(a){var s,r,q,p=A.aN(0,null,a.length)
for(s=~this.b,r=0;r<p;++r){q=a[r]
if((q&s)!==0){if(!this.a)throw A.a(A.ak("Invalid value in input: "+q,null,null))
return this.lo(a,0,p)}}return A.bJ(a,0,p)},
lo(a,b,c){var s,r,q,p
for(s=~this.b,r=b,q="";r<c;++r){p=a[r]
q+=A.aR((p&s)!==0?65533:p)}return q.charCodeAt(0)==0?q:q},
bj(a){return this.hv(a)}}
A.hT.prototype={
bc(a){var s=new A.dr(a)
if(this.a)return new A.rj(new A.kB(new A.cE(!1),s,new A.a0("")))
else return new A.t8(s)}}
A.rj.prototype={
n(){this.a.n()},
q(a,b){this.ae(b,0,J.aM(b),!1)},
ae(a,b,c,d){var s,r,q=J.ab(a)
A.aN(b,c,q.gk(a))
for(s=this.a,r=b;r<c;++r)if((q.i(a,r)&4294967168)>>>0!==0){if(r>b)s.ae(a,b,r,!1)
s.ae(B.br,0,3,!1)
b=r+1}if(b<c)s.ae(a,b,c,!1)}}
A.t8.prototype={
n(){this.a.a.a.Z()},
q(a,b){var s,r
for(s=J.ab(b),r=0;r<s.gk(b);++r)if((s.i(b,r)&4294967168)>>>0!==0)throw A.a(A.ak("Source contains non-ASCII bytes.",null,null))
this.a.a.a.N(A.bJ(b,0,null))}}
A.lf.prototype={
oA(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a2=A.aN(a1,a2,a0.length)
s=$.zk()
for(r=a1,q=r,p=null,o=-1,n=-1,m=0;r<a2;r=l){l=r+1
k=a0.charCodeAt(r)
if(k===37){j=l+2
if(j<=a2){i=A.uC(a0.charCodeAt(l))
h=A.uC(a0.charCodeAt(l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){f=s[g]
if(f>=0){g=u.U.charCodeAt(f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?null:p.a.length
if(e==null)e=0
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new A.a0("")
e=p}else e=p
e.a+=B.a.t(a0,q,r)
d=A.aR(k)
e.a+=d
q=l
continue}}throw A.a(A.ak("Invalid base64 data",a0,r))}if(p!=null){e=B.a.t(a0,q,a2)
e=p.a+=e
d=e.length
if(o>=0)A.ws(a0,n,a2,o,m,d)
else{c=B.b.aT(d-1,4)+1
if(c===1)throw A.a(A.ak(a,a0,a2))
while(c<4){e+="="
p.a=e;++c}}e=p.a
return B.a.c8(a0,a1,a2,e.charCodeAt(0)==0?e:e)}b=a2-a1
if(o>=0)A.ws(a0,n,a2,o,m,b)
else{c=B.b.aT(b,4)
if(c===1)throw A.a(A.ak(a,a0,a2))
if(c>1)a0=B.a.c8(a0,a2,a2,c===2?"==":"=")}return a0}}
A.hY.prototype={
bc(a){return new A.qt(a,new A.qL(u.U))}}
A.qE.prototype={
j7(a){return new Uint8Array(a)},
nD(a,b,c,d){var s,r=this,q=(r.a&3)+(c-b),p=B.b.Y(q,3),o=p*4
if(d&&q-p*3>0)o+=4
s=r.j7(o)
r.a=A.BF(r.b,a,b,c,d,s,0,r.a)
if(o>0)return s
return null}}
A.qL.prototype={
j7(a){var s=this.c
if(s==null||s.length<a)s=this.c=new Uint8Array(a)
return J.cL(B.f.gar(s),s.byteOffset,a)}}
A.qF.prototype={
q(a,b){this.hQ(b,0,J.aM(b),!1)},
n(){this.hQ(B.bw,0,0,!0)}}
A.qt.prototype={
hQ(a,b,c,d){var s=this.b.nD(a,b,c,d)
if(s!=null)this.a.a.N(A.bJ(s,0,null))
if(d)this.a.a.Z()}}
A.lw.prototype={}
A.jM.prototype={
q(a,b){this.a.a.N(b)},
n(){this.a.a.Z()}}
A.jN.prototype={
q(a,b){var s,r,q=this,p=q.b,o=q.c,n=J.ab(b)
if(n.gk(b)>p.length-o){p=q.b
s=n.gk(b)+p.length-1
s|=B.b.a2(s,1)
s|=s>>>2
s|=s>>>4
s|=s>>>8
r=new Uint8Array((((s|s>>>16)>>>0)+1)*2)
p=q.b
B.f.aj(r,0,p.length,p)
q.b=r}p=q.b
o=q.c
B.f.aj(p,o,o+n.gk(b),b)
q.c=q.c+n.gk(b)},
n(){this.a.$1(B.f.bT(this.b,0,this.c))}}
A.i8.prototype={}
A.dk.prototype={
q(a,b){this.b.q(0,b)},
af(a,b){A.bd(a,"error",t.K)
this.a.af(a,b)},
n(){this.b.n()},
$iaj:1}
A.i9.prototype={}
A.ah.prototype={
bc(a){throw A.a(A.P("This converter does not support chunked conversions: "+this.j(0)))},
bj(a){return new A.c8(new A.m2(this),a,t.fM.I(A.p(this).h("ah.T")).h("c8<1,2>"))}}
A.m2.prototype={
$1(a){return new A.dk(a,this.a.bc(a))},
$S:159}
A.cX.prototype={
nb(a){return this.gd9().bj(a).nT(0,new A.a0(""),new A.mI(),t.of).aK(new A.mJ(),t.N)}}
A.mI.prototype={
$2(a,b){a.a+=b
return a},
$S:61}
A.mJ.prototype={
$1(a){var s=a.a
return s.charCodeAt(0)==0?s:s},
$S:62}
A.fn.prototype={
j(a){var s=A.ij(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.iB.prototype={
j(a){return"Cyclic error in JSON stringify"}}
A.nz.prototype={
c5(a,b){var s=A.ym(a,this.gd9().a)
return s},
aI(a){return this.c5(a,null)},
fO(a,b){var s=A.C0(a,this.gnE().b,null)
return s},
b8(a){return this.fO(a,null)},
gnE(){return B.bo},
gd9(){return B.bn}}
A.iD.prototype={
bc(a){return new A.rS(null,this.b,new A.dr(a))}}
A.rS.prototype={
q(a,b){var s,r,q,p=this
if(p.d)throw A.a(A.D("Only one call to add allowed"))
p.d=!0
s=p.c
r=new A.a0("")
q=new A.tm(r,s)
A.xI(b,q,p.b,p.a)
if(r.a.length!==0)q.f7()
s.n()},
n(){}}
A.iC.prototype={
bc(a){return new A.rR(this.a,a,new A.a0(""))}}
A.rU.prototype={
jS(a){var s,r,q,p,o,n=this,m=a.length
for(s=0,r=0;r<m;++r){q=a.charCodeAt(r)
if(q>92){if(q>=55296){p=q&64512
if(p===55296){o=r+1
o=!(o<m&&(a.charCodeAt(o)&64512)===56320)}else o=!1
if(!o)if(p===56320){p=r-1
p=!(p>=0&&(a.charCodeAt(p)&64512)===55296)}else p=!1
else p=!0
if(p){if(r>s)n.eD(a,s,r)
s=r+1
n.a5(92)
n.a5(117)
n.a5(100)
p=q>>>8&15
n.a5(p<10?48+p:87+p)
p=q>>>4&15
n.a5(p<10?48+p:87+p)
p=q&15
n.a5(p<10?48+p:87+p)}}continue}if(q<32){if(r>s)n.eD(a,s,r)
s=r+1
n.a5(92)
switch(q){case 8:n.a5(98)
break
case 9:n.a5(116)
break
case 10:n.a5(110)
break
case 12:n.a5(102)
break
case 13:n.a5(114)
break
default:n.a5(117)
n.a5(48)
n.a5(48)
p=q>>>4&15
n.a5(p<10?48+p:87+p)
p=q&15
n.a5(p<10?48+p:87+p)
break}}else if(q===34||q===92){if(r>s)n.eD(a,s,r)
s=r+1
n.a5(92)
n.a5(q)}}if(s===0)n.aB(a)
else if(s<m)n.eD(a,s,m)},
eV(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.a(new A.iB(a,null))}s.push(a)},
eC(a){var s,r,q,p,o=this
if(o.jR(a))return
o.eV(a)
try{s=o.b.$1(a)
if(!o.jR(s)){q=A.wP(a,null,o.gik())
throw A.a(q)}o.a.pop()}catch(p){r=A.F(p)
q=A.wP(a,r,o.gik())
throw A.a(q)}},
jR(a){var s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.pd(a)
return!0}else if(a===!0){r.aB("true")
return!0}else if(a===!1){r.aB("false")
return!0}else if(a==null){r.aB("null")
return!0}else if(typeof a=="string"){r.aB('"')
r.jS(a)
r.aB('"')
return!0}else if(t.j.b(a)){r.eV(a)
r.pb(a)
r.a.pop()
return!0}else if(t.av.b(a)){r.eV(a)
s=r.pc(a)
r.a.pop()
return s}else return!1},
pb(a){var s,r,q=this
q.aB("[")
s=J.ab(a)
if(s.gaP(a)){q.eC(s.i(a,0))
for(r=1;r<s.gk(a);++r){q.aB(",")
q.eC(s.i(a,r))}}q.aB("]")},
pc(a){var s,r,q,p,o=this,n={}
if(a.gF(a)){o.aB("{}")
return!0}s=a.gk(a)*2
r=A.b4(s,null,!1,t.X)
q=n.a=0
n.b=!0
a.ad(0,new A.rV(n,r))
if(!n.b)return!1
o.aB("{")
for(p='"';q<s;q+=2,p=',"'){o.aB(p)
o.jS(A.al(r[q]))
o.aB('":')
o.eC(r[q+1])}o.aB("}")
return!0}}
A.rV.prototype={
$2(a,b){var s,r,q,p
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
q=r.a
p=r.a=q+1
s[q]=a
r.a=p+1
s[p]=b},
$S:47}
A.rT.prototype={
gik(){var s=this.c
return s instanceof A.a0?s.j(0):null},
pd(a){this.c.eB(B.ac.j(a))},
aB(a){this.c.eB(a)},
eD(a,b,c){this.c.eB(B.a.t(a,b,c))},
a5(a){this.c.a5(a)}}
A.iE.prototype={
gbL(){return"iso-8859-1"},
b8(a){return B.bp.av(a)},
aI(a){var s=B.ad.av(a)
return s},
gd9(){return B.ad}}
A.iG.prototype={}
A.iF.prototype={
bc(a){var s=new A.dr(a)
if(!this.a)return new A.k3(s)
return new A.rW(s)}}
A.k3.prototype={
n(){this.a.a.a.Z()
this.a=null},
q(a,b){this.ae(b,0,J.aM(b),!1)},
hD(a,b,c,d){var s=this.a
s.toString
s.a.a.N(A.bJ(a,b,c))},
ae(a,b,c,d){A.aN(b,c,J.aM(a))
if(b===c)return
if(!t.p.b(a))A.C1(a,b,c)
this.hD(a,b,c,!1)}}
A.rW.prototype={
ae(a,b,c,d){var s,r,q,p,o="Stream is already closed",n=J.ab(a)
A.aN(b,c,n.gk(a))
for(s=b;s<c;++s){r=n.i(a,s)
if(r>255||r<0){if(s>b){q=this.a
q.toString
p=A.bJ(a,b,s)
q=q.a.a
if((q.e&2)!==0)A.r(A.D(o))
q.bU(p)}q=this.a
q.toString
p=A.bJ(B.bs,0,1)
q=q.a.a
if((q.e&2)!==0)A.r(A.D(o))
q.bU(p)
b=s+1}}if(b<c)this.hD(a,b,c,!1)}}
A.nA.prototype={
bj(a){return new A.c8(A.E5(),a,t.it)}}
A.rX.prototype={
ae(a,b,c,d){var s=this
c=A.aN(b,c,a.length)
if(b<c){if(s.d){if(a.charCodeAt(b)===10)++b
s.d=!1}s.lb(a,b,c,d)}if(d)s.n()},
n(){var s=this,r=s.b
if(r!=null)s.a.a.a.N(s.fA(r,""))
s.a.a.a.Z()},
lb(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=k.b
for(s=k.a.a.a,r=b,q=r,p=0;r<c;++r,p=o){o=a.charCodeAt(r)
if(o!==13){if(o!==10)continue
if(p===13){q=r+1
continue}}n=B.a.t(a,q,r)
if(j!=null){n=k.fA(j,n)
j=null}if((s.e&2)!==0)A.r(A.D("Stream is already closed"))
s.bU(n)
q=r+1}if(q<c){m=B.a.t(a,q,c)
if(d){s.N(j!=null?k.fA(j,m):m)
return}if(j==null)k.b=m
else{l=k.c
if(l==null)l=k.c=new A.a0("")
if(j.length!==0){l.a+=j
k.b=""}l.a+=m}}else k.d=p===13},
fA(a,b){var s,r
this.b=null
if(a.length!==0)return a+b
s=this.c
r=s.a+=b
s.a=""
return r.charCodeAt(0)==0?r:r}}
A.et.prototype={
af(a,b){this.e.af(a,b)},
$iaj:1}
A.jl.prototype={
q(a,b){this.ae(b,0,b.length,!1)}}
A.tm.prototype={
a5(a){var s=this.a,r=A.aR(a)
if((s.a+=r).length>16)this.f7()},
eB(a){if(this.a.a.length!==0)this.f7()
this.b.q(0,a)},
f7(){var s=this.a,r=s.a
s.a=""
this.b.q(0,r.charCodeAt(0)==0?r:r)}}
A.hv.prototype={
n(){},
ae(a,b,c,d){var s,r,q
if(b!==0||c!==a.length)for(s=this.a,r=b;r<c;++r){q=A.aR(a.charCodeAt(r))
s.a+=q}else this.a.a+=a
if(d)this.n()},
q(a,b){this.a.a+=b}}
A.dr.prototype={
q(a,b){this.a.a.N(b)},
ae(a,b,c,d){var s=b===0&&c===a.length,r=this.a.a
if(s)r.N(a)
else r.N(B.a.t(a,b,c))
if(d)r.Z()},
n(){this.a.a.Z()}}
A.kB.prototype={
n(){var s,r,q,p=this.c
this.a.nS(p)
s=p.a
r=this.b
if(s.length!==0){q=s.charCodeAt(0)==0?s:s
p.a=""
r.ae(q,0,q.length,!0)}else r.n()},
q(a,b){this.ae(b,0,J.aM(b),!1)},
ae(a,b,c,d){var s,r=this,q=r.c,p=r.a.cT(a,b,c,!1)
p=q.a+=p
if(p.length!==0){s=p.charCodeAt(0)==0?p:p
r.b.ae(s,0,s.length,d)
q.a=""
return}if(d)r.n()}}
A.jw.prototype={
gbL(){return"utf-8"},
aI(a){return new A.cE(!1).cT(a,0,null,!0)},
b8(a){return B.o.av(a)},
gd9(){return B.aF}}
A.jy.prototype={
av(a){var s,r,q=A.aN(0,null,a.length)
if(q===0)return new Uint8Array(0)
s=new Uint8Array(q*3)
r=new A.kC(s)
if(r.i0(a,0,q)!==q)r.e_()
return B.f.bT(s,0,r.b)},
bc(a){return new A.tC(new A.jM(a),new Uint8Array(1024))}}
A.kC.prototype={
e_(){var s=this,r=s.c,q=s.b,p=s.b=q+1
r.$flags&2&&A.B(r)
r[q]=239
q=s.b=p+1
r[p]=191
s.b=q+1
r[q]=189},
iU(a,b){var s,r,q,p,o=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=o.c
q=o.b
p=o.b=q+1
r.$flags&2&&A.B(r)
r[q]=s>>>18|240
q=o.b=p+1
r[p]=s>>>12&63|128
p=o.b=q+1
r[q]=s>>>6&63|128
o.b=p+1
r[p]=s&63|128
return!0}else{o.e_()
return!1}},
i0(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c&&(a.charCodeAt(c-1)&64512)===55296)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=b;p<c;++p){o=a.charCodeAt(p)
if(o<=127){n=k.b
if(n>=q)break
k.b=n+1
r&2&&A.B(s)
s[n]=o}else{n=o&64512
if(n===55296){if(k.b+4>q)break
m=p+1
if(k.iU(o,a.charCodeAt(m)))p=m}else if(n===56320){if(k.b+3>q)break
k.e_()}else if(o<=2047){n=k.b
l=n+1
if(l>=q)break
k.b=l
r&2&&A.B(s)
s[n]=o>>>6|192
k.b=l+1
s[l]=o&63|128}else{n=k.b
if(n+2>=q)break
l=k.b=n+1
r&2&&A.B(s)
s[n]=o>>>12|224
n=k.b=l+1
s[l]=o>>>6&63|128
k.b=n+1
s[n]=o&63|128}}}return p}}
A.tC.prototype={
n(){if(this.a!==0){this.ae("",0,0,!0)
return}this.d.a.a.Z()},
ae(a,b,c,d){var s,r,q,p,o,n=this
n.b=0
s=b===c
if(s&&!d)return
r=n.a
if(r!==0){if(n.iU(r,!s?a.charCodeAt(b):0))++b
n.a=0}s=n.d
r=n.c
q=c-1
p=r.length-3
do{b=n.i0(a,b,c)
o=d&&b===c
if(b===q&&(a.charCodeAt(b)&64512)===55296){if(d&&n.b<p)n.e_()
else n.a=a.charCodeAt(b);++b}s.q(0,B.f.bT(r,0,n.b))
if(o)s.n()
n.b=0}while(b<c)
if(d)n.n()}}
A.jx.prototype={
bc(a){return new A.kB(new A.cE(this.a),new A.dr(a),new A.a0(""))},
bj(a){return this.hv(a)}}
A.cE.prototype={
cT(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.aN(b,c,J.aM(a))
if(b===l)return""
if(a instanceof Uint8Array){s=a
r=s
q=0}else{r=A.CA(a,b,l)
l-=b
q=b
b=0}if(d&&l-b>=15){p=m.a
o=A.Cz(p,r,b,l)
if(o!=null){if(!p)return o
if(o.indexOf("\ufffd")<0)return o}}o=m.f4(r,b,l,d)
p=m.b
if((p&1)!==0){n=A.y5(p)
m.b=0
throw A.a(A.ak(n,a,q+m.c))}return o},
f4(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.b.Y(b+c,2)
r=q.f4(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.f4(a,s,c,d)}return q.na(a,b,c,d)},
nS(a){var s,r=this.b
this.b=0
if(r<=32)return
if(this.a){s=A.aR(65533)
a.a+=s}else throw A.a(A.ak(A.y5(77),null,null))},
na(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=65533,j=l.b,i=l.c,h=new A.a0(""),g=b+1,f=a[b]
A:for(s=l.a;;){for(;;g=p){r="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE".charCodeAt(f)&31
i=j<=32?f&61694>>>r:(f&63|i<<6)>>>0
j=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA".charCodeAt(j+r)
if(j===0){q=A.aR(i)
h.a+=q
if(g===c)break A
break}else if((j&1)!==0){if(s)switch(j){case 69:case 67:q=A.aR(k)
h.a+=q
break
case 65:q=A.aR(k)
h.a+=q;--g
break
default:q=A.aR(k)
h.a=(h.a+=q)+q
break}else{l.b=j
l.c=g-1
return""}j=0}if(g===c)break A
p=g+1
f=a[g]}p=g+1
f=a[g]
if(f<128){for(;;){if(!(p<c)){o=c
break}n=p+1
f=a[p]
if(f>=128){o=n-1
p=n
break}p=n}if(o-g<20)for(m=g;m<o;++m){q=A.aR(a[m])
h.a+=q}else{q=A.bJ(a,g,o)
h.a+=q}if(o===c)break A
g=p}else g=p}if(d&&j>32)if(s){s=A.aR(k)
h.a+=s}else{l.b=77
l.c=c
return""}l.b=j
l.c=i
s=h.a
return s.charCodeAt(0)==0?s:s}}
A.kH.prototype={}
A.aA.prototype={
bz(a){var s,r,q=this,p=q.c
if(p===0)return q
s=!q.a
r=q.b
p=A.bi(p,r)
return new A.aA(p===0?!1:s,r,p)},
lt(a){var s,r,q,p,o,n,m,l=this,k=l.c
if(k===0)return $.cg()
s=k-a
if(s<=0)return l.a?$.wk():$.cg()
r=l.b
q=new Uint16Array(s)
for(p=a;p<k;++p)q[p-a]=r[p]
o=l.a
n=A.bi(s,q)
m=new A.aA(n===0?!1:o,q,n)
if(o)for(p=0;p<a;++p)if(r[p]!==0)return m.eN(0,$.kW())
return m},
cN(a,b){var s,r,q,p,o,n,m,l,k,j=this
if(b<0)throw A.a(A.I("shift-amount must be posititve "+b,null))
s=j.c
if(s===0)return j
r=B.b.Y(b,16)
q=B.b.aT(b,16)
if(q===0)return j.lt(r)
p=s-r
if(p<=0)return j.a?$.wk():$.cg()
o=j.b
n=new Uint16Array(p)
A.BL(o,s,b,n)
s=j.a
m=A.bi(p,n)
l=new A.aA(m===0?!1:s,n,m)
if(s){if((o[r]&B.b.cM(1,q)-1)>>>0!==0)return l.eN(0,$.kW())
for(k=0;k<r;++k)if(o[k]!==0)return l.eN(0,$.kW())}return l},
a_(a,b){var s,r=this.a
if(r===b.a){s=A.qH(this.b,this.c,b.b,b.c)
return r?0-s:s}return r?-1:1},
eQ(a,b){var s,r,q,p=this,o=p.c,n=a.c
if(o<n)return a.eQ(p,b)
if(o===0)return $.cg()
if(n===0)return p.a===b?p:p.bz(0)
s=o+1
r=new Uint16Array(s)
A.BG(p.b,o,a.b,n,r)
q=A.bi(s,r)
return new A.aA(q===0?!1:b,r,q)},
dL(a,b){var s,r,q,p=this,o=p.c
if(o===0)return $.cg()
s=a.c
if(s===0)return p.a===b?p:p.bz(0)
r=new Uint16Array(o)
A.jJ(p.b,o,a.b,s,r)
q=A.bi(o,r)
return new A.aA(q===0?!1:b,r,q)},
dE(a,b){var s,r,q=this,p=q.c
if(p===0)return b
s=b.c
if(s===0)return q
r=q.a
if(r===b.a)return q.eQ(b,r)
if(A.qH(q.b,p,b.b,s)>=0)return q.dL(b,r)
return b.dL(q,!r)},
eN(a,b){var s,r,q=this,p=q.c
if(p===0)return b.bz(0)
s=b.c
if(s===0)return q
r=q.a
if(r!==b.a)return q.eQ(b,r)
if(A.qH(q.b,p,b.b,s)>=0)return q.dL(b,r)
return b.dL(q,!r)},
aL(a,b){var s,r,q,p,o,n,m,l=this.c,k=b.c
if(l===0||k===0)return $.cg()
s=l+k
r=this.b
q=b.b
p=new Uint16Array(s)
for(o=0;o<k;){A.xz(q[o],r,0,p,o,l);++o}n=this.a!==b.a
m=A.bi(s,p)
return new A.aA(m===0?!1:n,p,m)},
lr(a){var s,r,q,p
if(this.c<a.c)return $.cg()
this.hW(a)
s=$.vE.aV()-$.h1.aV()
r=A.vG($.vD.aV(),$.h1.aV(),$.vE.aV(),s)
q=A.bi(s,r)
p=new A.aA(!1,r,q)
return this.a!==a.a&&q>0?p.bz(0):p},
mg(a){var s,r,q,p=this
if(p.c<a.c)return p
p.hW(a)
s=A.vG($.vD.aV(),0,$.h1.aV(),$.h1.aV())
r=A.bi($.h1.aV(),s)
q=new A.aA(!1,s,r)
if($.vF.aV()>0)q=q.cN(0,$.vF.aV())
return p.a&&q.c>0?q.bz(0):q},
hW(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=c.c
if(b===$.xw&&a.c===$.xy&&c.b===$.xv&&a.b===$.xx)return
s=a.b
r=a.c
q=16-B.b.gj1(s[r-1])
if(q>0){p=new Uint16Array(r+5)
o=A.xu(s,r,q,p)
n=new Uint16Array(b+5)
m=A.xu(c.b,b,q,n)}else{n=A.vG(c.b,0,b,b+2)
o=r
p=s
m=b}l=p[o-1]
k=m-o
j=new Uint16Array(m)
i=A.vH(p,o,k,j)
h=m+1
g=n.$flags|0
if(A.qH(n,m,j,i)>=0){g&2&&A.B(n)
n[m]=1
A.jJ(n,h,j,i,n)}else{g&2&&A.B(n)
n[m]=0}f=new Uint16Array(o+2)
f[o]=1
A.jJ(f,o+1,p,o,f)
e=m-1
while(k>0){d=A.BH(l,n,e);--k
A.xz(d,f,0,n,k,o)
if(n[e]<d){i=A.vH(f,o,k,j)
A.jJ(n,h,j,i,n)
while(--d,n[e]<d)A.jJ(n,h,j,i,n)}--e}$.xv=c.b
$.xw=b
$.xx=s
$.xy=r
$.vD.b=n
$.vE.b=h
$.h1.b=o
$.vF.b=q},
gv(a){var s,r,q,p=new A.qI(),o=this.c
if(o===0)return 6707
s=this.a?83585:429689
for(r=this.b,q=0;q<o;++q)s=p.$2(s,r[q])
return new A.qJ().$1(s)},
D(a,b){if(b==null)return!1
return b instanceof A.aA&&this.a_(0,b)===0},
j(a){var s,r,q,p,o,n=this,m=n.c
if(m===0)return"0"
if(m===1){if(n.a)return B.b.j(-n.b[0])
return B.b.j(n.b[0])}s=A.u([],t.s)
m=n.a
r=m?n.bz(0):n
while(r.c>1){q=$.wj()
if(q.c===0)A.r(B.aR)
p=r.mg(q).j(0)
s.push(p)
o=p.length
if(o===1)s.push("000")
if(o===2)s.push("00")
if(o===3)s.push("0")
r=r.lr(q)}s.push(B.b.j(r.b[0]))
if(m)s.push("-")
return new A.d7(s,t.hF).oj(0)},
$ia7:1}
A.qI.prototype={
$2(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
$S:65}
A.qJ.prototype={
$1(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
$S:77}
A.jV.prototype={
iZ(a,b,c){var s=this.a
if(s!=null)s.register(a,b,c)},
jc(a){var s=this.a
if(s!=null)s.unregister(a)}}
A.bT.prototype={
D(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.bT)if(this.a===b.a)s=this.b===b.b
return s},
gv(a){return A.c0(this.a,this.b,B.e,B.e,B.e,B.e)},
a_(a,b){var s=B.b.a_(this.a,b.a)
if(s!==0)return s
return B.b.a_(this.b,b.b)},
j(a){var s=this,r=A.Ac(A.x5(s)),q=A.ig(A.x3(s)),p=A.ig(A.x0(s)),o=A.ig(A.x1(s)),n=A.ig(A.x2(s)),m=A.ig(A.x4(s)),l=A.wD(A.AU(s)),k=s.b,j=k===0?"":A.wD(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j},
$ia7:1}
A.aZ.prototype={
D(a,b){if(b==null)return!1
return b instanceof A.aZ&&this.a===b.a},
gv(a){return B.b.gv(this.a)},
a_(a,b){return B.b.a_(this.a,b.a)},
j(a){var s,r,q,p,o,n=this.a,m=B.b.Y(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.b.Y(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.b.Y(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.a.oG(B.b.j(n%1e6),6,"0")},
$ia7:1}
A.rh.prototype={
j(a){return this.aF()}}
A.W.prototype={
gbA(){return A.AT(this)}}
A.hV.prototype={
j(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.ij(s)
return"Assertion failed"}}
A.c4.prototype={}
A.a3.prototype={
gf6(){return"Invalid argument"+(!this.a?"(s)":"")},
gf5(){return""},
j(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.q(p),n=s.gf6()+q+o
if(!s.a)return n
return n+s.gf5()+": "+A.ij(s.gh_())},
gh_(){return this.b}}
A.e_.prototype={
gh_(){return this.b},
gf6(){return"RangeError"},
gf5(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.q(q):""
else if(q==null)s=": Not greater than or equal to "+A.q(r)
else if(q>r)s=": Not in inclusive range "+A.q(r)+".."+A.q(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.q(r)
return s}}
A.fi.prototype={
gh_(){return this.b},
gf6(){return"RangeError"},
gf5(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk(a){return this.f}}
A.fQ.prototype={
j(a){return"Unsupported operation: "+this.a}}
A.jo.prototype={
j(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
A.aV.prototype={
j(a){return"Bad state: "+this.a}}
A.ia.prototype={
j(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.ij(s)+"."}}
A.iU.prototype={
j(a){return"Out of Memory"},
gbA(){return null},
$iW:1}
A.fF.prototype={
j(a){return"Stack Overflow"},
gbA(){return null},
$iW:1}
A.jU.prototype={
j(a){return"Exception: "+this.a},
$iO:1}
A.aT.prototype={
j(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.a.t(e,0,75)+"..."
return g+"\n"+e}for(r=1,q=0,p=!1,o=0;o<f;++o){n=e.charCodeAt(o)
if(n===10){if(q!==o||!p)++r
q=o+1
p=!1}else if(n===13){++r
q=o+1
p=!0}}g=r>1?g+(" (at line "+r+", character "+(f-q+1)+")\n"):g+(" (at character "+(f+1)+")\n")
m=e.length
for(o=f;o<m;++o){n=e.charCodeAt(o)
if(n===10||n===13){m=o
break}}l=""
if(m-q>78){k="..."
if(f-q<75){j=q+75
i=q}else{if(m-f<75){i=m-75
j=m
k=""}else{i=f-36
j=f+36}l="..."}}else{j=m
i=q
k=""}return g+l+B.a.t(e,i,j)+k+"\n"+B.a.aL(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.q(f)+")"):g},
$iO:1,
gjy(){return this.a},
gdJ(){return this.b},
ga8(){return this.c}}
A.iv.prototype={
gbA(){return null},
j(a){return"IntegerDivisionByZeroException"},
$iW:1,
$iO:1}
A.n.prototype={
e8(a,b){return A.i5(this,A.p(this).h("n.E"),b)},
b9(a,b,c){return A.nJ(this,b,A.p(this).h("n.E"),c)},
V(a,b){var s
for(s=this.gA(this);s.m();)if(J.z(s.gp(),b))return!0
return!1},
ca(a,b){var s=A.p(this).h("n.E")
if(b)s=A.ap(this,s)
else{s=A.ap(this,s)
s.$flags=1
s=s}return s},
jO(a){return this.ca(0,!0)},
gk(a){var s,r=this.gA(this)
for(s=0;r.m();)++s
return s},
gF(a){return!this.gA(this).m()},
gaP(a){return!this.gF(this)},
bP(a,b){return A.xk(this,b,A.p(this).h("n.E"))},
aU(a,b){return A.xd(this,b,A.p(this).h("n.E"))},
gah(a){var s=this.gA(this)
if(!s.m())throw A.a(A.bW())
return s.gp()},
W(a,b){var s,r
A.aI(b,"index")
s=this.gA(this)
for(r=b;s.m();){if(r===0)return s.gp();--r}throw A.a(A.it(b,b-r,this,null,"index"))},
j(a){return A.Aw(this,"(",")")}}
A.M.prototype={
j(a){return"MapEntry("+A.q(this.a)+": "+A.q(this.b)+")"}}
A.E.prototype={
gv(a){return A.k.prototype.gv.call(this,0)},
j(a){return"null"}}
A.k.prototype={$ik:1,
D(a,b){return this===b},
gv(a){return A.dZ(this)},
j(a){return"Instance of '"+A.iZ(this)+"'"},
ga4(a){return A.uB(this)},
toString(){return this.j(this)}}
A.kt.prototype={
j(a){return""},
$iad:1}
A.a0.prototype={
gk(a){return this.a.length},
eB(a){var s=A.q(a)
this.a+=s},
a5(a){var s=A.aR(a)
this.a+=s},
j(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.pD.prototype={
$2(a,b){throw A.a(A.ak("Illegal IPv6 address, "+a,this.a,b))},
$S:78}
A.hC.prototype={
giJ(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.q(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n=o.w=s.charCodeAt(0)==0?s:s}return n},
goI(){var s,r,q=this,p=q.x
if(p===$){s=q.e
if(s.length!==0&&s.charCodeAt(0)===47)s=B.a.a0(s,1)
r=s.length===0?B.J:A.nE(new A.a8(A.u(s.split("/"),t.s),A.E7(),t.iZ),t.N)
q.x!==$&&A.wf()
p=q.x=r}return p},
gv(a){var s,r=this,q=r.y
if(q===$){s=B.a.gv(r.giJ())
r.y!==$&&A.wf()
r.y=s
q=s}return q},
ghh(){return this.b},
gbI(){var s=this.c
if(s==null)return""
if(B.a.K(s,"[")&&!B.a.S(s,"v",1))return B.a.t(s,1,s.length-1)
return s},
gdr(){var s=this.d
return s==null?A.xU(this.a):s},
gdt(){var s=this.f
return s==null?"":s},
geg(){var s=this.r
return s==null?"":s},
ej(a){var s=this.a
if(a.length!==s.length)return!1
return A.yb(a,s,0)>=0},
jM(a){var s,r,q,p,o,n,m,l=this
a=A.vP(a,0,a.length)
s=a==="file"
r=l.b
q=l.d
if(a!==l.a)q=A.tz(q,a)
p=l.c
if(!(p!=null))p=r.length!==0||q!=null||s?"":null
o=l.e
if(!s)n=p!=null&&o.length!==0
else n=!0
if(n&&!B.a.K(o,"/"))o="/"+o
m=o
return A.hD(a,r,p,q,m,l.f,l.r)},
ih(a,b){var s,r,q,p,o,n,m
for(s=0,r=0;B.a.S(b,"../",r);){r+=3;++s}q=B.a.cB(a,"/")
for(;;){if(!(q>0&&s>0))break
p=B.a.ek(a,"/",q-1)
if(p<0)break
o=q-p
n=o!==2
m=!1
if(!n||o===3)if(a.charCodeAt(p+1)===46)n=!n||a.charCodeAt(p+2)===46
else n=m
else n=m
if(n)break;--s
q=p}return B.a.c8(a,q+1,null,B.a.a0(b,r-3*s))},
dv(a){return this.dw(A.df(a))},
dw(a){var s,r,q,p,o,n,m,l,k,j,i,h=this
if(a.gaD().length!==0)return a
else{s=h.a
if(a.gfU()){r=a.jM(s)
return r}else{q=h.b
p=h.c
o=h.d
n=h.e
if(a.gjr())m=a.gei()?a.gdt():h.f
else{l=A.Cy(h,n)
if(l>0){k=B.a.t(n,0,l)
n=a.gfT()?k+A.du(a.gaR()):k+A.du(h.ih(B.a.a0(n,k.length),a.gaR()))}else if(a.gfT())n=A.du(a.gaR())
else if(n.length===0)if(p==null)n=s.length===0?a.gaR():A.du(a.gaR())
else n=A.du("/"+a.gaR())
else{j=h.ih(n,a.gaR())
r=s.length===0
if(!r||p!=null||B.a.K(n,"/"))n=A.du(j)
else n=A.vR(j,!r||p!=null)}m=a.gei()?a.gdt():null}}}i=a.gfV()?a.geg():null
return A.hD(s,q,p,o,n,m,i)},
gfU(){return this.c!=null},
gei(){return this.f!=null},
gfV(){return this.r!=null},
gjr(){return this.e.length===0},
gfT(){return B.a.K(this.e,"/")},
hf(){var s,r=this,q=r.a
if(q!==""&&q!=="file")throw A.a(A.P("Cannot extract a file path from a "+q+" URI"))
q=r.f
if((q==null?"":q)!=="")throw A.a(A.P(u.z))
q=r.r
if((q==null?"":q)!=="")throw A.a(A.P(u.A))
if(r.c!=null&&r.gbI()!=="")A.r(A.P(u.Q))
s=r.goI()
A.Ct(s,!1)
q=A.vu(B.a.K(r.e,"/")?"/":"",s,"/")
q=q.charCodeAt(0)==0?q:q
return q},
j(a){return this.giJ()},
D(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.R.b(b))if(p.a===b.gaD())if(p.c!=null===b.gfU())if(p.b===b.ghh())if(p.gbI()===b.gbI())if(p.gdr()===b.gdr())if(p.e===b.gaR()){r=p.f
q=r==null
if(!q===b.gei()){if(q)r=""
if(r===b.gdt()){r=p.r
q=r==null
if(!q===b.gfV()){s=q?"":r
s=s===b.geg()}}}}return s},
$iju:1,
gaD(){return this.a},
gaR(){return this.e}}
A.pC.prototype={
gjP(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.a
s=o.b[0]+1
r=B.a.bn(m,"?",s)
q=m.length
if(r>=0){p=A.hE(m,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.jR("data","",n,n,A.hE(m,s,q,128,!1,!1),p,n)}return m},
j(a){var s=this.a
return this.b[0]===-1?"data:"+s:s}}
A.bk.prototype={
gfU(){return this.c>0},
gfW(){return this.c>0&&this.d+1<this.e},
gei(){return this.f<this.r},
gfV(){return this.r<this.a.length},
gfT(){return B.a.S(this.a,"/",this.e)},
gjr(){return this.e===this.f},
ej(a){var s=a.length
if(s===0)return this.b<0
if(s!==this.b)return!1
return A.yb(a,this.a,0)>=0},
gaD(){var s=this.w
return s==null?this.w=this.lm():s},
lm(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.a.K(r.a,"http"))return"http"
if(q===5&&B.a.K(r.a,"https"))return"https"
if(s&&B.a.K(r.a,"file"))return"file"
if(q===7&&B.a.K(r.a,"package"))return"package"
return B.a.t(r.a,0,q)},
ghh(){var s=this.c,r=this.b+3
return s>r?B.a.t(this.a,r,s-1):""},
gbI(){var s=this.c
return s>0?B.a.t(this.a,s,this.d):""},
gdr(){var s,r=this
if(r.gfW())return A.yM(B.a.t(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.a.K(r.a,"http"))return 80
if(s===5&&B.a.K(r.a,"https"))return 443
return 0},
gaR(){return B.a.t(this.a,this.e,this.f)},
gdt(){var s=this.f,r=this.r
return s<r?B.a.t(this.a,s+1,r):""},
geg(){var s=this.r,r=this.a
return s<r.length?B.a.a0(r,s+1):""},
ib(a){var s=this.d+1
return s+a.length===this.e&&B.a.S(this.a,a,s)},
oQ(){var s=this,r=s.r,q=s.a
if(r>=q.length)return s
return new A.bk(B.a.t(q,0,r),s.b,s.c,s.d,s.e,s.f,r,s.w)},
jM(a){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
a=A.vP(a,0,a.length)
s=!(h.b===a.length&&B.a.K(h.a,a))
r=a==="file"
q=h.c
p=q>0?B.a.t(h.a,h.b+3,q):""
o=h.gfW()?h.gdr():g
if(s)o=A.tz(o,a)
q=h.c
if(q>0)n=B.a.t(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.a.t(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.a.K(l,"/"))l="/"+l
k=h.r
j=m<k?B.a.t(q,m+1,k):g
m=h.r
i=m<q.length?B.a.a0(q,m+1):g
return A.hD(a,p,n,o,l,j,i)},
dv(a){return this.dw(A.df(a))},
dw(a){if(a instanceof A.bk)return this.mx(this,a)
return this.iL().dw(a)},
mx(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.b
if(c>0)return b
s=b.c
if(s>0){r=a.b
if(r<=0)return b
q=r===4
if(q&&B.a.K(a.a,"file"))p=b.e!==b.f
else if(q&&B.a.K(a.a,"http"))p=!b.ib("80")
else p=!(r===5&&B.a.K(a.a,"https"))||!b.ib("443")
if(p){o=r+1
return new A.bk(B.a.t(a.a,0,o)+B.a.a0(b.a,c+1),r,s+o,b.d+o,b.e+o,b.f+o,b.r+o,a.w)}else return this.iL().dw(b)}n=b.e
c=b.f
if(n===c){s=b.r
if(c<s){r=a.f
o=r-c
return new A.bk(B.a.t(a.a,0,r)+B.a.a0(b.a,c),a.b,a.c,a.d,a.e,c+o,s+o,a.w)}c=b.a
if(s<c.length){r=a.r
return new A.bk(B.a.t(a.a,0,r)+B.a.a0(c,s),a.b,a.c,a.d,a.e,a.f,s+(r-s),a.w)}return a.oQ()}s=b.a
if(B.a.S(s,"/",n)){m=a.e
l=A.xM(this)
k=l>0?l:m
o=k-n
return new A.bk(B.a.t(a.a,0,k)+B.a.a0(s,n),a.b,a.c,a.d,m,c+o,b.r+o,a.w)}j=a.e
i=a.f
if(j===i&&a.c>0){while(B.a.S(s,"../",n))n+=3
o=j-n+1
return new A.bk(B.a.t(a.a,0,j)+"/"+B.a.a0(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)}h=a.a
l=A.xM(this)
if(l>=0)g=l
else for(g=j;B.a.S(h,"../",g);)g+=3
f=0
for(;;){e=n+3
if(!(e<=c&&B.a.S(s,"../",n)))break;++f
n=e}for(d="";i>g;){--i
if(h.charCodeAt(i)===47){if(f===0){d="/"
break}--f
d="/"}}if(i===g&&a.b<=0&&!B.a.S(h,"/",j)){n-=f*3
d=""}o=i-n+d.length
return new A.bk(B.a.t(h,0,i)+d+B.a.a0(s,n),a.b,a.c,a.d,j,c+o,b.r+o,a.w)},
hf(){var s,r=this,q=r.b
if(q>=0){s=!(q===4&&B.a.K(r.a,"file"))
q=s}else q=!1
if(q)throw A.a(A.P("Cannot extract a file path from a "+r.gaD()+" URI"))
q=r.f
s=r.a
if(q<s.length){if(q<r.r)throw A.a(A.P(u.z))
throw A.a(A.P(u.A))}if(r.c<r.d)A.r(A.P(u.Q))
q=B.a.t(s,r.e,q)
return q},
gv(a){var s=this.x
return s==null?this.x=B.a.gv(this.a):s},
D(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.j(0)},
iL(){var s=this,r=null,q=s.gaD(),p=s.ghh(),o=s.c>0?s.gbI():r,n=s.gfW()?s.gdr():r,m=s.a,l=s.f,k=B.a.t(m,s.e,l),j=s.r
l=l<j?s.gdt():r
return A.hD(q,p,o,n,k,l,j<m.length?s.geg():r)},
j(a){return this.a},
$iju:1}
A.jR.prototype={}
A.im.prototype={
i(a,b){var s=!0
s=typeof b=="string"
if(s)A.wG(b)
return this.a.get(b)},
j(a){return"Expando:null"}}
A.u5.prototype={
$0(){var s=v.G.performance
if(t.m.b(s))if(s.measure!=null&&s.mark!=null&&s.clearMeasures!=null&&s.clearMarks!=null)return s
return null},
$S:87}
A.u3.prototype={
$0(){var s=v.G.JSON
if(t.m.b(s))return s
throw A.a(A.P("Missing JSON.parse() support"))},
$S:17}
A.vC.prototype={}
A.iS.prototype={
j(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."},
$iO:1}
A.mT.prototype={
$2(a,b){this.a.bb(new A.mR(a),new A.mS(b),t.X)},
$S:95}
A.mR.prototype={
$1(a){var s=this.a
return s.call(s)},
$S:97}
A.mS.prototype={
$2(a,b){var s,r,q=t.g.a(v.G.Error),p=A.E0(q,["Dart exception thrown from converted Future. Use the properties 'error' to fetch the boxed error and 'stack' to recover the stack trace."])
if(t.d9.b(a))A.r("Attempting to box non-Dart object.")
s={}
s[$.zt()]=a
p.error=s
p.stack=b.j(0)
r=this.a
r.call(r,p)},
$S:6}
A.uH.prototype={
$1(a){var s,r,q,p
if(A.yl(a))return a
s=this.a
if(s.E(a))return s.i(0,a)
if(t.av.b(a)){r={}
s.l(0,a,r)
for(s=J.Z(a.ga3());s.m();){q=s.gp()
r[q]=this.$1(a.i(0,q))}return r}else if(t.e7.b(a)){p=[]
s.l(0,a,p)
B.c.aa(p,J.dC(a,this,t.z))
return p}else return a},
$S:99}
A.uY.prototype={
$1(a){return this.a.U(a)},
$S:11}
A.uZ.prototype={
$1(a){if(a==null)return this.a.ab(new A.iS(a===undefined))
return this.a.ab(a)},
$S:11}
A.rO.prototype={
eo(a){if(a<=0||a>4294967296)throw A.a(A.az(u.E+a))
return Math.random()*a>>>0}}
A.rP.prototype={
l3(){var s=self.crypto
if(s!=null)if(s.getRandomValues!=null)return
throw A.a(A.P("No source of cryptographically secure random numbers available."))},
eo(a){var s,r,q,p,o,n,m,l
if(a<=0||a>4294967296)throw A.a(A.az(u.E+a))
if(a>255)if(a>65535)s=a>16777215?4:3
else s=2
else s=1
r=this.a
r.$flags&2&&A.B(r,11)
r.setUint32(0,0,!1)
q=4-s
p=A.R(Math.pow(256,s))
for(o=a-1,n=(a&o)===0;;){crypto.getRandomValues(J.cL(B.ag.gar(r),q,s))
m=r.getUint32(0,!1)
if(n)return(m&o)>>>0
l=m%a
if(m-l+a<p)return l}}}
A.ii.prototype={
giX(){return this},
gv(a){return(J.V(this.a)^A.dZ(this.b)^492929599)>>>0},
D(a,b){if(b==null)return!1
return b instanceof A.ii&&J.z(this.a,b.a)&&this.b===b.b}}
A.fU.prototype={
giX(){return null},
gv(a){return B.ab.gv(this.a)^842997089},
D(a,b){if(b==null)return!1
return b instanceof A.fU}}
A.fH.prototype={
q(a,b){var s,r=this
if(r.b)throw A.a(A.D("Can't add a Stream to a closed StreamGroup."))
s=r.c
if(s===B.aH)r.e.cE(b,new A.oB())
else if(s===B.aG)return b.O(null).u()
else r.e.cE(b,new A.oC(r,b))
return null},
m3(){var s,r,q,p,o,n,m,l=this
l.c=B.aI
r=l.e
q=A.ap(new A.aG(r,A.p(r).h("aG<1,2>")),l.$ti.h("M<C<1>,ae<1>?>"))
p=q.length
o=0
for(;o<q.length;q.length===p||(0,A.a6)(q),++o){n=q[o]
if(n.b!=null)continue
s=n.a
try{r.l(0,s,l.ie(s))}catch(m){r=l.iH()
if(r!=null)r.j3(new A.oA())
throw m}}},
mC(){this.c=B.aJ
for(var s=this.e,s=new A.b3(s,s.r,s.e);s.m();)s.d.ai()},
mE(){this.c=B.aI
for(var s=this.e,s=new A.b3(s,s.r,s.e);s.m();)s.d.am()},
iH(){var s,r,q,p
this.c=B.aG
s=this.e
r=A.p(s).h("aG<1,2>")
q=t.bC
p=A.ap(new A.fy(A.nJ(new A.aG(s,r),new A.oz(this),r.h("n.E"),t.m2),q),q.h("n.E"))
s.au(0)
return p.length===0?null:A.mX(p,t.H)},
ie(a){var s,r=this.a
r===$&&A.L()
s=a.az(r.gc4(r),new A.oy(this,a),r.gfD())
if(this.c===B.aJ)s.ai()
return s}}
A.oB.prototype={
$0(){return null},
$S:1}
A.oC.prototype={
$0(){return this.a.ie(this.b)},
$S(){return this.a.$ti.h("ae<1>()")}}
A.oA.prototype={
$1(a){},
$S:10}
A.oz.prototype={
$1(a){var s,r,q=a.b
try{if(q!=null){s=q.u()
return s}s=a.a.O(null).u()
return s}catch(r){return null}},
$S(){return this.a.$ti.h("o<~>?(M<C<1>,ae<1>?>)")}}
A.oy.prototype={
$0(){var s=this.a,r=s.e,q=r.H(0,this.b),p=q==null?null:q.u()
if(r.a===0)if(s.b){s=s.a
s===$&&A.L()
A.eS(s.gaG())}return p},
$S:0}
A.eA.prototype={
j(a){return this.a}}
A.U.prototype={
i(a,b){var s,r=this
if(!r.fk(b))return null
s=r.c.i(0,r.a.$1(r.$ti.h("U.K").a(b)))
return s==null?null:s.b},
l(a,b,c){var s=this
if(!s.fk(b))return
s.c.l(0,s.a.$1(b),new A.M(b,c,s.$ti.h("M<U.K,U.V>")))},
aa(a,b){b.ad(0,new A.ly(this))},
bk(a,b,c){return this.c.bk(0,b,c)},
E(a){var s=this
if(!s.fk(a))return!1
return s.c.E(s.a.$1(s.$ti.h("U.K").a(a)))},
gbl(){var s=this.c,r=A.p(s).h("aG<1,2>")
return A.nJ(new A.aG(s,r),new A.lz(this),r.h("n.E"),this.$ti.h("M<U.K,U.V>"))},
ad(a,b){this.c.ad(0,new A.lA(this,b))},
gF(a){return this.c.a===0},
ga3(){var s=this.c,r=A.p(s).h("bX<2>")
return A.nJ(new A.bX(s,r),new A.lB(this),r.h("n.E"),this.$ti.h("U.K"))},
gk(a){return this.c.a},
cC(a,b,c,d){return this.c.cC(0,new A.lC(this,b,c,d),c,d)},
j(a){return A.nH(this)},
fk(a){return this.$ti.h("U.K").b(a)},
$ia_:1}
A.ly.prototype={
$2(a,b){this.a.l(0,a,b)
return b},
$S(){return this.a.$ti.h("~(U.K,U.V)")}}
A.lz.prototype={
$1(a){var s=a.b
return new A.M(s.a,s.b,this.a.$ti.h("M<U.K,U.V>"))},
$S(){return this.a.$ti.h("M<U.K,U.V>(M<U.C,M<U.K,U.V>>)")}}
A.lA.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.h("~(U.C,M<U.K,U.V>)")}}
A.lB.prototype={
$1(a){return a.a},
$S(){return this.a.$ti.h("U.K(M<U.K,U.V>)")}}
A.lC.prototype={
$2(a,b){return this.b.$2(b.a,b.b)},
$S(){return this.a.$ti.I(this.c).I(this.d).h("M<1,2>(U.C,M<U.K,U.V>)")}}
A.f7.prototype={
bH(a,b){return J.z(a,b)},
fX(a){return J.V(a)},
oi(a){return!0}}
A.eD.prototype={
bH(a,b){var s,r,q,p,o
if(a===b)return!0
s=A.vg(B.C.gnG(),B.C.gob(),B.C.goh(),this.$ti.h("eD.E"),t.S)
for(r=a.gA(a),q=0;r.m();){p=r.gp()
o=s.i(0,p)
s.l(0,p,(o==null?0:o)+1);++q}for(r=b.gA(b);r.m();){p=r.gp()
o=s.i(0,p)
if(o==null||o===0)return!1
s.l(0,p,o-1);--q}return q===0}}
A.d8.prototype={}
A.ev.prototype={
gv(a){return 3*J.V(this.b)+7*J.V(this.c)&2147483647},
D(a,b){if(b==null)return!1
return b instanceof A.ev&&J.z(this.b,b.b)&&J.z(this.c,b.c)}}
A.iJ.prototype={
bH(a,b){var s,r,q,p,o
if(a==b)return!0
if(a==null||b==null)return!1
if(a.gk(a)!==b.gk(b))return!1
s=A.vg(null,null,null,t.fA,t.S)
for(r=J.Z(a.ga3());r.m();){q=r.gp()
p=new A.ev(this,q,a.i(0,q))
o=s.i(0,p)
s.l(0,p,(o==null?0:o)+1)}for(r=J.Z(b.ga3());r.m();){q=r.gp()
p=new A.ev(this,q,b.i(0,q))
o=s.i(0,p)
if(o==null||o===0)return!1
s.l(0,p,o-1)}return!0},
fX(a){var s,r,q,p,o,n
if(a==null)return B.ab.gv(null)
for(s=J.Z(a.ga3()),r=this.$ti.y[1],q=0;s.m();){p=s.gp()
o=J.V(p)
n=a.i(0,p)
q=q+3*o+7*J.V(n==null?r.a(n):n)&2147483647}q=q+(q<<3>>>0)&2147483647
q^=q>>>11
return q+(q<<15>>>0)&2147483647}}
A.iQ.prototype={
sk(a,b){A.wX()},
q(a,b){return A.wX()}}
A.jr.prototype={
l(a,b,c){return A.Bl()}}
A.l3.prototype={}
A.cs.prototype={}
A.hZ.prototype={
n(){},
$ilJ:1}
A.i_.prototype={
nO(){if(this.w)throw A.a(A.D("Can't finalize a finalized Request."))
this.w=!0
return B.aL},
j(a){return this.a+" "+this.b.j(0)}}
A.lg.prototype={
$2(a,b){return a.toLowerCase()===b.toLowerCase()},
$S:108}
A.lh.prototype={
$1(a){return B.a.gv(a.toLowerCase())},
$S:110}
A.li.prototype={
eP(a,b,c,d,e,f,g){var s=this.b
if(s<100)throw A.a(A.I("Invalid status code "+s+".",null))
else{s=this.d
if(s!=null&&s<0)throw A.a(A.I("Invalid content length "+A.q(s)+".",null))}}}
A.i3.prototype={
ao(a){return this.kx(a)},
kx(b6){var s=0,r=A.i(t.n),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$ao=A.d(function(b7,b8){if(b7===1){o.push(b8)
s=p}for(;;)switch(s){case 0:if(m.b)throw A.a(A.wA("HTTP request failed. Client is already closed.",b6.b))
a4=v.G
l=new a4.AbortController()
a5=m.c
a5.push(l)
b6.hu()
s=3
return A.b(new A.cO(A.xe(b6.y,t.f4)).he(),$async$ao)
case 3:k=b8
p=5
j=b6
i=null
h=!1
g=null
if(j instanceof A.hQ){if(h)a6=i
else{h=!0
a7=j.cx
i=a7
a6=a7}a6=a6!=null}else a6=!1
if(a6){if(h){a6=i
a8=a6}else{h=!0
a7=j.cx
i=a7
a8=a7}g=a8==null?t.p8.a(a8):a8
g.J(new A.lm(l))}a6=b6.b
a9=a6.j(0)
b0=!J.l_(k)?k:null
b1=t.N
f=A.T(b1,t.K)
e=b6.y.length
d=null
if(e!=null){d=e
J.kY(f,"content-length",d)}for(b2=b6.r,b2=new A.aG(b2,A.p(b2).h("aG<1,2>")).gA(0);b2.m();){b3=b2.d
b3.toString
c=b3
J.kY(f,c.a,c.b)}f=A.Ew(f)
f.toString
A.S(f)
b2=l.signal
s=8
return A.b(A.ar(a4.fetch(a9,{method:b6.a,headers:f,body:b0,credentials:"same-origin",redirect:"follow",signal:b2}),t.m),$async$ao)
case 8:b=b8
a=b.headers.get("content-length")
a0=a!=null?A.vq(a,null):null
if(a0==null&&a!=null){f=A.wA("Invalid content-length header ["+a+"].",a6)
throw A.a(f)}a1=A.T(b1,b1)
b.headers.forEach(A.kL(new A.ln(a1)))
f=A.CF(b6,b)
a4=b.status
a6=a1
b0=a0
A.df(b.url)
b1=b.statusText
f=new A.jk(A.z0(f),b6,a4,b1,b0,a6,!1,!0)
f.eP(a4,b0,a6,!1,!0,b1,b6)
q=f
n=[1]
s=6
break
n.push(7)
s=6
break
case 5:p=4
b5=o.pop()
a2=A.F(b5)
a3=A.K(b5)
A.yq(a2,a3,b6)
n.push(7)
s=6
break
case 4:n=[2]
case 6:p=2
B.c.H(a5,l)
s=n.pop()
break
case 7:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$ao,r)},
n(){var s,r,q
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.a6)(s),++q)s[q].abort()
this.b=!0}}
A.lm.prototype={
$0(){return this.a.abort()},
$S:0}
A.ln.prototype={
$3(a,b,c){this.a.l(0,b.toLowerCase(),a)},
$2(a,b){return this.$3(a,b,null)},
$S:114}
A.tU.prototype={
$1(a){return A.eM(this.a,this.b,a)},
$S:115}
A.u6.prototype={
$0(){var s=this.a,r=s.a
if(r!=null){s.a=null
r.L()}},
$S:0}
A.u7.prototype={
$0(){var s=0,r=A.i(t.H),q=1,p=[],o=this,n,m,l,k
var $async$$0=A.d(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
o.a.c=!0
s=6
return A.b(A.ar(o.b.cancel(),t.X),$async$$0)
case 6:q=1
s=5
break
case 3:q=2
k=p.pop()
n=A.F(k)
m=A.K(k)
if(!o.a.b)A.yq(n,m,o.c)
s=5
break
case 2:s=1
break
case 5:return A.f(null,r)
case 1:return A.e(p.at(-1),r)}})
return A.h($async$$0,r)},
$S:3}
A.cO.prototype={
he(){var s=new A.l($.m,t.jz),r=new A.aa(s,t.iq),q=new A.jN(new A.lx(r),new Uint8Array(1024))
this.B(q.gc4(q),!0,q.gaG(),r.gn4())
return s}}
A.lx.prototype={
$1(a){return this.a.U(new Uint8Array(A.vY(a)))},
$S:120}
A.bR.prototype={
j(a){var s=this.b,r="ClientException: "+this.a
if(s!=null)return r+", uri="+s.j(0)
else return r},
$iO:1}
A.oh.prototype={
gfP(){var s,r
if(this.gbD()==null||!this.gbD().c.a.E("charset"))return B.l
s=this.gbD().c.a.i(0,"charset")
s.toString
r=A.wE(s)
return r==null?A.r(A.ak('Unsupported encoding "'+s+'".',null,null)):r},
sj2(a){var s,r,q,p,o,n,m=this,l=m.gfP().b8(a)
m.lf()
m.y=A.z1(l)
s=m.gbD()
if(s==null){l=t.N
m.sbD(A.nK("text","plain",A.bE(["charset",m.gfP().gbL()],l,l)))}else{l=m.gbD()
if(l!=null){r=l.a
if(r!=="text"){l=r+"/"+l.b
l=l==="application/xml"||l==="application/xml-external-parsed-entity"||l==="application/xml-dtd"||B.a.bG(l,"+xml")}else l=!0}else l=!1
if(l&&!s.c.a.E("charset")){l=t.N
q=A.bE(["charset",m.gfP().gbL()],l,l)
p=s.a
o=s.b
n=A.wS(s.c,l,l)
n.aa(0,q)
m.sbD(A.nK(p,o,n))}}},
gbD(){var s=this.r.i(0,"content-type")
if(s==null)return null
return A.wW(s)},
sbD(a){this.r.l(0,"content-type",a.j(0))},
lf(){if(!this.w)return
throw A.a(A.D("Can't modify a finalized Request."))}}
A.hQ.prototype={}
A.jD.prototype={}
A.e1.prototype={}
A.cv.prototype={}
A.jk.prototype={}
A.eY.prototype={}
A.fs.prototype={
j(a){var s=new A.a0(""),r=this.a
s.a=r
r+="/"
s.a=r
s.a=r+this.b
this.c.a.ad(0,new A.nN(s))
r=s.a
return r.charCodeAt(0)==0?r:r}}
A.nL.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j=this.a,i=new A.p1(null,j),h=$.zE()
i.eL(h)
s=$.zD()
i.dc(s)
r=i.gh1().i(0,0)
r.toString
i.dc("/")
i.dc(s)
q=i.gh1().i(0,0)
q.toString
i.eL(h)
p=t.N
o=A.T(p,p)
for(;;){p=i.d=B.a.cD(";",j,i.c)
n=i.e=i.c
m=p!=null
p=m?i.e=i.c=p.gC():n
if(!m)break
p=i.d=h.cD(0,j,p)
i.e=i.c
if(p!=null)i.e=i.c=p.gC()
i.dc(s)
if(i.c!==i.e)i.d=null
p=i.d.i(0,0)
p.toString
i.dc("=")
n=i.d=s.cD(0,j,i.c)
l=i.e=i.c
m=n!=null
if(m){n=i.e=i.c=n.gC()
l=n}else n=l
if(m){if(n!==l)i.d=null
n=i.d.i(0,0)
n.toString
k=n}else k=A.Ee(i)
n=i.d=h.cD(0,j,i.c)
i.e=i.c
if(n!=null)i.e=i.c=n.gC()
o.l(0,p,k)}i.nL()
return A.nK(r,q,o)},
$S:122}
A.nN.prototype={
$2(a,b){var s,r,q=this.a
q.a+="; "+a+"="
s=$.zB()
s=s.b.test(b)
r=q.a
if(s){q.a=r+'"'
s=A.yY(b,$.zq(),new A.nM(),null)
q.a=(q.a+=s)+'"'}else q.a=r+b},
$S:43}
A.nM.prototype={
$1(a){return"\\"+A.q(a.i(0,0))},
$S:54}
A.uv.prototype={
$1(a){var s=a.i(0,1)
s.toString
return s},
$S:54}
A.cn.prototype={
D(a,b){if(b==null)return!1
return b instanceof A.cn&&this.b===b.b},
a_(a,b){return this.b-b.b},
gv(a){return this.b},
j(a){return this.a},
$ia7:1}
A.dS.prototype={
j(a){return"["+this.a.a+"] "+this.d+": "+this.b}}
A.dT.prototype={
gjl(){var s=this.b,r=s==null?null:s.a.length!==0,q=this.a
return r===!0?s.gjl()+"."+q:q},
gom(){var s,r
if(this.b==null){s=this.c
s.toString
r=s}else{s=$.v7().c
s.toString
r=s}return r},
P(a,b,c,d){var s,r,q=this,p=a.b
if(p>=q.gom().b){if((d==null||d===B.t)&&p>=2000){d=A.fG()
if(c==null)c="autogenerated stack trace for "+a.j(0)+" "+b}p=q.gjl()
s=Date.now()
$.wT=$.wT+1
r=new A.dS(a,b,p,new A.bT(s,0,!1),c,d)
if(q.b==null)q.ip(r)
else $.v7().ip(r)}},
ov(a,b){return this.P(a,b,null,null)},
f9(){if(this.b==null){var s=this.f
if(s==null)s=this.f=A.c3(!0,t.ag)
return new A.aq(s,A.p(s).h("aq<1>"))}else return $.v7().f9()},
ip(a){var s=this.f
return s==null?null:s.q(0,a)}}
A.nF.prototype={
$0(){var s,r,q=this.a
if(B.a.K(q,"."))A.r(A.I("name shouldn't start with a '.'",null))
if(B.a.bG(q,"."))A.r(A.I("name shouldn't end with a '.'",null))
s=B.a.cB(q,".")
if(s===-1)r=q!==""?A.vp(""):null
else{r=A.vp(B.a.t(q,0,s))
q=B.a.a0(q,s+1)}return A.wU(q,r,A.T(t.N,t.W))},
$S:135}
A.m_.prototype={
mT(a){var s,r,q=t.mf
A.yB("absolute",A.u([a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],q))
s=this.a
s=s.aA(a)>0&&!s.bJ(a)
if(s)return a
s=A.yI()
r=A.u([s,a,null,null,null,null,null,null,null,null,null,null,null,null,null,null],q)
A.yB("join",r)
return this.ol(new A.fW(r,t.lS))},
ol(a){var s,r,q,p,o,n,m,l,k
for(s=a.gA(0),r=new A.ee(s,new A.m0()),q=this.a,p=!1,o=!1,n="";r.m();){m=s.gp()
if(q.bJ(m)&&o){l=A.iV(m,q)
k=n.charCodeAt(0)==0?n:n
n=B.a.t(k,0,q.cH(k,!0))
l.b=n
if(q.dn(n))l.e[0]=q.gcf()
n=l.j(0)}else if(q.aA(m)>0){o=!q.bJ(m)
n=m}else{if(!(m.length!==0&&q.fK(m[0])))if(p)n+=q.gcf()
n+=m}p=q.dn(m)}return n.charCodeAt(0)==0?n:n},
dK(a,b){var s=A.iV(b,this.a),r=s.d,q=A.a5(r).h("c7<1>")
r=A.ap(new A.c7(r,new A.m1(),q),q.h("n.E"))
s.d=r
q=s.b
if(q!=null)B.c.og(r,0,q)
return s.d},
h5(a){var s
if(!this.lV(a))return a
s=A.iV(a,this.a)
s.h4()
return s.j(0)},
lV(a){var s,r,q,p,o,n,m,l=this.a,k=l.aA(a)
if(k!==0){if(l===$.kV())for(s=0;s<k;++s)if(a.charCodeAt(s)===47)return!0
r=k
q=47}else{r=0
q=null}for(p=a.length,s=r,o=null;s<p;++s,o=q,q=n){n=a.charCodeAt(s)
if(l.bo(n)){if(l===$.kV()&&n===47)return!0
if(q!=null&&l.bo(q))return!0
if(q===46)m=o==null||o===46||l.bo(o)
else m=!1
if(m)return!0}}if(q==null)return!0
if(l.bo(q))return!0
if(q===46)l=o==null||l.bo(o)||o===46
else l=!1
if(l)return!0
return!1},
oP(a){var s,r,q,p,o=this,n='Unable to find a path to "',m=o.a,l=m.aA(a)
if(l<=0)return o.h5(a)
s=A.yI()
if(m.aA(s)<=0&&m.aA(a)>0)return o.h5(a)
if(m.aA(a)<=0||m.bJ(a))a=o.mT(a)
if(m.aA(a)<=0&&m.aA(s)>0)throw A.a(A.wY(n+a+'" from "'+s+'".'))
r=A.iV(s,m)
r.h4()
q=A.iV(a,m)
q.h4()
l=r.d
if(l.length!==0&&l[0]===".")return q.j(0)
l=r.b
p=q.b
if(l!=p)l=l==null||p==null||!m.h9(l,p)
else l=!1
if(l)return q.j(0)
for(;;){l=r.d
if(l.length!==0){p=q.d
l=p.length!==0&&m.h9(l[0],p[0])}else l=!1
if(!l)break
B.c.eu(r.d,0)
B.c.eu(r.e,1)
B.c.eu(q.d,0)
B.c.eu(q.e,1)}l=r.d
p=l.length
if(p!==0&&l[0]==="..")throw A.a(A.wY(n+a+'" from "'+s+'".'))
l=t.N
B.c.fY(q.d,0,A.b4(p,"..",!1,l))
p=q.e
p[0]=""
B.c.fY(p,1,A.b4(r.d.length,m.gcf(),!1,l))
m=q.d
l=m.length
if(l===0)return"."
if(l>1&&B.c.gaQ(m)==="."){B.c.jK(q.d)
m=q.e
m.pop()
m.pop()
m.push("")}q.b=""
q.jL()
return q.j(0)},
jE(a){var s,r,q=this,p=A.yn(a)
if(p.gaD()==="file"&&q.a===$.hM())return p.j(0)
else if(p.gaD()!=="file"&&p.gaD()!==""&&q.a!==$.hM())return p.j(0)
s=q.h5(q.a.h8(A.yn(p)))
r=q.oP(s)
return q.dK(0,r).length>q.dK(0,s).length?s:r}}
A.m0.prototype={
$1(a){return a!==""},
$S:25}
A.m1.prototype={
$1(a){return a.length!==0},
$S:25}
A.un.prototype={
$1(a){return a==null?"null":'"'+a+'"'},
$S:142}
A.nv.prototype={
ks(a){var s=this.aA(a)
if(s>0)return B.a.t(a,0,s)
return this.bJ(a)?a[0]:null},
h9(a,b){return a===b}}
A.nS.prototype={
jL(){var s,r,q=this
for(;;){s=q.d
if(!(s.length!==0&&B.c.gaQ(s)===""))break
B.c.jK(q.d)
q.e.pop()}s=q.e
r=s.length
if(r!==0)s[r-1]=""},
h4(){var s,r,q,p,o,n=this,m=A.u([],t.s)
for(s=n.d,r=s.length,q=0,p=0;p<s.length;s.length===r||(0,A.a6)(s),++p){o=s[p]
if(!(o==="."||o===""))if(o==="..")if(m.length!==0)m.pop()
else ++q
else m.push(o)}if(n.b==null)B.c.fY(m,0,A.b4(q,"..",!1,t.N))
if(m.length===0&&n.b==null)m.push(".")
n.d=m
s=n.a
n.e=A.b4(m.length+1,s.gcf(),!0,t.N)
r=n.b
if(r==null||m.length===0||!s.dn(r))n.e[0]=""
r=n.b
if(r!=null&&s===$.kV())n.b=A.hL(r,"/","\\")
n.jL()},
j(a){var s,r,q,p,o=this.b
o=o!=null?o:""
for(s=this.d,r=s.length,q=this.e,p=0;p<r;++p)o=o+q[p]+s[p]
o+=B.c.gaQ(q)
return o.charCodeAt(0)==0?o:o}}
A.iW.prototype={
j(a){return"PathException: "+this.a},
$iO:1}
A.p2.prototype={
j(a){return this.gbL()}}
A.nT.prototype={
fK(a){return B.a.V(a,"/")},
bo(a){return a===47},
dn(a){var s=a.length
return s!==0&&a.charCodeAt(s-1)!==47},
cH(a,b){if(a.length!==0&&a.charCodeAt(0)===47)return 1
return 0},
aA(a){return this.cH(a,!1)},
bJ(a){return!1},
h8(a){var s
if(a.gaD()===""||a.gaD()==="file"){s=a.gaR()
return A.vS(s,0,s.length,B.l,!1)}throw A.a(A.I("Uri "+a.j(0)+" must have scheme 'file:'.",null))},
gbL(){return"posix"},
gcf(){return"/"}}
A.pE.prototype={
fK(a){return B.a.V(a,"/")},
bo(a){return a===47},
dn(a){var s=a.length
if(s===0)return!1
if(a.charCodeAt(s-1)!==47)return!0
return B.a.bG(a,"://")&&this.aA(a)===s},
cH(a,b){var s,r,q,p=a.length
if(p===0)return 0
if(a.charCodeAt(0)===47)return 1
for(s=0;s<p;++s){r=a.charCodeAt(s)
if(r===47)return 0
if(r===58){if(s===0)return 0
q=B.a.bn(a,"/",B.a.S(a,"//",s+1)?s+3:s)
if(q<=0)return p
if(!b||p<q+3)return q
if(!B.a.K(a,"file://"))return q
p=A.yJ(a,q+1)
return p==null?q:p}}return 0},
aA(a){return this.cH(a,!1)},
bJ(a){return a.length!==0&&a.charCodeAt(0)===47},
h8(a){return a.j(0)},
gbL(){return"url"},
gcf(){return"/"}}
A.q7.prototype={
fK(a){return B.a.V(a,"/")},
bo(a){return a===47||a===92},
dn(a){var s=a.length
if(s===0)return!1
s=a.charCodeAt(s-1)
return!(s===47||s===92)},
cH(a,b){var s,r=a.length
if(r===0)return 0
if(a.charCodeAt(0)===47)return 1
if(a.charCodeAt(0)===92){if(r<2||a.charCodeAt(1)!==92)return 1
s=B.a.bn(a,"\\",2)
if(s>0){s=B.a.bn(a,"\\",s+1)
if(s>0)return s}return r}if(r<3)return 0
if(!A.yN(a.charCodeAt(0)))return 0
if(a.charCodeAt(1)!==58)return 0
r=a.charCodeAt(2)
if(!(r===47||r===92))return 0
return 3},
aA(a){return this.cH(a,!1)},
bJ(a){return this.aA(a)===1},
h8(a){var s,r
if(a.gaD()!==""&&a.gaD()!=="file")throw A.a(A.I("Uri "+a.j(0)+" must have scheme 'file:'.",null))
s=a.gaR()
if(a.gbI()===""){r=s.length
if(r>=3&&B.a.K(s,"/")&&A.yJ(s,1)!=null){A.x8(0,0,r,"startIndex")
s=A.EP(s,"/","",0)}}else s="\\\\"+a.gbI()+s
r=A.hL(s,"/","\\")
return A.vS(r,0,r.length,B.l,!1)},
n3(a,b){var s
if(a===b)return!0
if(a===47)return b===92
if(a===92)return b===47
if((a^b)!==32)return!1
s=a|32
return s>=97&&s<=122},
h9(a,b){var s,r
if(a===b)return!0
s=a.length
if(s!==b.length)return!1
for(r=0;r<s;++r)if(!this.n3(a.charCodeAt(r),b.charCodeAt(r)))return!1
return!0},
gbL(){return"windows"},
gcf(){return"\\"}}
A.hP.prototype={
aq(){var s=0,r=A.i(t.H),q=this,p,o,n,m
var $async$aq=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:if((q.a.a.a&30)===0){for(p=q.b,o=A.C5(p,p.r,A.p(p).c),n=o.$ti.c;o.m();){m=o.d;(m==null?n.a(m):m).L()}p.au(0)}s=2
return A.b(q.c.a,$async$aq)
case 2:return A.f(null,r)}})
return A.h($async$aq,r)},
j6(){var s=this.c
if((s.a.a&30)===0)s.L()},
b1(a,b){var s=new A.aa(new A.l($.m,t.D),t.h)
if((this.a.a.a&30)!==0)s.L()
else this.b.q(0,s)
return A.dN(new A.l1(a,s,b),b).J(new A.l2(this,s))}}
A.l1.prototype={
$0(){return this.a.$1(this.b.a)},
$S(){return this.c.h("o<0>()")}}
A.l2.prototype={
$0(){var s=this.b
this.a.b.H(0,s)
if((s.a.a&30)===0)s.L()},
$S:1}
A.cq.prototype={
j(a){return"PowerSyncCredentials<endpoint: "+this.a+" userId: "+A.q(this.c)+" expiresAt: "+A.q(this.d)+">"}}
A.f5.prototype={
ex(){var s=this
return A.bE(["op_id",s.a,"op",s.c.c,"type",s.d,"id",s.e,"tx_id",s.b,"data",s.r,"metadata",s.f,"old",s.w],t.N,t.z)},
j(a){var s=this
return"CrudEntry<"+s.b+"/"+s.a+" "+s.c.c+" "+s.d+"/"+s.e+" "+A.q(s.r)+">"},
D(a,b){var s=this
if(b==null)return!1
return b instanceof A.f5&&b.b===s.b&&b.a===s.a&&b.c===s.c&&b.d===s.d&&b.e===s.e&&B.y.bH(b.r,s.r)},
gv(a){var s=this
return A.c0(s.b,s.a,s.c.c,s.d,s.e,B.y.fX(s.r))}}
A.fS.prototype={
aF(){return"UpdateType."+this.b},
ex(){return this.c}}
A.uW.prototype={
$1(a){return new A.bf(A.vZ(a.a))},
$S:144}
A.uV.prototype={
$1(a){var s=a.a
return s.gaP(s)},
$S:145}
A.f4.prototype={
j(a){return"CredentialsException: "+this.a},
$iO:1}
A.dY.prototype={
j(a){return"SyncProtocolException: "+this.a},
$iO:1}
A.db.prototype={
j(a){return"SyncResponseException: "+this.a+" "+this.b},
$iO:1}
A.u4.prototype={
$1(a){var s
A.uX("["+a.d+"] "+a.a.a+": "+a.e.j(0)+": "+a.b)
s=a.r
if(s!=null)A.uX(s)
s=a.w
if(s!=null)A.uX(s)},
$S:32}
A.cY.prototype={
j(a){return v.G.String(this.a)},
gv(a){return A.R(v.G.Number(this.a))},
D(a,b){if(b==null)return!1
return b instanceof A.cY&&this.a===b.a},
$idO:1}
A.bf.prototype={
cI(a){var s=this.a
if(a instanceof A.bf)return new A.bf(s.cI(a.a))
else return new A.bf(s.cI(A.vZ(a.a)))},
fJ(a){return this.kL(A.vZ(a))}}
A.lv.prototype={
$1(a){return a.b0(this.a,this.b)},
$S(){return this.b.h("o<0>(aJ)")}}
A.lt.prototype={
$1(a){return this.jX(a)},
jX(a){var s=0,r=A.i(t.I),q,p
var $async$$1=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=3
return A.b(A.d3(a,"target",null),$async$$1)
case 3:if(c!=="9223372036854775807"){q=null
s=1
break}s=4
return A.b(a.dG("SELECT 1 FROM ps_crud LIMIT 1"),$async$$1)
case 4:if(c!=null){q=null
s=1
break}s=5
return A.b(a.dG(u.B),$async$$1)
case 5:p=c
q=A.vU(p==null?null:p.i(0,"seq"))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$1,r)},
$S:155}
A.lu.prototype={
$1(a){return this.jW(a)},
jW(a){var s=0,r=A.i(t.y),q,p=this,o,n
var $async$$1=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=3
return A.b(a.je("SELECT 1 FROM ps_crud LIMIT 1"),$async$$1)
case 3:n=c
if(!n.gF(n)){q=!1
s=1
break}s=4
return A.b(a.je(u.B),$async$$1)
case 4:o=c
if(A.R(o.gah(o).i(0,"seq"))!==p.a){q=!1
s=1
break}s=5
return A.b(A.d3(a,"target",p.b),$async$$1)
case 5:q=!0
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$1,r)},
$S:157}
A.lp.prototype={
$1(a){return this.jV(a)},
jV(a){var s=0,r=A.i(t.N),q,p=this,o
var $async$$1=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=3
return A.b(A.iY(a,p.a,p.b),$async$$1)
case 3:o=c
o.toString
q=o
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$1,r)},
$S:33}
A.dF.prototype={
j(a){return this.a},
$iO:1}
A.lH.prototype={
hi(a,b){var s=this.b
return A.Bu(new A.aq(s,A.p(s).h("aq<1>")),a,this.a,"waitForCheckpointRequestsReady",new A.lI(this,b),t.hi)},
p8(a){return this.hi(a,!0)}}
A.lI.prototype={
$1(a){var s,r,q
if(a instanceof A.h7)throw A.a(B.A)
s=a instanceof A.eh
r=s?a.a:null
if(s){q=r.giX()
if(q!=null)A.ik(q.a,q.b)
return!0}if(a instanceof A.hl){if(this.b&&(this.a.c.a.a&30)===0)this.a.c.L()
return!1}},
$S:163}
A.ca.prototype={}
A.hl.prototype={}
A.eh.prototype={}
A.h7.prototype={}
A.fq.prototype={$ias:1,$ib7:1}
A.dL.prototype={$ias:1}
A.lG.prototype={}
A.fR.prototype={$ias:1,$ib7:1}
A.m3.prototype={}
A.m4.prototype={
$1(a){return A.A8(t.f.a(a))},
$S:57}
A.mF.prototype={
ex(){var s,r,q,p,o=t.N,n=A.T(o,t.dV)
for(s=this.a,s=new A.aG(s,A.p(s).h("aG<1,2>")).gA(0),r=t.S;s.m();){q=s.d
p=q.a
q=q.b.a
n.l(0,p,A.bE(["priority",q[1],"at_last",q[0],"since_last",q[2],"target_count",q[3]],o,r))}return A.bE(["buckets",n],o,t.X)}}
A.mG.prototype={
$2(a,b){var s
t.f.a(b)
s=A.R(b.i(0,"priority"))
return new A.M(a,new A.kh([A.R(b.i(0,"at_last")),s,A.R(b.i(0,"since_last")),A.R(b.i(0,"target_count"))]),t.lx)},
$S:58}
A.fc.prototype={$ias:1,$ib7:1}
A.dG.prototype={$ias:1}
A.f8.prototype={$ias:1,$ib7:1}
A.f_.prototype={$ias:1,$ib7:1}
A.fg.prototype={$ias:1,$ib7:1}
A.fP.prototype={$ias:1,$ib7:1}
A.nu.prototype={}
A.fL.prototype={}
A.lF.prototype={}
A.fo.prototype={
D(a,b){if(b==null)return!1
return b instanceof A.fo},
gv(a){return B.a.gv("legacy")}}
A.d6.prototype={
D(a,b){var s
if(b==null)return!1
if(b instanceof A.d6)s=b.a.a===this.a.a
else s=!1
return s},
gv(a){return B.b.gv(this.a.a)}}
A.p3.prototype={
aF(){return"SyncClientImplementation."+this.b}}
A.aK.prototype={
j(a){var s,r,q=this,p=A.u([],t.iE),o=q.a
if(o!=null)p.push(new A.Q("core",o.a))
s=q.b
if(s!=null)p.push(new A.Q("uploading",s))
r=q.c
if(r!=null)p.push(new A.Q("downloadError",A.xi(null,r)))
r=q.d
if(r!=null)p.push(new A.Q("uploadError",A.xi(null,r)))
return"SyncStatusUpdate("+new A.a8(p,new A.pb(),t.eK).bp(0,", ")+")"}}
A.pb.prototype={
$1(a){return a.a+": "+A.q(a.b)},
$S:59}
A.dJ.prototype={
ex(){var s,r,q,p,o=this,n=o.d,m=t.N
n=A.bE(["total",n.b,"downloaded",n.a],m,t.S)
s=o.w
A:{if(s==null){r=null
break A}r=1000*s.a+s.b
break A}q=o.x
B:{if(q==null){p=null
break B}p=1000*q.a+q.b
break B}return A.bE(["name",o.a,"parameters",o.b,"priority",o.c,"progress",n,"active",o.e,"is_default",o.f,"has_explicit_subscription",o.r,"expires_at",r,"last_synced_at",p],m,t.X)}}
A.uP.prototype={
$0(){var s=this,r=s.b,q=s.a,p=s.d,o=A.a5(r).h("@<1>").I(p.h("ae<0>")).h("a8<1,2>"),n=A.ap(new A.a8(r,new A.uO(q,s.c,p),o),o.h("X.E"))
q.a=n},
$S:0}
A.uO.prototype={
$1(a){var s=this.b
return a.az(new A.uM(s,this.c),new A.uN(this.a,s),s.gfD())},
$S(){return this.c.h("ae<0>(C<0>)")}}
A.uM.prototype={
$1(a){return this.a.q(0,a)},
$S(){return this.b.h("~(0)")}}
A.uN.prototype={
$0(){var s=0,r=A.i(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i
var $async$$0=A.d(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:j=n.a
s=!j.b?2:3
break
case 2:j.b=!0
q=5
j=j.a
j.toString
s=8
return A.b(A.kO(j),$async$$0)
case 8:o.push(7)
s=6
break
case 5:q=4
i=p.pop()
m=A.F(i)
l=A.K(i)
n.b.af(m,l)
o.push(7)
s=6
break
case 4:o=[1]
case 6:q=1
n.b.n()
s=o.pop()
break
case 7:case 3:return A.f(null,r)
case 1:return A.e(p.at(-1),r)}})
return A.h($async$$0,r)},
$S:3}
A.uQ.prototype={
$0(){var s=this.a,r=s.a
if(r!=null&&!s.b)return A.kO(r)},
$S:41}
A.uR.prototype={
$0(){var s=this.a.a
if(s!=null)return A.ED(s)},
$S:0}
A.uS.prototype={
$0(){var s=this.a.a
if(s!=null)return A.EH(s)},
$S:0}
A.uq.prototype={
$1(a){return a.u()},
$S:60}
A.v4.prototype={
$1(a){var s=this.a
s.q(0,a)
s.n()},
$S(){return this.b.h("E(0)")}}
A.v5.prototype={
$2(a,b){var s
if(this.a.a)throw A.a(a)
else{s=this.b
s.af(a,b)
s.n()}},
$S:6}
A.v3.prototype={
$0(){var s=0,r=A.i(t.H),q=this
var $async$$0=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:q.a.a=!0
s=2
return A.b(q.b,$async$$0)
case 2:return A.f(null,r)}})
return A.h($async$$0,r)},
$S:3}
A.pF.prototype={
$1(a){var s,r,q,p=this
try{if(p.a.$1(a)){p.b.L()
p.c.u()}}catch(q){s=A.F(q)
r=A.K(q)
p.b.b7(s,r)
p.c.u()}},
$S(){return this.d.h("~(0)")}}
A.pG.prototype={
$0(){var s=this.a
if((s.a.a&30)===0){s.ab(new A.bC(this.b))
this.c.u()}},
$S:1}
A.eg.prototype={
q(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="Stream is already closed"
for(s=J.ab(b),r=h.b,q=h.a.a,p=0;p<s.gk(b);){o=s.gk(b)-p
n=h.d
m=h.c
if(n!=null){l=Math.min(o,m)
k=p+l
if(p<0)A.r(A.ac(p,0,g,"start",g))
if(p>k)A.r(A.ac(k,p,g,"end",g))
n.hB(b,p,k)
if((h.c-=l)===0){m=B.f.gar(n.a)
j=n.a
j=J.cL(m,j.byteOffset,n.b*j.BYTES_PER_ELEMENT)
if((q.e&2)!==0)A.r(A.D(f))
q.bU(j)
h.d=null
h.c=4}p=k}else{l=Math.min(o,m)
i=J.zH(B.ag.gar(r))
m=4-h.c
B.f.R(i,m,m+l,b,p)
p+=l
if((h.c-=l)===0){m=h.c=r.getInt32(0,!0)-4
if(m<5){j=A.fG()
if((q.e&2)!==0)A.r(A.D(f))
q.eO(new A.dY("Invalid length for bson: "+m),j)}m=new A.bg(new Uint8Array(0),0)
m.hB(i,0,g)
h.d=m}}}},
af(a,b){this.a.af(a,b)},
n(){var s=this
if(s.d!=null||s.c!==4)s.a.af(new A.dY("Pending data when stream was closed"),A.fG())
s.a.a.Z()},
$iaj:1,
gk(a){return this.b}}
A.oN.prototype={
aq(){var s=0,r=A.i(t.H),q=this,p
var $async$aq=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:p=q.at
s=p!=null?2:3
break
case 2:q.w.n()
s=4
return A.b(A.Am(new A.Q(p.aq(),q.ch.n()),t.H,t.z),$async$aq)
case 4:case 3:q.y.n()
q.Q.n()
return A.f(null,r)}})
return A.h($async$aq,r)},
cQ(){var s=0,r=A.i(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g
var $async$cQ=A.d(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:g=A.zR()
n.at=g
m=g
q=2
s=5
return A.b(n.co(),$async$cQ)
case 5:h=n.c
l=h.a
k=h.b
j=null
if(k!=null)j=n.cl(m,k)
else if(l!=null)j=n.d1(l,m)
h=t.M
i=A.u([],h)
if(j!=null)J.hO(i,A.ir(j,new A.p0(n,m),t.H,t.K))
if(l!=null)J.zF(i,A.u([n.cU(m,l),n.d0(l,m)],h))
s=6
return A.b(A.vf(i,t.H),$async$cQ)
case 6:o.push(4)
s=3
break
case 2:o=[1]
case 3:q=1
i=n.as
i.a=B.a6
i.b.q(0,B.a6)
m.j6()
s=o.pop()
break
case 4:return A.f(null,r)
case 1:return A.e(p.at(-1),r)}})
return A.h($async$cQ,r)},
ev(){var s=0,r=A.i(t.g2),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$ev=A.d(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=n.d.w
if(!((h==null?B.r:h) instanceof A.d6))throw A.a(B.b8)
m=n.c.a
if(m==null)throw A.a(B.A)
l=n.at
if(l==null||(l.a.a.a&30)!==0)throw A.a(B.A)
p=4
s=7
return A.b(n.iz(m,l),$async$ev)
case 7:k=b
h=v.G.BigInt(k)
q=new A.cY(h)
s=1
break
p=2
s=6
break
case 4:p=3
g=o.pop()
j=A.F(g)
if(A.eI(l,j))throw A.a(B.A)
throw g
s=6
break
case 3:s=2
break
case 6:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$ev,r)},
co(){var s=0,r=A.i(t.N),q,p=this,o
var $async$co=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:o=p.cx
s=o==null?3:5
break
case 3:s=6
return A.b(A.lq(p.b),$async$co)
case 6:b=p.cx=b
s=4
break
case 5:b=o
case 4:q=b
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$co,r)},
cU(a,b){return this.ls(a,b)},
ls(a1,a2){var s=0,r=A.i(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$cU=A.d(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:g=a1.a.a,f=n.f,e=n.Q,d=n.ax,c=t.U,b=t.H
case 3:if(!((g.a&30)===0)){s=4
break}m=!1
p=6
l=null
s=9
return A.b(d.bK(new A.oQ(n,a1,a2),n.dO(a1),c),$async$cU)
case 9:k=a4
l=k.a
m=!l
p=2
s=8
break
case 6:p=5
a0=o.pop()
j=A.F(a0)
i=A.K(a0)
if(A.eI(a1,j)){s=1
break}m=!0
h=A.DE(j)
f.P(B.i,"Sync error: "+A.q(h),j,i)
if(!e.gal())A.r(e.ak())
e.a1(new A.aK(null,null,j,null))
s=8
break
case 5:s=2
break
case 8:s=(g.a&30)===0&&m?10:11
break
case 10:s=12
return A.b(a1.b1(new A.oR(n),b),$async$cU)
case 12:case 11:s=3
break
case 4:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$cU,r)},
cl(a,b){return this.lp(a,b)},
lp(a,b){var s=0,r=A.i(t.H),q=1,p=[],o=[],n=this,m,l,k
var $async$cl=A.d(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:l=n.w
k=t.H
l=new A.bP(A.bd(A.yQ(A.u([n.r,new A.a4(l,A.p(l).h("a4<1>"))],t.i3),k),"stream",t.K))
q=2
m=n.ay
case 5:s=7
return A.b(l.m(),$async$cl)
case 7:if(!d){s=6
break}l.gp()
s=8
return A.b(m.bK(new A.oO(n,a,b),n.dO(a),k),$async$cl)
case 8:s=5
break
case 6:o.push(4)
s=3
break
case 2:o=[1]
case 3:q=1
s=9
return A.b(l.u(),$async$cl)
case 9:s=o.pop()
break
case 4:return A.f(null,r)
case 1:return A.e(p.at(-1),r)}})
return A.h($async$cl,r)},
bX(a,b){return this.lq(a,b)},
lq(a8,a9){var s=0,r=A.i(t.H),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
var $async$bX=A.d(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:a6=null
f=a8.a.a,e=m.Q,d=m.c.a,c=d!=null,b=m.f,a=a9.gp5(),a0=t.H,a1=m.b,a2=m.ch
case 3:if(!((f.a&30)===0)){s=4
break}l=!1
p=6
s=9
return A.b(A.ls(a1),$async$bX)
case 9:k=b1
s=k!=null?10:12
break
case 10:if(!e.gal())A.r(e.ak())
e.a1(new A.aK(null,!0,null,null))
a3=k.a
a4=a6
if(a3===(a4==null?null:a4.a)){b.P(B.i,"Potentially previously uploaded CRUD entries are still present in the upload queue. \n                Make sure to handle uploads and complete CRUD transactions or batches by calling and awaiting their [.complete()] method.\n                The next upload iteration will be delayed.",null,null)
a3=A.wF("Delaying due to previously encountered CRUD item.")
throw A.a(a3)}a6=k
s=13
return A.b(a8.b1(a,a0),$async$bX)
case 13:if(!e.gal())A.r(e.ak())
e.a1(new A.aK(null,null,null,B.w))
s=11
break
case 12:j=d
i=null
s=j!=null?14:15
break
case 14:i=j
s=16
return A.b(m.iP(i,a8),$async$bX)
case 16:l=b1
case 15:n=[4]
s=7
break
case 11:n.push(8)
s=7
break
case 6:p=5
a7=o.pop()
h=A.F(a7)
g=A.K(a7)
a6=null
if(A.eI(a8,h)){n=[1]
s=7
break}b.P(B.i,"Data upload error",h,g)
if(!e.gal())A.r(e.ak())
e.a1(new A.aK(null,null,null,h))
s=17
return A.b(m.dO(a8),$async$bX)
case 17:if(c){a3=m.z
a3=(a3==null?null:a3.b)!==!0}else a3=!1
if(a3){n=[4]
s=7
break}b.P(B.i,"Caught exception when uploading. Upload will retry after a delay",h,g)
n.push(8)
s=7
break
case 5:n=[2]
case 7:p=2
if(!e.gal())A.r(e.ak())
e.a1(new A.aK(null,!1,null,null))
if((f.a&30)===0&&l){if(!a2.gal())A.r(a2.ak())
a2.a1(B.a5)}s=n.pop()
break
case 8:s=3
break
case 4:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$bX,r)},
d1(a,b){return this.mn(a,b)},
mn(a,b){var s=0,r=A.i(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e
var $async$d1=A.d(function(c,d){if(c===1){o.push(d)
s=p}for(;;)switch(s){case 0:j=b.a.a,i=n.f,h=n.Q,g=n.ch
case 3:if(!((j.a&30)===0)){s=4
break}p=6
s=9
return A.b(n.iP(a,b),$async$d1)
case 9:m=d
if(m){if(!g.gal())A.r(g.ak())
g.a1(B.a5)}if(!h.gal())A.r(h.ak())
h.a1(new A.aK(null,null,null,B.w))
s=1
break
p=2
s=8
break
case 6:p=5
e=o.pop()
l=A.F(e)
k=A.K(e)
if(A.eI(b,l)){s=1
break}i.P(B.i,"Error requesting checkpoint after crud upload",l,k)
if(!h.gal())A.r(h.ak())
h.a1(new A.aK(null,null,null,l))
s=10
return A.b(n.dO(b),$async$d1)
case 10:s=8
break
case 5:s=2
break
case 8:s=3
break
case 4:h.q(0,new A.aK(null,!1,null,null))
case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$d1,r)},
iP(a,b){return A.eX(this.b,new A.p_(this,a,b))},
eS(a,b){var s=a.r
s.l(0,"Authorization","Token "+b.b)
s.aa(0,this.CW)},
iz(a,b){return b.b1(new A.oZ(this,a),t.N)},
b4(a,b,c,d){return this.ml(a,b,c,d)},
iy(a,b,c){return this.b4(a,b,c,null)},
ml(a,b,c,d){var s=0,r=A.i(t.N),q,p=this,o,n,m,l,k,j,i
var $async$b4=A.d(function(e,f){if(e===1)return A.e(f,r)
for(;;)switch(s){case 0:s=d==null?3:4
break
case 3:s=5
return A.b(p.co(),$async$b4)
case 5:d=f
case 4:o=b.a.eb(d,c,a)
s=6
return A.b(t.cI.b(o)?o:A.bM(o,t.T),$async$b4)
case 6:n=f
if(n!=null){q=n
s=1
break}o=b.a
s=7
return A.b(o.cq(a),$async$b4)
case 7:m=f
if(m==null)throw A.a(A.vb("Not logged in"))
l=A.v8("POST",A.df(m.a).dv("sync/checkpoint-request"),a)
k=t.N
l.sj2(B.h.fO(A.bE(["client_id",d,"checkpoint_request_id",c],k,k),null))
p.eS(l,m)
k=l.r
k.l(0,"Accept","application/json")
k.l(0,"Content-Type","application/json")
i=A
s=9
return A.b(p.y.ao(l),$async$b4)
case 9:s=8
return A.b(i.j4(f),$async$b4)
case 8:j=f
k=j.b
s=k===401?10:11
break
case 10:s=12
return A.b(o.c7(!0,a),$async$b4)
case 12:case 11:if(k===404)throw A.a(B.b7)
if(k!==200)throw A.a(A.xh(j))
q=A.al(J.eU(J.eU(B.h.c5(A.w8(A.vW(j.e)).aI(j.w),null),"data"),"checkpoint_request_id"))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$b4,r)},
bZ(a,b){return this.lA(a,b)},
lA(a,b){var s=0,r=A.i(t.N),q,p=this,o,n,m,l,k
var $async$bZ=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:m=t.J
s=3
return A.b(b.b1(new A.oS(a),m),$async$bZ)
case 3:l=d
if(l==null)throw A.a(A.vb("Not logged in"))
k=A
s=4
return A.b(p.co(),$async$bZ)
case 4:o=k.q(d)
s=5
return A.b(b.b1(new A.oT(p,A.df(l.a).dv("write-checkpoint2.json?client_id="+o),l),t.b),$async$bZ)
case 5:n=d
o=n.b
s=o===401?6:7
break
case 6:s=8
return A.b(b.b1(new A.oU(a),m),$async$bZ)
case 8:case 7:if(o!==200)throw A.a(A.xh(n))
q=A.al(J.eU(J.eU(B.h.c5(A.w8(A.vW(n.e)).aI(n.w),null),"data"),"write_checkpoint"))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$bZ,r)},
dW(a,b){return this.ms(a,b)},
ms(a,b){var s=0,r=A.i(t.U),q,p=this,o,n
var $async$dW=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:n=p.f
n.P(B.m,"Starting Rust sync iteration",null,null)
s=3
return A.b(new A.qj(p,a,b).kS(),$async$dW)
case 3:o=d
n.P(B.m,"Ending Rust sync iteration. Immediate restart: "+o.a,null,null)
q=o
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$dW,r)},
c1(a,b,c){return this.m7(a,b,c)},
m7(a,b,c){var s=0,r=A.i(t.n),q,p=this,o,n,m,l,k,j
var $async$c1=A.d(function(d,e){if(d===1)return A.e(e,r)
for(;;)switch(s){case 0:l=b.a
s=3
return A.b(l.cq(c),$async$c1)
case 3:k=e
if(k==null)throw A.a(A.vb("Not logged in"))
o=A.v8("POST",A.df(k.a).dv("sync/stream"),c)
p.eS(o,k)
n=o.r
n.l(0,"Content-Type","application/json")
n.l(0,"Accept","application/vnd.powersync.bson-stream;q=0.9,application/x-ndjson;q=0.8")
o.sj2(B.h.fO(a,null))
s=4
return A.b(p.y.ao(o),$async$c1)
case 4:m=e
n=m.b
s=n===401?5:6
break
case 5:s=7
return A.b(l.c7(!0,c),$async$c1)
case 7:case 6:s=n!==200?8:9
break
case 8:j=A
s=10
return A.b(A.p4(m),$async$c1)
case 10:throw j.a(e)
case 9:q=m
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$c1,r)},
d0(a,b){return this.mk(a,b)},
mk(a,b){var s=0,r=A.i(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d
var $async$d0=A.d(function(c,a0){if(c===1){o.push(a0)
s=p}for(;;)switch(s){case 0:e={}
e.a=null
A:{k=n.d.w
if(k==null)k=B.r
j=k instanceof A.d6
i=j?k.a:null
if(j){e.a=i
break A}s=1
break}j=b.a.a,h=n.f,g=t.H
case 3:if(!((j.a&30)===0)){s=4
break}p=6
s=9
return A.b(b.b1(new A.oX(e,n,a),g),$async$d0)
case 9:p=2
s=8
break
case 6:p=5
d=o.pop()
m=A.F(d)
l=A.K(d)
if((j.a&30)!==0){s=1
break}h.P(B.i,"Error retrying checkpoint request",m,l)
s=10
return A.b(n.hU(b,e.a),$async$d0)
case 10:s=8
break
case 5:s=2
break
case 8:s=3
break
case 4:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$d0,r)},
bh(a,b,c){return this.mj(a,b,c)},
mj(a,b,c){var s=0,r=A.i(t.H),q,p=this,o,n,m,l,k,j,i
var $async$bh=A.d(function(d,e){if(d===1)return A.e(e,r)
for(;;)switch(s){case 0:k=new A.oV(p,c)
j=p.as
s=3
return A.b(j.hi(c,!1),$async$bh)
case 3:s=4
return A.b(k.$0(),$async$bh)
case 4:o=e
n=A.vX(b)
c.J(n.b)
s=5
return A.b(n.a,$async$bh)
case 5:i=o==null
if(i)e=i
else{s=6
break}s=7
break
case 6:i=o
s=8
return A.b(k.$0(),$async$bh)
case 8:e=!i.D(0,e)
case 7:if(e){s=1
break}k=p.z
m=k==null?null:k.r
k=!1
if(m!=null){l=m.a>=o.a
k=l}if(k){s=1
break}s=9
return A.b(j.hi(c,!1),$async$bh)
case 9:p.f.P(B.p,"Retry checkpoint request "+o.j(0),null,null)
s=10
return A.b(p.iy(c,a,v.G.String(o.a)),$async$bh)
case 10:case 1:return A.f(q,r)}})
return A.h($async$bh,r)},
hU(a,b){return a.b1(new A.oP(this,b),t.H)},
dO(a){return this.hU(a,null)},
dY(){var s=0,r=A.i(t.y),q,p=this
var $async$dY=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:if(p.c.b!=null){q=!0
s=1
break}s=3
return A.b(A.lr(p.b),$async$dY)
case 3:q=!b
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$dY,r)}}
A.p0.prototype={
$2(a,b){if(A.eI(this.b,a))return
this.a.f.P(B.i,"Error in crud upload loop",a,b)},
$S:6}
A.oQ.prototype={
$0(){return this.a.dW(this.b,this.c)},
$S:56}
A.oR.prototype={
$1(a){var s=this.a,r=s.d.d,q=A.vX(r==null?B.u:r),p=q.b
a.J(p)
s.as.c.a.J(p)
return q.a},
$S:15}
A.oO.prototype={
$0(){return this.a.bX(this.b,this.c)},
$S:3}
A.p_.prototype={
$0(){var s,r,q=this.a,p=q.d.w
if(p==null)p=B.r
s=this.b
r=this.c
if(p instanceof A.fo)return q.bZ(s,r)
else return q.iz(s,r)},
$S:63}
A.oZ.prototype={
$1(a){return this.kb(a)},
kb(a){var s=0,r=A.i(t.N),q,p=this,o,n,m,l
var $async$$1=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:o=p.a
s=3
return A.b(o.as.p8(a),$async$$1)
case 3:n=o
m=a
l=p.b
s=5
return A.b(A.v9(o.b,new A.oY(),a,t.N),$async$$1)
case 5:s=4
return A.b(n.iy(m,l,c),$async$$1)
case 4:q=c
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$1,r)},
$S:64}
A.oY.prototype={
$1(a){return A.nV(a)},
$S:33}
A.oS.prototype={
$1(a){return this.a.a.cq(a)},
$S:26}
A.oT.prototype={
$1(a){return this.k9(a)},
k9(a){var s=0,r=A.i(t.b),q,p=this,o,n,m
var $async$$1=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:o=A.v8("GET",p.b,a)
n=p.a
n.eS(o,p.c)
o.r.l(0,"Accept","application/json")
m=A
s=4
return A.b(n.y.ao(o),$async$$1)
case 4:s=3
return A.b(m.j4(c),$async$$1)
case 3:q=c
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$1,r)},
$S:66}
A.oU.prototype={
$1(a){return this.a.a.c7(!0,a)},
$S:26}
A.oX.prototype={
$1(a){return this.b.bh(this.c,this.a.a,a)},
$S:15}
A.oV.prototype={
$0(){return A.v9(this.a.b,new A.oW(),this.b,t.fo)},
$S:67}
A.oW.prototype={
$1(a){return this.ka(a)},
ka(a){var s=0,r=A.i(t.fo),q,p
var $async$$1=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=3
return A.b(A.d3(a,"current",null),$async$$1)
case 3:p=c
q=p==null?null:new A.cY(v.G.BigInt(p))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$1,r)},
$S:68}
A.oP.prototype={
$1(a){var s,r=this.b
if(r==null){r=this.a.d.d
if(r==null)r=B.u}s=A.vX(r)
a.J(s.b)
return s.a},
$S:15}
A.u_.prototype={
$0(){var s,r,q=this.b
if((q.a.a&30)===0){s=this.a
r=s.a
if(r!=null)r.u()
s.a=null
q.L()}},
$S:0}
A.qj.prototype={
hX(a){var s=this.a.e,r=A.a5(s).h("a8<1,a_<j,@>>")
s=A.ap(new A.a8(s,new A.qk(),r),r.h("X.E"))
return s},
kS(){return this.b.b1(new A.qq(this),t.U)},
dX(){var s=0,r=A.i(t.ks),q,p=this,o,n,m,l
var $async$dX=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:o=t.N
n=A.T(o,t.z)
m=p.a
l=m.d
n.l(0,"app_metadata",A.B1(l))
n.l(0,"parameters",A.B2(l))
n.l(0,"schema",B.h.aI(m.a))
n.l(0,"include_defaults",l.f!==!1)
n.l(0,"active_streams",p.hX(m.e))
m=l.w
n.l(0,"checkpoint_mode",(m==null?B.r:m) instanceof A.d6?"requests":"legacy")
if(l.x)n.l(0,"diagnostics",A.T(o,t.X))
s=3
return A.b(p.bg("start",B.h.b8(n)),$async$dX)
case 3:q=b
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$dX,r)},
d2(a,b){return this.mt(a,b)},
mt(a,b){var s=0,r=A.i(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g
var $async$d2=A.d(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:q=3
j=n.a
i=b.a.a
s=6
return A.b(j.b4(i,n.c,a.b,a.a),$async$d2)
case 6:m=d
s=7
return A.b(A.v9(j.b,new A.qp(m),i,t.H),$async$d2)
case 7:j=j.as
i=new A.eh(new A.fU(null))
j.a=i
j.b.q(0,i)
o.push(5)
s=4
break
case 3:q=2
g=p.pop()
l=A.F(g)
k=A.K(g)
if((b.a.a.a&30)===0){j=n.a
j.ch.q(0,new A.f0(l,k))
j=j.as
i=new A.eh(new A.ii(l,k))
j.a=i
j.b.q(0,i)}o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
b.j6()
b.aq()
s=o.pop()
break
case 5:return A.f(null,r)
case 1:return A.e(p.at(-1),r)}})
return A.h($async$d2,r)},
mc(a,b){return A.EK(this.a.c1(a,this.c,b),t.n).n_(new A.qo(),t.o)},
aN(a){return this.lF(a)},
lF(b5){var s=0,r=A.i(t.U),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$aN=A.d(function(b6,b7){if(b6===1){o.push(b7)
s=p}for(;;)switch(s){case 0:b3=!1
p=4
a2=new A.bP(A.bd(b5,"stream",t.K))
p=7
a3=t.Y,a4=m.a,a5=a4.f,a6=m.b.a.a,a7=t.p,a4=a4.w
case 11:s=13
return A.b(a2.m(),$async$aN)
case 13:if(!b7){s=12
break}l=a2.gp()
if((a6.a&30)!==0){s=10
break}k=null
j=l
i=null
h=!1
s=j instanceof A.dI?15:16
break
case 15:s=17
return A.b(m.bg("connection",l.b),$async$aN)
case 17:k=b7
s=14
break
case 16:g=null
if(j instanceof A.cr){if(h)a8=i
else{h=!0
a9=j.a
i=a9
a8=a9}a8=a7.b(a8)
if(a8){if(h)b0=i
else{h=!0
a9=j.a
i=a9
b0=a9}g=a7.a(b0)}}else a8=!1
s=a8?18:19
break
case 18:if(!m.d){a8=a4.b
if(a8>=4)A.r(a4.ap())
if((a8&1)!==0)a4.a1(null)
else if((a8&3)===0){a8=a4.bY()
b0=new A.bx(null)
b1=a8.c
if(b1==null)a8.b=a8.c=b0
else{b1.sbs(b0)
a8.c=b0}}m.d=!0}s=20
return A.b(m.bg("line_binary",g),$async$aN)
case 20:k=b7
s=14
break
case 19:f=null
a8=j instanceof A.cr
if(a8){if(h)b0=i
else{h=!0
a9=j.a
i=a9
b0=a9}A.al(b0)
if(h)b0=i
else{h=!0
a9=j.a
i=a9
b0=a9}f=A.al(b0)}s=a8?21:22
break
case 21:if(!m.d){a8=a4.b
if(a8>=4)A.r(a4.ap())
if((a8&1)!==0)a4.a1(null)
else if((a8&3)===0){a8=a4.bY()
b0=new A.bx(null)
b1=a8.c
if(b1==null)a8.b=a8.c=b0
else{b1.sbs(b0)
a8.c=b0}}m.d=!0}s=23
return A.b(m.bg("line_text",f),$async$aN)
case 23:k=b7
s=14
break
case 22:s=j instanceof A.fT?24:25
break
case 24:s=26
return A.b(m.fj("completed_upload"),$async$aN)
case 26:k=b7
s=14
break
case 25:s=j instanceof A.fO?27:28
break
case 27:s=29
return A.b(m.fj("refreshed_token"),$async$aN)
case 29:k=b7
s=14
break
case 28:e=null
a8=j instanceof A.ff
if(a8)e=j.a
s=a8?30:31
break
case 30:s=32
return A.b(m.bg("update_subscriptions",B.h.b8(m.hX(e))),$async$aN)
case 32:k=b7
s=14
break
case 31:d=null
c=null
a8=j instanceof A.f0
if(a8){d=j.a
c=j.b}if(a8)A.ik(d,c)
case 14:a8=J.Z(k)
case 33:if(!a8.m()){s=34
break}b=a8.gp()
a=b
if(a instanceof A.dL){a5.P(B.i,"Received EstablishSyncStream connection while already connected.",null,null)
s=33
break}a0=null
b0=a instanceof A.dG
if(b0)a0=a.a
if(b0){b3=a0
s=10
break}a1=null
b0=a3.b(a)
if(b0)a1=a
s=b0?35:36
break
case 35:s=37
return A.b(m.c_(a1),$async$aN)
case 37:case 36:s=33
break
case 34:s=11
break
case 12:case 10:n.push(9)
s=8
break
case 7:n=[4]
case 8:p=4
s=38
return A.b(a2.u(),$async$aN)
case 38:s=n.pop()
break
case 9:p=2
s=6
break
case 4:p=3
b4=o.pop()
if(A.F(b4) instanceof A.cs){if((m.b.a.a.a&30)===0)throw b4}else throw b4
s=6
break
case 3:s=2
break
case 6:q=new A.hn(b3)
s=1
break
case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$aN,r)},
d3(){var s=0,r=A.i(t.H),q=this,p,o,n,m
var $async$d3=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:m=J
s=2
return A.b(q.fj("stop"),$async$d3)
case 2:p=m.Z(b),o=t.Y
case 3:if(!p.m()){s=4
break}n=p.gp()
s=o.b(n)?5:6
break
case 5:s=7
return A.b(q.c_(n),$async$d3)
case 7:case 6:s=3
break
case 4:return A.f(null,r)}})
return A.h($async$d3,r)},
bg(a,b){return this.lM(a,b)},
fj(a){return this.bg(a,null)},
lM(a,b){var s=0,r=A.i(t.ks),q,p=this,o,n,m,l
var $async$bg=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:n=J
m=t.j
l=B.h
s=3
return A.b(A.lo(p.a.b,a,b),$async$bg)
case 3:o=n.zI(m.a(l.aI(d)),t.f)
q=new A.a8(o,A.Er(),o.$ti.h("a8<y.E,as>"))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$bg,r)},
c_(a){return this.lE(a)},
lE(a){var s=0,r=A.i(t.H),q=this,p,o,n,m,l,k,j,i
var $async$c_=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:p=a instanceof A.fq
if(p){o=a.a
n=a.b}else{o=null
n=null}if(p){A:{if("DEBUG"===o){p=B.p
break A}if("INFO"===o){p=B.m
break A}p=B.i
break A}q.a.f.ov(p,n)
s=2
break}p=a instanceof A.fR
m=p?a.a:null
if(p){p=q.a
p.z=m
p.Q.q(0,new A.aK(m,null,null,null))
s=2
break}p={}
p.a=null
l=a instanceof A.fc
if(l)p.a=a.a
s=l?3:4
break
case 3:k=q.b.b1(new A.ql(p,q),t.J)
s=p.a?5:7
break
case 5:s=8
return A.b(k,$async$c_)
case 8:s=6
break
case 7:k.bb(new A.qm(q),new A.qn(q),t.P)
case 6:s=2
break
case 4:if(a instanceof A.f8){q.a.Q.q(0,new A.aK(null,null,B.w,null))
s=2
break}s=a instanceof A.f_?9:10
break
case 9:p=q.a
s=11
return A.b(p.dY(),$async$c_)
case 11:if(!c){p.f.P(B.i,u.l,null,null)
p.Q.q(0,new A.aK(null,null,new A.aV(u.l),null))}s=2
break
case 10:p=a instanceof A.fg
j=p?a.a:null
if(p){q.a.x.q(0,B.h.b8(j))
s=2
break}p=a instanceof A.fP
i=p?a.a:null
if(p)q.a.f.P(B.i,"Unknown instruction: "+A.q(i),null,null)
case 2:return A.f(null,r)}})
return A.h($async$c_,r)}}
A.qk.prototype={
$1(a){return A.bE(["name",a.a,"params",B.h.aI(a.b)],t.N,t.z)},
$S:69}
A.qq.prototype={
$1(a){return this.kh(a)},
kh(b5){var s=0,r=A.i(t.U),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
var $async$$1=A.d(function(b6,b7){if(b6===1){o.push(b7)
s=p}for(;;)switch(s){case 0:b0=null
b1=null
p=4
b3=e=m.a
b4=J
s=7
return A.b(e.dX(),$async$$1)
case 7:b3,d=b4.Z(b7),c=t.Y,b=e.a.ch,a=A.p(b).h("aq<1>"),a0=t.o,a1=t.fu,a2=t.D,a3=t.h,a4=t.A
case 8:if(!d.m()){s=9
break}l=d.gp()
k=l
j=null
i=null
a5=k instanceof A.dL
if(a5){j=k.a
i=k.b}if(a5){b0=A.yQ(A.u([e.mc(j,b5),new A.aq(b,a)],a1),a0)
if(i!=null){a5=$.m
a6=new A.aa(new A.l(a5,a2),a3)
a7=A.bs(a4)
a8=new A.hP(a6,a7,new A.aa(new A.l(a5,a2),a3))
a7.q(0,a6)
b1=a8
h=a8
e.d2(i,h)}s=8
break}if(k instanceof A.dG){q=B.ai
n=[1]
s=5
break}g=null
a5=c.b(k)
if(a5)g=k
s=a5?10:11
break
case 10:s=12
return A.b(e.c_(g),$async$$1)
case 12:case 11:s=8
break
case 9:if(b0==null){q=B.ai
n=[1]
s=5
break}s=13
return A.b(e.aN(b0),$async$$1)
case 13:e=b7
q=e
n=[1]
s=5
break
n.push(6)
s=5
break
case 4:p=3
b2=o.pop()
f=A.F(b2)
e=m.a
if(!A.eI(e.b,f))e.a.Q.q(0,new A.aK(null,null,f,null))
throw b2
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
e=b1
e=e==null?null:e.aq()
s=14
return A.b(e instanceof A.l?e:A.bM(e,t.H),$async$$1)
case 14:e=m.a
d=e.a.as
d.c=new A.aa(new A.l($.m,t.D),t.h)
d.a=B.D
d.b.q(0,B.D)
s=15
return A.b(e.d3(),$async$$1)
case 15:s=n.pop()
break
case 6:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$$1,r)},
$S:70}
A.qp.prototype={
$1(a){return A.d3(a,"seed",this.a)},
$S:71}
A.qo.prototype={
$1(a){return this.kg(a)},
kg(a){var $async$$1=A.d(function(b,c){switch(b){case 2:n=q
s=n.pop()
break
case 1:o.push(c)
s=p}for(;;)switch(s){case 0:s=3
q=[1]
return A.kJ(A.xH(B.b9),$async$$1,r)
case 3:m=a.w
if(a.e.i(0,"content-type")==="application/vnd.powersync.bson-stream")m=new A.c8(A.EL(),m,t.jB)
else m=B.aY.bj(B.aF.bj(m))
s=4
q=[1]
return A.kJ(A.BZ(new A.aL(A.EM(),m,m.$ti.h("aL<C.T,aS>"))),$async$$1,r)
case 4:s=5
q=[1]
return A.kJ(A.xH(B.ba),$async$$1,r)
case 5:case 1:return A.kJ(null,0,r)
case 2:return A.kJ(o.at(-1),1,r)}})
var s=0,r=A.Df($async$$1,t.o),q,p=2,o=[],n=[],m
return A.DB(r)},
$S:72}
A.ql.prototype={
$1(a){return this.b.c.a.c7(this.a.a,a)},
$S:26}
A.qm.prototype={
$1(a){var s=this.a
if((s.b.a.a.a&30)===0)s.a.ch.q(0,B.b1)},
$S:73}
A.qn.prototype={
$2(a,b){var s=this.a
if(!A.eI(s.b,a))s.a.f.P(B.i,"Could not prefetch credentials",a,b)},
$S:6}
A.dI.prototype={
aF(){return"ConnectionEvent."+this.b},
$iaS:1}
A.cr.prototype={$iaS:1}
A.fT.prototype={$iaS:1}
A.fO.prototype={$iaS:1}
A.ff.prototype={$iaS:1}
A.f0.prototype={$iaS:1}
A.e0.prototype={
ao(a){return this.ky(a)},
ky(a){var s=0,r=A.i(t.n),q,p=this,o,n,m,l,k,j
var $async$ao=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:a.hu()
k=t.a
j=B.f
s=3
return A.b(new A.cO(A.xe(a.y,t.f4)).he(),$async$ao)
case 3:o=k.a(j.gar(c))
n=p.b++
m=p.a.dI({r:0,i:n,u:a.b.j(0),m:a.a,h:B.h.b8(a.r),b:o})
a.cx.J(new A.og(p,n))
s=4
return A.b(m,$async$ao)
case 4:l=c
n=A.Cf(p,n).c
q=A.Be(new A.a4(n,A.p(n).h("a4<1>")),l.s,null,A.Ar(l),!1,!0,null,a)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$ao,r)},
hr(a,b){this.a.y.postMessage({type:"abortHttpRequest",payload:{r:b,i:a}})}}
A.og.prototype={
$0(){return this.a.hr(this.b,!1)},
$S:0}
A.ki.prototype={
l4(a,b){var s=this.c
s.f=s.d=this.gnM()
s.r=new A.t3(this)},
ed(){var s=0,r=A.i(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$ed=A.d(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:n.d=!0
q=3
s=6
return A.b(n.a.a.es(n.b),$async$ed)
case 6:m=b
j=n.c
if(m!=null)j.q(0,A.b6(m,0,null))
else j.n()
o.push(5)
s=4
break
case 3:q=2
h=p.pop()
l=A.F(h)
k=A.K(h)
j=n.c
j.af(l,k)
j.n()
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
n.d=!1
n.jh()
s=o.pop()
break
case 5:return A.f(null,r)
case 1:return A.e(p.at(-1),r)}})
return A.h($async$ed,r)},
jh(){var s,r,q=!1
if(!this.d){s=this.c
r=s.b
if((r&1)!==0)if((r&4)===0){q=s.ga6().e
q=(q&4)===0}}if(q)this.ed()}}
A.t3.prototype={
$0(){var s=this.a
return s.a.hr(s.b,!0)},
$S:0}
A.vr.prototype={
$2(a,b){this.a.r.l(0,a,b)
return b},
$S:43}
A.vK.prototype={
n(){var s,r=this
if(!r.a){r.a=!0
s=r.c
if(s!=null)s.u()
r.iV(!1)}},
iV(a){var s,r=this.b
if((r.a.a&30)===0){if(a){s=this.c
if(s!=null)s.u()}r.L()}}}
A.pc.prototype={
me(a,b,c,d,e){var s=this.a.cE(a,new A.pd(a))
s.oO(e,b,c,d)
return s}}
A.pd.prototype={
$0(){return A.Bj(this.a)},
$S:74}
A.ch.prototype={
kT(a,b){var s=this,r=A.Bw(a,new A.lX(s))
s.a=r
r.c.a.J(s.goy())
s.d=$.cK().f9().O(new A.lY(s))},
h3(){var s=this,r=s.d
if(r!=null)r.u()
r=s.c
if(r!=null)r.e.q(0,new A.hr(s))
s.c=null}}
A.lX.prototype={
$3(a,b,c){return this.jY(a,b,c)},
jY(a3,a4,a5){var s=0,r=A.i(t.k0),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$$3=A.d(function(a6,a7){if(a6===1)return A.e(a7,r)
for(;;)switch(s){case 0:case 3:switch(a3.a){case 1:s=5
break
case 3:s=6
break
case 2:s=7
break
case 7:s=8
break
default:s=9
break}break
case 5:A.S(a4)
o=p.a
n=o.a
n===$&&A.L()
m=a4.lockName
if(!n.f){n.f=!0
A.q2(m).ot(n.gaG(),t.H)}n=A.mH(0,a4.crudThrottleTimeMs)
l=a4.retryDelayMs
A:{if(l==null){m=null
break A}m=A.mH(0,l)
break A}k=a4.syncParamsEncoded
B:{if(k==null){j=null
break B}j=t.f.a(B.h.c5(k,null))
break B}i=a4.appMetadataEncoded
C:{if(i==null){h=null
break C}h=t.N
h=A.wS(t.ea.a(B.h.c5(i,null)),h,h)
break C}g=J.z(a4.customHttpClient,!0)?new A.lW(o):null
f=a4.checkpointModeRequestsDelay
D:{if(f==null){e=B.r
break D}e=new A.d6(A.mH(f,0))
break D}d=a4.diagnostics
if(d==null)d=!1
c=a4.hasAuthenticator
if(c==null)c=!0
b=a4.hasUploader
if(b==null)b=!0
o.e=c?new A.o6(o.a):null
o.f=b?new A.j3(o.a):null
a=a4.databaseName
a0=a4.schemaJson
a1=a4.subscriptions
a1=a1==null?null:A.xo(a1)
if(a1==null)a1=B.bv
o.c=o.b.me(a,new A.fL(h,j,n,m,B.ap,null,g,e,d),a0,a1,o)
q=new A.Q({},null)
s=1
break
case 6:o=p.a
n=o.c
if(n!=null)n.e.q(0,new A.h6(o))
o.c=null
q=new A.Q({},null)
s=1
break
case 7:o=p.a
n=o.c
if(n!=null){m=A.xo(A.S(a4))
n.e.q(0,new A.h3(o,m))}q=new A.Q({},null)
s=1
break
case 8:a2=A
s=10
return A.b(p.a.c.f.ev(),$async$$3)
case 10:q=new a2.Q(a7.a,null)
s=1
break
case 9:throw A.a(A.D("Unexpected message type "+a3.j(0)))
case 4:case 1:return A.f(q,r)}})
return A.h($async$$3,r)},
$S:75}
A.lW.prototype={
$0(){var s=this.a.a
s===$&&A.L()
return new A.e0(s)},
$S:76}
A.lY.prototype={
$1(a){var s="["+a.d+"] "+a.a.a+": "+a.e.j(0)+": "+a.b,r=a.r
if(r!=null)s=s+"\n"+A.q(r)
r=a.w
if(r!=null)s=s+"\n"+r.j(0)
r=this.a.a
r===$&&A.L()
r.y.postMessage({type:"logEvent",payload:s.charCodeAt(0)==0?s:s})},
$S:32}
A.e7.prototype={
kY(a){var s=this.e
this.d.q(0,new A.a4(s,A.p(s).h("a4<1>")))
A.An(new A.pa(this),t.P)},
cj(){var s=0,r=A.i(t.H),q=this,p,o,n
var $async$cj=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:n=$.cK()
n.P(B.m,"Remote database closed, finding a new client",null,null)
p=q.f
p=p==null?null:p.aq()
s=2
return A.b(p instanceof A.l?p:A.bM(p,t.H),$async$cj)
case 2:q.f=null
s=3
return A.b(q.eY(),$async$cj)
case 3:o=b
s=o==null?4:6
break
case 4:n.P(B.m,"No client remains",null,null)
s=5
break
case 6:s=7
return A.b(q.c2(o),$async$cj)
case 7:case 5:return A.f(null,r)}})
return A.h($async$cj,r)},
jI(){var s,r,q=this,p=q.y,o=A.AE(p,A.a5(p).c)
p=q.x
s=A.wN(new A.bX(p,A.p(p).h("bX<2>")),t.E)
if(!B.b_.bH(o,s)){$.cK().P(B.m,"Subscriptions across tabs have changed, checking whether a reconnect is necessary",null,null)
p=A.ap(s,A.p(s).c)
q.y=p
r=q.f
if(r!=null){r.e=p
r=r.ch
if(r.d!=null)r.q(0,new A.ff(p))}}},
eY(){return this.lg()},
lg(){var s=0,r=A.i(t.gO),q,p=this,o,n,m,l,k,j,i,h,g
var $async$eY=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:j={}
i=p.x
h=A.p(i).h("b2<1>")
g=A.ap(new A.b2(i,h),h.h("n.E"))
i=g.length
if(i===0){q=null
s=1
break}h=new A.l($.m,t.iB)
o=new A.aa(h,t.if)
j.a=i
for(n=t.P,m=0;m<g.length;g.length===i||(0,A.a6)(g),++m){l=g[m]
k=l.a
k===$&&A.L()
k.er().aK(new A.p5(j,o,l),n).oW(B.u,new A.p6(j,l,o))}q=h
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$eY,r)},
c2(a){return this.mm(a)},
mm(a6){var s=0,r=A.i(t.H),q=this,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$c2=A.d(function(a7,a8){if(a7===1)return A.e(a8,r)
for(;;)switch(s){case 0:a5=$.cK()
a5.P(B.m,"Sync setup: Requesting database",null,null)
p=a6.a
p===$&&A.L()
s=2
return A.b(p.ew(),$async$c2)
case 2:o=a8
a5.P(B.m,"Sync setup: Connecting to endpoint",null,null)
p=o.databasePort
s=3
return A.b(A.q6(new A.kf(o.databaseName,p,o.lockName)),$async$c2)
case 3:n=a8
a5.P(B.m,"Sync setup: Has database, starting sync!",null,null)
q.w=a6
p=t.P
n.a.c.a.aK(new A.p7(a6),p)
m=A.u(["ps_crud"],t.s)
A.EE(new A.dm(t.hV))
l=n.d
k=A.Bn(m).bj(l)
l=q.b.c
if(l==null)l=B.G
j=A.Bo(k,l,new A.J(B.bF))
l=q.x
l=A.wN(new A.bX(l,A.p(l).h("bX<2>")),t.E)
l=A.ap(l,A.p(l).c)
q.y=l
i=q.c
h=a6.e
g=a6.f
f=q.b
e=q.a
p=A.bI(null,null,null,null,!1,p)
d=t.N
c=A.c3(!1,d)
b=A.c3(!1,t.k4)
a=A.c3(!1,t.hi)
a0=$.m
a1=A.c3(!1,t.o)
a2=f.r
a2=a2==null?null:a2.$0()
if(a2==null){a6=$.m.i(0,B.bH)
a2=a6==null?null:t.dF.a(a6).$0()
if(a2==null)a2=new A.i3(A.u([],t.kG))}a3=A.q2("sync-"+e)
e=A.q2("crud-"+e)
d=A.bE(["X-User-Agent","powersync-dart-core/2.6.0 Dart (flutter-web)"],d,d)
a4=new A.oN(i,n,new A.nu(h,g),f,l,a5,j,p,c,a2,b,new A.lH(B.D,a,new A.aa(new A.l(a0,t.D),t.h)),a3,e,a1,d)
q.f=a4
new A.aq(b,A.p(b).h("aq<1>")).O(new A.p8(q))
new A.aq(c,A.p(c).h("aq<1>")).O(new A.p9(q))
a4.cQ()
return A.f(null,r)}})
return A.h($async$c2,r)},
oO(a,b,c,d){var s,r,q,p=a.e!=null,o=a.f!=null
for(s=this.x,s=new A.d_(s,s.r,s.e);s.m();){r=s.d
if(r===a)continue
q=r.e
r=r.f
if(p!==(q!=null)||o!==(r!=null))throw A.a(A.D("Different tabs connecting in different modes (download-only / upload-only / full) is not supported"))}this.e.q(0,new A.fY(a,b,c,d))}}
A.pa.prototype={
$0(){var s=0,r=A.i(t.P),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8
var $async$$0=A.d(function(c9,d0){if(c9===1){p.push(d0)
s=q}for(;;)switch(s){case 0:c6=n.a
c7=c6.d.a
c7===$&&A.L()
c7=new A.bP(A.bd(new A.a4(c7,A.p(c7).h("a4<1>")),"stream",t.K))
q=2
a6=c6.x,a7=t.D,a8=c6.r
case 5:s=7
return A.b(c7.m(),$async$$0)
case 7:if(!d0){s=6
break}m=c7.gp()
q=9
l=m
k=null
j=!1
i=null
h=!1
g=null
f=null
e=null
d=null
a9=l instanceof A.fY
if(a9){if(j)b0=k
else{j=!0
b1=l.a
k=b1
b0=b1}g=b0
f=l.b
e=l.c
if(h)b2=i
else{h=!0
b3=l.d
i=b3
b2=b3}d=b2}s=a9?13:14
break
case 13:a6.l(0,g,d)
c=null
b=null
a9=c6.b
b4=f
b5=b4.c
if(b5==null){b5=a9.c
if(b5==null)b5=B.G}b6=b4.d
if(b6==null){b6=a9.d
if(b6==null)b6=B.u}b7=b4.b
if(b7==null){b7=a9.b
if(b7==null)b7=B.K}b8=b4.e
b9=b4.f
if(b9==null)b9=a9.f!==!1
c0=b4.a
if(c0==null){c0=a9.a
if(c0==null)c0=B.L}c1=b4.r
if(c1==null)c1=a9.r
c2=b4.w
if(c2==null){c2=a9.w
if(c2==null)c2=B.r}b4=b4.x
c3=a9.b
c4=!0
if(B.y.bH(b7,c3==null?B.K:c3)){c3=a9.c
if(b5.D(0,c3==null?B.G:c3)){c3=a9.d
if(b6.D(0,c3==null?B.u:c3))if(b8===a9.e)if(b9===(a9.f!==!1)){c3=a9.a
if(B.y.bH(c0,c3==null?B.L:c3)){c3=a9.w
a9=!c2.D(0,c3==null?B.r:c3)||b4!==a9.x}else a9=c4}else a9=c4
else a9=c4
else a9=c4
c4=a9}}a=new A.Q(new A.fL(c0,b7,b5,b6,b8,b9,c1,c2,b4),c4)
c=a.a
b=a.b
c6.b=c
c6.c=e
a9=c6.f
s=a9==null?15:17
break
case 15:s=18
return A.b(c6.c2(g),$async$$0)
case 18:s=16
break
case 17:s=b?19:21
break
case 19:a9.aq()
c6.f=null
s=22
return A.b(c6.c2(g),$async$$0)
case 22:s=20
break
case 21:c6.jI()
case 20:case 16:a9=g.a
a9===$&&A.L()
a9.y.postMessage({type:"notifySyncStatus",payload:a8})
s=12
break
case 14:a0=null
a9=l instanceof A.hr
if(a9){if(j)b0=k
else{j=!0
b1=l.a
k=b1
b0=b1}a0=b0}s=a9?23:24
break
case 23:a6.H(0,a0)
s=a6.a===0?25:27
break
case 25:a9=c6.f
a9=a9==null?null:a9.aq()
if(!(a9 instanceof A.l)){b4=new A.l($.m,a7)
b4.a=8
b4.c=a9
a9=b4}s=28
return A.b(a9,$async$$0)
case 28:c6.f=null
s=26
break
case 27:s=J.z(a0,c6.w)?29:30
break
case 29:s=31
return A.b(c6.cj(),$async$$0)
case 31:case 30:case 26:s=12
break
case 24:a1=null
a9=l instanceof A.h6
if(a9){if(j)b0=k
else{j=!0
b1=l.a
k=b1
b0=b1}a1=b0}s=a9?32:33
break
case 32:a6.H(0,a1)
a9=c6.f
a9=a9==null?null:a9.aq()
if(!(a9 instanceof A.l)){b4=new A.l($.m,a7)
b4.a=8
b4.c=a9
a9=b4}s=34
return A.b(a9,$async$$0)
case 34:c6.f=null
s=12
break
case 33:a2=null
a3=null
a9=l instanceof A.h3
if(a9){if(j)b0=k
else{j=!0
b1=l.a
k=b1
b0=b1}a2=b0
if(h)b2=i
else{h=!0
b3=l.b
i=b3
b2=b3}a3=b2}if(a9){a6.l(0,a2,a3)
c6.jI()}case 12:q=2
s=11
break
case 9:q=8
c8=p.pop()
a4=A.F(c8)
a5=A.K(c8)
a9=$.cK()
b4=A.q(m)
a9.P(B.i,"Error handling "+b4,a4,a5)
s=11
break
case 8:s=2
break
case 11:s=5
break
case 6:o.push(4)
s=3
break
case 2:o=[1]
case 3:q=1
s=35
return A.b(c7.u(),$async$$0)
case 35:s=o.pop()
break
case 4:return A.f(null,r)
case 1:return A.e(p.at(-1),r)}})
return A.h($async$$0,r)},
$S:30}
A.p5.prototype={
$1(a){var s;--this.a.a
s=this.b
if((s.a.a&30)===0)s.U(this.c)},
$S:8}
A.p6.prototype={
$0(){var s=this,r=s.a;--r.a
s.b.h3()
if(r.a===0&&(s.c.a.a&30)===0)s.c.U(null)},
$S:1}
A.p7.prototype={
$1(a){$.cK().P(B.p,"Detected closed client",null,null)
this.a.h3()},
$S:8}
A.p8.prototype={
$1(a){var s,r,q,p,o,n,m=this
$.cK().P(B.p,"Broadcasting status update: "+a.j(0),null,null)
s={}
r=a.a
if(r!=null){q=B.h.b8(r.a)
m.a.r.core=q
s.core=q}p=a.b
if(p!=null){m.a.r.uploading=p
s.uploading=p}o=a.c
if(o!=null){o=A.xb(o)
m.a.r.downloadError=o
s.downloadError=o}o=a.d
if(o!=null){o=A.xb(o)
m.a.r.uploadError=o
s.uploadError=o}for(o=m.a.x,o=new A.d_(o,o.r,o.e);o.m();){n=o.d.a
n===$&&A.L()
n.y.postMessage({type:"notifySyncStatus",payload:s})}},
$S:79}
A.p9.prototype={
$1(a){var s,r
$.cK().P(B.p,"Broadcasting diagnostic event: "+a,null,null)
for(s=this.a.x,s=new A.d_(s,s.r,s.e);s.m();){r=s.d.a
r===$&&A.L()
r.y.postMessage({type:"handleDiagnostics",payload:a})}},
$S:80}
A.fY.prototype={$ibO:1}
A.hr.prototype={$ibO:1}
A.h6.prototype={$ibO:1}
A.h3.prototype={$ibO:1}
A.af.prototype={
aF(){return"SyncWorkerMessageType."+this.b}}
A.pB.prototype={
$1(a){var s,r,q,p,o
t.c.a(a)
s=t.k.b(a)?a:new A.ag(a,A.a5(a).h("ag<1,j>"))
r=J.ab(s)
q=r.gk(s)===2
if(q){p=r.i(s,0)
o=r.i(s,1)}else{p=null
o=null}if(!q)throw A.a(A.D("Pattern matching error"))
return new A.kc(p,o)},
$S:81}
A.jB.prototype={
l_(a,b,c,d,e){var s=this,r=s.y
r.start()
s.w=null
s.r=A.aD(r,"message",new A.qd(s),!1,t.m)},
c3(a,b){return this.mo(a,b)},
mo(a,b){var s=0,r=A.i(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h,g,f,e
var $async$c3=A.d(function(c,d){if(c===1){p.push(d)
s=q}for(;;)switch(s){case 0:q=3
n=null
m=null
g=b.$0()
s=6
return A.b(t.nK.b(g)?g:A.bM(g,t.iu),$async$c3)
case 6:l=d
n=l.a
m=l.b
k={type:"okResponse",payload:{requestId:a,payload:n}}
g=o.y
if(m!=null)g.postMessage(k,m)
else g.postMessage(k)
q=1
s=5
break
case 3:q=2
e=p.pop()
j=A.F(e)
i=null
h=j
A:{if(h instanceof A.cs){i=1
break A}if(h instanceof A.bC){i=2
break A}i=0
break A}o.y.postMessage({type:"errorResponse",payload:{requestId:a,recognizedType:i,errorMessage:J.be(j)}})
s=5
break
case 2:s=1
break
case 5:return A.f(null,r)
case 1:return A.e(p.at(-1),r)}})
return A.h($async$c3,r)},
dR(){var s,r,q=this
if(q.e||(q.c.a.a&30)!==0)throw A.a(A.D("Channel has error, cannot send new requests"))
s=q.d++
r=new A.l($.m,t.ny)
q.a.l(0,s,new A.N(r,t.gW))
return new A.Q(s,r)},
dS(a,b){var s=this.dR(),r=s.a
this.y.postMessage({type:a.b,payload:r})
this.i3(r,b)
return s.b},
ii(a){return this.dS(a,null)},
i3(a,b){if(b!=null)b.aK(new A.qc(this,a),t.P)},
er(){var s=0,r=A.i(t.H),q=this
var $async$er=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:s=2
return A.b(q.ii(B.O),$async$er)
case 2:return A.f(null,r)}})
return A.h($async$er,r)},
ew(){var s=0,r=A.i(t.m),q,p=this,o
var $async$ew=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:o=A
s=3
return A.b(p.ii(B.Q),$async$ew)
case 3:q=o.S(b)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$ew,r)},
cq(a){return this.n8(a)},
n8(a){var s=0,r=A.i(t.J),q,p=this,o,n
var $async$cq=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:n=A
s=3
return A.b(p.dS(B.T,a),$async$cq)
case 3:o=n.vV(c)
q=o==null?null:A.xa(o)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$cq,r)},
c7(a,b){return this.oJ(a,b)},
oJ(a,b){var s=0,r=A.i(t.J),q,p=this,o,n
var $async$c7=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:n=A
s=3
return A.b(p.dS(a?B.S:B.P,b),$async$c7)
case 3:o=n.vV(d)
q=o==null?null:A.xa(o)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$c7,r)},
ey(a){return this.p7(a)},
p7(a){var s=0,r=A.i(t.H),q=this
var $async$ey=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=2
return A.b(q.dS(B.R,a),$async$ey)
case 2:return A.f(null,r)}})
return A.h($async$ey,r)},
eb(a,b,c){return this.n9(a,b,c)},
n9(a,b,c){var s=0,r=A.i(t.T),q,p=this,o,n,m,l
var $async$eb=A.d(function(d,e){if(d===1)return A.e(e,r)
for(;;)switch(s){case 0:n=p.dR()
m=n.a
p.y.postMessage({type:"customCheckpointRequest",payload:{req:m,clientId:a,requestId:b}})
p.i3(m,c)
l=A
s=3
return A.b(n.b,$async$eb)
case 3:o=l.kI(e)
q=o==null?null:o
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$eb,r)},
dI(a){return this.kz(a)},
kz(a){var s=0,r=A.i(t.m),q,p=this,o,n
var $async$dI=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:o=p.dR()
a.r=o.a
p.y.postMessage({type:"sendHttpRequest",payload:a},[a.b])
n=A
s=3
return A.b(o.b,$async$dI)
case 3:q=n.S(c)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$dI,r)},
es(a){return this.oL(a)},
oL(a){var s=0,r=A.i(t.aC),q,p=this,o,n
var $async$es=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:o=p.dR()
p.y.postMessage({type:"readResponseChunk",payload:{r:o.a,i:a}})
n=t.aC
s=3
return A.b(o.b,$async$es)
case 3:q=n.a(c)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$es,r)},
n(){var s=0,r=A.i(t.H),q=this,p,o,n
var $async$n=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:n=q.c
if((n.a.a&30)===0){p=q.r
if(p!=null)p.u()
q.y.close()
p=q.at
if(p!=null)p.pY()
for(p=q.a,p=new A.b3(p,p.r,p.e);p.m();)p.d.ab(B.aO)
for(p=q.b,o=new A.b3(p,p.r,p.e);o.m();)o.d.L()
p.au(0)
n.L()}return A.f(null,r)}})
return A.h($async$n,r)}}
A.qd.prototype={
$1(a){return this.kf(a)},
kf(a1){var s=0,r=A.i(t.H),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$$1=A.d(function(a2,a3){if(a2===1){o.push(a3)
s=p}for(;;)A:switch(s){case 0:c=A.S(a1.data)
b=A.mK(B.bq,c.type)
a=m.a
a0=a.as
a0.P(B.p,"[in] "+A.q(b),null,null)
l=null
switch(b){case B.O:l=A.R(A.bA(c.payload))
q=a.c3(l,new A.q8())
s=1
break A
case B.aq:l=A.S(c.payload).requestId
break
case B.aA:l=A.S(c.payload).requestId
break
case B.Q:case B.aB:case B.T:case B.S:case B.P:case B.R:case B.aD:l=A.R(A.bA(c.payload))
break
case B.aC:l=A.R(A.S(c.payload).req)
break
case B.av:h=A.S(c.payload)
q=a.c3(h.r,new A.q9(a,h))
s=1
break A
case B.aw:g=A.S(c.payload)
a0=g.i
f=g.r
a0=a.at.b.H(0,a0)
if(a0!=null)a0.iV(f)
s=1
break A
case B.ax:h=A.S(c.payload)
q=a.c3(h.r,new A.qa(a,h))
s=1
break A
case B.ay:g=A.S(c.payload)
a.a.H(0,g.requestId).U(g.payload)
s=1
break A
case B.az:g=A.S(c.payload)
e=g.recognizedType
if(e==null)e=0
B:{if(1===e){a0=new A.cs("Request aborted by `abortTrigger`",null)
break B}if(2===e){a0=new A.bC("aborted over web channel")
break B}a0=g.errorMessage
break B}a.a.H(0,g.requestId).ab(a0)
s=1
break A
case B.as:case B.at:a.Q.q(0,new A.Q(b,c.payload))
s=1
break A
case B.au:a0.P(B.m,"[Sync Worker]: "+A.al(c.payload),null,null)
s=1
break A
case B.ar:a=a.b.H(0,A.R(A.bA(c.payload)))
if(a!=null)a.L()
s=1
break A}a0=a.b
f=l
d=new A.aa(new A.l($.m,t.D),t.h)
a0.l(0,f,d)
k=d
p=3
s=6
return A.b(a.c3(l,new A.qb(a,b,c,k)),$async$$1)
case 6:n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
j=a0.H(0,l)
i=null
if(j!=null){i=j
i.L()}s=n.pop()
break
case 5:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$$1,r)},
$S:82}
A.q8.prototype={
$0(){var s=0,r=A.i(t.lg),q
var $async$$0=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:q=B.aj
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$0,r)},
$S:83}
A.q9.prototype={
$0(){var s=0,r=A.i(t.iS),q,p=this,o
var $async$$0=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:o=A
s=3
return A.b(p.a.at.pZ(p.b),$async$$0)
case 3:q=new o.Q(b,null)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$0,r)},
$S:84}
A.qa.prototype={
$0(){var s=0,r=A.i(t.jc),q,p=this,o,n
var $async$$0=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:s=3
return A.b(p.a.at.q0(p.b.i),$async$$0)
case 3:n=b
A:{if(n==null){o=B.aj
break A}o=new A.Q(n,[n])
break A}q=o
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$0,r)},
$S:85}
A.qb.prototype={
$0(){var s=this
return s.a.z.$3(s.b,s.c.payload,s.d.a)},
$S:86}
A.qc.prototype={
$1(a){var s=this.a,r=this.b
if(s.a.E(r)&&(s.c.a.a&30)===0)s.y.postMessage({type:"abortRequest",payload:r})},
$S:8}
A.o6.prototype={}
A.j3.prototype={
p6(a){return this.a.ey(a)}}
A.i7.prototype={
j(a){return"Worker communication channel closed"},
$iO:1}
A.uJ.prototype={
$1(a){var s=A.S(a.data)
if(s.isForSyncWorker)A.A5(A.S(s.message),this.a)
else this.b.q(0,new v.G.MessageEvent("message",{data:s.message}))},
$S:2}
A.uK.prototype={
$1(a){a.start()
A.aD(a,"message",this.a,!1,t.m)},
$S:2}
A.uI.prototype={
$1(a){var s,r=a.ports
r=J.Z(t.ip.b(r)?r:new A.ag(r,A.a5(r).h("ag<1,v>")))
s=this.a
while(r.m())s.$1(r.gp())},
$S:2}
A.ri.prototype={
n(){if($.zr())v.G.close()},
gn5(){return this.a},
goe(){return this.b}}
A.nU.prototype={}
A.nW.prototype={
eM(){return this.a.eM()}}
A.oq.prototype={
gk(a){return this.c.length},
gon(){return this.b.length},
kV(a,b){var s,r,q,p,o,n,m,l,k
for(s=this.c,r=s.length,q=a.a,p=s.$flags|0,o=q.length,n=this.b,m=0;m<r;++m){l=q.charCodeAt(m)
p&2&&A.B(s)
s[m]=l
if(l===13){k=m+1
if(k>=o||q.charCodeAt(k)!==10)l=10}if(l===10)n.push(m+1)}},
cK(a){var s,r=this
if(a<0)throw A.a(A.az("Offset may not be negative, was "+a+"."))
else if(a>r.c.length)throw A.a(A.az("Offset "+a+u.D+r.gk(0)+"."))
s=r.b
if(a<B.c.gah(s))return-1
if(a>=B.c.gaQ(s))return s.length-1
if(r.lN(a)){s=r.d
s.toString
return s}return r.d=r.lc(a)-1},
lN(a){var s,r,q=this.d
if(q==null)return!1
s=this.b
if(a<s[q])return!1
r=s.length
if(q>=r-1||a<s[q+1])return!0
if(q>=r-2||a<s[q+2]){this.d=q+1
return!0}return!1},
lc(a){var s,r,q=this.b,p=q.length-1
for(s=0;s<p;){r=s+B.b.Y(p-s,2)
if(q[r]>a)p=r
else s=r+1}return p},
eK(a){var s,r,q=this
if(a<0)throw A.a(A.az("Offset may not be negative, was "+a+"."))
else if(a>q.c.length)throw A.a(A.az("Offset "+a+" must be not be greater than the number of characters in the file, "+q.gk(0)+"."))
s=q.cK(a)
r=q.b[s]
if(r>a)throw A.a(A.az("Line "+s+" comes after offset "+a+"."))
return a-r},
dF(a){var s,r,q,p
if(a<0)throw A.a(A.az("Line may not be negative, was "+a+"."))
else{s=this.b
r=s.length
if(a>=r)throw A.a(A.az("Line "+a+" must be less than the number of lines in the file, "+this.gon()+"."))}q=s[a]
if(q<=this.c.length){p=a+1
s=p<r&&q>=s[p]}else s=!0
if(s)throw A.a(A.az("Line "+a+" doesn't have 0 columns."))
return q}}
A.iq.prototype={
gM(){return this.a.a},
gX(){return this.a.cK(this.b)},
ga7(){return this.a.eK(this.b)},
ga8(){return this.b}}
A.eq.prototype={
gM(){return this.a.a},
gk(a){return this.c-this.b},
gG(){return A.ve(this.a,this.b)},
gC(){return A.ve(this.a,this.c)},
gag(){return A.bJ(B.M.bT(this.a.c,this.b,this.c),0,null)},
gaH(){var s=this,r=s.a,q=s.c,p=r.cK(q)
if(r.eK(q)===0&&p!==0){if(q-s.b===0)return p===r.b.length-1?"":A.bJ(B.M.bT(r.c,r.dF(p),r.dF(p+1)),0,null)}else q=p===r.b.length-1?r.c.length:r.dF(p+1)
return A.bJ(B.M.bT(r.c,r.dF(r.cK(s.b)),q),0,null)},
a_(a,b){var s
if(!(b instanceof A.eq))return this.kK(0,b)
s=B.b.a_(this.b,b.b)
return s===0?B.b.a_(this.c,b.c):s},
D(a,b){var s=this
if(b==null)return!1
if(!(b instanceof A.eq))return s.kJ(0,b)
return s.b===b.b&&s.c===b.c&&J.z(s.a.a,b.a.a)},
gv(a){return A.c0(this.b,this.c,this.a.a,B.e,B.e,B.e)},
$ic2:1}
A.n0.prototype={
oc(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1=a.a
a.iS(B.c.gah(a1).c)
s=a.e
r=A.b4(s,a0,!1,t.dd)
for(q=a.r,s=s!==0,p=a.b,o=0;o<a1.length;++o){n=a1[o]
if(o>0){m=a1[o-1]
l=n.c
if(!J.z(m.c,l)){a.e0("\u2575")
q.a+="\n"
a.iS(l)}else if(m.b+1!==n.b){a.mP("...")
q.a+="\n"}}for(l=n.d,k=A.a5(l).h("d7<1>"),j=new A.d7(l,k),j=new A.at(j,j.gk(0),k.h("at<X.E>")),k=k.h("X.E"),i=n.b,h=n.a;j.m();){g=j.d
if(g==null)g=k.a(g)
f=g.a
if(f.gG().gX()!==f.gC().gX()&&f.gG().gX()===i&&a.lO(B.a.t(h,0,f.gG().ga7()))){e=B.c.cz(r,a0)
if(e<0)A.r(A.I(A.q(r)+" contains no null elements.",a0))
r[e]=g}}a.mO(i)
q.a+=" "
a.mN(n,r)
if(s)q.a+=" "
d=B.c.of(l,new A.nl())
c=d===-1?a0:l[d]
k=c!=null
if(k){j=c.a
g=j.gG().gX()===i?j.gG().ga7():0
a.mL(h,g,j.gC().gX()===i?j.gC().ga7():h.length,p)}else a.e2(h)
q.a+="\n"
if(k)a.mM(n,c,r)
for(l=l.length,b=0;b<l;++b)continue}a.e0("\u2575")
a1=q.a
return a1.charCodeAt(0)==0?a1:a1},
iS(a){var s,r,q=this
if(!q.f||!t.R.b(a))q.e0("\u2577")
else{q.e0("\u250c")
q.aM(new A.n8(q),"\x1b[34m")
s=q.r
r=" "+$.wm().jE(a)
s.a+=r}q.r.a+="\n"},
dZ(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h=this,g={}
g.a=!1
g.b=null
s=c==null
if(s)r=null
else r=h.b
for(q=b.length,p=h.b,s=!s,o=h.r,n=!1,m=0;m<q;++m){l=b[m]
k=l==null
j=k?null:l.a.gG().gX()
i=k?null:l.a.gC().gX()
if(s&&l===c){h.aM(new A.nf(h,j,a),r)
n=!0}else if(n)h.aM(new A.ng(h,l),r)
else if(k)if(g.a)h.aM(new A.nh(h),g.b)
else o.a+=" "
else h.aM(new A.ni(g,h,c,j,a,l,i),p)}},
mN(a,b){return this.dZ(a,b,null)},
mL(a,b,c,d){var s=this
s.e2(B.a.t(a,0,b))
s.aM(new A.n9(s,a,b,c),d)
s.e2(B.a.t(a,c,a.length))},
mM(a,b,c){var s,r=this,q=r.b,p=b.a
if(p.gG().gX()===p.gC().gX()){r.fB()
p=r.r
p.a+=" "
r.dZ(a,c,b)
if(c.length!==0)p.a+=" "
r.iT(b,c,r.aM(new A.na(r,a,b),q))}else{s=a.b
if(p.gG().gX()===s){if(B.c.V(c,b))return
A.EG(c,b)
r.fB()
p=r.r
p.a+=" "
r.dZ(a,c,b)
r.aM(new A.nb(r,a,b),q)
p.a+="\n"}else if(p.gC().gX()===s){p=p.gC().ga7()
if(p===a.a.length){A.yW(c,b)
return}r.fB()
r.r.a+=" "
r.dZ(a,c,b)
r.iT(b,c,r.aM(new A.nc(r,!1,a,b),q))
A.yW(c,b)}}},
iR(a,b,c){var s=c?0:1,r=this.r
s=B.a.aL("\u2500",1+b+this.f2(B.a.t(a.a,0,b+s))*3)
r.a=(r.a+=s)+"^"},
mK(a,b){return this.iR(a,b,!0)},
iT(a,b,c){this.r.a+="\n"
return},
e2(a){var s,r,q,p
for(s=new A.br(a),r=t.V,s=new A.at(s,s.gk(0),r.h("at<y.E>")),q=this.r,r=r.h("y.E");s.m();){p=s.d
if(p==null)p=r.a(p)
if(p===9)q.a+=B.a.aL(" ",4)
else{p=A.aR(p)
q.a+=p}}},
e1(a,b,c){var s={}
s.a=c
if(b!=null)s.a=B.b.j(b+1)
this.aM(new A.nj(s,this,a),"\x1b[34m")},
e0(a){return this.e1(a,null,null)},
mP(a){return this.e1(null,null,a)},
mO(a){return this.e1(null,a,null)},
fB(){return this.e1(null,null,null)},
f2(a){var s,r,q,p
for(s=new A.br(a),r=t.V,s=new A.at(s,s.gk(0),r.h("at<y.E>")),r=r.h("y.E"),q=0;s.m();){p=s.d
if((p==null?r.a(p):p)===9)++q}return q},
lO(a){var s,r,q
for(s=new A.br(a),r=t.V,s=new A.at(s,s.gk(0),r.h("at<y.E>")),r=r.h("y.E");s.m();){q=s.d
if(q==null)q=r.a(q)
if(q!==32&&q!==9)return!1}return!0},
li(a,b){var s,r=this.b!=null
if(r&&b!=null)this.r.a+=b
s=a.$0()
if(r&&b!=null)this.r.a+="\x1b[0m"
return s},
aM(a,b){return this.li(a,b,t.z)}}
A.nk.prototype={
$0(){return this.a},
$S:88}
A.n2.prototype={
$1(a){var s=a.d
return new A.c7(s,new A.n1(),A.a5(s).h("c7<1>")).gk(0)},
$S:89}
A.n1.prototype={
$1(a){var s=a.a
return s.gG().gX()!==s.gC().gX()},
$S:27}
A.n3.prototype={
$1(a){return a.c},
$S:91}
A.n5.prototype={
$1(a){var s=a.a.gM()
return s==null?new A.k():s},
$S:92}
A.n6.prototype={
$2(a,b){return a.a.a_(0,b.a)},
$S:93}
A.n7.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a.a,c=a.b,b=A.u([],t.dg)
for(s=J.bn(c),r=s.gA(c),q=t.g7;r.m();){p=r.gp().a
o=p.gaH()
n=A.uw(o,p.gag(),p.gG().ga7())
n.toString
m=B.a.e5("\n",B.a.t(o,0,n)).gk(0)
l=p.gG().gX()-m
for(p=o.split("\n"),n=p.length,k=0;k<n;++k){j=p[k]
if(b.length===0||l>B.c.gaQ(b).b)b.push(new A.by(j,l,d,A.u([],q)));++l}}i=A.u([],q)
for(r=b.length,h=i.$flags|0,g=0,k=0;k<b.length;b.length===r||(0,A.a6)(b),++k){j=b[k]
h&1&&A.B(i,16)
B.c.mh(i,new A.n4(j),!0)
f=i.length
for(q=s.aU(c,g),p=q.$ti,q=new A.at(q,q.gk(0),p.h("at<X.E>")),n=j.b,p=p.h("X.E");q.m();){e=q.d
if(e==null)e=p.a(e)
if(e.a.gG().gX()>n)break
i.push(e)}g+=i.length-f
B.c.aa(j.d,i)}return b},
$S:94}
A.n4.prototype={
$1(a){return a.a.gC().gX()<this.a.b},
$S:27}
A.nl.prototype={
$1(a){return!0},
$S:27}
A.n8.prototype={
$0(){this.a.r.a+=B.a.aL("\u2500",2)+">"
return null},
$S:0}
A.nf.prototype={
$0(){var s=this.a.r,r=this.b===this.c.b?"\u250c":"\u2514"
s.a+=r},
$S:1}
A.ng.prototype={
$0(){var s=this.a.r,r=this.b==null?"\u2500":"\u253c"
s.a+=r},
$S:1}
A.nh.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:0}
A.ni.prototype={
$0(){var s,r,q=this,p=q.a,o=p.a?"\u253c":"\u2502"
if(q.c!=null)q.b.r.a+=o
else{s=q.e
r=s.b
if(q.d===r){s=q.b
s.aM(new A.nd(p,s),p.b)
p.a=!0
if(p.b==null)p.b=s.b}else{s=q.r===r&&q.f.a.gC().ga7()===s.a.length
r=q.b
if(s)r.r.a+="\u2514"
else r.aM(new A.ne(r,o),p.b)}}},
$S:1}
A.nd.prototype={
$0(){var s=this.b.r,r=this.a.a?"\u252c":"\u250c"
s.a+=r},
$S:1}
A.ne.prototype={
$0(){this.a.r.a+=this.b},
$S:1}
A.n9.prototype={
$0(){var s=this
return s.a.e2(B.a.t(s.b,s.c,s.d))},
$S:0}
A.na.prototype={
$0(){var s,r,q=this.a,p=q.r,o=p.a,n=this.c.a,m=n.gG().ga7(),l=n.gC().ga7()
n=this.b.a
s=q.f2(B.a.t(n,0,m))
r=q.f2(B.a.t(n,m,l))
m+=s*3
n=(p.a+=B.a.aL(" ",m))+B.a.aL("^",Math.max(l+(s+r)*3-m,1))
p.a=n
return n.length-o.length},
$S:28}
A.nb.prototype={
$0(){return this.a.mK(this.b,this.c.a.gG().ga7())},
$S:0}
A.nc.prototype={
$0(){var s=this,r=s.a,q=r.r,p=q.a
if(s.b)q.a=p+B.a.aL("\u2500",3)
else r.iR(s.c,Math.max(s.d.a.gC().ga7()-1,0),!1)
return q.a.length-p.length},
$S:28}
A.nj.prototype={
$0(){var s=this.b,r=s.r,q=this.a.a
if(q==null)q=""
s=B.a.oH(q,s.d)
s=r.a+=s
q=this.c
r.a=s+(q==null?"\u2502":q)},
$S:1}
A.aP.prototype={
j(a){var s=this.a
s="primary "+(""+s.gG().gX()+":"+s.gG().ga7()+"-"+s.gC().gX()+":"+s.gC().ga7())
return s.charCodeAt(0)==0?s:s}}
A.rG.prototype={
$0(){var s,r,q,p,o=this.a
if(!(t.ol.b(o)&&A.uw(o.gaH(),o.gag(),o.gG().ga7())!=null)){s=A.ja(o.gG().ga8(),0,0,o.gM())
r=o.gC().ga8()
q=o.gM()
p=A.E8(o.gag(),10)
o=A.or(s,A.ja(r,A.xG(o.gag()),p,q),o.gag(),o.gag())}return A.BV(A.BX(A.BW(o)))},
$S:96}
A.by.prototype={
j(a){return""+this.b+': "'+this.a+'" ('+B.c.bp(this.d,", ")+")"}}
A.bv.prototype={
fN(a){var s=this.a
if(!J.z(s,a.gM()))throw A.a(A.I('Source URLs "'+A.q(s)+'" and "'+A.q(a.gM())+"\" don't match.",null))
return Math.abs(this.b-a.ga8())},
a_(a,b){var s=this.a
if(!J.z(s,b.gM()))throw A.a(A.I('Source URLs "'+A.q(s)+'" and "'+A.q(b.gM())+"\" don't match.",null))
return this.b-b.ga8()},
D(a,b){if(b==null)return!1
return t.hq.b(b)&&J.z(this.a,b.gM())&&this.b===b.ga8()},
gv(a){var s=this.a
s=s==null?null:s.gv(s)
if(s==null)s=0
return s+this.b},
j(a){var s=this,r=A.uB(s).j(0),q=s.a
return"<"+r+": "+s.b+" "+(A.q(q==null?"unknown source":q)+":"+(s.c+1)+":"+(s.d+1))+">"},
$ia7:1,
gM(){return this.a},
ga8(){return this.b},
gX(){return this.c},
ga7(){return this.d}}
A.jb.prototype={
fN(a){if(!J.z(this.a.a,a.gM()))throw A.a(A.I('Source URLs "'+A.q(this.gM())+'" and "'+A.q(a.gM())+"\" don't match.",null))
return Math.abs(this.b-a.ga8())},
a_(a,b){if(!J.z(this.a.a,b.gM()))throw A.a(A.I('Source URLs "'+A.q(this.gM())+'" and "'+A.q(b.gM())+"\" don't match.",null))
return this.b-b.ga8()},
D(a,b){if(b==null)return!1
return t.hq.b(b)&&J.z(this.a.a,b.gM())&&this.b===b.ga8()},
gv(a){var s=this.a.a
s=s==null?null:s.gv(s)
if(s==null)s=0
return s+this.b},
j(a){var s=A.uB(this).j(0),r=this.b,q=this.a,p=q.a
return"<"+s+": "+r+" "+(A.q(p==null?"unknown source":p)+":"+(q.cK(r)+1)+":"+(q.eK(r)+1))+">"},
$ia7:1,
$ibv:1}
A.jd.prototype={
kW(a,b,c){var s,r=this.b,q=this.a
if(!J.z(r.gM(),q.gM()))throw A.a(A.I('Source URLs "'+A.q(q.gM())+'" and  "'+A.q(r.gM())+"\" don't match.",null))
else if(r.ga8()<q.ga8())throw A.a(A.I("End "+r.j(0)+" must come after start "+q.j(0)+".",null))
else{s=this.c
if(s.length!==q.fN(r))throw A.a(A.I('Text "'+s+'" must be '+q.fN(r)+" characters long.",null))}},
gG(){return this.a},
gC(){return this.b},
gag(){return this.c}}
A.je.prototype={
gjy(){return this.a},
j(a){var s,r,q,p=this.b,o="line "+(p.gG().gX()+1)+", column "+(p.gG().ga7()+1)
if(p.gM()!=null){s=p.gM()
r=$.wm()
s.toString
s=o+(" of "+r.jE(s))
o=s}o+=": "+this.a
q=p.od(null)
p=q.length!==0?o+"\n"+q:o
return"Error on "+(p.charCodeAt(0)==0?p:p)},
$iO:1}
A.e3.prototype={
ga8(){var s=this.b
s=A.ve(s.a,s.b)
return s.b},
$iaT:1,
gdJ(){return this.c}}
A.e4.prototype={
gM(){return this.gG().gM()},
gk(a){return this.gC().ga8()-this.gG().ga8()},
a_(a,b){var s=this.gG().a_(0,b.gG())
return s===0?this.gC().a_(0,b.gC()):s},
od(a){var s=this
if(!t.ol.b(s)&&s.gk(s)===0)return""
return A.Ao(s,a).oc()},
D(a,b){if(b==null)return!1
return b instanceof A.e4&&this.gG().D(0,b.gG())&&this.gC().D(0,b.gC())},
gv(a){return A.c0(this.gG(),this.gC(),B.e,B.e,B.e,B.e)},
j(a){var s=this
return"<"+A.uB(s).j(0)+": from "+s.gG().j(0)+" to "+s.gC().j(0)+' "'+s.gag()+'">'},
$ia7:1}
A.c2.prototype={
gaH(){return this.d}}
A.e5.prototype={
aF(){return"SqliteUpdateKind."+this.b}}
A.b8.prototype={
gv(a){return A.c0(this.a,this.b,this.c,B.e,B.e,B.e)},
D(a,b){if(b==null)return!1
return b instanceof A.b8&&b.a===this.a&&b.b===this.b&&b.c===this.c},
j(a){return"SqliteUpdate: "+this.a.j(0)+" on "+this.b+", rowid = "+this.c}}
A.d9.prototype={
j(a){var s,r,q=this,p=q.e
p=p==null?"":"while "+p+", "
p="SqliteException("+q.c+"): "+p+q.a
s=q.b
if(s!=null)p=p+", "+s
s=q.f
if(s!=null){r=q.d
r=r!=null?" (at position "+A.q(r)+"): ":": "
s=p+"\n  Causing statement"+r+s
p=q.r
p=p!=null?s+(", parameters: "+J.dC(p,new A.ow(),t.N).bp(0,", ")):s}return p.charCodeAt(0)==0?p:p},
$iO:1}
A.ow.prototype={
$1(a){if(t.p.b(a))return"blob ("+a.length+" bytes)"
else return J.be(a)},
$S:34}
A.mn.prototype={
iQ(){var s=this,r=s.d
return r==null?s.d=new A.cB(s,A.u([],t.fU),new A.mw(s),new A.mx(s),t.jy):r},
mq(){var s=this,r=s.e
return r==null?s.e=new A.cB(s,A.u([],t.lw),new A.mt(s),new A.mu(s),t.lU):r},
f0(){var s=this,r=s.f
return r==null?s.f=new A.cB(s,A.u([],t.lw),new A.mp(s),new A.mq(s),t.af):r},
n(){var s,r,q,p=this
if(p.r)return
p.r=!0
s=p.d
if(s!=null)s.n()
s=p.f
if(s!=null)s.n()
s=p.e
if(s!=null)s.n()
s=p.b
r=s.hs()
q=r!==0?A.w7(p.a,s,r,"closing database",null,null):null
if(q!=null)throw A.a(q)},
aY(a,b){var s,r,q
if(this.r)A.r(A.D("This database has already been closed"))
s=this.b
r=s.a
q=r.d6(B.o.av(a),1)
r=r.d
s=A.yF(r,"sqlite3_exec",[s.b,q,0,0,0])
r.dart_sqlite3_free(q)
if(s!==0)A.we(this,s,"executing",a,b)},
m8(a,b,c,d,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.r)A.r(A.D("This database has already been closed"))
s=B.o.av(a)
r=e.b
q=r.a
p=q.fF(s)
o=q.d
n=o.dart_sqlite3_malloc(4)
o=o.dart_sqlite3_malloc(4)
m=new A.pT(r,p,n,o)
l=A.u([],t.lE)
k=new A.mr(m,l)
for(r=s.length,q=q.b,j=0;j<r;j=g){i=m.ht(j,r-j,0)
n=i.b
if(n!==0){k.$0()
A.we(e,n,"preparing statement",a,null)}n=q.buffer
h=B.b.Y(n.byteLength,4)
g=new Int32Array(n,0,h)[B.b.a2(o,2)]-p
f=i.a
if(f!=null)l.push(new A.e6(f,e,new A.cE(!1).cT(s,j,g,!0)))
if(l.length===c){j=g
break}}if(b)while(j<r){i=m.ht(j,r-j,0)
n=q.buffer
h=B.b.Y(n.byteLength,4)
j=new Int32Array(n,0,h)[B.b.a2(o,2)]-p
f=i.a
if(f!=null){l.push(new A.e6(f,e,""))
k.$0()
throw A.a(A.aX(a,"sql","Had an unexpected trailing statement."))}else if(i.b!==0){k.$0()
throw A.a(A.aX(a,"sql","Has trailing data after the first sql statement:"))}}m.n()
return l},
jD(a,b){var s=this.m8(a,b,1,!1,!0)
if(s.length===0)throw A.a(A.aX(a,"sql","Must contain an SQL statement."))
return B.c.gah(s)},
oK(a){return this.jD(a,!1)}}
A.mw.prototype={
$0(){var s=this.a,r=s.b
r.a.ja(r.b,new A.mv(s))},
$S:0}
A.mv.prototype={
$3(a,b,c){var s=A.Bd(a)
if(s==null)return
this.a.d.fM(new A.b8(s,b,c))},
$S:98}
A.mx.prototype={
$0(){var s=this.a.b
s.a.ja(s.b,null)
return null},
$S:0}
A.mt.prototype={
$0(){var s=this.a,r=s.b
r.a.j9(r.b,new A.ms(s))
return null},
$S:0}
A.ms.prototype={
$0(){this.a.e.fM(null)},
$S:0}
A.mu.prototype={
$0(){var s=this.a.b
s.a.j9(s.b,null)
return null},
$S:0}
A.mp.prototype={
$0(){var s=this.a,r=s.b
r.a.j8(r.b,new A.mo(s))
return null},
$S:0}
A.mo.prototype={
$0(){var s=this.a.f
s.fM(null)
return 0},
$S:28}
A.mq.prototype={
$0(){var s=this.a.b
s.a.j8(s.b,null)
return null},
$S:0}
A.mr.prototype={
$0(){var s,r,q,p,o,n
this.a.n()
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.a6)(s),++q){p=s[q]
if(!p.r){p.r=!0
if(!p.f){o=p.a
o.c.d.sqlite3_reset(o.b)
p.f=!0}o=p.a
n=o.c
n.d.sqlite3_finalize(o.b)
n=n.w
if(n!=null){n=n.a
if(n!=null)n.unregister(o.d)}}}},
$S:0}
A.cB.prototype={
gbB(){var s=this.r
return s==null?this.r=this.i4(!1):s},
i4(a){return new A.bz(!0,new A.ti(this,a),this.$ti.h("bz<1>"))},
fM(a){var s,r,q,p,o,n,m
for(s=this.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.a6)(s),++q){p=s[q]
o=p.a
if(p.b){n=o.b
if(n>=4)A.r(o.ap())
if((n&1)!==0)o.ga6().N(a)}else{n=o.b
if(n>=4)A.r(o.ap())
if((n&1)!==0)o.a1(a)
else if((n&3)===0){o=o.bY()
n=new A.bx(a)
m=o.c
if(m==null)o.b=o.c=n
else{m.sbs(n)
o.c=n}}}}},
n(){var s,r,q,p=this
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.a6)(s),++q)s[q].a.n()
p.d=null
if(p.b){p.f.$0()
p.b=!1}}}
A.ti.prototype={
$1(a){var s,r,q=this.a
if(q.a.r){a.n()
return}s=this.b
r=new A.tj(q,a,s)
a.r=a.e=new A.tk(q,a,s)
a.f=r
r.$0()},
$S(){return this.a.$ti.h("~(bZ<1>)")}}
A.tj.prototype={
$0(){var s=this.a,r=s.c,q=r.length
r.push(new A.hp(this.b,this.c))
if(q===0){s.e.$0()
s.b=!0}},
$S:0}
A.tk.prototype={
$0(){var s=this.a,r=s.c
B.c.H(r,new A.hp(this.b,this.c))
r=r.length
if(r===0&&!s.a.r){s.f.$0()
s.b=!1}},
$S:0}
A.os.prototype={
js(){var s=null,r=this.a.a.d.sqlite3_initialize()
if(r!==0)throw A.a(A.ji(s,s,r,"Error returned by sqlite3_initialize",s,s,s))},
oD(a,b){var s,r,q,p,o,n,m,l,k,j
this.js()
switch(2){case 2:break}s=this.a
r=s.a
q=r.d6(B.o.av(a),1)
p=r.d
o=p.dart_sqlite3_malloc(4)
n=r.d6(B.o.av(b),1)
m=p.sqlite3_open_v2(q,o,6,n)
l=A.c_(r.b.buffer,0,null)[B.b.a2(o,2)]
p.dart_sqlite3_free(q)
p.dart_sqlite3_free(n)
p.dart_sqlite3_free(n)
o=new A.k()
k=new A.pM(r,l,o)
r=r.r
if(r!=null)r.iZ(k,l,o)
if(m!==0){j=A.w7(s,k,m,"opening the database",null,null)
k.hs()
throw A.a(j)}p.sqlite3_extended_result_codes(l,1)
return new A.mn(s,k,!1)}}
A.e6.prototype={
bw(a,b){A.we(this.b,a,b,this.d,this.e)},
hZ(){var s,r=this,q=r.f=!1,p=r.a,o=p.b
p=p.c.d
do s=p.sqlite3_step(o)
while(s===100)
r.du()
if(s!==0?s!==101:q)r.bw(s,"executing statement")},
ld(a){var s=this.a
s=s.c.d.sqlite3_bind_parameter_count(s.b)
if(0!==s)A.r(A.aX(a,"parameters","Expected "+A.q(s)+" parameters, got 0"))
return},
hF(a){A:{if(a instanceof A.np){this.ld(a.a)
break A}if(a instanceof A.f6)a.a.$1(this)}},
du(){if(!this.f){var s=this.a
s.c.d.sqlite3_reset(s.b)
this.f=!0}},
n(){var s,r,q=this
if(!q.r){q.r=!0
q.du()
s=q.a
r=s.c
r.d.sqlite3_finalize(s.b)
r=r.w
if(r!=null)r.jc(s.d)}},
nK(a){var s=this
if(s.r||s.b.r)A.r(A.D(u.f))
s.du()
s.hF(a)
s.hZ()}}
A.is.prototype={
eE(a,b){return this.d.E(a)?1:0},
hl(a,b){this.d.H(0,a)},
hm(a){return new v.G.URL(a,"file:///").pathname},
cd(a,b){var s,r=a.a
if(r==null)r=A.wK(this.b,"/")
s=this.d
if(!s.E(r))if((b&4)!==0)s.l(0,r,new A.bg(new Uint8Array(0),0))
else throw A.a(A.ea(14))
return new A.ey(new A.jZ(this,r,(b&8)!==0),0)},
ho(a){}}
A.jZ.prototype={
jF(a,b){var s,r=this.a.d.i(0,this.b)
if(r==null||r.b<=b)return 0
s=Math.min(a.length,r.b-b)
B.f.R(a,0,s,J.cL(B.f.gar(r.a),0,r.b),b)
return s},
hk(){return this.d>=2?1:0},
eF(){if(this.c)this.a.d.H(0,this.b)},
dC(){return this.a.d.i(0,this.b).b},
hn(a){this.d=a},
hp(a){},
dD(a){var s=this.a.d,r=this.b,q=s.i(0,r)
if(q==null){s.l(0,r,new A.bg(new Uint8Array(0),0))
s.i(0,r).sk(0,a)}else q.sk(0,a)},
hq(a){this.d=a},
cJ(a,b){var s,r=this.a.d,q=this.b,p=r.i(0,q)
if(p==null){p=new A.bg(new Uint8Array(0),0)
r.l(0,q,p)}s=b+a.length
if(s>p.b)p.sk(0,s)
p.aj(0,b,s,a)}}
A.uU.prototype={
$1(a){return a.length!==0},
$S:25}
A.m5.prototype={
le(){var s,r,q,p,o=A.T(t.N,t.S)
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.a6)(s),++q){p=s[q]
o.l(0,p,B.c.cB(s,p))}this.c=o}}
A.bG.prototype={
gA(a){return new A.kj(this)},
i(a,b){return new A.aU(this,A.nE(this.d[b],t.X))},
l(a,b,c){throw A.a(A.P("Can't change rows from a result set"))},
gk(a){return this.d.length},
$ix:1,
$in:1,
$it:1}
A.aU.prototype={
i(a,b){var s
if(typeof b!="string"){if(A.hG(b))return this.b[b]
return null}s=this.a.c.i(0,b)
if(s==null)return null
return this.b[s]},
ga3(){return this.a.a},
$ia_:1}
A.kj.prototype={
gp(){var s=this.a
return new A.aU(s,A.nE(s.d[this.b],t.X))},
m(){return++this.b<this.a.d.length}}
A.kk.prototype={}
A.kl.prototype={}
A.kn.prototype={}
A.ko.prototype={}
A.nR.prototype={
aF(){return"OpenMode."+this.b}}
A.cT.prototype={}
A.np.prototype={}
A.f6.prototype={}
A.c6.prototype={
j(a){return"VfsException("+this.a+")"},
$iO:1}
A.fE.prototype={}
A.aC.prototype={}
A.i1.prototype={}
A.i0.prototype={
geG(){return 0},
jT(a,b){return 12},
geI(){return 4096},
eH(a,b){var s=this.jF(a,b),r=a.length
if(s<r){B.f.fQ(a,s,r,0)
throw A.a(B.bZ)}},
$iaO:1,
$ifV:1}
A.dh.prototype={}
A.v1.prototype={
$0(){var s,r,q
for(s=this.a;!s.gF(0);){if(s.b===0)A.r(A.D("No such element"))
r=s.c
q=r.a
q.toString
q.fw(A.p(r).h("aH.E").a(r))
r.d.$0()}},
$S:0}
A.v_.prototype={
$1(a){var s=this.a,r=s.b
s.dQ(s.c,new A.dh(a),!1)
if(r===0)v.G.Promise.resolve().then(this.b)},
$S:12}
A.v0.prototype={
$4(a,b,c,d){this.a.$1(c.d7(d))},
$S:100}
A.pR.prototype={}
A.pM.prototype={
hs(){var s=this.a,r=s.r
if(r!=null)r.jc(this.c)
return s.d.sqlite3_close_v2(this.b)}}
A.pT.prototype={
n(){var s=this,r=s.a.a.d
r.dart_sqlite3_free(s.b)
r.dart_sqlite3_free(s.c)
r.dart_sqlite3_free(s.d)},
ht(a,b,c){var s,r,q=this,p=q.a,o=p.a,n=q.c
p=A.yF(o.d,"sqlite3_prepare_v3",[p.b,q.b+a,b,c,n,q.d])
s=A.c_(o.b.buffer,0,null)[B.b.a2(n,2)]
if(s===0)r=null
else{n=new A.k()
r=new A.pS(s,o,n)
o=o.w
if(o!=null)o.iZ(r,s,n)}return new A.kd(r,p)}}
A.pS.prototype={}
A.dg.prototype={}
A.cw.prototype={}
A.ec.prototype={
sk(a,b){throw A.a(A.P("Setting length in WasmValueList"))},
i(a,b){A.c_(this.a.b.buffer,0,null)
B.b.a2(this.c+b*4,2)
return new A.cw()},
l(a,b,c){throw A.a(A.P("Setting element in WasmValueList"))},
gk(a){return this.b}}
A.ic.prototype={
ox(a){var s=this.b
s===$&&A.L()
A.uX("[sqlite3] "+A.ef(s,a))},
os(a,b){var s,r,q,p=A.R(v.G.Number(a))*1000
if(p<-864e13||p>864e13)A.r(A.ac(p,-864e13,864e13,"millisecondsSinceEpoch",null))
A.bd(!1,"isUtc",t.y)
s=new A.bT(p,0,!1)
r=this.b
r===$&&A.L()
q=A.AO(r.buffer,b,8)
q.$flags&2&&A.B(q)
q[0]=A.x4(s)
q[1]=A.x2(s)
q[2]=A.x1(s)
q[3]=A.x0(s)
q[4]=A.x3(s)-1
q[5]=A.x5(s)-1900
q[6]=B.b.aT(A.AV(s),7)},
pz(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=null,j=this.b
j===$&&A.L()
s=new A.fE(A.vB(j,b,k))
try{r=a.cd(s,d)
if(e!==0){p=r.b
o=A.c_(j.buffer,0,k)
n=B.b.a2(e,2)
o.$flags&2&&A.B(o)
o[n]=p}p=A.c_(j.buffer,0,k)
o=B.b.a2(c,2)
p.$flags&2&&A.B(p)
p[o]=0
m=r.a
return m}catch(l){p=A.F(l)
if(p instanceof A.c6){q=p
p=q.a
j=A.c_(j.buffer,0,k)
o=B.b.a2(c,2)
j.$flags&2&&A.B(j)
j[o]=p}else{j=j.buffer
j=A.c_(j,0,k)
p=B.b.a2(c,2)
j.$flags&2&&A.B(j)
j[p]=1}}return k},
po(a,b,c){var s=this.b
s===$&&A.L()
return A.bc(new A.ma(a,A.ef(s,b),c))},
pg(a,b,c,d){var s=this.b
s===$&&A.L()
return A.bc(new A.m7(this,a,A.ef(s,b),c,d))},
pv(a,b,c,d){var s=this.b
s===$&&A.L()
return A.bc(new A.mc(this,a,A.ef(s,b),c,d))},
pB(a,b,c){return A.bc(new A.me(this,c,b,a))},
pG(a,b){return A.bc(new A.mg(a,b))},
pm(a,b){var s,r=Date.now(),q=this.b
q===$&&A.L()
s=v.G.BigInt(r)
A.vj(A.AM(q.buffer,0,null),"setBigInt64",b,s,!0,null)
return 0},
pk(a){return A.bc(new A.m9(a))},
pD(a,b,c,d){return A.bc(new A.mf(this,a,b,c,d))},
pO(a,b,c,d){return A.bc(new A.mk(this,a,b,c,d))},
pK(a,b){return A.bc(new A.mi(a,b))},
pI(a,b){return A.bc(new A.mh(a,b))},
pt(a,b){return A.bc(new A.mb(this,a,b))},
px(a,b){return A.bc(new A.md(a,b))},
pM(a,b){return A.bc(new A.mj(a,b))},
pi(a,b){return A.bc(new A.m8(this,a,b))},
pp(a){return a.geG()},
pr(a,b,c){if(t.j2.b(a))return a.jT(b,c)
return 12},
pE(a){if(t.j2.b(a))return a.geI()
return 4096},
np(a){a.$0()},
nk(a){return a.$0()},
nn(a,b,c,d,e){var s=this.b
s===$&&A.L()
a.$3(b,A.ef(s,d),A.R(v.G.Number(e)))},
nv(a,b,c,d){var s=a.gq2(),r=this.a
r===$&&A.L()
s.$2(new A.dg(),new A.ec(r,c,d))},
nz(a,b,c,d){var s=a.gq4(),r=this.a
r===$&&A.L()
s.$2(new A.dg(),new A.ec(r,c,d))},
nx(a,b,c,d){var s=a.gq3(),r=this.a
r===$&&A.L()
s.$2(new A.dg(),new A.ec(r,c,d))},
nB(a,b){var s=a.gq5()
this.a===$&&A.L()
s.$1(new A.dg())},
nt(a,b){var s=a.gq1()
this.a===$&&A.L()
s.$1(new A.dg())},
nr(a,b,c,d,e){var s,r,q=this.b
q===$&&A.L()
s=A.vB(q,c,b)
r=A.vB(q,e,d)
return a.gpU().$2(s,r)},
ni(a,b){return a.$1(b)},
ng(a,b){return a.gpW().$1(b)},
ne(a,b,c){return a.gpV().$2(b,c)}}
A.ma.prototype={
$0(){return this.a.hl(this.b,this.c)},
$S:0}
A.m7.prototype={
$0(){var s,r=this,q=r.b.eE(r.c,r.d),p=r.a.b
p===$&&A.L()
p=A.c_(p.buffer,0,null)
s=B.b.a2(r.e,2)
p.$flags&2&&A.B(p)
p[s]=q},
$S:0}
A.mc.prototype={
$0(){var s,r,q=this,p=B.o.av(q.b.hm(q.c)),o=p.length
if(o>q.d)throw A.a(A.ea(14))
s=q.a.b
s===$&&A.L()
s=A.b6(s.buffer,0,null)
r=q.e
B.f.cg(s,r,p)
s.$flags&2&&A.B(s)
s[r+o]=0},
$S:0}
A.me.prototype={
$0(){var s,r=this,q=r.a.b
q===$&&A.L()
s=A.b6(q.buffer,r.b,r.c)
q=r.d
if(q!=null)A.wt(s,q.b)
else return A.wt(s,null)},
$S:0}
A.mg.prototype={
$0(){this.a.ho(A.mH(this.b,0))},
$S:0}
A.m9.prototype={
$0(){return this.a.eF()},
$S:0}
A.mf.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.L()
s.b.eH(A.b6(r.buffer,s.c,s.d),A.R(v.G.Number(s.e)))},
$S:0}
A.mk.prototype={
$0(){var s=this,r=s.a.b
r===$&&A.L()
s.b.cJ(A.b6(r.buffer,s.c,s.d),A.R(v.G.Number(s.e)))},
$S:0}
A.mi.prototype={
$0(){return this.a.dD(A.R(v.G.Number(this.b)))},
$S:0}
A.mh.prototype={
$0(){return this.a.hp(this.b)},
$S:0}
A.mb.prototype={
$0(){var s,r=this.b.dC(),q=this.a.b
q===$&&A.L()
q=A.c_(q.buffer,0,null)
s=B.b.a2(this.c,2)
q.$flags&2&&A.B(q)
q[s]=r},
$S:0}
A.md.prototype={
$0(){return this.a.hn(this.b)},
$S:0}
A.mj.prototype={
$0(){return this.a.hq(this.b)},
$S:0}
A.m8.prototype={
$0(){var s,r=this.b.hk(),q=this.a.b
q===$&&A.L()
q=A.c_(q.buffer,0,null)
s=B.b.a2(this.c,2)
q.$flags&2&&A.B(q)
q[s]=r},
$S:0}
A.eV.prototype={
B(a,b,c,d){var s,r=null,q={},p=A.S(A.vj(this.a,v.G.Symbol.asyncIterator,r,r,r,r)),o=A.bI(r,r,r,r,!0,this.$ti.c)
q.a=null
s=new A.l4(q,this,p,o)
o.d=s
o.f=new A.l5(q,o,s)
return new A.a4(o,A.p(o).h("a4<1>")).B(a,b,c,d)},
O(a){return this.B(a,null,null,null)},
az(a,b,c){return this.B(a,null,b,c)},
bq(a,b,c){return this.B(a,b,c,null)}}
A.l4.prototype={
$0(){var s,r=this,q=r.c.next(),p=r.a
p.a=q
s=r.d
A.ar(q,t.m).bb(new A.l6(p,r.b,s,r),s.gfD(),t.P)},
$S:0}
A.l6.prototype={
$1(a){var s,r,q=this,p=a.done
if(p==null)p=null
s=a.value
r=q.c
if(p===!0){r.n()
q.a.a=null}else{r.q(0,s==null?q.b.$ti.c.a(s):s)
q.a.a=null
p=r.b
if(!((p&1)!==0?(r.ga6().e&4)!==0:(p&2)===0))q.d.$0()}},
$S:14}
A.l5.prototype={
$0(){var s,r
if(this.a.a==null){s=this.b
r=s.b
s=!((r&1)!==0?(s.ga6().e&4)!==0:(r&2)===0)}else s=!1
if(s)this.c.$0()},
$S:0}
A.dl.prototype={
u(){var s=0,r=A.i(t.H),q=this,p
var $async$u=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:p=q.b
if(p!=null)p.u()
p=q.c
if(p!=null)p.u()
q.c=q.b=null
return A.f(null,r)}})
return A.h($async$u,r)},
gp(){var s=this.a
return s==null?A.r(A.D("Await moveNext() first")):s},
m(){var s,r,q,p=this,o=p.a
if(o!=null)o.continue()
o=new A.l($.m,t.B)
s=new A.N(o,t.ex)
r=p.d
q=t.m
p.b=A.aD(r,"success",new A.r7(p,s),!1,q)
p.c=A.aD(r,"error",new A.r8(p,s),!1,q)
return o}}
A.r7.prototype={
$1(a){var s,r=this.a
r.u()
s=r.$ti.h("1?").a(r.d.result)
r.a=s
this.b.U(s!=null)},
$S:2}
A.r8.prototype={
$1(a){var s=this.a
s.u()
s=s.d.error
if(s==null)s=a
this.b.ab(s)},
$S:2}
A.lO.prototype={
$1(a){this.a.U(this.c.a(this.b.result))},
$S:2}
A.lP.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.ab(s)},
$S:2}
A.lT.prototype={
$1(a){this.a.U(this.c.a(this.b.result))},
$S:2}
A.lU.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.ab(s)},
$S:2}
A.lV.prototype={
$1(a){this.a.ab(new A.aV("IndexedDB open blocked"))},
$S:2}
A.mM.prototype={
$1(a){return A.S(a[1])},
$S:183}
A.pN.prototype={
n7(){var s={}
s.dart=new A.pO(this).$0()
return s},
em(a){return this.oo(a)},
oo(a){var s=0,r=A.i(t.m),q,p=this,o,n
var $async$em=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=3
return A.b(A.ar(v.G.WebAssembly.instantiateStreaming(a,p.n7()),t.m),$async$em)
case 3:o=c
n=o.instance.exports
if("_initialize" in n)t.g.a(n._initialize).call()
q=o.instance
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$em,r)}}
A.pO.prototype={
$0(){var s=this.a.a,r=A.S(v.G.Object),q=A.S(r.create.apply(r,[null]))
q.error_log=A.bB(s.gow())
q.localtime=A.ba(s.gor())
q.xOpen=A.w_(s.gpy())
q.xDelete=A.kL(s.gpn())
q.xAccess=A.eJ(s.gpf())
q.xFullPathname=A.eJ(s.gpu())
q.xRandomness=A.kL(s.gpA())
q.xSleep=A.ba(s.gpF())
q.xCurrentTimeInt64=A.ba(s.gpl())
q.xClose=A.bB(s.gpj())
q.xRead=A.eJ(s.gpC())
q.xWrite=A.eJ(s.gpN())
q.xTruncate=A.ba(s.gpJ())
q.xSync=A.ba(s.gpH())
q.xFileSize=A.ba(s.gps())
q.xLock=A.ba(s.gpw())
q.xUnlock=A.ba(s.gpL())
q.xCheckReservedLock=A.ba(s.gph())
q.xDeviceCharacteristics=A.bB(s.geG())
q.xFileControl=A.kL(s.gpq())
q.xSectorSize=A.bB(s.geI())
q["dispatch_()v"]=A.bB(s.gno())
q["dispatch_()i"]=A.bB(s.gnj())
q.dispatch_update=A.w_(s.gnm())
q.dispatch_xFunc=A.eJ(s.gnu())
q.dispatch_xStep=A.eJ(s.gny())
q.dispatch_xInverse=A.eJ(s.gnw())
q.dispatch_xValue=A.ba(s.gnA())
q.dispatch_xFinal=A.ba(s.gns())
q.dispatch_compare=A.w_(s.gnq())
q.dispatch_busy=A.ba(s.gnh())
q.changeset_apply_filter=A.ba(s.gnf())
q.changeset_apply_conflict=A.kL(s.gnd())
return q},
$S:17}
A.eb.prototype={}
A.lb.prototype={
ep(){var s=0,r=A.i(t.H),q=this,p,o
var $async$ep=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:p=new A.l($.m,t.a7)
o=v.G.indexedDB.open(q.b,1)
o.onupgradeneeded=A.bB(new A.le(o))
new A.N(p,t.h1).U(A.A4(o,t.m))
s=2
return A.b(p,$async$ep)
case 2:q.a=b
return A.f(null,r)}})
return A.h($async$ep,r)},
cp(a,b){return this.mr(a,b)},
mr(a,b){var s=0,r=A.i(t.H),q=this,p,o,n
var $async$cp=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:n=q.a
n.toString
p=n.transaction($.zA(),b)
o=A.BY(p)
s=2
return A.b(A.EI(new A.ld(a,o,p),t.mj),$async$cp)
case 2:s=3
return A.b(o.b.a,$async$cp)
case 3:if(o.c){n=q.a
if(n!=null)n.close()
q.a=null}return A.f(null,r)}})
return A.h($async$cp,r)},
m6(a){return this.cp(new A.lc(a),"readwrite")}}
A.le.prototype={
$1(a){var s=A.S(this.a.result)
if(J.z(a.oldVersion,0)){s.createObjectStore("files",{autoIncrement:!0}).createIndex("fileName","name",{unique:!0})
s.createObjectStore("blocks")}},
$S:14}
A.ld.prototype={
$0(){var s=0,r=A.i(t.P),q=1,p=[],o=this,n,m
var $async$$0=A.d(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:q=3
s=6
return A.b(o.a.$1(o.b),$async$$0)
case 6:q=1
s=5
break
case 3:q=2
m=p.pop()
o.c.abort()
throw m
s=5
break
case 2:s=1
break
case 5:o.c.commit()
return A.f(null,r)
case 1:return A.e(p.at(-1),r)}})
return A.h($async$$0,r)},
$S:30}
A.lc.prototype={
$1(a){return this.jU(a)},
jU(a){var s=0,r=A.i(t.H),q=this,p,o,n
var $async$$1=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:p=q.a,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.b(p[n].an(a),$async$$1)
case 5:case 3:p.length===o||(0,A.a6)(p),++n
s=2
break
case 4:return A.f(null,r)}})
return A.h($async$$1,r)},
$S:21}
A.hc.prototype={
l2(a){var s=A.u2(new A.rJ(this)),r=this.a
r.oncomplete=s
r.onabort=s
r.onerror=A.u2(new A.rK(this))},
fo(a,b,c){var s=t.gk
return v.G.IDBKeyRange.bound(A.u([a,c],s),A.u([a,b],s))},
ma(a){return this.fo(a,9007199254740992,0)},
mb(a,b){return this.fo(a,9007199254740992,b)},
el(){var s=0,r=A.i(t.dV),q,p=this,o,n,m,l,k
var $async$el=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:l=A.T(t.N,t.S)
k=new A.dl(p.d.index("fileName").openKeyCursor(),t.Q)
case 3:s=5
return A.b(k.m(),$async$el)
case 5:if(!b){s=4
break}o=k.a
if(o==null)o=A.r(A.D("Await moveNext() first"))
n=o.key
n.toString
A.al(n)
m=o.primaryKey
m.toString
l.l(0,n,A.R(A.bA(m)))
s=3
break
case 4:q=l
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$el,r)},
ee(a){return this.nN(a)},
nN(a){var s=0,r=A.i(t.I),q,p=this,o
var $async$ee=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:o=A
s=3
return A.b(A.bD(p.d.index("fileName").getKey(a),t.i),$async$ee)
case 3:q=o.R(c)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$ee,r)},
fp(a){return A.bD(this.d.get(a),t.mU).aK(new A.rI(a),t.m)},
cP(a,b){return this.kC(a,b)},
kC(a,b){var s=0,r=A.i(t.oR),q,p=this,o,n,m,l,k,j,i,h,g,f,e
var $async$cP=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:s=3
return A.b(p.fp(a),$async$cP)
case 3:h=d
g=h.length
f=new A.bg(new Uint8Array(g),g)
e=new A.dl(p.e.openCursor(p.ma(a)),t.Q)
g=t.a,o=v.G,n=t.c,m=t.H
case 4:s=6
return A.b(e.m(),$async$cP)
case 6:if(!d){s=5
break}l=e.a
if(l==null)l=A.r(A.D("Await moveNext() first"))
k=n.a(l.key)
j=A.R(A.bA(k[1]))
if(j>=h.length){s=5
break}i=new A.rL(f,j,Math.min(4096,h.length-j))
if(l.value instanceof o.Blob)b.push(A.o5(A.S(l.value)).aK(i,m))
else i.$1(g.a(l.value))
s=4
break
case 5:q=f
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$cP,r)},
ea(a){return this.n6(a)},
n6(a){var s=0,r=A.i(t.S),q,p=this,o
var $async$ea=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:if((p.b.a.a&30)!==0)A.r(A.D("IDB transaction already completed"))
o=A
s=3
return A.b(A.bD(p.d.put({name:a,length:0}),t.i),$async$ea)
case 3:q=o.R(c)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$ea,r)},
cc(a,b){return this.pa(a,b)},
pa(a,b){var s=0,r=A.i(t.H),q=this,p,o,n,m,l
var $async$cc=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.r(A.D("IDB transaction already completed"))
s=2
return A.b(q.fp(a),$async$cc)
case 2:p=d
o=b.b
n=A.p(o).h("b2<1>")
m=A.ap(new A.b2(o,n),n.h("n.E"))
B.c.kB(m)
s=3
return A.b(A.mX(new A.a8(m,new A.rM(new A.rN(q,a),b),A.a5(m).h("a8<1,o<~>>")),t.H),$async$cc)
case 3:s=b.c!==p.length?4:5
break
case 4:l=new A.dl(q.d.openCursor(a),t.Q)
s=6
return A.b(l.m(),$async$cc)
case 6:s=7
return A.b(A.bD(l.gp().update({name:p.name,length:b.c}),t.X),$async$cc)
case 7:case 5:return A.f(null,r)}})
return A.h($async$cc,r)},
cb(a,b,c){return this.oY(0,b,c)},
oY(a,b,c){var s=0,r=A.i(t.H),q=this,p,o
var $async$cb=A.d(function(d,e){if(d===1)return A.e(e,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.r(A.D("IDB transaction already completed"))
s=2
return A.b(q.fp(b),$async$cb)
case 2:p=e
s=p.length>c?3:4
break
case 3:s=5
return A.b(A.bD(q.e.delete(q.mb(b,B.b.Y(c,4096)*4096)),t.X),$async$cb)
case 5:case 4:o=new A.dl(q.d.openCursor(b),t.Q)
s=6
return A.b(o.m(),$async$cb)
case 6:s=7
return A.b(A.bD(o.gp().update({name:p.name,length:c}),t.X),$async$cb)
case 7:return A.f(null,r)}})
return A.h($async$cb,r)},
ec(a){return this.nc(a)},
nc(a){var s=0,r=A.i(t.H),q=this,p
var $async$ec=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:if((q.b.a.a&30)!==0)A.r(A.D("IDB transaction already completed"))
p=t.X
s=2
return A.b(A.mX(A.u([A.bD(q.e.delete(q.fo(a,9007199254740992,0)),p),A.bD(q.d.delete(a),p)],t.M),t.H),$async$ec)
case 2:return A.f(null,r)}})
return A.h($async$ec,r)}}
A.rJ.prototype={
$0(){this.a.b.L()},
$S:1}
A.rK.prototype={
$0(){var s=this.a,r=s.a.error
if(r==null)r=new v.G.DOMException("IDB transaction error")
s.b.ab(r)},
$S:1}
A.rI.prototype={
$1(a){if(a==null)throw A.a(A.aX(this.a,"fileId","File not found in database"))
else return a},
$S:123}
A.rL.prototype={
$1(a){var s=this.a
s.cg(s,this.b,J.cL(a,0,this.c))},
$S:124}
A.rN.prototype={
kj(a,b){var s=0,r=A.i(t.H),q=this,p,o,n,m,l,k
var $async$$2=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:p=q.a.e
o=q.b
n=t.gk
s=2
return A.b(A.bD(p.openCursor(v.G.IDBKeyRange.only(A.u([o,a],n))),t.mU),$async$$2)
case 2:m=d
l=t.a.a(B.f.gar(b))
k=t.X
s=m==null?3:5
break
case 3:s=6
return A.b(A.bD(p.put(l,A.u([o,a],n)),k),$async$$2)
case 6:s=4
break
case 5:s=7
return A.b(A.bD(m.update(l),k),$async$$2)
case 7:case 4:return A.f(null,r)}})
return A.h($async$$2,r)},
$2(a,b){return this.kj(a,b)},
$S:125}
A.rM.prototype={
$1(a){var s=this.b.b.i(0,a)
s.toString
return this.a.$2(a,s)},
$S:126}
A.rm.prototype={
mG(a,b,c){B.f.cg(this.b.cE(a,new A.rn(this,a)),b,c)},
mZ(a,b){var s,r,q,p,o,n,m,l
for(s=b.length,r=0;r<s;r=l){q=a+r
p=B.b.Y(q,4096)
o=B.b.aT(q,4096)
n=s-r
if(o!==0)m=Math.min(4096-o,n)
else{m=Math.min(4096,n)
o=0}l=r+m
this.mG(p*4096,o,J.cL(B.f.gar(b),b.byteOffset+r,m))}this.c=Math.max(this.c,a+s)}}
A.rn.prototype={
$0(){var s=new Uint8Array(4096),r=this.a.a,q=r.length,p=this.b
if(q>p)B.f.cg(s,0,J.cL(B.f.gar(r),r.byteOffset+p,Math.min(4096,q-p)))
return s},
$S:127}
A.k6.prototype={}
A.ck.prototype={
d4(a){var s=this
if(s.e||s.d.a==null)A.r(A.ea(10))
if(a.fZ(s.x)){s.bF(!0)
return a.d.a}else return A.mV(null,t.H)},
bF(a){return this.mz(a)},
mz(a){var s=0,r=A.i(t.H),q,p=this,o,n
var $async$bF=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:if(a&&!p.r){s=1
break}s=!p.f&&!p.x.gF(0)?3:4
break
case 3:p.f=!0
o=p.x
n=A.ap(o,o.$ti.h("n.E"))
o.au(0)
s=5
return A.b(p.d.m6(n).J(new A.nn(p,n,a)),$async$bF)
case 5:case 4:case 1:return A.f(q,r)}})
return A.h($async$bF,r)},
n(){var s=0,r=A.i(t.H),q,p=this,o,n
var $async$n=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:if(!p.e){o=p.d4(new A.ha(new A.no(),new A.N(new A.l($.m,t.D),t.F)))
p.e=!0
p.bF(!1)
q=o
s=1
break}else{n=p.x
if(!n.gF(0)){q=n.gaQ(0).d.a
s=1
break}}case 1:return A.f(q,r)}})
return A.h($async$n,r)},
cm(a,b){return this.lz(a,b)},
lz(a,b){var s=0,r=A.i(t.S),q,p=this,o,n
var $async$cm=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:n=p.z
s=n.E(b)?3:5
break
case 3:n=n.i(0,b)
n.toString
q=n
s=1
break
s=4
break
case 5:s=6
return A.b(a.ee(b),$async$cm)
case 6:o=d
o.toString
n.l(0,b,o)
q=o
s=1
break
case 4:case 1:return A.f(q,r)}})
return A.h($async$cm,r)},
cZ(){var s=0,r=A.i(t.H),q=this,p
var $async$cZ=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:p=A.u([],t.M)
s=2
return A.b(q.d.cp(new A.nm(q,p),"readonly"),$async$cZ)
case 2:s=3
return A.b(A.vf(p,t.H),$async$cZ)
case 3:return A.f(null,r)}})
return A.h($async$cZ,r)},
nR(){return this.bF(!1)},
eE(a,b){return this.w.d.E(a)?1:0},
hl(a,b){var s=this
s.w.d.H(0,a)
if(!s.y.H(0,a))s.d4(new A.h5(s,a,new A.N(new A.l($.m,t.D),t.F)))},
hm(a){return new v.G.URL(a,"file:///").pathname},
cd(a,b){var s,r,q,p=this,o=a.a
if(o==null)o=A.wK(p.b,"/")
s=p.w
r=s.d.E(o)?1:0
q=s.cd(new A.fE(o),b)
if(r===0)if((b&8)!==0)p.y.q(0,o)
else p.d4(new A.el(p,o,new A.N(new A.l($.m,t.D),t.F)))
return new A.ey(new A.k_(p,q.a,o),0)},
ho(a){}}
A.nn.prototype={
$0(){var s,r,q,p,o=this.a
o.f=!1
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,A.a6)(s),++q){p=s[q].d.a
if((p.a&30)!==0)A.r(A.D("Future already completed"))
p.be(null)}o.bF(this.c)},
$S:1}
A.no.prototype={
$1(a){return this.k_(a)},
k_(a){var s=0,r=A.i(t.H)
var $async$$1=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:a.c=!0
return A.f(null,r)}})
return A.h($async$$1,r)},
$S:21}
A.nm.prototype={
$1(a){return this.jZ(a)},
jZ(a){var s=0,r=A.i(t.H),q=this,p,o,n,m,l,k,j
var $async$$1=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=2
return A.b(a.el(),$async$$1)
case 2:m=c
l=q.a
l.z.aa(0,m)
p=m.gbl(),p=p.gA(p),o=q.b,l=l.w.d
case 3:if(!p.m()){s=4
break}n=p.gp()
k=l
j=n.a
s=5
return A.b(a.cP(n.b,o),$async$$1)
case 5:k.l(0,j,c)
s=3
break
case 4:return A.f(null,r)}})
return A.h($async$$1,r)},
$S:21}
A.k_.prototype={
eH(a,b){this.b.eH(a,b)},
geG(){return 0},
geI(){return 4096},
hk(){return this.b.d>=2?1:0},
eF(){},
dC(){return this.b.dC()},
hn(a){this.b.d=a
return null},
hp(a){},
jT(a,b){return 12},
dD(a){var s=this,r=s.a
if(r.e||r.d.a==null)A.r(A.ea(10))
s.b.dD(a)
if(!r.y.V(0,s.c))r.d4(new A.ha(new A.rH(s,a),new A.N(new A.l($.m,t.D),t.F)))},
hq(a){this.b.d=a
return null},
cJ(a,b){var s,r,q,p,o,n,m=this,l=m.a
if(l.e||l.d.a==null)A.r(A.ea(10))
s=m.c
if(l.y.V(0,s)){m.b.cJ(a,b)
return}r=l.w.d.i(0,s)
if(r==null)r=new A.bg(new Uint8Array(0),0)
q=J.cL(B.f.gar(r.a),0,r.b)
m.b.cJ(a,b)
p=new Uint8Array(a.length)
B.f.cg(p,0,a)
o=A.u([],t.o6)
n=$.m
o.push(new A.k6(b,p))
l.d4(new A.eF(l,s,q,o,new A.N(new A.l(n,t.D),t.F)))},
$iaO:1,
$ifV:1}
A.rH.prototype={
$1(a){return this.ki(a)},
ki(a){var s=0,r=A.i(t.H),q,p=this,o,n
var $async$$1=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:o=p.a
n=a
s=3
return A.b(o.a.cm(a,o.c),$async$$1)
case 3:q=n.cb(0,c,p.b)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$1,r)},
$S:21}
A.aE.prototype={
fZ(a){a.dQ(a.c,this,!1)
return!0}}
A.ha.prototype={
an(a){return this.w.$1(a)}}
A.h5.prototype={
fZ(a){var s,r,q,p
if(!a.gF(0)){s=a.gaQ(0)
for(r=this.x;s!=null;)if(s instanceof A.h5)if(s.x===r)return!1
else s=s.gds()
else if(s instanceof A.eF){q=s.gds()
if(s.x===r){p=s.a
p.toString
p.fw(A.p(s).h("aH.E").a(s))}s=q}else if(s instanceof A.el){if(s.x===r){r=s.a
r.toString
r.fw(A.p(s).h("aH.E").a(s))
return!1}s=s.gds()}else break}a.dQ(a.c,this,!1)
return!0},
an(a){return this.oT(a)},
oT(a){var s=0,r=A.i(t.H),q=this,p,o,n
var $async$an=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:p=q.w
o=q.x
s=2
return A.b(p.cm(a,o),$async$an)
case 2:n=c
p.z.H(0,o)
s=3
return A.b(a.ec(n),$async$an)
case 3:return A.f(null,r)}})
return A.h($async$an,r)}}
A.el.prototype={
an(a){return this.oS(a)},
oS(a){var s=0,r=A.i(t.H),q=this,p,o,n
var $async$an=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:p=q.x
o=q.w.z
n=p
s=2
return A.b(a.ea(p),$async$an)
case 2:o.l(0,n,c)
return A.f(null,r)}})
return A.h($async$an,r)}}
A.eF.prototype={
fZ(a){var s,r=a.b===0?null:a.gaQ(0)
for(s=this.x;r!=null;)if(r instanceof A.eF)if(r.x===s){B.c.aa(r.z,this.z)
return!1}else r=r.gds()
else if(r instanceof A.el){if(r.x===s)break
r=r.gds()}else break
a.dQ(a.c,this,!1)
return!0},
an(a){return this.oU(a)},
oU(a){var s=0,r=A.i(t.H),q=this,p,o,n,m,l,k
var $async$an=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:m=q.y
l=new A.rm(m,A.T(t.S,t.p),m.length)
for(m=q.z,p=m.length,o=0;o<m.length;m.length===p||(0,A.a6)(m),++o){n=m[o]
l.mZ(n.a,n.b)}k=a
s=3
return A.b(q.w.cm(a,q.x),$async$an)
case 3:s=2
return A.b(k.cc(c,l),$async$an)
case 2:return A.f(null,r)}})
return A.h($async$an,r)}}
A.dM.prototype={
aF(){return"FileType."+this.b}}
A.e2.prototype={
b5(){var s=this.d
if(s!=null)return s
throw A.a(A.D("VFS closed"))},
eE(a,b){var s=$.v6().i(0,a)
if(s==null)return this.e.d.E(a)?1:0
else return this.b5().jf(s)?1:0},
hl(a,b){var s=$.v6().i(0,a)
if(s==null){this.e.d.H(0,a)
return null}else this.b5().dm(s,!1)},
hm(a){return new v.G.URL(a,"file:///").pathname},
cd(a,b){var s,r,q=this,p=a.a
if(p==null)return q.e.cd(a,b)
s=$.v6().i(0,p)
if(s==null)return q.e.cd(a,b)
r=q.b5()
if(!r.jf(s))if((b&4)!==0){r.c6(s).truncate(0)
r.dm(s,!0)}else throw A.a(B.bY)
return new A.ey(new A.kp(q,s,(b&8)!==0),0)},
ho(a){},
n(){var s=this.d
if(s!=null){s.b.close()
s.c.close()
s.d.close()}this.d=null},
bM(a,b){return this.oE(a,b)},
oC(a){return this.bM(a,!1)},
oE(a,b){var s=0,r=A.i(t.H),q=this,p,o,n,m,l,k
var $async$bM=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:m=new A.op(a,b)
s=2
return A.b(m.$1("meta"),$async$bM)
case 2:l=d
k=J.z(l.getSize(),0)
l.truncate(2)
s=3
return A.b(m.$1("database"),$async$bM)
case 3:p=d
s=4
return A.b(m.$1("journal"),$async$bM)
case 4:o=d
n=q.d=new A.t0(new Uint8Array(2),l,p,o)
if(k){n.dm(B.a9,p.getSize()>0)
n.dm(B.aa,o.getSize()>0)}return A.f(null,r)}})
return A.h($async$bM,r)}}
A.op.prototype={
k5(a){var s=0,r=A.i(t.m),q,p=this,o,n
var $async$$1=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:o=t.m
s=3
return A.b(A.ar(p.a.getFileHandle(a,{create:!0}),o),$async$$1)
case 3:n=c
s=4
return A.b(A.ar(p.b?n.createSyncAccessHandle({mode:"readwrite-unsafe"}):n.createSyncAccessHandle(),o),$async$$1)
case 4:q=c
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$1,r)},
$1(a){return this.k5(a)},
$S:128}
A.kp.prototype={
jF(a,b){return A.wH(this.a.b5().c6(this.b),a,{at:b})},
hk(){return this.d>=2?1:0},
eF(){var s=this.a,r=this.b
s.b5().c6(r).flush()
if(this.c)s.b5().dm(r,!1)},
dC(){return this.a.b5().c6(this.b).getSize()},
hn(a){this.d=a},
hp(a){this.a.b5().c6(this.b).flush()},
dD(a){this.a.b5().c6(this.b).truncate(a)},
hq(a){this.d=a},
cJ(a,b){if(A.wI(this.a.b5().c6(this.b),a,{at:b})<a.length)throw A.a(B.c_)}}
A.t0.prototype={
jf(a){var s=this.a
A.wH(this.b,s,{at:0})
return s[a.a]!==0},
dm(a,b){var s=this.a,r=b?1:0
s.$flags&2&&A.B(s)
s[a.a]=r
A.wI(this.b,s,{at:0})},
c6(a){var s
switch(a.a){case 0:s=this.c
break
case 1:s=this.d
break
default:s=null}return s}}
A.pH.prototype={
kZ(a,b){var s=this,r=s.c
r.a!==$&&A.z_()
r.a=s
r=t.S
A.jW(new A.pI(s),r)
A.jW(new A.pJ(s),r)
s.r=A.jW(new A.pK(s),r)
s.w=A.jW(new A.pL(s),r)},
d6(a,b){var s=a.length,r=this.d.dart_sqlite3_malloc(s+b),q=A.b6(this.b.buffer,0,null)
s=r+s
B.f.aj(q,r,s,a)
B.f.fQ(q,s,s+b,0)
return r},
fF(a){return this.d6(a,0)},
ja(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_updates(a,s)},
j8(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_commits(a,s)},
j9(a,b){var s=b==null?null:b
return this.d.dart_sqlite3_rollbacks(a,s)}}
A.pI.prototype={
$1(a){return this.a.d.sqlite3changeset_finalize(a)},
$S:7}
A.pJ.prototype={
$1(a){return this.a.d.sqlite3session_delete(a)},
$S:7}
A.pK.prototype={
$1(a){return this.a.d.sqlite3_close_v2(a)},
$S:7}
A.pL.prototype={
$1(a){return this.a.d.sqlite3_finalize(a)},
$S:7}
A.dH.prototype={}
A.nY.prototype={
hz(a){var s,r=this,q=r.a
q.start()
r.c=A.aD(q,"message",new A.o1(r),!1,t.m)
s=a.b
if(a.c==null&&s!=null){q=$.hN()
q.toString
A.ed(q,s,null,null,!1).aK(new A.o2(r),t.P)}},
fh(a){return this.lD(a)},
lD(a){var s=0,r=A.i(t.H),q=this
var $async$fh=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:A.Eb(a,new A.nZ(q),q.gjo(),new A.o_(q),new A.o0(q))
return A.f(null,r)}})
return A.h($async$fh,r)},
bS(a,b,c,d){return this.kA(a,b,c,d,d)},
ce(a,b,c){return this.bS(a,b,null,c)},
kA(a,b,c,d,e){var s=0,r=A.i(e),q,p=this,o,n,m,l
var $async$bS=A.d(function(f,g){if(f===1)return A.e(g,r)
for(;;)switch(s){case 0:l={}
if((p.b.a.a&30)!==0)throw A.a(A.zW(null))
o=p.e++
n=new A.l($.m,t.a7)
p.f.l(0,o,new A.N(n,t.h1))
a.i=o
p.a.postMessage(a,A.dy(a))
l.a=!1
if(c!=null)c.J(new A.o3(l,p,o))
s=3
return A.b(n,$async$bS)
case 3:m=g
l.a=!0
if(J.z(m.t,b.b)){q=d.a(m)
s=1
break}else throw A.a(A.B3(m))
case 1:return A.f(q,r)}})
return A.h($async$bS,r)},
lS(a){var s,r,q=this,p=q.b
if((p.a.a&30)!==0)return
q.a.postMessage("_disconnect")
s=q.c
if(s!=null)s.u()
s=q.d
if(s!=null)s.u()
for(s=q.f,r=new A.b3(s,s.r,s.e);r.m();)r.d.ab(new A.eZ(a))
s.au(0)
p.L()},
ig(){return this.lS(null)}}
A.o1.prototype={
$1(a){if(a.data=="_disconnect"){this.a.ig()
return}this.a.fh(A.S(a.data))},
$S:2}
A.o2.prototype={
$1(a){this.a.ig()
a.a.L()},
$S:129}
A.o0.prototype={
$1(a){var s=this.a.f.H(0,a.i)
if(s!=null)s.U(a)},
$S:14}
A.o_.prototype={
$1(a){return this.k0(a)},
k0(a1){var s=0,r=A.i(t.P),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$$1=A.d(function(a2,a3){if(a2===1){p.push(a3)
s=q}for(;;)switch(s){case 0:f=null
e=a1.i
d=n.a
c=d.r
b=v.G
a=new b.AbortController()
c.l(0,e,a)
m=a
q=3
j=d.nl(a1,m.signal)
s=6
return A.b(t.nW.b(j)?j:A.bM(j,t.m),$async$$1)
case 6:f=a3
o.push(5)
s=4
break
case 3:q=2
a0=p.pop()
l=A.F(a0)
k=A.K(a0)
if(!(l instanceof A.bq)){b.console.error("Error in worker: "+J.be(l))
b.console.error("Original trace: "+A.q(k))}b=l
if(b instanceof A.d9){h=A.Ag(b)
g=0}else{g=b instanceof A.bq?1:null
h=null}f={e:J.be(b),s:g,r:h,i:e,t:"errorResponse"}
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
c.H(0,e)
s=o.pop()
break
case 5:c=f
d.a.postMessage(c,A.dy(c))
return A.f(null,r)
case 1:return A.e(p.at(-1),r)}})
return A.h($async$$1,r)},
$S:130}
A.nZ.prototype={
$1(a){var s=this.a.r.H(0,a.i)
if(s!=null)s.abort()},
$S:14}
A.o3.prototype={
$0(){if(!this.a.a){var s={i:this.c,t:"abort"}
this.b.a.postMessage(s,A.dy(s))}},
$S:1}
A.eZ.prototype={
j(a){return"Channel to database worker is closed: "+A.q(this.a)},
$iO:1}
A.jP.prototype={}
A.j2.prototype={
kU(a,b){var s,r=this
r.a.b.a.aK(new A.ob(r),t.P)
s=r.e
s.a=new A.oc(r)
s.b=new A.od(r)
r.iF(r.f,new A.oe(r),"notifyCommit")
r.iF(r.r,new A.of(r),"notifyRollback")},
iF(a,b,c){var s=a.b
s.a=new A.o9(this,a,c,b)
s.b=new A.oa(this,a,b)},
aX(a){var s=0,r=A.i(t.X),q,p=this
var $async$aX=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=3
return A.b(p.a.bS({r:a,z:null,i:0,d:p.b,t:"custom"},B.q,null,t.m),$async$aX)
case 3:q=c.r
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$aX,r)},
cG(a,b,c){return this.oR(a,b,c,c)},
oR(a,b,c,d){var s=0,r=A.i(d),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f
var $async$cG=A.d(function(e,a0){if(e===1){o.push(a0)
s=p}for(;;)switch(s){case 0:k=m.a
j=m.b
i=t.m
g=A
f=A
s=3
return A.b(k.bS({i:0,d:j,t:"exclusiveLock"},B.q,b,i),$async$cG)
case 3:h=g.R(f.bA(a0.r))
p=4
s=7
return A.b(a.$1(h),$async$cG)
case 7:l=a0
q=l
n=[1]
s=5
break
n.push(6)
s=5
break
case 4:n=[2]
case 5:p=2
s=8
return A.b(k.ce({z:h,i:0,d:j,t:"releaseLock"},B.q,i),$async$cG)
case 8:s=n.pop()
break
case 6:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$cG,r)},
cL(a,b,c,d){return this.kv(a,b,c,d)},
kv(a,b,c,d){var s=0,r=A.i(t.ii),q,p=this,o,n,m,l,k
var $async$cL=A.d(function(e,f){if(e===1)return A.e(f,r)
for(;;)switch(s){case 0:m=A.vx(c)
l=d==null?null:d
s=3
return A.b(p.a.bS({s:a,p:m.a,v:m.b,z:l,r:!0,c:b,i:0,d:p.b,t:"runQuery"},B.bC,null,t.m),$async$cL)
case 3:k=f
l=k.x
o=k.y
n=A.B5(k)
n.toString
q=new A.ke(l,o,n)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$cL,r)},
$iwC:1}
A.ob.prototype={
$1(a){var s=this.a,r=s.c
if((r.a.a&30)===0){s=A.u([s.e.n(),s.r.b.n(),s.f.b.n()],t.en)
r.U(A.vf(s,t.z))}},
$S:8}
A.oc.prototype={
$0(){var s,r=this.a
if(r.d==null){s=r.a.w
r.d=new A.aq(s,A.p(s).h("aq<1>")).O(new A.o7(r))}if((r.c.a.a&30)===0)r.a.ce({a:!0,i:0,d:r.b,t:"updateRequest"},B.q,t.m)},
$S:0}
A.o7.prototype={
$1(a){var s
if(J.z(a.t,"notifyUpdate")){s=this.a
if(J.z(a.d,s.b))s.e.q(0,new A.b8(B.bu[a.k],a.u,a.r))}},
$S:2}
A.od.prototype={
$0(){var s=this.a,r=s.d
if(r!=null)r.u()
s.d=null
if((s.c.a.a&30)===0)s.a.ce({a:!1,i:0,d:s.b,t:"updateRequest"},B.q,t.m)},
$S:1}
A.oe.prototype={
$1(a){return{a:a,i:0,d:this.a.b,t:"commitRequest"}},
$S:45}
A.of.prototype={
$1(a){return{a:a,i:0,d:this.a.b,t:"rollbackRequest"}},
$S:45}
A.o9.prototype={
$0(){var s,r,q=this,p=q.b
if(p.a==null){s=q.a
r=s.a.w
p.a=new A.aq(r,A.p(r).h("aq<1>")).O(new A.o8(s,q.c,p))}p=q.a
if((p.c.a.a&30)===0)p.a.ce(q.d.$1(!0),B.q,t.m)},
$S:0}
A.o8.prototype={
$1(a){if(J.z(a.t,this.b)&&J.z(a.d,this.a.b))this.c.b.q(0,null)},
$S:2}
A.oa.prototype={
$0(){var s=this.b,r=s.a
if(r!=null)r.u()
s.a=null
s=this.a
if((s.c.a.a&30)===0)s.a.ce(this.c.$1(!1),B.q,t.m)},
$S:1}
A.jC.prototype={
aZ(a,b){return this.nY(a,b)},
nY(a,b){var s=0,r=A.i(t.m),q,p=this
var $async$aZ=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:s=3
return A.b(p.x.$1(a.r),$async$aZ)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$aZ,r)},
fR(a){this.w.q(0,a)}}
A.ml.prototype={
fI(a){var s=0,r=A.i(t.kS),q,p=this,o
var $async$fI=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:o={port:a.a,lockName:a.b}
q=A.B0(A.Bx(new A.dH(o.port,o.lockName,null),p.d),0)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$fI,r)}}
A.mm.prototype={
br(a){return this.op(a)},
op(a){var s=0,r=A.i(t.w),q
var $async$br=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:q=A.pQ(a,null)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$br,r)}}
A.ib.prototype={}
A.m6.prototype={}
A.cx.prototype={
n(){this.gd8().n()}}
A.re.prototype={}
A.io.prototype={
en(){var s=0,r=A.i(t.H),q=this
var $async$en=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:s=!q.c?2:3
break
case 2:s=4
return A.b(q.a.oC(q.b),$async$en)
case 4:case 3:return A.f(null,r)}})
return A.h($async$en,r)},
hb(){var s=0,r=A.i(t.H),q=this
var $async$hb=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:if(!q.c)q.a.n()
return A.f(null,r)}})
return A.h($async$hb,r)}}
A.n_.prototype={
oV(a){var s=this.a,r=this.d
if(this.c)return s.transfer(r)
else return s.slice(0,r)},
lP(a){var s,r,q,p=this,o=p.b
for(s=o;s<a;){s*=2
p.b=s}if(p.c)p.a=p.a.transfer(s)
else{r=v.G
q=new r.ArrayBuffer(s)
new r.Uint8Array(q,0,p.b).set(new r.Uint8Array(p.a,0,o))
p.a=q}}}
A.q_.prototype={
$1(a){var s=new A.l($.m,t.D),r=new A.bV(new A.N(s,t.F))
this.a.a=r
this.b.U(r)
return A.wJ(s)},
$S:46}
A.q0.prototype={
$2(a,b){var s,r,q
A.S(a)
s=J.z(a.name,"AbortError")
r=this.a.a
if(r!=null){if((r.a.a.a&30)===0){q=this.b
if(q!=null)q.$0()}}else{q=this.c
if(s)q.b7(new A.bq("Operation was cancelled",null),b)
else q.b7(a,b)}return null},
$S:133}
A.bV.prototype={}
A.id.prototype={
gn0(){if(this.d.a)return!1
return!this.e||this.r!=null},
bV(a){return this.l9(a)},
l9(a){var s=0,r=A.i(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h,g
var $async$bV=A.d(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:h=$.hN()
h.toString
m=h
l=null
k=null
j=null
q=3
s=6
return A.b(A.ed(m,n.c,a,null,!1),$async$bV)
case 6:l=c
s=7
return A.b(A.ed(m,n.a,null,n.glG(),!0),$async$bV)
case 7:k=c
s=8
return A.b(A.ed(m,n.b,a,null,!1),$async$bV)
case 8:j=c
h=n.f
h=h==null?null:h.en()
s=9
return A.b(h instanceof A.l?h:A.bM(h,t.H),$async$bV)
case 9:n.r=new A.Q(k,j)
o.push(5)
s=4
break
case 3:q=2
g=p.pop()
h=k
if(h!=null)h.a.L()
h=j
if(h!=null)h.a.L()
throw g
o.push(5)
s=4
break
case 2:o=[1]
case 4:q=1
h=l
if(h!=null)h.a.L()
s=o.pop()
break
case 5:return A.f(null,r)
case 1:return A.e(p.at(-1),r)}})
return A.h($async$bV,r)},
lH(){this.jJ()},
h2(a,b,c){return this.d.eA(new A.mz(this,a,b,c),b,c)},
jJ(){return this.d.hj(new A.mA(this),t.H)}}
A.mz.prototype={
$0(){var s,r=this,q=r.a
if(!q.e||q.r!=null)return r.b.$0()
s=r.d
return q.bV(r.c).aK(new A.my(r.b,s),s)},
$S(){return this.d.h("0/()")}}
A.my.prototype={
$1(a){return this.a.$0()},
$S(){return this.b.h("0/(~)")}}
A.mA.prototype={
$0(){var s,r,q,p=this.a,o=p.r
if(o!=null){s=o.a
r=o.b
q=p.f
if(q!=null)q.hb()
s.a.L()
r.a.L()
p.r=null}},
$S:1}
A.dU.prototype={
eA(a,b,c){return this.p9(a,b,c,c)},
hj(a,b){return this.eA(a,null,b)},
p9(a,b,c,d){var s=0,r=A.i(d),q,p=this,o,n,m,l,k,j,i,h,g
var $async$eA=A.d(function(e,f){if(e===1)return A.e(f,r)
for(;;)switch(s){case 0:h={}
g=b==null
if(J.z(g?null:b.aborted,!0))throw A.a(B.B)
h.a=!1
o=new A.nQ(h,p)
if(!p.a){h.a=p.a=!0
q=A.dN(a,c).J(o)
s=1
break}else{n={}
m=new A.l($.m,c.h("l<0>"))
l=new A.N(m,c.h("N<0>"))
n.a=null
h=new A.nP(h,n,l,a,c)
if(!g)n.a=A.aD(b,"abort",new A.nO(n,p,l,h),!1,t.m)
g=p.b
n=g.a
k=g.c
n[k]=h
n=n.length
k=(k+1&n-1)>>>0
g.c=k
if(g.b===k){j=A.b4(n*2,null,!1,g.$ti.h("1?"))
h=g.a
n=g.b
i=h.length-n
B.c.R(j,0,i,h,n)
B.c.R(j,i,i+g.b,g.a,0)
g.b=0
g.c=g.a.length
g.a=j}++g.d
q=m.J(o)
s=1
break}case 1:return A.f(q,r)}})
return A.h($async$eA,r)}}
A.nQ.prototype={
$0(){var s,r,q,p
if(!this.a.a)return
s=this.b
r=s.b
if(!r.gF(0)){s=r.b
if(s===r.c)A.r(A.bW());++r.d
q=r.a
p=q[s]
if(p==null)p=r.$ti.c.a(p)
q[s]=null
r.b=(s+1&q.length-1)>>>0
p.$0()}else s.a=!1},
$S:0}
A.nP.prototype={
$0(){var s,r=this
r.a.a=!0
s=r.b.a
if(s!=null)s.u()
r.c.U(A.dN(r.d,r.e))},
$S:0}
A.nO.prototype={
$1(a){var s,r=this
r.a.a.u()
s=r.c
if((s.a.a&30)===0){r.b.b.H(0,r.d)
s.ab(B.B)}},
$S:2}
A.cU.prototype={
gjN(){var s,r,q,p,o,n=this,m=t.s,l=A.u([],m)
for(s=n.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.a6)(s),++q){p=s[q]
B.c.aa(l,A.u([p.a.b,p.b],m))}o={}
o.a=l
o.b=n.b
o.c=n.c
o.d=n.e
o.e=!1
o.f=!1
o.g=n.d
return o}}
A.mL.prototype={
$1(a){if(a!=null)return A.al(a)
return null},
$S:134}
A.oj.prototype={
$1(a){return a},
$S:9}
A.ok.prototype={
$1(a){return a==null?null:a},
$S:136}
A.ft.prototype={
aF(){return"MessageType."+this.b}}
A.oi.prototype={
dg(a,b){var s=A.ax(new A.a3(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.T(s)
return r},
eh(a,b){var s=A.ax(new A.a3(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.T(s)
return r},
aZ(a,b){var s=A.ax(new A.a3(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.T(s)
return r},
ct(a,b){var s=A.ax(new A.a3(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.T(s)
return r},
cu(a,b){var s=A.ax(new A.a3(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.T(s)
return r},
cs(a,b){var s=A.ax(new A.a3(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.T(s)
return r},
dj(a,b){var s=A.ax(new A.a3(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.T(s)
return r},
df(a,b){var s=A.ax(new A.a3(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.T(s)
return r},
jp(a,b){var s=A.ax(new A.a3(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.T(s)
return r},
dd(a,b){var s=A.ax(new A.a3(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.T(s)
return r},
dh(a,b){var s=A.ax(new A.a3(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.T(s)
return r},
dk(a,b){var s=A.ax(new A.a3(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.T(s)
return r},
di(a,b){var s=A.ax(new A.a3(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.T(s)
return r},
de(a,b){var s=A.ax(new A.a3(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.T(s)
return r},
jm(a,b){var s=A.ax(new A.a3(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.T(s)
return r},
jq(a,b){var s=A.ax(new A.a3(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.T(s)
return r},
jn(a,b){var s=A.ax(new A.a3(!1,null,null,"Unsupported request "+A.q(a.t)),null),r=new A.l($.m,t.e)
r.T(s)
return r},
nl(a,b){var s,r,q=this
switch(a.t){case"open":return q.dg(a,b)
case"connect":return q.eh(a,b)
case"custom":return q.aZ(a,b)
case"fileSystemExists":return q.ct(a,b)
case"fileSystemFlush":return q.cu(a,b)
case"fileSystemAccess":return q.cs(a,b)
case"runQuery":return q.dj(a,b)
case"exclusiveLock":return q.df(a,b)
case"releaseLock":return q.jp(a,b)
case"closeDatabase":return q.dd(a,b)
case"openAdditionalConnection":return q.dh(a,b)
case"updateRequest":return q.dk(a,b)
case"rollbackRequest":return q.di(a,b)
case"commitRequest":return q.de(a,b)
case"dedicatedCompatibilityCheck":return q.jm(a,b)
case"sharedCompatibilityCheck":return q.jq(a,b)
case"dedicatedInSharedCompatibilityCheck":return q.jn(a,b)
default:s=A.ax(new A.a3(!1,null,null,"Unsupported request "+A.q(a.t)),null)
r=new A.l($.m,t.e)
r.T(s)
return r}}}
A.cj.prototype={
aF(){return"FileSystemImplementation."+this.b}}
A.bw.prototype={
aF(){return"TypeCode."+this.b},
jb(a){var s,r=null,q=r
switch(this.a){case 0:q=A.r(A.I("Unsupported type code",r))
break
case 1:a=A.R(A.bA(a))
q=a
break
case 2:q=t.bJ.a(a).toString()
s=A.BM(q,r)
if(s==null)A.r(A.ak("Could not parse BigInt",q,r))
q=s
break
case 3:A.bA(a)
q=a
break
case 4:A.al(a)
q=a
break
case 5:t.Z.a(a)
q=a
break
case 7:A.aW(a)
q=a
break
case 6:break}return q}}
A.ci.prototype={
j0(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="binding parameter",d=a.a,c=d.c
d=d.b
s=c.d
r=s.sqlite3_bind_parameter_count(d)
q=this.a
p=q.length
if(p!==r)throw A.a(A.I("Expected "+A.q(r)+" parameters, got "+A.q(p),null))
a.e=this
for(r=this.c,o=v.G,n=t.Z,m=t.bJ,l=0;l<p;l=i){k=r[l]
j=k>=8?B.x:B.I[k]
i=l+1
h=q[l]
switch(j.a){case 1:k=s.sqlite3_bind_int64(d,i,o.BigInt(A.R(A.bA(h))))
if(k!==0)a.bw(k,e)
break
case 2:k=s.sqlite3_bind_int64(d,i,m.a(h))
if(k!==0)a.bw(k,e)
break
case 3:k=s.sqlite3_bind_double(d,i,A.bA(h))
if(k!==0)a.bw(k,e)
break
case 4:g=B.o.av(A.al(h))
k=s.dart_sqlite3_bind_text(d,i,c.fF(g),g.length)
if(k!==0)a.bw(k,e)
break
case 5:n.a(h)
k=s.dart_sqlite3_bind_blob(d,i,c.fF(h),h.length)
if(k!==0)a.bw(k,e)
break
case 6:k=s.sqlite3_bind_null(d,i)
if(k!==0)a.bw(k,e)
break
case 7:f=A.aW(h)?1:0
k=s.sqlite3_bind_int64(d,i,o.BigInt(f))
if(k!==0)a.bw(k,e)
break
case 0:throw A.a(A.P("Unknown type code"))}}},
gk(a){return this.a.length},
sk(a,b){this.iO()},
i(a,b){var s=this.c[b],r=s>=8?B.x:B.I[s]
return r.jb(this.a[b])},
l(a,b,c){this.iO()},
iO(){throw A.a(A.P("decodeValues list is unmodifiable"))}}
A.us.prototype={
$1(a){this.b.transaction.abort()
this.a.a=!1},
$S:14}
A.lM.prototype={
$1(a){this.a.U(this.c.a(this.b.result))},
$S:2}
A.lN.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.ab(s)},
$S:2}
A.lQ.prototype={
$1(a){this.a.U(this.c.a(this.b.result))},
$S:2}
A.lR.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.ab(s)},
$S:2}
A.lS.prototype={
$1(a){var s=this.b.error
if(s==null)s=a
this.a.ab(s)},
$S:2}
A.nX.prototype={
nC(){var s,r,q,p
for(s=this.b,r=new A.b3(s,s.r,s.e);r.m();){q=r.d
if(!q.r){q.r=!0
if(!q.f){p=q.a
p.c.d.sqlite3_reset(p.b)
q.f=!0}q=q.a
p=q.c
p.d.sqlite3_finalize(q.b)
p=p.w
if(p!=null){p=p.a
if(p!=null)p.unregister(q.d)}}}s.au(0)}}
A.fd.prototype={
aF(){return"FileType."+this.b}}
A.cu.prototype={
aF(){return"StorageMode."+this.b}}
A.d5.prototype={
j(a){return"Remote error: "+this.a},
$iO:1}
A.bq.prototype={}
A.rf.prototype={
eM(){var s=v.G
if(!("Worker" in s))return null
return new A.rd(new s.Worker(this.a,{name:"sqlite3_worker"}))}}
A.tE.prototype={}
A.rd.prototype={}
A.u0.prototype={
$1(a){return A.S(a.data)},
$S:138}
A.hu.prototype={
u(){var s=this.a
if(s!=null)s.u()
this.a=null}}
A.ej.prototype={
n(){var s=0,r=A.i(t.H),q=this,p,o,n
var $async$n=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:q.c.u()
q.d.u()
q.e.u()
for(p=q.w,o=p.length,n=0;n<p.length;p.length===o||(0,A.a6)(p),++n)p[n].abort()
B.c.au(p)
p=q.f
if(p!=null)p.b.L()
s=2
return A.b(q.a.da(),$async$n)
case 2:return A.f(null,r)}})
return A.h($async$n,r)},
iG(a){var s=new v.G.AbortController()
a.onabort=A.u2(new A.r2(s))
this.w.push(s)
return s},
ez(a,b,c,d){var s,r,q,p=this,o=null
if(a==null){s=p.a.f
if(!s.gn0()){r=p.iG(b)
o=s.h2(c,r.signal,d).J(new A.r6(p,r))}}else{s=p.f
if((s==null?null:s.a)!==a)throw A.a(A.D("Requested operation on inactive lock state."))}if(o==null)o=A.dN(c,d)
q=p.a.z
return q instanceof A.ck?o.J(q.gnQ()):o},
oB(a){var s=this,r=s.iG(a),q=new A.l($.m,t.hy),p=new A.aa(q,t.ho),o=t.H
A.ir(s.a.f.h2(new A.r3(s,p),r.signal,o),new A.r4(p),o,t.K)
return q.J(new A.r5(s,r))}}
A.r2.prototype={
$0(){return this.a.abort()},
$S:0}
A.r6.prototype={
$0(){B.c.H(this.a.w,this.b)},
$S:1}
A.r3.prototype={
$0(){var s=this.a,r=s.r++,q=new A.l($.m,t.D)
s.f=new A.Q(r,new A.aa(q,t.h))
this.b.U(r)
return q},
$S:3}
A.r4.prototype={
$2(a,b){var s=this.a
if((s.a.a&30)===0)s.b7(a,b)},
$S:6}
A.r5.prototype={
$0(){B.c.H(this.a.w,this.b)},
$S:1}
A.ei.prototype={
l1(a,b,c){this.b.a.J(new A.qR(this))},
cn(a,b){return this.lC(a,b)},
lC(a,b){var s=0,r=A.i(t.m),q,p=this
var $async$cn=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:s=3
return A.b(p.w.j4(a),$async$cn)
case 3:q={r:d.gjN(),i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$cn,r)},
jm(a,b){return this.cn(a,b)},
jn(a,b){return this.cn(a,b)},
jq(a,b){return this.cn(a,b)},
eh(a,b){return this.nX(a,b)},
nX(a,b){var s=0,r=A.i(t.m),q,p=this,o,n
var $async$eh=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:n=p.w.gia()
n.toString
o={r:a.r,i:0,d:null,t:"connect"}
n.a.postMessage(o,A.dy(o))
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$eh,r)},
aZ(a,b){return this.nZ(a,b)},
nZ(a,b){var s=0,r=A.i(t.m),q,p=this,o,n,m,l,k
var $async$aZ=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:k=a.d
s=k!=null?3:5
break
case 3:o=p.hT(k)
n=a.z
m=a.r
s=7
return A.b(o.a.gbu(),$async$aZ)
case 7:s=6
return A.b(d.cr(p,new A.m6(new A.qU(o,n,b),m)),$async$aZ)
case 6:l=d
s=4
break
case 5:s=8
return A.b(p.w.b.cr(p,new A.ib(a)),$async$aZ)
case 8:l=d
case 4:q={r:l,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$aZ,r)},
dg(a,b){return this.o5(a,b)},
o5(a,b){var s=0,r=A.i(t.m),q,p=this
var $async$dg=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:s=3
return A.b(p.w.y.hj(new A.qX(p,a),t.m),$async$dg)
case 3:q=d
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$dg,r)},
dj(a,b){return this.o9(a,b)},
o9(a,b){var s=0,r=A.i(t.m),q,p=this,o,n,m
var $async$dj=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:o=p.aW(a)
n=o.a
s=3
return A.b(n.gbu(),$async$dj)
case 3:m=d
q=o.ez(a.z,b,new A.r_(m,a,n),t.m)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$dj,r)},
df(a,b){return this.o1(a,b)},
o1(a,b){var s=0,r=A.i(t.m),q,p=this
var $async$df=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:s=3
return A.b(p.aW(a).oB(b),$async$df)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$df,r)},
jp(a,b){var s=this.aW(a),r=a.z,q=s.f
if((q==null?null:q.a)!==r)A.r(A.D("Lock to be released is not active."))
q.b.L()
s.f=null
return{r:null,i:a.i,t:"simpleSuccessResponse"}},
de(a,b){return this.nW(a,b)},
nW(a,b){var s=0,r=A.i(t.m),q,p=this,o,n
var $async$de=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:o=p.aW(a)
n=o.e
s=a.a?3:5
break
case 3:s=6
return A.b(p.ci(n,new A.qT(p,o),a),$async$de)
case 6:q=d
s=1
break
s=4
break
case 5:n.u()
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 4:case 1:return A.f(q,r)}})
return A.h($async$de,r)},
di(a,b){return this.o8(a,b)},
o8(a,b){var s=0,r=A.i(t.m),q,p=this,o,n
var $async$di=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:o=p.aW(a)
n=o.d
s=a.a?3:5
break
case 3:s=6
return A.b(p.ci(n,new A.qZ(p,o),a),$async$di)
case 6:q=d
s=1
break
s=4
break
case 5:n.u()
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 4:case 1:return A.f(q,r)}})
return A.h($async$di,r)},
dk(a,b){return this.oa(a,b)},
oa(a,b){var s=0,r=A.i(t.m),q,p=this,o,n
var $async$dk=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:o=p.aW(a)
n=o.c
s=a.a?3:5
break
case 3:s=6
return A.b(p.ci(n,new A.r1(p,o),a),$async$dk)
case 6:q=d
s=1
break
s=4
break
case 5:n.u()
q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 4:case 1:return A.f(q,r)}})
return A.h($async$dk,r)},
dh(a,b){return this.o6(a,b)},
o6(a,b){var s=0,r=A.i(t.m),q,p=this,o,n,m
var $async$dh=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:m=p.aW(a).a;++m.w
s=3
return A.b(A.ut(),$async$dh)
case 3:o=d
n=o.a
p.w.hA(o.b).x.push(A.xB(m,0))
q={r:n,i:a.i,t:"endpointResponse"}
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$dh,r)},
dd(a,b){return this.nV(a,b)},
nV(a,b){var s=0,r=A.i(t.m),q,p=this,o
var $async$dd=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:o=p.aW(a)
B.c.H(p.x,o)
s=3
return A.b(o.n(),$async$dd)
case 3:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$dd,r)},
cu(a,b){return this.o4(a,b)},
o4(a,b){var s=0,r=A.i(t.m),q,p=this,o
var $async$cu=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:s=3
return A.b(p.aW(a).a.gbQ(),$async$cu)
case 3:o=d
s=o instanceof A.ck?4:5
break
case 4:s=6
return A.b(o.bF(!1),$async$cu)
case 6:case 5:q={r:null,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$cu,r)},
cs(a,b){return this.o2(a,b)},
o2(a,b){var s=0,r=A.i(t.m),q,p=this,o,n,m,l,k,j
var $async$cs=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:o=p.aW(a)
n=B.ae[a.f]
m=a.b
l=o
k=b
j=A
s=4
return A.b(o.a.gbQ(),$async$cs)
case 4:s=3
return A.b(l.ez(null,k,new j.qV(d,n,m,a),t.m),$async$cs)
case 3:q=d
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$cs,r)},
ct(a,b){return this.o3(a,b)},
o3(a,b){var s=0,r=A.i(t.m),q,p=this,o,n,m,l
var $async$ct=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:o=p.aW(a)
n=o
m=b
l=A
s=4
return A.b(o.a.gbQ(),$async$ct)
case 4:s=3
return A.b(n.ez(null,m,new l.qW(d,a),t.y),$async$ct)
case 3:q={r:d,i:a.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$ct,r)},
ci(a,b,c){return this.kD(a,b,c)},
kD(a,b,c){var s=0,r=A.i(t.m),q,p
var $async$ci=A.d(function(d,e){if(d===1)return A.e(e,r)
for(;;)switch(s){case 0:s=a.a==null?3:4
break
case 3:p=a
s=5
return A.b(b.$0(),$async$ci)
case 5:p.a=e
case 4:q={r:null,i:c.i,t:"simpleSuccessResponse"}
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$ci,r)},
fR(a){},
aX(a){var s=0,r=A.i(t.X),q,p=this
var $async$aX=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=3
return A.b(p.ce({r:a,z:null,i:0,d:null,t:"custom"},B.q,t.m),$async$aX)
case 3:q=c.r
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$aX,r)},
hT(a){return B.c.jj(this.x,new A.qQ(a))},
aW(a){var s=a.d
if(s!=null)return this.hT(s)
else throw A.a(A.I("Request requires database id",null))},
$iwz:1}
A.qR.prototype={
$0(){var s=0,r=A.i(t.H),q=this,p,o,n
var $async$$0=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:p=q.a.x,o=p.length,n=0
case 2:if(!(n<p.length)){s=4
break}s=5
return A.b(p[n].n(),$async$$0)
case 5:case 3:p.length===o||(0,A.a6)(p),++n
s=2
break
case 4:B.c.au(p)
return A.f(null,r)}})
return A.h($async$$0,r)},
$S:3}
A.qU.prototype={
$1$1(a,b){return this.a.ez(this.b,this.c,a,b)},
$1(a){return this.$1$1(a,t.z)},
$S:139}
A.qX.prototype={
$0(){var s=0,r=A.i(t.m),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$$0=A.d(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.a
i=j.w
h=n.b
s=3
return A.b(i.br(h.u),$async$$0)
case 3:m=null
l=null
p=5
m=i.nP(h.d,A.Al(h.s),h.c,h.a)
s=8
return A.b(h.o?m.gbQ():m.gbu(),$async$$0)
case 8:l=A.xB(m,null)
j.x.push(l)
i={r:m.b,i:h.i,t:"simpleSuccessResponse"}
q=i
s=1
break
p=2
s=7
break
case 5:p=4
g=o.pop()
s=m!=null?9:10
break
case 9:B.c.H(j.x,l)
s=11
return A.b(m.da(),$async$$0)
case 11:case 10:throw g
s=7
break
case 4:s=2
break
case 7:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$$0,r)},
$S:140}
A.r_.prototype={
$0(){var s,r,q,p,o,n,m=null,l=this.a.gd8(),k=this.b
if(k.c){s=l.b
s=s.a.d.sqlite3_get_autocommit(s.b)!==0}else s=!1
if(s)throw A.a(A.D("Database is not in a transaction"))
s=k.p
r=k.v
r.toString
q=new A.ci(s,r,A.b6(r,0,m))
s=this.c
r=v.G
p=l.b
o=p.a
p=p.b
if(k.r){n=s.ku(l,k.s,q)
n.i=k.i
k=o.d
n.x=k.sqlite3_get_autocommit(p)!==0
n.y=A.R(r.Number(k.sqlite3_last_insert_rowid(p)))
return n}else{s.nI(l,k.s,q)
s=o.d
return A.yR(s.sqlite3_get_autocommit(p)!==0,m,A.R(r.Number(s.sqlite3_last_insert_rowid(p))),k.i,m,m,m)}},
$S:17}
A.qT.prototype={
$0(){var s=0,r=A.i(t.ey),q,p=this,o
var $async$$0=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.b(o.a.gbu(),$async$$0)
case 3:q=b.gd8().f0().gbB().O(new A.qS(p.a,o))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$0,r)},
$S:48}
A.qS.prototype={
$1(a){var s={d:this.b.b,t:"notifyCommit"}
this.a.a.postMessage(s,A.dy(s))},
$S:16}
A.qZ.prototype={
$0(){var s=0,r=A.i(t.ey),q,p=this,o
var $async$$0=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.b(o.a.gbu(),$async$$0)
case 3:q=b.gd8().mq().gbB().O(new A.qY(p.a,o))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$0,r)},
$S:48}
A.qY.prototype={
$1(a){var s={d:this.b.b,t:"notifyRollback"}
this.a.a.postMessage(s,A.dy(s))},
$S:16}
A.r1.prototype={
$0(){var s=0,r=A.i(t.ha),q,p=this,o
var $async$$0=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:o=p.b
s=3
return A.b(o.a.gbu(),$async$$0)
case 3:q=b.gd8().iQ().gbB().O(new A.r0(p.a,o))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$0,r)},
$S:143}
A.r0.prototype={
$1(a){var s={k:a.a.a,u:a.b,r:a.c,d:this.b.b,t:"notifyUpdate"}
this.a.a.postMessage(s,A.dy(s))},
$S:50}
A.qV.prototype={
$0(){var s,r,q,p=this,o=p.a.cd(new A.fE(A.yg(p.b)),4).a
try{q=p.c
if(q!=null){s=q
o.dD(s.byteLength)
o.cJ(A.b6(s,0,null),0)
q={r:null,i:p.d.i,t:"simpleSuccessResponse"}
return q}else{q=o.dC()
r=new Uint8Array(q)
o.eH(r,0)
q={r:t.a.a(J.zJ(r)),i:p.d.i,t:"simpleSuccessResponse"}
return q}}finally{o.eF()}},
$S:17}
A.qW.prototype={
$0(){return this.a.eE(A.yg(B.ae[this.b.f]),0)===1},
$S:51}
A.qQ.prototype={
$1(a){return a.b===this.a},
$S:146}
A.ie.prototype={
gbQ(){var s=0,r=A.i(t.e6),q,p=this,o
var $async$gbQ=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:o=p.y
s=3
return A.b(o==null?p.y=A.dN(new A.mD(p),t.H):o,$async$gbQ)
case 3:o=p.z
o.toString
q=o
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$gbQ,r)},
gbu(){var s=0,r=A.i(t.u),q,p=this,o
var $async$gbu=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:o=p.x
s=3
return A.b(o==null?p.x=A.dN(new A.mC(p),t.u):o,$async$gbu)
case 3:q=b
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$gbu,r)},
da(){var s=0,r=A.i(t.H),q=this
var $async$da=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:s=--q.w===0?2:3
break
case 2:s=4
return A.b(q.n(),$async$da)
case 4:case 3:return A.f(null,r)}})
return A.h($async$da,r)},
n(){var s=0,r=A.i(t.H),q=this,p,o,n,m,l,k,j
var $async$n=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:j=q.a.r
j.toString
s=2
return A.b(j,$async$n)
case 2:p=b
o=q.x
s=o!=null?3:4
break
case 3:s=5
return A.b(o,$async$n)
case 5:n=b
j=q.r
if(j!=null)j.nC()
n.n()
m=q.z
if(m!=null){j=p.a
l=$.wh()
A.Aj(m)
k=l.a.get(m)
if(k==null)A.r(A.D("vfs has not been registered"))
j.a.d.dart_sqlite3_unregister_vfs(k)}case 4:j=q.Q
j=j==null?null:j.$0()
s=6
return A.b(j instanceof A.l?j:A.bM(j,t.H),$async$n)
case 6:q.f.jJ()
return A.f(null,r)}})
return A.h($async$n,r)},
il(a,b){var s,r,q,p,o=this.r,n=o==null
if(n)s=null
else{r=o.b
q=r.H(0,b)
if(q!=null)r.l(0,b,q)
s=q}if(s!=null)return new A.Q(s,!0)
p=a.jD(b,!0)
if(!n){n=p.a
n=n.c.d.sqlite3_stmt_isexplain(n.b)===0}else n=!1
if(n){n=o.b
if(n.a===o.a)n.H(0,new A.b2(n,A.p(n).h("b2<1>")).gah(0)).n()
n.l(0,p.d,p)
return new A.Q(p,!0)}return new A.Q(p,!1)},
nI(a,b,c){var s,r,q
if(c.gk(0)===0)return a.aY(b,B.n)
else{s=null
r=null
q=this.il(a,b)
s=q.a
r=q.b
try{s.nK(new A.f6(c.gj_()))}finally{if(r)s.du()
else s.n()}}},
ku(a,b,c){var s,r=null,q=null,p=this.il(a,b)
r=p.a
q=p.b
try{s=A.B4(r,c)
return s}finally{if(q)r.du()
else r.n()}}}
A.mD.prototype={
$0(){var s=0,r=A.i(t.H),q=this,p,o,n,m,l,k
var $async$$0=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:l=q.a
k=l.d
case 2:switch(k.a){case 0:s=4
break
case 1:s=5
break
case 2:s=6
break
case 3:s=7
break
case 4:s=8
break
default:s=3
break}break
case 4:s=9
return A.b(A.oo("drift_db/"+l.c,"vfs-web-"+l.b),$async$$0)
case 9:p=b
l.z=p
l.Q=p.gaG()
s=3
break
case 5:case 6:s=10
return A.b(A.ip("drift_db/"+l.c,k===B.H,"vfs-web-"+l.b),$async$$0)
case 10:o=b
l.f.f=o
n=o.a
l.z=n
l.Q=n.gaG()
s=3
break
case 7:s=11
return A.b(A.iu(l.c,"vfs-web-"+l.b,!1),$async$$0)
case 11:m=b
l.z=m
l.Q=m.gaG()
s=3
break
case 8:l.z=A.vh("vfs-web-"+l.b,null)
s=3
break
case 3:return A.f(null,r)}})
return A.h($async$$0,r)},
$S:3}
A.mC.prototype={
$0(){var s=0,r=A.i(t.u),q,p=this,o,n,m,l,k
var $async$$0=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:l=p.a
k=l.a.r
k.toString
s=3
return A.b(k,$async$$0)
case 3:o=b
s=4
return A.b(l.gbQ(),$async$$0)
case 4:n=b
o.js()
k=o.a
k=k.a
m=k.d.dart_sqlite3_register_vfs(k.d6(B.o.av(n.a),1),n,0)
if(m===0)A.r(A.D("could not register vfs"))
k=$.wh()
k.a.set(n,m)
s=5
return A.b(l.f.h2(new A.mB(l,o),null,t.u),$async$$0)
case 5:q=b
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$0,r)},
$S:52}
A.mB.prototype={
$0(){var s=this.a
return s.a.b.h6(this.b,"/database","vfs-web-"+s.b,s.e)},
$S:52}
A.qe.prototype={
gia(){var s,r=this,q=r.Q
if(q===$){s=r.a.gn5().eM()
r.Q!==$&&A.wf()
r.Q=s
q=s}return q},
cv(){var s=0,r=A.i(t.H),q=1,p=[],o=[],n=this,m,l,k,j,i,h
var $async$cv=A.d(function(a,b){if(a===1){p.push(b)
s=q}for(;;)switch(s){case 0:h=new A.bP(A.bd(A.CU(n.a),"stream",t.K))
q=2
j=v.G
case 5:s=7
return A.b(h.m(),$async$cv)
case 7:if(!b){s=6
break}m=h.gp()
s=J.z(m.t,"connect")?8:10
break
case 8:i=m.r
l=new A.dH(i.port,i.lockName,null)
n.hA(l)
s=9
break
case 10:s=A.Eu(m.t)?11:12
break
case 11:s=13
return A.b(n.j4(m),$async$cv)
case 13:k=b
j.postMessage(k.gjN())
case 12:case 9:s=5
break
case 6:o.push(4)
s=3
break
case 2:o=[1]
case 3:q=1
s=14
return A.b(h.u(),$async$cv)
case 14:s=o.pop()
break
case 4:return A.f(null,r)
case 1:return A.e(p.at(-1),r)}})
return A.h($async$cv,r)},
hA(a){var s=this,r=A.BP(a,s.d++,s)
s.c.push(r)
r.b.a.J(new A.qf(s,r))
return r},
j4(a){return this.x.hj(new A.qg(this,a),t.p6)},
br(a){return this.oq(a)},
oq(a){var s=0,r=A.i(t.H),q=this,p,o,n,m
var $async$br=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:n=v.G
m=new n.URL(a,A.S(n.location).href).href
n=q.r
s=n!=null?2:4
break
case 2:p=q.w
if(p!==m)throw A.a(A.D("Workers only support a single sqlite3 wasm module, provided different URI (has "+A.q(p)+", got "+m+")"))
s=5
return A.b(t.jN.b(n)?n:A.bM(n,t.he),$async$br)
case 5:s=3
break
case 4:o=A.ir(q.b.br(m),new A.qh(q),t.w,t.K)
q.r=o
s=6
return A.b(o,$async$br)
case 6:q.w=m
case 3:return A.f(null,r)}})
return A.h($async$br,r)},
nP(a,b,c,d){var s,r,q,p,o,n
for(s=this.e,r=new A.b3(s,s.r,s.e);r.m();){q=r.d
p=q.w
if(p!==0&&q.c===a&&q.d===b){q.w=p+1
return q}}r=this.f++
q="pkg-sqlite3-web-"+a
p=b===B.H||b===B.a8
o=A.nD(t.cj)
n=c===0?null:new A.nX(c,A.vn(null,null,t.N,t.fw))
n=new A.ie(this,r,a,b,d,new A.id(q+"-outer",q,q+"-tmp",new A.dU(o),p),n)
s.l(0,r,n)
return n}}
A.qf.prototype={
$0(){var s=this.a,r=s.c
B.c.H(r,this.b)
if(r.length===0)s.a.n()
return null},
$S:0}
A.qg.prototype={
$0(){var s=0,r=A.i(t.p6),q,p=this,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
var $async$$0=A.d(function(a0,a1){if(a0===1)return A.e(a1,r)
for(;;)switch(s){case 0:d=p.b
c=d.d
s=J.z(d.t,"dedicatedCompatibilityCheck")||J.z(d.t,"dedicatedInSharedCompatibilityCheck")?3:5
break
case 3:s=6
return A.b(A.cG(),$async$$0)
case 6:o=a1
n=o.a
m=o.b
l=m
k=n
s=4
break
case 5:k=!1
l=!1
case 4:b=J.z(d.t,"dedicatedCompatibilityCheck")||J.z(d.t,"sharedCompatibilityCheck")
if(b){s=7
break}else a1=b
s=8
break
case 7:s=9
return A.b(A.kP(),$async$$0)
case 9:case 8:j=a1
i=A.bs(t.cU)
s=J.z(d.t,"sharedCompatibilityCheck")?10:12
break
case 10:h=p.a.gia()
g=h!=null
s=g?13:14
break
case 13:d={d:c,i:0,t:"dedicatedInSharedCompatibilityCheck"}
f=A.dy(d)
n=h.a
n.postMessage(d,f)
b=A
a=A
s=15
return A.b(new A.eo(n,"message",!1,t.d4).gah(0),$async$$0)
case 15:e=b.A1(a.S(a1.data))
k=e.c
l=e.d
i.aa(0,e.a)
case 14:s=11
break
case 12:g=!1
case 11:s=k?16:17
break
case 16:b=J
s=18
return A.b(A.eR(),$async$$0)
case 18:d=b.Z(a1)
case 19:if(!d.m()){s=20
break}i.q(0,new A.Q(B.an,d.gp()))
s=19
break
case 20:case 17:s=j&&c!=null?21:22
break
case 21:s=23
return A.b(A.ur(c),$async$$0)
case 23:if(a1)i.q(0,new A.Q(B.ao,c))
case 22:d=A.ap(i,i.$ti.c)
q=new A.cU(d,g,k,l,j)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$0,r)},
$S:148}
A.qh.prototype={
$2(a,b){this.a.r=null
throw A.a(a)},
$S:149}
A.iI.prototype={
j(a){return"LockError: "+this.a}}
A.t9.prototype={
bK(a,b,c){return this.ou(a,b,c,c)},
ou(a,b,c,d){var s=0,r=A.i(d),q,p=this,o
var $async$bK=A.d(function(e,f){if(e===1)return A.e(f,r)
for(;;)switch(s){case 0:if($.m.i(0,p)!=null)throw A.a(new A.iI("Recursive lock is not allowed"))
o=t.X
q=$.m.jk(A.bE([p,!0],o,o)).bv(new A.te(p,b,a,c),c.h("0/"))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$bK,r)}}
A.ta.prototype={
$1(a){},
$S:11}
A.te.prototype={
$0(){return this.kk(this.d)},
kk(a){var s=0,r=A.i(a),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c
var $async$$0=A.d(function(b,a0){if(b===1){o.push(a0)
s=p}for(;;)switch(s){case 0:j={}
i=m.a
h=i.a
g=j.a=!1
f=$.m
e=t.D
d=t.F
c=new A.N(new A.l(f,e),d)
i.a=c.a
p=3
s=h!=null?6:7
break
case 6:l=new A.N(new A.l(f,e),d)
h.aK(new A.tb(j,l),t.P)
f=m.b
if(f!=null)f.J(new A.tc(l))
s=8
return A.b(l.a,$async$$0)
case 8:case 7:s=9
return A.b(m.c.$0(),$async$$0)
case 9:f=a0
q=f
n=[1]
s=4
break
n.push(5)
s=4
break
case 3:n=[2]
case 4:p=2
k=new A.tf(i,c)
if(h!=null?!j.a:g)h.aK(new A.td(k),t.P).lI()
else k.$0()
s=n.pop()
break
case 5:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$$0,r)},
$S(){return this.d.h("o<0>()")}}
A.tb.prototype={
$1(a){var s
this.a.a=!0
s=this.b
if((s.a.a&30)===0)s.L()},
$S:8}
A.tc.prototype={
$0(){var s=this.a
if((s.a.a&30)===0)s.b7(new A.bC("lock"),A.fG())},
$S:1}
A.tf.prototype={
$0(){var s=this.a,r=this.b
if(s.a===r.a)s.a=null
r.L()},
$S:0}
A.td.prototype={
$1(a){this.a.$0()},
$S:8}
A.jg.prototype={}
A.jh.prototype={
oM(a,b){return this.jH(new A.ov(this,a,b),"readTransaction()",null,b)}}
A.ov.prototype={
$1(a){return this.k8(a,this.c)},
k8(a,b){var s=0,r=A.i(b),q,p=this
var $async$$1=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:s=3
return A.b(A.eP(a,p.b,!1,p.c),$async$$1)
case 3:q=d
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$1,r)},
$S(){return this.c.h("o<0>(aB)")}}
A.bC.prototype={
j(a){return"A call to "+this.a+" has been aborted"},
$iO:1}
A.js.prototype={
bx(a,b){return this.km(a,b)},
km(a,b){var s=0,r=A.i(t.oy),q,p=this,o
var $async$bx=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:s=3
return A.b(p.aC(a,b),$async$bx)
case 3:o=d
q=o.gah(o)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$bx,r)},
aS(a,b){return this.kq(a,b)},
kq(a,b){var s=0,r=A.i(t.x),q,p=this,o
var $async$aS=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:o=A
s=3
return A.b(p.aC(a,b),$async$aS)
case 3:q=o.Av(d)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$aS,r)},
e9(){var s=0,r=A.i(t.H),q=this
var $async$e9=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:s=2
return A.b(q.by(),$async$e9)
case 2:if(!b)throw A.a(A.ji(null,null,0,"Dangling transaction detected. If you want to use BEGIN statements manually, COMMIT or ROLLBACK them before returning from writeLock.",null,null,null))
return A.f(null,r)}})
return A.h($async$e9,r)},
$iaB:1}
A.fB.prototype={
cR(){if(this.c)A.r(A.D("This context to a callback is no longer open. Make sure to await all statements on a database to avoid a context still being used after its callback has finished."))
if(this.b)throw A.a(A.D("The context from the callback was locked, e.g. due to a nested transaction."))},
bx(a,b){return this.kl(a,b)},
kl(a,b){var s=0,r=A.i(t.oy),q,p=this
var $async$bx=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:p.cR()
q=p.a.bx(a,b)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$bx,r)},
aC(a,b){return this.kn(a,b)},
eJ(a){return this.aC(a,B.n)},
kn(a,b){var s=0,r=A.i(t.G),q,p=this
var $async$aC=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:p.cR()
s=3
return A.b(p.a.aC(a,b),$async$aC)
case 3:q=d
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$aC,r)},
aS(a,b){return this.kp(a,b)},
dG(a){return this.aS(a,B.n)},
kp(a,b){var s=0,r=A.i(t.x),q,p=this
var $async$aS=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:p.cR()
q=p.a.aS(a,b)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$aS,r)},
$iaB:1}
A.fC.prototype={
aY(a,b){return this.nJ(a,b)},
je(a){return this.aY(a,B.n)},
nJ(a,b){var s=0,r=A.i(t.G),q,p=this
var $async$aY=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:p.cR()
s=3
return A.b(p.a.aY(a,b),$async$aY)
case 3:q=d
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$aY,r)},
b0(a,b){return this.pe(a,b,b)},
pe(a2,a3,a4){var s=0,r=A.i(a4),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$b0=A.d(function(a5,a6){if(a5===1){o.push(a6)
s=p}for(;;)switch(s){case 0:m.cR()
l=null
k=null
j=null
f=m.d
e=A.B8(f)
l=e.a
k=e.b
j=e.c
i=null
d=m.a
if(f===0){c=new A.cd(d.a,d.b,null)
c.d=!0}else c=d
h=c
p=4
m.b=!0
s=7
return A.b(d.aY(l,B.n),$async$b0)
case 7:i=new A.fC(f+1,h)
s=8
return A.b(a2.$1(i),$async$b0)
case 8:g=a6
s=9
return A.b(h.aY(k,B.n),$async$b0)
case 9:q=g
n=[1]
s=5
break
n.push(6)
s=5
break
case 4:p=3
a0=o.pop()
p=11
s=14
return A.b(h.aY(j,B.n),$async$b0)
case 14:p=3
s=13
break
case 11:p=10
a1=o.pop()
s=13
break
case 10:s=3
break
case 13:throw a0
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
m.b=!1
f=i
if(f!=null)f.c=!0
s=n.pop()
break
case 6:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$b0,r)},
$iaJ:1}
A.jf.prototype={
jH(a,b,c,d){return this.mQ(a,null,b,d)},
jG(a,b,c){return this.jH(a,b,null,c)},
aC(a,b){return this.jG(new A.ot(a,b),"getAll()",t.G)},
aS(a,b){return this.jG(new A.ou(a,b),"getOptional()",t.x)},
dG(a){return this.aS(a,B.n)},
$iaB:1,
$iaJ:1}
A.ot.prototype={
$1(a){return this.k6(a)},
k6(a){var s=0,r=A.i(t.G),q,p=this
var $async$$1=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:q=a.aC(p.a,p.b)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$1,r)},
$S:150}
A.ou.prototype={
$1(a){return this.k7(a)},
k7(a){var s=0,r=A.i(t.x),q,p=this
var $async$$1=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:q=a.aS(p.a,p.b)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$1,r)},
$S:151}
A.J.prototype={
D(a,b){if(b==null)return!1
return b instanceof A.J&&B.b0.bH(b.a,this.a)},
gv(a){return A.AR(this.a)},
j(a){return"UpdateNotification<"+this.a.j(0)+">"},
cI(a){return new A.J(this.a.cI(a.a))},
fJ(a){var s
for(s=this.a,s=s.gA(s);s.m();)if(a.V(0,s.gp().toLowerCase()))return!0
return!1}}
A.pA.prototype={
$2(a,b){return a.cI(b)},
$S:152}
A.pz.prototype={
$1(a){return new A.ce(new A.py(this.a),a,A.p(a).h("ce<C.T>"))},
$S:153}
A.py.prototype={
$1(a){return a.fJ(this.a)},
$S:154}
A.uh.prototype={
$1(a){var s,r,q,p,o=this,n={}
n.a=n.b=null
n.c=!1
s=new A.ui(n,a)
r=A.xA()
q=new A.uj(n,a,s,r)
r.b=new A.ud(n,o.a,q)
p=o.c.az(new A.uk(n,o.b,q,o.f),new A.ul(s,a),new A.um(s,a))
a.e=new A.ue(n)
a.f=new A.uf(n,r,q)
a.r=new A.ug(n,p)
a.q(0,o.d)
r.dU().$0()},
$S(){return this.f.h("~(bZ<0>)")}}
A.ui.prototype={
$0(){var s,r=this.a,q=r.b
if(q!=null){r.b=null
this.b.mY(q)
s=r.a
if(s!=null)s.u()
r.a=null
return!0}else return!1},
$S:51}
A.uj.prototype={
$0(){var s,r,q=this,p=q.a
if(p.a==null){s=q.b
r=s.b
s=!((r&1)!==0?(s.ga6().e&4)!==0:(r&2)===0)}else s=!1
if(s)if(q.c.$0()){s=q.b
r=s.b
if((r&1)!==0?(s.ga6().e&4)!==0:(r&2)===0)p.c=!0
else q.d.dU().$0()}},
$S:0}
A.ud.prototype={
$0(){var s=this.a
s.a=A.pp(this.b,new A.uc(s,this.c))},
$S:0}
A.uc.prototype={
$0(){this.a.a=null
this.b.$0()},
$S:0}
A.uk.prototype={
$1(a){var s,r=this.a,q=r.b
A:{if(q==null){s=a
break A}s=this.b.$2(q,a)
break A}r.b=s
this.c.$0()},
$S(){return this.d.h("~(0)")}}
A.um.prototype={
$2(a,b){this.a.$0()
this.b.mV(a,b)},
$S:5}
A.ul.prototype={
$0(){this.a.$0()
this.b.j5()},
$S:0}
A.ue.prototype={
$0(){var s=this.a,r=s.a,q=r==null
s.c=!q
if(!q)r.u()
s.a=null},
$S:0}
A.uf.prototype={
$0(){if(this.a.c)this.b.dU().$0()
else this.c.$0()},
$S:0}
A.ug.prototype={
$0(){var s=0,r=A.i(t.H),q,p=this,o
var $async$$0=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:o=p.a.a
if(o!=null)o.u()
q=p.b.u()
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$0,r)},
$S:3}
A.po.prototype={
$0(){this.a.pX()},
$S:1}
A.pm.prototype={
$1(a){this.a.q(0,a.b)},
$S:50}
A.pj.prototype={
$0(){var s,r,q,p,o,n,m,l,k,j,i
for(s=this.a,r=s.length,q=this.b,p=t.N,o=0;o<s.length;s.length===r||(0,A.a6)(s),++o){n=s[o]
n.b.aa(0,q)
m=n.a
l=m.b
k=(l&1)!==0
if(!(k?(m.ga6().e&4)!==0:(l&2)===0)){j=n.b
if(j.a!==0){if(l>=4)A.r(m.ap())
if(k)m.a1(j)
else if((l&3)===0){m=m.bY()
j=new A.bx(j)
i=m.c
if(i==null)m.b=m.c=j
else{i.sbs(j)
m.c=j}}n.b=A.bs(p)}}}q.au(0)},
$S:0}
A.pk.prototype={
$0(){this.a.au(0)},
$S:0}
A.pg.prototype={
$1(a){var s,r,q=this,p=q.b
p.push(a)
if(p.length===1){p=q.c
s=p.iQ()
r=s.w
s=r==null?s.w=s.i4(!0):r
q.a.a=A.u([s.O(q.d),p.f0().gbB().O(new A.ph(q.e)),p.f0().gbB().O(new A.pi(q.f))],t.bO)}},
$S:53}
A.ph.prototype={
$1(a){return this.a.$0()},
$S:16}
A.pi.prototype={
$1(a){return this.a.$0()},
$S:16}
A.pn.prototype={
$1(a){var s,r,q=this.b
B.c.H(q,a)
if(q.length===0)for(q=this.a.a,s=q.length,r=0;r<q.length;q.length===s||(0,A.a6)(q),++r)q[r].u()},
$S:53}
A.pl.prototype={
$1(a){var s=new A.dt(a,A.bs(t.N))
this.a.$1(s)
a.f=s.gmW()
a.r=new A.pf(this.b,s)},
$S:156}
A.pf.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
A.dt.prototype={
mX(){var s=this.b
if(s.a!==0){this.a.q(0,s)
this.b=A.bs(t.N)}}}
A.jz.prototype={
by(){var s=0,r=A.i(t.y),q,p=this,o,n
var $async$by=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:n=A
s=3
return A.b(p.a.aX({rawKind:"getAutoCommit"}),$async$by)
case 3:o=n.vT(b)
if(o==null)o=null
q=o===!0
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$by,r)},
mQ(a,b,c,d){return this.c0(new A.pW(a,d),b,c,d)},
b0(a,b){return this.lQ(new A.pZ(a,b),null,b)},
e3(a,b,c,d){return this.mS(a,b,c,d,d)},
mR(a,b,c){return this.e3(a,b,null,c)},
mS(a,b,c,d,e){var s=0,r=A.i(e),q,p=this
var $async$e3=A.d(function(f,g){if(f===1)return A.e(g,r)
for(;;)switch(s){case 0:s=3
return A.b(p.c0(new A.pX(a,d),b,c,d),$async$e3)
case 3:q=g
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$e3,r)},
c0(a,b,c,d){return this.lR(a,b,c,d,d)},
lQ(a,b,c){return this.c0(a,b,null,c)},
lR(a,b,c,d,e){var s=0,r=A.i(e),q,p=this,o,n
var $async$c0=A.d(function(f,g){if(f===1)return A.e(g,r)
for(;;)switch(s){case 0:n=p.b
s=n!=null?3:5
break
case 3:s=6
return A.b(n.bK(new A.pU(p,a,d),b,d),$async$c0)
case 6:q=g
s=1
break
s=4
break
case 5:o=p.a.cG(new A.pV(p,a,d),b,d)
s=7
return A.b(A.CV(o,c==null?"lock":c,d),$async$c0)
case 7:q=g
s=1
break
case 4:case 1:return A.f(q,r)}})
return A.h($async$c0,r)},
$ivA:1}
A.pW.prototype={
$1(a){return A.ol(a,this.a,this.b)},
$S(){return this.b.h("o<0>(cd)")}}
A.pZ.prototype={
$1(a){var s=this.b
return A.fD(a,new A.pY(this.a,s),s)},
$S(){return this.b.h("o<0>(cd)")}}
A.pY.prototype={
$1(a){return this.ke(a,this.b)},
ke(a,b){var s=0,r=A.i(b),q,p=this
var $async$$1=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:s=3
return A.b(a.b0(p.a,p.b),$async$$1)
case 3:q=d
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$1,r)},
$S(){return this.b.h("o<0>(aJ)")}}
A.pX.prototype={
$1(a){return A.fD(a,this.a,this.b)},
$S(){return this.b.h("o<0>(cd)")}}
A.pU.prototype={
$0(){return this.kd(this.c)},
kd(a){var s=0,r=A.i(a),q,p=this
var $async$$0=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:s=3
return A.b(p.b.$1(new A.cd(p.a,null,null)),$async$$0)
case 3:q=c
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$0,r)},
$S(){return this.c.h("o<0>()")}}
A.pV.prototype={
$1(a){return this.kc(a,this.c)},
kc(a,b){var s=0,r=A.i(b),q,p=this
var $async$$1=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:s=3
return A.b(p.b.$1(new A.cd(p.a,a,null)),$async$$1)
case 3:q=d
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$1,r)},
$S(){return this.c.h("o<0>(c)")}}
A.cd.prototype={
aC(a,b){return this.ko(a,b)},
ko(a,b){var s=0,r=A.i(t.G),q,p=this
var $async$aC=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:q=A.xm(p.c,"getAll",new A.ty(p,a,b),b,a,t.G)
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$aC,r)},
by(){var s=0,r=A.i(t.y),q,p=this
var $async$by=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:q=p.a.by()
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$by,r)},
aY(a,b){return A.xm(this.c,"execute",new A.tw(this,a,b),b,a,t.G)}}
A.ty.prototype={
$0(){var s=0,r=A.i(t.G),q,p=this
var $async$$0=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:s=3
return A.b(A.kT(new A.tx(p.a,p.b,p.c),t.G),$async$$0)
case 3:q=b
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$0,r)},
$S:19}
A.tx.prototype={
$0(){var s=0,r=A.i(t.G),q,p=this,o
var $async$$0=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:o=p.a
s=3
return A.b(o.a.a.cL(p.b,o.d,p.c,o.b),$async$$0)
case 3:q=b.c
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$0,r)},
$S:19}
A.tw.prototype={
$0(){return A.kT(new A.tv(this.a,this.b,this.c),t.G)},
$S:19}
A.tv.prototype={
$0(){var s=0,r=A.i(t.G),q,p=this,o
var $async$$0=A.d(function(a,b){if(a===1)return A.e(b,r)
for(;;)switch(s){case 0:o=p.a
s=3
return A.b(o.a.a.cL(p.b,o.d,p.c,o.b),$async$$0)
case 3:q=b.c
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$$0,r)},
$S:19}
A.u1.prototype={
$2(a,b){return A.ik(new A.bC(this.a),b)},
$S:158}
A.i2.prototype={
gp_(){var s=t.d4,r=s.h("aL<C.T,J?>"),q=r.h("ce<C.T>")
return new A.cR(new A.ce(new A.lk(),new A.aL(new A.ll(),new A.eo(this.b,"message",!1,s),r),q),q.h("cR<C.T,J>"))},
ao(a){this.b.postMessage(A.BN(a))}}
A.ll.prototype={
$1(a){var s,r,q=A.S(a.data)
if(J.z(q.a,0)){s=t.c.a(q.b)
r=t.k.b(s)?s:new A.ag(s,A.a5(s).h("ag<1,j>"))
return new A.J(J.dC(r,new A.lj(),t.N).dB(0))}else return null},
$S:160}
A.lj.prototype={
$1(a){return a},
$S:9}
A.lk.prototype={
$1(a){return a!=null},
$S:161}
A.qK.prototype={
$1(a){return a},
$S:9}
A.bS.prototype={
aF(){return"CustomDatabaseMessageKind."+this.b}}
A.jt.prototype={
fS(a){var s=0,r=A.i(t.X),q,p=this,o,n
var $async$fS=A.d(function(b,c){if(b===1)return A.e(c,r)
for(;;)switch(s){case 0:A.S(a)
if(A.mK(B.af,a.rawKind)===B.F){o=a.rawParameters
o=B.c.b9(o,new A.pv(),t.N).dB(0)
n=p.b.i(0,a.rawSql)
if(n!=null)n.q(0,new A.J(o))}q=null
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$fS,r)},
p0(a){var s=null,r=B.b.j(this.a++),q=A.bI(s,s,s,s,!1,t.d)
this.b.l(0,r,q)
q.d=new A.pw(a,r)
q.r=new A.px(this,a,r)
return new A.a4(q,A.p(q).h("a4<1>"))}}
A.pv.prototype={
$1(a){return A.al(a)},
$S:34}
A.pw.prototype={
$0(){this.a.aX(A.vc(B.E,this.b,[!0]))},
$S:0}
A.px.prototype={
$0(){var s=this.c
this.b.aX(A.vc(B.E,s,[!1]))
this.a.b.H(0,s)},
$S:1}
A.q1.prototype={
bK(a,b,c){if("locks" in v.G.navigator)return this.d5(a,b,c)
else return this.a.bK(a,b,c)},
ot(a,b){return this.bK(a,null,b)},
d5(a,b,c){return this.mJ(a,b,c,c)},
mJ(a,b,c,d){var s=0,r=A.i(d),q,p=2,o=[],n=[],m=this,l,k
var $async$d5=A.d(function(e,f){if(e===1){o.push(f)
s=p}for(;;)switch(s){case 0:s=3
return A.b(m.lB(b),$async$d5)
case 3:k=f
p=4
s=7
return A.b(a.$0(),$async$d5)
case 7:l=f
q=l
n=[1]
s=5
break
n.push(6)
s=5
break
case 4:n=[2]
case 5:p=2
k.a.L()
s=n.pop()
break
case 6:case 1:return A.f(q,r)
case 2:return A.e(o.at(-1),r)}})
return A.h($async$d5,r)},
lB(a){var s,r=new A.l($.m,t.nI),q=new A.N(r,t.aP),p=v.G,o=new p.AbortController()
if(a!=null)a.J(new A.q3(this,q,o))
s={}
s.signal=o.signal
A.ar(p.navigator.locks.request(this.b,s,A.bB(new A.q5(q))),t.X).j3(new A.q4())
return r}}
A.q3.prototype={
$0(){var s=this.b
if((s.a.a&30)===0){s.ab(new A.bC("getWebLock("+this.a.b+")"))
this.c.abort("aborted in Dart")}},
$S:1}
A.q5.prototype={
$1(a){var s=new A.l($.m,t.D),r=new A.N(s,t.F),q=this.a
if((q.a.a&30)===0)q.U(new A.fh(r))
else r.L()
return A.wJ(s)},
$S:46}
A.q4.prototype={
$1(a){return null},
$S:10}
A.fh.prototype={}
A.l7.prototype={
h6(a,b,c,d){return this.oF(a,b,c,d)},
oF(a,b,c,d){var s=0,r=A.i(t.u),q,p,o,n,m,l
var $async$h6=A.d(function(e,f){if(e===1)return A.e(f,r)
for(;;)switch(s){case 0:p=d==null?null:A.S(d)
o=a.oD(b,p!=null&&p.useMultipleCiphersVfs?"multipleciphers-"+c:c)
n=A.c3(!1,t.d)
m=A.u([],t.a6)
l=A.xl(o)
m.push(new A.aL(A.z4(),l,l.$ti.h("aL<C.T,J>")).O(n.gc4(n)))
q=new A.hX(o,n,m,A.T(t.eg,t.fK))
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$h6,r)},
cr(a,b){throw A.a(A.vy(null))}}
A.hX.prototype={
mf(a,b){if(!a.a){a.a=!0
b.b.a.aK(new A.l8(a),t.P)}},
n(){var s,r,q,p=this
p.kM()
for(s=p.c,r=s.length,q=0;q<s.length;s.length===r||(0,A.a6)(s),++q)s[q].u()
p.b.n()
s=p.d
if(s!=null)s.b.close()},
cr(a,b){return this.o_(a,b)},
o_(a,b){var s=0,r=A.i(t.X),q,p=this,o,n,m,l,k,j,i
var $async$cr=A.d(function(c,d){if(c===1)return A.e(d,r)
for(;;)switch(s){case 0:i=A.S(b.a)
case 3:switch(A.mK(B.af,i.rawKind).a){case 0:s=5
break
case 4:s=6
break
case 1:s=7
break
case 2:s=8
break
case 3:s=9
break
case 5:s=10
break
default:s=4
break}break
case 5:case 6:throw A.a(A.P("This is a response, not a request"))
case 7:o=p.a.b
q=o.a.d.sqlite3_get_autocommit(o.b)!==0
s=1
break
case 8:s=11
return A.b(b.c.$1$1(new A.l9(p,i),t.P),$async$cr)
case 11:s=4
break
case 9:o=i.rawParameters
n=A.aW(o[0])
o=i.rawSql
m=p.e.cE(a,A.ES())
if(n){m.hg()
p.mf(m,a)
l=A.xA()
k=p.b
l.b=m.b=new A.aq(k,A.p(k).h("aq<1>")).O(new A.la(l,a,o))}else m.hg()
s=4
break
case 10:o=i.name
if(p.d==null){j=p.d=new A.i2(new v.G.BroadcastChannel("sqlite3_async_updates/"+o))
o=p.c
k=A.xl(p.a)
o.push(new A.aL(A.z4(),k,k.$ti.h("aL<C.T,J>")).O(j.gkw()))
k=p.b
o.push(j.gp_().O(k.gc4(k)))}s=4
break
case 4:q={rawKind:"ok"}
s=1
break
case 1:return A.f(q,r)}})
return A.h($async$cr,r)},
gd8(){return this.a}}
A.l8.prototype={
$1(a){this.a.hg()},
$S:8}
A.l9.prototype={
$0(){var s,r,q,p,o,n,m,l=null,k=this.b
if(k.requireTransaction){q=this.a.a.b
q=q.a.d.sqlite3_get_autocommit(q.b)!==0}else q=!1
if(q)throw A.a(A.ji(A.AC(A.uA(k,"rawSql")),l,0,"Transaction rolled back by earlier statement. Cannot execute",l,l,l))
s=this.a.a.oK(k.rawSql)
try{k=k.parameters
k=J.Z(t.ip.b(k)?k:new A.ag(k,A.a5(k).h("ag<1,v>")))
while(k.m()){r=k.gp()
q=s
p=r
o=p.parameters
p=p.parameterTypes
p.toString
n=new Uint8Array(p,0)
if(q.r||q.b.r)A.r(A.D(u.f))
if(!q.f){m=q.a
m.c.d.sqlite3_reset(m.b)
q.f=!0}q.hF(new A.f6(new A.ci(o,p,n).gj_()))
q.hZ()}}finally{s.n()}},
$S:1}
A.la.prototype={
$1(a){var s=this.a.dU(),r=a.a
r=A.ap(r,A.p(r).c)
s.aJ(this.b.aX(A.vc(B.F,this.c,r)))},
$S:36}
A.ek.prototype={
hg(){var s=this.b
if(s!=null){this.b=null
s.u()}}}
A.jm.prototype={
gdJ(){return A.al(this.c)}}
A.p1.prototype={
gh1(){var s=this
if(s.c!==s.e)s.d=null
return s.d},
eL(a){var s,r=this,q=r.d=J.zM(a,r.b,r.c)
r.e=r.c
s=q!=null
if(s)r.e=r.c=q.gC()
return s},
jg(a,b){var s
if(this.eL(a))return
if(b==null)if(a instanceof A.fl)b="/"+a.a+"/"
else{s=J.be(a)
s=A.hL(s,"\\","\\\\")
b='"'+A.hL(s,'"','\\"')+'"'}this.i_(b)},
dc(a){return this.jg(a,null)},
nL(){if(this.c===this.b.length)return
this.i_("no more input")},
nH(a,b,c){var s,r,q,p,o,n=this.b
if(c<0)A.r(A.az("position must be greater than or equal to 0."))
else if(c>n.length)A.r(A.az("position must be less than or equal to the string length."))
s=c+b>n.length
if(s)A.r(A.az("position plus length must not go beyond the end of the string."))
s=this.a
r=A.u([0],t.t)
q=n.length
p=new A.oq(s,r,new Uint32Array(q))
p.kV(new A.br(n),s)
o=c+b
if(o>q)A.r(A.az("End "+o+u.D+p.gk(0)+"."))
else if(c<0)A.r(A.az("Start may not be negative, was "+c+"."))
throw A.a(new A.jm(n,a,new A.eq(p,c,o)))},
i_(a){this.nH("expected "+a+".",0,this.c)}}
A.e8.prototype={
gk(a){return this.b},
i(a,b){if(b>=this.b)throw A.a(A.wL(b,this))
return this.a[b]},
l(a,b,c){var s
if(b>=this.b)throw A.a(A.wL(b,this))
s=this.a
s.$flags&2&&A.B(s)
s[b]=c},
sk(a,b){var s,r,q,p,o=this,n=o.b
if(b<n)for(s=o.a,r=s.$flags|0,q=b;q<n;++q){r&2&&A.B(s)
s[q]=0}else{n=o.a.length
if(b>n){if(n===0)p=new Uint8Array(b)
else p=o.f3(b)
B.f.aj(p,0,o.b,o.a)
o.a=p}}o.b=b},
mF(a){var s,r=this,q=r.b
if(q===r.a.length)r.i8(q)
q=r.a
s=r.b++
q.$flags&2&&A.B(q)
q[s]=a},
q(a,b){var s,r=this,q=r.b
if(q===r.a.length)r.i8(q)
q=r.a
s=r.b++
q.$flags&2&&A.B(q)
q[s]=b},
hB(a,b,c){var s,r,q
if(t.j.b(a))c=c==null?J.aM(a):c
if(c!=null){this.lK(this.b,a,b,c)
return}for(s=J.Z(a),r=0;s.m();){q=s.gp()
if(r>=b)this.mF(q);++r}if(r<b)throw A.a(A.D("Too few elements"))},
lK(a,b,c,d){var s,r,q,p,o=this
if(t.j.b(b)){s=J.ab(b)
if(c>s.gk(b)||d>s.gk(b))throw A.a(A.D("Too few elements"))}r=d-c
q=o.b+r
o.lv(q)
s=o.a
p=a+r
B.f.R(s,p,o.b+r,s,a)
B.f.R(o.a,a,p,b,c)
o.b=q},
lv(a){var s,r=this
if(a<=r.a.length)return
s=r.f3(a)
B.f.aj(s,0,r.b,r.a)
r.a=s},
f3(a){var s=this.a.length*2
if(a!=null&&s<a)s=a
else if(s<8)s=8
return new Uint8Array(s)},
i8(a){var s=this.f3(null)
B.f.aj(s,0,a,this.a)
this.a=s},
R(a,b,c,d,e){var s=this.b
if(c>s)throw A.a(A.ac(c,0,s,null,null))
s=this.a
if(d instanceof A.bg)B.f.R(s,b,c,d.a,e)
else B.f.R(s,b,c,d,e)},
aj(a,b,c,d){return this.R(0,b,c,d,0)}}
A.k0.prototype={}
A.bg.prototype={}
A.vd.prototype={}
A.eo.prototype={
gaw(){return!0},
B(a,b,c,d){return A.aD(this.a,this.b,a,!1,this.$ti.c)},
O(a){return this.B(a,null,null,null)},
az(a,b,c){return this.B(a,null,b,c)},
bq(a,b,c){return this.B(a,b,c,null)}}
A.ep.prototype={
u(){var s=this,r=A.mV(null,t.H)
if(s.b==null)return r
s.fz()
s.d=s.b=null
return r},
bt(a){var s,r=this
if(r.b==null)throw A.a(A.D("Subscription has been canceled."))
r.fz()
s=A.yC(new A.rl(a),t.m)
s=s==null?null:A.bB(s)
r.d=s
r.fv()},
dq(a){},
aJ(a){var s=this
if(s.b==null)return;++s.a
s.fz()
if(a!=null)a.J(s.gbO())},
ai(){return this.aJ(null)},
am(){var s=this
if(s.b==null||s.a<=0)return;--s.a
s.fv()},
fv(){var s=this,r=s.d
if(r!=null&&s.a<=0)s.b.addEventListener(s.c,r,!1)},
fz(){var s=this.d
if(s!=null)this.b.removeEventListener(this.c,s,!1)},
$iae:1}
A.rk.prototype={
$1(a){return this.a.$1(a)},
$S:2}
A.rl.prototype={
$1(a){return this.a.$1(a)},
$S:2};(function aliases(){var s=J.cm.prototype
s.kI=s.j
s=A.b1.prototype
s.kE=s.jt
s.kF=s.ju
s.kH=s.jw
s.kG=s.jv
s=A.c9.prototype
s.kN=s.ak
s=A.aw.prototype
s.bU=s.N
s.eO=s.a9
s.hx=s.Z
s=A.cb.prototype
s.kO=s.hP
s.kP=s.i5
s.kQ=s.iD
s=A.y.prototype
s.hw=s.R
s=A.ah.prototype
s.hv=s.bj
s=A.hv.prototype
s.kR=s.n
s=A.i_.prototype
s.hu=s.nO
s=A.e4.prototype
s.kK=s.a_
s.kJ=s.D
s=A.cx.prototype
s.kM=s.n
s=A.J.prototype
s.kL=s.fJ})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_0u,q=hunkHelpers._instance_1u,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._static_1,n=hunkHelpers._static_0,m=hunkHelpers.installStaticTearOff,l=hunkHelpers._instance_1i,k=hunkHelpers._instance_2u
s(J,"D2","Az",38)
var j
r(j=A.dE.prototype,"ge7","u",18)
q(j,"gl7","l8",4)
p(j,"geq",0,0,null,["$1","$0"],["aJ","ai"],49,0,0)
r(j,"gbO","am",0)
o(A,"DJ","BB",12)
o(A,"DK","BC",12)
o(A,"DL","BD",12)
o(A,"DM","Di",20)
n(A,"yE","DA",0)
o(A,"DN","Dj",11)
s(A,"DO","Dl",5)
n(A,"up","Dk",0)
m(A,"DS",5,null,["$5"],["Dt"],164,0)
m(A,"DX",4,null,["$1$4","$4"],["u9",function(a,b,c,d){return A.u9(a,b,c,d,t.z)}],165,0)
m(A,"DZ",5,null,["$2$5","$5"],["ua",function(a,b,c,d,e){var i=t.z
return A.ua(a,b,c,d,e,i,i)}],166,0)
m(A,"DY",6,null,["$3$6"],["w2"],167,0)
m(A,"DV",4,null,["$1$4","$4"],["yt",function(a,b,c,d){return A.yt(a,b,c,d,t.z)}],168,0)
m(A,"DW",4,null,["$2$4","$4"],["yu",function(a,b,c,d){var i=t.z
return A.yu(a,b,c,d,i,i)}],169,0)
m(A,"DU",4,null,["$3$4","$4"],["ys",function(a,b,c,d){var i=t.z
return A.ys(a,b,c,d,i,i,i)}],170,0)
m(A,"DQ",5,null,["$5"],["Ds"],171,0)
m(A,"E_",4,null,["$4"],["ub"],172,0)
m(A,"DP",5,null,["$5"],["Dr"],173,0)
m(A,"FS",5,null,["$5"],["Dq"],174,0)
m(A,"DT",4,null,["$4"],["Du"],175,0)
m(A,"DR",5,null,["$5"],["yr"],176,0)
r(j=A.di.prototype,"gcW","b2",0)
r(j,"gcX","b3",0)
l(j=A.c9.prototype,"gc4","q",4)
r(j,"gaG","n",3)
q(j,"geR","N",4)
k(j,"gdM","a9",5)
r(j,"geX","Z",0)
p(A.dj.prototype,"gn4",0,1,null,["$2","$1"],["b7","ab"],35,0,0)
k(A.l.prototype,"gf1","lj",5)
l(j=A.cA.prototype,"gc4","q",4)
p(j,"gfD",0,1,null,["$2","$1"],["af","mU"],35,0,0)
r(j,"gaG","n",18)
q(j,"geR","N",4)
k(j,"gdM","a9",5)
r(j,"geX","Z",0)
r(j=A.cz.prototype,"gcW","b2",0)
r(j,"gcX","b3",0)
p(j=A.aw.prototype,"geq",0,0,null,["$1","$0"],["aJ","ai"],40,0,0)
r(j,"gbO","am",0)
r(j,"ge7","u",18)
r(j,"gcW","b2",0)
r(j,"gcX","b3",0)
p(j=A.en.prototype,"geq",0,0,null,["$1","$0"],["aJ","ai"],40,0,0)
r(j,"gbO","am",0)
r(j,"ge7","u",18)
r(j,"gij","m4",0)
q(j=A.bP.prototype,"glX","lY",4)
k(j,"gm0","m1",5)
r(j,"glZ","m_",0)
r(j=A.er.prototype,"gcW","b2",0)
r(j,"gcX","b3",0)
q(j,"gfb","fc",4)
k(j,"gff","fg",107)
r(j,"gfd","fe",0)
r(j=A.ez.prototype,"gcW","b2",0)
r(j,"gcX","b3",0)
q(j,"gfb","fc",4)
k(j,"gff","fg",5)
r(j,"gfd","fe",0)
s(A,"w5","CQ",22)
o(A,"w6","CR",23)
s(A,"E3","AG",38)
o(A,"E6","CS",31)
o(A,"E5","C3",177)
l(j=A.jN.prototype,"gc4","q",4)
r(j,"gaG","n",0)
o(A,"yH","El",23)
s(A,"yG","Ek",22)
o(A,"E7","Bt",9)
m(A,"EA",2,null,["$1$2","$2"],["yP",function(a,b){return A.yP(a,b,t.q)}],178,0)
r(j=A.fH.prototype,"gm2","m3",0)
r(j,"gmB","mC",0)
r(j,"gmD","mE",0)
r(j,"gmA","iH",41)
k(j=A.f7.prototype,"gnG","bH",22)
q(j,"gob","fX",23)
q(j,"goh","oi",20)
o(A,"E1","zV",9)
o(A,"Er","Au",179)
o(A,"EL","BO",180)
o(A,"EM","B_",181)
r(A.ki.prototype,"gnM","jh",0)
r(A.ch.prototype,"goy","h3",0)
r(A.jB.prototype,"gaG","n",3)
q(A.j3.prototype,"gp5","p6",15)
q(j=A.ic.prototype,"gow","ox",7)
k(j,"gor","os",101)
p(j,"gpy",0,5,null,["$5"],["pz"],102,0,0)
p(j,"gpn",0,3,null,["$3"],["po"],103,0,0)
p(j,"gpf",0,4,null,["$4"],["pg"],55,0,0)
p(j,"gpu",0,4,null,["$4"],["pv"],55,0,0)
p(j,"gpA",0,3,null,["$3"],["pB"],105,0,0)
k(j,"gpF","pG",37)
k(j,"gpl","pm",37)
q(j,"gpj","pk",29)
p(j,"gpC",0,4,null,["$4"],["pD"],39,0,0)
p(j,"gpN",0,4,null,["$4"],["pO"],39,0,0)
k(j,"gpJ","pK",109)
k(j,"gpH","pI",13)
k(j,"gps","pt",13)
k(j,"gpw","px",13)
k(j,"gpL","pM",13)
k(j,"gph","pi",13)
q(j,"geG","pp",29)
p(j,"gpq",0,3,null,["$3"],["pr"],111,0,0)
q(j,"geI","pE",29)
q(j,"gno","np",12)
q(j,"gnj","nk",112)
p(j,"gnm",0,5,null,["$5"],["nn"],113,0,0)
p(j,"gnu",0,4,null,["$4"],["nv"],24,0,0)
p(j,"gny",0,4,null,["$4"],["nz"],24,0,0)
p(j,"gnw",0,4,null,["$4"],["nx"],24,0,0)
k(j,"gnA","nB",42)
k(j,"gns","nt",42)
p(j,"gnq",0,5,null,["$5"],["nr"],116,0,0)
k(j,"gnh","ni",117)
k(j,"gnf","ng",118)
p(j,"gnd",0,3,null,["$3"],["ne"],119,0,0)
r(j=A.ck.prototype,"gaG","n",3)
r(j,"gnQ","nR",3)
r(A.e2.prototype,"gaG","n",0)
q(A.jC.prototype,"gjo","fR",2)
r(A.id.prototype,"glG","lH",0)
q(A.ci.prototype,"gj_","j0",137)
q(A.ei.prototype,"gjo","fR",2)
o(A,"z4","Bm",182)
r(A.dt.prototype,"gmW","mX",0)
q(A.i2.prototype,"gkw","ao",36)
q(A.jt.prototype,"go7","fS",162)
n(A,"ES","BQ",121)
r(j=A.ep.prototype,"ge7","u",3)
p(j,"geq",0,0,null,["$1","$0"],["aJ","ai"],49,0,0)
r(j,"gbO","am",0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.k,null)
q(A.k,[A.vl,J.iw,A.fA,J.dD,A.C,A.dE,A.n,A.i6,A.cS,A.G,A.W,A.y,A.om,A.at,A.co,A.ee,A.il,A.jn,A.j8,A.ih,A.jA,A.iR,A.fe,A.jq,A.fK,A.hm,A.f1,A.es,A.ct,A.pq,A.iT,A.fa,A.ht,A.nB,A.d_,A.b3,A.iH,A.fl,A.ew,A.jF,A.fJ,A.tl,A.jO,A.kA,A.bt,A.jX,A.ts,A.kw,A.h_,A.jH,A.hd,A.ku,A.a2,A.aw,A.c9,A.bN,A.dj,A.bj,A.l,A.jG,A.jj,A.cA,A.kv,A.jI,A.fZ,A.jS,A.rg,A.ex,A.en,A.bP,A.h9,A.tN,A.tP,A.tO,A.tL,A.tM,A.tK,A.tH,A.kF,A.tG,A.tF,A.tJ,A.tI,A.kE,A.kG,A.kD,A.eG,A.fX,A.jY,A.rZ,A.eu,A.k4,A.aH,A.kz,A.fr,A.k5,A.jl,A.i9,A.ah,A.lw,A.qE,A.i8,A.dk,A.rU,A.tm,A.kC,A.cE,A.aA,A.jV,A.bT,A.aZ,A.rh,A.iU,A.fF,A.jU,A.aT,A.iv,A.M,A.E,A.kt,A.a0,A.hC,A.pC,A.bk,A.im,A.vC,A.iS,A.rO,A.rP,A.ii,A.fU,A.fH,A.eA,A.U,A.f7,A.eD,A.ev,A.iJ,A.iQ,A.jr,A.l3,A.bR,A.hZ,A.i_,A.li,A.fs,A.cn,A.dS,A.dT,A.m_,A.p2,A.nS,A.iW,A.hP,A.cq,A.f5,A.f4,A.dY,A.db,A.cY,A.J,A.dF,A.lH,A.ca,A.fq,A.dL,A.lG,A.fR,A.m3,A.mF,A.fc,A.dG,A.f8,A.f_,A.fg,A.fP,A.nu,A.fL,A.lF,A.aK,A.dJ,A.eg,A.oN,A.qj,A.cr,A.fT,A.fO,A.ff,A.f0,A.ki,A.vK,A.pc,A.ch,A.e7,A.fY,A.hr,A.h6,A.h3,A.jB,A.o6,A.j3,A.i7,A.ri,A.mm,A.nW,A.oq,A.jb,A.e4,A.n0,A.aP,A.by,A.bv,A.je,A.b8,A.d9,A.mn,A.cB,A.os,A.cT,A.aC,A.i0,A.m5,A.kn,A.kj,A.np,A.f6,A.c6,A.fE,A.pR,A.pM,A.pT,A.pS,A.dg,A.cw,A.ic,A.dl,A.pN,A.lb,A.hc,A.rm,A.k6,A.k_,A.t0,A.pH,A.dH,A.oi,A.eZ,A.jP,A.j2,A.ml,A.ib,A.cx,A.io,A.n_,A.bV,A.id,A.dU,A.cU,A.nX,A.d5,A.rf,A.tE,A.rd,A.hu,A.ej,A.ie,A.qe,A.t9,A.jf,A.bC,A.js,A.fB,A.dt,A.i2,A.jt,A.q1,A.fh,A.ek,A.p1,A.vd,A.ep])
q(J.iw,[J.iy,J.dP,J.ai,J.aQ,J.dR,J.dQ,J.cl])
q(J.ai,[J.cm,J.w,A.dV,A.fv])
q(J.cm,[J.iX,J.dd,J.b_])
r(J.ix,A.fA)
r(J.nx,J.w)
q(J.dQ,[J.fk,J.iz])
q(A.C,[A.cR,A.eB,A.fI,A.dm,A.bz,A.b9,A.c8,A.eV,A.eo])
q(A.n,[A.cy,A.x,A.bY,A.c7,A.fb,A.dc,A.c1,A.fW,A.fy,A.he,A.jE,A.ks,A.eC,A.d0])
q(A.cy,[A.cP,A.hF])
r(A.h8,A.cP)
r(A.h2,A.hF)
q(A.cS,[A.lL,A.lD,A.lK,A.nq,A.pe,A.uD,A.uF,A.qv,A.qu,A.tS,A.tR,A.tn,A.tp,A.to,A.mY,A.mQ,A.mU,A.rp,A.ro,A.rA,A.rD,A.oD,A.oK,A.oI,A.oL,A.oG,A.rc,A.t7,A.r9,A.rY,A.nG,A.m2,A.mJ,A.qJ,A.mR,A.uH,A.uY,A.uZ,A.oA,A.oz,A.lz,A.lB,A.lh,A.ln,A.tU,A.lx,A.nM,A.uv,A.m0,A.m1,A.un,A.uW,A.uV,A.u4,A.lv,A.lt,A.lu,A.lp,A.lI,A.m4,A.pb,A.uO,A.uM,A.uq,A.v4,A.pF,A.oR,A.oZ,A.oY,A.oS,A.oT,A.oU,A.oX,A.oW,A.oP,A.qk,A.qq,A.qp,A.qo,A.ql,A.qm,A.lX,A.lY,A.p5,A.p7,A.p8,A.p9,A.pB,A.qd,A.qc,A.uJ,A.uK,A.uI,A.n2,A.n1,A.n3,A.n5,A.n7,A.n4,A.nl,A.ow,A.mv,A.ti,A.uU,A.v_,A.v0,A.l6,A.r7,A.r8,A.lO,A.lP,A.lT,A.lU,A.lV,A.mM,A.le,A.lc,A.rI,A.rL,A.rM,A.no,A.nm,A.rH,A.op,A.pI,A.pJ,A.pK,A.pL,A.o1,A.o2,A.o0,A.o_,A.nZ,A.ob,A.o7,A.oe,A.of,A.o8,A.q_,A.my,A.nO,A.mL,A.oj,A.ok,A.us,A.lM,A.lN,A.lQ,A.lR,A.lS,A.u0,A.qU,A.qS,A.qY,A.r0,A.qQ,A.ta,A.tb,A.td,A.ov,A.ot,A.ou,A.pz,A.py,A.uh,A.uk,A.pm,A.pg,A.ph,A.pi,A.pn,A.pl,A.pW,A.pZ,A.pY,A.pX,A.pV,A.ll,A.lj,A.lk,A.qK,A.pv,A.q5,A.q4,A.l8,A.la,A.rk,A.rl])
q(A.lL,[A.qO,A.lE,A.lZ,A.ny,A.uE,A.tT,A.uo,A.mZ,A.mP,A.rq,A.rB,A.rE,A.qs,A.tV,A.rF,A.nC,A.nI,A.mI,A.rV,A.qI,A.pD,A.mT,A.mS,A.ly,A.lA,A.lC,A.lg,A.nN,A.mG,A.v5,A.p0,A.qn,A.vr,A.n6,A.rN,A.q0,A.r4,A.qh,A.pA,A.um,A.u1])
r(A.ag,A.h2)
q(A.G,[A.cQ,A.b1,A.cb,A.k1])
q(A.W,[A.cZ,A.c4,A.iA,A.jp,A.j5,A.jT,A.dX,A.fn,A.hV,A.a3,A.fQ,A.jo,A.aV,A.ia,A.iI])
q(A.y,[A.e9,A.ec,A.ci,A.e8])
r(A.br,A.e9)
q(A.lK,[A.uT,A.qw,A.qx,A.tr,A.tq,A.tQ,A.qz,A.qA,A.qC,A.qD,A.qB,A.qy,A.mW,A.rr,A.rw,A.rv,A.rt,A.rs,A.rz,A.ry,A.rx,A.rC,A.oE,A.oJ,A.oH,A.oM,A.oF,A.th,A.tg,A.qr,A.qN,A.qM,A.t1,A.t_,A.tW,A.tX,A.rb,A.ra,A.t6,A.t5,A.u8,A.tB,A.tA,A.u5,A.u3,A.oB,A.oC,A.oy,A.lm,A.u6,A.u7,A.nL,A.nF,A.l1,A.l2,A.uP,A.uN,A.uQ,A.uR,A.uS,A.v3,A.pG,A.oQ,A.oO,A.p_,A.oV,A.u_,A.og,A.t3,A.pd,A.lW,A.pa,A.p6,A.q8,A.q9,A.qa,A.qb,A.nk,A.n8,A.nf,A.ng,A.nh,A.ni,A.nd,A.ne,A.n9,A.na,A.nb,A.nc,A.nj,A.rG,A.mw,A.mx,A.mt,A.ms,A.mu,A.mp,A.mo,A.mq,A.mr,A.tj,A.tk,A.v1,A.ma,A.m7,A.mc,A.me,A.mg,A.m9,A.mf,A.mk,A.mi,A.mh,A.mb,A.md,A.mj,A.m8,A.l4,A.l5,A.pO,A.ld,A.rJ,A.rK,A.rn,A.nn,A.o3,A.oc,A.od,A.o9,A.oa,A.mz,A.mA,A.nQ,A.nP,A.r2,A.r6,A.r3,A.r5,A.qR,A.qX,A.r_,A.qT,A.qZ,A.r1,A.qV,A.qW,A.mD,A.mC,A.mB,A.qf,A.qg,A.te,A.tc,A.tf,A.ui,A.uj,A.ud,A.uc,A.ul,A.ue,A.uf,A.ug,A.po,A.pj,A.pk,A.pf,A.pU,A.ty,A.tx,A.tw,A.tv,A.pw,A.px,A.q3,A.l9])
q(A.x,[A.X,A.cW,A.b2,A.bX,A.aG,A.hb])
q(A.X,[A.da,A.a8,A.d7,A.fp,A.k2])
r(A.bU,A.bY)
r(A.f9,A.dc)
r(A.dK,A.c1)
q(A.hm,[A.k7,A.k8,A.k9,A.ka])
r(A.hn,A.k7)
q(A.k8,[A.Q,A.ho,A.hp,A.kb,A.ey,A.kc,A.kd])
q(A.k9,[A.hq,A.ke,A.kf,A.kg])
r(A.kh,A.ka)
r(A.aY,A.f1)
q(A.ct,[A.f2,A.hs])
r(A.f3,A.f2)
r(A.fj,A.nq)
r(A.fz,A.c4)
q(A.pe,[A.ox,A.eW])
q(A.b1,[A.fm,A.hf])
r(A.bF,A.dV)
q(A.fv,[A.fu,A.dW])
q(A.dW,[A.hh,A.hj])
r(A.hi,A.hh)
r(A.cp,A.hi)
r(A.hk,A.hj)
r(A.b5,A.hk)
q(A.cp,[A.iK,A.iL])
q(A.b5,[A.iM,A.iN,A.iO,A.iP,A.fw,A.fx,A.d2])
r(A.hw,A.jT)
r(A.a4,A.eB)
r(A.aq,A.a4)
q(A.aw,[A.cz,A.er,A.ez])
r(A.di,A.cz)
q(A.c9,[A.ds,A.h0])
q(A.dj,[A.aa,A.N])
q(A.cA,[A.bL,A.cC])
r(A.kr,A.fZ)
q(A.jS,[A.bx,A.em])
r(A.hg,A.bL)
q(A.b9,[A.ce,A.aL])
q(A.jj,[A.kq,A.nA])
q(A.kD,[A.jQ,A.km])
q(A.cb,[A.dp,A.h4])
r(A.cc,A.hs)
r(A.hB,A.fr)
r(A.de,A.hB)
q(A.jl,[A.hv,A.tt,A.rX,A.dr])
r(A.rR,A.hv)
q(A.i9,[A.cX,A.lf,A.nz])
q(A.cX,[A.hS,A.iE,A.jw])
q(A.ah,[A.ky,A.kx,A.hY,A.iD,A.iC,A.jy,A.jx])
q(A.ky,[A.hU,A.iG])
q(A.kx,[A.hT,A.iF])
q(A.lw,[A.rj,A.t8,A.qF,A.jM,A.jN,A.k3,A.kB])
r(A.qL,A.qE)
r(A.qt,A.qF)
r(A.iB,A.fn)
r(A.rS,A.i8)
r(A.rT,A.rU)
r(A.rW,A.k3)
r(A.et,A.rX)
r(A.kH,A.kC)
r(A.tC,A.kH)
q(A.a3,[A.e_,A.fi])
r(A.jR,A.hC)
r(A.d8,A.eD)
r(A.cs,A.bR)
q(A.hZ,[A.i3,A.e0])
r(A.cO,A.fI)
r(A.oh,A.i_)
r(A.jD,A.oh)
r(A.hQ,A.jD)
q(A.li,[A.e1,A.cv])
r(A.jk,A.cv)
r(A.eY,A.U)
r(A.nv,A.p2)
q(A.nv,[A.nT,A.pE,A.q7])
q(A.rh,[A.fS,A.p3,A.dI,A.af,A.e5,A.nR,A.dM,A.ft,A.cj,A.bw,A.fd,A.cu,A.bS])
r(A.bf,A.J)
q(A.ca,[A.hl,A.eh,A.h7])
q(A.lF,[A.fo,A.d6])
q(A.mm,[A.l7,A.re])
r(A.nU,A.l7)
r(A.iq,A.jb)
q(A.e4,[A.eq,A.jd])
r(A.e3,A.je)
r(A.c2,A.jd)
r(A.e6,A.cT)
r(A.i1,A.aC)
q(A.i1,[A.is,A.ck,A.e2])
q(A.i0,[A.jZ,A.kp])
r(A.kk,A.m5)
r(A.kl,A.kk)
r(A.bG,A.kl)
r(A.ko,A.kn)
r(A.aU,A.ko)
q(A.aH,[A.dh,A.aE])
r(A.eb,A.os)
q(A.aE,[A.ha,A.h5,A.el,A.eF])
r(A.nY,A.oi)
q(A.nY,[A.jC,A.ei])
r(A.m6,A.ib)
r(A.bq,A.d5)
r(A.jg,A.jf)
r(A.jh,A.jg)
r(A.fC,A.fB)
r(A.jz,A.jh)
r(A.cd,A.js)
r(A.hX,A.cx)
r(A.jm,A.e3)
r(A.k0,A.e8)
r(A.bg,A.k0)
s(A.e9,A.jq)
s(A.hF,A.y)
s(A.hh,A.y)
s(A.hi,A.fe)
s(A.hj,A.y)
s(A.hk,A.fe)
s(A.bL,A.jI)
s(A.cC,A.kv)
s(A.hB,A.kz)
s(A.kH,A.jl)
s(A.jD,A.l3)
s(A.kk,A.y)
s(A.kl,A.iQ)
s(A.kn,A.jr)
s(A.ko,A.G)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{c:"int",Y:"double",bQ:"num",j:"String",H:"bool",E:"Null",t:"List",k:"Object",a_:"Map",v:"JSObject"},mangledNames:{},types:["~()","E()","~(v)","o<~>()","~(k?)","~(k,ad)","E(k,ad)","~(c)","E(~)","j(j)","E(@)","~(@)","~(~())","c(aO,c)","E(v)","o<~>(o<~>)","~(~)","v()","o<@>()","o<bG>()","H(k?)","o<~>(hc)","H(k?,k?)","c(k?)","~(j1,c,c,c)","H(j)","o<cq?>(o<~>)","H(aP)","c()","c(aO)","o<E>()","@(@)","~(dS)","o<j>(aJ)","j(k?)","~(k[ad?])","~(J)","c(aC,c)","c(@,@)","c(aO,c,c,aQ)","~([o<~>?])","o<~>?()","~(j1,c)","~(j,j)","@()","v(H)","v(k)","~(k?,k?)","o<ae<~>>()","~([o<@>?])","~(b8)","H()","o<cx>()","~(dt)","j(d1)","c(aC,c,c,c)","o<+immediateRestart(H)>()","dJ(k?)","M<j,+atLast,priority,sinceLast,targetCount(c,c,c,c)>(j,k?)","j(+(j,k?))","o<~>(ae<~>)","a0(a0,j)","j(a0)","o<j>()","o<j>(o<~>)","c(c,c)","o<e1>(o<~>)","o<dO?>()","o<dO?>(aJ)","a_<j,@>(+name,parameters(j,j))","o<+immediateRestart(H)>(o<~>)","o<~>(aJ)","C<aS>?(cv)","E(cq?)","e7()","o<+(k,E)>(af,k,o<~>)","e0()","c(c)","0&(j,c?)","~(aK)","~(j)","+name,parameters(j,j)(k?)","o<~>(v)","o<+(E,E)>()","o<+(v,E)>()","o<+(bF?,w<k?>?)>()","+(k?,w<k?>?)/()","v?()","j?()","c(by)","@(@,j)","k(by)","k(aP)","c(aP,aP)","t<by>(M<k,t<aP>>)","E(b_,b_)","c2()","k?(~)","~(c,j,c)","k?(k?)","~(A,a9,A,~())","~(aQ,c)","aO?(aC,c,c,c,c)","c(aC,c,c)","E(@,ad)","c(aC?,c,c)","~(c,@)","~(@,ad)","H(j,j)","c(aO,aQ)","c(j)","c(aO,c,c)","c(c())","~(~(c,j,c),c,c,c,aQ)","E(j,j[k?])","~(bZ<t<c>>)","c(j1,c,c,c,c)","c(c(c),c)","c(vt,c)","c(vt,c,c)","~(t<c>)","ek()","fs()","v(v?)","~(cN)","o<~>(c,bh)","o<~>(c)","bh()","o<v>(j)","E(bV)","o<E>(v)","l<@>?()","~(@,@)","E(k?,ad)","j?(k?)","dT()","j?(j?)","~(cT)","v(v)","o<0^>(0^())<k?>","o<v>()","E(~())","j(j?)","o<ae<b8>>()","bf(J)","H(bf)","H(ej)","@(j)","o<cU>()","0&(k?,ad)","o<bG>(aB)","o<aU?>(aB)","J(J,J)","C<J>(C<J>)","H(J)","o<c?>(aB)","~(bZ<bu<j>>)","o<H>(aJ)","0&(bq,ad)","dk<@,@>(aj<@>)","J?(v)","H(J?)","o<k?>(k?)","H(ca)","~(A?,a9?,A,k,ad)","0^(A?,a9?,A,0^())<k?>","0^(A?,a9?,A,0^(1^),1^)<k?,k?>","0^(A?,a9?,A,0^(1^,2^),1^,2^)<k?,k?,k?>","0^()(A,a9,A,0^())<k?>","0^(1^)(A,a9,A,0^(1^))<k?,k?>","0^(1^,2^)(A,a9,A,0^(1^,2^))<k?,k?,k?>","a2?(A,a9,A,k,ad?)","~(A?,a9?,A,~())","fN(A,a9,A,aZ,~())","fN(A,a9,A,aZ,~(fN))","~(A,a9,A,j)","A(A?,a9?,A,fX?,a_<k?,k?>?)","et(aj<j>)","0^(0^,0^)<bQ>","as(a_<j,k?>)","eg(aj<bh>)","cr(k)","J(bu<j>)","v(w<k?>)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"1;immediateRestart":a=>b=>b instanceof A.hn&&a.b(b.a),"2;":(a,b)=>c=>c instanceof A.Q&&a.b(c.a)&&b.b(c.b),"2;basicSupport,supportsReadWriteUnsafe":(a,b)=>c=>c instanceof A.ho&&a.b(c.a)&&b.b(c.b),"2;controller,sync":(a,b)=>c=>c instanceof A.hp&&a.b(c.a)&&b.b(c.b),"2;downloaded,total":(a,b)=>c=>c instanceof A.kb&&a.b(c.a)&&b.b(c.b),"2;file,outFlags":(a,b)=>c=>c instanceof A.ey&&a.b(c.a)&&b.b(c.b),"2;name,parameters":(a,b)=>c=>c instanceof A.kc&&a.b(c.a)&&b.b(c.b),"2;result,resultCode":(a,b)=>c=>c instanceof A.kd&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.hq&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;autocommit,lastInsertRowid,result":(a,b,c)=>d=>d instanceof A.ke&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;connectName,connectPort,lockName":(a,b,c)=>d=>d instanceof A.kf&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"3;hasSynced,lastSyncedAt,priority":(a,b,c)=>d=>d instanceof A.kg&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;atLast,priority,sinceLast,targetCount":a=>b=>b instanceof A.kh&&A.EB(a,b.a)}}
A.Cp(v.typeUniverse,JSON.parse('{"b_":"cm","iX":"cm","dd":"cm","F5":"dV","w":{"t":["1"],"ai":[],"x":["1"],"v":[],"n":["1"],"aF":["1"]},"iy":{"H":[],"a1":[]},"dP":{"E":[],"a1":[]},"ai":{"v":[]},"cm":{"ai":[],"v":[]},"ix":{"fA":[]},"nx":{"w":["1"],"t":["1"],"ai":[],"x":["1"],"v":[],"n":["1"],"aF":["1"]},"dQ":{"Y":[],"a7":["bQ"]},"fk":{"Y":[],"c":[],"a7":["bQ"],"a1":[]},"iz":{"Y":[],"a7":["bQ"],"a1":[]},"cl":{"j":[],"a7":["j"],"aF":["@"],"a1":[]},"cR":{"C":["2"],"C.T":"2"},"dE":{"ae":["2"]},"cy":{"n":["2"]},"cP":{"cy":["1","2"],"n":["2"],"n.E":"2"},"h8":{"cP":["1","2"],"cy":["1","2"],"x":["2"],"n":["2"],"n.E":"2"},"h2":{"y":["2"],"t":["2"],"cy":["1","2"],"x":["2"],"n":["2"]},"ag":{"h2":["1","2"],"y":["2"],"t":["2"],"cy":["1","2"],"x":["2"],"n":["2"],"y.E":"2","n.E":"2"},"cQ":{"G":["3","4"],"a_":["3","4"],"G.V":"4","G.K":"3"},"cZ":{"W":[]},"br":{"y":["c"],"t":["c"],"x":["c"],"n":["c"],"y.E":"c"},"x":{"n":["1"]},"X":{"x":["1"],"n":["1"]},"da":{"X":["1"],"x":["1"],"n":["1"],"X.E":"1","n.E":"1"},"bY":{"n":["2"],"n.E":"2"},"bU":{"bY":["1","2"],"x":["2"],"n":["2"],"n.E":"2"},"a8":{"X":["2"],"x":["2"],"n":["2"],"X.E":"2","n.E":"2"},"c7":{"n":["1"],"n.E":"1"},"fb":{"n":["2"],"n.E":"2"},"dc":{"n":["1"],"n.E":"1"},"f9":{"dc":["1"],"x":["1"],"n":["1"],"n.E":"1"},"c1":{"n":["1"],"n.E":"1"},"dK":{"c1":["1"],"x":["1"],"n":["1"],"n.E":"1"},"cW":{"x":["1"],"n":["1"],"n.E":"1"},"fW":{"n":["1"],"n.E":"1"},"fy":{"n":["1"],"n.E":"1"},"e9":{"y":["1"],"t":["1"],"x":["1"],"n":["1"]},"d7":{"X":["1"],"x":["1"],"n":["1"],"X.E":"1","n.E":"1"},"f1":{"a_":["1","2"]},"aY":{"f1":["1","2"],"a_":["1","2"]},"he":{"n":["1"],"n.E":"1"},"f2":{"ct":["1"],"bu":["1"],"x":["1"],"n":["1"]},"f3":{"ct":["1"],"bu":["1"],"x":["1"],"n":["1"]},"fz":{"c4":[],"W":[]},"iA":{"W":[]},"jp":{"W":[]},"iT":{"O":[]},"ht":{"ad":[]},"j5":{"W":[]},"b1":{"G":["1","2"],"a_":["1","2"],"G.V":"2","G.K":"1"},"b2":{"x":["1"],"n":["1"],"n.E":"1"},"bX":{"x":["1"],"n":["1"],"n.E":"1"},"aG":{"x":["M<1,2>"],"n":["M<1,2>"],"n.E":"M<1,2>"},"fm":{"b1":["1","2"],"G":["1","2"],"a_":["1","2"],"G.V":"2","G.K":"1"},"ew":{"j0":[],"d1":[]},"jE":{"n":["j0"],"n.E":"j0"},"fJ":{"d1":[]},"ks":{"n":["d1"],"n.E":"d1"},"bF":{"ai":[],"v":[],"cN":[],"a1":[]},"dV":{"ai":[],"v":[],"cN":[],"a1":[]},"fv":{"ai":[],"v":[]},"kA":{"cN":[]},"fu":{"ai":[],"va":[],"v":[],"a1":[]},"dW":{"b0":["1"],"ai":[],"v":[],"aF":["1"]},"cp":{"y":["Y"],"t":["Y"],"b0":["Y"],"ai":[],"x":["Y"],"v":[],"aF":["Y"],"n":["Y"]},"b5":{"y":["c"],"t":["c"],"b0":["c"],"ai":[],"x":["c"],"v":[],"aF":["c"],"n":["c"]},"iK":{"cp":[],"mN":[],"y":["Y"],"t":["Y"],"b0":["Y"],"ai":[],"x":["Y"],"v":[],"aF":["Y"],"n":["Y"],"a1":[],"y.E":"Y"},"iL":{"cp":[],"mO":[],"y":["Y"],"t":["Y"],"b0":["Y"],"ai":[],"x":["Y"],"v":[],"aF":["Y"],"n":["Y"],"a1":[],"y.E":"Y"},"iM":{"b5":[],"nr":[],"y":["c"],"t":["c"],"b0":["c"],"ai":[],"x":["c"],"v":[],"aF":["c"],"n":["c"],"a1":[],"y.E":"c"},"iN":{"b5":[],"ns":[],"y":["c"],"t":["c"],"b0":["c"],"ai":[],"x":["c"],"v":[],"aF":["c"],"n":["c"],"a1":[],"y.E":"c"},"iO":{"b5":[],"nt":[],"y":["c"],"t":["c"],"b0":["c"],"ai":[],"x":["c"],"v":[],"aF":["c"],"n":["c"],"a1":[],"y.E":"c"},"iP":{"b5":[],"ps":[],"y":["c"],"t":["c"],"b0":["c"],"ai":[],"x":["c"],"v":[],"aF":["c"],"n":["c"],"a1":[],"y.E":"c"},"fw":{"b5":[],"pt":[],"y":["c"],"t":["c"],"b0":["c"],"ai":[],"x":["c"],"v":[],"aF":["c"],"n":["c"],"a1":[],"y.E":"c"},"fx":{"b5":[],"pu":[],"y":["c"],"t":["c"],"b0":["c"],"ai":[],"x":["c"],"v":[],"aF":["c"],"n":["c"],"a1":[],"y.E":"c"},"d2":{"b5":[],"bh":[],"y":["c"],"t":["c"],"b0":["c"],"ai":[],"x":["c"],"v":[],"aF":["c"],"n":["c"],"a1":[],"y.E":"c"},"jT":{"W":[]},"hw":{"c4":[],"W":[]},"a2":{"W":[]},"l":{"o":["1"]},"bZ":{"bH":["1"],"aj":["1"]},"bH":{"aj":["1"]},"aw":{"ae":["1"],"aw.T":"1"},"h_":{"cV":["1"]},"eC":{"n":["1"],"n.E":"1"},"aq":{"a4":["1"],"eB":["1"],"C":["1"],"C.T":"1"},"di":{"cz":["1"],"aw":["1"],"ae":["1"],"aw.T":"1"},"c9":{"bH":["1"],"aj":["1"]},"ds":{"c9":["1"],"bH":["1"],"aj":["1"]},"h0":{"c9":["1"],"bH":["1"],"aj":["1"]},"dX":{"W":[]},"dj":{"cV":["1"]},"aa":{"dj":["1"],"cV":["1"]},"N":{"dj":["1"],"cV":["1"]},"fI":{"C":["1"]},"cA":{"bH":["1"],"aj":["1"]},"bL":{"cA":["1"],"bH":["1"],"aj":["1"]},"cC":{"cA":["1"],"bH":["1"],"aj":["1"]},"a4":{"eB":["1"],"C":["1"],"C.T":"1"},"cz":{"aw":["1"],"ae":["1"],"aw.T":"1"},"eB":{"C":["1"]},"en":{"ae":["1"]},"dm":{"C":["1"],"C.T":"1"},"bz":{"C":["1"],"C.T":"1"},"hg":{"bL":["1"],"cA":["1"],"bZ":["1"],"bH":["1"],"aj":["1"]},"b9":{"C":["2"]},"er":{"aw":["2"],"ae":["2"],"aw.T":"2"},"ce":{"b9":["1","1"],"C":["1"],"C.T":"1","b9.T":"1","b9.S":"1"},"aL":{"b9":["1","2"],"C":["2"],"C.T":"2","b9.T":"2","b9.S":"1"},"h9":{"aj":["1"]},"ez":{"aw":["2"],"ae":["2"],"aw.T":"2"},"c8":{"C":["2"],"C.T":"2"},"kD":{"A":[]},"jQ":{"A":[]},"km":{"A":[]},"eG":{"a9":[]},"cb":{"G":["1","2"],"a_":["1","2"],"G.V":"2","G.K":"1"},"dp":{"cb":["1","2"],"G":["1","2"],"a_":["1","2"],"G.V":"2","G.K":"1"},"h4":{"cb":["1","2"],"G":["1","2"],"a_":["1","2"],"G.V":"2","G.K":"1"},"hb":{"x":["1"],"n":["1"],"n.E":"1"},"hf":{"b1":["1","2"],"G":["1","2"],"a_":["1","2"],"G.V":"2","G.K":"1"},"cc":{"ct":["1"],"bu":["1"],"x":["1"],"n":["1"]},"d0":{"n":["1"],"n.E":"1"},"y":{"t":["1"],"x":["1"],"n":["1"]},"G":{"a_":["1","2"]},"fr":{"a_":["1","2"]},"de":{"fr":["1","2"],"kz":["1","2"],"a_":["1","2"]},"fp":{"X":["1"],"x":["1"],"n":["1"],"X.E":"1","n.E":"1"},"ct":{"bu":["1"],"x":["1"],"n":["1"]},"hs":{"ct":["1"],"bu":["1"],"x":["1"],"n":["1"]},"dk":{"aj":["1"]},"et":{"aj":["j"]},"k1":{"G":["j","@"],"a_":["j","@"],"G.V":"@","G.K":"j"},"k2":{"X":["j"],"x":["j"],"n":["j"],"X.E":"j","n.E":"j"},"hS":{"cX":[]},"ky":{"ah":["j","t<c>"]},"hU":{"ah":["j","t<c>"],"ah.T":"t<c>"},"kx":{"ah":["t<c>","j"]},"hT":{"ah":["t<c>","j"],"ah.T":"j"},"hY":{"ah":["t<c>","j"],"ah.T":"j"},"fn":{"W":[]},"iB":{"W":[]},"iD":{"ah":["k?","j"],"ah.T":"j"},"iC":{"ah":["j","k?"],"ah.T":"k?"},"iE":{"cX":[]},"iG":{"ah":["j","t<c>"],"ah.T":"t<c>"},"iF":{"ah":["t<c>","j"],"ah.T":"j"},"jw":{"cX":[]},"jy":{"ah":["j","t<c>"],"ah.T":"t<c>"},"jx":{"ah":["t<c>","j"],"ah.T":"j"},"wu":{"a7":["wu"]},"bT":{"a7":["bT"]},"Y":{"a7":["bQ"]},"aZ":{"a7":["aZ"]},"c":{"a7":["bQ"]},"t":{"x":["1"],"n":["1"]},"bQ":{"a7":["bQ"]},"j0":{"d1":[]},"bu":{"x":["1"],"n":["1"]},"j":{"a7":["j"]},"aA":{"a7":["wu"]},"hV":{"W":[]},"c4":{"W":[]},"a3":{"W":[]},"e_":{"W":[]},"fi":{"W":[]},"fQ":{"W":[]},"jo":{"W":[]},"aV":{"W":[]},"ia":{"W":[]},"iU":{"W":[]},"fF":{"W":[]},"jU":{"O":[]},"aT":{"O":[]},"iv":{"O":[],"W":[]},"kt":{"ad":[]},"hC":{"ju":[]},"bk":{"ju":[]},"jR":{"ju":[]},"iS":{"O":[]},"U":{"a_":["2","3"]},"d8":{"eD":["1","bu<1>"],"eD.E":"1"},"cs":{"O":[]},"hZ":{"lJ":[]},"i3":{"lJ":[]},"cO":{"C":["t<c>"],"C.T":"t<c>"},"bR":{"O":[]},"jk":{"cv":[]},"eY":{"U":["j","j","1"],"a_":["j","1"],"U.K":"j","U.V":"1","U.C":"j"},"cn":{"a7":["cn"]},"iW":{"O":[]},"db":{"O":[]},"f4":{"O":[]},"dY":{"O":[]},"cY":{"dO":[]},"bf":{"J":[]},"dF":{"O":[]},"hl":{"ca":[]},"eh":{"ca":[]},"h7":{"ca":[]},"fq":{"b7":[],"as":[]},"dL":{"as":[]},"fR":{"b7":[],"as":[]},"fc":{"b7":[],"as":[]},"dG":{"as":[]},"f8":{"b7":[],"as":[]},"f_":{"b7":[],"as":[]},"fg":{"b7":[],"as":[]},"fP":{"b7":[],"as":[]},"eg":{"aj":["t<c>"]},"cr":{"aS":[]},"dI":{"aS":[]},"fT":{"aS":[]},"fO":{"aS":[]},"ff":{"aS":[]},"f0":{"aS":[]},"e0":{"lJ":[]},"fY":{"bO":[]},"hr":{"bO":[]},"h6":{"bO":[]},"h3":{"bO":[]},"i7":{"O":[]},"iq":{"bv":[],"a7":["bv"]},"eq":{"c2":[],"a7":["jc"]},"bv":{"a7":["bv"]},"jb":{"bv":[],"a7":["bv"]},"jc":{"a7":["jc"]},"jd":{"a7":["jc"]},"je":{"O":[]},"e3":{"aT":[],"O":[]},"e4":{"a7":["jc"]},"c2":{"a7":["jc"]},"d9":{"O":[]},"e6":{"cT":[]},"is":{"aC":[]},"jZ":{"fV":[],"aO":[]},"bG":{"y":["aU"],"t":["aU"],"x":["aU"],"n":["aU"],"y.E":"aU"},"aU":{"jr":["j","@"],"G":["j","@"],"a_":["j","@"],"G.V":"@","G.K":"j"},"c6":{"O":[]},"i1":{"aC":[]},"i0":{"fV":[],"aO":[]},"dh":{"aH":["dh"],"aH.E":"dh"},"ec":{"y":["cw"],"t":["cw"],"x":["cw"],"n":["cw"],"y.E":"cw"},"eV":{"C":["1"],"C.T":"1"},"ck":{"aC":[]},"aE":{"aH":["aE"]},"k_":{"fV":[],"aO":[]},"ha":{"aE":[],"aH":["aE"],"aH.E":"aE"},"h5":{"aE":[],"aH":["aE"],"aH.E":"aE"},"el":{"aE":[],"aH":["aE"],"aH.E":"aE"},"eF":{"aE":[],"aH":["aE"],"aH.E":"aE"},"e2":{"aC":[]},"kp":{"fV":[],"aO":[]},"eZ":{"O":[]},"j2":{"wC":[]},"ci":{"y":["k?"],"t":["k?"],"x":["k?"],"n":["k?"],"y.E":"k?"},"bq":{"O":[]},"d5":{"O":[]},"ei":{"wz":[]},"iI":{"W":[]},"jg":{"aJ":[],"aB":[]},"jh":{"aJ":[],"aB":[]},"bC":{"O":[]},"js":{"aB":[]},"fB":{"aB":[]},"fC":{"aJ":[],"aB":[]},"aJ":{"aB":[]},"jf":{"aJ":[],"aB":[]},"cd":{"aB":[]},"jz":{"vA":[],"aJ":[],"aB":[]},"hX":{"cx":[]},"jm":{"aT":[],"O":[]},"bg":{"e8":["c"],"y":["c"],"t":["c"],"x":["c"],"n":["c"],"y.E":"c"},"e8":{"y":["1"],"t":["1"],"x":["1"],"n":["1"]},"k0":{"e8":["c"],"y":["c"],"t":["c"],"x":["c"],"n":["c"]},"eo":{"C":["1"],"C.T":"1"},"ep":{"ae":["1"]},"nt":{"t":["c"],"x":["c"],"n":["c"]},"bh":{"t":["c"],"x":["c"],"n":["c"]},"pu":{"t":["c"],"x":["c"],"n":["c"]},"nr":{"t":["c"],"x":["c"],"n":["c"]},"ps":{"t":["c"],"x":["c"],"n":["c"]},"ns":{"t":["c"],"x":["c"],"n":["c"]},"pt":{"t":["c"],"x":["c"],"n":["c"]},"mN":{"t":["Y"],"x":["Y"],"n":["Y"]},"mO":{"t":["Y"],"x":["Y"],"n":["Y"]},"vA":{"aJ":[],"aB":[]}}'))
A.Co(v.typeUniverse,JSON.parse('{"ee":1,"j8":1,"ih":1,"iR":1,"fe":1,"jq":1,"e9":1,"hF":2,"f2":1,"d_":1,"b3":1,"dW":1,"aj":1,"ku":1,"dX":2,"fI":1,"jj":2,"kv":1,"jI":1,"fZ":1,"kr":1,"jS":1,"bx":1,"ex":1,"bP":1,"h9":1,"kq":2,"hs":1,"hB":2,"dk":2,"i8":1,"i9":2,"hv":1,"im":1,"fU":1,"f7":1,"iQ":1,"ft":1,"zS":1}'))
var u={S:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",D:" must not be greater than the number of characters in the file, ",U:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l:"Applying checkpoint is blocked on local mutations, but no uploader is set. The sync client cannot proceed.",t:"Broadcast stream controllers do not support pause callbacks",O:"Cannot change the length of a fixed-length list",A:"Cannot extract a file path from a URI with a fragment component",z:"Cannot extract a file path from a URI with a query component",Q:"Cannot extract a non-Windows file path from a file URI with an authority",c:"Cannot fire new event. Controller is already firing an event",w:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",B:"SELECT seq FROM main.sqlite_sequence WHERE name = 'ps_crud'",f:"Tried to operate on a released prepared statement",y:"handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",E:"max must be in range 0 < max \u2264 2^32, was "}
var t=(function rtii(){var s=A.am
return{fM:s("@<@>"),fN:s("bq"),ie:s("zS<k?>"),om:s("eV<w<k?>>"),lo:s("cN"),fW:s("va"),kj:s("eY<j>"),eg:s("wz"),dF:s("lJ()"),V:s("br"),fw:s("cT"),bP:s("a7<@>"),p6:s("cU"),br:s("cV<v>"),kn:s("cV<k?>"),A:s("cV<~>"),hM:s("ch"),em:s("dJ"),kS:s("wC"),lp:s("ie"),O:s("x<@>"),C:s("W"),L:s("O"),eZ:s("io"),pk:s("mN"),kI:s("mO"),lW:s("aT"),gY:s("F0"),nW:s("o<v>"),mj:s("o<E>"),nK:s("o<+(k?,w<k?>?)>"),fP:s("o<bV?>"),cI:s("o<j?>"),jN:s("o<eb?>"),p8:s("o<~>"),cF:s("ck"),m6:s("nr"),bW:s("ns"),g2:s("dO"),jx:s("nt"),ks:s("n<as>"),e7:s("n<@>"),en:s("w<o<@>>"),M:s("w<o<~>>"),kG:s("w<v>"),dO:s("w<t<k?>>"),hf:s("w<k>"),fU:s("w<+controller,sync(bZ<b8>,H)>"),lw:s("w<+controller,sync(bZ<~>,H)>"),kC:s("w<+(cu,j)>"),iE:s("w<+(j,k?)>"),bN:s("w<+name,parameters(j,j)>"),cH:s("w<+hasSynced,lastSyncedAt,priority(H?,bT?,c)>"),lE:s("w<e6>"),a6:s("w<ae<J>>"),bO:s("w<ae<~>>"),fu:s("w<C<aS>>"),i3:s("w<C<~>>"),s:s("w<j>"),az:s("w<ei>"),ba:s("w<ej>"),dB:s("w<bN<@>>"),g7:s("w<aP>"),dg:s("w<by>"),o6:s("w<k6>"),jI:s("w<dt>"),gk:s("w<Y>"),dG:s("w<@>"),t:s("w<c>"),b9:s("w<a2?>"),c:s("w<k?>"),mf:s("w<j?>"),iy:s("aF<@>"),v:s("dP"),m:s("v"),bJ:s("aQ"),g:s("b_"),dX:s("b0<@>"),d9:s("ai"),kk:s("d0<dh>"),p3:s("d0<aE>"),mu:s("t<w<k?>>"),ip:s("t<v>"),eL:s("t<+name,parameters(j,j)>"),k:s("t<j>"),j:s("t<@>"),f4:s("t<c>"),ia:s("t<k?>"),fi:s("t<j?>"),ag:s("dS"),W:s("dT"),gc:s("M<j,j>"),lx:s("M<j,+atLast,priority,sinceLast,targetCount(c,c,c,c)>"),ea:s("a_<j,@>"),dV:s("a_<j,c>"),av:s("a_<@,@>"),f:s("a_<j,k?>"),iZ:s("a8<j,@>"),eK:s("a8<+(j,k?),j>"),jC:s("F4"),a:s("bF"),dQ:s("cp"),aj:s("b5"),Z:s("d2"),Y:s("b7"),bC:s("fy<o<~>>"),P:s("E"),K:s("k"),lZ:s("F7"),aK:s("+()"),U:s("+immediateRestart(H)"),ja:s("+(v,dH)"),iS:s("+(v,E)"),lg:s("+(E,E)"),k0:s("+(k,E)"),cU:s("+(cu,j)"),E:s("+name,parameters(j,j)"),l4:s("+(af,k)"),mk:s("+(H,v)"),kO:s("+basicSupport,supportsReadWriteUnsafe(H,H)"),mt:s("+(v?,v)"),jc:s("+(bF?,w<k?>?)"),iu:s("+(k?,w<k?>?)"),ii:s("+autocommit,lastInsertRowid,result(H,c,bG)"),cV:s("+atLast,priority,sinceLast,targetCount(c,c,c,c)"),lu:s("j0"),b:s("e1"),G:s("bG"),hF:s("d7<j>"),oy:s("aU"),g_:s("e2"),hq:s("bv"),ol:s("c2"),e1:s("b8"),l:s("ad"),ao:s("bH<J>"),a9:s("fH<bO>"),ha:s("ae<b8>"),ey:s("ae<~>"),ir:s("C<bO>"),n:s("cv"),N:s("j"),of:s("a0"),o:s("aS"),jM:s("db"),mO:s("e7"),k4:s("aK"),hU:s("fN"),aJ:s("a1"),do:s("c4"),i7:s("ps"),mC:s("pt"),oR:s("bg"),nn:s("pu"),p:s("bh"),cx:s("dd"),ph:s("de<j,j>"),d:s("J"),R:s("ju"),e6:s("aC"),j2:s("fV"),w:s("eb"),m1:s("vA"),lS:s("fW<j>"),u:s("cx"),iq:s("aa<bh>"),ho:s("aa<c>"),if:s("aa<ch?>"),mE:s("aa<k?>"),h:s("aa<~>"),it:s("c8<@,j>"),jB:s("c8<@,bh>"),hi:s("ca"),fK:s("ek"),Q:s("dl<v>"),hV:s("dm<J>"),d4:s("eo<v>"),nI:s("l<fh>"),fV:s("l<bV>"),a7:s("l<v>"),e:s("l<0&>"),jz:s("l<bh>"),B:s("l<H>"),_:s("l<@>"),hy:s("l<c>"),iB:s("l<ch?>"),ny:s("l<k?>"),D:s("l<~>"),nf:s("aP"),mp:s("dp<k?,k?>"),fA:s("ev"),fb:s("bz<t<c>>"),cn:s("bz<bu<j>>"),pp:s("bO"),jy:s("cB<b8,~()>"),af:s("cB<~,H()>"),lU:s("cB<~,~()>"),aP:s("N<fh>"),l6:s("N<bV>"),h1:s("N<v>"),ex:s("N<H>"),gW:s("N<k?>"),F:s("N<~>"),y:s("H"),i:s("Y"),z:s("@"),mq:s("@(k)"),ng:s("@(k,ad)"),S:s("c"),gO:s("ch?"),d_:s("f5?"),gK:s("o<E>?"),m2:s("o<~>?"),b3:s("bV?"),fo:s("dO?"),mU:s("v?"),h9:s("a_<j,k?>?"),aC:s("bF?"),X:s("k?"),J:s("cq?"),x:s("aU?"),mQ:s("ae<bO>?"),T:s("j?"),a_:s("bg?"),he:s("eb?"),dd:s("aP?"),o9:s("H?"),jX:s("Y?"),I:s("c?"),jh:s("bQ?"),q:s("bQ"),H:s("~"),cj:s("~()"),i6:s("~(k)"),r:s("~(k,ad)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.bk=J.iw.prototype
B.c=J.w.prototype
B.b=J.fk.prototype
B.ab=J.dP.prototype
B.ac=J.dQ.prototype
B.a=J.cl.prototype
B.bl=J.b_.prototype
B.bm=J.ai.prototype
B.ag=A.fu.prototype
B.M=A.fw.prototype
B.f=A.d2.prototype
B.ah=J.iX.prototype
B.a_=J.dd.prototype
B.B=new A.bq("Operation was cancelled",null)
B.a1=new A.hT(!1,127)
B.aK=new A.hU(127)
B.b3=new A.dm(A.am("dm<t<c>>"))
B.aL=new A.cO(B.b3)
B.aM=new A.fj(A.EA(),A.am("fj<c>"))
B.cc=new A.hY()
B.aN=new A.lf()
B.aO=new A.i7()
B.aP=new A.f_()
B.C=new A.f7()
B.aQ=new A.f8()
B.a2=new A.ih()
B.aR=new A.iv()
B.a3=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.aS=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.aX=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.aT=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.aW=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.aV=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.aU=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.a4=function(hooks) { return hooks; }

B.h=new A.nz()
B.k=new A.iE()
B.r=new A.fo()
B.aY=new A.nA()
B.y=new A.iJ(A.am("iJ<j,@>"))
B.aZ=new A.iU()
B.e=new A.om()
B.b0=new A.d8(A.am("d8<j>"))
B.b_=new A.d8(A.am("d8<+name,parameters(j,j)>"))
B.b1=new A.fO()
B.a5=new A.fT()
B.l=new A.jw()
B.o=new A.jy()
B.b2=new A.re()
B.z=new A.rg()
B.a6=new A.h7()
B.b4=new A.rO()
B.D=new A.hl()
B.d=new A.km()
B.t=new A.kt()
B.b5=new A.tE()
B.b6=new A.tF()
B.b7=new A.dF("The PowerSync service does not support checkpoint requests. Update to PowerSync service version 1.24.0 or later to use this API.")
B.A=new A.dF("Cannot request checkpoints, sync client is disconnected")
B.b8=new A.dF("Connected with legacy checkpoint mode, cannot request checkpoints")
B.b9=new A.dI(0,"established")
B.ba=new A.dI(1,"end")
B.E=new A.bS(3,"updateSubscriptionManagement")
B.F=new A.bS(4,"notifyUpdates")
B.a7=new A.aZ(0)
B.G=new A.aZ(1e4)
B.u=new A.aZ(5e6)
B.H=new A.cj("x",1,"opfsExternalLocks")
B.a8=new A.cj("y",2,"opfsExternalLocksWorkaround")
B.a9=new A.dM("/database",0,"database")
B.aa=new A.dM("/database-journal",1,"journal")
B.bn=new A.iC(null)
B.bo=new A.iD(null)
B.ad=new A.iF(!1,255)
B.bp=new A.iG(255)
B.p=new A.cn("FINE",500)
B.m=new A.cn("INFO",800)
B.i=new A.cn("WARNING",900)
B.O=new A.af(0,"ping")
B.aq=new A.af(1,"startSynchronization")
B.aA=new A.af(2,"updateSubscriptions")
B.aB=new A.af(3,"abortSynchronization")
B.Q=new A.af(4,"requestEndpoint")
B.R=new A.af(5,"uploadCrud")
B.aC=new A.af(6,"customCheckpointRequest")
B.aD=new A.af(7,"requestCheckpoint")
B.S=new A.af(8,"invalidCredentialsCallback")
B.T=new A.af(9,"credentialsCallback")
B.P=new A.af(10,"prefetchCredentialsCallback")
B.ar=new A.af(11,"abortRequest")
B.as=new A.af(12,"notifySyncStatus")
B.at=new A.af(13,"handleDiagnostics")
B.au=new A.af(14,"logEvent")
B.av=new A.af(15,"sendHttpRequest")
B.aw=new A.af(16,"abortHttpRequest")
B.ax=new A.af(17,"readResponseChunk")
B.ay=new A.af(18,"okResponse")
B.az=new A.af(19,"errorResponse")
B.bq=s([B.O,B.aq,B.aA,B.aB,B.Q,B.R,B.aC,B.aD,B.S,B.T,B.P,B.ar,B.as,B.at,B.au,B.av,B.aw,B.ax,B.ay,B.az],A.am("w<af>"))
B.br=s([239,191,189],t.t)
B.x=new A.bw(0,"unknown")
B.U=new A.bw(1,"integer")
B.V=new A.bw(2,"bigInt")
B.W=new A.bw(3,"float")
B.X=new A.bw(4,"text")
B.Y=new A.bw(5,"blob")
B.Z=new A.bw(6,"$null")
B.aE=new A.bw(7,"boolean")
B.I=s([B.x,B.U,B.V,B.W,B.X,B.Y,B.Z,B.aE],A.am("w<bw>"))
B.bs=s([65533],t.t)
B.bi=new A.fd(0,"database")
B.bj=new A.fd(1,"journal")
B.ae=s([B.bi,B.bj],A.am("w<fd>"))
B.bh=new A.cj("s",0,"opfsShared")
B.bf=new A.cj("i",3,"indexedDb")
B.bg=new A.cj("m",4,"inMemory")
B.bt=s([B.bh,B.H,B.a8,B.bf,B.bg],A.am("w<cj>"))
B.bb=new A.bS(0,"ok")
B.bc=new A.bS(1,"getAutoCommit")
B.bd=new A.bS(2,"executeBatch")
B.be=new A.bS(5,"installBroadcastUpdates")
B.af=s([B.bb,B.bc,B.bd,B.E,B.F,B.be],A.am("w<bS>"))
B.ak=new A.e5(0,"insert")
B.al=new A.e5(1,"update")
B.am=new A.e5(2,"delete")
B.bu=s([B.ak,B.al,B.am],A.am("w<e5>"))
B.J=s([],t.s)
B.bw=s([],t.t)
B.n=s([],t.c)
B.bv=s([],t.bN)
B.bx=s([B.a9,B.aa],A.am("w<dM>"))
B.an=new A.cu(0,"opfs")
B.ao=new A.cu(1,"indexedDb")
B.bG=new A.cu(2,"inMemory")
B.by=s([B.an,B.ao,B.bG],A.am("w<cu>"))
B.bD={"iso_8859-1:1987":0,"iso-ir-100":1,"iso_8859-1":2,"iso-8859-1":3,latin1:4,l1:5,ibm819:6,cp819:7,csisolatin1:8,"iso-ir-6":9,"ansi_x3.4-1968":10,"ansi_x3.4-1986":11,"iso_646.irv:1991":12,"iso646-us":13,"us-ascii":14,us:15,ibm367:16,cp367:17,csascii:18,ascii:19,csutf8:20,"utf-8":21}
B.j=new A.hS()
B.bz=new A.aY(B.bD,[B.k,B.k,B.k,B.k,B.k,B.k,B.k,B.k,B.k,B.j,B.j,B.j,B.j,B.j,B.j,B.j,B.j,B.j,B.j,B.j,B.l,B.l],A.am("aY<j,cX>"))
B.v={}
B.L=new A.aY(B.v,[],A.am("aY<j,j>"))
B.bA=new A.aY(B.v,[],A.am("aY<j,c>"))
B.K=new A.aY(B.v,[],A.am("aY<j,@>"))
B.q=new A.ft(11,"simpleSuccessResponse")
B.bC=new A.ft(13,"rowsResponse")
B.cd=new A.nR(2,"readWriteCreate")
B.ai=new A.hn(!1)
B.aj=new A.Q(null,null)
B.N=new A.ho(!1,!1)
B.bE=new A.hq("BEGIN IMMEDIATE","COMMIT","ROLLBACK")
B.bF=new A.f3(B.v,0,A.am("f3<j>"))
B.bH=new A.fK("_clientToken")
B.w=new A.fK("reset")
B.ap=new A.p3(0,"rust")
B.bI=A.bp("cN")
B.bJ=A.bp("va")
B.bK=A.bp("mN")
B.bL=A.bp("mO")
B.bM=A.bp("nr")
B.bN=A.bp("ns")
B.bO=A.bp("nt")
B.bP=A.bp("v")
B.bQ=A.bp("k")
B.bR=A.bp("ps")
B.bS=A.bp("pt")
B.bT=A.bp("pu")
B.bU=A.bp("bh")
B.bV=new A.fS("DELETE",2,"delete")
B.bW=new A.fS("PATCH",1,"patch")
B.bX=new A.fS("PUT",0,"put")
B.aF=new A.jx(!1)
B.bY=new A.c6(14)
B.bZ=new A.c6(522)
B.c_=new A.c6(778)
B.aG=new A.eA("canceled")
B.aH=new A.eA("dormant")
B.aI=new A.eA("listening")
B.aJ=new A.eA("paused")
B.c0=new A.tG(B.d,A.DP())
B.c1=new A.tH(B.d,A.DQ())
B.c2=new A.tI(B.d,A.DR())
B.c3=new A.kE(B.d,A.DS())
B.c4=new A.tJ(B.d,A.DT())
B.c5=new A.tK(B.d,A.DU())
B.c6=new A.tL(B.d,A.DV())
B.c7=new A.tM(B.d,A.DW())
B.c8=new A.tO(B.d,A.DY())
B.c9=new A.tP(B.d,A.DZ())
B.ca=new A.tN(B.d,A.DX())
B.cb=new A.kF(B.d,A.E_())
B.bB=new A.aY(B.v,[],A.am("aY<k?,k?>"))
B.a0=new A.kG(B.d,B.bB)})();(function staticFields(){$.rQ=null
$.dw=A.u([],t.hf)
$.Dm=null
$.x_=null
$.wx=null
$.ww=null
$.yK=null
$.yD=null
$.yU=null
$.uu=null
$.uG=null
$.wb=null
$.t2=A.u([],A.am("w<t<k>?>"))
$.eL=null
$.hH=null
$.hI=null
$.w1=!1
$.m=B.d
$.t4=null
$.xv=null
$.xw=null
$.xx=null
$.xy=null
$.vD=A.qP("_lastQuoRemDigits")
$.vE=A.qP("_lastQuoRemUsed")
$.h1=A.qP("_lastRemUsed")
$.vF=A.qP("_lastRem_nsh")
$.xq=""
$.xr=null
$.eK=0
$.eH=A.T(t.N,t.S)
$.wT=0
$.AK=A.T(t.N,t.W)
$.ye=null
$.tZ=null})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"EZ","z6",()=>A.uy("_$dart_dartClosure"))
s($,"EY","dB",()=>A.uy("_$dart_dartClosure_dartJSInterop"))
s($,"FX","zC",()=>B.d.bv(new A.uT(),t.p8))
s($,"FQ","zz",()=>A.u([new J.ix()],A.am("w<fA>")))
s($,"Ff","za",()=>A.c5(A.pr({
toString:function(){return"$receiver$"}})))
s($,"Fg","zb",()=>A.c5(A.pr({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"Fh","zc",()=>A.c5(A.pr(null)))
s($,"Fi","zd",()=>A.c5(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Fl","zg",()=>A.c5(A.pr(void 0)))
s($,"Fm","zh",()=>A.c5(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"Fk","zf",()=>A.c5(A.xn(null)))
s($,"Fj","ze",()=>A.c5(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"Fo","zj",()=>A.c5(A.xn(void 0)))
s($,"Fn","zi",()=>A.c5(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"Fr","wi",()=>A.BA())
s($,"F2","cJ",()=>$.zC())
s($,"F1","z7",()=>A.BT(!1,B.d,t.y))
s($,"FB","zp",()=>A.AP(4096))
s($,"Fz","zn",()=>new A.tB().$0())
s($,"FA","zo",()=>new A.tA().$0())
s($,"Fs","zk",()=>A.AN(A.vY(A.u([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"Fx","cg",()=>A.qG(0))
s($,"Fw","kW",()=>A.qG(1))
s($,"Fu","wk",()=>$.kW().bz(0))
s($,"Ft","wj",()=>A.qG(1e4))
r($,"Fv","zl",()=>A.au("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1))
s($,"Fy","zm",()=>typeof FinalizationRegistry=="function"?FinalizationRegistry:null)
s($,"FE","eT",()=>A.kS(B.bQ))
r($,"FL","kX",()=>new A.u5().$0())
r($,"FI","zu",()=>new A.u3().$0())
s($,"FH","zt",()=>Symbol("jsBoxedDartObjectProperty"))
s($,"F6","z8",()=>{var q=new A.rP(A.AL(8))
q.l3()
return q})
s($,"EW","z5",()=>A.au("^[\\w!#%&'*+\\-.^`|~]+$",!0))
s($,"FD","zq",()=>A.au('["\\x00-\\x1F\\x7F]',!0))
s($,"FY","zD",()=>A.au('[^()<>@,;:"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+',!0))
s($,"FK","zv",()=>A.au("(?:\\r\\n)?[ \\t]+",!0))
s($,"FN","zx",()=>A.au('"(?:[^"\\x00-\\x1F\\x7F\\\\]|\\\\.)*"',!0))
s($,"FM","zw",()=>A.au("\\\\(.)",!0))
s($,"FW","zB",()=>A.au('[()<>@,;:"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]',!0))
s($,"FZ","zE",()=>A.au("(?:"+$.zv().a+")*",!0))
s($,"F3","v7",()=>A.vp(""))
s($,"FU","wm",()=>new A.m_($.wg()))
s($,"Fc","z9",()=>new A.nT(A.au("/",!0),A.au("[^/]$",!0),A.au("^/",!0)))
s($,"Fe","kV",()=>new A.q7(A.au("[/\\\\]",!0),A.au("[^/\\\\]$",!0),A.au("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])",!0),A.au("^[/\\\\](?![/\\\\])",!0)))
s($,"Fd","hM",()=>new A.pE(A.au("/",!0),A.au("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$",!0),A.au("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*",!0),A.au("^/",!0)))
s($,"Fb","wg",()=>A.Bg())
s($,"FT","wl",()=>A.Dg())
s($,"FJ","cK",()=>$.wl())
s($,"FG","zs",()=>A.wO(A.yL(),"SharedWorkerGlobalScope"))
s($,"FF","zr",()=>A.wO(A.yL(),"DedicatedWorkerGlobalScope"))
s($,"EX","kU",()=>$.z8())
s($,"Fp","wh",()=>new A.im(new WeakMap()))
s($,"FR","zA",()=>A.AI(A.u([A.vv("files"),A.vv("blocks")],t.s)))
s($,"F_","v6",()=>{var q,p,o=A.T(t.N,A.am("dM"))
for(q=0;q<2;++q){p=B.bx[q]
o.l(0,p.c,p)}return o})
s($,"FO","zy",()=>A.AY())
r($,"Fq","hN",()=>{var q="navigator"
return A.AA(A.AB(A.uA(A.yX(),q),A.vv("locks")))?A.uA(A.uA(A.yX(),q),"locks"):null})})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({SharedArrayBuffer:A.dV,ArrayBuffer:A.bF,ArrayBufferView:A.fv,DataView:A.fu,Float32Array:A.iK,Float64Array:A.iL,Int16Array:A.iM,Int32Array:A.iN,Int8Array:A.iO,Uint16Array:A.iP,Uint32Array:A.fw,Uint8ClampedArray:A.fx,CanvasPixelArray:A.fx,Uint8Array:A.d2})
hunkHelpers.setOrUpdateLeafTags({SharedArrayBuffer:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.dW.$nativeSuperclassTag="ArrayBufferView"
A.hh.$nativeSuperclassTag="ArrayBufferView"
A.hi.$nativeSuperclassTag="ArrayBufferView"
A.cp.$nativeSuperclassTag="ArrayBufferView"
A.hj.$nativeSuperclassTag="ArrayBufferView"
A.hk.$nativeSuperclassTag="ArrayBufferView"
A.b5.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$3$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$2$2=function(a,b){return this(a,b)}
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$2$1=function(a){return this(a)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$3$1=function(a){return this(a)}
Function.prototype.$1$2=function(a,b){return this(a,b)}
Function.prototype.$2$0=function(){return this()}
Function.prototype.$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
Function.prototype.$3$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$2$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$1$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$3$6=function(a,b,c,d,e,f){return this(a,b,c,d,e,f)}
Function.prototype.$2$5=function(a,b,c,d,e){return this(a,b,c,d,e)}
Function.prototype.$2$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$1$0=function(){return this()}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.Ey
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=powersync_db.worker.js.map
