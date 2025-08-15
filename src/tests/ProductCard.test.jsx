import { describe, it, expect } from "vitest";
import ProductCard from '../components/ProductCard.jsx'
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"

const mockProduct = {
    id: 1, 
    title: 'Parthiv is the best',
    price: 100.95,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: {rate: 3.9}
}

const mockAddToCart = vi.fn()

describe("The ProductCard Component", () => {
    it("renders the main compoennt", () => {
        render(<ProductCard product={mockProduct} addToCart={mockAddToCart}/>)

        expect(screen.getByRole('heading', {name: /Parthiv is the best/i })).toBeInTheDocument()
        expect(screen.getByRole('img')).toBeInTheDocument()
        expect(screen.getByText('$100.95')).toBeInTheDocument()
    })

    it("calls addToCart with the correct quantity when button is clicked", async () => {
        const user = userEvent.setup()
        render(<ProductCard product={mockProduct} addToCart={mockAddToCart} />);

        const quantityInput = screen.getByRole('spinbutton')
        const addToCartButton = screen.getByRole('button', {name: /Add to Cart/i})

        await user.click(quantityInput)
        await user.keyboard('2')
        await user.click(addToCartButton)

        expect(mockAddToCart).toHaveBeenCalledWith(mockProduct, 2)
    
    })
})