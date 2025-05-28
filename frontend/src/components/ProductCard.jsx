import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Heading, HStack, IconButton, Image, Text, useColorModeValue } from "@chakra-ui/react"

const ProductCard = ({product}) => {
    const textColor = useColorModeValue("gray.800", "gray.200");
    const bg = useColorModeValue("white", "gray.800");
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
                <IconButton icon={<DeleteIcon/>} colorScheme="red"/>
            </HStack>

        </Box>     
    </Box>
  )
}

export default ProductCard
