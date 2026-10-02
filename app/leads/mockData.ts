import type { Lead } from "./types";

// export const leadsMock: Lead[] = [
//   {
//     id: 1,
//     number: "№0002916",
//     title: "Материал для кровли здания",
//     object: "ЖК Hayat Astoria",
//     city: "Алматы",
//     status: "draft",
//     categories: [
//       "Металлопрокат",
//       "Черепица",
//       "Расходные материалы",
//     ],
//     createdAt: "2026-08-04T17:25:00",
//     responsible: {
//       id: 1,
//       name: "Алпыспаев А.Е.",
//       position: "Специалист по закупкам",
//     },
//     stats: {
//       responses: 0,
//       views: 4,
//     },
//     participants: {
//       legalEntities: 2,
//       individuals: 1,
//     },
//     budget: 2_450_000,
//     winnerSelection: "В назначенный день",
//     approvals: [],
//     items: [
//       {
//         id: 1,
//         name: "Металлочерепица",
//         quantity: 850,
//         unit: "м²",
//       },
//       {
//         id: 2,
//         name: "Конек кровельный",
//         quantity: 120,
//         unit: "шт.",
//       },
//       {
//         id: 3,
//         name: "Саморез кровельный",
//         quantity: 5000,
//         unit: "шт.",
//       },
//     ],
//     delivery: {
//       terms: [
//         {
//           positions: "1-3",
//           date: "23.08.2026",
//         },
//       ],
//       deliveryCondition: "Доставка от поставщика",
//       paymentCondition: "По договору",
//     },
//     attachments: [
//       {
//         id: 1,
//         name: "Техническое задание.pdf",
//         url: "#",
//       },
//     ],
//   },

//   {
//     id: 2,
//     number: "№0002915",
//     title: "Поставка сантехнического оборудования",
//     object: "БЦ Meridian",
//     city: "Алматы",
//     status: "approval",
//     categories: [
//       "Сантехника",
//       "Инженерные сети",
//     ],
//     createdAt: "2026-08-05T10:30:00",
//     responseDeadline: "2026-08-15T18:00:00",
//     responsible: {
//       id: 2,
//       name: "Баталгазиев Р.В.",
//       position: "Отдел закупок",
//     },
//     stats: {
//       responses: 2,
//       views: 18,
//     },
//     participants: {
//       legalEntities: 3,
//       individuals: 0,
//     },
//     budget: 3_780_000,
//     winnerSelection: "После согласования",
//     approvals: [
//       {
//         id: 1,
//         name: "Сапамов С.Т.",
//         position: "Кладовщик",
//         approved: true,
//         approvedAt: "2026-08-05T12:15:00",
//       },
//       {
//         id: 2,
//         name: "Айтуров А.А.",
//         position: "ПТО проекта",
//         approved: false,
//       },
//     ],
//     items: [
//       {
//         id: 1,
//         name: "Унитаз напольный",
//         brand: "Grohe",
//         quantity: 24,
//         unit: "шт.",
//       },
//       {
//         id: 2,
//         name: "Смеситель",
//         quantity: 48,
//         unit: "шт.",
//       },
//     ],
//     delivery: {
//       terms: [
//         {
//           positions: "1-2",
//           date: "25.08.2026",
//         },
//       ],
//       deliveryCondition: "Доставка на объект",
//       paymentCondition: "30% предоплата, 70% после поставки",
//     },
//     attachments: [],
//   },

