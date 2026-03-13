import { isEqual } from "lodash";
import { jwtDecode } from "jwt-decode";

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
    return `${capitalizeFirstLetter(cday)} — ${ctime}`
}

export function formattedMaxAge(num) {
    return num > 75 ? "+" : `-${num}`
}

export function formattedUserHandle(fn, ln, un) {
    let userHandle = []

    fn && userHandle.push(fn)
    ln && userHandle.push(ln)
    un && userHandle.push(`[${un}]`)

    return userHandle.join(" ");
}

export function formatRole(rl) {
    return rl === "default" ? "member" : rl
}

export function formattedClassAge(mina, maxa) {
    return `${mina}${formattedMaxAge(maxa)}`
}

export function shuffleArray(arr) {
    return arr.sort(() => 0.5 - Math.random());
}

export function averageClassRating(ratings) {
    if (!ratings.length) return -1;
    
    //The sum reduction is taken from from https://stackoverflow.com/questions/15748656/javascript-reduce-on-object
    let sum = Object.keys(ratings).reduce(function (previous, key) {
        return previous + ratings[key].rating;
    }, 0);

    //Back to my own kode
    const average = sum / ratings.length;
    return average
}

export function checkTokenValidity(tk) {
    //Check if token at all
    if (!tk) return false;

    //API does not give a meaningful response on expiry, so check expiry manually
    const decodedToken = jwtDecode(tk);
    const tokenExpired = decodedToken.exp < Date.now() / 1000;
    if (tokenExpired) console.warn("Token Expired")
    return tokenExpired;
}