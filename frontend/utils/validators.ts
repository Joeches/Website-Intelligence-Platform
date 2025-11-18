export function isValidUrl(value: string) {
  try {
    if (!value) return false;
    const u = new URL(value.includes("://") ? value : `https://${value}`);
    return !!u.hostname;
  } catch {
    return false;
  }
}

export function required(value: any) {
  return value !== undefined && value !== null && String(value).trim().length > 0;
}

