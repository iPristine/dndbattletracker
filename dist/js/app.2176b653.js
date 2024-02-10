(function(){"use strict";var e={6571:function(e,t,a){var r=a(7764),n=a(4108),o=a(9096);function i(e,t,a,r,i,l){const c=(0,n.E1)("battle-status"),s=(0,n.E1)("add-hero"),u=(0,n.E1)("hero-list"),d=(0,n.E1)("v-main"),m=(0,n.E1)("v-btn"),v=(0,n.E1)("v-footer"),h=(0,n.E1)("v-app");return(0,n.Wz)(),(0,n.Az)(h,null,{default:(0,n.Ql)((()=>[(0,n.K2)(c),(0,n.K2)(d,null,{default:(0,n.Ql)((()=>[(0,n.K2)(s),(0,n.K2)(u)])),_:1}),(0,n.K2)(v,{border:"",class:"bg-grey-lighten-5",app:""},{default:(0,n.Ql)((()=>[(0,n.K2)(m,{variant:"plain",disabled:""},{default:(0,n.Ql)((()=>[(0,n.mY)((0,o.WA)((new Date).getFullYear()),1)])),_:1}),(0,n.K2)(m,{variant:"plain",disabled:""},{default:(0,n.Ql)((()=>[(0,n.mY)("Lev Vorobyov")])),_:1}),(0,n.K2)(m,{variant:"text",href:"https://vk.com/lev2die",target:"_blank"},{default:(0,n.Ql)((()=>[(0,n.mY)("VK")])),_:1}),(0,n.K2)(m,{variant:"text",href:"https://github.com/thylaakari",target:"_blank"},{default:(0,n.Ql)((()=>[(0,n.mY)("GitHub")])),_:1})])),_:1})])),_:1})}function l(e,t,a,o,i,l){const c=(0,n.E1)("v-card-title"),s=(0,n.E1)("v-text-field"),u=(0,n.E1)("v-col"),d=(0,n.E1)("v-btn"),m=(0,n.E1)("v-row"),v=(0,n.E1)("v-container"),h=(0,n.E1)("v-form"),p=(0,n.E1)("v-card");return e.isStarted?(0,n.g1)("",!0):((0,n.Wz)(),(0,n.Az)(v,{key:0},{default:(0,n.Ql)((()=>[(0,n.K2)(p,{color:"teal-darken-4"},{default:(0,n.Ql)((()=>[(0,n.K2)(c,null,{default:(0,n.Ql)((()=>[(0,n.mY)("Добавить в бой")])),_:1}),(0,n.K2)(h,{onSubmit:t[5]||(t[5]=(0,r.Y7)((()=>{}),["prevent"])),ref:"addHero"},{default:(0,n.Ql)((()=>[(0,n.K2)(v,null,{default:(0,n.Ql)((()=>[(0,n.K2)(m,null,{default:(0,n.Ql)((()=>[(0,n.K2)(u,{cols:"12",md:"3"},{default:(0,n.Ql)((()=>[(0,n.K2)(s,{variant:"outlined",label:"Имя",modelValue:e.hero.name,"onUpdate:modelValue":t[0]||(t[0]=t=>e.hero.name=t),required:"","hide-details":"",rules:e.textRules},null,8,["modelValue","rules"])])),_:1}),(0,n.K2)(u,{cols:"12",md:"2"},{default:(0,n.Ql)((()=>[(0,n.K2)(s,{variant:"outlined",label:"Инициатива",modelValue:e.hero.initiative,"onUpdate:modelValue":t[1]||(t[1]=t=>e.hero.initiative=t),modelModifiers:{number:!0},required:"","hide-details":"",rules:e.numberRules},null,8,["modelValue","rules"])])),_:1}),(0,n.K2)(u,{cols:"12",md:"2"},{default:(0,n.Ql)((()=>[(0,n.K2)(s,{variant:"outlined",label:"ХП",modelValue:e.hero.hp,"onUpdate:modelValue":t[2]||(t[2]=t=>e.hero.hp=t),modelModifiers:{number:!0},required:"","hide-details":"",rules:e.numberRules},null,8,["modelValue","rules"])])),_:1}),(0,n.K2)(u,{cols:"12",md:"2"},{default:(0,n.Ql)((()=>[(0,n.K2)(s,{variant:"outlined",label:"КД",modelValue:e.hero.ac,"onUpdate:modelValue":t[3]||(t[3]=t=>e.hero.ac=t),modelModifiers:{number:!0},required:"","hide-details":"",rules:e.numberRules},null,8,["modelValue","rules"])])),_:1}),(0,n.K2)(u,{cols:"12",md:"3"},{default:(0,n.Ql)((()=>[(0,n.K2)(d,{size:"large",icon:"mdi-plus",color:"teal",onClick:t[4]||(t[4]=t=>l.checkHero(e.hero))})])),_:1})])),_:1})])),_:1})])),_:1},512)])),_:1})])),_:1}))}var c=a(7192),s={name:"AddHero",data:()=>({hero:{name:"",initiative:"",hp:"",ac:""},textRules:[e=>!!e||"Введите имя"],numberRules:[e=>e>0||"Введите число > 0"]}),methods:{...(0,c.ae)({addHeroID:"heroes/addHeroID"}),async checkHero(){const{valid:e}=await this.$refs.addHero.validate();e&&(this.hero.currentHp=this.hero.hp,this.hero.status=[{name:"Умер",color:"black",active:!1},{name:"Бессознательный",color:"red",active:!1},{name:"Испуганный",color:"purple",active:!1},{name:"Истощенный",color:"deep-purple",active:!1},{name:"Окаменевший",color:"pink",active:!1},{name:"Опутанный",color:"indigo",active:!1},{name:"Ослепленный",color:"blue",active:!1},{name:"Отравленный",color:"light-blue",active:!1},{name:"Очарованный",color:"cyan",active:!1},{name:"Ошеломленный",color:"teal",active:!1},{name:"Парализованный",color:"green",active:!1},{name:"Сбитый с ног",color:"light-green",active:!1},{name:"Схваченный",color:"lime",active:!1}],this.addHeroID(this.hero),this.hero={})}},computed:{...(0,c.ys)({isStarted:e=>e.battle.start})}},u=a(4100);const d=(0,u.c)(s,[["render",l]]);var m=d;const v={key:0},h={key:1,class:"d-flex flex-wrap"};function p(e,t,a,r,i,l){const c=(0,n.E1)("v-card-title"),s=(0,n.E1)("v-spacer"),u=(0,n.E1)("v-btn"),d=(0,n.E1)("v-chip"),m=(0,n.E1)("v-card");return(0,n.Wz)(),(0,n.Az)(m,{color:"teal",class:"d-flex"},{default:(0,n.Ql)((()=>[(0,n.K2)(c,{class:"d-none d-md-flex"},{default:(0,n.Ql)((()=>[(0,n.mY)("Трекер боя ДнД")])),_:1}),(0,n.K2)(s),e.isStarted?((0,n.Wz)(),(0,n.An)("div",h,[(0,n.K2)(d,{class:"ma-2"},{default:(0,n.Ql)((()=>[(0,n.mY)("Ход: "+(0,o.WA)(e.turnHeroName),1)])),_:1}),(0,n.K2)(d,{class:"ma-2"},{default:(0,n.Ql)((()=>[(0,n.mY)("Раунд: "+(0,o.WA)(e.round)+" / Ход: "+(0,o.WA)(e.turn)+" из "+(0,o.WA)(e.countTurnInRound),1)])),_:1}),(0,n.K2)(d,{class:"ma-2"},{default:(0,n.Ql)((()=>[(0,n.mY)("Времени прошло: "+(0,o.WA)(e.min<10?"0"+e.min:e.min)+":"+(0,o.WA)(e.sec<10?"0"+e.sec:e.sec),1)])),_:1}),e.turn===e.countTurnInRound?((0,n.Wz)(),(0,n.Az)(u,{key:0,"prepend-icon":"mdi-arrow-right",onClick:t[1]||(t[1]=t=>e.nextTurn()),color:"white",variant:"outlined",class:"ma-2"},{default:(0,n.Ql)((()=>[(0,n.mY)("Следующий раунд")])),_:1})):((0,n.Wz)(),(0,n.Az)(u,{key:1,"prepend-icon":"mdi-arrow-right",onClick:t[2]||(t[2]=t=>e.nextTurn()),color:"white",variant:"outlined",class:"ma-2"},{default:(0,n.Ql)((()=>[(0,n.mY)("Следующий ход")])),_:1})),(0,n.K2)(u,{"prepend-icon":"mdi-close",color:"black",onClick:t[3]||(t[3]=t=>e.endBattle()),variant:"outlined",class:"ma-2"},{default:(0,n.Ql)((()=>[(0,n.mY)("Закончить бой")])),_:1})])):((0,n.Wz)(),(0,n.An)("div",v,[(0,n.K2)(u,{"prepend-icon":"mdi-axe-battle",onClick:t[0]||(t[0]=t=>e.startBattle()),color:"black",variant:"outlined",class:"ma-2"},{default:(0,n.Ql)((()=>[(0,n.mY)("Начать бой")])),_:1})]))])),_:1})}var g={name:"BattleStatus",methods:{...(0,c.ae)({startBattle:"battle/startBattle",nextTurn:"battle/turn",endBattle:"battle/endBattle"})},computed:{...(0,c.ys)({isStarted:e=>e.battle.start,round:e=>e.battle.round,countTurnInRound:e=>e.battle.countTurnInRound,turn:e=>e.battle.turn,turnHeroName:e=>e.battle.turnHeroName,min:e=>e.battle.timeElapsed.min,sec:e=>e.battle.timeElapsed.sec})}};const f=(0,u.c)(g,[["render",p]]);var b=f;function H(e,t,a,r,o,i){const l=(0,n.E1)("hero"),c=(0,n.E1)("v-col"),s=(0,n.E1)("v-row"),u=(0,n.E1)("v-container");return(0,n.Wz)(),(0,n.Az)(u,{fluid:""},{default:(0,n.Ql)((()=>[(0,n.K2)(s,null,{default:(0,n.Ql)((()=>[((0,n.Wz)(!0),(0,n.An)(n.ae,null,(0,n.mi)(e.heroes,(e=>((0,n.Wz)(),(0,n.Az)(c,{cols:"12",md:"3"},{default:(0,n.Ql)((()=>[(0,n.K2)(l,{hero:e},null,8,["hero"])])),_:2},1024)))),256))])),_:1})])),_:1})}const k={class:"ma-1"},y={key:0};function S(e,t,a,r,i,l){const c=(0,n.E1)("v-chip"),s=(0,n.E1)("v-card-title"),u=(0,n.E1)("v-divider"),d=(0,n.E1)("v-text-field"),m=(0,n.E1)("v-form"),v=(0,n.E1)("v-card-subtitle"),h=(0,n.E1)("status-list"),p=(0,n.E1)("v-card");return(0,n.Wz)(),(0,n.Az)(p,{color:l.color},{default:(0,n.Ql)((()=>[(0,n.K2)(s,{class:"d-flex flex-wrap"},{default:(0,n.Ql)((()=>[(0,n.QD)("span",k,(0,o.WA)(a.hero.name),1),(0,n.K2)(c,{class:"ma-1","prepend-icon":"mdi-heart-outline",variant:"outlined",color:"pink"},{default:(0,n.Ql)((()=>[(0,n.mY)((0,o.WA)(a.hero.currentHp)+" / "+(0,o.WA)(a.hero.hp),1)])),_:1}),(0,n.K2)(c,{class:"ma-1","prepend-icon":"mdi-dice-multiple-outline",variant:"outlined",color:"blue"},{default:(0,n.Ql)((()=>[(0,n.mY)((0,o.WA)(a.hero.initiative),1)])),_:1}),(0,n.K2)(c,{class:"ma-1","prepend-icon":"mdi-shield-outline",variant:"outlined",color:"deep-orange"},{default:(0,n.Ql)((()=>[(0,n.mY)((0,o.WA)(a.hero.ac),1)])),_:1})])),_:1}),!0===e.isStarted?((0,n.Wz)(),(0,n.An)("div",y,[(0,n.K2)(u,{class:"mx-4 mb-1"}),(0,n.K2)(v,null,{default:(0,n.Ql)((()=>[(0,n.K2)(m,{ref:"hpBar"},{default:(0,n.Ql)((()=>[(0,n.K2)(d,{modelValue:i.newHp,"onUpdate:modelValue":t[0]||(t[0]=e=>i.newHp=e),modelModifiers:{number:!0},rules:i.numberRules,variant:"underlined","hide-details":"","append-inner-icon":"mdi-plus","prepend-inner-icon":"mdi-minus","onClick:appendInner":t[1]||(t[1]=e=>l.checkHpBar("+")),"onClick:prependInner":t[2]||(t[2]=e=>l.checkHpBar("-"))},null,8,["modelValue","rules"])])),_:1},512)])),_:1}),(0,n.K2)(h,{onChangeStatus:l.changeStatus,hero:a.hero,active:!0},null,8,["onChangeStatus","hero"]),(0,n.K2)(u,{class:"mx-4 mb-1"}),(0,n.K2)(h,{onChangeStatus:l.changeStatus,hero:a.hero,active:!1},null,8,["onChangeStatus","hero"])])):(0,n.g1)("",!0)])),_:1},8,["color"])}function _(e,t,a,r,o,i){const l=(0,n.E1)("status-hero"),c=(0,n.E1)("v-card-text");return(0,n.Wz)(),(0,n.Az)(c,{class:"d-flex flex-wrap"},{default:(0,n.Ql)((()=>[a.active?((0,n.Wz)(!0),(0,n.An)(n.ae,{key:0},(0,n.mi)(i.activeStatuses,(e=>((0,n.Wz)(),(0,n.Az)(l,{status:e,active:a.active,onChangeStatus:i.changeStatus},null,8,["status","active","onChangeStatus"])))),256)):((0,n.Wz)(!0),(0,n.An)(n.ae,{key:1},(0,n.mi)(i.unactiveStatuses,(e=>((0,n.Wz)(),(0,n.Az)(l,{status:e,active:a.active,onChangeStatus:i.changeStatus},null,8,["status","active","onChangeStatus"])))),256))])),_:1})}function K(e,t,a,r,i,l){const c=(0,n.E1)("v-btn");return(0,n.Wz)(),(0,n.Az)(c,{rounded:"xl",class:"ma-1",size:"x-small",color:l.setColor,onClick:t[0]||(t[0]=e=>l.changeStatus())},{default:(0,n.Ql)((()=>[(0,n.mY)((0,o.WA)(a.status.name),1)])),_:1},8,["color"])}var E={name:"StatusHero",props:{status:{type:Object,required:!0},active:{type:Boolean}},methods:{changeStatus(){this.$emit("changeStatus",this.status.name,this.active)}},computed:{setColor(){return this.active?this.status.color:"grey"}}};const A=(0,u.c)(E,[["render",K]]);var Q=A,T={name:"StatusList",props:{hero:{type:Object,required:!0},active:{type:Boolean}},components:{StatusHero:Q},data(){return{statuses:[]}},methods:{changeStatus(e,t){this.$emit("changeStatus",e,t)}},computed:{...(0,c.gV)({getUnactiveStatuses:"heroes/getStatusHeroByActive",getActiveStatuses:"heroes/getStatusHeroByActive"}),unactiveStatuses(){return this.getUnactiveStatuses(this.hero.id,!1)},activeStatuses(){return this.getUnactiveStatuses(this.hero.id,!0)}}};const I=(0,u.c)(T,[["render",_]]);var w=I,W={name:"Hero",components:{StatusList:w},props:{hero:{type:Object,required:!0}},data(){return{newHp:void 0,numberRules:[e=>e>0||"Введите число > 0"]}},methods:{...(0,c.ae)({changeHp:"heroes/changeHp"}),...(0,c.sR)({setStatus:"heroes/setStatus"}),changeStatus(e,t){this.setStatus({id:this.hero.id,name:e,active:t})},async checkHpBar(e){const{valid:t}=await this.$refs.hpBar.validate();t&&(this.changeHp({sign:e,newHp:this.newHp,id:this.hero.id}),this.newHp=void 0)}},computed:{...(0,c.ys)({heroID:e=>e.battle.turnHeroID,isStarted:e=>e.battle.start}),color(){return this.heroID===this.hero.id?"green-lighten-4":this.hero.currentHp<1?"deep-orange-lighten-4":"blue-grey-lighten-5"}}};const z=(0,u.c)(W,[["render",S]]);var C=z,x={name:"HeroList",components:{Hero:C},computed:{...(0,c.gV)({heroes:"heroes/getHeroes"})}};const B=(0,u.c)(x,[["render",H]]);var D=B,R={name:"App",components:{BattleStatus:b,AddHero:m,HeroList:D}};const V=(0,u.c)(R,[["render",i]]);var Y=V,N=a(56);(0,N.s)("/dndbattletracker/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});const O={state:()=>({round:0,turn:0,timeElapsed:{min:0,sec:0},start:!1,heroesCount:0,countTurnInRound:0,heroesNames:[],heroesID:[],turnHeroName:"",turnHeroID:void 0}),getters:{getTime(e){return e.timeElapsed},getRound(e){return e.round}},mutations:{setStart(e,t){e.start=t},setCountTurnInRound(e,t){e.countTurnInRound=t},setRound(e,t){e.round=t},setTurn(e,t){e.turn=t},setTime(e,t){e.timeElapsed=t},setHeroesNames(e,t){e.heroesNames=t},setHeroesID(e,t){e.heroesID=t},setTurnHeroName(e,t){e.turnHeroName=""===t?"":e.heroesNames[t]},setTurnHeroID(e,t){e.turnHeroID=void 0===t?void 0:e.heroesID[t]}},actions:{startBattle({commit:e,rootGetters:t,dispatch:a}){0!==t["heroes/getCountHeroes"]&&(e("setStart",!0),e("setCountTurnInRound",t["heroes/getCountHeroes"]),e("setHeroesNames",t["heroes/getHeroesNames"]),e("setHeroesID",t["heroes/getHeroesID"]),a("round"))},round({commit:e,state:t,dispatch:a}){e("setRound",t.round+1),a("turn"),a("checkTime")},turn({commit:e,state:t,dispatch:a}){e("setTurnHeroName",t.turn),e("setTurnHeroID",t.turn),e("setTurn",t.turn+1),t.turn>t.countTurnInRound&&(e("setTurn",0),a("round"))},checkTime({commit:e,getters:t}){1===t.getRound?e("setTime",{min:0,sec:0}):54===t.getTime.sec?e("setTime",{min:t.getTime.min+1,sec:0}):e("setTime",{min:t.getTime.min,sec:t.getTime.sec+=6})},endBattle({commit:e}){e("setStart",!1),e("setCountTurnInRound",0),e("setRound",0),e("setTurn",0),e("setTime",""),e("setTurnHeroName",""),e("setTurnHeroID",void 0)}},namespaced:!0};a(3248);const j={state:()=>({heroes:[],heroesTest:[{id:0,name:"Lev",initiative:14,hp:22,ac:13,currentHp:22,status:[{name:"Умер",color:"black",active:!0},{name:"Бессознательный",color:"red",active:!1},{name:"Испуганный",color:"purple",active:!1},{name:"Истощенный",color:"deep-purple",active:!1},{name:"Окаменевший",color:"pink",active:!1},{name:"Опутанный",color:"indigo",active:!0},{name:"Ослепленный",color:"blue",active:!1},{name:"Отравленный",color:"light-blue",active:!1},{name:"Очарованный",color:"cyan",active:!1},{name:"Ошеломленный",color:"teal",active:!1},{name:"Парализованный",color:"green",active:!1},{name:"Сбитый с ног",color:"light-green",active:!1},{name:"Схваченный",color:"lime",active:!1}]},{id:1,name:"July",initiative:8,hp:20,ac:12,currentHp:20,status:[{name:"Умер",color:"black",active:!1},{name:"Бессознательный",color:"red",active:!1},{name:"Испуганный",color:"purple",active:!1},{name:"Истощенный",color:"deep-purple",active:!1},{name:"Окаменевший",color:"pink",active:!1},{name:"Опутанный",color:"indigo",active:!1},{name:"Ослепленный",color:"blue",active:!1},{name:"Отравленный",color:"light-blue",active:!1},{name:"Очарованный",color:"cyan",active:!1},{name:"Ошеломленный",color:"teal",active:!1},{name:"Парализованный",color:"green",active:!1},{name:"Сбитый с ног",color:"light-green",active:!1},{name:"Схваченный",color:"lime",active:!1}]},{id:2,name:"Oleg",initiative:5,hp:16,ac:18,currentHp:16,status:[{name:"Умер",color:"black",active:!1},{name:"Бессознательный",color:"red",active:!1},{name:"Испуганный",color:"purple",active:!1},{name:"Истощенный",color:"deep-purple",active:!1},{name:"Окаменевший",color:"pink",active:!1},{name:"Опутанный",color:"indigo",active:!1},{name:"Ослепленный",color:"blue",active:!1},{name:"Отравленный",color:"light-blue",active:!1},{name:"Очарованный",color:"cyan",active:!1},{name:"Ошеломленный",color:"teal",active:!1},{name:"Парализованный",color:"green",active:!1},{name:"Сбитый с ног",color:"light-green",active:!1},{name:"Схваченный",color:"lime",active:!1}]},{id:3,name:"Guard",initiative:6,hp:18,ac:16,currentHp:18,status:[{name:"Умер",color:"black",active:!1},{name:"Бессознательный",color:"red",active:!1},{name:"Испуганный",color:"purple",active:!1},{name:"Истощенный",color:"deep-purple",active:!1},{name:"Окаменевший",color:"pink",active:!1},{name:"Опутанный",color:"indigo",active:!1},{name:"Ослепленный",color:"blue",active:!1},{name:"Отравленный",color:"light-blue",active:!1},{name:"Очарованный",color:"cyan",active:!1},{name:"Ошеломленный",color:"teal",active:!1},{name:"Парализованный",color:"green",active:!1},{name:"Сбитый с ног",color:"light-green",active:!1},{name:"Схваченный",color:"lime",active:!1}]},{id:4,name:"Guard",initiative:18,hp:18,ac:16,currentHp:18,status:[{name:"Умер",color:"black",active:!1},{name:"Бессознательный",color:"red",active:!1},{name:"Испуганный",color:"purple",active:!1},{name:"Истощенный",color:"deep-purple",active:!1},{name:"Окаменевший",color:"pink",active:!1},{name:"Опутанный",color:"indigo",active:!1},{name:"Ослепленный",color:"blue",active:!1},{name:"Отравленный",color:"light-blue",active:!1},{name:"Очарованный",color:"cyan",active:!1},{name:"Ошеломленный",color:"teal",active:!1},{name:"Парализованный",color:"green",active:!1},{name:"Сбитый с ног",color:"light-green",active:!1},{name:"Схваченный",color:"lime",active:!1}]}]}),getters:{getHeroes(e){return e.heroes},getHeroByID:e=>t=>e.heroes.find((e=>e.id===t)),sortedByInitiative(e,t){return t.getHeroes.sort(((e,t)=>t.initiative-e.initiative))},getCountHeroes(e){return e.heroes.length},getHeroesNames(e,t){return t.sortedByInitiative.map((e=>e.name))},getHeroesID(e,t){return t.sortedByInitiative.map((e=>e.id))},getStatusHeroByActive:(e,t)=>(e,a)=>{let r=t.getHeroByID(e);return r.status.filter((e=>e.active===a))}},mutations:{saveHero(e,t){e.heroes.push(t)},setHpByID(e,t){let a=e.heroes.find((e=>e.id===t.id));"+"===t.sign?a.currentHp+=t.newHp:a.currentHp-=t.newHp},setStatus(e,t){let a=e.heroes.find((e=>e.id===t.id));a.status.find((e=>e.name===t.name)).active=!t.active}},actions:{addHeroID({getters:e,commit:t},a){a.id=e.getCountHeroes,t("saveHero",a)},changeHp({commit:e},t){e("setHpByID",t)}},namespaced:!0};var q=(0,c.eC)({modules:{battle:O,heroes:j}}),U=a(7820),M=a(9010),L=a(6332),F=a(3373);a(8985);const G=(0,U.W_)({components:M,directives:L,icons:{defaultSet:"mdi",aliases:F._,sets:{mdi:F.H}}});(0,r.W0)(Y).use(G).use(q).mount("#app")}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,r,n,o){if(!r){var i=1/0;for(u=0;u<e.length;u++){r=e[u][0],n=e[u][1],o=e[u][2];for(var l=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(a.O).every((function(e){return a.O[e](r[c])}))?r.splice(c--,1):(l=!1,o<i&&(i=o));if(l){e.splice(u--,1);var s=n();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,n,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,i=r[0],l=r[1],c=r[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(c)var u=c(a)}for(t&&t(r);s<i.length;s++)o=i[s],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},r=self["webpackChunkdndbattletracker"]=self["webpackChunkdndbattletracker"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[999],(function(){return a(6571)}));r=a.O(r)})();
//# sourceMappingURL=app.2176b653.js.map