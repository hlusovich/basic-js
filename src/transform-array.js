const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    console.log("!!!!!!!!!!!!")
    console.log(arr)
    console.log("!!!!!!!!!!!!")
    if (Array.isArray(arr)) {
        let arrrClone = [...arr]
        for (let i in arrrClone) {
            debugger
            switch (arrrClone[i]) {
                case "--discard-next":
                    if (i <= arrrClone.length - 1) {
                        delete arrrClone[+i + 1]
                        delete arrrClone[i]
                    } else {
                        arrrClone = [...arrrClone.slice(0, i), ...arrrClone.slice(+i + 1, +i)]
                    }
                    break
                case '--double-next':
                    if (i <= arrrClone.length - 1) {
                        if (arrrClone[+i + 1] !== undefined) {
                            arrrClone = [...arrrClone.slice(0, i), ...arrrClone.slice(+i + 1, +i + 2), ...arrrClone.slice(+i + 1, arrrClone.length)]
                        }
                        else{ delete  arrrClone[i]}

                    } else {
                        arrrClone = [...arrrClone.slice(0, i), ...arrrClone.slice(+i + 1, +i)]
                    }
                    break
                case "--discard-prev":
                    if (i - 1 >= 0) {
                        delete arrrClone[i - 1]
                        delete arrrClone[i]
                    } else {
                        arrrClone = [...arrrClone.slice(+i + 1, arrrClone.length)]
                    }
                    break
                case "--double-prev":
                    if (i - 1 >= 0) {
                        if (arrrClone[i - 1] !== undefined) {
                            arrrClone = [...arrrClone.slice(0, i), ...arrrClone.slice(i - 1, i), ...arrrClone.slice(+i + 1, arrrClone.length)]
                            console.log(arrrClone)
                        }
                        else{ delete  arrrClone[i]}
                    } else {
                        arrrClone = [...arrrClone.slice(+i + 1, arrrClone.length)]
                    }
            }
        }
        return arrrClone.filter(i => i !== undefined)
    }
    throw new Error(" 1123")
};
