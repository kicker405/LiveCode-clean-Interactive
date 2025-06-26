const TOOLTIPCONSTANTS = [
  //id должен быть порядковым (1, 2, 3 ...)
  {
    id: 0,
    elementH2: 'Используй навигационную панель',
    elementText: 'Навигационная панель специально для ваших удобств. Можете быстро перемещаться по странице, кликнув на нужный элемент страницы. Кроме того, есть возможность поиска нужного элемента)  ',
    arrowType: 'top',
    elementId: 'headerId',
    styles: {
      position: "absolute",
      transform: "translate(-8%, 23%)",
    }
  },
  {
    id: 1,
    elementH2: 'Календарь',
    elementText: 'Есть календарь с сегоднящней датой. Можно переключать месяцы, всё работает)',
    arrowType: 'top',
    elementId: 'calendarId',
    styles: {
      position: "absolute",
      transform: "translate(-21%, 180%)",
    }
  },
  {
    id: 2,
    elementH2: 'Скважина, там нефть!',
    elementText: 'И вся остальная информация по скважине. Кроме того, имеется возможность выбрать определённое мероприятие, которое интересует вас на этой скважине.',
    arrowType: '',
    elementId: 'cardId',
    styles: {
      position: "absolute",
      transform: "translate(6%, 24%)"
    }
  },
  {
    id: 3,
    elementH2: 'Слайдер',
    elementText: 'Карточек может быть много, так что только для вас есть возможность прокручивать список скважин. Либо листать по одной стрелочками справа)',
    arrowType: 'top',
    elementId: 'wellBoardId',
    styles: {
      position: "absolute",
      transform: "translate(206%, 160%)"
    }
  },
  {
    id: 4,
    elementH2: 'Отчеты',
    elementText: 'Здесь покоятся наши отчёты по кликнутой скважине. Все, что нужно для анализа! ',
    arrowType: 'bottom',
    elementId: 'reportId',
    styles: {
      position: "absolute",
      transform: "translate(187%, 24%)"
    }
  },
  {
    id: 5,
    elementH2: 'Фильтры отчётов',
    elementText: 'Мы, программисты, - ленивые люди, так что для вас создали фильтры отчётов, дабы сделать вашу жизнь веселеее. Можете кликать на типы отчётов и будет магия!:)',
    arrowType: 'left',
    elementId: 'reportFiltersId',
    styles: {
      position: "absolute",
      transform: "translate(31%, 22%)"
    }
  }
];

export default TOOLTIPCONSTANTS;