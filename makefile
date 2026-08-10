.PHONY: sops/encrypt

sops/encrypt:
	sops --encrypt --input-type dotenv --output-type yaml .env > secrets/.env.sops.yml


