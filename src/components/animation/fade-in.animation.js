import React from "react"
import { useEffect } from "react";
import { useRef } from "react"
import Animated from "react-native-reanimated"

export const FadeInView = ({duration = 1500, ...props}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: duration,
      useNatvieDriver: true
    }).start();
  }, [fadeAnim, duration])

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim
      }}
    >
      {props.children}
    </Animated.View>
  )
}