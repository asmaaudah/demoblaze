class CartPage {
    visit() {
        cy.get('#cartur').click()
    }

    placeOrder() {
        cy.get('button').contains('Place Order').click()
    }

    fillOrderDetails(name, country, city, creditCard, month, year) {
        cy.get('#name').type(name)
        cy.get('#country').type(country)
        cy.get('#city').type(city)
        cy.get('#card').type(creditCard)
        cy.get('#month').type(month)
        cy.get('#year').type(year)
    }

    purchase() {
        cy.get('button').contains('Purchase').click()
    }
}

export default CartPage
