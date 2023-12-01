import {
  Card,
  CardBody,
  GridItem,
  Heading,
  LinkBox,
  Text,
} from "@chakra-ui/react";
import { ArticleDocs } from "../services/interface/article.interface";

interface ArticleCardProps {
  article: ArticleDocs;
}

const ArticleCard = ({ article, ...rest }: ArticleCardProps) => {
  return (
    <GridItem key={article._id} {...rest} minH={130}>
      <Card h="100%" bg="whiteAlpha.100">
        <CardBody>
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
