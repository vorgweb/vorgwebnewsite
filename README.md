(The file `/home/freud/Documentos/meusaastuffo/README.md` exists, but is empty)
# Vorg Web Software — Projeto de Demonstração

Resumo rápido
- Projeto estático que demonstra páginas de serviços, artigos satélite e uma ferramenta gratuita para gerar tráfego orgânico.

Como visualizar localmente
1. Abra `index.html` no navegador ou inicie um servidor local:

```bash
python3 -m http.server 8000
# então acesse http://localhost:8000
```

Estrutura principal
- [index.html](index.html) — página principal/serviços
- [pizzaria.html](pizzaria.html) — exemplo de página de serviço otimizada
- [hamburgueria.html](hamburgueria.html), [academia.html](academia.html) — trabalhos de exemplo
- [sitemap.xml](sitemap.xml), [robots.txt](robots.txt) — indexação
- [artigos/](artigos/) — cluster de conteúdo (SEO local, cardápio, entrega)
- [ferramentas/calculadora-porcoes.html](ferramentas/calculadora-porcoes.html) — ferramenta gratuita (link bait)

O que já foi feito (SEO & performance)
- Resposta direta à intenção de busca inserida no primeiro parágrafo das páginas-chave.
- Meta description direta e Open Graph adicionados.
- JSON-LD básico (Organization / WebSite / Restaurant) adicionado — substitua `https://example.com/` pela URL real.
- Preload de CSS, `defer` em scripts e `loading="lazy"` nas imagens para melhorar Core Web Vitals.
- Sitemap e robots.txt criados.
- Cluster de conteúdo implementado com 3 artigos e gráficos SVG com dados de exemplo.

Próximos passos recomendados
1. Substituir `example.com` em JSON-LD pelas URLs reais.
2. Converter imagens para WebP e configurar cache/CDN (melhora LCP e FID).
3. Incluir CSS crítico inline (critical CSS) para o hero e carregar restante com `loadCSS`/`preload`.
4. Rodar Lighthouse e ajustar CLS / LCP / TTFB:

```bash
# Instalar o Lighthouse CLI (opcional)
npm install -g lighthouse
lighthouse http://localhost:8000 --output html --output-path ./lighthouse-report.html
```

Backlinks & outreach (pista rápida)
- Use a ferramenta (`ferramentas/calculadora-porcoes.html`) e o infográfico como ativo para outreach.
- Priorize portais locais e nichados; ofereça conteúdo exclusivo (guest post ou dados originais).
- Posso gerar um modelo de e-mail e uma lista inicial de alvos — quer que eu prepare?

Contatos e notas finais
- Alterações de conteúdo e citações de especialistas devem ser inseridas em `artigos/` para fortalecer os snippets.
- Para ajuda com Lighthouse, geração de critical CSS ou template de outreach, diga qual tarefa prefere que eu faça em seguida.

---
Atualizado em 2026-09-04.
