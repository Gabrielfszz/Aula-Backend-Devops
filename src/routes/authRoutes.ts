import {Router} from "express";
import { AuthController } from "../controllers/authController";

const router = Router();
const authController = new AuthController();

/**
 * @swagger
 * /api/auth/login:
 *  post:
 *      summary: Autenticação
 *      tags: [Auth]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                              example: ciclano@gmail.com
 *                          senha:
 *                              type: string
 *                              example: senha123
 *      responses:
 *          200:
 *              description: Token de autorização
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: string
 *          401:
 *              description: Token inválido
 *          500:
 *              description: Erro Interno
 *                  
 */
router.post("/login", (req, res) => authController.login(req, res));

export default router;