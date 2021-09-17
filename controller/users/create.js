const User = require("../../model/Input");
const hashPassword = require("../../utils/hashPassword");
const { sendMessageToDiscord } = require("../../utils/sendMessageToDisord");
require("dotenv/config");

async function create(req, res) {
  try {
    const { name, email, password } = req.body;

    const usersWithEmail = await User.find({ email: email });

    if (usersWithEmail.length > 0) {
      return res.status(409).json({
        success: false,
        message: `${email} is already in use`,
      });
    }

    const user = new User({
      name,
      email,
      password: hashPassword(password),
    });

    const result = await user.save();

    res.status(201).json({ sucess: true, result });

    await sendMessageToDiscord({
      content: `${email} Just joined 🎉`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occured",
    });
  }
}

module.exports = create;
