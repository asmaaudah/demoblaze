class ProductPage {
    addToCart() {
        cy.get('a').contains('Add to cart').click()
    }
}

export default ProductPage
