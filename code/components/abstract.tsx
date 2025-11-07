export function Abstract() {
  return (
    <section id="resumo" className="border-b border-border py-16 md:py-20">
      <div className="container mx-auto max-w-3xl px-4 md:px-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Resumo</h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p className="section-content">
              O ruído é uma das principais problemáticas presentes no Computador Quântico, pois ele afeta a integridade
              e fidelidade do Qubit, causando o seu colapso. As técnicas atuais para lidar com o ruído são por meio de
              algoritmos de redução, mitigando apenas parte dele.
            </p>
            <p className="section-content">
              Este projeto tem como objetivo apresentar uma nova visão para lidar com o ruído: ao invés de tratá-lo como
              um inimigo (com técnicas para mitigação), o modelamos de tal forma que ele se torna parte do hamiltoniano.
            </p>
            <p className="section-content">
              O conceito geral é uma porta lógica quântica que aplica tunelamento pelo ruído, modelando-o como um
              potencial estocástico — uma variável flutuante de energia que descreve sua aleatoriedade e intensidade de
              coerência.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
