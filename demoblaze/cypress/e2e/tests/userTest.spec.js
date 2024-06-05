import LoginPage from '../../pageObjects/loginPage'
import RegisterPage from '../../pageObjects/registerPage'
import ContactPage from '../../pageObjects/contactPage'
import HomePage from '../../pageObjects/homePage'

const loginPage = new LoginPage()
const registerPage = new RegisterPage()
const contactPage = new ContactPage()
const homePage = new HomePage()

describe('User Tests', () => {
    it('Verify user can register successfully', () => {
        registerPage.visit()
        registerPage.clickSignUp()
        registerPage.enterUsername('tes890')
        registerPage.enterPassword('12345')
        registerPage.submit()
    })

    it('Verify user can log in successfully', () => {
        loginPage.visit()
        loginPage.clickLogin()
        loginPage.enterUsername('tes890')
        loginPage.enterPassword('12345')
        loginPage.submit()
    })

    it('Verify user can send a message through the contact form', () => {
        contactPage.visit()
        contactPage.fillContactForm('test@example.com', 'Test User', 'This is a test message.')
        contactPage.sendMessage()
    })

    it('Verify user can navigate to the About Us page', () => {
        homePage.visit()
        homePage.clickAboutUs()
    })
})
