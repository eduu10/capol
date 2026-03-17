export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  image: string;
  thumbnail: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'parceiros-credenciados-para-oferecer-o-melhor',
    title: 'Parceiros Credenciados para Oferecer o Melhor',
    date: '29/07/2022',
    image: '/imagens/blog/banner_parceiros.jpg',
    thumbnail: '/imagens/blog/p_banner_parceiros.jpg',
    excerpt:
      'A Capol trabalha com parceiros credenciados para garantir os melhores insumos e produtos para seus cooperados, com condições exclusivas e descontos especiais.',
    content: `<p>A Cooperativa Agropecuária de Oliveira - Capol conta com parceiros credenciados de excelência para oferecer o melhor aos seus cooperados. São empresas reconhecidas no mercado que fornecem insumos de alta qualidade com condições comerciais exclusivas.</p>

<h3>Nossos Parceiros</h3>

<p><strong>GECAL</strong> - Referência em calcário agrícola e corretivos de solo, a GECAL fornece produtos essenciais para a correção da acidez do solo e melhoria da fertilidade, garantindo maior produtividade nas lavouras dos cooperados.</p>

<p><strong>Agronelli</strong> - Empresa líder em fertilizantes e nutrição vegetal, a Agronelli disponibiliza uma linha completa de produtos para adubação e manejo nutricional das culturas, com tecnologia de ponta e assistência técnica especializada.</p>

<p><strong>Yara Brasil</strong> - Multinacional norueguesa líder mundial em nutrição de plantas, a Yara Brasil oferece fertilizantes de alta eficiência e soluções completas para o agronegócio, contribuindo para uma agricultura mais sustentável e produtiva.</p>

<p><strong>Fertipar</strong> - Especialista em fertilizantes e corretivos, a Fertipar fornece produtos de qualidade para atender as necessidades nutricionais das mais diversas culturas, com foco na eficiência agronômica e no custo-benefício.</p>

<h3>Vantagens para Cooperados</h3>

<p>Os cooperados da Capol contam com descontos exclusivos na aquisição de insumos junto aos parceiros credenciados. Além dos preços diferenciados, os cooperados têm acesso a condições de pagamento facilitadas, assistência técnica gratuita e acompanhamento personalizado para suas lavouras.</p>

<p>Consulte a equipe comercial da Capol para conhecer todas as condições especiais disponíveis para cooperados.</p>`,
  },
  {
    id: 2,
    slug: 'assistencia-tecnica-e-especializada',
    title: 'Assistência Técnica e Especializada',
    date: '29/07/2022',
    image: '/imagens/blog/banner_assistencia.jpg',
    thumbnail: '/imagens/blog/p_banner_assistencia.jpg',
    excerpt:
      'A Capol oferece assistência técnica especializada e gratuita aos cooperados, com equipe de engenheiros agrônomos que realizam visitas às propriedades.',
    content: `<p>A Cooperativa Agropecuária de Oliveira - Capol disponibiliza aos seus cooperados um serviço completo de assistência técnica especializada, totalmente gratuito, com o objetivo de aumentar a produtividade e rentabilidade das propriedades rurais.</p>

<h3>Equipe Técnica Qualificada</h3>

<p>Nossa equipe é composta por engenheiros agrônomos e técnicos agropecuários com ampla experiência no campo. Os profissionais estão constantemente atualizados com as mais recentes tecnologias e práticas do agronegócio, garantindo orientações precisas e eficientes.</p>

<h3>Visitas Técnicas Gratuitas</h3>

<p>Os cooperados podem solicitar visitas técnicas gratuitas às suas propriedades. Durante as visitas, os profissionais realizam diagnóstico completo da propriedade, incluindo análise de solo, avaliação de pastagens, manejo nutricional do rebanho, orientação sobre plantio e colheita, e recomendações para melhoria da produtividade.</p>

<h3>Serviços Oferecidos</h3>

<ul>
<li>Análise e interpretação de solo</li>
<li>Recomendação de adubação e calagem</li>
<li>Orientação sobre manejo de pastagens</li>
<li>Formulação de dietas para o rebanho</li>
<li>Acompanhamento de lavouras</li>
<li>Orientação sobre controle de pragas e doenças</li>
<li>Planejamento forrageiro</li>
</ul>

<p>Para agendar uma visita técnica, entre em contato com a Capol pelo telefone (37) 3331.4410 ou procure uma de nossas unidades.</p>`,
  },
  {
    id: 3,
    slug: 'unimed-e-capol--saude-para-a-familia-inteira-',
    title: 'Unimed e Capol: Saúde para a Família Inteira!',
    date: '29/07/2022',
    image: '/imagens/blog/banner_saude.jpg',
    thumbnail: '/imagens/blog/p_banner_saude.jpg',
    excerpt:
      'Parceria entre a Capol e a UNIMED oferece plano de saúde com condições especiais para produtores rurais e suas famílias.',
    content: `<p>A Cooperativa Agropecuária de Oliveira - Capol firmou uma importante parceria com a UNIMED para oferecer planos de saúde com condições especiais aos produtores rurais cooperados e suas famílias.</p>

<h3>Saúde no Campo</h3>

<p>Sabemos que o produtor rural muitas vezes enfrenta dificuldades para acessar serviços de saúde de qualidade. Pensando nisso, a Capol buscou junto à UNIMED condições diferenciadas para que os cooperados e seus familiares possam contar com a melhor assistência médica disponível na região.</p>

<h3>Benefícios do Plano</h3>

<p>O convênio entre Capol e UNIMED oferece aos cooperados:</p>

<ul>
<li>Mensalidades com valores diferenciados e abaixo do mercado</li>
<li>Cobertura completa incluindo consultas, exames e internações</li>
<li>Ampla rede de médicos e hospitais credenciados</li>
<li>Atendimento de urgência e emergência 24 horas</li>
<li>Possibilidade de incluir toda a família no plano</li>
<li>Carências reduzidas para novos adesões</li>
</ul>

<h3>Como Aderir</h3>

<p>Para aderir ao plano de saúde UNIMED pela Capol, o cooperado deve procurar a sede da cooperativa em Oliveira com os seguintes documentos: CPF, RG, comprovante de residência e carteira de cooperado. A equipe administrativa auxiliará em todo o processo de adesão.</p>

<p>Cuide da saúde de quem você ama. Procure a Capol e conheça todas as vantagens do plano de saúde UNIMED para cooperados!</p>`,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
