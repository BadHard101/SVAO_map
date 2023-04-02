let center = [55.887589, 37.626490];
let park_sveta = [55.887294, 37.595885];
let ba_park = [55.867521, 37.683005];
let altufevo_estate = [55.908547, 37.584851];
let lianozovsky_park = [55.900138, 37.565189];

let field_welcome = document.querySelector('#welcome_field');
let field_park_sveta = document.querySelector('#field_park_sveta');
let field_ba_park = document.querySelector('#field_ba_park');
let field_altufevo_estate = document.querySelector('#field_altufevo_estate');
let field_lianozovsky_park = document.querySelector('#field_lianozovsky_park');

let fields = []
fields.push(field_welcome);
fields.push(field_park_sveta);
fields.push(field_ba_park);
fields.push(field_altufevo_estate);
fields.push(field_lianozovsky_park);

let map_main = document.querySelector('#map_main')
let map_park_sveta = document.querySelector('#map_park_sveta')
let map_lianozovsky_park = document.querySelector('#map_lianozovsky_park')
let map_altufevo_estate = document.querySelector('#map_altufevo_estate')
let map_ba_park = document.querySelector('#map_ba_park')

let maps = []
maps.push(map_main);
maps.push(map_park_sveta);
maps.push(map_lianozovsky_park);
maps.push(map_altufevo_estate);
maps.push(map_ba_park);

function disable_maps_and_descriptions(){
    for (let i = 0; i < fields.length; i++) {
        fields[i].style.display = "none";
    }
    for (let i = 0; i < maps.length; i++) {
        maps[i].style.display = "none";
    }
}

function init() {
    let main_map = new ymaps.Map('map_main', {
        center: center,
        zoom: 13
    });

    // ПАРК СВЕТА
    // Создаем метку Парка света
    // (параметры текста, картинки, их позиций относительно центра)
    let m1_park_sveta = new ymaps.Placemark(park_sveta, {
        iconContent: `<div class="my-custom-icon__text" 
        style="white-space: nowrap; 
        font-size: 21px; 
        font-family: 'MS Reference Sans Serif', serif;
        text-shadow: 1px 0 2px #ffffff, 
        0 1px 2px #ffffff, 
        -1px 0 2px #ffffff, 
        0 -1px 2px #ffffff;
        font-weight: bold; ">Парк света</div>`
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'points_imgs/park_sveta.png',
        iconImageSize: [100, 100],
        iconImageOffset: [-50, -60],
        iconContentOffset: [-5, 73], // Смещение HTML-элемента относительно центра иконки
        //iconContentLayout: MyCustomLayoutClass // Свой макет HTML-элемента
    });
    // Отображаем меню с информацией о точке и меняем карту на более подробную
    m1_park_sveta.events.add('click', function (e){
        disable_maps_and_descriptions();
        field_park_sveta.style.display = "flex";
        map_park_sveta.style.display = "flex";
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
        iconImageHref: 'points_imgs/ba_park.png',
        iconImageSize: [100, 100],
        iconImageOffset: [-50, -60],
        iconContentOffset: [-40, 73], // Смещение HTML-элемента относительно центра иконки
        //iconContentLayout: MyCustomLayoutClass // Свой макет HTML-элемента
    });
    // Отображаем меню с информацией о точке и меняем карту на более подробную
    m2_ba_park.events.add('click', function (e){
        disable_maps_and_descriptions();
        field_ba_park.style.display = "flex";
        map_ba_park.style.display = "flex";
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
        iconImageHref: 'points_imgs/altufevo_estate.png',
        iconImageSize: [100, 100],
        iconImageOffset: [-50, -60],
        iconContentOffset: [-40, 73], // Смещение HTML-элемента относительно центра иконки
        //iconContentLayout: MyCustomLayoutClass // Свой макет HTML-элемента
    });
    // Отображаем меню с информацией о точке
    // и меняем карту на более подробную при нажатии
    m3_Altufyevo_Estate.events.add('click', function (e){
        disable_maps_and_descriptions();
        field_altufevo_estate.style.display = "flex";
        map_park_sveta.style.display = "flex";
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
        iconImageHref: 'points_imgs/lianozovsky_park.png',
        iconImageSize: [100, 100],
        iconImageOffset: [-50, -60],
        iconContentOffset: [-40, 73], // Смещение HTML-элемента относительно центра иконки
        //iconContentLayout: MyCustomLayoutClass // Свой макет HTML-элемента
    });
    // Отображаем меню с информацией о точке
    // и меняем карту на более подробную при нажатии
    m4_lianozovsky_park.events.add('click', function (e){
        disable_maps_and_descriptions();
        field_lianozovsky_park.style.display = "flex";
        map_lianozovsky_park.style.display = "flex";
    })



    // Добавляем все созданные метки на карту
    main_map.geoObjects.add(m1_park_sveta);
    main_map.geoObjects.add(m2_ba_park);
    main_map.geoObjects.add(m3_Altufyevo_Estate);
    main_map.geoObjects.add(m4_lianozovsky_park);



    main_map.controls.remove('geolocationControl'); // удаляем геолокацию
    main_map.controls.remove('searchControl'); // удаляем поиск
    main_map.controls.remove('trafficControl'); // удаляем контроль трафика
    main_map.controls.remove('typeSelector'); // удаляем тип
    main_map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    main_map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    main_map.controls.remove('rulerControl'); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}

ymaps.ready(init);