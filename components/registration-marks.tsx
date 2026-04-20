export function RegistrationMarks({
  inset = "clamp(12px, 2vw, 24px)",
}: {
  inset?: string;
}) {
  return (
    <div aria-hidden className="pointer-events-none">
      <div className="absolute reg-mark" style={{ top: inset, left: inset }}>
        <span />
      </div>
      <div className="absolute reg-mark" style={{ top: inset, right: inset }}>
        <span />
      </div>
      <div className="absolute reg-mark" style={{ bottom: inset, left: inset }}>
        <span />
      </div>
      <div
        className="absolute reg-mark"
        style={{ bottom: inset, right: inset }}
      >
        <span />
      </div>
    </div>
  );
}
