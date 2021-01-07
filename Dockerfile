FROM node:14 AS BuildImage

WORKDIR /app
COPY ledger/package.json ledger/package-lock.json /app/
RUN npm install

COPY ledger/next.config.js ledger/next-env.d.ts ledger/tsconfig.json /app/
COPY ledger /app/src
RUN npm run build

FROM node:14
COPY --from=BuildImage /app/package.json package.json
COPY --from=BuildImage /app/package-lock.json package-lock.json
COPY --from=BuildImage /app/.next .next

RUN npm install --only=prod

EXPOSE 3000
CMD npm run start
