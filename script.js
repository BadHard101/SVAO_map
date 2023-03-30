
let center = [55.883589, 37.621490];
let park_sveta = [55.887294, 37.595885];
let ba_park = [55.867521, 37.683005];
let altufevo_estate = [55.908547, 37.584851];
let lianozovsky_park = [55.900138, 37.565189];


function init() {
    let map = new ymaps.Map('map-test', {
        center: center,
        zoom: 13
    });

    /*let MyCustomLayoutClass = ymaps.templateLayoutFactory.createClass(
        '<div class="my-custom-icon">' +
        '<div class="my-custom-icon__image" style="background-image: url(imgs/img.png);\n' +
        '    background-size: contain;\n' +
        '    background-repeat: no-repeat;\n' +
        '    width: 70px;\n' +
        '    height: 70px;\n' +
        '    border-radius: 50%; /!* Задаем радиус скругления равным половине ширины и высоты элемента *!/"></div>' +
        '<div class="my-custom-icon__content">$[properties.iconContent]</div>' +
        '</div>'
    );*/


    // ПАРК СВЕТА
    // Создаем метку Парка света
    // (параметры текста, картинки, их позиций относительно центра)
    let m1_park_sveta = new ymaps.Placemark(park_sveta, {
        iconContent: `<div class="my-custom-icon__text" 
        style="white-space: nowrap; 
        font-size: 20px; 
        /*font-family: 'Segoe Print';*/
        /*font-family: 'Comic Sans MS';*/
        /*font-family: Bahnschrift;*/
        /*font-family: Calibri;*/
        font-family: 'MS Reference Sans Serif', serif;
        text-shadow: 1px 0 2px #ffffff, 
        0 1px 2px #ffffff, 
        -1px 0 2px #ffffff, 
        0 -1px 2px #ffffff;
        font-weight: bold; ">Парк света</div>`
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'imgs/park_sveta.png',
        iconImageSize: [100, 100],
        iconImageOffset: [-50, -60],
        iconContentOffset: [-5, 73], // Смещение HTML-элемента относительно центра иконки
        //iconContentLayout: MyCustomLayoutClass // Свой макет HTML-элемента
    });
    // Отображаем меню с информацией о точке и меняем карту на более подробную
    let menu1 = document.querySelector('#box');
    m1_park_sveta.events.add('click', function (e){
        menu1.style.display = "flex";
    })


    // БАБУШКИНСКИЙ ПАРК
    // Создаем метку Бабушкинского парка
    // (параметры текста, картинки, их позиций относительно центра)
    let m2_ba_park = new ymaps.Placemark(ba_park, {
        iconContent: `<div class="my-custom-icon__text" 
        style="white-space: nowrap; 
        font-size: 20px; 
        /*font-family: 'Segoe Print';*/
        /*font-family: 'Comic Sans MS';*/
        /*font-family: Bahnschrift;*/
        /*font-family: Calibri;*/
        font-family: 'MS Reference Sans Serif', serif;
        text-shadow: 1px 0 2px #ffffff, 
        0 1px 2px #ffffff, 
        -1px 0 2px #ffffff, 
        0 -1px 2px #ffffff;
        font-weight: bold; ">Бабушкинский парк</div>`
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'imgs/ba_park.png',
        iconImageSize: [100, 100],
        iconImageOffset: [-50, -60],
        iconContentOffset: [-40, 73], // Смещение HTML-элемента относительно центра иконки
        //iconContentLayout: MyCustomLayoutClass // Свой макет HTML-элемента
    });
    // Отображаем меню с информацией о точке и меняем карту на более подробную
    let menu2 = document.querySelector('#box');
    m2_ba_park.events.add('click', function (e){
        menu2.style.display = "flex";
    })


    // УСАДЬБА АЛТУФЬЕВО
    // Создаем метку Усадьбы Алтуфьево
    // (параметры текста, картинки, их позиций относительно центра)
    let m3_Altufyevo_Estate = new ymaps.Placemark(altufevo_estate, {
        iconContent: `<div class="my-custom-icon__text" 
        style="white-space: nowrap; 
        font-size: 20px; 
        /*font-family: 'Segoe Print';*/
        /*font-family: 'Comic Sans MS';*/
        /*font-family: Bahnschrift;*/
        /*font-family: Calibri;*/
        font-family: 'MS Reference Sans Serif', serif;
        text-shadow: 1px 0 2px #ffffff, 
        0 1px 2px #ffffff, 
        -1px 0 2px #ffffff, 
        0 -1px 2px #ffffff;
        font-weight: bold; ">Усадьба Алтуфьево</div>`
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'imgs/altufevo_estate.png',
        iconImageSize: [100, 100],
        iconImageOffset: [-50, -60],
        iconContentOffset: [-40, 73], // Смещение HTML-элемента относительно центра иконки
        //iconContentLayout: MyCustomLayoutClass // Свой макет HTML-элемента
    });
    // Отображаем меню с информацией о точке
    // и меняем карту на более подробную при нажатии
    let menu3 = document.querySelector('#box');
    m3_Altufyevo_Estate.events.add('click', function (e){
        menu3.style.display = "flex";
    })


    // ЛИАНОЗОВСКИЙ ПАРК
    // Создаем метку Лианозовского парка
    // (параметры текста, картинки, их позиций относительно центра)
    let m4_lianozovsky_park = new ymaps.Placemark(lianozovsky_park, {
        iconContent: `<div class="my-custom-icon__text" 
        style="white-space: nowrap; 
        font-size: 20px; 
        /*font-family: 'Segoe Print';*/
        /*font-family: 'Comic Sans MS';*/
        /*font-family: Bahnschrift;*/
        /*font-family: Calibri;*/
        font-family: 'MS Reference Sans Serif', serif;
        text-shadow: 1px 0 2px #ffffff, 
        0 1px 2px #ffffff, 
        -1px 0 2px #ffffff, 
        0 -1px 2px #ffffff;
        font-weight: bold; ">Лианозовский парк</div>`
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'imgs/lianozovsky_park.png',
        iconImageSize: [100, 100],
        iconImageOffset: [-50, -60],
        iconContentOffset: [-40, 73], // Смещение HTML-элемента относительно центра иконки
        //iconContentLayout: MyCustomLayoutClass // Свой макет HTML-элемента
    });
    // Отображаем меню с информацией о точке
    // и меняем карту на более подробную при нажатии
    let menu4 = document.querySelector('#box');
    m4_lianozovsky_park.events.add('click', function (e){
        menu4.style.display = "flex";
    })



    // Добавляем все созданные метки на карту
    map.geoObjects.add(m1_park_sveta);
    map.geoObjects.add(m2_ba_park);
    map.geoObjects.add(m3_Altufyevo_Estate);
    map.geoObjects.add(m4_lianozovsky_park);



    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}

ymaps.ready(init);