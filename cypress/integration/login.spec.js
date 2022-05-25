describe('Login test', function () {
    before(function () {
        cy.fixture('user').then(function (data) {
            this.data = data;
        })
    })
    it('Login into app', function () {

        cy.visit('https://prometheus-app-741b2.web.app')

        cy.get('input[placeholder="Correo"]').should('have.attr', 'placeholder', 'Correo')
        cy.get('input[placeholder="Correo"]').type(this.data.Correo).should('have.value', this.data.Correo)

        cy.get('input[placeholder="Contraseña"]').should('have.attr', 'placeholder', 'Contraseña')
        cy.get('input[placeholder="Contraseña"]').type(this.data.Contraseña).should('have.value', this.data.Contraseña)

        cy.contains('Iniciar Sesión').click()

        cy.url().should('include', '/inicio')

    })
})