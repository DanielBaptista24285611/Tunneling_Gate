export function Discussion() {
  return (
    <section className="border-b border-border py-16 md:py-20">
      <div className="container mx-auto max-w-3xl px-4 md:px-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Discussão</h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p className="section-content">
              O ruído modelado por canais de Kraus é clássico porque representa uma média estatística sobre possíveis
              evoluções quânticas, causando perda irreversível de coerência e tornando a evolução não unitária. Nesse
              regime dissipativo, a informação quântica se mistura e não pode ser recuperada.
            </p>
            <p className="section-content">
              Já o ruído coerente é realmente quântico, pois atua dentro do Hamiltoniano e mantém a evolução unitária e
              reversível, permitindo preservar ou restaurar a coerência do Qubit. É neste regime que a porta de
              tunelamento demonstra sua eficácia.
            </p>
            <p className="section-content">
              Os resultados experimentais confirmam que a porta lógica de tunelamento pelo ruído só funciona quando há
              evolução unitária perturbada, caracterizando uma interação genuinamente quântica com o ambiente.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
