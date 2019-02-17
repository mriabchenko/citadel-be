const DistrictTypeEnum = require('./../enums/district-type.enum');

module.exports = [
  {
    title: 'Марсово поле',
    price: 3,
    type: DistrictTypeEnum.military,
    imageFile: 'assets/images/_districts/battlefield.jpg',
    number: 3
  },
  {
    title: 'Замок',
    price: 4,
    type: DistrictTypeEnum.noble,
    imageFile: 'assets/images/_districts/castle.jpg',
    number: 4
  },
  {
    title: 'Собор',
    price: 5,
    type: DistrictTypeEnum.church,
    imageFile: 'assets/images/_districts/cathedral.jpg',
    number: 2
  },
  {
    title: 'Церковь',
    price: 2,
    type: DistrictTypeEnum.church,
    imageFile: 'assets/images/_districts/church.jpg',
    number: 3
  },
  {
    title: 'Порт',
    price: 3,
    type: DistrictTypeEnum.trade,
    imageFile: 'assets/images/_districts/docks.jpg',
    number: 3
  },
  {
    title: ' Врата дракона',
    price: 6,
    type: DistrictTypeEnum.bonus,
    imageFile: 'assets/images/_districts/dragongate.jpg',
    description: 'Этот квартал стоит 6 золотых при постройке и приносит 8 очков при подсчете в конце игры.'

  },
  {
    title: 'Крепость',
    price: 5,
    type: DistrictTypeEnum.military,
    imageFile: 'assets/images/_districts/fortress.jpg',
    number: 2
  },
  {
    title: 'Кладбище',
    price: 5,
    type: DistrictTypeEnum.bonus,
    imageFile: 'assets/images/_districts/graveyard.jpg',
    description: 'Когда Кондотьер уничтожает квартал, ты можешь заплатить один золотой, чтобы забрать уничтоженный квартал на руку. Ты не можешь этого делать, если ты Кондотьер.'
  },
  {
    title: 'Великая стена',
    price: 6,
    type: DistrictTypeEnum.bonus,
    imageFile: 'assets/images/_districts/greatwall.jpg',
    description: 'Чтобы разрушить какой-либо из твоих кварталов, Кондотьеру придется потратить на один золотой больше.'
  },
  {
    title: 'Гавань',
    price: 4,
    type: DistrictTypeEnum.trade,
    imageFile: 'assets/images/_districts/harbor.jpg',
    number: 3
  },
  {
    title: 'Город',
    price: 2,
    type: DistrictTypeEnum.bonus,
    imageFile: 'assets/images/_districts/hauntedcity.jpg',
    description: 'При финальном подсчете очков Город Призраков считается кварталом любого выбранного тобой цвета. Не применяй это свойство если поставил этот квартал в последнем туре игры.'
  },
  {
    title: 'Форт',
    price: 3,
    type: DistrictTypeEnum.bonus,
    imageFile: 'assets/images/_districts/keep.jpg',
    number: 2
  },
  {
    title: 'Лаборатория',
    price: 5,
    type: DistrictTypeEnum.bonus,
    imageFile: 'assets/images/_districts/laboratory.jpg',
    description: 'Раз в твой ход ты можешь сбросить карту квартала с руки и получить один золотой из банка.'
  },
  {
    title: 'Библиотека',
    price: 6,
    type: DistrictTypeEnum.bonus,
    imageFile: 'assets/images/_districts/library.jpg',
    description: 'Если ты решаешь своим действием тянуть карты, ты оставляешь на руке обе вытянутые карты.'
  },
  {
    title: 'Поместье',
    price: 3,
    type: DistrictTypeEnum.noble,
    imageFile: 'assets/images/_districts/manor.jpg',
    number: 5
  },
  {
    title: 'Рынок',
    price: 2,
    type: DistrictTypeEnum.trade,
    imageFile: 'assets/images/_districts/market.jpg',
    number: 4
  },
  {
    title: 'Монастырь',
    price: 3,
    type: DistrictTypeEnum.church,
    imageFile: 'assets/images/_districts/monastery.jpg',
    number: 3
  }, {
    title: 'Обсерватория',
    price: 5,
    type: DistrictTypeEnum.bonus,
    imageFile: 'assets/images/_districts/observatory.jpg',
    description: 'Если ты своим действием решаешь брать карты, вытяни три карты, оставь себе одну на выбор, положи две оставшиеся под низ колоды.'
  },
  {
    title: 'Палаццо',
    price: 5,
    type: DistrictTypeEnum.noble,
    imageFile: 'assets/images/_districts/palace.jpg',
    number: 3
  },
  {
    title: 'Тюрьма',
    price: 2,
    type: DistrictTypeEnum.military,
    imageFile: 'assets/images/_districts/prison.jpg',
    number: 3
  },
  {
    title: 'Школа магии',
    price: 6,
    type: DistrictTypeEnum.bonus,
    imageFile: 'assets/images/_districts/schoolofmagic.jpg',
    description: 'При расчете дохода Школа считается кварталом любого цвета по твоему выбору. Например, если в текущем туре ты Король, Школа будет считаться дворянским (желтым) кварталом.'
  },
  {
    title: 'Кузня',
    price: 5,
    type: DistrictTypeEnum.bonus,
    imageFile: 'assets/images/_districts/smithy.jpg',
    description: 'Раз в твой ход ты можешь заплатить два золотых за право вытянуть три карты квартала.'
  },
  {
    title: 'Таверна',
    price: 1,
    type: DistrictTypeEnum.trade,
    imageFile: 'assets/images/_districts/tavern.jpg',
    number: 5
  },
  {
    title: 'Храм',
    price: 1,
    type: DistrictTypeEnum.church,
    imageFile: 'assets/images/_districts/temple.jpg',
    number: 3
  },
  {
    title: 'Ратуша',
    price: 5,
    type: DistrictTypeEnum.trade,
    imageFile: 'assets/images/_districts/townhall.jpg',
    number: 2
  },
  {
    title: 'Лавка',
    price: 2,
    type: DistrictTypeEnum.trade,
    imageFile: 'assets/images/_districts/tradingpost.jpg',
    number: 3
  },
  {
    title: 'Дозорная башня',
    price: 1,
    type: DistrictTypeEnum.military,
    imageFile: 'assets/images/_districts/watchtower.jpg',
    number: 3
  },
  {
    title: 'Университет',
    price: 6,
    type: DistrictTypeEnum.bonus,
    imageFile: 'assets/images/_districts/university.jpg',
    description: 'Стоимость постройки этого квартала 6 золотых, в конце игры он приносит 8 очков.'
  },
];
