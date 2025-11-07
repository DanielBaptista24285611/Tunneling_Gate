import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto max-w-3xl px-4 md:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="space-y-3">
            <h3 className="text-xl font-bold">Baixar Artigo Completo</h3>
            <p className="text-muted-foreground">Acesse a versão completa do artigo em formato PDF</p>
          </div>
          <Button size="lg" className="gap-2">
            <Download className="h-5 w-5" />
            Baixar PDF
          </Button>
          <div className="mt-6 text-sm text-muted-foreground">
            <p>© 2025 Daniel Santos Baptista. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
