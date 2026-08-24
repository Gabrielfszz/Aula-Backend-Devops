import {Request, Response} from "express";

interface Usuario {
    id: number;
    nome: string;
}

export class UsuarioController {
    getAll(req: Request, res: Response): Response {
        return res.json()
    }
}