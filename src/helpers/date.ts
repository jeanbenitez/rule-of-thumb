import { format } from 'timeago.js';

export function getExpirationDays(date: Date) {
  return Math.ceil(
    (date.getTime() - new Date().getTime()) / (1000 * 3600 * 24)
  );
}

export function getTimeAgoFormat(date) {
  return format(date);
}
