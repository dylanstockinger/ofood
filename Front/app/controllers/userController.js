
const fetch = require('node-fetch');

const backUrl = "http://localhost:3000/";

const userController = {

    loginPage(req, res) {
        res.render('loginPage');
    },

    dashboardPage(req, res) {
        res.render('dashboard');
    },

    async loginAction(req, res) {
        const data = req.body;
        let result;
        try {
            const response =  await fetch(backUrl+"login", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {'Content-Type': 'application/json'}
            });
            
            result = await response.json();

            req.session.user = result;
            res.redirect('/');

        } catch (error) {
            console.trace(error);
        }
    },

    disconnect(req, res) {
        req.session.user = false;
        res.redirect('/');
    }
};

module.exports = userController;