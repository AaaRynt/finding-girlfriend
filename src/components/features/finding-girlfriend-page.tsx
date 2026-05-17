// src/components/features/finding-girlfriend-page.tsx
import { Activity, ArrowRight, Braces, CalendarDays, Check, Code2, Coffee, Eye, Heart, Map, MessageSquareText, Radio, Route, ScanLine, Shield, Terminal, Users, Wifi, Zap } from 'lucide-react'
import type { ReactNode } from 'react'

type TIcon = typeof Terminal

type TSystemMetric = {
  label: string
  value: string
  hint: string
  icon: TIcon
  tone: string
}

type TErrorPath = {
  title: string
  description: string
  tag: string
  icon: TIcon
}

type TStrategy = {
  index: string
  title: string
  summary: string
  bullets: string[]
  icon: TIcon
  image?: string
}

type TChecklistItem = {
  title: string
  detail: string
}

const systemMetrics: TSystemMetric[] = [
  {
    label: 'weekly_social_events',
    value: '0.7',
    hint: '线下事件不足，暴露面偏低',
    icon: CalendarDays,
    tone: 'text-[var(--color-coral)]',
  },
  {
    label: 'new_people_met_per_month',
    value: '1.2',
    hint: '新增连接慢于情感需求增长',
    icon: Users,
    tone: 'text-[var(--color-chalky)]',
  },
  {
    label: 'female_ratio_in_environment',
    value: 'low',
    hint: '工作场域样本结构单一',
    icon: ScanLine,
    tone: 'text-[var(--color-fountain-blue)]',
  },
  {
    label: 'romantic_probability',
    value: 'not zero',
    hint: '不是归零，是没有被充分暴露',
    icon: Heart,
    tone: 'text-[var(--color-green)]',
  },
]

const errorPaths: TErrorPath[] = [
  {
    title: '把恋爱当成算法题',
    description: '关系不是一次提交、全部通过、击败 99.8% 用户。它更像长期概率事件。',
    tag: 'LeetCode mode',
    icon: Braces,
  },
  {
    title: '把女性当成目标对象',
    description: '目标捕获式表达会让人紧绷、功利、失真。健康关系是两个具体的人逐渐靠近。',
    tag: 'target locked',
    icon: Eye,
  },
  {
    title: '用幻想替代行动',
    description: '更高配置不会自动修复网络断连。生活结构不变，孤独也会保持升级。',
    tag: 'future patch',
    icon: Zap,
  },
  {
    title: '只在互联网上表达自己',
    description: '真实关系需要眼神、语气、停顿、笨拙和临场反应，这是人类协议的麻烦部分。',
    tag: 'online only',
    icon: Radio,
  },
]

const strategies: TStrategy[] = [
  {
    index: '01',
    title: '扩大生活半径',
    summary: '先让自己出现在更多真实场景里，不是立刻搭讪，也不是突然变成社交达人。',
    bullets: ['骑行、羽毛球、攀岩、摄影', '读书会、展览、桌游局、朋友饭局', '技术社区线下活动'],
    icon: Route,
    image: '/images/commute-city.png',
  },
  {
    index: '02',
    title: '从工作流里解放一点',
    summary: '保留一些不服务绩效的时间，让感受、表达、欲望和创造力重新有空间。',
    bullets: ['散步、运动、阅读、拍照', '做饭、发呆、见朋友', '至少每天一段不看屏幕的时间'],
    icon: Coffee,
    image: '/images/desk.png',
  },
  {
    index: '03',
    title: '重新训练表达能力',
    summary: '不是油嘴滑舌，而是具体、自然、有一点观察力，让自己不像只会输出状态码的后端服务。',
    bullets: ['描述真实生活，而不是只说“还行”', '把观察放进句子里', '允许一点冷幽默，但别表演'],
    icon: MessageSquareText,
  },
  {
    index: '04',
    title: '改善外在，但别变成包装工程',
    summary: '外在不是全部，但它是入口。干净、合身、正常发型和不垮的体态已经能修复很多 UI 问题。',
    bullets: ['衣服颜色别随机生成', '鞋子别像经历过三次局部战争', '皮肤状态和体态保持基本可用'],
    icon: Shield,
  },
  {
    index: '05',
    title: '不要表现得太饥饿',
    summary: '遇到一点善意就规划未来，往往是系统资源长期不足后的异常峰值。',
    bullets: ['可以表达兴趣，但不要过载', '不要把对方当成人生救援队', '吸引力应该是松弛的'],
    icon: Activity,
  },
  {
    index: '06',
    title: '建立低压力的重复见面场景',
    summary: '一次见面很难生成关系。真正起作用的，通常是稳定、自然、没有强目的性的重复出现。',
    bullets: ['固定参加同一类线下活动', '别每次都从零开始社交', '让别人记住一个稳定出现的你'],
    icon: Users,
  },
]

