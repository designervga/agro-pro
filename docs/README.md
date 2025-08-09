# AgroPro - Landing Page de Lista de Espera

Landing page para captura de leads do AgroPro, um app de diagnóstico de pragas com IA + comunidade.

## 📋 Estrutura do Projeto

```
docs/
├── index.html          # Landing page principal (/)
├── obrigado.html       # Página de sucesso (/obrigado)
├── pesquisa.html       # Pesquisa ODI (Jobs-to-be-Done)
├── styles.css          # Estilos CSS globais
├── script.js           # JavaScript interativo
└── README.md           # Esta documentação
```

## 🎯 Funcionalidades

### Landing Page (/)
- **Hero Section**: Headline A/B testável, formulário de captura
- **Como Funciona**: 3 passos visuais explicando o processo
- **Por que Entrar Agora**: 4 benefícios principais
- **Prova Social**: Contador de inscritos (placeholder)
- **Seção de Pesquisa**: CTA secundário para acesso direto à pesquisa
- **Formulário**: Captura e-mail ou WhatsApp com validação
- **Navegação**: Links para pesquisa no footer e seção dedicada

### Página de Sucesso (/obrigado)
- **Confirmação**: Feedback de inscrição bem-sucedida
- **CTA Principal**: Botão para responder pesquisa ODI
- **CTA Secundário**: Link para WhatsApp
- **Informações Adicionais**: Próximos passos e expectativas
- **Compartilhamento Social**: Botões para indicar amigos

### Pesquisa ODI (/pesquisa)
- **Pesquisa Jobs-to-be-Done**: Metodologia ODI (Outcome-Driven Innovation)
- **6 Etapas**: Contato, Ferramentas atuais, Ganhos, Dores, Tarefas, Preferências
- **Escalas de Importância/Satisfação**: Avaliação 1-5 para priorização
- **Interface Progressiva**: Barra de progresso e navegação entre etapas
- **Navegação**: Links de volta para a landing page

## 🔧 Configuração

### URLs para Atualizar
Substitua os placeholders pelos URLs reais:

1. **WhatsApp Business**: `docs/obrigado.html` linha 32
   ```html
   href="https://wa.me/SEU_NUMERO_WHATSAPP?text=..."
   ```

2. **Domínio da Landing Page**: `docs/obrigado.html` linhas 78 e 151
   ```javascript
   const linkToCopy = 'https://seu-dominio.com/?utm_source=referral';
   ```

3. **Links de Política**: `docs/index.html` e `docs/obrigado.html`
   - Privacidade
   - Termos de Uso
   - Contato

### A/B Testing
Para testar headlines diferentes, adicione `?variant=B` na URL:
- Variant A (padrão): "Diagnóstico e tratamento de pragas em minutos."
- Variant B: "IA + comunidade para identificar e tratar sua lavoura mais rápido."

## 🎨 Design System

### Cores
```css
--primary-color: #22c55e    /* Verde principal */
--primary-hover: #16a34a    /* Verde hover */
--text-primary: #1f2937     /* Texto principal */
--text-secondary: #6b7280   /* Texto secundário */
--background: #ffffff       /* Fundo principal */
```

### Breakpoints
- Mobile: ≤ 480px
- Tablet: 481px - 960px  
- Desktop: ≥ 961px

### Espaçamento
Sistema baseado em múltiplos de 8px:
- xs: 8px, sm: 16px, md: 24px, lg: 32px, xl: 48px

## ♿ Acessibilidade

- **Contraste**: ≥ 4.5:1 (WCAG AA)
- **Foco**: Indicadores visuais em todos os elementos interativos
- **Labels**: Associadas aos campos de formulário
- **Navegação**: Ordem de tabulação natural
- **Semântica**: HTML estruturado com landmarks

## 📱 Responsividade

### Mobile (≤ 480px)
- Layout em coluna única
- Formulário com largura 100%
- Tipografia reduzida
- Espaçamento compacto

### Tablet (481px - 960px)  
- Grid de 2 colunas para benefícios
- Hero mantém layout vertical
- Formulário centralizado

### Desktop (≥ 961px)
- Hero com 2 colunas (texto + formulário)
- Grid de 3 colunas para "Como Funciona"
- Tipografia em tamanho completo

## 🔌 Integrações Futuras

### Analytics
Eventos já preparados para tracking:
- `form_field_focus`
- `form_submit_attempt`
- `waitlist_signup_success`
- `survey_cta_click`
- `whatsapp_cta_click`

### Backend
Formulário preparado para integração:
- Validação client-side funcional
- Estados de loading implementados
- Estrutura para envio via fetch API

### UTM Parameters
Suporte para tracking de origem:
- `utm_source`, `utm_medium`, `utm_campaign`
- Referrer detection
- Variant tracking (A/B test)

## 🚀 Deploy

### GitHub Pages
1. Faça commit dos arquivos no branch `main`
2. Ative GitHub Pages nas configurações do repositório
3. Configure source para `/docs` folder

### Domínio Customizado
1. Adicione arquivo `CNAME` em `/docs`
2. Configure DNS do domínio
3. Ative HTTPS nas configurações

## 📊 Métricas Sugeridas

### KPIs Principais
- Taxa de conversão do formulário
- Tempo na página
- Taxa de abandono por seção
- Cliques no CTA da pesquisa

### A/B Tests Futuros
- Headlines (A vs B implementado)
- Texto do botão principal
- Ordem dos benefícios
- Cores do CTA

## 🔄 Próximas Versões

### v2.0 - Integração Completa
- [ ] Backend para captura de leads
- [ ] Integração com CRM/Email marketing
- [ ] Analytics real (Google Analytics/Mixpanel)
- [ ] Testes A/B automatizados

### v2.1 - Otimizações
- [ ] Lazy loading de imagens
- [ ] Service Worker para cache
- [ ] Melhor performance mobile
- [ ] SEO estruturado (Schema.org)

---

**Versão**: 1.0.0  
**Última atualização**: Janeiro 2024  
**Autor**: Equipe AgroPro
