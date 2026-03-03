install:
	npm ci

run:
	node bin/app.js

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

test:
	npm test
