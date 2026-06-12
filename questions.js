// ============================================================================
// MYSTICOS RP - BANCO DE PREGUNTAS PARA WHITELIST ORAL
// Fuente: Normativa oficial actualizada (https://mysticos-rp.gitbook.io/normativa-mysticos-rp)
// Total: 300 preguntas (92 General / 79 Legal / 84 OD / 45 EMS)
// La tómbola sortea al azar: 30 de General (min. 10 básicas) + 20 de cada opcional
// NOTA: los comentarios de sección dentro del array son solo organizativos;
//       la tómbola agarra TODAS las preguntas según su campo "cat".
// ============================================================================

export const CATEGORIES = {
  general: { id: "general", label: "General",       short: "GEN", color: "#E94560", required: true  },
  legal:   { id: "legal",   label: "Legal",         short: "LEG", color: "#3498DB", required: false },
  od:      { id: "od",      label: "OD / Delictual", short: "OD",  color: "#E67E22", required: false },
  ems:     { id: "ems",     label: "EMS",           short: "EMS", color: "#1ABC9C", required: false },
};

export const QUESTIONS = [

  // ══════════════════════════════════════════════════════════════════════════
  // GENERAL (92 preguntas en total · la tómbola saca 30)
  // ══════════════════════════════════════════════════════════════════════════

  // ─── Comandos básicos ───
  {
    id: 1, cat: "general", basic: true,
    q: "¿Qué significa /ME y /DO? Da un ejemplo de cada uno.",
    a: "/ME → Describe una acción que realiza tu personaje cuando esa animación no existe en el juego.\nEj: /me saca una linterna de su cinturón y revisa el vehículo.\n\n/DO → Describe el entorno, estados, emociones o información que otros jugadores pueden percibir. Puede ir en tercera persona.\nEj: /do el vehículo presenta daños en la puerta del conductor."
  },
  {
    id: 2, cat: "general", basic: true,
    q: "¿Cuál es la diferencia entre IC y OOC?",
    a: "IC (In Character): todo lo que ocurre dentro del mundo del juego, parte de la vida, historia y acciones de tu personaje.\n\nOOC (Out of Character): todo lo que ocurre fuera del rol, donde los jugadores se comunican como personas reales.\n\nEstá estrictamente prohibido transferir información entre canales OOC e IC, ya que genera ventajas injustas y rompe la coherencia del rol (MetaGaming)."
  },
  {
    id: 3, cat: "general", basic: true,
    q: "¿Para qué sirve el comando /ENTORNO y cuándo es obligatorio?",
    a: "El /entorno se utiliza para avisar situaciones al entorno policial o servicios de emergencia, simulando llamados de civiles al 911. Debe enviarse OBLIGATORIAMENTE en cada acto delictual o situación que amerite aviso a una facción legal.\n\nEj: /entorno Alo 911, se verían 3 sujetos vestidos de negro, trasladándose en un Karin Sultan blanco, se escuchan disparos de calibre bajo en el puerto.\n\nLa omisión es considerada falta grave y será sancionada."
  },
  {
    id: 4, cat: "general", basic: true,
    q: "¿Cuándo y cómo se utiliza el comando /AUXILIO? ¿En qué persona se redacta?",
    a: "Se utiliza para realizar llamados a EMS cuando tu personaje quedó inconsciente y no hay personas próximas para auxiliarte. Se escribe SIEMPRE en TERCERA PERSONA.\n\nDebe incluir: vestimenta del herido, cantidad de personas, tipo y gravedad de las heridas, ubicación exacta y descripción del entorno.\n\nEj: /auxilio Auxilio EMS, encontré a un sujeto inconsciente en la vía pública con pulso estable, no responde a estímulos. Se solicita asistencia urgente."
  },
  {
    id: 5, cat: "general", basic: true,
    q: "¿Para qué sirve /REPORT y en qué se diferencia de /AYUDA?",
    a: "/REPORT: Contactar al staff por situaciones que requieren intervención fuera del rol (reportes de jugadores, bugs, quedar atrapado fuera del mapa, ser atropellado sin motivo, etc).\n\n/AYUDA: Para consultas importantes (disponibilidad de staff, dudas de teclas/configuración, funcionamiento de jobs). NO debe usarse para conversaciones innecesarias, bromas o consultas irrelevantes."
  },
  {
    id: 6, cat: "general",
    q: "¿Qué reglas rigen el uso del comando /ANUNCIO?",
    a: "Es de uso EXCLUSIVO de locales comerciales. Sirve solo para aperturas, promociones, eventos y cierres.\n\nLímites:\n- Margen mínimo de 10 minutos entre anuncios para evitar spam.\n- Anuncios vía TX por staff solo para eventos importantes, máximo 3 veces por evento."
  },

  // ─── Sistema de sanciones ───
  {
    id: 7, cat: "general",
    q: "¿Cuáles son los 3 tipos de sanciones y qué consecuencias derivan de cada una?",
    a: "1) SANCIONES LEVES: faltas menores. Derivan en advertencias verbales, warnings administrativos (TX) o jail administrativo de corta duración (servicio comunitario).\n\n2) SANCIONES MEDIAS: afectan considerablemente el juego. Derivan en jail prolongado, strikes administrativos, suspensiones temporales (ban temporal) o restricciones parciales de rol/facción.\n\n3) SANCIONES GRAVES: vulneran normas fundamentales. Derivan en CK administrativo, suspensiones extensas, expulsión permanente o eliminación de personajes/facciones (vetados de facción)."
  },
  {
    id: 8, cat: "general",
    q: "¿Cuál es el costo de desbaneo por acumulación de sanciones y por uso de cheats?",
    a: "- Acumulación de 5 baneos: $30.000 CLP (ban permanente).\n- Spam o insultos al servidor: $30.000 CLP (ban permanente).\n- Uso de cheats o archivos externos: $80.000 CLP (ban permanente).\n- Acoso y hostigamiento: $100.000 CLP (ban permanente)."
  },

  // ─── Toxicidad / Acoso / Roles sensibles ───
  {
    id: 9, cat: "general",
    q: "¿Qué conductas se consideran toxicidad dentro de los roles delictuales? Da 3 ejemplos.",
    a: "1. Insultar, humillar o burlarse del bando derrotado.\n2. Tomarse fotos con cuerpos abatidos o realizar acciones denigrantes con propósito de toxicidad.\n3. Emitir comentarios fuera de lugar que afecten el rol.\n4. Usar animaciones inapropiadas durante o después del rol.\n5. Hacer uso indebido del canal OOC para provocar u ofender.\n\nSanción: BAN DIRECTO sin excepción."
  },
  {
    id: 10, cat: "general",
    q: "¿Qué tipo de sanción tiene el acoso y hostigamiento en Mysticos RP?",
    a: "TOLERANCIA CERO. Toda sanción aplicada por acoso tendrá carácter PERMANENTE, SIN DERECHO A APELACIÓN, revisión o reducción de condena.\n\nIncluye agravante si se realiza por canales OOC, redes sociales, mensajes privados, llamadas externas o cualquier medio relacionado con la comunidad."
  },
  {
    id: 11, cat: "general",
    q: "¿Qué es un Rol Sensible y qué se requiere para realizarlo?",
    a: "Son actos que involucran contenido delicado o explícito: tortura, violencia extrema, contenido +18 o cualquier interacción que genere incomodidad.\n\nEs OBLIGATORIO el consentimiento mutuo y explícito de todas las partes antes de iniciar la escena. Se solicita mediante /do ¿Estaría de acuerdo?\n\nForzar este rol sin aprobación deriva en sanciones administrativas graves. La Administración se reserva el derecho de cortar el rol o sancionar instantáneamente."
  },

  // ─── Uso de Dados ───
  {
    id: 12, cat: "general",
    q: "¿Cuál es la frase clave para invocar el uso de dados en una negociación y qué pasa si el bando perdedor no acepta?",
    a: "La frase clave es: \"DEJÉMOSLO AL AZAR\".\n\nUna vez activado el /dados, cada bando tira. El que obtenga el número más alto impondrá su condición, la cual DEBE ser aceptada obligatoriamente.\n\nSi no se respeta, el rol continúa pero los involucrados serán sancionados en el acto y quedarán automáticamente fuera del rol. Sanción: Strike directo a OD o sanción al Alto Mando de la facción legal."
  },
  {
    id: 13, cat: "general",
    q: "Durante negociaciones, ¿cuántas cosas se pueden negociar por cada rehén?",
    a: "1 rehén cuenta por 1 negociación. Queda PROHIBIDO negociar más de una cosa por un mismo rehén. Las negociaciones se dan por aceptadas al momento que un bando gane la tirada de dados."
  },
  {
    id: 14, cat: "general",
    q: "¿Está permitido tirar dados para que una persona amarrada escape?",
    a: "NO. Está prohibido forzar tiradas en situaciones donde la lógica del rol ya determina un resultado.\n\nLas tiradas solo aplican cuando la acción tiene un resultado incierto, depende de la suerte o es difícil de ejecutar. No se pueden spamear: cada acción corresponde a una sola tirada."
  },

  // ─── Operaciones / Cambio de facción / Radio / Sniper ───
  {
    id: 15, cat: "general",
    q: "¿Qué ocurre si una persona lleva más de 72 horas en el servidor y necesita un cambio físico en su personaje?",
    a: "No podrá solicitar /pedmenu. Si requiere algún cambio en el personaje, este DEBERÁ ser roleado con EMS.\n\nProhibido: LSPD/BCSO NO pueden realizarse operaciones bajo ningún motivo. Las OD no pueden operarse de manera legal, deben hacerlo con el médico clandestino del momento (mediante correo de jefes)."
  },
  {
    id: 16, cat: "general",
    q: "¿Cuáles son los cooldowns para cambio de facción?",
    a: "- Traspaso entre facciones LEGALES: 1 día para completar el trámite. Después, no podrás cambiar de facción legal por 1 mes.\n- Cambio entre LEGAL e ILEGAL: 2 días de cooldown. Después, no podrás solicitar otro cambio durante 1 mes.\n\nNo habrá excepciones salvo casos extraordinarios determinados por la Administración."
  },
  {
    id: 17, cat: "general",
    q: "¿Está permitido usar la animación de radio en el rostro para evitar daño? ¿Qué tipo de falta es?",
    a: "PROHIBIDO. Utilizar la animación de radio para evadir daño o \"tanquear\" headshots se considera ABUSO DE MECÁNICAS y POWER GAMING (PG).\n\nSanciones: warnings, baneos temporales o expulsión de la facción según gravedad y reincidencia.\n\nLa radio debe usarse únicamente para comunicación IC entre oficiales."
  },
  {
    id: 18, cat: "general",
    q: "¿Qué reglas debe cumplir un oficial que porte francotirador?",
    a: "- Llevar únicamente el Francotirador y su arma de servicio de bajo calibre.\n- Máximo 25 balas.\n- Bolso táctico para transportar el armamento.\n- Prohibido portar otro armamento adicional.\n- El rol debe ser ejecutado por SWAT o SERT con autorización.\n- Debe instalarse en punto elevado o estratégico definido por la coordinación IC.\n- NO puede abrir fuego sin autorización IC o justificación táctica."
  },

  // ─── Conceptos de Rol (41 conceptos del GitBook) ───
  {
    id: 19, cat: "general", basic: true,
    q: "¿Qué es el RDE (Rol de Entorno)? Da un ejemplo.",
    a: "Es la interpretación de todo lo que rodea al personaje en el juego: ambiente, vehículos, edificaciones, clima y cualquier detalle del escenario.\n\nEs clave para mantener la coherencia y enriquecer la narrativa. Ignorar estos elementos afecta la inmersión.\n\nEj: si hay vehículos en movimiento, debes reaccionar adecuadamente, evitando atravesarlos como si no existieran."
  },
  {
    id: 20, cat: "general", basic: true,
    q: "¿Qué es el RDI (Rol de Interpretación)?",
    a: "Es la forma en que los jugadores desarrollan y representan a sus personajes: acciones, personalidad, historia, motivaciones e interacción con el entorno.\n\nEj: si tu personaje es de origen ruso, lo adecuado es que su lenguaje, acento, expresiones y cultura reflejen esa procedencia. Un personaje de entorno humilde no debería comportarse como alguien de la alta sociedad sin justificación."
  },
  {
    id: 21, cat: "general",
    q: "¿Qué es el NRE (Nulo Rol de Entorno)?",
    a: "Falta de consideración o respeto por los elementos y situaciones del entorno dentro del juego. Ocurre cuando un jugador ignora aspectos fundamentales del escenario, afectando coherencia y realismo.\n\nEj: conducir a máxima velocidad sin considerar semáforos, tráfico o peatones."
  },
  {
    id: 22, cat: "general",
    q: "¿Qué es el NRC (Nulo Rol de Choque) y qué expresión está expresamente prohibida?",
    a: "Es una variante del PowerGaming. Ocurre cuando un jugador choca con un objeto, vehículo o personaje y sigue su camino sin reaccionar, ignorando las consecuencias del impacto.\n\nIMPORTANTE: El rol de choque debe ser adecuado. A los usuarios que utilicen el \"/me se soba\" o similares se les aplicará la sanción correspondiente."
  },
  {
    id: 23, cat: "general", basic: true,
    q: "¿Qué es el PowerGaming (PG)? Da un ejemplo.",
    a: "Uso de acciones irreales o ilógicas que una persona no podría realizar en la vida real por limitaciones físicas, biológicas o lógicas. Rompe la inmersión y la coherencia.\n\nEj: correr a toda velocidad con una fractura expuesta sin rolearla.\n\nDeriva en sanciones administrativas. Es fundamental interpretar las acciones de manera creíble."
  },
  {
    id: 24, cat: "general",
    q: "¿Qué es el PG2 (PowerGaming 2)? Da un ejemplo concreto.",
    a: "Forzar, evitar o manipular el rol con el propósito de obtener beneficios injustos. Impide el desarrollo natural del rol y afecta la experiencia de otros.\n\nEJEMPLO \"F8 Quit\": salir del juego intencionalmente para evitar consecuencias dentro del rol (un arresto, asalto o pérdida de enfrentamiento).\n\nEstá sancionado. Hay que asumir las consecuencias de las acciones del personaje."
  },
  {
    id: 25, cat: "general", basic: true,
    q: "¿Qué es el MetaGaming (MG)? Da un ejemplo.",
    a: "Trasladar información desde un canal OOC a IC con el propósito de obtener ventajas dentro del rol. Rompe la inmersión y equidad.\n\nEj: saber por Discord que un rival está en un lugar y actuar IC sobre eso sin haberlo descubierto en el juego.\n\nSanciones administrativas según gravedad."
  },
  {
    id: 26, cat: "general",
    q: "¿Qué es el MG2 (MetaGaming 2) y qué sanción acarrea?",
    a: "Trasladar información desde un Canal IC a OOC. Distorsiona la experiencia de rol y genera conflictos innecesarios entre jugadores.\n\nSanción: PERMABAN."
  },
  {
    id: 27, cat: "general", basic: true,
    q: "¿Qué es el RK (Revenge Kill)? Da un ejemplo.",
    a: "Ignorar las consecuencias de un PK y buscar venganza contra el asesino tras haber sido abatido. Rompe la lógica del rol: un personaje dado por muerto o gravemente herido no debería recordar los eventos que llevaron a su muerte ni tomar represalias inmediatas.\n\nEj: tras ser abatido en un tiroteo, volver al mismo lugar a atacar a quien te eliminó."
  },
  {
    id: 28, cat: "general",
    q: "¿Qué es el HK (Helicopter Kill)?",
    a: "Acción de utilizar las aspas de un helicóptero como arma para abatir a otros jugadores de manera intencional.\n\nEs falta grave: aprovecha una mecánica del juego de forma antirrealista y sin justificación dentro del rol."
  },
  {
    id: 29, cat: "general",
    q: "¿Qué es el MK (MetaKill) y qué sanción tiene?",
    a: "Variante del MetaGaming. Consiste en abatir a otro jugador sin un rol previo válido, basándose en conflictos o situaciones ocurridas en OOC.\n\nEs decir, usar información o sentimientos externos al rol para justificar la muerte de un personaje dentro del juego.\n\nSanciones administrativas severas, incluso de carácter permanente."
  },
  {
    id: 30, cat: "general", basic: true,
    q: "¿Qué es el PK (Player Kill)? ¿Cuánto tiempo abarca la pérdida de memoria?",
    a: "Pérdida de memoria TEMPORAL que sufre tu personaje en IC tras ser abatido o quedar inconsciente. No podrás recordar los últimos 30 MINUTOS antes de tu muerte.\n\nNo puedes regresar al lugar donde fuiste abatido (sería RK).\n\nDatos que debes olvidar: vestimenta, vehículos comprometidos y eventos previos a ser abatido."
  },
  {
    id: 31, cat: "general",
    q: "¿Qué es el PKT (Player Kill Total) y en qué se diferencia del PK?",
    a: "Pérdida de memoria TOTAL que sufre tu personaje tras ser abatido o entrar en inconsciencia severa. El personaje olvida casi toda su historia, recordando únicamente datos básicos de su identidad.\n\nDiferencia con PK: el PK es temporal (30 minutos), el PKT es total y permanente.\n\nNo puedes seleccionar qué recordar: la pérdida debe ser completa salvo los datos básicos. Su abuso genera sanciones."
  },
  {
    id: 32, cat: "general", basic: true,
    q: "¿Qué es el CK (Character Kill)? ¿Cuántos tipos existen?",
    a: "Muerte definitiva e irreversible de un personaje. El personaje deja de existir por completo: pierde amigos, familiares, historia y recuerdos. Al aplicarlo, debes crear un nuevo personaje con identidad totalmente distinta.\n\nExisten 4 tipos:\n1. CK Voluntario: solicitud propia vía ticket en Discord.\n2. CK Administrativo: por incumplimientos reiterados de normativa.\n3. CK Policial a OD: por desmantelación con investigación previa.\n4. CK Policial a Civil: por acumulación de más de US$500.000 en multas."
  },
  {
    id: 33, cat: "general",
    q: "¿Cuál es el procedimiento para solicitar un CK Voluntario?",
    a: "1. Abrir ticket en el DISCORD de Mysticos RP.\n2. Mencionar el motivo por el cual quieres eliminar tu personaje.\n3. Una vez dada la autorización, adjuntar el clip del rol.\n4. Una vez aprobado, se procede a eliminar el PJ para que comiences tu nueva historia."
  },
  {
    id: 34, cat: "general",
    q: "¿Qué es el Fair Play y por qué es importante?",
    a: "Rechazo total a cualquier actitud competitiva o con intención de \"ganar\" un rol, así como acciones forzadas para obtener ventaja sobre otros usuarios.\n\nBusca fomentar una experiencia equilibrada, coherente y respetuosa, donde prime la interpretación y el desarrollo narrativo por sobre el afán de superioridad.\n\nIncumplimiento: sanción administrativa."
  },
  {
    id: 35, cat: "general",
    q: "¿Qué es el Fear Play?",
    a: "Interpretación realista del miedo que experimenta tu personaje en situaciones de peligro, amenaza o cuando su vida esté en riesgo IC.\n\nEs fundamental actuar en coherencia con lo que ocurre en el entorno, adoptando una actitud prudente, temerosa o desesperada según lo amerite la situación."
  },
  {
    id: 36, cat: "general",
    q: "¿Está permitido el modulador de voz? ¿Bajo qué condiciones?",
    a: "Sí, dependiendo del RDI del personaje. Puede usarse cuando tenga coherencia con el contexto (criminales que ocultan identidad, alteraciones vocales justificadas en su lore).\n\nIMPORTANTE: debe ofrecer audio claro y comprensible. No se permite si genera delay, distorsiones excesivas, sonidos metálicos o vuelve la comunicación inentendible."
  },
  {
    id: 37, cat: "general",
    q: "¿Qué es la Sobrecarga de Inventarios?",
    a: "Ramificación del PowerGaming. Prohibida. El personaje debe portar de manera coherente y realista los objetos que lleva: teléfono, dinero en efectivo, alimentos, llaves, etc.\n\nLa sobrecarga se considera ventaja injusta y poco realista. Fomenta organizar adecuadamente los objetos, usar accesorios de transporte visibles y evitar acaparar ítems excesivamente."
  },
  {
    id: 38, cat: "general",
    q: "¿Está permitido portar vestimentas de una facción legal o ilegal a la que no perteneces?",
    a: "NO. Prohibido portar vestimentas pertenecientes a facciones legales si no formas parte de ellas. Lo mismo aplica para organizaciones delictivas.\n\nEsta restricción evita confusiones, suplantaciones de identidad y malentendidos. El uso indebido puede conllevar sanciones administrativas según gravedad y reincidencia."
  },
  {
    id: 39, cat: "general", basic: true,
    q: "¿Qué es el BD (Bad Driving)?",
    a: "Conducción irresponsable o poco realista que sobrepasa los límites del comportamiento adecuado dentro del entorno del rol.\n\nImplica no respetar normas básicas de tránsito, ignorar el contexto urbano o ambiental y actuar de forma temeraria al volante sin considerar las consecuencias lógicas que esto tendría en la vida real."
  },
  {
    id: 40, cat: "general",
    q: "¿Qué es el BJ (Bunny Jump) y está permitido?",
    a: "Acción de saltar repetidamente mientras se corre, con el objetivo de obtener ventaja en velocidad o desplazamiento hacia un lugar específico.\n\nSe considera práctica antirrealista. Está PROHIBIDO. Su uso puede derivar en sanciones administrativas."
  },
  {
    id: 41, cat: "general",
    q: "¿Qué es el ZZ (Zigzags) y está permitido?",
    a: "Acción de correr de un lado a otro de manera rápida y repetitiva para evitar ser alcanzado por disparos durante un tiroteo.\n\nNO está permitido. No es realista ni coherente en un entorno de rol serio. En situaciones de combate se espera reacción racional con coberturas y tácticas realistas. Su práctica conlleva advertencias o sanciones."
  },
  {
    id: 42, cat: "general", basic: true,
    q: "¿Qué es el DM (Deathmatch)? ¿En qué casos NO se considera DM?",
    a: "Llevar a cabo acciones agresivas (golpear, herir, asesinar) sin ninguna justificación válida dentro del rol. Implica iniciar conflicto sin historia previa, razón coherente o desarrollo narrativo.\n\nNO se considera DM cuando existe: contexto claro, antecedentes previos, tensiones desarrolladas a través del rol o motivos sólidos. En esos casos la agresión está permitida."
  },
  {
    id: 43, cat: "general",
    q: "¿En qué casos NO está permitido reconocer a otro usuario?",
    a: "1. Por llevar máscara (la función es ocultar identidad, debe respetarse).\n2. Por la vestimenta (la ropa puede cambiar fácilmente, no es prueba suficiente).\n3. Por el acento de voz (es genérico o interpretado, no es fiable).\n4. Por la forma de caminar, animaciones o movimientos corporales.\n\nEXCEPCIÓN: mascarillas médicas (tapabocas quirúrgicos) NO equivalen a máscara completa. Sí se puede reconocer si solo se usa mascarilla."
  },
  {
    id: 44, cat: "general",
    q: "¿Qué requisitos debe cumplir el Nombre IC de un personaje?",
    a: "OBLIGATORIO: debe estar compuesto por un nombre y un apellido.\n\nDebe ser coherente, realista y respetuoso. NO está permitido:\n- Nombres ofensivos que ridiculicen o insulten creencias, culturas, ideologías o grupos sociales.\n- Nombres \"troll\" creados para burlarse del sistema, causar confusión o romper la inmersión (ej: \"Juan Pistola\", \"Pedro Picapiedra\", \"El Chamuco Diablo\").\n\nSanción: solicitud de modificación o sanciones según el caso."
  },
  {
    id: 45, cat: "general", basic: true,
    q: "¿Qué es la Valoración de Vida? Da un ejemplo de cómo aplicarla.",
    a: "Principio fundamental: sin importar la situación, siempre debes actuar para preservar la vida de tu personaje. Es el elemento más valioso para desarrollar su historia.\n\nEj: si tu personaje es interceptado por un vehículo y personas armadas te ordenan descender con las manos en alto, lo sensato es COOPERAR. Resistirte sin razón justificada estando en desventaja se considera falta a este principio.\n\nIncluso si estás molesto por un rol agresivo, debes mantener la coherencia."
  },
  {
    id: 46, cat: "general",
    q: "¿Qué es el Abuso de Mecánicas?",
    a: "Uso indebido, intencional o repetitivo de funciones del sistema, errores del servidor o animaciones específicas para obtener beneficios que no se obtendrían mediante un rol legítimo.\n\nEj: usar animaciones para evitar daño/inmovilización, explotar fallos para escapar, cambiar armas de manera irreal, realizar acciones físicas no posibles en el rol.\n\nSanción: grave, según intencionalidad, frecuencia y consecuencias."
  },
  {
    id: 47, cat: "general", basic: true,
    q: "¿Qué es el VDM (Vehicle Deathmatch)?",
    a: "Utilizar un vehículo como arma para agredir, dañar o eliminar a otro jugador sin razón justificada o contexto de rol previo.\n\nRompe la inmersión y realismo. Sanciones: desde advertencias hasta expulsión permanente del servidor, según gravedad y antecedentes."
  },
  {
    id: 48, cat: "general", basic: true,
    q: "¿Qué es el DB (Drive-By) y cuándo está permitido?",
    a: "Disparar armas de fuego desde un vehículo en movimiento, como conductor o pasajero, para atacar a otros jugadores.\n\nNO permitido salvo en situaciones específicas con contexto de rol válido y justificado, por ejemplo PERSECUCIONES.\n\nSin justificación es falta grave: rompe la lógica del rol y otorga ventaja injusta. Sanciones desde advertencias hasta expulsión definitiva."
  },
  {
    id: 49, cat: "general",
    q: "¿Qué es el NRH (Nulo Rol de Heridas)?",
    a: "Variante del PowerGaming. Consiste en NO interpretar adecuadamente las consecuencias físicas que sufre un personaje tras resultar herido.\n\nIgnorar o minimizar el impacto de un daño recibido por enfrentamientos, accidentes, caídas u otras situaciones que claramente afectarían el cuerpo del personaje.\n\nSanciones: desde advertencias hasta suspensiones o expulsiones."
  },
  {
    id: 50, cat: "general",
    q: "¿Qué es el AA (Admin Abuse)? Da un ejemplo.",
    a: "Uso indebido de privilegios o comandos administrativos por parte de un miembro del staff para obtener ventaja personal.\n\nEj: teletransportarse para escapar, curarse con comandos, obtener armas o información privilegiada durante una situación de rol.\n\nSanciones severas: suspensión o expulsión del equipo administrativo y, en casos graves, del servidor."
  },
  {
    id: 51, cat: "general",
    q: "¿Qué es el AA2 (Abuso de Animaciones)?",
    a: "Uso intencional y repetido de animaciones del juego para obtener ventaja injusta. Incluye: usar animaciones para evitar daños, esconder armas, moverse de manera antinatural, evadir mecánicas o simular situaciones falsas.\n\nLas animaciones existen para complementar el rol de manera realista, NO para engañar o beneficiarse fuera del rol.\n\nSanciones: desde advertencias hasta suspensiones o expulsiones."
  },
  {
    id: 52, cat: "general",
    q: "¿Quiénes pueden realizar Traspaso de Bienes y bajo qué condiciones?",
    a: "Solo entre usuarios que compartan un mismo rango VIP. Los jugadores deben presentar pruebas claras y verificables mediante TICKET al equipo administrativo, demostrando misma membresía VIP.\n\nNo debe confundirse con el ROL DE HERENCIA (simular muerte de personaje para transferir bienes), que está PROHIBIDO bajo ninguna circunstancia.\n\nIncumplimiento: reversión de bienes, advertencias, suspensión de cuentas."
  },
  {
    id: 53, cat: "general",
    q: "¿Qué ocurre si un usuario permanece AFK más de 5 minutos?",
    a: "Será EXPULSADO AUTOMÁTICAMENTE del servidor para evitar perjudicar a los usuarios de su entorno. Debe volver a ingresar para retomar sus roles."
  },
  {
    id: 54, cat: "general",
    q: "¿Qué es el Cry Report y por qué está prohibido?",
    a: "Cuando una persona pierde un rol y realiza un reporte sin causa real por alguna supuesta falta a la normativa. Generalmente lo hace por queja al perder el rol y no estar de acuerdo con el resultado.\n\nHay momentos de victorias y derrotas: debes estar atento a que cualquiera de los dos resultados ocurrirán. Su práctica trae sanción administrativa."
  },
  {
    id: 55, cat: "general", basic: true,
    q: "¿Qué es el TK (Team Kill)? ¿En qué excepción podría permitirse?",
    a: "Abatir, herir o eliminar a un compañero de tu misma organización, banda, cuerpo policial o grupo sin justificación ni desarrollo previo dentro del rol.\n\nExcepción: cuando exista un rol previo debidamente desarrollado y justificado (tensiones internas, traiciones, conflictos), siempre con autorización o conocimiento de la administración si lo amerita.\n\nSin justificación: sanciones desde advertencias hasta expulsiones permanentes."
  },

  // Quedan por cubrir en LEGAL: NCD, CJ, Estado de inconsciencia, Vacíos legales, DNI/Placa, Doble Facción

  // ══════════════════════════════════════════════════════════════════════════
  // LEGAL (79 preguntas en total · la tómbola saca 20)
  // ══════════════════════════════════════════════════════════════════════════

  // ─── Conceptos varios trasladados a Legal por contexto ───
  {
    id: 56, cat: "legal",
    q: "¿Qué es el NCD (Non Combat Driving)? Da un ejemplo.",
    a: "Ramificación del PowerGaming. Conducir un vehículo en situaciones de peligro extremo sin mostrar temor a las consecuencias, como si el personaje estuviera ajeno a la realidad.\n\nEj: seguir manejando a 200 km/h mientras recibes disparos en la cabeza, ignorando el riesgo inminente.\n\nEn un entorno realista, un conductor intentaría esquivar, buscar refugio o reducir velocidad."
  },
  {
    id: 57, cat: "legal",
    q: "¿Qué es el CJ (Carjacked)?",
    a: "Robo de autos sin ningún tipo de rol previo en una ZONA SEGURA.\n\nImplica que un jugador roba un vehículo de otro jugador o NPC sin haber establecido una narrativa previa, lo que rompe la inmersión y coherencia del rol.\n\nSanciones: desde advertencias hasta suspensión temporal o permanente."
  },
  {
    id: 58, cat: "legal",
    q: "¿Qué ocurre en el Estado de Inconsciencia (Fase 2) respecto al chat OOC?",
    a: "Es la segunda fase luego de haber sido abatido. En esta fase queda TOTALMENTE PROHIBIDO entregar cualquier tipo de información o generar toxicidad mediante los canales OOC."
  },
  {
    id: 59, cat: "legal",
    q: "¿Está permitido usar vacíos legales en la normativa para ganar ventaja?",
    a: "NO. Está estrictamente prohibido. Cualquier intento de manipular o aprovecharse de la normativa será considerado falta grave.\n\nEsto incluye:\n- Forzar interpretaciones ambiguas de las reglas.\n- Omitir partes de la normativa para justificar acciones.\n- Utilizar tecnicismos para evadir consecuencias.\n- Excusarse con \"no sale en la normativa\" o \"no está claro\".\n\nEl criterio del staff que toma el reporte es definitivo."
  },

  // ─── DNI / Placa ───
  {
    id: 60, cat: "legal",
    q: "¿Cuántas identificaciones (DNI o Placa) puedes solicitarle a un oficial en un mismo procedimiento? ¿Se puede requisar el ítem?",
    a: "Solo UNA de las dos: si pides la PLACA no puedes solicitar DNI, y viceversa.\n\nQueda ESTRICTAMENTE PROHIBIDO requisar el ítem físico de PLACA o DNI. La acción solo se realiza mediante /ME y /DO. Solo aplica si la persona no porta el ítem o está abatida en cualquier fase."
  },
  {
    id: 61, cat: "legal",
    q: "¿En qué situaciones puedes sacarle el DNI a una persona como OD?",
    a: "Solo en estos casos:\n1. Invasión de HQ.\n2. Conflicto en ZR.\n3. Sorprender a la persona con medio/alto calibre.\n\nEn ZR es OBLIGATORIO rolear el DNI en todo momento aunque no portes el ítem. Evadir esto es sanción directa. No se puede mentir en un /do."
  },
  {
    id: 62, cat: "legal",
    q: "¿En qué casos un civil puede solicitar la placa a un oficial LSPD?",
    a: "Cuando el rol lo justifique:\n- Faltas de respeto injustificadas.\n- Negligencias dentro del procedimiento.\n- Detención injustificada.\n\nSi se detecta que se forzó el rol para obtenerla, la placa queda inválida y se aplica sanción.\n\nES OBLIGATORIO preguntar el rango de la placa. NO se puede retirar para revisar."
  },

  // ─── Doble Facción ───
  {
    id: 63, cat: "legal",
    q: "¿Qué facciones legales tienen permitido tener doble job y cuál es la única excepción permitida?",
    a: "Se PERMITE doble job SOLO a EMS.\nEj: Puedo ser EMS y con otro PJ ser LSPD, BSCO o FDN.\n\nSe PROHIBE:\n- Realizar actos delictuales con otro PJ si una facción legal está en uno.\n- Ser de 2 facciones policiales (LSPD y BSCO/FDN con distintos PJ).\n- Ser de facción legal e ilegal al mismo tiempo (LSPD y Cartel/Mafia/MC/Banda)."
  },
  {
    id: 64, cat: "legal",
    q: "¿Qué consecuencias tiene incurrir en doble facción prohibida?",
    a: "Las sanciones pueden incluir advertencias, expulsión de una o ambas facciones e incluso CK Administrativo en casos de corrupción o abuso de poder.\n\nEn casos graves:\n- CK Administrativo al PJ involucrado.\n- Baneo Permanente."
  },

  // ─── Persecuciones ───
  {
    id: 65, cat: "legal",
    q: "¿Cuál es la duración estándar mínima de una persecución y qué ocurre cuando se supera?",
    a: "Duración estándar: al menos 5 minutos.\n\nSuperado este tiempo, las facciones legales pueden iniciar el envío de CAUSALES 3/3 (ej: ingresar a callejones, ir en vía contraria 10 segundos, romper instrumentación pública, virar en U, cambio de jurisdicción).\n\nUna vez enviadas las 3 causales, pueden iniciar:\n1. PROTOCOLO PIT (leve choque para desestabilizar, máx 3 PIT).\n2. Si no se detiene: CLAVE ROBERT (pinchar el vehículo)."
  },
  {
    id: 66, cat: "legal",
    q: "¿En qué casos especiales una persecución puede extenderse hasta 25 minutos?",
    a: "En situaciones de alto riesgo o relevancia institucional:\n1. Robo a Banco Central.\n2. Robo a Banco de Paleto.\n3. Intervención en Humane Labs.\n4. Secuestro de oficiales de facciones legales.\n\nLa extensión la autoriza el mando operativo y está sujeta a evaluación táctica constante."
  },
  {
    id: 67, cat: "legal",
    q: "¿Qué ocurre si los atracadores abren fuego contra vehículos policiales durante una persecución?",
    a: "Dicha acción se considera automáticamente TIROTEO ACTIVO.\n\nLas facciones legales NO estarán obligadas a esperar el respectivo entorno de \"abatiendo oficiales\" para proceder con la intervención correspondiente."
  },
  {
    id: 68, cat: "legal",
    q: "¿Cuántas veces se puede reparar el vehículo durante una persecución y cuál es el protocolo?",
    a: "Solo UNA reparación por cada parte (facción legal y atracador).\n\nProtocolo:\n1. Facción legal otorga tiempo para reparación de atracadores (respetando Fair Play).\n2. Si los oficiales lo desean, también pueden reparar bajo las mismas condiciones.\n3. Una vez finalizado, la facción legal toca la sirena 3 veces como señal de reinicio.\n\nNinguna parte puede aprovechar la pausa para ganar ventaja indebida o iniciar disparos."
  },
  {
    id: 69, cat: "legal",
    q: "¿Cuáles son los 4 supuestos de corte inmediato de negociaciones?",
    a: "1. Riesgo inminente para la vida de civiles (con 3 avisos previos).\n2. Riesgo directo para la vida de un oficial (ej: atropellar oficial en motocicleta). Se abre fuego sin previo aviso.\n3. Cambio de vehículo durante la persecución.\n4. Cambio de jurisdicción.\n\nEstas acciones invalidan cualquier acuerdo previo y activan protocolos de contención inmediata."
  },
  {
    id: 70, cat: "legal",
    q: "¿Qué pasa si la OD da muerte a un rehén durante una negociación activa?",
    a: "Se considera automáticamente CORTE TOTAL DE NEGOCIACIONES, autorizando a la facción legal a proceder tácticamente conforme a la situación."
  },
  {
    id: 71, cat: "legal",
    q: "Durante una persecución vehicular, ¿qué ocurre si los atracadores se bajan del vehículo sin armas visibles?",
    a: "Pasa a considerarse PERSECUCIÓN A PIE.\n\nEsta condición aplica únicamente mientras no mantengan armamento en las manos. Si portan arma visible o adoptan actitud amenazante hacia los oficiales, serán considerados peligro inminente y se podrá hacer uso del arma de servicio."
  },

  // ─── Negociaciones ───
  {
    id: 72, cat: "legal",
    q: "¿Qué se entiende por \"Salida Integral\" en una negociación?",
    a: "Es una negociación en la que el o los vehículos involucrados en el delito podrán retirarse del lugar sin obstáculos, sin intervención directa ni bloqueo por parte de las facciones legales.\n\nProporción: 1 VEHÍCULO POR 1 REHÉN."
  },
  {
    id: 73, cat: "legal",
    q: "¿Qué es la negociación de \"Segundos Misisipi\" y cuál es el máximo permitido?",
    a: "Desde que el atracador sube al vehículo se inicia el conteo. Máximo 3 segundos por 1 rehén.\n\nDurante esos segundos los oficiales no pueden intervenir, permitiendo el inicio de la huida."
  },
  {
    id: 74, cat: "legal",
    q: "¿Qué cantidad de beneficios puede negociarse por cada rehén según su tipo?",
    a: "- CIVIL: 1 beneficio por rehén.\n- LSPD/BCSO: 2 beneficios por rehén.\n\n1 rehén cuenta por 1 negociación. Prohibido negociar más de una cosa por un mismo rehén (salvo el caso especial de LSPD/BCSO que vale por 2)."
  },
  {
    id: 75, cat: "legal",
    q: "¿Qué NO se puede negociar bajo ningún concepto? Da 3 ejemplos.",
    a: "1. Igualdad o cambio de Calibre.\n2. Entrega de implementos policiales (armas, chalecos, vehículos).\n3. Desactivación de protocolos tácticos (PIT, Clave ROBERT, Código 100).\n4. Eliminación de antecedentes penales.\n5. Beneficios sin justificación IC o desarrollo narrativo válido.\n6. Omitir aviso de corte de negociación en persecuciones."
  },
  {
    id: 76, cat: "legal",
    q: "¿Cuántos gases puede usar un oficial granadero en un rol y cuántos granaderos puede haber?",
    a: "SOLO UN OFICIAL será el granadero, y NO podrá hacer uso de más de 5 GASES en el rol.\n\nEs fundamental la integridad y resguardo de este oficial.\n\nSi la OD requiere que no se usen gases, es una negociación válida. Si los oficiales se niegan, se deben tirar dados."
  },
  {
    id: 77, cat: "legal",
    q: "¿Cuántos tiradores y helicópteros puede haber en un mismo rol y cuánto cuesta cada uno en negociación?",
    a: "Solo puede haber UNO POR BANDO de cada uno.\n\nNegociación:\n- Tirador: negociable (en caso de no acuerdo, dados).\n- HELICÓPTERO: cuenta como 1 REHÉN para negociarse."
  },

  // ─── DEFCON ───
  {
    id: 78, cat: "legal",
    q: "¿Qué es el sistema DEFCON y quién puede modificar su nivel?",
    a: "Sistema que regula el nivel de respuesta táctica, tipo de armamento y procedimientos autorizados para las fuerzas del orden (LSPD/BCSO/FIB).\n\nSolo el ALTO MANDO o personal autorizado puede modificar el nivel.\n\nEl uso incorrecto o injustificado es falta grave con sanciones IC y administrativas. El sistema NO regula calibre de OD's, solo de facciones policiales."
  },
  {
    id: 79, cat: "legal",
    q: "¿En qué escenarios se activa DEFCON 1 y qué armamento autoriza?",
    a: "DEFCON 1 (Nivel Crítico - USO DE CASCO OBLIGATORIO):\n- Banco Central\n- Humane Labs\n- Huida del Casino\n- Secuestro de funcionarios públicos\n- Traslado o venta de cargamento confidencial\n- Ataques coordinados de grandes organizaciones\n\nAutoriza armamento PESADO (Alto Calibre), chalecos pesados, vehículos blindados.\n\nSolo autorizado por Alto Mando con justificación clara. NO puede activarse para robos medianos o tiroteos simples."
  },
  {
    id: 80, cat: "legal",
    q: "¿Qué escenarios corresponden a DEFCON 2 y qué armamento autoriza?",
    a: "DEFCON 2 (Nivel Medio - CASCO SEGÚN ENTORNO DE LA OD):\n- Joyería (Sur o Norte)\n- Yate (Sur o Norte)\n- Banco de Paleto\n- Life Invader\n- Zonas Rojas Norte / Cayo Perico\n\nAutoriza armamento MEDIO calibre y ALTO según entorno. Patrullaje en binomios. Activación por mandos intermedios con aviso al Alto Mando."
  },
  {
    id: 81, cat: "legal",
    q: "¿Qué escenarios corresponden a DEFCON 3 y qué armamento se permite?",
    a: "DEFCON 3 (Nivel Normal - PROHIBIDO USO DE CASCO):\n- Patrullaje diario\n- Zonas Rojas Sur\n- Tiendas 24/7\n- Ammunation\n- Bancos Fleecas\n- Desguace de vehículos\n- Licorerías\n- Asalto y secuestro de civiles\n\nAutoriza solo armamento BÁSICO: pistolas reglamentarias y dispositivos no letales. NO se permite medio ni alto calibre."
  },
  {
    id: 82, cat: "legal",
    q: "Si una OD envía un entorno indicando \"sin casco\", ¿qué deben respetar todos sus integrantes?",
    a: "TODOS sus integrantes deben mantener la cabeza SIN NINGÚN tipo de accesorio o elemento durante el desarrollo del rol, para que las facciones legales cumplan con lo solicitado (Fair Play).\n\nProhibido: máscaras de gas, auriculares de disparo o música (cascos), cualquier ítem que tanque."
  },

  // ─── Requisitos / Deberes / Habeas Corpus / Corrupción ───
  {
    id: 83, cat: "legal",
    q: "¿Cuáles son los requisitos OOC e IC para postular a una facción policial?",
    a: "Requisitos:\n- Poseer Whitelist o WL Oral en el Discord de Mysticos.\n- Mayor de 16 años OOC y 18 años IC.\n- Condición física apta para el servicio policial.\n- Excelentes habilidades de comunicación y trabajo en equipo.\n- Sin antecedentes penales.\n- No poseer multas.\n\nEl proceso incluye formulario, evaluación teórica, práctica y citación a la academia."
  },
  {
    id: 84, cat: "legal",
    q: "¿Qué se espera de un ciudadano durante una intervención policial y qué conductas se consideran obstrucción?",
    a: "Esperado: detenerse cuando se indica, presentar documentación IC si se solicita, mantener actitud respetuosa.\n\nObstrucción/resistencia:\n1. Negarse a acatar instrucciones.\n2. Interferir en procedimientos activos.\n3. Ocultar información o mentir deliberadamente.\n4. Incitar a terceros a desobedecer.\n5. Usar fuerza física/verbal para evitar detención.\n6. Manipular pruebas u objetos durante la intervención.\n\nPueden derivar en cargos adicionales."
  },
  {
    id: 85, cat: "legal",
    q: "¿Qué derechos fundamentales tiene un ciudadano durante una intervención?",
    a: "1. Conocer el motivo de la intervención.\n2. Permanecer en silencio.\n3. Solicitar la presencia de un abogado.\n4. No ser víctima de abuso físico o verbal.\n5. Ser informado de los cargos en caso de arresto.\n6. Presentar denuncias ante Internal Affairs ante mala conducta."
  },
  {
    id: 86, cat: "legal",
    q: "¿Cuándo procede el Habeas Corpus y cuántas veces puede solicitarse por procedimiento?",
    a: "Procede cuando el detenido ingresa a dependencias policiales SIN que el oficial le haya leído los Derechos Miranda ni la causa de su detención.\n\nSe solicita SOLO UNA VEZ por procedimiento, al momento del ingreso. Los derechos quedan aceptados con un SÍ del detenido; si no responde, se leen por segunda vez y se dan por entendidos.\n\nSi se aprueba: el detenido no es enviado a Federal, pero se requisan elementos ilegales y se cursan multas correspondientes."
  },
  {
    id: 87, cat: "legal",
    q: "¿Cuál es la sanción por corrupción dentro de una facción legal?",
    a: "BAN PERMANENTE del servidor. La corrupción NO está permitida BAJO NINGUNA CIRCUNSTANCIA.\n\nIncluye:\n- Solicitar, aceptar o negociar sobornos.\n- Venta de armamento policial no autorizada.\n- Encubrir delitos, manipular pruebas o favorecer terceros.\n- Abusar del cargo para beneficios personales.\n- Abusar del job para uso o beneficios personales.\n- Usar el rol institucional para proteger actividades ilegales."
  },

  // ─── Helicóptero / Licencias / Bodycams ───
  {
    id: 88, cat: "legal",
    q: "¿Cuántas veces puede repararse el helicóptero institucional y qué debe hacer el piloto luego?",
    a: "Solo 1 vez durante un mismo procedimiento.\n\nAgotada la reparación, el piloto debe retirarse INMEDIATAMENTE de la zona y tiene PROHIBIDO involucrarse más allá de pilotar y entregar información aérea."
  },
  {
    id: 89, cat: "legal",
    q: "¿Se puede disparar desde el helicóptero institucional? ¿Cuenta como +1 oficial?",
    a: "Está PROHIBIDO disparar desde el helicóptero en cualquier rol.\n\nEl piloto NO se considera +1 o +2 policial dentro de los límites de participación.\n\nNo puede portar chaleco de repuesto ni armamento más allá de su arma de servicio."
  },
  {
    id: 90, cat: "legal",
    q: "¿Cuándo puede una OD inhabilitar el helicóptero policial?",
    a: "Solo cuando se encuentre MUY BAJO e INTERRUMPA el rol para que quede completamente fuera del procedimiento.\n\nSe permite reparar 1 vez. Los intentos de inhabilitación deben limitarse a neutralizar, NO explotar la aeronave."
  },
  {
    id: 91, cat: "legal",
    q: "¿Qué pasos se siguen para obtener la Licencia de Armas y cuál es el costo?",
    a: "1. Dirigirse al LSPD y solicitar entrevista.\n2. Presentar:\n   - DNI válido y actualizado.\n   - Test psicológico aprobado por EMS.\n   - Sin antecedentes penales vigentes.\n   - Pago único de $50.000.\n3. LSPD verifica y aprueba/rechaza.\n\nSolo permite portar Pistola SNS de Ammu-Nation."
  },
  {
    id: 92, cat: "legal",
    q: "¿Qué ocurre si usas indebidamente un arma legal? ¿Qué armas siguen prohibidas con licencia?",
    a: "Uso indebido (disparos sin rol, amenazas, etc):\n1. Confiscación del arma.\n2. Revocación inmediata de la licencia.\n3. Sanciones penales según el caso.\n\nPROHIBIDO con o sin licencia: armas de guerra, armas largas, modificadas o del mercado negro. Solo la Pistola SNS es legal."
  },
  {
    id: 93, cat: "legal",
    q: "¿Cuánto cuesta la Licencia de Vuelo y qué documentación se requiere?",
    a: "Costo: $100.000.\n\nDocumentación:\n- DNI válido y actualizado.\n- Test psicológico aprobado por EMS.\n- Sin antecedentes penales vigentes.\n\nVolar sin licencia es falta grave: sanciones o arresto. Pueden revocarla por delitos o accidentes con aeronaves."
  },
  {
    id: 94, cat: "legal",
    q: "¿En qué lugares está aprobado aterrizar un helicóptero?",
    a: "1. Hospital (helipuerto en azotea, uso EMS/personal autorizado).\n2. Aeropuerto Internacional de Los Santos (LSIA).\n3. Aeródromo de Sandy Shores.\n4. Helipuertos privados mapeados.\n5. Playas o zonas abiertas sin tráfico (solo emergencias, con /entorno).\n6. Instalaciones gubernamentales (FIB, LSPD).\n\nPROHIBIDO: calles transitadas, techos no mapeados, zonas comerciales densas, eventos sin coordinación, ZR sin rol aéreo."
  },
  {
    id: 95, cat: "legal",
    q: "¿Qué debe hacer un delincuente para intentar destruir una bodycam?",
    a: "Debe escribir el comando /do podría? para solicitar la acción.\n\nSi no envía el /do correspondiente, es FORZAR ROL y será sancionado.\n\nEl resultado se define por tirada de dados enfrentada (máximo 1 tirada por oficial). El número más alto impone su voluntad en la escena."
  },
  {
    id: 96, cat: "legal",
    q: "Si el oficial gana la tirada de dados al intentar destruir su bodycam, ¿qué tipos de respuestas roleará?",
    a: "Ejemplos válidos cuando el oficial gana:\n- \"La cámara resiste el golpe, apenas queda con marcas superficiales.\"\n- \"El intento de destruirla falla, el dispositivo sigue grabando.\"\n- \"La bodycam se protege con la carcasa reforzada, no logras dañarla.\""
  },
  {
    id: 97, cat: "legal",
    q: "¿Qué facción tiene jurisdicción en Cayo Perico?",
    a: "FDN (Fuerza De Defensa Nacional).\n\nLa conectividad y disponibilidad a utilizar es la de FDN.\n\nEl ingreso a la isla por parte de FDN se enviará vía ANUNCIO."
  },

  // ─── Sanciones específicas legales ───
  {
    id: 98, cat: "legal",
    q: "¿Cuál es la sanción por incumplir las negociaciones acordadas (de parte de OD o facción legal)?",
    a: "Strike directo a OD, o Sanción directa al Alto Mando de la facción legal involucrada en el momento del rol delictual."
  },
  {
    id: 99, cat: "legal",
    q: "¿Qué facciones componen las \"facciones legales\" en la normativa?",
    a: "LSPD, BSCO (BCSO/Sheriff), FIB, FDN.\n\nJurisdicciones específicas:\n- ZR SUR: cubierta por LSPD + FIB.\n- ZR NORTE: cubierta por BSCO + FDN.\n- Cayo Perico: jurisdicción FDN."
  },
  {
    id: 100, cat: "legal",
    q: "¿Qué pasa con los delincuentes abatidos durante el robo a Banco Central que quedan en el lugar?",
    a: "NO se podrá abrir investigación a los delincuentes abatidos que queden en el lugar.\n\nAdemás:\n- No se podrá llamar a EMS para que los ayude ni a un tercero.\n- Aplica para el caso particular del robo a Banco Central."
  },

  // ─── Bodycams / Disposición final ───
  {
    id: 101, cat: "legal",
    q: "¿Cuántas tiradas de dados puede hacer cada oficial al intentar defender la integridad de su bodycam?",
    a: "Una sola tirada por oficial. El sistema busca garantizar el fairplay y evitar escenas cerradas sin evolución narrativa.\n\nLa destrucción de la bodycam debe ser roleada con seriedad y coherencia, evitando interpretaciones forzadas. La administración puede intervenir si detecta irregularidades."
  },

  // Pad final de Legal
  {
    id: 102, cat: "legal",
    q: "¿Está permitido a un oficial disparar a un atracador que se baja del vehículo y portea arma visible?",
    a: "SÍ. Cuando los atracadores portan arma visible o adoptan actitud amenazante hacia los oficiales tras descender del vehículo, son considerados PELIGRO INMINENTE para la integridad del personal policial. Los oficiales pueden hacer uso de su arma de servicio."
  },
  {
    id: 103, cat: "legal",
    q: "¿Qué información debe redactar un oficial al hacer un cateo de evidencia en una escena?",
    a: "Debe redactar informe detallado en sistema ORIGEN. En caso de CK Policial a Civil:\n- Verificar total de multas acumuladas (US$500.000+ para activar protocolo).\n- Si supera el monto: retener al individuo, informar al mando vía radio.\n- Otorgar plazo de 24 horas para reducir multas o búsqueda y captura.\n- Trasladar a comisaría para CK roleado (cadena perpetua).\n- Formalizar como criminal de alta peligrosidad y condena indefinida."
  },
  {
    id: 104, cat: "legal",
    q: "¿Cuántas reparaciones de helicóptero puede tener una OD al inhabilitar el institucional?",
    a: "Se permite reparar el helicóptero un máximo de 1 vez por procedimiento.\n\nLos intentos deben limitarse a NEUTRALIZAR la aeronave, NO a explotarla. Esto aplica tanto para institucional como cuando OD intenta inhabilitarlo."
  },
  {
    id: 105, cat: "legal",
    q: "¿Qué clave táctica se usa para pinchar el vehículo de los atracadores tras protocolo PIT fallido?",
    a: "CLAVE ROBERT. Se aplica cuando, tras 3 intentos de PIT, el vehículo no se detiene. Consiste en pinchar las ruedas del vehículo de los atracadores."
  },
  {
    id: 106, cat: "legal",
    q: "Durante una negociación, ¿cuáles son los beneficios negociables más comunes? Da 4 ejemplos.",
    a: "1. Salida Integral (1 vehículo por 1 rehén).\n2. Separación Vehicular (1 rehén).\n3. Segundos Misisipi (máx 3 segundos por 1 rehén).\n4. Retirar cascos (facciones legales y OD).\n5. No tiradores / No francotiradores / No helicópteros.\n6. Parte del botín (máximo 50%).\n7. Dinero por rehén (en caso de secuestro a facción legal)."
  },

  // ══════════════════════════════════════════════════════════════════════════
  // OD / DELICTUAL (84 preguntas en total · la tómbola saca 20)
  // ══════════════════════════════════════════════════════════════════════════

  // ─── Vestimentas / Consideraciones iniciales ───
  {
    id: 107, cat: "od",
    q: "¿Qué significa \"táctico\" en una vestimenta de OD según la normativa?",
    a: "El término \"táctico\" implica el uso OBLIGATORIO de CASCO y CHALECO.\n\nCada vez que se mencione \"táctico\" se entiende que incluye estos elementos, salvo que el entorno especifique explícitamente que no se usa casco.\n\nLos únicos grupos que no se rigen por colores específicos son CARTELES y MAFIAS; el resto debe respetar identidad visual coherente y reconocible."
  },
  {
    id: 108, cat: "od",
    q: "Tras iniciar un robo, ¿se puede abandonar el lugar sin la llegada de LSPD?",
    a: "NO. Se debe esperar a LSPD para una negociación previa, y luego esperar el GO para iniciar la huida o tiroteo negociando.\n\nSi NO llega facción legal, los tiempos máximos de espera son:\n- 10 MIN: Badulaque, Flecca, Tienda 24/7, Licorería, Ammu-Nation.\n- 20 MIN: Joyería, Yate, Life Invader, Banco Paleto.\n- NO APLICA huida: Banco Central, Humane Labs, Huida del Casino (son pactados)."
  },
  {
    id: 109, cat: "od",
    q: "¿En qué casos se PROHÍBE volver al rol delictual tras ser abatido?",
    a: "Se PERMITE volver SOLO en caso de BUG, REINICIO o CRASHEO del servidor.\n\nSe PROHIBE volver al rol en:\n- Crasheo o Time Out propio.\n- Muerte por falta de comida.\n- Cualquier otra razón fuera de bug del servidor."
  },
  {
    id: 110, cat: "od",
    q: "¿Cuánto tiempo máximo desde el GO puede durar un rol delictual para que se permita cateo?",
    a: "1 hora y 30 minutos (1:30 hrs).\n\nSi el rol excede ese tiempo, NO se podrá realizar cateo a ningún integrante (ni OD ni facción legal)."
  },
  {
    id: 111, cat: "od",
    q: "¿Qué tipos de vehículos están prohibidos en todo acto delictual?",
    a: "1. Vehículos categoría Mysticos.\n2. Vehículos de 2 puertas.\n3. Vehículos con motor V12 instalado.\n4. Uso de Nitro durante los actos.\n\nLos vehículos de alta velocidad pueden ser limitados desde 200 km/h por la LSPD para mantener Fair Play en persecuciones."
  },
  {
    id: 112, cat: "od",
    q: "¿Está permitido el uso de radio mientras se está inconsciente o abatido?",
    a: "NO. Está PROHIBIDO el uso de radio mientras se encuentran inconscientes o abatidos en CUALQUIER FASE.\n\nEn fase 1 solo se podrá hablar a gente cercana. En fase 2 (Estado de Inconsciencia) está totalmente prohibido entregar información o generar toxicidad por canales OOC."
  },

  // ─── Rehenes ───
  {
    id: 113, cat: "od",
    q: "¿En qué robos específicos se puede rolear un rehén ficticio? ¿Se permiten NPCs como rehenes?",
    a: "Rehén ficticio: solo en TIENDAS, LICORERÍAS o BANCO FLEECA en caso de no tener.\n\nNPCs: Sí, pueden tomarse de la calle, pero pueden defenderse. Deben respetar la cantidad de rehenes requerida por el robo y solo aplican en tiendas, licorerías o Banco Fleeca."
  },

  // ─── Cadena Perpetua (CK Civil) ───
  {
    id: 114, cat: "od",
    q: "¿A partir de qué monto de multas un civil pasa a Cadena Perpetua (CK)?",
    a: "Multas impagas superiores a US$500.000.\n\nProceso:\n1. El civil queda en BÚSQUEDA Y CAPTURA.\n2. Al ser detenido por facción legal: traslado a Federal.\n3. Plazo de 24 HORAS desde la notificación (con grillete electrónico) para regularizar.\n4. Si vuelve a ser detenido con grillete: inicio del traslado a Federal."
  },
  {
    id: 115, cat: "od",
    q: "¿Cómo puede una OD evitar el CK por Cadena Perpetua de un compañero?",
    a: "Mediante NOTIFICACIÓN OOC a la OD o encargado, coordinando una salvación en rol durante el traslado a Federal.\n\nCondiciones:\n- La facción legal debe procesar la detención mediante un ROL PACTADO con hora y fecha definidas.\n- La OD puede interceptar el convoy de traslado.\n- Pueden establecerse alianzas: 1 Cartel - 1 Mafia - 1 MC - 1 Banda, sin límite de participantes.\n- Durante este rol NO existe cateo para ninguna parte.\n- Si el sujeto resulta abatido cae en inconsciencia pero no se considera muerto. Si las OD escapan, el sujeto queda liberado."
  },
  {
    id: 116, cat: "od",
    q: "Después de ser rescatado de un traslado a Federal, ¿qué cooldown tiene el sujeto?",
    a: "5 DÍAS de cooldown para realizar:\n- Cambio de nombre.\n- Cirugía facial.\n- Limpieza de documentos.\n\nDurante este período NO puede participar en actos delictuales. Si es sorprendido realizando actividades ilegales, será sancionado administrativamente."
  },

  // ─── Condiciones Generales para Actos Delictuales ───
  {
    id: 117, cat: "od",
    q: "¿Qué es el \"+1 policial\" y por qué hay que respetarlo?",
    a: "En cualquier situación delictiva, debe haber 1 oficial conectado MÁS que la cantidad de delincuentes participantes.\n\nEsto permite que las fuerzas del orden tengan una oportunidad JUSTA de responder y participar en el rol.\n\nEn secuestro a LSPD/Sheriff la conectividad es +2."
  },
  {
    id: 118, cat: "od",
    q: "¿Cuál es la duración máxima del cateo después de terminado el rol y quiénes pueden realizarlo?",
    a: "15 MINUTOS máximo. Pasado ese tiempo, los involucrados deben retirarse de la zona para permitir el ingreso de EMS.\n\nSolo pueden catear quienes QUEDARON EN PIE tras el tiroteo. PROHIBIDO revivir o traer otros jugadores para participar.\n\nUna vez retirados, NO podrán regresar bajo ningún motivo."
  },
  {
    id: 119, cat: "od",
    q: "¿Qué objetos están PROHIBIDOS de retirar en un cateo a un oficial?",
    a: "PROHIBIDO retirar:\n- DNI o PLACA POLICIAL (solo se puede rolear obtener información, NO retirar el objeto).\n- Cualquier implemento policial que no sea armamento o munición.\n\nEspecíficamente NO se puede retirar: Táser, Porra, Combat Pistol (en algunos casos), jeringa de adrenalina."
  },
  {
    id: 120, cat: "od",
    q: "¿Está permitido usar tiradores en cualquier acto delictual?",
    a: "NO. El uso de tiradores está estrictamente PROHIBIDO en cualquier acto delictual, SALVO en aquellos roles específicos ya estipulados previamente y con claridad (ej: Joyería 1 tirador, Banco Central 1 tirador, Banco Paleto 1 tirador, todos especificados en entorno)."
  },

  // ─── Prohibiciones especiales ───
  {
    id: 121, cat: "od",
    q: "¿Está permitido estar descalzo o en chanclas durante un enfrentamiento?",
    a: "NO. Queda ESTRICTAMENTE PROHIBIDO no usar zapatos durante cualquier procedimiento o enfrentamiento contra la LSPD o cualquier ciudadano.\n\nEsta medida busca garantizar un juego limpio y equilibrado para ambos bandos."
  },
  {
    id: 122, cat: "od",
    q: "¿Qué pasa si un delincuente usa el comando /verid durante un tiroteo?",
    a: "Queda estrictamente PROHIBIDO utilizar el comando /verid para ver ID en rol de tiroteo.\n\nSe considera abuso de mecánicas y se aplican sanciones administrativas."
  },
  {
    id: 123, cat: "od",
    q: "¿Está permitido disparar desde un vehículo o moto? ¿Con qué limitación?",
    a: "Los ocupantes del vehículo (EXCEPTO el conductor) pueden disparar, pero SOLO al VEHÍCULO, NUNCA al cuerpo de las personas.\n\nEsto es válido únicamente en contexto de persecución con rol previo justificado. Fuera de ese contexto se considera Drive-By (DB) y está prohibido."
  },

  // ─── Cascos / DEFCON aplicado a OD ───
  {
    id: 124, cat: "od",
    q: "¿En qué escenarios está PROHIBIDO el uso de casco para OD?",
    a: "DEFCON 3 (Nivel Normal):\n- Patrullaje diario\n- Zonas Rojas Sur\n- Tiendas 24/7\n- Ammunation\n- Bancos Fleecas\n- Desguace de vehículos\n- Licorerías\n- Asalto y secuestro de civiles\n- ZR de ciudad (cualquiera)\n- Life Invader\n\nEl uso de casco SIN especificarlo en entorno está totalmente prohibido."
  },

  // ─── Interrogatorios ───
  {
    id: 125, cat: "od",
    q: "¿Cuál es la duración máxima y cuántas preguntas tiene un interrogatorio?",
    a: "Duración máxima: 30 MINUTOS.\nCantidad de preguntas: máximo 5.\n\nDentro de las 5: 3 preguntas ESENCIALES podrán realizarse con dados (/dados) para determinar si el personaje entrega la información.\n\nExceder el tiempo = sanción administrativa directa a jefatura de facción legal y anulación del rol."
  },
  {
    id: 126, cat: "od",
    q: "¿Qué pasa si una OD entrega información FALSA durante un interrogatorio?",
    a: "Es FALTA GRAVE a la normativa: implica STRIKE DIRECTO a la Organización Delictual.\n\nAdemás, no responder con información real cuando el dado lo determine también deriva en sanciones administrativas."
  },
  {
    id: 127, cat: "od",
    q: "¿Qué debe hacer la facción legal antes de iniciar un interrogatorio?",
    a: "Debe leer NUEVAMENTE los Derechos Miranda al detenido antes de iniciar el interrogatorio.\n\nSi NO se realiza la lectura previa: el detenido podrá optar a Habeas Corpus y el procedimiento será INVÁLIDO, debiendo ser puesto en libertad.\n\nObligatorio archivar todo interrogatorio mediante EVIDENCIA AUDIOVISUAL."
  },

  // ─── Cayo Perico ───
  {
    id: 128, cat: "od",
    q: "¿Cuáles son las tres únicas zonas seguras dentro de Cayo Perico?",
    a: "1. Aeropuerto inicial.\n2. Centro de eventos ubicado en la isla.\n3. Zona policial de Cayo (Mansión).\n\nTODO el resto de la isla es Zona Roja Activa. Está TOTALMENTE PROHIBIDO ingresar a estas 3 zonas si te encuentras en enfrentamiento activo (se considera evasión de rol)."
  },
  {
    id: 129, cat: "od",
    q: "¿Qué reglas rigen el uso de helicópteros en Cayo Perico?",
    a: "- Uso LIMITADO únicamente para llegada y salida de la isla.\n- Solo se permite aterrizar y estacionar en el GARAJE PRINCIPAL del aeropuerto de Cayo Perico.\n- Una vez en la isla, movilización exclusiva en vehículos personales (NO Mysticos).\n- NO se permite usar helicópteros para sobrevolar, patrullar o buscar ubicaciones."
  },
  {
    id: 130, cat: "od",
    q: "Después de perder un enfrentamiento en Cayo Perico, ¿cuánto tiempo deben esperar los perdedores para volver?",
    a: "Mínimo 25 MINUTOS.\n\nDeben retirarse hacia el Aeropuerto principal y salir de la isla. Solo después de 25 min pueden volver a esta ZR."
  },
  {
    id: 131, cat: "od",
    q: "¿Cuál es el mínimo de recolección y procesamiento de drogas en ZR?",
    a: "Mínimo de RECOLECCIÓN: 100 unidades.\nMínimo de droga PROCESADA: 50 unidades.\n\nEsta normativa aplica para TODOS los usuarios sin excepción."
  },

  // ─── HQ Delictual ───
  {
    id: 132, cat: "od",
    q: "¿En qué casos puede invadirse una HQ Delictual?",
    a: "Solo en estos casos:\n1. INVESTIGACIÓN por parte de otra OD (provocaciones, amenazas, ataques, persecuciones o acciones hostiles que justifiquen respuesta). Requiere ticket OOC en Discord de OD solicitando la invasión.\n2. TIROTEO ACTIVO en o cerca de la HQ (cualquier OD involucrada puede ingresar mientras el tiroteo dure).\n3. ALLANAMIENTO por parte de facción legal bajo procedimiento oficial autorizado."
  },
  {
    id: 133, cat: "od",
    q: "¿Qué consecuencia tiene ser abatido dentro de una HQ enemiga durante una invasión?",
    a: "CK AUTOMÁTICO al integrante de la OD invasora.\n\nSiempre y cuando el cuerpo permanezca dentro de la HQ adversaria al terminar el rol.\n\nLo mismo aplica para facciones policiales que pierdan dentro de una HQ."
  },

  // ─── Zonas Seguras ───
  {
    id: 134, cat: "od",
    q: "¿Cuáles son las Zonas Seguras y cuál es su radio?",
    a: "Radio: 300 metros a la redonda.\n\nLista:\n- Comisarías\n- Hospitales\n- Garajes públicos (excluye privados)\n- Puntos de trabajo (mecánicos, locales de comida, gasolineras, tiendas de ropa, barberías, trabajos estándar, spawn de trabajos, 24/7 de ciudad)\n\nProtegidas por RDI. Diseñadas para que los jugadores desarrollen roles sin interrupciones."
  },
  {
    id: 135, cat: "od",
    q: "¿Cuáles son las Zonas Libres de Conflicto y qué está prohibido en ellas?",
    a: "Son zonas donde las OD pueden ingresar libremente sin realizar rol agresivo ni enviar entornos:\n1. Médico Clandestino.\n2. Misiones de MC.\n\nESTRICTAMENTE PROHIBIDO:\n- Provocaciones entre OD.\n- Iniciar enfrentamientos, amenazas o conducta hostil.\n\nIncumplimiento: sanción según gravedad."
  },

  // ─── Zonas Rojas ───
  {
    id: 136, cat: "od",
    q: "¿Cuál es el radio de una Zona Roja activa? ¿Cuántas OD pueden enfrentarse simultáneamente?",
    a: "Radio: 300 METROS desde el punto central de activación.\n\nSe permiten enfrentamientos de hasta 4 ORGANIZACIONES en simultáneo (excluyendo facciones legales).\n\nAl disparar se activa un campo rojo alrededor delimitando la zona."
  },
  {
    id: 137, cat: "od",
    q: "¿Qué calibre se permite en ZR de Ciudad vs ZR Norte?",
    a: "ZR de CIUDAD: únicamente BAJO CALIBRE.\nZR de NORTE: TODO TIPO DE CALIBRE (exceptuando Francotirador).\n\nUso de casco:\n- ZR NORTE: permitido si se especifica en entorno.\n- ZR CIUDAD: PROHIBIDO."
  },
  {
    id: 138, cat: "od",
    q: "Una vez que el primer integrante del grupo ingresa a una ZR, ¿cuánto tiempo tienen los demás para entrar?",
    a: "Máximo 1 MINUTO desde el ingreso del primer integrante.\n\nAntes de entrar, todo grupo puede realizar una vuelta de RECONOCIMIENTO de hasta 3 MINUTOS aproximados."
  },
  {
    id: 139, cat: "od",
    q: "Si una OD pierde el tiroteo contra LSPD/BCSO en una ZR, ¿cuánto tiempo queda cerrada la zona?",
    a: "LSPD cierra el perímetro por 20 MINUTOS.\n\nDurante ese tiempo NO podrá ingresar ninguna OD. El acceso se habilita únicamente cuando LSPD/BCSO abandone completamente la zona.\n\nOD que ingrese al perímetro cerrado será SANCIONADA."
  },
  {
    id: 140, cat: "od",
    q: "Tras la muerte en una ZR, ¿cuánto tiempo hay que esperar para reingresar?",
    a: "Si un jugador muere, NO podrá reingresar a ZR hasta que el rol finalice.\n\nSi se retiran de la ZR, deben esperar mínimo 15 MINUTOS para poder reingresar."
  },

  // ─── Alianzas ───
  {
    id: 141, cat: "od",
    q: "¿Qué OD pueden formar alianzas entre sí? ¿Cuál es la regla de cantidad de integrantes?",
    a: "Solo se permiten alianzas entre OD de DISTINTA CATEGORÍA. Específicamente:\n- DE: Cartel, Mafia o MC Leyenda (mayor categoría).\n- HACIA: Pandilla, Banda o MC Heredero (menor categoría).\n\nLa OD de mayor categoría solo puede asistir con HASTA 2 INTEGRANTES MENOS que la de menor categoría.\n\nNO se permiten alianzas entre organizaciones del mismo rango (Cartel con Mafia, ni Pandilla con Banda)."
  },

  // ─── Robos específicos (muestra significativa) ───
  {
    id: 142, cat: "od",
    q: "ROBO A JOYERÍA: ¿Cuántos atracadores se permiten, qué calibre, cuántos rehenes y tiradores?",
    a: "Atracadores: 4 mín - 6 máx (OD).\nArmas: MEDIO CALIBRE.\nTirador: 1 máximo (especificado en entorno).\nRehenes: mín 2 - máx 3 (NO ficticios). Se puede negociar hasta 50% del botín.\nVehículos: solo 4 puertas (no Mysticos).\nNegociación: 10 min máximo.\nCooldown: 30 min.\nEspera por LSPD: 20 min antes de huida con entorno."
  },
  {
    id: 143, cat: "od",
    q: "ROBO A BANCO CENTRAL: ¿Cuántos atracadores en total y cómo deben distribuirse?",
    a: "Total: 10 mín - 17 máx.\nDistribución:\n- Mínimo en INTERIOR: 8.\n- Máximo en EXTERIOR: 4.\n\nArmamento: Alto Calibre + Pistola.\nUSO DE CASCO OBLIGATORIO.\nTirador: 1 máximo (en entorno).\nRehenes: mín 2 - máx 4.\nVehículos: hasta 4 de 4 puertas (NO Mysticos, NO 2 puertas, NO V12).\nNegociación: 15 min máx.\nCooldown: 7 días por OD.\nRol máx: 1h30min desde el GO."
  },
  {
    id: 144, cat: "od",
    q: "¿Cuál es el cooldown del robo a HUMANE LABS y qué cantidad de atracadores y armamento se permite?",
    a: "Atracadores: 15 mín - 20 máx (solo OD).\nArmas: Alto calibre + Pistola.\nTirador: NO permitido.\nRehenes: NO.\nLSPD/BCSO disponible: 16 mínimo (respetar +1).\nVehículos: solo 4 puertas.\nNegociación: NO.\nCooldown: 7 DÍAS por OD."
  },
  {
    id: 145, cat: "od",
    q: "ROBO A BANCO DE PALETO: ¿Quién interviene (LSPD o FDN), cuál es el cooldown y la cantidad máxima de rehenes?",
    a: "Interviene: SHERIFF/FDN disponible mínimo 8 (respetar +1).\nAtracadores: 7 mín - 10 máx.\nArmas: Medio y Alto Calibre + Pistola (NO francotirador).\nTirador: 1 máx (en entorno).\nRehenes: mín 2 - máx 4 (no ficticios).\nVehículos: hasta 3 de 4 puertas (NO Mysticos, NO 2 puertas, NO V12).\nNegociación: 15 min máx.\nCooldown: 120 minutos.\nEspera por LSPD: 20 min."
  },
  {
    id: 146, cat: "od",
    q: "ROBO A LIFE INVADER: ¿Por qué no se permite huida y qué tipo de armamento se usa?",
    a: "Atracadores: 4 mín - 6 máx (OD).\nArmas: Bajo y Medio calibre.\nNO se permite vehículos (este robo es SOLO TIROTEO dentro del recinto).\nNO se permite huida (debe realizarse el tiroteo en el lugar).\nNO se permite uso de casco.\nRehenes: mín 2 - máx 3 (no ficticios).\nCooldown: 90 minutos.\nEspera por LSPD: 20 minutos."
  },
  {
    id: 147, cat: "od",
    q: "SECUESTRO A LSPD/BCSO: ¿Cuál es el +N policial, máximo de rehenes y cooldown?",
    a: "Atracadores: 4 mín - 18 máx (OD).\nArmas: Medio o Alto calibre + Pistola.\nTirador: NO.\nLSPD/SHERIFF disponibles: 9 (respetar +2 policial, NO +1).\nMáximo de rehenes: 2 OFICIALES por secuestro.\nCooldown: 3 secuestros SEMANALES por OD.\nNO se puede secuestrar LSPD/Sheriff para usarlos como rehén de otro robo."
  },
  {
    id: 148, cat: "od",
    q: "ROBO A YATE: ¿Qué vehículos se permiten y cómo debe posicionarse cada bando para iniciar?",
    a: "Atracadores: 5 mín - 8 máx (OD).\nArmas: Bajo / Medio calibre.\nTirador: NO.\nRehenes: NO.\nVehículos: lanchas y helicópteros, MÁXIMO 2 (ej: 1 helicóptero y 1 lancha, o 2 lanchas).\nCooldown: 120 min.\n\nProceso: cada bando debe POSICIONARSE EN CADA EXTREMO del yate (sin baños del 1er nivel), respetando FP. Una vez posicionados, esperar GO de facción legal para abrir fuego."
  },
  {
    id: 149, cat: "od",
    q: "ASALTO A CIVILES: ¿Cuántos asaltos están permitidos por día y qué armamento se usa?",
    a: "Atracadores: Civiles 1-2; OD 1-4.\nArmas permitidas: BAJO CALIBRE, armas cortopunzantes y bate.\nVehículos: 4 puertas o motocicletas (NO Mysticos).\nLímite: solo 4 ASALTOS por día.\n(En OD deben ser registrados en bitácora).\n\nPROHIBIDO robar:\n- Comida y bebestible.\n- Celular o radio.\n- Cosas VIP, accesorios de armas.\n- Accesorios UWU/ToyStore.\n- Más de $50.000."
  },
  {
    id: 150, cat: "od",
    q: "SECUESTRO A CIVILES: ¿Cuántas preguntas se le puede hacer al secuestrado y cómo se rolean?",
    a: "Cantidad de preguntas: 5 al secuestrado.\nDeben ser roleadas mediante DADOS.\n\nAtracadores: Civiles 1-2; OD máx 10 (respetar +1).\nArmas: Bajo, Medio Calibre, cortopunzantes y bate.\nVehículos: solo 4 puertas (no Mysticos).\nNegociación: 5 min máx.\nCooldown: 30 min.\nNo se puede secuestrar personas inconscientes o abatidas (Fase 2)."
  },
  {
    id: 151, cat: "od",
    q: "VENTA DE ARMAMENTO: ¿Cuál es el cooldown y cada cuánto debe enviarse el entorno?",
    a: "Atracadores: 2 mín - 5 máx (OD).\nArmas: Bajo o Medio Calibre.\nTirador: NO.\nVehículos: 4 puertas o motos.\nCooldown: 2 HORAS.\nEntorno: debe enviarse CADA 10 MINUTOS (en caso de negociación prolongada con comprador).\nTiempo máx para huir de la zona tras ganar tiroteo: 15 min."
  },
  {
    id: 152, cat: "od",
    q: "VENTA DE CARGAMENTO: ¿Quién interviene, dónde se realiza y cuál es el cooldown?",
    a: "Interviene: BCSO disponible 9 (respetar +1).\nAtracadores: toda la OD respetando +1.\nArmas: Medio y Alto Calibre.\nTirador: SÍ (sniper).\nVehículos: 4 puertas o motos.\nCooldown: 24 HORAS.\nUbicación: solo se pueden vender cargamentos en NORTE."
  },
  {
    id: 153, cat: "od",
    q: "AJUSTE DE CUENTAS ENTRE OD: ¿Cuál es la regla sobre alianzas y vestimenta?",
    a: "NO SE PERMITEN ALIANZAS.\nNo se puede usar ROPA TÁCTICA (NO casco).\nNO se puede invadir HQ bajo ningún motivo.\n\nArmas: bajo calibre en ciudad, calibre liberado en norte (no sniper).\nVehículos: 4 puertas o motos autorizadas.\nCooldown: no.\nSecuestro post-ajuste: máximo 1 oponente, sin custodia mayor a 30 min."
  },
  {
    id: 154, cat: "od",
    q: "MEXICANA: ¿Cuántas se permiten por semana y dónde están prohibidas?",
    a: "Cooldown: solo 2 mexicanas por OD A LA SEMANA.\nAtracadores: 4 mín - 8 máx (OD).\nArmas: bajo en ciudad, liberado fuera de los límites.\nNO se permite casco.\n\nLa mexicana debe iniciar con AMENAZAS antes del uso de armas (no abatir directamente).\nProhibido en: zonas seguras o cercanías, comisarías, hospitales, garajes dentro de la ciudad.\nSolo se pueden robar objetos ILEGALES."
  },
  {
    id: 155, cat: "od",
    q: "GRAFFITIS (control de territorio): ¿Cuántos graffitis por integrante por día y qué armamento se permite?",
    a: "Atracadores: 1 mín - 3 máx (solo OD).\nArmas: ARMA BLANCA únicamente.\nCantidad: 2 por integrante AL DÍA.\nVehículos: motocicleta/bicicletas.\nCooldown: 5 minutos.\n\nPROHIBIDO grafitear zonas seguras (comisarías, hospitales, locales).\nNo se puede catear a LSPD/Sheriff."
  },
  {
    id: 156, cat: "od",
    q: "OBSTRUCCIÓN durante persecuciones: ¿Quién puede realizarla, con qué arma y qué efecto tiene sobre las negociaciones?",
    a: "Solo puede realizarla quien YA ESTÉ DENTRO de la zona por donde transitarán los sospechosos.\n\nObligatorio: enviar /entorno describiendo las condiciones.\nEl envío del entorno se considera CORTE AUTOMÁTICO DE NEGOCIACIONES.\nQuien realice la obstrucción debe ir con ARMA MELE.\nNO podrá incorporarse al tiroteo posterior."
  },

  // ══════════════════════════════════════════════════════════════════════════
  // EMS (45 preguntas en total · la tómbola saca 20)
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: 157, cat: "ems",
    q: "¿Es obligatorio el uniforme reglamentario para que un EMT salga a terreno?",
    a: "SÍ, es OBLIGATORIO. No está permitido salir de servicio sin portar la vestimenta correspondiente al rango y función del EMS.\n\nEsto permite la correcta identificación del personal en zonas de emergencia."
  },
  {
    id: 158, cat: "ems",
    q: "¿Puede un EMT salir a terreno si hay un solo SAMS en servicio?",
    a: "NO podrá salir libremente. En este caso, el EMT podrá actuar ÚNICAMENTE en respuesta a llamados del LSPD o SHERIFF, como parte de un apoyo coordinado y específico.\n\nEl objetivo es no sobrecargar al único SAMS y mantener la integridad operativa del servicio."
  },
  {
    id: 159, cat: "ems",
    q: "Durante DEFCON 1 (Alerta Roja), ¿qué debe usar un EMT para salir a terreno y a qué llamados puede responder?",
    a: "Solo puede salir a terreno con UNIFORME TÁCTICO REGLAMENTARIO.\n\nPrioridades:\n- Atender EXCLUSIVAMENTE llamados de radio emitidos por LSPD.\n- NO responder a llamados civiles (/auxilio) dado el nivel de peligro.\n\nEstá PROHIBIDO secuestrar o interceptar a personal SAMS durante DEFCON 1, ya que va contra el carácter neutral y pasivo del cuerpo médico."
  },
  {
    id: 160, cat: "ems",
    q: "¿Puede el personal EMS portar armas de fuego o taser en servicio?",
    a: "NO. El personal EMS no puede portar ningún tipo de arma de fuego ni taser. Su función es exclusivamente médica.\n\nLa única excepción es el uniforme táctico (casco + chaleco) durante DEFCON 1, pero sin armas."
  },
  {
    id: 161, cat: "ems",
    q: "¿Cómo debe redactarse un /auxilio según la normativa de EMS y qué información debe contener?",
    a: "Se redacta en TERCERA PERSONA y debe incluir:\n- Vestimenta del herido.\n- Cantidad de personas involucradas.\n- Tipo y gravedad de las heridas.\n- Ubicación exacta y descripción del entorno.\n- Si hay peligro activo en la zona.\n\nEs el ÚNICO medio para solicitar atención médica en el lugar de los hechos."
  },
  {
    id: 162, cat: "ems",
    q: "Como civil, ¿qué pasa si invades el hospital sin requerir atención médica?",
    a: "El Hospital NO debe ser utilizado como punto de reunión o espacio social. Generar disturbios o alterar el orden en los alrededores puede resultar en sanciones que van desde MULTAS ECONÓMICAS hasta CASTIGOS ADMINISTRATIVOS más severos según la gravedad."
  },
  {
    id: 163, cat: "ems",
    q: "¿Pueden los civiles portar o utilizar kits médicos?",
    a: "NO. Está TERMINANTEMENTE PROHIBIDO que los civiles porten o utilicen kits médicos. Son de uso EXCLUSIVO del personal EMS.\n\nCualquier incumplimiento será considerado una infracción GRAVE."
  },
  {
    id: 164, cat: "ems",
    q: "¿Está permitido ingresar al Hospital con máscara o el rostro cubierto?",
    a: "NO, salvo que la situación médica lo justifique.\n\nEsta medida busca mantener seguridad, transparencia y control dentro de las instalaciones hospitalarias."
  },
  {
    id: 165, cat: "ems",
    q: "Como ciudadano, ¿dónde debes solicitar turnos para tratamientos especializados en el Hospital?",
    a: "A través del DISCORD, en el apartado EMS, canal #agendar-turno.\n\nEsto permite la correcta organización del servicio y asegura una atención adecuada para cada caso."
  },
  {
    id: 166, cat: "ems",
    q: "Cuando describes tus heridas al EMS, ¿qué nivel de detalle se espera?",
    a: "Lo MÁS ESPECÍFICO posible: zona afectada, causa del daño y nivel de gravedad.\n\nEsto permite al personal EMS actuar de manera rápida y eficiente, optimizando el tiempo de respuesta y tratamiento."
  },
  {
    id: 167, cat: "ems",
    q: "¿Qué consecuencias tiene rolear adecuadamente las heridas tras un evento grave?",
    a: "A mayor gravedad: tratamiento más extenso, complejo y costoso.\n\nAdemás, el personaje deberá permanecer con ACTIVIDAD LIMITADA durante su recuperación, manteniendo coherencia entre la lesión sufrida y el esfuerzo físico que puede o no realizar.\n\nLa continuidad del rol médico es clave para la inmersión y el realismo."
  },
  {
    id: 168, cat: "ems",
    q: "¿Está prohibido secuestrar a EMS en cualquier situación o solo en DEFCON 1?",
    a: "PROHIBIDO SIEMPRE, pero con énfasis especial en DEFCON 1.\n\nEn DEFCON 1 se prohíbe expresamente secuestrar o interceptar a personal SAMS porque va contra el carácter neutral y pasivo del cuerpo médico.\n\nEn otras situaciones, si una OD lo hace igual: mantener el rol y reportar al Staff con pruebas posteriormente."
  },
  {
    id: 169, cat: "ems",
    q: "¿Pueden los EMS tener doble facción o doble job con otras instituciones?",
    a: "SÍ, es la única excepción permitida en doble job.\n\nUn jugador puede ser EMS con un PJ y con OTRO PJ ser LSPD, BSCO o FDN.\n\nLo que está PROHIBIDO: doble facción si uno de los PJ es OD (no puede tener EMS, LSPD, FIB, BOMBEROS, SHERIFF, FDN ni GOB con otro PJ)."
  },
  {
    id: 170, cat: "ems",
    q: "¿Bajo qué normativa cae un EMS si responde a un civil durante DEFCON 1?",
    a: "Es una falta a protocolo. Durante DEFCON 1 el EMS debe priorizar EXCLUSIVAMENTE los llamados de radio emitidos por el LSPD.\n\nResponder a /auxilio civiles en DEFCON 1 contradice el protocolo de Alerta Roja y puede derivar en sanción interna del cuerpo EMS según su normativa interna."
  },
  {
    id: 171, cat: "ems",
    q: "¿Cómo debe comportarse un civil con el personal médico y el Hospital en general?",
    a: "Debe mostrar respeto en TODO MOMENTO hacia el personal médico y al Hospital, reconociendo la labor crítica que desempeña el equipo de emergencias en el bienestar de la ciudad.\n\nFaltar el respeto al personal médico es sancionable según la normativa del servidor."
  },

