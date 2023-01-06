const { Contact } = require("../../models/contact");
const addContact = async (req, res, next) => {
  try {
    //витягнемо з реквеста id перейменуємо в owner та передамо в контакти
    const { _id: owner } = req.user;
    const result = await Contact.create({ ...req.body, owner });
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};
module.exports = addContact;
