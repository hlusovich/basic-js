const CustomError = require("../extensions/custom-error");

const chainMaker = {
    chainCouner: 0,
    chain: "",
    getLength() {
        return this.chainCouner
    },
    addLink(value = "") {
        if (this.chainCouner === 0) {
            this.chain = `( ${value} )`;
            this.chainCouner++;
            return this
        } else {
            this.chain = this.chain + `~~( ${value} )`;
            this.chainCouner++;
            return this
        }

    },
    removeLink(position) {
        if (typeof position === "number" && position > 0 && position <= this.chainCouner && Math.ceil(position) === position && Math.floor(position) === position) {
            this.chain = this.chain.split(`~~`)
            this.chain = [...this.chain.slice(0, position - 1), ...this.chain.slice(position, this.chain.length)].join("~~")
            this.chainCouner--;
            return this
        } else {
          this.chain = "";
          this.chainCouner = 0;
            throw new Error("я ошибка")
        }

    },
    reverseChain() {
        this.chain = this.chain.split(`~~`).reverse().join("~~")
        return this
    },
    finishChain() {
      let chai = this.chain;
      this.chain = "";
      this.chainCouner = 0;
        return chai
    }
};

module.exports = chainMaker;
