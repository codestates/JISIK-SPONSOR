module.exports = {
  get: async (req, res, next) => {
    try {
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  }
};
