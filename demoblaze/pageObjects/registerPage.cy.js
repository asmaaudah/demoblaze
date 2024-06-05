class RegisterPage {
    visit() {
        cy.visit('https://demoblaze.com')
    }

    clickSignUp() {
        cy.get('#signin2').click()
    }

    enterUsername(username) {
        cy.get('#sign-username').type(username)
    }

    enterPassword(password) {
        cy.get('#sign-password').type(password)
    }

    submit() {
        cy.get('button').contains('Sign up').click()
    }
}

export default RegisterPage
