import { useIsFocused } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, View, YStack } from "tamagui";

import { HomeHeader } from "@/components/home-header";
import { ServiceList } from "@/components/services-list";

export default function Index() {
  const isFocused = useIsFocused();
  const insets = useSafeAreaInsets();

  return (
    <YStack fullscreen paddingTop={insets.top} backgroundColor="$sms">
      <HomeHeader title="Bem vindo, Cesar" />
      <YStack
        flexGrow={1}
        backgroundColor="$background"
        justifyContent="space-between"
        padding="$3"
      >
        <ServiceList />
        <View
          backgroundColor="$green4Dark"
          padding="$3"
          margin="$4"
          alignSelf="center"
          borderRadius="$3"
        >
          <Text fontWeight="bold">Duvídas? Entre em contato com a EasyBee</Text>
        </View>
      </YStack>
      {isFocused && <StatusBar style="dark" />}
    </YStack>
  );
}
