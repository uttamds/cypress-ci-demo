class LoginPage {

    visit() {
        cy.visit("/login")
    }

    enterUsername(username) {
        cy.get("#username").type(username)
    }

    enterPassword(password) {
        cy.get("#password").type(password)
    }

    clickLogin() {
        cy.get("#loginBtn").click()
    }

    login(username, password) {

        this.visit()

        this.enterUsername(username)

        this.enterPassword(password)

        this.clickLogin()

    }

}

export default new LoginPage()