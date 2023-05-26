center_sviblovo = [55.852653, 37.641042]
let metro_botsad_1 = 'Москва, метро Ботанический сад, выход первый'
let sviblovo_p1 =[55.848426, 37.631867]
let sviblovo_p2 =[55.848774, 37.631083]
let sviblovo_p3 =[55.849110, 37.630371]
let sviblovo_p4 =[55.853432, 37.631667]
let sviblovo_p5 =[55.854634, 37.634669]
let sviblovo_p6 =[55.857322, 37.632903]
let metro_sviblovo_4 = 'Москва, метро Свиблово, выход четвертый'

function init() {

    sviblovo_Route = new ymaps.multiRouter.MultiRoute({
        referencePoints: [
            metro_botsad_1, sviblovo_p1, sviblovo_p2, sviblovo_p3, sviblovo_p4,
            sviblovo_p5, sviblovo_p6, metro_sviblovo_4
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


    sviblovo_map = new ymaps.Map('map_sviblovo', {
        center: center_sviblovo,
        zoom: 15
    });

    sviblovo_map.geoObjects.add(sviblovo_Route);

    sviblovo_map.controls.remove('geolocationControl'); // удаляем геолокацию
    sviblovo_map.controls.remove('searchControl'); // удаляем поиск
    sviblovo_map.controls.remove('trafficControl'); // удаляем контроль трафика
    sviblovo_map.controls.remove('typeSelector'); // удаляем тип
    sviblovo_map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    sviblovo_map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    sviblovo_map.controls.remove('rulerControl'); // удаляем контрол правил
}

ymaps.ready(init);