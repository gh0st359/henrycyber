import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write Henry Hilf about collaboration, roles, or research.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div>
          <PageIntro
            eyebrow="Contact"
            title="Get in touch"
            description={`Collaboration, a role, research, or a correction. The form opens a draft to ${site.email} — no backend in the middle.`}
          />
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Direct</CardTitle>
              <CardDescription>Same inbox either way.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>
                <p className="text-muted-foreground">Email</p>
                <p className="mt-1">{site.email}</p>
              </div>
              <Separator />
              <div>
                <p className="text-muted-foreground">GitHub</p>
                <Button
                  variant="link"
                  className="h-auto px-0"
                  render={<a href={site.github} target="_blank" rel="noreferrer" />}
                >
                  github.com/{site.handle}
                </Button>
              </div>
              <Separator />
              <div>
                <p className="text-muted-foreground">LinkedIn</p>
                <Button
                  variant="link"
                  className="h-auto px-0"
                  render={<a href={site.linkedin} target="_blank" rel="noreferrer" />}
                >
                  Henry Hilf
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Write a draft</CardTitle>
            <CardDescription>
              Opens your mail client with the fields filled in.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </PageShell>
  );
}
