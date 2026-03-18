/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
  CheckCircle
} from 'lucide-react';

export default function App() {
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
        <div className="glass-card p-8 md:p-12 text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 italic">"내면의 기반이 성과를 결정합니다."</h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            비즈니스멘탈코칭은 비즈니스 현장에서 자신이 원하는 성과를 달성할 수 있도록<br className="hidden md:block" />
            멘탈 강화와 유지 관리를 지원하는 전문 코칭 분야입니다.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
          <p className="text-gray-400">체계적인 이론을 기반으로 실천적인 코칭 기술을 전수합니다.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {/* 긍정심리학 */}
          <div className="glass-card p-8 border-t-4 border-blue-500">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-500/20 rounded-lg mb-6 text-blue-400">
              <Smile className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">긍정심리학</h4>
            <ul className="text-gray-400 space-y-2">
              <li>• 강점 발견</li>
              <li>• 자기효능감</li>
              <li>• 심리적 웰빙</li>
            </ul>
          </div>
          {/* 코칭학 */}
          <div className="glass-card p-8 border-t-4 border-purple-500">
            <div className="w-12 h-12 flex items-center justify-center bg-purple-500/20 rounded-lg mb-6 text-purple-400">
              <Target className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">코칭학</h4>
            <ul className="text-gray-400 space-y-2">
              <li>• 목표 설정</li>
              <li>• 행동 변화</li>
              <li>• 성장 마인드셋</li>
            </ul>
          </div>
          {/* 조직심리학 */}
          <div className="glass-card p-8 border-t-4 border-blue-600">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-600/20 rounded-lg mb-6 text-blue-300">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold mb-4">조직심리학</h4>
            <ul className="text-gray-400 space-y-2">
              <li>• 직무 스트레스 관리</li>
              <li>• 번아웃 예방</li>
              <li>• 동기 이론</li>
            </ul>
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
            <div className="p-6 rounded-2xl border border-white/5 bg-white/5">
              <Rocket className="w-6 h-6 text-blue-400 mb-4" />
              <h4 className="font-bold mb-2">도전정신</h4>
              <p className="text-sm text-gray-400">새로운 시작을 위한 용기와 실행력</p>
            </div>
            <div className="p-6 rounded-2xl border border-white/5 bg-white/5">
              <Gem className="w-6 h-6 text-purple-400 mb-4" />
              <h4 className="font-bold mb-2">GRIT</h4>
              <p className="text-sm text-gray-400">포기하지 않는 열정과 끈기 강화</p>
            </div>
            <div className="p-6 rounded-2xl border border-white/5 bg-white/5">
              <RefreshCw className="w-6 h-6 text-blue-400 mb-4" />
              <h4 className="font-bold mb-2">회복탄력성</h4>
              <p className="text-sm text-gray-400">실패를 딛고 더 높이 일어서는 힘</p>
            </div>
            <div className="p-6 rounded-2xl border border-white/5 bg-white/5">
              <BatteryFull className="w-6 h-6 text-purple-400 mb-4" />
              <h4 className="font-bold mb-2">번아웃 극복</h4>
              <p className="text-sm text-gray-400">에너지 회복 및 체계적 재충전</p>
            </div>
            <div className="p-6 rounded-2xl border border-white/5 bg-white/5">
              <HeartPulse className="w-6 h-6 text-blue-400 mb-4" />
              <h4 className="font-bold mb-2">스트레스 관리</h4>
              <p className="text-sm text-gray-400">업무 과부하 및 심리적 압박 조절</p>
            </div>
            <div className="p-6 rounded-2xl border border-white/5 bg-white/5">
              <MessageCircle className="w-6 h-6 text-purple-400 mb-4" />
              <h4 className="font-bold mb-2">관계 갈등</h4>
              <p className="text-sm text-gray-400">조직 내 갈등 해소와 건강한 소통</p>
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
          {/* 모듈 리스트 */}
          <div className="glass-card p-6 flex items-start gap-6 border-l-4 border-blue-500 hover:bg-white/5 transition-all">
            <span className="text-blue-500 font-bold text-xl">M1</span>
            <div>
              <h4 className="text-lg font-bold">나를 알다 (자기인식)</h4>
              <p className="text-sm text-gray-400 mt-1">무의식적 패턴 인식, GRIT/번아웃 진단, 강점 파악</p>
            </div>
          </div>
          <div className="glass-card p-6 flex items-start gap-6 border-l-4 border-purple-500 hover:bg-white/5 transition-all">
            <span className="text-purple-500 font-bold text-xl">M2</span>
            <div>
              <h4 className="text-lg font-bold">멈추지 않는 힘 (GRIT)</h4>
              <p className="text-sm text-gray-400 mt-1">성장 마인드셋 워크숍, 목표 재구성 코칭 기법</p>
            </div>
          </div>
          <div className="glass-card p-6 flex items-start gap-6 border-l-4 border-blue-500 hover:bg-white/5 transition-all">
            <span className="text-blue-500 font-bold text-xl">M3</span>
            <div>
              <h4 className="text-lg font-bold">스트레스를 다루다 (감정)</h4>
              <p className="text-sm text-gray-400 mt-1">인지행동코칭 기법, 마음챙김 실습, 감정의 에너지 전환</p>
            </div>
          </div>
          <div className="glass-card p-6 flex items-start gap-6 border-l-4 border-purple-500 hover:bg-white/5 transition-all">
            <span className="text-purple-500 font-bold text-xl">M4</span>
            <div>
              <h4 className="text-lg font-bold">다시 일어나다 (번아웃)</h4>
              <p className="text-sm text-gray-400 mt-1">에너지 관리 매트릭스, 회복탄력성 훈련 루틴 구축</p>
            </div>
          </div>
          <div className="glass-card p-6 flex items-start gap-6 border-l-4 border-blue-500 hover:bg-white/5 transition-all">
            <span className="text-blue-500 font-bold text-xl">M5</span>
            <div>
              <h4 className="text-lg font-bold">관계를 넘다 (갈등)</h4>
              <p className="text-sm text-gray-400 mt-1">비폭력대화(NVC), 건강한 경계 설정 및 관계 코칭</p>
            </div>
          </div>
          <div className="p-6 flex items-start gap-6 bg-blue-600/10 rounded-2xl border-2 border-blue-500/30">
            <span className="text-blue-400 font-bold text-xl">M6</span>
            <div>
              <h4 className="text-lg font-bold text-blue-100">코칭 마스터리 (실습)</h4>
              <p className="text-sm text-blue-200 mt-1 font-medium">오프라인(8hr) 집중 실습 및 라이브 피드백</p>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-gray-500 text-sm">※ M1-M5는 온라인(2hr), M6는 오프라인(8hr)으로 진행됩니다.</p>
      </section>

      {/* 차별화 경쟁력 */}
      <section className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">KMCC 과정만의 6가지 차별화</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 glass-card">
              <h4 className="font-bold text-blue-400 mb-2">전문적 통합</h4>
              <p className="text-xs text-gray-400">심리학, 인지행동코칭, 감성지능이론의 실전 적용</p>
            </div>
            <div className="p-6 glass-card">
              <h4 className="font-bold text-blue-400 mb-2">실전 접근</h4>
              <p className="text-xs text-gray-400">실제 업무 상황에 즉시 적용 가능한 현장 솔루션</p>
            </div>
            <div className="p-6 glass-card">
              <h4 className="font-bold text-blue-400 mb-2">개인 맞춤형</h4>
              <p className="text-xs text-gray-400">개별 상황과 목표에 맞춘 커스텀 코칭 설계</p>
            </div>
            <div className="p-6 glass-card">
              <h4 className="font-bold text-blue-400 mb-2">측정 가능한 변화</h4>
              <p className="text-xs text-gray-400">진단 척도를 활용한 코칭 전/후 데이터 분석</p>
            </div>
            <div className="p-6 glass-card">
              <h4 className="font-bold text-blue-400 mb-2">지속성과 실행력</h4>
              <p className="text-xs text-gray-400">일회성이 아닌 전용 앱(App)을 통한 사후 관리</p>
            </div>
            <div className="p-6 glass-card">
              <h4 className="font-bold text-blue-400 mb-2">철저한 비밀보장</h4>
              <p className="text-xs text-gray-400">안전한 심리적 공간과 정보 보호 원칙 준수</p>
            </div>
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
