import { useAuth } from "@clerk/clerk-expo";
import { Href, Redirect } from "expo-router";

export default function index() {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href={"/(root)/(tabs)/home"} />;
  }

  return <Redirect href={"/(auth)/welcome" as Href} />;
}
