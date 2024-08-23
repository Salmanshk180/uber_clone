import { Href, Redirect } from "expo-router";

export default function index() {
  return <Redirect href={"/(auth)/welcome" as Href} />;
}
