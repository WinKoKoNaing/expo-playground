import React from "react";
import { Button, View } from "react-native";
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Circle, Svg } from "react-native-svg";
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function PlayGroud() {
  const width = useSharedValue(0);
  const r = useSharedValue(20);

  const onPressChange = () => {
    width.value = withSpring(width.value + 50);
    r.value += 10;
  };

  const animatedProps = useAnimatedProps(() => ({
    r: withTiming(r.value),
  }));

  return (
    <View className="gap-2">
      <View className="bg-gray-200">
        <Animated.View
          style={{
            width,
            height: 50,
            backgroundColor: "red",
            transform: [{ translateX: width }],
          }}
        />
        <Button title="Change" onPress={onPressChange} />
      </View>

      <View className="bg-gray-200">
        <Svg style={{ width: 50, height: 50 }}>
          <AnimatedCircle
            cx="50%"
            cy="50%"
            fill="#b58df1"
            animatedProps={animatedProps}
          />
        </Svg>
      </View>
    </View>
  );
}
