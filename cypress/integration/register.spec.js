describe('Register test',function() {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    before(function () {
        cy.fixture('user').then(function (data) {
            this.data = data;
        })
    })
    it('Get into register', function() {

        cy.visit('https://prometheus-app-741b2.web.app')

        cy.contains('Registrate').click()

        cy.url().should('include', '/registro')

        cy.get('input[placeholder="Nombre*"]').should('have.attr', 'placeholder', 'Nombre*')
        cy.get('input[placeholder="Nombre*"]').type(this.data.Nombre).should('have.value', this.data.Nombre)

        cy.get('input[placeholder="Correo*"]').should('have.attr', 'placeholder', 'Correo*')
        cy.get('input[placeholder="Correo*"]').type(this.data.Correo).should('have.value', this.data.Correo)

        cy.get('select').select(this.data.Genero).should('have.value', this.data.Genero)

        cy.get('input[placeholder="Teléfono*"]').should('have.attr', 'placeholder', 'Teléfono*')
        cy.get('input[placeholder="Teléfono*"]').type(this.data.Telefono).should('have.value', this.data.Telefono)

        cy.get('input[placeholder="Contraseña*"]').should('have.attr', 'placeholder', 'Contraseña*')
        cy.get('input[placeholder="Contraseña*"]').type(this.data.Contraseña).should('have.value', this.data.Contraseña)

        cy.get('input[placeholder="Confirmar Contraseña*"]').should('have.attr', 'placeholder', 'Confirmar Contraseña*')
        cy.get('input[placeholder="Confirmar Contraseña*"]').type(this.data.Contraseña).should('have.value', this.data.Contraseña)

        cy.contains('Confirmar').click()

        cy.url().should('include', '/login')

    })
})