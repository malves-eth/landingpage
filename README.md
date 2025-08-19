# Alves Cury Financial - Landing Page

Landing page de alta conversão para **Alves Cury Financial**, focada em "Seguro de vida com benefício em vida" para brasileiros nos EUA.

## 🏗️ Arquitetura

### Monorepo
- **`/web`** - Frontend Next.js 14 + shadcn/ui + Tailwind CSS
- **`/api`** - Backend NestJS 10 + Prisma + SQLite/PostgreSQL

### Stack Tecnológica

#### Frontend (`/web`)
- **Next.js 14** (App Router, TypeScript)
- **shadcn/ui** (Componentes base)
- **Tailwind CSS** (Estilização)
- **React Hook Form + Zod** (Formulários e validação)
- **Sonner** (Toast notifications)
- **Lucide React** (Ícones)

#### Backend (`/api`)
- **NestJS 10** (Framework Node.js)
- **Prisma** (ORM)
- **SQLite** (Desenvolvimento) / **PostgreSQL** (Produção)
- **Zod** (Validação de dados)
- **Nodemailer** (Envio de e-mails)
- **Rate Limiting** (Proteção contra spam)

## 🚀 Como rodar

### Pré-requisitos
- **Node.js** 18+
- **npm** ou **yarn**

### 1. Instalação

```bash
# Clone o repositório
git clone <repository-url>
cd landing-page-alves-cury

# Instalar dependências do monorepo
npm install

# Instalar dependências do frontend
cd web && npm install && cd ..

# Instalar dependências do backend
cd api && npm install && cd ..
```

### 2. Configuração do ambiente

#### Frontend (`/web/.env.local`)
```env
NEXT_PUBLIC_WHATSAPP_PHONE="15618231966"
NEXT_PUBLIC_BRAND_NAME="Alves Cury Financial"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_API_URL="http://localhost:4000/api"
```

#### Backend (`/api/.env`)
```env
DATABASE_URL="file:./dev.db"
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
NOTIFY_TO="contato@alvescuryfinancial.com"
CORS_ORIGIN="http://localhost:3000"
PORT="4000"
```

### 3. Configuração do banco de dados

```bash
cd api

# Gerar cliente Prisma
npm run prisma:generate

# Executar migrations
npm run prisma:migrate

# (Opcional) Executar seed
npm run prisma:seed
```

### 4. Executar em desenvolvimento

#### Opção 1: Rodar tudo junto (recomendado)
```bash
# Na raiz do projeto
npm run dev
```

#### Opção 2: Rodar separadamente
```bash
# Terminal 1 - Backend
cd api
npm run start:dev

# Terminal 2 - Frontend  
cd web
npm run dev
```

