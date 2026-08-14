.PHONY: sops/encrypt sops/encrypt/dev

sops/encrypt:
	sops --encrypt --input-type dotenv --output-type yaml .env > secrets/.env.sops.yaml

sops/encrypt/dev:
	sops --encrypt --input-type dotenv --output-type yaml dev.env > secrets/dev.env.sops.yaml

