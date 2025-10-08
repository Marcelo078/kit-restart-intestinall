// Artigos 6-10 adicionais
import probioticsImg from "@/assets/article-probiotics.jpg";
import dietImg from "@/assets/article-diet.jpg";
import floraImg from "@/assets/article-flora.jpg";
import medicalHelpImg from "@/assets/article-medical-help.jpg";
import supplementsImg from "@/assets/article-supplements.jpg";

export const extraArticles = [
  {
    id: "6",
    slug: "probioticos-prebioticos-diferenca",
    title: "Probióticos vs Prebióticos: Qual a Diferença e Como Usar",
    description: "Entenda de vez a diferença entre probióticos e prebióticos e como usar cada um para turbinar sua saúde intestinal.",
    image: probioticsImg,
    readTime: "7 min",
    content: `Probióticos e prebióticos são termos que você já deve ter ouvido, mas sabe realmente a diferença? Entender isso pode transformar sua saúde intestinal.`,
    faq: [
      { question: "Posso tomar probióticos e prebióticos juntos?", answer: "Sim! Na verdade, a combinação (simbióticos) potencializa os benefícios. Os prebióticos alimentam os probióticos." },
      { question: "Preciso tomar probióticos todos os dias?", answer: "Para manutenção da saúde, sim. A suplementação diária mantém a flora intestinal equilibrada." },
      { question: "Quanto tempo leva para probióticos fazerem efeito?", answer: "Os primeiros efeitos podem aparecer em 3-7 dias, mas benefícios completos levam 4-8 semanas." },
      { question: "Probióticos engordam?", answer: "Não, pelo contrário. Estudos mostram que podem ajudar no controle de peso ao melhorar a digestão e metabolismo." }
    ]
  },
  {
    id: "7",
    slug: "dieta-intestino-saudavel",
    title: "Dieta Para Intestino Saudável: Cardápio Completo de 7 Dias",
    description: "Plano alimentar completo e prático para transformar sua saúde intestinal em apenas uma semana. Receitas inclusas!",
    image: dietImg,
    readTime: "12 min",
    content: `Ter um intestino saudável começa no prato. Este guia completo traz um cardápio de 7 dias cientificamente elaborado para otimizar sua saúde digestiva.`,
    faq: [
      { question: "Posso adaptar o cardápio às minhas preferências?", answer: "Sim! Use os princípios (fibras, probióticos, hidratação) e substitua ingredientes mantendo essas características." },
      { question: "Preciso fazer essa dieta para sempre?", answer: "Não como dieta, mas como estilo de vida. A ideia é criar hábitos alimentares saudáveis permanentes." },
      { question: "Vou perder peso com essa dieta?", answer: "Possivelmente, como consequência da melhora digestiva e alimentação mais saudável, mas não é o foco principal." },
      { question: "Posso comer fora seguindo esses princípios?", answer: "Sim! Escolha pratos com vegetais abundantes, proteínas grelhadas, evite frituras e peça salada como entrada." }
    ]
  },
  {
    id: "8",
    slug: "como-melhorar-flora-intestinal",
    title: "Como Melhorar a Flora Intestinal: Guia Completo e Atualizado",
    description: "Aprenda a restaurar e manter uma flora intestinal saudável. Microbioma em equilíbrio é sinônimo de saúde plena.",
    image: floraImg,
    readTime: "9 min",
    content: `Sua flora intestinal (microbioma) abriga trilhões de bactérias que influenciam desde seu humor até sua imunidade. Vamos aprender a cuidar delas.`,
    faq: [
      { question: "Antibióticos destroem a flora intestinal?", answer: "Sim, antibióticos eliminam bactérias boas junto com as ruins. Sempre tome probióticos durante e após o tratamento." },
      { question: "Quanto tempo leva para restaurar a flora?", answer: "Depende do grau de desequilíbrio. Pode levar de 2 semanas a 6 meses com alimentação adequada e probióticos." },
      { question: "Posso fazer exame da flora intestinal?", answer: "Sim, existem testes de microbioma que analisam a composição bacteriana. Consulte um gastroenterologista." },
      { question: "Estresse afeta a flora intestinal?", answer: "Muito! O eixo intestino-cérebro faz com que estresse crônico desequilibre o microbioma." }
    ]
  },
  {
    id: "9",
    slug: "constipacao-quando-procurar-medico",
    title: "Constipação: Quando Procurar Ajuda Médica? Sinais de Alerta",
    description: "Saiba identificar quando a constipação é apenas um problema pontual ou quando pode indicar algo mais sério.",
    image: medicalHelpImg,
    readTime: "6 min",
    content: `Nem toda constipação é motivo de pânico, mas alguns sinais merecem atenção médica imediata. Aprenda a identificá-los.`,
    faq: [
      { question: "Quantos dias sem evacuar é perigoso?", answer: "Mais de 3 dias já é preocupante. Mais de 7 dias requer avaliação médica urgente." },
      { question: "Qual médico devo procurar?", answer: "Comece com clínico geral ou gastroenterologista. Em emergências, vá ao pronto-socorro." },
      { question: "Que exames podem ser necessários?", answer: "Colonoscopia, exames de sangue, teste de trânsito colônico, manometria anorretal, dependendo do caso." },
      { question: "Constipação pode ser sintoma de câncer?", answer: "Pode, especialmente se houver mudança súbita no padrão intestinal após os 50 anos. Daí a importância da avaliação." }
    ]
  },
  {
    id: "10",
    slug: "suplementos-saude-digestiva-guia",
    title: "Suplementos Para Saúde Digestiva: Guia Completo e Honesto",
    description: "Tudo o que você precisa saber sobre suplementos para o intestino. O que funciona, o que não funciona e como escolher.",
    image: supplementsImg,
    readTime: "11 min",
    content: `O mercado de suplementos digestivos é enorme e confuso. Vamos descomplicar e mostrar o que realmente vale a pena.`,
    faq: [
      { question: "Preciso tomar suplementos se me alimento bem?", answer: "Não necessariamente. Alimentação equilibrada é a base. Suplementos são complementos, não substitutos." },
      { question: "Posso tomar vários suplementos juntos?", answer: "Alguns sim, outros não. Probióticos + prebióticos OK. Mas evite tomar tudo de uma vez. Consulte profissional." },
      { question: "Suplementos têm efeitos colaterais?", answer: "Podem ter. Probióticos podem causar gases inicialmente, fibras em excesso causam desconforto. Comece devagar." },
      { question: "Como escolher um bom probiótico?", answer: "Procure: múltiplas cepas, mínimo 10 bilhões UFC, refrigerado ou em cápsulas resistentes, marca confiável." }
    ]
  }
];
