export const MaterialsCart = ({ item, onDelete, onUpdate }) => {
  return (
    <div>
      <p>
        <b>Ім'я:</b> {item.name}
      </p>
      <p>
        <b>Аватар:</b> {item.avatar}
      </p>
      <button type="button" onClick={() => onDelete(item.id)}>
        Видалити
      </button>
      <button
        type="button"
        onClick={() => onUpdate({ id: item.id, name: Date.now() })}
      >
        Редагувати
      </button>
    </div>
  );
};
