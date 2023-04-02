let center_lianozovsky_park = [55.894014, 37.572762]
let metro_altufievo_1 = 'Москва, метро Алтуфьево, выход первый'
let lianozovsky_park_p1 =[55.900202, 37.571333]
let lianozovsky_park_p2 =[55.900988, 37.564658]
let lianozovsky_park_p3 =[55.899022, 37.559272]
let lianozovsky_park_p4 =[55.887056, 37.565274]
let lianozovsky_park_p5 =[55.890633, 37.565518]
let lianozovsky_park_p6 =[55.897222, 37.560639]
let lianozovsky_park_p7 =[55.896887, 37.575503]
let lianozovsky_park_p8 =[55.897221, 37.586397]

function init() {

    lianozovsky_park_Route = new ymaps.multiRouter.MultiRoute({
        referencePoints: [
            metro_altufievo_1, lianozovsky_park_p1, lianozovsky_park_p2, lianozovsky_park_p3, lianozovsky_park_p4,
            lianozovsky_park_p5, lianozovsky_park_p6, lianozovsky_park_p7, lianozovsky_park_p8
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


    let lianozovsky_park_map = new ymaps.Map('map_lianozovsky_park', {
        center: center_lianozovsky_park,
        zoom: 15
    });

    lianozovsky_park_map.geoObjects.add(lianozovsky_park_Route);

    lianozovsky_park_map.controls.remove('geolocationControl'); // удаляем геолокацию
    lianozovsky_park_map.controls.remove('searchControl'); // удаляем поиск
    lianozovsky_park_map.controls.remove('trafficControl'); // удаляем контроль трафика
    lianozovsky_park_map.controls.remove('typeSelector'); // удаляем тип
    lianozovsky_park_map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    lianozovsky_park_map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    lianozovsky_park_map.controls.remove('rulerControl'); // удаляем контрол правил
    //lianozovsky_park_map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}

ymaps.ready(init);