export default function Bar({ value, state }) {
  return (
    <div
      className={`bar ${state}`}
      style={{ height: `${value}px` }}
    />
  );
}
