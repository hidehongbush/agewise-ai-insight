export type Language = 'ko' | 'en';

export interface Translations {
  navbar: {
    home: string;
    chat: string;
    latestTrends: string;
    supplementTracker: string;
    startForFree: string;
  };
  hero: {
    title: string;
    titleMiddle: string;
    titleHighlight: string;
    subtitle: string;
  };
  features: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    items: {
      aiChat: {
        title: string;
        description: string;
        badge: string;
      };
      latestTrends: {
        title: string;
        description: string;
        badge: string;
      };
      supplementTracker: {
        title: string;
        description: string;
        badge: string;
      };
      agingSimulation: {
        title: string;
        description: string;
        badge: string;
      };
    };
    demos: {
      aiChat: {
        title: string;
        subtitle: string;
        messages: {
          question1: string;
          response1: string;
          details1: string;
          sources1: string;
          question2: string;
          response2: string;
          preview: string;
          process: string;
        };
        placeholder: string;
      };
      researchTrends: {
        title: string;
        subtitle: string;
        completed: string;
        refreshButton: string;
        items: {
          title1: string;
          title2: string;
          title3: string;
          title4: string;
          title5: string;
        };
        summary: {
          title: string;
          content: string;
        };
        placeholder: string;
      };
      supplementTracker: {
        title: string;
        subtitle: string;
        tabs: {
          supplements: string;
          foods: string;
          myList: string;
        };
        nmn: {
          title: string;
          category: string;
          description: string;
          benefits: {
            title: string;
            items: string[];
          };
          buttons: {
            viewDetails: string;
            add: string;
          };
        };
        otherItems: {
          blueberry: string;
          resveratrol: string;
          vitaminD3: string;
        };
        placeholder: string;
      };
    };
    problemSolution: {
      problemTitle: string;
      solutionTitle: string;
      problems: {
        unverified: {
          title: string;
          description: string;
        };
        timeWaste: {
          title: string;
          description: string;
        };
        healthRisk: {
          title: string;
          description: string;
        };
      };
      solutions: {
        scientific: {
          title: string;
          description: string;
        };
        personalized: {
          title: string;
          description: string;
        };
        comprehensive: {
          title: string;
          description: string;
        };
      };
    };
  };
  benefits: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    badge: string;
    items: {
      scientific: {
        title: string;
        description: string;
      };
      realTime: {
        title: string;
        description: string;
      };
      comprehensive: {
        title: string;
        description: string;
      };
      free: {
        title: string;
        description: string;
      };
    };
    featured: {
      title: string;
      description: string;
      features: {
        feature1: string;
        feature2: string;
        feature3: string;
      };
    };
    stats: {
      title: string;
      timeSaved: {
        value: string;
        label: string;
      };
      reliability: {
        value: string;
        label: string;
      };
      healthImprovement: {
        value: string;
        label: string;
      };
      freeAccess: {
        value: string;
        label: string;
      };
    };
    testimonial: {
      quote: string;
      author: string;
      position: string;
    };
  };
  howItWorks: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    badge: string;
    steps: {
      step1: {
        title: string;
        description: string;
      };
      step2: {
        title: string;
        description: string;
      };
      step3: {
        title: string;
        description: string;
      };
    };
    demo: {
      title: string;
      chatMessages: {
        question: string;
        searching: string;
        response: string;
        details: string;
        sources: {
          title: string;
          source1: string;
          source2: string;
        };
      };
      placeholder: string;
      sendButton: string;
      sidePanel: {
        title: string;
        items: {
          title1: string;
          description1: string;
          title2: string;
          description2: string;
          title3: string;
          description3: string;
        };
        reliability: string;
        citations: string;
      };
    };
    technicalFeatures: {
      title: string;
      database: {
        title: string;
        description: string;
      };
      verification: {
        title: string;
        description: string;
      };
      personalization: {
        title: string;
        description: string;
      };
    };
    cta: {
      button: string;
      note: string;
    };
  };
  faq: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    badge: string;
    columns: {
      general: string;
      service: string;
    };
    items: {
      q1: {
        question: string;
        answer: string;
      };
      q2: {
        question: string;
        answer: string;
      };
      q3: {
        question: string;
        answer: string;
      };
      q4: {
        question: string;
        answer: string;
      };
    };
    helpBox: {
      title: string;
      description: string;
      button: string;
    };
    quickLinks: {
      supplementTracker: string;
      latestTrends: string;
      serviceIntro: string;
    };
  };
  finalCta: {
    title: string;
    subtitle: string;
    buttons: {
      chat: string;
      latestTrends: string;
    };
  };
  chat: {
    welcomeMessage: string;
    placeholder: string;
    lifestyle: string;
    nutrition: string;
    ageCalculation: string;
    imageSelected: string;
    startAgingSimulation: string;
    lifestyleMessage: string;
    nutritionMessage: string;
    supplementMessage: string;
    foodMessage: string;
    generating: string;
  };
  footer: {
    companyName: string;
    description: string;
    services: string;
    servicesList: {
      aiConsult: string;
      latestResearch: string;
      supplementTracker: string;
      mythFactCheck: string;
    };
    information: string;
    informationList: {
      about: string;
      terms: string;
      privacy: string;
      contact: string;
    };
    copyright: string;
    disclaimer: string;
  };
  pages: {
    latestTrends: {
      title: string;
      subtitle: string;
      searching: string;
      searchingDetail: string;
      searchComplete: string;
      refreshing: string;
      refreshButton: string;
      noResults: string;
      noResultsDescription: string;
      retrySearch: string;
      readMore: string;
      searchSuffix: string;
      topicsCount: string;
    };
    supplementTracker: {
      title: string;
      subtitle: string;
      addNewSupplement: string;
      supplementName: string;
      dosage: string;
      timePlaceholder: string;
      supplementNamePlaceholder: string;
      dosagePlaceholder: string;
      timeLabel: string;
      addButton: string;
      todaysSupplements: string;
      taken: string;
      takeNow: string;
      recommendedSupplements: string;
      evidenceBasedSupplements: string;
      personalizedRecommendations: string;
      interactionChecker: string;
      effectTracking: string;
      scientificEvidence: string;
      dosageGuidance: string;
      safetyInformation: string;
      researchSources: string;
      lastUpdated: string;
      clinicalTrials: string;
      bioavailability: string;
      sideEffects: string;
      contraindications: string;
      addToMyList: string;
      viewDetails: string;
      trackProgress: string;
      checkInteractions: string;
      yourSupplements: string;
      dailyProgress: string;
      weeklyProgress: string;
      monthlyProgress: string;
      consistencyRate: string;
      effectsNoticed: string;
      addEffect: string;
      selectCategory: string;
      antiAging: string;
      cognitiveHealth: string;
      cardiovascularHealth: string;
      immuneSupport: string;
      energyMetabolism: string;
      boneHealth: string;
      skinHealth: string;
      sleepQuality: string;
      stressManagement: string;
      searchSupplements: string;
      filterByCategory: string;
      sortByEvidence: string;
      expertRecommended: string;
      beginnerFriendly: string;
      advancedUsers: string;
      budgetFriendly: string;
      premiumOptions: string;
      noInteractionsFound: string;
      warningInteractions: string;
      minorInteractions: string;
      majorInteractions: string;
      consultPhysician: string;
      resveratrol_omega3_interaction: string;
      vitaminD: {
        title: string;
        description: string;
        dosage: string;
        benefits: string;
        evidence: string;
        source: string;
        warnings: string[];
        interactions: string[];
      };
      omega3: {
        title: string;
        description: string;
        dosage: string;
        benefits: string;
        evidence: string;
        source: string;
        warnings: string[];
        interactions: string[];
      };
      magnesium: {
        title: string;
        description: string;
        dosage: string;
        benefits: string;
        evidence: string;
        source: string;
        warnings: string[];
        interactions: string[];
      };
      nmn: {
        title: string;
        description: string;
        dosage: string;
        benefits: string;
        evidence: string;
        source: string;
        warnings: string[];
        interactions: string[];
      };
      resveratrol: {
        title: string;
        description: string;
        dosage: string;
        benefits: string;
        evidence: string;
        source: string;
        warnings: string[];
        interactions: string[];
      };
      fisetin: {
        title: string;
        description: string;
        dosage: string;
        benefits: string;
        evidence: string;
        source: string;
        warnings: string[];
        interactions: string[];
      };
      spermidine: {
        title: string;
        description: string;
        dosage: string;
        benefits: string;
        evidence: string;
        source: string;
        warnings: string[];
        interactions: string[];
      };
      quercetin: {
        title: string;
        description: string;
        dosage: string;
        benefits: string;
        evidence: string;
        source: string;
        warnings: string[];
        interactions: string[];
      };
      coq10: {
        title: string;
        description: string;
        dosage: string;
        benefits: string;
        evidence: string;
        source: string;
        warnings: string[];
        interactions: string[];
      };
      curcumin: {
        title: string;
        description: string;
        dosage: string;
        benefits: string;
        evidence: string;
        source: string;
        warnings: string[];
        interactions: string[];
      };
      taurine: {
        title: string;
        description: string;
        dosage: string;
        benefits: string;
        evidence: string;
        source: string;
        warnings: string[];
        interactions: string[];
      };
      nad_precursors: {
        title: string;
        description: string;
        dosage: string;
        benefits: string;
        evidence: string;
        source: string;
        warnings: string[];
        interactions: string[];
      };
      senolytic_compounds: {
        title: string;
        description: string;
        dosage: string;
        benefits: string;
        evidence: string;
        source: string;
        warnings: string[];
        interactions: string[];
      };
      berberine: {
        title: string;
        description: string;
        dosage: string;
        benefits: string;
        evidence: string;
        source: string;
        warnings: string[];
        interactions: string[];
      };
      metformin: {
        title: string;
        description: string;
        dosage: string;
        benefits: string;
        evidence: string;
        source: string;
        warnings: string[];
        interactions: string[];
      };
      rapamycin: {
        title: string;
        description: string;
        dosage: string;
        benefits: string;
        evidence: string;
        source: string;
        warnings: string[];
        interactions: string[];
      };
      ashwagandha: {
        title: string;
        description: string;
        dosage: string;
        benefits: string;
        evidence: string;
        source: string;
        warnings: string[];
        interactions: string[];
      };
      rhodiola: {
        title: string;
        description: string;
        dosage: string;
        benefits: string;
        evidence: string;
        source: string;
        warnings: string[];
        interactions: string[];
      };
      prebiotics: {
        title: string;
        description: string;
        dosage: string;
        benefits: string;
        evidence: string;
        source: string;
        warnings: string[];
        interactions: string[];
      };
      probiotics: {
        title: string;
        description: string;
        dosage: string;
        benefits: string;
        evidence: string;
        source: string;
        warnings: string[];
        interactions: string[];
      };
      zinc: {
        title: string;
        description: string;
        dosage: string;
        benefits: string;
        evidence: string;
        source: string;
        warnings: string[];
        interactions: string[];
      };
      selenium: {
        title: string;
        description: string;
        dosage: string;
        benefits: string;
        evidence: string;
        source: string;
        warnings: string[];
        interactions: string[];
      };
      b_complex: {
        title: string;
        description: string;
        dosage: string;
        benefits: string;
        evidence: string;
        source: string;
        warnings: string[];
        interactions: string[];
      };
      alpha_lipoic_acid: {
        title: string;
        description: string;
        dosage: string;
        benefits: string;
        evidence: string;
        source: string;
        warnings: string[];
        interactions: string[];
      };
      green_tea_extract: {
        title: string;
        description: string;
        dosage: string;
        benefits: string;
        evidence: string;
        source: string;
        warnings: string[];
        interactions: string[];
      };
    };
    // Food Database
    foodDatabase: {
      title: string;
      subtitle: string;
      searchPlaceholder: string;
      categoryAll: string;
      headerTitle: string;
      headerSubtitle: string;
      searchResultsCount: string;
      categoryFilter: string;
      noResultsTitle: string;
      noResultsDescription: string;
      tabs: {
        foodDatabase: string;
        supplementDatabase: string;
        mySupplements: string;
      };
      addToListButton: string;
      askAIButton: string;
      viewDetailsButton: string;
      closeButton: string;
      detailModal: {
        detailDescription: string;
        servingSize: string;
        researchEvidence: string;
        keyBenefits: string;
        coreNutrients: string;
        cookingTips: string;
        storage: string;
        warnings: string;
        bestTime: string;
      };
      categories: {
        all: string;
        antioxidant: string;
        omega3: string;
        antiInflammatory: string;
        brainHealth: string;
        cardiovascular: string;
        gutHealth: string;
        comprehensiveAntiAging: string;
      };
      categoryNames: {
        antioxidant: string;
        omega3: string;
        antiInflammatory: string;
        brainHealth: string;
        cardiovascular: string;
        gutHealth: string;
        antiAging: string;
      };
      foods: {
        blueberries: {
          name: string;
          description: string;
          servingSize: string;
          benefits: string;
          evidence: string;
          source: string;
          nutritionHighlights: string[];
          bestTimesToEat: string;
          storage: string;
          cookingTips: string[];
          warnings: string[];
        };
        dark_chocolate: {
          name: string;
          description: string;
          servingSize: string;
          benefits: string;
          evidence: string;
          source: string;
          nutritionHighlights: string[];
          bestTimesToEat: string;
          storage: string;
          cookingTips: string[];
          warnings: string[];
        };
        green_tea: {
          name: string;
          description: string;
          servingSize: string;
          benefits: string;
          evidence: string;
          source: string;
          nutritionHighlights: string[];
          bestTimesToEat: string;
          storage: string;
          cookingTips: string[];
          warnings: string[];
        };
        salmon: {
          name: string;
          description: string;
          servingSize: string;
          benefits: string;
          evidence: string;
          source: string;
          nutritionHighlights: string[];
          bestTimesToEat: string;
          storage: string;
          cookingTips: string[];
          warnings: string[];
        };
        walnuts: {
          name: string;
          description: string;
          servingSize: string;
          benefits: string;
          evidence: string;
          source: string;
          nutritionHighlights: string[];
          bestTimesToEat: string;
          storage: string;
          cookingTips: string[];
          warnings: string[];
        };
        turmeric: {
          name: string;
          description: string;
          servingSize: string;
          benefits: string;
          evidence: string;
          source: string;
          nutritionHighlights: string[];
          bestTimesToEat: string;
          storage: string;
          cookingTips: string[];
          warnings: string[];
        };
        ginger: {
          name: string;
          description: string;
          servingSize: string;
          benefits: string;
          evidence: string;
          source: string;
          nutritionHighlights: string[];
          bestTimesToEat: string;
          storage: string;
          cookingTips: string[];
          warnings: string[];
        };
        avocado: {
          name: string;
          description: string;
          servingSize: string;
          benefits: string;
          evidence: string;
          source: string;
          nutritionHighlights: string[];
          bestTimesToEat: string;
          storage: string;
          cookingTips: string[];
          warnings: string[];
        };
        spinach: {
          name: string;
          description: string;
          servingSize: string;
          benefits: string;
          evidence: string;
          source: string;
          nutritionHighlights: string[];
          bestTimesToEat: string;
          storage: string;
          cookingTips: string[];
          warnings: string[];
        };
        oats: {
          name: string;
          description: string;
          servingSize: string;
          benefits: string;
          evidence: string;
          source: string;
          nutritionHighlights: string[];
          bestTimesToEat: string;
          storage: string;
          cookingTips: string[];
          warnings: string[];
        };
        olive_oil: {
          name: string;
          description: string;
          servingSize: string;
          benefits: string;
          evidence: string;
          source: string;
          nutritionHighlights: string[];
          bestTimesToEat: string;
          storage: string;
          cookingTips: string[];
          warnings: string[];
        };
        kimchi: {
          name: string;
          description: string;
          servingSize: string;
          benefits: string;
          evidence: string;
          source: string;
          nutritionHighlights: string[];
          bestTimesToEat: string;
          storage: string;
          cookingTips: string[];
          warnings: string[];
        };
        greek_yogurt: {
          name: string;
          description: string;
          servingSize: string;
          benefits: string;
          evidence: string;
          source: string;
          nutritionHighlights: string[];
          bestTimesToEat: string;
          storage: string;
          cookingTips: string[];
          warnings: string[];
        };
        pomegranate: {
          name: string;
          description: string;
          servingSize: string;
          benefits: string;
          evidence: string;
          source: string;
          nutritionHighlights: string[];
          bestTimesToEat: string;
          storage: string;
          cookingTips: string[];
          warnings: string[];
        };
        sweet_potato: {
          name: string;
          description: string;
          servingSize: string;
          benefits: string;
          evidence: string;
          source: string;
          nutritionHighlights: string[];
          bestTimesToEat: string;
          storage: string;
          cookingTips: string[];
          warnings: string[];
        };
      };
    };
    // My Supplements section
    mySupplements: {
      addSupplement: string;
      mySupplementsList: string;
      interactions: string;
      safeStatus: string;
      warningNeeded: string;
      noInteractionsMessage: string;
      currentTaking: string;
      moreItems: string;
      addSupplementForm: {
        supplementName: string;
        takingTime: string;
        notes: string;
        addButton: string;
        namePlaceholder: string;
        timePlaceholder: string;
        notesPlaceholder: string;
      };
      progress: {
        todayProgress: string;
        taken: string;
        notTaken: string;
      };
      general: {
        morning: string;
        afternoon: string;
        evening: string;
        memo: string;
        dosage: string;
        purpose: string;
        example: string;
      };
      itemCount: string;
      deleteButton: string;
      takenButton: string;
      notTakenButton: string;
      warningDescription: string;
      takingTips: {
        title: string;
        tip1: string;
        tip2: string;
        tip3: string;
        tip4: string;
      };
      consultWarning: string;
    };
    common: {
      search: string;
      filter: string;
      category: string;
      all: string;
      close: string;
      add: string;
      delete: string;
      edit: string;
      save: string;
      cancel: string;
      loading: string;
      error: string;
      retry: string;
      noResults: string;
      showMore: string;
      showLess: string;
    };
    notFound: {
      title: string;
      message: string;
      backHome: string;
    };
  };
  researchProgress: {
    searchStatus: {
      papersSearched: string;
      papersCompleted: string;
      searching: string;
      waiting: string;
      totalPapers: string;
      yearFilter: string;
      progressLabel: string;
      averageIF: string;
    };
    databases: {
      natureAging: string;
      science: string;
      pubmed: string;
    };
    interactions: {
      title: string;
      warningExample: string;
      totalSupplements: string;
      monthlyCost: string;
      safetyScore: string;
    };
    badges: {
      realtime: string;
      new: string;
      popular: string;
    };
    webSearch: {
      title: string;
      description: string;
    };
    reliableSources: {
      title: string;
      description: string;
    };
    practicalAdvice: {
      title: string;
      description: string;
      personalInfo: {
        age: string;
        weight: string;
        goals: string;
      };
      scheduleLabels: {
        morning: string;
        lunch: string;
        evening: string;
        fasting: string;
        afterMeal: string;
      };
      supplements: {
        nmn: string;
        vitaminD3: string;
        omega3: string;
        resveratrol: string;
      };
      dosages: {
        nmn: string;
        vitaminD3: string;
        omega3: string;
        resveratrol: string;
      };
    };
    papers: {
      nadPrecursor: {
        title: string;
        journal: string;
        year: string;
        if: string;
      };
      nmnEfficacy: {
        title: string;
        journal: string;
        year: string;
        if: string;
      };
      longevityBenefits: {
        title: string;
        journal: string;
        year: string;
        if: string;
      };
    };
  };
  comparison: {
    title: string;
    subtitle: string;
    questionPrompt: string;
    subtitleQuestion: string;
    subtitleHighlight: string;
    chatgpt: {
      label: string;
      beforeLabel: string;
      response: string;
      issues: {
        noSource: string;
        outdated: string;
        general: string;
      };
    };
    ageWiseAi: {
      label: string;
      afterLabel: string;
      response: string;
      features: {
        latestResearch: string;
        sourcesProvided: string;
        specificGuidance: string;
      };
      references: {
        title: string;
        ref1: string;
        ref2: string;
      };
    };
    differences: {
      title: string;
      realTimeSearch: {
        title: string;
        description: string;
        stats: {
          totalPapers: string;
          year2024: string;
          progressLabel: string;
        };
      };
      reliableSources: {
        title: string;
        description: string;
        stats: {
          totalPapers: string;
          averageIF: string;
        };
      };
      practicalAdvice: {
        title: string;
        description: string;
        schedule: {
          morning: string;
          lunch: string;
          evening: string;
        };
        warning: {
          title: string;
          description: string;
        };
        cost: string;
        safety: string;
        supplements: string;
      };
    };
  };
}

