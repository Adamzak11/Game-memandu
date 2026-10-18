(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xa="170",Gc=0,xo=1,Hc=2,Bl=1,Gl=2,gn=3,Bn=0,Te=1,Ge=2,Fn=0,yi=1,Mo=2,So=3,yo=4,Vc=5,Zn=100,Wc=101,Xc=102,Yc=103,qc=104,jc=200,Kc=201,$c=202,Jc=203,Zr=204,Qr=205,Zc=206,Qc=207,th=208,eh=209,nh=210,ih=211,sh=212,rh=213,ah=214,ta=0,ea=1,na=2,Ti=3,ia=4,sa=5,ra=6,aa=7,Ya=0,oh=1,lh=2,zn=0,ch=1,hh=2,uh=3,dh=4,fh=5,ph=6,mh=7,Hl=300,Ai=301,Ri=302,oa=303,la=304,nr=306,rs=1e3,ti=1001,ca=1002,Ue=1003,gh=1004,ms=1005,nn=1006,lr=1007,ei=1008,Sn=1009,Vl=1010,Wl=1011,as=1012,qa=1013,ni=1014,sn=1015,ls=1016,ja=1017,Ka=1018,Ci=1020,Xl=35902,Yl=1021,ql=1022,Je=1023,jl=1024,Kl=1025,Ei=1026,Pi=1027,$a=1028,Ja=1029,$l=1030,Za=1031,Qa=1033,Vs=33776,Ws=33777,Xs=33778,Ys=33779,ha=35840,ua=35841,da=35842,fa=35843,pa=36196,ma=37492,ga=37496,_a=37808,va=37809,xa=37810,Ma=37811,Sa=37812,ya=37813,Ea=37814,ba=37815,wa=37816,Ta=37817,Aa=37818,Ra=37819,Ca=37820,Pa=37821,qs=36492,La=36494,Ia=36495,Jl=36283,Na=36284,Da=36285,Ua=36286,_h=3200,vh=3201,Zl=0,xh=1,Un="",pe="srgb",Ui="srgb-linear",ir="linear",ee="srgb",ai=7680,Eo=519,Mh=512,Sh=513,yh=514,Ql=515,Eh=516,bh=517,wh=518,Th=519,bo=35044,wo="300 es",vn=2e3,$s=2001;class ki{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cr=Math.PI/180,ka=180/Math.PI;function cs(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Se[s&255]+Se[s>>8&255]+Se[s>>16&255]+Se[s>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]).toLowerCase()}function xe(s,t,e){return Math.max(t,Math.min(e,s))}function Ah(s,t){return(s%t+t)%t}function hr(s,t,e){return(1-e)*s+e*t}function Hi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ce(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class vt{constructor(t=0,e=0){vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,i,r,a,o,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],x=i[1],E=i[4],M=i[7],L=i[2],A=i[5],R=i[8];return r[0]=a*_+o*x+l*L,r[3]=a*m+o*E+l*A,r[6]=a*p+o*M+l*R,r[1]=c*_+u*x+h*L,r[4]=c*m+u*E+h*A,r[7]=c*p+u*M+h*R,r[2]=d*_+f*x+g*L,r[5]=d*m+f*E+g*A,r[8]=d*p+f*M+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,g=e*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*c-u*n)*_,t[2]=(o*n-i*a)*_,t[3]=d*_,t[4]=(u*e-i*l)*_,t[5]=(i*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ur.makeScale(t,e)),this}rotate(t){return this.premultiply(ur.makeRotation(-t)),this}translate(t,e){return this.premultiply(ur.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ur=new Ot;function tc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Js(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Rh(){const s=Js("canvas");return s.style.display="block",s}const To={};function Zi(s){s in To||(To[s]=!0,console.warn(s))}function Ch(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ph(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Lh(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const jt={enabled:!0,workingColorSpace:Ui,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ee&&(s.r=xn(s.r),s.g=xn(s.g),s.b=xn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ee&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Un?ir:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function xn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function bi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Ao=[.64,.33,.3,.6,.15,.06],Ro=[.2126,.7152,.0722],Co=[.3127,.329],Po=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lo=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);jt.define({[Ui]:{primaries:Ao,whitePoint:Co,transfer:ir,toXYZ:Po,fromXYZ:Lo,luminanceCoefficients:Ro,workingColorSpaceConfig:{unpackColorSpace:pe},outputColorSpaceConfig:{drawingBufferColorSpace:pe}},[pe]:{primaries:Ao,whitePoint:Co,transfer:ee,toXYZ:Po,fromXYZ:Lo,luminanceCoefficients:Ro,outputColorSpaceConfig:{drawingBufferColorSpace:pe}}});let oi;class Ih{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{oi===void 0&&(oi=Js("canvas")),oi.width=t.width,oi.height=t.height;const n=oi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Js("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=xn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xn(e[n]/255)*255):e[n]=xn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Nh=0;class ec{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=cs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(dr(i[a].image)):r.push(dr(i[a]))}else r=dr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function dr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ih.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dh=0;class Ee extends ki{constructor(t=Ee.DEFAULT_IMAGE,e=Ee.DEFAULT_MAPPING,n=ti,i=ti,r=nn,a=ei,o=Je,l=Sn,c=Ee.DEFAULT_ANISOTROPY,u=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=cs(),this.name="",this.source=new ec(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rs:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case ca:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rs:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case ca:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ee.DEFAULT_IMAGE=null;Ee.DEFAULT_MAPPING=Hl;Ee.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,n=0,i=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,M=(f+1)/2,L=(p+1)/2,A=(u+d)/4,R=(h+_)/4,P=(g+m)/4;return E>M&&E>L?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=A/n,r=R/n):M>L?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=A/i,r=P/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=R/r,i=P/r),this.set(n,i,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-_)/x,this.z=(d-u)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uh extends ki{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ee(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ec(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends Uh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class nc extends Ee{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class kh extends Ee{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-o;const p=l*d+c*f+u*g+h*_,x=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const L=Math.sqrt(E),A=Math.atan2(L,p*x);m=Math.sin(m*A)/L,o=Math.sin(o*A)/L}const M=o*x;if(l=l*m+d*M,c=c*m+f*M,u=u*m+g*M,h=h*m+_*M,m===1-o){const L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+u*h+l*f-c*d,t[e+1]=l*g+u*d+c*h-o*f,t[e+2]=c*g+u*f+o*d-l*h,t[e+3]=u*g-o*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Io.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Io.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-r*i),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=i+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fr.copy(this).projectOnVector(t),this.sub(fr)}reflect(t){return this.sub(fr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fr=new I,Io=new Oi;class si{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ye.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ye.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ye.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ye):Ye.fromBufferAttribute(r,a),Ye.applyMatrix4(t.matrixWorld),this.expandByPoint(Ye);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gs.copy(n.boundingBox)),gs.applyMatrix4(t.matrixWorld),this.union(gs)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ye),Ye.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vi),_s.subVectors(this.max,Vi),li.subVectors(t.a,Vi),ci.subVectors(t.b,Vi),hi.subVectors(t.c,Vi),bn.subVectors(ci,li),wn.subVectors(hi,ci),Wn.subVectors(li,hi);let e=[0,-bn.z,bn.y,0,-wn.z,wn.y,0,-Wn.z,Wn.y,bn.z,0,-bn.x,wn.z,0,-wn.x,Wn.z,0,-Wn.x,-bn.y,bn.x,0,-wn.y,wn.x,0,-Wn.y,Wn.x,0];return!pr(e,li,ci,hi,_s)||(e=[1,0,0,0,1,0,0,0,1],!pr(e,li,ci,hi,_s))?!1:(vs.crossVectors(bn,wn),e=[vs.x,vs.y,vs.z],pr(e,li,ci,hi,_s))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ye).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ye).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const un=[new I,new I,new I,new I,new I,new I,new I,new I],Ye=new I,gs=new si,li=new I,ci=new I,hi=new I,bn=new I,wn=new I,Wn=new I,Vi=new I,_s=new I,vs=new I,Xn=new I;function pr(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Xn.fromArray(s,r);const o=i.x*Math.abs(Xn.x)+i.y*Math.abs(Xn.y)+i.z*Math.abs(Xn.z),l=t.dot(Xn),c=e.dot(Xn),u=n.dot(Xn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Oh=new si,Wi=new I,mr=new I;class hs{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Oh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wi.subVectors(t,this.center);const e=Wi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Wi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wi.copy(t.center).add(mr)),this.expandByPoint(Wi.copy(t.center).sub(mr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new I,gr=new I,xs=new I,Tn=new I,_r=new I,Ms=new I,vr=new I;class Fh{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(dn.copy(this.origin).addScaledVector(this.direction,e),dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){gr.copy(t).add(e).multiplyScalar(.5),xs.copy(e).sub(t).normalize(),Tn.copy(this.origin).sub(gr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(xs),o=Tn.dot(this.direction),l=-Tn.dot(xs),c=Tn.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(gr).addScaledVector(xs,d),f}intersectSphere(t,e){dn.subVectors(t.center,this.origin);const n=dn.dot(this.direction),i=dn.dot(dn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,dn)!==null}intersectTriangle(t,e,n,i,r){_r.subVectors(e,t),Ms.subVectors(n,t),vr.crossVectors(_r,Ms);let a=this.direction.dot(vr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Tn.subVectors(this.origin,t);const l=o*this.direction.dot(Ms.crossVectors(Tn,Ms));if(l<0)return null;const c=o*this.direction.dot(_r.cross(Tn));if(c<0||l+c>a)return null;const u=-o*Tn.dot(vr);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,i,r,a,o,l,c,u,h,d,f,g,_,m){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,u,h,d,f,g,_,m)}set(t,e,n,i,r,a,o,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ui.setFromMatrixColumn(t,0).length(),r=1/ui.setFromMatrixColumn(t,1).length(),a=1/ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=a*u,f=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;e[0]=d+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;e[0]=d-_*o,e[4]=-a*h,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,f=a*h,g=o*u,_=o*h;e[0]=l*u,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-d*h,e[8]=g*h+f,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=a*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=o*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zh,t,Bh)}lookAt(t,e,n){const i=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),An.crossVectors(n,Ie),An.lengthSq()===0&&(Math.abs(n.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),An.crossVectors(n,Ie)),An.normalize(),Ss.crossVectors(Ie,An),i[0]=An.x,i[4]=Ss.x,i[8]=Ie.x,i[1]=An.y,i[5]=Ss.y,i[9]=Ie.y,i[2]=An.z,i[6]=Ss.z,i[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],E=n[7],M=n[11],L=n[15],A=i[0],R=i[4],P=i[8],y=i[12],v=i[1],T=i[5],D=i[9],N=i[13],B=i[2],W=i[6],X=i[10],K=i[14],Y=i[3],lt=i[7],pt=i[11],Et=i[15];return r[0]=a*A+o*v+l*B+c*Y,r[4]=a*R+o*T+l*W+c*lt,r[8]=a*P+o*D+l*X+c*pt,r[12]=a*y+o*N+l*K+c*Et,r[1]=u*A+h*v+d*B+f*Y,r[5]=u*R+h*T+d*W+f*lt,r[9]=u*P+h*D+d*X+f*pt,r[13]=u*y+h*N+d*K+f*Et,r[2]=g*A+_*v+m*B+p*Y,r[6]=g*R+_*T+m*W+p*lt,r[10]=g*P+_*D+m*X+p*pt,r[14]=g*y+_*N+m*K+p*Et,r[3]=x*A+E*v+M*B+L*Y,r[7]=x*R+E*T+M*W+L*lt,r[11]=x*P+E*D+M*X+L*pt,r[15]=x*y+E*N+M*K+L*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*h-i*c*h-r*o*d+n*c*d+i*o*f-n*l*f)+_*(+e*l*f-e*c*d+r*a*d-i*a*f+i*c*u-r*l*u)+m*(+e*c*h-e*o*f-r*a*h+n*a*f+r*o*u-n*c*u)+p*(-i*o*u-e*l*h+e*o*d+i*a*h-n*a*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],x=h*m*c-_*d*c+_*l*f-o*m*f-h*l*p+o*d*p,E=g*d*c-u*m*c-g*l*f+a*m*f+u*l*p-a*d*p,M=u*_*c-g*h*c+g*o*f-a*_*f-u*o*p+a*h*p,L=g*h*l-u*_*l-g*o*d+a*_*d+u*o*m-a*h*m,A=e*x+n*E+i*M+r*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=x*R,t[1]=(_*d*r-h*m*r-_*i*f+n*m*f+h*i*p-n*d*p)*R,t[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*p+n*l*p)*R,t[3]=(h*l*r-o*d*r-h*i*c+n*d*c+o*i*f-n*l*f)*R,t[4]=E*R,t[5]=(u*m*r-g*d*r+g*i*f-e*m*f-u*i*p+e*d*p)*R,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*p-e*l*p)*R,t[7]=(a*d*r-u*l*r+u*i*c-e*d*c-a*i*f+e*l*f)*R,t[8]=M*R,t[9]=(g*h*r-u*_*r-g*n*f+e*_*f+u*n*p-e*h*p)*R,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*p+e*o*p)*R,t[11]=(u*o*r-a*h*r-u*n*c+e*h*c+a*n*f-e*o*f)*R,t[12]=L*R,t[13]=(u*_*i-g*h*i+g*n*d-e*_*d-u*n*m+e*h*m)*R,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*m-e*o*m)*R,t[15]=(a*h*i-u*o*i+u*n*l-e*h*l-a*n*d+e*o*d)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,g=r*h,_=a*u,m=a*h,p=o*h,x=l*c,E=l*u,M=l*h,L=n.x,A=n.y,R=n.z;return i[0]=(1-(_+p))*L,i[1]=(f+M)*L,i[2]=(g-E)*L,i[3]=0,i[4]=(f-M)*A,i[5]=(1-(d+p))*A,i[6]=(m+x)*A,i[7]=0,i[8]=(g+E)*R,i[9]=(m-x)*R,i[10]=(1-(d+_))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ui.set(i[0],i[1],i[2]).length();const a=ui.set(i[4],i[5],i[6]).length(),o=ui.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],qe.copy(this);const c=1/r,u=1/a,h=1/o;return qe.elements[0]*=c,qe.elements[1]*=c,qe.elements[2]*=c,qe.elements[4]*=u,qe.elements[5]*=u,qe.elements[6]*=u,qe.elements[8]*=h,qe.elements[9]*=h,qe.elements[10]*=h,e.setFromRotationMatrix(qe),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=vn){const l=this.elements,c=2*r/(e-t),u=2*r/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(o===vn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===$s)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=vn){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(a-r),d=(e+t)*c,f=(n+i)*u;let g,_;if(o===vn)g=(a+r)*h,_=-2*h;else if(o===$s)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ui=new I,qe=new ne,zh=new I(0,0,0),Bh=new I(1,1,1),An=new I,Ss=new I,Ie=new I,No=new ne,Do=new Oi;class an{constructor(t=0,e=0,n=0,i=an.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return No.makeRotationFromQuaternion(t),this.setFromRotationMatrix(No,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Do.setFromEuler(this),this.setFromQuaternion(Do,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class ic{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gh=0;const Uo=new I,di=new Oi,fn=new ne,ys=new I,Xi=new I,Hh=new I,Vh=new Oi,ko=new I(1,0,0),Oo=new I(0,1,0),Fo=new I(0,0,1),zo={type:"added"},Wh={type:"removed"},fi={type:"childadded",child:null},xr={type:"childremoved",child:null};class ve extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new I,e=new an,n=new Oi,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new Ot}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ic,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.multiply(di),this}rotateOnWorldAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.premultiply(di),this}rotateX(t){return this.rotateOnAxis(ko,t)}rotateY(t){return this.rotateOnAxis(Oo,t)}rotateZ(t){return this.rotateOnAxis(Fo,t)}translateOnAxis(t,e){return Uo.copy(t).applyQuaternion(this.quaternion),this.position.add(Uo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ko,t)}translateY(t){return this.translateOnAxis(Oo,t)}translateZ(t){return this.translateOnAxis(Fo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ys.copy(t):ys.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Xi,ys,this.up):fn.lookAt(ys,Xi,this.up),this.quaternion.setFromRotationMatrix(fn),i&&(fn.extractRotation(i.matrixWorld),di.setFromRotationMatrix(fn),this.quaternion.premultiply(di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zo),fi.child=t,this.dispatchEvent(fi),fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wh),xr.child=t,this.dispatchEvent(xr),xr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zo),fi.child=t,this.dispatchEvent(fi),fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,t,Hh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,Vh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ve.DEFAULT_UP=new I(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const je=new I,pn=new I,Mr=new I,mn=new I,pi=new I,mi=new I,Bo=new I,Sr=new I,yr=new I,Er=new I,br=new de,wr=new de,Tr=new de;class Ke{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),je.subVectors(t,e),i.cross(je);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){je.subVectors(i,e),pn.subVectors(n,e),Mr.subVectors(t,e);const a=je.dot(je),o=je.dot(pn),l=je.dot(Mr),c=pn.dot(pn),u=pn.dot(Mr),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mn.x),l.addScaledVector(a,mn.y),l.addScaledVector(o,mn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return br.setScalar(0),wr.setScalar(0),Tr.setScalar(0),br.fromBufferAttribute(t,e),wr.fromBufferAttribute(t,n),Tr.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(br,r.x),a.addScaledVector(wr,r.y),a.addScaledVector(Tr,r.z),a}static isFrontFacing(t,e,n,i){return je.subVectors(n,e),pn.subVectors(t,e),je.cross(pn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),je.cross(pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ke.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Ke.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;pi.subVectors(i,n),mi.subVectors(r,n),Sr.subVectors(t,n);const l=pi.dot(Sr),c=mi.dot(Sr);if(l<=0&&c<=0)return e.copy(n);yr.subVectors(t,i);const u=pi.dot(yr),h=mi.dot(yr);if(u>=0&&h<=u)return e.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(pi,a);Er.subVectors(t,r);const f=pi.dot(Er),g=mi.dot(Er);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(mi,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Bo.subVectors(r,i),o=(h-u)/(h-u+(f-g)),e.copy(i).addScaledVector(Bo,o);const p=1/(m+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(pi,a).addScaledVector(mi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const sc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},Es={h:0,s:0,l:0};function Ar(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=jt.workingColorSpace){if(t=Ah(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ar(a,r,t+1/3),this.g=Ar(a,r,t),this.b=Ar(a,r,t-1/3)}return jt.toWorkingColorSpace(this,i),this}setStyle(t,e=pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pe){const n=sc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xn(t.r),this.g=xn(t.g),this.b=xn(t.b),this}copyLinearToSRGB(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pe){return jt.fromWorkingColorSpace(ye.copy(this),t),Math.round(xe(ye.r*255,0,255))*65536+Math.round(xe(ye.g*255,0,255))*256+Math.round(xe(ye.b*255,0,255))}getHexString(t=pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(ye.copy(this),e);const n=ye.r,i=ye.g,r=ye.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(ye.copy(this),e),t.r=ye.r,t.g=ye.g,t.b=ye.b,t}getStyle(t=pe){jt.fromWorkingColorSpace(ye.copy(this),t);const e=ye.r,n=ye.g,i=ye.b;return t!==pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(Es);const n=hr(Rn.h,Es.h,e),i=hr(Rn.s,Es.s,e),r=hr(Rn.l,Es.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new Vt;Vt.NAMES=sc;let Xh=0;class us extends ki{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=cs(),this.name="",this.blending=yi,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zr,this.blendDst=Qr,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Ti,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ai,this.stencilZFail=ai,this.stencilZPass=ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zr&&(n.blendSrc=this.blendSrc),this.blendDst!==Qr&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ti&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class on extends us{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new I,bs=new vt;class He{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=bo,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)bs.fromBufferAttribute(this,e),bs.applyMatrix3(t),this.setXY(e,bs.x,bs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Hi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),i=Ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),i=Ce(i,this.array),r=Ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bo&&(t.usage=this.usage),t}}class rc extends He{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ac extends He{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ie extends He{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Yh=0;const Fe=new ne,Rr=new ve,gi=new I,Ne=new si,Yi=new si,_e=new I;class Ae extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tc(t)?ac:rc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fe.makeRotationFromQuaternion(t),this.applyMatrix4(Fe),this}rotateX(t){return Fe.makeRotationX(t),this.applyMatrix4(Fe),this}rotateY(t){return Fe.makeRotationY(t),this.applyMatrix4(Fe),this}rotateZ(t){return Fe.makeRotationZ(t),this.applyMatrix4(Fe),this}translate(t,e,n){return Fe.makeTranslation(t,e,n),this.applyMatrix4(Fe),this}scale(t,e,n){return Fe.makeScale(t,e,n),this.applyMatrix4(Fe),this}lookAt(t){return Rr.lookAt(t),Rr.updateMatrix(),this.applyMatrix4(Rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ie(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ne.setFromBufferAttribute(r),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Yi.setFromBufferAttribute(o),this.morphTargetsRelative?(_e.addVectors(Ne.min,Yi.min),Ne.expandByPoint(_e),_e.addVectors(Ne.max,Yi.max),Ne.expandByPoint(_e)):(Ne.expandByPoint(Yi.min),Ne.expandByPoint(Yi.max))}Ne.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)_e.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(_e));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)_e.fromBufferAttribute(o,c),l&&(gi.fromBufferAttribute(t,c),_e.add(gi)),i=Math.max(i,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new He(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new I,l[P]=new I;const c=new I,u=new I,h=new I,d=new vt,f=new vt,g=new vt,_=new I,m=new I;function p(P,y,v){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,v),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,y),g.fromBufferAttribute(r,v),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(T),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(T),o[P].add(_),o[y].add(_),o[v].add(_),l[P].add(m),l[y].add(m),l[v].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let P=0,y=x.length;P<y;++P){const v=x[P],T=v.start,D=v.count;for(let N=T,B=T+D;N<B;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const E=new I,M=new I,L=new I,A=new I;function R(P){L.fromBufferAttribute(i,P),A.copy(L);const y=o[P];E.copy(y),E.sub(L.multiplyScalar(L.dot(y))).normalize(),M.crossVectors(A,y);const T=M.dot(l[P])<0?-1:1;a.setXYZW(P,E.x,E.y,E.z,T)}for(let P=0,y=x.length;P<y;++P){const v=x[P],T=v.start,D=v.count;for(let N=T,B=T+D;N<B;N+=3)R(t.getX(N+0)),R(t.getX(N+1)),R(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,h=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new He(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Go=new ne,Yn=new Fh,ws=new hs,Ho=new I,Ts=new I,As=new I,Rs=new I,Cr=new I,Cs=new I,Vo=new I,Ps=new I;class it extends ve{constructor(t=new Ae,e=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Cs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Cr.fromBufferAttribute(h,t),a?Cs.addScaledVector(Cr,u):Cs.addScaledVector(Cr.sub(e),u))}e.add(Cs)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(r),Yn.copy(t.ray).recast(t.near),!(ws.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(ws,Ho)===null||Yn.origin.distanceToSquared(Ho)>(t.far-t.near)**2))&&(Go.copy(r).invert(),Yn.copy(t.ray).applyMatrix4(Go),!(n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=x,L=E;M<L;M+=3){const A=o.getX(M),R=o.getX(M+1),P=o.getX(M+2);i=Ls(this,p,t,n,c,u,h,A,R,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=o.getX(m),E=o.getX(m+1),M=o.getX(m+2);i=Ls(this,a,t,n,c,u,h,x,E,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=x,L=E;M<L;M+=3){const A=M,R=M+1,P=M+2;i=Ls(this,p,t,n,c,u,h,A,R,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,E=m+1,M=m+2;i=Ls(this,a,t,n,c,u,h,x,E,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function qh(s,t,e,n,i,r,a,o){let l;if(t.side===Te?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Bn,o),l===null)return null;Ps.copy(o),Ps.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ps);return c<e.near||c>e.far?null:{distance:c,point:Ps.clone(),object:s}}function Ls(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Ts),s.getVertexPosition(l,As),s.getVertexPosition(c,Rs);const u=qh(s,t,e,n,Ts,As,Rs,Vo);if(u){const h=new I;Ke.getBarycoord(Vo,Ts,As,Rs,h),i&&(u.uv=Ke.getInterpolatedAttribute(i,o,l,c,h,new vt)),r&&(u.uv1=Ke.getInterpolatedAttribute(r,o,l,c,h,new vt)),a&&(u.normal=Ke.getInterpolatedAttribute(a,o,l,c,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new I,materialIndex:0};Ke.getNormal(Ts,As,Rs,d.normal),u.face=d,u.barycoord=h}return u}class Ve extends Ae{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(h,2));function g(_,m,p,x,E,M,L,A,R,P,y){const v=M/R,T=L/P,D=M/2,N=L/2,B=A/2,W=R+1,X=P+1;let K=0,Y=0;const lt=new I;for(let pt=0;pt<X;pt++){const Et=pt*T-N;for(let nt=0;nt<W;nt++){const at=nt*v-D;lt[_]=at*x,lt[m]=Et*E,lt[p]=B,c.push(lt.x,lt.y,lt.z),lt[_]=0,lt[m]=0,lt[p]=A>0?1:-1,u.push(lt.x,lt.y,lt.z),h.push(nt/R),h.push(1-pt/P),K+=1}}for(let pt=0;pt<P;pt++)for(let Et=0;Et<R;Et++){const nt=d+Et+W*pt,at=d+Et+W*(pt+1),z=d+(Et+1)+W*(pt+1),$=d+(Et+1)+W*pt;l.push(nt,at,$),l.push(at,z,$),Y+=6}o.addGroup(f,Y,y),f+=Y,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ve(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Li(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function be(s){const t={};for(let e=0;e<s.length;e++){const n=Li(s[e]);for(const i in n)t[i]=n[i]}return t}function jh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function oc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const Kh={clone:Li,merge:be};var $h=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends us{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$h,this.fragmentShader=Jh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Li(t.uniforms),this.uniformsGroups=jh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class lc extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Cn=new I,Wo=new vt,Xo=new vt;class we extends lc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ka*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ka*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z),Cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cn.x,Cn.y).multiplyScalar(-t/Cn.z)}getViewSize(t,e){return this.getViewBounds(t,Wo,Xo),e.subVectors(Xo,Wo)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(cr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const _i=-90,vi=1;class Zh extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new we(_i,vi,t,e);i.layers=this.layers,this.add(i);const r=new we(_i,vi,t,e);r.layers=this.layers,this.add(r);const a=new we(_i,vi,t,e);a.layers=this.layers,this.add(a);const o=new we(_i,vi,t,e);o.layers=this.layers,this.add(o);const l=new we(_i,vi,t,e);l.layers=this.layers,this.add(l);const c=new we(_i,vi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===$s)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class cc extends Ee{constructor(t,e,n,i,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ai,super(t,e,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qh extends Gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new cc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ve(5,5,5),r=new Hn({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Te,blending:Fn});r.uniforms.tEquirect.value=e;const a=new it(i,r),o=e.minFilter;return e.minFilter===ei&&(e.minFilter=nn),new Zh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const Pr=new I,tu=new I,eu=new Ot;class $n{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Pr.subVectors(n,e).cross(tu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Pr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||eu.getNormalMatrix(t),i=this.coplanarPoint(Pr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new hs,Is=new I;class to{constructor(t=new $n,e=new $n,n=new $n,i=new $n,r=new $n,a=new $n){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],x=i[13],E=i[14],M=i[15];if(n[0].setComponents(l-r,d-c,m-f,M-p).normalize(),n[1].setComponents(l+r,d+c,m+f,M+p).normalize(),n[2].setComponents(l+a,d+u,m+g,M+x).normalize(),n[3].setComponents(l-a,d-u,m-g,M-x).normalize(),n[4].setComponents(l-o,d-h,m-_,M-E).normalize(),e===vn)n[5].setComponents(l+o,d+h,m+_,M+E).normalize();else if(e===$s)n[5].setComponents(o,h,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(t){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Is.x=i.normal.x>0?t.max.x:t.min.x,Is.y=i.normal.y>0?t.max.y:t.min.y,Is.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Is)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hc(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function nu(s){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class Ze extends Ae{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=t/o,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const x=p*d-a;for(let E=0;E<c;E++){const M=E*h-r;g.push(M,-x,0),_.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const E=x+c*p,M=x+c*(p+1),L=x+1+c*(p+1),A=x+1+c*p;f.push(E,M,A),f.push(M,L,A)}this.setIndex(f),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ze(t.width,t.height,t.widthSegments,t.heightSegments)}}var iu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,su=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ru=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,au=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ou=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,du=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_u=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Su=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Eu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Tu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Au=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ru=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Cu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Iu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Du=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ku=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ou=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ju=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ku=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$u=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ju=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,td=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ed=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,id=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ad=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,od=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ld=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ud=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,md=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_d=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Md=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Td=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ad=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ld=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Id=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ud=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Od=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$d=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ef=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,af=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,uf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,df=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_f=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ef=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Af=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,If=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Df=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Uf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zt={alphahash_fragment:iu,alphahash_pars_fragment:su,alphamap_fragment:ru,alphamap_pars_fragment:au,alphatest_fragment:ou,alphatest_pars_fragment:lu,aomap_fragment:cu,aomap_pars_fragment:hu,batching_pars_vertex:uu,batching_vertex:du,begin_vertex:fu,beginnormal_vertex:pu,bsdfs:mu,iridescence_fragment:gu,bumpmap_pars_fragment:_u,clipping_planes_fragment:vu,clipping_planes_pars_fragment:xu,clipping_planes_pars_vertex:Mu,clipping_planes_vertex:Su,color_fragment:yu,color_pars_fragment:Eu,color_pars_vertex:bu,color_vertex:wu,common:Tu,cube_uv_reflection_fragment:Au,defaultnormal_vertex:Ru,displacementmap_pars_vertex:Cu,displacementmap_vertex:Pu,emissivemap_fragment:Lu,emissivemap_pars_fragment:Iu,colorspace_fragment:Nu,colorspace_pars_fragment:Du,envmap_fragment:Uu,envmap_common_pars_fragment:ku,envmap_pars_fragment:Ou,envmap_pars_vertex:Fu,envmap_physical_pars_fragment:Ku,envmap_vertex:zu,fog_vertex:Bu,fog_pars_vertex:Gu,fog_fragment:Hu,fog_pars_fragment:Vu,gradientmap_pars_fragment:Wu,lightmap_pars_fragment:Xu,lights_lambert_fragment:Yu,lights_lambert_pars_fragment:qu,lights_pars_begin:ju,lights_toon_fragment:$u,lights_toon_pars_fragment:Ju,lights_phong_fragment:Zu,lights_phong_pars_fragment:Qu,lights_physical_fragment:td,lights_physical_pars_fragment:ed,lights_fragment_begin:nd,lights_fragment_maps:id,lights_fragment_end:sd,logdepthbuf_fragment:rd,logdepthbuf_pars_fragment:ad,logdepthbuf_pars_vertex:od,logdepthbuf_vertex:ld,map_fragment:cd,map_pars_fragment:hd,map_particle_fragment:ud,map_particle_pars_fragment:dd,metalnessmap_fragment:fd,metalnessmap_pars_fragment:pd,morphinstance_vertex:md,morphcolor_vertex:gd,morphnormal_vertex:_d,morphtarget_pars_vertex:vd,morphtarget_vertex:xd,normal_fragment_begin:Md,normal_fragment_maps:Sd,normal_pars_fragment:yd,normal_pars_vertex:Ed,normal_vertex:bd,normalmap_pars_fragment:wd,clearcoat_normal_fragment_begin:Td,clearcoat_normal_fragment_maps:Ad,clearcoat_pars_fragment:Rd,iridescence_pars_fragment:Cd,opaque_fragment:Pd,packing:Ld,premultiplied_alpha_fragment:Id,project_vertex:Nd,dithering_fragment:Dd,dithering_pars_fragment:Ud,roughnessmap_fragment:kd,roughnessmap_pars_fragment:Od,shadowmap_pars_fragment:Fd,shadowmap_pars_vertex:zd,shadowmap_vertex:Bd,shadowmask_pars_fragment:Gd,skinbase_vertex:Hd,skinning_pars_vertex:Vd,skinning_vertex:Wd,skinnormal_vertex:Xd,specularmap_fragment:Yd,specularmap_pars_fragment:qd,tonemapping_fragment:jd,tonemapping_pars_fragment:Kd,transmission_fragment:$d,transmission_pars_fragment:Jd,uv_pars_fragment:Zd,uv_pars_vertex:Qd,uv_vertex:tf,worldpos_vertex:ef,background_vert:nf,background_frag:sf,backgroundCube_vert:rf,backgroundCube_frag:af,cube_vert:of,cube_frag:lf,depth_vert:cf,depth_frag:hf,distanceRGBA_vert:uf,distanceRGBA_frag:df,equirect_vert:ff,equirect_frag:pf,linedashed_vert:mf,linedashed_frag:gf,meshbasic_vert:_f,meshbasic_frag:vf,meshlambert_vert:xf,meshlambert_frag:Mf,meshmatcap_vert:Sf,meshmatcap_frag:yf,meshnormal_vert:Ef,meshnormal_frag:bf,meshphong_vert:wf,meshphong_frag:Tf,meshphysical_vert:Af,meshphysical_frag:Rf,meshtoon_vert:Cf,meshtoon_frag:Pf,points_vert:Lf,points_frag:If,shadow_vert:Nf,shadow_frag:Df,sprite_vert:Uf,sprite_frag:kf},ot={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},en={basic:{uniforms:be([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:be([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Vt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:be([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:be([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:be([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Vt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:be([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:be([ot.points,ot.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:be([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:be([ot.common,ot.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:be([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:be([ot.sprite,ot.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:be([ot.common,ot.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:be([ot.lights,ot.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};en.physical={uniforms:be([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Ns={r:0,b:0,g:0},jn=new an,Of=new ne;function Ff(s,t,e,n,i,r,a){const o=new Vt(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(x){let E=x.isScene===!0?x.background:null;return E&&E.isTexture&&(E=(x.backgroundBlurriness>0?e:t).get(E)),E}function _(x){let E=!1;const M=g(x);M===null?p(o,l):M&&M.isColor&&(p(M,1),E=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,E){const M=g(E);M&&(M.isCubeTexture||M.mapping===nr)?(u===void 0&&(u=new it(new Ve(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Li(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Te,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),jn.copy(E.backgroundRotation),jn.x*=-1,jn.y*=-1,jn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Of.makeRotationFromEuler(jn)),u.material.toneMapped=jt.getTransfer(M.colorSpace)!==ee,(h!==M||d!==M.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,f=s.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new it(new Ze(2,2),new Hn({name:"BackgroundMaterial",uniforms:Li(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=jt.getTransfer(M.colorSpace)!==ee,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,f=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,E){x.getRGB(Ns,oc(s)),n.buffers.color.setClear(Ns.r,Ns.g,Ns.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(x,E=1){o.set(x),l=E,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:_,addToRenderList:m}}function zf(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(v,T,D,N,B){let W=!1;const X=h(N,D,T);r!==X&&(r=X,c(r.object)),W=f(v,N,D,B),W&&g(v,N,D,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,M(v,T,D,N),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return s.createVertexArray()}function c(v){return s.bindVertexArray(v)}function u(v){return s.deleteVertexArray(v)}function h(v,T,D){const N=D.wireframe===!0;let B=n[v.id];B===void 0&&(B={},n[v.id]=B);let W=B[T.id];W===void 0&&(W={},B[T.id]=W);let X=W[N];return X===void 0&&(X=d(l()),W[N]=X),X}function d(v){const T=[],D=[],N=[];for(let B=0;B<e;B++)T[B]=0,D[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:D,attributeDivisors:N,object:v,attributes:{},index:null}}function f(v,T,D,N){const B=r.attributes,W=T.attributes;let X=0;const K=D.getAttributes();for(const Y in K)if(K[Y].location>=0){const pt=B[Y];let Et=W[Y];if(Et===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(Et=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(Et=v.instanceColor)),pt===void 0||pt.attribute!==Et||Et&&pt.data!==Et.data)return!0;X++}return r.attributesNum!==X||r.index!==N}function g(v,T,D,N){const B={},W=T.attributes;let X=0;const K=D.getAttributes();for(const Y in K)if(K[Y].location>=0){let pt=W[Y];pt===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(pt=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(pt=v.instanceColor));const Et={};Et.attribute=pt,pt&&pt.data&&(Et.data=pt.data),B[Y]=Et,X++}r.attributes=B,r.attributesNum=X,r.index=N}function _(){const v=r.newAttributes;for(let T=0,D=v.length;T<D;T++)v[T]=0}function m(v){p(v,0)}function p(v,T){const D=r.newAttributes,N=r.enabledAttributes,B=r.attributeDivisors;D[v]=1,N[v]===0&&(s.enableVertexAttribArray(v),N[v]=1),B[v]!==T&&(s.vertexAttribDivisor(v,T),B[v]=T)}function x(){const v=r.newAttributes,T=r.enabledAttributes;for(let D=0,N=T.length;D<N;D++)T[D]!==v[D]&&(s.disableVertexAttribArray(D),T[D]=0)}function E(v,T,D,N,B,W,X){X===!0?s.vertexAttribIPointer(v,T,D,B,W):s.vertexAttribPointer(v,T,D,N,B,W)}function M(v,T,D,N){_();const B=N.attributes,W=D.getAttributes(),X=T.defaultAttributeValues;for(const K in W){const Y=W[K];if(Y.location>=0){let lt=B[K];if(lt===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(lt=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(lt=v.instanceColor)),lt!==void 0){const pt=lt.normalized,Et=lt.itemSize,nt=t.get(lt);if(nt===void 0)continue;const at=nt.buffer,z=nt.type,$=nt.bytesPerElement,tt=z===s.INT||z===s.UNSIGNED_INT||lt.gpuType===qa;if(lt.isInterleavedBufferAttribute){const Q=lt.data,xt=Q.stride,Tt=lt.offset;if(Q.isInstancedInterleavedBuffer){for(let It=0;It<Y.locationSize;It++)p(Y.location+It,Q.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let It=0;It<Y.locationSize;It++)m(Y.location+It);s.bindBuffer(s.ARRAY_BUFFER,at);for(let It=0;It<Y.locationSize;It++)E(Y.location+It,Et/Y.locationSize,z,pt,xt*$,(Tt+Et/Y.locationSize*It)*$,tt)}else{if(lt.isInstancedBufferAttribute){for(let Q=0;Q<Y.locationSize;Q++)p(Y.location+Q,lt.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Q=0;Q<Y.locationSize;Q++)m(Y.location+Q);s.bindBuffer(s.ARRAY_BUFFER,at);for(let Q=0;Q<Y.locationSize;Q++)E(Y.location+Q,Et/Y.locationSize,z,pt,Et*$,Et/Y.locationSize*Q*$,tt)}}else if(X!==void 0){const pt=X[K];if(pt!==void 0)switch(pt.length){case 2:s.vertexAttrib2fv(Y.location,pt);break;case 3:s.vertexAttrib3fv(Y.location,pt);break;case 4:s.vertexAttrib4fv(Y.location,pt);break;default:s.vertexAttrib1fv(Y.location,pt)}}}}x()}function L(){P();for(const v in n){const T=n[v];for(const D in T){const N=T[D];for(const B in N)u(N[B].object),delete N[B];delete T[D]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const T=n[v.id];for(const D in T){const N=T[D];for(const B in N)u(N[B].object),delete N[B];delete T[D]}delete n[v.id]}function R(v){for(const T in n){const D=n[T];if(D[v.id]===void 0)continue;const N=D[v.id];for(const B in N)u(N[B].object),delete N[B];delete D[v.id]}}function P(){y(),a=!0,r!==i&&(r=i,c(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:y,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function Bf(s,t,e){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Gf(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==Je&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const P=R===ls&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Sn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==sn&&!P)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:L,maxSamples:A}}function Hf(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new $n,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const x=r?0:n,E=x*4;let M=p.clippingState||null;l.value=M,M=u(g,d,E,f);for(let L=0;L!==E;++L)M[L]=e[L];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,M=f;E!==_;++E,M+=4)a.copy(h[E]).applyMatrix4(x,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Vf(s){let t=new WeakMap;function e(a,o){return o===oa?a.mapping=Ai:o===la&&(a.mapping=Ri),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===oa||o===la)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Qh(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class uc extends lc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Si=4,Yo=[.125,.215,.35,.446,.526,.582],Qn=20,Lr=new uc,qo=new Vt;let Ir=null,Nr=0,Dr=0,Ur=!1;const Jn=(1+Math.sqrt(5))/2,xi=1/Jn,jo=[new I(-Jn,xi,0),new I(Jn,xi,0),new I(-xi,0,Jn),new I(xi,0,Jn),new I(0,Jn,-xi),new I(0,Jn,xi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Ko{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ir=this._renderer.getRenderTarget(),Nr=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel(),Ur=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ir,Nr,Dr),this._renderer.xr.enabled=Ur,t.scissorTest=!1,Ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ai||t.mapping===Ri?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ir=this._renderer.getRenderTarget(),Nr=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel(),Ur=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:ls,format:Je,colorSpace:Ui,depthBuffer:!1},i=$o(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$o(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wf(r)),this._blurMaterial=Xf(r,t,e)}return i}_compileMaterial(t){const e=new it(this._lodPlanes[0],t);this._renderer.compile(e,Lr)}_sceneToCubeUV(t,e,n,i){const o=new we(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(qo),u.toneMapping=zn,u.autoClear=!1;const f=new on({name:"PMREM.Background",side:Te,depthWrite:!1,depthTest:!1}),g=new it(new Ve,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(qo),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):x===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const E=this._cubeSize;Ds(i,x*E,p>2?E:0,E,E),u.setRenderTarget(i),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ai||t.mapping===Ri;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jo());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new it(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ds(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Lr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=jo[(i-r-1)%jo.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new it(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Qn-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Qn;m>Qn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qn}`);const p=[];let x=0;for(let R=0;R<Qn;++R){const P=R/_,y=Math.exp(-P*P/2);p.push(y),R===0?x+=y:R<m&&(x+=2*y)}for(let R=0;R<p.length;R++)p[R]=p[R]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const M=this._sizeLods[i],L=3*M*(i>E-Si?i-E+Si:0),A=4*(this._cubeSize-M);Ds(e,L,A,3*M,2*M),l.setRenderTarget(e),l.render(h,Lr)}}function Wf(s){const t=[],e=[],n=[];let i=s;const r=s-Si+1+Yo.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Si?l=Yo[a-s+Si-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),E=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let A=0;A<f;A++){const R=A%3*2/3-1,P=A>2?0:-1,y=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];x.set(y,_*g*A),E.set(d,m*g*A);const v=[A,A,A,A,A,A];M.set(v,p*g*A)}const L=new Ae;L.setAttribute("position",new He(x,_)),L.setAttribute("uv",new He(E,m)),L.setAttribute("faceIndex",new He(M,p)),t.push(L),i>Si&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $o(s,t,e){const n=new Gn(s,t,e);return n.texture.mapping=nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ds(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Xf(s,t,e){const n=new Float32Array(Qn),i=new I(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:Qn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Jo(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Zo(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function eo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Yf(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===oa||l===la,u=l===Ai||l===Ri;if(c||u){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Ko(s)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&i(f)?(e===null&&(e=new Ko(s)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function qf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Zi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function jf(s,t,e,n){const i={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let E=0,M=x.length;E<M;E+=3){const L=x[E+0],A=x[E+1],R=x[E+2];d.push(L,A,A,R,R,L)}}else if(g!==void 0){const x=g.array;_=g.version;for(let E=0,M=x.length/3-1;E<M;E+=3){const L=E+0,A=E+1,R=E+2;d.push(L,A,A,R,R,L)}}else return;const m=new(tc(d)?ac:rc)(d,1);m.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Kf(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*_[x];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function $f(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Jf(s,t,e){const n=new WeakMap,i=new de;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let v=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var f=v;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let L=o.attributes.position.count*M,A=1;L>t.maxTextureSize&&(A=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const R=new Float32Array(L*A*4*h),P=new nc(R,L,A,h);P.type=sn,P.needsUpdate=!0;const y=M*4;for(let T=0;T<h;T++){const D=p[T],N=x[T],B=E[T],W=L*A*4*T;for(let X=0;X<D.count;X++){const K=X*y;g===!0&&(i.fromBufferAttribute(D,X),R[W+K+0]=i.x,R[W+K+1]=i.y,R[W+K+2]=i.z,R[W+K+3]=0),_===!0&&(i.fromBufferAttribute(N,X),R[W+K+4]=i.x,R[W+K+5]=i.y,R[W+K+6]=i.z,R[W+K+7]=0),m===!0&&(i.fromBufferAttribute(B,X),R[W+K+8]=i.x,R[W+K+9]=i.y,R[W+K+10]=i.z,R[W+K+11]=B.itemSize===4?i.w:1)}}d={count:h,texture:P,size:new vt(L,A)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Zf(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class dc extends Ee{constructor(t,e,n,i,r,a,o,l,c,u=Ei){if(u!==Ei&&u!==Pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ei&&(n=ni),n===void 0&&u===Pi&&(n=Ci),super(null,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ue,this.minFilter=l!==void 0?l:Ue,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const fc=new Ee,Qo=new dc(1,1),pc=new nc,mc=new kh,gc=new cc,tl=[],el=[],nl=new Float32Array(16),il=new Float32Array(9),sl=new Float32Array(4);function Fi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=tl[i];if(r===void 0&&(r=new Float32Array(i),tl[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function me(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ge(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function sr(s,t){let e=el[t];e===void 0&&(e=new Int32Array(t),el[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Qf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function tp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2fv(this.addr,t),ge(e,t)}}function ep(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;s.uniform3fv(this.addr,t),ge(e,t)}}function np(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4fv(this.addr,t),ge(e,t)}}function ip(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;sl.set(n),s.uniformMatrix2fv(this.addr,!1,sl),ge(e,n)}}function sp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;il.set(n),s.uniformMatrix3fv(this.addr,!1,il),ge(e,n)}}function rp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;nl.set(n),s.uniformMatrix4fv(this.addr,!1,nl),ge(e,n)}}function ap(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function op(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2iv(this.addr,t),ge(e,t)}}function lp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;s.uniform3iv(this.addr,t),ge(e,t)}}function cp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4iv(this.addr,t),ge(e,t)}}function hp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function up(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;s.uniform2uiv(this.addr,t),ge(e,t)}}function dp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;s.uniform3uiv(this.addr,t),ge(e,t)}}function fp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;s.uniform4uiv(this.addr,t),ge(e,t)}}function pp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Qo.compareFunction=Ql,r=Qo):r=fc,e.setTexture2D(t||r,i)}function mp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||mc,i)}function gp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||gc,i)}function _p(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||pc,i)}function vp(s){switch(s){case 5126:return Qf;case 35664:return tp;case 35665:return ep;case 35666:return np;case 35674:return ip;case 35675:return sp;case 35676:return rp;case 5124:case 35670:return ap;case 35667:case 35671:return op;case 35668:case 35672:return lp;case 35669:case 35673:return cp;case 5125:return hp;case 36294:return up;case 36295:return dp;case 36296:return fp;case 35678:case 36198:case 36298:case 36306:case 35682:return pp;case 35679:case 36299:case 36307:return mp;case 35680:case 36300:case 36308:case 36293:return gp;case 36289:case 36303:case 36311:case 36292:return _p}}function xp(s,t){s.uniform1fv(this.addr,t)}function Mp(s,t){const e=Fi(t,this.size,2);s.uniform2fv(this.addr,e)}function Sp(s,t){const e=Fi(t,this.size,3);s.uniform3fv(this.addr,e)}function yp(s,t){const e=Fi(t,this.size,4);s.uniform4fv(this.addr,e)}function Ep(s,t){const e=Fi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function bp(s,t){const e=Fi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function wp(s,t){const e=Fi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Tp(s,t){s.uniform1iv(this.addr,t)}function Ap(s,t){s.uniform2iv(this.addr,t)}function Rp(s,t){s.uniform3iv(this.addr,t)}function Cp(s,t){s.uniform4iv(this.addr,t)}function Pp(s,t){s.uniform1uiv(this.addr,t)}function Lp(s,t){s.uniform2uiv(this.addr,t)}function Ip(s,t){s.uniform3uiv(this.addr,t)}function Np(s,t){s.uniform4uiv(this.addr,t)}function Dp(s,t,e){const n=this.cache,i=t.length,r=sr(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||fc,r[a])}function Up(s,t,e){const n=this.cache,i=t.length,r=sr(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||mc,r[a])}function kp(s,t,e){const n=this.cache,i=t.length,r=sr(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||gc,r[a])}function Op(s,t,e){const n=this.cache,i=t.length,r=sr(e,i);me(n,r)||(s.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||pc,r[a])}function Fp(s){switch(s){case 5126:return xp;case 35664:return Mp;case 35665:return Sp;case 35666:return yp;case 35674:return Ep;case 35675:return bp;case 35676:return wp;case 5124:case 35670:return Tp;case 35667:case 35671:return Ap;case 35668:case 35672:return Rp;case 35669:case 35673:return Cp;case 5125:return Pp;case 36294:return Lp;case 36295:return Ip;case 36296:return Np;case 35678:case 36198:case 36298:case 36306:case 35682:return Dp;case 35679:case 36299:case 36307:return Up;case 35680:case 36300:case 36308:case 36293:return kp;case 36289:case 36303:case 36311:case 36292:return Op}}class zp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vp(e.type)}}class Bp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fp(e.type)}}class Gp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const kr=/(\w+)(\])?(\[|\.)?/g;function rl(s,t){s.seq.push(t),s.map[t.id]=t}function Hp(s,t,e){const n=s.name,i=n.length;for(kr.lastIndex=0;;){const r=kr.exec(n),a=kr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){rl(e,c===void 0?new zp(o,s,t):new Bp(o,s,t));break}else{let h=e.map[o];h===void 0&&(h=new Gp(o),rl(e,h)),e=h}}}class js{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Hp(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function al(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Vp=37297;let Wp=0;function Xp(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const ol=new Ot;function Yp(s){jt._getMatrix(ol,jt.workingColorSpace,s);const t=`mat3( ${ol.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(s)){case ir:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function ll(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Xp(s.getShaderSource(t),a)}else return i}function qp(s,t){const e=Yp(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function jp(s,t){let e;switch(t){case ch:e="Linear";break;case hh:e="Reinhard";break;case uh:e="Cineon";break;case dh:e="ACESFilmic";break;case ph:e="AgX";break;case mh:e="Neutral";break;case fh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Us=new I;function Kp(){jt.getLuminanceCoefficients(Us);const s=Us.x.toFixed(4),t=Us.y.toFixed(4),e=Us.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $p(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qi).join(`
`)}function Jp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zp(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Qi(s){return s!==""}function cl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Qp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oa(s){return s.replace(Qp,em)}const tm=new Map;function em(s,t){let e=zt[t];if(e===void 0){const n=tm.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Oa(e)}const nm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ul(s){return s.replace(nm,im)}function im(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function dl(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function sm(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Bl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Gl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===gn&&(t="SHADOWMAP_TYPE_VSM"),t}function rm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ai:case Ri:t="ENVMAP_TYPE_CUBE";break;case nr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function am(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ri:t="ENVMAP_MODE_REFRACTION";break}return t}function om(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ya:t="ENVMAP_BLENDING_MULTIPLY";break;case oh:t="ENVMAP_BLENDING_MIX";break;case lh:t="ENVMAP_BLENDING_ADD";break}return t}function lm(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function cm(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=sm(e),c=rm(e),u=am(e),h=om(e),d=lm(e),f=$p(e),g=Jp(r),_=i.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qi).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qi).join(`
`),p.length>0&&(p+=`
`)):(m=[dl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qi).join(`
`),p=[dl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zn?"#define TONE_MAPPING":"",e.toneMapping!==zn?zt.tonemapping_pars_fragment:"",e.toneMapping!==zn?jp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,qp("linearToOutputTexel",e.outputColorSpace),Kp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qi).join(`
`)),a=Oa(a),a=cl(a,e),a=hl(a,e),o=Oa(o),o=cl(o,e),o=hl(o,e),a=ul(a),o=ul(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===wo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=x+m+a,M=x+p+o,L=al(i,i.VERTEX_SHADER,E),A=al(i,i.FRAGMENT_SHADER,M);i.attachShader(_,L),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(T){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(_).trim(),N=i.getShaderInfoLog(L).trim(),B=i.getShaderInfoLog(A).trim();let W=!0,X=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,L,A);else{const K=ll(i,L,"vertex"),Y=ll(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+D+`
`+K+`
`+Y)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(N===""||B==="")&&(X=!1);X&&(T.diagnostics={runnable:W,programLog:D,vertexShader:{log:N,prefix:m},fragmentShader:{log:B,prefix:p}})}i.deleteShader(L),i.deleteShader(A),P=new js(i,_),y=Zp(i,_)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,Vp)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Wp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=A,this}let hm=0;class um{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new dm(t),e.set(t,n)),n}}class dm{constructor(t){this.id=hm++,this.code=t,this.usedTimes=0}}function fm(s,t,e,n,i,r,a){const o=new ic,l=new um,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,v,T,D,N){const B=D.fog,W=N.geometry,X=y.isMeshStandardMaterial?D.environment:null,K=(y.isMeshStandardMaterial?e:t).get(y.envMap||X),Y=K&&K.mapping===nr?K.image.height:null,lt=g[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const pt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Et=pt!==void 0?pt.length:0;let nt=0;W.morphAttributes.position!==void 0&&(nt=1),W.morphAttributes.normal!==void 0&&(nt=2),W.morphAttributes.color!==void 0&&(nt=3);let at,z,$,tt;if(lt){const te=en[lt];at=te.vertexShader,z=te.fragmentShader}else at=y.vertexShader,z=y.fragmentShader,l.update(y),$=l.getVertexShaderID(y),tt=l.getFragmentShaderID(y);const Q=s.getRenderTarget(),xt=s.state.buffers.depth.getReversed(),Tt=N.isInstancedMesh===!0,It=N.isBatchedMesh===!0,Kt=!!y.map,Bt=!!y.matcap,se=!!K,F=!!y.aoMap,ke=!!y.lightMap,Wt=!!y.bumpMap,Xt=!!y.normalMap,Ct=!!y.displacementMap,le=!!y.emissiveMap,At=!!y.metalnessMap,w=!!y.roughnessMap,S=y.anisotropy>0,G=y.clearcoat>0,J=y.dispersion>0,et=y.iridescence>0,j=y.sheen>0,bt=y.transmission>0,ht=S&&!!y.anisotropyMap,mt=G&&!!y.clearcoatMap,qt=G&&!!y.clearcoatNormalMap,st=G&&!!y.clearcoatRoughnessMap,gt=et&&!!y.iridescenceMap,Lt=et&&!!y.iridescenceThicknessMap,Nt=j&&!!y.sheenColorMap,_t=j&&!!y.sheenRoughnessMap,Yt=!!y.specularMap,Ft=!!y.specularColorMap,re=!!y.specularIntensityMap,U=bt&&!!y.transmissionMap,ct=bt&&!!y.thicknessMap,q=!!y.gradientMap,Z=!!y.alphaMap,ft=y.alphaTest>0,ut=!!y.alphaHash,Ut=!!y.extensions;let ue=zn;y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ue=s.toneMapping);const Me={shaderID:lt,shaderType:y.type,shaderName:y.name,vertexShader:at,fragmentShader:z,defines:y.defines,customVertexShaderID:$,customFragmentShaderID:tt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:It,batchingColor:It&&N._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&N.instanceColor!==null,instancingMorph:Tt&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ui,alphaToCoverage:!!y.alphaToCoverage,map:Kt,matcap:Bt,envMap:se,envMapMode:se&&K.mapping,envMapCubeUVHeight:Y,aoMap:F,lightMap:ke,bumpMap:Wt,normalMap:Xt,displacementMap:d&&Ct,emissiveMap:le,normalMapObjectSpace:Xt&&y.normalMapType===xh,normalMapTangentSpace:Xt&&y.normalMapType===Zl,metalnessMap:At,roughnessMap:w,anisotropy:S,anisotropyMap:ht,clearcoat:G,clearcoatMap:mt,clearcoatNormalMap:qt,clearcoatRoughnessMap:st,dispersion:J,iridescence:et,iridescenceMap:gt,iridescenceThicknessMap:Lt,sheen:j,sheenColorMap:Nt,sheenRoughnessMap:_t,specularMap:Yt,specularColorMap:Ft,specularIntensityMap:re,transmission:bt,transmissionMap:U,thicknessMap:ct,gradientMap:q,opaque:y.transparent===!1&&y.blending===yi&&y.alphaToCoverage===!1,alphaMap:Z,alphaTest:ft,alphaHash:ut,combine:y.combine,mapUv:Kt&&_(y.map.channel),aoMapUv:F&&_(y.aoMap.channel),lightMapUv:ke&&_(y.lightMap.channel),bumpMapUv:Wt&&_(y.bumpMap.channel),normalMapUv:Xt&&_(y.normalMap.channel),displacementMapUv:Ct&&_(y.displacementMap.channel),emissiveMapUv:le&&_(y.emissiveMap.channel),metalnessMapUv:At&&_(y.metalnessMap.channel),roughnessMapUv:w&&_(y.roughnessMap.channel),anisotropyMapUv:ht&&_(y.anisotropyMap.channel),clearcoatMapUv:mt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:qt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:_t&&_(y.sheenRoughnessMap.channel),specularMapUv:Yt&&_(y.specularMap.channel),specularColorMapUv:Ft&&_(y.specularColorMap.channel),specularIntensityMapUv:re&&_(y.specularIntensityMap.channel),transmissionMapUv:U&&_(y.transmissionMap.channel),thicknessMapUv:ct&&_(y.thicknessMap.channel),alphaMapUv:Z&&_(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Xt||S),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(Kt||Z),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:xt,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:nt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&T.length>0,shadowMapType:s.shadowMap.type,toneMapping:ue,decodeVideoTexture:Kt&&y.map.isVideoTexture===!0&&jt.getTransfer(y.map.colorSpace)===ee,decodeVideoTextureEmissive:le&&y.emissiveMap.isVideoTexture===!0&&jt.getTransfer(y.emissiveMap.colorSpace)===ee,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ge,flipSided:y.side===Te,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ut&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&y.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function p(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const T in y.defines)v.push(T),v.push(y.defines[T]);return y.isRawShaderMaterial===!1&&(x(v,y),E(v,y),v.push(s.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function x(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function E(y,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),y.push(o.mask)}function M(y){const v=g[y.type];let T;if(v){const D=en[v];T=Kh.clone(D.uniforms)}else T=y.uniforms;return T}function L(y,v){let T;for(let D=0,N=u.length;D<N;D++){const B=u[D];if(B.cacheKey===v){T=B,++T.usedTimes;break}}return T===void 0&&(T=new cm(s,v,y,r),u.push(T)),T}function A(y){if(--y.usedTimes===0){const v=u.indexOf(y);u[v]=u[u.length-1],u.pop(),y.destroy()}}function R(y){l.remove(y)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:L,releaseProgram:A,releaseShaderCache:R,programs:u,dispose:P}}function pm(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function mm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function fl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function pl(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(h,d,f,g,_,m){let p=s[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function o(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||mm),n.length>1&&n.sort(d||fl),i.length>1&&i.sort(d||fl)}function u(){for(let h=t,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function gm(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new pl,s.set(n,[a])):i>=r.length?(a=new pl,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function _m(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Vt};break;case"SpotLight":e={position:new I,direction:new I,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function vm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let xm=0;function Mm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Sm(s){const t=new _m,e=vm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,r=new ne,a=new ne;function o(c){let u=0,h=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,x=0,E=0,M=0,L=0,A=0,R=0;c.sort(Mm);for(let y=0,v=c.length;y<v;y++){const T=c[y],D=T.color,N=T.intensity,B=T.distance,W=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=D.r*N,h+=D.g*N,d+=D.b*N;else if(T.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(T.sh.coefficients[X],N);R++}else if(T.isDirectionalLight){const X=t.get(T);if(X.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const K=T.shadow,Y=e.get(T);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,n.directionalShadow[f]=Y,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=T.shadow.matrix,x++}n.directional[f]=X,f++}else if(T.isSpotLight){const X=t.get(T);X.position.setFromMatrixPosition(T.matrixWorld),X.color.copy(D).multiplyScalar(N),X.distance=B,X.coneCos=Math.cos(T.angle),X.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),X.decay=T.decay,n.spot[_]=X;const K=T.shadow;if(T.map&&(n.spotLightMap[L]=T.map,L++,K.updateMatrices(T),T.castShadow&&A++),n.spotLightMatrix[_]=K.matrix,T.castShadow){const Y=e.get(T);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=W,M++}_++}else if(T.isRectAreaLight){const X=t.get(T);X.color.copy(D).multiplyScalar(N),X.halfWidth.set(T.width*.5,0,0),X.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=X,m++}else if(T.isPointLight){const X=t.get(T);if(X.color.copy(T.color).multiplyScalar(T.intensity),X.distance=T.distance,X.decay=T.decay,T.castShadow){const K=T.shadow,Y=e.get(T);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=T.shadow.matrix,E++}n.point[g]=X,g++}else if(T.isHemisphereLight){const X=t.get(T);X.skyColor.copy(T.color).multiplyScalar(N),X.groundColor.copy(T.groundColor).multiplyScalar(N),n.hemi[p]=X,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==x||P.numPointShadows!==E||P.numSpotShadows!==M||P.numSpotMaps!==L||P.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=M+L-A,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=x,P.numPointShadows=E,P.numSpotShadows=M,P.numSpotMaps=L,P.numLightProbes=R,n.version=xm++)}function l(c,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const E=c[p];if(E.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),h++}else if(E.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function ml(s){const t=new Sm(s),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function ym(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new ml(s),t.set(i,[o])):r>=a.length?(o=new ml(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Em extends us{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=_h,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class bm extends us{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const wm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Am(s,t,e){let n=new to;const i=new vt,r=new vt,a=new de,o=new Em({depthPacking:vh}),l=new bm,c={},u=e.maxTextureSize,h={[Bn]:Te,[Te]:Bn,[Ge]:Ge},d=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:wm,fragmentShader:Tm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ae;g.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new it(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bl;let p=this.type;this.render=function(A,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const y=s.getRenderTarget(),v=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Fn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const N=p!==gn&&this.type===gn,B=p===gn&&this.type!==gn;for(let W=0,X=A.length;W<X;W++){const K=A[W],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const lt=Y.getFrameExtents();if(i.multiply(lt),r.copy(Y.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/lt.x),i.x=r.x*lt.x,Y.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/lt.y),i.y=r.y*lt.y,Y.mapSize.y=r.y)),Y.map===null||N===!0||B===!0){const Et=this.type!==gn?{minFilter:Ue,magFilter:Ue}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Gn(i.x,i.y,Et),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const pt=Y.getViewportCount();for(let Et=0;Et<pt;Et++){const nt=Y.getViewport(Et);a.set(r.x*nt.x,r.y*nt.y,r.x*nt.z,r.y*nt.w),D.viewport(a),Y.updateMatrices(K,Et),n=Y.getFrustum(),M(R,P,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===gn&&x(Y,P),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(y,v,T)};function x(A,R){const P=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Gn(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(R,null,P,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(R,null,P,f,_,null)}function E(A,R,P,y){let v=null;const T=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)v=T;else if(v=P.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const D=v.uuid,N=R.uuid;let B=c[D];B===void 0&&(B={},c[D]=B);let W=B[N];W===void 0&&(W=v.clone(),B[N]=W,R.addEventListener("dispose",L)),v=W}if(v.visible=R.visible,v.wireframe=R.wireframe,y===gn?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:h[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const D=s.properties.get(v);D.light=P}return v}function M(A,R,P,y,v){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===gn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const N=t.update(A),B=A.material;if(Array.isArray(B)){const W=N.groups;for(let X=0,K=W.length;X<K;X++){const Y=W[X],lt=B[Y.materialIndex];if(lt&&lt.visible){const pt=E(A,lt,y,v);A.onBeforeShadow(s,A,R,P,N,pt,Y),s.renderBufferDirect(P,null,N,pt,A,Y),A.onAfterShadow(s,A,R,P,N,pt,Y)}}}else if(B.visible){const W=E(A,B,y,v);A.onBeforeShadow(s,A,R,P,N,W,null),s.renderBufferDirect(P,null,N,W,A,null),A.onAfterShadow(s,A,R,P,N,W,null)}}const D=A.children;for(let N=0,B=D.length;N<B;N++)M(D[N],R,P,y,v)}function L(A){A.target.removeEventListener("dispose",L);for(const P in c){const y=c[P],v=A.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}const Rm={[ta]:ea,[na]:ra,[ia]:aa,[Ti]:sa,[ea]:ta,[ra]:na,[aa]:ia,[sa]:Ti};function Cm(s,t){function e(){let U=!1;const ct=new de;let q=null;const Z=new de(0,0,0,0);return{setMask:function(ft){q!==ft&&!U&&(s.colorMask(ft,ft,ft,ft),q=ft)},setLocked:function(ft){U=ft},setClear:function(ft,ut,Ut,ue,Me){Me===!0&&(ft*=ue,ut*=ue,Ut*=ue),ct.set(ft,ut,Ut,ue),Z.equals(ct)===!1&&(s.clearColor(ft,ut,Ut,ue),Z.copy(ct))},reset:function(){U=!1,q=null,Z.set(-1,0,0,0)}}}function n(){let U=!1,ct=!1,q=null,Z=null,ft=null;return{setReversed:function(ut){if(ct!==ut){const Ut=t.get("EXT_clip_control");ct?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);const ue=ft;ft=null,this.setClear(ue)}ct=ut},getReversed:function(){return ct},setTest:function(ut){ut?Q(s.DEPTH_TEST):xt(s.DEPTH_TEST)},setMask:function(ut){q!==ut&&!U&&(s.depthMask(ut),q=ut)},setFunc:function(ut){if(ct&&(ut=Rm[ut]),Z!==ut){switch(ut){case ta:s.depthFunc(s.NEVER);break;case ea:s.depthFunc(s.ALWAYS);break;case na:s.depthFunc(s.LESS);break;case Ti:s.depthFunc(s.LEQUAL);break;case ia:s.depthFunc(s.EQUAL);break;case sa:s.depthFunc(s.GEQUAL);break;case ra:s.depthFunc(s.GREATER);break;case aa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Z=ut}},setLocked:function(ut){U=ut},setClear:function(ut){ft!==ut&&(ct&&(ut=1-ut),s.clearDepth(ut),ft=ut)},reset:function(){U=!1,q=null,Z=null,ft=null,ct=!1}}}function i(){let U=!1,ct=null,q=null,Z=null,ft=null,ut=null,Ut=null,ue=null,Me=null;return{setTest:function(te){U||(te?Q(s.STENCIL_TEST):xt(s.STENCIL_TEST))},setMask:function(te){ct!==te&&!U&&(s.stencilMask(te),ct=te)},setFunc:function(te,We,cn){(q!==te||Z!==We||ft!==cn)&&(s.stencilFunc(te,We,cn),q=te,Z=We,ft=cn)},setOp:function(te,We,cn){(ut!==te||Ut!==We||ue!==cn)&&(s.stencilOp(te,We,cn),ut=te,Ut=We,ue=cn)},setLocked:function(te){U=te},setClear:function(te){Me!==te&&(s.clearStencil(te),Me=te)},reset:function(){U=!1,ct=null,q=null,Z=null,ft=null,ut=null,Ut=null,ue=null,Me=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,E=null,M=null,L=null,A=null,R=new Vt(0,0,0),P=0,y=!1,v=null,T=null,D=null,N=null,B=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,K=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=K>=2);let lt=null,pt={};const Et=s.getParameter(s.SCISSOR_BOX),nt=s.getParameter(s.VIEWPORT),at=new de().fromArray(Et),z=new de().fromArray(nt);function $(U,ct,q,Z){const ft=new Uint8Array(4),ut=s.createTexture();s.bindTexture(U,ut),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ut=0;Ut<q;Ut++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(ct,0,s.RGBA,1,1,Z,0,s.RGBA,s.UNSIGNED_BYTE,ft):s.texImage2D(ct+Ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ft);return ut}const tt={};tt[s.TEXTURE_2D]=$(s.TEXTURE_2D,s.TEXTURE_2D,1),tt[s.TEXTURE_CUBE_MAP]=$(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[s.TEXTURE_2D_ARRAY]=$(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),tt[s.TEXTURE_3D]=$(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(s.DEPTH_TEST),a.setFunc(Ti),Wt(!1),Xt(xo),Q(s.CULL_FACE),F(Fn);function Q(U){u[U]!==!0&&(s.enable(U),u[U]=!0)}function xt(U){u[U]!==!1&&(s.disable(U),u[U]=!1)}function Tt(U,ct){return h[U]!==ct?(s.bindFramebuffer(U,ct),h[U]=ct,U===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ct),U===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ct),!0):!1}function It(U,ct){let q=f,Z=!1;if(U){q=d.get(ct),q===void 0&&(q=[],d.set(ct,q));const ft=U.textures;if(q.length!==ft.length||q[0]!==s.COLOR_ATTACHMENT0){for(let ut=0,Ut=ft.length;ut<Ut;ut++)q[ut]=s.COLOR_ATTACHMENT0+ut;q.length=ft.length,Z=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,Z=!0);Z&&s.drawBuffers(q)}function Kt(U){return g!==U?(s.useProgram(U),g=U,!0):!1}const Bt={[Zn]:s.FUNC_ADD,[Wc]:s.FUNC_SUBTRACT,[Xc]:s.FUNC_REVERSE_SUBTRACT};Bt[Yc]=s.MIN,Bt[qc]=s.MAX;const se={[jc]:s.ZERO,[Kc]:s.ONE,[$c]:s.SRC_COLOR,[Zr]:s.SRC_ALPHA,[nh]:s.SRC_ALPHA_SATURATE,[th]:s.DST_COLOR,[Zc]:s.DST_ALPHA,[Jc]:s.ONE_MINUS_SRC_COLOR,[Qr]:s.ONE_MINUS_SRC_ALPHA,[eh]:s.ONE_MINUS_DST_COLOR,[Qc]:s.ONE_MINUS_DST_ALPHA,[ih]:s.CONSTANT_COLOR,[sh]:s.ONE_MINUS_CONSTANT_COLOR,[rh]:s.CONSTANT_ALPHA,[ah]:s.ONE_MINUS_CONSTANT_ALPHA};function F(U,ct,q,Z,ft,ut,Ut,ue,Me,te){if(U===Fn){_===!0&&(xt(s.BLEND),_=!1);return}if(_===!1&&(Q(s.BLEND),_=!0),U!==Vc){if(U!==m||te!==y){if((p!==Zn||M!==Zn)&&(s.blendEquation(s.FUNC_ADD),p=Zn,M=Zn),te)switch(U){case yi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mo:s.blendFunc(s.ONE,s.ONE);break;case So:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case yo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case yi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case So:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case yo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}x=null,E=null,L=null,A=null,R.set(0,0,0),P=0,m=U,y=te}return}ft=ft||ct,ut=ut||q,Ut=Ut||Z,(ct!==p||ft!==M)&&(s.blendEquationSeparate(Bt[ct],Bt[ft]),p=ct,M=ft),(q!==x||Z!==E||ut!==L||Ut!==A)&&(s.blendFuncSeparate(se[q],se[Z],se[ut],se[Ut]),x=q,E=Z,L=ut,A=Ut),(ue.equals(R)===!1||Me!==P)&&(s.blendColor(ue.r,ue.g,ue.b,Me),R.copy(ue),P=Me),m=U,y=!1}function ke(U,ct){U.side===Ge?xt(s.CULL_FACE):Q(s.CULL_FACE);let q=U.side===Te;ct&&(q=!q),Wt(q),U.blending===yi&&U.transparent===!1?F(Fn):F(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const Z=U.stencilWrite;o.setTest(Z),Z&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),le(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):xt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(U){v!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),v=U)}function Xt(U){U!==Gc?(Q(s.CULL_FACE),U!==T&&(U===xo?s.cullFace(s.BACK):U===Hc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xt(s.CULL_FACE),T=U}function Ct(U){U!==D&&(X&&s.lineWidth(U),D=U)}function le(U,ct,q){U?(Q(s.POLYGON_OFFSET_FILL),(N!==ct||B!==q)&&(s.polygonOffset(ct,q),N=ct,B=q)):xt(s.POLYGON_OFFSET_FILL)}function At(U){U?Q(s.SCISSOR_TEST):xt(s.SCISSOR_TEST)}function w(U){U===void 0&&(U=s.TEXTURE0+W-1),lt!==U&&(s.activeTexture(U),lt=U)}function S(U,ct,q){q===void 0&&(lt===null?q=s.TEXTURE0+W-1:q=lt);let Z=pt[q];Z===void 0&&(Z={type:void 0,texture:void 0},pt[q]=Z),(Z.type!==U||Z.texture!==ct)&&(lt!==q&&(s.activeTexture(q),lt=q),s.bindTexture(U,ct||tt[U]),Z.type=U,Z.texture=ct)}function G(){const U=pt[lt];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function qt(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function gt(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Nt(U){at.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),at.copy(U))}function _t(U){z.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),z.copy(U))}function Yt(U,ct){let q=c.get(ct);q===void 0&&(q=new WeakMap,c.set(ct,q));let Z=q.get(U);Z===void 0&&(Z=s.getUniformBlockIndex(ct,U.name),q.set(U,Z))}function Ft(U,ct){const Z=c.get(ct).get(U);l.get(ct)!==Z&&(s.uniformBlockBinding(ct,Z,U.__bindingPointIndex),l.set(ct,Z))}function re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},lt=null,pt={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,E=null,M=null,L=null,A=null,R=new Vt(0,0,0),P=0,y=!1,v=null,T=null,D=null,N=null,B=null,at.set(0,0,s.canvas.width,s.canvas.height),z.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:xt,bindFramebuffer:Tt,drawBuffers:It,useProgram:Kt,setBlending:F,setMaterial:ke,setFlipSided:Wt,setCullFace:Xt,setLineWidth:Ct,setPolygonOffset:le,setScissorTest:At,activeTexture:w,bindTexture:S,unbindTexture:G,compressedTexImage2D:J,compressedTexImage3D:et,texImage2D:gt,texImage3D:Lt,updateUBOMapping:Yt,uniformBlockBinding:Ft,texStorage2D:qt,texStorage3D:st,texSubImage2D:j,texSubImage3D:bt,compressedTexSubImage2D:ht,compressedTexSubImage3D:mt,scissor:Nt,viewport:_t,reset:re}}function gl(s,t,e,n){const i=Pm(n);switch(e){case Yl:return s*t;case jl:return s*t;case Kl:return s*t*2;case $a:return s*t/i.components*i.byteLength;case Ja:return s*t/i.components*i.byteLength;case $l:return s*t*2/i.components*i.byteLength;case Za:return s*t*2/i.components*i.byteLength;case ql:return s*t*3/i.components*i.byteLength;case Je:return s*t*4/i.components*i.byteLength;case Qa:return s*t*4/i.components*i.byteLength;case Vs:case Ws:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Xs:case Ys:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ua:case fa:return Math.max(s,16)*Math.max(t,8)/4;case ha:case da:return Math.max(s,8)*Math.max(t,8)/2;case pa:case ma:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ga:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case _a:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case va:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case xa:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ya:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ba:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case wa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Aa:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ra:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ca:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Pa:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case qs:case La:case Ia:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Jl:case Na:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Da:case Ua:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Pm(s){switch(s){case Sn:case Vl:return{byteLength:1,components:1};case as:case Wl:case ls:return{byteLength:2,components:1};case ja:case Ka:return{byteLength:2,components:4};case ni:case qa:case sn:return{byteLength:4,components:1};case Xl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Lm(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,S){return f?new OffscreenCanvas(w,S):Js("canvas")}function _(w,S,G){let J=1;const et=At(w);if((et.width>G||et.height>G)&&(J=G/Math.max(et.width,et.height)),J<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const j=Math.floor(J*et.width),bt=Math.floor(J*et.height);h===void 0&&(h=g(j,bt));const ht=S?g(j,bt):h;return ht.width=j,ht.height=bt,ht.getContext("2d").drawImage(w,0,0,j,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+j+"x"+bt+")."),ht}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){s.generateMipmap(w)}function x(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(w,S,G,J,et=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let j=S;if(S===s.RED&&(G===s.FLOAT&&(j=s.R32F),G===s.HALF_FLOAT&&(j=s.R16F),G===s.UNSIGNED_BYTE&&(j=s.R8)),S===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(j=s.R8UI),G===s.UNSIGNED_SHORT&&(j=s.R16UI),G===s.UNSIGNED_INT&&(j=s.R32UI),G===s.BYTE&&(j=s.R8I),G===s.SHORT&&(j=s.R16I),G===s.INT&&(j=s.R32I)),S===s.RG&&(G===s.FLOAT&&(j=s.RG32F),G===s.HALF_FLOAT&&(j=s.RG16F),G===s.UNSIGNED_BYTE&&(j=s.RG8)),S===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(j=s.RG8UI),G===s.UNSIGNED_SHORT&&(j=s.RG16UI),G===s.UNSIGNED_INT&&(j=s.RG32UI),G===s.BYTE&&(j=s.RG8I),G===s.SHORT&&(j=s.RG16I),G===s.INT&&(j=s.RG32I)),S===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(j=s.RGB8UI),G===s.UNSIGNED_SHORT&&(j=s.RGB16UI),G===s.UNSIGNED_INT&&(j=s.RGB32UI),G===s.BYTE&&(j=s.RGB8I),G===s.SHORT&&(j=s.RGB16I),G===s.INT&&(j=s.RGB32I)),S===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),G===s.UNSIGNED_INT&&(j=s.RGBA32UI),G===s.BYTE&&(j=s.RGBA8I),G===s.SHORT&&(j=s.RGBA16I),G===s.INT&&(j=s.RGBA32I)),S===s.RGB&&G===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),S===s.RGBA){const bt=et?ir:jt.getTransfer(J);G===s.FLOAT&&(j=s.RGBA32F),G===s.HALF_FLOAT&&(j=s.RGBA16F),G===s.UNSIGNED_BYTE&&(j=bt===ee?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function M(w,S){let G;return w?S===null||S===ni||S===Ci?G=s.DEPTH24_STENCIL8:S===sn?G=s.DEPTH32F_STENCIL8:S===as&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ni||S===Ci?G=s.DEPTH_COMPONENT24:S===sn?G=s.DEPTH_COMPONENT32F:S===as&&(G=s.DEPTH_COMPONENT16),G}function L(w,S){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ue&&w.minFilter!==nn?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function A(w){const S=w.target;S.removeEventListener("dispose",A),P(S),S.isVideoTexture&&u.delete(S)}function R(w){const S=w.target;S.removeEventListener("dispose",R),v(S)}function P(w){const S=n.get(w);if(S.__webglInit===void 0)return;const G=w.source,J=d.get(G);if(J){const et=J[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&y(w),Object.keys(J).length===0&&d.delete(G)}n.remove(w)}function y(w){const S=n.get(w);s.deleteTexture(S.__webglTexture);const G=w.source,J=d.get(G);delete J[S.__cacheKey],a.memory.textures--}function v(w){const S=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let et=0;et<S.__webglFramebuffer[J].length;et++)s.deleteFramebuffer(S.__webglFramebuffer[J][et]);else s.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)s.deleteFramebuffer(S.__webglFramebuffer[J]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=w.textures;for(let J=0,et=G.length;J<et;J++){const j=n.get(G[J]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(G[J])}n.remove(w)}let T=0;function D(){T=0}function N(){const w=T;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),T+=1,w}function B(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function W(w,S){const G=n.get(w);if(w.isVideoTexture&&Ct(w),w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){const J=w.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(G,w,S);return}}e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+S)}function X(w,S){const G=n.get(w);if(w.version>0&&G.__version!==w.version){z(G,w,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+S)}function K(w,S){const G=n.get(w);if(w.version>0&&G.__version!==w.version){z(G,w,S);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+S)}function Y(w,S){const G=n.get(w);if(w.version>0&&G.__version!==w.version){$(G,w,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+S)}const lt={[rs]:s.REPEAT,[ti]:s.CLAMP_TO_EDGE,[ca]:s.MIRRORED_REPEAT},pt={[Ue]:s.NEAREST,[gh]:s.NEAREST_MIPMAP_NEAREST,[ms]:s.NEAREST_MIPMAP_LINEAR,[nn]:s.LINEAR,[lr]:s.LINEAR_MIPMAP_NEAREST,[ei]:s.LINEAR_MIPMAP_LINEAR},Et={[Mh]:s.NEVER,[Th]:s.ALWAYS,[Sh]:s.LESS,[Ql]:s.LEQUAL,[yh]:s.EQUAL,[wh]:s.GEQUAL,[Eh]:s.GREATER,[bh]:s.NOTEQUAL};function nt(w,S){if(S.type===sn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===nn||S.magFilter===lr||S.magFilter===ms||S.magFilter===ei||S.minFilter===nn||S.minFilter===lr||S.minFilter===ms||S.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,lt[S.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,lt[S.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,lt[S.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,pt[S.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,pt[S.minFilter]),S.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,Et[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ue||S.minFilter!==ms&&S.minFilter!==ei||S.type===sn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(w,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function at(w,S){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",A));const J=S.source;let et=d.get(J);et===void 0&&(et={},d.set(J,et));const j=B(S);if(j!==w.__cacheKey){et[j]===void 0&&(et[j]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,G=!0),et[j].usedTimes++;const bt=et[w.__cacheKey];bt!==void 0&&(et[w.__cacheKey].usedTimes--,bt.usedTimes===0&&y(S)),w.__cacheKey=j,w.__webglTexture=et[j].texture}return G}function z(w,S,G){let J=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=s.TEXTURE_3D);const et=at(w,S),j=S.source;e.bindTexture(J,w.__webglTexture,s.TEXTURE0+G);const bt=n.get(j);if(j.version!==bt.__version||et===!0){e.activeTexture(s.TEXTURE0+G);const ht=jt.getPrimaries(jt.workingColorSpace),mt=S.colorSpace===Un?null:jt.getPrimaries(S.colorSpace),qt=S.colorSpace===Un||ht===mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let st=_(S.image,!1,i.maxTextureSize);st=le(S,st);const gt=r.convert(S.format,S.colorSpace),Lt=r.convert(S.type);let Nt=E(S.internalFormat,gt,Lt,S.colorSpace,S.isVideoTexture);nt(J,S);let _t;const Yt=S.mipmaps,Ft=S.isVideoTexture!==!0,re=bt.__version===void 0||et===!0,U=j.dataReady,ct=L(S,st);if(S.isDepthTexture)Nt=M(S.format===Pi,S.type),re&&(Ft?e.texStorage2D(s.TEXTURE_2D,1,Nt,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,Nt,st.width,st.height,0,gt,Lt,null));else if(S.isDataTexture)if(Yt.length>0){Ft&&re&&e.texStorage2D(s.TEXTURE_2D,ct,Nt,Yt[0].width,Yt[0].height);for(let q=0,Z=Yt.length;q<Z;q++)_t=Yt[q],Ft?U&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,_t.width,_t.height,gt,Lt,_t.data):e.texImage2D(s.TEXTURE_2D,q,Nt,_t.width,_t.height,0,gt,Lt,_t.data);S.generateMipmaps=!1}else Ft?(re&&e.texStorage2D(s.TEXTURE_2D,ct,Nt,st.width,st.height),U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,st.width,st.height,gt,Lt,st.data)):e.texImage2D(s.TEXTURE_2D,0,Nt,st.width,st.height,0,gt,Lt,st.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ft&&re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,Nt,Yt[0].width,Yt[0].height,st.depth);for(let q=0,Z=Yt.length;q<Z;q++)if(_t=Yt[q],S.format!==Je)if(gt!==null)if(Ft){if(U)if(S.layerUpdates.size>0){const ft=gl(_t.width,_t.height,S.format,S.type);for(const ut of S.layerUpdates){const Ut=_t.data.subarray(ut*ft/_t.data.BYTES_PER_ELEMENT,(ut+1)*ft/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,ut,_t.width,_t.height,1,gt,Ut)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,_t.width,_t.height,st.depth,gt,_t.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,Nt,_t.width,_t.height,st.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?U&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,_t.width,_t.height,st.depth,gt,Lt,_t.data):e.texImage3D(s.TEXTURE_2D_ARRAY,q,Nt,_t.width,_t.height,st.depth,0,gt,Lt,_t.data)}else{Ft&&re&&e.texStorage2D(s.TEXTURE_2D,ct,Nt,Yt[0].width,Yt[0].height);for(let q=0,Z=Yt.length;q<Z;q++)_t=Yt[q],S.format!==Je?gt!==null?Ft?U&&e.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,_t.width,_t.height,gt,_t.data):e.compressedTexImage2D(s.TEXTURE_2D,q,Nt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?U&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,_t.width,_t.height,gt,Lt,_t.data):e.texImage2D(s.TEXTURE_2D,q,Nt,_t.width,_t.height,0,gt,Lt,_t.data)}else if(S.isDataArrayTexture)if(Ft){if(re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,Nt,st.width,st.height,st.depth),U)if(S.layerUpdates.size>0){const q=gl(st.width,st.height,S.format,S.type);for(const Z of S.layerUpdates){const ft=st.data.subarray(Z*q/st.data.BYTES_PER_ELEMENT,(Z+1)*q/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,st.width,st.height,1,gt,Lt,ft)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,gt,Lt,st.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Nt,st.width,st.height,st.depth,0,gt,Lt,st.data);else if(S.isData3DTexture)Ft?(re&&e.texStorage3D(s.TEXTURE_3D,ct,Nt,st.width,st.height,st.depth),U&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,gt,Lt,st.data)):e.texImage3D(s.TEXTURE_3D,0,Nt,st.width,st.height,st.depth,0,gt,Lt,st.data);else if(S.isFramebufferTexture){if(re)if(Ft)e.texStorage2D(s.TEXTURE_2D,ct,Nt,st.width,st.height);else{let q=st.width,Z=st.height;for(let ft=0;ft<ct;ft++)e.texImage2D(s.TEXTURE_2D,ft,Nt,q,Z,0,gt,Lt,null),q>>=1,Z>>=1}}else if(Yt.length>0){if(Ft&&re){const q=At(Yt[0]);e.texStorage2D(s.TEXTURE_2D,ct,Nt,q.width,q.height)}for(let q=0,Z=Yt.length;q<Z;q++)_t=Yt[q],Ft?U&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,gt,Lt,_t):e.texImage2D(s.TEXTURE_2D,q,Nt,gt,Lt,_t);S.generateMipmaps=!1}else if(Ft){if(re){const q=At(st);e.texStorage2D(s.TEXTURE_2D,ct,Nt,q.width,q.height)}U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,gt,Lt,st)}else e.texImage2D(s.TEXTURE_2D,0,Nt,gt,Lt,st);m(S)&&p(J),bt.__version=j.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function $(w,S,G){if(S.image.length!==6)return;const J=at(w,S),et=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+G);const j=n.get(et);if(et.version!==j.__version||J===!0){e.activeTexture(s.TEXTURE0+G);const bt=jt.getPrimaries(jt.workingColorSpace),ht=S.colorSpace===Un?null:jt.getPrimaries(S.colorSpace),mt=S.colorSpace===Un||bt===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const qt=S.isCompressedTexture||S.image[0].isCompressedTexture,st=S.image[0]&&S.image[0].isDataTexture,gt=[];for(let Z=0;Z<6;Z++)!qt&&!st?gt[Z]=_(S.image[Z],!0,i.maxCubemapSize):gt[Z]=st?S.image[Z].image:S.image[Z],gt[Z]=le(S,gt[Z]);const Lt=gt[0],Nt=r.convert(S.format,S.colorSpace),_t=r.convert(S.type),Yt=E(S.internalFormat,Nt,_t,S.colorSpace),Ft=S.isVideoTexture!==!0,re=j.__version===void 0||J===!0,U=et.dataReady;let ct=L(S,Lt);nt(s.TEXTURE_CUBE_MAP,S);let q;if(qt){Ft&&re&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ct,Yt,Lt.width,Lt.height);for(let Z=0;Z<6;Z++){q=gt[Z].mipmaps;for(let ft=0;ft<q.length;ft++){const ut=q[ft];S.format!==Je?Nt!==null?Ft?U&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ft,0,0,ut.width,ut.height,Nt,ut.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ft,Yt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ft,0,0,ut.width,ut.height,Nt,_t,ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ft,Yt,ut.width,ut.height,0,Nt,_t,ut.data)}}}else{if(q=S.mipmaps,Ft&&re){q.length>0&&ct++;const Z=At(gt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ct,Yt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(st){Ft?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,gt[Z].width,gt[Z].height,Nt,_t,gt[Z].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Yt,gt[Z].width,gt[Z].height,0,Nt,_t,gt[Z].data);for(let ft=0;ft<q.length;ft++){const Ut=q[ft].image[Z].image;Ft?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ft+1,0,0,Ut.width,Ut.height,Nt,_t,Ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ft+1,Yt,Ut.width,Ut.height,0,Nt,_t,Ut.data)}}else{Ft?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Nt,_t,gt[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Yt,Nt,_t,gt[Z]);for(let ft=0;ft<q.length;ft++){const ut=q[ft];Ft?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ft+1,0,0,Nt,_t,ut.image[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ft+1,Yt,Nt,_t,ut.image[Z])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),j.__version=et.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function tt(w,S,G,J,et,j){const bt=r.convert(G.format,G.colorSpace),ht=r.convert(G.type),mt=E(G.internalFormat,bt,ht,G.colorSpace),qt=n.get(S),st=n.get(G);if(st.__renderTarget=S,!qt.__hasExternalTextures){const gt=Math.max(1,S.width>>j),Lt=Math.max(1,S.height>>j);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,j,mt,gt,Lt,S.depth,0,bt,ht,null):e.texImage2D(et,j,mt,gt,Lt,0,bt,ht,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),Xt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,et,st.__webglTexture,0,Wt(S)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,et,st.__webglTexture,j),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Q(w,S,G){if(s.bindRenderbuffer(s.RENDERBUFFER,w),S.depthBuffer){const J=S.depthTexture,et=J&&J.isDepthTexture?J.type:null,j=M(S.stencilBuffer,et),bt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=Wt(S);Xt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,j,S.width,S.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,j,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,j,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,w)}else{const J=S.textures;for(let et=0;et<J.length;et++){const j=J[et],bt=r.convert(j.format,j.colorSpace),ht=r.convert(j.type),mt=E(j.internalFormat,bt,ht,j.colorSpace),qt=Wt(S);G&&Xt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,mt,S.width,S.height):Xt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qt,mt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,mt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function xt(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(S.depthTexture);J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const et=J.__webglTexture,j=Wt(S);if(S.depthTexture.format===Ei)Xt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,et,0);else if(S.depthTexture.format===Pi)Xt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Tt(w){const S=n.get(w),G=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const J=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){const et=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",et)};J.addEventListener("dispose",et),S.__depthDisposeCallback=et}S.__boundDepthTexture=J}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");xt(S.__webglFramebuffer,w)}else if(G){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=s.createRenderbuffer(),Q(S.__webglDepthbuffer[J],w,!1);else{const et=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,j)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Q(S.__webglDepthbuffer,w,!1);else{const J=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,et)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function It(w,S,G){const J=n.get(w);S!==void 0&&tt(J.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Tt(w)}function Kt(w){const S=w.texture,G=n.get(w),J=n.get(S);w.addEventListener("dispose",R);const et=w.textures,j=w.isWebGLCubeRenderTarget===!0,bt=et.length>1;if(bt||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=S.version,a.memory.textures++),j){G.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ht]=[];for(let mt=0;mt<S.mipmaps.length;mt++)G.__webglFramebuffer[ht][mt]=s.createFramebuffer()}else G.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ht=0;ht<S.mipmaps.length;ht++)G.__webglFramebuffer[ht]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(bt)for(let ht=0,mt=et.length;ht<mt;ht++){const qt=n.get(et[ht]);qt.__webglTexture===void 0&&(qt.__webglTexture=s.createTexture(),a.memory.textures++)}if(w.samples>0&&Xt(w)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ht=0;ht<et.length;ht++){const mt=et[ht];G.__webglColorRenderbuffer[ht]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[ht]);const qt=r.convert(mt.format,mt.colorSpace),st=r.convert(mt.type),gt=E(mt.internalFormat,qt,st,mt.colorSpace,w.isXRRenderTarget===!0),Lt=Wt(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt,gt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,G.__webglColorRenderbuffer[ht])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Q(G.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),nt(s.TEXTURE_CUBE_MAP,S);for(let ht=0;ht<6;ht++)if(S.mipmaps&&S.mipmaps.length>0)for(let mt=0;mt<S.mipmaps.length;mt++)tt(G.__webglFramebuffer[ht][mt],w,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,mt);else tt(G.__webglFramebuffer[ht],w,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ht=0,mt=et.length;ht<mt;ht++){const qt=et[ht],st=n.get(qt);e.bindTexture(s.TEXTURE_2D,st.__webglTexture),nt(s.TEXTURE_2D,qt),tt(G.__webglFramebuffer,w,qt,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,0),m(qt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ht=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ht=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ht,J.__webglTexture),nt(ht,S),S.mipmaps&&S.mipmaps.length>0)for(let mt=0;mt<S.mipmaps.length;mt++)tt(G.__webglFramebuffer[mt],w,S,s.COLOR_ATTACHMENT0,ht,mt);else tt(G.__webglFramebuffer,w,S,s.COLOR_ATTACHMENT0,ht,0);m(S)&&p(ht),e.unbindTexture()}w.depthBuffer&&Tt(w)}function Bt(w){const S=w.textures;for(let G=0,J=S.length;G<J;G++){const et=S[G];if(m(et)){const j=x(w),bt=n.get(et).__webglTexture;e.bindTexture(j,bt),p(j),e.unbindTexture()}}}const se=[],F=[];function ke(w){if(w.samples>0){if(Xt(w)===!1){const S=w.textures,G=w.width,J=w.height;let et=s.COLOR_BUFFER_BIT;const j=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=n.get(w),ht=S.length>1;if(ht)for(let mt=0;mt<S.length;mt++)e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let mt=0;mt<S.length;mt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),ht){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,bt.__webglColorRenderbuffer[mt]);const qt=n.get(S[mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,qt,0)}s.blitFramebuffer(0,0,G,J,0,0,G,J,et,s.NEAREST),l===!0&&(se.length=0,F.length=0,se.push(s.COLOR_ATTACHMENT0+mt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(se.push(j),F.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,se))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ht)for(let mt=0;mt<S.length;mt++){e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,bt.__webglColorRenderbuffer[mt]);const qt=n.get(S[mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,qt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const S=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Wt(w){return Math.min(i.maxSamples,w.samples)}function Xt(w){const S=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ct(w){const S=a.render.frame;u.get(w)!==S&&(u.set(w,S),w.update())}function le(w,S){const G=w.colorSpace,J=w.format,et=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||G!==Ui&&G!==Un&&(jt.getTransfer(G)===ee?(J!==Je||et!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function At(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=D,this.setTexture2D=W,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=It,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=Xt}function Im(s,t){function e(n,i=Un){let r;const a=jt.getTransfer(i);if(n===Sn)return s.UNSIGNED_BYTE;if(n===ja)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ka)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Xl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Vl)return s.BYTE;if(n===Wl)return s.SHORT;if(n===as)return s.UNSIGNED_SHORT;if(n===qa)return s.INT;if(n===ni)return s.UNSIGNED_INT;if(n===sn)return s.FLOAT;if(n===ls)return s.HALF_FLOAT;if(n===Yl)return s.ALPHA;if(n===ql)return s.RGB;if(n===Je)return s.RGBA;if(n===jl)return s.LUMINANCE;if(n===Kl)return s.LUMINANCE_ALPHA;if(n===Ei)return s.DEPTH_COMPONENT;if(n===Pi)return s.DEPTH_STENCIL;if(n===$a)return s.RED;if(n===Ja)return s.RED_INTEGER;if(n===$l)return s.RG;if(n===Za)return s.RG_INTEGER;if(n===Qa)return s.RGBA_INTEGER;if(n===Vs||n===Ws||n===Xs||n===Ys)if(a===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ha||n===ua||n===da||n===fa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ha)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pa||n===ma||n===ga)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pa||n===ma)return a===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ga)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_a||n===va||n===xa||n===Ma||n===Sa||n===ya||n===Ea||n===ba||n===wa||n===Ta||n===Aa||n===Ra||n===Ca||n===Pa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_a)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===va)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xa)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ma)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sa)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ya)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ea)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ba)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wa)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ta)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Aa)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ra)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ca)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pa)return a===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qs||n===La||n===Ia)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===qs)return a===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===La)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ia)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jl||n===Na||n===Da||n===Ua)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===qs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Na)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Da)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ua)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ci?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Nm extends we{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class oe extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dm={type:"move"};class Or{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Um=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,km=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Om{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ee,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Hn({vertexShader:Um,fragmentShader:km,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new it(new Ze(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fm extends ki{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=new Om,m=e.getContextAttributes();let p=null,x=null;const E=[],M=[],L=new vt;let A=null;const R=new we;R.viewport=new de;const P=new we;P.viewport=new de;const y=[R,P],v=new Nm;let T=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let $=E[z];return $===void 0&&($=new Or,E[z]=$),$.getTargetRaySpace()},this.getControllerGrip=function(z){let $=E[z];return $===void 0&&($=new Or,E[z]=$),$.getGripSpace()},this.getHand=function(z){let $=E[z];return $===void 0&&($=new Or,E[z]=$),$.getHandSpace()};function N(z){const $=M.indexOf(z.inputSource);if($===-1)return;const tt=E[$];tt!==void 0&&(tt.update(z.inputSource,z.frame,c||a),tt.dispatchEvent({type:z.type,data:z.inputSource}))}function B(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",W);for(let z=0;z<E.length;z++){const $=M[z];$!==null&&(M[z]=null,E[z].disconnect($))}T=null,D=null,_.reset(),t.setRenderTarget(p),f=null,d=null,h=null,i=null,x=null,at.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",B),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(L),i.renderState.layers===void 0){const $={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,$),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Gn(f.framebufferWidth,f.framebufferHeight,{format:Je,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let $=null,tt=null,Q=null;m.depth&&(Q=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=m.stencil?Pi:Ei,tt=m.stencil?Ci:ni);const xt={colorFormat:e.RGBA8,depthFormat:Q,scaleFactor:r};h=new XRWebGLBinding(i,e),d=h.createProjectionLayer(xt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Gn(d.textureWidth,d.textureHeight,{format:Je,type:Sn,depthTexture:new dc(d.textureWidth,d.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),at.setContext(i),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W(z){for(let $=0;$<z.removed.length;$++){const tt=z.removed[$],Q=M.indexOf(tt);Q>=0&&(M[Q]=null,E[Q].disconnect(tt))}for(let $=0;$<z.added.length;$++){const tt=z.added[$];let Q=M.indexOf(tt);if(Q===-1){for(let Tt=0;Tt<E.length;Tt++)if(Tt>=M.length){M.push(tt),Q=Tt;break}else if(M[Tt]===null){M[Tt]=tt,Q=Tt;break}if(Q===-1)break}const xt=E[Q];xt&&xt.connect(tt)}}const X=new I,K=new I;function Y(z,$,tt){X.setFromMatrixPosition($.matrixWorld),K.setFromMatrixPosition(tt.matrixWorld);const Q=X.distanceTo(K),xt=$.projectionMatrix.elements,Tt=tt.projectionMatrix.elements,It=xt[14]/(xt[10]-1),Kt=xt[14]/(xt[10]+1),Bt=(xt[9]+1)/xt[5],se=(xt[9]-1)/xt[5],F=(xt[8]-1)/xt[0],ke=(Tt[8]+1)/Tt[0],Wt=It*F,Xt=It*ke,Ct=Q/(-F+ke),le=Ct*-F;if($.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(le),z.translateZ(Ct),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),xt[10]===-1)z.projectionMatrix.copy($.projectionMatrix),z.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const At=It+Ct,w=Kt+Ct,S=Wt-le,G=Xt+(Q-le),J=Bt*Kt/w*At,et=se*Kt/w*At;z.projectionMatrix.makePerspective(S,G,J,et,At,w),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function lt(z,$){$===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices($.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;let $=z.near,tt=z.far;_.texture!==null&&(_.depthNear>0&&($=_.depthNear),_.depthFar>0&&(tt=_.depthFar)),v.near=P.near=R.near=$,v.far=P.far=R.far=tt,(T!==v.near||D!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,D=v.far),R.layers.mask=z.layers.mask|2,P.layers.mask=z.layers.mask|4,v.layers.mask=R.layers.mask|P.layers.mask;const Q=z.parent,xt=v.cameras;lt(v,Q);for(let Tt=0;Tt<xt.length;Tt++)lt(xt[Tt],Q);xt.length===2?Y(v,R,P):v.projectionMatrix.copy(R.projectionMatrix),pt(z,v,Q)};function pt(z,$,tt){tt===null?z.matrix.copy($.matrixWorld):(z.matrix.copy(tt.matrixWorld),z.matrix.invert(),z.matrix.multiply($.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy($.projectionMatrix),z.projectionMatrixInverse.copy($.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=ka*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let Et=null;function nt(z,$){if(u=$.getViewerPose(c||a),g=$,u!==null){const tt=u.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Q=!1;tt.length!==v.cameras.length&&(v.cameras.length=0,Q=!0);for(let Tt=0;Tt<tt.length;Tt++){const It=tt[Tt];let Kt=null;if(f!==null)Kt=f.getViewport(It);else{const se=h.getViewSubImage(d,It);Kt=se.viewport,Tt===0&&(t.setRenderTargetTextures(x,se.colorTexture,d.ignoreDepthValues?void 0:se.depthStencilTexture),t.setRenderTarget(x))}let Bt=y[Tt];Bt===void 0&&(Bt=new we,Bt.layers.enable(Tt),Bt.viewport=new de,y[Tt]=Bt),Bt.matrix.fromArray(It.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(It.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),Tt===0&&(v.matrix.copy(Bt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Q===!0&&v.cameras.push(Bt)}const xt=i.enabledFeatures;if(xt&&xt.includes("depth-sensing")){const Tt=h.getDepthInformation(tt[0]);Tt&&Tt.isValid&&Tt.texture&&_.init(t,Tt,i.renderState)}}for(let tt=0;tt<E.length;tt++){const Q=M[tt],xt=E[tt];Q!==null&&xt!==void 0&&xt.update(Q,$,c||a)}Et&&Et(z,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const at=new hc;at.setAnimationLoop(nt),this.setAnimationLoop=function(z){Et=z},this.dispose=function(){}}}const Kn=new an,zm=new ne;function Bm(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,oc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,E,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Te&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Te&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),E=x.envMap,M=x.envMapRotation;E&&(m.envMap.value=E,Kn.copy(M),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),m.envMapRotation.value.setFromMatrix4(zm.makeRotationFromEuler(Kn)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Te&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Gm(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,E){const M=E.program;n.uniformBlockBinding(x,M)}function c(x,E){let M=i[x.id];M===void 0&&(g(x),M=u(x),i[x.id]=M,x.addEventListener("dispose",m));const L=E.program;n.updateUBOMapping(x,L);const A=t.render.frame;r[x.id]!==A&&(d(x),r[x.id]=A)}function u(x){const E=h();x.__bindingPointIndex=E;const M=s.createBuffer(),L=x.__size,A=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,L,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,M),M}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const E=i[x.id],M=x.uniforms,L=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let A=0,R=M.length;A<R;A++){const P=Array.isArray(M[A])?M[A]:[M[A]];for(let y=0,v=P.length;y<v;y++){const T=P[y];if(f(T,A,y,L)===!0){const D=T.__offset,N=Array.isArray(T.value)?T.value:[T.value];let B=0;for(let W=0;W<N.length;W++){const X=N[W],K=_(X);typeof X=="number"||typeof X=="boolean"?(T.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,D+B,T.__data)):X.isMatrix3?(T.__data[0]=X.elements[0],T.__data[1]=X.elements[1],T.__data[2]=X.elements[2],T.__data[3]=0,T.__data[4]=X.elements[3],T.__data[5]=X.elements[4],T.__data[6]=X.elements[5],T.__data[7]=0,T.__data[8]=X.elements[6],T.__data[9]=X.elements[7],T.__data[10]=X.elements[8],T.__data[11]=0):(X.toArray(T.__data,B),B+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,T.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,E,M,L){const A=x.value,R=E+"_"+M;if(L[R]===void 0)return typeof A=="number"||typeof A=="boolean"?L[R]=A:L[R]=A.clone(),!0;{const P=L[R];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return L[R]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(x){const E=x.uniforms;let M=0;const L=16;for(let R=0,P=E.length;R<P;R++){const y=Array.isArray(E[R])?E[R]:[E[R]];for(let v=0,T=y.length;v<T;v++){const D=y[v],N=Array.isArray(D.value)?D.value:[D.value];for(let B=0,W=N.length;B<W;B++){const X=N[B],K=_(X),Y=M%L,lt=Y%K.boundary,pt=Y+lt;M+=lt,pt!==0&&L-pt<K.storage&&(M+=L-pt),D.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=K.storage}}}const A=M%L;return A>0&&(M+=L-A),x.__size=M,x.__cache={},this}function _(x){const E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),E}function m(x){const E=x.target;E.removeEventListener("dispose",m);const M=a.indexOf(E.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function p(){for(const x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class _c{constructor(t={}){const{canvas:e=Rh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const x=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pe,this.toneMapping=zn,this.toneMappingExposure=1;const M=this;let L=!1,A=0,R=0,P=null,y=-1,v=null;const T=new de,D=new de;let N=null;const B=new Vt(0);let W=0,X=e.width,K=e.height,Y=1,lt=null,pt=null;const Et=new de(0,0,X,K),nt=new de(0,0,X,K);let at=!1;const z=new to;let $=!1,tt=!1;const Q=new ne,xt=new ne,Tt=new I,It=new de,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function se(){return P===null?Y:1}let F=n;function ke(b,k){return e.getContext(b,k)}try{const b={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xa}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ut,!1),F===null){const k="webgl2";if(F=ke(k,b),F===null)throw ke(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Wt,Xt,Ct,le,At,w,S,G,J,et,j,bt,ht,mt,qt,st,gt,Lt,Nt,_t,Yt,Ft,re,U;function ct(){Wt=new qf(F),Wt.init(),Ft=new Im(F,Wt),Xt=new Gf(F,Wt,t,Ft),Ct=new Cm(F,Wt),Xt.reverseDepthBuffer&&d&&Ct.buffers.depth.setReversed(!0),le=new $f(F),At=new pm,w=new Lm(F,Wt,Ct,At,Xt,Ft,le),S=new Vf(M),G=new Yf(M),J=new nu(F),re=new zf(F,J),et=new jf(F,J,le,re),j=new Zf(F,et,J,le),Nt=new Jf(F,Xt,w),st=new Hf(At),bt=new fm(M,S,G,Wt,Xt,re,st),ht=new Bm(M,At),mt=new gm,qt=new ym(Wt),Lt=new Ff(M,S,G,Ct,j,f,l),gt=new Am(M,j,Xt),U=new Gm(F,le,Xt,Ct),_t=new Bf(F,Wt,le),Yt=new Kf(F,Wt,le),le.programs=bt.programs,M.capabilities=Xt,M.extensions=Wt,M.properties=At,M.renderLists=mt,M.shadowMap=gt,M.state=Ct,M.info=le}ct();const q=new Fm(M,F);this.xr=q,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=Wt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Wt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(X,K,!1))},this.getSize=function(b){return b.set(X,K)},this.setSize=function(b,k,H=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,K=k,e.width=Math.floor(b*Y),e.height=Math.floor(k*Y),H===!0&&(e.style.width=b+"px",e.style.height=k+"px"),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(X*Y,K*Y).floor()},this.setDrawingBufferSize=function(b,k,H){X=b,K=k,Y=H,e.width=Math.floor(b*H),e.height=Math.floor(k*H),this.setViewport(0,0,b,k)},this.getCurrentViewport=function(b){return b.copy(T)},this.getViewport=function(b){return b.copy(Et)},this.setViewport=function(b,k,H,V){b.isVector4?Et.set(b.x,b.y,b.z,b.w):Et.set(b,k,H,V),Ct.viewport(T.copy(Et).multiplyScalar(Y).round())},this.getScissor=function(b){return b.copy(nt)},this.setScissor=function(b,k,H,V){b.isVector4?nt.set(b.x,b.y,b.z,b.w):nt.set(b,k,H,V),Ct.scissor(D.copy(nt).multiplyScalar(Y).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(b){Ct.setScissorTest(at=b)},this.setOpaqueSort=function(b){lt=b},this.setTransparentSort=function(b){pt=b},this.getClearColor=function(b){return b.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(b=!0,k=!0,H=!0){let V=0;if(b){let O=!1;if(P!==null){const rt=P.texture.format;O=rt===Qa||rt===Za||rt===Ja}if(O){const rt=P.texture.type,dt=rt===Sn||rt===ni||rt===as||rt===Ci||rt===ja||rt===Ka,Mt=Lt.getClearColor(),St=Lt.getClearAlpha(),Dt=Mt.r,kt=Mt.g,yt=Mt.b;dt?(g[0]=Dt,g[1]=kt,g[2]=yt,g[3]=St,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=Dt,_[1]=kt,_[2]=yt,_[3]=St,F.clearBufferiv(F.COLOR,0,_))}else V|=F.COLOR_BUFFER_BIT}k&&(V|=F.DEPTH_BUFFER_BIT),H&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),mt.dispose(),qt.dispose(),At.dispose(),S.dispose(),G.dispose(),j.dispose(),re.dispose(),U.dispose(),bt.dispose(),q.dispose(),q.removeEventListener("sessionstart",ho),q.removeEventListener("sessionend",uo),Vn.stop()};function Z(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const b=le.autoReset,k=gt.enabled,H=gt.autoUpdate,V=gt.needsUpdate,O=gt.type;ct(),le.autoReset=b,gt.enabled=k,gt.autoUpdate=H,gt.needsUpdate=V,gt.type=O}function ut(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ut(b){const k=b.target;k.removeEventListener("dispose",Ut),ue(k)}function ue(b){Me(b),At.remove(b)}function Me(b){const k=At.get(b).programs;k!==void 0&&(k.forEach(function(H){bt.releaseProgram(H)}),b.isShaderMaterial&&bt.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,H,V,O,rt){k===null&&(k=Kt);const dt=O.isMesh&&O.matrixWorld.determinant()<0,Mt=Fc(b,k,H,V,O);Ct.setMaterial(V,dt);let St=H.index,Dt=1;if(V.wireframe===!0){if(St=et.getWireframeAttribute(H),St===void 0)return;Dt=2}const kt=H.drawRange,yt=H.attributes.position;let $t=kt.start*Dt,ae=(kt.start+kt.count)*Dt;rt!==null&&($t=Math.max($t,rt.start*Dt),ae=Math.min(ae,(rt.start+rt.count)*Dt)),St!==null?($t=Math.max($t,0),ae=Math.min(ae,St.count)):yt!=null&&($t=Math.max($t,0),ae=Math.min(ae,yt.count));const ce=ae-$t;if(ce<0||ce===1/0)return;re.setup(O,V,Mt,H,St);let Re,Zt=_t;if(St!==null&&(Re=J.get(St),Zt=Yt,Zt.setIndex(Re)),O.isMesh)V.wireframe===!0?(Ct.setLineWidth(V.wireframeLinewidth*se()),Zt.setMode(F.LINES)):Zt.setMode(F.TRIANGLES);else if(O.isLine){let wt=V.linewidth;wt===void 0&&(wt=1),Ct.setLineWidth(wt*se()),O.isLineSegments?Zt.setMode(F.LINES):O.isLineLoop?Zt.setMode(F.LINE_LOOP):Zt.setMode(F.LINE_STRIP)}else O.isPoints?Zt.setMode(F.POINTS):O.isSprite&&Zt.setMode(F.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Zt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const wt=O._multiDrawStarts,hn=O._multiDrawCounts,Qt=O._multiDrawCount,Xe=St?J.get(St).bytesPerElement:1,ri=At.get(V).currentProgram.getUniforms();for(let Le=0;Le<Qt;Le++)ri.setValue(F,"_gl_DrawID",Le),Zt.render(wt[Le]/Xe,hn[Le])}else if(O.isInstancedMesh)Zt.renderInstances($t,ce,O.count);else if(H.isInstancedBufferGeometry){const wt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,hn=Math.min(H.instanceCount,wt);Zt.renderInstances($t,ce,hn)}else Zt.render($t,ce)};function te(b,k,H){b.transparent===!0&&b.side===Ge&&b.forceSinglePass===!1?(b.side=Te,b.needsUpdate=!0,ps(b,k,H),b.side=Bn,b.needsUpdate=!0,ps(b,k,H),b.side=Ge):ps(b,k,H)}this.compile=function(b,k,H=null){H===null&&(H=b),p=qt.get(H),p.init(k),E.push(p),H.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),b!==H&&b.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const V=new Set;return b.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const rt=O.material;if(rt)if(Array.isArray(rt))for(let dt=0;dt<rt.length;dt++){const Mt=rt[dt];te(Mt,H,O),V.add(Mt)}else te(rt,H,O),V.add(rt)}),E.pop(),p=null,V},this.compileAsync=function(b,k,H=null){const V=this.compile(b,k,H);return new Promise(O=>{function rt(){if(V.forEach(function(dt){At.get(dt).currentProgram.isReady()&&V.delete(dt)}),V.size===0){O(b);return}setTimeout(rt,10)}Wt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let We=null;function cn(b){We&&We(b)}function ho(){Vn.stop()}function uo(){Vn.start()}const Vn=new hc;Vn.setAnimationLoop(cn),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(b){We=b,q.setAnimationLoop(b),b===null?Vn.stop():Vn.start()},q.addEventListener("sessionstart",ho),q.addEventListener("sessionend",uo),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(k),k=q.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,k,P),p=qt.get(b,E.length),p.init(k),E.push(p),xt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),z.setFromProjectionMatrix(xt),tt=this.localClippingEnabled,$=st.init(this.clippingPlanes,tt),m=mt.get(b,x.length),m.init(),x.push(m),q.enabled===!0&&q.isPresenting===!0){const rt=M.xr.getDepthSensingMesh();rt!==null&&or(rt,k,-1/0,M.sortObjects)}or(b,k,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(lt,pt),Bt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Bt&&Lt.addToRenderList(m,b),this.info.render.frame++,$===!0&&st.beginShadows();const H=p.state.shadowsArray;gt.render(H,b,k),$===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,O=m.transmissive;if(p.setupLights(),k.isArrayCamera){const rt=k.cameras;if(O.length>0)for(let dt=0,Mt=rt.length;dt<Mt;dt++){const St=rt[dt];po(V,O,b,St)}Bt&&Lt.render(b);for(let dt=0,Mt=rt.length;dt<Mt;dt++){const St=rt[dt];fo(m,b,St,St.viewport)}}else O.length>0&&po(V,O,b,k),Bt&&Lt.render(b),fo(m,b,k);P!==null&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(M,b,k),re.resetDefaultState(),y=-1,v=null,E.pop(),E.length>0?(p=E[E.length-1],$===!0&&st.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function or(b,k,H,V){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||z.intersectsSprite(b)){V&&It.setFromMatrixPosition(b.matrixWorld).applyMatrix4(xt);const dt=j.update(b),Mt=b.material;Mt.visible&&m.push(b,dt,Mt,H,It.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||z.intersectsObject(b))){const dt=j.update(b),Mt=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),It.copy(b.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),It.copy(dt.boundingSphere.center)),It.applyMatrix4(b.matrixWorld).applyMatrix4(xt)),Array.isArray(Mt)){const St=dt.groups;for(let Dt=0,kt=St.length;Dt<kt;Dt++){const yt=St[Dt],$t=Mt[yt.materialIndex];$t&&$t.visible&&m.push(b,dt,$t,H,It.z,yt)}}else Mt.visible&&m.push(b,dt,Mt,H,It.z,null)}}const rt=b.children;for(let dt=0,Mt=rt.length;dt<Mt;dt++)or(rt[dt],k,H,V)}function fo(b,k,H,V){const O=b.opaque,rt=b.transmissive,dt=b.transparent;p.setupLightsView(H),$===!0&&st.setGlobalState(M.clippingPlanes,H),V&&Ct.viewport(T.copy(V)),O.length>0&&fs(O,k,H),rt.length>0&&fs(rt,k,H),dt.length>0&&fs(dt,k,H),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function po(b,k,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Gn(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?ls:Sn,minFilter:ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const rt=p.state.transmissionRenderTarget[V.id],dt=V.viewport||T;rt.setSize(dt.z,dt.w);const Mt=M.getRenderTarget();M.setRenderTarget(rt),M.getClearColor(B),W=M.getClearAlpha(),W<1&&M.setClearColor(16777215,.5),M.clear(),Bt&&Lt.render(H);const St=M.toneMapping;M.toneMapping=zn;const Dt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),$===!0&&st.setGlobalState(M.clippingPlanes,V),fs(b,H,V),w.updateMultisampleRenderTarget(rt),w.updateRenderTargetMipmap(rt),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let yt=0,$t=k.length;yt<$t;yt++){const ae=k[yt],ce=ae.object,Re=ae.geometry,Zt=ae.material,wt=ae.group;if(Zt.side===Ge&&ce.layers.test(V.layers)){const hn=Zt.side;Zt.side=Te,Zt.needsUpdate=!0,mo(ce,H,V,Re,Zt,wt),Zt.side=hn,Zt.needsUpdate=!0,kt=!0}}kt===!0&&(w.updateMultisampleRenderTarget(rt),w.updateRenderTargetMipmap(rt))}M.setRenderTarget(Mt),M.setClearColor(B,W),Dt!==void 0&&(V.viewport=Dt),M.toneMapping=St}function fs(b,k,H){const V=k.isScene===!0?k.overrideMaterial:null;for(let O=0,rt=b.length;O<rt;O++){const dt=b[O],Mt=dt.object,St=dt.geometry,Dt=V===null?dt.material:V,kt=dt.group;Mt.layers.test(H.layers)&&mo(Mt,k,H,St,Dt,kt)}}function mo(b,k,H,V,O,rt){b.onBeforeRender(M,k,H,V,O,rt),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(M,k,H,V,b,rt),O.transparent===!0&&O.side===Ge&&O.forceSinglePass===!1?(O.side=Te,O.needsUpdate=!0,M.renderBufferDirect(H,k,V,O,b,rt),O.side=Bn,O.needsUpdate=!0,M.renderBufferDirect(H,k,V,O,b,rt),O.side=Ge):M.renderBufferDirect(H,k,V,O,b,rt),b.onAfterRender(M,k,H,V,O,rt)}function ps(b,k,H){k.isScene!==!0&&(k=Kt);const V=At.get(b),O=p.state.lights,rt=p.state.shadowsArray,dt=O.state.version,Mt=bt.getParameters(b,O.state,rt,k,H),St=bt.getProgramCacheKey(Mt);let Dt=V.programs;V.environment=b.isMeshStandardMaterial?k.environment:null,V.fog=k.fog,V.envMap=(b.isMeshStandardMaterial?G:S).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Dt===void 0&&(b.addEventListener("dispose",Ut),Dt=new Map,V.programs=Dt);let kt=Dt.get(St);if(kt!==void 0){if(V.currentProgram===kt&&V.lightsStateVersion===dt)return _o(b,Mt),kt}else Mt.uniforms=bt.getUniforms(b),b.onBeforeCompile(Mt,M),kt=bt.acquireProgram(Mt,St),Dt.set(St,kt),V.uniforms=Mt.uniforms;const yt=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(yt.clippingPlanes=st.uniform),_o(b,Mt),V.needsLights=Bc(b),V.lightsStateVersion=dt,V.needsLights&&(yt.ambientLightColor.value=O.state.ambient,yt.lightProbe.value=O.state.probe,yt.directionalLights.value=O.state.directional,yt.directionalLightShadows.value=O.state.directionalShadow,yt.spotLights.value=O.state.spot,yt.spotLightShadows.value=O.state.spotShadow,yt.rectAreaLights.value=O.state.rectArea,yt.ltc_1.value=O.state.rectAreaLTC1,yt.ltc_2.value=O.state.rectAreaLTC2,yt.pointLights.value=O.state.point,yt.pointLightShadows.value=O.state.pointShadow,yt.hemisphereLights.value=O.state.hemi,yt.directionalShadowMap.value=O.state.directionalShadowMap,yt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,yt.spotShadowMap.value=O.state.spotShadowMap,yt.spotLightMatrix.value=O.state.spotLightMatrix,yt.spotLightMap.value=O.state.spotLightMap,yt.pointShadowMap.value=O.state.pointShadowMap,yt.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=kt,V.uniformsList=null,kt}function go(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=js.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function _o(b,k){const H=At.get(b);H.outputColorSpace=k.outputColorSpace,H.batching=k.batching,H.batchingColor=k.batchingColor,H.instancing=k.instancing,H.instancingColor=k.instancingColor,H.instancingMorph=k.instancingMorph,H.skinning=k.skinning,H.morphTargets=k.morphTargets,H.morphNormals=k.morphNormals,H.morphColors=k.morphColors,H.morphTargetsCount=k.morphTargetsCount,H.numClippingPlanes=k.numClippingPlanes,H.numIntersection=k.numClipIntersection,H.vertexAlphas=k.vertexAlphas,H.vertexTangents=k.vertexTangents,H.toneMapping=k.toneMapping}function Fc(b,k,H,V,O){k.isScene!==!0&&(k=Kt),w.resetTextureUnits();const rt=k.fog,dt=V.isMeshStandardMaterial?k.environment:null,Mt=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ui,St=(V.isMeshStandardMaterial?G:S).get(V.envMap||dt),Dt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,kt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),yt=!!H.morphAttributes.position,$t=!!H.morphAttributes.normal,ae=!!H.morphAttributes.color;let ce=zn;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ce=M.toneMapping);const Re=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Zt=Re!==void 0?Re.length:0,wt=At.get(V),hn=p.state.lights;if($===!0&&(tt===!0||b!==v)){const Oe=b===v&&V.id===y;st.setState(V,b,Oe)}let Qt=!1;V.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==hn.state.version||wt.outputColorSpace!==Mt||O.isBatchedMesh&&wt.batching===!1||!O.isBatchedMesh&&wt.batching===!0||O.isBatchedMesh&&wt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&wt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&wt.instancing===!1||!O.isInstancedMesh&&wt.instancing===!0||O.isSkinnedMesh&&wt.skinning===!1||!O.isSkinnedMesh&&wt.skinning===!0||O.isInstancedMesh&&wt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&wt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&wt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&wt.instancingMorph===!1&&O.morphTexture!==null||wt.envMap!==St||V.fog===!0&&wt.fog!==rt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==st.numPlanes||wt.numIntersection!==st.numIntersection)||wt.vertexAlphas!==Dt||wt.vertexTangents!==kt||wt.morphTargets!==yt||wt.morphNormals!==$t||wt.morphColors!==ae||wt.toneMapping!==ce||wt.morphTargetsCount!==Zt)&&(Qt=!0):(Qt=!0,wt.__version=V.version);let Xe=wt.currentProgram;Qt===!0&&(Xe=ps(V,k,O));let ri=!1,Le=!1,Bi=!1;const he=Xe.getUniforms(),Qe=wt.uniforms;if(Ct.useProgram(Xe.program)&&(ri=!0,Le=!0,Bi=!0),V.id!==y&&(y=V.id,Le=!0),ri||v!==b){Ct.buffers.depth.getReversed()?(Q.copy(b.projectionMatrix),Ph(Q),Lh(Q),he.setValue(F,"projectionMatrix",Q)):he.setValue(F,"projectionMatrix",b.projectionMatrix),he.setValue(F,"viewMatrix",b.matrixWorldInverse);const yn=he.map.cameraPosition;yn!==void 0&&yn.setValue(F,Tt.setFromMatrixPosition(b.matrixWorld)),Xt.logarithmicDepthBuffer&&he.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&he.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),v!==b&&(v=b,Le=!0,Bi=!0)}if(O.isSkinnedMesh){he.setOptional(F,O,"bindMatrix"),he.setOptional(F,O,"bindMatrixInverse");const Oe=O.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),he.setValue(F,"boneTexture",Oe.boneTexture,w))}O.isBatchedMesh&&(he.setOptional(F,O,"batchingTexture"),he.setValue(F,"batchingTexture",O._matricesTexture,w),he.setOptional(F,O,"batchingIdTexture"),he.setValue(F,"batchingIdTexture",O._indirectTexture,w),he.setOptional(F,O,"batchingColorTexture"),O._colorsTexture!==null&&he.setValue(F,"batchingColorTexture",O._colorsTexture,w));const Gi=H.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&Nt.update(O,H,Xe),(Le||wt.receiveShadow!==O.receiveShadow)&&(wt.receiveShadow=O.receiveShadow,he.setValue(F,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Qe.envMap.value=St,Qe.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&k.environment!==null&&(Qe.envMapIntensity.value=k.environmentIntensity),Le&&(he.setValue(F,"toneMappingExposure",M.toneMappingExposure),wt.needsLights&&zc(Qe,Bi),rt&&V.fog===!0&&ht.refreshFogUniforms(Qe,rt),ht.refreshMaterialUniforms(Qe,V,Y,K,p.state.transmissionRenderTarget[b.id]),js.upload(F,go(wt),Qe,w)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(js.upload(F,go(wt),Qe,w),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&he.setValue(F,"center",O.center),he.setValue(F,"modelViewMatrix",O.modelViewMatrix),he.setValue(F,"normalMatrix",O.normalMatrix),he.setValue(F,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Oe=V.uniformsGroups;for(let yn=0,En=Oe.length;yn<En;yn++){const vo=Oe[yn];U.update(vo,Xe),U.bind(vo,Xe)}}return Xe}function zc(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function Bc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,k,H){At.get(b.texture).__webglTexture=k,At.get(b.depthTexture).__webglTexture=H;const V=At.get(b);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,k){const H=At.get(b);H.__webglFramebuffer=k,H.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(b,k=0,H=0){P=b,A=k,R=H;let V=!0,O=null,rt=!1,dt=!1;if(b){const St=At.get(b);if(St.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(F.FRAMEBUFFER,null),V=!1;else if(St.__webglFramebuffer===void 0)w.setupRenderTarget(b);else if(St.__hasExternalTextures)w.rebindTextures(b,At.get(b.texture).__webglTexture,At.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const yt=b.depthTexture;if(St.__boundDepthTexture!==yt){if(yt!==null&&At.has(yt)&&(b.width!==yt.image.width||b.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(b)}}const Dt=b.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(dt=!0);const kt=At.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(kt[k])?O=kt[k][H]:O=kt[k],rt=!0):b.samples>0&&w.useMultisampledRTT(b)===!1?O=At.get(b).__webglMultisampledFramebuffer:Array.isArray(kt)?O=kt[H]:O=kt,T.copy(b.viewport),D.copy(b.scissor),N=b.scissorTest}else T.copy(Et).multiplyScalar(Y).floor(),D.copy(nt).multiplyScalar(Y).floor(),N=at;if(Ct.bindFramebuffer(F.FRAMEBUFFER,O)&&V&&Ct.drawBuffers(b,O),Ct.viewport(T),Ct.scissor(D),Ct.setScissorTest(N),rt){const St=At.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,St.__webglTexture,H)}else if(dt){const St=At.get(b.texture),Dt=k||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,St.__webglTexture,H||0,Dt)}y=-1},this.readRenderTargetPixels=function(b,k,H,V,O,rt,dt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=At.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){Ct.bindFramebuffer(F.FRAMEBUFFER,Mt);try{const St=b.texture,Dt=St.format,kt=St.type;if(!Xt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-V&&H>=0&&H<=b.height-O&&F.readPixels(k,H,V,O,Ft.convert(Dt),Ft.convert(kt),rt)}finally{const St=P!==null?At.get(P).__webglFramebuffer:null;Ct.bindFramebuffer(F.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(b,k,H,V,O,rt,dt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=At.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){const St=b.texture,Dt=St.format,kt=St.type;if(!Xt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=b.width-V&&H>=0&&H<=b.height-O){Ct.bindFramebuffer(F.FRAMEBUFFER,Mt);const yt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,yt),F.bufferData(F.PIXEL_PACK_BUFFER,rt.byteLength,F.STREAM_READ),F.readPixels(k,H,V,O,Ft.convert(Dt),Ft.convert(kt),0);const $t=P!==null?At.get(P).__webglFramebuffer:null;Ct.bindFramebuffer(F.FRAMEBUFFER,$t);const ae=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Ch(F,ae,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,yt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,rt),F.deleteBuffer(yt),F.deleteSync(ae),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,k=null,H=0){b.isTexture!==!0&&(Zi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1]);const V=Math.pow(2,-H),O=Math.floor(b.image.width*V),rt=Math.floor(b.image.height*V),dt=k!==null?k.x:0,Mt=k!==null?k.y:0;w.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,H,0,0,dt,Mt,O,rt),Ct.unbindTexture()},this.copyTextureToTexture=function(b,k,H=null,V=null,O=0){b.isTexture!==!0&&(Zi("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,b=arguments[1],k=arguments[2],O=arguments[3]||0,H=null);let rt,dt,Mt,St,Dt,kt,yt,$t,ae;const ce=b.isCompressedTexture?b.mipmaps[O]:b.image;H!==null?(rt=H.max.x-H.min.x,dt=H.max.y-H.min.y,Mt=H.isBox3?H.max.z-H.min.z:1,St=H.min.x,Dt=H.min.y,kt=H.isBox3?H.min.z:0):(rt=ce.width,dt=ce.height,Mt=ce.depth||1,St=0,Dt=0,kt=0),V!==null?(yt=V.x,$t=V.y,ae=V.z):(yt=0,$t=0,ae=0);const Re=Ft.convert(k.format),Zt=Ft.convert(k.type);let wt;k.isData3DTexture?(w.setTexture3D(k,0),wt=F.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(w.setTexture2DArray(k,0),wt=F.TEXTURE_2D_ARRAY):(w.setTexture2D(k,0),wt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);const hn=F.getParameter(F.UNPACK_ROW_LENGTH),Qt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Xe=F.getParameter(F.UNPACK_SKIP_PIXELS),ri=F.getParameter(F.UNPACK_SKIP_ROWS),Le=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ce.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ce.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,St),F.pixelStorei(F.UNPACK_SKIP_ROWS,Dt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,kt);const Bi=b.isDataArrayTexture||b.isData3DTexture,he=k.isDataArrayTexture||k.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const Qe=At.get(b),Gi=At.get(k),Oe=At.get(Qe.__renderTarget),yn=At.get(Gi.__renderTarget);Ct.bindFramebuffer(F.READ_FRAMEBUFFER,Oe.__webglFramebuffer),Ct.bindFramebuffer(F.DRAW_FRAMEBUFFER,yn.__webglFramebuffer);for(let En=0;En<Mt;En++)Bi&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,At.get(b).__webglTexture,O,kt+En),b.isDepthTexture?(he&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,At.get(k).__webglTexture,O,ae+En),F.blitFramebuffer(St,Dt,rt,dt,yt,$t,rt,dt,F.DEPTH_BUFFER_BIT,F.NEAREST)):he?F.copyTexSubImage3D(wt,O,yt,$t,ae+En,St,Dt,rt,dt):F.copyTexSubImage2D(wt,O,yt,$t,ae+En,St,Dt,rt,dt);Ct.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else he?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(wt,O,yt,$t,ae,rt,dt,Mt,Re,Zt,ce.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(wt,O,yt,$t,ae,rt,dt,Mt,Re,ce.data):F.texSubImage3D(wt,O,yt,$t,ae,rt,dt,Mt,Re,Zt,ce):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,O,yt,$t,rt,dt,Re,Zt,ce.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,O,yt,$t,ce.width,ce.height,Re,ce.data):F.texSubImage2D(F.TEXTURE_2D,O,yt,$t,rt,dt,Re,Zt,ce);F.pixelStorei(F.UNPACK_ROW_LENGTH,hn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Qt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Xe),F.pixelStorei(F.UNPACK_SKIP_ROWS,ri),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Le),O===0&&k.generateMipmaps&&F.generateMipmap(wt),Ct.unbindTexture()},this.copyTextureToTexture3D=function(b,k,H=null,V=null,O=0){return b.isTexture!==!0&&(Zi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,b=arguments[2],k=arguments[3],O=arguments[4]||0),Zi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,k,H,V,O)},this.initRenderTarget=function(b){At.get(b).__webglFramebuffer===void 0&&w.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?w.setTextureCube(b,0):b.isData3DTexture?w.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?w.setTexture2DArray(b,0):w.setTexture2D(b,0),Ct.unbindTexture()},this.resetState=function(){A=0,R=0,P=null,Ct.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}class no{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Vt(t),this.near=e,this.far=n}clone(){return new no(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class vc extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Hm extends Ee{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Ue,u=Ue,h,d){super(null,a,o,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _l extends He{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Mi=new ne,vl=new ne,ks=[],xl=new si,Vm=new ne,qi=new it,ji=new hs;class Wm extends it{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _l(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Vm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new si),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Mi),xl.copy(t.boundingBox).applyMatrix4(Mi),this.boundingBox.union(xl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Mi),ji.copy(t.boundingSphere).applyMatrix4(Mi),this.boundingSphere.union(ji)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(qi.geometry=this.geometry,qi.material=this.material,qi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ji.copy(this.boundingSphere),ji.applyMatrix4(n),t.ray.intersectsSphere(ji)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Mi),vl.multiplyMatrices(n,Mi),qi.matrixWorld=vl,qi.raycast(t,ks);for(let a=0,o=ks.length;a<o;a++){const l=ks[a];l.instanceId=r,l.object=this,e.push(l)}ks.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new _l(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hm(new Float32Array(i*this.count),i,this.count,$a,sn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class rr extends Ee{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ln{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const u=n[i],d=n[i+1]-u,f=(a-u)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new vt:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,i=[],r=[],a=[],o=new I,l=new ne;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(xe(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(xe(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class io extends ln{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new vt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Xm extends io{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function so(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const Os=new I,Fr=new so,zr=new so,Br=new so;class xc extends ln{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%r]:(Os.subVectors(i[0],i[1]).add(i[0]),c=Os);const h=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(Os.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Os),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Fr.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,_,m),zr.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,_,m),Br.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Fr.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),zr.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Br.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Fr.calc(l),zr.calc(l),Br.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ml(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function Ym(s,t){const e=1-s;return e*e*t}function qm(s,t){return 2*(1-s)*s*t}function jm(s,t){return s*s*t}function es(s,t,e,n){return Ym(s,t)+qm(s,e)+jm(s,n)}function Km(s,t){const e=1-s;return e*e*e*t}function $m(s,t){const e=1-s;return 3*e*e*s*t}function Jm(s,t){return 3*(1-s)*s*s*t}function Zm(s,t){return s*s*s*t}function ns(s,t,e,n,i){return Km(s,t)+$m(s,e)+Jm(s,n)+Zm(s,i)}class Mc extends ln{constructor(t=new vt,e=new vt,n=new vt,i=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new vt){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ns(t,i.x,r.x,a.x,o.x),ns(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Qm extends ln{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ns(t,i.x,r.x,a.x,o.x),ns(t,i.y,r.y,a.y,o.y),ns(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Sc extends ln{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tg extends ln{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yc extends ln{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(es(t,i.x,r.x,a.x),es(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class eg extends ln{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(es(t,i.x,r.x,a.x),es(t,i.y,r.y,a.y),es(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ec extends ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(Ml(o,l.x,c.x,u.x,h.x),Ml(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new vt().fromArray(i))}return this}}var Sl=Object.freeze({__proto__:null,ArcCurve:Xm,CatmullRomCurve3:xc,CubicBezierCurve:Mc,CubicBezierCurve3:Qm,EllipseCurve:io,LineCurve:Sc,LineCurve3:tg,QuadraticBezierCurve:yc,QuadraticBezierCurve3:eg,SplineCurve:Ec});class ng extends ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Sl[i.type]().fromJSON(i))}return this}}class ig extends ng{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Sc(this.currentPoint.clone(),new vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new yc(this.currentPoint.clone(),new vt(t,e),new vt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new Mc(this.currentPoint.clone(),new vt(t,e),new vt(n,i),new vt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ec(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){const c=new io(t,e,n,i,r,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ro extends Ae{constructor(t=[new vt(0,-.5),new vt(.5,0),new vt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=xe(i,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/e,h=new I,d=new vt,f=new I,g=new I,_=new I;let m=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let x=0;x<=e;x++){const E=n+x*u*i,M=Math.sin(E),L=Math.cos(E);for(let A=0;A<=t.length-1;A++){h.x=t[A].x*M,h.y=t[A].y,h.z=t[A].x*L,a.push(h.x,h.y,h.z),d.x=x/e,d.y=A/(t.length-1),o.push(d.x,d.y);const R=l[3*A+0]*M,P=l[3*A+1],y=l[3*A+0]*L;c.push(R,P,y)}}for(let x=0;x<e;x++)for(let E=0;E<t.length-1;E++){const M=E+x*t.length,L=M,A=M+t.length,R=M+t.length+1,P=M+1;r.push(L,A,P),r.push(R,P,A)}this.setIndex(r),this.setAttribute("position",new ie(a,3)),this.setAttribute("uv",new ie(o,2)),this.setAttribute("normal",new ie(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ro(t.points,t.segments,t.phiStart,t.phiLength)}}class ao extends ro{constructor(t=1,e=1,n=4,i=8){const r=new ig;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new ao(t.radius,t.length,t.capSegments,t.radialSegments)}}class oo extends Ae{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new I,u=new vt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=n+h/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(o,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class rn extends Ae{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;x(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new ie(h,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(f,2));function x(){const M=new I,L=new I;let A=0;const R=(e-t)/n;for(let P=0;P<=r;P++){const y=[],v=P/r,T=v*(e-t)+t;for(let D=0;D<=i;D++){const N=D/i,B=N*l+o,W=Math.sin(B),X=Math.cos(B);L.x=T*W,L.y=-v*n+m,L.z=T*X,h.push(L.x,L.y,L.z),M.set(W,R,X).normalize(),d.push(M.x,M.y,M.z),f.push(N,1-v),y.push(g++)}_.push(y)}for(let P=0;P<i;P++)for(let y=0;y<r;y++){const v=_[y][P],T=_[y+1][P],D=_[y+1][P+1],N=_[y][P+1];(t>0||y!==0)&&(u.push(v,T,N),A+=3),(e>0||y!==r-1)&&(u.push(T,D,N),A+=3)}c.addGroup(p,A,0),p+=A}function E(M){const L=g,A=new vt,R=new I;let P=0;const y=M===!0?t:e,v=M===!0?1:-1;for(let D=1;D<=i;D++)h.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;const T=g;for(let D=0;D<=i;D++){const B=D/i*l+o,W=Math.cos(B),X=Math.sin(B);R.x=y*X,R.y=m*v,R.z=y*W,h.push(R.x,R.y,R.z),d.push(0,v,0),A.x=W*.5+.5,A.y=X*.5*v+.5,f.push(A.x,A.y),g++}for(let D=0;D<i;D++){const N=L+D,B=T+D;M===!0?u.push(B,B+1,N):u.push(B+1,B,N),P+=3}c.addGroup(p,P,M===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ii extends rn{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ii(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class lo extends Ae{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),u(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const E=new I,M=new I,L=new I;for(let A=0;A<e.length;A+=3)f(e[A+0],E),f(e[A+1],M),f(e[A+2],L),l(E,M,L,x)}function l(x,E,M,L){const A=L+1,R=[];for(let P=0;P<=A;P++){R[P]=[];const y=x.clone().lerp(M,P/A),v=E.clone().lerp(M,P/A),T=A-P;for(let D=0;D<=T;D++)D===0&&P===A?R[P][D]=y:R[P][D]=y.clone().lerp(v,D/T)}for(let P=0;P<A;P++)for(let y=0;y<2*(A-P)-1;y++){const v=Math.floor(y/2);y%2===0?(d(R[P][v+1]),d(R[P+1][v]),d(R[P][v])):(d(R[P][v+1]),d(R[P+1][v+1]),d(R[P+1][v]))}}function c(x){const E=new I;for(let M=0;M<r.length;M+=3)E.x=r[M+0],E.y=r[M+1],E.z=r[M+2],E.normalize().multiplyScalar(x),r[M+0]=E.x,r[M+1]=E.y,r[M+2]=E.z}function u(){const x=new I;for(let E=0;E<r.length;E+=3){x.x=r[E+0],x.y=r[E+1],x.z=r[E+2];const M=m(x)/2/Math.PI+.5,L=p(x)/Math.PI+.5;a.push(M,1-L)}g(),h()}function h(){for(let x=0;x<a.length;x+=6){const E=a[x+0],M=a[x+2],L=a[x+4],A=Math.max(E,M,L),R=Math.min(E,M,L);A>.9&&R<.1&&(E<.2&&(a[x+0]+=1),M<.2&&(a[x+2]+=1),L<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,E){const M=x*3;E.x=t[M+0],E.y=t[M+1],E.z=t[M+2]}function g(){const x=new I,E=new I,M=new I,L=new I,A=new vt,R=new vt,P=new vt;for(let y=0,v=0;y<r.length;y+=9,v+=6){x.set(r[y+0],r[y+1],r[y+2]),E.set(r[y+3],r[y+4],r[y+5]),M.set(r[y+6],r[y+7],r[y+8]),A.set(a[v+0],a[v+1]),R.set(a[v+2],a[v+3]),P.set(a[v+4],a[v+5]),L.copy(x).add(E).add(M).divideScalar(3);const T=m(L);_(A,v+0,x,T),_(R,v+2,E,T),_(P,v+4,M,T)}}function _(x,E,M,L){L<0&&x.x===1&&(a[E]=x.x-1),M.x===0&&M.z===0&&(a[E]=L/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lo(t.vertices,t.indices,t.radius,t.details)}}class Zs extends lo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Zs(t.radius,t.detail)}}class Pe extends Ae{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new I,d=new I,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],E=p/n;let M=0;p===0&&a===0?M=.5/e:p===n&&l===Math.PI&&(M=-.5/e);for(let L=0;L<=e;L++){const A=L/e;h.x=-t*Math.cos(i+A*r)*Math.sin(a+E*o),h.y=t*Math.cos(a+E*o),h.z=t*Math.sin(i+A*r)*Math.sin(a+E*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(A+M,1-E),x.push(c++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const E=u[p][x+1],M=u[p][x],L=u[p+1][x],A=u[p+1][x+1];(p!==0||a>0)&&f.push(E,M,A),(p!==n-1||l<Math.PI)&&f.push(M,L,A)}this.setIndex(f),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ni extends Ae{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],u=new I,h=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),o.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,x=(i+1)*f+g;a.push(_,m,x),a.push(m,p,x)}this.setIndex(a),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ni(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Jt extends us{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zl,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class bc extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class wc extends bc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Gr=new ne,yl=new I,El=new I;class sg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new to,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;yl.setFromMatrixPosition(t.matrixWorld),e.position.copy(yl),El.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(El),e.updateMatrixWorld(),Gr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class rg extends sg{constructor(){super(new uc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tc extends bc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new rg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xa);const kn=[-360,-180,0,180],On=[0,180,360],Fs={residential:30,city:50,school:30,rural:70,highway:110},ts=(s,t)=>`n${s}${t}`;function ag(){const s=[];for(let t=0;t<kn.length;t++)for(let e=0;e<On.length;e++)s.push({id:ts(t,e),x:kn[t],z:On[e],control:"none",radius:10,minor:{}});return s}function og(){const s=ag(),t=Object.fromEntries(s.map(o=>[o.id,o])),e=[],n=(o,l,c={})=>{const u=t[o],h=t[l],d=u.x<=-180&&h.x<=-180,f=c.kind||(d?"residential":"city");e.push({id:`e_${o}_${l}`,from:o,to:l,lanesFwd:1,lanesBwd:1,laneWidth:3.5,median:0,limit:Fs[f],kind:f,zones:[],crossings:[],...c})};for(let o=0;o<On.length;o++)for(let l=0;l<kn.length-1;l++){const c=ts(l,o),u=ts(l+1,o);c==="n11"&&u==="n21"?n(c,u,{lanesFwd:1,lanesBwd:0,laneWidth:4,kind:"city",limit:40,oneway:!0}):n(c,u)}for(let o=0;o<kn.length;o++)for(let l=0;l<On.length-1;l++)n(ts(o,l),ts(o,l+1));e.find(o=>o.id==="e_n20_n30").crossings.push({id:"cx_city",s:90});const r=e.find(o=>o.id==="e_n21_n22");r.crossings.push({id:"cx_school",s:90,school:!0}),r.zones.push({from:25,to:150,limit:Fs.school,type:"school"});const a=(o,l,c={})=>{t[o].control=l,t[o].minor=c,l==="signal"&&(t[o].radius=12)};a("n01","priority",{e_n01_n11:"stop"}),a("n10","priority",{e_n10_n11:"stop"}),a("n11","priority",{e_n01_n11:"giveway"}),a("n12","priority",{e_n11_n12:"stop"}),a("n20","signal"),a("n21","signal"),a("n22","signal"),a("n31","signal");for(const o of["n00","n02","n30","n32"])t[o].radius=14;return s.push({id:"kEnd",x:-30,z:-1980,control:"end",radius:2,minor:{}}),e.push({id:"e_n20_kEnd",from:"n20",to:"kEnd",via:[{x:0,z:-500},{x:110,z:-760},{x:110,z:-1250},{x:-30,z:-1530}],fillet:260,lanesFwd:1,lanesBwd:1,laneWidth:3.5,median:0,limit:Fs.rural,kind:"rural",zones:[],crossings:[],slippery:[{from:1180,to:1300}]}),s.push({id:"hS",x:620,z:500,control:"end",radius:2,minor:{}}),s.push({id:"hN",x:620,z:-2900,control:"end",radius:2,minor:{}}),e.push({id:"e_hS_hN",from:"hS",to:"hN",via:[{x:620,z:-300},{x:720,z:-1100},{x:720,z:-1900},{x:620,z:-2500}],fillet:1200,lanesFwd:3,lanesBwd:3,laneWidth:3.6,median:3,limit:Fs.highway,kind:"highway",zones:[],crossings:[]}),{nodes:s,edges:e}}const De=3.6,wi=(s,t,e)=>s<t?t:s>e?e:s,lg=s=>{const t=wi(s,0,1);return t*t*(3-2*t)};function _n(s){for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;return s}function Qs(s,t){return Math.atan2(-s,-t)}function Di(s){return{x:-Math.sin(s),z:-Math.cos(s)}}function cg(s){return{x:Math.cos(s),z:-Math.sin(s)}}function bl(s,t,e,n,i){return{x:s,z:t,yaw:e,hl:n,hw:i}}function Fa(s){const t=Math.sin(s.yaw),e=Math.cos(s.yaw);return[{x:-t,z:-e},{x:e,z:-t}]}function wl(s,t,e){return s.hl*Math.abs(t[0].x*e.x+t[0].z*e.z)+s.hw*Math.abs(t[1].x*e.x+t[1].z*e.z)}function Tl(s,t){const e=Fa(s),n=Fa(t),i=t.x-s.x,r=t.z-s.z,a=[e[0],e[1],n[0],n[1]];for(const o of a)if(Math.abs(i*o.x+r*o.z)>wl(s,e,o)+wl(t,n,o))return!1;return!0}function hg(s,t,e,n){const i=Fa(s),r=t-s.x,a=e-s.z,o=r*i[0].x+a*i[0].z,l=r*i[1].x+a*i[1].z,c=wi(o,-s.hl,s.hl),u=wi(l,-s.hw,s.hw),h=o-c,d=l-u;return h*h+d*d<=n*n}function Dn(s,t,e,n,i){const r=Di(s),a=cg(s),o=n-t,l=i-e;return{fwd:o*r.x+l*r.z,right:o*a.x+l*a.z}}function os(s){let t=s>>>0;return function(){t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function ug(s,t,e,n,i,r,a,o){const l=(e-s)*(o-r)-(n-t)*(a-i);if(Math.abs(l)<1e-9)return!1;const c=((i-s)*(o-r)-(r-t)*(a-i))/l,u=((i-s)*(n-t)-(r-t)*(e-s))/l;return c>.02&&c<.98&&u>.02&&u<.98}function za(s,t){let e=0,n=s.length-1;if(t<=0)return 0;if(t>=s[n])return n-1;for(;n-e>1;){const i=e+n>>1;s[i]<=t?e=i:n=i}return e}const Pn=24,dg=3;function Hr(s,t){const e=new Float64Array(s.length);for(let n=1;n<s.length;n++)e[n]=e[n-1]+Math.hypot(s[n]-s[n-1],t[n]-t[n-1]);return e}function Al(s,t,e,n){const i=za(e,n),r=e[i+1]-e[i]||1,a=Math.min(1,Math.max(0,(n-e[i])/r)),o=(s[i+1]-s[i])/r,l=(t[i+1]-t[i])/r;return{x:s[i]+(s[i+1]-s[i])*a,z:t[i]+(t[i+1]-t[i])*a,dx:o,dz:l,i}}function zs(s,t,e,n,i,r=0,a=s.length-1){let o={dist2:1/0,s:0,d:0,i:0};for(let l=Math.max(0,r);l<Math.min(a,s.length-1);l++){const c=s[l],u=t[l],h=s[l+1]-c,d=t[l+1]-u,f=h*h+d*d||1e-9;let g=((n-c)*h+(i-u)*d)/f;g=g<0?0:g>1?1:g;const _=c+h*g,m=u+d*g,p=(n-_)**2+(i-m)**2;if(p<o.dist2){const x=Math.sqrt(f),E=d/x,M=-h/x;o={dist2:p,s:e[l]+g*x,d:(n-_)*E+(i-m)*M,i:l,tx:h/x,tz:d/x}}}return o.dist=Math.sqrt(o.dist2),o}function fg(s,t,e){const n=[],i=[],r=(l,c,u,h)=>{const d=Math.hypot(u-l,h-c),f=Math.max(1,Math.ceil(d/e));for(let g=n.length?1:0;g<=f;g++)n.push(l+(u-l)*g/f),i.push(c+(h-c)*g/f)};let a={x:s[0].x,z:s[0].z};for(let l=1;l<s.length-1;l++){const c=s[l],u=c.x-s[l-1].x,h=c.z-s[l-1].z,d=Math.hypot(u,h),f=s[l+1].x-c.x,g=s[l+1].z-c.z,_=Math.hypot(f,g),m={x:u/d,z:h/d},p={x:f/_,z:g/_},x=Math.acos(Math.max(-1,Math.min(1,m.x*p.x+m.z*p.z))),E=t*Math.tan(x/2),M={x:c.x-m.x*E,z:c.z-m.z*E},L={x:c.x+p.x*E,z:c.z+p.z*E};r(a.x,a.z,M.x,M.z);const A=m.x*p.z-m.z*p.x,R=A<0?m.z:-m.z,P=A<0?-m.x:m.x,y=M.x+R*t,v=M.z+P*t,T=Math.atan2(M.z-v,M.x-y);let N=Math.atan2(L.z-v,L.x-y)-T;for(;N>Math.PI;)N-=Math.PI*2;for(;N<-Math.PI;)N+=Math.PI*2;const B=Math.max(2,Math.ceil(Math.abs(N)*t/e));for(let W=1;W<=B;W++){const X=T+N*W/B;n.push(y+Math.cos(X)*t),i.push(v+Math.sin(X)*t)}a=L}const o=s[s.length-1];return r(a.x,a.z,o.x,o.z),{xs:n,zs:i}}class pg{constructor(t){this.nodes=new Map,this.edges=new Map,this.lanes=[],this.laneById=new Map,this.laneGrid=new Map,this.edgeGrid=new Map;for(const e of t.nodes)this.nodes.set(e.id,{...e,approaches:[],inLanes:[],outLanes:[],connectors:[],reservations:new Map});for(const e of t.edges)this._buildEdge(e);for(const e of this.edges.values())this._buildEdgeLanes(e);for(const e of this.nodes.values())this._buildNode(e);for(const e of this.lanes)this._indexLane(e);for(const e of this.edges.values())this._indexEdge(e);for(const e of this.edges.values())this._buildMarkings(e);this._attachCrossings()}_buildEdge(t){const e=this.nodes.get(t.from),n=this.nodes.get(t.to);let i,r;if(t.via&&t.via.length&&t.fillet)({xs:i,zs:r}=fg([{x:e.x,z:e.z},...t.via,{x:n.x,z:n.z}],t.fillet,4));else if(t.via&&t.via.length){const d=[{x:e.x,z:e.z},...t.via,{x:n.x,z:n.z}].map(m=>new I(m.x,0,m.z)),f=new xc(d,!1,"centripetal"),g=Math.ceil(f.getLength()/4),_=f.getSpacedPoints(g);i=_.map(m=>m.x),r=_.map(m=>m.z)}else{const d=Math.hypot(n.x-e.x,n.z-e.z),f=Math.max(2,Math.ceil(d/4));i=[],r=[];for(let g=0;g<=f;g++)i.push(e.x+(n.x-e.x)*g/f),r.push(e.z+(n.z-e.z)*g/f)}const a=Hr(i,r),o=t.laneWidth,l=t.lanesFwd>0&&t.lanesBwd>0,c=l?t.median/2+t.lanesFwd*o:t.lanesFwd*o/2,u=l?t.median/2+t.lanesBwd*o:t.lanesFwd*o/2,h={...t,xs:Float64Array.from(i),zs:Float64Array.from(r),cum:a,length:a[a.length-1],rFrom:e.radius,rTo:n.radius,twoWay:l,leftHalf:c,rightHalf:u,lanes:{fwd:[],bwd:[]},centerMarks:[],curves:[],slippery:t.slippery||[]};this.edges.set(h.id,h)}edgePointAt(t,e){return Al(t.xs,t.zs,t.cum,e)}_buildEdgeLanes(t){const e=t.laneWidth,n=t.lanesFwd,i=t.lanesBwd;for(let a=0;a<n;a++){const o=i===0?(n/2-a-.5)*e:t.median/2+(n-a-.5)*e;t.lanes.fwd.push(this._makeLane(t,1,a,o))}for(let a=0;a<i;a++){const o=n===0?(i/2-a-.5)*e:t.median/2+(i-a-.5)*e;t.lanes.bwd.push(this._makeLane(t,-1,a,o))}const r=a=>{for(let o=0;o<a.length;o++)a[o].leftLane=a[o-1]||null,a[o].rightLane=a[o+1]||null};r(t.lanes.fwd),r(t.lanes.bwd)}_makeLane(t,e,n,i){const r=t.rFrom,a=t.length-t.rTo,o=[];for(let h=r;h<a;h+=dg)o.push(h);o.push(a),e<0&&o.reverse();const l=[],c=[];for(const h of o){const d=this.edgePointAt(t,h),f=d.dz,g=-d.dx,_=e>0?i:-i;l.push(d.x+f*_),c.push(d.z+g*_)}const u={id:`${t.id}:${e>0?"f":"b"}${n}`,edge:t,dir:e,index:n,offset:i,xs:Float64Array.from(l),zs:Float64Array.from(c),sc:Float64Array.from(o),cum:null,length:0,limit:t.limit,startNode:e>0?t.from:t.to,endNode:e>0?t.to:t.from,next:[],prev:[],isConnector:!1,crossings:[],approach:null};return u.cum=Hr(u.xs,u.zs),u.length=u.cum[u.cum.length-1],u.curv=this._curvature(u),this.lanes.push(u),this.laneById.set(u.id,u),u}_curvature(t){const e=t.xs.length,n=new Float32Array(e);for(let i=1;i<e-1;i++){const r=Math.atan2(t.zs[i]-t.zs[i-1],t.xs[i]-t.xs[i-1]);let o=Math.atan2(t.zs[i+1]-t.zs[i],t.xs[i+1]-t.xs[i])-r;for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;const l=(t.cum[i+1]-t.cum[i-1])/2||1;n[i]=Math.abs(o)/l}return n}_buildNode(t){for(const r of this.lanes)r.isConnector||(r.endNode===t.id&&t.inLanes.push(r),r.startNode===t.id&&t.outLanes.push(r));const e=new Map;for(const r of t.inLanes)e.has(r.edge.id)||e.set(r.edge.id,[]),e.get(r.edge.id).push(r);let n=0;for(const[r,a]of e){const o=a[0],l=o.xs.length,c=o.xs[l-1]-o.xs[l-2],u=o.zs[l-1]-o.zs[l-2],h=Math.hypot(c,u)||1;let d=t.control;d==="priority"&&(d=t.minor[r]||"priority");const f={node:t,edgeId:r,lanes:a,hx:c/h,hz:u/h,control:d,index:n++,demand:!1};for(const g of a)g.approach=f;t.approaches.push(f)}if(t.control==="end")return;for(const r of t.inLanes){const a=r.xs.length,o={x:r.xs[a-1],z:r.zs[a-1]},l=r.xs[a-1]-r.xs[a-2],c=r.zs[a-1]-r.zs[a-2],u=Math.hypot(l,c),h={x:l/u,z:c/u};for(const d of t.outLanes){if(d.edge.id===r.edge.id||r.approach.lanes.length>1&&d.index!==r.index)continue;const f={x:d.xs[0],z:d.zs[0]},g=d.xs[1]-d.xs[0],_=d.zs[1]-d.zs[0],m=Math.hypot(g,_),p={x:g/m,z:_/m},x=h.x*p.z-h.z*p.x;if(h.x*p.x+h.z*p.z<-.7)continue;const M=x<-.5?"L":x>.5?"R":"S";let L;if(Math.abs(x)<.1)L={x:(o.x+f.x)/2,z:(o.z+f.z)/2};else{const v=f.x-o.x,T=f.z-o.z;let D=(v*p.z-T*p.x)/x;D=Math.max(.5,D),L={x:o.x+h.x*D,z:o.z+h.z*D}}const A=[],R=[],P=12;for(let v=0;v<=P;v++){const T=v/P,D=(1-T)*(1-T),N=2*(1-T)*T,B=T*T;A.push(D*o.x+N*L.x+B*f.x),R.push(D*o.z+N*L.z+B*f.z)}const y={id:`${r.id}>${d.id}`,edge:null,dir:1,index:0,xs:Float64Array.from(A),zs:Float64Array.from(R),cum:null,length:0,limit:M==="S"?Math.min(r.limit,d.limit):20,startNode:t.id,endNode:t.id,node:t,next:[d],prev:[r],isConnector:!0,turn:M,fromLane:r,toLane:d,crossings:[],conflicts:new Set};y.cum=Hr(y.xs,y.zs),y.length=y.cum[y.cum.length-1],y.curv=this._curvature(y),r.next.push(y),d.prev.push(y),t.connectors.push(y),this.lanes.push(y),this.laneById.set(y.id,y)}}const i=t.connectors;for(let r=0;r<i.length;r++)for(let a=r+1;a<i.length;a++){const o=i[r],l=i[a];if(o.fromLane===l.fromLane)continue;let c=o.toLane===l.toLane;for(let u=0;!c&&u<o.xs.length-1;u++)for(let h=0;h<l.xs.length-1;h++)if(ug(o.xs[u],o.zs[u],o.xs[u+1],o.zs[u+1],l.xs[h],l.zs[h],l.xs[h+1],l.zs[h+1])){c=!0;break}c&&(o.conflicts.add(l),l.conflicts.add(o))}}_cellKey(t,e){return t*100003+e}_insert(t,e,n,i,r,a){const o=Math.floor(Math.min(e,i)/Pn),l=Math.floor(Math.max(e,i)/Pn),c=Math.floor(Math.min(n,r)/Pn),u=Math.floor(Math.max(n,r)/Pn);for(let h=o;h<=l;h++)for(let d=c;d<=u;d++){const f=this._cellKey(h,d);let g=t.get(f);g||t.set(f,g=[]),g.push(a)}}_query(t,e,n,i){const r=new Set,a=Math.floor((e-i)/Pn),o=Math.floor((e+i)/Pn),l=Math.floor((n-i)/Pn),c=Math.floor((n+i)/Pn);for(let u=a;u<=o;u++)for(let h=l;h<=c;h++){const d=t.get(this._cellKey(u,h));if(d)for(const f of d)r.add(f)}return r}_indexLane(t){for(let e=0;e<t.xs.length-1;e++)this._insert(this.laneGrid,t.xs[e],t.zs[e],t.xs[e+1],t.zs[e+1],t)}_indexEdge(t){for(let e=0;e<t.xs.length-1;e++)this._insert(this.edgeGrid,t.xs[e],t.zs[e],t.xs[e+1],t.zs[e+1],t)}_buildMarkings(t){if(!t.twoWay||t.median>0)return;const e=t.length,n=t.rFrom,i=e-t.rTo,r=[];t.curves=[];const a=t.kind==="rural"?60:22,o=this.nodes.get(t.from),l=this.nodes.get(t.to);if(o.control!=="end"&&r.push([n,n+a]),l.control!=="end"&&r.push([i-a,i]),t.kind==="rural"){let f=null,g=0;for(let _=n;_<=i;_+=10){const m=this.edgePointAt(t,Math.max(0,_-10)),p=this.edgePointAt(t,Math.min(e,_+10)),x=m.dx*p.dz-m.dz*p.dx,E=Math.asin(Math.max(-1,Math.min(1,x)))/20,M=Math.abs(E)>1/480;M&&f===null&&(f=_,g=0),M&&(g+=E),!M&&f!==null&&(r.push([f-60,_+60,g]),t.curves.push({from:f,to:_,sign:Math.sign(g)}),f=null)}f!==null&&r.push([f-60,i,g])}r.sort((d,f)=>d[0]-f[0]);const c=[];for(const d of r){const f=Math.max(n,d[0]),g=Math.min(i,d[1]),_=c[c.length-1];_&&f<=_.to+80?(_.to=Math.max(_.to,g),d[2]&&(_.curve=(_.curve||0)+d[2])):c.push({from:f,to:g,curve:d[2]||0})}const u=[];let h=n;for(const d of c)d.from>h&&u.push({from:h,to:d.from,type:"broken"}),u.push({from:d.from,to:d.to,type:"double",curve:d.curve}),h=d.to;h<i&&u.push({from:h,to:i,type:"broken"}),t.centerMarks=u}_attachCrossings(){this.crossings=[];for(const t of this.edges.values())for(const e of t.crossings){const n=this.edgePointAt(t,e.s),i={...e,edge:t,x:n.x,z:n.z,tx:n.dx,tz:n.dz,lx:n.dz,lz:-n.dx,halfRoad:Math.max(t.leftHalf,t.rightHalf),peds:[]};this.crossings.push(i);for(const r of[...t.lanes.fwd,...t.lanes.bwd])r.crossings.push({s:this.centerToLaneS(r,e.s),crossing:i})}}lanePointAt(t,e){return Al(t.xs,t.zs,t.cum,e)}laneCurvatureAt(t,e){const n=za(t.cum,e);return t.curv[n]||0}laneSToCenter(t,e){if(t.isConnector)return 0;const n=za(t.cum,e),i=t.cum[n+1]-t.cum[n]||1,r=(e-t.cum[n])/i;return t.sc[n]+(t.sc[n+1]-t.sc[n])*r}centerToLaneS(t,e){const n=t.sc.length,i=t.sc[n-1]>t.sc[0];let r=0,a=n-1;const o=u=>i?t.sc[u]:-t.sc[u],l=i?e:-e;if(l<=o(0))return 0;if(l>=o(a))return t.length;for(;a-r>1;){const u=r+a>>1;o(u)<=l?r=u:a=u}const c=(l-o(r))/(o(a)-o(r)||1);return t.cum[r]+(t.cum[a]-t.cum[r])*c}locateLane(t,e,n,i=5){const r=-Math.sin(n),a=-Math.cos(n);let o=null;for(const l of this._query(this.laneGrid,t,e,i)){const c=zs(l.xs,l.zs,l.cum,t,e);if(c.dist>i)continue;const u=c.tx*r+c.tz*a;if(u<.3)continue;const h=c.dist+(1-u)*4+(l.isConnector?.5:0);(!o||h<o.score)&&(o={lane:l,s:c.s,lat:c.d,dist:c.dist,align:u,score:h})}return o}locateEdge(t,e){let n=null;for(const i of this._query(this.edgeGrid,t,e,14)){const r=zs(i.xs,i.zs,i.cum,t,e),a=Math.max(i.leftHalf,i.rightHalf);r.dist>a+6||(!n||r.dist<n.dist)&&(n={edge:i,s:r.s,d:r.d,dist:r.dist,tx:r.tx,tz:r.tz,onRoad:r.d<=i.leftHalf+.3&&r.d>=-i.rightHalf-.3,inTrim:r.s>=i.rFrom&&r.s<=i.length-i.rTo})}return n}projectOnEdge(t,e,n){const i=zs(t.xs,t.zs,t.cum,e,n);return{s:i.s,d:i.d,dist:i.dist,tx:i.tx,tz:i.tz}}nodeAt(t,e,n=0){for(const i of this.nodes.values())if(i.control!=="end"&&Math.hypot(t-i.x,e-i.z)<i.radius+n)return i;return null}limitAt(t,e){for(const n of t.zones)if(e>=n.from&&e<=n.to)return n.limit;return t.limit}centerMarkAt(t,e){for(const n of t.centerMarks)if(e>=n.from&&e<=n.to)return n.type;return null}isSlippery(t,e){for(const n of t.slippery)if(e>=n.from&&e<=n.to)return!0;return!1}laneSpot(t,e,n,i=0){const r=this.edges.get(t),a=e>0?r.lanes.fwd:r.lanes.bwd,o=a[Math.min(i,a.length-1)],l=e>0?n:r.length-n,c=this.centerToLaneS(o,l),u=this.lanePointAt(o,c);return{lane:o,s:c,x:u.x,z:u.z,dx:u.dx,dz:u.dz}}distanceToRoad(t,e,n=30){let i=1/0;for(const r of this._query(this.edgeGrid,t,e,n)){const a=zs(r.xs,r.zs,r.cum,t,e),o=Math.max(r.leftHalf,r.rightHalf);i=Math.min(i,a.dist-o)}for(const r of this.nodes.values())r.control!=="end"&&(i=Math.min(i,Math.hypot(t-r.x,e-r.z)-r.radius-4));return i}}function zi(s,t){const e=document.createElement("canvas");return e.width=s,e.height=t,e}function ds(s,t=!0){const e=new rr(s);return e.colorSpace=pe,t&&(e.wrapS=rs,e.wrapT=rs),e.anisotropy=4,e}function mg(){const s=zi(256,256),t=s.getContext("2d");t.fillStyle="#5b6068",t.fillRect(0,0,256,256);const e=os(7);for(let n=0;n<5e3;n++){const i=70+Math.floor(e()*40);t.fillStyle=`rgba(${i},${i+3},${i+8},${.35+e()*.4})`,t.fillRect(e()*256,e()*256,1+e()*2,1+e()*2)}for(let n=0;n<6;n++)t.strokeStyle="rgba(40,42,48,0.25)",t.lineWidth=1+e()*2,t.beginPath(),t.moveTo(e()*256,e()*256),t.bezierCurveTo(e()*256,e()*256,e()*256,e()*256,e()*256,e()*256),t.stroke();return ds(s)}function gg(){const s=zi(256,256),t=s.getContext("2d");t.fillStyle="#6cbf55",t.fillRect(0,0,256,256);const e=os(11);for(let n=0;n<3500;n++){const i=95+e()*30,r=38+e()*16;t.fillStyle=`hsla(${i},50%,${r}%,0.5)`,t.fillRect(e()*256,e()*256,2,2+e()*3)}return ds(s)}function _g(){const s=zi(128,128),t=s.getContext("2d");t.fillStyle="#c9c3b6",t.fillRect(0,0,128,128),t.strokeStyle="#a9a294",t.lineWidth=2;for(let e=0;e<=128;e+=32)t.beginPath(),t.moveTo(e,0),t.lineTo(e,128),t.moveTo(0,e),t.lineTo(128,e),t.stroke();return ds(s)}function Rl(s="office"){const t=zi(128,256),e=t.getContext("2d");e.fillStyle="#ffffff",e.fillRect(0,0,128,256);const n=os(s==="office"?3:5);if(s==="office")for(let r=8;r<256;r+=24)for(let a=8;a<128;a+=30){const o=n()>.7;e.fillStyle=o?"#bfd9ee":"#6f8fae",e.fillRect(a,r,22,15)}else for(let r=6;r<128;r+=42){e.fillStyle="#7b8fa3",e.fillRect(r,20,30,40),e.fillRect(r,100,30,40),e.fillStyle="#9aa1a8",e.fillRect(r-2,170,36,80),e.strokeStyle="#80868c";for(let a=172;a<250;a+=6)e.beginPath(),e.moveTo(r-2,a),e.lineTo(r+34,a),e.stroke()}return ds(t)}function vg(){const s=zi(128,64),t=s.getContext("2d");return t.fillStyle="#ffffff",t.fillRect(0,0,128,64),t.fillStyle="#7c95ad",t.fillRect(14,18,24,22),t.fillRect(90,18,24,22),t.fillStyle="#8a5a3c",t.fillRect(54,20,20,44),ds(s,!1)}function xg(){const s=zi(4,256),t=s.getContext("2d"),e=t.createLinearGradient(0,0,0,256);e.addColorStop(0,"#3d8fe0"),e.addColorStop(.45,"#8cc8f5"),e.addColorStop(.62,"#d9f0ff"),e.addColorStop(1,"#eaf6ff"),t.fillStyle=e,t.fillRect(0,0,4,256);const n=new rr(s);return n.colorSpace=pe,n}class Ln{constructor(){this.pos=[],this.uv=[],this.idx=[]}quad(t,e,n,i,r,a,o,l){const c=this.pos.length/3;this.pos.push(t.x,t.y,t.z,e.x,e.y,e.z,n.x,n.y,n.z,i.x,i.y,i.z),this.uv.push(...r,...a,...o,...l),this.idx.push(c,c+1,c+2,c+1,c+3,c+2)}geometry(){const t=new Ae;return t.setAttribute("position",new ie(this.pos,3)),t.setAttribute("uv",new ie(this.uv,2)),t.setIndex(this.idx),t.computeVertexNormals(),t}}class Mg{constructor(t){this.net=t,this.group=new oe,this.colliders=[],this.road=new Ln,this.walk=new Ln,this.shoulder=new Ln,this.white=new Ln,this.yellow=new Ln,this.wall=new Ln,this.rail=new Ln,this.slick=new Ln}strip(t,e,n,i,r,a,o,l=2,c=6){if(i-n<.05)return;const u=Math.max(1,Math.ceil((i-n)/l));let h=null;for(let d=0;d<=u;d++){const f=n+(i-n)*d/u,g=this.net.edgePointAt(e,f),_=g.dz,m=-g.dx,p={x:g.x+_*(r+a/2),y:o,z:g.z+m*(r+a/2)},x={x:g.x+_*(r-a/2),y:o,z:g.z+m*(r-a/2)};h&&t.quad(h.a,h.b,p,x,[0,h.s/c],[a/c,h.s/c],[0,f/c],[a/c,f/c]),h={a:p,b:x,s:f}}}wallStrip(t,e,n,i,r,a,o,l=4){const c=Math.max(1,Math.ceil((i-n)/l));let u=null;for(let h=0;h<=c;h++){const d=n+(i-n)*h/c,f=this.net.edgePointAt(e,d),g=f.dz,_=-f.dx,m={x:f.x+g*(r+a/2),z:f.z+_*(r+a/2)},p={x:f.x+g*(r-a/2),z:f.z+_*(r-a/2)};if(u){const x=(A,R)=>({x:A.x,y:R,z:A.z});t.quad(x(u.L,o),x(u.R,o),x(m,o),x(p,o),[0,0],[1,0],[0,1],[1,1]),t.quad(x(u.L,0),x(u.L,o),x(m,0),x(m,o),[0,0],[0,1],[1,0],[1,1]),t.quad(x(u.R,o),x(u.R,0),x(p,o),x(p,0),[0,1],[0,0],[1,1],[1,0]);const E=(u.c.x+f.x)/2+g*r,M=(u.c.z+f.z)/2+_*r,L=Math.atan2(-f.dx,-f.dz);this.colliders.push({x:E,z:M,yaw:L,hl:(d-u.s)/2+.2,hw:a/2,kind:"barrier"})}u={L:m,R:p,s:d,c:{x:f.x,z:f.z}}}}build(){const t=this.net;for(const f of t.edges.values())this.buildEdge(f);for(const f of t.nodes.values())this.buildNode(f);const e=mg(),n=new Jt({map:e,color:16777215}),i=new it(this.road.geometry(),n);i.receiveShadow=!0,this.group.add(i);const r=_g(),a=new it(this.walk.geometry(),new Jt({map:r}));a.receiveShadow=!0,this.group.add(a);const o=new it(this.shoulder.geometry(),new Jt({color:11049596}));o.receiveShadow=!0,this.group.add(o);const l=f=>new Jt({color:f,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});this.group.add(new it(this.white.geometry(),l(16053488))),this.group.add(new it(this.yellow.geometry(),l(15909424)));const c=new it(this.slick.geometry(),new Jt({color:3818064,transparent:!0,opacity:.45,polygonOffset:!0,polygonOffsetFactor:-1}));this.group.add(c);const u=new it(this.wall.geometry(),new Jt({color:13224386,side:Ge}));u.castShadow=!0,u.receiveShadow=!0,this.group.add(u);const h=new it(this.rail.geometry(),new Jt({color:11187390,side:Ge}));h.castShadow=!0,this.group.add(h);const d=new Jt({map:e,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});for(const f of t.nodes.values()){if(f.control==="end")continue;const g=f.radius+1.5,_=new it(new oo(g,28),d);_.rotation.x=-Math.PI/2,_.position.set(f.x,.012,f.z),_.receiveShadow=!0,this.group.add(_)}return{group:this.group,colliders:this.colliders}}buildEdge(t){const e=t.length,n=t.rFrom,i=e-t.rTo,r=t.leftHalf,a=t.rightHalf;if(this.strip(this.road,t,n,i,(r-a)/2,r+a,.01,2,6),t.kind==="city"||t.kind==="residential"?(this.strip(this.walk,t,n+1.5,i-1.5,r+1.4,2.8,.14,4,3),this.strip(this.walk,t,n+1.5,i-1.5,-a-1.4,2.8,.14,4,3),this.strip(this.white,t,n+1.5,i-1.5,r+.05,.12,.02,4),this.strip(this.white,t,n+1.5,i-1.5,-a-.05,.12,.02,4)):(this.strip(this.shoulder,t,n,i,r+1.2,2.4,.005,4,4),this.strip(this.shoulder,t,n,i,-a-1.2,2.4,.005,4,4),this.strip(this.white,t,n,i,r-.25,.15,.02,4),this.strip(this.white,t,n,i,-a+.25,.15,.02,4)),t.twoWay&&t.median===0)for(const c of t.centerMarks)c.type==="double"?(this.strip(this.white,t,c.from,c.to,.16,.12,.02,2),this.strip(this.white,t,c.from,c.to,-.16,.12,.02,2)):this.dashes(t,c.from,c.to,0,.13,3,6);if(t.median>0){const c=t.median/2;this.wallStrip(this.wall,t,n,i,0,.6,.85),this.strip(this.yellow,t,n,i,c-.25,.15,.02,4),this.strip(this.yellow,t,n,i,-c+.25,.15,.02,4);for(let u=1;u<t.lanesFwd;u++)this.dashes(t,n,i,c+u*t.laneWidth,.15,4,8);for(let u=1;u<t.lanesBwd;u++)this.dashes(t,n,i,-(c+u*t.laneWidth),.15,4,8);this.wallStrip(this.rail,t,n,i,r+1.6,.25,.8),this.wallStrip(this.rail,t,n,i,-a-1.6,.25,.8)}else if(!t.twoWay&&t.lanesFwd>1)for(let c=1;c<t.lanesFwd;c++)this.dashes(t,n,i,r-c*t.laneWidth,.13,3,6);const l=(c,u)=>{const h=c.approaches.find(_=>_.edgeId===t.id&&_.lanes[0].dir===(u?1:-1));if(!h)return;const d=u?i-.4:n+.4,f=t.twoWay&&u?0:-a,g=t.twoWay?u?r:0:r;if(h.control==="signal"||h.control==="stop")this.strip(this.white,t,d-.25,d+.25,(f+g)/2,g-f,.021,1);else if(h.control==="giveway")for(let _=f+.3;_<g-.2;_+=.9)this.strip(this.white,t,d-.2,d+.2,_+.25,.5,.021,1)};l(this.net.nodes.get(t.to),!0),l(this.net.nodes.get(t.from),!1);for(const c of t.crossings){const u=Math.max(r,a);for(let h=-u+.4;h<u;h+=1)this.strip(this.white,t,c.s-1.6,c.s+1.6,h+.25,.5,.022,1)}for(const c of t.slippery)this.strip(this.slick,t,c.from,c.to,(r-a)/2,r+a-.6,.015,4)}dashes(t,e,n,i,r,a,o){for(let l=e+1;l<n-1;l+=o)this.strip(this.white,t,l,Math.min(l+a,n),i,r,.02,a)}buildNode(t){if(t.control==="end")for(const e of this.net.edges.values()){if(e.from!==t.id&&e.to!==t.id)continue;const i=e.to===t.id?e.length-4:4,r=this.net.edgePointAt(e,i),a=e.leftHalf+e.rightHalf+6,o=new it(new Ve(a,1.1,.6),new Jt({color:15328208})),l=Math.atan2(-r.dx,-r.dz);o.position.set(r.x,.55,r.z),o.rotation.y=l,o.castShadow=!0,this.group.add(o);for(let c=0;c<6;c++){const u=new it(new Ve(a/12,.3,.62),new on({color:13708075})),h=-a/2+a/6*c+a/24;u.position.set(r.x+Math.cos(l)*h,.8,r.z-Math.sin(l)*h),u.rotation.y=l,this.group.add(u)}this.colliders.push({x:r.x,z:r.z,yaw:l,hl:.3,hw:a/2,kind:"barrier"})}}}const is=256;function tn(s,t){const e=is/2;if(s.beginPath(),t==="octagon")for(let n=0;n<8;n++){const i=Math.PI/8+n*Math.PI/4,r=e+Math.cos(i)*124,a=e+Math.sin(i)*124;n===0?s.moveTo(r,a):s.lineTo(r,a)}else t==="triangle-down"?(s.moveTo(8,22),s.lineTo(248,22),s.lineTo(128,236)):t==="diamond"?(s.moveTo(e,4),s.lineTo(252,e),s.lineTo(e,252),s.lineTo(4,e)):t==="square-blue"?s.rect(10,10,236,236):s.arc(e,e,122,0,Math.PI*2);s.closePath()}function Bs(s,t,e,n,i="#fff"){s.fillStyle=i,s.font=`900 ${n}px "Arial Black", Arial, sans-serif`,s.textAlign="center",s.textBaseline="middle",s.fillText(t,is/2,e)}function Vr(s,t,e,n,i){s.fillStyle=i,s.beginPath(),s.roundRect(t-20*n,e-34*n,40*n,68*n,10*n),s.fill(),s.fillStyle="#ffffff",s.fillRect(t-14*n,e-20*n,28*n,12*n)}function Wr(s,t,e,n,i="#111"){s.fillStyle=i,s.strokeStyle=i,s.lineCap="round",s.beginPath(),s.arc(t,e-42*n,9*n,0,Math.PI*2),s.fill(),s.lineWidth=9*n,s.beginPath(),s.moveTo(t,e-30*n),s.lineTo(t-2*n,e),s.moveTo(t-2*n,e),s.lineTo(t-14*n,e+26*n),s.moveTo(t-2*n,e),s.lineTo(t+12*n,e+26*n),s.moveTo(t,e-24*n),s.lineTo(t-16*n,e-6*n),s.moveTo(t,e-24*n),s.lineTo(t+16*n,e-10*n),s.stroke()}const Sg={STOP:"octagon",GIVE_WAY:"triangle-down",SPEED_LIMIT:"circle",NO_ENTRY:"circle",NO_OVERTAKING:"circle",CURVE_LEFT:"diamond",CURVE_RIGHT:"diamond",SCHOOL:"diamond",SLIPPERY:"diamond",PED_CROSSING:"square-blue"};function Ac(s,t,e=!1){const n=document.createElement("canvas");n.width=is,n.height=is;const i=n.getContext("2d"),r=Sg[s]||"circle";if(e)return tn(i,r),i.fillStyle="#ffffff",i.fill(),n;const a=is/2;switch(s){case"STOP":tn(i,r),i.fillStyle="#ffffff",i.fill(),i.save(),i.translate(a,a),i.scale(.9,.9),i.translate(-a,-a),tn(i,r),i.fillStyle="#d0202a",i.fill(),i.restore(),Bs(i,"BERHENTI",a+2,40);break;case"GIVE_WAY":tn(i,r),i.fillStyle="#d0202a",i.fill(),i.beginPath(),i.moveTo(44,44),i.lineTo(212,44),i.lineTo(128,194),i.closePath(),i.fillStyle="#ffffff",i.fill(),Bs(i,"BERI",80,30,"#111"),Bs(i,"LALUAN",114,26,"#111");break;case"SPEED_LIMIT":tn(i,r),i.fillStyle="#d0202a",i.fill(),i.beginPath(),i.arc(a,a,96,0,Math.PI*2),i.fillStyle="#ffffff",i.fill(),Bs(i,String(t),a+4,String(t).length>2?86:104,"#111");break;case"NO_ENTRY":tn(i,r),i.fillStyle="#d0202a",i.fill(),i.fillStyle="#ffffff",i.fillRect(40,a-22,176,44);break;case"NO_OVERTAKING":tn(i,r),i.fillStyle="#d0202a",i.fill(),i.beginPath(),i.arc(a,a,96,0,Math.PI*2),i.fillStyle="#ffffff",i.fill(),Vr(i,a-32,a+6,1.1,"#d0202a"),Vr(i,a+32,a+6,1.1,"#111111");break;case"PED_CROSSING":tn(i,r),i.fillStyle="#1f5fbf",i.fill(),i.beginPath(),i.moveTo(a,34),i.lineTo(228,214),i.lineTo(28,214),i.closePath(),i.fillStyle="#ffffff",i.fill(),i.fillStyle="#111";for(let o=0;o<5;o++)i.fillRect(58+o*30,192,18,12);Wr(i,a,152,1.25);break;default:if(tn(i,"diamond"),i.fillStyle="#111",i.fill(),i.save(),i.translate(a,a),i.scale(.9,.9),i.translate(-a,-a),tn(i,"diamond"),i.fillStyle="#f7c600",i.fill(),i.restore(),i.strokeStyle="#111",i.fillStyle="#111",i.lineWidth=16,i.lineCap="round",s==="CURVE_LEFT"||s==="CURVE_RIGHT"){const o=s==="CURVE_LEFT"?-1:1;i.beginPath(),i.moveTo(a-o*10,196),i.lineTo(a-o*10,128),i.quadraticCurveTo(a-o*10,86,a+o*40,86),i.stroke(),i.beginPath(),i.moveTo(a+o*64,86),i.lineTo(a+o*34,60),i.lineTo(a+o*34,112),i.closePath(),i.fill()}else if(s==="SCHOOL")Wr(i,a-26,150,1.05),Wr(i,a+28,156,.85),i.fillRect(a-70,196,140,8);else if(s==="SLIPPERY"){Vr(i,a,104,.9,"#111"),i.lineWidth=7;for(const o of[-1,1])i.beginPath(),i.moveTo(a+o*14,150),i.bezierCurveTo(a+o*44,170,a-o*10,190,a+o*30,214),i.stroke()}}return n}const Mn=new Map,Xr=new Map;function Rt(s,t,e){const n=`b${s}|${t}|${e}`;return Mn.has(n)||Mn.set(n,new Ve(s,t,e)),Mn.get(n)}function $e(s,t,e,n=12){const i=`c${s}|${t}|${e}|${n}`;return Mn.has(i)||Mn.set(i,new rn(s,t,e,n)),Mn.get(i)}function ii(s,t=12,e=8){const n=`s${s}|${t}|${e}`;return Mn.has(n)||Mn.set(n,new Pe(s,t,e)),Mn.get(n)}function Pt(s,t={}){const e=`${s}|${JSON.stringify(t)}`;if(!Xr.has(e)){const n=t.basic?new on({color:s,...t.params||{}}):new Jt({color:s,...t.params||{}});Xr.set(e,n)}return Xr.get(e)}const Be={brakeOff:()=>Pt(7999504),brakeOn:()=>Pt(16722474,{basic:!0}),indOff:()=>Pt(9067024),indOn:()=>Pt(16756768,{basic:!0}),head:()=>Pt(16774872,{basic:!0})};function Ht(s,t,e=0,n=0,i=0,r=!0){const a=new it(s,t);return a.position.set(e,n,i),a.castShadow=r,a.receiveShadow=!1,a}function Yr(s,t,e,n,i){const r=$e(n,n,i,14),a=Pt(1908516),o=$e(n*.55,n*.55,i+.02,10),l=Pt(12173512);for(const c of e)for(const u of[-1,1]){const h=Ht(r,a,u*t,n,c,!1);h.rotation.z=Math.PI/2,s.add(h);const d=Ht(o,l,u*t,n,c,!1);d.rotation.z=Math.PI/2,s.add(d)}}function qr(s,t,e,n,i,r=.22){const a=Rt(r*1.6,r*.7,.06),o=Rt(r*.7,r*.6,.07),l={brake:[],indL:[],indR:[]};for(const c of[-1,1]){s.add(Ht(a,Be.head(),c*(t-r),e,n-.02,!1));const u=Ht(a,Be.brakeOff(),c*(t-r),e,i+.02,!1);s.add(u),l.brake.push(u);const h=Ht(o,Be.indOff(),c*(t-.05),e,n+.05,!1),d=Ht(o,Be.indOff(),c*(t-.05),e,i-.05,!1);s.add(h,d),(c<0?l.indL:l.indR).push(h,d)}return l}const Rc={car:{length:4.4,width:1.8,height:1.5},hatch:{length:3.9,width:1.72,height:1.55},motorcycle:{length:2,width:.8,height:1.5},lorry:{length:8.6,width:2.5,height:3.3},bus:{length:11,width:2.55,height:3.3}},Cl=[15265524,2896960,12597547,3043288,12174028,2002782,15905076,7032792,16742972,9117229];function Pl(s,t){const e=new oe,n=Rc[s],i=Pt(t),r=Pt(2767698);let a;if(s==="car"||s==="hatch"){const o=n.length,l=n.width,c=s==="car"?1.1:.85,u=s==="car"?.75:.2;e.add(Ht(Rt(l,.62,o),i,0,.62,0));const h=o-c-u,d=-o/2+c+h/2;e.add(Ht(Rt(l-.12,.55,h),r,0,1.2,d)),e.add(Ht(Rt(l-.1,.08,h-.3),i,0,1.5,d));for(const f of[-1,1])e.add(Ht(Rt(.06,.55,.12),i,f*(l/2-.08),1.2,d-h/2+.1));e.add(Ht(Rt(l+.02,.18,.12),Pt(3159098),0,.42,-o/2+.02)),e.add(Ht(Rt(l+.02,.18,.12),Pt(3159098),0,.42,o/2-.02)),Yr(e,l/2-.12,[-o/2+.8,o/2-.8],.33,.24),a=qr(e,l/2,.75,-o/2,o/2)}else if(s==="motorcycle"){e.add(Ht(Rt(.32,.4,1.4),i,0,.62,0)),e.add(Ht(Rt(.36,.2,.5),Pt(2236962),0,.88,.25));const o=$e(.3,.3,.12,12);for(const u of[-.7,.7]){const h=Ht(o,Pt(1908516),0,.3,u,!1);h.rotation.z=Math.PI/2,e.add(h)}const l=Pt([3832789,15158332,2600544,15965202][Math.floor(Math.random()*4)]);e.add(Ht(Rt(.42,.55,.3),l,0,1.2,.15)),e.add(Ht(ii(.17),Pt(16119285),0,1.6,.08)),e.add(Ht(Rt(.5,.06,.06),Pt(3355443),0,1.05,-.45)),a={brake:[],indL:[],indR:[]};const c=Ht(Rt(.18,.1,.05),Be.brakeOff(),0,.85,.72,!1);e.add(c),a.brake.push(c),e.add(Ht(Rt(.2,.14,.05),Be.head(),0,.95,-.72,!1))}else if(s==="lorry"){const o=n.length,l=n.width,c=Pt(t);e.add(Ht(Rt(l,2.2,2),c,0,1.55,-o/2+1)),e.add(Ht(Rt(l-.1,.8,.05),r,0,2.05,-o/2-.01)),e.add(Ht(Rt(l,2.6,o-2.3),Pt(14605010),0,1.95,-o/2+2.15+(o-2.3)/2)),e.add(Ht(Rt(l-.3,.3,o),Pt(2763306),0,.6,0)),Yr(e,l/2-.2,[-o/2+1.1,o/2-2.2,o/2-1],.48,.34),a=qr(e,l/2,.9,-o/2,o/2,.26),e.add(Ht(Rt(l,.12,.04),Pt(16763904,{basic:!0}),0,.5,o/2+.02,!1))}else if(s==="bus"){const o=n.length,l=n.width;e.add(Ht(Rt(l,2.6,o),i,0,1.75,0)),e.add(Ht(Rt(l+.02,.9,o-1.2),r,0,2.25,.3)),e.add(Ht(Rt(l-.2,1.1,.05),r,0,2.2,-o/2-.01)),e.add(Ht(Rt(l+.03,.25,o-.5),Pt(16777215),0,1.4,0)),Yr(e,l/2-.2,[-o/2+2.2,o/2-2.5],.5,.34),a=qr(e,l/2,.9,-o/2,o/2,.26)}return{group:e,lights:a,spec:n}}function yg(s,t,e,n){for(const i of s.brake)i.material=t?Be.brakeOn():Be.brakeOff();for(const i of s.indL)i.material=e?Be.indOn():Be.indOff();for(const i of s.indR)i.material=n?Be.indOn():Be.indOff()}function Eg(s){const t=new oe,e=[15158332,3447003,15844367,10181046,1752220,16777215],n=[15845797,13011550,9263675,14724222],i=s%3===0,r=i?.72:1,a=Pt(s%3===0?16777215:e[s%e.length]),o=Pt(i?2046858:3426654),l=Pt(n[s%n.length]),c=Rt(.14,.8,.16),u=new oe,h=new oe;return u.position.set(-.1,.85,0),h.position.set(.1,.85,0),u.add(Ht(c,o,0,-.4,0)),h.add(Ht(c,o,0,-.4,0)),t.add(u,h),t.add(Ht(Rt(.42,.6,.24),a,0,1.15,0)),t.add(Ht(ii(.16),l,0,1.62,0)),t.add(Ht(ii(.165,10,6),Pt(1776411),0,1.68,.03)),i&&t.add(Ht(Rt(.34,.4,.14),Pt(3049182),0,1.15,.18)),t.scale.setScalar(r),t.userData.legs=[u,h],t}const jr=new Map;function Ll(s,t,e){const n=`${s}|${t}|${e?1:0}`;if(!jr.has(n)){const i=new rr(Ac(s,t,e));i.colorSpace=pe,i.anisotropy=4,jr.set(n,i)}return jr.get(n)}function bg(s,t){return Ac(s,t).toDataURL("image/png")}class wg{constructor(t){this.net=t,this.signs=[],this.group=new oe,this.colliders=[],this._generate(),this._build()}_place(t,e,n,i,r,a={}){n=Math.max(1,Math.min(t.length-1,n));const o=this.net.edgePointAt(t,n),l=e>0?o.dx:-o.dx,c=e>0?o.dz:-o.dz,u=c,h=-l,d=e>0?t.leftHalf:t.rightHalf,f=t.kind==="city"||t.kind==="residential",g=a.rightSide?-1:1,m=(a.rightSide?e>0?t.rightHalf:t.leftHalf:d)+(f?1.6:2.2),p=o.x+u*m*g,x=o.z+h*m*g;this.signs.push({id:`sg${this.signs.length}`,type:i,value:r,x:p,z:x,yaw:Qs(l,c),tdx:l,tdz:c,edgeId:t.id,dir:e,sc:n,height:a.height||2.3,size:a.size||.95})}_generate(){const t=this.net;for(const e of t.edges.values()){const n=e.length,i=e.rFrom,r=n-e.rTo,a=[];e.lanesFwd>0&&a.push(1),e.lanesBwd>0&&a.push(-1);for(const o of a){const l=o>0?i+14:r-14;if(this._place(e,o,l,"SPEED_LIMIT",t.limitAt(e,l)),e.kind==="highway")for(let c=1e3;c<n-200;c+=1e3)this._place(e,o,o>0?c:n-c,"SPEED_LIMIT",e.limit,{size:1.3,height:2.6})}for(const o of e.zones)o.type==="school"&&(this._place(e,1,o.from-18,"SCHOOL"),this._place(e,-1,o.to+18,"SCHOOL")),this._place(e,1,o.from,"SPEED_LIMIT",o.limit),this._place(e,-1,o.to,"SPEED_LIMIT",o.limit),this._place(e,1,o.to+4,"SPEED_LIMIT",e.limit),this._place(e,-1,o.from-4,"SPEED_LIMIT",e.limit);for(const o of e.crossings)this._place(e,1,o.s-30,"PED_CROSSING"),this._place(e,-1,o.s+30,"PED_CROSSING");if(e.oneway&&(this._place(e,-1,r-1,"NO_ENTRY"),this._place(e,-1,r-1,"NO_ENTRY",null,{rightSide:!0})),e.kind==="rural"){for(const o of e.centerMarks)o.type!=="double"||o.from<=i+1||o.to>=r-1||(this._place(e,1,o.from+4,"NO_OVERTAKING"),this._place(e,-1,o.to-4,"NO_OVERTAKING"));for(const o of e.curves)this._place(e,1,o.from-70,o.sign<0?"CURVE_LEFT":"CURVE_RIGHT"),this._place(e,-1,o.to+70,o.sign<0?"CURVE_RIGHT":"CURVE_LEFT")}for(const o of e.slippery)this._place(e,1,o.from-50,"SLIPPERY"),this._place(e,-1,o.to+50,"SLIPPERY")}for(const e of t.nodes.values())for(const n of e.approaches){if(n.control!=="stop"&&n.control!=="giveway")continue;const i=t.edges.get(n.edgeId),r=n.lanes[0].dir,a=r>0?i.length-i.rTo-1.5:i.rFrom+1.5;this._place(i,r,a,n.control==="stop"?"STOP":"GIVE_WAY")}}_build(){const t=$e(.05,.05,1,8),e=Pt(10134445),n=new Ze(1,1);for(const i of this.signs){const r=new oe;r.position.set(i.x,0,i.z),r.rotation.y=i.yaw;const a=new it(t,e);a.scale.y=i.height,a.position.y=i.height/2,a.castShadow=!0,r.add(a);const o=new it(n,new on({map:Ll(i.type,i.value,!1),transparent:!0,alphaTest:.5,toneMapped:!1}));o.scale.setScalar(i.size),o.position.set(0,i.height+i.size/2-.1,.06),r.add(o);const l=new it(n,new Jt({map:Ll(i.type,i.value,!0),color:9212827,transparent:!0,alphaTest:.5}));l.scale.setScalar(i.size),l.rotation.y=Math.PI,l.position.set(0,i.height+i.size/2-.1,.04),r.add(l),this.group.add(r),i.anchor=new I(i.x,i.height+i.size/2-.1,i.z),this.colliders.push({x:i.x,z:i.z,yaw:0,hl:.12,hw:.12,kind:"pole"})}}}const Ki={minGreen:6,maxGreen:16,gap:2.5,yellow:3,allRed:2},$i={red:[Pt(4853776),Pt(16724016,{basic:!0})],yellow:[Pt(4864528),Pt(16760864,{basic:!0})],green:[Pt(997914),Pt(3211120,{basic:!0})]};class Tg{constructor(t){this.node=t,this.approaches=t.approaches,this.heads=[],this.reset()}reset(){this.current=0,this.phase="GREEN",this.timer=0,this.noDemandTime=0,this.redSince=this.approaches.map(()=>0)}stateFor(t){return t!==this.current?"red":this.phase==="GREEN"?"green":this.phase==="YELLOW"?"yellow":"red"}update(t){this.timer+=t;const e=this.approaches,n=e[this.current],i=e.some((r,a)=>a!==this.current&&r.demand);if(this.phase==="GREEN"){n.demand?this.noDemandTime=0:this.noDemandTime+=t;const r=this.timer>Ki.minGreen&&this.noDemandTime>Ki.gap&&i,a=this.timer>Ki.maxGreen&&i;(r||a)&&this._go("YELLOW")}else if(this.phase==="YELLOW")this.timer>Ki.yellow&&this._go("ALLRED");else if(this.phase==="ALLRED"&&this.timer>Ki.allRed){let r=this.current;for(let a=1;a<=e.length;a++){const o=(this.current+a)%e.length;if(e[o].demand){r=o;break}}this.current=r,this._go("GREEN")}for(let r=0;r<e.length;r++)this.stateFor(r)==="red"?this.redSince[r]+=t:this.redSince[r]=0;this._updateVisuals()}_go(t){this.phase=t,this.timer=0,this.noDemandTime=0}_updateVisuals(){for(const t of this.heads){const e=this.stateFor(t.approach);t.red.material=$i.red[e==="red"?1:0],t.yellow.material=$i.yellow[e==="yellow"?1:0],t.green.material=$i.green[e==="green"?1:0]}}build(t,e){for(const n of this.approaches){const i=n.lanes[0],r=i.xs.length,a=i.xs[r-1],o=i.zs[r-1],l=n.hx,c=n.hz,u=c,h=-l,d=i.edge.laneWidth/2,f=a+u*(d+1.6)+l*.5,g=o+h*(d+1.6)+c*.5,_=new oe;_.position.set(f,0,g),_.rotation.y=Math.atan2(-l,-c);const m=Pt(3883080),p=new it($e(.11,.13,5.6,10),m);p.position.y=2.8,p.castShadow=!0,_.add(p);const x=new it(Rt(4.2,.12,.12),m);x.position.set(2.1,5.5,0),_.add(x);const E=(v,T)=>{const D=new oe;D.position.set(v,T,0);const N=new it(Rt(.42,1.25,.32),Pt(1842980));N.castShadow=!0,D.add(N);const B=new it(Rt(.5,1.33,.04),Pt(2830134));B.position.z=-.17,D.add(B);const W=K=>{const Y=new it(ii(.13,12,8),$i.red[0]);return Y.position.set(0,K,.15),Y.scale.z=.5,D.add(Y),Y},X={approach:n.index,red:W(.38),yellow:W(0),green:W(-.38)};this.heads.push(X),_.add(D)};E(3.6,4.85),E(0,3),t.add(_),e.push({x:f,z:g,yaw:0,hl:.2,hw:.2,kind:"pole"});const M=this.node.radius*2+2.5,L=f+l*M,A=g+c*M,R=new oe;R.position.set(L,0,A),R.rotation.y=Math.atan2(-l,-c);const P=new it($e(.1,.12,3.6,10),m);P.position.y=1.8,P.castShadow=!0,R.add(P),(()=>{const v=new oe;v.position.set(0,3.4,0);const T=new it(Rt(.42,1.25,.32),Pt(1842980));v.add(T);const D=N=>{const B=new it(ii(.13,12,8),$i.red[0]);return B.position.set(0,N,.15),B.scale.z=.5,v.add(B),B};this.heads.push({approach:n.index,red:D(.38),yellow:D(0),green:D(-.38)}),R.add(v)})(),t.add(R),e.push({x:L,z:A,yaw:0,hl:.2,hw:.2,kind:"pole"})}this._updateVisuals()}}class Ag{constructor(t){this.controllers=new Map;for(const e of t.nodes.values())e.control==="signal"&&this.controllers.set(e.id,new Tg(e))}build(t,e){for(const n of this.controllers.values())n.build(t,e)}stateOf(t){const e=this.controllers.get(t.node.id);return e?e.stateFor(t.index):null}update(t){for(const e of this.controllers.values())e.update(t)}reset(){for(const t of this.controllers.values())t.reset()}}function Rg(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Ae;let c=0;for(let u=0;u<s.length;++u){const h=s[u];let d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f])}if(t){let f;if(e)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(e){let u=0;const h=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=s[d].attributes.position.count}l.setIndex(h)}for(const u in r){const h=Il(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let _=0;_<a[u].length;++_)f.push(a[u][_][d]);const g=Il(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Il(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const u=s[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const a=new t(r),o=new He(a,e,n);let l=0;for(let c=0;c<s.length;++c){const u=s[c];if(u.isInterleavedBufferAttribute){const h=l/e;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<e;g++){const _=u.getComponent(d,g);o.setComponent(d+h,g,_)}}else a.set(u.array,l);l+=u.count*e}return i!==void 0&&(o.gpuType=i),o}const Nl=new ne,Dl=new Oi,Ul=new I,kl=new I,Cg=new Vt,Pg=new I(0,1,0);class ze{constructor(t,e,n={}){this.geo=t,this.material=e,this.items=[],this.opts=n}add(t,e,n,i,r,a,o=0,l=null){this.items.push({x:t,y:e,z:n,sx:i,sy:r,sz:a,rotY:o,color:l})}build(t,e){if(!this.items.length)return null;const n=220,i=new Map;for(const r of this.items){const a=`${Math.floor(r.x/n)},${Math.floor(r.z/n)}`;i.has(a)||i.set(a,[]),i.get(a).push(r)}for(const r of i.values()){const a=new Wm(this.geo,this.material,r.length);let o=0,l=0;r.forEach((c,u)=>{kl.set(c.x,c.y,c.z),Dl.setFromAxisAngle(Pg,c.rotY),Ul.set(c.sx,c.sy,c.sz),Nl.compose(kl,Dl,Ul),a.setMatrixAt(u,Nl),c.color!==null&&a.setColorAt(u,Cg.set(c.color)),o+=c.x,l+=c.z}),a.castShadow=this.opts.shadow!==!1,a.receiveShadow=!!this.opts.receive,a.computeBoundingSphere(),t.add(a),e&&!this.opts.always&&e.push({mesh:a,x:o/r.length,z:l/r.length,r:a.boundingSphere.radius})}return!0}}function Lg(){const s=[];for(let e=0;e<8;e++){const n=new Ze(.7,3.2);n.rotateX(-Math.PI/2),n.translate(0,0,1.6),n.rotateX(.55),n.rotateY(e/8*Math.PI*2),s.push(n)}return Rg(s)}class Ig{constructor(t,e=[]){this.net=t,this.group=new oe,this.colliders=[],this.avoid=e,this.rand=os(2024),this.footprints=[],this.chunks=[]}updateVisibility(t,e,n){for(const i of this.chunks){const r=Math.hypot(i.x-t,i.z-e)-i.r;i.mesh.visible=r<n}}_free(t,e,n){for(const i of this.avoid)if(Math.hypot(i.x-t,i.z-e)<n+1.5)return!1;for(const i of this.footprints)if(Math.abs(i.x-t)<i.hw+n&&Math.abs(i.z-e)<i.hd+n)return!1;return!0}_addBuilding(t,e,n,i,r,a,o,l=0,c=!0){t.add(e,a/2,n,i,a,r,l,o),this.footprints.push({x:e,z:n,hw:i/2,hd:r/2}),c&&this.colliders.push({x:e,z:n,yaw:l,hl:r/2,hw:i/2,kind:"building"})}build(){const t=this.rand,e=this.group,n=new it(new Pe(4200,24,12),new on({map:xg(),side:Te,fog:!1,depthWrite:!1}));n.renderOrder=-10,this.sky=n,e.add(n);const i=gg();i.repeat.set(700,700);const r=new it(new Ze(9e3,9e3),new Jt({map:i}));r.rotation.x=-Math.PI/2,r.position.y=-.03,r.receiveShadow=!0,e.add(r);const a=Rl("office");a.repeat.set(1,3);const o=Rl("shop"),l=vg(),c=new Ve(1,1,1),u=new ze(c,new Jt({map:a})),h=new ze(c,new Jt({map:o})),d=new ze(c,new Jt({map:l})),f=new ze(c,new Jt({color:16777215})),g=new Ii(.75,1,4);g.rotateY(Math.PI/4);const _=new ze(g,new Jt({color:16777215,flatShading:!0})),m=[16176813,13166281,12312315,16764092,16774557,14794471,16301008,14142664],p=[11883067,9255726,4020864,7162945,3046706],x=[14673903,12965608,15261904,12044761,15790320,11125462],E=15,M=[kn[0]-120,...kn,kn[kn.length-1]+110],L=[On[0]-100,...On,On[On.length-1]+110];for(let nt=0;nt<M.length-1;nt++)for(let at=0;at<L.length-1;at++){const z=M[nt]+E,$=M[nt+1]-E,tt=L[at]+E,Q=L[at+1]-E,Tt=(z+$)/2>-90;if(z>10&&z<20&&tt>190&&tt<200){this._school(f,_,z,$,tt,Q);continue}Tt?this._cityBlock(u,h,z,$,tt,Q,x):this._houseBlock(d,_,z,$,tt,Q,m,p)}const A=this.net.edges.get("e_n20_kEnd");for(let nt=160;nt<A.length-80;nt+=70+t()*60){const at=t()<.5?1:-1,z=this.net.edgePointAt(A,nt),$=22+t()*14,tt=z.x+z.dz*$*at,Q=z.z-z.dx*$*at,xt=Math.atan2(-z.dx,-z.dz)+(at>0?-Math.PI/2:Math.PI/2);if(!(!this._free(tt,Q,7)||this.net.distanceToRoad(tt,Q)<8)){for(const[Tt,It]of[[-3,-3],[3,-3],[-3,3],[3,3]])f.add(tt+Tt,.7,Q+It,.25,1.4,.25,0,7162931);f.add(tt,2.8,Q,8,2.8,7,xt,[10251077,11566416,9067068][Math.floor(t()*3)]),_.add(tt,5.2,Q,12,2.4,10.5,xt,[9255726,6111287,3622735][Math.floor(t()*3)]),this.footprints.push({x:tt,z:Q,hw:5,hd:5}),this.colliders.push({x:tt,z:Q,yaw:0,hl:4.2,hw:4.2,kind:"building"})}}const R=new Jt({color:10275941});for(let nt=300;nt<A.length-200;nt+=260){const at=this.net.edgePointAt(A,nt);for(const z of[-1,1]){const tt=new it(new Ze(90,160),R);tt.rotation.x=-Math.PI/2,tt.rotation.z=Math.atan2(-at.dx,-at.dz),tt.position.set(at.x+at.dz*70*z,-.01,at.z-at.dx*70*z),tt.receiveShadow=!0,e.add(tt)}}const P=new rn(.22,.32,1,7),y=new ze(P,new Jt({color:8016438})),v=new Zs(1,1),T=new ze(v,new Jt({color:16777215,flatShading:!0})),D=new rn(.16,.24,1,6),N=new ze(D,new Jt({color:9268815})),B=new ze(Lg(),new Jt({color:16777215,side:Ge})),W=[4168506,5025616,3046706,5941308,6995787],X=(nt,at,z=1)=>{if(!this._free(nt,at,2.5)||this.net.distanceToRoad(nt,at)<3.2)return!1;const $=(3+t()*2)*z;y.add(nt,$/2,at,z,$,z);const tt=(3+t()*1.6)*z;return T.add(nt,$+tt*.45,at,tt*1.25,tt*.75,tt*1.25,t()*6,W[Math.floor(t()*W.length)]),this.colliders.push({x:nt,z:at,yaw:0,hl:.35*z,hw:.35*z,kind:"tree"}),this.footprints.push({x:nt,z:at,hw:1,hd:1}),!0},K=(nt,at,z=1,$=!0)=>{if(!this._free(nt,at,1.5)||this.net.distanceToRoad(nt,at)<3)return!1;const tt=(6+t()*4)*z;return N.add(nt,tt/2,at,z,tt,z,0),B.add(nt,tt,at,z*1.2,z*1.2,z*1.2,t()*6,W[Math.floor(t()*W.length)]),$&&this.colliders.push({x:nt,z:at,yaw:0,hl:.3,hw:.3,kind:"tree"}),this.footprints.push({x:nt,z:at,hw:.8,hd:.8}),!0};for(const nt of this.net.edges.values()){const at=nt.kind==="city"||nt.kind==="residential",z=at?22:34;for(let $=nt.rFrom+12;$<nt.length-nt.rTo-12;$+=z)for(const tt of[-1,1]){if(t()<(at?.35:.45))continue;const Q=this.net.edgePointAt(nt,$+t()*6),Tt=(tt>0?nt.leftHalf:nt.rightHalf)+(at?5.2:9+t()*14),It=Q.x+Q.dz*Tt*tt,Kt=Q.z-Q.dx*Tt*tt;nt.kind==="residential"||nt.kind==="rural"?t()<.5?X(It,Kt,.9+t()*.4):K(It,Kt):nt.kind==="city"&&X(It,Kt,.7)}}const Y=this.net.edges.get("e_hS_hN");for(let nt=60;nt<Y.length-60;nt+=11){const at=this.net.edgePointAt(Y,nt);for(const z of[-1,1])for(const $ of[26,37,48]){const tt=$+(t()-.5)*3;K(at.x+at.dz*tt*z,at.z-at.dx*tt*z,.75+t()*.2,!1)}}for(let nt=0;nt<700;nt++){const at=-900+t()*1900,z=-2200+t()*2900;Math.abs(at-650)<120||at>-470&&at<300&&z>-110&&z<480||(t()<.5?X(at,z,.8+t()*.6):K(at,z,.9+t()*.3))}const lt=new rn(.08,.11,1,6),pt=new ze(lt,new Jt({color:9081756})),Et=new ze(new Ve(1,1,1),new Jt({color:6055278}));for(const nt of this.net.edges.values()){const at=nt.kind==="city"||nt.kind==="residential";if(!at&&nt.kind!=="highway")continue;const z=at?36:60;let $=0;for(let tt=nt.rFrom+8;tt<nt.length-nt.rTo-6;tt+=z,$++){const Q=this.net.edgePointAt(nt,tt);if(nt.kind==="highway"){pt.add(Q.x,5,Q.z,1,10,1);for(const se of[-1,1])Et.add(Q.x+Q.dz*1.6*se,9.9,Q.z-Q.dx*1.6*se,.4,.15,3.2,Math.atan2(Q.dz,-Q.dx));continue}if(nt.crossings.some(se=>Math.abs(se.s-tt)<6))continue;const xt=$%2===0?1:-1,It=(xt>0?nt.leftHalf:nt.rightHalf)+2.4,Kt=Q.x+Q.dz*It*xt,Bt=Q.z-Q.dx*It*xt;this._free(Kt,Bt,.4)&&(pt.add(Kt,3.8,Bt,1,7.6,1),Et.add(Kt-Q.dz*.9*xt,7.6,Bt+Q.dx*.9*xt,.45,.18,.45),this.colliders.push({x:Kt,z:Bt,yaw:0,hl:.15,hw:.15,kind:"pole"}))}}return u.build(e,this.chunks),h.build(e,this.chunks),d.build(e,this.chunks),f.build(e,this.chunks),_.build(e,this.chunks),y.build(e,this.chunks),T.build(e,this.chunks),N.build(e,this.chunks),B.build(e,this.chunks),pt.build(e,this.chunks),Et.build(e,this.chunks),this._backdrop(),{group:e,colliders:this.colliders,scenery:this}}_cityBlock(t,e,n,i,r,a,o){const l=this.rand,c=i-n,u=a-r;if(c<20||u<20)return;const h=12,d=26,f=(x,E,M,L)=>{const A=Math.hypot(M-x,L-E),R=Math.floor(A/d);for(let P=0;P<R;P++){const y=(P+.5)/R,v=x+(M-x)*y,T=E+(L-E)*y;if(!this._free(v,T,4))continue;const D=9+Math.floor(l()*3)*3.2,N=Math.abs(L-E)<1,B=N?A/R-1:h,W=N?h:A/R-1;this._addBuilding(e,v,T,B,W,D,[15983555,15190441,14279916,16109765,14739656][Math.floor(l()*5)],0)}};f(n+14,r+h/2,i-14,r+h/2),f(n+14,a-h/2,i-14,a-h/2),f(n+h/2,r+h+4,n+h/2,a-h-4),f(i-h/2,r+h+4,i-h/2,a-h-4);const g=n+h+10,_=i-h-10,m=r+h+10,p=a-h-10;for(let x=g+14;x<_-8;x+=34)for(let E=m+14;E<p-8;E+=34){if(l()<.15)continue;const M=18+l()*10,L=18+l()*10,A=22+l()*55;this._free(x,E,10)&&this._addBuilding(t,x,E,M,L,A,o[Math.floor(l()*o.length)])}}_houseBlock(t,e,n,i,r,a,o,l){const c=this.rand,u=(h,d)=>{for(let f=n+8;f<i-8;f+=14){if(c()<.12||!this._free(f,h,5))continue;const g=o[Math.floor(c()*o.length)];this._addBuilding(t,f,h,10,8,4.6,g,d),e.add(f,4.6+1.3,h,15,2.6,12,0,l[Math.floor(c()*l.length)])}};u(r+6,Math.PI),a-r>40&&u(a-6,0)}_school(t,e,n,i,r,a){const o=n+34,l=(r+a)/2;this._addBuilding(t,o,l,18,70,11,15985362),t.add(o-9.2,6,l,.6,1.2,70,0,2843320),t.add(o,11.4,l,21,.8,74,0,2843320),this._addBuilding(t,o+40,l-30,30,12,7,15985362);const c=new it(new Ze(70,90),new Jt({color:8176474}));c.rotation.x=-Math.PI/2,c.position.set(o+60,.005,l+10),c.receiveShadow=!0,this.group.add(c),t.add(n+8,.7,l,.15,1.4,a-r-10,0,1989557),this.footprints.push({x:n+8,z:l,hw:.5,hd:(a-r)/2}),t.add(n+16,5,l,.12,10,.12,0,14540253),this._flagPos={x:n+16,z:l}}_backdrop(){const t=this.group,e=new Jt({color:6262644,flatShading:!0,fog:!1}),n=new Jt({color:9416888,flatShading:!0,fog:!1}),i=os(99),r=200,a=-1e3;for(let u=0;u<46;u++){const h=u/46*Math.PI*2+i()*.05,d=u%2===0,f=d?3100+i()*300:3600+i()*300,g=250+i()*450,_=new Ii(300+i()*300,g,6+Math.floor(i()*3)),m=new it(_,d?e:n);m.position.set(r+Math.cos(h)*f,g/2-30,a+Math.sin(h)*f),m.rotation.y=i()*3,t.add(m)}const o=new Jt({color:16777215,flatShading:!0,fog:!1,emissive:11184810}),l=new Zs(1,1),c=new ze(l,o,{shadow:!1,always:!0});for(let u=0;u<40;u++){const h=i()*Math.PI*2,d=800+i()*2200,f=r+Math.cos(h)*d,g=a+Math.sin(h)*d,_=380+i()*250;for(let m=0;m<4;m++){const p=40+i()*50;c.add(f+(m-1.5)*p*.9,_+i()*15,g+i()*30,p*1.3,p*.6,p)}}c.build(t,null)}}const Ng=1.25;class Dg{constructor(t,e){this.net=t,this.scene=e,this.peds=[];let n=1;for(const i of t.crossings){const r=i.school?3:2;for(let a=0;a<r;a++){const o=Eg(n++);e.add(o);const l={crossing:i,model:o,side:a%2===0?-1:1,u:0,state:"WAIT",timer:0,along:(a-1)*.9,phase:Math.random()*6};this.peds.push(l),i.peds.push(l)}}this.reset()}reset(){let t=0;for(const e of this.peds){const n=e.crossing.halfRoad+2.2;e.u=e.side*n,e.state="WAIT",e.timer=3+t++*2.7%6,this._pose(e)}}_vehicleThreat(t,e){for(const n of e){const i=Di(n.yaw),r=t.x-n.x,a=t.z-n.z,o=r*i.x+a*i.z;if(Math.abs(r*i.z-a*i.x)>t.halfRoad+3)continue;const c=n.speed*n.speed/6+10;if(o>-3&&o<c)return!0}return!1}isBlocked(t){for(const e of t.peds)if(e.state==="CROSS"||Math.abs(e.u)<t.halfRoad+.6)return!0;return!1}update(t,e){for(const n of this.peds){const i=n.crossing,r=i.halfRoad+2.2;if(n.state==="WAIT")n.timer-=t,n.timer<=0&&(this._vehicleThreat(i,e)?n.timer=.5:(n.state="CROSS",n.target=-Math.sign(n.u||1)*r));else if(n.state==="CROSS"){const a=Math.sign(n.target-n.u);n.u+=a*Ng*t,n.phase+=t*7,(a>0&&n.u>=n.target||a<0&&n.u<=n.target)&&(n.u=n.target,n.state="WAIT",n.timer=6+Math.random()*10)}this._pose(n)}}_pose(t){const e=t.crossing,n=e.x+e.lx*t.u+e.tx*t.along,i=e.z+e.lz*t.u+e.tz*t.along;t.x=n,t.z=i,t.model.position.set(n,0,i);const r=t.state==="CROSS"?Math.sign(t.target-t.u):-Math.sign(t.u||1),a=e.lx*r,o=e.lz*r;t.model.rotation.y=Math.atan2(-a,-o);const l=t.state==="CROSS"?Math.sin(t.phase)*.5:0,c=t.model.userData.legs;c[0].rotation.x=l,c[1].rotation.x=-l}onRoad(t){return Math.abs(t.u)<t.crossing.halfRoad+.3}}class Ug{constructor(){this.scene=new vc,this.scene.background=new Vt(12575743),this.scene.fog=new no(13625591,160,700);const t=new wc(14676479,6192458,1.15);this.scene.add(t);const e=new Tc(16773590,1.9);e.position.set(120,220,80),e.castShadow=!0,e.shadow.mapSize.set(2048,2048);const n=e.shadow.camera;n.left=-90,n.right=90,n.top=90,n.bottom=-90,n.near=10,n.far=600,e.shadow.bias=-6e-4,e.shadow.normalBias=.4,this.scene.add(e),this.scene.add(e.target),this.sun=e,this.sunOffset=new I(120,220,80),this.network=new pg(og());const i=new Mg(this.network).build();this.scene.add(i.group),this.signs=new wg(this.network),this.scene.add(this.signs.group),this.lights=new Ag(this.network);const r=new oe,a=[];this.lights.build(r,a),this.scene.add(r);const o=new Ig(this.network,[...this.signs.colliders,...a]).build();this.scene.add(o.group),this.scenery=o.scenery,this.drawDistance=700,this.pedestrians=new Dg(this.network,this.scene),this.colliders=[...i.colliders,...this.signs.colliders,...a,...o.colliders],this._indexColliders()}_indexColliders(){this.cgrid=new Map;const t=20;this.cCell=t;for(const e of this.colliders){const n=Math.max(e.hl,e.hw),i=Math.floor((e.x-n)/t),r=Math.floor((e.x+n)/t),a=Math.floor((e.z-n)/t),o=Math.floor((e.z+n)/t);for(let l=i;l<=r;l++)for(let c=a;c<=o;c++){const u=l*100003+c;this.cgrid.has(u)||this.cgrid.set(u,[]),this.cgrid.get(u).push(e)}}}collidersNear(t,e,n=6){const i=this.cCell,r=new Set;for(let a=Math.floor((t-n)/i);a<=Math.floor((t+n)/i);a++)for(let o=Math.floor((e-n)/i);o<=Math.floor((e+n)/i);o++){const l=this.cgrid.get(a*100003+o);if(l)for(const c of l)r.add(c)}return r}followSun(t,e){this.sun.position.set(t+this.sunOffset.x,this.sunOffset.y,e+this.sunOffset.z),this.sun.target.position.set(t,0,e)}setQuality(t){const e=t==="low"?420:t==="medium"?600:800;this.drawDistance=e+40,this.scene.fog.near=e*.25,this.scene.fog.far=e,this.sun.castShadow=t!=="low";const n=t==="high"?2048:1024;this.sun.shadow.mapSize.x!==n&&(this.sun.shadow.mapSize.set(n,n),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null))}}const ar=1,Ba=2,ss={eye:new I(.38,1.25,.15),wheelCenter:new I(.38,.8,-.32),mirrors:{left:{pos:new I(-1,1,-.52),size:[.24,.15]},right:{pos:new I(1,1,-.52),size:[.24,.15]},rear:{pos:new I(.02,1.37,-.46),size:[.22,.068]}}};function Ol(s,t){s.traverse(e=>e.layers.set(t))}function Gs(s,t,e,n){const i=s.distanceTo(t),r=new it(Rt(e,e,1),n);return r.scale.z=i,r.position.copy(s).add(t).multiplyScalar(.5),r.lookAt(t),r}class kg{constructor(t=13840175){this.group=new oe,this.interior=new oe,this.exterior=new oe,this.group.add(this.interior,this.exterior),this.mirrorSlots={},this._buildExterior(t),this._buildInterior(t),Ol(this.interior,ar),Ol(this.exterior,Ba)}_buildExterior(t){const e=Pt(t),n=this.exterior,i=new it(Rt(1.78,.62,4.3),e);i.position.set(0,.64,0),n.add(i);const r=new it(Rt(1.64,.52,2),Pt(2767698));r.position.set(0,1.2,.25),n.add(r);for(const a of[-1,1]){const o=new it($e(.33,.33,.24,14),Pt(1908516));o.rotation.z=Math.PI/2,o.position.set(a*.8,.33,1.35),n.add(o);const l=o.clone();l.position.z=-1.35,n.add(l)}}_buildInterior(t){const e=this.interior,n=Pt(2303532),i=Pt(1447964),r=Pt(3817287),a=Pt(t),o=new it(Rt(1.72,.12,1.45),a);o.position.set(0,.86,-1.42),o.rotation.x=.06,e.add(o);const l=new it(Rt(1.68,.3,.5),n);l.position.set(0,.74,-.86),e.add(l);const c=new it(Rt(1.68,.04,.42),i);c.position.set(0,.895,-.84),e.add(c);const u=new it(Rt(.46,.05,.12),i);u.position.set(.38,.94,-.72),e.add(u),this.clusterCanvas=document.createElement("canvas"),this.clusterCanvas.width=512,this.clusterCanvas.height=224,this.clusterTex=new rr(this.clusterCanvas),this.clusterTex.colorSpace=pe;const h=new it(new Ze(.42,.184),new on({map:this.clusterTex,toneMapped:!1}));h.position.set(.38,.93,-.62),h.rotation.x=-.35,e.add(h);const d=new it(Rt(.28,.4,.7),n);d.position.set(0,.55,-.35),e.add(d);const f=new it($e(.02,.02,.18,6),r);f.position.set(0,.82,-.18),e.add(f);const g=new it(ii(.04),i);g.position.set(0,.92,-.18),e.add(g);const _=new it(Rt(.26,.15,.02),Pt(731716,{basic:!0}));_.position.set(0,.93,-.74),_.rotation.x=-.25,e.add(_);for(const v of[-1,1]){const T=new it(Rt(.08,.5,1.6),n);T.position.set(v*.86,.7,.15),e.add(T);const D=new it(Rt(.12,.05,1.6),r);D.position.set(v*.84,.97,.15),e.add(D),e.add(Gs(new I(v*.8,.92,-.7),new I(v*.7,1.47,-.12),.05,n)),e.add(Gs(new I(v*.84,.98,.75),new I(v*.74,1.4,.7),.08,n))}const m=new it(Rt(1.5,.05,1.8),Pt(12104358));m.position.set(0,1.5,.65),e.add(m);const p=new it(Rt(1.42,.07,.08),n);p.position.set(0,1.47,-.12),e.add(p);const x=new it(Rt(1.6,.04,.06),i);x.position.set(0,.96,-1),e.add(x);for(const v of[-.38,.38]){const T=new it(Rt(.5,.12,.5),Pt(3093824));T.position.set(v,.48,.35),e.add(T);const D=new it(Rt(.5,.65,.1),Pt(3093824));D.position.set(v,.85,.65),D.rotation.x=.15,e.add(D)}this.wheelGroup=new oe,this.wheelGroup.position.copy(ss.wheelCenter),this.wheelGroup.rotation.x=-.38;const E=new oe;this.wheelRot=E,this.wheelGroup.add(E);const M=new it(new Ni(.19,.022,10,32),i);E.add(M);const L=new it($e(.055,.055,.05,14),n);L.rotation.x=Math.PI/2,E.add(L);const A=new it($e(.022,.022,.052,10),Pt(13225170));A.rotation.x=Math.PI/2,E.add(A);for(const[v,T,D]of[[-.1,0,0],[.1,0,0],[0,-.1,Math.PI/2]]){const N=new it(Rt(.14,.03,.02),n);N.position.set(v,T,0),N.rotation.z=D,E.add(N)}const R=new it($e(.035,.045,.3,8),n);R.rotation.x=Math.PI/2,R.position.set(0,0,-.16),this.wheelGroup.add(R),e.add(this.wheelGroup);const P=new it(Rt(.14,.015,.015),r);P.position.set(-.13,.03,-.08),this.wheelGroup.add(P),this.skinMat=new Jt({color:13011550}),this.sleeveMat=new Jt({color:3108822}),this.hands=[];for(const v of[Math.PI*.82,Math.PI*.18]){const T=new it(ii(.045,10,8),this.skinMat);T.position.set(Math.cos(v)*.19,Math.sin(v)*.19,.02),E.add(T),this.hands.push(T)}this.arms=[];for(let v=0;v<2;v++){const T=new it(Rt(.065,.065,1),this.sleeveMat);e.add(T),this.arms.push(T)}this.shoulders=[new I(.12,.66,-.02),new I(.66,.66,-.02)];const y=ss.eye;for(const[v,T]of Object.entries(ss.mirrors)){const D=new oe;D.position.copy(T.pos),D.lookAt(y);const N=new it(Rt(T.size[0]+.03,T.size[1]+.03,.05),v==="rear"?i:a);if(N.position.z=-.035,D.add(N),e.add(D),this.mirrorSlots[v]=D,v!=="rear"){const B=Gs(new I(Math.sign(T.pos.x)*.82,.96,-.55),T.pos.clone(),.04,a);e.add(B)}else{const B=Gs(new I(.02,1.47,-.42),T.pos.clone().add(new I(0,T.size[1]/2,-.06)),.02,i);e.add(B)}}this._clusterState=""}setOutfit(t,e){this.skinMat.color.set(t),this.sleeveMat.color.set(e)}update(t){this.wheelRot.rotation.z=t,this.group.updateMatrixWorld(!0);const e=new ne().copy(this.interior.matrixWorld).invert();for(let n=0;n<2;n++){const i=new I;this.hands[n].getWorldPosition(i),i.applyMatrix4(e);const r=this.shoulders[n],a=this.arms[n];a.position.copy(r).add(i).multiplyScalar(.5),a.scale.z=r.distanceTo(i),a.updateMatrixWorld(),a.lookAt(this.interior.localToWorld(i.clone()))}}drawCluster(t,e,n,i,r){const a=`${Math.round(t)}|${e}|${n}|${i}|${r}`;if(a===this._clusterState)return;this._clusterState=a;const o=this.clusterCanvas,l=o.getContext("2d");l.fillStyle="#05070b",l.fillRect(0,0,o.width,o.height);const c=256,u=150,h=112,d=Math.PI*.8,f=Math.PI*2.2;l.lineWidth=10,l.strokeStyle="#25303d",l.beginPath(),l.arc(c,u,h,d,f),l.stroke();const g=Math.min(1,t/180);l.strokeStyle=e&&t>e+3?"#ff5a4a":"#38d4ff",l.beginPath(),l.arc(c,u,h,d,d+(f-d)*g),l.stroke(),l.fillStyle="#9fb3c8",l.font="bold 15px Arial",l.textAlign="center";for(let p=0;p<=180;p+=30){const x=d+(f-d)*p/180;l.fillText(String(p),c+Math.cos(x)*(h-26),u+Math.sin(x)*(h-26)+5)}const _=d+(f-d)*g;l.strokeStyle="#ff7043",l.lineWidth=5,l.beginPath(),l.moveTo(c,u),l.lineTo(c+Math.cos(_)*(h-8),u+Math.sin(_)*(h-8)),l.stroke(),l.fillStyle="#ffffff",l.font="bold 46px Arial",l.fillText(String(Math.round(t)),c,u+6),l.font="bold 15px Arial",l.fillStyle="#9fb3c8",l.fillText("km/j",c,u+30);const m=(p,x,E)=>{l.fillStyle=E?"#3dff7a":"#1d3326",l.beginPath(),l.moveTo(p+x*26,44),l.lineTo(p,24),l.lineTo(p,64),l.closePath(),l.fill(),l.fillRect(x>0?p-22:p,36,22,16)};m(70,-1,n===-1&&i),m(442,1,n===1&&i),e&&(l.fillStyle="#fff",l.beginPath(),l.arc(456,160,30,0,Math.PI*2),l.fill(),l.lineWidth=7,l.strokeStyle="#d0202a",l.stroke(),l.fillStyle="#111",l.font="bold 22px Arial",l.fillText(String(e),456,168)),l.fillStyle=r?"#ffb020":"#5f7387",l.font="bold 26px Arial",l.fillText(r?"R":"D",56,170),this.clusterTex.needsUpdate=!0}}const Fl={low:{side:[192,120],rear:[256,80],every:2},medium:{side:[320,200],rear:[400,128],every:1},high:{side:[512,320],rear:[640,200],every:1}},Og={left:{yaw:Math.PI-.2,pitch:-.05,fov:26,aspect:.24/.15,layers:[0,Ba],offset:[-.03,0,0]},right:{yaw:Math.PI+.2,pitch:-.05,fov:26,aspect:.24/.15,layers:[0,Ba],offset:[.03,0,0]},rear:{yaw:Math.PI,pitch:-.035,fov:15,aspect:.27/.085,layers:[0],offset:[0,0,.3]}};class Fg{constructor(t,e="medium"){this.car=t,this.mirrors={},this.frame=0;for(const n of["left","right","rear"]){const i=Og[n],r=ss.mirrors[n],a=new we(i.fov,i.aspect,.15,260);a.position.copy(r.pos).add(new I(...i.offset)),a.rotation.order="YXZ",a.rotation.y=i.yaw,a.rotation.x=i.pitch,a.layers.disableAll();for(const h of i.layers)a.layers.enable(h);t.group.add(a);const o=new Ze(r.size[0],r.size[1]),l=o.attributes.uv;for(let h=0;h<l.count;h++)l.setX(h,1-l.getX(h));const c=new on({color:16777215,toneMapped:!1}),u=new it(o,c);u.layers.set(ar),t.mirrorSlots[n].add(u),this.mirrors[n]={key:n,cam:a,glass:u,material:c,target:null,enabled:!0}}this.setQuality(e)}setQuality(t){const e=Fl[t]||Fl.medium;this.every=e.every;for(const[n,i]of Object.entries(this.mirrors)){const[r,a]=n==="rear"?e.rear:e.side;i.target&&i.target.dispose(),i.target=new Gn(r,a,{samples:t==="high"?4:0}),i.target.texture.colorSpace=pe,i.material.map=i.target.texture,i.material.needsUpdate=!0}}render(t,e){if(this.frame++,this.frame%this.every!==0)return;const n=t.getRenderTarget();for(const i of Object.values(this.mirrors))i.enabled&&(i.cam.updateMatrixWorld(),t.setRenderTarget(i.target),t.render(e,i.cam));t.setRenderTarget(n)}worldDirection(t){const e=new I;return this.mirrors[t].cam.getWorldDirection(e),e}dispose(){var t;for(const e of Object.values(this.mirrors))(t=e.target)==null||t.dispose()}}class zg{constructor(){this.length=4.3,this.width=1.78,this.wheelBase=2.6,this.vmax=44,this.reset(0,0,0)}reset(t,e,n){this.x=t,this.z=e,this.yaw=n,this.speed=0,this.steerInput=0,this.throttle=0,this.brake=0,this.reverse=!1,this.reverseHold=0,this.signal=0,this.signalYaw=0,this.signalTime=0,this.acc=0,this.pitchFx=0,this.prevX=t,this.prevZ=e,this.prevYaw=n}get kmh(){return Math.abs(this.speed)*De}toggleSignal(t){this.signal===t?this.signal=0:(this.signal=t,this.signalYaw=this.yaw,this.signalTime=0)}update(t,e,n={}){const i=n.sensitivity??1,r=!!n.slippery;this.prevX=this.x,this.prevZ=this.z,this.prevYaw=this.yaw;const a=(e.left?1:0)-(e.right?1:0),o=a!==0?2*i:3,l=a*Math.min(1,.55+.45*i);this.steerInput<l?this.steerInput=Math.min(l,this.steerInput+o*t):this.steerInput>l&&(this.steerInput=Math.max(l,this.steerInput-o*t));const c=e.throttle?1:0,u=e.brake?1:0;this.throttle+=wi(c-this.throttle,-4*t,2.2*t),this.brake+=wi(u-this.brake,-5*t,3.5*t),!this.reverse&&Math.abs(this.speed)<.15&&u&&!c?(this.reverseHold+=t,this.reverseHold>.45&&(this.reverse=!0)):u||(this.reverseHold=0),this.reverse&&c&&Math.abs(this.speed)<.15&&(this.reverse=!1);const h=this.speed;let d=0;const f=r?4.6:7.8,g=r?5.5:9.5;if(this.reverse){const E=this.brake*1.6,M=this.throttle*f+(e.emergency?g:0)+.3;let L=h-E*t;L<0&&(L=Math.min(0,L+M*t*(L<0?1:0))),this.speed=Math.max(-4.2,L),d=(this.speed-h)/t}else{const E=3.4*(1-Math.pow(Math.max(0,h)/this.vmax,2));d+=this.throttle*E;let M=this.brake*f+(e.emergency?g:0);M+=.25+9e-4*h*h,h>0?d-=M:d-=Math.min(M,0),this.speed=Math.max(0,h+d*t),h<=0&&this.throttle<=.01&&(this.speed=0)}this.acc=d,this.pitchFx+=(wi(-d*.006,-.05,.05)-this.pitchFx)*Math.min(1,t*4);const _=Math.abs(this.speed),m=Math.min(.55,Math.atan(this.wheelBase*7.5/Math.max(_*_,1))),p=this.steerInput*m;this.yaw=_n(this.yaw+this.speed/this.wheelBase*Math.tan(p)*t);const x=Di(this.yaw);this.x+=x.x*this.speed*t,this.z+=x.z*this.speed*t,this.signal!==0&&(this.signalTime+=t,Math.abs(_n(this.yaw-this.signalYaw))>.9&&Math.abs(this.steerInput)<.12&&(this.signal=0))}revert(){this.x=this.prevX,this.z=this.prevZ,this.yaw=this.prevYaw,this.speed=0}get steerVisual(){return this.steerInput*2.4}}const Bg=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","KeyQ","KeyE","KeyR","KeyZ","KeyC","Escape"]);class Gg{constructor(t){this.keys=new Set,this.touch={gas:!1,brake:!1,left:!1,right:!1,lookL:!1,lookR:!1,emergency:!1},this.queue=[],this.enabled=!0,this.dragYaw=0,this._dragging=!1,this._lastX=0,window.addEventListener("keydown",e=>{e.target&&(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA")||(Bg.has(e.code)&&this.enabled&&e.preventDefault(),!e.repeat&&(this.keys.add(e.code),e.code==="KeyQ"&&this.queue.push("signalLeft"),e.code==="KeyE"&&this.queue.push("signalRight"),e.code==="KeyR"&&this.queue.push("reset"),e.code==="Escape"&&this.queue.push("pause")))}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>{this.keys.clear();for(const e of Object.keys(this.touch))this.touch[e]=!1}),t&&(t.addEventListener("pointerdown",e=>{e.pointerType==="mouse"&&(this._dragging=!0,this._lastX=e.clientX)}),window.addEventListener("pointermove",e=>{if(!this._dragging)return;const n=e.clientX-this._lastX;this._lastX=e.clientX,this.dragYaw=Math.max(-1.2,Math.min(1.2,this.dragYaw-n*.005))}),window.addEventListener("pointerup",()=>{this._dragging=!1}))}has(...t){return t.some(e=>this.keys.has(e))}get state(){return{throttle:this.has("KeyW","ArrowUp")||this.touch.gas,brake:this.has("KeyS","ArrowDown")||this.touch.brake,left:this.has("KeyA","ArrowLeft")||this.touch.left,right:this.has("KeyD","ArrowRight")||this.touch.right,emergency:this.has("Space")||this.touch.emergency,lookLeft:this.has("KeyZ")||this.touch.lookL,lookRight:this.has("KeyC")||this.touch.lookR,dragging:this._dragging}}push(t){this.queue.push(t)}drain(){const t=this.queue;return this.queue=[],t}releaseAll(){this.keys.clear();for(const t of Object.keys(this.touch))this.touch[t]=!1;this.queue=[]}}const Hg={car:{a:1.8,b:2.4,T:1.4,s0:2.5},hatch:{a:1.8,b:2.4,T:1.4,s0:2.5},motorcycle:{a:2.2,b:2.6,T:1.2,s0:2},lorry:{a:.9,b:2,T:1.9,s0:3.5},bus:{a:1,b:2,T:1.8,s0:3.5}};let Vg=1;function Kr(s){const t=Math.max(1,Math.round(s.length/Math.max(1.2,s.width))),e=s.width/2,n=Di(s.yaw),i=[];for(let r=0;r<t;r++){const a=t===1?0:-s.length/2+e+(s.length-2*e)*r/(t-1);i.push({x:s.x+n.x*a,z:s.z+n.z*a,r:e})}return i}class Wg{constructor(t){this.world=t,this.net=t.network,this.scene=t.scene,this.npcs=[],this.pool=new Map,this.config={count:0,kinds:[]},this.spawnTimer=0,this.oncomingTimer=0,this.time=0}configure(t){this.config={count:0,kinds:[],...t}}clear(){for(const t of[...this.npcs])this._remove(t);for(const t of this.net.nodes.values())t.reservations.clear()}reset(t){this.clear(),this.time=0,this.oncomingTimer=2;for(const e of this.config.scripted||[]){const n=this.net.laneSpot(e.edge,e.dir,e.t,e.lane||0),i=this._spawn(e.type,n.lane,n.s,e.color??1994713);i.scripted=!0,i.fixedV0=e.speedKmh/De,i.v=i.fixedV0}for(let e=0;e<this.config.count*3&&this.npcs.length<this.config.count;e++)this._trySpawnRandom(t,45,380);if(this.config.oncoming)for(const e of[260,560,900])this._spawnOncoming(t,e)}_getModel(t){const e=this.pool.get(t);if(e&&e.length)return e.pop();const n=Cl[Math.floor(Math.random()*Cl.length)],i=[15022389,2001125,4431943,16635957],r=t==="bus"?i[Math.floor(Math.random()*i.length)]:t==="lorry"?[1994713,14172949,3046706,16361509][Math.floor(Math.random()*4)]:n;return Pl(t,r)}_spawn(t,e,n,i){var h;const r=i!==void 0&&!((h=this.pool.get(t))!=null&&h.length)?Pl(t,i):this._getModel(t);r.group.traverse(d=>{d.layers.set(0)}),this.scene.add(r.group);const a=Rc[t],o=Hg[t],l=e.limit/De;let c=.88+Math.random()*.12;t==="lorry"&&(c=Math.min(1,80/e.limit)*(.82+Math.random()*.08)),t==="bus"&&(c=Math.min(1,90/e.limit)*.85);const u={id:Vg++,type:t,model:r,length:a.length,width:a.width,p:o,lane:e,s:n,v:l*c*.8,factor:c,plan:[],prevLane:null,reservation:null,stopDone:!1,stopTimer:0,state:"FOLLOW_LANE",lc:null,lcCooldown:4+Math.random()*4,lcPrep:0,lcTarget:null,stuck:0,recover:0,signal:0,brake:!1,x:0,z:0,yaw:0,speed:0,scripted:!1,fixedV0:null};return this._pose(u,0),this.npcs.push(u),u}_remove(t){this.scene.remove(t.model.group),t.reservation&&t.reservation.reservations.delete(t),t.reservation=null;const e=this.pool.get(t.type)||[];e.push(t.model),this.pool.set(t.type,e);const n=this.npcs.indexOf(t);n>=0&&this.npcs.splice(n,1)}_randomType(t){const e=Math.random();return t==="highway"?e<.6?"car":e<.72?"hatch":e<.9?"lorry":"bus":t==="rural"?e<.55?"car":e<.75?"hatch":e<.9?"motorcycle":"lorry":e<.5?"car":e<.72?"hatch":e<.9?"motorcycle":e<.96?"bus":"lorry"}_spaceFree(t,e,n){for(const i of this.npcs)if(Math.hypot(i.x-t,i.z-e)<n+i.length/2)return!1;return!0}_trySpawnRandom(t,e,n){const i=this.config.kinds||[];if(!i.length)return!1;const r=this.net.lanes.filter(a=>!a.isConnector&&i.includes(a.edge.kind));for(let a=0;a<25;a++){const o=r[Math.floor(Math.random()*r.length)];if(o.length<30)continue;const l=8+Math.random()*(o.length-30),c=this.net.lanePointAt(o,l),u=Math.hypot(c.x-t.x,c.z-t.z);if(!(u<e||u>n)&&this._spaceFree(c.x,c.z,o.edge.kind==="highway"?45:18)&&!(Math.hypot(c.x-t.x,c.z-t.z)<30))return this._spawn(this._randomType(o.edge.kind),o,l),!0}return!1}_spawnOncoming(t,e){const n=this.config.oncoming,i=this.net.edges.get(n.edge),a=this.net.projectOnEdge(i,t.x,t.z).s+e;if(a>i.length-i.rTo-10)return;const o=i.lanes.bwd[0],l=this.net.centerToLaneS(o,a),c=this.net.lanePointAt(o,l);if(!this._spaceFree(c.x,c.z,25))return;const u=Math.random(),h=this._spawn(u<.7?"car":u<.85?"hatch":"lorry",o,l);h.v=h.lane.limit/De*h.factor}_ensurePlan(t){for(;t.plan.length<3;){const e=t.plan.length?t.plan[t.plan.length-1]:t.lane;if(!e.next.length)break;let n;if(e.next.length===1)n=e.next[0];else{const i=e.next.map(a=>a.turn==="S"?2:1);let r=Math.random()*i.reduce((a,o)=>a+o,0);n=e.next[0];for(let a=0;a<i.length;a++)if(r-=i[a],r<=0){n=e.next[a];break}}t.plan.push(n)}}_samplePath(t,e){const n=[];let i=t.lane,r=t.s,a=0,o=-1;const l=2.5;let c=1/0;for(;a<e;){const u=i.length-r;if(u>.01){const h=this.net.lanePointAt(i,r);n.push({x:h.x,z:h.z,d:a,dx:h.dx,dz:h.dz});const d=i.curv[h.i]||0;d>1e-4&&(c=Math.min(c,Math.sqrt(Math.sqrt(2.6/d)**2+2*1.8*Math.max(0,a-t.length/2))));const f=Math.min(l,u);r+=f,a+=f}else{if(o++,o>=t.plan.length)break;i=t.plan[o],r=0;const h=i.limit/De;c=Math.min(c,Math.sqrt(h*h+2*1.8*Math.max(0,a-t.length/2)))}}return{pts:n,vCap:c}}_playerThreatensNode(t,e){const n=t.x-e.x,i=t.z-e.z,r=Math.hypot(n,i);if(r<t.radius)return!0;if(r>t.radius+40)return!1;const a=Di(e.yaw),o=(n*a.x+i*a.z)/(r||1)*e.speed;return o>1&&(r-t.radius)/o<3}_tryReserve(t,e,n,i,r){for(const[a,o]of e.reservations){if(a===t)return!0;if(o.conflicts.has(n))return!1}if(this._playerThreatensNode(e,r))return!1;if(i){for(const a of e.approaches)if(a.control==="priority")for(const o of this.npcs){if(o===t||!a.lanes.includes(o.lane))continue;const l=o.lane.length-o.s;if(o.v>1&&l<Math.max(25,o.v*4))return!1}}return e.reservations.set(t,n),t.reservation=e,!0}update(t,e,n){this.time+=t;const i=this.world.lights;for(const o of i.controllers.values())for(const l of o.approaches)l.demand=!1;for(const o of this.npcs){const l=o.lane.approach;l&&l.node.control==="signal"&&o.lane.length-o.s<60&&(l.demand=!0)}const r=e.laneInfo;r&&r.lane&&!r.lane.isConnector&&r.lane.approach&&r.lane.length-r.s<70&&(r.lane.approach.demand=!0),i.update(t);const a=[];for(const o of this.npcs){const l=Kr(o);if(o.lc){const c=this.net.lanePointAt(o.lane,Math.min(o.s,o.lane.length));l.push(...Kr({x:c.x,z:c.z,yaw:Math.atan2(-c.dx,-c.dz),length:o.length,width:o.width}))}a.push({ref:o,x:o.x,z:o.z,yaw:o.yaw,speed:o.v,circles:l})}a.push({ref:e,x:e.x,z:e.z,yaw:e.yaw,speed:Math.max(0,e.speed),circles:Kr(e)});for(const o of n.peds)n.onRoad(o)&&a.push({ref:o,x:o.x,z:o.z,yaw:0,speed:0,circles:[{x:o.x,z:o.z,r:.45}]});for(const o of[...this.npcs])this._updateNPC(o,t,e,a,n,i);for(const o of[...this.npcs]){const l=Math.hypot(o.x-e.x,o.z-e.z);!o.scripted&&l>520?this._remove(o):!o.scripted&&o.stuck>45&&l>70&&this._remove(o)}this.spawnTimer-=t,this.spawnTimer<=0&&(this.spawnTimer=.4,this.npcs.filter(l=>!l.scripted).length<this.config.count&&this._trySpawnRandom(e,170,430)),this.config.oncoming&&(this.oncomingTimer-=t,this.oncomingTimer<=0&&(this.oncomingTimer=11+Math.random()*12,this._spawnOncoming(e,430+Math.random()*60)))}_updateNPC(t,e,n,i,r,a){this._ensurePlan(t);const o=t.p,l=t.v,c=t.lane,u=c.limit/De;let h=t.fixedV0??u*t.factor;t.recover>0&&(t.recover-=e,h*=.5);const d=Math.max(40,l*4+15),{pts:f,vCap:g}=this._samplePath(t,d);h=Math.max(.5,Math.min(h,g));let _=1/0,m=0,p=null;const x=t.width/2+.35;for(const D of i)if(D.ref!==t&&!(Math.abs(D.x-t.x)>d+15||Math.abs(D.z-t.z)>d+15))for(const N of D.circles)for(const B of f){if(B.d<t.length/2-.5)continue;if(Math.hypot(B.x-N.x,B.z-N.z)<N.r+x){const X=B.d-t.length/2-N.r;if(X<_){_=X;const K=Di(D.yaw);m=Math.max(0,D.speed*(K.x*B.dx+K.z*B.dz)),p=D.ref}break}}let E=1/0,M=!1;const L=t.plan[0];if(!c.isConnector&&c.approach&&L&&L.isConnector){const D=c.approach,N=c.length-t.s-t.length/2-.6,B=Math.max(6,l*l/6+4),W=D.node,X=D.control;if(X==="signal"){const K=a.stateOf(D),Y=N>l*l/(2*3.5)+.5;t.reservation===W||(K==="green"||K==="yellow"&&!Y?N<B&&!this._tryReserve(t,W,L,!1,n)&&(E=N):E=N),M=N<60&&E!==1/0}else X==="stop"?(t.stopDone?t.reservation!==W&&!this._tryReserve(t,W,L,!0,n)&&(E=N):(E=N,N<1.8&&l<.3&&(t.stopTimer+=e,t.stopTimer>1.2&&(t.stopDone=!0))),M=N<60):X==="giveway"?(N<25&&(h=Math.min(h,4.5)),t.reservation!==W&&N<B&&!this._tryReserve(t,W,L,!0,n)&&(E=N),M=N<40):X==="priority"&&t.reservation!==W&&N<B&&!this._tryReserve(t,W,L,!1,n)&&(E=N)}const A=(D,N,B)=>{for(const W of D.crossings){const X=N+(W.s-B);if(!(X<0||X>45)&&r.isBlocked(W.crossing)){const K=X-t.length/2-3.6;K>-1.5&&(E=Math.min(E,Math.max(0,K)))}}};A(c,0,t.s),L&&A(L,c.length-t.s,0);const R=(D,N)=>{const B=Math.max(.05,D),W=o.s0+Math.max(0,l*o.T+l*(l-N)/(2*Math.sqrt(o.a*o.b)));return o.a*(1-Math.pow(l/h,4)-(W/B)**2)};let y=o.a*(1-Math.pow(l/h,4));if(_<1/0&&(y=Math.min(y,R(_,m))),E<1/0){const D=Math.max(.05,E+o.s0-.6);y=Math.min(y,R(D,0)),E<.3&&l<1.5&&(y=Math.min(y,-6))}for(y=Math.max(-9,Math.min(o.a,y)),y<-6&&l>3&&(t.recover=2),t.v=Math.max(0,l+y*e),t.v<.05&&y<0&&(t.v=0),t.acc=y,this._laneChangeLogic(t,e,_,m,h,n),t.s+=t.v*e;t.s>t.lane.length;){const D=t.s-t.lane.length,N=t.plan.shift();if(!N){this._remove(t);return}t.lane.isConnector&&t.reservation&&(t.reservation.reservations.delete(t),t.reservation=null),N.isConnector&&!t.reservation&&N.node.control!=="none"&&(N.node.reservations.set(t,N),t.reservation=N.node),t.prevLane=t.lane,t.lane=N,t.s=D,t.stopDone=!1,t.stopTimer=0,t.lc=null,this._ensurePlan(t)}t.lc||t.lcPrep>0?t.state="CHANGE_LANE":t.lane.isConnector&&t.lane.turn!=="S"?t.state="TURN":t.v<.2&&(E<3||_<4)?t.state="WAIT":t.recover>0?t.state="RECOVER":y<-2.5?t.state="BRAKE":M?t.state="APPROACH_STOP":t.state="FOLLOW_LANE",t.stuck=t.v<.1?t.stuck+e:0,t.leaderRef=p;let v=0;const T=t.lane.isConnector?t.lane:t.plan[0]&&t.plan[0].isConnector&&t.lane.length-t.s<45?t.plan[0]:null;T&&T.turn==="L"&&(v=-1),T&&T.turn==="R"&&(v=1),t.lcDir&&(t.lc||t.lcPrep>0)&&(v=t.lcDir),t.signal=v,this._pose(t,e)}_laneChangeLogic(t,e,n,i,r,a){const o=t.lane;if(t.lc){t.lc.t+=e/3.2,t.lc.t>=1&&(t.lc=null,t.lcDir=0);return}if(!(o.isConnector||o.edge.kind!=="highway"||t.scripted)){if(t.lcCooldown-=e,t.lcPrep>0){if(t.lcPrep-=e,t.lcPrep<=0){const l=t.lcTarget;if(t.lcTarget=null,l&&this._laneSafe(t,l,a)){const c=this.net.laneSToCenter(o,t.s),u=this.net.centerToLaneS(l,c);t.lc={t:0,off:o.offset-l.offset},t.prevLane=null,t.lane=l,t.s=u,t.plan=[],t.lcCooldown=14+Math.random()*10}else t.lcDir=0}return}if(!(t.lcCooldown>0)){if(o.rightLane&&n<45&&i<r-3&&this._laneSafe(t,o.rightLane,a,40)){t.lcTarget=o.rightLane,t.lcDir=1,t.lcPrep=1.6;return}o.leftLane&&n>120&&this._laneSafe(t,o.leftLane,a,90)&&(t.lcTarget=o.leftLane,t.lcDir=-1,t.lcPrep=1.6)}}}_laneSafe(t,e,n,i=28){const r=this.net.laneSToCenter(t.lane,t.s),a=this.net.centerToLaneS(e,r),o=this.net.lanePointAt(e,a),l=(c,u,h,d,f)=>{const g=Dn(t.yaw,o.x,o.z,c,u);if(Math.abs(g.right)>2.4)return!0;const _=Math.abs(g.fwd)-t.length/2-f/2;return g.fwd>0?_>i*.5+Math.max(0,t.v-d)*2:_>Math.max(15,(d-t.v)*4)};for(const c of this.npcs)if(c!==t&&!(Math.abs(c.x-t.x)>120||Math.abs(c.z-t.z)>120)&&!l(c.x,c.z,c.yaw,c.v,c.length))return!1;return l(n.x,n.z,n.yaw,n.speed,n.length)}_pathPoint(t,e){let n=t.lane,i=t.s+e,r=0;for(;i>n.length&&r<t.plan.length;)i-=n.length,n=t.plan[r++];return i<0&&t.prevLane&&(i+=t.prevLane.length,n=t.prevLane),this.net.lanePointAt(n,Math.max(0,Math.min(n.length,i)))}_pose(t,e){const n=t.length*.32,i=this._pathPoint(t,n),r=this._pathPoint(t,-n),a=this.net.lanePointAt(t.lane,Math.min(t.s,t.lane.length));let o=(i.x+r.x)/2,l=(i.z+r.z)/2;const c=i.x-r.x,u=i.z-r.z;let h=Math.hypot(c,u)>.5?Math.atan2(-c,-u):Math.atan2(-a.dx,-a.dz);if(t.lc){const _=t.lc.t,m=1-lg(_),p=a.dz,x=-a.dx;o+=p*t.lc.off*m,l+=x*t.lc.off*m;const E=6*_*(1-_)/3.2,M=-t.lc.off*E;h+=Math.atan2(M,Math.max(t.v,1))}t.x=o,t.z=l,t.yaw=h,t.speed=t.v;const d=t.model.group;d.position.set(o,0,l),d.rotation.y=h,t.blink=(t.blink||0)+e;const f=Math.floor(t.blink*2.6)%2===0,g=(t.acc??0)<-.8||t.v<.3;(g!==t._brakeShown||t.signal!==t._sigShown||f!==t._onShown)&&(yg(t.model.lights,g,t.signal===-1&&f,t.signal===1&&f),t._brakeShown=g,t._sigShown=t.signal,t._onShown=f)}}class Xg{constructor(t){this.world=t}playerOBB(t){return bl(t.x,t.z,t.yaw,t.length/2,t.width/2)}check(t,e,n,i){const r=this.playerOBB(t);for(const a of e.npcs){if(Math.abs(a.x-t.x)>14||Math.abs(a.z-t.z)>14)continue;const o=bl(a.x,a.z,a.yaw,a.length/2,a.width/2);if(Tl(r,o))return{type:"vehicle",other:a,reason:this._reason(t,a,i)}}for(const a of n.peds)if(!(Math.abs(a.x-t.x)>6||Math.abs(a.z-t.z)>6)&&hg(r,a.x,a.z,.3))return{type:"pedestrian",reason:"Anda melanggar pejalan kaki."};for(const a of this.world.collidersNear(t.x,t.z,6))if(Tl(r,a))return Math.abs(t.speed)*De<5?{type:"bump",collider:a}:{type:"static",reason:`Anda melanggar ${a.kind==="building"?"bangunan":a.kind==="tree"?"pokok":a.kind==="barrier"?"penghadang jalan":"tiang tepi jalan"}.`};return null}_reason(t,e,n){const i=Dn(t.yaw,t.x,t.z,e.x,e.z),r=Math.abs(_n(e.yaw-t.yaw));return r>2.3?"Anda bertembung dengan kenderaan dari arah bertentangan.":n&&Math.abs(i.right)>1?"Anda gagal mengelakkan perlanggaran ketika menukar lorong.":r>.8?"Anda berlanggar dengan kenderaan di persimpangan.":i.fwd>1.5?"Anda melanggar kenderaan di hadapan.":i.fwd<-1.5?t.speed<0?"Anda mengundur dan melanggar kenderaan di belakang.":"Kenderaan di belakang melanggar anda — elakkan brek mengejut tanpa sebab dan jangan berhenti di tengah jalan.":"Anda berlanggar dengan kenderaan di sebelah."}}class Yg{constructor(t,e,{onWarning:n,onEvent:i}){this.world=t,this.net=t.network,this.traffic=e,this.onWarning=n,this.onEvent=i,this.reset()}reset(){this.time=0,this.lastSignal={"-1":-99,1:-99},this.lastGlance={"-1":-99,1:-99},this.speed={timer:0,flag:!1},this.track=null,this.passage=null,this.dbl={flag:!1,clear:0},this.overtake=null,this.wrongSide={timer:0,flag:!1},this.noEntry={timer:0,flag:!1},this.laneIdx=null,this.lastLaneChange={time:-99,dir:0},this.passMap=new Map,this.tail={timer:0,flag:!1},this.cross=new Map,this.off={timer:0,flag:!1},this.currentLimit=null,this.edgeLoc=null,this.prevStraddle=!1}warn(t,e={}){this.overtake&&(this.overtake.unsafe=!0),this.onWarning(t,e)}update(t,e,n){this.time+=t;const i=this.time,r=Math.abs(e.speed)*De,a=Math.max(0,e.speed);e.signal!==0&&(this.lastSignal[String(e.signal)]=i),n>.25&&(this.lastGlance[-1]=i),n<-.25&&(this.lastGlance[1]=i);const o=this.net.locateEdge(e.x,e.z);this.edgeLoc=o;const l=-Math.sin(e.yaw),c=-Math.cos(e.yaw);if(o&&o.inTrim&&(this.currentLimit=this.net.limitAt(o.edge,o.s)),this.currentLimit&&(r>this.currentLimit+3?(this.speed.timer+=t,this.speed.timer>1.5&&!this.speed.flag&&(this.speed.flag=!0,this.warn("SPEEDING",{limit:this.currentLimit}))):r<=this.currentLimit&&(this.speed.timer=0,this.speed.flag=!1)),this._stopLines(o,e,r,l,c),this._passage(o,e),o&&o.inTrim&&o.onRoad){const h=o.edge,d=o.tx*l+o.tz*c>=0?1:-1,f=o.d*d,g=e.width/2;!h.twoWay&&d<0&&r>3?(this.noEntry.timer+=t,this.noEntry.timer>.6&&!this.noEntry.flag&&(this.noEntry.flag=!0,this.warn("NO_ENTRY"))):(d>0||h.twoWay)&&(this.noEntry.timer=0,this.noEntry.flag=!1),h.twoWay&&h.median===0?this._twoLane(t,h,o,d,f,g,e,r,a):this.prevStraddle=!1;const _=d>0?h.lanesFwd:h.lanesBwd;h.twoWay&&_>1?this._multiLane(h,f,_,e,a):this.laneIdx=null}else this.laneIdx=null;this._overtakeLeft(e,o,a),this._tailgate(t,e,a),this._crossings(e,l,c);const u=o&&o.onRoad||this.net.nodeAt(e.x,e.z,2);!u&&r>2?(this.off.timer+=t,this.off.timer>1.5&&!this.off.flag&&(this.off.flag=!0,this.warn("OFF_ROAD"))):u&&(this.off.timer=0,this.off.flag=!1)}_stopLines(t,e,n,i,r){const a=this.net;if(t&&t.inTrim&&t.onRoad){const h=t.tx*i+t.tz*r>=0?1:-1,d=t.edge;if(!this.track||this.track.edge!==d||this.track.dirSign!==h){const f=a.nodes.get(h>0?d.to:d.from),g=f.approaches.find(_=>_.edgeId===d.id&&_.lanes[0].dir===h);g&&f.control!=="end"?this.track={edge:d,node:f,ap:g,dirSign:h,prevD:null,minKmh:1/0}:this.track=null}}const o=this.track;if(!o)return;const l=a.projectOnEdge(o.edge,e.x,e.z),c=o.dirSign>0?o.edge.length-o.edge.rTo:o.edge.rFrom,u=(o.dirSign>0?c-l.s:l.s-c)-e.length/2;if(u<14&&(o.minKmh=Math.min(o.minKmh,n)),o.prevD===null){o.prevD=u;return}if(o.prevD>0&&u<=0&&l.dist<Math.max(o.edge.leftHalf,o.edge.rightHalf)+2){this._onStopLine(o,e),this.track=null;return}o.prevD=u,(u>120||l.dist>15)&&(this.track=null)}_onStopLine(t,e){const n=t.ap,i=n.control;i==="signal"&&(this.world.lights.stateOf(n)==="red"?this.warn("RED_LIGHT"):this.onEvent("signalPassed",{node:t.node.id})),i==="stop"&&(t.minKmh>2?this.warn("STOP_SIGN"):this.onEvent("stopSignComplied",{node:t.node.id})),(i==="stop"||i==="giveway")&&(this._conflictingTraffic(t.node,n)?this.warn("GIVE_WAY"):i==="giveway"&&this.onEvent("gaveWay",{node:t.node.id})),i!=="none"&&(this.passage={node:t.node,ap:n,entryYaw:e.yaw,crossTime:this.time})}_conflictingTraffic(t,e){for(const n of this.traffic.npcs){if(n.lane.isConnector&&n.lane.node===t&&n.lane.fromLane.approach!==e)return!0;const i=n.lane.approach;if(!i||i.node!==t||i===e||i.control!=="priority")continue;const r=n.lane.length-n.s;if(n.v>2&&r<Math.max(15,n.v*3))return!0}return!1}_passage(t,e){const n=this.passage;if(!n)return;if(this.time-n.crossTime>25){this.passage=null;return}if(!t||!t.inTrim||t.edge.id===n.ap.edgeId)return;const i=_n(e.yaw-n.entryYaw),r=i>.6?"L":i<-.6?"R":"S";if(this.passage=null,r==="S"||Math.abs(i)>2.6)return;const a=r==="L"?-1:1;this.lastSignal[String(a)]>=n.crossTime-6?this.onEvent("turnSignalled",{turn:r}):this.warn("NO_SIGNAL_TURN",{dir:r==="L"?"ke kiri":"ke kanan"})}_twoLane(t,e,n,i,r,a,o,l,c){const u=this.time,h=r<a-.05,d=r<-a,f=this.net.centerMarkAt(e,n.s);if(h&&f==="double"&&l>3?(this.dbl.flag||(this.dbl.flag=!0,this.warn("DOUBLE_LINE")),this.dbl.clear=0):r>a+.3&&(this.dbl.clear+=t,this.dbl.clear>2&&(this.dbl.flag=!1)),h&&!this.prevStraddle&&!this.overtake&&l>10){const g=[];for(const _ of this.traffic.npcs){const m=Dn(o.yaw,o.x,o.z,_.x,_.z);Math.abs(_n(_.yaw-o.yaw))<.6&&m.fwd>0&&m.fwd<60&&Math.abs(m.right)<3&&g.push(_)}this.overtake={targets:g,unsafe:!1,start:u},g.length&&(o.signal===1||this.lastSignal[1]>=u-3||this.warn("NO_SIGNAL_OVERTAKE"),f==="double"&&(this.overtake.unsafe=!0))}if(this.prevStraddle=h,h)for(const g of this.traffic.npcs){if(Math.abs(_n(g.yaw-o.yaw))<2.4)continue;const m=Dn(o.yaw,o.x,o.z,g.x,g.z);if(m.fwd<=0||m.fwd>180||Math.abs(m.right)>2.6)continue;const p=m.fwd-o.length/2-g.length/2,x=c+g.v;if(x>1&&p/x<3.5){(!this.overtake||!this.overtake.oncomingWarned)&&(this.warn("ONCOMING_CLOSE"),this.overtake?this.overtake.oncomingWarned=!0:this.overtake={targets:[],unsafe:!0,start:u,oncomingWarned:!0});break}}if(this.overtake&&r>a+.2){const g=this.overtake;this.overtake=null;const _=g.targets.filter(m=>this.traffic.npcs.includes(m)&&Dn(o.yaw,o.x,o.z,m.x,m.z).fwd<-(o.length/2+m.length/2));_.length&&(g.unsafe?this.onEvent("overtakeUnsafe",{}):this.onEvent("overtakeSafe",{types:_.map(m=>m.type)}))}if(d){this.wrongSide.timer+=t;const g=this.overtake&&this.overtake.targets.length?10:3;this.wrongSide.timer>g&&!this.wrongSide.flag&&(this.wrongSide.flag=!0,this.warn("WRONG_SIDE"))}else r>a&&(this.wrongSide.timer=0,this.wrongSide.flag=!1)}_multiLane(t,e,n,i,r){const a=t.laneWidth,o=t.median/2,l=f=>o+(n-f-.5)*a;let c=null;for(let f=0;f<n;f++)Math.abs(e-l(f))<1.1&&(c=f);if(c===null)return;if(this.laneIdx===null){this.laneIdx=c;return}if(c===this.laneIdx)return;const u=c<this.laneIdx?-1:1;this.laneIdx=c;const h=this.time;this.lastLaneChange={time:h,dir:u};let d=!0;this.lastSignal[String(u)]<h-4&&(d=!1,this.warn("NO_SIGNAL_LANE")),this.lastGlance[String(u)]<h-6&&(d=!1,this.warn("NO_MIRROR_CHECK")),this._gapUnsafe(i,r)&&(d=!1,this.warn("UNSAFE_LANE_CHANGE")),d&&this.onEvent("safeLaneChange",{dir:u})}_gapUnsafe(t,e){for(const n of this.traffic.npcs){if(Math.abs(_n(n.yaw-t.yaw))>.6)continue;const r=Dn(t.yaw,t.x,t.z,n.x,n.z);if(Math.abs(r.right)>1.7)continue;const a=t.length/2+n.length/2;if(r.fwd>0&&r.fwd-a<Math.max(4,(e-n.v)*1.5)||r.fwd<=0&&-r.fwd-a<Math.max(5,(n.v-e)*2))return!0}return!1}_overtakeLeft(t,e,n){const i=new Set;for(const r of this.traffic.npcs){if(Math.abs(r.x-t.x)>40||Math.abs(r.z-t.z)>40||Math.abs(_n(r.yaw-t.yaw))>.5)continue;const o=Dn(t.yaw,t.x,t.z,r.x,r.z);i.add(r.id);const l=this.passMap.get(r.id);if(this.passMap.set(r.id,o.fwd),l!==void 0&&l>2&&o.fwd<=-2&&o.right>1.8&&o.right<9&&n*De>r.v*De+8){const c=e&&e.edge&&(e.edge.lanesFwd>1||e.edge.lanesBwd>1),u=this.time-this.lastLaneChange.time<10&&this.lastLaneChange.dir===-1;(!c||u)&&this.warn("OVERTAKE_LEFT")}}for(const r of this.passMap.keys())i.has(r)||this.passMap.delete(r)}_tailgate(t,e,n){let i=null;for(const a of this.traffic.npcs){if(Math.abs(a.x-e.x)>80||Math.abs(a.z-e.z)>80||Math.abs(_n(a.yaw-e.yaw))>.5)continue;const l=Dn(e.yaw,e.x,e.z,a.x,a.z);if(l.fwd<=0||Math.abs(l.right)>1.5)continue;const c=l.fwd-e.length/2-a.length/2;(!i||c<i.gap)&&(i={gap:c,n:a})}this.leaderGap=i?i.gap:null;const r=i&&n>.5?i.gap/n:1/0;this.headway=r,n>30/De&&r<1?(this.tail.timer+=t,this.tail.timer>2&&!this.tail.flag&&(this.tail.flag=!0,this.warn("TAILGATING"))):(r>1.8||n<20/De)&&(this.tail.timer=0,this.tail.flag=!1)}_crossings(t,e,n){for(const i of this.net.crossings){const r=i.x-t.x,a=i.z-t.z;if(Math.abs(r)>40||Math.abs(a)>40){this.cross.delete(i.id);continue}const o=r*e+a*n-t.length/2,l=Math.abs(r*n-a*e),c=this.cross.get(i.id);this.cross.set(i.id,o),!(c===void 0||l>i.halfRoad+1.5)&&c>0&&o<=0&&i.peds.some(h=>Math.abs(h.u)<i.halfRoad+.2&&h.state==="CROSS")&&this.warn("PED_CROSSING")}}}class qg{constructor(t,{onComplete:e,onObjectivesChanged:n,onCheckpoint:i}){this.world=t,this.net=t.network,this.onComplete=e,this.onObjectivesChanged=n,this.onCheckpoint=i,this.mission=null,this.marker=this._buildMarker(),this.marker.visible=!1,t.scene.add(this.marker)}_buildMarker(){const t=new oe,e=new on({color:2744575,transparent:!0,opacity:.55,depthWrite:!1}),n=new it(new Ni(3.4,.12,8,40,Math.PI),e);n.position.y=0,t.add(n);const i=new it(new Ii(.6,1.4,4),new on({color:16765503}));return i.rotation.x=Math.PI,i.position.y=5.2,t.add(i),this.arrow=i,this.ringMat=e,t.traverse(r=>r.layers.set(ar)),t}start(t){this.mission=t,this.reset()}reset(){var e;const t=this.mission;this.time=0,this.cpIndex=0,this.done=!1,this.warnings=[],this.counts={},this.failed=new Set,this.checkpoints=((t==null?void 0:t.checkpoints)||[]).map(n=>{const i=this.net.laneSpot(n.edge,n.dir,n.t,0);return{...n,x:i.x,z:i.z,dx:i.dx,dz:i.dz}}),this._placeMarker(),(e=this.onObjectivesChanged)==null||e.call(this)}get isFree(){return!this.mission||!this.mission.objectives}get currentCheckpoint(){return this.checkpoints[this.cpIndex]||null}_placeMarker(){const t=this.currentCheckpoint;if(!t){this.marker.visible=!1;return}this.marker.visible=!0,this.marker.position.set(t.x,0,t.z),this.marker.rotation.y=Math.atan2(-t.dx,-t.dz),this.ringMat.color.set(t.finish?7208826:2744575)}onWarning(t){var e;if(!(!this.mission||this.done)){this.warnings.push(t);for(const n of this.mission.objectives||[])n.type==="avoid"&&n.warnings.includes(t)&&this.failed.add(n.id);(e=this.onObjectivesChanged)==null||e.call(this)}}onEvent(t){var e;!this.mission||this.done||(this.counts[t]=(this.counts[t]||0)+1,(e=this.onObjectivesChanged)==null||e.call(this))}objectiveStatus(t){if(t.type==="route"){const e=this.checkpoints.length;return{done:this.cpIndex>=e,progress:`${Math.min(this.cpIndex,e)}/${e}`}}if(t.type==="count"){const e=this.counts[t.event]||0;return{done:e>=t.target,progress:`${Math.min(e,t.target)}/${t.target}`}}return t.type==="avoid"?{done:!this.failed.has(t.id),failed:this.failed.has(t.id),progress:this.failed.has(t.id)?"GAGAL":"OK"}:{done:!1}}update(t,e){var r,a;if(!this.mission||this.done)return;this.time+=t,this.arrow.position.y=5.2+Math.sin(this.time*3)*.3,this.arrow.rotation.y+=t*2;const n=this.currentCheckpoint;if(!n)return;Math.hypot(e.x-n.x,e.z-n.z)<7.5&&(this.cpIndex++,(r=this.onCheckpoint)==null||r.call(this,n,this.currentCheckpoint),this._placeMarker(),(a=this.onObjectivesChanged)==null||a.call(this),(n.finish||!this.currentCheckpoint)&&this._finish())}_finish(){var r;this.done=!0;const t=(this.mission.objectives||[]).map(a=>({...a,status:this.objectiveStatus(a)})),e=t.every(a=>a.status.done),n=this.warnings.length,i=e?n===0?3:n<=2?2:1:0;(r=this.onComplete)==null||r.call(this,{passed:e,stars:i,time:this.time,warnings:[...this.warnings],objectives:t})}distanceToCheckpoint(t){const e=this.currentCheckpoint;return e?Math.hypot(t.x-e.x,t.z-e.z):null}}class jg{constructor(){this.ctx=null,this.enabled=!0,this.volume=.7}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});return}try{const a=window.AudioContext||window.webkitAudioContext;if(!a)return;this.ctx=new a}catch{this.ctx=null;return}const t=this.ctx;this.master=t.createGain(),this.master.gain.value=this.enabled?this.volume:0,this.master.connect(t.destination),this.engGain=t.createGain(),this.engGain.gain.value=0,this.engFilter=t.createBiquadFilter(),this.engFilter.type="lowpass",this.engFilter.frequency.value=600,this.osc1=t.createOscillator(),this.osc1.type="sawtooth",this.osc2=t.createOscillator(),this.osc2.type="square";const e=t.createGain();e.gain.value=.35,this.osc1.connect(this.engFilter),this.osc2.connect(e).connect(this.engFilter),this.engFilter.connect(this.engGain).connect(this.master),this.osc1.start(),this.osc2.start();const n=t.sampleRate*2;this.noiseBuf=t.createBuffer(1,n,t.sampleRate);const i=this.noiseBuf.getChannelData(0);let r=0;for(let a=0;a<n;a++){const o=Math.random()*2-1;r=(r+.02*o)/1.02,i[a]=r*3.5}this.ambient=this._loopNoise(180,0),this.brakeN=this._loopNoise(2600,0,"bandpass")}_loopNoise(t,e,n="lowpass"){const i=this.ctx,r=i.createBufferSource();r.buffer=this.noiseBuf,r.loop=!0;const a=i.createBiquadFilter();a.type=n,a.frequency.value=t,n==="bandpass"&&(a.Q.value=6);const o=i.createGain();return o.gain.value=e,r.connect(a).connect(o).connect(this.master),r.start(),o}setEnabled(t,e=this.volume){this.enabled=t,this.volume=e,this.master&&this.master.gain.setTargetAtTime(t?e:0,this.ctx.currentTime,.05)}update(t,e,n,i){if(!this.ctx)return;const r=this.ctx.currentTime,a=Math.abs(t),o=[0,6,12,19,27,36,50];let l=1;for(;l<o.length-1&&a>o[l];)l++;const c=o[l-1],u=o[l],d=(900+(a-c)/(u-c)*3800*(.6+.4*e))/60;this.osc1.frequency.setTargetAtTime(d,r,.05),this.osc2.frequency.setTargetAtTime(d*.5,r,.05),this.engFilter.frequency.setTargetAtTime(350+e*900+a*10,r,.08),this.engGain.gain.setTargetAtTime(i?.06+e*.07:0,r,.1),this.ambient.gain.setTargetAtTime(i?.05+Math.min(.12,a*.004):.02,r,.3),this.brakeN.gain.setTargetAtTime(i&&n>.6&&a>6?.025:0,r,.05)}_beep(t,e,n="triangle",i=.15,r=0){if(!this.ctx)return;const a=this.ctx,o=a.currentTime+r,l=a.createOscillator();l.type=n,l.frequency.value=t;const c=a.createGain();c.gain.setValueAtTime(0,o),c.gain.linearRampToValueAtTime(i,o+.01),c.gain.exponentialRampToValueAtTime(1e-4,o+e),l.connect(c).connect(this.master),l.start(o),l.stop(o+e+.02)}tick(t){this._beep(t?1800:1400,.03,"square",.06)}warning(){this._beep(880,.16,"triangle",.18),this._beep(660,.2,"triangle",.18,.18)}chime(){this._beep(660,.12,"sine",.15),this._beep(990,.25,"sine",.15,.12)}crash(){if(!this.ctx)return;const t=this.ctx,e=t.createBufferSource();e.buffer=this.noiseBuf;const n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=1400;const i=t.createGain(),r=t.currentTime;i.gain.setValueAtTime(.9,r),i.gain.exponentialRampToValueAtTime(.001,r+1.2),e.connect(n).connect(i).connect(this.master),e.start(r),e.stop(r+1.3),this._beep(120,.5,"sawtooth",.25)}}const Gt={MENU:"MENU",PROFILE:"PROFILE",MISSION_SELECT:"MISSION_SELECT",BRIEFING:"BRIEFING",PLAYING:"PLAYING",PAUSED:"PAUSED",DIALOG:"DIALOG",GAME_OVER:"GAME_OVER",COMPLETE:"COMPLETE"},Cc="mrh3d.settings.v1",Pc="mrh3d.progress.v1",$r={steeringSensitivity:1,controlMode:"auto",graphics:"medium",mirrorQuality:"medium",sound:!0,volume:.7,drivingMode:"learning",pauseOnDialog:!0,autoDialogs:!0};function Lc(s){try{const t=localStorage.getItem(s);return t?JSON.parse(t):null}catch{return null}}function Ic(s,t){try{return localStorage.setItem(s,JSON.stringify(t)),!0}catch{return!1}}function Kg(){const s=Lc(Cc),t={...$r};if(s&&typeof s=="object")for(const e of Object.keys($r))typeof s[e]==typeof $r[e]&&(t[e]=s[e]);return t}function $g(s){return Ic(Cc,s)}function Nc(){const s=Lc(Pc);return s&&typeof s=="object"&&s.missions?s:{missions:{}}}function Jg(s,t){const e=Nc(),n=e.missions[s]||{completed:!1,bestStars:0,bestTime:null,attempts:0};return n.attempts+=1,t.passed&&(n.completed=!0,n.bestStars=Math.max(n.bestStars,t.stars),n.bestTime=n.bestTime===null?t.time:Math.min(n.bestTime,t.time)),e.missions[s]=n,Ic(Pc,e),n}const Ks=[{id:"m1",no:1,title:"KAWASAN PERUMAHAN",summary:"Kawal kereta di taman perumahan, patuhi papan BERHENTI dan BERI LALUAN, dan beri signal di setiap simpang.",area:"residential",start:{edge:"e_n01_n11",dir:1,t:40},traffic:{count:{low:6,medium:9,high:12},kinds:["residential","city"]},checkpoints:[{edge:"e_n10_n11",dir:-1,t:45,hint:"Di simpang BERI LALUAN hadapan, beri signal kiri (Q) dan belok KIRI."},{edge:"e_n00_n10",dir:-1,t:55,hint:"Berhenti penuh di papan BERHENTI, kemudian beri signal kiri dan belok KIRI."},{edge:"e_n00_n01",dir:1,t:90,hint:"Ikut selekoh ke selatan."},{edge:"e_n01_n11",dir:1,t:110,hint:"Di simpang T, beri signal kiri dan belok KIRI. Destinasi di sebelah kiri jalan.",finish:!0}],objectives:[{id:"route",type:"route",label:"Ikut laluan hingga ke rumah destinasi"},{id:"stop",type:"count",event:"stopSignComplied",target:1,label:"Berhenti penuh di papan BERHENTI"},{id:"signal",type:"avoid",warnings:["NO_SIGNAL_TURN"],label:"Beri signal setiap kali membelok di simpang"},{id:"giveway",type:"avoid",warnings:["GIVE_WAY","STOP_SIGN"],label:"Patuhi papan BERHENTI dan BERI LALUAN"},{id:"speed",type:"avoid",warnings:["SPEEDING"],label:"Jangan melebihi had laju 30 km/j"}]},{id:"m2",no:2,title:"JALAN BANDAR",summary:"Pandu di bandar yang sibuk. Patuhi lampu isyarat, kekalkan jarak selamat dan berhati-hati di kawasan sekolah.",area:"city",start:{edge:"e_n10_n20",dir:1,t:50},traffic:{count:{low:10,medium:16,high:22},kinds:["city","residential"]},checkpoints:[{edge:"e_n20_n30",dir:1,t:130,hint:"Di lampu isyarat hadapan, jalan TERUS ke timur. Awas lintasan pejalan kaki."},{edge:"e_n30_n31",dir:1,t:60,hint:"Ikut selekoh ke selatan."},{edge:"e_n21_n31",dir:-1,t:50,hint:"Di lampu isyarat, beri signal kanan (E) dan belok KANAN."},{edge:"e_n21_n22",dir:1,t:130,hint:"Di lampu isyarat, belok KIRI ke kawasan sekolah. Had laju 30 km/j."},{edge:"e_n22_n32",dir:1,t:80,hint:"Di lampu isyarat, beri signal kiri dan belok KIRI ke destinasi.",finish:!0}],objectives:[{id:"route",type:"route",label:"Sampai ke destinasi di timur sekolah"},{id:"lights",type:"count",event:"signalPassed",target:4,label:"Lalui 4 lampu isyarat dengan betul"},{id:"red",type:"avoid",warnings:["RED_LIGHT"],label:"Jangan melanggar lampu merah"},{id:"gap",type:"avoid",warnings:["TAILGATING"],label:"Kekalkan jarak selamat"},{id:"speed",type:"avoid",warnings:["SPEEDING"],label:"Ikut had laju (50 km/j, 30 km/j di sekolah)"},{id:"ped",type:"avoid",warnings:["PED_CROSSING"],label:"Beri laluan kepada pejalan kaki"}]},{id:"m3",no:3,title:"MEMOTONG DENGAN SELAMAT",summary:"Jalan kampung dua hala. Sebuah lori perlahan di hadapan. Kenal pasti kawasan larangan memotong dan potong hanya apabila selamat.",area:"rural",start:{edge:"e_n20_kEnd",dir:1,t:40},traffic:{count:{low:0,medium:0,high:0},kinds:[],oncoming:{edge:"e_n20_kEnd",dir:-1}},scripted:[{type:"lorry",edge:"e_n20_kEnd",dir:1,t:120,speedKmh:40}],checkpoints:[{edge:"e_n20_kEnd",dir:1,t:400,hint:"Garisan putus-putus: memotong dibenarkan JIKA jalan di hadapan jelas."},{edge:"e_n20_kEnd",dir:1,t:1e3,hint:"Perhatikan garisan berkembar di selekoh — dilarang memotong."},{edge:"e_n20_kEnd",dir:1,t:1880,hint:"Teruskan ke penghujung jalan kampung.",finish:!0}],objectives:[{id:"route",type:"route",label:"Sampai ke penghujung jalan kampung"},{id:"overtake",type:"count",event:"overtakeSafe",target:1,label:"Potong lori dengan selamat (garisan putus-putus, jalan jelas)"},{id:"double",type:"avoid",warnings:["DOUBLE_LINE"],label:"Jangan melintasi garisan berkembar"},{id:"oncoming",type:"avoid",warnings:["ONCOMING_CLOSE"],label:"Jangan memotong ketika trafik bertentangan hampir"},{id:"speed",type:"avoid",warnings:["SPEEDING"],label:"Jangan melebihi had laju 70 km/j"}]},{id:"m4",no:4,title:"LEBUH RAYA",summary:"Lebuh raya tiga lorong. Urus kelajuan, kekalkan jarak, dan tukar lorong dengan signal serta semakan cermin.",area:"highway",start:{edge:"e_hS_hN",dir:1,t:90,lane:0},traffic:{count:{low:10,medium:16,high:24},kinds:["highway"]},checkpoints:[{edge:"e_hS_hN",dir:1,t:900,hint:"Kekal di lorong kiri kecuali ketika memotong. Toleh cermin (Z/C) sebelum tukar lorong."},{edge:"e_hS_hN",dir:1,t:2e3,hint:"Kekalkan jarak sekurang-kurangnya 2 saat."},{edge:"e_hS_hN",dir:1,t:3150,hint:"Teruskan ke penanda destinasi.",finish:!0}],objectives:[{id:"route",type:"route",label:"Sampai ke penanda destinasi lebuh raya"},{id:"lanes",type:"count",event:"safeLaneChange",target:3,label:"Buat 3 pertukaran lorong yang selamat (signal + cermin)"},{id:"gap",type:"avoid",warnings:["TAILGATING"],label:"Kekalkan jarak selamat"},{id:"speed",type:"avoid",warnings:["SPEEDING"],label:"Jangan melebihi had laju 110 km/j"},{id:"unsafe",type:"avoid",warnings:["UNSAFE_LANE_CHANGE"],label:"Jangan tukar lorong secara tidak selamat"}]}],Zg=[{id:"free_res",title:"Taman Perumahan",start:{edge:"e_n01_n11",dir:1,t:40},kinds:["residential","city"]},{id:"free_city",title:"Pusat Bandar",start:{edge:"e_n10_n20",dir:1,t:50},kinds:["city","residential"]},{id:"free_rural",title:"Jalan Kampung",start:{edge:"e_n20_kEnd",dir:1,t:40},kinds:["rural","city"]},{id:"free_hw",title:"Lebuh Raya",start:{edge:"e_hS_hN",dir:1,t:90,lane:0},kinds:["highway"]}],Dc={LAW:{id:"LAW",label:"Undang-undang / larangan rasmi"},SIGN:{id:"SIGN",label:"Arahan papan tanda"},SAFETY:{id:"SAFETY",label:"Nasihat keselamatan"},SIM:{id:"SIM",label:"Peraturan simulasi"}},Ga={VERIFIED:{id:"VERIFIED",label:"Disahkan dengan sumber rasmi",tone:"ok"},COMMON:{id:"COMMON",label:"Maksud lazim — belum disemak semula dengan dokumen rasmi JPJ",tone:"info"},PENDING:{id:"PENDING",label:"Perlu pengesahan",tone:"warn"},NA:{id:"NA",label:"Peraturan simulasi (bukan undang-undang)",tone:"sim"}},Qg=["Jabatan Pengangkutan Jalan Malaysia (JPJ) — https://www.jpj.gov.my/","Akta Pengangkutan Jalan 1987 (Akta 333) dan pindaan","Kaedah-Kaedah Lalu Lintas Jalan 1959"],Ji={text:"Akta Pengangkutan Jalan 1987 (Akta 333) dan kaedah-kaedah lalu lintas berkaitan",status:"PENDING",note:"Nombor seksyen/kaedah khusus belum disahkan terhadap teks rasmi terkini — tidak dipaparkan."},t0={STOP:{type:"STOP",name:"BERHENTI",shape:"octagon",meaning:"Pemandu perlu berhenti sepenuhnya.",action:"Berhenti di tempat yang sesuai dan selamat (sebelum garisan berhenti), periksa trafik dan teruskan hanya apabila selamat serta dibenarkan.",category:"SIGN",meaningStatus:"COMMON",legalRef:Ji},GIVE_WAY:{type:"GIVE_WAY",name:"BERI LALUAN",shape:"triangle-down",meaning:"Pemandu perlu memberi laluan kepada kenderaan di jalan utama atau di persimpangan.",action:"Perlahankan kenderaan, berhenti jika perlu, dan masuk ke persimpangan hanya apabila tiada kenderaan yang perlu diberi laluan.",category:"SIGN",meaningStatus:"COMMON",legalRef:Ji},SPEED_LIMIT:{type:"SPEED_LIMIT",name:"HAD LAJU {v} km/j",shape:"circle-red",meaning:"Had laju maksimum di jalan ini ialah {v} km/j.",action:"Pastikan kelajuan tidak melebihi {v} km/j. Pandu lebih perlahan jika keadaan jalan atau trafik memerlukan.",simNote:"Nilai had laju untuk setiap kawasan dalam game ditetapkan oleh simulasi ini.",category:"SIGN",meaningStatus:"COMMON",legalRef:Ji},NO_ENTRY:{type:"NO_ENTRY",name:"DILARANG MASUK",shape:"circle-noentry",meaning:"Kenderaan tidak dibenarkan memasuki jalan ini dari arah ini.",action:"Jangan masuk. Gunakan laluan lain yang dibenarkan.",simNote:"Dalam game ini, jalan tersebut ialah jalan sehala ke timur.",category:"SIGN",meaningStatus:"COMMON",legalRef:Ji},NO_OVERTAKING:{type:"NO_OVERTAKING",name:"DILARANG MEMOTONG",shape:"circle-noovertake",meaning:"Kenderaan tidak dibenarkan memotong kenderaan lain di kawasan ini.",action:"Kekal di lorong anda sehingga tamat kawasan larangan. Garisan berkembar di tengah jalan juga menandakan anda tidak boleh melintasinya untuk memotong.",category:"SIGN",meaningStatus:"COMMON",legalRef:{text:"Kaedah-Kaedah Lalu Lintas Jalan 1959 — peruntukan berkaitan garisan berkembar dan larangan memotong",status:"PENDING",note:"Terdapat laporan media yang merujuk satu kaedah khusus, tetapi teks rasmi belum disemak — nombor kaedah tidak dipaparkan."}},CURVE_LEFT:{type:"CURVE_LEFT",name:"AMARAN: SELEKOH KE KIRI",shape:"diamond",meaning:"Terdapat selekoh ke kiri di hadapan.",action:"Kurangkan kelajuan sebelum memasuki selekoh dan kekal di lorong sendiri. Jangan memotong di selekoh.",category:"SIGN",meaningStatus:"COMMON",legalRef:null},CURVE_RIGHT:{type:"CURVE_RIGHT",name:"AMARAN: SELEKOH KE KANAN",shape:"diamond",meaning:"Terdapat selekoh ke kanan di hadapan.",action:"Kurangkan kelajuan sebelum memasuki selekoh dan kekal di lorong sendiri. Jangan memotong di selekoh.",category:"SIGN",meaningStatus:"COMMON",legalRef:null},SCHOOL:{type:"SCHOOL",name:"KAWASAN SEKOLAH",shape:"diamond",meaning:"Anda menghampiri kawasan sekolah. Kanak-kanak mungkin melintas jalan.",action:"Kurangkan kelajuan, berwaspada dan bersedia untuk berhenti.",simNote:"Reka bentuk papan dalam game ialah contoh simulasi; rupa sebenar papan tanda rasmi mungkin berbeza.",category:"SIGN",meaningStatus:"COMMON",legalRef:null},PED_CROSSING:{type:"PED_CROSSING",name:"LINTASAN PEJALAN KAKI",shape:"square-blue",meaning:"Terdapat lintasan pejalan kaki (zebra) di hadapan.",action:"Perlahankan kenderaan dan beri laluan kepada pejalan kaki yang sedang atau hendak melintas.",category:"SIGN",meaningStatus:"COMMON",legalRef:Ji},SLIPPERY:{type:"SLIPPERY",name:"AMARAN: JALAN LICIN",shape:"diamond",meaning:"Permukaan jalan di hadapan mungkin licin, terutamanya ketika basah.",action:"Kurangkan kelajuan dan elakkan brek atau pusingan stereng secara mengejut.",simNote:"Dalam simulasi ini, keberkesanan brek dikurangkan di kawasan jalan licin.",category:"SIGN",meaningStatus:"COMMON",legalRef:null}};function e0(s,t){const e=t0[s];if(!e)return null;const n=i=>i&&i.replace(/\{v\}/g,String(t??""));return{...e,name:n(e.name),meaning:n(e.meaning),action:n(e.action),value:t,sources:Qg}}const Uc="mrh3d.profile.v1",Ha=3,tr=20;function n0(s){return String(s??"").replace(/[\u0000-\u001f\u007f]/g,"").replace(/\s+/g," ").trim()}function er(s){const t=n0(s);return t?t.length<Ha?{ok:!1,name:t,error:`Nama mesti sekurang-kurangnya ${Ha} aksara.`}:t.length>tr?{ok:!1,name:t,error:`Nama tidak boleh melebihi ${tr} aksara.`}:{ok:!0,name:t,error:null}:{ok:!1,name:t,error:"Nama tidak boleh kosong."}}function i0(s=globalThis.localStorage){try{const t=s==null?void 0:s.getItem(Uc);if(!t)return null;const e=JSON.parse(t),n=er(e==null?void 0:e.name);return!n.ok||typeof e.characterId!="string"?null:{name:n.name,characterId:e.characterId,outfit:Number.isInteger(e.outfit)?e.outfit:0,createdAt:e.createdAt||null}}catch{return null}}function s0(s,t=globalThis.localStorage){const e=er(s.name);if(!e.ok)throw new Error(e.error);if(!s.characterId)throw new Error("Karakter belum dipilih.");const n={name:e.name,characterId:s.characterId,outfit:s.outfit||0,createdAt:s.createdAt||new Date().toISOString()};return t==null||t.setItem(Uc,JSON.stringify(n)),n}const co=[{id:"aiman",name:"Aiman",desc:"Rambut pendek, baju polo",skin:13011550,hair:"short",hairColor:1774608,pants:2831429,outfits:[{name:"Biru",color:3108822},{name:"Hijau",color:2071915},{name:"Merah",color:14042437}]},{id:"siti",name:"Siti",desc:"Bertudung, baju kurung",skin:14724222,hair:"tudung",hairColor:1774608,pants:4865899,outfits:[{name:"Merah jambu",color:15228316,accent:16238300},{name:"Ungu",color:8084694,accent:14010613},{name:"Jingga",color:15901498,accent:16507061}]},{id:"meiling",name:"Mei Ling",desc:"Rambut ekor kuda, jaket",skin:15845797,hair:"ponytail",hairColor:2300180,pants:3159100,outfits:[{name:"Teal",color:2270111},{name:"Koral",color:15754563},{name:"Biru",color:4877559}]},{id:"ravi",name:"Ravi",desc:"Rambut kerinting, bermisai",skin:9263675,hair:"curly",hairColor:1182986,pants:3881787,outfits:[{name:"Kuning",color:15965202},{name:"Biru tua",color:2899536},{name:"Hijau",color:1482885}]},{id:"daniel",name:"Daniel",desc:"Topi & cermin mata",skin:14264188,hair:"cap",hairColor:3810840,pants:2042436,outfits:[{name:"Kelabu",color:8359053,accent:15158332},{name:"Merah",color:12597547,accent:2899536},{name:"Biru",color:2719929,accent:15844367}]}];function Va(s){return co.find(t=>t.id===s)||null}const In=s=>new Jt({color:s});function r0(s,t=0){const e=s.outfits[t]||s.outfits[0],n=new oe,i=In(s.skin),r=In(e.color),a=In(s.pants),o=In(s.hairColor),l=In(1118481),c=(g,_)=>new ao(g,_,6,12);for(const g of[-1,1]){const _=new it(c(.11,.55),s.hair==="tudung"?r:a);_.position.set(g*.13,.42,0),n.add(_);const m=new it(new Ve(.16,.08,.26),l);m.position.set(g*.13,.04,.04),n.add(m)}const u=new it(c(.26,.42),r);if(u.position.y=1.08,u.scale.set(1,1,.75),n.add(u),s.hair==="tudung"){const g=new it(new rn(.27,.36,.55,16),r);g.position.y=.62,n.add(g)}for(const g of[-1,1]){const _=new it(c(.08,.45),r);_.position.set(g*.36,1.05,0),_.rotation.z=g*.12,n.add(_);const m=new it(new Pe(.075,10,8),i);m.position.set(g*.4,.76,0),n.add(m)}const h=new oe;h.position.y=1.62,n.add(h);const d=new it(new Pe(.25,20,16),i);h.add(d);for(const g of[-1,1]){const _=new it(new Pe(.032,8,6),l);_.position.set(g*.085,.03,.225),h.add(_);const m=new it(new Pe(.035,8,6),In(15895426));m.position.set(g*.14,-.05,.2),m.scale.z=.4,h.add(m)}const f=new it(new Ni(.06,.012,6,12,Math.PI),l);if(f.position.set(0,-.07,.235),f.rotation.z=Math.PI,h.add(f),s.hair==="short"){const g=new it(new Pe(.265,20,12,0,Math.PI*2,0,Math.PI*.5),o);g.position.y=.03,g.rotation.x=-.25,h.add(g)}else if(s.hair==="tudung"){const g=In(e.accent??16777215),_=new it(new Pe(.29,20,16),g);_.position.set(0,.02,-.05),h.add(_),d.position.z=.03,d.scale.set(.92,.95,.95);const m=new it(new Ii(.42,.5,20,1,!0),g);m.position.y=-.3,h.add(m)}else if(s.hair==="ponytail"){const g=new it(new Pe(.27,20,12,0,Math.PI*2,0,Math.PI*.55),o);g.position.y=.02,g.rotation.x=-.3,h.add(g);const _=new it(c(.08,.3),o);_.position.set(0,-.05,-.3),_.rotation.x=.5,h.add(_)}else if(s.hair==="curly"){for(let m=0;m<14;m++){const p=m/14*Math.PI*2,x=new it(new Pe(.09,8,6),o);x.position.set(Math.cos(p)*.18,.17+Math.sin(m)*.03,Math.sin(p)*.18-.04),h.add(x)}const g=new it(new Pe(.2,12,8),o);g.position.y=.16,h.add(g);const _=new it(new Ve(.14,.035,.04),o);_.position.set(0,-.03,.24),h.add(_)}else if(s.hair==="cap"){const g=In(e.accent??15158332),_=new it(new Pe(.27,20,12,0,Math.PI*2,0,Math.PI*.5),g);_.position.y=.05,h.add(_);const m=new it(new rn(.2,.2,.03,16,1,!1,-Math.PI/2,Math.PI),g);m.position.set(0,.06,.18),h.add(m);for(const p of[-1,1]){const x=new it(new Ni(.05,.012,6,14),l);x.position.set(p*.085,.03,.235),h.add(x)}}return n.traverse(g=>{g.isMesh&&(g.castShadow=!0)}),n}class kc{constructor(t){this.canvas=t,this.renderer=new _c({canvas:t,antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.renderer.outputColorSpace=pe,this.scene=new vc,this.scene.add(new wc(16777215,8952234,1.6));const e=new Tc(16777215,1.6);e.position.set(2,3,4),this.scene.add(e);const n=new it(new rn(.7,.75,.08,40),new Jt({color:2846438}));n.position.y=-.04,this.scene.add(n),this.camera=new we(32,1,.1,20),this.camera.position.set(0,1.25,4.2),this.camera.lookAt(0,1,0),this.model=null,this.angle=0,this.running=!1}_setModel(t,e){this.model&&this.scene.remove(this.model),this.model=r0(t,e),this.scene.add(this.model)}_resize(t,e){this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}thumbnails(){const t={};this._resize(160,200),this.camera.position.set(0,1.45,2.4),this.camera.lookAt(0,1.3,0);for(const e of co)for(let n=0;n<e.outfits.length;n++)this._setModel(e,n),this.model.rotation.y=-.35,this.renderer.render(this.scene,this.camera),t[`${e.id}:${n}`]=this.canvas.toDataURL("image/png");return this.camera.position.set(0,1.25,4.2),this.camera.lookAt(0,1,0),t}show(t,e){this._setModel(t,e)}start(){if(this.running)return;this.running=!0;const t=()=>{if(!this.running)return;const e=this.canvas.clientWidth||260,n=this.canvas.clientHeight||300;this.canvas.width!==Math.floor(e*this.renderer.getPixelRatio())&&this._resize(e,n),this.angle+=.012,this.model&&(this.model.rotation.y=Math.sin(this.angle)*.7),this.renderer.render(this.scene,this.camera),requestAnimationFrame(t)};t()}stop(){this.running=!1}dispose(){var t,e;this.stop(),this.renderer.dispose(),(e=(t=this.renderer).forceContextLoss)==null||e.call(t)}}function C(s,t={},...e){const n=document.createElement(s);for(const[i,r]of Object.entries(t||{}))r==null||r===!1||(i==="class"?n.className=r:i==="style"&&typeof r=="object"?Object.assign(n.style,r):i.startsWith("on")&&typeof r=="function"?n.addEventListener(i.slice(2).toLowerCase(),r):i==="html"?n.innerHTML=r:n.setAttribute(i,r===!0?"":r));for(const i of e.flat())i==null||i===!1||n.append(i instanceof Node?i:document.createTextNode(String(i)));return n}function zl(s){for(;s.firstChild;)s.removeChild(s.firstChild);return s}const Wa="DEVELOPER: ADAM ZAKWAN";function a0(){return C("div",{class:"logo"},C("div",{class:"logo-top"},"MALAYSIAN"),C("div",{class:"logo-main"},"ROAD HERO",C("span",{class:"logo-3d"},"3D")),C("div",{class:"logo-sub"},"Simulator Pendidikan Keselamatan Jalan Raya"))}class o0{constructor(t,e){this.layer=t,this.cb=e}render(){const t=this.cb.getProfile(),e=t?this.cb.getAvatar(t):null,n=t?C("div",{class:"profile-chip"},e?C("img",{src:e,alt:""}):null,C("div",{},C("div",{class:"chip-label"},"PEMANDU"),C("div",{class:"chip-name"},t.name))):C("div",{class:"profile-chip empty"},"Profil pemandu belum dicipta");return C("div",{class:"screen menu-screen",id:"main-menu"},C("div",{class:"menu-card"},a0(),n,C("div",{class:"menu-buttons"},C("button",{class:"btn primary big",id:"btn-start",onclick:()=>this.cb.onStart()},"▶  START DRIVING"),C("button",{class:"btn",id:"btn-missions",onclick:()=>this.cb.onMissions()},"MISSIONS"),C("button",{class:"btn",id:"btn-settings",onclick:()=>this.cb.onSettings()},"SETTINGS"),C("button",{class:"btn",id:"btn-about",onclick:()=>this.cb.onAbout()},"ABOUT"),t?C("button",{class:"btn ghost",id:"btn-edit-profile",onclick:()=>this.cb.onEditProfile()},"EDIT PROFILE"):null),C("div",{class:"credit",id:"menu-credit"},Wa)),C("footer",{class:"menu-footer"},`${Wa} · Projek pendidikan bebas — bukan aplikasi rasmi JPJ`))}}function l0(s){return C("div",{class:"screen panel-screen",id:"about"},C("div",{class:"panel"},C("h2",{},"MALAYSIAN ROAD HERO 3D"),C("p",{class:"credit big",id:"about-credit"},"Developer: ADAM ZAKWAN"),C("p",{},"An educational driving simulator inspired by Malaysian road safety rules."),C("div",{class:"disclaimer"},C("strong",{},"Penafian: "),"Game ini merupakan projek pendidikan dan simulasi. Ia bukan aplikasi rasmi JPJ dan bukan pengganti latihan memandu atau perundangan rasmi Malaysia."),C("h3",{},"Status maklumat peraturan"),C("ul",{class:"about-list"},C("li",{},"Setiap mesej dilabel sebagai: Undang-undang / larangan rasmi, Arahan papan tanda, Nasihat keselamatan, atau Peraturan simulasi."),C("li",{},'Rujukan undang-undang yang belum disemak terhadap teks rasmi terkini ditanda "PERLU PENGESAHAN". Tiada nombor seksyen, denda atau mata demerit dipaparkan.'),C("li",{},"Had laju setiap kawasan dalam game ditetapkan oleh simulasi dan dipaparkan pada papan tanda dalam dunia game."),C("li",{},"Fizik kereta ialah model permainan ringkas, bukan simulasi automotif sebenar.")),C("h3",{},"Sumber rujukan rasmi"),C("ul",{class:"about-list"},C("li",{},"Jabatan Pengangkutan Jalan Malaysia (JPJ) — www.jpj.gov.my"),C("li",{},"Akta Pengangkutan Jalan 1987 (Akta 333) dan pindaan"),C("li",{},"Kaedah-Kaedah Lalu Lintas Jalan 1959"),C("li",{},"Kementerian Pengangkutan Malaysia (MOT), MIROS")),C("h3",{},"Kawalan"),C("div",{class:"controls-grid"},...[["W / ↑","Minyak"],["S / ↓","Brek (tahan ketika berhenti = undur)"],["A D / ← →","Stereng"],["Q / E","Signal kiri / kanan"],["Z / C (tahan)","Toleh ke cermin sisi kiri / kanan"],["Seret tetikus","Lihat sekeliling"],["Space","Brek kecemasan"],["R","Reset ke lorong"],["Esc","Jeda"]].map(([t,e])=>C("div",{class:"ctl"},C("kbd",{},t),C("span",{},e)))),C("button",{class:"btn primary",onclick:s},"KEMBALI")))}class c0{constructor({existing:t,thumbs:e,onConfirm:n,onCancel:i}){this.existing=t,this.thumbs=e,this.onConfirm=n,this.onCancel=i,this.characterId=(t==null?void 0:t.characterId)||null,this.outfit=(t==null?void 0:t.outfit)||0,this.selector=null}render(){var u;const t=C("input",{type:"text",id:"driver-name",maxlength:String(tr+10),placeholder:`Nama panggilan (${Ha}–${tr} aksara)`,autocomplete:"off",value:((u=this.existing)==null?void 0:u.name)||""}),e=C("div",{class:"field-error",id:"name-error",role:"alert"}),n=C("div",{class:"field-error",id:"char-error",role:"alert"}),i=C("canvas",{class:"char-preview",id:"char-preview"}),r=C("div",{class:"preview-name"},this.characterId?Va(this.characterId).name:"Pilih karakter"),a=C("div",{class:"outfit-row",id:"outfit-row"}),o=C("div",{class:"char-grid",id:"char-grid"}),l=()=>{var d;o.querySelectorAll(".char-card").forEach(f=>f.classList.toggle("selected",f.dataset.id===this.characterId)),a.innerHTML="";const h=Va(this.characterId);r.textContent=h?`${h.name} — ${h.desc}`:"Pilih karakter",h&&(h.outfits.forEach((f,g)=>{const _=C("button",{class:`outfit-swatch${g===this.outfit?" selected":""}`,style:{background:`#${f.color.toString(16).padStart(6,"0")}`},title:f.name,"aria-label":`Pakaian ${f.name}`,onclick:()=>{var m;this.outfit=g,(m=this.selector)==null||m.show(h,g),l()}},"");a.append(_)}),(d=this.selector)==null||d.show(h,this.outfit))};for(const h of co){const d=C("button",{class:"char-card","data-id":h.id,onclick:()=>{this.characterId!==h.id&&(this.outfit=0),this.characterId=h.id,n.textContent="",l()}},C("img",{src:this.thumbs[`${h.id}:0`],alt:h.name}),C("div",{class:"char-name"},h.name));o.append(d)}const c=()=>{var f;const h=er(t.value);let d=!0;h.ok?(e.textContent="",t.value=h.name):(e.textContent=h.error,d=!1),this.characterId||(n.textContent="Sila pilih satu karakter.",d=!1),d&&this.onConfirm({name:h.name,characterId:this.characterId,outfit:this.outfit,createdAt:(f=this.existing)==null?void 0:f.createdAt})};return t.addEventListener("input",()=>{const h=er(t.value);e.textContent=t.value&&!h.ok?h.error:""}),t.addEventListener("keydown",h=>{h.key==="Enter"&&c()}),this.el=C("div",{class:"screen panel-screen",id:"profile-screen"},C("div",{class:"panel wide"},C("h2",{},"CREATE YOUR DRIVER"),C("p",{class:"muted"},"Isi nama panggilan dan pilih seorang karakter sebelum mula memandu. Jangan masukkan maklumat peribadi seperti nombor kad pengenalan atau alamat."),C("div",{class:"profile-layout"},C("div",{class:"profile-left"},C("label",{for:"driver-name",class:"field-label"},"1. ENTER NAME"),t,e,C("div",{class:"field-label"},"2. SELECT CHARACTER"),o,n),C("div",{class:"profile-right"},i,r,C("div",{class:"field-label small"},"Warna pakaian"),a)),C("div",{class:"row-buttons"},this.existing?C("button",{class:"btn ghost",onclick:()=>this.onCancel()},"BATAL"):null,C("button",{class:"btn primary big",id:"btn-confirm-driver",onclick:c},"CONFIRM DRIVER")))),this._mountPreview=()=>{try{this.selector=new kc(i),this.selector.start()}catch{this.selector=null}l()},this.el}mounted(){var t;(t=this._mountPreview)==null||t.call(this)}dispose(){var t;(t=this.selector)==null||t.dispose(),this.selector=null}}const h0=s=>"★".repeat(s)+"☆".repeat(3-s);function u0({profile:s,progress:t,onPick:e,onFree:n,onBack:i}){return C("div",{class:"screen panel-screen",id:"mission-select"},C("div",{class:"panel wide"},C("h2",{},"MISSION SELECT"),C("p",{class:"muted"},"Pemandu: ",C("strong",{id:"ms-driver"},s.name)),C("div",{class:"mission-grid"},...Ks.map(r=>{const a=t.missions[r.id];return C("button",{class:`mission-card${a!=null&&a.completed?" done":""}`,id:`mission-${r.id}`,onclick:()=>e(r)},C("div",{class:"mission-no"},`MISI ${r.no}`),C("div",{class:"mission-title"},r.title),C("div",{class:"mission-sum"},r.summary),C("div",{class:"mission-stars"},a?h0(a.bestStars):"☆☆☆",a!=null&&a.completed?" · SELESAI":""))})),C("h3",{},"PEMANDUAN BEBAS"),C("p",{class:"muted"},"Tiada objektif. Amaran tetap dipaparkan. Pilih lokasi permulaan:"),C("div",{class:"free-row"},...Zg.map(r=>C("button",{class:"btn",id:`free-${r.id}`,onclick:()=>n(r)},r.title))),C("div",{class:"row-buttons"},C("button",{class:"btn ghost",onclick:i},"KEMBALI"))))}function d0({mission:s,profile:t,settings:e,onStart:n,onBack:i}){const r=e.controlMode==="touch"||e.controlMode==="auto"&&matchMedia("(pointer: coarse)").matches;return C("div",{class:"screen panel-screen",id:"briefing"},C("div",{class:"panel"},C("div",{class:"mission-no"},s.no?`MISI ${s.no}`:"PEMANDUAN BEBAS"),C("h2",{},s.title),C("p",{},s.summary||"Pandu dengan bebas dan patuhi peraturan jalan raya."),s.objectives?C("div",{},C("h3",{},"OBJEKTIF"),C("ul",{class:"obj-list"},...s.objectives.map(a=>C("li",{},a.label)))):null,C("div",{class:"tip"},r?"Kawalan sentuh: ◀ ▶ stereng, MINYAK / BREK di kanan, butang signal ⇦ ⇨ dan 👁 untuk menoleh ke cermin.":"W/S minyak & brek · A/D stereng · Q/E signal · tahan Z/C untuk toleh ke cermin sisi · Space brek kecemasan · R reset · Esc jeda"),C("div",{class:"tip"},e.drivingMode==="learning"?"Mod pembelajaran: permainan dijeda apabila dialog papan tanda muncul.":"Mod pemanduan bebas: dialog papan tanda tidak menjeda permainan."),C("p",{class:"muted"},`Semoga selamat, ${t.name}! Perlanggaran = GAME OVER.`),C("div",{class:"row-buttons"},C("button",{class:"btn ghost",onclick:i},"KEMBALI"),C("button",{class:"btn primary big",id:"btn-go",onclick:n},"MULA MEMANDU"))))}function f0(s,{onChange:t,onBack:e}){const n=(o,l)=>{s[o]=l,t({...s})},i=(o,l,c,u)=>C("label",{class:"setting"},C("span",{},l),C("select",{id:o,onchange:h=>n(c,h.target.value)},...u.map(([h,d])=>C("option",{value:h,selected:s[c]===h?"selected":null},d)))),r=(o,l,c)=>C("label",{class:"setting"},C("span",{},l),C("input",{id:o,type:"checkbox",checked:s[c]?"checked":null,onchange:u=>n(c,u.target.checked)})),a=(o,l,c,u,h,d)=>{const f=C("output",{},String(s[c]));return C("label",{class:"setting"},C("span",{},l),C("input",{id:o,type:"range",min:String(u),max:String(h),step:String(d),value:String(s[c]),oninput:g=>{f.textContent=g.target.value,n(c,parseFloat(g.target.value))}}),f)};return C("div",{class:"screen panel-screen",id:"settings"},C("div",{class:"panel"},C("h2",{},"SETTINGS"),C("h3",{},"Kawalan"),a("set-steer","Sensitiviti stereng","steeringSensitivity",.5,1.5,.1),i("set-control","Kawalan","controlMode",[["auto","Automatik"],["keyboard","Papan kekunci"],["touch","Sentuh (telefon)"]]),C("h3",{},"Grafik"),i("set-graphics","Kualiti grafik","graphics",[["low","LOW"],["medium","MEDIUM"],["high","HIGH"]]),i("set-mirror","Kualiti pantulan cermin","mirrorQuality",[["low","LOW"],["medium","MEDIUM"],["high","HIGH"]]),C("h3",{},"Bunyi"),r("set-sound","Bunyi","sound"),a("set-volume","Kelantangan","volume",0,1,.1),C("h3",{},"Pembelajaran"),i("set-mode","Mod","drivingMode",[["learning","Mod pembelajaran"],["free","Mod pemanduan bebas"]]),r("set-pause-dialog","Jeda ketika dialog papan tanda muncul (mod pembelajaran)","pauseOnDialog"),r("set-auto-dialog","Dialog papan tanda automatik","autoDialogs"),C("p",{class:"muted small"},"Tetapan disimpan secara automatik pada peranti ini."),C("div",{class:"row-buttons"},C("button",{class:"btn primary",id:"btn-settings-back",onclick:e},"SIAP"))))}const Nn={text:"Akta Pengangkutan Jalan 1987 (Akta 333) / Kaedah-Kaedah Lalu Lintas Jalan 1959",status:"PENDING",note:"Peruntukan khusus belum disahkan terhadap teks rasmi terkini."},Oc={SPEEDING:{id:"SPEEDING",title:"Melebihi had laju",message:"AMARAN: Anda melebihi had laju {limit} km/j.",explanation:"Kelajuan anda melebihi had yang dipaparkan pada papan tanda kawasan ini. Kelajuan berlebihan memanjangkan jarak berhenti dan mengurangkan masa untuk bertindak.",category:"SIGN",verification:"PENDING",legalRef:Nn},RED_LIGHT:{id:"RED_LIGHT",title:"Melanggar lampu merah",message:"AMARAN: Anda melepasi garisan berhenti ketika lampu isyarat MERAH.",explanation:"Lampu merah bermaksud kenderaan mesti berhenti di belakang garisan berhenti dan menunggu lampu hijau. Melanggar lampu merah boleh menyebabkan perlanggaran sisi di persimpangan.",category:"LAW",verification:"PENDING",legalRef:Nn},STOP_SIGN:{id:"STOP_SIGN",title:"Tidak berhenti penuh",message:"AMARAN: Anda tidak berhenti sepenuhnya di papan tanda BERHENTI.",explanation:"Papan BERHENTI menghendaki kenderaan berhenti sepenuhnya sebelum garisan berhenti, kemudian memeriksa trafik sebelum meneruskan perjalanan.",category:"SIGN",verification:"COMMON",legalRef:Nn},GIVE_WAY:{id:"GIVE_WAY",title:"Tidak memberi laluan",message:"AMARAN: Anda memasuki simpang tanpa memberi laluan kepada kenderaan di jalan utama.",explanation:"Di simpang BERHENTI atau BERI LALUAN, kenderaan di jalan utama perlu diberi laluan. Tunggu sehingga ada ruang yang selamat.",category:"SIGN",verification:"COMMON",legalRef:Nn},NO_SIGNAL_TURN:{id:"NO_SIGNAL_TURN",title:"Tiada isyarat membelok",message:"AMARAN: Anda membelok {dir} tanpa memberi signal yang betul.",explanation:"Beri signal lebih awal sebelum membelok supaya pengguna jalan lain tahu niat anda. Tekan Q (kiri) atau E (kanan).",category:"SAFETY",verification:"PENDING",legalRef:{...Nn,note:"Kewajipan memberi isyarat perlu disahkan terhadap kaedah rasmi."}},NO_SIGNAL_LANE:{id:"NO_SIGNAL_LANE",title:"Tukar lorong tanpa signal",message:"AMARAN: Anda menukar lorong tanpa memberi signal.",explanation:"Beri signal ke arah lorong yang hendak dimasuki, periksa cermin, dan tukar lorong hanya apabila ada ruang yang selamat.",category:"SAFETY",verification:"PENDING",legalRef:null},NO_MIRROR_CHECK:{id:"NO_MIRROR_CHECK",title:"Cermin tidak diperiksa",message:"AMARAN: Anda menukar lorong tanpa memeriksa cermin sisi.",explanation:"Sebelum menukar lorong, toleh ke cermin sisi (tahan Z untuk kiri / C untuk kanan, atau butang 👁) untuk memastikan tiada kenderaan di lorong sebelah.",category:"SIM",verification:"NA",legalRef:null},UNSAFE_LANE_CHANGE:{id:"UNSAFE_LANE_CHANGE",title:"Tukar lorong tidak selamat",message:"AMARAN: Anda menukar lorong terlalu dekat dengan kenderaan lain.",explanation:"Terdapat kenderaan terlalu hampir di lorong yang anda masuki. Pastikan ada ruang yang cukup di hadapan dan di belakang sebelum menukar lorong.",category:"SAFETY",verification:"NA",legalRef:null},DOUBLE_LINE:{id:"DOUBLE_LINE",title:"Memotong di kawasan larangan",message:"AMARAN: Anda cuba memotong di kawasan larangan.",explanation:"Garisan berkembar di tengah jalan menandakan kawasan larangan memotong, biasanya di selekoh atau berhampiran simpang di mana jarak pandangan terhad. Jangan melintasinya.",category:"LAW",verification:"PENDING",legalRef:{text:"Kaedah-Kaedah Lalu Lintas Jalan 1959 — peruntukan garisan berkembar",status:"PENDING",note:"Nombor kaedah khusus belum disahkan terhadap teks rasmi — tidak dipaparkan."}},ONCOMING_CLOSE:{id:"ONCOMING_CLOSE",title:"Trafik bertentangan terlalu hampir",message:"AMARAN: Trafik dari arah bertentangan terlalu hampir.",explanation:"Anda berada di lorong bertentangan dan kenderaan dari hadapan semakin hampir. Kembali ke lorong anda dengan segera dan selamat. Potong hanya jika jalan di hadapan jelas.",category:"SAFETY",verification:"NA",legalRef:null},NO_SIGNAL_OVERTAKE:{id:"NO_SIGNAL_OVERTAKE",title:"Memotong tanpa signal",message:"AMARAN: Anda keluar dari lorong untuk memotong tanpa signal kanan.",explanation:"Beri signal kanan sebelum keluar dari lorong untuk memotong supaya pemandu lain tahu niat anda.",category:"SAFETY",verification:"NA",legalRef:null},OVERTAKE_LEFT:{id:"OVERTAKE_LEFT",title:"Memotong di sebelah kiri",message:"AMARAN: Anda memotong kenderaan di sebelah kiri.",explanation:"Di Malaysia, kenderaan perlahan dikehendaki berada di sebelah kiri dan memotong dibuat di sebelah kanan. Memotong di sebelah kiri berbahaya kerana anda berada di titik buta pemandu lain.",category:"SAFETY",verification:"PENDING",legalRef:{text:"Kaedah-Kaedah Lalu Lintas Jalan 1959 (kenderaan perlahan di sebelah kiri; memotong di sebelah kanan)",status:"PENDING",note:"Sumber sekunder (kenyataan MIROS, media) menyokong prinsip ini; teks rasmi belum disemak."}},TAILGATING:{id:"TAILGATING",title:"Jarak terlalu dekat",message:"AMARAN: Jarak anda dengan kenderaan di hadapan terlalu dekat.",explanation:"Kekalkan jarak sekurang-kurangnya 2 saat dengan kenderaan di hadapan (lebih jauh ketika hujan atau di lebuh raya). Simulasi memberi amaran jika jarak kurang daripada 1 saat.",category:"SAFETY",verification:"NA",legalRef:null},NO_ENTRY:{id:"NO_ENTRY",title:"Memasuki jalan sehala",message:"AMARAN: Anda memasuki jalan sehala dari arah bertentangan (DILARANG MASUK).",explanation:"Papan DILARANG MASUK bermaksud kenderaan tidak boleh memasuki jalan tersebut dari arah itu. Berpatah balik dengan selamat.",category:"SIGN",verification:"COMMON",legalRef:Nn},WRONG_SIDE:{id:"WRONG_SIDE",title:"Memandu di lorong bertentangan",message:"AMARAN: Anda memandu di lorong trafik bertentangan.",explanation:"Di Malaysia, kenderaan perlu dipandu di sebelah kiri jalan. Kembali ke lorong kiri anda.",category:"LAW",verification:"PENDING",legalRef:Nn},PED_CROSSING:{id:"PED_CROSSING",title:"Tidak memberi laluan kepada pejalan kaki",message:"AMARAN: Anda melintasi lintasan zebra ketika pejalan kaki sedang melintas.",explanation:"Berhenti sebelum lintasan pejalan kaki dan biarkan pejalan kaki melintas sepenuhnya.",category:"SIGN",verification:"PENDING",legalRef:Nn},OFF_ROAD:{id:"OFF_ROAD",title:"Keluar dari jalan",message:"AMARAN: Kereta anda keluar dari jalan raya.",explanation:"Kekal di atas jalan dan di dalam lorong anda. Tekan R untuk kembali ke lorong jika tersangkut.",category:"SIM",verification:"NA",legalRef:null}};function p0(s,t={}){const e=Oc[s];if(!e)return null;const n=i=>i&&i.replace(/\{(\w+)\}/g,(r,a)=>t[a]!==void 0?t[a]:"");return{...e,message:n(e.message),explanation:n(e.explanation)}}function m0({reason:s,profile:t,onRetry:e,onMenu:n}){return C("div",{class:"screen overlay-screen",id:"game-over"},C("div",{class:"panel danger"},C("div",{class:"go-title"},"GAME OVER"),C("p",{class:"go-reason",id:"go-reason"},s),C("p",{class:"muted"},`${(t==null?void 0:t.name)||"Pemandu"}, kemalangan boleh dielakkan dengan kelajuan yang sesuai, jarak selamat dan pemerhatian cermin.`),C("div",{class:"row-buttons"},C("button",{class:"btn ghost",id:"btn-go-menu",onclick:n},"MAIN MENU"),C("button",{class:"btn primary big",id:"btn-retry",onclick:e},"TRY AGAIN"))))}function g0(s){const t=Math.floor(s/60),e=Math.floor(s%60);return`${t}:${String(e).padStart(2,"0")}`}function _0({mission:s,result:t,profile:e,onRetry:n,onNext:i,onMenu:r}){const a={};for(const o of t.warnings)a[o]=(a[o]||0)+1;return C("div",{class:"screen overlay-screen",id:"mission-result"},C("div",{class:`panel ${t.passed?"success":"warn"}`},C("div",{class:"go-title"},t.passed?"MISI SELESAI":"MISI TIDAK LULUS"),C("div",{class:"result-stars"},"★".repeat(t.stars)+"☆".repeat(3-t.stars)),C("p",{},`${s.title} · Pemandu: `,C("strong",{},e.name),` · Masa ${g0(t.time)}`),C("ul",{class:"obj-list result"},...t.objectives.map(o=>C("li",{class:o.status.done?"ok":"fail"},`${o.status.done?"✔":"✘"} ${o.label}`,C("span",{class:"obj-prog"},o.status.progress||"")))),Object.keys(a).length?C("div",{},C("h3",{},"Amaran semasa misi"),C("ul",{class:"warn-summary"},...Object.entries(a).map(([o,l])=>{var c;return C("li",{},`${((c=Oc[o])==null?void 0:c.title)||o} × ${l}`)}))):C("p",{class:"muted"},"Tiada amaran. Pemanduan yang cemerlang!"),C("div",{class:"row-buttons"},C("button",{class:"btn ghost",onclick:r},"MAIN MENU"),C("button",{class:"btn",id:"btn-retry-mission",onclick:n},"ULANG MISI"),i?C("button",{class:"btn primary",onclick:i},"MISI SETERUSNYA"):null)))}function v0({onResume:s,onRestart:t,onSettings:e,onMenu:n}){return C("div",{class:"screen overlay-screen",id:"pause"},C("div",{class:"panel"},C("h2",{},"JEDA"),C("div",{class:"menu-buttons"},C("button",{class:"btn primary big",id:"btn-resume",onclick:s},"SAMBUNG"),C("button",{class:"btn",onclick:t},"MULA SEMULA"),C("button",{class:"btn",onclick:e},"SETTINGS"),C("button",{class:"btn ghost",onclick:n},"MAIN MENU")),C("div",{class:"credit"},Wa)))}class x0{constructor(t,{onPause:e}){this.layer=t,this.speedEl=C("div",{class:"hud-speed-num",id:"hud-speed"},"0"),this.limitEl=C("div",{class:"hud-limit",id:"hud-limit"},"--"),this.sigL=C("div",{class:"hud-sig left",id:"hud-sig-left"},"◀"),this.sigR=C("div",{class:"hud-sig right",id:"hud-sig-right"},"▶"),this.gearEl=C("div",{class:"hud-gear"},"D"),this.statusEl=C("div",{class:"hud-status",id:"hud-status"},""),this.nameEl=C("div",{class:"hud-name",id:"hud-name"}),this.avatarEl=C("img",{class:"hud-avatar",alt:""}),this.titleEl=C("div",{class:"hud-title",id:"hud-title"}),this.objList=C("ul",{class:"hud-objs",id:"hud-objectives"}),this.hintEl=C("div",{class:"hud-hint",id:"hud-hint"}),this.distEl=C("div",{class:"hud-dist"}),this.arrowEl=C("div",{class:"hud-arrow"},"➤"),this.mini=C("canvas",{class:"hud-minimap",width:"150",height:"150"}),this.warnings=C("div",{class:"warning-stack",id:"warning-stack"}),this.objBox=C("div",{class:"hud-objbox"},C("div",{class:"hud-objhead",onclick:()=>this.objBox.classList.toggle("toggled")},"OBJEKTIF ▾"),this.objList),this.el=C("div",{class:"hud",id:"hud"},C("div",{class:"hud-top-left"},C("div",{class:"hud-driver"},this.avatarEl,C("div",{},this.nameEl,this.titleEl))),C("div",{class:"hud-top-center"},C("div",{class:"hud-nav"},this.arrowEl,C("div",{},this.hintEl,this.distEl))),this.warnings,C("div",{class:"hud-top-right"},C("button",{class:"btn icon",id:"btn-pause","aria-label":"Jeda",onclick:e},"❚❚"),this.mini,this.objBox),C("div",{class:"hud-bottom"},this.sigL,C("div",{class:"hud-speed"},this.speedEl,C("div",{class:"hud-unit"},"km/j"),this.gearEl),C("div",{class:"hud-limit-wrap"},C("div",{class:"hud-limit-label"},"HAD"),this.limitEl),this.sigR),this.statusEl),t.append(this.el),this.hide(),this.roads=null}show(){this.el.style.display=""}hide(){this.el.style.display="none"}setProfile(t,e,n){this.nameEl.textContent=t.name,e&&(this.avatarEl.src=e),this.titleEl.textContent=n}setObjectives(t,e){if(this.objList.innerHTML="",!t||!t.objectives){this.objBox.style.display="none";return}this.objBox.style.display="";for(const n of t.objectives){const i=e(n);this.objList.append(C("li",{class:i.failed?"fail":i.done?"ok":""},C("span",{class:"obj-mark"},i.failed?"✘":i.done?"✔":"•"),C("span",{},n.label),C("span",{class:"obj-prog"},i.progress||"")))}}setHint(t){this.hintEl.textContent=t||"",this.hintEl.parentElement.parentElement.style.display=t?"":"none"}setRoads(t){this.roads=[];for(const e of t.edges.values()){const n=[];for(let i=0;i<e.xs.length;i+=2)n.push([e.xs[i],e.zs[i]]);n.push([e.xs[e.xs.length-1],e.zs[e.zs.length-1]]),this.roads.push({pts:n,w:e.leftHalf+e.rightHalf})}}update(t,{limit:e,blinkOn:n,checkpoint:i,status:r}){this.speedEl.textContent=String(Math.round(Math.abs(t.speed)*3.6)),this.limitEl.textContent=e?String(e):"--";const a=e&&Math.abs(t.speed)*3.6>e+3;if(this.speedEl.classList.toggle("over",!!a),this.sigL.classList.toggle("on",t.signal===-1&&n),this.sigR.classList.toggle("on",t.signal===1&&n),this.sigL.classList.toggle("armed",t.signal===-1),this.sigR.classList.toggle("armed",t.signal===1),this.gearEl.textContent=t.reverse?"R":"D",this.statusEl.textContent=r||"",this.statusEl.style.display=r?"":"none",i){const o=i.x-t.x,l=i.z-t.z,c=Math.hypot(o,l);this.distEl.textContent=`${c<1e3?Math.round(c)+" m":(c/1e3).toFixed(1)+" km"}${i.finish?" · DESTINASI":""}`;const u=Qs(o,l)-t.yaw;this.arrowEl.style.transform=`rotate(${-u-Math.PI/2}rad)`,this.arrowEl.style.display=""}else this.distEl.textContent="",this.arrowEl.style.display="none";this._minimap(t,i)}_minimap(t,e){if(!this.roads)return;const n=this.mini,i=n.getContext("2d"),r=n.width,a=r/2/260;i.save(),i.clearRect(0,0,r,r),i.fillStyle="rgba(12,22,40,0.72)",i.beginPath(),i.arc(r/2,r/2,r/2,0,Math.PI*2),i.fill(),i.clip(),i.translate(r/2,r/2),i.rotate(t.yaw),i.scale(a,a),i.translate(-t.x,-t.z),i.strokeStyle="#c9d4e2",i.lineCap="round",i.lineJoin="round";for(const o of this.roads)i.lineWidth=Math.max(o.w,7/a/2),i.beginPath(),o.pts.forEach(([l,c],u)=>u?i.lineTo(l,c):i.moveTo(l,c)),i.stroke();e&&(i.fillStyle=e.finish?"#6dff7a":"#29e0ff",i.beginPath(),i.arc(e.x,e.z,9/a/1.5,0,Math.PI*2),i.fill()),i.restore(),i.fillStyle="#ffd23f",i.beginPath(),i.moveTo(r/2,r/2-9),i.lineTo(r/2-6,r/2+7),i.lineTo(r/2+6,r/2+7),i.closePath(),i.fill()}}const Hs="http://www.w3.org/2000/svg";class M0{constructor(t,{onClose:e}){this.layer=t,this.onClose=e,this.sign=null,this.svg=document.createElementNS(Hs,"svg"),this.svg.setAttribute("class","leader-svg"),this.line=document.createElementNS(Hs,"line"),this.dot=document.createElementNS(Hs,"circle"),this.dot.setAttribute("r","9"),this.ring=document.createElementNS(Hs,"circle"),this.ring.setAttribute("r","18"),this.ring.setAttribute("class","leader-ring"),this.svg.append(this.line,this.ring,this.dot),this.box=C("div",{class:"sign-dialog",role:"dialog","aria-live":"polite"}),t.append(this.svg,this.box),this.hide(),this._v=new I}get isOpen(){return!!this.sign}open(t,e,n,{pausing:i,autoClose:r}){var l,c;this.sign=t,this.pausing=i,this.timer=r?8:1/0;const a=Dc[e.category];this.box.innerHTML="";const o=[C("div",{class:"sd-head"},C("img",{src:n,alt:e.name,class:"sd-icon"}),C("div",{},C("div",{class:"sd-label"},"NAMA"),C("div",{class:"sd-name",id:"sd-name"},e.name))),C("div",{class:"sd-label"},"MAKSUD"),C("div",{class:"sd-text"},e.meaning),C("div",{class:"sd-label"},"TINDAKAN"),C("div",{class:"sd-text"},e.action),e.simNote?C("div",{class:"sd-sim"},`Nota simulasi: ${e.simNote}`):null,C("div",{class:"warn-meta"},C("span",{class:`tag cat-${e.category}`},a==null?void 0:a.label)),e.legalRef?C("div",{class:"sd-ref"},"Rujukan: ",e.legalRef.text," — ",C("em",{},(l=Ga[e.legalRef.status])==null?void 0:l.label),e.legalRef.note?`. ${e.legalRef.note}`:""):null,C("div",{class:"sd-actions"},i?C("span",{class:"muted small"},"Permainan dijeda"):C("span",{class:"muted small"},"Tutup automatik"),C("button",{class:"btn primary",id:"sd-ok",onclick:()=>this.close()},"OK"))];this.box.append(...o.filter(Boolean)),this.box.style.display="block",this.svg.style.display="block",(c=this.box.querySelector("#sd-ok"))==null||c.focus({preventScroll:!0})}close(){var e;if(!this.sign)return;const t=this.sign;this.hide(),(e=this.onClose)==null||e.call(this,t)}hide(){this.sign=null,this.box.style.display="none",this.svg.style.display="none"}update(t,e,n,i){if(!this.sign)return;if(!this.pausing&&(this.timer-=t,this.timer<=0)){this.close();return}const r=this._v.copy(this.sign.anchor).project(e),a=r.z<1&&r.z>-1&&Math.abs(r.x)<1.2&&Math.abs(r.y)<1.2,o=(r.x*.5+.5)*n,l=(-r.y*.5+.5)*i,c=this.box.offsetWidth||320,u=this.box.offsetHeight||260,h=12;let d;a?d=o>n/2?o-c-70:o+70:d=n-c-h,d=Math.max(h,Math.min(n-c-h,d));let f=a?l-u*.6:80;if(f=Math.max(70,Math.min(i*.62-u*.3,f)),f=Math.max(h,Math.min(i-u-h,f)),this.box.style.transform=`translate(${Math.round(d)}px, ${Math.round(f)}px)`,this.svg.setAttribute("width",String(n)),this.svg.setAttribute("height",String(i)),a){const g=Math.max(d,Math.min(d+c,o)),_=Math.max(f,Math.min(f+u,l)),m=o<d?d:o>d+c?d+c:g,p=l<f?f:l>f+u?f+u:_;this.line.setAttribute("x1",String(m)),this.line.setAttribute("y1",String(p)),this.line.setAttribute("x2",String(o)),this.line.setAttribute("y2",String(l));for(const x of[this.dot,this.ring])x.setAttribute("cx",String(o)),x.setAttribute("cy",String(l));this.line.style.display=this.dot.style.display=this.ring.style.display=""}else this.line.style.display=this.dot.style.display=this.ring.style.display="none";this.lastScreen={px:o,py:l,visible:a,bx:d,by:f,bw:c,bh:u}}}const S0=8,y0=6.5;class E0{constructor(t,{onShow:e}={}){this.container=t,this.onShow=e,this.last=new Map,this.items=[],this.time=0,this.log=[]}reset(){this.last.clear();for(const t of this.items)t.el.remove();this.items=[],this.log=[]}show(t,e={}){var l,c;const n=p0(t,e);if(!n)return!1;const i=this.last.get(t);if(i!==void 0&&this.time-i<S0)return!1;this.last.set(t,this.time),this.log.push({id:t,t:this.time});const r=Dc[n.category],a=Ga[n.verification],o=C("div",{class:"warning-card",role:"alert","data-id":t},C("div",{class:"warn-icon","aria-hidden":"true"},"⚠"),C("div",{class:"warn-body"},C("div",{class:"warn-msg"},n.message),C("div",{class:"warn-exp"},n.explanation),C("div",{class:"warn-meta"},C("span",{class:`tag cat-${n.category}`},(r==null?void 0:r.label)||n.category),a&&a.id!=="COMMON"?C("span",{class:`tag ver-${a.tone}`},a.label):null),n.legalRef?C("div",{class:"warn-ref"},`Rujukan: ${n.legalRef.text} — `,C("em",{},((l=Ga[n.legalRef.status])==null?void 0:l.label)||n.legalRef.status),n.legalRef.note?`. ${n.legalRef.note}`:""):null));for(this.container.prepend(o),this.items.push({el:o,t:this.time});this.items.length>2;)this.items.shift().el.remove();return(c=this.onShow)==null||c.call(this,t),!0}update(t){this.time+=t;for(const e of[...this.items])this.time-e.t>y0&&(e.el.classList.add("out"),setTimeout(()=>e.el.remove(),400),this.items.splice(this.items.indexOf(e),1))}}class b0{constructor(t,e){this.input=e;const n=(r,a,o,l)=>{const c=C("button",{class:`tbtn ${o}`,id:l,"aria-label":r},r),u=d=>{d.preventDefault();try{c.setPointerCapture(d.pointerId)}catch{}e.touch[a]=!0,c.classList.add("down")},h=d=>{d.preventDefault(),e.touch[a]=!1,c.classList.remove("down")};return c.addEventListener("pointerdown",u),c.addEventListener("pointerup",h),c.addEventListener("pointercancel",h),c.addEventListener("lostpointercapture",h),c.addEventListener("contextmenu",d=>d.preventDefault()),c},i=(r,a,o,l)=>{const c=C("button",{class:`tbtn ${o}`,id:l,"aria-label":r},r);return c.addEventListener("pointerdown",u=>{u.preventDefault(),e.push(a)}),c};this.el=C("div",{class:"touch-controls",id:"touch-controls"},C("div",{class:"tc-left"},C("div",{class:"tc-row"},i("⇦","signalLeft","small sig","t-sig-left"),i("⇨","signalRight","small sig","t-sig-right")),C("div",{class:"tc-row"},n("◀","left","steer","t-left"),n("▶","right","steer","t-right"))),C("div",{class:"tc-right"},C("div",{class:"tc-row"},n("👁◀","lookL","small look","t-look-left"),n("▶👁","lookR","small look","t-look-right"),i("R","reset","small","t-reset")),C("div",{class:"tc-row"},n("BREK","brake","pedal brake","t-brake"),n("MINYAK","gas","pedal gas","t-gas")))),t.append(this.el),this.setVisible(!1)}setVisible(t){this.el.style.display=t?"":"none"}}const Jr=new Set([Gt.MENU,Gt.PROFILE,Gt.MISSION_SELECT,Gt.BRIEFING]);class w0{constructor(t,e){this.canvas=t,this.uiRoot=e,this.settings=Kg(),this.profile=i0(),this.state=Gt.MENU,this.time=0,this.renderer=new _c({canvas:t,antialias:this.settings.graphics!=="low",powerPreference:"high-performance"}),this.renderer.outputColorSpace=pe,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Gl,this.renderer.shadowMap.autoUpdate=!1,this.world=new Ug,this.net=this.world.network,this.scene=this.world.scene,this.player=new zg,this.carModel=new kg(13840175),this.scene.add(this.carModel.group),this.headPivot=new ve,this.headPivot.position.copy(ss.eye),this.headPivot.rotation.order="YXZ",this.carModel.group.add(this.headPivot),this.camera=new we(68,1,.05,4600),this.camera.layers.enable(ar),this.headPivot.add(this.camera),this.headYaw=0,this.menuCamera=new we(55,1,.5,4600),this.mirrors=new Fg(this.carModel,this.settings.mirrorQuality),this.input=new Gg(t),this.traffic=new Wg(this.world),this.collision=new Xg(this.world),this.audio=new jg,this.hudLayer=C("div",{class:"layer hud-layer"}),this.dialogLayer=C("div",{class:"layer dialog-layer"}),this.screenLayer=C("div",{class:"layer screen-layer"}),e.append(this.hudLayer,this.dialogLayer,this.screenLayer),this.hud=new x0(this.hudLayer,{onPause:()=>this.pause()}),this.hud.setRoads(this.net),this.touch=new b0(this.hudLayer,this.input),this.hudLayer.append(C("div",{class:"rotate-hint"},"Pusingkan telefon ke mod landskap untuk pengalaman terbaik.")),this.warnings=new E0(this.hud.warnings,{onShow:()=>this.audio.warning()}),this.dialog=new M0(this.dialogLayer,{onClose:()=>this._onDialogClosed()}),this.menu=new o0(this.screenLayer,{onStart:()=>this.goStart(),onMissions:()=>this.goStart(),onSettings:()=>this.showSettings(()=>this.showMenu()),onAbout:()=>this.showAbout(),onEditProfile:()=>this.showProfile(()=>this.showMenu()),getProfile:()=>this.profile,getAvatar:n=>this.avatarFor(n)}),this.rules=new Yg(this.world,this.traffic,{onWarning:(n,i)=>{this.mission.onWarning(n),this.warnings.show(n,i)},onEvent:n=>this.mission.onEvent(n)}),this.mission=new qg(this.world,{onComplete:n=>this._onMissionComplete(n),onObjectivesChanged:()=>this._refreshObjectives(),onCheckpoint:(n,i)=>{this.audio.chime(),this.hud.setHint(i?i.hint:n.hint)}}),this.shownSigns=new Set,this.blinkT=0,this.lastBlink=!1,this.statusMsg="",this.statusTimer=0,this.current=null,this._thumbs=null,this.applySettings(),this._onResize(),window.addEventListener("resize",()=>this._onResize()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.state===Gt.PLAYING&&this.pause()}),window.addEventListener("pointerdown",()=>this.audio.unlock(),{once:!1}),window.addEventListener("keydown",()=>this.audio.unlock(),{once:!1}),this._menuTraffic(),this.showMenu(),this._last=performance.now(),this.renderer.setAnimationLoop(()=>this._frame())}get thumbs(){if(!this._thumbs){const t=document.createElement("canvas");t.width=160,t.height=200;try{const e=new kc(t);this._thumbs=e.thumbnails(),e.dispose()}catch{this._thumbs={}}}return this._thumbs}avatarFor(t){return this.thumbs[`${t.characterId}:${t.outfit||0}`]||null}_applyProfileToCar(){if(!this.profile)return;const t=Va(this.profile.characterId);if(!t)return;const e=t.outfits[this.profile.outfit]||t.outfits[0];this.carModel.setOutfit(t.skin,e.color)}applySettings(){const t=this.settings,e=window.devicePixelRatio||1,n=t.graphics==="low"?Math.min(1,e*.75):t.graphics==="medium"?Math.min(1.5,e):Math.min(2,e);this.renderer.setPixelRatio(n),this.renderer.shadowMap.enabled=t.graphics!=="low",this.world.setQuality(t.graphics),this._mirrorQ!==t.mirrorQuality&&(this.mirrors.setQuality(t.mirrorQuality),this._mirrorQ=t.mirrorQuality),this.audio.setEnabled(t.sound,t.volume);const i=t.controlMode==="touch"||t.controlMode==="auto"&&matchMedia("(pointer: coarse)").matches;this.touchEnabled=i,this.touch.setVisible(i&&this.state===Gt.PLAYING),this._onResize()}_onResize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1);const n=t/e,i=2*Math.atan(Math.tan(80*Math.PI/360)/n)*(180/Math.PI);this.camera.fov=Math.min(100,Math.max(64,i)),this.camera.aspect=n,this.camera.updateProjectionMatrix(),this.menuCamera.aspect=n,this.menuCamera.updateProjectionMatrix(),this.width=t,this.height=e}_setScreen(t,e){var n;(n=this._screenObj)!=null&&n.dispose&&this._screenObj.dispose(),this._screenObj=null,zl(this.screenLayer),t&&this.screenLayer.append(t),e==null||e()}_enterMenuState(t){const e=!Jr.has(this.state);this.state=t,this.hud.hide(),this.touch.setVisible(!1),this.dialog.hide(),this.carModel.group.visible=!1,e&&this._menuTraffic()}showMenu(){this._enterMenuState(Gt.MENU),this._setScreen(this.menu.render())}showAbout(){this._enterMenuState(Gt.MENU),this._setScreen(l0(()=>this.showMenu()))}showSettings(t){const e=this.state,n=f0({...this.settings},{onChange:i=>{this.settings=i,$g(i),this.applySettings()},onBack:()=>t()});e===Gt.PAUSED?(zl(this.screenLayer),this.screenLayer.append(n)):(this._enterMenuState(Gt.MENU),this._setScreen(n))}showProfile(t){this._enterMenuState(Gt.PROFILE);const e=new c0({existing:this.profile,thumbs:this.thumbs,onConfirm:n=>{this.profile=s0(n),this._applyProfileToCar(),t()},onCancel:()=>this.showMenu()});this._setScreen(e.render(),()=>e.mounted()),this._screenObj=e}goStart(){if(!this.profile){this.showProfile(()=>this.showMissionSelect());return}this.showMissionSelect()}showMissionSelect(){this._enterMenuState(Gt.MISSION_SELECT),this._setScreen(u0({profile:this.profile,progress:Nc(),onPick:t=>this.showBriefing(t),onFree:t=>this.showBriefing({id:t.id,title:`PEMANDUAN BEBAS — ${t.title.toUpperCase()}`,free:!0,start:t.start,traffic:{kinds:t.kinds}}),onBack:()=>this.showMenu()}))}showBriefing(t){this._enterMenuState(Gt.BRIEFING),this._setScreen(d0({mission:t,profile:this.profile,settings:this.settings,onStart:()=>this.startMission(t),onBack:()=>this.showMissionSelect()}))}startMission(t){if(!this.profile)return this.goStart();this.audio.unlock(),this.current=t,this._applyProfileToCar(),this._setScreen(null),this.hud.setProfile(this.profile,this.avatarFor(this.profile),t.no?`MISI ${t.no}: ${t.title}`:t.title),this.mission.start(t.free?{...t,objectives:null,checkpoints:[]}:t),this.restart()}restart(){const t=this.current;if(!t)return;this._setScreen(null);const e=t.start,n=this.net.laneSpot(e.edge,e.dir,e.t,e.lane||0);this.player.reset(n.x,n.z,Qs(n.dx,n.dz)),this.player.laneInfo=null,this.carModel.group.visible=!0,this._syncCar();const i=this.settings.graphics,r={low:8,medium:14,high:20},a=t.traffic||{};this.traffic.configure({count:a.count?a.count[i]:r[i],kinds:a.kinds||[],oncoming:a.oncoming||null,scripted:t.scripted||[]}),this.world.lights.reset(),this.world.pedestrians.reset(),this.traffic.reset(this.player),this.rules.reset(),this.warnings.reset(),this.mission.reset(),this.dialog.hide(),this.shownSigns.clear(),this.headYaw=0,this.input.dragYaw=0,this.input.releaseAll(),this.statusMsg="",this.hud.setHint(this.mission.currentCheckpoint?this.mission.currentCheckpoint.hint:"Pemanduan bebas — patuhi peraturan jalan raya."),this._refreshObjectives(),this.hud.show(),this.state=Gt.PLAYING,this.touch.setVisible(this.touchEnabled),this.input.enabled=!0}pause(){this.state!==Gt.PLAYING&&this.state!==Gt.DIALOG||(this._pausedFrom=this.state,this.state=Gt.PAUSED,this.input.releaseAll(),this._showPause())}_showPause(){this._setScreen(v0({onResume:()=>this.resume(),onRestart:()=>this.restart(),onSettings:()=>this.showSettings(()=>this._showPause()),onMenu:()=>this.showMenu()}))}resume(){this.state===Gt.PAUSED&&(this._setScreen(null),this.state=this._pausedFrom===Gt.DIALOG&&this.dialog.isOpen?Gt.DIALOG:Gt.PLAYING,this.touch.setVisible(this.touchEnabled))}gameOver(t){this.state!==Gt.GAME_OVER&&(this.state=Gt.GAME_OVER,this.player.speed=0,this.input.releaseAll(),this.audio.crash(),this.dialog.hide(),this.touch.setVisible(!1),this.lastGameOver=t,this._setScreen(m0({reason:t,profile:this.profile,onRetry:()=>this.restart(),onMenu:()=>this.showMenu()})))}_onMissionComplete(t){if(this.state!==Gt.PLAYING&&this.state!==Gt.DIALOG)return;this.state=Gt.COMPLETE,this.input.releaseAll(),this.touch.setVisible(!1),this.dialog.hide(),this.lastResult=t,Jg(this.current.id,t);const e=Ks.findIndex(i=>i.id===this.current.id),n=e>=0&&e<Ks.length-1?Ks[e+1]:null;this._setScreen(_0({mission:this.current,result:t,profile:this.profile,onRetry:()=>this.restart(),onNext:n?()=>this.showBriefing(n):null,onMenu:()=>this.showMenu()}))}_refreshObjectives(){var t;this.hud.setObjectives((t=this.mission.mission)!=null&&t.objectives?this.mission.mission:null,e=>this.mission.objectiveStatus(e))}_resetCarToLane(){const t=this.player,e=this.net.locateLane(t.x,t.z,t.yaw,12)||this.net.locateLane(t.x,t.z,t.yaw+Math.PI,12);let n,i;if(e&&!e.lane.isConnector)n=e.lane,i=e.s;else{let r=null;for(const a of this.net.lanes)if(!a.isConnector)for(let o=0;o<a.xs.length;o+=3){const l=Math.hypot(a.xs[o]-t.x,a.zs[o]-t.z);(!r||l<r.d)&&(r={d:l,lane:a,s:a.cum[o]})}n=r.lane,i=r.s}for(let r=0;r<20;r++){const a=this.net.lanePointAt(n,Math.min(n.length-1,i));if(this.traffic.npcs.every(l=>Math.hypot(l.x-a.x,l.z-a.z)>9)){t.reset(a.x,a.z,Qs(a.dx,a.dz)),t.signal=0,this.statusMsg="Kereta dikembalikan ke lorong.",this.statusTimer=2;return}i=Math.max(0,i-8)}}_menuTraffic(){const t={x:90,z:90,yaw:0,speed:0,length:4.3,width:1.8,laneInfo:null};this.menuDummy=t,this.traffic.configure({count:14,kinds:["city","residential"]}),this.world.lights.reset(),this.traffic.reset(t)}_frame(){const t=performance.now(),e=Math.min(.05,(t-this._last)/1e3);if(this._last=t,this.time+=e,this.state===Gt.PLAYING?this._simulate(e):this.audio.update(0,0,0,!1),Jr.has(this.state)){this.traffic.update(e,this.menuDummy,this.world.pedestrians),this.world.pedestrians.update(e,this.traffic.npcs);const n=this.time*.05;this.menuCamera.position.set(60+Math.cos(n)*170,70,180+Math.sin(n)*170),this.menuCamera.lookAt(30,0,150),this.world.followSun(60,180)}(this.state===Gt.DIALOG||this.state===Gt.PLAYING)&&this.dialog.update(this.state===Gt.DIALOG?0:e,this.camera,this.width,this.height),this._render()}_simulate(t){const e=this.player;for(const h of this.input.drain())if(h==="signalLeft")e.toggleSignal(-1);else if(h==="signalRight")e.toggleSignal(1);else if(h==="reset")this._resetCarToLane();else if(h==="pause"){this.pause();return}const n=this.input.state,i=this.rules.edgeLoc,r=!!(i&&i.inTrim&&this.net.isSlippery(i.edge,i.s));e.update(t,n,{sensitivity:this.settings.steeringSensitivity,slippery:r}),e.laneInfo=this.net.locateLane(e.x,e.z,e.yaw,4);let a=this.input.dragYaw;n.lookLeft?a=.95:n.lookRight?a=-.75:n.dragging||(this.input.dragYaw*=Math.max(0,1-t*3)),this.headYaw+=(a-this.headYaw)*Math.min(1,t*8),this.traffic.update(t,e,this.world.pedestrians),this.world.pedestrians.update(t,[e,...this.traffic.npcs]);const o=this.rules.time-this.rules.lastLaneChange.time<3||this.rules.overtake&&this.rules.time-this.rules.overtake.start<4,l=this.collision.check(e,this.traffic,this.world.pedestrians,o);if(l)if(l.type==="bump")e.revert(),this.statusMsg="Kereta tersangkut — undur (tahan S) atau tekan R.",this.statusTimer=2.5;else{this._syncCar(),this.gameOver(l.reason);return}if(this.rules.update(t,e,this.headYaw),this.mission.update(t,e),this.state!==Gt.PLAYING)return;this._checkSigns(),this.warnings.update(t),this.blinkT+=t;const c=e.signal!==0&&Math.floor(this.blinkT*2.8)%2===0;e.signal!==0&&c!==this.lastBlink&&this.audio.tick(c),this.lastBlink=c,this.audio.update(e.speed,e.throttle,e.brake+(n.emergency?1:0),!0),this.statusTimer-=t;const u=this.statusTimer>0?this.statusMsg:r?"Jalan licin — brek kurang berkesan (simulasi).":"";this._syncCar(),this.carModel.drawCluster(e.kmh,this.rules.currentLimit,e.signal,c,e.reverse),this.hud.update(e,{limit:this.rules.currentLimit,blinkOn:c,checkpoint:this.mission.currentCheckpoint,status:u})}_syncCar(){const t=this.player,e=this.carModel.group;e.position.set(t.x,0,t.z),e.rotation.y=t.yaw,this.headPivot.rotation.y=this.headYaw,this.headPivot.rotation.x=-.06+t.pitchFx,this.carModel.update(t.steerVisual),this.world.followSun(t.x,t.z)}_checkSigns(){if(!this.settings.autoDialogs||this.dialog.isOpen)return;const t=this.player,e=-Math.sin(t.yaw),n=-Math.cos(t.yaw);for(const i of this.world.signs.signs){const r=i.x-t.x,a=i.z-t.z;if(Math.abs(r)>70||Math.abs(a)>70)continue;const o=r*e+a*n;if(o<14||o>62||Math.abs(r*n-a*e)>o*.6||e*i.tdx+n*i.tdz<.75)continue;const c=`${i.type}|${i.value??""}`;if(this.shownSigns.has(c))continue;this.shownSigns.add(c);const u=e0(i.type,i.value),h=this.settings.drivingMode==="learning"&&this.settings.pauseOnDialog;this.dialog.open(i,u,bg(i.type,i.value),{pausing:h,autoClose:!h}),this.lastSign=i,h&&(this.state=Gt.DIALOG,this.input.releaseAll());return}}_onDialogClosed(){this.state===Gt.DIALOG&&(this.state=Gt.PLAYING)}_render(){const t=this.renderer;if(t.shadowMap.needsUpdate=t.shadowMap.enabled,Jr.has(this.state)){this.world.scenery.updateVisibility(this.menuCamera.position.x,this.menuCamera.position.z,this.world.drawDistance),t.render(this.scene,this.menuCamera);return}this.world.scenery.updateVisibility(this.player.x,this.player.z,this.world.drawDistance),this.carModel.group.updateMatrixWorld(!0),this.mirrors.render(t,this.scene),t.render(this.scene,this.camera)}debugStep(t=60,e=1/60,n={}){const i={throttle:!1,brake:!1,left:!1,right:!1,emergency:!1,lookLeft:!1,lookRight:!1,dragging:!1};Object.defineProperty(this.input,"state",{configurable:!0,get:()=>({...i,...n})});try{for(let r=0;r<t&&this.state===Gt.PLAYING;r++)this._simulate(e)}finally{delete this.input.state}return this.debugSnapshot()}debugSnapshot(){return{state:this.state,player:{x:this.player.x,z:this.player.z,yaw:this.player.yaw,kmh:this.player.kmh,signal:this.player.signal},npcs:this.traffic.npcs.length,npcStates:this.traffic.npcs.reduce((t,e)=>(t[e.state]=(t[e.state]||0)+1,t),{}),limit:this.rules.currentLimit,checkpoint:this.mission.cpIndex,warnings:this.warnings.log.map(t=>t.id),dialog:this.dialog.isOpen?this.dialog.sign.type:null,kmhUnit:De}}}function T0(){const s=document.getElementById("game-canvas"),t=document.getElementById("ui-root");try{const e=new w0(s,t);window.__MRH=e}catch(e){console.error(e);const n=document.createElement("div");n.className="fatal",n.innerHTML="<h2>Ralat memulakan game</h2><p>Pelayar anda mungkin tidak menyokong WebGL.</p><pre></pre><p>DEVELOPER: ADAM ZAKWAN</p>",n.querySelector("pre").textContent=String(e&&e.message?e.message:e),t.append(n)}}T0();
