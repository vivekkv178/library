import React from "react";
import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";
import { Label } from "@/components/ui/Label/Label";
import { Icon } from "@iconify/react";
import { useAuthContext } from "../context/context";
import { SIGN_IN } from "../utils/constants";

export default function SignUp() {
  const { commonState } = useAuthContext();
  const { loading, formData, handleSignUp, handleChange, handleSignIn } =
    commonState;
  return (
    <div className="mx-auto grid w-[350px] gap-6">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-balance text-muted-foreground">
          Enter your email below to create your account
        </p>
      </div>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="test@example.com"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <Button
          type="submit"
          variant="default"
          className="w-full"
          onClick={handleSignUp}
        >
          {loading ? (
            <Icon
              icon="lucide:loader-circle"
              className="h-6 w-6 animate-spin"
            />
          ) : (
            "Create Account"
          )}
        </Button>
        <Button variant="outline" className="w-full" onClick={handleSignIn}>
          <Icon icon="logos:google-icon" className="h-4 w-4 mr-2" />
          Sign Up with Google
        </Button>
      </div>
      <div className="mt-4 text-center text-sm">
        Already have an account?
        <span
          // href="#"
          className="ml-2 underline cursor-pointer"
          onClick={() => commonState.setAuthComponent(SIGN_IN)}
        >
          Sign in
        </span>
      </div>
    </div>
  );
}
