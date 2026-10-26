import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API de Usuários",
            version: "1.0.0",
            description: "API para cadastro de usuários..."    
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Servidor local"
            },
        ],
    },
    apis: ["./src/routes/*.ts"]
};

export const swaggerSpec = swaggerJsdoc(options);