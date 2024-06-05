import LoginPage from '../../pageObjects/loginPage'
import ProductPage from '../../pageObjects/productPage'
import CartPage from '../../pageObjects/cartPage'

const loginPage = new LoginPage()
const productPage = new ProductPage()
const cartPage = new CartPage()

describe('Product Tests', () => {
    beforeEach(() => {
        loginPage.visit()
        loginPage.clickLogin()
        loginPage.enterUsername('tes890')
        loginPage.enterPassword('12345')
        loginPage.submit()
    })

    it('Verify user can add an item to the cart', () => {
        cy.get('a').contains('Phones').click()
        cy.get('a').contains('Samsung galaxy s6').click()
        productPage.addToCart()
    })

    it('Verify user can view items in the cart', () => {
        cartPage.visit()
    })

    it('Verify user can successfully purchase a product', () => {
        cy.get('a').contains('Phones').click()
        cy.get('a').contains('Samsung galaxy s6').click()
        productPage.addToCart()
        cartPage.visit()
        cartPage.placeOrder()
        cartPage.fillOrderDetails('Test User', 'USA', 'New York', '1234567812345678', '12', '2024')
        cartPage.purchase()
    })
})
