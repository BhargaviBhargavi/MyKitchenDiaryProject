describe("verifying web page",()=>{
    it("verifying the content in recipe page",()=>{
        cy.visit("/home")
        cy.wait(5000)
        cy.get(`[ class="image"]`).should("exist")
        cy.get(`[class="dropbtn"]`).eq(0).should("contain","Home")
        cy.get(`.dropbtn`).eq(1).should("contain","Recipes")
        cy.get(`.dropbtn`).eq(2).should("contain","Popular")
        cy.get(`.dropbtn`).eq(3).should("contain","Main Ingredients")
        cy.get(`.dropbtn`).eq(4).should("contain","Recipe History")
        cy.get('.dropbtn').eq(5).should("contain","Order Food")
        cy.get('.topics').should("contain","About Us")
        cy.get(`[ class="loginlogo"]`).should("exist")
        cy.get('.searchbar').should("exist")
        cy.get('.search').should("exist")
        cy.get('.imageforhome').should("exist")
        cy.get('.textpart').should("contain","Eating")
        cy.get('.color').should("contain","You")
        cy.get('.button').should("contain","View All")
        cy.get('.head').should("contain","Recipes")
        cy.get(`.footerimage`).should("exist")
        cy.get(`.sign`).should("exist")
        // cy.get(`.types`).eq(0).should("contain","Main Ingredients")
        // cy.get(`.types`).eq(1).should("contain","Recipe History")
        // cy.get('.types').eq(2).should("contain","Order Food")
        // cy.get(`.types`).eq(3).should("contain","Recipes")
        // cy.get(`.types`).eq(4).should("contain","Popular")
        // cy.get(`.types`).eq(5).should("contain","Main Ingredients")
        // cy.get(`.types`).eq(6).should("contain","Recipe History")
        // cy.get('.types').eq(7).should("contain","Order Food")
        

        
        
    })
})