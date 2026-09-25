'use client';

import { useEffect, useState } from 'react';

const CONSENT_KEY = 'hae-cookie-consent';
const META_PIXEL_ID = '1114579474558989';

function loadMetaPixel() {
  if (typeof window === 'undefined') return;

  // If Meta Pixel has not been created yet, create it and load Meta's script.
  if (!window.fbq) {
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;

      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };

      if (!f._fbq) f._fbq = n;

      n.push = n;
      n.loaded = true;
      n.version = '2.0';
      n.queue = [];

      t = b.createElement(e);
      t.async = true;
      t.src = v;
      t.id = 'meta-pixel-script';

      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      'script',
      'https://connect.facebook.net/en_US/fbevents.js'
    );
  }

  // Consent has been granted.
  window.fbq('consent', 'grant');

  // Initialize this Pixel only once per page load.
  if (!window.__haeMetaPixelInitialized) {
    window.fbq('init', META_PIXEL_ID);
    window.__haeMetaPixelInitialized = true;
  }

  // Fire the page view after consent.
  window.fbq('track', 'PageView');
}

export default function CookieConsent() {
  const [consent, setConsent] = useState(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem(CONSENT_KEY);

    if (savedConsent === 'accepted') {
      setConsent('accepted');
      loadMetaPixel();
    } else if (savedConsent === 'rejected') {
      setConsent('rejected');
    } else {
      setShowBanner(true);
    }
  }, []);

  function acceptCookies() {
    localStorage.setItem(CONSENT_KEY, 'accepted');

    setConsent('accepted');
    setShowBanner(false);

    loadMetaPixel();
  }

  function rejectCookies() {
    localStorage.setItem(CONSENT_KEY, 'rejected');

    setConsent('rejected');
    setShowBanner(false);
  }

  function openSettings() {
    setShowBanner(true);
  }

  function withdrawConsent() {
    localStorage.setItem(CONSENT_KEY, 'rejected');

    setConsent('rejected');
    setShowBanner(false);

    // Stop Meta from receiving additional consent-based events
    // during the current page session.
    if (window.fbq) {
      window.fbq('consent', 'revoke');
    }
  }

  return (
    <>
      {showBanner && (
        <div
          role="dialog"
          aria-label="Cookie settings"
          aria-modal="true"
          style={{
            position: 'fixed',
            left: '20px',
            right: '20px',
            bottom: '20px',
            maxWidth: '680px',
            margin: '0 auto',
            padding: '22px',
            background: '#fff',
            color: '#111',
            border: '2px solid #111',
            borderRadius: '14px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
            zIndex: 9999,
            fontFamily: 'inherit',
          }}
        >
          <div
            style={{
              fontSize: '20px',
              fontWeight: '700',
              marginBottom: '8px',
            }}
          >
            Cookies. Because apparently even HÆ?! has bureaucracy.
          </div>

          <p
            style={{
              margin: '0 0 18px',
              lineHeight: '1.5',
              fontSize: '15px',
            }}
          >
            We use optional marketing technology from Meta to understand
            whether our ads are working. Meta Pixel only loads if you say yes.
            You can change your choice later.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap',
            }}
          >
            <button
              type="button"
              onClick={acceptCookies}
              style={{
                padding: '11px 16px',
                border: '2px solid #111',
                borderRadius: '8px',
                background: '#111',
                color: '#fff',
                fontWeight: '700',
                cursor: 'pointer',
              }}
            >
              Accept marketing
            </button>

            <button
              type="button"
              onClick={rejectCookies}
              style={{
                padding: '11px 16px',
                border: '2px solid #111',
                borderRadius: '8px',
                background: '#fff',
                color: '#111',
                fontWeight: '700',
                cursor: 'pointer',
              }}
            >
              Reject marketing
            </button>
          </div>

          {consent === 'accepted' && (
            <button
              type="button"
              onClick={withdrawConsent}
              style={{
                marginTop: '12px',
                padding: 0,
                background: 'transparent',
                color: '#333',
                border: 'none',
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            >
              Withdraw marketing consent
            </button>
          )}
        </div>
      )}

      {!showBanner && consent && (
        <button
          type="button"
          onClick={openSettings}
          style={{
            position: 'fixed',
            left: '12px',
            bottom: '12px',
            zIndex: 9998,
            padding: '7px 10px',
            border: '1px solid #777',
            borderRadius: '6px',
            background: '#fff',
            color: '#333',
            fontSize: '12px',
            cursor: 'pointer',
          }}
        >
          Cookie settings
        </button>
      )}
    </>
  );
}
