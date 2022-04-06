import { useState,useEffect } from 'react';
import { useLocation,useParams } from 'react-router-dom';
import './productdetail.css';
import { ProductDetailTypes } from './productDetailTypes';
import { ProductType } from '../../ui/product/productType';
import Breadcrumb from '../../ui/breadcrumb/Breadcrumb';
import MobProductDetail from './MobProductDetail';
import DesProductDetail from './DesProductDetail';
import { useGetProductsQuery } from '../../services/productsApi';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { GetCatalogDataType } from '../catalog/catalogTypes';
import Loader from '../../ui/loading/Loading';

const ProductDetail = () => {
    
    const { category, productId } = useParams()
    const location = useLocation()

    let id = 1
    let catalog = ''

    if (productId && category){
        id = Number.parseInt(productId)
        catalog = category
    }

    const recentlyProducts = useSelector((state:RootState) => state.recently)

    const fetchData = useGetProductsQuery(catalog)
    const data:GetCatalogDataType = fetchData.data
    const isLoading:boolean = fetchData.isLoading
    
    let product = {} as ProductType
    const pr = data?.products.find(product => product.id === id)
    
    if (pr){
       product = pr
    }

    const isFavourite =  useSelector((state:RootState) => state.favourites).some(item => item.product.name === product?.name)

    useEffect(() => {
        window.scrollTo(0, 0)     
    }, [])
        
    const sizes=[
        {title:'14.00', size:14},
        {title:'14.25', size:14.25},
        {title:'14.50', size:14.5},
        {title:'14.75', size:14.75},
        {title:'15.00', size:15},
        {title:'15.25', size:15.25},
        {title:'15.50', size:15.5},
        {title:'15.75', size:15.75},
        {title:'16.00', size:16},
        {title:'16.25', size:16.25},
        {title:'16.50', size:16.5},
        {title:'16.75', size:16.75},
    ]

    const [femaleSize, setFemaleSize] = useState({title:'14.00', size:14})/*ayollar*/
    const [maleSize, setMaleSize] = useState({title:'14.00', size:14})/*erkaklar*/
    const [flActive, setFlActive] = useState(false)
    const [mlActive, setMlActive] = useState(false)
    const [givenRating, setGivenRating] = useState(0)

    const handleRating = (rating:number):void => {
        if(givenRating < rating){
            setGivenRating(rating)
        }else{
            setGivenRating(rating - 1)
        }
    }
    
    const ProductDetailProps:ProductDetailTypes = {
        product, recentlyProducts, sizes, 
        maleSize, setMaleSize, 
        femaleSize, setFemaleSize, 
        flActive, setFlActive, 
        mlActive, setMlActive, 
        givenRating, handleRating, 
        isFavourite
    }
    
    if (isLoading) return <Loader />
       
    return (
        <div >
            <div className="wrapper">
                <Breadcrumb location={location} />
                <div className="mobile_product_detail">
                    <MobProductDetail {...ProductDetailProps} />
                </div>
                <div className="desctop_product_detail">
                    <DesProductDetail {...ProductDetailProps} />
                </div>
            </div>
        </div>
    );}

export default ProductDetail;