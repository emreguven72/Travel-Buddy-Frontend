import React from 'react';
import { View , StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const Map = () => {
  return (
    <View style={styles.container}>
        <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
            latitude: 36.7793042923188,
            longitude: 34.53682026953421,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
        }}
        >
            <Marker coordinate = {{latitude: 36.7793042923188,longitude: 34.53682026953421}}
                pinColor = {"red"}
                title={"title"}
                description={"description"}/>
        </MapView>
   </View>
  );
}
export default Map;

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: '100%',
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });
