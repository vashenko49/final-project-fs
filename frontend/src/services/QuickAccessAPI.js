export default class QuickAccessAPI {
  static widthMock = mockData =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockData || {});
      }, 3000);
    });

  static getHouses = () => {
    const mockData = {
      all: '2',
      vacant: 'M-2 ID 07200'
    };
    return this.widthMock({ data: mockData });
  };
}