//   {
//     id: 3,
//     number: "№0002914",
//     title: "Фасадные конструкции и расходники",
//     object: "ЖК Hayat Meliora",
//     city: "Алматы",
//     status: "collecting_responses",
//     categories: [
//       "Металлопрокат",
//       "Фасадная химия",
//       "Металл",
//       "Расходные материалы",
//     ],
//     createdAt: "2026-08-04T17:25:00",
//     responseDeadline: "2026-08-10T18:00:00",
//     resultsDate: "2026-08-11",
//     responsible: {
//       id: 3,
//       name: "Алпыспаев С.С.",
//       position: "Снабженец",
//     },
//     stats: {
//       responses: 5,
//       additionalResponses: 2,
//       views: 36,
//     },
//     participants: {
//       legalEntities: 2,
//       individuals: 3,
//     },
//     budget: 1_550_000,
//     winnerSelection: "В назначенный день",
//     approvals: [
//       {
//         id: 1,
//         name: "Сапамов С.Т.",
//         position: "Кладовщик",
//         approved: true,
//         approvedAt: "2026-08-11T10:45:00",
//       },
//       {
//         id: 2,
//         name: "Айтуров А.А.",
//         position: "ПТО проекта",
//         approved: true,
//         approvedAt: "2026-08-12T12:50:00",
//       },
//       {
//         id: 3,
//         name: "Нурсалимов П.П.",
//         position: "Отдел закупок",
//         approved: true,
//         approvedAt: "2026-08-12T17:44:00",
//       },
//     ],
//     items: [
//       {
//         id: 1,
//         name: "Алюминиевый профиль Т-образный",
//         model: "T 60×60×1,3 мм",
//         quantity: 2000,
//         unit: "м",
//       },
//       {
//         id: 2,
//         name: "Алюминиевый уголок",
//         model: "L 40×40×1,7 мм",
//         quantity: 3600,
//         unit: "шт.",
//       },
//       {
//         id: 3,
//         name: "Оцинкованный лист",
//         quantity: 5000,
//         unit: "м²",
//       },
//       {
//         id: 4,
//         name: "Заклепка D12×5 мм",
//         brand: "ExProf",
//         quantity: 500,
//         unit: "шт.",
//       },
//     ],
//     delivery: {
//       terms: [
//         {
//           positions: "1-8",
//           date: "23.08.2026",
//         },
//         {
//           positions: "9-13",
//           date: "01.09.2026",
//         },
//       ],
//       deliveryCondition: "Доставка от поставщика",
//       paymentCondition: "По согласованию с поставщиком",
//     },
//     attachments: [
//       {
//         id: 1,
//         name: "Документация по профилям.pdf",
//         url: "#",
//       },
//       {
//         id: 2,
//         name: "Документация по инструментам.pdf",
//         url: "#",
//       },
//       {
//         id: 3,
//         name: "ТЗ фасадные конструкции.pdf",
//         url: "#",
//       },
//     ],
//   },

//   {
//     id: 4,
//     number: "№0002913",
//     title: "Кабельная продукция для жилого комплекса",
//     object: "ЖК Grand Avenue",
//     city: "Астана",
//     status: "collecting_responses",
//     categories: [
//       "Электрика",
//       "Кабель",
//       "Инженерные сети",
//     ],
//     createdAt: "2026-08-06T09:15:00",
//     responseDeadline: "2026-08-18T12:00:00",
//     responsible: {
//       id: 4,
//       name: "Ибраев Д.К.",
//       position: "Инженер",
//     },
//     stats: {
//       responses: 7,
//       views: 52,
//     },
//     participants: {
//       legalEntities: 5,
//       individuals: 1,
//     },
//     budget: 5_200_000,
//     winnerSelection: "Минимальная цена",
//     approvals: [],
//     items: [
//       {
//         id: 1,
//         name: "Кабель ВВГнг 3×2.5",
//         quantity: 5000,
//         unit: "м",
//       },
//       {
//         id: 2,
//         name: "Кабель ВВГнг 5×6",
//         quantity: 1500,
//         unit: "м",
//       },
//     ],
//     delivery: {
//       terms: [
//         {
//           positions: "1-2",
//           date: "01.09.2026",
//         },
//       ],
//       deliveryCondition: "Доставка на склад заказчика",
//       paymentCondition: "Оплата после поставки",
//     },
//     attachments: [],
//   },

//   {
//     id: 5,
//     number: "№0002912",
//     title: "ТМЦ: фасадные конструкции и материалы",
//     object: "ЖК North Residence",
//     city: "Астана",
//     status: "collecting_responses",
//     categories: [
//       "Металлопрокат",
//       "Фасадная химия",
//       "Расходные материалы",
//       "Слаботочные сети",
//     ],
//     createdAt: "2026-08-07T11:20:00",
//     responseDeadline: "2026-08-19T10:00:00",
//     responsible: {
//       id: 5,
//       name: "Султанов М.А.",
//     },
//     stats: {
//       responses: 5,
//       additionalResponses: 2,
//       views: 36,
//     },
//     participants: {
//       legalEntities: 4,
//       individuals: 2,
//     },
//     budget: 6_400_000,
//     winnerSelection: "В назначенный день",
//     approvals: [],
//     items: [
//       {
//         id: 1,
//         name: "Фасадная панель",
//         quantity: 950,
//         unit: "м²",
//       },
//       {
//         id: 2,
//         name: "Кронштейн фасадный",
//         quantity: 2500,
//         unit: "шт.",
//       },
//     ],
//     delivery: {
//       terms: [
//         {
//           positions: "1-2",
//           date: "05.09.2026",
//         },
//       ],
//       deliveryCondition: "Доставка поставщиком",
//       paymentCondition: "Безналичный расчет",
//     },
//     attachments: [],
//   },

