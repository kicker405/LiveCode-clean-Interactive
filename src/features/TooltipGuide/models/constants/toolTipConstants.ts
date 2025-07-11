import { TToolTipData } from "../types/tooltipComponent";

const TOOLTIPCONSTANTS: TToolTipData[] = [
  {
    elementTitle: 'Используй навигационную панель',
    elementText:
      'Навигационная панель специально для ваших удобств. Можете быстро перемещаться по странице, кликнув на нужный элемент страницы. Кроме того, есть возможность поиска нужного элемента)  ',
    arrowType: 'top',
    elementId: 'headerId',
    styles: {
      x: 123,
      y: 225,
      r: 50,
      background: '',
      color: '',
    },
    type: 'square',
  },
  {
    elementTitle: 'Календарь',
    elementText:
      'Есть календарь с сегоднящней датой. Можно переключать месяцы, всё работает)',
    arrowType: 'top',
    elementId: 'calendarId',
    styles: {
      x: 123,
      y: 225,
      r: 50,
      background: '',
      color: '',
    },
    type: 'square',
  },
  {
    elementTitle: 'Скважина, там нефть!',
    elementText:
      'И вся остальная информация по скважине. Кроме того, имеется возможность выбрать определённое мероприятие, которое интересует вас на этой скважине.',
    arrowType: '',
    elementId: 'cardId',
    styles: {
      x: 123,
      y: 225,
      r: 50,
      background: '',
      color: '',
    },
    type: 'square',
  },
  {
    elementTitle: 'Слайдер',
    elementText:
      'Карточек может быть много, так что только для вас есть возможность прокручивать список скважин. Либо листать по одной стрелочками справа)',
    arrowType: 'top',
    elementId: 'wellBoardId',
    styles: {
      x: 123,
      y: 225,
      r: 50,
      background: '',
      color: '',
    },
    type: 'square',
  },
  {
    elementTitle: 'Отчеты',
    elementText:
      'Здесь покоятся наши отчёты по кликнутой скважине. Все, что нужно для анализа! ',
    arrowType: 'bottom',
    elementId: 'reportId',
    styles: {
      x: 123,
      y: 225,
      r: 50,
      background: '',
      color: '',
    },
    type: 'square',
  },
  {
    elementTitle: 'Фильтры отчётов',
    elementText:
      'Мы, программисты, - ленивые люди, так что для вас создали фильтры отчётов, дабы сделать вашу жизнь веселеее. Можете кликать на типы отчётов и будет магия!:)',
    arrowType: 'left',
    elementId: 'reportFiltersId',
    styles: {
      x: 123,
      y: 225,
      r: 50,
      background: '',
      color: '',
    },
    type: 'square',
  },
];

export default TOOLTIPCONSTANTS;
