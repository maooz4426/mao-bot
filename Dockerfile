FROM node:24-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME/bin:$PATH"
RUN corepack enable

FROM base AS build
ENV APP_DIR=/usr/src/app
WORKDIR $APP_DIR
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml tsconfig.json $APP_DIR/
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
COPY src $APP_DIR/src
# COPY .env $APP_DIR/
RUN pnpm build

FROM base AS runner
ENV APP_DIR=/usr/src/app
WORKDIR $APP_DIR
COPY --from=build $APP_DIR/package.json $APP_DIR/
COPY --from=build $APP_DIR/dist $APP_DIR/dist
COPY --from=build $APP_DIR/node_modules $APP_DIR/node_modules
CMD ["pnpm", "start"]
