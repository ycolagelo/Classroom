import { React } from "react";
import { Input, Textarea, Button } from "@chakra-ui/react";

export function MessageForm({ ...props }) {
  return (
    <>
      <form>
        <Input placeholder="Subject" />
        <Textarea placeholder="Message" mt={4} height="200px" {...props} />
      </form>
      <Button
        width={{ base: "100px", sm: "150px" }}
        height={{ base: "30px", sm: "40px" }}
        // _focus={{}}
      >
        Submit
      </Button>
    </>
  );
}
