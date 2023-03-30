
let center = [55.883589, 37.621490];
let park_sveta = [55.887294, 37.595885];

function init() {
    let map = new ymaps.Map('map', {
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

    let m1_park_sveta = new ymaps.Placemark(park_sveta, {
        iconContent: `<div class="my-custom-icon__text" style="white-space: nowrap; font-size: 16px; font-family: Arial Black,serif;
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
        iconContentOffset: [0, 73], // Смещение HTML-элемента относительно центра иконки
        //iconContentLayout: MyCustomLayoutClass // Свой макет HTML-элемента
    });

    let box1 = document.querySelector('#box');
    m1_park_sveta.events.add('click', function (e){
        box1.style.display = "flex";
    })


    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(m1_park_sveta);
}

ymaps.ready(init);