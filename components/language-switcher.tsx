"use client"

import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt")
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-1 text-white hover:text-blue-300"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">{language === "pt" ? "EN" : "PT"}</span>
    </Button>
  )
}

