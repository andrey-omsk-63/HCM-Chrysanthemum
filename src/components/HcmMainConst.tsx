export const YMapsModul = ['multiRouter.MultiRoute', 'Polyline', 'templateLayoutFactory'];

export const MyYandexKey = '65162f5f-2d15-41d1-a881-6c1acf34cfa1'; // ключ

export const ZONE = 1; // район для работы (0 - все районы)

export const SUMPK = 121; // количество планов координации

export const MaxFaz = 8; // максимальное количество фаз

export const KolFrom = 4; // количество исходящих направлений

export const KolIn = 5; // количество входящих направлений

export const INCOM = 'Вх.'; // название входяшего напраления

export const OUTGO = 'Исх.'; // название исходяшего напраления

export const CLINCH: Array<number> = [
  // список аварийных кодов
  3, // Перекресток работает в Ручном режиме
  8, // Ручное управление ЖМ
  13, // Светофор отключен в ручном режиме
  16, // Авария 220В
  17, // Выключен УСДК
  18, // Нет связи с УСДК
  19, // Нет связи с ПСПД
  20, // Обрыв линии связи
  22, // Базовая привязка
  24, // Коррекция привязки
  28, // Обрыв линии связи
  29, // Негоден по паритету
  30, // ОС конфликт
  32, // ЖМ по перегоранию
  35, // Не подчинение командам
  38, // Нет информации
];

export const baseURL = 'https://user-permissions-api.hcm.ls-dev.ru/'; // адрес сервера
//export const baseURL = 'https://localhost/'; // адрес сервера

export const UNIT: Array<any> = [
  {
    lev1: 'Трест столовых и ресторанов',
    lev2: 'Столовая №3',
    lev3: 'Бухгалтерия',
  },
  {
    lev1: 'Трест столовых и ресторанов',
    lev2: 'Столовая №3',
    lev3: 'Работники зала',
  },
  {
    lev1: 'Трест столовых и ресторанов',
    lev2: 'Ресторан «Вечерние зори»',
    lev3: 'Кухня',
  },
  {
    lev1: 'Трест столовых и ресторанов',
    lev2: 'Ресторан «Вечерние зори»',
    lev3: 'Бухгалтерия',
  },
  {
    lev1: 'Трест столовых и ресторанов',
    lev2: 'Ресторан «Вечерние зори»',
    lev3: 'Официанты',
  },
  {
    lev1: 'Трест столовых и ресторанов',
    lev2: 'Столовая №3',
    lev3: 'Кухня',
  },

  {
    lev1: 'ООО  «Рога и капыта»',
    lev2: 'Подразделение #4',
    lev3: 'Отдел работы с китайцами',
  },
  {
    lev1: 'ООО  «Рога и капыта»',
    lev2: 'Подразделение #3',
    lev3: 'Ещё какой-то отдел',
  },
  {
    lev1: 'ООО  «Рога и капыта»',
    lev2: 'Подразделение #4',
    lev3: 'Отдел перепродаж',
  },
  {
    lev1: 'ООО  «Рога и капыта»',
    lev2: 'Основное подразделение',
    lev3: 'ИТ отдел',
  },
  {
    lev1: 'ООО  «Рога и капыта»',
    lev2: 'Основное подразделение',
    lev3: 'Бухгалтерия',
  },
  {
    lev1: 'ООО  «Рога и капыта»',
    lev2: 'Основное подразделение',
    lev3: 'Техотдел',
  },
  {
    lev1: 'ООО  «Рога и капыта»',
    lev2: 'Основное подразделение',
    lev3: 'Плановый отдел',
  },
  {
    lev1: 'ООО  «Рога и капыта»',
    lev2: 'Не основное подразделение',
    lev3: 'Хозвзвод',
  },
  {
    lev1: 'ООО  «Рога и капыта»',
    lev2: 'Не основное подразделение',
    lev3: 'Гараж',
  },
  {
    lev1: 'ООО  «Рога и капыта»',
    lev2: 'Не основное подразделение',
    lev3: 'Охрана',
  },
  {
    lev1: 'ООО  «Рога и капыта»',
    lev2: 'Основное подразделение',
    lev3: 'Отдел маркетинга',
  },
  {
    lev1: 'ООО  «Рога и капыта»',
    lev2: 'Подразделение #3',
    lev3: 'Отдел маркетинга',
  },

  {
    lev1: 'Трест столовых и ресторанов',
    lev2: 'Пивнушка «Жигули»',
    lev3: 'Бухгалтерия',
  },
  {
    lev1: 'Трест столовых и ресторанов',
    lev2: 'Пивнушка «Жигули»',
    lev3: 'Официанты',
  },
  {
    lev1: 'Трест столовых и ресторанов',
    lev2: 'Пивнушка «Жигули»',
    lev3: 'Кухня',
  },
  {
    lev1: 'Трест столовых и ресторанов',
    lev2: 'Чайхана «Три верблюда»',
    lev3: 'Кухня',
  },
  {
    lev1: 'Трест столовых и ресторанов',
    lev2: 'Чайхана «Три верблюда»',
    lev3: 'Официанты',
  },
];
