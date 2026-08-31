import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col justify-center py-20">
      <p className="text-[13px] text-blue">404</p>
      <h1 className="mt-3 text-4xl font-medium tracking-tight">
        This path is empty
      </h1>
      <p className="mt-3 max-w-md text-[15px] leading-6 text-mute">
        The page is missing or the slug changed.
      </p>
      <Link href="/" className="mt-8 text-[14px] text-blue hover:text-blue-soft">
        Return home →
      </Link>
    </Container>
  );
}
