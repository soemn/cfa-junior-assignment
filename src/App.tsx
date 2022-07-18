import { getArticles } from "./gateways/articlesAdapter";
import type { Article } from "./gateways/articles.dto";
import { Carousel } from "./components/Carousel";
import { useData } from "./hooks/useData";
import { Center, Container, Heading, Image, Text, Box } from "@chakra-ui/react";
// import { CodePanel } from "./components/Code";

function App() {
  const data = useData<Article[]>(getArticles);

  return (
    <>
      <Container>
        <Center>
          <Image src="watchtowr.png" />
        </Center>
      </Container>

      <Box>
        {data ? (
          <Carousel slides={data} />
        ) : (
          <Text>This should be null if you're on task 1!</Text>
        )}
      </Box>
    </>
  );
}

export default App;
