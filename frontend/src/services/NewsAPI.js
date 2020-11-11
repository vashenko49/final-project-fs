export default class NewsAPI {
  static widthMock = mockData =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockData || {});
      }, 3000);
    });

  static getNews = () => {
    const mockData = {
      headerFirst: 'Доступне місце розташування!',
      contentFirst:
        'Вітаємо клієнтів MARKSEM! MARKSEM відкриває нове місце на березі мальовничого озера в Карпатах. У новому місці також з’являться нові розваги та послуги для вашого.',
      dateFirst: ' 25.07.2020',
      imgFirst:
        'https://upload.wikimedia.org/wikipedia/commons/8/89/%D0%92%D1%80%D0%B0%D0%B6%D0%B0%D1%8E%D1%87%D0%B8%D0%B9_%D0%BA%D1%80%D0%B0%D1%94%D0%B2%D0%B8%D0%B4.jpg',
      headerSecond: 'Нові умови співпраці!',
      contentSecond:
        'MARKSEM запускає новий проект співпраці. Вкладіть гроші в продукт MARKSEM і отримайте план розстрочки вже сьогодні. З отриманого доходу оплатіть покупку! Перейдіть за посиланням та дізнайтеся більше!',
      dateSecond: ' 25.07.2020',
      imgSecond:
        'https://delo.ua/files/news/images/3592/25/picture2_dlitelnye-rukopoz_359225_p0.jpg'
    };
    return this.widthMock({ data: mockData });
  };
}
