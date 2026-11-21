/* =========================================================
   Aula de Teoría de la Firma — contenido
   Versión de estudio 0.3 · Unidades 05 y 06

   Para editar el material: cada subunidad tiene teoría,
   conceptos, práctica, autoevaluación, repaso y fuentes.
   Las unidades futuras se agregan al final del arreglo.
   ========================================================= */

window.CONTENT = {
  course: {
    title: "Teoría de la Firma y la Organización Industrial",
    short: "Teoría de la Firma",
    institution: "UNMdP"
  },

  units: [
    {
      id: "u1",
      num: "01",
      short: "Introducción",
      title: "Introducción a la materia",
      status: "locked"
    },
    {
      id: "u2",
      num: "02",
      short: "Neoclásica",
      title: "La teoría neoclásica y sus críticas",
      status: "locked"
    },
    {
      id: "u3",
      num: "03",
      short: "Evolutivo",
      title: "Enfoque evolutivo: mercados y competencia",
      status: "locked"
    },
    {
      id: "u4",
      num: "04",
      short: "Teoría de la firma",
      title: "Teorías contractuales y de la organización",
      status: "locked"
    },
    {
      id: "u5",
      num: "05",
      short: "Competencias y regulación",
      title: "Competencias, evolución y regulación",
      status: "active",
      subtitle: "Tres lentes para explicar por qué las firmas son heterogéneas, cómo aprenden y cómo el marco institucional regula lo que pueden hacer.",
      description: "La unidad reúne tres enfoques que se complementan: la teoría de los recursos y capacidades (5.1), la teoría evolucionista de la firma (5.2) y la teoría de la regulación (5.3). La pregunta común es qué hay dentro de la empresa que no se explica por el mercado.",
      minutes: 150,
      sourceCount: 17,
      subunits: [
        /* =====================================================
           5.1 — COMPETENCIAS Y RECURSOS
           ===================================================== */
        {
          id: "5a",
          code: "5.1",
          letter: "A",
          accent: "teal",
          title: "Competencias y recursos",
          desc: "Penrose, la distinción recurso/servicio y el origen de las capacidades.",
          tagline: "La ventaja no está en los recursos, sino en los servicios que la empresa sabe obtener de ellos.",
          minutes: 50,
          sourceCount: 7,
          theory: {
            title: "La firma como depósito de conocimiento",
            lead: "La teoría de los recursos no empieza por el precio ni por la cantidad: empieza por una pregunta que la teoría neoclásica deja de lado. ¿Por qué dos empresas que compran los mismos insumos, con la misma tecnología disponible y precios parecidos, obtienen resultados distintos y una crece mientras la otra se estanca?",
            keyIdea: "La empresa no es una función de producción: es una colección de recursos y un depósito de conocimiento. La ventaja no está en el recurso que se compra, sino en los servicios que la organización sabe obtener de él y en su capacidad de renovarlos.",
            keyIdeaSource: "Síntesis de Penrose (1959); Teece, Pisano y Shuen (1997)",
            sections: [
              {
                id: "s1",
                title: "Una teoría de la firma, no solo de los precios",
                html: `<p>La teoría neoclásica describe la empresa como un punto en el espacio de precios: una función de producción que transforma inputs en outputs y que se adapta mecánicamente a las señales del mercado. En ese mundo no hay espacio para la organización interna, el aprendizaje ni la innovación. La firma es una <em>caja negra</em>.</p>
<p>El enfoque de competencias cambia la pregunta. En lugar de preguntar cómo se asignan los recursos escasos, se pregunta <strong>por qué las firmas existen, por qué se organizan de una manera determinada y por qué son distintas entre sí</strong>. La teoría de la firma puede ordenarse en cuatro grandes preguntas: <strong>existencia</strong> (¿por qué hay empresas y no solo mercado?), <strong>límites</strong> (¿qué se hace adentro y qué se compra afuera?), <strong>organización</strong> (¿cómo se coordinan las tareas?) y <strong>heterogeneidad</strong> (¿qué explica que firmas parecidas tengan desempeños diferentes?).</p>
<p>Las teorías contractuales —Coase, Williamson— responden sobre todo las dos primeras. Las teorías basadas en competencias se ocupan de las dos segundas: la organización interna y la heterogeneidad. Su punto de partida es que las empresas son <strong>repositorios de capacidades y conocimiento</strong>, y que esas diferencias no son un detalle: son el objeto de estudio. <span class="source-chip">PPT Unidad 4.1</span> <span class="source-chip">Coriat y Weinstein, 2011</span></p>
<blockquote>Las empresas son un repositorio de capacidades y conocimiento: existen diferencias sistemáticas entre las firmas en la medida en que controlan de manera distinta sus factores, y esas diferencias se deben a las diversas habilidades, capacidades y recursos que tienen.</blockquote>
<p>Este desplazamiento tiene una consecuencia práctica: para entender una empresa no alcanza con mirar sus precios o su participación de mercado. Hay que mirar <strong>qué sabe hacer, cómo lo aprendió y qué la vuelve difícil de imitar</strong>. Esa es la entrada al enfoque de recursos.</p>
<p>El enfoque de competencias no es la única teoría de la firma. En el mapa de la materia convive con otros tres enfoques, y cada uno responde preguntas distintas:</p>
<ul>
<li><strong>Contractuales</strong> (Coase, Williamson): se preguntan por la <em>existencia</em> y los <em>límites</em> de la firma. ¿Por qué hay empresas y no solo mercado? ¿Qué se hace adentro y qué se compra afuera?</li>
<li><strong>De competencias</strong> (Penrose, Nelson y Winter, Teece): se preguntan por la <em>organización</em> y la <em>heterogeneidad</em>. ¿Por qué la firma se estructura de una manera específica? ¿Qué explica que firmas parecidas tengan desempeños distintos?</li>
<li><strong>De agencia</strong> (Baumol, Marris, Jensen y Meckling): se preguntan por la separación entre propiedad y gestión, la información asimétrica y los objetivos que persigue la firma además del beneficio.</li>
<li><strong>Conductista</strong> (Simon, Cyert y March): se preguntan por la racionalidad limitada, la satisfacción y la formación de coaliciones internas.</li>
</ul>
<p>Esta subunidad se ocupa del segundo. Su aporte no es reemplazar a los demás, sino explicar lo que los otros dejan de lado: por qué las firmas son heterogéneas y cómo construyen, usan y renuevan sus capacidades. <span class="source-chip">PPT Unidad 4.1</span></p>
<p>Los antecedentes del enfoque se remontan a Adam Smith y Karl Marx, que vieron la división y administración del trabajo como fundamento de las habilidades y de la empresa; en el siglo XX, a Knight (1921), Penrose (1959), Richardson (1972) y Nelson y Winter (1982), y a Simon, Cyert y March desde el enfoque conductista. <span class="source-chip">PPT Unidad 4.1</span></p>`
              },
              {
                id: "s1b",
                title: "Lo que la mirada contractual deja afuera",
                html: `<p>Las teorías contractuales explican la existencia y los límites de la firma por los costos de transacción: a veces es más barato coordinar internamente que preparar, supervisar y hacer cumplir un contrato en el mercado. Es una explicación poderosa, pero tiene límites que la propia literatura reconoce. Esos límites son los que abren el espacio para el enfoque de competencias. <span class="source-chip">PPT Unidad 4.1</span></p>
<p>La crítica más general es que el análisis contractual compara estructuras de gobierno para una tecnología dada, pero no explica la tecnología, la producción ni el aprendizaje. Supone individuos dados, con preferencias y capacidades ya formadas, y deja afuera el proceso por el cual esos individuos aprenden, interpretan y transforman la organización. Los puntos concretos que la clase señala son estos:</p>
<ul>
<li><strong>Individuos dados.</strong> Las preferencias y capacidades se toman como un dato; no se explica cómo se forman ni cómo cambian con la organización y la experiencia.</li>
<li><strong>Tecnología y producción omitidas.</strong> El análisis se concentra en los costos de transacción y deja de lado la tecnología y los costos de producción. Sin embargo, la tecnología y la organización se condicionan mutuamente.</li>
<li><strong>Aspectos dinámicos ausentes.</strong> La comparación es de eficiencia estática; no explica la innovación, el aprendizaje ni el cambio de largo plazo. Williamson mismo reconoció que la relación entre organización e innovación requería mucha más investigación.</li>
<li><strong>Confianza y relaciones no contractuales.</strong> Los sistemas de mercado y de contratos dependen de la confianza, la lealtad y las normas morales. Una teoría que reduce toda interacción a contratos deja afuera esos elementos, que son esenciales para que los contratos funcionen.</li>
<li><strong>Cultura e instituciones.</strong> Los individuos aparecen como átomos impenetrables, no afectados por la cultura y las instituciones. La teoría no toma suficientemente en serio el papel de las instituciones en la formación de preferencias y capacidades.</li>
<li><strong>Aprendizaje mal tratado.</strong> El aprendizaje se reduce a la acumulación de información preexistente y reproducible. Pero la información debe ser interpretada para convertirse en conocimiento, y la misma información puede dar lugar a interpretaciones distintas. Aprender implica destrucción y reconstrucción, revisión de modelos mentales y corrección de errores.</li>
<li><strong>Conocimiento de grupo.</strong> La mirada individualista excluye el aprendizaje organizacional y el conocimiento de equipo. Las habilidades y el conocimiento que poseen los equipos no se explican sumando individuos aislados.</li>
<li><strong>Eficiencia estática vs. dinámica.</strong> La capacidad de la empresa para fomentar el aprendizaje, la innovación y la I+D puede ser una razón central de su existencia. El análisis contractual se queda en la estática comparativa y no explica esa dimensión dinámica.</li>
<li><strong>Incertidumbre radical.</strong> No todos los eventos futuros pueden reducirse a probabilidades calculables. La incertidumbre de Knight —el precio de un insumo a veinte años, la obsolescencia de una tecnología— no se resuelve con contratos contingentes. La empresa mantiene reservas de recursos y capacidades como amortiguadores.</li>
<li><strong>Costos de producción y relaciones sociales.</strong> Los costos de producción no son independientes de las relaciones sociales, los derechos de propiedad y la organización del trabajo. Concentrarse exclusivamente en minimizar costos de transacción es un error de concepción.</li>
</ul>
<p>Estas críticas no invalidan el enfoque contractual: delimitan su alcance. Los costos de transacción explican por qué existen las firmas y dónde están sus límites; no alcanzan para explicar por qué se organizan como se organizan, por qué aprenden y por qué son heterogéneas. Esa es la pregunta que retoma el enfoque de competencias. <span class="source-chip">PPT Unidad 4.1</span> <span class="source-chip">Coriat y Weinstein, 2011</span></p>`
              },
              {
                id: "s2",
                title: "Penrose: la firma como colección de recursos",
                html: `<p>Edith Penrose (1959) es la referencia fundacional. Su interés no es explicar el equilibrio de un mercado, sino <strong>el crecimiento de la empresa</strong> y las razones de la diferenciación y la competencia entre firmas. Para eso aborda las causas internas que generan y limitan el crecimiento, en lugar de explicarlo por eventos externos fortuitos.</p>
<p>Su definición es decisiva: la empresa es una <strong>colección de recursos productivos</strong> y, a la vez, un <strong>depósito de conocimiento</strong>. Los recursos pueden ser físicos (planta, equipos, materias primas), intangibles (marcas, patentes, reputación, relaciones con proveedores) o humanos (habilidades, experiencia, capacidad de dirección). Lo importante no es la lista, sino la forma en que se emplean y se disponen: eso depende de decisiones administrativas.</p>
<p>La empresa es, entonces, una <strong>unidad autónoma de planificación administrativa</strong>: sus actividades están relacionadas y coordinadas por planes. Esa coordinación no es un dato; es un proceso que consume tiempo, atención y aprendizaje. De ahí surge el famoso <strong>límite gerencial</strong>: la empresa no puede crecer más rápido de lo que su dirección puede coordinar y absorber nuevos recursos. <span class="source-chip">Penrose, 1959</span> <span class="source-chip">PPT Unidad 4.2</span></p>
<p>El crecimiento, en Penrose, es un <strong>subproducto del aprendizaje</strong>. Al usar los recursos, la empresa descubre servicios nuevos, libera capacidad gerencial y puede volver a crecer. La trayectoria importa porque el conocimiento acumulado en ese proceso es específico y difícil de transferir. Esto conecta directamente con la teoría evolucionista de la subunidad 5.2.</p>
<p>Penrose también precisa el <strong>objetivo</strong> y la <strong>dirección</strong> del crecimiento. El objetivo principal es acrecentar los beneficios totales a largo plazo mediante el crecimiento de la empresa. La dirección no es aleatoria: depende de la investigación y la planeación directiva, de las nuevas oportunidades que se abren y de la <strong>dirección emprendedora</strong>, un recurso especial que combina intuición, conocimiento y capacidad de coordinación. Crecer no es solo agregar recursos; es decidir hacia dónde y cómo combinarlos. <span class="source-chip">Penrose, 1959</span> <span class="source-chip">PPT Unidad 4.2</span></p>`
              },
              {
                id: "s3",
                title: "Recursos y servicios: la distinción que explica la heterogeneidad",
                html: `<p>La distinción más importante de Penrose es entre <strong>recurso</strong> y <strong>servicio</strong>. Un recurso es un <em>stock</em>: una máquina, una patente, una marca, un equipo humano. Un servicio es el <em>flujo</em> que ese recurso efectivamente aporta cuando se lo usa y se lo combina con otros. Penrose es explícita: los inputs del proceso productivo nunca son los recursos en sí mismos, sino los servicios que esos recursos pueden ofrecer.</p>
<p>La diferencia parece sutil, pero explica la heterogeneidad. Una misma máquina puede rendir de formas muy distintas según cómo se la use, quién la opere, qué mantenimiento reciba y qué rutinas la rodeen. Un mismo recurso puede prestar servicios diferentes si se lo combina con otros recursos o si se lo destina a otro uso. Dos empresas con el mismo stock pueden obtener flujos completamente distintos.</p>
<ul>
<li><strong>Recurso:</strong> lo que la empresa tiene o controla. Es un stock relativamente estable.</li>
<li><strong>Servicio:</strong> lo que ese recurso aporta en un uso y una combinación concretos. Es un flujo que depende de la organización.</li>
<li><strong>Capacidad:</strong> lo que la empresa sabe hacer de forma sostenida combinando recursos, servicios, rutinas y conocimiento.</li>
</ul>
<p>Penrose agrega una idea que impulsa el crecimiento: <strong>todo recurso está subutilizado</strong>. Siempre hay servicios que la empresa todavía no descubrió. El crecimiento nace, en buena medida, de la búsqueda por aprovechar esos servicios ociosos. La heterogeneidad no es un accidente: es el resultado de historias, combinaciones y aprendizajes diferentes. <span class="source-chip">Penrose, 1959</span> <span class="source-chip">PPT Unidad 4.2</span></p>
<blockquote>«Los servicios que producen los recursos dependen de la forma en que son usados. Un mismo recurso puede proveer diferentes servicios según la forma en que se use o se lo combine con diferentes tipos y cantidades de otros recursos.» (Penrose, 1959)</blockquote>`
              },
              {
                id: "s4",
                title: "El conocimiento como recurso estratégico",
                html: `<p>La literatura posterior a Penrose se divide, a grandes rasgos, en dos enfoques complementarios. El <strong>enfoque basado en recursos</strong> (EBR) trata al conocimiento como un recurso genérico entre otros; el <strong>enfoque basado en el conocimiento</strong> (EBC) lo considera el recurso de mayor importancia estratégica y distingue tipos de capacidades basadas en conocimiento. La pregunta central del EBC no es solo cómo asignar el conocimiento existente, sino cómo organizar la generación de conocimiento y capacidades. <span class="source-chip">PPT Unidad 4.2</span></p>
<p>El EBC sostiene que el conocimiento es el recurso de mayor importancia estratégica porque es difícil de imitar, no se deprecia como el capital físico y genera asimetrías entre firmas. Lo tácito y lo complejo del conocimiento protegen a la empresa de la imitación de mejoras significativas, aunque no necesariamente de la copia de mejoras menores.</p>
<p>Hay que distinguir dos tipos de conocimiento. El <strong>codificado</strong> puede escribirse, transmitirse y copiarse con relativa facilidad: un manual, una patente, un procedimiento. El <strong>tácito</strong> está incorporado en la práctica, los hábitos y la experiencia; se transmite haciendo, no leyendo. El conocimiento también es individual y colectivo: una persona sabe, pero el equipo y la organización saben de una manera que no se reduce a la suma de sus miembros.</p>
<p>El conocimiento se crea y se posee individualmente, pero puede quedar <strong>embebido en la organización</strong> como proceso, rutina o práctica. Por eso replicar una rutina es difícil y costoso: no alcanza con contratar a las mismas personas ni comprar la misma máquina. La empresa no es solo un lugar de procesamiento de información; es un lugar de <strong>desarrollo de competencias específicas</strong>. <span class="source-chip">PPT Unidad 4.2</span> <span class="source-chip">Hodgson, 2007</span></p>
<p>El conocimiento puede generarse internamente —I+D, experiencia, prueba y error— o absorberse del exterior —licencias, alianzas, redes con clientes, proveedores y competidores—. Las firmas difieren en dónde renuevan su conocimiento: algunas desarrollan capacidades de I+D; otras, capacidades para gestionar alianzas. Esa diferencia es, en sí misma, una fuente de heterogeneidad.</p>`
              },
              {
                id: "s5",
                title: "De recursos a capacidades: operativas y dinámicas",
                html: `<p>El enfoque de recursos y capacidades sostiene que la ventaja competitiva no está en los recursos aislados, sino en las <strong>capacidades</strong>: lo que la empresa sabe hacer de forma sostenida. Una capacidad combina recursos, rutinas y conocimiento; no se compra en el mercado y suele estar distribuida en la organización.</p>
<p>Teece, Pisano y Shuen (1997) distinguen dos niveles. Las <strong>capacidades operativas</strong> son las rutinas que permiten hacer el negocio de todos los días: producir, vender, distribuir, atender clientes. Las <strong>capacidades dinámicas</strong> son de segundo orden: actúan sobre las capacidades operativas para <em>integrarlas, construirlas y reconfigurarlas</em> cuando el entorno cambia. Su definición clásica es «la habilidad de la empresa de integrar, construir y reconfigurar competencias internas y externas para responder rápidamente a los cambios en el ambiente» (Teece et al., 1997, p. 516).</p>
<p>La literatura identifica cuatro factores críticos de las capacidades dinámicas: son <strong>procesos organizativos y rutinas basadas en conocimiento</strong>; su insumo es la configuración inicial de recursos y rutinas operativas; implican un proceso de <strong>transformación</strong>; y su producto es una <strong>nueva configuración</strong> de recursos y capacidades. No son «hacer más de lo mismo» ni simplemente tener un área de I+D: son la capacidad de cambiar lo que la empresa sabe hacer. <span class="source-chip">Teece, Pisano y Shuen, 1997</span> <span class="source-chip">PPT Unidad 4.2</span></p>
<p>Un ejemplo ayuda. Una empresa textil que reconvierte su línea para producir insumos médicos durante una crisis demuestra una capacidad dinámica. Una empresa que sigue produciendo la misma tela con las mismas rutinas, aunque lo haga muy bien, demuestra una capacidad operativa. La primera cambió su configuración; la segunda optimizó la existente.</p>`
              },
              {
                id: "s6",
                title: "Ventaja competitiva: por qué es difícil de imitar (y cuándo no)",
                html: `<p>La longevidad de una ventaja competitiva depende de la <strong>inimitabilidad de las capacidades que la sostienen</strong>. Cuanto mayor es el contenido de conocimiento tácito, complejo e integrado en una capacidad, más difícil es copiarla. Un competidor puede comprar la máquina, contratar a una persona o imitar un precio; lo que no puede comprar es la combinación de rutinas, relaciones y aprendizaje que hace que esa máquina o esa persona rindan de una manera particular.</p>
<p>Pero la historia tiene un matiz importante. El conocimiento tácito y complejo protege a la empresa de la imitación de <strong>mejoras significativas</strong>, pero no necesariamente de la imitación de mejoras menores (McEvily y Chakravarthy, 2002). Una ventaja basada en una rutina sofisticada puede sobrevivir mucho tiempo; una ventaja basada en un detalle fácil de observar puede erosionarse rápido. La pregunta correcta no es solo «¿tengo un recurso valioso?», sino «¿qué parte de mi ventaja es realmente difícil de copiar?».</p>
<p>Además, la empresa no genera rentas sola. La perspectiva relacional señala que muchas rentas se producen conjuntamente con otras empresas: proveedores, clientes, socios, redes. Un enfoque que mira solo los recursos internos puede perder de vista esa parte de la explicación (Dyer y Singh, 1998). La ventaja de un fabricante de autos depende de su red de proveedores; la de una marca de moda, de su cadena de diseño y producción. <span class="source-chip">PPT Unidad 4.2</span> <span class="source-chip">Teece, Pisano y Shuen, 1997</span></p>`
              },
              {
                id: "s7",
                title: "Incertidumbre, aprendizaje y por qué existe la firma",
                html: `<p>Las teorías contractuales explican la existencia de la firma por los costos de transacción: a veces es más barato coordinar internamente que contratar en el mercado. Las teorías de competencias agregan otra razón, más dinámica: la firma existe porque es un ámbito donde se puede <strong>aprender, innovar y enfrentar incertidumbre</strong> de una manera que el mercado no facilita.</p>
<p>La incertidumbre relevante no es la que se puede reducir a una probabilidad calculable. Es la <strong>incertidumbre radical</strong> de Knight: hay eventos futuros —el precio de un insumo a veinte años, la obsolescencia de una tecnología— sobre los que no hay una base científica para asignar probabilidades. En esas situaciones, la empresa mantiene reservas de recursos, habilidades y capacidad de coordinación como amortiguadores. No puede contratar todo contingencia por contingencia; necesita una organización que sostenga el aprendizaje y la adaptación. <span class="source-chip">PPT Unidad 4.1</span></p>
<p>También importa la <strong>cooperación</strong>. La organización interna permite incentivos de baja potencia, recompensas grupales y relaciones de confianza que favorecen el trabajo en equipo y el aprendizaje. El mercado, con contratos de alta potencia y relaciones impersonales, puede ser un mal lugar para desarrollar conocimiento colectivo. La empresa existe, en parte, porque es un espacio donde la cooperación y el aprendizaje pueden sostenerse en el tiempo. <span class="source-chip">PPT Unidad 4.1</span> <span class="source-chip">Coriat y Weinstein, 2011</span></p>
<p>Esta idea conecta con la subunidad 5.2: si la firma es un ámbito de aprendizaje, las <strong>rutinas</strong> son el mecanismo por el cual ese aprendizaje se conserva. Y conecta con 5.3: ese aprendizaje ocurre dentro de un marco institucional —contratos, salarios, normas— que lo hace posible o lo bloquea.</p>`
              },
              {
                id: "s8",
                title: "Límites, críticas y cómo usar la teoría",
                html: `<p>El enfoque de competencias no es un cuerpo teórico cerrado y coherente. Agrupa propuestas diversas —Penrose, Nelson y Winter, Teece, Hodgson— y todavía no hay consenso sobre la terminología y los conceptos fundamentales. Eso no lo invalida, pero obliga a usarlo con cuidado. <span class="source-chip">PPT Unidad 4.1</span></p>
<p>Hay tres críticas frecuentes. Primero, el riesgo de <strong>tautología</strong>: si las empresas exitosas son las que tienen recursos valiosos, y los recursos valiosos se definen por el éxito, la explicación puede volverse circular. Segundo, la <strong>dificultad de medición</strong>: los recursos y capacidades no siempre son observables; medirlos exige proxies e interpretación. Tercero, el sesgo <strong>estático</strong> del enfoque de recursos original, que la literatura de capacidades dinámicas intenta corregir al incorporar el cambio y la trayectoria.</p>
<p>Para usarlo en el estudio de un caso, conviene seguir un orden:</p>
<ul>
<li>¿Qué recursos controla la empresa (tangibles, intangibles, humanos)?</li>
<li>¿Qué servicios prestan esos recursos en esta organización?</li>
<li>¿Qué conocimiento es tácito, colectivo y difícil de transferir?</li>
<li>¿Cuáles son sus capacidades operativas y cuáles las dinámicas?</li>
<li>¿Dónde está el cuello de botella gerencial que limita el crecimiento?</li>
<li>¿Qué parte de la ventaja es realmente difícil de imitar y por qué?</li>
</ul>
<p>Si podés responder esas preguntas con un caso concreto, entendiste la teoría. Si solo podés recitar «recursos, capacidades y ventaja competitiva», todavía estás en la superficie. <span class="source-chip">PPT Unidad 4.2</span> <span class="source-chip">Coriat y Weinstein, 2011</span></p>`
              }
            ],
            flow: {
              label: "El recorrido de un recurso a una ventaja",
              nodes: [
                { title: "Recursos", sub: "tangibles e intangibles" },
                { title: "Servicios", sub: "lo que aportan al usarse" },
                { title: "Rutinas y capacidades", sub: "lo que la firma sabe hacer" },
                { title: "Ventaja sostenible", sub: "difícil de imitar" }
              ],
              note: "La flecha no es automática: la organización y el conocimiento tácito son los que convierten un recurso en ventaja."
            },
            table: {
              title: "Firma neoclásica y firma basada en recursos",
              headers: ["Dimensión", "Firma neoclásica", "Firma basada en recursos"],
              rows: [
                ["Unidad de análisis", "Un punto en el espacio de precios; una función de producción.", "Una colección de recursos y un depósito de conocimiento."],
                ["Racionalidad", "Perfecta, con información completa.", "Limitada; el conocimiento es costoso y parcial."],
                ["Heterogeneidad", "No relevante: agente representativo.", "Central: las diferencias entre firmas explican su desempeño."],
                ["Ventaja", "Eficiencia y precio.", "Servicios, rutinas, capacidades y conocimiento difícil de imitar."],
                ["Límite al crecimiento", "Tecnología, demanda, rendimientos.", "Capacidad gerencial, aprendizaje y trayectoria."],
                ["Objetivo", "Maximizar beneficio en cada período.", "Crecer, aprender y sostener rentas; el beneficio es una condición."]
              ]
            },
            trap: {
              title: "Error típico",
              text: "Creer que la teoría de recursos es un inventario de activos valiosos. No alcanza con tener una máquina, una patente o una marca: hay que preguntar qué servicios prestan, qué rutinas los sostienen y qué conocimiento tácito los vuelve difíciles de copiar. Un recurso sin organización es solo un costo."
            },
            teach: {
              title: "Para explicarlo desde cero",
              text: "Dos panaderías compran el mismo horno y la misma harina. Una prospera y la otra no. Si te preguntan por qué, la respuesta no está en los insumos: está en las recetas, la organización del trabajo, el mantenimiento y el aprendizaje acumulado. La primera convirtió un recurso idéntico en un servicio distinto. Eso es, en una frase, la teoría de los recursos."
            },
            sources: ["Penrose (1959)", "Teece, Pisano y Shuen (1997)", "Coriat y Weinstein (2011)", "Hodgson (2007)", "PPT Unidad 4.1", "PPT Unidad 4.2"]
          },
          concepts: [
            {
              term: "Heterogeneidad de la firma",
              short: "Las empresas no son copias: difieren en recursos, historia y conocimiento, y esas diferencias importan.",
              tags: ["Punto de partida", "Firma"],
              body: "Las empresas no son réplicas de un agente representativo: difieren en recursos, historia, organización y conocimiento. Esas diferencias no son ruido que el mercado elimina; son el punto de partida del análisis.",
              connects: ["Recursos productivos", "Trayectoria", "Ventaja competitiva"],
              sources: ["Penrose (1959)", "Nelson y Winter (1982)"],
              error: "Tratar las diferencias entre firmas como simples diferencias de tamaño o de precio.",
              example: "Dos estudios de diseño usan el mismo software y cobran parecido, pero uno entrega proyectos complejos con la mitad del equipo. La diferencia no es el software: es la forma de organizar el trabajo y el conocimiento acumulado."
            },
            {
              term: "Recursos productivos",
              short: "Los stocks con los que cuenta la empresa: físicos, intangibles y humanos.",
              tags: ["Recursos", "Penrose"],
              body: "Son los stocks con los que cuenta la empresa: físicos (planta, equipos), intangibles (marcas, patentes, reputación) y humanos (habilidades y conocimiento del personal). No son los inputs en sí, sino la base desde la que se obtienen servicios.",
              connects: ["Servicios de los recursos", "Capacidades"],
              sources: ["Penrose (1959)", "PPT Unidad 4.2"],
              error: "Confundir el recurso con el servicio que presta: la máquina no es el resultado.",
              example: "Una patente es un recurso; el servicio que presta depende de cómo la empresa la explote, la licencie o la combine con su know-how de producción."
            },
            {
              term: "Servicios de los recursos",
              short: "Lo que un recurso efectivamente aporta según cómo se lo use y combine.",
              tags: ["Recursos", "Distinción clave"],
              body: "Es el flujo efectivo que un recurso aporta cuando se lo usa y combina. Dos empresas con el mismo recurso obtienen servicios distintos porque los usan distinto. Los inputs del proceso productivo son servicios, no recursos.",
              connects: ["Recursos productivos", "Rutinas", "Ventaja competitiva"],
              sources: ["Penrose (1959)", "PPT Unidad 4.2"],
              error: "Suponer que el rendimiento de un recurso está determinado por el recurso mismo y no por la organización que lo usa.",
              example: "El mismo horno puede producir pan artesanal de alta gama o pan industrial: el servicio es distinto aunque el equipo sea idéntico."
            },
            {
              term: "Conocimiento tácito",
              short: "El saber-cómo que no está escrito: se incorpora con la práctica y es difícil de copiar.",
              tags: ["Conocimiento", "Imitación"],
              body: "Es el saber-cómo que no está escrito ni se transmite por un manual: está incorporado en la práctica, los hábitos y la experiencia. Es la parte del conocimiento que hace difícil copiar una capacidad.",
              connects: ["Rutinas", "Capacidades", "Trayectoria"],
              sources: ["Hodgson (2007)", "PPT Unidad 4.2"],
              error: "Creer que con documentar un proceso alcanza para replicar la capacidad de otra empresa.",
              example: "Una receta puede estar escrita, pero el punto exacto de la masa depende de la mano del panadero y de años de práctica."
            },
            {
              term: "Rutinas organizacionales",
              short: "Patrones regulares de comportamiento que funcionan como la memoria de la empresa.",
              tags: ["Organización", "Puente a 5.2"],
              body: "Son patrones regulares y predecibles de comportamiento organizacional: formas de producir, decidir, contratar o resolver problemas. Funcionan como la memoria de la empresa y son la base sobre la que se acumula conocimiento.",
              connects: ["Conocimiento tácito", "Capacidades", "Teoría evolucionista (5.2)"],
              sources: ["Nelson y Winter (1982)", "López (1996)"],
              error: "Pensar que las rutinas son solo «procedimientos formales escritos».",
              example: "La forma en que un equipo de planta resuelve un paro inesperado sin consultar el manual es una rutina, aunque no esté documentada."
            },
            {
              term: "Capacidades centrales",
              short: "Lo que la firma sabe hacer mejor que otras y sostiene su ventaja. No se compra.",
              tags: ["Capacidades", "Ventaja"],
              body: "Son las capacidades centrales que definen lo que la empresa sabe hacer mejor que otras y que sostienen su ventaja. Surgen de combinar recursos, rutinas y conocimiento; no se compran en el mercado.",
              connects: ["Rutinas", "Conocimiento tácito", "Ventaja competitiva"],
              sources: ["Teece, Pisano y Shuen (1997)", "Hodgson (2007)"],
              error: "Llamar «capacidad» a cualquier recurso valioso o a cualquier actividad que la empresa realiza.",
              example: "La capacidad de Toyota para mejorar continuamente sus procesos no es una máquina ni un manual: es una capacidad organizacional construida durante décadas."
            },
            {
              term: "Capacidades dinámicas",
              short: "La capacidad de cambiar las capacidades: detectar, integrar y reconfigurar.",
              tags: ["Capacidades", "Cambio"],
              body: "Son las capacidades de segundo orden: permiten cambiar las capacidades operativas. Incluyen detectar oportunidades, integrar conocimiento y reconfigurar recursos para adaptarse a entornos que cambian.",
              connects: ["Capacidades centrales", "Trayectoria", "Innovación"],
              sources: ["Teece, Pisano y Shuen (1997)", "PPT Unidad 4.2"],
              error: "Reducir las capacidades dinámicas a «innovar más rápido» o a tener un área de I+D.",
              example: "Una empresa textil que reconvierte su línea para producir insumos médicos durante una crisis demuestra una capacidad dinámica; seguir produciendo la misma tela de siempre, no."
            },
            {
              term: "Límite gerencial",
              short: "El crecimiento está limitado por la capacidad de la dirección para coordinar y absorber.",
              tags: ["Crecimiento", "Penrose"],
              body: "El crecimiento de la firma está limitado por la capacidad de su dirección para coordinar y absorber nuevos recursos. No es un límite de mercado ni de financiamiento: es un límite de organización y aprendizaje.",
              connects: ["Recursos", "Conocimiento tácito", "Crecimiento"],
              sources: ["Penrose (1959)", "Coriat y Weinstein (2011)"],
              error: "Explicar el estancamiento solo por falta de demanda o de capital, ignorando el cuello de botella de gestión.",
              example: "Una pyme que gana un contrato enorme y no puede supervisar nuevas plantas termina bajando la calidad: creció más rápido de lo que pudo aprender a coordinar."
            },
            {
              term: "Incertidumbre radical",
              short: "Hay eventos futuros que no se pueden reducir a probabilidades; la firma existe para absorberlos.",
              tags: ["Knight", "Decisión"],
              body: "Es la incertidumbre que no puede tratarse como un riesgo probabilizable: no hay una base científica para asignar probabilidades a ciertos eventos futuros. La empresa mantiene reservas de recursos, habilidades y coordinación como amortiguadores; su existencia se explica, en parte, por la necesidad de enfrentar lo que no se puede contratar de antemano.",
              connects: ["Recursos", "Aprendizaje", "Límites de la firma"],
              sources: ["PPT Unidad 4.1", "Coriat y Weinstein (2011)"],
              error: "Confundir incertidumbre con riesgo: el riesgo se puede probabilizar; la incertidumbre radical, no.",
              example: "Una empresa no puede contratar un seguro para todas las consecuencias de una tecnología que todavía no existe; sostiene capacidades y recursos ociosos para adaptarse."
            },
            {
              term: "Perspectiva relacional",
              short: "Parte de las rentas se genera con otras firmas, no solo dentro de una empresa.",
              tags: ["Redes", "Rentas"],
              body: "La perspectiva relacional sostiene que muchas rentas no se explican solo por los recursos internos de una firma, sino por la relación con proveedores, clientes, socios y redes. La ventaja puede estar en la cadena o en el ecosistema, no solo en el balance de la empresa.",
              connects: ["Capacidades", "Redes", "Ventaja competitiva"],
              sources: ["PPT Unidad 4.2", "Teece, Pisano y Shuen (1997)"],
              error: "Mirar solo los recursos internos e ignorar la renta que se genera conjuntamente con otras firmas.",
              example: "La ventaja de un fabricante de autos depende de la calidad y coordinación de su red de proveedores, no solo de su planta."
            }
          ],
          practice: {
            label: "Caso breve · aplicación conceptual",
            title: "Dos panaderías, el mismo horno",
            caseTitle: "La Espiga y El Trigal",
            caseHtml: `<p>En el mismo barrio abren dos panaderías. Ambas compran un horno idéntico, usan la misma marca de harina y cobran precios similares. A los dos años, <strong>La Espiga</strong> tiene fila en la puerta y abrió un segundo local; <strong>El Trigal</strong> sigue trabajando con la misma clientela y ya cambió dos veces de encargado.</p>
<p>La diferencia no está en los insumos. La Espiga desarrolló un método propio de fermentación, capacitó a su equipo durante meses y conserva a la misma jefa de producción desde la apertura. El Trigal cambia de receta según la moda y no registra lo que funciona.</p>`,
            steps: [
              {
                q: "Identificá tres recursos (tangibles e intangibles) de cada panadería. ¿Cuáles son iguales y cuáles no?",
                hint: "Mirá el horno y la harina, pero también el conocimiento del equipo, la reputación y las rutinas.",
                answer: "Tangibles iguales: horno, harina, local. Distintos: el método de fermentación (conocimiento), la continuidad del equipo (capital humano), la reputación y las rutinas de producción. La heterogeneidad no está solo en los recursos físicos."
              },
              {
                q: "Distinguí recurso de servicio. ¿Qué servicio presta el horno en La Espiga que no presta en El Trigal?",
                hint: "El horno es el mismo; pensá en cómo se lo usa, qué recetas y qué rutinas lo rodean.",
                answer: "El horno es idéntico como recurso. En La Espiga presta el servicio de sostener una producción estable de alta calidad porque está integrado a un método de fermentación y a rutinas de control. En El Trigal, el mismo horno presta un servicio distinto —y menor— por falta de esa combinación."
              },
              {
                q: "¿Por qué la ventaja de La Espiga es difícil de imitar? Usá las ideas de conocimiento tácito y capacidades.",
                hint: "Pensá qué se puede comprar y qué se tiene que aprender haciendo.",
                answer: "El competidor puede comprar el mismo horno y la misma harina, pero no puede comprar el método de fermentación, la experiencia del equipo ni la rutina de mejora. Ese conocimiento es tácito y está distribuido en la organización; por eso la ventaja es difícil de imitar."
              }
            ],
            closing: "Cerrá la práctica escribiendo en una frase qué cambia cuando pasás de mirar recursos a mirar servicios."
          },
          quiz: {
            intro: "Cuatro preguntas para comprobar si podés usar las ideas, no solo reconocerlas.",
            questions: [
              {
                level: "Conceptual",
                q: "Según Penrose, ¿qué son los inputs del proceso productivo?",
                options: [
                  "Los servicios que prestan los recursos según cómo se los use y combine",
                  "Los recursos físicos e intangibles tal como se compran en el mercado",
                  "El trabajo y el capital, medidos en horas y unidades",
                  "La tecnología disponible, considerada un factor exógeno",
                ],
                correct: 0,
                explain: "Penrose distingue recurso (stock) de servicio (flujo). Los inputs son los servicios, y esos servicios dependen del uso y de la combinación organizacional."
              },
              {
                level: "Aplicación",
                q: "Dos empresas compran la misma máquina, pero una obtiene mucho más rendimiento. ¿Qué explicación es más consistente con el enfoque de recursos?",
                options: [
                  "La otra empresa tiene una función de producción superior",
                  "La máquina rinde distinto por diferencias en el precio de los insumos",
                  "La diferencia está en las rutinas, el conocimiento tácito y la forma de organizar el trabajo",
                  "El mercado asignó mejor los recursos a una de las empresas",
                ],
                correct: 2,
                explain: "El recurso es el mismo; lo que cambia es el servicio que la organización logra obtener. Ahí entran las rutinas, el conocimiento tácito y la complementariedad con otros recursos."
              },
              {
                level: "Distinción",
                q: "¿Qué distingue a una capacidad dinámica de una capacidad operativa?",
                options: [
                  "La dinámica se refiere a producir más rápido; la operativa, a producir mejor",
                  "La dinámica es propia de empresas grandes; la operativa, de pymes",
                  "No hay diferencia: son dos nombres para lo mismo",
                  "La dinámica actúa sobre las capacidades operativas y las reconfigura; la operativa hace funcionar el negocio actual",
                ],
                correct: 3,
                explain: "Las capacidades operativas sostienen el negocio corriente. Las dinámicas son de segundo orden: cambian, integran y reconfiguran esas capacidades para adaptarse."
              },
              {
                level: "Razonamiento",
                q: "¿Por qué el crecimiento de la firma tiene un límite interno según Penrose?",
                options: [
                  "Porque la capacidad gerencial para coordinar y absorber nuevos recursos es limitada",
                  "Porque la demanda del mercado siempre se agota",
                  "Porque los bancos restringen el crédito a las empresas grandes",
                  "Porque los rendimientos de escala se vuelven decrecientes",
                ],
                correct: 0,
                explain: "El límite es organizacional: incorporar recursos exige coordinación y aprendizaje. Es el llamado efecto Penrose o límite gerencial."
              }
            ],
            open: [
              {
                level: "Integración",
                q: "Penrose dice que la firma es a la vez un lugar de uso y de creación de recursos. ¿Qué significa y por qué importa para explicar el crecimiento?",
                guide: "Uso: los recursos existentes prestan servicios. Creación: al usarlos y combinarlos se genera conocimiento nuevo, que amplía la base de recursos. El crecimiento es un subproducto de ese proceso, no solo de acumular factores."
              },
              {
                level: "Refutación",
                q: "Un gerente afirma: «si tengo los mismos recursos que mi competidor, tendré los mismos resultados». Refutá la afirmación con la teoría de recursos.",
                guide: "Confunde recursos con servicios. Los servicios dependen de la organización, las rutinas y el conocimiento tácito. La ventaja está en la combinación, no en la propiedad de los recursos."
              },
              {
                level: "Aplicación",
                q: "Elegí una empresa que conozcas y describí una capacidad que no se pueda comprar en el mercado. ¿Por qué es difícil de imitar?",
                guide: "Debe ser una capacidad organizacional (no un activo). La dificultad de imitación viene de lo tácito, lo específico y lo distribuido del conocimiento, y de la trayectoria que la produjo."
              }
            ]
          },
          review: {
            stats: [
              { value: "1", label: "página de ideas clave" },
              { value: "10", label: "conceptos para dominar" },
              { value: "7", label: "días de repaso" }
            ],
            summary: [
              { lead: "Recurso ≠ servicio.", text: "El recurso es stock; el servicio es lo que efectivamente aporta cuando se lo usa y combina." },
              { lead: "La firma es heterogénea.", text: "Su historia, organización y conocimiento tácito explican por qué no converge a un agente representativo." },
              { lead: "El enfoque de competencias responde otra pregunta.", text: "No solo por qué existe la firma, sino por qué se organiza así y por qué las firmas son heterogéneas." },
              { lead: "La ventaja no se compra.", text: "El mercado provee recursos; la organización construye capacidades." },
              { lead: "El crecimiento tiene un límite gerencial.", text: "La capacidad de coordinar y absorber nuevos recursos marca el ritmo." },
              { lead: "Las capacidades dinámicas cambian las capacidades.", text: "No es hacer más de lo mismo, sino reconfigurar lo que la empresa sabe hacer." },
              { lead: "El conocimiento es el recurso estratégico.", text: "Lo tácito y lo colectivo explican por qué la imitación es imperfecta." },
              { lead: "La incertidumbre radical explica la firma.", text: "No todo se puede contratar; la organización sostiene aprendizaje y reservas." }
            ],
            errors: [
              { error: "Creer que el recurso valioso es la ventaja", fix: "Preguntá siempre qué servicio presta y qué rutina lo sostiene." },
              { error: "Confundir capacidad con recurso", fix: "Una capacidad es lo que la firma sabe hacer; un recurso es lo que tiene." },
              { error: "Explicar el crecimiento solo por demanda o financiamiento", fix: "Revisá el límite gerencial y el aprendizaje organizacional." },
              { error: "Pensar que el conocimiento se copia con un manual", fix: "Lo tácito se aprende haciendo; por eso la imitación es imperfecta." }
            ],
            cards: [
              { front: "¿Recurso o servicio?", back: "Recurso = stock (máquina, patente). Servicio = flujo que presta según uso y combinación. Penrose: los inputs son servicios." },
              { front: "¿Qué es el conocimiento tácito?", back: "Saber-cómo incorporado en la práctica, difícil de codificar y transferir. Es la base de la imitabilidad imperfecta." },
              { front: "Efecto Penrose", back: "El crecimiento está limitado por la capacidad gerencial de coordinar y absorber nuevos recursos." },
              { front: "Capacidad dinámica", back: "Capacidad de segundo orden: reconfigura las capacidades operativas para adaptarse al cambio." },
              { front: "¿Por qué la ventaja es sostenible?", back: "Porque se apoya en conocimiento tácito, rutinas y complementariedades difíciles de imitar." }
            ],
            plan: [
              { day: "Día 1", task: "Leer la teoría y anotar la diferencia recurso/servicio", min: "30 min" },
              { day: "Día 2", task: "Explicar Penrose en voz alta, sin mirar", min: "15 min" },
              { day: "Día 3", task: "Hacer la práctica de las panaderías", min: "20 min" },
              { day: "Día 4", task: "Repasar los 10 conceptos y marcar los dudosos", min: "20 min" },
              { day: "Día 5", task: "Autoevaluación completa", min: "15 min" },
              { day: "Día 6", task: "Flashcards + tabla de errores", min: "15 min" },
              { day: "Día 7", task: "Simulacro: explicar la unidad a alguien", min: "25 min" }
            ],
            session: [
              { time: "0–15", title: "Encuadre", text: "Leer la idea clave y el mapa de la sección. Escribir qué esperás entender." },
              { time: "15–45", title: "Teoría activa", text: "Leer las 9 secciones por bloques y, después de cada una, cerrar el texto y resumirla en dos frases." },
              { time: "45–60", title: "Conceptos", text: "Abrir las fichas y conectar cada concepto con otro. Marcar los que no puedas explicar." },
              { time: "60–75", title: "Práctica", text: "Resolver el caso de las panaderías sin mirar las respuestas." },
              { time: "75–85", title: "Autoevaluación", text: "Hacer el quiz y anotar el error, no solo la opción correcta." },
              { time: "85–90", title: "Cierre", text: "Escribir tres ideas que puedas enseñar y una duda para el día siguiente." }
            ],
            stuck: [
              { title: "No entendés recurso vs. servicio", source: "Penrose (1959), cap. 2; PPT Unidad 4.2, diapositivas de recursos y servicios." },
              { title: "No te cierra el límite gerencial", source: "Penrose, cap. 4; Coriat y Weinstein (2011), sección de competencias." },
              { title: "Querés profundizar en capacidades dinámicas", source: "Teece, Pisano y Shuen (1997), secciones 2 y 3." }
            ]
          },
          sources: [
            {
              author: "Penrose, E.",
              year: "1959",
              title: "The Theory of the Growth of the Firm",
              cite: "Oxford: Blackwell. Capítulos 2-4.",
              type: "Libro",
              priority: "base",
              what: "La fuente original: recursos, servicios, límite gerencial y crecimiento de la firma.",
              used: ["Teoría", "Conceptos", "Práctica"],
              file: "../Bibliografía Teoría de la Firma/Libro. Penrose (2009) The Theory of the Growth of the Firm.pdf"
            },
            {
              author: "Teece, D.; Pisano, G.; Shuen, A.",
              year: "1997",
              title: "Dynamic capabilities and strategic management",
              cite: "Strategic Management Journal, 18(7), 509-533.",
              type: "Artículo",
              priority: "base",
              what: "Capacidades dinámicas, procesos organizacionales y ventaja competitiva.",
              used: ["Teoría", "Conceptos"],
              file: "../Bibliografía ampliatoria TFyOI/Unidad IV/UnIV. Teece, Pisano y Shuen (1997).pdf"
            },
            {
              author: "Coriat, B.; Weinstein, O.",
              year: "2011",
              title: "Nuevas teorías de la empresa",
              cite: "Buenos Aires: Capital Intelectual. Capítulo sobre competencias.",
              type: "Libro",
              priority: "ampliatoria",
              what: "Ubica el enfoque de competencias dentro del mapa de teorías de la firma.",
              used: ["Teoría", "Repaso"],
              file: "../Bibliografía Teoría de la Firma/Libro. Coriat y Weinstein (2011) Nuevas teorías de la empresa.pdf"
            },
            {
              author: "Hodgson, G.",
              year: "2007",
              title: "Teorías evolucionistas de la empresa basadas en las competencias",
              cite: "Capítulo 5.",
              type: "Capítulo",
              priority: "ampliatoria",
              what: "Puente entre el enfoque de competencias y la teoría evolucionista.",
              used: ["Conceptos", "5.2"],
              file: "../Documentos de clases/5 B/Hodgson 2007.Cap.5.Teorías evolucionistas de la empresa basadas en las competencias.pdf"
            },
            {
              author: "García, S.; Taboada, E.",
              year: "2012",
              title: "Teoría de la empresa: Coase, Alchian y Demsetz, Williamson, Penrose y Nooteboom",
              cite: "Capítulo de libro.",
              type: "Capítulo",
              priority: "complementaria",
              what: "Lectura de apoyo para ubicar a Penrose frente a los enfoques contractuales.",
              used: ["Ampliación"],
              file: "../Documentos de clases/4 C/UnIII. García y Taboada, 2012 Teoría de la empresa_Coase, Alchian y Demsetz, Williamson, Penrose y Nooteboom.pdf"
            },
            {
              author: "Graña, F.",
              year: "2026",
              title: "Unidad 4.2: Teoría de los recursos",
              cite: "Presentación de clase.",
              type: "Clase",
              priority: "guía",
              what: "Recorrido visual de Penrose, recursos, servicios y capacidades dinámicas.",
              used: ["Teoría", "Conceptos"],
              file: "../Documentos de clases/5 A/Unidad 4.2 Teoría de los recursos.pdf"
            },
            {
              author: "Graña, F.",
              year: "2026",
              title: "Unidad 4.1: Introducción al enfoque de las competencias",
              cite: "Presentación de clase.",
              type: "Clase",
              priority: "guía",
              what: "Marco general: preguntas de la teoría de la firma, críticas a la mirada contractual y fundamentos del enfoque de competencias.",
              used: ["Teoría", "Conceptos", "Repaso"],
              file: "../Documentos de clases/5 A/Unidad 4.1 Introduccion enfoque de las competencias-EBR+Teorías evolutivas.pdf"
            }
          ]
        },

        /* =====================================================
           5.2 — TEORÍA EVOLUCIONISTA
           ===================================================== */
        {
          id: "5b",
          code: "5.2",
          letter: "B",
          accent: "indigo",
          title: "Teoría evolucionista",
          desc: "Rutinas, aprendizaje, trayectoria y selección de mercado.",
          tagline: "Las firmas aprenden, acumulan rutinas y transforman el mercado; el mercado, a su vez, las selecciona.",
          minutes: 55,
          sourceCount: 6,
          theory: {
            title: "La empresa que aprende: rutinas, trayectoria y selección",
            lead: "Si la teoría de recursos explica qué tiene una empresa, la evolucionista explica cómo cambia. Su unidad de análisis no es el recurso aislado, sino la rutina: el patrón que la organización repite, memoriza y transforma.",
            keyIdea: "Las firmas son organizaciones que aprenden resolviendo problemas. Lo que aprenden queda cristalizado en rutinas, y esas rutinas —no un cálculo optimizador— explican qué hacen y qué pueden llegar a hacer.",
            keyIdeaSource: "Nelson y Winter (1982); López (1996)",
            sections: [
              {
                id: "s1",
                title: "Una teoría evolucionista de la firma",
                html: `<p>La teoría evolucionista es una corriente heterodoxa, de raíz neoschumpeteriana. Su referencia fundacional es <em>An Evolutionary Theory of Economic Change</em> de Nelson y Winter (1982), que cuestiona el núcleo del análisis económico tradicional: el agente representativo, la racionalidad perfecta y el equilibrio. En su lugar propone una economía poblada por <strong>firmas heterogéneas</strong> que aprenden, innovan y compiten en un proceso dinámico.</p>
<p>El punto de partida es que las firmas no solo son distintas: <strong>esas diferencias importan</strong>. La teoría no busca un equilibrio único al que todas converjan, sino entender cómo se generan, se sostienen y se transforman las diferencias. El mercado no homogeniza: selecciona. Y la selección premia unas rutinas y castiga otras, reforzando la heterogeneidad en lugar de eliminarla.</p>
<p>La teoría se apoya en tres pilares. Primero, los agentes tienen <strong>racionalidad limitada</strong>: no pueden procesar toda la información ni calcular el óptimo. Segundo, las firmas <strong>aprenden</strong> en el tiempo; el conocimiento es acumulativo y depende de la experiencia. Tercero, las <strong>instituciones y el mercado</strong> actúan como mecanismos de selección y moldean el comportamiento. La firma es, en este marco, un repositorio de rutinas y conocimiento. <span class="source-chip">Nelson y Winter, 1982</span> <span class="source-chip">PPT Unidad 4.3</span></p>
<p>La heterogeneidad no es solo entre firmas. También hay diferencias entre países y regiones en productividad e ingresos, y ambos fenómenos coevolucionan en el largo plazo. Las competencias específicas para resolver problemas afectan la capacidad de las firmas y de los territorios para generar y adoptar tecnología, y dependen de la organización empresarial (Dosi y Orsenigo, 1988). <span class="source-chip">PPT Unidad 4.3</span></p>
<blockquote>Las firmas son organizaciones que aprenden y evolucionan a partir de los procesos que encaran para resolver problemas. Su aprendizaje se ve reflejado en rutinas: lo mejor que saben hacer.</blockquote>
<p>Esta teoría no reemplaza a la de recursos: la complementa. Si Penrose explica de dónde vienen los recursos y los servicios, la evolucionista explica cómo se acumulan, se transmiten y se seleccionan a lo largo del tiempo. La bisagra entre ambas es la <strong>rutina</strong>.</p>`
              },
              {
                id: "s2",
                title: "Racionalidad limitada: por qué las reglas vencen al cálculo",
                html: `<p>La racionalidad limitada de Herbert Simon es el primer supuesto. Los agentes no tienen información completa, su capacidad cognitiva es finita y el tiempo para decidir es escaso. No pueden comparar todas las alternativas ni anticipar todas las consecuencias. Para actuar en un mundo complejo, siguen <strong>reglas, hábitos y rutinas</strong> que reducen el esfuerzo de decisión.</p>
<p>Esto no es irracionalidad. Las rutinas son respuestas adaptativas: permiten actuar rápido, coordinar expectativas y preservar conocimiento. El problema es que también pueden volverse obsoletas cuando el entorno cambia. La tensión entre la comodidad de la rutina y la necesidad de adaptarse es central en la teoría evolucionista.</p>
<p>Las teorías contractuales suponen individuos dados, con preferencias estables y un modelo del mundo compartido. La mirada evolucionista, en cambio, enfatiza que el aprendizaje implica <strong>interpretación</strong>: la misma información puede dar lugar a lecturas distintas. Aprender no es solo acumular datos; es revisar modelos mentales, corregir errores y embedir lo aprendido en la memoria organizacional. <span class="source-chip">PPT Unidad 4.3</span> <span class="source-chip">Nelson y Winter, 1982</span></p>
<p>Un ejemplo simple: un gerente no analiza todos los proveedores del mundo cada vez que compra insumos. Usa una regla —los proveedores conocidos, con historial de cumplimiento— y la revisa cuando algo falla. Esa regla es una rutina de decisión. Funciona hasta que el contexto cambia lo suficiente como para volverla costosa.</p>`
              },
              {
                id: "s3",
                title: "Rutinas: la memoria de la organización",
                html: `<p>Una <strong>rutina</strong> es un patrón regular y predecible de comportamiento organizacional: la forma en que la empresa produce, decide, contrata, resuelve un problema o lanza un producto. No es solo un procedimiento escrito; incluye prácticas tácitas, reglas de decisión y formas de coordinar que la organización repite sin volver a deliberar cada vez. <span class="source-chip">Nelson y Winter, 1982</span></p>
<p>López (1996) las define como el conjunto de prácticas organizacionales y técnicas que determinan el modo en que se producen bienes y servicios, y que pueden verse como <em>lo mejor que la firma sabe y puede hacer</em>. Las rutinas son, en este sentido, la <strong>memoria organizacional</strong>: guardan el conocimiento acumulado y lo transmiten a las nuevas generaciones de trabajadores y directivos.</p>
<p>Hay rutinas técnicas —cómo se pone en marcha una línea, cómo se controla la calidad—, rutinas estratégicas —cómo se decide entrar a un mercado— y reglas de decisión específicas de la firma. Todas comparten una característica: son <strong>persistentes y predecibles</strong>. Esa persistencia es una virtud y un riesgo. Permite coordinar y ahorrar esfuerzo, pero también genera inercia: cuanto más exitosa es una rutina, más difícil resulta abandonarla cuando el entorno cambia. <span class="source-chip">López, 1996</span> <span class="source-chip">Hodgson, 2007</span></p>
<p>El caso Beniplast es ilustrativo. La empresa no cambió de rubro: construyó nuevas plantas y productos apoyándose en rutinas de calidad, cumplimiento de plazos y asesoramiento al cliente. Su ventaja no fue una idea aislada, sino la acumulación de formas de hacer que se volvieron memoria y permitieron crecer sin empezar de cero.</p>`
              },
              {
                id: "s3b",
                title: "La creación de conocimiento: tácito, explícito y la espiral organizacional",
                html: `<p>La rutina es la forma en que el conocimiento se conserva; la creación de conocimiento es la forma en que se genera. Para entender ese proceso hay que distinguir dos tipos de conocimiento. El <strong>conocimiento tácito</strong> (Polanyi, 1958/1966) es difícil de expresar, formalizar y comunicar; está enraizado en la acción individual, en las habilidades y en la experiencia. El <strong>conocimiento explícito o codificado</strong> es el que puede expresarse con palabras y números, es fácilmente comunicable y compartido, y suele estar en documentos, bases de datos, fórmulas, procedimientos y manuales.</p>
<p>El conocimiento tácito no se transmite leyendo un manual: se aprende haciendo y usando. La literatura lo resume en <em>learning by doing</em> y <em>learning by using</em> (Penrose, 1959; Arrow, 1962). Por eso el conocimiento es un <strong>flujo</strong>, no solo un stock: se produce, se transforma y se recombina en la práctica. La organización puede estimular ese proceso o bloquearlo, según cómo organice el trabajo, la interacción y la experimentación.</p>
<p>Nonaka y Takeuchi (1995) ordenan la creación de conocimiento en dos dimensiones. La <strong>epistemológica</strong> distingue conocimiento tácito y explícito. La <strong>ontológica</strong> distingue niveles: individuo, grupo, organización e inter-organización. El conocimiento se crea cuando pasa de un nivel a otro y cuando se convierte de tácito en explícito y viceversa; por eso se habla de una <strong>espiral</strong> de creación de conocimiento, no de una transferencia lineal.</p>
<p>La conversión puede adoptar cuatro formas: <strong>socialización</strong> (tácito a tácito, por observación y práctica compartida), <strong>externalización</strong> (tácito a explícito, cuando una práctica se formula y se comunica), <strong>combinación</strong> (explícito a explícito, cuando se integran documentos, datos y procedimientos) e <strong>internalización</strong> (explícito a tácito, cuando lo aprendido se incorpora a la rutina y al saber hacer). La organización es, así, un espacio de creación de conocimiento, no solo de procesamiento de información. <span class="source-chip">PPT Unidad 4.3</span> <span class="source-chip">Hodgson, 2007</span></p>
<blockquote>El conocimiento es un flujo y no un stock: la ventaja de la firma no está solo en lo que sabe, sino en su capacidad de crear, combinar y recombinar conocimiento a lo largo del tiempo.</blockquote>`
              },
              {
                id: "s4",
                title: "Búsqueda e innovación: el cambio endógeno",
                html: `<p>La innovación, en clave evolucionista, es un proceso de <strong>búsqueda</strong>: la empresa explora soluciones nuevas para problemas que no puede resolver con sus rutinas actuales. Es una actividad riesgosa, con resultados inciertos, que se activa cuando aparecen amenazas u oportunidades en el mercado. No es un acto heroico y aislado: es un proceso organizacional, acumulativo y condicionado por lo que la empresa ya sabe.</p>
<p>La búsqueda no es aleatoria ni global. Es <strong>local</strong>: las firmas buscan en las cercanías de lo que ya saben hacer, porque cambiar radicalmente los activos acumulados es costoso. Ahí aparece la <strong>dependencia de la trayectoria</strong>: las decisiones pasadas, los activos específicos y las redes construidas condicionan lo que la empresa puede intentar después. <span class="source-chip">Nelson y Winter, 1982</span> <span class="source-chip">PPT Unidad 4.3</span></p>
<p>La innovación es <strong>endógena</strong> por varias razones. El desequilibrio del mercado —cambios inesperados en productos o factores— crea amenazas y oportunidades. El stock de capital material e inmaterial es irreversible: hay costos de ajuste. Y el proceso de búsqueda es local: se explora cerca de lo conocido para evitar cambiar insumos súper fijos. La innovación no cae del cielo; emerge de una trayectoria y de una estructura.</p>
<p>Schumpeter aporta la dimensión dinámica: la innovación permite crear monopolios temporales, obtener rentas anormales y, luego, ser imitada por rivales. La competencia por innovación es más importante que la competencia por precios. La <strong>destrucción creadora</strong> no es un accidente: es el proceso mediante el cual el capitalismo se transforma. La teoría evolucionista retoma esa idea y la lleva al interior de la firma: la innovación es la principal estrategia de diferenciación. <span class="source-chip">PPT Unidad 4.3</span></p>`
              },
              {
                id: "s5",
                title: "Trayectoria: lo que la historia habilita y lo que bloquea",
                html: `<p>La <strong>dependencia de la trayectoria</strong> (<em>path dependence</em>) es una de las ideas más potentes y más malentendidas de la teoría. Significa que las decisiones pasadas, los activos específicos y las redes construidas condicionan el presente. No significa que el futuro esté determinado: significa que algunas opciones son más costosas y otras más probables.</p>
<p>La trayectoria tiene dos fuentes. La <strong>interna</strong> son las irreversibilidades de las decisiones de la firma: inversiones específicas, rutinas arraigadas, conocimiento que no se transfiere fácilmente. La <strong>externa</strong> son las condiciones del mercado donde existen interdependencias y complementariedades: proveedores, estándares, redes. Cambiar de rumbo puede exigir cambiar no solo la empresa, sino también su ecosistema.</p>
<p>Las trayectorias pueden ser <strong>virtuosas</strong> —la firma se adapta y modifica el entorno en su beneficio— o <strong>viciosas</strong> —desarrolla capacidades muy específicas para condiciones que pueden desaparecer. Una competencia central puede convertirse en una <em>rigidez central</em>. Cuanto más especializada es la empresa en una trayectoria, más vulnerable es a un cambio radical del entorno. <span class="source-chip">Nelson y Winter, 1982</span> <span class="source-chip">Milesi, 1999</span></p>
<p>La dependencia de la trayectoria no implica imposibilidad de cambio. Implica que el cambio es costoso y requiere nuevas estrategias, estructuras y capacidades. Milesi (1999) estiliza el circuito: la estrategia y la estructura se traducen en core capabilities y rutinas; el mercado selecciona; si la selección es favorable, la firma mejora incrementalmente; si no, debe buscar una nueva estrategia, una nueva estructura y nuevas capacidades. La trayectoria previa condiciona todo el circuito.</p>`
              },
              {
                id: "s6",
                title: "Selección: el mercado como ambiente",
                html: `<p>El mercado, en la teoría evolucionista, no es un mecanismo que asigna recursos y equilibra precios. Es un <strong>ambiente de selección</strong> que premia algunas rutinas, productos y conductas y castiga otras. Las firmas que mejor se ajustan a un ambiente dado tienden a sobrevivir y crecer; las que no, pierden participación o desaparecen. Pero el criterio de "mejor" es contextual: lo que funciona en un ambiente puede fallar en otro.</p>
<p>La selección no homogeniza. Al contrario, <strong>acentúa las diferencias</strong>: las firmas que sobreviven no son copias de un agente representativo, sino trayectorias particulares que encontraron un nicho. Dos bodegas con la misma uva y el mismo clima pueden sobrevivir con estilos, canales y modelos de negocio distintos. El mercado selecciona ambas, no una sola forma "óptima".</p>
<p>La competencia es, en este sentido, el motor de la desigualdad y el desequilibrio: premia algunas decisiones y castiga otras, y con eso diferencia a las firmas. No hay un estado de equilibrio al que todas converjan; hay un proceso abierto, con ganadores y perdedores, en el que la selección es ex post. <span class="source-chip">PPT Unidad 4.3</span></p>
<p>La selección es <strong>ex post</strong>: no hay una garantía de que la mejor innovación gane. La innovación es una apuesta incierta; el éxito depende de la interacción con el ambiente, de la imitación, de los estándares y de la suerte. Esto diferencia a la teoría evolucionista de las teorías del equilibrio, donde el resultado está determinado por las condiciones iniciales y la racionalidad de los agentes. <span class="source-chip">Nelson y Winter, 1982</span> <span class="source-chip">López, 1996</span></p>
<p>El mercado también es una institución: se construye y requiere normas de funcionamiento. No es un estado natural. Esta idea conecta con la teoría de la regulación de la subunidad 5.3: la selección no ocurre en el vacío, sino dentro de un marco institucional que define qué se considera legítimo, qué se puede contratar y cómo se distribuye el excedente.</p>`
              },
              {
                id: "s7",
                title: "La analogía biológica, bien entendida",
                html: `<p>La teoría evolucionista toma de la biología tres elementos. <strong>Herencia:</strong> las rutinas son el análogo de los genes; se transmiten y persisten. <strong>Variación:</strong> la búsqueda y la innovación introducen novedades. <strong>Selección:</strong> el mercado —y las instituciones— seleccionan qué rutinas y qué productos sobreviven. <span class="source-chip">PPT Unidad 4.3</span></p>
<p>Pero la analogía tiene un límite importante: es <strong>lamarckiana, no darwiniana</strong>. Las empresas transmiten características adquiridas por aprendizaje y pueden modificar el ambiente en el que compiten. No son organismos pasivos que esperan la selección: son agentes que buscan, aprenden y transforman su entorno. Una empresa que desarrolla una nueva práctica de gestión, la documenta y la enseña a sus filiales está transmitiendo una característica adquirida.</p>
<p>Por eso la teoría no es «darwinismo social» ni una justificación de la supervivencia del más fuerte. Es una teoría sobre procesos de aprendizaje, innovación y selección en condiciones de incertidumbre. Admite saltos, discontinuidades y revoluciones, no solo cambios graduales. La biología es una fuente de metáforas, no una ley que dictamine el destino de las firmas. <span class="source-chip">Hodgson, 2007</span> <span class="source-chip">PPT Unidad 4.3</span></p>`
              },
              {
                id: "s8",
                title: "Estrategia, estructura y core capabilities",
                html: `<p>La teoría evolucionista ofrece una gramática para leer una empresa. Tres conceptos se articulan: <strong>estrategia</strong>, <strong>estructura</strong> y <strong>core capabilities</strong>. La estrategia es el conjunto de compromisos amplios que establecen los objetivos y la forma de alcanzarlos; puede ser formal o informal. Las firmas buscan conductas satisfactorias más que maximizadoras. La estructura es la forma en que la firma está organizada y gobernada: cómo se toman realmente las decisiones y cómo se coordinan. Las core capabilities son lo que la firma sabe hacer bien, el resultado de combinar estrategia y estructura.</p>
<p>Estos tres elementos se condicionan mutuamente. Una estrategia nueva con una estructura vieja suele fracasar. Una estructura nueva sin capacidades que la sostengan es un organigrama vacío. Las capacidades se acumulan a través de rutinas; las rutinas se seleccionan en el mercado; la selección retroalimenta la estrategia. El circuito de Milesi (1999) captura esa dinámica: estrategia → estructura → core capabilities → rutinas → selección → trayectoria. <span class="source-chip">PPT Unidad 4.3</span> <span class="source-chip">Milesi, 1999</span></p>
<p>En un contexto cambiante, las trayectorias virtuosas permiten a la firma adaptarse o modificar el entorno; las viciosas la vuelven dependiente de condiciones que pueden desaparecer. La pregunta de gestión no es solo «¿qué hacemos bien?», sino «¿qué hacemos bien que el futuro va a seguir valorando?».</p>`
              },
              {
                id: "s9",
                title: "Implicancias de política, gestión y límites",
                html: `<p>Si la innovación es endógena y el mercado selecciona, la competencia no es un estado de equilibrio sino un <strong>proceso dinámico</strong>. Las empresas compiten por diferenciarse, no solo por precios. El poder de mercado puede ser temporal y estar asociado a una innovación exitosa. La política pública no puede limitarse a «dejar funcionar al mercado»: importan las capacidades de las firmas, los procesos de aprendizaje, los vínculos entre empresas e instituciones y el marco institucional que sostiene la búsqueda. <span class="source-chip">Lazonick, 2005</span></p>
<p>La clase agrega una distinción de política útil. Si los saberes y conocimientos acumulados son importantes y deben conservarse, la intervención se justifica en los niveles <strong>meso y micro</strong>; si se han vuelto un obstáculo para prácticas más eficientes, la intervención debe operar en los niveles <strong>macro y meso</strong>. Dada la racionalidad limitada y el peso de la trayectoria, las firmas no están en condiciones de responder automáticamente, y sin asistencia, a cambios profundos del entorno. Un ejemplo que menciona la clase es el programa <strong>Antena Tecnológica</strong> del MINCyT, orientado a la vigilancia tecnológica e inteligencia para transformar datos en información útil para la toma de decisiones estratégicas. <span class="source-chip">PPT Unidad 4.3</span></p>
<p>La cátedra también aplica este marco a aglomeraciones productivas del sector textil-confecciones de Pergamino y Mar del Plata, y al caso de un taller de confección (EMD-Taller). El análisis muestra cómo las capacidades acumuladas, la capacidad de absorción y búsqueda, y las rutinas de calidad explican diferencias de desempeño entre firmas y territorios. Es un buen ejemplo de cómo la teoría evolucionista se usa para estudiar casos concretos, no solo para definir conceptos. <span class="source-chip">PPT Unidad 4.3</span> <span class="source-chip">Milesi, 1999</span></p>
<p>Para la gestión, la teoría sugiere construir rutinas, proteger el aprendizaje, evitar las rigideces centrales, gestionar la trayectoria y usar redes. También sugiere humildad: la innovación es incierta y el éxito no está garantizado. La selección es ex post; lo que hoy parece una buena apuesta puede no sobrevivir.</p>
<p>Los límites de la teoría son reales: la metáfora biológica puede forzarse, los conceptos son difíciles de operacionalizar y existe el riesgo de explicar todo con "rutinas" o "trayectoria" sin especificar mecanismos. Pero su aporte es valioso: obliga a mirar la heterogeneidad, el aprendizaje y el cambio, que son justamente lo que la teoría neoclásica deja afuera. <span class="source-chip">PPT Unidad 4.3</span></p>
<p>Para estudiar un caso con esta lente, preguntate: ¿cuál es la estrategia? ¿Cómo es la estructura? ¿Qué core capabilities tiene? ¿Qué rutinas las sostienen? ¿Qué selecciona el mercado? ¿Cuál es la trayectoria previa y qué limita el cambio? Si podés responder eso, podés explicar la firma sin reducirla a una función de producción.</p>`
              }
            ],
            flow: {
              label: "El circuito evolucionista de la firma",
              nodes: [
                { title: "Estrategia", sub: "compromisos y objetivos" },
                { title: "Estructura", sub: "cómo se decide y coordina" },
                { title: "Core capabilities", sub: "lo que sabe hacer" },
                { title: "Rutinas", sub: "lo que repite y memoriza" },
                { title: "Selección", sub: "el mercado premia o castiga" }
              ],
              note: "La trayectoria retroalimenta todo el circuito: lo que la firma hizo antes condiciona lo que puede buscar después."
            },
            table: {
              title: "Tres miradas sobre la firma y el mercado",
              headers: ["Dimensión", "Neoclásico", "Costos de transacción", "Evolucionista"],
              rows: [
                ["Racionalidad", "Ilimitada.", "Limitada.", "Limitada."],
                ["Rol del tiempo", "Automático.", "Automático.", "Gradual: sendero evolutivo."],
                ["Rol de la localización", "Nulo.", "Importante.", "Fundamental."],
                ["Factor clave", "Estructura de mercado.", "Incertidumbre y especificidad de activos.", "Trayectoria y condiciones de entorno."],
                ["Plano de análisis", "Exógeno.", "Predomina lo exógeno.", "Predomina lo endógeno."],
                ["Tipo de decisión", "Precios, cantidades y combinación de factores.", "Integrar o desintegrar la producción.", "Decisiones estratégicas y operativas."]
              ]
            },
            trap: {
              title: "Error típico",
              text: "Creer que la teoría evolucionista es «selección natural» y que las empresas solo se adaptan pasivamente. Acá las firmas aprenden, buscan, innovan y modifican el ambiente. La selección existe, pero no es ciega: está mediada por rutinas e instituciones. Tampoco es darwinismo social: no justifica la desigualdad, la explica como resultado de procesos históricos."
            },
            teach: {
              title: "Para explicarlo desde cero",
              text: "Pensá en un equipo de fútbol. No juega cada partido calculando la jugada óptima desde cero: tiene jugadas ensayadas (rutinas), las mejora con la práctica (aprendizaje) y, cuando el rival cambia, busca variantes cerca de lo que ya sabe (búsqueda local). La trayectoria del club explica su estilo. Si el rival cambia de sistema y el equipo no puede adaptarse, la misma rutina que lo hizo ganar lo puede hacer perder. Eso es una firma evolucionista."
            },
            sources: ["Nelson y Winter (1982)", "López (1996)", "Hodgson (2007)", "Lazonick (2005)", "Milesi (1999)", "PPT Unidad 4.3"]
          },
          concepts: [
            {
              term: "Racionalidad limitada",
              short: "La información, la mente y el tiempo son finitos: por eso los agentes siguen rutinas.",
              tags: ["Supuesto", "Simon"],
              body: "Es la idea de que los agentes no pueden conocer todas las alternativas ni procesar toda la información disponible. La racionalidad está limitada por la información, la capacidad cognitiva y el tiempo. Para actuar, los agentes construyen reglas y rutinas.",
              connects: ["Rutinas", "Incertidumbre", "Teoría conductista"],
              sources: ["PPT Unidad 4.3", "Nelson y Winter (1982)"],
              error: "Pensar que la racionalidad limitada es «irracionalidad»: no es ausencia de razón, es razón con restricciones.",
              example: "Un gerente no compara todas las máquinas del mundo antes de comprar; usa un proveedor conocido, una regla de compra y su experiencia previa."
            },
            {
              term: "Rutina",
              short: "Patrón regular y predecible de comportamiento organizacional; la unidad básica de la evolución.",
              tags: ["Concepto central", "Memoria"],
              body: "Es un patrón regular y predecible de comportamiento: la forma en que la empresa produce, decide o resuelve problemas. Incluye técnicas, reglas de decisión y prácticas tácitas. Es la unidad básica de la teoría evolucionista.",
              connects: ["Conocimiento tácito", "Memoria organizacional", "Selección"],
              sources: ["Nelson y Winter (1982)", "López (1996)"],
              error: "Reducir la rutina a un procedimiento formal escrito y auditado.",
              example: "La secuencia con la que un equipo de planta pone en marcha una línea después de un paro es una rutina, aunque no esté en ningún manual."
            },
            {
              term: "Memoria organizacional",
              short: "El conocimiento acumulado se guarda en rutinas, no solo en las personas.",
              tags: ["Conocimiento", "Organización"],
              body: "Las rutinas almacenan el conocimiento de la organización y lo transmiten. La memoria no está solo en los individuos: está en los procesos, las reglas, los equipos y la cultura. Por eso una empresa puede perder gente y conservar capacidades.",
              connects: ["Rutinas", "Conocimiento tácito", "Capacidades"],
              sources: ["Nelson y Winter (1982)", "Hodgson (2007)"],
              error: "Suponer que si se va una persona clave, se va toda la capacidad de la empresa.",
              example: "Una empresa cambia a su jefe de producción y la línea sigue funcionando: la memoria está en las rutinas del equipo, no solo en la persona."
            },
            {
              term: "Búsqueda (search)",
              short: "La innovación como exploración local de soluciones, no como cálculo óptimo.",
              tags: ["Innovación", "Cambio"],
              body: "Es el proceso por el cual la firma explora nuevas soluciones cuando las rutinas existentes no alcanzan. Es riesgoso, incierto y local: se busca cerca de lo que ya se conoce, porque cambiar los activos acumulados es costoso.",
              connects: ["Innovación", "Trayectoria", "Rutinas"],
              sources: ["Nelson y Winter (1982)", "PPT Unidad 4.3"],
              error: "Creer que la innovación es un acto puntual y heroico, desconectado de lo que la empresa ya sabe.",
              example: "Una fábrica de bolsas de polietileno que desarrolla una nueva válvula para sus bolsas innova, pero lo hace sobre su conocimiento previo de film y sellado."
            },
            {
              term: "Dependencia de la trayectoria",
              short: "Lo que la firma hizo antes condiciona lo que puede buscar y hacer después.",
              tags: ["Path dependence", "Historia"],
              body: "Las decisiones pasadas, los activos específicos y las redes construidas condicionan el presente. La trayectoria no determina el futuro, pero vuelve algunas opciones más costosas y otras más probables. Puede ser virtuosa o viciosa.",
              connects: ["Búsqueda", "Rutinas", "Activos específicos"],
              sources: ["Nelson y Winter (1982)", "Milesi (1999)"],
              error: "Interpretar la trayectoria como destino inevitable: la dependencia no elimina la posibilidad de cambio.",
              example: "Una empresa que invirtió en una tecnología propietaria durante veinte años tiene más difícil pasarse a una tecnología radicalmente distinta que un competidor nuevo."
            },
            {
              term: "Selección del mercado",
              short: "El mercado premia unas rutinas y castiga otras; no homogeniza a las firmas.",
              tags: ["Mercado", "Competencia"],
              body: "El mercado actúa como mecanismo de selección entre productos, tecnologías y conductas heterogéneas. Premia las rutinas que funcionan en un ambiente dado y castiga las que no. No lleva a la convergencia: acentúa las diferencias.",
              connects: ["Rutinas", "Heterogeneidad", "Competencia"],
              sources: ["Nelson y Winter (1982)", "López (1996)"],
              error: "Pensar que la competencia elimina las diferencias y conduce a un equilibrio único.",
              example: "Dos bodegas con la misma uva y el mismo clima sobreviven de forma distinta porque el mercado selecciona estilos, canales y modelos de negocio diferentes."
            },
            {
              term: "Analogía lamarckiana",
              short: "Las firmas transmiten lo aprendido y pueden modificar el ambiente: no son pasivas.",
              tags: ["Método", "Analogía"],
              body: "La teoría toma de la biología la herencia (rutinas), la variación (innovación) y la selección (mercado). Pero es lamarckiana: las características adquiridas por aprendizaje se transmiten y las firmas pueden modificar su entorno. No es darwinismo social.",
              connects: ["Rutinas", "Búsqueda", "Selección"],
              sources: ["PPT Unidad 4.3", "Hodgson (2007)"],
              error: "Confundir la analogía con una teoría biológica literal o con una justificación de la desigualdad.",
              example: "Una empresa que desarrolla una nueva práctica de gestión, la documenta y la enseña a sus filiales está transmitiendo una característica adquirida."
            },
            {
              term: "Inercia de las rutinas",
              short: "Cuanto más exitosa es una rutina, más difícil es abandonarla cuando el entorno cambia.",
              tags: ["Rutinas", "Rigidez"],
              body: "Las rutinas son persistentes porque reducen incertidumbre y ahorran esfuerzo, pero esa misma persistencia puede volverse una rigidez. Una capacidad que fue clave para el éxito puede transformarse en un obstáculo cuando el mercado, la tecnología o las instituciones cambian.",
              connects: ["Rutinas", "Trayectoria", "Selección"],
              sources: ["Nelson y Winter (1982)", "López (1996)"],
              error: "Pensar que una rutina exitosa siempre será una ventaja; el valor de una rutina depende del ambiente.",
              example: "Una empresa que dominó una tecnología madura puede resistirse a adoptar una nueva porque implica abandonar rutinas y activos que le dieron resultados."
            },
            {
              term: "Espiral de conocimiento",
              short: "El conocimiento se crea en la interacción entre tácito y explícito y entre individuo, grupo, organización y entorno.",
              tags: ["Nonaka", "Aprendizaje"],
              body: "El conocimiento no se transfiere de forma lineal. Se crea cuando el saber tácito se convierte en explícito y viceversa, y cuando pasa del individuo al grupo, a la organización y al entorno inter-organizacional. Ese recorrido en espiral es el que permite que una práctica individual se convierta en una capacidad organizacional.",
              connects: ["Conocimiento tácito", "Rutinas", "Aprendizaje"],
              sources: ["PPT Unidad 4.3", "Hodgson (2007)"],
              error: "Creer que el conocimiento es un stock que se transfiere con documentos; la conversión y la práctica son parte del proceso.",
              example: "Un operario descubre una forma mejor de calibrar una máquina (tácito), la explica al equipo (externalización), se documenta y combina con otros procedimientos (combinación) y termina incorporada a la rutina de planta (internalización)."
            }
          ],
          practice: {
            label: "Caso de clase · rutinas y trayectoria",
            title: "Beniplast: crecer sin perder lo que se sabe",
            caseTitle: "De film de polietileno a bolsas valvuladas",
            caseHtml: `<p>Beniplast comenzó en 1976 fabricando film de polietileno en tubos y láminas para bolsas destinadas al comercio y la industria. Con los años fue ampliando su infraestructura y su tecnología, y desarrolló una metodología de trabajo basada en calidad, asesoramiento al cliente y cumplimiento de plazos. En 1998 construyó una nueva planta y en 2004 otra para bolsas valvuladas (<em>bag in box</em>). También creó un departamento de I+D para investigar nuevos insumos.</p>
<p>La empresa no cambió de rubro: profundizó una trayectoria. Sus nuevas plantas y productos se apoyaron en el conocimiento acumulado en film, sellado y control de calidad.</p>`,
            steps: [
              {
                q: "Identificá al menos tres rutinas que aparecen en el caso. ¿Son técnicas, organizacionales o de decisión?",
                hint: "Buscá lo que la empresa repite: control de calidad, plazos, asesoramiento, desarrollo de insumos.",
                answer: "Rutinas técnicas: control de calidad del film, puesta en marcha de líneas, sellado. Organizacionales: asesoramiento al cliente, cumplimiento de plazos, coordinación entre ventas y producción. De decisión: reinvertir en nuevas plantas y en I+D. Todas sostienen la memoria de la empresa."
              },
              {
                q: "¿Por qué el crecimiento de Beniplast es un ejemplo de dependencia de la trayectoria?",
                hint: "Mirá cómo se relacionan la primera planta, la segunda y la tercera. ¿Qué conocimiento se reutiliza?",
                answer: "Porque cada nueva planta y producto se apoyó en capacidades previas: conocimiento de film, sellado, calidad y gestión de clientes. La empresa buscó cerca de lo que ya sabía hacer. Eso es búsqueda local y trayectoria: no empezó de cero en un rubro desconocido."
              },
              {
                q: "Imaginá que aparece una tecnología que vuelve obsoleto el film de polietileno. ¿Qué podría hacer Beniplast? ¿Qué límites tendría?",
                hint: "Pensá en la diferencia entre cambio incremental y cambio de trayectoria. ¿Qué activos y rutinas habría que abandonar?",
                answer: "Podría intentar reconvertir sus capacidades (polímeros, sellado, calidad) hacia nuevos materiales o productos. Los límites son los activos específicos, las rutinas arraigadas y el costo de abandonar lo que funciona. La trayectoria no impide el cambio, pero lo vuelve costoso y requiere nueva estrategia, estructura y capacidades."
              }
            ],
            closing: "Cerrá la práctica anotando qué rutina de Beniplast te parece más difícil de imitar y por qué."
          },
          quiz: {
            intro: "Cuatro preguntas para distinguir la teoría evolucionista de una versión simplificada de «selección natural».",
            questions: [
              {
                level: "Conceptual",
                q: "¿Qué son las rutinas para Nelson y Winter?",
                options: [
                  "Los procedimientos formales que la empresa tiene escritos en un manual",
                  "Las decisiones óptimas que toma la empresa en cada período",
                  "Patrones regulares y predecibles de comportamiento que funcionan como memoria organizacional",
                  "Los recursos físicos que la empresa acumula a lo largo del tiempo",
                ],
                correct: 2,
                explain: "Las rutinas incluyen prácticas tácitas, reglas de decisión y formas de coordinar. Son la unidad básica de la evolución y la memoria de la organización."
              },
              {
                level: "Aplicación",
                q: "¿Qué implica que la innovación sea dependiente de la trayectoria?",
                options: [
                  "Que la búsqueda es local y está condicionada por los activos y el conocimiento acumulados",
                  "Que la empresa siempre innova en la misma dirección y no puede cambiar",
                  "Que la innovación depende solo del gasto en I+D",
                  "Que el mercado selecciona la innovación más barata",
                ],
                correct: 0,
                explain: "La búsqueda es local: se explora cerca de lo que ya se conoce. La trayectoria condiciona, pero no determina; el cambio es posible, aunque costoso."
              },
              {
                level: "Analogía",
                q: "En la analogía evolucionista, ¿cuál es el equivalente a los genes?",
                options: [
                  "Los productos que vende la empresa",
                  "Los precios de mercado",
                  "Las patentes y marcas",
                  "Las rutinas organizacionales",
                ],
                correct: 3,
                explain: "Las rutinas son lo que se hereda y se transmite de una generación a otra dentro de la organización. La innovación introduce variación y el mercado selecciona."
              },
              {
                level: "Razonamiento",
                q: "¿Por qué la analogía con la biología es lamarckiana y no darwiniana?",
                options: [
                  "Porque las empresas no compiten entre sí",
                  "Porque las firmas transmiten características adquiridas por aprendizaje y pueden modificar el ambiente",
                  "Porque la selección natural no existe en la economía",
                  "Porque las rutinas son genéticas y no se pueden cambiar"
                ],
                correct: 1,
                explain: "A diferencia de la selección darwiniana, la evolucionista económica admite herencia de lo aprendido y capacidad de las firmas de modificar su entorno. No es selección ciega."
              }
            ],
            open: [
              {
                level: "Debate",
                q: "¿La dependencia de la trayectoria impide el cambio? Justificá con la teoría y con un ejemplo.",
                guide: "No lo impide, lo condiciona. Cambiar requiere abandonar activos específicos, construir nuevas rutinas y sostener el aprendizaje. El ejemplo debe mostrar costo y esfuerzo, no imposibilidad."
              },
              {
                level: "Comparación",
                q: "¿Qué diferencia hay entre la selección del mercado y la selección natural?",
                guide: "La selección de mercado opera sobre rutinas, productos y conductas; está mediada por instituciones y por la capacidad de las firmas de buscar y modificar el ambiente. No es un mecanismo ciego ni conduce a un óptimo."
              },
              {
                level: "Problematización",
                q: "Una empresa innovadora fracasa en el mercado. ¿Contradice la teoría evolucionista?",
                guide: "No. La innovación es una apuesta incierta; el éxito no está garantizado. La selección es ex post. La teoría explica el proceso, no promete resultados."
              }
            ]
          },
          review: {
            stats: [
              { value: "1", label: "página de ideas clave" },
              { value: "9", label: "conceptos para dominar" },
              { value: "7", label: "días de repaso" }
            ],
            summary: [
              { lead: "La firma es heterogénea.", text: "No hay un agente representativo: importan las rutinas, la historia y el conocimiento acumulado." },
              { lead: "Las rutinas son memoria.", text: "Guardan lo que la organización sabe hacer y explican su persistencia y su inercia." },
              { lead: "El conocimiento es un flujo.", text: "Se crea en la interacción tácito/explícito y en distintos niveles; la organización lo convierte en rutinas." },
              { lead: "La innovación es búsqueda local.", text: "Se explora cerca de lo conocido; la trayectoria condiciona el cambio sin determinarlo." },
              { lead: "El mercado selecciona, no homogeniza.", text: "Premia unas rutinas y castiga otras; la competencia acentúa las diferencias." },
              { lead: "La analogía es lamarckiana.", text: "Las firmas transmiten lo aprendido y pueden modificar el ambiente. No es darwinismo social." },
              { lead: "Las rutinas pueden volverse rígidas.", text: "La misma persistencia que da estabilidad puede bloquear el cambio." },
              { lead: "Estrategia, estructura y capacidades se condicionan.", text: "Una estrategia nueva con una estructura vieja no funciona." }
            ],
            errors: [
              { error: "Decir que la teoría evolucionista es «la supervivencia del más fuerte»", fix: "Es una teoría de aprendizaje, rutinas y selección mediada por instituciones." },
              { error: "Creer que las rutinas son solo procedimientos escritos", fix: "Incluyen prácticas tácitas, reglas de decisión y formas de coordinar." },
              { error: "Pensar que path dependence significa que nada cambia", fix: "Condiciona el cambio, lo vuelve costoso; no lo impide." },
              { error: "Explicar la innovación como un acto heroico y aislado", fix: "Es búsqueda local, acumulativa y condicionada por la trayectoria." }
            ],
            cards: [
              { front: "Rutina", back: "Patrón regular y predecible de comportamiento. Memoria organizacional y unidad básica de la evolución." },
              { front: "Búsqueda local", back: "La innovación explora cerca de lo que la firma ya sabe. Cambiar de rumbo es costoso." },
              { front: "Path dependence", back: "Las decisiones pasadas y los activos acumulados condicionan lo que la firma puede intentar después." },
              { front: "Selección", back: "El mercado premia o castiga rutinas y productos. No homogeniza: acentúa diferencias." },
              { front: "¿Lamarckiana o darwiniana?", back: "Lamarckiana: las firmas transmiten lo aprendido y pueden modificar el ambiente." }
            ],
            plan: [
              { day: "Día 1", task: "Leer la teoría y definir rutina con tus palabras", min: "35 min" },
              { day: "Día 2", task: "Dibujar el circuito estrategia-estructura-rutinas-selección", min: "15 min" },
              { day: "Día 3", task: "Resolver el caso Beniplast", min: "25 min" },
              { day: "Día 4", task: "Explicar path dependence con un ejemplo propio", min: "15 min" },
              { day: "Día 5", task: "Autoevaluación y corrección razonada", min: "15 min" },
              { day: "Día 6", task: "Flashcards + errores típicos", min: "15 min" },
              { day: "Día 7", task: "Comparar 5.1 y 5.2 en un cuadro", min: "25 min" }
            ],
            session: [
              { time: "0–15", title: "Encuadre", text: "Leer la idea clave y escribir qué diferencia esperás encontrar con la teoría de recursos." },
              { time: "15–50", title: "Teoría activa", text: "Leer las 10 secciones y anotar al margen cada vez que aparezca una rutina o una decisión pasada." },
              { time: "50–65", title: "Conceptos", text: "Conectar rutina, memoria, búsqueda, trayectoria y selección en un mapa." },
              { time: "65–80", title: "Práctica", text: "Resolver Beniplast y justificar cada respuesta con un concepto." },
              { time: "80–88", title: "Autoevaluación", text: "Hacer el quiz y explicar por qué las opciones incorrectas fallan." },
              { time: "88–90", title: "Cierre", text: "Escribir la diferencia central entre 5.1 y 5.2 en una frase." }
            ],
            stuck: [
              { title: "No te queda claro qué es una rutina", source: "López (1996), apartado sobre rutinas; PPT Unidad 4.3, diapositivas 15-17." },
              { title: "Path dependence te suena a destino", source: "Nelson y Winter (1982), cap. 5; Milesi (1999), estilización de la dinámica." },
              { title: "Querés entender la analogía biológica", source: "Hodgson (2007), cap. 5; PPT Unidad 4.3, diapositivas 51-54." }
            ]
          },
          sources: [
            {
              author: "Nelson, R.; Winter, S.",
              year: "1982",
              title: "An Evolutionary Theory of Economic Change",
              cite: "Cambridge, MA: Harvard University Press.",
              type: "Libro",
              priority: "base",
              what: "La obra fundacional: rutinas, búsqueda, selección y crítica al agente representativo.",
              used: ["Teoría", "Conceptos", "Práctica"],
              file: "../Bibliografía Teoría de la Firma/Libro. Nelson y Winter (1982) An evolutionary theory of economic....pdf"
            },
            {
              author: "López, A.",
              year: "1996",
              title: "Las ideas evolucionistas en economía: una visión de conjunto",
              cite: "Artículo.",
              type: "Artículo",
              priority: "base",
              what: "Síntesis accesible de rutinas, conocimiento, trayectoria y selección.",
              used: ["Teoría", "Conceptos"],
              file: "../Documentos de clases/5 B/Lopez (1996) Las ideas evolucionistas.pdf"
            },
            {
              author: "Hodgson, G.",
              year: "2007",
              title: "Teorías evolucionistas de la empresa basadas en las competencias",
              cite: "Capítulo 5.",
              type: "Capítulo",
              priority: "ampliatoria",
              what: "Conecta competencias, rutinas y evolución organizacional.",
              used: ["Teoría", "Ampliación"],
              file: "../Documentos de clases/5 B/Hodgson 2007.Cap.5.Teorías evolucionistas de la empresa basadas en las competencias.pdf"
            },
            {
              author: "Lazonick, W.",
              year: "2005",
              title: "The Innovative Firm",
              cite: "En The Oxford Handbook of Innovation.",
              type: "Capítulo",
              priority: "ampliatoria",
              what: "La firma innovadora, el aprendizaje y las implicancias de política.",
              used: ["Teoría", "Repaso"],
              file: "../Documentos de clases/5 B/Lazonick (2005).pdf"
            },
            {
              author: "Milesi, D.",
              year: "1999",
              title: "Conductas de las Pymes industriales argentinas en los noventa",
              cite: "Tesis. Estilización de la dinámica evolucionista.",
              type: "Tesis",
              priority: "complementaria",
              what: "Aplica el esquema evolucionista al estudio de pymes argentinas.",
              used: ["Teoría", "Conceptos"],
              file: "../Documentos de clases/5 B/Milesi 1999.pdf"
            },
            {
              author: "Graña, F.",
              year: "2026",
              title: "Unidad 4.3: Teoría evolucionista",
              cite: "Presentación de clase.",
              type: "Clase",
              priority: "guía",
              what: "Recorrido completo: postulados, rutinas, trayectoria, analogía y política.",
              used: ["Teoría", "Conceptos"],
              file: "../Documentos de clases/5 B/Unidad 4.3 Teoría evolucionista.pdf"
            }
          ]
        },

        /* =====================================================
           5.3 — TEORÍA DE LA REGULACIÓN
           ===================================================== */
        {
          id: "5c",
          code: "5.3",
          letter: "C",
          accent: "wine",
          title: "Teoría de la regulación",
          desc: "Empresa fordista y posfordista, instituciones y régimen de acumulación.",
          tagline: "La empresa no flota en el mercado: es una institución que produce y reproduce el régimen de acumulación.",
          minutes: 45,
          sourceCount: 4,
          theory: {
            title: "La empresa como institución: fordismo, posfordismo y regulación",
            lead: "La teoría de la regulación no pregunta solo cómo compite una empresa, sino cómo se articula con un régimen de acumulación. Su hipótesis es fuerte: el mercado no se autorregula y la estabilidad depende de arreglos institucionales.",
            keyIdea: "La empresa es una institución que produce y reproduce el marco institucional. No flota por encima de la economía: es uno de sus microfundamentos.",
            keyIdeaSource: "Coriat y Weinstein (2011); PPT 5.c",
            sections: [
              {
                id: "s1",
                title: "Una teoría macro con microfundamentos",
                html: `<p>La teoría de la regulación nace para explicar fenómenos macroeconómicos: la estanflación de los años setenta, las crisis, los cambios de régimen de crecimiento. Su objeto principal no es la empresa, sino el <strong>régimen de acumulación</strong>: el patrón histórico que hace posible producir, distribuir y consumir de forma relativamente estable durante un período.</p>
<p>Sin embargo, para explicar ese régimen necesita mirar lo que ocurre dentro de las empresas. El análisis microeconómico no es un fin en sí mismo, sino un medio para identificar <strong>regularidades en el comportamiento microeconómico</strong> —las «bases compatibles»— que expliquen las regularidades macroeconómicas. La empresa es, en este sentido, un microfundamento de la acumulación. <span class="source-chip">PPT 5.c</span></p>
<p>La teoría es histórica e institucional, no un modelo de equilibrio general. No postula un agente universal ni un mercado natural: estudia formas concretas de organización —la empresa fordista, la posfordista— y las relaciona con el marco institucional que las hace posibles. Su pregunta no es «¿cuál es el precio de equilibrio?», sino «¿qué arreglos institucionales permiten que un régimen de acumulación funcione y por qué entran en crisis?».</p>`
              },
              {
                id: "s2",
                title: "Dos proposiciones fuertes",
                html: `<p>La primera proposición es que <strong>el mercado no se autorregula</strong>. Las crisis y el crecimiento no son desviaciones de un equilibrio natural: están determinados endógenamente por la naturaleza de las disposiciones institucionales que estructuran la acumulación. No hay una mano invisible que garantice el pleno empleo ni un retorno automático al equilibrio.</p>
<p>La segunda es complementaria: <strong>la estabilidad proviene de las instituciones</strong>. Los elementos que hacen posible acumular —contratos, salarios, normas, convenciones, formas de competencia— no caen del cielo; son construcciones históricas. Cuando esas instituciones son coherentes con el régimen de acumulación, la economía puede crecer de forma relativamente estable. Cuando dejan de serlo, sobreviene la crisis. <span class="source-chip">PPT 5.c</span> <span class="source-chip">Coriat y Weinstein, 2011</span></p>
<p>Esto invierte el punto de partida neoclásico. No se trata de explicar cómo el mercado asigna recursos escasos, sino de entender cómo un conjunto de instituciones hace posible —o bloquea— un régimen de acumulación. El mercado es una institución, no un estado natural. Y la estabilidad no es el resultado automático de la competencia, sino de un arreglo institucional que puede agotarse.</p>
<p>Un ejemplo histórico ayuda: el régimen fordista de posguerra combinó producción en masa, salarios crecientes, consumo de masas y negociación colectiva. Esa combinación sostuvo un período de crecimiento. Cuando la productividad se estancó, la competencia internacional cambió y el arreglo salarial se volvió incompatible, el régimen entró en crisis. La crisis no fue un "error" del mercado: fue el agotamiento de un conjunto de instituciones.</p>`
              },
              {
                id: "s3",
                title: "Régimen de acumulación y modo de regulación",
                html: `<p>Dos conceptos organizan el análisis. El <strong>régimen de acumulación</strong> es el conjunto de regularidades que permiten que la acumulación de capital se sostenga en el tiempo: un patrón histórico de producción, distribución y consumo. El <strong>modo de regulación</strong> es el conjunto de formas institucionales, normas y mecanismos que estabilizan ese régimen: la relación salarial, la forma de competencia, el sistema monetario y financiero, el rol del Estado, la inserción internacional.</p>
<p>La literatura de la regulación suele distinguir varias formas institucionales: la <strong>relación salarial</strong> (cómo se fija el salario y se organiza el trabajo), la <strong>competencia</strong> (cómo se relacionan las empresas), el <strong>dinero y el crédito</strong>, el <strong>Estado</strong> y la <strong>inserción internacional</strong>. No es una lista cerrada ni universal: cada régimen combina estas formas de una manera específica. Lo importante es que sean compatibles entre sí y con el régimen de acumulación.</p>
<p>Cuando hay coherencia, el régimen funciona: las empresas pueden invertir, los salarios sostienen el consumo, el crédito financia la producción y el Estado provee infraestructura y legitimidad. Cuando hay incoherencia, aparecen tensiones, inflación, desempleo, crisis. La crisis no es solo económica: es institucional. <span class="source-chip">Coriat y Weinstein, 2011</span> <span class="source-chip">PPT 5.c</span></p>
<blockquote>El régimen de acumulación es el patrón que hace posible acumular; el modo de regulación es el conjunto de instituciones que lo estabiliza. La crisis aparece cuando el segundo deja de sostener al primero.</blockquote>`
              },
              {
                id: "s4",
                title: "La empresa fordista: el contexto histórico",
                html: `<p>La teoría se construye sobre la <strong>empresa fordista</strong>, eje del régimen de acumulación entre los años treinta y los setenta. No es un modelo abstracto: es una forma histórica concreta, asociada a la producción en masa, la gran fábrica, la organización científica del trabajo y la negociación colectiva.</p>
<p>Taylor aporta la administración científica: división de tareas, repetitividad, medición de tiempos y movimientos. Ford lleva esa lógica a la línea de montaje y a la producción en serie. La gran escala permite reducir costos; la integración vertical asegura el suministro; la estandarización permite coordinar miles de trabajadores y piezas. La fábrica se convierte en el símbolo del régimen.</p>
<p>Pero el fordismo no es solo tecnología. Es un <strong>compromiso social</strong>: salarios que crecen con la productividad, contratos colectivos, normas laborales, un Estado que sostiene la demanda y la infraestructura. La empresa es el lugar donde ese compromiso se materializa. Por eso la teoría no puede separar la organización de la empresa del marco institucional que la rodea. <span class="source-chip">PPT 5.c</span> <span class="source-chip">Coriat y Weinstein, 2011</span></p>
<p>La crisis de los setenta muestra que ese compromiso no era eterno. El aumento de la competencia internacional, la caída de la productividad, la inflación y el cuestionamiento del Estado de bienestar pusieron en tensión las instituciones fordistas. La respuesta fue la búsqueda de nuevas formas de organización: el posfordismo.</p>`
              },
              {
                id: "s5",
                title: "Los cinco rasgos, uno por uno",
                html: `<p>Coriat y Weinstein (2011) identifican cinco rasgos constitutivos de la empresa fordista. No son una lista de atributos sueltos: son un sistema. Cada uno supone a los otros y juntos hacen posible el régimen.</p>
<ol>
<li><strong>Lugar de conflicto de intereses.</strong> Hay un antagonismo estructural entre capital y trabajo por el reparto de los ingresos y del excedente. El empresario busca obtener el mayor provecho del tiempo de trabajo comprado; los trabajadores buscan mejores salarios y condiciones. La raíz de esta lectura se remonta a Marx y Ricardo. El conflicto no desaparece porque haya cooperación: se institucionaliza.</li>
<li><strong>Organización para la productividad.</strong> Aumentar la productividad exige organizar el trabajo. La administración científica de Taylor —división, repetitividad, medición de tiempos y movimientos— es su expresión emblemática. La organización no es un detalle técnico: es una forma de poder y de coordinación. Conecta con las rutinas de la teoría evolucionista y con las capacidades de la teoría de recursos.</li>
<li><strong>Gran tamaño e integración vertical.</strong> La búsqueda sistemática de economías de escala se opone a la idea neoclásica de rendimientos constantes. La gran empresa integrada es el soporte de la producción en serie y en masa. La escala permite invertir en tecnología, organizar la cadena y reducir costos unitarios.</li>
<li><strong>Formalización de contratos.</strong> La relación salarial se formaliza y puede ser colectiva. Los contratos definen la fórmula social de reparto y difusión de los beneficios de la productividad. No son un accesorio jurídico: son un determinante clave de la eficiencia y de la estabilidad del régimen.</li>
<li><strong>Elaboración de estándares y normas.</strong> La estandarización del trabajo es una de las principales innovaciones del fordismo. Las rutinas empresariales se imponen socialmente; las normas, los procedimientos y los estándares generan eficiencia microeconómica y estabilidad macroeconómica. La calidad, la seguridad y los tiempos se vuelven instituciones.</li>
</ol>
<p>Estos rasgos permiten leer una empresa real, pero también muestran los límites de la tipología: una empresa puede tener algunos rasgos y no otros, o combinarlos de forma híbrida. Toyota, por ejemplo, es un caso interesante porque mezcla elementos fordistas y posfordistas. <span class="source-chip">PPT 5.c</span> <span class="source-chip">Actividad práctica</span></p>`
              },
              {
                id: "s6",
                title: "La empresa posfordista: qué cambia y qué permanece",
                html: `<p>Desde los años ochenta, la organización de la producción se transforma. Aparecen nuevas formas de coordinación dentro de las empresas y entre ellas: equipos, polivalencia, círculos de calidad, participación, subcontratación, redes de proveedores. La academia compara la empresa fordista con la japonesa, la sueca y la alemana para identificar qué rasgos perduran y cuáles se transforman. <span class="source-chip">PPT 5.c</span></p>
<p>La teoría reformula sus propios conceptos. El conflicto capital/trabajo no desaparece, pero ya no involucra solo a dos grupos: múltiples actores intervienen alrededor de ese antagonismo. La organización se extiende más allá de la gestión del trabajo en sentido estricto y abarca la división y coordinación de todas las tareas. La contractualización incluye contratos implícitos, convenciones y negociaciones no explícitas, además de los formales.</p>
<p>El toyotismo es el caso más usado para discutir el paso al posfordismo: <em>kaizen</em> (mejora continua), <em>just in time</em>, control de calidad, equipos de trabajo y una red de proveedores jerarquizada. Toyota no es una empresa "sin fordismo": combina estandarización y participación, escala y flexibilidad, conflicto y cooperación. Es un híbrido, y esa hibridez es una advertencia contra las clasificaciones demasiado rígidas.</p>
<p>Lo que permanece es la lectura institucional: la empresa sigue siendo una organización donde se valorizan capitales y se determinan las condiciones de formación y reparto entre los agentes. La relación de empleo y las reglas de organización siguen siendo el corazón del análisis. Cambian las formas, no la naturaleza del problema. <span class="source-chip">Coriat y Weinstein, 2011</span></p>`
              },
              {
                id: "s7",
                title: "La empresa como institución y actriz institucional",
                html: `<p>La teoría define la empresa como una <strong>institución</strong>: expresión de un sistema jurídico-institucional determinado por reglas externas, que la empresa reproduce. Pero también como un lugar de <strong>producción institucional específica</strong>: genera contratos y reglas que se nutren del sistema institucional general y, a la vez, lo alimentan. Es un «actor de producciones institucionales».</p>
<p>De ahí su carácter de <strong>microfundamento de la macroeconomía</strong>. Lo que ocurre en la empresa —cómo se organiza el trabajo, cómo se fija el salario, cómo se negocia— condiciona la estabilidad o la crisis del régimen de acumulación. El salario no es un precio más: es una institución que regula el reparto y el conflicto. El trabajo no es una mercancía cualquiera.</p>
<p>La teoría recupera así la dimensión histórica y evolutiva: estudia empresas concretas —fordistas y posfordistas— y las tipifica, en lugar de postular un agente universal. Su límite es simétrico a su virtud: gana capacidad interpretativa, pero no ofrece una teoría general de la empresa. Es una teoría para leer un régimen y una época, no para derivar un modelo único. <span class="source-chip">PPT 5.c</span> <span class="source-chip">Coriat y Weinstein, 2011</span></p>
<p>Un ejemplo: si las empresas comprimen salarios y destruyen empleo, el consumo de masas que sostiene el régimen fordista se debilita. Si, en cambio, negocian aumentos ligados a la productividad y sostienen la demanda, contribuyen a la estabilidad. La decisión microeconómica tiene efectos macroeconómicos. Esa es la intuición central.</p>`
              },
              {
                id: "s8",
                title: "Aportes, límites y aplicación",
                html: `<p>La teoría de la regulación aporta una explicación de las características de la empresa consistente con el análisis macroeconómico; devuelve relevancia a la empresa en el análisis macro; muestra la importancia del marco global para comprender cuestiones micro; y pone en el centro la relación capital/trabajo y el salario como institución reguladora. También recupera los aspectos institucionales y ofrece una consideración histórica y evolutiva de las empresas, con tipologías fordistas y posfordistas. <span class="source-chip">PPT 5.c</span></p>
<p>Sus límites son igualmente importantes. No ofrece una teoría general de la empresa: es una teoría histórica y tipológica. Las tipologías pueden volverse descriptivas si no se las conecta con mecanismos. La teoría nació para la industria fordista y puede tener dificultades para analizar servicios, plataformas o empresas digitales. Y existe el riesgo de funcionalismo: explicar todo por la "necesidad" del régimen, perdiendo de vista el conflicto y la agencia.</p>
<p>Para aplicarla a un caso, conviene preguntarse: ¿en qué régimen de acumulación opera la empresa? ¿Qué formas institucionales la sostienen? ¿Qué rasgos fordistas y posfordistas presenta? ¿Cómo se organiza el trabajo? ¿Qué papel tienen los contratos y la negociación? ¿Qué normas y estándares produce? ¿Qué conflictos aparecen? ¿Qué aspectos no puede explicar la teoría?</p>
<p>El caso Toyota de la actividad práctica es un buen ejercicio porque obliga a usar la grilla sin forzar la respuesta. Toyota tiene rasgos fordistas —escala, estandarización, conflicto— y posfordistas —equipos, mejora continua, participación, red de proveedores—. La teoría ilumina, pero no agota el caso. Ese es el uso correcto: una caja de herramientas para interpretar, no una etiqueta para pegar. <span class="source-chip">Actividad práctica</span> <span class="source-chip">Coriat y Weinstein, 2011</span></p>`
              }
            ],
            table: {
              title: "Fordismo y posfordismo, lado a lado",
              headers: ["Dimensión", "Empresa fordista", "Empresa posfordista"],
              rows: [
                ["Conflicto capital/trabajo", "Antagonismo entre dos grupos, mediado por el salario y la negociación colectiva.", "Múltiples grupos e intereses alrededor del antagonismo fundamental; contratos implícitos y convenciones."],
                ["Organización del trabajo", "Administración científica: división, repetitividad, tiempos y movimientos.", "Equipos, polivalencia, calidad y coordinación de la totalidad de las tareas."],
                ["Tamaño e integración", "Gran escala, integración vertical, economías de escala.", "Redes, subcontratación y formas híbridas; la escala sigue importando, pero no es el único eje."],
                ["Contratos", "Formales y colectivos; relación salarial institucionalizada.", "Formales e implícitos; negociación explícita y no explícita."],
                ["Normas y estándares", "Estandarización del trabajo como innovación central.", "Normas de calidad, participación y mejora continua; estándares más flexibles."],
                ["Modelo de competencia", "Precio y escala; producción en masa.", "Diferenciación, calidad, flexibilidad y redes; competencia dinámica."]
              ]
            },
            trap: {
              title: "Error típico",
              text: "Reducir la teoría a una apología de la gran empresa fordista o a una simple descripción de «empresas grandes». No es una teoría de la eficiencia estática: es una teoría histórica e institucional sobre las condiciones de estabilidad, crisis y transformación del capitalismo. Y no es un recetario: la empresa fordista no es un ideal, es una forma histórica con conflictos y límites."
            },
            teach: {
              title: "Para explicarlo desde cero",
              text: "Pensá en la línea de montaje de Ford. No era solo una tecnología: era un conjunto de contratos, salarios, normas y formas de organizar el trabajo que hizo posible un régimen de crecimiento. Cambiá una pieza —por ejemplo, el salario— y cambia todo el régimen. Si los salarios no alcanzan para comprar lo que se produce, la producción en masa se queda sin mercado. Esa es la conexión entre la empresa y la macroeconomía."
            },
            sources: ["Coriat y Weinstein (2011)", "PPT 5.c", "Actividad práctica Regulación"]
          },
          concepts: [
            {
              term: "Régimen de acumulación",
              short: "El patrón histórico que hace posible producir, distribuir y consumir de forma relativamente estable.",
              tags: ["Macro", "Instituciones"],
              body: "Es el conjunto de regularidades que permiten que la acumulación de capital se sostenga en el tiempo. No es un equilibrio de mercado: es un arreglo histórico e institucional, que puede entrar en crisis y ser reemplazado por otro.",
              connects: ["Fordismo", "Posfordismo", "Instituciones"],
              sources: ["Coriat y Weinstein (2011)", "PPT 5.c"],
              error: "Pensar el régimen como un simple ciclo económico o como un equilibrio natural.",
              example: "El régimen fordista de posguerra combinó producción en masa, salarios crecientes y consumo de masas; cuando esa combinación se agotó, sobrevino la crisis de los setenta."
            },
            {
              term: "Fordismo",
              short: "Régimen de producción en masa basado en gran escala, integración vertical y organización científica del trabajo.",
              tags: ["Empresa", "Historia"],
              body: "Es la forma histórica de organización de la producción que se consolidó entre los años treinta y los setenta. Combina gran escala, integración vertical, taylorismo, relación salarial formalizada y estandarización del trabajo.",
              connects: ["Régimen de acumulación", "Relación salarial", "Taylorismo"],
              sources: ["Coriat y Weinstein (2011)", "PPT 5.c"],
              error: "Confundir fordismo con «empresa grande»: es un conjunto de instituciones, no solo un tamaño.",
              example: "La planta de Highland Park de Ford es el caso emblemático: línea de montaje, tiempos medidos y producción en serie."
            },
            {
              term: "Posfordismo",
              short: "Formas de organización posteriores al fordismo: redes, equipos, calidad y contratos implícitos.",
              tags: ["Empresa", "Transformación"],
              body: "Designa las nuevas formas de coordinación de la producción que se desarrollan desde los años ochenta: equipos, polivalencia, calidad, participación, subcontratación y redes. No es la desaparición del conflicto, sino su reorganización.",
              connects: ["Fordismo", "Contratos implícitos", "Empresa japonesa"],
              sources: ["PPT 5.c", "Coriat y Weinstein (2011)"],
              error: "Creer que el posfordismo elimina el conflicto capital/trabajo o la gran empresa.",
              example: "El toyotismo con sus equipos de mejora continua y su red de proveedores es el caso más usado para discutir el paso al posfordismo."
            },
            {
              term: "Relación salarial",
              short: "La institución que regula el intercambio entre capital y trabajo y el reparto de la productividad.",
              tags: ["Trabajo", "Institución"],
              body: "Es el conjunto de reglas que organizan la compra y el uso de la fuerza de trabajo: salario, jornada, contratos, negociación colectiva. Es una institución central del régimen de acumulación, no un precio más.",
              connects: ["Fordismo", "Conflicto capital-trabajo", "Instituciones"],
              sources: ["Coriat y Weinstein (2011)", "PPT 5.c"],
              error: "Tratar el salario como un precio que se ajusta automáticamente por oferta y demanda.",
              example: "La negociación colectiva que fija aumentos ligados a la productividad es una forma de relación salarial que sostiene el consumo y la estabilidad del régimen."
            },
            {
              term: "Conflicto capital-trabajo",
              short: "El antagonismo por el reparto de los ingresos y el uso del tiempo de trabajo.",
              tags: ["Trabajo", "Poder"],
              body: "Es el antagonismo estructural entre quienes aportan capital y quienes aportan trabajo, por el reparto del excedente y por el control del tiempo de trabajo. En el fordismo se manifiesta en la organización científica y en la negociación colectiva.",
              connects: ["Relación salarial", "Fordismo", "Poder"],
              sources: ["PPT 5.c", "Actividad práctica"],
              error: "Pensar que el conflicto desaparece cuando hay cooperación o identificación con la empresa.",
              example: "En Toyota, el kaizen y la participación conviven con diferencias por salarios, intensidad y condiciones de trabajo."
            },
            {
              term: "Institución",
              short: "Reglas, normas y convenciones que estructuran el comportamiento y reducen la incertidumbre.",
              tags: ["Instituciones", "Reglas"],
              body: "Son las reglas formales e informales, las normas y las convenciones que estructuran la interacción económica. La empresa es una institución y, a la vez, produce instituciones: contratos, rutinas, estándares.",
              connects: ["Régimen de acumulación", "Relación salarial", "Empresa como actriz"],
              sources: ["Coriat y Weinstein (2011)", "PPT 5.c"],
              error: "Reducir las instituciones al marco legal formal.",
              example: "Una convención sobre cómo se negocia un aumento salarial puede ser tan instituyente como una ley."
            },
            {
              term: "Microfundamentos macroeconómicos",
              short: "Lo que pasa dentro de la empresa condiciona la estabilidad del régimen de acumulación.",
              tags: ["Macro", "Empresa"],
              body: "La teoría sostiene que las formas de organizar el trabajo, fijar salarios y negociar dentro de la empresa son la base microeconómica de la estabilidad o crisis macroeconómica. No hay macro sin micro.",
              connects: ["Régimen de acumulación", "Relación salarial", "Empresa"],
              sources: ["PPT 5.c", "Coriat y Weinstein (2011)"],
              error: "Analizar la macro como si fuera independiente de lo que ocurre en las empresas.",
              example: "Si las empresas comprimen salarios y destruyen empleo, el consumo de masas que sostiene el régimen fordista se debilita."
            },
            {
              term: "Modo de regulación",
              short: "El conjunto de instituciones y normas que estabilizan un régimen de acumulación.",
              tags: ["Instituciones", "Macro"],
              body: "Es el conjunto de formas institucionales —relación salarial, competencia, dinero y crédito, Estado, inserción internacional— que hacen compatible y estable un régimen de acumulación. Cuando el modo de regulación deja de sostener al régimen, aparecen tensiones y crisis.",
              connects: ["Régimen de acumulación", "Instituciones", "Crisis"],
              sources: ["Coriat y Weinstein (2011)", "PPT 5.c"],
              error: "Confundir el modo de regulación con una política económica coyuntural; es un conjunto histórico de instituciones.",
              example: "El compromiso fordista de posguerra combinó salarios crecientes, negociación colectiva y consumo de masas; fue un modo de regulación que sostuvo el régimen."
            }
          ],
          practice: {
            label: "Actividad de clase · caso Toyota",
            title: "Toyota: ¿fordista, posfordista o las dos cosas?",
            caseTitle: "El método kaizen bajo la lupa de la teoría",
            caseHtml: `<p>La actividad original parte de una nota sobre el método <strong>kaizen</strong> de Toyota: mejora continua, cinco S (orden, organización, limpieza, estandarización y disciplina), trabajo estandarizado y un canal de sugerencias que involucra a los operarios. Toyota produce a gran escala, pero también organiza el trabajo en equipos y se apoya en una red de proveedores.</p>
<p>La consigna es usar los cinco rasgos de la empresa fordista como grilla de lectura, y preguntarse qué rasgos se observan, cuáles aparecen transformados y cuáles no pueden evaluarse con la información disponible.</p>`,
            steps: [
              {
                q: "¿Qué conflictos o diferencias de intereses aparecen entre Toyota y sus trabajadores?",
                hint: "Pensá en salarios, intensidad del trabajo, condiciones y participación en las decisiones.",
                answer: "Hay diferencias por el reparto de los ingresos, la intensidad y las condiciones de trabajo, y por el grado real de participación en las decisiones. El kaizen puede generar identificación, pero no elimina el antagonismo capital/trabajo; lo reorganiza."
              },
              {
                q: "¿Cómo se organizan las tareas y qué mecanismos se usan para mejorar la productividad?",
                hint: "Buscá en el caso las cinco S, el trabajo estandarizado, el kaizen y el canal de sugerencias.",
                answer: "Se combinan estandarización del trabajo, mejora continua, cinco S, equipos y sugerencias de los operarios. Es una organización que retoma elementos tayloristas (estándar, medición) y los combina con participación y mejora continua."
              },
              {
                q: "¿En qué medida Toyota presenta los cinco rasgos de la empresa fordista? ¿Cuáles se transforman?",
                hint: "Recorré los cinco rasgos: conflicto, organización, escala/integración, contratos y normas.",
                answer: "Presenta conflicto (reorganizado), organización para la productividad (con componentes tayloristas y posfordistas), gran escala (aunque con red de proveedores y menor integración vertical), contratos y negociación (con componentes formales e implícitos) y normas/estándares (centrales). Es un caso híbrido: la grilla fordista ilumina, pero no agota el caso."
              }
            ],
            closing: "Cerrá la práctica escribiendo qué rasgo de Toyota te costó más ubicar en la teoría y por qué."
          },
          quiz: {
            intro: "Cuatro preguntas para verificar que entendiste la lógica institucional, no solo la lista de rasgos.",
            questions: [
              {
                level: "Conceptual",
                q: "¿Qué significa que el mercado no se autorregula para la teoría de la regulación?",
                options: [
                  "Que los precios nunca cambian",
                  "Que las crisis y el crecimiento dependen de arreglos institucionales que estructuran la acumulación",
                  "Que el Estado debe fijar todos los precios",
                  "Que la competencia perfecta es imposible"
                ],
                correct: 1,
                explain: "La estabilidad y las crisis son endógenas a las disposiciones institucionales. No hay un equilibrio natural al que el mercado vuelva por sí solo."
              },
              {
                level: "Distinción",
                q: "¿Cuál de estos NO es un rasgo constitutivo de la empresa fordista?",
                options: [
                  "Conflicto de intereses entre capital y trabajo",
                  "Organización científica del trabajo y estandarización",
                  "Equipos autónomos y polivalencia como base de la organización",
                  "Gran tamaño e integración vertical"
                ],
                correct: 2,
                explain: "Los equipos autónomos y la polivalencia se asocian a formas posfordistas. El fordismo se apoya en la división y repetitividad de tareas."
              },
              {
                level: "Instituciones",
                q: "¿Qué es la relación salarial para la teoría de la regulación?",
                options: [
                  "El precio del trabajo que se ajusta por oferta y demanda",
                  "Un contrato individual que no tiene efectos macroeconómicos",
                  "Una variable que solo depende de la productividad marginal",
                  "Una institución que regula el reparto de la productividad y el conflicto capital-trabajo",
                ],
                correct: 3,
                explain: "El salario es una institución, no un precio más. Regula el reparto, el consumo y la estabilidad del régimen de acumulación."
              },
              {
                level: "Razonamiento",
                q: "¿Cómo concibe la empresa posfordista el contrato?",
                options: [
                  "Contratos formales e implícitos, convenciones y negociaciones no explícitas",
                  "Solo contratos formales y escritos",
                  "Ningún tipo de contrato, porque todo se coordina por el mercado",
                  "Únicamente contratos colectivos de trabajo",
                ],
                correct: 0,
                explain: "La posfordista amplía la noción de contractualización: incluye compromisos implícitos, convenciones y formas no explícitas de negociación."
              }
            ],
            open: [
              {
                level: "Integración",
                q: "¿Por qué la empresa es un fundamento microeconómico de la acumulación macroeconómica?",
                guide: "Porque las formas de organizar el trabajo, fijar salarios y negociar dentro de la empresa condicionan el consumo, la productividad y la estabilidad del régimen. La macro no se explica sin esos microfundamentos."
              },
              {
                level: "Aplicación",
                q: "Toyota: ¿fordista o posfordista? Argumentá con los cinco rasgos.",
                guide: "Es un caso híbrido. Presenta rasgos fordistas (escala, estandarización, conflicto) y posfordistas (equipos, mejora continua, participación, red de proveedores). La respuesta debe mostrar matices, no una etiqueta única."
              },
              {
                level: "Límites",
                q: "¿Qué límites tiene la teoría para analizar una empresa como Mercado Libre?",
                guide: "La teoría se construyó sobre la empresa industrial fordista. Una plataforma digital plantea preguntas sobre trabajo, contratos y escala que la tipología no anticipa. Sirve como grilla, pero exige adaptación."
              }
            ]
          },
          review: {
            stats: [
              { value: "1", label: "página de ideas clave" },
              { value: "8", label: "conceptos para dominar" },
              { value: "7", label: "días de repaso" }
            ],
            summary: [
              { lead: "El mercado no se autorregula.", text: "Crisis y crecimiento dependen de arreglos institucionales que estructuran la acumulación." },
              { lead: "La estabilidad proviene de las instituciones.", text: "Contratos, salarios, normas y convenciones sostienen el régimen, no el equilibrio automático." },
              { lead: "La empresa fordista tiene cinco rasgos.", text: "Conflicto, organización, escala/integración, contratos y estándares." },
              { lead: "La posfordista transforma, no borra.", text: "Equipos, redes y contratos implícitos conviven con el conflicto capital/trabajo." },
              { lead: "La empresa es actriz institucional.", text: "Reproduce el marco institucional y produce reglas nuevas; es microfundamento de la macro." },
              { lead: "El modo de regulación sostiene el régimen.", text: "Cuando las instituciones dejan de ser compatibles, aparece la crisis." }
            ],
            errors: [
              { error: "Decir que la teoría es una apología de la empresa grande", fix: "Es una teoría histórica e institucional sobre estabilidad y crisis, no de eficiencia estática." },
              { error: "Reducir el salario a un precio de mercado", fix: "Es una institución que regula el reparto y el conflicto." },
              { error: "Creer que el posfordismo elimina el conflicto", fix: "Lo reorganiza: cambian las formas, no el antagonismo de fondo." },
              { error: "Analizar la macro sin mirar las empresas", fix: "La empresa es microfundamento de la acumulación macroeconómica." }
            ],
            cards: [
              { front: "Régimen de acumulación", back: "Patrón histórico e institucional que hace posible producir, distribuir y consumir de forma relativamente estable." },
              { front: "Cinco rasgos fordistas", back: "Conflicto capital-trabajo; organización científica; gran escala e integración; contratos formales; estándares y normas." },
              { front: "Relación salarial", back: "Institución que regula el intercambio capital-trabajo y el reparto de la productividad. No es un precio más." },
              { front: "Posfordismo", back: "Equipos, polivalencia, calidad, redes y contratos implícitos. No elimina el conflicto: lo reorganiza." },
              { front: "Empresa como actriz institucional", back: "Reproduce el marco institucional y produce reglas nuevas. Es microfundamento de la macro." }
            ],
            plan: [
              { day: "Día 1", task: "Leer la teoría y enumerar los cinco rasgos", min: "30 min" },
              { day: "Día 2", task: "Explicar por qué el mercado no se autorregula", min: "15 min" },
              { day: "Día 3", task: "Completar el cuadro fordismo/posfordismo", min: "20 min" },
              { day: "Día 4", task: "Resolver el caso Toyota", min: "25 min" },
              { day: "Día 5", task: "Autoevaluación y corrección", min: "15 min" },
              { day: "Día 6", task: "Flashcards + errores típicos", min: "15 min" },
              { day: "Día 7", task: "Explicar la unidad con un caso actual", min: "25 min" }
            ],
            session: [
              { time: "0–15", title: "Encuadre", text: "Leer la idea clave y anotar qué esperás de una teoría que mira la empresa desde la macro." },
              { time: "15–45", title: "Teoría activa", text: "Leer las 8 secciones y completar una tabla con los cinco rasgos fordistas." },
              { time: "45–60", title: "Conceptos", text: "Conectar régimen, fordismo, relación salarial e institución en un mapa." },
              { time: "60–78", title: "Práctica", text: "Analizar Toyota con la grilla de los cinco rasgos." },
              { time: "78–87", title: "Autoevaluación", text: "Hacer el quiz y justificar las opciones incorrectas." },
              { time: "87–90", title: "Cierre", text: "Escribir una diferencia entre fordismo y posfordismo que puedas enseñar." }
            ],
            stuck: [
              { title: "No entendés qué es un régimen de acumulación", source: "PPT 5.c, diapositivas 2-4; Coriat y Weinstein (2011), introducción." },
              { title: "Se te mezclan fordismo y posfordismo", source: "PPT 5.c, diapositivas 6-16; cuadro comparativo de esta sección." },
              { title: "No ves por qué Toyota es un caso híbrido", source: "Actividad práctica Regulación; PPT 5.c, diapositivas 17-22." }
            ]
          },
          sources: [
            {
              author: "Coriat, B.; Weinstein, O.",
              year: "2011",
              title: "Nuevas teorías de la empresa",
              cite: "Capítulo sobre la teoría de la regulación.",
              type: "Libro",
              priority: "base",
              what: "La exposición de la empresa fordista y posfordista y su lectura institucional.",
              used: ["Teoría", "Conceptos", "Repaso"],
              file: "../Documentos de clases/5 C/Coriat y Weinstein (2011) - Regulación.pdf"
            },
            {
              author: "Mauro, L.",
              year: "2026",
              title: "Unidad 5: Teoría de la regulación",
              cite: "Presentación de clase, 3 de noviembre de 2026.",
              type: "Clase",
              priority: "guía",
              what: "Síntesis de proposiciones, rasgos fordistas, posfordismo y aportes.",
              used: ["Teoría", "Conceptos"],
              file: "../Documentos de clases/5 C/PPT 5.c Regulación.pptx"
            },
            {
              author: "Cátedra",
              year: "2026",
              title: "Actividad práctica: Teoría de la regulación",
              cite: "Caso Toyota y preguntas guía.",
              type: "Práctica",
              priority: "base",
              what: "Aplicación de los cinco rasgos al caso Toyota y discusión de la capacidad interpretativa.",
              used: ["Práctica", "Autoevaluación"],
              file: "../Documentos de clases/5 C/Actividad practica Regulacion.pdf"
            },
            {
              author: "Coriat, B.; Weinstein, O.",
              year: "2011",
              title: "Nuevas teorías de la empresa",
              cite: "Libro completo.",
              type: "Libro",
              priority: "ampliatoria",
              what: "Marco general para ubicar la regulación entre las teorías de la firma.",
              used: ["Ampliación"],
              file: "../Bibliografía Teoría de la Firma/Libro. Coriat y Weinstein (2011) Nuevas teorías de la empresa.pdf"
            }
          ]
        }
      ]
    },

    /* =====================================================
       UNIDAD 6 — CADENAS GLOBALES, INNOVACIÓN Y CAMBIO TECNOLÓGICO
       ===================================================== */
    {
      id: "u6",
      num: "06",
      short: "CGV e innovación",
      title: "Cadenas globales, innovación y cambio tecnológico",
      status: "active",
      subtitle: "Cómo se organiza la producción a escala global, cómo aprenden las empresas de países emergentes y cómo las revoluciones tecnológicas reconfiguran el capitalismo.",
      description: "La unidad combina tres escalas: la cadena global de valor (6.1), la empresa que construye capacidades tecnológicas en un país emergente (6.2) y el paradigma tecnoeconómico que enmarca ambas (6.3).",
      minutes: 165,
      sourceCount: 13,
      subunits: [
        {
          id: "6a",
          code: "6.1",
          letter: "A",
          accent: "teal",
          title: "Cadenas globales de valor",
          desc: "Gobernanza, upgrading y modularidad en la producción global.",
          tagline: "La pregunta no es solo quién produce, sino quién gobierna la cadena, con qué reglas y cómo se reparte el valor.",
          minutes: 60,
          sourceCount: 6,
          theory: {
            title: "La producción fragmentada y la pregunta por el poder",
            lead: "Durante casi todo el siglo XX, la empresa industrial emblemática fue la gran corporación integrada: producía, distribuía y vendía casi todo dentro de sus propias fronteras. Desde los años ochenta, esa imagen se resquebrajó. Las empresas líderes se quedaron con el diseño, la marca y el marketing, y desplazaron la producción a una red de proveedores repartidos por el mundo. La cadena global de valor es el nombre de esa nueva arquitectura.",
            keyIdea: "Una cadena global de valor no es una simple sucesión de compras y ventas: es una estructura de coordinación y poder. Las empresas líderes fijan reglas, estándares y divisiones del trabajo, y de esa posición depende quién captura las rentas. Por eso, insertarse en una cadena no equivale a desarrollarse: importa cómo y en qué términos se participa.",
            keyIdeaSource: "Síntesis de Gereffi, Humphrey y Sturgeon (2005); Humphrey y Schmitz (2004); Kaplinsky (2000)",
            sections: [
              {
                id: "s1",
                title: "De la firma integrada a la producción fragmentada",
                html: `<p>La corporación moderna que describió Chandler se construyó sobre la integración vertical: la empresa internalizaba las etapas sucesivas de producción, distribución y venta para aprovechar economías de escala, coordinar el flujo de insumos y reducir los costos de transacción. La gran planta, la jerarquía gerencial y la producción en masa eran su forma típica. Ese modelo organizó buena parte de la industria del siglo XX, desde el automóvil hasta los alimentos envasados. <span class="source-chip">Sturgeon, 2002</span></p>
<p>Desde fines de los años setenta, ese paisaje cambió. Las empresas comenzaron a <strong>fragmentar</strong> la producción: distintas partes del proceso se separaron físicamente y se distribuyeron entre países y empresas. Arndt y Kierzkowski llamaron <em>fragmentation</em> a esa separación; Feenstra la describió como una <em>desintegración de la producción</em> que acompañaba la integración del comercio. Ya no se comerciaban solo productos finales: crecía el comercio de componentes, insumos intermedios y servicios. <span class="source-chip">Gereffi, Humphrey y Sturgeon, 2005</span></p>
<p>El cambio no fue solo técnico. Las empresas líderes redefinieron sus <strong>competencias centrales</strong>: se concentraron en la innovación, la estrategia de producto, el diseño, la marca, el marketing y los segmentos de mayor valor agregado, y externalizaron funciones consideradas no centrales, como la producción genérica, los servicios básicos y parte de la logística. La integración vertical dejó de ser la única forma de coordinar una industria. <span class="source-chip">Gereffi, Humphrey y Sturgeon, 2005</span> <span class="source-chip">Sturgeon, 2002</span></p>
<p>Esa combinación —fragmentación productiva y desintegración vertical— abrió un espacio nuevo entre el mercado spot y la jerarquía. La coordinación ya no se logra solo comprando o poseyendo: se logra <strong>gobernando</strong> una red de proveedores independientes. Esa es la pregunta que organiza toda la subunidad y la que conecta con las teorías contractuales de la Unidad 04: si la firma existe porque el mercado tiene costos, ¿qué pasa cuando la coordinación se ejerce sin propiedad?</p>`
              },
              {
                id: "s2",
                title: "Qué es una cadena global de valor",
                html: `<p>Una <strong>cadena de valor</strong> es la secuencia de actividades que transforman una idea o una materia prima en un producto o servicio que llega al consumidor: diseño, I+D, aprovisionamiento, producción de partes, ensamble, distribución, marketing, venta y posventa. Kogut la definía como el proceso en el que se combina tecnología con materiales y trabajo, se ensamblan los insumos y se comercializa y distribuye el resultado. Una sola empresa puede ocupar un eslabón o estar integrada verticalmente en varios. <span class="source-chip">Gereffi, Humphrey y Sturgeon, 2005</span></p>
<p>La cadena se vuelve <strong>global</strong> cuando esas actividades se reparten entre países y entre empresas, y cuando la coordinación de esa red es el factor decisivo de la competitividad. No alcanza con que un país exporte: hay que ver qué parte del proceso realiza, con qué capacidades, bajo qué reglas y cuánto valor retiene. La diferencia entre <em>internacionalización</em> y <em>globalización</em> es útil: en la primera, un producto se fabrica en un país y se vende en otro; en la segunda, el producto se fabrica en varios países antes de llegar al consumidor. <span class="source-chip">Kaplinsky, 2000</span></p>
<p>De ahí surgen tres preguntas que no son equivalentes. <strong>¿Quién produce?</strong> identifica la geografía y las empresas que ejecutan las tareas. <strong>¿Quién coordina?</strong> identifica a la empresa o actor que fija especificaciones, estándares y tiempos. <strong>¿Quién captura el valor?</strong> identifica dónde quedan las rentas y qué parte del precio final retiene cada eslabón. Una cadena puede tener muchos productores y muy pocos coordinadores; puede tener mucho empleo y poco valor retenido; puede exportar mucho y agregar poco. <span class="source-chip">Kaplinsky, 2000</span> <span class="source-chip">CEPAL, 2014</span></p>
<p>La distinción importa porque las estadísticas comerciales suelen medir valores brutos. Un país puede mostrar exportaciones altas de un producto que en realidad solo ensambla con componentes importados. Kaplinsky retoma el ejemplo del calzado en la República Dominicana: el valor bruto de las exportaciones crecía, pero el valor agregado local era mínimo porque se importaban los insumos y solo se realizaba el armado. Sin mirar la cadena, el dato de exportaciones engaña. <span class="source-chip">Kaplinsky, 2000</span></p>`
              },
              {
                id: "s3",
                title: "Gobernanza: mercado, modular, relacional, cautiva y jerarquía",
                html: `<p>La <strong>gobernanza</strong> es la coordinación de actividades que no queda resuelta por el precio. Alguien define qué se produce, cómo, cuándo y con qué estándares; alguien monitorea el cumplimiento y distribuye las tareas entre los eslabones. En una cadena global, ese alguien suele ser una <strong>empresa líder</strong>: un comprador global, un fabricante de marca o una corporación que controla la tecnología y el acceso al mercado. <span class="source-chip">Gereffi, Humphrey y Sturgeon, 2005</span> <span class="source-chip">Humphrey y Schmitz, 2004</span></p>
<p>Gereffi, Humphrey y Sturgeon proponen cinco tipos analíticos de gobernanza. No son cajas donde entra cada empresa real, sino formas de coordinar que se combinan y cambian:</p>
<ol>
<li><strong>Mercado.</strong> Las transacciones son simples y se codifican con facilidad; hay muchos proveedores capaces y los costos de cambiar de socio son bajos. El precio es la señal principal. Puede haber transacciones repetidas, pero no una relación de dependencia.</li>
<li><strong>Modular.</strong> Los proveedores fabrican a especificaciones del cliente, pero asumen la responsabilidad de la tecnología de proceso, usan maquinaria genérica y compran componentes por cuenta del cliente. La información es compleja pero codificable y los vínculos son flexibles: el proveedor puede cambiar de cliente con costos relativamente bajos.</li>
<li><strong>Relacional.</strong> Las transacciones son complejas y la información es tácita; los proveedores son capaces. Aparecen dependencia mutua, activos específicos, reputación, confianza y, a veces, proximidad geográfica o lazos familiares y étnicos. Cambiar de socio es costoso.</li>
<li><strong>Cautiva.</strong> El comprador es mucho más grande y el proveedor pequeño depende de él. Hay altos costos de cambio, mucho monitoreo y control, y el proveedor suele quedar confinado a tareas acotadas, como el ensamble simple.</li>
<li><strong>Jerarquía.</strong> La coordinación se hace dentro de la firma, por integración vertical. El control es gerencial, de la casa matriz a las subsidiarias. Aparece cuando el conocimiento es tácito, el producto es complejo y no hay proveedores capaces, o cuando hay que proteger propiedad intelectual.</li>
</ol>
<p>Los cinco tipos se ordenan en un espectro que va de menor a mayor coordinación explícita y asimetría de poder: el mercado está en un extremo y la jerarquía en el otro. La modular, la relacional y la cautiva son formas de red, pero muy distintas entre sí. Confundirlas es el error más común: una cadena modular no es un mercado spot, y una cautiva no es una jerarquía. <span class="source-chip">Gereffi, Humphrey y Sturgeon, 2005</span></p>`
              },
              {
                id: "s4",
                title: "Los tres determinantes y la tabla de Gereffi et al.",
                html: `<p>¿Por qué una cadena adopta una forma y no otra? La teoría propone tres determinantes. Primero, la <strong>complejidad de las transacciones</strong>: cuánta información y conocimiento hay que intercambiar para especificar el producto y el proceso. Segundo, la <strong>capacidad de codificar</strong> esa información: si puede escribirse en planos, manuales, estándares o archivos digitales y transmitirse sin inversiones específicas. Tercero, las <strong>capacidades de los proveedores</strong>: si pueden cumplir los requisitos con poca asistencia del comprador. <span class="source-chip">Gereffi, Humphrey y Sturgeon, 2005</span></p>
<p>Con tres variables binarias hay ocho combinaciones posibles, pero solo cinco se observan como tipos de gobernanza. La combinación de baja complejidad y baja codificabilidad es improbable: si la transacción es simple, normalmente se puede codificar. Y si la complejidad es baja, la codificación alta y las capacidades del proveedor también son bajas, el resultado no es un tipo de gobernanza sino la <strong>exclusión</strong> del proveedor de la cadena. Esa exclusión es un resultado importante, aunque no sea una forma de gobernar. <span class="source-chip">Gereffi, Humphrey y Sturgeon, 2005</span></p>
<p>La tabla resume la lógica. En el mercado, todo es simple y codificable. En la modular, la complejidad y la codificabilidad son altas, y también las capacidades: el proveedor puede hacerse cargo de un paquete completo. En la relacional, la complejidad es alta, la codificabilidad baja y las capacidades altas: hay que intercambiar conocimiento tácito con un socio competente. En la cautiva, la complejidad y la codificabilidad son altas pero las capacidades son bajas: el comprador debe intervenir y controlar. En la jerarquía, la complejidad es alta, la codificabilidad baja y no hay proveedores capaces: la empresa lo hace adentro. <span class="source-chip">Gereffi, Humphrey y Sturgeon, 2005</span></p>
<p>Los determinantes no son fijos. Las empresas líderes pueden <strong>aumentar</strong> la complejidad cuando exigen just-in-time, diferenciación o trazabilidad; pueden <strong>reducirla</strong> con estándares técnicos y certificaciones; los proveedores pueden <strong>acumular capacidades</strong> y pasar de cautivos a modulares o relacionales; y la codificación puede cambiar con la tecnología. Por eso la gobernanza es dinámica: la tabla es una foto, no una sentencia. <span class="source-chip">Gereffi, Humphrey y Sturgeon, 2005</span> <span class="source-chip">Pérez Ibáñez, 2019</span></p>`
              },
              {
                id: "s5",
                title: "Poder, parámetros y gobernanza legislativa, judicial y ejecutiva",
                html: `<p>Humphrey y Schmitz precisan en qué consiste el poder en la cadena. Gobernar es <strong>fijar e imponer parámetros</strong> en tres dimensiones: qué se produce (diseño, especificaciones), cómo se produce (tecnología, calidad, normas laborales y ambientales) y cómo fluye el producto (cantidad, tiempos, logística). El poder aparece cuando esas dimensiones no quedan resueltas por el mercado y un actor las define para otros. <span class="source-chip">Humphrey y Schmitz, 2004</span></p>
<p>Con ese criterio distinguen cuatro formas de relación: <strong>mercados distantes</strong>, <strong>redes</strong>, <strong>cuasi jerarquía</strong> y <strong>jerarquía</strong>. En la cuasi jerarquía una empresa ejerce un alto grado de control sobre otras sin poseerlas: especifica el producto, a veces el proceso y los mecanismos de control. Es la forma típica de las cadenas conducidas por el comprador. La jerarquía, en cambio, implica apropiarse directamente de las operaciones. La cuasi jerarquía se parece a la gobernanza cautiva de Gereffi, pero no es idéntica: la primera pone el acento en el control sin propiedad; la segunda, en la dependencia del proveedor. <span class="source-chip">Humphrey y Schmitz, 2004</span></p>
<p>Kaplinsky amplía la mirada con una distinción tomada de la gobernanza cívica. La <strong>gobernanza legislativa</strong> fija las reglas de participación: estándares de calidad, plazos, normas ambientales o laborales. La <strong>gobernanza judicial</strong> audita y controla el cumplimiento: monitoreo de proveedores, certificadoras, ONG. La <strong>gobernanza ejecutiva</strong> asiste a los participantes para que puedan cumplir: gestión de la cadena, servicios especializados, política industrial, asociaciones empresariales. Estas funciones pueden ejercerse desde adentro o desde afuera de la cadena. <span class="source-chip">Kaplinsky, 2000</span></p>
<p>La distinción evita una confusión frecuente: no siempre gobierna el que compra más, y una misma cadena puede tener varios gobernadores parciales. Una cadena puede ser conducida por el comprador en el diseño y la marca, mientras un fabricante de componentes gobierna la tecnología, y una certificadora externa gobierna las normas ambientales. Kaplinsky también distingue las cadenas <strong>buyer-driven</strong>, típicas de industrias intensivas en trabajo como el calzado, la indumentaria, los muebles o los juguetes, y las <strong>producer-driven</strong>, donde productores con tecnologías clave coordinan los eslabones y suelen estar más asociadas a la inversión extranjera directa. <span class="source-chip">Kaplinsky, 2000</span></p>`
              },
              {
                id: "s6",
                title: "Upgrading: cuatro caminos para subir en la cadena",
                html: `<p><strong>Upgrading</strong> —mejora o escalamiento— designa los cambios en las actividades de una empresa o un grupo de empresas que conducen a mayores ingresos. No es lo mismo que innovar en abstracto ni que crecer en volumen: es moverse hacia actividades más valiosas dentro de la cadena. Humphrey y Schmitz distinguen cuatro tipos. <span class="source-chip">Humphrey y Schmitz, 2004</span></p>
<ol>
<li><strong>De proceso:</strong> producir más eficientemente, reorganizando el sistema productivo o incorporando tecnologías superiores. Es el aprendizaje que suele llegar primero: calidad, tiempos, rendimiento, mantenimiento.</li>
<li><strong>De producto:</strong> pasar a líneas de mayor complejidad o mayor valor unitario. Puede ser mejorar la calidad, agregar atributos o entrar en segmentos más exigentes.</li>
<li><strong>Funcional:</strong> asumir nuevas funciones o abandonar las de bajo valor. Por ejemplo, complementar la producción con diseño, marketing o marca, o dejar el ensamble para concentrarse en servicios de ingeniería.</li>
<li><strong>Intersectorial:</strong> aplicar las capacidades adquiridas en una cadena para entrar en otro sector. El caso clásico es el de empresas taiwanesas que pasaron de producir televisores a monitores y luego a computadoras.</li>
</ol>
<p>El tipo de gobernanza condiciona qué upgrading es posible. Las cadenas cuasi jerárquicas ofrecen condiciones muy favorables para la mejora rápida de proceso y producto, porque el comprador transmite conocimiento y exige estándares, pero suelen bloquear la mejora funcional porque esa función es la competencia central del líder. Las relaciones de mercado no impulsan la mejora de proceso y producto, pero dejan más abierto el camino funcional. Las redes equilibradas serían ideales, aunque son difíciles de encontrar entre productores de países en desarrollo, que no suelen tener las competencias complementarias que exigen. <span class="source-chip">Humphrey y Schmitz, 2004</span></p>
<p>El caso del valle del Sinos, en Brasil, muestra el dilema. Los compradores estadounidenses ayudaron a las empresas de calzado a mejorar procesos y calidad, pero concentraron el diseño y la comercialización. Cuando la competencia china presionó los precios, la mejora funcional se volvió urgente; sin embargo, los principales exportadores no querían avanzar en diseño y marketing porque eso chocaba con la competencia central de su principal comprador. Fueron las empresas que también vendían en el mercado interno y latinoamericano las que desarrollaron capacidades de diseño. La lección: la gobernanza abre y cierra caminos, pero las empresas pueden buscar otros mercados, diversificar clientes y construir capacidades por fuera de la relación dominante. <span class="source-chip">Humphrey y Schmitz, 2004</span></p>`
              },
              {
                id: "s7",
                title: "Rentas, distribución y desigualdad",
                html: `<p>Kaplinsky propone mirar las cadenas como <strong>repositorios de rentas</strong>. Una renta económica es un ingreso superior al que se obtendría en una actividad competitiva, y aparece cuando hay barreras a la entrada: escasez natural, tecnología, patentes, marcas, capacidades difíciles de imitar o control de la coordinación. La renta no es un dato fijo: es dinámica y se erosiona cuando más empresas entran y compiten. <span class="source-chip">Kaplinsky, 2000</span></p>
<p>La historia de las últimas décadas es, en parte, la historia de ese desplazamiento. A medida que más países —sobre todo China— desarrollaron capacidades de manufactura, las barreras de entrada en la producción cayeron y los precios de muchos bienes manufacturados se comprimieron. Las rentas se corrieron hacia los <strong>intangibles</strong>: diseño, marca, propiedad intelectual, logística, servicios, y hacia la función misma de gobernar la cadena. Cuanto más cerca está una actividad de la commodity, mayor es la presión sobre el precio; cuanto más específica, más conocimiento incorpora y más poder de negociación tiene el proveedor. <span class="source-chip">Kaplinsky, 2000</span></p>
<p>De ahí se sigue una conclusión incómoda: la inserción en una cadena no garantiza desarrollo. Un país puede participar intensamente, exportar mucho y aun así retener poco valor si se especializa en actividades de bajo valor agregado y alta competencia. Lo que importa es <strong>cómo</strong> y <strong>en qué términos</strong> se participa: qué eslabón se ocupa, qué capacidades se acumulan, qué rentas se capturan y qué poder de negociación se tiene. La distribución del ingreso entre países y dentro de cada país depende de esa posición. <span class="source-chip">Kaplinsky, 2000</span> <span class="source-chip">CEPAL, 2014</span></p>
<p>También hay efectos dentro de cada país. Las exigencias de los mercados de altos ingresos —calidad, trazabilidad, certificaciones, volúmenes— pueden excluir a pequeños productores y favorecer a las grandes explotaciones o empresas. Las cadenas gobernadas no son neutras: seleccionan proveedores y, al hacerlo, redistribuyen oportunidades. Por eso las políticas de inclusión no pueden limitarse a “conectar” a las pymes con la cadena; tienen que ayudarlas a cumplir los requisitos y a acumular capacidades. <span class="source-chip">Kaplinsky, 2000</span> <span class="source-chip">CEPAL, 2014</span></p>`
              },
              {
                id: "s8",
                title: "Redes modulares y proveedores turn-key",
                html: `<p>Sturgeon describe una forma organizativa que se consolidó en la electrónica estadounidense: la <strong>red de producción modular</strong>. Las empresas líderes se concentran en crear, penetrar y defender mercados de productos finales —y cada vez más en los servicios asociados—, mientras la capacidad de manufactura se traslada a proveedores globales <strong>turn-key</strong>. Estos proveedores fabrican a especificaciones del cliente, pero asumen la responsabilidad de la tecnología de proceso, compran los componentes, organizan la logística y ofrecen servicios de ingeniería, pruebas y posventa. <span class="source-chip">Sturgeon, 2002</span></p>
<p>El caso de Apple y SCI Systems es ilustrativo. Apple vendió su planta de Colorado a SCI, pero siguió produciendo allí sus computadoras: no se retiró de la manufactura, la externalizó. SCI fabricaba para Apple y para más de cincuenta clientes, incluidos competidores directos. Esa base de clientes diversificada le permitía aprovechar economías de escala y de velocidad que una empresa de marca, con un solo producto, no podía alcanzar. Lo mismo hicieron Cisco, Ericsson, Nokia y otras firmas: la manufactura pasó a Solectron, Flextronics, Celestica, Jabil y Sanmina/SCI. <span class="source-chip">Sturgeon, 2002</span></p>
<p>La clave técnica es la <strong>modularidad de la cadena de valor</strong>: la posibilidad de separar la innovación de producto de la inversión en manufactura gracias a vínculos interfirma codificados y a una capacidad de producción genérica. Los proveedores turn-key se especializan en un proceso, un componente o un servicio de base que puede aplicarse a muchos productos y clientes; su capacidad no está atada a un producto específico. Eso reduce la especificidad de activos y los costos de transacción, y permite que la producción se reasigne entre empresas sin inmovilizar plantas. <span class="source-chip">Sturgeon, 2002</span></p>
<p>Sturgeon usa el caso para discutir a Schumpeter, Chandler y Williamson. Contra la idea de que la innovación exitosa conduce inevitablemente a la gran empresa integrada, muestra que una empresa puede ganar participación sin poseer capacidad productiva: le basta con acceder a la red. Contra Williamson, muestra que la especificidad de activos no siempre lleva a la integración, porque los proveedores desarrollan capacidad genérica y una cartera de clientes que les permite amortiguar el riesgo. Y contra Chandler, muestra que las economías de escala pueden ser <em>externas</em> a la firma y estar organizadas por la red. <span class="source-chip">Sturgeon, 2002</span></p>
<p>La consecuencia es una co-evolución: a medida que los proveedores acumulan capacidades, la externalización se vuelve más atractiva; y a medida que más empresas externalizan, los proveedores crecen y se especializan. Los clusters y distritos industriales no desaparecen: se insertan en estas redes globales, a veces como proveedores especializados, a veces como socios de diseño. La modularidad no elimina el poder; lo redistribuye y lo vuelve más dependiente de la capacidad de coordinar la red. <span class="source-chip">Sturgeon, 2002</span> <span class="source-chip">Gereffi, Humphrey y Sturgeon, 2005</span></p>`
              },
              {
                id: "s9",
                title: "Cadenas inclusivas y el lugar de América Latina",
                html: `<p>La CEPAL retoma el marco de las cadenas globales para preguntarse cómo América Latina y el Caribe pueden insertarse de una manera más favorable. Su diagnóstico es conocido: la región creció en la década de 2000, pero no cerró las brechas de productividad, innovación e infraestructura; sigue exportando bienes con poco procesamiento o mano de obra de bajo costo, y su estructura productiva es heterogénea. La integración regional y las políticas de desarrollo productivo aparecen como instrumentos para ampliar mercados, diversificar exportaciones y generar empleo de calidad. <span class="source-chip">CEPAL, 2014</span></p>
<p>La propuesta de <strong>cadenas de valor inclusivas</strong> pone a las pymes en el centro. No se trata solo de que unas pocas empresas exporten más, sino de que la participación en la cadena genere más y mejor empleo y distribuya capacidades. El comercio intrarregional es clave porque tiene más contenido de manufacturas y servicios y más presencia de pymes que el comercio extrarregional. Pero para aprovecharlo hacen falta infraestructura, logística, facilitación del comercio, estándares armonizados y financiamiento. <span class="source-chip">CEPAL, 2014</span></p>
<p>Los obstáculos son concretos: costos logísticos altos, cuellos de botella en transporte, trámites aduaneros, normas técnicas y sanitarias distintas, falta de acceso al crédito, debilidades de gestión y capital humano, y dificultad para cumplir los requisitos de los compradores globales. La CEPAL habla de “eslabones faltantes” y de fragmentación regulatoria: no basta con bajar aranceles si el resto de las reglas y los servicios no acompañan. <span class="source-chip">CEPAL, 2014</span></p>
<p>La política industrial vuelve al centro, en un sentido amplio: políticas horizontales pasivas y activas, pero también políticas de cambio estructural que crean nuevas ventajas competitivas. Los instrumentos incluyen certificación de calidad, trazabilidad, normas sanitarias y fitosanitarias, capacitación, asociatividad, desarrollo de proveedores, clústeres, compras públicas, financiamiento y pactos regionales de desarrollo industrial. Los estudios de caso centroamericanos —la cadena láctea y la de fibras sintéticas y ropa deportiva— muestran que la coordinación público-privada y la escala subregional pueden destrabar cuellos de botella que un país solo no puede resolver. <span class="source-chip">CEPAL, 2014</span></p>
<p>La conclusión es matizada. Entrar a una cadena es una condición necesaria pero no suficiente; hay que <strong>subir</strong> en ella y distribuir mejor el valor. La inclusión no es un resultado automático del mercado: requiere políticas, instituciones y capacidad de negociación. Esa es la conexión con la subunidad 6.2: las capacidades tecnológicas son las que permiten que una empresa o un país deje de ser un eslabón barato y se convierta en un socio con poder. <span class="source-chip">CEPAL, 2014</span> <span class="source-chip">Kaplinsky, 2000</span></p>`
              },
              {
                id: "s10",
                title: "Límites y debates",
                html: `<p>El marco de las cadenas globales de valor es poderoso, pero tiene límites. Los cinco tipos de gobernanza son tipos analíticos, no descripciones exactas: en la realidad se superponen, cambian con el tiempo y pueden coexistir en una misma cadena. Una empresa puede ser modular para un cliente y cautiva para otro; una cadena puede tener un gobernador en el diseño y otro en la logística. La fotografía estática pierde la dinámica, y la dinámica es donde ocurren las oportunidades y los bloqueos. <span class="source-chip">Gereffi, Humphrey y Sturgeon, 2005</span> <span class="source-chip">Pérez Ibáñez, 2019</span></p>
<p>También hay un debate sobre el upgrading. Que una empresa mejore sus procesos o productos no garantiza que capture más valor: puede mejorar y aun así recibir precios decrecientes si muchos competidores hacen lo mismo. La mejora funcional puede estar bloqueada por el líder, y la mejora intersectorial puede llevar a otro sector sin resolver la posición en la cadena original. El upgrading es una condición del desarrollo, no una garantía. <span class="source-chip">Humphrey y Schmitz, 2004</span> <span class="source-chip">Kaplinsky, 2000</span></p>
<p>Hay además dimensiones que el marco a veces trata como secundarias: el trabajo, el género, el medio ambiente, la fiscalidad y la política. Las cadenas distribuyen riesgos y costos, no solo ingresos; las normas laborales y ambientales pueden ser una barrera de entrada o una oportunidad de diferenciación. La gobernanza no es solo técnica: es una relación de poder que se negocia, se resiste y se impugna. <span class="source-chip">Kaplinsky, 2000</span> <span class="source-chip">CEPAL, 2014</span></p>
<p>Por último, el marco puede volverse una receta demasiado optimista. “Insertarse en las cadenas” se convirtió en un objetivo de política, pero la evidencia muestra que la inserción puede ser vulnerable, de bajo valor y dependiente de uno o dos compradores. La pregunta correcta no es solo cómo entrar, sino cómo construir capacidades, diversificar mercados y negociar mejores términos. Esa pregunta conecta con la innovación en países emergentes (6.2) y con las ventanas de oportunidad que abren las revoluciones tecnológicas (6.3). <span class="source-chip">CEPAL, 2014</span> <span class="source-chip">Pérez Ibáñez, 2019</span></p>`
              }
            ],
            flow: {
              label: "La cadena, del diseño al consumidor",
              nodes: [
                { title: "Diseño e I+D", sub: "Especificaciones, propiedad intelectual, innovación." },
                { title: "Componentes", sub: "Partes, materiales, insumos especializados." },
                { title: "Ensamble", sub: "Producción y armado, a menudo intensivo en trabajo." },
                { title: "Logística", sub: "Transporte, almacenamiento, aduanas, tiempos." },
                { title: "Marca y venta", sub: "Marketing, retail, relación con el consumidor." },
                { title: "Posventa", sub: "Servicios, repuestos, garantía, datos." }
              ],
              note: "Las rentas no se distribuyen de manera uniforme: suelen concentrarse en diseño, marca, logística y coordinación, no en el ensamble."
            },
            table: {
              title: "Los cinco tipos de gobernanza",
              headers: ["Tipo", "Complejidad", "Codificabilidad", "Capacidades del proveedor", "Coordinación y poder"],
              rows: [
                ["Mercado", "Baja", "Alta", "Altas", "Baja: precio y contratos simples."],
                ["Modular", "Alta", "Alta", "Altas", "Media: especificaciones codificadas y proveedores turn-key."],
                ["Relacional", "Alta", "Baja", "Altas", "Alta: confianza, reputación y dependencia mutua."],
                ["Cautiva", "Alta", "Alta", "Bajas", "Alta: monitoreo y control del comprador."],
                ["Jerarquía", "Alta", "Baja", "Bajas", "Máxima: integración vertical y control gerencial."]
              ]
            },
            trap: {
              title: "Error típico",
              text: "Creer que toda cadena global es una relación de explotación del centro a la periferia, o que toda inserción es automáticamente beneficiosa. La gobernanza tiene formas muy distintas y la distribución del valor depende de la posición, las capacidades y las rentas. Una cadena cautiva puede facilitar aprendizaje de proceso y producto; una modular puede dejar más autonomía pero también más competencia. La respuesta correcta casi nunca es “sí” o “no”: es “depende de cómo y en qué términos”."
            },
            teach: {
              title: "Para explicarlo desde cero",
              text: "Pensá en una remera. Alguien diseña el estampado y la marca, alguien produce la tela, alguien la cose, alguien la transporta y alguien la vende en una tienda o en una plataforma. La empresa que diseña y vende no es dueña de las máquinas de coser, pero decide qué se produce, con qué calidad y cuándo. Esa es la gobernanza: coordinar sin poseer. La pregunta del desarrollo es quién se queda con la parte grande del precio y qué aprende cada eslabón en el camino."
            },
            sources: ["Gereffi, Humphrey y Sturgeon (2005)", "Humphrey y Schmitz (2004)", "Kaplinsky (2000)", "Sturgeon (2002)", "CEPAL (2014)", "Pérez Ibáñez (2019)"]
          },
          concepts: [
            {
              term: "Cadena global de valor",
              short: "La secuencia de actividades que lleva un producto del diseño al consumidor, repartida entre países y empresas.",
              tags: ["Globalización", "Producción"],
              body: "Es la red de actividades —diseño, I+D, aprovisionamiento, producción, ensamble, logística, marketing, venta y posventa— que se distribuye entre distintos países y empresas para llevar un bien o servicio al mercado. No es solo una cadena de compras: incluye coordinación, estándares y poder.",
              connects: ["Fragmentación productiva", "Gobernanza", "Empresa líder", "Upgrading"],
              sources: ["Gereffi, Humphrey y Sturgeon (2005)", "Kaplinsky (2000)"],
              error: "Confundir cadena global con comercio internacional: exportar un producto terminado no es lo mismo que participar en una cadena fragmentada.",
              example: "Un teléfono se diseña en California, se fabrican componentes en varios países asiáticos, se ensambla en China y se vende con una marca global."
            },
            {
              term: "Gobernanza de la cadena",
              short: "La coordinación de actividades y la fijación de reglas que ejercen algunos actores sobre otros sin necesidad de poseerlos.",
              tags: ["Poder", "Coordinación"],
              body: "Es el conjunto de mecanismos por los cuales una empresa o actor define qué se produce, cómo, cuándo y con qué estándares, y monitorea el cumplimiento a lo largo de la cadena. Puede adoptar formas de mercado, modular, relacional, cautiva o jerárquica.",
              connects: ["Empresa líder", "Parámetros", "Gobernanza legislativa", "Upgrading"],
              sources: ["Gereffi, Humphrey y Sturgeon (2005)", "Humphrey y Schmitz (2004)"],
              error: "Pensar que gobernar es lo mismo que ser dueño: se puede gobernar una red de proveedores independientes.",
              example: "Un supermercado no fabrica los alimentos que vende, pero fija especificaciones, auditá a los proveedores y decide qué llega a la góndola."
            },
            {
              term: "Empresa líder",
              short: "La firma que coordina la cadena y controla el acceso al mercado, la tecnología o la marca.",
              tags: ["Poder", "Estrategia"],
              body: "Es el actor que ocupa la posición central en la cadena: define la estrategia de producto, los estándares y la división del trabajo, y suele quedarse con las actividades de mayor valor agregado. Puede ser un comprador global (retailer, marca) o un productor con tecnología clave.",
              connects: ["Gobernanza", "Buyer-driven", "Producer-driven", "Rentas"],
              sources: ["Gereffi, Humphrey y Sturgeon (2005)", "Kaplinsky (2000)"],
              error: "Suponer que la empresa líder es siempre la que fabrica: en muchas cadenas es la que vende y diseña, no la que produce.",
              example: "Nike coordina diseño, marca y marketing, mientras una red de proveedores independientes fabrica el calzado."
            },
            {
              term: "Gobernanza de mercado",
              short: "Transacciones simples y codificables, con muchos proveedores capaces y bajos costos de cambio.",
              tags: ["Gobernanza", "Mercado"],
              body: "Es la forma más cercana al mercado spot, aunque puede haber transacciones repetidas. La información es simple y codificable, los proveedores son capaces y ninguno depende del otro. El precio es la señal central y cambiar de socio es barato.",
              connects: ["Complejidad", "Codificabilidad", "Capacidades"],
              sources: ["Gereffi, Humphrey y Sturgeon (2005)", "Humphrey y Schmitz (2004)"],
              error: "Creer que todo intercambio global es de mercado: muchas cadenas tienen coordinación explícita y poder.",
              example: "La compra de materia prima estandarizada, como harina o resina, a proveedores que compiten por precio."
            },
            {
              term: "Gobernanza modular",
              short: "Proveedores turn-key que fabrican paquetes complejos con especificaciones codificadas y vínculos flexibles.",
              tags: ["Gobernanza", "Modularidad"],
              body: "Aparece cuando la complejidad y la codificabilidad son altas y los proveedores son capaces. El proveedor asume la tecnología de proceso, usa maquinaria genérica y compra componentes; el vínculo se apoya en estándares y archivos codificados. No es un mercado spot porque fluye mucha información no vinculada al precio, pero los costos de cambio son relativamente bajos.",
              connects: ["Red modular", "Proveedor turn-key", "Estándares", "Sturgeon"],
              sources: ["Gereffi, Humphrey y Sturgeon (2005)", "Sturgeon (2002)"],
              error: "Decir que la modular es un mercado porque hay varios proveedores: la diferencia está en el volumen de información codificada y en la capacidad de fabricar paquetes completos.",
              example: "Un fabricante de computadoras envía un archivo de diseño a un contratista que arma el producto, compra los componentes y lo prueba."
            },
            {
              term: "Gobernanza relacional",
              short: "Transacciones complejas y tácitas entre socios capaces, sostenidas por confianza, reputación y dependencia mutua.",
              tags: ["Gobernanza", "Confianza"],
              body: "Surge cuando la información no se puede codificar, las transacciones son complejas y los proveedores son competentes. Hay activos específicos e interdependencia; la relación se sostiene por reputación, proximidad, lazos sociales o contratos que hacen costoso el abandono. Cambiar de socio es caro.",
              connects: ["Conocimiento tácito", "Activos específicos", "Confianza", "Redes"],
              sources: ["Gereffi, Humphrey y Sturgeon (2005)", "Humphrey y Schmitz (2004)"],
              error: "Pensar que la confianza elimina el conflicto: la relación relacional puede ser cooperativa y, a la vez, asimétrica.",
              example: "Un fabricante de autopartes que trabaja durante años con una terminal, comparte planos y ajusta procesos en conjunto."
            },
            {
              term: "Gobernanza cautiva",
              short: "Proveedores pequeños y dependientes de un comprador grande, con altos costos de cambio y mucho control.",
              tags: ["Gobernanza", "Dependencia"],
              body: "Aparece cuando la complejidad y la codificabilidad son altas pero las capacidades del proveedor son bajas. El comprador debe intervenir, monitorear y controlar; el proveedor queda confinado a tareas acotadas, como el ensamble, y depende del comprador para diseño, logística y tecnología. Salir es costoso.",
              connects: ["Empresa líder", "Monitoreo", "Upgrading bloqueado", "Asimetría"],
              sources: ["Gereffi, Humphrey y Sturgeon (2005)", "Humphrey y Schmitz (2004)"],
              error: "Confundir cautiva con jerarquía: en la cautiva el proveedor es independiente, pero está atado por dependencia económica.",
              example: "Talleres de confección que cosen para una sola marca, con especificaciones detalladas y precios fijados por el comprador."
            },
            {
              term: "Jerarquía",
              short: "Integración vertical: la coordinación se hace dentro de la firma, con control gerencial.",
              tags: ["Gobernanza", "Integración"],
              body: "Es la forma en que la empresa internaliza las actividades en lugar de externalizarlas. Aparece cuando el conocimiento es tácito, el producto es complejo, no hay proveedores capaces o hay que proteger propiedad intelectual. El control va de la casa matriz a las subsidiarias y de los gerentes a los subordinados.",
              connects: ["Integración vertical", "Costos de transacción", "Propiedad intelectual"],
              sources: ["Gereffi, Humphrey y Sturgeon (2005)", "Sturgeon (2002)"],
              error: "Creer que la jerarquía desapareció con la globalización: sigue siendo central en actividades con conocimiento tácito o activos muy específicos.",
              example: "Una automotriz que desarrolla y fabrica internamente su motor exclusivo para no compartir la tecnología."
            },
            {
              term: "Upgrading",
              short: "El pasaje a actividades que generan más ingresos: proceso, producto, función o sector.",
              tags: ["Desarrollo", "Aprendizaje"],
              body: "Es el proceso por el cual una empresa o un grupo de empresas mejora su posición en la cadena. Puede ser de proceso (producir mejor), de producto (bienes más complejos), funcional (asumir diseño, marca o marketing) o intersectorial (usar capacidades en otro sector). No es automático ni garantiza mayor captura de valor.",
              connects: ["Capacidades", "Gobernanza", "Rentas", "Aprendizaje"],
              sources: ["Humphrey y Schmitz (2004)", "Kaplinsky (2000)"],
              error: "Pensar que todo upgrading es bueno: se puede mejorar el proceso y aun así perder valor si los precios caen o el líder bloquea la función.",
              example: "Pasar de coser para una marca extranjera a diseñar una colección propia y venderla con marca regional."
            },
            {
              term: "Rentas de la cadena",
              short: "Ingresos extraordinarios que provienen de barreras a la entrada y se concentran en ciertos eslabones.",
              tags: ["Distribución", "Rentas"],
              body: "Son los retornos que superan lo que se obtendría en una actividad competitiva. Pueden venir de la escasez natural, la tecnología, las patentes, las marcas, las capacidades o el control de la coordinación. Son dinámicas: se erosionan con la competencia y se recrean en nuevas actividades.",
              connects: ["Barreras a la entrada", "Kaplinsky", "Upgrading", "Desigualdad"],
              sources: ["Kaplinsky (2000)", "Gereffi, Humphrey y Sturgeon (2005)"],
              error: "Mirar solo el volumen exportado y no el valor retenido: un país puede exportar mucho y capturar pocas rentas.",
              example: "Las rentas de una zapatilla están más en la marca y el diseño que en el costo de coserla."
            },
            {
              term: "Red modular y proveedor turn-key",
              short: "Una red de producción donde la manufactura se externaliza a proveedores globales con capacidad genérica.",
              tags: ["Modularidad", "Producción"],
              body: "La red modular separa la innovación de producto de la inversión en manufactura. Los proveedores turn-key asumen la fabricación completa de un paquete: compran componentes, organizan el proceso, prueban y entregan listo para vender. Su capacidad es genérica y sirve a varios clientes, lo que reduce la especificidad de activos y los costos de cambio.",
              connects: ["Gobernanza modular", "Sturgeon", "Economías de escala", "Electrónica"],
              sources: ["Sturgeon (2002)", "Gereffi, Humphrey y Sturgeon (2005)"],
              error: "Creer que el proveedor turn-key es un taller de ensamble sin capacidades: su fuerza está en la ingeniería de proceso y la escala.",
              example: "Los grandes contratistas electrónicos que fabrican para Apple, Cisco y Ericsson en las mismas plantas."
            },
            {
              term: "Cadena inclusiva",
              short: "Una cadena de valor que incorpora a las pymes y distribuye capacidades y empleo de calidad.",
              tags: ["Desarrollo", "Pymes"],
              body: "Es una cadena que no se limita a conectar a unos pocos exportadores, sino que busca que pequeños y medianos proveedores participen, cumplan estándares y acumulen capacidades, con más y mejor empleo. Requiere política industrial, infraestructura, financiamiento, formación y coordinación público-privada.",
              connects: ["CEPAL", "Pymes", "Política industrial", "Upgrading"],
              sources: ["CEPAL (2014)", "Kaplinsky (2000)"],
              error: "Pensar que la inclusión se logra solo con un programa de proveedores: sin capacidades, financiamiento y estándares, la pyme no puede sostener la relación.",
              example: "Un programa que ayuda a pequeños productores lácteos a certificar calidad y vender a una cadena regional."
            }
          ],
          practice: {
            label: "Práctica · caso compuesto de la cadena del vino",
            title: "Una bodega mendocina frente a dos compradores",
            caseTitle: "Bulk, marca propia o nicho orgánico: ¿cómo subir en la cadena?",
            caseHtml: `<p><strong>Bodega Alto Valle</strong> es una empresa mediana de Mendoza. Produce uvas de buena calidad y vende la mayor parte de su vino a granel a un broker que abastece la marca propia de un supermercado británico. El broker fija las especificaciones, audita la planta y controla la etiqueta; la bodega casi no participa del diseño ni del marketing. Una parte menor se vende fraccionada con una marca regional en Argentina.</p>
<p>Aparece un nuevo importador europeo especializado en vinos orgánicos y biodinámicos. Ofrece un contrato de tres años para un nicho de alto valor, pero exige certificación orgánica, trazabilidad completa, envases especiales y participación en ferias. El contrato es atractivo, aunque requiere inversiones y capacidades que la bodega no tiene del todo. Al mismo tiempo, el broker histórico presiona por precios más bajos porque aparecieron competidores chilenos y sudafricanos.</p>
<p>El caso es compuesto y está inspirado en la cadena exportadora del vino argentino; sirve para aplicar la grilla de gobernanza, upgrading y rentas, no para describir una empresa real.</p>`,
            steps: [
              {
                q: "Mapeá la cadena y decí qué tipo de gobernanza caracteriza la relación con cada comprador.",
                hint: "Mirá quién fija las especificaciones, quién es dueño de la marca, cuánta información se codifica y qué costaría cambiar de comprador.",
                answer: "Con el broker y la marca propia del supermercado, la relación se parece a una gobernanza cautiva o cuasi jerárquica: el comprador fija especificaciones, audita y controla la etiqueta, y la bodega depende de pocos clientes. Con el importador de nicho, la relación puede evolucionar hacia una gobernanza relacional: hay más información tácita, confianza, certificación y dependencia mutua, aunque el importador sigue teniendo poder de mercado."
              },
              {
                q: "Aplicá los tres determinantes de Gereffi et al. a los dos vínculos.",
                hint: "Complejidad de la transacción, posibilidad de codificar la información y capacidades del proveedor.",
                answer: "En el bulk, la complejidad es media, la información está bastante codificada (especificaciones, análisis, plazos) y las capacidades de la bodega alcanzan; por eso el comprador puede monitorear y cambiar de proveedor. En el nicho orgánico, la complejidad sube (trazabilidad, biodinamia, marketing, ferias), parte del conocimiento es tácito y las capacidades de la bodega todavía son incompletas; eso vuelve más probable una relación relacional o una cuasi jerarquía con asistencia del importador."
              },
              {
                q: "Clasificá el upgrading que implica cada opción y las capacidades que habría que construir.",
                hint: "Proceso, producto, funcional e intersectorial.",
                answer: "La certificación orgánica y la trazabilidad son upgrading de proceso; el vino de nicho es upgrading de producto; desarrollar una marca propia y participar de ferias es upgrading funcional; usar las capacidades del vino para otros productos (jugos, cosméticos, turismo) sería intersectorial. La bodega necesitaría capacidades de gestión, marketing, certificación, logística y negociación, además de inversión en planta y envases."
              },
              {
                q: "¿Quién captura las rentas en cada alternativa y qué riesgos aparecen?",
                hint: "Pensá en marca, diseño, certificación, retail, origen y poder de negociación.",
                answer: "En el bulk, la renta se concentra en el broker y el supermercado, que controlan la marca y el acceso al mercado; la bodega compite por precio y queda expuesta a la presión de otros países. En el nicho, hay más renta potencial en el origen, la certificación y la historia del producto, pero también riesgos: inversión hundida, dependencia de un importador, volatilidad de la demanda y costos de cumplir estándares. La marca propia permite capturar más renta, pero exige capacidades y escala de marketing."
              },
              {
                q: "Diseñá una estrategia para la bodega y una política pública que la acompañe. Señalá los límites.",
                hint: "Combiná diversificación de clientes, capacidades, financiamiento, estándares y coordinación con otros productores.",
                answer: "La estrategia podría combinar el contrato de nicho con la marca regional y una diversificación de clientes, para no quedar cautiva de un solo comprador. Habría que invertir en certificación, enología, marketing y logística, y asociarse con otros productores para compartir costos de ferias y certificación. La política pública puede aportar financiamiento, asistencia técnica, promoción, infraestructura y estándares. Los límites: la bodega no controla el mercado, el nicho puede saturarse y la inversión puede no recuperarse si el contrato se rompe."
              }
            ],
            closing: "Cerrá la práctica con una frase: ¿qué cambiaría en la gobernanza si la bodega lograra vender su marca propia en el exterior?"
          },
          quiz: {
            intro: "Cuatro preguntas para distinguir los tipos de gobernanza y entender por qué la inserción no es lo mismo que el desarrollo.",
            questions: [
              {
                level: "Distinción",
                q: "¿Por qué la gobernanza modular no es un mercado spot?",
                options: [
                  "Porque el proveedor es dueño de la marca",
                  "Porque hay un flujo denso de información codificada y proveedores turn-key con capacidades específicas, aunque los costos de cambio sean bajos",
                  "Porque el comprador posee las plantas del proveedor",
                  "Porque no existen estándares técnicos"
                ],
                correct: 1,
                explain: "La modular se parece al mercado en la flexibilidad, pero se diferencia por el volumen de información no vinculada al precio y por la capacidad del proveedor de fabricar paquetes completos."
              },
              {
                level: "Aplicación",
                q: "Información tácita, transacciones complejas y proveedores muy capaces. ¿Qué gobernanza es más probable?",
                options: [
                  "Mercado",
                  "Cautiva",
                  "Relacional",
                  "Jerarquía"
                ],
                correct: 2,
                explain: "Si la información no se codifica pero el proveedor es capaz, la relación se sostiene por confianza, reputación y dependencia mutua: gobernanza relacional."
              },
              {
                level: "Conceptual",
                q: "Una empresa que pasa de ensamblar para una marca extranjera a diseñar y vender con marca propia realiza principalmente...",
                options: [
                  "Upgrading de proceso",
                  "Upgrading de producto",
                  "Upgrading funcional",
                  "Upgrading intersectorial"
                ],
                correct: 2,
                explain: "Asumir diseño, marketing y marca es una nueva función en la cadena. El upgrading de proceso mejora la eficiencia; el de producto, la complejidad del bien; el intersectorial, el pasaje a otro sector."
              },
              {
                level: "Razonamiento",
                q: "¿Por qué la inserción en una cadena global no garantiza desarrollo?",
                options: [
                  "Porque las cadenas globales no generan empleo",
                  "Porque las rentas se concentran en eslabones intangibles y de coordinación, y el upgrading puede estar bloqueado por el líder",
                  "Porque todos los países producen lo mismo",
                  "Porque el comercio internacional siempre reduce los salarios"
                ],
                correct: 1,
                explain: "La participación puede ser intensa y de bajo valor. Lo decisivo es qué eslabón se ocupa, qué capacidades se acumulan, qué rentas se capturan y qué poder de negociación se tiene."
              }
            ],
            open: [
              {
                level: "Comparación",
                q: "Compará una cadena cautiva con una modular usando los tres determinantes de Gereffi et al.",
                guide: "En la cautiva, complejidad y codificabilidad son altas pero las capacidades del proveedor son bajas; el comprador controla. En la modular, las capacidades son altas y el proveedor asume paquetes completos; el vínculo es flexible y se apoya en estándares. La diferencia clave es la capacidad del proveedor y el grado de dependencia."
              },
              {
                level: "Aplicación",
                q: "Elegí un producto que consumas y reconstruí su cadena. ¿Quién gobierna y dónde se concentran las rentas?",
                guide: "La respuesta debe identificar actividades, países, empresas líderes y eslabones de mayor valor. No alcanza con decir “lo hace una multinacional”: hay que mostrar quién fija especificaciones, quién posee la marca y qué parte del precio queda en cada etapa."
              },
              {
                level: "Límites",
                q: "¿Qué no explica el marco de las cadenas globales de valor?",
                guide: "No explica por sí solo el cambio tecnológico, las instituciones domésticas, el poder militar o geopolítico, las relaciones laborales o la distribución dentro de los hogares. Es una lente poderosa sobre la coordinación y el valor, pero necesita complementarse con teorías de capacidades, instituciones y conflicto."
              }
            ]
          },
          review: {
            stats: [
              { value: "1", label: "página de ideas clave" },
              { value: "12", label: "conceptos para dominar" },
              { value: "7", label: "días de repaso" }
            ],
            summary: [
              { lead: "La producción se fragmentó.", text: "Las empresas líderes externalizaron la manufactura y se quedaron con diseño, marca, marketing y coordinación." },
              { lead: "Gobernar no es poseer.", text: "La cadena se coordina con reglas, estándares y monitoreo, no solo con propiedad." },
              { lead: "Hay cinco tipos de gobernanza.", text: "Mercado, modular, relacional, cautiva y jerarquía, según complejidad, codificabilidad y capacidades." },
              { lead: "El poder fija parámetros.", text: "Qué, cómo y cuándo se produce; legislativo, judicial y ejecutivo en la clasificación de Kaplinsky." },
              { lead: "Upgrading tiene cuatro caminos.", text: "Proceso, producto, funcional e intersectorial; la gobernanza abre unos y bloquea otros." },
              { lead: "Las rentas son dinámicas.", text: "Se erosionan con la competencia y se corren hacia diseño, marca, logística y coordinación." },
              { lead: "Inserción no es desarrollo.", text: "Importa cómo y en qué términos se participa, y qué capacidades se acumulan." },
              { lead: "La modularidad separa innovación y manufactura.", text: "Los proveedores turn-key y las redes modulares reorganizan la industria y el poder." }
            ],
            errors: [
              { error: "Decir que toda cadena global es explotación del centro a la periferia", fix: "Hay formas muy distintas de gobernanza y las empresas locales pueden aprender y subir; lo que varía es el tipo de relación y la distribución del valor." },
              { error: "Confundir modular con mercado spot", fix: "La modular tiene información codificada compleja y proveedores turn-key; la flexibilidad no elimina la coordinación." },
              { error: "Creer que la inserción garantiza desarrollo", fix: "La posición en la cadena y las rentas capturadas son decisivas; insertarse en el eslabón barato puede reproducir la dependencia." },
              { error: "Pensar que el upgrading funcional siempre es posible", fix: "El líder puede bloquearlo porque choca con su competencia central; hay que diversificar mercados y construir capacidades." }
            ],
            cards: [
              { front: "Cinco tipos de gobernanza", back: "Mercado, modular, relacional, cautiva y jerarquía. Van de menor a mayor coordinación explícita y asimetría de poder." },
              { front: "Tres determinantes", back: "Complejidad de las transacciones, capacidad de codificar la información y capacidades de los proveedores." },
              { front: "Upgrading", back: "Proceso (producir mejor), producto (más complejo), funcional (nuevas funciones) e intersectorial (otro sector)." },
              { front: "Rentas", back: "Ingresos extraordinarios por barreras a la entrada. Son dinámicas y se concentran en intangibles y coordinación." },
              { front: "Red modular", back: "Separa innovación de manufactura; proveedores turn-key con capacidad genérica y vínculos codificados." },
              { front: "Cadena inclusiva", back: "Incorporación de pymes con capacidades, empleo de calidad y distribución del valor; requiere política industrial y coordinación." }
            ],
            plan: [
              { day: "Día 1", task: "Leer la teoría y hacer un mapa de los cinco tipos de gobernanza", min: "35 min" },
              { day: "Día 2", task: "Explicar los tres determinantes con un ejemplo propio", min: "20 min" },
              { day: "Día 3", task: "Completar la tabla de gobernanza y comparar modular/cautiva", min: "25 min" },
              { day: "Día 4", task: "Resolver el caso de la bodega", min: "30 min" },
              { day: "Día 5", task: "Autoevaluación y corrección de errores", min: "20 min" },
              { day: "Día 6", task: "Flashcards y repaso de rentas y upgrading", min: "20 min" },
              { day: "Día 7", task: "Explicar la cadena de un producto cotidiano de punta a punta", min: "25 min" }
            ],
            session: [
              { time: "0–15", title: "Encuadre", text: "Leer la idea clave y anotar la diferencia entre producir, coordinar y capturar valor." },
              { time: "15–45", title: "Teoría activa", text: "Leer las secciones 1 a 4 y completar la tabla de los cinco tipos de gobernanza." },
              { time: "45–60", title: "Conceptos", text: "Conectar gobernanza, empresa líder, upgrading y rentas en un mapa." },
              { time: "60–78", title: "Práctica", text: "Analizar la bodega con los tres determinantes y los cuatro tipos de upgrading." },
              { time: "78–87", title: "Autoevaluación", text: "Hacer el quiz y justificar por qué las opciones incorrectas no sirven." },
              { time: "87–90", title: "Cierre", text: "Escribir una frase que explique por qué insertarse no es lo mismo que desarrollarse." }
            ],
            stuck: [
              { title: "No entendés la diferencia entre modular y mercado", source: "Gereffi, Humphrey y Sturgeon (2005), sección 2 y tabla 1; en esta unidad, sección 3 y concepto «Gobernanza modular»." },
              { title: "Se te mezclan cautiva y jerarquía", source: "Gereffi et al. (2005), definición de los cinco tipos; Humphrey y Schmitz (2004), sección 3." },
              { title: "No ves por qué el upgrading funcional se bloquea", source: "Humphrey y Schmitz (2004), caso del valle del Sinos y sección 4." }
            ]
          },
          sources: [
            {
              author: "Gereffi, G.; Humphrey, J.; Sturgeon, T.",
              year: "2005",
              title: "The governance of global value chains",
              cite: "Review of International Political Economy, 12(1), 78-104.",
              type: "Artículo",
              priority: "base",
              what: "La tipología de los cinco tipos de gobernanza, los tres determinantes y la dinámica de las cadenas.",
              used: ["Teoría", "Conceptos", "Práctica", "Autoevaluación"],
              file: "../Documentos de clases/6 A/Gereffy Humphrey y Sturgeon (2005)-The governance of global value chains.pdf"
            },
            {
              author: "Humphrey, J.; Schmitz, H.",
              year: "2004",
              title: "El poder y la mejora de las cadenas globales de valor",
              cite: "Versión en español de «Governance and upgrading: linking industrial cluster and global value chain research», IDS Working Paper 120.",
              type: "Artículo",
              priority: "base",
              what: "El poder como fijación de parámetros, los cuatro tipos de relación y los efectos sobre el upgrading.",
              used: ["Teoría", "Conceptos", "Práctica"],
              file: "../Documentos de clases/6 A/Humphfrey_Schmitz-_2004-INTI.pdf"
            },
            {
              author: "Kaplinsky, R.",
              year: "2000",
              title: "Globalisation and Unequalisation: What Can Be Learned from Value Chain Analysis?",
              cite: "Journal of Development Studies, 37(2), 117-146.",
              type: "Artículo",
              priority: "base",
              what: "Las rentas, la gobernanza legislativa, judicial y ejecutiva, y la relación entre cadenas y desigualdad.",
              used: ["Teoría", "Conceptos", "Repaso"],
              file: "../Documentos de clases/6 A/Kaplinsky (2000) Globalisation and Unequalisation.pdf"
            },
            {
              author: "Sturgeon, T. J.",
              year: "2002",
              title: "Modular production networks: a new American model of industrial organization",
              cite: "Industrial and Corporate Change, 11(3), 451-496.",
              type: "Artículo",
              priority: "base",
              what: "Las redes modulares, los proveedores turn-key y la separación entre innovación y manufactura.",
              used: ["Teoría", "Conceptos", "Práctica"],
              file: "../Documentos de clases/6 A/Sturgeon (2002) Modular production network.pdf"
            },
            {
              author: "CEPAL",
              year: "2014",
              title: "Integración regional: hacia una estrategia de cadenas de valor inclusivas",
              cite: "LC/G.2594(SES.35/11), Santiago de Chile, mayo de 2014.",
              type: "Libro",
              priority: "base",
              what: "El diagnóstico de América Latina, las cadenas inclusivas, la política industrial y la integración regional.",
              used: ["Teoría", "Conceptos", "Práctica", "Repaso"],
              file: "../Documentos de clases/6 A/CEPAL (2014) Integración regional-hacia una estrategia de cadena de valor inclusiva.pdf"
            },
            {
              author: "Pérez Ibáñez, J.",
              year: "2019",
              title: "Cadenas globales de valor: una revisión bibliográfica",
              cite: "Semestre Económico, 22(51), 63-81.",
              type: "Artículo",
              priority: "ampliatoria",
              what: "Un estado del arte sobre gobernanza y upgrading; útil para ordenar el debate y ver sus límites.",
              used: ["Ampliación", "Repaso"],
              file: "../Bibliografía ampliatoria TFyOI/Unidad V/UnV. Pérez Ibáñez (2019).pdf"
            }
          ]
        },
        {
          id: "6b",
          code: "6.2",
          letter: "B",
          accent: "indigo",
          title: "Innovación en países emergentes",
          desc: "Capacidades tecnológicas, aprendizaje y el caso Hyundai.",
          tagline: "La transferencia de tecnología no alcanza: hay que construir la capacidad de absorberla, adaptarla y transformarla en algo propio.",
          minutes: 55,
          sourceCount: 3,
          theory: {
            title: "Cómo se aprende a producir cuando no se está en la frontera",
            lead: "En los países centrales, la innovación suele pensarse como el resultado de laboratorios y grandes presupuestos de I+D. En los países emergentes, el punto de partida es otro: la tecnología ya existe en algún lugar, pero la empresa local no sabe usarla. La pregunta central no es cómo inventar la próxima tecnología, sino cómo construir las capacidades para entender, operar, adaptar y, más tarde, mejorar una tecnología que se importa.",
            keyIdea: "La tecnología no es un paquete que se compra y se usa: es conocimiento, en buena parte tácito, incorporado en personas, rutinas y organización. Por eso la transferencia no basta. La capacidad de absorción combina el conocimiento previo de la firma con la intensidad del esfuerzo que invierte en aprender, y esa combinación se construye a lo largo de etapas.",
            keyIdeaSource: "Síntesis de Lall (1992); Kim (1998)",
            sections: [
              {
                id: "s1",
                title: "La tecnología no es una función de producción",
                html: `<p>La teoría neoclásica suele tratar la tecnología como un conjunto de técnicas disponibles para todas las empresas, como si todas operaran sobre la misma función de producción. Lall rechaza ese supuesto. El conocimiento tecnológico no está distribuido de manera uniforme: es específico de cada firma, en buena parte tácito y difícil de imitar o transferir. Dos empresas pueden comprar la misma máquina y obtener resultados distintos porque saben cosas distintas sobre cómo usarla. <span class="source-chip">Lall, 1992</span></p>
<p>La razón es que la tecnología no es solo información codificada en manuales o planos. Incluye habilidades, rutinas, formas de organizar el trabajo y criterios para resolver problemas que no están escritos en ninguna parte. Cuando una empresa compra una tecnología, recibe una parte explícita —equipos, planos, especificaciones— y una parte tácita que solo se adquiere con práctica, observación y esfuerzo. Por eso la transferencia siempre requiere aprendizaje, y el grado de dominio que se alcanza varía de una firma a otra. <span class="source-chip">Lall, 1992</span></p>
<p>Lall retoma la tradición evolucionista de Nelson y Winter. Las firmas no operan sobre una función de producción, sino en un punto de una trayectoria tecnológica, y su progreso es “localizado”: avanza alrededor de lo que ya sabe hacer. Cuanto más cerca está del conocimiento previo, más fácil le resulta aprender; cuanto más lejos, más esfuerzo necesita. Esa es la base microeconómica de la heterogeneidad entre empresas y entre países. <span class="source-chip">Lall, 1992</span></p>
<p>La consecuencia es importante para el desarrollo: no existe un “salto” automático desde la importación de tecnología a la innovación. Hay un proceso de acumulación, con etapas, inversiones y fracasos. La pregunta útil no es “¿qué tecnología tiene el país?”, sino “¿qué sabe hacer la empresa con la tecnología que tiene y qué está haciendo para aprender más?”. <span class="source-chip">Lall, 1992</span> <span class="source-chip">Kim, 1998</span></p>`
              },
              {
                id: "s2",
                title: "La matriz de Lall: inversión, producción y vínculos",
                html: `<p>Para ordenar ese aprendizaje, Lall propone una matriz de capacidades tecnológicas a nivel de firma. Las columnas son las grandes funciones técnicas; las filas, los grados de complejidad. Las tres áreas son <strong>inversión</strong>, <strong>producción</strong> y <strong>vínculos</strong>. No todas las funciones tienen que estar dentro de la empresa, pero hay un núcleo que sí debe internalizarse para competir. <span class="source-chip">Lall, 1992</span></p>
<p>Las capacidades de <strong>inversión</strong> son las que permiten identificar, preparar, obtener, diseñar, construir, equipar, dotar de personal y poner en marcha una planta. Incluyen estudios de prefactibilidad y factibilidad, selección del sitio, búsqueda de la fuente de tecnología, negociación de contratos, compra de equipos, ingeniería detallada, capacitación y comisionamiento. De ellas dependen el costo del proyecto, la escala, la mezcla de productos y la comprensión inicial de la tecnología. <span class="source-chip">Lall, 1992</span></p>
<p>Las capacidades de <strong>producción</strong> abarcan la ingeniería de proceso, la de producto y la industrial. La primera incluye operación, control de calidad, mantenimiento preventivo, puesta a punto y asimilación; la segunda, asimilación del diseño, adaptaciones menores, mejoras de calidad y licencias de nuevos productos; la tercera, flujo de trabajo, programación, estudios de tiempos y movimientos, control de inventarios y monitoreo de productividad. Son las capacidades que determinan no solo cómo se opera una tecnología, sino cómo se mejora. <span class="source-chip">Lall, 1992</span></p>
<p>Las capacidades de <strong>vínculos</strong> son las que permiten transmitir y recibir información, habilidades y tecnología de proveedores, subcontratistas, consultores, servicios técnicos e instituciones. Incluyen compras locales, intercambio con proveedores, transferencia de tecnología a proveedores, diseño coordinado, vínculos con universidades y centros de investigación, capacidad de gestión de proyectos llave en mano, I+D conjunta y licenciamiento. Son las que conectan a la empresa con el resto del sistema productivo y las que más influyen en la difusión del conocimiento. <span class="source-chip">Lall, 1992</span></p>
<p>La matriz no es una receta de secuencia obligatoria. Distintas empresas y tecnologías siguen caminos distintos, y no todas las funciones se realizan internamente: algunas se compran a consultores o proveedores especializados. Lo que distingue a una firma “tecnológicamente madura” es saber cuál es su alcance eficiente, profundizar sus capacidades con la experiencia y complementarse selectivamente con otros. <span class="source-chip">Lall, 1992</span></p>`
              },
              {
                id: "s3",
                title: "Tres niveles: rutinario, adaptativo e innovador",
                html: `<p>La matriz se ordena en tres niveles de complejidad. El primero es el <strong>rutinario o de experiencia</strong>: las capacidades necesarias para operar una planta con las rutinas básicas, sin buscar cambios importantes. Es el nivel de la producción estable, el control de calidad elemental y el mantenimiento. Se aprende haciendo, con la experiencia acumulada. <span class="source-chip">Lall, 1992</span></p>
<p>El segundo es el <strong>adaptativo o duplicativo</strong>, basado en la búsqueda. La empresa no solo opera: busca mejorar, adaptar el producto al mercado, estirar la capacidad de los equipos, reducir costos, introducir cambios menores. Requiere capacidad de búsqueda, de diagnóstico y de experimentación. Es el nivel en el que se aprende a “hacer propio” lo que se importó. <span class="source-chip">Lall, 1992</span></p>
<p>El tercero es el <strong>innovador o de riesgo</strong>, basado en la investigación. La empresa diseña sus propios procesos y productos, realiza I+D, busca conocimiento nuevo y asume el riesgo de que el resultado no sea comercialmente exitoso. Es el nivel de la frontera tecnológica. No es el único valioso: la mayor parte del aprendizaje en países emergentes ocurre en los dos primeros niveles, y ese aprendizaje puede ser muy significativo. <span class="source-chip">Lall, 1992</span></p>
<p>Lall advierte que la secuencia no es necesaria ni universal. La naturaleza del aprendizaje —experiencia acumulada, resolución de problemas, aportes externos o investigación formal— sugiere que el dominio suele avanzar de lo simple a lo complejo, pero distintas firmas y tecnologías siguen secuencias diferentes. Una empresa puede ser innovadora en un producto y rutinaria en otro. Lo importante es no confundir “imitación” con “copia pasiva”: la adaptación y la mejora son formas genuinas de creación de capacidades. <span class="source-chip">Lall, 1992</span></p>`
              },
              {
                id: "s4",
                title: "Aprendizaje, conocimiento tácito y capacidad de absorción",
                html: `<p>Kim parte de una pregunta organizational: ¿cómo hace una empresa para aprender? Su respuesta se apoya en el concepto de <strong>capacidad de absorción</strong>, tomado de Cohen y Levinthal. La capacidad de absorción tiene dos elementos: el <strong>conocimiento previo</strong> disponible en la organización y la <strong>intensidad del esfuerzo</strong> que sus miembros invierten en resolver problemas. No alcanza con estar expuesto a la tecnología: hay que internalizarla. <span class="source-chip">Kim, 1998</span></p>
<p>El conocimiento previo es la base sobre la que se interpreta lo nuevo. Cuanto más relevante sea ese conocimiento en relación con la dificultad de la tarea, más fácil será asimilarla. Pero el conocimiento previo no es solo explícito: la parte más importante es <strong>tácita</strong>, está incorporada en las personas y en las rutinas, y solo se adquiere con experiencia, observación, imitación y práctica. La conversión entre conocimiento tácito y explícito —socialización, externalización, combinación e internalización— es el mecanismo por el cual el aprendizaje individual se vuelve organizacional. <span class="source-chip">Kim, 1998</span></p>
<p>La intensidad del esfuerzo es la cantidad de energía que la organización dedica a resolver problemas. La exposición a conocimiento externo es insuficiente si no hay un esfuerzo deliberado por internalizarlo. Aprender a resolver problemas requiere muchas pruebas con problemas relacionados; por eso el esfuerzo sostenido, la interacción entre miembros y el tiempo son decisivos. La capacidad de absorción se representa como una matriz de dos por dos: conocimiento previo alto o bajo, esfuerzo alto o bajo. <span class="source-chip">Kim, 1998</span></p>
<p>La matriz es dinámica. Con conocimiento previo alto y esfuerzo alto, la capacidad de absorción es alta y crece. Con conocimiento previo alto y esfuerzo bajo, se erosiona porque el conocimiento se vuelve obsoleto. Con conocimiento previo bajo y esfuerzo alto, la empresa puede adquirir capacidad y moverse hacia arriba. Con ambos bajos, la capacidad es baja y cae. La implicación es clara: no hay aprendizaje sin esfuerzo, pero el esfuerzo solo funciona si se apoya en una base de conocimiento y en la práctica. <span class="source-chip">Kim, 1998</span></p>`
              },
              {
                id: "s5",
                title: "Las etapas del catching-up: imitar, imitar creativamente, innovar",
                html: `<p>Kim distingue tres orientaciones de aprendizaje en el proceso de <em>catching-up</em>. La <strong>imitación duplicativa</strong> consiste en reproducir la tecnología importada con poca modificación; el objetivo es dominar la operación y cumplir especificaciones. La <strong>imitación creativa</strong> implica adaptar, mejorar y combinar tecnologías para responder a mercados y condiciones locales; ya no se copia, se reinterpreta. La <strong>innovación</strong> implica generar tecnología propia, diseñar productos y procesos nuevos y competir en la frontera. <span class="source-chip">Kim, 1998</span></p>
<p>Cada etapa requiere un nivel distinto de conocimiento previo y de esfuerzo. La imitación duplicativa puede aprenderse con experiencia y asistencia del proveedor; la creativa exige capacidad de búsqueda, ingeniería y organización; la innovación requiere investigación, diseño propio y tolerancia al fracaso. La orientación de aprendizaje no es solo una decisión técnica: es una decisión estratégica sobre qué quiere ser la empresa y cómo quiere competir. <span class="source-chip">Kim, 1998</span></p>
<p>Una de las observaciones más interesantes de Kim es que las empresas de países en desarrollo suelen <strong>invertir la secuencia</strong> de I+D de los países avanzados. En lugar de investigación, desarrollo e ingeniería (I+D+i), empiezan por la ingeniería de producción de tecnologías importadas, luego pasan al desarrollo y solo más tarde a la investigación. Hyundai empezó ensamblando, siguió con el diseño de un auto coreano y terminó desarrollando motores propios. La secuencia no es un atajo: es una forma de acumular capacidades desde la base. <span class="source-chip">Kim, 1998</span></p>
<p>El aprendizaje tampoco es lineal. Puede ser incremental, a lo largo de la trayectoria existente, o discontinuo, cuando la empresa percibe una crisis y cambia de rumbo. Las crisis pueden ser externas —una recesión, un cambio tecnológico, una política pública— o construidas internamente por la dirección. En ambos casos, la pregunta es si la organización logra convertirlas en oportunidad o si las sufre como destrucción. <span class="source-chip">Kim, 1998</span></p>`
              },
              {
                id: "s6",
                title: "Hyundai (I): de ensamblar Ford a diseñar un auto propio",
                html: `<p>Hyundai es el caso paradigmático de Kim. En 1967, sin experiencia en automóviles, formó un equipo con ingenieros de su división de construcción y con técnicos reclutados de otras automotrices. Esa mezcla le dio variedad de conocimientos y una base inicial de conocimiento tácito. En 1968 firmó un acuerdo con Ford para ensamblar autos compactos en forma semidesarmada (SKD). Ford transfirió tecnología “empaquetada”: planos, especificaciones, manuales, capacitación y diez ingenieros en planta. <span class="source-chip">Kim, 1998</span></p>
<p>Hyundai no se quedó en la copia. Construyó la planta en seis meses, el tiempo más corto entre 118 plantas de ensamble de Ford en el mundo, con equipos que trabajaban dieciséis horas por día, siete días a la semana. Mientras se construía la planta, los equipos de producción desarmaban y rearmaban dos autos, un colectivo y un camión para rutinizar el proceso. Cuando la planta estuvo lista, los trabajadores ya tenían conocimiento tácito suficiente para ensamblar con mínimo error. <span class="source-chip">Kim, 1998</span></p>
<p>El segundo salto vino con la decisión del gobierno coreano de promover un auto nacional. En 1973, Hyundai presentó un plan para una planta de 80.000 unidades, cuando producía 5.426 autos. La empresa carecía de capacidad de absorción para el diseño, así que buscó tecnología “desempaquetada” en 26 empresas de cinco países: diseño en Italia y Japón, estampado en Japón y Estados Unidos, fundición en Reino Unido y Alemania, motores en Japón y Reino Unido, componentes en Estados Unidos y Reino Unido. Contrató a Italdesign para el estilo y a Mitsubishi para motor, transmisión y eje trasero, y trajo expertos británicos para integrar el sistema. <span class="source-chip">Kim, 1998</span></p>
<p>El resultado fue el Pony, lanzado en 1975 con 90% de contenido local. Corea se convirtió en el segundo país de Asia con un auto propio y Hyundai exportó decenas de miles de unidades. La clave no fue solo comprar licencias: fue organizar la tecnología, integrar componentes de múltiples fuentes y asumir la responsabilidad del resultado. Ese esfuerzo de integración es el que convierte conocimiento disperso en capacidad propia. <span class="source-chip">Kim, 1998</span></p>`
              },
              {
                id: "s7",
                title: "Hyundai (II): crisis construction y el cambio de orientación",
                html: `<p>La tesis más conocida de Kim es la <strong>construcción de crisis</strong>. Una crisis es una brecha entre el desempeño actual y el que se necesita para sobrevivir. Puede ser evocada por el entorno o construida por la dirección. Hyundai construyó crisis deliberadamente: fijó metas ambiciosas que exigían un salto de aprendizaje, con plazos cortos y consecuencias visibles. No eran crisis artificiales para castigar, sino desafíos que obligaban a la organización a intensificar el esfuerzo y a cambiar la forma de aprender. <span class="source-chip">Kim, 1998</span></p>
<p>La primera crisis fue la construcción de la planta en tiempo récord. La segunda fue el auto coreano: un objetivo que parecía imposible para una empresa que solo ensamblaba. La tercera fue el desarrollo de un auto de tracción delantera para el mercado estadounidense, el Excel, en respuesta a la crisis del petróleo. La cuarta fue el desarrollo del Accent, el primer auto diseñado íntegramente por Hyundai, y del motor alpha, cuando Mitsubishi se negó a compartir su tecnología más avanzada. <span class="source-chip">Kim, 1998</span></p>
<p>Las crisis funcionaron porque cambiaron la <strong>orientación de aprendizaje</strong>. Sin crisis, la empresa se quedaba en la imitación duplicativa, con retornos decrecientes del esfuerzo. La crisis abría una nueva frontera de aprendizaje y aumentaba el retorno del esfuerzo. Para que eso ocurriera, la dirección tenía que generar consenso sobre la meta, dar recursos y sostener la interacción entre los equipos. La crisis no reemplaza el conocimiento previo: lo pone a prueba y lo obliga a crecer. <span class="source-chip">Kim, 1998</span></p>
<p>El desarrollo del motor alpha muestra el costo del aprendizaje. El equipo no tenía experiencia en diseño de motores; consiguió literatura, se capacitó, contrató a Ricardo Engineering y a expertos coreanos formados en Estados Unidos, y durante catorce meses hizo pruebas y errores. El primer prototipo se rompió; siguieron once más. Hubo 288 cambios de diseño y 324 motores de prueba antes de llegar a un motor competitivo. La crisis no garantizó el éxito: lo hizo posible porque hubo recursos, tiempo, liderazgo y una organización dispuesta a aprender del fracaso. <span class="source-chip">Kim, 1998</span></p>`
              },
              {
                id: "s8",
                title: "Los factores organizacionales del aprendizaje",
                html: `<p>Kim se apoya en Nonaka y Takeuchi para identificar los factores que facilitan el aprendizaje organizacional. El primero es la <strong>intención</strong>: la organización necesita una meta que oriente el esfuerzo y comprometa a sus miembros. Sin intención, el esfuerzo se dispersa. El segundo es la <strong>autonomía</strong>: los equipos necesitan margen para experimentar y autoorganizarse, porque el conocimiento nuevo no surge de una cadena de órdenes. <span class="source-chip">Kim, 1998</span></p>
<p>El tercero es la <strong>fluctuación y el caos creativo</strong>: introducir perturbaciones, preguntas y desafíos que rompan la rutina y obliguen a cuestionar supuestos. El cuarto es la <strong>redundancia</strong>: compartir información y experiencias que van más allá de la tarea inmediata, para que distintos equipos puedan conectar conocimientos. El quinto es la <strong>variedad requerida</strong>: la organización debe tener una diversidad de conocimientos y perspectivas comparable a la complejidad del entorno. <span class="source-chip">Kim, 1998</span></p>
<p>El sexto factor es el <strong>liderazgo emprendedor</strong>. En Hyundai, los presidentes del grupo y de la automotriz tuvieron un papel central: fijaron metas audaces, visitaron las plantas, mantuvieron contacto telefónico diario con los líderes de los equipos y sostuvieron el compromiso cuando los prototipos fallaban. Ese liderazgo no reemplazó la capacidad técnica, pero creó las condiciones para que el aprendizaje ocurriera. <span class="source-chip">Kim, 1998</span></p>
<p>Estos factores explican por qué la misma tecnología puede producir resultados distintos en dos empresas. No basta con tener los manuales: hay que tener una organización que convierta la información en conocimiento, que tolere el error productivo y que conecte a las personas. La capacidad de absorción es, en el fondo, una capacidad organizacional, no un atributo individual. <span class="source-chip">Kim, 1998</span> <span class="source-chip">Lall, 1992</span></p>`
              },
              {
                id: "s9",
                title: "Estado, política industrial y la comparación entre países",
                html: `<p>Lall no se queda en la firma. Para entender por qué algunos países desarrollaron capacidades y otros no, propone mirar la <strong>capacidad tecnológica nacional</strong> como la interacción de tres factores: capacidades, incentivos e instituciones. Las capacidades incluyen inversión física, capital humano y esfuerzo tecnológico. Los incentivos incluyen la competencia, el comercio, los precios relativos y la estabilidad macroeconómica. Las instituciones incluyen el sistema educativo, la infraestructura técnica, las normas, la propiedad intelectual y la capacidad del Estado. <span class="source-chip">Lall, 1992</span></p>
<p>La comparación de ocho países muestra que no hay una receta única. Corea del Sur combinó orientación exportadora con protección selectiva, grandes conglomerados (chaebols), dirección estatal de la inversión, promoción de exportaciones, intervención en la transferencia de tecnología y entrenamiento laboral obligatorio. Taiwán también protegió industrias nacientes y tuvo una política tecnológica activa, pero se apoyó en pymes flexibles y en empresas públicas para proyectos grandes y riesgosos. Hong Kong fue más laissez-faire, con un fuerte sector comercial y financiero. Singapur no protegió, pero intervino mucho: guió la inversión, creó empresas públicas, orientó salarios y atrajo inversión extranjera con exigencia de sofisticación. <span class="source-chip">Lall, 1992</span></p>
<p>Los países grandes siguieron caminos distintos. Brasil promovió grandes empresas públicas y centros de investigación, e intervino en la importación de tecnología en sectores como minicomputadoras, aviones y aceros especiales, pero amplias áreas de su industria quedaron poco competitivas. México también protegió y atrajo inversión extranjera, pero desarrolló menos capacidades en bienes de capital y tecnología propia. India combinó una industrialización muy diversa con una orientación hacia adentro, una red de instituciones científicas desconectada de las empresas y una burocracia que trabó la entrada, la salida y la diversificación. Tailandia, más tarde, se insertó en la relocalización de actividades intensivas en trabajo y creció exportando, con una base industrial más superficial. <span class="source-chip">Lall, 1992</span></p>
<p>La educación aparece como un factor transversal. En 1965, la matrícula secundaria era mucho mayor en Corea del Sur (35%), Taiwán (38%), Hong Kong (29%) y Singapur (45%) que en Brasil (16%), México (17%), India (27%) o Tailandia (14%). Corea y Taiwán ya mostraban una base de capital humano alta para su nivel de ingreso, y eso facilitó la absorción de tecnología. La lección no es que la educación “cause” el desarrollo por sí sola, sino que sin ingenieros, técnicos y trabajadores formados no hay capacidad de absorción posible. <span class="source-chip">Lall, 1992</span></p>
<p>El Estado puede cumplir un papel decisivo, pero también puede fallar. La protección selectiva y temporal puede ayudar a industrias con altos costos de aprendizaje, siempre que esté acompañada de incentivos a la exportación, competencia y capacidad de corregir errores. La protección indiscriminada y prolongada, en cambio, crea rentas de privilegio y desincentiva el esfuerzo tecnológico. Lo que distingue a los casos exitosos no es la ausencia de Estado ni su tamaño, sino la calidad de la intervención y la disciplina que la acompaña. <span class="source-chip">Lall, 1992</span></p>`
              },
              {
                id: "s10",
                title: "Límites y debates",
                html: `<p>El marco de Lall y Kim es potente, pero tiene límites. Medir capacidades tecnológicas es difícil: las patentes y el gasto en I+D capturan solo una parte, y dejan afuera el aprendizaje en producción, la ingeniería de proceso y el conocimiento tácito. Una empresa puede tener pocas patentes y una enorme capacidad de adaptación, o mucha I+D y poca capacidad de llevarla a la planta. Los indicadores son proxies, no la cosa misma. <span class="source-chip">Lall, 1992</span></p>
<p>También hay un riesgo de sesgo normativo. El caso Hyundai es extraordinario: un chaebol con apoyo estatal, acceso a financiamiento, economías de escala y una cultura organizacional particular. No es una receta que cualquier pyme pueda copiar. Kim mismo señala que el modelo depende de recursos humanos formados, de una cultura de trabajo intensa y de colchones financieros del grupo y del Estado. Sin esas condiciones, la construcción de crisis puede volverse destructiva: burnout, rotación, errores costosos o fracasos que la empresa no puede absorber. <span class="source-chip">Kim, 1998</span></p>
<p>El papel de la inversión extranjera directa es ambiguo. Puede transferir tecnología, entrenar proveedores y abrir mercados, pero también puede truncar el aprendizaje si la filial solo ensambla y las funciones de diseño, ingeniería y marketing quedan en la casa matriz. La diferencia depende de la estrategia de la filial, del poder de negociación del país y de las políticas de contenido local, capacitación y desarrollo de proveedores. No hay un efecto automático. <span class="source-chip">Lall, 1992</span></p>
<p>Por último, el contexto actual es distinto del de los casos clásicos. Las cadenas globales de valor, la digitalización, los servicios intensivos en conocimiento y la transición verde abren nuevas oportunidades y también nuevas barreras. La innovación ya no pasa solo por la fábrica: pasa por software, datos, diseño, logística y servicios. La pregunta de Lall y Kim sigue siendo válida —¿cómo se construye capacidad propia?—, pero las respuestas tienen que actualizarse. Esa es la conexión con la subunidad 6.3: las revoluciones tecnológicas cambian el espacio de oportunidades y el tipo de capacidades que se necesitan. <span class="source-chip">Kim, 1998</span> <span class="source-chip">Lall, 1992</span></p>`
              }
            ],
            flow: {
              label: "El ciclo del aprendizaje tecnológico",
              nodes: [
                { title: "Preparación", sub: "Formación previa, literatura, observación, incorporación de personas." },
                { title: "Adquisición", sub: "Licencias, equipos, asistencia técnica, tecnología empaquetada o desempaquetada." },
                { title: "Asimilación", sub: "Aprender haciendo y usando; rutinas, calidad, mantenimiento." },
                { title: "Mejora y aplicación", sub: "Adaptar, optimizar, diseñar variantes, aplicar a nuevos productos." },
                { title: "Nueva base", sub: "El conocimiento acumulado habilita el siguiente salto." }
              ],
              note: "El proceso es una espiral: cada etapa deja una base de conocimiento que hace posible la siguiente, pero también puede agotarse si no se renueva el esfuerzo."
            },
            table: {
              title: "Ocho países, tres estrategias de industrialización",
              headers: ["País", "Orientación comercial", "Organización industrial", "Capacidades y educación", "Resultado"],
              rows: [
                ["Corea del Sur", "Exportadora con protección selectiva.", "Chaebols; dirección estatal de la inversión; promoción de exportaciones.", "Alta inversión en educación; ingenieros y técnicos; entrenamiento obligatorio.", "Rápida acumulación y salto a autos, acero, semiconductores."],
                ["Taiwán", "Exportadora con protección selectiva.", "Pymes flexibles; empresas públicas para proyectos grandes y riesgosos.", "Alta matrícula secundaria y terciaria; política tecnológica activa.", "Electrónica y bienes de capital con fuerte difusión a pymes."],
                ["Hong Kong", "Laissez-faire; muy abierta.", "Comercio y finanzas; presencia de empresas británicas; textiles.", "Base educativa media; tradición comercial.", "Crecimiento basado en servicios y actividades intensivas en trabajo."],
                ["Singapur", "Sin protección, pero con fuerte intervención.", "Empresas públicas; guía de la inversión; atracción de IED.", "Alta matrícula; orientación a habilidades técnicas.", "Estructura industrial más pesada; bienes de productor y servicios."],
                ["India", "Muy inward-oriented; sustitución de importaciones.", "Amplia red de instituciones de ciencia y tecnología, desconectada de las empresas; burocracia.", "Matrícula secundaria media; élite técnica fuerte.", "Industria diversa pero ineficiente y con obsolescencia tecnológica."],
                ["Brasil", "Inward-oriented con incentivos a la exportación.", "Grandes empresas públicas; centros de investigación; intervención en importación de tecnología.", "Matrícula secundaria baja en 1965; crecimiento posterior.", "Industria pesada avanzada en algunos sectores, con áreas no competitivas."],
                ["México", "Inward-oriented con incentivos a la exportación.", "Alta presencia extranjera; menor capacidad en bienes de capital.", "Matrícula secundaria baja; menos política tecnológica.", "Maquila y exportaciones, con capacidades locales limitadas."],
                ["Tailandia", "Crecientemente exportadora.", "Base industrial superficial; relocalización de actividades intensivas en trabajo.", "Matrícula secundaria baja al inicio; inversión posterior en formación.", "Crecimiento exportador con dependencia de IED y bajo valor agregado."]
              ]
            },
            trap: {
              title: "Error típico",
              text: "Creer que la innovación en países emergentes es solo “copiar” o que el desarrollo consiste en importar la tecnología más avanzada. La imitación creativa es una forma genuina de aprendizaje y la adaptación puede ser tan difícil como la invención. El error simétrico es idealizar el caso Hyundai: fue excepcional por sus recursos, su escala, su grupo económico y su contexto histórico. No es una receta replicable sin esas condiciones."
            },
            teach: {
              title: "Para explicarlo desde cero",
              text: "Imaginá que te regalan una bicicleta desarmada, sin manual, y tenés que aprender a armarla, usarla y después mejorarla. Si nunca viste una, te cuesta; si ya sabés de mecánica, te resulta más fácil. Ese conocimiento previo es tu base. Pero si no dedicás tiempo y esfuerzo a probar, equivocarte y corregir, la bicicleta queda en el piso. La capacidad de absorción es exactamente eso: lo que ya sabés más lo que estás dispuesto a esforzarte para aprender."
            },
            sources: ["Lall (1992)", "Kim (1998)", "Práctica Innovación emergentes"]
          },
          concepts: [
            {
              term: "Capacidad tecnológica",
              short: "Lo que una empresa sabe hacer con la tecnología: operarla, adaptarla, mejorarla y crear nueva.",
              tags: ["Firma", "Conocimiento"],
              body: "Es el conjunto de habilidades, rutinas y conocimientos que permiten a una empresa identificar, adquirir, operar, adaptar y mejorar tecnología. No es solo tener máquinas o licencias: es saber usarlas y transformarlas. Es específica de cada firma y en buena parte tácita.",
              connects: ["Matriz de Lall", "Capacidad de absorción", "Aprendizaje", "Heterogeneidad"],
              sources: ["Lall (1992)", "Kim (1998)"],
              error: "Medirla solo por el gasto en I+D o por las patentes: la capacidad de producción y de adaptación también cuenta.",
              example: "Dos plantas compran el mismo equipo, pero una logra reducir desperdicios y la otra no porque su equipo técnico sabe diagnosticar mejor."
            },
            {
              term: "Matriz de Lall",
              short: "El mapa de capacidades por función (inversión, producción, vínculos) y por nivel de complejidad.",
              tags: ["Firma", "Método"],
              body: "Es una matriz que ordena las capacidades tecnológicas de la firma en tres áreas —inversión, producción y vínculos— y tres niveles —rutinario, adaptativo e innovador—. Sirve para diagnosticar qué sabe hacer una empresa y qué le falta para subir de nivel.",
              connects: ["Capacidad tecnológica", "Inversión", "Producción", "Vínculos"],
              sources: ["Lall (1992)", "Práctica Innovación emergentes"],
              error: "Pensar que la matriz es una secuencia obligatoria: las empresas pueden saltar etapas o tener niveles distintos según la función.",
              example: "Una empresa puede ser innovadora en diseño de producto y rutinaria en gestión de proveedores."
            },
            {
              term: "Niveles de capacidad",
              short: "Rutinario (experiencia), adaptativo (búsqueda) e innovador (investigación).",
              tags: ["Aprendizaje", "Niveles"],
              body: "El nivel rutinario permite operar con las rutinas básicas; el adaptativo permite buscar mejoras, adaptar productos y estirar equipos; el innovador permite diseñar tecnología propia y asumir riesgos de investigación. Son niveles de complejidad, no una escalera única.",
              connects: ["Matriz de Lall", "Imitación", "Innovación"],
              sources: ["Lall (1992)", "Kim (1998)"],
              error: "Creer que solo el nivel innovador es valioso: la mayor parte del aprendizaje en países emergentes ocurre en los niveles rutinario y adaptativo.",
              example: "Una planta que aprende a mantener sus equipos y a reducir defectos está haciendo upgrading de proceso, aunque no invente tecnología."
            },
            {
              term: "Capacidad de absorción",
              short: "La capacidad de aprender de una organización: conocimiento previo más intensidad de esfuerzo.",
              tags: ["Aprendizaje", "Organización"],
              body: "Es la capacidad de reconocer el valor de la información nueva, asimilarla y aplicarla. Depende del conocimiento previo disponible y de la energía que la organización invierte en resolver problemas. No es un atributo individual: es una capacidad organizacional.",
              connects: ["Conocimiento previo", "Intensidad del esfuerzo", "Conocimiento tácito", "Aprendizaje organizacional"],
              sources: ["Kim (1998)", "Lall (1992)"],
              error: "Pensar que alcanza con estar expuesto a la tecnología o con contratar a un experto: sin esfuerzo interno, el conocimiento no se internaliza.",
              example: "Una empresa que compra una licencia y no forma a su equipo puede operar la planta, pero no adaptarla ni mejorarla."
            },
            {
              term: "Conocimiento previo",
              short: "La base de saberes y experiencias que permite interpretar y asimilar lo nuevo.",
              tags: ["Conocimiento", "Base"],
              body: "Es el conjunto de conocimientos disponibles en la organización, en particular los tácitos incorporados en personas y rutinas. Cuanto más relevante sea respecto de la tarea, más fácil será absorber tecnología nueva. Se puede ampliar con literatura, observación, capacitación y, sobre todo, con personas que traen conocimiento migratorio.",
              connects: ["Capacidad de absorción", "Conocimiento tácito", "Conocimiento migratorio"],
              sources: ["Kim (1998)", "Lall (1992)"],
              error: "Confundir conocimiento previo con información acumulada: la información no se convierte en conocimiento si no se interpreta y se practica.",
              example: "Un equipo de ingenieros que ya trabajó en autopartes puede asimilar más rápido el diseño de un motor que un equipo sin experiencia industrial."
            },
            {
              term: "Intensidad del esfuerzo",
              short: "La energía y el tiempo que la organización dedica a resolver problemas y aprender.",
              tags: ["Aprendizaje", "Esfuerzo"],
              body: "Es la cantidad de esfuerzo que los miembros de la organización invierten en resolver problemas, probar, corregir y practicar. La exposición a conocimiento externo no basta: sin esfuerzo, el conocimiento no se internaliza. Se intensifica con metas desafiantes, interacción entre equipos y liderazgo.",
              connects: ["Capacidad de absorción", "Crisis construction", "Aprendizaje organizacional"],
              sources: ["Kim (1998)", "Lall (1992)"],
              error: "Creer que el esfuerzo se compra con capacitación formal: la práctica y la resolución de problemas son insustituibles.",
              example: "El equipo de Hyundai hizo 324 motores de prueba antes de lograr un motor competitivo."
            },
            {
              term: "Conocimiento tácito y migratorio",
              short: "El saber que no se escribe y el que llega con las personas que se mueven entre organizaciones.",
              tags: ["Conocimiento", "Personas"],
              body: "El conocimiento tácito es el que está incorporado en la experiencia y no se puede codificar del todo; se adquiere con práctica, observación e imitación. El conocimiento migratorio es el que traen las personas que se mueven entre empresas, países o instituciones, y es una fuente clave de capacidad para las firmas que están aprendiendo.",
              connects: ["Conocimiento previo", "Capacidad de absorción", "Aprendizaje"],
              sources: ["Kim (1998)", "Lall (1992)"],
              error: "Pensar que la tecnología se transfiere solo con documentos: los planos no transmiten la parte tácita del saber hacer.",
              example: "Hyundai incorporó ingenieros de otras automotrices y expertos británicos para acelerar el aprendizaje."
            },
            {
              term: "Etapas del catching-up",
              short: "Imitación duplicativa, imitación creativa e innovación.",
              tags: ["Aprendizaje", "Desarrollo"],
              body: "Son las tres orientaciones típicas del aprendizaje en países que alcanzan a los líderes. La duplicativa reproduce la tecnología importada; la creativa la adapta y mejora; la innovación genera tecnología propia. Cada una exige más conocimiento previo, más esfuerzo y una organización distinta.",
              connects: ["Capacidad de absorción", "Imitación", "Innovación", "Hyundai"],
              sources: ["Kim (1998)", "Lall (1992)"],
              error: "Pensar que la imitación creativa es una copia menor: adaptar y mejorar tecnología existente puede ser una fuente genuina de capacidades.",
              example: "Hyundai pasó de ensamblar Ford a diseñar el Pony y, después, a desarrollar el Accent y su propio motor."
            },
            {
              term: "Crisis construction",
              short: "La creación deliberada de metas desafiantes que obligan a la organización a aprender más rápido.",
              tags: ["Organización", "Liderazgo"],
              body: "Es una estrategia de la dirección que consiste en construir una brecha de desempeño —una crisis interna— para movilizar esfuerzo, cambiar la orientación de aprendizaje y generar consenso. Puede ser eficaz si hay recursos, liderazgo y apoyo; también puede ser destructiva si la organización no puede responder.",
              connects: ["Intensidad del esfuerzo", "Aprendizaje organizacional", "Liderazgo", "Hyundai"],
              sources: ["Kim (1998)", "Práctica Innovación emergentes"],
              error: "Creer que cualquier presión sirve: sin recursos, conocimiento previo y apoyo, la crisis puede quebrar a la empresa en lugar de hacerla aprender.",
              example: "Hyundai se fijó metas de construcción y diseño que parecían imposibles para forzar un salto de capacidades."
            },
            {
              term: "Aprendizaje organizacional",
              short: "El proceso por el cual el conocimiento individual se convierte en rutinas y capacidades de la organización.",
              tags: ["Organización", "Conocimiento"],
              body: "No es la suma de aprendizajes individuales. Es el proceso por el cual las ideas y habilidades se distribuyen, se comunican, se validan y se incorporan a las rutinas, prácticas y creencias de la organización. Requiere intención, autonomía, variedad, redundancia y liderazgo.",
              connects: ["Capacidad de absorción", "Conocimiento tácito", "Crisis construction", "Rutinas"],
              sources: ["Kim (1998)", "Lall (1992)"],
              error: "Pensar que si una persona aprende, la empresa aprende: el conocimiento se pierde si no se institucionaliza en rutinas y equipos.",
              example: "El equipo de diseño de Hyundai vivió un año y medio cerca de Italdesign, registró lo aprendido y lo revisó en grupo hasta convertirlo en capacidad de la empresa."
            },
            {
              term: "Chaebol",
              short: "Los grandes conglomerados familiares coreanos que articulan empresas y financiamiento.",
              tags: ["Corea", "Empresa"],
              body: "Son grandes grupos empresariales diversificados, con participación familiar y fuerte vínculo con el Estado y el sistema financiero. Fueron un instrumento central de la industrialización coreana: permitieron internalizar mercados ineficientes, financiar proyectos de escala y asumir riesgos tecnológicos. También concentraron poder económico y generaron rigideces.",
              connects: ["Corea del Sur", "Estado", "Escala", "Capacidad tecnológica"],
              sources: ["Lall (1992)", "Kim (1998)"],
              error: "Ver el chaebol solo como una gran empresa: es una forma de organización del capital y de relación con el Estado.",
              example: "Hyundai es un chaebol: el grupo tenía construcción, barcos, autos y otras actividades que le dieron escala y colchones financieros."
            },
            {
              term: "Sistema nacional de innovación",
              short: "El conjunto de empresas, universidades, instituciones y políticas que sostienen el aprendizaje de un país.",
              tags: ["Sistema", "Instituciones"],
              body: "Es la red de actores e instituciones —empresas, universidades, centros tecnológicos, agencias públicas, sistema financiero— que producen, difunden y aplican conocimiento. La calidad de las vinculaciones importa tanto como la existencia de cada actor: instituciones aisladas de las empresas no generan capacidades.",
              connects: ["Lall", "Estado", "Vínculos", "Capacidad tecnológica"],
              sources: ["Lall (1992)", "Práctica Innovación emergentes"],
              error: "Creer que alcanza con crear institutos de ciencia: si no están conectados con la producción, el conocimiento no se difunde.",
              example: "India tenía una amplia red de instituciones científicas, pero desconectada de las empresas, y eso limitó su impacto industrial."
            }
          ],
          practice: {
            label: "Práctica · actividades originales de la Unidad VI",
            title: "Lall y Kim: capacidades, países y el caso Hyundai",
            caseTitle: "¿Por qué algunos países aprendieron más que otros?",
            caseHtml: `<p>La práctica original de la cátedra propone dos ejercicios. El primero parte de la experiencia de ocho países que presenta Lall —Corea del Sur, Taiwán, Hong Kong, Singapur, India, Brasil, México y Tailandia— y pide comparar sus empresas, sus estrategias comerciales, el papel de la inversión extranjera y del Estado, y la formación de recursos humanos. El segundo se concentra en Hyundai y en el proceso de construcción de capacidades que describe Kim.</p>
<p>Usá la matriz de Lall y el esquema de capacidad de absorción de Kim como herramientas. No se trata de memorizar los casos, sino de explicar por qué dos países con recursos parecidos obtuvieron resultados distintos y qué papel tuvieron las empresas, el Estado y las instituciones.</p>`,
            steps: [
              {
                q: "¿Qué características tenían las empresas de los países que lograron mayor desarrollo tecnológico? Pensá en tamaño, I+D, capacitación y capacidad de adaptación.",
                hint: "Compará Corea y Taiwán con Brasil, México e India; mirá qué hacían las empresas además de producir.",
                answer: "Las empresas de los países más dinámicos tendían a invertir en capacitación y en I+D, a desarrollar ingeniería de proceso y producto, y a adaptar tecnologías importadas. No todas eran grandes: Taiwán se apoyó en pymes flexibles y Corea en chaebols. La diferencia no era solo el tamaño, sino la orientación al aprendizaje, la inversión en personas y la conexión con mercados exigentes."
              },
              {
                q: "¿Qué diferencias hay entre la estrategia coreana de los chaebols y la taiwanesa de pymes? ¿Qué ventajas y límites tiene cada una?",
                hint: "Pensá en escala, riesgo, flexibilidad, financiamiento y relación con el Estado.",
                answer: "Corea apostó a grandes conglomerados con apoyo estatal y financiamiento para proyectos de escala y alto riesgo; eso permitió saltos en acero, autos y semiconductores, pero concentró poder y generó rigideces. Taiwán se apoyó en pymes flexibles y en empresas públicas para proyectos grandes; ganó adaptabilidad y difusión, pero tuvo más dificultades para financiar apuestas tecnológicas de gran escala. No hay una superioridad absoluta: son modelos con trade-offs."
              },
              {
                q: "¿Qué papel tuvieron la educación, la orientación comercial, la IED y el Estado? Compará Corea, Singapur e India.",
                hint: "Educación técnica, exportaciones vs. mercado interno, incentivos y requisitos a la IED, capacidad estatal.",
                answer: "Corea combinó educación masiva, orientación exportadora, protección selectiva y dirección estatal. Singapur no protegió pero guió la inversión, atrajo IED con exigencia de sofisticación y desarrolló empresas públicas y formación técnica. India se orientó al mercado interno, tuvo una red científica amplia pero desconectada y una burocracia que trabó la diversificación. La calidad de la intervención y la conexión con el mercado mundial explican buena parte de las diferencias. También importa la articulación entre empresas, universidades y centros de investigación: India tenía instituciones científicas pero divorciadas de la producción; Corea y Taiwán construyeron vínculos más densos."
              },
              {
                q: "¿Cómo construyó Hyundai las capacidades para pasar de ensamblar a diseñar? Identificá las etapas de imitación duplicativa, creativa e innovación.",
                hint: "Recorré Ford Cortina, Pony, Excel y Accent; mirá qué aprendió en cada fase.",
                answer: "Hyundai empezó con imitación duplicativa: ensambló Ford con tecnología empaquetada y aprendió producción. Luego pasó a la imitación creativa: desarrolló el Pony con tecnología desempaquetada de múltiples fuentes, 90% de contenido local y diseño propio. Con el Excel profundizó el diseño y la producción para el mercado estadounidense. Con el Accent y el motor alpha llegó a la innovación: diseño propio, I+D y capacidad de exportar tecnología."
              },
              {
                q: "¿Por qué la transferencia de tecnología no hubiera alcanzado sin los esfuerzos internos? ¿Qué papel tuvieron las crisis construidas?",
                hint: "Conocimiento tácito, capacidad de absorción, metas desafiantes, aprendizaje del fracaso.",
                answer: "Porque la tecnología tiene una parte tácita que solo se internaliza con práctica y esfuerzo. Hyundai no se limitó a comprar licencias: organizó la tecnología, formó equipos, probó, falló y corrigió. Las crisis construidas crearon una brecha de desempeño que obligó a intensificar el esfuerzo y cambiar la orientación de aprendizaje, de la imitación a la innovación. Sin recursos, liderazgo y conocimiento previo, esas crisis podrían haber sido destructivas."
              }
            ],
            closing: "Cerrá la práctica con una comparación de una frase: ¿qué se parece y qué no se parece el caso Hyundai a las posibilidades de una pyme argentina hoy?"
          },
          quiz: {
            intro: "Cuatro preguntas para verificar que entendiste la lógica del aprendizaje, no solo la anécdota de Hyundai.",
            questions: [
              {
                level: "Conceptual",
                q: "¿Por qué la transferencia de tecnología no basta para desarrollar capacidades?",
                options: [
                  "Porque el conocimiento tecnológico tiene componentes tácitos y requiere conocimiento previo y esfuerzo interno para internalizarse",
                  "Porque las tecnologías importadas siempre son obsoletas",
                  "Porque las empresas locales no pueden comprar licencias",
                  "Porque la tecnología no se puede enseñar"
                ],
                correct: 0,
                explain: "La tecnología incluye saber hacer que no se codifica del todo. Sin esfuerzo de aprendizaje, la empresa puede operar la tecnología pero no adaptarla ni mejorarla."
              },
              {
                level: "Distinción",
                q: "¿Qué compone la capacidad de absorción según Kim?",
                options: [
                  "El tamaño de la empresa y el acceso al crédito",
                  "La cantidad de patentes y el gasto en I+D",
                  "La protección arancelaria y la inversión extranjera",
                  "El conocimiento previo y la intensidad del esfuerzo"
                ],
                correct: 3,
                explain: "La capacidad de absorción combina la base de conocimiento previo con la energía que la organización invierte en resolver problemas."
              },
              {
                level: "Aplicación",
                q: "Una empresa que toma una licencia, la adapta al mercado local y mejora el producto está en una etapa de...",
                options: [
                  "Imitación duplicativa",
                  "Innovación de frontera",
                  "Imitación creativa",
                  "Desaprendizaje"
                ],
                correct: 2,
                explain: "La imitación creativa no se limita a reproducir: adapta, mejora y combina tecnología existente. La innovación implica generar tecnología propia."
              },
              {
                level: "Razonamiento",
                q: "¿Para qué construía Hyundai crisis deliberadamente?",
                options: [
                  "Para reducir salarios y despedir personal",
                  "Para crear una brecha de desempeño que intensificara el esfuerzo y cambiara la orientación de aprendizaje",
                  "Para cumplir con exigencias del gobierno",
                  "Para evitar la competencia internacional"
                ],
                correct: 1,
                explain: "Las crisis construidas buscan movilizar a la organización, generar consenso y abrir una nueva frontera de aprendizaje. No son un fin en sí mismo ni una excusa para precarizar."
              }
            ],
            open: [
              {
                level: "Aplicación",
                q: "Aplicá la matriz de Lall a una empresa que conozcas o a un caso de la región. ¿En qué funciones es rutinaria, adaptativa o innovadora?",
                guide: "La respuesta debe distinguir inversión, producción y vínculos, y no confundir el tamaño con el nivel de capacidad. Una empresa puede ser innovadora en producto y rutinaria en gestión de proveedores, por ejemplo."
              },
              {
                level: "Comparación",
                q: "Corea del Sur y Taiwán: ¿por qué llegaron a resultados distintos con estrategias diferentes?",
                guide: "Corea apostó a chaebols y escala; Taiwán a pymes flexibles y empresas públicas para proyectos grandes. Ambos combinaron educación, orientación exportadora y Estado activo. La respuesta debe mostrar trade-offs, no una superioridad simple."
              },
              {
                level: "Límites",
                q: "¿Qué condiciones hicieron posible el modelo Hyundai y por qué no es fácil replicarlo?",
                guide: "Recursos humanos formados, escala, apoyo estatal, colchones financieros del grupo, liderazgo emprendedor y una cultura de trabajo intensa. Sin esas condiciones, la construcción de crisis puede ser destructiva. El caso es inspirador, pero no una receta universal."
              }
            ]
          },
          review: {
            stats: [
              { value: "1", label: "página de ideas clave" },
              { value: "12", label: "conceptos para dominar" },
              { value: "7", label: "días de repaso" }
            ],
            summary: [
              { lead: "La tecnología no es una función de producción.", text: "El conocimiento es específico, tácito y desigual; aprender requiere esfuerzo." },
              { lead: "La matriz de Lall ordena las capacidades.", text: "Inversión, producción y vínculos, en niveles rutinario, adaptativo e innovador." },
              { lead: "La capacidad de absorción tiene dos partes.", text: "Conocimiento previo más intensidad de esfuerzo; sin práctica no hay internalización." },
              { lead: "El catching-up tiene etapas.", text: "Imitación duplicativa, imitación creativa e innovación; no son una escalera automática." },
              { lead: "Hyundai invirtió la secuencia de I+D.", text: "Empezó por ingeniería de producción, siguió por desarrollo y llegó a investigación." },
              { lead: "Las crisis construidas pueden acelerar el aprendizaje.", text: "Crean una brecha de desempeño y movilizan esfuerzo, pero pueden destruir si faltan recursos." },
              { lead: "El Estado y las instituciones importan.", text: "Capacidades, incentivos e instituciones explican las trayectorias nacionales." },
              { lead: "No hay una receta única.", text: "Corea, Taiwán, Singapur, Brasil, México e India combinaron factores de manera distinta." }
            ],
            errors: [
              { error: "Creer que la innovación es solo I+D de frontera", fix: "La adaptación y la mejora de procesos son formas genuinas de creación de capacidades." },
              { error: "Pensar que comprar tecnología equivale a aprenderla", fix: "La parte tácita requiere práctica, personas y esfuerzo organizacional." },
              { error: "Idealizar Hyundai como modelo universal", fix: "Fue un caso excepcional por escala, grupo, Estado y cultura; sus condiciones no se replican fácilmente." },
              { error: "Confundir protección con política industrial eficaz", fix: "La protección selectiva y temporal funciona con exportación, competencia y capacidad de corregir errores; la protección indiscriminada crea privilegios." }
            ],
            cards: [
              { front: "Capacidad de absorción", back: "Conocimiento previo + intensidad del esfuerzo. Sin práctica, la exposición a la tecnología no alcanza." },
              { front: "Matriz de Lall", back: "Inversión, producción y vínculos; niveles rutinario, adaptativo e innovador." },
              { front: "Etapas del catching-up", back: "Imitación duplicativa → imitación creativa → innovación. Cada una exige más conocimiento y esfuerzo." },
              { front: "Crisis construction", back: "Metas desafiantes que crean una brecha de desempeño y movilizan el aprendizaje. Pueden ser creativas o destructivas." },
              { front: "Hyundai", back: "De ensamblar Ford a diseñar el Pony, el Excel, el Accent y motores propios. Aprendizaje por etapas y crisis construidas." },
              { front: "Estado y capacidades", back: "Capacidades, incentivos e instituciones. La calidad de la intervención importa más que su tamaño." }
            ],
            plan: [
              { day: "Día 1", task: "Leer la teoría y dibujar la matriz de Lall", min: "35 min" },
              { day: "Día 2", task: "Explicar la capacidad de absorción con un ejemplo propio", min: "20 min" },
              { day: "Día 3", task: "Comparar Corea y Taiwán; armar un cuadro de trade-offs", min: "25 min" },
              { day: "Día 4", task: "Reconstruir las cuatro fases de Hyundai", min: "30 min" },
              { day: "Día 5", task: "Autoevaluación y corrección", min: "20 min" },
              { day: "Día 6", task: "Flashcards y repaso de crisis construction", min: "20 min" },
              { day: "Día 7", task: "Aplicar Lall y Kim a una empresa argentina", min: "25 min" }
            ],
            session: [
              { time: "0–15", title: "Encuadre", text: "Leer la idea clave y anotar por qué la tecnología no se transfiere como una máquina." },
              { time: "15–40", title: "Teoría activa", text: "Leer las secciones 1 a 5 y completar la matriz de Lall con un ejemplo." },
              { time: "40–55", title: "Conceptos", text: "Conectar capacidad de absorción, conocimiento tácito y crisis construction." },
              { time: "55–72", title: "Hyundai", text: "Reconstruir las cuatro fases y las crisis que las impulsaron." },
              { time: "72–82", title: "Práctica", text: "Comparar Corea, Taiwán e India con la grilla de Lall." },
              { time: "82–90", title: "Cierre", text: "Escribir una diferencia entre imitación creativa e innovación que puedas enseñar." }
            ],
            stuck: [
              { title: "No entendés qué es la capacidad de absorción", source: "Kim (1998), sección «Absorptive Capacity» y figura 1; en esta unidad, sección 4." },
              { title: "Se te mezclan los niveles de Lall", source: "Lall (1992), tabla 1 y sección 2; en esta unidad, sección 3." },
              { title: "No ves por qué Hyundai construía crisis", source: "Kim (1998), secciones «Crises and Learning» y «Crisis Construction and Shift of Learning Orientation»." }
            ]
          },
          sources: [
            {
              author: "Lall, S.",
              year: "1992",
              title: "Technological capabilities and industrialization in the Third World",
              cite: "World Development, 20(2), 165-186.",
              type: "Artículo",
              priority: "base",
              what: "La matriz de capacidades, los niveles de complejidad y la comparación de ocho países industrializadores.",
              used: ["Teoría", "Conceptos", "Práctica", "Autoevaluación"],
              file: "../Documentos de clases/6 B/Lall (1992).pdf"
            },
            {
              author: "Kim, L.",
              year: "1998",
              title: "Crisis Construction and Organizational Learning: Capability Building in Catching-up at Hyundai Motor",
              cite: "Organization Science, 9(4), 506-521.",
              type: "Artículo",
              priority: "base",
              what: "La capacidad de absorción, las etapas del catching-up, la construcción de crisis y el caso Hyundai.",
              used: ["Teoría", "Conceptos", "Práctica", "Autoevaluación"],
              file: "../Documentos de clases/6 B/Kim (1998).pdf"
            },
            {
              author: "Cátedra",
              year: "2026",
              title: "Actividades prácticas: Innovación en países emergentes",
              cite: "Unidad VI, ejercicios sobre Lall (1992) y Kim (1998).",
              type: "Práctica",
              priority: "base",
              what: "Las consignas originales sobre países, estrategias, educación, IED, Estado y el caso Hyundai.",
              used: ["Práctica", "Autoevaluación", "Repaso"],
              file: "../Documentos de clases/6 B/Práctica Innovación emergentes.pdf"
            }
          ]
        },
        {
          id: "6c",
          code: "6.3",
          letter: "C",
          accent: "wine",
          title: "Revoluciones tecnológicas",
          desc: "Paradigmas tecnoeconómicos, instalación y despliegue, recursos naturales.",
          tagline: "Cada revolución tecnológica no cambia solo las máquinas: cambia el sentido común con el que se organiza la producción, el Estado y la vida cotidiana.",
          minutes: 50,
          sourceCount: 4,
          theory: {
            title: "Las olas largas del capitalismo y el cambio de paradigma",
            lead: "La innovación no avanza de a una máquina por vez. Cada tanto, un conjunto de tecnologías, industrias e infraestructuras irrumpe con tal fuerza que reorganiza toda la economía: cambia los precios relativos, las formas de organizar el trabajo, la geografía de la producción y las reglas de la competencia. Carlota Pérez llama a esas irrupciones revoluciones tecnológicas, y al modelo de organización que las acompaña, paradigma tecnoeconómico.",
            keyIdea: "Una revolución tecnológica es una constelación de tecnologías nuevas que se difunde a toda la economía y eleva la productividad potencial. El paradigma tecnoeconómico es el conjunto de principios genéricos que se vuelve sentido común: define qué es “óptima práctica” y qué instituciones son compatibles. Quien adopta el paradigma se vuelve competitivo; quien se queda en el anterior, pierde posición. Esa discontinuidad abre ventanas de oportunidad para países y empresas.",
            keyIdeaSource: "Síntesis de Pérez (2005, cap. 2); Pérez (2010)",
            sections: [
              {
                id: "s1",
                title: "Qué es una revolución tecnológica",
                html: `<p>Una <strong>revolución tecnológica</strong> es un conjunto poderoso y visible de tecnologías, productos e industrias nuevas y dinámicas, capaces de sacudir los cimientos de la economía e impulsar una oleada de desarrollo de largo plazo. No es un invento aislado: es una constelación de innovaciones interrelacionadas que suele incluir un insumo de bajo costo y uso generalizado —a menudo una fuente de energía o un material crucial—, nuevos productos y procesos, y una infraestructura nueva que mejora el transporte y las comunicaciones y reduce drásticamente sus costos. <span class="source-chip">Pérez, 2005</span></p>
<p>Lo que distingue a una revolución de una simple innovación sectorial es su <strong>difusión</strong>. Las tecnologías que la componen se propagan mucho más allá de las industrias donde nacieron y ofrecen un conjunto de herramientas genéricas y principios organizativos que elevan la productividad potencial de casi toda la economía. Por eso cada revolución no solo crea sectores nuevos: rejuvenece y moderniza los sectores maduros. <span class="source-chip">Pérez, 2005</span></p>
<p>Cada revolución tiene un <strong>big bang</strong>: un evento visible que simboliza el nuevo potencial y despierta la imaginación de los pioneros. No es una fecha exacta ni un determinismo técnico; es un atractor que muestra que los negocios basados en las nuevas tecnologías pueden ser competitivos. La hilandería de Arkwright en 1771, la locomotora Rocket en 1829, la acería Bessemer de Carnegie en 1875, el Ford Modelo T en 1908 y el microprocesador de Intel en 1971 son los hitos que Pérez identifica. <span class="source-chip">Pérez, 2005</span></p>
<p>Antes de articularse como constelación, cada revolución pasa por una <strong>gestación</strong> larga: las innovaciones pueden existir durante décadas en un papel menor. Por eso las fechas son aproximadas y la revolución se reconoce mejor en retrospectiva. Además, cada una nace en un país o región núcleo —Inglaterra en las dos primeras, Estados Unidos y Alemania en la tercera y cuarta, Estados Unidos en la quinta— y se difunde hacia la periferia de manera gradual, con demoras que pueden llegar a dos o tres décadas. <span class="source-chip">Pérez, 2005</span></p>`
              },
              {
                id: "s2",
                title: "Cinco revoluciones en doscientos años",
                html: `<p>Pérez identifica cinco revoluciones sucesivas desde fines del siglo XVIII. La primera, la <strong>Revolución industrial</strong>, se inaugura en 1771 con la hilandería de algodón de Arkwright en Cromford, Inglaterra. Trae la mecanización de la industria textil, el hierro forjado, la maquinaria, la energía hidráulica y una infraestructura de canales, vías fluviales y caminos con peaje. <span class="source-chip">Pérez, 2005</span></p>
<p>La segunda es la <strong>era del vapor y los ferrocarriles</strong>, desde 1829, cuando la locomotora Rocket gana el concurso para la línea Liverpool-Manchester. Combina máquinas de vapor, hierro, carbón, ferrocarriles, telégrafo, puertos y grandes barcos. La tercera es la <strong>era del acero, la electricidad y la ingeniería pesada</strong>, desde 1875, con la acería Bessemer de Carnegie en Pittsburgh. Acero barato, ingeniería química y civil, equipos eléctricos, cables de cobre, alimentos enlatados, redes eléctricas, teléfono, ferrocarriles transcontinentales y telégrafo mundial. <span class="source-chip">Pérez, 2005</span></p>
<p>La cuarta es la <strong>era del petróleo, el automóvil y la producción en masa</strong>, desde 1908, con el Ford Modelo T. Petróleo barato, petroquímica, motor de combustión interna, producción en masa de automóviles, tractores, aviones, electrodomésticos, alimentos refrigerados, carreteras, autopistas, aeropuertos, oleoductos, electricidad universal y telecomunicaciones analógicas. La quinta es la <strong>era de la informática y las telecomunicaciones</strong>, desde 1971, con el microprocesador de Intel. Microelectrónica barata, computadoras, software, telecomunicaciones, internet, redes digitales, biotecnología asistida por computadora y nuevos materiales. <span class="source-chip">Pérez, 2005</span></p>
<p>Cada constelación combina tecnologías nuevas con otras viejas que se redefinen. El petróleo existía antes de 1908, pero la conjunción con el motor de combustión y la producción en masa es lo que hace la revolución. La electrónica existía antes de 1971, pero el microprocesador barato es lo que enciende la imaginación y reorganiza la economía. Las revoluciones no son solo sectores: son sistemas interdependientes bajo un paraguas común. <span class="source-chip">Pérez, 2005</span></p>`
              },
              {
                id: "s3",
                title: "Qué es un paradigma tecnoeconómico",
                html: `<p>Un <strong>paradigma tecnoeconómico</strong> es un modelo de óptima práctica constituido por un conjunto de principios tecnológicos y organizativos, genéricos y ubicuos, que representan la forma más efectiva de aplicar la revolución tecnológica y usarla para modernizar y rejuvenecer el resto de la economía. Cuando su adopción se generaliza, esos principios se convierten en la base del sentido común para organizar cualquier actividad y reestructurar cualquier institución. <span class="source-chip">Pérez, 2005</span></p>
<p>El concepto es de inspiración kuhniana. Un paradigma define el modelo y el terreno de las prácticas innovadoras “normales”: promete el éxito a quienes siguen los principios encarnados en las industrias núcleo de la revolución, y dificulta las innovaciones incompatibles. No es solo un conjunto de máquinas: es un mapa mental, una forma de hacer las cosas, una idea de lo que se considera eficiente y moderno. <span class="source-chip">Pérez, 2005</span></p>
<p>Cada transformación tecnológica trae un cambio en la <strong>estructura de precios relativos</strong>. El insumo nuevo se vuelve barato y los agentes se orientan a usarlo intensivamente. Pero el paradigma también incluye principios organizativos: producción en fábrica, escala, estandarización, integración vertical, producción en masa, especialización funcional, redes descentralizadas, conocimiento como capital. Esos principios se difunden desde las empresas hacia los gobiernos, los hospitales, las universidades, los sindicatos y los partidos. <span class="source-chip">Pérez, 2005</span></p>
<p>El paradigma es a la vez <strong>impulsor y freno</strong>. Impulsa porque da un modelo que todos pueden seguir; frena porque su configuración lleva tiempo —alrededor de una década o más después del big bang— y porque la inercia de los éxitos del paradigma anterior es el principal obstáculo para el nuevo. La transición no es automática: es una batalla entre lo nuevo y lo viejo, con dos o tres décadas turbulentas. <span class="source-chip">Pérez, 2005</span></p>`
              },
              {
                id: "s4",
                title: "Cómo cambia el sentido común organizativo",
                html: `<p>El ejemplo más claro de cambio de paradigma es el paso de la producción en masa a la revolución informática. Hasta 1980, la organización óptima era la <strong>pirámide jerárquica centralizada y compartimentada por funciones</strong>. Esa estructura se aplicó en casi todas las corporaciones, pero también se reprodujo en los gobiernos, los hospitales, las universidades, los sindicatos y los partidos, en el mundo occidental y en el soviético, en países desarrollados y subdesarrollados. <span class="source-chip">Pérez, 2005</span></p>
<p>Con las computadoras e internet, esas grandes pirámides se volvieron rígidas y difíciles de manejar. En su lugar se difundió la <strong>estructura en redes descentralizadas y flexibles</strong>, con un núcleo estratégico y un sistema de comunicación rápido. El cambio no fue solo técnico: cambió la forma de coordinar, de delegar, de medir el desempeño y de pensar la organización. Se pasó de la integración vertical a la subcontratación, de la estandarización rígida a la adaptabilidad, de la información jerárquica a la información distribuida. <span class="source-chip">Pérez, 2005</span></p>
<p>El paradigma se enraíza en la práctica social, la legislación y las instituciones. Facilita las innovaciones compatibles y obstaculiza las incompatibles. Ese mecanismo de inclusión-exclusión explica por qué el cambio técnico no es un proceso suave: las instituciones del paradigma anterior —regulaciones, formas de propiedad, sistemas educativos, convenciones— pueden bloquear el nuevo hasta que se reforman. <span class="source-chip">Pérez, 2005</span></p>
<p>La consecuencia es que la tecnología y la política se condicionan mutuamente. El marco socioinstitucional tiene que cambiar para adaptarse a la nueva esfera tecnoeconómica, y ese cambio no es neutral: redistribuye poder, crea ganadores y perdedores y redefine el papel del Estado. La revolución informática no solo cambió las empresas: cambió la globalización, las cadenas de valor, el trabajo y la vida cotidiana. <span class="source-chip">Pérez, 2005</span> <span class="source-chip">Pérez, 2010</span></p>`
              },
              {
                id: "s5",
                title: "Ventanas de oportunidad, rezago y salto",
                html: `<p>Los cambios de paradigma abren <strong>ventanas de oportunidad</strong>. Cuando el paradigma anterior se agota y el nuevo todavía no está consolidado, los líderes tienen que desaprender y reconvertir inversiones, mientras los recién llegados pueden empezar de cero con la nueva tecnología. Es el momento en que se puede <em>alcanzar</em> (<em>catching up</em>), <em>adelantarse</em> (<em>forging ahead</em>) o <em>quedar atrás</em> (<em>falling behind</em>). <span class="source-chip">Pérez, 2005</span></p>
<p>La historia ofrece ejemplos. En la tercera revolución, Estados Unidos y Alemania aprovecharon el acero y la electricidad para sobrepasar a Inglaterra, que había liderado las dos primeras. En la quinta, los países asiáticos encontraron una ventana en la electrónica y las telecomunicaciones. No es que el cambio tecnológico garantice la convergencia: los líderes también aprenden y tienen recursos, y la inercia puede ser una ventaja o una condena según el caso. <span class="source-chip">Pérez, 2005</span></p>
<p>Para aprovechar una ventana no alcanza con adoptar la tecnología. Hay que tener capacidades, instituciones y políticas. La ventana es una oportunidad, no un destino. Un país puede tener recursos naturales o mano de obra barata y aun así quedar atrapado en actividades de bajo valor si no construye conocimiento, infraestructura y organización. Esa es la conexión con la subunidad 6.2: la capacidad de absorción y el aprendizaje son los que permiten convertir la oportunidad en desarrollo. <span class="source-chip">Pérez, 2005</span></p>
<p>La ventana también es <strong>política</strong>. Los gobiernos pueden crear condiciones —educación, infraestructura, compras públicas, regulación, financiamiento— o pueden dejar que la oportunidad pase. La calidad de las instituciones y la capacidad de construir consensos son decisivas. En América Latina, la discusión sobre las ventanas de oportunidad se cruza con la de los recursos naturales y con la de la integración regional. <span class="source-chip">Pérez, 2010</span></p>`
              },
              {
                id: "s6",
                title: "Finanzas, fases y crisis",
                html: `<p>El capítulo 2 de Pérez se concentra en la lógica de las revoluciones y los paradigmas; la secuencia completa de fases se desarrolla en el resto del libro. Acá la usamos como marco, con una advertencia: no es una cronología rígida, sino un patrón recurrente. Cada oleada atraviesa una <strong>instalación</strong>, un <strong>frenesí</strong>, un <strong>punto de giro</strong> y un <strong>despliegue</strong>. <span class="source-chip">Pérez, 2005</span> <span class="source-chip">Pérez, 2010</span></p>
<p>En la instalación, irrumpe la nueva tecnología y el capital financiero financia las inversiones necesarias. En el frenesí, la innovación y la especulación se aceleran; aparecen burbujas, sobreinversión y euforia. En el punto de giro, la burbuja estalla o el modelo se agota, y la crisis obliga a reacomodar instituciones y expectativas. En el despliegue, el capital productivo aplica el paradigma ya maduro a toda la economía y se difunden los beneficios. El capital financiero es determinante para habilitar los grandes cambios de inversión, pero también puede desacoplarse de la producción y generar crisis. <span class="source-chip">Pérez, 2005</span></p>
<p>El capítulo insiste en que la transición dura dos o tres décadas turbulentas. La lógica y los efectos del paradigma anterior todavía dominan y resisten; la instalación exitosa de las capacidades nuevas acentúa la decadencia de las viejas. Para cuando el proceso concluye, de la revolución anterior apenas queda el rastro. No es un proceso lineal ni armonioso: es una disputa entre lo nuevo y lo viejo. <span class="source-chip">Pérez, 2005</span></p>
<p>La crisis financiera de 2008 y la discusión sobre el papel del Estado se entienden en ese marco. Pérez sostiene que las crisis no son simples fallas de mercado: son momentos de reacomodamiento del marco institucional al nuevo paradigma. La salida no es volver al paradigma anterior, sino construir instituciones compatibles con el nuevo. Esa idea conecta con la teoría de la regulación de la Unidad 05: la estabilidad depende de arreglos institucionales, y cuando dejan de ser compatibles, sobreviene la crisis. <span class="source-chip">Pérez, 2010</span></p>`
              },
              {
                id: "s7",
                title: "Recursos naturales y conocimiento: la propuesta para América Latina",
                html: `<p>En 2010, Pérez aplica su marco a América Latina. Su punto de partida es una asimetría global: Asia tiene mucha población y pocos recursos naturales, y se especializó en industrias de ensamblaje intensivas en trabajo; América Latina tiene recursos naturales abundantes y menor densidad de población, y puede especializarse en <strong>industrias de procesos</strong>. No se trata de exportar materias primas sin procesar, sino de transformarlas con conocimiento, tecnología y eslabonamientos. <span class="source-chip">Pérez, 2010</span></p>
<p>Una industria de procesos transforma materias primas mediante métodos químicos, eléctricos, térmicos u otros: acero, papel, salsa de tomate, gasolina, plásticos, alimentos, bebidas, cemento, productos químicos. La producción ocurre “dentro” del sistema de equipamiento y el personal supervisa y apoya el proceso, en lugar de ejecutarlo. Eso la hace intensiva en capital y capacidades, no en mano de obra, y exige ingeniería, control de calidad, mantenimiento y diseño de proceso. <span class="source-chip">Pérez, 2010</span></p>
<p>La propuesta es escalar tecnológicamente a lo largo de la cadena: dar calidades especiales a los materiales, desarrollar productos adaptados al cliente, mejorar alimentos y bebidas, rescatar productos autóctonos, certificar orgánicos, desarrollar biotecnología, protección ambiental, turismo, software, bienes de capital y servicios técnicos. El objetivo es migrar de los commodities a nichos de mayor valor, con redes de innovación que incluyan empresas, universidades y centros de investigación locales e internacionales. <span class="source-chip">Pérez, 2010</span></p>
<p>Como las industrias de procesos no son intensivas en empleo, la estrategia tiene que ser <strong>dual</strong>. Por un lado, “desde arriba”: competitividad en los mercados globales, frontera tecnológica, alianzas con corporaciones globales. Por otro, “desde abajo”: aglomeraciones productivas locales, nichos, inclusión de pymes y creación de riqueza en cada territorio. Las dos mitades se necesitan: sin la primera no hay recursos para financiar el desarrollo; sin la segunda, el crecimiento no reduce la pobreza ni la desigualdad. <span class="source-chip">Pérez, 2010</span></p>
<p>La ventana es pasajera. Pérez la estima en alrededor de una década, apoyada en precios altos de los commodities, la hiper-segmentación de los mercados y las cadenas, las presiones ambientales y la sobrecarga de las grandes empresas de servicios. Si el ingreso extra se usa para importar consumo y no para construir capacidades, la oportunidad se desperdicia. La advertencia es tan importante como la propuesta: los recursos naturales no son una condena, pero tampoco un destino automático. <span class="source-chip">Pérez, 2010</span></p>`
              },
              {
                id: "s8",
                title: "Glocalización, clusters y cadenas de valor",
                html: `<p>El paradigma de las TIC no elimina lo local: lo reconfigura. Pérez usa la noción de <strong>glocalización</strong> para nombrar dos movimientos complementarios: la adaptación de productos globales a condiciones locales y la identificación de productos locales con potencial global. Lo global y lo local no son opuestos; se combinan en nichos, cadenas y clusters. <span class="source-chip">Pérez, 2010</span></p>
<p>La globalización de las TIC trajo una <strong>hiper-segmentación</strong> de los mercados, las cadenas de valor y las capacidades tecnológicas. Las corporaciones globales organizan redes complejas, con componentes y subcomponentes autónomos, proveedores estables, contratistas y proveedores temporales. Esa segmentación abre espacios para empresas y regiones que pueden ofrecer capacidades específicas, pero también aumenta la competencia y la presión sobre los eslabones más simples. <span class="source-chip">Pérez, 2010</span></p>
<p>Las empresas aisladas lo pasan mal en este paradigma. Las relaciones a distancia con proveedores, clientes y competidores dejaron de ser suficientes; la proximidad, la cooperación y las redes de conocimiento importan. Por eso prosperan los <strong>clusters</strong>, las asociaciones, las franquicias, los consorcios y los programas de desarrollo de proveedores. La cercanía no garantiza nada por sí sola, pero facilita el aprendizaje, la confianza y los servicios compartidos. <span class="source-chip">Pérez, 2010</span></p>
<p>La posición en la cadena importa. Cuanto más cerca del commodity, mayor es la presión sobre el precio y más exigente la calidad estándar; cuanto más específico o intensivo en conocimiento es el producto, mayor es el poder de negociación del proveedor. La glocalización es una invitación a moverse hacia nichos de alto valor, no a quedarse en la producción genérica. Esa es la conexión con la subunidad 6.1: la gobernanza de la cadena define quién captura las rentas y qué upgrading es posible. <span class="source-chip">Pérez, 2010</span></p>`
              },
              {
                id: "s9",
                title: "Política industrial y desarrollo inclusivo",
                html: `<p>Pérez rechaza la disyuntiva “Estado o mercado” como obsoleta. Ni la planificación central ni la libre acción del mercado resuelven todo. El Estado tiene un papel en la construcción de consensos, la provisión de infraestructura, la educación, la ciencia y tecnología, el financiamiento, las compras públicas y la regulación. La política industrial no es “elegir ganadores” sin más: es una visión estratégica que orienta la inversión y la innovación hacia actividades de mayor productividad y conocimiento. <span class="source-chip">Pérez, 2010</span></p>
<p>La implementación requiere aprender en tres capas complementarias. Primero, el <strong>sector público</strong>: una estructura competente y articulada puede conducir una economía sofisticada. Segundo, el <strong>sistema educativo</strong>: hay que actualizar métodos, contenidos técnicos y formación de ingenieros y técnicos. Tercero, el <strong>sector empresarial</strong>: las empresas tienen que aumentar gradualmente sus capacidades innovativas. La colaboración entre los tres —y con contrapartes globales— es la base de un sistema nacional de innovación fuerte. <span class="source-chip">Pérez, 2010</span></p>
<p>La inclusión social no es un agregado. La región tiene una distribución del ingreso muy desigual y una pobreza que no se resuelve con el “efecto de filtración”. La estrategia dual busca crear riqueza “desde abajo”, en cada territorio, con clusters y nichos que aprovechen ventajas locales. El objetivo no es solo crecer, sino crecer con equidad: más y mejor empleo, más pymes, más capacidades. Es la herencia de Fajnzylber y de la tradición estructuralista de la CEPAL. <span class="source-chip">Pérez, 2010</span> <span class="source-chip">CEPAL, 2014</span></p>
<p>Los ejemplos concretos muestran que la política industrial puede ser específica y a la vez sistémica: certificación de calidad, normas sanitarias, trazabilidad, capacitación, asociatividad, compras públicas, infraestructura, financiamiento y articulación público-privada. También muestra sus límites: sin capacidad estatal, los programas se capturan o se dispersan; sin consenso social, no se sostienen en el tiempo. La política industrial es un proceso de aprendizaje institucional, no una receta. <span class="source-chip">Pérez, 2010</span> <span class="source-chip">CEPAL, 2014</span></p>`
              },
              {
                id: "s10",
                title: "Límites y debates",
                html: `<p>El enfoque de Pérez es histórico y estilizado. La periodización en cinco revoluciones es una herramienta analítica, no una ley; las fechas son aproximadas y los límites entre una revolución y otra son difusos. La idea de un país núcleo simplifica una realidad donde la innovación se distribuye en redes globales. Y la secuencia de fases —instalación, frenesí, punto de giro, despliegue— es un patrón recurrente, no una cronología que se repita mecánicamente. <span class="source-chip">Pérez, 2005</span></p>
<p>También hay un riesgo de <strong>determinismo tecnológico</strong>. Si se lee la historia como una sucesión inevitable de paradigmas, se pierde la agencia de las empresas, los Estados y los movimientos sociales. Las tecnologías no cambian por sí solas: hay conflictos, decisiones, políticas y resistencias. El paradigma dominante no es el único posible; su forma concreta depende de las instituciones y de la correlación de fuerzas. <span class="source-chip">Pérez, 2010</span> <span class="source-chip">Barletta, Robert y Yoguel, 2012</span></p>
<p>La propuesta de recursos naturales también tiene críticos. Barletta, Robert y Yoguel señalan que agregar valor a los recursos naturales no es una idea nueva y que la innovación es una propiedad emergente de las redes y del sistema de innovación, no de los recursos en sí. Dudan de que la ventana sea tan amplia y de que los países de la región puedan ocupar eslabones de alto valor sin capacidades e instituciones previas. El riesgo es el voluntarismo: creer que la sola decisión política alcanza para cambiar la especialización. <span class="source-chip">Barletta, Robert y Yoguel, 2012</span></p>
<p>Por último, la aplicación a América Latina enfrenta problemas estructurales: volatilidad de los precios de los commodities, reprimarización, conflictos ambientales y sociales, captura de rentas, debilidad institucional y competencia de otros países. La ventana puede cerrarse antes de que se construyan capacidades. Por eso la política industrial tiene que ser selectiva, transparente, evaluable y sostenida en el tiempo; y la inclusión social tiene que ser un objetivo desde el inicio, no un resultado que se espera del crecimiento. <span class="source-chip">Pérez, 2010</span> <span class="source-chip">Barletta, Robert y Yoguel, 2012</span></p>`
              }
            ],
            flow: {
              label: "Del paradigma viejo al nuevo",
              nodes: [
                { title: "Big bang", sub: "Una innovación visible y barata muestra el nuevo potencial." },
                { title: "Instalación", sub: "El capital financiero financia la nueva infraestructura; los viejos sectores resisten." },
                { title: "Frenesí", sub: "Euforia, sobreinversión y burbuja; la nueva lógica se impone." },
                { title: "Punto de giro", sub: "Crisis, reacomodamiento institucional y cambio de reglas." },
                { title: "Despliegue", sub: "El paradigma madura y se difunde a toda la economía y la sociedad." }
              ],
              note: "La secuencia es un patrón, no una cronología exacta: cada revolución tiene su propio ritmo y sus propias crisis."
            },
            table: {
              title: "Cinco revoluciones y sus paradigmas",
              headers: ["Revolución", "Big bang", "Industrias e infraestructuras", "Principios del paradigma"],
              rows: [
                ["Primera: industrial (1771)", "Hilandería de Arkwright, Inglaterra.", "Algodón, hierro, maquinaria, energía hidráulica, canales y caminos.", "Producción en fábrica, mecanización, medición y ahorro de tiempo, redes locales."],
                ["Segunda: vapor y ferrocarriles (1829)", "Locomotora Rocket, Liverpool-Manchester.", "Vapor, hierro, carbón, ferrocarriles, telégrafo, puertos, barcos.", "Economías de aglomeración, ciudades industriales, mercados nacionales, gran escala, partes estandarizadas."],
                ["Tercera: acero, electricidad e ingeniería pesada (1875)", "Acería Bessemer de Carnegie, Pittsburgh.", "Acero barato, química, ingeniería civil, equipos eléctricos, redes eléctricas, teléfono, telégrafo mundial.", "Estructuras gigantes, economías de escala en planta, integración vertical, ciencia como fuerza productiva, estandarización universal."],
                ["Cuarta: petróleo, automóvil y producción en masa (1908)", "Ford Modelo T, Detroit.", "Petróleo, petroquímica, motor de combustión, automóviles, electrodomésticos, carreteras, aeropuertos, electricidad universal.", "Producción y mercados masivos, estandarización, uso intensivo de energía, especialización funcional, pirámides jerárquicas, centralización."],
                ["Quinta: informática y telecomunicaciones (1971)", "Microprocesador de Intel, Santa Clara.", "Microelectrónica, computadoras, software, telecomunicaciones, internet, redes digitales, biotecnología y nuevos materiales.", "Uso intensivo de información, redes descentralizadas, conocimiento como capital, diversidad y adaptabilidad, nichos, globalización, clusters."]
              ]
            },
            trap: {
              title: "Error típico",
              text: "Creer que una revolución tecnológica es solo un conjunto de máquinas nuevas o que el paradigma es una moda de gestión. El paradigma incluye principios organizativos, instituciones y un sentido común que se vuelve invisible de tan obvio. El error simétrico es el determinismo: pensar que la tecnología “impone” un único resultado. Las instituciones, las políticas y las luchas sociales definen cómo se concreta cada paradigma."
            },
            teach: {
              title: "Para explicarlo desde cero",
              text: "Pensá en cómo cambió la vida con el teléfono inteligente. No fue solo un aparato: cambió la forma de trabajar, de comprar, de comunicarse, de organizar una empresa y de pensar el tiempo. Eso es un paradigma: un conjunto de prácticas que se vuelve sentido común. La revolución tecnológica es la constelación de tecnologías que lo hace posible; el paradigma es la forma de organizar la vida y la producción que se desprende de ella."
            },
            sources: ["Pérez (2005), cap. 2", "Pérez (2010)", "CEPAL (2014)", "Barletta, Robert y Yoguel (2012)"]
          },
          concepts: [
            {
              term: "Revolución tecnológica",
              short: "Una constelación de tecnologías, industrias e infraestructuras nuevas que transforma toda la economía.",
              tags: ["Tecnología", "Historia"],
              body: "Es un conjunto poderoso y visible de innovaciones interrelacionadas que irrumpe en un país núcleo y se difunde a toda la economía. Incluye un insumo barato de uso general, nuevos productos y procesos, y una infraestructura que reduce costos de transporte y comunicación. No es un sector: es una constelación que rejuvenece también a los sectores maduros.",
              connects: ["Paradigma tecnoeconómico", "Big bang", "Oleada de desarrollo"],
              sources: ["Pérez (2005)", "Pérez (2010)"],
              error: "Confundir una revolución con un invento o con un sector de moda: lo decisivo es su difusión general y su capacidad de reorganizar la economía.",
              example: "La revolución informática no es solo la computadora: incluye microelectrónica, software, telecomunicaciones, internet y nuevas formas de organizar el trabajo."
            },
            {
              term: "Paradigma tecnoeconómico",
              short: "El modelo de óptima práctica y sentido común organizativo que se difunde con una revolución.",
              tags: ["Paradigma", "Organización"],
              body: "Es un conjunto de principios tecnológicos y organizativos genéricos que definen la forma más efectiva de aplicar la revolución y modernizar el resto de la economía. Cuando se generaliza, se vuelve sentido común para organizar empresas, Estados e instituciones. Facilita las innovaciones compatibles y obstaculiza las incompatibles.",
              connects: ["Revolución tecnológica", "Óptima práctica", "Sentido común", "Instituciones"],
              sources: ["Pérez (2005)", "Pérez (2010)"],
              error: "Reducirlo a un conjunto de máquinas: el paradigma incluye principios organizativos, instituciones y formas de pensar.",
              example: "La pirámide jerárquica fue el paradigma de la producción en masa; la red descentralizada es el de la informática."
            },
            {
              term: "Óptima práctica",
              short: "La forma de producir y organizar que se considera la más eficiente en un paradigma.",
              tags: ["Paradigma", "Eficiencia"],
              body: "Es el modelo de organización que las empresas e instituciones imitan porque parece el más eficaz dadas las tecnologías y los precios relativos del momento. No es un óptimo técnico absoluto: es una construcción histórica que se difunde por imitación, competencia y legitimidad.",
              connects: ["Paradigma tecnoeconómico", "Sentido común", "Instituciones"],
              sources: ["Pérez (2005)", "Pérez (2010)"],
              error: "Creer que la óptima práctica es única y eterna: cambia cuando cambia el paradigma.",
              example: "La integración vertical fue óptima en la producción en masa; la externalización y las redes lo son en el paradigma de las TIC."
            },
            {
              term: "Sentido común organizativo",
              short: "Las ideas implícitas sobre cómo se debe organizar una empresa o una institución.",
              tags: ["Cultura", "Organización"],
              body: "Es el conjunto de supuestos que se vuelven obvios en un paradigma: qué es una organización eficiente, cómo se coordina, qué se delega, cómo se mide el éxito. Se reproduce en las empresas, los gobiernos, las universidades y los medios, y es difícil de cuestionar porque parece natural.",
              connects: ["Paradigma tecnoeconómico", "Óptima práctica", "Instituciones"],
              sources: ["Pérez (2005)", "Pérez (2010)"],
              error: "Pensar que el sentido común es neutral: expresa relaciones de poder y permite que ciertas innovaciones parezcan razonables y otras no.",
              example: "Durante décadas, la gran empresa integrada parecía la única forma “seria” de organizar la producción industrial."
            },
            {
              term: "Big bang",
              short: "El evento visible que anuncia el nuevo potencial tecnológico y despierta a los pioneros.",
              tags: ["Historia", "Innovación"],
              body: "Es un hecho puntual que simboliza la revolución y muestra que los negocios basados en las nuevas tecnologías pueden ser competitivos. No es la causa única ni una fecha exacta: es un atractor que ayuda a reconocer el cambio. La gestación puede haber sido larga y el despliegue posterior, lento.",
              connects: ["Revolución tecnológica", "Pioneros", "Difusión"],
              sources: ["Pérez (2005)", "Pérez (2010)"],
              error: "Tomar el big bang como una fecha exacta de nacimiento: es una convención analítica para ordenar el relato.",
              example: "El microprocesador de Intel en 1971 es el big bang de la revolución informática."
            },
            {
              term: "Ventana de oportunidad",
              short: "El período de cambio de paradigma en que los rezagados pueden alcanzar o adelantarse.",
              tags: ["Desarrollo", "Oportunidad"],
              body: "Es el momento en que el paradigma anterior se agota y el nuevo todavía no se consolidó. Los líderes tienen inversiones e inercias que los frenan; los recién llegados pueden empezar con la nueva tecnología. La ventana no es automática: requiere capacidades, instituciones y políticas.",
              connects: ["Catching up", "Paradigma", "Capacidades", "Estado"],
              sources: ["Pérez (2005)", "Pérez (2010)"],
              error: "Creer que la ventana garantiza el desarrollo: sin capacidades e instituciones, la oportunidad pasa de largo.",
              example: "Estados Unidos y Alemania aprovecharon el acero y la electricidad para superar a Inglaterra; los países asiáticos hicieron algo similar con la electrónica."
            },
            {
              term: "Instalación y despliegue",
              short: "Las dos grandes fases de una oleada: irrupción financiada y difusión madura del paradigma.",
              tags: ["Fases", "Ciclo"],
              body: "La instalación es la fase en que irrumpe la nueva tecnología y el capital financiero financia la infraestructura; incluye el frenesí y la burbuja. El despliegue es la fase en que el paradigma madura, el capital productivo lo aplica a toda la economía y se difunden los beneficios. Entre ambas hay un punto de giro, una crisis de reacomodamiento.",
              connects: ["Capital financiero", "Crisis", "Paradigma"],
              sources: ["Pérez (2005)", "Pérez (2010)"],
              error: "Pensar que las fases son una cronología rígida: son un patrón recurrente con ritmos y formas distintas.",
              example: "La revolución informática tuvo su instalación en los años ochenta y noventa, su burbuja en 2000 y su despliegue posterior."
            },
            {
              term: "Capital financiero",
              short: "El capital que financia la instalación del nuevo paradigma y también alimenta las burbujas.",
              tags: ["Finanzas", "Crisis"],
              body: "Es el capital que se orienta a la valorización financiera y permite financiar las grandes inversiones de una revolución. En la instalación, cumple un papel habilitador; en el frenesí, puede desacoplarse de la producción y generar sobreinversión y crisis. Su relación con el capital productivo es una de las claves de la dinámica de las oleadas.",
              connects: ["Instalación y despliegue", "Crisis", "Paradigma"],
              sources: ["Pérez (2005)", "Pérez (2010)"],
              error: "Verlo solo como especulación: también es el mecanismo que moviliza el ahorro hacia la nueva infraestructura.",
              example: "La burbuja de las punto com financió mucha infraestructura digital que luego se utilizó en el despliegue."
            },
            {
              term: "Industria de procesos",
              short: "Producción que transforma materias primas mediante procesos químicos, térmicos o eléctricos.",
              tags: ["Producción", "Recursos naturales"],
              body: "Es una industria donde la transformación ocurre dentro del sistema de equipamiento y el personal supervisa y apoya el proceso, en lugar de ejecutarlo manualmente. Ejemplos: acero, papel, petroquímica, alimentos, bebidas, cemento. Es intensiva en capital y capacidades, no en mano de obra, y ofrece una vía para agregar conocimiento a los recursos naturales.",
              connects: ["Recursos naturales", "Pérez 2010", "Capacidades", "Valor agregado"],
              sources: ["Pérez (2010)", "CEPAL (2014)"],
              error: "Confundir industria de procesos con extracción de materias primas: la primera transforma y agrega valor; la segunda extrae.",
              example: "Una planta que produce aceites especiales, almidones modificados o bioplásticos a partir de materia prima local."
            },
            {
              term: "Glocalización",
              short: "La combinación de adaptación local de productos globales y proyección global de productos locales.",
              tags: ["Globalización", "Territorio"],
              body: "Es un concepto que nombra dos movimientos: adaptar productos y servicios globales a las condiciones locales, y encontrar productos locales con potencial global. En el paradigma de las TIC, lo global y lo local se combinan en nichos, clusters y cadenas de valor.",
              connects: ["Clusters", "Cadenas de valor", "Nichos", "Pérez 2010"],
              sources: ["Pérez (2010)", "CEPAL (2014)"],
              error: "Pensar que la globalización homogeneiza todo: también habilita la diferenciación local y los nichos.",
              example: "Un vino de una región pequeña que se vende como producto premium en mercados globales."
            },
            {
              term: "Política industrial",
              short: "El conjunto de políticas que orientan la inversión y la innovación hacia actividades de mayor productividad.",
              tags: ["Estado", "Desarrollo"],
              body: "Es la intervención pública —explícita o implícita— que busca cambiar la estructura productiva: infraestructura, educación, ciencia y tecnología, financiamiento, compras públicas, estándares, protección selectiva, clusters. No es solo “elegir ganadores”: es construir capacidades y corregir fallas de mercado y de coordinación.",
              connects: ["Estado", "Capacidades", "Instituciones", "Pérez 2010"],
              sources: ["Pérez (2010)", "CEPAL (2014)"],
              error: "Creer que la mejor política industrial es la que no existe: todos los países que se desarrollaron tuvieron alguna forma de intervención.",
              example: "Un programa de certificación, financiamiento y compras públicas para que las pymes de una cadena cumplan estándares internacionales."
            },
            {
              term: "Inclusión social",
              short: "Que el crecimiento genere empleo de calidad, capacidades y oportunidades para la mayoría.",
              tags: ["Desarrollo", "Equidad"],
              body: "Es un objetivo que no se alcanza automáticamente con el crecimiento. Requiere políticas que creen riqueza “desde abajo”, incorporen a las pymes, mejoren la educación y la formación, y distribuyan las capacidades y las oportunidades. La inclusión es parte de la estrategia de desarrollo, no un agregado posterior.",
              connects: ["Política industrial", "Pymes", "CEPAL", "Pérez 2010"],
              sources: ["Pérez (2010)", "CEPAL (2014)"],
              error: "Confiar en el “efecto de filtración”: el crecimiento por sí solo no garantiza que los beneficios lleguen a los sectores postergados.",
              example: "Un cluster local que integra a pequeños productores y les permite vender en nichos globales sin perder sus capacidades."
            }
          ],
          practice: {
            label: "Práctica · caso compuesto del litio",
            title: "El litio argentino: ¿ventana de oportunidad o reprimarización?",
            caseTitle: "Del salar a la batería: dónde se captura el valor",
            caseHtml: `<p>En el norte argentino, la cadena del litio va desde la extracción de salmuera en los salares hasta la producción de carbonato o hidróxido de litio, los materiales catódicos, las celdas y las baterías que usan los autos eléctricos y los sistemas de almacenamiento. La mayor parte del valor se agrega fuera de la región: en plantas de refinación, fábricas de cátodos, productores de celdas y empresas automotrices globales.</p>
<p>El país tiene recursos, empresas mineras, universidades y algunos proyectos de investigación, pero también brechas de infraestructura, energía, logística, formación técnica y articulación productiva. El precio internacional del litio es volátil y la competencia por atraer inversiones es fuerte. Distintos actores proponen cosas distintas: exportar más carbonato, instalar una planta de cátodos, desarrollar una fábrica de celdas, o concentrarse en servicios de ingeniería y tecnología de extracción.</p>
<p>El caso es compuesto y está pensado como ejercicio de política industrial y cambio de paradigma; no describe un proyecto real ni pretende tener datos actualizados.</p>`,
            steps: [
              {
                q: "¿En qué revolución o paradigma se inserta el litio? ¿Es una ventana de la revolución informática o de una transición energética?",
                hint: "Pensá en las TIC, la electrificación, el almacenamiento y la economía verde; no todo encaja en una sola constelación.",
                answer: "El litio se inserta en la intersección entre el paradigma de las TIC —digitalización, sensores, control de procesos, cadenas globales— y una posible transición energética basada en baterías, renovables y electrificación. Es una ventana porque la demanda crece y las tecnologías aún se están definiendo, pero no es una revolución consolidada: depende de decisiones políticas, precios y estándares. La respuesta debe reconocer la incertidumbre."
              },
              {
                q: "Mapeá la cadena y la gobernanza: ¿quién fija especificaciones, quién compra, quién captura las rentas?",
                hint: "Extracción, refinación, cátodos, celdas, baterías, autos; empresas mineras, químicas, automotrices y Estados.",
                answer: "La cadena tiene eslabones muy distintos. En la extracción y la refinación hay empresas mineras y químicas; en cátodos y celdas, corporaciones globales con tecnología y escala; en baterías y autos, fabricantes con marca y poder de compra. La gobernanza puede ser relacional o cautiva en la extracción, modular en componentes y jerárquica en tecnologías críticas. Las rentas se concentran en refinación, cátodos, celdas y marca; la extracción suele capturar menos y estar expuesta a la volatilidad."
              },
              {
                q: "¿Qué capacidades y eslabonamientos faltan para subir en la cadena? Aplicá Lall y Kim.",
                hint: "Inversión, producción, vínculos; conocimiento previo, esfuerzo, formación de ingenieros y técnicos.",
                answer: "Faltan capacidades de ingeniería de proceso y producto, laboratorios, formación de técnicos y profesionales, proveedores de equipos y servicios, logística y energía. También faltan vínculos entre empresas, universidades y centros tecnológicos. Aplicando Lall: hay capacidades de inversión y producción básicas, pero débiles en ingeniería especializada y vínculos. Aplicando Kim: hace falta conocimiento previo y esfuerzo sostenido, no solo inversión extranjera."
              },
              {
                q: "Diseñá una política industrial con la estrategia dual de Pérez: “desde arriba” y “desde abajo”.",
                hint: "Competitividad global, nichos, clusters, pymes, infraestructura, educación, compras públicas, estándares.",
                answer: "Desde arriba: atraer inversión con requisitos de contenido local y transferencia, financiar I+D en refinación y materiales, construir infraestructura y energía, formar ingenieros y técnicos, negociar acuerdos de suministro. Desde abajo: clusters de servicios mineros, proveedores locales, capacitación, certificación ambiental y comunitaria, pymes de logística y mantenimiento. Las dos mitades deben financiarse con parte de la renta del recurso y sostenerse con instituciones transparentes."
              },
              {
                q: "¿Qué riesgos harían que la ventana se convierta en reprimarización? ¿Qué indicadores mostrarían un éxito?",
                hint: "Pensá en empleo, eslabonamientos, capacidades, ambiente, volatilidad y dependencia.",
                answer: "Los riesgos son exportar solo concentrado o carbonato, no desarrollar proveedores ni ingeniería, depender de precios volátiles, generar conflictos ambientales y sociales y perder la renta en importación de consumo. El éxito se vería en más empleo calificado, proveedores locales, patentes y servicios de ingeniería, diversificación de exportaciones, estándares ambientales y una parte de la renta invertida en capacidades. No alcanza con el volumen exportado."
              }
            ],
            closing: "Cerrá la práctica con una frase: ¿qué tendría que pasar para que el litio sea una ventana de desarrollo y no solo una exportación más?"
          },
          quiz: {
            intro: "Cuatro preguntas para distinguir revolución, paradigma y ventana de oportunidad, y para aplicar el marco a América Latina.",
            questions: [
              {
                level: "Distinción",
                q: "¿Cuál es la diferencia entre revolución tecnológica y paradigma tecnoeconómico?",
                options: [
                  "La revolución es una política pública; el paradigma es una empresa",
                  "El paradigma es el conjunto de máquinas; la revolución es la cultura",
                  "La revolución es un conjunto de tecnologías e industrias nuevas; el paradigma es el modelo de óptima práctica que se difunde con ella",
                  "No hay diferencia: son sinónimos"
                ],
                correct: 2,
                explain: "La revolución es la constelación de tecnologías, productos e infraestructuras; el paradigma es el conjunto de principios organizativos que se vuelve sentido común."
              },
              {
                level: "Conceptual",
                q: "¿Por qué se dice que el paradigma es un nuevo sentido común?",
                options: [
                  "Porque define lo que se considera óptima práctica y se vuelve obvio para organizar empresas e instituciones",
                  "Porque se impone por ley",
                  "Porque solo lo entienden los ingenieros",
                  "Porque elimina las instituciones anteriores"
                ],
                correct: 0,
                explain: "El paradigma se enraíza en la práctica, la legislación y las instituciones; facilita lo compatible y obstaculiza lo incompatible, y se vuelve un supuesto implícito."
              },
              {
                level: "Aplicación",
                q: "¿Qué es una ventana de oportunidad en el marco de Pérez?",
                options: [
                  "Un subsidio para exportar materias primas",
                  "Una crisis financiera que destruye capacidades",
                  "Un acuerdo comercial entre países",
                  "El período de cambio de paradigma en que los rezagados pueden alcanzar o adelantarse"
                ],
                correct: 3,
                explain: "La ventana se abre cuando el paradigma anterior se agota y el nuevo aún no se consolidó; los líderes tienen inercia y los recién llegados pueden empezar de nuevo."
              },
              {
                level: "Razonamiento",
                q: "¿Cómo se aplica el marco a los recursos naturales de América Latina?",
                options: [
                  "Exportando más materias primas sin procesar",
                  "Tecnologizando las industrias de procesos, agregando conocimiento y creando eslabonamientos y nichos",
                  "Cerrándose al comercio internacional",
                  "Esperando que el mercado asigne las capacidades"
                ],
                correct: 1,
                explain: "La propuesta no es reprimarizar ni solo extraer: es usar los recursos como plataforma para industrias de procesos, conocimiento, biotecnología, servicios y nichos de mayor valor."
              }
            ],
            open: [
              {
                level: "Síntesis",
                q: "Explicá las cinco revoluciones tecnológicas y qué cambia en cada una.",
                guide: "La respuesta debe nombrar el big bang, las industrias e infraestructuras y el principio organizativo central. No hace falta memorizar todas las fechas, pero sí entender el pasaje de la mecanización a la producción en masa y a las redes digitales."
              },
              {
                level: "Aplicación",
                q: "Evaluá la estrategia dual de Pérez para un sector de tu provincia o país.",
                guide: "Debe distinguir la mitad “desde arriba” (competitividad, tecnología, infraestructura, formación) de la “desde abajo” (clusters, pymes, nichos, inclusión) y mostrar cómo se financian y complementan. También debe señalar riesgos y capacidades faltantes."
              },
              {
                level: "Límites",
                q: "¿Qué críticas se le pueden hacer al enfoque de las revoluciones tecnológicas?",
                guide: "Periodización estilizada, riesgo de determinismo, fases que no se repiten mecánicamente, dificultad de aplicar la ventana a países con instituciones débiles, y riesgo de optimismo con los recursos naturales. La respuesta debe reconocer la potencia del marco y sus límites."
              }
            ]
          },
          review: {
            stats: [
              { value: "1", label: "página de ideas clave" },
              { value: "12", label: "conceptos para dominar" },
              { value: "7", label: "días de repaso" }
            ],
            summary: [
              { lead: "Las revoluciones tecnológicas son constelaciones.", text: "Tecnologías, industrias e infraestructuras que se difunden a toda la economía." },
              { lead: "Cinco revoluciones en doscientos años.", text: "Industrial, vapor y ferrocarriles, acero y electricidad, petróleo y producción en masa, informática." },
              { lead: "El paradigma es óptima práctica y sentido común.", text: "No solo máquinas: principios organizativos que se vuelven obvios y se enraízan en las instituciones." },
              { lead: "El cambio de paradigma abre ventanas.", text: "Los rezagados pueden alcanzar o adelantarse; los líderes cargan con la inercia." },
              { lead: "La transición es conflictiva.", text: "Dos o tres décadas de disputa entre lo nuevo y lo viejo; el capital financiero financia y también genera burbujas." },
              { lead: "América Latina tiene una oportunidad en procesos.", text: "Recursos naturales más conocimiento, biotecnología, servicios y nichos, no solo commodities." },
              { lead: "La estrategia debe ser dual.", text: "Competitividad global y creación de riqueza local; crecimiento con inclusión." },
              { lead: "El Estado y las instituciones importan.", text: "Política industrial, educación, infraestructura y consensos; sin capacidad estatal, la ventana se pierde." }
            ],
            errors: [
              { error: "Confundir revolución con un sector de moda", fix: "La revolución es una constelación que se difunde y reorganiza toda la economía, no solo un producto." },
              { error: "Pensar el paradigma como una moda de gestión", fix: "Es un conjunto de principios tecnológicos y organizativos que se enraíza en instituciones y sentido común." },
              { error: "Creer que la ventana garantiza el desarrollo", fix: "Requiere capacidades, instituciones, política industrial y consenso; la oportunidad puede pasar de largo." },
              { error: "Creer que los recursos naturales condenan o salvan por sí solos", fix: "Depende de cómo se usen: pueden ser plataforma de conocimiento o fuente de reprimarización." }
            ],
            cards: [
              { front: "Revolución tecnológica", back: "Constelación de tecnologías, industrias e infraestructuras nuevas que transforma toda la economía." },
              { front: "Paradigma tecnoeconómico", back: "Modelo de óptima práctica y sentido común organizativo que se difunde con la revolución." },
              { front: "Big bang", back: "Evento visible que anuncia el nuevo potencial: Arkwright, Rocket, Bessemer, Modelo T, microprocesador." },
              { front: "Ventana de oportunidad", back: "Período de cambio de paradigma en que los rezagados pueden alcanzar o adelantarse." },
              { front: "Industria de procesos", back: "Transformación de materias primas con conocimiento y capital; vía para agregar valor a los recursos naturales." },
              { front: "Estrategia dual", back: "Competitividad global “desde arriba” e inclusión y clusters “desde abajo”." }
            ],
            plan: [
              { day: "Día 1", task: "Leer la teoría y hacer una línea de tiempo de las cinco revoluciones", min: "30 min" },
              { day: "Día 2", task: "Explicar qué es un paradigma con un ejemplo propio", min: "20 min" },
              { day: "Día 3", task: "Comparar dos paradigmas: producción en masa y redes", min: "25 min" },
              { day: "Día 4", task: "Resolver el caso del litio", min: "30 min" },
              { day: "Día 5", task: "Autoevaluación y corrección", min: "20 min" },
              { day: "Día 6", task: "Flashcards y repaso de ventanas de oportunidad", min: "20 min" },
              { day: "Día 7", task: "Explicar la propuesta de Pérez para América Latina", min: "25 min" }
            ],
            session: [
              { time: "0–15", title: "Encuadre", text: "Leer la idea clave y anotar la diferencia entre revolución y paradigma." },
              { time: "15–40", title: "Teoría activa", text: "Leer las secciones 1 a 4 y completar la línea de tiempo de las cinco revoluciones." },
              { time: "40–55", title: "Conceptos", text: "Conectar paradigma, óptima práctica, ventana de oportunidad y capital financiero." },
              { time: "55–72", title: "América Latina", text: "Leer la propuesta de recursos naturales y la estrategia dual." },
              { time: "72–82", title: "Práctica", text: "Analizar el caso del litio con la grilla de Pérez." },
              { time: "82–90", title: "Cierre", text: "Escribir una frase que explique por qué una revolución tecnológica es también un cambio institucional." }
            ],
            stuck: [
              { title: "No entendés qué es un paradigma", source: "Pérez (2005), sección «Cinco paradigmas tecnoeconómicos» y cuadro 3; en esta unidad, secciones 3 y 4." },
              { title: "Se te mezclan las cinco revoluciones", source: "Pérez (2005), cuadros 1 y 2; tabla de esta subunidad." },
              { title: "No ves la relación con recursos naturales", source: "Pérez (2010), secciones III a V y VII; en esta unidad, sección 7." }
            ]
          },
          sources: [
            {
              author: "Pérez, C.",
              year: "2005",
              title: "Revoluciones tecnológicas y paradigmas tecnoeconómicos",
              cite: "Tecnología y Construcción, 21(2), 77-86. Transcripción del capítulo 2 de Revoluciones tecnológicas y capital financiero (2004).",
              type: "Artículo",
              priority: "base",
              what: "La definición de revolución y paradigma, las cinco revoluciones, los cinco paradigmas y las ventanas de oportunidad.",
              used: ["Teoría", "Conceptos", "Práctica", "Autoevaluación"],
              file: "../Documentos de clases/6 C/1-Carlota-Perez-capítulo 2 del libro Revoluciones tecnológicas y capital.pdf"
            },
            {
              author: "Pérez, C.",
              year: "2010",
              title: "Dinamismo tecnológico e inclusión social en América Latina: una estrategia de desarrollo productivo basada en los recursos naturales",
              cite: "Revista CEPAL, 100, 123-145.",
              type: "Artículo",
              priority: "base",
              what: "La propuesta de industrias de procesos, la estrategia dual, la glocalización, los clusters y la política industrial.",
              used: ["Teoría", "Conceptos", "Práctica", "Repaso"],
              file: "../Documentos de clases/6 C/2.Carlota Perez, 2010- Rec naturales y política industrial.pdf"
            },
            {
              author: "CEPAL",
              year: "2014",
              title: "Integración regional: hacia una estrategia de cadenas de valor inclusivas",
              cite: "LC/G.2594(SES.35/11), Santiago de Chile, mayo de 2014. Capítulos V y VII.",
              type: "Libro",
              priority: "ampliatoria",
              what: "La política industrial, las cadenas inclusivas y la integración regional; complementa la estrategia dual de Pérez.",
              used: ["Ampliación", "Conceptos", "Repaso"],
              file: "../Documentos de clases/6 A/CEPAL (2014) Integración regional-hacia una estrategia de cadena de valor inclusiva.pdf"
            },
            {
              author: "Barletta, F.; Robert, V.; Yoguel, G.",
              year: "2012",
              title: "Algunos comentarios sobre el artículo «Dinamismo tecnológico e inclusión social…» de Carlota Pérez",
              cite: "Revista Econômica, 14(2), 55-61, Niterói.",
              type: "Artículo",
              priority: "ampliatoria",
              what: "Una lectura crítica de la propuesta de recursos naturales: innovación como propiedad de la red, capacidades e instituciones.",
              used: ["Ampliación", "Debate", "Repaso"],
              file: "../Bibliografía ampliatoria TFyOI/Unidad V/UnV. Barletta, Robert y Yoguel (2012).pdf"
            }
          ]
        }
      ]
    }
  ]
};
