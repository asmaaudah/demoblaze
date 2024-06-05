class LoginPage {
  visit() {
      cy.visit('https://demoblaze.com')
  }

  clickLogin() {
      cy.get('#login2').click()
  }

  enterUsername(username) {
      cy.get('#loginusername').type(username)
  }

  enterPassword(password) {
      cy.get('#loginpassword').type(password)
  }

  submit() {
      cy.get('button').contains('Log in').click()
  }
}

export default LoginPage
