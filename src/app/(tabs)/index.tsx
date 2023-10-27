import { useIsFocused } from "@react-navigation/native";
import { ChevronRight } from "@tamagui/lucide-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, H3, ListItem, Text, View, XStack, YStack } from "tamagui";

export default function Index() {
  const isFocused = useIsFocused();
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <YStack fullscreen paddingTop={insets.top} backgroundColor="$sms">
      <YStack>
        <XStack padding="$4" alignItems="center" justifyContent="space-between">
          <H3 color="$yellow1Dark" fontWeight="bold" marginLeft="$3">
            Bem vindo, Cesar
          </H3>
          <Image
            style={{ width: 35, height: 30 }}
            source={require("@/assets/logos/icon_easybee_black.png")}
          />
        </XStack>
      </YStack>
      <YStack
        flexGrow={1}
        backgroundColor="$background"
        justifyContent="space-between"
        padding="$3"
      >
        <YStack space="$4">
          <Text fontWeight="bold">Contrate um serviço</Text>
          <ListItem
            fontSize="$8"
            alignItems="center"
            backgroundColor="$backgroundStrong"
            borderRadius="$3"
            bordered
            height="$8"
            onPress={() => router.push(`/(tabs)/settings/profile`)}
            iconAfter={ChevronRight}
          >
            Faxineira
          </ListItem>
          <ListItem
            fontSize="$8"
            alignItems="center"
            backgroundColor="$backgroundStrong"
            borderRadius="$3"
            bordered
            height="$8"
            onPress={() => router.push(`/(tabs)/settings/profile`)}
            iconAfter={ChevronRight}
          >
            Limpeza
          </ListItem>
        </YStack>
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
