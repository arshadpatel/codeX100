FROM node:22-alpine

WORKDIR /usr/src/app

RUN corepack enable pnpm && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./

RUN \
    if [ -f pnpm-lock.yaml ]; then \
    pnpm install --frozen-lockfile --ignore-scripts; \
    else \
    echo "pnpm-lock.yaml not found" && exit 1; \
    fi

COPY . .

CMD ["pnpm", "dev"]