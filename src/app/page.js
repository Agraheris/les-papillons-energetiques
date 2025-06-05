import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-[#FEEBFF]">
      <h2>Magnétiseuse, énergéticienne</h2>
      <section>
        <Image 
            src="/images/papillon_multicolore.png"
            alt="Papillon décoratif"
            width={300}
            height={200}/>
        <div>
          Vous êtes souvent sujet(tte) à l&apos;anxiété, le stress ou une baisse
          de morale et vous sentez que cela affecte votre bien-être au
          quotidien? Je vous propose des soins énergétiques personnalisés,
          conçus pour agir sur vos corps physique, emmotionnel et énergégétique.
          <br />
          L&apos;objectif? Vous libérer de ces blocages pour retrouver un état
          de mieux-être, plus de sérénité et une motivation renouvelée.
          <br />
          Vous souffrez de douleurs physiques? Que ce soit une inflammation(
          comme une tendinite), des douleurs chroniques ou encore des
          brulures(accidents domestiques, traitements médicaux, etc...)
          j&apos;utilise le magnétisme pour <br />
          - apaiser les douleurs
          <br />
          - réduire l&apos;inflammation
          <br />
          - couper le feu pour soulager les brulures et les tensions.
          <br />
          Etes-vous prêt(e) à passer de la chrysalyde au papillon et prendre
          votre envol vers un mieux-être?
          <br />
          NB: mes soins ne remplacent pas une consultation médicale ou un suivi
          médical adapté
        </div>
      </section>
      <section>
        <h2>Relation d&apos;aide à la personne</h2>
        <div>
          Qui suis-je?
          <br />
          Pendant des années, j&apos;ai qualifié mes capacités innées de &quot;bizarre&quot;.
          Je savais être douée pour les massages, mais sentir précisément les
          zones douloureuses chez les autres ou percevoir une énergie apaisante
          sortir de mes mains me semblait étrange.
          <br />
          Plus étonnant encore: recevoir des informations sur l&apos;avenir. Pendant
          longtemps, j&apos;ai vécu cela comme une forme de &quot;maladie&quot;. Ce sentiment
          de culpabilité m&apos;a frappé de plein fouet lorsqu&apos;une de mes intuitions
          aurait pu protéger un proche. La peur d&apos;être trop différente et
          surtout de ne pas savoir gérer ça m&apos;a alors poussé à tout ignorer et
          me plonger dans des études scientifiques.
          <br />
          Un parcours inattendu qui m&apos;a emmené à travailler en hepad et à
          domicile auprés des personnes âgées ou en situation de handicap,
          motivée par l&apos;envie d&apos;aider.
          <br />
          Mais un jour, la vie m&apos;a rappelé sur mon chemin: un problème de santé
          et une expérience de mort imminente, m&apos;ont obligé à tout remettre en
          question. A ma grande surprise, ma récupération dépassait toutes les
          attentes médicales. C&apos;est alors que j&apos;ai compris qu&apos;il était temps de
          me reconnecter à mes dons naturels.
          <br />
          Aujourd&apos;hui, aprés des formations et des années d&apos;études autodidactes
          je mets mes capacités à votre service: -Magnétisme et manipulation de
          l&apos;énergie -Clair ressenti, clairvoyance et précognition. <br />
          Je suis là pour vous accompagner dans votre transformation et vous
          aider à avancer avec sérénité et confiance. Prêt-e à entamer ce voyage
          vers un mieux-être? <br />
          Prenons contact dès maintenant!
        </div>
      </section>
      <div>
          <Image 
            src="/images/diplome2.png"
            alt="Papillon décoratif"
            width={300}
            height={200}/>
          <Image 
            src="/images/diplome1.png"
            alt="Papillon décoratif"
            width={300}
            height={200}/>
      </div>
    </main>
  );
}
