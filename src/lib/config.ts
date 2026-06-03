export const SITE_URL = (import.meta.env.PUBLIC_SITE_URL || 'https://povstrike.com').replace(/\/$/, '');
export const WHATSAPP_NUMBER = import.meta.env.PUBLIC_WHATSAPP_NUMBER || '6280000000000';

export const buildAbsoluteUrl = (path = '/') => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
};

export const buildWhatsAppUrl = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
