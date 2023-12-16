import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import HomeAccordion from './HomeAccordion';
import HomePie from './HomePie';
import InventoryIcon from '@mui/icons-material/Inventory';
import FeedIcon from '@mui/icons-material/Feed';
import "./dashhome.css"
import { getAllCategories , getSingleCategory ,getTrendingProducts , getAllProducts} from '../../../api/services/user/product-services';
import { fetchAllOrders} from '../../../api/services/admin/admin-services';
import { getAllPosts} from '../../../api/services/user/post-services';
import React, { useEffect, useState } from 'react';



export default function Home() {
  const [orders, setOrders] = useState([]);
  const [orderCount, setOrderCount] = useState(0);
  const [ProductsCount, setProductsCount] = useState(0);
  const [PostsCount, setPostsCount] = useState(0);
  const [totalPriceSum, setTotalPriceSum] = useState(0);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const allCategories = await getAllCategories();

        const categoryProductsData = await Promise.all(
          allCategories.map(async (category) => {
            const categoryId = category.id;
            const singleCategory = await getSingleCategory(categoryId);
            const productsCount = singleCategory.products.count;
            console.log(categoryId, singleCategory , productsCount);
            return {
              ...category,
              productsCount: productsCount,
            };
          })
        );

        setCategoryProducts(categoryProductsData);
      } catch (error) {
        console.error('Error fetching category products:', error);
        // Handle error
      }
    };

    const fetchTrendingProducts = async () => {
      try {
        const trendingProductsData = await getTrendingProducts();
        setTrendingProducts(trendingProductsData);
      } catch (error) {
        console.error('Error fetching trending products:', error);
        // Handle error
      }
    };

    fetchCategoryProducts();
    fetchTrendingProducts();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allPosts = await getAllPosts();
        const allProducts = await getAllProducts();
        const allOrders = await fetchAllOrders();
        setOrders(allOrders);

        // Calculate total price sum across all orders
        const totalSum = allOrders.reduce((acc, order) => {
          const orderTotalPrice = order.products.reduce((total, product) => {
            const productTotalPrice = parseFloat(product.total_price) || 0;
            return total + productTotalPrice;
          }, 0);
          return acc + orderTotalPrice;
        }, 0);
        setTotalPriceSum(totalSum);

        // Set order count
        setOrderCount(allOrders.length);
        setPostsCount(allPosts.count);
        setProductsCount(allProducts.count);
      } catch (error) {
        console.error('Error fetching orders:', error);
        // Handle error
      }
    };

    fetchData();
  }, []);

  console.log("trending products",trendingProducts.results);

  const chartData = {
    labels: categoryProducts.map((category) => category.name),
    datasets: [
      {
        data: categoryProducts.map((category) => category.productsCount),
      },
    ],
  };


    return (
      <Box height={70} sx={{ flexGrow: 1 ,p:3,backgroundColor:"#E9E8E8",height:100+"%"}}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Stack spacing={2} direction={"row"}>
            <Card sx={{ minWidth: 49+"%" ,height:150}} className='dashhome-gradient'>
              <CardContent>
              <div style={{marginBottom:"20px"}}>
                  <CreditCardIcon fontSize='large'/>
                </div>
                <Typography gutterBottom variant="h5" component="div">
                  {totalPriceSum.toFixed(2)}$
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                  Total Earnings
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 49+"%" ,height:150}} className='dashhome-gradientLight'>
              <CardContent>
                <div style={{marginBottom:"20px"}}>
                    <ShoppingBagIcon fontSize='large'/>
                </div>
                <Typography gutterBottom variant="h5" component="div">
                  {orderCount}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                  Total Orders
                </Typography>
              </CardContent>
            </Card>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack spacing={1}>
            <Card sx={{ }}>
              <Stack spacing={2} direction={"row"}> 
                <div className='dashhome-icon'>
                  <InventoryIcon fontSize='large'/>
                </div>
                <div className='dashhome-padding'>
                  <span className='dashhome-priceTitle'>{ProductsCount}</span>
                  <br/>
                  <span className='dashhome-priceSubTitle'>Total Products</span>
                </div>
              </Stack>
            </Card>
            <Card sx={{ }}>
              <Stack spacing={2} direction={"row"}> 
                <div className='dashhome-icon'>
                  <FeedIcon fontSize='large'/>
                </div>
                <div className='dashhome-padding'>
                  <span className='dashhome-priceTitle'>{PostsCount}</span>
                  <br/>
                  <span className='dashhome-priceSubTitle'>Total Posts</span>
                </div>
              </Stack>
            </Card>
            </Stack>
          </Grid>
        </Grid>

        <Box height={20}/>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Card sx={{ height:60+"vh" }}>
              <CardContent>
              <div className='dashhome-padding'>
                  <p className='dashhome-priceTitle' style={{marginBottom:"30px"}}>Products Per Category</p>
                <HomePie data={chartData} categoryProducts={categoryProducts}/>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ height:60+"vh" }}>
              <CardContent>
                <div className='dashhome-padding'>
                  <span className='dashhome-priceTitle'>Trending Products</span>
                  <HomeAccordion trendingProducts={trendingProducts.results}/>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    );
  }