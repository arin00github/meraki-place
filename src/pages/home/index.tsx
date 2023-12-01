import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getArticleSearch } from "../../services/api/articleApi";
import {
  Box,
  Container,
  Flex,
  Input,
  FormLabel,
  Heading,
  Text,
  Spinner,
  Grid,
} from "@chakra-ui/react";
import ArticleCard from "../../components/ArticleCard";
import { useAppSelector } from "../../redux/hooks";

const HomePage = () => {
  const storedBookmarks = useAppSelector((state) => state.bookmark);

  const { articles: savedArticles } = storedBookmarks;

  const [searchWord, setSearchWord] = useState("election");

  const [searchParams, setSearchParams] = useState<string>("election");

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["search-article", searchParams],
    queryFn: () => getArticleSearch(searchParams),
    refetchOnWindowFocus: false,
  });

  const articles = data?.response.docs;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("handleSubmit", searchWord);
    e.preventDefault();
    setSearchParams(searchWord);
  };

  if (isLoading) {
    <Box w="100%" minH={300} display={"flex"}>
      <Spinner />
    </Box>;
  }

  if (isError || error) {
    <Box w="100%" minH={300} display={"flex"}>
      <Text>Page Error</Text>
    </Box>;
  }

  return (
    <Container>
      <Heading py={4} textAlign={"center"}>
        NewYork Times
      </Heading>
      <Box>
        <form onSubmit={handleSubmit}>
          <Flex justify={"center"}>
            <FormLabel htmlFor="search-word">Search</FormLabel>
            <Input
              type="text"
              w={300}
              id="search-word"
              value={searchWord}
              onChange={handleChange}
            />
          </Flex>
        </form>
      </Box>
      <Grid mt={12} templateColumns={`repeat(2, 1fr)`} gap={4}>
        {articles?.map((article) => (
          <ArticleCard
            key={article._id}
            article={article}
            isSaved={
              savedArticles.find((atc) => atc._id === article._id)
                ? true
                : false
            }
          />
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
