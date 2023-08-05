import { StyleSheet, Text, View, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import Dongho from '../images/dongho';
import Kimdongho from '../images/Kimdongho';
import { requestLocationPermission } from './CheckPermission';
const SpeedScreen = () => {
  const [speed, setSpeed] = useState(0);
  const [rotation, setRotation] = useState(0); // Thêm trạng thái để lưu trữ góc quay
  const [clockColor, setClockColor] = useState('#C401FA')
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const nomarl = 1;
  const minSpeed = 0;
  const maxSpeed = 100;
  const minRotation = -135;
  const maxRotation = 135;
  const updateRotation = (currentSpeed: number) => {
    if (currentSpeed < nomarl) {
      setSpeed(0);
      setRotation(-135);
      setClockColor('skyblue');
    } else {
      // Adjust rotation based on the speed only when the device is moving 
      const normalizedSpeed = Math.min(Math.max(currentSpeed, minSpeed), maxSpeed);
      const rotationRange = maxRotation - minRotation;
      const rotationStep = rotationRange / (maxSpeed - minSpeed);
      const newRotation = minRotation + normalizedSpeed * rotationStep;
      setRotation(newRotation)
      // Calculate hue for clock color
      const minHue = 120;
      const maxHue = -120;
      const hueStep = (maxHue - minHue) / rotationRange;
      const newHue = minHue + (newRotation - minRotation) * hueStep;
      setClockColor(`hsl(${newHue}, 100%, 50%)`);
    }
  };
  useEffect(() => {
    const startWatchingPosition = async () => {
      await requestLocationPermission();
      const watchId = Geolocation.watchPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          const speedX = position.coords.speed ? position.coords.speed * 3.6 : 0; // Chuyển từ m/s sang km/h
          const speedY = 0;
          const currentSpeed = Math.sqrt(speedX * speedX + speedY * speedY);
          setSpeed(currentSpeed);
          updateRotation(currentSpeed); // Cập nhật góc quay khi có dữ liệu tốc độ mới
        },
        (error) => Alert.alert('Chưa bật định vị', error.message),
        {
          enableHighAccuracy: false,
          distanceFilter: 0.2,
          timeout: 30000,
          maximumAge: 0
          // interval: 200,
        }
      );
      return () => {
        Geolocation.clearWatch(watchId);
      };
    };
    startWatchingPosition();
  }, []);

  console.log('số km', speed);
  return (
    <View style={styles.container} >
      <Dongho color={clockColor} width={283} style={{ alignSelf: 'center' }} />
      <Kimdongho
        width={36}
        style={{
          alignSelf: 'center',
          marginTop: -130,
          transform: [{ rotate: `${rotation}deg` }], // Áp dụng góc quay vào hình ảnh
        }}
      />
      <Text style={styles.txt_speed}>Tốc độ hiện tại: {speed.toFixed(1)} km/h</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#2D144E',
    paddingTop: 200
  },
  txt_speed: {
    paddingTop: 30,
    fontSize: 30,
    fontWeight: '500',
    color: '#FFFFFF',
    textAlign: 'center',
    fontStyle: 'normal'
  },
});

export default SpeedScreen;
