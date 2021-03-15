import { getAllCategories } from '../../lib/spotify';

export default async (_, res) => {
  const response = await getAllCategories();
  const category = await response.json();

  const categories = category.categories.items.map((_category) => ({
    name: _category.name,
  }));

  return res.status(200).json(categories);
};
