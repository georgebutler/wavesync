import "@radix-ui/themes/styles.css";
import "./App.css";
import {Flex, Text, Avatar, Separator, Box} from "@radix-ui/themes";
import { Accordion } from "radix-ui";
import {AccordionContent, AccordionTrigger} from "@radix-ui/react-accordion";

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

        <Separator my="3" size="4" />

        <Box width="64px" height="64px">
        </Box>

        <Separator my="3" size="4" />

        <Accordion.Root
            className="AccordionRoot"
            type="single"
            defaultValue="item-1"
            collapsible
        >
            <Accordion.Item className="AccordionItem" value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </Accordion.Item>

            <Accordion.Item className="AccordionItem" value="item-2">
                <AccordionTrigger>Is it unstyled?</AccordionTrigger>
                <AccordionContent>
                    Yes. It's unstyled by default, giving you freedom over the look and
                    feel.
                </AccordionContent>
            </Accordion.Item>

            <Accordion.Item className="AccordionItem" value="item-3">
                <AccordionTrigger>Can it be animated?</AccordionTrigger>
                <Accordion.Content className="AccordionContent">
                    <div className="AccordionContentText">
                        Yes! You can animate the Accordion with CSS or JavaScript.
                    </div>
                </Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>
    </Flex>
  );
}

export default App;
