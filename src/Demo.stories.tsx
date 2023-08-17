import type { Meta, StoryObj } from "@storybook/react";
import { Outlet } from "react-router-dom";
import {
  reactRouterNestedAncestors,
  reactRouterParameters,
  withRouter,
} from "storybook-addon-react-router-v6";

const meta = {
  title: "Demo",
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: reactRouterNestedAncestors([
        {
          path: "/",
          element: (
            <div>
              Parent
              <Outlet />
            </div>
          ),
        },
      ]),
    }),
  },
} satisfies Meta;

export default meta;

export const Demo_: StoryObj<{
  test: string;
}> = {
  args: {
    test: "test",
  },
  render: ({ test }) => <div>{test}</div>,
};
