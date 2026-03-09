import { isEqual } from "lodash";

export function compareFormData(values, prevState) {
    console.log("🔴", values)
    console.log("🟠", prevState?.values)

    /* console.log(schema) */
    const sameAsBefore = isEqual(values, prevState?.values);

    if (prevState?.values === undefined || sameAsBefore) {
        //console.log("☝️ No Changes")
        return prevState;
    } else {
        //console.log("👍 New Data")
    }
}

export function capitalizeFirstLetter(txt) {
    return String(txt).charAt(0).toUpperCase() + String(txt).slice(1);
}

export function formattedClassTime(cday, ctime) {
    return `${capitalizeFirstLetter(cday)} ${ctime}`
}

export function formattedMaxAge(num) {
    return num > 75 ? "+" : `-${num}`
}

export function formattedClassAge(mina, maxa) {
    return `${mina}${formattedMaxAge(maxa)}`
}