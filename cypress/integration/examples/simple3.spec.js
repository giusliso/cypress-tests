describe('website zerobank form test', () => {
    it('should override time', () => {
        const date = new Date(2020, 3, 10).getTime() // Timestamp
        cy.clock(date)
        cy.log(date)
    })

    it('should load website zerobank', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.title().should('contain', 'Zero - Log in')
        cy.clearCookies({log:true})
        cy.clearLocalStorage('item', {log:true})
    })

    it('should fill username', () => {
          cy.get('#user_login').as('username')
          cy.get('@username').clear()
          cy.get('@username').type('user', {delay: 50})
    })

    it('should fill password', () => {
        cy.get('#user_password').as('password')
        cy.get('@password').clear()
        cy.get('@password').type('password', {delay: 50})
        cy.wait(3000)
    })

    it('should mark checkbox', () => {
        cy.get('input[type="checkbox"]').click()
    })

    it('should submit form login', () => {
        cy.contains('Sign in').click()
    })

    it('should error message appear', () => {
        cy.wait(3000)
        cy.get('.alert-error')
           .should('be.visible')
           .should('contain', 'Login and/or password are wrong.')
    })
})