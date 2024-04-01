const express = require("express")
const ContactUs_Route = express()

const contact_Controller = require("../Controller/ContactUsController.cjs")



ContactUs_Route.post("/addcontact",contact_Controller.addcontact)
ContactUs_Route.get("/getAllContact",contact_Controller.getContact)

module.exports = ContactUs_Route