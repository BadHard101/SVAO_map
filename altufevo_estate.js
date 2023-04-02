center_altufevo_estate = [55.903763, 37.592627]
let metro_altufievo_4 = 'Москва, метро Алтуфьево, выход четвертый'
let altufevo_estate_p1 =[55.900913, 37.598668]
let altufevo_estate_p2 =[55.899777, 37.606408]
let altufevo_estate_p3 =[55.902373, 37.603636]
let altufevo_estate_p4 =[55.904853, 37.597762]
let altufevo_estate_p5 =[55.909093, 37.584716]
let altufevo_estate_p6 =[55.907666, 37.578820]
let metro_altufievo_2 = 'Москва, метро Алтуфьево, выход второй'

function init() {

    altufevo_estate_Route = new ymaps.multiRouter.MultiRoute({
        referencePoints: [
            metro_altufievo_4, altufevo_estate_p1, altufevo_estate_p2, altufevo_estate_p3, altufevo_estate_p4,
            altufevo_estate_p5, altufevo_estate_p6, metro_altufievo_2
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


    altufevo_estate_map = new ymaps.Map('map_altufevo_estate', {
        center: center_altufevo_estate,
        zoom: 15
    });

    altufevo_estate_map.geoObjects.add(altufevo_estate_Route);

    altufevo_estate_map.controls.remove('geolocationControl'); // удаляем геолокацию
    altufevo_estate_map.controls.remove('searchControl'); // удаляем поиск
    altufevo_estate_map.controls.remove('trafficControl'); // удаляем контроль трафика
    altufevo_estate_map.controls.remove('typeSelector'); // удаляем тип
    altufevo_estate_map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    altufevo_estate_map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    altufevo_estate_map.controls.remove('rulerControl'); // удаляем контрол правил
    //altufevo_estate_map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}

ymaps.ready(init);