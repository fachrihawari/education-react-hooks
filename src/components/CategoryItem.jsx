import { formatCurrency } from "../helpers/currency";

function CategoryItem(props) {
  const { id, name } = props;

  return (
    <tr>
      <th>{id}</th>
      <th>{name}</th>
    </tr>
  );
}

export default CategoryItem;
