import db from '../../database/client';

export default async (req, res) => {
  const { neBoundLat, neBoundLng, swBoundLat, swBountLng, datetime } = req.query;

  // TODO: Do something with those params
  try {
    const submissions = await db('submission').select();
    return res.json(submissions);
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
