import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
const TestSpeed2 = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [speed, setSpeed] = useState<number>(0);
  const watchId = Geolocation.watchPosition(
    position => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      setSpeed(position.coords.speed ? position.coords.speed * 3.6 : 0); // Chuyển từ m/s sang km/h
    },
    error => Alert.alert('Vui lòng bật vị trí: ', error.message),
    {
      enableHighAccuracy: false,
      timeout: 30000,
      maximumAge: 0,
      distanceFilter: 0,
    }, // distanceFilter là giới hạn khoảng cách để cập nhật tọa độ và tốc độ (ở đây là 0.2m)
  );
  // Hủy việc theo dõi vị trí khi component bị unmount
  useEffect(() => {
    return () => Geolocation.clearWatch(watchId);
  }, []);
  console.log("số km là:", speed);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Latitude: {latitude}</Text>
      <Text>Longitude: {longitude}</Text>
      <Text style={styles.txt_speed}>Tốc Độ: {speed.toFixed(2)} km/h</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  txt_speed: {
    color: 'red',
    fontSize: 18,
    fontWeight: '500'
  }
})
export default TestSpeed2;
