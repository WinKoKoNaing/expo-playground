import { FlashList } from "@shopify/flash-list";
import { useState } from "react";
import { Dimensions, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { height: wHeight, width } = Dimensions.get("window");

const height = wHeight - 48 - 48;
export default function Page() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const inset = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: inset.top,
        height: wHeight,
        width,
      }}>
      <FlashList
        data={[1, 2, 3]}
        pagingEnabled
        estimatedItemSize={height}
        snapToAlignment="start"
        snapToStart
        snapToInterval={height}
        keyExtractor={(_, i) => i.toString()}
        renderItem={() => <Text>hello</Text>}
        onScroll={(e) => {
          const index = Math.round(
            e.nativeEvent.contentOffset.y / (height - 48 - inset.top)
          );
          setActiveVideoIndex(index);
        }}
        onEndReachedThreshold={0.2}
      />
    </View>
  );
}
