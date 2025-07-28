const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const message = err.errors?.[0]?.message || 'Invalid input';

    console.log('Validation error:', message);

    res.status(400).json({ msg: err });
  }
};

module.exports = validate;
