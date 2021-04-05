(this["webpackJsonpnotebook-app"]=this["webpackJsonpnotebook-app"]||[]).push([[0],{208:function(e,t,n){},273:function(e,t,n){"use strict";n.r(t);var o=n(316),i=n(298),a=n(58),c=n(0),r=n(49),A=n.n(r),s=n(7),l=n(4),d=n(17),h=n(324),j=n(112),b=n(296),g=n(297),x=n(325),m=n(299),u=n(300),p=n(177),O=n(320),I=n(285),B=n(306),Y=n(301),f=n(302),C=n(305),k=n(102),v=n(183),w=n(67),F=n(1),G=function(e){var t=Object(v.c)().toggleColorMode,n=Object(v.d)("dark","light"),o=Object(v.d)(w.d,w.f);return Object(F.jsx)(I.a,Object(k.a)({size:"md",fontSize:"lg",variant:"ghost",color:"current",marginLeft:"2",onClick:t,icon:Object(F.jsx)(o,{}),"aria-label":"Switch to ".concat(n," mode")},e))},y=n(317),Q=n(65),J=n(292),M=n(293),E=n(294),D=n(295),S=n(180),L=n(179),R=function(e){var t,n,o=e.isOpen,i=e.onClose,a=e.selectedNote,c=e.handleNoteCreate,r=e.handleNoteUpdate,A=Object(L.a)({mode:"onChange"}),s=A.register,l=A.handleSubmit,d=A.formState,h=A.errors;return Object(F.jsxs)(y.a,{isOpen:o,onClose:i,size:"lg",isCentered:!0,motionPreset:"slideInBottom",children:[Object(F.jsx)(y.g,{}),Object(F.jsx)(y.d,{children:Object(F.jsxs)("form",{onSubmit:l((function(e){var t={id:"",title:e.title,body:e.body};c?(t.id=Object(S.a)(),c&&c(t)):(t.id=a?a.id:"",r&&r(t)),i()})),children:[Object(F.jsxs)(y.f,{children:[a?"Edit":"Create"," a Note"]}),Object(F.jsx)(y.c,{}),Object(F.jsxs)(y.b,{pb:6,children:[Object(F.jsxs)(Q.a,{isInvalid:!!(null===h||void 0===h?void 0:h.title),isRequired:!0,children:[Object(F.jsx)(J.a,{children:"Title"}),Object(F.jsx)(M.a,{name:"title",placeholder:"Title",defaultValue:null===a||void 0===a?void 0:a.title,ref:s({validate:function(e){return!!e||"Title is required"}})}),Object(F.jsx)(E.a,{children:!!(null===h||void 0===h?void 0:h.title)&&(null===h||void 0===h||null===(t=h.title)||void 0===t?void 0:t.message)})]}),Object(F.jsxs)(Q.a,{size:"lg",mt:4,isInvalid:!!(null===h||void 0===h?void 0:h.body),isRequired:!0,children:[Object(F.jsx)(J.a,{children:"Body"}),Object(F.jsx)(D.a,{name:"body",placeholder:"Body",size:"md",borderRadius:"5px",defaultValue:null===a||void 0===a?void 0:a.body,ref:s({validate:function(e){return!!e||"Body is required"}})}),Object(F.jsx)(E.a,{children:!!(null===h||void 0===h?void 0:h.body)&&(null===h||void 0===h||null===(n=h.body)||void 0===n?void 0:n.message)})]})]}),Object(F.jsxs)(y.e,{children:[Object(F.jsx)(p.a,{type:"submit",colorScheme:"blue",isLoading:d.isSubmitting,mr:3,children:"Save"}),Object(F.jsx)(p.a,{onClick:i,children:"Cancel"})]})]})})]})},T=n(182),_=function(e){var t=e.handleNoteCreate,n=Object(b.a)(),o=n.isOpen,c=n.onOpen,r=n.onClose;return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)(g.a,{mb:"30px",align:"center",children:[Object(F.jsx)(x.a,{children:Object(F.jsx)(i.a,{p:"2",as:a.b,to:"/",children:Object(F.jsx)(T.a.div,{whileHover:{scale:1.1},children:Object(F.jsx)(m.a,{as:"h1",size:"xl",bgGradient:"linear(to-l, #7928CA,#FF0080)",bgClip:"text",_focus:{boxShadow:"none",outline:"none"},_hover:{textDecoration:"none",bgGradient:"linear(to-r, red.500, yellow.500)"},children:"Notebook App"})})})}),Object(F.jsx)(u.a,{}),Object(F.jsx)(i.a,{children:Object(F.jsxs)(x.a,{children:[Object(F.jsxs)(x.a,{d:["none","none","block"],children:[Object(F.jsx)(p.a,{leftIcon:Object(F.jsx)(Y.a,{}),bgGradient:"linear(to-l, #7928CA,#FF0080)",_hover:{bgGradient:"linear(to-r, red.500, yellow.500)"},variant:"solid",size:"sm",onClick:c,children:"Add new note"}),Object(F.jsx)(p.a,{leftIcon:Object(F.jsx)(f.a,{}),bgGradient:"linear(to-l, #7928CA,#FF0080)",_hover:{bgGradient:"linear(to-r, red.500, yellow.500)"},variant:"solid",size:"sm",as:a.b,to:"/projects",children:"Open source"})]}),Object(F.jsx)(i.a,{d:["block","block","none"],children:Object(F.jsxs)(O.a,{children:[Object(F.jsx)(O.b,{as:I.a,"aria-label":"Options",icon:Object(F.jsx)(C.a,{}),transition:"all 0.2s",size:"md",variant:"outline",_hover:{bg:"gray.400"},_focus:{boxShadow:"outline"}}),Object(F.jsxs)(O.e,{fontSize:"sm",zIndex:5,children:[Object(F.jsxs)(O.d,{icon:Object(F.jsx)(Y.a,{}),onClick:c,children:[" ",Object(F.jsx)(B.a,{textShadow:"1px 1px #9c1786",children:"Add new note"})]}),Object(F.jsx)(O.c,{}),Object(F.jsxs)(O.d,{icon:Object(F.jsx)(f.a,{}),as:a.b,to:"/projects",children:[" ",Object(F.jsx)(B.a,{textShadow:"1px 1px #9c1786",children:"Open source repositories"})]})]})]})}),Object(F.jsx)(G,{justifySelf:"flex-end"})]})})]}),Object(F.jsx)(R,{isOpen:o,onClose:r,handleNoteCreate:t})]})},N=n(307),z=n(326),H=n(322),U=n(287),W="https://github.com/MA-Ahmad/notebook",P={copyright:"Copyright \xa9 ".concat((new Date).getFullYear()," Muhammad Ahmad. All Rights Reserved."),author:{name:"Muhammad Ahmad",github:"https://github.com/MA-Ahmad",twitter:"https://twitter.com/muhammad_ahmaad",linkedin:"https://linkedin.com/in/muhammad-ahmad20",quora:"https://www.quora.com/profile/Muhammad-Ahmad-66",dev:"https://dev.to/m_ahmad",email:"muhammad.ahmad8043@gmail.com"},repo:{url:W,issuesUrl:"".concat(W,"/issues/new")}};function V(){return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(m.a,{fontSize:"24px",mb:"15px",className:"yellow-gradient-color",children:"Be the first to know"}),Object(F.jsx)(B.a,{color:"gray.400",mb:"15px",children:"Get notified about the upcoming sessions, news, articles, jobs, and opensource projects."}),Object(F.jsx)("form",{action:"#",children:Object(F.jsxs)(i.a,{position:"relative",children:[Object(F.jsx)(M.a,{type:"email",isRequired:!0,name:"entry.1808449400",px:"25px",bg:"gray.900",height:"50px",rounded:"50px",_placeholder:{color:"gray.600"},placeholder:"Enter your email",_focus:{outline:0},color:"gray.100",borderWidth:0}),Object(F.jsx)(p.a,{type:"submit",height:"50px",color:"gray.100",_hover:{bg:"yellow.400",color:"gray.900"},position:"absolute",top:"0",right:"0",bg:"gray.700",rounded:"50px",px:"25px",children:"Subscribe"})]})})]})}var q=function(e){var t=e.href,n=e.text,o=e.isExternal,i=void 0===o||o;return Object(F.jsx)(N.a,{_focus:{outline:"none",boxShadow:"none"},href:t,target:i?"_blank":"_self",fontWeight:500,color:"gray.500",_hover:{color:"gray.600",textDecoration:"none"},children:n})},X=function(e){var t=e.href,n=e.text;return Object(F.jsx)(a.b,{to:t,children:Object(F.jsx)("a",{children:Object(F.jsx)(N.a,{_focus:{outline:"none",boxShadow:"none"},as:"span",fontWeight:500,color:"gray.500",_hover:{color:"gray.600",textDecoration:"none"},children:n})})})},K={variant:"ghost",size:"lg",isRound:!0},Z=function(e){var t=e.href,n=e.label,o=e.icon,i=e.type,a=e.isExternal,c=void 0===a||a;return Object(F.jsx)(I.a,Object(k.a)({as:N.a,href:t,target:c?"_blank":"_self","aria-label":n,icon:o,colorScheme:i},K))};function $(){return Object(F.jsxs)(z.a,{flexDirection:"column-reverse",gridTemplateColumns:["1fr","1fr","1fr 1fr","1fr 1fr"],borderTopWidth:2,mt:"30px",borderTopColor:"gray.900",pt:"20px",children:[Object(F.jsx)(i.a,{d:["block","block","none","none"],mb:"30px",children:Object(F.jsx)(V,{})}),Object(F.jsxs)(i.a,{children:[Object(F.jsxs)(z.a,{columns:[1,1,2,2],children:[Object(F.jsxs)(x.b,{mb:["10px","10px",0,0],children:[Object(F.jsx)(B.a,{as:"span",children:Object(F.jsx)(q,{href:"mailto:".concat(P.author.email),text:"Contact us"})}),Object(F.jsx)(B.a,{as:"span",children:Object(F.jsx)(q,{href:P.repo.url,text:"Contribute"})}),Object(F.jsx)(B.a,{as:"span",children:Object(F.jsx)(X,{href:"/projects",text:"Open source projects"})})]}),Object(F.jsxs)(x.b,{children:[Object(F.jsx)(B.a,{as:"span",children:Object(F.jsxs)(H.a,{placement:"top",children:[Object(F.jsx)(H.f,{children:Object(F.jsx)(B.a,{as:"span",_focus:{outline:"none",boxShadow:"none"},fontWeight:500,color:"gray.500",cursor:"pointer",_hover:{color:"gray.600",textDecoration:"none"},children:"Social Accounts"})}),Object(F.jsx)(U.a,{children:Object(F.jsxs)(H.e,{children:[Object(F.jsx)(H.b,{}),Object(F.jsx)(H.d,{}),Object(F.jsx)(H.c,{children:Object(F.jsxs)(x.b,{as:"footer",isInline:!0,spacing:[1,2],justifyContent:"center",alignItems:"center",children:[Object(F.jsx)(Z,{href:P.author.github,icon:Object(F.jsx)(w.b,{}),type:"gray",label:"Github Account"}),Object(F.jsx)(Z,{href:P.author.dev,icon:Object(F.jsx)(w.a,{}),type:"gray",label:"Dev Account"}),Object(F.jsx)(Z,{href:P.author.linkedin,icon:Object(F.jsx)(w.c,{}),type:"linkedin",label:"LinkedIn Account"}),Object(F.jsx)(Z,{href:P.author.twitter,icon:Object(F.jsx)(w.g,{}),type:"twitter",label:"Twitter Account"}),Object(F.jsx)(Z,{href:P.author.quora,icon:Object(F.jsx)(w.e,{}),type:"red",label:"Quora Account"})]})})]})})]})}),Object(F.jsx)(B.a,{as:"span",children:Object(F.jsx)(q,{href:"mailto:".concat(P.author.email),text:"Sponsor"})}),Object(F.jsx)(B.a,{as:"span",children:Object(F.jsx)(q,{href:"/#faqs",isExternal:!1,text:"FAQs"})})]})]}),Object(F.jsxs)(B.a,{mt:"20px",color:"gray.500",children:["Made with \ud83e\udde1 by"," ",Object(F.jsx)(N.a,{_focus:{boxShadow:"none",outline:"none"},target:"_blank",href:P.author.github,fontWeight:600,color:"gray.400",bgClip:"text",bgGradient:"linear(to-l, #7928CA,#FF0080)",_hover:{bgGradient:"linear(to-r, red.500, yellow.500)"},children:"Muhammad Ahmad"})," "]})]}),Object(F.jsx)(i.a,{d:["none","none","block","block"],children:Object(F.jsx)(V,{})})]})}var ee=n(288),te=[n.p+"static/media/blog_1.e55bd114.png",n.p+"static/media/blog_2.3712eddc.png",n.p+"static/media/portfolio.d477ed4c.png",n.p+"static/media/image_gallery.b1ca697a.png",n.p+"static/media/notebook_app.f4e4e3bd.png",n.p+"static/media/blog_3.d0737200.png"],ne=[{id:0,title:"Blog App",desc:"A Blog App built by using React, ChakraUI and Formik.",technologies:[{name:"React",color:"green"},{name:"ChakraUi",color:"teal"}],stars:9,githubLink:"https://github.com/MA-Ahmad/reactBlog",liveLink:"https://ma-ahmad.github.io/reactBlog",coverImage:te[0],blurHash:"ULM*T}IV~pxt00%LRjNG9~IVadt6?vxtD%Rj"},{id:1,title:"Blog App + Authentication",desc:"A Blog App built by using React, Rails, ChakraUI and Formik.",technologies:[{name:"React",color:"green"},{name:"Rails",color:"red"},{name:"ChakraUi",color:"teal"}],stars:6,githubLink:"https://github.com/MA-Ahmad/blog-app-react-frontend",liveLink:"https://blog-frontend-react.herokuapp.com/",coverImage:te[1],blurHash:"UQNTzZHr~Wtl00={M{NG0dIokDxaloO?IUnO"},{id:4,title:"Notebook App",desc:"Create notes for your daily important work.",technologies:[{name:"React",color:"green"},{name:"Typescript",color:"blue"},{name:"ChakraUi",color:"teal"}],stars:6,githubLink:"https://github.com/MA-Ahmad/notebook",liveLink:"",coverImage:te[4],blurHash:"U4S~x6WE~WwJ=|VsMybb%NVt8_tP%2RQRknl"},{id:2,title:"Portfolio",desc:"Personal portfolio app to show my skills and experience.",technologies:[{name:"React",color:"green"},{name:"ChakraUi",color:"teal"}],stars:2,githubLink:"https://github.com/MA-Ahmad/portfolio",liveLink:"https://mahmad.me/",coverImage:te[2],blurHash:"U4S~x501-;~pRiNGIURjRjIoM{xbNFR*Rjay"},{id:3,title:"Image Gallery",desc:"This app built by using Tailwind CSS with React and Pixabay API.",technologies:[{name:"React",color:"green"},{name:"Tailwindcss",color:"telegram"}],stars:2,githubLink:"https://github.com/MA-Ahmad/react-image-gallery",liveLink:"",coverImage:te[3],blurHash:"U]OzA2n%W;ayRPn%fkWVx]bHjFj[_NWXofay"},{id:5,title:"Crud Demo App",desc:"A simple react+rails(RR) CRUD app with tailwindcss.",technologies:[{name:"React",color:"green"},{name:"Rails",color:"red"},{name:"Tailwindcss",color:"telegram"}],stars:2,githubLink:"https://github.com/MA-Ahmad/react_rails_blog",liveLink:"https://react-on-rails-blog.herokuapp.com/",coverImage:te[5],blurHash:"UEPGv.9FRkfR00%N%NofItxas-j@?dD%D%fj"},{id:6,title:"Scrapper App",desc:"A simple rails scrapper app to count html tags of a web page.",technologies:[{name:"Rails",color:"red"}],stars:1,githubLink:"https://github.com/MA-Ahmad/rails-app",liveLink:"https://urltohtmlapp.herokuapp.com/",coverImage:"",blurHash:"UEPGv.9FRkfR00%N%NofItxas-j@?dD%D%fj"}],oe=n(310),ie=n(323),ae=n(313),ce=n(311),re=n(312),Ae=n(308),se=n(309),le=n(184),de=(n(208),{enter:function(e){return{x:e>0?1e3:-1e3,opacity:0}},center:{zIndex:1,x:0,opacity:1},exit:function(e){return{zIndex:0,x:e<0?1e3:-1e3,opacity:0}}}),he=function(e){e.onOpen;var t=e.onClose,n=e.isOpen,o=e.repoId,i=c.useState([0,0]),a=Object(l.a)(i,2),r=Object(l.a)(a[0],2),A=r[0],s=r[1],d=a[1],h=c.useState(0),j=Object(l.a)(h,2),b=j[0],g=j[1],x=function(e){d([A+e,e])};c.useEffect((function(){g(o)}),[o]);return Object(F.jsxs)(y.a,{isCentered:!0,onClose:t,size:"6xl",isOpen:n,children:[Object(F.jsx)(y.g,{}),Object(F.jsx)(y.d,{children:Object(F.jsx)(y.b,{padding:"0",children:Object(F.jsxs)("div",{className:"carousel-container",children:[Object(F.jsx)(le.a,{initial:!1,custom:s,children:Object(F.jsx)(T.a.img,{src:te[b],custom:s,variants:de,initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},drag:"x",dragConstraints:{left:0,right:0},dragElastic:1,onDragEnd:function(e,t){var n=t.offset,o=t.velocity,i=function(e,t){return Math.abs(e)*t}(n.x,o.x);i<-1e4?x(1):i>1e4&&x(-1)}},A)}),Object(F.jsx)("div",{className:"next",onClick:function(){return x(1),void g(b+1<te.length?b+1:0)},children:Object(F.jsx)(I.a,{"aria-label":"left image",icon:Object(F.jsx)(Ae.a,{}),cursor:"pointer",as:se.a,size:"md",colorScheme:"teal",borderRadius:"full"})}),Object(F.jsx)("div",{className:"prev",onClick:function(){return x(-1),void g(0===b?te.length-1:b-1)},children:Object(F.jsx)(I.a,{"aria-label":"right image",icon:Object(F.jsx)(se.a,{}),cursor:"pointer",as:Ae.a,size:"md",colorScheme:"teal",borderRadius:"full"})})]})})})]})},je=n(171),be=n.n(je),ge=n(178),xe=n(327),me="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcwAAAHMCAYAAABY25iGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAbhSURBVHgB7dUBDYAwEMDAQfCvar4eFLAKuEuqodfeexYA8GfuBQAcGSYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAIFhAkBgmAAQGCYABIYJAOvMMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAALDBIDAMAEgMEwACAwTAILnaxYA8GdeHY4J4gMsrYMAAAAASUVORK5CYII=",ue=function(e){var t=e.src,n=e.handleClick,o=e.blurHash,i=e.id;return Object(F.jsx)(be.a,{delay:500,src:t,placeholder:me,children:function(e,t){return t?Object(F.jsx)(ge.a,{hash:o,width:400,height:300,punch:1}):Object(F.jsx)(xe.a,{src:e,height:300,width:"100%",cursor:"pointer",objectFit:"cover",alt:"cover image",fallbackSrc:me,onClick:function(){return n(i)}})}})},pe=function(e){var t=e.repo,n=c.useState(0),o=Object(l.a)(n,2),a=o[0],r=o[1],A=Object(v.d)("white","#2f3244"),s=Object(v.d)("gray.600","#b5b1b1"),d=Object(b.a)(),h=d.isOpen,j=d.onOpen,m=d.onClose;return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(oe.a,{children:Object(F.jsxs)(i.a,{maxW:"sm",height:"fit-content",borderWidth:"1px",borderRadius:"lg",overflow:"hidden",boxShadow:"md",mx:"5px",mb:"10px",mt:"10px",_hover:{boxShadow:"lg"},children:[Object(F.jsx)(ue,{id:t.id,src:t.coverImage,blurHash:t.blurHash,handleClick:function(e){r(e),j()}}),Object(F.jsxs)(i.a,{p:"5",bg:A,children:[Object(F.jsxs)(g.a,{justifyContent:"space-between",alignItems:"center",children:[Object(F.jsx)(i.a,{mt:"1",fontWeight:"semibold",as:"h6",fontSize:"md",lineHeight:"tight",textAlign:"left",isTruncated:!0,children:Object(F.jsxs)(N.a,{href:t.liveLink||t.githubLink,textDecoration:"none !important",isExternal:!0,children:[t.title,Object(F.jsx)(ce.a,{mx:"3px"})]})}),Object(F.jsx)(i.a,{mt:"1",children:t.stars?Object(F.jsx)(N.a,{href:t.githubLink,textDecoration:"none !important",isExternal:!0,children:Object(F.jsx)(ie.a,{hasArrow:!0,label:"Github stars",placement:"top-end",children:Object(F.jsxs)(i.a,{children:[Object(F.jsx)(re.a,{color:"teal.300",fontSize:"sm"}),Object(F.jsx)(i.a,{as:"span",ml:"2",color:s,fontSize:"sm",children:t.stars})]})})}):""})]}),Object(F.jsx)(i.a,{textAlign:"left",children:Object(F.jsx)(x.a,{spacing:"1",mt:"2",mb:"2",children:t.technologies.map((function(e,t){return Object(F.jsx)(ae.a,{borderRadius:"full",px:"1",colorScheme:e.color,textTransform:"lowercase",children:e.name},t)}))})}),Object(F.jsx)(i.a,{color:s,fontSize:"md",textAlign:"left",children:t.desc})]})]})}),Object(F.jsx)(he,{repoId:a,onOpen:j,onClose:m,isOpen:h})]})},Oe=function(){return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)(i.a,{minH:"50vh",children:[Object(F.jsx)(g.a,{p:"2",justifyContent:"center",children:Object(F.jsx)(m.a,{as:"h1",size:"xl",bgGradient:"linear(to-l, #7928CA, #FF0080)",bgClip:"text",_focus:{boxShadow:"none",outline:"none"},_hover:{textDecoration:"none",bgGradient:"linear(to-r, red.500, yellow.500)"},children:"Repositories"})}),Object(F.jsx)(ee.a,{in:!0,offsetY:"50vh",children:Object(F.jsx)(z.a,{columns:[1,2,2,3],mt:"40px",gridGap:"10px",position:"relative",overflow:"hidden",children:ne.map((function(e,t){return Object(F.jsx)(T.a.div,{whileHover:{y:-10},children:Object(F.jsx)(pe,{repo:e})},t)}))})})]})})},Ie=n(319),Be=n(290),Ye=n(119),fe=n(314),Ce=n(315),ke=n(321),ve=function(e){var t=e.isOpen,n=e.onClose,o=e.selectedNote;return Object(F.jsx)(le.a,{children:Object(F.jsx)(T.a.div,{layoutId:null===o||void 0===o?void 0:o.id,children:Object(F.jsxs)(y.a,{isOpen:t,onClose:n,scrollBehavior:"inside",isCentered:!0,motionPreset:"slideInBottom",children:[Object(F.jsx)(y.g,{}),Object(F.jsxs)(y.d,{children:[Object(F.jsx)(T.a.div,{children:Object(F.jsx)(y.f,{isTruncated:!0,paddingRight:"10",children:null===o||void 0===o?void 0:o.title})}),Object(F.jsx)(y.c,{}),Object(F.jsx)(T.a.div,{children:Object(F.jsx)(y.b,{pb:6,children:null===o||void 0===o?void 0:o.body})})]})]})})})},we=n(172),Fe=n.n(we),Ge=function(e){var t=e.notes,n=e.handleClick,o=e.setNotes,a=Object(v.d)("white","#2f3244"),r=c.useState(),A=Object(l.a)(r,2),s=A[0],d=A[1],h=Object(Ie.a)(),j=Object(b.a)(),u=j.isOpen,p=j.onOpen,O=j.onClose,I=function(){h({title:"Note deleted.",status:"success",position:"top",duration:2e3,isClosable:!0})};return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)(ke.a,{type:"crossfade",children:[Object(F.jsx)(i.a,{minH:"50vh",children:Object(F.jsx)(Fe.a,{columnWidth:330,children:t.map((function(e){return Object(F.jsx)(Be.a,{in:!0,children:Object(F.jsx)(T.a.div,{whileHover:{y:-10},layoutId:e.id,onClick:function(){return function(e){d(e),p()}(e)},children:Object(F.jsx)(oe.a,{py:2,px:2,children:Object(F.jsx)(i.a,{maxH:"400px",w:"100%",boxShadow:"lg",rounded:"md",p:6,overflow:"hidden",cursor:"pointer",_hover:{boxShadow:"xl"},bg:a,role:"group",children:Object(F.jsxs)(x.b,{children:[Object(F.jsxs)(g.a,{_groupHover:{justifyContent:"space-between"},justifyContent:"center",align:"center",children:[Object(F.jsx)(i.a,{children:Object(F.jsx)(B.a,{color:"green.500",textTransform:"uppercase",fontWeight:800,fontSize:"sm",letterSpacing:1.1,children:"Note"})}),Object(F.jsx)(i.a,{_groupHover:{display:"block"},display:"none",children:Object(F.jsxs)(x.a,{spacing:"2",children:[Object(F.jsx)(Ye.a,{color:"green.500",_hover:{color:"green.600"},_groupHover:{display:"block"},as:fe.a,w:4,h:4,onClick:function(t){return function(e,t){n(e),t.stopPropagation()}(e.id,t)}}),Object(F.jsx)(Ye.a,{color:"green.500",_hover:{color:"#ca364a"},_groupHover:{display:"block"},as:Ce.a,w:4,h:4,onClick:function(n){return function(e,n){var i=t.filter((function(t){return t.id!==e}));o(i),I(),n.stopPropagation()}(e.id,n)}})]})})]}),Object(F.jsx)(m.a,{fontSize:"xl",fontFamily:"body",textTransform:"capitalize",noOfLines:2,children:e.title}),Object(F.jsx)(B.a,{color:"gray.500",fontSize:"md",noOfLines:{base:3,md:4},children:e.body})]})})},e.id)})})}))})}),u?Object(F.jsx)(ve,{isOpen:u,onClose:O,selectedNote:s}):""]})})};function ye(){return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)(g.a,{h:"55vh",justifyContent:"center",align:"center",children:Object(F.jsx)(ee.a,{in:!0,offsetY:"50vh",children:Object(F.jsx)(T.a.div,{whileHover:{scale:1.1},whileTap:{scale:.9},children:Object(F.jsxs)(m.a,{fontWeight:600,fontSize:{base:"2xl",sm:"4xl",md:"6xl"},lineHeight:"110%",children:[Object(F.jsx)(B.a,{textShadow:"1px 1px #9c1786",children:"Make notes for "}),Object(F.jsx)(B.a,{as:"span",color:"green.400",bgGradient:"linear(to-r, green.200, pink.500)",bgClip:"text",children:"your daily work"})]})})})})})}var Qe=function(e){var t=e.notes,n=e.setNotes,o=Object(b.a)(),i=o.isOpen,a=o.onOpen,r=o.onClose,A=c.useState(),d=Object(l.a)(A,2),h=d[0],j=d[1],g=Object(Ie.a)(),x=function(){g({title:"Note updated.",status:"success",position:"top",duration:2e3,isClosable:!0})};return Object(F.jsxs)(F.Fragment,{children:[t.length?Object(F.jsx)(Ge,{notes:t,handleClick:function(e){var n=t.find((function(t){return t.id===e}));j(n),a()},setNotes:n}):Object(F.jsx)(ye,{}),i?Object(F.jsx)(R,{isOpen:i,onClose:r,handleNoteUpdate:function(e){var o=Object(s.a)(t);o[t.findIndex((function(t){return t.id===e.id}))]=e,n(o),x()},selectedNote:h}):""]})},Je=Object(d.g)((function(e){var t=e.history,n=c.useState([]),o=Object(l.a)(n,2),a=o[0],r=o[1];c.useEffect((function(){r([{id:"Odork5n5jPVd0wvm0w_dY",title:"Hey \ud83d\udc4b",body:"I'm dummy note here. Try to update me. Click me to see my remaining part. You can also delete me \ud83d\ude14. But I'll be here again by reopening the app link \ud83d\ude03. "}])}),[]);return Object(F.jsx)(h.a,{theme:j.theme,children:Object(F.jsxs)(i.a,{textAlign:"center",fontSize:"xl",p:5,children:[Object(F.jsx)(_,{handleNoteCreate:function(e){var n=Object(s.a)(a);n.push(e),r(n),"/"!==t.location.pathname&&t.push("/")}}),Object(F.jsxs)(d.d,{children:[Object(F.jsx)(d.b,{exact:!0,path:"/projects",component:Oe}),Object(F.jsx)(d.b,{exact:!0,path:"/",component:function(){return Object(F.jsx)(Qe,{notes:a,setNotes:r})}}),Object(F.jsx)(d.a,{to:"/"})]}),Object(F.jsx)($,{})]})})}));A.a.render(Object(F.jsxs)(c.StrictMode,{children:[Object(F.jsx)(o.a,{}),Object(F.jsx)(a.a,{children:Object(F.jsx)(i.a,{maxW:"1050px",mx:"auto",children:Object(F.jsx)(Je,{})})})]}),document.getElementById("root"))}},[[273,1,2]]]);
//# sourceMappingURL=main.29bf6b4c.chunk.js.map