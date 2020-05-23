export function getExpirationDays(date: Date) {
  return Math.ceil(
    (date.getTime() - new Date().getTime()) / (1000 * 3600 * 24)
  );
}
