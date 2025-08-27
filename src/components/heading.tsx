import { Separator } from "./ui/separator";

interface HeadingProps {
  title: string;
  description?: string;
}

export const Heading = ({ title, description }: HeadingProps) => {
  return (
    <>
      <div className="px-8">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>

      <Separator />
    </>
  );
};
