// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-nanshan-jokes-collection-gemini-2-5-pro-translated-version",
      
        title: "Nanshan Jokes Collection (Gemini 2.5 Pro Translated Version)",
      
      description: "Mai-Haishin · March 30, 2025, 21:57 · Guangdong",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/jokes-en/";
        
      },
    },{id: "post-南山笑话集锦",
      
        title: "南山笑话集锦",
      
      description: "蚂蚁海星 · 2025年03月30日 21:57・广东",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/jokes-cn/";
        
      },
    },{id: "post-a-metaphysical-look-at-sparsely-gated-mixture-of-experts-gemini-2-5-pro-translated-version",
      
        title: "A Metaphysical Look at Sparsely-Gated Mixture of Experts (Gemini 2.5 Pro Translated Version)...",
      
      description: "Mai-Haishin · September 07, 2023 19:53 · Jiangsu",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/moe-en/";
        
      },
    },{id: "post-形而上地看sparsely-gated-mixture-of-experts",
      
        title: "形而上地看Sparsely-Gated Mixture of Experts",
      
      description: "蚂蚁海星 · 2023年09月07日 19:53 · 江苏",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/moe-cn/";
        
      },
    },{id: "post-when-your-model-sucks-as-much-as-your-life-gemini-2-5-pro-translated-version",
      
        title: "When Your Model Sucks as Much as Your Life (Gemini 2.5 Pro Translated...",
      
      description: "Mai-Haishin · September 6, 2023, 19:33 · Beijing",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/model-en/";
        
      },
    },{id: "post-当你的模型与你的人生一样糟心",
      
        title: "当你的模型与你的人生一样糟心",
      
      description: "蚂蚁海星 · 2023年09月06日 19:33・北京",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/model-cn/";
        
      },
    },{id: "post-vision-large-models-are-utterly-useless-gemini-2-5-pro-translated-version",
      
        title: "Vision Large Models Are Utterly Useless (Gemini 2.5 Pro Translated Version)",
      
      description: "Mai-Haishin · June 29, 2023, 21:15 · Guangdong",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/vision-en/";
        
      },
    },{id: "post-视觉大模型一无是处",
      
        title: "视觉大模型一无是处",
      
      description: "蚂蚁海星 · 2023年06月29日 21:15 · 广东",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/vision-cn/";
        
      },
    },{id: "post-scoffing-at-a-certain-company-0-3-parsecs-away-gemini-2-5-pro-translated-version",
      
        title: "Scoffing at a Certain Company 0.3 Parsecs Away (Gemini 2.5 Pro Translated Version)...",
      
      description: "Mai-Haishin · June 26, 2023, 13:32 · Guangdong",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/lightyear-en/";
        
      },
    },{id: "post-冷嘲热讽一下某0-3秒差距之外的公司",
      
        title: "冷嘲热讽一下某0.3秒差距之外的公司",
      
      description: "蚂蚁海星 · 2023年06月26日 13:32 · 广东",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/lightyear-cn/";
        
      },
    },{id: "post-so-just-how-bad-is-this-quot-administrative-measures-for-generative-artificial-intelligence-services-draft-for-solicitation-of-comments-quot-gemini-2-5-pro-translated-version",
      
        title: "So, Just How Bad is This &quot;Administrative Measures for Generative Artificial Intelligence Services...",
      
      description: "Mai-Haishin · May 8, 2023, 20:05 · Guangdong",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/comments-en/";
        
      },
    },{id: "post-所以这次的-生成式人工智能服务管理办法-征求意见稿-到底有多糟糕",
      
        title: "所以这次的《生成式人工智能服务管理办法（征求意见稿）》到底有多糟糕？",
      
      description: "蚂蚁海星 · 2023年05月08日 20:05 · 广东",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/comments-cn/";
        
      },
    },{id: "post-attempting-to-alleviate-some-of-the-anxiety-brought-by-llms-gemini-2-5-pro-translated-version",
      
        title: "Attempting to Alleviate Some of the Anxiety Brought by LLMs (Gemini 2.5 Pro...",
      
      description: "Mai-Haishin · April 24, 2023, 21:04 · Guangdong",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/anxiety-en/";
        
      },
    },{id: "post-尝试为大家消除一些llm带来的焦虑感",
      
        title: "尝试为大家消除一些LLM带来的焦虑感",
      
      description: "蚂蚁海星 · 2023年04月24日 21:04 · 广东",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/anxiety-cn/";
        
      },
    },{id: "post-chinese-academic-institutions-are-polluting-the-international-academic-community-with-low-quality-peer-reviews-gemini-2-5-pro-translated-version",
      
        title: "Chinese Academic Institutions Are Polluting the International Academic Community with Low-Quality Peer Reviews...",
      
      description: "Mai-Haishin · March 20, 2023, 01:13 · Guangdong",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/review-en/";
        
      },
    },{id: "post-中国学术机构正在以输出垃圾审稿意见的方式污染国际学术圈",
      
        title: "中国学术机构正在以输出垃圾审稿意见的方式污染国际学术圈",
      
      description: "蚂蚁海星 · 2023年03月20日 01:13 · 广东",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/review-cn/";
        
      },
    },{id: "news-i-joined-the-tohoku-nlp-group-as-a-specially-appointed-associate-professor",
          title: 'I joined the Tohoku NLP Group as a specially appointed associate professor.',
          description: "",
          section: "News",},{id: "news-our-paper-mitigating-visual-forgetting-via-take-along-visual-conditioning-for-multi-modal-long-cot-reasoning-has-been-accepted-into-acl-2025-main-conference",
          title: 'Our paper Mitigating Visual Forgetting via Take-along Visual Conditioning for Multi-modal Long CoT...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%68%75%6E%73%75%6E<%61>%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-facebook',
        title: 'Facebook',
        section: 'Socials',
        handler: () => {
          window.open("https://facebook.com/zhunsun", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/minogame", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Y-3iZ9EAAAAJ", "_blank");
        },
      },{
        id: 'social-wechat_qr',
        title: 'Wechat_qr',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
