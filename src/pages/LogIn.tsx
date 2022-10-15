import { FormEvent, useState } from "react";
import axios from "axios";
import { EnvelopeSimple, Lock } from "phosphor-react";

import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { Logo } from "../Logo";

export function LogIn() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  async function handleLogIn(event: FormEvent) {
    event.preventDefault();

    await axios.post("/sessions", {
      email: "vinicius@email.com",
      password: "12345678",
    });

    setIsUserLoggedIn(true);
  }

  function handleLogOut() {
    setIsUserLoggedIn(false);
  }

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      {isUserLoggedIn ? (
        <div className="w-full max-w-sm">
          <header className="flex flex-col items-center">
            <Logo />
            <Heading size="lg" className="mt-4">
              uDesign
            </Heading>
            <Text size="lg" className="text-gray-400 mt-1">
              Welcome!
            </Text>
          </header>
          <Button className="mt-4" onClick={() => handleLogOut()}>
            Log out
          </Button>
        </div>
      ) : (
        <>
          <header className="flex flex-col items-center">
            <Logo />
            <Heading size="lg" className="mt-4">
              uDesign
            </Heading>
            <Text size="lg" className="text-gray-400 mt-1">
              Login and start now!
            </Text>
          </header>

          <form
            onSubmit={handleLogIn}
            className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4"
          >
            <label htmlFor="email" className="flex flex-col gap-3">
              <Text className="font-semibold">E-mail </Text>
              <TextInput.Root>
                <TextInput.Icon>
                  <EnvelopeSimple />
                </TextInput.Icon>
                <TextInput.Input
                  type="email"
                  id="email"
                  placeholder="johndoe@email.com"
                />
              </TextInput.Root>
            </label>

            <label htmlFor="password" className="flex flex-col gap-3">
              <Text className="font-semibold">Password</Text>
              <TextInput.Root>
                <TextInput.Icon>
                  <Lock />
                </TextInput.Icon>
                <TextInput.Input
                  type="password"
                  id="password"
                  placeholder="**********"
                />
              </TextInput.Root>
            </label>

            <label htmlFor="remember" className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Text size="sm" className="text-gray-200">
                Remember-me for 30 days
              </Text>
            </label>

            <Button type="submit" className="mt-4">
              Log in
            </Button>
          </form>

          <footer className="flex flex-col items-center gap-4 mt-8">
            <Text size="sm" asChild>
              <a
                href="#"
                className="text-gray-400 underline hover:text-gray-200 transition-colors"
              >
                Forgot password?
              </a>
            </Text>
            <Text size="sm" asChild>
              <a
                href="#"
                className="text-gray-400 underline hover:text-gray-200 transition-colors"
              >
                Don't have an account yet? Sign up
              </a>
            </Text>
          </footer>
        </>
      )}
    </div>
  );
}
