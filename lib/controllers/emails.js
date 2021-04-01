const { Router } = require('express');
const EmailService = require('../services/EmailService');



module.exports = Router()
  .post('/', async (req, res, next) => {
    console.log(req.body)
    try {
      const emails = await EmailService.create(req.body);
      res.send(emails);
    } catch (err) {
      next(err);
    }
  })

  .get('/', async (req, res, next) => {
    try {
        const emails = await EmailService.getEmails();
        res.send(emails);
    } catch (error) {
        next(error);
    }
})