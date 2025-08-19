# 🚀 Quick Start - Alves Cury Financial

## Rodar o projeto localmente

### 1. Instalar dependências
```bash
# Dependências do monorepo
npm install

# Backend
cd api && npm install && cd ..

# Frontend  
cd web && npm install && cd ..
```

### 2. Configurar banco de dados
```bash
cd api
npm run prisma:generate
npm run prisma:migrate
cd ..
```

### 3. Rodar os serviços

#### Desenvolvimento (recomendado)
```bash
npm run dev
```

#### Produção
```bash
# Build primeiro
npm run build

# Depois rodar
npm start
```

#### Separadamente
```bash
# Terminal 1 - Backend
cd api && npm run start:dev

# Terminal 2 - Frontend  
cd web && npm run dev
```

### 4. Acessar
- **Landing Page**: http://localhost:3000
- **API**: http://localhost:4000
- **Health Check**: http://localhost:4000/health

## Configurar e-mail (opcional)

Edite `/api/.env`:
```env
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587" 
SMTP_USER="seu-email@gmail.com"
SMTP_PASS="sua-senha-de-app"
NOTIFY_TO="contato@alvescuryfinancial.com"
```

## Testar formulário

1. Abra http://localhost:3000
2. Preencha o formulário de cotação
3. Verifique os logs do backend
4. Lead será salvo no banco SQLite

---

✅ **Projeto está funcionando!** Veja o README.md para instruções completas.