export function formatCurrency(cents: number | null | undefined) {
  if (!cents && cents !== 0) return "-";
  return `$${(cents / 100).toFixed(2)}`;
}

export function relativeDate(iso: string) {
  try {
    const d = new Date(iso);
    return d.toLocaleString();
  } catch {
    return iso;
  }
}
