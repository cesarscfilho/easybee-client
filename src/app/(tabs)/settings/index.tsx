import {
  ChevronRight,
  UserCircle,
  MapPin,
  LogOut,
  CreditCard,
} from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";
import { H3, ListItem, Separator, YStack } from "tamagui";

import { UserAvatar } from "@/components/use-avatar";

export default function Index() {
  const router = useRouter();

  return (
    <YStack fullscreen padding="$3">
      <YStack alignItems="center" space="$3">
        <UserAvatar imageUri={null} />
        <H3>Cesar Silva</H3>
      </YStack>
      <YStack paddingTop="$5" separator={<Separator />}>
        <ListItem
          onPress={() => router.push(`/(tabs)/settings/profile`)}
          title="Perfil"
          subTitle="(27) 12345-6789"
          icon={UserCircle}
          iconAfter={ChevronRight}
        />

        <ListItem
          onPress={() => router.push(`/(tabs)/settings/cards`)}
          title="Cartões"
          subTitle="Veja seus cartões"
          icon={CreditCard}
          iconAfter={ChevronRight}
        />

        <ListItem
          onPress={() => router.push(`/(tabs)/settings/address`)}
          title="Endereços"
          subTitle="Veja seus endereçõs"
          icon={MapPin}
          iconAfter={ChevronRight}
        />

        <ListItem
          onPress={() => router.push(`/sign-in`)}
          theme="red_active"
          hoverTheme
          icon={LogOut}
          iconAfter={ChevronRight}
        >
          Sair
        </ListItem>
      </YStack>
    </YStack>
  );
}
