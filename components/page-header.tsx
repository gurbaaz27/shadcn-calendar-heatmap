import { cn } from "../lib/utils"

function PageHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        "mx-auto flex max-w-[800px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20",
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}

function PageHeaderNotifier({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-center text-xs font-semibold leading-tight md:text-sm lg:leading-[1.1] min-w-fit backdrop-blur-[2px] p-2 rounded mb-2",
        className
      )}
      style={{
        background: "rgba(99, 86, 36, 0.1)",
      }}
      {...props}
    />
  )
}

function PageHeaderHeading({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] max-w-[330px] md:min-w-[750px] ",
        className
      )}
      {...props}
    />
  )
}

function PageHeaderDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "max-w-[750px] text-center text-base text-muted-foreground sm:text-lg text-pretty",
        className
      )}
      {...props}
    />
  )
}

function PageActions({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center space-x-4 py-4 md:pb-10",
        className
      )}
      {...props}
    />
  )
}

export {
  PageHeader,
  PageHeaderNotifier,
  PageHeaderHeading,
  PageHeaderDescription,
  PageActions,
}
