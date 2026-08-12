"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#education", label: "教育背景" },
  { href: "#experience", label: "实习经历" },
  { href: "#projects", label: "项目作品" },
  { href: "#skills", label: "技能与奖项" },
];

const experiences = [
  {
    period: "2025/09—2025/11",
    company: "海康威视 · 萤石网络",
    department: "云服务产品部",
    role: "体验设计师",
    points: [
      "参与萤石EZVIZ智能家居APP迭代，负责“智能安防与首页”模块的用户分析、PRD 拆解、信息架构及交互方案。",
      "基于行为数据与用户反馈定位功能边界和使用路径问题，协同产品、视觉与研发完成评审、开发跟进及验收，推动首页框架、动态布局与模块化方案上线。",
    ],
  },
  {
    period: "2025/04-至今",
    company: "浙江自贸区（宁波）人力资源赋能研究院",
    department: "服务设计部",
    role: "研究助理",
    points: [
      "在导师带领下，与人社部、社区与研究院合作，面向制造业企业 HR 与员工体验场景开展用户研究，组织企业、社区、人社干部开展共创工作坊创新方案迭代与项目落地，相关实践获评“2025 全国用户体验创新典型案例”。",
      "2026年3月于赋能研究院实习，同时开展毕业论文的开题与调研。",
    ],
  },
  {
    period: "2024/06—08",
    company: "浙江网新恒天软件有限公司",
    department: "EC",
    role: "产品策划",
    points: [
      "参与星巴克圣诞营销与必胜客排班系统两个数字化项目，负责客户需求梳理、用户研究、业务流程拆解及方案策划。",
      "将业务需求转化为功能框架、用户流程与交互原型，协同设计团队完成方案交付；其中星巴克项目团队方案成功中标，必胜客排班系统设计已上线。",
    ],
  },
  {
    period: "2024/02—06",
    company: "致家家居（杭州）有限公司",
    department: "家具设计部",
    role: "产品设计师",
    points: [
      "根据品牌定位及规划开发新产品，参与家具产品从市场分析、产品定位、产品设计到上市的全流程，覆盖价格带分析、材料选择及成本控制。",
      "协同供应商推进打样与样品测试，完成 2 款产品上市，累计销售额超 200 万元。",
    ],
  },
];

const createDetailPages = (project: string, count: number) =>
  Array.from({ length: count }, (_, index) => `/assets/projects/${project}-details/page-${index + 1}.jpg`);