//   {
//     id: 6,
//     number: "№0002911",
//     title: "Поставка оконных конструкций",
//     object: "ЖК Green Park",
//     city: "Алматы",
//     status: "proposals_sent",
//     categories: [
//       "Окна",
//       "Алюминиевые конструкции",
//     ],
//     createdAt: "2026-08-08T15:10:00",
//     responseDeadline: "2026-08-20T18:00:00",
//     responsible: {
//       id: 6,
//       name: "Касымов Е.Н.",
//       position: "Руководитель проекта",
//     },
//     stats: {
//       responses: 0,
//       views: 1,
//     },
//     participants: {
//       legalEntities: 2,
//       individuals: 0,
//     },
//     budget: 9_800_000,
//     winnerSelection: "По итогам коммерческих предложений",
//     approvals: [],
//     items: [
//       {
//         id: 1,
//         name: "Алюминиевое окно",
//         quantity: 124,
//         unit: "шт.",
//       },
//     ],
//     delivery: {
//       terms: [
//         {
//           positions: "1",
//           date: "15.09.2026",
//         },
//       ],
//       deliveryCondition: "Монтаж включен",
//       paymentCondition: "50/50",
//     },
//     attachments: [],
//   },

//   {
//     id: 7,
//     number: "№0002910",
//     title: "Поставка и монтаж наружного видеонаблюдения",
//     object: "БЦ Capital Tower",
//     city: "Астана",
//     isPrivate: true,
//     status: "proposals_sent",
//     categories: [
//       "Слаботочные сети",
//       "Видеонаблюдение",
//     ],
//     createdAt: "2026-08-09T09:00:00",
//     responseDeadline: "2026-08-21T18:00:00",
//     responsible: {
//       id: 7,
//       name: "Баталгазиев Р.В.",
//       position: "Вы",
//     },
//     stats: {
//       responses: 0,
//       views: 1,
//     },
//     participants: {
//       legalEntities: 3,
//       individuals: 0,
//     },
//     budget: 4_250_000,
//     winnerSelection: "Комиссия",
//     approvals: [],
//     items: [
//       {
//         id: 1,
//         name: "IP камера 8MP",
//         brand: "Hikvision",
//         quantity: 32,
//         unit: "шт.",
//       },
//       {
//         id: 2,
//         name: "PoE коммутатор",
//         quantity: 4,
//         unit: "шт.",
//       },
//     ],
//     delivery: {
//       terms: [
//         {
//           positions: "1-2",
//           date: "10.09.2026",
//         },
//       ],
//       deliveryCondition: "Поставка и монтаж",
//       paymentCondition: "По факту выполненных работ",
//     },
//     attachments: [],
//   },

//   {
//     id: 8,
//     number: "№0002909",
//     title: "ТМЦ: фасадные системы и материалы",
//     object: "ЖК Riverside",
//     city: "Алматы",
//     status: "summing_up",
//     categories: [
//       "Стальные профили",
//       "Инструменты",
//     ],
//     createdAt: "2026-08-10T12:40:00",
//     resultsDate: "2026-08-24",
//     responsible: {
//       id: 8,
//       name: "Султанов А.Р.",
//     },
//     stats: {
//       responses: 13,
//       views: 106,
//     },
//     participants: {
//       legalEntities: 8,
//       individuals: 2,
//     },
//     budget: 8_900_000,
//     winnerSelection: "Комиссионный отбор",
//     approvals: [],
//     items: [
//       {
//         id: 1,
//         name: "Стальной профиль",
//         quantity: 3500,
//         unit: "м",
//       },
//       {
//         id: 2,
//         name: "Монтажный инструмент",
//         quantity: 25,
//         unit: "компл.",
//       },
//     ],
//     delivery: {
//       terms: [
//         {
//           positions: "1-2",
//           date: "15.09.2026",
//         },
//       ],
//       deliveryCondition: "Самовывоз",
//       paymentCondition: "Оплата в течение 10 рабочих дней",
//     },
//     attachments: [],
//   },

