import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";



export const salesTypes = defineType({

name:"sale",
title:"Sale",
type:"document",
icon:TagIcon,
fields:[

defineField({
    name:"title",
    type:"string",
    title:"Sale Title",
}),

defineField({
    name:"description",
    type:"text",
    title:"Sale Description",
}),

defineField({
    name:"discountAmount",
    type:"number",
    title:"Discount Amount",
    description:"Amount off in percentage of fixed value"
}),

defineField({
    name:"couponCode",
    type:"string",
    title:"Coupon Code",
}),

defineField({
    name:"validUntil",
    type:"datetime",
    title:"Valid Until",
}),

defineField({
    name:"validFrom",
    type:"datetime",
    title:"Valid From",
}),

defineField({
    name:"isActive",
    type:"boolean",
    title:"Is Active",
    description:"Toogle to active/deactive the scale",
    initialValue:true,
}),
],


preview:{
    select:{
        title:"title",
        discountAmount:"discountAmount",
        couponCode:"couponCode",
        isActive:"isActive",
    },
    prepare(selection){
        const {title, discountAmount, couponCode, isActive} = selection;
        const status = isActive ? "Active" : "Inactive";
        return{
            subtitle:`${discountAmount}& off - code: ${couponCode} - ${status}`,
        }
    }

}



}) 