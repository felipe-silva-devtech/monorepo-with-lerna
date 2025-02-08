# Monorepo com Lerna

Estrutura básica para funcionamento de um monorepo baseado na versão 8 do Lerna.

## Configuração

### GitHub Packages

#### .npmrc

```plain-text
//npm.pkg.github.com/:_authToken=[GITHUB_TOKEN]
@[organization]:registry=https://npm.pkg.github.com
```

#### Terminal

```bash
npm set "//npm.pkg.github.com/:_authToken=$GITHUB_TOKEN"
npm set "@[organization]:registry=https://npm.pkg.github.com"
```

## Instalação

### Requisitos

- Node >= 18.20.2
- NPM >= 10.5.0
- Yarn >= 1.22.22

```bash
yarn install
```

## Publicação

```bash
yarn publish:latest
```
