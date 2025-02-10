"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_v6_1 = require("ethers-v6");
class BaseContract {
    constructor(contractAddress_, provider_, signer_, abi_, chainData_) {
        this.address = contractAddress_;
        this.abi = abi_;
        this.contract = new ethers_v6_1.Contract(contractAddress_, abi_, provider_);
        this.provider = provider_;
        this.signer = signer_;
        this.contractSigned = new ethers_v6_1.Contract(contractAddress_, abi_, signer_);
        this.chainData = chainData_;
    }
}
exports.default = BaseContract;
