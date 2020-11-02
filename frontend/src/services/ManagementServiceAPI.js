export default class ManagementServiceAPI {
  static widthMock = mockData =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockData || {});
      }, 3000);
    });

  static getServices = () => {
    const mockData = [
      {
        type: 'sink',
        startIconColor: '#F88B38',
        title: 'managementServiceListSink'
      },
      {
        type: 'electricity',
        startIconColor: '#4AD584',
        title: 'managementServiceListElectricity'
      },
      {
        type: 'garden',
        startIconColor: '#00D0FF',
        title: 'managementServiceListGarden'
      },
      {
        type: 'lock',
        startIconColor: '#F88B38',
        title: 'managementServiceListLock'
      },
      {
        type: 'air-conditioner',
        startIconColor: '#4AD584',
        title: 'managementServiceListAirConditioner'
      },
      {
        type: 'temperature',
        startIconColor: '#00D0FF',
        title: 'managementServiceListTemperature'
      },
      {
        type: 'garden-work',
        startIconColor: '#F88B38',
        title: 'managementServiceListGardenWork'
      },
      {
        type: 'window',
        startIconColor: '#4AD584',
        title: 'managementServiceListWindow'
      },
      {
        type: 'other',
        startIconColor: '#00D0FF',
        title: 'managementServiceListOther'
      }
    ];
    return this.widthMock({ data: mockData });
  };

  static createServices = data => {
    return this.widthMock();
  };
}
