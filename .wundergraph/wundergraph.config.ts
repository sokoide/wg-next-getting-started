import {
    authProviders,
    configureWunderGraphApplication,
    cors,
    introspect,
    templates,
} from "@wundergraph/sdk";
import { NextJsTemplate } from "@wundergraph/nextjs/dist/template";
import server from "./wundergraph.server";
import operations from "./wundergraph.operations";

const usersPost = introspect.prisma({
    apiNamespace: "users_post",
    prismaFilePath: "./schema.prisma",
});

// configureWunderGraph emits the configuration
configureWunderGraphApplication({
    apis: [usersPost],
    server,
    operations,
    generate: {
        codeGenerators: [
            {
                templates: [new NextJsTemplate()],
                path: "../components/generated",
            },
        ],
    },
    cors: {
        ...cors.allowAll,
        allowedOrigins:
            process.env.NODE_ENV === "production"
                ? ["https://*"]
                : ["http://*"],
        /**
         * Please configure CORS carefully to make sure that your users are protected.
         * Allowing all origins is usually the worst possible configuration.
         *
         * @docs https://docs.wundergraph.com/docs/wundergraph-config-ts-reference/configure-cors
         */
        // allowedOrigins: process.env.NODE_ENV === 'production' ? ['http://your.app'] : ['http://localhost:3000'],
    },
    authentication: {
        cookieBased: {
            providers: [authProviders.demo()],
            authorizedRedirectUris: ["http://localhost:3000"],
        },
    },
    security: {
        enableGraphQLEndpoint: process.env.NODE_ENV !== "production",
    },
});
