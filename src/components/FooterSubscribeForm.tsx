'use client';

import { useState } from 'react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function FooterSubscribeForm() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  function isValidEmail(v: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setErrorMsg("that doesn't look right, try again?");
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
      <p
        className="text-[rgb(240,182,82)] font-caveat text-[22px] font-semibold"
        role="status"
        aria-live="polite"
      >
        you&apos;re in ✿
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div
        className={`flex items-center bg-[rgba(246,240,220,0.08)] rounded-full p-1 transition-shadow ${
          state === 'error' ? 'shadow-[0_0_0_2px_rgb(201,52,126)]' : ''
        }`}
      >
        <label htmlFor="footer-email" className="sr-only">
          Email address
        </label>
        <input
          id="footer-email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state === 'error') setState('idle');
          }}
          placeholder="your email"
          required
          maxLength={254}
          aria-describedby={state === 'error' ? 'footer-email-error' : undefined}
          className="flex-1 min-w-0 bg-transparent text-[rgb(246,240,220)] px-4 py-2 text-[13px] font-nunito outline-none placeholder:text-[rgba(246,240,220,0.45)]"
        />
        <button
          type="submit"
          disabled={state === 'loading'}
          data-btn="true"
          className="bg-[rgb(201,52,126)] text-[rgb(246,240,220)] px-[18px] py-2 text-[12px] font-bold font-nunito rounded-full cursor-pointer shrink-0 disabled:opacity-50 disabled:cursor-not-allowed min-w-[52px] flex items-center justify-center"
        >
          {state === 'loading' ? (
            <span
              className="inline-block w-3.5 h-3.5 border-2 border-[rgba(246,240,220,0.35)] border-t-[rgb(246,240,220)] rounded-full animate-spin"
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
          id="footer-email-error"
          role="alert"
          className="text-[rgb(240,182,82)] text-[15px] font-caveat mt-2"
        >
          {errorMsg}
        </p>
      )}
    </form>
  );
}
