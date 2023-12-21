import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Text } from "react-native";
import { colors, fonts } from "styles";

const size = 24;
const Label = ({ focused, title }: { focused: boolean; title: string }) => (
  <Text
    className={`font-OpenSans600 text-sm leading-4 ${
      focused ? "text-primary" : "text-tcolor"
    }`}>
    {title}
  </Text>
);
const tabs = [
  {
    href: "/",
    name: "index",
    title: "Profile",
    tabBarLabel: ({ focused }) => <Label focused={focused} title="Home" />,
    tabBarIcon: ({ focused }) => (
      <Ionicons
        name={focused ? "home" : "home-outline"}
        size={size}
        color={focused ? colors.primary : colors.tcolor}
      />
    ),
    headerShown: false,
  },
  {
    href: "browse",
    name: "browse",
    title: "Profile",
    tabBarLabel: ({ focused }) => <Label focused={focused} title="Browse" />,
    tabBarIcon: ({ focused }) => (
      <Ionicons
        name={focused ? "md-globe" : "ios-globe-sharp"}
        size={size}
        color={focused ? colors.primary : colors.tcolor}
      />
    ),
    headerShown: false,
  },
  {
    href: "network",
    name: "network",
    title: "Profile",
    tabBarLabel: ({ focused }) => <Label focused={focused} title="Network" />,
    tabBarIcon: ({ focused }) => (
      <Ionicons
        name={focused ? "md-people-sharp" : "md-people-outline"}
        size={size}
        color={focused ? colors.primary : colors.tcolor}
      />
    ),
    headerShown: false,
  },
  {
    href: "saved",
    name: "saved",
    title: "Profile",
    tabBarLabel: ({ focused }) => <Label focused={focused} title="Saved" />,
    tabBarIcon: ({ focused }) => (
      <Ionicons
        name={focused ? "bookmark" : "bookmark-outline"}
        size={size}
        color={focused ? colors.primary : colors.tcolor}
      />
    ),
    headerShown: false,
  },
  {
    href: "profile",
    name: "profile",
    title: "Profile",
    tabBarLabel: ({ focused }) => <Label focused={focused} title="Profile" />,
    tabBarIcon: ({ focused }) => (
      <Ionicons
        name={focused ? "person-circle" : "person-circle-outline"}
        size={size}
        color={focused ? colors.primary : colors.tcolor}
      />
    ),
    headerShown: true,
  },
];

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { minHeight: 60 },
        tabBarItemStyle: { marginBottom: 8, marginTop: 4 },
        tabBarLabelStyle: {
          fontFamily: fonts.OpenSans400,
        },
      }}>
      {tabs.map(
        ({ name, href, tabBarIcon, tabBarLabel, title, headerShown }, i) => (
          <Tabs.Screen
            name={name}
            options={{
              href,
              tabBarIcon,
              tabBarLabel,
              title,
              headerTitleStyle: {
                fontSize: 16,
                fontFamily: fonts.OpenSans600,
              },
              headerShown,
            }}
            key={i}
          />
        )
      )}
    </Tabs>
  );
}
