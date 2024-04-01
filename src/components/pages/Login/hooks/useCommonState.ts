import { useState } from "react";
import {
  getUser,
  signInWithEmail,
  signInWithGoogle,
  signUpWithEmail,
} from "@/lib/firebase";
import { LoginPageProps } from "../LoginPage";
import { SIGN_IN } from "../utils/constants";
import { toast } from "@/components/ui/Toast/use-toast";
// import { useSelector } from "react-redux";
// import { AuthState } from "@/components/common/types";

const useCommonState = (props: LoginPageProps) => {
  const [authComponent, setAuthComponent] = useState(SIGN_IN);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  // const authState: AuthState = useSelector((state: any) => state.auth);

  const handleSignUp = async () => {
    setLoading(true);
    try {
      await signUpWithEmail(formData.email, formData.password);
      toast({
        title: "Sign Up Successfull. Please login.",
      });
      setAuthComponent(SIGN_IN);
    } catch (error) {
      const errorObject = error as Error;
      toast({ title: errorObject.message, variant: "destructive" });
      console.error("Error signing up:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async () => {
    try {
      setLoading(true);
      await signInWithGoogle();
      const user = await getUser();
      props.signInHandler(user);
    } catch (error) {
      const errorObject = error as Error;
      toast({ title: errorObject.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSignIn = async () => {
    try {
      setLoading(true);
      await signInWithEmail(formData.email, formData.password);
      const user = await getUser();
      props.signInHandler(user);
    } catch (error) {
      const errorObject = error as Error;
      toast({ title: errorObject.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleForgotPassword = () => {};

  // useEffect(() => {
  //   if (authState?.logout) signOut();
  // }, [authState]);

  return {
    authComponent,
    loading,
    formData,
    handleChange,
    handleSignUp,
    handleSignIn,
    handleEmailSignIn,
    setAuthComponent,
    handleForgotPassword,
  };
};

export default useCommonState;
