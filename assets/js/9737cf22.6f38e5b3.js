(self.webpackChunkweb_docs=self.webpackChunkweb_docs||[]).push([[546],{2307:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var r=t(4848),s=t(8453),o=t(2580),a=t(4151),i=t(6353);const l={id:"system-requirements",title:"System Requirements",sidebar_label:"System Requirements"},c=void 0,d={id:"usage/system-requirements",title:"System Requirements",description:"Required Java Version",source:"@site/docs/05-usage/02-SYSTEM_REQUIREMENTS.mdx",sourceDirName:"05-usage",slug:"/usage/system-requirements",permalink:"/sc-java-maven-starter-project/docs/usage/system-requirements",draft:!1,unlisted:!1,editUrl:"https://github.com/hms-networks/sc-java-maven-starter-project/docs/05-usage/02-SYSTEM_REQUIREMENTS.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"system-requirements",title:"System Requirements",sidebar_label:"System Requirements"},sidebar:"defaultSidebar",previous:{title:"Features",permalink:"/sc-java-maven-starter-project/docs/usage/features"},next:{title:"Frequently Asked Questions",permalink:"/sc-java-maven-starter-project/docs/help/faq"}},u={},m=[{value:"Required Java Version",id:"required-java-version",level:2},{value:"Required Maven Version",id:"required-maven-version",level:2},{value:"Required Ewon Firmware Version",id:"required-ewon-firmware-version",level:2}];function h(e){const n={h2:"h2",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"required-java-version",children:"Required Java Version"}),"\n",(0,r.jsx)(o.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"required-maven-version",children:"Required Maven Version"}),"\n",(0,r.jsx)(a.Ay,{}),"\n",(0,r.jsx)(n.h2,{id:"required-ewon-firmware-version",children:"Required Ewon Firmware Version"}),"\n",(0,r.jsx)(i.Ay,{})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},6353:(e,n,t)=>{"use strict";t.d(n,{Ay:()=>l});var r=t(4848),s=t(8453),o=t(8290),a=t.n(o);function i(e){const n={a:"a",h4:"h4",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(r.Fragment,{children:["The ",a().title," requires a minimum Ewon firmware version of 14.6 or higher. Older\r\nfirmware versions may be incompatible and are not supported."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h4,{id:"installing-a-suitable-ewon-firmware-version",children:"Installing a Suitable Ewon Firmware Version"}),"\n",(0,r.jsxs)(n.p,{children:["If you do not have a suitable Ewon firmware version installed on your system, you may download and\r\ninstall one from the ",(0,r.jsx)(n.a,{href:"https://www.ewon.biz/technical-support/pages/firmware",children:"Ewon Support webpage"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Follow the instructions provided on the Ewon Support webpage for your specific Ewon device to\r\ninstall the firmware."})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},2580:(e,n,t)=>{"use strict";t.d(n,{Ay:()=>l});var r=t(4848),s=t(8453),o=t(8290),a=t.n(o);function i(e){const n={a:"a",admonition:"admonition",h4:"h4",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(r.Fragment,{children:["The ",a().title," has been designed to work with the latest versions of Java, and has\nbeen tested successfully with Java 16+. Older versions of Java may be compatible, but have not been\ntested and are not supported."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["During the Maven ",(0,r.jsx)(n.a,{href:"#package-lifecycle",children:"package lifecycle"}),", an Ewon-compatible JDK will be\nautomatically downloaded and used to compile the resulting source code. This allows for better\ncross-platform developer support, compilation consistency, and enables the use of modern Java and\nMaven environments on the host by isolating source code compilation."]})}),"\n",(0,r.jsx)(n.h4,{id:"installing-a-suitable-jdk",children:"Installing a Suitable JDK"}),"\n",(0,r.jsx)(n.p,{children:"If you do not have a suitable JDK installed on your system, follow the vendor instructions to\ndownload and install one from the following sources:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://aws.amazon.com/corretto/",children:"Amazon Corretto (recommended)"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://bell-sw.com/pages/downloads/",children:"BellSoft Liberica"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://adoptopenjdk.net/",children:"AdoptOpenJDK"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.azul.com/downloads/zulu-community/",children:"Azul Zulu"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://openjdk.java.net/",children:"OpenJDK"})}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Recommended JDK",type:"tip",children:(0,r.jsxs)(r.Fragment,{children:["If you are unsure which JDK to use, we recommend using the Amazon Corretto JDK. It is free, open\nsource, tested successfully, and is the default JDK used by the ",a().title,"\xa0\nCI/CD pipelines."]})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},4151:(e,n,t)=>{"use strict";t.d(n,{Ay:()=>l});var r=t(4848),s=t(8453),o=t(8290),a=t.n(o);function i(e){const n={a:"a",h4:"h4",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(r.Fragment,{children:["The ",a().title," has been designed to work with the latest versions of Maven, and\nhas been tested successfully with Maven 3.6.3+. Older versions of Maven may be compatible, but have\nnot been tested and are not supported."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h4,{id:"installing-a-suitable-maven-version",children:"Installing a Suitable Maven Version"}),"\n",(0,r.jsxs)(n.p,{children:["Many IDEs and build tools include Maven, and may be used to build the ",a().title,"\nwithout installing Maven directly."]}),"\n",(0,r.jsxs)(n.p,{children:["If you do not have a suitable Maven version installed on your system, or would prefer to use Maven\nmanually, follow the vendor instructions to download and install one from\nthe ",(0,r.jsx)(n.a,{href:"https://maven.apache.org/download.cgi",children:"Apache Maven webpage"}),"."]})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},8290:e=>{const n={repoOwnerName:"hms-networks",repoName:"sc-java-maven-starter-project",title:"Solution Center Java Starter Project",description:"Kick off Java development on the Ewon Flexy with the HMS Networks Solution Center Java Starter Project.",meta:"Homepage for the HMS Networks MU Americas Solution Center Java Starter Project.",configFileName:"ExampleConfigurationFile.json",applicationJarFileName:"sc-java-maven-starter-project-X.Y.Z-full.jar",commonDocRepoTargetBranchOrTag:"v1.0.0",keywords:"ewon, jtk, java, maven, project, template, build, ant, modern, structure, starting, guide, features, license, requirements, troubleshooting, support"};e.exports={...n,repoUrl:"https://github.com/"+n.repoOwnerName+"/"+n.repoName,repoArchiveUrl:"https://github.com/"+n.repoOwnerName+"/"+n.repoName+"/archive/refs/heads/main.zip",repoLatestReleaseUrl:"https://github.com/"+n.repoOwnerName+"/"+n.repoName+"/releases/latest",repoNewIssueUrl:"https://github.com/"+n.repoOwnerName+"/"+n.repoName+"/issues/new",commonDocsRepoUrl:"https://raw.githubusercontent.com/hms-networks/sc-ewon-flexy-common-docs/"+n.commonDocRepoTargetBranchOrTag+"/"}},8453:(e,n,t)=>{"use strict";t.d(n,{R:()=>a,x:()=>i});var r=t(6540);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);