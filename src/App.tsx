import "@radix-ui/themes/styles.css";
import "./App.css";
import {Flex, Text, Avatar} from "@radix-ui/themes";

function App() {
  return (
    <Flex direction="column">
        <Flex align="center" gap="2">
            <Avatar src="https://google.com" fallback="?" radius="small"/>
            <Flex direction="column">
                <Text size="2" weight="bold">Unknown Artist</Text>
                <Text size="2">Unknown Title</Text>
            </Flex>
        </Flex>
    </Flex>
  );
}

export default App;
