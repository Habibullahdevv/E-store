export const COUPON_CODES = {

BFRIDAY: "BFRIDAY",
XMAS2025: "XMAS2025",
NY2022: "NY2022",

} as const;


export type CouponCode = keyof typeof COUPON_CODES;