export const translations: Record<Language, Translations> = {
  ko: {
    navbar: {
      home: '홈',
      chat: '채팅',
      latestTrends: '최신 동향',
      supplementTracker: '영양제 트래커',
      startForFree: '무료로 시작하기',
    },
    hero: {
      title: '더이상의 미신은 그만.',
      titleMiddle: '과학적으로',
      titleHighlight: '노화를 방지하세요',
      subtitle: '학술 데이터베이스 기반의 신뢰할 수 있는 노화 정보를 제공합니다.',
    },
    features: {
      title: '모든 노화 연구가',
      titleHighlight: '한 곳에',
      subtitle: '과학적으로 검증된 4가지 핵심 기능으로 건강한 노화를 시작하세요',
      items: {
        aiChat: {
          title: 'AI 노화 상담',
          description: 'GPT-4o 기반 실시간 웹 검색으로 최신 연구 정보를 제공하는 전문 상담',
          badge: '실시간'
        },
        latestTrends: {
          title: '최신 연구 동향',
          description: '노화 관련 최신 연구를 실시간으로 수집하고 분석하여 제공',
          badge: '신규'
        },
        supplementTracker: {
          title: '영양제 관리',
          description: 'David Sinclair 프로토콜 기반 영양제 정보와 개인별 복용 관리',
          badge: '인기'
        },
        agingSimulation: {
          title: '노화 시뮬레이션',
          description: '사진을 업로드하면 AI가 분석하여 미래의 모습을 시뮬레이션으로 보여드립니다',
          badge: 'AI 기반'
        }
      },
      demos: {
        aiChat: {
          title: 'AI Chat + Aging Simulation',
          subtitle: 'GPT-4o + Web Search + Magic API',
          messages: {
            question1: 'NMN과 레스베라트롤 함께 복용해도 될까요?',
            response1: '과학적 검증: 두 성분의 병용은 안전하며 시너지 효과 확인됨',
            details1: '• 미토콘드리아 기능 40% 향상\n• 6개월 임상시험 부작용 없음',
            sources1: '출처: Nature Aging 2024, Cell Metabolism 2024',
            question2: '노화 시뮬레이션도 해볼 수 있나요?',
            response2: '네! 노화 시뮬레이션 가능합니다',
            preview: 'Aging GIF Preview',
            process: '사진 업로드 → AI 분석 → GIF 생성'
          },
          placeholder: 'Ask anything...'
        },
        researchTrends: {
          title: 'Latest Research Trends',
          subtitle: 'Parallel search completed',
          completed: '신뢰할 수 있는 연구 출처',
          refreshButton: 'Refresh',
          items: {
            title1: 'NMN과 NAD+ 경로의 새로운 메커니즘 발견',
            title2: '칼로리 제한과 장수 유전자 발현',
            title3: '레스베라트롤의 새로운 항노화 경로',
            title4: '운동과 세포 노화 억제 메커니즘',
            title5: '장내 미생물과 건강수명 연관성'
          },
          summary: {
            title: 'AI Summary',
            content: 'NMN+레스베라트롤 조합 연구 40% 증가, 미토콘드리아 효과 주목'
          },
          placeholder: 'Search research...'
        },
        supplementTracker: {
          title: 'Supplement & Food Database',
          subtitle: '20+ supplements, 16 foods, Sinclair protocol',
          tabs: {
            supplements: 'Supplements',
            foods: 'Foods',
            myList: 'My List'
          },
          nmn: {
            title: 'NMN',
            category: 'Anti-Aging',
            description: 'NAD+ precursor essential for cellular energy production and DNA repair. Recommended by Dr. David Sinclair.',
            benefits: {
              title: 'Key Benefits',
              items: ['NAD+ increase', 'cellular energy', 'DNA repair', 'anti-aging']
            },
            buttons: {
              viewDetails: 'View Details',
              add: '+'
            }
          },
          otherItems: {
            blueberry: 'Blueberry',
            resveratrol: 'Resveratrol',
            vitaminD3: 'Vitamin D3'
          },
          placeholder: 'Search supplements...'
        }
      },
      problemSolution: {
        problemTitle: '왜 Age-Wise AI가 필요할까요?',
        solutionTitle: 'Age-Wise AI의 해결책',
        problems: {
          unverified: {
            title: '검증되지 않은 정보 범람',
            description: '인터넷에는 노화 방지와 관련된 검증되지 않은 정보가 넘쳐납니다'
          },
          timeWaste: {
            title: '시간과 비용 낭비',
            description: '효과 없는 제품에 투자하는 시간과 비용이 증가하고 있습니다'
          },
          healthRisk: {
            title: '건강 위험 발생',
            description: '잘못된 정보로 인한 부작용과 건강 위험이 증가하고 있습니다'
          }
        },
        solutions: {
          scientific: {
            title: '과학적 검증 정보 제공',
            description: 'PubMed, Nature 등 18개 신뢰할 수 있는 DB에서 검증된 정보만 제공합니다'
          },
          personalized: {
            title: '맞춤형 솔루션',
            description: '개인화된 AI 상담과 영양제 관리로 최적의 항노화 전략을 제시합니다'
          },
          comprehensive: {
            title: '종합적 관리 시스템',
            description: 'AI 상담, 영양제 트래커, 노화 시뮬레이션이 하나의 앱에서 모두 가능합니다'
          }
        }
      }
    },
    benefits: {
      title: '왜 AgingWise를',
      titleHighlight: '선택해야 할까요?',
      subtitle: '과학적 근거와 실시간 정보, 그리고 완전 무료 서비스',
      badge: '믿을 수 있는 정보',
      items: {
        scientific: {
          title: '과학적 신뢰성',
          description: '모든 정보는 PubMed, Nature, Science 등 신뢰할 수 있는 학술 데이터베이스에서 가져옵니다'
        },
        realTime: {
          title: '실시간 업데이트',
          description: '최신 연구 결과를 실시간으로 검색하여 가장 최신의 정보를 제공합니다'
        },
        comprehensive: {
          title: '통합 관리',
          description: 'AI 상담, 연구 동향, 영양제 관리, 노화 시뮬레이션을 한 곳에서 이용하세요'
        },
        free: {
          title: '완전 무료',
          description: '모든 기능을 무료로 이용할 수 있습니다. 숨겨진 비용이나 프리미엄 플랜은 없습니다'
        }
      },
      featured: {
        title: '과학 기반 항노화 정보',
        description: 'Age-Wise AI는 노화 연구에서 가장 신뢰할 수 있는 18개의 학술 데이터베이스와 연결되어 있습니다. 모든 정보는 엄격한 과학적 검증을 거쳐 제공됩니다.',
        features: {
          feature1: 'PubMed, Nature 등 18개 신뢰할 수 있는 학술 DB',
          feature2: '최신 연구 결과 실시간 반영',
          feature3: '모든 정보에 출처 제공'
        }
      },
      stats: {
        title: '사용자들이 경험한 실제 효과',
        timeSaved: {
          value: '96%',
          label: '시간 절약'
        },
        reliability: {
          value: '85%',
          label: '정보 신뢰성 향상'
        },
        healthImprovement: {
          value: '78%',
          label: '건강 지표 개선'
        },
        freeAccess: {
          value: '100%',
          label: '무료 이용 가능'
        }
      },
      testimonial: {
        quote: 'Age-Wise AI는 노화 관련 정보를 찾는 데 혁명을 가져왔습니다. 이제 매번 정보를 검증하느라 시간을 낭비할 필요가 없습니다. 모든 것이 한곳에서 과학적으로 검증됩니다.',
        author: '김미영 교수',
        position: '서울의대 노화연구소'
      }
    },
    howItWorks: {
      title: '간단한',
      titleHighlight: '3단계',
      subtitle: '복잡한 가입 절차 없이 바로 시작하세요',
      badge: '사용 방법',
      steps: {
        step1: {
          title: '1. 질문하기',
          description: '노화에 관해 궁금한 것을 자유롭게 질문하세요'
        },
        step2: {
          title: '2. AI 분석',
          description: '최신 연구 데이터를 실시간으로 검색하여 과학적 답변을 제공합니다'
        },
        step3: {
          title: '3. 실행하기',
          description: '맞춤형 조언을 바탕으로 건강한 노화를 실천하세요'
        }
      },
      demo: {
        title: 'Age-Wise AI 상담',
        chatMessages: {
          question: '노화 방지에 도움되는 영양소와 식품에 대해 알려주세요.',
          searching: '웹 검색 중... ●',
          response: '최신 연구에 따르면, 항산화 효과가 있는 비타민 C, E와 오메가-3 지방산이 노화 방지에 도움이 됩니다. [1]',
          details: '특히 블루베리, 연어, 견과류 등이 포함된 식단이 효과적입니다. [2]',
          sources: {
            title: '출처:',
            source1: '[1] Nature Aging (2024)',
            source2: '[2] PubMed - Journal of Anti-Aging Medicine (2023)'
          }
        },
        placeholder: '질문을 입력하세요...',
        sendButton: '전송',
        sidePanel: {
          title: '신뢰할 수 있는 연구 출처',
          items: {
            title1: 'Nature Aging 2024',
            description1: '항산화 성분과 텔로미어 길이의 상관관계에 대한 최신 연구. 평균 1500명의 참가자를 대상으로 진행된 5년간의 장기 연구...',
            title2: 'Cell 2024',
            description2: '칼로리 제한과 장수 유전자 발현',
            title3: 'Science 2024',
            description3: '레스베라트롤의 새로운 항노화 경로'
          },
          reliability: '신뢰도: 높음',
          citations: '인용 횟수:'
        }
      },
      technicalFeatures: {
        title: '기술적 특징',
        database: {
          title: '학술 데이터베이스 연동',
          description: 'PubMed, Nature 등 18개의 신뢰할 수 있는 학술 DB와 연결되어 최신 논문 데이터를 제공합니다.'
        },
        verification: {
          title: '과학적 검증 시스템',
          description: '모든 정보는 엄격한 과학적 검증을 거치며, 출처를 명확히 제공합니다.'
        },
        personalization: {
          title: '개인화 알고리즘',
          description: '사용자의 건강 상태, 나이, 목표에 맞는 맞춤형 분석과 추천을 제공합니다.'
        }
      },
      cta: {
        button: '지금 시작하기',
        note: '회원가입 필요 없이 바로 이용 가능합니다'
      }
    },
    faq: {
      title: '자주 묻는',
      titleHighlight: '질문들',
      subtitle: '궁금한 점이 있으시면 언제든 문의해 주세요',
      badge: '자주 묻는 질문',
      columns: {
        general: '일반적인 질문',
        service: '서비스 관련 질문'
      },
      items: {
        q1: {
          question: '정말 모든 기능이 무료인가요?',
          answer: '네, 모든 기능을 완전 무료로 이용하실 수 있습니다. 숨겨진 비용이나 프리미엄 요금제는 없습니다.'
        },
        q2: {
          question: '제공되는 정보는 얼마나 신뢰할 수 있나요?',
          answer: 'PubMed, Nature, Science 등 신뢰할 수 있는 학술 데이터베이스에서만 정보를 가져와 과학적 근거가 확실한 정보만 제공합니다.'
        },
        q3: {
          question: '의학적 조언을 받을 수 있나요?',
          answer: '저희는 일반적인 건강 정보를 제공하며, 개인적인 의학적 진단이나 치료 조언은 제공하지 않습니다. 건강 문제는 반드시 전문의와 상담하세요.'
        },
        q4: {
          question: '개인정보는 안전하게 보호되나요?',
          answer: '사용자의 개인정보를 최우선으로 보호하며, 대화 내용은 암호화되어 안전하게 관리됩니다.'
        }
      },
      helpBox: {
        title: '더 궁금한 점이 있으신가요?',
        description: 'AI 전문가에게 직접 질문하세요. 최신 연구 데이터를 바탕으로 한 정확한 정보를 받아보실 수 있습니다. 회원가입이 필요하지 않으며, 별도의 설치나 다운로드 없이 바로 질문할 수 있습니다.',
        button: 'AI에게 질문하기'
      },
      quickLinks: {
        supplementTracker: '영양제 트래커',
        latestTrends: '최신 연구 동향',
        serviceIntro: '서비스 소개'
      }
    },
    finalCta: {
      title: '지금 바로 무료로 시작하세요',
      subtitle: 'Agewise와 함께 젊음을 유지하세요. 계정 생성 없이 바로 이용 가능합니다.',
      buttons: {
        chat: 'Chat',
        latestTrends: 'Latest Trends'
      }
    },
    comparison: {
      title: '응답 비교',
      subtitle: '같은 질문에 대한 ChatGPT와 Age-Wise AI의 답변을 비교해보세요',
      questionPrompt: 'NMN supplementation efficacy in aging prevention',
      subtitleQuestion: '다른 AI와 무엇이',
      subtitleHighlight: '다를까요?',
      chatgpt: {
        label: 'ChatGPT',
        beforeLabel: 'before',
        response: 'NMN은 NAD+ 전구체로 노화 방지에 도움이 될 수 있습니다. 일부 동물 연구에서 긍정적인 결과가 있었지만, 인간에 대한 장기 연구는 아직 제한적입니다. 복용 전 의사와 상담하세요.',
        issues: {
          noSource: '출처 없음',
          outdated: '최신 연구 반영 안됨',
          general: '일반적인 정보 제공'
        }
      },
      ageWiseAi: {
        label: 'Age-Wise AI',
        afterLabel: 'after',
        response: '2024년 Nature Aging 연구에 따르면, NMN은 노인에서 NAD+ 수치를 62% 증가시켰습니다 [1]. 일본 임상시험(2023)에서 12주간 복용 시 근육량 증가와 피로도 감소가 확인되었습니다 [2]. 권장량: 500mg/일, 공복 복용.',
        features: {
          latestResearch: '2024년 최신 연구 반영',
          sourcesProvided: '논문 출처 제공',
          specificGuidance: '구체적 복용법 안내'
        },
        references: {
          title: '참고문헌',
          ref1: '[1] Nature Aging (2024) - Clinical trial results',
          ref2: '[2] Journal of Anti-Aging Medicine (2023)'
        }
      },
      differences: {
        title: 'Age-Wise AI만의 차별점',
        realTimeSearch: {
          title: '실시간 웹 검색',
          description: '답변 중 최신 연구를 실시간으로 검색하여 반영',
          stats: {
            totalPapers: '247개 논문',
            year2024: '31개 2024년',
            progressLabel: '검색 진행률: 75%'
          }
        },
        reliableSources: {
          title: '신뢰할 수 있는 출처',
          description: 'PubMed, Nature 등 18개 검증된 학술 DB만 사용',
          stats: {
            totalPapers: '247개 총 논문',
            averageIF: '38.9 평균 IF'
          }
        },
        practicalAdvice: {
          title: '실용적 조언',
          description: '구체적인 복용량, 시간, 주의사항까지 상세 안내',
          schedule: {
            morning: '아침 7:00 (공복)',
            lunch: '점심 12:00 (식후)',
            evening: '저녁 18:00 (식후)'
          },
          warning: {
            title: '⚠️ 중요 상호작용',
            description: '레스베라트롤 + 와파린: 출혈 위험 ↑'
          },
          cost: '월 비용: $247',
          safety: '안전도: 95%',
          supplements: '총 6개 영양제'
        }
      }
    },
    chat: {
      welcomeMessage: '안녕하세요! 노화에 관한 과학적으로 검증된 정보를 제공하는 AI 어시스턴트입니다. 노화 예방, 건강한 생활습관, 관련 연구 등에 대해 궁금한 것이 있으시면 언제든 물어보세요.',
      placeholder: '노화에 관해 궁금한 것을 물어보세요...',
      lifestyle: '생활습관',
      nutrition: '음식/영양제',
      ageCalculation: '노화 시뮬레이션',
      imageSelected: '이미지가 선택되었습니다. Aging Simulation 버튼을 클릭하세요.',
      startAgingSimulation: 'Aging Simulation 시작',
      lifestyleMessage: '건강한 노화를 위한 생활습관에 대해 알려주세요. 운동, 수면, 스트레스 관리 등을 포함해서 구체적인 방법을 제시해주세요.',
      nutritionMessage: '건강한 노화를 위한 음식과 영양제에 대해 알려주세요. 항산화 음식, 권장 영양제, 복용법 등을 포함해서 설명해주세요.',
      supplementMessage: '이 영양제에 대해 자세히 알려주세요. 효능, 복용법, 주의사항 등을 포함해서 설명해주세요.',
      foodMessage: '이 음식에 대해 자세히 알려주세요. 영양성분, 건강 효능, 조리법, 섭취 시 주의사항 등을 포함해서 설명해주세요.',
      generating: '응답을 생성하고 있습니다...',
    },
    footer: {
      companyName: 'AgingWise',
      description: '과학적으로 검증된 노화 정보를 제공하는 AI 플랫폼입니다. 학술 데이터베이스 기반의 신뢰할 수 있는 정보를 전달합니다.',
      services: '서비스',
      servicesList: {
        aiConsult: 'AI 상담',
        latestResearch: '최신 연구 동향',
        supplementTracker: '영양제 트래커',
        mythFactCheck: '미신 팩트체크',
      },
      information: '정보',
      informationList: {
        about: '서비스 소개',
        terms: '이용약관',
        privacy: '개인정보처리방침',
        contact: '문의하기',
      },
      copyright: '© 2024 AgingWise. 모든 권리 보유.',
      disclaimer: '본 서비스의 정보는 의학적 조언을 대체할 수 없습니다. 건강 관련 결정은 전문의와 상담하시기 바랍니다.',
    },
    pages: {
      latestTrends: {
        title: '최신 노화 연구 동향',
        subtitle: '과학계의 최신 노화 연구 결과와 트렌드를 확인하세요.',
        searching: '여러 데이터베이스에서 병렬 검색 중...',
        searchingDetail: 'PubMed, Nature, Science 등에서 최신 연구를 수집하고 있습니다',
        searchComplete: '검색 완료',
        refreshing: '새로운 연구 검색 중...',
        refreshButton: '새로운 연구 검색',
        noResults: '검색 결과가 없습니다',
        noResultsDescription: '현재 검색 조건에 맞는 연구를 찾지 못했습니다. 새로고침 버튼을 눌러 다시 시도해 보세요.',
        retrySearch: '다시 검색하기',
        readMore: '자세히 보기',
        searchSuffix: '등',
        topicsCount: '개 주제 동시 검색...',
      },
      supplementTracker: {
        title: '영양제 트래커',
        subtitle: '복용 중인 영양제를 체계적으로 관리하고 추적하세요. 과학적 근거에 기반한 맞춤형 영양제 정보도 제공합니다.',
        addNewSupplement: '새 영양제 추가',
        supplementName: '영양제 이름',
        dosage: '용량',
        timePlaceholder: '예: 아침',
        supplementNamePlaceholder: '예: 비타민 D',
        dosagePlaceholder: '예: 1000IU',
        timeLabel: '복용 시간',
        addButton: '영양제 추가',
        todaysSupplements: '오늘의 영양제',
        taken: '복용완료',
        takeNow: '복용하기',
        recommendedSupplements: '과학적 근거 기반 추천 영양제',
        evidenceBasedSupplements: '과학적 근거 기반 영양제',
        personalizedRecommendations: '개인맞춤 추천',
        interactionChecker: '상호작용 체크',
        effectTracking: '효과 추적',
        scientificEvidence: '과학적 근거',
        dosageGuidance: '용량 가이드',
        safetyInformation: '안전 정보',
        researchSources: '연구 출처',
        lastUpdated: '최종 업데이트',
        clinicalTrials: '임상시험',
        bioavailability: '생체이용률',
        sideEffects: '부작용',
        contraindications: '금기사항',
        addToMyList: '내 목록에 추가',
        viewDetails: '자세히 보기',
        trackProgress: '진행상황 추적',
        checkInteractions: '상호작용 확인',
        yourSupplements: '나의 영양제',
        dailyProgress: '일일 진행상황',
        weeklyProgress: '주간 진행상황',
        monthlyProgress: '월간 진행상황',
        consistencyRate: '복용 일관성',
        effectsNoticed: '체감 효과',
        addEffect: '효과 추가',
        selectCategory: '카테고리 선택',
        antiAging: '노화 방지',
        cognitiveHealth: '인지 건강',
        cardiovascularHealth: '심혈관 건강',
        immuneSupport: '면역 지원',
        energyMetabolism: '에너지 대사',
        boneHealth: '뼈 건강',
        skinHealth: '피부 건강',
        sleepQuality: '수면 질',
        stressManagement: '스트레스 관리',
        searchSupplements: '영양제 검색',
        filterByCategory: '카테고리별 필터',
        sortByEvidence: '근거 수준순 정렬',
        expertRecommended: '전문가 추천',
        beginnerFriendly: '초보자용',
        advancedUsers: '고급 사용자용',
        budgetFriendly: '경제적',
        premiumOptions: '프리미엄 옵션',
        noInteractionsFound: '상호작용 없음',
        warningInteractions: '주의 상호작용',
        minorInteractions: '경미한 상호작용',
        majorInteractions: '중대한 상호작용',
        consultPhysician: '의사 상담 권장',
        resveratrol_omega3_interaction: '항응고제 복용 시 출혈 위험이 증가할 수 있습니다.',
        vitaminD: {
          title: '비타민 D',
          description: '뼈 건강과 면역력 향상에 필수적인 영양소입니다. 한국인의 90% 이상이 부족한 상태입니다.',
          dosage: '권장량: 1000-2000IU/일',
          benefits: '뼈 건강, 면역력 향상, 심혈관 건강, 암 예방',
          evidence: '5000+ 연구, 메타분석 다수',
          source: 'PubMed, Cochrane Reviews',
          warnings: ['고용량 섭취 시 칼슘 과다 위험'],
          interactions: []
        },
        omega3: {
          title: '오메가-3',
          description: '뇌 건강과 심혈관 건강에 도움을 주며, 염증 억제 효과가 있습니다.',
          dosage: '권장량: 1000mg/일',
          benefits: '뇌 건강, 심혈관 건강, 염증 억제, 인지기능 향상',
          evidence: '3000+ 연구, FDA 승인',
          source: 'American Heart Association, Harvard Medical',
          warnings: [],
          interactions: ['항응고제와 함께 복용 시 주의']
        },
        magnesium: {
          title: '마그네슘',
          description: '근육과 신경 기능에 중요하며, 스트레스 완화와 수면 질 개선에 도움됩니다.',
          dosage: '권장량: 300-400mg/일',
          benefits: '근육 기능, 신경 건강, 수면 개선, 스트레스 완화',
          evidence: '2000+ 연구, WHO 권장',
          source: 'NIH, Mayo Clinic',
          warnings: [],
          interactions: []
        },
        nmn: {
          title: 'NMN',
          description: 'NAD+ 전구체로 세포 에너지 생산과 DNA 복구에 필수적입니다. David Sinclair 박사 추천.',
          dosage: '권장량: 250-1000mg/일',
          benefits: 'NAD+ 증가, 세포 에너지 향상, DNA 복구, 노화 방지',
          evidence: '100+ 연구, 임상시험 진행 중',
          source: 'Harvard Medical School, Nature',
          warnings: ['고용량 섭취 시 소화불량 가능', '공복 섭취 권장하지 않음'],
          interactions: []
        },
        resveratrol: {
          title: '레스베라트롤',
          description: '강력한 항산화 물질로 시르투인 활성화를 통해 수명 연장 효과가 있습니다.',
          dosage: '권장량: 150-1000mg/일',
          benefits: '시르투인 활성화, 항염, 심혈관 건강, 수명 연장',
          evidence: '500+ 연구, 동물실험 검증',
          source: 'David Sinclair Research, Cell Journal',
          warnings: [],
          interactions: ['항응고제와 상호작용 가능']
        },
        fisetin: {
          title: '피세틴',
          description: '강력한 세놀리틱 화합물로 노화 세포 제거에 탁월한 효과를 보입니다.',
          dosage: '권장량: 100-500mg/일',
          benefits: '세놀리틱 효과, 노화 세포 제거, 뇌 건강, 수명 연장',
          evidence: '50+ 연구, Mayo Clinic 연구',
          source: 'Mayo Clinic, EBioMedicine',
          warnings: [],
          interactions: []
        },
        spermidine: {
          title: '스퍼미딘',
          description: '자가포식 활성화를 통해 세포 정화와 재생을 촉진하는 천연 화합물입니다.',
          dosage: '권장량: 1-5mg/일',
          benefits: '자가포식 활성화, 세포 재생, 심장 건강, 수명 연장',
          evidence: '200+ 연구, 인체 연구 확인',
          source: 'Science Journal, Nature Aging',
          warnings: [],
          interactions: []
        },
        quercetin: {
          title: '퀘르세틴',
          description: '강력한 항염 및 세놀리틱 효과를 가진 플라보노이드입니다.',
          dosage: '권장량: 500-1000mg/일',
          benefits: '항염, 세놀리틱 효과, 면역 강화, 알레르기 완화',
          evidence: '300+ 연구, 메타분석 다수',
          source: 'PubMed, Nutrition Reviews',
          warnings: [],
          interactions: []
        },
        coq10: {
          title: '코엔자임 Q10',
          description: '미토콘드리아 에너지 생산에 필수적인 조효소로 심장 건강에 중요합니다.',
          dosage: '권장량: 100-200mg/일',
          benefits: '심장 건강, 미토콘드리아 기능, 에너지 생산, 항산화',
          evidence: '1000+ 연구, 심장질환 임상시험',
          source: 'American Heart Association, Cochrane',
          warnings: [],
          interactions: []
        },
        curcumin: {
          title: '커큐민',
          description: '강황에서 추출한 강력한 항염 화합물로 다양한 건강 효능을 제공합니다.',
          dosage: '권장량: 500-1000mg/일',
          benefits: '강력한 항염, 관절 건강, 뇌 건강, 암 예방',
          evidence: '5000+ 연구, 다수 임상시험',
          source: 'PubMed, Journal of Medicinal Food',
          warnings: [],
          interactions: []
        },
        taurine: {
          title: '타우린',
          description: '최근 Science 저널에서 수명 연장 효과가 입증된 아미노산입니다.',
          dosage: '권장량: 1000-2000mg/일',
          benefits: '수명 연장, 심혈관 건강, 뇌 기능, 근육 건강',
          evidence: '2023 Science 연구, 임상시험 진행',
          source: 'Science Journal, Columbia University',
          warnings: [],
          interactions: []
        },
        nad_precursors: {
          title: 'NAD+ 전구체',
          description: 'NAD+ 수치를 높여 세포 에너지와 복구 기능을 개선하는 화합물군입니다.',
          dosage: '제품별 상이',
          benefits: 'NAD+ 증가, 세포 에너지, DNA 복구, 노화 방지',
          evidence: '500+ 연구, 다수 임상시험',
          source: 'Harvard, NIH, Nature Reviews',
          warnings: [],
          interactions: []
        },
        senolytic_compounds: {
          title: '세놀리틱 화합물',
          description: '노화 세포를 선택적으로 제거하여 건강한 노화를 촉진하는 물질들입니다.',
          dosage: '화합물별 상이',
          benefits: '노화 세포 제거, 염증 감소, 조직 재생, 건강수명 연장',
          evidence: '200+ 연구, Mayo Clinic 임상시험',
          source: 'Mayo Clinic, Nature, Cell',
          warnings: [],
          interactions: []
        },
        berberine: {
          title: '베르베린',
          description: '혈당 조절과 대사 개선에 효과적인 천연 화합물입니다.',
          dosage: '권장량: 500mg x 2-3회/일',
          benefits: '혈당 조절, 콜레스테롤 감소, 체중 관리, 장 건강',
          evidence: '300+ 연구, 메타분석 확인',
          source: 'PubMed, Diabetes Care Journal',
          warnings: ['소화불량, 변비 가능'],
          interactions: []
        },
        metformin: {
          title: '메트포르민',
          description: '당뇨병 치료제로 수명 연장 효과가 연구되고 있는 약물입니다.',
          dosage: '의사 처방 필요',
          benefits: '혈당 조절, 수명 연장, 암 예방, 인지기능 보호',
          evidence: '1000+ 연구, TAME 임상시험',
          source: 'Nature, Cell Metabolism, NIH',
          warnings: ['의사 처방 필요', '신장 기능 모니터링 필요'],
          interactions: []
        },
        rapamycin: {
          title: '라파마이신',
          description: 'mTOR 억제를 통해 수명 연장 효과를 보이는 면역억제제입니다.',
          dosage: '의사 처방 필요',
          benefits: 'mTOR 억제, 수명 연장, 면역기능 개선, 암 예방',
          evidence: '500+ 연구, 동물실험 검증',
          source: 'Nature, Science, Cell',
          warnings: ['의사 처방 필요', '면역 억제 가능성'],
          interactions: []
        },
        ashwagandha: {
          title: '아슈와간다',
          description: '스트레스 완화와 코르티솔 조절에 도움을 주는 적응성 허브입니다.',
          dosage: '권장량: 300-600mg/일',
          benefits: '스트레스 완화, 코르티솔 감소, 수면 개선, 근육량 증가',
          evidence: '100+ 연구, 임상시험 확인',
          source: 'Journal of Clinical Medicine, PubMed',
          warnings: [],
          interactions: []
        },
        rhodiola: {
          title: '로디올라',
          description: '피로 회복과 스트레스 적응에 도움을 주는 적응성 허브입니다.',
          dosage: '권장량: 200-400mg/일',
          benefits: '피로 회복, 스트레스 적응, 인지기능 향상, 운동 능력 개선',
          evidence: '200+ 연구, 메타분석 확인',
          source: 'Phytomedicine, Alternative Medicine Review',
          warnings: [],
          interactions: []
        },
        prebiotics: {
          title: '프리바이오틱스',
          description: '장내 유익균의 먹이가 되어 장 건강을 개선하는 섬유질입니다.',
          dosage: '권장량: 5-10g/일',
          benefits: '장 건강, 면역력 향상, 염증 감소, 대사 개선',
          evidence: '500+ 연구, 장내 미생물 연구',
          source: 'Nature Reviews Gastroenterology, Gut Journal',
          warnings: [],
          interactions: []
        },
        probiotics: {
          title: '프로바이오틱스',
          description: '장내 미생물 균형을 개선하여 전반적인 건강을 증진시킵니다.',
          dosage: '권장량: 10억-1000억 CFU/일',
          benefits: '장 건강, 면역력 증진, 소화 개선, 정신 건강',
          evidence: '1000+ 연구, WHO 승인',
          source: 'Nature, Gastroenterology, WHO',
          warnings: [],
          interactions: []
        },
        zinc: {
          title: '아연',
          description: '면역 기능과 상처 치유에 필수적인 미네랄입니다.',
          dosage: '권장량: 8-11mg/일',
          benefits: '면역 기능, 상처 치유, 인지기능, 항산화',
          evidence: '2000+ 연구, Cochrane Review',
          source: 'NIH, WHO, Cochrane Database',
          warnings: ['고용량 섭취 시 구리 결핍 위험'],
          interactions: []
        },
        selenium: {
          title: '셀레늄',
          description: '강력한 항산화 작용을 하는 필수 미네랄입니다.',
          dosage: '권장량: 55mcg/일',
          benefits: '항산화, 갑상선 기능, 면역력, 심혈관 건강',
          evidence: '1000+ 연구, 메타분석 확인',
          source: 'American Journal of Clinical Nutrition, PubMed',
          warnings: [],
          interactions: []
        },
        b_complex: {
          title: 'B 복합체',
          description: '에너지 대사와 신경 기능에 필수적인 비타민 B군입니다.',
          dosage: '권장량: 제품별 상이',
          benefits: '에너지 대사, 신경 기능, 인지기능, 스트레스 완화',
          evidence: '3000+ 연구, 다수 메타분석',
          source: 'Nutrients Journal, PubMed',
          warnings: [],
          interactions: []
        },
        alpha_lipoic_acid: {
          title: '알파 리포산',
          description: '강력한 항산화제로 신경 보호와 혈당 조절에 도움됩니다.',
          dosage: '권장량: 300-600mg/일',
          benefits: '항산화, 신경 보호, 혈당 조절, 미토콘드리아 기능',
          evidence: '500+ 연구, 임상시험 확인',
          source: 'Diabetes Care, Free Radical Biology',
          warnings: [],
          interactions: []
        },
        green_tea_extract: {
          title: '녹차 추출물',
          description: 'EGCG 등의 카테킨이 풍부한 강력한 항산화 추출물입니다.',
          dosage: '권장량: 300-400mg/일',
          benefits: '항산화, 체중 관리, 심혈관 건강, 인지기능 보호',
          evidence: '1000+ 연구, 메타분석 다수',
          source: 'Journal of Nutrition, PubMed',
          warnings: ['공복 섭취 시 위장장애 가능'],
          interactions: []
        },
      },
      // Food Database
      foodDatabase: {
        title: '음식 데이터베이스',
        subtitle: '과학적으로 검증된 항노화 음식 정보',
        searchPlaceholder: '음식 이름이나 효능으로 검색...',
        categoryAll: '전체',
        headerTitle: '노화 방지 음식 데이터베이스',
        headerSubtitle: '과학적으로 입증된 항노화 효과가 있는 음식들을 카테고리별로 탐색하고, 각 음식의 영양성분과 건강 효능을 자세히 알아보세요.',
        searchResultsCount: '개의 음식이 발견되었습니다',
        categoryFilter: '카테고리:',
        noResultsTitle: '검색 결과가 없습니다',
        noResultsDescription: '다른 검색어나 카테고리를 시도해보세요.',
        tabs: {
          foodDatabase: '음식 데이터베이스',
          supplementDatabase: '영양제 데이터베이스',
          mySupplements: '내 영양제',
        },
        addToListButton: '내 목록에 추가',
        askAIButton: 'AI에게 자세히 물어보기',
        viewDetailsButton: '자세히 보기',
        closeButton: '닫기',
        detailModal: {
          detailDescription: '상세 설명',
          servingSize: '권장 섭취량',
          researchEvidence: '연구 근거',
          keyBenefits: '주요 효능',
          coreNutrients: '핵심 영양소',
          cookingTips: '조리 및 섭취 팁',
          storage: '보관법',
          warnings: '주의사항',
          bestTime: '최적 섭취 시간',
        },
        categories: {
          all: '전체 보기',
          antioxidant: '항산화',
          omega3: '오메가-3',
          antiInflammatory: '항염',
          brainHealth: '뇌건강',
          cardiovascular: '심혈관',
          gutHealth: '장건강',
          comprehensiveAntiAging: '종합 항노화',
        },
        categoryNames: {
          antioxidant: '항산화',
          omega3: '오메가3',
          antiInflammatory: '항염',
          brainHealth: '뇌건강',
          cardiovascular: '심혈관',
          gutHealth: '장건강',
          antiAging: '항노화',
        },
        foods: {
          blueberries: {
            name: '블루베리',
            description: '안토시아닌과 플라보노이드가 풍부한 슈퍼푸드로, 뇌 건강과 인지 기능 개선에 탁월한 효과가 있습니다.',
            servingSize: '1컵 (150g)',
            benefits: '인지 기능 향상, 항산화 작용, 염증 감소, 심혈관 건강, 시력 보호',
            evidence: '하버드 의대 연구에서 12년간 추적 결과 인지 기능 저하를 2.5년 지연시킴',
            source: 'Harvard T.H. Chan School of Public Health (2012)',
            nutritionHighlights: ['안토시아닌', '비타민 C', '비타민 K', '망간', '식이섬유'],
            bestTimesToEat: '아침 식사나 간식으로',
            storage: '냉장 보관 시 1주일, 냉동 보관 시 8개월',
            cookingTips: ['생으로 먹거나 스무디에 첨가', '요거트와 함께 섭취하면 흡수율 향상'],
            warnings: []
          },
          dark_chocolate: {
            name: '다크 초콜릿',
            description: 'Dark chocolate with 70%+ cacao content, rich in flavonoids and theobromine for cardiovascular health.',
            servingSize: '25-30g (1-2 pieces)',
            benefits: 'Cardiovascular improvement, blood pressure reduction, cognitive enhancement, mood improvement, blood sugar control',
            evidence: 'Copenhagen study confirmed dark chocolate consumption reduced stroke risk by 17%',
            source: 'Heart (2017), Cochrane Reviews, Harvard Health',
            nutritionHighlights: ['Flavanols', 'Theobromine', 'Magnesium', 'Iron', 'Antioxidants'],
            bestTimesToEat: 'Afternoon or before exercise',
            storage: 'Cool, dry place at 18-20°C',
            cookingTips: ['Choose 70%+ cacao content', 'Consume 25-30g daily in moderation'],
            warnings: ['Contains caffeine - avoid evening consumption', 'High calorie content']
          },
          green_tea: {
            name: '녹차',
            description: 'Traditional tea rich in catechins, especially EGCG, with powerful antioxidant and metabolism-boosting effects.',
            servingSize: '1 cup (240ml)',
            benefits: 'Weight management, cardiovascular health, cancer prevention, brain function enhancement, anti-inflammatory',
            evidence: 'Japanese Ohsaki study of 40,000 people over 11 years showed 12% mortality reduction with green tea',
            source: 'JAMA (2006), American Journal of Clinical Nutrition',
            nutritionHighlights: ['EGCG', 'Catechins', 'L-theanine', 'Vitamin C', 'Fluoride'],
            bestTimesToEat: '30 minutes to 1 hour after meals',
            storage: 'Refrigerate in airtight container',
            cookingTips: ['Steep with 70-80°C water for 2-3 minutes', '3-4 cups daily is optimal'],
            warnings: ['May cause stomach irritation on empty stomach', 'Can inhibit iron absorption']
          },
          salmon: {
            name: '연어',
            description: 'Representative brain-healthy fish rich in omega-3 fatty acids and high-quality protein.',
            servingSize: '100-150g (palm-sized portion)',
            benefits: 'Brain health, cardiovascular disease prevention, inflammation reduction, depression relief, vision protection',
            evidence: 'Framingham study showed twice-weekly fish consumption reduced dementia risk by 41%',
            source: 'Archives of Neurology (2005), American Heart Association',
            nutritionHighlights: ['DHA', 'EPA', 'Vitamin D', 'Selenium', 'High-quality protein'],
            bestTimesToEat: 'Lunch or dinner',
            storage: 'Cook same day when fresh, freeze up to 3 months',
            cookingTips: ['Grill or steam without adding oil', 'Avoid deep frying'],
            warnings: ['Mercury content concern during pregnancy', 'Parasite risk with raw consumption']
          },
          walnuts: {
            name: '호두',
            description: 'Nuts richest in plant-based omega-3 ALA, excellent for brain and heart health.',
            servingSize: '30g (about 7-8 pieces)',
            benefits: 'Brain function improvement, cardiovascular health, cholesterol reduction, weight management, inflammation reduction',
            evidence: 'UCLA study showed walnut consumption improved cognitive function scores by 13%',
            source: 'Journal of Nutrition Health & Aging (2014), New England Journal',
            nutritionHighlights: ['Alpha-linolenic acid (ALA)', 'Vitamin E', 'Magnesium', 'Polyphenols', 'Fiber'],
            bestTimesToEat: 'As snack or with breakfast',
            storage: 'Refrigerate in airtight container',
            cookingTips: ['Best consumed raw', 'Add to salads or yogurt'],
            warnings: ['Nut allergy caution', 'High calorie - consume in moderation']
          },
          turmeric: {
            name: '강황',
            description: 'Spice rich in curcumin, providing powerful anti-inflammatory and antioxidant effects as natural medicine.',
            servingSize: '1 teaspoon (3g)',
            benefits: 'Powerful anti-inflammatory, joint health, brain function protection, digestive improvement, immune enhancement',
            evidence: 'Rheumatoid arthritis study confirmed curcumin as effective as anti-inflammatory drugs',
            source: 'Phytotherapy Research (2012), Journal of Medicinal Food',
            nutritionHighlights: ['Curcumin', 'Turmerone', 'Manganese', 'Iron', 'Vitamin B6'],
            bestTimesToEat: 'Add to cooking or as turmeric latte',
            storage: 'Store sealed in cool, dark place',
            cookingTips: ['Absorption increases 2000% when combined with pepper', 'Consume with fats'],
            warnings: ['Caution for gallstone patients', 'Consult if taking blood thinners']
          },
          ginger: {
            name: '생강',
            description: '진저롤과 쇼가올이 풍부한 뿌리채소로, 강력한 항염 및 소화 촉진 효과를 제공합니다.',
            servingSize: '1티스푼 (5g) 또는 생강차 1컵',
            benefits: '소화 개선, 멀미 방지, 항염 효과, 면역력 증진, 통증 완화',
            evidence: '임산부 1,278명 대상 연구에서 생강이 입덧을 38% 감소시킴 확인',
            source: 'Obstetrics & Gynecology (2005), Cochrane Reviews',
            nutritionHighlights: ['진저롤', '쇼가올', '진게론', '비타민 C', '마그네슘'],
            bestTimesToEat: '식사 30분 전 또는 멀미 시',
            storage: '신선한 것은 냉장보관 3주, 건조 분말은 서늘한 곳',
            cookingTips: ['생강차로 우려서 섭취', '요리 마지막에 첨가하여 영양소 보존'],
            warnings: ['과다 섭취 시 속쓰림 가능', '혈액희석제 복용 시 주의']
          },
          avocado: {
            name: '아보카도',
            description: '건강한 단일불포화지방과 20가지 비타민·미네랄이 풍부한 영양 밀도 최고의 과일입니다.',
            servingSize: '1/2개 (100g)',
            benefits: '심혈관 건강, 콜레스테롤 감소, 영양소 흡수 증진, 포만감 지속, 피부 건강',
            evidence: 'Penn State 연구에서 아보카도 섭취가 나쁜 콜레스테롤 22% 감소시킴',
            source: 'Journal of the American Heart Association (2015), Nutrients',
            nutritionHighlights: ['올레산', '비타민 K', '엽산', '비타민 E', '칼륨'],
            bestTimesToEat: '아침 식사나 샐러드와 함께',
            storage: '실온에서 익힌 후 냉장 보관 3-4일',
            cookingTips: ['토스트에 올리거나 샐러드 드레싱으로', '레몬즙 첨가로 산화 방지'],
            warnings: ['고칼로리(160kcal/100g)', '라텍스 알레르기 있는 경우 주의']
          },
          spinach: {
            name: '시금치',
            description: '루테인과 제아잔틴이 풍부한 녹색 잎채소로, 뇌 건강과 시력 보호에 탁월한 슈퍼푸드입니다.',
            servingSize: '1컵 (생것 30g, 조리된 것 180g)',
            benefits: '뇌 인지기능 향상, 황반변성 예방, 혈압 조절, 뼈 건강, 항산화 작용',
            evidence: 'Rush 대학 연구에서 잎채소 섭취가 뇌 나이를 11년 젊게 유지함을 확인',
            source: 'Neurology (2018), American Journal of Clinical Nutrition',
            nutritionHighlights: ['루테인', '제아잔틴', '비타민 K', '엽산', '마그네슘'],
            bestTimesToEat: '점심 또는 저녁 식사와 함께',
            storage: '냉장 보관 3-5일, 데친 것은 냉동 가능',
            cookingTips: ['살짝 데쳐서 옥살산 제거', '비타민 C가 풍부한 식품과 함께 섭취'],
            warnings: ['신장결석 환자는 옥살산 함량 주의', '혈액희석제 복용 시 상담']
          },
          oats: {
            name: '귀리',
            description: '베타글루칸이 풍부한 통곡물로, FDA가 심장 건강 개선 효과를 공식 인정한 기능성 식품입니다.',
            servingSize: '1/2컵 건조 귀리 (40g)',
            benefits: '콜레스테롤 감소, 혈당 조절, 체중 관리, 장 건강, 심혈관 질환 예방',
            evidence: '64개 연구 메타분석에서 베타글루칸이 총 콜레스테롤 5% 감소 확인',
            source: 'American Journal of Clinical Nutrition (2014), FDA Health Claim',
            nutritionHighlights: ['베타글루칸', '아베나트라마이드', '단백질', '마그네슘', '아연'],
            bestTimesToEat: '아침 식사로 최적',
            storage: '밀폐용기에 실온 보관 18개월',
            cookingTips: ['오버나이트 오트로 준비', '과일과 견과류 첨가로 영양 강화'],
            warnings: ['글루텐 민감성 있는 경우 글루텐프리 제품 선택']
          },
          olive_oil: {
            name: '엑스트라버진 올리브오일',
            description: '지중해식 식단의 핵심으로, 올레산과 폴리페놀이 풍부한 세계 최고의 건강 오일입니다.',
            servingSize: '1큰술 (15ml)',
            benefits: '심혈관 질환 예방, 뇌 건강, 항염 효과, 암 예방, 인지기능 보호',
            evidence: 'PREDIMED 연구에서 지중해식 식단이 심혈관 질환 30% 감소시킴',
            source: 'New England Journal of Medicine (2013), Nutrients',
            nutritionHighlights: ['올레산', '폴리페놀', '비타민 E', '스쿠알렌', '올레오칸탈'],
            bestTimesToEat: '샐러드 드레싱이나 조리 후 첨가',
            storage: '어둡고 서늘한 곳에 밀폐 보관 2년',
            cookingTips: ['고온 조리 피하고 마지막에 첨가', '엑스트라버진 등급 선택 필수'],
            warnings: ['고칼로리(120kcal/15ml)', '산화되기 쉬우므로 보관법 준수']
          },
          kimchi: {
            name: '김치',
            description: '락토바실러스 등 유익균이 풍부한 한국 전통 발효식품으로, 세계적으로 인정받는 프로바이오틱 푸드입니다.',
            servingSize: '1/2컵 (75g)',
            benefits: '장내 미생물 개선, 면역력 강화, 체중 감소, 혈당 조절, 항염 효과',
            evidence: '서울대 연구에서 김치 섭취가 체지방률 2.6% 감소시킴을 확인',
            source: 'Nutrition Research (2013), Journal of Medicinal Food',
            nutritionHighlights: ['락토바실러스', '베타카로틴', '비타민 C', '캡사이신', '알리신'],
            bestTimesToEat: '매 식사와 함께 반찬으로',
            storage: '냉장 보관 시 3-6개월',
            cookingTips: ['생으로 섭취가 가장 좋음', '찌개나 볶음밥에 활용'],
            warnings: ['나트륨 함량 높음(300mg/75g)', '위산 과다 시 적량 섭취']
          },
          greek_yogurt: {
            name: '그릭 요거트',
            description: '일반 요거트보다 2배 농축된 고단백 발효유제품으로, 프로바이오틱스와 필수 아미노산이 풍부합니다.',
            servingSize: '1컵 (170g)',
            benefits: '근육량 증가, 장 건강, 포만감 지속, 뼈 건강, 혈압 조절',
            evidence: '하버드 연구에서 요거트 섭취가 제2형 당뇨병 위험 18% 감소시킴',
            source: 'BMC Medicine (2014), American Journal of Clinical Nutrition',
            nutritionHighlights: ['고단백질(20g)', '프로바이오틱스', '칼슘', '비타민 B12', '리보플라빈'],
            bestTimesToEat: '아침 식사나 운동 후 간식',
            storage: '냉장 보관 1-2주',
            cookingTips: ['과일과 견과류 첨가', '드레싱이나 소스 베이스로 활용'],
            warnings: ['유당불내증 주의', '첨가당 없는 플레인 타입 선택']
          },
          pomegranate: {
            name: '석류',
            description: '엘라그산과 안토시아닌이 풍부한 항산화 슈퍼프루트로, 심혈관과 뇌 건강에 탁월한 효과를 보입니다.',
            servingSize: '1/2개 (100g) 또는 석류주스 240ml',
            benefits: '심혈관 건강, 기억력 향상, 전립선 건강, 항염 효과, 혈압 감소',
            evidence: 'UCLA 연구에서 석류주스가 기억력 테스트 점수를 28% 향상시킴',
            source: 'Evidence-Based Complementary Medicine (2013), Journal of Nutrition',
            nutritionHighlights: ['엘라그산', '안토시아닌', '퓨니칼라진', '비타민 C', '칼륨'],
            bestTimesToEat: '간식이나 주스로 아침에',
            storage: '냉장 보관 2개월, 씨는 냉동 가능',
            cookingTips: ['씨까지 함께 섭취', '요거트나 샐러드 토핑으로'],
            warnings: ['혈압약 복용 시 상호작용 주의', '과당 함량 높음']
          },
          sweet_potato: {
            name: '고구마',
            description: '베타카로틴이 당근의 2배 함유된 영양가 높은 뿌리채소로, 혈당 지수가 낮아 당뇨 환자에게도 좋습니다.',
            servingSize: '1개 중간 크기 (130g)',
            benefits: '시력 보호, 면역력 강화, 혈당 조절, 장 건강, 항산화 작용',
            evidence: '루이지애나 대학 연구에서 고구마가 혈당 스파이크를 54% 감소시킴',
            source: 'Diabetes Care (2011), Food & Function',
            nutritionHighlights: ['베타카로틴', '안토시아닌', '클로로겐산', '식이섬유', '칼륨'],
            bestTimesToEat: '점심이나 저녁 탄수화물 대용',
            storage: '서늘하고 어두운 곳에 2-3주',
            cookingTips: ['껍질째 구워서 영양소 최대화', '찜이나 삶기로 조리'],
            warnings: ['신장 결석 환자는 옥살산 함량 주의', '당분 함량 고려하여 적량 섭취']
          }
        },
      },
      // My Supplements section
      mySupplements: {
        addSupplement: '영양제 추가',
        mySupplementsList: '내 영양제',
        interactions: '상호작용',
        safeStatus: '안전함',
        warningNeeded: '주의 필요',
        noInteractionsMessage: '영양제를 추가하면\n상호작용을 확인할 수 있습니다',
        currentTaking: '복용 중',
        moreItems: '개 더',
        addSupplementForm: {
          supplementName: '영양제 이름',
          takingTime: '복용 시간',
          notes: '메모 (선택사항)',
          addButton: '영양제 추가',
          namePlaceholder: '예: 비타민 D, 오메가-3...',
          timePlaceholder: '예: 아침, 점심, 저녁...',
          notesPlaceholder: '복용량, 목적 등...',
        },
        progress: {
          todayProgress: "오늘의 진행률",
          taken: '복용',
          notTaken: '복용하기',
        },
        general: {
          morning: '아침',
          afternoon: '점심',
          evening: '저녁',
          memo: '메모',
          dosage: '복용량',
          purpose: '목적',
          example: '예',
        },
        itemCount: '개',
        deleteButton: '삭제',
        takenButton: '복용완료',
        notTakenButton: '복용하기',
        warningDescription: '상호작용이 발견되지 않았습니다',
        takingTips: {
          title: '복용 팁',
          tip1: '일정한 시간에 복용하여 체내 농도를 유지하세요',
          tip2: '음식과 함께 복용하면 흡수율이 향상될 수 있습니다',
          tip3: '다른 영양제와의 상호작용을 확인하세요',
          tip4: '효과가 나타나기까지 보통 2-4주 정도 소요됩니다',
        },
        consultWarning: '개인차가 있을 수 있으니 전문가와 상담 후 복용하세요.',
      },
      common: {
        search: '검색',
        filter: '필터',
        category: '카테고리',
        all: '전체',
        close: '닫기',
        add: '추가',
        delete: '삭제',
        edit: '수정',
        save: '저장',
        cancel: '취소',
        loading: '로딩 중...',
        error: '오류가 발생했습니다',
        retry: '다시 시도',
        noResults: '검색 결과가 없습니다',
        showMore: '더 보기',
        showLess: '접기',
      },
      notFound: {
        title: '페이지를 찾을 수 없습니다',
        message: '요청하신 페이지가 존재하지 않습니다.',
        backHome: '홈으로 돌아가기',
      },
    },
    researchProgress: {
      searchStatus: {
        papersSearched: '127개 논문 검색 완료',
        papersCompleted: '검색 완료',
        searching: '검색 중...',
        waiting: '대기 중...',
        totalPapers: '총 논문',
        yearFilter: '2024년',
        progressLabel: '검색 진행률: 75%',
        averageIF: '평균 IF',
      },
      databases: {
        natureAging: 'Nature Aging',
        science: 'Science',
        pubmed: 'PubMed',
      },
      interactions: {
        title: '중요 상호작용',
        warningExample: '레스베라트롤 + 와파린: 출혈 위험 ↑',
        totalSupplements: '총 6개 영양제',
        monthlyCost: '월 비용: $247',
        safetyScore: '안전도: 95%',
      },
      badges: {
        realtime: '실시간',
        new: '신규',
        popular: '인기',
      },
      webSearch: {
        title: '실시간 웹 검색',
        description: '답변 중 최신 연구를 실시간으로 검색하여 반영',
      },
      reliableSources: {
        title: '신뢰할 수 있는 출처',
        description: 'PubMed, Nature 등 18개 검증된 학술 DB만 사용',
      },
      practicalAdvice: {
        title: '실용적 조언',
        description: '구체적인 복용량, 시간, 주의사항까지 상세 안내',
        personalInfo: {
          age: '나이: 35-45',
          weight: '체중: 70kg',
          goals: '목표: 장수',
        },
        scheduleLabels: {
          morning: '아침 7:00',
          lunch: '점심 12:00',
          evening: '저녁 18:00',
          fasting: '(공복)',
          afterMeal: '(식후)',
        },
        supplements: {
          nmn: 'NMN',
          vitaminD3: '비타민 D3',
          omega3: '오메가-3',
          resveratrol: '레스베라트롤',
        },
        dosages: {
          nmn: '500mg',
          vitaminD3: '4000IU',
          omega3: '2000mg',
          resveratrol: '500mg',
        },
      },
      papers: {
        nadPrecursor: {
          title: 'NAD+ precursor supplementation in aging...',
          journal: 'Nature Aging',
          year: '2024',
          if: 'IF: 28.5',
        },
        nmnEfficacy: {
          title: 'Clinical efficacy of NMN supplementation...',
          journal: 'Cell Metabolism',
          year: '2024',
          if: 'IF: 31.2',
        },
        longevityBenefits: {
          title: 'Longevity benefits of nicotinamide...',
          journal: 'Science',
          year: '2024',
          if: 'IF: 56.9',
        },
      },
    },
  },
    en: {
    navbar: {
      home: 'Home',
      chat: 'Chat',
      latestTrends: 'Latest Trends',
      supplementTracker: 'Supplement Tracker',
      startForFree: 'Start for Free',
    },
    hero: {
      title: 'No more aging myths.',
      titleMiddle: 'Search faster,',
      titleHighlight: 'Age slower',
      subtitle: 'We provide reliable aging information based on academic databases.',
    },
    features: {
      title: 'All aging research',
      titleHighlight: 'in one place',
      subtitle: 'Start healthy aging with 4 scientifically verified core features',
      items: {
        aiChat: {
          title: 'AI Aging Consultation',
          description: 'Professional consultation providing latest research information with GPT-4o based real-time web search',
          badge: 'Real-time'
        },
        latestTrends: {
          title: 'Latest Research Trends',
          description: 'Real-time collection and analysis of latest aging-related research',
          badge: 'New'
        },
        supplementTracker: {
          title: 'Supplement Management',
          description: 'David Sinclair protocol-based supplement information and personalized intake management',
          badge: 'Popular'
        },
        agingSimulation: {
          title: 'Aging Simulation',
          description: 'Upload your photo and AI will analyze and show you how you might look in the future',
          badge: 'AI-powered'
        }
      },
      demos: {
        aiChat: {
          title: 'AI Chat + Aging Simulation',
          subtitle: 'GPT-4o + Web Search + Magic API',
          messages: {
            question1: 'Can I take NMN and resveratrol together?',
            response1: 'Scientific verification: Combined use of both components is safe with confirmed synergy',
            details1: '• 40% improvement in mitochondrial function\n• No side effects in 6-month clinical trial',
            sources1: 'Sources: Nature Aging 2024, Cell Metabolism 2024',
            question2: 'Can I also try aging simulation?',
            response2: 'Yes! Aging simulation is available',
            preview: 'Aging GIF Preview',
            process: 'Photo upload → AI analysis → GIF generation'
          },
          placeholder: 'Ask anything...'
        },
        researchTrends: {
          title: 'Latest Research Trends',
          subtitle: 'Parallel search completed',
          completed: 'Reliable research sources',
          refreshButton: 'Refresh',
          items: {
            title1: 'Discovery of new NMN and NAD+ pathway mechanisms',
            title2: 'Caloric restriction and longevity gene expression',
            title3: 'New anti-aging pathways of resveratrol',
            title4: 'Exercise and cellular aging suppression mechanisms',
            title5: 'Gut microbiome and healthspan connections'
          },
          summary: {
            title: 'AI Summary',
            content: 'NMN+resveratrol combination research increased 40%, mitochondrial effects noted'
          },
          placeholder: 'Search research...'
        },
        supplementTracker: {
          title: 'Supplement & Food Database',
          subtitle: '20+ supplements, 16 foods, Sinclair protocol',
          tabs: {
            supplements: 'Supplements',
            foods: 'Foods',
            myList: 'My List'
          },
          nmn: {
            title: 'NMN',
            category: 'Anti-Aging',
            description: 'NAD+ precursor essential for cellular energy production and DNA repair. Recommended by Dr. David Sinclair.',
            benefits: {
              title: 'Key Benefits',
              items: ['NAD+ increase', 'cellular energy', 'DNA repair', 'anti-aging']
            },
            buttons: {
              viewDetails: 'View Details',
              add: '+'
            }
          },
          otherItems: {
            blueberry: 'Blueberry',
            resveratrol: 'Resveratrol',
            vitaminD3: 'Vitamin D3'
          },
          placeholder: 'Search supplements...'
        }
      },
      problemSolution: {
        problemTitle: 'Why do we need Age-Wise AI?',
        solutionTitle: 'Age-Wise AI Solutions',
        problems: {
          unverified: {
            title: 'Flood of unverified information',
            description: 'The internet is flooded with unverified information related to aging prevention'
          },
          timeWaste: {
            title: 'Time and money waste',
            description: 'Time and money spent on ineffective products is increasing'
          },
          healthRisk: {
            title: 'Health risks',
            description: 'Side effects and health risks from misinformation are increasing'
          }
        },
        solutions: {
          scientific: {
            title: 'Scientifically verified information',
            description: 'We provide only verified information from 18 trusted databases like PubMed and Nature'
          },
          personalized: {
            title: 'Personalized solutions',
            description: 'We provide optimal anti-aging strategies through personalized AI consultation and supplement management'
          },
          comprehensive: {
            title: 'Comprehensive management system',
            description: 'AI consultation, supplement tracker, and aging simulation are all available in one app'
          }
        }
      }
    },
    benefits: {
      title: 'Why choose',
      titleHighlight: 'AgingWise?',
      subtitle: 'Scientific evidence, real-time information, and completely free service',
      badge: 'Trusted Information',
      items: {
        scientific: {
          title: 'Scientific Reliability',
          description: 'All information comes from trusted academic databases like PubMed, Nature, and Science'
        },
        realTime: {
          title: 'Real-time Updates',
          description: 'We search for the latest research results in real-time to provide the most current information'
        },
        comprehensive: {
          title: 'Integrated Management',
          description: 'Use AI consultation, research trends, supplement management, and aging simulation all in one place'
        },
        free: {
          title: 'Completely Free',
          description: 'All features are available for free. No hidden costs or premium plans'
        }
      },
      featured: {
        title: 'Science-based Anti-aging Information',
        description: 'Age-Wise AI is connected to 18 of the most trusted academic databases in aging research. All information is provided after rigorous scientific verification.',
        features: {
          feature1: '18 trusted academic databases including PubMed and Nature',
          feature2: 'Real-time reflection of latest research results',
          feature3: 'Sources provided for all information'
        }
      },
      stats: {
        title: 'Real effects experienced by users',
        timeSaved: {
          value: '96%',
          label: 'Time saved'
        },
        reliability: {
          value: '85%',
          label: 'Information reliability improvement'
        },
        healthImprovement: {
          value: '78%',
          label: 'Health indicator improvement'
        },
        freeAccess: {
          value: '100%',
          label: 'Free access available'
        }
      },
      testimonial: {
        quote: 'Age-Wise AI has revolutionized finding aging-related information. I no longer need to waste time verifying information every time. Everything is scientifically verified in one place.',
        author: 'Prof. Kim Mi-young',
        position: 'Seoul National University Aging Research Institute'
      }
    },
    howItWorks: {
      title: 'Simple',
      titleHighlight: '3 Steps',
      subtitle: 'Start right away without complicated registration',
      badge: 'How to Use',
      steps: {
        step1: {
          title: '1. Ask Questions',
          description: 'Feel free to ask anything about aging'
        },
        step2: {
          title: '2. AI Analysis',
          description: 'We search the latest research data in real-time to provide scientific answers'
        },
        step3: {
          title: '3. Take Action',
          description: 'Practice healthy aging based on personalized advice'
        }
      },
      demo: {
        title: 'Age-Wise AI Consultation',
        chatMessages: {
          question: 'Please tell me about nutrients and foods that help prevent aging.',
          searching: 'Web searching... ●',
          response: 'According to the latest research, vitamins C and E with antioxidant effects and omega-3 fatty acids help prevent aging. [1]',
          details: 'Diets including blueberries, salmon, and nuts are particularly effective. [2]',
          sources: {
            title: 'Sources:',
            source1: '[1] Nature Aging (2024)',
            source2: '[2] PubMed - Journal of Anti-Aging Medicine (2023)'
          }
        },
        placeholder: 'Enter your question...',
        sendButton: 'Send',
        sidePanel: {
          title: 'Reliable research sources',
          items: {
            title1: 'Nature Aging 2024',
            description1: 'Latest research on the correlation between antioxidant components and telomere length. Long-term 5-year study with an average of 1500 participants...',
            title2: 'Cell 2024',
            description2: 'Caloric restriction and longevity gene expression',
            title3: 'Science 2024',
            description3: 'New anti-aging pathways of resveratrol'
          },
          reliability: 'Reliability: High',
          citations: 'Citations:'
        }
      },
      technicalFeatures: {
        title: 'Technical Features',
        database: {
          title: 'Academic Database Integration',
          description: 'Connected to 18 trusted academic databases including PubMed and Nature to provide latest research data.'
        },
        verification: {
          title: 'Scientific Verification System',
          description: 'All information undergoes rigorous scientific verification and provides clear sources.'
        },
        personalization: {
          title: 'Personalization Algorithm',
          description: 'Provides personalized analysis and recommendations tailored to user health status, age, and goals.'
        }
      },
      cta: {
        button: 'Start Now',
        note: 'Available immediately without registration'
      }
    },
    faq: {
      title: 'Frequently Asked',
      titleHighlight: 'Questions',
      subtitle: 'If you have any questions, please feel free to contact us',
      badge: 'Frequently Asked Questions',
      columns: {
        general: 'General Questions',
        service: 'Service-related Questions'
      },
      items: {
        q1: {
          question: 'Are all features really free?',
          answer: 'Yes, you can use all features completely free. There are no hidden costs or premium plans.'
        },
        q2: {
          question: 'How reliable is the information provided?',
          answer: 'We only source information from trusted academic databases like PubMed, Nature, and Science to provide only scientifically proven information.'
        },
        q3: {
          question: 'Can I get medical advice?',
          answer: 'We provide general health information and do not provide personal medical diagnosis or treatment advice. For health issues, please consult with a medical professional.'
        },
        q4: {
          question: 'Is my personal information protected?',
          answer: 'We prioritize the protection of user personal information, and conversations are encrypted and securely managed.'
        }
      },
      helpBox: {
        title: 'Have more questions?',
        description: 'Ask AI experts directly. You can receive accurate information based on the latest research data. No registration required, and you can ask questions immediately without any installation or download.',
        button: 'Ask AI'
      },
      quickLinks: {
        supplementTracker: 'Supplement Tracker',
        latestTrends: 'Latest Research Trends',
        serviceIntro: 'Service Introduction'
      }
    },
    finalCta: {
      title: 'Start for Free Right Now',
      subtitle: 'Maintain your youth with Agewise. Available immediately without account creation.',
      buttons: {
        chat: 'Chat',
        latestTrends: 'Latest Trends'
      }
    },
    comparison: {
      title: 'Response Comparison',
      subtitle: 'Compare ChatGPT and Age-Wise AI responses to the same question',
      questionPrompt: 'NMN supplementation efficacy in aging prevention',
      subtitleQuestion: 'What makes it',
      subtitleHighlight: 'different from other AI?',
      chatgpt: {
        label: 'ChatGPT',
        beforeLabel: 'before',
        response: 'NMN is a NAD+ precursor that may help prevent aging. Some animal studies have shown positive results, but long-term studies in humans are still limited. Consult a doctor before taking.',
        issues: {
          noSource: 'No sources',
          outdated: 'Latest research not reflected',
          general: 'General information provided'
        }
      },
      ageWiseAi: {
        label: 'Age-Wise AI',
        afterLabel: 'after',
        response: 'According to 2024 Nature Aging research, NMN increased NAD+ levels by 62% in elderly people [1]. Japanese clinical trial (2023) confirmed muscle mass increase and fatigue reduction after 12 weeks of use [2]. Recommended dose: 500mg/day, on empty stomach.',
        features: {
          latestResearch: '2024 latest research reflected',
          sourcesProvided: 'Research sources provided',
          specificGuidance: 'Specific dosage guidance provided'
        },
        references: {
          title: 'References',
          ref1: '[1] Nature Aging (2024) - Clinical trial results',
          ref2: '[2] Journal of Anti-Aging Medicine (2023)'
        }
      },
      differences: {
        title: 'Age-Wise AI Unique Advantages',
        realTimeSearch: {
          title: 'Real-time Web Search',
          description: 'Search and reflect latest research in real-time during responses',
          stats: {
            totalPapers: '247 papers',
            year2024: '31 from 2024',
            progressLabel: 'Search progress: 75%'
          }
        },
        reliableSources: {
          title: 'Reliable Sources',
          description: 'Uses only 18 verified academic databases including PubMed and Nature',
          stats: {
            totalPapers: '247 total papers',
            averageIF: '38.9 average IF'
          }
        },
        practicalAdvice: {
          title: 'Practical Advice',
          description: 'Detailed guidance including specific dosages, timing, and precautions',
          schedule: {
            morning: 'Morning 7:00 (fasting)',
            lunch: 'Lunch 12:00 (after meal)',
            evening: 'Evening 18:00 (after meal)'
          },
          warning: {
            title: '⚠️ Important Interactions',
            description: 'Resveratrol + Warfarin: Increased bleeding risk'
          },
          cost: 'Monthly cost: $247',
          safety: 'Safety: 95%',
          supplements: 'Total 6 supplements'
        }
      }
    },
    chat: {
      welcomeMessage: 'Hello! I am an AI assistant that provides scientifically verified information about aging. Feel free to ask me anything about aging.',
      placeholder: 'Ask me anything about aging...',
      lifestyle: 'Lifestyle',
      nutrition: 'Food/Supplements',
      ageCalculation: 'Aging Simulation',
      imageSelected: 'Image selected. Please click the Aging Simulation button.',
      startAgingSimulation: 'Start Aging Simulation',
      lifestyleMessage: 'Please tell me about healthy lifestyle habits for aging. Include specific methods covering exercise, sleep, stress management, etc.',
      nutritionMessage: 'Please tell me about foods and supplements for healthy aging. Include antioxidant foods, recommended supplements, how to take them, etc.',
      supplementMessage: 'Please tell me more about this supplement in detail. Include its effects, how to take it, precautions, etc.',
      foodMessage: 'Please tell me more about this food in detail. Include its nutritional components, health benefits, cooking methods, precautions when consuming, etc.',
      generating: 'Generating response...',
    },
    footer: {
      companyName: 'AgingWise',
      description: 'An AI platform that provides scientifically verified aging information. We deliver only reliable information based on academic databases.',
      services: 'Services',
      servicesList: {
        aiConsult: 'AI Consultation',
        latestResearch: 'Latest Research Trends',
        supplementTracker: 'Supplement Tracker',
        mythFactCheck: 'Myth Fact Check',
      },
      information: 'Information',
      informationList: {
        about: 'About Service',
        terms: 'Terms of Service',
        privacy: 'Privacy Policy',
        contact: 'Contact Us',
      },
      copyright: '© 2024 AgingWise. All rights reserved.',
      disclaimer: 'The information in this service cannot replace medical advice. Please consult with a healthcare professional for health-related decisions.',
    },
    pages: {
      latestTrends: {
        title: 'Latest Aging Research Trends',
        subtitle: 'Stay updated with the latest aging research results and trends from the scientific community.',
        searching: 'Parallel searching from multiple databases...',
        searchingDetail: 'Collecting latest research from PubMed, Nature, Science, and more',
        searchComplete: 'Search completed',
        refreshing: 'Searching for new research...',
        refreshButton: 'Search new research',
        noResults: 'No search results found',
        noResultsDescription: 'No research matching the current search criteria was found. Please try again by clicking the refresh button.',
        retrySearch: 'Search again',
        readMore: 'Read more',
        searchSuffix: ' and more',
        topicsCount: ' topics searching simultaneously...',
      },
      supplementTracker: {
        title: 'Supplement Tracker',
        subtitle: 'Systematically manage and track your supplements. We also provide personalized supplement information based on scientific evidence.',
        addNewSupplement: 'Add New Supplement',
        supplementName: 'Supplement Name',
        dosage: 'Dosage',
        timePlaceholder: 'e.g., Morning',
        supplementNamePlaceholder: 'e.g., Vitamin D',
        dosagePlaceholder: 'e.g., 1000IU',
        timeLabel: 'Time to Take',
        addButton: 'Add Supplement',
        todaysSupplements: "Today's Supplements",
        taken: 'Taken',
        takeNow: 'Take Now',
        recommendedSupplements: 'Science-Based Recommended Supplements',
        evidenceBasedSupplements: 'Evidence-Based Supplements',
        personalizedRecommendations: 'Personalized Recommendations',
        interactionChecker: 'Interaction Checker',
        effectTracking: 'Effect Tracking',
        scientificEvidence: 'Scientific Evidence',
        dosageGuidance: 'Dosage Guidance',
        safetyInformation: 'Safety Information',
        researchSources: 'Research Sources',
        lastUpdated: 'Last Updated',
        clinicalTrials: 'Clinical Trials',
        bioavailability: 'Bioavailability',
        sideEffects: 'Side Effects',
        contraindications: 'Contraindications',
        addToMyList: 'Add to My List',
        viewDetails: 'View Details',
        trackProgress: 'Track Progress',
        checkInteractions: 'Check Interactions',
        yourSupplements: 'Your Supplements',
        dailyProgress: 'Daily Progress',
        weeklyProgress: 'Weekly Progress',
        monthlyProgress: 'Monthly Progress',
        consistencyRate: 'Consistency Rate',
        effectsNoticed: 'Effects Noticed',
        addEffect: 'Add Effect',
        selectCategory: 'Select Category',
        antiAging: 'Anti-Aging',
        cognitiveHealth: 'Cognitive Health',
        cardiovascularHealth: 'Cardiovascular Health',
        immuneSupport: 'Immune Support',
        energyMetabolism: 'Energy Metabolism',
        boneHealth: 'Bone Health',
        skinHealth: 'Skin Health',
        sleepQuality: 'Sleep Quality',
        stressManagement: 'Stress Management',
        searchSupplements: 'Search Supplements',
        filterByCategory: 'Filter by Category',
        sortByEvidence: 'Sort by Evidence',
        expertRecommended: 'Expert Recommended',
        beginnerFriendly: 'Beginner Friendly',
        advancedUsers: 'Advanced Users',
        budgetFriendly: 'Budget Friendly',
        premiumOptions: 'Premium Options',
        noInteractionsFound: 'No Interactions Found',
        warningInteractions: 'Warning Interactions',
        minorInteractions: 'Minor Interactions',
        majorInteractions: 'Major Interactions',
        consultPhysician: 'Consult Physician',
        resveratrol_omega3_interaction: 'Risk of bleeding may increase when taking anticoagulants.',
        vitaminD: {
          title: 'Vitamin D',
          description: 'Essential nutrient for bone health and immune system enhancement. Over 90% of people are deficient.',
          dosage: 'Recommended: 1000-2000IU/day',
          benefits: 'Bone health, immune enhancement, cardiovascular health, cancer prevention',
          evidence: '5000+ studies, multiple meta-analyses',
          source: 'PubMed, Cochrane Reviews',
          warnings: ['High dose may cause excess calcium risk'],
          interactions: []
        },
        omega3: {
          title: 'Omega-3',
          description: 'Helps brain and cardiovascular health, and has anti-inflammatory effects.',
          dosage: 'Recommended: 1000mg/day',
          benefits: 'Brain health, cardiovascular health, anti-inflammatory, cognitive enhancement',
          evidence: '3000+ studies, FDA approved',
          source: 'American Heart Association, Harvard Medical',
          warnings: [],
          interactions: ['Caution with anticoagulants']
        },
        magnesium: {
          title: 'Magnesium',
          description: 'Important for muscle and nerve function, helps with stress relief and sleep quality improvement.',
          dosage: 'Recommended: 300-400mg/day',
          benefits: 'Muscle function, nerve health, sleep improvement, stress relief',
          evidence: '2000+ studies, WHO recommended',
          source: 'NIH, Mayo Clinic',
          warnings: [],
          interactions: []
        },
        nmn: {
          title: 'NMN',
          description: 'NAD+ precursor essential for cellular energy production and DNA repair. Recommended by Dr. David Sinclair.',
          dosage: 'Recommended: 250-1000mg/day',
          benefits: 'NAD+ increase, cellular energy enhancement, DNA repair, anti-aging',
          evidence: '100+ studies, ongoing clinical trials',
          source: 'Harvard Medical School, Nature',
          warnings: ['High dose may cause digestive issues', 'Not recommended on empty stomach'],
          interactions: []
        },
        resveratrol: {
          title: 'Resveratrol',
          description: 'Powerful antioxidant with lifespan extension effects through sirtuin activation.',
          dosage: 'Recommended: 150-1000mg/day',
          benefits: 'Sirtuin activation, anti-inflammatory, cardiovascular health, lifespan extension',
          evidence: '500+ studies, animal studies verified',
          source: 'David Sinclair Research, Cell Journal',
          warnings: [],
          interactions: ['May interact with anticoagulants']
        },
        fisetin: {
          title: 'Fisetin',
          description: 'Powerful senolytic compound with excellent effects on senescent cell removal.',
          dosage: 'Recommended: 100-500mg/day',
          benefits: 'Senolytic effects, senescent cell removal, brain health, lifespan extension',
          evidence: '50+ studies, Mayo Clinic research',
          source: 'Mayo Clinic, EBioMedicine',
          warnings: [],
          interactions: []
        },
        spermidine: {
          title: 'Spermidine',
          description: 'Natural compound that promotes cellular cleansing and regeneration through autophagy activation.',
          dosage: 'Recommended: 1-5mg/day',
          benefits: 'Autophagy activation, cellular regeneration, heart health, lifespan extension',
          evidence: '200+ studies, human studies confirmed',
          source: 'Science Journal, Nature Aging',
          warnings: [],
          interactions: []
        },
        quercetin: {
          title: 'Quercetin',
          description: 'Flavonoid with powerful anti-inflammatory and senolytic effects.',
          dosage: 'Recommended: 500-1000mg/day',
          benefits: 'Anti-inflammatory, senolytic effects, immune enhancement, allergy relief',
          evidence: '300+ studies, multiple meta-analyses',
          source: 'PubMed, Nutrition Reviews',
          warnings: [],
          interactions: []
        },
        coq10: {
          title: 'Coenzyme Q10',
          description: 'Essential coenzyme for mitochondrial energy production, important for heart health.',
          dosage: 'Recommended: 100-200mg/day',
          benefits: 'Heart health, mitochondrial function, energy production, antioxidant',
          evidence: '1000+ studies, heart disease clinical trials',
          source: 'American Heart Association, Cochrane',
          warnings: [],
          interactions: []
        },
        curcumin: {
          title: 'Curcumin',
          description: 'Powerful anti-inflammatory compound extracted from turmeric with various health benefits.',
          dosage: 'Recommended: 500-1000mg/day',
          benefits: 'Powerful anti-inflammatory, joint health, brain health, cancer prevention',
          evidence: '5000+ studies, multiple clinical trials',
          source: 'PubMed, Journal of Medicinal Food',
          warnings: [],
          interactions: []
        },
        taurine: {
          title: 'Taurine',
          description: 'Amino acid with proven lifespan extension effects recently published in Science journal.',
          dosage: 'Recommended: 1000-2000mg/day',
          benefits: 'Lifespan extension, cardiovascular health, brain function, muscle health',
          evidence: '2023 Science study, ongoing clinical trials',
          source: 'Science Journal, Columbia University',
          warnings: [],
          interactions: []
        },
        nad_precursors: {
          title: 'NAD+ Precursors',
          description: 'Group of compounds that improve cellular energy and repair functions by increasing NAD+ levels.',
          dosage: 'Varies by product',
          benefits: 'NAD+ increase, cellular energy, DNA repair, anti-aging',
          evidence: '500+ studies, multiple clinical trials',
          source: 'Harvard, NIH, Nature Reviews',
          warnings: [],
          interactions: []
        },
        senolytic_compounds: {
          title: 'Senolytic Compounds',
          description: 'Substances that selectively remove senescent cells to promote healthy aging.',
          dosage: 'Varies by compound',
          benefits: 'Senescent cell removal, inflammation reduction, tissue regeneration, healthspan extension',
          evidence: '200+ studies, Mayo Clinic clinical trials',
          source: 'Mayo Clinic, Nature, Cell',
          warnings: [],
          interactions: []
        },
        berberine: {
          title: 'Berberine',
          description: 'Natural compound effective for blood sugar control and metabolic improvement.',
          dosage: 'Recommended: 500mg x 2-3 times/day',
          benefits: 'Blood sugar control, cholesterol reduction, weight management, gut health',
          evidence: '300+ studies, meta-analysis confirmed',
          source: 'PubMed, Diabetes Care Journal',
          warnings: ['May cause digestive issues, constipation'],
          interactions: []
        },
        metformin: {
          title: 'Metformin',
          description: 'Diabetes medication being studied for lifespan extension effects.',
          dosage: 'Prescription required',
          benefits: 'Blood sugar control, lifespan extension, cancer prevention, cognitive protection',
          evidence: '1000+ studies, TAME clinical trial',
          source: 'Nature, Cell Metabolism, NIH',
          warnings: ['Prescription required', 'Kidney function monitoring needed'],
          interactions: []
        },
        rapamycin: {
          title: 'Rapamycin',
          description: 'Immunosuppressive drug showing lifespan extension through mTOR inhibition.',
          dosage: 'Prescription required',
          benefits: 'mTOR inhibition, lifespan extension, immune function improvement, cancer prevention',
          evidence: '500+ studies, animal studies verified',
          source: 'Nature, Science, Cell',
          warnings: ['Prescription required', 'Possible immune suppression'],
          interactions: []
        },
        ashwagandha: {
          title: 'Ashwagandha',
          description: 'Adaptogenic herb that helps with stress relief and cortisol regulation.',
          dosage: 'Recommended: 300-600mg/day',
          benefits: 'Stress relief, cortisol reduction, sleep improvement, muscle mass increase',
          evidence: '100+ studies, clinical trials confirmed',
          source: 'Journal of Clinical Medicine, PubMed',
          warnings: [],
          interactions: []
        },
        rhodiola: {
          title: 'Rhodiola',
          description: 'Adaptogenic herb that helps with fatigue recovery and stress adaptation.',
          dosage: 'Recommended: 200-400mg/day',
          benefits: 'Fatigue recovery, stress adaptation, cognitive enhancement, exercise performance',
          evidence: '200+ studies, meta-analysis confirmed',
          source: 'Phytomedicine, Alternative Medicine Review',
          warnings: [],
          interactions: []
        },
        prebiotics: {
          title: 'Prebiotics',
          description: 'Fibers that serve as food for beneficial gut bacteria, improving gut health.',
          dosage: 'Recommended: 5-10g/day',
          benefits: 'Gut health, immune enhancement, inflammation reduction, metabolic improvement',
          evidence: '500+ studies, gut microbiome research',
          source: 'Nature Reviews Gastroenterology, Gut Journal',
          warnings: [],
          interactions: []
        },
        probiotics: {
          title: 'Probiotics',
          description: 'Live microorganisms that improve gut microbiome balance and overall health.',
          dosage: 'Recommended: 1-100 billion CFU/day',
          benefits: 'Gut health, immune enhancement, digestion improvement, mental health',
          evidence: '1000+ studies, WHO approved',
          source: 'Nature, Gastroenterology, WHO',
          warnings: [],
          interactions: []
        },
        zinc: {
          title: 'Zinc',
          description: 'Essential mineral crucial for immune function and wound healing.',
          dosage: 'Recommended: 8-11mg/day',
          benefits: 'Immune function, wound healing, cognitive function, antioxidant',
          evidence: '2000+ studies, Cochrane Review',
          source: 'NIH, WHO, Cochrane Database',
          warnings: ['High dose may cause copper deficiency risk'],
          interactions: []
        },
        selenium: {
          title: 'Selenium',
          description: 'Essential mineral with powerful antioxidant properties.',
          dosage: 'Recommended: 55mcg/day',
          benefits: 'Antioxidant, thyroid function, immune system, cardiovascular health',
          evidence: '1000+ studies, meta-analysis confirmed',
          source: 'American Journal of Clinical Nutrition, PubMed',
          warnings: [],
          interactions: []
        },
        b_complex: {
          title: 'B Complex',
          description: 'Group of B vitamins essential for energy metabolism and nerve function.',
          dosage: 'Recommended: Varies by product',
          benefits: 'Energy metabolism, nerve function, cognitive function, stress relief',
          evidence: '3000+ studies, multiple meta-analyses',
          source: 'Nutrients Journal, PubMed',
          warnings: [],
          interactions: []
        },
        alpha_lipoic_acid: {
          title: 'Alpha Lipoic Acid',
          description: 'Powerful antioxidant that helps with neuroprotection and blood sugar control.',
          dosage: 'Recommended: 300-600mg/day',
          benefits: 'Antioxidant, neuroprotection, blood sugar control, mitochondrial function',
          evidence: '500+ studies, clinical trials confirmed',
          source: 'Diabetes Care, Free Radical Biology',
          warnings: [],
          interactions: []
        },
        green_tea_extract: {
          title: 'Green Tea Extract',
          description: 'Powerful antioxidant extract rich in catechins like EGCG.',
          dosage: 'Recommended: 300-400mg/day',
          benefits: 'Antioxidant, weight management, cardiovascular health, cognitive protection',
          evidence: '1000+ studies, multiple meta-analyses',
          source: 'Journal of Nutrition, PubMed',
          warnings: ['May cause stomach upset on empty stomach'],
          interactions: []
        },
      },
      // Food Database
      foodDatabase: {
        title: 'Food Database',
        subtitle: 'Scientifically verified anti-aging food information',
        searchPlaceholder: 'Search by food name or benefits...',
        categoryAll: 'All',
        headerTitle: 'Anti-Aging Food Database',
        headerSubtitle: 'Explore scientifically proven anti-aging foods by category and learn about the nutritional components and health benefits of each food.',
        searchResultsCount: ' foods found',
        categoryFilter: 'Category:',
        noResultsTitle: 'No results found',
        noResultsDescription: 'Try different search terms or categories.',
        tabs: {
          foodDatabase: 'Food Database',
          supplementDatabase: 'Supplement Database',
          mySupplements: 'My Supplements',
        },
        addToListButton: 'Add to My List',
        askAIButton: 'Ask AI for Details',
        viewDetailsButton: 'View Details',
        closeButton: 'Close',
        detailModal: {
          detailDescription: 'Detailed Description',
          servingSize: 'Recommended Serving',
          researchEvidence: 'Research Evidence',
          keyBenefits: 'Key Benefits',
          coreNutrients: 'Core Nutrients',
          cookingTips: 'Cooking & Consumption Tips',
          storage: 'Storage',
          warnings: 'Warnings',
          bestTime: 'Best Time to Consume',
        },
        categories: {
          all: 'View All',
          antioxidant: 'Antioxidant',
          omega3: 'Omega-3',
          antiInflammatory: 'Anti-inflammatory',
          brainHealth: 'Brain Health',
          cardiovascular: 'Cardiovascular',
          gutHealth: 'Gut Health',
          comprehensiveAntiAging: 'Comprehensive Anti-aging',
        },
        categoryNames: {
          antioxidant: 'Antioxidant',
          omega3: 'Omega-3',
          antiInflammatory: 'Anti-inflammatory',
          brainHealth: 'Brain Health',
          cardiovascular: 'Cardiovascular',
          gutHealth: 'Gut Health',
          antiAging: 'Anti-aging',
        },
        foods: {
          blueberries: {
            name: 'Blueberry',
            description: 'A superfood rich in anthocyanins and flavonoids, excellent for brain health and cognitive function.',
            servingSize: '1 cup (150g)',
            benefits: 'Improves cognitive function, antioxidant action, reduces inflammation, cardiovascular health, vision protection',
            evidence: 'Harvard Medical School study: 12-year follow-up showed 2.5-year delay in cognitive decline',
            source: 'Harvard T.H. Chan School of Public Health (2012)',
            nutritionHighlights: ['Anthocyanins', 'Vitamin C', 'Vitamin K', 'Manganese', 'Dietary fiber'],
            bestTimesToEat: 'As breakfast or snack',
            storage: '1 week refrigerated, 8 months frozen',
            cookingTips: ['Eat raw or add to smoothies', 'Combine with yogurt for better absorption'],
            warnings: []
          },
          dark_chocolate: {
            name: 'Dark Chocolate',
            description: 'Dark chocolate with 70%+ cacao content, rich in flavonoids and theobromine for cardiovascular health.',
            servingSize: '25-30g (1-2 pieces)',
            benefits: 'Cardiovascular improvement, blood pressure reduction, cognitive enhancement, mood improvement, blood sugar control',
            evidence: 'Copenhagen study confirmed dark chocolate consumption reduced stroke risk by 17%',
            source: 'Heart (2017), Cochrane Reviews, Harvard Health',
            nutritionHighlights: ['Flavanols', 'Theobromine', 'Magnesium', 'Iron', 'Antioxidants'],
            bestTimesToEat: 'Afternoon or before exercise',
            storage: 'Cool, dry place at 18-20°C',
            cookingTips: ['Choose 70%+ cacao content', 'Consume 25-30g daily in moderation'],
            warnings: ['Contains caffeine - avoid evening consumption', 'High calorie content']
          },
          green_tea: {
            name: 'Green Tea',
            description: 'Traditional tea rich in catechins, especially EGCG, with powerful antioxidant and metabolism-boosting effects.',
            servingSize: '1 cup (240ml)',
            benefits: 'Weight management, cardiovascular health, cancer prevention, brain function enhancement, anti-inflammatory',
            evidence: 'Japanese Ohsaki study of 40,000 people over 11 years showed 12% mortality reduction with green tea',
            source: 'JAMA (2006), American Journal of Clinical Nutrition',
            nutritionHighlights: ['EGCG', 'Catechins', 'L-theanine', 'Vitamin C', 'Fluoride'],
            bestTimesToEat: '30 minutes to 1 hour after meals',
            storage: 'Refrigerate in airtight container',
            cookingTips: ['Steep with 70-80°C water for 2-3 minutes', '3-4 cups daily is optimal'],
            warnings: ['May cause stomach irritation on empty stomach', 'Can inhibit iron absorption']
          },
          salmon: {
            name: 'Salmon',
            description: 'Representative brain-healthy fish rich in omega-3 fatty acids and high-quality protein.',
            servingSize: '100-150g (palm-sized portion)',
            benefits: 'Brain health, cardiovascular disease prevention, inflammation reduction, depression relief, vision protection',
            evidence: 'Framingham study showed twice-weekly fish consumption reduced dementia risk by 41%',
            source: 'Archives of Neurology (2005), American Heart Association',
            nutritionHighlights: ['DHA', 'EPA', 'Vitamin D', 'Selenium', 'High-quality protein'],
            bestTimesToEat: 'Lunch or dinner',
            storage: 'Cook same day when fresh, freeze up to 3 months',
            cookingTips: ['Grill or steam without adding oil', 'Avoid deep frying'],
            warnings: ['Mercury content concern during pregnancy', 'Parasite risk with raw consumption']
          },
          walnuts: {
            name: 'Walnuts',
            description: 'Nuts richest in plant-based omega-3 ALA, excellent for brain and heart health.',
            servingSize: '30g (about 7-8 pieces)',
            benefits: 'Brain function improvement, cardiovascular health, cholesterol reduction, weight management, inflammation reduction',
            evidence: 'UCLA study showed walnut consumption improved cognitive function scores by 13%',
            source: 'Journal of Nutrition Health & Aging (2014), New England Journal',
            nutritionHighlights: ['Alpha-linolenic acid (ALA)', 'Vitamin E', 'Magnesium', 'Polyphenols', 'Fiber'],
            bestTimesToEat: 'As snack or with breakfast',
            storage: 'Refrigerate in airtight container',
            cookingTips: ['Best consumed raw', 'Add to salads or yogurt'],
            warnings: ['Nut allergy caution', 'High calorie - consume in moderation']
          },
          turmeric: {
            name: 'Turmeric',
            description: 'Spice rich in curcumin, providing powerful anti-inflammatory and antioxidant effects as natural medicine.',
            servingSize: '1 teaspoon (3g)',
            benefits: 'Powerful anti-inflammatory, joint health, brain function protection, digestive improvement, immune enhancement',
            evidence: 'Rheumatoid arthritis study confirmed curcumin as effective as anti-inflammatory drugs',
            source: 'Phytotherapy Research (2012), Journal of Medicinal Food',
            nutritionHighlights: ['Curcumin', 'Turmerone', 'Manganese', 'Iron', 'Vitamin B6'],
            bestTimesToEat: 'Add to cooking or as turmeric latte',
            storage: 'Store sealed in cool, dark place',
            cookingTips: ['Absorption increases 2000% when combined with pepper', 'Consume with fats'],
            warnings: ['Caution for gallstone patients', 'Consult if taking blood thinners']
          },
          ginger: {
            name: 'Ginger',
            description: 'Root vegetable rich in gingerol and shogaol, providing powerful anti-inflammatory and digestive benefits.',
            servingSize: '1 teaspoon (5g) or 1 cup ginger tea',
            benefits: 'Digestive improvement, nausea prevention, anti-inflammatory effects, immune support, pain relief',
            evidence: 'Study of 1,278 pregnant women confirmed ginger reduced morning sickness by 38%',
            source: 'Obstetrics & Gynecology (2005), Cochrane Reviews',
            nutritionHighlights: ['Gingerol', 'Shogaol', 'Zingerone', 'Vitamin C', 'Magnesium'],
            bestTimesToEat: '30 minutes before meals or when nauseous',
            storage: 'Fresh: refrigerate 3 weeks, dried powder: cool place',
            cookingTips: ['Brew as tea or add to cooking', 'Add at end of cooking to preserve nutrients'],
            warnings: ['May cause heartburn if consumed excessively', 'Caution with blood thinners']
          },
          avocado: {
            name: 'Avocado',
            description: 'Nutrient-dense fruit rich in healthy monounsaturated fats and 20 vitamins and minerals.',
            servingSize: '1/2 avocado (100g)',
            benefits: 'Heart health, cholesterol reduction, enhanced nutrient absorption, sustained satiety, skin health',
            evidence: 'Penn State study showed avocado consumption reduced bad cholesterol by 22%',
            source: 'Journal of the American Heart Association (2015), Nutrients',
            nutritionHighlights: ['Oleic acid', 'Vitamin K', 'Folate', 'Vitamin E', 'Potassium'],
            bestTimesToEat: 'With breakfast or salads',
            storage: 'Ripen at room temperature, then refrigerate 3-4 days',
            cookingTips: ['Eat on toast or as salad dressing', 'Add lemon juice to prevent oxidation'],
            warnings: ['High calorie (160kcal/100g)', 'Caution if latex allergy']
          },
          spinach: {
            name: 'Spinach',
            description: 'Dark leafy green rich in lutein and zeaxanthin, a superfood excellent for brain health and vision protection.',
            servingSize: '1 cup (raw 30g, cooked 180g)',
            benefits: 'Brain cognitive enhancement, macular degeneration prevention, blood pressure control, bone health, antioxidant action',
            evidence: 'Rush University study confirmed leafy greens keep brain 11 years younger',
            source: 'Neurology (2018), American Journal of Clinical Nutrition',
            nutritionHighlights: ['Lutein', 'Zeaxanthin', 'Vitamin K', 'Folate', 'Magnesium'],
            bestTimesToEat: 'With lunch or dinner',
            storage: 'Refrigerate 3-5 days, blanched can be frozen',
            cookingTips: ['Lightly steam to reduce oxalates', 'Consume with vitamin C-rich foods'],
            warnings: ['Kidney stone patients should mind oxalate content', 'Consult if taking blood thinners']
          },
          oats: {
            name: 'Oats',
            description: 'Heart-healthy whole grain rich in beta-glucan',
            servingSize: '1/2 cup (40g)',
            benefits: 'Heart health, blood sugar control, cholesterol reduction, satiety',
            evidence: '1000+ studies, FDA approved health claim',
            source: 'American Journal of Clinical Nutrition, FDA',
            nutritionHighlights: ['Beta-glucan', 'Dietary fiber', 'Protein', 'Magnesium'],
            bestTimesToEat: 'For breakfast',
            storage: 'Store in airtight container at room temperature',
            cookingTips: ['Prepare as overnight oats', 'Eat with fruits'],
            warnings: []
          },
          olive_oil: {
            name: 'Olive Oil',
            description: 'Mediterranean diet staple rich in healthy monounsaturated fats',
            servingSize: '1 tablespoon (15ml)',
            benefits: 'Heart health, anti-inflammatory, brain health, antioxidant',
            evidence: '2000+ studies, Mediterranean diet research',
            source: 'New England Journal of Medicine, Mediterranean Diet Studies',
            nutritionHighlights: ['Oleic acid', 'Vitamin E', 'Polyphenols', 'Antioxidants'],
            bestTimesToEat: 'For cooking or salad dressing',
            storage: 'Store in cool, dark place',
            cookingTips: ['Use cold as dressing', 'Choose extra virgin olive oil'],
            warnings: ['High in calories']
          },
          kimchi: {
            name: 'Kimchi',
            description: 'Traditional Korean fermented food rich in probiotics',
            servingSize: '1/2 cup (75g)',
            benefits: 'Gut health, immune support, anti-inflammatory, weight management',
            evidence: '200+ studies, Korea Food Research Institute',
            source: 'Journal of Medicinal Food, Food Science & Nutrition',
            nutritionHighlights: ['Lactobacillus', 'Vitamin C', 'Vitamin K', 'Dietary fiber'],
            bestTimesToEat: 'With meals',
            storage: 'Refrigerate',
            cookingTips: ['Eat as is or use in stews'],
            warnings: ['High sodium content']
          },
          greek_yogurt: {
            name: 'Greek Yogurt',
            description: 'Strained fermented dairy product rich in protein and probiotics',
            servingSize: '1 cup (170g)',
            benefits: 'Gut health, muscle health, bone health, weight management',
            evidence: '500+ studies, multiple clinical trials',
            source: 'American Journal of Clinical Nutrition, Nutrients',
            nutritionHighlights: ['High protein', 'Probiotics', 'Calcium', 'Vitamin B12'],
            bestTimesToEat: 'For breakfast or snacks',
            storage: 'Refrigerate',
            cookingTips: ['Eat with fruits', 'Use as smoothie base'],
            warnings: ['Caution for lactose intolerance']
          },
          pomegranate: {
            name: 'Pomegranate',
            description: 'Superfruit rich in powerful antioxidant ellagic acid',
            servingSize: '1/2 pomegranate (100g)',
            benefits: 'Heart health, anti-inflammatory, antioxidant, memory improvement',
            evidence: '300+ studies, UCLA research',
            source: 'Journal of Nutritional Biochemistry, UCLA Studies',
            nutritionHighlights: ['Ellagic acid', 'Anthocyanins', 'Vitamin C', 'Polyphenols'],
            bestTimesToEat: 'As snack or juice',
            storage: 'Refrigerate for up to 2 months',
            cookingTips: ['Eat seeds included', 'Use as salad topping'],
            warnings: []
          },
          sweet_potato: {
            name: 'Sweet Potato',
            description: 'Nutritious root vegetable rich in beta-carotene',
            servingSize: '1 medium (130g)',
            benefits: 'Vision protection, immune support, blood sugar control, antioxidant',
            evidence: '400+ studies, Harvard research',
            source: 'Harvard T.H. Chan School, Nutrition Reviews',
            nutritionHighlights: ['Beta-carotene', 'Vitamin A', 'Dietary fiber', 'Potassium'],
            bestTimesToEat: 'For lunch or dinner',
            storage: 'Store in cool, dark place',
            cookingTips: ['Bake with skin on', 'Steam or roast'],
            warnings: []
          }
        },
      },
      // My Supplements section
      mySupplements: {
        addSupplement: 'Add Supplement',
        mySupplementsList: 'My Supplements',
        interactions: 'Interactions',
        safeStatus: 'Safe',
        warningNeeded: 'Warning Needed',
        noInteractionsMessage: 'Add supplements to\ncheck interactions',
        currentTaking: 'Currently Taking',
        moreItems: ' more',
        addSupplementForm: {
          supplementName: 'Supplement Name',
          takingTime: 'Taking Time',
          notes: 'Notes (Optional)',
          addButton: 'Add Supplement',
          namePlaceholder: 'e.g., Vitamin D, Omega-3...',
          timePlaceholder: 'e.g., Morning, Afternoon, Evening...',
          notesPlaceholder: 'Dosage, purpose, etc...',
        },
        progress: {
          todayProgress: "Today's Progress",
          taken: 'Taken',
          notTaken: 'Take Now',
        },
        general: {
          morning: 'Morning',
          afternoon: 'Afternoon',
          evening: 'Evening',
          memo: 'Memo',
          dosage: 'Dosage',
          purpose: 'Purpose',
          example: 'e.g.',
        },
        itemCount: ' items',
        deleteButton: 'Delete',
        takenButton: 'Taken',
        notTakenButton: 'Take Now',
        warningDescription: 'No interactions found',
        takingTips: {
          title: 'Taking Tips',
          tip1: 'Take at consistent times to maintain blood levels',
          tip2: 'Taking with food may improve absorption',
          tip3: 'Check for interactions with other supplements',
          tip4: 'Effects typically appear after 2-4 weeks',
        },
        consultWarning: 'Individual differences may exist, please consult with an expert before taking.',
      },
      common: {
        search: 'Search',
        filter: 'Filter',
        category: 'Category',
        all: 'All',
        close: 'Close',
        add: 'Add',
        delete: 'Delete',
        edit: 'Edit',
        save: 'Save',
        cancel: 'Cancel',
        loading: 'Loading...',
        error: 'An error occurred',
        retry: 'Retry',
        noResults: 'No results found',
        showMore: 'Show More',
        showLess: 'Show Less',
      },
      notFound: {
        title: 'Page Not Found',
        message: 'The page you requested does not exist.',
        backHome: 'Back to Home',
      },
    },
    researchProgress: {
      searchStatus: {
        papersSearched: '127 papers searched',
        papersCompleted: 'Search completed',
        searching: 'Searching...',
        waiting: 'Waiting...',
        totalPapers: 'Total papers',
        yearFilter: '2024',
        progressLabel: 'Search progress: 75%',
        averageIF: 'Average IF',
      },
      databases: {
        natureAging: 'Nature Aging',
        science: 'Science',
        pubmed: 'PubMed',
      },
      interactions: {
        title: 'Important Interactions',
        warningExample: 'Resveratrol + Warfarin: Increased bleeding risk ↑',
        totalSupplements: 'Total 6 supplements',
        monthlyCost: 'Monthly cost: $247',
        safetyScore: 'Safety: 95%',
      },
      badges: {
        realtime: 'Real-time',
        new: 'New',
        popular: 'Popular',
      },
      webSearch: {
        title: 'Real-time Web Search',
        description: 'Search and reflect latest research in real-time during responses',
      },
      reliableSources: {
        title: 'Reliable Sources',
        description: 'Uses only 18 verified academic databases including PubMed and Nature',
      },
      practicalAdvice: {
        title: 'Practical Advice',
        description: 'Detailed guidance including specific dosages, timing, and precautions',
        personalInfo: {
          age: 'Age: 35-45',
          weight: 'Weight: 70kg',
          goals: 'Goals: Longevity',
        },
        scheduleLabels: {
          morning: 'Morning 7:00',
          lunch: 'Lunch 12:00',
          evening: 'Evening 18:00',
          fasting: '(fasting)',
          afterMeal: '(after meal)',
        },
        supplements: {
          nmn: 'NMN',
          vitaminD3: 'Vitamin D3',
          omega3: 'Omega-3',
          resveratrol: 'Resveratrol',
        },
        dosages: {
          nmn: '500mg',
          vitaminD3: '4000IU',
          omega3: '2000mg',
          resveratrol: '500mg',
        },
      },
      papers: {
        nadPrecursor: {
          title: 'NAD+ precursor supplementation in aging...',
          journal: 'Nature Aging',
          year: '2024',
          if: 'IF: 28.5',
        },
        nmnEfficacy: {
          title: 'Clinical efficacy of NMN supplementation...',
          journal: 'Cell Metabolism',
          year: '2024',
          if: 'IF: 31.2',
        },
        longevityBenefits: {
          title: 'Longevity benefits of nicotinamide...',
          journal: 'Science',
          year: '2024',
          if: 'IF: 56.9',
        },
      },
    },
  },
}; 