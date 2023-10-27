import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, YStack } from "tamagui";

export default function Contract() {
  const { service: serviceId } = useLocalSearchParams<{ service: string }>();

  return (
    <>
      <Stack.Screen
        options={{
          title: serviceId ?? "",
          headerBackTitle: "Categories",
        }}
      />
      <YStack fullscreen padding="$3" space="$6">
        <Text>{serviceId}</Text>
      </YStack>
    </>
  );
}
