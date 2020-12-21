import express from "express";

const wow = (req: express.Request, res: express.Response) => {
    res.send("✨wow✨");
}

export default wow