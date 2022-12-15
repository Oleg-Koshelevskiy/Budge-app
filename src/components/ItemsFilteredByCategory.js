import Item from "./Item";
import styles from "./ItemsFilteredByCategory.module.css";

const ItemsFilteredByCategory = ({
  category,
  categoryName,
  filteredItemsByPeriod,
}) => {
  const filteredItems = filteredItemsByPeriod.filter(
    (item) => item.category === category
  );

  const filteredItemsCost = filteredItems.map((item) => {
    return item.price * item.quantity;
  });

  const totalPriceByPeriod = filteredItemsCost.reduce(
    (prev, cur) => prev + cur,
    0
  );

  if (filteredItems.length === 0) return;

  return (
    <section className={styles.section}>
      <div className={styles.category}>
        <h2>{categoryName}:</h2>
        <div className={styles.totalPrice}>{totalPriceByPeriod} грн</div>
      </div>
      <ul className={styles.filteredItems}>
        {filteredItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default ItemsFilteredByCategory;