{
    id: 172, cat: "general",
    q: "SITUACIÓN: Vas conduciendo y chocas de frente contra otro vehículo a alta velocidad. ¿Qué debes hacer?",
    a: "Debes rolear el choque adecuadamente (rol de heridas/NRC). Bajar la velocidad, detenerte, e interpretar las consecuencias físicas del impacto mediante /me y /do (golpes, aturdimiento, posibles fracturas).\n\nSeguir conduciendo como si nada es NRC (Nulo Rol de Choque), una variante del PowerGaming. Usar \"/me se soba\" para minimizar el daño está sancionado."
  },
  {
    id: 173, cat: "general",
    q: "SITUACIÓN: Un amigo te dice por Discord que vio a un sujeto X cometiendo un robo. Te lo encuentras IC. ¿Puedes acusarlo?",
    a: "NO. Eso sería MetaGaming (MG): trasladar información de OOC a IC para obtener ventaja. Tu personaje no presenció nada IC, por lo que no puede actuar sobre esa información.\n\nSolo puedes actuar sobre lo que tu personaje vivió, presenció o descubrió dentro del juego."
  },
  {
    id: 174, cat: "general",
    q: "SITUACIÓN: Te apuntan 3 personas armadas y te ordenan bajar del auto con las manos arriba. ¿Cuál es la respuesta correcta?",
    a: "COOPERAR. Por Valoración de Vida, estando en clara desventaja, lo lógico y realista es obedecer para preservar la vida del personaje.\n\nResistirte sin razón justificada (sacar arma, huir) sería no valorar la vida y es sancionable. Tu personaje debe actuar como una persona real que valora su existencia."
  },
  {
    id: 175, cat: "general",
    q: "SITUACIÓN: Te abatieron en un tiroteo hace 10 minutos. Te reaniman. ¿Puedes volver al lugar a buscar a quien te disparó?",
    a: "NO. Volver al lugar donde fuiste abatido se considera Revenge Kill (RK), que está prohibido.\n\nAdemás, por PK pierdes la memoria de los últimos 30 minutos antes de tu muerte: no recuerdas quién te disparó, su vestimenta ni los eventos previos."
  },
  {
    id: 176, cat: "general",
    q: "SITUACIÓN: Estás perdiendo un tiroteo y antes de morir cierras el juego con F8. ¿Qué falta cometes?",
    a: "PG2 (PowerGaming 2), específicamente \"F8 Quit\": salir del juego intencionalmente para evitar consecuencias dentro del rol (un arresto, un asalto o perder un enfrentamiento).\n\nEs sancionable. Debes asumir las consecuencias de las acciones de tu personaje."
  },
  {
    id: 177, cat: "general",
    q: "SITUACIÓN: Un sujeto con máscara completa te asalta. Luego lo ves sin máscara y reconoces que es la misma persona por su ropa. ¿Puedes acusarlo?",
    a: "NO. No está permitido reconocer a alguien por su vestimenta (la ropa cambia fácilmente) ni se le pudo identificar mientras usaba máscara completa (su función es ocultar la identidad).\n\nReconocerlo sin justificación válida sería MetaGaming."
  },
  {
    id: 178, cat: "general",
    q: "SITUACIÓN: Quieres iniciar un rol de tortura con otro jugador. ¿Qué debes hacer primero?",
    a: "Solicitar consentimiento explícito mediante /do ¿Estaría de acuerdo? (o por /ooc). Es un Rol Sensible y requiere aprobación expresa de todas las partes ANTES de iniciar.\n\nSi la persona rechaza, debes buscar una alternativa de rol. Forzarlo deriva en sanción administrativa grave y corte de rol instantáneo."
  },
  {
    id: 179, cat: "general",
    q: "SITUACIÓN: Recibes disparos mientras conduces a 180 km/h y sigues manejando perfectamente sin inmutarte. ¿Qué falta es?",
    a: "NCD (Non Combat Driving), ramificación del PowerGaming. Conducir en peligro extremo sin mostrar temor ni reacción, como si el personaje fuera ajeno a la realidad.\n\nLo realista sería intentar esquivar, buscar refugio o reducir velocidad."
  },
  {
    id: 180, cat: "general",
    q: "SITUACIÓN: Pierdes un rol de robo y abres un /report quejándote de que la policía hizo trampa, sin pruebas reales. ¿Qué es esto?",
    a: "Cry Report: reportar sin causa real solo por queja de haber perdido el rol y no estar de acuerdo con el resultado.\n\nEstá prohibido y trae sanción administrativa. Habrá victorias y derrotas; debes aceptar ambos resultados."
  },
  {
    id: 181, cat: "general",
    q: "SITUACIÓN: Tu personaje fue abatido y está en el suelo inconsciente (Fase 2). Tus compañeros preguntan por radio dónde estás. ¿Puedes responder?",
    a: "NO. En estado de inconsciencia (Fase 2) está totalmente prohibido entregar cualquier información o usar la radio.\n\nTampoco puedes usar radio en Fase 1 estando abatido. En Fase 1 solo puedes hablar a gente físicamente cercana."
  },
  {
    id: 182, cat: "general",
    q: "SITUACIÓN: Llevas en tu inventario 5 rifles, 10 pistolas, 3 chalecos y 50 cargadores caminando por la ciudad. ¿Qué problema hay?",
    a: "Sobrecarga de Inventarios, ramificación del PowerGaming. El personaje debe portar objetos de manera coherente y realista.\n\nLlevar semejante arsenal sin justificación ni accesorios de transporte visibles es ventaja injusta y poco realista. Debes organizar y limitar lo que cargas."
  },
  {
    id: 183, cat: "general",
    q: "¿Qué es el RDI y por qué un personaje ruso debería hablar distinto a uno local?",
    a: "El RDI (Rol de Interpretación) es cómo desarrollas y representas a tu personaje: personalidad, historia, motivaciones e interacción.\n\nUn personaje ruso debería reflejar su procedencia en lenguaje, acento, expresiones y cultura. Esto hace la experiencia más inmersiva, creíble y disfrutable, manteniendo coherencia narrativa."
  },
  {
    id: 184, cat: "general",
    q: "SITUACIÓN: Vas saltando repetidamente mientras corres para llegar más rápido a un punto durante un tiroteo. ¿Qué falta cometes?",
    a: "BJ (Bunny Jump): saltar repetidamente mientras corres para ganar ventaja en velocidad o desplazamiento. Es antirrealista y está prohibido.\n\nSi además corres en zigzag para esquivar balas, sumas ZZ (Zigzags), también prohibido."
  },
  {
    id: 185, cat: "general",
    q: "SITUACIÓN: Un staff usa sus comandos para teletransportarse y escapar de un secuestro en el que está como jugador. ¿Qué falta es?",
    a: "AA (Admin Abuse): uso indebido de privilegios o comandos administrativos para obtener ventaja personal dentro del juego.\n\nRompe la imparcialidad del staff. Sanciones severas: suspensión o expulsión del equipo administrativo y, en casos graves, del servidor."
  },
  {
    id: 186, cat: "general",
    q: "SITUACIÓN: Atropellas intencionalmente a un jugador con tu auto sin ningún rol previo ni motivo. ¿Qué falta cometes?",
    a: "VDM (Vehicle Deathmatch): usar el vehículo como arma para dañar o eliminar a otro jugador sin razón justificada ni contexto de rol previo.\n\nSanciones severas: desde advertencias hasta expulsión permanente, según gravedad y antecedentes."
  },
  {
    id: 187, cat: "general",
    q: "SITUACIÓN: Quieres ponerle a tu personaje el nombre 'Goku Súper Saiyan'. ¿Está permitido?",
    a: "NO. Es un nombre \"troll\" creado para romper la inmersión. El Nombre IC debe componerse de nombre y apellido coherentes, realistas y respetuosos.\n\nNombres ofensivos o troll (ej: \"Juan Pistola\", \"Pedro Picapiedra\") están prohibidos. El staff puede solicitar modificación o sancionar."
  },
  {
    id: 188, cat: "general",
    q: "SITUACIÓN: Golpeas y matas a un jugador random en la calle sin haber tenido ninguna interacción previa con él. ¿Qué falta es?",
    a: "DM (Deathmatch): acciones agresivas (golpear, herir, matar) sin justificación válida ni historia previa.\n\nPara que una agresión sea válida debe existir contexto claro, antecedentes, tensiones desarrolladas o motivos sólidos. Sin eso, es DM y se sanciona según gravedad y reincidencia."
  },
  {
    id: 189, cat: "general",
    q: "SITUACIÓN: Te disparan en una pierna pero sigues corriendo y saltando como si nada. ¿Qué falta cometes?",
    a: "NRH (Nulo Rol de Heridas), variante del PowerGaming: no interpretar las consecuencias físicas tras resultar herido.\n\nUna herida de bala en la pierna debería rolearse con cojera, dolor y movilidad reducida (/me, /do). Ignorarla está prohibido y sancionado."
  },
  {
    id: 190, cat: "general",
    q: "¿Qué información debes olvidar obligatoriamente tras un PK?",
    a: "Tras un PK (pérdida de memoria de los últimos 30 minutos antes de tu muerte) debes olvidar:\n- La vestimenta de quienes te atacaron.\n- Los vehículos comprometidos.\n- Los eventos previos a ser abatido.\n\nNo puedes volver al lugar (sería RK)."
  },
  {
    id: 191, cat: "general",
    q: "SITUACIÓN: Simulas que tu personaje va a morir para 'heredar' todos tus bienes a otro jugador. ¿Está permitido?",
    a: "NO. Es Rol de Herencia, prohibido bajo ninguna circunstancia. Se considera evasión de reglas y ventaja injusta.\n\nEl traspaso de bienes solo se permite entre usuarios con el MISMO rango VIP, mediante ticket con pruebas verificables al staff."
  },
  {
    id: 192, cat: "general", basic: true,
    q: "¿Cuál es la diferencia entre MG y MG2?",
    a: "MG (MetaGaming): trasladar información de OOC → IC para obtener ventaja.\nMG2 (MetaGaming 2): trasladar información de IC → OOC.\n\nAmbos están prohibidos. El MG2 tiene sanción de PERMABAN por distorsionar la experiencia y generar conflictos entre jugadores."
  },
  {
    id: 193, cat: "general", basic: true,
    q: "¿Cuál es la diferencia entre PK y PKT?",
    a: "PK (Player Kill): pérdida de memoria TEMPORAL, solo de los últimos 30 minutos antes de la muerte.\n\nPKT (Player Kill Total): pérdida de memoria TOTAL; el personaje olvida casi toda su historia, conservando solo datos básicos de su identidad. No puedes elegir qué olvidar."
  },
  {
    id: 194, cat: "general",
    q: "SITUACIÓN: Un compañero de tu misma banda te traiciona y te dispara sin que hubiera ningún conflicto previo entre ustedes. ¿Qué falta cometió él?",
    a: "TK (Team Kill): abatir a un compañero de tu misma organización sin justificación ni desarrollo previo.\n\nSolo sería válido con un rol previo de tensiones internas o traición debidamente desarrollado, y con conocimiento/autorización de la administración si lo amerita."
  },
  {
    id: 195, cat: "general",
    q: "SITUACIÓN: Usas un modulador de voz tan distorsionado que nadie entiende lo que dices. ¿Está permitido?",
    a: "NO. Aunque el modulador está permitido según el RDI, NO se permite si genera delay, distorsiones excesivas, sonidos metálicos o vuelve la comunicación inentendible.\n\nDebe ofrecer audio claro y comprensible para mantener la inmersión, no dificultarla."
  },
  {
    id: 196, cat: "general",
    q: "SITUACIÓN: Vas a robar un cajero y no envías ningún /entorno antes de empezar. ¿Qué consecuencia tiene?",
    a: "El /entorno es OBLIGATORIO y debe enviarse ANTES de realizar la acción delictual. Representa lo que civiles o terceros observarían y reportarían.\n\nSu omisión afecta el desarrollo del rol de los demás y puede ser considerada falta grave, sancionada por la administración."
  },
  {
    id: 197, cat: "general",
    q: "SITUACIÓN: Un jugador te insulta y se burla después de ganarte un tiroteo, tomándose fotos con tu cuerpo. ¿Qué falta comete?",
    a: "Toxicidad en roles. Está estrictamente prohibido insultar, humillar o burlarse del bando derrotado, así como tomarse fotos con cuerpos abatidos con propósito de generar toxicidad.\n\nSanción: BAN DIRECTO sin excepción."
  },
  {
    id: 198, cat: "general",
    q: "¿Qué significa que un acto tenga clasificación (L/M/G) junto a su concepto?",
    a: "Indica que la falta puede ser Leve, Media o Grave según la gravedad del caso, la intencionalidad, la frecuencia y los antecedentes del usuario.\n\nLa misma falta puede escalar de Leve a Grave por reincidencia. El staff evalúa cada situación y aplica la sanción correspondiente."
  },
  {
    id: 199, cat: "general",
    q: "SITUACIÓN: Quedas atrapado fuera del mapa por un bug. ¿Qué comando usas?",
    a: "/report. Se usa para situaciones que requieren intervención del staff fuera del rol: bugs, quedar atrapado, caerse del mapa, ser atropellado sin motivo, etc.\n\nNO uses /ayuda para esto (esa es para consultas), ni vuelvas al rol delictual si quedaste fuera por un crasheo/time out propio."
  },
  {
    id: 200, cat: "general",
    q: "SITUACIÓN: Dos jugadores no se ponen de acuerdo sobre si una mentira fue creíble. ¿Cómo se resuelve?",
    a: "Con /dados. El que miente tira y el receptor contra-tira.\n\n- Si el mentiroso saca alto y el receptor bajo: la mentira es convincente.\n- Si es al revés: el receptor puede dudar o descubrir la mentira, pero debe rolearlo coherentemente (sin mencionar el uso de dados).\n\nDebe haber rol previo en /me o /do; el dado es complemento, no reemplazo."
  },
  {
    id: 201, cat: "general",
    q: "¿Qué pasa si te excusas diciendo 'eso no está en la normativa' o 'no lo entendí así'?",
    a: "No es excusa válida. Forzar interpretaciones ambiguas, omitir partes de la normativa o usar tecnicismos para evadir consecuencias es uso de vacíos legales, considerado falta grave.\n\nSiempre prevalecerá el criterio del staff que tome el reporte. Ante dudas, consulta con la administración ANTES de actuar."
  },
  {
    id: 202, cat: "general",
    q: "SITUACIÓN: Un local quiere enviar 5 anuncios seguidos en 2 minutos para promocionar su evento. ¿Está permitido?",
    a: "NO. Los anuncios (/anuncio) deben tener un margen mínimo de 10 minutos entre sí para evitar spam.\n\nLos anuncios vía TX por staff solo aplican para eventos importantes y no pueden ser más de 3 veces por evento."
  },

  // ════════════════ LEGAL ADICIONALES ════════════════

  {
    id: 203, cat: "legal",
    q: "SITUACIÓN: Eres oficial y un detenido pide su Habeas Corpus alegando que no le leíste los Derechos Miranda. ¿Qué ocurre si efectivamente no se los leíste?",
    a: "El Habeas Corpus procede. El detenido NO será enviado a Federal. Sin embargo, todo elemento ilegal será requisado y se cursarán las multas correspondientes a los actos cometidos.\n\nSolo puede solicitarse UNA vez por procedimiento, al momento de ingresar a dependencias policiales."
  },
  {
    id: 204, cat: "legal",
    q: "Como oficial, ¿puedes negociar la entrega de tu chaleco o tu vehículo policial a cambio de un rehén?",
    a: "NO, bajo ningún concepto. Está prohibido negociar entrega de implementos policiales (armas, chalecos, vehículos), incluso si un oficial está en peligro.\n\nTampoco se negocia: igualdad/cambio de calibre, desactivación de protocolos (PIT, ROBERT, Código 100), ni eliminación de antecedentes penales."
  },
  {
    id: 205, cat: "legal",
    q: "¿Qué es el protocolo PIT y cuántas veces puede aplicarse?",
    a: "El PIT es un leve choque con el objetivo de desestabilizar el vehículo de los atracadores. Puede aplicarse un MÁXIMO de 3 PIT.\n\nSolo procede tras superar los 5 minutos de persecución y haber enviado las 3 causales. Si el vehículo no se detiene tras los PIT, se inicia la Clave ROBERT."
  },
  {
    id: 206, cat: "legal",
    q: "SITUACIÓN: Un oficial usa la animación de hablar por radio para tanquear headshots en un tiroteo. ¿Qué falta comete?",
    a: "Abuso de Mecánicas / PowerGaming (PG). Usar la animación de radio para evadir daño o tanquear disparos en la cabeza está estrictamente prohibido.\n\nSanciones: warnings, baneos temporales o expulsión de la facción, según gravedad y reincidencia."
  },
  {
    id: 207, cat: "legal",
    q: "¿Cuál es la diferencia de conectividad policial entre un robo normal y un secuestro a LSPD/Sheriff?",
    a: "Robo normal: se respeta el +1 policial (un oficial más que la cantidad de delincuentes).\n\nSecuestro a LSPD/Sheriff: se respeta el +2 policial durante la persecución (dos oficiales más sobre la cantidad de atracadores presentes)."
  },
  {
    id: 208, cat: "legal",
    q: "Como oficial, ¿puedes disparar desde el helicóptero institucional?",
    a: "NO. Está PROHIBIDO disparar desde el helicóptero en cualquier rol.\n\nEl helicóptero solo sirve para reconocimiento aéreo y reposicionar oficiales en lugares estratégicos. El piloto no cuenta como +1/+2 y solo puede portar su arma de servicio."
  },
  {
    id: 209, cat: "legal",
    q: "¿Qué es la Clave ROBERT y cuándo se aplica?",
    a: "Consiste en pinchar el vehículo de los atracadores. Se aplica cuando, tras los 3 intentos de PIT, el vehículo no se detiene.\n\nNo puede negociarse su desactivación bajo ningún concepto."
  },
  {
    id: 210, cat: "legal",
    q: "SITUACIÓN: Un ciudadano acumula deudas por más de US$500.000 en multas. ¿Qué procede?",
    a: "Cadena Perpetua (CK Policial a Civil). Queda en Búsqueda y Captura. Al ser detenido:\n1. Se le instala grillete electrónico (rol IC) con 24h para regularizar.\n2. Si vuelve a ser detenido con grillete: traslado a Federal.\n3. Se formaliza como criminal de alta peligrosidad y condena indefinida (CK roleado)."
  },
  {
    id: 211, cat: "legal",
    q: "Como facción legal, ¿qué debes hacer antes de iniciar un interrogatorio a un detenido?",
    a: "Leer NUEVAMENTE los Derechos Miranda al detenido antes de comenzar.\n\nSi no se realiza la lectura, el detenido puede optar a Habeas Corpus, el procedimiento es inválido y debe ser puesto en libertad. Todo interrogatorio debe archivarse con evidencia audiovisual."
  },
  {
    id: 212, cat: "legal",
    q: "¿Cuántas preguntas se pueden hacer en un interrogatorio y cuántas se resuelven con dados?",
    a: "Máximo 5 preguntas. De esas, 3 son ESENCIALES y se resuelven con /dados para determinar si el personaje entrega la información real.\n\nDuración máxima del interrogatorio: 30 minutos. Excederlo sanciona a la jefatura de la facción legal y anula el rol."
  },
  {
    id: 213, cat: "legal",
    q: "SITUACIÓN: Eres oficial y un compañero te ofrece dinero para liberar a un detenido. ¿Qué haces y qué falta sería aceptar?",
    a: "Debes rechazarlo y reportarlo. Aceptar sería CORRUPCIÓN: solicitar/aceptar/negociar sobornos, encubrir delitos o abusar del cargo.\n\nLa corrupción NO está permitida bajo ninguna circunstancia. Sanción: BAN PERMANENTE del servidor."
  },
  {
    id: 214, cat: "legal",
    q: "¿Qué requisitos de edad se necesitan para postular a una facción policial?",
    a: "Mayor de 16 años OOC y 18 años IC.\n\nAdemás: poseer WL o WL Oral, condición física apta, buenas habilidades de comunicación y trabajo en equipo, sin antecedentes penales y sin multas."
  },
  {
    id: 215, cat: "legal",
    q: "SITUACIÓN: Un atracador se baja del vehículo durante una persecución pero sin arma en las manos. ¿Puedes dispararle?",
    a: "NO mientras no porte armamento visible. La situación pasa a considerarse persecución a pie.\n\nSi el sujeto porta arma visible o adopta actitud amenazante hacia los oficiales, se considera peligro inminente y SÍ puedes usar tu arma de servicio."
  },
  {
    id: 216, cat: "legal",
    q: "¿Qué tipo de arma legal puede portar un civil con Licencia de Armas y dónde la adquiere?",
    a: "Solo la Pistola SNS, adquirida en Ammu-Nation. La licencia cuesta $50.000 y requiere DNI, test psicológico aprobado por EMS y sin antecedentes penales.\n\nProhibido: armas de guerra, largas, modificadas o del mercado negro."
  },
  {
    id: 217, cat: "legal",
    q: "SITUACIÓN: Como oficial cierras un perímetro tras ganarle a una OD en una ZR. ¿Cuánto tiempo permanece cerrado y qué pasa si otra OD entra?",
    a: "El perímetro queda cerrado por 20 minutos. Durante ese tiempo NO puede ingresar ninguna OD.\n\nEl acceso se habilita solo cuando LSPD/BCSO abandone la zona. La OD que ingrese al perímetro cerrado será sancionada."
  },
  {
    id: 218, cat: "legal",
    q: "¿Cuáles son las causales que se pueden enviar (3/3) antes de iniciar el protocolo PIT?",
    a: "Ejemplos de causales: ingresar a callejones, ir en vía contraria durante 10 segundos, romper instrumentación pública (semáforos, basureros, props), virar en U, cambio de jurisdicción.\n\nSe envían tras superar los 5 minutos de persecución. Una vez enviadas las 3, se puede iniciar el PIT."
  },
  {
    id: 219, cat: "legal",
    q: "Como piloto del helicóptero institucional, ¿cuántas reparaciones tienes y qué haces después?",
    a: "Máximo 1 reparación durante un mismo procedimiento.\n\nAgotada la reparación, debes retirarte inmediatamente de la zona. Tienes prohibido involucrarte más allá de pilotar y entregar información aérea. No puedes bloquear rutas, forzar colisiones ni intervenir sin coordinación terrestre."
  },
  {
    id: 220, cat: "legal",
    q: "SITUACIÓN: Eres oficial y un detenido te falta el respeto gravemente sin motivo. ¿Puede pedirte la placa?",
    a: "Sí, en ese caso el rol lo justifica (faltas de respeto injustificadas, negligencias en procedimiento o detención injustificada).\n\nDebes dar tu placa, pero él debe preguntar el rango y NO puede retirar el ítem físico. Si forzó el rol para obtenerla, la placa queda inválida."
  },
  {
    id: 221, cat: "legal",
    q: "¿Qué facciones cubren la ZR Sur y cuáles la ZR Norte?",
    a: "ZR SUR: LSPD + FIB (conectividad +1).\nZR NORTE: BSCO + FDN (conectividad +1).\n\nLa jurisdicción de Cayo Perico pertenece a FDN."
  },
  {
    id: 222, cat: "legal",
    q: "¿Cuánto cuesta la Licencia de Vuelo y qué pasa si vuelas sin ella?",
    a: "Cuesta $100.000. Requiere DNI, test psicológico aprobado por EMS y sin antecedentes penales, además de aprobar un examen práctico.\n\nVolar sin licencia es falta grave: puede acarrear sanciones o arresto. Las licencias se revocan por delitos o accidentes con aeronaves."
  },
  {
    id: 223, cat: "legal",
    q: "SITUACIÓN: Durante una negociación de robo, la OD quiere negociar 3 beneficios por un solo rehén civil. ¿Es válido?",
    a: "NO. Un rehén civil cuenta por 1 beneficio. 1 rehén = 1 negociación.\n\nLa excepción es LSPD/BCSO como rehén, que vale por 2 beneficios. Negociar más de lo permitido por un rehén está prohibido."
  },
  {
    id: 224, cat: "legal",
    q: "¿Cuál es el máximo de botín que puede negociar una OD y cuántos segundos Misisipi puede obtener?",
    a: "Botín: máximo 50% (por 1 rehén).\nSegundos Misisipi: máximo 3 segundos (por 1 rehén), contados desde que suben al vehículo.\n\nAmbos son beneficios negociables válidos siempre que haya justificación de rol."
  },
  {
    id: 225, cat: "legal",
    q: "SITUACIÓN: Eres granadero en un rol. Ya lanzaste 5 gases. ¿Puedes lanzar más?",
    a: "NO. Solo un oficial puede ser granadero y no puede usar más de 5 gases en el rol.\n\nSi la OD pidió que no se usaran gases y los oficiales se negaron, debió resolverse con dados antes."
  },
  {
    id: 226, cat: "legal",
    q: "¿En qué casos especiales una persecución puede extenderse a 25 minutos en lugar de los 5 estándar?",
    a: "Robo a Banco Central, Robo a Banco de Paleto, Intervención en Humane Labs y Secuestro de oficiales de facciones legales.\n\nLa extensión la autoriza el mando operativo y está sujeta a evaluación táctica constante."
  },

  // ════════════════ OD / DELICTUAL ADICIONALES ════════════════

  {
    id: 227, cat: "od",
    q: "SITUACIÓN: Inicias un robo a un Badulaque y LSPD no llega. ¿Cuánto esperas antes de poder huir?",
    a: "10 minutos. Aplica a Badulaque, Flecca, Tienda 24/7, Licorería y Ammu-Nation.\n\nTranscurrido ese plazo, puedes retirarte enviando el respectivo /entorno de huida especificando el abandono de la zona."
  },
  {
    id: 228, cat: "od",
    q: "SITUACIÓN: Llevas 1 hora y 40 minutos en un rol de robo. Ganas el tiroteo. ¿Puedes catear a los oficiales abatidos?",
    a: "NO. El cateo está prohibido en roles que excedan 1 hora y media (1:30) desde el GO.\n\nComo ya pasaron 1:40, no se puede catear a nadie (ni OD ni facción legal)."
  },
  {
    id: 229, cat: "od",
    q: "SITUACIÓN: Tu organización es un Cartel. Quieres asaltar a un civil en la calle. ¿Está permitido?",
    a: "NO. Por RDI, los Carteles NO tienen permitido realizar asalto a civiles, y por ende tampoco catear al abatido.\n\nSi se produce un tiroteo, solo será ese rol como tal, un tiroteo. Los Carteles, Mafias y MC Leyendas tienen prohibido catear en ciudad salvo que el acto delictual lo indique (Banco Central, Joyería, Yate, ZR)."
  },
  {
    id: 230, cat: "od",
    q: "SITUACIÓN: Vas a un robo y quieres llevar refuerzos extra para tener ventaja. ¿Se permite?",
    a: "NO. Se PROHÍBEN los refuerzos en TODO acto delictual, salvo en aquellos roles específicos que lo estipulen de forma clara y previa.\n\nDebes respetar el +1 policial y la cantidad máxima de atracadores del robo."
  },
  {
    id: 231, cat: "od",
    q: "SITUACIÓN: Quieres realizar un robo usando un auto deportivo de 2 puertas con motor V12 y nitro. ¿Está permitido?",
    a: "NO. Están prohibidos en todo acto delictual: vehículos categoría Mysticos, vehículos de 2 puertas, motores V12 y el uso de Nitro.\n\nGeneralmente solo se permiten vehículos de 4 puertas (o motos según el robo)."
  },
  {
    id: 232, cat: "od",
    q: "¿Cuál es el cooldown del robo al Banco Central y cuánto dura el rol máximo desde el GO?",
    a: "Cooldown: 7 días por OD.\nRol máximo: 1 hora y 30 minutos desde el GO (si se extiende, no se podrá catear nada).\n\nNegociación: 15 min máximo. Si no hay acuerdo, se DEBE usar dados con la frase \"Dejémoslo al azar\"."
  },
  {
    id: 233, cat: "od",
    q: "En el robo al Banco Central, ¿cómo deben distribuirse los atracadores entre interior y exterior?",
    a: "Total: 10-17 atracadores.\n- Mínimo en INTERIOR: 8.\n- Máximo en EXTERIOR: 4.\n\nEl o los que tienen el botín deben estar posicionados OBLIGATORIAMENTE dentro del banco. Solo el tirador designado puede estar fuera, en posición elevada."
  },
  {
    id: 234, cat: "od",
    q: "SITUACIÓN: Estás robando y un compañero queda abatido. ¿Puedes catearlo o revivirlo para que ayude en el cateo final?",
    a: "NO. El cateo solo lo pueden hacer quienes quedaron en pie tras el tiroteo. Está prohibido revivir o traer otros jugadores para participar en el cateo.\n\nAdemás, no se permite el cateo entre compañeros en ningún momento."
  },
  {
    id: 235, cat: "od",
    q: "SITUACIÓN: Quieres invadir la HQ de otra organización. ¿Qué debes hacer y qué riesgo asumes?",
    a: "Debes abrir un ticket OOC en el Discord de OD solicitando la invasión (debe haber investigación: provocaciones, amenazas, ataques o conflicto activo justificado).\n\nRiesgo: si alguno de tus integrantes es abatido y su cuerpo queda dentro de la HQ adversaria al terminar el rol, recibe CK AUTOMÁTICO."
  },
  {
    id: 236, cat: "od",
    q: "¿Cuántas organizaciones pueden enfrentarse simultáneamente en una Zona Roja?",
    a: "Hasta 4 organizaciones en simultáneo, excluyendo la participación de facciones legales.\n\nLos enfrentamientos entre OD deben tener rol previo (conflictos, disputas territoriales, negocios)."
  },
  {
    id: 237, cat: "od",
    q: "SITUACIÓN: Estás en una ZR de ciudad. ¿Qué calibre puedes usar y puedes usar casco?",
    a: "En ZR de CIUDAD: únicamente BAJO CALIBRE, y está PROHIBIDO el uso de casco.\n\nEn ZR NORTE sí se permite todo tipo de calibre (excepto francotirador) y casco si se especifica en el entorno."
  },
  {
    id: 238, cat: "od",
    q: "SITUACIÓN: Mueres en una Zona Roja. ¿Puedes volver a entrar?",
    a: "NO mientras el rol no finalice. Si te retiras de la ZR, debes esperar mínimo 15 minutos para reingresar.\n\nAl ingresar a una ZR aceptas el PK; no puedes usar /Auxilio ni /Report dentro para pedir reanimación. No existen devoluciones en ZR."
  },
  {
    id: 239, cat: "od",
    q: "SITUACIÓN: Una Banda con 7 integrantes pide apoyo a un Cartel para ir a ZR. ¿Cuántos puede enviar el Cartel?",
    a: "Máximo 5 integrantes (2 menos que la OD de menor categoría). La alianza es válida porque va de mayor (Cartel) a menor categoría (Banda).\n\nTodos deben estar dentro del entorno inicial de la Banda. No se permiten alianzas entre organizaciones del mismo rango."
  },
  {
    id: 240, cat: "od",
    q: "SITUACIÓN: Estás escondido en un arbusto en una ZR para emboscar enemigos. ¿Está permitido?",
    a: "NO. Está prohibido esconderse en arbustos, romper estructuras o modificar el entorno para obtener ventajas indebidas (Fair Play).\n\nTampoco se puede campear fuera del perímetro, bloquear ingresos, ni disparar desde el interior hacia el exterior de la ZR o viceversa."
  },
  {
    id: 241, cat: "od",
    q: "¿Qué armamento se permite en el robo a Joyería y cuántos rehenes se requieren?",
    a: "Armas: Medio Calibre.\nAtracadores: 4-6 (OD).\nRehenes: mínimo 2 - máximo 3 (NO ficticios).\nTirador: 1 máximo (especificado en entorno).\nSe puede negociar hasta 50% del botín.\nCooldown: 30 min. La Joyería solo puede robarse 2 veces al mes (según categoría de OD)."
  },
  {
    id: 242, cat: "od",
    q: "SITUACIÓN: Estás haciendo una Mexicana y abates directamente al sujeto sin amenazarlo primero. ¿Cometes una falta?",
    a: "SÍ. La Mexicana debe iniciar con rol previo y amenazas claras ANTES del uso de armas. No puedes abatir directamente.\n\nEl incumplimiento es motivo de sanción. Solo se permiten 2 mexicanas por OD a la semana, y solo se pueden robar objetos ilegales."
  },
  {
    id: 243, cat: "od",
    q: "¿Cuántos asaltos a civiles están permitidos por día y cuánto dinero máximo puedes robar?",
    a: "Máximo 4 asaltos por día (registrados en bitácora si es OD).\nDinero máximo: $50.000.\n\nProhibido robar: comida/bebestible, celular/radio, cosas VIP, accesorios de armas, accesorios UWU/ToyStore. Armas permitidas: bajo calibre, cortopunzantes y bate."
  },
  {
    id: 244, cat: "od",
    q: "¿Cuál es el cooldown del robo a Venta de Cargamento y dónde puede realizarse?",
    a: "Cooldown: 24 horas.\nUbicación: solo se pueden vender cargamentos en el NORTE.\n\nArmas: medio y alto calibre. Tirador: sí (sniper). Interviene BCSO con 9 disponibles (respetar +1)."
  },
  {
    id: 245, cat: "od",
    q: "SITUACIÓN: Vas a robar el Banco de Paleto. ¿Qué facción interviene y cuántos atracadores se permiten?",
    a: "Interviene SHERIFF/FDN (mínimo 8 disponibles, respetar +1).\nAtracadores: 7-10.\nArmas: Medio y Alto Calibre + Pistola (NO francotirador).\nRehenes: 2-4 (no ficticios).\nVehículos: hasta 3 de 4 puertas (no Mysticos, no 2 puertas, no V12).\nCooldown: 120 minutos."
  },
  {
    id: 246, cat: "od",
    q: "SITUACIÓN: Secuestras a un oficial de LSPD. ¿Puedes usarlo como rehén para otro robo?",
    a: "NO. Está prohibido secuestrar LSPD/Sheriff para usarlos como rehén de algún robo.\n\nEn el secuestro a LSPD/BCSO: máximo 2 oficiales por secuestro, 3 secuestros semanales por OD, y se respeta el +2 policial en persecución."
  },
  {
    id: 247, cat: "od",
    q: "SITUACIÓN: Estás en Cayo Perico en pleno tiroteo y corres hacia el aeropuerto para escapar del enfrentamiento. ¿Está permitido?",
    a: "NO. Ingresar a las zonas seguras de Cayo (aeropuerto inicial, centro de eventos, mansión policial) durante un enfrentamiento activo se considera EVASIÓN DE ROL y es gravemente sancionado."
  },
  {
    id: 248, cat: "od",
    q: "¿Cómo debe transportarse y usarse el francotirador en Venta de Cargamento o Cayo Perico?",
    a: "Debe transportarse en un BOLSO (justificando el peso). Si usas motocicleta, debe ir guardado en el bolso (no subirse con él en la mano).\n\nPara usarlo: /me y /do de ensamblar y desensamblar (entre disparos no es necesario comando). Si te posicionas en un lugar estratégico (antena, punto elevado), está prohibido moverte de ahí."
  },
  {
    id: 249, cat: "od",
    q: "SITUACIÓN: En un Ajuste de Cuentas entre OD, quieres pedir apoyo a otra organización aliada. ¿Se permite?",
    a: "NO. En el Ajuste de Cuentas entre OD NO se permiten alianzas.\n\nTampoco se puede usar ropa táctica (no casco) ni invadir HQ. Al finalizar puedes catear (dinero, armas, munición, chaleco, drogas), sacar DNI y secuestrar solo 1 oponente por máximo 30 minutos."
  },
  {
    id: 250, cat: "od",
    q: "¿Qué se permite catear a un oficial abatido durante un robo a Drogas en ZR?",
    a: "Únicamente: armamento, munición, chalecos y objetos ilegales, en cualquier fase de inconsciencia.\n\nEn este caso particular SÍ se puede solicitar DNI o Placa a los oficiales abatidos. Tienen 20 minutos para realizar las acciones y deben dejar a los abatidos fuera de la ZR para que llegue EMS."
  },
  {
    id: 251, cat: "od",
    q: "SITUACIÓN: Vas a hacer Graffitis de control de territorio. ¿Qué armamento puedes llevar y dónde NO puedes grafitear?",
    a: "Armas: solo ARMA BLANCA.\nProhibido grafitear zonas seguras: comisarías, hospitales y locales.\n\nAtracadores: 1-3 (OD). Cantidad: 2 por integrante al día. Vehículos: motocicleta/bicicletas. Cooldown: 5 minutos. No se puede catear a LSPD/Sheriff."
  },
  {
    id: 252, cat: "od",
    q: "SITUACIÓN: En el robo a Yate, ¿cómo debe posicionarse cada bando antes de iniciar?",
    a: "Cada bando debe posicionarse en CADA EXTREMO del yate (no se pueden usar los baños del 1er nivel), respetando el Fair Play para ambos.\n\nUna vez posicionados, se da el GO al rol tras el anuncio de la facción legal. No se permite usar el techo del yate para ganar ventaja."
  },
  {
    id: 253, cat: "od",
    q: "¿Por qué el robo a Life Invader no permite huida ni vehículos?",
    a: "Porque es un robo de SOLO TIROTEO que debe realizarse dentro del recinto. No se permiten vehículos ni huida.\n\nSe puede salir del recinto y tirotearse dentro del perímetro del Life Invader. No se permite casco, ni negociar el bloqueo de la puerta principal. Cooldown: 90 min."
  },
  {
    id: 254, cat: "od",
    q: "SITUACIÓN: Realizas un Secuestro a Civil y el rehén pasa a Fase 2 (inconsciencia). ¿Qué debes hacer?",
    a: "El rol debe finalizar de manera inmediata. La OD responsable debe enviar el /auxilio correspondiente para que EMS acuda a reanimar al sujeto.\n\nSi el abatido está en Fase 1, la OD tiene máximo 10 minutos para reanimarlo (con médico ilegal)."
  },
  {
    id: 255, cat: "od",
    q: "SITUACIÓN: Realizas una obstrucción durante una persecución. ¿Con qué arma debes ir y puedes unirte al tiroteo después?",
    a: "Debes ir con ARMA MELE. El envío del entorno de obstrucción se considera corte automático de negociaciones.\n\nNO puedes incorporarte al tiroteo posterior. Solo puedes obstruir si ya estabas dentro de la zona por donde transitan los sospechosos."
  },
  {
    id: 256, cat: "od",
    q: "¿Qué pasa si una OD no cumple su RDI o los robos asignados a su categoría?",
    a: "Es motivo de Strike Directo a la OD, sin derecho a apelación.\n\nCada categoría de OD (Cartel, Mafia, MC, Banda, Pandilla) tiene robos específicos permitidos según su nivel. Realizar robos fuera de su RDI está sancionado."
  },
  {
    id: 257, cat: "od",
    q: "SITUACIÓN: Ganas un tiroteo en Recolección de Drogas en ZR. ¿Cuánto tiempo tienes para las acciones y qué debes hacer con los abatidos?",
    a: "Tienes 20 minutos para realizar todas las acciones (cateo, recolección, etc).\n\nAl finalizar debes dejar a los abatidos FUERA de la ZR para que EMS llegue a la zona. El mínimo de recolección es 100 unidades y el de procesado 50 unidades."
  },
  {
    id: 258, cat: "od",
    q: "¿Cuántos rehenes y de qué tipo se requieren en Ammu-Nation, y cuánto botín se puede negociar?",
    a: "Rehenes: 2 máximo (1 ficticio permitido si no hay reales).\nSe puede negociar hasta la mitad del botín como máximo para conseguir otro beneficio.\nArmas: bajo calibre. Atracadores: 1-3 (OD). Cooldown: 30 min. Negociación: 10 min máx."
  },
  {
    id: 259, cat: "od",
    q: "SITUACIÓN: En Banco Central, un compañero que tiene el botín es abatido. ¿Qué pasa con la opción de huida?",
    a: "El botín se da por PERDIDO. La huida puede solicitarse al inicio de la negociación (por 1 rehén) o pasados 30 minutos del tiroteo, siempre que queden 3 delincuentes en pie.\n\nPero si el portador del botín cae antes de huir, ya no hay botín que llevarse."
  },
  {
    id: 260, cat: "od",
    q: "SITUACIÓN: Eres OD y hay un perímetro abierto por facción legal. ¿Puedes ingresar a esa Zona Roja?",
    a: "NO. Se prohíbe el ingreso por parte de OD cuando hay un perímetro abierto por parte de facción legal.\n\nLas facciones legales solo pueden ingresar a ZR si existe un aviso (entorno de la OD o facción legal); ingresar sin rol previo también está prohibido."
  },

  {
    id: 261, cat: "ems",
    q: "¿Qué es un EMT y cuál es su función principal?",
    a: "EMT (Emergency Medical Technician) o Técnico en Emergencias Médicas es el primer nivel dentro del cuerpo de EMS en Mysticos RP.\n\nSu función principal es brindar atención médica prehospitalaria, responder a emergencias en la vía pública y asistir a ciudadanos con heridas o condiciones críticas antes de llegar al hospital."
  },
  {
    id: 262, cat: "ems",
    q: "¿Qué es un SAMS dentro del cuerpo de EMS?",
    a: "SAMS (Sanitario de Mayor Supervisión) es un rango superior dentro del cuerpo médico.\n\nSi solo hay un SAMS en servicio, el EMT no puede salir libremente a terreno; solo puede actuar en respuesta a llamados de LSPD o Sheriff, para no sobrecargar al único SAMS."
  },
  {
    id: 263, cat: "ems",
    q: "SITUACIÓN: Eres EMT y recibes un /auxilio civil durante DEFCON 1. ¿Debes responder?",
    a: "NO. Durante DEFCON 1 (Alerta Roja) debes priorizar EXCLUSIVAMENTE los llamados de radio del LSPD.\n\nNo debes responder a llamados civiles (/auxilio) por el alto nivel de peligro. Además, solo puedes salir con uniforme táctico reglamentario."
  },
  {
    id: 264, cat: "ems",
    q: "SITUACIÓN: Eres EMS y llegas a una escena donde aún hay tiroteo activo. ¿Qué debes hacer?",
    a: "Esperar a que la zona sea segura. Debes respetar los tiempos y coordinarte; no ingresar a una zona de conflicto activo.\n\nEn ZR, debes esperar el término del rol y que los abatidos sean dejados fuera de la zona antes de poder asistirlos."
  },
  {
    id: 265, cat: "ems",
    q: "SITUACIÓN: Un paciente llega al hospital y quiere rolear contenido obsceno o sexual contigo sin tu consentimiento. ¿Qué haces?",
    a: "Es un Rol Sensible y requiere consentimiento mutuo y explícito. Si no estás de acuerdo, puedes negarte y debe buscarse una alternativa de rol.\n\nForzar este tipo de rol es sancionable. Puedes cortar el rol y reportar al staff vía ticket."
  },
  {
    id: 266, cat: "ems",
    q: "¿Por qué un EMS no puede ser secuestrado durante un conflicto?",
    a: "Porque el cuerpo médico tiene carácter NEUTRAL y PASIVO. Secuestrar o interceptar personal SAMS/EMS, especialmente en DEFCON 1, va contra esa naturaleza neutral.\n\nEstá prohibido. Si igual ocurre, el EMS debe mantener el rol y reportar con pruebas al staff posteriormente."
  },
  {
    id: 267, cat: "ems",
    q: "SITUACIÓN: Eres civil y encuentras un kit médico en el suelo. ¿Puedes usarlo para curarte?",
    a: "NO. Los kits médicos son de uso EXCLUSIVO del personal EMS. Está terminantemente prohibido que los civiles los porten o utilicen.\n\nCualquier incumplimiento es infracción GRAVE."
  },
  {
    id: 268, cat: "ems",
    q: "SITUACIÓN: Como EMS, ¿puedes salir a terreno sin tu uniforme reglamentario?",
    a: "NO. El uso del uniforme reglamentario es OBLIGATORIO para cualquier salida a terreno.\n\nNo está permitido salir de servicio sin la vestimenta correspondiente al rango y función, ya que permite la correcta identificación del personal en zonas de emergencia."
  },
  {
    id: 269, cat: "ems",
    q: "Como ciudadano herido, ¿qué información detallada debes entregar al describir tus heridas?",
    a: "Lo más específico posible: zona afectada, causa del daño y nivel de gravedad.\n\nEsto permite al EMS actuar rápida y eficientemente. A mayor gravedad de la herida, el tratamiento será más extenso, complejo y costoso, y el personaje quedará con actividad limitada durante su recuperación."
  },
  {
    id: 270, cat: "ems",
    q: "SITUACIÓN: Como EMS atiendes a un paciente con herida de bala grave. ¿Qué debe respetar el paciente tras el tratamiento?",
    a: "Debe asumir las consecuencias del rol de heridas: permanecer con actividad limitada durante su recuperación, manteniendo coherencia entre la lesión y el esfuerzo físico que puede o no realizar.\n\nNo puede comportarse como si estuviera sano inmediatamente (sería NRH / PowerGaming)."
  },
  {
    id: 271, cat: "ems",
    q: "SITUACIÓN: Eres EMS y un PJ tuyo también es LSPD. ¿Está permitido?",
    a: "SÍ. EMS es la ÚNICA excepción de doble job permitida.\n\nPuedes ser EMS con un PJ y LSPD/BSCO/FDN con otro PJ. Lo prohibido es tener un PJ en OD y otro en cualquier facción gubernamental o de servicio (incluyendo EMS)."
  },
  {
    id: 272, cat: "ems",
    q: "¿Puede un EMT salir a terreno en DEFCON 1 sin uniforme táctico?",
    a: "NO. Durante DEFCON 1 el EMT solo puede salir a terreno si cuenta con uniforme táctico reglamentario.\n\nSin ese uniforme no debe salir. Y aun con él, solo atiende llamados de radio del LSPD, no civiles."
  },
  {
    id: 273, cat: "ems",
    q: "SITUACIÓN: Como ciudadano quieres reunirte con amigos en la entrada del hospital a conversar. ¿Está permitido?",
    a: "NO. El Hospital no debe usarse como punto de reunión o espacio social.\n\nNo se debe invadir sus instalaciones ni alrededores si no se requiere atención médica. Generar disturbios puede derivar en multas económicas o castigos administrativos según gravedad."
  },
  {
    id: 274, cat: "ems",
    q: "SITUACIÓN: Quieres entrar al hospital con la cara cubierta por una máscara. ¿Puedes?",
    a: "NO, salvo que la situación médica lo justifique. Está prohibido ingresar al hospital con máscaras o el rostro cubierto.\n\nEsta medida busca mantener seguridad, transparencia y control dentro de las instalaciones hospitalarias."
  },
  {
    id: 275, cat: "ems",
    q: "¿Dónde y cómo se solicita un turno para tratamiento especializado en el hospital?",
    a: "A través del Discord, en el apartado EMS, canal #agendar-turno.\n\nEsto permite organizar el servicio y asegurar atención adecuada para cada caso. No es válido exigir atención inmediata sin turno para tratamientos especializados."
  },
  {
    id: 276, cat: "ems",
    q: "¿En qué persona se redacta el /auxilio y qué debe incluir?",
    a: "En TERCERA PERSONA. Debe incluir: vestimenta del herido, cantidad de personas involucradas, tipo y gravedad de las heridas, ubicación exacta y descripción del entorno.\n\nEs el único medio para solicitar atención médica en el lugar de los hechos."
  },
  {
    id: 277, cat: "ems",
    q: "SITUACIÓN: Eres EMS y un oficial te pide apoyo en un procedimiento mientras hay un solo SAMS conectado. ¿Puedes ir?",
    a: "SÍ, en ese caso específico. Cuando hay un solo SAMS en servicio, el EMT puede actuar únicamente en respuesta a llamados del LSPD o Sheriff, como apoyo coordinado.\n\nLo que no puede es salir libremente a atender llamados civiles en esa situación."
  },
  {
    id: 278, cat: "ems",
    q: "¿Qué actitud debe mantener todo civil hacia el personal médico?",
    a: "Respeto en todo momento hacia el personal médico y el Hospital, reconociendo la labor crítica del equipo de emergencias en el bienestar de la ciudad.\n\nFaltar el respeto al personal médico es sancionable según la normativa del servidor."
  },
  {
    id: 279, cat: "ems",
    q: "SITUACIÓN: Hay un sujeto inconsciente en la vía pública y no hay nadie cerca para ayudarlo. ¿Qué comando usa un civil testigo?",
    a: "/auxilio, redactado en tercera persona.\n\nEj: /auxilio Auxilio EMS, encontré a un sujeto inconsciente en la vía pública, revisé sus signos y mantiene pulso estable pero no responde a estímulos. Se solicita asistencia médica urgente en la zona."
  },
  {
    id: 280, cat: "ems",
    q: "¿Por qué es importante para el EMS que el rol de heridas se mantenga durante la recuperación?",
    a: "Porque la continuidad del rol médico es clave para la inmersión y el realismo del servidor.\n\nEl personaje debe mantener coherencia entre la lesión sufrida y su esfuerzo físico. Recuperarse instantáneamente o ignorar las heridas rompe la inmersión (NRH) y desvirtúa el trabajo del EMS."
  },
  {
    id: 281, cat: "ems",
    q: "SITUACIÓN: Eres EMS en DEFCON 1 y una OD intenta secuestrarte para usarte de rehén. ¿Esto está permitido?",
    a: "NO. Está expresamente prohibido secuestrar o interceptar a personal SAMS/EMS durante DEFCON 1.\n\nVa contra el carácter neutral y pasivo del cuerpo médico, incluso en escenarios de conflicto generalizado."
  },
  {
    id: 282, cat: "ems",
    q: "¿Qué hace especial al Hospital Central de Mysticos según la normativa de terreno?",
    a: "Constituye una zona médica de alta prioridad, cuyo orden y funcionamiento deben respetarse en todo momento.\n\nAdemás, como zona segura, está protegido en un radio de 300 metros donde la violencia y los conflictos están restringidos."
  },
  {
    id: 283, cat: "ems",
    q: "SITUACIÓN: Como EMT respondes a una emergencia pero no tienes superior conectado y dudas del protocolo. ¿Qué haces?",
    a: "Consultar con tus superiores o con el equipo de administración vía ticket en Discord.\n\nLa normativa enfatiza que ante cualquier duda no dudes en consultar, ya que tu desempeño refleja el nivel de realismo y compromiso de la comunidad."
  },
  {
    id: 284, cat: "ems",
    q: "¿Por qué se considera al EMS una de las instituciones más importantes de Mysticos RP?",
    a: "Porque su rol no solo es salvar vidas dentro del servidor, sino que marca la diferencia en la experiencia de rol para todos.\n\nEl compromiso, responsabilidad y profesionalismo del EMS reflejan el nivel de realismo y calidad de la comunidad."
  },
  {
    id: 285, cat: "ems",
    q: "SITUACIÓN: Eres civil y un EMS te atiende una herida leve. Luego quieres exigir atención de una cirugía mayor sin turno. ¿Es correcto?",
    a: "NO. Para tratamientos especializados es obligatorio agendar turno por Discord (#agendar-turno).\n\nLa atención de emergencia en terreno (/auxilio) es distinta de los tratamientos especializados, que requieren organización previa del servicio."
  },
  {
    id: 286, cat: "ems",
    q: "SITUACIÓN: Eres EMS y presencias a un ciudadano portando un kit médico ilegalmente. ¿Qué corresponde?",
    a: "Es una infracción grave por parte del civil, ya que los kits médicos son de uso exclusivo del EMS.\n\nDebes mantener el rol y reportar la situación al staff con pruebas para que se aplique la sanción correspondiente."
  },
  {
    id: 287, cat: "ems",
    q: "¿Puede el personal EMS portar armas durante DEFCON 1 si sale con uniforme táctico?",
    a: "NO. El uniforme táctico en DEFCON 1 incluye protección (casco/chaleco) pero NO armas.\n\nEl EMS jamás porta armamento; su rol es exclusivamente médico y neutral. El uniforme táctico es solo para su protección en zonas de alto riesgo."
  },
  {
    id: 288, cat: "ems",
    q: "SITUACIÓN: Como EMS, ¿debes responder primero a un /auxilio civil o a un llamado de radio del LSPD durante DEFCON 1?",
    a: "Al llamado de radio del LSPD. Durante DEFCON 1 debes priorizar EXCLUSIVAMENTE los llamados del LSPD y NO responder a /auxilio civiles por el peligro en curso."
  },
  {
    id: 289, cat: "ems",
    q: "¿Qué representa el desempeño del EMS para la comunidad de Mysticos RP?",
    a: "Refleja el nivel de realismo y compromiso de la comunidad. El EMS representa una de las instituciones más importantes, y su profesionalismo, responsabilidad y atención de calidad impactan directamente en la experiencia de rol de todos los ciudadanos."
  },
  {
    id: 290, cat: "ems",
    q: "SITUACIÓN: Llega un paciente sin agendar turno con una herida de emergencia real en terreno. ¿Lo atiendes?",
    a: "SÍ. La atención de emergencia en el lugar de los hechos (vía /auxilio) es la función principal del EMT y no requiere turno.\n\nEl turno por Discord es solo para tratamientos ESPECIALIZADOS, no para emergencias inmediatas en terreno."
  },

  // ════════════════ REMATE GENERAL (situaciones extra) ════════════════

  {
    id: 291, cat: "general",
    q: "SITUACIÓN: Robas un vehículo a un NPC en plena comisaría sin ningún rol previo. ¿Qué falta cometes?",
    a: "CJ (Carjacked): robo de autos sin rol previo en una zona segura.\n\nLas comisarías son zonas seguras (radio 300m). Robar ahí sin narrativa rompe la inmersión y es sancionable, desde advertencias hasta suspensión."
  },
  {
    id: 292, cat: "general",
    q: "SITUACIÓN: Quieres usar las aspas de tu helicóptero para matar a unos enemigos en tierra. ¿Está permitido?",
    a: "NO. Eso es HK (Helicopter Kill): usar las aspas como arma para abatir jugadores intencionalmente.\n\nEs falta grave, ya que aprovecha una mecánica del juego de forma antirrealista y sin justificación dentro del rol."
  },
  {
    id: 293, cat: "general",
    q: "SITUACIÓN: Matas a un jugador porque te cayó mal en un Discord externo, sin ningún rol previo IC. ¿Qué falta es?",
    a: "MK (MetaKill): abatir a otro jugador sin rol previo válido, basándote en conflictos o situaciones de OOC.\n\nUsar información o sentimientos externos al rol para justificar una muerte está estrictamente prohibido. Sanciones severas, incluso permanentes."
  },
  {
    id: 294, cat: "general", basic: true,
    q: "¿Cuál es la diferencia entre /me y /do?",
    a: "/me: describe una ACCIÓN que realiza tu personaje cuando la animación no existe. Ej: /me revisa los bolsillos del sujeto.\n\n/do: describe el ENTORNO, estados, emociones, resultados o información que otros pueden percibir; puede ir en tercera persona. Ej: /do habría sangre en el suelo."
  },
  {
    id: 295, cat: "general",
    q: "SITUACIÓN: Un staff te pide por /report que describas un bug. ¿Eso es un buen uso del comando?",
    a: "SÍ. /report es para situaciones que requieren intervención fuera del rol: bugs, reportes de jugadores, consultas y problemas técnicos.\n\nDescribir un bug que te afecta es uso correcto. Lo que NO corresponde es usar /report como Cry Report (quejarse por perder un rol sin causa real)."
  },
  {
    id: 296, cat: "general",
    q: "SITUACIÓN: Estás amarrado de manos y pies tras ser capturado. Quieres tirar dados para 'escapar mágicamente'. ¿Procede?",
    a: "NO. Está prohibido forzar tiradas en situaciones donde la lógica del rol ya determina el resultado.\n\nUna persona amarrada no escapa sin motivo razonable. Los dados solo aplican cuando hay un resultado genuinamente incierto."
  },

  // ════════════════ REMATE LEGAL ════════════════

  {
    id: 297, cat: "legal",
    q: "SITUACIÓN: Eres oficial y quieres aterrizar el helicóptero en plena avenida transitada sin justificación. ¿Está permitido?",
    a: "NO, salvo rol extremo o aprobado. Los lugares no recomendados incluyen calles transitadas, techos no mapeados, zonas comerciales densas y eventos sin coordinación.\n\nLugares aprobados: hospital, LSIA, Sandy Shores, helipuertos privados mapeados e instalaciones gubernamentales. Se recomienda /entorno previo."
  },
  {
    id: 298, cat: "legal",
    q: "SITUACIÓN: Como ciudadano, un oficial te detiene y quieres negarte a identificarte y huir. ¿Qué conductas serían obstrucción?",
    a: "Negarse a acatar instrucciones, interferir en el procedimiento, ocultar información o mentir, incitar a terceros a desobedecer, usar fuerza física/verbal para evitar la detención y manipular pruebas.\n\nEstas conductas pueden derivar en cargos adicionales y agravar tu situación legal."
  },
  {
    id: 299, cat: "legal",
    q: "Como ciudadano detenido, ¿qué derechos fundamentales puedes ejercer?",
    a: "Conocer el motivo de la intervención, permanecer en silencio, solicitar un abogado, no ser víctima de abuso físico/verbal, ser informado de los cargos y presentar denuncias ante Internal Affairs ante mala conducta.\n\nEstos derechos están protegidos por la legislación vigente del servidor."
  },
  {
    id: 300, cat: "legal",
    q: "SITUACIÓN: Una OD intenta destruir tu bodycam. Tiras dados y ganas. ¿Qué significa eso?",
    a: "Que la cámara resiste: sigue grabando. Roleas que el dispositivo se protegió (carcasa reforzada, solo marcas superficiales).\n\nSe permite máximo 1 tirada por oficial. Si el delincuente hubiera ganado, la cámara quedaría inutilizada. El delincuente debe usar /do podría? antes de intentar destruirla."
  }

];