//   {
//     id: 9,
//     number: "№0002908",
//     title: "Материалы для отделки входных групп",
//     object: "ЖК Apple City",
//     city: "Алматы",
//     status: "deal_approval",
//     categories: [
//       "Отделочные материалы",
//       "Керамогранит",
//     ],
//     createdAt: "2026-08-11T14:30:00",
//     responsible: {
//       id: 9,
//       name: "Жумабеков К.Т.",
//     },
//     stats: {
//       responses: 9,
//       views: 68,
//     },
//     participants: {
//       legalEntities: 6,
//       individuals: 0,
//     },
//     budget: 7_350_000,
//     winnerSelection: "Победитель выбран",
//     approvals: [
//       {
//         id: 1,
//         name: "Омаров А.К.",
//         position: "Финансовый директор",
//         approved: false,
//       },
//     ],
//     items: [
//       {
//         id: 1,
//         name: "Керамогранит 600×600",
//         quantity: 1200,
//         unit: "м²",
//       },
//     ],
//     delivery: {
//       terms: [
//         {
//           positions: "1",
//           date: "20.09.2026",
//         },
//       ],
//       deliveryCondition: "На объект",
//       paymentCondition: "По договору",
//     },
//     attachments: [],
//   },

//   {
//     id: 10,
//     number: "№0002907",
//     title: "Системы вентиляции паркинга",
//     object: "ЖК Central Residence",
//     city: "Алматы",
//     status: "approval",
//     categories: [
//       "Вентиляция",
//       "ОВиК",
//     ],
//     createdAt: "2026-08-12T08:45:00",
//     responsible: {
//       id: 10,
//       name: "Ермеков А.Н.",
//     },
//     stats: {
//       responses: 0,
//       views: 12,
//     },
//     participants: {
//       legalEntities: 1,
//       individuals: 0,
//     },
//     budget: 12_500_000,
//     winnerSelection: "После согласования",
//     approvals: [
//       {
//         id: 1,
//         name: "Тлеубаев М.К.",
//         position: "Главный инженер",
//         approved: true,
//       },
//       {
//         id: 2,
//         name: "Иманбаев Д.С.",
//         position: "Финансовый отдел",
//         approved: false,
//       },
//     ],
//     items: [
//       {
//         id: 1,
//         name: "Вентилятор дымоудаления",
//         quantity: 8,
//         unit: "шт.",
//       },
//     ],
//     delivery: {
//       terms: [
//         {
//           positions: "1",
//           date: "30.09.2026",
//         },
//       ],
//       deliveryCondition: "Поставка на объект",
//       paymentCondition: "30 дней после поставки",
//     },
//     attachments: [],
//   },

//   {
//     id: 11,
//     number: "№0002906",
//     title: "Закуп лакокрасочных материалов",
//     object: "ЖК Nova City",
//     city: "Алматы",
//     status: "collecting_responses",
//     categories: [
//       "Краски",
//       "Расходные материалы",
//     ],
//     createdAt: "2026-08-13T13:20:00",
//     responseDeadline: "2026-08-22T17:00:00",
//     responsible: {
//       id: 11,
//       name: "Сериков Б.М.",
//     },
//     stats: {
//       responses: 4,
//       views: 29,
//     },
//     participants: {
//       legalEntities: 4,
//       individuals: 1,
//     },
//     budget: 980_000,
//     winnerSelection: "Минимальная цена",
//     approvals: [],
//     items: [
//       {
//         id: 1,
//         name: "Краска интерьерная",
//         quantity: 120,
//         unit: "вед.",
//       },
//       {
//         id: 2,
//         name: "Грунтовка",
//         quantity: 80,
//         unit: "вед.",
//       },
//     ],
//     delivery: {
//       terms: [
//         {
//           positions: "1-2",
//           date: "28.08.2026",
//         },
//       ],
//       deliveryCondition: "Доставка поставщиком",
//       paymentCondition: "100% после поставки",
//     },
//     attachments: [],
//   },

