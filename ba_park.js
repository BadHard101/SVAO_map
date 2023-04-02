let center_ba_park = [55.868013, 37.673650]
let metro_babushkinskaya = 'Москва, метро Бабушкинская, выход четвертый'
let ba_park_p1 =[55.867387, 37.676151]
let ba_park_p2 =[55.866239, 37.681885]
let ba_park_p3 =[55.867819, 37.683149]
let ba_park_p4 =[55.868335, 37.676554]

function init() {

    ba_park_Route = new ymaps.multiRouter.MultiRoute({
        referencePoints: [
            metro_babushkinskaya, ba_park_p1, ba_park_p2, ba_park_p3, ba_park_p4
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
        routeActivePedestrianSegmentStrokeColor: "#5f459f",
    });


    let ba_park_map = new ymaps.Map('map_ba_park', {
        center: center_ba_park,
        zoom: 16
    });

    ba_park_map.geoObjects.add(ba_park_Route);

    ba_park_map.controls.remove('geolocationControl'); // удаляем геолокацию
    ba_park_map.controls.remove('searchControl'); // удаляем поиск
    ba_park_map.controls.remove('trafficControl'); // удаляем контроль трафика
    ba_park_map.controls.remove('typeSelector'); // удаляем тип
    ba_park_map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    ba_park_map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    ba_park_map.controls.remove('rulerControl'); // удаляем контрол правил
    //ba_park_map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}

ymaps.ready(init);