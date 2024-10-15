import RootLayout from "@/app/layout";
import { Button } from "@/components/ui/button";

export default function layaout({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout>
      {children}
      <Button>test</Button>
    </RootLayout>
  );
}
