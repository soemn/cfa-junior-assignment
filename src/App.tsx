import { getArticles } from "./gateways/articlesAdapter";
import type { Article } from "./gateways/articles.dto";
import axios from "axios";
import { Carousel } from "./components/Carousel";
import { useData } from "./hooks/useData";
import { Center, Container, Image, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import WaitingMessage from "./components/WaitingMessage";
// import { CodePanel } from "./components/Code";

function App() {
  const data = useData<Article[]>(getArticles);
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    axios.get("/getData").then((results) => {
      console.log(results.data);
      setBackendData(results.data.posts);
    });
  }, []);

  return (
    <>
      <Container>
        <Center>
          <Image src="watchtowr.png" />
        </Center>
      </Container>

      <Box>{data ? <Carousel slides={backendData} /> : <WaitingMessage />}</Box>
    </>
  );
}

export default App;
