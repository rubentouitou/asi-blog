import{f as y,g}from"./groq.51e895fc.js";import{_ as f}from"./_plugin-vue_export-helper.c27b6911.js";import{k as e,l as a,m as _,t as r,z as c,A as i,B as x,d as k,C as b,D as w,F as C,E as S,G as u}from"./entry.99fb06b2.js";const A={props:{post:{type:Object,required:!0}}},D={key:0,class:"card"},L=["src"],$={key:1,class:"card__cover--none"},B={class:"card__container"},N={class:"card__title"},I=["href"],V={class:"card__excerpt"},q={class:"card__date"};function F(o,s,t,d,n,m){return t.post?(e(),a("div",D,[t.post.mainImage?(e(),a("img",{key:0,class:"card__cover",src:o.$urlFor(t.post.mainImage).width(500).height(300).url(),alt:"Cover image"},null,8,L)):(e(),a("div",$)),_("div",B,[_("h3",N,[_("a",{class:"card__link",href:`/post/${t.post.slug.current}`},r(t.post.title),9,I)]),_("p",V,r(t.post.excerpt),1),_("p",q,r(("formatDate"in o?o.formatDate:c(y))(t.post._createdAt)),1)])])):i("",!0)}const E=f(A,[["render",F],["__scopeId","data-v-64605c87"]]),R=""+globalThis.__publicAssetsURL("nuxt.svg"),T=""+globalThis.__publicAssetsURL("sanity.svg");const U={},W={class:"container"},j=x('<div class="logos" data-v-2e4f6253><div class="logos__blur" data-v-2e4f6253></div><img class="logos__entry" src="'+R+'" alt="Nuxt Logo" data-v-2e4f6253><span class="logos__plus" data-v-2e4f6253>+</span><img class="logos__entry" src="'+T+'" alt="Sanity Logo" data-v-2e4f6253></div><div class="steps" data-v-2e4f6253><h2 class="steps__title" data-v-2e4f6253>Next steps</h2><ul class="steps__list" data-v-2e4f6253><li class="steps__entry" data-v-2e4f6253><h3 class="steps__subtitle" data-v-2e4f6253>Publish a post in your Studio</h3><p class="steps__text" data-v-2e4f6253> Visit the Sanity Studio and publish a new document of type post. </p></li><li class="steps__entry" data-v-2e4f6253><h3 class="step__title" data-v-2e4f6253>Dive into the documentation</h3><p class="steps__text" data-v-2e4f6253> Check out  <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.sanity.io/docs" data-v-2e4f6253> the documentation </a>  to learn more about Sanity. </p></li><li class="steps__entry" data-v-2e4f6253><h3 class="steps__subtitle" data-v-2e4f6253>Join the Sanity Community</h3><p class="steps__text" data-v-2e4f6253> Leverage  <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.sanity.io/exchange/community" data-v-2e4f6253> our awesome community </a> , and share tips and discuss! </p></li></ul></div>',2),z=[j];function G(o,s){return e(),a("div",W,z)}const J=f(U,[["render",G],["__scopeId","data-v-2e4f6253"]]),O={class:"posts"},M=k({__name:"index",async setup(o){let s,t;const d=g`*[ _type == "post" && defined(slug.current) ] | order(_createdAt desc)`,{data:n}=([s,t]=b(()=>w(d)),s=await s,t(),s);return(m,P)=>{var l;const h=E,v=J;return e(),a("section",O,[c(n)?(e(!0),a(C,{key:0},S(c(n),p=>(e(),u(h,{key:p._id,post:p},null,8,["post"]))),128)):i("",!0),((l=c(n))==null?void 0:l.length)===0?(e(),u(v,{key:1})):i("",!0)])}}});export{M as default};