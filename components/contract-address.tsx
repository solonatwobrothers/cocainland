"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

const CONTRACT = "FTP4qT7TkajXkDXgrjBtwSw32YpDepaB1wyPUoy51DyQ"

export function ContractAddress() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      onClick={copy}
      className="group flex max-w-full items-center gap-3 rounded-full border border-border bg-card/60 px-4 py-2 text-left backdrop-blur transition-colors hover:border-accent"
    >
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        CA
      </span>
      <span className="truncate font-mono text-xs text-foreground sm:text-sm">
        {CONTRACT}
      </span>
      <span className="text-accent" aria-hidden="true">
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      </span>
      <span className="sr-only">Copy contract address</span>
    </button>
  )
}
