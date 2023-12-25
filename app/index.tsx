import PlayGroud from "components/PlayGroud";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 p-6">
      <PlayGroud />
    </SafeAreaView>
  );
}
