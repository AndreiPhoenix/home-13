const ProductDetails = lazy(() => import('./ProductDetails'));

const ProductPage = () => (
  <Suspense fallback={<Spinner />}>
    <ProductDetails />
  </Suspense>
);