//   {
//     id: 12,
//     number: "№0002905",
//     title: "Лифтовое оборудование для второй очереди",
//     object: "ЖК Avenue Park",
//     city: "Астана",
//     status: "summing_up",
//     categories: [
//       "Лифтовое оборудование",
//       "Инженерные системы",
//     ],
//     createdAt: "2026-08-14T09:30:00",
//     resultsDate: "2026-08-28",
//     responsible: {
//       id: 12,
//       name: "Тасболатов Д.М.",
//     },
//     stats: {
//       responses: 6,
//       views: 84,
//     },
//     participants: {
//       legalEntities: 6,
//       individuals: 0,
//     },
//     budget: 48_000_000,
//     winnerSelection: "Тендерная комиссия",
//     approvals: [],
//     items: [
//       {
//         id: 1,
//         name: "Пассажирский лифт 1000 кг",
//         quantity: 4,
//         unit: "шт.",
//       },
//     ],
//     delivery: {
//       terms: [
//         {
//           positions: "1",
//           date: "15.11.2026",
//         },
//       ],
//       deliveryCondition: "Поставка, монтаж и пусконаладка",
//       paymentCondition: "По графику договора",
//     },
//     attachments: [],
//   },

//   {
//     id: 13,
//     number: "№0002904",
//     title: "Мебель для офиса управляющей компании",
//     object: "Business Center Prime",
//     city: "Алматы",
//     isPrivate: true,
//     status: "archived",
//     categories: [
//       "Мебель",
//       "Офис",
//     ],
//     createdAt: "2026-07-22T11:00:00",
//     responsible: {
//       id: 13,
//       name: "Нуртаев А.М.",
//     },
//     stats: {
//       responses: 8,
//       views: 43,
//     },
//     participants: {
//       legalEntities: 5,
//       individuals: 0,
//     },
//     budget: 3_100_000,
//     winnerSelection: "Завершено",
//     approvals: [],
//     items: [
//       {
//         id: 1,
//         name: "Рабочий стол",
//         quantity: 24,
//         unit: "шт.",
//       },
//       {
//         id: 2,
//         name: "Офисное кресло",
//         quantity: 24,
//         unit: "шт.",
//       },
//     ],
//     delivery: {
//       terms: [
//         {
//           positions: "1-2",
//           date: "15.08.2026",
//         },
//       ],
//       deliveryCondition: "Доставка и сборка",
//       paymentCondition: "Оплачено",
//     },
//     attachments: [],
//   },

//   {
//     id: 14,
//     number: "№0002903",
//     title: "Сухие строительные смеси",
//     object: "ЖК Alatau Hills",
//     city: "Алматы",
//     status: "completed",
//     categories: [
//       "Строительные смеси",
//       "Черновые материалы",
//     ],
//     createdAt: "2026-07-25T16:15:00",
//     responsible: {
//       id: 14,
//       name: "Рахимов Т.Е.",
//     },
//     stats: {
//       responses: 11,
//       views: 97,
//     },
//     participants: {
//       legalEntities: 7,
//       individuals: 2,
//     },
//     budget: 2_870_000,
//     winnerSelection: "Победитель определен",
//     approvals: [],
//     items: [
//       {
//         id: 1,
//         name: "Штукатурная смесь",
//         quantity: 900,
//         unit: "меш.",
//       },
//       {
//         id: 2,
//         name: "Шпаклевка финишная",
//         quantity: 650,
//         unit: "меш.",
//       },
//     ],
//     delivery: {
//       terms: [
//         {
//           positions: "1-2",
//           date: "20.08.2026",
//         },
//       ],
//       deliveryCondition: "Доставка на объект",
//       paymentCondition: "Оплачено",
//     },
//     attachments: [],
//   },

