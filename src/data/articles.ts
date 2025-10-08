import naturalCleanseImg from "@/assets/article-natural-cleanse.jpg";
import constipationImg from "@/assets/article-constipation.jpg";
import foodsDigestionImg from "@/assets/article-foods-digestion.jpg";
import detoxImg from "@/assets/article-detox.jpg";
import bloatingImg from "@/assets/article-bloating.jpg";
import probioticsImg from "@/assets/article-probiotics.jpg";
import dietImg from "@/assets/article-diet.jpg";
import floraImg from "@/assets/article-flora.jpg";
import medicalHelpImg from "@/assets/article-medical-help.jpg";
import supplementsImg from "@/assets/article-supplements.jpg";
import { extraArticles } from "./articlesExtra";

export interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  readTime: string;
  content: string;
  faq: { question: string; answer: string }[];
}

const mainArticles: Article[] = [
  {
    id: "1",
    slug: "como-limpar-intestino-naturalmente",
    title: "Como Limpar o Intestino Naturalmente: 10 Métodos Comprovados",
    description: "Descubra técnicas naturais e eficazes para fazer uma limpeza intestinal completa e melhorar sua saúde digestiva sem medicamentos.",
    image: naturalCleanseImg,
    readTime: "8 min",
    content: `A limpeza intestinal natural é uma prática milenar que ganhou ainda mais relevância nos dias de hoje. Com a correria do dia a dia e alimentação processada, nosso intestino acumula toxinas que podem prejudicar nossa saúde.

## Por Que Limpar o Intestino é Importante?

O intestino é considerado nosso "segundo cérebro" e abriga trilhões de bactérias benéficas. Quando ele não funciona adequadamente, todo o organismo sofre. **Uma limpeza intestinal adequada pode:**

- Melhorar a absorção de nutrientes
- Aumentar a energia e disposição
- Fortalecer o sistema imunológico
- Reduzir o inchaço abdominal
- Melhorar a qualidade da pele

## 10 Métodos Naturais Para Limpar Seu Intestino

### 1. Aumente o Consumo de Fibras

As fibras são essenciais para o bom funcionamento intestinal. Consuma diariamente:

- Frutas como mamão, laranja e ameixa
- Vegetais folhosos (couve, espinafre, alface)
- Grãos integrais (aveia, quinoa, arroz integral)
- Leguminosas (feijão, lentilha, grão-de-bico)

### 2. Hidrate-se Adequadamente

**Beba no mínimo 2 litros de água por dia.** A água ajuda a amolecer as fezes e facilita o trânsito intestinal. Comece o dia com um copo de água morna com limão para estimular o sistema digestivo.

### 3. Probióticos Naturais

Inclua alimentos fermentados na sua dieta:

- Iogurte natural
- Kefir
- Kombucha
- Chucrute

Esses alimentos repõem as bactérias benéficas do intestino.

### 4. Chás Digestivos

Alguns chás têm propriedades que auxiliam na limpeza intestinal:

- Chá de hortelã
- Chá de gengibre
- Chá verde
- Chá de erva-doce

Consuma 2-3 xícaras por dia, preferencialmente entre as refeições.

### 5. Sementes de Linhaça e Chia

Ricas em fibras e ômega-3, essas sementes formam um gel que ajuda a limpar as paredes intestinais. **Deixe uma colher de sopa de sementes de molho em água durante a noite e consuma pela manhã em jejum.**

### 6. Aloe Vera (Babosa)

O suco de aloe vera tem propriedades laxativas naturais e anti-inflamatórias. Tome 50ml do suco puro pela manhã, mas com moderação.

### 7. Atividade Física Regular

O exercício físico estimula os movimentos peristálticos do intestino. **Caminhe pelo menos 30 minutos por dia** para manter tudo funcionando bem.

### 8. Jejum Intermitente

Períodos de jejum controlado dão descanso ao sistema digestivo e permitem que o corpo se concentre na limpeza. Consulte um profissional antes de iniciar.

### 9. Massagem Abdominal

Massageie suavemente a região abdominal em movimentos circulares no sentido horário. Isso estimula o trânsito intestinal.

### 10. Reduza Alimentos Processados

Evite ao máximo:

- Embutidos
- Frituras
- Açúcar refinado
- Farinha branca
- Refrigerantes

## Quando Buscar Ajuda Profissional?

Se você apresentar sintomas persistentes como dor abdominal intensa, sangue nas fezes ou constipação crônica, procure um médico gastroenterologista.

## Conclusão

A limpeza intestinal natural é um processo gradual que requer consistência. **Comece implementando 2-3 dessas práticas e vá adicionando outras progressivamente.** Seu intestino (e todo seu corpo) agradecerá!

**Lembre-se:** resultados sustentáveis vêm de mudanças de hábitos, não de soluções rápidas. Paciência e persistência são fundamentais para transformar sua saúde digestiva.`,
    faq: [
      {
        question: "Quanto tempo leva para limpar o intestino naturalmente?",
        answer: "O processo varia de pessoa para pessoa, mas geralmente leva de 2 a 4 semanas para começar a sentir melhorias significativas com métodos naturais."
      },
      {
        question: "Posso fazer limpeza intestinal todos os dias?",
        answer: "Não é recomendado fazer limpezas intensivas diariamente. O ideal é adotar hábitos saudáveis permanentes e fazer limpezas mais profundas apenas ocasionalmente, sob orientação profissional."
      },
      {
        question: "A limpeza intestinal emagrece?",
        answer: "A limpeza intestinal pode resultar em perda de peso temporária devido à eliminação de resíduos, mas não é um método de emagrecimento. O foco deve ser na saúde digestiva."
      },
      {
        question: "Quais os sinais de que meu intestino precisa de limpeza?",
        answer: "Sintomas como constipação frequente, inchaço abdominal, gases excessivos, fadiga, pele opaca e má digestão podem indicar que seu intestino precisa de atenção."
      }
    ]
  },
  {
    id: "2",
    slug: "sintomas-intestino-preso",
    title: "Sintomas de Intestino Preso e Como Resolver Definitivamente",
    description: "Identifique os sinais de constipação intestinal e aprenda tratamentos eficazes para regularizar seu trânsito intestinal de forma natural.",
    image: constipationImg,
    readTime: "7 min",
    content: `O intestino preso, também conhecido como constipação ou prisão de ventre, afeta milhões de brasileiros. Reconhecer os sintomas e saber como tratá-los é fundamental para sua qualidade de vida.

## O Que é Intestino Preso?

**Intestino preso é quando você evacua menos de 3 vezes por semana**, com fezes endurecidas e dificuldade para eliminar. Não é apenas desconfortável - pode trazer sérias consequências para a saúde.

## Principais Sintomas do Intestino Preso

### Sintomas Físicos

1. **Dificuldade para evacuar** - Necessidade de fazer muito esforço
2. **Fezes endurecidas** - Pequenas, secas e em formato de bolinhas
3. **Sensação de evacuação incompleta** - Mesmo após ir ao banheiro
4. **Dor abdominal e cólicas** - Especialmente na parte inferior da barriga
5. **Inchaço e distensão abdominal** - Barriga inchada e desconfortável
6. **Gases excessivos** - Com odor mais forte que o normal

### Sintomas Sistêmicos

- **Fadiga e cansaço constante** - Seu corpo gasta energia tentando eliminar toxinas
- **Dores de cabeça frequentes** - Relacionadas ao acúmulo de toxinas
- **Mau hálito** - Causado pela fermentação intestinal
- **Pele opaca e acne** - O intestino preso afeta a aparência da pele
- **Irritabilidade e mau humor** - A conexão intestino-cérebro é real
- **Falta de apetite** - Sensação de estar sempre "cheio"

## Causas Principais do Intestino Preso

### 1. Alimentação Inadequada

A principal causa é a **falta de fibras na dieta**. O brasileiro médio consome apenas 15g de fibras por dia, quando o ideal seria 25-30g.

Alimentos que pioram:
- Arroz branco
- Pão branco
- Queijos amarelos
- Carnes vermelhas em excesso
- Fast food

### 2. Baixa Ingestão de Água

**Menos de 2 litros de água por dia** deixa as fezes endurecidas. A água é fundamental para formar o bolo fecal adequado.

### 3. Sedentarismo

A falta de movimento físico retarda os movimentos intestinais. **Pessoas que ficam sentadas por mais de 6 horas diárias têm 2x mais chances de ter intestino preso.**

### 4. Estresse e Ansiedade

O eixo intestino-cérebro faz com que o estresse afete diretamente a motilidade intestinal. Situações estressantes podem "travar" o intestino.

### 5. Medicamentos

Alguns remédios causam constipação como efeito colateral:
- Antidepressivos
- Analgésicos opioides
- Antiácidos com alumínio
- Suplementos de ferro

## Como Resolver o Intestino Preso

### Mudanças na Alimentação (Fundamental!)

**Aumente o consumo de fibras gradualmente:**

**Café da manhã:**
- Aveia com frutas (mamão, ameixa, kiwi)
- Pão integral com sementes
- Suco verde com couve e gengibre

**Almoço e Jantar:**
- Vegetais crus e cozidos (mínimo 2 porções)
- Arroz integral ou quinoa
- Feijão, lentilha ou grão-de-bico
- Saladas variadas

**Lanches:**
- Frutas secas (ameixa, damasco)
- Castanhas
- Iogurte com granola

### Hidratação Adequada

- Comece o dia com 500ml de água morna
- Beba água a cada 2 horas
- Meta: 35ml por kg de peso corporal
- Chás digestivos entre refeições

### Exercícios Físicos

**Exercícios que ajudam especialmente:**

1. **Caminhada** - 30-45 minutos diários
2. **Yoga** - Posturas que massageiam o abdômen
3. **Agachamentos** - Estimulam a região pélvica
4. **Exercícios abdominais** - Fortalecem a musculatura

### Rotina Intestinal

- **Vá ao banheiro no mesmo horário** todos os dias
- Nunca segure a vontade de evacuar
- Mantenha a postura correta (use um banquinho para elevar os pés)
- Reserve tempo sem pressa

### Suplementação Natural

Considere suplementos que auxiliam:

- Psyllium (fibra natural)
- Probióticos
- Magnésio
- Óleo de linhaça

## Quando Procurar um Médico?

**Busque ajuda médica se:**

- Não evacuar por mais de uma semana
- Sentir dor intensa
- Notar sangue nas fezes
- Perder peso sem motivo
- Tiver histórico familiar de câncer colorretal
- Os sintomas piorarem apesar das mudanças

## Tratamentos Médicos Disponíveis

Quando necessário, o médico pode prescrever:

- Laxantes osmóticos (lactulose)
- Laxantes formadores de bolo fecal
- Supositórios (uso pontual)
- Probióticos farmacêuticos

**Importante:** Laxantes devem ser usados apenas sob orientação médica e por curto prazo.

## Conclusão

O intestino preso não deve ser ignorado. **É um sinal de que algo está desequilibrado no seu organismo.** A boa notícia é que na maioria dos casos, mudanças simples no estilo de vida resolvem o problema.

Comece hoje mesmo:
1. Aumente as fibras
2. Beba mais água
3. Movimente-se mais
4. Crie uma rotina

**Seu intestino regula muito mais do que você imagina - inclusive seu humor e imunidade!** Cuide bem dele.`,
    faq: [
      {
        question: "Quantos dias sem evacuar é preocupante?",
        answer: "Mais de 3 dias sem evacuar já é considerado constipação. Se passar de uma semana, procure ajuda médica imediatamente."
      },
      {
        question: "Laxante natural funciona?",
        answer: "Sim, laxantes naturais como ameixa, mamão e suco de laranja funcionam, mas devem ser parte de uma mudança de hábitos, não a única solução."
      },
      {
        question: "Intestino preso pode causar dor de cabeça?",
        answer: "Sim, o acúmulo de toxinas no intestino pode causar dores de cabeça, fadiga e mal-estar geral."
      },
      {
        question: "Qual a melhor posição para evacuar?",
        answer: "A posição de cócoras (ou com os pés elevados em um banquinho) alinha melhor o reto e facilita a evacuação."
      }
    ]
  },
  {
    id: "3",
    slug: "alimentos-que-melhoram-digestao",
    title: "15 Alimentos Que Melhoram a Digestão e Regulam o Intestino",
    description: "Lista completa de alimentos poderosos para turbinar sua digestão e manter seu intestino funcionando perfeitamente todos os dias.",
    image: foodsDigestionImg,
    readTime: "9 min",
    content: `Uma boa digestão começa no prato. Escolher os alimentos certos pode transformar completamente sua saúde intestinal. Veja a lista definitiva dos melhores alimentos para seu sistema digestivo.

## Por Que a Alimentação é Fundamental?

**O que você come impacta diretamente:**
- A velocidade do trânsito intestinal
- A qualidade da flora intestinal
- A produção de enzimas digestivas
- A absorção de nutrientes
- A eliminação de toxinas

## Os 15 Melhores Alimentos Para a Digestão

### 1. Mamão 🥭

**Por que funciona:**
- Contém papaína, enzima que quebra proteínas
- Rico em fibras solúveis
- Ajuda a amolecer as fezes

**Como consumir:** Em jejum ou após refeições pesadas. Prefira o papaya (mamão formosa).

### 2. Iogurte Natural com Probióticos

**Benefícios:**
- Repovoamento da flora intestinal
- Melhora a digestão da lactose
- Fortalece a imunidade

**Dica:** Escolha versões sem açúcar e verifique se contém culturas vivas (Lactobacillus e Bifidobacterium).

### 3. Aveia

**Por que é poderosa:**
- Fibra beta-glucana alimenta bactérias boas
- Regula o trânsito intestinal
- Ajuda a controlar o colesterol

**Melhor forma:** Aveia em flocos integrais, deixada de molho por 8 horas.

### 4. Gengibre

**Propriedades digestivas:**
- Estimula a produção de enzimas
- Reduz náuseas e gases
- Anti-inflamatório natural

**Como usar:** Chá, ralado em sucos ou na comida. Use 1-2cm de raiz fresca por dia.

### 5. Abacaxi 🍍

**Poder digestivo:**
- Contém bromelina (digere proteínas)
- Reduz inchaço abdominal
- Anti-inflamatório

**Consumo ideal:** Fresco, preferencialmente com o miolo (parte mais fibrosa).

### 6. Kefir

**Superalimento probiótico:**
- Mais de 30 cepas de bactérias benéficas
- Melhora intolerância à lactose
- Fortalece a mucosa intestinal

**Quantidade:** 200ml por dia, pela manhã ou à noite.

### 7. Batata-Doce

**Benefícios:**
- Rica em fibras
- Amido resistente alimenta probióticos
- Não causa picos de glicemia

**Preparo:** Cozida ou assada com casca.

### 8. Folhas Verdes Escuras

**Couve, espinafre, rúcula:**
- Clorofila desintoxica
- Magnésio relaxa a musculatura intestinal
- Fibras insolúveis promovem o trânsito

**Consumo:** Crus em saladas ou refogados levemente.

### 9. Sementes de Linhaça

**Propriedades:**
- Ômega-3 anti-inflamatório
- Mucilagem lubrifica o intestino
- Lignanas (prebióticos)

**Uso correto:** Trituradas na hora, 1 colher de sopa ao dia.

### 10. Abóbora

**Altamente digestiva:**
- Fibras macias
- Rica em betacaroteno
- Fácil de digerir

**Variedades:** Todas são benéficas - moranga, japonesa, menina.

### 11. Banana Verde

**Amido resistente:**
- Alimenta bactérias do cólon
- Melhora a sensibilidade à insulina
- Promove saciedade

**Como consumir:** Biomassa ou farinha de banana verde.

### 12. Chucrute (Repolho Fermentado)

**Probiótico potente:**
- Lactobacillus naturais
- Vitamina C e K
- Enzimas digestivas

**Quantidade:** 2-3 colheres por dia como acompanhamento.

### 13. Beterraba

**Estimula a bile:**
- Betaína melhora digestão de gorduras
- Fibras regulam o intestino
- Antioxidantes potentes

**Consumo:** Crua ralada, cozida ou em suco.

### 14. Hortelã

**Alivia desconfortos:**
- Relaxa músculos do trato digestivo
- Reduz gases e cólicas
- Melhora síndrome do intestino irritável

**Uso:** Chá após refeições ou folhas frescas.

### 15. Água de Coco

**Hidratação + Eletrólitos:**
- Potássio regula funções intestinais
- Enzimas bioativas
- Hidratação celular profunda

**Ideal:** Natural, não industrializada.

## Como Montar Seu Cardápio Digestivo

### Café da Manhã Perfeito
- Iogurte natural com kefir
- Aveia em flocos
- Mamão ou abacaxi
- Sementes de linhaça trituradas
- Chá de gengibre

### Almoço Equilibrado
- Salada com folhas verdes
- Batata-doce assada
- Frango ou peixe
- Beterraba ralada
- Arroz integral com feijão

### Jantar Leve
- Sopa de abóbora
- Omelete com espinafre
- Chucrute como acompanhamento
- Chá de hortelã

### Lanches
- Frutas frescas
- Castanhas
- Suco verde
- Água de coco

## Alimentos Que Você Deve Evitar

**Prejudicam a digestão:**
- Frituras
- Alimentos ultraprocessados
- Excesso de carne vermelha
- Laticínios em excesso (se houver intolerância)
- Açúcar refinado
- Refrigerantes
- Álcool em excesso

## Dicas Extras Para Potencializar os Resultados

1. **Mastigue bem** - Mínimo 20 vezes cada garfada
2. **Não beba muito líquido durante as refeições** - Dilui enzimas digestivas
3. **Coma devagar** - Sem distrações (TV, celular)
4. **Respeite os horários** - Regularidade é fundamental
5. **Combine bem os alimentos** - Evite muitas proteínas diferentes juntas

## Quanto Tempo Para Ver Resultados?

**Cronograma realista:**
- **1ª semana:** Redução de gases e inchaço
- **2ª semana:** Melhora no trânsito intestinal
- **1 mês:** Regularidade intestinal estabelecida
- **2-3 meses:** Flora intestinal reequilibrada

## Conclusão

**A alimentação é o pilar fundamental da saúde digestiva.** Não existe suplemento ou medicamento que substitua uma dieta equilibrada e rica em alimentos naturais.

**Comece gradualmente:**
1. Adicione 2-3 alimentos desta lista hoje
2. Aumente fibras aos poucos
3. Observe como seu corpo responde
4. Ajuste conforme necessário

**Lembre-se:** Cada organismo é único. O que funciona para uma pessoa pode precisar de ajustes para outra. Escute seu corpo e faça adaptações.

**Seu intestino vai agradecer - e sua saúde como um todo também!**`,
    faq: [
      {
        question: "Posso comer todos esses alimentos no mesmo dia?",
        answer: "Não é necessário nem recomendado. Escolha 5-7 alimentos desta lista para incluir regularmente em sua rotina e vá variando ao longo da semana."
      },
      {
        question: "Quanto tempo leva para melhorar a digestão?",
        answer: "Você pode começar a sentir diferença em 3-7 dias, mas mudanças mais profundas na flora intestinal levam de 2 a 3 meses."
      },
      {
        question: "Preciso comer alimentos orgânicos?",
        answer: "Não é obrigatório, mas é preferível, especialmente para folhas verdes e frutas que você come com casca, já que têm menos agrotóxicos."
      },
      {
        question: "Posso tomar suplementos probióticos em vez de comer esses alimentos?",
        answer: "Os suplementos podem ajudar, mas os alimentos oferecem fibras, nutrientes e compostos que trabalham em sinergia. O ideal é combinar ambos."
      }
    ]
  },
  {
    id: "4",
    slug: "detox-intestinal-funciona",
    title: "Detox Intestinal Funciona Mesmo? Verdades e Mitos Revelados",
    description: "Descubra a verdade por trás dos programas de detox intestinal. O que realmente funciona e o que é apenas marketing.",
    image: detoxImg,
    readTime: "10 min",
    content: `O detox intestinal virou febre nos últimos anos, mas será que realmente funciona? Vamos separar o que é ciência do que é apenas marketing.

## O Que é Detox Intestinal?

**Detox intestinal** refere-se a práticas que visam eliminar toxinas acumuladas no trato digestivo. A ideia é que, ao limpar o intestino, você melhora a absorção de nutrientes e elimina substâncias prejudiciais.

**Mas o que a ciência diz?**

O corpo humano já possui sistemas naturais de desintoxicação:
- Fígado (principal órgão desintoxicante)
- Rins (filtram o sangue)
- Intestino (elimina resíduos)
- Pele (elimina toxinas pelo suor)

## Detox Funciona? A Verdade Científica

### O Que Funciona ✅

**1. Alimentação Rica em Fibras**
- Elimina resíduos naturalmente
- Alimenta bactérias benéficas
- Comprovado cientificamente

**2. Hidratação Adequada**
- Facilita eliminação de toxinas
- Melhora função renal
- Base de qualquer "detox"

**3. Redução de Alimentos Processados**
- Diminui carga tóxica
- Melhora função hepática
- Comprovadamente eficaz

**4. Jejum Intermitente Controlado**
- Autofagia celular
- Descanso digestivo
- Com evidências científicas

### O Que NÃO Funciona ❌

**1. Chás "Milagrosos"**
- Muitos são apenas laxantes
- Podem causar dependência
- Resultados temporários

**2. Sucos Detox Radicais**
- Privação de nutrientes
- Perda de massa muscular
- Efeito rebote

**3. Lavagens Intestinais Frequentes**
- Desequilibram flora intestinal
- Podem causar dependência
- Riscos à saúde

**4. Dietas Muito Restritivas**
- Insustentáveis a longo prazo
- Déficit nutricional
- Prejudicam metabolismo

## Como Fazer um Detox Intestinal Saudável

### Protocolo de 7 Dias (Cientificamente Embasado)

**Dias 1-2: Preparação**
- Elimine processados, açúcar, álcool
- Aumente água para 3L/dia
- Adicione probióticos naturais

**Dias 3-5: Detox Ativo**
- Alimentação natural e orgânica
- Jejum intermitente 16/8
- Sucos verdes entre refeições
- Chás digestivos

**Dias 6-7: Transição**
- Reintrodução gradual de alimentos
- Manutenção de hábitos saudáveis
- Avaliação de resultados

### Cardápio Detox Eficaz

**Manhã (em jejum):**
- 500ml de água morna com limão
- 1 colher de psyllium

**Café da manhã:**
- Suco verde (couve, maçã, gengibre, limão)
- Frutas frescas
- Sementes de chia

**Almoço:**
- Salada abundante
- Vegetais cozidos no vapor
- Proteína magra (peixe ou frango)
- Quinoa ou arroz integral

**Lanche:**
- Chá digestivo
- Frutas ou oleaginosas

**Jantar:**
- Sopa de legumes
- Salada
- Proteína leve

**Antes de dormir:**
- Chá de camomila ou hortelã

## Sinais de Que Seu Detox Está Funcionando

**Positivos (Continue!):**
- Mais energia
- Melhor digestão
- Evacuações regulares
- Pele mais limpa
- Sono melhor

**Negativos (Pare ou Ajuste!):**
- Fadiga extrema
- Dores de cabeça intensas
- Tonturas
- Irritabilidade excessiva
- Fraqueza muscular

## Suplementos Que Realmente Ajudam

**Com Evidências Científicas:**

1. **Probióticos** - Restauram flora intestinal
2. **Fibras (Psyllium)** - Limpeza mecânica
3. **Clorofila** - Desintoxicante natural
4. **Magnésio** - Relaxa musculatura intestinal
5. **Glutamina** - Repara mucosa intestinal

## Mitos Sobre Detox

**MITO:** "Você precisa fazer detox todo mês"
**VERDADE:** Hábitos saudáveis diários são mais eficazes

**MITO:** "Detox elimina quilos de 'sujeira' acumulada"
**VERDADE:** A perda de peso inicial é principalmente água

**MITO:** "Quanto mais restritivo, melhor"
**VERDADE:** Restrição excessiva prejudica o metabolismo

**MITO:** "Sucos são suficientes"
**VERDADE:** Falta de fibras e proteínas é prejudicial

## Quando Fazer um Detox?

**Momentos Ideais:**
- Após período de excessos (festas, viagens)
- Mudança de estação
- Para dar um "reset" nos hábitos
- Máximo 4x por ano

**Quando NÃO Fazer:**
- Gravidez ou amamentação
- Doenças crônicas sem acompanhamento
- Distúrbios alimentares
- Uso de medicamentos contínuos

## Alternativa ao Detox: Hábitos Diários

**Melhor que qualquer detox radical:**

1. **Água com limão todas as manhãs**
2. **5-7 porções de vegetais/dia**
3. **Redução de processados**
4. **Atividade física regular**
5. **Sono adequado (7-9h)**
6. **Controle do estresse**
7. **Probióticos diários**

## Conclusão: Detox Funciona?

**Sim e Não.**

**Funciona SE:**
- For baseado em ciência
- Incluir alimentos nutritivos
- For temporário (7-14 dias max)
- Parte de mudança de hábitos
- Sem restrições extremas

**NÃO Funciona SE:**
- Promessas milagrosas
- Muito restritivo
- Feito com frequência
- Substitui hábitos saudáveis
- Baseado apenas em produtos

**A verdade é:** Seu corpo já se desintoxica naturalmente. O melhor "detox" é adotar hábitos saudáveis permanentes, não fazer limpezas extremas ocasionais.

**Foque em:**
- Alimentação rica em vegetais
- Hidratação constante
- Movimentação diária
- Sono reparador
- Gestão do estresse

**Isso é mais eficaz do que qualquer programa de detox de 3 dias!**`,
    faq: [
      {
        question: "Quanto tempo deve durar um detox intestinal?",
        answer: "Um detox seguro e eficaz deve durar entre 3 a 7 dias. Programas mais longos devem ter acompanhamento profissional."
      },
      {
        question: "Posso fazer detox toda semana?",
        answer: "Não. Detoxes frequentes podem desequilibrar sua nutrição e metabolismo. O ideal é no máximo 4 vezes ao ano."
      },
      {
        question: "Vou perder peso com detox?",
        answer: "Pode haver perda de peso inicial, mas é principalmente água e conteúdo intestinal. Para emagrecimento real, foque em mudanças de hábitos duradouras."
      },
      {
        question: "Detox pode ser perigoso?",
        answer: "Sim, se for muito restritivo ou prolongado. Pode causar desnutrição, desequilíbrio eletrolítico e problemas metabólicos."
      }
    ]
  },
  {
    id: "5",
    slug: "gases-inchaco-abdominal-solucoes",
    title: "Gases e Inchaço Abdominal: 12 Soluções Que Funcionam",
    description: "Elimine gases e inchaço de forma definitiva. Causas, tratamentos naturais e quando procurar ajuda médica.",
    image: bloatingImg,
    readTime: "8 min",
    content: `Gases e inchaço abdominal afetam 30% dos brasileiros. Se você sofre com isso, saiba que existe solução. Vamos descobrir as causas e tratamentos eficazes.

## Por Que Tenho Tanto Gás?

### Causas Principais

**1. Engolir Ar (Aerofagia)**
- Comer muito rápido
- Falar enquanto come
- Mascar chiclete
- Beber com canudo
- Fumar

**2. Alimentos Que Fermentam**
- Feijão e leguminosas
- Repolho, brócolis, couve-flor
- Cebola e alho
- Laticínios (se intolerante)
- Bebidas gaseificadas

**3. Disbiose Intestinal**
- Desequilíbrio da flora
- Supercrescimento bacteriano (SIBO)
- Após uso de antibióticos

**4. Má Digestão**
- Baixa produção de enzimas
- Refeições muito gordurosas
- Combinações inadequadas de alimentos

**5. Condições Médicas**
- Síndrome do intestino irritável (SII)
- Intolerância à lactose
- Doença celíaca
- Refluxo gastroesofágico

## 12 Soluções Eficazes

### 1. Mastigue Adequadamente

**Como fazer:**
- 20-30 mastigações por garfada
- Coma sem pressa (mínimo 20 minutos por refeição)
- Sem distrações (TV, celular)

**Por que funciona:** A digestão começa na boca. Mastigar bem reduz o trabalho do estômago.

### 2. Evite Bebidas Gaseificadas

**O que eliminar:**
- Refrigerantes
- Água com gás
- Cerveja
- Drinks com gás

**Substitua por:**
- Água natural
- Chás sem açúcar
- Água saborizada natural

### 3. Reduza Alimentos FODMAP

**O que são:** Carboidratos fermentáveis que causam gases.

**Lista de alimentos:**
- Maçã, pera
- Alho, cebola
- Feijão, lentilha
- Leite e derivados
- Trigo

**Faça teste:** Elimine por 2-4 semanas e reintroduza gradualmente.

### 4. Use Probióticos

**Melhores cepas:**
- Lactobacillus acidophilus
- Bifidobacterium lactis
- Saccharomyces boulardii

**Fontes naturais:**
- Iogurte natural
- Kefir
- Kombucha
- Chucrute

**Dosagem:** 10-20 bilhões de UFC/dia

### 5. Chás Digestivos

**Os mais eficazes:**

**Hortelã-pimenta:**
- Relaxa musculatura intestinal
- Reduz espasmos
- 2-3 xícaras/dia

**Erva-doce:**
- Carminativo natural
- Reduz fermentação
- Após refeições

**Gengibre:**
- Estimula digestão
- Anti-inflamatório
- 1-2 xícaras/dia

**Camomila:**
- Acalma o trato digestivo
- Reduz inflamação
- À noite

### 6. Movimente-se

**Exercícios que ajudam:**
- Caminhada pós-refeição (15-20 min)
- Yoga (posturas que massageiam abdômen)
- Alongamentos
- Natação

**Evite:** Exercícios intensos logo após comer

### 7. Massagem Abdominal

**Técnica correta:**
1. Deite de barriga para cima
2. Massageie em círculos no sentido horário
3. Pressão moderada
4. 5-10 minutos
5. Faça pela manhã ou antes de dormir

### 8. Hidrate-se (Mas Na Hora Certa)

**Quando beber:**
- 30 min antes das refeições
- 1-2 horas após refeições
- Entre refeições à vontade

**Quando evitar:**
- Durante as refeições (dilui enzimas)

**Quantidade:** 30-35ml por kg de peso

### 9. Identifique Intolerâncias

**Teste de eliminação:**

**Lactose (leite):**
- Elimine laticínios por 2 semanas
- Observe sintomas
- Reintroduza e monitore

**Glúten:**
- Elimine trigo, centeio, cevada por 4 semanas
- Avalie melhoras
- Teste reintrodução

**Considere teste:** Teste de intolerância alimentar com profissional

### 10. Enzimas Digestivas

**Quando usar:**
- Refeições pesadas
- Dificuldade digestiva crônica
- Deficiência enzimática

**Principais enzimas:**
- Amilase (digere carboidratos)
- Protease (digere proteínas)
- Lipase (digere gorduras)
- Lactase (digere lactose)

### 11. Reduza Sal e Açúcar

**Sal:**
- Causa retenção de líquidos
- Aumenta inchaço
- Máximo 5g/dia

**Açúcar:**
- Alimenta bactérias ruins
- Fermentação excessiva
- Prefira mel ou estévia

### 12. Controle o Estresse

**Conexão intestino-cérebro:**
- Estresse altera motilidade
- Aumenta sensibilidade visceral
- Piora sintomas

**Práticas que ajudam:**
- Meditação (10-20 min/dia)
- Respiração profunda
- Yoga
- Terapia se necessário

## Alimentos Que Combatem Gases

**✅ CONSUMA:**
- Abacaxi (bromelina)
- Mamão (papaína)
- Gengibre
- Hortelã
- Pepino
- Abóbora
- Banana madura
- Arroz branco

**❌ EVITE (ou modere):**
- Feijão (ou deixe de molho 12h)
- Brócolis, couve-flor
- Repolho
- Cebola crua
- Bebidas gaseificadas
- Chiclete
- Adoçantes artificiais

## Combinações de Alimentos

**Evite misturar:**
- Frutas com refeições principais
- Muitas proteínas diferentes
- Proteína com carboidrato simples

**Boas combinações:**
- Proteína + vegetais
- Carboidratos + vegetais
- Frutas sozinhas ou antes das refeições

## Quando Procurar Médico?

**Sinais de alerta:**
- Dor abdominal intensa
- Sangue nas fezes
- Perda de peso inexplicada
- Vômitos persistentes
- Mudança súbita no padrão intestinal
- Sintomas que pioram

**Exames que podem ser solicitados:**
- Teste de intolerância à lactose
- Teste de H. pylori
- Colonoscopia
- Teste respiratório (SIBO)
- Exames de sangue

## Suplementos Que Ajudam

**Com evidências:**
1. **Probióticos multi-cepas**
2. **Enzimas digestivas**
3. **Óleo de hortelã-pimenta (cápsulas)**
4. **Carvão ativado (pontualmente)**
5. **Magnésio**

## Plano de Ação de 30 Dias

**Semana 1:**
- Mastigue devagar
- Elimine refrigerantes
- Caminhe após refeições

**Semana 2:**
- Adicione probióticos
- Teste de eliminação lactose
- Chás digestivos diários

**Semana 3:**
- Massagem abdominal diária
- Reduza sal e açúcar
- Identifique alimentos gatilho

**Semana 4:**
- Avalie resultados
- Mantenha o que funcionou
- Ajuste conforme necessário

## Conclusão

**Gases e inchaço são sinais de que algo está desequilibrado.** Não é normal viver assim. Com as estratégias certas, é totalmente possível ter um abdômen confortável.

**Comece hoje:**
1. Escolha 3 soluções desta lista
2. Implemente por 2 semanas
3. Observe mudanças
4. Ajuste e expanda

**Lembre-se:** Cada corpo é único. Pode levar algumas semanas para identificar o que funciona melhor para você. Seja paciente e consistente!`,
    faq: [
      {
        question: "É normal ter gases todos os dias?",
        answer: "Eliminar gases de 10-20 vezes ao dia é normal. Porém, se vier acompanhado de dor ou inchaço excessivo, pode indicar um problema."
      },
      {
        question: "Probióticos podem aumentar gases no início?",
        answer: "Sim, é comum nos primeiros 3-7 dias enquanto a flora se ajusta. Se persistir além disso, reduza a dose ou troque a cepa."
      },
      {
        question: "Carvão ativado funciona para gases?",
        answer: "Sim, pontualmente. Absorve gases no trato digestivo. Use apenas ocasionalmente, pois pode interferir na absorção de nutrientes."
      },
      {
        question: "Por que tenho mais gases à noite?",
        answer: "O acúmulo de gases durante o dia, refeição noturna mais pesada e posição deitada favorecem o desconforto. Jante cedo e leve."
      }
    ]
  }
];

// Combinar artigos principais com extras
export const articles = [...mainArticles, ...extraArticles];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};
