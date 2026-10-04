import type { Lead } from "./types";
import type { ApprovalRequest } from "../approvals/types";

export const leadsMock: Lead[] = [
  {
    id: 1,
    number: "№0002916",
    title: "Материал для кровли здания",
    object: "ЖК Hayat Astoria",
    city: "Алматы",
    status: "draft",
    categories: [
      "Металлопрокат",
      "Черепица",
      "Расходные материалы",
    ],
    createdAt: "2026-08-04T17:25:00",
    responsible: {
      id: 1,
      name: "Алпыспаев А.Е.",
      position: "Специалист по закупкам",
    },
    stats: {
      responses: 0,
      views: 4,
    },
    participants: {
      legalEntities: 2,
      individuals: 1,
    },
    budget: 2_450_000,
    winnerSelection: "В назначенный день",
    approvals: [],
    items: [
      {
        id: 1,
        name: "Металлочерепица",
        quantity: 850,
        unit: "м²",
      },
      {
        id: 2,
        name: "Конек кровельный",
        quantity: 120,
        unit: "шт.",
      },
      {
        id: 3,
        name: "Саморез кровельный",
        quantity: 5000,
        unit: "шт.",
      },
    ],
    delivery: {
      terms: [
        {
          positions: "1-3",
          date: "23.08.2026",
        },
      ],
      deliveryCondition: "Доставка от поставщика",
      paymentCondition: "По договору",
    },
    attachments: [
      {
        id: 1,
        name: "Техническое задание.pdf",
        url: "#",
      },
    ],
  },

  {
    id: 2,
    number: "№0002915",
    title: "Поставка сантехнического оборудования",
    object: "БЦ Meridian",
    city: "Алматы",
    status: "approval",
    categories: [
      "Сантехника",
      "Инженерные сети",
    ],
    createdAt: "2026-08-05T10:30:00",
    responseDeadline: "2026-08-15T18:00:00",
    resultsDate: "2026-08-16",
    responsible: {
      id: 2,
      name: "Баталгазиев Р.В.",
      position: "Отдел закупок",
    },
    stats: {
      responses: 2,
      views: 18,
    },
    viewsDetails: [
      {
        id: 1,
        companyName: "ТОО «Стройтех Пик Алматы»",
        viewedAt: "2026-08-15T17:45:00",
        isFavorite: false,
      },
      {
        id: 2,
        companyName: "ТОО «Алматы Строй Проект»",
        viewedAt: "2026-08-15T17:32:00",
        isFavorite: false,
      },
      {
        id: 3,
        companyName: "ТОО «Гранд Билд Алматы»",
        viewedAt: "2026-08-15T16:58:00",
        isFavorite: false,
      },
      {
        id: 4,
        companyName: "ТОО «КазСтрой Инжиниринг»",
        viewedAt: "2026-08-14T15:41:00",
        isFavorite: false,
      },
      {
        id: 5,
        companyName: "ТОО «Монолит Групп KZ»",
        viewedAt: "2026-08-14T14:27:00",
        isFavorite: false,
      },
      {
        id: 6,
        companyName: "ТОО «Альянс Строй Сервис»",
        viewedAt: "2026-08-14T13:50:00",
        isFavorite: false,
      },
      {
        id: 7,
        companyName: "ТОО «Премиум Билд Алматы»",
        viewedAt: "2026-08-14T12:16:00",
        isFavorite: false,
      },
      {
        id: 8,
        companyName: "ТОО «СтройСити Казахстан»",
        viewedAt: "2026-08-13T11:34:00",
        isFavorite: false,
      },
      {
        id: 9,
        companyName: "ТОО «Орда Құрылыс Алматы»",
        viewedAt: "2026-08-13T10:05:00",
        isFavorite: false,
      },
    ],
    responsesDetails: [
      {
        id: 1,
        supplier: {
          id: 101,
          name: "ТОО «ЭкоСтрой Сервис»",
          rating: 4.5,
          reliability: 95,
        },
        respondedAt: "2026-08-15T17:45:00",
        positions: {
          offered: 2,
          total: 2,
        },
        subtotal: 3_520_000,
        deliveryCost: 150_000,
        totalWithDelivery: 3_670_000,
        items: [
          {
            id: 1,
            name: "Унитаз напольный",
            brand: "Grohe",
            quantity: 24,
            unit: "шт.",
            pricePerUnit: 95_000,
            total: 2_280_000,
          },
          {
            id: 2,
            name: "Смеситель",
            quantity: 48,
            unit: "шт.",
            pricePerUnit: 25_833,
            total: 1_240_000,
          },
        ],
      },
      {
        id: 2,
        supplier: {
          id: 102,
          name: "ТОО «СтройСити Казахстан»",
          rating: 4.8,
          reliability: 97,
        },
        respondedAt: "2026-08-15T15:20:00",
        positions: {
          offered: 2,
          total: 2,
        },
        subtotal: 3_410_000,
        deliveryCost: 200_000,
        totalWithDelivery: 3_610_000,
        items: [],
      },
    ],
    participants: {
      legalEntities: 3,
      individuals: 0,
    },
    budget: 3_780_000,
    winnerSelection: "После согласования",
    approvals: [
      {
        id: 1,
        name: "Сапамов С.Т.",
        position: "Кладовщик",
        approved: true,
        approvedAt: "2026-08-05T12:15:00",
      },
      {
        id: 2,
        name: "Айтуров А.А.",
        position: "ПТО проекта",
        approved: false,
      },
    ],
    items: [
      {
        id: 1,
        name: "Унитаз напольный",
        brand: "Grohe",
        quantity: 24,
        unit: "шт.",
      },
      {
        id: 2,
        name: "Смеситель",
        quantity: 48,
        unit: "шт.",
      },
    ],
    delivery: {
      terms: [
        {
          positions: "1-2",
          date: "25.08.2026",
        },
      ],
      deliveryCondition: "Доставка на объект",
      paymentCondition: "30% предоплата, 70% после поставки",
    },
    attachments: [],
  },

  {
    id: 3,
    number: "№0002914",
    title: "Фасадные конструкции и расходники",
    object: "ЖК Hayat Meliora",
    city: "Алматы",
    status: "collecting_responses",
    categories: [
      "Металлопрокат",
      "Фасадная химия",
      "Металл",
      "Расходные материалы",
    ],
    createdAt: "2026-08-04T17:25:00",
    responseDeadline: "2026-08-10T18:00:00",
    resultsDate: "2026-08-11",
    responsible: {
      id: 3,
      name: "Алпыспаев С.С.",
      position: "Снабженец",
    },
    stats: {
      responses: 5,
      additionalResponses: 2,
      views: 36,
    },
    viewsDetails: [
      {
        id: 1,
        companyName: "ТОО «Стройтех Пик Алматы»",
        viewedAt: "2026-08-10T17:45:00",
        isFavorite: false,
      },
      {
        id: 2,
        companyName: "ТОО «Алматы Строй Проект»",
        viewedAt: "2026-08-10T16:32:00",
        isFavorite: true,
      },
      {
        id: 3,
        companyName: "ТОО «Гранд Билд Алматы»",
        viewedAt: "2026-08-10T15:58:00",
        isFavorite: false,
      },
      {
        id: 4,
        companyName: "ТОО «КазСтрой Инжиниринг»",
        viewedAt: "2026-08-09T14:41:00",
        isFavorite: false,
      },
      {
        id: 5,
        companyName: "ТОО «Монолит Групп KZ»",
        viewedAt: "2026-08-09T13:27:00",
        isFavorite: true,
      },
    ],
    responsesDetails: [
      {
        id: 1,
        supplier: {
          id: 201,
          name: "ТОО «СтройСити Казахстан»",
          rating: 4.8,
          reliability: 97,
        },
        respondedAt: "2026-08-10T16:20:00",
        positions: {
          offered: 4,
          total: 4,
        },
        subtotal: 4_920_000,
        deliveryCost: 150_000,
        totalWithDelivery: 5_070_000,
        items: [
          {
            id: 1,
            name: "Алюминиевый профиль Т-образный",
            model: "T 60×60×1,3 мм",
            quantity: 2000,
            unit: "м",
            pricePerUnit: 650,
            total: 1_300_000,
          },
          {
            id: 2,
            name: "Алюминиевый уголок",
            model: "L 40×40×1,7 мм",
            quantity: 3600,
            unit: "шт.",
            pricePerUnit: 450,
            total: 1_620_000,
          },
          {
            id: 3,
            name: "Оцинкованный лист",
            quantity: 5000,
            unit: "м²",
            pricePerUnit: 350,
            total: 1_750_000,
          },
          {
            id: 4,
            name: "Заклепка D12×5 мм",
            brand: "ExProf",
            quantity: 500,
            unit: "шт.",
            pricePerUnit: 500,
            total: 250_000,
          },
        ],
      },
      {
        id: 2,
        supplier: {
          id: 202,
          name: "ТОО «Монолит Групп KZ»",
          rating: 4.5,
          reliability: 94,
        },
        respondedAt: "2026-08-10T14:15:00",
        positions: {
          offered: 4,
          total: 4,
        },
        subtotal: 4_780_000,
        deliveryCost: 220_000,
        totalWithDelivery: 5_000_000,
        items: [],
      },
      {
        id: 3,
        supplier: {
          id: 203,
          name: "ТОО «Алматы Строй Проект»",
          rating: 4.6,
          reliability: 93,
        },
        respondedAt: "2026-08-09T18:40:00",
        positions: {
          offered: 3,
          total: 4,
        },
        subtotal: 4_600_000,
        deliveryCost: 250_000,
        totalWithDelivery: 4_850_000,
        items: [],
      },
    ],
    participants: {
      legalEntities: 2,
      individuals: 3,
    },
    budget: 1_550_000,
    winnerSelection: "В назначенный день",
    approvals: [
      {
        id: 1,
        name: "Сапамов С.Т.",
        position: "Кладовщик",
        approved: true,
        approvedAt: "2026-08-11T10:45:00",
      },
      {
        id: 2,
        name: "Айтуров А.А.",
        position: "ПТО проекта",
        approved: true,
        approvedAt: "2026-08-12T12:50:00",
      },
      {
        id: 3,
        name: "Нурсалимов П.П.",
        position: "Отдел закупок",
        approved: true,
        approvedAt: "2026-08-12T17:44:00",
      },
    ],
    items: [
      {
        id: 1,
        name: "Алюминиевый профиль Т-образный",
        model: "T 60×60×1,3 мм",
        quantity: 2000,
        unit: "м",
      },
      {
        id: 2,
        name: "Алюминиевый уголок",
        model: "L 40×40×1,7 мм",
        quantity: 3600,
        unit: "шт.",
      },
      {
        id: 3,
        name: "Оцинкованный лист",
        quantity: 5000,
        unit: "м²",
      },
      {
        id: 4,
        name: "Заклепка D12×5 мм",
        brand: "ExProf",
        quantity: 500,
        unit: "шт.",
      },
    ],
    delivery: {
      terms: [
        {
          positions: "1-8",
          date: "23.08.2026",
        },
        {
          positions: "9-13",
          date: "01.09.2026",
        },
      ],
      deliveryCondition: "Доставка от поставщика",
      paymentCondition: "По согласованию с поставщиком",
    },
    attachments: [
      {
        id: 1,
        name: "Документация по профилям.pdf",
        url: "#",
      },
      {
        id: 2,
        name: "Документация по инструментам.pdf",
        url: "#",
      },
      {
        id: 3,
        name: "ТЗ фасадные конструкции.pdf",
        url: "#",
      },
    ],
  },

  {
    id: 4,
    number: "№0002913",
    title: "Кабельная продукция для жилого комплекса",
    object: "ЖК Grand Avenue",
    city: "Астана",
    status: "collecting_responses",
    categories: [
      "Электрика",
      "Кабель",
      "Инженерные сети",
    ],
    createdAt: "2026-08-06T09:15:00",
    responseDeadline: "2026-08-18T12:00:00",
    resultsDate: "2026-08-19",
    responsible: {
      id: 4,
      name: "Ибраев Д.К.",
      position: "Инженер",
    },
    stats: {
      responses: 7,
      views: 52,
    },
    viewsDetails: [
      {
        id: 1,
        companyName: "ТОО «Energy Systems KZ»",
        viewedAt: "2026-08-18T17:12:00",
        isFavorite: true,
      },
      {
        id: 2,
        companyName: "ТОО «KazElectro Group»",
        viewedAt: "2026-08-18T16:42:00",
        isFavorite: false,
      },
      {
        id: 3,
        companyName: "ТОО «Астана Электро»",
        viewedAt: "2026-08-18T15:30:00",
        isFavorite: false,
      },
      {
        id: 4,
        companyName: "ТОО «Power Line KZ»",
        viewedAt: "2026-08-17T12:15:00",
        isFavorite: false,
      },
    ],
    responsesDetails: [
      {
        id: 1,
        supplier: {
          id: 301,
          name: "ТОО «KazElectro Group»",
          rating: 4.8,
          reliability: 98,
        },
        respondedAt: "2026-08-18T11:30:00",
        positions: {
          offered: 2,
          total: 2,
        },
        subtotal: 5_050_000,
        deliveryCost: 150_000,
        totalWithDelivery: 5_200_000,
        items: [
          {
            id: 1,
            name: "Кабель ВВГнг 3×2.5",
            quantity: 5000,
            unit: "м",
            pricePerUnit: 650,
            total: 3_250_000,
          },
          {
            id: 2,
            name: "Кабель ВВГнг 5×6",
            quantity: 1500,
            unit: "м",
            pricePerUnit: 1200,
            total: 1_800_000,
          },
        ],
      },
      {
        id: 2,
        supplier: {
          id: 302,
          name: "ТОО «Power Line KZ»",
          rating: 4.6,
          reliability: 95,
        },
        respondedAt: "2026-08-17T18:10:00",
        positions: {
          offered: 2,
          total: 2,
        },
        subtotal: 4_980_000,
        deliveryCost: 200_000,
        totalWithDelivery: 5_180_000,
        items: [],
      },
      {
        id: 3,
        supplier: {
          id: 303,
          name: "ТОО «Астана Электро»",
          rating: 4.4,
          reliability: 92,
        },
        respondedAt: "2026-08-17T15:40:00",
        positions: {
          offered: 2,
          total: 2,
        },
        subtotal: 5_100_000,
        deliveryCost: 0,
        totalWithDelivery: 5_100_000,
        items: [],
      },
    ],
    participants: {
      legalEntities: 5,
      individuals: 1,
    },
    budget: 5_200_000,
    winnerSelection: "Минимальная цена",
    approvals: [],
    items: [
      {
        id: 1,
        name: "Кабель ВВГнг 3×2.5",
        quantity: 5000,
        unit: "м",
      },
      {
        id: 2,
        name: "Кабель ВВГнг 5×6",
        quantity: 1500,
        unit: "м",
      },
    ],
    delivery: {
      terms: [
        {
          positions: "1-2",
          date: "01.09.2026",
        },
      ],
      deliveryCondition: "Доставка на склад заказчика",
      paymentCondition: "Оплата после поставки",
    },
    attachments: [],
  },

  {
    id: 5,
    number: "№0002912",
    title: "ТМЦ: фасадные конструкции и материалы",
    object: "ЖК North Residence",
    city: "Астана",
    status: "collecting_responses",
    categories: [
      "Металлопрокат",
      "Фасадная химия",
      "Расходные материалы",
      "Слаботочные сети",
    ],
    createdAt: "2026-08-07T11:20:00",
    responseDeadline: "2026-08-19T10:00:00",
    resultsDate: "2026-08-20",
    responsible: {
      id: 5,
      name: "Султанов М.А.",
    },
    stats: {
      responses: 5,
      additionalResponses: 2,
      views: 36,
    },
    viewsDetails: [
      {
        id: 1,
        companyName: "ТОО «Facade Systems KZ»",
        viewedAt: "2026-08-19T17:40:00",
        isFavorite: true,
      },
      {
        id: 2,
        companyName: "ТОО «AluBuild Kazakhstan»",
        viewedAt: "2026-08-19T16:20:00",
        isFavorite: false,
      },
      {
        id: 3,
        companyName: "ТОО «СтройСити Казахстан»",
        viewedAt: "2026-08-19T14:05:00",
        isFavorite: false,
      },
      {
        id: 4,
        companyName: "ТОО «Premium Facade»",
        viewedAt: "2026-08-18T13:10:00",
        isFavorite: false,
      },
    ],
    responsesDetails: [
      {
        id: 1,
        supplier: {
          id: 401,
          name: "ТОО «Facade Systems KZ»",
          rating: 4.7,
          reliability: 96,
        },
        respondedAt: "2026-08-19T17:10:00",
        positions: {
          offered: 2,
          total: 2,
        },
        subtotal: 6_150_000,
        deliveryCost: 180_000,
        totalWithDelivery: 6_330_000,
        items: [
          {
            id: 1,
            name: "Фасадная панель",
            quantity: 950,
            unit: "м²",
            pricePerUnit: 5200,
            total: 4_940_000,
          },
          {
            id: 2,
            name: "Кронштейн фасадный",
            quantity: 2500,
            unit: "шт.",
            pricePerUnit: 484,
            total: 1_210_000,
          },
        ],
      },
      {
        id: 2,
        supplier: {
          id: 402,
          name: "ТОО «AluBuild Kazakhstan»",
          rating: 4.5,
          reliability: 94,
        },
        respondedAt: "2026-08-19T14:40:00",
        positions: {
          offered: 2,
          total: 2,
        },
        subtotal: 6_240_000,
        deliveryCost: 100_000,
        totalWithDelivery: 6_340_000,
        items: [],
      },
    ],
    participants: {
      legalEntities: 4,
      individuals: 2,
    },
    budget: 6_400_000,
    winnerSelection: "В назначенный день",
    approvals: [],
    items: [
      {
        id: 1,
        name: "Фасадная панель",
        quantity: 950,
        unit: "м²",
      },
      {
        id: 2,
        name: "Кронштейн фасадный",
        quantity: 2500,
        unit: "шт.",
      },
    ],
    delivery: {
      terms: [
        {
          positions: "1-2",
          date: "05.09.2026",
        },
      ],
      deliveryCondition: "Доставка поставщиком",
      paymentCondition: "Безналичный расчет",
    },
    attachments: [],
  },

  {
    id: 6,
    number: "№0002911",
    title: "Поставка оконных конструкций",
    object: "ЖК Green Park",
    city: "Алматы",
    status: "proposals_sent",
    categories: [
      "Окна",
      "Алюминиевые конструкции",
    ],
    createdAt: "2026-08-08T15:10:00",
    responseDeadline: "2026-08-20T18:00:00",
    resultsDate: "2026-08-22",
    responsible: {
      id: 6,
      name: "Касымов Е.Н.",
      position: "Руководитель проекта",
    },
    stats: {
      responses: 0,
      views: 1,
    },
    viewsDetails: [
      {
        id: 1,
        companyName: "ТОО «AluWindow KZ»",
        viewedAt: "2026-08-20T16:40:00",
        isFavorite: false,
      },
    ],
    responsesDetails: [],
    participants: {
      legalEntities: 2,
      individuals: 0,
    },
    budget: 9_800_000,
    winnerSelection: "По итогам коммерческих предложений",
    approvals: [],
    items: [
      {
        id: 1,
        name: "Алюминиевое окно",
        quantity: 124,
        unit: "шт.",
      },
    ],
    delivery: {
      terms: [
        {
          positions: "1",
          date: "15.09.2026",
        },
      ],
      deliveryCondition: "Монтаж включен",
      paymentCondition: "50/50",
    },
    attachments: [],
  },

  {
    id: 7,
    number: "№0002910",
    title: "Поставка и монтаж наружного видеонаблюдения",
    object: "БЦ Capital Tower",
    city: "Астана",
    isPrivate: true,
    status: "proposals_sent",
    categories: [
      "Слаботочные сети",
      "Видеонаблюдение",
    ],
    createdAt: "2026-08-09T09:00:00",
    responseDeadline: "2026-08-21T18:00:00",
    resultsDate: "2026-08-23",
    responsible: {
      id: 7,
      name: "Баталгазиев Р.В.",
      position: "Вы",
    },
    stats: {
      responses: 0,
      views: 1,
    },
    viewsDetails: [
      {
        id: 1,
        companyName: "ТОО «Security Systems Astana»",
        viewedAt: "2026-08-21T17:30:00",
        isFavorite: true,
      },
    ],
    responsesDetails: [],
    participants: {
      legalEntities: 3,
      individuals: 0,
    },
    budget: 4_250_000,
    winnerSelection: "Комиссия",
    approvals: [],
    items: [
      {
        id: 1,
        name: "IP камера 8MP",
        brand: "Hikvision",
        quantity: 32,
        unit: "шт.",
      },
      {
        id: 2,
        name: "PoE коммутатор",
        quantity: 4,
        unit: "шт.",
      },
    ],
    delivery: {
      terms: [
        {
          positions: "1-2",
          date: "10.09.2026",
        },
      ],
      deliveryCondition: "Поставка и монтаж",
      paymentCondition: "По факту выполненных работ",
    },
    attachments: [],
  },

  {
    id: 8,
    number: "№0002909",
    title: "ТМЦ: фасадные системы и материалы",
    object: "ЖК Riverside",
    city: "Алматы",
    status: "summing_up",
    categories: [
      "Стальные профили",
      "Инструменты",
    ],
    createdAt: "2026-08-10T12:40:00",
    resultsDate: "2026-08-24",
    responsible: {
      id: 8,
      name: "Султанов А.Р.",
    },
    stats: {
      responses: 13,
      views: 106,
    },
    viewsDetails: [
      {
        id: 1,
        companyName: "ТОО «Steel Group Kazakhstan»",
        viewedAt: "2026-08-23T18:20:00",
        isFavorite: true,
      },
      {
        id: 2,
        companyName: "ТОО «Industrial Tools KZ»",
        viewedAt: "2026-08-23T17:10:00",
        isFavorite: false,
      },
      {
        id: 3,
        companyName: "ТОО «Монолит Групп KZ»",
        viewedAt: "2026-08-23T15:45:00",
        isFavorite: false,
      },
      {
        id: 4,
        companyName: "ТОО «СтройСити Казахстан»",
        viewedAt: "2026-08-22T14:20:00",
        isFavorite: false,
      },
    ],
    responsesDetails: [
      {
        id: 1,
        supplier: {
          id: 501,
          name: "ТОО «Steel Group Kazakhstan»",
          rating: 4.9,
          reliability: 98,
        },
        respondedAt: "2026-08-23T17:45:00",
        positions: {
          offered: 2,
          total: 2,
        },
        subtotal: 8_450_000,
        deliveryCost: 250_000,
        totalWithDelivery: 8_700_000,
        items: [
          {
            id: 1,
            name: "Стальной профиль",
            quantity: 3500,
            unit: "м",
            pricePerUnit: 2350,
            total: 8_225_000,
          },
          {
            id: 2,
            name: "Монтажный инструмент",
            quantity: 25,
            unit: "компл.",
            pricePerUnit: 9000,
            total: 225_000,
          },
        ],
      },
      {
        id: 2,
        supplier: {
          id: 502,
          name: "ТОО «Industrial Tools KZ»",
          rating: 4.6,
          reliability: 94,
        },
        respondedAt: "2026-08-23T15:20:00",
        positions: {
          offered: 2,
          total: 2,
        },
        subtotal: 8_300_000,
        deliveryCost: 300_000,
        totalWithDelivery: 8_600_000,
        items: [],
      },
      {
        id: 3,
        supplier: {
          id: 503,
          name: "ТОО «Монолит Групп KZ»",
          rating: 4.5,
          reliability: 93,
        },
        respondedAt: "2026-08-22T19:00:00",
        positions: {
          offered: 2,
          total: 2,
        },
        subtotal: 8_550_000,
        deliveryCost: 0,
        totalWithDelivery: 8_550_000,
        items: [],
      },
    ],
    participants: {
      legalEntities: 8,
      individuals: 2,
    },
    budget: 8_900_000,
    winnerSelection: "Комиссионный отбор",
    approvals: [],
    items: [
      {
        id: 1,
        name: "Стальной профиль",
        quantity: 3500,
        unit: "м",
      },
      {
        id: 2,
        name: "Монтажный инструмент",
        quantity: 25,
        unit: "компл.",
      },
    ],
    delivery: {
      terms: [
        {
          positions: "1-2",
          date: "15.09.2026",
        },
      ],
      deliveryCondition: "Самовывоз",
      paymentCondition: "Оплата в течение 10 рабочих дней",
    },
    attachments: [],
  },

  {
    id: 9,
    number: "№0002908",
    title: "Материалы для отделки входных групп",
    object: "ЖК Apple City",
    city: "Алматы",
    status: "deal_approval",
    categories: [
      "Отделочные материалы",
      "Керамогранит",
    ],
    createdAt: "2026-08-11T14:30:00",
    resultsDate: "2026-08-25",
    responsible: {
      id: 9,
      name: "Жумабеков К.Т.",
    },
    stats: {
      responses: 9,
      views: 68,
    },
    viewsDetails: [
      {
        id: 1,
        companyName: "ТОО «Ceramic Pro Kazakhstan»",
        viewedAt: "2026-08-24T18:10:00",
        isFavorite: true,
      },
      {
        id: 2,
        companyName: "ТОО «Almaty Ceramic Group»",
        viewedAt: "2026-08-24T16:45:00",
        isFavorite: false,
      },
      {
        id: 3,
        companyName: "ТОО «Decor Stone KZ»",
        viewedAt: "2026-08-24T14:15:00",
        isFavorite: false,
      },
    ],
    responsesDetails: [
      {
        id: 1,
        supplier: {
          id: 601,
          name: "ТОО «Ceramic Pro Kazakhstan»",
          rating: 4.8,
          reliability: 97,
        },
        respondedAt: "2026-08-23T17:30:00",
        positions: {
          offered: 1,
          total: 1,
        },
        subtotal: 7_200_000,
        deliveryCost: 120_000,
        totalWithDelivery: 7_320_000,
        items: [
          {
            id: 1,
            name: "Керамогранит 600×600",
            quantity: 1200,
            unit: "м²",
            pricePerUnit: 6000,
            total: 7_200_000,
          },
        ],
      },
      {
        id: 2,
        supplier: {
          id: 602,
          name: "ТОО «Almaty Ceramic Group»",
          rating: 4.6,
          reliability: 95,
        },
        respondedAt: "2026-08-23T15:00:00",
        positions: {
          offered: 1,
          total: 1,
        },
        subtotal: 7_080_000,
        deliveryCost: 180_000,
        totalWithDelivery: 7_260_000,
        items: [],
      },
    ],
    participants: {
      legalEntities: 6,
      individuals: 0,
    },
    budget: 7_350_000,
    winnerSelection: "Победитель выбран",
    approvals: [
      {
        id: 1,
        name: "Омаров А.К.",
        position: "Финансовый директор",
        approved: false,
      },
    ],
    items: [
      {
        id: 1,
        name: "Керамогранит 600×600",
        quantity: 1200,
        unit: "м²",
      },
    ],
    delivery: {
      terms: [
        {
          positions: "1",
          date: "20.09.2026",
        },
      ],
      deliveryCondition: "На объект",
      paymentCondition: "По договору",
    },
    attachments: [],
  },

  {
    id: 10,
    number: "№0002907",
    title: "Системы вентиляции паркинга",
    object: "ЖК Central Residence",
    city: "Алматы",
    status: "approval",
    categories: [
      "Вентиляция",
      "ОВиК",
    ],
    createdAt: "2026-08-12T08:45:00",
    resultsDate: "2026-08-26",
    responsible: {
      id: 10,
      name: "Ермеков А.Н.",
    },
    stats: {
      responses: 0,
      views: 12,
    },
    viewsDetails: [
      {
        id: 1,
        companyName: "ТОО «Vent Systems Kazakhstan»",
        viewedAt: "2026-08-25T17:40:00",
        isFavorite: true,
      },
      {
        id: 2,
        companyName: "ТОО «Climate Engineering»",
        viewedAt: "2026-08-25T14:30:00",
        isFavorite: false,
      },
      {
        id: 3,
        companyName: "ТОО «AirTech Алматы»",
        viewedAt: "2026-08-24T16:10:00",
        isFavorite: false,
      },
    ],
    responsesDetails: [],
    participants: {
      legalEntities: 1,
      individuals: 0,
    },
    budget: 12_500_000,
    winnerSelection: "После согласования",
    approvals: [
      {
        id: 1,
        name: "Тлеубаев М.К.",
        position: "Главный инженер",
        approved: true,
      },
      {
        id: 2,
        name: "Иманбаев Д.С.",
        position: "Финансовый отдел",
        approved: false,
      },
    ],
    items: [
      {
        id: 1,
        name: "Вентилятор дымоудаления",
        quantity: 8,
        unit: "шт.",
      },
    ],
    delivery: {
      terms: [
        {
          positions: "1",
          date: "30.09.2026",
        },
      ],
      deliveryCondition: "Поставка на объект",
      paymentCondition: "30 дней после поставки",
    },
    attachments: [],
  },

  {
    id: 11,
    number: "№0002906",
    title: "Закуп лакокрасочных материалов",
    object: "ЖК Nova City",
    city: "Алматы",
    status: "collecting_responses",
    categories: [
      "Краски",
      "Расходные материалы",
    ],
    createdAt: "2026-08-13T13:20:00",
    responseDeadline: "2026-08-22T17:00:00",
    resultsDate: "2026-08-23",
    responsible: {
      id: 11,
      name: "Сериков Б.М.",
    },
    stats: {
      responses: 4,
      views: 29,
    },
    viewsDetails: [
      {
        id: 1,
        companyName: "ТОО «ColorPro Kazakhstan»",
        viewedAt: "2026-08-22T16:50:00",
        isFavorite: true,
      },
      {
        id: 2,
        companyName: "ТОО «Paint Market KZ»",
        viewedAt: "2026-08-22T15:20:00",
        isFavorite: false,
      },
      {
        id: 3,
        companyName: "ТОО «Decor Group Алматы»",
        viewedAt: "2026-08-22T13:40:00",
        isFavorite: false,
      },
      {
        id: 4,
        companyName: "ТОО «СтройКолор»",
        viewedAt: "2026-08-21T17:25:00",
        isFavorite: false,
      },
    ],
    responsesDetails: [
      {
        id: 1,
        supplier: {
          id: 701,
          name: "ТОО «ColorPro Kazakhstan»",
          rating: 4.7,
          reliability: 96,
        },
        respondedAt: "2026-08-22T16:20:00",
        positions: {
          offered: 2,
          total: 2,
        },
        subtotal: 910_000,
        deliveryCost: 40_000,
        totalWithDelivery: 950_000,
        items: [
          {
            id: 1,
            name: "Краска интерьерная",
            quantity: 120,
            unit: "вед.",
            pricePerUnit: 5750,
            total: 690_000,
          },
          {
            id: 2,
            name: "Грунтовка",
            quantity: 80,
            unit: "вед.",
            pricePerUnit: 2750,
            total: 220_000,
          },
        ],
      },
      {
        id: 2,
        supplier: {
          id: 702,
          name: "ТОО «Paint Market KZ»",
          rating: 4.5,
          reliability: 93,
        },
        respondedAt: "2026-08-22T14:10:00",
        positions: {
          offered: 2,
          total: 2,
        },
        subtotal: 930_000,
        deliveryCost: 0,
        totalWithDelivery: 930_000,
        items: [],
      },
      {
        id: 3,
        supplier: {
          id: 703,
          name: "ТОО «Decor Group Алматы»",
          rating: 4.4,
          reliability: 91,
        },
        respondedAt: "2026-08-21T18:35:00",
        positions: {
          offered: 2,
          total: 2,
        },
        subtotal: 920_000,
        deliveryCost: 35_000,
        totalWithDelivery: 955_000,
        items: [],
      },
    ],
    participants: {
      legalEntities: 4,
      individuals: 1,
    },
    budget: 980_000,
    winnerSelection: "Минимальная цена",
    approvals: [],
    items: [
      {
        id: 1,
        name: "Краска интерьерная",
        quantity: 120,
        unit: "вед.",
      },
      {
        id: 2,
        name: "Грунтовка",
        quantity: 80,
        unit: "вед.",
      },
    ],
    delivery: {
      terms: [
        {
          positions: "1-2",
          date: "28.08.2026",
        },
      ],
      deliveryCondition: "Доставка поставщиком",
      paymentCondition: "100% после поставки",
    },
    attachments: [],
  },

  {
    id: 12,
    number: "№0002905",
    title: "Лифтовое оборудование для второй очереди",
    object: "ЖК Avenue Park",
    city: "Астана",
    status: "summing_up",
    categories: [
      "Лифтовое оборудование",
      "Инженерные системы",
    ],
    createdAt: "2026-08-14T09:30:00",
    resultsDate: "2026-08-28",
    responsible: {
      id: 12,
      name: "Тасболатов Д.М.",
    },
    stats: {
      responses: 6,
      views: 84,
    },
    viewsDetails: [
      {
        id: 1,
        companyName: "ТОО «Lift Service Kazakhstan»",
        viewedAt: "2026-08-27T17:35:00",
        isFavorite: true,
      },
      {
        id: 2,
        companyName: "ТОО «Elevator Systems Astana»",
        viewedAt: "2026-08-27T16:10:00",
        isFavorite: false,
      },
      {
        id: 3,
        companyName: "ТОО «KZ Lift Engineering»",
        viewedAt: "2026-08-27T14:25:00",
        isFavorite: false,
      },
      {
        id: 4,
        companyName: "ТОО «Asia Lift Group»",
        viewedAt: "2026-08-26T15:45:00",
        isFavorite: false,
      },
    ],
    responsesDetails: [
      {
        id: 1,
        supplier: {
          id: 801,
          name: "ТОО «Lift Service Kazakhstan»",
          rating: 4.9,
          reliability: 99,
        },
        respondedAt: "2026-08-27T17:00:00",
        positions: {
          offered: 1,
          total: 1,
        },
        subtotal: 46_800_000,
        deliveryCost: 900_000,
        totalWithDelivery: 47_700_000,
        items: [
          {
            id: 1,
            name: "Пассажирский лифт 1000 кг",
            quantity: 4,
            unit: "шт.",
            pricePerUnit: 11_700_000,
            total: 46_800_000,
          },
        ],
      },
      {
        id: 2,
        supplier: {
          id: 802,
          name: "ТОО «Elevator Systems Astana»",
          rating: 4.7,
          reliability: 96,
        },
        respondedAt: "2026-08-27T14:45:00",
        positions: {
          offered: 1,
          total: 1,
        },
        subtotal: 47_200_000,
        deliveryCost: 500_000,
        totalWithDelivery: 47_700_000,
        items: [],
      },
      {
        id: 3,
        supplier: {
          id: 803,
          name: "ТОО «KZ Lift Engineering»",
          rating: 4.6,
          reliability: 95,
        },
        respondedAt: "2026-08-26T18:20:00",
        positions: {
          offered: 1,
          total: 1,
        },
        subtotal: 46_500_000,
        deliveryCost: 1_000_000,
        totalWithDelivery: 47_500_000,
        items: [],
      },
    ],
    participants: {
      legalEntities: 6,
      individuals: 0,
    },
    budget: 48_000_000,
    winnerSelection: "Тендерная комиссия",
    approvals: [],
    items: [
      {
        id: 1,
        name: "Пассажирский лифт 1000 кг",
        quantity: 4,
        unit: "шт.",
      },
    ],
    delivery: {
      terms: [
        {
          positions: "1",
          date: "15.11.2026",
        },
      ],
      deliveryCondition: "Поставка, монтаж и пусконаладка",
      paymentCondition: "По графику договора",
    },
    attachments: [],
  },

  {
    id: 13,
    number: "№0002904",
    title: "Мебель для офиса управляющей компании",
    object: "Business Center Prime",
    city: "Алматы",
    isPrivate: true,
    status: "archived",
    categories: [
      "Мебель",
      "Офис",
    ],
    createdAt: "2026-07-22T11:00:00",
    responsible: {
      id: 13,
      name: "Нуртаев А.М.",
    },
    stats: {
      responses: 8,
      views: 43,
    },
    participants: {
      legalEntities: 5,
      individuals: 0,
    },
    budget: 3_100_000,
    winnerSelection: "Завершено",
    approvals: [],
    items: [
      {
        id: 1,
        name: "Рабочий стол",
        quantity: 24,
        unit: "шт.",
      },
      {
        id: 2,
        name: "Офисное кресло",
        quantity: 24,
        unit: "шт.",
      },
    ],
    delivery: {
      terms: [
        {
          positions: "1-2",
          date: "15.08.2026",
        },
      ],
      deliveryCondition: "Доставка и сборка",
      paymentCondition: "Оплачено",
    },
    attachments: [],
  },

  {
    id: 14,
    number: "№0002903",
    title: "Сухие строительные смеси",
    object: "ЖК Alatau Hills",
    city: "Алматы",
    status: "completed",
    categories: [
      "Строительные смеси",
      "Черновые материалы",
    ],
    createdAt: "2026-07-25T16:15:00",
    responsible: {
      id: 14,
      name: "Рахимов Т.Е.",
    },
    stats: {
      responses: 11,
      views: 97,
    },
    participants: {
      legalEntities: 7,
      individuals: 2,
    },
    budget: 2_870_000,
    winnerSelection: "Победитель определен",
    approvals: [],
    items: [
      {
        id: 1,
        name: "Штукатурная смесь",
        quantity: 900,
        unit: "меш.",
      },
      {
        id: 2,
        name: "Шпаклевка финишная",
        quantity: 650,
        unit: "меш.",
      },
    ],
    delivery: {
      terms: [
        {
          positions: "1-2",
          date: "20.08.2026",
        },
      ],
      deliveryCondition: "Доставка на объект",
      paymentCondition: "Оплачено",
    },
    attachments: [],
  },

  {
    id: 15,
    number: "№0002902",
    title: "Освещение общественных зон",
    object: "ЖК Panorama",
    city: "Алматы",
    status: "draft",
    categories: [
      "Освещение",
      "Электрика",
      "Дизайн",
    ],
    createdAt: "2026-08-15T10:10:00",
    responsible: {
      id: 15,
      name: "Каримов Р.Н.",
    },
    stats: {
      responses: 0,
      views: 0,
    },
    participants: {
      legalEntities: 0,
      individuals: 0,
    },
    budget: 4_600_000,
    winnerSelection: "Не определено",
    approvals: [],
    items: [
      {
        id: 1,
        name: "Светильник потолочный",
        quantity: 180,
        unit: "шт.",
      },
      {
        id: 2,
        name: "Настенный светильник",
        quantity: 70,
        unit: "шт.",
      },
    ],
    delivery: {
      terms: [],
      deliveryCondition: "Не указано",
      paymentCondition: "Не указано",
    },
    attachments: [],
  },
];

