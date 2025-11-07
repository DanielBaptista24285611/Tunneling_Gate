export function ResultsTable() {
  const data = [
    { sigma: "0.1", coherent: "0.64 → 0.65", dissipative: "0.50 → 0.51" },
    { sigma: "0.2", coherent: "0.61 → 0.83", dissipative: "0.50 → 0.55" },
    { sigma: "0.3", coherent: "0.58 → 0.81", dissipative: "0.50 → 0.55" },
    { sigma: "0.4", coherent: "0.56 → 0.78", dissipative: "0.50 → 0.54" },
    { sigma: "0.6", coherent: "0.52 → 0.73", dissipative: "0.50 → 0.54" },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b-2 border-border">
            <th className="p-4 text-left font-bold">σ (intensidade do ruído)</th>
            <th className="p-4 text-left font-bold text-primary">
              Regime Coerente (U<sub>tunnel</sub> preditiva)
            </th>
            <th className="p-4 text-left font-bold text-muted-foreground">
              Regime Dissipativo (U<sub>tunnel</sub> preditiva)
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b border-border hover:bg-muted/30 transition-colors">
              <td className="p-4 font-mono">{row.sigma}</td>
              <td className="p-4 font-mono text-primary">{row.coherent}</td>
              <td className="p-4 font-mono text-muted-foreground">{row.dissipative}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-6 space-y-2 text-center">
        <p className="text-lg font-bold text-primary">Ganho médio de fidelidade (coerente): +30%</p>
        <p className="text-lg font-bold text-muted-foreground">Ganho médio (dissipativo): ≈ +0%</p>
      </div>
    </div>
  )
}