//   {
//     id: 15,
//     number: "№0002902",
//     title: "Освещение общественных зон",
//     object: "ЖК Panorama",
//     city: "Алматы",
//     status: "draft",
//     categories: [
//       "Освещение",
//       "Электрика",
//       "Дизайн",
//     ],
//     createdAt: "2026-08-15T10:10:00",
//     responsible: {
//       id: 15,
//       name: "Каримов Р.Н.",
//     },
//     stats: {
//       responses: 0,
//       views: 0,
//     },
//     participants: {
//       legalEntities: 0,
//       individuals: 0,
//     },
//     budget: 4_600_000,
//     winnerSelection: "Не определено",
//     approvals: [],
//     items: [
//       {
//         id: 1,
//         name: "Светильник потолочный",
//         quantity: 180,
//         unit: "шт.",
//       },
//       {
//         id: 2,
//         name: "Настенный светильник",
//         quantity: 70,
//         unit: "шт.",
//       },
//     ],
//     delivery: {
//       terms: [],
//       deliveryCondition: "Не указано",
//       paymentCondition: "Не указано",
//     },
//     attachments: [],
//   },
// ];


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
    responsible: {
      id: 2,
      name: "Баталгазиев Р.В.",
      position: "Отдел закупок",
    },
    stats: {
      responses: 2,
      views: 18,
    },
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
    responsible: {
      id: 4,
      name: "Ибраев Д.К.",
      position: "Инженер",
    },
    stats: {
      responses: 7,
      views: 52,
    },
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
    responsible: {
      id: 5,
      name: "Султанов М.А.",
    },
    stats: {
      responses: 5,
      additionalResponses: 2,
      views: 36,
    },
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
    responsible: {
      id: 6,
      name: "Касымов Е.Н.",
      position: "Руководитель проекта",
    },
    stats: {
      responses: 0,
      views: 1,
    },
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
    responsible: {
      id: 7,
      name: "Баталгазиев Р.В.",
      position: "Вы",
    },
    stats: {
      responses: 0,
      views: 1,
    },
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
    responsible: {
      id: 9,
      name: "Жумабеков К.Т.",
    },
    stats: {
      responses: 9,
      views: 68,
    },
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
    responsible: {
      id: 10,
      name: "Ермеков А.Н.",
    },
    stats: {
      responses: 0,
      views: 12,
    },
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
    responsible: {
      id: 11,
      name: "Сериков Б.М.",
    },
    stats: {
      responses: 4,
      views: 29,
    },
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

/**
 * Детализация просмотров заявки.
 * Вынесена отдельно, чтобы не менять существующую структуру Lead/leadsMock.
 */
export type LeadViewMock = {
  id: number;
  companyName: string;
  viewedAt: string;
  isFavorite: boolean;
};

export const leadViewsMock: Record<number, LeadViewMock[]> = {
  3: [
    {
      id: 1,
      companyName: "ТОО «Стройтех Пик Алматы»",
      viewedAt: "2026-08-29T17:45:00",
      isFavorite: false,
    },
    {
      id: 2,
      companyName: "ТОО «Алматы Строй Проект»",
      viewedAt: "2026-08-29T17:32:00",
      isFavorite: false,
    },
    {
      id: 3,
      companyName: "ТОО «Гранд Билд Алматы»",
      viewedAt: "2026-08-29T16:58:00",
      isFavorite: false,
    },
    {
      id: 4,
      companyName: "ТОО «КазСтрой Инжиниринг»",
      viewedAt: "2026-08-28T15:41:00",
      isFavorite: false,
    },
    {
      id: 5,
      companyName: "ТОО «Монолит Групп KZ»",
      viewedAt: "2026-08-28T14:27:00",
      isFavorite: false,
    },
    {
      id: 6,
      companyName: "ТОО «Альянс Строй Сервис»",
      viewedAt: "2026-08-28T13:50:00",
      isFavorite: false,
    },
    {
      id: 7,
      companyName: "ТОО «Премиум Билд Алматы»",
      viewedAt: "2026-08-28T12:16:00",
      isFavorite: false,
    },
    {
      id: 8,
      companyName: "ТОО «СтройСити Казахстан»",
      viewedAt: "2026-08-25T11:34:00",
      isFavorite: false,
    },
    {
      id: 9,
      companyName: "ТОО «Орда Құрылыс Алматы»",
      viewedAt: "2026-08-25T10:05:00",
      isFavorite: false,
    },
  ],
};

/**
 * Позиция в отклике поставщика.
 */
export type LeadResponseItemMock = {
  id: number;
  name: string;
  model?: string;
  quantity: number;
  unit: string;
  pricePerUnit: number;
  total: number;
  isAlternative?: boolean;
};

/**
 * Детализация отклика поставщика.
 */
