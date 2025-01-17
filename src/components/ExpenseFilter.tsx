import categories from "../categories";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      id="categories"
      name="categories"
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((categories) => (
        <option key={categories} value={categories}>
          {categories}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
