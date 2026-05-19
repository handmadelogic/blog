'use client';

import { useState } from 'react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function AboutSubscribeForm() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function isValidEmail(v: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setErrorMsg("that doesn't look quite right, try again?");
      setState('error');
      return;
    }
    setState('loading');
    setErrorMsg('');
    // TODO: replace with real subscription endpoint
    await new Promise((r) => setTimeout(r, 900));
    setState('success');
  }

  if (state === 'success') {
    return (
      <div className="text-center" role="status" aria-live="polite">
        <p className="text-[rgb(240,182,82)] font-bold font-caveat mb-2 leading-tight"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}>
          you&apos;re in ✿
        </p>
        <p className="text-[rgba(246,240,220,0.7)] text-[15px] italic font-lora">
          first note comes Tuesday. see you then.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full max-w-[480px] mx-auto">
      <div
        className={`flex items-center bg-[rgba(246,240,220,0.08)] rounded-full p-1 transition-shadow ${
          state === 'error' ? 'shadow-[0_0_0_2px_rgb(201,52,126)]' : ''
        }`}
      >
        <label htmlFor="about-email" className="sr-only">
          Email address
        </label>
        <input
          id="about-email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state === 'error') setState('idle');
          }}
          placeholder="your@email.com"
          aria-describedby={state === 'error' ? 'about-email-error' : undefined}
          required
          className="flex-1 bg-transparent text-[rgb(246,240,220)] px-4 py-3 text-[14px] font-nunito outline-none placeholder:text-[rgba(246,240,220,0.4)] min-w-0"
        />
        <button
          type="submit"
          disabled={state === 'loading'}
          data-btn
          className="bg-[rgb(201,52,126)] text-[rgb(246,240,220)] px-6 py-3 text-[13px] font-bold font-nunito rounded-full shrink-0 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer min-w-[72px] flex items-center justify-center"
        >
          {state === 'loading' ? (
            <span
              className="inline-block w-4 h-4 border-2 border-[rgba(246,240,220,0.35)] border-t-[rgb(246,240,220)] rounded-full animate-spin"
              aria-label="Sending"
              role="status"
            />
          ) : (
            'JOIN'
          )}
        </button>
      </div>
      {state === 'error' && (
        <p
          id="about-email-error"
          role="alert"
          className="text-[rgb(240,182,82)] text-[16px] font-caveat mt-2 text-center"
        >
          {errorMsg}
        </p>
      )}
    </form>
  );
}
