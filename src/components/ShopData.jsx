// const ShopData = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch products when the components mounts
//     fetch('https://fakestoreapi.com/products')
//       .then((res) => res.json())
//       .then((json) => {
//         setProducts(json);
//       })
//       .catch((error) => {
//         console.error('Error fetching products: ', error);
//       });
//   }, []); // Empty dependency array to run only once on mount
// }