export const notFound = (res, entity = "Item") => {
  return res.status(404).json({ message: `${entity} not found` });
};

export const handleError = (res, error) => {
  return res.status(500).json({ message: error?.message || "Server error" });
};
