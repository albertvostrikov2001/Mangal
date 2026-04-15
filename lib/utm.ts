'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'mangalpro_utm_v1';

export type UTMParams = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  referrer?: string;
};

function readSearchParams(): UTMParams {
  if (typeof window === 'undefined') {
    return {};
  }
  const params = new URLSearchParams(window.location.search);
  const get = (key: string) => params.get(key) ?? undefined;
  return {
    utm_source: get('utm_source'),
    utm_medium: get('utm_medium'),
    utm_campaign: get('utm_campaign'),
    utm_content: get('utm_content'),
    utm_term: get('utm_term'),
  };
}

function loadStored(): UTMParams {
  if (typeof window === 'undefined') {
    return {};
  }
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {};
    }
    return JSON.parse(raw) as UTMParams;
  } catch {
    return {};
  }
}

function mergeUtms(fresh: UTMParams, stored: UTMParams): UTMParams {
  const hasFresh =
    fresh.utm_source ||
    fresh.utm_medium ||
    fresh.utm_campaign ||
    fresh.utm_content ||
    fresh.utm_term;
  if (hasFresh) {
    return { ...stored, ...fresh };
  }
  return { ...stored };
}

export function useUTM(): UTMParams {
  const [utm, setUtm] = useState<UTMParams>({});

  useEffect(() => {
    const fromUrl = readSearchParams();
    const stored = loadStored();
    const merged = mergeUtms(fromUrl, stored);
    const ref =
      typeof document !== 'undefined' && document.referrer
        ? document.referrer
        : undefined;
    const withRef = ref ? { ...merged, referrer: ref } : merged;

    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(withRef));
    } catch {
      /* ignore quota */
    }

    setUtm(withRef);
  }, []);

  return utm;
}
