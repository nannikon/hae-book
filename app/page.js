'use client';

import { useState } from 'react';
import { track } from '@vercel/analytics';

const amazon = '/amazon';

const chapters = [
  'Welcome to Norway. Good luck.',
  'Why does nobody speak like my textbook?',
  'School survival',
  'How to make a Norwegian friend',
  'Norwegian Teenager™',
  'The Norwegian texting department',
  'The Norwegian word “koselig”',
  'Ja. Nei. Jo. Jaja. Neida. Joda.',
  'Things Norwegians say that don’t mean what you think',
  'Please don’t say that',
  'Emergency Norwegian',
  'The 100 phrases that will save you'
];

const phrases = [
  {
    category: 'BASIC HUMAN FUNCTIONING · #20',
    phrase: 'Det går bra.',
    label: 'Usually:',
    meaning: 'It’s okay. / I’m fine. / No problem.',
    lines: [
      'Someone apologises → No problem.',
      'Someone asks how you are → I’m fine.',
      'Someone offers help → No thanks, I’m managing.'
    ],
    payoff: 'Same words. Different job. Context required.'
  },
  {
    category: 'CONVERSATION SAVERS · #49',
    phrase: 'Kanskje.',
    label: 'Textbook:',
    meaning: 'Maybe.',
    lines: [
      'Could genuinely mean maybe.',
      'Could also be the soft Norwegian version of: Probably not.'
    ],
    payoff: 'Your weekend plans may depend on knowing the difference.'
  },
  {
    category: 'EXTREMELY NORWEGIAN NORWEGIAN · #95',
    phrase: 'Jo!',
    label: 'Textbook:',
    meaning: '…good luck.',
    lines: [
      'Kommer du ikke? — “Aren’t you coming?”',
      'Jo! — “Yes, I am.”'
    ],
    payoff: 'Two letters. One extremely useful way of correcting a negative assumption.'
  },
  {
    category: 'EXTREMELY NORWEGIAN NORWEGIAN · #98',
    phrase: 'Jaja.',
    label: 'Could be:',
    meaning: 'Okay. / Oh well. / Yeah, yeah. / Fine. / Anyway…',
    lines: [
      'The words are not going to save you here.'
    ],
    payoff: 'Listen to the tone.'
  },
  {
    category: 'TEXTING & SOCIAL LIFE · #56',
    phrase: 'Jeg blir litt sen.',
    label: 'Literally:',
    meaning: 'I’m going to be a little late.',
    lines: [
      'The important linguistic question is not sen.',
      'It is: How much is “litt”?'
    ],
    payoff: 'Proceed with caution.'
  },
  {
    category: 'TEXTING & SOCIAL LIFE · #54',
    phrase: 'Jeg er på vei.',
    label: 'Meaning:',
    meaning: 'I’m on my way.',
    lines: [
      'Excellent.',
      'Are you actually moving yet? Different question.'
    ],
    payoff: 'Context may be required.'
  },
  {
    category: 'EXTREMELY NORWEGIAN NORWEGIAN · #94',
    phrase: 'Takk for sist!',
    label: 'Literally:',
    meaning: 'Thanks for last time.',
    lines: [
      'Something Norwegians casually say the next time they see you.',
      'No, you didn’t forget to thank them for something.'
    ],
    payoff: 'This is normal.'
  },
  {
    category: 'CONVERSATION SAVERS · #43',
    phrase: 'Kødder du?',
    label: 'Basic meaning:',
    meaning: 'Are you kidding me?',
    lines: [
      'Can express disbelief.',
      'Can express outrage.',
      'Can express genuine delight.'
    ],
    payoff: 'Possibly all three within the same evening. Tone required.'
  },
  {
    category: 'REAL NORWEGIAN',
    phrase: 'Det blir kanskje litt vanskelig.',
    label: 'Sounds like:',
    meaning: 'That might be a bit difficult.',
    lines: [
      'Could mean there is a practical problem.',
      'Could also be the entire rejection.',
      'No. Absolutely not.'
    ],
    payoff: 'But saying that would create an uncomfortable atmosphere. Perfect. No casualties.'
  },
  {
    category: 'EXTREMELY NORWEGIAN NORWEGIAN · #99',
    phrase: 'Det ordner seg.',
    label: 'Meaning:',
    meaning: 'It’ll work out.',
    lines: [
      'Do we know how? No.',
      'Do we have a detailed plan? Also no.'
    ],
    payoff: 'Det ordner seg. An excellent Norwegian philosophy.'
  },
  {
    category: 'I DON’T UNDERSTAND · #1',
    phrase: 'Hæ?',
    label: 'Meaning:',
    meaning: 'Huh? / What?',
    lines: [
      'You didn’t hear them.',
      'Or you heard them perfectly and need a moment to process what was just said.'
    ],
    payoff: 'There is a reason the book is called HÆ?!'
  }
];

