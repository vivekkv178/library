import { getUser, signOut } from "@/lib/firebase";

export const getUserInfo = async () => {
  const user = await getUser();
  return user;
};

export const logout = async () => {
  const user = await signOut();
  return user;
};
