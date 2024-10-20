(function(){"use strict";var e={6151:function(e,n,o){var t=o(9746),r=o(5976);const s={id:"app"};function i(e,n,o,t,i,u){const a=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",s,[(0,r.bF)(a)])}var u={name:"App"},a=o(1169);const c=(0,a.A)(u,[["render",i]]);var l=c,d=o(9053),f=o(160);function m(e,n,o,s,i,u){return(0,r.uX)(),(0,r.CE)("div",null,[n[6]||(n[6]=(0,r.Lk)("h1",null,"Forum n°1",-1)),n[7]||(n[7]=(0,r.Lk)("p",null,"Regarde la console pour voir les événements de connexion.",-1)),(0,r.Lk)("div",null,[(0,r.Lk)("ul",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(i.messages,((e,n)=>((0,r.uX)(),(0,r.CE)("li",{key:n},(0,f.v_)(e),1)))),128))]),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>i.newMessage=e),onKeyup:n[1]||(n[1]=(0,t.jR)(((...e)=>u.sendMessage&&u.sendMessage(...e)),["enter"])),placeholder:"Type your message here..."},null,544),[[t.Jo,i.newMessage]]),(0,r.Lk)("button",{onClick:n[2]||(n[2]=(...e)=>u.sendMessage&&u.sendMessage(...e))},"Send")]),(0,r.Lk)("div",null,[n[5]||(n[5]=(0,r.Lk)("h2",null,"Invite someone to the room",-1)),(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":n[3]||(n[3]=e=>i.inviteEmail=e),placeholder:"Enter email"},null,512),[[t.Jo,i.inviteEmail]]),(0,r.Lk)("button",{onClick:n[4]||(n[4]=(...e)=>u.sendInvite&&u.sendInvite(...e))},"Send Invite")])])}o(4114);var h=o(61),v=o(8194),p={name:"ChatRoom",data(){return{socket:null,room:"room1",messages:[],newMessage:"",inviteEmail:"rejoinsMaSuperRoom@outlook.com"}},mounted(){this.socket=(0,h.io)("http://localhost:3000"),this.socket.on("connect",(()=>{console.log("Connecté au serveur Socket.IO"),this.socket.emit("joinRoom",{room:this.room})})),this.socket.on("disconnect",(()=>{console.log("Déconnecté du serveur Socket.IO")})),this.socket.on("message",(e=>{console.log(`Message from room: ${e}`),this.messages.push(e)}))},methods:{sendMessage(){""!==this.newMessage.trim()&&(this.socket.emit("message",{room:this.room,message:this.newMessage}),this.newMessage="")},sendInvite(){v.A.post("http://localhost:3000/invite",{email:this.inviteEmail,room:this.room}).then((e=>{console.log("Invitation sent:",e.data)})).catch((e=>{console.error("Error sending invitation:",e)}))}},beforeUnmount(){this.socket&&this.socket.disconnect()}};const g=(0,a.A)(p,[["render",m],["__scopeId","data-v-3bc91071"]]);var k=g;const b=[{path:"/chat-room",name:"ChatRoom",component:k}],y=(0,d.aE)({history:(0,d.LA)(),routes:b});var M=y;(0,t.Ef)(l).use(M).mount("#app")}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var s=n[t]={exports:{}};return e[t].call(s.exports,s,s.exports,o),s.exports}o.m=e,function(){var e=[];o.O=function(n,t,r,s){if(!t){var i=1/0;for(l=0;l<e.length;l++){t=e[l][0],r=e[l][1],s=e[l][2];for(var u=!0,a=0;a<t.length;a++)(!1&s||i>=s)&&Object.keys(o.O).every((function(e){return o.O[e](t[a])}))?t.splice(a--,1):(u=!1,s<i&&(i=s));if(u){e.splice(l--,1);var c=r();void 0!==c&&(n=c)}}return n}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[t,r,s]}}(),function(){o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,{a:n}),n}}(),function(){o.d=function(e,n){for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};o.O.j=function(n){return 0===e[n]};var n=function(n,t){var r,s,i=t[0],u=t[1],a=t[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(r in u)o.o(u,r)&&(o.m[r]=u[r]);if(a)var l=a(o)}for(n&&n(t);c<i.length;c++)s=i[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(l)},t=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=o.O(void 0,[504],(function(){return o(6151)}));t=o.O(t)})();
//# sourceMappingURL=app.55188a90.js.map