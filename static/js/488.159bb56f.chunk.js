"use strict";(self.webpackChunknoctrlz_portfolio=self.webpackChunknoctrlz_portfolio||[]).push([[488],{2488:function(e,t,n){n.r(t),n.d(t,{About:function(){return k}});var o=n(8735),i=n(3046),s=n(2504),a=n(3880),r=n(9439),c=n(2791),d=n(6332),l=n(3433),u=n(1413),p=n(5987),g=n(184),h=["title"],m=["title"],f=function(e){var t=e.title,n=(0,p.Z)(e,h);return(0,g.jsx)(o.X6,(0,u.Z)((0,u.Z)({fontSize:"2xl",fontWeight:"bold"},n),{},{"data-aos":"fade-down",children:t}))},x=function(e){var t=e.title,n=(0,p.Z)(e,m);return(0,g.jsx)(o.xv,(0,u.Z)((0,u.Z)({fontWeight:"semibold",fontSize:"lg"},n),{},{"data-aos":"fade-down",children:t}))},y=function(e){var t=e.expanded,n=e.id,i=e.idx,a=e.title,u=e.subTitle,p=e.date,h=e.content,m=e.onChange,f=(0,c.useMemo)((function(){return t.includes(i)}),[t,i]),y=(0,c.useState)(!1),b=(0,r.Z)(y,2),j=b[0],w=b[1],S=(0,c.useMemo)((function(){return h.length>1&&!f||!f&&j}),[j,f,h]);return(0,c.useEffect)((function(){var e,t="first-point-".concat(n),o=document.getElementById(t);o&&(o.scrollWidth>=(null===(e=o.parentElement)||void 0===e?void 0:e.scrollWidth)?w(!0):w(!1))}),[n]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(d.KF,{as:o.xu,p:"0",disabled:!0,onClick:void 0,_hover:{bg:"transparent"},overflow:"hidden",display:"block",children:[(0,g.jsx)(x,{title:a,fontWeight:"semibold"}),(0,g.jsx)(o.xv,{"data-aos":"fade",children:u}),(0,g.jsx)(o.xv,{color:"gray","data-aos":"fade-up",fontSize:"sm",fontWeight:"semibold",children:p}),(0,g.jsxs)(o.kC,{pt:"2",justifyContent:"space-between","data-aos":"fade",children:[f?(0,g.jsx)(o.QI,{listStylePosition:"outside",pl:"1",children:(0,g.jsx)(o.xv,{as:"li",isTruncated:!t.includes(i),children:h[0]})}):(0,g.jsx)(o.xv,{id:"first-point-".concat(n),isTruncated:!t.includes(i),children:h[0]}),S&&(0,g.jsx)(s.zx,{flexShrink:0,id:"see-more-".concat(n),size:"xs",variant:"link",colorScheme:"gray",opacity:"0.8",onClick:function(){if(t.includes(i)){var e=t.filter((function(e){return e!==i}));m(e)}else m([].concat((0,l.Z)(t),[i]))},children:"See more"})]})]}),(0,g.jsxs)(d.Hk,{p:"0",pl:"1",children:[(0,g.jsx)(o.QI,{listStylePosition:"outside",children:h.slice(1).map((function(e,t){return(0,g.jsx)(o.xv,{as:"li",children:e},"".concat(a,"-cont-").concat(t))}))}),t.includes(i)&&(0,g.jsx)(o.kC,{justifyContent:"flex-end",children:(0,g.jsx)(s.zx,{id:"see-less-".concat(n),size:"xs",variant:"link",colorScheme:"gray",opacity:"0.7",onClick:function(){var e=t.filter((function(e){return e!==i}));m(e)},children:"See less"})})]})]})},b=function(){var e=(0,c.useState)([]),t=(0,r.Z)(e,2),n=t[0],o=t[1];return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(f,{title:"Education"}),(0,g.jsx)("br",{}),(0,g.jsx)(d.UQ,{pt:"2",allowMultiple:!0,index:n,id:"education",children:a.rH.about.educations.map((function(e,t){return(0,g.jsx)(d.Qd,{p:"0",border:"0",mb:"4",children:(0,g.jsx)(y,{title:e.school,subTitle:e.degree,date:e.duration,content:e.content,id:e.id,idx:t,onChange:o,expanded:n})},"panel-".concat(e.school,"-").concat(e.degree))}))})]})},j=function(){var e=(0,c.useState)([]),t=(0,r.Z)(e,2),n=t[0],o=t[1];return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(f,{title:"Experiences"}),(0,g.jsx)("br",{}),(0,g.jsx)(d.UQ,{pt:"2",allowMultiple:!0,index:n,children:a.rH.about.experiences.map((function(e,t){return(0,g.jsx)(d.Qd,{p:"0",border:"0",mb:"4",children:(0,g.jsx)(y,{id:e.id,title:e.company,subTitle:e.position,date:e.duration,content:e.description,idx:t,onChange:o,expanded:n})},"panel-".concat(e.company))}))})]})},w=n(3362),S=function(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(f,{title:"Skills",pb:"2"}),(0,g.jsx)("br",{}),a.rH.about.skills.map((function(e){return(0,g.jsxs)(o.xu,{p:"0",mb:"4",children:[(0,g.jsx)(x,{title:e.title}),(0,g.jsx)(w.$,{id:"skills-tags-".concat(e.title),tags:e.tools})]},"skills-".concat(e.title))}))]})},v=n(6355),k=function(){var e=(0,a.r0)(a.nl.About);return(0,g.jsxs)(o.xu,{children:[(0,g.jsxs)(o.kC,{pt:"8",gap:{base:6,md:6,lg:12},direction:{base:"column",md:"row"},children:[(0,g.jsx)(o.xu,{flex:"0.35","data-aos":"fade-up",children:(0,g.jsxs)("picture",{children:[(0,g.jsx)("source",{type:"image/webp",srcSet:a.rH.common.mainPicture}),(0,g.jsx)("source",{type:"image/jpeg",srcSet:a.rH.common.mainPictureJPG}),(0,g.jsx)(i.Ee,{borderRadius:"xl",src:a.rH.common.mainPicture,w:"100%",alt:"profile image"})]})}),(0,g.jsxs)(o.xu,{flex:"0.85",children:[(0,g.jsx)(o.X6,{"data-aos":"fade-down",children:a.rH.common.name}),(0,g.jsxs)(o.kC,{alignItems:"center",children:[(0,g.jsx)(o.xv,{fontWeight:"bold",opacity:"0.5","data-aos":"fade","data-aos-delay":"200",children:a.rH.common.pronunciation}),(0,g.jsx)(s.zx,{size:"xs","aria-label":"pronunciation button",as:s.hU,variant:"icon",fontSize:"md",icon:(0,g.jsx)(v.rxG,{}),onClick:function(){new Audio(a.rH.common.audioFile).play()},"data-aos":"fade","data-aos-delay":"400"})]}),(0,g.jsx)(o.xu,{pt:"4","data-aos":"fade-up","data-aos-delay":"400",children:(0,g.jsx)(a.VY,{fontSize:"lg",children:e.about})})]})]}),(0,g.jsxs)(o.kC,{direction:{base:"column",md:"row"},gap:{base:16,md:6,lg:12},mt:"16",justifyContent:"space-between",children:[(0,g.jsx)(o.xu,{flex:"0.6",flexShrink:"0",overflow:"hidden",children:(0,g.jsx)(b,{})}),(0,g.jsx)(o.xu,{flex:"0.6",overflow:"hidden",children:(0,g.jsx)(j,{})})]}),(0,g.jsx)(o.xu,{pt:"16",children:(0,g.jsx)(S,{})})]})}},3880:function(e,t,n){n.d(t,{VY:function(){return J},nl:function(){return i},rH:function(){return Z},r0:function(){return E}});var o,i,s=n(5987),a=n(1413),r=n(9439),c=n(4942),d=n(2791),l=n(8735),u=n(63),p=JSON.parse('{"name":"Nguy\u1ec5n V\u0103n Huy","logoType":{"mobile":"NoCtrlZ","desktop":"Nguyen Van Huy"},"mainPicture":"/assets/me.png","mainPictureJPG":"/assets/me.jpg","pronunciation":"/\u014b\u02b7i\u0259n\u1d9c\xb2 van\u1d2c\xb9 h\u02b7i\u02d0\u1d2c\xb9/","audioFile":"/assets/Nguy\u1ec5n V\u0103n Huy.mp3","cssVarPrefix":"noctrlz","email":"huynd.nguyen@gmail.com","linkedin":"https://www.linkedin.com/in/noctrlz/","github":"https://github.com/NoCtrlZ1110","resume":"/assets/resume/Nguyen_Van_Huy_CV.pdf","socials":[{"type":"linkedin","link":"https://www.linkedin.com/in/noctrlz/"},{"type":"github","link":"https://github.com/NoCtrlZ1110"},{"type":"mail","link":"mailto:huynd.nguyen@gmail.com"}]}'),g=JSON.parse('{"headline":"Hello, I\'m Huy.","picture":"/assets/landing/me.webp","jpg":"/assets/landing/me.jpg"}'),h=JSON.parse('[{"id":"featured-project-tempi","title":"Tempi.vn","year":"Feb 2022 - Present","location":"Teko Vietnam","demo":"https://tempi.vn/","tags":["React","TypeScript","NextJS","NestJS","MySQL","CI/CD","Kubernetes"],"description":"Tempi.vn is a Vietnamese website that helps you create a website or landing page for free. You don\'t need to know any coding or design skills. You can use the drag-and-drop interface to create a website that looks great and is easy to use. It allows users to create and customize their own landing pages with various templates, features, and integrations. Tempi.vn is a product of Teko Vietnam and I am mainly involved in this project.","image":"/assets/featured-projects/tempi.png","jpg":"/assets/featured-projects/tempi.jpg"},{"id":"featured-project-hoclieu","title":"Hoclieu.vn","year":"2020 -  2022","location":"Sao Khue Software Services LTD","demo":"https://hoclieu.vn/","tags":["React","TypeScript",".Net Core","MySQL","i18n"],"description":"Hoclieu.vn is an online learning platform that provides Vietnamese students with access to a variety of educational resources, including textbooks, practice problems, and video lessons. It is a product developed for Vietnam Education Publishing House by Sao Khue Software Services LTD.","image":"/assets/featured-projects/hoclieu.png","jpg":"/assets/featured-projects/hoclieu.jpg"},{"id":"featured-project-easy-accommod","title":"Easy Accommod","year":"Dec 2020","location":"University of Engineering and Technology","tags":["ReactJS","TypeScript",".Net Core","MySQL"],"github":"https://github.com/NoCtrlZ1110/EasyAccommod","description":"A user-friendly accommodation search system designed to cater to the needs of both accommodation owners and renters, enabling owners to effortlessly post information and find potential tenants, while assisting renters in easily discovering the perfect accommodation that matches their specific requirements.","readMore":"https://github.com/NoCtrlZ1110/EasyAccommod","image":"/assets/featured-projects/easy-accommod.png","jpg":"/assets/featured-projects/easy-accommod.jpg"},{"id":"featured-project-sguet-news","title":"SGUET News","year":"2020","location":"Support Group University of Engineering and Technology","tags":["ReactJS","TypeScript","NodeJS"],"demo":"https://noctrlz.tech/sguet-news/","github":"https://github.com/NoCtrlZ1110/sguet-news/","description":"A tool that helps the SGUET fanpage\'s admin/editor create UET\'s news images automatically. The images will be used in news update posts that contain a lot of necessary information for UET students.","readMore":"https://noctrlz1110.github.io/sguet-news/","image":"/assets/featured-projects/sguetnews.png","jpg":"/assets/featured-projects/sguetnews.jpg"},{"id":"featured-project-uet-get-news","title":"UET - Get News","year":"2020","location":"VNU - University of Engineering & Technology","demo":"https://m.me/UETgetNews","tags":["NodeJS","Facebook","Webhook","Chatbot"],"description":"This is a chatbot on the Messenger platform. As long as a news post is released on the UET website, the chatbot sends a notification to every student who has subscribed. Show the latest news list to users. Corona tracking: tracking COVID-19 statistics in real-time and sending notifications to subscribed users.","readMore":"https://www.facebook.com/UETgetNews","image":"/assets/featured-projects/getnews.png","jpg":"/assets/featured-projects/getnews.jpg"}]'),m=JSON.parse('[{"id":"other-project-dora-jump","title":"DoraJump","year":"Jan 2019 - May 2019","github":"https://github.com/NoCtrlZ1110/DoraJump","tags":["C++","SDL2"],"description":"A funny game whose gameplay learns from the Doodle Jump game on mobile.","readMore":"https://docs.google.com/presentation/d/1WjLtebtU2DmCUH_L2BnjOLPuE25OBiu6BICSWpkE65M/edit?usp=sharing","image":"/assets/other-projects/dora-jump.png","jpg":"/assets/other-projects/dora-jump.jpg"},{"id":"other-project-tower-defense","title":"Tower Defense","year":"Dec 2019","github":"https://github.com/NoCtrlZ1110/TowerDefense","tags":["Java","SDL2"],"description":"An immersive and strategic game where players strategically construct powerful towers to fend off relentless enemies and ensure their swift defeat before they can breach the ultimate finish line.","readMore":"https://docs.google.com/document/d/1quSB1ZJkx_ctqOhkxQGB_d_EU2ZQfDO5V0YLdsMUNwQ/edit?usp=sharing","image":"/assets/other-projects/tower-defense.png","jpg":"/assets/other-projects/tower-defense.jpg"},{"id":"other-project-e-garden","title":"E-Garden","year":"2020","github":"https://github.com/NoCtrlZ1110/E-Garden","readMore":"https://docs.google.com/presentation/d/1nkrBZ-FkiwaaTJTSyJgIqTIugQtPj9AC6mGuR3kgtqU/edit?usp=sharing","tags":["Flutter",".Net Core","MySQL"],"description":"A mobile app for learning English.","image":"/assets/other-projects/e-garden.png","jpg":"/assets/other-projects/e-garden.jpg"}]'),f=JSON.parse('{"educations":[{"id":"edu-0","school":"Vietnam National University - University of Engineering and Technology","degree":"Bachelors in Infomation Technology","duration":"Aug 2018 - Jun 2022","content":["Degree: High Distinction","GPA: 3.62/4","Courses: Data Structures, OOP, Algorithms, Software Engineering, Computer Networks, Artificial Intelligence, ..."]}],"experiences":[{"id":"exp-0","company":"Teko Vietnam Technology Joint Stock Company","position":"Software Engineer","duration":"Feb 2022 - Now","description":["Being a part of an agile team, working closely with product managers, designers and technical leads to ideate, prototype, build and test new products or features.","Ensuring clean and reusable code by writing unit and functional tests and continually increasing code quality.","Collaborating with the team through discussions and brainstorming to make technical decisions.","Reviewing other people\'s code to learn and understand every piece of the system while ensuring the best code quality as a team.","Raising my standards, learned new things, and shared knowledge with the team to promote team growth.","Taking ownership of the product, constantly finding ways to improve its design, system maintainability, performance, and reliability.","Monitoring and troubleshooting application or system issues by deep diving into technical problems."]},{"id":"exp-1","company":"Sao Khue Software and Solutions LTD","position":"Software Engineer","duration":"Jan 2020 - Jan 2022","description":["Programming web application software (FE & BE).","Designing prototypes for apps and websites.","Maintaining and updating existing websites.","Helping end-users to solve operating problems.","Participating in discussions with clients."]}],"skills":[{"title":"Programming","tools":["TypeScript","JavaScript","C/C++","Java","Python","Dart","Gherkin","NoSQL","SQL"]},{"title":"Web","tools":["React","NodeJS","NextJS","NestJS","JavaScript","HTML","CSS/SCSS","i18n"]},{"title":"Databases","tools":["MySQL","MongoDB","Firebase","LevelDB"]},{"title":"OS & Tools","tools":["MacOS","Linux","Git","Docker","Kubernetes","Jira","Confluence","Slack","Postman","VSCode","IntelliJ","Android Studio"]},{"title":"Design","tools":["Figma","Adobe XD","Illustrator","Photoshop","Premiere Pro","After Effects","Lightroom"]}],"blog":[{"id":"blog-1","title":"Blog name","link":"https://google.com"}]}'),x=n(7034),y=n(7838),b=n(184),j=["children"],w=["node"],S=["node"],v=["node"],k=["ordered"],C=["node"],T=["ordered"],Z={common:p,landing:g,featuredProjects:h,otherProjects:m,about:f};!function(e){e.Landing="landing",e.About="about"}(i||(i={}));var N=(o={},(0,c.Z)(o,i.Landing,x),(0,c.Z)(o,i.About,y),o),E=function(e){var t=(0,d.useState)({landing:"",about:""}),n=(0,r.Z)(t,2),o=n[0],i=n[1];return(0,d.useEffect)((function(){fetch(N[e]).then((function(e){return e.text()})).then((function(t){return i((function(n){return(0,a.Z)((0,a.Z)({},n),{},(0,c.Z)({},e,t))}))}))}),[e]),o},J=function(e){var t=e.children,n=(0,s.Z)(e,j);return(0,b.jsx)(l.Kq,{spacing:"4",children:(0,b.jsx)(u.D,{components:{p:function(e){e.node;var t=(0,s.Z)(e,w);return(0,b.jsx)(l.xv,(0,a.Z)((0,a.Z)({},n),t))},a:function(e){e.node;var t=(0,s.Z)(e,S);return(0,b.jsx)(l.rU,(0,a.Z)({href:t.href,target:"_blank",color:"primary.200"},t))},ul:function(e){e.node;var t=(0,s.Z)(e,v),n=(t.ordered,(0,s.Z)(t,k));return(0,b.jsx)(l.QI,(0,a.Z)((0,a.Z)({},n),{},{"data-aos":"fade",listStylePosition:"inside",display:"grid",gridTemplateColumns:"repeat(2, 1fr)",listStyleType:"'\u2023 '",fontWeight:"600"}))},li:function(e){e.node;var t=(0,s.Z)(e,C),n=(t.ordered,(0,s.Z)(t,T));return(0,b.jsx)("li",(0,a.Z)({"data-aos":"flip-up","data-aos-delay":100*t.index+400},n))}},children:t})})}},3362:function(e,t,n){n.d(t,{$:function(){return s}});var o=n(8735),i=n(184),s=function(e){var t=e.id,n=e.tags,s=e.size,a=void 0===s?"sm":s;return(0,i.jsx)(o.kC,{py:"2",wrap:"wrap",gap:"4",children:n.map((function(e,n){return(0,i.jsx)(o.xu,{"data-aos":"flip-left","data-aos-delay":50*n,children:(0,i.jsx)(o.Ct,{transition:"0.2s ease-in-out",transitionProperty:"background, color",_hover:{color:"white",bg:"primary.500"},textTransform:"none",colorScheme:"gray",borderRadius:"md",px:"8px",py:"4px",fontSize:a,fontWeight:"600",children:e})},"".concat(t,"-tag-").concat(e))}))})}},7838:function(e,t,n){e.exports=n.p+"static/media/about.b196bb6fd78557fa8bf5.md"},7034:function(e,t,n){e.exports=n.p+"static/media/landing.2676445a70460decfbb7.md"}}]);
//# sourceMappingURL=488.159bb56f.chunk.js.map