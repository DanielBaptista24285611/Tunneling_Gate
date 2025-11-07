export function Introduction() {
  return (
    <section id="introducao" className="border-b border-border py-16 md:py-20">
      <div className="container mx-auto max-w-3xl px-4 md:px-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Introdução</h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p className="section-content">
              <strong>Como isso é possível?</strong> O ruído varia com muita frequência e pode ser causado de várias
              formas diferentes. Para tornar isso possível, devemos modelar o ruído como um potencial estocástico, isto
              é, como uma variável flutuante de energia.
            </p>
            <p className="section-content">
              Quando consideramos o ruído como um potencial estocástico, estamos descrevendo sua aleatoriedade e
              intensidade de coerência. A intensidade de coerência é a quantidade de tempo que um Qubit consegue se
              manter em seu estado puro, ou seja, sua integridade de estado de superposição.
            </p>
            <p className="section-content">
              A interferência do ruído faz com que o Qubit colapse e mude do estado puro para o misto, e a decoerência o
              faz colapsar para o estado clássico. O potencial estocástico é a força da variação de interação do Qubit
              com o meio ambiente.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
