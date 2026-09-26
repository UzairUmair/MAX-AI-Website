export function MaxOrb({ state = "idle" }: { state?: string }) {
  return (
    <div className={`orb-scene ${state}`} aria-hidden="true">
      <div className="orb-grid" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="orbit orbit-three" />
      <div className="orbit orbit-four" />
      <div className="orb-halo" />
      <div className="orb-core">
        <div className="orb-inner" />
        <span className="orb-mark">
          M<span>A</span>X
        </span>
      </div>
      <span className="orb-satellite one" />
      <span className="orb-satellite two" />
      <span className="crosshair c-one">+</span>
      <span className="crosshair c-two">+</span>
    </div>
  );
}