export type LeadResponseMock = {
  id: number;
  supplier: {
    id: number;
    name: string;
    rating: number;
    reliability: number;
  };
  respondedAt: string;
  positions: {
    offered: number;
    total: number;
  };
  subtotal: number;
  deliveryCost: number;
  totalWithDelivery: number;
  items: LeadResponseItemMock[];
};

export const leadResponsesMock: Record<number, LeadResponseMock[]> = {
  3: [
    {
      id: 1,
      supplier: {
        id: 101,
        name: "ТОО «ЭкоСтрой Сервис»",
        rating: 4.5,
        reliability: 95,
      },
      respondedAt: "2026-08-21T19:45:00",
      positions: {
        offered: 40,
        total: 45,
      },
      subtotal: 4_990_000,
      deliveryCost: 150_000,
      totalWithDelivery: 5_140_000,
      items: [
        {
          id: 1,
          name: "Алюминиевый профиль Т-образный",
          model: "T 60×60×1,3 мм",
          quantity: 2000,
          unit: "м",
          pricePerUnit: 300,
          total: 600_000,
        },
        {
          id: 2,
          name: "Алюминиевый уголок",
          model: "L 40×40×1,7 мм",
          quantity: 2000,
          unit: "м",
          pricePerUnit: 450,
          total: 900_000,
        },
        {
          id: 3,
          name: "Оцинкованный гнутый L",
          model: "1,85×50×1,3 мм",
          quantity: 2000,
          unit: "м",
          pricePerUnit: 380,
          total: 760_000,
        },
        {
          id: 4,
          name: "Оцинкованный лист рифлёный / Кронштейн",
          model: "~0,45 мм",
          quantity: 500,
          unit: "шт.",
          pricePerUnit: 1200,
          total: 600_000,
        },
        {
          id: 5,
          name: "Заклёпка D12×5 мм",
          model: "ExProf",
          quantity: 500,
          unit: "шт.",
          pricePerUnit: 520,
          total: 260_000,
        },
        {
          id: 6,
          name: "Заслон на батарею D125 мм",
          model: "120×5,47×2,23 мм",
          quantity: 1000,
          unit: "шт.",
          pricePerUnit: 800,
          total: 800_000,
        },
        {
          id: 7,
          name: "Заглушка выпускного отверстия",
          model: "Аналог, Kurff, 4.8×12",
          quantity: 2000,
          unit: "шт.",
          pricePerUnit: 450,
          total: 900_000,
          isAlternative: true,
        },
        {
          id: 8,
          name: "Праймер",
          model: "PENOSIL SG-565",
          quantity: 100,
          unit: "шт.",
          pricePerUnit: 2800,
          total: 280_000,
        },
        {
          id: 9,
          name: "Праймер",
          model: "SANZ PRIMER DT-22-B, 500 мл",
          quantity: 100,
          unit: "шт.",
          pricePerUnit: 3500,
          total: 350_000,
        },
        {
          id: 10,
          name: "Алюминиевый профиль Т-образный",
          model: "Аналог, Kurff Activator QF-10A, 250 мл",
          quantity: 100,
          unit: "шт.",
          pricePerUnit: 3200,
          total: 320_000,
          isAlternative: true,
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
      respondedAt: "2026-08-21T17:20:00",
      positions: {
        offered: 45,
        total: 45,
      },
      subtotal: 5_180_000,
      deliveryCost: 0,
      totalWithDelivery: 5_180_000,
      items: [],
    },
    {
      id: 3,
      supplier: {
        id: 103,
        name: "ТОО «Монолит Групп KZ»",
        rating: 4.3,
        reliability: 91,
      },
      respondedAt: "2026-08-21T15:05:00",
      positions: {
        offered: 42,
        total: 45,
      },
      subtotal: 4_875_000,
      deliveryCost: 240_000,
      totalWithDelivery: 5_115_000,
      items: [],
    },
    {
      id: 4,
      supplier: {
        id: 104,
        name: "ТОО «Алматы Строй Проект»",
        rating: 4.6,
        reliability: 94,
      },
      respondedAt: "2026-08-20T18:30:00",
      positions: {
        offered: 38,
        total: 45,
      },
      subtotal: 4_760_000,
      deliveryCost: 310_000,
      totalWithDelivery: 5_070_000,
      items: [],
    },
  ],
};

