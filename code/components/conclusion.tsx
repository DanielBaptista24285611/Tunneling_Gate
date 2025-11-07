export function Conclusion() {
  return (
    <section id="conclusao" className="border-b border-border py-16 md:py-20">
      <div className="container mx-auto max-w-3xl px-4 md:px-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Conclusão</h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p className="section-content">
              Este projeto apresentou uma nova abordagem para lidar com o ruído em computadores quânticos: ao invés de
              tratá-lo como um inimigo a ser mitigado, o modelamos como parte integrante do Hamiltoniano do sistema.
            </p>
            <p className="section-content">
              A porta lógica quântica de tunelamento pelo ruído demonstrou ser eficaz em regimes coerentes, onde o ruído
              quântico mantém a evolução unitária e reversível. Os resultados experimentais mostram um aumento de 30% na
              fidelidade quando comparado com sistemas sem a aplicação da porta.
            </p>
            <p className="section-content">
              Em contraste, no regime dissipativo (ruído clássico), a porta não consegue recuperar a coerência perdida,
              confirmando que a técnica é específica para ruído genuinamente quântico. Esta pesquisa abre novos caminhos
              para o desenvolvimento de técnicas de controle quântico que trabalham em harmonia com o ruído, ao invés de
              simplesmente tentar eliminá-lo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
