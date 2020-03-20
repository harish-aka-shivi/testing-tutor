// echo function for now.
const problemsApi = (req, res) => {
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
  });
};

export default problemsApi;
