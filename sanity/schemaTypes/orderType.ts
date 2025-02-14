import { BasketIcon } from "@sanity/icons";
import { Currency, Subtitles } from "lucide-react";
import { defineArrayMember, defineField, defineType, Preview } from "sanity";

export const orderType = defineType({

    name: "order",
    title: "Order",
    type: "document",
    icon: BasketIcon,
    fields: [
        defineField({

            name: "orderNumber",
            title: "Order Number",
            type: "string",
            validation: Rule => Rule.required(),
        }),

        defineField({

            name: "stripeCheckoutSessionid",
            title: "Stripe Checkout Session ID",
            type: "string",
            validation: Rule => Rule.required(),
        }),


        defineField({

            name: "stripeCustomerid",
            title: "Stripe Customer ID",
            type: "string",
            validation: Rule => Rule.required(),
        }),

        defineField({

            name: "clerkUserId",
            title: "Store User ID",
            type: "string",
            validation: Rule => Rule.required(),
        }),

        defineField({

            name: "customerName",
            title: "Customer Name",
            type: "string",
            validation: Rule => Rule.required(),
        }),


        defineField({

            name: "email",
            title: "Customer Email",
            type: "string",
            validation: Rule => Rule.required(),
        }),
        defineField({

            name: "stripePaymentIntentId",
            title: "Stripe Payment Intent Id",
            type: "string",
            validation: Rule => Rule.required(),
        }),
        defineField({

            name: "product",
            title: "Products",
            type: "array",
            of: [
                defineArrayMember({
                    type: "object",
                    fields: [
                        defineField({
                            name: "product",
                            title: "Product Bought",
                            type: "reference",
                            to: [{ type: "Product" }],
                        }),
                        defineField({

                            name: "quantity",
                            title: "Quantity Purchased",
                            type: "number",
                        }),
                    ],
                    preview: {
                        select: {
                            product: "product.name",
                            quantity: "quantity",
                            image: "product.image",
                            price: "product.price",
                            currency: "product.currency"
                        },
                        prepare(select) {
                            return {
                                title: `${select.product} × ${select.quantity}`,
                                Subtitle: `${select.price * select.quantity}`,
                                media: select.image,
                            };
                        },
                    }
                })
            ]
        }),

        defineField({
            name: "totalprice",
            title: "Total Price",
            type: "number"
        }),
        defineField({
            name: "currency",
            title: "currency",
            type: "string"
        }),
        defineField({
            name: "amountDiscount",
            title: "Amount Discount",
            type: "number",
            validation: Rule => Rule.min(0),
        }),
        defineField({
            name: "status",
            title: "Status",
            type: "string",
            options: {
                list: [
                    {
                        title: "Pending", value: "pending"
                    },
                    { title: "Paid", value: "paid" },
                    { title: "Shipped", value: "shipped" },
                    { title: "Delivered", value: "delivered" },
                    { title: "Cancelled", value: "cancelled" },


                ],
            }
        }),
        defineField({
            name: "orderDate",
            title: "Order Date",
            type: "datetime",
            validation: Rule => Rule.required(),
        }),


    ],

    preview: {
        select: {
            name: "customerNumber",
            amount: "totalprice",
            currency: "currency",
            orderId: "orderNumber",
            email: "email"
        },
        prepare(select) {
            const orderIdSnippet = `${select.orderId.slice(0, 5)}...${select.orderId.slice(-5)}`;
            return {
                title: `${select.name} (${orderIdSnippet})`,
                subtitle: `${select.amount} ${select.currency}, ${select.email}`,
                media: BasketIcon,
            };
        
        },

    },  
});