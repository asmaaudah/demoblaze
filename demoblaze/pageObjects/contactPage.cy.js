class ContactPage {
    visit() {
        cy.get('a').contains('Contact').click()
    }

    fillContactForm(email, name, message) {
        cy.get('#recipient-email').type(email)
        cy.get('#recipient-name').type(name)
        cy.get('#message-text').type(message)
    }

    sendMessage() {
        cy.get('button').contains('Send message').click()
    }
}

export default ContactPage
