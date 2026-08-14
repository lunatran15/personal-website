const n=[{title:"Agile Transformation Is a People Problem Wearing a Process Costume",date:"2025-12-05",summary:"Lessons from leading Agile transformation at a fintech company: the ceremonies are the easy part.",category:"Product Management",tags:["Agile","Product Leadership","Fintech"],author:"Phuong Thu Do",readingTime:"5 min read",featured:!1,content:`## Standups Aren't the Transformation

When I introduced structured Scrum ceremonies at Innotech, the easy part was the calendar invites. The hard part was convincing engineers that a two-week sprint commitment was a promise worth protecting, and convincing stakeholders that mid-sprint scope changes had a real cost.

## What Actually Moved the Needle

- **Visible backlog ownership.** One prioritized backlog, one owner, no shadow lists.
- **Protecting sprint scope.** New requests went into the next sprint, not the current one — enforced consistently, not situationally.
- **Retrospectives with teeth.** Action items got tracked the same way bugs did.

## The Metric That Mattered

Sprint predictability — the ratio of committed to completed story points — became the leading indicator stakeholders trusted more than velocity alone. It's a boring metric. It's also the one that rebuilt confidence in the roadmap.`,_meta:{filePath:"agile-transformation-is-a-people-problem.md",fileName:"agile-transformation-is-a-people-problem.md",directory:".",extension:"md",path:"agile-transformation-is-a-people-problem"}},{title:"Why Blockchain Security Belongs Inside RegTech, Not Beside It",date:"2026-05-20",summary:"Regulatory technology and blockchain security are often treated as separate disciplines. A closer look at why they need to converge — and what that convergence should look like.",category:"Cybersecurity",tags:["Blockchain Security","RegTech","Compliance"],author:"Phuong Thu Do",readingTime:"7 min read",featured:!0,content:`## The Problem with Treating RegTech as a UI Layer

Most RegTech products today are essentially reporting dashboards bolted onto legacy financial infrastructure. They automate the *paperwork* of compliance without touching the *trust model* underneath it. Blockchain-based systems offer something different: a way to make compliance verifiable at the protocol level, not just at the reporting layer.

## Where Security Has to Come First

Any RegTech system built on blockchain inherits blockchain's attack surface — smart contract bugs, consensus manipulation, oracle manipulation, and key management failures. A compliance system that is easy to audit but easy to compromise has simply moved the risk, not reduced it.

\`\`\`solidity
// A naive compliance-check modifier — looks safe, isn't.
modifier onlyCompliant(address account) {
    require(complianceRegistry[account], "not compliant");
    _;
}
\`\`\`

The vulnerability here isn't in the logic — it's in the assumption that \`complianceRegistry\` can't be manipulated. Any RegTech-on-chain design has to treat the compliance oracle itself as a first-class attack surface, not an afterthought.

## Toward Verifiable, Private Compliance

The promising direction — and the focus of my graduate research — is combining zero-knowledge techniques with on-chain compliance registries, so regulators can verify an institution *is* compliant without seeing the underlying sensitive transaction data. This is the RegTech blockchain security should have been building toward from the start.

### References
- NIST, "Blockchain Technology Overview" (NISTIR 8202)
- Financial Action Task Force, "Guidance on Virtual Assets"`,_meta:{filePath:"blockchain-security-belongs-in-regtech.md",fileName:"blockchain-security-belongs-in-regtech.md",directory:".",extension:"md",path:"blockchain-security-belongs-in-regtech"}},{title:"From an Ohio E-commerce Storefront to a Cybersecurity Research Lab in China",date:"2025-09-22",summary:"A career journey across three countries and three disciplines — and what stayed consistent the whole way through.",category:"Career & Learning Journey",tags:["Career Development","International Experience","Lessons Learned"],author:"Phuong Thu Do",readingTime:"6 min read",featured:!0,content:`## Three Countries, One Throughline

My career has moved through Ohio, Hanoi, Long Beach, and Hefei — from running a small e-commerce operation, to studying business in California, to Agile product leadership in Vietnam's tech scene, to cybersecurity research in China. On paper, that looks scattered. In practice, every move sharpened the same underlying skill: translating ambiguity into a plan someone can execute.

## What E-commerce Taught Me About Product Management

Running a storefront means you are the analyst, the marketer, and the support team. That forced fluency across functions is exactly what makes cross-functional product management feel natural rather than intimidating.

## Why I Chose Cybersecurity Research, Not Just Product Leadership

Product management taught me to ship. Research is teaching me to interrogate assumptions before they become production incidents. Combining both is the bet I'm making on where technology leadership needs to go — practitioners who can both build and rigorously question what they build.

## Advice I'd Give the Version of Me Starting in Ohio

Don't wait for a "logical next step." The e-commerce years didn't look like a technology career until years later — but every one of them is still visible in how I approach product problems today.`,_meta:{filePath:"ohio-storefront-to-cybersecurity-research.md",fileName:"ohio-storefront-to-cybersecurity-research.md",directory:".",extension:"md",path:"ohio-storefront-to-cybersecurity-research"}},{title:"Smart Contract Security 101 for Product Managers",date:"2026-02-18",summary:"You don't need to write Solidity to ship a Web3 product responsibly — but you do need to know what questions to ask your engineering team.",category:"Blockchain Technology",tags:["Smart Contracts","Web3 Security","Blockchain Architecture"],author:"Phuong Thu Do",readingTime:"8 min read",featured:!1,content:`## The PM's Job Isn't to Audit the Code

It's to make sure an audit happens, and to understand its findings well enough to make a launch decision. Too many Web3 products ship with "we're getting audited soon" as an accepted risk, when it should be a launch blocker.

## The Vulnerability Classes Every PM Should Recognize by Name

- **Reentrancy** — a contract calls out to an untrusted address before updating its own state.
- **Integer overflow/underflow** — largely mitigated in modern Solidity, but still worth asking about in older contracts.
- **Access control gaps** — functions that should be restricted but aren't.
- **Oracle manipulation** — price or data feeds that can be gamed to trigger unintended contract behavior.

\`\`\`solidity
// Vulnerable to reentrancy: external call before state update
function withdraw(uint amount) public {
    require(balances[msg.sender] >= amount);
    (bool sent, ) = msg.sender.call{value: amount}("");
    require(sent);
    balances[msg.sender] -= amount; // too late
}
\`\`\`

## Building a Security Checklist Into the Roadmap

Treat "third-party audit," "bug bounty window," and "incident response runbook" as roadmap line items with owners and dates — not footnotes in a launch doc.

### References
- Consensys, "Smart Contract Best Practices"
- Trail of Bits, "Building Secure Contracts"`,_meta:{filePath:"smart-contract-security-101-for-pms.md",fileName:"smart-contract-security-101-for-pms.md",directory:".",extension:"md",path:"smart-contract-security-101-for-pms"}},{title:"What Product Managers Get Wrong About AI Features",date:"2026-04-10",summary:"AI is not a feature you bolt onto a roadmap. Lessons from shipping ML-driven product features on managing uncertainty, evaluation, and user trust.",category:"AI & Machine Learning",tags:["AI Product Management","Machine Learning","Product Strategy"],author:"Phuong Thu Do",readingTime:"6 min read",featured:!0,content:`## AI Features Fail Product Requirements, Not Just Models

Most "AI didn't work" postmortems I've seen are actually product management failures. The model performed within its documented accuracy range — the product simply never defined what "good enough" meant for the user experience it was embedded in.

## Three Questions Before Writing a Single User Story

1. **What does the model get wrong, and who is harmed when it does?** Building a low-carbon optimization feature taught me that a "close enough" recommendation is fine for suggesting a bike route, and not fine for a compliance decision.
2. **How is uncertainty communicated to the user?** Confidence scores mean nothing to a user unless the UI translates them into a decision they can act on.
3. **What is the fallback when the model is wrong?** Every AI feature needs a deterministic escape hatch.

## A Simple Evaluation Framing

\`\`\`python
def is_recommendation_actionable(prediction, confidence_threshold=0.75):
    return prediction.confidence >= confidence_threshold and prediction.has_fallback
\`\`\`

Trivial code, but it forces the product conversation that usually gets skipped: what happens below the threshold?

## Bringing Security Thinking to AI Product Work

My cybersecurity research background changes how I scope AI features — I default to asking "how could this be gamed or poisoned" alongside "does this delight the user." Both questions belong in the same PRD.`,_meta:{filePath:"what-pms-get-wrong-about-ai-features.md",fileName:"what-pms-get-wrong-about-ai-features.md",directory:".",extension:"md",path:"what-pms-get-wrong-about-ai-features"}},{title:"只是加个下拉菜单而已",date:"2026-03-11",summary:"Funny IT story.",category:"Chinese",tags:["Agile","Product Leadership","Fintech","Chinese"],author:"Phuong Thu Do",readingTime:"5 min read",featured:!1,content:`如果第一部分是前端和后端为了一个下拉框互相开战，那第二部分就是整个团队团结一致 - 一起跟项目经理吵架。\r
[四位同事正围站在一台笔记本电脑旁，身处现代办公室中讨论项目计划，他们面带微笑，看起来专注投入且合作默契。](../../public/images/funnystory.png)\r
\r
在IT公司的生态，项目管理（PM）是一种非常特殊的存在。无法编写代码，无法测试，无法部署，但拥有一项团队中无人能及的超级能力：跟客户交流。\r
\r
而这正是世间所有痛苦的根源。\r
\r
因为每次 PM 和客户聊完天，就会带着灿烂的笑容回到团队里，然后抛出一句比电影里的跳吓还要惊悚的话:\r
\r
“我有很小的变更。“\r
\r
我团队的PM叫雄。姓阮。河内纸桥区人。领英简介上写着：“敏捷方法爱好者 | 认证Scrum Master | 热情于传递价值。”\r
\r
传递价值。他唯一始终如一传递的价值，就是在冲刺最后一天给整个团队带来新的需求。\r
\r
雄哥有一个特点：他喜欢开会。喜欢到如果哪一天没有任何会议，他就会自己创造一个会议。他把这个会议叫做“五分钟快速同步”。他的同步会从来没有少于45分钟的。他这个Scrum Master同步起来就像Windows XP时代的HDD - 转个完不了。\r
\r
他还有一个毛病：当客户理解 需求，他常常说：“我知道了”。其实，他不懂，他只知道客户在说。内容方面呢，他就留给团队自己去领悟。他称之为“给团队赋能”。团队则称之为“扔完炸弹就跑”。\r
\r
阿达已经改修好了。\r
\r
第十五个冲刺，最后一天。周五。下午2点。只有3小时会跟客户做冲刺评审。\r
\r
阿达刚修完最后一个bug。庄姐刚把API部署到staging环境。坚（运维）刚检查完流水线 一片绿。香姐（QA）刚关闭了最后一个工单。整个团队松了一口气。这个冲刺稳了。可以早点下班。可以喝啤酒。可以像正常人一样生活了。\r
\r
\r
\r
但阿雄进来。\r
\r
笑容这么灿烂。\r
\r
“各位团队成员，我刚和客户通了电话”。\r
\r
整个团队被冷冻。就像你正在执行 git push --force，然后突然发现自己 push 错了 main 分支时的那种凝固。\r
\r
“只想加一个小功能。细细小的。大概1-2小时可能完成。“\r
\r
细细小的。\r
\r
在IT行业史上，还没有哪句话比“大概一两个小时就能搞定”更具毁灭性了。这句话毁掉的 冲刺 比技术债还多。这句话毁掉的周末比 rm -rf 命令还多。它比低薪水更多程序员辞职。\r
\r
阿达问：“什么功能？“\r
\r
“客户要一个省份城市的下拉菜单...“\r
\r
整个团队打了个寒颤。那个下拉菜单。又是那个下拉菜单。这个从冲刺14就被诅咒的下拉菜单。\r
\r
“……再加个搜索功能。输入‘Hà’就显示‘Hà Nội’（河内）、‘Hà Giang’（河江）、‘Hà Nam’（河南）、‘Hà Tĩnh’（河静）。很简单的嘛。”\r
\r
很简单。\r
\r
阿达在心里默默估算：加搜索输入框、筛选逻辑、加防抖避免每次按键都调API、高亮匹配的文本、处理用户输入不标音越南语时的边界情况、处理无搜索结果时的显示……\r
\r
“雄哥，这个功能不可能只花的一两个小时”\r
\r
“啊？只加个搜索框而已吧。“\r
\r
只加个搜索框而已吧。\r
\r
这话就相当于房子都盖好了、刷好了、家具都摆好了、人都搬进去住两周了，然后说“不如加个卧室嘛”。\r
\r
庄姐发言了：“现在的 API 不支持搜索，必须新写一个接口，加查询参数，给数据库加索引。更别说还得做性能测试，省市表里有一万三千多条街道和乡社的记录。”\r
\r
雄哥说：“好的……那你估算一下，如果做这个任务需要多长时间？”\r
\r
庄姐说：“3天“\r
\r
“什么，3天？？？“\r
\r
“是的。3天。如果没有bug. 但是常常会有bug”\r
\r
雄哥回头问阿达：“前端呢？“\r
\r
“两天。必须处理搜索的用户体验、防抖、越南语变音符号匹配、无结果状态..."\r
\r
“防抖是什么？“\r
\r
项目经理问“防抖是什么”，像将军在战争中问“用剑干吗？“。哥，你的Scrum证书是在哪儿考的？Lazada(越南的闲鱼)上买的吗？\r
\r
坚（运维）插话道：“但如果加新接口，我就得更新API网关、加路由、给搜索接口配置限流，因为用户可能会spam。更别说staging环境现在正跟其他团队共用，我还得预约部署时段。”\r
\r
香姐（QA）说：“而且我得重写测试用例。旧的下拉菜单有12个用例。加上搜索的话至少再多30个。还不算回归测试。”\r
\r
\r
\r
阿雄沉默了10秒钟。那种刚刚意识到自己向客户承诺了一件团队需要5天才能完成、而现在只剩3小时的事情的沉默。“可是……我已经跟客户说了这个冲刺会有。”整个团队都盯着阿雄。\r
\r
那种眼神不是愤怒。也不是失望。那是四个人刚刚听到了自己周末的死刑判决书时的眼神。\r
\r
\r
\r
阿达打开 Slack 私聊庄姐：“今晚肯定留下来加班吧。”\r
\r
庄姐回：“我知道。周六我约了跟我妈吃饭。”“取消吧。“\r
\r
”你帮我取消啊。你打电话跟她说‘我忙着修下拉菜单’看她什么反应。”\r
\r
坚在开发小群（没有PM）里发消息：“阿雄又乱承诺了。这次我建议全队罢工。”\r
\r
香姐：“罢工完谁给我付房租啊？”\r
\r
坚：“那您先测着。我来部署。”\r
\r
“部署什么？代码在哪儿呢？”“那就等那俩写完代码呗。”\r
\r
“那俩正吵着谁先写呢。”\r
\r
\r
\r
下午5点。冲刺评审会。客户进入了 Google Meet。\r
\r
阿雄-以他作为久经沙场的PM的魄力-开场道：“这个冲刺，团队已经按计划出色地完成了所有用户故事。关于省份城市搜索功能，团队经过深入分析，认为需要更多时间来确保用户体验的最佳质量。我们建议将其放入下一个冲刺。”\r
\r
阿达在下面闭麦，在Slack上敲道：“翻译：我乱承诺了，团队没赶出来，申请延期。”\r
\r
庄姐回：“但得承认他说得真好听。我说同样的话，客户就骂，他说客户就点头。”\r
\r
坚：“这就是他工资比你高的原因。”\r
\r
香姐：“这也是我想转行的原因。”客户点头：“OK，那就下个冲刺吧。不过我还想再加一个东西……”\r
\r
整个团队第二次凝固了。“……省份城市的下拉菜单，选完之后，能不能顺便显示位置地图？”\r
\r
\r
\r
地图！\r
\r
\r
\r
阿雄转头看着镜头里的团队。团队也看着他。八只眼睛，一眨不眨。那是四个士兵刚听到将军说“我们再打一仗吧”，而此刻弹药已尽、粮草已绝、援军正在休假时的眼神。\r
\r
阿雄咽了口唾沫。然后露出了笑容。“好的，让团队评估一下。”\r
\r
\r
\r
评估。PM词典里最美的词。它的意思是“我还不知道能不能做，但我不想当着客户的面说不”。\r
\r
\r
\r
下午六点。客户退出了Meet。整个团队留了下来。\r
\r
沉默了30秒。\r
\r
\r
\r
然后坚开口了：“我辞职。”\r
\r
庄姐：“我也辞。”\r
\r
阿达：“我比你们俩先辞。”\r
\r
香姐：“我从冲刺7就在脑子里辞职了。”\r
\r
阿雄：“大家冷静。我会跟客户重新商量范围。地图可以放第二阶段。搜索下拉菜单下个冲刺时间肯定够。”\r
\r
“您说‘肯定’的样子，就跟您下午2点说‘大概一两个小时’时一模一样。”\r
\r
阿雄笑了。那种知道自己错了，但因自尊和Scrum Master的头衔不允许承认的人的笑。\r
\r
\r
\r
但最后，整个团队还是留了下来。\r
\r
不是因为爱公司。不是为了怕PM.不是为了什么崇高责任。\r
\r
因为阿雄外卖了。\r
\r
2份越南牛肉米粉、1份炒饭、1份河粉、4杯奶茶。总账单487千越南盾。阿勇用公司卡付了。这是PM最重要的技能——知道什么时候该叫外卖，让团队不会造反。阿达一边吃牛肉米粉一边写搜索组件的代码。庄姐一边吸溜河粉一边写API接口。坚一边喝奶茶一边配置API网关。香姐坐着写测试用例，时不时瞥一眼阿达的屏幕，然后记下阿达还没想到的一个边界情况。\r
\r
\r
\r
阿雄不会写代码。但他留了下来。他又煮了咖啡。他每30分钟问一次“大家需要什么吗？”。他更新Jira面板。他把需求写得更清楚了-15个冲刺以来的第一次。晚上11点。搜索下拉菜单在staging环境跑起来了。\r
\r
\r
\r
阿达测试了一下：输入 "Hà" → 显示 "Hà Nội"（河内）、"Hà Giang"（河江）、"Hà Nam"（河南）、"Hà Tĩnh"（河静）。输入不带声调的 "ha" → 仍然显示。输入 "hna" → 显示 "未找到结果"。\r
\r
"不错。"\r
\r
庄姐检查 API 响应时间：47毫秒。低于100毫秒。可接受。\r
\r
"不错。"\r
\r
坚检查服务器日志：没有错误。缓存清除正常。\r
\r
"不错。"\r
\r
香姐运行了30个测试用例：29个通过。1个失败 - 当用户在搜索框输入表情符号时应用崩溃。\r
\r
"谁会拿表情符号搜索省份啊？"- 阿达说\r
\r
"会有的。相信姐。"- 香姐回答香姐说得对。\r
\r
QA永远是对的。因为QA像用户一样思考 - 而用户就是疯了。\r
\r
\r
\r
阿达花了5分钟修复表情符号的边界情况。重新测试。30/30通过。\r
\r
“上线？”\r
\r
“上线。”\r
\r
坚部署到生产环境。周五晚上11点47分。整个团队盯着监控仪表盘。没有报错。没有峰值。一片绿油油。\r
\r
\r
\r
没人说话。只听见阿达吸溜最后几口已经凉透的牛肉米粉的声音。\r
\r
\r
\r
午夜12点。整个团队下班回家。阿达骑摩托车，载着庄姐因为都往龙边桥方向。庄姐坐在后座，打开笔记本电脑架在车箱上，敲下最后一条提交信息：“feat: 添加省份搜索接口 - 献给冲刺15的幸存者们。”\r
\r
\r
\r
坚坐Grab（越南人平常使用的滴滴）回家。车上，他打开手机看到朋友的信息：“嘿明天去喝酒不？” 他回复：“明天我睡觉。补三个冲刺的觉。”\r
\r
\r
\r
香姐回到家，丈夫问：“怎么回来这么晚？” 她回答：“修下拉菜单。” 她丈夫是做建筑的，看了她5秒钟，没懂下拉菜单是什么，但点了点头然后去热饭了。好男人不需要懂代码。只需要知道在合适的时候热饭。\r
\r
\r
\r
阿雄回到家，打开领英，发了一篇帖子：\r
\r
"Proud of my team! Another successful sprint delivery. Teamwork makes the dream work"\r
\r
47个赞。12条“Congrats！”的评论。没有一条评论来自团队。\r
\r
\r
\r
下周一， 第十六冲刺的计划会议。\r
\r
阿雄开始：“这冲刺客户要在地图里加下拉菜单……“\r
\r
四个人看着他。\r
\r
“但是我已经商量过，他会在第二阶段。这冲刺我们只要。。。“\r
\r
整个团队屏住呼吸。“……给整个应用加上深色模式。”\r
\r
\r
\r
深 色 模 式。\r
\r
\r
\r
阿达：“哥，你知道深色模式得换整个颜色系统、创建主题提供器、所有页面UI都要重新测试吗？”\r
\r
“嗯，但客户说很简单嘛。就把白的换成黑的就行。”\r
\r
就 把 白 的 换 成 黑 的。\r
\r
庄姐转向阿达：“你的‘证据’文件夹还空着吗？”\r
\r
“有的，我刚创造子文件夹：'Sprint_16'."\r
\r
坚打开终端，敲了一行命令然后enter：echo "我爱IT行业" >> lies.txt\r
\r
香姐没说话。她打开Jira。新建了一个史诗。史诗名称：“深色模式。”然后她创建了第一个工单：“测试：验证应用在1秒内切换主题500次不会崩溃。”\r
\r
阿达看着这个工单：“谁会在1秒内切换主题500次啊？”\r
\r
香姐看着他：“会有的。相信姐。”\r
\r
\r
\r
人生在世做开发，处处都是坑。只可惜…… PM依然通过Zalo（越南的微信）语音消息发来需求。冲刺16开始了。而那个省份城市的下拉菜单，依然萦绕在团队的梦境里。\r
\r
（END -  除非 PM又给客户打了电话，然后带着灿烂的笑容转身回来。）\r
\r
\r
\r
Credit: Code toàn bug`,_meta:{filePath:"只是加个下拉菜单而已.md",fileName:"只是加个下拉菜单而已.md",directory:".",extension:"md",path:"只是加个下拉菜单而已"}}];export{n as a};
