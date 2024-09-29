import { useRouter } from "expo-router";
import { Bell, ChevronLeft } from "lucide-react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const BackButton = () => {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.back()}>
      <ChevronLeft color="black" />
    </TouchableOpacity>
  );
};

export default BackButton;
