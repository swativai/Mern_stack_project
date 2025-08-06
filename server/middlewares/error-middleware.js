const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'BACKEND ERROR';
  const extraInfo = err.extraInfo || 'backend error';

  res.status(status).json({ message, extraInfo });
};

module.exports = errorMiddleware;
