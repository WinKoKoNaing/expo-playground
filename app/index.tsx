import { Text, View } from "react-native";

export default function Page() {
  return (
    <View className="flex-1 bg-red-500">
      <View className="bg-red-300">
        <Text className="text-2xl text-red-400">Hello World</Text>
        <Text className="text-green-400">
          This is the first page of your app.
        </Text>
      </View>
    </View>
  );
}
