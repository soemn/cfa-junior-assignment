import { useState } from "react";
import { getArticles } from "./gateways/articlesAdapter";
import type { Article } from "./gateways/articles.dto";
import { Carousel } from "./components/Carousel";
import { useData } from "./hooks/useData";
import { Center, Container, Image, Box } from "@chakra-ui/react";
import WaitingMessage from "./components/WaitingMessage";

function App() {
  const [range, setRange] = useState({
    upperlimit: 20,
    lowerlimit: 0,
  });

  const data = useData<Article[]>(range, () => getArticles(range));
  //changes the range of the data that is retrieved
  const changeRange = ({ lower, upper }: { lower: number; upper: number }) => {
    setRange({
      upperlimit: upper,
      lowerlimit: lower,
    });
  };

  return (
    <>
      <Container>
        <Center>
          <Image src="watchtowr.png" />
        </Center>
      </Container>

      <Box>
        {data ? (
          <Carousel slides={data} changeRange={changeRange} />
        ) : (
          <WaitingMessage />
        )}
      </Box>
    </>
  );
}

export default App;
