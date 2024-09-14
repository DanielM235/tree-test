import { noop, Subscription } from 'rxjs';

/**
 * Unsubscribe a single or an array of subscriptions.
 * @param subs a subscription, or an array of subscriptions.
 */
export function unsubscribe(subs: Subscription | Subscription[]) {
  if (!subs) {
    return;
  }
  if (isArray(subs)) {
    subs.forEach(sub => sub && !sub.closed ? sub.unsubscribe() : noop);
  } else {
    subs.unsubscribe();
  }
}

/**
 * Type guard for array.
 * @param x the variable to check.
 * @return {x is array} true if array, else false.
 */
export function isArray(x: any): x is Array<any> {
  return x instanceof Array;
}
