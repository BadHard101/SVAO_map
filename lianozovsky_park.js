let center_park_sveta = [55.886112, 37.598256]
let metro_bibirevo = 'Москва, метро Бибирево, выход второй'
let point_1 =[55.886613, 37.598626]
let point_2 =[55.886726, 37.598223]
let point_3 =[55.887562, 37.595580]


function init() {

    lianozovsky_parkRoute = new ymaps.multiRouter.MultiRoute({
        referencePoints: [
            metro_bibirevo, point_1, point_2, point_3
        ],
        params: {
            //Тип маршрутизации - пешеходная маршрутизация.
            routingMode: 'pedestrian'
        }
    }, {

        wayPointStartIconColor: "#2f5917",
        wayPointStartIconFillColor: "#d0f396",
        wayPointIconColor: "#d0f396",
        wayPointIconFillColor: "#2f5917",
        wayPointFinishIconColor: "#2f5917",
        wayPointFinishIconFillColor: "#d0f396",

        viaPointVisible:false, // отключает возможность перетаскивать точки маршрута
        routeWalkMarkerVisible: false,

        routeActivePedestrianSegmentStrokeStyle: "solid",
        routeActivePedestrianSegmentStrokeColor: "#758f4b",



    });


    let lianozovsky_park_map = new ymaps.Map('map_lianozovsky_park', {
        center: center_park_sveta,
        zoom: 17
    });

    lianozovsky_park_map.geoObjects.add(lianozovsky_parkRoute);



    lianozovsky_park_map.controls.remove('geolocationControl'); // удаляем геолокацию
    lianozovsky_park_map.controls.remove('searchControl'); // удаляем поиск
    lianozovsky_park_map.controls.remove('trafficControl'); // удаляем контроль трафика
    lianozovsky_park_map.controls.remove('typeSelector'); // удаляем тип
    lianozovsky_park_map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    lianozovsky_park_map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    lianozovsky_park_map.controls.remove('rulerControl'); // удаляем контрол правил
    lianozovsky_park_map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}

ymaps.ready(init);