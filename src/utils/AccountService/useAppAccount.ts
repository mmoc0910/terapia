import { useLocalStorage } from "@uidotdev/usehooks";

export function useAppAccount() {
  const [account, setAccount] = useLocalStorage("account", null);
  return { account, setAccount };
}
