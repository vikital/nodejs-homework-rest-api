const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `missing required name field`,
  }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "org"] } })
    .required()
    .messages({
      "any.required": `missing required email field`,
    }),
  phone: Joi.string().required().messages({
    "any.required": `missing required phone field`,
  }),
});

module.exports = addSchema;
