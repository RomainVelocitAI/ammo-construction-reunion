"use client"

import { useState } from "react";
import React from "react";

const FaqSection = () => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

    const faqs = [
        {
            question: "Qu'est-ce qui différencie AMMO des autres constructeurs à La Réunion ?",
            answer: "AMMO combine expertise technique, service d'entretien préventif unique et approche écologique. Notre équipe maîtrise les spécificités climatiques locales et offre un suivi complet de votre projet, du rêve à la maintenance.",
        },
        {
            question: "Quels types de constructions réalisez-vous ?",
            answer: "Nous sommes spécialisés dans les maisons containers modernes, les villas contemporaines, les lodges de luxe, les rénovations complètes, les extensions et les aménagements extérieurs. Chaque projet est personnalisé selon vos besoins.",
        },
        {
            question: "Comment fonctionne votre service d'entretien préventif ?",
            answer: "Notre service d'entretien préventif inclut des inspections régulières, la détection précoce des problèmes, et un programme de maintenance personnalisé. Cela permet d'économiser jusqu'à 70% sur les réparations futures et d'augmenter la durée de vie de votre bien de 15 ans.",
        },
        {
            question: "Quelles sont les garanties offertes sur vos constructions ?",
            answer: "Nous offrons une garantie décennale complète, une garantie de parfait achèvement d'un an, et une assistance technique continue. Notre service d'entretien préventif prolonge encore davantage la protection de votre investissement.",
        },
        {
            question: "Combien de temps dure un projet de construction ?",
            answer: "La durée varie selon le type de projet : 3-4 mois pour une maison container, 6-8 mois pour une villa traditionnelle, 2-3 mois pour une rénovation majeure. Nous respectons scrupuleusement les délais annoncés.",
        },
        {
            question: "Proposez-vous des solutions de financement ?",
            answer: "Oui, nous travaillons avec plusieurs partenaires financiers pour vous proposer des solutions adaptées. Nous vous accompagnons dans le montage de votre dossier et l'optimisation de votre plan de financement.",
        },
    ];
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-center gap-12 px-4 md:px-8">
                <img
                    className="max-w-md w-full rounded-2xl h-auto shadow-xl object-cover"
                    src="/villamoderne.png"
                    alt="AMMO Construction"
                />
                <div className="flex-1">
                    <p className="text-amber-600 text-sm font-semibold uppercase tracking-wider">Questions Fréquentes</p>
                    <h2 className="text-4xl font-bold text-gray-900 mt-2">Vous avez des questions ?</h2>
                    <p className="text-lg text-gray-600 mt-4 pb-6">
                        Découvrez les réponses aux questions les plus fréquentes sur nos services de construction et rénovation à La Réunion.
                    </p>
                    {faqs.map((faq, index) => (
                        <div className="border-b border-slate-200 py-4 cursor-pointer" key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                            <div className="flex items-center justify-between">
                                <h3 className="text-base font-medium">
                                    {faq.question}
                                </h3>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}>
                                    <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#1D293D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md ${openIndex === index ? "opacity-100 max-h-[300px] translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`} >
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