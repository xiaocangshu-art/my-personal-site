"use client";

import { useState } from "react";

const navItems = [
  { href: "#education", label: "教育背景" },
  { href: "#experience", label: "实习经历" },
  { href: "#projects", label: "项目作品" },
  { href: "#skills", label: "技能与爱好" },
];

const experiences = [
  {
    period: "2026/03—至今",
    company: "浙江自贸区（宁波）人力资源赋能研究院",
    department: "资料未注明",
    role: "研究助理",
    points: [
      "面向制造业企业 HR 与员工体验场景开展访谈、问卷及参与式研究，提炼高频问题并转化为用户画像、服务蓝图与共创工具。",
      "组织企业用户参与方案验证，协同研究院、企业及工业社区推动工具迭代与项目落地；相关实践获评“2025 全国用户体验创新典型案例”。",
    ],
  },
  {
    period: "2025/09—2025/11",
    company: "海康威视 · 萤石网络",
    department: "资料未注明",
    role: "体验设计师",
    points: [
      "参与萤石海外 App 产品迭代，负责“智能安防与首页”模块的用户分析、PRD 拆解、信息架构及交互方案。",
      "基于行为数据与用户反馈定位功能边界和使用路径问题，协同产品、视觉与研发完成评审、开发跟进及验收，推动首页框架、动态布局与模块化方案上线。",
    ],
  },
  {
    period: "2024/06—08",
    company: "浙江网新恒天软件有限公司",
    department: "资料未注明",
    role: "产品策划",
    points: [
      "参与星巴克圣诞营销与必胜客排班系统两个数字化项目，负责客户需求梳理、用户研究、业务流程拆解及方案策划。",
      "将业务需求转化为功能框架、用户流程与交互原型，协同设计团队完成方案交付；星巴克项目团队方案成功中标并上线。",
    ],
  },
  {
    period: "2024/02—06",
    company: "致家家居（杭州）有限公司",
    department: "资料未注明",
    role: "产品设计师",
    points: [
      "根据品牌定位及规划开发新产品，参与家具产品从市场定位到上市的全流程，覆盖价格带分析、材料选择及成本控制。",
      "协同供应商推进打样与样品测试，完成 2 款产品上市，累计销售额超 200 万元。",
    ],
  },
];

