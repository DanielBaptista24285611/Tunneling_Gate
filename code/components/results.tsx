import { ResultsTable } from "@/components/results-table"

export function Results() {
  return (
    <section id="resultados" className="border-b border-border py-16 md:py-20">
      <div className="container mx-auto max-w-4xl px-4 md:px-8">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">Aplicação da Porta em Qiskit</h2>

          <div className="space-y-6">
            <p className="section-content text-lg">
              Os dados abaixo mostram o comparativo do tunelamento em um regime coerente (ruído quântico) e um regime
              dissipativo (ruído clássico, modelado por canal de Kraus). No regime coerente, o ruído entra no
              Hamiltoniano e a evolução é unitária por trajetória. Já no dissipativo, a porta lógica não recupera a
              coerência, pois esta já foi perdida no processo de dissipação.
            </p>

            <div className="space-y-3 text-lg">
              <p className="section-content font-semibold">Legenda dos dados:</p>
              <ul className="ml-6 space-y-2 list-disc">
                <li>
                  <strong>σ</strong>: intensidade do ruído
                </li>
                <li>
                  <strong>coh</strong>: ruído quântico coerente
                </li>
                <li>
                  <strong>dis</strong>: ruído dissipativo (clássico)
                </li>
                <li>
                  <strong>no</strong>: sem aplicação da porta
                </li>
                <li>
                  <strong>pr</strong>: porta preditiva
                </li>
                <li>
                  <strong>re</strong>: porta reativa
                </li>
              </ul>
            </div>

            <p className="section-content text-lg">
              Os testes foram realizados com <strong>1028 shots</strong> para maior precisão estatística.
            </p>

            <ResultsTable />

            <div className="space-y-4 rounded-lg bg-accent/50 p-6 border border-border">
              <p className="text-lg font-semibold">Observação Importante:</p>
              <p className="section-content text-lg">
                No regime coerente preditivo (ruído realmente quântico), a fidelidade a cada intensidade do ruído
                <strong> aumenta em 30%</strong>, enquanto no dissipativo mantém entre 50–55%. Isso demonstra que a
                porta só é eficaz quando o ruído é genuinamente quântico e mantém a evolução unitária.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