function Buy({ where = 'hero' }) {
  return (
    <>
      <a
        className="cta"
        href={amazon}
        target="_blank"
        rel="noreferrer"
        onClick={() => track('amazon_click', { location: where })}
      >
        GET HÆ?! ON AMAZON →
      </a>
      <small>Kindle edition · Available on Amazon</small>
    </>
  );
}

export default function Page() {
  const [i, setI] = useState(0);

  const next = () => {
    const nextIndex = (i + 1) % phrases.length;
    setI(nextIndex);
    track('phrase_generator_click', {
      phrase: phrases[nextIndex].phrase
    });
  };

  const current = phrases[i];

  return (
    <main>

      <section className="hero wrap">
        <div className="heroCopy">
          <div className="kicker">NORWEGIAN FOR REAL LIFE</div>

          <h1>
            You learned Norwegian.
            <br />
            <em>Then Norwegians started talking.</em>
          </h1>

          <p className="lede">
            The Norwegian Survival Guide Nobody Gave You.
          </p>

          <p>
            For anyone who knows the words — but still occasionally has
            absolutely no idea what Norwegians are talking about.
          </p>

          <Buy />
        </div>

        <div className="heroBook">
          <img
            src="/book-mockup.png"
            alt="HÆ?! Norwegian for Real Life book"
          />
        </div>
      </section>

      <section className="problem">
        <div className="wrap">
          <div className="eyebrow">THE PROBLEM</div>

          <h2>
            Your textbook wasn’t wrong.
            <br />
            <span>It just left some things out.</span>
          </h2>

          <div className="moments">
            <article>
              <b>kanskje?</b>
              <p>“Maybe” isn’t always maybe.</p>
            </article>

            <article>
              <b>jo.</b>
              <p>Good luck finding a clean English equivalent.</p>
            </article>

            <article>
              <b>“sometime”</b>
              <p>Sounds like a plan. Might just be politeness.</p>
            </article>

            <article>
              <b>HÆ?!</b>
              <p>Tone, context and tiny words can change everything.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="hundred wrap">
        <div className="hundredNum">100</div>

        <div className="hundredCopy">
          <div className="eyebrow">REAL NORWEGIAN, EXPLAINED</div>

          <h2>
            You know what the words mean.
            <br />
            That’s not always the problem.
          </h2>

          <p>
            The same words can do very different jobs depending on who says
            them, how they say them and what just happened.
          </p>

          <div className="phrase">
            <small>{current.category}</small>

            <h3>{current.phrase}</h3>

            <p>
              <strong>{current.label}</strong>
              <br />
              {current.meaning}
            </p>

            {current.lines.map((line, n) => (
              <p key={n}>{line}</p>
            ))}

            <b>{current.payoff}</b>

            <button onClick={next}>GIVE ME ANOTHER →</button>
          </div>

          <p className="more">One of 100 phrases in the book.</p>

          <Buy where="phrases" />
        </div>
      </section>

      <section className="toc">
        <div className="wrap">
          <div className="eyebrow">
            12 CHAPTERS · REAL NORWEGIAN · MINIMAL DIGNITY
          </div>

          <h2>What’s actually inside?</h2>

          <div className="chapterList">
            {chapters.map((c, n) => (
              <div className="chapter" key={c}>
                <span>{String(n + 1).padStart(2, '0')}</span>
                <h3>{c}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="notbook">
        <div className="wrap">
          <div className="eyebrow">SO WHAT KIND OF BOOK IS THIS?</div>

          <h2>
            Not really a grammar book.
            <br />
            Not really a phrasebook.
            <br />
            <span>
              More like the missing manual for actually being in Norway.
            </span>
          </h2>

          <p>
            Language is only part of understanding Norwegians. The rest lives
            in tone, humour, social codes, indirectness, texting, friendship,
            school, everyday expressions — and all the things people assume
            you already know.
          </p>
        </div>
      </section>

      <section className="author wrap">
        <img src="/nanny.jpg" alt="Nanny Thorvaldsen" />

        <div>
          <div className="eyebrow">THE PERSON RESPONSIBLE</div>

          <h2>Hi, I’m Nanny.</h2>

          <p>
            Today I teach Norwegian to newly arrived teenagers from around the
            world — which means I spend a lot of time answering questions
            textbooks didn’t.
          </p>

          <p>
            Before moving into education, I worked across marketing, social
            media and content, including several years with Spotify in Norway.
            I’m fascinated by culture, communication and the strange little
            rules people somehow know without ever being taught.
          </p>

          <p>
            <strong>
              HÆ?! grew out of the questions that appeared when textbook
              Norwegian met actual Norway.
            </strong>
          </p>
        </div>
      </section>

      <section className="final">
        <div className="wrap finalGrid">
          <div>
            <div className="eyebrow">YOU MADE IT THIS FAR.</div>

            <h2>
              Know the words.
              <br />
              <span>Understand the Norwegians.</span>
            </h2>

            <p>HÆ?! — Norwegian for Real Life</p>

            <Buy where="footer" />

            <small>Jaja. Det ordner seg.</small>
          </div>

          <img src="/book-cover.jpg" alt="HÆ?! book cover" />
        </div>
      </section>

    </main>
  );
}
