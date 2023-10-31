import { ChevronRight } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import { ListItem, Text, YStack } from "tamagui";

export function ServiceList() {
  const router = useRouter();

  return (
    <YStack space="$4">
      <Text fontWeight="bold">Contrate um serviço</Text>
      <ListItem
        fontSize="$8"
        alignItems="center"
        backgroundColor="$backgroundStrong"
        borderRadius="$3"
        bordered
        height="$8"
        onPress={() => router.push(`/(tabs)/home/${"Faxineira"}`)}
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
        onPress={() => router.push(`/(tabs)/home/${"Limpeza"}`)}
        iconAfter={ChevronRight}
      >
        Limpeza
      </ListItem>
    </YStack>
  );
}
