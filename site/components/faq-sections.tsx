"use client"

import React from "react";

const FaqSection = () => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    const faqs = [
        {
            question: "Qu'est-ce que le Groupe AMMO ?",
            answer: "Le Groupe AMMO est votre interlocuteur unique pour l'ensemble de vos projets de travaux à La Réunion. Nous maîtrisons toute la chaîne de valeur du bâtiment : conception des plans, pilotage de chantier, coordination des corps de métier et réalisation des finitions. Un seul contact, quatre pôles d'expertise, de la première esquisse à l'entretien de vos réalisations.",
        },
        {
            question: "Quels sont les pôles d'expertise d'AMMO ?",
            answer: "AMMO s'organise en 4 pôles complémentaires qui couvrent toute la chaîne de valeur du bâtiment : la Conception pour vos plans et permis de construire, la Maîtrise d'Œuvre pour le pilotage et la coordination de chantier, le Contractant Général pour la rénovation et le gros œuvre, et le Second Œuvre & Finitions pour la peinture, l'agencement et les aménagements extérieurs. Les 4 pôles travaillent ensemble ou indépendamment selon vos besoins.",
        },
        {
            question: "Dans quelles zones de La Réunion intervenez-vous ?",
            answer: "Nous intervenons sur toute l'île de La Réunion, du Nord au Sud. Notre connaissance approfondie du territoire, des normes locales et des délais administratifs spécifiques nous permet d'intervenir efficacement partout.",
        },
        {
            question: "Quels types de projets prenez-vous en charge ?",
            answer: "Du petit chantier au projet d'envergure : rénovation complète ou partielle, extensions, aménagements extérieurs (terrasses, pergolas, carports), peinture, meubles sur mesure, conception de plans et modélisation 3D. Nous adaptons nos solutions à votre budget et vos ambitions.",
        },
        {
            question: "Quelles garanties offrez-vous ?",
            answer: "Nous offrons une garantie décennale complète sur nos travaux, une garantie de parfait achèvement d'un an, et un suivi post-livraison. Nos réalisations respectent les normes en vigueur à La Réunion.",
        },
        {
            question: "Comment se déroule un projet avec AMMO ?",
            answer: "Votre projet suit 4 étapes : Écoute (définition de vos besoins et budget), Conception (plans, 3D, permis si nécessaire), Réalisation (coordination et contrôle qualité), Livraison (vérification et réception). Tout au long du projet, vous bénéficiez de points réguliers et d'un suivi en temps réel.",
        },
        {
            question: "Comment devenir partenaire ou sous-traitant d'AMMO ?",
            answer: "Rendez-vous sur notre Espace Pro pour découvrir les avantages de notre réseau de partenaires et déposer votre candidature. Nous recherchons des entreprises qualifiées, assurées et partageant nos valeurs d'excellence et de fiabilité.",
        },
    ];
    return (
        <section className="py-20 bg-muted/20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-center gap-12 px-4 md:px-8">
                <img
                    className="max-w-md w-full rounded-2xl h-auto shadow-xl object-cover"
                    src="/about-background.jpg"
                    alt="AMMO Contractant Général"
                />
                <div className="flex-1">
                    <p className="text-secondary text-sm font-semibold uppercase tracking-wider">Questions Fréquentes</p>
                    <h2 className="text-4xl font-bold text-foreground mt-2">Vous avez des questions ?</h2>
                    <p className="text-lg text-muted-foreground mt-4 pb-6">
                        Découvrez les réponses aux questions les plus fréquentes sur nos services à La Réunion.
                    </p>
                    {faqs.map((faq, index) => (
                        <div className="border-b border-border py-4 cursor-pointer" key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                            <div className="flex items-center justify-between">
                                <h3 className="text-base font-medium text-foreground">
                                    {faq.question}
                                </h3>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out flex-shrink-0 ml-4`}>
                                    <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground" />
                                </svg>
                            </div>
                            <p className={`text-sm text-muted-foreground transition-all duration-500 ease-in-out max-w-md ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`} >
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
