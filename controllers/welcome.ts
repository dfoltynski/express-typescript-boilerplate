import express from "express";

const welcome = (req: express.Request, res: express.Response) => {
    res.send("root route in typescript");

}

export default welcome