// src/middleware/authentication.ts
import { Request, Response, NextFunction } from 'express';

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
    // Aqui você faz a verificação do token
    const token = req.headers['authorization'];

    if (token) {
        // Verificar se o token é válido
        // Se for válido, chame next()
        next();
    } else {
        res.sendStatus(401); // Unauthorized
    }
}
