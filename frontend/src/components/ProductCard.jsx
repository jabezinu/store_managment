import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Heading, HStack, IconButton, Image, Text, useColorModeValue, useToast } from "@chakra-ui/react"
import { useProductStore } from "../store/product";

const ProductCard = ({product}) => {
    const textColor = useColorModeValue("gray.800", "gray.200");
    const bg = useColorModeValue("white", "gray.800");

    const {deleteProduct} = useProductStore();
    const toast = useToast();
    const handleDeleteProduct = async (pid) => {
        const {success, message} = await deleteProduct(product._id);
        if(!success) {
            toast({
                title: 'Error',
                description: message || "An error occurred while deleting the product.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }else{
            toast({
                success: true,
                description: message || "Product deleted successfully.",
                title: "Success",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        }
    }
  return (

    <Box
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        translation="all 0.3s"
        _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
        bg={bg}
    >
        <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover'></Image>
        <Box p={4}>
            <Heading as="h3" size="md" mb={2}>{product.name}</Heading>
            <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>${product.price}</Text>

            <HStack spacing={2}>
                <IconButton icon={<EditIcon/>} colorScheme="blue" />
                <IconButton icon={<DeleteIcon/>} onClick={() => handleDeleteProduct(product._id)} colorScheme="red"/>
            </HStack>

        </Box>     
    </Box>
  )
}

export default ProductCard
