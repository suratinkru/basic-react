import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ComboBox from "./components/ComboBox";
import Container from "@mui/material/Container";
import { ButtonGroup } from "@mui/material";
import Header from "./components/Header";
import ObjectComponent from "./components/ObjectComponent";

function App() {



  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
        <br />
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>

        <br />
        <ComboBox />

        <br />
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>


        <ObjectComponent />
      </Container>
    </>
  );
}

export default App;
