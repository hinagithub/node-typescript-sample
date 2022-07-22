"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// サーバ起動
app.listen(3000, () => {
    console.log("Start on port 3000.");
});
// GETテスト
app.get("/test", (req, res) => {
    res.send("OK");
});