const checklistItems: TChecklistItem[] = [
  {
    title: '每周固定一次线下活动',
    detail: '稳定增加真实接触，而不是等待随机事件触发。',
  },
  {
    title: '每天一段不看屏幕的时间',
    detail: '把注意力从无限滚动里取回一点。',
  },
  {
    title: '每周运动两到三次',
    detail: '改善体态、能量和对自己身体的掌控感。',
  },
  {
    title: '整理衣柜',
    detail: '保留简单、干净、合身的衣服。',
  },
  {
    title: '练习自然语言描述生活',
    detail: '从“还行”“随便”“都可以”升级到具体表达。',
  },
  {
    title: '恢复弱连接',
    detail: '主动联系已有朋友，让旧网络重新有流量。',
  },
  {
    title: '低压力交流',
    detail: '在真实场景里和陌生人进行简短、自然的对话。',
  },
  {
    title: '不要自动放入候选池',
    detail: '先把对方当成具体的人，而不是情感需求的接口。',
  },
  {
    title: '保持一个长期爱好',
    detail: '它不需要炫酷，只需要真实持续。',
  },
  {
    title: '允许失败和尴尬',
    detail: '现实没有撤回键，也不应该只有成功路径。',
  },
]

const exposureItems = ['骑行', '羽毛球', '攀岩', '摄影', '读书会', '展览', '桌游局', '朋友饭局', '技术社区']

const postGraduationLogs = [
  {
    time: '08:10',
    event: 'wake up',
    note: '从出租屋的窗帘缝里确认今天依然是工作日。',
  },
  {
    time: '09:02',
    event: 'standup meeting',
    note: '同步进度，异步消耗情绪。',
  },
  {
    time: '12:17',
    event: 'takeaway',
    note: '外卖柜成为当天最稳定的线下交互。',
  },
  {
    time: '19:46',
    event: 'still in office',
    note: '工位灯没关，人的社交模块先休眠。',
  },
  {
    time: '23:58',
    event: 'doomscrolling',
    note: '屏幕继续刷新，现实连接保持 pending。',
  },
]

function SectionEyebrow({ children }: { children: string }) {
  return (
    <div className="mb-4 flex items-center gap-2 font-mono text-xs text-[var(--color-fountain-blue)] uppercase">
      <span className="h-px w-8 bg-[var(--color-fountain-blue)]" />
      {children}
    </div>
  )
}

function TerminalWindow({ children, title }: { children: ReactNode; title: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-panel)] shadow-2xl shadow-black/30">
      <div className="flex h-11 items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-panel-alt)] px-4">
        <div className="flex items-center gap-2">
          <span className="size-3 rounded-full bg-[var(--color-coral)]" />
          <span className="size-3 rounded-full bg-[var(--color-chalky)]" />
          <span className="size-3 rounded-full bg-[var(--color-green)]" />
        </div>
        <div className="font-mono text-xs text-[var(--color-light-dark)]">{title}</div>
        <Terminal className="size-4 text-[var(--color-light-dark)]" strokeWidth={1.8} />
      </div>
      {children}
    </div>
  )
}

