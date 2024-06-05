class HomePage {
    visit() {
        cy.visit('https://demoblaze.com')
    }

    clickAboutUs() {
        cy.get('a').contains('About us').click()
    }
}

export default HomePage