const projects = [
  {
    index: "01",
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
    href: "https://www.kdocs.cn/l/ccV9ooOuInI2",
    tone: "lime",
  },
  {
    index: "02",
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
      "/assets/projects/starbucks-cover.jpg",
      "/assets/projects/starbucks-concept.jpg",
      "/assets/projects/starbucks-flow.jpg",
    ],
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
      "/assets/projects/pizza-cover.jpg",
      "/assets/projects/pizza-interface.jpg",
      "/assets/projects/pizza-interaction.jpg",
    ],
    href: "https://www.kdocs.cn/l/ccV9ooOuInI2",
    tone: "orange",
  },
  {
    index: "05",
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
    ],
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
    href: "https://www.kdocs.cn/l/ccV9ooOuInI2",
    tone: "coral",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

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
            具备用户研究、需求分析、软硬件产品设计及跨团队落地经验，参与过实体产品上市、海外 App 重构与 AI 辅助 Demo 开发。
          </p>
          <div className="hero-tags" aria-label="核心能力">
            {[
              "用户研究",
              "需求分析",
              "产品策略",
              "软硬件产品设计",
              "跨团队落地",
              "AI 辅助开发",
            ].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              查看项目 <Arrow />
            </a>
            <a className="button button-ghost" href="/docs/du-wenhui-resume.pdf" target="_blank" rel="noreferrer">
              下载简历
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img src="/assets/photos/life-3.jpg" alt="杜文慧的个人生活照" />
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
          <p>工业设计训练，让我能够同时理解用户、商业与产品落地。</p>
        </div>

        <div className="education-list">
          <article className="education-card primary-education">
            <div className="education-logo">
              <img src="/assets/university-logo.png" alt="浙江工业大学校徽" />
            </div>
            <div>
              <p className="education-time">2024/09—2027/06</p>
              <h3>浙江工业大学 · 硕士</h3>
              <p className="education-major">设计与建筑学院 · 工业设计专业</p>
              <p className="education-courses">
                设计思维、服务设计与用户增长、设计评价与优化研究、设计心理学、管理学原理等
              </p>
            </div>
          </article>

          <article className="education-card">
            <div className="education-number">02</div>
            <div>
              <p className="education-time">2019/09—2023/06</p>
              <h3>北华大学 · 本科</h3>
              <p className="education-major">机械工程学院 · 工业设计专业</p>
              <p className="education-courses">
                UI 设计、人机工程学、设计心理学、数字传媒艺术、设计基础、视觉传达基础等
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-heading light-heading">
          <p className="eyebrow">02 / Experience</p>
          <h2>实习与工作经历</h2>
          <p>按照时间倒序排列，持续从研究、体验设计走向完整的产品闭环。</p>
        </div>

        <div className="experience-list">
          {experiences.map((item, index) => (
            <article className="experience-item" key={`${item.period}-${item.company}`}>
              <div className="experience-order">0{index + 1}</div>
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
        <img src="/assets/photos/life-1.jpg" alt="杜文慧在旅行中拍摄的生活照" />
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
          {projects.map((project) => (
            <article className={`project-card project-${project.tone}`} key={project.title}>
              <div className="project-gallery">
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
                <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                  体验链接 / 查看在线作品集 <Arrow />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-heading">
          <p className="eyebrow">04 / Skills & Life</p>
          <h2>技能与爱好</h2>
          <p>理性的产品方法之外，也保持对身体、风格与流行文化的感受力。</p>
        </div>

        <div className="skills-grid">
          <article className="skill-panel capability-panel">
            <p className="panel-index">A / Product</p>
            <h3>产品能力</h3>
            <div className="skill-cloud">
              {[
                "用户研究",
                "需求分析",
                "PRD 拆解",
                "信息架构",
                "服务蓝图",
                "交互原型",
                "竞品分析",
                "项目推进",
                "供应链协同",
              ].map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>

          <article className="skill-panel tools-panel">
            <p className="panel-index">B / Tools</p>
            <h3>工具与 AI</h3>
            <dl>
              <div>
                <dt>设计软件</dt>
                <dd>Figma · Photoshop · Unity</dd>
              </div>
              <div>
                <dt>AI 软件</dt>
                <dd>Codex · ChatGPT · Cursor</dd>
              </div>
            </dl>
          </article>

          <article className="skill-panel awards-panel">
            <p className="panel-index">C / Awards</p>
            <h3>部分获奖</h3>
            <div className="award-list">
              <figure>
                <img src="/assets/awards/mobile-app-award.jpg" alt="2025 移动应用创新赛全国二等奖证书" loading="lazy" />
                <figcaption>移动应用创新赛 · 全国二等奖 · 2025</figcaption>
              </figure>
              <figure>
                <img src="/assets/awards/industrial-design-award.jpg" alt="全国大学生工业设计大赛获奖证书" loading="lazy" />
                <figcaption>全国大学生工业设计大赛吉林赛区 · 金 / 银 / 铜奖 · 2022</figcaption>
              </figure>
            </div>
          </article>
        </div>

        <div className="life-section">
          <div className="life-copy">
            <p className="eyebrow">Off the clock</p>
            <h3>街舞、穿搭与 KPOP 音乐</h3>
            <p>兴趣内容待继续补充。这里先用真实生活照片保留一个更松弛、更具个人风格的窗口。</p>
            <div className="life-tags">
              <span>Street Dance</span>
              <span>Fashion</span>
              <span>KPOP</span>
            </div>
          </div>
          <div className="life-gallery">
            <img src="/assets/photos/life-2.jpg" alt="杜文慧的户外生活照" loading="lazy" />
            <img src="/assets/photos/life-4.jpg" alt="杜文慧的穿搭生活照" loading="lazy" />
            <img src="/assets/photos/life-1.jpg" alt="杜文慧的旅行生活照" loading="lazy" />
          </div>
        </div>
      </section>

      <footer className="site-footer">
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
          <div className="footer-resume">
            <a href="/docs/du-wenhui-resume.pdf" target="_blank" rel="noreferrer">
              Resume.pdf <Arrow />
            </a>
          </div>
        </div>
        <p className="copyright">© 2026 杜文慧 · Product Manager Portfolio</p>
      </footer>
    </main>
  );
}