function FindingGirlfriendHero() {
  return (
    <section className="relative min-h-[86svh] overflow-hidden border-b border-[var(--color-border)]">
      <img alt="夜晚科技园区里刚毕业的理工男走过灯光低饱和的街道" className="absolute inset-0 h-full w-full object-cover" src="/images/hero.png" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(33,37,43,0.94)_0%,rgba(33,37,43,0.78)_44%,rgba(33,37,43,0.3)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_68%,var(--color-background)_100%)]" />

      <div className="relative mx-auto flex min-h-[86svh] max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-10">
        <header className="flex items-center justify-between border-b border-[var(--color-border)] pb-4">
          <div className="flex min-w-0 items-center gap-3">
            <Code2 className="size-5 shrink-0 text-[var(--color-green)]" />
            <span className="truncate font-mono text-sm text-[var(--color-light-white)]">/docs/Finding Girlfriend.md</span>
          </div>
          <div className="hidden items-center gap-2 font-mono text-xs text-[var(--color-light-dark)] sm:flex">
            <span className="h-2 w-2 rounded-full bg-[var(--color-green)]" />
            static_single_page
          </div>
        </header>

        <div className="grid flex-1 items-center gap-8 py-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-panel)]/80 px-3 py-2 font-mono text-xs text-[var(--color-chalky)] backdrop-blur">
              <Wifi className="size-4" />
              status: reconnecting...
            </div>
            <h1 className="text-5xl leading-[1.02] font-semibold text-balance text-[var(--color-invalid)] sm:text-6xl lg:text-7xl">Finding Girlfriend</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-pretty text-[var(--color-light-white)] sm:text-xl">一个刚毕业的科技园区理工男大学生的找女朋友方法，也是一次社交系统重构指南。</p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-light-white)]/85">你不是找不到女朋友。你只是把生活部署成了一个高度封闭的单机系统：白天写代码，晚上刷手机，周末补觉，社交半径稳定维持在公司、出租屋、便利店和外卖柜之间。</p>
          </div>

          <TerminalWindow title="relationship-diagnosis.yml">
            <pre className="overflow-x-auto p-5 text-sm leading-7 text-[var(--color-light-white)] sm:p-6">
              <code>{`profile:
  identity: '刚毕业的科技园区理工男'
  location: '城市边缘的产业园区'
  routine: '公司 -> 外卖 -> 出租屋 -> 屏幕'
  emotional_state: '可运行，但长期告警'

metrics:
  weekly_social_events: 0.7
  new_people_met_per_month: 1.2
  female_ratio_in_environment: 'low'
  romantic_probability: 'not zero, but poorly exposed'`}</code>
            </pre>
          </TerminalWindow>
        </div>
      </div>
    </section>
  )
}

function SystemStatusSection() {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-background)] py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionEyebrow>current system state</SectionEyebrow>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold text-[var(--color-invalid)] sm:text-4xl">当前系统状态：可运行，但长期告警</h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-light-white)]">你每天接触很多系统，却很少接触真实的人。你熟悉接口、组件、状态管理、构建工具，却不熟悉如何自然地进入一段关系。</p>
            <p className="mt-4 text-base leading-8 text-[var(--color-light-white)]/80">这不是恋爱技巧问题。这是系统架构问题。现代城市已经把很多年轻人训练成了高效、沉默、疲惫的生产节点。</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {systemMetrics.map((metric) => {
              const Icon = metric.icon

              return (
                <article className="rounded-lg border border-[var(--color-border)] bg-[var(--color-panel)] p-5" key={metric.label}>
                  <div className="flex items-center justify-between gap-4">
                    <Icon className={`size-5 ${metric.tone}`} strokeWidth={1.8} />
                    <span className="font-mono text-xs text-[var(--color-light-dark)]">metric</span>
                  </div>
                  <div className="mt-5 font-mono text-sm text-[var(--color-light-dark)]">{metric.label}</div>
                  <div className="mt-2 text-3xl font-semibold text-[var(--color-invalid)]">{metric.value}</div>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-light-white)]/80">{metric.hint}</p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function TechParkObservationSection() {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-panel-alt)] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-12 max-w-3xl">
          <SectionEyebrow>urban observation</SectionEyebrow>
          <h2 className="text-3xl leading-tight font-semibold text-[var(--color-invalid)] sm:text-5xl">科技园区并不擅长让人相爱</h2>
          <p className="mt-6 text-base leading-8 text-[var(--color-light-white)]/78">它擅长把人送进楼宇，把工牌贴近闸机，把外卖准确投递到柜门编号。它能让项目按期上线，也能让一个人的现实生活被压缩成几个可重复的坐标。</p>
        </div>

        <div className="relative -mx-5 min-h-[560px] overflow-hidden border-y border-[var(--color-border)] sm:mx-0 sm:rounded-lg sm:border lg:min-h-[680px]">
          <img alt="夜晚科技园区通勤城市道路和办公楼" className="absolute inset-0 h-full w-full object-cover opacity-85 saturate-[0.72]" src="/images/commute-city.png" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(30,34,39,0.9)_0%,rgba(30,34,39,0.62)_45%,rgba(30,34,39,0.28)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,34,39,0.2)_0%,rgba(30,34,39,0.08)_42%,rgba(30,34,39,0.86)_100%)]" />

          <div className="relative flex min-h-[560px] flex-col justify-end px-5 py-10 sm:px-8 lg:min-h-[680px] lg:px-12 lg:py-14">
            <div className="max-w-3xl">
              <p className="font-mono text-sm text-[var(--color-chalky)]">01:00 / office towers still online</p>
              <p className="mt-5 text-3xl leading-tight font-semibold text-[var(--color-invalid)] sm:text-5xl">凌晨一点，园区还有很多楼层亮着。</p>
              <div className="mt-8 space-y-5 text-base leading-8 text-[var(--color-light-white)]/86 sm:text-lg sm:leading-9">
                <p>巨大的办公楼像低饱和的服务器机柜，长期开灯的楼层显示着一种并不体面的稳定性。</p>
                <p>这里适合部署服务、交付项目、迭代产品。 但不太适合建立亲密关系。</p>
                <p>现代城市正在把人与人的连接压缩到最低成本。</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-[var(--color-border)] pt-8 md:grid-cols-3">
          <p className="text-sm leading-7 text-[var(--color-light-white)]/74">门禁把人群切成权限，工牌把身份切成字段。每天都在进入某个系统，却很少真正进入某个人的生活。</p>
          <p className="text-sm leading-7 text-[var(--color-light-white)]/74">外卖柜、地铁闸机、标准化工位和夜间班车，构成一种干净、可控、几乎没有意外的城市动线。</p>
          <p className="text-sm leading-7 text-[var(--color-light-white)]/74">原子化生活不是突然发生的。它是一次次“先把这个需求延后”的结果，最后连想见人都变成低优先级任务。</p>
        </div>
      </div>
    </section>
  )
}

