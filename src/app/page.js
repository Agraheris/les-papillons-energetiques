import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-purple-100 via-pink-50 to-purple-200 min-h-screen">
      <section className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-purple-800 mb-12 italic">
          Magnétiseuse, énergéticienne
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="lg:w-1/3 flex-shrink-0">
            <Image
              src="/images/papillon_multicolore.png"
              alt="Papillon décoratif multicolore"
              width={300}
              height={200}
              className="mx-auto drop-shadow-lg"
            />
          </div>
          <div className="lg:w-2/3 text-gray-700 leading-relaxed space-y-4">
            <p className="text-lg">
              Vous êtes souvent sujet(tte) à l&apos;anxiété, le stress ou une
              baisse de morale et vous sentez que cela affecte votre bien-être
              au quotidien? Je vous propose des soins énergétiques
              personnalisés, conçus pour agir sur vos corps physique,
              emmotionnel et énergégétique.
            </p>
            <p className="text-lg font-medium text-purple-700">
              L&apos;objectif? Vous libérer de ces blocages pour retrouver un
              état de mieux-être, plus de sérénité et une motivation renouvelée.
            </p>
            <p className="mb-4">
              <strong>Vous souffrez de douleurs physiques?</strong> Que ce soit
              une inflammation( comme une tendinite), des douleurs chroniques ou
              encore des brulures(accidents domestiques, traitements médicaux,
              etc...) j&apos;utilise le magnétisme pour
            </p>

            <ul className="space-y-2 text-purple-700 pl-4">
              <li className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 bg-purple-500 rounded-full shrink-0"></span>
                <span>Apaiser les douleurs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 bg-purple-500 rounded-full shrink-0"></span>
                <span>Réduire l&apos;inflammation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-2 h-2 bg-purple-500 rounded-full shrink-0"></span>
                <span>
                  Couper le feu pour soulager les brûlures et les tensions
                </span>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-gray-600 italic mt-16">
          NB: mes soins ne remplacent pas une consultation médicale ou un suivi
          médical adapté
        </p>
      </section>
      <section className="bg-white/70 backdrop-blur-sm py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-purple-800 text-center mb-12 italic">
            Relation d&apos;aide à la personne
          </h2>
          <h3 className="text-2xl font-semibold text-purple-700 mb-6">
            Qui suis-je?
          </h3>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Pendant des années, j&apos;ai qualifié mes capacités innées de
              &quot;bizarre&quot;. Je savais être douée pour les massages, mais
              sentir précisément les zones douloureuses chez les autres ou
              percevoir une énergie apaisante sortir de mes mains me semblait
              étrange.
            </p>
            <p>
              Plus étonnant encore: recevoir des informations sur l&apos;avenir.
              Pendant longtemps, j&apos;ai vécu cela comme une forme de
              &quot;maladie&quot;. Ce sentiment de culpabilité m&apos;a frappé
              de plein fouet lorsqu&apos;une de mes intuitions aurait pu
              protéger un proche. La peur d&apos;être trop différente et surtout
              de ne pas savoir gérer ça m&apos;a alors poussé à tout ignorer et
              me plonger dans des études scientifiques.
            </p>
            <p>
              Un parcours inattendu qui m&apos;a emmené à travailler en hepad et
              à domicile auprés des personnes âgées ou en situation de handicap,
              motivée par l&apos;envie d&apos;aider.
            </p>
            <p>
              Mais un jour, la vie m&apos;a rappelé sur mon chemin: un problème
              de santé et une expérience de mort imminente, m&apos;ont obligé à
              tout remettre en question. A ma grande surprise, ma récupération
              dépassait toutes les attentes médicales. C&apos;est alors que
              j&apos;ai compris qu&apos;il était temps de me reconnecter à mes
              dons naturels.
            </p>
            <p>
              Aujourd&apos;hui, aprés des formations et des années d&apos;études
              autodidactes je mets mes capacités à votre service: -Magnétisme et
              manipulation de l&apos;énergie -Clair ressenti, clairvoyance et
              précognition.
            </p>
            <p>
              Je suis là pour vous accompagner dans votre transformation et vous
              aider à avancer avec sérénité et confiance. Prêt-e à entamer ce
              voyage vers un mieux-être?
            </p>

            <Link href="/contact">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl">
                Prenons contact dès maintenant! 💫
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-serif text-purple-800 text-center mb-8">
            Formations & Certifications
          </h3>

          <div className="flex flex-col md:flex-row place-content-between items-center gap-8 max-w-4xl mx-auto">
            <div>
              <Image
                src="/images/diplome2.png"
                alt="Diplôme de formation en magnétisme"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>

            <div>
              <Image
                src="/images/diplome1.png"
                alt="Certification en soins énergétiques"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
