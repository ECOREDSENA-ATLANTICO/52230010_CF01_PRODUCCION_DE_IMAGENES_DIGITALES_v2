(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["actividad"],{"159b":function(e,t,a){var r=a("da84"),o=a("fdbc"),s=a("17c2"),n=a("9112");for(var i in o){var c=r[i],u=c&&c.prototype;if(u&&u.forEach!==s)try{n(u,"forEach",s)}catch(d){u.forEach=s}}},"17c2":function(e,t,a){"use strict";var r=a("b727").forEach,o=a("a640"),s=o("forEach");e.exports=s?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"225c":function(e,t,a){e.exports=a.p+"img/img02.7af0c830.png"},"2bbe":function(e,t,a){e.exports=a.p+"img/img05.78f23f5f.png"},"2cc0":function(e,t,a){},"32bd":function(e,t,a){"use strict";a("4afc")},3799:function(e,t,a){e.exports=a.p+"img/img01.4804ada6.png"},4298:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"curso-main-container pb-3"},[a("BannerInterno",{attrs:{icono:"far fa-question-circle",titulo:"Actividad didáctica"}}),a("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[a("div",{attrs:{id:"Actividad"}},[a("Actividad",{attrs:{cuestionario:e.cuestionario}})],1)])],1)},o=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tarjeta--blanca"},[a("div",{staticClass:"row align-items-center mb-4"},[e._m(0),a("div",{staticClass:"col "},[a("h2",{staticClass:"titulo-tercero mb-0"},[e._v(" "+e._s(e.cuestionario.titulo)+" ")]),a("p",{staticClass:"mb-0",domProps:{innerHTML:e._s(e.cuestionario.introduccion)}})])]),a("div",{staticClass:"tarjeta tarjeta--lightest-gray p-4 p-md-5"},[e.respuestas.length===e.preguntas.length?a("ActividadResultados",{attrs:{respuestas:e.respuestas}}):a("ActividadPregunta",{attrs:{pregunta:e.preguntaSelected},on:{respuestaSelected:e.onRrespuestaSelected}})],1),a("ActividadBarraAvance",{staticClass:"mx-4 mx-md-5",attrs:{"pregunta-index":e.preguntaSelectedIdx,"preguntas-count":e.preguntas.length,"respuestas-length":e.respuestas.length,"continuar-disabled":e.continuarDisabled},on:{continuar:e.onContinuar,reiniciar:e.onReiniciar}})],1)},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-auto"},[r("img",{attrs:{src:a("8da0"),alt:""}})])}],i=a("5530"),c=(a("d81d"),a("c740"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",{staticClass:"mb-4 pb-4",domProps:{innerHTML:e._s(e.pregunta.texto)}}),a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"d-none d-md-block col-5"},[a("img",{attrs:{src:e.pregunta.imagen,alt:""}})]),a("div",{staticClass:"col"},e._l(e.opcionesComputed,(function(t,r){return a("div",{key:t.id,staticClass:"tarjeta tarjeta--azul tarjeta-respuesta p-4",class:{"mb-3":r!==e.opcionesComputed.length-1,"tarjeta-respuesta--correcta":t.correcta,"tarjeta-respuesta--incorrecta":t.incorrecta,"tarjeta-respuesta--disabled":t.disabled},on:{click:function(a){return e.onRespuestaSelected(t)}}},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-auto"},[a("div",{staticClass:"tarjeta-respuesta__icon",class:[e.respuestaSelected.id===t.id?t.esCorrecta?"tarjeta-respuesta__icon--correcto":"tarjeta-respuesta__icon--incorrecto":""]})]),a("div",{staticClass:"col",domProps:{innerHTML:e._s(t.texto)}})])])})),0)]),e.respuestaSelected.id?[a("hr"),e.respuestaSelected.esCorrecta?a("div",{staticClass:"pt-2"},[a("span",{staticClass:"text-success h3 ma-0"},[e._v("¡Correcto!")]),e._v(" "+e._s(e.pregunta.mensaje_correcto)+" ")]):a("div",{staticClass:"pt-2"},[a("span",{staticClass:"text-danger h3 ma-0"},[e._v("¡Incorrecto!")]),e._v(" "+e._s(e.pregunta.mensaje_incorrecto)+" ")])]:e._e()],2)}),u=[],d={name:"ActividadPregunta",props:{pregunta:{type:Object,required:!0}},data:function(){return{respuestaSelected:{}}},computed:{opcionesComputed:function(){if(!this.pregunta.opciones.length)return[];var e=this.respuestaSelected.id;return this.pregunta.opciones.map((function(t){return Object(i["a"])(Object(i["a"])({},t),{},{correcta:e===t.id&&t.esCorrecta,incorrecta:e===t.id&&!t.esCorrecta,disabled:!!e})}))}},watch:{pregunta:function(){this.respuestaSelected={}}},methods:{onRespuestaSelected:function(e){this.respuestaSelected=e,this.$emit("respuestaSelected",e.esCorrecta)}}},l=d,p=(a("32bd"),a("2877")),f=Object(p["a"])(l,c,u,!1,null,"0d0c9f9a",null),m=f.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tarjeta-avance"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"d-none d-md-block col"},[a("div",{staticClass:"tarjeta-avance__barra-container ms-4"},[a("div",{staticClass:"tarjeta-avance__barra",style:{width:e.avanceWidth}})])]),a("div",{staticClass:"col col-md-auto text-center"},[e._v(" Pregunta "+e._s(e.preguntaIndex+1)+" de "+e._s(e.preguntasCount)+" ")]),a("div",{staticClass:"col-auto"},[e.respuestasLength===e.preguntasCount?a("button",{staticClass:"boton btn-lg boton--b py-3 px-5",on:{click:function(t){return e.$emit("reiniciar")}}},[a("span",[e._v("Reiniciar")])]):a("button",{staticClass:"boton btn-lg boton--b py-3 px-4",class:{"boton--disabled":e.continuarDisabled},on:{click:function(t){return e.$emit("continuar")}}},[a("span",[e._v("Continuar")]),a("i",{staticClass:"fas fa-arrow-right"})])])])])},g=[],v=(a("a9e3"),{name:"ActividadBarraAvance",props:{preguntaIndex:{type:Number,required:!0},preguntasCount:{type:Number,required:!0},continuarDisabled:{type:Boolean,default:!1},respuestasLength:{type:Number,default:0}},computed:{avanceWidth:function(){return"".concat((this.preguntaIndex+1)/this.preguntasCount*100,"%")}}}),C=v,h=(a("a631"),Object(p["a"])(C,b,g,!1,null,"7a0121ad",null)),x=h.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row align-items-center justify-content-around"},[r("div",{staticClass:"col-5"},[(e.aprobado,r("img",{attrs:{src:a("a46c"),alt:""}}))]),r("div",{staticClass:"col-4"},[r("div",{staticClass:"d-flex align-items-center flex-column"},[r("div",{staticClass:"resultados__icono mb-4",class:["resultados__icono--"+(e.aprobado?"correcto":"incorrecto")]}),e.aprobado?[r("h3",[e._v("¡BUEN TRABAJO!")]),r("p",{staticClass:"mb-0 text-center"},[e._v(" Se evidencia un buen manejo de los conceptos estudiados en esta unidad. ")])]:[r("h3",[e._v("VUELVE A INTENTARLO")]),r("p",{staticClass:"mb-0 text-center"},[e._v(" Se recomienda revisar el contenido de la unidad para clarificar conceptos. ")])],r("hr",{staticClass:"w-100"}),r("p",{staticClass:"mb-0"},[e._v("Aciertos: "+e._s(e.rtas.correctas)+" / "+e._s(e.rtas.total))])],2)])])},_=[],y=(a("159b"),{name:"ActividadResultados",props:{respuestas:{type:Array,required:!0}},computed:{rtas:function(){var e={correctas:0,incorrectas:0,total:this.respuestas.length,porcentaje:0};return this.respuestas.forEach((function(t){t.esCorrecta?e.correctas++:e.incorrectas++})),e.porcentaje=e.correctas/e.total*100,e},aprobado:function(){return this.rtas.porcentaje>=70}}}),A=y,I=(a("aeef"),Object(p["a"])(A,j,_,!1,null,"360ec089",null)),O=I.exports,E={name:"Actividad",components:{ActividadPregunta:m,ActividadBarraAvance:x,ActividadResultados:O},props:{cuestionario:{type:Object,required:!0},mezclarRespuestas:{type:Boolean,default:!1}},data:function(){return{intentos:0,preguntaSelectedIdx:0,respuestaActual:{},respuestas:[],continuarDisabled:!0}},computed:{preguntas:function(){var e=this,t=this.cuestionario,a=t.preguntas,r=t.barajarPreguntas;if(!a)return[];var o=r?this.shuffle(a):a;return o.map((function(t){return Object(i["a"])(Object(i["a"])({},t),{},{opciones:t.barajarRespuestas?e.shuffle(t.opciones):t.opciones,intentos:e.intentos})}))},preguntaSelected:function(){return this.preguntas[this.preguntaSelectedIdx]}},methods:{shuffle:function(e){var t,a=e.length;while(a>0){t=Math.floor(Math.random()*a),a--;var r=[e[t],e[a]];e[a]=r[0],e[t]=r[1]}return e},onRrespuestaSelected:function(e){this.continuarDisabled=!1,this.respuestaActual={id:this.preguntaSelected.id,esCorrecta:e}},onContinuar:function(){var e=this;if(this.continuarDisabled=!0,this.respuestaActual.id){var t=this.respuestas.findIndex((function(t){return t.id===e.preguntaSelected.id}));-1===t?this.respuestas.push(this.respuestaActual):this.respuestas[t]=this.respuestaActual}this.preguntaSelectedIdx<this.preguntas.length-1&&(this.preguntaSelectedIdx+=1)},onReiniciar:function(){this.preguntaSelectedIdx=0,this.respuestas=[],this.respuestaActual={},this.intentos+=1}}},S=E,w=(a("f212"),Object(p["a"])(S,s,n,!1,null,"1f7092aa",null)),R=w.exports,N={name:"ActividadDidactica",components:{Actividad:R},data:function(){return{cuestionario:{tema:"Imágenes que Comunican estrategias visuales en campañas publicitarias.",titulo:"Cuestionario",introduccion:"Lea cada enunciado referente a los temas desarrollados en el componente formativo y elija una opción según corresponda",barajarPreguntas:!1,preguntas:[{id:1,texto:"¿Qué es un logotipo icónico o simbólico?",imagen:a("3799"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Un logotipo basado únicamente en texto.",esCorrecta:!1},{id:"b",texto:"Un símbolo o ícono que representa una marca.",esCorrecta:!0},{id:"c",texto:"Un logotipo que combina texto e imagen.",esCorrecta:!1},{id:"d",texto:"Un logotipo en forma de emblema.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:2,texto:"¿Cuál es una característica principal de un logotipo tipográfico?",imagen:a("225c"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Utiliza únicamente íconos.",esCorrecta:!1},{id:"b",texto:"Combina símbolos y texto.",esCorrecta:!1},{id:"c",texto:"Se basa exclusivamente en tipografía.",esCorrecta:!0},{id:"d",texto:"Es ilustrativo y detallado.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:3,texto:"¿Qué tipo de logotipo se enfoca en representar la marca de manera detallada y artística?",imagen:a("e621"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Ilustrativo.",esCorrecta:!0},{id:"b",texto:"Icónico/Simbólico.",esCorrecta:!1},{id:"c",texto:"Tipográfico.",esCorrecta:!1},{id:"d",texto:"Gráficos/Descriptivos.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:4,texto:"¿Qué rol juega la psicología del color en el diseño de un logotipo?",imagen:a("9abb"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Define las proporciones del logotipo.",esCorrecta:!1},{id:"b",texto:"Determina el tipo de fuente a usar.",esCorrecta:!1},{id:"c",texto:"Influye en la percepción y emociones del espectador",esCorrecta:!0},{id:"d",texto:"No tiene ningún rol significativo.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:5,texto:"¿Qué es un <i>briefing</i> en el contexto del diseño de un logo?",imagen:a("2bbe"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Un análisis del mercado.",esCorrecta:!1},{id:"b",texto:"Un documento que recoge los requisitos y objetivos del diseño.",esCorrecta:!0},{id:"c",texto:"Un resumen visual del logotipo.",esCorrecta:!1},{id:"d",texto:"Una propuesta de colores para el logotipo",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:6,texto:"¿Cuál es el primer paso en la representación de una idea creativa?",imagen:a("7f08"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Seleccionar los colores del logotipo.",esCorrecta:!1},{id:"b",texto:"Crear un boceto inicial.",esCorrecta:!0},{id:"c",texto:"Definir los valores de la marca.",esCorrecta:!1},{id:"d",texto:"Realizar un análisis de mercado.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:7,texto:"¿Qué es una idea creativa?",imagen:a("3799"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Un concepto original.",esCorrecta:!0},{id:"b",texto:"Una técnica de <i>marketing</i>.",esCorrecta:!1},{id:"c",texto:"Un medio publicitario.",esCorrecta:!1},{id:"d",texto:"Un tipo de campaña.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:8,texto:"¿Cuál es el objetivo de la estrategia de contenido?",imagen:a("225c"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Vender productos.",esCorrecta:!1},{id:"b",texto:"Atraer y retener audiencia.",esCorrecta:!0},{id:"c",texto:"Mejorar la imagen de marca.",esCorrecta:!1},{id:"d",texto:"Aumentar la producción.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:9,texto:"¿Qué implica la representación de una idea creativa?",imagen:a("e621"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Crear una historia.",esCorrecta:!1},{id:"b",texto:"Visualizar el mensaje.",esCorrecta:!0},{id:"c",texto:"Definir el público objetivo.",esCorrecta:!1},{id:"d",texto:"Elaborar el presupuesto.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:10,texto:"¿Cuál es el objetivo principal de una campaña publicitaria?",imagen:a("9abb"),barajarRespuestas:!1,opciones:[{id:"a",texto:"Aumentar la producción",esCorrecta:!1},{id:"b",texto:"Promover un producto o servicio.",esCorrecta:!0},{id:"c",texto:"Generar contenido.",esCorrecta:!1},{id:"d",texto:"Establecer relaciones públicas",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."}],mensaje_final_aprobado:"¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.",mensaje_final_reprobado:"No ha superado la actividad. Le recomendamos volver a revisar el componenteformativo e intentar nuevamente la actividad didáctica"}}},computed:{},methods:{}},L=N,P=Object(p["a"])(L,r,o,!1,null,null,null);t["default"]=P.exports},"4afc":function(e,t,a){},5530:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a("b64b"),a("a4d3"),a("4de4"),a("e439"),a("159b"),a("dbb4");function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},5585:function(e,t,a){},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,a){var r=a("1d80"),o=a("5899"),s="["+o+"]",n=RegExp("^"+s+s+"*"),i=RegExp(s+s+"*$"),c=function(e){return function(t){var a=String(r(t));return 1&e&&(a=a.replace(n,"")),2&e&&(a=a.replace(i,"")),a}};e.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(e,t,a){var r=a("861d"),o=a("d2bb");e.exports=function(e,t,a){var s,n;return o&&"function"==typeof(s=t.constructor)&&s!==a&&r(n=s.prototype)&&n!==a.prototype&&o(e,n),e}},"7f08":function(e,t,a){e.exports=a.p+"img/img06.ee819aad.png"},"8da0":function(e,t,a){e.exports=a.p+"img/icon-actividad.3d896e1e.svg"},"9abb":function(e,t,a){e.exports=a.p+"img/img04.3f049c2d.png"},a46c:function(e,t,a){e.exports=a.p+"img/cuestionario-resultado.a5584db8.svg"},a631:function(e,t,a){"use strict";a("d228")},a640:function(e,t,a){"use strict";var r=a("d039");e.exports=function(e,t){var a=[][e];return!!a&&r((function(){a.call(null,t||function(){throw 1},1)}))}},a9e3:function(e,t,a){"use strict";var r=a("83ab"),o=a("da84"),s=a("94ca"),n=a("6eeb"),i=a("5135"),c=a("c6b6"),u=a("7156"),d=a("c04e"),l=a("d039"),p=a("7c73"),f=a("241c").f,m=a("06cf").f,b=a("9bf2").f,g=a("58a8").trim,v="Number",C=o[v],h=C.prototype,x=c(p(h))==v,j=function(e){var t,a,r,o,s,n,i,c,u=d(e,!1);if("string"==typeof u&&u.length>2)if(u=g(u),t=u.charCodeAt(0),43===t||45===t){if(a=u.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+u}for(s=u.slice(2),n=s.length,i=0;i<n;i++)if(c=s.charCodeAt(i),c<48||c>o)return NaN;return parseInt(s,r)}return+u};if(s(v,!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var _,y=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof y&&(x?l((function(){h.valueOf.call(a)})):c(a)!=v)?u(new C(j(t)),a,y):j(t)},A=r?f(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),I=0;A.length>I;I++)i(C,_=A[I])&&!i(y,_)&&b(y,_,m(C,_));y.prototype=h,h.constructor=y,n(o,v,y)}},aeef:function(e,t,a){"use strict";a("5585")},b64b:function(e,t,a){var r=a("23e7"),o=a("7b0b"),s=a("df75"),n=a("d039"),i=n((function(){s(1)}));r({target:"Object",stat:!0,forced:i},{keys:function(e){return s(o(e))}})},c740:function(e,t,a){"use strict";var r=a("23e7"),o=a("b727").findIndex,s=a("44d2"),n="findIndex",i=!0;n in[]&&Array(1)[n]((function(){i=!1})),r({target:"Array",proto:!0,forced:i},{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),s(n)},d228:function(e,t,a){},d81d:function(e,t,a){"use strict";var r=a("23e7"),o=a("b727").map,s=a("1dde"),n=s("map");r({target:"Array",proto:!0,forced:!n},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(e,t,a){var r=a("23e7"),o=a("83ab"),s=a("56ef"),n=a("fc6a"),i=a("06cf"),c=a("8418");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(e){var t,a,r=n(e),o=i.f,u=s(r),d={},l=0;while(u.length>l)a=o(r,t=u[l++]),void 0!==a&&c(d,t,a);return d}})},e439:function(e,t,a){var r=a("23e7"),o=a("d039"),s=a("fc6a"),n=a("06cf").f,i=a("83ab"),c=o((function(){n(1)})),u=!i||c;r({target:"Object",stat:!0,forced:u,sham:!i},{getOwnPropertyDescriptor:function(e,t){return n(s(e),t)}})},e621:function(e,t,a){e.exports=a.p+"img/img03.67b799e6.png"},f212:function(e,t,a){"use strict";a("2cc0")}}]);
//# sourceMappingURL=actividad.b9afd2e9.js.map