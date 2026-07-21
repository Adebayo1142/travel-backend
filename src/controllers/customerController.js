export const getProfile = async (req, res) => {

  const { password, ...customer } = req.user;

  return res.status(200).json({
    success: true,
    data: customer,
  });

};