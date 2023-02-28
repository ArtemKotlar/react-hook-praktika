import { MaterialsCart } from './MaterialsCart';

export const Materials = ({ items, ...otherProps }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <MaterialsCart item={item} {...otherProps} />
          <hr />
        </li>
      ))}
    </ul>
  );
};
