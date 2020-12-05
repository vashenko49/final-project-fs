export default class DrawerManagerAPI {
  static widthMock = mockData =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockData || {});
      }, 3000);
    });

  static getManagerInfo = () => {
    const mockData = {
      managerMail: 'olegprutyla@gmail.com',
      managerName: 'Олег Притула',
      managerTel: '093-111-11-11',
      managerAvatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'
    };
    return this.widthMock({ data: mockData });
  };
}
