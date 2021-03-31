(this["webpackJsonpnotebook-app"]=this["webpackJsonpnotebook-app"]||[]).push([[0],{208:function(e,t,n){},273:function(e,t,n){"use strict";n.r(t);var o=n(316),i=n(298),c=n(70),a=n(0),r=n(49),A=n.n(r),s=n(7),l=n(4),h=n(17),d=n(324),j=n(112),b=n(296),g=n(297),x=n(299),m=n(300),u=n(325),p=n(320),O=n(285),I=n(305),B=n(303),f=n(304),Y=n(306),C=n(102),k=n(183),v=n(66),w=n(1),F=function(e){var t=Object(k.c)().toggleColorMode,n=Object(k.d)("dark","light"),o=Object(k.d)(v.d,v.f);return Object(w.jsx)(O.a,Object(C.a)({size:"md",fontSize:"lg",variant:"ghost",color:"current",marginLeft:"2",onClick:t,icon:Object(w.jsx)(o,{}),"aria-label":"Switch to ".concat(n," mode")},e))},G=n(317),y=n(64),Q=n(292),J=n(293),M=n(294),D=n(295),E=n(177),S=n(180),L=n(179),R=function(e){var t,n,o=e.isOpen,i=e.onClose,c=e.selectedNote,a=e.handleNoteCreate,r=e.handleNoteUpdate,A=Object(L.a)({mode:"onChange"}),s=A.register,l=A.handleSubmit,h=A.formState,d=A.errors;return Object(w.jsxs)(G.a,{isOpen:o,onClose:i,size:"lg",isCentered:!0,motionPreset:"slideInBottom",children:[Object(w.jsx)(G.g,{}),Object(w.jsx)(G.d,{children:Object(w.jsxs)("form",{onSubmit:l((function(e){var t={id:"",title:e.title,body:e.body};a?(t.id=Object(S.a)(),a&&a(t)):(t.id=c?c.id:"",r&&r(t)),i()})),children:[Object(w.jsxs)(G.f,{children:[c?"Edit":"Create"," a Note"]}),Object(w.jsx)(G.c,{}),Object(w.jsxs)(G.b,{pb:6,children:[Object(w.jsxs)(y.a,{isInvalid:!!(null===d||void 0===d?void 0:d.title),isRequired:!0,children:[Object(w.jsx)(Q.a,{children:"Title"}),Object(w.jsx)(J.a,{name:"title",placeholder:"Title",defaultValue:null===c||void 0===c?void 0:c.title,ref:s({validate:function(e){return!!e||"Title is required"}})}),Object(w.jsx)(M.a,{children:!!(null===d||void 0===d?void 0:d.title)&&(null===d||void 0===d||null===(t=d.title)||void 0===t?void 0:t.message)})]}),Object(w.jsxs)(y.a,{size:"lg",mt:4,isInvalid:!!(null===d||void 0===d?void 0:d.body),isRequired:!0,children:[Object(w.jsx)(Q.a,{children:"Body"}),Object(w.jsx)(D.a,{name:"body",placeholder:"Body",size:"md",borderRadius:"5px",defaultValue:null===c||void 0===c?void 0:c.body,ref:s({validate:function(e){return!!e||"Body is required"}})}),Object(w.jsx)(M.a,{children:!!(null===d||void 0===d?void 0:d.body)&&(null===d||void 0===d||null===(n=d.body)||void 0===n?void 0:n.message)})]})]}),Object(w.jsxs)(G.e,{children:[Object(w.jsx)(E.a,{type:"submit",colorScheme:"blue",isLoading:h.isSubmitting,mr:3,children:"Save"}),Object(w.jsx)(E.a,{onClick:i,children:"Cancel"})]})]})})]})},T=n(182),_=function(e){var t=e.handleNoteCreate,n=Object(b.a)(),o=n.isOpen,a=n.onOpen,r=n.onClose;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(g.a,{mb:"30px",align:"center",children:[Object(w.jsx)(i.a,{p:"2",as:c.b,to:"/",children:Object(w.jsx)(T.a.div,{whileHover:{scale:1.1},children:Object(w.jsx)(x.a,{as:"h1",size:"xl",bgGradient:"linear(to-l, #7928CA,#FF0080)",bgClip:"text",_focus:{boxShadow:"none",outline:"none"},_hover:{textDecoration:"none",bgGradient:"linear(to-r, red.500, yellow.500)"},children:"Notebook App"})})}),Object(w.jsx)(m.a,{}),Object(w.jsx)(i.a,{children:Object(w.jsxs)(u.a,{children:[Object(w.jsxs)(p.a,{children:[Object(w.jsx)(p.b,{as:O.a,"aria-label":"Options",icon:Object(w.jsx)(B.a,{}),transition:"all 0.2s",size:"md",variant:"outline",_hover:{bg:"gray.400"},_focus:{boxShadow:"outline"}}),Object(w.jsxs)(p.e,{fontSize:"sm",zIndex:5,children:[Object(w.jsxs)(p.d,{icon:Object(w.jsx)(f.a,{}),onClick:a,children:[" ",Object(w.jsx)(I.a,{textShadow:"1px 1px #9c1786",children:"New Note"})]}),Object(w.jsx)(p.c,{}),Object(w.jsxs)(p.d,{icon:Object(w.jsx)(Y.a,{}),as:c.b,to:"/projects",children:[" ",Object(w.jsx)(I.a,{textShadow:"1px 1px #9c1786",children:"Open Source Repositories"})]})]})]}),Object(w.jsx)(F,{justifySelf:"flex-end"})]})})]}),Object(w.jsx)(R,{isOpen:o,onClose:r,handleNoteCreate:t})]})},N=n(307),z=n(326),H=n(322),U=n(287),W="https://github.com/MA-Ahmad/notebook",P={copyright:"Copyright \xa9 ".concat((new Date).getFullYear()," Muhammad Ahmad. All Rights Reserved."),author:{name:"Muhammad Ahmad",github:"https://github.com/MA-Ahmad",twitter:"https://twitter.com/muhammad_ahmaad",linkedin:"https://linkedin.com/in/muhammad-ahmad20",quora:"https://www.quora.com/profile/Muhammad-Ahmad-66",dev:"https://dev.to/m_ahmad",email:"muhammad.ahmad8043@gmail.com"},repo:{url:W,issuesUrl:"".concat(W,"/issues/new")}};function V(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(x.a,{fontSize:"24px",mb:"15px",className:"yellow-gradient-color",children:"Be the first to know"}),Object(w.jsx)(I.a,{color:"gray.400",mb:"15px",children:"Get notified about the upcoming sessions, news, articles, jobs, and opensource projects."}),Object(w.jsx)("form",{action:"#",children:Object(w.jsxs)(i.a,{position:"relative",children:[Object(w.jsx)(J.a,{type:"email",isRequired:!0,name:"entry.1808449400",px:"25px",bg:"gray.900",height:"50px",rounded:"50px",_placeholder:{color:"gray.600"},placeholder:"Enter your email",_focus:{outline:0},color:"gray.100",borderWidth:0}),Object(w.jsx)(E.a,{type:"submit",height:"50px",color:"gray.100",_hover:{bg:"yellow.400",color:"gray.900"},position:"absolute",top:"0",right:"0",bg:"gray.700",rounded:"50px",px:"25px",children:"Subscribe"})]})})]})}var q=function(e){var t=e.href,n=e.text,o=e.isExternal,i=void 0===o||o;return Object(w.jsx)(N.a,{_focus:{outline:"none",boxShadow:"none"},href:t,target:i?"_blank":"_self",fontWeight:500,color:"gray.500",_hover:{color:"gray.600",textDecoration:"none"},children:n})},X=function(e){var t=e.href,n=e.text;return Object(w.jsx)(c.b,{to:t,children:Object(w.jsx)("a",{children:Object(w.jsx)(N.a,{_focus:{outline:"none",boxShadow:"none"},as:"span",fontWeight:500,color:"gray.500",_hover:{color:"gray.600",textDecoration:"none"},children:n})})})},K={variant:"ghost",size:"lg",isRound:!0},Z=function(e){var t=e.href,n=e.label,o=e.icon,i=e.type,c=e.isExternal,a=void 0===c||c;return Object(w.jsx)(O.a,Object(C.a)({as:N.a,href:t,target:a?"_blank":"_self","aria-label":n,icon:o,colorScheme:i},K))};function $(){return Object(w.jsxs)(z.a,{flexDirection:"column-reverse",gridTemplateColumns:["1fr","1fr","1fr 1fr","1fr 1fr"],borderTopWidth:2,mt:"30px",borderTopColor:"gray.900",pt:"20px",children:[Object(w.jsx)(i.a,{d:["block","block","none","none"],mb:"30px",children:Object(w.jsx)(V,{})}),Object(w.jsxs)(i.a,{children:[Object(w.jsxs)(z.a,{columns:[1,1,2,2],children:[Object(w.jsxs)(u.b,{mb:["10px","10px",0,0],children:[Object(w.jsx)(I.a,{as:"span",children:Object(w.jsx)(q,{href:"mailto:".concat(P.author.email),text:"Contact us"})}),Object(w.jsx)(I.a,{as:"span",children:Object(w.jsx)(q,{href:P.repo.url,text:"Contribute"})}),Object(w.jsx)(I.a,{as:"span",children:Object(w.jsx)(X,{href:"/projects",text:"Open source projects"})})]}),Object(w.jsxs)(u.b,{children:[Object(w.jsx)(I.a,{as:"span",children:Object(w.jsxs)(H.a,{placement:"top",children:[Object(w.jsx)(H.f,{children:Object(w.jsx)(I.a,{as:"span",_focus:{outline:"none",boxShadow:"none"},fontWeight:500,color:"gray.500",cursor:"pointer",_hover:{color:"gray.600",textDecoration:"none"},children:"Social Accounts"})}),Object(w.jsx)(U.a,{children:Object(w.jsxs)(H.e,{children:[Object(w.jsx)(H.b,{}),Object(w.jsx)(H.d,{}),Object(w.jsx)(H.c,{children:Object(w.jsxs)(u.b,{as:"footer",isInline:!0,spacing:[1,2],justifyContent:"center",alignItems:"center",children:[Object(w.jsx)(Z,{href:P.author.github,icon:Object(w.jsx)(v.b,{}),type:"gray",label:"Github Account"}),Object(w.jsx)(Z,{href:P.author.dev,icon:Object(w.jsx)(v.a,{}),type:"gray",label:"Dev Account"}),Object(w.jsx)(Z,{href:P.author.linkedin,icon:Object(w.jsx)(v.c,{}),type:"linkedin",label:"LinkedIn Account"}),Object(w.jsx)(Z,{href:P.author.twitter,icon:Object(w.jsx)(v.g,{}),type:"twitter",label:"Twitter Account"}),Object(w.jsx)(Z,{href:P.author.quora,icon:Object(w.jsx)(v.e,{}),type:"red",label:"Quora Account"})]})})]})})]})}),Object(w.jsx)(I.a,{as:"span",children:Object(w.jsx)(q,{href:"mailto:".concat(P.author.email),text:"Sponsor"})}),Object(w.jsx)(I.a,{as:"span",children:Object(w.jsx)(q,{href:"/#faqs",isExternal:!1,text:"FAQs"})})]})]}),Object(w.jsxs)(I.a,{mt:"20px",color:"gray.500",children:["Made with \ud83e\udde1 by"," ",Object(w.jsx)(N.a,{_focus:{boxShadow:"none",outline:"none"},target:"_blank",href:P.author.github,fontWeight:600,color:"gray.400",bgClip:"text",bgGradient:"linear(to-l, #7928CA,#FF0080)",_hover:{bgGradient:"linear(to-r, red.500, yellow.500)"},children:"Muhammad Ahmad"})," "]})]}),Object(w.jsx)(i.a,{d:["none","none","block","block"],children:Object(w.jsx)(V,{})})]})}var ee=n(288),te=[n.p+"static/media/blog_1.e55bd114.png",n.p+"static/media/blog_2.3712eddc.png",n.p+"static/media/portfolio.d477ed4c.png",n.p+"static/media/image_gallery.b1ca697a.png",n.p+"static/media/notebook_app.f4e4e3bd.png",n.p+"static/media/blog_3.d0737200.png"],ne=[{id:0,title:"Blog App",desc:"A Blog App built by using React, ChakraUI and Formik.",technologies:[{name:"React",color:"green"},{name:"ChakraUi",color:"teal"}],stars:9,githubLink:"https://github.com/MA-Ahmad/reactBlog",liveLink:"https://ma-ahmad.github.io/reactBlog",coverImage:te[0],blurHash:"ULM*T}IV~pxt00%LRjNG9~IVadt6?vxtD%Rj"},{id:1,title:"Blog App + Authentication",desc:"A Blog App built by using React, Rails, ChakraUI and Formik.",technologies:[{name:"React",color:"green"},{name:"Rails",color:"red"},{name:"ChakraUi",color:"teal"}],stars:6,githubLink:"https://github.com/MA-Ahmad/blog-app-react-frontend",liveLink:"https://blog-frontend-react.herokuapp.com/",coverImage:te[1],blurHash:"UQNTzZHr~Wtl00={M{NG0dIokDxaloO?IUnO"},{id:2,title:"Portfolio",desc:"Personal portfolio app to show my skills and experience.",technologies:[{name:"React",color:"green"},{name:"ChakraUi",color:"teal"}],stars:2,githubLink:"https://github.com/MA-Ahmad/portfolio",liveLink:"https://mahmad.me/",coverImage:te[2],blurHash:"U4S~x501-;~pRiNGIURjRjIoM{xbNFR*Rjay"},{id:3,title:"Image Gallery",desc:"This app built by using Tailwind CSS with React and Pixabay API.",technologies:[{name:"React",color:"green"},{name:"Tailwindcss",color:"telegram"}],stars:2,githubLink:"https://github.com/MA-Ahmad/react-image-gallery",liveLink:"",coverImage:te[3],blurHash:"U]OzA2n%W;ayRPn%fkWVx]bHjFj[_NWXofay"},{id:4,title:"Notebook App",desc:"Create notes for your daily important work.",technologies:[{name:"React",color:"green"},{name:"Typescript",color:"blue"},{name:"ChakraUi",color:"teal"}],stars:2,githubLink:"https://github.com/MA-Ahmad/notebook",liveLink:"",coverImage:te[4],blurHash:"U4S~x6WE~WwJ=|VsMybb%NVt8_tP%2RQRknl"},{id:5,title:"Crud Demo App",desc:"A simple react+rails(RR) CRUD app with tailwindcss.",technologies:[{name:"React",color:"green"},{name:"Rails",color:"red"},{name:"Tailwindcss",color:"telegram"}],stars:2,githubLink:"https://github.com/MA-Ahmad/react_rails_blog",liveLink:"https://react-on-rails-blog.herokuapp.com/",coverImage:te[5],blurHash:"UEPGv.9FRkfR00%N%NofItxas-j@?dD%D%fj"},{id:6,title:"Scrapper App",desc:"A simple rails scrapper app to count html tags of a web page.",technologies:[{name:"Rails",color:"red"}],stars:1,githubLink:"https://github.com/MA-Ahmad/rails-app",liveLink:"https://urltohtmlapp.herokuapp.com/",coverImage:"",blurHash:"UEPGv.9FRkfR00%N%NofItxas-j@?dD%D%fj"}],oe=n(310),ie=n(323),ce=n(313),ae=n(311),re=n(312),Ae=n(308),se=n(309),le=n(184),he=(n(208),{enter:function(e){return{x:e>0?1e3:-1e3,opacity:0}},center:{zIndex:1,x:0,opacity:1},exit:function(e){return{zIndex:0,x:e<0?1e3:-1e3,opacity:0}}}),de=function(e){e.onOpen;var t=e.onClose,n=e.isOpen,o=e.repoId,i=a.useState([0,0]),c=Object(l.a)(i,2),r=Object(l.a)(c[0],2),A=r[0],s=r[1],h=c[1],d=a.useState(0),j=Object(l.a)(d,2),b=j[0],g=j[1],x=function(e){h([A+e,e])};a.useEffect((function(){g(o)}),[o]);return Object(w.jsxs)(G.a,{isCentered:!0,onClose:t,size:"6xl",isOpen:n,children:[Object(w.jsx)(G.g,{}),Object(w.jsx)(G.d,{children:Object(w.jsx)(G.b,{padding:"0",children:Object(w.jsxs)("div",{className:"carousel-container",children:[Object(w.jsx)(le.a,{initial:!1,custom:s,children:Object(w.jsx)(T.a.img,{src:te[b],custom:s,variants:he,initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},drag:"x",dragConstraints:{left:0,right:0},dragElastic:1,onDragEnd:function(e,t){var n=t.offset,o=t.velocity,i=function(e,t){return Math.abs(e)*t}(n.x,o.x);i<-1e4?x(1):i>1e4&&x(-1)}},A)}),Object(w.jsx)("div",{className:"next",onClick:function(){return x(1),void g(b+1<te.length?b+1:0)},children:Object(w.jsx)(O.a,{"aria-label":"left image",icon:Object(w.jsx)(Ae.a,{}),cursor:"pointer",as:se.a,size:"md",colorScheme:"teal",borderRadius:"full"})}),Object(w.jsx)("div",{className:"prev",onClick:function(){return x(-1),void g(0===b?te.length-1:b-1)},children:Object(w.jsx)(O.a,{"aria-label":"right image",icon:Object(w.jsx)(se.a,{}),cursor:"pointer",as:Ae.a,size:"md",colorScheme:"teal",borderRadius:"full"})})]})})})]})},je=n(171),be=n.n(je),ge=n(178),xe=n(327),me="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcwAAAHMCAYAAABY25iGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAbhSURBVHgB7dUBDYAwEMDAQfCvar4eFLAKuEuqodfeexYA8GfuBQAcGSYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAOvMMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAILnaxYA8GdeHY4J4gMsrYMAAAAASUVORK5CYII=",ue=function(e){var t=e.src,n=e.handleClick,o=e.blurHash,i=e.id;return Object(w.jsx)(be.a,{delay:500,src:t,placeholder:me,children:function(e,t){return t?Object(w.jsx)(ge.a,{hash:o,width:400,height:300,punch:1}):Object(w.jsx)(xe.a,{src:e,height:300,width:"100%",cursor:"pointer",objectFit:"cover",alt:"cover image",fallbackSrc:me,onClick:function(){return n(i)}})}})},pe=function(e){var t=e.repo,n=a.useState(0),o=Object(l.a)(n,2),c=o[0],r=o[1],A=Object(k.d)("white","#2f3244"),s=Object(k.d)("gray.600","#b5b1b1"),h=Object(b.a)(),d=h.isOpen,j=h.onOpen,x=h.onClose;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(oe.a,{children:Object(w.jsxs)(i.a,{maxW:"sm",height:"fit-content",borderWidth:"1px",borderRadius:"lg",overflow:"hidden",boxShadow:"md",mx:"5px",mb:"10px",mt:"10px",_hover:{boxShadow:"lg"},children:[Object(w.jsx)(ue,{id:t.id,src:t.coverImage,blurHash:t.blurHash,handleClick:function(e){r(e),j()}}),Object(w.jsxs)(i.a,{p:"5",bg:A,children:[Object(w.jsxs)(g.a,{justifyContent:"space-between",alignItems:"center",children:[Object(w.jsx)(i.a,{mt:"1",fontWeight:"semibold",as:"h6",fontSize:"md",lineHeight:"tight",textAlign:"left",isTruncated:!0,children:Object(w.jsxs)(N.a,{href:t.liveLink||t.githubLink,textDecoration:"none !important",isExternal:!0,children:[t.title,Object(w.jsx)(ae.a,{mx:"3px"})]})}),Object(w.jsx)(i.a,{mt:"1",children:t.stars?Object(w.jsx)(N.a,{href:t.githubLink,textDecoration:"none !important",isExternal:!0,children:Object(w.jsx)(ie.a,{hasArrow:!0,label:"Github stars",placement:"top-end",children:Object(w.jsxs)(i.a,{children:[Object(w.jsx)(re.a,{color:"teal.300",fontSize:"sm"}),Object(w.jsx)(i.a,{as:"span",ml:"2",color:s,fontSize:"sm",children:t.stars})]})})}):""})]}),Object(w.jsx)(i.a,{textAlign:"left",children:Object(w.jsx)(u.a,{spacing:"1",mt:"2",mb:"2",children:t.technologies.map((function(e,t){return Object(w.jsx)(ce.a,{borderRadius:"full",px:"1",colorScheme:e.color,textTransform:"lowercase",children:e.name},t)}))})}),Object(w.jsx)(i.a,{color:s,fontSize:"md",textAlign:"left",children:t.desc})]})]})}),Object(w.jsx)(de,{repoId:c,onOpen:j,onClose:x,isOpen:d})]})},Oe=function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(i.a,{minH:"50vh",children:[Object(w.jsx)(g.a,{p:"2",justifyContent:"center",children:Object(w.jsx)(x.a,{as:"h1",size:"xl",bgGradient:"linear(to-l, #7928CA, #FF0080)",bgClip:"text",_focus:{boxShadow:"none",outline:"none"},_hover:{textDecoration:"none",bgGradient:"linear(to-r, red.500, yellow.500)"},children:"Repositories"})}),Object(w.jsx)(ee.a,{in:!0,offsetY:"50vh",children:Object(w.jsx)(z.a,{columns:[1,2,2,3],mt:"40px",gridGap:"10px",position:"relative",overflow:"hidden",children:ne.map((function(e,t){return Object(w.jsx)(T.a.div,{whileHover:{y:-10},children:Object(w.jsx)(pe,{repo:e})},t)}))})})]})})},Ie=n(319),Be=n(290),fe=n(119),Ye=n(314),Ce=n(315),ke=n(321),ve=function(e){var t=e.isOpen,n=e.onClose,o=e.selectedNote;return Object(w.jsx)(le.a,{children:Object(w.jsx)(T.a.div,{layoutId:null===o||void 0===o?void 0:o.id,children:Object(w.jsxs)(G.a,{isOpen:t,onClose:n,scrollBehavior:"inside",isCentered:!0,motionPreset:"slideInBottom",children:[Object(w.jsx)(G.g,{}),Object(w.jsxs)(G.d,{children:[Object(w.jsx)(T.a.div,{children:Object(w.jsx)(G.f,{isTruncated:!0,paddingRight:"10",children:null===o||void 0===o?void 0:o.title})}),Object(w.jsx)(G.c,{}),Object(w.jsx)(T.a.div,{children:Object(w.jsx)(G.b,{pb:6,children:null===o||void 0===o?void 0:o.body})})]})]})})})},we=n(172),Fe=n.n(we),Ge=function(e){var t=e.notes,n=e.handleClick,o=e.setNotes,c=Object(k.d)("white","#2f3244"),r=a.useState(),A=Object(l.a)(r,2),s=A[0],h=A[1],d=Object(Ie.a)(),j=Object(b.a)(),m=j.isOpen,p=j.onOpen,O=j.onClose,B=function(){d({title:"Note deleted.",status:"success",position:"top",duration:2e3,isClosable:!0})};return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(ke.a,{type:"crossfade",children:[Object(w.jsx)(i.a,{minH:"50vh",children:Object(w.jsx)(Fe.a,{columnWidth:330,children:t.map((function(e){return Object(w.jsx)(Be.a,{in:!0,children:Object(w.jsx)(T.a.div,{whileHover:{y:-10},layoutId:e.id,onClick:function(){return function(e){h(e),p()}(e)},children:Object(w.jsx)(oe.a,{py:6,px:5,children:Object(w.jsx)(i.a,{maxH:"400px",w:"100%",boxShadow:"lg",rounded:"md",p:6,overflow:"hidden",cursor:"pointer",_hover:{boxShadow:"xl"},bg:c,role:"group",children:Object(w.jsxs)(u.b,{children:[Object(w.jsxs)(g.a,{_groupHover:{justifyContent:"space-between"},justifyContent:"center",align:"center",children:[Object(w.jsx)(i.a,{children:Object(w.jsx)(I.a,{color:"green.500",textTransform:"uppercase",fontWeight:800,fontSize:"sm",letterSpacing:1.1,children:"Note"})}),Object(w.jsx)(i.a,{_groupHover:{display:"block"},display:"none",children:Object(w.jsxs)(u.a,{spacing:"2",children:[Object(w.jsx)(fe.a,{color:"green.500",_hover:{color:"green.600"},_groupHover:{display:"block"},as:Ye.a,w:4,h:4,onClick:function(t){return function(e,t){n(e),t.stopPropagation()}(e.id,t)}}),Object(w.jsx)(fe.a,{color:"green.500",_hover:{color:"#ca364a"},_groupHover:{display:"block"},as:Ce.a,w:4,h:4,onClick:function(n){return function(e,n){var i=t.filter((function(t){return t.id!==e}));o(i),B(),n.stopPropagation()}(e.id,n)}})]})})]}),Object(w.jsx)(x.a,{fontSize:"xl",fontFamily:"body",textTransform:"capitalize",noOfLines:2,children:e.title}),Object(w.jsx)(I.a,{color:"gray.500",fontSize:"md",noOfLines:{base:3,md:4},children:e.body})]})})},e.id)})})}))})}),m?Object(w.jsx)(ve,{isOpen:m,onClose:O,selectedNote:s}):""]})})};function ye(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(g.a,{h:"55vh",justifyContent:"center",align:"center",children:Object(w.jsx)(ee.a,{in:!0,offsetY:"50vh",children:Object(w.jsx)(T.a.div,{whileHover:{scale:1.1},whileTap:{scale:.9},children:Object(w.jsxs)(x.a,{fontWeight:600,fontSize:{base:"2xl",sm:"4xl",md:"6xl"},lineHeight:"110%",children:[Object(w.jsx)(I.a,{textShadow:"1px 1px #9c1786",children:"Make notes for "}),Object(w.jsx)(I.a,{as:"span",color:"green.400",bgGradient:"linear(to-r, green.200, pink.500)",bgClip:"text",children:"your daily work"})]})})})})})}var Qe=function(e){var t=e.notes,n=e.setNotes,o=Object(b.a)(),i=o.isOpen,c=o.onOpen,r=o.onClose,A=a.useState(),h=Object(l.a)(A,2),d=h[0],j=h[1],g=Object(Ie.a)(),x=function(){g({title:"Note updated.",status:"success",position:"top",duration:2e3,isClosable:!0})};return console.log(t),Object(w.jsxs)(w.Fragment,{children:[t.length?Object(w.jsx)(Ge,{notes:t,handleClick:function(e){var n=t.find((function(t){return t.id===e}));j(n),c()},setNotes:n}):Object(w.jsx)(ye,{}),i?Object(w.jsx)(R,{isOpen:i,onClose:r,handleNoteUpdate:function(e){var o=Object(s.a)(t);o[t.findIndex((function(t){return t.id===e.id}))]=e,n(o),x()},selectedNote:d}):""]})};Qe.defaultProps={notes:[{id:"Odork5n5jPVd0wvm0w_dY",title:"fffdf",body:"sdfsfffdf"}]};var Je=Object(h.g)((function(e){var t=e.history,n=a.useState([]),o=Object(l.a)(n,2),c=o[0],r=o[1];return Object(w.jsx)(d.a,{theme:j.theme,children:Object(w.jsxs)(i.a,{textAlign:"center",fontSize:"xl",p:5,children:[Object(w.jsx)(_,{handleNoteCreate:function(e){var n=Object(s.a)(c);n.push(e),r(n),"/"!==t.location.pathname&&t.push("/")}}),Object(w.jsxs)(h.d,{children:[Object(w.jsx)(h.b,{exact:!0,path:"/projects",component:Oe}),Object(w.jsx)(h.b,{exact:!0,path:"/",component:function(){return Object(w.jsx)(Qe,{notes:c,setNotes:r})}}),Object(w.jsx)(h.a,{to:"/"})]}),Object(w.jsx)($,{})]})})}));A.a.render(Object(w.jsxs)(a.StrictMode,{children:[Object(w.jsx)(o.a,{}),Object(w.jsx)(c.a,{children:Object(w.jsx)(i.a,{maxW:"1050px",mx:"auto",children:Object(w.jsx)(Je,{})})})]}),document.getElementById("root"))}},[[273,1,2]]]);
//# sourceMappingURL=main.9d9210a0.chunk.js.map