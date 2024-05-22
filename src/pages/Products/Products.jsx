import { Link, useNavigate, useParams } from "react-router-dom";
import ProductList from "../../components/ProductList/ProductList";
import { products } from "../../data/data";
import "./Products.css";
import { useEffect, useState } from "react";
import { categories, subCategories } from "../../contants/categories";
import { wordToUpercase } from "../../utils/wordToUpercase";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
function Products() {
  const [productsState, setProductsState] = useState(products);
  const [categoriesDropDown, setCategoriesDropDown] = useState(0);
  const { category, subCategory } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!category) {
      setProductsState(products);
    }
    if (category && !subCategory) {
      setProductsState(products.filter((prod) => prod.category == category));
    }
    if (category && subCategory) {
      setProductsState(
        products.filter((prod) => prod.subCategory == subCategory)
      );
    }
  }, [category, subCategory]);

  const handleDropDownButton = (position, categoryName) => {
    setCategoriesDropDown(categoriesDropDown == position ? 0 : position);
    if (!subCategory || category != categoryName) {
      navigate(`/products/${categoryName}`);
    }
  };

  return (
    <div className='Products'>
      <div className='ProductsCategories'>
        <div className='ProductsDropDown'>
          <button onClick={() => handleDropDownButton(1, categories.TALLER)}>
            {wordToUpercase(categories.TALLER)} <KeyboardArrowDownIcon />
          </button>
          <div
            className={
              categoriesDropDown == 1 ? "SubCategoriesDropDownShow" : " "
            }>
            {subCategories.TALLER.map((subCategory) => (
              <Link to={`/products/${categories.TALLER}/${subCategory}`}>
                {wordToUpercase(subCategory)}
              </Link>
            ))}
          </div>
        </div>
        <div className='ProductsDropDown'>
          <button
            onClick={() => handleDropDownButton(2, categories.CONTRUCCION)}>
            {wordToUpercase(categories.CONTRUCCION)} <KeyboardArrowDownIcon />
          </button>
          <div
            className={
              categoriesDropDown == 2 ? "SubCategoriesDropDownShow" : " "
            }>
            {subCategories.CONTRUCCION.map((subCategory) => (
              <Link to={`/products/${categories.CONTRUCCION}/${subCategory}`}>
                {wordToUpercase(subCategory)}
              </Link>
            ))}
          </div>
        </div>
        <div className='ProductsDropDown'>
          <button
            onClick={() => handleDropDownButton(3, categories.ELECTRICIDAD)}>
            {wordToUpercase(categories.ELECTRICIDAD)} <KeyboardArrowDownIcon />
          </button>
          <div
            className={
              categoriesDropDown == 3 ? "SubCategoriesDropDownShow" : " "
            }>
            {subCategories.ELECTRICIDAD.map((subCategory) => (
              <Link to={`/products/${categories.ELECTRICIDAD}/${subCategory}`}>
                {wordToUpercase(subCategory)}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className='positionSection'>
        <Link to='/products'>Products</Link>
        {category && (
          <>
            <KeyboardArrowRightIcon />
            <Link to={`/products/${category}`}>{wordToUpercase(category)}</Link>
          </>
        )}
        {subCategory && (
          <>
            <KeyboardArrowRightIcon />
            <span>{wordToUpercase(subCategory)}</span>
          </>
        )}
      </div>
      <ProductList products={productsState} />
    </div>
  );
}

export default Products;
