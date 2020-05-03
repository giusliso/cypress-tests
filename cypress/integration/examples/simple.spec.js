describe('My first test', () => {
    it('Should load correct url', () => {
        cy.visit('http://example.com/', {timeout: 100000})
    })
    it('Should check correct url', () => {
        cy.url().should('contain','example')
    })

    it('Should wait for 3 seconds', () => {
        cy.wait(3000)
    })

    it('Should pause execution', () => {
        cy.pause()
    })

    it('Should check for correct elements on the page', () => {
        cy.get('h1').should('be.visible')
        cy.get('h1').should('contain.text','Example')
    })
})
