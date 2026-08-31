import { Badge } from "@/components/ui/badge";

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <Badge variant="secondary">{eyebrow}</Badge>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 text-muted-foreground text-pretty leading-7">
        {description}
      </p>
    </div>
  );
}
