import { useState } from "react";

import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg';
import ideiaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedBackTypeStep } from "./Steps/FeedBackTypeStep";
import { FeedBackContentStep } from "./Steps/FeedBackContentStep";
import { FeedBackSucessStep } from "./Steps/FeedBackSucessStep";


export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideiaImageUrl,
            alt: 'Imagem de uma lampada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    },
};

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
    const [feedbakcType, setfeedbakcType] = useState<FeedbackType | null>(null)
    const [fedebackSent, setfedebackSent] = useState(false);

    function handleRestartFeedBack() {
        setfedebackSent(false);
        setfeedbakcType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            { fedebackSent ? (
                <FeedBackSucessStep onFeedBackRestartRequested={handleRestartFeedBack}/>
            ) : (
                <>
                    {!feedbakcType ? (
                        <FeedBackTypeStep onFeedBackTypeChanged={setfeedbakcType} />
                    ) : (
                        <FeedBackContentStep 
                            feedbackType={feedbakcType} 
                            onFeedBackRestartRequested={handleRestartFeedBack}
                            onFeedbackSent={() => setfedebackSent(true)}
                        />
                    )}
                </>
            )}

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="https://www.rocketseat.com.br/" target="_blank">Rocketseat</a>
            </footer>
        </div>
    );
}