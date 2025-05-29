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
        },{id: "post-",
      
        title: "",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/2024-01-19-cvpr-en/";
        
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
    },{id: "post-some-stray-thoughts-after-leaving-the-large-model-industry-gemini-2-5-pro-translated-version",
      
        title: "Some Stray Thoughts After Leaving the Large Model Industry (Gemini 2.5 Pro Translated...",
      
      description: "Mai-Haishin · March 30, 2025 04:23 · Guangdong",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/leave-en/";
        
      },
    },{id: "post-离开大模型业界后的一点杂念",
      
        title: "离开大模型业界后的一点杂念",
      
      description: "蚂蚁海星 · 2025年03月30日 04:23 · 广东",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/leave-cn/";
        
      },
    },{id: "post-large-models-and-coin-minting-continued-gemini-2-5-pro-translated-version",
      
        title: "Large Models and Coin Minting, Continued (Gemini 2.5 Pro Translated Version)",
      
      description: "Mai-Haishin · March 30, 2025 04:23 · Guangdong",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/coinb-en/";
        
      },
    },{id: "post-大模型与铸币-再",
      
        title: "大模型与铸币・再",
      
      description: "蚂蚁海星 · 2025年03月30日 04:23 · 广东",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/coinb-cn/";
        
      },
    },{id: "post-large-models-and-coin-minting",
      
        title: "Large Models and Coin Minting",
      
      description: "Mai-Haishin · January 05, 2025 22:05 · Guangdong",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/coin-en/";
        
      },
    },{id: "post-大模型与铸币",
      
        title: "大模型与铸币",
      
      description: "蚂蚁海星 · 2025年01月05日 22:05 · 广东",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/coin-cn/";
        
      },
    },{id: "post-what-the-heck-is-tom-schaul-39-s-socratic-learning-even-talking-about",
      
        title: "What the Heck is Tom Schaul&#39;s SOCRATIC LEARNING Even Talking About?",
      
      description: "Mai-Haishin · December 25, 2024 18:51 · Guangdong",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/socratic-en/";
        
      },
    },{id: "post-汤姆-绍尔的苏格拉底式学习-socratic-learning-讲的是什么牛子玩意",
      
        title: "汤姆・绍尔的苏格拉底式学习（SOCRATIC LEARNING）讲的是什么牛子玩意",
      
      description: "蚂蚁海星 · 2024年12月25日 18:51 · 广东",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/socratic-cn/";
        
      },
    },{id: "post-large-models-are-just-another-quot-converting-rice-paddies-to-mulberry-fields-quot-gemini-2-5-pro-translated-version",
      
        title: "Large Models Are Just Another &quot;Converting Rice Paddies to Mulberry Fields&quot; (Gemini 2.5...",
      
      description: "Mai-Haishin · November 13, 2024 20:38 · Guangdong",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/ricetomulberry-en/";
        
      },
    },{id: "post-大模型无非就是另一场改稻为桑罢了",
      
        title: "大模型无非就是另一场改稻为桑罢了",
      
      description: "蚂蚁海星 · 2024年11月13日 20:38 · 广东",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/ricetomulberry-cn/";
        
      },
    },{id: "post-审稿cvpr而致的伤痕文学-没落的顶会与空虚的文章",
      
        title: "审稿CVPR而致的伤痕文学：没落的顶会与空虚的文章",
      
      description: "蚂蚁海星 · 2024年01月19日 18:57・广东",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/cvpr-cn/";
        
      },
    },{id: "post-what-kind-of-ai-articles-are-good-articles-gemini-2-5-pro-translated-version",
      
        title: "What Kind of AI Articles Are Good Articles? (Gemini 2.5 Pro Translated Version)...",
      
      description: "Mai-Haishin · December 31, 2023, 00:11 · HongKong",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/goodarticle-en/";
        
      },
    },{id: "post-ai方向什么样的文章是好文章",
      
        title: "AI方向什么样的文章是好文章？",
      
      description: "蚂蚁海星 · 2023年12月31日 00:11・中国香港",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/goodarticle-cn/";
        
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
