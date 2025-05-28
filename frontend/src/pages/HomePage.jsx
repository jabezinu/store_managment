import { Container,  SimpleGrid,  Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard';

const HomePage = () => {

  const {fetchProducts, products} = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("prodcts", products);
  return ( 
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8} >
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip="text"
          textAlign="center"
        >
          Current Product 🚀
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={10}
          w={"full"}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <Text fontsize='xl' textAlign={"center"} fontWeight={"bold"} color="gray.500">
          No Products found 😢{" "}
          <Link to={"/create"}>
            <Text as="span" color="blue.500" _hover={{ textAlign: "underline" }}>
              <Link to={"/create"}>Create Product.</Link>
            </Text>
          </Link>
        </Text>
        )}
      </VStack>
    </Container>
  )
}

export default HomePage
