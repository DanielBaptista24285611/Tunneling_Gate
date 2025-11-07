export function Theory() {
  return (
    <section id="teoria" className="border-b border-border py-16 md:py-20">
      <div className="container mx-auto max-w-3xl px-4 md:px-8">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tight">Fundamentos Teóricos</h2>

          <div className="space-y-8">
            <div>
              <h3 className="mb-4 text-xl font-semibold">Hamiltoniano com Ruído Estocástico</h3>
              <p className="section-content mb-4 text-lg">
                O sistema quântico de dois níveis é descrito por um Hamiltoniano físico que incorpora o ruído
                estocástico diretamente em sua estrutura. Este Hamiltoniano contém:
              </p>
              <ul className="ml-6 space-y-2 list-disc text-lg">
                <li>E₀ e E₁: energias nos estados quânticos</li>
                <li>Δ₀: acoplamento base entre os estados |0⟩ e |1⟩</li>
                <li>ξ: ruído estocástico com correlação finita (processo de Ornstein-Uhlenbeck)</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold">Operador de Evolução Temporal</h3>
              <p className="section-content text-lg">
                A evolução unitária do sistema é descrita por um operador que pode ser expresso em termos de funções
                trigonométricas e das matrizes de Pauli. Este operador mantém a unitariedade da evolução, permitindo que
                o sistema "tunele" através do ruído mantendo sua coerência quântica.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold">Ruído Coerente vs Dissipativo</h3>
              <div className="space-y-4 text-lg">
                <p className="section-content">
                  <strong>Ruído coerente (quântico):</strong> entra no Hamiltoniano como flutuação estocástica. A
                  evolução é unitária e reversível, permitindo que a porta lógica atue efetivamente.
                </p>
                <p className="section-content">
                  <strong>Ruído dissipativo (clássico):</strong> modelado por canais de Kraus, representa uma média
                  estatística sobre possíveis evoluções quânticas. É não-unitário e irreversível, causando perda
                  permanente de coerência.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
