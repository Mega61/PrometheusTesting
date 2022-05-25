describe('Create task test', function () {
    before(function () {
        cy.fixture('user').then(function (data) {
            this.data = data;
        })
        cy.fixture('task').then(function (data2) {
            this.data2 = data2;
        })
    })
    it('Create task in app', function () {

        cy.visit('https://prometheus-app-741b2.web.app')

        cy.get('input[placeholder="Correo"]').should('have.attr', 'placeholder', 'Correo')
        cy.get('input[placeholder="Correo"]').type(this.data.Correo).should('have.value', this.data.Correo)

        cy.get('input[placeholder="Contraseña"]').should('have.attr', 'placeholder', 'Contraseña')
        cy.get('input[placeholder="Contraseña"]').type(this.data.Contraseña).should('have.value', this.data.Contraseña)

        cy.contains('Iniciar Sesión').click()

        cy.url().should('include', '/inicio')

        cy.get('a[href*="/tareas"]').click()

        cy.get('input[placeholder="Título tarea"]').should('have.attr', 'placeholder', 'Título tarea')
        cy.get('input[placeholder="Título tarea"]').type(this.data2.Titulo).should('have.value', this.data2.Titulo)

        cy.get('input[placeholder="Dificultad (1-10)"]').should('have.attr', 'placeholder', 'Dificultad (1-10)')
        cy.get('input[placeholder="Dificultad (1-10)"]').type(this.data2.Dificultad).should('have.value', this.data2.Dificultad)

        cy.get('input[placeholder="Fecha fin"]').should('have.attr', 'placeholder', 'Fecha fin')
        cy.get('input[placeholder="Fecha fin"]').type(this.data2.Fechafin).should('have.value', this.data2.Fechafin)

        cy.get('select').select('8').should('have.value', '8')

        cy.get('button').click()


    })
})