import { Image } from "expo-image";
import { H3, XStack, YStack } from "tamagui";

type HomeHeaderProps = {
  title: string;
};

export function HomeHeader({ title }: HomeHeaderProps) {
  return (
    <YStack>
      <XStack padding="$4" alignItems="center" justifyContent="space-between">
        <H3 color="$yellow1Dark" fontWeight="bold" marginLeft="$3">
          {title}
        </H3>
        <Image
          style={{ width: 35, height: 30 }}
          source={require("@/assets/logos/icon_easybee_black.png")}
        />
      </XStack>
    </YStack>
  );
}