### 5. Acessar a aplicação

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend**: [http://localhost:4000](http://localhost:4000)
- **Health Check**: [http://localhost:4000/health](http://localhost:4000/health)
- **Prisma Studio**: `cd api && npm run prisma:studio`

## 🎯 Funcionalidades

### Landing Page
- ✅ Header com navegação âncora
- ✅ Seção Hero com formulário de cotação
- ✅ Seção "Por que escolher a Alves Cury Financial"
- ✅ Seção "Como funciona" (3 passos)
- ✅ Seção de preços (exemplos ilustrativos)
- ✅ Depoimentos de clientes
- ✅ FAQ (Accordion)
- ✅ CTA final
- ✅ Footer completo
- ✅ Botão flutuante do WhatsApp

### Formulário de Leads
- ✅ Validação com Zod + React Hook Form
- ✅ Campos: nome, whatsapp, estado (US), idade, objetivo
- ✅ Captura automática de UTM parameters
- ✅ Integração com API backend
- ✅ Redirecionamento para WhatsApp após envio
- ✅ Toast notifications

### Backend API
- ✅ Endpoint `POST /api/leads` para criação de leads
- ✅ Validação de dados com Zod
- ✅ Rate limiting (10 req/min por IP)
- ✅ Armazenamento no banco (Prisma)
- ✅ Envio de e-mail de notificação
- ✅ Suporte opcional a webhooks
- ✅ Health check endpoint

## 📧 Configuração de E-mail

### Gmail (recomendado para testes)

1. Ative a autenticação de 2 fatores
2. Gere uma senha de app específica
3. Configure no `.env`:

```env
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="seu-email@gmail.com"
SMTP_PASS="sua-senha-de-app"
NOTIFY_TO="contato@alvescuryfinancial.com"
```

### Outros provedores SMTP
- **SendGrid**: `smtp.sendgrid.net:587`
- **Mailgun**: `smtp.mailgun.org:587`
- **Outlook**: `smtp-mail.outlook.com:587`

## 🚦 Comandos úteis

### Frontend
```bash
cd web

# Desenvolvimento
npm run dev

# Build de produção
npm run build
npm run start

# Lint
npm run lint

# Testes
npm run test
```

### Backend
```bash
cd api

# Desenvolvimento
npm run start:dev

# Build de produção
npm run build
npm run start:prod

# Banco de dados
npm run prisma:generate
npm run prisma:migrate
npm run prisma:studio
npm run prisma:seed

# Testes
npm run test
npm run test:e2e
```

### Monorepo
```bash
# Rodar tudo em desenvolvimento
npm run dev

# Build completo
npm run build

# Lint de tudo
npm run lint

# Testes completos
npm run test
```

## 🌐 Deploy

### Frontend (Vercel - recomendado)

1. Conecte seu repositório no Vercel
2. Configure as variáveis de ambiente:
   ```env
   NEXT_PUBLIC_WHATSAPP_PHONE="15618231966"
   NEXT_PUBLIC_BRAND_NAME="Alves Cury Financial"
   NEXT_PUBLIC_SITE_URL="https://www.alvescuryfinancial.com"
   NEXT_PUBLIC_API_URL="https://api.alvescuryfinancial.com/api"
   ```
3. Deploy automático

### Backend (Railway/Render - recomendado)

1. Configure PostgreSQL:
   ```env
   DATABASE_URL="postgresql://user:pass@host:5432/db"
   ```

2. Configure variáveis de ambiente no provedor
3. Execute migrations: `npm run prisma:migrate`

### Alternativas de deploy
- **Frontend**: Netlify, AWS Amplify, Cloudflare Pages
- **Backend**: Heroku, DigitalOcean App Platform, AWS Elastic Beanstalk

## 🧪 Testes

### Testes do formulário
```javascript
// Exemplo de teste de validação
import { CreateLeadSchema } from './src/leads/dto/create-lead.dto';

const validLead = {
  name: "João Silva",
  whatsapp: "5551234567",
  state: "FL",
  age: 35,
  goal: "beneficio-vida"
};

const result = CreateLeadSchema.parse(validLead);
```

### Teste da API
```bash
# Teste manual com curl
curl -X POST http://localhost:4000/api/leads \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "João Silva",
    "whatsapp": "5551234567", 
    "state": "FL",
    "age": 35,
    "goal": "beneficio-vida"
  }'
```

## 📊 Monitoramento

### Health Check
- **URL**: `/health`
- **Response**: `{ "status": "ok", "timestamp": "...", "service": "alves-cury-api" }`

### Logs
- Backend logs automáticos com NestJS Logger
- Logs de leads criados, e-mails enviados, erros, etc.

## 🔒 Segurança

### Implementado
- ✅ Rate limiting (10 req/min por IP)
- ✅ CORS configurado
- ✅ Validação de dados (Zod)
- ✅ Sanitização automática de inputs

### Recomendações para produção
- [ ] HTTPS obrigatório
- [ ] Helmet.js para headers de segurança
- [ ] Limitar CORS para domínios específicos
- [ ] Logs estruturados
- [ ] Monitoring (ex: Sentry)

## 🎨 Design System

### Cores principais
- **Primária**: `#1d4ed8` (blue-700)
- **Secundária**: `#f1f5f9` (slate-100)
- **Texto**: `#0f172a` (slate-900)
- **Muted**: `#64748b` (slate-500)

### Tipografia
- **Font**: Inter
- **Headings**: 600-800 (semibold-extrabold)
- **Body**: 400-500 (normal-medium)

### Componentes
- **Cards**: `rounded-2xl` com sombras suaves
- **Buttons**: `rounded-md` com hover transitions
- **Inputs**: `rounded-md` com focus rings

## 📝 Customização

### Alterar textos
Edite o arquivo `/web/src/app/page.tsx` nas respectivas seções.

### Alterar cores
Edite `/web/tailwind.config.ts` e `/web/src/styles/globals.css`.

### Adicionar campos no formulário
1. Atualize o schema Zod em `/api/src/leads/dto/create-lead.dto.ts`
2. Adicione campos no Prisma schema `/api/prisma/schema.prisma`
3. Execute migration: `npm run prisma:migrate`
4. Atualize o formulário em `/web/src/components/LeadForm.tsx`

## ❓ FAQ Técnico

### Como alterar o número do WhatsApp?
Altere a variável `NEXT_PUBLIC_WHATSAPP_PHONE` no `.env.local`.

### Como configurar um domínio personalizado?
1. Configure DNS apontando para seu provedor de hosting
2. Atualize `NEXT_PUBLIC_SITE_URL` para seu domínio
3. Configure CORS no backend para aceitar seu domínio

### Como migrar de SQLite para PostgreSQL?
1. Altere o provider no `schema.prisma`: `provider = "postgresql"`
2. Configure `DATABASE_URL` para PostgreSQL
3. Execute: `npm run prisma:migrate`

### Como adicionar Google Analytics?
1. Configure `NEXT_PUBLIC_GA4_ID` no `.env`
2. Adicione o script do GA4 no `layout.tsx`
3. Configure `NEXT_PUBLIC_ENABLE_ANALYTICS="true"`

## 📞 Suporte

Para dúvidas ou suporte técnico:
- **E-mail**: contato@alvescuryfinancial.com
- **WhatsApp**: +1 (561) 823-1966

---

**© 2024 Alves Cury Financial. Desenvolvido com ❤️ para brasileiros nos EUA.**