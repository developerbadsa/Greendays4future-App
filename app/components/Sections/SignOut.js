import React from "react";

import Background from "../utils/Background";
import Logo from "../utils/Logo";
import Header from "../utils/Header";
import Paragraph from "../utils/Paragraph";
import Button from "../utils/Button";

export default function SignOut({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Welcome 💫</Header>
      <Paragraph>Congratulations you are logged in.</Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: "StartScreen" }],
          })
        }
      >
        Sign out
      </Button>
    </Background>
  );
}
