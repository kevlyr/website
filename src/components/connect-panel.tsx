import { EmailAction } from "@/components/email-action";

export function ConnectPanel() {
  return (
    <aside className="mx-auto w-full max-w-sm justify-self-center rounded-lg border border-border bg-card/80 p-6 text-center shadow-soft">
      <div className="aspect-[4/3] rounded-lg border border-border bg-gradient-to-br from-accent/20 via-background to-muted/20" />
      <div className="mt-6 flex flex-col items-center space-y-4">
        <h2 className="font-serif text-2xl">Let’s connect</h2>
        <p className="text-sm leading-6 text-muted">
          I’m always happy to hear about thoughtful projects, writing, product ideas, and good
          coffee spots.
        </p>
        <EmailAction variant="primary">Say hello</EmailAction>
      </div>
    </aside>
  );
}
