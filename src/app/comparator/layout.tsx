import RootLayout from "@/app/layout";

export default function layaout({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}
