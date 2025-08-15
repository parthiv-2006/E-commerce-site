import { describe, it, expect } from "vitest";
import App from "../App.jsx";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve([
        {
          id: 1,
          title: "Parthiv is the best",
          price: 100.95,
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          rating: { rate: 3.9 },
        },
        {
          id: 2,
          title: "Parthiv is the best (2)",
          price: 6969,
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          rating: { rate: 5.0 },
        }
      ]),
  })
);

describe('App integration flow', () => {
    it('allow a user to add an item to the cart and see it on the cart page', async () => {
        const user = userEvent.setup()
        render(<App />)

        await user.click(screen.getByRole('link', {name: /Shop/i}))
        const addToCartButtons = await screen.findAllByRole('button', {name: /Add to Cart/i})
        await user.click(addToCartButtons[0])

        const cartLink = screen.getByRole('link', {name: /Cart/i})
        expect(cartLink).toBeInTheDocument();

        await user.click(cartLink)
        expect(screen.getByText('Parthiv is the best')).toBeInTheDocument()
        expect(screen.getByText('$100.95')).toBeInTheDocument()
    })
})
