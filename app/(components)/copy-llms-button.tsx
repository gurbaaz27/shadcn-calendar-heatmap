"use client"

import { useState } from "react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Check, Copy } from "lucide-react"

interface CopyLlmsButtonProps {
  content: string
  className?: string
}

export function CopyLlmsButton({ content, className }: CopyLlmsButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className={cn(
        buttonVariants({ variant: "outline" }),
        "relative !py-0 group",
        className
      )}
    >
      {copied ? (
        <Check className="mr-2 h-4 w-4" />
      ) : (
        <Copy className="mr-2 h-4 w-4" />
      )}
      {copied ? "Copied" : "Copy llms.txt"}
    </button>
  )
}
