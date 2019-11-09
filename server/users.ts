import { Request, Response } from 'express';
import { USERS } from "./data";

export function getAllUsers(req: Request, res: Response) {
    res.status(200).json(USERS.users);
}
export function addUser(req: Request, res: Response) {
    if (req.body) {
        USERS.users.push(req.body);
    }
    res.status(200);
    res.end();
}
