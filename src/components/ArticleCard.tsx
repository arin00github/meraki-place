import {
  Button,
  Card,
  CardBody,
  CheckboxIcon,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import { ArticleDocs } from "../services/interface/article.interface";
import { useAppDispatch } from "../redux/hooks";
import { addBookmark } from "../redux/bookmark";

interface ArticleCardProps {
  article: ArticleDocs;
  isSaved?: boolean;
}

const ArticleCard = ({ article, isSaved, ...rest }: ArticleCardProps) => {
  const dispatch = useAppDispatch();

  const handleSave = (article: ArticleDocs) => {
    dispatch(addBookmark(article));
  };

  return (
    <GridItem key={article._id} {...rest} minH={130}>
      <Card h="100%" bg="whiteAlpha.100">
        <CardBody pos="relative">
          <Button
            onClick={() => handleSave(article)}
            size={"xs"}
            pos="absolute"
            top={4}
            right={4}
          >
            {isSaved ? "삭제" : "저장"}
          </Button>
          {/* <CheckboxIcon isChecked={isSaved} /> */}
          <Heading as="h4" fontSize={"18px"} color="white">
            {article.headline.main}
          </Heading>
          <Text color="whiteAlpha.700">
            {article.snippet} <a>...link</a>
          </Text>
        </CardBody>
      </Card>
    </GridItem>
  );
};

export default ArticleCard;
