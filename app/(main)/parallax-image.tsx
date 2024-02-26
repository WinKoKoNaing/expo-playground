import { Stack } from "expo-router";
import { Dimensions, Text, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const IMAGE_HEIGHT = 300;
const { width } = Dimensions.get("window");
export default function ParallaxImage() {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffsetValue = useScrollViewOffset(scrollRef);
  const animatedImageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffsetValue.value,
            [IMAGE_HEIGHT, 0, IMAGE_HEIGHT],
            [-IMAGE_HEIGHT, 0, IMAGE_HEIGHT * 0.5]
          ),
        },
        {
          scale: interpolate(
            scrollOffsetValue.value,
            [-IMAGE_HEIGHT, 0, IMAGE_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });
  const animatedHeaderStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollOffsetValue.value,
        [0, IMAGE_HEIGHT / 2],
        [0, 1]
      ),
    };
  });
  const inset = useSafeAreaInsets();
  return (
    <View className="flex-1">
      <Stack.Screen
        options={{
          headerTransparent: true,
          header: () => (
            <Animated.View
              style={[{ marginTop: inset.top }, animatedHeaderStyle]}
              className="p-4 border-b w-full">
              <Text className="text-center text-xl">Parallax Image</Text>
            </Animated.View>
          ),
        }}
      />
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={10}>
        <Animated.Image
          style={[{ height: IMAGE_HEIGHT, width }, animatedImageStyle]}
          source={{
            uri: "https://envoyexcellency.com/wp-content/uploads/2023/12/Temples-of-Bagan-Restoration.jpg",
          }}
          alt="Parallax Bagan Image"
        />
        <View className="h-[2000px] bg-white">
          <Text>Parallax</Text>
        </View>
      </Animated.ScrollView>
    </View>
  );
}
