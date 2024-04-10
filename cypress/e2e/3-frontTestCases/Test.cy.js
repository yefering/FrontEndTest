describe("Prueba tecnica Front-End", () =>{

    it.only("Caso 1: Validar compra con usuario creado", () =>{
        //Se accede al sitio
        cy.visit("https://www.demoblaze.com/")

        //Se realiza el login
        cy.get("#login2").should("be.visible").click()
        cy.wait(2000)
        cy.get("#loginusername").should("be.visible").type("yeff")
        cy.get("#loginpassword").should("be.visible").type("yeffqa")
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should("be.visible").click()
        
        //Se accede al primer articulo
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.col-sm-12 > .btn').should("be.visible").click()
        cy.get('.active > .nav-link').should("be.visible").click()
        
        //Se acccede al segundo articlo
        cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch').should("be.visible").click()
        cy.get('.col-sm-12 > .btn').should("be.visible").click()
        
        //Se accede al Cart
        cy.get('#cartur').should("be.visible").click()
        
        //Se completan los datos de la orden
        cy.get('.col-lg-1 > .btn').should("be.visible").click()
        cy.wait(2000)
        cy.get('#name').should("be.visible").type("yeff")
        cy.get('#country').should("be.visible").type("Argentina")
        cy.get("#city").should("be.visible").type("Buenos Aires")
        cy.get("#card").should("be.visible").type("4155006485216974")
        cy.get("#month").should("be.visible").type("07")
        cy.get('#year').should("be.visible").type("2025")
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should("be.visible").click()
        cy.get('.sweet-alert > h2').should("be.visible")
        cy.wait(3000)

        //Se confirma la orden
        cy.get('.confirm').should("be.visible").click()
        cy.get('#logout2').should("be.visible").click()
    })

    it.only("Caso 2: Validar compra con usuario standard_user", () =>{
        //Se accede al sitio
        cy.visit("https://www.demoblaze.com/")

        //Se realiza el login
        cy.get("#login2").should("be.visible").click()
        cy.wait(2000)
        cy.get("#loginusername").should("be.visible").type("standard_user")
        cy.get("#loginpassword").should("be.visible").type("secret_sauce")
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should("be.visible").click()
        
        //Se accede al primer articulo
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.col-sm-12 > .btn').should("be.visible").click()
        cy.get('.active > .nav-link').should("be.visible").click()
        
        //Se acccede al segundo articlo
        cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch').should("be.visible").click()
        cy.get('.col-sm-12 > .btn').should("be.visible").click()
        
        //Se accede al Cart
        cy.get('#cartur').should("be.visible").click()
        
        //Se completan los datos de la orden
        cy.get('.col-lg-1 > .btn').should("be.visible").click()
        cy.wait(2000)
        cy.get('#name').should("be.visible").type("yeff")
        cy.get('#country').should("be.visible").type("Argentina")
        cy.get("#city").should("be.visible").type("Buenos Aires")
        cy.get("#card").should("be.visible").type("4155006485216974")
        cy.get("#month").should("be.visible").type("07")
        cy.get('#year').should("be.visible").type("2025")
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').should("be.visible").click()
        cy.get('.sweet-alert > h2').should("be.visible")
        cy.wait(3000)

        //Se confirma la orden
        cy.get('.confirm').should("be.visible").click()
        cy.get('#logout2').should("be.visible").click()
    })
})