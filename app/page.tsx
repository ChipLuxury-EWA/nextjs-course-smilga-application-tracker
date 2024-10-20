import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Button> example</Button>
      <Button variant="ghost" size="icon">
        <Camera />
      </Button>
    </div>
  );
}
