import { H3, ScrollView, YStack } from "tamagui";

import { UpdateProfileForm } from "@/components/forms/update-profile-form";

export default function Profile() {
  return (
    <YStack fullscreen>
      <ScrollView showsVerticalScrollIndicator={false} space="$6" padding="$3">
        <H3>Atualizar perfil</H3>
        <UpdateProfileForm />
      </ScrollView>
    </YStack>
  );
}
