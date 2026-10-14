

import type { Deal } from "../_types/deal.types"



export const dealsMock: Deal[] = [

    {

        id: 1,

        number: 'DL-0012458',

        residentialComplex: 'ЖК «Нурлы Болашак»',

        responsible: 'Алимбаев А. Е.',

        request: {

            number: 'RQ-0003741',

            title: 'Электромонтажные материалы',

            type: 'full',

        },

        supplier: {

            id: 1,

            name: 'ТОО «АлмаСтройИнжиниринг»',

        },

        amount: 4280500,

        budget: 5600000,

        deviationPercent: 23.6,

        paid: 0,

        status: 'approval',
        approvals: [
            { id: 1, fullName: 'Садыков С. Т.', position: 'Отдел закупок', status: 'approved', approvedAt: '2026-10-13T11:30:00' },
            { id: 2, fullName: 'Нурисламов П. П.', position: 'Руководитель', status: 'pending', approvedAt: null },
        ],

        positions: { completed: 0, total: 3 },

        responses: { received: 1, total: 2 },

        createdAt: '2026-10-13',

    },

    {

        id: 2,

        number: 'DL-0012443',

        residentialComplex: 'ЖК «Нурлы Болашак»',

        responsible: 'Алимбаев А. Е.',

        request: {

            number: 'RQ-0003726',

            title: 'Материалы для кровли',

            type: 'partial',

        },

        supplier: {

            id: 1,

            name: 'ТОО «АлмаСтройИнжиниринг»',

        },

        amount: 7659890,

        budget: 9000000,

        deviationPercent: 14.9,

        paid: 3500000,

        status: 'in_progress',

        positions: { completed: 1, total: 3 },

        responses: { received: 1, total: 2 },

        createdAt: '2026-10-12',

    },

    {

        id: 3,

        number: 'DL-0012443-2',

        residentialComplex: 'ЖК «Нурлы Болашак»',

        responsible: 'Алимбаев А. Е.',

        request: {

            number: 'RQ-0003726',

            title: 'Материалы для кровли',

            type: 'partial',

        },

        supplier: {

            id: 2,

            name: 'ТОО «Стройком Плюс Алматы»',

        },

        amount: 5340030,

        budget: 9000000,

        deviationPercent: 40.7,

        paid: 3500000,

        status: 'in_progress',

        positions: { completed: 0, total: 3 },

        responses: { received: 1, total: 2 },

        createdAt: '2026-10-12',

    },

    {

        id: 4,

        number: 'DL-0012435',

        residentialComplex: 'ЖК «Нурлы Аспан»',

        responsible: 'Аутуров А. А.',

        request: {

            number: 'RQ-0003690',

            title: 'Поставка и монтаж оборудования',

            type: 'full',

        },

        supplier: {

            id: 2,

            name: 'ТОО «Стройком Плюс Алматы»',

        },

        amount: 2500000,

        budget: null,

        deviationPercent: null,

        paid: 0,

        status: 'awaiting_payment',

        positions: { completed: 1, total: 3 },

        responses: { received: 1, total: 2 },

        createdAt: '2026-10-11',

    },

    {

        id: 5,

        number: 'DL-0011542',

        residentialComplex: 'ЖК «Нурлы Болашак»',

        responsible: 'Аутуров А. А.',

        request: {

            number: 'RQ-0003600',

            title: 'Поставка и монтаж оборудования',

            type: 'full',

        },

        supplier: {

            id: 1,

            name: 'ТОО «АлмаСтройИнжиниринг»',

        },

        amount: 3200000,

        budget: null,

        deviationPercent: null,

        paid: 0,

        status: 'payment_overdue',

        positions: { completed: 0, total: 3 },

        responses: { received: 0, total: 2 },

        createdAt: '2026-10-10',

    },

    {

        id: 6,

        number: 'DL-0011539',

        residentialComplex: 'ЖК «Нурлы Болашак»',

        responsible: 'Алимбаев А. Е.',

        request: {

            number: 'RQ-0003726',

            title: 'Материалы для кровли',

            type: 'full',

        },

        supplier: {

            id: 2,

            name: 'ТОО «Стройком Плюс Алматы»',

        },

        amount: 6330980,

        budget: 8000000,

        deviationPercent: 20.9,

        paid: 6330980,

        status: 'closed',

        positions: { completed: 3, total: 3 },

        responses: { received: 2, total: 2 },

        createdAt: '2026-10-09',

    },

    {

        id: 7,

        number: 'DL-0011538',

        residentialComplex: 'ЖК «Алтын Орда»',

        responsible: 'Сериков М. К.',

        request: {

            number: 'RQ-0003725',

            title: 'Бетон и железобетонные изделия',

            type: 'full',

        },

        supplier: {

            id: 3,

            name: 'ТОО «БетонСтрой KZ»',

        },

        amount: 8750000,

        budget: 9500000,

        deviationPercent: 7.9,

        paid: 3000000,

        status: 'in_progress',

        positions: { completed: 2, total: 5 },

        responses: { received: 3, total: 4 },

        createdAt: '2026-10-09',

    },

    {

        id: 8,

        number: 'DL-0011537',

        residentialComplex: 'ЖК «Нурлы Аспан»',

        responsible: 'Аутуров А. А.',

        request: {

            number: 'RQ-0003724',

            title: 'Сантехническое оборудование',

            type: 'partial',

        },

        supplier: {

            id: 4,

            name: 'ТОО «Aqua Engineering»',

        },

        amount: 4120000,

        budget: 4800000,

        deviationPercent: 14.2,

        paid: 0,

        status: 'approval',
        approvals: [
            { id: 3, fullName: 'Садыков С. Т.', position: 'Отдел закупок', status: 'pending', approvedAt: null },
            { id: 4, fullName: 'Нурисламов П. П.', position: 'Руководитель', status: 'pending', approvedAt: null },
        ],

        positions: { completed: 0, total: 4 },

        responses: { received: 1, total: 3 },

        createdAt: '2026-10-08',

    },

    {

        id: 9,

        number: 'DL-0011536',

        residentialComplex: 'ЖК «Коктем Residence»',

        responsible: 'Исмаилов Р. Н.',

        request: {

            number: 'RQ-0003723',

            title: 'Фасадные материалы',

            type: 'full',

        },

        supplier: {

            id: 5,

            name: 'ТОО «Фасад Групп»',

        },

        amount: 12350000,

        budget: 14000000,

        deviationPercent: 11.8,

        paid: 5000000,

        status: 'in_progress',

        positions: { completed: 3, total: 7 },

        responses: { received: 2, total: 3 },

        createdAt: '2026-10-08',

    },

    {

        id: 10,

        number: 'DL-0011535',

        residentialComplex: 'ЖК «Алтын Орда»',

        responsible: 'Сериков М. К.',

        request: {

            number: 'RQ-0003722',

            title: 'Кабельная продукция',

            type: 'full',

        },

        supplier: {

            id: 6,

            name: 'ТОО «ЭлектроКомплект»',

        },

        amount: 1860000,

        budget: 2200000,

        deviationPercent: 15.5,

        paid: 1860000,

        status: 'closed',

        positions: { completed: 4, total: 4 },

        responses: { received: 3, total: 3 },

        createdAt: '2026-10-07',

    },

    {

        id: 11,

        number: 'DL-0011534',

        residentialComplex: 'ЖК «Нурлы Болашак»',

        responsible: 'Алимбаев А. Е.',

        request: {

            number: 'RQ-0003721',

            title: 'Сухие строительные смеси',

            type: 'partial',

        },

        supplier: {

            id: 7,

            name: 'ТОО «СтройМаркет KZ»',

        },

        amount: 2980000,

        budget: 3500000,

        deviationPercent: 14.9,

        paid: 0,

        status: 'awaiting_payment',

        positions: { completed: 1, total: 4 },

        responses: { received: 2, total: 3 },

        createdAt: '2026-10-07',

    },

    {

        id: 12,

        number: 'DL-0011533',

        residentialComplex: 'ЖК «Коктем Residence»',

        responsible: 'Исмаилов Р. Н.',

        request: {

            number: 'RQ-0003720',

            title: 'Металлоконструкции',

            type: 'full',

        },

        supplier: {

            id: 8,

            name: 'ТОО «МеталлПром Алматы»',

        },

        amount: 15200000,

        budget: 16000000,

        deviationPercent: 5,

        paid: 7000000,

        status: 'in_progress',

        positions: { completed: 2, total: 6 },

        responses: { received: 1, total: 2 },

        createdAt: '2026-10-06',

    },

    {

        id: 13,

        number: 'DL-0011532',

        residentialComplex: 'ЖК «Нурлы Аспан»',

        responsible: 'Аутуров А. А.',

        request: {

            number: 'RQ-0003719',

            title: 'Отделочные материалы',

            type: 'partial',

        },

        supplier: {

            id: 9,

            name: 'ТОО «Decor Build»',

        },

        amount: 1750000,

        budget: 2000000,

        deviationPercent: 12.5,

        paid: 0,

        status: 'cancelled',

        positions: { completed: 0, total: 3 },

        responses: { received: 1, total: 2 },

        createdAt: '2026-10-06',

    },

    {

        id: 14,

        number: 'DL-0011531',

        residentialComplex: 'ЖК «Алтын Орда»',

        responsible: 'Сериков М. К.',

        request: {

            number: 'RQ-0003718',

            title: 'Системы вентиляции',

            type: 'full',

        },

        supplier: {

            id: 10,

            name: 'ТОО «Climate Systems KZ»',

        },

        amount: 6740000,

        budget: 7500000,

        deviationPercent: 10.1,

        paid: 2000000,

        status: 'in_progress',

        positions: { completed: 2, total: 5 },

        responses: { received: 2, total: 4 },

        createdAt: '2026-10-05',

    },

    {

        id: 15,

        number: 'DL-0011530',

        residentialComplex: 'ЖК «Коктем Residence»',

        responsible: 'Исмаилов Р. Н.',

        request: {

            number: 'RQ-0003717',

            title: 'Двери и оконные конструкции',

            type: 'full',

        },

        supplier: {

            id: 11,

            name: 'ТОО «Окна Профи»',

        },

        amount: 5460000,

        budget: 6200000,

        deviationPercent: 11.9,

        paid: 5460000,

        status: 'closed',

        positions: { completed: 5, total: 5 },

        responses: { received: 3, total: 3 },

        createdAt: '2026-10-04',

    },

]
