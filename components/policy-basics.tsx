const policyTerms = [
  {
    term: "Premium",
    description: "What you pay for your insurance policy, often monthly or on another payment schedule.",
  },
  {
    term: "Deductible",
    description: "Your share of certain covered claim costs before the insurer pays the remaining covered amount.",
  },
  {
    term: "Coverage limit",
    description: "The maximum amount a policy may pay for a covered claim under a specific coverage.",
  },
];

export function PolicyBasics() {
  return (
    <section className="section section--policy-basics" aria-labelledby="policy-basics-title">
      <div className="container policy-basics__layout">
        <div className="policy-basics__intro">
          <p className="eyebrow eyebrow--light"><span aria-hidden="true" />Insurance, decoded</p>
          <h2 id="policy-basics-title">Three terms.<br />No dictionary required.</h2>
          <p>A few plain-language basics can make it easier to compare your options and ask better questions.</p>
        </div>

        <dl className="policy-basics__list">
          {policyTerms.map(({ term, description }, index) => (
            <div className="policy-basics__item" key={term}>
              <dt>
                <span className="policy-basics__number">0{index + 1}</span>
                <span className="policy-basics__term">{term}</span>
              </dt>
              <dd>{description}</dd>
            </div>
          ))}
        </dl>
      </div>
      <p className="container policy-basics__disclaimer">Definitions are general. What applies to you depends on your policy, coverage, insurer, and state.</p>
    </section>
  );
}
