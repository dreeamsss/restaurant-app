import Container from "../UI/Container";
import ProductItem from "../Products/ProductItem";
import classes from "./ProductList.module.scss";

function ProductList() {
  console.log(123);
  const PRODUCTS_DATA = [
    {
      id: 1,
      title: 'Ролл "Наоми"',
      description:
        "Сыр Филадельфия, куриное филе, масаго, помидор, огурец, кунжут",
      price: 11.99,
    },
    {
      id: 2,
      title: 'Ролл "Наоми"',
      description:
        "Сыр Филадельфия, куриное филе, масаго, помидор, огурец, кунжут",
      price: 12.39,
    },
    {
      id: 3,
      title: 'Ролл "Наоми"',
      description:
        "Сыр Филадельфия, куриное филе, масаго, помидор, огурец, кунжут",
      price: 11.99,
    },
    {
      id: 4,
      title: 'Ролл "Наоми"',
      description:
        "Сыр Филадельфия, куриное филе, масаго, помидор, огурец, кунжут",
      price: 11.99,
    },
    {
      id: 5,
      title: 'Ролл "Наоми"',
      description:
        "Сыр Филадельфия, куриное филе, масаго, помидор, огурец, кунжут",
      price: 11.99,
    },
  ];

  return (
    <Container className={classes.container}>
      <ul className={classes.list}>
        {PRODUCTS_DATA.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </ul>
    </Container>
  );
}

export default ProductList;
