let center_park_sveta = [55.886112, 37.598256]
let metro_bibirevo = 'Москва, метро Бибирево, выход второй'
let point_1 =[55.886613, 37.598626]
let point_2 =[55.886726, 37.598223]
let point_3 =[55.887562, 37.595580]
let point_4 =[55.887711, 37.594793]
let point_5 =[55.887079, 37.595543]
let point_6 =[55.886703, 37.596968]

function init() {

      park_svetaRoute = new ymaps.multiRouter.MultiRoute({
          referencePoints: [
              metro_bibirevo, point_1, point_2, point_3, point_4, point_5, point_6
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


      let park_sveta_map = new ymaps.Map('map_park_sveta', {
          center: center_park_sveta,
          zoom: 17
      });

     park_sveta_map.geoObjects.add(park_svetaRoute);

      park_sveta_map.controls.remove('geolocationControl'); // удаляем геолокацию
      park_sveta_map.controls.remove('searchControl'); // удаляем поиск
      park_sveta_map.controls.remove('trafficControl'); // удаляем контроль трафика
      park_sveta_map.controls.remove('typeSelector'); // удаляем тип
      park_sveta_map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      park_sveta_map.controls.remove('zoomControl'); // удаляем контрол зуммирования
      park_sveta_map.controls.remove('rulerControl'); // удаляем контрол правил
      park_sveta_map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}

ymaps.ready(init);