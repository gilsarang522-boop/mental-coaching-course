/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import {
  Smile,
  Target,
  Users,
  Rocket,
  Gem,
  RefreshCw,
  BatteryFull,
  HeartPulse,
  MessageCircle,
  Calendar,
  Clock,
  Banknote,
  Phone,
  CheckCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const differentiators = [
  {
    title: "전문적 통합",
    subtitle: "심리학이 증명한 과학적 멘탈 관리",
    content: "단순히 \"힘내라\"는 막연한 위로나 흔한 동기부여 강의가 아닙니다. 긍정심리학, 인지행동코칭, 감성지능이론 등 검증된 학문적 기반을 바탕으로 실전에 적용합니다. 내 마음이 왜 흔들리는지 원리를 이해하고, 과학적이고 체계적으로 내면의 기초 체력을 단단하게 다지게 됩니다."
  },
  {
    title: "실전 접근",
    subtitle: "내일 출근해서 바로 쓰는 실전 솔루션",
    content: "이론을 넘어 실제 업무 상황에 즉시 적용 가능한 현장 중심 솔루션을 제공합니다. 책상머리에서만 통하는 지식이 아니라, 당장 내일 압박감 넘치는 회의실에서 평정심을 찾는 호흡법, 불편한 동료와의 갈등을 푸는 대화법 등 당신의 진짜 비즈니스 현장에서 무기가 될 구체적인 기술을 손에 쥐여 드립니다."
  },
  {
    title: "개인 맞춤형",
    subtitle: "나만의 스트레스 패턴에 맞춘 1:1 설계",
    content: "모든 사람의 멘탈 상태와 스트레스 원인은 다릅니다. 정해진 틀에 당신을 맞추는 것이 아니라, 개인의 상황, 목표, 심리 상태에 맞춘 커스텀 코칭 설계를 진행합니다. 교육 과정 중 나만의 '멘탈 지도'를 완성하여, 나에게 가장 취약한 순간과 가장 효과적인 회복 루틴을 찾아냅니다."
  },
  {
    title: "측정 가능한 변화",
    subtitle: "느낌이 아닌 데이터로 확인하는 내 멘탈의 성장",
    content: "'마음이 조금 편해졌다'는 모호한 느낌으로 끝내지 않습니다. GRIT 척도, 번아웃 진단 등 코칭 전/후 데이터 기반 심리 진단을 통해 당신의 변화를 수치로 증명합니다. 스트레스 내성이 얼마나 강해졌는지, 무기력이 얼마나 줄었는지 가시적인 결과물로 직접 확인하실 수 있습니다."
  },
  {
    title: "지속성과 실행력",
    subtitle: "교육장 밖에서도 무너지지 않는 힘",
    content: "교육을 들을 때만 반짝하고 며칠 뒤면 원래대로 돌아가는 악순환을 끊어냅니다. 단발성이 아닌 지속적 변화와 실행력 강화를 목표로 설계되었습니다. 전용 앱과 3개월간의 사후관리 시스템을 통해, 배운 내용이 습관으로 자리 잡고 실제 행동으로 이어지도록 끝까지 함께합니다."
  },
  {
    title: "철저한 비밀보장",
    subtitle: "가장 안전하게 나를 꺼내놓을 수 있는 심리적 벙커",
    content: "자신의 취약점이나 고민을 솔직하게 털어놓는 것은 쉽지 않습니다. 본 과정은 안전한 심리적 공간을 제공하며 완벽한 정보 보호 원칙을 엄수합니다. 여기서 나누는 모든 대화와 진단 결과는 철저히 당신만의 비밀로 지켜집니다. 안심하고 온전한 당신의 진짜 마음을 마주하세요."
  }
];

export default function App() {
  const [isBackgroundOpen, setIsBackgroundOpen] = useState(false);
  const [openDiscipline, setOpenDiscipline] = useState<string | null>(null);
  const [openIntervention, setOpenIntervention] = useState<number | null>(null);
  const [openModule, setOpenModule] = useState<number | null>(null);
  const [openDifferentiator, setOpenDifferentiator] = useState<number | null>(null);

  const toggleDiscipline = (name: string) => {
    setOpenDiscipline(openDiscipline === name ? null : name);
  };

  const toggleIntervention = (index: number) => {
    setOpenIntervention(openIntervention === index ? null : index);
  };

  const toggleModule = (index: number) => {
    setOpenModule(openModule === index ? null : index);
  };

  const toggleDifferentiator = (index: number) => {
    setOpenDifferentiator(openDifferentiator === index ? null : index);
  };
  return (
    <div className="overflow-x-hidden font-sans">
      {/* 히어로 섹션 */}
      <header className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-6">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-4xl w-full text-center fade-in">
          <p className="text-blue-400 font-bold tracking-widest mb-4">KMCC 한국멘탈코칭센터</p>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            비즈니스 <span className="gradient-text">멘탈코칭</span><br />전문가 자격과정
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-light">
            심리학과 코칭학의 체계적 통합.<br />
            지속 가능한 성과와 삶의 균형을 이끄는 전문가 육성 프로그램.
          </p>
          <div className="flex justify-center mb-12">
            <img 
              src="https://picsum.photos/seed/coaching/800/400?blur=2" 
              alt="비즈니스 멘탈코칭 전문가 자격과정" 
              className="rounded-2xl shadow-2xl border border-white/10 opacity-80 hover:opacity-100 transition-opacity duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#register" className="gradient-bg px-8 py-4 rounded-full font-bold text-white hover:scale-105 transition-transform duration-300">
              지금 바로 신청하기
            </a>
            <a href="#curriculum" className="glass-card px-8 py-4 rounded-full font-bold border border-white/20 hover:bg-white/5 transition-all">
              커리큘럼 보기
            </a>
          </div>
        </div>
      </header>

      {/* 소개 섹션 */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="glass-card p-8 md:p-12 text-center mb-16 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-20">
            <img 
              src="https://picsum.photos/seed/mindset/1000/500" 
              alt="Background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-zinc-950"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 italic relative z-10">"내면의 기반이 성과를 결정합니다."</h2>
          <p className="text-gray-300 leading-relaxed mb-8 relative z-10">
            비즈니스멘탈코칭은 비즈니스 현장에서 자신이 원하는 성과를 달성할 수 있도록<br className="hidden md:block" />
            멘탈 강화와 유지 관리를 지원하는 전문 코칭 분야입니다.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-xs text-gray-400 mb-1">스트레스 극복</p>
              <p className="font-bold text-blue-400">회복탄력성</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-xs text-gray-400 mb-1">포기하지 않는 힘</p>
              <p className="font-bold text-purple-400">GRIT</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-xs text-gray-400 mb-1">성공에 대한 확신</p>
              <p className="font-bold text-blue-400">자기효능감</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-xs text-gray-400 mb-1">새로운 도약</p>
              <p className="font-bold text-purple-400">도전정신</p>
            </div>
          </div>
        </div>

        <div className="divider mb-24"></div>

        {/* 3대 학문 융합 */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">3대 학문적 융합의 완성</h3>
          <p className="text-gray-400 mb-6">체계적인 이론을 기반으로 실천적인 코칭 기술을 전수합니다.</p>
          
          {/* 도입배경 Toggle */}
          <div className="max-w-3xl mx-auto">
            <button 
              onClick={() => setIsBackgroundOpen(!isBackgroundOpen)}
              className="flex items-center justify-center gap-2 mx-auto text-blue-400 hover:text-blue-300 transition-colors font-bold cursor-pointer"
            >
              도입배경 보기 {isBackgroundOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            {isBackgroundOpen && (
              <div className="mt-6 p-6 glass-card text-left text-gray-300 leading-relaxed fade-in border border-blue-500/20">
                현대 비즈니스 환경은 개인의 내면(심리 상태), 목표 달성을 위한 실행력(행동), 그리고 조직이라는 특수한 환경 요인이 복잡하게 얽혀 있습니다. 따라서 어느 한쪽에 치우친 단편적인 접근으로는 근본적인 변화를 이끌어내기 어렵습니다. 개인의 심리적 안정감을 다지는 동시에, 구체적인 행동 변화를 촉진하고, 조직 내 스트레스 요인을 관리하기 위해 이 세 가지 학문의 통합적 솔루션이 필수적입니다.
              </div>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {/* 긍정심리학 */}
          <div 
            className="glass-card p-8 border-t-4 border-blue-500 cursor-pointer hover:bg-white/5 transition-all group"
            onClick={() => toggleDiscipline('positive')}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-500/20 rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
                <Smile className="w-6 h-6" />
              </div>
              <button className="text-gray-500 group-hover:text-blue-400 transition-colors">
                {openDiscipline === 'positive' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
            </div>
            <h4 className="text-xl font-bold mb-1">긍정심리학</h4>
            <p className="text-sm text-blue-400 mb-4 font-medium">흔들리지 않는 심리적 기반 구축</p>
            <ul className="text-gray-400 space-y-2 mb-4">
              <li>• 강점 발견</li>
              <li>• 자기효능감 향상</li>
              <li>• 심리적 웰빙 증진</li>
            </ul>
            {openDiscipline === 'positive' && (
              <div className="pt-4 border-t border-white/10 text-sm text-gray-300 leading-relaxed fade-in">
                문제나 결함을 고치는 데 집중하기보다, 대상자가 이미 가진 잠재력과 긍정적인 자원을 끌어냅니다. 스스로 해낼 수 있다는 믿음을 심어주어 역경 속에서도 무너지지 않는 내면의 기초 체력을 단단하게 길러줍니다.
              </div>
            )}
          </div>
          {/* 코칭학 */}
          <div 
            className="glass-card p-8 border-t-4 border-purple-500 cursor-pointer hover:bg-white/5 transition-all group"
            onClick={() => toggleDiscipline('coaching')}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-500/20 rounded-lg text-purple-400 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <button className="text-gray-500 group-hover:text-purple-400 transition-colors">
                {openDiscipline === 'coaching' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
            </div>
            <h4 className="text-xl font-bold mb-1">코칭학</h4>
            <p className="text-sm text-purple-400 mb-4 font-medium">실질적인 성과와 행동 변화 촉진</p>
            <ul className="text-gray-400 space-y-2 mb-4">
              <li>• 명확한 목표 설정</li>
              <li>• 행동 변화 이끌어내기</li>
              <li>• 성장 마인드셋(마음가짐) 형성</li>
            </ul>
            {openDiscipline === 'coaching' && (
              <div className="pt-4 border-t border-white/10 text-sm text-gray-300 leading-relaxed fade-in">
                내면의 힘을 바탕으로, 비즈니스 현장에서 요구되는 구체적인 성과를 향해 나아가도록 방향을 잡습니다. 스스로 한계를 넘어서는 마음가짐을 갖추고, 실제 업무 현장에서 행동을 변화시켜 나가도록 실행력을 더해줍니다.
              </div>
            )}
          </div>
          {/* 조직심리학 */}
          <div 
            className="glass-card p-8 border-t-4 border-blue-600 cursor-pointer hover:bg-white/5 transition-all group"
            onClick={() => toggleDiscipline('organizational')}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-600/20 rounded-lg text-blue-300 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <button className="text-gray-500 group-hover:text-blue-300 transition-colors">
                {openDiscipline === 'organizational' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
            </div>
            <h4 className="text-xl font-bold mb-1">조직심리학</h4>
            <p className="text-sm text-blue-300 mb-4 font-medium">비즈니스 환경의 장애물 관리</p>
            <ul className="text-gray-400 space-y-2 mb-4">
              <li>• 직무 스트레스 관리</li>
              <li>• 번아웃(소진) 예방</li>
              <li>• 직무 동기 이론 적용</li>
            </ul>
            {openDiscipline === 'organizational' && (
              <div className="pt-4 border-t border-white/10 text-sm text-gray-300 leading-relaxed fade-in">
                개인이 일하는 조직 구조와 직무 환경의 특수성을 깊이 이해합니다. 업무 과부하나 조직 내 관계에서 오는 스트레스를 구조적으로 파악하고, 일에 대한 내적 동기를 다시 부여하여 방전된 에너지를 효과적으로 채워줍니다.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 핵심 개입 영역 */}
      <section className="bg-zinc-900/50 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">멘탈 코칭의 6가지 핵심 개입 영역</h3>
            <p className="text-gray-400 text-sm">현장에서 발생하는 실제적인 문제들에 대한 해답을 제시합니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. 도전정신 */}
            <div 
              className="p-6 rounded-2xl border border-white/5 bg-white/5 cursor-pointer hover:bg-white/10 transition-all group"
              onClick={() => toggleIntervention(1)}
            >
              <div className="flex justify-between items-start mb-4">
                <Rocket className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                <button className="text-gray-500 group-hover:text-blue-400 transition-colors">
                  {openIntervention === 1 ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>
              <h4 className="font-bold mb-2 text-lg">도전정신</h4>
              <p className="text-sm text-blue-300 mb-2 font-medium">새로운 시작을 위한 용기</p>
              {openIntervention === 1 && (
                <div className="pt-4 mt-2 border-t border-white/10 text-sm text-gray-300 leading-relaxed fade-in space-y-3">
                  <p><strong className="text-white">핵심 의미:</strong> 변화를 두려워하지 않고, 안주하려는 익숙함에서 벗어나 스스로 한계를 넘어서려는 마음가짐입니다.</p>
                  <p><strong className="text-white">코칭 접근:</strong> 실패에 대한 두려움을 낮추고, 스스로 해낼 수 있다는 자기효능감을 불어넣어 새로운 프로젝트나 역할에 과감히 뛰어들 수 있도록 돕습니다.</p>
                </div>
              )}
            </div>

            {/* 2. 그릿(GRIT) */}
            <div 
              className="p-6 rounded-2xl border border-white/5 bg-white/5 cursor-pointer hover:bg-white/10 transition-all group"
              onClick={() => toggleIntervention(2)}
            >
              <div className="flex justify-between items-start mb-4">
                <Gem className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
                <button className="text-gray-500 group-hover:text-purple-400 transition-colors">
                  {openIntervention === 2 ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>
              <h4 className="font-bold mb-2 text-lg">그릿(GRIT)</h4>
              <p className="text-sm text-purple-300 mb-2 font-medium">포기하지 않는 열정과 끈기</p>
              {openIntervention === 2 && (
                <div className="pt-4 mt-2 border-t border-white/10 text-sm text-gray-300 leading-relaxed fade-in space-y-3">
                  <p><strong className="text-white">핵심 의미:</strong> 비즈니스 현장에서의 목표 달성은 단거리 경주가 아닌 마라톤과 같습니다. 일시적인 어려움이나 슬럼프에도 흔들리지 않고 끝까지 밀고 나가는 내적 동력을 의미합니다.</p>
                  <p><strong className="text-white">코칭 접근:</strong> 무의식적인 포기 패턴을 극복하고, 자신의 한계를 성장의 기회로 바라보는 성장 마인드셋을 구축하여 장기적인 목표를 향해 나아가게 합니다.</p>
                </div>
              )}
            </div>

            {/* 3. 스트레스 관리 */}
            <div 
              className="p-6 rounded-2xl border border-white/5 bg-white/5 cursor-pointer hover:bg-white/10 transition-all group"
              onClick={() => toggleIntervention(3)}
            >
              <div className="flex justify-between items-start mb-4">
                <HeartPulse className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                <button className="text-gray-500 group-hover:text-blue-400 transition-colors">
                  {openIntervention === 3 ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>
              <h4 className="font-bold mb-2 text-lg">스트레스 관리</h4>
              <p className="text-sm text-blue-300 mb-2 font-medium">업무 과부하 및 압박 조절</p>
              {openIntervention === 3 && (
                <div className="pt-4 mt-2 border-t border-white/10 text-sm text-gray-300 leading-relaxed fade-in space-y-3">
                  <p><strong className="text-white">핵심 의미:</strong> 피할 수 없는 직무 스트레스와 업무 압박 속에서 평정심을 잃지 않고 성과를 내기 위한 필수적인 자기 조절 능력입니다.</p>
                  <p><strong className="text-white">코칭 접근:</strong> 스트레스의 근본 원인을 분석하고 상황을 바라보는 인지를 재구성하여, 부정적인 감정에 매몰되지 않고 이를 생산적인 에너지로 전환하도록 훈련합니다.</p>
                </div>
              )}
            </div>

            {/* 4. 번아웃 극복 */}
            <div 
              className="p-6 rounded-2xl border border-white/5 bg-white/5 cursor-pointer hover:bg-white/10 transition-all group"
              onClick={() => toggleIntervention(4)}
            >
              <div className="flex justify-between items-start mb-4">
                <BatteryFull className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
                <button className="text-gray-500 group-hover:text-purple-400 transition-colors">
                  {openIntervention === 4 ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>
              <h4 className="font-bold mb-2 text-lg">번아웃 극복</h4>
              <p className="text-sm text-purple-300 mb-2 font-medium">에너지 회복 및 재충전</p>
              {openIntervention === 4 && (
                <div className="pt-4 mt-2 border-t border-white/10 text-sm text-gray-300 leading-relaxed fade-in space-y-3">
                  <p><strong className="text-white">핵심 의미:</strong> 신체적, 정신적 에너지가 완전히 고갈된 소진 상태에서 벗어나 다시 일상과 업무의 활력을 되찾는 과정입니다.</p>
                  <p><strong className="text-white">코칭 접근:</strong> 단순히 쉬는 것을 넘어, 자신의 에너지가 어디서 새어나가는지 파악하는 에너지 관리 전략을 세우고, 일상에서 실천 가능한 자신만의 확고한 회복 루틴을 설계합니다.</p>
                </div>
              )}
            </div>

            {/* 5. 회복탄력성 */}
            <div 
              className="p-6 rounded-2xl border border-white/5 bg-white/5 cursor-pointer hover:bg-white/10 transition-all group"
              onClick={() => toggleIntervention(5)}
            >
              <div className="flex justify-between items-start mb-4">
                <RefreshCw className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                <button className="text-gray-500 group-hover:text-blue-400 transition-colors">
                  {openIntervention === 5 ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>
              <h4 className="font-bold mb-2 text-lg">회복탄력성</h4>
              <p className="text-sm text-blue-300 mb-2 font-medium">실패를 딛고 일어서는 힘</p>
              {openIntervention === 5 && (
                <div className="pt-4 mt-2 border-t border-white/10 text-sm text-gray-300 leading-relaxed fade-in space-y-3">
                  <p><strong className="text-white">핵심 의미:</strong> 역경이나 실패를 마주했을 때 꺾이거나 무너지지 않고, 오히려 그 경험을 도약의 발판으로 삼아 원래의 상태보다 더 단단해지는 심리적 근력을 말합니다.</p>
                  <p><strong className="text-white">코칭 접근:</strong> 과거의 실패 경험을 재해석하고 긍정적인 자원을 발견하게 함으로써, 위기 상황에서도 유연하게 대처하고 빠르게 회복할 수 있는 마음의 탄성을 길러줍니다.</p>
                </div>
              )}
            </div>

            {/* 6. 관계 스트레스 */}
            <div 
              className="p-6 rounded-2xl border border-white/5 bg-white/5 cursor-pointer hover:bg-white/10 transition-all group"
              onClick={() => toggleIntervention(6)}
            >
              <div className="flex justify-between items-start mb-4">
                <MessageCircle className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
                <button className="text-gray-500 group-hover:text-purple-400 transition-colors">
                  {openIntervention === 6 ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>
              <h4 className="font-bold mb-2 text-lg">관계 스트레스</h4>
              <p className="text-sm text-purple-300 mb-2 font-medium">조직 내 갈등 해소</p>
              {openIntervention === 6 && (
                <div className="pt-4 mt-2 border-t border-white/10 text-sm text-gray-300 leading-relaxed fade-in space-y-3">
                  <p><strong className="text-white">핵심 의미:</strong> 비즈니스 환경에서 가장 큰 에너지 소모를 일으키는 대인관계의 갈등을 원만하게 풀고 건강한 조직 문화를 만드는 영역입니다.</p>
                  <p><strong className="text-white">코칭 접근:</strong> 타인과의 건강한 심리적 경계를 설정하고, 비폭력대화 등 효과적인 커뮤니케이션 기법을 적용하여 관계에서 오는 피로도를 줄이고 심리적 자유를 얻도록 지원합니다.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 커리큘럼 */}
      <section id="curriculum" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">커리큘럼 블루프린트</h3>
          <p className="text-gray-400 italic">"자기인식부터 현장 실행력 활성화까지"</p>
        </div>

        <div className="space-y-6">
          {/* M1 */}
          <div 
            className="glass-card p-6 border-l-4 border-blue-500 hover:bg-white/5 transition-all cursor-pointer group"
            onClick={() => toggleModule(1)}
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-start gap-6">
                <span className="text-blue-500 font-bold text-xl">M1</span>
                <div>
                  <h4 className="text-lg font-bold">나를 알다 (자기인식)</h4>
                  <p className="text-sm text-gray-400 mt-1">무의식적 패턴 인식, GRIT/번아웃 진단, 강점 파악</p>
                </div>
              </div>
              <button className="text-gray-500 group-hover:text-blue-400 transition-colors mt-1">
                {openModule === 1 ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
            </div>
            {openModule === 1 && (
              <div className="mt-6 pt-6 border-t border-white/10 text-sm text-gray-300 leading-relaxed fade-in space-y-4">
                <div>
                  <strong className="text-blue-400 block mb-1">모듈의 핵심 질문</strong>
                  <p className="italic">"왜 자기인식이 모든 변화의 출발점이며, 나의 멘탈을 움직이는 진짜 동력과 한계는 무엇인가?"</p>
                </div>
                <div>
                  <strong className="text-white block mb-2">주요 학습 내용 및 도구</strong>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li>올바른 비즈니스 멘탈의 정의 및 내적·외적 자기인식의 이해</li>
                    <li>장기적 목표를 향한 열정과 끈기를 측정하는 GRIT-S 8문항 진단 및 해석</li>
                    <li>정서적 소진, 냉소, 효능감 감소를 파악하는 직무 번아웃 9문항 진단</li>
                    <li>VIA 24가지 강점 이론을 바탕으로 한 나의 핵심 강점 Top 3 발견 및 개인 멘탈 지도 작성</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-white block mb-2">비즈니스 현장 적용점</strong>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li>자기인식 결핍으로 인해 발생하는 반복적인 성과 저하, 대인 관계 갈등, 번아웃 위험을 구조적으로 예방합니다.</li>
                    <li>업무 환경의 압박이나 실패 속에서 단순히 감정을 억누르고 참는 것이 아니라, 자신의 심리적 자원을 명확히 알고 전략적으로 관리합니다.</li>
                    <li>약점을 고치는 데 에너지를 소모하기보다, 자신이 가진 핵심 강점을 실제 업무에 배치하여 직무 몰입도를 높이고 팀 전체의 생산성을 끌어올립니다.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-white block mb-2">기대 성과</strong>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li>수강생 스스로 자신의 현재 심리 상태(GRIT, 번아웃 수준)를 객관적으로 평가하고 수용할 수 있는 자기 객관화 능력을 갖춥니다.</li>
                    <li>자신만의 고유한 '멘탈 지도'를 완성하여, 향후 코칭 여정에서 구체적인 행동 변화를 이끌어낼 명확한 기준점을 세웁니다.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* M2 */}
          <div 
            className="glass-card p-6 border-l-4 border-purple-500 hover:bg-white/5 transition-all cursor-pointer group"
            onClick={() => toggleModule(2)}
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-start gap-6">
                <span className="text-purple-500 font-bold text-xl">M2</span>
                <div>
                  <h4 className="text-lg font-bold">멈추지 않는 힘 (GRIT)</h4>
                  <p className="text-sm text-gray-400 mt-1">성장 마인드셋 워크숍, 목표 재구성 코칭 기법</p>
                </div>
              </div>
              <button className="text-gray-500 group-hover:text-purple-400 transition-colors mt-1">
                {openModule === 2 ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
            </div>
            {openModule === 2 && (
              <div className="mt-6 pt-6 border-t border-white/10 text-sm text-gray-300 leading-relaxed fade-in space-y-4">
                <div>
                  <strong className="text-purple-400 block mb-1">모듈의 핵심 질문</strong>
                  <p className="italic">"포기하고 싶은 충동은 나의 나약함 때문일까, 아니면 에너지가 고갈되었다는 성장의 신호일까?"</p>
                </div>
                <div>
                  <strong className="text-white block mb-2">주요 학습 내용 및 도구</strong>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li>포기 충동의 근본 원인 탐색 (자아고갈 및 자기결정이론 기반)</li>
                    <li>GROW 모델(목표, 현실, 선택지, 실행)을 활용한 관점 전환(리프레임) 파트너 코칭 실습</li>
                    <li>고정 마인드셋('나는 원래 ~하다')을 성장 마인드셋('지금은 ~하다')으로 바꾸는 자기효능감 훈련</li>
                    <li>개인의 포기 트리거(비판, 진척감 부재, 비교 등) 분석 및 나만의 If-Then 실천 전략 수립</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-white block mb-2">비즈니스 현장 적용점</strong>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li>업무 중 마주치는 좌절이나 비판적인 피드백 앞에서도 즉각적으로 포기하거나 회피하지 않고, 상황을 새로운 시각으로 재해석합니다.</li>
                    <li>막연한 '의지력'에 기대는 대신, '만약 ~하면 나는 ~한다(If-Then)'는 구체적인 대응 계획을 세워 실제 업무 환경에서의 실행력을 구조적으로 높입니다.</li>
                    <li>스스로 정답을 지시하는 대신, GROW 질문 구조를 활용하여 자신과 팀원이 스스로 선택지와 해결책을 발견하도록 돕습니다.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-white block mb-2">기대 성과</strong>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li>포기하고 싶었던 순간을 자책감 없이 꺼내어 객관적으로 마주하고, 이를 자신을 보호하고 성장시키는 신호로 받아들일 수 있습니다.</li>
                    <li>어려운 과제 앞에서도 고정된 한계에 갇히지 않고 "지금은 어렵지만 달라질 수 있다"는 단단한 마음가짐을 실무에 즉각 적용할 수 있습니다.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* M3 */}
          <div 
            className="glass-card p-6 border-l-4 border-blue-500 hover:bg-white/5 transition-all cursor-pointer group"
            onClick={() => toggleModule(3)}
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-start gap-6">
                <span className="text-blue-500 font-bold text-xl">M3</span>
                <div>
                  <h4 className="text-lg font-bold">스트레스를 다루다 (감정)</h4>
                  <p className="text-sm text-gray-400 mt-1">인지행동코칭 기법, 마음챙김 실습, 감정의 에너지 전환</p>
                </div>
              </div>
              <button className="text-gray-500 group-hover:text-blue-400 transition-colors mt-1">
                {openModule === 3 ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
            </div>
            {openModule === 3 && (
              <div className="mt-6 pt-6 border-t border-white/10 text-sm text-gray-300 leading-relaxed fade-in space-y-4">
                <div>
                  <strong className="text-blue-400 block mb-1">모듈의 핵심 질문</strong>
                  <p className="italic">"부정적인 감정은 억눌러야 할 방해물일까, 아니면 나에게 중요한 무언가를 알려주는 신호일까?"</p>
                </div>
                <div>
                  <strong className="text-white block mb-2">주요 학습 내용 및 도구</strong>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li>감정의 기능 이해 및 현재 가장 강한 감정 탐색 (ACT 이론 기반)</li>
                    <li>신체 반응을 즉각적으로 안정시키는 4-7-8 호흡법 (자율신경계 조절)</li>
                    <li>감정과 자신을 분리하여 관찰자 시점을 확보하는 언어적 거리두기 (탈융합)</li>
                    <li>막연한 기분을 구체적 어휘로 정의하는 감정 재명명(세분화) 실습</li>
                    <li>조직 내 감정 전염의 원리 이해 및 나만의 3단계 감정 조절 루틴(알아차리기-멈추기-선택하기) 설계</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-white block mb-2">비즈니스 현장 적용점</strong>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li>업무 중 돌발 상황이나 대인 관계에서 강한 감정(분노, 불안 등)이 올라올 때, 휩쓸리거나 폭발하지 않고 즉각적으로 평정심을 되찾습니다.</li>
                    <li>'짜증난다', '기분이 나쁘다' 등의 뭉뚱그려진 감정을 '억울함', '압박감' 등 정확한 언어로 세분화하여 문제의 진짜 원인을 빠르게 파악하고 대처합니다.</li>
                    <li>팀원이나 상사의 부정적인 감정에 무의식적으로 전염(공감 피로)되는 것을 막고, 건강한 심리적 경계를 유지하며 합리적으로 소통합니다.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-white block mb-2">기대 성과</strong>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li>자신을 괴롭히던 감정에 짓눌리지 않고, 한 발짝 물러서서 감정을 다루는 실질적인 3가지 도구(호흡, 거리두기, 재명명)를 몸으로 익힙니다.</li>
                    <li>위기 상황에서 조건반사적으로 행동하는 대신, 스스로 설계한 감정 루틴을 통해 감정을 안전하게 소화하고 생산적인 결과로 연결하는 선택을 할 수 있습니다.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* M4 */}
          <div 
            className="glass-card p-6 border-l-4 border-purple-500 hover:bg-white/5 transition-all cursor-pointer group"
            onClick={() => toggleModule(4)}
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-start gap-6">
                <span className="text-purple-500 font-bold text-xl">M4</span>
                <div>
                  <h4 className="text-lg font-bold">다시 일어나다 (번아웃)</h4>
                  <p className="text-sm text-gray-400 mt-1">에너지 관리 매트릭스, 회복탄력성 훈련 루틴 구축</p>
                </div>
              </div>
              <button className="text-gray-500 group-hover:text-purple-400 transition-colors mt-1">
                {openModule === 4 ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
            </div>
            {openModule === 4 && (
              <div className="mt-6 pt-6 border-t border-white/10 text-sm text-gray-300 leading-relaxed fade-in space-y-4">
                <div>
                  <strong className="text-purple-400 block mb-1">모듈의 핵심 질문</strong>
                  <p className="italic">"내가 지치는 것은 내 정신력이 약해서일까, 아니면 에너지를 채우는 회복의 기술을 모르기 때문일까?"</p>
                </div>
                <div>
                  <strong className="text-white block mb-2">주요 학습 내용 및 도구</strong>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li>에너지 관리 모델(신체/감정/정신/의미)을 통한 개인의 고질적인 에너지 소모 패턴 파악</li>
                    <li>번아웃 조기 경보 체크리스트를 활용한 나만의 심리적 임계점 진단</li>
                    <li>신체(즉각적 안정), 관계(사회적 지지), 의미(자기결정) 3가지 차원의 회복 도구 실습</li>
                    <li>에너지 누수를 막는 건강한 심리적 경계 설정 및 나만의 맞춤형 '주간 회복 루틴' 설계</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-white block mb-2">비즈니스 현장 적용점</strong>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li>무작정 버티다 한계에 부딪혀 쓰러지는 대신, 번아웃 직전의 미세한 신호를 미리 알아차리고 스스로 브레이크를 걺으로써 장기적인 업무 지속성을 확보합니다.</li>
                    <li>휴가를 가거나 퇴사를 해야만 쉴 수 있다는 고정관념에서 벗어나, 업무 중간중간 5분~10분 단위로 적용할 수 있는 즉각적이고 현실적인 미세 회복 전략을 실무에 적용합니다.</li>
                    <li>조직 내에서 거절하지 못하고 떠안던 과도한 업무나 감정 노동에 대해, 무례하지 않으면서도 단호하게 자신을 보호하는 '경계 설정' 대화법을 익혀 불필요한 에너지 낭비를 차단합니다.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-white block mb-2">기대 성과</strong>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li>피로와 무기력을 개인의 나약함으로 탓하던 자책감에서 벗어나, 에너지를 관리해야 할 하나의 자원으로 객관적으로 바라보는 관점의 전환을 이룹니다.</li>
                    <li>강의장을 나서는 즉시 일상과 직장에서 당장 오늘부터 실천할 수 있는 나만의 '최소 단위 회복 루틴'을 갖추게 됩니다.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* M5 */}
          <div 
            className="glass-card p-6 border-l-4 border-blue-500 hover:bg-white/5 transition-all cursor-pointer group"
            onClick={() => toggleModule(5)}
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-start gap-6">
                <span className="text-blue-500 font-bold text-xl">M5</span>
                <div>
                  <h4 className="text-lg font-bold">관계를 넘다 (갈등)</h4>
                  <p className="text-sm text-gray-400 mt-1">비폭력대화(NVC), 건강한 경계 설정 및 관계 코칭</p>
                </div>
              </div>
              <button className="text-gray-500 group-hover:text-blue-400 transition-colors mt-1">
                {openModule === 5 ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
            </div>
            {openModule === 5 && (
              <div className="mt-6 pt-6 border-t border-white/10 text-sm text-gray-300 leading-relaxed fade-in space-y-4">
                <div>
                  <strong className="text-blue-400 block mb-1">모듈의 핵심 질문</strong>
                  <p className="italic">"직장에서 유독 나를 불편하게 만드는 그 사람, 정말 그 사람만의 문제일까, 아니면 내가 반응하는 고정된 패턴 때문일까?"</p>
                </div>
                <div>
                  <strong className="text-white block mb-2">주요 학습 내용 및 도구</strong>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li>어린 시절 형성된 애착 유형(안정/불안/회피)을 바탕으로 한 개인의 고질적인 관계 반응 패턴 탐색.</li>
                    <li>갈등의 근본 원인인 귀인 오류(Fundamental Attribution Error) 이해 및 상황 해석의 다양성 체험 실습.</li>
                    <li>판단 없이 상대의 존재 자체에 집중하는 국제코치연맹(ICF) 기준의 3단계 경청 실습.</li>
                    <li>비폭력대화(NVC)의 4단계(관찰-감정-욕구-요청) 구조 및 나를 중심으로 말하는 I-Message 훈련.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-white block mb-2">비즈니스 현장 적용점</strong>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li>갈등 상황에서 회피하거나 폭발하는 기존의 자동반사적인 패턴을 끊어내고, 상황을 다르게 해석하여 관계의 주도권을 되찾습니다.</li>
                    <li>부하 직원이나 동료의 이야기를 들을 때 머릿속으로 평가하거나 반박할 말을 찾지 않고, 온전히 귀 기울여 조직 내 심리적 안전감을 구축합니다.</li>
                    <li>불만이나 지시 사항을 전달할 때 상대를 향한 비난(You-Message) 대신, 나의 감정과 명확한 요청(I-Message)을 담아 감정 상함 없이 행동 변화를 이끌어냅니다.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-white block mb-2">기대 성과</strong>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    <li>타인을 통제하고 바꾸려던 시도를 내려놓고, '나의 반응 방식을 바꾸는 것'이 관계를 개선하는 가장 빠르고 확실한 방법임을 깨닫습니다.</li>
                    <li>현재 직장에서 겪고 있는 가장 불편한 관계를 선정하고, 내일 당장 적용해 볼 수 있는 구체적인 행동 변화(말투, 태도 등) 계획 한 가지를 설계합니다.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* M6 */}
          <div 
            className="p-6 bg-blue-600/10 rounded-2xl border-2 border-blue-500/30 cursor-pointer hover:bg-blue-600/20 transition-all group"
            onClick={() => toggleModule(6)}
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-start gap-6">
                <span className="text-blue-400 font-bold text-xl">M6</span>
                <div>
                  <h4 className="text-lg font-bold text-blue-100">코칭 마스터리 (실습)</h4>
                  <p className="text-sm text-blue-200 mt-1 font-medium">오프라인(8hr) 집중 실습 및 라이브 피드백</p>
                </div>
              </div>
              <button className="text-blue-400/50 group-hover:text-blue-300 transition-colors mt-1">
                {openModule === 6 ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
            </div>
            {openModule === 6 && (
              <div className="mt-6 pt-6 border-t border-blue-500/20 text-sm text-blue-100/80 leading-relaxed fade-in space-y-4">
                <div>
                  <strong className="text-blue-300 block mb-1">모듈의 핵심 질문</strong>
                  <p className="italic">"지난 6주간 나의 멘탈과 관계를 변화시킨 힘은 무엇이었으며, 이제 나는 타인의 성장을 돕는 코치로서 어떤 철학을 가지고 현장에 설 것인가?"</p>
                </div>
                <div>
                  <strong className="text-white block mb-2">주요 학습 내용 및 도구</strong>
                  <ul className="list-disc list-inside space-y-1">
                    <li>코칭의 본질(티칭/컨설팅과의 차이) 이해 및 고객의 완전함을 믿는 코치의 핵심 마인드셋(현존, 호기심 등) 내재화.</li>
                    <li>코칭 5단계 프로세스 마스터: ① 현재 상태 파악 → ② 기대 목표 설정 → ③ 의미 확장 → ④ 대안 탐색 → ⑤ 실행 의지 및 자기 확인.</li>
                    <li>경청, 질문, 인정의 3대 핵심 코칭 스킬 훈련 및 3인 1조 롤플레잉(코치-피코치-관찰자) 라이브 실습.</li>
                    <li>1~5모듈 통합 회고 및 전용 앱(BMC App)을 활용한 현장 밀착형 코칭 실습, 나만의 '코칭 철학 선언문' 작성.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-white block mb-2">비즈니스 현장 적용점</strong>
                  <ul className="list-disc list-inside space-y-1">
                    <li>업무 지시나 문제 해결 위주의 대화(티칭, 컨설팅)에서 벗어나, 팀원이 스스로 내적 동기를 찾고 해답을 발견하도록 돕는 촉진자 역할을 수행합니다.</li>
                    <li>팀원의 막연한 어려움을 명확한 목표와 실행 계획으로 연결하는 5단계 대화 구조를 1:1 면담이나 성과 피드백 세션에 즉각적으로 적용합니다.</li>
                    <li>BMC 전용 앱을 활용하여 코칭 기록을 데이터화하고 질문 가이드를 참고함으로써, 현장에서도 체계적인 멘탈 코칭과 자기 관리를 이어갑니다.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-white block mb-2">기대 성과</strong>
                  <ul className="list-disc list-inside space-y-1">
                    <li>자신이 6주간 겪은 변화의 여정이 곧 '코칭'이었음을 깨닫고, 교육 수강생을 넘어 조직을 이끄는 '비즈니스 멘탈 코치'로서의 확고한 정체성과 자신감을 장착합니다.</li>
                    <li>나만의 명확한 '코칭 철학 한 문장'을 완성하고 향후 3개월간의 실천 계획을 수립하여, 교육 종료 후에도 지속 가능한 성장을 담보합니다.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        <p className="mt-8 text-center text-gray-500 text-sm">※ M1-M5는 온라인(2hr), M6는 오프라인(8hr)으로 진행됩니다.</p>
      </section>

      {/* 차별화 경쟁력 */}
      <section className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">KMCC 과정만의 6가지 차별화</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((diff, index) => (
              <div 
                key={index} 
                className="glass-card overflow-hidden cursor-pointer transition-all duration-300 hover:bg-white/5"
                onClick={() => toggleDifferentiator(index)}
              >
                <div className="p-6 flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-blue-400 mb-2 text-lg">{diff.title}</h4>
                    <p className="text-sm text-gray-300 font-medium">{diff.subtitle}</p>
                  </div>
                  {openDifferentiator === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 shrink-0 ml-4 mt-1" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 ml-4 mt-1" />
                  )}
                </div>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openDifferentiator === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {diff.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 수강 대상 */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">수강 대상</h3>
            <p className="text-gray-400 text-lg">이런 분들께 적극 추천합니다</p>
          </div>
          
          <div className="space-y-2">
            <div className="glass-card p-3 md:p-4 flex items-center gap-4 border-l-4 border-blue-500 hover:bg-white/5 transition-all">
              <CheckCircle className="w-6 h-6 text-blue-400 shrink-0" />
              <p className="text-base md:text-lg text-gray-200">조직의 성과 향상과 팀원들의 멘탈 관리가 고민인 <span className="font-bold text-white">리더 및 관리자</span></p>
            </div>
            <div className="glass-card p-3 md:p-4 flex items-center gap-4 border-l-4 border-purple-500 hover:bg-white/5 transition-all">
              <CheckCircle className="w-6 h-6 text-purple-400 shrink-0" />
              <p className="text-base md:text-lg text-gray-200"><span className="font-bold text-white">사내 코치, HR 담당자, 기업 교육(HRD) 담당자</span></p>
            </div>
            <div className="glass-card p-3 md:p-4 flex items-center gap-4 border-l-4 border-blue-500 hover:bg-white/5 transition-all">
              <CheckCircle className="w-6 h-6 text-blue-400 shrink-0" />
              <p className="text-base md:text-lg text-gray-200">스스로의 멘탈을 강화하고 한 단계 더 도약하고 싶은 <span className="font-bold text-white">직장인 및 개인</span></p>
            </div>
            <div className="glass-card p-3 md:p-4 flex items-center gap-4 border-l-4 border-purple-500 hover:bg-white/5 transition-all">
              <CheckCircle className="w-6 h-6 text-purple-400 shrink-0" />
              <p className="text-base md:text-lg text-gray-200">사업 성장 목표를 달성하고 싶은 <span className="font-bold text-white">자영업자·경영자·프리랜서</span></p>
            </div>
            <div className="glass-card p-3 md:p-4 flex items-center gap-4 border-l-4 border-blue-500 hover:bg-white/5 transition-all">
              <CheckCircle className="w-6 h-6 text-blue-400 shrink-0" />
              <p className="text-base md:text-lg text-gray-200">업무 스트레스로 지치고 <span className="font-bold text-white">번아웃과 무기력함으로 의욕이 상실되신 분</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* 과정혜택 */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="glass-card p-10 md:p-12 border-t-4 border-purple-500">
          <h3 className="text-3xl font-bold mb-8 text-center">과정혜택</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-purple-400 shrink-0 mt-0.5" />
              <p className="text-lg text-gray-200">한국멘탈코칭센터 명의의 <span className="font-bold text-white">‘비즈니스멘탈코칭 수료증’</span> 발급</p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-purple-400 shrink-0 mt-0.5" />
              <p className="text-lg text-gray-200"><span className="font-bold text-white">비즈니스멘탈코칭 전문가 자격 과정 자격증</span> 발급 (등록된 자격증)</p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-purple-400 shrink-0 mt-0.5" />
              <p className="text-lg text-gray-200">우수 수료자는 추후 <span className="font-bold text-white">비즈니스멘탈코치로서의 활동 기회</span> 부여</p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-purple-400 shrink-0 mt-0.5" />
              <p className="text-lg text-gray-200">한국멘탈코칭센터 각종 <span className="font-bold text-white">행사 및 세미나 회원 할인</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* 코치 소개 */}
      <section className="py-24 px-6 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-16 text-center">코치 소개</h3>
          <div className="grid md:grid-cols-2 gap-12">
            {/* 코치 1 */}
            <div className="glass-card p-8 flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-blue-500/30">
                <img src="/coach1.jpg.png" alt="송철우 코치" className="w-full h-full object-cover object-top" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/coach1/400/400'; }} />
              </div>
              <h4 className="text-2xl font-bold mb-2">송철우</h4>
              <p className="text-blue-400 font-medium mb-6">KMCC 수석코치</p>
              
              <div className="w-full text-left space-y-6">
                <div>
                  <h5 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 border-b border-white/10 pb-2">코칭철학</h5>
                  <p className="text-gray-300 italic">"비즈니스는 단거리가 아닌 마라톤입니다. 지치지 않는 호흡으로 당신의 완주를 돕는 멘탈 페이스메이커가 되겠습니다."</p>
                </div>
                
                <div>
                  <h5 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 border-b border-white/10 pb-2">인증자격</h5>
                  <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                    <li>스포츠 멘탈코칭 전문가 1급 (KMCC)</li>
                    <li>한국코치협회 전문코치 (KPC)</li>
                    <li>임파워링코칭 Facilitator</li>
                    <li>스포츠심리상담사 1급</li>
                    <li>한국형 에니어그램 전문강사</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 border-b border-white/10 pb-2">강의 및 코칭이력</h5>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    삼성전자, 현대차, 한국전력공사, 기아, KAI, 에코비트, 롯데그룹, 한화에어로스페이스, 삼보모터스, 현대트랜시스, 현대해상, 상상인, 농심, KT엔지니어링, 용마로지스, 대한제강, CJ, 대상, 롯데제과, 애경케미칼, 코이카, 경찰인재개발원, 경기도 인재개발원, 동국제약, 전남드래곤즈, 한라대학교, 카톨릭 대학교, 순천향병원, 에코비트
                  </p>
                </div>
              </div>
            </div>

            {/* 코치 2 */}
            <div className="glass-card p-8 flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-blue-500/30">
                <img src="/coach2.jpg.png" alt="양흥열 코치" className="w-full h-full object-cover object-top" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/coach2/400/400'; }} />
              </div>
              <h4 className="text-2xl font-bold mb-2">양흥열</h4>
              <p className="text-blue-400 font-medium mb-6">KMCC 수석코치</p>
              
              <div className="w-full text-left space-y-6">
                <div>
                  <h5 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 border-b border-white/10 pb-2">코칭철학</h5>
                  <p className="text-gray-300 italic">"매일의 단단한 습관이 탁월함을 만듭니다. 흔들리지 않는 멘탈로 꾸준함을 실천하는 당신의 성장 파트너가 되겠습니다."</p>
                </div>
                
                <div>
                  <h5 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 border-b border-white/10 pb-2">인증자격</h5>
                  <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                    <li>갤럽 인증 강점코치</li>
                    <li>국제코치연맹 전문코치 (PCC)</li>
                    <li>스포츠 멘탈코칭 전문가 1급 (KMCC)</li>
                    <li>한국코치협회 전문코치 (KPC)</li>
                    <li>코칭슈퍼바이저 (코칭경영원)</li>
                    <li>LCP 리더십 진단 전문가</li>
                    <li>임파워링코칭 Facilitator</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 border-b border-white/10 pb-2">강의 및 코칭이력</h5>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    포스코, 포스코에너지, 포스코모빌리티, 포스코스틸리온, 포스코엠텍, 한중, PNR-M, 애경특수도료, 현대글로비스, 지마린서비스, 코오롱, 한일시멘트, LG전자, 현대중공업, 포항스틸러스(프로2군, 유스팀, 지도자, 사무국), 포스코에너지 탁구단, 무궁화전자 휠체어농구단, 포항종합사회복지관, 창포종합사회복지관, 학산종합사회복지관
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 등록 정보 */}
      <section id="register" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10 -z-10 blur-3xl scale-75"></div>
        <div className="max-w-3xl mx-auto glass-card p-10 md:p-16 border-2 border-blue-500/30">
          <h3 className="text-3xl font-black mb-10 text-center">Registration Details</h3>

          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">일정</p>
                <p className="font-bold">5월 14일 ~ 6월 11일 (매주 목 저녁 8~10시, 온라인)</p>
                <p className="font-bold">6월 20일 (토 오전 9시~오후 6시, 오프라인 실습)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">신청 기한</p>
                <p className="font-bold">4월 30일까지 접수 마감</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                <Banknote className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">비용</p>
                <p className="font-bold">65만원 (부가세 포함)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">문의처</p>
                <p className="font-bold">010-8995-3591 (문자 문의 가능)</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm mb-6">"당신의 코칭이 조직의 문화를 바꾸고 개인의 삶을 재건합니다."</p>
            <button onClick={() => window.location.href = 'tel:010-8995-3591'} className="w-full gradient-bg py-5 rounded-xl font-black text-xl hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all cursor-pointer">
              지금 바로 사전 인터뷰 신청
            </button>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="py-12 border-t border-white/10 text-center text-gray-500 text-sm">
        <p className="mb-4">한국멘탈코칭센터 (Korea Mental Coaching Center)</p>
      </footer>
    </div>
  );
}
