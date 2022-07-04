import { MapElementFactory } from 'vue2-google-maps';
import store from '@/store';

export default MapElementFactory({
	name: 'directionsRenderer',

	ctr() {
		return window.google.maps.DirectionsRenderer;
	},

	events: [],

	mappedProps: {},

	props: {
		origin: { type: Object },
		destination: { type: Object },
		travelMode: { type: String },
		waypoints: { type: Array },
	},
	data() {
		return {
			cInfoWindow: null,
		};
	},

	afterCreate(directionsRenderer) {
		let directionsService = new window.google.maps.DirectionsService();
		this.$watch(
			() => [this.origin, this.destination, this.waypoints, this.travelMode],
			() => {
				let { origin, destination, waypoints, travelMode } = this;
				if (!origin || !destination || !waypoints || !travelMode) {
					directionsService.route();
					directionsRenderer.setDirections({ routes: [] });
					store.commit('workDetail/SET_STATE', {
						action: 'totalKilloMeter',
						data: 0,
					});
					return false;
				}

				directionsService.route(
					{
						origin: origin,
						destination: destination,
						waypoints: this.waypoints,
						optimizeWaypoints: true,
						travelMode: window.google.maps.DirectionsTravelMode.DRIVING,
					},
					(response, status) => {
						if (status !== 'OK') return;
						directionsRenderer.setDirections(response);
						// var route = response.routes[0];
						// var summaryPanel = document.getElementById('directions_panel');
						// summaryPanel.innerHTML = '';

						// // For each route, display summary information.
						// for (var i = 0; i < route.legs.length; i++) {
						// 	var routeSegment = i + 1;
						// 	summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment + '</b><br />';
						// 	summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
						// 	summaryPanel.innerHTML += route.legs[i].end_address + '<br />';
						// 	summaryPanel.innerHTML += route.legs[i].distance.text + '<br /><br />';
						// }

						this.computeTotalDistance(response,  directionsRenderer);

						// var step = 1;
						//
						// openwindow.setContent(response.routes[0]?.legs[0]?.distance?.text + '<br>' + response.routes[0]?.legs[0]?.duration.text + ' ');
						// openwindow.setPosition(response.routes[0]?.legs[0]?.steps[step]?.end_location);
						// openwindow.open(directionsRenderer);

						// store.commit('workDetail/SET_STATE', {
						// 	action: 'totalKilloMeter',
						// 	data: (response.routes[0].legs[0].distance.value / 1000).toFixed(2),
						// });
					},
				);
			},
			{ deep: true },
		);
	},

	methods: {
		computeTotalDistance(result, directionsRenderer) {
			if (this.cInfoWindow) {
				this.cInfoWindow.close();
			}

			var totalDist = 0;
			var totalTime = 0;
			var myroute = result.routes[0];
			var i = 0;
			for (i = 0; i < myroute.legs.length; i++) {
				totalDist += myroute.legs[i].distance.value;
				totalTime += myroute.legs[i].duration.value;
			}
			totalDist = totalDist / 1000;
			this.cInfoWindow = new window.google.maps.InfoWindow()
			this.cInfoWindow.setContent( `${totalDist.toFixed(2) } km<br> ${(totalTime / 60).toFixed(2) } mins`);
			this.cInfoWindow.setPosition(result.routes[0]?.legs[0]?.steps[1]?.end_location);
			this.cInfoWindow.open(directionsRenderer);

			store.commit('workDetail/SET_STATE', {
				action: 'totalKilloMeter',
				data: totalDist.toFixed(2),
			});
		},
	},
});
