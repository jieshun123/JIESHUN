/* ===== JIESHUN PRECISION · 多语言翻译系统 =====
 * 面向海外客户的专业翻译,采用精密制造业标准术语
 * 通过 data-i18n="key" 标记元素,切换时自动替换
 */
(function(window){
  'use strict';

  // ===== 翻译字典 =====
  const I18N = {
    // ===== 通用 =====
    'nav.home':        { zh:'首页',       en:'Home' },
    'nav.about':       { zh:'关于我们',   en:'About Us' },
    'nav.culture':     { zh:'企业文化',   en:'Culture' },
    'nav.products':    { zh:'产品中心',   en:'Products' },
    'nav.equipment':   { zh:'生产设备',   en:'Equipment' },
    'nav.quality':     { zh:'品质管理',   en:'Quality' },
    'nav.contact':     { zh:'联系我们',   en:'Contact' },

    // ===== 公共 =====
    'common.viewProducts': { zh:'查看产品', en:'View Products' },
    'common.viewMore':     { zh:'了解更多', en:'Learn More' },
    'common.contactUs':    { zh:'联系我们', en:'Contact Us' },
    'common.scrollTop':    { zh:'返回顶部', en:'Top' },
    'common.home':         { zh:'首页',     en:'Home' },
    'common.scroll':       { zh:'滚动查看', en:'SCROLL' },

    // ===== 页面 title =====
    'title.home':       { zh:'杰顺精密 | JIESHUN — 专注于高端精密配件生产', en:'JIESHUN Precision | High-End Precision Components Manufacturer' },
    'title.about':      { zh:'关于我们 | 杰顺精密 JIESHUN', en:'About Us | JIESHUN Precision' },
    'title.culture':    { zh:'企业文化 | 杰顺精密 JIESHUN', en:'Corporate Culture | JIESHUN Precision' },
    'title.products':   { zh:'产品中心 | 杰顺精密 JIESHUN', en:'Products | JIESHUN Precision' },
    'title.equipment':  { zh:'生产设备 | 杰顺精密 JIESHUN', en:'Equipment | JIESHUN Precision' },
    'title.quality':    { zh:'品质管理 | 杰顺精密 JIESHUN', en:'Quality Assurance | JIESHUN Precision' },
    'title.contact':    { zh:'联系我们 | 杰顺精密 JIESHUN', en:'Contact Us | JIESHUN Precision' },

    'meta.home': { zh:'杰顺精密成立于2007年,致力于高端精密零配件的专业化制造,提供高压清洗机、农机、3C电子、灯饰、汽车、航空航天及船舶用精密零配件。',
                   en:'Founded in 2007, JIESHUN Precision specializes in high-end precision components, offering parts for high-pressure cleaners, agricultural machinery, 3C electronics, lighting, automotive, aerospace, and marine applications.' },

    'brand.cn':     { zh:'杰顺精密', en:'JIESHUN Precision' },
    'brand.tagline':{ zh:'专注于高端精密配件生产', en:'High-End Precision Components Manufacturing' },

    // ===== 首页 Hero =====
    'home.hero.tag':  { zh:'Since 2007 · Precision Manufacturing', en:'Since 2007 · Precision Manufacturing' },
    'home.hero.h1a':  { zh:'专注于', en:'Dedicated to' },
    'home.hero.h1b':  { zh:'高端精密配件', en:'High-End Precision Components' },
    'home.hero.h1c':  { zh:'专业化制造', en:'Professional Manufacturing' },
    'home.hero.sub':  { zh:'杰顺精密,动力无限 —— 集精密加工、焊接与技术开发于一体,为多领域提供高品质精密零配件。',
                       en:'JIESHUN Precision, infinite power — integrating precision machining, welding, and R&D to deliver premium precision components across industries.' },
    'home.hero.slogan': { zh:'有质量有情怀,让你爱上', en:'Quality with passion, making you love ' },
    'home.hero.slogan2':{ zh:'中国造', en:'Made in China' },
    'home.hero.btnGhost': { zh:'了解公司', en:'About the Company' },

    // ===== 首页 - 核心实力 =====
    'home.hl.eyebrow': { zh:'核心实力', en:'CORE STRENGTHS' },
    'home.hl.title':   { zh:'十七年深耕,精密制造', en:'17 Years of Precision Manufacturing' },
    'home.hl.desc':    { zh:'从2007年成立至今,杰顺精密以专业能力与匠心品质,持续为高端制造业提供可靠配套。',
                         en:'Since 2007, JIESHUN Precision has delivered reliable, high-precision components to the advanced manufacturing industry through craftsmanship and expertise.' },
    'home.hl.years':   { zh:'年精密制造经验', en:'Years of Experience' },
    'home.hl.lines':   { zh:'大产品线', en:'Product Lines' },
    'home.hl.acc':     { zh:'最高加工精度', en:'Max Machining Precision' },
    'home.hl.ind':     { zh:'行业应用领域', en:'Industries Served' },

    // ===== 首页 - 业务模块 =====
    'home.mod.eyebrow': { zh:'业务模块', en:'EXPLORE' },
    'home.mod.title':   { zh:'全面了解杰顺精密', en:'Explore JIESHUN Precision' },
    'home.mod.desc':    { zh:'点击进入各模块,深入了解我们的产品、设备与品质体系。',
                          en:'Click any module to explore our products, equipment, and quality systems in depth.' },
    'home.mod.about':   { zh:'关于我们', en:'About Us' },
    'home.mod.products':{ zh:'产品中心', en:'Products' },
    'home.mod.equip':   { zh:'生产设备', en:'Equipment' },
    'home.mod.quality':{ zh:'品质管理', en:'Quality' },
    'home.mod.culture':{ zh:'企业文化', en:'Culture' },
    'home.mod.contact':{ zh:'联系我们', en:'Contact' },

    // ===== CTA =====
    'cta.home.title':  { zh:'期待与您携手,共铸精密品质', en:'Let\'s Build Precision Together' },
    'cta.home.desc':   { zh:'如有产品需求或合作意向,欢迎随时联系杰顺精密,我们将为您提供专业的高精密配件解决方案。',
                        en:'For product inquiries or partnership opportunities, contact JIESHUN Precision for professional, high-precision component solutions.' },
    'cta.about.title': { zh:'欢迎走进杰顺精密', en:'Welcome to JIESHUN Precision' },
    'cta.about.desc':  { zh:'了解更多业务模块,或直接与我们取得联系。', en:'Explore our business modules or reach out to us directly.' },
    'cta.culture.title':{ zh:'理念落地,品质可见', en:'Values in Practice, Quality You Can See' },
    'cta.culture.desc':{ zh:'欢迎了解我们的产品与品质体系,见证匠心如何成为现实。', en:'Discover our products and quality systems — where craftsmanship becomes reality.' },
    'cta.products.title':{ zh:'有定制需求?欢迎咨询', en:'Need Custom Solutions? Let\'s Talk' },
    'cta.products.desc':{ zh:'无论批量还是样品,杰顺精密都能为您提供专业的精密配件方案。', en:'From prototypes to volume production, JIESHUN delivers professional precision component solutions.' },
    'cta.equip.title': { zh:'设备完备,品质有保障', en:'Complete Equipment, Guaranteed Quality' },
    'cta.equip.desc':  { zh:'了解我们的品质管理体系,看看精密如何被严格把控。', en:'Explore our quality assurance system to see how precision is rigorously controlled.' },
    'cta.quality.title':{ zh:'品质,是杰顺精密的承诺', en:'Quality is Our Commitment' },
    'cta.quality.desc':{ zh:'期待与您合作,共铸精密品质。欢迎随时联系我们。', en:'We look forward to partnering with you. Contact us anytime.' },

    // ===== Footer =====
    'footer.copyright': { zh:'© 2007-2026 杰顺精密 JIESHUN PRECISION · 江苏省苏州市甪直镇鸿达路25号 · 专注于高端精密配件生产',
                          en:'© 2007-2026 JIESHUN Precision · No. 25 Hongda Road, Luzhi Town, Suzhou, Jiangsu, China · High-End Precision Components Manufacturing' },

    // ===== 关于我们 =====
    'about.eyebrow':   { zh:'关于我们', en:'ABOUT US' },
    'about.h1':        { zh:'致力于高端精密零配件', en:'Dedicated to High-End' },
    'about.h1b':       { zh:'的专业化制造团队', en:'Precision Components Manufacturing' },
    'about.sub':       { zh:'杰顺精密,动力无限 —— 集精密加工、焊接与技术开发于一体,服务多行业高端配套。',
                         en:'JIESHUN Precision, infinite power — integrating precision machining, welding, and R&D to serve high-end applications across industries.' },
    'about.eyebrow2':  { zh:'数据见证', en:'BY THE NUMBERS' },
    'about.stats.title':{ zh:'用数据说话的实力', en:'Strength Backed by Numbers' },
    'about.vision.eyebrow':{ zh:'愿景使命', en:'OUR VISION' },
    'about.vision.h3': { zh:'做一流高端精密机械五金配件供应商', en:'A Leading Supplier of High-End Precision Hardware Components' },
    'about.vision.p1': { zh:'杰顺精密以"专业化、品牌化、国际化"为定位,持续追求卓越的精密制造能力,为高端制造业提供稳定可靠的配套支持。',
                         en:'Positioned on "specialization, branding, and internationalization," we continuously pursue precision manufacturing excellence and provide reliable support to high-end manufacturing.' },
    'about.vision.p2': { zh:'我们坚守"正直、诚信、敬业、勤奋"的理念,以匠心铸就品质,以诚意赢得信赖,致力于成就客户、成就品牌、成就员工。',
                         en:'We uphold the values of "Integrity, Honesty, Dedication, and Diligence," forging quality through craftsmanship and earning trust through sincerity — committed to achieving success for our customers, brand, and people.' },
    'about.vision.btn':{ zh:'了解企业文化', en:'Our Culture' },

    'about.intro.eyebrow':{ zh:'杰顺精密简介', en:'Company Profile' },
    'about.intro.p1':  { zh:'杰顺精密成立于 ', en:'Founded in ' },
    'about.intro.year':{ zh:'2007', en:'2007' },
    'about.intro.p1b': { zh:' 年,是一个致力于高端精密零配件的专业化团队。公司拥有先进的机械加工设备,集精密加工、焊接和技术开发于一体,为各行业提供高品质的精密零配件解决方案。',
                         en:', JIESHUN Precision is a specialized team dedicated to high-end precision components. Equipped with advanced machining facilities, we integrate precision machining, welding, and R&D to deliver premium component solutions across industries.' },
    'about.intro.p2':  { zh:'产品覆盖:高压清洗机精密配件、农机类精密配件、3C 电子配件、灯饰类精密配件,以及车用、航空航天和船舶用各种精密零配件。',
                         en:'Our products cover: high-pressure cleaner components, agricultural machinery parts, 3C electronics parts, lighting components, as well as precision parts for automotive, aerospace, and marine applications.' },
    'about.quote':     { zh:'杰顺精密,动力无限', en:'JIESHUN Precision, Infinite Power' },
    'about.quote.sub': { zh:'有质量有情怀,让你爱上中国造', en:'Quality with passion, making you love Made in China' },
    'about.imgcap':    { zh:'专注高端精密配件生产', en:'Focus on High-End Precision Components' },

    // ===== 企业文化 =====
    'cult.eyebrow':    { zh:'企业文化', en:'CORPORATE CULTURE' },
    'cult.h1':         { zh:'以文化驱动长期价值', en:'Culture Drives Long-Term Value' },
    'cult.sub':        { zh:'正直、诚信、敬业、勤奋 —— 我们将文化理念融入每一道工序、每一件产品。',
                         en:'Integrity, Honesty, Dedication, Diligence — values embedded in every process, every product.' },
    'cult.four.eyebrow':{ zh:'四大理念', en:'FOUR PILLARS' },
    'cult.four.title': { zh:'我们的价值坐标', en:'Our Value Coordinates' },
    'cult.four.desc':  { zh:'目标、使命、理念、定位 —— 四大维度共同定义了杰顺精密的成长方向。',
                         en:'Goal, Mission, Philosophy, Positioning — four dimensions defining JIESHUN\'s growth direction.' },
    'cult.goal.title': { zh:'目标', en:'Goal' },
    'cult.goal.desc':  { zh:'一流高端精密机械五金配件供应商,持续为客户创造价值。', en:'Become a top-tier supplier of high-end precision hardware, creating lasting value for customers.' },
    'cult.mission.title':{ zh:'使命', en:'Mission' },
    'cult.mission.desc':{ zh:'成就客户、成就品牌、成就员工,与伙伴共同成长。', en:'Achieve success for customers, brand, and people — growing together with partners.' },
    'cult.philo.title':{ zh:'理念', en:'Philosophy' },
    'cult.philo.desc': { zh:'正直、诚信、敬业、勤奋,以匠心铸就品质。', en:'Integrity, Honesty, Dedication, Diligence — quality forged through craftsmanship.' },
    'cult.pos.title':  { zh:'定位', en:'Positioning' },
    'cult.pos.desc':   { zh:'专业化、品牌化、国际化,打造行业标杆。', en:'Specialization, Branding, Internationalization — setting the industry benchmark.' },

    'cult.detail.eyebrow':{ zh:'理念详解', en:'IN DETAIL' },
    'cult.detail.title':{ zh:'文化内涵的深度展开', en:'Culture in Depth' },
    'cult.detail.goal.en':{ zh:'Goal · 目标', en:'Goal' },
    'cult.detail.goal.h':{ zh:'一流高端精密机械五金配件供应商', en:'A Top-Tier High-End Precision Hardware Supplier' },
    'cult.detail.goal.p':{ zh:'我们以成为行业一流的高端精密配件供应商为目标,在装备、工艺、品质与服务上持续投入,打造客户信赖的长期配套能力。',
                          en:'We aim to be a top-tier high-end precision component supplier, continually investing in equipment, processes, quality, and service to build long-term, trusted supply capability.' },
    'cult.detail.mission.en':{ zh:'Mission · 使命', en:'Mission' },
    'cult.detail.mission.h':{ zh:'成就客户、成就品牌、成就员工', en:'Success for Customers, Brand, and People' },
    'cult.detail.mission.p':{ zh:'我们以"三成就"为使命,与客户共赢,与品牌共进,与员工共成长,让精密制造的价值惠及每一位伙伴。',
                              en:'Our "Triple Achievement" mission creates shared success with customers, brand, and employees — extending precision manufacturing value to every partner.' },
    'cult.detail.philo.en':{ zh:'Philosophy · 理念', en:'Philosophy' },
    'cult.detail.philo.h':{ zh:'正直、诚信、敬业、勤奋', en:'Integrity, Honesty, Dedication, Diligence' },
    'cult.detail.philo.p':{ zh:'我们秉持正直立身、诚信立业、敬业立行、勤奋立功的理念,将品质承诺落到每一道工序、每一件产品。',
                            en:'We stand by integrity in character, honesty in business, dedication in action, and diligence in achievement — embedding quality commitments in every process and product.' },
    'cult.detail.pos.en':{ zh:'Positioning · 定位', en:'Positioning' },
    'cult.detail.pos.h':{ zh:'专业化、品牌化、国际化', en:'Specialization, Branding, Internationalization' },
    'cult.detail.pos.p':{ zh:'我们以专业化能力为根基,以品牌化经营为方向,以国际化视野为目标,持续迈向更高品质的精密制造。',
                          en:'With specialization as our foundation, branding as our direction, and internationalization as our vision, we continually advance toward higher-quality precision manufacturing.' },

    // ===== 产品中心 =====
    'prod.eyebrow':    { zh:'产品中心', en:'PRODUCTS' },
    'prod.h1':         { zh:'多元化的精密产品体系', en:'A Diverse Portfolio of Precision Components' },
    'prod.sub':        { zh:'涵盖连接器、汽车零部件、半导体、活塞、清洗机配件、紧固件及轴类等精密零配件,满足多行业配套需求。',
                         en:'Covering connectors, automotive parts, semiconductor components, pistons, cleaner parts, fasteners, shafts, and more — serving diverse industrial needs.' },
    'prod.cat.eyebrow':{ zh:'产品分类', en:'CATEGORIES' },
    'prod.cat.title':  { zh:'七大产品线,精准配套', en:'7 Product Lines, Precision Matched' },
    'prod.cat.desc':   { zh:'点击下方分类筛选,查看不同领域的精密零配件产品。', en:'Click a category to filter precision components by application.' },
    'prod.tab.all':    { zh:'全部', en:'All' },
    'prod.tab.connector':{ zh:'插接件', en:'Connectors' },
    'prod.tab.auto':   { zh:'汽车零部件', en:'Automotive' },
    'prod.tab.semi':   { zh:'半导体部件', en:'Semiconductor' },
    'prod.tab.piston': { zh:'活塞零部件', en:'Piston Parts' },
    'prod.tab.cleaner':{ zh:'清洗机配件', en:'Cleaner Parts' },
    'prod.tab.nuts':   { zh:'嵌装螺母/紧固件', en:'Fasteners' },
    'prod.tab.shafts': { zh:'轴类和其他', en:'Shafts & Others' },

    'prod.connector.en': { zh:'Connectors', en:'Connectors' },
    'prod.connector.h3': { zh:'插接件', en:'Connectors' },
    'prod.connector.desc':{ zh:'精密针孔接触件、接线端子、螺纹锁紧组件,适用于新能源、轨道交通、工业自动化等领域。',
                            en:'Precision pins, sockets, terminals, and threaded locking assemblies for EVs, rail transit, and industrial automation.' },
    'prod.auto.en':   { zh:'Automotive Parts', en:'Automotive Parts' },
    'prod.auto.h3':   { zh:'汽车零部件', en:'Automotive Parts' },
    'prod.auto.desc': { zh:'阀体、轴类、花键等精密零件,覆盖燃油喷射、传动、悬挂等系统,达到汽车行业批量供货标准。',
                        en:'Valves, shafts, splines and more — covering fuel injection, transmission, and suspension systems, meeting automotive volume supply standards.' },
    'prod.semi.en':   { zh:'Semiconductor', en:'Semiconductor' },
    'prod.semi.h3':   { zh:'半导体部件', en:'Semiconductor Parts' },
    'prod.semi.desc': { zh:'气路接头、阀体、腔体馈通件等,采用316L等不锈钢精密加工,适配高纯度与真空应用。',
                       en:'Gas fittings, valve bodies, chamber feedthroughs — precision machined from 316L stainless steel for high-purity and vacuum applications.' },
    'prod.piston.en': { zh:'Piston Parts', en:'Piston Parts' },
    'prod.piston.h3': { zh:'活塞零部件', en:'Piston Components' },
    'prod.piston.desc':{ zh:'缸盖、导向套、锁紧螺母、缸筒等液压气动活塞组件,兼顾腐蚀防护与耐磨性能。',
                         en:'Cylinder heads, guide bushings, locknuts, and barrels — hydraulic/pneumatic piston assemblies balancing corrosion resistance and wear performance.' },
    'prod.cleaner.en':{ zh:'Cleaner Parts', en:'Cleaner Parts' },
    'prod.cleaner.h3':{ zh:'清洗机配件', en:'High-Pressure Cleaner Parts' },
    'prod.cleaner.desc':{ zh:'高压清洗机精密配件,经精密加工与防锈处理,满足高压水路系统配套需求。',
                          en:'Precision components for high-pressure cleaners, machined and rust-treated for high-pressure water systems.' },
    'prod.nuts.en':   { zh:'Fasteners', en:'Fasteners' },
    'prod.nuts.h3':   { zh:'嵌装螺母 / 紧固件', en:'Insert Nuts / Fasteners' },
    'prod.nuts.desc': { zh:'嵌装螺母、滚花紧固件等,广泛用于3C电子、灯饰及结构件连接,装配可靠。',
                       en:'Insert nuts, knurled fasteners — widely used in 3C electronics, lighting, and structural connections with reliable assembly.' },
    'prod.shafts.en': { zh:'Shafts & Others', en:'Shafts & Others' },
    'prod.shafts.h3': { zh:'轴类和其他', en:'Shafts & Others' },
    'prod.shafts.desc':{ zh:'各类精密轴类、异形件及定制零配件,支持多材料、多工艺的柔性化加工。',
                         en:'Precision shafts, custom profiles, and bespoke parts — flexible machining across multiple materials and processes.' },

    'prod.feat.eyebrow':{ zh:'精密能力', en:'CAPABILITY' },
    'prod.feat.h3':   { zh:'高精度、多材料、柔性化', en:'High Precision, Multi-Material, Flexible' },
    'prod.feat.p':    { zh:'杰顺精密具备从走心、车铣复合到自动组装的完整加工能力,可处理铜、铝、不锈钢、塑料等多种材料,支持小批量多品种的柔性化生产。',
                         en:'JIESHUN offers complete capabilities — from Swiss-type turning and mill-turn to automated assembly — processing copper, aluminum, stainless steel, and plastics, with flexible small-batch, high-mix production.' },
    'prod.feat.l1':   { zh:'最高加工精度可达 0.002mm', en:'Machining precision up to 0.002mm' },
    'prod.feat.l2':   { zh:'覆盖7大产品线,服务6+行业领域', en:'7 product lines serving 6+ industries' },
    'prod.feat.l3':   { zh:'支持来图来样定制与开发', en:'Custom development from drawings or samples' },
    'prod.feat.l4':   { zh:'完善的防锈、电镀、热处理配套工艺', en:'Complete rust-proofing, plating, and heat treatment' },

    // ===== 生产设备 =====
    'equip.eyebrow':  { zh:'生产设备', en:'EQUIPMENT' },
    'equip.h1':       { zh:'先进的精密加工装备', en:'Advanced Precision Machining Equipment' },
    'equip.sub':      { zh:'引进日本、韩国及国产高端数控设备,构建从走心、车铣复合到自动组装的完整加工能力。',
                       en:'Featuring high-end CNC equipment from Japan, Korea, and China — covering Swiss-type turning, mill-turn, and automated assembly.' },
    'equip.sum.eyebrow':{ zh:'设备总览', en:'OVERVIEW' },
    'equip.sum.title':{ zh:'硬件实力一览', en:'Hardware at a Glance' },
    'equip.sum.star': { zh:'STAR 走心机(台)', en:'STAR Swiss-Type Lathes' },
    'equip.sum.auto': { zh:'自动车床(台)', en:'Automatic Lathes' },
    'equip.sum.acc':  { zh:'最高加工精度', en:'Max Machining Precision' },
    'equip.sum.rpm':  { zh:'主轴最高转速 r/min', en:'Max Spindle Speed (r/min)' },

    'equip.key.eyebrow':{ zh:'核心设备', en:'KEY EQUIPMENT' },
    'equip.key.title':{ zh:'主力加工装备', en:'Core Production Equipment' },
    'equip.key.desc': { zh:'从走心机到车铣复合,从凸轮机到自动化组装,构建全工艺链加工能力。',
                       en:'From Swiss-type lathes to mill-turn centers, cam machines to automated assembly — a complete process chain.' },

    'equip.star.tag': { zh:'STAR · 日本', en:'STAR · Japan' },
    'equip.star.h3':  { zh:'STAR SB-20R 走心机', en:'STAR SB-20R Swiss-Type Lathe' },
    'equip.star.l1':  { zh:'主轴最高转速 10000 r/min', en:'Max spindle speed: 10,000 r/min' },
    'equip.star.l2':  { zh:'背轴/动力头最高转速 8000 r/min', en:'Max sub-spindle/power-head speed: 8,000 r/min' },
    'equip.star.l3':  { zh:'最多刀具 26 PCS', en:'Max tools: 26 PCS' },
    'equip.star.l4':  { zh:'最大加工直径 Φ20.0mm', en:'Max machining diameter: Ø20.0mm' },
    'equip.star.l5':  { zh:'最高精度 0.002mm,配端铣侧铣', en:'Max precision: 0.002mm, with end & side milling' },

    'equip.dosan.tag':{ zh:'斗山 · 韩国', en:'Doosan · Korea' },
    'equip.dosan.h3': { zh:'斗山 2100LY 车铣复合', en:'Doosan 2100LY Mill-Turn Center' },
    'equip.dosan.l1': { zh:'法兰/轴承座/圆盘类最大直径 380mm', en:'Max flange/bearing seat/disc diameter: 380mm' },
    'equip.dosan.l2': { zh:'轴类零件长度最长 610mm', en:'Max shaft length: 610mm' },
    'equip.dosan.l3': { zh:'带铣面/键槽/端面孔/径向孔', en:'Milling, keyways, end holes, radial holes' },
    'equip.dosan.l4': { zh:'适合复杂零件一次成型', en:'One-setup machining for complex parts' },
    'equip.dosan.l5': { zh:'禾隆走刀机配套加工', en:'Paired with Helong gang-type lathes' },

    'equip.cam.tag':  { zh:'自动化设备', en:'Automated Equipment' },
    'equip.cam.h3':   { zh:'凸轮机 / 自动机床', en:'Cam Machines / Automatic Lathes' },
    'equip.cam.l1':   { zh:'铜、铝、铁、塑料等精密零件', en:'Precision parts in copper, aluminum, steel, plastic' },
    'equip.cam.l2':   { zh:'仪表、钟表、汽车、摩托零件', en:'Instruments, watches, automotive, motorcycle parts' },
    'equip.cam.l3':   { zh:'眼镜、五金卫浴、电子接插件', en:'Eyewear, hardware, plumbing, electronic connectors' },
    'equip.cam.l4':   { zh:'电脑、手机、机电、军工行业', en:'Computers, mobile, electromechanical, defense' },
    'equip.cam.l5':   { zh:'适合小零件大批量加工', en:'Ideal for small parts in high-volume runs' },

    'equip.assm.tag': { zh:'自动化装配', en:'Automated Assembly' },
    'equip.assm.h3':  { zh:'自动化组装机', en:'Automated Assembly Machines' },
    'equip.assm.l1':  { zh:'喷嘴自动组装机', en:'Automatic nozzle assembly machine' },
    'equip.assm.l2':  { zh:'铣面机 / 无心磨 MT1040A', en:'Face milling / Centerless grinder MT1040A' },
    'equip.assm.l3':  { zh:'攻牙机 ZS4112 / 滚牙机 TB-3T', en:'Tapping ZS4112 / Thread rolling TB-3T' },
    'equip.assm.l4':  { zh:'试水机全检装配质量', en:'Water test machines for 100% assembly QC' },
    'equip.assm.l5':  { zh:'数控外圆磨 MK', en:'CNC cylindrical grinder MK' },

    'equip.list.eyebrow':{ zh:'设备清单', en:'FULL LIST' },
    'equip.list.title':{ zh:'生产设备清单', en:'Equipment Schedule' },
    'equip.list.desc':{ zh:'完整设备明细,涵盖走心、车铣、磨削、攻牙等全工序。', en:'A complete equipment list spanning turning, mill-turn, grinding, and tapping.' },
    'equip.list.h':   { zh:'设备清单', en:'Equipment Schedule' },
    'equip.th.name':  { zh:'名称', en:'Name' },
    'equip.th.model': { zh:'型号', en:'Model' },
    'equip.th.origin':{ zh:'产地', en:'Origin' },
    'equip.th.unit':  { zh:'单位', en:'Unit' },
    'equip.th.qty':   { zh:'数量', en:'Qty' },

    // 设备清单行(中英对照,设备名称翻译)
    'eq.row.走心机':         { zh:'走心机',           en:'Swiss-Type Lathe' },
    'eq.row.车铣复合':       { zh:'车铣复合',         en:'Mill-Turn Center' },
    'eq.row.数控旋风铣':     { zh:'数控旋风铣',       en:'CNC Whirl Mill' },
    'eq.row.走刀机':         { zh:'走刀机',           en:'Gang-Type Lathe' },
    'eq.row.自动车床':       { zh:'自动车床',         en:'Automatic Lathe' },
    'eq.row.喷嘴自动组装机': { zh:'喷嘴自动组装机',   en:'Auto Nozzle Assembler' },
    'eq.row.铣面机':         { zh:'铣面机',           en:'Face Milling Machine' },
    'eq.row.无心磨':         { zh:'无心磨',           en:'Centerless Grinder' },
    'eq.row.攻牙机':         { zh:'攻牙机',           en:'Tapping Machine' },
    'eq.row.滚牙机':         { zh:'滚牙机',           en:'Thread Rolling Machine' },
    'eq.row.试水机':         { zh:'试水机',           en:'Water Test Machine' },
    'eq.row.数控外圆磨':     { zh:'数控外圆磨',       en:'CNC Cylindrical Grinder' },
    'eq.row.台':             { zh:'台',               en:'unit' },

    // 产地
    'origin.jp': { zh:'日本', en:'Japan' },
    'origin.kr': { zh:'韩国', en:'Korea' },
    'origin.cn': { zh:'中国', en:'China' },

    // ===== 品质管理 =====
    'qual.eyebrow':   { zh:'品质管理', en:'QUALITY ASSURANCE' },
    'qual.h1':        { zh:'全流程品质保证体系', en:'Full-Process Quality Assurance System' },
    'qual.sub':       { zh:'从机加工、热处理到电镀、组装、出货,层层检验把控,确保每一件产品都符合高标准。',
                       en:'From machining and heat treatment to plating, assembly, and shipping — rigorous inspection at every stage ensures every product meets high standards.' },
    'qual.flow.eyebrow':{ zh:'工艺流程', en:'PROCESS FLOW' },
    'qual.flow.title':{ zh:'完整生产控制流程', en:'Complete Production Control Flow' },
    'qual.flow.desc': { zh:'产品不同,工艺并不相同,以下表述我们具备的工艺过程。', en:'Processes vary by product — below represents our full process capability.' },
    'flow.机加工':    { zh:'机加工', en:'Machining' },
    'flow.热处理':    { zh:'热处理', en:'Heat Treatment' },
    'flow.外圆磨':    { zh:'外圆磨', en:'Cylindrical Grinding' },
    'flow.二次加工':  { zh:'二次加工', en:'Secondary Operations' },
    'flow.防锈':      { zh:'防锈', en:'Rust Proofing' },
    'flow.电镀':      { zh:'电镀', en:'Plating' },
    'flow.组装':      { zh:'组装', en:'Assembly' },
    'flow.出货':      { zh:'出货', en:'Shipping' },

    'qual.insp.eyebrow':{ zh:'检验方式', en:'INSPECTION' },
    'qual.insp.title':{ zh:'多层级检验把控', en:'Multi-Layer Inspection Control' },
    'qual.insp.desc': { zh:'员工自检、过程巡检、全检与抽检相结合,品质层层把关。',
                       en:'Self-inspection, in-process patrol, 100% and sampling inspection — multi-layer quality control.' },
    'qual.insp.self.title':{ zh:'员工自检', en:'Self-Inspection' },
    'qual.insp.self.desc': { zh:'工序自检与过程检验,品质从源头做起', en:'Process self-checks and in-process inspection — quality starts at the source' },
    'qual.insp.patrol.title':{ zh:'质量巡检', en:'In-Process Patrol (IPQC)' },
    'qual.insp.patrol.desc':{ zh:'生产全过程 IPQC 巡检,及时纠偏', en:'Continuous IPQC patrol inspection across all production stages' },
    'qual.insp.full.title':{ zh:'全检 / 抽检', en:'100% / Sampling Inspection' },
    'qual.insp.full.desc':{ zh:'按 GB2828.1 标准执行,科学判定', en:'Per GB2828.1 standard for scientific, data-driven decisions' },
    'qual.insp.oqc.title':{ zh:'OQC 出货', en:'Outgoing QC (OQC)' },
    'qual.insp.oqc.desc':{ zh:'出货检验与客户服务,全程可追溯', en:'Pre-shipment inspection and customer service with full traceability' },

    'qual.eq.eyebrow':{ zh:'检测设备', en:'TESTING EQUIPMENT' },
    'qual.eq.title':  { zh:'QA 检测设备', en:'QA Testing Equipment' },
    'qual.eq.desc':   { zh:'配备专业检测仪器,从尺寸、硬度到环保指标全面覆盖。',
                        en:'Equipped with professional instruments — covering dimensions, hardness, and environmental compliance.' },
    'qual.img1.cap':  { zh:'三坐标测量仪 / 二次元影像测量仪', en:'CMM / 2D Image Measuring System' },
    'qual.img2.cap':  { zh:'高度规 · 硬度计 · 盐雾试验机 · RoHS 检测仪', en:'Height Gauge · Hardness Tester · Salt Spray Tester · RoHS Analyzer' },

    // 证书
    'qual.cert.eyebrow':{ zh:'资质认证', en:'CERTIFICATIONS' },
    'qual.cert.title':{ zh:'ISO 9001 质量管理体系认证', en:'ISO 9001 Quality Management System Certified' },
    'qual.cert.desc': { zh:'杰顺精密通过 ISO 9001:2015 质量管理体系认证,以标准化流程与持续改进,保障每一件产品的高品质交付。',
                         en:'JIESHUN Precision is ISO 9001:2015 certified — standardized processes and continuous improvement ensuring high-quality delivery of every product.' },

    // ===== 联系我们 =====
    'cont.eyebrow':   { zh:'联系我们', en:'CONTACT' },
    'cont.h1':        { zh:'期待与您合作', en:'We Look Forward to Partnering With You' },
    'cont.sub':       { zh:'如有产品需求或合作意向,欢迎随时与我们联系,杰顺精密为您提供专业的高精密配件方案。',
                       en:'For product inquiries or partnership opportunities, contact JIESHUN Precision for professional, high-precision component solutions.' },
    'cont.touch.eyebrow':{ zh:'联系方式', en:'GET IN TOUCH' },
    'cont.brand':     { zh:'杰顺精密', en:'JIESHUN Precision' },
    'cont.brandSub':  { zh:'JIESHUN PRECISION · 高端精密零配件专业制造商',
                         en:'JIESHUN PRECISION · High-End Precision Components Manufacturer' },
    'cont.addr.label':{ zh:'公司地址', en:'Address' },
    'cont.addr.val':  { zh:'江苏省苏州市甪直镇鸿达路25号',
                       en:'No. 25 Hongda Road, Luzhi Town, Suzhou, Jiangsu, China' },
    'cont.tel.label': { zh:'电话 / 传真', en:'Tel / Fax' },
    'cont.tel.val':   { zh:'Tel: 0512-65041820 / Fax: 0512-66021786',
                       en:'Tel: +86-512-65041820 / Fax: +86-512-66021786' },
    'cont.mobile.label':{ zh:'手机', en:'Mobile' },
    'cont.mobile.val':{ zh:'13801543398(朱先生)', en:'+86 13801543398 (Mr. Zhu)' },
    'cont.map.h4':    { zh:'杰顺精密制造基地', en:'JIESHUN Precision Manufacturing Base' },
    'cont.map.p':     { zh:'坐落于苏州甪直,地处长三角先进制造业核心地带,辐射全国及海外市场。',
                         en:'Located in Luzhi, Suzhou — the heart of the Yangtze River Delta\'s advanced manufacturing hub, serving domestic and global markets.' },
    'cont.wall.cap':  { zh:'苏州杰顺精密五金有限公司', en:'Suzhou Jieshun Precision Machinery Co., Ltd.' },

    // ===== page hero breadcrumb =====
    'bc.about':    { zh:'关于我们', en:'About Us' },
    'bc.culture':  { zh:'企业文化', en:'Culture' },
    'bc.products': { zh:'产品中心', en:'Products' },
    'bc.equipment':{ zh:'生产设备', en:'Equipment' },
    'bc.quality':  { zh:'品质管理', en:'Quality' },
    'bc.contact':  { zh:'联系我们', en:'Contact' },

    // 数字单位
    'unit.mm':      { zh:'mm', en:'mm' },
    'unit.years':   { zh:'年精密制造经验', en:'Years of Experience' },
    'unit.lines':   { zh:'大产品线', en:'Product Lines' },
    'unit.ind':     { zh:'行业应用领域', en:'Industries Served' }
  };

  const STORAGE_KEY = 'jieshun-lang';
  let currentLang = 'zh';

  // ===== 获取翻译 =====
  function t(key){
    const item = I18N[key];
    if(!item) return key;
    return item[currentLang] || item.zh || key;
  }

  // ===== 应用翻译到页面 =====
  function applyLang(lang){
    currentLang = lang;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    // 1. 文本节点(包含占位 {x} 的模板拼接)
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      const item = I18N[key];
      if(!item) return;
      let text = item[lang] || item.zh;
      // 模板变量替换 {0},{1}...
      if(text.indexOf('{')>-1){
        const vars = el.dataset.i18nVars ? JSON.parse(el.dataset.i18nVars) : {};
        Object.keys(vars).forEach(k=>{
          text = text.replace(new RegExp('\\{'+k+'\\}','g'), vars[k]);
        });
      }
      el.textContent = text;
    });

    // 2. title 属性
    document.querySelectorAll('[data-i18n-title]').forEach(el=>{
      const key = el.getAttribute('data-i18n-title');
      const item = I18N[key];
      if(item) el.setAttribute('title', item[lang] || item.zh);
    });

    // 3. document title
    const titleKey = document.body.getAttribute('data-page-title');
    if(titleKey && I18N[titleKey]){
      document.title = I18N[titleKey][lang];
    }

    // 4. meta description
    const metaKey = document.body.getAttribute('data-page-meta');
    if(metaKey && I18N[metaKey]){
      const meta = document.querySelector('meta[name="description"]');
      if(meta) meta.setAttribute('content', I18N[metaKey][lang]);
    }

    // 5. 更新语言切换按钮状态
    document.querySelectorAll('.lang-btn').forEach(btn=>{
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle('active', isActive);
    });

    // 6. 触发数字单位更新
    updateUnitLabels();

    // 7. 保存到localStorage
    try{ localStorage.setItem(STORAGE_KEY, lang); }catch(e){}
  }

  // 数字单位文案随语言切换
  function updateUnitLabels(){
    const map = {
      'unit.years':'unit.years','unit.lines':'unit.lines','unit.ind':'unit.ind','unit.mm':'unit.mm'
    };
    document.querySelectorAll('[data-unit]').forEach(el=>{
      const key = el.getAttribute('data-unit');
      if(I18N[key]) el.textContent = I18N[key][currentLang];
    });
  }

  // ===== 获取当前语言 =====
  function getLang(){ return currentLang; }

  // ===== 初始化 =====
  function init(){
    // 读取语言偏好
    let saved = 'zh';
    try{ saved = localStorage.getItem(STORAGE_KEY) || 'zh'; }catch(e){}
    // 浏览器语言检测(首次访问)
    if(saved === 'zh' && !localStorage.getItem(STORAGE_KEY)){
      const nav = (navigator.language || navigator.userLanguage || 'zh').toLowerCase();
      if(!nav.startsWith('zh')) saved = 'en';
    }
    applyLang(saved);

    // 绑定语言切换按钮
    document.querySelectorAll('.lang-btn').forEach(btn=>{
      btn.addEventListener('click',()=>{
        const lang = btn.dataset.lang;
        if(lang !== currentLang) applyLang(lang);
      });
    });
  }

  // 暴露API
  window.I18n = { t, applyLang, getLang, init, dict:I18N };

  // DOM ready
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})(window);