const projects = [
  {
    index: "05",
    title: "动物大作战｜儿童体感互动游戏 App",
    date: "2025",
    category: "产品策划 · 交互优化 · AI 辅助 Demo 开发",
    description:
      "面向 5—12 岁儿童，通过动物动作模仿、任务挑战、即时反馈与宠物养成机制提升持续运动意愿。参与需求拆解、项目排期及版本迭代，并使用 Cursor AI 推进本地可运行 Demo 的功能落地。",
    result: "移动应用创新赛国赛二等奖",
    images: [
      "/assets/projects/animal-overview.jpg",
      "/assets/projects/animal-ui.jpg",
      "/assets/projects/animal-growth.jpg",
    ],
    detailPages: createDetailPages("animal", 24),
    href: "https://www.kdocs.cn/l/ccV9ooOuInI2",
    tone: "lime",
  },
  {
    index: "01",
    title: "萤石海外版 App 框架重构",
    date: "2025.09.03",
    category: "用户分析 · PRD 拆解 · 信息架构 · 交互方案",
    description:
      "基于行为数据识别智能页点击不足、首页功能边界模糊及增值服务曝光不足等问题，提出核心功能迁移、动态布局与模块化扩展策略，在用户体验与商业转化之间建立平衡。",
    result: "负责模块现已上线",
    images: [
      "/assets/projects/ezviz-cover.jpg",
      "/assets/projects/ezviz-framework.jpg",
      "/assets/projects/ezviz-layout.jpg",
    ],
    detailPages: createDetailPages("ezviz", 9),
    href: "https://www.kdocs.cn/l/ccV9ooOuInI2",
    tone: "blue",
  },
  {
    index: "03",
    title: "星巴克中国｜圣诞节活动策划",
    date: "2024.09.09",
    category: "用户洞察 · 活动策略 · H5 用户流程",
    description:
      "围绕用户送礼洞察与节日特性，策划常驻与单次 H5 活动创意；通过送礼、互动装饰、成长反馈、公益与线下权益，形成从社交互动到消费转化的体验闭环。",
    result: "团队方案成功中标并上线",
    images: [
      "/assets/projects/starbucks-details/page-1.jpg",
      "/assets/projects/starbucks-details/page-5.jpg",
      "/assets/projects/starbucks-details/page-8.jpg",
    ],
    detailPages: createDetailPages("starbucks", 8),
    href: "https://www.kdocs.cn/l/ccV9ooOuInI2",
    tone: "red",
  },
  {
    index: "04",
    title: "必胜客员工排班系统设计",
    date: "2024.08.14",
    category: "需求梳理 · 用户访谈 · 交互原型",
    description:
      "针对门店角色多、兼职比例高、班次变化频繁以及原 PC 系统可用性不足的问题，梳理店长和值班经理的排班流程，将业务需求转化为移动端信息框架与编辑交互。",
    result: "面向高密度排班场景提升可读性与操作效率",
    images: [
      "/assets/projects/pizza-details/page-1.jpg",
      "/assets/projects/pizza-details/page-6.jpg",
      "/assets/projects/pizza-details/page-7.jpg",
      "/assets/projects/pizza-details/page-8.jpg",
      "/assets/projects/pizza-details/page-9.jpg",
    ],
    detailPages: createDetailPages("pizza", 9),
    href: "https://www.kdocs.cn/l/ccV9ooOuInI2",
    tone: "orange",
  },
  {
    index: "02",
    title: "致家家居｜家具产品开发",
    date: "2024.06.01",
    category: "市场研究 · 产品定义 · BOM 与成本协同 · 上市推进",
    description:
      "从市场机会识别、竞品与用户研究开始，参与材料、结构、BOM、供应商沟通、打样和样品测试，建立从产品定义到上市验证的完整开发闭环。",
    result: "2 款产品上市 · 累计销售额超 200 万元",
    images: [
      "/assets/projects/furniture-cover.jpg",
      "/assets/projects/furniture-results.jpg",
      "/assets/projects/furniture-design.jpg",
      "/assets/projects/furniture-details/page-4.jpg",
      "/assets/projects/furniture-details/page-7.jpg",
    ],
    detailPages: createDetailPages("furniture", 7),
    href: "https://www.kdocs.cn/l/ccV9ooOuInI2",
    tone: "brown",
  },
  {
    index: "06",
    title: "弗兰卡学习文化服务体验设计",
    date: "服务设计研究",
    category: "深度访谈 · 扎根理论 · 用户旅程 · 服务蓝图",
    description:
      "从员工动力不足、学习转化困难与经理赋能缺失出发，识别学习旅程中的动机、转化与价值三大断裂带，构建“共学伙伴”学习生态与可持续的学习增强回路。",
    result: "完成用户旅程重塑、服务蓝图与共创工具设计",
    images: [
      "/assets/projects/learning-research.jpg",
      "/assets/projects/learning-blueprint.jpg",
    ],
    detailPages: createDetailPages("learning", 2),
    href: "https://www.kdocs.cn/l/ccV9ooOuInI2",
    tone: "coral",
  },
];

const skillGroups = [
  {
    index: "01",
    title: "设计表达",
    items: [
      { name: "Figma", description: "交互原型与设计系统", icon: "/assets/skills/figma.png" },
      { name: "3ds Max", description: "概念可视化", icon: "/assets/skills/3ds-max.webp" },
      { name: "KeyShot", description: "3D 渲染", icon: "/assets/skills/keyshot.png" },
      { name: "Midjourney", description: "风格探索与提效", icon: "/assets/skills/midjourney.png" },
    ],
  },
  {
    index: "02",
    title: "空间与交互",
    items: [
      { name: "Unity", description: "场景搭建，游戏化交互探索", icon: "/assets/skills/unity.png" },
    ],
  },
  {
    index: "03",
    title: "AI 辅助开发",
    items: [
      { name: "Cursor", description: "AI 辅助编程与原型验证", icon: "/assets/skills/cursor.png" },
      { name: "Codex", description: "代码生成与自动化实现", icon: "/assets/skills/codex.png" },
    ],
  },
  {
    index: "04",
    title: "提效工具",
    items: [
      { name: "ChatGPT", description: "信息整理与方案推演", icon: "/assets/skills/chatgpt.png" },
      { name: "Claude", description: "长文理解与内容协作", icon: "/assets/skills/claude.png" },
    ],
  },
];

