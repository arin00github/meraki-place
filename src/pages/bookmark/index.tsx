import { Container, Grid, Heading } from "@chakra-ui/react";
import { useAppSelector } from "../../redux/hooks";
import ArticleCard from "../../components/ArticleCard";

const BookmarkPage = () => {
  const storedBookmarks = useAppSelector((state) => state.bookmark);

  const { articles: savedArticles } = storedBookmarks;

  return (
    <Container>
      <Heading py={4} textAlign={"center"}>
        Bookmark Page
      </Heading>
      <Grid templateColumns={`repeat(2, 1fr)`} gap={4}>
        {savedArticles.map((article) => (
          <ArticleCard key={article._id} article={article} isSaved={true} />
        ))}
      </Grid>
    </Container>
  );
};

export default BookmarkPage;
