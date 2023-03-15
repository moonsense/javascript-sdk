VERSION 0.6

ARG PROTOBUFJS_VERSION=6.11.2

FROM scratch

cleanup:
    LOCALLY
    RUN rm -rf src/models/generated

generate:
    BUILD +cleanup
    ARG DEFINITIONS_BRANCH=main
    COPY github.com/moonsense/definitions/proto:$DEFINITIONS_BRANCH+generate-ts-sdk/js /ts
    SAVE ARTIFACT /ts AS LOCAL src/models/generated