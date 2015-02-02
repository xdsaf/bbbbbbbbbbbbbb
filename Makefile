DEV_PORT=$$PORT
NPM_BIN=$$(npm bin)

examples:
	$(NPM_BIN)/webpack --content-base examples/ --config webpack.example.js

dev:
	$(NPM_BIN)/webpack-dev-server --history-api-fallback --port $(DEV_PORT) --content-base examples/ --config webpack.example.js

.PHONY: examples dev
