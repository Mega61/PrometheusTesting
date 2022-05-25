describe('End to End test', function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    before(function () {
        cy.fixture('user').then(function (data) {
            this.data = data;
        })
        cy.fixture('task').then(function (data2) {
            this.data2 = data2;
        })
    })
    it('Register to task creation', function () {

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

        cy.get('a[href*="/temporizador"]').click()

        cy.get('button[class="with-text"]').click()

        cy.get('div[class="slider"]').click(100,0)

        cy.get('div[class="slider green"]').click(50,0)

        cy.get('button[class="with-text"]').click()

        cy.wait(1000)

        cy.get('select').select(this.data2.Titulo).should('contain',this.data2.Titulo)

        cy.get('button[style="position: relative; top: -2px; left: -100px;"]').click()

    })
})