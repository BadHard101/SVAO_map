let center_park_sveta = [55.886112, 37.598256]
let metro_bibirevo = 'Москва, метро Бибирево, выход второй'
let park_sveta_p1 =[55.886613, 37.598626]
let park_sveta_p2 =[55.886726, 37.598223]
let park_sveta_p3 =[55.887562, 37.595580]
let park_sveta_p4 =[55.887711, 37.594793]
let park_sveta_p5 =[55.887079, 37.595543]
let park_sveta_p6 =[55.886703, 37.596968]

function init() {

      park_sveta_Route = new ymaps.multiRouter.MultiRoute({
          referencePoints: [
              metro_bibirevo, park_sveta_p1, park_sveta_p2, park_sveta_p3, park_sveta_p4,
              park_sveta_p5, park_sveta_p6
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

          viaPointVisible: false, // отключает возможность перетаскивать точки маршрута
          routeWalkMarkerVisible: false,

          routeActivePedestrianSegmentStrokeStyle: "solid",
          routeActivePedestrianSegmentStrokeColor: "#5f459f",
      });


      let park_sveta_map = new ymaps.Map('map_park_sveta', {
          center: center_park_sveta,
          zoom: 17
      });

      park_sveta_map.geoObjects.add(park_sveta_Route);

      park_sveta_map.controls.remove('geolocationControl'); // удаляем геолокацию
      park_sveta_map.controls.remove('searchControl'); // удаляем поиск
      park_sveta_map.controls.remove('trafficControl'); // удаляем контроль трафика
      park_sveta_map.controls.remove('typeSelector'); // удаляем тип
      park_sveta_map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      park_sveta_map.controls.remove('zoomControl'); // удаляем контрол зуммирования
      park_sveta_map.controls.remove('rulerControl'); // удаляем контрол правил
      //park_sveta_map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}

ymaps.ready(init);