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
export function updateUser(req: Request, res: Response) {
    if (req.body) {
        update(USERS.users, req.body.id, req.body.firstName, req.body.lastName);
    }
    res.status(200);
    res.end();
}
export function update(objArray: any[], objId: number, firstname: string, lastname: string) {
    objArray.forEach(function(obj) {
        if (obj.id === objId) {
            obj.firstName = firstname;
            obj.lastName = lastname;
        }
    });
}
export function deleteUser(req: Request, res: Response) {
    if (req.body) {
        USERS.users.pop(req.body);
    }
    res.status(200);
    res.end();
}