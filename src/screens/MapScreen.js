import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';

export default function MapScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [touristSites, setTouristSites] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location.coords);
      } catch (error) {
        console.log('Error fetching location:', error);
        setErrorMsg('Error fetching location');
      }
    })();
  }, []);

  useEffect(() => {
    const staticTouristSites = [
      { id: 1, name: 'Club Lomas del Viento', latitude: 6.979758300692956, longitude: -73.04547139902304 },
      { id: 2, name: 'Parque Principal de Piedecuesta', latitude: 6.98571, longitude: -73.05067 },
      { id: 3, name: 'Parque Temático Piedecuesta', latitude: 6.99444, longitude: -73.05159 },
      { id: 4, name: 'Cerro de la cantera', latitude: 6.98362, longitude: -73.05984 },
      { id: 5, name: 'Cascada El Caney', latitude: 6.98635, longitude: -73.02149 },
      { id: 6, name: 'Cascada Las Golondrinas', latitude: 6.98589, longitude: -73.02606 },
      { id: 7, name: 'Estadio Villa Concha', latitude: 6.99571, longitude: -73.04982 },
      { id: 8, name: 'Centro Comercial de la Cuesta', latitude: 7.000363472198488, longitude: -73.05460649675358 },
      { id: 9, name: 'Vista Hermosa Glamping', latitude: 6.991823123038631, longitude: -73.0365093108704 },
      { id: 10, name: 'Zoológico de Aves la Fantasía', latitude: 7.0130369464687154, longitude: -73.06017310175899 },
      { id: 11, name: 'Cascada de los Novios', latitude: 7.015975941673093, longitude: -73.04618270058378 },
      { id: 12, name: 'Cascada El Caney', latitude: 7.022833524985958, longitude: -73.06274802222069 },
      { id: 13, name: 'Cascada el Encanto', latitude: 7.022918711720692, longitude: -73.04304988068871 },
      { id: 14, name: 'Glamping de la Cuesta', latitude: 7.0302021199708715, longitude: -73.04017455255092 },
      { id: 15, name: 'Cascada Manto de la Viergen', latitude: 6.9920292941110365, longitude: -73.03815564534492 },
      { id: 16, name: 'Mirador Yarilu', latitude: 6.990180357855387, longitude: -73.0366245884781 },
      { id: 17, name: 'Casa Luna', latitude: 6.958630397372843, longitude: -73.04149924249238 },
      { id: 18, name: 'Cascada el Renacer', latitude: 6.971891383978807, longitude: -73.01957298669419 },
      { id: 19, name: 'Juriscoop Club', latitude: 6.968918271111851, longitude: -73.04739633917669 },
      { id: 20, name: 'La Mesa de los Santos', latitude: 6.942302699264673, longitude: -73.03563186062667 },
      { id: 21, name: 'Asopender', latitude: 6.993679777188577, longitude: -73.06752160563798 },
      // Sitios turísticos...
    ];

    const nearbySites = staticTouristSites.filter(site => {
      if (location) {
        const distance = getDistanceFromLatLonInKm(
          location.latitude,
          location.longitude,
          site.latitude,
          site.longitude
        );
        const maxDistance = 5;
        return distance <= maxDistance;
      }
      return false;
    });

    setTouristSites(nearbySites);
  }, [location]);

  useEffect(() => {
    let isMounted = true;
    
    if (isMounted) {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }

        let locationSubscription = await Location.watchPositionAsync(
          { accuracy: Location.Accuracy.High, distanceInterval: 10 },
          location => {
            setLocation(location.coords);
          }
        );

        return () => {
          locationSubscription.remove();
          isMounted = false;
        };
      })();
    }

  }, []);

  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };

  const deg2rad = deg => {
    return deg * (Math.PI / 180);
  };

  const handleMarkerPress = site => {
    setSelectedLocation(site);
  };

  if (errorMsg) {
    return (
      <View style={styles.container}>
        <Text>{errorMsg}</Text>
      </View>
    );
  }

  if (!location) {
    return (
      <View style={styles.container}>
        <Text>Obteniendo ubicación...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        customMapStyle={customMapStyle}
      >
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude
          }}
          title="Mi ubicación"
          pinColor="blue"
          calloutOffset={{ x: 0, y: -35}}
        >
          <Callout>
            <Text style={styles.calloutText}>Aquí estoy</Text>
          </Callout>
        </Marker>
        {touristSites.map(site => (
          <Marker
            key={site.id}
            coordinate={{
              latitude: site.latitude,
              longitude: site.longitude
            }}
            title={site.name}
            onPress={() => handleMarkerPress(site)}
          >
            <Image source={require('../components/images/camara.png')} style={styles.cameraMarker} />
          </Marker>  
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  },
  calloutText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  cameraMarker: {
    width: 24,
    height: 24
  },
});

const customMapStyle = [
  {
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  }
];