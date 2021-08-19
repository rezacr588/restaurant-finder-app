import React , {useState, useEffect} from "react"
import { Camera } from "expo-camera"
import { useRef } from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

const ProfileCamera = styled(Camera)`
  height: 100%;
  width: 100%;
`

export const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);

  const cameraRef = useRef()

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync()
      console.log(photo);
    }
  }

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={Camera.Constants.Type.front}
      />
    </TouchableOpacity>
  )
} 