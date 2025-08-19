# 🚀 Configuração do Vercel - Alves Cury Financial

Guia completo para configurar o deploy automático no Vercel.

## 📋 Pré-requisitos

1. **Conta no Vercel**: [vercel.com](https://vercel.com)
2. **Projeto criado no Vercel**
3. **Acesso ao repositório GitHub**

## 🔧 Passo a Passo

### 1. Criar Projeto no Vercel

1. Acesse [vercel.com/dashboard](https://vercel.com/dashboard)
2. Clique em "New Project"
3. Importe o repositório: `malves-eth/landingpage`
4. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: `web`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

### 2. Obter Credenciais

#### VERCEL_TOKEN
1. Vá para [vercel.com/account/tokens](https://vercel.com/account/tokens)
2. Clique em "Create Token"
3. Nome: `GitHub Actions Deploy`
4. Scope: `Full Account`
5. Copie o token gerado

#### VERCEL_ORG_ID
1. Vá para [vercel.com/account](https://vercel.com/account)
2. Na seção "General", copie o "Team ID"

#### VERCEL_PROJECT_ID
1. No projeto criado, vá em "Settings"
2. Na seção "General", copie o "Project ID"

### 3. Configurar GitHub Secrets

1. Acesse: `https://github.com/malves-eth/landingpage/settings/secrets/actions`
2. Clique em "New repository secret"
3. Adicione os 3 secrets:

```
VERCEL_TOKEN=your_token_here
VERCEL_ORG_ID=your_org_id_here
VERCEL_PROJECT_ID=your_project_id_here
```

### 4. Configurar Variáveis de Ambiente

No Vercel Dashboard → Project Settings → Environment Variables:

```env
NEXT_PUBLIC_SITE_URL=https://www.alvescuryfinancial.com
NEXT_PUBLIC_WHATSAPP_PHONE=15618231966
NEXT_PUBLIC_BRAND_NAME=Alves Cury Financial
NEXT_PUBLIC_API_URL=https://api.alvescuryfinancial.com/api
```

### 5. Configurar Domínio (Opcional)

1. Vá em "Settings" → "Domains"
2. Adicione: `alvescuryfinancial.com`
3. Configure DNS conforme instruções do Vercel

## 🚀 Deploy Automático

Após configurar os secrets, o deploy será automático:

- **Push para `main`** → Deploy de produção
- **Push para `develop`** → Deploy de staging

## 🔍 Troubleshooting

### Erro: "No GitHub account found"
- ✅ **Resolvido**: Email configurado corretamente

### Erro: "Deployment failed"
- Verificar se os secrets estão configurados
- Verificar se o projeto existe no Vercel
- Verificar logs do build

### Erro: "Build failed"
- Verificar variáveis de ambiente
- Verificar dependências do projeto

## 📞 Suporte

Se precisar de ajuda:
1. Verificar logs do GitHub Actions
2. Verificar logs do Vercel
3. Consultar documentação do Vercel

---

**Status**: ⚠️ Aguardando configuração dos secrets
