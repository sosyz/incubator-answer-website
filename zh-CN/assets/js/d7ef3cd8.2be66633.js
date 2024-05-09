"use strict";(self.webpackChunkanswer=self.webpackChunkanswer||[]).push([[7944],{1430:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=t(43010),i=t(90887);const s={sidebar_label:"Blog Post",slug:"/blog-post"},r="Contribute a Blog Post",l={id:"contributing/blog-post",title:"Contribute a Blog Post",description:"Blogs are one of the easiest ways to get involved in Apache Answer. It is also a great way to share your knowledge and experience with others.",source:"@site/community/contributing/blog-post.md",sourceDirName:"contributing",slug:"/blog-post",permalink:"/zh-CN/community/blog-post",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/answer-website/zh-CN",tags:[],version:"current",lastUpdatedBy:"PrimmaAnna",lastUpdatedAt:1715242990,formattedLastUpdatedAt:"2024\u5e745\u67089\u65e5",frontMatter:{sidebar_label:"Blog Post",slug:"/blog-post"},sidebar:"community",previous:{title:"Translation",permalink:"/zh-CN/community/translation"},next:{title:"How to Release",permalink:"/zh-CN/community/how-to-release"}},a={},d=[{value:"Repository address",id:"repository-address",level:2},{value:"Blog directory",id:"blog-directory",level:2},{value:"Blog categories",id:"blog-categories",level:2},{value:"Submit a blog",id:"submit-a-blog",level:2},{value:"Environment setup",id:"environment-setup",level:3},{value:"Add author information",id:"add-author-information",level:3},{value:"Process",id:"process",level:3},{value:"Others",id:"others",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"contribute-a-blog-post",children:"Contribute a Blog Post"}),"\n",(0,o.jsxs)(n.p,{children:["Blogs are one of the easiest ways to ",(0,o.jsx)(n.a,{href:"/community/contributing#get-involved",children:"get involved"})," in Apache Answer. It is also a great way to share your knowledge and experience with others."]}),"\n",(0,o.jsx)(n.p,{children:"If you've used Answer to build your own Q&A community, or if Answer has helped you solve a problem, we'd love to hear your story. We also encourage you to share tips and tricks for using Answer, or to write about how to contribute to the project."}),"\n",(0,o.jsx)(n.p,{children:"To get started, just read our blog guidelines and get writing!"}),"\n",(0,o.jsx)(n.h2,{id:"repository-address",children:"Repository address"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://github.com/apache/incubator-answer-website",children:"GitHub"}),": Write and store blog posts."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://crowdin.com/project/answer-website",children:"Crowdin"}),": Translate blog posts into multiple languages to make them more accessible to a wider audience."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"blog-directory",children:"Blog directory"}),"\n",(0,o.jsx)(n.p,{children:"Blogs are currently available in two languages: English (default) and Chinese. If you're submitting a Chinese blog, you need to manually copy it to the /blog directory to prevent compilation errors. If you're only submitting English blogs, you don't need to do anything else."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["English blogs: ",(0,o.jsx)(n.code,{children:"/blog"})]}),"\n",(0,o.jsxs)(n.li,{children:["Chinese blogs: ",(0,o.jsx)(n.code,{children:"/i18n/docusaurus-plugin-content-blog"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"We've integrated with Crowdin, which automatically syncs files that need to be translated. This makes it easier for community contributors to get involved in the translation."}),"\n",(0,o.jsx)(n.h2,{id:"blog-categories",children:"Blog categories"}),"\n",(0,o.jsx)(n.p,{children:"Our current blog categories are:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Community"}),"\n",(0,o.jsx)(n.li,{children:"Best Practices"}),"\n",(0,o.jsx)(n.li,{children:"Tutorials"}),"\n",(0,o.jsx)(n.li,{children:"Insights"}),"\n",(0,o.jsx)(n.li,{children:"Releases"}),"\n",(0,o.jsx)(n.li,{children:"Tech"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Besides submitting a new blog, you can also help maintain existing blog content by identifying and correcting any incorrect or unclear language, or updating the content to reflect the latest information."}),"\n",(0,o.jsx)(n.h2,{id:"submit-a-blog",children:"Submit a blog"}),"\n",(0,o.jsx)(n.h3,{id:"environment-setup",children:"Environment setup"}),"\n",(0,o.jsxs)(n.p,{children:["The project preview and run depend on ",(0,o.jsx)(n.a,{href:"https://nodejs.org",children:"node"})," and ",(0,o.jsx)(n.a,{href:"https://pnpm.io",children:"pnpm"}),". Please install them in advance."]}),"\n",(0,o.jsx)(n.h3,{id:"add-author-information",children:"Add author information"}),"\n",(0,o.jsx)(n.p,{children:"All author information is stored in the following files:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"/blog/authors.yml"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"/i18n/docusaurus-plugin-content-blog/authors.yml"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"You can add information to display about yourself in these files. Here\u2019s an example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="/blog/authors.yml"',children:"Anne:\n  name: Anne Zhu \n  title: Product Marketing Manager\n  url: https://github.com/PrimmaAnna\n  image_url: https://avatars.githubusercontent.com/u/131739771?v=4\n\n# Use in the blog's frontMeta\n---\nauthors: [Anne]  # separate with commas [Anne, others]\n---\n"})}),"\n",(0,o.jsx)(n.h3,{id:"process",children:"Process"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Make sure to put the new blog documents in the correct path."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"For English blog"}),": Create a new Markdown file in the ",(0,o.jsx)(n.code,{children:"/blog"})," directory."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"For Chinese blog"}),": Create a new Markdown file in the ",(0,o.jsx)(n.code,{children:"/i18n/zh-CN/docusaurus-plugin-content-blog/"})," directory."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["To ensure that the final article URL follows a format like ",(0,o.jsx)(n.code,{children:"/blog/2023/06/01/hello-world"}),", we've established the following naming convention for each article file:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Plain Text"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Directly create a file named\xa0",(0,o.jsx)(n.code,{children:"2023-06-01-hello-world.md"}),"\xa0in the\xa0",(0,o.jsx)(n.code,{children:"/blog"}),"\xa0directory."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Rich Text"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Create a directory named\xa0",(0,o.jsx)(n.code,{children:"/2023-06-01-foo-bar"}),"\xa0in the\xa0",(0,o.jsx)(n.code,{children:"/blog"}),"\xa0directory."]}),"\n",(0,o.jsxs)(n.li,{children:["Create an ",(0,o.jsx)(n.code,{children:"index.md"})," file inside the\xa0",(0,o.jsx)(n.code,{children:"/2023-06-01-foo-bar"}),"\xa0directory."]}),"\n",(0,o.jsx)(n.li,{children:"Images and other multimedia content should also be placed within this directory."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"To maintain semantic and unique article URLs, we recommend using the blog's title after the date when naming files or folders. Convert the title to lowercase and connect the words with hyphens. This eliminates the need to worry about the slug field on the page. Avoid specifying the slug field unless it's absolutely necessary."}),"\n",(0,o.jsxs)(n.p,{children:["For instance, if the blog's title is ",(0,o.jsx)(n.code,{children:"Hello World"}),", the file can be named ",(0,o.jsx)(n.code,{children:"2023-06-01-hello-world"})," This will generate the URL ",(0,o.jsx)(n.code,{children:"/blog/2023-06-01/hello-world"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"blog\n\u251c\u2500\u2500 2023-06-01-foo-bar  # Use directory for images.\n\u2502   \u251c\u2500\u2500 index.md\n\u2502   \u251c\u2500\u2500 sample.png\n\u2502   \u2514\u2500\u2500 ... \n\u251c\u2500\u2500 2023-06-01-hello-world.md  # Use file for plain text.\n\u2514\u2500\u2500 ...\n"})}),"\n",(0,o.jsxs)(n.p,{children:["To ensure file compatibility across platforms, please avoid using special characters ",(0,o.jsx)(n.code,{children:"/ ? * : | \\ < > & #"})," in file names."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Learn Markdown syntax in ",(0,o.jsx)(n.a,{href:"https://docusaurus.io/docs/markdown-features",children:"Docusaurus Markdown"}),". If images are included, make sure the images and the blog are in the same directory ."]}),"\n",(0,o.jsx)(n.p,{children:'Apart from the standard metadata fields, we\'ve also introduced some custom fields and their usage, such as "cover image" (image) and "featured post" (Featured).'}),"\n",(0,o.jsx)(n.p,{children:"The cover image needs to adhere to our visual style guidelines, so you can focus on writing your blog post. Once submitted, we'll automatically generate a cover image based on your content."}),"\n",(0,o.jsxs)(n.p,{children:['The "featured" field determines whether your blog post appears on the ',(0,o.jsx)(n.a,{href:"/blog",children:"Blog"}),' homepage. To have your blog post featured, set the "featured" field to "true".']}),"\n",(0,o.jsx)(n.p,{children:"Check the example below."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'title: The What, Why Using Tags for Online Community\nauthors: [Anne]\ncategory: Insights // value reference in blog type\nfeatured: true\nimage: 2023-07-11-cover@4x.png // Note: place it in the /static/img/blog directory.\ndescription: "Discover more about tags, benefits, and how vital they are for organizing content in online community."\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Before submitting your code, please ensure that it runs error-free. You can check it by running the following commands."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'# Preview locally\npnpm start  # to preview the Chinese docs, run pnpm start:zh)\n\n# Locally compile to ensure no errors before submitting\npnpm build # no errors when display [SUCCESS] Generated static files in "build/zh-CN"\n'})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"others",children:"Others"}),"\n",(0,o.jsxs)(n.p,{children:["For code submitting, you may also need to learn ",(0,o.jsx)(n.a,{href:"https://git-scm.com/",children:"Git"})," and ",(0,o.jsx)(n.a,{href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork",children:"Pull Request"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},90887:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var o=t(85170);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);