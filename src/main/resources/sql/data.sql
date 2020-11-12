insert into TASK_TYPES (TYPE, NAME, VERSION, CREATED_DATE)
values  ('sink', 'managementServiceListSink', 0, CURRENT_TIMESTAMP()),
        ('electricity', 'managementServiceListElectricity', 0, CURRENT_TIMESTAMP()),
        ('garden', 'managementServiceListGarden', 0, CURRENT_TIMESTAMP()),
        ('lock', 'managementServiceListLock', 0, CURRENT_TIMESTAMP()),
        ('air-conditioner', 'managementServiceListAirConditioner', 0, CURRENT_TIMESTAMP()),
        ('temperature', 'managementServiceListTemperature', 0, CURRENT_TIMESTAMP()),
        ('garden-work', 'managementServiceListGardenWork', 0, CURRENT_TIMESTAMP()),
        ('window', 'managementServiceListWindow', 0, CURRENT_TIMESTAMP()),
        ('other', 'managementServiceListOther', 0, CURRENT_TIMESTAMP());

insert into LOCATIONS (CREATED_DATE, VERSION, ADDRESS, LAT, LNG)
values (CURRENT_TIMESTAMP(), 0, 'Kiev', 50.2982967, 29.3832117);

insert into CUSTOMERS (CREATED_DATE, VERSION, BIRTH_DAY, CURRENCY, EMAIL, LANGUAGE, NAME, PASSWORD, ROLE, URL_AVATAR)
values (CURRENT_TIMESTAMP(), 0, CURRENT_TIMESTAMP(), 'USD', 'test@com.ua', 'UA', 'Bob', 'MTIzNDU=', 'USER', 'https://avatarfiles.alphacoders.com/753/thumb-1920-75363.jpg');

insert into HOUSES (CREATED_DATE, VERSION, AREA, DESCRIPTION, EQUIPMENT, CUSTOMER_ID, LOCATION_ID)
values (CURRENT_TIMESTAMP(), 0, 120.0, 'trailer of the peace', 'EQUIPMENT', 1, 1);