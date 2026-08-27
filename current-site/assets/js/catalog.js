(function (root, factory) {
  const data = factory();
  if (typeof module === "object" && module.exports) module.exports = data;
  else Object.assign(root, data);
})(typeof window !== "undefined" ? window : globalThis, function () {
const AIESL_PRODUCTS = [
  {
    id: "esl",
    number: "01",
    name: "电子价签 ESL",
    shortName: "电子价签",
    brand: "AiEinkSmart",
    tagline: "从单个货架到多门店价格网络，稳定连接每一次价格变化。",
    proofPoints: ["1.54–13.3 英寸产品系列", "批量改价与模板下发", "基站、平台与 API 一体化"],
    image: "current-site/assets/images/esl-warehouse-shelves.jpg",
    href: "esl.html",
    cta: "查看电子价签"
  },
  {
    id: "people",
    number: "02",
    name: "3D 双目客流统计",
    shortName: "客流统计",
    brand: "Pyroglaux",
    tagline: "把到店、停留与空间使用转化为隐私合规的运营数据。",
    proofPoints: ["双目深度感知", "匿名化客流分析", "门店与空间数据看板"],
    image: "current-site/assets/images/people-01.jpg",
    href: "people-counting.html",
    cta: "查看客流统计"
  },
  {
    id: "clean",
    number: "03",
    name: "商用清洁机器人",
    shortName: "清洁机器人",
    brand: "iKitbot",
    tagline: "面向商场、交通枢纽、工厂与物业的大面积自主清洁。",
    proofPoints: ["扫、吸、洗、拖一体", "自主规划与避障", "任务记录与车队管理"],
    image: "current-site/assets/images/sc80-pt90-floor-scrubber.jpg",
    href: "cleaning-robots.html",
    cta: "查看清洁机器人"
  },
  {
    id: "pick",
    number: "04",
    name: "拣货与具身智能机器人",
    shortName: "拣货机器人",
    brand: "Jacobi.ai",
    tagline: "从货架识别、拣选补货到仓内搬运，连接任务与执行。",
    proofPoints: ["JSR-1 具身智能", "T300 / T600 仓储 AMR", "拣选、搬运与产线配送"],
    image: "current-site/assets/images/warehouse-amr-scene.jpg",
    href: "picking-robots.html",
    cta: "查看拣货机器人"
  },
  {
    id: "frame",
    number: "05",
    name: "墨水屏数字标牌与智能画框",
    shortName: "墨水屏显示",
    brand: "EinkSmart",
    tagline: "以类纸显示、低功耗与云端内容管理服务商业和艺术空间。",
    proofPoints: ["Spectra 6 六色显示", "数字标牌与艺术画框", "云端内容统一管理"],
    image: "current-site/assets/images/digital-art-frame-living-room.webp",
    href: "e-paper-displays.html",
    cta: "查看墨水屏显示"
  }
];

const AIESL_ESL_SERIES = [
  {
    id: "swift",
    name: "Swift 系列",
    summary: "覆盖紧凑货架标签到大尺寸信息显示，适合快速交付、试点门店和多尺寸混合部署。",
    models: [
      { model: "AES-0154X", size: "1.54″", image: "current-site/assets/images/esl-series/swift-0154.jpg", summary: "面向配件、药妆和紧凑货位的轻量价格展示。" },
      { model: "AES-0213X", size: "2.13″", image: "current-site/assets/images/esl-series/swift-0213.jpg", summary: "适合常规零售货架的价格与促销信息更新。" },
      { model: "AES-0266X", size: "2.66″", image: "current-site/assets/images/esl-series/swift-0266.jpg", summary: "在标准货架上提供更充足的商品与价格信息空间。" },
      { model: "AES-0290X", size: "2.90″", image: "current-site/assets/images/esl-series/swift-0290.jpg", summary: "用于商超、便利店和日常零售货架数字化。" },
      { model: "AES-0350X", size: "3.50″", image: "current-site/assets/images/esl-series/swift-0350.jpg", summary: "适合需要更多文字、图形和促销信息的货架位置。" },
      { model: "AES-0420X", size: "4.20″", image: "current-site/assets/images/esl-series/swift-0420.jpg", summary: "面向生鲜、促销陈列和重点商品的信息展示。" },
      { model: "AES-0583X", size: "5.83″", image: "current-site/assets/images/esl-series/swift-0583.jpg", summary: "适合家电、仓储货位和中尺寸商品信息展示。" },
      { model: "AES-0750X", size: "7.50″", image: "current-site/assets/images/esl-series/swift-0750.jpg", summary: "用于大幅促销、区域价格牌和仓储作业提示。" },
      { model: "AES-1020X", size: "10.2″", image: "current-site/assets/images/esl-series/swift-1020.jpg", summary: "用于大尺寸价格、促销与区域信息发布。" },
      { model: "AES-1248X", size: "12.48″", image: "current-site/assets/images/esl-series/swift-1248.jpg", summary: "面向需要远距离阅读的大型商品与活动信息。" },
      { model: "AES-1330X", size: "13.3″", image: "current-site/assets/images/esl-series/swift-1330.jpg", summary: "作为大尺寸电子纸终端承载完整促销和商品内容。" }
    ]
  },
  {
    id: "classic",
    name: "Classic 系列",
    summary: "白色外壳多色电子价签，面向商超、仓储和主流零售货架的长期部署。",
    models: [
      { model: "AES-0213", size: "2.13″", image: "current-site/assets/images/esl-series/classic-0213.jpg", summary: "适合主流货架的基础价格和促销信息。" },
      { model: "AES-0266", size: "2.66″", image: "current-site/assets/images/esl-series/classic-0266.jpg", summary: "用于商超与生鲜货架的日常商品信息更新。" },
      { model: "AES-0290", size: "2.90″", image: "current-site/assets/images/esl-series/classic-0290.jpg", summary: "适合便利店、药店和标准零售陈列。" },
      { model: "AES-0420", size: "4.20″", image: "current-site/assets/images/esl-series/classic-0420.jpg", summary: "用于生鲜、家电和重点促销位置的信息展示。" },
      { model: "AES-0750", size: "7.50″", image: "current-site/assets/images/esl-series/classic-0750.jpg", summary: "面向大尺寸价格牌、仓储货位和拣选提示。" }
    ]
  }
];

const AIESL_BRANDS = [
  { role: "主品牌", name: "PanPanTech 攀攀科技", description: "面向全球市场的 AIoT 科技集团，为产品、平台、研发与制造提供统一品牌背书。" },
  { role: "技术母品牌", name: "NeuroGrid 神经网格", description: "连接感知、分析与决策的技术架构，打通现场终端与业务数据。" },
  { role: "数据平台", name: "AiESL 数据中台", description: "电子价签管理、商品价格编排、设备运维与标准 API 的平台入口。" }
];

const AIESL_COMPANIES = [
  { number: "01", title: "品牌与商业运营中心", company: "广州攀攀科技有限公司", description: "负责集团品牌建设、市场运营、国内外销售渠道与知识产权管理。" },
  { number: "02", title: "软件与算法研发中心", company: "攀攀科技（香港）有限公司", description: "研发 ESL 管理软件、智能定价与运营系统，以及 E-Ink 相关软件能力。" },
  { number: "03", title: "智能硬件智造中心", company: "广州神经网格智造科技有限公司", description: "承担 ESL、墨水屏终端与机器人硬件的研发、生产、质量和规模化交付。" }
];

const AIESL_PLATFORM_STEPS = [
  { step: "01 / DATA SOURCE", title: "ERP / POS / 商品中心", description: "承接商品、价格、促销与门店组织等业务数据。" },
  { step: "02 / PLATFORM", title: "AiESL 数据中台", description: "完成模板、价格任务、权限、设备状态与执行审计。" },
  { step: "03 / NETWORK", title: "ESL 基站 / 网关", description: "以有线或无线网络接入门店，通过私有协议稳定通信。" },
  { step: "04 / TERMINAL", title: "电子价签终端", description: "按任务刷新价格和促销内容，覆盖常温、冷链与大尺寸场景。" },
  { step: "05 / FEEDBACK", title: "执行状态回传", description: "回传任务结果、设备状态与异常信息，形成可追溯闭环。" }
];

const AIESL_PLATFORM_CAPABILITIES = [
  "可视化价签模板设计", "商品与价格数据管理", "一键批量改价与促销编排", "标签、基站和门店设备管理",
  "RESTful API 对接 ERP / POS", "多门店权限与任务状态", "数据回传、异常告警和执行审计", "SaaS 部署、免本地服务器和自动升级"
];

const AIESL_NEWS = [
  {
    category: "品牌升级",
    title: "五个主营产品、数据中台与制造能力进入统一官网架构",
    excerpt: "新版信息架构将产品、平台与集团能力分层呈现，五个主营产品保持相同展示权重。",
    image: "current-site/assets/images/factory-assembly.jpg",
    href: "products.html"
  },
  {
    category: "平台能力",
    title: "AiESL 数据中台完整呈现价格任务与执行回传链路",
    excerpt: "从 ERP/POS、商品中心到基站、价签和状态回传，电子价签系统以可追踪闭环对外展示。",
    image: "current-site/assets/images/factory-qc.jpg",
    href: "esl.html#platform"
  },
  {
    category: "公司架构",
    title: "运营、研发与智造三位一体职责完成统一说明",
    excerpt: "广州运营中心、香港软件与算法研发中心、广州智能硬件智造中心的关系更加清晰。",
    image: "current-site/assets/images/factory-hall.jpg",
    href: "about.html#company-structure"
  },
  {
    category: "制造与交付",
    title: "研发、装配、质检和交付体系形成独立能力页面",
    excerpt: "制造能力作为五个产品的长期交付底座，不再与主营产品混为同一层级。",
    image: "current-site/assets/images/factory-qc.jpg",
    href: "manufacturing.html"
  },
  {
    category: "产品进展",
    title: "3D 双目客流统计增加硬件、分析平台与隐私治理介绍",
    excerpt: "产品页面同时解释双目深度感知、匿名化处理和运营数据应用边界。",
    image: "current-site/assets/images/people-01.jpg",
    href: "people-counting.html"
  },
  {
    category: "方案更新",
    title: "行业解决方案改为五产品组合与业务数据闭环",
    excerpt: "门店、商业空间、仓储和制造场景可从单一任务开始，再按业务需要扩展。",
    image: "current-site/assets/images/warehouse-amr-scene.jpg",
    href: "solutions.html"
  },
  {
    category: "产品进展",
    title: "墨水屏数字标牌与智能画框进入独立产品介绍",
    excerpt: "低功耗内容展示、云端管理和空间应用以统一产品层级对外呈现。",
    image: "current-site/assets/images/digital-art-frame-living-room.webp",
    href: "e-paper-displays.html"
  }
];

const AIESL_BLOG = [
  {
    category: "电子价签",
    title: "电子价签项目为什么必须同时看终端、基站与数据中台",
    excerpt: "从系统边界、任务链路和异常回传三个角度理解一套可运营的 ESL 网络。",
    image: "current-site/assets/images/factory-qc.jpg",
    href: "esl.html#platform"
  },
  {
    category: "数据治理",
    title: "如何把门店价格任务设计成可追踪的数据闭环",
    excerpt: "模板、商品、价格、权限、执行状态和审计记录分别解决哪些问题。",
    image: "current-site/assets/images/factory-hall.jpg",
    href: "solutions.html#data-loop"
  },
  {
    category: "空间分析",
    title: "3D 双目客流统计如何兼顾匿名化与运营分析",
    excerpt: "区分感知、计数、空间指标与个人身份识别，明确数据使用边界。",
    image: "current-site/assets/images/people-01.jpg",
    href: "people-counting.html"
  },
  {
    category: "清洁自动化",
    title: "清洁机器人 ROI 评估应先建立哪些现场基线",
    excerpt: "面积、地面、班次、人流、补给与人工协同，比单一回本数字更值得先确认。",
    image: "current-site/assets/images/robot-dark-hero.jpg",
    href: "cleaning-robots.html"
  },
  {
    category: "仓储机器人",
    title: "AMR 选型：载荷、接口、路线与异常处理如何一起评估",
    excerpt: "把机器人放回 WMS、MES 与现场规则中，避免只按单机参数做判断。",
    image: "current-site/assets/images/warehouse-amr-scene.jpg",
    href: "picking-robots.html"
  },
  {
    category: "墨水屏显示",
    title: "低功耗显示如何服务商业信息与空间内容更新",
    excerpt: "从显示效果、更新频率、内容管理和安装方式理解数字标牌与智能画框。",
    image: "current-site/assets/images/digital-art-frame-living-room.webp",
    href: "e-paper-displays.html"
  },
  {
    category: "研发与制造",
    title: "从样品到批量：智能硬件项目需要确认哪些制造节点",
    excerpt: "需求评审、工程准备、试产、质量检查和交付资料如何减少后期变更风险。",
    image: "current-site/assets/images/factory-assembly.jpg",
    href: "manufacturing.html"
  }
];

return { AIESL_PRODUCTS, AIESL_ESL_SERIES, AIESL_BRANDS, AIESL_COMPANIES, AIESL_PLATFORM_STEPS, AIESL_PLATFORM_CAPABILITIES, AIESL_NEWS, AIESL_BLOG };
});
