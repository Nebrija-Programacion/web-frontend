var F,a,Q,on,x,z,X,H,Y,S={},I=[],_n=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,O=Array.isArray;function C(e,n){for(var t in n)e[t]=n[t];return e}function Z(e){var n=e.parentNode;n&&n.removeChild(e)}function ln(e,n,t){var l,_,r,u={};for(r in n)r=="key"?l=n[r]:r=="ref"?_=n[r]:u[r]=n[r];if(arguments.length>2&&(u.children=arguments.length>3?F.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)u[r]===void 0&&(u[r]=e.defaultProps[r]);return W(e,u,l,_,null)}function W(e,n,t,l,_){var r={type:e,props:n,key:t,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:_??++Q,__i:-1,__u:0};return _==null&&a.vnode!=null&&a.vnode(r),r}function N(e){return e.children}function M(e,n){this.props=e,this.context=n}function P(e,n){if(n==null)return e.__?P(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?P(e):null}function rn(e,n,t){var l,_=e.__v,r=_.__e,u=e.__P;if(u)return(l=C({},_)).__v=_.__v+1,a.vnode&&a.vnode(l),V(u,l,_,e.__n,u.ownerSVGElement!==void 0,32&_.__u?[r]:null,n,r??P(_),!!(32&_.__u),t),l.__v=_.__v,l.__.__k[l.__i]=l,l.__d=void 0,l.__e!=r&&nn(l),l}function nn(e){var n,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return nn(e)}}function R(e){(!e.__d&&(e.__d=!0)&&x.push(e)&&!L.__r++||z!==a.debounceRendering)&&((z=a.debounceRendering)||X)(L)}function L(){var e,n,t,l=[],_=[];for(x.sort(H);e=x.shift();)e.__d&&(t=x.length,n=rn(e,l,_)||n,t===0||x.length>t?($(l,n,_),_.length=l.length=0,n=void 0,x.sort(H)):n&&a.__c&&a.__c(n,I));n&&$(l,n,_),L.__r=0}function en(e,n,t,l,_,r,u,f,c,i,p){var o,m,s,h,k,v=l&&l.__k||I,d=n.length;for(t.__d=c,un(t,n,v),c=t.__d,o=0;o<d;o++)(s=t.__k[o])!=null&&typeof s!="boolean"&&typeof s!="function"&&(m=s.__i===-1?S:v[s.__i]||S,s.__i=o,V(e,s,m,_,r,u,f,c,i,p),h=s.__e,s.ref&&m.ref!=s.ref&&(m.ref&&G(m.ref,null,s),p.push(s.ref,s.__c||h,s)),k==null&&h!=null&&(k=h),65536&s.__u||m.__k===s.__k?c=tn(s,c,e):typeof s.type=="function"&&s.__d!==void 0?c=s.__d:h&&(c=h.nextSibling),s.__d=void 0,s.__u&=-196609);t.__d=c,t.__e=k}function un(e,n,t){var l,_,r,u,f,c=n.length,i=t.length,p=i,o=0;for(e.__k=[],l=0;l<c;l++)u=l+o,(_=e.__k[l]=(_=n[l])==null||typeof _=="boolean"||typeof _=="function"?null:typeof _=="string"||typeof _=="number"||typeof _=="bigint"||_.constructor==String?W(null,_,null,null,null):O(_)?W(N,{children:_},null,null,null):_.constructor===void 0&&_.__b>0?W(_.type,_.props,_.key,_.ref?_.ref:null,_.__v):_)!=null?(_.__=e,_.__b=e.__b+1,f=sn(_,t,u,p),_.__i=f,r=null,f!==-1&&(p--,(r=t[f])&&(r.__u|=131072)),r==null||r.__v===null?(f==-1&&o--,typeof _.type!="function"&&(_.__u|=65536)):f!==u&&(f===u+1?o++:f>u?p>c-u?o+=f-u:o--:f<u?f==u-1&&(o=f-u):o=0,f!==l+o&&(_.__u|=65536))):(r=t[u])&&r.key==null&&r.__e&&!(131072&r.__u)&&(r.__e==e.__d&&(e.__d=P(r)),B(r,r,!1),t[u]=null,p--);if(p)for(l=0;l<i;l++)(r=t[l])!=null&&!(131072&r.__u)&&(r.__e==e.__d&&(e.__d=P(r)),B(r,r))}function tn(e,n,t){var l,_;if(typeof e.type=="function"){for(l=e.__k,_=0;l&&_<l.length;_++)l[_]&&(l[_].__=e,n=tn(l[_],n,t));return n}e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e);do n=n&&n.nextSibling;while(n!=null&&n.nodeType===8);return n}function sn(e,n,t,l){var _=e.key,r=e.type,u=t-1,f=t+1,c=n[t];if(c===null||c&&_==c.key&&r===c.type&&!(131072&c.__u))return t;if(l>(c!=null&&!(131072&c.__u)?1:0))for(;u>=0||f<n.length;){if(u>=0){if((c=n[u])&&!(131072&c.__u)&&_==c.key&&r===c.type)return u;u--}if(f<n.length){if((c=n[f])&&!(131072&c.__u)&&_==c.key&&r===c.type)return f;f++}}return-1}function q(e,n,t){n[0]==="-"?e.setProperty(n,t??""):e[n]=t==null?"":typeof t!="number"||_n.test(n)?t:t+"px"}function T(e,n,t,l,_){var r;n:if(n==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof l=="string"&&(e.style.cssText=l=""),l)for(n in l)t&&n in t||q(e.style,n,"");if(t)for(n in t)l&&t[n]===l[n]||q(e.style,n,t[n])}else if(n[0]==="o"&&n[1]==="n")r=n!==(n=n.replace(/(PointerCapture)$|Capture$/i,"$1")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+r]=t,t?l?t.u=l.u:(t.u=Date.now(),e.addEventListener(n,r?K:J,r)):e.removeEventListener(n,r?K:J,r);else{if(_)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(n!=="width"&&n!=="height"&&n!=="href"&&n!=="list"&&n!=="form"&&n!=="tabIndex"&&n!=="download"&&n!=="rowSpan"&&n!=="colSpan"&&n!=="role"&&n in e)try{e[n]=t??"";break n}catch{}typeof t=="function"||(t==null||t===!1&&n[4]!=="-"?e.removeAttribute(n):e.setAttribute(n,t))}}function J(e){if(this.l){var n=this.l[e.type+!1];if(e.t){if(e.t<=n.u)return}else e.t=Date.now();return n(a.event?a.event(e):e)}}function K(e){if(this.l)return this.l[e.type+!0](a.event?a.event(e):e)}function V(e,n,t,l,_,r,u,f,c,i){var p,o,m,s,h,k,v,d,y,b,E,w,j,D,A,g=n.type;if(n.constructor!==void 0)return null;128&t.__u&&(c=!!(32&t.__u),r=[f=n.__e=t.__e]),(p=a.__b)&&p(n);n:if(typeof g=="function")try{if(d=n.props,y=(p=g.contextType)&&l[p.__c],b=p?y?y.props.value:p.__:l,t.__c?v=(o=n.__c=t.__c).__=o.__E:("prototype"in g&&g.prototype.render?n.__c=o=new g(d,b):(n.__c=o=new M(d,b),o.constructor=g,o.render=cn),y&&y.sub(o),o.props=d,o.state||(o.state={}),o.context=b,o.__n=l,m=o.__d=!0,o.__h=[],o._sb=[]),o.__s==null&&(o.__s=o.state),g.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=C({},o.__s)),C(o.__s,g.getDerivedStateFromProps(d,o.__s))),s=o.props,h=o.state,o.__v=n,m)g.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(g.getDerivedStateFromProps==null&&d!==s&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(d,b),!o.__e&&(o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(d,o.__s,b)===!1||n.__v===t.__v)){for(n.__v!==t.__v&&(o.props=d,o.state=o.__s,o.__d=!1),n.__e=t.__e,n.__k=t.__k,n.__k.forEach(function(U){U&&(U.__=n)}),E=0;E<o._sb.length;E++)o.__h.push(o._sb[E]);o._sb=[],o.__h.length&&u.push(o);break n}o.componentWillUpdate!=null&&o.componentWillUpdate(d,o.__s,b),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(s,h,k)})}if(o.context=b,o.props=d,o.__P=e,o.__e=!1,w=a.__r,j=0,"prototype"in g&&g.prototype.render){for(o.state=o.__s,o.__d=!1,w&&w(n),p=o.render(o.props,o.state,o.context),D=0;D<o._sb.length;D++)o.__h.push(o._sb[D]);o._sb=[]}else do o.__d=!1,w&&w(n),p=o.render(o.props,o.state,o.context),o.state=o.__s;while(o.__d&&++j<25);o.state=o.__s,o.getChildContext!=null&&(l=C(C({},l),o.getChildContext())),m||o.getSnapshotBeforeUpdate==null||(k=o.getSnapshotBeforeUpdate(s,h)),en(e,O(A=p!=null&&p.type===N&&p.key==null?p.props.children:p)?A:[A],n,t,l,_,r,u,f,c,i),o.base=n.__e,n.__u&=-161,o.__h.length&&u.push(o),v&&(o.__E=o.__=null)}catch(U){n.__v=null,c||r!=null?(n.__e=f,n.__u|=c?160:32,r[r.indexOf(f)]=null):(n.__e=t.__e,n.__k=t.__k),a.__e(U,n,t)}else r==null&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=fn(t.__e,n,t,l,_,r,u,c,i);(p=a.diffed)&&p(n)}function $(e,n,t){for(var l=0;l<t.length;l++)G(t[l],t[++l],t[++l]);a.__c&&a.__c(n,e),e.some(function(_){try{e=_.__h,_.__h=[],e.some(function(r){r.call(_)})}catch(r){a.__e(r,_.__v)}})}function fn(e,n,t,l,_,r,u,f,c){var i,p,o,m,s,h,k,v=t.props,d=n.props,y=n.type;if(y==="svg"&&(_=!0),r!=null){for(i=0;i<r.length;i++)if((s=r[i])&&"setAttribute"in s==!!y&&(y?s.localName===y:s.nodeType===3)){e=s,r[i]=null;break}}if(e==null){if(y===null)return document.createTextNode(d);e=_?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,d.is&&d),r=null,f=!1}if(y===null)v===d||f&&e.data===d||(e.data=d);else{if(r=r&&F.call(e.childNodes),v=t.props||S,!f&&r!=null)for(v={},i=0;i<e.attributes.length;i++)v[(s=e.attributes[i]).name]=s.value;for(i in v)s=v[i],i=="children"||(i=="dangerouslySetInnerHTML"?o=s:i==="key"||i in d||T(e,i,null,s,_));for(i in d)s=d[i],i=="children"?m=s:i=="dangerouslySetInnerHTML"?p=s:i=="value"?h=s:i=="checked"?k=s:i==="key"||f&&typeof s!="function"||v[i]===s||T(e,i,s,v[i],_);if(p)f||o&&(p.__html===o.__html||p.__html===e.innerHTML)||(e.innerHTML=p.__html),n.__k=[];else if(o&&(e.innerHTML=""),en(e,O(m)?m:[m],n,t,l,_&&y!=="foreignObject",r,u,r?r[0]:t.__k&&P(t,0),f,c),r!=null)for(i=r.length;i--;)r[i]!=null&&Z(r[i]);f||(i="value",h!==void 0&&(h!==e[i]||y==="progress"&&!h||y==="option"&&h!==v[i])&&T(e,i,h,v[i],!1),i="checked",k!==void 0&&k!==e[i]&&T(e,i,k,v[i],!1))}return e}function G(e,n,t){try{typeof e=="function"?e(n):e.current=n}catch(l){a.__e(l,t)}}function B(e,n,t){var l,_;if(a.unmount&&a.unmount(e),(l=e.ref)&&(l.current&&l.current!==e.__e||G(l,null,n)),(l=e.__c)!=null){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(r){a.__e(r,n)}l.base=l.__P=null,e.__c=void 0}if(l=e.__k)for(_=0;_<l.length;_++)l[_]&&B(l[_],n,t||typeof e.type!="function");t||e.__e==null||Z(e.__e),e.__=e.__e=e.__d=void 0}function cn(e,n,t){return this.constructor(e,t)}function pn(e,n,t){var l,_,r,u;a.__&&a.__(e,n),_=(l=typeof t=="function")?null:t&&t.__k||n.__k,r=[],u=[],V(n,e=(!l&&t||n).__k=ln(N,null,[e]),_||S,S,n.ownerSVGElement!==void 0,!l&&t?[t]:_?null:n.firstChild?F.call(n.childNodes):null,r,!l&&t?t:_?_.__e:n.firstChild,l,u),e.__d=void 0,$(r,e,u)}function an(e,n){var t={__c:n="__cC"+Y++,__:e,Consumer:function(l,_){return l.children(_)},Provider:function(l){var _,r;return this.getChildContext||(_=[],(r={})[n]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(u){this.props.value!==u.value&&_.some(function(f){f.__e=!0,R(f)})},this.sub=function(u){_.push(u);var f=u.componentWillUnmount;u.componentWillUnmount=function(){_.splice(_.indexOf(u),1),f&&f.call(u)}}),l.children}};return t.Provider.__=t.Consumer.contextType=t}F=I.slice,a={__e:function(e,n,t,l){for(var _,r,u;n=n.__;)if((_=n.__c)&&!_.__)try{if((r=_.constructor)&&r.getDerivedStateFromError!=null&&(_.setState(r.getDerivedStateFromError(e)),u=_.__d),_.componentDidCatch!=null&&(_.componentDidCatch(e,l||{}),u=_.__d),u)return _.__E=_}catch(f){e=f}throw e}},Q=0,on=function(e){return e!=null&&e.constructor==null},M.prototype.setState=function(e,n){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=C({},this.state),typeof e=="function"&&(e=e(C({},t),this.props)),e&&C(t,e),e!=null&&this.__v&&(n&&this._sb.push(n),R(this))},M.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),R(this))},M.prototype.render=N,x=[],X=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,H=function(e,n){return e.__v.__b-n.__v.__b},L.__r=0,Y=0;export{a,on as b,ln as c,N as d,M as e,pn as f,an as g};