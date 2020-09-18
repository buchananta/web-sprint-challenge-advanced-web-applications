import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

import mockAxiosGet from '../utils/axiosGet';
jest.mock('../utils/axiosGet')

const testData = { data: [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff"
    },
    id: 1
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc"
    },
    id: 2
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff"
    },
    id: 3
  },
  {
    color: "aquamarine",
    code: {
      hex: "#7fffd4"
    },
    id: 4
  },
  {
    color: "lilac",
    code: {
      hex: "#9a99dd"
    },
    id: 5
  }
]};

mockAxiosGet.mockResolvedValue(testData);

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  render(<BubblePage />);
  const circles = await screen.findAllByTestId('circle');
  expect(circles).toHaveLength(5);
});
