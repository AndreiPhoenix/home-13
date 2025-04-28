// Оптимизированный компонент товара
const ProductItem = React.memo(({ product, onAddToFavourites }) => {
  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={() => onAddToFavourites(product)}>
        Добавить в избранное
      </button>
    </div>
  );
});

// В родительском компоненте
const ProductList = ({ products }) => {
  const handleAddToFavourites = useCallback((product) => {
    // Логика добавления в избранное
  }, []);

  const memoizedProducts = useMemo(() => products.map(product => (
    <ProductItem 
      key={product.id} 
      product={product} 
      onAddToFavourites={handleAddToFavourites} 
    />
  )), [products, handleAddToFavourites]);

  return <div className="product-list">{memoizedProducts}</div>;
};
