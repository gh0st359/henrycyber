import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { WorkItem } from "@/lib/content";

export function WorkCard({ item }: { item: WorkItem }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg">{item.title}</CardTitle>
        <CardDescription>{item.blurb}</CardDescription>
        <CardAction>
          <Badge variant="outline">{item.status}</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-1.5">
        {item.stack.map((tech) => (
          <Badge key={tech} variant="secondary">
            {tech}
          </Badge>
        ))}
      </CardContent>
      <CardFooter>
        <Link
          href={`/work/${item.slug}`}
          className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
        >
          Open {item.title}
          <ArrowUpRight className="size-3.5" />
        </Link>
        <span className="ml-auto text-xs text-muted-foreground">{item.year}</span>
      </CardFooter>
    </Card>
  );
}
