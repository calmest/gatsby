(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{DxCv:function(e,a,t){"use strict";t("91GP");var n=t("q1tI"),i=t.n(n),c=t("ap0H"),s=t("9eSz"),r=t.n(s),l=t("ma3e"),o=function(e){var a=e.description,t=e.title,n=e.github,c=e.stack,s=e.url,o=e.image,m=e.index;return i.a.createElement("article",{className:"project"},o&&i.a.createElement(r.a,{fluid:o.childImageSharp.fluid,className:"project-img"}),i.a.createElement("div",{className:"project-info"},i.a.createElement("span",{className:"project-number"},"0",m+1,"."),i.a.createElement("h3",null,t||"default title"),i.a.createElement("p",{className:"project-desc"},a),i.a.createElement("div",{className:"project-stack"},c.map((function(e){return i.a.createElement("span",{key:e.id},e.title)}))),i.a.createElement("div",{className:"project-links"},i.a.createElement("a",{href:n},i.a.createElement(l.h,{className:"project-icon"})),i.a.createElement("a",{href:s},i.a.createElement(l.j,{className:"project-icon"})))))},m=t("Wbzz");a.a=function(e){var a=e.projects,t=e.title,n=e.showLink;return i.a.createElement("section",{className:"section projects"},i.a.createElement(c.a,{title:t}),i.a.createElement("div",{className:"section-center projects-center"},a.map((function(e,a){return i.a.createElement(o,Object.assign({key:e.id,index:a},e))}))),n&&i.a.createElement(m.a,{to:"/projects",className:"btn center-btn"},"projects"))}},RXBc:function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return y}));var n=t("q1tI"),i=t.n(n),c=t("7oih"),s=t("VGUv"),r=t("9eSz"),l=t.n(r),o=t("Wbzz"),m=t("PNo/"),d=function(){var e=s.data.file.childImageSharp.fluid;return i.a.createElement("header",{className:"hero"},i.a.createElement("div",{className:"section-center hero-center"},i.a.createElement("article",{className:"hero-info"},i.a.createElement("div",null,i.a.createElement("div",{className:"underline"},i.a.createElement("h1",null,"i'm Ebuka"),i.a.createElement("h4",null,"Freelance Software Engineer & Data Analyst"),i.a.createElement(o.a,{to:"/contact",className:"btn"},"contact me"),i.a.createElement(m.a,null)))),i.a.createElement(l.a,{fluid:e,className:"hero-img"})))},p=t("ap0H"),u=t("ma3e"),h=[{id:1,icon:i.a.createElement(u.e,{className:"service-icon"}),title:"web development",text:"I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia."},{id:2,icon:i.a.createElement(u.k,{className:"service-icon"}),title:"web design",text:"I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia."},{id:3,icon:i.a.createElement(u.b,{className:"service-icon"}),title:"app design",text:"I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia."}],g=function(){return i.a.createElement("section",{className:"section bg-grey"},i.a.createElement(p.a,{title:"services"}),i.a.createElement("div",{className:"section-center services-center"},h.map((function(e){var a=e.id,t=e.icon,n=e.title,c=e.text;return i.a.createElement("article",{key:a,className:"service"},t,i.a.createElement("h4",null,n),i.a.createElement("div",{className:"underline"}),i.a.createElement("p",null,c))}))))},E=(t("f3/d"),t("i1FC")),f=function(){var e=E.data.allStrapiJobs.nodes,a=i.a.useState(0),t=a[0],n=a[1],c=e[t],s=c.company,r=c.position,l=c.date,m=c.desc;return i.a.createElement("section",{className:"section jobs"},i.a.createElement(p.a,{title:"experience"}),i.a.createElement("div",{className:"jobs-center"},i.a.createElement("div",{className:"btn-container"},e.map((function(e,a){return i.a.createElement("button",{key:e.strapiId,onClick:function(){return n(a)},className:"job-btn "+(a===t&&"active-btn")},e.company)}))),i.a.createElement("article",{className:"job-info"},i.a.createElement("h3",null,r),i.a.createElement("h4",null,s),i.a.createElement("p",{className:"job-date"},l),m.map((function(e){return i.a.createElement("div",{key:e.id,className:"job-desc"},i.a.createElement(u.c,{className:"job-icon"}),i.a.createElement("p",null,e.name))})))),i.a.createElement(o.a,{to:"/about",className:"btn center-btn"},"more info"))},b=t("DxCv"),v=t("Rfp1"),y=(a.default=function(e){var a=e.data,t=a.allStrapiProjects.nodes,n=a.allStrapiBlogs.nodes;return i.a.createElement(c.a,null,i.a.createElement(d,null),i.a.createElement(g,null),i.a.createElement(f,null),i.a.createElement(b.a,{projects:t,title:"featured projects",showLink:!0}),i.a.createElement(v.a,{blogs:n,title:"latest articles",showLink:!0}))},"2179685564")},Rfp1:function(e,a,t){"use strict";t("91GP");var n=t("q1tI"),i=t.n(n),c=t("ap0H"),s=t("9eSz"),r=t.n(s),l=t("Wbzz"),o=function(e){var a=e.id,t=e.title,n=e.image,c=e.date,s=e.category,o=e.slug,m=e.desc;return i.a.createElement(l.a,{to:"/blogs/"+o,key:a,className:"blog"},i.a.createElement("article",null,n&&i.a.createElement(r.a,{fluid:n.childImageSharp.fluid,className:"blog-img"}),i.a.createElement("div",{className:"blog-card"},i.a.createElement("h4",null,t),i.a.createElement("p",null,m),i.a.createElement("div",{className:"blog-footer"},i.a.createElement("p",null,s),i.a.createElement("p",null,c)))))};a.a=function(e){var a=e.blogs,t=e.title,n=e.showLink;return i.a.createElement("section",{className:"section"},i.a.createElement(c.a,{title:t}),i.a.createElement("div",{className:"section-center blogs-center"},a.map((function(e){return i.a.createElement(o,Object.assign({key:e.id},e))}))),n&&i.a.createElement(l.a,{to:"/blog",className:"btn center-btn"},"blog"))}},VGUv:function(e){e.exports=JSON.parse('{"data":{"file":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEZ0lEQVQ4y32UXUxjRRSAp626iQ8YWNAHEvBFSYiAxgSWxMBuYOMLPmwUF7OAsOVlERJjIiEBYkiAYMCyZJUgsKySKEK3tBT7c9ve/gMt0C4UCrSFFggUsoAY/q3tHOfetqxE4iQnczIz57vn7x6E/r3E6he7RMPsHLJzrxHhjNJcNKbnIJkJIWoy/E4xjq5erLEmqnM4Eg0PIHDlUwCEeJTlJaS1c18ed4YP9bNXeBXWeZes+yTx6IkkDSkmbyD5ZBr6SX790v3EEpc7ucyJ6AhNryD0oZwOX46ouWEP6deQSP3VqxK14ZZS/2eVYSLEF0mhRCwLfUSPHyRqp/WIsjYinf2dKJdrdYdtbb7IiSgCG1HfJl5uFpqmQDxtA4fdDr0PO+CL0hL4soIPxXc/heaePrhnmQUScgiZnT/HjDtjWdspD/eyZyL1zetSGh6ZJsBhMgZc846goKMDv5WSgj8rLsY5N2/huPh4/MGNrKBF9vvftTIVRgt+IKD5azZfHMuY8XJIkoHVk6WaiWHrNCyMm//SmUyw4HTisrIyXFdXh9fX12FzcxOkUilOS0/HP/zYg60KOf6c0p8j7yHwnq33shD7WqQGIlVCt0Z7bDMZQWswYqPRiOfm5nBNTQ00NTVBV1cXdHZ2QmVlJaSnp0Pf436spig8JBaHXrd7Ac37t2IdGy8KpqLp9w06XUir14Ner8cGgwHPzMxAd3c39Pb2wvDwMAgEAuDz+ZCVlcWey5QUpp4KcZ75GaCl52cxC1spF0CNRpOv0+lAq9VismMGarVaQSKRsJ4x0tDQAM3NzZCamgrl5eUwMjqKlU+FoRK9BZBr7yDW6X/zAkhRVCKlUh3TNA1EMCMWiwUPDQ1BdXU1VFVVQU5ODmRnZ0NcXBzk5uZiwcNOLP/t1+B9sw2Q58AOPd+F+1GhULBVlsvlT0ykGAQeUKlUYDabsVAohMLCQmhvb4fS0lJITk6GhIQEyM/Px1/X1sIvXd8H7s4sAvId17Aw1y4PjY2NsWSpdCyRVPEPpVIJBB4kYBCJRJjJW0ZGBhtqZmYmJCUl4by8PHhQWRn8lqTgNmWykVZ5hQW69yO/r0TCllssFt+RyWQMCKampoLLy8vQQXqxoqICFxQUQFFREW5pacEDAwO4ra0NvmlsDPI7Hr3H2N7rfsyL5i9aGPZgcHDwAdN3kRUg+QzV19djkkvc398PDocDk548Pzs7A5fLJWRtA8Bju9m1x4QqZYHb29uI9B43PFHgzvn5+XOGeHR0xEBCpEhBj8cTXF1dDe3u7sLa2to2gSYx71c8Hs6loUGqye6Li4uIhMxCd3Z23iCG7RsbG76trS1ghOhAgOB2u+mlpaW3Izbs+9bW1stz7uTk5EI/PT29GGM+ny9mZWUli+TzEyIfE9i70TuSGhbm9/uvnrMkPLS/H67U4eEhZ29vj3fVOwZAPsLCiMfMR9H/LhIemp2djXrB8Xq9XFIAHvGQR/LI6OEucbv/Y/sPi/ridBqaddEAAAAASUVORK5CYII=","aspectRatio":1,"src":"/static/785405c783d5a741e83b333e323ce15d/ee604/hero-img.png","srcSet":"/static/785405c783d5a741e83b333e323ce15d/69585/hero-img.png 200w,\\n/static/785405c783d5a741e83b333e323ce15d/497c6/hero-img.png 400w,\\n/static/785405c783d5a741e83b333e323ce15d/ee604/hero-img.png 800w,\\n/static/785405c783d5a741e83b333e323ce15d/f3583/hero-img.png 1200w,\\n/static/785405c783d5a741e83b333e323ce15d/5707d/hero-img.png 1600w,\\n/static/785405c783d5a741e83b333e323ce15d/90136/hero-img.png 1952w","sizes":"(max-width: 800px) 100vw, 800px"}}}}}')},i1FC:function(e){e.exports=JSON.parse('{"data":{"allStrapiJobs":{"nodes":[{"strapiId":2,"company":"TechBunk","date":"February 2018 - July 2019","position":"Data Analyst","desc":[{"id":4,"name":"Worked with crypto investors to identify fraudulent ICOs and STOs. I did this by analyzing data sets from many ICO/STO companies using Python data analysis and machine learning library SciKitLearn."},{"id":8,"name":"Enhanced overall customer behavioral profile and improved organizational capability for optimized next best action."},{"id":9,"name":"Actively participated in programs that set to measure marketing campaigns and interacted with business stakeholders to identify how learnings can be effectively applied."},{"id":10,"name":"Monitored the web behavior of customers across different platforms using google analytics, which helped to measure the impact of various marketing channels."},{"id":5,"name":"Articulated data insights and impact to business stakeholders effectively, with less emphasis on technical details and more focus on commercial implications."},{"id":6,"name":"Developed a passion for acquiring, manipulating and modelling data to improve experience that customers receive."},{"id":7,"name":"Showed exceptional attention to detail and statistical knowledge to build accurate and scalable datasets and analysis as well as delivered impactful results and insights."}]},{"strapiId":1,"company":"ICompass Academy HQ","date":"September 2015 - January 2018","position":"Software/Data Engineer","desc":[{"id":1,"name":"My team and I worked with large numerical data sets, essentially carrying out statistical and inferential analytic operations using Python. I examine if multiple data sets were positively or negatively correlated to understand the relationship between various data sets which was useful in creating insights to aid senior management staff in decision making."},{"id":3,"name":"I worked with multiple clients to create, develop and maintain technical roadmaps to help them meet estimated quarterly deadlines."},{"id":2,"name":"I actively engaged in service capacity planning, demand forecasting, software performance analysis, and system tuning."}]}]}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-980b095947350e30d942.js.map