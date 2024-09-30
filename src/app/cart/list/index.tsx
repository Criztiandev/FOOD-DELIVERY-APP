import BackButton from "@/components/atoms/BackButton";
import XStack from "@/components/stacks/XStack";
import YStack from "@/components/stacks/YStack";
import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";
import BaseLayout from "@/layout/BaseLayout";
import useCartStore from "@/state/useCartStore";
import { FlashList } from "@shopify/flash-list";
import { Stack, useRouter } from "expo-router";
import {
  Check,
  ChevronLeft,
  Minus,
  Phone,
  Pin,
  Plus,
  ShoppingCart,
  User,
  View,
} from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import SelectedProducts from "./components/CartSelectedProduct";
import CustomerDetails from "./components/CartCustomerDetails";
import CartCalculation from "./components/CartCalculation";
import CheckoutButton from "@/components/atoms/CheckoutButton";
import CartAddons from "./components/CartAddons";
import CartEmpty from "./components/CartEmpty";
import PaymentButton from "@/components/atoms/PaymentButton";

const RootScreen = () => {
  const router = useRouter();
  const { cart } = useCartStore();

  return (
    <>
      <Stack.Screen
        options={{
          headerLeft: () => <BackButton />,
          title: "Product Details",
        }}
      />

      {cart.items && cart.items.length > 0 ? (
        <BaseLayout>
          <YStack className="px-4 my-4">
            <SelectedProducts />
            <Button
              className="flex-row space-x-2 justify-start border-primary"
              variant="outline"
              onPress={() => router.push("/")}
            >
              <Plus color="black" size={18} />
              <Text className="text-base ">Add more items</Text>
            </Button>
          </YStack>

          <YStack className="px-4">
            <CartCalculation />
            <PaymentButton />
          </YStack>
        </BaseLayout>
      ) : (
        <CartEmpty />
      )}
    </>
  );
};

export default RootScreen;