function PostGraduationSection() {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-background)] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <div className="max-w-2xl">
          <SectionEyebrow>after campus</SectionEyebrow>
          <h2 className="text-3xl leading-tight font-semibold text-[var(--color-invalid)] sm:text-4xl">大学时代结束之后</h2>
          <div className="mt-7 space-y-5 text-base leading-8 text-[var(--color-light-white)]/84">
            <p>学生时代的社交有一种粗糙但有效的默认值：同班、社团、宿舍、食堂、操场、临时组队、深夜便利店。很多关系并不是设计出来的，是被日程和空间顺手生成的。</p>
            <p>工作之后，这套环境突然下线。工位、出租屋、通勤三点一线开始稳定运行，认识新人不再是系统默认功能，而是需要主动配置、持续维护、还经常超时的外部服务。</p>
            <p className="border-l border-[var(--color-fountain-blue)] pl-5 text-[var(--color-light-white)]">
              很多人是在毕业之后，
              <br />
              第一次意识到：
              <br />
              原来认识新朋友并不是世界默认提供的功能。
            </p>
          </div>
        </div>

        <TerminalWindow title="post-campus-routine.log">
          <div className="p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between border-b border-[var(--color-border)] pb-4 font-mono text-xs text-[var(--color-light-dark)]">
              <span>runtime: weekday</span>
              <span>social_env: manual</span>
            </div>
            <div className="space-y-4">
              {postGraduationLogs.map((item) => (
                <div className="grid gap-2 border-b border-[var(--color-border)]/70 pb-4 last:border-b-0 last:pb-0 sm:grid-cols-[72px_150px_1fr]" key={item.time}>
                  <div className="font-mono text-sm text-[var(--color-chalky)]">{item.time}</div>
                  <div className="font-mono text-sm text-[var(--color-malibu)]">{item.event}</div>
                  <div className="text-sm leading-6 text-[var(--color-light-white)]/78">{item.note}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-md border border-[var(--color-border)] bg-[var(--color-background)] p-4 font-mono text-xs leading-6 text-[var(--color-coral)]">Warning: natural_social_context has been unmounted.</div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  )
}

function ProblemSection() {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-panel-alt)] py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <div>
          <SectionEyebrow>root cause</SectionEyebrow>
          <h2 className="text-3xl font-semibold text-[var(--color-invalid)] sm:text-4xl">问题不在于你“不够好”</h2>
          <p className="mt-5 text-base leading-8 text-[var(--color-light-white)]">长得不够帅、钱不够多、不会聊天、没有机会，这些因素当然会影响结果。但更核心的问题通常是：你没有稳定、自然、低压力地认识新人的场景。</p>
          <div className="mt-8">
            <TerminalWindow title="offline-request.log">
              <pre className="overflow-x-auto p-5 font-mono text-sm leading-7 text-[var(--color-coral)]">
                <code>{`request relationship_api
target: suitable_person
network: offline

Error: connection target not found.`}</code>
              </pre>
            </TerminalWindow>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {errorPaths.map((item) => {
            const Icon = item.icon

            return (
              <article className="rounded-lg border border-[var(--color-border)] bg-[var(--color-panel)] p-5" key={item.title}>
                <div className="mb-6 flex items-center justify-between gap-4">
                  <Icon className="size-5 text-[var(--color-malibu)]" strokeWidth={1.8} />
                  <span className="rounded-md border border-[var(--color-border)] px-2 py-1 font-mono text-[11px] text-[var(--color-light-dark)]">{item.tag}</span>
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-invalid)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-light-white)]/80">{item.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function StrategySection() {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-background)] py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionEyebrow>effective direction</SectionEyebrow>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-semibold text-[var(--color-invalid)] sm:text-4xl">有效方向：先重构生活，再谈技巧</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--color-light-white)]/85">不是“去找对象”，而是让你的生活重新接入现实世界。当生活半径变大，很多事情才有发生的可能。</p>
          </div>
          <div className="flex w-full max-w-sm items-center gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-panel)] p-3">
            <Map className="size-5 text-[var(--color-green)]" />
            <div className="min-w-0">
              <div className="font-mono text-xs text-[var(--color-light-dark)]">radius expansion</div>
              <div className="truncate text-sm text-[var(--color-light-white)]">real scenes over fantasy optimization</div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {strategies.map((strategy) => {
            const Icon = strategy.icon

            return (
              <article className="grid overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-panel)] md:grid-cols-[0.95fr_1.05fr]" key={strategy.title}>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-sm text-[var(--color-chalky)]">{strategy.index}</span>
                    <Icon className="size-5 text-[var(--color-fountain-blue)]" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-[var(--color-invalid)]">{strategy.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-light-white)]/82">{strategy.summary}</p>
                  <ul className="mt-5 space-y-3">
                    {strategy.bullets.map((bullet) => (
                      <li className="flex gap-3 text-sm leading-6 text-[var(--color-light-white)]/78" key={bullet}>
                        <ArrowRight className="mt-1 size-4 shrink-0 text-[var(--color-green)]" strokeWidth={1.8} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="min-h-64 border-t border-[var(--color-border)] bg-[var(--color-panel-alt)] md:border-t-0 md:border-l">
                  {strategy.image ? (
                    <img alt={strategy.title} className="h-full min-h-64 w-full object-cover opacity-80 saturate-[0.76]" src={strategy.image} />
                  ) : (
                    <div className="flex h-full min-h-64 flex-col justify-between p-5">
                      <div className="grid grid-cols-3 gap-2">
                        {exposureItems.map((item) => (
                          <span className="rounded-md border border-[var(--color-border)] bg-[var(--color-background)] px-2 py-2 text-center text-xs text-[var(--color-light-white)]/82" key={item}>
                            {item}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6 rounded-md border border-[var(--color-border)] bg-[var(--color-background)] p-4 font-mono text-xs leading-6 text-[var(--color-light-white)]/76">wake up -&gt; commute -&gt; work -&gt; eat -&gt; scroll -&gt; sleep -&gt; repeat</div>
                    </div>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ExpressionPatchSection() {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-panel-alt)] py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div>
          <SectionEyebrow>expression patch</SectionEyebrow>
          <h2 className="text-3xl font-semibold text-[var(--color-invalid)] sm:text-4xl">表达不要像接口文档</h2>
          <p className="mt-5 text-base leading-8 text-[var(--color-light-white)]/85">好的表达不是表演。它只是让别人感觉你在观察生活，而不是一个只会输出状态码的后端服务。</p>
        </div>
        <TerminalWindow title="conversation.diff">
          <pre className="overflow-x-auto p-5 text-sm leading-8 sm:p-6">
            <code>
              <span className="text-[var(--color-coral)]">- 今天天气不好。</span>
              {'\n'}
              <span className="text-[var(--color-green)]">+ 南京今天这个天气像系统误判，出门记得带伞。</span>
              {'\n\n'}
              <span className="text-[var(--color-coral)]">- 你吃了吗？</span>
              {'\n'}
              <span className="text-[var(--color-green)]">+ 我刚下班，园区食堂又一次证明了人类可以在没有希望的情况下摄入碳水。</span>
            </code>
          </pre>
        </TerminalWindow>
      </div>
    </section>
  )
}

function ProbabilitySection() {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-background)] py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionEyebrow>probability model</SectionEyebrow>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="text-3xl font-semibold text-[var(--color-invalid)] sm:text-4xl">认识合适的人，不是纯玄学</h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-light-white)]/85">正确策略不是强行控制结果，而是持续优化输入条件。你能控制 exposure 和 quality，timing 只能尊重。</p>
          </div>
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-panel)] p-5 sm:p-6">
            <div className="overflow-x-auto rounded-md border border-[var(--color-border)] bg-[var(--color-panel-alt)] p-4 font-mono text-sm text-[var(--color-light-white)]">
              relationship_chance = <span className="text-[var(--color-green)]">exposure</span> × <span className="text-[var(--color-malibu)]">quality</span> × <span className="text-[var(--color-chalky)]">timing</span>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div className="rounded-md border border-[var(--color-border)] bg-[var(--color-background)] p-4">
                <div className="font-mono text-sm text-[var(--color-green)]">exposure</div>
                <p className="mt-3 text-sm leading-6 text-[var(--color-light-white)]/78">接触新人的数量和频率。</p>
              </div>
              <div className="rounded-md border border-[var(--color-border)] bg-[var(--color-background)] p-4">
                <div className="font-mono text-sm text-[var(--color-malibu)]">quality</div>
                <p className="mt-3 text-sm leading-6 text-[var(--color-light-white)]/78">状态、表达、边界感和生活质量。</p>
              </div>
              <div className="rounded-md border border-[var(--color-border)] bg-[var(--color-background)] p-4">
                <div className="font-mono text-sm text-[var(--color-chalky)]">timing</div>
                <p className="mt-3 text-sm leading-6 text-[var(--color-light-white)]/78">对方是否也愿意建立关系。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ChecklistSection() {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-panel-alt)] py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionEyebrow>action checklist</SectionEyebrow>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-[var(--color-invalid)] sm:text-4xl">一份更现实的行动清单</h2>
          <p className="mt-5 text-base leading-8 text-[var(--color-light-white)]/85">不要急着表白，不要急着下载十个社交软件，也不要急着把头像改成精修照。先做这些普通但有效的修复。</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {checklistItems.map((item, index) => (
            <article className="rounded-lg border border-[var(--color-border)] bg-[var(--color-panel)] p-4" key={item.title}>
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-xs text-[var(--color-light-dark)]">{String(index + 1).padStart(2, '0')}</span>
                <span className="grid size-7 place-items-center rounded-md border border-[var(--color-border)] bg-[var(--color-background)]">
                  <Check className="size-4 text-[var(--color-green)]" strokeWidth={2} />
                </span>
              </div>
              <h3 className="mt-5 min-h-12 text-base leading-6 font-semibold text-[var(--color-invalid)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-light-white)]/76">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function EndingSection() {
  return (
    <section className="bg-[var(--color-background)] py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <div>
          <SectionEyebrow>final commit</SectionEyebrow>
          <h2 className="text-3xl font-semibold text-[var(--color-invalid)] sm:text-4xl">你真正需要构建的，是一个更完整的生活系统</h2>
          <p className="mt-5 text-base leading-8 text-[var(--color-light-white)]/85">不是人设，不是话术，不是套路，也不是“高价值展示面”。是一个能稳定工作、正常休息、独处，也能连接他人的系统。</p>
          <div className="mt-8">
            <TerminalWindow title="life-system.txt">
              <pre className="overflow-x-auto p-5 text-sm leading-8 text-[var(--color-light-white)] sm:p-6">
                <code>{`我有自己的生活。
我对世界还有兴趣。
我能和别人建立真实连接。
我不会把你当成我的人生补丁。

status: reconnecting...`}</code>
              </pre>
            </TerminalWindow>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-panel)]">
          <img alt="低饱和科技园夜色中的结尾画面" className="aspect-[4/5] h-full w-full object-cover opacity-90 saturate-[0.78]" src="/images/ending.png" />
        </div>
      </div>
    </section>
  )
}

export function FindingGirlfriendPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-light-white)]">
      <FindingGirlfriendHero />
      <SystemStatusSection />
      <TechParkObservationSection />
      <PostGraduationSection />
      <ProblemSection />
      <StrategySection />
      <ExpressionPatchSection />
      <ProbabilitySection />
      <ChecklistSection />
      <EndingSection />
      <footer className="border-t border-[var(--color-border)] bg-[var(--color-panel-alt)] px-5 py-6 text-center font-mono text-xs text-[var(--color-light-dark)]">Finding Girlfriend.md / static page / no backend / no login / no套路</footer>
    </main>
  )
}