const awards = [
  {
    title: "移动应用创新赛",
    caption: "全国二等奖 · 2025",
    image: "/assets/awards/mobile-app-award.jpg",
    alt: "2025 移动应用创新赛全国二等奖证书",
  },
  {
    title: "全国大学生工业设计大赛",
    caption: "吉林赛区获奖 · 2022",
    image: "/assets/awards/industrial-design-award.jpg",
    alt: "全国大学生工业设计大赛获奖证书",
  },
  {
    title: "吉林省第三届冰雪创意大赛",
    caption: "一等奖 · 滑雪板力学性能测试装置 · 2021",
    image: "/assets/awards/ski-test-award.jpg",
    alt: "2021 吉林省第三届冰雪创意大赛滑雪板力学性能测试装置一等奖证书",
  },
  {
    title: "吉林省第三届冰雪创意大赛",
    caption: "一等奖 · 雪地蜘蛛仿生搜救机器人设计 · 2021",
    image: "/assets/awards/snow-spider-award.jpg",
    alt: "2021 吉林省第三届冰雪创意大赛雪地蜘蛛仿生搜救机器人设计一等奖证书",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);
  const [awardIndex, setAwardIndex] = useState(0);

  const closeMenu = () => setMenuOpen(false);
  const activeAward = awards[awardIndex];
  const showNextAward = () => setAwardIndex((current) => (current + 1) % awards.length);
  const showPreviousAward = () => setAwardIndex((current) => (current - 1 + awards.length) % awards.length);

  useEffect(() => {
    if (!activeProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveProject(null);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

  return (
    <main>
      <a className="skip-link" href="#content">
        跳到主要内容
      </a>

      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="返回首页">
          <span className="brand-mark">DWH</span>
          <span className="brand-title">Product Portfolio</span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "关闭导航菜单" : "打开导航菜单"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="主导航">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="nav-resume" href="/docs/du-wenhui-resume.pdf" target="_blank" rel="noreferrer">
            查看简历 <Arrow />
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-copy" id="content">
          <p className="eyebrow">Product Manager · Hangzhou</p>
          <h1>
            杜文慧
            <span>Product Manager / 产品经理</span>
          </h1>
          <p className="hero-intro">
            我有着丰富的用户研究、需求分析、软硬件产品设计及跨团队落地经验，主导参与过实体产品上市、海外 App 项目重构与 AI 辅助 Demo 开发等项目
          </p>
          <div className="hero-tags" aria-label="核心能力">
            {[
              "用户产品",
              "策略产品",
              "AI产品",
              "数据分析",
            ].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              查看项目 <Arrow />
            </a>
            <a className="button button-ghost" href="#contact">
              联系我
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img src="/assets/photos/life-3.jpg" alt="杜文慧的个人生活照" />
          <aside className="personal-intro-card" aria-label="个人介绍">
            <p className="personal-intro-title">个人介绍</p>
            <p>
              工作人格 <strong>ENPJ</strong>，生活人格 <strong>ENFP</strong>
            </p>
            <p>感性又天马行空，独立但不随波逐流</p>
            <p className="personal-loves">
              我的世界不能没有 <span role="img" aria-label="音乐">🎵</span>、<span role="img" aria-label="猫猫">🐱</span> 与 <span role="img" aria-label="咖啡">☕</span>
            </p>
          </aside>
          <div className="photo-note photo-note-top">
            <span>2027 届</span>
            工业设计硕士
          </div>
          <div className="photo-note photo-note-bottom">
            <span>Focus</span>
            AI 应用 / 智能硬件 / 消费产品
          </div>
        </div>

        <div className="hero-index" aria-hidden="true">
          <span>01</span>
          <span>SCROLL TO EXPLORE</span>
        </div>
      </section>

      <section className="section education-section" id="education">
        <div className="section-heading">
          <p className="eyebrow">01 / Education</p>
          <h2>教育背景</h2>
          <p>工业设计与服务设计的学习，让我习惯从用户问题出发，在商业目标、体验价值与技术约束之间做产品判断，并推动方案落地。</p>
        </div>

        <div className="education-list">
          <article className="education-card primary-education">
            <div className="education-logo">
              <img src="/assets/university-logo.png" alt="浙江工业大学校徽" />
            </div>
            <div>
              <p className="education-time">2024/09—2027/06</p>
              <h3>浙江工业大学 · 硕士研究生</h3>
              <p className="education-major">设计与建筑学院 · <strong>工业设计（用户体验与服务设计方向）</strong></p>
              <p className="education-courses">
                聚焦<strong>用户研究、产品体验与服务系统设计</strong>，系统训练用户洞察、需求分析、体验设计、方案验证与设计研究能力。
              </p>
              <div className="education-tags" aria-label="硕士阶段关键词">
                {['用户研究', '服务设计', '体验评估', '产品策略'].map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </article>

          <article className="education-card">
            <div className="education-logo">
              <img src="/assets/beihua-university-logo.png" alt="北华大学校徽" />
            </div>
            <div>
              <p className="education-time">2019/09—2023/06</p>
              <h3>北华大学 · 本科</h3>
              <p className="education-major">机械工程学院 · <strong>工业设计</strong></p>
              <p className="education-courses">
                建立产品设计与工程基础，覆盖<strong>交互设计、人机工程、数字产品设计与视觉表达</strong>，形成从需求理解、概念设计到原型表达的完整基础。
              </p>
              <div className="education-tags" aria-label="本科阶段关键词">
                {['交互设计', '人机工程', '产品设计', '原型表达'].map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-heading light-heading">
          <p className="eyebrow">02 / Experience</p>
          <h2>实习与工作经历</h2>
          <p>从用户研究、体验设计走向完整的产品闭环。</p>
        </div>

        <div className="experience-list">
          {experiences.map((item) => (
            <article className="experience-item" key={`${item.period}-${item.company}`}>
              <div className="experience-timeline-marker" aria-hidden="true"><span /></div>
              <p className="experience-period">{item.period}</p>
              <div className="experience-identity">
                <div>
                  <span>公司</span>
                  <h3>{item.company}</h3>
                </div>
                <div>
                  <span>部门</span>
                  <h3>{item.department}</h3>
                </div>
                <div>
                  <span>岗位</span>
                  <h3>{item.role}</h3>
                </div>
              </div>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="project-intro" aria-label="项目理念">
        <img src="/assets/photos/project-intro-landscape.webp" alt="杜文慧拍摄的园林湖景" />
        <div className="project-intro-overlay" />
        <div className="project-intro-copy">
          <p className="eyebrow">From insight to impact</p>
          <h2>从用户洞察出发，<br />把复杂问题变成可落地产品。</h2>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="section-heading project-heading">
          <p className="eyebrow">03 / Selected Work</p>
          <h2>项目作品</h2>
          <p>软件产品、智能硬件、消费产品与服务体验的跨领域实践。</p>
        </div>

        <div className="project-list">
          {[...projects]
            .sort((a, b) => a.index.localeCompare(b.index))
            .map((project) => (
            <article className={`project-card project-${project.tone}`} key={project.title}>
              <div className={`project-gallery ${project.images.length > 3 ? "project-gallery-dense" : ""}`}>
                <img className="project-image-main" src={project.images[0]} alt={`${project.title}项目主视觉`} loading="lazy" />
                {project.images.slice(1).map((image, imageIndex) => (
                  <img
                    key={image}
                    className={`project-image-secondary project-image-${imageIndex + 2}`}
                    src={image}
                    alt={`${project.title}产品截图 ${imageIndex + 2}`}
                    loading="lazy"
                  />
                ))}
              </div>
              <div className="project-content">
                <div className="project-meta">
                  <span>{project.index}</span>
                  <span>{project.date}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-category">{project.category}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-result">
                  <span>Result</span>
                  <strong>{project.result}</strong>
                </div>
                <button
                  className="project-link"
                  type="button"
                  disabled={!project.detailPages.length}
                  title={project.detailPages.length ? "打开项目详情" : "该项目详情将在后续补充"}
                  onClick={() => project.detailPages.length && setActiveProject(project)}
                >
                  查看项目详情 <Arrow />
                </button>
              </div>
            </article>
            ))}
        </div>

        <div className="project-full-link-wrap">
          <a
            className="project-full-link"
            href="https://www.kdocs.cn/l/ccV9ooOuInI2"
            target="_blank"
            rel="noreferrer"
          >
            查看完整作品链接 <Arrow />
          </a>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-heading">
          <p className="eyebrow">04 / Skills & Awards</p>
          <h2>技能与奖项</h2>
          <p>按实际使用场景组织工具能力，并以项目实践与竞赛成果验证成长。</p>
        </div>

        <div className="skills-area">
          <div className="skills-area-heading">
            <p className="panel-index">A / Skills</p>
            <h3>技能</h3>
            <p>从设计表达、空间交互到 AI 辅助开发的日常工作工具。</p>
          </div>

          <div className="skill-group-list">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.title}>
                <div className="skill-group-heading">
                  <span>{group.index}</span>
                  <h4>{group.title}</h4>
                </div>
                <div className={`skill-card-grid skill-card-grid-${group.items.length}`}>
                  {group.items.map((skill) => (
                    <div className="tool-card" key={skill.name}>
                      <div className="tool-icon">
                        <img src={skill.icon} alt={`${skill.name} 图标`} loading="lazy" />
                      </div>
                      <h5>{skill.name}</h5>
                      <p>{skill.description}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="awards-area">
          <div className="awards-carousel" aria-live="polite">
            <div className="award-details">
              <p className="panel-index">B / Awards</p>
              <h3>奖项</h3>
              <p className="award-summary">四项产品、设计与创新实践成果，点击右侧证书或使用按钮循环查看。</p>

              <div className="award-caption">
                <span>{String(awardIndex + 1).padStart(2, "0")} / {String(awards.length).padStart(2, "0")}</span>
                <div>
                  <h4>{activeAward.title}</h4>
                  <p>{activeAward.caption}</p>
                </div>
              </div>

              <div className="award-controls">
                <button type="button" onClick={showPreviousAward} aria-label="查看上一张奖项">←</button>
                <div className="award-dots" aria-hidden="true">
                  {awards.map((award, index) => (
                    <span className={index === awardIndex ? "is-active" : ""} key={`${award.title}-${index}`} />
                  ))}
                </div>
                <button type="button" onClick={showNextAward} aria-label="查看下一张奖项">→</button>
              </div>
            </div>

            <button
              className="award-slide"
              type="button"
              onClick={showNextAward}
              aria-label={`查看下一张奖项，当前为 ${activeAward.title}`}
            >
              <img src={activeAward.image} alt={activeAward.alt} loading="lazy" />
            </button>
          </div>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="footer-top">
          <p className="eyebrow">Let&apos;s build something useful</p>
          <h2>期待与你一起，<br />把好洞察变成好产品。</h2>
          <a className="button button-primary" href="mailto:15357840207@163.com">
            联系我 <Arrow />
          </a>
        </div>
        <div className="footer-bottom">
          <div>
            <span>Email</span>
            <a href="mailto:15357840207@163.com">15357840207@163.com</a>
          </div>
          <div>
            <span>Phone</span>
            <a href="tel:15357840207">15357840207</a>
          </div>
          <div>
            <span>Location</span>
            <p>浙江 · 杭州</p>
          </div>
          <div className="footer-links">
            <a href="https://www.kdocs.cn/l/ccV9ooOuInI2" target="_blank" rel="noreferrer">
              作品集链接 <Arrow />
            </a>
            <a href="/docs/du-wenhui-resume.pdf" target="_blank" rel="noreferrer">
              Resume.pdf <Arrow />
            </a>
          </div>
        </div>
        <p className="copyright">© 2026 杜文慧 · Product Manager Portfolio</p>
      </footer>

      {activeProject && (
        <div
          className="project-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setActiveProject(null);
          }}
        >
          <section
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <div className="project-modal-toolbar">
              <span>Project Detail / {activeProject.index}</span>
              <button type="button" onClick={() => setActiveProject(null)} aria-label="关闭项目详情">
                <span aria-hidden="true">×</span>
                关闭
              </button>
            </div>

            <div className="project-modal-intro">
              <div className="project-modal-heading">
                <p className="eyebrow">{activeProject.category}</p>
                <h2 id="project-modal-title">{activeProject.title}</h2>
              </div>
              <div className="project-modal-summary">
                <p>{activeProject.description}</p>
                <div className="project-modal-result">
                  <span>Result</span>
                  <strong>{activeProject.result}</strong>
                </div>
              </div>
            </div>

            <div className="project-modal-document">
              <div className="project-document-heading">
                <span>完整项目方案</span>
                <span>{activeProject.detailPages.length} Pages</span>
              </div>
              {activeProject.detailPages.map((page, pageIndex) => (
                <figure key={page} className="project-document-page">
                  <img
                    src={page}
                    alt={`${activeProject.title}项目方案第 ${pageIndex + 1} 页`}
                    loading={pageIndex < 2 ? "eager" : "lazy"}
                  />
                  <figcaption>{String(pageIndex + 1).padStart(2, "0")}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
