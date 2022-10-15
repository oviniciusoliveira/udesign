import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { rest } from "msw";

import { LogIn } from "./LogIn";

export default {
  title: "Pages/Log In",
  parameters: {
    msw: {
      handlers: [
        rest.post("/sessions", (req, res, ctx) => {
          return res(
            ctx.json({
              message: "Success",
            })
          );
        }),
      ],
    },
  },
  component: LogIn,
  args: {},
  argTypes: {},
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    userEvent.type(
      canvas.getByPlaceholderText("johndoe@email.com"),
      "test@email.com"
    );
    userEvent.type(canvas.getByPlaceholderText("**********"), "12345678");
    userEvent.click(canvas.getByRole("button"));
    await waitFor(() =>
      expect(canvas.getByText("Welcome!")).toBeInTheDocument()
    );
  },
};
