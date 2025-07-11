import "@radix-ui/themes/styles.css";
import "./App.css";
import {Flex, Text, Avatar, Separator, Box, TextArea, IconButton, Tooltip} from "@radix-ui/themes";
import {Accordion} from "radix-ui";
import {AccordionContent, AccordionTrigger} from "@radix-ui/react-accordion";
import {IconPlayerPlayFilled} from '@tabler/icons-react';

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

        <Flex align="center" justify="between">
            <Flex gap="2">
                <Tooltip content="Create Channel">
                    <IconButton radius="full">
                        <IconPlayerPlayFilled/>
                    </IconButton>
                </Tooltip>
            </Flex>

        </Flex>

        <Separator my="3" size="4" />

        <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
            <Accordion.Item className="AccordionItem" value="item-1">
                <AccordionTrigger>
                    <Text>Channels</Text>
                </AccordionTrigger>
                <AccordionContent>
                    <Text>Red Channel 1</Text>
                </AccordionContent>
            </Accordion.Item>
        </Accordion.Root>

        <Separator my="3" size="4" />

        <TextArea placeholder="{}" resize="none"/>
    </Flex>
  );
}

export default App;