export const approvalsMock: ApprovalRequest[] = [
  {
    id: 1,
    leadId: 2,
    number: "№0002915",
    type: "purchase_request",

    title: "Поставка сантехнического оборудования",

    object: "БЦ Meridian",
    city: "Алматы",

    createdAt: "2026-09-04T09:25:00",
    approvalDeadline: "2026-09-05T18:00:00",

    initiator: {
      id: 1,
      name: "Баталгазиев Р.В.",
      position: "Специалист по закупкам",
    },

    status: "pending",
    myDecision: "waiting",

    budget: 3_780_000,
    itemsCount: 12,

    categories: [
      "Сантехника",
      "Инженерные сети",
    ],

    approvers: [
      {
        id: 1,
        name: "Сапамов С.Т.",
        position: "Кладовщик",
        status: "approved",
        decidedAt: "2026-09-04T10:15:00",
      },
      {
        id: 2,
        name: "Айтуров А.А.",
        position: "ПТО проекта",
        status: "waiting",
      },
      {
        id: 3,
        name: "Нурсалимов П.П.",
        position: "Отдел закупок",
        status: "waiting",
      },
    ],
  },

  {
    id: 2,
    leadId: 3,
    number: "№0002914",
    type: "purchase_request",

    title: "Фасадные конструкции и расходники",

    object: "ЖК Hayat Meliora",
    city: "Алматы",

    createdAt: "2026-09-04T10:40:00",
    approvalDeadline: "2026-09-06T18:00:00",

    initiator: {
      id: 2,
      name: "Алпыспаев С.С.",
      position: "Снабженец",
    },

    status: "pending",
    myDecision: "waiting",

    budget: 1_550_000,
    itemsCount: 13,

    categories: [
      "Металлопрокат",
      "Фасадная химия",
      "Металл",
      "Расходные материалы",
    ],

    approvers: [
      {
        id: 1,
        name: "Сапамов С.Т.",
        position: "Кладовщик",
        status: "approved",
        decidedAt: "2026-09-04T12:00:00",
      },
      {
        id: 2,
        name: "Айтуров А.А.",
        position: "ПТО проекта",
        status: "approved",
        decidedAt: "2026-09-04T14:20:00",
      },
      {
        id: 3,
        name: "Нурсалимов П.П.",
        position: "Отдел закупок",
        status: "waiting",
      },
    ],
  },

  {
    id: 3,
    leadId: 4,
    number: "№0002913",
    type: "purchase_request",

    title: "Кабельная продукция для жилого комплекса",

    object: "ЖК Grand Avenue",
    city: "Астана",

    createdAt: "2026-09-05T08:30:00",
    approvalDeadline: "2026-09-07T12:00:00",

    initiator: {
      id: 3,
      name: "Ибраев Д.К.",
      position: "Инженер",
    },

    status: "pending",
    myDecision: "waiting",

    budget: 5_200_000,
    itemsCount: 8,

    categories: [
      "Электрика",
      "Кабель",
      "Инженерные сети",
    ],

    approvers: [
      {
        id: 1,
        name: "Сериков Б.М.",
        position: "Руководитель отдела",
        status: "approved",
        decidedAt: "2026-09-05T09:10:00",
      },
      {
        id: 2,
        name: "Мусин Д.А.",
        position: "Главный инженер",
        status: "waiting",
      },
    ],
  },

  {
    id: 4,
    leadId: 5,
    number: "№0002912",
    type: "purchase_request",

    title: "ТМЦ: фасадные конструкции и материалы",

    object: "ЖК North Residence",
    city: "Астана",

    createdAt: "2026-09-05T10:20:00",
    approvalDeadline: "2026-09-08T18:00:00",

    initiator: {
      id: 4,
      name: "Султанов М.А.",
      position: "Снабженец",
    },

    status: "pending",
    myDecision: "waiting",

    budget: 6_400_000,
    itemsCount: 18,

    categories: [
      "Металлопрокат",
      "Фасадная химия",
      "Расходные материалы",
    ],

    approvers: [
      {
        id: 1,
        name: "Нуркенов А.М.",
        position: "Руководитель проекта",
        status: "waiting",
      },
      {
        id: 2,
        name: "Касымов Е.Н.",
        position: "Отдел закупок",
        status: "waiting",
      },
      {
        id: 3,
        name: "Омаров А.К.",
        position: "Финансовый директор",
        status: "waiting",
      },
    ],
  },

  {
    id: 5,
    leadId: 10,
    number: "№0002907",
    type: "purchase_request",

    title: "Системы вентиляции паркинга",

    object: "ЖК Central Residence",
    city: "Алматы",

    createdAt: "2026-09-06T09:15:00",
    approvalDeadline: "2026-09-09T18:00:00",

    initiator: {
      id: 5,
      name: "Ермеков А.Н.",
      position: "Инженер проекта",
    },

    status: "pending",
    myDecision: "waiting",

    budget: 12_500_000,
    itemsCount: 6,

    categories: [
      "Вентиляция",
      "ОВиК",
    ],

    approvers: [
      {
        id: 1,
        name: "Тлеубаев М.К.",
        position: "Главный инженер",
        status: "approved",
        decidedAt: "2026-09-06T10:30:00",
      },
      {
        id: 2,
        name: "Иманбаев Д.С.",
        position: "Финансовый отдел",
        status: "waiting",
      },
    ],
  },

  // ============================
  // СОГЛАСОВАНО МНОЙ
  // ============================

  {
    id: 6,
    leadId: 6,
    number: "№0002911",
    type: "purchase_request",

    title: "Поставка оконных конструкций",

    object: "ЖК Green Park",
    city: "Алматы",

    createdAt: "2026-09-01T11:10:00",
    approvalDeadline: "2026-09-03T18:00:00",

    initiator: {
      id: 6,
      name: "Касымов Е.Н.",
      position: "Руководитель проекта",
    },

    status: "approved",
    myDecision: "approved",

    budget: 9_800_000,
    itemsCount: 4,

    categories: [
      "Окна",
      "Алюминиевые конструкции",
    ],

    approvers: [
      {
        id: 1,
        name: "Кузнецов М.А.",
        position: "ПТО проекта",
        status: "approved",
        decidedAt: "2026-09-01T15:10:00",
      },
      {
        id: 2,
        name: "Баталгазиев Р.В.",
        position: "Отдел закупок",
        status: "approved",
        decidedAt: "2026-09-01T16:40:00",
      },
    ],
  },

  {
    id: 7,
    leadId: 7,
    number: "№0002910",
    type: "purchase_request",

    title: "Поставка и монтаж наружного видеонаблюдения",

    object: "БЦ Capital Tower",
    city: "Астана",

    createdAt: "2026-08-30T09:00:00",
    approvalDeadline: "2026-09-01T18:00:00",

    initiator: {
      id: 7,
      name: "Баталгазиев Р.В.",
      position: "Специалист по закупкам",
    },

    status: "approved",
    myDecision: "approved",

    budget: 4_250_000,
    itemsCount: 9,

    categories: [
      "Слаботочные сети",
      "Видеонаблюдение",
    ],

    approvers: [
      {
        id: 1,
        name: "Айтуров А.А.",
        position: "ПТО проекта",
        status: "approved",
        decidedAt: "2026-08-30T14:25:00",
      },
      {
        id: 2,
        name: "Сапамов С.Т.",
        position: "Кладовщик",
        status: "approved",
        decidedAt: "2026-08-31T10:50:00",
      },
    ],
  },

  {
    id: 8,
    leadId: 8,
    number: "№0002909",
    type: "purchase_request",

    title: "ТМЦ: фасадные системы и материалы",

    object: "ЖК Riverside",
    city: "Алматы",

    createdAt: "2026-08-28T12:40:00",
    approvalDeadline: "2026-08-30T18:00:00",

    initiator: {
      id: 8,
      name: "Султанов А.Р.",
      position: "Снабженец",
    },

    status: "approved",
    myDecision: "approved",

    budget: 8_900_000,
    itemsCount: 15,

    categories: [
      "Стальные профили",
      "Инструменты",
    ],

    approvers: [
      {
        id: 1,
        name: "Тасболатов Д.М.",
        position: "Руководитель проекта",
        status: "approved",
        decidedAt: "2026-08-28T15:20:00",
      },
      {
        id: 2,
        name: "Иманбаев Д.С.",
        position: "Финансовый отдел",
        status: "approved",
        decidedAt: "2026-08-29T09:15:00",
      },
      {
        id: 3,
        name: "Омаров А.К.",
        position: "Финансовый директор",
        status: "approved",
        decidedAt: "2026-08-29T11:30:00",
      },
    ],
  },

  {
    id: 9,
    leadId: 9,
    number: "№0002908",
    type: "purchase_request",

    title: "Материалы для отделки входных групп",

    object: "ЖК Apple City",
    city: "Алматы",

    createdAt: "2026-08-27T14:30:00",
    approvalDeadline: "2026-08-29T18:00:00",

    initiator: {
      id: 9,
      name: "Жумабеков К.Т.",
      position: "Менеджер проекта",
    },

    status: "approved",
    myDecision: "approved",

    budget: 7_350_000,
    itemsCount: 11,

    categories: [
      "Отделочные материалы",
      "Керамогранит",
    ],

    approvers: [
      {
        id: 1,
        name: "Омаров А.К.",
        position: "Финансовый директор",
        status: "approved",
        decidedAt: "2026-08-28T11:10:00",
      },
    ],
  },

  {
    id: 10,
    leadId: 11,
    number: "№0002906",
    type: "purchase_request",

    title: "Закуп лакокрасочных материалов",

    object: "ЖК Nova City",
    city: "Алматы",

    createdAt: "2026-08-25T13:20:00",
    approvalDeadline: "2026-08-27T17:00:00",

    initiator: {
      id: 10,
      name: "Сериков Б.М.",
      position: "Специалист по закупкам",
    },

    status: "approved",
    myDecision: "approved",

    budget: 980_000,
    itemsCount: 7,

    categories: [
      "Краски",
      "Расходные материалы",
    ],

    approvers: [
      {
        id: 1,
        name: "Касымов Е.Н.",
        position: "Руководитель проекта",
        status: "approved",
        decidedAt: "2026-08-25T16:10:00",
      },
      {
        id: 2,
        name: "Тлеубаев М.К.",
        position: "Главный инженер",
        status: "approved",
        decidedAt: "2026-08-26T09:35:00",
      },
    ],
  },

  {
    id: 11,
    leadId: 12,
    number: "№0002905",
    type: "purchase_request",

    title: "Лифтовое оборудование для второй очереди",

    object: "ЖК Avenue Park",
    city: "Астана",

    createdAt: "2026-08-22T09:30:00",
    approvalDeadline: "2026-08-25T18:00:00",

    initiator: {
      id: 11,
      name: "Тасболатов Д.М.",
      position: "Руководитель проекта",
    },

    status: "approved",
    myDecision: "approved",

    budget: 48_000_000,
    itemsCount: 4,

    categories: [
      "Лифтовое оборудование",
      "Инженерные системы",
    ],

    approvers: [
      {
        id: 1,
        name: "Омаров А.К.",
        position: "Финансовый директор",
        status: "approved",
        decidedAt: "2026-08-23T10:20:00",
      },
      {
        id: 2,
        name: "Иманбаев Д.С.",
        position: "Финансовый отдел",
        status: "approved",
        decidedAt: "2026-08-23T14:40:00",
      },
      {
        id: 3,
        name: "Нурсалимов П.П.",
        position: "Отдел закупок",
        status: "approved",
        decidedAt: "2026-08-24T10:15:00",
      },
    ],
  },

  {
    id: 12,
    leadId: 13,
    number: "№0002904",
    type: "purchase_request",

    title: "Мебель для офиса управляющей компании",

    object: "Business Center Prime",
    city: "Алматы",

    createdAt: "2026-08-20T11:00:00",
    approvalDeadline: "2026-08-22T18:00:00",

    initiator: {
      id: 12,
      name: "Нуртаев А.М.",
      position: "Административный отдел",
    },

    status: "approved",
    myDecision: "approved",

    budget: 3_100_000,
    itemsCount: 10,

    categories: [
      "Мебель",
      "Офис",
    ],

    approvers: [
      {
        id: 1,
        name: "Омаров А.К.",
        position: "Финансовый директор",
        status: "approved",
        decidedAt: "2026-08-20T16:20:00",
      },
      {
        id: 2,
        name: "Каримов Р.Н.",
        position: "Административный директор",
        status: "approved",
        decidedAt: "2026-08-21T10:30:00",
      },
    ],
  },

  {
    id: 13,
    leadId: 14,
    number: "№0002903",
    type: "purchase_request",

    title: "Сухие строительные смеси",

    object: "ЖК Alatau Hills",
    city: "Алматы",

    createdAt: "2026-08-18T16:15:00",
    approvalDeadline: "2026-08-20T18:00:00",

    initiator: {
      id: 13,
      name: "Рахимов Т.Е.",
      position: "Снабженец",
    },

    status: "approved",
    myDecision: "approved",

    budget: 2_870_000,
    itemsCount: 14,

    categories: [
      "Строительные смеси",
      "Черновые материалы",
    ],

    approvers: [
      {
        id: 1,
        name: "Сапамов С.Т.",
        position: "Кладовщик",
        status: "approved",
        decidedAt: "2026-08-19T10:15:00",
      },
      {
        id: 2,
        name: "Айтуров А.А.",
        position: "ПТО проекта",
        status: "approved",
        decidedAt: "2026-08-19T13:40:00",
      },
    ],
  },

  {
    id: 14,
    leadId: 15,
    number: "№0002902",
    type: "purchase_request",

    title: "Освещение общественных зон",

    object: "ЖК Panorama",
    city: "Алматы",

    createdAt: "2026-08-17T10:10:00",
    approvalDeadline: "2026-08-19T18:00:00",

    initiator: {
      id: 14,
      name: "Каримов Р.Н.",
      position: "Инженер проекта",
    },

    status: "approved",
    myDecision: "approved",

    budget: 4_600_000,
    itemsCount: 16,

    categories: [
      "Освещение",
      "Электрика",
      "Дизайн",
    ],

    approvers: [
      {
        id: 1,
        name: "Тлеубаев М.К.",
        position: "Главный инженер",
        status: "approved",
        decidedAt: "2026-08-17T14:10:00",
      },
      {
        id: 2,
        name: "Омаров А.К.",
        position: "Финансовый директор",
        status: "approved",
        decidedAt: "2026-08-18T10:30:00",
      },
    ],
  },

  {
    id: 15,
    leadId: 16,
    number: "№0002901",
    type: "purchase_request",

    title: "Материалы для устройства кровли",

    object: "ЖК Mountain View",
    city: "Алматы",

    createdAt: "2026-08-15T09:20:00",
    approvalDeadline: "2026-08-17T18:00:00",

    initiator: {
      id: 15,
      name: "Абдрахманов А.С.",
      position: "Снабженец",
    },

    status: "approved",
    myDecision: "approved",

    budget: 5_900_000,
    itemsCount: 12,

    categories: [
      "Кровля",
      "Металлопрокат",
    ],

    approvers: [
      {
        id: 1,
        name: "Касымов Е.Н.",
        position: "Руководитель проекта",
        status: "approved",
        decidedAt: "2026-08-15T14:45:00",
      },
    ],
  },

  {
    id: 16,
    leadId: 17,
    number: "№0002900",
    type: "purchase_request",

    title: "Оборудование для системы отопления",

    object: "ЖК Central Park",
    city: "Астана",

    createdAt: "2026-08-13T13:40:00",
    approvalDeadline: "2026-08-15T18:00:00",

    initiator: {
      id: 16,
      name: "Муратов Н.Б.",
      position: "Инженер ОВиК",
    },

    status: "approved",
    myDecision: "approved",

    budget: 11_400_000,
    itemsCount: 19,

    categories: [
      "ОВиК",
      "Отопление",
      "Инженерные системы",
    ],

    approvers: [
      {
        id: 1,
        name: "Тлеубаев М.К.",
        position: "Главный инженер",
        status: "approved",
        decidedAt: "2026-08-14T09:20:00",
      },
      {
        id: 2,
        name: "Омаров А.К.",
        position: "Финансовый директор",
        status: "approved",
        decidedAt: "2026-08-14T12:35:00",
      },
    ],
  },

  {
    id: 17,
    leadId: 18,
    number: "№0002899",
    type: "purchase_request",

    title: "Двери и фурнитура для квартир",

    object: "ЖК Hayat Astoria",
    city: "Алматы",

    createdAt: "2026-08-10T11:25:00",
    approvalDeadline: "2026-08-12T18:00:00",

    initiator: {
      id: 17,
      name: "Алпыспаев А.Е.",
      position: "Специалист по закупкам",
    },

    status: "approved",
    myDecision: "approved",

    budget: 8_750_000,
    itemsCount: 21,

    categories: [
      "Двери",
      "Фурнитура",
      "Отделочные материалы",
    ],

    approvers: [
      {
        id: 1,
        name: "Айтуров А.А.",
        position: "ПТО проекта",
        status: "approved",
        decidedAt: "2026-08-10T15:40:00",
      },
      {
        id: 2,
        name: "Иманбаев Д.С.",
        position: "Финансовый отдел",
        status: "approved",
        decidedAt: "2026-08-11T09:15:00",
      },
      {
        id: 3,
        name: "Нурсалимов П.П.",
        position: "Отдел закупок",
        status: "approved",
        decidedAt: "2026-08-11T12:30:00",
      },
    ],
  },
];


